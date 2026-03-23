const anatomi_carglass_anasayfa_redesign_html = () => {
  const html = `
      <nav id="anatomi_navbar">
          <div class="anatomi_navbar-container">
            <div class="anatomi_navbar-left">
            <a href= "https://www.carglass.com.tr/">
             <img
                src="https://i.hizliresim.com/lk5vvyy.JPG"
                alt="Logo"
                class="anatomi_navbar-logo" /></a>
             
            </div>
            <div class="anatomi_navbar-center">
              <div id="anatomi_responsive_hamburger_menu">
                <div class="anatomi_hamburger_icon" id="anatomi_hamburger_icon">
                  &#9776;
                </div>
                <div id="anatomi_sidebar" class="anatomi_sidebar">
                  <span id="anatomi_closebutton" class="anatomi_closebutton">
                    &times;
                  </span>
                  <ul id="anatomi_responsive_navbar">
                    <li onclick="location.href='/'">Ana Sayfa</li>
                    <li class="anatomi_dropdown-trigger" >Oto Cam Hasarı <i class="fa-solid fa-caret-down"></i>
                        <ul class="anatomi_dropdown">
                        <li class="anatomi_nested-dropdown-trigger" onclick="location.href='/Sayfa/Detay?sayfa_id=15'">Oto Cam Hasarı</li>
                        <li class="anatomi_nested-dropdown-trigger">Ön Cam Hasarı <i class="fa-solid fa-caret-down"></i>
                            <ul class="anatomi_dropdown">
                            <li class="anatomi_dropdown-item" onclick="location.href='/Sayfa/Detay?sayfa_id=16'">Ön Cam Tamiri</li>
                            <li class="anatomi_dropdown-item" onclick="location.href='/Sayfa/Detay?sayfa_id=23'">Küçük Çatlak Tamiri</li>
                            <li class="anatomi_dropdown-item" onclick="location.href='/Sayfa/Detay?sayfa_id=24'">Ön Cam Çatlak Tamiri</li>
                            <li class="anatomi_dropdown-item" onclick="location.href='/Sayfa/Detay?sayfa_id=25'">Ön Cam Değişimi</li>
                            <li class="anatomi_dropdown-item" onclick="location.href='/Sayfa/Detay?sayfa_id=26'">Ön Cam Tamir Ücreti</li>
                            <li class="anatomi_dropdown-item" onclick="location.href='/Sayfa/Detay?sayfa_id=27'">Kalite ve Garantimiz</li>
                            </ul>
                        </li>
                        <li class="anatomi_nested-dropdown-trigger">Yan Cam Hasarı <i class="fa-solid fa-caret-down"></i>
                            <ul class="anatomi_dropdown">
                            <li class="anatomi_dropdown-item" onclick="location.href='/Sayfa/Detay?sayfa_id=28'">Yan Cam Değişimi</li>
                            <li class="anatomi_dropdown-item" onclick="location.href='/Sayfa/Detay?sayfa_id=29'">Yan Cam Ücreti</li>
                            </ul>
                        </li>
                        <li class="anatomi_nested-dropdown-trigger">Arka Cam Hasarı <i class="fa-solid fa-caret-down"></i>
                            <ul class="anatomi_dropdown">
                            <li class="anatomi_dropdown-item" onclick="location.href='/Sayfa/Detay?sayfa_id=30'">Arka Cam Değişimi</li>
                            <li class="anatomi_dropdown-item" onclick="location.href='/Sayfa/Detay?sayfa_id=31'">Arka Cam Değişim Ücreti</li>
                            </ul>
                        </li>
                        </ul>
                    </li>
                     <li class="anatomi_dropdown-trigger" >Cam Fiyatları <i class="fa-solid fa-caret-down"></i>
                        <ul class="anatomi_dropdown">
                        <li class="anatomi_nested-dropdown-trigger" onclick="location.href='/Sayfa/Detay?sayfa_id=35'">Cam Fiyatları</li>
                        <li class="anatomi_nested-dropdown-trigger" onclick="location.href='/Sayfa/Detay?sayfa_id=32'">Ön Cam Ücreti</li>
                        <li class="anatomi_nested-dropdown-trigger" onclick="location.href='/Sayfa/Detay?sayfa_id=33'">Yan Cam Ücreti</li>
                        <li class="anatomi_nested-dropdown-trigger" onclick="location.href='/Sayfa/Detay?sayfa_id=34'">Arka Cam Ücreti</li>
                        </ul>
                    </li>
                    <li onclick="location.href='/Sayfa/Bayiler'">Hizmet Ağımız</li>
                    <li class="anatomi_dropdown-trigger" >Kurumsal<i class="fa-solid fa-caret-down"></i>
                        <ul class="anatomi_dropdown">
                        <li class="anatomi_nested-dropdown-trigger" onclick="location.href='#'">Kurumsal</li>
                        <li class="anatomi_nested-dropdown-trigger" onclick="location.href='/Sayfa/Detay?sayfa_id=36'">Hakkımızda</li>
                        <li class="anatomi_nested-dropdown-trigger" onclick="location.href='/Sayfa/Detay?sayfa_id=1'">Biz Kimiz</li>
                         <li onclick="location.href='/insan-kaynaklari'">
                        İnsan Kaynakları
                        </li>
                        <li class="anatomi_nested-dropdown-trigger" onclick="location.href='/Sayfa/Detay?sayfa_id=2'"> Global Ağımız</li>
                        <li class="anatomi_nested-dropdown-trigger" onclick="location.href='/Sayfa/Detay?sayfa_id=37'">Hizmetlerimiz</li>
                        </ul>
                    </li>
                    <li onclick="location.href='/Sayfa/iletisim'">İletişim</li>
                  </ul>
                </div>
              </div>
            </div>
            <div class="anatomi_navbar-right">
              <button
                class="anatomi_randevu-btn"
                onclick="window.location.href='/Randevu/BayiSec';">
                Randevu Alın
              </button>
            </div>
          </div>
        </nav>
    
        <div class="anatomi_hero-section">
          <div class="anatomi_form-container">
          <div class="anatomi_form_tab_btn_container"> 
          <button  class="anatomi_form_tab_btn anatomi_randevuAlın">Randevu Alın</button>
          <button class="anatomi_form_tab_btn anatomi_siziArayalım">Sizi Arayalım</button>
          </div>
    
            <p>
                    <input type="checkbox" name="iletisim_izin"  id="anatomi_kisisel_veri_yurtdisi_checkbox">
                  Kişisel verilerin yurt dışına aktarımına ilişkin açık rıza metnini okudum, kabul ediyorum.
                </p>
               <p>
          <input type="checkbox" id="anatomi_kisisel_veri_korunması_checkbox">
    
            Kişisel verilerin korunması ve işlenmesi politikası metnini okudum, kabul ediyorum.
    
        </p>
         <p class="third_kvkk" >
                    <input type="checkbox" name="iletisim_izin" id="anatomi_kisisel_veri_islenmesi_checkbox">
                    Kişisel verilerin işlenmesine dair aydınlatma metnini okudum, kabul ediyorum.
                </p>
        <div class="anatomi_recaptcha_container"></div>
    
    
    
               <div class="anatomi_randevu_form hidden">
          <form id="anatomi_randevu_form_content">
            <label for="name">İsim Soyisim</label>
            <input type="text" id="anatomi_nameSurname" name="nameSurname" required>
    
            <label for="phone">Cep Telefonu</label>
            <input type="tel" id="anatomi_phone" name="phone" required pattern="05[0-9]{9}  maxlength="11"  placeholder="0 (___) ___ __ __" />
    
            <button type="submit"  onclick="window.location.href='https://www.carglass.com.tr/Randevu/BayiSec';" class="anatomi_form_randevu_btn">
              Hemen Randevu Alın
            </button>
          </form>
        </div>
          <div class="anatomi_form_phone_container">
          
           <button class="anatomi_form_phone_btn"><i class="fas fa-phone phone-icon"></i>444 18 19</button>
          <button class="anatomi_form_phone_btn"><i class="fas fa-phone phone-icon"></i> 0(850) 281 10 86</button>
          </div>
          </div>
          
        </div>
    
          <div id="anatomi_modal" class="anatomi_modal">
          <div class="anatomi_modal-content">
          <button class="anatomi_modal-close" onclick="closeModal()">×</button>
            <div class="anatomi_modal-body">
            
            <h2>KİŞİSEL VERİLERİN İŞLENMESİNE DAİR AYDINLATMA METNİ</h2>
                <p>
      Sayın Müşterimiz, işbu Aydınlatma Metni ile sizleri Veri Sorumlusu Oto Cam
      Ticaret Anonim Şirketi (Bundan sonra Oto Cam olarak anılacaktır.) olarak
      6698 sayılı Kişisel Verilerin Korunması Kanunu kapsamında kişisel
      verilerinizin işlenmesi hakkında bilgilendirmek isteriz. Kişisel
      verilerinizin işbu Aydınlatma Metni kapsamında işlenmesine ilişkin detaylı
      bilgilere Şirketimizinhttps://www.carglass.com.tr adresinde yer alan
      “Kişisel Verilerin Korunması Politikası”ndan ulaşabilirsiniz. 1. Kişisel
      Verilerin Elde Edilme Yöntemleri ve Hukuki Sebepleri Kişisel verileriniz,
      elektronik veya fiziki ortamda toplanmaktadır. İşbu Aydınlatma Metni’nde
      belirtilen hukuki sebeplerle toplanan kişisel verileriniz 6698 sayılı
      Kanun’un 5. ve 6. maddelerinde belirtilen kişisel veri işleme şartları
      çerçevesinde hukuka uygun bir şekilde, faaliyet ve hizmet amaçlarımız ile
      bağlantılı ve ölçülü olarak işlenebilmekte ve paylaşılabilmektedir. 2.
      Kişisel Veri İşleme ve Paylaşım Amaçları Kişisel verileriniz, size daha
      iyi hizmet verebilmek amacıyla ve ilgili mevzuattan kaynaklanan yasal
      yükümlülüklerimiz çerçevesinde, sunulan ürün ve hizmetlerimizden
      yararlanabilmeniz için gerekli çalışmaların iş birimlerimiz tarafından
      yapılabilmesi, iş süreçlerinin yürütülebilmesi, Şirketimiz tarafından
      yürütülen ticari faaliyetlerin gerçekleştirilebilmesi ve buna bağlı iş
      süreçlerinin yürütülebilmesi, ödemelerin takip edilmesi, finansal
      durumların kontrolü, ücretlendirme, faturalandırma vb işlemlerin
      yönetilmesi, Şirket‘in ticari ve/veya iş stratejilerinin planlanması ve
      icrası ve Şirket‘in ve Şirket‘le iş ilişkisi içerisinde olan ilgili
      kişilerin hukuki, teknik ve ticari-iş güvenliğinin temini ve Şirketimiz
      tarafından sunulan ürün ve hizmetlerin ilgili kişilerin beğeni, kullanım
      alışkanlıkları ve ihtiyaçlarına göre özelleştirilerek ilgili kişilere
      önerilmesi ve tanıtılması için gerekli olan aktivitelerin planlanması ve
      icrası amaçlarıyla işlenmektedir ve aynı amaçlarla paylaşılabilecektir.
      Kişisel verilerin yurtdışına aktarılmasında Kişisel Verilerin Korunması
      Kurulu tarafından belirlenen yeterli korumanın bulunduğu ülkeler listesi
      dikkate alınır. Yeterli korumanın bulunduğu ülkeler ilan edilmemiş ise,
      Türkiye’deki ve aktarılacak ülkedeki veri sorumlularının yeterli bir
      korumayı yazılı olarak taahhüt etmeleri ve KVK Kurulunun izninin bulunması
      kaydıyla ilgili kişinin açık rızası aranmaksızın yurt dışına
      aktarılabilir. Sayılan haller dışında kişisel veriler ancak ilgili kişinin
      açık rızası ile yurtdışına aktarılabilir. 3. Kişisel Verilerin
      Paylaşılabileceği Taraflar Oto Cam, söz konusu kişisel verilerinizi 6698
      sayılı Kanun’un 8. ve 9. maddelerinde belirtilen kişisel veri işleme
      şartları ve amaçları ile işbu Aydınlatma Metni ile bildirilen amaçlar
      çerçevesinde yurt içinde veya yurt dışında, şirket ortakları ile veya
      faaliyetlerimiz gereği anlaşmalı olduğumuz kurumlar, iştirakler,
      tedarikçiler, yetkili satıcılar, bayiiler, iş ortaklarımız ile ve Oto
      Cam’ın iş ilişkisi içerisinde bulunduğu üçüncü kişiler ile ve hukuken
      yetkili kurum ve kuruluşlar ve hukuken yetkili özel hukuk tüzel
      kişileriyle paylaşabilecektir. Oto Cam Şirketinin verdiği hizmet
      kapsamında kişisel verileriniz Google Workspace, GCP (Google Cloud
      Platform), AWS (Amazon Web Services), Microsoft ve Microsoft Azure
      Platform sistemleri üzerinden toplanmakta, bu nedenle ve Şirketin
      kullanmakta olduğu müşteri ilişkileri yönetimi sistem sunucularının
      (server) yurt dışında yer alması halinde kişisel verileriniz yasal
      mevzuata uygun olarak meşru menfaatler kapsamında işlenmekte, Oto Cam
      Şirketinin işbirliği içerisinde olduğu yurt dışında yerleşik Carglass®
      Autoglass B.V., Belron International Limited ve Belron SA Group
      şirketlerine, yurt dışında bulunan üçüncü taraf hizmet sağlayıcılarına
      veya yurt dışına aktarılabilmektedir. 4. 6563 sayılı Elektronik Ticaretin
      Düzenlenmesi Hakkında Kanun (ETK) ve İleti Yönetim Sistemi (İYS)
      Şirketimiz, 6563 Sayılı Elektronik Ticaretin Düzenlenmesi Hakkındaki
      Kanuna (ETK) uygun olarak ticari faaliyetleri doğrultusunda mal ve
      hizmetlerini tanıtmak, pazarlamak ya da tanınırlığını arttırmak amacıyla
      elektronik iletişim araçlarıyla tarafınıza e-mail & SMS (kısa mesaj), Meta
      Whatsapp, Facebook ve Instagram gibi yollarla ticari elektronik iletiler
      gönderebilecek, memnuniyet geri bildirimlerinizin edinilebilmesi amacıyla
      müşteri hizmetlerimiz tarafından tarafınızla görüşmeler sağlanabilecektir.
      5. Kişisel Verilerinizle İlgili Haklarınız ve Kullanımı Kişisel veri
      sahibi olarak taleplerinizi Şirketimize iletmeniz durumunda talepleriniz
      mümkün olan en kısa sürede ve her halde 30 (otuz) günlük yasal süre
      içerisinde değerlendirilecek sonuçlandırılacaktır. Şirketimize başvurarak,
      kişisel verilerinizin; işlenip işlenmediğini öğrenme, işlenmişse bilgi
      talep etme, işlenme amacını ve amacına uygun kullanılıp kullanılmadığını
      öğrenme, yurt içinde/yurt dışında aktarıldığı 3. kişileri öğrenme,
      eksik/yanlış işlenmişse düzeltilmesini talep etme, 6698 Sayılı Kişisel
      Verilerin Korunması Kanunu’nun 7. Maddesi kapsamında silinmesini/yok
      edilmesini veya anonim hale getirilmesini talep etme, aktarıldığı 3.
      kişilere yukarıda sayılan (d) ve (e) bentleri uyarınca yapılan işlemlerin
      bildirilmesini talep etme, münhasıran otomatik sistemler ile analiz
      edilmesi nedeniyle aleyhinize bir sonucun ortaya çıkmasına itiraz etme,
      kanuna aykırı olarak işlenmesi sebebiyle zarara uğramanız hâlinde zararın
      giderilmesini talep etme, Haklarınız bulunmaktadır. 6. Haklarınızın
      Kullanılması Sayın Veri Sahibi Müşterimiz, işbu Aydınlatma Metni ve 6698
      sayılı Kişisel Verilerin Korunması Kanunu kapsamında sahip olduğunuz
      hakları kullanabilmek için size ait e-posta adresinizden (E-Postayı görmek
      için tıklayın.) adresine mail atabilir veya ıslak imzanızı taşıyan bir
      dilekçeyle bizzat başvurabilir/kargoyla gönderebilir veya mevzuata uygun
      olarak (örneğin noter vasıtasıyla veya Kişisel Veri Koruma Kurulu
      tarafından öngörülen başkaca bir yöntemle) şirket adresimize
      iletebilirsiniz. Şirketimiz, 6698 sayılı Kanun’da öngörülmüş sınırlar
      çerçevesinde söz konusu haklarını kullanmak isteyen veri sahiplerine, yine
      Kanun’da öngörülen şekilde azami otuz (30) gün içerisinde cevap
      vermektedir. Kişisel veri sahipleri adına üçüncü kişilerin başvuru
      talebinde bulunabilmesi için veri sahibi tarafından başvuruda bulunacak
      kişi adına noter kanalıyla düzenlenmiş özel vekâletname bulunmalıdır.
      Şirketimiz, başvuruda bulunan kişinin kişisel veri sahibi olup olmadığını
      tespit etmek adına ilgili kişiden bilgi talep edebilir, başvuruda
      belirtilen hususları netleştirmek adına, kişisel veri sahibine başvurusu
      ile ilgili soru yöneltebilir. Veri sahibi başvuruları kural olarak
      ücretsiz olarak işleme alınmakla birlikte, Kişisel Verileri Koruma Kurulu
      tarafından öngörülen ücret tarifesi üzerinden ücretlendirme
      yapılabilecektir. 7. Kişisel Verilerin Korunması Politikası’nda Yapılacak
      Değişiklikler Oto Cam, ‘Kişisel Verilerin Korunması Politikası’nda her
      zaman faaliyetlerin gerektirdiği ölçüde veya yasal açıdan gerekli olan
      değişiklikleri yapabilir. Bu değişiklikler, değiştirilmiş yeni ‘Kişisel
      Verilerin Korunması Politikası’ nın “https://www.carglass.com.tr” sitesine
      konulmasıyla birlikte derhal geçerlilik kazanır. İşbu ‘Kişisel Verilerin
      Korunması Politikası’ndaki değişikliklerden haberdar olmanız için, sizlere
      gerekli bilgilendirme yapılacaktır.
    </p>    
              
            </div>
            <p class= anatomi_modal_checkbox_wrapper>
              <input type="checkbox" id="anatomi_modal_checkbox">
              <label for="anatomi_modal_checkbox">Okudum, anladım, kabul ediyorum.</label>
            </p>
          </div>
        </div>
    
    
    
    
    
    
         <div id="anatomi_modal_second" class="anatomi_modal">
          <div class="anatomi_modal-content">
          <button class="anatomi_modal-close_second" onclick="closeModal()">×</button>
            <div class="anatomi_modal-body">
            
            <h2>KİŞİSEL VERİLERİN KORUNMASI VE İŞLENMESİ POLİTİKASI</h2>
                <p>
      Sayın Müşterimiz, Veri Sorumlusu Oto Cam Ticaret Anonim Şirketi (Bundan
      sonra Oto Cam olarak anılacaktır.) olarak başta özel hayatın gizliliği
      olmak üzere, kişilerin temel hak ve özgürlükleri ile kişisel verilerinin
      korunması amacıyla düzenlenen 6698 sayılı Kişisel Verilerin Korunması
      Kanunu hakkında sizleri bilgilendirmek isteriz. İşbu “Kişisel Verilerin
      Korunması ve İşlenmesi Politikası” Oto Cam ile ilgili hizmetleri sunarken,
      kişisel verilerinize ilişkin politikamızı içermektedir. 1. Tanımlar İşbu
      Kişiler Verilerin Korunması Politikasında yer alan; Müşteri/Müşteriler :
      Oto Cam tarafından kişisel verilerini, iletişim formları ile talep edilen
      bilgileri ve şahsi bilgilerini kendi açık rıza veya onayları ile vermeyi
      kabul etmiş gerçek kişileri, Kişisel Veri : Kimliği belirli veya
      belirlenebilir gerçek kişiye ilişkin her türlü bilgiyi, Kişisel Verilerin
      İşlenmesi : Kişisel verilerin tamamen veya kısmen otomatik olan ya da
      herhangi bir veri kayıt sisteminin parçası olmak kaydıyla otomatik olmayan
      yollarla elde edilmesi, kaydedilmesi, depolanması, muhafaza edilmesi,
      değiştirilmesi, yeniden düzenlenmesi, açıklanması, aktarılması,
      devralınması, elde edilebilir hâle getirilmesi, sınıflandırılması ya da
      kullanılmasının engellenmesi gibi ve bunlarla sınırlı olmaksızın veriler
      üzerinde gerçekleştirilen her türlü işlemi, Anonim hâle getirme : Kişisel
      verilerin, başka verilerle eşleştirilerek dahi hiçbir surette kimliği
      belirli veya belirlenebilir bir gerçek kişiyle ilişkilendirilemeyecek hâle
      getirilmesini, KVKK : 6698 sayılı Kişisel Verilerin Korunması Kanununu,
      KVKKurulu : Kişisel Verileri Koruma Kurulunu, Site : Şirketimizin
      https://www.carglass.com.tr adresinde yer alan web sitesini İfade eder. 2.
      İşlenen Kişisel Verileriniz, İşleme Yöntemi ve Dayanağı İşbu Kişisel
      Verilerin Korunması Politikası; Oto Cam’ın ne tür kişisel veriler
      topladığını, Bu kişisel verilerin nasıl kullanıldığını, Oto Cam’ın
      işlediği kişisel verileriniz üzerindeki haklarınızın neler olduğunu ve bu
      hakları nasıl kullanabileceğinizi, Kişisel verilerinizin ne kadar süre
      saklanacağını açıklamaktadır. Oto Cam olarak size daha iyi hizmet
      verebilmek amacıyla ve 5651 sayılı İnternet Ortamında Yapılan Yayınların
      Düzenlenmesi ve Bu Yayınlar Yoluyla İşlenen Suçlarla Mücadele Edilmesi
      Hakkında Kanun ve ilgili ikincil mevzuat, 6563 Sayılı Elektronik Ticaretin
      Düzenlenmesi Hakkında Kanun ve ilgili ikincil mevzuat, 5237 sayılı Türk
      Ceza Kanunu ve 6698 sayılı Kişisel Verilerin Korunması Kanunu başta olmak
      üzere; ilgili mevzuattan kaynaklanan yasal yükümlülüğü çerçevesinde
      Şirketimiz, söz konusu amaç ve yasal yükümlülüklerini yerine getirebilmeyi
      sağlayacak kişisel verilerinizi (ad, soyadı, doğum tarihi, e-posta,
      telefon numarası, cinsiyet, adres, meslek, eğitim, medeni durum, araç
      ruhsat bilgileri, araç plakası, araç markası, araç modeli, araç modelinin
      yılı, araç kilometresi, faydalanılan kampanya bilgisi ve bunlarla sınırlı
      olmaksızın diğer kişisel verileriniz) sizlerden talep etmekte, işlemekte
      ve paylaşabilmektedir. Kişsel verileriniz, sözlü iletişim, elektronik
      posta, faks, telefon, posta, mobil, elden teslim, mobil hizmet gibi
      yöntemlerle toplanabilir. Bu kişisel veriler Oto Cam’ın hizmetlerinden
      yararlanabilmeniz adına onayınıza istinaden, işbu “Kişisel Verilerin
      Korunması Politikası” ile belirlenen amaçlar ve kapsam dışında
      kullanılmamak kaydıyla, bilgi güvenliği tedbirleri de alınarak işlenecek
      ve yasal saklama süresince veya ancak işleme amacının gerekli kıldığı süre
      boyunca saklanacaktır. 3. İşleme ve Aktarım İzni Kişisel verileriniz, size
      daha iyi hizmet verebilmek amacıyla ve ilgili mevzuattan kaynaklanan yasal
      yükümlülüklerimiz çerçevesinde, sunulan ürün ve hizmetlerimizden
      yararlanabilmeniz için gerekli çalışmaların iş birimlerimiz tarafından
      yapılabilmesi, iş süreçlerinin yürütülebilmesi, Şirketimiz tarafından
      yürütülen ticari faaliyetlerin gerçekleştirilebilmesi ve buna bağlı iş
      süreçlerinin yürütülebilmesi, ödemelerin takip edilmesi, finansal
      durumların kontrolü, ücretlendirme, faturalandırma vb işlemlerin
      yönetilmesi, Şirket‘in ticari ve/veya iş stratejilerinin planlanması ve
      icrası ve Şirket‘in ve Şirket‘le iş ilişkisi içerisinde olan ilgili
      kişilerin hukuki, teknik ve ticari-iş güvenliğinin temini ve Şirketimiz
      tarafından sunulan ürün ve hizmetlerin ilgili kişilerin beğeni, kullanım
      alışkanlıkları ve ihtiyaçlarına göre özelleştirilerek ilgili kişilere
      önerilmesi ve tanıtılması için gerekli olan aktivitelerin planlanması ve
      icrası amaçlarıyla işlenmektedir ve aynı amaçlarla paylaşılabilecektir.
      Oto Cam, söz konusu kişisel verilerinizi, tabi olduğumuz yasal mevzuat
      başta olmak üzere 6698 sayılı Kanunun 5. Maddesi uyarınca ve 6698 sayılı
      Kanun’un 8. ve 9. maddelerinde belirtilen kişisel veri işleme şartları ve
      amaçları ile, siz müşterilerimize hizmet, fırsat ve olanaklar sunulması ve
      hizmet kalitesinin arttırılması amacıyla, şirket ortakları ile veya yasal
      bir zorunluluk gereği bu verileri talep etmeye yetkili olan kamu kurum
      veya kuruluşları ile yeterli önlemler alınmak kaydıyla faaliyetlerimiz
      gereği anlaşmalı olduğumuz kurumlar, tedarikçiler, yetkili satıcılar,
      bayiiler, iş ortaklarımız ile ve Oto Cam’ın iş ilişkisi içerisinde
      bulunduğu üçüncü kişiler ile sadece hizmet kalitesi, şikâyetlerin
      çözülmesi ve ortak ürün ve hizmetler geliştirilmesi amaçlarına yönelik
      olarak paylaşabilecektir. 4. Kişisel Verilerinizin Güvenliği, Doğru ve
      Güncel Olarak Muhafaza Edilmesi Kişisel verilerin korunması Oto Cam için
      önemlidir. Oto Cam, kişisel verilerinize yetkisiz erişim sağlanması veya
      bu bilgilerin kaybı, hatalı kullanımı, ifşa edilmesi, değiştirilmesi veya
      imha edilmesi, hukuka aykırı olarak kullanılmasına karşı verilerinizin
      korunması için gerekli önlemleri tümüyle almaktadır. Oto Cam, kişisel
      verilerinizi KVKK hükümlerine aykırı olarak başkasına açıklamayacak ve
      işleme amaçları haricinde kullanmayacaktır. Müşteri/Müşteriler
      paylaştıkları bilgilerin doğru olmasının ve güncel bir şekilde muhafaza
      edilmesinin 6698 sayılı Kişisel Verilerin Korunması Kanunu anlamında
      kişisel verileri üzerinde sahip oldukları hakları kullanabilmeleri ve
      ilgili diğer mevzuat açısından önemli olduğunu bildiklerini ve yanlış
      bilgi verilmesinden doğacak sorumlulukların tamamen kendilerine ait
      olacağını kabul ve beyan etmişlerdir. Oto Cam kişisel verilerinizi gizli
      tutmayı, gizliliğin sağlanması ve güvenliği için gerekli teknik ve idari
      her türlü tedbiri almayı ve gerekli özeni göstermeyi taahhüt etmektedir.
      Gerekli bilgi güvenliği önlemlerinin alınmasına karşın, her türlü alanda
      gerçekleşebilecek saldırılar nedeniyle kişisel verilerin zarar görmesi
      veya üçüncü kişilerin eline geçmesi durumunda Şirketimiz işbu durumu azami
      yasal süre olan 72 saat içerisinde tarafınıza ve Kişisel Verileri Koruma
      Kuruluna bildirir. 5. Kişisel Verilerinizle İlgili Haklarınız Şirketimize
      başvurarak, kişisel verilerinizin; işlenip işlenmediğini öğrenme,
      işlenmişse bilgi talep etme, işlenme amacını ve amacına uygun kullanılıp
      kullanılmadığını öğrenme, yurt içinde/yurt dışında aktarıldığı 3. kişileri
      öğrenme, eksik/yanlış işlenmişse düzeltilmesini talep etme, 6698 Sayılı
      Kişisel Verilerin Korunması Kanunu’nun 7. Maddesi kapsamında
      silinmesini/yok edilmesini veya anonim hale getirilmesini talep etme,
      aktarıldığı 3. kişilere yukarıda sayılan (d) ve (e) bentleri uyarınca
      yapılan işlemlerin bildirilmesini talep etme, münhasıran otomatik
      sistemler ile analiz edilmesi nedeniyle aleyhinize bir sonucun ortaya
      çıkmasına itiraz etme, kanuna aykırı olarak işlenmesi sebebiyle zarara
      uğramanız hâlinde zararın giderilmesini talep etme, Haklarınız
      bulunmaktadır. İşbu ‘Kişisel Verilerin Korunması Politikası’nda belirtilen
      amaçlarla işlenmiş olan kişisel verileriniz; 6698 sayılı Kanun madde 7/1-f
      maddesine göre işlenmesi gerektiren amaç ortadan kalktığında ve/veya 6102
      sayılı Türk Ticaret Kanununun 82. Maddesi ile Türk Ceza Kanununun 138.
      Maddesine göre ise kanunların belirlediği süreler geçince tarafımızca
      silinir, yok edilir veya anonim hale getirilerek kullanılmaya devam
      edilir. Kişisel verilerinizin işlenmesi ve kullanılması ile ilgili olarak
      her zaman silme ve vermiş olduğunuz onayı geri alma hakkınız
      bulunmaktadır. Sayın Veri Sahibi Müşterimiz, işbu Aydınlatma Metni ve 6698
      sayılı Kişisel Verilerin Korunması Kanunu kapsamında sahip olduğunuz
      hakları kullanabilmek için size ait e-posta adresinizden (E-Postayı görmek
      için tıklayın.) adresine mail atabilir veya ıslak imzanızı taşıyan bir
      dilekçeyle bizzat başvurabilir/kargoyla gönderebilir veya mevzuata uygun
      olarak (örneğin noter vasıtasıyla veya Kişisel Veri Koruma Kurulu
      tarafından öngörülen başkaca bir yöntemle) şirket adresimize
      iletebilirsiniz. Şirketimiz, 6698 sayılı Kanun’da öngörülmüş sınırlar
      çerçevesinde söz konusu haklarını kullanmak isteyen veri sahiplerine, yine
      Kanun’da öngörülen şekilde azami otuz (30) gün içerisinde cevap
      vermektedir. Kişisel veri sahipleri adına üçüncü kişilerin başvuru
      talebinde bulunabilmesi için veri sahibi tarafından başvuruda bulunacak
      kişi adına noter kanalıyla düzenlenmiş özel vekâletname bulunmalıdır.
      Şirketimiz, başvuruda bulunan kişinin kişisel veri sahibi olup olmadığını
      tespit etmek adına ilgili kişiden bilgi talep edebilir, başvuruda
      belirtilen hususları netleştirmek adına, kişisel veri sahibine başvurusu
      ile ilgili soru yöneltebilir. Veri sahibi başvuruları kural olarak
      ücretsiz olarak işleme alınmakla birlikte, Kişisel Verileri Koruma Kurulu
      tarafından öngörülen ücret tarifesi üzerinden ücretlendirme
      yapılabilecektir. 6. Açık rıza alınması ve Yurt Dışına Aktarım Oto Cam,
      veri sahibi tarafından belirli veri işleme faaliyetlerine ilişkin,
      bilgilendirilmeye dayanan ve özgür iradeyle hakkında veri işlenmesine
      ilişkin iradeyi ortaya koyan, yazılı beyan veya açık doğrulayıcı eylemle
      açıklanan rızayı açık rıza olarak kabul etmektedir. Açık rızalar yazılı
      olarak veya sistemsel olarak ispata elverişli bir şekilde alınır. Açık
      rıza veri sahibi tarafından her zaman geri alınabilir. Açık rıza, açık
      rıza formu şablonu veri sahibine imzalatılarak veya veri sahibiyle
      yapılacak elektronik formda bu şablonda yer alan unsurlara yer verilmesi
      suretiyle alınabilir. Açık rızaya dayanan veri işleme faaliyetinin
      süreklilik arz edecek veya tekrarlanacak olması halinde ilgili birimce tek
      bir liste halinde açık rızası alınmış kişilerin listesi tutulur. Bu
      listenin güncelliği ve doğruluğu ilgili birimin sorumluluğundadır. Açık
      rızaya dayanan veri işleme faaliyetine ilişkin açık rıza formları veya
      diğer ilgili ispat araçları ilgili birimce saklanır. Kişisel verilerin
      yurtdışına aktarılmasında Kişisel Verilerin Korunması Kurulu tarafından
      belirlenen yeterli korumanın bulunduğu ülkeler listesi dikkate alınır.
      Yeterli korumanın bulunduğu ülkeler ilan edilmemiş ise, Türkiye’deki ve
      aktarılacak ülkedeki veri sorumlularının yeterli bir korumayı yazılı
      olarak taahhüt etmeleri ve KVKKurulunun izninin bulunması kaydıyla ilgili
      kişinin açık rızası aranmaksızın yurt dışına aktarılabilir. Sayılan haller
      dışında kişisel veriler ancak ilgili kişinin açık rızası ile yurtdışına
      aktarılabilir. Kişisel verileriniz Şirketimiz tarafından, tarafınzdan
      alınacak açık rızanıza istinaden, kişisel verileri yeterli korumaya sahip
      ve/veya korumayı taahhüt eden yabancı ülkelere aktarılabilmektedir.
      Belirtmek isteriz ki, Şirketimizin verdiği hizmet kapsamında
      e-postalarında ve eklerinde yer alan kişisel verileriniz Google Workspace,
      GCP (Google Cloud Platform), AWS (Amazon Web Services), Microsoft ve
      Microsoft Azure Platform sistemleri üzerinden toplanmakta olup, bu nedenle
      ve Şirketimizin kullanmakta olduğu müşteri ilişkileri yönetimi sistem
      sunucularının (server) yurt dışında yer alması halinde kişisel verileriniz
      yasal mevzuata uygun olarak meşru menfaatler kapsamında işlenmekte veya
      yurt dışına aktarılabilmektedir. Şirketimiz kişisel verilerinizi yukarıda
      yer verilen yurt içinde ve yurt dışında bulunan üçüncü kişilere aktarırken
      her halükarda kişisel verilerin güvenliğini sağlamak amacıyla gerekli
      idari, teknik ve hukuki tedbirleri almaktadır. 7. Kişisel Verilerin
      Korunması Politikası’nda Yapılacak Değişiklikler Oto Cam, işbu ‘Kişisel
      Verilerin Korunması Politikası’nda her zaman faaliyetlerin gerektirdiği
      ölçüde veya yasal açıdan gerekli olan değişiklikleri yapabilir. Bu
      değişiklikler, değiştirilmiş yeni ‘Kişisel Verilerin Korunması Politikası’
      nın “https://www.carglass.com.tr” sitesine konulmasıyla birlikte derhal
      geçerlilik kazanır. İşbu ‘Kişisel Verilerin Korunması Politikası’ndaki
      değişikliklerden haberdar olmanız için, sizlere gerekli bilgilendirme
      yapılacaktır. 8. Uygulanacak Hukuk, Yetkili Mahkeme ve İcra Daireleri İşbu
      “Kişisel Verilerin Korunması Politikası” Türkiye Cumhuriyeti Kanunlarına
      tabidir. Burada yer alan hususlarla ilgili olarak herhangi bir uyuşmazlık
      veya ihtilaf iddia veya talep olduğu takdirde, İstanbul (Anadolu)
      Mahkemeleri ve İcra Daireleri yetkili olacaktır. 9. 6563 sayılı Elektronik
      Ticaretin Düzenlenmesi Hakkında Kanun (ETK) ve İleti Yönetim Sistemi (İYS)
      Şirketimiz, 6563 Sayılı Elektronik Ticaretin Düzenlenmesi Hakkındaki
      Kanuna (ETK) uygun olarak ticari faaliyetleri doğrultusunda mal ve
      hizmetlerini tanıtmak, pazarlamak ya da tanınırlığını arttırmak amacıyla
      elektronik iletişim araçlarıyla tarafınıza e-mail & SMS (kısa mesaj), Meta
      Whatsapp, Facebook ve Instagram gibi yollarla ticari elektronik iletiler
      gönderebilecek, memnuniyet geri bildirimlerinizin edinilebilmesi amacıyla
      müşteri hizmetlerimiz tarafından tarafınızla görüşmeler sağlanabilecektir.
      İleti Yönetim Sistemi (İYS), Şirketimiz gibi tüm hizmet sağlayıcılarının
      güncel ticari elektronik ileti onaylarını kaydettikleri ulusal veri tabanı
      sistemi olup, tarafınızca Şirketimize 6698 sayılı Kanuna tabi işlemler ve
      tarafınıza gönderilen ticari iletiler için onay verebileceğiniz gibi,
      mevcut onayınız için ret hakkınızı da İYS üzerinden veya CARGLASS RET
      yazarak 7889’a SMS göndererek kullanabilirsiniz. Bu bağlamda Şirketimiz,
      tarafınıza göndereceği ticari elektronik iletiler öncesinde alması gereken
      izinleri İYS aracılığıyla onayınızı alarak güvenli bir ortamda
      saklayabilecek, tarafınızca İYS üzerinden onay ve ret bildirimleriniz
      Şirketimize iletilebilecektir. Sayın Müşterimiz, tarafınızca üçüncü
      kişiler adına veya hareketle yetkili olarak Şirketimize başvurmuş olmanız
      halinde, işbu hususların hem vekili olduğunuz müşterimiz adına vekaleten
      hem de şahsınıza asaleten tarafınızca kabul edilmesi gerekmekte olup,
      Şirketimiz tarafından temin edilen ve bundan sonra temin edilecek olan
      kişisel verilerinizin yukarıda belirtilen amaç ve kapsamda yurt içinde ve
      yurt dışında işlenmesine ve yurt içinde ve yurt dışına aktarılmasına
      şahsen ve/veya üçüncü kişiler adına veya hareketle yetkili olarak
      Şirketimize başvurmuş iseniz hem vekili olduğunuz müşterimiz adına
      vekâleten hem de şahsınıza asaleten en geniş anlamıyla muvafakat
      ediyorsanız, lütfen işbu metni onaylayınız.
    </p>
              
            </div>
            <p class= anatomi_modal_checkbox_wrapper>
              <input type="checkbox" id="anatomi_modal_checkbox_second">
              <label for="anatomi_modal_checkbox">Okudum, anladım, kabul ediyorum.</label>
            </p>
          </div>
        </div>
    
         <div id="anatomi_modal_third" class="anatomi_modal">
          <div class="anatomi_modal-content">
          <button class="anatomi_modal-close_third" onclick="closeModal()">×</button>
            <div class="anatomi_modal-body anatomi_modal-body_third">
            
            <h2>KİŞİSEL VERİLERIN YURT DIŞINA AKTARIMINA İLİŞKİN AÇIK RIZA METNİ</h2>

                <p>
      Veri sorumlusu sıfatı ile Oto Cam’ın yayınlamış olduğu 6698 sayılı Kişisel
      Verilerin Korunması Kanunu’na (“KVKK”) uygun olarak hangi kişisel
      verilerin işlenebileceği, işleme amaçları, kişisel verilerin ne şekilde
      toplanabileceği, çerez kullanımı ve kişisel verilerin korunmasına yönelik
      diğer hususlar ile ilgili Aydınlatma Metni’ni okudum. İşbu Açık Rıza
      Metni’ni onaylamam halinde kişisel verilerimin Aydınlatma Metni’nde
      belirtilen işleme şartları ve amaçlarına uygun olarak, kişisel verileri
      yeterli korumaya sahip ve/veya korumayı taahhüt eden yabancı ülkelere
      aktarılabileceğini, Oto Cam Şirketinin verdiği hizmet kapsamında kişisel
      verilerimin Google Workspace, GCP (Google Cloud Platform), AWS (Amazon Web
      Services), Microsoft ve Microsoft Azure Platform sistemleri üzerinden
      toplandığını, bu nedenle ve Şirketin kullanmakta olduğu müşteri ilişkileri
      yönetimi sistem sunucularının (server) yurt dışında yer alması halinde
      kişisel verilerimin yasal mevzuata uygun olarak meşru menfaatler
      kapsamında işleneceğini, Oto Cam Şirketinin işbirliği içerisinde olduğu
      yurt dışında yerleşik Carglass® Autoglass B.V., Belron International
      Limited ve Belron SA Group şirketlerine, yurt dışında bulunan üçüncü taraf
      hizmet sağlayıcılarına veya yurt dışına aktarılabileceğini anladım.
      Kişisel verilerimin yurt dışına aktarımına ilişkin açık rızamı dilediğim
      zaman sonlandırabileceğimi, bu hususta tarafıma ait e-mail adresimden
      <span class="anatomi_show_email">(E-Postayı görmek için tıklayın.)</span> adresine mail atabileceğimi veya ıslak
      imzamı taşıyan bir dilekçeyle bizzat başvurabileceğimi/kargoyla
      gönderebileceğimi veya mevzuata uygun olarak (örneğin noter vasıtasıyla
      veya Kişisel Veri Koruma Kurulu tarafından öngörülen başkaca bir yöntemle)
      şirket adresine iletebileceğimi anladım. Aydınlatma Metni’ni ve Kişisel
      Verilerin Yurt Dışına Aktarımı Açık Rıza Metni’ni okudum, anladım ve
      onaylıyorum. KVKK’nun 9. Maddesi birinci fıkrası anlamında kişisel
      verilerimin Aydınlatma Metni, Kişisel Verilerin İşlenmesi ve Korunması
      Politikası ve işbu Kişisel Verilerin Yurt Dışına Aktarımı Açık Rıza
      Metni’nde belirtildiği şekillerde ve amaçlar doğrultusunda ve bunlarla
      sınırlı olmak üzere işlenmesine ve yurt dışına aktarılmasına onay
      veriyorum.
    </p>
    
              
            </div>
            <p class= anatomi_modal_checkbox_wrapper>
              <input type="checkbox" id="anatomi_modal_checkbox_third">
              <label for="anatomi_modal_checkbox">Okudum, anladım, kabul ediyorum.</label>
            </p>
          </div>
        </div>
    
       
        <div class="anatomi_content">
         <div class="anatomi_our_reviews">
          <div id="commentsSection">
    <div class="elfsight-app-24611f6e-0b12-4d87-8958-04367782df38" data-elfsight-app-lazy></div>
    </div>
          </div>
          <div class="anatomi_content-section">
            <div class="anatomi_content-section-info">
              <img src="https://anatomi.s3.eu-north-1.amazonaws.com/carglass_map_icon1.png" alt />
              <p>Ankara, İstanbul, İzmir ve Adana’da Şubelerimiz ile Araç Cam Tamiri, Değişimi, Kamera Kalibrasyon (ADAS) ve Silecek Değişimi Hizmetleri Vermekteyiz.</p>
            </div>
             <div class="anatomi_content-section-info">
              <img src="https://anatomi.s3.eu-north-1.amazonaws.com/carglass-servis-icon.png" alt />
              <p>Mobil Servis Hizmeti</p>
            </div>
            <div class="anatomi_content-section-info">
               <img src="https://anatomi.s3.eu-north-1.amazonaws.com/carglass_map_icon2.png" alt />
              <p>
                Yılda 100.000’den Fazla Müşterimize Hizmet Vermekteyiz.
              </p>
            </div>
           
             <div class="anatomi_content-section-info">
              <img src="https://anatomi.s3.eu-north-1.amazonaws.com/carglass-sube-icon.png" alt />
              <p>Yerleşik Şubelerimizle Hizmet Vermekteyiz.</p>
            </div>
             <div class="anatomi_content-section-info">
              <img src="https://anatomi.s3.eu-north-1.amazonaws.com/carglass_map_icon3.png" alt />
              <p>Tüm Türkiye’de Bayi Ağlarımız ile Cam Değişimi İşlemlerinizde Hizmet Vermekteyiz.</p>
            </div>
           
           
          </div>
    
          <div class="anatomi_content_section_map">
            <div class="anatomi_content-section_map_img">
            <iframe loading="lazy" title="Carglass® Türkiye Şube &amp;amp; Bayi Ağı" aria-label="Map" id="datawrapper-chart-9EMQr" src="https://datawrapper.dwcdn.net/9EMQr/1/" scrolling="no" frameborder="0" style="border: none;" width="600" height="376" data-external="1"></iframe>
            </div>
            <div class="anatomi_content-section_map_info">
              <div class="anatomi_content-section_map_phone">
                <img
                  class="anatomi_content-section_map_info_phone_icon"
                  src="https://anatomi.s3.eu-north-1.amazonaws.com/carglass-phone-icon.png"
                  alt="carglass_phone_icon" />
                <div class="anatomi_content_section_map_info_phone_number">
                  <p>Bizi Arayınız!</p>
                  <span id="phone1">444 18 19</span>
                  <span id="phone2">0(850) 281 10 86</span>
                </div>
                <div id="anatomi_map_popup_phone_copy" class="anatomi_map_popup_phone_copy">Kopyalandı</div>
              </div>
              <div class="anatomi_content_section_map_randevu">
              <div class="anatomi_content_section_map_randevu-btn-container">
              <button
                  class="anatomi_randevu-btn-map"
                  onclick="window.location.href='/Randevu/BayiSec';">
                  Randevu Alın
                </button></div>
                
              </div>
            </div>
          </div>
    
          <div class="anatomi_our_services">
            <h2>Hizmetlerimiz</h2>
            <div class="anatomi_our_services_content_options">
              <div class="anatomi_our_services_content_info">
                <img src="https://anatomi.s3.eu-north-1.amazonaws.com/carglass_%C3%B6n_cam_detail_info_image.jpg" alt="Ön Cam" />
                <h3>Ön Cam</h3>
                <p class="anatomi_break-word">
                  Cam tamiri veya ön camınızın değiştirilmesi mi gerekiyor? Carglass®’ın her zaman size sunacağı bir çözüm vardır.
                </p>
                <div class="anatomi_detail_button_container">
                  <a href="https://www.carglass.com.tr/Sayfa/Detay?sayfa_id=16"><button class="anatomi-our-services-detail-button">Detaylı
                    Bilgi</button></a>
                </div>
              </div>
              <div class="anatomi_our_services_content_info" style="display: none;">
                <img src="https://anatomi.s3.eu-north-1.amazonaws.com/carglass_yan_cam_detail_info_image.jpg" alt="Yan Cam" />
                <h3>Yan Cam</h3>
                <p class="anatomi_break-word">
                  Yan camınızı en kısa sürede aracınıza zarar vermeden uluslararası araç veri tabanımızdaki montaj talimatları ile değiştirmekteyiz.
                </p>
                <div class="anatomi_detail_button_container">
                 <a href="https://www.carglass.com.tr/Sayfa/Detay?sayfa_id=28"><button class="anatomi-our-services-detail-button">Detaylı
                    Bilgi</button></a>
                </div>
              </div>
              <div class="anatomi_our_services_content_info" style="display: none;">
                <img src="https://anatomi.s3.eu-north-1.amazonaws.com/carglass_arka_cam_detail_info_image.jpg" alt="Arka Cam" />
                <h3>Arka Cam</h3>
                <p class="anatomi_break-word">
                  Arka camınızı sorunsuz değiştirmek için bu işin uzmanı Carglass®’ı seçin.
                </p>
                <div class="anatomi_detail_button_container">
                  <a href="https://www.carglass.com.tr/Sayfa/Detay?sayfa_id=30"><button class="anatomi-our-services-detail-button">Detaylı
                    Bilgi</button></a>
                </div>
              </div>
            </div>
          </div>
    
          <div class="anatomi_our_services_content_contact">
            <div class="anatomi_our_services_content_contact_info">
              <p>
                Carglass® cam tamir ve değişiminde uzman olmakla birlikte cam
                değişimi sonrası kamera kalibrasyonu süreçlerinde ve IMI
                Akreditasyon'u bulunan Türkiye'deki tek cam değişimi ve tamiri
                firmasıdır.
              </p>
              <span>Tüm sorunlar için bu işin uzmanı Carglass®’a güvenin.</span>
              <div class="anatomi_our_services_content_contact_button_container">
                <button class="anatomi_our_services_content_contact_us_btn"
                  onclick="window.location.href='/Randevu/SiziArayalim';">İletişime
                  Geç</button>
              </div>
            </div>
            <div class="anatomi_our_services_content_contact_image">
              <img src="https://anatomi.s3.eu-north-1.amazonaws.com/cg_islem_cam_1_45.jpg" alt />
            </div>
          </div>
    
          <div class="anatomi_our_services_on_cam_tamiri">
            <h2>Ön Cam Tamiri</h2>
            <div class="anatomi_our_services_on_cam_tamiri_content">
              <p>
                Araba camınızda bir kırık veya çatlak mı var? Aracınızın camının
                değiştirilmesi veya tamiri konusunda cam uzmanı Carglass®’ a
                güvenin. Size camın ötesinde hizmet veren Carglass® kalitesidir.
              </p>
            </div>
            <div class="anatomi_our_services_on_cam_tamiri_info">
              <div class="anatomi_our_services_on_cam_tamiri_info_image">
                <img src="https://anatomi.s3.eu-north-1.amazonaws.com/carglass-%C3%B6n-cam-tamiri-icon-1.png" alt />
                <p>Ön cam tamiri için çatlağın boyutu madeni 1 TL boyutundan büyük
                  olmamalıdır.</p>
              </div>
              <div class="anatomi_our_services_on_cam_tamiri_info_image">
                <img src="https://anatomi.s3.eu-north-1.amazonaws.com/carglass-%C3%B6n-cam-tamiri-icon-2.png" alt />
                <p>Çatlağın konumu kenarlardan olan mesafe en az 5 cm ve sürücünün görüş hizası olan 30 cm’lik alan içinde olmamalıdır.</p>
              </div>
              <div class="anatomi_our_services_on_cam_tamiri_info_image">
                <img src="https://anatomi.s3.eu-north-1.amazonaws.com/carglass-%C3%B6n-cam-tamiri-icon-3.png" alt />
                <p>Carglass®, bir ön cam çatlağını 30 dakikada tamir edebilir.
                  Böylelikle zamandan tasarruf edebilirsiniz.</p>
              </div>
            </div>
    
            <div class="anatomi_our_services_on_cam_tamiri_parts_of_car">
              <div class="anatomi_our_services_on_cam_ve_yan_cam">
                <div class="anatomi_our_services_on_cam">
                  <img src="https://anatomi.s3.eu-north-1.amazonaws.com/carglass-arka-cam-icon.png" alt />
                  <p>Ön Cam</p>
                </div>
                <div class="anatomi_our_services_yan_cam">
                  <img src="https://anatomi.s3.eu-north-1.amazonaws.com/carglass-yan-cam-icon.png" alt />
                  <p>Yan Cam</p>
                </div>
              </div>
              <div class="anatomi_our_services_car_img">
                <img src="https://cro-anatomi.s3.eu-north-1.amazonaws.com/carglass_car_islemler.jpg" alt />
              </div>
              <div class="anatomi_our_services_arka_cam_ve_kamera_kalibrasyonu">
                <div class="anatomi_our_services_arka_cam">
                  <img src="https://anatomi.s3.eu-north-1.amazonaws.com/carglass-%C3%B6n-cam-icon.png" alt />
                  <p>Arka Cam</p>
                </div>
                <div class="anatomi_our_services_kamera_kalibrasyonu">
                  <img src="https://anatomi.s3.eu-north-1.amazonaws.com/carglass-kamera-kalibrasyonu-icon.png" alt />
                  <p>Kamera Kalibrasyonu</p>
                </div>
              </div>
            </div>
          </div>
    
          <div class="anatomi_our_purpose">
            <div class="anatomi_our_purpose_content_info">
              <img src="https://cro-anatomi.s3.eu-north-1.amazonaws.com/carglass_content_logo_orj.png" alt />
              <p>Hedefimiz; Cam tamiri ve değişiminde doğal tercih olmaktır.</p>
              <span>
                Müşterilerimizin, çalışanlarımızın ve partner firmaların bize
                duyduğu güvenden gurur duyuyor ve bunu koruyup; daha da geliştirmek
                için kaliteye her zaman ön planda tutuyoruz.
              </span>
            </div>
            <div class="anatomi_our_purpose_img">
              <img src="https://cro-anatomi.s3.eu-north-1.amazonaws.com/carglass_hedefimiz_image.jpg" alt />
            </div>
          </div>
     
          <div class="anatomi_our_solution">
            <div class="anatomi_our_solution_content">
            <h3>Mümkün olan her durumda sistematik olarak tamir yaparız!</h3>
              <button class="anatomi_our_solution_content_contact-button"
                onclick="window.location.href='/Randevu/SiziArayalim';">İletişime
                Geç</button>
            </div>
          </div>
    
          <div class="anatomi_our_fixing">
            <div class="anatomi_our_fixing_info">
              <img src="https://cro-anatomi.s3.eu-north-1.amazonaws.com/carglass_content_logo.jpg" alt />
              <p>Mümkün olan her durumda ‘önce tamir politika’mızı uygularız!</p>
              <button class="anatomi_randevu-btn"
                onclick="window.location.href='/Randevu/BayiSec';">Randevu
                Alın</button>
            </div>
            <div class="anatomi_our_fixing_img">
              <img src="https://cro-anatomi.s3.eu-north-1.amazonaws.com/carglass_fixing_image.jpg" alt />
            </div>
          </div>
    
        
    `;
  const header = document.querySelector("#header");
  if (header) {
    header.insertAdjacentHTML("beforeend", html);
  }
};

