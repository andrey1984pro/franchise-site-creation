
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Separator } from "@/components/ui/separator";
import { Facebook, Instagram, Twitter } from "lucide-react";

export const Footer = () => {
  return (
    <footer className="bg-muted/40 border-t">
      <div className="container px-4 md:px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="space-y-4 col-span-1 md:col-span-2">
            <div className="flex items-center gap-2">
              <img src="/logo-b.svg" alt="1С Франчайзи Эникей" className="h-8 w-auto" />
              <span className="text-xl font-bold">1С Франчайзи Эникей</span>
            </div>
            <p className="text-sm text-muted-foreground">
              Официальный партнер фирмы 1С. Мы помогаем компаниям автоматизировать бизнес-процессы и повышать эффективность работы.
            </p>
            <div className="flex items-center gap-4">
              <Button variant="ghost" size="icon" className="rounded-full">
                <Facebook className="h-5 w-5" />
                <span className="sr-only">Facebook</span>
              </Button>
              <Button variant="ghost" size="icon" className="rounded-full">
                <Instagram className="h-5 w-5" />
                <span className="sr-only">Instagram</span>
              </Button>
              <Button variant="ghost" size="icon" className="rounded-full">
                <Twitter className="h-5 w-5" />
                <span className="sr-only">Twitter</span>
              </Button>
            </div>
          </div>
          
          <div className="space-y-4">
            <h3 className="text-base font-medium">Карта сайта</h3>
            <nav className="flex flex-col space-y-2">
              <a href="#services" className="text-sm text-muted-foreground hover:text-foreground">
                Услуги
              </a>
              <a href="#products" className="text-sm text-muted-foreground hover:text-foreground">
                Продукты 1С
              </a>
              <a href="#about" className="text-sm text-muted-foreground hover:text-foreground">
                О компании
              </a>
              <a href="#contact" className="text-sm text-muted-foreground hover:text-foreground">
                Контакты
              </a>
            </nav>
          </div>
          
          <div className="space-y-4">
            <h3 className="text-base font-medium">Подписка на новости</h3>
            <form className="flex flex-col space-y-2">
              <Input placeholder="Ваш email" />
              <Button className="w-full">Подписаться</Button>
            </form>
            <p className="text-xs text-muted-foreground">
              Подписывайтесь на нашу рассылку, чтобы получать новости о продуктах 1С и специальных предложениях.
            </p>
          </div>
        </div>
        
        <Separator className="my-8" />
        
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-xs text-muted-foreground text-center md:text-left">
            © 2023 1С Франчайзи Эникей. Все права защищены.
          </p>
          <div className="flex items-center gap-4">
            <a href="#" className="text-xs text-muted-foreground hover:text-foreground">
              Политика конфиденциальности
            </a>
            <a href="#" className="text-xs text-muted-foreground hover:text-foreground">
              Условия использования
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};
