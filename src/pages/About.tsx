import { Link } from 'react-router-dom';
import { MapPin, ArrowRight } from 'lucide-react';
import { SitePage, PageHeader, Reveal } from '@/components/site/SiteChrome';
import { RollText } from '@/components/RollText';
import { useSeo } from '@/seo/useSeo';

const facts = [
  { label: 'Education', value: 'Information Technology, University of Ilorin — Class of 2026' },
  { label: 'CGPA', value: 'A 4-pointer' },
  { label: 'Company', value: 'Co-founder, FaceTrust AI (with Elijah Adeniji)' },
  { label: 'Leadership', value: 'Software Director & Tech Lead, ITSA — 2025/2026' },
  { label: 'Award', value: '₦50M Students Venture Capital Grant (S-VCG) 2026' },
  { label: 'Based in', value: 'Ilorin, Kwara State, Nigeria' },
];

const About = () => {
  useSeo('/about');
  return (
    <SitePage>
      <PageHeader index="01" label="About" title="About Abdulrasaq Alatare"
        lead="Self-taught full-stack developer, Information Technology graduate of the University of Ilorin, and co-founder of FaceTrust AI."
        crumbs={[{ to: '/', label: 'Home' }, { to: '/about', label: 'About' }]} />

      <section className="grid lg:grid-cols-[1fr_minmax(260px,28vw)_1fr] gap-x-[18px] gap-y-12 items-start pb-20 border-t border-dashed border-line pt-12">
        <Reveal>
          <h2 className="t-heading mb-8">The short version</h2>
          <dl className="grid">
            {facts.map((f) => (
              <div key={f.label} className="py-4 border-t border-dashed border-line">
                <dt className="t-micro mb-2">{f.label}</dt>
                <dd className="t-label text-[13px] leading-snug">{f.value}</dd>
              </div>
            ))}
          </dl>
        </Reveal>

        <Reveal delay={0.1} className="w-full max-w-[420px] mx-auto lg:max-w-none">
          <div className="relative aspect-[3/4] overflow-hidden">
            <img src="/lovable-uploads/74fd8ca7-3647-4bc0-a715-8d5cfcb2d108.png" alt="Abdulrasaq Abdulrasaq Alatare at the Ilorin Innovation Hub"
              width={810} height={1080} decoding="async" className="w-full h-full object-cover grade-warm"
              style={{ objectPosition: 'center 10%', transform: 'scale(1.35)', transformOrigin: 'center 20%' }} />
          </div>
          <div className="flex justify-between t-micro mt-3">
            <span className="inline-flex items-center gap-1.5"><MapPin className="w-3 h-3" /> Ilorin, NG</span>
            <span>Fig. 01</span>
          </div>
        </Reveal>

        <Reveal delay={0.15}>
          <p className="t-body mb-8">
            <strong className="font-medium">Abdulrasaq Alatare</strong> (also known as <strong className="font-medium">Abdulrasaq Abdulrasaq</strong>) is a
            full-stack developer and a Class of 2026 graduate of the Department of Information Technology, University of Ilorin, Nigeria.
            I build modern, scalable web applications in the React ecosystem, with AI integration and user-centric digital experiences.
          </p>
          <p className="t-body">
            As Software Director at ITSA for the 2025/2026 session, I led technical initiatives and mentored fellow developers.
            I co-founded FaceTrust AI with Elijah Adeniji, and it won the ₦50 million Federal Government Students Venture Capital Grant in 2026.
          </p>
        </Reveal>
      </section>

      <section className="grid lg:grid-cols-[1fr_1.4fr] gap-x-[18px] gap-y-8 py-16 border-t border-dashed border-line">
        <Reveal><h2 className="t-heading">Origin story</h2></Reveal>
        <Reveal delay={0.1} className="space-y-6">
          <p className="t-body-sm md:text-[22px] md:leading-[1.3]">
            Self-taught. No bootcamp. Just pure curiosity. It all started with a simple question — “How do websites actually work?” — and
            that curiosity led me down a rabbit hole: HTML first, then CSS, then JavaScript hit me like a freight train. I was hooked.
          </p>
          <p className="t-body-sm md:text-[22px] md:leading-[1.3]">
            Late nights debugging code I barely understood. YouTube tutorials at 2x speed, StackOverflow open in 47 tabs. Building projects
            no one asked for, just to prove I could. Failing. Breaking things. Fixing them. Repeat.
          </p>
          <p className="t-body-sm md:text-[22px] md:leading-[1.3]">
            Someone once told me “you can’t learn to code on your own.” I took that personally. Now I help others prove the same thing wrong.
          </p>
          <p className="t-label pt-4">“The best developers aren’t the ones who know everything — they’re the ones who never stop being curious.”</p>
        </Reveal>
      </section>

      <section className="flex flex-wrap gap-3 py-12 border-t border-dashed border-line">
        <Link to="/projects" className="btn-fill"><RollText>See the projects</RollText> <ArrowRight className="w-4 h-4" /></Link>
        <Link to="/awards" className="btn-ghost min-h-[40px] px-5">Awards</Link>
        <Link to="/contact" className="btn-ghost min-h-[40px] px-5">Contact</Link>
      </section>
    </SitePage>
  );
};

export default About;
