
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

export const ProductsSection = () => {
  const products = [
    {
      title: "1С:Бухгалтерия 8",
      description: "Универсальная программа для автоматизации бухгалтерского и налогового учета",
      badge: "Популярное",
      image: "/placeholder.svg",
    },
    {
      title: "1С:Зарплата и управление персоналом",
      description: "Расчет заработной платы и кадровый учет в единой системе",
      badge: "",
      image: "/placeholder.svg",
    },
    {
      title: "1С:Управление торговлей",
      description: "Автоматизация оперативного и управленческого учета, анализ и планирование торговых операций",
      badge: "Выгодно",
      image: "/placeholder.svg",
    },
  ];

  return (
    <section id="products" className="py-16 bg-secondary/20">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <div className="inline-block rounded-lg bg-primary/10 px-3 py-1 text-sm text-primary">
              Продукты 1С
            </div>
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
              Программы для вашего бизнеса
            </h2>
            <p className="max-w-[700px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Широкий выбор решений для автоматизации бизнес-процессов вашей компании
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
          {products.map((product, index) => (
            <Card key={index} className="overflow-hidden">
              <div className="relative">
                <img 
                  src={product.image} 
                  alt={product.title} 
                  className="w-full h-48 object-cover"
                />
                {product.badge && (
                  <Badge className="absolute top-3 right-3 bg-primary">
                    {product.badge}
                  </Badge>
                )}
              </div>
              <CardHeader>
                <CardTitle>{product.title}</CardTitle>
                <CardDescription className="text-base">{product.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <Button className="w-full">Подробнее</Button>
              </CardContent>
            </Card>
          ))}
        </div>
        
        <div className="flex justify-center mt-8">
          <Button variant="outline">Смотреть все продукты</Button>
        </div>
      </div>
    </section>
  );
};
