import { motion } from 'framer-motion';
import { Star, Quote } from 'lucide-react';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';

export const Testimonials = () => {
  const testimonials = [
    {
      name: 'Ayşe Demir',
      role: 'Ali\'nin annesi (9 yaş)',
      content: 'Ali evde sürekli Scratch projeleri yapıyor. Kodlama ile tanışması hem yaratıcılığını hem de problem çözme becerisini çok geliştirdi.',
      rating: 5,
      avatar: '/lovable-uploads/c40372a4-e265-4c54-a390-8b009b40f64d.png'
    },
    {
      name: 'Mehmet Kaya',
      role: 'Zehra\'nın babası (12 yaş)',
      content: 'Kızım Python öğrenmeye başladıktan sonra matematiğe de daha çok ilgi duymaya başladı. Eğitmenler gerçekten çok sabırlı ve anlayışlı.',
      rating: 5,
      avatar: '/lovable-uploads/c40372a4-e265-4c54-a390-8b009b40f64d.png'
    },
    {
      name: 'Fatma Özkan',
      role: 'Arda\'nın annesi (14 yaş)',
      content: 'Web tasarım kursundaki projeler sayesinde oğlum kendi portfolyo sitesini yaptı. Bu başarı onu çok motive etti.',
      rating: 5,
      avatar: '/lovable-uploads/c40372a4-e265-4c54-a390-8b009b40f64d.png'
    },
    {
      name: 'Ahmet Şahin',
      role: 'Elif\'in babası (11 yaş)',
      content: 'Robotik kursunda Arduino ile yaptığı projeler bizi gerçekten şaşırttı. Çocuklar bu yaşta bunları öğrenebiliyormuş.',
      rating: 5,
      avatar: '/lovable-uploads/c40372a4-e265-4c54-a390-8b009b40f64d.png'
    },
    {
      name: 'Sibel Yılmaz',
      role: 'Can\'ın annesi (7 yaş)',
      content: 'Can ilk dersten itibaren kodlamayı çok sevdi. Artık tablet yerine kodlama yapmak istiyor. Bu değişim harika!',
      rating: 5,
      avatar: '/lovable-uploads/c40372a4-e265-4c54-a390-8b009b40f64d.png'
    },
    {
      name: 'Oğuz Arslan',
      role: 'Derin\'in babası (15 yaş)',
      content: 'Oyun geliştirme kursunda kendi oyununu yaptı ve arkadaşlarıyla paylaştı. Artık üniversitede bilgisayar mühendisliği okumak istiyor.',
      rating: 5,
      avatar: '/lovable-uploads/c40372a4-e265-4c54-a390-8b009b40f64d.png'
    }
  ];

  return (
    <section className="py-24 bg-background-accent">
      <div className="container mx-auto px-4">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-6">
            Ailelerden gelen <span className="text-secondary">geri bildirimler</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Çocuklarının KodLab Junior'daki öğrenme yolculuğundan memnun olan velilerin deneyimleri
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -10 }}
              className="group"
            >
              <div className="bg-card rounded-2xl p-8 shadow-brand hover:shadow-glow transition-all duration-300 h-full border border-border relative">
                <Quote className="absolute top-4 right-4 w-8 h-8 text-secondary/20" />
                
                {/* Rating */}
                <div className="flex items-center mb-6">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-accent fill-current" />
                  ))}
                </div>

                {/* Content */}
                <p className="text-muted-foreground mb-8 leading-relaxed italic">
                  "{testimonial.content}"
                </p>

                {/* Author */}
                <div className="flex items-center">
                  <Avatar className="w-12 h-12 mr-4">
                    <AvatarImage src={testimonial.avatar} alt={testimonial.name} />
                    <AvatarFallback className="bg-secondary text-secondary-foreground">
                      {testimonial.name.charAt(0)}
                    </AvatarFallback>
                  </Avatar>
                  <div>
                    <h4 className="font-semibold text-foreground group-hover:text-secondary transition-colors">
                      {testimonial.name}
                    </h4>
                    <p className="text-sm text-muted-foreground">
                      {testimonial.role}
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Statistics */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="grid md:grid-cols-4 gap-8 mt-16"
        >
          {[
            { value: '%98', label: 'Veli Memnuniyeti' },
            { value: '1200+', label: 'Mutlu Öğrenci' },
            { value: '3+ Yıl', label: 'Deneyim' },
            { value: '4.9/5', label: 'Ortalama Puan' }
          ].map((stat, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="text-center bg-card rounded-xl p-6 shadow-brand"
            >
              <div className="text-3xl font-bold text-secondary mb-2">{stat.value}</div>
              <div className="text-muted-foreground">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};