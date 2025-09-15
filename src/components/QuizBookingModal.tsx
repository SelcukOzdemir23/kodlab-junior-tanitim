import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { Calendar } from '@/components/ui/calendar';
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover';
import { Badge } from '@/components/ui/badge';
import { CalendarIcon, Clock, User, Phone, Mail, Baby, CheckCircle } from 'lucide-react';
import { format } from 'date-fns';
import { tr } from 'date-fns/locale';
import { cn } from '@/lib/utils';
import { db } from '@/lib/firebase';
import { collection, addDoc, Timestamp } from 'firebase/firestore';
import { emailService } from '@/services/emailService';

interface QuizBookingModalProps {
  isOpen: boolean;
  onClose: () => void;
  recommendedCourse: string;
  parentInfo?: {
    name: string;
    phone: string;
    availableDay: string;
    availableTime: string;
  };
}

interface BookingData {
  parentName: string;
  phone: string;
  email: string;
  childName: string;
  childAge: number;
  selectedDate: Date | null;
  selectedTime: string;
  recommendedCourse: string;
}

interface ValidationErrors {
  parentName?: string;
  phone?: string;
  email?: string;
  childName?: string;
}

const getTimeSlots = (date: Date | null) => {
  if (!date) return [];
  
  const dayOfWeek = date.getDay();
  const isWeekend = dayOfWeek === 0 || dayOfWeek === 6;
  
  if (isWeekend) {
    return ['10:00', '11:00', '12:00', '13:00', '14:00', '15:00', '16:00', '17:00', '18:00', '19:00', '20:00', '21:00'];
  } else {
    return ['18:00', '19:00', '20:00', '21:00'];
  }
};

const ageOptions = [
  { value: 7, label: '7' },
  { value: 8, label: '8' },
  { value: 9, label: '9' },
  { value: 10, label: '10' },
  { value: 11, label: '11' },
  { value: 12, label: '12' },
  { value: 13, label: '13' },
  { value: 14, label: '14' },
  { value: 15, label: '15' },
  { value: 16, label: '16' },
  { value: 17, label: '17' },
  { value: 18, label: '17>' }
];

