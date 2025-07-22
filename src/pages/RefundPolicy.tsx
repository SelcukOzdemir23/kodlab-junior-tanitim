import { motion } from 'framer-motion';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { DemoBookingModal } from '@/components/DemoBookingModal';
import { useState, useEffect } from 'react';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import { Alert, AlertDescription } from '@/components/ui/alert';
import { Button } from '@/components/ui/button';
import { CheckCircle, AlertTriangle, Clock, Phone, Mail, MessageCircle } from 'lucide-react';

const RefundPolicy = () => {
  const [isBookingModalOpen, setIsBookingModalOpen] = useState(false);

  // Sayfa yüklendiğinde en üste scroll yap
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleBookDemo = () => {
    setIsBookingModalOpen(true);
  };

  const policyData = [
    {
      title: "Ücretsiz Deneme Dersi",
      icon: CheckCircle,
      color: "text-green-600",
      bgColor: "bg-green-50",
      borderColor: "border-green-200",
      content: [
        "İlk ders tamamen ücretsiz ve iade şartı bulunmamaktadır",
        "Deneme dersi sonrası kurs kaydı yapmak zorunda değilsiniz",
        "Deneme dersi sırasında herhangi bir ödeme alınmaz",
        "Memnun kalmazsanız, kursa devam etmek zorunda değilsiniz"
      ]
    },
    {
      title: "İlk 2 Hafta Koşulsuz İade",
      icon: CheckCircle,
      color: "text-blue-600", 
      bgColor: "bg-blue-50",
      borderColor: "border-blue-200",
      content: [
        "Kursa başladıktan sonraki ilk 2 hafta içinde %100 para iadesi",
        "Herhangi bir sebep belirtmenize gerek yoktur",
        "İade talebi en geç 3 iş günü içinde işleme alınır",
        "Para iadesi 5-7 iş günü içinde hesabınıza geçer"
      ]
    },
    {
      title: "2-4. Hafta Arası",
      icon: Clock,
      color: "text-orange-600",
      bgColor: "bg-orange-50", 
      borderColor: "border-orange-200",
      content: [
        "Kursun 2-4. haftaları arasında %75 para iadesi",
        "Geçerli bir sebep (sağlık, aile, ekonomik durum) belirtilmeli",
        "Gerekli belgelendirme yapıldıktan sonra iade onaylanır",
        "İade işlemi 7-10 iş günü içinde tamamlanır"
      ]
    },
    {
      title: "4. Haftadan Sonra",
      icon: AlertTriangle,
      color: "text-red-600",
      bgColor: "bg-red-50",
      borderColor: "border-red-200", 
      content: [
        "4. haftadan sonra para iadesi yapılmamaktadır",
        "Ancak özel durumlar (sağlık sorunu vs.) değerlendirilir",
        "Kurs ertelemeleri mümkündür (6 aya kadar)",
        "Kurs değişikliği (farklı seviyeye geçiş) yapılabilir"
      ]
    }
  ];

  const specialCases = [
    {
      title: "Teknik Problemler",
      description: "Bizden kaynaklanan teknik sorunlar nedeniyle derslerin aksatılması durumunda telafi dersi veya iade hakkınız bulunur."
    },
    {
      title: "Eğitmen Değişikliği", 
      description: "Eğitmen değişikliği durumunda ilk 2 ders sonunda memnun kalmazsanız %100 iade hakkınız vardır."
    },
    {
      title: "Sağlık Durumu",
      description: "Çocuğun uzun süreli sağlık problemi yaşaması durumunda doktor raporu ile kurs ertelenebilir."
    },
    {
      title: "Aile Acil Durumları",
      description: "Aile içi acil durumlar (taşınma, işsizlik vb.) için esnek çözümler sunuyoruz."
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header onBookDemo={handleBookDemo} />
      
      {/* Hero Section */}
      <section className="pt-20 py-24 relative overflow-hidden" style={{
        background: 'linear-gradient(135deg, #1e40af 0%, #3b82f6 50%, #60a5fa 100%)'
      }}>
        <div className="absolute inset-0 bg-gradient-to-br from-blue-900/20 via-blue-600/10 to-blue-400/20"></div>
        
        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-4xl mx-auto"
          >
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-4xl md:text-6xl font-bold text-white leading-tight mb-6"
              style={{ textShadow: '2px 2px 8px rgba(0,0,0,0.3)' }}
            >
              İade <span className="text-yellow-300">Politikamız</span>
            </motion.h1>
            
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="text-xl text-white/90 mb-8 leading-relaxed"
              style={{ textShadow: '1px 1px 4px rgba(0,0,0,0.3)' }}
            >
              Velilerimizin hak ve menfaatlerini korumak için oluşturulmuş, <br />
              şeffaf ve adil iade politikamız
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20 inline-block"
            >
              <div className="flex items-center justify-center space-x-4 text-white">
                <CheckCircle className="w-8 h-8 text-green-300" />
                <div className="text-left">
                  <div className="font-bold text-lg">Güvenceli Öğrenme</div>
                  <div className="text-white/80">İlk 2 hafta %100 iade garantisi</div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* İade Koşulları */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-6">
              İade <span className="text-primary">Koşullarımız</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Kurs süreci boyunca farklı zamanlarda geçerli olan iade politikalarımız
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {policyData.map((policy, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <Card className={`h-full border-2 ${policy.borderColor} ${policy.bgColor} hover:shadow-lg transition-all duration-300`}>
                  <CardHeader>
                    <CardTitle className="flex items-center space-x-3">
                      <div className={`w-12 h-12 ${policy.bgColor} rounded-2xl flex items-center justify-center border ${policy.borderColor}`}>
                        <policy.icon className={`w-6 h-6 ${policy.color}`} />
                      </div>
                      <span className={`text-xl ${policy.color} font-bold`}>
                        {policy.title}
                      </span>
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-3">
                      {policy.content.map((item, itemIndex) => (
                        <li key={itemIndex} className="flex items-start space-x-3">
                          <CheckCircle className={`w-5 h-5 ${policy.color} mt-0.5 flex-shrink-0`} />
                          <span className="text-foreground leading-relaxed">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Özel Durumlar */}
      <section className="py-24 bg-background-secondary">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-6">
              Özel <span className="text-secondary">Durumlar</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Beklenmedik durumlar için esnek çözümlerimiz
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {specialCases.map((specialCase, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-card rounded-2xl p-6 border border-border hover:shadow-brand transition-all duration-300"
              >
                <h3 className="text-xl font-bold text-foreground mb-3">
                  {specialCase.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {specialCase.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* İade Süreci */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-6">
              İade <span className="text-primary">Süreci</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              İade talebinizi nasıl yapacağınız ve süreç nasıl işleyecek
            </p>
          </motion.div>

          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  step: "1",
                  title: "İletişim",
                  description: "WhatsApp, telefon veya e-mail ile bizimle iletişime geçin",
                  icon: MessageCircle,
                  color: "bg-blue-500"
                },
                {
                  step: "2", 
                  title: "Değerlendirme",
                  description: "Talebinizi 24 saat içinde değerlendirip size dönüş yaparız",
                  icon: Clock,
                  color: "bg-orange-500"
                },
                {
                  step: "3",
                  title: "İade İşlemi",
                  description: "Onay sonrası 3-7 iş günü içinde iade işleminiz tamamlanır",
                  icon: CheckCircle,
                  color: "bg-green-500"
                }
              ].map((step, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.2 }}
                  className="text-center"
                >
                  <div className={`w-16 h-16 ${step.color} rounded-2xl flex items-center justify-center mx-auto mb-6`}>
                    <step.icon className="w-8 h-8 text-white" />
                  </div>
                  <div className="bg-card rounded-2xl p-6 border border-border">
                    <div className="text-2xl font-bold text-primary mb-2">Adım {step.step}</div>
                    <h3 className="text-xl font-bold text-foreground mb-3">{step.title}</h3>
                    <p className="text-muted-foreground leading-relaxed">{step.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* İletişim ve Yasal Uyarı */}
      <section className="py-24 bg-background-secondary">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            {/* İletişim Bilgileri */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="mb-16"
            >
              <div className="bg-gradient-primary rounded-3xl p-8">
                <h3 className="text-2xl font-bold text-primary-foreground mb-6 text-center">
                  İade Talebi İçin İletişim
                </h3>
                <div className="grid md:grid-cols-3 gap-6 text-center">
                  <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6">
                    <Phone className="w-8 h-8 text-yellow-300 mx-auto mb-3" />
                    <div className="font-semibold text-primary-foreground mb-1">Telefon</div>
                    <div className="text-primary-foreground/80">0850 123 45 67</div>
                  </div>
                  <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6">
                    <Mail className="w-8 h-8 text-yellow-300 mx-auto mb-3" />
                    <div className="font-semibold text-primary-foreground mb-1">E-mail</div>
                    <div className="text-primary-foreground/80">iade@kodlabjunior.com</div>
                  </div>
                  <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6">
                    <MessageCircle className="w-8 h-8 text-yellow-300 mx-auto mb-3" />
                    <div className="font-semibold text-primary-foreground mb-1">WhatsApp</div>
                    <div className="text-primary-foreground/80">0535 123 45 67</div>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Yasal Uyarı */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
            >
              <Alert className="bg-amber-50 border-amber-200">
                <AlertTriangle className="h-4 w-4 text-amber-600" />
                <AlertDescription className="text-amber-800">
                  <strong className="font-semibold">Önemli Uyarı:</strong> Bu iade politikası, 
                  Türkiye Cumhuriyeti Tüketici Haklarını Koruma Kanunu kapsamında hazırlanmıştır. 
                  İade koşulları değiştirildiğinde tüm velilerimiz bilgilendirilecektir. 
                  Son güncelleme: Aralık 2024.
                </AlertDescription>
              </Alert>
            </motion.div>

            {/* CTA */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
              className="text-center mt-12"
            >
              <p className="text-lg text-muted-foreground mb-6">
                Sorularınız mı var? Ücretsiz danışmanlık alın!
              </p>
              <Button 
                size="lg"
                onClick={handleBookDemo}
                className="bg-secondary text-secondary-foreground hover:bg-secondary-hover font-semibold text-lg px-8 py-4"
              >
                Ücretsiz Danışmanlık Al
              </Button>
            </motion.div>
          </div>
        </div>
      </section>

      <Footer onBookDemo={handleBookDemo} />
      
      <DemoBookingModal
        isOpen={isBookingModalOpen}
        onClose={() => setIsBookingModalOpen(false)}
      />
    </div>
  );
};

export default RefundPolicy; 