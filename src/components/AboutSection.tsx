
import { CheckCircle } from "lucide-react";

export const AboutSection = () => {
  const achievements = [
    "Официальный партнер фирмы 1С",
    "Более 500 успешных внедрений",
    "Команда сертифицированных специалистов",
    "Гарантия качества на все услуги",
    "Индивидуальный подход к каждому клиенту",
    "Оперативная техническая поддержка"
  ];

  return (
    <section id="about" className="py-16 bg-background">
      <div className="container px-4 md:px-6">
        <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
          <div className="space-y-4">
            <div className="inline-block rounded-lg bg-primary/10 px-3 py-1 text-sm text-primary">
              О компании
            </div>
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">
              Надежный партнер для вашего бизнеса
            </h2>
            <p className="text-muted-foreground">
              Мы являемся официальным франчайзи фирмы 1С и предоставляем полный комплекс услуг по автоматизации управления и учета на предприятиях.
            </p>
            <p className="text-muted-foreground">
              Наша команда состоит из сертифицированных специалистов, которые помогут подобрать оптимальное решение для вашего бизнеса, внедрить его и обеспечить качественное сопровождение.
            </p>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-4">
              {achievements.map((achievement, index) => (
                <div key={index} className="flex items-start gap-2">
                  <CheckCircle className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                  <span className="text-sm">{achievement}</span>
                </div>
              ))}
            </div>
          </div>
          
          <div className="flex items-center justify-center lg:justify-end">
            <div className="relative">
              <img
                src="/placeholder.svg"
                alt="Наша команда"
                className="mx-auto aspect-video rounded-xl object-cover"
                width={550}
                height={310}
              />
              <div className="absolute -bottom-6 -left-6 rounded-lg bg-background p-4 shadow-lg border border-border">
                <div className="text-4xl font-bold text-primary">10+</div>
                <div className="text-sm text-muted-foreground">лет на рынке</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