const anatomi_carglass_anasayfa_redesign_css = () => {
  const style = `
    <style>
    @import url('https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700;1,900&display=swap');
    body {
      padding: 0 !important;
      
    }
    p, span , h2,h3, a ,li, button{
    font-family: "Roboto", serif !important;
    }
    .anatomi_break-word {
      word-break: break-word;
      max-width: 65%;
    }
    .eWlnOb{
        color: #404040 !important;
        font-size: 28px !important;
        text-transform: capitalize !important;
      }
        .iqPsnt{
          transform: translate(-50px, -50%) !important;
        }
        .ldZdCm{
          transform: translate(50px, -50%) !important;
          }
        .ddsmoothmenu ul{
        margin-left: 0 !important;}
    .anatomi_our_solution_counter{
    color: white !important;}
    
    h2{
    font-size: 28px !important;
    font-weight: 800 !important;}
    
    .anatomi_form-container {
      position: relative;
        top: 50%;
        left: 100px;
        width: 450px;
        transform: translateY(-50%);
    }
    
    
    
    .anatomi_form_tab_btn_container {
      display: flex;
      justify-content: space-between;
    }
      .anatomi_form_tab_btn{
        padding: 10px 55px;
        font-size: 18px;
        border-top-left-radius: 10px;
        border-top-right-radius: 10px;
        border: none;
        border-bottom: 1px solid #80808066;
        color: black;
      }
    
    .anatomi_form_tab_btn.active {
      background-color: white;
      text-decoration: underline;
      font-weight: bold;
      border: none;
    
    }
    .anatomi_form_phone_container{
      display: flex;
      gap: 45px;
    }
    .anatomi_form_phone_btn{
      position: relative;
        width: 45%;
        margin-top: 10px;
        background-color: #fedd44;
        font-weight: bold;
        border-radius: 5px;
        border: none;
        cursor: pointer;
        white-space: nowrap;
        padding: 10px 0px;
        font-size: 18px;
        color: black;
        }
    
    .anatomi_form_phone_btn i{
      margin-right: 10px;
    }
    .anatomi_form_phone_btn:hover {
      background-color: #b09613;
      color: #b09613;
    }
    
    .anatomi_form_phone_btn::after {
      content: url('https://anatomi.s3.eu-north-1.amazonaws.com/icons8-copy-64.png'); 
      position: absolute;
      right: 30%;
      top: -15%;
      opacity: 0;
      transition: opacity 0.3s;
      transform: scale(0.5);
    
    
    }
    
    .anatomi_form_phone_btn:hover::after {
      opacity: 1; 
     
    }
    
    .anatomi_form_phone_btn.copied::after {
      content: "Kopyalandı"; 
      color: black;
      opacity: 1;
      right: 25%;
      top: 15%;
      transform: scale(0.9);
    }
    
    .anatomi_randevu_form{
    display: block;
    visibility: visible;}
    
    #anatomi_randevu_form_content {
        background: white;
        height: fit-content;
        padding: 30px;
        display: flex;
        flex-direction: column;
        justify-content: center;
        gap: 10px;}
    
    #anatomi_randevu_form_content label {
      font-size: 16px;
        color: black;
    }
      
    #anatomi_randevu_form_content input {
        background-color: #f1f1f1;
        border: 1px solid #dedcdc;
        border-radius: 6px;
        box-shadow: none;
        width: 95%;
        height: 25px;
        padding: 10px 5px;
        margin-bottom: 15px;
    }
    
    .anatomi_form_randevu_btn{
        background-color: #fedd44;
        color: #1e1e1e;
        width: 100%;
        padding: 10px 0px;
        font-size: 15px;
        font-weight: bold;
        border-radius: 5px;
        border: none;
        cursor: pointer;
        transition: background-color 0.3s ease;
        white-space: nowrap;
        margin-top: 20px;
    }
    
    #anatomi_nameSurname , #anatomi_phone {
    font-size: 16px;
    color: black;}
    
    .anatomi_modal {
      display: none; 
      position: fixed;
      top: 0;
      left: 0;
      z-index: 99999;
      width: 100%;
      height: 100%;
      background-color: rgba(0, 0, 0, 0.5);
      justify-content: center;
      align-items: center;
    }
    
    .anatomi_modal-content {
      background-color: #fff;
      padding: 30px;
      border-radius: 10px;
      max-width: 1000px;
      max-height: 80vh;
      overflow-y: auto;
    }
    
    .anatomi_modal-body {
      max-height: 500px;
      overflow-y: scroll;
      padding: 20px;
    }

    .anatomi_modal-body p {
    text-align: justify;
    }
    
    
    .anatomi_modal-close , .anatomi_modal-close_second, .anatomi_modal-close_third {
    position: absolute;
      top: 10px;
      right: 10px;
      background: none;
      border: none;
         font-size: 36px;
        color: white;
      cursor: pointer;
      transition: color 0.3s ease;
    }
    
    #anatomi_modal_checkbox, #anatomi_modal_checkbox_second, #anatomi_modal_checkbox_third {
      box-shadow: none !important;
      width: 30px;}
    
    .anatomi_modal_checkbox_wrapper label{
    color: black;
    font-size: 16px;
    padding-left: 10px;
    }
    .anatomi_modal-body_third{
      overflow: hidden !important;
    }
    #header {
      padding-top: 0;
    }
    
    .menu-wrapper {
      border: none !important;
      margin-top: 0 !important;
      padding: 0 !important;
      font-weight: bold;
    }
    
    .menu-wrapper li a {
      font-weight: bold !important;
    }
    
    #anatomi_navbar {
      width: 100%;
      padding: 20px 0;
    }
    
    .anatomi_navbar-container {
      display: flex;
      justify-content: space-evenly;
      align-items: center;
      padding: 0px 20px;
    }
    
    .anatomi_navbar-logo {
    
      width: 200px;
    }
    .anatomi_navbar-right{
        display: flex;
        align-items: center;
        gap: 20px;
    }
    .anatomi_navbar_phone-number {  
    font-size: 18px !important;
    font-weight: bold !important;
    padding-bottom: 0px !important;
    white-space: nowrap !important;
    }
    .anatomi_randevu-btn {
      background-color: #fedd44;
      color: #1e1e1e;
      padding: 5px 20px;
      font-size: 15px;
      font-weight: bold;
      border-radius: 5px;
      border: none;
      cursor: pointer;
      transition: background-color 0.3s ease;
      white-space: nowrap;
    }
      
    .anatomi_randevu-btn-map{
      background-color: #fedd44 ;
      color: #1e1e1e;
      padding: 5px 60px;
      font-size: 15px;
      font-weight: bold;
      border-radius: 5px;
      border: none;
      cursor: pointer;
      transition: background-color 0.3s ease;
      white-space: nowrap;
    }
    .anatomi_hamburger_icon {
      font-size: 24px;
      cursor: pointer;
      display: none; 
    }
    
    .anatomi_sidebar {
      position: fixed;
      top: 0;
      right: -300px; 
      width: 250px;
      height: 100%;
      background-color: #000000f5;
      color: #fff;
      transition: right 0.3s ease;
      z-index: 1000;
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      overflow-y: auto;
    }
    
    .anatomi_closebutton  {
      font-size: 24px;
      color: #fff;
      padding: 10px;
      cursor: pointer;
      align-self: flex-end;
      margin-right: 10px;
    }
    
    #anatomi_responsive_navbar {
      list-style-type: none;
      padding: 0;
      width: 100%;
    }
    
    #anatomi_responsive_navbar li {
      padding: 15px 20px;
      cursor: pointer;
      width: 100%;
      transition: background-color 0.3s ease;
    }
    
    .anatomi_dropdown-trigger {
        cursor: pointer; 
        padding: 10px 15px; 
    }
    
    .anatomi_dropdown-trigger i{
        position: absolute;
        right: 15px;
    }
    
    .anatomi_dropdown {
        display: none;
        padding-left: 20px;
        margin-top: 15px;
    }
    
    .anatomi_dropdown-trigger.active + .anatomi_dropdown {
        display: block;
    }
    
    .anatomi_dropdown-item {
        padding: 15px 0px; 
        cursor: pointer; 
    }
    
    .anatomi_nested-dropdown-trigger {
        padding:15px 0px !important; 
        cursor: pointer; 
    }
    
    .anatomi_nested-dropdown-trigger.active + .anatomi_nested-dropdown {
        display: block;
    }
    
    .anatomi_hero-section {
      position: relative;
      background-image: url("https://cro-anatomi.s3.eu-north-1.amazonaws.com/carglass_header_blur_car.jpg");
      background-position: center;
      background-repeat: no-repeat;
      background-size: cover;
      height: 95vh;
    }
    
    .anatomi_content-section {
       display: flex;
      flex-wrap: wrap; 
      justify-content: center; 
      gap: 20px; 
      padding: 60px;
      border-top: 1px solid rgba(128, 128, 128, 0.712);
      background-color: white;
          width: 80%;
        margin: 0 auto;
    }
    
    .anatomi_content-section-info {
      display: flex;
      flex-direction: column;
      align-items: center;
      flex: 1; 
      text-align: center;
      justify-content: flex-start;
        height: 100%;
    }
    
    .anatomi_content-section-info img {
    border: 1px solid red;
        border-radius: 20px;
        padding: 15px;
        height: 70px;
    }
    
    .anatomi_content-section-info p {
      font-size: 20px;
      font-weight: bold;
      padding: 10px;
      line-height: 25px;
    }
      @media (max-width: 1024px) {
      .anatomi_content-section-info {
      min-height: 200px; 
      }
    }
    
    
    .anatomi_content_section_map {
      display: flex;
      justify-content: space-around;
      align-items: center;
      padding: 50px 20px;
      gap: 20px;
      font-size: 20px;
      font-weight: bold;
      background-color: #eeeeee;
    }
    
    @media (min-width: 768px) and (max-width: 900px) {
    .anatomi_content-section_map_img iframe {
      width: 500px;
    }
    }
    .anatomi_content-section_map_info {
      display: flex;
      flex-direction: column;
      gap: 30px;
    }
    
    .anatomi_content-section_map_phone {
      display: flex;
      align-items: center;
      gap: 20px;
      font-size: 24px;
    }
      .anatomi_content_section_map_info_phone_number{
      display: flex;
        flex-direction: column;
        position: relative;
        gap: 15px;  
      }
    
      .anatomi_map_popup_phone_copy{
       display: none;
      position: absolute;
      background-color: black;
      color: white;
      padding: 10px;
      border-radius: 5px;
      font-size: 14px;
      z-index: 999;
      transition: opacity 0.5s ease;
      }
    
    .anatomi_content-section_map_phone p {
    padding: 0px !important;
      font-size: 18px;
    }
    .anatomi_content-section_map_phone span {
      white-space: nowrap;
      text-decoration: underline;
      font-size: 18px;
      cursor: pointer;
    }
    .anatomi_content_section_map_subeler {
      width: 100%;
    }
    
    .anatomi_content_section_map_randevu p {
      padding-bottom: 20px;
      font-size: 18px;
      line-height:25px;
    }
    
    .anatomi_content-section_map_info_phone_icon {
      width:30%;
    }
    
    .anatomi_our_services {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      text-align: center;
      padding: 50px 50px;
    }
    
    .anatomi_our_services_content_options {
      display: flex;
      flex-wrap: wrap;
      gap: 20px;
    }
    
    .anatomi_our_services_content_info {
      display: flex;
      flex-direction: column;
      align-items: center;
      gap: 20px;
      flex: 1 1 calc(33.333% - 20px);
      max-width: 100%;
      min-width: 250px;
    }
    
    .anatomi_our_services_content_info img {
      max-width: 100%;
      height: 250px;
      border-radius: 5px;
    }
    
    .anatomi_our_services_content_info p {
      font-size: 18px;
      text-align: center;
    }
    
    .anatomi_detail_button_container {
      display: flex;
      justify-content: center;
      margin-top: auto;
    }
    
    .anatomi-our-services-detail-button {
      background: none;
      padding: 10px 30px;
      border-radius: 8px;
      font-weight: bold;
      color: black;
    }
    
    .anatomi_our_services_content_contact {
     display: flex;
        align-items: center;
        justify-content: space-around;
        background-color: #eeeeee;
        margin-top: 10px;
        padding: 50px;
    }
    
    .anatomi_our_services_content_contact_info {
      display: flex;
        flex-direction: column;
        width: 60%;
        gap: 30px;
    }
    .anatomi_our_services_content_contact_info p {
      font-size: 24px;
      width: 70%;
      text-align: left;
      line-height: 25px;
      font-weight: bold;
    }
    .anatomi_our_services_content_contact_info span {
      text-align: left;
      font-size: 18px;
      line-height: 25px;
    }
    .anatomi_our_services_content_contact_image {
      display: flex;
      justify-content: flex-end;
    }
    
    .anatomi_our_services_content_contact_image img {
      width: 100%;
      height: auto;
      max-width: 600px;
    }
    
    .anatomi_our_services_content_contact_button_container {
      display: flex;
      justify-content: flex-start;
    }
    .anatomi_our_services_content_contact_us_btn {
      padding: 10px 150px;
      min-width: 120px;
      background-color: #fedd44;
      color: black;
      font-weight: bold;
      font-size: 18px;
      border: none;
      border-radius: 5px;
      cursor: pointer;
      white-space: nowrap;
    }
    
    .anatomi_our_services_on_cam_tamiri {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      gap: 30px;
      padding: 50px 0px;
      text-align: center;
    }
    
    .anatomi_our_services_on_cam_tamiri_content p {
      font-size: 24px;
      max-width: 60%;
      margin: 0 auto;
      line-height: 1.5;
    }
    
    .anatomi_our_services_on_cam_tamiri_info {
      display: flex;
      justify-content: center;
      gap: 50px;
      flex-wrap: wrap;
      padding-top: 30px;
    }
    
    .anatomi_our_services_on_cam_tamiri_info_image {
      display: flex;
      flex-direction: column;
      align-items: center;
      max-width: 300px;
      width: 90%;
      text-align: center;
    }
    
    .anatomi_our_services_on_cam_tamiri_info_image img {
      width: 100%;
      height: auto;
      max-width: 200px;
      margin-bottom: 15px;
    }
    
    .anatomi_our_services_on_cam_tamiri_info_image p {
      font-size: 18px;
      font-weight: bold;
      line-height: 1.4;
      max-width: 100%;
    }
    
    .anatomi_our_services_on_cam_tamiri_parts_of_car {
      display: flex;
      justify-content: space-between;
      padding: 50px 50px 250px 50px;
    }
    
    .anatomi_our_services_on_cam_tamiri_parts_of_car p {
      text-align: center;
      padding-top: 20px;
      font-size: 18px;
    }
    
    .anatomi_our_services_on_cam_ve_yan_cam,
    .anatomi_our_services_arka_cam_ve_kamera_kalibrasyonu {
      display: flex;
      flex-direction: column;
      justify-content: space-around;
      flex: 1;
    }
    
    .anatomi_our_services_car_img img {
      max-width: 100%;
    }
    
    .anatomi_our_services_on_cam,
    .anatomi_our_services_yan_cam,
    .anatomi_our_services_arka_cam,
    .anatomi_our_services_kamera_kalibrasyonu {
      display: flex;
      flex-direction: column;
      margin-bottom: 15px;
      height: 150px;
    }
    
    .anatomi_our_services_on_cam img,
    .anatomi_our_services_yan_cam img,
    .anatomi_our_services_arka_cam img,
    .anatomi_our_services_kamera_kalibrasyonu img {
      border-bottom: 3px solid gray;
      padding-bottom: 20px;
      max-width: 150px;
    }
    
    .anatomi_our_purpose {
      display: flex;
        justify-content: space-around;
        align-items: center;
        padding: 50px;
        background-color: #eeeeee;
    }
    .anatomi_our_purpose_img img {
      min-width: 300px;
    }
    .anatomi_our_purpose_content_info {
      display: flex;
      flex-direction: column;
      gap: 20px;
      align-items: flex-start;
      width: 60%;
    }
    
    .anatomi_our_purpose_content_info img {
      max-width: 400px;
      height: auto;
      margin-bottom: 10px;
    }
    
    .anatomi_our_purpose_content_info p,
    .anatomi_our_purpose_content_info span {
      font-size: 18px;
      text-align: left;
      width: 50%;
    }
    
    .anatomi_our_purpose_content_info p {
      font-weight: bold;
    }
    .anatomi_our_purpose_img img {
      max-width: 100%;
      height: auto;
    }
    
    .anatomi_our_solution {
      background-image: url("https://cro-anatomi.s3.eu-north-1.amazonaws.com/carglass_solution_image.jpg");
      background-size: cover;
      background-position: center;
      height: 550px;
      display: flex;
      justify-content: center;
      align-items: center;
      position: relative;
      color: white;
      text-align: center;
    }
    
    .anatomi_our_solution::before {
      content: "";
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background-color: rgba(0, 0, 0, 0.5);
      z-index: 1;
    }
    
    .anatomi_our_solution_content {
      position: relative;
      z-index: 2;
      display: flex;
      flex-direction: column;
      align-items: center;
      gap: 15px;
    }
    
    .anatomi_our_solution_content h3 {
      font-size: 48px;
      margin: 0;
      padding: 0;
      color: white;
    }
    
    .anatomi_our_solution_content span {
      color: #f9301e;
    }
    
    .anatomi_our_solution_content_contact-button {
      padding: 10px 150px;
      background-color: #fedd44;
      color: black;
      font-weight: bold;
      font-size: 18px;
      border: none;
      border-radius: 5px;
      cursor: pointer;
      white-space: nowrap;
    }
    
    .anatomi_our_reviews{
    padding: 100px;}
    
    
    
    
    .anatomi_our_fixing {
    display: flex;
        padding: 50px;
        justify-content: space-around;
        gap: 30px;
    }
    
    .anatomi_our_fixing_info{
      width: 50%;
      display: flex;
        flex-direction: column;
        gap: 20px;
        align-items: flex-start;
    }
    .anatomi_our_fixing_img {
    display: flex;
    align-items: center;
      
    }
    .anatomi_our_fixing_img img {
    max-height: 200px;
        max-width: 550px;
        border-radius: 10px;
    }
    .anatomi_our_fixing_info p {
      font-weight: bold;
      font-size: 24px;
      width: 40%;
      line-height: 25px;
    }
    
    @media (max-width: 1140px) {
    
    .anatomi_hero-section{
      height: 105vh;
    }
    
    }
    
    @media (max-width: 1440px) {
    .anatomi_content-section{
       display: grid;
       grid-template-columns: repeat(3, 1fr);
       gap: 50px;
       padding: 50px 20px;
    }
         .anatomi_content-section-info:nth-child(4) , .anatomi_content-section-info:nth-child(5){
      margin-top: 40px;
      transform: translateX(50%);
    }
    
    }
    
    
    @media (max-width: 768px) {
    .anatomi_navbar-container {
      justify-content: space-between;
    }
      .anatomi_hamburger_icon {
        display: block;
      }
      .anatomi_navbar-right {
        display: none;
      }
      .anatomi_hero-section{
      height: 105vh;
      }
      .anatomi_form-container{
      width: 90%;
      top: 50%;
        left: 0;
        margin: 0 auto;
      }
      .anatomi_form_tab_btn{
      width: 45%;
      padding: 10px 0px;
      font-size: 14px;
        
      }
      #frmSiziArayalim{
        min-height: 550px;
      }
        .anatomi_form_phone_container{
        flex-direction: column;
        gap: 0px;}
    
      .anatomi_form_phone_btn{
        font-size: 14px;
        width: 100%;
      }
        .anatomi_form_phone_btn i{
        margin-right: 10px;}
      .anatomi_content-section-info p {
        font-size: 14px;
      }
    
      .anatomi_modal-content{
        width: 85%;
        padding: 15px;
      }
    
    .anatomi_form_phone_btn::after{
      right: 40%;
      top: -20%;
      }
    .anatomi_form_phone_btn.copied::after{
      right: 40%;
      top: 20%;
    }
    
    .anatomi_modal-body_third{
      overflow-y: scroll !important;
    }
    
    
      .anatomi_content-section{ 
       display: flex;
        flex-direction: column;
        gap: 20px;
        
      }
      .anatomi_content-section-info:nth-child(4) , .anatomi_content-section-info:nth-child(5){
      margin-top: 0px;
      transform: translateX(0%);
    }
    
      .anatomi_content_section_map {
        flex-direction: column;
        align-items: center;
        padding: 20px;
      }
      .anatomi_content_section_map_randevu p {
      font-size: 14px;}
       .anatomi_content-section_map_img{
       display: flex;
       justify-content: center;
       }
    
       .anatomi_content-section_map_img iframe{
       width: 100%;
            height: 300px;
       }
            .anatomi_content-section_map_phone span , .anatomi_content-section_map_phone p{
            font-size: 14px;}
      .anatomi_content_section_map_subeler {
        width: 80%;
      }
      .anatomi_our_services_content_contact_info {
        padding-left: 0;
        padding-top: 20px;
        align-items: center;
        text-align: center;
        width: 90%;
      }
    
      .anatomi_our_services_content_info p {
        text-align: justify;
        max-width: 100%;
        font-size: 14px;
      }
    
      .anatomi_our_services_content_contact_image {
        order: -1;
      }
        .anatomi_our_services_content_contact_image img {
        max-width: 300px;
        }
      .anatomi_our_services_content_contact {
        flex-direction: column;
        align-items: center;
        gap: 20px;
      }
    
      .anatomi_our_services_content_contact_info p {
        width: 100%;
        font-size: 14px;
        text-align: justify;
      }
    
      .anatomi_our_services_content_contact_us_btn {
        width: 100%;
        font-size: 15px;
        padding: 5px 70px;
      }
      .anatomi_content_section_map_randevu-btn-container{
      display:flex; 
      justify-content: center;
    }
      .anatomi_our_services_on_cam_tamiri_info {
        flex-direction: column;
        padding-left: 0;
        padding-top: 20px;
        align-items: center;
        max-width: 350px;
      }
      .anatomi_our_services_on_cam_tamiri_content p {
        font-size: 14px;
        width: 90%;
      }
      .anatomi_our_services_on_cam_tamiri_info_image {
        display: flex;
        flex-direction: row;
        margin-bottom: 20px;
        align-items: center;
      }
      .anatomi_our_services_on_cam_tamiri_info_image img {
        max-width: 100px;
        padding-right: 20px;
      }
    
      .anatomi_our_services_on_cam_tamiri_info p {
        font-size: 14px;
        width: 50%;
        font-weight: normal;
        text-align: left;
      }
    
      .anatomi_our_services_on_cam_tamiri_parts_of_car {
        gap: 0px;
        padding: 0px 0px 50px 0px;
        justify-content: center;
        max-width: 300px;
      }
      .anatomi_our_services_on_cam_tamiri_parts_of_car p {
        font-size: 14px;
      }
      .anatomi_our_fixing {
        flex-direction: column;
        padding: 20px 0px 0px;
        align-items: center;
      }
      .anatomi_our_fixing_info {
        align-items: center;
        padding: 20px 0px;
        text-align: center;
        width: 90%;
      }
      .anatomi_our_fixing_info p {
        width: 70%;
        font-size: 14px;
        font-weight: normal;
        text-align: center;
      }
    .anatomi_our_fixing_img img{
    max-width: 100%;}
      .anatomi_our_services_content_options {
        flex-direction: column;
        align-items: center;
        padding: 0px;
      }
    
      .anatomi_our_services_content_info {
        width: 90%;
      }
      .anatomi_our_services_content_contact_info span {
        font-size: 14px;
      }
      .anatomi_our_services_content_info.active {
        display: flex;
      }
    
      .anatomi_our_services_content_info img {
        max-width: 300px;
      }
      .anatomi-our-services-detail-button {
        display: none;
      }
    
    
      .anatomi_our_services_on_cam_ve_yan_cam,
      .anatomi_our_services_arka_cam_ve_kamera_kalibrasyonu {
        max-width: 20%;
      }
        .anatomi_our_services_arka_cam_ve_kamera_kalibrasyonu {
        gap: 20px;}
      .anatomi_our_services_car_img img {
        max-width: 150px;
      }
      .anatomi_our_purpose {
        flex-direction: column;
        gap: 20px;
        align-items: center;
      }
      .anatomi_our_purpose_content_info{
      width: 100%;
      align-items: center;
      }
      .anatomi_our_purpose_content_info p {
        width: 100%;
        font-size: 14px;
        text-align: center;
      }
      .anatomi_our_purpose_img {
        width: 80%;
        display: flex;
        justify-content: center;f
        align-items: center;
      }
    
      .anatomi_our_purpose_content_info span {
        margin-top: 10px;
        width: 100%;
        font-size: 14px;
      }
      .anatomi_our_solution_content h3 {
        font-size: 24px;
        padding: 10px;
      }
      .anatomi_our_solution_content span {
        font-size: 24px;
      }
        .anatomi_our_solution_content_contact-button{
        padding: 5px 100px;
        font-size: 15px;}

    }
    
    @media (max-height: 750px) {
      .anatomi_hero-section{
      height: 130vh;
      }
    }

    .anatomi_responsive_navbar {
    list-style: square !important;}

       .anatomi_responsive_navbar ul {
    list-style: square !important;}

    .anatomi_show_email {
    color: #d95b44;
    cursor: pointer;
    }  
    
    </style>
      `;
  const head = document.querySelector("head");
  head.insertAdjacentHTML("beforeend", style);
  const fontAwesomeLink = `
         <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.2/css/all.min.css">

      `;
  head.insertAdjacentHTML("beforeend", fontAwesomeLink);
};

