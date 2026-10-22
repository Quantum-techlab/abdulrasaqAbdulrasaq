import { Globe, Wrench } from 'lucide-react';
import { SitePage, PageHeader, Reveal } from '@/components/site/SiteChrome';
import { TechBrandIcons, TechBrandIconsLarge } from '@/components/TechBrandIcons';
import { coreStack, tools } from '@/data/portfolio';
import { useSeo } from '@/seo/useSeo';

const Skills = () => {
  useSeo('/skills');
  return (
    <SitePage>
      <PageHeader index="04" label="Toolkit" title="Skills & Tech Stack"
        lead="A full-stack React and TypeScript toolkit for shipping fast, accessible web apps — with AI, OCR and real-time features built in."
        crumbs={[{ to: '/', label: 'Home' }, { to: '/skills', label: 'Skills' }]} />

      <section className="pb-16 border-t border-dashed border-line pt-12">
        <h2 className="t-label mb-5 flex items-center gap-2"><Globe className="w-3.5 h-3.5" /> Core stack</h2>
        <div className="card-edge overflow-hidden">
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 -mt-px -ml-px">
            {coreStack.map((tech, i) => (
              <Reveal key={tech.name} delay={i * 0.04} className="p-6 aspect-square flex flex-col justify-between border-t border-l border-dashed border-line">
                <span className="t-micro">{String(i + 1).padStart(2, '0')}</span>
                <div className="flex justify-center">{TechBrandIconsLarge[tech.icon] || <Globe className="w-8 h-8" />}</div>
                <h3 className="t-label">{tech.name}</h3>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="pb-12">
        <h2 className="t-label mb-5 flex items-center gap-2"><Wrench className="w-3.5 h-3.5" /> Tools & technologies</h2>
        <ul className="flex flex-wrap gap-2">
          {tools.map((tool) => (
            <li key={tool} className="t-label px-4 py-2.5 rounded-outlined border border-line-strong inline-flex items-center gap-2">
              {TechBrandIcons[tool] && <span className="[&_svg]:w-3.5 [&_svg]:h-3.5">{TechBrandIcons[tool]}</span>}
              {tool}
            </li>
          ))}
        </ul>
      </section>
    </SitePage>
  );
};

export default Skills;
