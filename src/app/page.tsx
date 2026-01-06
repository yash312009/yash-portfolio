"use client";
import { motion, useScroll, useSpring } from "framer-motion";
import Image from "next/image";
import { 
  Github, 
  Linkedin, 
  Mail, 
  MapPin, 
  ExternalLink, 
  Code2, 
  Database, 
  Video, 
  Download,
  ChevronRight
} from "lucide-react";

const fadeIn = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.6 }
};

export default function Home() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 100, damping: 30 });

  return (
    <main className="relative min-h-screen overflow-x-hidden selection:bg-blue-500/30">
      
      {/* 1. ANIMATED DARK DESIGN BACKGROUND (STAYS STILL) */}
      <div className="fixed inset-0 -z-20 bg-[#030303]">
        {/* Animated Mesh Gradient Blobs */}
        <div className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] bg-blue-900/20 rounded-full blur-[120px] animate-pulse" />
        <div className="absolute bottom-[10%] right-[-5%] w-[40%] h-[40%] bg-indigo-900/20 rounded-full blur-[120px] animate-bounce [animation-duration:10s]" />
        
        {/* Subtle SVG Grid Overlay for "Tech" texture */}
        <div className="absolute inset-0 opacity-[0.15]" 
             style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M0 40 L40 40 L40 0' fill='none' stroke='%23ffffff' stroke-width='0.5' /%3E%3C/svg%3E")` }} 
        />
        
        {/* Vignette effect */}
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black" />
      </div>

      {/* Progress Bar */}
      <motion.div className="fixed top-0 left-0 right-0 h-1 bg-blue-600 z-[60] origin-left" style={{ scaleX }} />

      {/* HERO SECTION */}
      <section className="min-h-screen flex flex-col justify-center items-center px-6 pt-20 text-center relative">
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }} 
          animate={{ opacity: 1, scale: 1 }} 
          transition={{ duration: 0.8 }}
          className="flex flex-col items-center"
        >
          {/* PROFILE IMAGE WITH INTENSE MATTE GLASS */}
          <div className="relative mb-10 group">
            <div className="absolute -inset-4 bg-blue-600 rounded-full blur-3xl opacity-20 group-hover:opacity-40 transition duration-1000" />
            
            <div className="relative w-48 h-48 md:w-64 md:h-64 rounded-full overflow-hidden border-[8px] border-white/10 backdrop-blur-2xl shadow-[0_0_50px_rgba(0,0,0,0.5)] transition-all duration-700 group-hover:scale-[1.03] group-hover:border-blue-500/50">
              <Image 
                src="/img.jpg" 
                alt="Yash Kamble" 
                fill
                className="object-cover brightness-110 contrast-110 transition-all duration-700 group-hover:scale-110"
                priority
              />
            </div>
          </div>

          <span className="px-5 py-2 rounded-full border border-blue-500/30 bg-blue-500/10 text-blue-400 text-xs md:text-sm font-bold tracking-[0.2em] uppercase mb-8 inline-block backdrop-blur-md">
            Data Science enthusiast
          </span>
          
          <h1 className="text-6xl md:text-8xl font-black mb-6 tracking-tighter text-white">
            Yash <span className="text-blue-500">Kamble</span>
          </h1>
          
          <motion.p 
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.4 }}
            className="text-xl md:text-2xl text-zinc-400 mb-12 max-w-2xl mx-auto leading-relaxed font-light"
          >
            Diploma Computer Engineering Student <br/> 
            <span className="text-zinc-200">Pune, India</span>
          </motion.p>
          
          <div className="flex flex-wrap justify-center gap-5 items-center">
            <a 
              href="/resume.pdf" 
              download="Yash_Kamble_Resume.pdf"
              className="group flex items-center gap-3 px-10 py-4 bg-white text-black rounded-2xl font-black hover:bg-blue-500 hover:text-white transition-all shadow-xl active:scale-95"
            >
              <Download size={20} />
              DOWNLOAD RESUME
            </a>

            <div className="flex gap-4">
              <a href="https://github.com/yash312009" target="_blank" className="p-4 rounded-2xl border border-white/10 bg-white/5 hover:bg-blue-600 transition-all text-white backdrop-blur-md"><Github size={20}/></a>
              <a href="https://www.linkedin.com/in/yash-kamble-94108528a/" target="_blank" className="p-4 rounded-2xl border border-white/10 bg-white/5 hover:bg-blue-600 transition-all text-white backdrop-blur-md"><Linkedin size={20}/></a>
            </div>
          </div>
        </motion.div>
      </section>

      {/* ABOUT SECTION */}
      <section id="about" className="py-32 px-6 max-w-5xl mx-auto">
        <motion.div {...fadeIn} className="bg-white/[0.03] border border-white/10 rounded-[3rem] p-10 md:p-16 backdrop-blur-3xl shadow-2xl relative overflow-hidden">
          {/* Decorative corner glow */}
          <div className="absolute top-0 right-0 w-32 h-32 bg-blue-600/10 blur-3xl" />
          
          <h2 className="text-3xl font-black mb-10 flex items-center gap-4 text-white uppercase tracking-tighter">
            <span className="w-16 h-[2px] bg-blue-600"></span> The Persona
          </h2>
          <div className="space-y-8 text-lg md:text-xl text-zinc-400 leading-relaxed font-light">
            <p>
              I’m <span className="text-white font-medium">Yash Kamble</span>, a passionate Data Science enthusiast from Pune. I specialize in the intersection of data-driven logic and creative execution.
            </p>
            <p>
              Currently building foundations in <span className="text-blue-400 font-mono italic text-sm">C/C++, Python, and Web Dev</span>, while exploring the depths of sound design and video production.
            </p>
            <div className="flex flex-wrap gap-4 pt-6">
              <div className="flex items-center gap-3 px-6 py-3 bg-white/5 rounded-2xl border border-white/5 text-zinc-300 text-sm italic tracking-wide font-medium shadow-inner transition-colors duration-300 hover:bg-white/10">
                <MapPin size={16} className="text-blue-500" /> Pune, India
              </div>
              <div className="flex items-center gap-3 px-6 py-3 bg-white/5 rounded-2xl border border-white/5 text-zinc-300 text-sm font-medium shadow-inner transition-colors duration-300 hover:bg-white/10">
                <Mail size={16} className="text-blue-500" /> yashkamble312009@gmail.com
              </div>
            </div>
          </div>
        </motion.div>
      </section>

      {/* SKILLS SECTION */}
      <section id="skills" className="py-32 px-6">
        <div className="max-w-6xl mx-auto">
          <motion.h2 {...fadeIn} className="text-2xl font-black mb-20 text-center text-white/40 tracking-[0.5em] uppercase">Tech Stack</motion.h2>
          <div className="grid md:grid-cols-3 gap-10">
            <SkillCard title="Data Science" icon={<Database/>} skills={["Python", "Pandas", "SQL", "Numpy"]} color="border-blue-500/20" />
            <SkillCard title="Development" icon={<Code2/>} skills={["C/C++", "Next.js", "Tailwind"]} color="border-indigo-500/20" />
            <SkillCard title="Creative" icon={<Video/>} skills={["Premiere", "Sound Design", "DaVinci"]} color="border-cyan-500/20" />
          </div>
        </div>
      </section>

      {/* REFINED CONTACT SECTION */}
