import { Github, Linkedin, Mail, Download } from 'lucide-react';
import { SitePage, PageHeader, Reveal } from '@/components/site/SiteChrome';
import { RollText } from '@/components/RollText';
import { site } from '@/data/portfolio';
import { useSeo } from '@/seo/useSeo';

const channels = [
  { icon: <Mail className="w-4 h-4" />, label: 'Email', value: site.email, href: `mailto:${site.email}` },
  { icon: <Linkedin className="w-4 h-4" />, label: 'LinkedIn', value: 'Connect', href: site.linkedin },
  { icon: <Github className="w-4 h-4" />, label: 'GitHub', value: 'Quantum-techlab', href: site.github },
];

const Contact = () => {
  useSeo('/contact');
  return (
    <SitePage>
      <PageHeader index="06" label="Contact" title="Hire Abdulrasaq Alatare"
        lead="Let's build something amazing. I'm always excited to collaborate on innovative projects and explore new opportunities — web apps, AI integration and product builds."
        crumbs={[{ to: '/', label: 'Home' }, { to: '/contact', label: 'Contact' }]} />

      <Reveal className="flex flex-wrap gap-3 pb-12">
        <a href={`mailto:${site.email}`} className="btn-fill px-8 py-[18px] text-[14px]">
          <Mail className="w-4 h-4" /> <RollText>Work with me</RollText>
        </a>
        <a href={site.resume} target="_blank" rel="noopener noreferrer" className="btn-ghost min-h-[52px] px-6">
          <Download className="w-3.5 h-3.5" /> <RollText>Resume</RollText>
        </a>
      </Reveal>

      <section className="grid sm:grid-cols-3 gap-[18px] pb-12 border-t border-dashed border-line pt-12">
        {channels.map((c, i) => (
          <Reveal key={c.label} delay={i * 0.06}>
            <a href={c.href} target={c.href.startsWith('mailto') ? undefined : '_blank'} rel="noopener noreferrer"
              className="group card-edge p-6 flex flex-col gap-8 transition-colors duration-300 hover:border-ink h-full">
              <div className="flex items-center justify-between">
                <h2 className="t-label">{c.label}</h2>
                {c.icon}
              </div>
              <span className="t-sub break-all underline decoration-1 underline-offset-4 decoration-transparent group-hover:decoration-current transition-colors">{c.value}</span>
            </a>
          </Reveal>
        ))}
      </section>

      <p className="t-label pb-8">Based in Ilorin, Kwara State, Nigeria — available for remote work worldwide.</p>
    </SitePage>
  );
};

export default Contact;
