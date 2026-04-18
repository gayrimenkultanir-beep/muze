<script>
const STOPS=[{"t": "EŞİĞE DAVET", "s": "SULTAN II. BAYEZİD KÜLLİYESİ", "m": "Ruhunuzu dinlendirmeye ve geçmişin bilgeliğiyle buluşmaya hazır mısınız?\n\nBurada suyun ritmini, neyin nefesini ve şifanın sessizliğini keşfedeceksiniz.", "q": "Günlük hayatın gürültüsünü dışarıda bırakın. Şimdi, zamanın ötesine geçmeye hazır mısınız?", "btn": "ZAMANDA YOLCULUĞA BAŞLA →"}, {"t": "ADALET VE ŞİFA KAPISI", "s": "MİMARİ VE FONKSİYONEL BÜTÜNLÜK", "m": "İhtişamlı ana kapıdan adımınızı attığınız bu nokta, Osmanlı'nın insanı merkeze alan hizmet anlayışının başlangıcıdır.\n\nSultan II. Bayezid Külliyesi, sadece bir yapılar topluluğu değil; tıp, eğitim ve sosyal yaşamın iç içe geçtiği döneminin en ileri sağlık ve bilim kampüsüdür.\n\nMerkez Aks: Ruhun ve bedenin şifa bulduğu Darüşşifa'ya uzanır. Sağ Aks: Dönemin tıp eğitiminin kalbi olan Medrese-i Etıbba'ya açılır.", "q": "\"Geçmişin bilgeliğine giden bu yolda hazırsanız, Darüşşifa'nın ana girişine doğru ilerleyerek şifa yolculuğumuza başlayalım.\"", "btn": "Darüşşifa Girişine İlerle →"}, {"t": "DARÜŞŞİFA TAÇ KAPISI", "s": "ESTETİK VE NİZAM", "m": "Şifanın giriş kapısına ulaştığınızda, sağ cephede yer alan bilgilendirme panoları sizi karşılayacaktır.\n\nBu panolar aracılığıyla külliyenin muazzam yerleşim planını ve Darüşşifa'nın mimari kurgusunu teknik detaylarıyla inceleyebilirsiniz.\n\nŞimdi Darüşşifa'nın o vakur ve ağırbaşlı kapısından geçiyoruz… Beş asırlık bir sükunetin kapılarını aralıyor ve şifanın dış dünyaya açılan ilk halkası olan 1. AVLUYA dahil oluyoruz.", "q": "\"Tarihin ve tıbbın iç içe geçtiği bu kutsal eşikten geçerek, ilk avlunun huzuruna tanıklık etmeye hazır mısınız?\"", "btn": "1. Avluya Adım At →"}, {"t": "DARÜŞŞİFA 1. AVLU", "s": "ŞİFANIN İLK DURAĞI", "m": "Şu an Darüşşifa'nın ana avlusu olan 1. Avludayız. Eşiği geçtiğiniz an dış dünyanın gürültüsü kaybolur, yerini taşın serinliği ve ferahlık hissi alır.\n\nSağ tarafta revaklı yürüyüş yolları; her revakta küçük kubbeler ve düzenli bir ritim göreceksiniz.\n\nSol taraf – 4 hizmet odası: Personel Odası, Çamaşırhane, Mutfak, Kiler.\n\nSağ taraf – 6 oda: Poliklinik hizmetlerinin verildiği odalar. Hastalar ilk muayenelerini burada olur; göz, cerrahi ve diğer hekimler görev yapardı.\n\nBu avlu, yataklı tedaviye geçmeden önce muayene, ilaç hazırlama ve tıbbi düzenleme süreçlerinin yürütüldüğü merkezdi.", "q": "Bu odalara tekrar döneceğimiz için şimdi yolumuza devam edebiliriz.", "btn": "Süt Kuyusu ve Sunum Odasına →"}, {"t": "SEMBOLLER VE SUNUM ODASI", "s": "ŞİFA YOLUNDA İNANÇ VE SEMBOLİZM", "m": "Sunum odasına doğru ilerlerken kadim semboller yolunuza eşlik edecek.\n\nSüt Kuyusu: Sol taraftaki hizmet birimlerinin hemen ilerisinde yer alan bu kuyu, döneminde emziren annelerin şifa bulduğuna inanılan kutsal bir noktadır.\n\nAğaç ve Sarmaşık: Gövdesine sıkıca sarılmış sarmaşığıyla yükselen bu ağaç, 'Ağaç ile Sarmaşık' efsanesinin can bulduğu noktadır.\n\nBilgi Eşiği: İkinci Avlu'ya açılan taç kemerli geçiş kapısına ulaştığınızda, sol tarafta yer alan Sunum Odası sizi karşılayacaktır.", "q": "\"Görsel ve işitsel bir yolculukla bu devasa yapının sırlarını keşfetmeye hazırsanız, sunumumuzu başlatalım.\"", "btn": "Sunumu Başlat →"}, {"t": "BİLGİDEN DENEYİME", "s": "TAŞLARIN DİLE GELDİĞİ ANLAR", "m": "Sunum odasında edindiğimiz tarihsel perspektifle, bu muazzam yapının taşları zihnimizde yeniden canlanıyor.\n\nRevaklı yolun gölgesinde, geçmişin ayak izlerini takip ederek sağ kanattan itibaren ağır adımlarla ilerleyelim.\n\nŞimdi her bir odayı sadece mekan olarak değil, yüzyıllar boyu hizmet vermiş birer yaşam alanı olarak sırasıyla keşfetmeye ve hissetmeye başlıyoruz.", "q": "\"Lojistik ve şifa birimlerinin saklı hikâyelerini dinlemeye hazır mısınız?\"", "btn": "Odaları Keşfetmeye Başla →"}, {"t": "İDARİ VE LOJİSTİK BİRİMLER", "s": "DARÜŞŞİFADA YAŞAM VE HİJYEN EKOLÜ", "m": "Giriş aksının sol kanadında sıralanan bu odalar, darüşşifanın kesintisiz hizmet veren lojistik merkezidir.\n\nPersonel Odası: Hekim, cerrah ve eczacıların dinlenme alanı. 24 saat nöbet sistemiyle şifahanenin her an hazır bulunmasını sağlıyordu.\n\nÇamaşırhane: Osmanlı tıp geleneğinde hijyen tedavinin temelidir. Sargı bezlerinden yatak örtülerine kadar tüm tekstil ürünlerinin sterilizasyonu burada sağlanırdı.\n\nMutfak (Matbah): Her hasta için özel diyetler, şifalı şerbetler ve hafif yemekler titizlikle hazırlanırdı.\n\nKiler: Baharatlardan tıbbi bitkilere kadar tüm stokların yönetildiği birim.", "q": "\"Lojistik birimleri geride bırakırken, şifanın teşhis noktalarına; poliklinik odalarına doğru ilerleyelim.\"", "btn": "Poliklinik Odalarına Geç →"}, {"t": "POLİKLİNİK BİRİMLERİ", "s": "TEŞHİS, KARAR VE KLİNİK YÖNETİMİ", "m": "Bu birimler, modern tıptaki 'ilk kabul ve triyaj' merkezinin tarihsel karşılığıdır.\n\nİlk Muayene ve Teşhis: Hekimler hastanın nabız ritmini ve semptomlarını İbn-i Sina ile Razi'nin rehberliğinde analiz ederlerdi.\n\nTriyaj: Nöro-psikiyatrik vakalar musiki ve su sesiyle tedavi merkezlerine, somatik vakalar ihtisas koğuşlarına yönlendirilirdi.\n\nAyakta Tedavi: Yatış gerektirmeyen hafif vakalar bu odalarda reçete edilen ilaçlarla sağlığına kavuşturulup taburcu edilirdi.", "q": "\"Tıbbın bu kadim uygulama alanlarını daha yakından tanımak için muayene türlerini detaylandıralım.\"", "btn": "Muayene Türlerini İncele →"}, {"t": "POLİKLİNİK VE İHTİSAS ALANLARI", "s": "KLİNİK BRANŞLAŞMANIN TARİHSEL KÖKENLERİ", "m": "Asabiye ve Ruh Sağlığı: Hastanın mizaç yapısına göre musiki veya su sesiyle tedavi protokollerinin belirlendiği başlangıç noktasıdır.\n\nDahiliye: Ateşli hastalıklar ve metabolik bozuklukların dönemin tıbbi otoritelerince teşhis edildiği birimdir.\n\nHariciye (Cerrahi): Travmatoloji, yara bakımı ve cerrahi operasyon gerektiren vakaların değerlendirildiği alandır.\n\nKehhallik (Göz Hekimliği): Osmanlı tıbbının en gelişmiş kollarından biri; 'Kehhaller' tarafından titizlikle uygulanırdı.\n\nEczacılık ve Farmakoloji: İbn-i Sina farmakopesine dayalı kişiselleştirilmiş ilaç reçetelerinin hazırlandığı karar merkezidir.", "q": "\"Polikliniklerin hareketliliğinden ayrılıp sükunetin hakim olduğu İkinci Avlu'ya geçmeye hazır mısınız?\"", "btn": "İkinci Avluya İlerle →"}, {"t": "İKİNCİ AVLU EŞİĞİ", "s": "AKUSTİK FİLTRE VE RUHSAL ARINMA", "m": "Birinci Avlu'nun hummalı poliklinik hareketliliğini geride bırakarak, Darüşşifa'nın kalbine doğru ilerliyoruz.\n\nEşik – Seslerin Sustuğu Filtre: Bu kapının dar ve alçak yapısı, sadece fiziksel bir geçit değil; aynı zamanda akustik bir bariyerdir. Kapıdan içeri adım attığınız an, dış dünyanın uğultusu bıçak gibi kesilir.\n\nMimari Akustik Mucize: Bu geçiş bir 'ses filtresi' vazifesi görerek zihninizi dış etkenlerden arındırır. Sizi musiki ve su sesinin hakim olduğu o derin atmosfere hazırlar.", "q": "\"Hiyerarşinin ve disiplinli yönetim merkezinin sessiz dünyasına adım atmaya hazır mısınız?\"", "btn": "Yönetim Merkezine Giriş →"}, {"t": "İKİNCİ AVLU | İDARE VE NİZAM", "s": "ŞİFAHANENİN OPERASYONEL MERKEZİ", "m": "Eşikten geçtiğiniz an, mutlak düzenin hâkim olduğu İkinci Avlu sizi karşılar. Burası Darüşşifa'nın entelektüel ve idari beynidir.\n\nYönetim Merkezi: Reisü'l-Etibba (Başhekim) ve yardımcıları tıbbi protokolleri denetlerken; vakıf gelirleri ve bütçe yönetimi büyük bir titizlikle yürütülürdü.\n\nKâtipler ve Bürokrasi: Her hastanın kaydı, yatış planlaması ve tedavi süreçleri burada belgelenerek kurumsal bir hafıza oluşturulurdu.", "q": "\"Beş asırlık sükunetin zirvesine; sekizgen plana sahip Büyük Şifahane'ye girmeye hazır mısınız?\"", "btn": "Büyük Şifahaneye Adım At →"}, {"t": "DARÜŞŞİFA EŞİĞİ", "s": "TAŞIN MÜHÜRLENDİĞİ GEÇİT", "m": "İdari nizamın hüküm sürdüğü İkinci Avlu'dan ayrılarak, külliyenin en gizemli noktasına; devasa bir şifa mabedinin eşiğine ulaştınız.\n\nEşik Noktası – Taşın Sessiz Daveti: Yüksek kemerin altında durup başınızı yukarı kaldırdığınızda, taşın üzerine bir mühür gibi işlenmiş o kadim kitabeyi göreceksiniz.\n\nManevi Trans – Bir Dünyadan Diğerine: Bu eşikten içeri girdiğiniz an, fiziksel dünyanın gürültüsü tamamen silinir.", "q": "\"Beş yüz yıllık bir huzur senfonisine; Büyük Şifahane'nin kalbine tanıklık etmeye hazır mısınız?\"", "btn": "Büyük Şifahaneyi Keşfet →"}, {"t": "BÜYÜK ŞİFAHANE", "s": "RUHUN ŞİFAYA KAVUŞTUĞU ZİRVE - SEKİZGEN BÖLÜM", "m": "Eşikten içeri adım attığınız an, sizi sekizgen bir mimari formun ihtişamı ve gökyüzünü sembolize eden devasa Merkezi Kubbe karşılar.\n\nAkustik Mahremiyet – Şadırvan: Merkezdeki sekizgen şadırvandan dökülen suyun ritmi, sadece bir melodi değil, aynı zamanda 'akustik bir perde'dir. Suyun sesi, koğuşlar arasında mekanik bir izolasyon sağlayarak hastalar için mutlak bir mahremiyet alanı oluşturur.\n\nHaftada Üç Gün Musiki Terapisi: 500 yıl önce, haftada üç gün on kişilik seçkin bir heyet; ney, ud ve kanun eşliğinde ruhun ihtiyacı olan makamları (uykusuzluğa Rehavi, neşeye Rast) bu kubbenin altında yankılandırırdı.\n\n6 Kışlık ve 4 Yazlık Oda: Köşelerde yer alan ahşap kapılı kapalı koğuşlar kışın korunağı sağlar; 4 açık eyvan ise yaz aylarında serin hava akışını ve şifalı frekansları içeri alır.", "q": "\"Ruhunuzda bu kadim dinginliği taşıyarak, şimdi hekimlerin yetiştiği ilim yuvasına, Medreseye doğru ilerliyoruz.\"", "btn": "Medrese Yoluna Dön →"}, {"t": "İLİM YOLUNA DÖNÜŞ", "s": "ŞİFADAN BİLGİYE: MEDRESE EŞİĞİ", "m": "Darüşşifa'dan Ayrılış: Sekizgen kubbenin manevi atmosferinden, 'Ya Şafi' ismiyle mühürlenmiş o görkemli kapıdan geçerek ayrılıyorsunuz.\n\nAkustik Eşiği Yeniden Geçiş: Dış dünyanın sesini filtreleyen o dar kapıdan bu kez ters yöne geçerek, Birinci Avlu'nun genişliğine ulaşıyorsunuz.\n\nİkiz Yapı – Medrese-i Etıbba: Hemen solunuza baktığınızda, Darüşşifa ile mimari bir bütünlük içinde yükselen dönemin tıp fakültesi olan Medrese-i Etıbba tüm ihtişamıyla sizi karşılar.", "q": "\"Şifanın bilimle harmanlandığı, geleceğin hekimlerinin yetiştiği ilim yuvasına girmeye hazır mısınız?\"", "btn": "Medreseye Adım At →"}, {"t": "MEDRESE-İ ETİBBA – GİRİŞ", "s": "HEKİMLERİN YETİŞTİĞİ OCAK", "m": "Medreseye Giriş: Medresenin kapısından içeri girdiğiniz an, buranın Darüşşifa'dan farklı olarak daha akademik ve disiplinli bir atmosfere sahip olduğunu fark edebilirsiniz.\n\nAvlunun Yapısı: Tam ortada küçük ve zarif bir şadırvan bulunur. Su sesi burada talebelerin zihnini berraklaştırmak ve odalar arası ses geçişini yumuşatmak için kullanılır.\n\nEğitim Alanı – 18 Oda: Avlunun etrafını çevreleyen odalar tıp talebelerinin konakladığı ve ders çalıştığı 'hücreler'dir. İçeride ocaklar ve kitap nişleri yer alır.", "q": "Akademik kalbe, dershanelere girmeye hazır mısınız?", "btn": "Eğitim Merkezlerine İlerle →"}, {"t": "MEDRESE-İ ETİBBA – EĞİTİM", "s": "EĞİTİM MERKEZLERİ", "m": "Büyük Dershane: Avlunun en görkemli bölümüdür. Başmüderrisin ders anlattığı ana sınıftır. Cerrahi aletler ve tıbbi bitkiler üzerinde uygulamalı tartışmalar yapılırdı.\n\nKütüphane Odası: Raflarda el yazması eserler, tıbbi kitaplar ve yılların bilgisini taşıyan metinler bulunur. Bazı eserler Osmanlı padişahları tarafından bizzat mühürlenmiş ve külliyeye armağan edilmiştir.\n\nİlim ve Uygulama Birlikteliği: Medrese ile Darüşşifa'nın yakınlığı tesadüf değildir. Talebeler teoriyi burada öğrenir, birkaç adım sonra Darüşşifa'da uygular. Öğren → Gözlemle → Uygula.", "q": "Külliyenin kalbine, cami meydanına çıkalım mı?", "btn": "Meydana Çıkış →"}, {"t": "CAMİ AVLUSUNA GEÇİŞ", "s": "KÜLLİYENİN KALBİNE BAKIŞ", "m": "Medrese-i Etıbba'nın kapısından dışarı süzülüp, turnikeli kapıya doğru ilerleyebiliriz.\n\nTurnikeyi geçtiğimizde geniş meydana çıkarız. Şimdi sağımıza baktığımızda en heybetli yapıyı görebilirsiniz: Sultan II. Bayezid Camii'nin taç kapısı.\n\nCami ibadete açık ve halka açık bir camidir. Cami bölümü gezimizin son durağında ziyaret edilecektir.\n\nYön Değişimi: Yönümüzü sağımıza çeviriyoruz ve müzemizin 3. bölümü olan İmarethane'ye ulaşıyoruz.", "q": "Bereketin ve paylaşmanın merkezine girmeye hazır mısınız?", "btn": "İmarethaneye Giriş →"}, {"t": "İMARETHANE", "s": "BEREKETİN VE PAYLAŞMANIN KALBİ", "m": "İmaretin Ruhu: II. Bayezid Külliyesi içinde yer alan İmarethane, sadece yemek yapılan bir yer değil; paylaşmanın, dayanışmanın ve bereketin merkeziydi.\n\nSosyal Adaletin Yaşayan Hali: Külliyede eğitim gören öğrenciler, tedavi gören hastalar, çalışan personel, yolcular ve yoksullar hiçbir ücret ödemeden karınlarını doyurabilirdi.\n\n500 Yıl Önceki Sofra Düzeni: Her gün binlerce kişilik sofralar kurulur, din ve dil ayrımı yapılmazdı. Herkese bir tas sıcak çorba ve taze ekmek ikram edilirdi.\n\nDev Kazanlar: Ocağın üzerinde dev bakır kazanlar yer alır. Bu kazanlarda pirinç çorbası, buğday çorbası ve etli yemekler gün doğmadan kaynamaya başlardı.", "q": "Şimdi Yemekhane ve Kiler bölümlerine bakalım mı?", "btn": "Yemekhane ve Kilere Geç →"}, {"t": "İMARETHANE – SOSYAL DEVLET", "s": "SOSYAL DEVLETİN VE BEREKETİN MERKEZİ", "m": "Kazanın Hiç Sönmeyen Ateşi: Büyük bakır kazanlar, günün ilk ışıklarıyla kaynamaya başlar. Burada yemek, sadece ihtiyaç değil; bir görevdir.\n\nHerkes İçin Sofra: İmarethanede sadece darüşşifa hastaları değil; yolcular, fakirler, medrese öğrencileri ve çalışanlar da yemek yerdi. Kim olduğunuz önemli değildi. Açsanız, burada yeriniz vardı.\n\nŞifa ve Beslenme Bir Arada: Darüşşifa hastaları için hazırlanan yemekler özel olurdu. Hafif, dengeli ve iyileştirici gıdalar tercih edilirdi. Çünkü burada yemek, tedavinin bir parçasıydı.", "q": "İmaretin diğer temel bölümlerini ve mutfağın kalbini görmeye hazır mısınız?", "btn": "Mutfak ve Kilere İlerle →"}, {"t": "İMARETHANE – TEMEL BÖLÜMLER", "s": "İMARETİN TEMEL BÖLÜMLERİ", "m": "Yemekhane (Me'kel): Yemeklerin servis edildiği ve tüketildiği alandır. Talebeler ve görevliler belli bir nizam içinde yemeklerini alırdı.\n\nEkmek Fırını (Fırın-ı Has): Külliyenin kendi buğdayının un haline gelip burada 'fodula' adı verilen özel ekmeklere dönüştüğü yerdir.\n\nKiler ve Erzak Depoları: Derin nişlerde çuvallarla pirinç, mercimek, nohut; küplerle zeytinyağı saklanırdı.\n\nOdunluk: Devasa ocakların sönmemesi için gereken tonlarca odun burada istiflenirdi.", "q": "Şehre gelen yolcuların sığınağı olan Tabhanelere geçelim mi?", "btn": "Tabhanelere İlerle →"}, {"t": "TABHANELER", "s": "MİSAFİRHANELER", "m": "İmaret bölümünü tamamladıktan sonra Sultan II. Bayezid Camii'ne bitişik bulunan Tabhaneler (misafirhaneler) bölümüne ilerliyoruz.\n\nCamii ile Bütünleşen Misafirperverlik: Caminin sağında ve solunda yer alan bu yapılar, Osmanlı mimarisinin en insani dokunuşlarından biridir.\n\nBurası Bir Misafirhane: Şehre gelen yolcular, garibanlar ve dervişler burada 3 gün boyunca ücretsiz ağırlanırdı. Sadece 'misafir olmak' yeterliydi.\n\nHücreler ve Ocaklar: Küçük kapılardan geçerek girdiğiniz kare planlı odalarda her odada bir ocak bulunur.", "q": "Şimdi bu tarihi atmosferde bir yorgunluk şerbeti içmeye ne dersiniz?", "btn": "Şerbetevine İlerle →"}, {"t": "ŞERBETEVİ & HEDİYELİK EŞYA", "s": "GEÇMİŞİN TATLI HATIRASI", "m": "İçerisinde bulunduğumuz tabhane kısmı, tarihi dokusuna sadık kalınarak düzenlenen Şerbetevi ile sizi karşılıyor.\n\nŞifalı Reçeteler: Demirhindi şerbeti, gül şerbeti, reyhan şerbeti ve Osmanlı geleneksel şerbetleri… Darüşşifa'da anlatılan şifalı bitkiler burada birer sanat eserine dönüşmüştür.\n\nTarihi Atmosferde Mola: 15. yüzyılda bu külliyede dolaşan bir hekimin ya da talebenin içtiği o serinletici lezzetlerin bugün sizin bardağınızda yeniden canlandığını hissedersiniz.\n\nHediyelik Eşya: Edirnekâri işçiliğiyle süslenmiş kutular, el yapımı seramikler.", "q": "Şerbetevinde içilen bir yudum, geçmiş ile bugün arasında kurulan tatlı bir hatıradır.", "btn": "Avluya ve Yahya Baba'ya İlerle →"}, {"t": "AVLUYA DÖNÜŞ & YAHYA BABA", "s": "MANEVİ BİR VEFA NOKTASI", "m": "Artık caminin manevi havasını ve tabhanelerin şefkatli dokusunu arkamızda bırakıyoruz.\n\nYahya Baba: Bu muazzam külliyenin harcına duasını, mutfağına bereketini katan o manevi bekçiye bir vefa selamı vermek isterseniz; hazirenin o ağaçlıklı köşesine doğru ilerliyoruz.\n\nYahya Baba ve Meryem Sultan: Yan yana yatan bu iki isme baktığınızda, bu yapıların sadece taş ve kubbeden ibaret olmadığını; inanç, emek ve gönül birliğiyle yükseldiğini hissedersiniz.", "q": "Şimdi Yahya Baba ile vedalaşıp yönümüzü yeniden Cami'ye çevirme vakti…", "btn": "Caminin Görkemine Doğru →"}, {"t": "CAMİNİN GÖRKEMİNE DOĞRU", "s": "RUHANİ DİNGİNLİĞE ADIM", "m": "Geniş meydana çıktığınızda temiz havayı ciğerlerinize çekip rotamızı değiştiriyoruz.\n\nMeydandan Taç Kapıya Yürüyüş: Sağınızda Medrese ve Darüşşifa; solunuzda imaretin kubbeleri; tam karşınızda ise caminin devasa giriş kapısı yer alır.\n\nRuhani Geçiş Anı: Müziğin, şifanın ve ilmin sesinden sonra şimdi; sessizliğin, ibadetin ve ruhani dinginliğin içine adım atmaya hazırlanıyorsunuz.", "q": "Sessizliğin içine adım atmaya hazır mısınız?", "btn": "Cami Avlusuna Giriş →"}, {"t": "CAMİ AVLUSU", "s": "SÜKÛNETİN VE IŞIĞIN BULUŞMASI", "m": "Caminin devasa taç kapısından içeri süzüldüğünüzde, mermer işçiliğinin zarafeti sizi karşılar.\n\nŞadırvanlı Avlunun Kalbi: Tam ortada avlunun kalbinde yer alan zarif şadırvan… Suyun sesi, taşın sessizliğine karışır.\n\nSütunlar ve Mimari Denge: Etrafınızı saran mermer sütunlar sizi bir koruma halkası gibi sarar. Her sütunun farklı mermerlerden yapılmış olması, Osmanlı'nın estetik zenginliğini anlatır.", "q": "Mabedin içindeki o büyük boşluğa ve huzura geçelim mi?", "btn": "İç Mekana İlerle →"}, {"t": "CAMİNİN İBADET ALANINA DOĞRU", "s": "RUHANİ ATMOSFERE HAZIRLIK", "m": "Şimdi avlunun mermer zemininde ağır adımlarla yürüyerek asıl ibadet alanının girişine doğru yöneliyoruz.\n\nTam Karşınızda: İbadet mekanının ağırbaşlı giriş kapısı, hat yazıları ve ahşap işçiliğiyle sizi karşılıyor.\n\nİçeri girmeden önce hazırlığınızı yapıp yumuşak halıya ilk adımınızı attığınızda, başınızı kaldırdığınız an devasa tek bir kubbenin altında bulacaksınız kendinizi.", "q": "Işığın desenlerle dans ettiği bu ruhani dünyaya girmeye hazır mısınız?", "btn": "İç Mekana Giriş Yap →"}, {"t": "CAMİNİN İÇ MEKANI", "s": "TEK KUBBE, SONSUZ HUZUR", "m": "İçeriye ilk adımınızı attığınızda sizi Edirne'nin gökyüzünü andıran devasa bir kubbe karşılar.\n\nMimarideki Birlik: Bu cami, Osmanlı mimarisinde 'Tek Kubbe' geleneğinin en saf örneklerinden biridir. Bu tasarım hem ilahi birliği simgeler hem de dönemin mühendislik dehasını kanıtlar.\n\nMihrap, Minber ve Hünkâr Mahfili: Mihrap ve minber sadelikle ihtişamın buluştuğu mermer işçiliğini yansıtır.\n\nAkustik ve Sessizlik: Şifahanedeki su sesi burada yerini derin bir sükunete bırakır. Kubbe altındaki en küçük ses bile tüm mekâna yayılır.", "q": "Bu ruhani atmosferden yavaşça ayrılıp nehir kıyısına doğru süzülelim mi?", "btn": "Tunca Nehri'ne Doğru →"}, {"t": "VEDAYA DOĞRU", "s": "ŞİFA ŞEHRİNE BAKIŞ - TUNCA'NIN KIYISI", "m": "Artık heybemizde hem şifalı tatlar hem de kıymetli hatıralar var. Külliyenin dış avlusundan çıkıp, nehrin serin esintisini tenimizde hissedeceğimiz Tunca Nehri kıyısına doğru süzülüyoruz.\n\nBu devasa şifa ve ilim şehrine, nehrin üzerinden batan güneşin ışıklarıyla veda etmeye hazır mısınız?", "q": "Vedanın ve huzurun adresine ulaşmaya hazır mısınız?", "btn": "Nehir Kıyısına Ulaş →"}, {"t": "TUNCA NEHRİ KIYISI", "s": "VEDANIN VE HUZURUN ADRESİ", "m": "Külliyenin dış avlusundan ağır adımlarla çıkıp, nehrin serin esintisini hissettiğinizde bu gezi zihninizde bir bütün haline gelir.\n\nArkanıza dönüp baktığınızda külliyeyi tüm ihtişamıyla görebilirsiniz: Darüşşifa'nın kubbeleri, Medrese'nin ilim yuvaları ve caminin minareleri…\n\nNehrin Sesi: Nehrin akışı, Darüşşifa'da duyduğunuz su sesinin doğadaki yankısıdır. Suyun dingin akışı yüzyıllarca burada şifa, huzur ve terapi olmuştur.\n\nTarihi Köprü: Biraz ilerlediğinizde II. Bayezid Köprüsü'nü görebilirsiniz. Bu köprü yalnızca iki kıyıyı değil; şifa ile hayatı, ilim ile toplumu birbirine bağlayan bir geçittir.", "q": "Bu eşsiz yolculuğu bizimle tamamladığınız için teşekkür ederiz. Şifa ile kalın.", "btn": "Yolculuğu Tamamla ✨"}, {"t": "GÖNÜL KÖPRÜSÜNE DAVET", "s": "BU HİKAYEDE SİZİN DE İZİNİZ OLSUN", "m": "Adım adım geçmişin izlerine dokunduk, bu muazzam mimariyi birlikte soluduk. Şimdi bu tarihi mekana kendi nefesinizi katma vakti.\n\nİçinizde Yankılananlar… Bir anlık huzur, derin bir hayranlık ya da kalbinizde kalan o sessiz tını…\n\nSizler için hazırladığımız Gönül Köprüsü, bu deneyimin manevi bir arşividir.\n\nBuraya bırakacağınız her cümle; bizim için paha biçilemez bir anı, diğer misafirlerimiz için ise bu yolculuğu anlamlandıran bir ışık tutacaktır.", "q": "Gönül Köprüsü sayfamızda duygularınızı paylaşmaya davet ediyoruz.", "btn": "🖋 GÖNÜL KÖPRÜSÜNE YAZ"}];


