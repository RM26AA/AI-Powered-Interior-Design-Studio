import React from "react";
import { Link, useLocation } from "react-router-dom";
import { createPageUrl } from "@/utils";
import { Camera, Image, GitCompare, Sparkles } from "lucide-react";
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarHeader,
  SidebarProvider,
  SidebarTrigger,
} from "@/components/ui/sidebar";

const navigationItems = [
  {
    title: "Style Studio",
    url: createPageUrl("Upload"),
    icon: Camera,
  },
  {
    title: "Gallery",
    url: createPageUrl("Gallery"),
    icon: Image,
  },
  {
    title: "Compare",
    url: createPageUrl("Compare"),
    icon: GitCompare,
  },
];

export default function Layout({ children, currentPageName }) {
  const location = useLocation();

  return (
    <SidebarProvider>
      <style>
        {`
          :root {
            --primary-gold: #d4af37;
            --primary-charcoal: #1a1a1a;
            --soft-white: #fefefe;
            --warm-gray: #f8f9fa;
            --accent-gold: rgba(212, 175, 55, 0.1);
          }
          
          body {
            font-family: 'Inter', -apple-system, BlinkMacSystemFont, sans-serif;
            background: linear-gradient(135deg, var(--warm-gray) 0%, #ffffff 100%);
          }
          
          .gold-shimmer {
            background: linear-gradient(45deg, var(--primary-gold), #f4e4a3, var(--primary-gold));
            background-size: 200% 200%;
            animation: shimmer 3s ease-in-out infinite;
          }
          
          @keyframes shimmer {
            0%, 100% { background-position: 0% 50%; }
            50% { background-position: 100% 50%; }
          }
          
          .glass-effect {
            backdrop-filter: blur(20px);
            background: rgba(255, 255, 255, 0.95);
            border: 1px solid rgba(255, 255, 255, 0.2);
          }
        `}
      </style>
      
      <div className="min-h-screen flex w-full">
        <Sidebar className="border-r-0 shadow-2xl bg-[--primary-charcoal]">
          <SidebarHeader className="border-b border-gray-700 p-6">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 gold-shimmer rounded-xl flex items-center justify-center shadow-lg">
                <Sparkles className="w-6 h-6 text-white" />
              </div>
              <div>
                <h2 className="font-bold text-white text-lg tracking-tight">DesignAI</h2>
                <p className="text-xs text-gray-300 tracking-wide">Interior Design Studio</p>
              </div>
            </div>
          </SidebarHeader>
          
          <SidebarContent className="p-4">
            <SidebarGroup>
              <SidebarGroupContent>
                <SidebarMenu className="space-y-2">
                  {navigationItems.map((item) => (
                    <SidebarMenuItem key={item.title}>
                      <SidebarMenuButton 
                        asChild 
                        className={`group hover:bg-gray-800 transition-all duration-300 rounded-xl p-4 ${
                          location.pathname === item.url 
                            ? 'bg-gray-800 border-l-4 border-yellow-400' 
                            : 'hover:border-l-2 hover:border-gray-600'
                        }`}
                      >
                        <Link to={item.url} className="flex items-center gap-4">
                          <item.icon className={`w-5 h-5 transition-colors duration-300 ${
                            location.pathname === item.url 
                              ? 'text-yellow-400' 
                              : 'text-gray-400 group-hover:text-yellow-400'
                          }`} />
                          <span className={`font-medium transition-colors duration-300 ${
                            location.pathname === item.url 
                              ? 'text-white' 
                              : 'text-gray-300 group-hover:text-white'
                          }`}>
                            {item.title}
                          </span>
                        </Link>
                      </SidebarMenuButton>
                    </SidebarMenuItem>
                  ))}
                </SidebarMenu>
              </SidebarGroupContent>
            </SidebarGroup>
          </SidebarContent>
        </Sidebar>

        <main className="flex-1 flex flex-col overflow-hidden">
          <header className="bg-white/80 backdrop-blur-md border-b border-gray-100 px-6 py-4 md:hidden shadow-sm">
            <div className="flex items-center gap-4">
              <SidebarTrigger className="hover:bg-gray-100 p-2 rounded-lg transition-colors duration-200" />
              <h1 className="text-xl font-bold text-gray-900">DesignAI</h1>
            </div>
          </header>

          <div className="flex-1 overflow-auto bg-gradient-to-br from-gray-50 to-white">
            {children}
          </div>
        </main>
      </div>
    </SidebarProvider>
  );
}
