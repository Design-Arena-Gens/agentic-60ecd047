import { ArrowRight, Bot, LineChart, Megaphone } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

const services = [
  {
    icon: Megaphone,
    title: "Performance Marketing",
    description:
      "Omnichannel ad strategies engineered to scale revenue across Meta, Google, LinkedIn, and programmatic platforms.",
    points: [
      "Hyper-targeted audience frameworks",
      "Creative experimentation sprints",
      "Full-funnel analytics dashboards",
    ],
  },
  {
    icon: LineChart,
    title: "Organic Growth & SEO",
    description:
      "Technical SEO, content engines, and authority building that compound organic traffic and capture demand.",
    points: [
      "Deep technical health audits",
      "AI-assisted content operations",
      "Backlink intelligence network",
    ],
  },
  {
    icon: Bot,
    title: "AI Revenue Automations",
    description:
      "Custom AI workflows that nurture leads, qualify prospects, and accelerate handoffs without losing the human touch.",
    points: [
      "Conversational AI funnel copilots",
      "CRM enrichment & routing automations",
      "Predictive upsell and churn models",
    ],
  },
];

const caseStudies = [
  {
    label: "B2B SaaS",
    stat: "312%",
    result: "pipeline growth",
    detail: "Full-funnel ABM with AI-qualified leads and sales assist bots.",
  },
  {
    label: "Ecommerce",
    stat: "5.2x",
    result: "ROAS",
    detail: "Creative lab + SEO content vault doubled returning revenue.",
  },
  {
    label: "Fintech",
    stat: "74%",
    result: "cost reduction",
    detail: "Automated onboarding and support deflected 68% of tickets.",
  },
];

const integrations = [
  "HubSpot",
  "Salesforce",
  "Marketo",
  "Webflow",
  "Shopify",
  "Slack",
  "Zapier",
  "Make",
];

const faqs = [
  {
    question: "How fast can we launch a new acquisition program?",
    answer:
      "We ship your foundational growth system in 21 days: messaging, creative sprints, tracking architecture, and automation playbooks ready to scale.",
  },
  {
    question: "Do you replace or support in-house teams?",
    answer:
      "ClickAutomate plugs into your squad as an elite growth pod—arming your marketers, revenue ops, and founders with plug-and-play growth infrastructure.",
  },
  {
    question: "How do AI automations stay on brand?",
    answer:
      "Every automation is trained on your brand voice, approved scripts, and escalation rules. Human-in-the-loop reviews keep interactions aligned and compliant.",
  },
];

