import { SitePage, PageHeader, Reveal } from '@/components/site/SiteChrome';
import { experiences } from '@/data/portfolio';
import { useSeo } from '@/seo/useSeo';

const Experience = () => {
  useSeo('/experience');
  return (
    <SitePage>
      <PageHeader index="03" label="Career" title="Experience"
        lead="Leading student developers at the University of Ilorin and shipping production interfaces with AI and innovation teams."
        crumbs={[{ to: '/', label: 'Home' }, { to: '/experience', label: 'Experience' }]} />
      <section className="pb-12">
        {experiences.map((exp, i) => (
          <Reveal key={exp.title + exp.company} delay={i * 0.06}>
            <article className="grid lg:grid-cols-[1fr_1.2fr_1.4fr] gap-x-[18px] gap-y-5 py-10 md:py-12 border-t border-dashed border-line">
              <div>
                <div className="t-label mb-3">{exp.period}</div>
                <div className="t-label">{exp.company}</div>
              </div>
              <h2 className="t-heading-sm">{exp.title}</h2>
              <div>
                <p className="t-body-sm mb-5">{exp.description}</p>
                <ul className="space-y-2.5">
                  {exp.responsibilities.map((r) => (
                    <li key={r} className="grid grid-cols-[24px_1fr] t-body-sm"><span aria-hidden>—</span>{r}</li>
                  ))}
                </ul>
              </div>
            </article>
          </Reveal>
        ))}
        <hr className="rule-dashed" />
      </section>
    </SitePage>
  );
};

export default Experience;
