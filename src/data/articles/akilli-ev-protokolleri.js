export default {
  id: 'akilli-ev-protokolleri',
  title: 'Zigbee, Thread ve Matter nedir?',
  category: 'Teknoloji',
  tags: ['iot', 'akıllı ev'],
  readMin: 6,
  featured: false,
  summary: 'Akıllı ev cihazlarının birbiriyle konuştuğu protokoller ve dil savaşını bitirme denemesi: Matter.',
  body: `Akıllı evinizin ampulü Philips'ten, termostatı Nest'ten, kilidi Yale'den. Hepsi "akıllı", hepsi internete bağlı — ama birbirleriyle konuşamazlar. Her birinin kendi uygulaması, kendi bulutu, kendi dili var. Akıllı ev dünyası yıllarca bu dil savaşının içinde yaşadı. Savaşı anlamak için önce protokolleri anlamak gerekiyor.

## Zigbee: Mesh Ağın Öncüsü

**Zigbee**, 2003'te standartlaştırılmış, düşük güç tüketimli bir kablosuz protokoldür. Temel özelliği **mesh (örgü) ağ** yapısıdır: her Zigbee cihazı hem son nokta hem de sinyal aktarıcı olabilir. Ampulünüz, diğer ampulün sinyalini iletir; bu sayede menzil duvarlarla zayıflamaz, ağ büyüdükçe kapsama alanı genişler.

Zigbee 2,4 GHz bandında çalışır ve pil ömrü yıllarca sürebilir. Dezavantajı: her üreticinin Zigbee'yi kendi biçiminde uygulaması nedeniyle uyumluluk sorunları çıkabilir. "Zigbee destekli" her cihaz her hub ile konuşamayabilir.

## Thread: IPv6 ile Gelen Modernite

**Thread**, 2014'te Google'ın da içinde olduğu bir konsorsiyum tarafından geliştirilen protokoldür. Zigbee gibi mesh yapıya sahiptir, ama temelinde **IPv6** kullanır; bu, her cihazın doğrudan IP adresi alması demektir.

Thread'in kritik avantajı bulut gerektirmemesidir: cihazlar yerel ağda doğrudan birbirleriyle konuşabilir. Bir düğüm devre dışı kalırsa ağ kendini otomatik yeniden yapılandırır. Apple'ın HomePod ve Apple TV cihazları Thread border router olarak çalışabilir; Google ve Amazon ekosistemlerinde de Thread desteği giderek yaygınlaşıyor.

## Matter: Savaşı Bitirme Denemesi

**Matter**, 2022 yılında Apple, Google, Amazon ve Samsung'un — aralarındaki rekabeti bir kenara bırakıp — birlikte standartlaştırdığı uygulama katmanı protokolüdür. Önemli bir nüans: Matter bir radyo protokolü değil, **üst katman bir standarttır**. Altta WiFi, Thread ya da Ethernet kullanabilir.

Matter'ın vaadi şudur: Matter sertifikalı bir ampul, Matter destekleyen herhangi bir ekosistemle çalışır. Apple Home, Google Home, Amazon Alexa — tek cihaz, tüm platformlar. Uygulama sayısı değil, platform uyumu belirleyicidir.

Teknik olarak Matter yerel ağ üzerinden çalışır; bulut bağlantısı olmadan temel işlevler çalışmaya devam eder. Bu hem gizlilik hem de güvenilirlik açısından önemlidir.

## Savaş Gerçekten Bitti mi?

Kısa yanıt: hayır, henüz değil.

Matter'ın benimsenmesi yavaş ilerliyor. Milyonlarca eski cihaz Matter desteklemiyor ve desteklemeyecek. Üreticiler güncellemeleri yavaş çıkarıyor ya da hiç çıkarmıyor. Bazı özellikler — enerji izleme, kamera akışı, karmaşık otomasyon — henüz Matter kapsamına tam girmedi.

Öte yandan momentum gerçek: büyük platformlar Matter'ı ciddi alıyor, yeni cihazların büyük çoğunluğu Thread ve Matter desteğiyle piyasaya çıkıyor. Sektör doğru yönde ilerliyor.

## Sonuç

Zigbee ve Thread fiziksel katmanda güvenilir, düşük güç tüketimli mesh ağlar sunar. Matter ise üst katmanda bu parçaları birleştirip ortak bir dil oluşturmayı hedefler. Akıllı ev henüz gerçekten akıllı değil — ama protokol savaşını anlamak, hangi cihazlara yatırım yapacağınızı ve hangi ekosisteme güveneceğinizi bilinçli seçmenizi sağlar.`,
};
