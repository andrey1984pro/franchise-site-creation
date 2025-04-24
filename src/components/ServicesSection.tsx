
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowRight, BookOpen, Server, Settings, Users } from "lucide-react";

export const ServicesSection = () => {
  const services = [
    {
      icon: <Server className="h-6 w-6 text-primary" />,
      title: "Внедрение 1С",
      description: "Полный цикл внедрения программ 1С с учетом особенностей вашего бизнеса",
    },
    {
      icon: <Settings className="h-6 w-6 text-primary" />,
      title: "Сопровождение",
      description: "Регулярное обслуживание, обновление и техническая поддержка систем 1С",
    },
    {
      icon: <BookOpen className="h-6 w-6 text-primary" />,
      title: "Обучение",
      description: "Индивидуальное и групповое обучение сотрудников работе с программами 1С",
    },
    {
      icon: <Users className="h-6 w-6 text-primary" />,
      title: "ИТ-аутсорсинг",
      description: "Комплексное обслуживание ИТ-инфраструктуры вашей компании",
    },
  ];

  return (
    <section id="services" className="py-16 bg-background">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <div className="inline-block rounded-lg bg-primary/10 px-3 py-1 text-sm text-primary">
              Наши услуги
            </div>
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
              Комплексная автоматизация бизнеса
            </h2>
            <p className="max-w-[700px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Предоставляем полный спектр услуг по внедрению и сопровождению программных продуктов 1С
            </p>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-12">
          {services.map((service, index) => (
            <Card key={index} className="flex flex-col h-full">
              <CardHeader>
                <div className="p-2 w-fit rounded-lg bg-primary/10 mb-4">
                  {service.icon}
                </div>
                <CardTitle>{service.title}</CardTitle>
              </CardHeader>
              <CardContent className="flex-grow">
                <CardDescription className="text-base">{service.description}</CardDescription>
              </CardContent>
              <CardFooter>
                <Button variant="ghost" className="p-0 h-auto" asChild>
                  <a href="#contact" className="text-primary flex items-center">
                    Подробнее <ArrowRight className="ml-1 h-4 w-4" />
                  </a>
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
