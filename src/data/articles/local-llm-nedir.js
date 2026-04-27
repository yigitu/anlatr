export default {
  id: 'local-llm-nedir',
  title: 'Yerel LLM nedir?',
  category: 'Yapay Zeka',
  tags: ['llm', 'gizlilik'],
  readMin: 5,
  featured: false,
  summary: 'Büyük dil modellerini kendi bilgisayarınızda çalıştırmak. Gizlilik, donanım ve kuantizasyon.',
  body: `Bir dil modeline gizli bir belge, kişisel bir not ya da şirket içi bir soru sormak istediğinizde ne olur? Gönderdiğiniz metin büyük ihtimalle bir şirketin sunucusuna gider, orada işlenir ve muhtemelen eğitim verisi olarak kullanılır. **Yerel LLM**, bu denklemi tersine çevirir: model sizin makinenizde çalışır, hiçbir veri dışarı çıkmaz.

## Neden Gizlilik Önemli?

Büyük dil modelleri güçlüdür, ama bulut tabanlı olanları bir bedel gerektirir: verileriniz. Girdiğiniz içerik servis koşullarına bağlı olarak saklanabilir, incelenebilir ya da model iyileştirmesinde kullanılabilir. Hassas sektörlerde — hukuk, sağlık, finans — bu kabul edilemez bir risktir. Yerel çalışan bir model bu riski sıfırlar.

## Kuantizasyon: Büyük Modeli Küçültmek

Modern dil modelleri onlarca, hatta yüzlerce milyar parametre içerir. Her parametre 32 bitlik bir sayıysa, 70 milyar parametreli bir model yaklaşık 280 GB yer kaplar — standart bir bilgisayarın kapasitesini çok aşar.

**Kuantizasyon**, bu parametreleri daha az bitle temsil etme tekniğidir. 32 bit yerine 4 bit kullanmak model boyutunu sekizde birine indirir. Bu bir kalite-boyut takasdır: küçük bit derinliği bazı nüansların kaybolmasına yol açar — ama pratikte iyi uygulanan 4-bit kuantizasyon, tam boyutlu modele şaşırtıcı ölçüde yakın kalır.

Yaygın formatlar arasında **GGUF** (llama.cpp ailesi için) ve **GPTQ** öne çıkar.

## Ollama ile Pratik Kurulum

Yerel LLM dünyasında en kolay başlangıç noktalarından biri **Ollama**'dır. Tek bir komutla popüler modelleri indirip çalıştırır:

\`ollama run llama3\`

Bu kadar. Llama 3, Mistral, Phi-3, Gemma gibi açık ağırlıklı modeller dakikalar içinde bilgisayarınızda çalışır hale gelir. Ollama aynı zamanda yerel bir API sunucusu başlatır; kendi uygulamalarınızı bu modele bağlayabilirsiniz.

## Donanım Gereksinimleri

Yerel LLM çalıştırmanın iki temel kısıtı vardır: **RAM** ve **GPU belleği (VRAM)**.

- 7 milyar parametreli (7B) 4-bit kuantize bir model yaklaşık 4–6 GB bellek gerektirir; çoğu modern dizüstü bilgisayarda çalışır.
- 13B model için 8–12 GB, 70B model için ise 40 GB ve üzeri VRAM gerekir.
- GPU yoksa model CPU'da da çalışır; ancak çıkış hızı dramatik biçimde düşer.

Apple Silicon (M1/M2/M3) çipler, birleşik bellek mimarisi sayesinde yerel LLM'ler için özellikle verimlidir; GPU ve CPU aynı bellek havuzunu paylaşır.

## Bulut Modellere Karşı Değerlendirme

Yerel modellerin dezavantajları gerçektir: en güçlü açık modeller bile GPT-4o ya da Claude Opus gibi kapalı kaynaklı bulut modellerine henüz yetişemez. Kurulum ve donanım maliyeti var; güncellemeler otomatik gelmiyor.

Ama avantajlar nettir: tam gizlilik, internet bağlantısı gerektirmeme, kullanım başına sıfır maliyet ve verilerinizin nereye gittiğini bilme özgürlüğü.

## Sonuç

Yerel LLM, yapay zekanın "buluta bağlı olmak zorunda" varsayımını kıran bir gelişmedir. Donanım erişilebilir oldukça ve açık ağırlıklı modeller güçlendikçe, kendi makinenizde çalışan bir yapay zekaya sahip olmak giderek daha ulaşılabilir hale geliyor.`,
};
