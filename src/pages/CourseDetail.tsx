import { useParams } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { Users, Clock, Award, Star, CheckCircle, Code, Brain, Gamepad2, ExternalLink, Github, Play, Eye, ChevronLeft, ChevronRight } from 'lucide-react';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { DemoBookingModal } from '@/components/DemoBookingModal';
import { useState, useCallback, useEffect } from 'react';
import useEmblaCarousel from 'embla-carousel-react';
import codingFunImage from '@/assets/coding-fun.jpg';

const CourseDetail = () => {
  const { courseSlug } = useParams();
  const [isBookingModalOpen, setIsBookingModalOpen] = useState(false);

  // Sayfa yüklendiğinde en üste scroll yap
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [courseSlug]);

  const handleBookDemo = () => {
    setIsBookingModalOpen(true);
  };

  // Carousel hooks
  const [achievementsEmblaRef, achievementsEmblaApi] = useEmblaCarousel({ 
    align: 'start',
    slidesToScroll: 1,
    breakpoints: {
      '(min-width: 768px)': { slidesToScroll: 2 },
      '(min-width: 1024px)': { slidesToScroll: 3 }
    }
  });
  
  const [projectsEmblaRef, projectsEmblaApi] = useEmblaCarousel({ 
    align: 'start',
    slidesToScroll: 1,
    breakpoints: {
      '(min-width: 768px)': { slidesToScroll: 2 }
    }
  });

  const [testimonialsEmblaRef, testimonialsEmblaApi] = useEmblaCarousel({ 
    align: 'start',
    slidesToScroll: 1,
    breakpoints: {
      '(min-width: 768px)': { slidesToScroll: 2 },
      '(min-width: 1024px)': { slidesToScroll: 3 }
    }
  });

  const scrollAchievementsPrev = useCallback(() => {
    if (achievementsEmblaApi) achievementsEmblaApi.scrollPrev();
  }, [achievementsEmblaApi]);

  const scrollAchievementsNext = useCallback(() => {
    if (achievementsEmblaApi) achievementsEmblaApi.scrollNext();
  }, [achievementsEmblaApi]);

  const scrollProjectsPrev = useCallback(() => {
    if (projectsEmblaApi) projectsEmblaApi.scrollPrev();
  }, [projectsEmblaApi]);

  const scrollProjectsNext = useCallback(() => {
    if (projectsEmblaApi) projectsEmblaApi.scrollNext();
  }, [projectsEmblaApi]);

  const scrollTestimonialsPrev = useCallback(() => {
    if (testimonialsEmblaApi) testimonialsEmblaApi.scrollPrev();
  }, [testimonialsEmblaApi]);

  const scrollTestimonialsNext = useCallback(() => {
    if (testimonialsEmblaApi) testimonialsEmblaApi.scrollNext();
  }, [testimonialsEmblaApi]);

  // Kurs verilerini burada tanımlayacağız
  const courseData = {
    'python-ile-kodlama': {
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
             avatar: "👨‍🚗"
           }
         ]
       }
     };

  const course = courseData[courseSlug as keyof typeof courseData];

  if (!course) {
    return <div>Kurs bulunamadı</div>;
  }

  const scrollToCourseInfo = () => {
    const element = document.getElementById('course-info');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <Header onBookDemo={handleBookDemo} />
      
      {/* Hero Section */}
      <section id="home" className="pt-20 py-24 relative overflow-hidden" style={{
        background: 'linear-gradient(135deg, #1e40af 0%, #3b82f6 50%, #60a5fa 100%)'
      }}>
        <div className="absolute inset-0 bg-gradient-to-br from-blue-900/20 via-blue-600/10 to-blue-400/20"></div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Sol Taraf - Kurs Bilgileri */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="space-y-8"
            >
              <div className="space-y-4">
                <div className="flex items-center space-x-2 mb-4">
                  <div className="w-12 h-12 bg-yellow-400 rounded-2xl flex items-center justify-center">
                    <span className="text-2xl">🐍</span>
                  </div>
                  <Badge className="bg-orange-500 text-white">En Çok Tercih Edilen</Badge>
                </div>
                
                <motion.h1
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 }}
                  className="text-4xl md:text-5xl font-bold text-white leading-tight"
                  style={{ textShadow: '2px 2px 8px rgba(0,0,0,0.3)' }}
                >
                  {course.title}
                </motion.h1>
                
                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4 }}
                  className="text-lg text-white/90 leading-relaxed"
                  style={{ textShadow: '1px 1px 4px rgba(0,0,0,0.3)' }}
                >
                  {course.description}
                </motion.p>
              </div>

              {/* Kurs Özellikleri */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 }}
                className="grid grid-cols-2 gap-4"
              >
                <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 border border-white/20">
                  <div className="flex items-center text-yellow-300 mb-2">
                    <Users className="w-5 h-5 mr-2" />
                    <span className="text-sm font-medium">YAŞ</span>
                  </div>
                  <div className="text-xl font-bold text-white">{course.ageRange}</div>
                </div>
                
                <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 border border-white/20">
                  <div className="flex items-center text-yellow-300 mb-2">
                    <Clock className="w-5 h-5 mr-2" />
                    <span className="text-sm font-medium">SÜRE</span>
                  </div>
                  <div className="text-xl font-bold text-white">{course.duration}</div>
                </div>
                
                <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 border border-white/20">
                  <div className="flex items-center text-yellow-300 mb-2">
                    <Award className="w-5 h-5 mr-2" />
                    <span className="text-sm font-medium">SEVİYE</span>
                  </div>
                  <div className="text-xl font-bold text-white">{course.level}</div>
                </div>
                
                <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 border border-white/20">
                  <div className="flex items-center text-yellow-300 mb-2">
                    <Users className="w-5 h-5 mr-2" />
                    <span className="text-sm font-medium">GRUP</span>
                  </div>
                  <div className="text-xl font-bold text-white">{course.maxStudents}</div>
                </div>
              </motion.div>

              {/* CTA Butonları */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8 }}
                className="flex flex-col sm:flex-row gap-4"
              >
                <Button
                  size="lg"
                  onClick={handleBookDemo}
                  className="font-semibold text-lg px-8 py-6 transform transition-all duration-300 hover:scale-105"
                  style={{
                    background: 'linear-gradient(135deg, #f59e0b, #ea580c)',
                    color: 'white',
                    boxShadow: '0 8px 25px rgba(245, 158, 11, 0.4)',
                    textShadow: '1px 1px 2px rgba(0,0,0,0.3)',
                    border: 'none',
                    animation: 'gentleBounce 3s ease-in-out infinite'
                  }}
                >
                  Ücretsiz Deneme
                </Button>
                
                <Button
                  variant="outline"
                  size="lg"
                  onClick={scrollToCourseInfo}
                  className="font-semibold text-lg px-8 py-6 transform transition-all duration-300 hover:scale-105"
                  style={{
                    borderColor: '#fbbf24',
                    color: '#fbbf24',
                    background: 'rgba(251, 191, 36, 0.1)',
                    boxShadow: '0 4px 15px rgba(251, 191, 36, 0.3)',
                    textShadow: '1px 1px 1px rgba(0,0,0,0.2)'
                  }}
                >
                  Ders Hakkında
                </Button>
              </motion.div>
            </motion.div>

            {/* Sağ Taraf - Görsel */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative"
            >
              <div className="relative rounded-3xl overflow-hidden shadow-2xl">
                <img
                  src={codingFunImage}
                  alt="Python Kodlama Dersi"
                  className="w-full h-auto object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-blue-900/40 to-transparent"></div>
                
                {/* Rating Badge */}
                <div className="absolute top-6 left-6 bg-white/90 backdrop-blur-sm rounded-2xl p-3 shadow-lg">
                  <div className="flex items-center space-x-2">
                    <Star className="w-5 h-5 text-yellow-500 fill-current" />
                    <span className="font-bold text-gray-900">{course.rating}</span>
                    <span className="text-gray-600">({course.reviewCount})</span>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Kurs Açıklaması ve Öğrenecekleri */}
      <section id="course-info" className="py-24 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-16 items-start">
            {/* Sol Taraf - Kurs Açıklaması */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="space-y-8"
            >
              <div>
                <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
                  <span className="text-primary">Python ile Kodlama</span> kursu hakkında
                </h2>
                <div className="space-y-6 text-lg text-muted-foreground leading-relaxed">
                  <p>
                    Python ile Kodlama kursu, 10-13 yaş arası çocuklar için tasarlanmış kapsamlı bir programlama eğitimidir. 
                    Bu kursta çocuklar, dünyanın en popüler programlama dillerinden biri olan Python'u öğrenirler.
                  </p>
                  <p>
                    Kurs boyunca öğrenciler, <strong className="text-foreground">gerçek kod yazmayı</strong> öğrenirken, 
                    aynı zamanda problem çözme becerilerini geliştirirler. Her ders, eğlenceli projeler ve 
                    interaktif uygulamalarla desteklenir.
                  </p>
                  <p>
                    <strong className="text-foreground">4 yazılım mühendisi</strong> tarafından geliştirilen özel müfredat ile 
                    çocuğunuz, sektörün gerçek ihtiyaçlarına uygun bilgiler edinir. Kurs sonunda kendi mini projelerini 
                    geliştirebilecek seviyeye ulaşır.
                  </p>
                </div>

                {/* Öne Çıkan Özellikler */}
                <div className="mt-8 space-y-4">
                  <h3 className="text-xl font-bold text-foreground mb-4">Neden Bu Kurs?</h3>
                  <div className="space-y-3">
                    {[
                      { icon: Code, text: 'Gerçek Python programlama dili' },
                      { icon: Brain, text: 'Problem çözme odaklı öğrenme' },
                      { icon: Gamepad2, text: 'Oyun ve proje tabanlı eğitim' },
                      { icon: Users, text: 'Maksimum 4 kişilik mini gruplar' }
                    ].map((feature, index) => (
                      <div key={index} className="flex items-center space-x-3">
                        <div className="w-8 h-8 bg-primary/10 rounded-lg flex items-center justify-center">
                          <feature.icon className="w-5 h-5 text-primary" />
                        </div>
                        <span className="text-foreground font-medium">{feature.text}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Sağ Taraf - Ne Öğrenecekleri */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="lg:pl-8"
            >
              <div className="bg-gradient-to-br from-primary/5 via-secondary/5 to-accent/5 rounded-3xl p-8 border border-border">
                <h3 className="text-2xl font-bold text-foreground mb-6 flex items-center">
                  <div className="w-10 h-10 bg-secondary rounded-2xl flex items-center justify-center mr-4">
                    <span className="text-xl">🐍</span>
                  </div>
                  NE ÖĞRENECEKLERİ
                </h3>

                <div className="space-y-4">
                  {course.features.map((feature, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.1 }}
                      className="flex items-start space-x-4 group"
                    >
                      <div className="flex-shrink-0 w-6 h-6 bg-secondary rounded-full flex items-center justify-center mt-1 group-hover:scale-110 transition-transform">
                        <CheckCircle className="w-4 h-4 text-white" />
                      </div>
                      <div className="flex-1">
                        <p className="text-foreground font-medium leading-relaxed group-hover:text-secondary transition-colors">
                          {feature}
                        </p>
                      </div>
                    </motion.div>
                  ))}
                </div>

                {/* Alt Bilgi */}
                <div className="mt-8 p-6 bg-accent/10 rounded-2xl border border-accent/20">
                  <div className="flex items-center space-x-3 mb-3">
                    <div className="w-8 h-8 bg-accent rounded-lg flex items-center justify-center">
                      <Award className="w-5 h-5 text-accent-foreground" />
                    </div>
                    <h4 className="font-bold text-foreground">Kurs Sonunda</h4>
                  </div>
                  <p className="text-muted-foreground">
                    Çocuğunuz kendi <strong className="text-foreground">Python projesini</strong> yapabilecek, 
                    <strong className="text-foreground"> GitHub'da portfolio</strong> oluşturabilecek seviyeye ulaşacak.
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Detaylı Müfredat */}
      <section id="curriculum" className="py-24 bg-background-secondary">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-6">
              <span className="text-primary">Python ile Kodlama</span> ders içeriği
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              16 haftalık kapsamlı müfredat ile çocuğunuz Python programlamanın temellerinden 
              proje geliştirmeye kadar her aşamayı öğrenecek.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="max-w-4xl mx-auto"
          >
            <Accordion type="single" collapsible className="space-y-4">
              {course.curriculum.map((week, index) => (
                <AccordionItem 
                  key={index} 
                  value={`week-${week.week}`}
                  className="bg-card rounded-2xl border border-border overflow-hidden shadow-sm hover:shadow-brand transition-all duration-300"
                >
                  <AccordionTrigger className="px-8 py-6 hover:no-underline group">
                    <div className="flex items-center space-x-4 text-left w-full">
                      <div className="flex-shrink-0 w-12 h-12 bg-primary rounded-2xl flex items-center justify-center group-hover:bg-secondary transition-colors">
                        <span className="text-primary-foreground font-bold text-lg">
                          {week.week}
                        </span>
                      </div>
                      <div className="flex-1">
                        <h3 className="text-xl font-bold text-foreground group-hover:text-primary transition-colors">
                          {week.title}
                        </h3>
                        <p className="text-muted-foreground mt-1">
                          Proje: <span className="font-medium text-secondary">{week.project}</span>
                        </p>
                      </div>
                    </div>
                  </AccordionTrigger>
                  <AccordionContent className="px-8 pb-6">
                    <div className="pt-4 space-y-6">
                      {/* Konular */}
                      <div>
                        <h4 className="font-semibold text-foreground mb-3 flex items-center">
                          <Code className="w-5 h-5 mr-2 text-primary" />
                          Bu hafta öğrenecekleri:
                        </h4>
                        <div className="grid md:grid-cols-2 gap-3">
                          {week.topics.map((topic, topicIndex) => (
                            <div key={topicIndex} className="flex items-center space-x-3">
                              <div className="w-2 h-2 bg-secondary rounded-full flex-shrink-0"></div>
                              <span className="text-muted-foreground">{topic}</span>
                            </div>
                          ))}
                        </div>
                      </div>

                      {/* Proje */}
                      <div className="bg-accent/10 rounded-xl p-4 border border-accent/20">
                        <h4 className="font-semibold text-foreground mb-2 flex items-center">
                          <Award className="w-5 h-5 mr-2 text-accent" />
                          Hafta projesi:
                        </h4>
                        <p className="text-foreground font-medium">{week.project}</p>
                        <p className="text-sm text-muted-foreground mt-1">
                          Bu projede öğrendikleri konuları uygulayarak gerçek bir program geliştirecekler.
                        </p>
                      </div>
                    </div>
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>

            {/* Alt Bilgi */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
              className="mt-12 text-center"
            >
              <div className="bg-gradient-primary rounded-3xl p-8">
                <h3 className="text-2xl font-bold text-primary-foreground mb-4">
                  16 Hafta Sonunda Neler Yapabilecek?
                </h3>
                <div className="grid md:grid-cols-3 gap-6 text-primary-foreground/90">
                  <div className="space-y-2">
                    <div className="text-3xl">🐍</div>
                    <h4 className="font-semibold">Python Uzmanı</h4>
                    <p className="text-sm">Temel programlama kavramlarını bilir</p>
                  </div>
                  <div className="space-y-2">
                    <div className="text-3xl">💻</div>
                    <h4 className="font-semibold">Proje Geliştiricisi</h4>
                    <p className="text-sm">Kendi projelerini kodlayabilir</p>
                  </div>
                  <div className="space-y-2">
                    <div className="text-3xl">🚀</div>
                    <h4 className="font-semibold">GitHub Kullanıcısı</h4>
                    <p className="text-sm">Kodlarını paylaşabilir</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Öğrenci Projeleri Galerisi */}
      <section id="projects" className="py-24 bg-background">
        <div className="container mx-auto px-4">
          {/* Kazanımlar Carousel */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-20"
          >
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                <span className="text-secondary">16 Hafta Sonunda</span> Neler Yapabilecek?
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Python ile Kodlama kursu sonunda çocuğunuzun kazanacağı beceriler
              </p>
            </div>

            <div className="relative">
              <div className="embla overflow-hidden" ref={achievementsEmblaRef}>
                <div className="embla__container flex">
                  {course.achievements.map((achievement, index) => (
                    <div key={index} className="embla__slide flex-none w-full md:w-1/2 lg:w-1/3 px-3">
                      <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: index * 0.1 }}
                        className="bg-gradient-to-br from-primary/5 via-secondary/5 to-accent/5 rounded-2xl p-6 border border-border hover:shadow-brand transition-all duration-300 h-full"
                      >
                        <div className="text-center">
                          <div className="text-4xl mb-4">{achievement.icon}</div>
                          <h3 className="text-xl font-bold text-foreground mb-3">
                            {achievement.title}
                          </h3>
                          <p className="text-muted-foreground leading-relaxed">
                            {achievement.description}
                          </p>
                        </div>
                      </motion.div>
                    </div>
                  ))}
                </div>
              </div>
              
              {/* Navigation buttons */}
              <button
                onClick={scrollAchievementsPrev}
                className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 w-10 h-10 bg-white rounded-full shadow-lg border border-gray-200 flex items-center justify-center hover:bg-gray-50 transition-colors z-10"
              >
                <ChevronLeft className="w-5 h-5 text-gray-600" />
              </button>
              <button
                onClick={scrollAchievementsNext}
                className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 w-10 h-10 bg-white rounded-full shadow-lg border border-gray-200 flex items-center justify-center hover:bg-gray-50 transition-colors z-10"
              >
                <ChevronRight className="w-5 h-5 text-gray-600" />
              </button>
            </div>
          </motion.div>

          {/* Öğrenci Projeleri Carousel */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                <span className="text-primary">Öğrenci</span> Projeleri
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Kursumuzdan mezun olan öğrencilerimizin geliştirdiği gerçek Python projeleri
              </p>
            </div>

            <div className="relative">
              <div className="embla overflow-hidden" ref={projectsEmblaRef}>
                <div className="embla__container flex">
                  {course.studentProjects.map((project, index) => (
                    <div key={project.id} className="embla__slide flex-none w-full md:w-1/2 px-4">
                      <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: index * 0.1 }}
                        className="bg-card rounded-2xl overflow-hidden shadow-brand hover:shadow-glow transition-all duration-300 h-full border border-border group"
                      >
                        {/* Project Image */}
                        <div className="relative aspect-video bg-gradient-to-br from-primary/10 to-secondary/10 overflow-hidden">
                          <img
                            src={project.image}
                            alt={project.title}
                            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
                          
                          {/* Student Info */}
                          <div className="absolute bottom-4 left-4 text-white">
                            <div className="font-semibold">{project.student}</div>
                            <div className="text-sm opacity-90">{project.age} yaş</div>
                          </div>

                          {/* GitHub Badge */}
                          <div className="absolute top-4 right-4">
                            <div className="bg-black/20 backdrop-blur-sm rounded-lg px-3 py-1 flex items-center space-x-2">
                              <Github className="w-4 h-4 text-white" />
                              <span className="text-white text-sm font-medium">GitHub</span>
                            </div>
                          </div>
                        </div>

                        {/* Project Info */}
                        <div className="p-6">
                          <h3 className="text-xl font-bold text-foreground mb-2 group-hover:text-primary transition-colors">
                            {project.title}
                          </h3>
                          <p className="text-muted-foreground mb-4 leading-relaxed">
                            {project.description}
                          </p>

                          {/* Technologies */}
                          <div className="flex flex-wrap gap-2 mb-4">
                            {project.technologies.map((tech, techIndex) => (
                              <span
                                key={techIndex}
                                className="px-2 py-1 bg-secondary/10 text-secondary text-xs font-medium rounded-lg"
                              >
                                {tech}
                              </span>
                            ))}
                          </div>

                          {/* Action Buttons */}
                          <div className="flex space-x-3">
                            <Button
                              size="sm"
                              className="flex-1 bg-primary hover:bg-primary-hover text-primary-foreground"
                              onClick={() => window.open(project.githubUrl, '_blank')}
                            >
                              <Github className="w-4 h-4 mr-2" />
                              Kodu Gör
                            </Button>
                            <Button
                              size="sm"
                              variant="outline"
                              className="flex-1 border-secondary text-secondary hover:bg-secondary hover:text-secondary-foreground"
                            >
                              <Eye className="w-4 h-4 mr-2" />
                              Demo
                            </Button>
                          </div>
                        </div>
                      </motion.div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Navigation buttons */}
              <button
                onClick={scrollProjectsPrev}
                className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 w-10 h-10 bg-white rounded-full shadow-lg border border-gray-200 flex items-center justify-center hover:bg-gray-50 transition-colors z-10"
              >
                <ChevronLeft className="w-5 h-5 text-gray-600" />
              </button>
              <button
                onClick={scrollProjectsNext}
                className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 w-10 h-10 bg-white rounded-full shadow-lg border border-gray-200 flex items-center justify-center hover:bg-gray-50 transition-colors z-10"
              >
                <ChevronRight className="w-5 h-5 text-gray-600" />
              </button>
            </div>
          </motion.div>

          {/* Alt Bilgilendirme */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
            className="text-center mt-16"
          >
            <div className="bg-gradient-secondary rounded-3xl p-8">
              <h3 className="text-2xl font-bold text-primary-foreground mb-4">
                🚀 Çocuğunuz da bu projeleri yapabilir!
              </h3>
              <p className="text-primary-foreground/90 text-lg mb-6">
                Tüm projeler GitHub'da açık kaynak olarak paylaşılıyor. 
                Diğer öğrencilerimizin kodlarını inceleyebilir, ilham alabilirsiniz.
              </p>
              <Button 
                size="lg"
                onClick={handleBookDemo}
                className="bg-accent text-accent-foreground hover:bg-accent-hover font-semibold text-lg px-8 py-4"
              >
                Hemen Başlayalım
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Veli Yorumları */}
      <section id="testimonials" className="py-24 bg-background-secondary">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-6">
              Velilerimiz <span className="text-secondary">ne diyor?</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Python ile Kodlama kursuna katılan çocukların ebeveynlerinden gelen gerçek yorumlar
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="relative"
          >
            <div className="embla overflow-hidden" ref={testimonialsEmblaRef}>
              <div className="embla__container flex">
                {course.testimonials.map((testimonial, index) => (
                  <div key={testimonial.id} className="embla__slide flex-none w-full md:w-1/2 lg:w-1/3 px-4">
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.1 }}
                      className="bg-card rounded-2xl p-8 shadow-brand hover:shadow-glow transition-all duration-300 h-full border border-border group relative"
                    >
                      {/* Quote Icon */}
                      <div className="absolute top-6 right-6 text-4xl text-secondary/20 group-hover:text-secondary/30 transition-colors">
                        "
                      </div>

                      {/* Rating */}
                      <div className="flex items-center space-x-1 mb-6">
                        {[...Array(testimonial.rating)].map((_, starIndex) => (
                          <Star key={starIndex} className="w-5 h-5 text-yellow-400 fill-current" />
                        ))}
                        <span className="ml-2 text-sm text-muted-foreground font-medium">
                          ({testimonial.rating}.0)
                        </span>
                      </div>

                      {/* Comment */}
                      <blockquote className="text-foreground leading-relaxed mb-6 italic group-hover:text-foreground transition-colors">
                        "{testimonial.comment}"
                      </blockquote>

                      {/* Parent Info */}
                      <div className="flex items-center space-x-4 pt-4 border-t border-border">
                        <div className="w-12 h-12 bg-gradient-primary rounded-full flex items-center justify-center text-xl">
                          {testimonial.avatar}
                        </div>
                        <div className="flex-1">
                          <div className="font-semibold text-foreground group-hover:text-primary transition-colors">
                            {testimonial.parentName}
                          </div>
                          <div className="text-sm text-muted-foreground">
                            📍 {testimonial.location} • {testimonial.childName} ({testimonial.childAge} yaş)
                          </div>
                          <div className="text-xs text-secondary font-medium mt-1">
                            {testimonial.course}
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  </div>
                ))}
              </div>
            </div>

            {/* Navigation buttons */}
            <button
              onClick={scrollTestimonialsPrev}
              className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 w-12 h-12 bg-white rounded-full shadow-lg border border-gray-200 flex items-center justify-center hover:bg-gray-50 transition-colors z-10"
            >
              <ChevronLeft className="w-6 h-6 text-gray-600" />
            </button>
            <button
              onClick={scrollTestimonialsNext}
              className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 w-12 h-12 bg-white rounded-full shadow-lg border border-gray-200 flex items-center justify-center hover:bg-gray-50 transition-colors z-10"
            >
              <ChevronRight className="w-6 h-6 text-gray-600" />
            </button>
          </motion.div>

          {/* İstatistikler */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
            className="grid md:grid-cols-4 gap-8 mt-16"
          >
            {[
              { value: "4.9", label: "Ortalama Puan", icon: "⭐" },
              { value: "127", label: "Veli Yorumu", icon: "💬" },
              { value: "%98", label: "Memnuniyet", icon: "👍" },
              { value: "1000+", label: "Mutlu Aile", icon: "👨‍👩‍👧‍👦" }
            ].map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.5 + index * 0.1 }}
                className="text-center group"
              >
                <div className="text-3xl mb-3 group-hover:scale-110 transition-transform">
                  {stat.icon}
                </div>
                <div className="text-3xl font-bold text-primary mb-2 group-hover:text-secondary transition-colors">
                  {stat.value}
                </div>
                <div className="text-muted-foreground font-medium">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Alt CTA */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.6 }}
            className="text-center mt-16"
          >
            <div className="bg-gradient-primary rounded-3xl p-8">
              <h3 className="text-2xl font-bold text-primary-foreground mb-4">
                Siz de mutlu velilerimize katılın! 🎉
              </h3>
              <p className="text-primary-foreground/90 text-lg mb-6">
                Python ile Kodlama kursunda çocuğunuzun potansiyelini keşfedin. 
                İlk ders tamamen ücretsiz!
              </p>
              <Button 
                size="lg"
                onClick={handleBookDemo}
                className="bg-accent text-accent-foreground hover:bg-accent-hover font-semibold text-lg px-8 py-4 transform hover:scale-105 transition-all duration-300"
                style={{
                  animation: 'gentleBounce 3s ease-in-out infinite'
                }}
              >
                Ücretsiz Deneme Dersi Al 🚀
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      <section id="contact">
        <Footer onBookDemo={handleBookDemo} />
      </section>
      
      <DemoBookingModal
        isOpen={isBookingModalOpen}
        onClose={() => setIsBookingModalOpen(false)}
      />
    </div>
  );
};

export default CourseDetail; 