export const QuizBookingModal = ({ isOpen, onClose, recommendedCourse, parentInfo }: QuizBookingModalProps) => {
  const [scrollPosition, setScrollPosition] = useState(0);

  useEffect(() => {
    if (isOpen) {
      const currentScrollY = window.pageYOffset;
      setScrollPosition(currentScrollY);
      
      document.body.style.overflow = 'hidden';
      document.body.style.position = 'fixed';
      document.body.style.top = `-${currentScrollY}px`;
      document.body.style.left = '0';
      document.body.style.right = '0';
      document.body.style.width = '100%';
    } else if (scrollPosition !== 0) {
      document.body.style.overflow = '';
      document.body.style.position = '';
      document.body.style.top = '';
      document.body.style.left = '';
      document.body.style.right = '';
      document.body.style.width = '';
      
      requestAnimationFrame(() => {
        window.scrollTo(0, scrollPosition);
      });
    }

    return () => {
      document.body.style.overflow = '';
      document.body.style.position = '';
      document.body.style.top = '';
      document.body.style.left = '';
      document.body.style.right = '';
      document.body.style.width = '';
    };
  }, [isOpen]);

  const [step, setStep] = useState(1);
  const [bookingData, setBookingData] = useState<BookingData>({
    parentName: parentInfo?.name || '',
    phone: parentInfo?.phone || '+90 ',
    email: '',
    childName: '',
    childAge: 0,
    selectedDate: null,
    selectedTime: '',
    recommendedCourse: recommendedCourse
  });

  // Parent info'dan gelen bilgileri kullan ve tarihi otomatik ayarla
  useEffect(() => {
    if (parentInfo?.name) {
      setBookingData(prev => ({
        ...prev,
        parentName: parentInfo.name,
        phone: parentInfo.phone || '+90 '
      }));
      
      // Gün bilgisine göre otomatik tarih seçimi
      if (parentInfo.availableDay) {
        const dayMapping: Record<string, number> = {
          'monday': 1, 'tuesday': 2, 'wednesday': 3, 'thursday': 4, 
          'friday': 5, 'saturday': 6, 'sunday': 0
        };
        
        const selectedDays = parentInfo.availableDay.split(', ');
        const today = new Date();
        const currentDay = today.getDay();
        
        // En yakın uygun günü bul
        let nextAvailableDate = null;
        for (let i = 1; i <= 7; i++) {
          const checkDate = new Date(today);
          checkDate.setDate(today.getDate() + i);
          const checkDay = checkDate.getDay();
          
          const dayName = Object.keys(dayMapping).find(key => dayMapping[key] === checkDay);
          if (dayName && selectedDays.includes(dayName)) {
            nextAvailableDate = checkDate;
            break;
          }
        }
        
        if (nextAvailableDate) {
          setBookingData(prev => ({ ...prev, selectedDate: nextAvailableDate }));
        }
      }
      
      // Saat bilgisine göre otomatik saat seçimi
      if (parentInfo.availableTime) {
        const timeMapping: Record<string, string[]> = {
          'morning': ['10:00', '11:00', '12:00'],
          'afternoon': ['14:00', '15:00', '16:00', '17:00'],
          'evening': ['18:00', '19:00', '20:00', '21:00']
        };
        
        const availableTimes = timeMapping[parentInfo.availableTime] || [];
        if (availableTimes.length > 0) {
          setBookingData(prev => ({ ...prev, selectedTime: availableTimes[0] }));
        }
      }
    }
  }, [parentInfo]);
  const [validationErrors, setValidationErrors] = useState<ValidationErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [isCalendarOpen, setIsCalendarOpen] = useState(false);

  // Validation functions
  const validateParentName = (name: string): string => {
    if (!name.trim()) return 'Ad ve soyad gereklidir';
    if (name.trim().length > 30) return 'En fazla 30 karakter girebilirsiniz';
    
    const nameParts = name.trim().split(/\s+/);
    if (nameParts.length < 2) return 'Lütfen ad ve soyadınızı giriniz';
    
    for (const part of nameParts) {
      if (part.length < 2) return 'Ad ve soyad en az 2 harften oluşmalıdır';
      if (!/^[a-zA-ZğĞıİöÖüÜşŞçÇ]+$/.test(part)) return 'Sadece harfler kullanabilirsiniz';
    }
    
    return '';
  };

  const validatePhone = (phone: string): string => {
    if (!phone.trim()) return 'Telefon numarası gereklidir';
    
    if (phone.startsWith('+90 ')) {
      const phoneRegex = /^\+90\s5\d{2}\s\d{3}\s\d{2}\s\d{2}$/;
      if (!phoneRegex.test(phone)) return 'Lütfen +90 5xx xxx xx xx formatında giriniz';
    } else {
      if (phone.length < 8) return 'Geçerli bir telefon numarası giriniz';
    }
    
    return '';
  };

  const validateEmail = (email: string): string => {
    if (!email.trim()) return 'E-posta adresi gereklidir';
    
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if (!emailRegex.test(email)) return 'Geçerli bir e-posta adresi giriniz';
    
    return '';
  };

  const validateChildName = (name: string): string => {
    if (!name.trim()) return 'Çocuğun adı gereklidir';
    if (name.trim().length > 30) return 'En fazla 30 karakter girebilirsiniz';
    
    const nameParts = name.trim().split(/\s+/);
    for (const part of nameParts) {
      if (part.length < 2) return 'İsim en az 2 harften oluşmalıdır';
      if (!/^[a-zA-ZğĞıİöÖüÜşŞçÇ]+$/.test(part)) return 'Sadece harfler kullanabilirsiniz';
    }
    
    return '';
  };

  const formatPhoneNumber = (value: string): string => {
    if (value === '') return '+90 ';
    
    if (!value.startsWith('+') && /^\d/.test(value)) {
      value = '+90 ' + value;
    }
    
    if (value.startsWith('+90 ')) {
      const afterCode = value.substring(4).replace(/\D/g, '');
      
      if (afterCode.length === 0) return '+90 ';
      if (afterCode.length <= 3) return `+90 ${afterCode}`;
      if (afterCode.length <= 6) return `+90 ${afterCode.slice(0, 3)} ${afterCode.slice(3)}`;
      if (afterCode.length <= 8) return `+90 ${afterCode.slice(0, 3)} ${afterCode.slice(3, 6)} ${afterCode.slice(6)}`;
      if (afterCode.length <= 10) return `+90 ${afterCode.slice(0, 3)} ${afterCode.slice(3, 6)} ${afterCode.slice(6, 8)} ${afterCode.slice(8)}`;
      
      return `+90 ${afterCode.slice(0, 3)} ${afterCode.slice(3, 6)} ${afterCode.slice(6, 8)} ${afterCode.slice(8, 10)}`;
    }
    
    return value;
  };

  const handleInputChange = (field: keyof BookingData, value: any) => {
    if (field === 'phone') {
      value = formatPhoneNumber(value);
    }

    setBookingData(prev => ({ 
      ...prev, 
      [field]: value,
      ...(field === 'selectedDate' && { selectedTime: '' })
    }));

    if (field === 'selectedDate') {
      setIsCalendarOpen(false);
    }

    if (validationErrors[field as keyof ValidationErrors]) {
      setValidationErrors(prev => ({
        ...prev,
        [field]: undefined
      }));
    }
  };

  const handleSubmit = async () => {
    setIsSubmitting(true);
    
    try {
      const docData = {
        parentName: bookingData.parentName,
        parentPhone: bookingData.phone,
        parentEmail: bookingData.email,
        childName: bookingData.childName,
        childAge: bookingData.childAge,
        selectedDate: bookingData.selectedDate ? format(bookingData.selectedDate, 'yyyy-MM-dd') : '',
        selectedTime: bookingData.selectedTime,
        recommendedCourse: bookingData.recommendedCourse,
        source: 'welcome-quiz',
        createdAt: Timestamp.now(),
        updatedAt: Timestamp.now(),
        status: 'pending',
        timeZone: 'Europe/Istanbul',
        dayOfWeek: bookingData.selectedDate ? format(bookingData.selectedDate, 'EEEE', { locale: tr }) : '',
        isWeekend: bookingData.selectedDate ? [0, 6].includes(bookingData.selectedDate.getDay()) : false,
        notes: '',
        reminderSent: false,
        teacherAssigned: ''
      };

      const docRef = await addDoc(collection(db, 'quiz_bookings'), docData);
      
      console.log('Quiz reservation saved with ID: ', docRef.id);

      try {
        const emailData = {
          parentName: bookingData.parentName,
          parentPhone: bookingData.phone,
          parentEmail: bookingData.email,
          childName: bookingData.childName,
          childAge: bookingData.childAge,
          selectedDate: bookingData.selectedDate ? format(bookingData.selectedDate, 'dd MMMM yyyy', { locale: tr }) : '',
          selectedTime: bookingData.selectedTime,
          recommendedCourse: bookingData.recommendedCourse,
          timeZone: 'Europe/Istanbul',
          dayOfWeek: bookingData.selectedDate ? format(bookingData.selectedDate, 'EEEE', { locale: tr }) : '',
          status: 'pending',
          createdAt: new Date().toLocaleString('tr-TR'),
          bookingId: docRef.id,
          source: 'welcome-quiz'
        };

        const emailSent = await emailService.sendDemoBookingNotification(emailData);
        if (emailSent) {
          console.log('✅ Quiz booking email sent successfully!');
        }
      } catch (emailError) {
        console.error('Email sending error:', emailError);
      }
      
      setIsSubmitting(false);
      setIsSuccess(true);
    } catch (error) {
      console.error('Error saving quiz reservation: ', error);
      setIsSubmitting(false);
      alert('Rezervasyon kaydedilirken bir hata oluştu. Lütfen tekrar deneyin.');
    }
  };

  const validateStep1 = (): boolean => {
    const errors: ValidationErrors = {};
    
    const parentNameError = validateParentName(bookingData.parentName);
    if (parentNameError) errors.parentName = parentNameError;
    
    const phoneError = validatePhone(bookingData.phone);
    if (phoneError) errors.phone = phoneError;
    
    const emailError = validateEmail(bookingData.email);
    if (emailError) errors.email = emailError;
    
    setValidationErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const validateStep2 = (): boolean => {
    const errors: ValidationErrors = {};
    
    const childNameError = validateChildName(bookingData.childName);
    if (childNameError) errors.childName = childNameError;
    
    setValidationErrors(errors);
    return Object.keys(errors).length === 0 && bookingData.childAge >= 7 && bookingData.childAge <= 18;
  };

  const handleNextStep = (currentStep: number) => {
    if (currentStep === 1) {
      if (validateStep1()) {
        setStep(2);
      }
    } else if (currentStep === 2) {
      if (validateStep2()) {
        setStep(3);
      }
    }
  };

  const resetModal = () => {
    setStep(1);
    setBookingData({
      parentName: '',
      phone: '+90 ',
      email: '',
      childName: '',
      childAge: 0,
      selectedDate: null,
      selectedTime: '',
      recommendedCourse: recommendedCourse
    });
    setValidationErrors({});
    setIsSuccess(false);
    setIsSubmitting(false);
    setIsCalendarOpen(false);
  };

  const handleClose = () => {
    if (!isSubmitting) {
      resetModal();
      onClose();
    }
  };

  const isStep3Valid = bookingData.selectedDate && bookingData.selectedTime;

  return (
    <Dialog open={isOpen} onOpenChange={handleClose}>
      <DialogContent 
        className="w-[95vw] max-w-2xl h-[90vh] flex flex-col overflow-hidden" 
        onPointerDownOutside={(e) => e.preventDefault()}
        onEscapeKeyDown={(e) => {
          if (isSubmitting) {
            e.preventDefault();
          }
        }}
      >
        <DialogHeader className="flex-shrink-0 pb-4">
          <DialogTitle className="text-xl md:text-2xl font-bold text-center text-primary">
            {isSuccess ? 'Ders Hakkında Bilgi' : 'Deneme Dersi Planla'}
          </DialogTitle>
        </DialogHeader>

        <div className="flex-1 overflow-y-auto px-1">
          <AnimatePresence mode="wait">
          {isSuccess ? (
            <motion.div
              key="success"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-center py-8"
            >
              <CheckCircle className="w-16 h-16 text-secondary mx-auto mb-6" />
              
              <div className="bg-background-secondary rounded-2xl p-6 mb-8 text-left">
                <h3 className="font-bold text-lg text-center mb-4 text-primary">Ders hakkında bilgi</h3>
                <div className="space-y-3">
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Ebeveyn:</span>
                    <span className="font-medium">{bookingData.parentName}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Telefon:</span>
                    <span className="font-medium">{bookingData.phone}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Eposta:</span>
                    <span className="font-medium">{bookingData.email}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Çocuk:</span>
                    <span className="font-medium">{bookingData.childName}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Yaş:</span>
                    <span className="font-medium">{bookingData.childAge}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Önerilen Kurs:</span>
                    <span className="font-medium">{bookingData.recommendedCourse}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Tarih ve saat:</span>
                    <span className="font-medium">
                      {bookingData.selectedDate && format(bookingData.selectedDate, 'dd MMMM yyyy', { locale: tr })} {bookingData.selectedTime}
                    </span>
                  </div>
                </div>
              </div>

              <div className="space-y-4">
                <Button 
                  variant="outline" 
                  className="w-full border-secondary text-secondary hover:bg-secondary hover:text-secondary-foreground"
                  size="lg"
                  onClick={resetModal}
                >
                  Yeni ders ekle
                </Button>
              </div>
            </motion.div>
          ) : (
            <motion.div
              key="form"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="space-y-8"
            >
              {/* Progress Bar */}
              <div className="flex items-center justify-center space-x-4 mb-8">
                {[1, 2, 3].map((num) => (
                  <div key={num} className="flex items-center">
                    <div className={cn(
                      "w-10 h-10 rounded-full flex items-center justify-center font-bold text-sm transition-colors",
                      step >= num ? "bg-secondary text-secondary-foreground" : "bg-muted text-muted-foreground"
                    )}>
                      {num}
                    </div>
                    {num < 3 && (
                      <div className={cn(
                        "w-12 h-1 mx-2 transition-colors",
                        step > num ? "bg-secondary" : "bg-muted"
                      )} />
                    )}
                  </div>
                ))}
              </div>

              {/* Step 1: Parent Info */}
              {step === 1 && (
                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  className="space-y-6"
                >
                  <div className="text-center mb-6">
                    <h3 className="text-xl font-bold text-foreground mb-2">Veli Bilgileri</h3>
                    <p className="text-muted-foreground">İletişim kurabilmemiz için bilgilerinizi paylaşın</p>
                  </div>

                  <div className="space-y-4">
                    <div>
                      <Label htmlFor="parentName" className="flex items-center mb-2">
                        <User className="w-4 h-4 mr-2 text-primary" />
                        Veli Adı Soyadı
                      </Label>
                      <Input
                        id="parentName"
                        value={bookingData.parentName}
                        onChange={(e) => handleInputChange('parentName', e.target.value)}
                        onKeyPress={(e) => {
                          if (!/[a-zA-ZğĞıİöÖüÜşŞçÇ\s]/.test(e.key)) {
                            e.preventDefault();
                          }
                        }}
                        placeholder="Adınız ve soyadınız"
                        maxLength={30}
                        className={cn("h-12", validationErrors.parentName && "border-destructive")}
                      />
                      {validationErrors.parentName && (
                        <p className="text-sm text-destructive mt-1">{validationErrors.parentName}</p>
                      )}
                    </div>

                    <div>
                      <Label htmlFor="phone" className="flex items-center mb-2">
                        <Phone className="w-4 h-4 mr-2 text-primary" />
                        Telefon Numarası
                      </Label>
                      <Input
                        id="phone"
                        value={bookingData.phone}
                        onChange={(e) => handleInputChange('phone', e.target.value)}
                        placeholder="+90 5xx xxx xx xx"
                        className={cn("h-12", validationErrors.phone && "border-destructive")}
                      />
                      {validationErrors.phone && (
                        <p className="text-sm text-destructive mt-1">{validationErrors.phone}</p>
                      )}
                    </div>

                    <div>
                      <Label htmlFor="email" className="flex items-center mb-2">
                        <Mail className="w-4 h-4 mr-2 text-primary" />
                        E-posta Adresi
                      </Label>
                      <Input
                        id="email"
                        type="email"
                        value={bookingData.email}
                        onChange={(e) => handleInputChange('email', e.target.value)}
                        placeholder="ornek@email.com"
                        className={cn("h-12", validationErrors.email && "border-destructive")}
                      />
                      {validationErrors.email && (
                        <p className="text-sm text-destructive mt-1">{validationErrors.email}</p>
                      )}
                    </div>
                  </div>

                  <Button 
                    onClick={() => handleNextStep(1)}
                    className="w-full bg-primary hover:bg-primary-hover text-primary-foreground"
                    size="lg"
                  >
                    Devam Et
                  </Button>
                </motion.div>
              )}

              {/* Step 2: Child Info */}
              {step === 2 && (
                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  className="space-y-6"
                >
                  <div className="text-center mb-6">
                    <h3 className="text-xl font-bold text-foreground mb-2">Çocuk Bilgileri</h3>
                    <p className="text-muted-foreground">Çocuğunuzun yaşına uygun program hazırlayalım</p>
                  </div>

                  <div className="space-y-6">
                    <div>
                      <Label htmlFor="childName" className="flex items-center mb-2">
                        <Baby className="w-4 h-4 mr-2 text-primary" />
                        Çocuğun Adı
                      </Label>
                      <Input
                        id="childName"
                        value={bookingData.childName}
                        onChange={(e) => handleInputChange('childName', e.target.value)}
                        onKeyPress={(e) => {
                          if (!/[a-zA-ZğĞıİöÖüÜşŞçÇ\s]/.test(e.key)) {
                            e.preventDefault();
                          }
                        }}
                        placeholder="Çocuğunuzun adı"
                        maxLength={30}
                        className={cn("h-12", validationErrors.childName && "border-destructive")}
                      />
                      {validationErrors.childName && (
                        <p className="text-sm text-destructive mt-1">{validationErrors.childName}</p>
                      )}
                    </div>

                    <div>
                      <Label className="flex items-center mb-4">
                        <Baby className="w-4 h-4 mr-2 text-primary" />
                        Çocuğunuzun yaşını seçin
                      </Label>
                      <div className="grid grid-cols-3 md:grid-cols-4 gap-2 md:gap-3">
                        {ageOptions.map((age) => (
                          <button
                            key={age.value}
                            onClick={() => handleInputChange('childAge', age.value)}
                            className={cn(
                              "h-10 md:h-12 rounded-lg border-2 font-medium transition-all text-sm md:text-base",
                              bookingData.childAge === age.value
                                ? "border-secondary bg-secondary text-secondary-foreground"
                                : "border-border hover:border-secondary hover:bg-secondary/10"
                            )}
                          >
                            {age.label}
                          </button>
                        ))}
                      </div>
                    </div>
                  </div>

                  <div className="flex space-x-4">
                    <Button 
                      variant="outline"
                      onClick={() => setStep(1)}
                      className="flex-1"
                      size="lg"
                    >
                      Geri
                    </Button>
                    <Button 
                      onClick={() => handleNextStep(2)}
                      className="flex-1 bg-primary hover:bg-primary-hover text-primary-foreground"
                      size="lg"
                    >
                      Devam Et
                    </Button>
                  </div>
                </motion.div>
              )}

              {/* Step 3: Date & Time */}
              {step === 3 && (
                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  className="space-y-6"
                >
                  <div className="text-center mb-6">
                    <h3 className="text-xl font-bold text-foreground mb-2">Tarih ve Saat Seçimi</h3>
                    <p className="text-muted-foreground">Uygun tarih ve saati seçin</p>
                  </div>

                  <div className="space-y-6">
                    <div>
                      <Label className="mb-4 block">
                        Uygun saat aralıkları: {bookingData.selectedDate && format(bookingData.selectedDate, 'dd MMMM, EEEE', { locale: tr })}
                      </Label>
                      
                      <div className="flex justify-center mb-6">
                        <Popover open={isCalendarOpen} onOpenChange={setIsCalendarOpen}>
                          <PopoverTrigger asChild>
                            <Button
                              variant="outline"
                              className={cn(
                                "w-full max-w-md justify-start text-left font-normal h-12",
                                !bookingData.selectedDate && "text-muted-foreground"
                              )}
                            >
                              <CalendarIcon className="mr-2 h-4 w-4" />
                              {bookingData.selectedDate ? (
                                format(bookingData.selectedDate, 'dd MMMM yyyy', { locale: tr })
                              ) : (
                                <span>Tarih seçin</span>
                              )}
                            </Button>
                          </PopoverTrigger>
                          <PopoverContent className="w-auto p-0 bg-white border shadow-lg" align="start">
                            <Calendar
                              mode="single"
                              selected={bookingData.selectedDate || undefined}
                              onSelect={(date) => handleInputChange('selectedDate', date)}
                              disabled={(date) => {
                                const today = new Date();
                                today.setHours(0, 0, 0, 0);
                                return date.getTime() < today.getTime();
                              }}
                              initialFocus
                              locale={tr}
                              className="p-3 pointer-events-auto bg-white"
                            />
                          </PopoverContent>
                        </Popover>
                      </div>
                    </div>

                    {bookingData.selectedDate && (
                      <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                      >
                        <div className={cn(
                          "grid gap-2 md:gap-3",
                          getTimeSlots(bookingData.selectedDate).length > 8 ? "grid-cols-3 md:grid-cols-6" : "grid-cols-2 md:grid-cols-4"
                        )}>
                          {getTimeSlots(bookingData.selectedDate).map((time) => (
                            <button
                              key={time}
                              onClick={() => handleInputChange('selectedTime', time)}
                              className={cn(
                                "h-10 md:h-12 rounded-lg border-2 font-medium transition-all flex items-center justify-center text-sm md:text-base",
                                bookingData.selectedTime === time
                                  ? "border-secondary bg-secondary text-secondary-foreground"
                                  : "border-border hover:border-secondary hover:bg-secondary/10"
                              )}
                            >
                              {time}
                            </button>
                          ))}
                        </div>

                        <div className="text-center mt-4 space-y-2">
                          <div className="text-sm text-muted-foreground">
                            <span>Saat diliminde gösterilen saatler: </span>
                            <Badge variant="outline" className="text-xs">
                              (UTC +03:00) Europe/Istanbul
                            </Badge>
                          </div>
                        </div>
                      </motion.div>
                    )}
                  </div>

                  <div className="flex space-x-4">
                    <Button 
                      variant="outline"
                      onClick={() => setStep(2)}
                      className="flex-1"
                      size="lg"
                    >
                      Geri
                    </Button>
                    <Button 
                      onClick={handleSubmit}
                      disabled={!isStep3Valid || isSubmitting}
                      className="flex-1 bg-accent text-accent-foreground hover:bg-accent-hover"
                      size="lg"
                    >
                      {isSubmitting ? (
                        <div className="flex items-center">
                          <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-accent-foreground mr-2"></div>
                          İşleniyor...
                        </div>
                      ) : (
                        'Ders al'
                      )}
                    </Button>
                  </div>
                </motion.div>
              )}
            </motion.div>
          )}
          </AnimatePresence>
        </div>
      </DialogContent>
    </Dialog>
  );
};