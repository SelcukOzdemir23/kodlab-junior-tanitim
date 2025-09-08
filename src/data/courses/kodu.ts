import { Course } from '@/types/course';
import codingFunImage from '@/assets/coding-fun.jpg';

export const kodu: Course = {
  title: 'Kodu',
  description: '10-15 yaş arası çocuklar için görsel programlama ile oyun tasarımı. Karakter kontrolü ve dünya yaratma.',
  ageRange: '10-15 yaş',
  duration: '32 hafta',
  level: 'Orta',
  maxStudents: 'Standart: 10-15, Premium: En fazla 4 kişi',
  features: [
    'Görsel programlama blokları',
    '3D oyun tasarımı',
    'Karakter kontrolü',
    'Dünya tasarımı',
    'Fizik simülasyonu',
    'Hikaye anlatımı',
    'Yaratıcı düşünme',
    'Oyun mekaniği'
  ],
  curriculum: [
    {
      week: 1,
      title: "Kodu Dünyasına Merhaba",
      topics: ["Kodu nedir?", "3D dünya keşfi", "Temel hareket kontrolleri", "İlk karakter"],
      project: "Basit Hareket Oyunu"
    },
    {
      week: 2,
      title: "Programlama Blokları",
      topics: ["When/Do yapısı", "Temel programlama mantığı", "Olay tabanlı programlama", "Basit komutlar"],
      project: "Renk Değiştiren Kodu"
    },
    {
      week: 3,
      title: "Hareket ve Kontrol",
      topics: ["Klavye kontrolleri", "Fare kontrolleri", "Hareket komutları", "Hız ayarlama"],
      project: "Kontrol Edilebilir Karakter"
    },
    {
      week: 4,
      title: "Çarpışma ve Etkileşim",
      topics: ["Bump sensörü", "Çarpışma algılama", "Nesne etkileşimi", "Puanlama sistemi"],
      project: "Top Toplama Oyunu"
    },
    {
      week: 5,
      title: "Ses ve Müzik",
      topics: ["Ses ekleme", "Müzik çalma", "Ses efektleri", "Ses kontrolü"],
      project: "Müzikli Macera"
    },
    {
      week: 6,
      title: "Döngüler ve Tekrarlar",
      topics: ["Timer kullanımı", "Sürekli hareket", "Döngü mantığı", "Otomasyon"],
      project: "Sonsuz Koşu Oyunu"
    },
    {
      week: 7,
      title: "Koşullar ve Kararlar",
      topics: ["If/Then yapısı", "Karar verme", "Çoklu koşullar", "Mantıksal operatörler"],
      project: "Akıllı NPC (Bot) Oyunu"
    },
    {
      week: 8,
      title: "Skor ve İstatistikler",
      topics: ["Skor sistemi", "Can/hayat sistemi", "İstatistik takibi", "Oyun durumu"],
      project: "Puan Toplamalı Yarış"
    },
    {
      week: 9,
      title: "Dünya Tasarımı",
      topics: ["Terrain oluşturma", "Engel yerleştirme", "Çevre tasarımı", "Level dizaynı"],
      project: "Kendi Dünyamı Yaratıyorum"
    },
    {
      week: 10,
      title: "İleri Karakter Kontrolleri",
      topics: ["Zıplama mekaniği", "Çoklu karakter", "Karakter değiştirme", "Özel yetenekler"],
      project: "Platform Oyunu"
    },
    {
      week: 11,
      title: "Yapay Zeka ve Otomatik Davranışlar",
      topics: ["NPC davranışları", "Takip etme", "Kaçma-kovalama", "Rastgele hareketler"],
      project: "Hayvan Simülasyonu"
    },
    {
      week: 12,
      title: "İleri Oyun Mekaniği",
      topics: ["Power-up'lar", "Silah ve araçlar", "Inventory sistemi", "Level geçişi"],
      project: "Aksiyon Macera Oyunu"
    },
    {
      week: 13,
      title: "Hikaye ve Senaryo",
      topics: ["Hikaye anlatımı", "Diyalog sistemi", "Görev tasarımı", "Cutscene'ler"],
      project: "Hikayeli RPG Oyunu"
    },
    {
      week: 14,
      title: "Final Projesi ve Sunum",
      topics: ["Büyük proje tasarımı", "Oyun polishing", "Test etme", "Sunum hazırlığı"],
      project: "Kişisel Oyun Şaheseri"
    }
  ],
  achievements: [
    {
      icon: "🎮",
      title: "Oyun Tasarımcısı",
      description: "3D dünyalar yaratarak kendi oyunlarını tasarlar"
    },
    {
      icon: "🕹️", 
      title: "Görsel Programlama",
      description: "Blok tabanlı programlama ile karmaşık mantıklar kurabilir"
    },
    {
      icon: "🎭",
      title: "Karakter Kontrolü", 
      description: "Oyun karakterlerini kontrol etme ve davranış programlama"
    },
    {
      icon: "🌍",
      title: "Dünyalar Oluşturma",
      description: "3D ortamlar tasarlayarak yaratıcı dünyalar oluşturur"
    },
    {
      icon: "🎯",
      title: "Oyun Mekaniği",
      description: "Skor, can, çarpışma gibi oyun mekaniklerini uygular"
    },
    {
      icon: "🎵",
      title: "Ses Tasarımı",
      description: "Oyunlarına ses efektleri ve müzik ekleyerek deneyimi zenginleştirir"
    },
    {
      icon: "📖",
      title: "Hikaye Anlatıcısı",
      description: "İnteraktif hikayeler oluşturarak oyunlarına derinlik katar"
    }
  ],
  studentProjects: [
    {
      id: 1,
      title: "Macera Adası",
      student: "Can A.",
      age: 12,
      description: "Hazine avcısının adada macera yaşadığı platform oyunu",
      githubUrl: "https://kodu.com/games/can-adventure-island",
      image: codingFunImage,
      technologies: ["Kodu", "3D World", "Character Control"]
    },
    {
      id: 2,
      title: "Uzay Savaşçısı",
      student: "Arda B.",
      age: 14,
      description: "Uzay gemisi ile düşmanları yok etme aksiyon oyunu",
      githubUrl: "https://kodu.com/games/arda-space-warrior",
      image: codingFunImage,
      technologies: ["Kodu", "Shooting Game", "AI Enemies"]
    },
    {
      id: 3,
      title: "Hayvan Dostları",
      student: "Zehra C.",
      age: 10,
      description: "Hayvanlarla etkileşim kurarak görevler yapma simülasyonu",
      githubUrl: "https://kodu.com/games/zehra-animal-friends",
      image: codingFunImage,
      technologies: ["Kodu", "Simulation", "NPCs"]
    },
    {
      id: 4,
      title: "Büyülü Orman",
      student: "Emir D.",
      age: 13,
      description: "Büyücünün sihirli güçlerle bulmacaları çözdüğü RPG",
      githubUrl: "https://kodu.com/games/emir-magic-forest",
      image: codingFunImage,
      technologies: ["Kodu", "RPG", "Puzzle Game"]
    },
    {
      id: 5,
      title: "Yarış Şampiyonu",
      student: "Nil E.",
      age: 11,
      description: "Engelli yarış pistinde rekabetçi araba yarışı",
      githubUrl: "https://kodu.com/games/nil-racing-champion",
      image: codingFunImage,
      technologies: ["Kodu", "Racing Game", "Physics"]
    }
  ],
  testimonials: [
    {
      id: 1,
      parentName: "Serpil Yılmaz",
      location: "İstanbul",
      childName: "Can",
      childAge: 12,
      rating: 5,
      comment: "12 yaşındaki oğlum Can artık kendi oyunlarını yapıyor! Kodu kursu sayesinde hem programlama öğrendi hem de yaratıcılığını geliştirdi. Macera Adası projesini yaparken ailece heyecanlandık. Görsel programlama çocuklar için mükemmel!",
      course: "Kodu",
      avatar: "👩‍🏫"
    },
    {
      id: 2,
      parentName: "Murat Kaya",
      location: "Ankara",
      childName: "Arda",
      childAge: 14,
      rating: 5,
      comment: "Arda sürekli oyun oynuyordu, şimdi oyun yapıyor! Uzay Savaşçısı oyununu arkadaşlarına gösterirken ne kadar gururlu olduğunu görmek paha biçilemez. Kodu sayesinde teknoloji üreticisi oldu, sadece tüketicisi değil.",
      course: "Kodu",
      avatar: "👨‍💻"
    },
    {
      id: 3,
      parentName: "Ayşe Özkan",
      location: "İzmir",
      childName: "Zehra",
      childAge: 10,
      rating: 5,
      comment: "10 yaşındaki kızım için endişelerim vardı ama Kodu o kadar kolay ki çocuk hemen öğrendi. Hayvan Dostları projesini yaparken empati becerilerini de geliştirdi. Hem eğitici hem eğlenceli!",
      course: "Kodu",
      avatar: "👩‍⚕️"
    },
    {
      id: 4,
      parentName: "Kemal Arslan",
      location: "Bursa",
      childName: "Emir",
      childAge: 13,
      rating: 5,
      comment: "Emir'in problem çözme becerileri inanılmaz gelişti. Büyülü Orman RPG'sini yaparken karmaşık bulmacalar tasarlıyor. Matematik ve mantık derslerindeki başarısı da arttı. Çok değerli bir kurs!",
      course: "Kodu",
      avatar: "👨‍🔬"
    },
    {
      id: 5,
      parentName: "Gülsah Şahin",
      location: "Antalya",
      childName: "Nil",
      childAge: 11,
      rating: 5,
      comment: "Kızım Nil çok utangaçtı, şimdi oyunlarını herkese gururla tanıtıyor! Yarış Şampiyonu oyununu yaparken fizik prensiplerini de öğrenmiş. Özgüveni çok arttı, sosyalleşmeye başladı.",
      course: "Kodu",
      avatar: "👩‍🎨"
    },
    {
      id: 6,
      parentName: "Hakan Demir",
      location: "Adana",
      childName: "Berk",
      childAge: 9,
      rating: 5,
      comment: "9 yaşındaki oğlum için yaşına göre çok uygun. Görsel bloklar sayesinde kodlama mantığını kavradı. Artık 'büyüyünce oyun yapımcısı olacağım' diyor. Hayal kurmayı ve hedef belirlemeyi öğrendi!",
      course: "Kodu",
      avatar: "��‍🎮"
    }
  ]
}; 