let cur=0,audioOn=true,notesPg=1;
const PPG=10;
const DEMO=[
  {name:"Mehmet Yılmaz",city:"Ankara",note:"Tarihin içinde yürüdüm sanki. Musiki terapisi bölümü beni derinden etkiledi.",date:"18 Nisan 2026"},
  {name:"Fatma Demir",city:"İstanbul",note:"Çocuklarımla geldik. Osmanlı'nın insana bakışını burada somut gördük.",date:"17 Nisan 2026"},
  {name:"Ali Çelik",city:"İzmir",note:"Darüşşifa'nın sekizgen planı ve akustik mimarisi gerçekten inanılmaz.",date:"16 Nisan 2026"},
  {name:"Ayşe Kaya",city:"Bursa",note:"Sesli anlatım rehberi mükemmeldi. Her durağı can kulağıyla dinledim.",date:"15 Nisan 2026"},
  {name:"Hasan Şahin",city:"Konya",note:"Osmanlı vakıf sistemini burada anlayınca çok daha anlamlı geldi.",date:"14 Nisan 2026"},
  {name:"Zeynep Arslan",city:"Trabzon",note:"Musiki Sekisi'nde gözlerim doldu. 500 yıl önce de insanlar aynıydı.",date:"13 Nisan 2026"},
  {name:"İbrahim Öztürk",city:"Edirne",note:"Kendi şehrimizde bu kadar değerli bir miras var olduğu için çok mutluyum.",date:"12 Nisan 2026"},
  {name:"Selin Doğan",city:"Eskişehir",note:"Her detay düşünülmüş. Şerbetevi bölümü favorimdi.",date:"11 Nisan 2026"},
  {name:"Kemal Aydın",city:"Gaziantep",note:"Restorasyon sürecini anlatan kısım harikaydı. Emeklerine sağlık.",date:"10 Nisan 2026"},
  {name:"Leyla Öz",city:"Antalya",note:"Çok bilgilendirici ve estetik bir gezi deneyimi. Teşekkürler.",date:"9 Nisan 2026"},
  {name:"Musa Türk",city:"Van",note:"Bu mekânın enerjisi başka. İyileşmek için gelinecek yer burası.",date:"8 Nisan 2026"},
  {name:"Rabia Bozkurt",city:"Samsun",note:"Sesli anlatım özelliği çok kullanışlıydı.",date:"7 Nisan 2026"},
];
let notes=[...DEMO];
const adSt={
  live:14,today:187,week:1243,
  daily:[89,134,201,155,178,167,187],
  days:["Pt","Sa","Ça","Pe","Cu","Ct","Pa"],
  hots:[{l:"Büyük Şifahane",m:9},{l:"Musiki Sekisi",m:8},{l:"1. Avlu",m:6},{l:"Eczacılık",m:6},{l:"Hasta Koğuşu",m:5},{l:"Tıp Medresesi",m:4}],
  cities:[{c:"İstanbul",n:312},{c:"Ankara",n:198},{c:"İzmir",n:145},{c:"Bursa",n:89},{c:"Konya",n:67},{c:"Diğer",n:432}]
};

