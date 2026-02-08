"use client";

import { DATA } from "@/lib/data";
import { motion } from "framer-motion";

export function Experience() {
    return (
        <section id="experience" className="container px-4 py-20">
            <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="text-3xl font-bold tracking-tight mb-12 text-center"
            >
                Professional Experience
            </motion.h2>

            <div className="max-w-3xl mx-auto space-y-12">
                {DATA.experience.map((item, index) => (
                    <motion.div
                        key={index}
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: index * 0.1 }}
                        className="relative pl-8 md:pl-0"
                    >
                        <div className="md:grid md:grid-cols-4 md:gap-8">
                            <div className="md:col-span-1 mb-2 md:mb-0">
                                <span className="text-sm text-cyan-400 font-mono bg-cyan-500/10 px-2 py-1 rounded inline-block">
                                    {item.period}
                                </span>
                            </div>
                            <div className="md:col-span-3 relative pb-12 border-l border-white/10 pl-8 md:pl-10 last:pb-0 last:border-0">
                                {/* Timeline dot */}
                                <div className="absolute left-[-5px] top-1.5 w-2.5 h-2.5 rounded-full bg-cyan-500 shadow-[0_0_10px_rgba(6,182,212,0.5)]" />

                                <h3 className="text-xl font-bold text-slate-100">{item.role}</h3>
                                <div className="text-slate-400 font-medium mb-4">{item.company}</div>
                                <p className="text-slate-400 leading-relaxed text-sm md:text-base">
                                    {item.description}
                                </p>
                            </div>
                        </div>
                    </motion.div>
                ))}
            </div>
        </section>
    );
}
