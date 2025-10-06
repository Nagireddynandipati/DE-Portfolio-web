import { Github, Linkedin } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-gradient-to-br from-muted/30 via-muted/50 to-muted/70 py-16 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-grid-white/[0.02] bg-[size:50px_50px]" />
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-border to-transparent" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="group">
            <h3 className="text-xl font-bold mb-4 bg-gradient-to-r from-foreground to-foreground/70 bg-clip-text text-transparent" style={{ fontFamily: "'Space Grotesk', 'Space Grotesk Fallback', sans-serif" }}>
              About
            </h3>
            <p className="text-muted-foreground group-hover:text-foreground/80 transition-colors duration-300">
              Manoj is a data engineer passionate about building scalable data solutions, cloud platforms, and analytics engineering.
            </p>
          </div>
          <div className="group">
            <h3 className="text-xl font-bold mb-4 bg-gradient-to-r from-foreground to-foreground/70 bg-clip-text text-transparent" style={{ fontFamily: "'Space Grotesk', 'Space Grotesk Fallback', sans-serif" }}>
              Quick Links
            </h3>
            <ul className="space-y-3">
              <li>
                <a href="#" className="text-muted-foreground hover:text-foreground transition-all duration-300 hover:translate-x-1 flex items-center group/link">
                  <span className="mr-2 opacity-0 group-hover/link:opacity-100 transition-opacity">→</span>
                  Resume
                </a>
              </li>
              <li>
                <a href="https://www.linkedin.com/in/manojsai1/" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-foreground transition-all duration-300 hover:translate-x-1 flex items-center group/link">
                  <span className="mr-2 opacity-0 group-hover/link:opacity-100 transition-opacity">→</span>
                  LinkedIn
                </a>
              </li>
              <li>
                <a href="https://github.com/manojsai1" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-foreground transition-all duration-300 hover:translate-x-1 flex items-center group/link">
                  <span className="mr-2 opacity-0 group-hover/link:opacity-100 transition-opacity">→</span>
                  GitHub
                </a>
              </li>
            </ul>
          </div>
          <div className="group">
            <h3 className="text-xl font-bold mb-4 bg-gradient-to-r from-foreground to-foreground/70 bg-clip-text text-transparent" style={{ fontFamily: "'Space Grotesk', 'Space Grotesk Fallback', sans-serif" }}>
              Get In Touch
            </h3>
            <div className="space-y-4">
              <div className="flex items-center space-x-3 p-3 rounded-lg bg-muted/30 hover:bg-muted/50 transition-all duration-300 group-hover:scale-105">
                <div className="w-3 h-3 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full animate-pulse shadow-lg"></div>
                <a 
                  href="mailto:manojkoganti11@gmail.com" 
                  className="text-muted-foreground hover:text-foreground transition-all duration-300 font-medium"
                >
                  manojkoganti11@gmail.com
                </a>
              </div>
              <div className="text-sm text-muted-foreground/80 italic bg-gradient-to-r from-transparent via-muted/20 to-transparent p-2 rounded">
                Let's build something amazing together! 🚀
              </div>
            </div>
          </div>
          <div className="group">
            <h3 className="text-xl font-bold mb-4 bg-gradient-to-r from-foreground to-foreground/70 bg-clip-text text-transparent" style={{ fontFamily: "'Space Grotesk', 'Space Grotesk Fallback', sans-serif" }}>
              Follow Me
            </h3>
            <div className="flex space-x-4">
              <a
                href="https://www.linkedin.com/in/manojsai1/"
                className="text-muted-foreground hover:text-blue-500 transition-all duration-300 hover:scale-110 p-2 rounded-lg hover:bg-blue-500/10"
                aria-label="LinkedIn"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Linkedin className="w-6 h-6" />
              </a>
              <a
                href="https://github.com/manojsai1"
                className="text-muted-foreground hover:text-gray-900 dark:hover:text-white transition-all duration-300 hover:scale-110 p-2 rounded-lg hover:bg-gray-500/10"
                aria-label="GitHub"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Github className="w-6 h-6" />
              </a>
            </div>
            <div className="mt-4 text-sm text-muted-foreground/70">
              Connect & collaborate on exciting projects! 💡
            </div>
          </div>
        </div>
        <div className="border-t border-border/50 mt-12 pt-8 text-center">
          <div className="flex flex-col items-center space-y-2">
            <p className="text-muted-foreground">
              &copy; 2025 Manoj - Data Engineer. All rights reserved.
            </p>
            <div className="flex items-center space-x-2 text-xs text-muted-foreground/60">
              <span>Crafted by AI, wired on coffee, perfected by curiosity.</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}