import Link from "next/link";
import { BookOpen, Github, Twitter, Linkedin } from "lucide-react";

export function Footer() {
    return (
        <footer className="border-t bg-background">
            <div className="container mx-auto px-4 py-12 md:py-16">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                    <div className="md:col-span-1">
                        <Link href="/" className="flex items-center gap-2 mb-4">
                            <BookOpen className="h-6 w-6 text-primary" />
                            <span className="text-xl font-bold tracking-tight">Memba</span>
                        </Link>
                        <p className="text-sm text-muted-foreground mb-6">
                            Your ultimate virtual library. Discover, track, and share your favorite books with readers around the world.
                        </p>
                        <div className="flex items-center gap-4">
                            <Link href="#" className="text-muted-foreground hover:text-foreground transition-colors">
                                <Twitter className="h-5 w-5" />
                                <span className="sr-only">Twitter</span>
                            </Link>
                            <Link href="#" className="text-muted-foreground hover:text-foreground transition-colors">
                                <Github className="h-5 w-5" />
                                <span className="sr-only">GitHub</span>
                            </Link>
                            <Link href="#" className="text-muted-foreground hover:text-foreground transition-colors">
                                <Linkedin className="h-5 w-5" />
                                <span className="sr-only">LinkedIn</span>
                            </Link>
                        </div>
                    </div>

                    <div>
                        <h3 className="font-semibold mb-4">Library</h3>
                        <ul className="space-y-3">
                            <li><Link href="/browse" className="text-sm text-muted-foreground hover:text-foreground transition-colors">Browse Books</Link></li>
                            <li><Link href="/categories" className="text-sm text-muted-foreground hover:text-foreground transition-colors">Categories</Link></li>
                            <li><Link href="/authors" className="text-sm text-muted-foreground hover:text-foreground transition-colors">Authors</Link></li>
                            <li><Link href="/collections" className="text-sm text-muted-foreground hover:text-foreground transition-colors">Collections</Link></li>
                        </ul>
                    </div>

                    <div>
                        <h3 className="font-semibold mb-4">Community</h3>
                        <ul className="space-y-3">
                            <li><Link href="/discussions" className="text-sm text-muted-foreground hover:text-foreground transition-colors">Discussions</Link></li>
                            <li><Link href="/reviews" className="text-sm text-muted-foreground hover:text-foreground transition-colors">Top Reviews</Link></li>
                            <li><Link href="/reading-challenge" className="text-sm text-muted-foreground hover:text-foreground transition-colors">Reading Challenge</Link></li>
                            <li><Link href="/events" className="text-sm text-muted-foreground hover:text-foreground transition-colors">Events</Link></li>
                        </ul>
                    </div>

                    <div>
                        <h3 className="font-semibold mb-4">Legal</h3>
                        <ul className="space-y-3">
                            <li><Link href="/privacy" className="text-sm text-muted-foreground hover:text-foreground transition-colors">Privacy Policy</Link></li>
                            <li><Link href="/terms" className="text-sm text-muted-foreground hover:text-foreground transition-colors">Terms of Service</Link></li>
                            <li><Link href="/cookie-policy" className="text-sm text-muted-foreground hover:text-foreground transition-colors">Cookie Policy</Link></li>
                            <li><Link href="/contact" className="text-sm text-muted-foreground hover:text-foreground transition-colors">Contact Us</Link></li>
                        </ul>
                    </div>
                </div>

                <div className="mt-12 pt-8 border-t flex flex-col md:flex-row items-center justify-between gap-4">
                    <p className="text-sm text-muted-foreground">
                        &copy; {new Date().getFullYear()} Memba. All rights reserved.
                    </p>
                    <div className="flex gap-4">
                        <span className="text-xs text-muted-foreground">Made with ❤️ for book lovers.</span>
                    </div>
                </div>
            </div>
        </footer>
    );
}