const anatomi_carglass_anasayfa_redesign_js = () => {
  const add_form_in_anasayfa = () => {
    const buttons = document.querySelectorAll(".anatomi_form_tab_btn");

    buttons[1].classList.add("active");

    buttons.forEach((button) => {
      button.addEventListener("click", () => {
        buttons.forEach((btn) => {
          btn.classList.remove("active");
        });
        button.classList.add("active");
      });
    });

    const anasayfa_orijinal_label_content = document.querySelector(
      "#frmSiziArayalim > p:nth-child(2) > label"
    );
    if (anasayfa_orijinal_label_content) {
      anasayfa_orijinal_label_content.innerHTML = "İsim Soyisim";
      anasayfa_orijinal_label_content.setAttribute(
        "style",
        "font-size: 16px; color: black;"
      );
    }

    const anasayfa_orijinal_label_content2 = document.querySelector(
      "#frmSiziArayalim > p:nth-child(3) > label"
    );
    if (anasayfa_orijinal_label_content2) {
      anasayfa_orijinal_label_content2.innerHTML = "Cep Telefonu";
      anasayfa_orijinal_label_content2.setAttribute(
        "style",
        "font-size: 16px; color: black;"
      );
    }

    const anasayfa_orijinal_label_span = document.querySelector(
      "#frmSiziArayalim > p:nth-child(2) > label > span"
    );
    if (anasayfa_orijinal_label_span) {
      anasayfa_orijinal_label_span.style.display = "none";
    }

    const anasayfa_orijinal_label_span2 = document.querySelector(
      "#frmSiziArayalim > p:nth-child(3) > label > span"
    );
    if (anasayfa_orijinal_label_span2) {
      anasayfa_orijinal_label_span2.style.display = "none";
    }

    const anasayfa_orijinal_name_input = document.querySelector(
      "#frmSiziArayalim > p:nth-child(2) > input"
    );
    if (anasayfa_orijinal_name_input) {
      anasayfa_orijinal_name_input.setAttribute(
        "style",
        "background-color: #f1f1f1; border: 1px solid #dedcdc; border-radius: 6px; box-shadow: none; width: 95%; height: 25px; padding: 10px 5px; color:black; font-size:16px;"
      );
    }

    const anasayfa_orijinal_phone_input = document.querySelector(
      "#frmSiziArayalim > p:nth-child(3) > input"
    );
    if (anasayfa_orijinal_phone_input) {
      anasayfa_orijinal_phone_input.setAttribute(
        "style",
        "background-color: #f1f1f1; border: 1px solid #dedcdc; border-radius: 6px; box-shadow: none; width: 95%; height: 25px; padding: 10px 5px; color:black; font-size:16px;"
      );
    }

    const anasayfa_submit_button = document.querySelector("#submitButton");

    setInterval(() => {
      const yurtdisiCheckbox = document.getElementById(
        "anatomi_kisisel_veri_yurtdisi_checkbox"
      );
      const korunmasiCheckbox = document.getElementById(
        "anatomi_kisisel_veri_korunması_checkbox"
      );
      const islenmesiCheckbox = document.getElementById(
        "anatomi_kisisel_veri_islenmesi_checkbox"
      );

      const allCheckboxesChecked =
        yurtdisiCheckbox.checked &&
        korunmasiCheckbox.checked &&
        islenmesiCheckbox.checked;

      if (
        anasayfa_submit_button &&
        anasayfa_orijinal_name_input &&
        anasayfa_orijinal_phone_input
      ) {
        if (
          anasayfa_orijinal_name_input.value &&
          anasayfa_orijinal_phone_input.value &&
          allCheckboxesChecked
        ) {
          anasayfa_submit_button.disabled = false;
        } else {
          anasayfa_submit_button.disabled = true;
        }
      }

      if (anasayfa_submit_button) {
        if (anasayfa_submit_button.disabled) {
          anasayfa_submit_button.style.backgroundColor = "gray";
          anasayfa_submit_button.style.color = "white";
        } else {
          anasayfa_submit_button.style.backgroundColor = "#FEDD44";
          anasayfa_submit_button.style.color = "black";
        }
      }
    }, 100);

    const anasayfa_orijinal_form = document.querySelector("#frmSiziArayalim");
    if (anasayfa_orijinal_form) {
      anasayfa_orijinal_form.setAttribute(
        "style",
        "background: white; height: 500px; padding: 30px;"
      );
    }

    const anasayfa_orijinal_form_title = document.querySelector(
      "#frmSiziArayalim > h1"
    );
    if (anasayfa_orijinal_form_title) {
      anasayfa_orijinal_form_title.style.display = "none";
    }

    const randevuAlinButton = document.querySelector(".anatomi_randevuAlın");
    const siziArayalimButton = document.querySelector(".anatomi_siziArayalım");

    const anasayfa_orijinal_homeCallArea = document.querySelector(
      "#content > div > div:nth-child(3) > div:nth-child(2) > div.homeCallArea.hidden"
    );

    const anatomi_randevuAlın_form = document.querySelector(
      ".anatomi_randevu_form"
    );

    if (anasayfa_orijinal_homeCallArea && anatomi_randevuAlın_form) {
      const toggleFormVisibility = (buttonClicked) => {
        if (buttonClicked === "siziArayalim") {
          anasayfa_orijinal_homeCallArea.style.display = "block";
          anasayfa_orijinal_homeCallArea.style.visibility = "visible";

          anatomi_randevuAlın_form.style.display = "none";
          anatomi_randevuAlın_form.style.visibility = "hidden";
        } else if (buttonClicked === "randevuAlin") {
          anatomi_randevuAlın_form.style.display = "block";
          anatomi_randevuAlın_form.style.visibility = "visible";

          anasayfa_orijinal_homeCallArea.style.display = "none";
          anasayfa_orijinal_homeCallArea.style.visibility = "hidden";
        }
      };

      window.onload = () => {
        toggleFormVisibility("siziArayalim");
      };

      siziArayalimButton.addEventListener("click", () => {
        toggleFormVisibility("siziArayalim");
      });

      randevuAlinButton.addEventListener("click", () => {
        toggleFormVisibility("randevuAlin");
      });
    }

    const anatomi_form_tab_btn_container = document.querySelector(
      "#header > div.anatomi_hero-section > div > div"
    );
    if (anasayfa_orijinal_homeCallArea && anatomi_form_tab_btn_container) {
      anatomi_form_tab_btn_container.insertAdjacentElement(
        "afterend",
        anasayfa_orijinal_homeCallArea
      );
    }

    const anasayfa_orijinal_form_second_p = document.querySelector(
      "#frmSiziArayalim > p:nth-child(3)"
    );

    const anatomi_form_reklam_check = document.querySelector(
      "#header > div.anatomi_hero-section > div > p"
    );
    const anatomi_recaptcha_container = document.querySelector(
      "#header > div.anatomi_hero-section > div > div.anatomi_recaptcha_container"
    );

    if (anatomi_recaptcha_container && anasayfa_orijinal_form_second_p) {
      anasayfa_orijinal_form_second_p.insertAdjacentElement(
        "afterend",
        anatomi_recaptcha_container
      );
    }

    if (anatomi_form_reklam_check) {
      anatomi_form_reklam_check.setAttribute(
        "style",
        "font-size: 15px; color: black;"
      );
    }
    if (anatomi_form_reklam_check && anasayfa_orijinal_form_second_p) {
      anasayfa_orijinal_form_second_p.insertAdjacentElement(
        "afterend",
        anatomi_form_reklam_check
      );
    }

    const anatomi_form_kvkk_check = document.querySelector(
      "#header > div.anatomi_hero-section > div > p:nth-child(3)"
    );
    if (anatomi_form_kvkk_check) {
      anatomi_form_kvkk_check.setAttribute(
        "style",
        "font-size: 15px; color: black; "
      );
    }
    if (anatomi_form_kvkk_check && anasayfa_orijinal_form_second_p) {
      anasayfa_orijinal_form_second_p.insertAdjacentElement(
        "afterend",
        anatomi_form_kvkk_check
      );
    }
    const anatomi_form_kvkk_check_input = document.querySelector(
      "#frmSiziArayalim > p:nth-child(5) > input[type=checkbox]"
    );
    if (anatomi_form_kvkk_check_input) {
      anatomi_form_kvkk_check_input.setAttribute(
        "style",
        "width: 30px ! important;"
      );
    }

    const anatomi_form_reklam_check_input = document.querySelector(
      "#frmSiziArayalim > p:nth-child(4) > input[type=checkbox]"
    );
    if (anatomi_form_reklam_check_input) {
      anatomi_form_reklam_check_input.setAttribute(
        "style",
        "width: 30px ! important;"
      );
    }

    const third_kvkk = document.querySelector(
      "#header > div.anatomi_hero-section > div > p.third_kvkk"
    );
    if (third_kvkk && anasayfa_orijinal_form_second_p) {
      anasayfa_orijinal_form_second_p.insertAdjacentElement(
        "afterend",
        third_kvkk
      );
    }
    if (third_kvkk) {
      third_kvkk.setAttribute(
        "style",
        "font-size: 15px; color: black; margin-top: 30px;"
      );
    }

    const third_kvkk_check_input = document.querySelector(
      "#frmSiziArayalim > p.third_kvkk > input[type=checkbox]"
    );
    if (third_kvkk_check_input) {
      third_kvkk_check_input.setAttribute("style", "width: 30px ! important;");
    }

    if (anasayfa_submit_button) {
      anasayfa_submit_button.setAttribute(
        "style",
        "background-color: #fedd44;color: #1e1e1e;width: 100%; padding: 10px 0px;font-size: 15px;font-weight: bold;border-radius: 5px;border: none;cursor: pointer;transition: background-color 0.3s ease;white-space: nowrap;margin-top: 10px;"
      );
      anasayfa_submit_button.innerHTML = "Sizi Arayalım";
    }
  };

  const phoneInput = document.getElementById("anatomi_phone");

  phoneInput.addEventListener("focus", (e) => {
    if (phoneInput.value === "") {
      phoneInput.value = "0";
    }
  });

  phoneInput.addEventListener("input", (e) => {
    let value = phoneInput.value;

    value = value.replace(/[^0-9]/g, "");

    if (!value.startsWith("0")) {
      value = "0" + value;
    }

    if (value.length > 11) {
      value = value.slice(0, 11);
    }

    if (value.length > 6) {
      value = value.replace(
        /(\d{1})(\d{3})(\d{3})(\d{2})(\d{2})/,
        "$1 ($2) $3 $4 $5"
      );
    }

    phoneInput.value = value;
  });

  phoneInput.addEventListener("blur", (e) => {
    if (phoneInput.value === "0") {
      phoneInput.value = "";
    }
  });

  const nameSurnameInput = document.getElementById("anatomi_nameSurname");
  nameSurnameInput.addEventListener("input", (e) => {
    nameSurnameInput.value = nameSurnameInput.value.replace(
      /[^A-Za-zğüşöçıİĞÜŞÖÇ\s]/g,
      ""
    );
  });

  add_form_in_anasayfa();

  set_local_storage_RandevuAlın = () => {
    const randevuAlınform = document.querySelector(".anatomi_form_randevu_btn");

    randevuAlınform.addEventListener("click", (e) => {
      e.preventDefault();
      const nameSurname = document.querySelector("#anatomi_nameSurname").value;
      const phone = document.querySelector("#anatomi_phone").value;

      const inputArray = [nameSurname, phone];

      localStorage.setItem("inputArray", JSON.stringify(inputArray));

      document.querySelector("#anatomi_nameSurname").value = "";
      document.querySelector("#anatomi_phone").value = "";
    });
    const button = document.querySelector(".anatomi_form_randevu_btn");
    const input_1 = document.getElementById("anatomi_nameSurname");
    const input_2 = document.getElementById("anatomi_phone");
    setInterval(() => {
      if (button && input_1 && input_2) {
        if (input_1.value && input_2.value) {
          button.disabled = false;
        } else if (!input_1.value || !input_2.value) {
          button.disabled = true;
        }
      }
      if (button) {
        if (button.disabled) {
          button.style.backgroundColor = "gray";
          button.style.color = "white";
        } else {
          button.style.backgroundColor = "#FEDD44";
          button.style.color = "black";
        }
      }
    }, 100);
  };

  set_local_storage_RandevuAlın();

  const add_modal_in_form = () => {
    const modal = document.getElementById("anatomi_modal");
    const modalCheckbox = document.getElementById("anatomi_modal_checkbox");
    const mainCheckbox = document.getElementById(
      "anatomi_kisisel_veri_islenmesi_checkbox"
    );
    const closeButton = document.querySelector(".anatomi_modal-close");

    mainCheckbox.addEventListener("click", (e) => {
      e.preventDefault();
      modal.style.display = "flex";
      mainCheckbox.checked = false;
    });

    window.addEventListener("click", (e) => {
      if (e.target === modal) {
        modal.style.display = "none";
      }
    });

    modalCheckbox.addEventListener("change", () => {
      if (modalCheckbox.checked) {
        mainCheckbox.checked = true;
        mainCheckbox.disabled = false;
        modal.style.display = "none";
      } else {
        mainCheckbox.checked = false;
        mainCheckbox.disabled = false;
      }
    });

    closeButton.addEventListener("click", () => {
      modal.style.display = "none";
      mainCheckbox.checked = false;
      mainCheckbox.disabled = false;
    });

    const modal2 = document.getElementById("anatomi_modal_second");
    const modalCheckbox2 = document.getElementById(
      "anatomi_modal_checkbox_second"
    );
    const mainCheckbox2 = document.getElementById(
      "anatomi_kisisel_veri_korunması_checkbox"
    );
    const closeButton2 = document.querySelector(".anatomi_modal-close_second");

    mainCheckbox2.addEventListener("click", (e) => {
      e.preventDefault();
      modal2.style.display = "flex";
      mainCheckbox2.checked = false;
    });

    window.addEventListener("click", (e) => {
      if (e.target === modal2) {
        modal2.style.display = "none";
      }
    });

    modalCheckbox2.addEventListener("change", () => {
      if (modalCheckbox2.checked) {
        mainCheckbox2.checked = true;
        mainCheckbox2.disabled = false;
        modal2.style.display = "none";
      } else {
        mainCheckbox2.checked = false;
        mainCheckbox2.disabled = false;
      }
    });

    closeButton2.addEventListener("click", () => {
      modal2.style.display = "none";
      mainCheckbox2.checked = false;
      mainCheckbox2.disabled = false;
    });

    const modal3 = document.getElementById("anatomi_modal_third");
    const modalCheckbox3 = document.getElementById(
      "anatomi_modal_checkbox_third"
    );
    const mainCheckbox3 = document.getElementById(
      "anatomi_kisisel_veri_yurtdisi_checkbox"
    );
    const closeButton3 = document.querySelector(".anatomi_modal-close_third");

    mainCheckbox3.addEventListener("click", (e) => {
      e.preventDefault();
      modal3.style.display = "flex";
      mainCheckbox3.checked = false;
    });

    window.addEventListener("click", (e) => {
      if (e.target === modal3) {
        modal3.style.display = "none";
      }
    });

    modalCheckbox3.addEventListener("change", () => {
      if (modalCheckbox3.checked) {
        mainCheckbox3.checked = true;
        mainCheckbox3.disabled = false;
        modal3.style.display = "none";
      } else {
        mainCheckbox3.checked = false;
        mainCheckbox3.disabled = false;
      }
    });

    closeButton3.addEventListener("click", () => {
      modal3.style.display = "none";
      mainCheckbox3.checked = false;
      mainCheckbox3.disabled = false;
    });
  };

  const showPopup = () => {
    const popup = document.getElementById("anatomi_map_popup_phone_copy");
    popup.style.display = "block";
    setTimeout(() => {
      popup.style.display = "none";
    }, 500);
  };

  const copyPhoneNumberMap = (phoneNumber) => {
    navigator.clipboard
      .writeText(phoneNumber)
      .then(() => {
        showPopup();
      })
      .catch((err) => {
        console.error("Kopyalama başarısız:", err);
      });
  };

  document.getElementById("phone1").addEventListener("click", () => {
    copyPhoneNumberMap(document.getElementById("phone1").textContent);
  });

  document.getElementById("phone2").addEventListener("click", () => {
    copyPhoneNumberMap(document.getElementById("phone2").textContent);
  });

  add_modal_in_form();

  const copyPhoneNumber = () => {
    document
      .querySelectorAll(".anatomi_form_phone_container .anatomi_form_phone_btn")
      .forEach((button) => {
        button.addEventListener("click", () => {
          const phoneNumber = button.textContent.trim();

          navigator.clipboard
            .writeText(phoneNumber)
            .then(() => {
              button.classList.add("copied");
              setTimeout(() => {
                button.classList.remove("copied");
              }, 400);
            })
            .catch((err) => {
              console.error("Kopyalama başarısız:", err);
            });
        });
      });
  };

  copyPhoneNumber();

  const add_hamburger_icon = () => {
    const hamburgerIcon = document.getElementById("anatomi_hamburger_icon");
    const sidebar = document.getElementById("anatomi_sidebar");
    const closeBtn = document.getElementById("anatomi_closebutton");

    hamburgerIcon.addEventListener("click", () => {
      sidebar.style.right = "0";
    });

    closeBtn.addEventListener("click", () => {
      sidebar.style.right = "-300px";
    });

    document.addEventListener("click", (event) => {
      if (
        !sidebar.contains(event.target) &&
        !hamburgerIcon.contains(event.target)
      ) {
        sidebar.style.right = "-300px";
      }
    });
  };

  add_hamburger_icon();

  const change_location_menu_wrapper = () => {
    const menu_wrapper = document.querySelector("#header > div.menu-wrapper");
    const anatomi_navbar_center = document.querySelector(
      ".anatomi_navbar-center"
    );

    if (menu_wrapper && anatomi_navbar_center) {
      anatomi_navbar_center.insertAdjacentElement("afterbegin", menu_wrapper);
    }
  };

  change_location_menu_wrapper();

  const generate_homepage_section = () => {
    const header_in_container_remove = document.querySelector(
      "#header > div.container"
    );
    if (header_in_container_remove) {
      header_in_container_remove.style.display = "none";
    }

    const anasayfa_orijinal_content = document.querySelector("#content");
    if (anasayfa_orijinal_content) {
      anasayfa_orijinal_content.style.display = "none";
    }

    const orijinal_anasayfa_footer = document.querySelector("#footer");
    if (orijinal_anasayfa_footer) {
      orijinal_anasayfa_footer.style.display = "none";
    }

    const orijinal_anasayfa_responsive_select_menu = document.querySelector(
      "#smoothmenu > select"
    );
    if (orijinal_anasayfa_responsive_select_menu) {
      orijinal_anasayfa_responsive_select_menu.style.display = "none";
    }

    const orijinal_menu_wrapper_container = document.querySelector(
      "#anatomi_navbar > div > div.anatomi_navbar-center > div.menu-wrapper > div"
    );
    if (orijinal_menu_wrapper_container) {
      orijinal_menu_wrapper_container.classList.remove("container");
    }

    const orijinal_menu_wrapper_row = document.querySelector(
      "#anatomi_navbar > div > div.anatomi_navbar-center > div.menu-wrapper > div > div"
    );
    if (orijinal_menu_wrapper_row) {
      orijinal_menu_wrapper_row.classList.remove("row");
    }

    const orijinal_menu_wrapper_span12 = document.querySelector(
      "#anatomi_navbar > div > div.anatomi_navbar-center > div.menu-wrapper > div > div > div"
    );
    if (orijinal_menu_wrapper_span12) {
      orijinal_menu_wrapper_span12.classList.remove("span12");
    }

    const anatomi_hero_section = document.querySelector(
      ".anatomi_hero-section"
    );
    if (anatomi_hero_section && anasayfa_orijinal_content) {
      anatomi_hero_section.insertAdjacentElement(
        "beforebegin",
        anasayfa_orijinal_content
      );
    }
  };

  generate_homepage_section();

  const generate_hamburger_menu = () => {
    document
      .querySelectorAll(".anatomi_dropdown-trigger")
      .forEach((trigger) => {
        trigger.addEventListener("click", function (e) {
          e.stopPropagation();
          const dropdown = this.querySelector(".anatomi_dropdown");

          if (dropdown) {
            if (dropdown.style.display === "block") {
              dropdown.style.display = "none";
            } else {
              dropdown.style.display = "block";
            }
          }
        });
      });

    document
      .querySelectorAll(".anatomi_nested-dropdown-trigger")
      .forEach((trigger) => {
        trigger.addEventListener("click", function (e) {
          e.stopPropagation();
          const nestedDropdown = this.querySelector(".anatomi_dropdown");

          if (nestedDropdown) {
            if (nestedDropdown.style.display === "block") {
              nestedDropdown.style.display = "none";
            } else {
              nestedDropdown.style.display = "block";
            }
          }
        });
      });

    document.addEventListener("click", () => {
      document.querySelectorAll(".anatomi_dropdown").forEach((menu) => {
        menu.style.display = "none";
      });
    });
  };

  generate_hamburger_menu();

  const mobileBreakpoint = 768;
  let currentIndex = 0;
  const products = document.querySelectorAll(
    ".anatomi_our_services_content_info"
  );

  function updateVisibleProducts() {
    const productCount = window.innerWidth <= mobileBreakpoint ? 1 : 3;
    const visibleProducts = Array.from(products).slice(
      currentIndex,
      currentIndex + productCount
    );

    products.forEach((product) => {
      product.style.display = "none";
    });

    visibleProducts.forEach((product) => {
      product.style.display = "flex";
    });

    currentIndex += productCount;
    if (currentIndex >= products.length) {
      currentIndex = 0;
    }
  }

  updateVisibleProducts();
  window.addEventListener("resize", updateVisibleProducts);

  setInterval(updateVisibleProducts, 5000);

  const addExternalScriptElfsight = () => {
    const script = document.createElement("script");
    script.src = "https://static.elfsight.com/platform/platform.js";
    script.async = true;
    document.body.appendChild(script);
  };

  addExternalScriptElfsight();

  const add_recaptcha = () => {
    const formItem = document.querySelector("#frmSiziArayalim > div.frmItem");
    const recaptchaContainer = document.querySelector(
      "#frmSiziArayalim > div.anatomi_recaptcha_container"
    );

    if (formItem && recaptchaContainer) {
      recaptchaContainer.insertAdjacentElement("afterbegin", formItem);
    }
  };

  const handle_remove_old_menu = () => {
    const menu = document.querySelector(
      "#anatomi_navbar > div > div.anatomi_navbar-center > div.menu-wrapper"
    );
    if (menu && window.innerWidth <= 768) {
      menu.style.display = "none";
    }
  };

  add_recaptcha();
  handle_remove_old_menu();
};
const anatomi_carglass_anasayfa_redesign_init = () => {
  anatomi_carglass_anasayfa_redesign_html();
  anatomi_carglass_anasayfa_redesign_css();
  anatomi_carglass_anasayfa_redesign_js();
};

