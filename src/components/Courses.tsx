import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Clock, Users, Award, ChevronRight, Puzzle, Code2, Globe, Box, Play, Palette, Calculator, BookOpen, Lock } from 'lucide-react';

interface CoursesProps {
  onBookDemo: () => void;
}

export const Courses = ({ onBookDemo }: CoursesProps) => {
  const navigate = useNavigate();

  const handleCourseClick = (slug: string) => {
    navigate(`/course/${slug}`);
  };

  const courseCategories = [
    {
      title: 'Blok Tabanlı Kodlama',
      description: 'Görsel programlama ile kodlamaya başlangıç',
      courses: [
        {
          title: 'Scratch',
          slug: 'scratch-ile-baslangic',
          description: 'Görsel programlama ile kodlamaya ilk adım. Oyun ve animasyon yaratma.',
          ageRange: '7-10 yaş',
          duration: '32 hafta',
          level: 'Başlangıç',
          features: ['Drag & Drop Kodlama', 'Oyun Tasarımı', 'Animasyon', 'Sanat Projeleri'],
          color: 'bg-accent/10 border-accent/20',
          icon: Puzzle,
          iconColor: 'text-orange-500',
          iconBg: 'bg-orange-50',
          badge: 'En Popüler'
        },
        {
          title: 'Kodu',
          slug: 'kodu',
          description: 'Görsel programlama ile oyun tasarımı. Karakter kontrolü ve dünya yaratma.',
          ageRange: '10-15 yaş',
          duration: '32 hafta',
          level: 'Orta',
          features: ['Görsel Programlama', 'Oyun Tasarımı', 'Karakter Kontrolü', '3D Dünyalar'],
          color: 'bg-primary/10 border-primary/20',
          icon: Play,
          iconColor: 'text-red-600',
          iconBg: 'bg-red-50'
        }
      ]
    },
    {
      title: 'Temel Kodlama ve Yazılım',
      description: 'Gerçek programlama dilleri ile yazılım geliştirme',
      courses: [
        {
          title: 'Python Basic',
          slug: 'python-basic',
          description: 'Gerçek programlama diline giriş. Temel algoritmalar ve mantık geliştirme.',
          ageRange: '9-12 yaş',
          duration: '32 hafta',
          level: 'Başlangıç',
          features: ['Temel Python', 'Problem Çözme', 'Matematik Uygulamaları', 'Mini Projeler'],
          color: 'bg-primary/10 border-primary/20',
          icon: Code2,
          iconColor: 'text-blue-600',
          iconBg: 'bg-blue-50',
          badge: 'Favorimiz'
        },
        {
          title: 'Python Pro',
          slug: 'python-pro',
          description: 'İleri seviye Python programlama. Karmaşık projeler ve algoritmalar.',
          ageRange: '13-17 yaş',
          duration: '32 hafta',
          level: 'İleri',
          features: ['Gelişmiş Python', 'Veri Yapıları', 'Algoritmalar', 'Büyük Projeler'],
          color: 'bg-primary/10 border-primary/20',
          icon: Code2,
          iconColor: 'text-blue-800',
          iconBg: 'bg-blue-100'
        },
        {
          title: 'Web Geliştirme',
          slug: 'web-gelistirme',
          description: 'HTML, CSS ve JavaScript ile web sitesi yapımı. Responsive tasarım.',
          ageRange: '12-17 yaş',
          duration: '32 hafta',
          level: 'İleri',
          features: ['HTML & CSS', 'JavaScript', 'Responsive Tasarım', 'Portfolio Oluşturma'],
          color: 'bg-secondary/10 border-secondary/20',
          icon: Globe,
          iconColor: 'text-green-600',
          iconBg: 'bg-green-50'
        }
      ]
    },
    {
      title: 'Dijital Tasarım ve Yaratıcılık',
      description: 'Yaratıcılık ve tasarım becerileri geliştirme',
      courses: [
        {
          title: 'Dijital Tasarım - Giriş',
          slug: 'dijital-tasarim-giris',
          description: 'Bilgisayar ile tanışma, Figma, Canva, Piskel App ile yaratıcı projeler.',
          ageRange: '9-12 yaş',
          duration: '32 hafta',
          level: 'Başlangıç',
          features: ['Bilgisayar Kullanımı', 'Figma', 'Canva', 'Piskel App'],
          color: 'bg-accent/10 border-accent/20',
          icon: Palette,
          iconColor: 'text-purple-600',
          iconBg: 'bg-purple-50'
        },
        {
          title: 'Dijital Tasarım - Pro',
          slug: 'dijital-tasarim-pro',
          description: 'Tinkercad ve GIMP ile ileri seviye dijital tasarım ve 3D modelleme.',
          ageRange: '13-17 yaş',
          duration: '32 hafta',
          level: 'İleri',
          features: ['Tinkercad 3D', 'GIMP', 'Grafik Tasarım', 'Profesyonel Projeler'],
          color: 'bg-accent/10 border-accent/20',
          icon: Box,
          iconColor: 'text-purple-800',
          iconBg: 'bg-purple-100'
        }
      ]
    },
    {
      title: 'İleride Gelecek Kurslar',
      description: 'Yakında açılacak yeni eğitim programları',
      courses: [
        {
          title: 'Temel Matematik',
          slug: 'temel-matematik',
          description: 'Programlama için gerekli matematik temelleri ve mantık geliştirme.',
          ageRange: '8-14 yaş',
          duration: 'Yakında',
          level: 'Başlangıç',
          features: ['Sayı Sistemleri', 'Mantık', 'Geometri', 'Problem Çözme'],
          color: 'bg-gray-100 border-gray-300',
          icon: Calculator,
          iconColor: 'text-gray-500',
          iconBg: 'bg-gray-200',
          disabled: true
        },
        {
          title: 'Çocuklar için Yazılım İngilizcesi',
          slug: 'yazilim-ingilizcesi',
          description: 'Programlama dünyasında kullanılan İngilizce terimler ve kavramlar.',
          ageRange: '10-16 yaş',
          duration: 'Yakında',
          level: 'Başlangıç',
          features: ['Teknik Terimler', 'Kod Okuma', 'Dokümantasyon', 'Uluslararası İletişim'],
          color: 'bg-gray-100 border-gray-300',
          icon: BookOpen,
          iconColor: 'text-gray-500',
          iconBg: 'bg-gray-200',
          disabled: true
        }
      ]
    }
  ];

  return (
    <section id="courses" className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-6">
            <span className="text-orange-400">Tüm</span> <span className="text-blue-600">Kurslarımız</span>
          </h2>
        </motion.div>

        <div className="space-y-16">
          {courseCategories.map((category, categoryIndex) => (
            <motion.div
              key={categoryIndex}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: categoryIndex * 0.2 }}
            >
              {/* Category Header */}
              <div className="text-center mb-12">
                <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
                  {category.title}
                </h3>
                <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                  {category.description}
                </p>
              </div>

              {/* Category Courses */}
              <div className={`grid gap-6 md:gap-8 ${category.courses.length === 1
                  ? 'grid-cols-1 justify-items-center'
                  : category.courses.length === 2
                    ? 'grid-cols-1 md:grid-cols-2 justify-items-center'
                    : 'grid-cols-1 md:grid-cols-2 lg:grid-cols-3'
                }`}>
                {category.courses.map((course, courseIndex) => (
                  <motion.div
                    key={courseIndex}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: courseIndex * 0.1 }}
                    whileHover={!course.disabled ? { y: -10 } : {}}
                    className="group w-full max-w-md mx-auto"
                  >
                    <div
                      className={`bg-card rounded-2xl p-6 md:p-8 shadow-brand transition-all duration-300 h-full border-2 ${course.color} relative overflow-hidden ${course.disabled
                          ? 'cursor-not-allowed opacity-60'
                          : 'cursor-pointer hover:shadow-glow'
                        }`}
                      onClick={() => !course.disabled && handleCourseClick(course.slug)}
                    >
                      {course.disabled && (
                        <div className="absolute top-4 right-4">
                          <Lock className="w-5 h-5 text-gray-500" />
                        </div>
                      )}

                      {course.badge && !course.disabled && (
                        <Badge className="absolute top-4 right-4 bg-accent text-accent-foreground">
                          {course.badge}
                        </Badge>
                      )}

                      {/* Course Icon */}
                      <div className="mb-6">
                        <div className={`w-12 h-12 md:w-16 md:h-16 ${course.iconBg} rounded-2xl flex items-center justify-center mb-4 ${!course.disabled ? 'group-hover:scale-110' : ''} transition-transform duration-300`}>
                          <course.icon className={`w-6 h-6 md:w-8 md:h-8 ${course.iconColor}`} />
                        </div>

                        <h3 className={`text-lg md:text-xl font-bold mb-3 transition-colors ${course.disabled
                            ? 'text-gray-500'
                            : 'text-foreground group-hover:text-secondary'
                          }`}>
                          {course.title}
                        </h3>
                        <p className={`text-sm md:text-base mb-4 leading-relaxed ${course.disabled ? 'text-gray-400' : 'text-muted-foreground'
                          }`}>
                          {course.description}
                        </p>
                      </div>

                      {/* Course Info */}
                      <div className="space-y-3 mb-6">
                        <div className={`flex items-center text-sm ${course.disabled ? 'text-gray-400' : 'text-muted-foreground'
                          }`}>
                          <Users className={`w-4 h-4 mr-2 ${course.disabled ? 'text-gray-400' : 'text-secondary'
                            }`} />
                          <span>{course.ageRange}</span>
                        </div>
                        <div className={`flex items-center text-sm ${course.disabled ? 'text-gray-400' : 'text-muted-foreground'
                          }`}>
                          <Clock className={`w-4 h-4 mr-2 ${course.disabled ? 'text-gray-400' : 'text-secondary'
                            }`} />
                          <span>{course.duration}</span>
                        </div>
                        <div className={`flex items-center text-sm ${course.disabled ? 'text-gray-400' : 'text-muted-foreground'
                          }`}>
                          <Award className={`w-4 h-4 mr-2 ${course.disabled ? 'text-gray-400' : 'text-secondary'
                            }`} />
                          <span>{course.level}</span>
                        </div>
                      </div>

                      {/* Features */}
                      <div className="mb-8">
                        <h4 className={`font-semibold mb-3 ${course.disabled ? 'text-gray-500' : 'text-foreground'
                          }`}>Öğrenecekleri:</h4>
                        <ul className="space-y-2">
                          {course.features.map((feature, featureIndex) => (
                            <li key={featureIndex} className={`flex items-center text-sm ${course.disabled ? 'text-gray-400' : 'text-muted-foreground'
                              }`}>
                              <ChevronRight className={`w-4 h-4 mr-2 ${course.disabled ? 'text-gray-400' : 'text-accent'
                                }`} />
                              {feature}
                            </li>
                          ))}
                        </ul>
                      </div>

                      {/* CTA Buttons */}
                      <div className="flex flex-col sm:flex-row space-y-2 sm:space-y-0 sm:space-x-3">
                        {course.disabled ? (
                          <Button
                            disabled
                            className="flex-1 bg-gray-300 text-gray-500 cursor-not-allowed"
                          >
                            Yakında Açılacak
                          </Button>
                        ) : (
                          <>
                            <Button
                              variant="outline"
                              onClick={(e) => {
                                e.stopPropagation();
                                handleCourseClick(course.slug);
                              }}
                              className="flex-1 border-primary text-primary hover:bg-primary hover:text-primary-foreground font-semibold transition-all duration-300 text-sm md:text-base"
                            >
                              📚 Kursu İncele
                            </Button>
                            <Button
                              onClick={(e) => {
                                e.stopPropagation();
                                onBookDemo();
                              }}
                              className="flex-1 bg-primary hover:bg-primary-hover text-primary-foreground font-semibold group-hover:bg-secondary group-hover:text-secondary-foreground transition-all duration-300 text-sm md:text-base"
                            >
                              Deneme Dersi Al
                            </Button>
                          </>
                        )}
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom Info */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mt-16 bg-gradient-primary rounded-3xl p-12"
        >
          <h3 className="text-2xl md:text-3xl font-bold text-primary-foreground mb-4">
            Hangi kursun çocuğunuz için uygun olduğundan emin değil misiniz?
          </h3>
          <p className="text-primary-foreground/80 text-lg mb-8">
            Hiç sorun değil. Ücretsiz danışmanlık görüşmesinde çocuğunuzun yaşına ve ilgi alanına
            en uygun programı birlikte belirleyelim!
          </p>
          <Button
            size="lg"
            onClick={onBookDemo}
            className="bg-accent text-accent-foreground hover:bg-accent-hover font-semibold text-lg px-8 py-6"
          >
            Ücretsiz Danışmanlık Al
          </Button>
        </motion.div>
      </div>
    </section>
  );
};