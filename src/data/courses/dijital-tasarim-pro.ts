import { Course } from '@/types/course';
import codingFunImage from '@/assets/coding-fun.jpg';

export const dijitalTasarimPro: Course = {
  title: 'Dijital Tasarım - Pro',
  description: '13-17 yaş arası gençler için ileri seviye dijital tasarım. Tinkercad ile 3D modelleme ve GIMP ile profesyonel grafik tasarım.',
  ageRange: '13-17 yaş',
  duration: '32 hafta',
  level: 'İleri',
  maxStudents: 'Standart:10-15, Premium: En fazla 4',

  features: [
    'Tinkercad ile 3D modelleme',
    'GIMP ile profesyonel grafik tasarım',
    'Fotoğraf düzenleme teknikleri',
    '3D baskıya hazır modeller',
    'Marka kimliği tasarımı',
    'Dijital sanat projeleri',
    'Portfolio geliştirme',
    'Sektörel projeler'
  ],
  curriculum: [
    {
      week: 1,
      title: "Dijital Tasarım Dünyasına Giriş",
      topics: ["Tasarım prensipleri", "Profesyonel araçlar", "Sektör analizi", "Proje planlama"],
      project: "Tasarım Trend Analizi"
    },
    {
      week: 2,
      title: "Tinkercad'e Giriş",
      topics: ["3D tasarım temelleri", "Tinkercad arayüzü", "Temel şekiller", "Boyutlandırma"],
      project: "İlk 3D Model Tasarımı"
    },
    {
      week: 3,
      title: "3D Modelleme Temelleri",
      topics: ["Geometrik şekiller", "Birleştirme ve çıkarma", "Hizalama", "Gruplama"],
      project: "Geometrik Puzzle Tasarımı"
    },
    {
      week: 4,
      title: "Fonksiyonel 3D Tasarım",
      topics: ["Kullanılabilir objeler", "Ölçü hesaplamaları", "Toleranslar", "Montaj tasarımı"],
      project: "Kalemlik ve Organizer Tasarımı"
    },
    {
      week: 5,
      title: "İleri 3D Modelleme",
      topics: ["Karmaşık şekiller", "Detay çalışması", "Yüzey işlemleri", "Optimizasyon"],
      project: "Dekoratif Obje Tasarımı"
    },
    {
      week: 6,
      title: "3D Baskı Hazırlığı",
      topics: ["Baskı kuralları", "Destek yapıları", "Dosya formatları", "Kalite kontrolü"],
      project: "Baskıya Hazır Model Serisi"
    },
    {
      week: 7,
      title: "GIMP'e Giriş",
      topics: ["GIMP arayüzü", "Katman sistemi", "Temel araçlar", "Dosya formatları"],
      project: "Basit Fotoğraf Düzenleme"
    },
    {
      week: 8,
      title: "Fotoğraf Düzenleme Teknikleri",
      topics: ["Renk düzeltme", "Kontrast ayarları", "Keskinlik", "Gürültü azaltma"],
      project: "Profesyonel Fotoğraf Serisi"
    },
    {
      week: 9,
      title: "Dijital Sanat ve İllüstrasyon",
      topics: ["Dijital boyama", "Fırça teknikleri", "Katman efektleri", "Sanatsal kompozisyon"],
      project: "Orijinal Dijital Sanat Eseri"
    },
    {
      week: 10,
      title: "Logo ve Marka Kimliği",
      topics: ["Logo tasarım prensipleri", "Vektör çizim", "Marka renkleri", "Tipografi"],
      project: "Kapsamlı Marka Kimliği Tasarımı"
    },
    {
      week: 11,
      title: "Grafik Tasarım Projeleri",
      topics: ["Poster tasarımı", "Broşür düzeni", "Sosyal medya grafikleri", "Web grafikleri"],
      project: "Kurumsal Grafik Tasarım Seti"
    },
    {
      week: 12,
      title: "Fotoğraf Manipülasyonu",
      topics: ["Montaj teknikleri", "Maske kullanımı", "Blend modları", "Surreal efektler"],
      project: "Yaratıcı Fotoğraf Manipülasyonu"
    },
    {
      week: 13,
      title: "UI/UX Tasarım Temelleri",
      topics: ["Kullanıcı arayüzü", "Kullanıcı deneyimi", "Wireframe", "Prototipleme"],
      project: "Mobil Uygulama Arayüz Tasarımı"
    },
    {
      week: 14,
      title: "Animasyon ve GIF Oluşturma",
      topics: ["Frame animasyon", "GIF optimizasyonu", "Hareket illüzyonu", "Timing"],
      project: "Animasyonlu Logo ve Banner"
    },
    {
      week: 15,
      title: "Portfolio Geliştirme",
      topics: ["Proje seçimi", "Sunum teknikleri", "Online portfolyo", "Profesyonel sunum"],
      project: "Dijital Tasarım Portfolyosu"
    },
    {
      week: 16,
      title: "Final Proje ve Kariyer Rehberliği",
      topics: ["Kapsamlı proje sunumu", "Sektör fırsatları", "Freelance çalışma", "Gelecek planları"],
      project: "Final Portfolyo Sunumu"
    }
  ],
  achievements: [
    {
      icon: "🛠️",
      title: "3D Modelleme Uzmanı",
      description: "Tinkercad ile karmaşık 3D modeller tasarlar ve 3D baskıya hazırlar"
    },
    {
      icon: "🎨", 
      title: "GIMP Profesyoneli",
      description: "GIMP ile profesyonel seviyede fotoğraf düzenleme ve grafik tasarım yapar"
    },
    {
      icon: "📷",
      title: "Fotoğraf Editörü", 
      description: "İleri seviye fotoğraf düzenleme ve manipülasyon teknikleri uygular"
    },
    {
      icon: "🏷️",
      title: "Marka Tasarımcısı",
      description: "Logo ve kurumsal kimlik tasarımları oluşturur"
    },
    {
      icon: "🖼️",
      title: "Dijital Sanatçı",
      description: "Özgün dijital sanat eserleri ve illüstrasyonlar yaratır"
    },
    {
      icon: "📱",
      title: "UI/UX Tasarımcısı",
      description: "Kullanıcı arayüzü ve deneyim tasarımı prensiplerini uygular"
    },
    {
      icon: "🎬",
      title: "Animasyon Uzmanı",
      description: "Animasyonlu grafikler ve GIF'ler oluşturur"
    },
    {
      icon: "💼",
      title: "Portfolio Sahibi",
      description: "Profesyonel dijital tasarım portfolyosu geliştirir"
    }
  ],
  studentProjects: [
    {
      id: 1,
      title: "Sürdürülebilir Yaşam Marka Kimliği",
      student: "Ece R.",
      age: 16,
      description: "Çevre dostu ürünler için kapsamlı marka kimliği ve grafik tasarım seti",
      githubUrl: "https://github.com/kodlabjr/ece-sustainable-brand",
      image: codingFunImage,
      technologies: ["GIMP", "Brand Design", "Logo", "Graphics"]
    },
    {
      id: 2,
      title: "Fonksiyonel 3D Baskı Koleksiyonu",
      student: "Kaan M.",
      age: 15,
      description: "Günlük kullanım için tasarlanmış 3D baskı objeler serisi",
      githubUrl: "https://github.com/kodlabjr/kaan-3d-collection",
      image: codingFunImage,
      technologies: ["Tinkercad", "3D Modeling", "3D Printing", "Design"]
    },
    {
      id: 3,
      title: "Dijital Sanat Serisi: Gelecek Şehirleri",
      student: "Yağmur K.",
      age: 17,
      description: "Fütüristik şehir konseptleri ile dijital sanat eserleri",
      githubUrl: "https://github.com/kodlabjr/yagmur-future-cities",
      image: codingFunImage,
      technologies: ["GIMP", "Digital Art", "Photo Manipulation", "Concept Art"]
    },
    {
      id: 4,
      title: "Mobil Oyun UI Tasarımı",
      student: "Batuhan S.",
      age: 14,
      description: "Mobil oyun için kullanıcı arayüzü ve ikon tasarımları",
      githubUrl: "https://github.com/kodlabjr/batuhan-game-ui",
      image: codingFunImage,
      technologies: ["UI Design", "GIMP", "Game Design", "Icons"]
    },
    {
      id: 5,
      title: "Kişisel Portfolyo Web Sitesi",
      student: "Derin A.",
      age: 16,
      description: "Kendi tasarım çalışmaları için profesyonel portfolyo sitesi",
      githubUrl: "https://github.com/kodlabjr/derin-portfolio-site",
      image: codingFunImage,
      technologies: ["Web Design", "Portfolio", "GIMP", "UI/UX"]
    }
  ],
  testimonials: [
    {
      id: 1,
      parentName: "Selma Özkan",
      location: "İstanbul",
      childName: "Ece",
      childAge: 16,
      rating: 5,
      comment: "Kızım Ece'nin tasarım becerilerindeki gelişim inanılmaz. Artık profesyonel seviyede marka tasarımları yapıyor ve üniversite için harika bir portfolyosu var. GIMP'i çok iyi kullanıyor.",
      course: "Dijital Tasarım - Pro",
      avatar: "👩🎨"
    },
    {
      id: 2,
      parentName: "Ahmet Kılıç",
      location: "Ankara",
      childName: "Kaan",
      childAge: 15,
      rating: 5,
      comment: "Oğlum Kaan'ın 3D tasarım projeleri gerçekten etkileyici. Tinkercad ile yaptığı modelleri 3D yazıcıda bastırıyoruz. Hem yaratıcı hem de teknik becerilerini geliştiren mükemmel bir kurs.",
      course: "Dijital Tasarım - Pro",
      avatar: "👨🔧"
    },
    {
      id: 3,
      parentName: "Zeynep Tekin",
      location: "İzmir",
      childName: "Yağmur",
      childAge: 17,
      rating: 5,
      comment: "Yağmur'un dijital sanat eserleri gerçekten sanat seviyesinde. Fotoğraf manipülasyonu ve dijital boyama teknikleri çok gelişti. Grafik tasarım alanında kariyer yapmayı planlıyor.",
      course: "Dijital Tasarım - Pro",
      avatar: "👩🏫"
    }
  ]
};