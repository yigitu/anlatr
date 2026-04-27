export default {
  id: 'docker-nedir',
  title: 'Docker nedir?',
  category: 'Yazılım',
  tags: ['konteyner', 'devops'],
  readMin: 5,
  featured: false,
  summary: 'Yazılımı çalışacağı ortamla birlikte paketleyen konteyner teknolojisi. "Bende çalışıyor" sorununa son.',
  body: `Bir uygulama geliştirdiniz, testleri geçti, her şey mükemmel çalışıyor. Sonra test sunucusuna yüklediniz — çalışmıyor. Prodüksiyona geçtiniz — yine çalışmıyor. Sebebi şu: geliştirici bilgisayarında Python 3.11 var, sunucuda 3.9. Ya da bir kütüphane versiyonu farklı. Ya da işletim sistemi davranışı değişiyor. Yazılım dünyasının klasik çıkmazı: **"bende çalışıyor."**

Docker bu soruna kökten bir çözüm getirir: uygulamayı çalışacağı ortamla birlikte paketlemek.

## Konteyner Nedir?

Konteyner, uygulamanın ihtiyaç duyduğu her şeyi — kütüphaneler, bağımlılıklar, ortam değişkenleri, konfigürasyon dosyaları — bir arada tutan izole bir çalışma ortamıdır. Bir konteyneri başlatırsınız; içinde çalışan uygulama dışarıdaki sistemden habersizdir. Dışarıdaki sistem de konteynerin içindekileri görmez.

Sanal makinelere benzese de konteynerler çok daha hafiftir. Sanal makine işletim sisteminin tamamını sanallaştırır — disk alanı, RAM, önyükleme süresi bunun bedelidir. Konteyner ise ana sistemin çekirdeğini paylaşır ve yalnızca uygulamanın gerçekten ihtiyaç duyduklarını taşır. Bir konteyner saniyeler içinde başlar; sanal makine dakikalar alır.

## İmaj ve Konteyner Farkı

Docker'ın iki temel kavramı vardır: **imaj** ve **konteyner**.

**İmaj**, bir şablondur — okunur, değiştirilemez. İçinde hangi kütüphanelerin olduğunu, hangi dosyaların nerede bulunduğunu, uygulamanın nasıl başlatılacağını tanımlar. Bir imajı kalıp olarak düşünebilirsiniz.

**Konteyner**, o kalıptan üretilen çalışan örnektir. Aynı imajdan istediğiniz kadar konteyner oluşturabilirsiniz; hepsi birbirinden bağımsız çalışır. İmaj değişmez; konteyner içinde yapılan değişiklikler konteyner silindiğinde kaybolur.

## Katmanlar: Depolama Zekası

Docker imajları katmanlar halinde inşa edilir. \`Dockerfile\` adı verilen yapılandırma dosyasındaki her komut bir katman oluşturur:

- Temel işletim sistemi
- Python kurulumu
- Bağımlılıklar (\`pip install -r requirements.txt\`)
- Uygulama kodu kopyalama

Bu katmanlar önbelleğe alınır. Uygulama kodunu değiştirdiğinizde Docker yalnızca son katmanı yeniden oluşturur; Python kurulumu ve bağımlılık katmanları zaten önbellekte olduğundan atlanır. Bu, geliştirme sürecini hızlandırır ve bant genişliğinden tasarruf sağlar.

Aynı temel katmanı paylaşan birden fazla imaj, o katmanı bir kez depolar. 10 farklı uygulama aynı Python imajını temel alıyorsa bu katman diskte yalnızca bir kez bulunur.

## Docker Hub

Docker imajlarını depolamak ve paylaşmak için merkezi bir kayıt defteri vardır: **Docker Hub**. Tıpkı npm veya PyPI gibi — sadece paketler yerine hazır imajlar barındırır.

\`docker pull nginx\` yazarsınız; resmi NGINX imajı saniyeler içinde indirilir. \`docker pull postgres:15\` yazarsınız; belirli versiyondaki PostgreSQL hazırdır. Büyük projelerin neredeyse tamamının resmi imajı Docker Hub'da mevcuttur.

Kendi imajınızı da yayınlayabilirsiniz. Ekibiniz \`docker pull sirketiniz/uygulamaniz:v2\` komutuyla aynı ortamı anında edinir — kurulum kılavuzu, bağımlılık derdi olmadan.

## Sonuç

Docker, yazılım geliştirme ve dağıtım süreçlerinde paradigma değiştiren bir araçtır. "Bende çalışıyor" sorununu ortadan kaldırır; geliştirici bilgisayarında çalışan uygulama test ve üretim ortamında da aynı şekilde çalışır. Katman tabanlı imaj sistemi depolama ve dağıtımı verimli kılar; Docker Hub ise ekosistemi herkese açık hale getirir. Bugün mikroservis mimarileri, CI/CD boru hatları ve bulut altyapılarının büyük çoğunluğu Docker veya benzer konteyner teknolojileri üzerine kuruludur.`,
};
