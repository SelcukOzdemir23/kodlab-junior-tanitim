import { motion } from 'framer-motion';
import { Brain, Gamepad2, Users, Award, Clock, Heart } from 'lucide-react';

export const Features = () => {
  const features = [
    {
      icon: Gamepad2,
      title: 'Eğlenceli Öğrenme',
      description: 'Oyun temelli öğrenme yöntemiyle kodlama hiç bu kadar eğlenceli olmamıştı',
      color: 'accent'
    },
    {
      icon: Brain,
      title: 'Yaratıcı Düşünce',
      description: 'Problem çözme becerilerini geliştiren, yaratıcılığı destekleyen program',
      color: 'primary'
    },
    {
      icon: Users,
      title: 'Küçük Sınıflar',
      description: 'Maksimum 8 kişilik küçük gruplarla kişiselleştirilmiş öğrenme deneyimi',
      color: 'secondary'
    },
    {
      icon: Award,
      title: 'Sertifika Programı',
      description: 'Her seviyeyi tamamladığında çocuğun başarısını belgeleyen sertifika',
      color: 'accent'
    },
    {
      icon: Clock,
      title: 'Esnek Saatler',
      description: 'Hafta içi ve hafta sonu çeşitli saat seçenekleriyle uygun program',
      color: 'primary'
    },
    {
      icon: Heart,
      title: 'Deneyimli Eğitmenler',
      description: 'Çocuk gelişimi uzmanı ve teknoloji alanında deneyimli eğitmenler',
      color: 'secondary'
    }
  ];

  return (
    <section id="about" className="py-24 bg-background-secondary">
      <div className="container mx-auto px-4">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-6">
            Burada çocuklar kendi <span className="text-secondary">yollarını</span> çiziyor
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            KodLab Junior'da çocuklar sadece kod öğrenmekle kalmıyor, 
            aynı zamanda problem çözme becerilerini geliştiriyor ve yaratıcılıklarını keşfediyorlar.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -10 }}
              className="group"
            >
              <div className="bg-card rounded-2xl p-8 shadow-brand hover:shadow-glow transition-all duration-300 h-full border border-border hover:border-secondary/20">
                <div className={`w-16 h-16 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 ${
                  feature.color === 'accent' ? 'bg-accent/10 text-accent' :
                  feature.color === 'primary' ? 'bg-primary/10 text-primary' :
                  'bg-secondary/10 text-secondary'
                }`}>
                  <feature.icon className="w-8 h-8" />
                </div>
                
                <h3 className="text-xl font-bold text-foreground mb-4 group-hover:text-secondary transition-colors">
                  {feature.title}
                </h3>
                
                <p className="text-muted-foreground leading-relaxed">
                  {feature.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <div className="bg-gradient-primary rounded-3xl p-12 text-center">
            <h3 className="text-2xl md:text-3xl font-bold text-primary-foreground mb-4">
              Çocuğunuzun kodlama yolculuğu başlasın!
            </h3>
            <p className="text-primary-foreground/80 text-lg mb-6">
              İlk derste ne öğreneceğini keşfetmek için ücretsiz deneme dersine katılın
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};