import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Progress } from '@/components/ui/progress';
import { Card, CardContent } from '@/components/ui/card';
import { ArrowLeft, ArrowRight, Sparkles } from 'lucide-react';
import { QuizBookingModal } from '@/components/QuizBookingModal';

interface QuizQuestion {
  id: number;
  type: 'quiz' | 'parent-info';
  question: string;
  multiSelect?: boolean;
  inputType?: 'name' | 'phone' | 'email';
  options?: {
    id: string;
    text: string;
    emoji: string;
    category?: string;
    value?: string;
  }[];
}

interface QuizResult {
  category: string;
  course: string;
  description: string;
  color: string;
}

// Quiz soruları ve veli bilgi sorularını karıştırıyoruz
const allQuestions: QuizQuestion[] = [
  {
    id: 1,
    type: 'quiz',
    question: "Çocuğunuz genellikle boş zamanlarını nasıl geçirir?",
    multiSelect: true,
    options: [
      { id: "tech", text: "Cep telefonu ve bilgisayarda oyun oynar", emoji: "📱", category: "technology" },
      { id: "art", text: "Sanatsal faaliyetlerde bulunur: çizim, müzik, oyunculuk", emoji: "🎨", category: "art" },
      { id: "sport", text: "Spor yapar", emoji: "⚽", category: "sport" },
      { id: "family", text: "Ailesiyle vakit geçirir", emoji: "👨👩👧👦", category: "family" },
      { id: "movie", text: "Çizgi film izler", emoji: "👀", category: "entertainment" },
      { id: "social", text: "Arkadaşlarıyla sosyalleşir", emoji: "🤝", category: "social" }
    ]
  },
  {
    id: 2,
    type: 'parent-info',
    question: "Sizinle iletişim kurabilmemiz için adınızı öğrenebilir miyiz?",
    inputType: 'name'
  },
  {
    id: 3,
    type: 'quiz',
    question: "Çocuğunuzun okulda en sevdiği ders hangisidir?",
    multiSelect: true,
    options: [
      { id: "science", text: "Fen bilimleri", emoji: "🔬", category: "science" },
      { id: "art", text: "Sanat ve tasarım", emoji: "🎨", category: "art" },
      { id: "computer", text: "Bilgisayar bilimi", emoji: "💻", category: "technology" },
      { id: "history", text: "Tarih, Edebiyat", emoji: "📚", category: "literature" },
      { id: "math", text: "Matematik", emoji: "📐", category: "math" },
      { id: "language", text: "Yabancı diller", emoji: "🌍", category: "language" }
    ]
  },
  {
    id: 4,
    type: 'parent-info',
    question: "Deneme dersi için hangi günler size uygun?",
    multiSelect: true,
    options: [
      { id: "monday", text: "Pazartesi", emoji: "📅", value: "monday" },
      { id: "tuesday", text: "Salı", emoji: "📅", value: "tuesday" },
      { id: "wednesday", text: "Çarşamba", emoji: "📅", value: "wednesday" },
      { id: "thursday", text: "Perşembe", emoji: "📅", value: "thursday" },
      { id: "friday", text: "Cuma", emoji: "📅", value: "friday" },
      { id: "saturday", text: "Cumartesi", emoji: "🎆", value: "saturday" },
      { id: "sunday", text: "Pazar", emoji: "🎆", value: "sunday" }
    ]
  },
  {
    id: 5,
    type: 'quiz',
    question: "Çocuğunuz yeni bir şey öğrenirken hangi yöntemi tercih eder?",
    options: [
      { id: "visual", text: "Görsel materyallerle (resim, video)", emoji: "👁️", category: "visual" },
      { id: "hands-on", text: "Uygulamalı deneyimlerle", emoji: "🤲", category: "practical" },
      { id: "reading", text: "Okuyarak ve araştırarak", emoji: "📖", category: "academic" },
      { id: "social-learning", text: "Arkadaşlarıyla birlikte", emoji: "👥", category: "social" },
      { id: "games", text: "Oyunlar ve eğlenceli aktivitelerle", emoji: "🎮", category: "gamification" },
      { id: "step-by-step", text: "Adım adım rehberlikle", emoji: "📋", category: "structured" }
    ]
  },
  {
    id: 6,
    type: 'parent-info',
    question: "İletişim için telefon numaranızı alabilir miyiz?",
    inputType: 'phone'
  },
  {
    id: 7,
    type: 'parent-info',
    question: "Hangi saatlerde müsaitsiniz?",
    options: [
      { id: "morning", text: "Sabah (10:00-12:00)", emoji: "🌅", value: "morning" },
      { id: "afternoon", text: "Öğleden sonra (14:00-17:00)", emoji: "☀️", value: "afternoon" },
      { id: "evening", text: "Akşam (18:00-21:00)", emoji: "🌆", value: "evening" }
    ]
  },
  {
    id: 8,
    type: 'quiz',
    question: "Çocuğunuzun en büyük ilgi alanı hangisidir?",
    options: [
      { id: "creating", text: "Bir şeyler yaratmak ve tasarlamak", emoji: "🎨", category: "creative" },
      { id: "problem-solving", text: "Problem çözmek ve bulmacalar", emoji: "🧩", category: "logical" },
      { id: "storytelling", text: "Hikaye anlatmak ve yazmak", emoji: "📚", category: "narrative" },
      { id: "building", text: "İnşa etmek ve monte etmek", emoji: "🔧", category: "engineering" },
      { id: "exploring", text: "Keşfetmek ve deneyim yapmak", emoji: "🔍", category: "exploration" },
      { id: "helping", text: "Başkalarına yardım etmek", emoji: "🤝", category: "social" }
    ]
  },
  {
    id: 9,
    type: 'quiz',
    question: "Çocuğunuz gelecekte hangi alanda kariyer yapmak istiyor?",
    options: [
      { id: "tech-career", text: "Teknoloji ve yazılım", emoji: "💻", category: "technology" },
      { id: "art-career", text: "Sanat ve tasarım", emoji: "🎨", category: "art" },
      { id: "science-career", text: "Bilim ve mühendislik", emoji: "🔬", category: "science" },
      { id: "business-career", text: "İş dünyası ve girişimcilik", emoji: "💼", category: "business" },
      { id: "education-career", text: "Eğitim ve öğretmenlik", emoji: "👩🏫", category: "education" },
      { id: "undecided", text: "Henüz karar vermedi", emoji: "🤔", category: "undecided" }
    ]
  }
];

