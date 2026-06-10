import { useEffect, useMemo, useState } from "react";

const resumeUrl = `${import.meta.env.BASE_URL}assets/Ankita-Singh-Resume.pdf`;
const email = "ankita15leo@gmail.com";
const linkedin = "https://www.linkedin.com/in/ankita15singh/";
const github = "https://github.com/ankitasingh15";

const sections = [
  { id: "profile", label: "About" },
  { id: "impact", label: "Impact" },
  { id: "case-studies", label: "Work" },
  { id: "beyond", label: "Beyond" },
];

const heroStats = [
  { value: "15+", label: "Years across product, program, and engineering" },
  { value: "$80M+", label: "Four-year enterprise portfolio impact" },
  { value: "98%", label: "Forecasting accuracy across planning initiatives" },
];

const glance = [
  ["Based in", "Bentonville, Arkansas"],
  ["Focus", "AI, ML and enterprise platforms"],
  ["Next role", "Lead Product Manager"],
  ["Languages", "English and Hindi"],
  ["Credentials", "AI PM, SAFe POPM, Agile Practices"],
];

const capabilities = [
  "Product strategy",
  "Customer discovery",
  "Roadmap ownership",
  "Stakeholder alignment",
  "Execution leadership",
  "Outcome measurement",
  "GenAI and ML prototyping",
  "Global platform delivery",
  "Legacy modernization",
];

const stories = [
  {
    kicker: "$80M+",
    title: "Enterprise portfolio impact",
    body:
      "Steered parallel execution of three high-stakes enterprise products at Cognizant supporting Walmart, creating $13M in first-year operational savings and $80M+ over four years.",
  },
  {
    kicker: "$2M+",
    title: "Legacy platform decommissioning",
    body:
      "Mapped dependencies across nine applications, aligned business, engineering, and data teams, and retired a legacy Merch Planner platform while protecting continuity.",
  },
  {
    kicker: "98%",
    title: "AI and ML planning outcomes",
    body:
      "Used GenAI, LLMs, and machine learning approaches to accelerate discovery, improve efficiency, and strengthen enterprise forecasting performance.",
  },
];

const caseStudies = [
  {
    number: "01",
    company: "Walmart",
    title: "Connected Forecasting and platform modernization",
    cover: { value: "98%", label: "Forecast accuracy" },
    summary:
      "Led product discovery, KPI definition, roadmap prioritization, and platform enhancements for customer-focused enterprise planning experiences.",
    overview: [
      "Partnered with engineering, finance, data, and business stakeholders to improve reliability and operational performance.",
      "Designed scalable data architecture and workflow enhancements that supported long-term platform flexibility.",
      "Improved user adoption by 20% through workflow optimization and cross-functional change management.",
    ],
    stats: [
      ["98%", "forecast accuracy"],
      ["+20%", "user adoption"],
      ["9", "apps mapped"],
    ],
  },
  {
    number: "02",
    company: "Personal Project",
    title: "AI-enabled movie discovery platform",
    cover: { value: "0-to-1", label: "Concept to launch" },
    summary:
      "Created and launched a curated movie discovery platform using customer journey mapping, AI, ML, and vector database workflows.",
    overview: [
      "Led the product from concept through launch with a focus on taste-based discovery and recommendation quality.",
      "Used semantic matching and AI-assisted workflows to reduce noise in movie selection.",
      "Built a polished foundation for deeper future case-study metrics and product learning notes.",
    ],
    stats: [
      ["0-to-1", "product launch"],
      ["ML", "recommendations"],
      ["Vector DB", "semantic search"],
    ],
    link: "https://flixkeep.com",
  },
];

const beyondItems = [
  {
    title: "Professional development",
    body:
      "AI Product Management Certification from AI Product Academy, Maven; Software Processes and Agile Practices from University of Alberta; SAFe Product Owner/Product Manager and SAFe Practitioner.",
  },
  {
    title: "Areas of interest",
    body:
      "Generative AI, LLM frameworks, agent orchestration, machine learning, data pipelines, rapid prototyping, customer journeys, and enterprise platform modernization.",
  },
  {
    title: "Global leadership",
    body:
      "Experienced in onshore/offshore workforce management, cross-cultural collaboration, mentoring PMs and engineers, and deploying products across international markets.",
  },
];

function App() {
  const sectionIds = useMemo(() => sections.map((section) => section.id), []);
  const [activeSection, setActiveSection] = useState(sectionIds[0]);

  useEffect(() => {
    const observedSections = sectionIds.map((id) => document.getElementById(id)).filter(Boolean);
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];

        if (visible) {
          setActiveSection(visible.target.id);
        }
      },
      { rootMargin: "-36% 0px -46% 0px", threshold: [0.12, 0.24, 0.4] }
    );

    observedSections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, [sectionIds]);

  return (
    <>
      <Header activeSection={activeSection} setActiveSection={setActiveSection} />
      <main id="top">
        <Hero />
        <Profile />
        <Impact />
        <CaseStudies />
        <Beyond />
      </main>
      <Footer />
    </>
  );
}

