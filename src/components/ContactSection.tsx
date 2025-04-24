
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { MapPin, Phone, Mail, Clock } from "lucide-react";

export const ContactSection = () => {
  const contactInfo = [
    {
      icon: <Phone className="h-5 w-5 text-primary" />,
      title: "Телефон",
      details: "8-800-300-43-49",
    },
    {
      icon: <Mail className="h-5 w-5 text-primary" />,
      title: "Email",
      details: "anykey71@bk.ru",
    },
    {
      icon: <MapPin className="h-5 w-5 text-primary" />,
      title: "Адрес",
      details: "г. Тула, ул. Лейтейзена, д. 5",
    },
    {
      icon: <Clock className="h-5 w-5 text-primary" />,
      title: "Режим работы",
      details: "Пн-Пт: 9:00 - 18:00",
    },
  ];

  return (
    <section id="contact" className="py-16 bg-secondary/20">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
          <div className="space-y-2">
            <div className="inline-block rounded-lg bg-primary/10 px-3 py-1 text-sm text-primary">
              Связь с нами
            </div>
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">
              Остались вопросы? Свяжитесь с нами!
            </h2>
            <p className="max-w-[700px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Наши специалисты готовы ответить на все ваши вопросы и помочь с выбором решения
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <Card className="col-span-1 lg:col-span-2">
            <CardContent className="p-6">
              <form className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Input placeholder="Ваше имя" />
                  </div>
                  <div className="space-y-2">
                    <Input placeholder="Телефон" />
                  </div>
                </div>
                <div className="space-y-2">
                  <Input placeholder="Email" />
                </div>
                <div className="space-y-2">
                  <Textarea 
                    placeholder="Ваш запрос" 
                    className="min-h-[120px] resize-none" 
                  />
                </div>
                <div className="flex justify-end">
                  <Button type="submit" className="w-full sm:w-auto">
                    Отправить запрос
                  </Button>
                </div>
              </form>
            </CardContent>
          </Card>
          
          <div className="space-y-4">
            {contactInfo.map((item, index) => (
              <Card key={index}>
                <CardContent className="p-4 flex items-start gap-4">
                  <div className="p-2 rounded-lg bg-primary/10">
                    {item.icon}
                  </div>
                  <div>
                    <h3 className="font-medium">{item.title}</h3>
                    <p className="text-sm text-muted-foreground">{item.details}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