const anatomi_carglass_anasayfa_redesign_condition = () => {
  const location =
    window.location.href.includes("Sayfa") ||
    window.location.href.includes("Randevu") ||
    window.location.href.includes("insan-kaynaklari");
  return !location;
};

if (anatomi_carglass_anasayfa_redesign_condition()) {
  anatomi_carglass_anasayfa_redesign_init();
}


const handle_change_number = () => {
  const p = document.querySelectorAll("p");
  const strong = document.querySelectorAll("strong");
  p &&
    p.forEach((p) => {
      if (p && p.textContent.trim().includes("0(216) 635 66 85")) {
        p.textContent = p.textContent.replace(
          "0(216) 635 66 85",
          "444 18 19 ve 0850 281 10 86"
        );
      }
    });

  strong &&
    strong.forEach((p) => {
      if (p && p.textContent.trim().includes("0(216) 635 66 85")) {
        p.textContent = p.textContent.replace(
          "0(216) 635 66 85",
          "444 18 19 ve 0850 281 10 86"
        );
      }
    });
};

handle_change_number();

const handle_remove_kariyer_net = () => {
  const text = document.querySelector(
    "#content > div > div > div:nth-child(2) > h5"
  );
  const button = document.querySelector(
    "#content > div > div > div:nth-child(2) > a:nth-child(4)"
  );

  if (text) {
    text.textContent = text.textContent.replace(
      "kariyer.net üzerinden ya da",
      ""
    );
    text.textContent = text.textContent.replace("staj için", "staj");
  }

  if (button) {
    button.style.display = "none";
  }
};

