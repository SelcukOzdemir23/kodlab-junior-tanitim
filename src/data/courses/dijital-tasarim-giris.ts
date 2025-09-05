import { Course } from '@/types/course';
import codingFunImage from '@/assets/coding-fun.jpg';

export const dijitalTasarimGiris: Course = {
  title: 'Dijital Tasarım - Giriş',
  description: '9-12 yaş arası çocuklar için bilgisayar kullanımı ve dijital tasarım temelleri. Figma, Canva ve Piskel App ile yaratıcı projeler.',
  ageRange: '9-12 yaş',
  duration: '32 hafta',
  level: 'Başlangıç',
  maxStudents: 'Standart:10-15, Premium: En fazla 4',
  features: [
    'Bilgisayar kullanımı temelleri',
    'Figma ile tasarım',
    'Canva ile grafik oluşturma',
    'Piskel App ile pixel art',
    'Renk teorisi',
    'Kompozisyon temelleri',
    'Yaratıcı projeler',
    'Dijital portfolyo'
  ],
  curriculum: [
    {
      week: 1,
      title: "Bilgisayar ile Tanışma",
      topics: ["Bilgisayar parçları", "Fare ve klavye kullanımı", "Dosya yönetimi", "İnternet güvenliği"],
      project: "Kişisel Klasör Düzenleme"
    },
    {
      week: 2,
      title: "Dijital Dünya Keşfi",
      topics: ["Dijital tasarım nedir?", "Tasarım örnekleri", "Renk kavramı", "Temel şekiller"],
      project: "Renk Paleti Oluşturma"
    },
    {
      week: 3,
      title: "Canva'ya Giriş",
      topics: ["Canva arayüzü", "Şablon kullanımı", "Metin ekleme", "Basit tasarımlar"],
      project: "Kişisel Kartvizit Tasarımı"
    },
    {
      week: 4,
      title: "Canva ile Poster Tasarımı",
      topics: ["Poster elementleri", "Görsel hiyerarşi", "Yazı tipi seçimi", "Renk uyumu"],
      project: "Doğum Günü Posteri"
    },
    {
      week: 5,
      title: "Canva ile Sosyal Medya",
      topics: ["Instagram post tasarımı", "Story şablonları", "Boyut ayarları", "Marka tutarlılığı"],
      project: "Kişisel Instagram Post Serisi"
    },
    {
      week: 6,
      title: "Figma'ya Giriş",
      topics: ["Figma arayüzü", "Temel araçlar", "Şekil oluşturma", "Renk ve efektler"],
      project: "Basit İkon Tasarımı"
    },
    {
      week: 7,
      title: "Figma ile Logo Tasarımı",
      topics: ["Logo prensipleri", "Vektör çizim", "Simetri ve denge", "Logo varyasyonları"],
      project: "Kişisel Logo Tasarımı"
    },
    {
      week: 8,
      title: "Figma ile Karakter Tasarımı",
      topics: ["Karakter anatomisi", "Yüz ifadeleri", "Renk paleti", "Karakter sayfası"],
      project: "Maskot Karakter Tasarımı"
    },
    {
      week: 9,
      title: "Piskel App'e Giriş",
      topics: ["Pixel art nedir?", "Piskel arayüzü", "Piksel çizimi", "Animasyon temelleri"],
      project: "8-bit Karakter Tasarımı"
    },
    {
      week: 10,
      title: "Piskel ile Animasyon",
      topics: ["Frame kavramı", "Hareket illüzyonu", "Döngü animasyonları", "Timing"],
      project: "Yürüyen Karakter Animasyonu"
    },
    {
      week: 11,
      title: "Piskel ile Oyun Grafikleri",
      topics: ["Oyun sprite'ları", "Tile tasarımı", "Arka plan grafikleri", "Oyun UI elementleri"],
      project: "Mini Oyun Grafik Seti"
    },
    {
      week: 12,
      title: "Renk Teorisi ve Uygulaması",
      topics: ["Renk çemberi", "Sıcak-soğuk renkler", "Kontrast", "Renk psikolojisi"],
      project: "Duygu Renk Paleti Koleksiyonu"
    },
    {
      week: 13,
      title: "Kompozisyon ve Düzen",
      topics: ["Altın oran", "Simetri ve asimetri", "Görsel denge", "Boşluk kullanımı"],
      project: "Kompozisyon Çalışması Serisi"
    },
    {
      week: 14,
      title: "Dijital Kolaj ve Montaj",
      topics: ["Görsel birleştirme", "Katman kullanımı", "Maske teknikleri", "Yaratıcı montaj"],
      project: "Hayal Dünyası Kolajı"
    },
    {
      week: 15,
      title: "Portfolio Hazırlama",
      topics: ["Proje seçimi", "Sunum düzeni", "Açıklama yazma", "Dijital portfolyo"],
      project: "Kişisel Tasarım Portfolyosu"
    },
    {
      week: 16,
      title: "Final Proje ve Sunum",
      topics: ["Proje sunumu", "Tasarım süreci anlatımı", "Geri bildirim alma", "Gelecek planları"],
      project: "Final Tasarım Projesi Sunumu"
    }
  ],
  achievements: [
    {
      icon: "💻",
      title: "Bilgisayar Kullanıcısı",
      description: "Bilgisayar temellerini öğrenir ve güvenli kullanım alışkanlığı kazanır"
    },
    {
      icon: "🎨", 
      title: "Canva Tasarımcısı",
      description: "Canva ile poster, kartvizit ve sosyal medya tasarımları yapar"
    },
    {
      icon: "🖌️",
      title: "Figma Sanatçısı", 
      description: "Figma ile logo, ikon ve karakter tasarımları oluşturur"
    },
    {
      icon: "👾",
      title: "Pixel Art Ustası",
      description: "Piskel App ile pixel art ve animasyonlar yapar"
    },
    {
      icon: "🌈",
      title: "Renk Uzmanı",
      description: "Renk teorisini öğrenir ve etkili renk kombinasyonları oluşturur"
    },
    {
      icon: "📐",
      title: "Kompozisyon Bilgini",
      description: "Görsel düzen ve kompozisyon prensiplerini uygular"
    },
    {
      icon: "🎭",
      title: "Yaratıcı Tasarımcı",
      description: "Kendi fikirlerini dijital tasarımlara dönüştürür"
    },
    {
      icon: "📁",
      title: "Portfolio Sahibi",
      description: "Kendi dijital tasarım portfolyosunu oluşturur"
    }
  ],
  studentProjects: [
    {
      id: 1,
      title: "Hayvan Dostları Logo Serisi",
      student: "Zeynep Y.",
      age: 11,
      description: "Farklı hayvanları temsil eden renkli logo tasarımları",
      githubUrl: "https://github.com/kodlabjr/zeynep-animal-logos",
      image: codingFunImage,
      technologies: ["Figma", "Logo Design", "Color Theory"]
    },
    {
      id: 2,
      title: "Pixel Art Oyun Karakterleri",
      student: "Emirhan K.",
      age: 10,
      description: "8-bit tarzında oyun karakterleri ve animasyonları",
      githubUrl: "https://github.com/kodlabjr/emirhan-pixel-characters",
      image: codingFunImage,
      technologies: ["Piskel App", "Animation", "Game Design"]
    },
    {
      id: 3,
      title: "Okul Etkinlik Posterleri",
      student: "Selin M.",
      age: 12,
      description: "Okul etkinlikleri için tasarlanmış renkli posterler",
      githubUrl: "https://github.com/kodlabjr/selin-school-posters",
      image: codingFunImage,
      technologies: ["Canva", "Poster Design", "Typography"]
    },
    {
      id: 4,
      title: "Hayal Dünyası Kolajları",
      student: "Berat A.",
      age: 9,
      description: "Yaratıcı dijital kolaj ve montaj çalışmaları",
      githubUrl: "https://github.com/kodlabjr/berat-fantasy-collages",
      image: codingFunImage,
      technologies: ["Digital Collage", "Figma", "Creative Design"]
    },
    {
      id: 5,
      title: "Kişisel Marka Tasarımı",
      student: "Defne L.",
      age: 11,
      description: "Kendi adına logo, kartvizit ve sosyal medya tasarımları",
      githubUrl: "https://github.com/kodlabjr/defne-personal-brand",
      image: codingFunImage,
      technologies: ["Branding", "Canva", "Figma"]
    }
  ],
  testimonials: [
    {
      id: 1,
      parentName: "Sibel Yılmaz",
      location: "İstanbul",
      childName: "Zeynep",
      childAge: 11,
      rating: 5,
      comment: "Kızım Zeynep'in yaratıcılığı bu kurs sayesinde çok gelişti. Artık kendi logolarını tasarlıyor ve renk uyumlarını çok iyi biliyor. Bilgisayar kullanımında da çok ilerledi.",
      course: "Dijital Tasarım - Giriş",
      avatar: "👩🎨"
    },
    {
      id: 2,
      parentName: "Murat Kaya",
      location: "Ankara",
      childName: "Emirhan",
      childAge: 10,
      rating: 5,
      comment: "Oğlum oyun oynamayı seviyordu, şimdi kendi oyun karakterlerini tasarlıyor! Pixel art çalışmaları gerçekten etkileyici. Teknoloji ile yaratıcılığı birleştiren harika bir kurs.",
      course: "Dijital Tasarım - Giriş",
      avatar: "👨💻"
    },
    {
      id: 3,
      parentName: "Ayşe Demir",
      location: "İzmir",
      childName: "Selin",
      childAge: 12,
      rating: 5,
      comment: "Selin'in tasarım becerilerindeki gelişim inanılmaz. Okul için yaptığı posterler öğretmenlerinden çok beğeni topluyor. Artık dijital tasarımı bir hobi olarak sürdürüyor.",
      course: "Dijital Tasarım - Giriş",
      avatar: "👩🏫"
    }
  ]
};