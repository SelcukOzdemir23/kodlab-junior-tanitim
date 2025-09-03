import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Clock, Users, Award, ChevronRight, Puzzle, Code2, Globe, Box, Play, Palette } from 'lucide-react';

interface CoursesProps {
  onBookDemo: () => void;
}

export const Courses = ({ onBookDemo }: CoursesProps) => {
  const navigate = useNavigate();

  const handleCourseClick = (slug: string) => {
    navigate(`/course/${slug}`);
  };

  const courses = [
    {
      title: 'Scratch ile Başlangıç',
      slug: 'scratch-ile-baslangic',
      description: 'Görsel programlama ile kodlamaya ilk adım. Oyun ve animasyon yaratma.',
      ageRange: '6-9 yaş',
      duration: '12 hafta',
      level: 'Başlangıç',
      features: ['Drag & Drop Kodlama', 'Oyun Tasarımı', 'Animasyon', 'Sanat Projeleri'],
      color: 'bg-accent/10 border-accent/20',
      icon: Puzzle,
      iconColor: 'text-orange-500',
      iconBg: 'bg-orange-50',
      //badge: 'En Popüler'
    },
    {
      title: 'Python ile Kodlama',
      slug: 'python-ile-kodlama',
      description: 'Gerçek programlama diline giriş. Temel algoritmalar ve mantık geliştirme.',
      ageRange: '10-13 yaş',
      duration: '16 hafta',
      level: 'Orta',
      features: ['Metin Kodlama', 'Problem Çözme', 'Matematik Uygulamaları', 'Mini Projeler'],
      color: 'bg-primary/10 border-primary/20',
      icon: Code2,
      iconColor: 'text-blue-600',
      iconBg: 'bg-blue-50',
      badge: "Favorimiz"
    },
    {
      title: 'Web Geliştirme',
      slug: 'web-gelistirme',
      description: 'HTML, CSS ve JavaScript ile web sitesi yapımı. Responsive tasarım.',
      ageRange: '12-15 yaş',
      duration: '20 hafta',
      level: 'İleri',
      features: ['HTML & CSS', 'JavaScript', 'Responsive Tasarım', 'Portfolio Oluşturma'],
      color: 'bg-secondary/10 border-secondary/20',
      icon: Globe,
      iconColor: 'text-green-600',
      iconBg: 'bg-green-50'
    },
    {
      title: 'Tinkercad',
      slug: 'tinkercad',
      description: '3D tasarım ve modelleme. Yaratıcı projeler ve 3D baskı hazırlığı.',
      ageRange: '8-14 yaş',
      duration: '12 hafta',
      level: 'Başlangıç-Orta',
      features: ['3D Modelleme', 'Yaratıcı Tasarım', '3D Baskı Hazırlığı', 'Geometri Uygulamaları'],
      color: 'bg-accent/10 border-accent/20',
      icon: Box,
      iconColor: 'text-purple-600',
      iconBg: 'bg-purple-50'
    },
    {
      title: 'Kodu',
      slug: 'kodu',
      description: 'Görsel programlama ile oyun tasarımı. Karakter kontrolü ve dünya yaratma.',
      ageRange: '9-15 yaş',
      duration: '14 hafta',
      level: 'Orta',
      features: ['Görsel Programlama', 'Oyun Tasarımı', 'Karakter Kontrolü', '3D Dünyalar'],
      color: 'bg-primary/10 border-primary/20',
      icon: Play,
      iconColor: 'text-red-600',
      iconBg: 'bg-red-50',
      badge: ''
    },
    {
      title: 'GIMP',
      slug: 'gimp',
      description: 'Dijital sanat ve fotoğraf düzenleme. Yaratıcı projeler ve grafik tasarım.',
      ageRange: '10-16 yaş',
      duration: '10 hafta',
      level: 'Başlangıç-Orta',
      features: ['Fotoğraf Düzenleme', 'Dijital Sanat', 'Grafik Tasarım', 'Yaratıcı Projeler'],
      color: 'bg-secondary/10 border-secondary/20',
      icon: Palette,
      iconColor: 'text-indigo-600',
      iconBg: 'bg-indigo-50'
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
            Tüm <span className="text-secondary">Kurslarımız</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Her yaş grubuna uygun, seviye seviye ilerleyen kapsamlı eğitim programlarımız
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {courses.map((course, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -10 }}
              className="group"
            >
              <div
                className={`bg-card rounded-2xl p-6 md:p-8 shadow-brand hover:shadow-glow transition-all duration-300 h-full border-2 ${course.color} relative overflow-hidden cursor-pointer`}
                onClick={() => handleCourseClick(course.slug)}
              >
                {course.badge && (
                  <Badge className="absolute top-4 right-4 bg-accent text-accent-foreground">
                    {course.badge}
                  </Badge>
                )}

                {/* Course Icon */}
                <div className="mb-6">
                  <div className={`w-12 h-12 md:w-16 md:h-16 ${course.iconBg} rounded-2xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                    <course.icon className={`w-6 h-6 md:w-8 md:h-8 ${course.iconColor}`} />
                  </div>

                  <h3 className="text-lg md:text-xl font-bold text-foreground mb-3 group-hover:text-secondary transition-colors">
                    {course.title}
                  </h3>
                  <p className="text-sm md:text-base text-muted-foreground mb-4 leading-relaxed">
                    {course.description}
                  </p>
                </div>

                {/* Course Info */}
                <div className="space-y-3 mb-6">
                  <div className="flex items-center text-sm text-muted-foreground">
                    <Users className="w-4 h-4 mr-2 text-secondary" />
                    <span>{course.ageRange}</span>
                  </div>
                  <div className="flex items-center text-sm text-muted-foreground">
                    <Clock className="w-4 h-4 mr-2 text-secondary" />
                    <span>{course.duration}</span>
                  </div>
                  <div className="flex items-center text-sm text-muted-foreground">
                    <Award className="w-4 h-4 mr-2 text-secondary" />
                    <span>{course.level}</span>
                  </div>
                </div>

                {/* Features */}
                <div className="mb-8">
                  <h4 className="font-semibold text-foreground mb-3">Öğrenecekleri:</h4>
                  <ul className="space-y-2">
                    {course.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-sm text-muted-foreground">
                        <ChevronRight className="w-4 h-4 mr-2 text-accent" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* CTA Buttons */}
                <div className="flex flex-col sm:flex-row space-y-2 sm:space-y-0 sm:space-x-3">
                  <Button
                    variant="outline"
                    onClick={(e) => {
                      e.stopPropagation();
                      handleCourseClick(course.slug);
                    }}
                    className="flex-1 border-primary text-primary hover:bg-primary hover:text-primary-foreground font-semibold transition-all duration-300 text-sm md:text-base"
                  >
                    📖 Kursu İncele
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
                </div>
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