const courseMapping = {
  'scratch-ile-baslangic': { name: 'Scratch ile Başlangıç', color: 'bg-orange-500' },
  'python-ile-kodlama': { name: 'Python ile Kodlama', color: 'bg-blue-500' },
  'python-basic': { name: 'Python Basic', color: 'bg-indigo-500' },
  'tinkercad': { name: 'Tinkercad ile 3D Tasarım', color: 'bg-green-500' },
  'kodu': { name: 'Kodu ile Oyun Geliştirme', color: 'bg-red-500' },
  'gimp': { name: 'GIMP ile Grafik Tasarım', color: 'bg-pink-500' },
  'web-gelistirme': { name: 'Web Geliştirme', color: 'bg-cyan-500' },
  'dijital-tasarim-pro': { name: 'Dijital Tasarım Pro', color: 'bg-purple-500' }
};

const categoryToCourses: Record<string, string[]> = {
  technology: ['python-ile-kodlama', 'python-basic', 'web-gelistirme'],
  art: ['dijital-tasarim-pro', 'gimp'],
  science: ['tinkercad', 'python-basic'],
  math: ['scratch-ile-baslangic', 'python-basic'],
  creative: ['gimp', 'dijital-tasarim-pro'],
  logical: ['python-basic', 'scratch-ile-baslangic'],
  engineering: ['tinkercad', 'python-ile-kodlama'],
  gamification: ['kodu', 'scratch-ile-baslangic'],
  general: ['web-gelistirme', 'scratch-ile-baslangic']
};

const NameInput = ({ onSubmit }: { onSubmit: (name: string) => void }) => {
  const [name, setName] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (name.trim()) {
      onSubmit(name.trim());
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="max-w-md mx-auto">
        <Input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Adınız ve soyadınız"
          className="h-12 text-center text-lg"
          autoFocus
        />
      </div>
      <Button
        type="submit"
        disabled={!name.trim()}
        className="w-full bg-blue-600 hover:bg-blue-700 text-white"
        size="lg"
      >
        Devam Et
      </Button>
    </form>
  );
};

