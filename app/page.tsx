import Topbar from "@/components/Topbar";
import TypedText from "@/components/TypedText";
import ExperienceCounter from "@/components/ExperienceCounter";
import ScrollReveal from "@/components/ScrollReveal";
import ProjectsSection, { type Project } from "@/components/ProjectsSection";

const PROJECTS: Project[] = [
  {
    pid: "PRJ — 001",
    title: "Boomerang CRM - AI-Powered Call Analysis System",
    scope: "Team Collaboration · Backend + LLM",
    bullets: [
      <>
        Production backend processing <b>large-scale call data</b> into
        AI-driven QA insights via LLM APIs
      </>,
      <>
        Designed optimized <b>prompt pipelines</b> for summarization, QA
        scoring &amp; behavioral analysis
      </>,
      <>
        Leveraged complex <b>MongoDB aggregation pipelines</b> for deep
        filtering &amp; real-time analytics
      </>,
      <>
        Piped AI analysis directly into <b>monitoring dashboards</b> for
        stakeholder action
      </>,
    ],
    chips: [
      "React",
      "TypeScript",
      "Node.js",
      "MongoDB",
      "Python",
      "RabbitMQ",
      "LLM APIs",
    ],
    url: "https://boomerang.boomdemand.com/",
    screenshots: [
      "/project-assets/boomerang/boomerang_img1.bb3eafce.png",
      "/project-assets/boomerang/boomerang_img2.97dd1808.png",
      "/project-assets/boomerang/boomerang_img3.f28015ba.png",
      "/project-assets/boomerang/boomerang_img4.8235f436.png",
      "/project-assets/boomerang/boomerang_img5.6564f325.png",
    ],
  },
  {
    pid: "PRJ — 002",
    title: "SMS & Email Automation System",
    scope: "Team Collaboration · Messaging Infra",
    bullets: [
      <>
        Built scalable messaging infrastructure on <b>tier-one APIs</b>{" "}
        (Twilio, Mailgun)
      </>,
      <>
        Implemented <b>concurrent processing</b> for low-latency, high-volume
        delivery
      </>,
      <>
        Designed reusable, <b>modular backend services</b> for customizable
        workflows
      </>,
    ],
    chips: ["React", "Node.js", "SQS", "Twilio", "Mailgun"],
  },
];