function goTo(id){
  stopAud();
  const o=document.getElementById('ol');
  o.classList.add('on');
  setTimeout(()=>{
    document.querySelectorAll('.screen').forEach(s=>s.classList.remove('active'));
    document.getElementById(id).classList.add('active');
    o.classList.remove('on');
    window.scrollTo(0,0);
    if(id==='book')renderNotes();
    if(id==='admin')rstAdm();
  },280);
}

function startTour(){
  goTo('tour');
  setTimeout(()=>renderStop(cur),320);
}

function buildTL(){
  const s=document.getElementById('tls');
  s.innerHTML='';
  STOPS.forEach((st,i)=>{
    const e=document.createElement('div');
    e.className='tli'+(i<cur?' done':'')+(i===cur?' cur':'');
    e.innerHTML=`<div class="tlc"></div><div class="tln">${i+1}</div>`;
    e.onclick=()=>{cur=i;renderStop(i);};
    s.appendChild(e);
    if(i<STOPS.length-1){
      const l=document.createElement('div');
      l.className='tlln';
      s.appendChild(l);
    }
  });
  const ds=s.querySelectorAll('.tli');
  if(ds[cur])ds[cur].scrollIntoView({inline:'center',behavior:'smooth'});
}

function renderStop(idx){
  const s=STOPS[idx];
  const pct=Math.round(((idx+1)/STOPS.length)*100);
  const ml=Math.round((STOPS.length-idx-1)*1.55);
  document.getElementById('hTit').textContent=`DURAK ${idx+1} / ${STOPS.length}`;
  document.getElementById('pf').style.width=pct+'%';
  document.getElementById('ppct').textContent='%'+pct;
  document.getElementById('peta').textContent=ml>0?`~${ml} dk kaldı`:'Son durak!';

  const bb=document.getElementById('bbk'),bn=document.getElementById('bnxt');
  bb.style.display=idx===0?'none':'';
  if(idx===STOPS.length-1){
    bn.textContent='🖋 Gönül Köprüsüne Yaz →';
    bn.onclick=()=>goTo('book');
  } else {
    bn.textContent=s.btn||'Devam Et →';
    bn.onclick=nextStop;
  }

  const bodyHtml=(s.m||'')
    .replace(/\*\*(.*?)\*\*/g,'<strong>$1</strong>')
    .split('\n\n')
    .map(p=>p.trim()?`<p>${p.replace(/\n/g,'<br>')}</p>`:'')
    .join('');

  document.getElementById('tb').innerHTML=`
    <div class="sbadge"><span>DURAK ${idx+1} · ${STOPS.length} DURAKTAN</span></div>
    <h2 class="stitle">${s.t}</h2>
    <p class="ssub">${s.s}</p>
    <div class="sbody">${bodyHtml}</div>
    <div class="qa"><div class="qaq">${s.q}</div></div>
    <div class="gal">
      <div class="gm">
        <div class="gph">
          <svg width="36" height="36" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect x="1" y="6" width="34" height="24" rx="3" stroke="rgba(201,168,76,.28)" stroke-width="1"/>
            <circle cx="11" cy="15" r="3.5" stroke="rgba(201,168,76,.28)" stroke-width="1"/>
            <path d="M1 24L10 15L20 22L27 17L35 25" stroke="rgba(201,168,76,.28)" stroke-width="1"/>
          </svg>
          <p>Görsel – ${s.t}</p>
        </div>
      </div>
      <div class="grow">
        <button class="garr">‹</button>
        <div class="gth active"></div>
        <div class="gth"></div>
        <div class="gth"></div>
        <button class="garr">›</button>
      </div>
    </div>`;

  const tb=document.getElementById('tb');
  tb.classList.remove('ta');
  void tb.offsetWidth;
  tb.classList.add('ta');
  buildTL();

  if(audioOn){
    const speakText=s.t+'. '+s.s+'. '+(s.m||'').replace(/\*\*(.*?)\*\*/g,'$1').split('\n\n').slice(0,3).join('. ');
    setTimeout(()=>speakTxt(speakText),480);
  }
}

