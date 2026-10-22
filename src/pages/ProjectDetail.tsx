import { Link, useParams } from 'react-router-dom';
import { ArrowLeft, ArrowRight, ExternalLink, Github } from 'lucide-react';
import { SitePage, PageHeader, Reveal } from '@/components/site/SiteChrome';
import { caseStudies, award } from '@/data/portfolio';
import { useSeo } from '@/seo/useSeo';
import NotFound from './NotFound';

const ProjectDetail = () => {
  const { slug } = useParams();
  const index = caseStudies.findIndex((p) => p.slug === slug);
  const project = caseStudies[index];
  useSeo(`/projects/${slug}`);
  if (!project || !('caseStudy' in project)) return <NotFound />;

  const cs = project.caseStudy;
  const next = caseStudies[(index + 1) % caseStudies.length];

  return (
    <SitePage>
      <PageHeader index={String(index + 1).padStart(2, '0')} label={project.tag ?? 'Case study'} title={project.title}
        lead={cs.headline}
        crumbs={[{ to: '/', label: 'Home' }, { to: '/projects', label: 'Projects' }, { to: `/projects/${project.slug}`, label: project.title }]} />

      <Reveal className="pb-12">
        <a href={project.demo} target="_blank" rel="noopener noreferrer" className="block card-edge overflow-hidden" aria-label={`Open ${project.title} live site`}>
          <img src={project.preview} alt={`${project.title} — live website`} width={1280} height={960} decoding="async" fetchPriority="high"
            className="w-full h-auto" />
        </a>
      </Reveal>

      <section className="grid lg:grid-cols-[1fr_1.4fr] gap-x-[18px] gap-y-10 py-12 border-t border-dashed border-line">
        <Reveal>
          <dl className="grid gap-0">
            <div className="py-4 border-b border-dashed border-line"><dt className="t-micro mb-2">Role</dt><dd className="t-label text-[13px]">{cs.role}</dd></div>
            <div className="py-4 border-b border-dashed border-line"><dt className="t-micro mb-2">Stack</dt><dd className="t-label text-[13px]">{project.tech.join(' / ')}</dd></div>
            {'credit' in project && project.credit && (
              <div className="py-4 border-b border-dashed border-line"><dt className="t-micro mb-2">Team</dt><dd className="t-label text-[13px]">{project.credit}</dd></div>
            )}
          </dl>
          <div className="flex flex-wrap items-center gap-5 mt-8">
            <a href={project.demo} target="_blank" rel="noopener noreferrer" className="btn-fill">
              <ExternalLink className="w-4 h-4" /> Visit live site
            </a>
            <a href={project.github} target="_blank" rel="noopener noreferrer" className="link-u t-label inline-flex items-center gap-2">
              <Github className="w-3.5 h-3.5" /> Github
            </a>
          </div>
        </Reveal>

        <div className="space-y-12">
          <Reveal>
            <h2 className="t-heading-sm mb-4">The problem</h2>
            <p className="t-body">{cs.problem}</p>
          </Reveal>
          <Reveal>
            <h2 className="t-heading-sm mb-4">The solution</h2>
            <p className="t-body">{cs.solution}</p>
          </Reveal>
          <Reveal>
            <h2 className="t-heading-sm mb-4">Highlights</h2>
            <ul className="space-y-3">
              {cs.highlights.map((h) => (
                <li key={h} className="grid grid-cols-[24px_1fr] t-body-sm md:text-[20px]"><span aria-hidden>—</span>{h}</li>
              ))}
            </ul>
          </Reveal>
          {project.slug === 'facetrust-ai' && (
            <Reveal className="card-edge p-6">
              <div className="t-label mb-3">Award — 2026</div>
              <p className="t-body-sm mb-4">{award.summary}</p>
              <Link to="/awards" className="t-label underline underline-offset-4 decoration-1 inline-flex items-center gap-2">About the grant <ArrowRight className="w-3.5 h-3.5" /></Link>
            </Reveal>
          )}
        </div>
      </section>

      <nav aria-label="More case studies" className="flex items-center justify-between gap-4 py-10 border-t border-dashed border-line">
        <Link to="/projects" className="t-label inline-flex items-center gap-2 underline underline-offset-4 decoration-1"><ArrowLeft className="w-3.5 h-3.5" /> All projects</Link>
        <Link to={`/projects/${next.slug}`} className="text-right">
          <span className="t-micro block mb-1">Next case study</span>
          <span className="t-heading-sm inline-flex items-center gap-2">{next.title} <ArrowRight className="w-4 h-4" /></span>
        </Link>
      </nav>
    </SitePage>
  );
};

export default ProjectDetail;
