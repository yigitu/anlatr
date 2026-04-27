export default {
  id: 'agentic-ai-nedir',
  title: 'Agentic AI nedir?',
  category: 'Yapay Zeka',
  tags: ['ajan', 'llm'],
  readMin: 5,
  featured: false,
  summary: 'Sadece yanıt vermeyen, hedef belirleyip adım adım eylem alan yapay zeka sistemleri.',
  body: `ChatGPT'ye bir şey sorarsınız, o yanıtlar, konuşma biter. Ancak "ajanik" yapay zeka bu kalıbı kırar: yalnızca yanıtlamaz, **eylem** alır. Bir hedef verilir; hedefi gerçekleştirmek için planlar yapar, araçlar kullanır, sonuçlara göre kendini düzeltir ve iş tamamlanana dek çalışmaya devam eder.

## Sohbet Robotu ile Ajan Arasındaki Fark

Geleneksel bir dil modeli tek bir döngüde çalışır: giriş gelir, çıkış üretilir, biter. Model ne internete bağlanabilir, ne dosya açabilir, ne bir API çağrısı yapabilir. Bilgisi eğitim verisiyle sınırlıdır; o anki konuşmanın dışına çıkamaz.

Ajan bunun ötesine geçer. Siz "İstanbul için yarınki ucuz uçuşu bul ve en iyi seçeneği öner" dersiniz; ajan uçuş arama API'sini çağırır, sonuçları değerlendirir, filtreleri uygular, size özet sunar. Tek bir yanıt yerine bir **iş akışı** tamamlanmış olur.

## Planlama ve Araç Kullanımı

Ajanların merkezinde **araç çağrısı (tool use)** mekanizması bulunur. Model, elindeki araçları — web araması, kod çalıştırma, takvim okuma, e-posta gönderme — bir insan asistanın olanakları gibi kullanır. Her adımdan önce ne yapacağını "düşünür"; bu iç monolog bazı sistemlerde görünür kılınır, bazılarında arka planda kalır.

Planlama için **ReAct** (Reason + Act) çerçevesi yaygındır: model akıl yürütür, eyleme geçer, sonucu gözlemler, tekrar akıl yürütür. Bu döngü hedef tamamlanana ya da model tıkanana kadar sürer.

## Çok Ajanlı Sistemler

Tek bir ajan her işi kaldıramaz; karmaşık görevler için **çok ajanlı (multi-agent)** sistemler devreye girer. Bir yönetici ajan görevi alt parçalara böler ve uzmanlığına göre farklı ajanlara dağıtır: araştırma ajanı web'i tarar, kodlama ajanı kodu yazar, test ajanı çalıştırır, yönetici ajan sonuçları birleştirir.

Gerçek dünyada örnekler hızla çoğalıyor. GitHub Copilot Workspace, bir Issue'dan başlayıp kod değişikliklerini otomatik öneriyor. Devin gibi sistemler bir programlama görevini baştan sona bağımsız tamamlamaya çalışıyor. Seyahat asistanları otel rezervasyonu yapıyor, masa ayırtıyor, takvim güncelliyor.

## Özerk Yapay Zekanın Riskleri

Özerklik güçlüdür, ama denetimsiz güç tehlikelidir. Başlıca riskler şunlardır:

- **Geri alınamaz eylemler:** Ajan e-posta gönderebilir, dosya silebilir, alışveriş yapabilir. Hatalı bir karar anında kalıcı sonuçlar doğurur.
- **Hedef kayması:** Model verilen hedefi farklı yorumlayabilir ve beklenmedik yollar deneyebilir.
- **Güven zinciri:** Ajan başka araçları ve API'leri çağırdığında bu zincirin her halkasına güvenmek gerekir.
- **Maliyet:** Uzun ajan döngüleri hem pahalı hem de yavaş olabilir.

Bu nedenle iyi tasarlanmış ajan sistemleri **insan denetimi (human-in-the-loop)** noktaları içerir: kritik eylemleri onay bekletir, geri alma seçenekleri sunar.

## Sonuç

Ajanik yapay zeka, dil modellerini pasif bilgi havuzlarından aktif iş yapan sistemlere dönüştürüyor. Nasıl çalıştığını ve nerede durduğunu anlamak — hem bu araçları akıllıca kullanmak hem de onlara güvenli sınırlar çizmek için — giderek daha kritik bir beceri haline geliyor.`,
};
