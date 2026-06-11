const assetUrl = (path) => `${import.meta.env.BASE_URL}${path}`;

const profile = {
  name: "Ankita Singh",
  first: "Ankita",
  role: "Lead Product Manager",
  tagline:
    "I turn ambiguous, enterprise-scale problems into measurable outcomes - most recently driving 98% ML forecast accuracy and $3M+ in savings at Walmart.",
  location: "Bentonville, Arkansas",
  email: "ankita15leo@gmail.com",
  phone: "(479) 544-3699",
  linkedin: "https://www.linkedin.com/in/ankita15singh/",
  github: "https://github.com/ankitasingh15",
  resume: assetUrl("assets/Ankita-Singh-Resume.pdf"),
  year: "2026",
};

const about = [
  "I'm a strategic, cross-functional Product and Program leader who turns ambiguous, enterprise-scale problems into measurable outcomes. Over 10+ years I've steered business transformations, machine-learning solutions, and global platform integrations across Fortune 500 ecosystems - most recently as Senior Product Manager at Walmart.",
  "I pair deep technical acumen with financial savvy and an integrative leadership style that harmonizes complex data systems with core business performance - building first-time-right solutions and mobilizing cross-cultural global teams.",
];

const heroStats = [
  { value: "10+", label: "Years in product & program" },
  { value: "$80M+", label: "4-year portfolio impact" },
  { value: "98%", label: "ML forecast accuracy" },
];

const glance = [
  { k: "Based in", v: "Bentonville, Arkansas" },
  { k: "Focus", v: "AI, ML & platform products" },
  { k: "Experience", v: "10+ years" },
  { k: "Languages", v: "English & Hindi" },
  { k: "Status", v: "Open to senior roles" },
];

const certifications = [
  {
    title: "AI Product Management",
    by: "AI Product Academy - Maven",
    year: "2026",
    logo: assetUrl("logos/maven.png"),
  },
  {
    title: "Software Processes & Agile Practices",
    by: "University of Alberta",
    year: "2024",
    logo: assetUrl("logos/ualberta.png"),
  },
  {
    title: "Intro to Software Product Management",
    by: "University of Alberta",
    year: "2024",
    logo: assetUrl("logos/ualberta.png"),
  },
  {
    title: "SAFe Product Owner / Manager (5.0)",
    by: "Scaled Agile",
    year: "2020",
    logo: assetUrl("logos/scaledagile.png"),
  },
  {
    title: "SAFe Practitioner",
    by: "Scaled Agile",
    year: "2018",
    logo: assetUrl("logos/scaledagile.png"),
  },
];

const capabilities = [
  "Product Strategy & Vision",
  "Customer Discovery & User Research",
  "Roadmap Ownership & Prioritization",
  "Stakeholder Alignment & Executive Communication",
  "Cross-Functional Leadership",
  "Execution & Program Delivery",
  "Data-Driven Product Management",
  "Global Platform Delivery",
  "GenAI & ML Product Innovation",
  "Legacy Modernization & Digital Transformation",
  "Business Process Transformation",
  "Enterprise Product Adoption & Change Management",
];

const work = [
  {
    company: "Walmart",
    title: "Connected Forecasting (F1)",
    url: "",
    image: "",
    cover: { value: "98%", label: "Forecast Accuracy" },
    tint: "glass-navy",
    summary:
      "Led data-science forecast generation and pipeline development for the U.S. market - from ML strategy through enterprise adoption.",
    overview: [
      "Architected automated ML models and end-to-end data pipelines feeding predictive metrics into the central F1 application.",
      "Led migration & decommissioning of legacy systems - offboarding 'Merch Planner' and onboarding nine business divisions.",
      "Launched self-service capabilities to track, audit, and modify forecasts across matrixed finance organizations.",
    ],
    stats: [
      { value: "98%", label: "forecast accuracy" },
      { value: "$3M+", label: "annual savings" },
      { value: "+20%", label: "adoption" },
    ],
    tags: ["ML Forecasting", "Platform Strategy"],
  },
  {
    company: "Cognizant - Walmart",
    title: "Enterprise Product Portfolio",
    url: "",
    image: "",
    cover: { value: "$80M+", label: "4-yr portfolio impact" },
    tint: "glass-blue",
    summary:
      "Steered parallel execution of three high-stakes enterprise products and a global real-estate platform across seven markets.",
    overview: [
      "Built a real-estate ML tool analyzing thousands of vendor proposals and invoices, flagging incorrect claims at scale.",
      "Directed the high-risk DCS2K legacy migration across an onshore-offshore matrix with a zero-backout deployment.",
      "Designed multi-tenant architecture and role-based security standardizing folders across UK, Japan, Canada, US & South America.",
    ],
    stats: [
      { value: "$13M", label: "first-year savings" },
      { value: "7", label: "global markets" },
      { value: "-20%", label: "delivery effort" },
    ],
    tags: ["Portfolio Leadership", "Global Delivery"],
  },
  {
    company: "Personal Project",
    title: "AI Movie Discovery Platform",
    url: "https://flixkeep.com",
    image: assetUrl("flixkeep.png"),
    cover: { value: "0-to-1", label: "Concept to launch" },
    tint: "glass-navy",
    summary:
      "A taste-based movie discovery platform. Built end-to-end to surface films that match your taste, with no noise.",
    overview: [
      "Designed and shipped the full product solo: taste onboarding, recommendations, and discovery UX.",
      "Built semantic search and a 'taste DNA' match score using ML, LLMs, and a vector database.",
      "Generates a personalized 'why this film' rationale for every recommendation.",
    ],
    stats: [
      { value: "0-to-1", label: "concept to launch" },
      { value: "Vector DB", label: "semantic search" },
      { value: "LLM", label: "taste matching" },
    ],
    tags: ["0-to-1", "Gen AI", "Vector DB"],
  },
];

