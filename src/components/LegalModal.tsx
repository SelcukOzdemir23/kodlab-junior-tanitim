import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { ScrollArea } from '@/components/ui/scroll-area';

interface LegalModalProps {
  isOpen: boolean;
  onClose: () => void;
  type: 'privacy' | 'terms' | 'kvkk';
}

export const LegalModal = ({ isOpen, onClose, type }: LegalModalProps) => {
  const getContent = () => {
    switch (type) {
      case 'privacy':
        return {
          title: 'Gizlilik Politikası',
          content: (
            <div className="space-y-6">
              <div className="bg-card p-4 rounded-lg border">
                <p className="text-sm text-muted-foreground mb-2">
                  <strong>Son Güncelleme:</strong> 1 Ocak 2025
                </p>
                <p className="text-sm text-muted-foreground">
                  Bu gizlilik politikası, KodLab Junior olarak kişisel verilerinizi nasıl topladığımız,
                  kullandığımız, koruduğumuz ve paylaştığımız konusunda sizi bilgilendirmek amacıyla hazırlanmıştır.
                </p>
              </div>

              <section>
                <h3 className="text-lg font-semibold mb-3">1. Veri Sorumlusu</h3>
                <p className="text-sm text-muted-foreground mb-3">
                  6698 sayılı KVKK uyarınca, kişisel verilerinizin işlenmesinden sorumlu olan veri sorumlusu KodLab Junior'dur.
                </p>
                <div className="bg-muted p-3 rounded text-sm">
                  <p><strong>E-posta:</strong> kodlabjuniorofficial@gmail.com</p>
                  <p><strong>Telefon:</strong> +90 552 387 72 07</p>
                  <p><strong>Adres:</strong> Antalya, Türkiye</p>
                </div>
              </section>

              <section>
                <h3 className="text-lg font-semibold mb-3">2. Toplanan Kişisel Veriler</h3>
                <ul className="list-disc pl-5 space-y-1 text-sm text-muted-foreground">
                  <li><strong>Kimlik Bilgileri:</strong> Ad, soyad, doğum tarihi</li>
                  <li><strong>İletişim Bilgileri:</strong> E-posta, telefon numarası</li>
                  <li><strong>Ebeveyn/Veli Bilgileri:</strong> 18 yaş altı için veli bilgileri</li>
                  <li><strong>Eğitim Bilgileri:</strong> Kurslar, ilerleme durumu</li>
                  <li><strong>Teknik Veriler:</strong> IP adresi, çerez bilgileri</li>
                </ul>
              </section>

              <section>
                <h3 className="text-lg font-semibold mb-3">3. Çocukların Verilerinin Korunması</h3>
                <div className="bg-yellow-50 border-l-4 border-yellow-400 p-3 rounded text-sm">
                  <p className="text-muted-foreground">
                    <strong>Önemli:</strong> 18 yaş altındaki öğrencilerimizin kişisel verilerinin işlenmesi için
                    ebeveyn veya yasal veli onayı zorunludur.
                  </p>
                </div>
              </section>

              <section>
                <h3 className="text-lg font-semibold mb-3">4. Haklarınız</h3>
                <ul className="list-disc pl-5 space-y-1 text-sm text-muted-foreground">
                  <li>Kişisel verilerinizin işlenip işlenmediğini öğrenme</li>
                  <li>İşlenen veriler hakkında bilgi talep etme</li>
                  <li>Verilerin düzeltilmesini isteme</li>
                  <li>Verilerin silinmesini isteme</li>
                  <li>İşleme faaliyetine itiraz etme</li>
                </ul>
              </section>

              <section>
                <h3 className="text-lg font-semibold mb-3">5. İletişim</h3>
                <div className="bg-primary/5 p-3 rounded text-sm">
                  <p><strong>E-posta:</strong> kodlabjuniorofficial@gmail.com</p>
                  <p><strong>Telefon:</strong> +90 552 387 72 07</p>
                  <p><strong>Adres:</strong> Antalya, Türkiye</p>
                </div>
              </section>
            </div>
          )
        };

      case 'terms':
        return {
          title: 'Kullanım Şartları',
          content: (
            <div className="space-y-6">
              <div className="bg-card p-4 rounded-lg border">
                <p className="text-sm text-muted-foreground mb-2">
                  <strong>Son Güncelleme:</strong> 1 Ocak 2025
                </p>
                <p className="text-sm text-muted-foreground">
                  Bu kullanım şartları, KodLab Junior eğitim hizmetlerini kullanırken uymanız gereken
                  kuralları ve koşulları belirtmektedir.
                </p>
              </div>

              <section>
                <h3 className="text-lg font-semibold mb-3">1. Hizmet Kapsamı</h3>
                <ul className="list-disc pl-5 space-y-1 text-sm text-muted-foreground">
                  <li>Scratch ile Başlangıç Kodlama</li>
                  <li>Python ile Kodlama</li>
                  <li>Tinkercad 3D Tasarım</li>
                  <li>Web Geliştirme</li>
                  <li>GIMP Grafik Tasarım</li>
                  <li>Bireysel ve grup dersleri</li>
                </ul>
              </section>

              <section>
                <h3 className="text-lg font-semibold mb-3">2. Yaş Sınırlaması</h3>
                <div className="bg-yellow-50 border-l-4 border-yellow-400 p-3 rounded text-sm">
                  <p className="text-muted-foreground">
                    <strong>Önemli:</strong> Hizmetlerimiz 7-17 yaş arası çocuklara yöneliktir.
                    18 yaş altındaki tüm kayıtlar için ebeveyn veya yasal veli onayı zorunludur.
                  </p>
                </div>
              </section>

              <section>
                <h3 className="text-lg font-semibold mb-3">3. Ebeveyn/Veli Sorumlulukları</h3>
                <ul className="list-disc pl-5 space-y-1 text-sm text-muted-foreground">
                  <li>Çocuğun eğitime katılımını onaylar ve destekler</li>
                  <li>Gerekli teknik donanım ve internet bağlantısını sağlar</li>
                  <li>Çocuğun online güvenliğini gözetir</li>
                  <li>Ödeme yükümlülüklerini yerine getirir</li>
                </ul>
              </section>

              <section>
                <h3 className="text-lg font-semibold mb-3">4. İptal ve İade</h3>
                <ul className="list-disc pl-5 space-y-1 text-sm text-muted-foreground">
                  <li>İlk 2 hafta içinde banka giderleri hariç iade</li>
                  <li>2-4 hafta arası: Alınan derslerin ücreti düşülür, %25 kesinti ve banka komisyon ücreti uygulanır</li>
                  <li>4 haftadan sonra iade yapılmaz, bakiye hesapta saklanır</li>
                  <li>Kurs erteleme 6 aya kadar mümkündür</li>
                </ul>
              </section>

              <section>
                <h3 className="text-lg font-semibold mb-3">5. İletişim</h3>
                <div className="bg-primary/5 p-3 rounded text-sm">
                  <p><strong>E-posta:</strong> kodlabjuniorofficial@gmail.com</p>
                  <p><strong>Telefon:</strong> +90 552 387 72 07</p>
                  <p><strong>Adres:</strong> Antalya, Türkiye</p>
                </div>
              </section>
            </div>
          )
        };

      case 'kvkk':
        return {
          title: 'KVKK Bilgileri',
          content: (
            <div className="space-y-6">
              <div className="bg-card p-4 rounded-lg border">
                <p className="text-sm text-muted-foreground mb-2">
                  <strong>Son Güncelleme:</strong> 1 Ocak 2025
                </p>
                <p className="text-sm text-muted-foreground">
                  6698 sayılı KVKK kapsamında, kişisel verilerinizin işlenmesi hakkında aydınlatma metnidir.
                </p>
              </div>

              <section>
                <h3 className="text-lg font-semibold mb-3">1. Veri Sorumlusu Kimliği</h3>
                <div className="bg-muted p-3 rounded text-sm">
                  <p><strong>KodLab Junior</strong></p>
                  <p><strong>E-posta:</strong> kodlabjuniorofficial@gmail.com</p>
                  <p><strong>Telefon:</strong> +90 552 387 72 07</p>
                  <p><strong>Adres:</strong> Antalya, Türkiye</p>
                </div>
              </section>

              <section>
                <h3 className="text-lg font-semibold mb-3">2. İşlenme Amaçları</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  <div className="bg-card p-3 rounded border">
                    <h4 className="font-semibold text-sm mb-2">Eğitim Hizmetleri</h4>
                    <ul className="text-xs text-muted-foreground space-y-1">
                      <li>• Öğrenci kaydı ve takibi</li>
                      <li>• Ders programı düzenleme</li>
                      <li>• Gelişim değerlendirmesi</li>
                    </ul>
                  </div>
                  <div className="bg-card p-3 rounded border">
                    <h4 className="font-semibold text-sm mb-2">İletişim</h4>
                    <ul className="text-xs text-muted-foreground space-y-1">
                      <li>• Ders hatırlatmaları</li>
                      <li>• Bilgilendirme mesajları</li>
                      <li>• Teknik destek</li>
                    </ul>
                  </div>
                </div>
              </section>

              <section>
                <h3 className="text-lg font-semibold mb-3">3. Çocukların Özel Korunması</h3>
                <div className="bg-orange-50 border-2 border-orange-200 p-3 rounded text-sm">
                  <h4 className="font-semibold mb-2 text-orange-800">🛡️ Yaş Gruplarına Göre Koruma:</h4>
                  <ul className="text-muted-foreground space-y-1">
                    <li><strong>7-13 yaş:</strong> Ebeveyn onayı + sürekli denetim</li>
                    <li><strong>14-15 yaş:</strong> Ebeveyn onayı + periyodik bilgilendirme</li>
                    <li><strong>16-17 yaş:</strong> Ebeveyn onayı + kendi rızası</li>
                  </ul>
                </div>
              </section>

              <section>
                <h3 className="text-lg font-semibold mb-3">4. Veri Sahibinin Hakları</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  <div className="bg-card p-3 rounded border">
                    <h4 className="font-semibold text-sm mb-2">🔍 Bilgi Alma</h4>
                    <ul className="text-xs text-muted-foreground space-y-1">
                      <li>• Verilerin işlenip işlenmediğini öğrenme</li>
                      <li>• İşlenen veriler hakkında bilgi alma</li>
                    </ul>
                  </div>
                  <div className="bg-card p-3 rounded border">
                    <h4 className="font-semibold text-sm mb-2">✏️ Düzeltme/Silme</h4>
                    <ul className="text-xs text-muted-foreground space-y-1">
                      <li>• Yanlış verilerin düzeltilmesi</li>
                      <li>• Verilerin silinmesi</li>
                    </ul>
                  </div>
                </div>
              </section>

              <section>
                <h3 className="text-lg font-semibold mb-3">5. Başvuru Yolları</h3>
                <div className="bg-blue-50 border-2 border-blue-200 p-3 rounded text-sm">
                  <h4 className="font-semibold mb-2 text-blue-800">📞 İletişim Kanalları</h4>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                    <div>
                      <p><strong>📧 E-posta:</strong></p>
                      <p className="text-blue-600">kodlabjuniorofficial@gmail.com</p>
                    </div>
                    <div>
                      <p><strong>📱 WhatsApp:</strong></p>
                      <p className="text-blue-600">+90 552 387 72 07</p>
                    </div>
                  </div>
                </div>
              </section>
            </div>
          )
        };

      default:
        return { title: '', content: null };
    }
  };

  const { title, content } = getContent();

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="w-[95vw] max-w-4xl max-h-[90vh] p-0">
        <DialogHeader className="p-6 pb-0">
          <DialogTitle className="text-2xl font-bold text-primary">{title}</DialogTitle>
        </DialogHeader>
        <div
          className="legal-modal-content px-6 pb-6 max-h-[calc(90vh-80px)] overflow-y-auto"
          style={{
            scrollbarWidth: 'thin',
            scrollbarColor: 'hsl(var(--primary)) #f1f5f9'
          }}
        >
          <style dangerouslySetInnerHTML={{
            __html: `
              .legal-modal-content::-webkit-scrollbar {
                width: 8px;
              }
              .legal-modal-content::-webkit-scrollbar-track {
                background: #f1f5f9;
                border-radius: 10px;
              }
              .legal-modal-content::-webkit-scrollbar-thumb {
                background: hsl(var(--primary));
                border-radius: 10px;
              }
              .legal-modal-content::-webkit-scrollbar-thumb:hover {
                background: hsl(var(--primary) / 0.8);
              }
            `
          }} />
          {content}
        </div>
      </DialogContent>
    </Dialog>
  );
};