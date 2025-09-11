import { Course } from '@/types/course';
import codingFunImage from '@/assets/coding-fun.jpg';

export const pythonPro: Course = {
  title: 'Python Pro',
  description: '13-17 yaş arası gençler için ileri seviye Python programlama. Karmaşık projeler ve algoritmalar.',
  ageRange: '13-17 yaş',
  duration: '32 hafta',
  level: 'İleri',
  maxStudents: 'Standart:10-15, Premium: En fazla 5',
  features: [
    'İleri seviye Python',
    'Veri yapıları ve algoritmalar',
    'Nesne yönelimli programlama',
    'Veritabanı işlemleri',
    'Web scraping',
    'API kullanımı',
    'Büyük projeler',
    'GitHub portfolio'
  ],
  curriculum: [
    {
      week: 1,
      title: "Python Temelleri Tekrarı",
      topics: ["Python syntax review", "Veri tipleri", "Kontrol yapıları", "Fonksiyonlar"],
      project: "Gelişmiş Hesap Makinesi"
    },
    {
      week: 2,
      title: "İleri Veri Yapıları",
      topics: ["Tuple ve Set", "Dictionary işlemleri", "List comprehension", "Nested structures"],
      project: "Öğrenci Yönetim Sistemi"
    },
    {
      week: 3,
      title: "Dosya İşlemleri ve JSON",
      topics: ["Dosya okuma/yazma", "JSON formatı", "CSV işlemleri", "Veri saklama"],
      project: "Kişisel Finans Takipçisi"
    },
    {
      week: 4,
      title: "Hata Yönetimi",
      topics: ["Try-except-finally", "Custom exceptions", "Debugging", "Logging"],
      project: "Güvenli Veri İşleyici"
    },
    {
      week: 5,
      title: "Modüller ve Paketler",
      topics: ["Import sistemi", "Kendi modüllerini oluşturma", "Paket yönetimi", "Virtual environment"],
      project: "Kişisel Kütüphane Projesi"
    },
    {
      week: 6,
      title: "Nesne Yönelimli Programlama 1",
      topics: ["Class ve Object", "Constructor", "Instance variables", "Methods"],
      project: "Araba Simülasyon Sistemi"
    },
    {
      week: 7,
      title: "Nesne Yönelimli Programlama 2",
      topics: ["Inheritance", "Polymorphism", "Encapsulation", "Abstract classes"],
      project: "Hayvanat Bahçesi Yönetimi"
    },
    {
      week: 8,
      title: "Algoritmalar 1",
      topics: ["Sorting algorithms", "Searching algorithms", "Big O notation", "Algorithm analysis"],
      project: "Algoritma Karşılaştırma Aracı"
    },
    {
      week: 9,
      title: "Algoritmalar 2",
      topics: ["Recursion", "Dynamic programming", "Graph algorithms", "Tree structures"],
      project: "Labirent Çözücü"
    },
    {
      week: 10,
      title: "Veritabanı İşlemleri",
      topics: ["SQLite", "Database design", "CRUD operations", "SQL queries"],
      project: "Kişisel Blog Sistemi"
    },
    {
      week: 11,
      title: "Web Scraping",
      topics: ["Requests library", "BeautifulSoup", "HTML parsing", "Data extraction"],
      project: "Haber Toplama Botu"
    },
    {
      week: 12,
      title: "API Kullanımı",
      topics: ["REST API", "HTTP requests", "JSON parsing", "API authentication"],
      project: "Hava Durumu Uygulaması"
    },
    {
      week: 13,
      title: "GUI Programlama",
      topics: ["Tkinter", "Event handling", "Widgets", "Layout management"],
      project: "Masaüstü Todo Uygulaması"
    },
    {
      week: 14,
      title: "Veri Analizi Temelleri",
      topics: ["Pandas basics", "Data manipulation", "CSV analysis", "Basic statistics"],
      project: "Okul Notları Analiz Sistemi"
    },
    {
      week: 15,
      title: "Final Proje Geliştirme 1",
      topics: ["Proje planlama", "Architecture design", "Development başlangıcı", "Version control"],
      project: "Kapsamlı Final Projesi - Geliştirme"
    },
    {
      week: 16,
      title: "Final Proje Geliştirme 2",
      topics: ["Proje tamamlama", "Testing", "Documentation", "Deployment"],
      project: "Final Proje Sunumu ve GitHub Portfolio"
    }
  ],
  achievements: [
    {
      icon: "🐍",
      title: "Python Uzmanı",
      description: "İleri seviye Python programlama becerilerine sahip olur"
    },
    {
      icon: "🏗️",
      title: "Nesne Yönelimli Programcı",
      description: "OOP prensiplerini kullanarak karmaşık sistemler tasarlar"
    },
    {
      icon: "📊",
      title: "Veri Yapıları Uzmanı",
      description: "Algoritmalar ve veri yapılarını etkin şekilde kullanır"
    },
    {
      icon: "🗄️",
      title: "Veritabanı Geliştiricisi",
      description: "Veritabanı tasarımı ve SQL sorguları yazabilir"
    },
    {
      icon: "🌐",
      title: "Web Scraper",
      description: "Web sitelerinden veri çekme ve API kullanımında uzmanlaşır"
    },
    {
      icon: "🖥️",
      title: "GUI Geliştirici",
      description: "Masaüstü uygulamaları tasarlar ve geliştirir"
    },
    {
      icon: "📈",
      title: "Veri Analisti",
      description: "Veri analizi ve görselleştirme becerilerini geliştirir"
    },
    {
      icon: "🚀",
      title: "Proje Lideri",
      description: "Büyük projeleri baştan sona yönetir ve geliştirir"
    }
  ],
  studentProjects: [
    {
      id: 1,
      title: "E-Ticaret Yönetim Sistemi",
      student: "Berkay M.",
      age: 16,
      description: "Ürün yönetimi, stok takibi ve satış raporları içeren kapsamlı sistem",
      githubUrl: "https://github.com/kodlabjr/berkay-ecommerce-system",
      image: codingFunImage,
      technologies: ["Python", "SQLite", "Tkinter", "OOP"]
    },
    {
      id: 2,
      title: "Haber Analiz Botu",
      student: "Sude K.",
      age: 15,
      description: "Web scraping ile haber toplama ve sentiment analizi yapan bot",
      githubUrl: "https://github.com/kodlabjr/sude-news-analyzer",
      image: codingFunImage,
      technologies: ["Python", "BeautifulSoup", "Pandas", "API"]
    },
    {
      id: 3,
      title: "Kişisel Finans Takipçisi",
      student: "Arda T.",
      age: 17,
      description: "Gelir-gider takibi, bütçe planlama ve grafik raporlar",
      githubUrl: "https://github.com/kodlabjr/arda-finance-tracker",
      image: codingFunImage,
      technologies: ["Python", "SQLite", "Matplotlib", "GUI"]
    },
    {
      id: 4,
      title: "Okul Yönetim Sistemi",
      student: "Elif N.",
      age: 14,
      description: "Öğrenci kayıt, not girişi ve rapor oluşturma sistemi",
      githubUrl: "https://github.com/kodlabjr/elif-school-management",
      image: codingFunImage,
      technologies: ["Python", "Database", "OOP", "JSON"]
    },
    {
      id: 5,
      title: "Sosyal Medya Analiz Aracı",
      student: "Kerem S.",
      age: 16,
      description: "API kullanarak sosyal medya verilerini analiz eden araç",
      githubUrl: "https://github.com/kodlabjr/kerem-social-analyzer",
      image: codingFunImage,
      technologies: ["Python", "API", "Data Analysis", "Visualization"]
    }
  ],
  testimonials: [
    {
      id: 1,
      parentName: "Mehmet Özkan",
      location: "İstanbul",
      childName: "Berkay",
      childAge: 16,
      rating: 5,
      comment: "16 yaşındaki oğlum Berkay için Python Pro kursu mükemmeldi. Artık gerçek yazılım projeleri geliştiriyor ve üniversite için harika bir portfolyosu var. Eğitmenler çok profesyonel ve sektör deneyimli.",
      course: "Python Pro",
      avatar: "👨💼"
    },
    {
      id: 2,
      parentName: "Ayşe Kılıç",
      location: "Ankara",
      childName: "Sude",
      childAge: 15,
      rating: 5,
      comment: "Kızım Sude'nin teknik becerilerindeki gelişim inanılmaz. Web scraping ve veri analizi gibi ileri konuları öğrendi. Artık kendi projelerini GitHub'da paylaşıyor. Gerçekten kaliteli bir eğitim.",
      course: "Python Pro",
      avatar: "👩🏫"
    },
    {
      id: 3,
      parentName: "Fatih Tekin",
      location: "İzmir",
      childName: "Arda",
      childAge: 17,
      rating: 5,
      comment: "Arda lise son sınıf ve bu kurs sayesinde yazılım mühendisliği bölümüne çok güçlü bir portfolyo ile başvuracak. Finans takip uygulaması gerçekten profesyonel seviyede. Çok memnunuz!",
      course: "Python Pro",
      avatar: "👨🔧"
    }
  ]
};