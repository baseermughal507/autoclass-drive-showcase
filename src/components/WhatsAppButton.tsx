import { MessageCircle } from 'lucide-react';
import { Button } from './ui/button';

export default function WhatsAppButton() {
  const whatsappNumber = '+923001234567'; // Replace with actual number
  const message = 'Hello! I am interested in buying a car.';
  
  const handleWhatsAppClick = () => {
    const url = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;
    window.open(url, '_blank');
  };

  return (
    <Button
      onClick={handleWhatsAppClick}
      className="fixed bottom-6 right-6 rounded-full w-14 h-14 shadow-lg hover:scale-110 transition-transform z-50"
      size="icon"
    >
      <MessageCircle className="h-6 w-6" />
    </Button>
  );
}