if (window.location.href.includes("insan-kaynaklari")) {
  handle_remove_kariyer_net();
}

const hizmet_agi_text = () => {
  const text = document.querySelector(
    "#content-large > div > div:nth-child(4) > div > div > h3"
  );
  const text_check =
    text &&
    text.textContent.trim() ===
      "Diğer illerdeki lokasyonlar için lütfen aşağıdaki alandan arama yapınız.";

  if (text && text_check) {
    text.textContent =
      "İl seçimi yaparak aşağıdaki menüden arama yapabilirsiniz";
  }
};

hizmet_agi_text();

const show_email = () => {
  const span = document.querySelector(".anatomi_show_email");
  const text_1 = "kisiselverilerim@carglass.com.tr";
  const text_2 = "(E-Postayı görmek için tıklayın.)";

  span &&
    span.addEventListener("click", () => {
      span.textContent = text_1;
    });
};

show_email();

if (window.location.href.includes("Randevu")) {
  const liElement = document.querySelector(
    "#frmRandevu > div.steps.step4 > div > div > ul > li:nth-child(25)"
  );
  const currentOnClick = liElement?.getAttribute("onclick");
  const updatedOnClick = currentOnClick?.replace(
    "nextPage()",
    "setPage(SAYFA.Evraklar)"
  );
  liElement?.setAttribute("onclick", updatedOnClick);

  document
    .querySelector(
      "#content > div > div.row > div > a.btn.btn-inverse.btn-large.pull-left.btnPrevPage"
    )
    ?.addEventListener("click", () => {
      const step = document.querySelector("#frmRandevu > div.steps.step6");

      if (step) {
        if (step.style.display == "block") {
          currPage -= 2;
          step.style.display = "none";
        }
      }
    });

  setInterval(() => {
    const step5 = document.querySelector("#frmRandevu > div.steps.step5");

    if (step5) {
      if (step5.style.display !== "none") {
        step5.style.display = "none";
      }
    }
  }, 100);
}

/**************** İNSAN KAYKANLARINA LİNK EKLENMESİ ****************/

const ik_link_ekleme_html = () => {
  const html = `
  `;
};
const ik_link_ekleme_css = () => {
  const style = `
    <style>
    .anatomi_is_basvuru_butonu{
      background-color: #1C66D8;
      border: none;
      padding: 12px;
      margin: 12px 8px;
      display: block;
      text-align: center;
      font-weight: bold;
      color: #EAEAEA;
      border-radius: 22px;
      text-transform: uppercase;
      cursor: pointer;
    }
   .anatomi_is_basvuru_butonu:hover{
       color: white !important;
   }
  </style>
  `;
  const head = document.querySelector("head");
  head.insertAdjacentHTML("beforeend", style);
};
const ik_link_ekleme_js = () => {
  const basvuruButonu = document.querySelector(
    "#content > div > div > div:nth-child(2) > a.ik-button.red"
  );
  const isBasvuruButonu = document.createElement("a");
  isBasvuruButonu.href =
    "https://www.yenibiris.com/firma/otocam-ticaret-a-s/75718";
  isBasvuruButonu.classList.add("anatomi_is_basvuru_butonu");
  isBasvuruButonu.textContent = "YENİ BİR İŞ'TEN BAŞVUR";
  if (basvuruButonu && isBasvuruButonu) {
    basvuruButonu.insertAdjacentElement("afterend", isBasvuruButonu);
  }
};
const ik_link_ekleme_init = () => {
  ik_link_ekleme_html();
  ik_link_ekleme_css();
  ik_link_ekleme_js();
};
const ik_link_ekleme_condition = () => {
  return true;
};
if (ik_link_ekleme_condition()) {
  ik_link_ekleme_init();
}

/* METATAG */
const meta_title_description_düzenlemesi_html = () => {
  const html = `
  `;
};
const meta_title_description_düzenlemesi_css = () => {
  const style = `
    <style>
  </style>
  `;
  const head = document.querySelector("head");
  head.insertAdjacentHTML("beforeend", style);
};
const meta_title_description_düzenlemesi_js = () => {
  const updateMetaTags = (
    targetUrl,
    metaDescriptionContent,
    metaTitleContent
  ) => {
    const currentUrl = window.location.href;
    if (currentUrl === targetUrl) {
      const MetaDescription = document.querySelector(
        "head > meta:nth-child(2)"
      );
      const MetaTitle = document.querySelector("head > title");
      if (MetaDescription) {
        MetaDescription.content = metaDescriptionContent;
      }
      if (MetaTitle) {
        MetaTitle.textContent = metaTitleContent;
      }
    }
  };
  const generateMetaTagAnasayfa = () => {
    updateMetaTags(
      "https://www.carglass.com.tr/",
      "Carglass® Türkiye oto cam tamiri, değişimi ve ADAS kalibrasyon işlemlerinde profesyonel çözümler sunar. Güvenilir ve kaliteli hizmet için hemen bize ulaşın!",
      "Carglass® Türkiye | Oto Cam Tamiri ve Değişimi | 444 18 19"
    );
  };

  const generateMetaTagBasvuruFormu = () => {
    updateMetaTags(
      "https://www.carglass.com.tr/insan-kaynaklari/basvuru-formu",
      "Carglass®'ta kariyer yolculuğunuza yeni bir adım atın. İş ve staj başvuru formunu hemen doldurun ve geleceğinizi şekillendirecek fırsatları keşfedin!",
      "İş ve Staj Başvuru Formu | Carglass® Türkiye"
    );
  };
  const generateMetaTagİnsanKaynaklari = () => {
    updateMetaTags(
      "https://www.carglass.com.tr/insan-kaynaklari",
      "Carglass®'ta yeni kariyer fırsatları sizleri bekliyor. Kariyer yolculuğunuza başlamak ve ekibimizde yer almak için başvuru formunu hemen doldurun!",
      "İnsan Kaynakları | Carglass® Türkiye"
    );
  };
  const generateMetaTagİletisim = () => {
    updateMetaTags(
      "https://www.carglass.com.tr/Sayfa/iletisim",
      "Carglass®'ta geri bildirimlerinizi formu doldurarak hızlıca iletebilirsiniz. Sorularınız, önerileriniz ve şikayetleriniz için hemen formu doldurun!",
      "İletişim Bilgileri | Carglass® Türkiye"
    );
  };
  const generateMetaTagSikayetForm = () => {
    updateMetaTags(
      "https://www.carglass.com.tr/Sayfa/SikayetForm",
      "Carglass®'ta hizmet kalitemizi artırmamız için görüşlerinizi bizimle paylaşın. İstek, öneri ve şikayetlerinizi formu doldurarak hemen gönderin!",
      "İstek, Öneri ve Şikayet Formu | Carglass® Türkiye"
    );
  };
  const generateMetaTagCerezPolitikası = () => {
    updateMetaTags(
      "https://www.carglass.com.tr/Sayfa/Detay?sayfa_id=40",
      "Carglass®'ta gizlilik ve çerez kullanımı bilgilerine ulaşabilirsiniz. Çerez politikası ve gizlilik hakkında detayları incelemek için tıklayın!",
      "Çerez Politikası | Carglass® Türkiye"
    );
  };

  const generateMetaTagKVKK = () => {
    updateMetaTags(
      "https://www.carglass.com.tr/Sayfa/Detay?sayfa_id=38",
      "Carglass®'ta kişisel verilerinizin korunmasına önem veriyoruz. Kişisel verilerin korunması kanunu aydınlatma metni hakkında detaylı bilgi için tıklayın!",
      "Kişisel Verilerin Korunması Kanunu | Carglass® Türkiye"
    );
  };
  const generateMetaTagHizmetlerimiz = () => {
    updateMetaTags(
      "https://www.carglass.com.tr/Sayfa/Detay?sayfa_id=37",
      "Carglass®'ta oto cam tamir ve değiştirme hizmetlerini keşfedin. Hasarlı oto camlarınız için şubelerimizden ya da mobil teknisyenlerimizden hemen randevu alın!",
      "Hizmetlerimiz | Carglass® Türkiye"
    );
  };
  const generateMetaTagHakkimizda = () => {
    updateMetaTags(
      "https://www.carglass.com.tr/Sayfa/Detay?sayfa_id=36",
      "Carglass® her marka araçta hasarlı cam onarım ve değiştirme hizmeti sunar. Yüksek kaliteli hizmet ve hızlı çözümler için hemen bizimle iletişime geçin!",
      "Hakkımızda | Carglass® Türkiye"
    );
  };
  const generateMetaTagCamFiyatlari = () => {
    updateMetaTags(
      "https://www.carglass.com.tr/Sayfa/Detay?sayfa_id=35",
      "Oto cam tamiri ve cam değişim fiyatlarını etkileyen faktörleri keşfedin. Carglass® hasarlı oto cam değişimi hakkında detaylı bilgi için hemen tıklayın!",
      "Cam Fiyatları | Carglass® Türkiye"
    );
  };

  const generateMetaTagArkaCamUcreti = () => {
    updateMetaTags(
      "https://www.carglass.com.tr/Sayfa/Detay?sayfa_id=34",
      "Aracınızın arka cam değişim sürecini güvenle gerçekleştirin. Carglass® araç sigorta kapsamı ve arka cam ücretleri hakkında bilgi almak için hemen tıklayın!",
      "Arka Cam Ücreti | Carglass® Türkiye"
    );
  };
  const generateMetaTagYanCamUcreti = () => {
    updateMetaTags(
      "https://www.carglass.com.tr/Sayfa/Detay?sayfa_id=33",
      "Oto hasarlı yan cam değişimini hızlı ve güvenli şekilde yaptırın. Carglass® yan cam değişim ücreti ve araç sigortası hakkında bilgi almak için hemen tıklayın!",
      "Yan Cam Ücreti | Carglass® Türkiye"
    );
  };

  const generateMetaTagOnCamUcreti = () => {
    updateMetaTags(
      "https://www.carglass.com.tr/Sayfa/Detay?sayfa_id=32",
      "Aracınızın ön cam değişimini hızlı ve güvenli şekilde yaptırın. Carglass® ön cam değişim süreci ve ücretleri hakkında detaylı bilgi için hemen tıklayın!",
      "Ön Cam Ücreti | Carglass® Türkiye"
    );
  };

  const generateMetaTagArkaCamDegisimUcreti = () => {
    updateMetaTags(
      "https://www.carglass.com.tr/Sayfa/Detay?sayfa_id=31",
      "Otomobil hasarlı arka cam değişim çözümlerini keşfedin. Carglass® araç sigortası ve arka cam değişim fiyatları hakkında detaylı bilgi için hemen tıklayın!",
      "Arka Cam Değişim Ücreti | Carglass® Türkiye"
    );
  };

  const generateMetaTagArkaCamDegisimi = () => {
    updateMetaTags(
      "https://www.carglass.com.tr/Sayfa/Detay?sayfa_id=30",
      "Otomobilde arka cam değişim aşamalarını keşfedin. Carglass® arka cam değişimi süreci ve orijinal ürün kullanımı hakkında bilgi almak için hemen tıklayın!",
      "Arka Cam Değişimi | Carglass® Türkiye"
    );
  };

  const generateMetaTagYanCamDegisimUcreti = () => {
    updateMetaTags(
      "https://www.carglass.com.tr/Sayfa/Detay?sayfa_id=29",
      "Oto yan cam değişim çözümleri ve yan cam ücretlerini keşfedin. Carglass® yan cam değişim süreci hakkında detaylı bilgi almak için hemen tıklayın!",
      "Yan Cam Ücreti | Carglass® Türkiye"
    );
  };

  const generateMetaTagYanCamDegisimi = () => {
    updateMetaTags(
      "https://www.carglass.com.tr/Sayfa/Detay?sayfa_id=28",
      "Oto yan cam değişim çözümleri ve orijinal ürün kalitesini keşfedin. Aracınızda güvenle yan cam değişim randevusu oluşturmak için hemen tıklayın!",
      "Yan Cam Değişimi | Carglass® Türkiye"
    );
  };
  const generateMetaTagKaliteveGarantimiz = () => {
    updateMetaTags(
      "https://www.carglass.com.tr/Sayfa/Detay?sayfa_id=27",
      "Carglass® uzman işçilik ve yüksek kalitede oto cam çözümleri sunar. Oto cam onarım ve değişim hizmetleri hakkında detaylı bilgi almak için hemen tıklayın!",
      "Kalite ve Garantimiz | Carglass® Türkiye"
    );
  };

  const generateMetaTagOnCamTamirUcreti = () => {
    updateMetaTags(
      "https://www.carglass.com.tr/Sayfa/Detay?sayfa_id=26",
      "Otomobilde hasarlı ön cam tamir çözümlerini keşfedin. Carglass® ön cam tamir ücretleri ve araç sigorta kapsamı hakkında detaylı bilgi için hemen tıklayın!",
      "Ön Cam Tamir Ücreti | Carglass® Türkiye"
    );
  };

  const generateMetaTagOnCamDegisimi = () => {
    updateMetaTags(
      "https://www.carglass.com.tr/Sayfa/Detay?sayfa_id=25",
      "Otomobil ön cam değişim çözümleri ve orijinal ürün kalitesini keşfedin. Carglass® ön cam değişim süreci hakkında detaylı bilgi almak için hemen tıklayın!",
      "Ön Cam Değişimi | Carglass® Türkiye"
    );
  };

  const generateMetaTagOnCamCatlakTamirUcreti = () => {
    updateMetaTags(
      "https://www.carglass.com.tr/Sayfa/Detay?sayfa_id=24",
      "Aracınızın ön cam çatlak tamirini hızlı ve güvenli şekilde yaptırın. Carglass® ön cam çatlak tamiri ve süreci hakkında detaylı bilgi için hemen tıklayın!",
      "Ön Cam Çatlak Tamiri | Carglass® Türkiye"
    );
  };

  const generateMetaTagKucukCatlakTamiri = () => {
    updateMetaTags(
      "https://www.carglass.com.tr/Sayfa/Detay?sayfa_id=23",
      "Otomobilde küçük çatlaklar için cam tamir çözümlerini keşfedin. Carglass® küçük çatlak tamiri ve süreci hakkında detaylı bilgi almak için hemen tıklayın!",
      "Küçük Çatlak Tamiri | Carglass® Türkiye"
    );
  };

  const generateMetaTagGlobalAgimiz = () => {
    updateMetaTags(
      "https://www.carglass.com.tr/Sayfa/Detay?sayfa_id=2",
      "Carglass® 35 ülkede faaliyet gösteren Belron Group S.A.'nın bir parçasıdır. Global ağımızda hasarlı oto cam hizmeti almak için hemen randevu oluşturun!",
      "Global Ağımız | Carglass® Türkiye"
    );
  };

  const generateMetaTagOnCamTamiri = () => {
    updateMetaTags(
      "https://www.carglass.com.tr/Sayfa/Detay?sayfa_id=16",
      "Ön cam tamir çözümleri ve orijinal cam kalitesiyle güvenli hizmet alın. Carglass® ön cam tamir hizmeti hakkında detaylı bilgi almak için hemen tıklayın!",
      "Ön Cam Tamiri | Carglass® Türkiye"
    );
  };

  const generateMetaTagOtoCamHasari = () => {
    updateMetaTags(
      "https://www.carglass.com.tr/Sayfa/Detay?sayfa_id=15",
      "Hasarlı araç camlarını her marka ve modelde güvenle tamir ettirin. Carglass® oto cam hasarı onarım ve değişim süreci için detaylı bilgi için hemen tıklayın!",
      "Oto Cam Hasarı | Carglass® Türkiye"
    );
  };

  const generateMetaTagBizKimiz = () => {
    updateMetaTags(
      "https://www.carglass.com.tr/Sayfa/Detay?sayfa_id=1",
      "Oto cam tamiri ve değiştirme hizmetini her marka araç için güvenle alın. Carglass®’ta hasarlı cam randevusu oluşturmak için hemen bizimle iletişime geçin!",
      "Biz Kimiz | Carglass® Türkiye"
    );
  };

  const generateMetaTagBayiSec = () => {
    updateMetaTags(
      "https://www.carglass.com.tr/Randevu/BayiSec",
      "Carglass®’tan oto cam tamiri ve değiştirme hizmetlerini keşfedin. Hasarlı camlarınız için en uygun çözümle şubelerimizden kolayca randevu oluşturun!",
      "Randevu Formu | Carglass® Türkiye"
    );
  };

  const generateMetaTagSiziArayalim = () => {
    updateMetaTags(
      "https://www.carglass.com.tr/Randevu/SiziArayalim",
      "Carglass®'ta hızlı geri dönüş ve çözüm odaklı destekle yanınızdayız. Sorularınız veya ihtiyaçlarınız için hemen formu doldurun, biz sizi arayalım!",
      "Sizi Arayalım | Carglass® Türkiye"
    );
  };

  generateMetaTagAnasayfa();
  generateMetaTagBasvuruFormu();
  generateMetaTagİnsanKaynaklari();
  generateMetaTagİletisim();
  generateMetaTagSikayetForm();
  generateMetaTagCerezPolitikası();
  generateMetaTagKVKK();
  generateMetaTagHizmetlerimiz();
  generateMetaTagHakkimizda();
  generateMetaTagCamFiyatlari();
  generateMetaTagArkaCamUcreti();
  generateMetaTagYanCamUcreti();
  generateMetaTagOnCamUcreti();
  generateMetaTagArkaCamDegisimUcreti();
  generateMetaTagArkaCamDegisimi();
  generateMetaTagYanCamDegisimUcreti();
  generateMetaTagYanCamDegisimi();
  generateMetaTagKaliteveGarantimiz();
  generateMetaTagOnCamTamirUcreti();
  generateMetaTagOnCamDegisimi();
  generateMetaTagOnCamCatlakTamirUcreti();
  generateMetaTagKucukCatlakTamiri();
  generateMetaTagGlobalAgimiz();
  generateMetaTagOnCamTamiri();
  generateMetaTagOtoCamHasari();
  generateMetaTagBizKimiz();
  generateMetaTagBayiSec();
  generateMetaTagSiziArayalim();
};
const meta_title_description_düzenlemesi_init = () => {
  meta_title_description_düzenlemesi_html();
  meta_title_description_düzenlemesi_css();
  meta_title_description_düzenlemesi_js();
};
const meta_title_description_düzenlemesi_condition = () => {
  return true;
};
if (meta_title_description_düzenlemesi_condition()) {
  meta_title_description_düzenlemesi_init();
}
/*FOOTER DÜZENLENMESİ*/

