export default {
  id: 'vpn-nedir',
  title: 'VPN nedir?',
  category: 'Güvenlik',
  tags: ['güvenlik', 'gizlilik'],
  readMin: 5,
  featured: false,
  summary: 'İnternet trafiğini şifreleyerek kimliği ve konumu gizleyen sanal özel ağ.',
  body: `Havalimanı bekleme salonunda, bir kafede ya da otelde halka açık WiFi'ye bağlandığınızda ağ trafiğiniz, o ağı dinleme becerisine sahip herhangi birine potansiyel olarak açık olabilir. Ziyaret ettiğiniz siteler, kullandığınız servisler, şifrelenmemiş ise girdiğiniz bilgiler gözlemlenebilir. **VPN**, bu senaryoda sizi koruyan temel araçlardan biridir.

## VPN Nasıl Çalışır?

VPN (Virtual Private Network — Sanal Özel Ağ), cihazınız ile bir VPN sunucusu arasında şifreli bir tünel oluşturur. Tüm internet trafiğiniz bu tünelden geçer. Dışarıdan bakıldığında gerçek konumunuz değil, yalnızca VPN sunucusunun IP adresi görünür.

Teknik süreç şöyle işler: İnternete erişmek istediğinizde cihazınız paketi VPN istemcisine teslim eder. İstemci bu paketi **şifreler** ve VPN sunucusuna yollar. Sunucu paketi çözer, gerçek hedef adresine iletir. Yanıt geldiğinde aynı yol tersine işler. Bu süreç tüm trafik için gerçek zamanlı yürütülür.

Farklı VPN protokolleri farklı güvenlik ve hız dengelerini hedefler. **OpenVPN** yıllarca standarttı; güvenilir ama yapılandırması karmaşık. **WireGuard** (ayrı bir yazımızda detaylı anlattık) modern kriptografi ve çekirdek düzeyinde hızıyla yeni nesil protokol konumundadır. **IKEv2/IPsec** ise özellikle mobil cihazlarda ağ değişikliklerinde bağlantıyı koruma konusunda güçlüdür.

## VPN Neye Yarar, Neye Yaramaz?

VPN'in gerçekten faydalı olduğu durumlar şunlardır:

- **Güvenli olmayan ağlarda korunma:** Kafede veya havalimanında halka açık WiFi kullanırken trafiğinizi şifreler.
- **Kurumsal ağlara uzaktan erişim:** Ofis dışından şirket kaynaklarına güvenli bağlantı sağlar.
- **Coğrafi kısıtlamaları aşma:** Bulunduğunuz ülkede erişilemeyen içeriklere ulaşmanızı sağlar.
- **ISP izlemesini sınırlama:** İnternet servis sağlayıcınızın trafik profilinizi görmesini engeller.

VPN'in **çözmediği** sorunlar da vardır:

- **Tam anonimlik:** VPN sağlayıcısı IP adresinizi bilir. Kayıt tutuyorsa (log) yasal baskı altında açıklamak zorunda kalabilir.
- **Tarayıcı parmak izi:** Ekran çözünürlüğünüz, yüklü fontlarınız ve tarayıcı eklentileriniz IP olmadan da kimliğinizi ortaya çıkarabilir.
- **Kötü amaçlı yazılım:** VPN cihazınızdaki malware'e karşı bir koruma sağlamaz.
- **Uygulama düzeyi veri toplama:** Kullandığınız uygulamaların kendileri veri topluyorsa VPN bunu engelleyemez.

## Ücretsiz VPN Tuzağı

Ücretsiz VPN hizmetlerinin büyük çoğunluğu kullanıcı verilerini toplayarak üçüncü taraflara satar; bu, tam olarak kaçınmaya çalıştığınız durumla aynıdır. 2017'de yayınlanan akademik bir çalışma, incelenen ücretsiz Android VPN uygulamalarının %38'inin cihaza zararlı yazılım yerleştirdiğini ortaya koymuştur.

Ücretli bir sağlayıcı değerlendirirken dikkat edilmesi gerekenler: **no-log politikası ve bağımsız denetim** (söz yetmez, denetim raporu aranmalı), **yargı bölgesi** (güçlü gizlilik yasaları olan ülkede faaliyet), **açık kaynaklı protokol** kullanımı (WireGuard veya OpenVPN).

## Kurumsal VPN vs. Tüketici VPN

İki farklı kullanım senaryosu mevcuttur. **Kurumsal VPN** (site-to-site veya remote access), çalışanların şirket ağına güvenli erişimini sağlar; IT departmanı tarafından yönetilir ve genellikle cihaz uyumluluğu, kimlik doğrulama gibi katmanlar içerir. **Tüketici VPN** ise bireysel gizlilik ve erişim amacıyla kullanılır; Mullvad, ProtonVPN, NordVPN gibi ticari servisler bu kategoridedir.

## Sonuç

VPN, dijital gizliliğin temel araç setinin bir parçasıdır — ama sihirli bir kalkan değildir. Neyi koruduğunu ve neyi korumadığını anlamak, bilinçli kullanım için zorunludur. Güvenli olmayan ağlarda iyi bir ücretli VPN kullanmak, hiç kullanmamaktan her durumda çok daha iyidir.`,
};