function nextStop(){if(cur<STOPS.length-1){cur++;renderStop(cur);window.scrollTo(0,0);}}
function prevStop(){if(cur>0){cur--;renderStop(cur);window.scrollTo(0,0);}}

function togAudio(){
  audioOn=!audioOn;
  const b=document.getElementById('abtn');
  b.textContent=audioOn?'🔊':'🔇';
  b.classList.toggle('muted',!audioOn);
  if(audioOn){
    const s=STOPS[cur];
    speakTxt(s.t+'. '+s.s+'. '+(s.m||'').split('\n\n').slice(0,2).join('. '));
  } else {
    stopAud();
  }
  try{localStorage.setItem('ao',audioOn?'1':'0');}catch(e){}
}

function speakTxt(txt){
  if(!audioOn||!window.speechSynthesis)return;
  stopAud();
  const clean=txt.replace(/[^\w\s.,;:?!'\-üğışöçÜĞİŞÖÇ]/g,'');
  const u=new SpeechSynthesisUtterance(clean);
  u.lang='tr-TR';
  u.rate=0.88;
  u.pitch=1.0;
  u.volume=0.95;
  const ind=document.getElementById('aind');
  ind.classList.add('on');
  u.onend=()=>ind.classList.remove('on');
  u.onerror=()=>ind.classList.remove('on');
  window.speechSynthesis.speak(u);
}

function stopAud(){
  if(window.speechSynthesis)window.speechSynthesis.cancel();
  document.getElementById('aind')?.classList.remove('on');
}

function saveNote(){
  const n=document.getElementById('bkn').value.trim();
  const c=document.getElementById('bkc').value.trim();
  const no=document.getElementById('bkno').value.trim();
  if(!n||!no){alert('Lütfen adınızı ve notunuzu girin.');return;}
  const d=new Date().toLocaleDateString('tr-TR',{day:'numeric',month:'long',year:'numeric'});
  notes.unshift({name:n,city:c||'Bilinmiyor',note:no,date:d});
  document.getElementById('bkn').value='';
  document.getElementById('bkc').value='';
  document.getElementById('bkno').value='';
  notesPg=1;
  renderNotes();
}

function renderNotes(){
  const nl=document.getElementById('nl'),np=document.getElementById('npg');
  const st=(notesPg-1)*PPG,sl=notes.slice(st,st+PPG),tot=Math.ceil(notes.length/PPG);
  nl.innerHTML=sl.map(n=>`
    <div class="nc">
      <div class="nm">
        <span class="nn">${n.name}</span>
        <span class="ncy">📍 ${n.city}</span>
      </div>
      <p class="ntxt">"${n.note}"</p>
      <p class="ndt">${n.date}</p>
    </div>`).join('');
  np.innerHTML=tot>1?`
    <button class="pgb" data-action="pgPrev" ${notesPg===1?'disabled':''}>‹</button>
    <span class="pgi">Sayfa ${notesPg} / ${tot}</span>
    <button class="pgb" data-action="pgNext" ${notesPg===tot?'disabled':''}>›</button>
  `:'';
}

function chgPg(d){
  notesPg=Math.max(1,Math.min(Math.ceil(notes.length/PPG),notesPg+d));
  renderNotes();
}

function doLog(){
  if(document.getElementById('ap').value==='darussifa1488'){
    document.getElementById('alg').style.display='none';
    document.getElementById('acon').classList.add('on');
    renderAdm();
  } else {
    document.getElementById('aerr').style.display='block';
  }
}

function doOut(){rstAdm();}
function rstAdm(){
  document.getElementById('alg').style.display='';
  document.getElementById('acon').classList.remove('on');
  document.getElementById('ap').value='';
  document.getElementById('aerr').style.display='none';
}

let liveInterval=null;
function renderAdm(){
  document.getElementById('slv').textContent=adSt.live;
  document.getElementById('std').textContent=adSt.today;
  document.getElementById('swk').textContent=adSt.week.toLocaleString('tr-TR');
  document.getElementById('snt').textContent=notes.length;

  const mx=Math.max(...adSt.daily);
  document.getElementById('dch').innerHTML=adSt.daily.map(v=>`<div class="bar" style="height:${Math.round((v/mx)*68)}px" title="${v}"></div>`).join('');
  document.getElementById('dlb').innerHTML=adSt.days.map(d=>`<div class="bl">${d}</div>`).join('');

  const mh=Math.max(...adSt.hots.map(h=>h.m));
  document.getElementById('sht').innerHTML=adSt.hots.map(h=>`
    <div class="hrow">
      <div class="hlbl">${h.l}</div>
      <div class="hbar"><div class="hfill" style="width:${Math.round((h.m/mh)*100)}%"></div></div>
      <div class="hv">${h.m}dk</div>
    </div>`).join('');

  document.getElementById('cit').innerHTML=adSt.cities.map(c=>`
    <div class="cpill"><strong>${c.n}</strong><span>${c.c}</span></div>`).join('');

  if(liveInterval)clearInterval(liveInterval);
  liveInterval=setInterval(()=>{
    adSt.live=Math.max(0,adSt.live+Math.floor(Math.random()*5)-2);
    document.getElementById('slv').textContent=adSt.live;
  },5000);
}

document.addEventListener('click',function(e){
  const el=e.target.closest('[data-action]');
  if(!el)return;
  const a=el.getAttribute('data-action');
  if(a==='startTour')startTour();
  else if(a==='goToIntro')goTo('intro');
  else if(a==='goToBook')goTo('book');
  else if(a==='goToAdmin')goTo('admin');
  else if(a==='togAudio')togAudio();
  else if(a==='prevStop')prevStop();
  else if(a==='nextStop')nextStop();
  else if(a==='saveNote')saveNote();
  else if(a==='pgPrev')chgPg(-1);
  else if(a==='pgNext')chgPg(1);
  else if(a==='doLog')doLog();
  else if(a==='doOut')doOut();
});

document.addEventListener('keypress',function(e){
  const el=document.getElementById('ap');
  if(document.activeElement===el && e.key==='Enter')doLog();
});

window.addEventListener('load',()=>{
  try{
    const s=localStorage.getItem('ao');
    if(s==='0'){
      audioOn=false;
      const b=document.getElementById('abtn');
      if(b){b.textContent='🔇';b.classList.add('muted');}
    }
  }catch(e){}
});
</script>
