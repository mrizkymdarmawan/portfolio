"use client"

import Image from "next/image"
import { usePathname } from "next/navigation"
import { 
  Home,
  Code,
  Palette,
  Clapperboard,
  UserPen,
  SquareUserRound,
  Linkedin,
  Github,
  Instagram,
} from "lucide-react"
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  useSidebar,
} from "@/components/ui/sidebar"

const items = [
  {
    title: "Overview",
    url: "/",
    icon: Home,
  },
  {
    title: "About",
    url: "/about",
    icon: SquareUserRound,
  },
  {
    title: "Code",
    url: "/code",
    icon: Code,
  },
  {
    title: "Design",
    url: "/design",
    icon: Palette,
  },
  {
    title: "Animation",
    url: "/animation",
    icon: Clapperboard,
  },
  {
    title: "Contact",
    url: "/contact",
    icon: UserPen,
  },
]

const socialItems = [
  { title: "LinkedIn", icon: Linkedin, url: "https://www.linkedin.com/in/mrizkymdarmawan" },
  { title: "GitHub", icon: Github, url: "https://github.com/mrizkymdarmawan" },
  { title: "Instagram", icon: Instagram, url: "https://www.instagram.com/mrizkymdarmawan" },
]

export function AppSidebar() {
  const pathname = usePathname()
  const { isMobile, setOpenMobile } = useSidebar()
  return (
    <Sidebar className="bg-[#f5f5f5] text-[#18181b]">
      <SidebarContent className="p-4">
        
        <div className="flex items-center space-x-4">
          <Image
            src="/professional.jpeg"
            alt="Muhammad Rizky Maulana Darmawan"
            width={64}
            height={64}
            className="rounded-full"
          />
          <div>
              <h2 className="font-bold text-lg">Kiky</h2>
              <p className="text-base">Software Engineer</p>
          </div>
        </div>

        <SidebarGroup>
          <SidebarGroupContent>
            <SidebarMenu className="mt-3">
              {items.map((item) => {
                const isActive = pathname === item.url
                return (
                  <SidebarMenuItem key={item.title}>
                    <SidebarMenuButton 
                      asChild
                      className={`flex items-center space-x-3 px-3 py-5 rounded-lg ${isActive ? "bg-[#ffffff] font-bold" : "hover:bg-gray-100"}`}
                    >
                      <a 
                        href={item.url}
                        onClick={() => {
                          if (isMobile) {
                            setOpenMobile(false)
                          }
                        }}
                      >
                        <item.icon />
                        <span className="text-base">{item.title}</span>
                      </a>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                )
              })}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>

        <SidebarGroup>
          <SidebarGroupLabel className="text-base text-muted-foreground mb-2">
            Social
          </SidebarGroupLabel>
          
          <SidebarGroupContent>
            <SidebarMenu className="space-y-1">
              {socialItems.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton
                    asChild
                    className="flex items-center space-x-3 px-3 py-2 rounded-lg hover:bg-gray-100"
                  >
                    <a href={item.url} className="flex items-center gap-3" target="_blank" rel="noopener noreferrer">
                      <item.icon />
                      <span className="text-base">{item.title}</span>
                    </a>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>

      </SidebarContent>
    </Sidebar>
  )
}
