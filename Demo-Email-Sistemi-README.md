# 📧 Demo Ders E-posta Bildirim Sistemi

Bu sistem sayesinde demo ders rezervasyonlarını otomatik olarak e-posta ile alabilirsiniz.

## 🚀 Hızlı Başlangıç

### 1. EmailJS Hesabı Oluşturun
- [EmailJS.com](https://www.emailjs.com/) adresine gidin
- Ücretsiz hesap oluşturun

### 2. E-posta Servisinizi Bağlayın
- Dashboard'da "Add New Service" butonuna tıklayın
- Gmail, Outlook veya başka bir e-posta sağlayıcısını seçin
- Service ID'yi not alın (örn: `service_abc123`)

### 3. E-posta Şablonunu Oluşturun
- "Email Templates" sekmesine gidin
- "Create New Template" butonuna tıklayın
- `EmailJS-Kurulum-Rehberi.md` dosyasındaki HTML şablonunu kopyalayın
- Template ID'yi not alın (örn: `template_xyz789`)

### 4. API Anahtarınızı Alın
- "Account" sekmesinden Public Key'i kopyalayın (örn: `user_abc123xyz`)

### 5. Environment Variables Ayarlayın
Proje kök dizininde `.env` dosyası oluşturun:
```env
VITE_EMAILJS_SERVICE_ID=service_abc123
VITE_EMAILJS_TEMPLATE_ID=template_xyz789
VITE_EMAILJS_PUBLIC_KEY=user_abc123xyz
```

### 6. E-posta Adresinizi Güncelleyin
`src/services/emailService.ts` dosyasında:
```typescript
to_email: 'your-email@domain.com', // Kendi e-posta adresinizi yazın
```

## ✅ Test Etme

Uygulamayı çalıştırın ve bir demo ders rezervasyonu yapın. E-posta otomatik olarak gelecektir.

### Manuel Test
Konsol'da test e-postası göndermek için:
```javascript
emailService.sendTestEmail();
```

## 📋 E-posta İçeriği

Gönderilen e-postalar şu bilgileri içerir:

### 👨‍👩‍👧‍👦 Veli Bilgileri
- Ad Soyad
- Telefon numarası (tıklanabilir)
- E-posta adresi (tıklanabilir)

### 👶 Çocuk Bilgileri
- Çocuğun adı
- Yaşı

### 📚 Ders Bilgileri
- Seçilen tarih
- Seçilen saat
- Saat dilimi
- Haftanın günü

### 📊 Sistem Bilgileri
- Rezervasyon ID
- Durum
- Kayıt zamanı

### 🔗 Hızlı İletişim
- 📞 Telefon etme linki
- 📧 E-posta gönderme linki
- 💬 WhatsApp mesaj linki

## 🎨 E-posta Tasarımı

- ✅ Mobil uyumlu responsive tasarım
- ✅ Modern ve profesyonel görünüm
- ✅ Renkli ve dikkat çekici header
- ✅ Okunabilir font ve boşluklar
- ✅ Kategorize edilmiş bilgi blokları
- ✅ Call-to-action butonları

## 🔧 Sorun Giderme

### E-posta gelmiyor?
1. EmailJS servis durumunu kontrol edin
2. API anahtarlarının doğru olduğunu kontrol edin
3. Spam klasörünü kontrol edin
4. Konsol loglarını inceleyin

### Template bulunamıyor?
1. Template ID'nin doğru olduğunu kontrol edin
2. Template'in "Published" durumda olduğunu kontrol edin

### Environment variables çalışmıyor?
1. `.env` dosyasının proje kök dizininde olduğunu kontrol edin
2. Variable isimlerinin `VITE_` ile başladığını kontrol edin
3. Uygulamayı yeniden başlatın

## 📱 Özellikler

- 🔄 Otomatik e-posta gönderimi
- 📧 HTML tabanlı güzel e-posta tasarımı
- 📱 Mobil uyumlu
- 🔗 Direkt iletişim linkleri (Telefon, E-posta, WhatsApp)
- 🇹🇷 Türkçe tarih ve saat formatı
- 📊 Detaylı rezervasyon bilgileri
- 🔍 Debug ve test modu
- ⚡ Hızlı ve güvenilir

## 📞 İletişim Linkleri

E-posta içindeki butonlar:
- **📞 Telefon Et:** Direkt telefon numarasını arar
- **📧 E-posta Gönder:** E-posta uygulamasını açar
- **💬 WhatsApp:** WhatsApp'ta mesaj gönderme ekranını açar

## 🔐 Güvenlik

- ✅ API anahtarları environment variables'da saklanır
- ✅ Sadece frontend'de kullanılır
- ✅ EmailJS güvenli e-posta gönderim servisidir
- ✅ Kişisel bilgiler sadece gerekli yerlerde kullanılır

---

**🎯 Sistem aktif! Artık tüm demo ders rezervasyonlarını otomatik olarak e-posta ile alacaksınız.**

Herhangi bir sorunla karşılaştığınızda `EmailJS-Kurulum-Rehberi.md` dosyasını kontrol edin. 