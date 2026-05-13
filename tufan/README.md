# 🎙 Tufan's Studio — Karaoke DAW

Ali İhsan Tufan'a, İbrahim Kahraman tarafından armağan edilmiştir.

## 📲 Telefona Uygulama Olarak Kurulum

### Adım 1 — GitHub'a Yükle

1. [github.com](https://github.com) hesabına giriş yap
2. **New repository** → isim ver (örn: `tufan-studio`) → **Public** seç → **Create**
3. Bu 4 dosyayı aynı repoya yükle:
   - `index.html`
   - `sw.js`
   - `manifest.json`
   - `icon-192.svg`
   - `icon-512.svg`

### Adım 2 — GitHub Pages'i Aç

1. Repo → **Settings** → **Pages**
2. **Source**: `Deploy from a branch`
3. **Branch**: `main` / `(root)` → **Save**
4. Birkaç dakika bekle → URL belirir:
   ```
   https://KULLANICI-ADIN.github.io/tufan-studio/
   ```

### Adım 3 — Telefona Kur

#### 🤖 Android (Chrome)
1. Chrome'da yukarıdaki URL'yi aç
2. Birkaç saniye sonra **"Uygulamayı yükle"** bildirimi çıkar
3. YA DA üst barda **📲 KUR** butonuna bas
4. → Ana ekranda **Tufan's Studio** ikonu belirir ✅

#### 🍎 iPhone / iPad (Safari)
1. **Safari**'de URL'yi aç (Chrome iOS'ta kuramazasın!)
2. Alt çubuktaki **⬆ Paylaş** ikonuna dokun
3. **"Ana Ekrana Ekle"** → **Ekle**
4. → Ana ekranda ikon belirir ✅

---

## 🎵 Özellikler
- 3 kanal: MP3 + Video/Görsel + Vokal kayıt
- EQ, Compressor, FX efektleri
- Proje kaydetme / yükleme (IndexedDB)
- Klip kesme, trim, fade, normalize
- Export: WAV / MP3 / OGG
- **Çevrimdışı çalışır** (Service Worker)

## 🔒 İzinler
- **Mikrofon**: Kayıt için gerekli — GitHub Pages HTTPS olduğu için sorunsuz çalışır

---
Made with ❤️ — Tufan's Studio PWA