export default function Home() {
  return (
    <>
      <div className="glow" />
      <Topbar />

      {/* Hero */}
      <header className="hero">
        <div className="wrap">
          <ScrollReveal>
            <div className="eyebrow">
              <span className="rule" /> SOFTWARE ENGINEER · BICOL, PH
            </div>
          </ScrollReveal>

          <ScrollReveal delay={60}>
            <h1>
              Micko
              <br />
              Mata<span className="ital">morosa</span>
            </h1>
          </ScrollReveal>

          <ScrollReveal delay={120}>
            <TypedText />
          </ScrollReveal>

          <div className="hero-grid">
            <ScrollReveal delay={180}>
              <p className="hero-summary">
                <b>Backend-focused Software Engineer</b> with <b>6 years</b> of
                experience shipping production systems—from{" "}
                <b>scalable REST APIs</b> and high-throughput messaging
                infrastructure to cloud-native AWS integrations and{" "}
                <b>AI/LLM-powered analysis pipelines</b>. I turn complex backend
                problems into reliable, observable products.
              </p>
            </ScrollReveal>

            <ScrollReveal delay={240}>
              <div className="specs">
                <div className="row">
                  <span className="k">Role</span>
                  <span className="v acc">Software Engineer</span>
                </div>
                <div className="row">
                  <span className="k">Experience</span>
                  <span className="v">
                    <ExperienceCounter />
                  </span>
                </div>
                <div className="row">
                  <span className="k">Focus</span>
                  <span className="v">Backend · AI · Cloud</span>
                </div>
                <div className="row">
                  <span className="k">Status</span>
                  <span className="v" style={{ color: "var(--online)" }}>
                    ● Open to work
                  </span>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </header>

      {/* About */}
      <section id="about">
        <div className="wrap">
          <ScrollReveal>
            <div className="sec-head">
              <span className="sec-num">00 /</span>
              <h2 className="sec-title">Profile</h2>
              <span className="sec-line" />
            </div>
          </ScrollReveal>
          <ScrollReveal delay={60}>
            <div
              className="hero-summary"
              style={{
                maxWidth: "64ch",
                fontSize: "18px",
                color: "var(--ink)",
              }}
            >
              I&apos;m an engineer who likes the parts of software that have to{" "}
              <b>actually hold up</b> under load — concurrent SMS systems and
              real-time analytics dashboards. Lately I work at the intersection
              of <b>backend architecture and applied AI</b>, designing prompt
              pipelines and evaluation structures that turn raw call data into
              useful, automated insight.
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Stack */}
      <section id="stack">
        <div className="wrap">
          <ScrollReveal>
            <div className="sec-head">
              <span className="sec-num">01 /</span>
              <h2 className="sec-title">Tech Stack</h2>
              <span className="sec-line" />
            </div>
          </ScrollReveal>

          <ScrollReveal delay={60}>
            <div className="stack">
              {[
                {
                  label: "Languages",
                  tags: ["JavaScript", "TypeScript", "Python"],
                },
                {
                  label: "Frontend",
                  tags: ["ReactJS", "Tailwind CSS"],
                },
                {
                  label: "Backend",
                  tags: ["Node.js", "Express.js", "FastAPI", "REST APIs"],
                },
                {
                  label: "Databases",
                  tags: ["PostgreSQL", "MongoDB", "MySQL", "DynamoDB"],
                },
                {
                  label: "DevOps & Cloud",
                  tags: ["AWS", "Docker", "GitLab CI/CD", "GitHub Actions"],
                },
                { label: "Tools", tags: ["Git", "VSCode"] },
              ].map(({ label, tags }) => (
                <div className="cell" key={label}>
                  <div className="label">{label}</div>
                  <div className="tags">
                    {tags.map((t) => (
                      <span className="tag" key={t}>
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </ScrollReveal>

          <ScrollReveal delay={120}>
            <div className="ai-banner">
              <div className="label">AI &amp; Prompt Engineering</div>
              <ul className="ai-list">
                <li>
                  Contributed to <b>complex prompt design</b>, evaluation
                  structures, and optimization for LLM APIs
                </li>
                <li>
                  Used AI-assisted dev tools (
                  <b>Claude Code, GitHub Copilot, Antigravity</b>) to accelerate
                  feature delivery
                </li>
                <li>
                  Applied AI for automated{" "}
                  <b>code generation, debugging, and workflow automation</b>
                </li>
                <li>
                  Integrated intelligent AI services into{" "}
                  <b>scalable backend architectures</b>
                </li>
              </ul>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Experience */}
      <section id="experience">
        <div className="wrap">
          <ScrollReveal>
            <div className="sec-head">
              <span className="sec-num">02 /</span>
              <h2 className="sec-title">Experience</h2>
              <span className="sec-line" />
            </div>
          </ScrollReveal>

          <div className="exp">
            <ScrollReveal delay={60}>
              <article className="job">
                <div className="job-meta">
                  <div className="period">SEP 2020 — DEC 2025</div>
                  <div className="org">Boom AI Solutions OPC</div>
                </div>
                <div className="job-body">
                  <h3 className="job-title">Software Engineer</h3>
                  <ul>
                    <li>
                      Built custom <b>CRM applications</b> with ReactJS
                      frontends and Node.js/Express.js backends
                    </li>
                    <li>
                      Designed scalable, secure <b>RESTful APIs</b> for
                      mission-critical internal &amp; client-facing systems
                    </li>
                    <li>
                      Integrated <b>AI/LLM capabilities</b> and analytics
                      pipelines into backend services with cross-functional
                      teams
                    </li>
                    <li>
                      Engineered high-throughput{" "}
                      <b>SMS communication systems</b> for concurrent customer
                      engagement
                    </li>
                    <li>
                      Wrote Python &amp; Node.js <b>automation scripts</b> for
                      distributed workflows and large-scale data processing
                    </li>
                    <li>
                      Architected an enterprise <b>Call Center platform</b> on
                      Amazon Connect + AWS serverless (Lambda, DynamoDB, S3)
                    </li>
                  </ul>
                </div>
              </article>
            </ScrollReveal>

            <ScrollReveal delay={120}>
              <article className="job">
                <div className="job-meta">
                  <div className="period">MAY 2019 — FEB 2020</div>
                  <div className="org">Boomsourcing</div>
                </div>
                <div className="job-body">
                  <h3 className="job-title">Junior Developer</h3>
                  <ul>
                    <li>
                      Completed intensive <b>BoomCamp Training</b> in full-stack
                      engineering with JavaScript &amp; Python
                    </li>
                    <li>
                      Hands-on with <b>full-stack feature development</b>,
                      external API integration, and modern design patterns
                    </li>
                  </ul>
                </div>
              </article>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Projects */}
      <section id="projects">
        <div className="wrap">
          <ScrollReveal>
            <div className="sec-head">
              <span className="sec-num">03 /</span>
              <h2 className="sec-title">Selected Work</h2>
              <span className="sec-line" />
            </div>
          </ScrollReveal>

          <ScrollReveal delay={60}>
            <ProjectsSection projects={PROJECTS} />
          </ScrollReveal>
        </div>
      </section>

      {/* Credentials */}
      <section id="certs">
        <div className="wrap">
          <ScrollReveal>
            <div className="sec-head">
              <span className="sec-num">04 /</span>
              <h2 className="sec-title">Credentials</h2>
              <span className="sec-line" />
            </div>
          </ScrollReveal>

          <div className="certs">
            {[
              {
                seal: "AWS",
                ct: "Certified Cloud Practitioner",
                cs: "Amazon Web Services",
              },
              {
                seal: "AWS",
                ct: "Certified Developer — Associate",
                cs: "Amazon Web Services",
              },
              {
                seal: "BC",
                ct: "BoomCamp Certificate",
                cs: "Full-Stack Engineering",
              },
              {
                seal: "BS",
                ct: "BS Information Technology",
                cs: "Forbes College, Legazpi",
              },
            ].map(({ seal, ct, cs }, i) => (
              <ScrollReveal key={i} delay={i * 60}>
                <div className="cert">
                  <div className="seal">{seal}</div>
                  <div>
                    <div className="ct">{ct}</div>
                    <div className="cs">{cs}</div>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Contact */}
      <section className="contact" id="contact">
        <div className="wrap">
          <ScrollReveal>
            <h2>
              Let&apos;s build something
              <br />
              that <span className="ital">scales.</span>
            </h2>
          </ScrollReveal>

          <ScrollReveal delay={60}>
            <p>
              Open to backend, full-stack, and applied-AI roles. The fastest way
              to reach me is below.
            </p>
          </ScrollReveal>

          <ScrollReveal delay={120}>
            <div
              style={{ display: "flex", flexDirection: "column", gap: "1px" }}
            >
              <div className="links">
                <a href="mailto:mickomatamorosa@gmail.com">
                  <span className="lk">Email</span>
                  <span className="lv">mickomatamorosa@gmail.com</span>
                </a>
                <a href="tel:09272026288">
                  <span className="lk">Phone / WhatsApp</span>
                  <span className="lv">0927 202 6288</span>
                </a>
                <a
                  href="https://maps.google.com/?q=Daraga,Albay"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <span className="lk">Based in</span>
                  <span className="lv">Daraga, Albay, PH</span>
                </a>
              </div>
              <div className="links">
                <a
                  href="https://github.com/inno-mix"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <span className="lk">GitHub</span>
                  <span className="lv">/inno-mix</span>
                </a>
                <a
                  href="https://www.linkedin.com/in/myxzaeyez/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <span className="lk">LinkedIn</span>
                  <span className="lv">/myxzaeyez</span>
                </a>
                <a
                  href="/resume.pdf"
                  download="Matamorosa_Micko_Resume.pdf"
                >
                  <span className="lk">Resume</span>
                  <span className="lv">↓ Download PDF</span>
                </a>
              </div>
            </div>
          </ScrollReveal>

          <footer>
            <span>
              <span className="pulse" />
              SYSTEM ONLINE — last deploy 2026
            </span>
            <span>© Micko M. Matamorosa</span>
          </footer>
        </div>
      </section>
    </>
  );
}
