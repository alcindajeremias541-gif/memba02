"use client";

import * as React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import { BookOpen, Search, Library, Info } from "lucide-react";

const components: { title: string; href: string; description: string }[] = [
  {
    title: "Documentos",
    href: "/admin?action=new&type=document",
    description:
      "Adicione novos documentos vitais em PDF, Word ou outros formatos textuais.",
  },
  {
    title: "Links Web",
    href: "/admin?action=new&type=link",
    description:
      "Associe conteúdos externos, páginas da web e repositórios online.",
  },
  {
    title: "Recursos de Vídeo",
    href: "/admin?action=new&type=video",
    description:
      "Integre materiais audiovisuais, tutoriais e palestras em formato de vídeo.",
  },
];

export function MainNavigation() {
  const pathname = usePathname();

  return (
    <NavigationMenu className="hidden md:flex z-50">
      <NavigationMenuList>
        <NavigationMenuItem>
          <Link href="/" legacyBehavior passHref>
            <NavigationMenuLink 
              className={cn(navigationMenuTriggerStyle(), "bg-transparent")}
              active={pathname === "/"}
            >
              Início
            </NavigationMenuLink>
          </Link>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <Link href="/explorer" legacyBehavior passHref>
            <NavigationMenuLink 
              className={cn(navigationMenuTriggerStyle(), "bg-transparent")}
              active={pathname?.startsWith("/explorer")}
            >
              Explorar
            </NavigationMenuLink>
          </Link>
        </NavigationMenuItem>
        
        <NavigationMenuItem>
          <NavigationMenuTrigger className="bg-transparent">Recursos</NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="grid gap-3 p-6 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr]">
              <li className="row-span-3">
                <NavigationMenuLink asChild>
                  <Link
                    href="/"
                    className="flex h-full w-full select-none flex-col justify-end rounded-md bg-gradient-to-b from-muted/50 to-muted p-6 no-underline outline-none focus:shadow-md"
                  >
                    <BookOpen className="h-6 w-6 text-primary mb-2" />
                    <div className="mb-2 mt-4 text-lg font-medium">
                      Biblioteca Central
                    </div>
                    <p className="text-sm leading-tight text-muted-foreground">
                      Explore todos os recursos e encontre conhecimento nas mais diversas áreas do saber.
                    </p>
                  </Link>
                </NavigationMenuLink>
              </li>
              <ListItem href="/library" title="Meus Favoritos" icon={<Library className="h-4 w-4 mr-2" />}>
                Um acesso rápido aos materiais que você marcou para ler depois.
              </ListItem>
              <ListItem href="/explorer?category=recentes" title="Adicionados Recentemente" icon={<Search className="h-4 w-4 mr-2" />}>
                Confira o que há de novo na plataforma.
              </ListItem>
              <ListItem href="/about" title="Sobre a Plataforma" icon={<Info className="h-4 w-4 mr-2" />}>
                Saiba como funciona o nosso modelo de curadoria.
              </ListItem>
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
        
        <NavigationMenuItem>
          <NavigationMenuTrigger className="bg-transparent">Administração</NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px] ">
              {components.map((component) => (
                <ListItem
                  key={component.title}
                  title={component.title}
                  href={component.href}
                >
                  {component.description}
                </ListItem>
              ))}
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  );
}

const ListItem = React.forwardRef<
  React.ElementRef<"a">,
  React.ComponentPropsWithoutRef<"a"> & { icon?: React.ReactNode }
>(({ className, title, children, icon, ...props }, ref) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <Link
          href={props.href as string || "#"}
          ref={ref as any}
          className={cn(
            "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
            className
          )}
          {...props}
        >
          <div className="text-sm font-medium leading-none flex items-center">
            {icon && icon}
            {title}
          </div>
          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground mt-1.5">
            {children}
          </p>
        </Link>
      </NavigationMenuLink>
    </li>
  );
});
ListItem.displayName = "ListItem";
