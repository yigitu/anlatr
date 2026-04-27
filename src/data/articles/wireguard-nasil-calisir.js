export default {
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
};