export default function Home() {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-100">
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(56,189,248,0.18),_transparent_55%)]" />
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_bottom,_rgba(59,130,246,0.25),_transparent_60%)]" />
        <div className="absolute -left-1/2 top-1/4 h-[38rem] w-[38rem] rounded-full bg-cyan-500/20 blur-[180px]" />
        <div className="absolute -right-1/3 bottom-10 h-[32rem] w-[32rem] rounded-full bg-blue-600/25 blur-[180px]" />
      </div>

      <header className="relative mx-auto flex w-full max-w-6xl items-center justify-between px-6 py-8 md:px-10">
        <div className="flex items-center gap-3">
          <Image
            src="/logo-icon.svg"
            alt="ClickAutomate symbol"
            width={40}
            height={40}
            className="drop-shadow-[0_0_20px_rgba(56,189,248,0.7)]"
            priority
          />
          <div>
            <p className="text-sm uppercase tracking-[0.6em] text-slate-200/75">
              ClickAutomate
            </p>
            <p className="text-sm text-slate-300/80">
              Digital Growth & AI Automation Studio
            </p>
          </div>
        </div>
        <nav className="hidden items-center gap-8 text-sm font-medium text-slate-200/80 md:flex">
          <Link href="#services" className="transition hover:text-white">
            Services
          </Link>
          <Link href="#ai-automations" className="transition hover:text-white">
            AI Automations
          </Link>
          <Link href="#case-studies" className="transition hover:text-white">
            Wins
          </Link>
          <Link href="#faq" className="transition hover:text-white">
            FAQ
          </Link>
        </nav>
        <Link
          href="#contact"
          className="hidden rounded-full bg-gradient-to-r from-sky-400 via-blue-500 to-indigo-500 px-6 py-2 text-sm font-semibold text-slate-950 shadow-lg shadow-sky-500/30 transition hover:shadow-sky-400/40 md:inline-block"
        >
          Build My Growth Engine
        </Link>
      </header>

      <main className="relative mx-auto flex w-full max-w-6xl flex-col gap-28 px-6 pb-24 md:px-10">
        <section className="grid gap-16 pt-8 md:grid-cols-[1.25fr_1fr] md:items-center">
          <div className="space-y-8">
            <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-xs font-semibold uppercase tracking-[0.35em] text-slate-200 backdrop-blur">
              <span className="h-2 w-2 rounded-full bg-sky-400 shadow-[0_0_15px_rgba(56,189,248,0.8)]" />
              Trusted Growth Systems for Modern Brands
            </div>
            <h1 className="text-4xl font-semibold leading-[1.08] text-white md:text-6xl">
              Activate a{" "}
              <span className="bg-gradient-to-r from-sky-300 via-cyan-200 to-blue-200 bg-clip-text text-transparent">
                marketing engine
              </span>{" "}
              that clicks, converts, and scales on autopilot.
            </h1>
            <p className="max-w-2xl text-lg text-slate-200/80 md:text-xl">
              ClickAutomate designs end-to-end acquisition programs, search
              dominance strategies, and AI automations that accelerate pipeline
              without increasing headcount. Own the customer journey with
              data-led creativity and intelligent revenue workflows.
            </p>
            <div className="flex flex-wrap items-center gap-4">
              <Link
                href="#contact"
                className="group flex items-center gap-2 rounded-full bg-white px-6 py-3 text-sm font-semibold text-slate-950 transition hover:-translate-y-0.5 hover:bg-slate-100"
              >
                Start a Growth Sprint
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Link>
              <Link
                href="#services"
                className="flex items-center gap-2 text-sm font-semibold text-slate-200/80 transition hover:text-white"
              >
                Explore Services
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
            <div className="grid gap-5 pt-6 text-sm text-slate-300 sm:grid-cols-3">
              <div>
                <p className="text-3xl font-semibold text-white">120M+</p>
                <p className="text-slate-400/80">
                  Attributed revenue generated across growth partners.
                </p>
              </div>
              <div>
                <p className="text-3xl font-semibold text-white">3.8x</p>
                <p className="text-slate-400/80">
                  Average improvement in marketing efficiency ratio.
                </p>
              </div>
              <div>
                <p className="text-3xl font-semibold text-white">21 Days</p>
                <p className="text-slate-400/80">
                  From intake to live campaigns & automation workflows.
                </p>
              </div>
            </div>
          </div>
          <div className="relative isolate overflow-hidden rounded-3xl border border-slate-200/10 bg-white/5 p-6 shadow-[0_40px_120px_-45px_rgba(56,189,248,0.7)] backdrop-blur">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(56,189,248,0.2),_transparent_65%)]" />
            <div className="relative space-y-6">
              <div className="flex items-center justify-between">
                <p className="text-sm font-semibold uppercase tracking-[0.35em] text-slate-200/70">
                  Signal Monitor
                </p>
                <span className="rounded-full bg-sky-400/20 px-3 py-1 text-xs font-semibold text-sky-100">
                  Live Insights
                </span>
              </div>
              <div className="grid gap-4 sm:grid-cols-2">
                {caseStudies.map((item) => (
                  <div
                    key={item.label}
                    className="rounded-2xl border border-white/10 bg-white/5 p-5"
                  >
                    <p className="text-xs uppercase tracking-[0.35em] text-slate-200/50">
                      {item.label}
                    </p>
                    <p className="mt-3 text-4xl font-semibold text-white">
                      {item.stat}
                    </p>
                    <p className="text-sm font-semibold uppercase tracking-[0.4em] text-slate-200/70">
                      {item.result}
                    </p>
                    <p className="mt-3 text-sm text-slate-300/80">
                      {item.detail}
                    </p>
                  </div>
                ))}
              </div>
              <div className="rounded-2xl border border-sky-200/20 bg-sky-400/10 p-5">
                <p className="text-xs uppercase tracking-[0.35em] text-sky-100/80">
                  Automation Uptime
                </p>
                <p className="mt-3 inline-flex items-baseline gap-2 text-4xl font-semibold text-white">
                  99.7%
                  <span className="text-sm font-medium text-sky-100/80">
                    SLA-backed workflows
                  </span>
                </p>
                <p className="mt-2 text-sm text-sky-50/70">
                  Every automation is monitored by our RevOps copilots who step
                  in before hiccups impact your pipeline.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section
          id="services"
          className="space-y-12 rounded-3xl border border-white/5 bg-white/[0.03] px-8 py-12 shadow-[0_40px_160px_-80px_rgba(14,165,233,0.65)] backdrop-blur sm:px-12"
        >
          <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.4em] text-slate-200/70">
                Services
              </p>
              <h2 className="mt-3 text-3xl font-semibold text-white md:text-4xl">
                Precision growth pods engineered for your outcomes
              </h2>
            </div>
            <Link
              href="#contact"
              className="inline-flex items-center gap-2 text-sm font-semibold text-slate-200/80 transition hover:text-white"
            >
              Book a discovery session
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
          <div className="grid gap-6 lg:grid-cols-3">
            {services.map((service) => (
              <div
                key={service.title}
                className="group relative overflow-hidden rounded-3xl border border-white/10 bg-white/5 p-8 transition hover:-translate-y-1 hover:border-sky-400/40 hover:bg-slate-900/40"
              >
                <div className="absolute -left-16 top-12 h-40 w-40 rounded-full bg-sky-400/10 blur-[90px] transition group-hover:bg-sky-400/25" />
                <service.icon className="h-10 w-10 text-sky-200" />
                <h3 className="mt-5 text-2xl font-semibold text-white">
                  {service.title}
                </h3>
                <p className="mt-3 text-sm text-slate-200/80">
                  {service.description}
                </p>
                <ul className="mt-6 space-y-3 text-sm text-slate-200/70">
                  {service.points.map((point) => (
                    <li key={point} className="flex items-start gap-2">
                      <span className="mt-[6px] h-2 w-2 rounded-full bg-sky-400 shadow-[0_0_12px_rgba(56,189,248,0.8)]" />
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        <section
          id="ai-automations"
          className="grid gap-10 rounded-3xl border border-white/5 bg-gradient-to-br from-slate-900/80 via-slate-900/40 to-slate-950 px-8 py-12 sm:px-12 md:grid-cols-[1.2fr_1fr] md:items-center"
        >
          <div className="space-y-6">
            <p className="text-xs font-semibold uppercase tracking-[0.4em] text-slate-200/70">
              AI Automations
            </p>
            <h2 className="text-3xl font-semibold text-white md:text-4xl">
              Human-centered AI workflows that unlock scale without losing empathy
            </h2>
            <p className="text-base text-slate-200/75 md:text-lg">
              We design multi-agent systems that orchestrate outreach, nurture,
              sales assist, and lifecycle touchpoints. Every workflow is
              reinforced by human QA, data feedback loops, and compliance rules
              aligned with your industry.
            </p>
            <div className="grid gap-5 md:grid-cols-2">
              {[
                "Lead capture copilots that pre-qualify and book sales instantly.",
                "Pipeline prioritization models tuned to your revenue signals.",
                "Content engines that ship keyword-led assets overnight.",
                "AI concierge that resolves support in under 90 seconds.",
              ].map((item) => (
                <div
                  key={item}
                  className="rounded-2xl border border-white/10 bg-slate-900/70 p-5"
                >
                  <p className="text-sm text-slate-200/80">{item}</p>
                </div>
              ))}
            </div>
          </div>
          <div className="relative overflow-hidden rounded-3xl border border-sky-200/20 bg-slate-900/80 p-8">
            <div className="absolute -right-12 top-10 h-32 w-32 rounded-full bg-sky-500/30 blur-[120px]" />
            <p className="text-xs font-semibold uppercase tracking-[0.35em] text-sky-100/80">
              Automation Stack
            </p>
            <p className="mt-4 text-4xl font-semibold text-white">
              Plug into your favorite tools
            </p>
            <p className="mt-3 text-sm text-slate-200/75">
              Deep integrations mean we orchestrate flawless data sync, so your
              team always has the right signal at the right moment.
            </p>
            <div className="mt-8 grid grid-cols-2 gap-3 text-sm font-semibold text-slate-100/90 sm:grid-cols-3">
              {integrations.map((integration) => (
                <div
                  key={integration}
                  className="rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-center"
                >
                  {integration}
                </div>
              ))}
            </div>
          </div>
        </section>

        <section
          id="case-studies"
          className="grid gap-12 rounded-3xl border border-white/5 bg-white/[0.02] px-8 py-12 sm:px-12 md:grid-cols-[1fr_1.1fr] md:items-center"
        >
          <div className="space-y-6">
            <p className="text-xs font-semibold uppercase tracking-[0.4em] text-slate-200/70">
              Outcomes
            </p>
            <h2 className="text-3xl font-semibold text-white md:text-4xl">
              Playbooks battle-tested with high-growth teams
            </h2>
            <p className="text-base text-slate-200/80 md:text-lg">
              We blend structured experimentation, forecasting, and real-time
              signal monitoring. Every engagement ships with transparent data
              rooms, C-suite ready reporting, and revenue accountability.
            </p>
            <div className="space-y-5 text-sm text-slate-200/75">
              <p>
                “ClickAutomate rebuilt our funnel with AI-driven nurture and ad
                operations that unlocked a new efficiency ceiling. We scaled ARR
                4x without adding headcount.” —{" "}
                <span className="text-white">COO, Series B SaaS</span>
              </p>
              <p>
                “They brought clarity to our buyer journey, restructured search
                authority, and automated sales readiness. We now ship weekly
                experiments with confidence.” —{" "}
                <span className="text-white">Head of Growth, Global DTC</span>
              </p>
            </div>
          </div>
          <div className="grid gap-6 sm:grid-cols-2">
            {[
              {
                title: "Demand Gen Sprints",
                description:
                  "Media mix modeling, creative science lab, and channel pods spinning weekly insights into scale.",
                stat: "18%",
                sub: "higher conversion velocity",
              },
              {
                title: "SEO Velocity Program",
                description:
                  "Topic clustering, authority PR, and AI content QA producing evergreen demand capture.",
                stat: "228%",
                sub: "organic traffic lift",
              },
              {
                title: "Lifecycle Automation",
                description:
                  "Personalized journeys triggered by product signals and revenue intent scoring.",
                stat: "46%",
                sub: "increase in expansion revenue",
              },
              {
                title: "RevOps Intelligence",
                description:
                  "Unified dashboards, predictive scoring, and automated routing with real-time alerts.",
                stat: "92%",
                sub: "data accuracy across GTM stack",
              },
            ].map((item) => (
              <div
                key={item.title}
                className="flex flex-col justify-between rounded-3xl border border-white/10 bg-white/5 p-6"
              >
                <div>
                  <p className="text-sm uppercase tracking-[0.35em] text-slate-200/60">
                    {item.title}
                  </p>
                  <p className="mt-3 text-sm text-slate-200/75">
                    {item.description}
                  </p>
                </div>
                <div className="mt-6">
                  <p className="text-4xl font-semibold text-white">
                    {item.stat}
                  </p>
                  <p className="text-xs uppercase tracking-[0.35em] text-slate-200/70">
                    {item.sub}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section
          id="faq"
          className="grid gap-12 rounded-3xl border border-white/5 bg-white/[0.02] px-8 py-12 sm:px-12 md:grid-cols-[1fr_1.1fr]"
        >
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.4em] text-slate-200/70">
              FAQ
            </p>
            <h2 className="mt-3 text-3xl font-semibold text-white md:text-4xl">
              Answers before we build together
            </h2>
            <p className="mt-4 text-sm text-slate-200/75">
              We move fast, stay transparent, and align to revenue. If you are
              still curious, the discovery session is the best next step.
            </p>
          </div>
          <div className="space-y-4">
            {faqs.map((faq) => (
              <div
                key={faq.question}
                className="rounded-3xl border border-white/10 bg-white/5 p-6"
              >
                <p className="text-sm font-semibold text-white">
                  {faq.question}
                </p>
                <p className="mt-3 text-sm text-slate-200/80">{faq.answer}</p>
              </div>
            ))}
          </div>
        </section>

        <section
          id="contact"
          className="relative overflow-hidden rounded-3xl border border-sky-200/30 bg-gradient-to-r from-sky-400 via-blue-500 to-indigo-600 px-8 py-14 text-slate-950 sm:px-12"
        >
          <div className="absolute -right-16 top-16 h-48 w-48 rounded-full bg-white/30 blur-[120px]" />
          <div className="relative flex flex-col gap-8 md:flex-row md:items-center md:justify-between">
            <div className="max-w-2xl space-y-4">
              <p className="text-xs font-semibold uppercase tracking-[0.4em] text-slate-900/80">
                Ready to scale
              </p>
              <h2 className="text-3xl font-semibold text-white md:text-4xl">
                Let’s deploy your next growth leap
              </h2>
              <p className="text-sm text-slate-100/90">
                Share your challenge and we will respond in under 24 hours with
                a bespoke roadmap, KPI model, and implementation plan.
              </p>
            </div>
            <Link
              href="mailto:hello@clickautomate.ai"
              className="inline-flex items-center gap-2 rounded-full bg-white px-6 py-3 text-sm font-semibold text-slate-950 transition hover:-translate-y-0.5 hover:bg-slate-100"
            >
              hello@clickautomate.ai
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
          <div className="relative mt-10 grid gap-6 text-sm text-slate-100/90 sm:grid-cols-3">
            {[
              {
                title: "Fractional Growth Team",
                description:
                  "Strategy, media, creative, operations, and automation under one agile pod.",
              },
              {
                title: "Embedded Partnerships",
                description:
                  "Slack-integrated updates, shared dashboards, and weekly co-creation labs.",
              },
              {
                title: "Outcome Guarantee",
                description:
                  "If we do not hit aligned north-star metrics, we work for free until we do.",
              },
            ].map((item) => (
              <div
                key={item.title}
                className="rounded-3xl border border-white/30 bg-white/10 p-5"
              >
                <p className="text-xs uppercase tracking-[0.35em] text-slate-900/70">
                  {item.title}
                </p>
                <p className="mt-2 text-sm text-white/90">{item.description}</p>
              </div>
            ))}
          </div>
        </section>
      </main>

      <footer className="relative border-t border-white/10 bg-slate-950/80 py-10">
        <div className="mx-auto flex w-full max-w-6xl flex-col gap-4 px-6 text-xs text-slate-400 md:flex-row md:items-center md:justify-between md:px-10">
          <p>© {new Date().getFullYear()} ClickAutomate. All rights reserved.</p>
          <div className="flex flex-wrap gap-4">
            <Link
              href="mailto:hello@clickautomate.ai"
              className="transition hover:text-white"
            >
              hello@clickautomate.ai
            </Link>
            <span className="text-slate-500">|</span>
            <Link href="#services" className="transition hover:text-white">
              Services
            </Link>
            <Link href="#ai-automations" className="transition hover:text-white">
              Automations
            </Link>
            <Link href="#case-studies" className="transition hover:text-white">
              Case Studies
            </Link>
          </div>
        </div>
      </footer>
    </div>
  );
}
