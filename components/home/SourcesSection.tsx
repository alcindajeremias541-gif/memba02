"use client";

import { motion } from "framer-motion";
import { Building2, Globe, Database, Network } from "lucide-react";

const SOURCES = [
    {
        name: "Directory of Open Access Journals",
        description: "Mais de 19.000 revistas científicas de acesso aberto revisadas por pares.",
        icon: Globe,
        stats: "Artigos e Periódicos"
    },
    {
        name: "Open Library API",
        description: "Catálogo universal de livros, com registos de milhões de obras publicadas.",
        icon: Database,
        stats: "Livros e Manuais"
    },
    {
        name: "SciELO",
        description: "Biblioteca Científica Eletrónica em Linha abrangendo várias áreas do conhecimento.",
        icon: Network,
        stats: "Investigação Científica"
    },
    {
        name: "Repositórios Universitários",
        description: "Teses, dissertações e publicações académicas de universidades parceiras.",
        icon: Building2,
        stats: "Trabalhos Académicos"
    }
];

export function SourcesSection() {
    return (
        <section className="w-full py-16 md:py-24 bg-background">
            <div className="container px-4 md:px-6 mx-auto">
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <h2 className="text-3xl font-bold tracking-tight mb-4">Rede de Bibliotecas Integradas</h2>
                    <p className="text-lg text-muted-foreground">
                        O Memba funciona como um agregador central, conectando-se a algumas das maiores bases de dados literárias e científicas do mundo para entregar resultados consolidados.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {SOURCES.map((source, index) => (
                        <motion.div
                            key={source.name}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-50px" }}
                            transition={{ duration: 0.4, delay: index * 0.1 }}
                            className="flex flex-col items-center text-center p-6 rounded-2xl border bg-card/50 shadow-sm"
                        >
                            <div className="h-14 w-14 rounded-full bg-primary/10 flex items-center justify-center mb-6 text-primary">
                                <source.icon className="h-7 w-7" />
                            </div>
                            <h3 className="font-bold text-xl mb-2">{source.name}</h3>
                            <p className="text-sm text-muted-foreground mb-4 flex-1">
                                {source.description}
                            </p>
                            <span className="text-xs font-semibold text-secondary-foreground bg-secondary px-3 py-1 rounded-full">
                                {source.stats}
                            </span>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
