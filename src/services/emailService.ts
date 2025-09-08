import emailjs from '@emailjs/browser';

interface DemoBookingEmailData {
  parentName: string;
  parentPhone: string;
  parentEmail: string;
  childName: string;
  childAge: number;
  selectedDate: string;
  selectedTime: string;
  timeZone: string;
  dayOfWeek: string;
  status: string;
  createdAt: string;
  bookingId?: string;
}

class EmailService {
  private serviceId: string;
  private templateId: string;
  private publicKey: string;

  constructor() {
    // EmailJS konfigürasyonu - .env dosyasından alınacak
    this.serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID || '';
    this.templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID || '';
    this.publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY || '';
  }

  /**
   * EmailJS'i başlat
   */
  init() {
    if (this.publicKey) {
      emailjs.init(this.publicKey);
    } else {
      console.warn('EmailJS Public Key bulunamadı. Lütfen .env dosyasını kontrol edin.');
    }
  }

  /**
   * Demo ders rezervasyonu e-postası gönder
   */
  async sendDemoBookingNotification(bookingData: DemoBookingEmailData): Promise<boolean> {
    try {
      if (!this.serviceId || !this.templateId || !this.publicKey) {
        throw new Error('EmailJS konfigürasyonu eksik. Lütfen .env dosyasını kontrol edin.');
      }

      // E-posta şablonu için veri hazırlama
      const templateParams = {
        // Veli bilgileri
        parentName: bookingData.parentName,
        parentPhone: bookingData.parentPhone,
        parentEmail: bookingData.parentEmail,

        // Çocuk bilgileri
        childName: bookingData.childName,
        childAge: bookingData.childAge,

        // Ders bilgileri
        selectedDate: bookingData.selectedDate,
        selectedTime: bookingData.selectedTime,
        timeZone: bookingData.timeZone,
        dayOfWeek: bookingData.dayOfWeek,

        // Sistem bilgileri
        status: bookingData.status,
        createdAt: bookingData.createdAt,
        bookingId: bookingData.bookingId || 'N/A',

        // Ek bilgiler
        to_email: 'kodlabjuniorofficial@gmail.com', // Kendi e-posta adresinizi buraya yazın
        from_name: 'Kodlab Junior Demo Sistemi',
        subject: `🎯 Yeni Demo Ders Rezervasyonu - ${bookingData.childName} (${bookingData.selectedDate} ${bookingData.selectedTime})`
      };

      console.log('E-posta gönderiliyor...', templateParams);

      const response = await emailjs.send(
        this.serviceId,
        this.templateId,
        templateParams
      );

      console.log('E-posta başarıyla gönderildi!', response.status, response.text);
      return true;

    } catch (error) {
      console.error('E-posta gönderilirken hata oluştu:', error);
      return false;
    }
  }

  /**
   * Test e-postası gönder
   */
  async sendTestEmail(): Promise<boolean> {
    const testData: DemoBookingEmailData = {
      parentName: 'Test Veli',
      parentPhone: '+90 555 123 45 67',
      parentEmail: 'test@example.com',
      childName: 'Test Çocuk',
      childAge: 12,
      selectedDate: '2024-01-15',
      selectedTime: '14:00',
      timeZone: 'Europe/Istanbul',
      dayOfWeek: 'Pazartesi',
      status: 'pending',
      createdAt: new Date().toLocaleString('tr-TR'),
      bookingId: 'TEST_' + Date.now()
    };

    return this.sendDemoBookingNotification(testData);
  }
}

// Singleton instance
export const emailService = new EmailService();

// EmailJS'i uygulama başlangıcında başlat
emailService.init(); 