"use client";

import { DATA } from "@/lib/data";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

export function Skills() {
    return (
        <section id="skills" className="container px-4 py-20 bg-slate-900/20">
            <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="text-3xl font-bold tracking-tight mb-12 text-center"
            >
                Technical Toolkit
            </motion.h2>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                {Object.entries(DATA.skills).map(([category, skills], categoryIndex) => (
                    <motion.div
                        key={category}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: categoryIndex * 0.1 }}
                        className="glass-card p-6 rounded-xl hover:border-cyan-500/30 transition-colors"
                    >
                        <h3 className="text-lg font-bold text-cyan-400 capitalize mb-4 border-b border-white/10 pb-2">
                            {category}
                        </h3>
                        <div className="flex flex-wrap gap-2">
                            {skills.map((skill, index) => (
                                <div
                                    key={index}
                                    className="px-2 py-1 bg-slate-800/50 rounded text-sm text-slate-300 border border-white/5 hover:bg-slate-700/50 transition-colors cursor-default"
                                >
                                    {skill}
                                </div>
                            ))}
                        </div>
                    </motion.div>
                ))}
            </div>
        </section>
    );
}
