export default {
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
};
