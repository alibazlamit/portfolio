import { DATA } from "@/lib/data";

export function Footer() {
    return (
        <footer className="py-8 border-t border-white/5 bg-slate-950/50">
            <div className="container mx-auto px-4 text-center text-slate-400 text-sm">
                <p>&copy; {new Date().getFullYear()} {DATA.name}. All rights reserved.</p>
                <p className="mt-2 text-xs text-slate-600">Built with Next.js, Tailwind, & Framer Motion</p>
            </div>
        </footer>
    );
}
