import { Course } from '@/types/course';
import codingFunImage from '@/assets/coding-fun.jpg';

export const pythonIleKodlama: Course = {
  title: 'Python ile Kodlama',
  description: '10-13 yaş arası çocuklar için gerçek programlama diline giriş. Temel algoritmalar ve mantık geliştirme.',
  ageRange: '10-13 yaş',
  duration: '16 hafta',
  level: 'Orta',
  maxStudents: 'Max 4 kişi',
  rating: '4.9',
  reviewCount: '127',
  features: [
    'Gerçek Python programlama',
    'Problem çözme becerileri',
    'Matematik uygulamaları',
    'Mini projeler geliştirme',
    'Algoritma mantığı',
    'Veri yapıları temelleri',
    'İlk portfolio projesi',
    'GitHub kullanımı'
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
      title: "Değişkenler ve Veri Tipleri",
      topics: ["Değişken kavramı", "String, Integer, Float", "Input ile kullanıcıdan veri alma", "Basit hesaplamalar"],
      project: "Yaş Hesaplama Programı"
    },
    {
      week: 3,
      title: "Koşullu İfadeler",
      topics: ["If-else yapısı", "Karşılaştırma operatörleri", "Mantıksal operatörler", "Çoklu koşullar"],
      project: "Sayı Tahmin Oyunu"
    },
    {
      week: 4,
      title: "Döngüler - For",
      topics: ["For döngüsü", "Range fonksiyonu", "Döngü ile tekrarlama", "Liste elemanlarında gezinme"],
      project: "Çarpım Tablosu Programı"
    },
    {
      week: 5,
      title: "Döngüler - While",
      topics: ["While döngüsü", "Sonsuz döngülerden kaçınma", "Break ve continue", "Döngü örnekleri"],
      project: "Şifre Kontrolü Programı"
    },
    {
      week: 6,
      title: "Listeler",
      topics: ["Liste oluşturma", "Liste metodları", "Eleman ekleme/çıkarma", "Liste ile işlemler"],
      project: "Alışveriş Listesi Uygulaması"
    },
    {
      week: 7,
      title: "Fonksiyonlar",
      topics: ["Fonksiyon tanımlama", "Parametre ve argüman", "Return ifadesi", "Local-global değişkenler"],
      project: "Hesap Makinesi Programı"
    },
    {
      week: 8,
      title: "String İşlemleri",
      topics: ["String metodları", "String birleştirme", "String formatlamaları", "String dilim alma"],
      project: "Kelime Oyunu Uygulaması"
    },
    {
      week: 9,
      title: "Hata Yakalama",
      topics: ["Try-except yapısı", "Hata türleri", "Hata mesajları", "Program güvenliği"],
      project: "Güvenli Hesap Makinesi"
    },
    {
      week: 10,
      title: "Dosya İşlemleri",
      topics: ["Dosya okuma", "Dosya yazma", "Dosya ile çalışma", "CSV dosyaları"],
      project: "Not Defteri Uygulaması"
    },
    {
      week: 11,
      title: "Turtle Grafikleri",
      topics: ["Turtle modülü", "Çizim komutları", "Renk ve şekiller", "Geometrik desenler"],
      project: "Renkli Desenler Çizimi"
    },
    {
      week: 12,
      title: "Random ve Math",
      topics: ["Random modülü", "Rastgele sayılar", "Math fonksiyonları", "Matematiksel işlemler"],
      project: "Zar Oyunu Simülasyonu"
    },
    {
      week: 13,
      title: "Sözlükler (Dictionary)",
      topics: ["Sözlük yapısı", "Anahtar-değer çiftleri", "Sözlük metodları", "JSON formatı"],
      project: "Öğrenci Not Sistemi"
    },
    {
      week: 14,
      title: "Proje Geliştirme 1",
      topics: ["Proje planlama", "Kod organizasyonu", "Problem analizi", "Çözüm tasarımı"],
      project: "Mini Quiz Uygulaması"
    },
    {
      week: 15,
      title: "Proje Geliştirme 2",
      topics: ["Proje kodlama", "Test etme", "Hata düzeltme", "İyileştirmeler"],
      project: "Kişisel Portfolio Projesi"
    },
    {
      week: 16,
      title: "Sunum ve GitHub",
      topics: ["Proje sunumu", "GitHub kullanımı", "Kod paylaşımı", "Gelecek adımlar"],
      project: "Final Proje Sunumu"
    }
  ],
  achievements: [
    {
      icon: "🐍",
      title: "Python Temelleri",
      description: "Değişkenler, veri tipleri, operatörler ve temel syntax'ı öğrenir"
    },
    {
      icon: "🔄", 
      title: "Kontrol Yapıları",
      description: "If-else koşulları ve for-while döngülerini kullanabilir"
    },
    {
      icon: "📊",
      title: "Veri Yapıları", 
      description: "Listeler, sözlükler ve string işlemlerinde uzmanlaşır"
    },
    {
      icon: "⚙️",
      title: "Fonksiyonlar",
      description: "Kendi fonksiyonlarını yazabilir ve kod organizasyonu yapar"
    },
    {
      icon: "📁",
      title: "Dosya İşlemleri",
      description: "Dosya okuma/yazma ve veri saklama işlemlerini gerçekleştirir"
    },
    {
      icon: "🎨",
      title: "Grafik Programlama",
      description: "Turtle modülü ile görsel programlar ve desenler oluşturur"
    },
    {
      icon: "🎯",
      title: "Problem Çözme",
      description: "Algoritmic düşünce ile karmaşık problemleri çözer"
    },
    {
      icon: "💻",
      title: "Proje Geliştirme",
      description: "Baştan sona kendi projelerini tasarlar ve kodlar"
    }
  ],
  studentProjects: [
    {
      id: 1,
      title: "Matematik Quiz Oyunu",
      student: "Zeynep A.",
      age: 12,
      description: "4 işlem soruları ile interaktif quiz oyunu",
      githubUrl: "https://github.com/kodlabjr/zeynep-math-quiz",
      image: codingFunImage,
      technologies: ["Python", "Random", "Functions"]
    },
    {
      id: 2,
      title: "Kişisel Not Defteri",
      student: "Ahmet B.",
      age: 11,
      description: "Dosya okuma/yazma ile çalışan not alma uygulaması",
      githubUrl: "https://github.com/kodlabjr/ahmet-notebook",
      image: codingFunImage,
      technologies: ["Python", "File I/O", "Lists"]
    },
    {
      id: 3,
      title: "Sayı Tahmin Oyunu",
      student: "Elif C.",
      age: 13,
      description: "Rastgele sayı tahmin oyunu ile döngü pratiği",
      githubUrl: "https://github.com/kodlabjr/elif-number-game",
      image: codingFunImage,
      technologies: ["Python", "While Loop", "Random"]
    },
    {
      id: 4,
      title: "Basit Hesap Makinesi",
      student: "Mert D.",
      age: 10,
      description: "4 işlem yapabilen fonksiyon tabanlı hesap makinesi",
      githubUrl: "https://github.com/kodlabjr/mert-calculator",
      image: codingFunImage,
      technologies: ["Python", "Functions", "Math"]
    },
    {
      id: 5,
      title: "Kelime Oyunu",
      student: "Selin E.",
      age: 12,
      description: "String işlemleri ile kelime tahmin oyunu",
      githubUrl: "https://github.com/kodlabjr/selin-word-game",
      image: codingFunImage,
      technologies: ["Python", "Strings", "Lists"]
    }
  ],
  testimonials: [
    {
      id: 1,
      parentName: "Elif Kaya",
      location: "İstanbul",
      childName: "Zeynep",
      childAge: 12,
      rating: 5,
      comment: "Kızım Zeynep 3 ay önce hiç programlama bilmiyordu. Şimdi kendi hesap makinesini yapmış! Eğitmenler çok sabırlı ve çocukları motive etmeyi gerçekten biliyor. Online eğitim konusunda endişelerim vardı ama çok profesyonel bir sistem kurmuşlar.",
      course: "Python ile Kodlama",
      avatar: "👩‍💻"
    },
    {
      id: 2,
      parentName: "Murat Demir",
      location: "Ankara",
      childName: "Ahmet",
      childAge: 11,
      rating: 5,
      comment: "Oğlum Ahmet matematik derslerinde zorlanıyordu. Python kursu sayesinde hem matematik hem de mantık becerilerinde inanılmaz gelişme gösterdi. Artık problemleri adım adım çözmeyi öğrendi. KodLab Junior'a çok teşekkür ederiz!",
      course: "Python ile Kodlama",
      avatar: "👨‍💼"
    },
    {
      id: 3,
      parentName: "Ayşe Özkan",
      location: "İzmir",
      childName: "Ege",
      childAge: 10,
      rating: 5,
      comment: "Ege başlangıçta 'zor gelir mi' diye endişeliydik. Ama eğitmenler öyle güzel anlatıyor ki çocuk hevesle dersleri bekliyor. İlk hafta basit bir oyun yapmıştı, şimdi dosya okuyup yazabiliyor. İnanılmaz bir ilerleme!",
      course: "Python ile Kodlama",
      avatar: "👩‍🏫"
    },
    {
      id: 4,
      parentName: "Fatih Yılmaz",
      location: "Bursa",
      childName: "Selin",
      childAge: 13,
      rating: 5,
      comment: "13 yaşındaki kızım için en doğru karar oldu. Hem yaşına uygun hem de çok kapsamlı bir müfredat. Özellikle proje tabanlı öğrenme sistemi harika. Her hafta yeni bir proje yapıyor ve GitHub'da paylaşıyor. Çok memnunuz.",
      course: "Python ile Kodlama",
      avatar: "👨‍🔧"
    },
    {
      id: 5,
      parentName: "Gülseren Arslan",
      location: "Antalya",
      childName: "Burak",
      childAge: 12,
      rating: 5,
      comment: "Uzaktan eğitim olması bizi hiç zorlamadı. Çocuk evinde rahat, ben de yanında olabiliyorum. Eğitmenler çok deneyimli ve sabırlı. Burak'ın özgüveni arttı, artık 'ben de yapabilirim' diyor her konuda. Kesinlikle tavsiye ederim!",
      course: "Python ile Kodlama",
      avatar: "👩‍⚕️"
    },
    {
      id: 6,
      parentName: "Kemal Şahin",
      location: "Adana",
      childName: "Emre",
      childAge: 11,
      rating: 5,
      comment: "Emre kursa başlamadan önce sadece oyun oynuyordu. Şimdi kendi oyunlarını yapıyor! 4 kişilik küçük grup sistemi çok etkili, her çocuğa ayrı ayrı ilgilenebiliyorlar. WhatsApp'tan anlık destek de çok faydalı.",
      course: "Python ile Kodlama",
      avatar: "��‍🚗"
    }
  ]
}; 