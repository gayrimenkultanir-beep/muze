// content.js - Sultan II. Bayezid Külliyesi Tüm Kurgu Verisi

const tourData = [
    {
        id: 0,
        baslik: "EŞİĞE DAVET",
        altBaslik: "Sultan II. Bayezid Külliyesi'ne Hoş Geldiniz",
        ses: "audio/00_esige_davet.mp3",
        metin: "Zamanın durduğu, şifanın taşlara, musikinin kubbelere kazındığı Sultan II. Bayezid Külliyesi’ne hoş geldiniz. Birazdan adım atacağınız bu mekan, sadece bir yapılar topluluğu değil; Osmanlı’nın insan ruhuna duyduğu derin saygının 500 yıllık mühürüdür. Rehberiniz sesimiz, pusulanız ise ruhunuz olsun.",
        soru: "Bu eşsiz zaman yolculuğuna başlamaya hazır mısınız?",
        galeri: ["img/intro1.jpg", "img/intro2.jpg"]
    },
    {
        id: 1,
        baslik: "MEDENİYETİN MÜHRÜ",
        altBaslik: "Büyük Avlu ve Külliyenin Ruhu",
        ses: "audio/01_medeniyetin_muhru.mp3",
        metin: "Biletlerinizi alıp o büyük ana kapıdan içeri süzüldüğünüz an, sizi Sultan II. Bayezid’in hayalindeki o kusursuz nizam karşılar. Burası sadece binalar topluluğu değil, insanın ruhuna, bedenine ve karnına hitap eden dev bir organizasyondur. Meydanın tam merkezinde durduğunuzda: Tam karşınızda külliyenin manevi direği Camii’yi, hemen yanında misafirlerin sığınağı Tabhaneleri, solunuzda bacası tüten İmarethaneyi, sağınızda ise şifa ve ilim yuvası olan Darüşşifa ile Medreseyi görürsünüz. 1484-1488 yılları arasında Mimar Hayrettin tarafından inşa edilen bu yapı, 'halka hizmetin hakka hizmet olduğu' inancının taşa bürünmüş halidir.",
        soru: "Darüşşifa’nın o vakur giriş kapısından geçerek, şifanın dış dünyaya açılan yüzüne girmeye hazır mısınız?",
        galeri: ["img/avlu1.jpg", "img/kulliye_plan.jpg"]
    },
    {
        id: 2,
        baslik: "ŞİFAYA AÇILAN KAPI",
        altBaslik: "Darüşşifa 1. Avlu ve Sunum Odası",
        ses: "audio/02_sifaya_acilan_kapi.mp3",
        metin: "Darüşşifa’nın o heybetli taç kapısından içeriye doğru süzüldüğünüzde, dış dünyanın gürültüsünün yerini taşın serinliğine bıraktığını hissedeceksiniz. Şu an 1. Avlu’dasınız. Etrafınızı saran revaklar ve küçük kubbeler buraya eşsiz bir ritim katar. Sağ taraftaki Sunum Odası'na girdiğinizde sizi loş ve mistik bir atmosfer karşılar. Burada, Avrupa’da ruh hastaları dışlanırken bu topraklarda nasıl su sesi ve müzikle tedavi edildiklerini, Sultan’ın vizyonunu ve Evliya Çelebi’nin burayı 'dünya üzerinde benzeri olmayan bir şifahane' olarak anlatışını tüm detaylarıyla öğreneceksiniz.",
        soru: "Sunum odasının o etkileyici atmosferinden çıkıp, poliklinik odalarını tek tek gezmeye hazır mısınız?",
        galeri: ["img/darussifa_giris.jpg", "img/sunum_odasi.jpg"]
    },
    {
        id: 3,
        baslik: "ESKİ TIBBIN İZİNDE",
        altBaslik: "Poliklinikler ve Eczane (Şerbethane)",
        ses: "audio/03_eski_tibbin_izinde.mp3",
        metin: "Revakların altından ağır adımlarla ilerleyelim. Her kapının ardında 500 yıl öncesinin tıp dehası gizli. Hekim ve Kehhal (Göz) Odası'nda en ileri göz cerrahisi yöntemlerini, Cerrahi Müdahale Odası'nda fıtık ameliyatlarından dağlama tekniklerine kadar uzanan uzmanlığı görebilirsiniz. Sol kanada geçtiğinizde ise burnunuza gelen baharat kokularını takip edin; burası Eczane ve Şerbethane. Dev havanlarda dövülen kök bitkilerini ve hastalara birer ilaç gibi sunulan lezzetli meyve şerbetlerinin hazırlandığı o hummalı çalışmaya şahitlik edin.",
        soru: "İdarenin sessizliğine, yani o meşhur 'Dar Kapı'dan geçerek 2. Avlu’ya süzülmeye hazır mısınız?",
        galeri: ["img/eczane.jpg", "img/cerrahi.jpg"]
    },
    {
        id: 4,
        baslik: "SÜKUNETİN EŞİĞİ",
        altBaslik: "Dar Kapı ve İdari Merkez (2. Avlu)",
        ses: "audio/04_sukunetin_esigi.mp3",
        metin: "Tam karşınızda duran o basık ve Dar Kapı'dan geçerken başınızı hafifçe eğin. Bu kapı bir ses filtresidir; içeri girdiğiniz an dışarının uğultusu bıçak gibi kesilir. Şu an Darüşşifa’nın beyni olan 2. Avlu’dasınız. Burası nizamın ve disiplinin kalbidir. Başhekim odası, hastaların kayıtlarını tutan katiplerin çalışma alanları ve en değerli ilaç özlerinin saklandığı serin depolar buradadır. Adımlarınızın yankısı bile burada daha azdır; her şey sizi o büyük mucizeye hazırlar.",
        soru: "Kapısında 'Ya Şafi' yazan o sekizgen cennete, Büyük Şifahane’ye girmeye hazır mısınız?",
        galeri: ["img/dar_kapi.jpg", "img/idari_avlu.jpg"]
    },
    {
        id: 5,
        baslik: "SUYUN VE MUSİKİNİN MUCİZESİ",
        altBaslik: "Büyük Şifahane (Sekizgen Yapı)",
        ses: "audio/05_suyun_ve_musikinin_mucizesi.mp3",
        metin: "İçeri girdiğiniz an sizi devasa bir sekizgen yapı ve başınızı kaldırdığınızda gökyüzü gibi üzerinize çöken o görkemli Merkezi Kubbe karşılar. Tam ortadaki şadırvandan yükselen suyun sesi, koğuşlardaki hastaların mahremiyetini koruyan bir perde, ruhlarını iyileştiren bir ilaçtır. Hemen arkadaki Musiki Sekisi'nde icra edilen ney, ud ve kanun nağmelerini hayal edin. Yazlık eyvanlarda nehir manzarasına karşı dinlenen, kışlık koğuşlarda ise ocak başında kandil ışığında şifa bulan hastaların huzuruna ortak olun.",
        soru: "Ruhunuzun su sesiyle yıkandığını hissettiyseniz, hekimlerin yetiştiği Tıp Medresesi’ne yönelmeye hazır mısınız?",
        galeri: ["img/sadirvan.jpg", "img/sekizgen_yapi.jpg"]
    },
    {
        id: 6,
        baslik: "HEKİMLERİN YETİŞTİĞİ OCAK",
        altBaslik: "Medrese-i Etıbba (Tıp Fakültesi)",
        ses: "audio/06_hekimlerin_yetistigi_ocak.mp3",
        metin: "Darüşşifa’dan çıkıp hemen yanındaki ikizi gibi duran Medrese-i Etıbba’ya giriyoruz. Burası dönemin en prestijli tıp fakültesidir. Avlunun etrafını çevreleyen o küçük kapılı öğrenci hücrelerine bakın; mum ışığında sabahlayan genç hekim adaylarının çalışma azmini hissedin. Tam karşınızdaki Büyük Dershane'de başmüderrisin kadavralar ve tıbbi bitkiler üzerine anlattığı dersleri zihninizde canlandırın. Burada teoriyi öğrenen talebe, birkaç adım ötedeki şifahanede bu bilgiyi bizzat hastalar üzerinde uygulayarak pişerdi.",
        soru: "İlim kokan bu avludan ayrılıp, külliyenin manevi kalbi olan Camii’ye yönelmeye hazır mısınız?",
        galeri: ["img/medrese_avlu.jpg", "img/dershane.jpg"]
    },
    {
        id: 7,
        baslik: "VAHDETİN KUBBESİ",
        altBaslik: "Sultan II. Bayezid Camii ve Tabhaneler",
        ses: "audio/07_vahdetin_kubbesi.mp3",
        metin: "Külliyenin en heybetli yapısı olan Camii’nin taç kapısından içeri süzülüyoruz. Ayakkabılarınızı bıraktığınız o eşikten sonra ayaklarınızın altındaki yumuşak halının dokusunu ve sizi karşılayan o uçsuz bucaksız huzuru hissedeceksiniz. Başınızı kaldırın; tek ve devasa bir kubbe... Bu, Osmanlı mimarisinde 'Vahdet'i, yani birliği simgeler. Pencerelerden süzülen ışık huzmeleri altında mihrap ve minberin mermer işçiliğini inceleyin. Ardından camiye bitişik olan Tabhanelere süzülün; burası uzak yollardan gelen misafirlerin, dervişlerin sığındığı şefkatli bir limandır.",
        soru: "Caminin huzurundan çıkıp, vefa durağımız olan Yahya Baba’nın manevi huzuruna uğramaya hazır mısınız?",
        galeri: ["img/cami_ic.jpg", "img/tabhane.jpg"]
    },
    {
        id: 8,
        baslik: "VEFA BAHÇESİ",
        altBaslik: "Hazire ve Yahya Baba",
        ses: "audio/08_vefa_bahcesi.mp3",
        metin: "Caminin o vakur sessizliğinden ayrılıp bahçenin serinliğine, Hazire bölümüne adım atıyoruz. Burada dünya telaşı tamamen susar. Sultan’ın kızı Meryem Sultan ve külliyenin manevi bekçisi Yahya Baba yan yana ebedi uykularındadır. Yahya Baba, külliyenin inşasında işçilere yemek pişiren, bereketiyle tanınan bir derviştir. Onun mezarı başında durduğunuzda, bu devasa yapılar topluluğunun sadece taştan değil, derin bir inanç ve gönül birliğinden yükseldiğini bir kez daha anlayacaksınız.",
        soru: "Bu manevi ziyaretten sonra, bereketli sofraların kalbi olan İmarethaneye geçmeye hazır mısınız?",
        galeri: ["img/hazire.jpg", "img/yahya_baba.jpg"]
    },
    {
        id: 9,
        baslik: "BEREKETİN KAYNAĞI",
        altBaslik: "İmarethane (Aşevi ve Mutfak)",
        ses: "audio/09_bereketin_kaynagi.mp3",
        metin: "Şimdi burnunuza gelen o taze ekmek ve kaynayan çorba kokularını takip ederek dev bacaların altına, İmaret binasına giriyoruz. Burası Osmanlı’nın sosyal adalet kalesidir. Mutfak bölümündeki dev bakır kazanlarda her sabah gün doğmadan kaynayan çorbaları, fırında pişen taze ekmekleri hayal edin. Hiçbir ücret ödenmeden binlerce kişinin karnının doyduğu, kilerlerin bereketle dolup taştığı bu yapı, külliyenin sönmeyen ocağıdır. Paylaşmanın verdiği o eşsiz huzur burada taş duvarlara sinmiştir.",
        soru: "İmaretin sıcaklığından ayrılıp, şifalı bir şerbet molasına ve hatıralara süzülmeye hazır mısınız?",
        galeri: ["img/imaret_bacalar.jpg", "img/mutfak_kazan.jpg"]
    },
    {
        id: 10,
        baslik: "TARİHİN KOKUSU VE LEZZETİ",
        altBaslik: "Şerbetevi ve Hatıralar",
        ses: "audio/10_tarihin_kokusu_lezzeti.mp3",
        metin: "Gezimizin yorgunluğunu atmak üzere külliyenin tarihi dokusuna sadık kalınarak düzenlenen Şerbetevi’ne süzülüyoruz. Darüşşifa’da anlatılan o şifalı bitkilerin lezzete dönüştüğü demirhindi veya gül şerbetiyle serinleyin. Ardından hemen yan taraftaki Hediyelik Eşya bölümünde; Edirne’nin meşhur Edirnekari kutuları, hat sanatı örnekleri ve Darüşşifa’nın o kendine has şifalı esansları arasında kaybolun. Külliyeden bir parça hatırayı yanınıza almanın şimdi tam vakti.",
        soru: "Şimdi bu yolculuğu nehir kıyısında bir vedayla taçlandırmak için Tunca’ya inmeye hazır mısınız?",
        galeri: ["img/serbetevi.jpg", "img/hediyelik.jpg"]
    },
    {
        id: 11,
        baslik: "TUNCA’NIN ŞİFALI SESİ",
        altBaslik: "Nehir Kıyısı ve Veda",
        ses: "audio/11_tuncanin_sifali_sesi.mp3",
        metin: "Şu an nehrin kıyısındayız. Arkanıza dönüp baktığınızda külliyeyi; şifalı kubbeleri, ilim yuvaları, görkemli minareleri ve tüten bacalarıyla bir bütün olarak görebilirsiniz. Nehrin akışı, Darüşşifa’daki o şadırvan sesinin doğadaki asıl yankısıdır. Şifayı suyun sesinde, ilmi medresede, huzuru camide, bereketi ise imarette bulduk. 500 yıllık bu yolculuğu bizimle paylaştığınız için teşekkür ederiz. Bu eşsiz mirasın kapıları, ruhuna şifa arayan herkese her zaman açıktır.",
        soru: "Geleceğe bir iz bırakmaya hazır mısınız?",
        galeri: ["img/tunca_nehri.jpg", "img/kulliye_veda.jpg"]
    }
];
