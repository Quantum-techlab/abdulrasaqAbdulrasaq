// Structured data (JSON-LD) for each route. Plain JS so the app (runtime head updates)
// and scripts/seo-build.mjs (prerendered heads) build exactly the same graph.

export const PERSON_ID = '#person';
export const WEBSITE_ID = '#website';
export const FACETRUST_ID = '#facetrust';

const abs = (site, path) => (path.startsWith('http') ? path : site + path);

/** Site-wide entities, embedded once in index.html. */
export function globalSchema(site) {
  return {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'Person',
        '@id': site + '/' + PERSON_ID,
        name: 'Abdulrasaq Alatare',
        givenName: 'Abdulrasaq',
        familyName: 'Alatare',
        additionalName: 'Abdulrasaq',
        alternateName: ['Abdulrasaq Abdulrasaq Alatare', 'Abdulrasaq Abdulrasaq', 'Alatare Abdulrasaq'],
        url: site + '/',
        image: site + '/lovable-uploads/74fd8ca7-3647-4bc0-a715-8d5cfcb2d108.png',
        email: 'mailto:ola283dayo@gmail.com',
        jobTitle: 'Full-Stack Developer',
        description:
          'Self-taught full-stack developer from Ilorin, Nigeria. Co-founder of FaceTrust AI, winner of the ₦50 million Federal Government Students Venture Capital Grant (S-VCG) 2026, and a Class of 2026 Information Technology graduate of the University of Ilorin.',
        worksFor: { '@id': site + '/' + FACETRUST_ID },
        alumniOf: {
          '@type': 'CollegeOrUniversity',
          name: 'University of Ilorin',
          url: 'https://www.unilorin.edu.ng/',
          department: { '@type': 'Organization', name: 'Department of Information Technology' },
        },
        hasCredential: {
          '@type': 'EducationalOccupationalCredential',
          credentialCategory: 'degree',
          name: 'Information Technology, Class of 2026',
          recognizedBy: { '@type': 'CollegeOrUniversity', name: 'University of Ilorin' },
        },
        award: [
          'Federal Government Students Venture Capital Grant (S-VCG) 2026 — ₦50 million, for FaceTrust AI',
          'HackerRank Frontend Developer (React) certification',
          'freeCodeCamp Responsive Web Design certification',
          'freeCodeCamp JavaScript Algorithms & Data Structures certification',
        ],
        knowsAbout: [
          'React', 'TypeScript', 'JavaScript', 'Next.js', 'Node.js', 'Supabase', 'Tailwind CSS',
          'Full-Stack Development', 'Frontend Development', 'AI Integration', 'Biometric Verification',
          'Facial Recognition', 'Digital Identity', 'QR Code Systems', 'OCR', 'Startup Founding',
        ],
        address: { '@type': 'PostalAddress', addressLocality: 'Ilorin', addressRegion: 'Kwara State', addressCountry: 'NG' },
        nationality: { '@type': 'Country', name: 'Nigeria' },
        sameAs: [
          'https://github.com/Quantum-techlab',
          'https://www.linkedin.com/in/abdulrasaq-abdulrasaq-68b0b1351',
          'https://www.instagram.com/abdulrasaqqqq',
        ],
      },
      {
        '@type': 'Organization',
        '@id': site + '/' + FACETRUST_ID,
        name: 'FaceTrust AI',
        url: 'https://facetrustai.com/',
        description: 'Biometric identity verification that links a NIN or BVN identity to a live, liveness-checked face.',
        founder: [
          { '@id': site + '/' + PERSON_ID },
          { '@type': 'Person', name: 'Elijah Adeniji' },
        ],
        award: 'Federal Government Students Venture Capital Grant (S-VCG) 2026 — ₦50 million',
        areaServed: { '@type': 'Country', name: 'Nigeria' },
      },
      {
        '@type': 'WebSite',
        '@id': site + '/' + WEBSITE_ID,
        url: site + '/',
        name: 'Abdulrasaq Alatare',
        alternateName: ['Abdulrasaq Alatare Portfolio', 'Abdulrasaq Abdulrasaq Portfolio'],
        inLanguage: 'en',
        publisher: { '@id': site + '/' + PERSON_ID },
      },
    ],
  };
}

/** Page-specific entities for one route. */
export function routeSchema(route, site, defaultImage) {
  const url = abs(site, route.path === '/' ? '/' : route.path);
  const image = abs(site, route.image || defaultImage);
  const graph = [];

  const page = {
    '@type': route.schemaType || 'WebPage',
    '@id': url + '#webpage',
    url,
    name: route.title,
    description: route.description,
    inLanguage: 'en',
    isPartOf: { '@id': site + '/' + WEBSITE_ID },
    about: { '@id': site + '/' + PERSON_ID },
    primaryImageOfPage: { '@type': 'ImageObject', url: image },
  };
  if (route.schemaType === 'ProfilePage') page.mainEntity = { '@id': site + '/' + PERSON_ID };

  if (route.path !== '/') {
    const parts = route.path.split('/').filter(Boolean);
    const crumbs = [{ name: 'Home', item: site + '/' }];
    let acc = '';
    parts.forEach((part, i) => {
      acc += '/' + part;
      const isLast = i === parts.length - 1;
      crumbs.push({ name: isLast ? route.name : part.charAt(0).toUpperCase() + part.slice(1), item: site + acc });
    });
    page.breadcrumb = { '@id': url + '#breadcrumb' };
    graph.push({
      '@type': 'BreadcrumbList',
      '@id': url + '#breadcrumb',
      itemListElement: crumbs.map((c, i) => ({ '@type': 'ListItem', position: i + 1, name: c.name, item: c.item })),
    });
  }

  if (route.project) {
    const app = {
      '@type': 'SoftwareApplication',
      '@id': url + '#software',
      name: route.name,
      url: route.demo,
      image,
      description: route.description,
      applicationCategory: 'WebApplication',
      operatingSystem: 'Web',
      creator: { '@id': site + '/' + PERSON_ID },
    };
    if (route.project === 'facetrust-ai') {
      app.creator = [{ '@id': site + '/' + PERSON_ID }, { '@type': 'Person', name: 'Elijah Adeniji' }];
      app.publisher = { '@id': site + '/' + FACETRUST_ID };
      app.award = 'Federal Government Students Venture Capital Grant (S-VCG) 2026 — ₦50 million';
    }
    page.mainEntity = { '@id': url + '#software' };
    graph.push(app);
  }

  graph.unshift(page);
  return { '@context': 'https://schema.org', '@graph': graph };
}
