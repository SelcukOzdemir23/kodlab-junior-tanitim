import { useParams } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { Users, Clock, Award, Star, CheckCircle, Code, Brain, Gamepad2, ExternalLink, Github, Play, Eye, ChevronLeft, ChevronRight } from 'lucide-react';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { DemoBookingModal } from '@/components/DemoBookingModal';
import { WhatsAppFloat } from '@/components/WhatsAppFloat';
import { useState, useCallback, useEffect } from 'react';
import useEmblaCarousel from 'embla-carousel-react';
import codingFunImage from '@/assets/coding-fun.jpg';
import { getCourseBySlug } from '@/data/courses';
import { usePaintSplash } from '@/hooks/usePaintSplash';

const CourseDetail = () => {
  const { courseSlug } = useParams();
  const [isBookingModalOpen, setIsBookingModalOpen] = useState(false);
  usePaintSplash();

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

  // const [testimonialsEmblaRef, testimonialsEmblaApi] = useEmblaCarousel({ 
  //   align: 'start',
  //   slidesToScroll: 1,
  //   breakpoints: {
  //     '(min-width: 768px)': { slidesToScroll: 2 },
  //     '(min-width: 1024px)': { slidesToScroll: 3 }
  //   }
  // });

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

  // const scrollTestimonialsPrev = useCallback(() => {
  //   if (testimonialsEmblaApi) testimonialsEmblaApi.scrollPrev();
  // }, [testimonialsEmblaApi]);

  // const scrollTestimonialsNext = useCallback(() => {
  //   if (testimonialsEmblaApi) testimonialsEmblaApi.scrollNext();
  // }, [testimonialsEmblaApi]);

    // Kurs verisini data klasöründen al
  const course = getCourseBySlug(courseSlug || '');

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
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            {/* Sol Taraf - Kurs Bilgileri */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="space-y-8"
            >
              <div className="space-y-4">
                <div className="flex flex-col sm:flex-row sm:items-center space-y-2 sm:space-y-0 sm:space-x-2 mb-4">
                  <div className="w-12 h-12 bg-yellow-400 rounded-2xl flex items-center justify-center">
                    <span className="text-2xl">
                      {courseSlug === 'scratch-ile-baslangic' ? '🧩' : 
                       courseSlug === 'web-gelistirme' ? '🌐' :
                       courseSlug === 'tinkercad' ? '🛠️' :
                       courseSlug === 'kodu' ? '🎮' :
                       courseSlug === 'gimp' ? '🎨' :
                       courseSlug === 'python-basic' ? '🐍' :
                       courseSlug === 'python-pro' ? '🐍' :
                       courseSlug === 'dijital-tasarim-giris' ? '🎨' :
                       courseSlug === 'dijital-tasarim-pro' ? '🎨' : '🐍'}
                    </span>
                  </div>
                  <Badge className="bg-orange-500 text-white w-fit">
                    {courseSlug === 'scratch-ile-baslangic' ? 'Çocuklar İçin İdeal' : 
                     courseSlug === 'web-gelistirme' ? 'Geleceğin Teknolojisi' :
                     courseSlug === 'tinkercad' ? 'Yaratıcılık Odaklı' :
                     courseSlug === 'kodu' ? 'Eğlenceli' :
                     courseSlug === 'gimp' ? 'Sanat Odaklı' :
                     courseSlug === 'python-basic' ? 'Başlangıç Dostu' :
                     courseSlug === 'python-pro' ? 'İleri Seviye' :
                     courseSlug === 'dijital-tasarim-giris' ? 'Yaratıcılık Odaklı' :
                     courseSlug === 'dijital-tasarim-pro' ? 'Profesyonel' : 'En Çok Tercih Edilen'}
                  </Badge>
                </div>
                
                <motion.h1
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 }}
                  className="text-3xl sm:text-4xl md:text-5xl font-bold text-white leading-tight"
                  style={{ textShadow: '2px 2px 8px rgba(0,0,0,0.3)' }}
                >
                  {course.title}
                </motion.h1>
                
                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4 }}
                  className="text-base sm:text-lg text-white/90 leading-relaxed"
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
                className="grid grid-cols-2 gap-3 sm:gap-4"
              >
                <div className="bg-white/10 backdrop-blur-sm rounded-xl p-3 sm:p-4 border border-white/20">
                  <div className="flex items-center text-yellow-300 mb-2">
                    <Users className="w-4 h-4 sm:w-5 sm:h-5 mr-1 sm:mr-2" />
                    <span className="text-xs sm:text-sm font-medium">YAŞ</span>
                  </div>
                  <div className="text-lg sm:text-xl font-bold text-white">{course.ageRange}</div>
                </div>
                
                <div className="bg-white/10 backdrop-blur-sm rounded-xl p-3 sm:p-4 border border-white/20">
                  <div className="flex items-center text-yellow-300 mb-2">
                    <Clock className="w-4 h-4 sm:w-5 sm:h-5 mr-1 sm:mr-2" />
                    <span className="text-xs sm:text-sm font-medium">SÜRE</span>
                  </div>
                  <div className="text-lg sm:text-xl font-bold text-white">{course.duration}</div>
                </div>
                
                <div className="bg-white/10 backdrop-blur-sm rounded-xl p-3 sm:p-4 border border-white/20">
                  <div className="flex items-center text-yellow-300 mb-2">
                    <Award className="w-4 h-4 sm:w-5 sm:h-5 mr-1 sm:mr-2" />
                    <span className="text-xs sm:text-sm font-medium">SEVİYE</span>
                  </div>
                  <div className="text-lg sm:text-xl font-bold text-white">{course.level}</div>
                </div>
                
                <div className="bg-white/10 backdrop-blur-sm rounded-xl p-3 sm:p-4 border border-white/20">
                  <div className="flex items-center text-yellow-300 mb-2">
                    <Users className="w-4 h-4 sm:w-5 sm:h-5 mr-1 sm:mr-2" />
                    <span className="text-xs sm:text-sm font-medium">GRUP</span>
                  </div>
                  <div className="text-lg sm:text-xl font-bold text-white">
                    {course.maxStudents}
                  </div>
                </div>
              </motion.div>

              {/* CTA Butonları */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8 }}
                className="flex flex-col sm:flex-row gap-3 sm:gap-4"
              >
                <Button
                  size="lg"
                  onClick={handleBookDemo}
                  className="font-semibold text-base sm:text-lg px-6 sm:px-8 py-4 sm:py-6 transform transition-all duration-300 hover:scale-105"
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
                  className="font-semibold text-base sm:text-lg px-6 sm:px-8 py-4 sm:py-6 transform transition-all duration-300 hover:scale-105"
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
                  alt={`${course.title} Dersi`}
                  className="w-full h-auto object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-blue-900/40 to-transparent"></div>
                
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Kurs Açıklaması ve Öğrenecekleri */}
      <section id="course-info" className="py-24 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-start">
            {/* Sol Taraf - Kurs Açıklaması */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="space-y-8"
            >
              <div>
                <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-foreground mb-6">
                  <span className="text-primary">{course.title}</span> kursu hakkında
                </h2>
                <div className="space-y-4 sm:space-y-6 text-base sm:text-lg text-muted-foreground leading-relaxed">
                  {courseSlug === 'scratch-ile-baslangic' ? (
                    <>
                      <p>
                        Scratch ile Başlangıç kursu, 7-10 yaş arası çocuklar için tasarlanmış eğlenceli bir programlama eğitimidir. 
                        Bu kursta çocuklar, dünyada en çok kullanılan blok tabanlı programlama aracı olan Scratch ile kodlamayı öğrenirler.
                      </p>
                      <p>
                        Kurs boyunca öğrenciler, <strong className="text-foreground">sürükle bırak ile kod bloklarını</strong> kullanarak, 
                        kendi oyunlarını, animasyonlarını ve hikayelerini oluştururlar. Her ders, yaratıcı projeler ve 
                        eğlenceli aktivitelerle desteklenir.
                      </p>
                    </>
                  ) : courseSlug === 'tinkercad' ? (
                    <>
                      <p>
                        Tinkercad kursu, 8-14 yaş arası çocuklar için tasarlanmış kapsamlı bir 3D tasarım ve modelleme eğitimidir. 
                        Bu kursta çocuklar, Autodesk'in ücretsiz web tabanlı CAD aracı Tinkercad ile 3D dünyasına adım atarlar.
                      </p>
                      <p>
                        Kurs boyunca öğrenciler, <strong className="text-foreground">sürükle-bırak ile 3D şekilleri</strong> kullanarak, 
                        yaratıcı projeler ve fonksiyonel tasarımlar oluştururlar. Geometri, matematik ve mühendislik prensipleri 
                        eğlenceli projelerle öğretilir.
                      </p>
                      <p>
                        <strong className="text-foreground">STEM eğitimi uzmanları ve endüstriyel tasarımcılar</strong> tarafından geliştirilen 
                        yaş grupuna uygun müfredat ile çocuğunuz, 3D düşünme becerisi kazanırken yaratıcılığını da geliştirir. 
                        Kurs sonunda 3D baskıya hazır modeller tasarlayabilecek seviyeye ulaşır.
                      </p>
                    </>
                  ) : courseSlug === 'kodu' ? (
                    <>
                      <p>
                        Kodu kursu, 10-15 yaş arası çocuklar için tasarlanmış eğlenceli bir oyun tasarımı ve programlama eğitimidir. 
                        Bu kursta çocuklar, Microsoft'un özel olarak geliştirdiği Kodu platformu ile 3D oyunlar yaratırlar.
                      </p>
                      <p>
                        Kurs boyunca öğrenciler, <strong className="text-foreground">görsel programlama blokları</strong> kullanarak, 
                        kendi 3D oyun dünyalarını tasarlar, karakterleri kontrol eder ve eğlenceli oyun mekaniği oluştururlar. 
                        Her ders, yaratıcı oyun projeleri ve etkileşimli deneyimlerle desteklenir.
                      </p>
                     
                    </>
                  ) : courseSlug === 'gimp' ? (
                    <>
                      <p>
                        GIMP kursu, 10-16 yaş arası gençler için tasarlanmış kapsamlı bir dijital sanat ve fotoğraf düzenleme eğitimidir. 
                        Bu kursta gençler, dünyanın en güçlü açık kaynak görsel düzenleme aracı GIMP ile yaratıcı projeler geliştirir.
                      </p>
                      <p>
                        Kurs boyunca öğrenciler, <strong className="text-foreground">profesyonel düzenleme araçları</strong> kullanarak, 
                        fotoğraf düzenleme, dijital sanat oluşturma ve grafik tasarım becerilerini geliştirirler. Her ders, yaratıcı 
                        projeler ve sanatsal keşiflerle desteklenir.
                      </p>
                      <p>
                        <strong className="text-foreground">Dijital sanat uzmanları ve grafik tasarımcılar</strong> tarafından geliştirilen 
                        yaş grupuna uygun müfredat ile gencin, sanatsal yaratıcılığını teknoloji ile buluştururken görsel iletişim 
                        becerilerini de geliştirir. Kurs sonunda kendi dijital sanat portfolyosunu oluşturabilecek seviyeye ulaşır.
                      </p>
                    </>
                  ) : courseSlug === 'web-gelistirme' ? (
                    <>
                      <p>
                        Web Geliştirme kursu, 12-17 yaş arası gençler için tasarlanmış modern bir teknoloji eğitimidir. 
                        Bu kursta öğrenciler, HTML5, CSS3 ve JavaScript ile gerçek web siteleri ve uygulamaları geliştirirler.
                      </p>
                      <p>
                        Kurs boyunca öğrenciler, <strong className="text-foreground">profesyonel web teknolojilerini</strong> öğrenirken, 
                        responsive tasarım, kullanıcı deneyimi ve modern geliştirme araçlarını kullanırlar. Her ders, gerçek projeler ve 
                        sektörel uygulamalarla desteklenir.
                      </p>
                      <p>
                        <strong className="text-foreground">Sektör deneyimli yazılım mühendisleri</strong> tarafından geliştirilen güncel müfredat ile 
                        gençler, web geliştirme dünyasına adım atarlar. Kurs sonunda kendi web sitelerini yapabilecek ve 
                        internete yayınlayabilecek seviyeye ulaşırlar.
                      </p>
                    </>
                  ) : courseSlug === 'dijital-tasarim-giris' ? (
                    <>
                      <p>
                        Dijital Tasarım - Giriş kursu, 9-12 yaş arası çocuklar için tasarlanmış kapsamlı bir dijital tasarım ve yaratıcılık eğitimidir. 
                        Bu kursta çocuklar, bilgisayar kullanımı temellerinden başlayarak Figma, Canva ve Piskel App ile yaratıcı projeler geliştirir.
                      </p>
                      <p>
                        Kurs boyunca öğrenciler, <strong className="text-foreground">kullanıcı dostu tasarım araçları</strong> ile 
                        logo tasarımı, poster oluşturma, pixel art ve animasyon becerilerini geliştirirler. Her ders, yaratıcı 
                        projeler ve eğlenceli aktivitelerle desteklenir.
                      </p>
                      
                    </>
                  ) : courseSlug === 'dijital-tasarim-pro' ? (
                    <>
                      <p>
                        Dijital Tasarım - Pro kursu, 13-17 yaş arası gençler için tasarlanmış ileri seviye dijital tasarım eğitimidir. 
                        Bu kursta gençler, Tinkercad ile 3D modelleme ve GIMP ile profesyonel grafik tasarım becerilerini öğrenirler.
                      </p>
                      <p>
                        Kurs boyunca öğrenciler, <strong className="text-foreground">profesyonel tasarım araçları</strong> kullanarak, 
                        3D baskıya hazır modeller, marka kimliği tasarımları ve dijital sanat eserleri oluştururlar. Her ders, sektörel 
                        projeler ve profesyonel uygulamalarla desteklenir.
                      </p>
                      
                    </>
                  ) : (
                    <>
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
                    </>
                  )}
                </div>

                {/* Öne Çıkan Özellikler */}
                <div className="mt-8 space-y-4">
                  <h3 className="text-xl font-bold text-foreground mb-4">Neden Bu Kurs?</h3>
                  <div className="space-y-3">
                    {(() => {
                      const features = courseSlug === 'scratch-ile-baslangic' ? [
                        { icon: Code, text: 'Blok tabanlı kolay programlama' },
                        { icon: Brain, text: 'Yaratıcılık odaklı öğrenme' },
                        { icon: Gamepad2, text: 'Oyun ve animasyon tabanlı eğitim' },
                        { icon: Users, text: 'Premium 5 kişilik mini gruplar' }
                      ] : courseSlug === 'tinkercad' ? [
                        { icon: Code, text: '3D tasarım ve modelleme' },
                        { icon: Brain, text: 'STEM becerileri geliştirme' },
                        { icon: Gamepad2, text: 'Yaratıcı proje tabanlı eğitim' },
                        { icon: Users, text: 'Premium 4 kişilik mini gruplar' }
                      ] : courseSlug === 'kodu' ? [
                        { icon: Code, text: 'Görsel programlama blokları' },
                        { icon: Brain, text: 'Oyun tasarımı odaklı öğrenme' },
                        { icon: Gamepad2, text: '3D oyun ve dünya yaratma' },
                        { icon: Users, text: 'Premium 4 kişilik mini gruplar' }
                      ] : courseSlug === 'gimp' ? [
                        { icon: Code, text: 'Profesyonel düzenleme araçları' },
                        { icon: Brain, text: 'Sanat ve yaratıcılık odaklı öğrenme' },
                        { icon: Gamepad2, text: 'Dijital sanat ve fotoğraf projeler' },
                        { icon: Users, text: 'Premium 4 kişilik mini gruplar' }
                      ] : courseSlug === 'web-gelistirme' ? [
                        { icon: Code, text: 'Modern web teknolojileri' },
                        { icon: Brain, text: 'Proje odaklı öğrenme' },
                        { icon: Gamepad2, text: 'Gerçek web uygulamaları' },
                        { icon: Users, text: 'Premium 4 kişilik mini gruplar' }
                      ] : courseSlug === 'dijital-tasarim-giris' ? [
                        { icon: Code, text: 'Bilgisayar kullanımı temelleri' },
                        { icon: Brain, text: 'Yaratıcılık odaklı öğrenme' },
                        { icon: Gamepad2, text: 'Figma, Canva ve Piskel App' },
                        { icon: Users, text: 'Premium 4 kişilik mini gruplar' }
                      ] : courseSlug === 'dijital-tasarim-pro' ? [
                        { icon: Code, text: 'Tinkercad ve GIMP uzmanlığı' },
                        { icon: Brain, text: 'Profesyonel tasarım becerileri' },
                        { icon: Gamepad2, text: '3D modelleme ve grafik tasarım' },
                        { icon: Users, text: 'Premium 4 kişilik mini gruplar' }
                      ] : [
                        { icon: Code, text: 'Gerçek Python programlama dili' },
                        { icon: Brain, text: 'Problem çözme odaklı öğrenme' },
                        { icon: Gamepad2, text: 'Oyun ve proje tabanlı eğitim' },
                        { icon: Users, text: 'Premium 4 kişilik mini gruplar' }
                      ];
                      
                      return features.map((feature, index) => (
                      <div key={index} className="flex items-center space-x-3">
                        <div className="w-8 h-8 bg-primary/10 rounded-lg flex items-center justify-center">
                          <feature.icon className="w-5 h-5 text-primary" />
                        </div>
                        <span className="text-foreground font-medium">{feature.text}</span>
                      </div>
                      ));
                    })()}
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
              <div className="bg-gradient-to-br from-primary/5 via-secondary/5 to-accent/5 rounded-3xl p-6 sm:p-8 border border-border">
                <h3 className="text-xl sm:text-2xl font-bold text-foreground mb-6 flex items-center">
                  <div className="w-8 h-8 sm:w-10 sm:h-10 bg-secondary rounded-2xl flex items-center justify-center mr-3 sm:mr-4">
                    <span className="text-lg sm:text-xl">
                      {courseSlug === 'scratch-ile-baslangic' ? '🧩' : 
                       courseSlug === 'web-gelistirme' ? '🌐' :
                       courseSlug === 'tinkercad' ? '🛠️' :
                       courseSlug === 'kodu' ? '🎮' :
                       courseSlug === 'gimp' ? '🎨' :
                       courseSlug === 'python-basic' ? '🐍' :
                       courseSlug === 'python-pro' ? '🐍' :
                       courseSlug === 'dijital-tasarim-giris' ? '🎨' :
                       courseSlug === 'dijital-tasarim-pro' ? '🎨' : '🐍'}
                    </span>
                  </div>
                  <span className="text-base sm:text-xl">NE ÖĞRENECEKLERİ</span>
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
                <div className="mt-6 sm:mt-8 p-4 sm:p-6 bg-accent/10 rounded-2xl border border-accent/20">
                  <div className="flex items-center space-x-3 mb-3">
                    <div className="w-8 h-8 bg-accent rounded-lg flex items-center justify-center">
                      <Award className="w-5 h-5 text-accent-foreground" />
                    </div>
                    <h4 className="font-bold text-foreground">Kurs Sonunda</h4>
                  </div>
                  <p className="text-muted-foreground">
                    {courseSlug === 'scratch-ile-baslangic' 
                      ? <>Çocuğunuz kendi <strong className="text-foreground">Scratch oyununu</strong> yapabilecek, <strong className="text-foreground">yaratıcı projeler</strong> geliştirebilecek seviyeye ulaşacak.</>
                      : courseSlug === 'tinkercad'
                      ? <>Çocuğunuz kendi <strong className="text-foreground">3D modellerini</strong> tasarlayabilecek, <strong className="text-foreground">3D baskıya hazır projeler</strong> oluşturabilecek seviyeye ulaşacak.</>
                      : courseSlug === 'kodu'
                      ? <>Çocuğunuz kendi <strong className="text-foreground">3D oyunlarını</strong> tasarlayabilecek, <strong className="text-foreground">etkileşimli dünyalar</strong> oluşturabilecek seviyeye ulaşacak.</>
                      : courseSlug === 'gimp'
                      ? <>Gencin kendi <strong className="text-foreground">dijital sanat eserlerini</strong> yapabilecek, <strong className="text-foreground">profesyonel portfolyo</strong> oluşturabilecek seviyeye ulaşacak.</>
                      : courseSlug === 'web-gelistirme'
                      ? <>Gencin kendi <strong className="text-foreground">web sitesini</strong> yapabilecek, <strong className="text-foreground">internete yayınlayabilecek</strong> seviyeye ulaşacak.</>
                      : courseSlug === 'dijital-tasarim-giris'
                      ? <>Çocuğunuz kendi <strong className="text-foreground">dijital tasarımlarını</strong> yapabilecek, <strong className="text-foreground">yaratıcı portfolyo</strong> oluşturabilecek seviyeye ulaşacak.</>
                      : courseSlug === 'dijital-tasarim-pro'
                      ? <>Gencin kendi <strong className="text-foreground">3D modellerini ve grafik tasarımlarını</strong> yapabilecek, <strong className="text-foreground">profesyonel portfolyo</strong> oluşturabilecek seviyeye ulaşacak.</>
                      : courseSlug === 'python-basic' || courseSlug === 'python-pro' || courseSlug === 'python-ile-kodlama'
                      ? <>Çocuğunuz kendi <strong className="text-foreground">Python projesini</strong> yapabilecek, <strong className="text-foreground"> GitHub'da portfolio</strong> oluşturabilecek seviyeye ulaşacak.</>
                      : <>Çocuğunuz bu kursta <strong className="text-foreground">yaratıcı projeler</strong> yapabilecek, <strong className="text-foreground">kendi portfolyosunu</strong> oluşturabilecek seviyeye ulaşacak.</>
                    }
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Detaylı Müfredat */}
      {/* <section id="curriculum" className="py-24 bg-background-secondary">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-6">
              <span className="text-primary">{course.title}</span> ders içeriği
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              {courseSlug === 'scratch-ile-baslangic' 
                ? '12 haftalık eğlenceli müfredat ile çocuğunuz Scratch programlamanın temellerinden oyun geliştirmeye kadar her aşamayı öğrenecek.'
                : courseSlug === 'tinkercad'
                ? '12 haftalık yaratıcı müfredat ile çocuğunuz 3D tasarım temellerinden 3D baskıya hazır modellere kadar her aşamayı öğrenecek.'
                : courseSlug === 'kodu'
                ? '14 haftalık eğlenceli müfredat ile çocuğunuz görsel programlama temellerinden 3D oyun tasarımına kadar her aşamayı öğrenecek.'
                : courseSlug === 'gimp'
                ? '10 haftalık sanatsal müfredat ile gençler dijital sanat temellerinden profesyonel portfolyo oluşturmaya kadar her aşamayı öğrenecek.'
                : courseSlug === 'web-gelistirme'
                ? '16 haftalık kapsamlı müfredat ile gençler web teknolojilerinin temellerinden canlı web sitesi yayınlamaya kadar her aşamayı öğrenecek.'
                : '16 haftalık kapsamlı müfredat ile çocuğunuz Python programlamanın temellerinden proje geliştirmeye kadar her aşamayı öğrenecek.'
              }
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

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
              className="mt-12 text-center"
            >
              <div className="bg-gradient-primary rounded-3xl p-8">
                <h3 className="text-2xl font-bold text-primary-foreground mb-4">
                  {courseSlug === 'scratch-ile-baslangic' ? '12 Hafta Sonunda Neler Yapabilecek?' :
                   courseSlug === 'tinkercad' ? '12 Hafta Sonunda Neler Yapabilecek?' :
                   courseSlug === 'kodu' ? '14 Hafta Sonunda Neler Yapabilecek?' :
                   courseSlug === 'gimp' ? '10 Hafta Sonunda Neler Yapabilecek?' :
                   courseSlug === 'web-gelistirme' ? '16 Hafta Sonunda Neler Yapabilecek?' : '16 Hafta Sonunda Neler Yapabilecek?'}
                </h3>
                <div className="grid md:grid-cols-3 gap-6 text-primary-foreground/90">
                  {courseSlug === 'scratch-ile-baslangic' ? (
                    <>
                      <div className="space-y-2">
                        <div className="text-3xl">🧩</div>
                        <h4 className="font-semibold">Scratch Uzmanı</h4>
                        <p className="text-sm">Blok programlama kavramlarını bilir</p>
                      </div>
                      <div className="space-y-2">
                        <div className="text-3xl">🎮</div>
                        <h4 className="font-semibold">Oyun Geliştiricisi</h4>
                        <p className="text-sm">Kendi oyunlarını tasarlayabilir</p>
                      </div>
                      <div className="space-y-2">
                        <div className="text-3xl">🎨</div>
                        <h4 className="font-semibold">Yaratıcı Tasarımcı</h4>
                        <p className="text-sm">Animasyon ve hikaye oluşturabilir</p>
                      </div>
                    </>
                  ) : courseSlug === 'tinkercad' ? (
                    <>
                      <div className="space-y-2">
                        <div className="text-3xl">🛠️</div>
                        <h4 className="font-semibold">3D Tasarımcı</h4>
                        <p className="text-sm">3D modelleme ve tasarım yapabilir</p>
                      </div>
                      <div className="space-y-2">
                        <div className="text-3xl">🖨️</div>
                        <h4 className="font-semibold">3D Baskı Uzmanı</h4>
                        <p className="text-sm">Baskıya hazır modeller oluşturabilir</p>
                      </div>
                      <div className="space-y-2">
                        <div className="text-3xl">🎯</div>
                        <h4 className="font-semibold">STEM Uzmanı</h4>
                        <p className="text-sm">Matematik ve geometri becerilerini geliştirir</p>
                      </div>
                    </>
                  ) : courseSlug === 'kodu' ? (
                    <>
                      <div className="space-y-2">
                        <div className="text-3xl">🎮</div>
                        <h4 className="font-semibold">Oyun Tasarımcısı</h4>
                        <p className="text-sm">3D oyunlar tasarlayıp geliştirebilir</p>
                      </div>
                      <div className="space-y-2">
                        <div className="text-3xl">🕹️</div>
                        <h4 className="font-semibold">Görsel Programcı</h4>
                        <p className="text-sm">Blok tabanlı programlama ile mantık kurabilir</p>
                      </div>
                      <div className="space-y-2">
                        <div className="text-3xl">🌍</div>
                        <h4 className="font-semibold">Dünya Yaratıcısı</h4>
                        <p className="text-sm">3D oyun dünyaları ve karakterler oluşturabilir</p>
                      </div>
                    </>
                  ) : courseSlug === 'gimp' ? (
                    <>
                      <div className="space-y-2">
                        <div className="text-3xl">🎨</div>
                        <h4 className="font-semibold">Dijital Sanatçı</h4>
                        <p className="text-sm">Özgün dijital sanat eserleri oluşturabilir</p>
                      </div>
                      <div className="space-y-2">
                        <div className="text-3xl">📷</div>
                        <h4 className="font-semibold">Fotoğraf Editörü</h4>
                        <p className="text-sm">Profesyonel fotoğraf düzenleme yapabilir</p>
                      </div>
                      <div className="space-y-2">
                        <div className="text-3xl">🖼️</div>
                        <h4 className="font-semibold">Portfolio Sahibi</h4>
                        <p className="text-sm">Kendi sanat portfolyosunu oluşturabilir</p>
                      </div>
                    </>
                  ) : courseSlug === 'web-gelistirme' ? (
                    <>
                      <div className="space-y-2">
                        <div className="text-3xl">🌐</div>
                        <h4 className="font-semibold">Web Geliştiricisi</h4>
                        <p className="text-sm">Modern web siteleri yapabilir</p>
                      </div>
                      <div className="space-y-2">
                        <div className="text-3xl">📱</div>
                        <h4 className="font-semibold">Responsive Tasarımcı</h4>
                        <p className="text-sm">Mobil uyumlu siteler geliştirir</p>
                      </div>
                      <div className="space-y-2">
                        <div className="text-3xl">🚀</div>
                        <h4 className="font-semibold">Deployment Uzmanı</h4>
                        <p className="text-sm">Web sitelerini canlıya alabilir</p>
                      </div>
                    </>
                  ) : (
                    <>
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
                    </>
                  )}
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section> */}

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
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-foreground mb-4">
                <span className="text-secondary">
                  32  Hafta Sonunda
                </span> Neler Yapabilecek?
              </h2>
              <p className="text-base sm:text-lg text-muted-foreground max-w-2xl mx-auto">
                {courseSlug === 'scratch-ile-baslangic' 
                  ? 'Scratch ile Başlangıç kursu sonunda çocuğunuzun kazanacağı beceriler'
                  : courseSlug === 'tinkercad'
                  ? 'Tinkercad kursu sonunda çocuğunuzun kazanacağı beceriler'
                  : courseSlug === 'kodu'
                  ? 'Kodu kursu sonunda çocuğunuzun kazanacağı beceriler'
                  : courseSlug === 'gimp'
                  ? 'GIMP kursu sonunda gencin kazanacağı beceriler'
                  : courseSlug === 'web-gelistirme'
                  ? 'Web Geliştirme kursu sonunda gencin kazanacağı beceriler'
                  : courseSlug === 'python-basic'
                  ? 'Python Basic kursu sonunda çocuğunuzun kazanacağı beceriler'
                  : courseSlug === 'python-pro'
                  ? 'Python Pro kursu sonunda gencin kazanacağı beceriler'
                  : courseSlug === 'dijital-tasarim-giris'
                  ? 'Dijital Tasarım Giriş kursu sonunda çocuğunuzun kazanacağı beceriler'
                  : courseSlug === 'dijital-tasarim-pro'
                  ? 'Dijital Tasarım Pro kursu sonunda gencin kazanacağı beceriler'
                  : 'Python ile Kodlama kursu sonunda çocuğunuzun kazanacağı beceriler'
                }
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
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-foreground mb-4">
                <span className="text-primary">Öğrenci</span> Projeleri
              </h2>
              <p className="text-base sm:text-lg text-muted-foreground max-w-2xl mx-auto">
                Kursumuzdan mezun olan öğrencilerimizin geliştirdiği gerçek projeler
              </p>
            </div>

            <div className="relative">
              <div className="embla overflow-hidden" ref={projectsEmblaRef}>
                <div className="embla__container flex">
                  {course.studentProjects.map((project, index) => (
                    <div key={project.id} className="embla__slide flex-none w-full md:w-1/2 px-2 sm:px-4">
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
                        <div className="p-4 sm:p-6">
                          <h3 className="text-lg sm:text-xl font-bold text-foreground mb-2 group-hover:text-primary transition-colors">
                            {project.title}
                          </h3>
                          <p className="text-sm sm:text-base text-muted-foreground mb-4 leading-relaxed">
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
                          <div className="flex flex-col sm:flex-row space-y-2 sm:space-y-0 sm:space-x-3">
                            <Button
                              size="sm"
                              className="flex-1 bg-primary hover:bg-primary-hover text-primary-foreground text-xs sm:text-sm"
                              onClick={() => window.open(project.githubUrl, '_blank')}
                            >
                              <Github className="w-3 h-3 sm:w-4 sm:h-4 mr-1 sm:mr-2" />
                              {courseSlug?.includes('dijital-tasarim') ? 'Tasarımı Gör' : 
                               courseSlug === 'scratch-ile-baslangic' ? 'Projeyi Gör' :
                               courseSlug === 'kodu' ? 'Oyunu Gör' : 'Kodu Gör'}
                            </Button>
                            <Button
                              size="sm"
                              variant="outline"
                              className="flex-1 border-secondary text-secondary hover:bg-secondary hover:text-secondary-foreground text-xs sm:text-sm"
                            >
                              <Eye className="w-3 h-3 sm:w-4 sm:h-4 mr-1 sm:mr-2" />
                              {courseSlug?.includes('dijital-tasarim') ? 'Galeri' :
                               courseSlug === 'scratch-ile-baslangic' ? 'Oyna' :
                               courseSlug === 'kodu' ? 'Oyna' : 'Demo'}
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
            <div className="bg-gradient-primary rounded-3xl p-6 sm:p-8">
              <h3 className="text-xl sm:text-2xl font-bold text-primary-foreground mb-4">
                🚀 Çocuğunuz da bu projeleri yapabilir!
              </h3>
              <p className="text-primary-foreground/90 text-base sm:text-lg mb-6">
                {courseSlug === 'scratch-ile-baslangic' 
                  ? 'Tüm projeler Scratch topluluk sitesinde paylaşılıyor. Diğer öğrencilerimizin oyunlarını oynayabilir, ilham alabilirsiniz.'
                  : courseSlug === 'tinkercad'
                  ? 'Tüm projeler Tinkercad galerisinde paylaşılıyor. Diğer öğrencilerimizin 3D modellerini inceleyebilir, ilham alabilirsiniz.'
                  : courseSlug === 'kodu'
                  ? 'Tüm projeler Kodu topluluk sitesinde paylaşılıyor. Diğer öğrencilerimizin 3D oyunlarını oynayabilir, ilham alabilirsiniz.'
                  : courseSlug === 'gimp'
                  ? 'Tüm projeler dijital sanat galerisinde paylaşılıyor. Diğer öğrencilerimizin sanat eserlerini inceleyebilir, ilham alabilirsiniz.'
                  : courseSlug === 'web-gelistirme'
                  ? 'Tüm projeler GitHub\'da açık kaynak olarak paylaşılıyor. Diğer öğrencilerimizin web sitelerini inceleyebilir, ilham alabilirsiniz.'
                  : courseSlug === 'dijital-tasarim-giris'
                  ? 'Tüm projeler dijital tasarım galerisinde paylaşılıyor. Diğer öğrencilerimizin yaratıcı çalışmalarını inceleyebilir, ilham alabilirsiniz.'
                  : courseSlug === 'dijital-tasarim-pro'
                  ? 'Tüm projeler dijital portfolyo galerisinde paylaşılıyor. Diğer öğrencilerimizin profesyonel tasarımlarını inceleyebilir, ilham alabilirsiniz.'
                  : 'Tüm projeler GitHub\'da açık kaynak olarak paylaşılıyor. Diğer öğrencilerimizin kodlarını inceleyebilir, ilham alabilirsiniz.'
                }
              </p>
              <Button 
                size="lg"
                onClick={handleBookDemo}
                className="bg-accent text-accent-foreground hover:bg-accent-hover font-semibold text-base sm:text-lg px-6 sm:px-8 py-3 sm:py-4 transform hover:scale-105 transition-all duration-300"
                style={{
                  animation: 'gentleBounce 3s ease-in-out infinite'
                }}
              >
                Hemen Başlayalım
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Veli Yorumları Bölümü Geçici Olarak Kaldırıldı */}

      <section id="contact">
        <Footer onBookDemo={handleBookDemo} />
      </section>
      
      <DemoBookingModal
        isOpen={isBookingModalOpen}
        onClose={() => setIsBookingModalOpen(false)}
      />
      
      {/* WhatsApp Float Button */}
      <WhatsAppFloat />
    </div>
  );
};

export default CourseDetail; 