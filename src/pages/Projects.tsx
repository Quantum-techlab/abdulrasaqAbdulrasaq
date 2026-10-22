import { Link } from 'react-router-dom';
import { ArrowRight, ExternalLink, Github } from 'lucide-react';
import { SitePage, PageHeader, Reveal } from '@/components/site/SiteChrome';
import { projects, caseStudies } from '@/data/portfolio';
import { useSeo } from '@/seo/useSeo';

const Projects = () => {
  useSeo('/projects');
  const others = projects.filter((p) => !('caseStudy' in p));
  return (
    <SitePage>
      <PageHeader index="02" label="Work" title="Projects"
        lead="Products and tools built by Abdulrasaq Alatare — from biometric identity verification to campus vehicle security."
        crumbs={[{ to: '/', label: 'Home' }, { to: '/projects', label: 'Projects' }]} />

      <section aria-labelledby="case-studies" className="pb-16">
        <h2 id="case-studies" className="t-label mb-6">Case studies</h2>
        <div className="grid md:grid-cols-3 gap-[18px]">
          {caseStudies.map((p, i) => (
            <Reveal key={p.slug} delay={i * 0.08}>
              <Link to={`/projects/${p.slug}`} className="group block card-edge overflow-hidden h-full transition-colors duration-300 hover:border-ink">
                <div className="aspect-[4/3] overflow-hidden bg-surface/40">
                  <img src={p.preview} alt={`${p.title} website`} width={1280} height={960} loading="lazy" decoding="async"
                    className="w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-[1.03]" />
                </div>
                <div className="p-6">
                  <div className="flex items-center justify-between gap-3 mb-4">
                    <span className="t-micro">{String(i + 1).padStart(2, '0')}</span>
                    {p.tag && <span className="t-micro px-2.5 py-1 rounded-outlined border border-dashed border-line-strong">{p.tag}</span>}
                  </div>
                  <h3 className="t-heading-sm mb-3">{p.title}</h3>
                  <p className="t-body-sm mb-6">{p.description}</p>
                  <span className="t-label inline-flex items-center gap-2 underline underline-offset-4 decoration-1">Read case study <ArrowRight className="w-3.5 h-3.5" /></span>
                </div>
              </Link>
            </Reveal>
          ))}
        </div>
      </section>

      <section aria-labelledby="more" className="pb-12">
        <div className="flex items-center justify-between t-label mb-4 pt-12 border-t border-dashed border-line">
          <h2 id="more">More projects</h2><span>{String(others.length).padStart(2, '0')}</span>
        </div>
        {others.map((p, i) => (
          <Reveal key={p.slug} delay={i * 0.04}>
            <article className="grid md:grid-cols-[56px_1.1fr_2fr_150px] gap-x-[18px] gap-y-3 py-6 border-t border-dashed border-line items-baseline">
              <span className="t-label">{String(i + caseStudies.length + 1).padStart(2, '0')}</span>
              <div>
                <h3 className="t-heading-sm">{p.title}</h3>
                {p.tag && <span className="inline-block t-micro mt-3 px-2.5 py-1 rounded-outlined border border-dashed border-line-strong">{p.tag}</span>}
              </div>
              <div>
                <p className="t-body-sm mb-3">{p.description}</p>
                <p className="t-micro">{p.tech.join(' / ')}</p>
              </div>
              <div className="flex gap-5 md:justify-end">
                {p.demo !== '#' && (
                  <a href={p.demo} target="_blank" rel="noopener noreferrer" className="link-u t-label inline-flex items-center gap-1.5">
                    <ExternalLink className="w-3 h-3" /> Live
                  </a>
                )}
                <a href={p.github} target="_blank" rel="noopener noreferrer" className="link-u t-label inline-flex items-center gap-1.5">
                  <Github className="w-3 h-3" /> Code
                </a>
              </div>
            </article>
          </Reveal>
        ))}
        <hr className="rule-dashed" />
      </section>
    </SitePage>
  );
};

export default Projects;
