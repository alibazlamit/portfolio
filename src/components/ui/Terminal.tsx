"use client";

import { useEffect, useState, useRef } from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

const lines = [
    "> initializing system...",
    "> loading core modules...",
    "> [SUCCESS] distributed_systems loaded",
    "> [SUCCESS] go_runtime initialized",
    "> [SUCCESS] kubernetes_cluster connected",
    "> [INFO] high_throughput_pipeline ready",
    "> [INFO] 1.2B_records_synced",
    "> executing portfolio.exe...",
    "> welcome, user.",
];

export function Terminal({ className }: { className?: string }) {
    const [content, setContent] = useState<string[]>([]);
    const scrollRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        let currentIndex = 0;
        const interval = setInterval(() => {
            if (currentIndex < lines.length) {
                const line = lines[currentIndex];
                if (line) {
                    setContent((prev) => [...prev, line]);
                }
                currentIndex++;
            } else {
                clearInterval(interval);
            }
        }, 600);

        return () => clearInterval(interval);
    }, []);

    useEffect(() => {
        if (scrollRef.current) {
            scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
        }
    }, [content]);

    return (
        <div className={cn("rounded-lg overflow-hidden glass-card font-mono text-sm", className)}>
            <div className="bg-slate-900/80 px-4 py-2 flex items-center gap-2 border-b border-white/5">
                <div className="w-3 h-3 rounded-full bg-red-500/80" />
                <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
                <div className="w-3 h-3 rounded-full bg-green-500/80" />
                <span className="ml-2 text-xs text-slate-500">bash — 80x24</span>
            </div>
            <div
                ref={scrollRef}
                className="p-4 h-64 overflow-y-auto text-slate-300 space-y-1"
            >
                {content.map((line, i) => {
                    if (!line) return null;
                    return (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, x: -10 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.2 }}
                        >
                            <span className={cn(
                                "mr-2",
                                line.includes("[SUCCESS]") ? "text-green-400" :
                                    line.includes("[INFO]") ? "text-blue-400" : "text-slate-500"
                            )}>
                                {line.startsWith(">") ? "$" : ""}
                            </span>
                            {line.replace(">", "")}
                        </motion.div>
                    );
                })}
                <motion.div
                    animate={{ opacity: [0, 1] }}
                    transition={{ repeat: Infinity, duration: 0.8 }}
                    className="w-2 h-4 bg-cyan-400 inline-block align-middle ml-1"
                />
            </div>
        </div>
    );
}
