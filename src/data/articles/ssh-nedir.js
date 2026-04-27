export default {
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
};
