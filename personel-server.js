/* ============================================================
   MİNİPAN — PERSONEL MESAİ SUNUCUSU (yerel ağ köprüsü)
   ------------------------------------------------------------
   Bu dosya kasa PC'de çalışır (node personel-server.js).
   Aynı WiFi'deki personel telefonlarının, uygulama kurmadan,
   tarayıcı üzerinden giriş / mola / çıkış basmasını sağlar.

   - Hiçbir npm paketi gerekmez (sadece Node.js kurulu olmalı).
   - Veriler bu klasördeki ./data altında JSON dosyalarında tutulur.
   - Kasa PC'nin index.html'i "Personel Giriş-Çıkış" ekranından bu
     sunucunun IP:port adresine bağlanır (Ayarlar formu).
   - QR içeriği bu sunucunun /g?sube=..&t=.. adresidir; telefon
     kamerasıyla okutulduğunda direkt tarayıcıda açılır.

   ÇALIŞTIRMA:
     1) Node.js kurun (https://nodejs.org - "LTS" sürüm yeterli)
     2) Bu dosyayı kasa PC'de bir klasöre koyun
     3) Terminal/CMD açıp: node personel-server.js
     4) Ekranda yazan "Yerel ağ adresi: http://X.X.X.X:9100" adresini
        index.html'deki "Personel Giriş-Çıkış" ayar formuna girin.
     5) Kasa PC'yi her açtığınızda bu sunucunun da çalışması gerekir
        (isterseniz Windows'ta "başlangıçta çalıştır" a ekleyin).
   ============================================================ */

const http = require("http");
const fs = require("fs");
const path = require("path");
const os = require("os");
const crypto = require("crypto");

const PORT = process.env.PORT || 9100;
const DATA_DIR = path.join(__dirname, "data");
const TOKEN_TTL_MS = 20 * 1000;     // QR her 20 saniyede bir yenilenir
const MOLA_TIPLERI = ["giris", "molaCikis", "molaGiris", "cikis"];

if (!fs.existsSync(DATA_DIR)) fs.mkdirSync(DATA_DIR, { recursive: true });

/* ── küçük dosya tabanlı veritabanı yardımcıları ── */
function subeKlasoru(sube) {
  const guvenli = String(sube).replace(/[^a-zA-Z0-9_ığüşöçİĞÜŞÖÇ-]/g, "_");
  const p = path.join(DATA_DIR, guvenli);
  if (!fs.existsSync(p)) fs.mkdirSync(p, { recursive: true });
  return p;
}
function oku(dosya, varsayilan) {
  try { return JSON.parse(fs.readFileSync(dosya, "utf-8")); }
  catch (e) { return varsayilan; }
}
function yaz(dosya, veri) {
  fs.writeFileSync(dosya, JSON.stringify(veri, null, 2), "utf-8");
}
function personelDosya(sube) { return path.join(subeKlasoru(sube), "personel.json"); }
function cihazDosya(sube) { return path.join(subeKlasoru(sube), "cihazlar.json"); }
function olayDosya(sube) { return path.join(subeKlasoru(sube), "olaylar.json"); }

/* ── rotasyonlu token (şube bazlı, bellekte tutulur) ── */
const TOKENLAR = {}; // { [sube]: {token, exp} }
function guncelToken(sube) {
  const simdi = Date.now();
  let t = TOKENLAR[sube];
  if (!t || t.exp <= simdi) {
    t = { token: crypto.randomBytes(12).toString("hex"), exp: simdi + TOKEN_TTL_MS };
    TOKENLAR[sube] = t;
  }
  return t;
}