<section id="contact" className="py-40 px-6 text-center relative">
  <motion.div 
    initial={{ opacity: 0, y: 30 }} 
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    className="max-w-4xl mx-auto relative group"
  >
    {/* Subtle Outer Glow behind the box */}
    <div className="absolute -inset-1 bg-gradient-to-r from-blue-600/20 to-indigo-600/20 rounded-[3rem] blur-2xl opacity-50 group-hover:opacity-100 transition duration-1000" />
    
    <div className="relative p-12 md:p-20 rounded-[3rem] bg-zinc-950/40 border border-white/10 backdrop-blur-3xl overflow-hidden">
      
      {/* Abstract Background Decoration within the box */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none opacity-20">
        <div className="absolute -top-24 -right-24 w-64 h-64 bg-blue-600/20 rounded-full blur-3xl" />
        <div className="absolute -bottom-24 -left-24 w-64 h-64 bg-indigo-600/10 rounded-full blur-3xl" />
      </div>

      <motion.div className="relative z-10">
        <span className="text-blue-500 font-bold tracking-[0.4em] uppercase text-xs mb-6 block">
          Available for Opportunities
        </span>
        
        <h2 className="text-4xl md:text-6xl font-black mb-8 tracking-tighter text-white uppercase italic">
          Let's Build the <span className="text-blue-500">Future.</span>
        </h2>
        
        <p className="text-zinc-400 text-lg md:text-xl mb-12 max-w-xl mx-auto font-light leading-relaxed">
          Currently seeking roles in Data Science and Full-Stack Development. 
          If you have a project that needs a blend of logic and creativity, my inbox is open.
        </p>

        <div className="flex flex-col md:flex-row items-center justify-center gap-6">
          <a 
            href="mailto:yashkamble312009@gmail.com" 
            className="group flex items-center gap-4 px-12 py-5 bg-white text-black rounded-2xl font-black hover:bg-blue-600 hover:text-white transition-all duration-300 shadow-2xl uppercase tracking-widest text-sm"
          >
            Send an Email 
            <ChevronRight size={20} className="group-hover:translate-x-1 transition-transform" />
          </a>
          
          <div className="flex gap-4">
            <a 
              href="https://linkedin.com/in/yash-kamble-94108528a/" 
              target="_blank"
              className="p-5 rounded-2xl border border-white/10 bg-white/5 text-white hover:bg-white/10 transition-all backdrop-blur-md"
            >
              <Linkedin size={20} />
            </a>
            <a 
              href="https://github.com/yash312009" 
              target="_blank"
              className="p-5 rounded-2xl border border-white/10 bg-white/5 text-white hover:bg-white/10 transition-all backdrop-blur-md"
            >
              <Github size={20} />
            </a>
          </div>
        </div>
      </motion.div>
    </div>
  </motion.div>
</section>

      <footer className="py-16 text-center">
        <div className="h-[1px] w-32 bg-zinc-800 mx-auto mb-10" />
        <p className="text-zinc-600 text-[10px] font-black tracking-[0.6em] uppercase">
          © {new Date().getFullYear()} Yash Kamble — Built for the future
        </p>
      </footer>
    </main>
  );
}

function SkillCard({ title, icon, skills, color }: { title: string, icon: React.ReactNode, skills: string[], color: string }) {
  return (
    <motion.div 
      whileHover={{ y: -15, scale: 1.02 }}
      className={`p-10 rounded-[2.5rem] border ${color} bg-white/[0.02] backdrop-blur-xl transition-all hover:bg-white/[0.05] hover:border-white/20`}
    >
      <div className="text-blue-500 mb-8 w-14 h-14 flex items-center justify-center bg-blue-500/10 rounded-2xl shadow-inner">{icon}</div>
      <h3 className="text-2xl font-black mb-6 text-white tracking-tighter uppercase">{title}</h3>
      <div className="flex flex-wrap gap-3">
        {skills.map(s => (
          <span key={s} className="px-4 py-2 bg-white/5 text-zinc-500 rounded-xl text-[11px] font-black uppercase tracking-wider border border-white/5">{s}</span>
        ))}
      </div>
    </motion.div>
  );
}