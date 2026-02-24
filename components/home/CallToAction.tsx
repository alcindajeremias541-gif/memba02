"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { GraduationCap } from "lucide-react";

export function CallToAction() {
    return (
        <section className="w-full py-20 md:py-32">
            <div className="container px-4 md:px-6 mx-auto">
                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    className="relative overflow-hidden rounded-3xl bg-primary text-primary-foreground"
                >
                    {/* Decorative background pattern */}
                    <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)', backgroundSize: '32px 32px' }}></div>

                    <div className="relative z-10 flex flex-col items-center justify-center p-8 md:p-16 text-center">
                        <div className="mb-6 rounded-full bg-primary-foreground/10 p-4">
                            <GraduationCap className="h-10 w-10" />
                        </div>
                        <h2 className="mb-4 text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
                            Crie a sua Biblioteca Académica Pessoal
                        </h2>
                        <p className="max-w-[700px] text-primary-foreground/80 md:text-lg mb-8">
                            Junte-se a milhares de estudantes, investigadores e profissionais. Guarde referências, organize as suas leituras e colabore em pesquisas de forma centralizada.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
                            <Button size="lg" variant="secondary" className="w-full sm:w-auto font-semibold" asChild>
                                <Link href="/auth/signup">Registo Gratuito</Link>
                            </Button>
                            <Button size="lg" variant="outline" className="w-full sm:w-auto bg-transparent border-primary-foreground hover:bg-primary-foreground/10 hover:text-primary-foreground text-primary-foreground" asChild>
                                <Link href="/about">Saber Mais</Link>
                            </Button>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