/* ── personel durumu: son olaya göre içeride mi, molada mı ── */
function sonDurum(sube, personelId) {
  const olaylar = oku(olayDosya(sube), []);
  const kendi = olaylar.filter(o => o.personelId === personelId).sort((a, b) => a.ts - b.ts);
  if (!kendi.length) return "disarda";
  const son = kendi[kendi.length - 1];
  if (son.tip === "giris" || son.tip === "molaGiris") return "icerde";
  if (son.tip === "molaCikis") return "molada";
  return "disarda"; // cikis
}
function sonrakiTipler(durum) {
  if (durum === "disarda") return ["giris"];
  if (durum === "icerde") return ["molaCikis", "cikis"];
  if (durum === "molada") return ["molaGiris"];
  return ["giris"];
}

/* ── HTTP yardımcıları ── */
function gonderJson(res, kod, obj) {
  const body = JSON.stringify(obj);
  res.writeHead(kod, {
    "Content-Type": "application/json; charset=utf-8",
    "Access-Control-Allow-Origin": "*",
    "Access-Control-Allow-Methods": "GET,POST,OPTIONS",
    "Access-Control-Allow-Headers": "Content-Type"
  });
  res.end(body);
}
function gonderHtml(res, html) {
  res.writeHead(200, { "Content-Type": "text/html; charset=utf-8" });
  res.end(html);
}
function govdeOku(req) {
  return new Promise((resolve) => {
    let body = "";
    req.on("data", c => body += c);
    req.on("end", () => { try { resolve(JSON.parse(body || "{}")); } catch (e) { resolve({}); } });
  });
}

