(function () {
  const translations = {
    en: {
      "nav.home": "Home",
      "nav.privacy": "Privacy",
      "nav.terms": "Terms",
      "nav.support": "Support",
      "app.name": "Pack My Trip",
      "app.copyright": "© 2026 Pack My Trip",
      "legal.eyebrow": "Legal",
      "legal.updated": "Last updated: May 15, 2026",
      "legal.contact.title": "Contact",
      "legal.contact.link": "Contact support",
      "home.meta.title": "Pack My Trip",
      "home.meta.description": "Pack My Trip helps you create smart packing lists, track packing progress, set reminders, and prepare for every trip locally on your iPhone.",
      "home.eyebrow": "Travel Packing Planner",
      "home.title": "Smart packing lists for every trip.",
      "home.lead": "Create trips, organize suitcase items, track packing progress, and get timely reminders before you leave.",
      "home.privacyCta": "Privacy Policy",
      "home.supportCta": "Get Support",
      "home.preview.progress.title": "Packing Progress",
      "home.preview.progress.body": "11 of 17 items packed",
      "home.preview.reminder.title": "Reminder",
      "home.preview.reminder.body": "Check in online today at 18:00",
      "home.preview.weather.title": "Weather Suggestions",
      "home.preview.weather.body": "Add a rain jacket for Rome",
      "home.feature.lists.title": "Smart packing lists",
      "home.feature.lists.body": "Organize clothing, toiletries, electronics, documents, medicine, accessories, and other essentials by category.",
      "home.feature.magic.title": "Magic Add",
      "home.feature.magic.body": "Type a sentence like “3 shirts, jeans and charger” and turn it into editable packing items.",
      "home.feature.privacy.title": "Local-first privacy",
      "home.feature.privacy.body": "Your trips, suitcase items, and reminders are designed to stay on your iPhone. No account, no ads, no tracking.",
      "privacy.meta.title": "Privacy Policy - Pack My Trip",
      "privacy.meta.description": "Privacy Policy for Pack My Trip.",
      "privacy.title": "Privacy Policy",
      "privacy.overview.title": "Overview",
      "privacy.overview.body": "Pack My Trip is designed as a local-first travel packing app. It helps you save trips, destinations, packing items, reminders, progress, and related settings on your device.",
      "privacy.data.title": "Data We Store",
      "privacy.data.body": "The app may store information you enter, including trip names, destinations, dates, trip types, packing items, reminder details, selected destination display names, and app preferences. This information is stored locally on your device.",
      "privacy.apple.title": "Apple Services",
      "privacy.apple.body": "Destination search and weather suggestions may use Apple MapKit and WeatherKit. These requests are handled through Apple frameworks. We do not operate our own backend for this data.",
      "privacy.sharing.title": "Data Sharing",
      "privacy.sharing.body": "We do not sell your data. Pack My Trip does not require an account, does not show ads, and does not intentionally send your packing records to our servers. If you share, export, or back up information, that action is controlled by you through iOS and Apple services.",
      "privacy.notifications.title": "Notifications",
      "privacy.notifications.body": "If you allow notifications, the app uses local notifications for trip and packing reminders. Notification permission can be changed anytime in iOS Settings.",
      "privacy.contact.body": "For privacy questions, use the support contact below.",
      "terms.meta.title": "Terms of Use - Pack My Trip",
      "terms.meta.description": "Terms of Use for Pack My Trip.",
      "terms.title": "Terms of Use",
      "terms.use.title": "Use of the App",
      "terms.use.body": "Pack My Trip is provided to help organize travel plans, packing lists, reminders, and related notes. You are responsible for the accuracy of the information you enter and how you use it.",
      "terms.weather.title": "Weather and Destination Information",
      "terms.weather.body": "Weather-based suggestions and destination information are provided for convenience only. They may be incomplete, delayed, or unavailable and should not be treated as safety, travel, or weather guarantees.",
      "terms.availability.title": "Availability",
      "terms.availability.body": "We aim to keep the app reliable, but we do not guarantee uninterrupted availability or that every reminder will be delivered in every device state or system configuration.",
      "terms.liability.title": "Limitation of Liability",
      "terms.liability.body": "To the maximum extent permitted by law, Pack My Trip is provided as is, without warranties of any kind. We are not liable for losses caused by reliance on app data, reminders, weather suggestions, or destination information.",
      "terms.contact.body": "For questions about these terms, use the support contact below.",
      "support.meta.title": "Support - Pack My Trip",
      "support.meta.description": "Support for Pack My Trip.",
      "support.eyebrow": "Support",
      "support.title": "Need help?",
      "support.lead": "If you have a question, bug report, or App Store support request, email us and include your device model, iOS version, and a short description of the issue.",
      "support.email.title": "Email support",
      "support.email.link": "aykutssert@gmail.com",
      "support.checks.title": "Common checks",
      "support.checks.body": "For reminders, confirm notification permission is enabled in iOS Settings. Destination search and weather suggestions may require network access and Apple service availability. App data is stored locally on your iPhone.",
      "notFound.meta.title": "Page Not Found - Pack My Trip",
      "notFound.title": "Page not found",
      "notFound.body": "The page you are looking for does not exist.",
      "notFound.cta": "Back to Home"
    },
    tr: {
      "nav.home": "Ana Sayfa",
      "nav.privacy": "Gizlilik",
      "nav.terms": "Şartlar",
      "nav.support": "Destek",
      "app.name": "Bavulum",
      "app.copyright": "© 2026 Bavulum",
      "legal.eyebrow": "Yasal",
      "legal.updated": "Son güncelleme: 15 Mayıs 2026",
      "legal.contact.title": "İletişim",
      "legal.contact.link": "Destek ile iletişime geç",
      "home.meta.title": "Bavulum",
      "home.meta.description": "Bavulum; akıllı valiz listeleri oluşturmanıza, hazırlık ilerlemesini takip etmenize, hatırlatıcılar eklemenize ve her seyahate iPhone'unuzda düzenli hazırlanmanıza yardımcı olur.",
      "home.eyebrow": "Seyahat Valiz Planlayıcı",
      "home.title": "Her seyahat için akıllı valiz listesi.",
      "home.lead": "Seyahat oluşturun, valiz eşyalarınızı düzenleyin, hazırlık ilerlemesini takip edin ve yola çıkmadan önce hatırlatmalar alın.",
      "home.privacyCta": "Gizlilik Politikası",
      "home.supportCta": "Destek Al",
      "home.preview.progress.title": "Valiz Durumu",
      "home.preview.progress.body": "17 eşyadan 11'i hazır",
      "home.preview.reminder.title": "Hatırlatıcı",
      "home.preview.reminder.body": "Bugün 18:00'de online check-in",
      "home.preview.weather.title": "Hava Önerileri",
      "home.preview.weather.body": "Roma için yağmurluk ekleyin",
      "home.feature.lists.title": "Akıllı valiz listeleri",
      "home.feature.lists.body": "Kıyafet, bakım, elektronik, belge, ilaç, aksesuar ve diğer eşyaları kategorilere göre düzenleyin.",
      "home.feature.magic.title": "Sihirli Ekleme",
      "home.feature.magic.body": "“3 tişört, kot pantolon ve şarj aleti” gibi bir cümle yazın, düzenlenebilir valiz eşyalarına dönüştürün.",
      "home.feature.privacy.title": "Yerel öncelikli gizlilik",
      "home.feature.privacy.body": "Seyahatleriniz, valiz eşyalarınız ve hatırlatıcılarınız iPhone'unuzda kalacak şekilde tasarlanır. Hesap yok, reklam yok, takip yok.",
      "privacy.meta.title": "Gizlilik Politikası - Bavulum",
      "privacy.meta.description": "Bavulum gizlilik politikası.",
      "privacy.title": "Gizlilik Politikası",
      "privacy.overview.title": "Genel Bakış",
      "privacy.overview.body": "Bavulum, yerel öncelikli bir seyahat valiz uygulaması olarak tasarlanmıştır. Uygulama; seyahatleri, destinasyonları, valiz eşyalarını, hatırlatıcıları, ilerleme durumunu ve ilgili ayarları cihazınızda saklamanıza yardımcı olur.",
      "privacy.data.title": "Saklanan Veriler",
      "privacy.data.body": "Uygulama; seyahat adı, destinasyon, tarih, seyahat türü, valiz eşyaları, hatırlatıcı detayları, seçilen destinasyon adları ve uygulama tercihleri gibi sizin girdiğiniz bilgileri saklayabilir. Bu bilgiler cihazınızda yerel olarak tutulur.",
      "privacy.apple.title": "Apple Servisleri",
      "privacy.apple.body": "Destinasyon arama ve hava durumu önerileri Apple MapKit ve WeatherKit servislerini kullanabilir. Bu istekler Apple framework'leri üzerinden işlenir. Bu veriler için kendi backend sunucumuzu çalıştırmayız.",
      "privacy.sharing.title": "Veri Paylaşımı",
      "privacy.sharing.body": "Verilerinizi satmayız. Bavulum hesap gerektirmez, reklam göstermez ve valiz kayıtlarınızı bilinçli olarak sunucularımıza göndermez. Bilgi paylaşır, dışa aktarır veya yedeklerseniz bu işlem iOS ve Apple servisleri üzerinden sizin kontrolünüzde gerçekleşir.",
      "privacy.notifications.title": "Bildirimler",
      "privacy.notifications.body": "Bildirimlere izin verirseniz uygulama, seyahat ve valiz hatırlatıcıları için yerel bildirimler kullanır. Bildirim izni iOS Ayarları üzerinden her zaman değiştirilebilir.",
      "privacy.contact.body": "Gizlilik soruları için aşağıdaki destek iletişimini kullanın.",
      "terms.meta.title": "Kullanım Şartları - Bavulum",
      "terms.meta.description": "Bavulum kullanım şartları.",
      "terms.title": "Kullanım Şartları",
      "terms.use.title": "Uygulamanın Kullanımı",
      "terms.use.body": "Bavulum, seyahat planlarını, valiz listelerini, hatırlatıcıları ve ilgili notları düzenlemenize yardımcı olmak için sunulur. Girdiğiniz bilgilerin doğruluğundan ve bunları nasıl kullandığınızdan siz sorumlusunuz.",
      "terms.weather.title": "Hava Durumu ve Destinasyon Bilgisi",
      "terms.weather.body": "Hava durumuna dayalı öneriler ve destinasyon bilgileri yalnızca kolaylık sağlamak içindir. Eksik, gecikmeli veya kullanılamaz olabilir; güvenlik, seyahat veya hava durumu garantisi olarak değerlendirilmemelidir.",
      "terms.availability.title": "Erişilebilirlik",
      "terms.availability.body": "Uygulamanın güvenilir çalışmasını hedefleriz, ancak kesintisiz erişim veya her hatırlatıcının her cihaz durumu ve sistem yapılandırmasında teslim edileceğini garanti etmeyiz.",
      "terms.liability.title": "Sorumluluğun Sınırlandırılması",
      "terms.liability.body": "Yasaların izin verdiği azami ölçüde, Bavulum herhangi bir garanti olmaksızın olduğu gibi sunulur. Uygulama verilerine, hatırlatıcılara, hava durumu önerilerine veya destinasyon bilgilerine güvenilmesinden kaynaklanan kayıplardan sorumlu değiliz.",
      "terms.contact.body": "Bu şartlarla ilgili sorular için aşağıdaki destek iletişimini kullanın.",
      "support.meta.title": "Destek - Bavulum",
      "support.meta.description": "Bavulum destek sayfası.",
      "support.eyebrow": "Destek",
      "support.title": "Yardıma mı ihtiyacınız var?",
      "support.lead": "Bir sorunuz, hata bildiriminiz veya App Store destek talebiniz varsa bize e-posta gönderin; cihaz modelinizi, iOS sürümünüzü ve sorunun kısa açıklamasını ekleyin.",
      "support.email.title": "E-posta desteği",
      "support.email.link": "aykutssert@gmail.com",
      "support.checks.title": "Yaygın kontroller",
      "support.checks.body": "Hatırlatıcılar için iOS Ayarları'nda bildirim izninin açık olduğunu kontrol edin. Destinasyon arama ve hava durumu önerileri internet bağlantısı ve Apple servislerinin erişilebilirliğini gerektirebilir. Uygulama verileri iPhone'unuzda yerel olarak saklanır.",
      "notFound.meta.title": "Sayfa Bulunamadı - Bavulum",
      "notFound.title": "Sayfa bulunamadı",
      "notFound.body": "Aradığınız sayfa mevcut değil.",
      "notFound.cta": "Ana Sayfaya Dön"
    }
  };

  const getStoredLanguage = () => localStorage.getItem("trippack-language");
  const getPreferredLanguage = () => {
    const stored = getStoredLanguage();
    if (stored === "en" || stored === "tr") return stored;
    return navigator.language && navigator.language.toLowerCase().startsWith("tr") ? "tr" : "en";
  };

  const applyLanguage = (language) => {
    const dictionary = translations[language] || translations.en;
    document.documentElement.lang = language;

    document.querySelectorAll("[data-i18n]").forEach((element) => {
      const value = dictionary[element.dataset.i18n];
      if (value) element.textContent = value;
    });

    document.querySelectorAll("[data-i18n-title]").forEach((element) => {
      const value = dictionary[element.dataset.i18nTitle];
      if (value) {
        element.textContent = value;
        document.title = value;
      }
    });

    document.querySelectorAll("[data-i18n-description]").forEach((element) => {
      const value = dictionary[element.dataset.i18nDescription];
      if (value) element.setAttribute("content", value);
    });

    document.querySelectorAll("[data-language-toggle]").forEach((button) => {
      button.textContent = language === "tr" ? "EN" : "TR";
      button.setAttribute("aria-label", language === "tr" ? "Switch to English" : "Türkçe göster");
    });
  };

  let activeLanguage = getPreferredLanguage();
  applyLanguage(activeLanguage);

  document.querySelectorAll("[data-language-toggle]").forEach((button) => {
    button.addEventListener("click", () => {
      activeLanguage = activeLanguage === "tr" ? "en" : "tr";
      localStorage.setItem("trippack-language", activeLanguage);
      applyLanguage(activeLanguage);
    });
  });
})();
