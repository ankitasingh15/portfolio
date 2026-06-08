import { useEffect, useMemo, useState } from "react";

const resumeUrl = `${import.meta.env.BASE_URL}assets/Ankita-Singh-Resume.pdf`;
const email = "ankita15leo@gmail.com";
const linkedin = "https://www.linkedin.com/in/ankita15singh/";

const sections = [
  { id: "profile", tab: "Leadership Profile", nav: "Profile" },
  { id: "impact", tab: "Impact Stories", nav: "Impact" },
  { id: "case-studies", tab: "Selected Case Studies", nav: "Case Studies" },
  { id: "beyond", tab: "Beyond Product", nav: "Beyond Product" },
];

const focusItems = [
  ["Location", "Bentonville, Arkansas"],
  ["Focus", "Enterprise platforms, AI/ML, customer experience"],
  ["Strengths", "Strategy, discovery, roadmaps, global execution"],
  ["Next role", "Lead Product Manager"],
];

const capabilities = [
  "Product strategy",
  "Customer discovery",
  "Roadmap ownership",
  "Stakeholder alignment",
  "Execution leadership",
  "Outcome measurement",
  "GenAI and ML prototyping",
];

const stories = [
  {
    kicker: "$80M+ portfolio impact",
    title: "Scaled enterprise product savings across four years",
    body:
      "At Cognizant supporting Walmart product initiatives, Ankita steered parallel execution of three high-stakes enterprise products, generating $13M in first-year operational savings and scaling to $80M+ in four-year portfolio impact.",
  },
  {
    kicker: "$2M+ annualized savings",
    title: "Led legacy platform decommissioning without business disruption",
    body:
      "At Walmart, she mapped technical and data dependencies across nine applications, aligned business, engineering, and data teams, and retired a legacy Merch Planner platform while protecting continuity.",
  },
  {
    kicker: "98% forecasting accuracy",
    title: "Applied GenAI, LLMs, and ML to improve planning outcomes",
    body:
      "Ankita leveraged AI and machine learning approaches to accelerate product discovery, improve operational efficiency, and support enterprise planning initiatives with stronger forecasting performance.",
  },
];

const caseStudies = [
  {
    number: "01",
    title: "Legacy Merch Planner decommissioning",
    fields: [
      ["Problem", "Legacy platform dependencies created cost, reliability, and continuity risk."],
      ["Product bet", "Safely retire the platform by mapping application, data, and business dependencies."],
      ["Execution", "Add deeper discovery, stakeholder, migration, and rollout narrative later."],
      ["Impact", "$2M+ annualized cost savings, with business continuity protected."],
    ],
  },
  {
    number: "02",
    title: "AI-enabled movie discovery platform",
    fields: [
      ["Problem", "Customers need faster, more curated decisions when choosing what to watch."],
      ["Product bet", "Lead a 0-to-1 discovery product using ML, AI, and vector database workflows."],
      ["Execution", "Add customer journey, prioritization, launch, and learning details later."],
      ["Impact", "Resume-verified launch; deeper adoption metrics can be added when available."],
    ],
    link: "https://flixkeep.com",
  },
];

const beyondItems = [
  {
    title: "Professional development",
    body:
      "AI Product Management Certification from AI Product Academy, Maven; Software Processes and Agile Practices from University of Alberta; SAFe POPM and Practitioner.",
  },
  {
    title: "Areas of interest",
    body:
      "Generative AI, LLM frameworks, agent orchestration, machine learning, data pipelines, customer journeys, rapid prototyping, and enterprise platform modernization.",
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
    const observedSections = sectionIds
      .map((id) => document.getElementById(id))
      .filter(Boolean);

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];

        if (visible) {
          setActiveSection(visible.target.id);
        }
      },
      {
        rootMargin: "-36% 0px -46% 0px",
        threshold: [0.12, 0.24, 0.4],
      }
    );

    observedSections.forEach((section) => observer.observe(section));

    return () => observer.disconnect();
  }, [sectionIds]);

  return (
    <>
      <Header />
      <main id="top">
        <Hero />
        <SectionTabs activeSection={activeSection} setActiveSection={setActiveSection} />
        <LeadershipProfile />
        <ImpactStories />
        <CaseStudySection />
        <BeyondProduct />
      </main>
      <Footer />
    </>
  );
}

function Header() {
  return (
    <header className="site-header">
      <a className="brand" href="#top" aria-label="Ankita Singh home">
        <span className="brand-mark">AS</span>
        <span>
          <strong>Ankita Singh</strong>
          <small>Lead Product Manager</small>
        </span>
      </a>
      <nav className="desktop-nav" aria-label="Primary navigation">
        {sections.map((section) => (
          <a key={section.id} href={`#${section.id}`}>
            {section.nav}
          </a>
        ))}
      </nav>
      <a className="header-cta" href={resumeUrl} download>
        Download Resume
      </a>
    </header>
  );
}