const footer_duzenlemesi_html = () => {
  const html = `
   <footer class="anatomi_footer">  
             <a href= "https://www.carglass.com.tr/">
             <img
                src="https://cro-anatomi.s3.eu-north-1.amazonaws.com/carglass_content_logo_orj.png"
                alt="Logo"
                class="anatomi_footer-logo"/></a>
            <div class="anatomi_footer_desc_container">
            <div class="anatomi_footer-left">
              <p class="anatomi_footer-description">
                Carglass® Dünya markası, Türkiye’de önde gelen araç ön cam tamir,
                cam
                değişim ve kamera özellikli camları kalibrasyon yapabilen bir
                şirkettir.
              </p>
              <p class="anatomi_footer-description">
                İster talebinizi Türkiye geneline yayılmış şubelerimiz ve
                bayilerimiz
                ile çözelim, ister mobil teknisyenimizin evinize, işyerinize veya
                bulunduğunuz herhangi bir yere gelmesi kolaylığını tercih edin;
                aracın
                sahibi olduğunuz sürece işçiliğimizin garanti altında olduğunu
                bilerek
                rahat edin.
              </p>
            </div>
            <div class="anatomi_footer-right">
              <div class="anatomi_footer-links">
                <ul>
                <li class="anatomi_list_title">Kurumsal</li>
                  <li><a href="/Sayfa/Detay?sayfa_id=36">Hakkımızda</a></li>
                   <li><a href="/Sayfa/Detay?sayfa_id=1">Biz Kimiz</a></li>
                    <li><a href="/Sayfa/Detay?sayfa_id=2">Global Ağımız</a></li>
                  <li><a href="/Randevu/BayiSec">Hizmet Ağımız</a></li>
                  <li><a href="/insan-kaynaklari">Kalite ve Garantimiz</a></li>
                  <li><a href="/Sayfa/iletisim">İletişim</a></li>
                 
                </ul>
              </div>
              <div class="anatomi_footer-links">
                <ul>
                 <li class="anatomi_list_title">Hizmetlerimiz</li>
                  <li><a href="/Sayfa/Detay?sayfa_id=15">Oto Cam Hasarı</a></li>
                  <li><a href="/Sayfa/Detay?sayfa_id=16">Ön Cam Hasarı</a></li>
                  <li><a href="/Sayfa/Detay?sayfa_id=28">Yan Cam Hasarı</a></li>
                  <li><a href="/Sayfa/Detay?sayfa_id=30">Arka Cam Hasarı</a></li>
                </ul>
              </div>
              <div class="anatomi_footer-links">
                <ul>
                 <li class="anatomi_list_title">Bağlantılar</li>
                  <li><a href="https://webportal.carglass.com.tr/" target="_blank"
                      rel="noreferrer"
                      title="Bayi ve Şube Girişi Yap.">Bayi &amp; Şube
                      Girişi</a></li>
                  <li><a href="/Sayfa/SikayetForm" target="_blank"
                      title="İstek, Öneri ve Şikayetler.">İstek, Öneri ve
                      Şikayet</a></li>
                       <li><a
                      href="https://e-sirket.mkk.com.tr/esir/Dashboard.jsp#/sirketbilgileri/18906"
                      target="_blank"
                      title="Bilgi Toplumu Hizmetleri">Bilgi Toplumu
                      Hizmetleri</a></li>
                 
                  <li><a href="/Sayfa/Detay?sayfa_id=38" target="_blank"
                      title="Kişisel Verilerin Korunması Kanunu">Kişisel
                      Verilerin Korunması Kanunu</a></li>
                 
                  <li><a href="/Sayfa/Detay?sayfa_id=40" target="_blank"
                      title="Carglass Çerez Politikası">Carglass® Çerez
                      Politikası</a></li>
                </ul>
              </div>
                <div class="anatomi_footer-links">
                <ul>
                 <li class="anatomi_list_title">Genel Müdürlük</li>
                  <li><i class="fa-solid fa-location-dot"></i> Emek Mh. Esenşehir Cd. No:20, 34785, Sancaktepe/İstanbul</li>
                  <li><i class="fa-solid fa-phone-volume"></i>0(850) 281 10 86</li>
                  <li><i class="fa-regular fa-envelope"></i>destek@carglass.com.tr</li>
                  <li class="anatomi_list_title">Sosyal Medya Hesapları</li>
                  <li> <a href=" https://www.youtube.com/@carglassturkiye"> <i class="fa-brands fa-youtube"></i></a>   
                    <a href=" https://tr-tr.facebook.com/CarglassTR"><i class="fa-brands fa-facebook"></i></a>  
                    <a href=" https://www.instagram.com/carglasstr/"> <i class="fa-brands fa-instagram"></i></a>
                    <a href= "https://x.com/CarglassTR"><i class="fa-brands fa-x-twitter"></i>
</a></li>

                </ul>
              </div>
            </div>
             </div>
            <div class="anatomi_footer-copyright">
              <p>Copyright © 2025 Carglass® Tüm Hakları Saklıdır.</p>
            </div>
          </footer>
            <span id="copyMessage_f" style="display:none;">Kopyalandı!</span>
  <span id="copyMessage2_f" style="display:none;">Kopyalandı!</span>

    `;
  const header = document.querySelector("#header");
  if (header) {
    header.insertAdjacentHTML("beforeend", html);
  }
};
const footer_duzenlemesi_css = () => {
  const style = `
      <style>
        .anatomi_footer {
      display: flex;
      flex-direction: column;
        justify-content: space-evenly;
        padding: 50px 50px 0px;
        background-color: #626262;
        color: white;
        font-size: 20px;
        text-align: left;
    }
    .anatomi_footer_desc_container{
        display: flex;
    }
    .anatomi_footer-left {
      width: 55%;
    }
    .anatomi_footer-logo {
      width: 200px;
      margin-bottom: 20px;
    }
    
    .anatomi_footer-description {
      margin-bottom: 20px;
      font-size: 14px;
      line-height: 1.6;
      width: 60%;
    }
    
    .anatomi_footer-right {
      display: flex;
      justify-content: flex-end;
      gap: 10px;
    }
      .anatomi_footer-copyright p{
    padding-top: 30px;
    padding-bottom: 30px;
    font-size: 14px;
    font-weight: bold;
    border-top: 1px solid rgb(193 184 184 / 20%);
    text-align: center;
      }
    
    .anatomi_footer-links {
      display: flex;
      margin-right: 20px;
    }
    .anatomi_list_title{
        font-size: 16px;
        font-weight: bold;
    }
    
    .anatomi_footer-links h4 {
      font-size: 16px;
      font-weight: bold;
      margin-bottom: 10px;
    }
    
    .anatomi_footer-links ul {
      list-style: none;
      padding: 0;
    }
    
    .anatomi_footer-links ul li {
    margin-bottom: 10px;
    color: white;
    text-decoration: none;
    font-size: 14px;
    display: flex;
    gap: 10px
    }
    
    .anatomi_footer-links ul li a {
      color: white;
      text-decoration: none;
      font-size: 14px;
    }
    
    .anatomi_footer-links ul li a:hover {
      text-decoration: underline;
    }
      #copyMessage_f {
       position: fixed;
        bottom: 54%;
        right: 90px;
        background-color: #000000cc;
        color: white;
        padding: 5px 10px;
        border-radius: 5px;
        font-size: 12px;
        font-weight: bold;
        z-index: 9999;
        display: none;
      }
        #copyMessage2_f {
       position: fixed;
       bottom: 56%;
        right: 90px;
        background-color: #000000cc;
        color: white;
        padding: 5px 10px;
        border-radius: 5px;
        font-size: 12px;
        font-weight: bold;
        z-index: 9999;
         display: none;
      }


      @media (max-width: 768px) {
       .anatomi_footer {
        flex-direction: column;
      }
        .anatomi_footer_desc_container{
            flex-direction: column;
        }
        .anatomi_footer-left {
          width: 100%;
        }
      .anatomi_footer-right{
        display: flex;
        flex-direction: column;
        gap: 30px;
      }
    }
    </style>
    `;
  const head = document.querySelector("head");
  head.insertAdjacentHTML("beforeend", style);
  const fontAwesomeLink = `
         <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.2/css/all.min.css">

      `;
  head.insertAdjacentHTML("beforeend", fontAwesomeLink);
};
const footer_duzenlemesi_js = () => {
  const orijinal_anasayfa_footer = document.querySelector("#footer");
  if (orijinal_anasayfa_footer) {
    orijinal_anasayfa_footer.style.display = "none";
  }
  const body = document.querySelector("body");
  const footer = document.querySelector(".anatomi_footer");
  if (body && footer) {
    body.appendChild(footer);
  }
  const phoneNumberFooter = document.querySelector(
    ".anatomi_footer-links li i.fa-phone-volume"
  );
  const mailTextFooter = document.querySelector(
    ".anatomi_footer-links li i.fa-envelope"
  );
  const copyMessage = document.querySelector("#copyMessage_f");
  const copyMessage2 = document.querySelector("#copyMessage2_f");

  if (phoneNumberFooter) {
    phoneNumberFooter.parentElement.style.cursor = "pointer";
    phoneNumberFooter.parentElement.addEventListener("click", () => {
      if (/Mobi|Android|iPhone|iPad/i.test(navigator.userAgent)) {
        window.location.href = `tel:${phoneNumberFooter.parentElement.textContent.trim()}`;
      } else {
        navigator.clipboard
          .writeText(phoneNumberFooter.parentElement.textContent.trim())
          .then(() => {
            copyMessage.style.display = "inline-block";
            setTimeout(() => {
              copyMessage.style.display = "none";
            }, 1000);
          });
      }
    });
  }

  if (mailTextFooter) {
    mailTextFooter.parentElement.style.cursor = "pointer";
    mailTextFooter.parentElement.addEventListener("click", () => {
      const email = mailTextFooter.parentElement.textContent.trim();
      const gmailUrl = `https://mail.google.com/mail/?view=cm&to=${email}`;

      window.open(gmailUrl, "_blank");

      navigator.clipboard.writeText(email).then(() => {
        copyMessage2.style.display = "inline-block";
        setTimeout(() => {
          copyMessage2.style.display = "none";
        }, 2000);
      });
    });
  }
};

const footer_duzenlemesi_init = () => {
  footer_duzenlemesi_html();
  footer_duzenlemesi_css();
  footer_duzenlemesi_js();
};
const footer_duzenlemesi_condition = () => {
  return true;
};
if (footer_duzenlemesi_condition()) {
  footer_duzenlemesi_init();
}

/*NAVBAR DÜZENLEMESİ*/

const navbar_eklemesi_html = () => {
  const html = `
       <nav id="anatomi_navbar">
          <div class="anatomi_navbar-container">
            <div class="anatomi_navbar-left">
            <a href= "https://www.carglass.com.tr/">
             <img
                src="https://cro-anatomi.s3.eu-north-1.amazonaws.com/carglass_navbar_logo.jpeg"
                alt="Logo"
                class="anatomi_navbar-logo" /></a>
             
            </div>
            <div class="anatomi_navbar-center">
              <div id="anatomi_responsive_hamburger_menu">
                <div class="anatomi_hamburger_icon" id="anatomi_hamburger_icon">
                  &#9776;
                </div>
                <div id="anatomi_sidebar" class="anatomi_sidebar">
                  <span id="anatomi_closebutton" class="anatomi_closebutton">
                    &times;
                  </span>
                  <ul id="anatomi_responsive_navbar">
                    <li onclick="location.href='/'">Ana Sayfa</li>
                    <li class="anatomi_dropdown-trigger" >Oto Cam Hasarı <i class="fa-solid fa-caret-down"></i>
                        <ul class="anatomi_dropdown">
                        <li class="anatomi_nested-dropdown-trigger" onclick="location.href='/Sayfa/Detay?sayfa_id=15'">Oto Cam Hasarı</li>
                        <li class="anatomi_nested-dropdown-trigger">Ön Cam Hasarı <i class="fa-solid fa-caret-down"></i>
                            <ul class="anatomi_dropdown">
                            <li class="anatomi_dropdown-item" onclick="location.href='/Sayfa/Detay?sayfa_id=16'">Ön Cam Tamiri</li>
                            <li class="anatomi_dropdown-item" onclick="location.href='/Sayfa/Detay?sayfa_id=23'">Küçük Çatlak Tamiri</li>
                            <li class="anatomi_dropdown-item" onclick="location.href='/Sayfa/Detay?sayfa_id=24'">Ön Cam Çatlak Tamiri</li>
                            <li class="anatomi_dropdown-item" onclick="location.href='/Sayfa/Detay?sayfa_id=25'">Ön Cam Değişimi</li>
                            <li class="anatomi_dropdown-item" onclick="location.href='/Sayfa/Detay?sayfa_id=26'">Ön Cam Tamir Ücreti</li>
                            <li class="anatomi_dropdown-item" onclick="location.href='/Sayfa/Detay?sayfa_id=27'">Kalite ve Garantimiz</li>
                            </ul>
                        </li>
                        <li class="anatomi_nested-dropdown-trigger">Yan Cam Hasarı <i class="fa-solid fa-caret-down"></i>
                            <ul class="anatomi_dropdown">
                            <li class="anatomi_dropdown-item" onclick="location.href='/Sayfa/Detay?sayfa_id=28'">Yan Cam Değişimi</li>
                            <li class="anatomi_dropdown-item" onclick="location.href='/Sayfa/Detay?sayfa_id=29'">Yan Cam Ücreti</li>
                            </ul>
                        </li>
                        <li class="anatomi_nested-dropdown-trigger">Arka Cam Hasarı <i class="fa-solid fa-caret-down"></i>
                            <ul class="anatomi_dropdown">
                            <li class="anatomi_dropdown-item" onclick="location.href='/Sayfa/Detay?sayfa_id=30'">Arka Cam Değişimi</li>
                            <li class="anatomi_dropdown-item" onclick="location.href='/Sayfa/Detay?sayfa_id=31'">Arka Cam Değişim Ücreti</li>
                            </ul>
                        </li>
                        </ul>
                    </li>
                     <li class="anatomi_dropdown-trigger" >Cam Fiyatları <i class="fa-solid fa-caret-down"></i>
                        <ul class="anatomi_dropdown">
                        <li class="anatomi_nested-dropdown-trigger" onclick="location.href='/Sayfa/Detay?sayfa_id=35'">Cam Fiyatları</li>
                        <li class="anatomi_nested-dropdown-trigger" onclick="location.href='/Sayfa/Detay?sayfa_id=32'">Ön Cam Ücreti</li>
                        <li class="anatomi_nested-dropdown-trigger" onclick="location.href='/Sayfa/Detay?sayfa_id=33'">Yan Cam Ücreti</li>
                        <li class="anatomi_nested-dropdown-trigger" onclick="location.href='/Sayfa/Detay?sayfa_id=34'">Arka Cam Ücreti</li>
                        </ul>
                    </li>
                    <li onclick="location.href='/Sayfa/Bayiler'">Hizmet Ağımız</li>
                    <li class="anatomi_dropdown-trigger" >Kurumsal<i class="fa-solid fa-caret-down"></i>
                        <ul class="anatomi_dropdown">
                        <li class="anatomi_nested-dropdown-trigger" onclick="location.href='#'">Kurumsal</li>
                        <li class="anatomi_nested-dropdown-trigger" onclick="location.href='/Sayfa/Detay?sayfa_id=36'">Hakkımızda</li>
                        <li class="anatomi_nested-dropdown-trigger" onclick="location.href='/Sayfa/Detay?sayfa_id=1'">Biz Kimiz</li>
                         <li onclick="location.href='/insan-kaynaklari'">
                        İnsan Kaynakları
                        </li>
                        <li class="anatomi_nested-dropdown-trigger" onclick="location.href='/Sayfa/Detay?sayfa_id=2'"> Global Ağımız</li>
                        <li class="anatomi_nested-dropdown-trigger" onclick="location.href='/Sayfa/Detay?sayfa_id=37'">Hizmetlerimiz</li>
                        </ul>
                    </li>
                    <li onclick="location.href='/Sayfa/iletisim'">İletişim</li>
                  </ul>
                </div>
              </div>
            </div>
            <div class="anatomi_navbar-right">
              <button
                class="anatomi_randevu-btn"
                onclick="window.location.href='/Randevu/BayiSec';">
                Randevu Alın
              </button>
            </div>
          </div>
        </nav>
    `;
  const headerBtm = document.querySelector("#header-btm");
  if (headerBtm) {
    headerBtm.insertAdjacentHTML("beforebegin", html);
  }
};
const navbar_eklemesi_css = () => {
  const style = `
      <style>
       #header {
      padding-top: 0;
    }
    
    .menu-wrapper {
      border: none !important;
      margin-top: 0 !important;
      padding: 0 !important;
      font-weight: bold;
    }
    
    .menu-wrapper li a {
      font-weight: bold !important;
    }
    
    #anatomi_navbar {
      width: 100%;
      padding: 20px 0;
    }
    
    .anatomi_navbar-container {
      display: flex;
      justify-content: space-evenly;
      align-items: center;
      padding: 0px 20px;
    }
    
    .anatomi_navbar-logo {
    
      width: 200px;
    }
    .anatomi_navbar-right{
        display: flex;
        align-items: center;
        gap: 20px;
    }
    .anatomi_navbar_phone-number {  
    font-size: 18px !important;
    font-weight: bold !important;
    padding-bottom: 0px !important;
    white-space: nowrap !important;
    }
    .anatomi_randevu-btn {
      background-color: #fedd44;
      color: #1e1e1e;
      padding: 5px 20px;
      font-size: 15px;
      font-weight: bold;
      border-radius: 5px;
      border: none;
      cursor: pointer;
      transition: background-color 0.3s ease;
      white-space: nowrap;
    }


    .anatomi_hamburger_icon {
      font-size: 24px;
      cursor: pointer;
      display: none; 
    }
    
    .anatomi_sidebar {
      position: fixed;
      top: 0;
      right: -300px; 
      width: 250px;
      height: 100%;
      background-color: #000000f5;
      color: #fff;
      transition: right 0.3s ease;
      z-index: 1000;
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      overflow-y: auto;
    }
    
    .anatomi_closebutton  {
      font-size: 24px;
      color: #fff;
      padding: 10px;
      cursor: pointer;
      align-self: flex-end;
      margin-right: 10px;
    }
    
    #anatomi_responsive_navbar {
      list-style-type: none;
      padding: 0;
      width: 100%;
    }
    
    #anatomi_responsive_navbar li {
      padding: 15px 20px;
      cursor: pointer;
      width: 100%;
      transition: background-color 0.3s ease;
    }
    
    .anatomi_dropdown-trigger {
        cursor: pointer; 
        padding: 10px 15px; 
    }
    
    .anatomi_dropdown-trigger i{
        position: absolute;
        right: 15px;
    }
    
    .anatomi_dropdown {
        display: none;
        padding-left: 20px;
        margin-top: 15px;
    }
    
    .anatomi_dropdown-trigger.active + .anatomi_dropdown {
        display: block;
    }
    
    .anatomi_dropdown-item {
        padding: 15px 0px; 
        cursor: pointer; 
    }
    
    .anatomi_nested-dropdown-trigger {
        padding:15px 0px !important; 
        cursor: pointer; 
    }
    
    .anatomi_nested-dropdown-trigger.active + .anatomi_nested-dropdown {
        display: block;
    }
    


       @media (max-width: 768px) {
    .anatomi_navbar-container {
      justify-content: space-between;
    }
      .anatomi_hamburger_icon {
        display: block;
      }
      .anatomi_navbar-right {
        display: none;
      }
}
      
    </style>
    `;
  const head = document.querySelector("head");
  head.insertAdjacentHTML("beforeend", style);
  const fontAwesomeLink = `
         <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.2/css/all.min.css">

      `;
  head.insertAdjacentHTML("beforeend", fontAwesomeLink);
};
const navbar_eklemesi_js = () => {
   const add_hamburger_icon = () => {
     const hamburgerIcon = document.getElementById("anatomi_hamburger_icon");
     const sidebar = document.getElementById("anatomi_sidebar");
     const closeBtn = document.getElementById("anatomi_closebutton");

     hamburgerIcon.addEventListener("click", () => {
       sidebar.style.right = "0";
     });

     closeBtn.addEventListener("click", () => {
       sidebar.style.right = "-300px";
     });

     document.addEventListener("click", (event) => {
       if (
         !sidebar.contains(event.target) &&
         !hamburgerIcon.contains(event.target)
       ) {
         sidebar.style.right = "-300px";
       }
     });
   };

   add_hamburger_icon();
  const change_location_menu_wrapper = () => {
    const menu_wrapper = document.querySelector("#header > div.menu-wrapper");
    const anatomi_navbar_center = document.querySelector(
      ".anatomi_navbar-center"
    );

    if (menu_wrapper && anatomi_navbar_center) {
      anatomi_navbar_center.insertAdjacentElement("afterbegin", menu_wrapper);
    }
  };

  change_location_menu_wrapper();

  const generate_homepage_section = () => {
    const header_in_container_remove = document.querySelector(
      "#header > div.container"
    );
    if (header_in_container_remove) {
      header_in_container_remove.style.display = "none";
    }

    const orijinal_anasayfa_footer = document.querySelector("#footer");
    if (orijinal_anasayfa_footer) {
      orijinal_anasayfa_footer.style.display = "none";
    }

    const orijinal_anasayfa_responsive_select_menu = document.querySelector(
      "#smoothmenu > select"
    );
    if (orijinal_anasayfa_responsive_select_menu) {
      orijinal_anasayfa_responsive_select_menu.style.display = "none";
    }

    const orijinal_menu_wrapper_container = document.querySelector(
      "#anatomi_navbar > div > div.anatomi_navbar-center > div.menu-wrapper > div"
    );
    if (orijinal_menu_wrapper_container) {
      orijinal_menu_wrapper_container.classList.remove("container");
    }

    const orijinal_menu_wrapper_row = document.querySelector(
      "#anatomi_navbar > div > div.anatomi_navbar-center > div.menu-wrapper > div > div"
    );
    if (orijinal_menu_wrapper_row) {
      orijinal_menu_wrapper_row.classList.remove("row");
    }

    const orijinal_menu_wrapper_span12 = document.querySelector(
      "#anatomi_navbar > div > div.anatomi_navbar-center > div.menu-wrapper > div > div > div"
    );
    if (orijinal_menu_wrapper_span12) {
      orijinal_menu_wrapper_span12.classList.remove("span12");
    }

    const anatomi_hero_section = document.querySelector(
      ".anatomi_hero-section"
    );
    if (anatomi_hero_section && anasayfa_orijinal_content) {
      anatomi_hero_section.insertAdjacentElement(
        "beforebegin",
        anasayfa_orijinal_content
      );
    }
  };

  generate_homepage_section();

  const handle_remove_old_menu = () => {
    const menu = document.querySelector(
      "#anatomi_navbar > div > div.anatomi_navbar-center > div.menu-wrapper"
    );
    if (menu && window.innerWidth <= 768) {
      menu.style.display = "none";
    }
  };
  handle_remove_old_menu();

  const generate_hamburger_menu = () => {
    document
      .querySelectorAll(".anatomi_dropdown-trigger")
      .forEach((trigger) => {
        trigger.addEventListener("click", function (e) {
          e.stopPropagation();
          const dropdown = this.querySelector(".anatomi_dropdown");

          if (dropdown) {
            if (dropdown.style.display === "block") {
              dropdown.style.display = "none";
            } else {
              dropdown.style.display = "block";
            }
          }
        });
      });

    document
      .querySelectorAll(".anatomi_nested-dropdown-trigger")
      .forEach((trigger) => {
        trigger.addEventListener("click", function (e) {
          e.stopPropagation();
          const nestedDropdown = this.querySelector(".anatomi_dropdown");

          if (nestedDropdown) {
            if (nestedDropdown.style.display === "block") {
              nestedDropdown.style.display = "none";
            } else {
              nestedDropdown.style.display = "block";
            }
          }
        });
      });

    document.addEventListener("click", () => {
      document.querySelectorAll(".anatomi_dropdown").forEach((menu) => {
        menu.style.display = "none";
      });
    });
  };

  generate_hamburger_menu();
};
const navbar_eklemesi_init = () => {
  navbar_eklemesi_html();
  navbar_eklemesi_css();
  navbar_eklemesi_js();
};
const navbar_eklemesi_condition = () => {
  return window.location.pathname !== "/";
};
if (navbar_eklemesi_condition()) {
  navbar_eklemesi_init();
}

