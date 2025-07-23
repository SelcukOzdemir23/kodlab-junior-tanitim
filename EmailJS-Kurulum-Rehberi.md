# 📧 EmailJS Demo Ders Rezervasyon Sistemi Kurulum Rehberi

Bu rehber, demo ders rezervasyonlarını e-posta ile almak için EmailJS entegrasyonunun nasıl yapılacağını anlatır.

## 🚀 Adım 1: EmailJS Hesabı Oluşturma

1. [EmailJS](https://www.emailjs.com/) sitesine gidin
2. "Sign Up" ile ücretsiz hesap oluşturun
3. E-posta adresinizi doğrulayın

## ⚙️ Adım 2: EmailJS Servis Kurulumu

1. **Dashboard**'a girin
2. **"Add New Service"** butonuna tıklayın
3. E-posta sağlayıcınızı seçin (Gmail, Outlook, vs.)
4. E-posta hesabınızı bağlayın
5. **Service ID**'yi not alın (örn: `service_abc123`)

## 📝 Adım 3: E-posta Şablonu Oluşturma

1. **"Email Templates"** sekmesine gidin
2. **"Create New Template"** butonuna tıklayın
3. Şablona bir isim verin (örn: `demo_booking_notification`)
4. **Template ID**'yi not alın (örn: `template_xyz789`)

### 📋 Şablon İçeriği

Aşağıdaki HTML şablonunu EmailJS template editörüne kopyalayın:

```html
<!DOCTYPE html>
<html lang="tr">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Yeni Demo Ders Rezervasyonu</title>
</head>
<body style="font-family: system-ui, sans-serif, Arial; font-size: 14px; line-height: 1.6; color: #333; margin: 0; padding: 20px; background-color: #f5f5f5;">
    <div style="max-width: 600px; margin: 0 auto; background-color: white; border-radius: 12px; overflow: hidden; box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);">
        
        <!-- Header -->
        <div style="background: linear-gradient(135deg, #6366f1 0%, #8b5cf6 100%); color: white; padding: 30px 20px; text-align: center;">
            <h1 style="margin: 0; font-size: 24px; font-weight: bold;">🎯 Yeni Demo Ders Rezervasyonu</h1>
            <p style="margin: 10px 0 0 0; opacity: 0.9; font-size: 16px;">Kodlab Junior Connect</p>
        </div>

        <!-- Alert Message -->
        <div style="background-color: #fef3c7; border-left: 4px solid #f59e0b; padding: 15px 20px; margin: 0;">
            <div style="font-family: system-ui, sans-serif, Arial; font-size: 12px">
                <div>{{parentName}} tarafından yeni bir demo ders rezervasyonu alındı. Lütfen en kısa sürede yanıtlayın.</div>
            </div>
        </div>

        <!-- Booking Details -->
        <div style="padding: 30px 20px;">
            
            <!-- Customer Message Section -->
            <div style="margin-bottom: 30px; padding: 20px; background-color: #f8fafc; border-radius: 8px; border-left: 4px solid #6366f1;">
                <table role="presentation" style="width: 100%; border-collapse: collapse;">
                    <tr>
                        <td style="vertical-align: top; padding: 0;">
                            <div style="padding: 8px 12px; margin: 0 12px 0 0; background-color: #e0e7ff; border-radius: 6px; font-size: 24px; width: 40px; height: 40px; display: inline-flex; align-items: center; justify-content: center;" role="img">👤</div>
                        </td>
                        <td style="vertical-align: top; padding: 0;">
                            <div style="color: #1e40af; font-size: 16px; font-weight: bold;">{{parentName}}</div>
                            <div style="color: #64748b; font-size: 13px; margin: 2px 0;">{{createdAt}}</div>
                            <p style="font-size: 14px; margin: 8px 0 0 0; color: #374151;">Demo ders talebinde bulundu</p>
                        </td>
                    </tr>
                </table>
            </div>

            <!-- Booking Information -->
            <div style="background-color: #f1f5f9; border-radius: 12px; padding: 20px; margin-bottom: 25px;">
                <h3 style="margin: 0 0 15px 0; font-size: 18px; font-weight: bold; color: #1e293b; text-align: center;">📋 Rezervasyon Detayları</h3>
                
                <table style="width: 100%; border-collapse: collapse;">
                    
                    <!-- Parent Information -->
                    <tr style="border-bottom: 1px solid #e2e8f0;">
                        <td colspan="2" style="padding: 15px 0 10px 0; font-weight: bold; font-size: 16px; color: #475569;">👨‍👩‍👧‍👦 Veli Bilgileri</td>
                    </tr>
                    <tr>
                        <td style="padding: 8px 0; color: #64748b; width: 35%;">👤 Veli Adı:</td>
                        <td style="padding: 8px 0; font-weight: 600; color: #1e293b;">{{parentName}}</td>
                    </tr>
                    <tr>
                        <td style="padding: 8px 0; color: #64748b;">📱 Telefon:</td>
                        <td style="padding: 8px 0; font-weight: 600; color: #1e293b;">
                            <a href="tel:{{parentPhone}}" style="color: #2563eb; text-decoration: none;">{{parentPhone}}</a>
                        </td>
                    </tr>
                    <tr style="border-bottom: 1px solid #e2e8f0;">
                        <td style="padding: 8px 0 15px 0; color: #64748b;">📧 E-posta:</td>
                        <td style="padding: 8px 0 15px 0; font-weight: 600; color: #1e293b;">
                            <a href="mailto:{{parentEmail}}" style="color: #2563eb; text-decoration: none;">{{parentEmail}}</a>
                        </td>
                    </tr>

                    <!-- Child Information -->
                    <tr style="border-bottom: 1px solid #e2e8f0;">
                        <td colspan="2" style="padding: 15px 0 10px 0; font-weight: bold; font-size: 16px; color: #475569;">👶 Çocuk Bilgileri</td>
                    </tr>
                    <tr>
                        <td style="padding: 8px 0; color: #64748b;">👦 Çocuğun Adı:</td>
                        <td style="padding: 8px 0; font-weight: 600; color: #1e293b;">{{childName}}</td>
                    </tr>
                    <tr style="border-bottom: 1px solid #e2e8f0;">
                        <td style="padding: 8px 0 15px 0; color: #64748b;">🎂 Yaş:</td>
                        <td style="padding: 8px 0 15px 0; font-weight: 600; color: #1e293b;">{{childAge}} yaşında</td>
                    </tr>

                    <!-- Lesson Information -->
                    <tr>
                        <td colspan="2" style="padding: 15px 0 10px 0; font-weight: bold; font-size: 16px; color: #475569;">📚 Ders Bilgileri</td>
                    </tr>
                    <tr>
                        <td style="padding: 8px 0; color: #64748b;">📅 Tarih:</td>
                        <td style="padding: 8px 0; font-weight: 600; color: #1e293b;">{{selectedDate}}</td>
                    </tr>
                    <tr>
                        <td style="padding: 8px 0; color: #64748b;">🕐 Saat:</td>
                        <td style="padding: 8px 0; font-weight: 600; color: #1e293b;">{{selectedTime}}</td>
                    </tr>
                    <tr>
                        <td style="padding: 8px 0; color: #64748b;">🌍 Saat Dilimi:</td>
                        <td style="padding: 8px 0; font-weight: 600; color: #1e293b;">{{timeZone}}</td>
                    </tr>
                    <tr>
                        <td style="padding: 8px 0; color: #64748b;">📆 Gün:</td>
                        <td style="padding: 8px 0; font-weight: 600; color: #1e293b;">{{dayOfWeek}}</td>
                    </tr>
                </table>
            </div>

            <!-- System Information -->
            <div style="background-color: #fefce8; border-radius: 8px; padding: 15px; margin-bottom: 25px; border-left: 4px solid #eab308;">
                <h4 style="margin: 0 0 10px 0; font-size: 14px; font-weight: bold; color: #92400e;">📊 Sistem Bilgileri</h4>
                <div style="display: flex; justify-content: space-between; align-items: center; flex-wrap: wrap; gap: 10px;">
                    <div style="font-size: 12px; color: #92400e;">
                        <strong>Rezervasyon ID:</strong> {{bookingId}}
                    </div>
                    <div style="font-size: 12px; color: #92400e;">
                        <strong>Durum:</strong> 
                        <span style="background-color: #fbbf24; color: white; padding: 2px 8px; border-radius: 12px; font-size: 10px; font-weight: bold;">
                            {{status}}
                        </span>
                    </div>
                </div>
                <div style="font-size: 12px; color: #92400e; margin-top: 8px;">
                    <strong>Kayıt Zamanı:</strong> {{createdAt}}
                </div>
            </div>

            <!-- Action Buttons -->
            <div style="text-align: center; margin: 25px 0;">
                <div style="margin-bottom: 15px;">
                    <a href="tel:{{parentPhone}}" style="display: inline-block; background-color: #10b981; color: white; padding: 12px 24px; border-radius: 8px; text-decoration: none; margin: 0 5px; font-weight: bold; font-size: 14px;">
                        📞 Telefon Et
                    </a>
                    <a href="mailto:{{parentEmail}}" style="display: inline-block; background-color: #3b82f6; color: white; padding: 12px 24px; border-radius: 8px; text-decoration: none; margin: 0 5px; font-weight: bold; font-size: 14px;">
                        📧 E-posta Gönder
                    </a>
                </div>
                <div>
                    <a href="https://wa.me/{{parentPhone}}" style="display: inline-block; background-color: #059669; color: white; padding: 12px 24px; border-radius: 8px; text-decoration: none; margin: 0 5px; font-weight: bold; font-size: 14px;">
                        💬 WhatsApp
                    </a>
                </div>
            </div>

            <!-- Important Notes -->
            <div style="background-color: #fef2f2; border-radius: 8px; padding: 15px; border-left: 4px solid #ef4444;">
                <h4 style="margin: 0 0 10px 0; font-size: 14px; font-weight: bold; color: #dc2626;">⚠️ Önemli Notlar</h4>
                <ul style="margin: 0; padding-left: 20px; color: #7f1d1d; font-size: 12px;">
                    <li>Demo dersi için ebeveyn eşliği zorunludur</li>
                    <li>Ders öncesi teknik kontrol yapılması önerilir</li>
                    <li>Kamera ve mikrofon erişimi gereklidir</li>
                    <li>İletişim kurarak ders detaylarını konfirme edin</li>
                </ul>
            </div>

        </div>

        <!-- Footer -->
        <div style="background-color: #f8fafc; padding: 20px; text-align: center; border-top: 1px solid #e2e8f0;">
            <div style="color: #64748b; font-size: 12px;">
                <p style="margin: 0 0 5px 0;">Bu e-posta Kodlab Junior Connect demo ders sistemi tarafından otomatik olarak gönderilmiştir.</p>
                <p style="margin: 0; font-weight: bold;">📧 Bu rezervasyonu {{createdAt}} tarihinde aldınız</p>
            </div>
        </div>

    </div>
</body>
</html>
```

### 📧 Şablon Ayarları

**Subject:** `{{subject}}`
**To email:** `{{to_email}}`
**From name:** `{{from_name}}`

## 🔑 Adım 4: API Anahtarları

1. **"Account"** sekmesine gidin
2. **Public Key**'i kopyalayın (örn: `user_abc123xyz`)

## 🔧 Adım 5: Proje Konfigürasyonu

### 5.1 Environment Variables (.env dosyası)

Proje kök dizininde `.env` dosyası oluşturun:

```env
# EmailJS Configuration
VITE_EMAILJS_SERVICE_ID=service_abc123
VITE_EMAILJS_TEMPLATE_ID=template_xyz789
VITE_EMAILJS_PUBLIC_KEY=user_abc123xyz
```

### 5.2 EmailJS Paketini Yükleyin

```bash
npm install @emailjs/browser
```

## 🚀 Adım 6: Entegrasyonu Aktifleştirme

1. **DemoBookingModal.tsx** dosyasını güncelleyin
2. E-posta gönderme işlevini aktif edin
3. Test rezervasyonu ile deneme yapın

### Test Etme

```typescript
import { emailService } from '@/services/emailService';

// Test e-postası gönder
emailService.sendTestEmail();
```

## 📱 Adım 7: WhatsApp Entegrasyonu (Opsiyonel)

WhatsApp linklerinin çalışması için telefon numaralarının uluslararası formatta olması gerekir:

- Türkiye: `+905551234567`
- Format: `+90` + `555` + `123` + `45` + `67`

## 🔍 Sorun Giderme

### Sık Karşılaşılan Sorunlar

1. **E-posta gönderilmiyor**
   - EmailJS servis durumunu kontrol edin
   - API anahtarlarını doğrulayın
   - Konsol hatalarını inceleyin

2. **Template bulunamıyor**
   - Template ID'nin doğru olduğundan emin olun
   - Template'in "Published" durumda olduğunu kontrol edin

3. **Spam klasörüne düşüyor**
   - EmailJS servis sağlayıcınızın SPF kaydını kontrol edin
   - Güvenilir göndericiler listesine ekleyin

### Debug Modunu Açma

```typescript
// Geliştirme ortamında detaylı loglar için
if (import.meta.env.DEV) {
  console.log('EmailJS Debug Mode Açık');
}
```

## 📊 Özellikler

✅ **Otomatik e-posta bildirimleri**
✅ **Güzel tasarlanmış HTML şablonu**
✅ **Mobil uyumlu e-posta tasarımı**
✅ **Tüm rezervasyon bilgileri dahil**
✅ **Direkt iletişim linkleri (Tel, E-posta, WhatsApp)**
✅ **Test modu ve debug desteği**
✅ **Türkçe tarih ve saat formatı**
✅ **Sistem bilgileri ve tracking**

## 🆘 Destek

Herhangi bir sorunla karşılaştığınızda:
1. EmailJS dokumentasyonunu kontrol edin
2. Konsol loglarını inceleyin
3. API limitlerini kontrol edin
4. Test verisi ile deneme yapın

---

**📧 E-posta sisteminiz artık hazır! Demo ders rezervasyonlarını otomatik olarak alacaksınız.** 