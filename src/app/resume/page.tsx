import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Boyan Lin — Résumé",
  description: "Experience, projects, and skills.",
};

const experience = [
  {
    impact:
      "Led xAI's voice backend for Grok and X — shipping Companion, article audible, and agent calls while building the content understanding pipeline at 1000x QPS for platform-wide ranking.",
    dates: "2025 — 2026",
    company: "xAI · Member of Technical Staff",
  },
  {
    impact:
      "Co-authored the agentic workflow framework powering Fireworks' f1 compound AI agent — shaped by enterprise design partners and open-sourced. Built the eval platform and shipped Eval Protocol SDK.",
    dates: "2024 — 2025",
    company: "Fireworks.ai · Software Engineer",
  },
  {
    impact:
      "Built an e-commerce risk and compliance platform from scratch — scraping pipelines processing 1M+ storefronts and an agentic insights product for payment processors.",
    dates: "2023 — 2024",
    company: "ArryByte (Stealth) · CTO / Cofounder",
  },
  {
    impact:
      "Led teams supporting $70B USDC across 17+ blockchains. Invented B2NU (patented), consolidating five teams and four stacks into a unified API surface.",
    dates: "2022 — 2024",
    company: "Circle · Senior Engineering Manager",
  },
  {
    impact:
      "Led commerce teams across Meta apps and the Notifications Platform — an internal API layer serving all Meta apps. Drove cross-org initiatives spanning 100+ people.",
    dates: "2018 — 2022",
    company: "Meta · Engineering Manager",
  },
  {
    impact:
      "Invented the async job scheduler that became Meta's company-wide standard — 500B+ jobs/day. Shipped Memories and Year in Review to hundreds of millions of users.",
    dates: "2014 — 2018",
    company: "Facebook · Software Engineer",
  },
  {
    impact:
      "Led a cross-functional team of 10 building Transformers games (Hasbro) across US, China, and Japan on in-house engine with multi-region infrastructure.",
    dates: "2010 — 2014",
    company: "DeNA · Tech Lead Manager",
  },
];

const projects = [
  {
    name: "AI Coding Agent Harness",
    desc: "Orchestrator for concurrent AI coding sessions with gRPC API and LLM decision engine.",
    year: "2026",
  },
  {
    name: "Obsidian iOS Reader",
    desc: "Native iOS app with calendar view, wiki-link graph, and frontmatter parsing.",
    year: "2026",
  },
];

const education = [
  {
    when: "2024",
    name: "Stanford GSB",
    deg: "LEAD Executive Certificate",
  },
  {
    when: "2018",
    name: "Stanford University",
    deg: "Neural Networks & Deep Learning, ML Certificates",
  },
  {
    when: "2010",
    name: "Beijing Univ. of Posts & Telecom",
    deg: "B.S., Computer Science",
  },
];

export default function ResumePage() {
  return (
    <main className="resume-wrap">
      <Link href="/" className="back-link">
        ← back
      </Link>

      <h1>
        Boyan Lin <em>— résumé.</em>
      </h1>
      <div className="resume-sub">Last updated · Apr 2026</div>

      <h2>Story</h2>
      <div className="story">
        <p>
          Sixteen years of shipping software, from mobile games in Tokyo to
          voice AI in Palo Alto. I've been an IC, a founder, and a manager —
          sometimes all three in the same year. The thread that ties it together
          is an obsession with the surfaces between systems: APIs, protocols,
          developer tools, and the negotiations that make them work.
        </p>
        <p>
          I care most about building things that other builders depend on — job
          schedulers processing 500B+ tasks a day, API surfaces unifying five
          teams, agentic frameworks that become foundations others ship on. I'm
          drawn to scrappy environments where you wear multiple hats and the work
          is as much about judgment as it is about code.
        </p>
      </div>

      <h2>Experience</h2>
      {experience.map((role, i) => (
        <div className="role" key={i}>
          <p className="role-impact">{role.impact}</p>
          <div className="role-meta">
            <span>{role.dates}</span>
            <span className="sep">·</span>
            <span className="co">{role.company}</span>
          </div>
        </div>
      ))}

      <h2>Selected projects</h2>
      {projects.map((p, i) => (
        <div className="project-row" key={i}>
          <span>
            {p.name}
            <div className="project-desc">{p.desc}</div>
          </span>
          <span className="project-yr">{p.year}</span>
        </div>
      ))}

      <h2>Education</h2>
      {education.map((e, i) => (
        <div className="edu-row" key={i}>
          <div className="edu-when">{e.when}</div>
          <div>
            <div className="edu-name">{e.name}</div>
            <div className="edu-deg">{e.deg}</div>
          </div>
        </div>
      ))}

      <h2>Skills</h2>
      <dl className="skills-grid">
        <dt>Languages</dt>
        <dd>Python, TypeScript/JS, Rust, Hack/HHVM, Swift</dd>
        <dt>AI / ML</dt>
        <dd>
          LLM inference, voice models, real-time streaming, agentic
          orchestration, eval systems
        </dd>
        <dt>Infra</dt>
        <dd>GCP, AWS, k8s, Terraform, Redis, Postgres</dd>
        <dt>Domains</dt>
        <dd>Voice AI, Developer Tools, API Platforms, Commerce, Gaming</dd>
      </dl>

      <footer className="resume-footer">
        <span>© 2026 · boyanlin.com</span>
        <a href="mailto:blin.boyan@gmail.com">blin.boyan@gmail.com</a>
      </footer>
    </main>
  );
}