/*HEADER DÜZENLENMESİ*/

const header_duzenlemesi_html = () => {
  const html = `
  <div class="anatomi_header_info">
    <div class= "anatomi_header_info_left">
        <div class="anatomi_header_phone">
            <i class="fa-solid fa-phone-volume"></i>
            <p id="anatomi_phoneNumber">0(850) 281 10 86</p>
        </div>
        <div class="anatomi_header_gmail">
            <i class="fa-regular fa-envelope"></i>
            <p id="anatomi_mailText">destek@carglass.com.tr</p>
        </div>
    </div>
    <div class="anatomi_header_info_right">
    <a href="https://www.youtube.com/@carglassturkiye"> <i class="fa-brands fa-youtube"></i></a>   
    <a href="https://tr-tr.facebook.com/CarglassTR"><i class="fa-brands fa-facebook"></i></a>  
    <a href=" https://www.instagram.com/carglasstr/"> <i class="fa-brands fa-instagram"></i></a>
    <a href= "https://x.com/CarglassTR"><i class="fa-brands fa-x-twitter"></i></i></a>
    </div>
  </div>    
  <span id="copyMessage" style="display:none;">Kopyalandı!</span>
  <span id="copyMessage2" style="display:none;">Kopyalandı!</span>
  `;
  const header = document.querySelector("#header");
  if (header) {
    header.insertAdjacentHTML("beforeend", html);
  }
};

const header_duzenlemesi_css = () => {
  const style = `
      <style>
      .anatomi_header_info{
        position: sticky;
         top: 0;
         background-color: #fff;
         z-index: 999999999999;
         display: flex;
         justify-content: space-between;
         align-items: center;
         padding: 15px 40px 15px;
         border-bottom: 1px solid #0000000f;
      }
    .anatomi_header_info a{
        color: black;
    }
         .anatomi_header_info a:visited{
                     color: black;

         }
      .anatomi_header_info i { 
         font-size: 20px;
      }
      .anatomi_header_info p{
         padding: 0px;
         font-size: 14px;
         font-weight: bold;
         cursor: pointer;
      }
      .anatomi_header_phone , .anatomi_header_gmail{
         display: flex;
         align-items: center;
         gap: 10px;
      }
      .anatomi_header_info_left{
         display: flex;
         gap: 50px;
      }

      .anatomi_header_info_right{
         display: flex;
         gap: 10px;
         align-items: center;
      }

      #copyMessage {
       position: fixed;
        top: 35px;
        left: 100px;
        background-color: #000000cc;
        color: white;
        padding: 5px 10px;
        border-radius: 5px;
        font-size: 12px;
        font-weight: bold;
        z-index: 9999;
         display: none;
      }
        #copyMessage2 {
       position: fixed;
        top: 35px;
        left: 250px;
        background-color: #000000cc;
        color: white;
        padding: 5px 10px;
        border-radius: 5px;
        font-size: 12px;
        font-weight: bold;
        z-index: 9999;
         display: none;
      }

      .ddsmoothmenu ul{
        margin-left: 0 !important;
      }
 @media (max-width: 768px) {
  .anatomi_header_info {
    padding: 10px 5px;
    justify-content: space-around;
  }

  .anatomi_header_info_left {
    gap: 8px;
  }
     .anatomi_header_phone , .anatomi_header_gmail{
         gap: 3px;
      }
   .anatomi_header_info_right{
         gap: 5px;
      }
  .anatomi_header_info p {
    font-size: 12px;
  }

  .anatomi_header_info i {
    font-size: 16px;
  }
 #copyMessage {
        left: 50px;
    }
}

}
      </style>
  `;
  const head = document.querySelector("head");
  head.insertAdjacentHTML("beforeend", style);
};

const header_duzenlemesi_js = () => {
  const header = document.querySelector(".anatomi_header_info");
  const navbar = document.querySelector("#anatomi_navbar");
  if (header && navbar) {
    navbar.insertAdjacentElement("beforebegin", header);
  }

  const phoneNumber = document.querySelector("#anatomi_phoneNumber");
  const mailText = document.querySelector("#anatomi_mailText");
  const copyMessage = document.querySelector("#copyMessage");
  const copyMessage2 = document.querySelector("#copyMessage2");

  if (phoneNumber) {
    phoneNumber.style.cursor = "pointer";
    phoneNumber.addEventListener("click", () => {
      if (/Mobi|Android|iPhone|iPad/i.test(navigator.userAgent)) {
        window.location.href = `tel:${phoneNumber.textContent.trim()}`;
      } else {
        navigator.clipboard.writeText(phoneNumber.textContent).then(() => {
          copyMessage.style.display = "inline-block";
          setTimeout(() => {
            copyMessage.style.display = "none";
          }, 1000);
        });
      }
    });
  }

  if (mailText) {
    mailText.style.cursor = "pointer";
    mailText.addEventListener("click", () => {
      const email = mailText.textContent.trim();
      const gmailUrl = `https://mail.google.com/mail/?view=cm&to=${email}`;

      window.open(gmailUrl, "_blank");

      navigator.clipboard.writeText(email).then(() => {
        copyMessage2.style.display = "inline-block";
        setTimeout(() => {
          copyMessage2.style.display = "none";
        }, 2000);
      });
    });
  }
};

const header_duzenlemesi_init = () => {
  header_duzenlemesi_html();
  header_duzenlemesi_css();
  header_duzenlemesi_js();
};

const header_duzenlemesi_condition = () => {
  return true;
};

if (header_duzenlemesi_condition()) {
  header_duzenlemesi_init();
}

/*İÇERİK GÜNCELLENMESİ */
const arkacam_degisim_icerik_eklenmesi_html = () => {
  const html = `
  <div class="anatomi-arka-cam-degisim-icerik">
    <p>
    <h2>Arka Cam Değişim Aşamaları </h2>
Araç camları yolculuk sırasında sürüş güvenliği ve konfor sağlamak için tasarlanmıştır. Ancak zamanla ya da ani bir kaza sonucu arka camlarda hasar meydana gelebilir. <bold>Arka cam hasarının etkileri</bold> sürücüyü hem güvenlik hem de görünürlük açısından ciddi şekilde etkileyebilir. Hasarlı bir cam araç içindeki yolcular için de risk oluşturabilir. Bu nedenle sorun fark edildiğinde hızlı bir çözüm üretmek önemlidir. Kırık bir arka cam ani hava değişimlerinden araç içindeki eşyalara kadar birçok unsuru olumsuz etkileyebilir. <bold> Kırık arka camın riskleri </bold>yalnızca iç mekânın zarar görmesiyle sınırlı değildir. Aynı zamanda sürüş sırasında olası bir kazayı da tetikleyebilir. Bu yüzden arka camın onarımı ya da değişimi ertelenmeden gerçekleştirilmelidir.
Değişim süreci başlarken öncelikle camın durumunun profesyonel bir ekip tarafından incelenmesidir. <bold>Oto arka cam değişim süreci </bold> hasarın boyutuna göre belirli aşamalar içerir. Her detay titizlikle ele alınır, böylece işlem kusursuz bir şekilde tamamlanabilir. Değişim sırasında camın doğru şekilde çıkarılması ve yeni camın hassasiyetle yerleştirilmesi gerekir. Profesyonel bir yaklaşım sürecin daha güvenli ve hızlı ilerlemesini sağlar.<bold> Arka cam değişim aşamaları</bold>, eski camın temizlenmesiyle başlar. Ardından yeni camın uyumluluğu şasi bilgisi ile uluslararası veri tabanı üzerinden kontrol edilir ve aracın birebir aynı özelliklerdeki camı temin edilip, özel ekipmanlarla yerine sabitlenir. Kullanılan yapışkan malzemeler ve montaj yöntemleri sayesinde camın dayanıklılığı artırılır.
Değişimin ardından camın tamamen sabitlendiğinden emin olmak için birkaç kontrol yapılır. Bu kontroller montaj işleminin güvenilirliğini sağlar ve kullanıcıya rahat bir sürüş deneyimi sunar. Arka cam değişimi doğru ellerde gerçekleştirildiğinde hem güvenli hem de uzun ömürlü bir çözüm sunar.
<h2>Arka Cam Değişiminde Orijinal Ürün Kalitesi</h2>

Bir aracın cam değişimi sırasında kullanılan ürünlerin kalitesi işlem sonuçlarını doğrudan etkiler. Arka cam değişimi orijinal kalitede ürün kullanılarak yapıldığında hem güvenlik hem de estetik açıdan üstün bir performans elde edilir. Orijinal ürünlerin tercih edilmesi aracın fabrika ayarlarına uygun bir şekilde onarılmasını sağlar. Birçok sürücü için cam değişiminde kalite ve güvenlik ön plandadır. <bold>Oto arka cam değişimi</bold> yalnızca uzmanlar tarafından ve uygun malzemelerle yapılmalıdır. Orijinal ürünler hem üretici garantisiyle desteklenir hem de aracın değer kaybetmesini engeller. Bu sayede sürücüler güvenle yola devam edebilir.
Orijinal ürün kullanımı aracınızın dayanıklılığını korumak için önemlidir.<bold>Orijinal ürün kalitesi</bold> her zaman uzun vadeli bir çözüm sunar. Araç camlarının uyumlu bir şekilde monte edilmesi sürüş esnasında ekstra bir güvenlik sağlar. Bu nedenle üretici tarafından onaylanmış ürünlerin kullanılması büyük bir avantajdır. Cam montaj süreci dikkat ve deneyim gerektirir. <bold>Oto arka cam montajı</bold>  özel teknikler ve ekipmanlarla yapılmalıdır. Orijinal cam üretimi yapan firmalar tarafından sağlanan camlar araca birebir uyum sağlar ve montaj sırasında herhangi bir sorun yaşanmasını önler. Kaliteli malzemeler uzun süreli bir memnuniyet sağlar. Değişim işlemi sırasında orijinal ekipman kullanılması hem aracın görünümünü hem de performansını korur. Arka cam orjinal ekipman üretici standartlarına uygunluğu sayesinde araç sahiplerine ekstra güven verir. Bu nedenle değişim yaptırmadan önce kullanılan ürünlerin kaynağını sorgulamak önemlidir.
<h2>Arka Cam Montajı ile Güvenli Değişim</h2>

Cam değişimi işlemi yalnızca profesyonel ekipler tarafından yapılmalıdır.<bold> Araba arka cam montaj işlemi</bold> detaylı bir planlama gerektirir. Her aşama, uzman teknisyenler tarafından dikkatle gerçekleştirilir. Doğru bir montaj aracınızın estetik ve güvenlik standartlarını korumasını sağlar. Bir cam değişim işlemi sırasında dikkat edilmesi gereken en önemli unsurlardan biri güvenliktir. Araç arka cam değişim süreç detayları her zaman detaylı bir incelemeyi içerir. Montaj öncesinde ve sonrasında yapılan testler camın güvenli bir şekilde yerine oturduğunu doğrular. Bu süreç yolcuların güvenliğini garanti altına alır.
Cam montajında kullanılan malzemeler ve teknikle işlemin kalitesini belirler. <bold>Araç arka cam montaj aşamaları</bold> dikkatle planlanır ve uygulanır. Camın çıkarılması, yapışkan malzemelerin uygulanması ve yeni camın sabitlenmesi gibi aşamalar işlemin temelini oluşturur. Her adım araç sahiplerinin güvenle yola devam etmesini sağlar.
Montaj işleminin sonunda camın tamamen kuruması ve yerinde sabitlenmesi sağlanır. Güvenli arka cam değişimi yalnızca doğru malzemeler ve ekipmanlarla mümkündür. Değişim işlemi sırasında yapılan son kontroller camın herhangi bir darbeye ya da dış etkiye karşı dayanıklı olmasını garanti eder. Bu sayede sürüş sırasında ekstra bir güvenlik sağlanır. Aracınızın cam değişimi için bir profesyonel desteğe ihtiyacınız varsa zaman kaybetmeden Carglass®’dan randevu almanız önemlidir. <bold>Arka cam değişim randevusu</bold> işlemin hızlı ve etkili bir şekilde tamamlanmasını sağlar. Böylece aracınız kısa sürede tekrar güvenli hale gelir.
<h2>Sıkça Sorulan Sorular</h2>
<ol>
<li>
  <strong>Arka cam değişimi arabanın değerini düşürür mü?</strong><br>
  Genel olarak <strong>arka cam değişimi araba değeri</strong> bu işlem doğru malzemeler ve yöntemlerle yapıldığında etkilenmez. 
  Carglass® Türkiye üretici garantili camlar ve uzman işçilikle bu konuda güvence sağlar.
</li>
<li>
  <strong>Oto arka cam değişimi tramer kaydına işler mi?</strong><br>
  Sigorta üzerinden yapılacak olan <strong>oto arka cam değişimi tramer</strong> kaydına işlenir. 
  Bu işlem sigorta prosedürlerine uygun şekilde belgelenir ve kayıt altına alınır.
</li>
<li>
  <strong>Araba arka cam değişimi sonrası kaç saatte kurur?</strong><br>
  Carglass®’da <strong>araba arka cam değişimi</strong> sonrası kullanılan yapıştırıcılar yaklaşık 2 saat içinde tamamen kurur. 
  Bu süre camın güvenli bir şekilde yerine sabitlenmesi için yeterlidir.
</li>
</ol>

</p>
  </div>
    `;
  const header = document.querySelector("#header");
  if (header) {
    header.insertAdjacentHTML("beforeend", html);
  }
};
const arkacam_degisim_icerik_eklenmesi_css = () => {
  const style = `
      <style>
      .anatomi-arka-cam-degisim-icerik bold{
      font-weight: bold;
      }
      .anatomi-arka-cam-degisim-icerik h2{
      font-size: 18px !important;
      margin-bottom: 10px !important;
      margin-top: 20px;
      }
        .anatomi-arka-cam-degisim-icerik ol{
          padding-left: 15px;
          display: flex;
        flex-direction: column;
        gap: 10px;
      }
      .anatomi_h2{
          font-size: 18px !important;
      }
      .anatomi_icerik_q{
        display: block;
      }
          .anatomi_span12{
     display: flex;
    justify-content: space-between;
    align-items: center;
    }
    .anatomi_h1{
        font-size: 20px !important;
    font-style: normal !important;
    margin: 0px !important;
    font-weight: 600 !important;
    }
    @media screen and (max-width: 768px) {
    .anatomi_span12{
     flex-direction: column;
    align-items: flex-start;
    }
    }
    </style>
    `;
  const head = document.querySelector("head");
  head.insertAdjacentHTML("beforeend", style);
};
const arkacam_degisim_icerik_eklenmesi_js = () => {
  const targetP = document.querySelector(
    "#content > div > div.row > div > div > div.span9 > p:nth-child(7)"
  );
  const icerik = document.querySelector(".anatomi-arka-cam-degisim-icerik");
  if (targetP && icerik) {
    targetP.insertAdjacentElement("afterend", icerik);
  }

  const headingH4 = document.querySelector(
    "#content > div > div.row > div > div > div.span9 > h4:nth-child(1)"
  );
  if (headingH4) {
    const h2Element1 = document.createElement("h2");
    h2Element1.classList.add("anatomi_h2");
    h2Element1.innerHTML = headingH4.innerHTML;
    headingH4.parentNode.replaceChild(h2Element1, headingH4);
  }
  const headingH4Second = document.querySelector(
    "#content > div > div.row > div > div > div.span9 > h4:nth-child(3)"
  );
  if (headingH4Second) {
    headingH4Second.textContent = "Araç Arka Cam Değişimi";
    const h2Element2 = document.createElement("h2");
    h2Element2.classList.add("anatomi_h2");
    h2Element2.innerHTML = headingH4Second.innerHTML;
    headingH4Second.parentNode.replaceChild(h2Element2, headingH4Second);
  }
   const span12 = document.querySelector("#header-btm > div > div > div");
   if (span12 && !span12.classList.contains("anatomi_span12")) {
     span12.classList.add("anatomi_span12");
   }
   const h2Element = document.querySelector(
     "#header-btm > div > div > div > h2"
   );
   if (h2Element) {
     const h1Element = document.createElement("h1");
     h1Element.classList.add("anatomi_h1");
     h1Element.innerHTML = h2Element.innerHTML;
     h2Element.parentNode.replaceChild(h1Element, h2Element);
   }
};
const arkacam_degisim_icerik_eklenmesi_init = () => {
  arkacam_degisim_icerik_eklenmesi_html();
  arkacam_degisim_icerik_eklenmesi_css();
  arkacam_degisim_icerik_eklenmesi_js();
};
const arkacam_degisim_icerik_eklenmesi_condition = () => {
  const location =
    window.location.href ===
    "https://www.carglass.com.tr/Sayfa/Detay?sayfa_id=30";
  return location;
};
if (arkacam_degisim_icerik_eklenmesi_condition()) {
  arkacam_degisim_icerik_eklenmesi_init();
}
const arkacam_ucreti_icerik_eklenmesi_html = () => {
  const html = `
  <div class="anatomi-arka-cam-ucreti-icerik">
  <p> <h2>Arka Cam Fiyatlarını Belirleyen Faktörler </h2>
 
        Bir aracın arka camı güvenlik ve konfor açısından oldukça önemlidir. Ancak herhangi bir hasar durumunda onarım ya da değişim süreçlerinde fiyatların nasıl belirlendiği kafa karıştırıcı olabilir. Arka camla ilgili hizmetlerde birçok faktör fiyatlandırmayı etkiler. 
        Fiyatlandırmayı etkileyen en önemli unsurlardan biri camın türüdür. Arka cam eğer lamine cam değilse tamir edilemez (Genelde üst sınıf araçlar dışında arka cam lamine kullanılmaz)  ve eğer hasar tamir edilemeyecek kadar büyükse <bold>arka cam değişim ücreti</bold>  devreye girer. Hasarın yanı sıra camın markası, kalitesi ve kullanılan teknoloji de maliyeti belirler.
        Bir başka önemli etken ise işçilik maliyetidir. Camın değişim süresi ve işlemin uzman teknisyenler tarafından yapılması arka cam değişim fiyatları üzerinde doğrudan etkiye sahiptir.<bold> Hasarlı arka cam değişimi</bold> aracın modeli ve markasına göre farklılık gösterir.
        <bold>Arka cam hasar çözümleri</bold> arasında tamir ya da değişim hizmeti sunulurken kullanılan teknolojiler de fiyat farkına neden olur. Örneğin modern araçlardaki arka camlar genellikle ısıtma ve karartma özelliklerine sahiptir. Bu tür özellikler maliyeti etkileyen kriterlerden biridir. Oto arka cam fiyatlandırma faktörleri arasında hizmet alınan firmanın profesyonelliği ve kullanılan parçaların orijinalliği de yer alır. Tüm bu kriterler hem güvenli bir sürüş hem de uzun vadede sorunsuz bir kullanım için önemlidir.
        <h2>Arka Cam Değişiminde Hızlı ve Uygun Çözümler</h2>
        Aracınızda meydana gelen bir cam hasarı günlük hayatınızı aksatabilir. Bu tür durumlarda <bold>oto arka cam hasarı</bold> hızlı bir şekilde çözülmelidir. Carglass® gibi köklü firma bu süreci sizin için olabildiğince kolay ve hızlı hale getirir. Cam değişimi sırasında kullanılan parçaların aracınıza uygun olması son derece önemlidir. Çünkü araca uygun arka cam değişimi hem güvenliğiniz hem de estetik görünüm açısından fark yaratır. Uzman bir teknisyen ekibi sizin için en uygun arka cam değişim çözümleri sunarak araç bütünlüğünü korur.
        Cam değişim sürecinde, hızlı olmak kadar güvenliğin de öncelikli olması gerekir.<bold> Hızlı ve güvenli arka cam değişim hizmeti</bold> sunan Carglass® gibi firmalar yalnızca zaman kazandırmakla kalmaz aynı zamanda sizi ve sevdiklerinizi güvende tutar. Bu süreçte kullanılan ekipmanların ve camın kalitesi, aracınızın değerini de korur. Eğer acil bir ihtiyaç doğduysa arka cam değişimi hızlı çözüm arayanlar için en etkili yöntemdir. Böyle durumlarda iletişim kurduğunuz firmanın hizmet kalitesinden emin olmalısınız. <bold>Oto arka cam değişimi </bold>doğru ellerde yapıldığında, uzun vadede memnuniyet sağlar.
        Kaza ya da ani bir hasar sonrası bu tür işlemler için mutlaka uzman bir ekibe başvurmanız önerilir. Zamanında müdahale edilen bir arka cam değişimi hem estetik açıdan hem de sürüş güvenliği açısından sizi memnun edecektir.
        <h2>Araç Sigortası ile Arka Cam Ücretleri</h2>
        Araç sigortası cam hasarlarının maliyetini karşılamada önemli bir rol oynar. Ancak bazı durumlarda sigorta dışı araç cam değişimi tercih edilmek zorunda kalabilir. Böyle bir durumda değişim ücretlerinin tamamı araç sahibine ait olur. Bu nedenle sigorta kapsamını iyi anlamak önemlidir. Sigortanızın cam hasarlarını kapsayıp kapsamadığını öğrenmek maliyet açısından avantaj sağlar. Çoğu poliçe <bold> sigorta cam hasarı kapsamı</bold> altında arka cam değişimlerini karşılar. Ancak sigorta detaylarınızı kontrol etmek süreci daha kolay yönetmenizi sağlar. Araç cam değişim fiyatları sigorta poliçesine göre değişiklik gösterebilir.
        Eğer bir randevu oluşturmanız gerekiyorsa <bold> arka cam değişim randevusu</bold> almak sürecin ilk adımıdır. Randevu sırasında sigorta detayları ile işlemin nasıl gerçekleştirileceği hakkında bilgi alabilirsiniz. 
        Aracınıza uygun fiyatlarla değişim yaptırmak istiyorsanız <bold>araca göre cam fiyatları</bold> konusunda bilgi sahibi olmanız önemlidir. Bu bilgiler bütçenizi planlamanıza yardımcı olur ve süreci daha kolay hale getirir.
        Cam hasarlarında hızlı, güvenli ve kaliteli çözümler sunan Carglass® her türlü ihtiyacınıza cevap verir. Aracınız için en doğru hizmeti almak istiyorsanız Carglass® uzmanlığına başvurabilirsiniz. Cam değişiminde kullanılan orijinal parçalar ve profesyonel işçilik sayesinde sürüş güvenliğiniz her zaman önceliklidir.
      <h2>Sıkça Sorulan Sorular</h2>
      <ol>
      <li>
          <strong>Oto arka cam montajı nasıl yapılır?</strong><br>
          Cam montajı uzman teknisyenler tarafından yapılır ve süreç dikkatlice yönetilir. 
          <strong>Oto arka cam montajı</strong> aracın modeline uygun parçalar seçilerek gerçekleştirilir. 
          Bu sayede hem güvenli hem de estetik bir sonuç elde edilir.
      </li>
      <li>
          <strong>Araç arka cam değişimi ne kadar sürer?</strong><br>
          Genelde işlem 1-1,5 saat içinde tamamlanır. Ancak güvenli bir sürüş için işlemden sonra 2 saat beklenmesi önerilir. 
          <strong>Araç arka cam değişimi</strong> hızla çözülse de güvenlik öncelikli olmalıdır.
      </li>
      <li>
          <strong>Arka cam değişiminden sonra aracımda iz kalır mı?</strong><br>
          Doğru ekipman ve uzman işçilikle, işlem sonrası herhangi bir iz kalmaz. 
          <strong>Arka cam değişim sonrası</strong> aracınız ilk günkü gibi görünmeye devam eder.
      </li>
      </ol>
  </p>
</div>
`;
  const header = document.querySelector("#header");
  if (header) {
    header.insertAdjacentHTML("beforeend", html);
  }
};
const arkacam_ucreti_icerik_eklenmesi_css = () => {
  const style = `
      <style>
      .anatomi-arka-cam-ucreti-icerik bold{
      font-weight: bold;
      }
      .anatomi-arka-cam-ucreti-icerik h2{
      font-size: 18px !important;
      margin-bottom: 10px !important;
      margin-top: 20px;
      }
      .anatomi-arka-cam-ucreti-icerik ol{
          padding-left: 15px;
          display: flex;
    flex-direction: column;
    gap: 10px;
      }
      .anatomi_icerik_q{
        display: block;
      }
      .anatomi_h2{
        text-transform: capitalize;
        font-size: 18px !important;
      }
    .anatomi_span12{
     display: flex;
    justify-content: space-between;
    align-items: center;
    }
    .anatomi_h1{
        font-size: 20px !important;
    font-style: normal !important;
    margin: 0px !important;
    font-weight: 600 !important;
    }
    @media screen and (max-width: 768px) {
    .anatomi_span12{
     flex-direction: column;
    align-items: flex-start;
    }
    }
    </style>
    `;
  const head = document.querySelector("head");
  head.insertAdjacentHTML("beforeend", style);
};
const arkacam_ucreti_icerik_eklenmesi_js = () => {
  const targetP = document.querySelector(
    "#content > div > div.row > div > div > div.span9 > p:nth-child(7)"
  );
  const icerik = document.querySelector(".anatomi-arka-cam-ucreti-icerik");
  if (targetP && icerik) {
    targetP.insertAdjacentElement("afterend", icerik);
  }

  const h4Element1 = document.querySelector(
    "#content > div > div.row > div > div > div.span9 > h4:nth-child(1)"
  );

  if (h4Element1) {
    const h2Element1 = document.createElement("h2");
    h2Element1.classList.add("anatomi_h2");
    h2Element1.innerHTML = h4Element1.innerHTML;
    h4Element1.parentNode.replaceChild(h2Element1, h4Element1);
  }
  const h4Element2 = document.querySelector(
    "#content > div > div.row > div > div > div.span9 > h4:nth-child(4)"
  );
  if (h4Element2) {
    h4Element2.textContent =
      "Sigorta İle İlgili Tüm Evrak İşlemlerinizi De Biz Yapıyoruz.";
    const h2Element2 = document.createElement("h2");
    h2Element2.classList.add("anatomi_h2");
    h2Element2.innerHTML = h4Element2.innerHTML;
    h4Element2.parentNode.replaceChild(h2Element2, h4Element2);
  }

  const h4Element3 = document.querySelector(
    "#content > div > div.row > div > div > div.span9 > h4:nth-child(6)"
  );
  if (h4Element3) {
    const h2Element3 = document.createElement("h2");
    h2Element3.classList.add("anatomi_h2");
    h2Element3.innerHTML = h4Element3.innerHTML;
    h4Element3.parentNode.replaceChild(h2Element3, h4Element3);
  }
  const span12 = document.querySelector("#header-btm > div > div > div");
  if (span12 && !span12.classList.contains("anatomi_span12")) {
    span12.classList.add("anatomi_span12");
  }
  const h2Element = document.querySelector(
    "#header-btm > div > div > div > h2"
  );
  if(h2Element){
    const h1Element = document.createElement("h1");
    h1Element.classList.add("anatomi_h1");
    h1Element.innerHTML = h2Element.innerHTML;
    h2Element.parentNode.replaceChild(h1Element, h2Element);
  }
};
const arkacam_ucreti_icerik_eklenmesi_init = () => {
  arkacam_ucreti_icerik_eklenmesi_html();
  arkacam_ucreti_icerik_eklenmesi_css();
  arkacam_ucreti_icerik_eklenmesi_js();
};
const arkacam_ucreti_icerik_eklenmesi_condition = () => {
  const location =
    window.location.href ===
    "https://www.carglass.com.tr/Sayfa/Detay?sayfa_id=34";
  return location;
};
if (arkacam_ucreti_icerik_eklenmesi_condition()) {
  arkacam_ucreti_icerik_eklenmesi_init();
}



