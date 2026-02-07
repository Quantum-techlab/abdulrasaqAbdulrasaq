import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Code, Mail, ArrowRight, Sparkles, Rocket, Users, Award, Heart } from 'lucide-react';
import { GlassCard } from './GlassCard';
import { ModernButton } from './ModernButton';
import { FloatingElements } from './FloatingElements';

export const ScrollTransitionSection = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(containerRef, { once: false, amount: 0.2 });

  // Container animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1
      }
    }
  };

  const characterVariants = {
    hidden: { opacity: 0, x: -50, scale: 0.9 },
    visible: { 
      opacity: 1, 
      x: 0, 
      scale: 1,
      transition: { duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] as const }
    }
  };

  const contentVariants = {
    hidden: { opacity: 0, x: 50 },
    visible: { 
      opacity: 1, 
      x: 0,
      transition: { duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] as const }
    }
  };

  return (
    <section 
      ref={containerRef}
      id="about" 
      className="min-h-screen py-20 relative overflow-hidden"
    >
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-zinc-50/50 via-zinc-100/30 to-zinc-50/50 dark:from-zinc-800/20 dark:via-zinc-900/15 dark:to-zinc-800/20" />
      <FloatingElements />
      
      <motion.div 
        className="container mx-auto px-4 sm:px-6 relative z-10"
        variants={containerVariants}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
      >
        <div className="flex flex-col lg:flex-row gap-8 lg:gap-12 items-center justify-center">
          
          {/* Left side - Animated 3D Character */}
          <motion.div
            className="w-full lg:w-[40%] flex justify-center"
            variants={characterVariants}
          >
                <div className="relative w-72 h-96 md:w-80 md:h-[450px]">
                  {/* 3D Character Container - Looking Right */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    {/* Glowing base platform - silver */}
                    <motion.div
                      className="absolute bottom-4 w-48 h-4 bg-gradient-to-r from-zinc-400/20 via-zinc-500/30 to-zinc-400/20 rounded-full blur-xl"
                      animate={{
                        scaleX: [1, 1.2, 1],
                        opacity: [0.5, 0.8, 0.5],
                      }}
                      transition={{ duration: 2, repeat: Infinity }}
                    />
                    
                    {/* Main character body - Rotated to look right */}
                    <motion.div
                      className="relative"
                      animate={{
                        y: [-5, 5, -5],
                      }}
                      transition={{
                        y: { duration: 3, repeat: Infinity, ease: "easeInOut" },
                      }}
                      style={{ 
                        transformStyle: "preserve-3d",
                        transform: "rotateY(-15deg)" 
                      }}
                    >
                      {/* Head - Looking right */}
                      <motion.div
                        className="relative w-28 h-28 mx-auto mb-2"
                        style={{ transform: "rotateY(25deg)" }}
                        animate={{ rotateZ: [-2, 2, -2] }}
                        transition={{ duration: 4, repeat: Infinity }}
                      >
                        {/* Face */}
                        <div className="w-28 h-28 rounded-3xl bg-gradient-to-br from-amber-200 via-amber-100 to-amber-200 shadow-2xl relative overflow-hidden">
                          {/* Face glow */}
                          <div className="absolute inset-0 bg-gradient-to-t from-transparent to-white/30 rounded-3xl" />
                          
                          {/* Eyes - Looking right */}
                          <div className="absolute top-9 left-2 right-0 flex justify-start gap-5 pl-4">
                            <motion.div
                              className="w-5 h-5 bg-white rounded-full shadow-lg relative"
                              animate={{ scaleY: [1, 0.1, 1] }}
                              transition={{ duration: 4, repeat: Infinity, repeatDelay: 2 }}
                            >
                              <motion.div 
                                className="absolute top-1 right-0.5 w-2.5 h-2.5 bg-slate-800 rounded-full"
                                animate={{ x: [0, 1, 0] }}
                                transition={{ duration: 2, repeat: Infinity }}
                              />
                              <div className="absolute top-0.5 right-0.5 w-1 h-1 bg-white rounded-full" />
                            </motion.div>
                            <motion.div
                              className="w-5 h-5 bg-white rounded-full shadow-lg relative"
                              animate={{ scaleY: [1, 0.1, 1] }}
                              transition={{ duration: 4, repeat: Infinity, repeatDelay: 2 }}
                            >
                              <motion.div 
                                className="absolute top-1 right-0.5 w-2.5 h-2.5 bg-slate-800 rounded-full"
                                animate={{ x: [0, 1, 0] }}
                                transition={{ duration: 2, repeat: Infinity }}
                              />
                              <div className="absolute top-0.5 right-0.5 w-1 h-1 bg-white rounded-full" />
                            </motion.div>
                          </div>
                          
                          {/* Eyebrows */}
                          <div className="absolute top-6 left-6 w-4 h-1 bg-slate-700 rounded-full transform -rotate-6" />
                          <div className="absolute top-6 left-14 w-4 h-1 bg-slate-700 rounded-full transform rotate-6" />
                          
                          {/* Smile */}
                          <div className="absolute bottom-7 left-1/2 -translate-x-1/2 w-10 h-4 border-b-4 border-slate-700/60 rounded-full" />
                          
                          {/* Cheek blush - subtle warm gray */}
                          <div className="absolute bottom-9 left-3 w-4 h-2 bg-zinc-300/40 rounded-full blur-sm" />
                          <div className="absolute bottom-9 right-3 w-4 h-2 bg-zinc-300/40 rounded-full blur-sm" />
                        </div>
                        
                        {/* Hair */}
                        <div className="absolute -top-3 left-1/2 -translate-x-1/2 w-24 h-10 bg-gradient-to-r from-slate-800 via-slate-900 to-slate-800 rounded-t-3xl" />
                        <motion.div
                          className="absolute -top-1 left-2 w-4 h-6 bg-slate-800 rounded-full transform -rotate-12"
                          animate={{ rotate: [-12, -8, -12] }}
                          transition={{ duration: 2, repeat: Infinity }}
                        />
                        
                        {/* Glasses - silver/gray */}
                        <div className="absolute top-8 left-3 w-8 h-6 border-2 border-zinc-600 rounded-lg bg-zinc-200/20" />
                        <div className="absolute top-8 left-12 w-8 h-6 border-2 border-zinc-600 rounded-lg bg-zinc-200/20" />
                        <div className="absolute top-10 left-11 w-2 h-0.5 bg-zinc-600" />
                      </motion.div>
                      
                      {/* Body - charcoal/slate hoodie */}
                      <motion.div
                        className="w-36 h-44 mx-auto rounded-3xl bg-gradient-to-br from-zinc-700 via-zinc-800 to-zinc-900 shadow-2xl relative overflow-hidden"
                        animate={{ rotateZ: [-1, 1, -1] }}
                        transition={{ duration: 5, repeat: Infinity }}
                      >
                        {/* Shirt highlight */}
                        <div className="absolute inset-0 bg-gradient-to-t from-transparent to-white/10 rounded-3xl" />
                        
                        {/* Hoodie strings */}
                        <div className="absolute top-2 left-12 w-1 h-8 bg-white/60 rounded-full" />
                        <div className="absolute top-2 right-12 w-1 h-8 bg-white/60 rounded-full" />
                        
                        {/* Logo on chest */}
                        <div className="absolute top-8 left-1/2 -translate-x-1/2 w-16 h-16 rounded-full bg-white/10 flex items-center justify-center">
                          <span className="text-2xl font-mono font-bold text-white/80">AA</span>
                        </div>
                        
                        {/* Laptop */}
                        <motion.div
                          className="absolute bottom-6 left-1/2 -translate-x-1/2 w-24 h-14 bg-gradient-to-br from-slate-700 to-slate-800 rounded-lg shadow-lg transform perspective-500 rotateX-12"
                          animate={{ rotateX: [0, 3, 0] }}
                          transition={{ duration: 3, repeat: Infinity }}
                        >
                          {/* Screen */}
                          <div className="absolute inset-1 bg-gradient-to-br from-slate-900 to-slate-800 rounded">
                            {/* Code lines */}
                            <motion.div
                              className="absolute top-1 left-1 right-1 space-y-1"
                              animate={{ opacity: [0.5, 1, 0.5] }}
                              transition={{ duration: 1.5, repeat: Infinity }}
                            >
                              <div className="h-0.5 w-full bg-zinc-300/70 rounded" />
                              <div className="h-0.5 w-3/4 bg-zinc-400/70 rounded" />
                              <div className="h-0.5 w-1/2 bg-zinc-500/70 rounded" />
                              <div className="h-0.5 w-2/3 bg-white/70 rounded" />
                            </motion.div>
                          </div>
                          {/* Keyboard base */}
                          <div className="absolute -bottom-2 left-0 right-0 h-3 bg-gradient-to-b from-slate-600 to-slate-700 rounded-b-lg" />
                        </motion.div>
                      </motion.div>
                      
                      {/* Left Arm - on keyboard */}
                      <motion.div
                        className="absolute top-32 -left-2 w-7 h-20 bg-gradient-to-b from-zinc-700 to-zinc-800 rounded-full origin-top"
                        animate={{ rotateZ: [-8, -5, -8] }}
                        transition={{ duration: 2, repeat: Infinity }}
                      >
                        {/* Hand */}
                        <div className="absolute -bottom-2 left-0 w-7 h-7 bg-gradient-to-br from-amber-200 to-amber-100 rounded-full" />
                      </motion.div>
                      
                      {/* Right Arm - Pointing right towards content */}
                      <motion.div
                        className="absolute top-32 -right-16 origin-left"
                        animate={{ 
                          rotateZ: [-5, 5, -5],
                          x: [0, 5, 0]
                        }}
                        transition={{ duration: 2, repeat: Infinity }}
                      >
                        {/* Upper arm */}
                        <div className="w-20 h-7 bg-gradient-to-r from-zinc-800 to-zinc-700 rounded-full transform rotate-[-20deg]">
                          {/* Hand pointing */}
                          <motion.div 
                            className="absolute -right-4 top-0 w-8 h-7 bg-gradient-to-br from-amber-200 to-amber-100 rounded-full"
                            animate={{ x: [0, 3, 0] }}
                            transition={{ duration: 1.5, repeat: Infinity }}
                          >
                            {/* Pointing finger */}
                            <div className="absolute -right-4 top-2 w-5 h-3 bg-gradient-to-r from-amber-200 to-amber-100 rounded-full" />
                          </motion.div>
                        </div>
                      </motion.div>

                      {/* Speech bubble */}
                      <motion.div
                        className="absolute -top-16 -right-8 bg-white dark:bg-slate-800 rounded-2xl px-4 py-2 shadow-xl border border-slate-200 dark:border-slate-700"
                        animate={{ 
                          y: [-3, 3, -3],
                          rotate: [-2, 2, -2]
                        }}
                        transition={{ duration: 3, repeat: Infinity }}
                      >
                        <p className="text-sm font-semibold bg-gradient-to-r from-zinc-700 to-zinc-500 dark:from-zinc-300 dark:to-zinc-400 bg-clip-text text-transparent whitespace-nowrap">
                          Check this out! →
                        </p>
                        {/* Bubble tail */}
                        <div className="absolute -bottom-2 left-6 w-4 h-4 bg-white dark:bg-slate-800 transform rotate-45 border-r border-b border-slate-200 dark:border-slate-700" />
                      </motion.div>
                    </motion.div>
                    
                    {/* Floating particles around character - silver/gray */}
                    {[...Array(8)].map((_, i) => (
                      <motion.div
                        key={i}
                        className="absolute rounded-full"
                        style={{
                          background: i % 3 === 0 ? '#a1a1aa' : i % 3 === 1 ? '#71717a' : '#d4d4d8',
                          width: 6 + (i % 3) * 2,
                          height: 6 + (i % 3) * 2,
                          top: `${15 + i * 10}%`,
                          left: i % 2 === 0 ? '5%' : '90%',
                        }}
                        animate={{
                          y: [-10, 10, -10],
                          opacity: [0.3, 0.8, 0.3],
                          scale: [1, 1.3, 1],
                        }}
                        transition={{
                          duration: 2 + i * 0.3,
                          repeat: Infinity,
                          delay: i * 0.2,
                        }}
                      />
                    ))}

                    {/* Sparkle effects */}
                    <motion.div
                      className="absolute top-20 right-4"
                      animate={{ 
                        scale: [0, 1, 0],
                        rotate: [0, 180, 360],
                        opacity: [0, 1, 0]
                      }}
                      transition={{ duration: 2, repeat: Infinity, delay: 0.5 }}
                    >
                      <Sparkles className="w-5 h-5 text-zinc-400" />
                    </motion.div>
                    <motion.div
                      className="absolute bottom-32 left-4"
                      animate={{ 
                        scale: [0, 1, 0],
                        rotate: [0, -180, -360],
                        opacity: [0, 1, 0]
                      }}
                      transition={{ duration: 2.5, repeat: Infinity, delay: 1 }}
                    >
                      <Sparkles className="w-4 h-4 text-zinc-500" />
                    </motion.div>
                  </div>
                </div>
              </motion.div>

              {/* Right side - About Me content */}
              <motion.div
                className="w-full lg:w-[55%]"
                variants={contentVariants}
              >
                <div className="space-y-5">
                  {/* Section title with flair */}
                  <div className="relative">
                    <motion.div
                      className="absolute -left-4 top-0 w-1 h-full bg-gradient-to-b from-zinc-500 via-zinc-400 to-zinc-500 rounded-full"
                      animate={{ scaleY: [0.8, 1, 0.8], opacity: [0.5, 1, 0.5] }}
                      transition={{ duration: 2, repeat: Infinity }}
                    />
                    <motion.span 
                      className="inline-flex items-center gap-2 text-sm font-semibold text-zinc-600 dark:text-zinc-400 uppercase tracking-wider"
                      initial={{ opacity: 0 }}
                      whileInView={{ opacity: 1 }}
                    >
                      <Sparkles className="w-4 h-4" />
                      Discover My Story
                    </motion.span>
                    <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mt-2">
                      <span className="bg-gradient-to-r from-zinc-700 via-zinc-600 to-zinc-700 dark:from-zinc-300 dark:via-zinc-400 dark:to-zinc-300 bg-clip-text text-transparent">
                        Who I Am
                      </span>
                    </h2>
                  </div>

                  {/* Main About content card */}
                  <GlassCard delay={0.2} className="p-8 relative overflow-hidden">
                    <div className="absolute -top-10 -right-10 w-40 h-40 bg-gradient-to-r from-zinc-300 to-zinc-400 opacity-10 rounded-full blur-3xl" />
                    <div className="absolute -bottom-10 -left-10 w-32 h-32 bg-gradient-to-r from-zinc-400 to-zinc-500 opacity-10 rounded-full blur-2xl" />
                    
                    <div className="space-y-5 relative z-10">
                      {/* Intro with impact */}
                      <div className="flex items-start gap-4">
                        <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-zinc-600 to-zinc-700 flex items-center justify-center flex-shrink-0 shadow-lg">
                          <Rocket className="w-6 h-6 text-white" />
                        </div>
                        <div>
                          <p className="text-lg leading-relaxed text-zinc-700 dark:text-zinc-200">
                            I'm <span className="font-bold text-transparent bg-clip-text bg-gradient-to-r from-zinc-700 to-zinc-600 dark:from-zinc-300 dark:to-zinc-400">Abdulrasaq Abdulrasaq</span> — a 
                            passionate <span className="font-semibold text-zinc-700 dark:text-zinc-300">Frontend Developer</span> and 
                            <span className="font-semibold text-zinc-600 dark:text-zinc-400"> Software Engineer</span> currently studying
                            <span className="font-semibold"> Information and Communication Technology</span> at the <span className="font-semibold text-zinc-700 dark:text-zinc-300">University of Ilorin</span>.
                          </p>
                          <p className="text-base leading-relaxed text-zinc-600 dark:text-zinc-300 mt-3">
                            <span className="text-lg">🎯</span> <span className="font-medium">Designing intuitive interfaces, building scalable solutions, and solving complex problems</span> — 
                            these have always been my core focus. I transform ideas into exceptional digital experiences that users love.
                          </p>
                        </div>
                      </div>

                      {/* Leadership highlight */}
                      <motion.div 
                        className="p-5 bg-gradient-to-r from-zinc-50 via-zinc-100 to-zinc-50 dark:from-zinc-800/20 dark:via-zinc-700/20 dark:to-zinc-800/20 rounded-2xl border border-zinc-200/50 dark:border-zinc-600/20 relative overflow-hidden"
                        whileHover={{ scale: 1.02 }}
                        transition={{ duration: 0.3 }}
                      >
                        <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-br from-zinc-300/20 to-zinc-400/20 rounded-full blur-xl" />
                        <div className="flex items-start gap-4 relative z-10">
                          <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-zinc-500 to-zinc-600 flex items-center justify-center flex-shrink-0 shadow-md">
                            <Award className="w-5 h-5 text-white" />
                          </div>
                          <div>
                            <h4 className="font-bold text-zinc-800 dark:text-white mb-1">
                              Software Director @ ITSA, University of Ilorin
                            </h4>
                            <p className="text-zinc-600 dark:text-zinc-300 text-sm leading-relaxed mb-3">
                              Leading the software development wing of the IT Student Association, I architect innovative solutions, 
                              drive technical excellence, and shape the next generation of developers. From conceptualization to deployment, 
                              I ensure our projects push boundaries and create real impact.
                            </p>
                            <div className="flex items-center gap-2 p-3 bg-gradient-to-r from-zinc-100 to-zinc-50 dark:from-zinc-800/20 dark:to-zinc-700/20 rounded-xl border border-zinc-200/50 dark:border-zinc-600/20">
                              <span className="text-xl">🚀</span>
                              <p className="text-sm text-zinc-700 dark:text-zinc-200">
                                <span className="font-bold text-zinc-700 dark:text-zinc-300">Community Lead — TechNexus 7.0</span> |
                                Spearheading initiatives to train and empower students in high-demand tech skills including Web Development, 
                                AI/ML, Cloud Computing, and Mobile Development.
                              </p>
                            </div>
                          </div>
                        </div>
                      </motion.div>

                      {/* What I bring */}
                      <div className="grid grid-cols-2 gap-3">
                        <motion.div 
                          className="p-4 bg-white/60 dark:bg-zinc-800/60 rounded-xl border border-zinc-200/50 dark:border-zinc-700/50 backdrop-blur-sm"
                          whileHover={{ y: -3, boxShadow: "0 10px 30px -10px rgba(161, 161, 170, 0.3)" }}
                        >
                          <Users className="w-6 h-6 text-zinc-500 mb-2" />
                          <h5 className="font-semibold text-zinc-800 dark:text-white text-sm">Team Leadership</h5>
                          <p className="text-xs text-zinc-500 dark:text-zinc-400 mt-1">Mentoring 20+ developers</p>
                        </motion.div>
                        
                        <motion.div 
                          className="p-4 bg-white/60 dark:bg-zinc-800/60 rounded-xl border border-zinc-200/50 dark:border-zinc-700/50 backdrop-blur-sm"
                          whileHover={{ y: -3, boxShadow: "0 10px 30px -10px rgba(161, 161, 170, 0.3)" }}
                        >
                          <Code className="w-6 h-6 text-zinc-600 mb-2" />
                          <h5 className="font-semibold text-zinc-800 dark:text-white text-sm">Clean Code</h5>
                          <p className="text-xs text-zinc-500 dark:text-zinc-400 mt-1">Scalable & maintainable</p>
                        </motion.div>
                        
                        <motion.div 
                          className="p-4 bg-white/60 dark:bg-zinc-800/60 rounded-xl border border-zinc-200/50 dark:border-zinc-700/50 backdrop-blur-sm"
                          whileHover={{ y: -3, boxShadow: "0 10px 30px -10px rgba(161, 161, 170, 0.3)" }}
                        >
                          <Heart className="w-6 h-6 text-zinc-500 mb-2" />
                          <h5 className="font-semibold text-zinc-800 dark:text-white text-sm">User-Focused</h5>
                          <p className="text-xs text-zinc-500 dark:text-zinc-400 mt-1">Delightful experiences</p>
                        </motion.div>
                        
                        <motion.div 
                          className="p-4 bg-white/60 dark:bg-zinc-800/60 rounded-xl border border-zinc-200/50 dark:border-zinc-700/50 backdrop-blur-sm"
                          whileHover={{ y: -3, boxShadow: "0 10px 30px -10px rgba(161, 161, 170, 0.3)" }}
                        >
                          <Sparkles className="w-6 h-6 text-zinc-600 mb-2" />
                          <h5 className="font-semibold text-zinc-800 dark:text-white text-sm">Innovation</h5>
                          <p className="text-xs text-zinc-500 dark:text-zinc-400 mt-1">AI & modern tech</p>
                        </motion.div>
                      </div>

                      {/* Call to action with personality */}
                      <motion.div 
                        className="flex items-center gap-3 p-4 bg-gradient-to-r from-zinc-100 to-zinc-50 dark:from-zinc-800/20 dark:to-zinc-700/20 rounded-xl border border-zinc-200/50 dark:border-zinc-600/20"
                        animate={{ boxShadow: ["0 0 0 0 rgba(161, 161, 170, 0)", "0 0 0 8px rgba(161, 161, 170, 0.1)", "0 0 0 0 rgba(161, 161, 170, 0)"] }}
                        transition={{ duration: 2, repeat: Infinity }}
                      >
                        <span className="text-3xl">🚀</span>
                        <p className="text-sm font-medium text-zinc-700 dark:text-zinc-200">
                          <span className="font-bold text-zinc-700 dark:text-zinc-300">Ready to build something amazing?</span> 
                          {" "}I bring creativity, technical expertise, and a passion for excellence to every project.
                        </p>
                      </motion.div>
                    </div>

                    <div className="flex flex-wrap gap-3 mt-6">
                      <ModernButton variant="primary" href="#projects">
                        <Code className="w-4 h-4" />
                        Explore My Work
                        <ArrowRight className="w-4 h-4" />
                      </ModernButton>
                      <ModernButton variant="outline" href="mailto:ola283dayo@gmail.com">
                        <Mail className="w-4 h-4" />
                        Let's Collaborate
                      </ModernButton>
                    </div>
                  </GlassCard>
                </div>
              </motion.div>
            </div>
        </motion.div>
    </section>
  );
};

export default ScrollTransitionSection;
