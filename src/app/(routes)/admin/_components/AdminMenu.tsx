"use client";

import { cn } from "@/utils/cn";
import {
  Link,
  Navbar,
  NavbarMenu,
  NavbarMenuItem,
  NavbarMenuToggle,
} from "@nextui-org/react";
import { usePathname } from "next/navigation";
import { useState } from "react";

export default function AdminMenuToggle({
  className,
  ...props
}: React.HTMLAttributes<HTMLElement>) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const pathname = usePathname();

  const adminMenuItem = [
    { item: "Dashboard", link: "/admin" },
    { item: "Users Overview", link: "/admin/users-overview" },
    { item: "Transaction History", link: "/admin/transaction" },
    { item: "Settings", link: "/admin/settings" },
  ];

  return (
    <div className={cn(className)} {...props}>
      <Navbar onMenuOpenChange={setIsMenuOpen}>
        <NavbarMenuToggle
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          className="md:hidden h-full"
        />
        <NavbarMenu>
          {adminMenuItem.map((item, index) => (
            <NavbarMenuItem key={`${item.link}-${index}`}>
              <Link href={item.link} size="lg" color={pathname === item.link ? "danger" : "foreground"}>
                {item.item}
              </Link>
            </NavbarMenuItem>
          ))}
        </NavbarMenu>
      </Navbar>
    </div>
  );
}