//ÜRÜN DETAY GÖRSEL DEĞİŞİKLİĞİ UI/UX KODLAMA BÖLÜMÜ BAŞLANGICI

if (
  window.location.href === "https://www.carglass.com.tr/Sayfa/Detay?sayfa_id=16"
) {
  const a_img_style = `<style>
  @media (min-width: 765px) {
 .portfolio_4column img {
    width: 100%; /* Varsayılan genişlik */
    cursor: pointer; /* Tıklanabilir imleç */
    transition: transform 0.3s ease, z-index 0.3s ease; /* Geçiş animasyonu */
    position: relative; /* Z-index'in çalışması için pozisyonu relative yap */
  }

  /* Büyütme efekti ve en üstte görünmesi için */
  .portfolio_4column img.enlarged {
    transform: scale(2); /* Resmi 2 kat büyüt */
    z-index: 1000; /* En üstte kalması için yüksek bir z-index değeri ver */
  }
}
    @media  (max-width: 765px) {
    .portfolio_4column img.enlarged {
      transform: scale(1.1); /* Resmi sadece 1.1 kat büyüt */
    }
  }
</style>`;

  // 'portfolio_4column' sınıfına sahip 'ul' elementini seç
  const ulElement = document.querySelector(".portfolio_4column");

  // Eğer ulElement tanımlanmamışsa, hata verir.
  // Tanımlıysa, devam eder.

  if (ulElement) {
    // Öncelikle içindeki tüm li elementlerini sil
    ulElement.innerHTML = "";

    // Eklemek istediğin resimlerin URL'lerini bir dizi olarak tanımla
    const imageUrls = [
      "https://cro-anatomi.s3.eu-north-1.amazonaws.com/Carglass+O%CC%88n+Cam+Tamiri-01.png",
      "https://cro-anatomi.s3.eu-north-1.amazonaws.com/Carglass+O%CC%88n+Cam+Tamiri-02.png",
      "https://cro-anatomi.s3.eu-north-1.amazonaws.com/Carglass+O%CC%88n+Cam+Tamiri-03.png",
      "https://cro-anatomi.s3.eu-north-1.amazonaws.com/Carglass+O%CC%88n+Cam+Tamiri-04.png",
      "https://cro-anatomi.s3.eu-north-1.amazonaws.com/Carglass+O%CC%88n+Cam+Tamiri-05.png",
    ];

    // Her bir resim URL'si için bir li ve img elementi oluştur
    imageUrls.forEach((url) => {
      const liElement = document.createElement("li"); // Yeni bir li elementi oluştur
      const imgElement = document.createElement("img"); // Yeni bir img elementi oluştur

      // img elementinin src özelliğini belirle
      imgElement.src = url;

      // img elementine tıklama olayını ekle
      imgElement.addEventListener("click", (event) => {
        event.stopPropagation(); // Tıklanan img dışındaki olayları engelle

        const currentlyEnlarged = document.querySelector(
          ".portfolio_4column img.enlarged"
        );
        if (currentlyEnlarged && currentlyEnlarged !== imgElement) {
          currentlyEnlarged.classList.remove("enlarged");
        }

        imgElement.classList.toggle("enlarged");
      });

      // img elementini li elementinin içine yerleştir
      liElement.appendChild(imgElement);

      // li elementini ul elementinin içine yerleştir
      ulElement.appendChild(liElement);
    });

    // Sayfanın herhangi bir yerine tıklama olayı ekle
    document.addEventListener("click", (event) => {
      const isImageClicked = event.target.tagName.toLowerCase() === "img";

      if (!isImageClicked) {
        const enlargedImages = document.querySelectorAll(
          ".portfolio_4column img.enlarged"
        );
        enlargedImages.forEach((img) => {
          img.classList.remove("enlarged");
        });
      }
    });
  }

  document.querySelector("head").insertAdjacentHTML("beforeend", a_img_style);
}

// -----------
else if (
  window.location.href === "https://www.carglass.com.tr/Sayfa/Detay?sayfa_id=25"
) {
  const a_img_style = `<style>
    @media (min-width: 765px) {
   .portfolio_4column img {
      width: 100%; /* Varsayılan genişlik */
      cursor: pointer; /* Tıklanabilir imleç */
      transition: transform 0.3s ease, z-index 0.3s ease; /* Geçiş animasyonu */
      position: relative; /* Z-index'in çalışması için pozisyonu relative yap */
    }
  
    /* Büyütme efekti ve en üstte görünmesi için */
    .portfolio_4column img.enlarged {
      transform: scale(2); /* Resmi 2 kat büyüt */
      z-index: 1000; /* En üstte kalması için yüksek bir z-index değeri ver */
    }
  }
      @media  (max-width: 765px) {
      .portfolio_4column img.enlarged {
        transform: scale(1.1); /* Resmi sadece 1.1 kat büyüt */
      }
    }
  </style>`;

  // 'portfolio_4column' sınıfına sahip 'ul' elementini seç
  const ulElement = document.querySelector(".portfolio_4column");

  // Eğer ulElement tanımlanmamışsa, hata verir.
  // Tanımlıysa, devam eder.

  if (ulElement) {
    // Öncelikle içindeki tüm li elementlerini sil
    ulElement.innerHTML = "";

    // Eklemek istediğin resimlerin URL'lerini bir dizi olarak tanımla
    const imageUrls = [
      "https://anatomi.s3.eu-north-1.amazonaws.com/Carglass+O%CC%88n+Cam+Deg%CC%86is%CC%A7imi-01.png",
      "https://anatomi.s3.eu-north-1.amazonaws.com/Carglass+O%CC%88n+Cam+Deg%CC%86is%CC%A7imi-02.png",
      "https://anatomi.s3.eu-north-1.amazonaws.com/Carglass+O%CC%88n+Cam+Deg%CC%86is%CC%A7imi-03.png",
      "https://anatomi.s3.eu-north-1.amazonaws.com/Carglass+O%CC%88n+Cam+Deg%CC%86is%CC%A7imi-04.png",
      "https://anatomi.s3.eu-north-1.amazonaws.com/Carglass+O%CC%88n+Cam+Deg%CC%86is%CC%A7imi-05.png",
      "https://anatomi.s3.eu-north-1.amazonaws.com/Carglass+O%CC%88n+Cam+Deg%CC%86is%CC%A7imi-06.png",
    ];

    // Her bir resim URL'si için bir li ve img elementi oluştur
    imageUrls.forEach((url) => {
      const liElement = document.createElement("li"); // Yeni bir li elementi oluştur
      const imgElement = document.createElement("img"); // Yeni bir img elementi oluştur

      // img elementinin src özelliğini belirle
      imgElement.src = url;

      // img elementine tıklama olayını ekle
      imgElement.addEventListener("click", (event) => {
        event.stopPropagation(); // Tıklanan img dışındaki olayları engelle

        const currentlyEnlarged = document.querySelector(
          ".portfolio_4column img.enlarged"
        );
        if (currentlyEnlarged && currentlyEnlarged !== imgElement) {
          currentlyEnlarged.classList.remove("enlarged");
        }

        imgElement.classList.toggle("enlarged");
      });

      // img elementini li elementinin içine yerleştir
      liElement.appendChild(imgElement);

      // li elementini ul elementinin içine yerleştir
      ulElement.appendChild(liElement);
    });

    // Sayfanın herhangi bir yerine tıklama olayı ekle
    document.addEventListener("click", (event) => {
      const isImageClicked = event.target.tagName.toLowerCase() === "img";

      if (!isImageClicked) {
        const enlargedImages = document.querySelectorAll(
          ".portfolio_4column img.enlarged"
        );
        enlargedImages.forEach((img) => {
          img.classList.remove("enlarged");
        });
      }
    });
  }

  document.querySelector("head").insertAdjacentHTML("beforeend", a_img_style);
}
// -----------
else if (
  window.location.href === "https://www.carglass.com.tr/Sayfa/Detay?sayfa_id=24"
) {
  const a_img_style = `<style>
    @media (min-width: 765px) {
   .portfolio_4column img {
      width: 100%; /* Varsayılan genişlik */
      cursor: pointer; /* Tıklanabilir imleç */
      transition: transform 0.3s ease, z-index 0.3s ease; /* Geçiş animasyonu */
      position: relative; /* Z-index'in çalışması için pozisyonu relative yap */
    }
  
    /* Büyütme efekti ve en üstte görünmesi için */
    .portfolio_4column img.enlarged {
      transform: scale(2); /* Resmi 2 kat büyüt */
      z-index: 1000; /* En üstte kalması için yüksek bir z-index değeri ver */
    }
  }
      @media  (max-width: 765px) {
      .portfolio_4column img.enlarged {
        transform: scale(1.1); /* Resmi sadece 1.1 kat büyüt */
      }
    }
  </style>`;

  // 'portfolio_4column' sınıfına sahip 'ul' elementini seç
  const ulElement = document.querySelector(".portfolio_4column");

  // Eğer ulElement tanımlanmamışsa, hata verir.
  // Tanımlıysa, devam eder.

  if (ulElement) {
    // Öncelikle içindeki tüm li elementlerini sil
    ulElement.innerHTML = "";

    // Eklemek istediğin resimlerin URL'lerini bir dizi olarak tanımla
    const imageUrls = [
      "https://anatomi.s3.eu-north-1.amazonaws.com/O%CC%88n+cam+c%CC%A7atlak+tamiri-01.png",
      "https://anatomi.s3.eu-north-1.amazonaws.com/O%CC%88n+cam+c%CC%A7atlak+tamiri-02.png",
      "https://anatomi.s3.eu-north-1.amazonaws.com/O%CC%88n+cam+c%CC%A7atlak+tamiri-03.png",
      "https://anatomi.s3.eu-north-1.amazonaws.com/O%CC%88n+cam+c%CC%A7atlak+tamiri-04.png",
      "https://anatomi.s3.eu-north-1.amazonaws.com/O%CC%88n+cam+c%CC%A7atlak+tamiri-05.png",
      "https://anatomi.s3.eu-north-1.amazonaws.com/O%CC%88n+cam+c%CC%A7atlak+tamiri-06.png",
    ];

    // Her bir resim URL'si için bir li ve img elementi oluştur
    imageUrls.forEach((url) => {
      const liElement = document.createElement("li"); // Yeni bir li elementi oluştur
      const imgElement = document.createElement("img"); // Yeni bir img elementi oluştur

      // img elementinin src özelliğini belirle
      imgElement.src = url;

      // img elementine tıklama olayını ekle
      imgElement.addEventListener("click", (event) => {
        event.stopPropagation(); // Tıklanan img dışındaki olayları engelle

        const currentlyEnlarged = document.querySelector(
          ".portfolio_4column img.enlarged"
        );
        if (currentlyEnlarged && currentlyEnlarged !== imgElement) {
          currentlyEnlarged.classList.remove("enlarged");
        }

        imgElement.classList.toggle("enlarged");
      });

      // img elementini li elementinin içine yerleştir
      liElement.appendChild(imgElement);

      // li elementini ul elementinin içine yerleştir
      ulElement.appendChild(liElement);
    });

    // Sayfanın herhangi bir yerine tıklama olayı ekle
    document.addEventListener("click", (event) => {
      const isImageClicked = event.target.tagName.toLowerCase() === "img";

      if (!isImageClicked) {
        const enlargedImages = document.querySelectorAll(
          ".portfolio_4column img.enlarged"
        );
        enlargedImages.forEach((img) => {
          img.classList.remove("enlarged");
        });
      }
    });
  }

  document.querySelector("head").insertAdjacentHTML("beforeend", a_img_style);
} else if (
  window.location.href === "https://www.carglass.com.tr/Sayfa/Detay?sayfa_id=28"
) {
  const a_img_style = `<style>
    @media (min-width: 765px) {
   .portfolio_4column img {
      width: 100%; /* Varsayılan genişlik */
      cursor: pointer; /* Tıklanabilir imleç */
      transition: transform 0.3s ease, z-index 0.3s ease; /* Geçiş animasyonu */
      position: relative; /* Z-index'in çalışması için pozisyonu relative yap */
    }
  
    /* Büyütme efekti ve en üstte görünmesi için */
    .portfolio_4column img.enlarged {
      transform: scale(2); /* Resmi 2 kat büyüt */
      z-index: 1000; /* En üstte kalması için yüksek bir z-index değeri ver */
    }
  }
      @media  (max-width: 765px) {
      .portfolio_4column img.enlarged {
        transform: scale(1.1); /* Resmi sadece 1.1 kat büyüt */
      }
    }
  </style>`;

  // 'portfolio_4column' sınıfına sahip 'ul' elementini seç
  const ulElement = document.querySelector(".portfolio_4column");

  // Eğer ulElement tanımlanmamışsa, hata verir.
  // Tanımlıysa, devam eder.

  if (ulElement) {
    // Öncelikle içindeki tüm li elementlerini sil
    ulElement.innerHTML = "";

    // Eklemek istediğin resimlerin URL'lerini bir dizi olarak tanımla
    const imageUrls = [
      "https://anatomi.s3.eu-north-1.amazonaws.com/Carglass+YAN+CAM+DEG%CC%86I%CC%87S%CC%A7I%CC%87MI%CC%87-01.png",
      "https://anatomi.s3.eu-north-1.amazonaws.com/Carglass+YAN+CAM+DEG%CC%86I%CC%87S%CC%A7I%CC%87MI%CC%87-02.png",
      "https://anatomi.s3.eu-north-1.amazonaws.com/Carglass+YAN+CAM+DEG%CC%86I%CC%87S%CC%A7I%CC%87MI%CC%87-03.png",
      "https://anatomi.s3.eu-north-1.amazonaws.com/Carglass+YAN+CAM+DEG%CC%86I%CC%87S%CC%A7I%CC%87MI%CC%87-04.png",
      "https://anatomi.s3.eu-north-1.amazonaws.com/Carglass+YAN+CAM+DEG%CC%86I%CC%87S%CC%A7I%CC%87MI%CC%87.png",
    ];

    // Her bir resim URL'si için bir li ve img elementi oluştur
    imageUrls.forEach((url) => {
      const liElement = document.createElement("li"); // Yeni bir li elementi oluştur
      const imgElement = document.createElement("img"); // Yeni bir img elementi oluştur

      // img elementinin src özelliğini belirle
      imgElement.src = url;

      // img elementine tıklama olayını ekle
      imgElement.addEventListener("click", (event) => {
        event.stopPropagation(); // Tıklanan img dışındaki olayları engelle

        const currentlyEnlarged = document.querySelector(
          ".portfolio_4column img.enlarged"
        );
        if (currentlyEnlarged && currentlyEnlarged !== imgElement) {
          currentlyEnlarged.classList.remove("enlarged");
        }

        imgElement.classList.toggle("enlarged");
      });

      // img elementini li elementinin içine yerleştir
      liElement.appendChild(imgElement);

      // li elementini ul elementinin içine yerleştir
      ulElement.appendChild(liElement);
    });

    // Sayfanın herhangi bir yerine tıklama olayı ekle
    document.addEventListener("click", (event) => {
      const isImageClicked = event.target.tagName.toLowerCase() === "img";

      if (!isImageClicked) {
        const enlargedImages = document.querySelectorAll(
          ".portfolio_4column img.enlarged"
        );
        enlargedImages.forEach((img) => {
          img.classList.remove("enlarged");
        });
      }
    });
  }

  document.querySelector("head").insertAdjacentHTML("beforeend", a_img_style);
} else if (
  window.location.href === "https://www.carglass.com.tr/Sayfa/Detay?sayfa_id=30"
) {
  const a_img_style = `<style>
    @media (min-width: 765px) {
   .portfolio_4column img {
      width: 100%; /* Varsayılan genişlik */
      cursor: pointer; /* Tıklanabilir imleç */
      transition: transform 0.3s ease, z-index 0.3s ease; /* Geçiş animasyonu */
      position: relative; /* Z-index'in çalışması için pozisyonu relative yap */
    }
  
    /* Büyütme efekti ve en üstte görünmesi için */
    .portfolio_4column img.enlarged {
      transform: scale(2); /* Resmi 2 kat büyüt */
      z-index: 1000; /* En üstte kalması için yüksek bir z-index değeri ver */
    }
  }
      @media  (max-width: 765px) {
      .portfolio_4column img.enlarged {
        transform: scale(1.1); /* Resmi sadece 1.1 kat büyüt */
      }
    }
  </style>`;

  // 'portfolio_4column' sınıfına sahip 'ul' elementini seç
  const ulElement = document.querySelector(".portfolio_4column");

  // Eğer ulElement tanımlanmamışsa, hata verir.
  // Tanımlıysa, devam eder.

  if (ulElement) {
    // Öncelikle içindeki tüm li elementlerini sil
    ulElement.innerHTML = "";

    // Eklemek istediğin resimlerin URL'lerini bir dizi olarak tanımla
    const imageUrls = [
      "https://anatomi.s3.eu-north-1.amazonaws.com/Carglass+Arka+cam+deg%CC%86is%CC%A7imi-01.png",
      "https://anatomi.s3.eu-north-1.amazonaws.com/Carglass+Arka+cam+deg%CC%86is%CC%A7imi-02.png",
      "https://anatomi.s3.eu-north-1.amazonaws.com/Carglass+Arka+cam+deg%CC%86is%CC%A7imi-03.png",
      "https://anatomi.s3.eu-north-1.amazonaws.com/Carglass+Arka+cam+deg%CC%86is%CC%A7imi-04.png",
      "https://anatomi.s3.eu-north-1.amazonaws.com/Carglass+Arka+cam+deg%CC%86is%CC%A7imi-05.png",
      "https://anatomi.s3.eu-north-1.amazonaws.com/Carglass+Arka+cam+deg%CC%86is%CC%A7imi-06.png",
    ];

    // Her bir resim URL'si için bir li ve img elementi oluştur
    imageUrls.forEach((url) => {
      const liElement = document.createElement("li"); // Yeni bir li elementi oluştur
      const imgElement = document.createElement("img"); // Yeni bir img elementi oluştur

      // img elementinin src özelliğini belirle
      imgElement.src = url;

      // img elementine tıklama olayını ekle
      imgElement.addEventListener("click", (event) => {
        event.stopPropagation(); // Tıklanan img dışındaki olayları engelle

        const currentlyEnlarged = document.querySelector(
          ".portfolio_4column img.enlarged"
        );
        if (currentlyEnlarged && currentlyEnlarged !== imgElement) {
          currentlyEnlarged.classList.remove("enlarged");
        }

        imgElement.classList.toggle("enlarged");
      });

      // img elementini li elementinin içine yerleştir
      liElement.appendChild(imgElement);

      // li elementini ul elementinin içine yerleştir
      ulElement.appendChild(liElement);
    });

    // Sayfanın herhangi bir yerine tıklama olayı ekle
    document.addEventListener("click", (event) => {
      const isImageClicked = event.target.tagName.toLowerCase() === "img";

      if (!isImageClicked) {
        const enlargedImages = document.querySelectorAll(
          ".portfolio_4column img.enlarged"
        );
        enlargedImages.forEach((img) => {
          img.classList.remove("enlarged");
        });
      }
    });
  }

  document.querySelector("head").insertAdjacentHTML("beforeend", a_img_style);
}
//ÜRÜN DETAY GÖRSEL DEĞİŞİKLİĞİ UI/UX KODLAMA BÖLÜMÜ SONU



//console.log("version 1.0");
//console.log("version 1.0.1");
//console.log("version 1.0.2");

//İnsan kaynaklarına link eklenmesi ve avantajlarda text değişmi
//console.log("version 1.0.3");

//Metataglerin eklenmesi
//console.log("version 1.0.4");

//Header Footer Düzenleme
//console.log("version 1.0.5");

//Header Footer Revize ve İçeriklerin Eklenmesi
//console.log("version 1.0.6");

//Görsel UI/UX Kodlarının Eklenmesi
console.log("version 1.0.7");

