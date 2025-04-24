
import { Button } from "@/components/ui/button";
import { ArrowRight, CheckCircle } from "lucide-react";

export const HeroSection = () => {
  return (
    <section className="py-20 bg-gradient-to-b from-secondary/50 to-background">
      <div className="container px-4 md:px-6">
        <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
          <div className="space-y-4">
            <div className="inline-block rounded-lg bg-primary/10 px-3 py-1 text-sm text-primary">
              Официальный франчайзи 1С
            </div>
            <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
              Эффективные решения для автоматизации вашего бизнеса
            </h1>
            <p className="max-w-[600px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Полный комплекс услуг по внедрению, сопровождению и обучению работе с программами 1С
            </p>
            <div className="flex flex-col gap-2 min-[400px]:flex-row">
              <Button className="gap-1">
                Получить консультацию
                <ArrowRight className="h-4 w-4" />
              </Button>
              <Button variant="outline">Каталог решений 1С</Button>
            </div>
            <div className="flex items-center gap-4 pt-4">
              <div className="flex items-center gap-2">
                <CheckCircle className="h-4 w-4 text-primary" />
                <span className="text-sm">Авторизованный партнер</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="h-4 w-4 text-primary" />
                <span className="text-sm">Опыт более 10 лет</span>
              </div>
            </div>
          </div>
          <div className="flex items-center justify-center">
            <img
              src="/placeholder.svg"
              alt="1С решения"
              className="aspect-video rounded-xl object-cover object-center overflow-hidden border border-border shadow-lg"
              width={550}
              height={310}
            />
          </div>
        </div>
      </div>
    </section>
  );
};
