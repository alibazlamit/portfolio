"use client";

import { motion } from "framer-motion";
import { DATA } from "@/lib/data";

export function GithubStats() {
    const githubUsername = "alibazlamit"; // Extracting from data, but hardcoding for URL construction safety

    return (
        <section id="github-stats" className="container px-4 py-8 bg-slate-950/30">
            <div className="flex flex-col items-center gap-8 max-w-5xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    className="w-full glass-card p-8 rounded-xl flex justify-center overflow-hidden"
                >
                    <img
                        src={`https://github-readme-streak-stats.herokuapp.com/?user=${githubUsername}&theme=transparent&hide_border=true&ring=22d3ee&fire=22d3ee&currStreakLabel=94a3b8`}
                        alt="GitHub Streak"
                        className="max-w-full"
                    />
                </motion.div>
            </div>
        </section>
    );
}
