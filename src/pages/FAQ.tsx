import { motion } from 'framer-motion';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { DemoBookingModal } from '@/components/DemoBookingModal';
import { WhatsAppFloat } from '@/components/WhatsAppFloat';
import { useState, useEffect } from 'react';
import { useSEO, pageSEOConfigs } from '@/lib/seo';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import {
  Users,
  Clock,
  Monitor,
  CreditCard,
  MessageCircle,
  HelpCircle,
  BookOpen,
  Laptop,
  GraduationCap,
  Shield,
  Star,
  CheckCircle
} from 'lucide-react';
import { usePaintSplash } from '@/hooks/usePaintSplash';

const FAQ = () => {
  const [isBookingModalOpen, setIsBookingModalOpen] = useState(false);
  const { updateSEO, addStructuredData, generateFAQStructuredData } = useSEO();
  usePaintSplash();

  // Sayfa yüklendiğinde en üste scroll yap ve SEO ayarları
  useEffect(() => {
    window.scrollTo(0, 0);

    // FAQ sayfası için SEO ayarları
    updateSEO(pageSEOConfigs.faq);

    // FAQ structured data
    const faqs = [
      {
        question: "Kodlama eğitimleriniz hangi yaş grupları için uygun?",
        answer: "Kodlama eğitimlerimiz 7-17 yaş arası çocuklar için özel olarak tasarlanmıştır. Her yaş grubuna uygun kurs seviyeleri mevcuttur."
      },
      {
        question: "Herhangi bir ön bilgi gerekli mi?",
        answer: "Hayır, hiçbir ön bilgi gerekmez. Tamamen sıfırdan başlayarak, adım adım öğretim metodumuzla çocuklar kolayca öğrenebilir."
      },
      {
        question: "Kurslar online mı yoksa yüz yüze mi?",
        answer: "Hem online hem de yüz yüze eğitim seçeneklerimiz bulunmaktadır. İhtiyaçlarınıza göre en uygun formatı seçebilirsiniz."
      },
      {
        question: "Kurslarda hangi programlama dilleri öğretiliyor?",
        answer: "Python, Scratch, HTML/CSS, JavaScript gibi güncel programlama dilleri ve teknolojileri öğretiyoruz."
      },
      {
        question: "Kurs süreleri ne kadar?",
        answer: "Kurslarımız genellikle 8-12 hafta sürmektedir. Her ders 60-90 dakika arasında değişmektedir."
      }
    ];

    const faqStructuredData = generateFAQStructuredData(faqs);
    addStructuredData(faqStructuredData);
  }, [updateSEO, addStructuredData, generateFAQStructuredData]);

  const handleBookDemo = () => {
    setIsBookingModalOpen(true);
  };

  const faqCategories = [
    {
      id: "genel",
      title: "Genel Bilgiler",
      icon: BookOpen,
      color: "text-blue-600",
      bgColor: "bg-blue-50",
      borderColor: "border-blue-200",
      questions: [
        {
          question: "Hangi yaş grubundaki çocuklar kursa katılabilir?",
          answer: "Kurslarımız 7-17 yaş arası çocuklar için tasarlanmıştır. Kurslarımız özelinde yaş aralığı daralabilmektedir."
        },
        {
          question: "Hiç programlama bilmeyen çocuklar katılabilir mi?",
          answer: "Elbette! Kurslarımız sıfırdan başlayacak şekilde tasarlanmıştır. İlk derslerimizde temel kavramları eğlenceli aktivitelerle öğretiyoruz. Hiçbir ön bilgi gerekmez."
        },
        {
          question: "Kurs ne kadar sürer?",
          answer: "Python ile Kodlama kursu 32 hafta (6 ay) sürmektedir. Haftada 1 kez 90 dakikalık dersler yapılır. Detaylı bilgiyi kurs detay sayfasında edinebilirsiniz."
        },
        {
          question: "Dersler hangi günlerde ve saatlerde?",
          answer: "Derslerimiz talebe uygun olacak şekilde gün sonlarında planlanır. Kayıt sırasında size uygun zaman dilimini seçebilirsiniz. Her grup için sabit gün ve saat belirlenir."
        },
        {
          question: "Sınıf mevcudu kaç kişi?",
          answer: "Standart ve Premium olmak üzere 2 farklı sınıfımız bulunmaktadır. Standart gruplarımız 10, premium gruplarımız 5 kişi olarak planlanır."
        }
      ]
    },
    {
      id: "teknik",
      title: "Teknik Gereksinimler",
      icon: Laptop,
      color: "text-green-600",
      bgColor: "bg-green-50",
      borderColor: "border-green-200",
      questions: [
        {
          question: "Hangi bilgisayar ve işletim sistemi gerekli?",
          answer: "Windows 10/11, macOS 10.14+ veya Ubuntu 18.04+ işletim sistemli herhangi bir bilgisayar yeterlidir. Minimum 4GB RAM ve 2GB boş disk alanı önerilir. En iyi deneyim için bilgisiyar kullanımı tavsiye edilir."
        },
        {
          question: "İnternet hızı ne kadar olmalı?",
          answer: "Minimum 10 Mbps download hızı önerilir. Video konferans kalitesi için stable bir bağlantı önemlidir. Mobil internet kullanılabilir ancak sabit internet tercih edilir."
        },
        {
          question: "Özel bir program yüklemek gerekiyor mu?",
          answer: "Evet, kurlarımız için gerekli programları (Python, Visual Studio Code, Zoom) yükleme konusunda yardımcı olunacaktır."
        },
        {
          question: "Web kamerası ve mikrofon zorunlu mu?",
          answer: "Evet, etkileşimli eğitim için web kamerası ve mikrofon zorunludur. Çocuğun kendini rahat ifade edebilmesi ve grup çalışmalarına katılabilmesi için gereklidir."
        },
        {
          question: "Teknik sorun yaşarsak ne yapmalıyız?",
          answer: "Herhangi bir sorunda teknik destek WhatsApp hattımız bulunmaktadır. İstediğiniz zaman bize ulaşabilirsiniz."
        }
      ]
    },
    {
      id: "egitim",
      title: "Eğitim Süreci",
      icon: GraduationCap,
      color: "text-purple-600",
      bgColor: "bg-purple-50",
      borderColor: "border-purple-200",
      questions: [
        {
          question: "Müfredat nasıl ilerliyor?",
          answer: "32 haftalık müfredat proje tabanlı olarak ilerler. Her hafta yeni konular öğrenip, o konuyla ilgili küçük bir proje yaparız. Son 4 haftada büyük bir final projesi geliştirilir."
        },
        {
          question: "Ödev veriliyor mu?",
          answer: "Evet, her dersin sonunda küçük pratik ödevler verilir. Ödevler çocuğun seviyesine uygun ve eğlenceli şekilde tasarlanır. Zorluk seviyesi kademeli olarak artar."
        },
        {
          question: "Veliler ders takibi yapabilir mi?",
          answer: "Kesinlikle! Platformumuz üzerinden ders kayıtlarına erişebilir, ödevleri takip edebilir ve çocuğun ilerlemesini görebilirsiniz. Ayrıca detaylı geri bildirim için öğretmenlerimiz ile iletişime geçebilirsiniz."
        },
        {
          question: "Derse katılamazsa telafi var mı?",
          answer: "Derslerimiz kayıt alınmaktadır. Çocuğunuz derse katılamazsa, ders kaydını izleyebilir. Ayrıca telafi dersi talep edebilirsiniz."
        },
        {
          question: "Sertifika veriliyor mu?",
          answer: "Kurs sonunda katılım sertifikası verilir."
        }
      ]
    },
    {
      id: "odeme",
      title: "Ödeme ve Fiyatlandırma",
      icon: CreditCard,
      color: "text-orange-600",
      bgColor: "bg-orange-50",
      borderColor: "border-orange-200",
      questions: [
        {
          question: "Kurs ücretleri nedir?",
          answer: "Kurs detay sayfamızda kursların ücretlerini bulabilirsiniz. İlk ders ücretsizdir."
        },
        {
          question: "Hangi ödeme yöntemleri kabul ediliyor?",
          answer: "Kredi kartı, banka kartı, havale/EFT ve taksitli ödeme seçenekleri mevcuttur."
        },
        {
          question: "İade politikanız nasıl?",
          answer: (
            <>
              İlk 2 hafta içinde banka komisyon ücretleri harici paranız iade, 2-4 hafta arası alınan derslerin ücreti düşülür, %25 kesinti ve banka komisyon ücreti uygulanır.
              <br /><br />
              <a
                href="/iade-politikasi"
                className="text-primary hover:text-primary-hover underline font-semibold"
                onClick={(e) => {
                  e.preventDefault();
                  window.location.href = '/iade-politikasi';
                }}
              >
                Detaylı iade koşulları için İade Politikası sayfamızı ziyaret edin →
              </a>
            </>
          )
        },
        {
          question: "Ekstra materyal ücreti var mı?",
          answer: "Hayır! Tüm eğitim materyalleri, yazılımlar ve kaynaklara erişim kurs ücretine dahildir. Hiçbir ekstra ücret alınmaz."
        }
      ]
    },
    {
      id: "iletisim",
      title: "İletişim ve Destek",
      icon: MessageCircle,
      color: "text-red-600",
      bgColor: "bg-red-50",
      borderColor: "border-red-200",
      questions: [
        {
          question: "Eğitmenlerle nasıl iletişim kurabiliriz?",
          answer: "Her grup için WhatsApp grubu oluşturulur. Eğitmenler 24 saat içinde sorularınızı yanıtlar."
        },
        {
          question: "Ders saatlerini değiştirebilir miyiz?",
          answer: "Gruplar belli talebe göre açılır. Kayıt sonrası grup değişikliği mümkündür ancak yer durumuna bağlıdır. En az 1 hafta önceden bildirim yapılmalıdır. Grup doluluk durumuna göre alternatif saatler sunulur."
        },
        {
          question: "Çocuğum derste sıkılırsa ne yaparız?",
          answer: "Dersleri eğlenceli tutmak için oyunlar, yarışmalar ve grup aktiviteleri düzenleriz. Her çocuğun ilgi alanına uygun projeler geliştiririz."
        },
        {
          question: "Şikayet ve önerilerimizi nasıl iletebiliriz?",
          answer: (
            <>
              E-posta gönderebilir veya WhatsApp üzerinden mesaj atabilirsiniz. Tüm geri bildirimler 24 saat içinde yanıtlanır.
              <br /><br />
              <a
                href="#contact"
                className="text-primary hover:text-primary-hover underline font-semibold"
                onClick={(e) => {
                  e.preventDefault();
                  const element = document.getElementById('contact');
                  if (element) {
                    element.scrollIntoView({ behavior: 'smooth' });
                  }
                }}
              >
                İletişim bilgilerimiz için sayfanın altındaki iletişim bölümüne göz atın →
              </a>
            </>
          )
        }
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header onBookDemo={handleBookDemo} />

      {/* Hero Section - Mobile Responsive */}
      <section className="pt-20 py-16 md:py-24 relative overflow-hidden" style={{
        background: 'linear-gradient(135deg, #7c3aed 0%, #a855f7 50%, #c084fc 100%)'
      }}>
        <div className="absolute inset-0 bg-gradient-to-br from-purple-900/20 via-purple-600/10 to-purple-400/20"></div>

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-4xl mx-auto"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2 }}
              className="flex flex-col sm:flex-row items-center justify-center space-y-3 sm:space-y-0 sm:space-x-3 mb-6"
            >
              <div className="w-12 h-12 sm:w-16 sm:h-16 bg-yellow-400 rounded-2xl sm:rounded-3xl flex items-center justify-center">
                <HelpCircle className="w-6 h-6 sm:w-8 sm:h-8 text-yellow-900" />
              </div>
              <Badge className="bg-yellow-400 text-yellow-900 px-3 py-1.5 sm:px-4 sm:py-2 text-sm sm:text-lg">
                Sık Sorulan Sorular
              </Badge>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-4 sm:mb-6"
              style={{ textShadow: '2px 2px 8px rgba(0,0,0,0.3)' }}
            >
              Merak ettiklerinizi<br className="hidden sm:block" />{' '}
              <span className="text-yellow-300">yanıtladık!</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="text-base sm:text-lg md:text-xl text-white/90 mb-6 sm:mb-8 leading-relaxed px-4 sm:px-0"
              style={{ textShadow: '1px 1px 4px rgba(0,0,0,0.3)' }}
            >
              Çocuğunuzun kodlama yolculuğu hakkında en çok sorulan soruların<br className="hidden sm:block" />
              detaylı cevaplarını burada bulabilirsiniz
            </motion.p>

            {/* Quick Stats - Commented out for mobile optimization */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="grid grid-cols-2 md:grid-cols-4 gap-2 sm:gap-4 max-w-2xl mx-auto"
            >
              {/*
              {quickStats.map((stat, index) => (
                <div key={index} className="bg-white/10 backdrop-blur-sm rounded-2xl p-4 border border-white/20">
                  <stat.icon className={`w-8 h-8 ${stat.color} mx-auto mb-2`} />
                  <div className="text-2xl font-bold text-white">{stat.value}</div>
                  <div className="text-white/80 text-sm">{stat.label}</div>
                </div>
              ))}
                */}
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* FAQ Categories - Mobile Responsive */}
      <section className="py-16 md:py-24 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12 md:mb-16"
          >
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4 md:mb-6">
              Kategoriler <span className="text-primary">halinde</span> yanıtlar
            </h2>
            <p className="text-base sm:text-lg text-muted-foreground max-w-3xl mx-auto px-4 sm:px-0">
              Sorularınızı kategorilere ayırarak daha kolay bulmanızı sağladık
            </p>
          </motion.div>

          <div className="space-y-8 md:space-y-12">
            {faqCategories.map((category, categoryIndex) => (
              <motion.div
                key={category.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: categoryIndex * 0.1 }}
                className="max-w-4xl mx-auto"
              >
                <Card className={`border-2 ${category.borderColor} ${category.bgColor} mb-4 md:mb-6`}>
                  <CardHeader className="p-4 sm:p-6">
                    <CardTitle className="flex flex-col sm:flex-row items-start sm:items-center space-y-2 sm:space-y-0 sm:space-x-4">
                      <div className="flex items-center space-x-3 sm:space-x-4">
                        <div className={`w-10 h-10 sm:w-12 sm:h-12 ${category.bgColor} rounded-xl sm:rounded-2xl flex items-center justify-center border ${category.borderColor}`}>
                          <category.icon className={`w-5 h-5 sm:w-6 sm:h-6 ${category.color}`} />
                        </div>
                        <span className={`text-lg sm:text-xl md:text-2xl ${category.color} font-bold`}>
                          {category.title}
                        </span>
                      </div>
                      <Badge variant="secondary" className="ml-auto">
                        {category.questions.length} soru
                      </Badge>
                    </CardTitle>
                  </CardHeader>
                </Card>

                <Accordion type="single" collapsible className="space-y-3 md:space-y-4">
                  {category.questions.map((faq, faqIndex) => (
                    <AccordionItem
                      key={faqIndex}
                      value={`${category.id}-${faqIndex}`}
                      className="bg-card rounded-xl md:rounded-2xl border border-border overflow-hidden shadow-sm hover:shadow-brand transition-all duration-300"
                    >
                      <AccordionTrigger className="px-4 sm:px-6 md:px-8 py-4 sm:py-5 md:py-6 hover:no-underline group text-left">
                        <div className="flex items-start sm:items-center space-x-3 sm:space-x-4 w-full">
                          <div className="flex-shrink-0 w-6 h-6 sm:w-8 sm:h-8 bg-primary/10 rounded-lg flex items-center justify-center group-hover:bg-primary group-hover:text-primary-foreground transition-colors mt-0.5 sm:mt-0">
                            <span className="font-bold text-xs sm:text-sm">
                              {faqIndex + 1}
                            </span>
                          </div>
                          <span className="text-sm sm:text-base md:text-lg font-semibold text-foreground group-hover:text-primary transition-colors">
                            {faq.question}
                          </span>
                        </div>
                      </AccordionTrigger>
                      <AccordionContent className="px-4 sm:px-6 md:px-8 pb-4 sm:pb-5 md:pb-6">
                        <div className="pt-2 sm:pt-3 md:pt-4 pl-9 sm:pl-12">
                          <p className="text-muted-foreground leading-relaxed text-sm sm:text-base md:text-lg">
                            {faq.answer}
                          </p>
                        </div>
                      </AccordionContent>
                    </AccordionItem>
                  ))}
                </Accordion>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Hala Sorunuz Var mı? - Mobile Responsive */}
      <section className="py-16 md:py-24 bg-background-secondary">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center max-w-4xl mx-auto"
          >
            <div className="bg-gradient-primary rounded-2xl md:rounded-3xl p-6 sm:p-8 md:p-12">
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                className="mb-6 sm:mb-8"
              >
                <div className="w-16 h-16 sm:w-20 sm:h-20 bg-yellow-400 rounded-2xl sm:rounded-3xl flex items-center justify-center mx-auto mb-4 sm:mb-6">
                  <MessageCircle className="w-8 h-8 sm:w-10 sm:h-10 text-yellow-900" />
                </div>
                <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-primary-foreground mb-3 sm:mb-4">
                  Hâlâ sorunuz mu var?
                </h2>
                <p className="text-primary-foreground/90 text-base sm:text-lg md:text-xl leading-relaxed mb-6 sm:mb-8 px-4 sm:px-0">
                  Yukarıdaki sorular arasında aradığınızı bulamadınız mı?<br className="hidden sm:block" />
                  Bizimle iletişime geçin, size yardımcı olmaktan memnuniyet duyarız!
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4 }}
                className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 mb-6 sm:mb-8"
              >
                {[
                  {
                    icon: MessageCircle,
                    title: "WhatsApp",
                    desc: "Hemen mesaj gönderin",
                    action: "Hemen Yaz",
                    onClick: () => {
                      const phoneNumber = "905523877207";
                      const message = "Merhaba! KodLab Junior hakkında bilgi almak istiyorum.";
                      const encodedMessage = encodeURIComponent(message);
                      const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;
                      window.open(whatsappUrl, '_blank');
                    }
                  },
                  {
                    icon: Monitor,
                    title: "Ücretsiz Danışmanlık",
                    desc: "Online görüşme",
                    action: "Randevu Al",
                    onClick: handleBookDemo
                  }
                ].map((contact, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.5 + index * 0.1 }}
                    className="bg-white/10 backdrop-blur-sm rounded-xl md:rounded-2xl p-4 sm:p-6 text-center border border-white/20 hover:bg-white/20 transition-colors group cursor-pointer"
                    onClick={contact.onClick}
                  >
                    <contact.icon className="w-6 h-6 sm:w-8 sm:h-8 text-yellow-300 mx-auto mb-2 sm:mb-3 group-hover:scale-110 transition-transform" />
                    <div className="font-semibold text-primary-foreground mb-1 text-sm sm:text-base">{contact.title}</div>
                    <div className="text-primary-foreground/80 text-xs sm:text-sm mb-2 sm:mb-3">{contact.desc}</div>
                    <div className="text-yellow-300 text-xs sm:text-sm font-medium group-hover:text-yellow-200 transition-colors">
                      {contact.action} →
                    </div>
                  </motion.div>
                ))}
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.7 }}
                className="space-y-3 sm:space-y-4"
              >
                <Button
                  size="lg"
                  onClick={handleBookDemo}
                  className="w-full sm:w-auto bg-accent text-accent-foreground hover:bg-accent-hover font-semibold text-base sm:text-lg px-8 sm:px-12 py-3 sm:py-4"
                >
                  Ücretsiz Deneme Dersi Al 🎯
                </Button>
                <p className="text-primary-foreground/70 text-xs sm:text-sm">
                  İlk ders tamamen ücretsiz! Hiçbir taahhüt gerektirmez.
                </p>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer onBookDemo={handleBookDemo} />

      <DemoBookingModal
        isOpen={isBookingModalOpen}
        onClose={() => setIsBookingModalOpen(false)}
      />

      {/* WhatsApp Float Button */}
      <WhatsAppFloat />
    </div>
  );
};

export default FAQ; 