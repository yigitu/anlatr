export const CAT = {
  "Ağ":        { c: "var(--blue)",   bg: "var(--blue-l)"   },
  "Ekonomi":   { c: "var(--amber)",  bg: "var(--amber-l)"  },
  "Güvenlik":  { c: "var(--rose)",   bg: "var(--rose-l)"   },
  "Teknoloji": { c: "var(--purple)", bg: "var(--purple-l)" },
  "Yazılım":   { c: "var(--teal)",   bg: "var(--teal-l)"   },
};

export const CONTENT = [
  {
    id: 'vlan-nedir', title: 'VLAN nedir?', category: 'Ağ',
    tags: ['networking', 'güvenlik'], readMin: 3, featured: true,
    summary: 'Fiziksel ağı mantıksal segmentlere bölerek cihazları birbirinden izole eden yapılandırma yöntemi.',
    body: `Bir ofisi düşün. Muhasebe, yazılım ekibi ve misafir ağı aynı switch'e bağlı. Ama güvenlik açısından bu üç grubun birbirini görmemesi gerekiyor.

**VLAN tam burada devreye girer.**

VLAN (Virtual Local Area Network), tek bir fiziksel ağı birden fazla mantıksal ağa böler. Aynı switch'e bağlı cihazlar farklı VLAN'lara atanabilir ve birbirlerine erişemezler.

**Nasıl çalışır?**

Her ağ paketine bir VLAN etiketi (tag) eklenir. Switch bu etikete bakarak paketi doğru gruba yönlendirir.

**Ne işe yarar?**

- Güvenlik: Muhasebe verileri yazılım ekibinden izole edilir
- Performans: Broadcast trafiği sadece ilgili VLAN içinde kalır
- Yönetilebilirlik: Fiziksel kablo değişikliği olmadan ağ yeniden düzenlenir`,
  },
  {
    id: 'wireguard-nasil-calisir', title: 'WireGuard nasıl çalışır?', category: 'Ağ',
    tags: ['vpn', 'protokol'], readMin: 4, featured: false,
    summary: '4.000 satır kodla çalışan modern VPN protokolü. Daha az kod, daha az güvenlik açığı.',
    body: `OpenVPN 70.000 satır kod içerirken WireGuard sadece yaklaşık 4.000 satırla çalışır. Daha az kod, daha az güvenlik açığı.

**Çalışma mantığı**

WireGuard şifreli bir tünel oluşturur. İki uç nokta birbirini public key ile tanır.

**Neden hızlı?**

WireGuard Linux çekirdeğinin içinde (kernel space) çalışır. Çok daha az gecikme.

**Kurulum**

Anahtar çifti oluşturulur. Public key'ler paylaşılır. IP'ler tanımlanır. Bitti.`,
  },
  {
    id: 'faiz-nedir', title: 'Faiz nedir?', category: 'Ekonomi',
    tags: ['finans', 'para'], readMin: 3, featured: false,
    summary: 'Paranın zaman değerinden doğan maliyet. Borç alan öder, borç veren kazanır.',
    body: `100 TL'nin bugün verilmesiyle 1 yıl sonra verilmesi aynı şey değildir. Bu fırsatın karşılığına faiz denir.

**İki taraf**

Borç alan için faiz, parayı kullanmanın maliyetidir. Borç veren için parayı elden çıkarmanın karşılığıdır.

**Türleri**

Basit faiz: Anapara × Oran × Süre.

Bileşik faiz: Her dönem faiz anaparaya eklenir. Üstel büyüme yaratır.

**Merkez bankası faizi**

Bu oran düşükse kredi ucuzlar, piyasaya para girer. Yüksekse ekonomi yavaşlar, enflasyon baskılanır.`,
  },
  {
    id: 'dns-nedir', title: 'DNS nedir?', category: 'Ağ',
    tags: ['internet', 'protokol'], readMin: 3, featured: false,
    summary: 'Alan adlarını IP adreslerine çeviren dağıtık hiyerarşik sistem. İnternetin telefon rehberi.',
    body: `Her cihazın IP adresi var. Biz google.com yazarız. Bu çeviriyi DNS yapar.

**Nasıl çalışır?**

google.com → önbellek → DNS sunucusu → root → TLD → yetkili DNS. Milisaniyeler içinde.

**Neden önemli?**

DNS değiştirilirse siteye erişemezsin. Bazı ülkeler sitelerini DNS üzerinden engeller.

**Güvenlik**

Varsayılan DNS sağlayıcındır. Cloudflare (1.1.1.1) daha gizli bir alternatiftir.`,
  },
  {
    id: 'vpn-nedir', title: 'VPN nedir?', category: 'Güvenlik',
    tags: ['güvenlik', 'gizlilik'], readMin: 3, featured: false,
    summary: 'İnternet trafiğini şifreleyerek kimliği ve konumu gizleyen sanal özel ağ.',
    body: `Kafede halka açık WiFi'deyken biri trafiğini dinleyebilir. VPN bunu engeller.

**Ne yapar?**

Tüm trafik VPN sunucusu üzerinden geçer. Dışarıdan VPN sunucusunun adresi görünür.

**Ne zaman?**

- Güvenli olmayan ağlarda gizlilik
- Coğrafi kısıtlamaları aşmak
- Kurumsal ağa uzaktan bağlanmak

**Sınırlamalar**

Anonimlik garantisi vermez. Sağlayıcı log tutuyorsa verilerine erişilebilir.`,
  },
  {
    id: 'ssh-nedir', title: 'SSH nedir?', category: 'Ağ',
    tags: ['terminal', 'protokol'], readMin: 4, featured: false,
    summary: 'Uzak sunucuya güvenli bağlanmayı sağlayan şifreli terminal protokolü.',
    body: `Sunucunu fiziksel olarak karşında olmadan yönetmek istiyorsun. SSH bunun için.

**İki yöntem**

Şifre ile: Kullanıcı adı + şifre. Brute force'a açık.

Anahtar çifti: Özel anahtar sende, genel anahtar sunucuda. Daha güvenli.

**Neden şifreli?**

SSH'den önce Telnet vardı — düz metin. SSH her şeyi şifreler.

**Tünel**

Port yönlendirme ile güvenli olmayan ağlarda tünel görevi görür.`,
  },
  {
    id: 'blockchain-nedir', title: 'Blockchain nedir?', category: 'Teknoloji',
    tags: ['kripto', 'veri yapısı'], readMin: 4, featured: false,
    summary: 'Kriptografik bağlantılı, merkezi olmayan ve değiştirilemez dağıtık kayıt sistemi.',
    body: `Geleneksel bankada kayıtlar bankanın kontrolündedir. Blockchain'de binlerce bilgisayarda tutulur.

**Mantık**

Her blok öncekinin hash'ini içerir. Bir bloku değiştirirsen zincir bozulur.

**Merkeziyetsizlik**

Binlerce node aynı kopyayı tutar. Tek nokta çökmesi sistemi etkilemez.

**Uygulamalar**

Bitcoin, Ethereum. Ayrıca tedarik zinciri, kimlik doğrulama gibi alanlarda kullanılır.`,
  },
  {
    id: 'tcp-ip-nedir', title: 'TCP/IP nedir?', category: 'Ağ',
    tags: ['internet', 'protokol'], readMin: 3, featured: false,
    summary: 'İnternetin temel iletişim kuralı. Verinin nasıl paketlenip güvenilir biçimde iletileceğini tanımlar.',
    body: `Mesaj tek parça gitmez. Küçük parçalara (paket) bölünür, farklı yollardan gider, birleştirilir.

**İki katman**

IP: Paketin nereye gideceğini belirler.

TCP: Güvenilir iletimleri sağlar. Kayıp varsa tekrar gönderir.

**UDP ne zaman?**

Video görüşmesinde hız önceliklidir. UDP daha hızlı ama kayıplara toleranslıdır.`,
  },
];

export const FEATURED = CONTENT.find(c => c.featured) || CONTENT[0];
