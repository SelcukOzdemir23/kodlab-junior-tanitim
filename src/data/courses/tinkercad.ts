import { Course } from '@/types/course';
import codingFunImage from '@/assets/coding-fun.jpg';

export const tinkercad: Course = {
  title: 'Tinkercad',
  description: '8-14 yaş arası çocuklar için 3D tasarım ve modelleme. Yaratıcı projeler ve 3D baskı hazırlığı.',
  ageRange: '8-14 yaş',
  duration: '12 hafta',
  level: 'Başlangıç-Orta',
  maxStudents: 'Max 4 kişi',
  rating: '4.8',
  reviewCount: '94',
  features: [
    '3D tasarım ve modelleme',
    'Geometri becerileri',
    'Yaratıcı düşünme',
    'Mekansal anlama',
    '3D baskı hazırlığı',
    'STEM eğitimi',
    'Teknik çizim temelleri',
    'Problem çözme becerileri'
  ],
  curriculum: [
    {
      week: 1,
      title: "Tinkercad'e Merhaba",
      topics: ["3D tasarım nedir?", "Tinkercad arayüz tanıtımı", "Temel hareket kontrolleri", "İlk 3D şekil"],
      project: "Basit Küp Tasarımı"
    },
    {
      week: 2,
      title: "Temel Şekiller ve Boyutlandırma",
      topics: ["Geometrik şekiller", "Boyut değiştirme", "Döndürme ve konumlandırma", "Renk ekleme"],
      project: "Renkli Şekiller Koleksiyonu"
    },
    {
      week: 3,
      title: "Şekilleri Birleştirme",
      topics: ["Grup oluşturma", "Şekil birleştirme", "Hizalama araçları", "Simetri kullanımı"],
      project: "Basit Robot Tasarımı"
    },
    {
      week: 4,
      title: "Delik ve Çıkarma İşlemleri",
      topics: ["Hole özelliği", "Şekil çıkarma", "Karmaşık formlar", "İç boşluk oluşturma"],
      project: "Kalemlik Tasarımı"
    },
    {
      week: 5,
      title: "İleri Modelleme Teknikleri",
      topics: ["Duplicate kullanımı", "Pattern oluşturma", "Mirror fonksiyonu", "Align araçları"],
      project: "Simetrik Çiçek Tasarımı"
    },
    {
      week: 6,
      title: "Ev ve Binalar",
      topics: ["Mimari tasarım temelleri", "Oda planlaması", "Pencere ve kapı ekleme", "Çatı tasarımı"],
      project: "Hayal Evi Maketi"
    },
    {
      week: 7,
      title: "Araç ve Ulaşım",
      topics: ["Tekerlekli araçlar", "Hareket eden parçalar", "Aerodinamik şekiller", "Detay ekleme"],
      project: "Oyuncak Araba"
    },
    {
      week: 8,
      title: "Oyuncak ve Oyun Tasarımı",
      topics: ["Eğlenceli objeler", "Puzzle parçaları", "Oyun elemanları", "Ergonomik tasarım"],
      project: "3D Puzzle Tasarımı"
    },
    {
      week: 9,
      title: "Dekoratif Objeler",
      topics: ["Sanat eserleri", "Süsleme teknikleri", "Organik şekiller", "Yaratıcı tasarım"],
      project: "Kişisel Anahtarlık"
    },
    {
      week: 10,
      title: "Mekanik ve Fonksiyonel Tasarım",
      topics: ["Hareketli parçalar", "Fonksiyonel objeler", "Mühendislik prensipleri", "Pratik çözümler"],
      project: "Basit Mekanizma"
    },
    {
      week: 11,
      title: "3D Baskı Hazırlığı",
      topics: ["STL dosya formatı", "Baskı için optimizasyon", "Destekler ve yönlendirme", "Kalite kontrol"],
      project: "Baskıya Hazır Model"
    },
    {
      week: 12,
      title: "Final Projesi ve Sunum",
      topics: ["Büyük proje tasarımı", "Detaylandırma", "Sunum hazırlığı", "Portfolyo oluşturma"],
      project: "Kişisel İnovasyon Projesi"
    }
  ],
  achievements: [
    {
      icon: "🎯",
      title: "3D Düşünme",
      description: "Uzamsal algı ve 3 boyutlu düşünme becerisi geliştirir"
    },
    {
      icon: "📐", 
      title: "Geometri Ustası",
      description: "Geometrik şekiller ve mekansal ilişkileri anlayarak kullanır"
    },
    {
      icon: "🛠️",
      title: "Tasarım Becerisi", 
      description: "Yaratıcı ve fonksiyonel 3D objeler tasarlayabilir"
    },
    {
      icon: "🧩",
      title: "Problem Çözme",
      description: "Tasarım problemlerini analiz ederek çözüm üretir"
    },
    {
      icon: "🖨️",
      title: "3D Baskı Bilgisi",
      description: "3D baskı süreçlerini anlayarak modeller hazırlar"
    },
    {
      icon: "🏗️",
      title: "Mühendislik Düşüncesi",
      description: "Yapısal düşünme ve mühendislik prensiplerini uygular"
    },
    {
      icon: "🎨",
      title: "Yaratıcı Tasarım",
      description: "Estetik ve fonksiyonel tasarım prensiplerini birleştirir"
    },
    {
      icon: "⚙️",
      title: "Teknik Beceriler",
      description: "CAD yazılımı kullanımında ustalaşır ve teknik çizim yapar"
    }
  ],
  studentProjects: [
    {
      id: 1,
      title: "Mini Ev Maketi",
      student: "Zeynep A.",
      age: 10,
      description: "Detaylı mimari elemanlarla tasarlanmış iki katlı ev maketi",
      githubUrl: "https://tinkercad.com/things/zeynep-house-model",
      image: codingFunImage,
      technologies: ["Tinkercad", "3D Modeling", "Architecture"]
    },
    {
      id: 2,
      title: "Fonksiyonel Kalemlik",
      student: "Ahmet B.",
      age: 12,
      description: "Farklı boyutlarda kalemlere uygun bölmeli kalemlik tasarımı",
      githubUrl: "https://tinkercad.com/things/ahmet-pencil-holder",
      image: codingFunImage,
      technologies: ["Tinkercad", "Functional Design", "Organization"]
    },
    {
      id: 3,
      title: "Oyuncak Uçak",
      student: "Elif C.",
      age: 9,
      description: "Aerodinamik prensipler kullanılarak tasarlanmış oyuncak uçak",
      githubUrl: "https://tinkercad.com/things/elif-toy-plane",
      image: codingFunImage,
      technologies: ["Tinkercad", "Aerodynamics", "Toy Design"]
    },
    {
      id: 4,
      title: "3D Puzzle Oyunu",
      student: "Mert D.",
      age: 11,
      description: "Birbirine kilit parçalardan oluşan 3 boyutlu puzzle tasarımı",
      githubUrl: "https://tinkercad.com/things/mert-3d-puzzle",
      image: codingFunImage,
      technologies: ["Tinkercad", "Puzzle Design", "Mechanical Fit"]
    },
    {
      id: 5,
      title: "Özel Anahtarlık",
      student: "Selin E.",
      age: 13,
      description: "Kişisel logo ve desenlerle özelleştirilmiş anahtarlık",
      githubUrl: "https://tinkercad.com/things/selin-keychain",
      image: codingFunImage,
      technologies: ["Tinkercad", "Personal Design", "Customization"]
    }
  ],
  testimonials: [
    {
      id: 1,
      parentName: "Ayşe Yılmaz",
      location: "İstanbul",
      childName: "Zeynep",
      childAge: 10,
      rating: 5,
      comment: "10 yaşındaki kızım Zeynep artık evde sürekli 3D tasarım yapıyor! Tinkercad kursu sayesinde hem matematik becerilerinde gelişme oldu hem de yaratıcılığı arttı. Ev maketi yaptığında ailece şaşırdık. Çok değerli bir kurs!",
      course: "Tinkercad",
      avatar: "👩‍🏫"
    },
    {
      id: 2,
      parentName: "Mehmet Kaya",
      location: "Ankara",
      childName: "Ahmet",
      childAge: 12,
      rating: 5,
      comment: "Oğlum Ahmet matematik dersinde geometri konularında zorlanıyordu. Tinkercad kursu sayesinde 3D düşünme becerisi gelişti ve artık geometriyi çok daha iyi anlıyor. Kalemlik tasarımı gerçekten fonksiyonel olmuş!",
      course: "Tinkercad",
      avatar: "👨‍💼"
    },
    {
      id: 3,
      parentName: "Fatma Özkan",
      location: "İzmir",
      childName: "Elif",
      childAge: 9,
      rating: 5,
      comment: "9 yaşında olmasına rağmen çok karmaşık projeler yapıyor. Oyuncak uçağı tasarlarken aerodinamik prensipleri de öğrenmiş! Hem eğleniyor hem öğreniyor. Eğitmenler yaşına uygun şekilde anlatıyor.",
      course: "Tinkercad",
      avatar: "👩‍⚕️"
    },
    {
      id: 4,
      parentName: "Selim Arslan",
      location: "Bursa",
      childName: "Mert",
      childAge: 11,
      rating: 5,
      comment: "Mert'in mühendislik becerileri gelişti. 3D puzzle tasarımı yaparken parçaların nasıl birbirine uyacağını düşünmesi, problem çözme becerisini geliştirdi. Gelecekte mühendis olmak istiyor artık!",
      course: "Tinkercad",
      avatar: "👨‍🔧"
    },
    {
      id: 5,
      parentName: "Gözde Şahin",
      location: "Antalya",
      childName: "Selin",
      childAge: 13,
      rating: 5,
      comment: "13 yaşındaki kızım için mükemmel bir kurs oldu. Anahtarlık tasarımını 3D yazıcıda bastırdık, gerçekten profesyonel görünüyor! Artık tasarım ve sanat alanlarına da ilgi duyuyor. Çok başarılı!",
      course: "Tinkercad",
      avatar: "👩‍🎨"
    },
    {
      id: 6,
      parentName: "Oğuzhan Demir",
      location: "Adana",
      childName: "Ege",
      childAge: 8,
      rating: 5,
      comment: "8 yaşındaki oğlum için endişeliydik ama Tinkercad çok kullanıcı dostu. Basit şekiller yapmaktan başladı, şimdi karmaşık tasarımlar yapıyor. STEM becerilerinin gelişmesi çok değerli. Kesinlikle tavsiye ederim!",
      course: "Tinkercad",
      avatar: "��‍💻"
    }
  ]
}; 