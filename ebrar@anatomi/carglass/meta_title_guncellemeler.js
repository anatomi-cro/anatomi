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