function Header({ activeSection, setActiveSection }) {
  return (
    <div className="site-header-wrap">
      <header className="site-header glass">
        <a className="mobile-brand" href="#top">
          Ankita Singh
        </a>
        <nav aria-label="Primary navigation">
          {sections.map((section) => (
            <a
              key={section.id}
              className={activeSection === section.id ? "active" : ""}
              href={`#${section.id}`}
              onClick={() => setActiveSection(section.id)}
            >
              {section.label}
            </a>
          ))}
        </nav>
      </header>
    </div>
  );
}

function Hero() {
  return (
    <section className="hero" aria-labelledby="hero-title">
      <div className="wrap">
        <div className="hero-card glass">
          <div className="hero-copy">
            <span className="pill glass-soft">Product Portfolio | 2026</span>
            <p className="script-line">Hi there, I&apos;m</p>
            <h1 id="hero-title">Ankita Singh</h1>
            <p className="role-line">Lead Product Manager</p>
            <p className="hero-lede">
              I turn ambiguous, enterprise-scale product problems into measurable outcomes across AI-enabled platforms,
              forecasting systems, and global product transformations.
            </p>
            <div className="hero-actions" aria-label="Primary actions">
              <a className="button primary" href="#case-studies">
                See my work
              </a>
              <a className="button glass" href={resumeUrl} download>
                Resume
              </a>
              <a className="button glass" href={github}>
                GitHub
              </a>
            </div>
            <p className="location-line">Bentonville, Arkansas</p>
          </div>
          <aside className="portrait-card glass-tint">
            <span className="portrait-kicker">Enterprise product leader</span>
            <strong>AI, ML and platform products</strong>
            <p>Strategy, discovery, roadmaps, stakeholder alignment, and global execution.</p>
          </aside>
        </div>

        <dl className="stats-grid glass">
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

function Profile() {
  return (
    <section className="content-section" id="profile" data-section="profile">
      <div className="wrap two-column">
        <div>
          <SectionHeading eyebrow="About Me" title="The short version" />
          <div className="statement">
            <p>
              Ankita is a strategic, cross-functional product and program executive with 15+ years of experience
              steering enterprise-scale transformations, machine learning solutions, and global platform integrations.
            </p>
            <p>
              She combines technical depth, financial judgment, and an integrative leadership style that connects
              complex data systems with core business performance.
            </p>
          </div>
          <div className="contact-stack">
            <h3>Let&apos;s connect</h3>
            <a href={`mailto:${email}`}>{email}</a>
            <a href={linkedin}>LinkedIn</a>
          </div>
        </div>

        <aside className="glance-card glass">
          <p className="card-kicker">At a glance</p>
          <dl>
            {glance.map(([key, value]) => (
              <div key={key}>
                <dt>{key}</dt>
                <dd>{value}</dd>
              </div>
            ))}
          </dl>
        </aside>
      </div>
    </section>
  );
}

function Impact() {
  return (
    <section className="content-section" id="impact" data-section="impact">
      <div className="wrap">
        <SectionHeading eyebrow="Skills & Credentials" title="What I bring" />
        <div className="skills-impact-grid">
          <div className="capability-grid">
            {capabilities.map((capability) => (
              <div className="glass skill-tile" key={capability}>
                <span>{capability}</span>
              </div>
            ))}
          </div>
          <div className="story-stack">
            {stories.map((story) => (
              <article className="story-card glass" key={story.title}>
                <span>{story.kicker}</span>
                <h3>{story.title}</h3>
                <p>{story.body}</p>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function CaseStudies() {
  return (
    <section className="content-section" id="case-studies" data-section="case-studies">
      <div className="wrap">
        <div className="section-row">
          <SectionHeading eyebrow="Selected Work" title="Case studies" />
          <p className="script-note">case studies</p>
        </div>

        <div className="case-stack">
          {caseStudies.map((study) => (
            <article className="case-study" key={study.title}>
              <div className="case-meta">
                <p>
                  {study.number} / {study.company}
                </p>
                {study.link ? (
                  <a href={study.link} target="_blank" rel="noopener noreferrer">
                    Visit ↗
                  </a>
                ) : null}
              </div>
              <h3>{study.title}</h3>
              <div className="case-layout">
                <div className="case-cover glass-tint">
                  <p>{study.company}</p>
                  <strong>{study.cover.value}</strong>
                  <span>{study.cover.label}</span>
                </div>
                <div className="case-panel glass">
                  <p>{study.summary}</p>
                  <span className="card-kicker">Project overview</span>
                  <ul>
                    {study.overview.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                </div>
              </div>
              <dl className="case-stats glass">
                {study.stats.map(([value, label]) => (
                  <div key={label}>
                    <dt>{value}</dt>
                    <dd>{label}</dd>
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

function Beyond() {
  return (
    <section className="content-section" id="beyond" data-section="beyond">
      <div className="wrap">
        <SectionHeading eyebrow="Beyond Product" title="Credentials, interests, and leadership signals." />
        <div className="beyond-grid">
          {beyondItems.map((item) => (
            <article className="glass" key={item.title}>
              <h3>{item.title}</h3>
              <p>{item.body}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function SectionHeading({ eyebrow, title }) {
  return (
    <div className="section-heading">
      <p>{eyebrow}</p>
      <h2>{title}</h2>
    </div>
  );
}

function Footer() {
  return (
    <footer className="site-footer wrap">
      <span>© 2026 Ankita Singh</span>
      <span>Built with React and Vite</span>
    </footer>
  );
}

export default App;
