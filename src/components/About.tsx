"use client";

import { DATA } from "@/lib/data";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

export function About() {
    return (
        <section id="about" className="container px-4 py-20 bg-slate-900/10">
            <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="text-3xl font-bold tracking-tight mb-8 text-center"
            >
                About Me
            </motion.h2>

            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="max-w-3xl mx-auto text-lg text-slate-400 leading-relaxed text-center"
            >
                <p>{DATA.summary}</p>
            </motion.div>
        </section>
    );
}
