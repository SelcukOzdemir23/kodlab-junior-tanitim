import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Clock, Users, Award, ChevronRight } from 'lucide-react';

interface CoursesProps {
  onBookDemo: () => void;
}

export const Courses = ({ onBookDemo }: CoursesProps) => {
  const courses = [
    {
      title: 'Scratch ile Başlangıç',
      description: 'Görsel programlama ile kodlamaya ilk adım. Oyun ve animasyon yaratma.',
      ageRange: '6-9 yaş',
      duration: '12 hafta',
      level: 'Başlangıç',
      features: ['Drag & Drop Kodlama', 'Oyun Tasarımı', 'Animasyon', 'Sanat Projeleri'],
      color: 'bg-accent/10 border-accent/20',
      badge: 'En Popüler'
    },
    {
      title: 'Python ile Kodlama',
      description: 'Gerçek programlama diline giriş. Temel algoritmalar ve mantık geliştirme.',
      ageRange: '10-13 yaş',
      duration: '16 hafta',
      level: 'Orta',
      features: ['Metin Kodlama', 'Problem Çözme', 'Matematik Uygulamaları', 'Mini Projeler'],
      color: 'bg-primary/10 border-primary/20'
    },
    {
      title: 'Web Geliştirme',
      description: 'HTML, CSS ve JavaScript ile web sitesi yapımı. Responsive tasarım.',
      ageRange: '12-15 yaş',
      duration: '20 hafta',
      level: 'İleri',
      features: ['HTML & CSS', 'JavaScript', 'Responsive Tasarım', 'Portfolio Oluşturma'],
      color: 'bg-secondary/10 border-secondary/20'
    },
    {
      title: 'Mobil Uygulama',
      description: 'MIT App Inventor ile basit mobil uygulamalar geliştirme.',
      ageRange: '13-17 yaş',
      duration: '18 hafta',
      level: 'İleri',
      features: ['App Inventor', 'Mobil Tasarım', 'Database', 'Play Store Yayını'],
      color: 'bg-accent/10 border-accent/20'
    },
    {
      title: 'Oyun Geliştirme',
      description: 'Unity ile 2D oyun tasarımı. Oyun mekaniği ve karakter tasarımı.',
      ageRange: '14-17 yaş',
      duration: '24 hafta',
      level: 'İleri',
      features: ['Unity Engine', '2D Oyunlar', 'Karakter Tasarımı', 'Oyun Mekaniği'],
      color: 'bg-primary/10 border-primary/20',
      badge: 'Yeni'
    },
    {
      title: 'Robotik & Arduino',
      description: 'Fiziksel bilgi işlem. Sensörler ve robotik projeler.',
      ageRange: '11-16 yaş',
      duration: '16 hafta',
      level: 'Orta-İleri',
      features: ['Arduino', 'Sensörler', 'Motor Kontrolü', 'IoT Projeleri'],
      color: 'bg-secondary/10 border-secondary/20'
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
            Kodlama <span className="text-secondary">Kurslarımız</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Her yaş grubuna uygun, seviye seviye ilerleyen kapsamlı kodlama eğitim programları
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
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
              <div className={`bg-card rounded-2xl p-8 shadow-brand hover:shadow-glow transition-all duration-300 h-full border-2 ${course.color} relative overflow-hidden`}>
                {course.badge && (
                  <Badge className="absolute top-4 right-4 bg-accent text-accent-foreground">
                    {course.badge}
                  </Badge>
                )}

                <div className="mb-6">
                  <h3 className="text-xl font-bold text-foreground mb-3 group-hover:text-secondary transition-colors">
                    {course.title}
                  </h3>
                  <p className="text-muted-foreground mb-4 leading-relaxed">
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

                {/* CTA */}
                <Button 
                  onClick={onBookDemo}
                  className="w-full bg-primary hover:bg-primary-hover text-primary-foreground font-semibold group-hover:bg-secondary group-hover:text-secondary-foreground transition-all duration-300"
                >
                  Deneme Dersi Al
                </Button>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom Info */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mt-16 bg-gradient-secondary rounded-3xl p-12"
        >
          <h3 className="text-2xl md:text-3xl font-bold text-primary-foreground mb-4">
            Hangi kurs çocuğunuz için uygun?
          </h3>
          <p className="text-primary-foreground/80 text-lg mb-8">
            Ücretsiz danışmanlık görüşmesinde çocuğunuzun yaşına ve ilgi alanına 
            en uygun programı birlikte belirleyelim
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