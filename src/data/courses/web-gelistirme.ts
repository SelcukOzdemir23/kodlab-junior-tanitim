import { Course } from '@/types/course';
import codingFunImage from '@/assets/coding-fun.jpg';

export const webGelistirme: Course = {
  title: 'Web Geliştirme',
  description: '12-17 yaş arası gençler için modern web teknolojileri. HTML, CSS ve JavaScript ile gerçek web siteleri yapma.',
  ageRange: '12-17 yaş',
  duration: '32 hafta',
  level: 'Orta-İleri',
  maxStudents: 'Standart:10-15, Premium: En fazla 4',
  features: [
    'HTML5 ve semantik yapı',
    'Modern CSS ve Flexbox',
    'JavaScript programlama',
    'Responsive tasarım',
    'Gerçek web projeleri',
    'Bootstrap framework',
    'Git version control',
    'Web hosting ve yayınlama'
  ],
  curriculum: [
    {
      week: 1,
      title: "Web'e Giriş ve HTML Temelleri",
      topics: ["Web nasıl çalışır?", "HTML nedir?", "Temel HTML etiketleri", "İlk web sayfası"],
      project: "Kişisel Tanıtım Sayfası"
    },
    {
      week: 2,
      title: "HTML Yapısı ve Semantik Etiketler",
      topics: ["HTML5 semantik etiketleri", "Form elemanları", "Tablolar", "Listeler"],
      project: "Okul Web Sitesi Ana Sayfa"
    },
    {
      week: 3,
      title: "CSS'e Giriş ve Temel Styling",
      topics: ["CSS nedir?", "Seçiciler ve özellikler", "Renk ve yazı tipleri", "Box model"],
      project: "Renkli Blog Sayfası"
    },
    {
      week: 4,
      title: "CSS Layout - Flexbox",
      topics: ["Flexbox container", "Flex item özellikleri", "Hizalama ve düzen", "Responsive layout"],
      project: "Portfolyo Web Sitesi"
    },
    {
      week: 5,
      title: "CSS Grid ve İleri Layout",
      topics: ["CSS Grid temelleri", "Grid alanları", "Responsive grid", "Layout karşılaştırması"],
      project: "Fotoğraf Galerisi"
    },
    {
      week: 6,
      title: "Responsive Tasarım",
      topics: ["Media queries", "Mobile-first approach", "Viewport meta tag", "Responsive images"],
      project: "Mobil Uyumlu Restaurant Sitesi"
    },
    {
      week: 7,
      title: "JavaScript'e Giriş",
      topics: ["JavaScript nedir?", "Değişkenler ve veri tipleri", "Fonksiyonlar", "DOM manipulation"],
      project: "İnteraktif Hesap Makinesi"
    },
    {
      week: 8,
      title: "JavaScript Events ve Dinamik İçerik",
      topics: ["Event listeners", "Click events", "Form validation", "DOM element oluşturma"],
      project: "Todo Listesi Uygulaması"
    },
    {
      week: 9,
      title: "JavaScript Kontrol Yapıları",
      topics: ["If-else koşulları", "Döngüler", "Array metodları", "Object kullanımı"],
      project: "Quiz Uygulaması"
    },
    {
      week: 10,
      title: "Local Storage ve API'ler",
      topics: ["Local storage kullanımı", "JSON veri formatı", "Fetch API", "Asenkron programlama"],
      project: "Hava Durumu Uygulaması"
    },
    {
      week: 11,
      title: "Bootstrap Framework",
      topics: ["Bootstrap nedir?", "Grid system", "Componentler", "Responsive utilities"],
      project: "Profesyonel İş Sitesi"
    },
    {
      week: 12,
      title: "Web Animasyonları ve Efektler",
      topics: ["CSS transitions", "CSS animations", "JavaScript animasyonları", "Hover efektleri"],
      project: "Animasyonlu Portfolyo"
    },
    {
      week: 13,
      title: "Git ve Version Control",
      topics: ["Git nedir?", "Repository oluşturma", "Commit ve push", "GitHub kullanımı"],
      project: "GitHub Portfolio Repository"
    },
    {
      week: 14,
      title: "Web Hosting ve Deployment",
      topics: ["Domain ve hosting", "Netlify deployment", "GitHub Pages", "Web optimizasyonu"],
      project: "Canlı Web Sitesi Yayınlama"
    },
    {
      week: 15,
      title: "Final Projesi - 1",
      topics: ["Proje planlama", "Wireframe oluşturma", "İçerik hazırlama", "Tasarım kararları"],
      project: "Kişisel Web Sitesi Tasarımı"
    },
    {
      week: 16,
      title: "Final Projesi - 2 ve Sunum",
      topics: ["Proje kodlama", "Test ve optimizasyon", "Deployment", "Proje sunumu"],
      project: "Final Proje Sunumu"
    }
  ],
  achievements: [
    {
      icon: "🌐",
      title: "HTML5 Uzmanı",
      description: "Semantik HTML5 etiketleri ile yapılandırılmış web sayfaları oluşturur"
    },
    {
      icon: "🎨", 
      title: "CSS Tasarımcısı",
      description: "Modern CSS teknikleri ile görsel olarak etkileyici tasarımlar yapar"
    },
    {
      icon: "⚡",
      title: "JavaScript Programcısı", 
      description: "JavaScript ile interaktif ve dinamik web uygulamaları geliştirir"
    },
    {
      icon: "📱",
      title: "Responsive Tasarım",
      description: "Tüm cihazlarda mükemmel görünen mobil uyumlu siteler yapar"
    },
    {
      icon: "🚀",
      title: "Web Deployment",
      description: "Web sitelerini canlıya alır ve internet üzerinde yayınlar"
    },
    {
      icon: "💻",
      title: "Framework Kullanımı",
      description: "Bootstrap gibi modern framework'lerle hızlı geliştirme yapar"
    },
    {
      icon: "🔧",
      title: "Version Control",
      description: "Git ve GitHub ile proje yönetimi ve kod versiyonlama yapar"
    },
    {
      icon: "🌟",
      title: "Full-Stack Hazırlık",
      description: "İleri düzey web teknolojilerine geçiş için sağlam temel oluşturur"
    }
  ],
  studentProjects: [
    {
      id: 1,
      title: "Kişisel Portfolyo Sitesi",
      student: "Deniz A.",
      age: 14,
      description: "Responsive tasarım ile modern portfolyo web sitesi",
      githubUrl: "https://github.com/kodlabjr/deniz-portfolio",
      image: codingFunImage,
      technologies: ["HTML5", "CSS3", "JavaScript", "Bootstrap"]
    },
    {
      id: 2,
      title: "E-Ticaret Landing Page",
      student: "Beren B.",
      age: 15,
      description: "Animasyonlu ürün vitrin sayfası ve sepet sistemi",
      githubUrl: "https://github.com/kodlabjr/beren-ecommerce",
      image: codingFunImage,
      technologies: ["HTML5", "CSS Grid", "JavaScript", "Local Storage"]
    },
    {
      id: 3,
      title: "Hava Durumu Uygulaması",
      student: "Cem C.",
      age: 13,
      description: "API kullanarak gerçek zamanlı hava durumu gösteren uygulama",
      githubUrl: "https://github.com/kodlabjr/cem-weather",
      image: codingFunImage,
      technologies: ["HTML5", "CSS3", "JavaScript", "Weather API"]
    },
    {
      id: 4,
      title: "Interaktif Quiz Platformu",
      student: "Ela D.",
      age: 16,
      description: "Çoktan seçmeli quiz sistemi ve sonuç takibi",
      githubUrl: "https://github.com/kodlabjr/ela-quiz",
      image: codingFunImage,
      technologies: ["HTML5", "CSS3", "JavaScript", "Bootstrap"]
    },
    {
      id: 5,
      title: "Müzik Çalar Uygulaması",
      student: "Kaan E.",
      age: 15,
      description: "HTML5 audio API ile çalışan müzik çalar interface",
      githubUrl: "https://github.com/kodlabjr/kaan-music-player",
      image: codingFunImage,
      technologies: ["HTML5", "CSS3", "JavaScript", "Audio API"]
    }
  ],
  testimonials: [
    {
      id: 1,
      parentName: "Ayhan Demir",
      location: "İstanbul",
      childName: "Deniz",
      childAge: 14,
      rating: 5,
      comment: "14 yaşındaki oğlum Deniz artık kendi web sitesini yapmış ve internet üzerinde yayınlamış! Web geliştirme kursundaki proje tabanlı öğrenme sistemi sayesinde gerçek beceriler kazandı. Eğitmenler sektörden geliyor, güncel teknolojileri öğretiyor.",
      course: "Web Geliştirme",
      avatar: "👨‍💻"
    },
    {
      id: 2,
      parentName: "Selin Kaya",
      location: "Ankara",
      childName: "Beren",
      childAge: 15,
      rating: 5,
      comment: "Kızım Beren lise öğrencisi ve web tasarımına çok ilgisi vardı. Bu kurs sayesinde sadece tasarım değil, kodlama da öğrendi. Artık freelance projeler bile yapıyor! Üniversitede bilgisayar mühendisliği okumaya karar verdi.",
      course: "Web Geliştirme",
      avatar: "👩‍🎨"
    },
    {
      id: 3,
      parentName: "Mehmet Özkan",
      location: "İzmir",
      childName: "Cem",
      childAge: 13,
      rating: 5,
      comment: "13 yaşında olmasına rağmen çok kompleks projeler yapıyor artık. Hava durumu uygulaması yaptığında gerçekten şaşırdık. Online eğitim kalitesi çok yüksek, her hafta yeni bir proje teslim ediyor.",
      course: "Web Geliştirme",
      avatar: "👨‍🔧"
    },
    {
      id: 4,
      parentName: "Zeynep Arslan",
      location: "Bursa",
      childName: "Ela",
      childAge: 16,
      rating: 5,
      comment: "16 yaşındaki kızım için mükemmel bir kurs oldu. Hem teknik beceriler hem de yaratıcılık gelişti. Quiz uygulaması yaptığı proje okuldaki arkadaşları tarafından kullanılıyor. Gelecek planlarında web geliştirme var artık!",
      course: "Web Geliştirme",
      avatar: "👩‍💼"
    },
    {
      id: 5,
      parentName: "Fatih Şahin",
      location: "Antalya",
      childName: "Kaan",
      childAge: 15,
      rating: 5,
      comment: "Müzik severdi, şimdi müzik çalar uygulaması yapmış! Teknik beceriler ve hobilerini birleştirmesi harika. Eğitmenler her öğrencinin ilgi alanına göre proje önerisi veriyor. 16 hafta boyunca hiç sıkılmadı.",
      course: "Web Geliştirme",
      avatar: "👨‍🎵"
    },
    {
      id: 6,
      parentName: "Gül Demir",
      location: "Adana",
      childName: "Yağmur",
      childAge: 13,
      rating: 5,
      comment: "Kızım 13 yaşında ama yaptığı web siteleri üniversite öğrencilerinin projelerinden daha profesyonel görünüyor. GitHub kullanmayı öğrenmesi de çok değerli. Gelecekte bu alanda kendini geliştirmeye devam edecek.",
      course: "Web Geliştirme",
      avatar: "��‍💻"
    }
  ]
}; 