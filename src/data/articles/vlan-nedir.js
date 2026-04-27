export default {
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
};
