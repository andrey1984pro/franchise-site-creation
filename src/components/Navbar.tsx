
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X, Phone } from "lucide-react";

export const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur">
      <div className="container flex h-16 items-center justify-between">
        <div className="flex items-center gap-2">
          <img src="/logo-b.svg" alt="1С Франчайзи" className="h-8 w-auto" />
          <span className="text-xl font-bold text-primary">1С Франчайзи</span>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-6">
          <a href="#services" className="text-sm font-medium hover:text-primary">
            Услуги
          </a>
          <a href="#products" className="text-sm font-medium hover:text-primary">
            Продукты 1С
          </a>
          <a href="#about" className="text-sm font-medium hover:text-primary">
            О компании
          </a>
          <a href="#contact" className="text-sm font-medium hover:text-primary">
            Контакты
          </a>
        </nav>

        <div className="hidden md:flex items-center gap-4">
          <div className="flex items-center gap-2">
            <Phone size={16} className="text-primary" />
            <span className="text-sm font-medium">8 (800) 123-45-67</span>
          </div>
          <Button>Заказать звонок</Button>
        </div>

        {/* Mobile Menu Button */}
        <Button 
          variant="ghost" 
          size="icon" 
          className="md:hidden"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <X /> : <Menu />}
        </Button>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden px-4 py-2 bg-background border-b">
          <nav className="flex flex-col space-y-3 py-4">
            <a 
              href="#services" 
              className="px-4 py-2 text-sm font-medium hover:bg-muted rounded-md"
              onClick={() => setIsMenuOpen(false)}
            >
              Услуги
            </a>
            <a 
              href="#products" 
              className="px-4 py-2 text-sm font-medium hover:bg-muted rounded-md"
              onClick={() => setIsMenuOpen(false)}
            >
              Продукты 1С
            </a>
            <a 
              href="#about" 
              className="px-4 py-2 text-sm font-medium hover:bg-muted rounded-md"
              onClick={() => setIsMenuOpen(false)}
            >
              О компании
            </a>
            <a 
              href="#contact" 
              className="px-4 py-2 text-sm font-medium hover:bg-muted rounded-md"
              onClick={() => setIsMenuOpen(false)}
            >
              Контакты
            </a>
            <div className="flex items-center gap-2 px-4 py-2">
              <Phone size={16} className="text-primary" />
              <span className="text-sm font-medium">8 (800) 123-45-67</span>
            </div>
            <div className="px-4">
              <Button className="w-full">Заказать звонок</Button>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
};
