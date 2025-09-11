import { Course } from '@/types/course';
import codingFunImage from '@/assets/coding-fun.jpg';

export const gimp: Course = {
  title: 'GIMP',
  description: '10-16 yaş arası gençler için dijital sanat ve fotoğraf düzenleme. Yaratıcı projeler ve grafik tasarım.',
  ageRange: '10-16 yaş',
  duration: '10 hafta',
  level: 'Başlangıç-Orta',
  maxStudents: 'Max 5 kişi',
  rating: '4.8',
  reviewCount: '87',
  features: [
    'Fotoğraf düzenleme teknikleri',
    'Dijital sanat yaratımı',
    'Grafik tasarım temelleri',
    'Renk teorisi ve uygulaması',
    'Katman yönetimi',
    'Yaratıcı kompozisyon',
    'Logo ve poster tasarımı',
    'Portfolio oluşturma'
  ],
  curriculum: [
    {
      week: 1,
      title: "GIMP'e Merhaba",
      topics: ["GIMP nedir?", "Arayüz tanıtımı", "Temel araçlar", "İlk düzenleme"],
      project: "Basit Fotoğraf Düzeltme"
    },
    {
      week: 2,
      title: "Temel Düzenleme Araçları",
      topics: ["Seçim araçları", "Boyut ayarlama", "Kırpma ve döndürme", "Parlaklık-kontrast"],
      project: "Aile Fotoğrafı Güzelleştirme"
    },
    {
      week: 3,
      title: "Katmanlar ve Seçimler",
      topics: ["Katman kavramı", "Katman türleri", "Seçim teknikleri", "Maskeleme"],
      project: "Çoklu Katmanlı Kompozisyon"
    },
    {
      week: 4,
      title: "Renkler ve Boyama",
      topics: ["Renk teorisi", "Renk düzeltme", "Boyama araçları", "Gradyan kullanımı"],
      project: "Renkli Dijital Çizim"
    },
    {
      week: 5,
      title: "Fotoğraf Düzeltme ve İyileştirme",
      topics: ["Kırmızı göz düzeltme", "Leke temizleme", "Keskinlik ayarı", "Gürültü azaltma"],
      project: "Profesyonel Portre Düzenleme"
    },
    {
      week: 6,
      title: "Filtreler ve Efektler",
      topics: ["Sanatsal filtreler", "Bulanıklık efektleri", "Işık efektleri", "Deformasyon"],
      project: "Fantastik Fotoğraf Sanatı"
    },
    {
      week: 7,
      title: "Metin ve Typography",
      topics: ["Metin ekleme", "Font seçimi", "Metin efektleri", "Typography prensipleri"],
      project: "Motivasyonel Poster"
    },
    {
      week: 8,
      title: "Dijital Çizim ve İllüstrasyon",
      topics: ["Dijital fırçalar", "Çizim teknikleri", "Karakter tasarımı", "İkonlar"],
      project: "Kişisel Avatar/Karakter"
    },
    {
      week: 9,
      title: "Kolaj ve Kompozisyon",
      topics: ["Görsel kompozisyon", "Perspektif", "Işık-gölge", "Surreal sanat"],
      project: "Yaratıcı Kolaj Sanatı"
    },
    {
      week: 10,
      title: "Final Projesi ve Portfolio",
      topics: ["Proje planlama", "Çoklu format export", "Portfolio düzenleme", "Sunum hazırlığı"],
      project: "Kişisel Sanat Portfolyosu"
    }
  ],
  achievements: [
    {
      icon: "📷",
      title: "Fotoğraf Editörü",
      description: "Profesyonel düzeyde fotoğraf düzenleme ve iyileştirme yapar"
    },
    {
      icon: "🎨",
      title: "Dijital Sanatçı",
      description: "Özgün dijital sanat eserleri ve illüstrasyonlar oluşturur"
    },
    {
      icon: "🖌️",
      title: "Grafik Tasarımcısı",
      description: "Logo, poster ve grafik tasarım projelerini gerçekleştirir"
    },
    {
      icon: "🌈",
      title: "Renk Uzmanı",
      description: "Renk teorisini anlayarak etkili renk kompozisyonları yapar"
    },
    {
      icon: "✂️",
      title: "Kompozisyon Ustası",
      description: "Görsel öğeleri etkili şekilde düzenleyerek güçlü kompozisyonlar oluşturur"
    },
    {
      icon: "💫",
      title: "Yaratıcı Düşünür",
      description: "Sanatsal yaratıcılığını dijital araçlarla ifade eder"
    },
    {
      icon: "🖼️",
      title: "Portfolio Sahibi",
      description: "Kendi dijital sanat portfolyosunu oluşturur ve sunar"
    },
    {
      icon: "🎭",
      title: "Görsel İletişimci",
      description: "Fikirlerini ve duygularını görsel sanat ile etkili şekilde aktarır"
    }
  ],
  studentProjects: [
    {
      id: 1,
      title: "Aile Portre Koleksiyonu",
      student: "Ece A.",
      age: 12,
      description: "Aile fotoğraflarını sanatsal efektlerle güzelleştiren koleksiyon",
      githubUrl: "https://gimp-gallery.com/ece-family-portraits",
      image: codingFunImage,
      technologies: ["GIMP", "Photo Editing", "Portrait"]
    },
    {
      id: 2,
      title: "Fantastik Dünya Posteri",
      student: "Kaan B.",
      age: 14,
      description: "Bilim kurgu temalı dijital kolaj ve poster tasarımı",
      githubUrl: "https://gimp-gallery.com/kaan-fantasy-poster",
      image: codingFunImage,
      technologies: ["GIMP", "Digital Art", "Poster Design"]
    },
    {
      id: 3,
      title: "Hayvan Dostları Logosu",
      student: "Ayşe C.",
      age: 13,
      description: "Hayvan barınağı için tasarlanmış renkli logo projesi",
      githubUrl: "https://gimp-gallery.com/ayse-animal-logo",
      image: codingFunImage,
      technologies: ["GIMP", "Logo Design", "Branding"]
    },
    {
      id: 4,
      title: "Dijital Karakter Tasarımı",
      student: "Eren D.",
      age: 15,
      description: "Özgün anime karakteri illüstrasyonu ve karakter sayfası",
      githubUrl: "https://gimp-gallery.com/eren-character-design",
      image: codingFunImage,
      technologies: ["GIMP", "Character Design", "Illustration"]
    },
    {
      id: 5,
      title: "Doğa Fotoğrafçılığı",
      student: "Sude E.",
      age: 11,
      description: "Doğa fotoğraflarının sanatsal düzenlemelerle güçlendirilmesi",
      githubUrl: "https://gimp-gallery.com/sude-nature-photography",
      image: codingFunImage,
      technologies: ["GIMP", "Nature Photography", "Color Grading"]
    }
  ],
  testimonials: [
    {
      id: 1,
      parentName: "Nesrin Yılmaz",
      location: "İstanbul",
      childName: "Ece",
      childAge: 12,
      rating: 5,
      comment: "12 yaşındaki kızım Ece artık aile fotoğraflarımızı düzenliyor! GIMP kursu sayesinde hem sanatsal yaratıcılığı gelişti hem de teknik beceriler kazandı. Artık kendi dijital sanat portfolyosu var. Özgüveni çok arttı!",
      course: "GIMP",
      avatar: "👩‍🎨"
    },
    {
      id: 2,
      parentName: "Mehmet Kaya",
      location: "Ankara",
      childName: "Kaan",
      childAge: 14,
      rating: 5,
      comment: "Oğlum Kaan çok yaratıcı ama bunu ifade etmekte zorlanıyordu. GIMP kursu sayesinde dijital sanat dünyasını keşfetti. Fantastik posteri gerçekten profesyonel görünüyor! Sanat ve tasarım alanına yönelmek istiyor artık.",
      course: "GIMP",
      avatar: "👨‍💻"
    },
    {
      id: 3,
      parentName: "Zeynep Özkan",
      location: "İzmir",
      childName: "Ayşe",
      childAge: 13,
      rating: 5,
      comment: "Kızım hayvan sever ve hayvan barınağı için logo tasarlaması gerçekten anlamlıydı. GIMP öğrenirken sosyal sorumluluk da geliştirdi. Artık 'grafik tasarımcı olmak istiyorum' diyor. Çok değerli bir eğitim!",
      course: "GIMP",
      avatar: "👩‍⚕️"
    },
    {
      id: 4,
      parentName: "Ahmet Arslan",
      location: "Bursa",
      childName: "Eren",
      childAge: 15,
      rating: 5,
      comment: "15 yaşındaki oğlum anime çizmeyi seviyor ama hep kağıt üzerinde yapıyordu. GIMP sayesinde dijital dünyaya geçti. Karakter tasarımları gerçekten etkileyici! Sanat okuluna hazırlanmaya başladı.",
      course: "GIMP",
      avatar: "👨‍🎨"
    },
    {
      id: 5,
      parentName: "Gülden Şahin",
      location: "Antalya",
      childName: "Sude",
      childAge: 11,
      rating: 5,
      comment: "11 yaşında küçük kızım için endişelerim vardı ama GIMP kullanımı çok kolay öğretiliyor. Doğa fotoğrafçılığını çok seviyor, artık çektiği fotoğrafları da düzenliyor. Hem sanat hem teknoloji öğreniyor!",
      course: "GIMP",
      avatar: "👩‍🌾"
    },
    {
      id: 6,
      parentName: "Okan Demir",
      location: "Adana",
      childName: "Bora",
      childAge: 16,
      rating: 5,
      comment: "16 yaşındaki oğlum üniversite hazırlığında ama GIMP kursu hobi olarak başladı. Şimdi freelance tasarım işleri yapıyor! Hem yaratıcılığını geliştirdi hem de küçük bir gelir elde ediyor. Harika bir beceri!",
      course: "GIMP",
      avatar: "��‍💼"
    }
  ]
}; 