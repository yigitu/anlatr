export default {
  id: 'mcp-nedir',
  title: 'MCP nedir?',
  category: 'Yapay Zeka',
  tags: ['protokol', 'ajan'],
  readMin: 5,
  featured: false,
  summary: 'Yapay zeka sistemlerini dış araçlara ve veri kaynaklarına bağlayan açık protokol standardı.',
  body: `Yapay zeka asistanınıza şunu soruyorsunuz: "GitHub'daki son açık issue'larımı özetle." Asistan duraksıyor — GitHub'a erişimi yok. "Dosyalarıma bak." — yine yok. "Takvimimdeki toplantıları listele." — hâlâ yok. Bu sorunun adı var: AI, sohbet kutusuna hapsedilmiş. **Model Context Protocol (MCP)**, bu kafesi açmayı hedefliyor.

## Sorun: İzole Yapay Zeka

Dil modelleri güçlüdür, ama çalışma zamanında dış dünyaya erişimleri sınırlıdır. Asıl sorun, modeli dış sistemlere bağlamak için tutarlı bir standart olmamasıdır. Her AI uygulaması kendi özel entegrasyonunu yazar: Slack için ayrı kod, Google Takvim için ayrı, GitHub için ayrı. Yüzlerce entegrasyon, yüzlerce farklı arayüz — bakımı giderek zorlaşan kaotik bir yapı.

## MCP Nedir?

**Model Context Protocol**, Anthropic tarafından 2024 yılında açık kaynak olarak yayınlanan bir protokoldür. Amacı basittir: yapay zeka uygulamaları ile dış veri kaynakları arasında **standart bir iletişim dili** oluşturmak.

Mimari üç bileşenden oluşur:

- **MCP İstemcisi:** Yapay zeka uygulaması (Claude, bir IDE eklentisi, özel bir sohbet botu)
- **MCP Sunucusu:** Belirli bir dış sisteme erişim sağlayan küçük bir program
- **Protokol:** İkisi arasındaki standart mesaj formatı

MCP sunucusu, modele araçlar (tools), kaynaklar (resources) ve komut şablonları (prompts) sunar. Model bir araç kullanmak istediğinde MCP protokolü üzerinden talep gönderir; sunucu ilgili sistemle konuşup sonucu döner.

## MCP Sunucularına Örnekler

MCP'nin gücü, büyüyen ekosisteminde yatar. Bugün kullanılabilir sunucular arasında şunlar sayılabilir:

- **Dosya sistemi:** Yerel dosyaları okuma, yazma, arama
- **GitHub:** Issue açma, PR inceleme, repo içeriğini getirme
- **Google Takvim / Outlook:** Toplantı listeleme, etkinlik oluşturma
- **Veritabanları:** SQL sorgusu çalıştırma, şema keşfetme
- **Web tarayıcı:** Sayfa içeriğini getirme, ekran görüntüsü alma
- **Slack, Jira, Notion:** Mesaj gönderme, kart oluşturma, içerik okuma

Aynı MCP istemcisi, farklı sunucularla konuşarak bu yeteneklerin tamamına aynı anda erişebilir — tek bir standart sayesinde.

## Neden Bu Önemli?

MCP'nin önemi teknik detaylardan değil, **ağ etkisinden** geliyor. Bir sunucu bir kez yazıldığında, o protokolü destekleyen her AI uygulaması onu kullanabilir. Entegrasyon geliştirici sayısı lineer değil, çarpımsal büyüyor.

Kullanıcı perspektifinden bakıldığında: "Asistanım dosyalarımı görebiliyor, takvimine bakabiliyor, GitHub'a erişebiliyor" demek, bir AI aracından gerçekten kişisel ve bağlamsal bir asistana geçiş demek.

## Sonuç

Model Context Protocol, yapay zeka asistanlarını sohbet kutusundan kurtarıp dijital iş akışlarının tam ortasına yerleştirmeyi hedefliyor. Standartlaşma hâlâ erken aşamada; destekleyen uygulama ve sunucu sayısı hızla artıyor. AI'nın araçlara nasıl bağlandığını anlamak, bu teknolojinin nereye gittiğini görmek için kritik bir çerçeve sunuyor.`,
};
