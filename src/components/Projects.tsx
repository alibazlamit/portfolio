"use client";

import { DATA } from "@/lib/data";
import { motion } from "framer-motion";
import { Github, Link as LinkIcon, Lock } from "lucide-react";
import Link from "next/link";

export function Projects() {
    return (
        <section id="projects" className="container px-4 py-20">
            <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="text-3xl font-bold tracking-tight mb-12 text-center"
            >
                Featured Projects
            </motion.h2>

            <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
                {DATA.projects.map((project, index) => (
                    <motion.div
                        key={index}
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: index * 0.1 }}
                        className="group relative glass-card p-8 rounded-xl overflow-hidden hover:bg-slate-900/80 transition-all"
                    >
                        <div className="absolute top-0 right-0 p-4 opacity-0 group-hover:opacity-100 transition-opacity">
                            {project.private ? (
                                <div className="p-2 bg-slate-500/10 rounded-full cursor-not-allowed">
                                    <Lock className="w-5 h-5 text-slate-400" />
                                </div>
                            ) : (
                                <Link href={project.link} target="_blank" className="p-2 bg-cyan-500/20 rounded-full hover:bg-cyan-500/40 block transition-colors">
                                    <Github className="w-5 h-5 text-cyan-400" />
                                </Link>
                            )}
                        </div>

                        <div className="text-sm font-mono text-cyan-400 mb-2">{project.tech}</div>
                        <h3 className="text-xl font-bold mb-3">{project.title}</h3>
                        <p className="text-slate-400 leading-relaxed mb-6">
                            {project.description}
                        </p>

                        {project.private ? (
                            <span className="inline-flex items-center gap-2 text-sm font-medium text-slate-500 cursor-not-allowed">
                                Private Repository <Lock className="w-4 h-4" />
                            </span>
                        ) : (
                            <Link
                                href={project.link}
                                target="_blank"
                                className="inline-flex items-center gap-2 text-sm font-medium text-slate-300 hover:text-cyan-400 transition-colors"
                            >
                                View Code <LinkIcon className="w-4 h-4" />
                            </Link>
                        )}
                    </motion.div>
                ))}
            </div>
        </section>
    );
}
