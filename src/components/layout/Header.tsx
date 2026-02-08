"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { Github, Linkedin, Mail } from "lucide-react";
import { DATA } from "@/lib/data";

const navItems = [
    { name: "About", href: "#about" },
    { name: "Experience", href: "#experience" },
    { name: "Skills", href: "#skills" },
    { name: "Projects", href: "#projects" },
];

export function Header() {
    const pathname = usePathname();

    return (
        <header className="fixed top-0 w-full z-50 bg-background/80 backdrop-blur-md border-b border-white/5">
            <div className="container mx-auto px-4 h-16 flex items-center justify-between">
                <Link href="/" className="font-bold text-xl tracking-tighter">
                    &lt;AliBazlamit /&gt;
                </Link>

                <nav className="hidden md:flex gap-6">
                    {navItems.map((item) => (
                        <Link
                            key={item.href}
                            href={item.href}
                            className="text-sm font-medium hover:text-cyan-400 transition-colors"
                        >
                            {item.name}
                        </Link>
                    ))}
                </nav>

                <div className="flex gap-4">
                    <Link href={DATA.socials.github} target="_blank" className="hover:text-cyan-400 transition-colors">
                        <Github className="w-5 h-5" />
                    </Link>
                    <Link href={DATA.socials.linkedin} target="_blank" className="hover:text-cyan-400 transition-colors">
                        <Linkedin className="w-5 h-5" />
                    </Link>
                    <Link href={DATA.socials.email} className="hover:text-cyan-400 transition-colors">
                        <Mail className="w-5 h-5" />
                    </Link>
                </div>
            </div>
        </header>
    );
}
