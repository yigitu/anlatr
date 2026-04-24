export const CAT = {
  "Ağ":        { c: "var(--blue)",   bg: "var(--blue-l)"   },
  "Ekonomi":   { c: "var(--amber)",  bg: "var(--amber-l)"  },
  "Güvenlik":  { c: "var(--rose)",   bg: "var(--rose-l)"   },
  "Teknoloji": { c: "var(--purple)", bg: "var(--purple-l)" },
  "Yazılım":   { c: "var(--teal)",   bg: "var(--teal-l)"   },
};

export const CONTENT = [
  {
    id: 'vlan-nedir',
    title: 'VLAN nedir?',
    category: 'Ağ',
    tags: ['networking', 'güvenlik'],
    readMin: 5,
    featured: true,
    summary: 'Fiziksel ağı mantıksal segmentlere bölerek cihazları birbirinden izole eden yapılandırma yöntemi.',
    body: `Bir ofis ağı düşünün: muhasebe ekibi, yazılım geliştiriciler ve ziyaretçi misafirler — hepsi aynı fiziksel switch'e bağlı. Güvenlik açısından bu grupların birbirini görmemesi, hatta birbirinin varlığından haberdar olmaması gerekiyor. Fiziksel çözüm maliyetlidir; her departman için ayrı switch ve yüzlerce metre kablo döşemek hem pahalı hem de yönetimi zordur. VLAN bu sorunu yazılım düzeyinde çözer.

## VLAN'ın Çalışma Mantığı

VLAN (Virtual Local Area Network — Sanal Yerel Ağ), tek bir fiziksel ağ altyapısını birden fazla mantıksal ağa böler. IEEE 802.1Q standardıyla tanımlanan bu teknolojide her ağ paketine, hangi VLAN'a ait olduğunu belirten 12 bitlik bir etiket (tag) eklenir. Switch bu etikete bakarak paketi yalnızca aynı VLAN kimliğine sahip portlara iletir. Farklı VLAN'lardaki cihazlar, aynı fiziksel switch'e bağlı olsalar bile birbirlerini göremez — tıpkı aynı binada farklı katlarda çalışıyorlar gibi.

İki temel port türü vardır. **Access port**, yalnızca tek bir VLAN'a ait olup son kullanıcı cihazlarına (bilgisayar, IP telefon) bağlanır; cihaz VLAN etiketinden haberdar olmaz, switch bu işi sessizce halleder. **Trunk port** ise birden fazla VLAN trafiğini aynı anda taşır ve genellikle switch'leri birbirine ya da sunuculara bağlamak için kullanılır.

## Üç Temel Faydası

**Güvenlik:** Muhasebe departmanının finansal verileri, aynı binada çalışan yazılım ekibinden izole edilir. Bir saldırgan yazılım ağına sızmayı başarsa bile muhasebe VLAN'ına erişemez. Güvenlik politikaları, firewall ile VLAN sınırlarında merkezi olarak uygulanır; her segmentin farklı güvenlik kuralları olabilir.

**Performans:** Ethernet ağlarında yayın (broadcast) trafiği, varsayılan olarak aynı ağdaki tüm cihazlara gönderilir. 500 cihazlı bir ağda bu trafik ciddi bir yük oluşturur. VLAN'lar broadcast domain'leri bölerek bu trafiği sınırlandırır; ARP sorgularından DHCP isteklerine kadar pek çok ağ protokolü broadcast kullandığından, bu trafiği sınırlamak ağ performansını gözle görülür biçimde iyileştirir.

**Yönetilebilirlik:** Bir çalışan farklı bir kata taşındığında, ağ yöneticisinin tek yapması gereken o çalışanın bağlı olduğu switch portunu farklı bir VLAN'a atamaktır. Fiziksel kablo değişikliği gerekmez. Bu esneklik hem zaman kazandırır hem de konfigürasyon hatalarını azaltır.

## Gerçek Dünya Yapılandırması

Orta ölçekli bir şirket ağında tipik VLAN yapısı şöyle görünür:

- **VLAN 10 — Personel:** Şirket bilgisayarları ve yazıcılar; iç kaynaklara tam erişim
- **VLAN 20 — Misafir WiFi:** Ziyaretçiler için yalnızca internet, şirket ağından tamamen izole
- **VLAN 30 — Sunucu:** Dosya sunucuları, veritabanları; yalnızca yetkili kullanıcılar erişebilir
- **VLAN 40 — Yönetim:** Switch ve router yönetim arayüzleri; yalnızca IT ekibine açık
- **VLAN 50 — VoIP:** IP telefon sistemi; ses trafiğinin önceliklendirilmesi (QoS) için ayrı VLAN

Bu yapıda misafir WiFi'ye bağlanan bir kullanıcı, şirket ağındaki hiçbir kaynağa ulaşamaz. Personel bilgisayarları sunuculara erişebilir ancak switch yönetim arayüzlerine giremez. VoIP trafiği diğer verilerden bağımsız önceliklendirildiğinden ses kalitesi düşmez.

VLAN'lar arası iletişim gerektiğinde devreye **Layer 3 switch** ya da **router** girer. "Router on a stick" yapılandırmasında tek bir fiziksel bağlantı üzerinden farklı VLAN'lar birbirleriyle güvenli biçimde haberleşebilir.

## Sonuç

VLAN, modern ağ tasarımının temel taşlarından biridir. Hem küçük ofis kurulumlarında hem de binlerce cihaza sahip kurumsal ağlarda kullanılır. Yazılım tanımlı olduğu için esnekliği yüksek, maliyeti düşük ve son derece etkilidir. Bugün neredeyse tüm kurumsal switch'ler IEEE 802.1Q standardını destekler ve temel bir VLAN yapılandırması birkaç komutla tamamlanabilir.`,
  },

  {
    id: 'wireguard-nasil-calisir',
    title: 'WireGuard nasıl çalışır?',
    category: 'Ağ',
    tags: ['vpn', 'protokol'],
    readMin: 6,
    featured: false,
    summary: '4.000 satır kodla çalışan modern VPN protokolü. Daha az kod, daha az güvenlik açığı.',
    body: `WireGuard, 2016 yılında Jason A. Donenfeld tarafından geliştirilen ve geleneksel VPN protokollerine kıyasla hem daha hızlı hem de çok daha güvenli olduğu kanıtlanmış açık kaynaklı bir VPN protokolüdür. OpenVPN yaklaşık 70.000 satır kod içerirken WireGuard yalnızca 4.000 satırla çalışır. Bu fark rastgele değil; bilinçli bir tasarım kararının sonucudur. Daha az kod, daha küçük saldırı yüzeyi ve daha kolay güvenlik denetimi anlamına gelir.

## Şifreli Tünel Nasıl Kurulur?

WireGuard, her iki uç noktaya (peer) birer anahtar çifti atar: genel anahtar (public key) ve özel anahtar (private key). Bağlantı kurmak isteyen iki cihaz birbirinin genel anahtarlarını önceden paylaşır; bu, e-posta şifrelemesinde kullanılan PGP mantığına benzer. Anahtar herkes tarafından görülebilir ama özel anahtarsız şifreyi kimse çözemez.

Bağlantı sırasında WireGuard anahtar değişimi için **Curve25519** eliptik eğri algoritmasını kullanır. Veri aktarımında ise **ChaCha20-Poly1305** şifreleme algoritması devreye girer. Bu algoritma, AES'e kıyasla donanım hızlandırması olmayan cihazlarda — örneğin akıllı telefonlar ve gömülü sistemler — çok daha hızlı çalışır ve sabit zamanlı işlemler sayesinde yan kanal saldırılarına karşı dayanıklıdır.

## Neden Bu Kadar Hızlı?

WireGuard, Linux çekirdeğinin içinde (kernel space) çalışır. Geleneksel VPN çözümlerinde trafik kullanıcı alanında (user space) işlenir; bu, her paketin çekirdek ile kullanıcı alanı arasında gidip gelmesi anlamına gelir ve gecikme yaratır. WireGuard bu geçişi ortadan kaldırdığı için gecikme değerleri IPsec ve OpenVPN'e kıyasla önemli ölçüde daha düşüktür.

WireGuard **stateless** (durumsuz) bir tasarıma sahiptir. Açık tutulmaya çalışılan uzun oturumlar yerine her bağlantı talep-cevap döngüsüyle başlar ve varsayılan olarak 3 dakika boyunca trafik yoksa tünel sessizce kapanır. **Roaming** desteği sayesinde IP adresi değiştiğinde — WiFi'den 4G'ye geçiş gibi — tünel otomatik olarak yeniden kurulur ve bağlantı kesilmez; bu özellik mobil kullanımda büyük kolaylık sağlar.

## Yapılandırma: Kasıtlı Sadelik

WireGuard yapılandırması bilinçli olarak sade tutulmuştur. Temel bir sunucu-istemci tüneli için yapılması gereken adımlar şunlardır:

- Her iki tarafta anahtar çifti oluşturun: \`wg genkey | tee privatekey | wg pubkey > publickey\`
- Yapılandırma dosyasında (\`/etc/wireguard/wg0.conf\`) karşı tarafın genel anahtarını, uç nokta IP adresini ve izin verilen IP aralıklarını tanımlayın
- Tüneli başlatın: \`wg-quick up wg0\`

OpenVPN'in onlarca yapılandırma seçeneği ve sertifika altyapısına kıyasla bu sadelik hem hata yapma riskini azaltır hem de anlık sorun gidermeyi kolaylaştırır.

## OpenVPN ve IPsec ile Karşılaştırma

**OpenVPN**, on yılların olgunluğuna ve geniş platform desteğine sahiptir. Dezavantajı kod tabanının büyüklüğüdür; bu durum güvenlik denetimini zorlaştırır ve performansı sınırlar.

**IPsec**, standartlara dayalı bir protokol ailesidir ve kurumsal ağlarda yaygın kullanım görür. Yapılandırması karmaşıktır ve farklı uygulamalar arasında uyumluluk sorunları çıkabilir.

**WireGuard** ise denetlenebilir küçük bir kod tabanına, modern kriptografiye ve çekirdek düzeyinde performansa sahiptir. DNS sızıntı koruması ve trafik gizleme gibi özellikler yerleşik olarak gelmez; bunların ayrıca yapılandırılması gerekir. Ayrıca dinamik IP atama için ek araçlara ihtiyaç duyulur.

## Sonuç

WireGuard, VPN alanında gerçek bir paradigma değişiklidir. Linux çekirdeğine 5.6 sürümünde resmi olarak dahil edilmesi, teknolojinin olgunluğunun geniş çapta kabul görmesinin işaretidir. Basit kurulumu, yüksek performansı ve güçlü kriptografisi ile hem bireysel kullanıcılar hem de kurumsal altyapılar için birinci sınıf bir VPN çözümü haline gelmiştir.`,
  },

  {
    id: 'faiz-nedir',
    title: 'Faiz nedir?',
    category: 'Ekonomi',
    tags: ['finans', 'para'],
    readMin: 6,
    featured: false,
    summary: 'Paranın zaman değerinden doğan maliyet. Borç alan öder, borç veren kazanır.',
    body: `100 TL'yi bugün elinizde tutmakla bir yıl sonrasına saklamak arasında gerçek bir ekonomik fark vardır. Bu farkın bedelini ödemek ya da talep etmek için kullandığımız araç **faiz**tir. Kavramın özü bu kadar basittir. Ama üzerine inşa edilen ekonomi, finans ve para politikası son derece karmaşık bir yapıya dönüşmüştür.

## Paranın Zaman Değeri

Paranın zaman değeri (time value of money) ekonominin temel aksiyomlarından biridir. Bugünkü para, gelecekteki aynı miktardan daha değerlidir; çünkü bugün elinizde olan parayı yatırıma dönüştürebilir, üretimde kullanabilir ya da enflasyona karşı koruma amacıyla başka varlıklara çevirebilirsiniz. Bu nedenle birisine para ödünç verdiğinizde, likiditeyi elden çıkarmanın fırsat maliyetini talep edersiniz. İşte bu maliyet faizdir.

Faiz düzeyini belirleyen başlıca etkenler şunlardır: borcun geri ödenme riski (kredi riski), beklenen enflasyon oranı, ödünç süresinin uzunluğu ve ekonomideki genel para arzı. Risk ne kadar yüksekse, faiz de o kadar yüksek olur; uzun vadeli borçlar kısa vadelivkilere kıyasla genellikle daha fazla faiz öder.

## Basit Faiz ve Bileşik Faiz

**Basit faiz**, yalnızca anapara üzerinden hesaplanır. 10.000 TL'yi %10 yıllık faizle ödünç verirseniz, her yıl 1.000 TL kazanırsınız. 5 yılda toplam 5.000 TL faiz geliriyle 15.000 TL'ye ulaşırsınız.

**Bileşik faiz** ise katlanarak büyür. Her dönem sonunda oluşan faiz anaparaya eklenir ve bir sonraki dönem bu yeni toplam üzerinden faiz işlenir. Aynı senaryoyu bileşik faizle ele alalım:

- 1. yıl sonu: 10.000 × 1,10 = 11.000 TL
- 2. yıl sonu: 11.000 × 1,10 = 12.100 TL
- 5. yıl sonu: 10.000 × 1,10⁵ ≈ **16.105 TL**

Fark küçük görünse de zaman uzadıkça dramatik biçimde açılır. Bu büyüme örüntüsünü kavramak için pratik bir kural vardır: **72 Kuralı.** Anaparanın iki katına çıkması için gereken yıl sayısını bulmak üzere 72'yi yıllık faiz oranına bölün. %8 faizde paranız 9 yılda, %12 faizde ise 6 yılda iki katına çıkar.

Aynı bileşik faiz mantığı borçlar için tersine çalışır. Yüksek faizli bir kredi borcunu erken ödemezseniz, bileşik faiz sizi hızla çöken bir sarmalın içine çekebilir.

## Merkez Bankası Faizi ve Ekonomi Üzerindeki Etkisi

Bir ülkenin merkez bankası — Türkiye'de TCMB — piyasalara borç verdiği politika faizini belirler. Bu oran, ticari bankaların birbirlerine ve müşterilerine uyguladıkları faizler için temel referans noktasıdır.

**Faiz düşük olduğunda:** Kredi ucuzlar. Şirketler yatırım yapar, bireyler harcama artırır, ekonomi büyür. Ancak para arzı genişlediğinden enflasyon yükselme riski artar.

**Faiz yüksek olduğunda:** Kredi pahalanır. Yatırım ve tüketim yavaşlar, ekonomik aktivite düşer. Bu enflasyonu baskılamak için bilinçli kullanılan bir araçtır. Merkez bankaları büyüme ile fiyat istikrarı arasında sürekli bir denge kurma çabası içindedir.

## Nominal ve Reel Faiz

Nominal faiz ile gerçek kazancı karıştırmamak kritik önemdedir. Mevduatınız %30 faiz getiriyorsa ancak enflasyon %40 ise **reel faiz** negatiftir: paranız reel değer kaybetmektedir. Tasarruf ve yatırım kararlarını değerlendirirken her zaman **reel faize** (nominal faiz eksi beklenen enflasyon) bakmak gerekir.

## Sonuç

Faiz, modern ekonominin temel koordinat noktasıdır. Fiyat istikrarından yatırım kararlarına, konut kredisi hesaplamalarından devlet borçlanma maliyetlerine kadar hemen her finansal kararı doğrudan etkiler. Bu kavramı anlamak, hem kişisel finans yönetiminde hem de ekonomi haberlerini doğru yorumlamada kritik bir avantaj sağlar.`,
  },

  {
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

DNS, tasarlandığı 1983'ün güven ortamını yansıtır: sorgular şifrelenmez, düz metin olarak ağda akar. İnternet servis sağlayıcınız, ağ yöneticiniz ya da ağda konumlanan bir saldırgan hangi alan adlarını ziyaret ettiğinizi görebilir. Bazı ülkeler siteleri DNS düzeyinde engellemek için ISP'lere bu sorguları kesme ya da yanlış yanıt döndürme yetkisi verir.

**DNS over HTTPS (DoH)** ve **DNS over TLS (DoT)**, bu açığa karşı geliştirilen çözümlerdir. Sorgular şifreli bir kanal üzerinden gider; üçüncü taraflar içeriği okuyamaz. Cloudflare'in \`1.1.1.1\` ve Google'ın \`8.8.8.8\` servisleri bu standartları destekler. Günümüzde Firefox, Chrome ve Edge varsayılan olarak DoH kullanmaktadır.

**DNSSEC** ise kayıtların kriptografik olarak imzalanmasını sağlar; yanıtın gerçekten yetkili sunucudan geldiğini doğrular ve ortada adam saldırılarını önler. Ancak yaygınlaşması yavaş ilerlemiştir.

## Sonuç

DNS, internetin görünmez omurgasıdır. Siz \`youtube.com\` yazarken arka planda çalışan bu sistem olmasa modern internet kullanılamaz hale gelirdi. DNS'i anlamak, ağ sorunlarını gidermekte, internet sansürü mekanizmalarını kavramakta ve gizlilik kararlarını bilinçli almakta sağlam bir temel sağlar.`,
  },

  {
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
  },

  {
    id: 'ssh-nedir',
    title: 'SSH nedir?',
    category: 'Ağ',
    tags: ['terminal', 'protokol'],
    readMin: 6,
    featured: false,
    summary: 'Uzak sunucuya güvenli bağlanmayı sağlayan şifreli terminal protokolü.',
    body: `Bir Linux sunucusu kuruyor ya da uzaktaki bir makineyi yönetiyorsunuz. Sunucu belki bir veri merkezinde, belki bulutta, belki binlerce kilometre uzakta. Fiziksel olarak o odaya girip klavyeye dokunmanız gerekmiyor — **SSH** sayesinde güvenli bir terminal oturumu açabilirsiniz.

## SSH'nin Kısa Tarihi

SSH (Secure Shell), uzak bir bilgisayara şifreli bağlantı üzerinden komut satırı erişimi sağlayan bir protokoldür. 1995 yılında Tatu Ylönen tarafından geliştirilmiştir. Önceki dönemin standardı olan **Telnet**, komutları ve parolaları düz metin olarak ağ üzerinden gönderiyordu; ağı dinleyen herkes bu trafiği okuyabilirdi. Ylönen'in kendi üniversite ağında gerçekleşen bir şifre hırsızlığına bizzat tanıklık etmesi, SSH'yi geliştirmesinin doğrudan nedenidir. Bugün SSH sistem yönetimi, kod dağıtımı, uzak dosya aktarımı (SFTP/SCP) ve güvenli tünel oluşturma gibi pek çok amaç için kullanılmaktadır.

## İki Kimlik Doğrulama Yöntemi

**Parola tabanlı kimlik doğrulama:** En basit yöntemdir. Kullanıcı adı ve parola gönderilir, sunucu doğrular. Kurulumu kolaydır ama brute force saldırılarına karşı savunmasızdır. Fail2ban gibi araçlarla başarısız deneme limiti konulabilse de güçlü alternatiflerin varlığında bu yöntem yetersiz kalır.

**Anahtar çifti tabanlı kimlik doğrulama:** Çok daha güvenli ve tercih edilen yöntemdir. Nasıl çalışır:

1. \`ssh-keygen -t ed25519\` komutuyla iki anahtar oluşturulur: özel anahtar (\`~/.ssh/id_ed25519\`) ve genel anahtar (\`~/.ssh/id_ed25519.pub\`)
2. Genel anahtar sunucuya kopyalanır: \`ssh-copy-id user@server\`
3. Bağlantı sırasında sunucu, yalnızca eşleşen özel anahtarla çözülebilen bir meydan okuma (challenge) gönderir
4. Özel anahtar hiçbir zaman ağ üzerinden gitmez

Bu sistemde özel anahtarınız ele geçirilmedikçe bağlantı kırılamaz. Anahtarınıza güçlü bir **passphrase** ekleyerek cihazınızın çalınması ya da ele geçirilmesi durumuna karşı ek bir koruma katmanı oluşturabilirsiniz.

## Temel Güvenlik Adımları

Varsayılan SSH sunucu yapılandırması güvensizdir. Temel sertleştirme adımları:

- **Parola kimlik doğrulamasını kapat:** \`/etc/ssh/sshd_config\` dosyasında \`PasswordAuthentication no\`
- **Root girişini engelle:** \`PermitRootLogin no\` ile doğrudan root erişimini kapat
- **\`AllowUsers\` ile kısıtla:** Yalnızca belirli kullanıcıların SSH erişimine izin ver
- **Varsayılan portu değiştir:** 22. portu değiştirmek otomatik botların hedef almasını azaltır; ancak bu gerçek bir güvenlik önlemi değil, gürültüyü kısaltma yöntemidir

## Port Yönlendirme ve Tünelleme

SSH'nin az bilinen ama son derece güçlü bir özelliği tünellemedir. **Yerel port yönlendirme** örneği: Uzak bir sunucuda çalışan veritabanına doğrudan dış erişim yoksa \`ssh -L 5432:localhost:5432 user@server\` komutuyla yerel makinenizin 5432 portunu uzak sunucunun 5432 portuna köprülersiniz. Yerel veritabanı istemcinizi \`localhost:5432\`'ye bağladığınızda gerçekte uzaktaki veritabanıyla konuşursunuz.

**SOCKS proxy:** \`ssh -D 1080 user@server\` komutu yerel makinenizde bir SOCKS5 proxy başlatır. Tarayıcınızı bu proxy üzerinden yapılandırdığınızda tüm web trafiği SSH tünelinden geçer — bu, hızlıca oluşturulabilen kaba bir VPN alternatifidir.

## SCP ve SFTP: Güvenli Dosya Aktarımı

SSH sadece terminal değil, dosya aktarımı için de güçlü bir altyapı sunar. **SCP** (Secure Copy), tek bir komutla sunucu ile yerel makine arasında dosya kopyalar: \`scp yerel_dosya user@server:/uzak/yol/\`. **SFTP** ise tam özellikli bir dosya aktarım protokolüdür ve FileZilla gibi grafik arayüzlü istemcilerle rahatlıkla kullanılabilir.

## Sonuç

SSH, sistem yöneticisinin en temel aracıdır. Hem güvenliği hem de esnekliği sayesinde on yıllar içinde internet altyapısının ayrılmaz parçası haline gelmiştir. Anahtar tabanlı kimlik doğrulama ile temel sunucu güvenleştirmesini öğrenmek, uzak sistem yönetiminde güvenli ve profesyonel bir temel oluşturur.`,
  },

  {
    id: 'blockchain-nedir',
    title: 'Blockchain nedir?',
    category: 'Teknoloji',
    tags: ['kripto', 'veri yapısı'],
    readMin: 6,
    featured: false,
    summary: 'Kriptografik bağlantılı, merkezi olmayan ve değiştirilemez dağıtık kayıt sistemi.',
    body: `Geleneksel bir bankayı düşünün: tüm işlemler bankanın kontrolündeki merkezi bir veri tabanında saklanır. Banka hesap kaydını değiştirebilir, yetkililerin talebiyle dondurabilir ya da teorik olarak yeniden yazabilir. **Blockchain**, bu merkezi güven modeline kriptografik bir alternatif sunar: kayıtları değiştirilemez ve dağıtık bir yapıya yayar.

## Zincirin Anatomisi

Blockchain, birbirine kriptografik olarak bağlı veri bloklarından oluşan bir zincirdir. Her blok üç temel bileşen içerir:

1. **İşlem verileri:** O bloğa yazılan bilgiler — Bitcoin'de "A'dan B'ye X bitcoin gibi"
2. **Önceki bloğun hash değeri (previous hash):** Zinciri oluşturan kritik bağlantı
3. **Kendi hash değeri:** Bloğun tüm içeriğinden hesaplanan benzersiz parmak izi

Hash fonksiyonu deterministik ve tek yönlüdür: aynı girdi her zaman aynı çıktıyı verir ama çıktıdan girdiyi elde etmek hesaplama açısından pratikte imkansızdır. SHA-256 gibi algoritmalarda blok içeriğinde tek bir harflik değişiklik bile tamamen farklı bir hash üretir.

Bu tasarım **değiştirilemezliği** matematiksel olarak garantiler. 500. bloğu değiştirirseniz o bloğun hash'i değişir. Bu durum 501. bloğun "önceki hash" alanını geçersiz kılar; 501. bloğu da yeniden hesaplamak gerekir. Bu düzeltme dalgası zincir boyunca basamaklı ilerler ve binlerce bloğun yeniden hesaplanması gerekir; bu işlem muazzam hesaplama gücü gerektirdiğinden pratik olarak gerçekleştirilemez.

## Konsensüs: Kimse Kime Güvenmiyor

Merkezi bir otorite olmadığında binlerce bağımsız katılımcı (node) arasında uzlaşı sağlamak için farklı mekanizmalar geliştirilmiştir.

**Proof of Work (İş İspatı):** Bitcoin'in kullandığı yöntemdir. Yeni blok eklemek için son derece zor bir matematiksel bulmacayı çözmek gerekir; bu işleme **madencilik** denir. Bulmacayı çözmek muazzam miktarda enerji ve hesaplama gücü tüketir. Sistem her zaman en uzun zinciri geçerli kabul eder; ağın %51'inden fazlasını kontrol etmeden zinciri yeniden yazmak ekonomik olarak anlamsız hale gelir.

**Proof of Stake (Hisse İspatı):** Ethereum 2022'de bu sisteme geçmiştir. Blok oluşturmak için hesaplama gücü yerine ağa kilitlenen kripto para miktarı (stake) belirleyicidir. Enerji tüketimi %99,9 azalır. Kötü niyetli davranış "slashing" mekanizmasıyla stake edilen paranın yakılmasıyla cezalandırılır.

## Merkeziyetsizliğin Anlamı

Blockchain'deki her node, zincirin tam bir kopyasını tutar. Binlerce farklı bilgisayarda saklanan özdeş kayıt, tek bir sunucunun çökmesini ya da saldırıya uğramasını anlamsız kılar. Bir node devre dışı kalsa bile ağın geri kalanı kesintisiz devam eder.

Bu yapı, "ağa güvenmek" yerine matematiksel ve kriptografik kanıta güvenmek anlamına gelir. İzne gerek kalmadan katılınabilen, herkese açık ve denetlenebilir bir kayıt sistemi ortaya çıkar. Bunun mümkün olduğunu görmek, özellikle dijital varlıkların sahipliğini merkezi bir kuruluşa ihtiyaç duymaksızın kanıtlamak açısından devrim niteliğindeydi.

## Bitcoin'in Ötesi: Akıllı Sözleşmeler

Ethereum, blockchain'e programlanabilirlik ekledi. **Akıllı sözleşmeler (smart contracts)**, blockchain üzerinde çalışan ve önceden tanımlanmış koşullar karşılandığında otomatik olarak yürütülen kod parçacıklarıdır. Basit bir "A kişisi B kişisine X öderse Z belgesi transfer edilsin" mantığından, merkeziyetsiz borsa (DEX) platformlarına, dijital sanat sahipliği (NFT) sistemlerine ve oy kullanma protokollerine kadar geniş bir kullanım alanı açılmıştır.

Blockchain'in potansiyel uygulama alanları kripto paralarla sınırlı değildir: tedarik zinciri takibi, kimlik doğrulama, sağlık kayıtları yönetimi ve telif hakkı koruması bunlar arasında sayılabilir.

## Sonuç

Blockchain, güven sorununa kriptografik bir çözüm üretir: merkezi otorite gerektirmeden doğrulanabilir, değiştirilemez kayıtlar. Teknolojinin her iddia edilen alanda uygulanabilir olmadığı doğrudur; merkezi bir veritabanının çok daha basit ve verimli olduğu durumlar çoktur. Ama merkezi otoriteye güvenilemediği koşullarda blockchain gerçek ve sağlam bir çözüm sunar.`,
  },

  {
    id: 'tcp-ip-nedir',
    title: 'TCP/IP nedir?',
    category: 'Ağ',
    tags: ['internet', 'protokol'],
    readMin: 5,
    featured: false,
    summary: 'İnternetin temel iletişim kuralı. Verinin nasıl paketlenip güvenilir biçimde iletileceğini tanımlar.',
    body: `Bir arkadaşınıza mesaj attığınızda, YouTube'da video izlediğinizde ya da bu makaleyi okuduğunuzda veriler büyük tek parça halinde değil, küçük **paketler** halinde internet üzerinden yolculuk eder. Bu paketlerin nasıl yönlendirileceğini, kayıpların nasıl telafi edileceğini ve bağlantının nasıl güvenilir kılınacağını tanımlayan kurallar bütünü **TCP/IP** protokol ailesidir.

## İki Protokolün Hikayesi

TCP/IP aslında farklı görevler üstlenen iki ayrı protokoldür ve bu ayrım önemlidir.

**IP (Internet Protocol):** Paketin kaynak ve hedef adresini taşır, yönlendirme kararlarını verir. Tıpkı bir zarfın üzerindeki adres gibi çalışır. IP **güvensizdir** — paketi göndermek için elinden geleni yapar ama teslim garantisi vermez. Paket kaybolabilir, sırası değişebilir, kopyalanabilir. Bu bilinçli bir tasarım kararıdır; basit ve hızlı bir alt katman sağlamak önceliklidir.

**TCP (Transmission Control Protocol):** Güvenilirliği üst katmanda inşa eder. Üç adımlı el sıkışmayla bağlantı kurar (**SYN → SYN-ACK → ACK**), gönderilen her paketi numaralandırır, karşı taraftan onay (acknowledgment) bekler. Onay gelmezse paketi yeniden gönderir. Paketler sıra dışı ulaşırsa sıraya koyarak birleştirir. Bu mekanizmalar TCP bağlantılarını güvenilir kılar; üst katman uygulamalar (tarayıcı, e-posta istemcisi) veri bütünlüğünden emin olabilir.

## Katmanlı Mimari

TCP/IP dört katman olarak modellenir. Her katman bir alttakinin sağladığı servisi kullanır ve bir üstekine servis sunar:

**Uygulama katmanı:** Kullanıcının doğrudan temas ettiği protokoller — HTTP/HTTPS (web taraması), SMTP (e-posta gönderme), DNS (alan adı çözümleme), FTP (dosya aktarımı). Bu katmanda verinin ne anlama geldiği tanımlanır.

**Taşıma katmanı (TCP/UDP):** Uygulama verisini segmentlere böler, port numarasıyla hangi uygulamaya ait olduğunu belirtir. TCP güvenilirliği, UDP ise hızı ön plana alır.

**İnternet katmanı (IP):** Segmentleri paketlere sarar, IP adresleri ekler, yönlendirme kararlarını verir. Paket, kaynak ile hedef arasındaki yüzlerce router'dan geçerken her router yalnızca IP katmanına bakar.

**Ağ erişim katmanı:** Fiziksel iletimi yönetir — Ethernet çerçeveleri, WiFi sinyalleri, fiber optik ışık darbeleri. Bitler fiziksel ortamdan nasıl aktarılır, bu katman tanımlar.

## TCP ile UDP: Doğru Protokolü Seçmek

Her uygulama TCP kullanmak zorunda değildir. **UDP (User Datagram Protocol)**, bağlantı kurmadan ve onay beklenmeksizin paket gönderir. Bu onu çok daha hızlı ama güvensiz kılar.

UDP'nin tercih edildiği durumlar:

- **Video konferans ve VoIP:** Bir çerçeve kaybolursa yeniden göndermek anlamsızdır; görüntü bozulur ama devam eder. Gecikme (latency), kayıptan daha zararlıdır.
- **Çevrimiçi oyunlar:** Anlık pozisyon güncellemeleri milisaniyelerde iletilmelidir; eski bir paketin beklenmesi oynanışı bozar.
- **DNS sorguları:** Küçük, tek seferlik sorgular için TCP'nin üç yönlü el sıkışması gereksiz maliyettir.
- **QUIC protokolü:** Google tarafından geliştirilen ve HTTP/3'ün altında yatan QUIC, UDP üzerine inşa edilmiş güvenilirlik ve şifreleme katmanı ekler; TCP'nin sınırlamalarını aşmayı hedefler.

## IPv4'ten IPv6'ya Geçiş

İnternet bugün iki nesil IP adresi çalıştırmaktadır. **IPv4**, 32 bitlik adres uzayıyla yaklaşık 4,3 milyar benzersiz adres tanımlar. İnternetin bu kadar büyüyeceği öngörülmemişti; 1990'larda adresler tükenmeye başladı. NAT (Network Address Translation) ile tek bir genel IP altında binlerce özel cihaz saklanabilir hale geldi, sorun geçici olarak çözüldü.

**IPv6**, 128 bitlik adresler kullanır ve pratik olarak sonsuz adres uzayı sunar: 2¹²⁸, gözlemlenebilir evrendeki atom sayısından büyük bir rakam. Yavaş ilerleyen geçiş bugün de devam etmektedir; büyük altyapıların çoğu hem IPv4 hem IPv6'yı eş zamanlı çalıştırmaktadır (dual-stack).

## Sonuç

TCP/IP, internetin lingua franca'sıdır. 1970'lerde ARPANET için tasarlanan bu protokol ailesi, bugün milyarlarca cihazı birbirine bağlar. Katmanlı tasarımı — her katmanın yalnızca kendi görevine odaklanması — esnekliğini ve dayanıklılığını açıklar. İnterneti derin biçimde anlamak isteyenlerin başlangıç noktası TCP/IP'dir.`,
  },
];

export const FEATURED = CONTENT.find(c => c.featured) || CONTENT[0];