/* ── mobil giriş sayfası (QR okutulunca açılır) ── */
function mobilSayfaHtml(sube, token) {
  return `<!doctype html><html lang="tr"><head><meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>Personel Giriş — ${sube}</title>
<style>
  *{box-sizing:border-box}
  body{font-family:-apple-system,Segoe UI,Roboto,sans-serif;background:#efe7d6;margin:0;padding:20px;min-height:100vh;display:flex;align-items:center;justify-content:center}
  .kart{background:#fff;border-radius:20px;padding:26px 22px;max-width:380px;width:100%;box-shadow:0 8px 30px rgba(0,0,0,.12);text-align:center}
  h1{font-size:18px;margin:0 0 4px;color:#2d1d12}
  .alt{font-size:13px;color:#71492d;margin-bottom:18px}
  select,button{width:100%;padding:14px;border-radius:12px;border:1px solid #e3d9c2;font-size:15px;margin-bottom:10px}
  button{background:#71492d;color:#fff;border:none;font-weight:700;cursor:pointer}
  button:disabled{opacity:.5}
  .durum-etiket{font-size:13px;color:#583923;background:#f0e6dc;padding:10px;border-radius:10px;margin-bottom:14px}
  .mesaj{font-size:13px;color:#785342;margin-top:10px;min-height:18px}
  .basarili{color:#4a7c3f;font-weight:700}
</style></head><body>
<div class="kart">
  <h1>🕒 Personel Girişi</h1>
  <div class="alt">${sube}</div>
  <div id="alan">Yükleniyor…</div>
  <div id="mesaj" class="mesaj"></div>
</div>
<script>
const SUBE = ${JSON.stringify(sube)};
const TOKEN = ${JSON.stringify(token)};
const cihazId = localStorage.getItem("mp_cihaz_id_" + SUBE);

function mesajGoster(t, basarili){
  const m = document.getElementById("mesaj");
  m.textContent = t; m.className = "mesaj" + (basarili ? " basarili" : "");
}

async function basla(){
  if(!cihazId){ kimlikSecEkrani(); return; }
  const r = await fetch("/api/durum?cihazId=" + encodeURIComponent(cihazId) + "&sube=" + encodeURIComponent(SUBE));
  const d = await r.json();
  if(!d.ok){ localStorage.removeItem("mp_cihaz_id_" + SUBE); kimlikSecEkrani(); return; }
  aksiyonEkrani(d);
}

async function kimlikSecEkrani(){
  const r = await fetch("/api/personel/liste?sube=" + encodeURIComponent(SUBE));
  const liste = await r.json();
  const alan = document.getElementById("alan");
  if(!liste.length){ alan.innerHTML = "Bu şube için personel listesi henüz senkronlanmamış. Kasa ekranından 'Personel listesini senkronla' butonuna basın."; return; }
  alan.innerHTML = '<div class="durum-etiket">İlk kullanım — kendini seç</div>' +
    '<select id="personelSec"><option value="">İsminizi seçin</option>' +
    liste.map(p=>'<option value="'+p.id+'">'+p.ad+'</option>').join('') +
    '</select><button onclick="esle()">Devam Et</button>';
}
async function esle(){
  const sel = document.getElementById("personelSec");
  if(!sel.value){ mesajGoster("Lütfen isminizi seçin", false); return; }
  const r = await fetch("/api/esle", {
    method:"POST", headers:{"Content-Type":"application/json"},
    body: JSON.stringify({sube:SUBE, personelId: sel.value})
  });
  const d = await r.json();
  if(!d.ok){ mesajGoster(d.hata || "Eşleştirme başarısız", false); return; }
  localStorage.setItem("mp_cihaz_id_" + SUBE, d.cihazId);
  mesajGoster("✓ Telefon tanıtıldı, tekrar QR'ı okutabilirsiniz", true);
  setTimeout(basla, 800);
}

const TIP_ETIKET = { giris:"✓ Giriş Yap", molaCikis:"☕ Mola Başlat", molaGiris:"▶️ Mola Bitir", cikis:"🚪 İş Çıkışı" };
function aksiyonEkrani(d){
  const alan = document.getElementById("alan");
  alan.innerHTML = '<div class="durum-etiket">Merhaba, <b>'+d.ad+'</b><br>Durum: '+durumMetni(d.durum)+'</div>' +
    d.sonrakiTipler.map(t=>'<button onclick="olayGonder(\\''+t+'\\')">'+TIP_ETIKET[t]+'</button>').join('');
}
function durumMetni(d){ return d==="icerde" ? "✓ İçeride" : d==="molada" ? "☕ Molada" : "🚪 Dışarıda"; }

async function olayGonder(tip){
  const r = await fetch("/api/olay", {
    method:"POST", headers:{"Content-Type":"application/json"},
    body: JSON.stringify({sube:SUBE, cihazId, token:TOKEN, tip})
  });
  const d = await r.json();
  if(!d.ok){ mesajGoster(d.hata || "Kod süresi doldu, QR'ı tekrar okutun", false); return; }
  mesajGoster("✓ Kaydedildi: " + TIP_ETIKET[tip], true);
  document.getElementById("alan").innerHTML = "";
  setTimeout(()=>{ window.close(); }, 1500);
}

basla();
</script>
</body></html>`;
}

