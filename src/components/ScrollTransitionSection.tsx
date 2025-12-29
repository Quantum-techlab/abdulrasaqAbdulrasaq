import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Code, Mail, ArrowRight, Sparkles, Rocket, Users, Award, Heart } from 'lucide-react';
import { GlassCard } from './GlassCard';
import { ModernButton } from './ModernButton';
import { FloatingElements } from './FloatingElements';

export const ScrollTransitionSection = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  // 3D Character moves from center to left
  const characterX = useTransform(scrollYProgress, [0, 0.3, 0.5], ["50%", "0%", "0%"]);
  const characterOpacity = useTransform(scrollYProgress, [0, 0.2, 0.4], [0, 1, 1]);
  const characterScale = useTransform(scrollYProgress, [0, 0.3, 0.5], [0.8, 1, 1]);
  
  // About content slides in from right
  const aboutX = useTransform(scrollYProgress, [0.2, 0.4, 0.6], ["100%", "0%", "0%"]);
  const aboutOpacity = useTransform(scrollYProgress, [0.2, 0.4], [0, 1]);

  return (
    <section 
      ref={containerRef}
      id="about" 
      className="min-h-[200vh] relative"
    >
      {/* Sticky container for scroll effect */}
      <div className="sticky top-0 h-screen overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-50/30 via-purple-50/20 to-pink-50/30 dark:from-blue-900/10 dark:via-purple-900/10 dark:to-pink-900/10" />
        <FloatingElements />
        
        <div className="container mx-auto px-6 h-full relative z-10">
          <div className="h-full flex items-center">
            <div className="w-full flex flex-col lg:flex-row gap-8 lg:gap-6 items-center">
              
              {/* Left side - Animated 3D Character (35%) */}
              <motion.div
                className="lg:w-[35%] flex-shrink-0 flex justify-center lg:justify-end lg:pr-4"
                style={{
                  x: characterX,
                  opacity: characterOpacity,
                  scale: characterScale,
                }}
              >
                <div className="relative w-72 h-96 md:w-80 md:h-[450px]">
                  {/* 3D Character Container - Looking Right */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    {/* Glowing base platform */}
                    <motion.div
                      className="absolute bottom-4 w-48 h-4 bg-gradient-to-r from-blue-500/20 via-purple-500/30 to-cyan-500/20 rounded-full blur-xl"
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
                          
                          {/* Cheek blush */}
                          <div className="absolute bottom-9 left-3 w-4 h-2 bg-pink-300/50 rounded-full blur-sm" />
                          <div className="absolute bottom-9 right-3 w-4 h-2 bg-pink-300/50 rounded-full blur-sm" />
                        </div>
                        
                        {/* Hair */}
                        <div className="absolute -top-3 left-1/2 -translate-x-1/2 w-24 h-10 bg-gradient-to-r from-slate-800 via-slate-900 to-slate-800 rounded-t-3xl" />
                        <motion.div
                          className="absolute -top-1 left-2 w-4 h-6 bg-slate-800 rounded-full transform -rotate-12"
                          animate={{ rotate: [-12, -8, -12] }}
                          transition={{ duration: 2, repeat: Infinity }}
                        />
                        
                        {/* Glasses */}
                        <div className="absolute top-8 left-3 w-8 h-6 border-2 border-slate-600 rounded-lg bg-blue-100/20" />
                        <div className="absolute top-8 left-12 w-8 h-6 border-2 border-slate-600 rounded-lg bg-blue-100/20" />
                        <div className="absolute top-10 left-11 w-2 h-0.5 bg-slate-600" />
                      </motion.div>
                      
                      {/* Body */}
                      <motion.div
                        className="w-36 h-44 mx-auto rounded-3xl bg-gradient-to-br from-blue-600 via-blue-700 to-purple-700 shadow-2xl relative overflow-hidden"
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
                              <div className="h-0.5 w-full bg-green-400/70 rounded" />
                              <div className="h-0.5 w-3/4 bg-blue-400/70 rounded" />
                              <div className="h-0.5 w-1/2 bg-purple-400/70 rounded" />
                              <div className="h-0.5 w-2/3 bg-cyan-400/70 rounded" />
                            </motion.div>
                          </div>
                          {/* Keyboard base */}
                          <div className="absolute -bottom-2 left-0 right-0 h-3 bg-gradient-to-b from-slate-600 to-slate-700 rounded-b-lg" />
                        </motion.div>
                      </motion.div>
                      
                      {/* Left Arm - on keyboard */}
                      <motion.div
                        className="absolute top-32 -left-2 w-7 h-20 bg-gradient-to-b from-blue-600 to-blue-700 rounded-full origin-top"
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
                        <div className="w-20 h-7 bg-gradient-to-r from-blue-700 to-blue-600 rounded-full transform rotate-[-20deg]">
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
                        <p className="text-sm font-semibold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent whitespace-nowrap">
                          Check this out! →
                        </p>
                        {/* Bubble tail */}
                        <div className="absolute -bottom-2 left-6 w-4 h-4 bg-white dark:bg-slate-800 transform rotate-45 border-r border-b border-slate-200 dark:border-slate-700" />
                      </motion.div>
                    </motion.div>
                    
                    {/* Floating particles around character */}
                    {[...Array(8)].map((_, i) => (
                      <motion.div
                        key={i}
                        className="absolute rounded-full"
                        style={{
                          background: i % 3 === 0 ? '#3b82f6' : i % 3 === 1 ? '#8b5cf6' : '#06b6d4',
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
                      <Sparkles className="w-5 h-5 text-yellow-400" />
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
                      <Sparkles className="w-4 h-4 text-purple-400" />
                    </motion.div>
                  </div>
                </div>
              </motion.div>

              {/* Right side - About Me content (65%) */}
              <motion.div
                className="lg:w-[65%] flex-grow"
                style={{
                  x: aboutX,
                  opacity: aboutOpacity,
                }}
              >
                <div className="space-y-6">
                  {/* Section title with flair */}
                  <div className="relative">
                    <motion.div
                      className="absolute -left-4 top-0 w-1 h-full bg-gradient-to-b from-blue-500 via-purple-500 to-pink-500 rounded-full"
                      animate={{ scaleY: [0.8, 1, 0.8], opacity: [0.5, 1, 0.5] }}
                      transition={{ duration: 2, repeat: Infinity }}
                    />
                    <motion.span 
                      className="inline-flex items-center gap-2 text-sm font-semibold text-blue-600 dark:text-blue-400 uppercase tracking-wider"
                      initial={{ opacity: 0 }}
                      whileInView={{ opacity: 1 }}
                    >
                      <Sparkles className="w-4 h-4" />
                      Discover My Story
                    </motion.span>
                    <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mt-2">
                      <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
                        Who I Am
                      </span>
                    </h2>
                  </div>

                  {/* Main About content card */}
                  <GlassCard delay={0.2} className="p-8 relative overflow-hidden">
                    <div className="absolute -top-10 -right-10 w-40 h-40 bg-gradient-to-r from-blue-400 to-purple-500 opacity-10 rounded-full blur-3xl" />
                    <div className="absolute -bottom-10 -left-10 w-32 h-32 bg-gradient-to-r from-pink-400 to-orange-500 opacity-10 rounded-full blur-2xl" />
                    
                    <div className="space-y-5 relative z-10">
                      {/* Intro with impact */}
                      <div className="flex items-start gap-4">
                        <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center flex-shrink-0 shadow-lg">
                          <Rocket className="w-6 h-6 text-white" />
                        </div>
                        <div>
                          <p className="text-lg leading-relaxed text-slate-700 dark:text-slate-200">
                            I'm <span className="font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">Abdulrasaq Abdulrasaq</span> — a 
                            passionate <span className="font-semibold text-blue-600 dark:text-blue-400">Frontend Developer</span> and 
                            <span className="font-semibold text-purple-600 dark:text-purple-400"> Software Engineer</span> currently studying 
                            <span className="font-semibold"> Information and Communication Technology</span> at the <span className="font-semibold text-blue-600 dark:text-blue-400">University of Ilorin</span>.
                          </p>
                          <p className="text-base leading-relaxed text-slate-600 dark:text-slate-300 mt-3">
                            <span className="text-lg">🎯</span> <span className="font-medium">Designing intuitive interfaces, building scalable solutions, and solving complex problems</span> — 
                            these have always been my core focus. I transform ideas into exceptional digital experiences that users love.
                          </p>
                        </div>
                      </div>

                      {/* Leadership highlight */}
                      <motion.div 
                        className="p-5 bg-gradient-to-r from-blue-50 via-purple-50 to-pink-50 dark:from-blue-900/20 dark:via-purple-900/20 dark:to-pink-900/20 rounded-2xl border border-blue-200/50 dark:border-purple-500/20 relative overflow-hidden"
                        whileHover={{ scale: 1.02 }}
                        transition={{ duration: 0.3 }}
                      >
                        <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-br from-yellow-400/20 to-orange-400/20 rounded-full blur-xl" />
                        <div className="flex items-start gap-4 relative z-10">
                          <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-yellow-400 to-orange-500 flex items-center justify-center flex-shrink-0 shadow-md">
                            <Award className="w-5 h-5 text-white" />
                          </div>
                          <div>
                            <h4 className="font-bold text-slate-800 dark:text-white mb-1">
                              Software Director @ ITSA, University of Ilorin
                            </h4>
                            <p className="text-slate-600 dark:text-slate-300 text-sm leading-relaxed mb-3">
                              Leading the software development wing of the IT Student Association, I architect innovative solutions, 
                              drive technical excellence, and shape the next generation of developers. From conceptualization to deployment, 
                              I ensure our projects push boundaries and create real impact.
                            </p>
                            <div className="flex items-center gap-2 p-3 bg-gradient-to-r from-orange-50 to-yellow-50 dark:from-orange-900/20 dark:to-yellow-900/20 rounded-xl border border-orange-200/50 dark:border-orange-500/20">
                              <span className="text-xl">🚀</span>
                              <p className="text-sm text-slate-700 dark:text-slate-200">
                                <span className="font-bold text-orange-600 dark:text-orange-400">Community Lead — TechNexus 7.0</span> | 
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
                          className="p-4 bg-white/60 dark:bg-slate-800/60 rounded-xl border border-slate-200/50 dark:border-slate-700/50 backdrop-blur-sm"
                          whileHover={{ y: -3, boxShadow: "0 10px 30px -10px rgba(59, 130, 246, 0.3)" }}
                        >
                          <Users className="w-6 h-6 text-blue-500 mb-2" />
                          <h5 className="font-semibold text-slate-800 dark:text-white text-sm">Team Leadership</h5>
                          <p className="text-xs text-slate-500 dark:text-slate-400 mt-1">Mentoring 20+ developers</p>
                        </motion.div>
                        
                        <motion.div 
                          className="p-4 bg-white/60 dark:bg-slate-800/60 rounded-xl border border-slate-200/50 dark:border-slate-700/50 backdrop-blur-sm"
                          whileHover={{ y: -3, boxShadow: "0 10px 30px -10px rgba(139, 92, 246, 0.3)" }}
                        >
                          <Code className="w-6 h-6 text-purple-500 mb-2" />
                          <h5 className="font-semibold text-slate-800 dark:text-white text-sm">Clean Code</h5>
                          <p className="text-xs text-slate-500 dark:text-slate-400 mt-1">Scalable & maintainable</p>
                        </motion.div>
                        
                        <motion.div 
                          className="p-4 bg-white/60 dark:bg-slate-800/60 rounded-xl border border-slate-200/50 dark:border-slate-700/50 backdrop-blur-sm"
                          whileHover={{ y: -3, boxShadow: "0 10px 30px -10px rgba(236, 72, 153, 0.3)" }}
                        >
                          <Heart className="w-6 h-6 text-pink-500 mb-2" />
                          <h5 className="font-semibold text-slate-800 dark:text-white text-sm">User-Focused</h5>
                          <p className="text-xs text-slate-500 dark:text-slate-400 mt-1">Delightful experiences</p>
                        </motion.div>
                        
                        <motion.div 
                          className="p-4 bg-white/60 dark:bg-slate-800/60 rounded-xl border border-slate-200/50 dark:border-slate-700/50 backdrop-blur-sm"
                          whileHover={{ y: -3, boxShadow: "0 10px 30px -10px rgba(6, 182, 212, 0.3)" }}
                        >
                          <Sparkles className="w-6 h-6 text-cyan-500 mb-2" />
                          <h5 className="font-semibold text-slate-800 dark:text-white text-sm">Innovation</h5>
                          <p className="text-xs text-slate-500 dark:text-slate-400 mt-1">AI & modern tech</p>
                        </motion.div>
                      </div>

                      {/* Call to action with personality */}
                      <motion.div 
                        className="flex items-center gap-3 p-4 bg-gradient-to-r from-emerald-50 to-teal-50 dark:from-emerald-900/20 dark:to-teal-900/20 rounded-xl border border-emerald-200/50 dark:border-emerald-500/20"
                        animate={{ boxShadow: ["0 0 0 0 rgba(16, 185, 129, 0)", "0 0 0 8px rgba(16, 185, 129, 0.1)", "0 0 0 0 rgba(16, 185, 129, 0)"] }}
                        transition={{ duration: 2, repeat: Infinity }}
                      >
                        <span className="text-3xl">🚀</span>
                        <p className="text-sm font-medium text-slate-700 dark:text-slate-200">
                          <span className="font-bold text-emerald-600 dark:text-emerald-400">Ready to build something amazing?</span> 
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
          </div>
        </div>
      </div>
    </section>
  );
};

export default ScrollTransitionSection;
