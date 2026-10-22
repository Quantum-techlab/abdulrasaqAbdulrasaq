import { Link } from 'react-router-dom';
import { Award, ExternalLink, ArrowRight } from 'lucide-react';
import { SitePage, PageHeader, Reveal } from '@/components/site/SiteChrome';
import { award, certifications } from '@/data/portfolio';
import { useSeo } from '@/seo/useSeo';

const sources = [
  { label: 'University of Ilorin — 3 Unilorites secure multimillion naira grant', href: 'https://www.unilorin.edu.ng/3-unilorites-secure-multimillion-naira-grant/' },
  { label: 'University of Ilorin — Egbewole congratulates 3 student-winners of N150m venture grants', href: 'https://www.unilorin.edu.ng/egbewole-congratulates-3-student-winners-of-n150m-venture-grants/' },
];

const Awards = () => {
  useSeo('/awards');
  return (
    <SitePage>
      <PageHeader index="05" label="Credentials" title="Awards & Certifications"
        lead="Winner of the ₦50 million Federal Government Students Venture Capital Grant (S-VCG) 2026 for FaceTrust AI."
        crumbs={[{ to: '/', label: 'Home' }, { to: '/awards', label: 'Awards' }]} />

      <Reveal>
        <section className="grid lg:grid-cols-[1fr_auto_1fr] gap-x-[18px] gap-y-8 items-center py-12 md:py-16 border-t border-dashed border-line">
          <div>
            <div className="t-label mb-6">Award — 2026</div>
            <h2 className="t-heading">{award.title}</h2>
          </div>
          <div className="t-wordmark text-left lg:text-center" style={{ fontSize: 'clamp(64px, 9vw, 150px)' }}>{award.amount}</div>
          <div>
            <p className="t-body mb-6">{award.summary}</p>
            <p className="t-body-sm mb-8">
              The Students Venture Capital Grant (S-VCG, also written FG-SVCG) is the Federal Government of Nigeria’s equity-free grant for
              student-led ventures. The University of Ilorin recorded one of the highest numbers of winners nationwide.
            </p>
            <Link to="/projects/facetrust-ai" className="t-label underline underline-offset-4 decoration-1 inline-flex items-center gap-2">
              Read the FaceTrust AI case study <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>
        </section>
      </Reveal>

      <section className="pb-12">
        <h2 className="t-label mb-4 pt-12 border-t border-dashed border-line">Certifications</h2>
        {certifications.map((cert, i) => (
          <Reveal key={cert.title} delay={i * 0.05}>
            <article className="grid grid-cols-[auto_1fr] md:grid-cols-[56px_1fr_220px_80px_auto] gap-x-[18px] gap-y-2 py-6 border-t border-dashed border-line items-center">
              <Award className="w-5 h-5 stroke-[1.5] row-span-2 md:row-span-1" />
              <h3 className="t-heading-sm">{cert.title}</h3>
              <p className="t-label col-start-2 md:col-start-auto">{cert.issuer}</p>
              <span className="t-label col-start-2 md:col-start-auto">{cert.date}</span>
              <span className="t-label col-start-2 md:col-start-auto md:text-right">{cert.credential}</span>
            </article>
          </Reveal>
        ))}
        <hr className="rule-dashed" />
      </section>

      <section className="pb-12">
        <h2 className="t-label mb-4">Press</h2>
        <ul className="space-y-3">
          {sources.map((s) => (
            <li key={s.href}>
              <a href={s.href} target="_blank" rel="noopener noreferrer" className="tag-ember underline underline-offset-4 decoration-1 inline-flex items-center gap-1.5">
                {s.label} <ExternalLink className="w-3 h-3" />
              </a>
            </li>
          ))}
        </ul>
      </section>
    </SitePage>
  );
};

export default Awards;
