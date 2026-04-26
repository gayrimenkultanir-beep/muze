/* ============================================================
   content.js — Tur Durak Verileri
   Her durak: t(başlık), s(alt başlık), m(metin), q(soru),
              a(ses dosyası), g(galeri), btnNext(buton etiketi)
   ============================================================ */

const tourData = [
  {
    t: "🏛️ Sultan II. Bayezid Külliyesi\nSağlık Müzesi",
    s: "✨ ŞİFA YOLCULUĞU — MÜZE GİRİŞİ",
    m: "👑 **TARİH:**\nŞu an Edirne'nin en çok ilgi çeken tarihi alanlarından birinde, Sultan II. Bayezid Külliyesi Sağlık Müzesindesiniz. Tarih ile şifanın buluştuğu bu alana hoş geldiniz.\n\n🏗️ **YAPI:**\nFatih Sultan Mehmet'in oğlu ve 8. Osmanlı Padişahı Sultan II. Bayezid tarafından, dönemin mimarbaşı Hayrettin'e yaptırılan bu yapılar topluluğu, Osmanlı külliyeleri içinde günümüze en sağlam olarak ulaşmış olanıdır. Merkezinde cami, sağında darüşşifa ve medrese, solunda imaret ve kiler, caminin yanlarında misafirhane ve Tunca Nehri üzerindeki köprüsüyle Osmanlı'nın sosyal devlet anlayışını en güçlü biçimde yansıtır.\n\n🎧 **REHBER:**\nKülliyeyi ve müzemizi daha bilinçli gezmek için yazılı, sesli ve görsel rehberlik hizmeti sunuyoruz.\n\n📍 **KONUM:**\nŞu an bilet gişesini geçtiniz ve ön bahçedesiniz. Tam karşıdaki duvardaki büyük külliye fotoğrafının önünde durup yapılar topluluğunun Edirne'deki konumunu inceleyiniz.",
    q: "👣 Büyük fotoğrafı inceledikten sonra hemen sol taraftaki kapıdan Darüşşifa'nın bahçesine giriniz.",
    btnNext: "🚶 Zamanda Yolculuğa Başla ➡",
    a: "assets/audio/rehber-1.mp3",
    g: ["assets/img/intro.webp"],
    evliya: "Hoş geldiniz! Bu 500 yıllık şifa yurdunu birlikte keşfedelim. Ben Evliya Çelebi, dijital rehberinizim. 🎭"
  },
  {
    t: "Darüşşifa Girişi\n🏛️ Adalet ve Şifa Kapısı",
    s: "⚖️ ŞİFANIN İLK DURAĞI",
    m: "🏥 **DARÜŞŞİFA 1. AVLU:**\nŞu anda Osmanlı'nın önemli şifa merkezlerinden biri olan Edirne Darüşşifası'nın ilk avlusundasınız.\n\n🌍 **TARİHSEL ÖNEM:**\nBu yapı, merkezi ve ayrıntılı planlanmış hastanelerin tarihteki ilk örneklerinden biri kabul edilir. Batı'daki benzerlerine ancak yaklaşık 200 yıl sonra rastlanan bu hastanede, tedavi ve hizmet alanları döneminin ötesinde bir mimari anlayışla tasarlanmıştır.\n\n🛏️ **HİZMET BİRİMLERİ:**\nGirişin hemen solundaki dört oda; personel odası, çamaşırhane, diyet mutfağı ve kilerdir.\n\n🩺 **POLİKLİNİK ODALARI:**\nSağdaki altı oda poliklinik odalarıdır. Günlük muayene, bakım ve acil müdahaleler burada yapılırdı. Kuruluşta bir oda kehhal (göz hekimi) odası olarak ayrılmıştı.\n\n💧 **SÜT KUYUSU:**\nİçindeki suyun yeni doğum yapan annelerin sütünü artırdığına inanıldığı için \"Süt Kuyusu\" adını almıştır.",
    q: "🎬 Görsel ve işitsel bir yolculukla bu devasa yapının sırlarını keşfetmeye hazırsanız, sunumumuzu başlatalım.",
    btnNext: "Sunum Odasına Giriş ➡",
    a: "assets/audio/rehber-2.mp3",
    g: ["assets/img/01.webp"]
  },
  {
    t: "Sunum Odasından Çıkış:\n🏛️ Bilgiden Deneyime",
    s: "🏛️ İDARE VE NİZAM",
    m: "🚪 **2. AVLUYA GEÇİŞ:**\nSunum odasından çıkar çıkmaz soldaki görkemli kapıdan geçip yönetici odalarının bulunduğu ikinci avluya geçiniz.\n\n🏛️ **YÖNETİCİ ODALARI:**\nBu avluda sağda ve solda ikişerden 4 oda bulunur. Hekimbaşı ve diğer hekimler bu odaları kullanır; hastanenin tüm işleri burada planlanıp yürütülürdü. Külliyenin yapıldığı yıllarda 1 hekimbaşı, 2 hekim, 2 cerrah, 2 göz hekimi ve 1 eczacı görev yapardı.\n\n🔒 **İDARİ BÖLÜM:**\nBu bölüm, birinci avludaki günlük hasta sirkülasyonuyla yataklı tedavi bölümü arasında koruyucu bir bariyer oluşturur.\n\n✨ **KİTABE:**\nŞimdi kapının üzerindeki kitabeyi okuduktan sonra içeri giriniz.",
    q: "🚶 Müzik ve su sesinin şifayla buluştuğu bu büyülü alana giriniz.",
    btnNext: "Büyük Şifahaneyi Keşfet ➡",
    a: "assets/audio/rehber-3.mp3",
    g: ["assets/img/02.webp"]
  },
  {
    t: "Büyük Şifahane (Sekizgen Bölüm)\n🏛️ Darüşşifa Eşiği",
    s: "🌊 RUHUN ŞİFAYA KAVUŞTUĞU ZİRVE",
    m: "🏥 **YATAKLI TEDAVİ BÖLÜMÜ:**\nŞu an müzemizin kalbinde ve Edirne Darüşşifası'nın yataklı tedavi bölümündesiniz.\n\n🌊 **HASTANENİN YAPISI:**\nOrtada suyu belli ritimle akan bir şadırvan, hemen karşıda müzik sahnesi. 6 kışlık, 4 yazlık hasta odası. Geniş kubbedeki aydınlatma feneri kötü kokuları dışarı atarken, zemindeki meyilli döşeme ve kanallar kolay temizlik sağlar.\n\n🎵 **MÜZİKLE TEDAVİ:**\n10 kişilik musiki grubu, hekimlerin önerisiyle her hastalığa göre farklı makamlar çalıp söylerdi.\n\n💧 **SUYLA TEDAVİ:**\nŞadırvandan akan suyun sesi hastaları rahatlatmak için özenle tasarlanmıştı.\n\n🌿 **KOKU TEDAVİSİ:**\nAvlu ve çevresinde yetiştirilen bitkilerin kokuları da tedavinin ayrılmaz bir parçasıydı.\n\n🧺 **MEŞGULİYET TEDAVİSİ:**\nSepet örmek, el işi yapmak gibi uğraşlarla hastalar dertlerinden uzaklaştırılırdı.",
    q: "🏫 TIP MEDRESESİNE DOĞRU: Darüşşifadan çıkıp büyük fotoğrafın olduğu giriş bahçesinin sol tarafındaki Tıp Medresesi'ne yürüyünüz.",
    btnNext: "Medreseye Yol ➡",
    a: "assets/audio/rehber-4.mp3",
    g: ["assets/img/11.webp"]
  },
  {
    t: "Şifadan Bilgiye:\n🎓 Medrese-i Etibba",
    s: "HEKİMLERİN YETİŞTİĞİ OCAK",
    m: "🎓 **TIP MEDRESESİ:**\nOsmanlı'nın tıp eğitimi verdiği bu medrese, teorik ve pratik eğitimi bir arada sunan çığır açıcı bir yapıydı.\n\n📚 **EĞİTİM SİSTEMİ:**\nÖğrenciler medresede teorik dersler alır, Darüşşifada hastalara bakarak pratik yapardı. Bu model çağdaş tıp eğitiminin temeli sayılır.\n\n🏛️ **AVLU DÜZENİ:**\nRevaklı avlu etrafında dizili hücreler öğrenci odalarıdır. Her oda bir öğrenciyi barındırır; ısınma için küçük ocaklar vardır.\n\n🌿 **HEKİMLİK ANLAYIŞI:**\nOsmanlı hekimleri yalnızca bedeni değil, ruhu da iyileştirmeyi amaçlardı. Bu bütüncül yaklaşım modern tıpta yeniden keşfedilmektedir.",
    q: "Caminin görkemli avlusuna hazır mısınız?",
    btnNext: "Caminin Görkemine Doğru ➡",
    a: "assets/audio/rehber-5.mp3",
    g: ["assets/img/03.webp"]
  },
  {
    t: "Sükunet ve Işığın Buluşması:\n🌿 Avluya ve Ferahlığa Dönüş",
    s: "🌿 RUHANİ DİNGİNLİĞE ADIM",
    m: "🌳 **BAHÇEYE GEÇİŞ:**\nDarüşşifa ve Medrese bölümlerini gezdikten sonra caminin bahçesine geçtiniz. Asırlık çınar ağaçlarının arasında yürürken karşınızdaki İmarethane'ye doğru ilerleyiniz.\n\n💧 **SU TERAZİSİ:**\nSağ köşedeki 4 metrelik dikdörtgen taş yapı, külliyenin su terazisidir. Yüksek tepelerden borularla gelen sular burada basınçlanarak külliyenin tüm birimlerine dağıtılırdı.\n\n🕌 **CAMİ TAÇ KAPISI:**\nSu terazisini geçtikten sonra caminin muhteşem taç kapısı sizi karşılar. Bu ziyareti gezimizin sonuna bırakıyoruz.\n\n🏛️ **KİLER VE İMARET:**\nKarşınızdaki iki yapıdan solda kiler ve fodlahane (fırın), sağda İmarethane bulunmaktadır.",
    q: "🍲 Osmanlı'nın imaret kültürünü görmeye ve Aşçı Yahya Baba efsanesini dinlemeye hazır mısınız? Biletinizi göstererek turnikeden giriniz.",
    btnNext: "Bereketin ve Paylaşmanın Kalbi ➡",
    a: "assets/audio/rehber-6.mp3",
    g: ["assets/img/04.webp"]
  },
  {
    t: "Sosyal Devletin Merkezi:\n🎓 İmarethane",
    s: "KAZANIN HİÇ SÖNMEYEN ATEŞİ",
    m: "🏛️ **İMARETLER:**\nOsmanlı'da imaretler, yoksullara, yolculara, öğrencilere ücretsiz yemek dağıtan sosyal dayanışma yapılarıydı.\n\n🍲 **SULTAN II. BAYEZİD İMARETİ:**\nVakfiyeye göre burada günde üç öğün yemek pişirilir, fakir fukaraya dağıtılırdı.\n\n📖 **YAHYA BABA EFSANESİ:**\nAşçıbaşı Yahya Baba, yaptığı pilavla hem hastaları doyurur hem artan pilavı Tunca Nehri'ndeki balıklara verirdi. Kilercibaşı pirinç miktarını azaltsa da pilav yetişirdi. Bu durum padişaha kadar ulaşınca sultan yerinde görmek için nehir kenarına saklandı.\n\n🐟 **MUCİZE:**\nPadişah çıkıp \"Hastaların nafakasını suya mı dökersin?\" diye bağırdığında Yahya Baba tutukluk yaşadı. Tam o an balıklar başlarını sudan çıkarıp \"Bizim rızkımıza mı göz diker?\" diye dile geldi.\n\n🤲 **YAHYA BABA'NIN VEDASI:**\nHatasını anlayan padişah özür dilemek isterken Yahya Baba secdeye kapanmış, orada ruhunu teslim etmişti. Türbesi şimdi imaretin hemen arkasındadır.",
    q: "Biraz yorulduysak Külliye Misafirhanesi'nde kısa bir molaya ne dersiniz?",
    btnNext: "Müze Kafe'ye Doğru ➡",
    a: "assets/audio/rehber-7.mp3",
    g: ["assets/img/16.webp"]
  },
  {
    t: "Ruhanî Atmosfere Hazırlık:\n🕌 Cami Avlusu",
    s: "TEK KUBBE, SONSUZ HUZUR",
    m: "Caminin devasa taç kapısından içeri süzüldüğünüzde mermer işçiliğinin zarafeti sizi karşılar.\n\n⛲ **ŞADIRVANLI AVLUNUN KALBİ:**\nAvlunun ortasındaki zarif şadırvandan yükselen su sesi taşın sessizliğiyle buluşur.\n\n🏛️ **SÜTUNLAR VE MİMARİ DENGE:**\nEtrafınızı saran mermer sütunlar farklı mermerlerden yapılmıştır. Bu çeşitlilik Osmanlı'nın estetik zenginliğini ve düzen içindeki gizli güzelliği anlatır.\n\n✨ **SON HİS:**\nBu avluda hissettiğiniz şey yalnızca bir mekân değil; yüzyıllardır değişmeyen bir sükûnet duygusudur.",
    q: "Mabedin içindeki o büyük boşluğa ve huzura geçelim mi?",
    btnNext: "İç Mekâna İlerle ➡",
    a: "assets/audio/24.mp3",
    g: ["assets/img/24.webp"]
  },
  {
    t: "Veda Vakti:\n🌊 Gönül Köprüsüne Davet",
    s: "BU HİKAYEDE SİZİN DE İZİNİZ OLSUN",
    m: "🏛️ Adım adım geçmişin izlerine dokunduk, bu muazzam mimariyi birlikte soluduk. Şimdi bu tarihi mekâna kendi nefesinizi katma vakti.\n\n💭 **İçinizde Yankılananlar…**\nBir anlık huzur, derin bir hayranlık ya da kalbinizde kalan o sessiz tını…\n\n📖 Sizler için hazırladığımız **Ziyaretçi Defteri**, bu deneyimin manevi bir arşividir.\n\n🖋️ **Buraya bırakacağınız her cümle:**\nBizim için paha biçilemez bir anı, diğer misafirlerimiz için bu yolculuğu anlamlandıran bir ışık olacaktır.\n\n✨ Kalbinizden süzülenleri bizimle paylaşın, Gönül Köprüsü'nde ebedî bir iziniz kalsın…",
    q: "✍️ Gönül Köprüsü sayfamızda duygularınızı paylaşmaya davet ediyoruz.",
    btnNext: "🖋️ Gönül Köprüsüne Yaz",
    a: "assets/audio/31.mp3",
    g: ["assets/img/31.webp"]
  }
];