const experience = [
  {
    period: "2023 - 2026",
    role: "Senior Product Manager",
    company: "Walmart",
    note:
      "Lead PM for enterprise forecasting. 98% ML accuracy, $3M+ savings, nine divisions migrated onto F1.",
  },
  {
    period: "2015 - 2023",
    role: "Manager, Walmart Product",
    company: "Cognizant Technology Solutions",
    note:
      "$80M+ portfolio over four years. Global real-estate rollouts & legacy migrations. Bronze & Gold award recipient.",
  },
  {
    period: "2007 - 2015",
    role: "Techno-Functional Lead & Engineer",
    company: "Ford - Sun Life - Mahindra Satyam",
    note:
      "Built and supported enterprise systems, translating ambiguous requirements into scalable workflows.",
  },
];

function App() {
  return (
    <div className="app-shell">
      <Header />
      <main>
        <Hero />
        <About />
        <Skills />
        <Work />
        <Experience />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

function Header() {
  return (
    <div className="header-shell">
      <div className="wrap">
        <header className="glass site-header">
          <a className="brand" href="#top">
            {profile.name}
          </a>
          <nav aria-label="Primary navigation">
            <a href="#about">About</a>
            <a href="#skills">Skills</a>
            <span aria-hidden="true">ooo</span>
            <a href="#work">Work</a>
            <a href="#contact">Contact</a>
          </nav>
          <div className="mobile-nav">
            <a href="#about">About</a>
            <a href="#skills">Skills</a>
            <a href="#work">Work</a>
            <a href="#contact">Contact</a>
          </div>
        </header>
      </div>
    </div>
  );
}

function Hero() {
  return (
    <section id="top" className="hero-section">
      <div className="wrap">
        <div className="glass hero-card animate-fade-up">
          <div className="hero-copy">
            <span className="glass-soft pill">Product Portfolio - {profile.year}</span>
            <p className="script-title">Hi there, I&apos;m</p>
            <h1>{profile.name}</h1>
            <p className="role-line">{profile.role}</p>
            <p className="hero-lede">{profile.tagline}</p>
            <div className="hero-actions">
              <a className="button primary" href="#work">
                See my work
              </a>
              <a className="button glass" href={profile.resume} target="_blank" rel="noopener noreferrer">
                Resume
              </a>
              <a className="button glass" href={profile.github} target="_blank" rel="noopener noreferrer">
                GitHub
              </a>
            </div>
            <p className="location-line">{profile.location}</p>
          </div>

          <div className="portrait-wrap" aria-label={`${profile.name} portrait and leadership summary`}>
            <div className="portrait-glow" />
            <div className="glass portrait-card animate-floaty">
              <img src={assetUrl("ankita.png")} alt={`${profile.name} - ${profile.role}`} />
              <div className="portrait-overlay">
                <span>Enterprise product leader</span>
                <strong>AI, ML and platform products</strong>
              </div>
            </div>
          </div>
        </div>

        <dl className="glass stats-grid animate-fade-up">
          {heroStats.map((stat) => (
            <div key={stat.label}>
              <dt>{stat.value}</dt>
              <dd>{stat.label}</dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}

function About() {
  return (
    <section id="about" className="content-section">
      <div className="wrap about-grid">
        <div>
          <SectionTitle title="About Me" script="the short version" />
          <div className="copy-stack">
            {about.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>

          <h3 className="connect-title">Let&apos;s connect!</h3>
          <div className="contact-links">
            <a href={`mailto:${profile.email}`}>
              <Icon name="mail" />
              {profile.email}
            </a>
            <a href={`tel:${profile.phone.replace(/[^0-9]/g, "")}`}>
              <Icon name="phone" />
              {profile.phone}
            </a>
          </div>

          <div className="social-row">
            <Social href={profile.linkedin} name="linkedin" />
            <Social href={profile.github} name="github" />
            <Social href={`mailto:${profile.email}`} name="mail" />
          </div>
        </div>

        <aside className="glass glance-card">
          <p className="eyebrow">At a glance</p>
          <dl>
            {glance.map((item) => (
              <div key={item.k}>
                <dt>{item.k}</dt>
                <dd>{item.v}</dd>
              </div>
            ))}
          </dl>
        </aside>
      </div>
    </section>
  );
}

function Skills() {
  return (
    <section id="skills" className="content-section">
      <div className="wrap skills-grid">
        <div>
          <SectionTitle title="Skills & Credentials" script="what I bring" />
          <ul className="cert-list">
            {certifications.map((cert) => (
              <li className="glass cert-card" key={`${cert.title}-${cert.year}`}>
                <span className="logo-box">
                  <img src={cert.logo} alt={cert.by} />
                </span>
                <div>
                  <p>{cert.title}</p>
                  <span>
                    {cert.by} - {cert.year}
                  </span>
                </div>
              </li>
            ))}
          </ul>
        </div>

        <div className="capability-grid">
          {capabilities.map((item) => (
            <div className="glass capability-tile" key={item}>
              <span>{item}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Work() {
  return (
    <section id="work" className="content-section">
      <div className="wrap">
        <div className="section-row">
          <SectionTitle title="Selected Work" script="case studies" />
        </div>

        <div className="work-stack">
          {work.map((item, index) => (
            <article key={item.title} className="work-item">
              <div className="work-meta">
                <p>
                  {String(index + 1).padStart(2, "0")} / {item.company}
                </p>
                <div className="tag-row">
                  {item.tags.map((tag) => (
                    <span className="glass tag" key={tag}>
                      {tag}
                    </span>
                  ))}
                  {item.url ? (
                    <a href={item.url} target="_blank" rel="noopener noreferrer" className="visit-link">
                      Visit
                    </a>
                  ) : null}
                </div>
              </div>

              <h3>{item.title}</h3>

              <div className="work-layout">
                {item.image ? (
                  <div className="image-cover">
                    <img src={item.image} alt={`${item.title} preview`} />
                    <a href={item.url} target="_blank" rel="noopener noreferrer">
                      flixkeep.com
                    </a>
                  </div>
                ) : (
                  <div className={`glass-tint ${item.tint} metric-cover`}>
                    <p>{item.company}</p>
                    <div>
                      <strong>{item.cover.value}</strong>
                      <span>{item.cover.label}</span>
                    </div>
                  </div>
                )}

                <div className="glass overview-card">
                  <p>{item.summary}</p>
                  <span className="eyebrow">Project overview</span>
                  <ul>
                    {item.overview.map((point) => (
                      <li key={point}>
                        <span />
                        {point}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <dl className="glass work-stats">
                {item.stats.map((stat) => (
                  <div key={stat.label}>
                    <dt>{stat.value}</dt>
                    <dd>{stat.label}</dd>
                  </div>
                ))}
              </dl>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function Experience() {
  return (
    <section className="content-section">
      <div className="wrap">
        <div className="section-row">
          <SectionTitle title="Experience" script="the journey" />
        </div>

        <div className="glass experience-list">
          {experience.map((job) => (
            <div className="experience-row" key={job.period}>
              <p>{job.period}</p>
              <div>
                <h3>{job.role}</h3>
                <strong>{job.company}</strong>
                <span>{job.note}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Contact() {
  return (
    <section id="contact" className="contact-section">
      <div className="wrap">
        <div className="glass-dark contact-card">
          <p className="script-title">let&apos;s work together</p>
          <h2>Get In Touch</h2>
          <a className="contact-email" href={`mailto:${profile.email}`}>
            {profile.email}
          </a>
          <div className="social-row inverted">
            <Social href={profile.linkedin} name="linkedin" invert />
            <Social href={profile.github} name="github" invert />
            <Social href={`mailto:${profile.email}`} name="mail" invert />
          </div>
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="site-footer">
      <div className="wrap">
        <span>Copyright {profile.year} {profile.name}</span>
        <span>Built with React and Vite</span>
      </div>
    </footer>
  );
}

function SectionTitle({ title, script }) {
  return (
    <div className="section-title">
      <h2>{title}</h2>
      <p>{script}</p>
    </div>
  );
}

function Social({ href, name, invert = false }) {
  return (
    <a
      href={href}
      target={href.startsWith("http") ? "_blank" : undefined}
      rel="noopener noreferrer"
      aria-label={name}
      className={`social-link${invert ? " invert" : ""}`}
    >
      <Icon name={name} />
    </a>
  );
}

function Icon({ name }) {
  const common = {
    width: 18,
    height: 18,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: 1.8,
    strokeLinecap: "round",
    strokeLinejoin: "round",
  };

  switch (name) {
    case "mail":
      return (
        <svg {...common} aria-hidden="true">
          <rect x="2" y="4" width="20" height="16" rx="2" />
          <path d="m2 7 10 6 10-6" />
        </svg>
      );
    case "phone":
      return (
        <svg {...common} aria-hidden="true">
          <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.8 19.8 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.8 19.8 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.13.96.36 1.9.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.9.34 1.85.57 2.81.7A2 2 0 0 1 22 16.92Z" />
        </svg>
      );
    case "linkedin":
      return (
        <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
          <path d="M4.98 3.5a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5ZM0 8h5v16H0V8Zm7.5 0h4.8v2.2h.07c.67-1.2 2.3-2.46 4.73-2.46 5.3 0 6.9 2.36 6.9 6.56V24h-5v-8.6c0-2.05-.04-4.7-2.86-4.7-2.86 0-3.3 2.23-3.3 4.55V24h-5V8Z" />
        </svg>
      );
    case "github":
      return (
        <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
          <path d="M12 .5C5.37.5 0 5.87 0 12.5c0 5.3 3.44 9.8 8.21 11.39.6.11.82-.26.82-.58v-2.2c-3.34.73-4.04-1.6-4.04-1.6-.55-1.4-1.34-1.78-1.34-1.78-1.1-.75.08-.73.08-.73 1.2.09 1.84 1.24 1.84 1.24 1.07 1.84 2.8 1.3 3.49.99.11-.78.42-1.3.76-1.6-2.67-.3-5.47-1.33-5.47-5.93 0-1.31.47-2.38 1.24-3.22-.13-.3-.54-1.52.12-3.17 0 0 1.01-.32 3.3 1.23a11.5 11.5 0 0 1 6 0c2.29-1.55 3.3-1.23 3.3-1.23.66 1.65.25 2.87.12 3.17.77.84 1.23 1.91 1.23 3.22 0 4.61-2.8 5.62-5.48 5.92.43.37.81 1.1.81 2.22v3.29c0 .32.22.7.83.58A12 12 0 0 0 24 12.5C24 5.87 18.63.5 12 .5Z" />
        </svg>
      );
    case "database":
      return (
        <svg {...common} aria-hidden="true">
          <ellipse cx="12" cy="5" rx="8" ry="3" />
          <path d="M4 5v6c0 1.7 3.6 3 8 3s8-1.3 8-3V5" />
          <path d="M4 11v6c0 1.7 3.6 3 8 3s8-1.3 8-3v-6" />
        </svg>
      );
    case "brain":
      return (
        <svg {...common} aria-hidden="true">
          <path d="M9 3a3 3 0 0 0-3 3v1a4 4 0 0 0-2 7.5V17a4 4 0 0 0 5 3.9" />
          <path d="M15 3a3 3 0 0 1 3 3v1a4 4 0 0 1 2 7.5V17a4 4 0 0 1-5 3.9" />
          <path d="M9 3v18" />
          <path d="M15 3v18" />
        </svg>
      );
    case "workflow":
      return (
        <svg {...common} aria-hidden="true">
          <rect x="3" y="4" width="6" height="6" rx="1" />
          <rect x="15" y="14" width="6" height="6" rx="1" />
          <path d="M9 7h4a5 5 0 0 1 5 5v2" />
          <path d="M15 17h-4a5 5 0 0 1-5-5v-2" />
        </svg>
      );
    case "refresh":
      return (
        <svg {...common} aria-hidden="true">
          <path d="M21 12a9 9 0 0 1-15.5 6.2" />
          <path d="M3 12A9 9 0 0 1 18.5 5.8" />
          <path d="M18 2v4h4" />
          <path d="M6 22v-4H2" />
        </svg>
      );
    default:
      return (
        <svg {...common} aria-hidden="true">
          <path d="m12 3 1.8 5.5H20l-5 3.6 1.9 5.9-4.9-3.7L7.1 18 9 12.1 4 8.5h6.2L12 3Z" />
        </svg>
      );
  }
}

export default App;
