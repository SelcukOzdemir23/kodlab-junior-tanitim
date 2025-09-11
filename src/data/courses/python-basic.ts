import { Course } from '@/types/course';
import codingFunImage from '@/assets/coding-fun.jpg';

export const pythonBasic: Course = {
  title: 'Python Basic',
  description: '9-12 yaş arası çocuklar için Python programlamaya giriş. Temel kavramlar ve eğlenceli projeler.',
  ageRange: '9-12 yaş',
  duration: '32 hafta',
  level: 'Başlangıç',
  maxStudents: 'Standart:10-15, Premium: En fazla 5',
  features: [
    'Python temelleri',
    'Basit oyunlar yapma',
    'Matematik uygulamaları',
    'Turtle grafikleri',
    'Problem çözme',
    'Yaratıcı projeler',
    'Temel algoritmalar',
    'Eğlenceli öğrenme'
  ],
  curriculum: [
    {
      week: 1,
      title: "Python'a Merhaba",
      topics: ["Python nedir?", "Kod editörü tanıtımı", "İlk 'Merhaba Dünya' programı", "Print fonksiyonu"],
      project: "İsim Yazdırma Programı"
    },
    {
      week: 2,
      title: "Değişkenler ve Sayılar",
      topics: ["Değişken kavramı", "Sayılar ile işlemler", "Input ile veri alma", "Basit hesaplamalar"],
      project: "Yaş Hesaplama Programı"
    },
    {
      week: 3,
      title: "Koşullu İfadeler",
      topics: ["If-else yapısı", "Karşılaştırma", "Basit karar verme", "Çoklu koşullar"],
      project: "Sayı Tahmin Oyunu"
    },
    {
      week: 4,
      title: "Döngüler - For",
      topics: ["For döngüsü", "Tekrarlama", "Sayı dizileri", "Basit desenler"],
      project: "Çarpım Tablosu"
    },
    {
      week: 5,
      title: "Döngüler - While",
      topics: ["While döngüsü", "Koşullu tekrarlama", "Basit oyunlar", "Döngü kontrolü"],
      project: "Şifre Oyunu"
    },
    {
      week: 6,
      title: "Listeler",
      topics: ["Liste oluşturma", "Eleman ekleme", "Liste ile oyunlar", "Basit işlemler"],
      project: "Favori Renkler Listesi"
    },
    {
      week: 7,
      title: "Basit Fonksiyonlar",
      topics: ["Fonksiyon tanımlama", "Basit parametreler", "Return kullanımı", "Kod organizasyonu"],
      project: "Hesap Makinesi"
    },
    {
      week: 8,
      title: "String İşlemleri",
      topics: ["Metin işlemleri", "String birleştirme", "Basit formatlar", "Kelime oyunları"],
      project: "İsim Oyunu"
    },
    {
      week: 9,
      title: "Turtle Grafikleri 1",
      topics: ["Turtle modülü", "Basit çizimler", "Renk kullanımı", "Geometrik şekiller"],
      project: "Renkli Kare Çizimi"
    },
    {
      week: 10,
      title: "Turtle Grafikleri 2",
      topics: ["Karmaşık desenler", "Döngü ile çizim", "Sanat projeleri", "Yaratıcı desenler"],
      project: "Çiçek Deseni"
    },
    {
      week: 11,
      title: "Random Modülü",
      topics: ["Rastgele sayılar", "Şans oyunları", "Random seçimler", "Eğlenceli uygulamalar"],
      project: "Zar Oyunu"
    },
    {
      week: 12,
      title: "Basit Oyunlar 1",
      topics: ["Oyun mantığı", "Kullanıcı etkileşimi", "Skor tutma", "Basit kurallar"],
      project: "Taş Kağıt Makas"
    },
    {
      week: 13,
      title: "Basit Oyunlar 2",
      topics: ["Daha karmaşık oyunlar", "Çoklu seviyeler", "Oyun geliştirme", "Test etme"],
      project: "Kelime Tahmin Oyunu"
    },
    {
      week: 14,
      title: "Matematik Uygulamaları",
      topics: ["Matematik problemleri", "Hesaplama araçları", "Geometri", "Pratik uygulamalar"],
      project: "Matematik Quiz"
    },
    {
      week: 15,
      title: "Kişisel Proje 1",
      topics: ["Proje seçimi", "Planlama", "Kodlama başlangıcı", "Problem çözme"],
      project: "Kişisel Oyun Projesi"
    },
    {
      week: 16,
      title: "Kişisel Proje 2",
      topics: ["Proje tamamlama", "Test etme", "İyileştirme", "Sunum hazırlığı"],
      project: "Final Proje Sunumu"
    }
  ],
  achievements: [
    {
      icon: "🐍",
      title: "Python Temelleri",
      description: "Değişkenler, veri tipleri ve temel syntax'ı öğrenir"
    },
    {
      icon: "🎮",
      title: "Oyun Yapımı",
      description: "Basit ama eğlenceli oyunlar tasarlar ve kodlar"
    },
    {
      icon: "🎨",
      title: "Turtle Sanatçısı",
      description: "Turtle modülü ile renkli desenler ve sanat eserleri oluşturur"
    },
    {
      icon: "🔢",
      title: "Matematik Ustası",
      description: "Matematik problemlerini kod ile çözer"
    },
    {
      icon: "🧩",
      title: "Problem Çözücü",
      description: "Basit problemleri adım adım çözmeyi öğrenir"
    },
    {
      icon: "⚙️",
      title: "Fonksiyon Kullanıcısı",
      description: "Kendi fonksiyonlarını yazabilir ve kullanır"
    },
    {
      icon: "🎯",
      title: "Mantık Geliştirici",
      description: "Algoritmik düşünce ve mantık becerilerini geliştirir"
    },
    {
      icon: "🚀",
      title: "Yaratıcı Kodcu",
      description: "Kendi fikirlerini kod ile hayata geçirir"
    }
  ],
  studentProjects: [
    {
      id: 1,
      title: "Renkli Çiçek Bahçesi",
      student: "Ayşe K.",
      age: 10,
      description: "Turtle ile çizilmiş renkli çiçekler ve bahçe tasarımı",
      githubUrl: "https://github.com/kodlabjr/ayse-flower-garden",
      image: codingFunImage,
      technologies: ["Python", "Turtle", "Colors"]
    },
    {
      id: 2,
      title: "Matematik Oyunu",
      student: "Mehmet A.",
      age: 11,
      description: "4 işlem soruları ile eğlenceli matematik oyunu",
      githubUrl: "https://github.com/kodlabjr/mehmet-math-game",
      image: codingFunImage,
      technologies: ["Python", "Random", "Math"]
    },
    {
      id: 3,
      title: "Hayvan Sesleri Oyunu",
      student: "Zehra B.",
      age: 9,
      description: "Hayvan isimlerini tahmin etme oyunu",
      githubUrl: "https://github.com/kodlabjr/zehra-animal-sounds",
      image: codingFunImage,
      technologies: ["Python", "Lists", "Strings"]
    },
    {
      id: 4,
      title: "Basit Hesap Makinesi",
      student: "Can D.",
      age: 12,
      description: "4 işlem yapabilen renkli hesap makinesi",
      githubUrl: "https://github.com/kodlabjr/can-calculator",
      image: codingFunImage,
      technologies: ["Python", "Functions", "Input"]
    },
    {
      id: 5,
      title: "Şanslı Sayı Oyunu",
      student: "Ela M.",
      age: 10,
      description: "Rastgele sayı üretimi ile şans oyunu",
      githubUrl: "https://github.com/kodlabjr/ela-lucky-numbers",
      image: codingFunImage,
      technologies: ["Python", "Random", "Loops"]
    }
  ],
  testimonials: [
    {
      id: 1,
      parentName: "Fatma Yılmaz",
      location: "İstanbul",
      childName: "Ayşe",
      childAge: 10,
      rating: 5,
      comment: "Kızım Ayşe 10 yaşında ve Python Basic kursu onun için mükemmeldi. Çok karmaşık olmadan, yaşına uygun şekilde programlamayı öğrendi. Turtle ile yaptığı çiçek desenlerini görmek çok gurur vericiydi!",
      course: "Python Basic",
      avatar: "👩‍🏫"
    },
    {
      id: 2,
      parentName: "Ahmet Kaya",
      location: "Ankara",
      childName: "Mehmet",
      childAge: 11,
      rating: 5,
      comment: "Oğlum matematik derslerinde zorlanıyordu. Python Basic kursu sayesinde hem matematik hem de mantık becerilerinde inanılmaz gelişme gösterdi. Artık kendi oyunlarını yapıyor!",
      course: "Python Basic",
      avatar: "👨‍💼"
    },
    {
      id: 3,
      parentName: "Sevgi Demir",
      location: "İzmir",
      childName: "Zehra",
      childAge: 9,
      rating: 5,
      comment: "9 yaşındaki kızım için endişeliydik ama eğitmenler çok sabırlı ve anlayışlı. Zehra artık kendi hayvan oyununu yapmış! Yaşına çok uygun bir müfredat.",
      course: "Python Basic",
      avatar: "👩‍⚕️"
    }
  ]
};