import { Course } from '@/types/course';
import codingFunImage from '@/assets/coding-fun.jpg';

export const scratchIleBaslangic: Course = {
  title: 'Scratch ile Başlangıç',
  description: '7-10 yaş arası çocuklar için blok tabanlı programlama. Oyun yaparak kodlamayı öğrenme.',
  ageRange: '7-10 yaş',
  duration: '24 hafta',
  level: 'Başlangıç',
  maxStudents: 'Standart:10-15, Premium: En fazla 4',
  features: [
    'Blok tabanlı programlama',
    'Oyun geliştirme',
    'Animasyon yapımı',
    'Karakter tasarımı',
    'Ses ve müzik ekleme',
    'Hikaye anlatımı',
    'Matematik becerileri',
    'Yaratıcılık geliştirme'
  ],
  curriculum: [
    {
      week: 1,
      title: "Scratch'e Merhaba",
      topics: ["Scratch nedir?", "Program arayüzü tanıtımı", "İlk karakter hareket ettirme", "Blok kavramı"],
      project: "Kedinin Dans Etmesi"
    },
    {
      week: 2,
      title: "Hareket ve Koordinatlar",
      topics: ["X-Y koordinat sistemi", "Hareket blokları", "Döngü kavramı", "Sürekli hareket"],
      project: "Topun Sıçraması"
    },
    {
      week: 3,
      title: "Görünüm ve Kostümler",
      topics: ["Kostüm değiştirme", "Boyut ayarlama", "Gizlenme-gösterme", "Efektler"],
      project: "Dönüşüm Animasyonu"
    },
    {
      week: 4,
      title: "Sesler ve Müzik",
      topics: ["Ses ekleme", "Müzik çalma", "Ses efektleri", "Ritim oluşturma"],
      project: "Müzik Kutusu"
    },
    {
      week: 5,
      title: "Koşullar ve Karar Verme",
      topics: ["Eğer-ise blokları", "Karşılaştırma yapmak", "Dokunma algılama", "Renkle etkileşim"],
      project: "Kaçan Balık Oyunu"
    },
    {
      week: 6,
      title: "Değişkenler ve Sayılar",
      topics: ["Değişken oluşturma", "Sayaç yapımı", "Puan sistemi", "Matematik işlemleri"],
      project: "Puan Toplama Oyunu"
    },
    {
      week: 7,
      title: "İleri Hareket Teknikleri",
      topics: ["Ok tuşları kontrolü", "Fare takibi", "Sınır kontrolü", "Hız ayarlama"],
      project: "Arabayı Sür Oyunu"
    },
    {
      week: 8,
      title: "Klonlar ve Çoğaltma",
      topics: ["Klon oluşturma", "Çok nesne kontrolü", "Rastgele yerleştirme", "Otomatik hareket"],
      project: "Yıldız Yağmuru"
    },
    {
      week: 9,
      title: "Mesajlaşma ve İletişim",
      topics: ["Mesaj gönderme", "Nesneler arası iletişim", "Olayları tetikleme", "Sıralı animasyon"],
      project: "İnteraktif Hikaye"
    },
    {
      week: 10,
      title: "Gelişmiş Oyun Mekaniği",
      topics: ["Çarpışma algılama", "Can sistemi", "Seviye geçişi", "Oyun durumu kontrolü"],
      project: "Platform Oyunu"
    },
    {
      week: 11,
      title: "Sanat ve Çizim",
      topics: ["Kalem blokları", "Çizim yapma", "Geometrik şekiller", "Renk kullanımı"],
      project: "Çizim Programı"
    },
    {
      week: 12,
      title: "Final Projesi",
      topics: ["Proje planlama", "Özgün oyun tasarımı", "Test etme", "Paylaşım"],
      project: "Kişisel Oyun Projesi"
    }
  ],
  achievements: [
    {
      icon: "🧩",
      title: "Blok Programlama",
      description: "Drag-and-drop ile kod bloklarını kullanmayı öğrenir"
    },
    {
      icon: "🎮", 
      title: "Oyun Geliştirme",
      description: "Kendi oyunlarını tasarlayıp geliştirebilir"
    },
    {
      icon: "🎨",
      title: "Yaratıcı Tasarım", 
      description: "Karakter, kostüm ve sahne tasarımı yapar"
    },
    {
      icon: "🎵",
      title: "Ses ve Müzik",
      description: "Oyunlarına ses efektleri ve müzik ekler"
    },
    {
      icon: "📐",
      title: "Matematik Becerileri",
      description: "Koordinat sistemi ve hesaplama becerilerini geliştirir"
    },
    {
      icon: "🎭",
      title: "Hikaye Anlatımı",
      description: "İnteraktif hikayeler ve animasyonlar oluşturur"
    },
    {
      icon: "🎯",
      title: "Problem Çözme",
      description: "Mantıksal düşünme ve problem çözme becerileri kazanır"
    },
    {
      icon: "🌟",
      title: "Özgüven",
      description: "Kendi projelerini oluşturarak teknoloji özgüveni kazanır"
    }
  ],
  studentProjects: [
    {
      id: 1,
      title: "Kedi ve Köpek Oyunu",
      student: "Ayşe A.",
      age: 7,
      description: "Kedinin köpekten kaçtığı eğlenceli bir oyun",
      githubUrl: "https://scratch.mit.edu/projects/ayse-cat-dog",
      image: codingFunImage,
      technologies: ["Scratch", "Animation", "Sound"]
    },
    {
      id: 2,
      title: "Uzay Macerası",
      student: "Mehmet B.",
      age: 8,
      description: "Roketin asteroitlerden kaçarak puanladığı oyun",
      githubUrl: "https://scratch.mit.edu/projects/mehmet-space",
      image: codingFunImage,
      technologies: ["Scratch", "Clones", "Variables"]
    },
    {
      id: 3,
      title: "Dans Eden Balerin",
      student: "Ece C.",
      age: 6,
      description: "Müzik eşliğinde dans eden balerin animasyonu",
      githubUrl: "https://scratch.mit.edu/projects/ece-dancer",
      image: codingFunImage,
      technologies: ["Scratch", "Music", "Costumes"]
    },
    {
      id: 4,
      title: "Matematik Kahramanı",
      student: "Emir D.",
      age: 9,
      description: "Toplama ve çıkarma sorularını çözen oyun",
      githubUrl: "https://scratch.mit.edu/projects/emir-math",
      image: codingFunImage,
      technologies: ["Scratch", "Math", "Variables"]
    },
    {
      id: 5,
      title: "Balık Yakalama",
      student: "Duru E.",
      age: 8,
      description: "Ağ ile balık yakalama oyunu",
      githubUrl: "https://scratch.mit.edu/projects/duru-fishing",
      image: codingFunImage,
      technologies: ["Scratch", "Mouse", "Collision"]
    }
  ],
  testimonials: [
    {
      id: 1,
      parentName: "Zehra Yılmaz",
      location: "İstanbul",
      childName: "Ayşe",
      childAge: 7,
      rating: 5,
      comment: "7 yaşındaki kızım ilk kez kodlama ile tanıştı. Scratch sayesinde hem eğleniyor hem öğreniyor. Artık kendi oyunlarını yapıyor ve bunları bize gururla gösteriyor. Yaşına çok uygun bir program, kesinlikle tavsiye ederim!",
      course: "Scratch ile Başlangıç",
      avatar: "👩‍💼"
    },
    {
      id: 2,
      parentName: "Ahmet Kaya",
      location: "Ankara",
      childName: "Mehmet",
      childAge: 8,
      rating: 5,
      comment: "Oğlum Mehmet matematik dersinde zorlanıyordu. Scratch kursu sayesinde koordinat sistemi ve hesaplamaları oyun yaparken öğrendi. Artık matematik daha eğlenceli geliyor. Teknolojiyi öğrenirken yaratıcılığı da gelişti.",
      course: "Scratch ile Başlangıç",
      avatar: "👨‍🔧"
    },
    {
      id: 3,
      parentName: "Selin Özkan",
      location: "İzmir",
      childName: "Ece",
      childAge: 6,
      rating: 5,
      comment: "6 yaşında küçücük kızım için endişe ediyorduk ama Scratch gerçekten çok kolay ve eğlenceli. Eğitmenler çok sabırlı, küçük yaş gruplarıyla çok iyi çalışıyorlar. Ece artık bilgisayar oyunu oynamak yerine oyun yapıyor!",
      course: "Scratch ile Başlangıç",
      avatar: "👩‍⚕️"
    },
    {
      id: 4,
      parentName: "Mehmet Arslan",
      location: "Bursa",
      childName: "Emir",
      childAge: 9,
      rating: 5,
      comment: "9 yaşındaki oğlum için mükemmel bir başlangıç oldu. Scratch'ten sonra artık daha karmaşık programlama dillerine geçmeye hazır hissediyor. Problem çözme becerileri çok gelişti. 4 kişilik sınıf sistemi harika!",
      course: "Scratch ile Başlangıç",
      avatar: "👨‍💻"
    },
    {
      id: 5,
      parentName: "Gamze Şahin",
      location: "Antalya",
      childName: "Duru",
      childAge: 8,
      rating: 5,
      comment: "Kızım Duru çok utangaç bir çocuktu. Scratch kursu sayesinde hem özgüveni arttı hem de yaratıcılığını keşfetti. Artık kendi hikayelerini de kodlayarak anlatıyor. Bu yaşta teknoloji öğrenmesi çok değerli!",
      course: "Scratch ile Başlangıç",
      avatar: "👩‍🎓"
    },
    {
      id: 6,
      parentName: "Erkan Demir",
      location: "Adana",
      childName: "Kaan",
      childAge: 7,
      rating: 5,
      comment: "7 yaşındaki oğlum Kaan'ın sabır sorunu vardı. Scratch'te oyun yaparken saatlerce odaklanabiliyor artık. Hem matematik becerilerini geliştirdi hem de teknoloji ile tanıştı. Çok başarılı bir program!",
      course: "Scratch ile Başlangıç",
      avatar: "��‍🏭"
    }
  ]
}; 