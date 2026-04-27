export default {
  id: 'dns-nedir',
  title: 'DNS nedir?',
  category: 'Ağ',
  tags: ['internet', 'protokol'],
  readMin: 5,
  featured: false,
  summary: 'Alan adlarını IP adreslerine çeviren dağıtık hiyerarşik sistem. İnternetin telefon rehberi.',
  body: `İnternet'te her cihazın bir IP adresi vardır: Google'ın sunucuları \`142.250.74.46\`'da, Cloudflare ise \`1.1.1.1\`'de çalışır. Ama tarayıcıya bu sayıları yazmayız; \`google.com\` yazarız ve sistem gerisi halleder. Bu "gerisi" kısmı **DNS** sisteminin işidir ve günde milyarlarca kez çalışır.

## Alan Adı Sisteminin Yapısı

DNS (Domain Name System — Alan Adı Sistemi), alan adlarını IP adreslerine çeviren dağıtık, hiyerarşik bir veritabanıdır. 1983'te Paul Mockapetris tarafından tasarlanmıştır. Öncesinde tüm internet, merkezi tek bir \`HOSTS.TXT\` dosyasıyla yönetiliyordu; kişisel bilgisayar sayısı birkaç bine ulaştığında bu sistem çöktü. DNS hiyerarşik yapısıyla ölçeklenir ve bugün milyarlarca alan adını yönetir.

Hiyerarşi üç kademeden oluşur. **Kök sunucular (Root),** 13 farklı isme karşılık gelen ve dünya genelinde yüzlerce fiziksel sunucuya dağıtılmış sistemdir. Bir alan adını bilmiyor olsalar bile hangi TLD sunucusunun bildiğini söylerler. **TLD sunucuları** \`.com\`, \`.tr\`, \`.net\` gibi üst düzey alan adlarını yönetir; \`.tr\` için Türkiye'de NIC.TR sorumludur. **Yetkili DNS sunucuları** ise belirli bir alan adının gerçek IP kaydını tutar.

## Bir Sorgunun Yolculuğu

Tarayıcıya \`anla.tr\` yazdığınızda gerçekte ne olur?

1. Tarayıcı önce **yerel önbelleğe (cache)** bakar. Aynı adresi yakın zamanda ziyaret ettiyseniz IP adresini bilir ve doğrudan bağlanır.
2. Önbellekte kayıt yoksa işletim sisteminin çözücüsü (stub resolver) ISP'nin ya da yapılandırdığınız DNS sunucusunun **recursive resolver**'ına sorar.
3. Recursive resolver da bilmiyorsa kök sunuculara gider: "\`.tr\`'yi kim yönetiyor?"
4. Kök sunucu TLD sunucusunu gösterir. Recursive resolver oraya gider.
5. TLD sunucusu yetkili DNS sunucusunu söyler. Recursive resolver son noktaya gider.
6. Yetkili DNS sunucusu IP adresini döner. Resolver yanıtı önbelleğe alır ve tarayıcıya iletir.

Tüm bu süreç genellikle 20–100 milisaniye içinde tamamlanır. TTL (Time to Live) değeri bir kaydın ne kadar süre önbellekte tutulacağını belirler; popüler siteler için bu değer birkaç dakika ile birkaç saat arasında değişir.

## DNS Kayıt Türleri

DNS yalnızca IP adresi çözümlemesi yapmaz. Farklı amaçlara hizmet eden birçok kayıt türü vardır:

- **A kaydı:** Alan adından IPv4 adresine yönlendirme (\`anla.tr → 1.2.3.4\`)
- **AAAA kaydı:** IPv6 adresi için aynı işlev
- **MX kaydı:** Mail sunucusunun adresi; e-posta yönlendirmesi için zorunludur
- **CNAME:** Takma ad — bir alan adını başka bir alan adına yönlendirir
- **TXT kaydı:** Serbest metin; SPF (spam engeli için), DKIM (e-posta imzası) ve site doğrulama için kullanılır
- **NS kaydı:** Alan adını hangi sunucuların yönettiğini gösterir

## Güvenlik ve Gizlilik

DNS, tasarlandığı 1983'ün güven ortamını yansıtır: sorgular şifrelenmez, düz metin olarak ağda akar. İnternet servis sağlayıcınız, ağ yönetiminiz ya da ağda konumlanan bir saldırgan hangi alan adlarını ziyaret ettiğinizi görebilir. Bazı ülkeler siteleri DNS düzeyinde engellemek için ISP'lere bu sorguları kesme ya da yanlış yanıt döndürme yetkisi verir.

**DNS over HTTPS (DoH)** ve **DNS over TLS (DoT)**, bu açığa karşı geliştirilen çözümlerdir. Sorgular şifreli bir kanal üzerinden gider; üçüncü taraflar içeriği okuyamaz. Cloudflare'in \`1.1.1.1\` ve Google'ın \`8.8.8.8\` servisleri bu standartları destekler. Günümüzde Firefox, Chrome ve Edge varsayılan olarak DoH kullanmaktadır.

**DNSSEC** ise kayıtların kriptografik olarak imzalanmasını sağlar; yanıtın gerçekten yetkili sunucudan geldiğini doğrular ve ortada adam saldırılarını önler. Ancak yaygınlaşması yavaş ilerlemiştir.

## Sonuç

DNS, internetin görünmez omurgasıdır. Siz \`youtube.com\` yazarken arka planda çalışan bu sistem olmasa modern internet kullanılamaz hale gelirdi. DNS'i anlamak, ağ sorunlarını gidermekte, internet sansürü mekanizmalarını kavramakta ve gizlilik kararlarını bilinçli almakta sağlam bir temel sağlar.`,
};