function Hero() {
  return (
    <section className="hero section-shell" aria-labelledby="hero-title">
      <div className="hero-copy">
        <p className="eyebrow">B2B/SaaS product leadership portfolio</p>
        <h1 id="hero-title">Product leader for complex platforms, measurable outcomes, and durable execution.</h1>
        <p className="hero-lede">
          Ankita Singh is a product and program executive with 15+ years leading enterprise-scale
          transformations, AI-enabled platforms, and global product delivery across Fortune 500 ecosystems.
        </p>
        <div className="hero-actions" aria-label="Primary actions">
          <a className="button primary" href={`mailto:${email}`}>
            Discuss Lead PM Roles
          </a>
          <a className="button secondary" href={resumeUrl} download>
            Download Resume
          </a>
          <a className="button ghost" href={linkedin}>
            LinkedIn
          </a>
        </div>
      </div>
      <aside className="hero-panel" aria-label="Portfolio focus">
        {focusItems.map(([label, value]) => (
          <div key={label}>
            <span className="panel-label">{label}</span>
            <strong>{value}</strong>
          </div>
        ))}
      </aside>
    </section>
  );
}

function SectionTabs({ activeSection, setActiveSection }) {
  return (
    <nav className="tab-nav" aria-label="Portfolio sections">
      {sections.map((section) => (
        <a
          key={section.id}
          className={`tab-link ${activeSection === section.id ? "active" : ""}`}
          href={`#${section.id}`}
          aria-current={activeSection === section.id ? "page" : undefined}
          onClick={() => setActiveSection(section.id)}
        >
          {section.tab}
        </a>
      ))}
    </nav>
  );
}

function LeadershipProfile() {
  return (
    <section className="content-section section-shell" id="profile" data-section="profile">
      <SectionHeading
        eyebrow="Leadership Profile"
        title="Calm product leadership for ambiguous, high-stakes work."
      />
      <div className="profile-grid">
        <article className="statement">
          <p>
            Ankita brings a rare blend of technical depth, financial judgment, and integrative leadership to enterprise
            product work. Her experience spans product discovery, KPI definition, roadmap prioritization, legacy
            modernization, data architecture, and scalable AI/ML-enabled solutions.
          </p>
          <p>
            Most recently at Walmart, she led digital product and customer experience work across enterprise planning
            initiatives, partnering with engineering, finance, data, and business teams to improve adoption,
            reliability, and operating performance.
          </p>
        </article>
        <div className="capability-list" aria-label="Core product leadership capabilities">
          {capabilities.map((capability) => (
            <span key={capability}>{capability}</span>
          ))}
        </div>
      </div>
    </section>
  );
}

function ImpactStories() {
  return (
    <section className="content-section section-shell" id="impact" data-section="impact">
      <SectionHeading
        eyebrow="Impact Stories"
        title="Metric-led moments that show product judgment, ownership, and follow-through."
      />
      <div className="story-grid">
        {stories.map((story) => (
          <article className="story-card" key={story.title}>
            <span className="story-kicker">{story.kicker}</span>
            <h3>{story.title}</h3>
            <p>{story.body}</p>
          </article>
        ))}
      </div>
    </section>
  );
}

function CaseStudySection() {
  return (
    <section className="content-section section-shell" id="case-studies" data-section="case-studies">
      <SectionHeading eyebrow="Selected Case Studies" title="Two polished placeholders for deeper product narratives." />
      <div className="case-grid">
        {caseStudies.map((study) => (
          <article className="case-card" key={study.title}>
            <div className="case-number">{study.number}</div>
            <h3>{study.title}</h3>
            <dl>
              {study.fields.map(([term, description]) => (
                <div key={term}>
                  <dt>{term}</dt>
                  <dd>{description}</dd>
                </div>
              ))}
            </dl>
            {study.link ? (
              <a className="text-link" href={study.link}>
                View project
              </a>
            ) : null}
          </article>
        ))}
      </div>
    </section>
  );
}

function BeyondProduct() {
  return (
    <section className="content-section section-shell" id="beyond" data-section="beyond">
      <SectionHeading eyebrow="Beyond Product" title="Interests, volunteering, and leadership signals outside the roadmap." />
      <div className="beyond-layout">
        {beyondItems.map((item) => (
          <article key={item.title}>
            <h3>{item.title}</h3>
            <p>{item.body}</p>
          </article>
        ))}
      </div>
    </section>
  );
}

function SectionHeading({ eyebrow, title }) {
  return (
    <div className="section-heading">
      <p className="eyebrow">{eyebrow}</p>
      <h2>{title}</h2>
    </div>
  );
}

function Footer() {
  return (
    <footer className="site-footer">
      <span>Ankita Singh</span>
      <div>
        <a href={`mailto:${email}`}>Email</a>
        <a href={linkedin}>LinkedIn</a>
        <a href={resumeUrl} download>
          Download Resume
        </a>
      </div>
    </footer>
  );
}

export default App;