/* ── sunucu ── */
const server = http.createServer(async (req, res) => {
  const u = new URL(req.url, "http://localhost");
  const p = u.pathname;

  if (req.method === "OPTIONS") { gonderJson(res, 200, {}); return; }

  try {
    if (p === "/" && req.method === "GET") {
      gonderHtml(res, "<h1>MİNİPAN Personel Sunucusu çalışıyor ✓</h1><p>Kasa ekranındaki ayar formuna bu bilgisayarın yerel ağ IP adresini girin.</p>");
      return;
    }

    if (p === "/g" && req.method === "GET") {
      const sube = u.searchParams.get("sube") || "";
      const token = u.searchParams.get("t") || "";
      gonderHtml(res, mobilSayfaHtml(sube, token));
      return;
    }

    if (p === "/api/token" && req.method === "GET") {
      const sube = u.searchParams.get("sube") || "";
      const t = guncelToken(sube);
      gonderJson(res, 200, { token: t.token, exp: t.exp });
      return;
    }

    if (p === "/api/personel/senkron" && req.method === "POST") {
      const b = await govdeOku(req);
      yaz(personelDosya(b.sube || ""), b.liste || []);
      gonderJson(res, 200, { ok: true, sayi: (b.liste || []).length });
      return;
    }

    if (p === "/api/personel/liste" && req.method === "GET") {
      const sube = u.searchParams.get("sube") || "";
      gonderJson(res, 200, oku(personelDosya(sube), []));
      return;
    }

    if (p === "/api/esle" && req.method === "POST") {
      const b = await govdeOku(req);
      const sube = b.sube || "", personelId = b.personelId || "";
      const personel = (oku(personelDosya(sube), [])).find(x => x.id === personelId);
      if (!personel) { gonderJson(res, 400, { ok: false, hata: "Personel bulunamadı" }); return; }
      const cihazlar = oku(cihazDosya(sube), {});
      const cihazId = crypto.randomBytes(16).toString("hex");
      cihazlar[cihazId] = { personelId, ad: personel.ad, olusturmaTs: Date.now() };
      yaz(cihazDosya(sube), cihazlar);
      gonderJson(res, 200, { ok: true, cihazId });
      return;
    }

    if (p === "/api/durum" && req.method === "GET") {
      const sube = u.searchParams.get("sube") || "";
      const cihazId = u.searchParams.get("cihazId") || "";
      const cihazlar = oku(cihazDosya(sube), {});
      const c = cihazlar[cihazId];
      if (!c) { gonderJson(res, 200, { ok: false }); return; }
      const durum = sonDurum(sube, c.personelId);
      gonderJson(res, 200, { ok: true, ad: c.ad, durum, sonrakiTipler: sonrakiTipler(durum) });
      return;
    }

    if (p === "/api/olay" && req.method === "POST") {
      const b = await govdeOku(req);
      const sube = b.sube || "", cihazId = b.cihazId || "", token = b.token || "", tip = b.tip || "";
      const guncel = TOKENLAR[sube];
      if (!guncel || guncel.token !== token || guncel.exp <= Date.now()) {
        gonderJson(res, 400, { ok: false, hata: "QR kodunun süresi doldu, tekrar okutun" });
        return;
      }
      const cihazlar = oku(cihazDosya(sube), {});
      const c = cihazlar[cihazId];
      if (!c) { gonderJson(res, 400, { ok: false, hata: "Cihaz tanınmıyor" }); return; }
      if (!MOLA_TIPLERI.includes(tip)) { gonderJson(res, 400, { ok: false, hata: "Geçersiz işlem" }); return; }
      const durum = sonDurum(sube, c.personelId);
      if (!sonrakiTipler(durum).includes(tip)) {
        gonderJson(res, 400, { ok: false, hata: "Bu işlem şu an geçerli değil (durum: " + durum + ")" });
        return;
      }
      const olaylar = oku(olayDosya(sube), []);
      olaylar.push({ personelId: c.personelId, ad: c.ad, tip, ts: Date.now() });
      yaz(olayDosya(sube), olaylar);
      gonderJson(res, 200, { ok: true });
      return;
    }

    if (p === "/api/duzelt" && req.method === "POST") {
      // Yönetici manuel düzeltme: eksik/unutulan bir olayı elle ekler
      const b = await govdeOku(req);
      const sube = b.sube || "", personelId = b.personelId || "", tip = b.tip || "", tarihSaat = b.tarihSaat || "";
      if (!MOLA_TIPLERI.includes(tip)) { gonderJson(res, 400, { ok: false, hata: "Geçersiz işlem tipi" }); return; }
      const personel = (oku(personelDosya(sube), [])).find(x => x.id === personelId);
      const ts = tarihSaat ? new Date(tarihSaat).getTime() : Date.now();
      const olaylar = oku(olayDosya(sube), []);
      olaylar.push({ personelId, ad: personel ? personel.ad : personelId, tip, ts, manuel: true });
      yaz(olayDosya(sube), olaylar);
      gonderJson(res, 200, { ok: true });
      return;
    }

    if (p === "/api/canli" && req.method === "GET") {
      const sube = u.searchParams.get("sube") || "";
      const personel = oku(personelDosya(sube), []);
      const sonuc = [];
      personel.forEach(pp => {
        const durum = sonDurum(sube, pp.id);
        if (durum === "icerde" || durum === "molada") {
          const olaylar = oku(olayDosya(sube), []).filter(o => o.personelId === pp.id).sort((a, b) => a.ts - b.ts);
          const son = olaylar[olaylar.length - 1];
          sonuc.push({ ad: pp.ad, durum, saat: son ? new Date(son.ts).toLocaleTimeString("tr-TR", { hour: "2-digit", minute: "2-digit" }) : "" });
        }
      });
      gonderJson(res, 200, sonuc);
      return;
    }

    if (p === "/api/rapor" && req.method === "GET") {
      const sube = u.searchParams.get("sube") || "";
      const from = u.searchParams.get("from") || "";
      const to = u.searchParams.get("to") || "";
      const fromTs = from ? new Date(from + "T00:00:00").getTime() : 0;
      const toTs = to ? new Date(to + "T23:59:59").getTime() : Date.now();
      const olaylar = oku(olayDosya(sube), []).filter(o => o.ts >= fromTs && o.ts <= toTs);
      const kisiler = {};
      olaylar.forEach(o => { (kisiler[o.personelId] = kisiler[o.personelId] || { ad: o.ad, olaylar: [] }).olaylar.push(o); });

      const personeller = Object.values(kisiler).map(k => {
        const gunGrup = {};
        k.olaylar.sort((a, b) => a.ts - b.ts).forEach(o => {
          const gun = new Date(o.ts).toISOString().slice(0, 10);
          gunGrup[gun] = gunGrup[gun] || [];
          gunGrup[gun].push(o);
        });
        let haftaToplamDk = 0;
        const gunler = Object.keys(gunGrup).sort().map(gun => {
          const evs = gunGrup[gun];
          const giris = evs.find(e => e.tip === "giris");
          const cikis = [...evs].reverse().find(e => e.tip === "cikis");
          let molaDk = 0;
          for (let i = 0; i < evs.length; i++) {
            if (evs[i].tip === "molaCikis") {
              const bitis = evs.slice(i + 1).find(e => e.tip === "molaGiris");
              if (bitis) molaDk += Math.round((bitis.ts - evs[i].ts) / 60000);
            }
          }
          let netDk = 0;
          if (giris && cikis) netDk = Math.max(0, Math.round((cikis.ts - giris.ts) / 60000) - molaDk);
          haftaToplamDk += netDk;
          return {
            tarih: gun,
            giris: giris ? new Date(giris.ts).toLocaleTimeString("tr-TR", { hour: "2-digit", minute: "2-digit" }) : "",
            cikis: cikis ? new Date(cikis.ts).toLocaleTimeString("tr-TR", { hour: "2-digit", minute: "2-digit" }) : "",
            molaDk, netDk
          };
        });
        return { ad: k.ad, gunler, haftaToplamDk };
      });
      gonderJson(res, 200, { personeller });
      return;
    }

    gonderJson(res, 404, { ok: false, hata: "Bulunamadı" });
  } catch (e) {
    gonderJson(res, 500, { ok: false, hata: String(e) });
  }
});

server.listen(PORT, () => {
  const arayuzler = os.networkInterfaces();
  console.log("═══════════════════════════════════════════════");
  console.log(" MİNİPAN Personel Sunucusu çalışıyor");
  console.log(" Port:", PORT);
  Object.values(arayuzler).flat().forEach(a => {
    if (a.family === "IPv4" && !a.internal) {
      console.log(" Yerel ağ adresi: http://" + a.address + ":" + PORT);
    }
  });
  console.log(" Bu adresi kasa ekranındaki 'Personel Giriş-Çıkış' ayar formuna girin.");
  console.log("═══════════════════════════════════════════════");
});
