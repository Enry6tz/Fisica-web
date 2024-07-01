"use client"

import * as React from "react"
import Link from "next/link"

import { cn } from "@/lib/utils"
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu"

const components: { title: string; href: string; description: string }[] = [
  {
    title: "Hsv valores",
    href: "/proyecto/code/hsv",
    description:
      "Codigo que se uso para encontrar la pelota u objeto dentro del video seleccionado",
  },
  {
    title: "Prediccion",
    href: "/proyecto/code/prediction",
    description:
      "Predice a partir de los frames iniciales si una pelota es encestada",
  },
  {
    title: "Trayectoria y energia",
    href: "/proyecto/code/energy",
    description:
      "Codigo usado para seguir la trayectoria de una pelota y graficar su energia",
  },
  {
    title: "Trayectoria rebote de pelota",
    href: "/proyecto/code/restitucion",
    description:
      "Codigo usado para seguir la trayectoria de una pelota de golf picando partiendo del reposo",
  },
]

export function NavigationMenues() {
  return (
    <NavigationMenu>
      <NavigationMenuList>
        <NavigationMenuItem>
          <NavigationMenuTrigger>Colabs</NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="flex flex-col p-6 md:w-[200px] lg:w-[300px]">

              <ListItem href="/proyecto/docs/cinematica" title="Cinematica">
                
              </ListItem>
              <ListItem href="/proyecto/docs/dinamica " title="Dinamica">
           
              </ListItem>
              <ListItem href="/proyecto/docs/energia" title="Energia">
              </ListItem>
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>

        <NavigationMenuItem>
          <NavigationMenuTrigger>Código fuente</NavigationMenuTrigger>
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

        <NavigationMenuItem>
          <Link href="/proyecto/integrantes" legacyBehavior passHref>
            <NavigationMenuLink className={navigationMenuTriggerStyle()}>
              Anexo
            </NavigationMenuLink>
          </Link>
        </NavigationMenuItem>

      </NavigationMenuList>
    </NavigationMenu>
  )
}

const ListItem = React.forwardRef<
  React.ElementRef<"a">,
  React.ComponentPropsWithoutRef<"a">
>(({ className, title, children, ...props }, ref) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <a
          ref={ref}
          className={cn(
            "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
            className
          )}
          {...props}
        >
          <div className="text-sm font-medium leading-none">{title}</div>
          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
            {children}
          </p>
        </a>
      </NavigationMenuLink>
    </li>
  )
})
ListItem.displayName = "ListItem"
