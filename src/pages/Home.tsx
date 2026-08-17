import Reveal from "../components/ui/Reveal";
import Button from "../components/ui/Button";
import Shot from "../components/ui/Shot";
import Section from "../components/ui/Section";
import { StatBlock } from "../components/ui/StatBlock";
import TiltShot from "../components/ui/TiltShot";
import { TagPill } from "../components/ui/Card";
import {
  heroStats,
  tsrArticles,
  mentorship,
  website,
  socialProfiles,
  facebookGrowth,
  socialProof,
  wagLife,
  capabilities,
  EMAIL,
  LINKEDIN_URL,
  LINKS,
} from "../data/content";

const TILTS = [-3, 2.5, -2, 3, -2.5, 2];

export default function Home() {
  return (
    <>
      {/* HERO: split screen */}
      <section id="top" className="bg-hero-field pt-28 pb-20 sm:pt-32 sm:pb-28">
        <div className="mx-auto w-full max-w-7xl px-6">
          <div className="grid gap-10 lg:grid-cols-2 lg:items-center lg:gap-16">
            <Reveal className="mx-auto w-full max-w-sm lg:mx-0">
              <Shot label="Sauvik Banerjee portrait photo" src="images/sauvik-portrait.jpg" aspect="aspect-[4/5]" />
            </Reveal>
            <Reveal delay={100}>
              <span className="mb-5 block text-xs font-semibold uppercase tracking-[0.2em] text-accent">
                Content, Growth, Marketing
              </span>
              <h1 className="font-display text-3xl font-semibold leading-[1.12] tracking-tight text-ink sm:text-4xl md:text-5xl">
                Building audiences, growing digital products, and turning content into measurable outcomes.
              </h1>
              <div className="mt-8 flex flex-wrap items-center gap-4">
                <Button href="#experience" variant="primary">
                  See the work ↓
                </Button>
                <Button href="resume.pdf" variant="secondary">
                  Résumé ↗
                </Button>
              </div>
            </Reveal>
          </div>

          <Reveal delay={150} className="mt-16 sm:mt-20 lg:mt-[248px]">
            <div className="rounded-2xl bg-accent px-6 py-10 sm:px-10 sm:py-12">
              <div className="grid grid-cols-2 gap-x-6 gap-y-10 sm:grid-cols-4">
                {heroStats.map((stat, i) => (
                  <StatBlock stat={stat} key={stat.label} delay={i * 50} />
                ))}
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* PROFESSIONAL EXPERIENCE */}
      <Section id="experience" containerClassName="max-w-6xl">
        <Reveal className="mb-14">
          <h2 className="font-display text-2xl font-semibold tracking-tight text-ink sm:text-3xl">Professional Experience</h2>
        </Reveal>

        <Reveal delay={60} className="mb-6">
          <span className="text-xs font-semibold uppercase tracking-[0.2em] text-accent">Articles/Titles by me</span>
        </Reveal>
        <div className="grid grid-cols-2 gap-x-10 gap-y-14 px-1 py-4 sm:gap-x-14">
          {tsrArticles.map((item, i) => (
            <Reveal delay={i * 50} key={item.label}>
              <TiltShot
                label={item.label}
                src={item.src}
                rotate={TILTS[i % TILTS.length]}
                overlay={
                  <div className="flex items-center justify-between">
                    <span className="text-[11px] font-semibold uppercase tracking-[0.14em] text-paper/70">Pageviews</span>
                    <span className="font-display text-lg font-semibold tracking-tight text-paper">
                      {item.pageviews.toLocaleString()}
                    </span>
                  </div>
                }
              />
            </Reveal>
          ))}
        </div>
        <Reveal delay={100} className="mt-8 flex flex-wrap items-center gap-4">
          <Button href={LINKS.sportsRush} variant="secondary">
            The SportsRush author page ↗
          </Button>
          <Button href={LINKS.essentiallySports} variant="secondary">
            EssentiallySports author page ↗
          </Button>
        </Reveal>

        <Reveal delay={60} className="mb-6 mt-16">
          <span className="text-xs font-semibold uppercase tracking-[0.2em] text-accent">Mentorship</span>
        </Reveal>
        <div className="grid gap-10 lg:grid-cols-[1fr_1.2fr] lg:items-start">
          <Reveal>
            <Shot
              label={mentorship.pageShotLabel}
              src={mentorship.pageSrc}
              aspect="aspect-[1000/942]"
              fit="contain"
              contentBg="bg-paper-dim"
            />
            <Button href={mentorship.pdfUrl} variant="secondary" className="mt-5">
              Read the mentorship log ↗
            </Button>
          </Reveal>
          <Reveal delay={80}>
            <div className="grid grid-cols-3 gap-4 border-t border-line pt-5">
              {mentorship.stats.map((stat) => (
                <div key={stat.label}>
                  <div className="font-display text-xl font-semibold tracking-tight text-ink">{stat.value}</div>
                  <div className="text-xs text-mute">{stat.label}</div>
                </div>
              ))}
            </div>

            <div className="mt-8 grid grid-cols-2 gap-8">
              <div>
                <div className="text-xs font-semibold uppercase tracking-[0.14em] text-mute-dark">Before</div>
                <ul className="mt-3 space-y-2">
                  {mentorship.before.map((line) => (
                    <li key={line} className="flex gap-2 text-sm text-mute">
                      <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-mute-dark" />
                      <span>{line}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <div className="text-xs font-semibold uppercase tracking-[0.14em] text-accent">After</div>
                <ul className="mt-3 space-y-2">
                  {mentorship.after.map((line) => (
                    <li key={line} className="flex gap-2 text-sm text-mute">
                      <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-accent" />
                      <span>{line}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </Reveal>
        </div>
      </Section>

      {/* PERSONAL PROJECTS */}
      <Section id="projects" containerClassName="max-w-6xl" className="bg-paper-dim">
        <Reveal className="mb-10">
          <h2 className="font-display text-2xl font-semibold tracking-tight text-ink sm:text-3xl">Personal Projects</h2>
          <p className="mt-3 text-mute">Built everything solo from 0 to 1.</p>
        </Reveal>

        <Reveal delay={60} className="mb-6">
          <span className="text-xs font-semibold uppercase tracking-[0.2em] text-accent">AI SAAS Tool</span>
          <p className="mt-3 max-w-xl text-mute">
            SooperScript is an AI video production tool that uses a scene by scene workflow to maintain creative
            control without having to switch tabs. Built it independently from concept to MVP.
          </p>
        </Reveal>

        <div className="grid grid-cols-1 px-1 py-4">
          <Reveal>
            <TiltShot
              label="SooperScript homepage screenshot"
              src="images/sooperscript-homepage.jpg"
              rotate={TILTS[0]}
              frame="browser"
              aspect="aspect-[16/8]"
              overlay={
                <div className="text-sm leading-snug text-paper">
                  Solved a real problem with a unique solution in the AI content space.
                </div>
              }
            />
          </Reveal>
        </div>

        <Reveal delay={100} className="mt-8">
          <Button href={LINKS.sooperScript} variant="primary">
            Visit SooperScript ↗
          </Button>
        </Reveal>

        <Reveal delay={60} className="mb-6 mt-16">
          <span className="text-xs font-semibold uppercase tracking-[0.2em] text-accent">Website</span>
          <p className="mt-3 max-w-xl text-mute">
            Created and scaled a blog in a very competitive niche and monetized it despite strong market forces
            against it.
          </p>
        </Reveal>
        <div className="grid grid-cols-1 gap-x-8 gap-y-12 px-1 py-4 sm:grid-cols-[1fr_2fr]">
          {website.graphs.map((graph, i) => (
            <Reveal delay={i * 50} key={graph.label}>
              <TiltShot
                label={graph.label}
                src={graph.src}
                rotate={TILTS[i % TILTS.length]}
                frame="plain"
                aspect={graph.aspect}
                fit="contain"
                contentBg={graph.contentBg}
                overlay={
                  <div className="flex items-center justify-between gap-3">
                    <span className="text-xs leading-snug text-paper/70">{graph.detail}</span>
                    <span className="shrink-0 font-display text-sm font-semibold tracking-tight text-paper">{graph.stat}</span>
                  </div>
                }
              />
            </Reveal>
          ))}
        </div>
        <Reveal delay={100} className="mt-8">
          <Button href={LINKS.proFootballAction} variant="secondary">
            Visit {website.url} ↗
          </Button>
        </Reveal>

        <Reveal delay={60} className="mb-6 mt-16">
          <span className="text-xs font-semibold uppercase tracking-[0.2em] text-accent">Social media</span>
          <p className="mt-3 max-w-xl text-mute">
            Built a network of media properties from scratch across all social media platforms.
          </p>
        </Reveal>
        <div className="grid grid-cols-1 gap-x-8 gap-y-12 px-1 py-4 sm:grid-cols-3">
          {socialProfiles.map((profile, i) => (
            <Reveal delay={i * 50} key={profile.platform}>
              <TiltShot
                label={`${profile.platform} profile screenshot for ${profile.handle}`}
                src={profile.src}
                rotate={TILTS[i % TILTS.length]}
                frame="plain"
                aspect="aspect-[9/16]"
                fit="cover"
                overlay={
                  <div>
                    <div className="font-display text-sm font-semibold tracking-tight text-paper">{profile.platform}</div>
                    <div className="mt-0.5 text-xs leading-snug text-paper/70">
                      {profile.handle} · {profile.followers}
                    </div>
                  </div>
                }
              />
              <Button href={profile.url} variant="secondary" className="mt-5">
                {profile.platform} ↗
              </Button>
            </Reveal>
          ))}
        </div>

        <Reveal delay={100} className="mt-10">
          <TiltShot
            label={facebookGrowth.label}
            src={facebookGrowth.src}
            rotate={-1.5}
            frame="plain"
            aspect="aspect-[1994/914]"
            fit="contain"
            contentBg="bg-paper"
            overlay={
              <div>
                <div className="flex items-center justify-between">
                  <span className="text-[11px] font-semibold uppercase tracking-[0.14em] text-paper/70">Facebook views</span>
                  <span className="font-display text-lg font-semibold tracking-tight text-paper">{facebookGrowth.views}</span>
                </div>
                <div className="mt-0.5 text-xs leading-snug text-paper/70">{facebookGrowth.detail}</div>
              </div>
            }
          />
        </Reveal>

        <Reveal delay={60} className="mb-6 mt-16">
          <span className="text-xs font-semibold uppercase tracking-[0.2em] text-accent">Verified engagement</span>
          <p className="mt-3 max-w-xl text-mute">
            Some of the biggest personalities who shared my content include Shaquille O'Neal, Deion Sanders,
            Antonio Brown and Chad Johnson.
          </p>
        </Reveal>
        <div className="grid grid-cols-2 gap-x-8 gap-y-12 px-1 py-4 sm:grid-cols-4">
          {socialProof.map((item, i) => (
            <Reveal delay={i * 50} key={item.name}>
              <TiltShot
                label={item.shotLabel}
                src={item.src}
                rotate={TILTS[i % TILTS.length]}
                frame="plain"
                aspect="aspect-[3/4]"
                fit={item.src ? "contain" : "cover"}
                contentBg="bg-ink/95"
                overlay={
                  <div>
                    <div className="font-display text-sm font-semibold tracking-tight text-paper">{item.name}</div>
                    <div className="mt-0.5 text-xs leading-snug text-paper/70">{item.detail}</div>
                  </div>
                }
              />
            </Reveal>
          ))}
        </div>

        <Reveal delay={60} className="mb-6 mt-16">
          <span className="text-xs font-semibold uppercase tracking-[0.2em] text-accent">Newsletter</span>
          <p className="mt-3 max-w-xl text-mute">
            Started WAG Life after identifying a strong community driven audience in Wives and Girlfriends (WAGs)
            of NFL players. Its growth proved my thesis right.
          </p>
        </Reveal>
        <div className="grid grid-cols-1 gap-x-8 gap-y-10 sm:grid-cols-[1fr_1.4fr]">
          <Reveal delay={100} className="max-w-[260px]">
            <TiltShot
              label={wagLife.shots[0].label}
              src={wagLife.shots[0].src}
              rotate={TILTS[0]}
              frame="plain"
              aspect={wagLife.shots[0].aspect}
              fit="cover"
              overlay={
                <div>
                  <div className="font-display text-sm font-semibold tracking-tight text-paper">
                    {wagLife.shots[0].overlayTitle}
                  </div>
                  <div className="mt-0.5 text-xs leading-snug text-paper/70">{wagLife.shots[0].overlayDetail}</div>
                </div>
              }
            />
            <Button href={LINKS.wagLife} variant="secondary" className="mt-8">
              WAG Life ↗
            </Button>
          </Reveal>
          <div className="flex flex-col gap-8">
            {wagLife.shots.slice(1).map((shot, i) => (
              <Reveal delay={150 + i * 50} key={shot.label}>
                <TiltShot
                  label={shot.label}
                  src={shot.src}
                  rotate={TILTS[(i + 1) % TILTS.length]}
                  frame="plain"
                  aspect={shot.aspect}
                  fit="contain"
                  contentBg="bg-paper"
                  overlay={
                    <div className="flex items-center justify-between gap-3">
                      <span className="text-xs leading-snug text-paper/70">{shot.overlayTitle}</span>
                      <span className="shrink-0 font-display text-sm font-semibold tracking-tight text-paper">
                        {shot.overlayDetail}
                      </span>
                    </div>
                  }
                />
              </Reveal>
            ))}
          </div>
        </div>
      </Section>

      {/* ABOUT */}
      <Section id="about" containerClassName="max-w-4xl">
        <Reveal>
          <span className="mb-5 block text-xs font-semibold uppercase tracking-[0.2em] text-accent">About</span>
          <p className="max-w-3xl font-display text-xl font-medium leading-snug tracking-tight text-ink sm:text-2xl">
            Five years of strategising content and individually scaling personal projects have taught me that it's
            never just about reaching an audience, it's how you or a brand influences their lives that really makes
            the difference. The future belongs to those with virtual personality. Let's build that together.
          </p>
        </Reveal>

        <Reveal delay={80} className="mt-10 flex flex-wrap gap-2">
          {capabilities.map((item) => (
            <TagPill key={item}>{item}</TagPill>
          ))}
        </Reveal>
      </Section>

      {/* CONTACT */}
      <Section id="contact" className="bg-ink text-paper" dark>
        <Reveal className="mx-auto max-w-2xl text-center">
          <h2 className="font-display text-3xl font-semibold tracking-tight text-paper sm:text-5xl">Let's talk.</h2>
          <p className="mt-4 text-paper/65">Open to content, growth and marketing roles.</p>
          <div className="mt-9 flex flex-wrap items-center justify-center gap-4">
            <Button href={`mailto:${EMAIL}`} variant="primary" className="hover:bg-paper hover:text-ink">
              Email me
            </Button>
            <Button
              href={LINKEDIN_URL}
              variant="secondary"
              className="border-paper/25 text-paper hover:border-accent hover:bg-transparent hover:text-paper"
            >
              LinkedIn
            </Button>
          </div>
        </Reveal>
      </Section>
    </>
  );
}
