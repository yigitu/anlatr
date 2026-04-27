export default {
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
};