const PhoneInput = ({ onSubmit }: { onSubmit: (phone: string) => void }) => {
  const [phone, setPhone] = useState('+90 ');

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

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (phone.length >= 8) {
      onSubmit(phone);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="max-w-md mx-auto">
        <Input
          type="tel"
          value={phone}
          onChange={(e) => setPhone(formatPhoneNumber(e.target.value))}
          placeholder="+90 5xx xxx xx xx"
          className="h-12 text-center text-lg"
          autoFocus
        />
      </div>
      <Button
        type="submit"
        disabled={phone.length < 8}
        className="w-full bg-blue-600 hover:bg-blue-700 text-white"
        size="lg"
      >
        Devam Et
      </Button>
    </form>
  );
};

export const WelcomeQuiz = () => {
  const [showWelcome, setShowWelcome] = useState(true);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState<Record<number, string | string[]>>({});
  const [selectedOptions, setSelectedOptions] = useState<Record<number, string[]>>({});
  const [showResult, setShowResult] = useState(false);
  const [result, setResult] = useState<QuizResult | null>(null);
  const [showBookingModal, setShowBookingModal] = useState(false);
  const [parentInfo, setParentInfo] = useState({
    name: '',
    phone: '',
    email: '',
    childName: '',
    childAge: 0,
    availableTime: '',
    availableDay: ''
  });

  const totalSteps = allQuestions.length;
  const progress = showWelcome ? 0 : ((currentQuestion + 1) / totalSteps) * 100;

  const handleAnswer = (optionId: string, category?: string, value?: string) => {
    const currentQ = allQuestions[currentQuestion];

    if (currentQ.multiSelect) {
      const currentSelections = selectedOptions[currentQuestion] || [];
      const isSelected = currentSelections.includes(optionId);

      let newSelections;
      if (isSelected) {
        newSelections = currentSelections.filter(id => id !== optionId);
      } else {
        newSelections = [...currentSelections, optionId];
      }

      setSelectedOptions(prev => ({ ...prev, [currentQuestion]: newSelections }));

      if (currentQ.type === 'quiz') {
        const categories = newSelections.map(id =>
          currentQ.options?.find(opt => opt.id === id)?.category
        ).filter(Boolean);
        setAnswers(prev => ({ ...prev, [currentQuestion]: categories }));
      } else if (currentQ.type === 'parent-info') {
        const values = newSelections.map(id =>
          currentQ.options?.find(opt => opt.id === id)?.value
        ).filter(Boolean);
        setParentInfo(prev => ({
          ...prev,
          availableDay: values.join(', ')
        }));
      }
      return;
    }

    if (currentQ.type === 'quiz' && category) {
      const newAnswers = { ...answers, [currentQuestion]: category };
      setAnswers(newAnswers);
    } else if (currentQ.type === 'parent-info') {
      if (currentQ.inputType === 'name') {
        return;
      } else if (value) {
        setParentInfo(prev => ({
          ...prev,
          [currentQ.id === 7 ? 'availableTime' : 'availableDay']: value
        }));
      }
    }

    if (currentQuestion < allQuestions.length - 1) {
      setTimeout(() => {
        setCurrentQuestion(currentQuestion + 1);
      }, 300);
    } else {
      setTimeout(() => {
        calculateResult(answers);
      }, 300);
    }
  };

  const handleMultiSelectNext = () => {
    if (currentQuestion < allQuestions.length - 1) {
      setTimeout(() => {
        setCurrentQuestion(currentQuestion + 1);
      }, 300);
    } else {
      setTimeout(() => {
        calculateResult(answers);
      }, 300);
    }
  };

  const handleNameSubmit = (name: string) => {
    setParentInfo(prev => ({ ...prev, name }));
    if (currentQuestion < allQuestions.length - 1) {
      setTimeout(() => {
        setCurrentQuestion(currentQuestion + 1);
      }, 300);
    }
  };

  const handlePhoneSubmit = (phone: string) => {
    setParentInfo(prev => ({ ...prev, phone }));
    if (currentQuestion < allQuestions.length - 1) {
      setTimeout(() => {
        setCurrentQuestion(currentQuestion + 1);
      }, 300);
    }
  };

  const calculateResult = (allAnswers: Record<number, string | string[]>) => {
    const categoryCount: Record<string, number> = {};

    Object.values(allAnswers).forEach(answer => {
      if (Array.isArray(answer)) {
        answer.forEach(category => {
          categoryCount[category] = (categoryCount[category] || 0) + 1;
        });
      } else {
        categoryCount[answer] = (categoryCount[answer] || 0) + 1;
      }
    });

    // En çok puan alan kategorileri bul
    const sortedCategories = Object.entries(categoryCount)
      .sort(([, a], [, b]) => b - a)
      .slice(0, 3); // En çok 3 kategori

    const recommendedCourses: string[] = [];
    const usedCourses = new Set<string>();

    // Her kategori için kursları ekle
    sortedCategories.forEach(([category]) => {
      const courses = categoryToCourses[category] || [];
      courses.forEach(course => {
        if (!usedCourses.has(course) && recommendedCourses.length < 3) {
          recommendedCourses.push(course);
          usedCourses.add(course);
        }
      });
    });

    // Eğer hiç kurs bulunamazsa varsayılan
    if (recommendedCourses.length === 0) {
      recommendedCourses.push('scratch-ile-baslangic');
    }

    const courseNames = recommendedCourses.map(slug => courseMapping[slug as keyof typeof courseMapping]?.name || slug).join(', ');
    const primaryColor = courseMapping[recommendedCourses[0] as keyof typeof courseMapping]?.color || 'bg-blue-500';

    setResult({
      category: sortedCategories[0]?.[0] || 'Genel',
      course: courseNames,
      description: `Çocuğunuzun ilgi alanlarına göre ${recommendedCourses.length > 1 ? 'bu kursları' : 'bu kursu'} öneriyoruz.`,
      color: primaryColor
    });
    setShowResult(true);
  };

  const goBack = () => {
    if (currentQuestion > 0) {
      setCurrentQuestion(currentQuestion - 1);
    }
  };

  const resetQuiz = () => {
    setCurrentQuestion(0);
    setAnswers({});
    setShowResult(false);
    setResult(null);
    setShowWelcome(true);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 via-blue-50 to-purple-50">
      {/* Header */}
      <div className="bg-white shadow-sm border-b">
        <div className="max-w-4xl mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <img src="/logo.png" alt="Kodlab Junior" className="h-8" />
              <span className="text-xl font-bold text-gray-800">kodlab junior</span>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-4 py-4 lg:py-8">
        <AnimatePresence mode="wait">
          {showWelcome ? (
            <motion.div
              key="welcome"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="min-h-[90vh] flex items-center justify-center py-4"
            >
              <div className="relative w-full max-w-7xl mx-auto">
                {/* Background with nature elements */}
                <div className="absolute inset-0 bg-gradient-to-br from-green-100 via-yellow-50 to-orange-100 rounded-3xl opacity-80"></div>

                {/* Decorative elements */}
                <div className="absolute top-4 left-4 md:top-10 md:left-10 text-3xl md:text-5xl animate-bounce">🦋</div>
                <div className="absolute top-4 right-8 md:top-26 md:right-20 text-xl md:text-2xl animate-pulse delay-300">🌸</div>
                <div className="absolute bottom-16 left-4 md:bottom-20 md:left-20 text-3xl md:text-5xl animate-bounce delay-300">🌿</div>
                <div className="absolute bottom-4 right-4 md:bottom-10 md:right-10 text-2xl md:text-4xl animate-pulse delay-500">🐝</div>

                <div className="relative z-10 text-center py-6 lg:py-12 px-4 lg:px-8">
                  <div className="mb-3 md:mb-5">
                    <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-green-800 mb-2 lg:mb-3" style={{ fontFamily: 'serif' }}>
                      ÇOCUKLAR İÇİN
                    </h1>
                    <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-green-700 mb-1 lg:mb-2" style={{ fontFamily: 'serif' }}>
                      KODLAMA
                    </h2>
                    <p className="text-xl md:text-2xl text-green-600 font-medium mb-1">
                      ve
                    </p>
                    <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-green-700 mb-3 lg:mb-4" style={{ fontFamily: 'serif' }}>
                      TASARIM
                    </h2>

                    <p className="text-lg md:text-xl lg:text-2xl text-green-600 font-medium mb-2">
                      Yaş: 7-17
                    </p>
                    <p className="text-base md:text-lg lg:text-xl text-green-600 underline decoration-2 mb-4">
                      Deneme dersine katılarak kursta yerinizi ayırtın
                    </p>
                  </div>

                  <div className="flex flex-col md:flex-row items-center justify-center gap-4 md:gap-6 mb-4 md:mb-6">
                    <div className="text-center transform hover:scale-105 transition-transform duration-200">
                      <div className="text-2xl md:text-4xl line-through text-gray-500 mb-1 md:mb-2 font-bold">1350 TL</div>
                      <div className="bg-gradient-to-r from-yellow-400 to-yellow-500 text-black px-4 py-2 md:px-6 md:py-3 rounded-full text-xl md:text-3xl font-bold shadow-lg border-2 border-yellow-600">
                        ücretsiz
                      </div>
                    </div>

                    <div className="bg-gradient-to-r from-green-500 to-green-600 text-white px-4 py-3 md:px-6 md:py-5 rounded-2xl text-center max-w-sm shadow-xl border border-green-400 transform hover:scale-105 transition-transform duration-200">
                      <p className="text-sm md:text-lg font-semibold mb-1 md:mb-2">
                        Bir kaç soruyu yanıtlayın ve çocuğunuz için
                      </p>
                      <p className="text-base md:text-xl font-bold">
                        ÜCRETSİZ ders alın
                      </p>
                    </div>
                  </div>

                  {/* Floating arrow pointing to button */}
                  <motion.div
                    animate={{ y: [0, -8, 0] }}
                    transition={{ repeat: Infinity, duration: 3 }}
                    className="text-2xl md:text-3xl mb-2 md:mb-3"
                  >
                    ⬇️
                  </motion.div>

                  <motion.div
                    initial={{ scale: 0.8, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ delay: 0.5, duration: 0.6 }}
                    className="relative mb-3 md:mb-4"
                  >
                    <Button
                      onClick={() => setShowWelcome(false)}
                      className="relative bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white px-12 py-6 lg:px-20 lg:py-10 text-xl md:text-2xl lg:text-3xl font-bold rounded-3xl shadow-2xl transform hover:scale-110 transition-all duration-300 border-2 border-blue-500"
                      style={{
                        animation: 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite'
                      }}
                    >
                      <span className="relative z-10 flex items-center gap-2 md:gap-3">
                        Ders alın
                        <span className="text-xl md:text-2xl">🚀</span>
                      </span>
                      {/* Glow effect */}
                      <div className="absolute inset-0 bg-gradient-to-r from-blue-400 to-blue-600 rounded-3xl blur-lg opacity-30" style={{
                        animation: 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite'
                      }}></div>
                    </Button>
                  </motion.div>

                  {/* Additional encouraging text */}
                  <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 1, duration: 0.5 }}
                    className="text-xs md:text-base text-green-600 mt-3 md:mt-6 font-medium"
                  >
                    ✨ Sadece 2 dakika sürer • Hiçbir ödeme bilgisi istenmez ✨
                  </motion.p>
                </div>
              </div>
            </motion.div>
          ) : !showResult ? (
            <motion.div
              key="quiz"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="space-y-8"
            >
              {/* Progress */}
              <div className="space-y-2">
                <div className="flex justify-between text-sm text-gray-600">
                  <span>Tamamlandı: {Math.round(progress)}%</span>
                  <span>{currentQuestion + 1} / {totalSteps}</span>
                </div>
                <Progress value={progress} className="h-2" />
              </div>

              {/* Question */}
              <Card className="border-0 shadow-lg">
                <CardContent className="p-8">
                  <motion.div
                    key={currentQuestion}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    className="space-y-8"
                  >
                    <h2 className="text-2xl font-bold text-center text-gray-800 mb-8">
                      {allQuestions[currentQuestion].question}
                    </h2>

                    {allQuestions[currentQuestion].type === 'parent-info' && allQuestions[currentQuestion].inputType === 'name' ? (
                      <NameInput onSubmit={handleNameSubmit} />
                    ) : allQuestions[currentQuestion].type === 'parent-info' && allQuestions[currentQuestion].inputType === 'phone' ? (
                      <PhoneInput onSubmit={handlePhoneSubmit} />
                    ) : (
                      <>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                          {allQuestions[currentQuestion].options?.map((option) => {
                            const isSelected = selectedOptions[currentQuestion]?.includes(option.id) || false;
                            return (
                              <motion.button
                                key={option.id}
                                onClick={() => {
                                  if (allQuestions[currentQuestion].type === 'quiz') {
                                    handleAnswer(option.id, option.category);
                                  } else {
                                    handleAnswer(option.id, undefined, option.value);
                                  }
                                }}
                                className={`p-4 text-left border-2 rounded-xl transition-all duration-200 group ${isSelected
                                  ? 'border-blue-500 bg-blue-50'
                                  : 'border-gray-200 hover:border-blue-400 hover:bg-blue-50'
                                  } ${!allQuestions[currentQuestion].multiSelect || selectedOptions[currentQuestion]?.length ? '' : 'border-gray-200'}`}
                                whileHover={{ scale: 1.02 }}
                                whileTap={{ scale: 0.98 }}
                              >
                                <div className="flex items-center space-x-3">
                                  <span className="text-2xl">{option.emoji}</span>
                                  <span className={`font-medium ${isSelected ? 'text-blue-700' : 'text-gray-700 group-hover:text-blue-700'
                                    }`}>
                                    {option.text}
                                  </span>
                                  {isSelected && <span className="text-blue-500 ml-auto">✓</span>}
                                </div>
                              </motion.button>
                            );
                          })}
                        </div>
                        {allQuestions[currentQuestion].multiSelect && (
                          <div className="text-center mt-6">
                            <Button
                              onClick={handleMultiSelectNext}
                              disabled={!selectedOptions[currentQuestion]?.length}
                              className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3"
                            >
                              Devam Et ({selectedOptions[currentQuestion]?.length || 0} seçili)
                            </Button>
                          </div>
                        )}
                      </>
                    )}
                  </motion.div>
                </CardContent>
              </Card>

              {/* Navigation */}
              <div className="flex justify-between">
                <Button
                  variant="outline"
                  onClick={goBack}
                  disabled={currentQuestion === 0}
                  className="flex items-center space-x-2"
                >
                  <ArrowLeft className="w-4 h-4" />
                  <span>Önceki</span>
                </Button>
                <div className="text-sm text-gray-500 self-center">
                  Bir seçenek seçin
                </div>
              </div>
            </motion.div>
          ) : (
            <motion.div
              key="result"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="space-y-8"
            >
              {/* Result Card */}
              <Card className="border-0 shadow-xl overflow-hidden">
                <div className={`h-2 ${result?.color}`} />
                <CardContent className="p-8 text-center">
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ delay: 0.2 }}
                  >
                    <Sparkles className="w-16 h-16 text-yellow-500 mx-auto mb-4" />
                  </motion.div>

                  <h2 className="text-3xl font-bold text-gray-800 mb-4">
                    Deneme dersi için hangi saatte uygunsunuz?
                  </h2>

                  <p className="text-gray-600 mb-6">
                    Özel dersinizi rezerve etmek için birkaç adım kaldı! Sizinle tanışmak için sabırsızlanıyoruz 🥰
                  </p>

                  <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-2xl p-6 mb-8">
                    <h3 className="text-xl font-bold text-gray-800 mb-2">
                      Önerilen Kurs{result?.course.includes(',') ? 'lar' : ''}: {result?.course}
                    </h3>
                    <p className="text-gray-600">
                      {result?.description}
                    </p>
                  </div>

                  <div className="space-y-4">
                    <Button
                      onClick={() => setShowBookingModal(true)}
                      className="w-full bg-blue-600 hover:bg-blue-700 text-white py-4 text-lg font-semibold"
                      size="lg"
                    >
                      Rezervasyon için tıklayın 🎯
                    </Button>

                    <Button
                      variant="outline"
                      onClick={resetQuiz}
                      className="w-full"
                    >
                      Quizi tekrar yap
                    </Button>
                  </div>
                </CardContent>
              </Card>

              {/* Additional Info */}
              <div className="text-center space-y-2">
                <p className="text-sm text-gray-500">
                  Saat (UTC +03:00) Europe/Istanbul
                </p>
                <p className="text-sm text-gray-500">
                  Saat diliminde gösterilen saatler, geçerli saat <strong>{new Date().toLocaleTimeString('tr-TR')}</strong>
                </p>
                <p className="text-sm text-gray-500">
                  Deneme dersi için başlangıç için ebeveyn olarak eşlik etmeniz gerektiğini lütfen unutmayın, aksi takdirde deneme dersi yapılamayacaktır
                </p>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* Booking Modal */}
      <QuizBookingModal
        isOpen={showBookingModal}
        onClose={() => setShowBookingModal(false)}
        recommendedCourse={result?.course || ''}
        parentInfo={{
          name: parentInfo.name,
          phone: parentInfo.phone,
          availableDay: parentInfo.availableDay,
          availableTime: parentInfo.availableTime
        }}
      />
    </div>
  );
};