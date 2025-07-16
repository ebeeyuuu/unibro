"use client";

import Link from "next/link";
import {
  NavigationMenu,
  NavigationMenuList,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuTrigger,
  NavigationMenuContent,
} from "@/components/ui/navigation-menu";

interface NavigationItem {
  href: string,
  title: string,
  description: string
}

const quizItems: NavigationItem[] = [
  {
    href: "/quiz/how-it-works",
    title: "How it works",
    description: "See how we match you with universities"
  },
  {
    href: "/quiz/why",
    title: "Why take it",
    description: "Understand the benefits of personalised recommendations"
  },
  {
    href: "/quiz/recent-matches",
    title: "Recent matches",
    description: "View your previous quiz results and retake it if you want!"
  },
  {
    href: "/collections",
    title: "Collections",
    description: "View your saved universities and preferences."
  }
]

const resourceItems: NavigationItem[] = [
  {
    href: "/resources/applications",
    title: "Applications",
    description: "Step-by-step guides for applying to universities"
  },
  {
    href: "/resources/choosing-majors",
    title: "Choosing Majors",
    description: "Learn how to choose the right major for your goals"
  },
  {
    href: "/resources/financial-planning",
    title: "Financial Planning",
    description: "Plan you runiversity budget and funding strategies"
  },
  {
    href: "/resources/visa-immigration",
    title: "Visa & Immigration",
    description: "Navigation the international student visa and immigration process"
  }
]

export default function Navbar() {
  return (
    <header className="mt-4 w-full border-b border-border bg-background text-foreground max-w-2xl p-2 rounded-xl justify-center">
      <NavigationMenu viewport={false}>
        <NavigationMenuList>
          <NavigationMenuItem>
            <NavigationMenuTrigger>Unibro</NavigationMenuTrigger>
            <NavigationMenuContent>
              <ul className="grid gap-y-1 gap-x-2 md:w-[300px] lg:w-[400px] grid-cols-2 grid-rows-3">
                <li className="row-span-3">
                  <NavigationMenuLink asChild>
                    <Link
                      className="from-primary-800/50 to-primary-900/40 flex h-full w-full flex-col justify-end rounded-md bg-linear-to-b p-6 no-underline outline-hidden select-none focus:shadow-md"
                      href="/"
                    >
                      <div className="mt-3 text-lg font-medium">unibro</div>
                      <p className="text-text-base text-sm leading-tight mb-2">
                        You need bro to help you find your perfect university
                      </p>
                    </Link>
                  </NavigationMenuLink>
                </li>
                <ListItem href="/about-us" title="About Us">
                  Why Unibro exists and how we&apos;re helping students globally
                </ListItem>
                <ListItem href="/contact" title="Contact Us">
                  Are you having issues? Contact us now!
                </ListItem>
                <ListItem href="/faqs" title="FAQs">
                  Have any questions? Visit our FAQs right now!
                </ListItem>
              </ul>
            </NavigationMenuContent>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <NavigationMenuTrigger>Universities</NavigationMenuTrigger>
            <NavigationMenuContent>
              <ul className="grid w-[400px] gap-2 md:w-[500px] grid-cols-2 grid-rows-2">
                {quizItems.map((item) => {
                  return (
                    <ListItem
                      key={item.title}
                      title={item.title}
                      href={item.href}
                    >
                      {item.description}
                    </ListItem>
                  )
                })}
              </ul>
            </NavigationMenuContent>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <NavigationMenuTrigger>Resources</NavigationMenuTrigger>
            <NavigationMenuContent>
              <ul className="grid w-[400px] gap-2 md:w-[500px] grid-cols-2 grid-rows-2">
                {resourceItems.map((item) => {
                  return (
                    <ListItem
                      key={item.title}
                      title={item.title}
                      href={item.href}
                    >
                      {item.description}
                    </ListItem>
                  )
                })}
              </ul>
            </NavigationMenuContent>
          </NavigationMenuItem>
        </NavigationMenuList>
      </NavigationMenu>
    </header>
  );
}

function ListItem({
  title,
  children,
  href,
  ...props
}: React.ComponentPropsWithoutRef<"li"> & { href: string }) {
  return (
    <li {...props}>
      <NavigationMenuLink asChild>
        <Link href={href}>
          <div className="text-sm leading-none font-medium">{title}</div>
          <p className="text-text-base line-clamp-2 text-sm leading-snug">
            {children}
          </p>
        </Link>
      </NavigationMenuLink>
    </li>
  );
}
