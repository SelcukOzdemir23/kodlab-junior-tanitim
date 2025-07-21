import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { Calendar } from '@/components/ui/calendar';
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover';
import { Badge } from '@/components/ui/badge';
import { CalendarIcon, Clock, User, Phone, Mail, Baby, CheckCircle, X } from 'lucide-react';
import { format } from 'date-fns';
import { tr } from 'date-fns/locale';
import { cn } from '@/lib/utils';

interface DemoBookingModalProps {
  isOpen: boolean;
  onClose: () => void;
}

interface BookingData {
  parentName: string;
  phone: string;
  email: string;
  childName: string;
  childAge: number;
  selectedDate: Date | null;
  selectedTime: string;
}

const timeSlots = [
  '09:00', '10:00', '11:00', '14:00', '15:00', '16:00', '17:00'
];

const ageOptions = [
  { value: 5, label: '< 5', disabled: true },
  { value: 6, label: '6' },
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
  { value: 18, label: '> 17', disabled: true }
];

export const DemoBookingModal = ({ isOpen, onClose }: DemoBookingModalProps) => {
  const [step, setStep] = useState(1);
  const [bookingData, setBookingData] = useState<BookingData>({
    parentName: '',
    phone: '',
    email: '',
    childName: '',
    childAge: 0,
    selectedDate: null,
    selectedTime: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleInputChange = (field: keyof BookingData, value: any) => {
    setBookingData(prev => ({ ...prev, [field]: value }));
  };

  const handleSubmit = async () => {
    setIsSubmitting(true);
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    // Here you would normally save to Supabase
    console.log('Booking data:', bookingData);
    
    setIsSubmitting(false);
    setIsSuccess(true);
  };

  const resetModal = () => {
    setStep(1);
    setBookingData({
      parentName: '',
      phone: '',
      email: '',
      childName: '',
      childAge: 0,
      selectedDate: null,
      selectedTime: ''
    });
    setIsSuccess(false);
    setIsSubmitting(false);
  };

  const handleClose = () => {
    resetModal();
    onClose();
  };

  const isStep1Valid = bookingData.parentName && bookingData.phone && bookingData.email;
  const isStep2Valid = bookingData.childName && bookingData.childAge > 0;
  const isStep3Valid = bookingData.selectedDate && bookingData.selectedTime;

  return (
    <Dialog open={isOpen} onOpenChange={handleClose}>
      <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto">
        <DialogHeader className="relative">
          <button
            onClick={handleClose}
            className="absolute right-0 top-0 p-2 hover:bg-muted rounded-md transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
          <DialogTitle className="text-2xl font-bold text-center text-primary">
            {isSuccess ? 'Ders Hakkında Bilgi' : 'Deneme Dersi Planla'}
          </DialogTitle>
        </DialogHeader>

        <AnimatePresence mode="wait">
          {isSuccess ? (
            <motion.div
              key="success"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-center py-8"
            >
              <CheckCircle className="w-16 h-16 text-secondary mx-auto mb-6" />
              
              {/* Booking Details */}
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
                    <span className="text-muted-foreground">Tarih ve saat:</span>
                    <span className="font-medium">
                      {bookingData.selectedDate && format(bookingData.selectedDate, 'dd MMMM yyyy', { locale: tr })} {bookingData.selectedTime}
                    </span>
                  </div>
                </div>
              </div>

              <div className="space-y-4">
                <Button 
                  className="w-full bg-accent text-accent-foreground hover:bg-accent-hover"
                  size="lg"
                >
                  Takvime ekle
                </Button>
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
                        placeholder="Adınız ve soyadınız"
                        className="h-12"
                      />
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
                        className="h-12"
                      />
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
                        className="h-12"
                      />
                    </div>
                  </div>

                  <Button 
                    onClick={() => setStep(2)}
                    disabled={!isStep1Valid}
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
                        placeholder="Çocuğunuzun adı"
                        className="h-12"
                      />
                      <p className="text-xs text-muted-foreground mt-1">
                        Lütfen çocuğunuzun tam adını ve soyadını doğru olarak giriniz. Sizin iletişiğiniz şekilde de mevzuriyet sertifikasında görünecektir. Teşekkür ederiz!
                      </p>
                    </div>

                    <div>
                      <Label className="flex items-center mb-4">
                        <Baby className="w-4 h-4 mr-2 text-primary" />
                        Çocuğunuzun yaşını seçin
                      </Label>
                      <div className="grid grid-cols-4 gap-3">
                        {ageOptions.map((age) => (
                          <button
                            key={age.value}
                            disabled={age.disabled}
                            onClick={() => !age.disabled && handleInputChange('childAge', age.value)}
                            className={cn(
                              "h-12 rounded-lg border-2 font-medium transition-all",
                              age.disabled 
                                ? "border-muted bg-muted text-muted-foreground cursor-not-allowed"
                                : bookingData.childAge === age.value
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
                      onClick={() => setStep(3)}
                      disabled={!isStep2Valid}
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
                    {/* Date Selection */}
                    <div>
                      <Label className="mb-4 block">
                        Uygun saat aralıkları: {bookingData.selectedDate && format(bookingData.selectedDate, 'dd MMMM, EEEE', { locale: tr })}
                      </Label>
                      
                      <div className="flex justify-center mb-6">
                        <Popover>
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
                          <PopoverContent className="w-auto p-0" align="start">
                            <Calendar
                              mode="single"
                              selected={bookingData.selectedDate || undefined}
                              onSelect={(date) => handleInputChange('selectedDate', date)}
                              disabled={(date) => date < new Date() || date.getDay() === 0} // Disable past dates and Sundays
                              initialFocus
                              locale={tr}
                              className="p-3 pointer-events-auto"
                            />
                          </PopoverContent>
                        </Popover>
                      </div>
                    </div>

                    {/* Time Selection */}
                    {bookingData.selectedDate && (
                      <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                      >
                        <div className="flex items-center justify-between mb-4">
                          <span className="text-sm text-muted-foreground">← Önceki gün</span>
                          <span className="text-sm text-muted-foreground">Sonraki gün →</span>
                        </div>
                        
                        <div className="grid grid-cols-4 gap-3">
                          {timeSlots.map((time) => (
                            <button
                              key={time}
                              onClick={() => handleInputChange('selectedTime', time)}
                              className={cn(
                                "h-12 rounded-lg border-2 font-medium transition-all flex items-center justify-center",
                                bookingData.selectedTime === time
                                  ? "border-secondary bg-secondary text-secondary-foreground"
                                  : "border-border hover:border-secondary hover:bg-secondary/10"
                              )}
                            >
                              {time}
                            </button>
                          ))}
                        </div>

                        <div className="text-center mt-4">
                          <p className="text-sm text-muted-foreground">
                            Saat diliminde gösterilen saatler:{' '}
                            <Badge variant="outline" className="text-xs">
                              (UTC +03:00) Europe/Istanbul
                            </Badge>
                          </p>
                          <p className="text-xs text-muted-foreground mt-2">
                            Saat diliminde gösterilen saatler, geçerli saat{' '}
                            <strong>{new Date().toLocaleTimeString('tr-TR')}</strong>
                          </p>
                          <p className="text-xs text-muted-foreground mt-1">
                            Deneme dersi için başlangıç için ebeveyn olarak eşlik etmeniz gerektiğini lütfen unutmayın, aksi takdirde deneme dersi yapılamayacaktır
                          </p>
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
      </DialogContent>
    </Dialog>
  );
};