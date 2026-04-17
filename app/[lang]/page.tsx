import { Typewriter, CodeSnippet } from '@/components/hero/Typewriter';
import { Timeline } from '@/components/hero/Timeline';
import { SkillCloud } from '@/components/hero/SkillCloud';
import { NavLinks } from '@/components/hero/NavLinks';
import { ParticleBackground } from '@/components/hero/ParticleBackground';
import { getDictionary, Locale } from '@/lib/i18n';
import { getLocalizedConfig } from '@/lib/config-i18n';

export default async function Home({ params }: { params: { lang: Locale } }) {
  const dict = await getDictionary(params.lang);
  const { profile, experiences, skills } = getLocalizedConfig(params.lang);

  const introCode = `const me = {
  role: "${profile.role}",
  passion: "build products from 0 to 1",
  now: "exploring AI × Product",
  location: "China",
  available: true
}`;

  return (
    <main className="min-h-screen bg-background text-foreground relative">
      <ParticleBackground />

      <section className="min-h-screen px-4 py-20 md:px-8 relative z-10">
        <div className="container mx-auto max-w-6xl">
          <div className="grid gap-12 lg:grid-cols-2">
            <div className="flex flex-col justify-center space-y-8">
              <div className="fadeIn">
                <div className="mb-4 font-mono text-terminal-green text-sm">{dict.home.whoami}</div>
                <h1 className="mb-4 text-4xl font-bold md:text-6xl">
                  <span className="gradient-text">{profile.name}</span>
                </h1>
                <Typewriter
                  text={profile.tagline}
                  speed={80}
                  className="text-xl text-gray-400"
                />
              </div>

              <p className="text-gray-400 leading-relaxed fadeIn" style={{ animationDelay: '0.2s' }}>
                {profile.bio}
              </p>

              <div className="fadeIn" style={{ animationDelay: '0.4s' }}>
                <CodeSnippet code={introCode} />
              </div>

              <NavLinks lang={params.lang} />
            </div>

            <div className="flex flex-col justify-center space-y-8 fadeIn" style={{ animationDelay: '0.8s' }}>
              <div className="grid grid-cols-2 gap-4">
                {[
                  { label: dict.home.stats.yearsExperience, value: '5+' },
                  { label: dict.home.stats.projectsBuilt, value: '20+' },
                  { label: dict.home.stats.openSource, value: '10+' },
                  { label: dict.home.stats.articlesPublished, value: '30+' },
                ].map((stat, i) => (
                  <div
                    key={i}
                    className="rounded-lg bg-code-bg p-4 slideIn"
                    style={{ animationDelay: `${0.5 + i * 0.1}s` }}
                  >
                    <div className="text-2xl font-bold text-terminal-green">{stat.value}</div>
                    <div className="text-sm text-gray-400">{stat.label}</div>
                  </div>
                ))}
              </div>

              <div className="flex items-center gap-3 rounded-lg bg-code-bg p-4 fadeIn" style={{ animationDelay: '0.8s' }}>
                <div className="h-2 w-2 rounded-full bg-terminal-green pulse" />
                <div className="font-mono text-sm">
                  <span className="text-terminal-green">{dict.home.status.label}</span>{' '}
                  <span className="text-gray-300">{dict.home.status.value}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="border-t border-terminal-border px-4 py-16 md:px-8">
        <div className="container mx-auto max-w-4xl">
          <h2 className="mb-12 font-mono text-terminal-green text-sm fadeIn" style={{ animationDelay: '0.1s' }}>
            {dict.home.experience}
          </h2>
          <Timeline experiences={experiences} />
        </div>
      </section>

      <section className="border-t border-terminal-border px-4 py-16 md:px-8">
        <div className="container mx-auto max-w-4xl">
          <h2 className="mb-12 font-mono text-terminal-green text-sm fadeIn" style={{ animationDelay: '0.1s' }}>
            {dict.home.skills}
          </h2>
          <SkillCloud skills={skills} />
        </div>
      </section>
    </main>
  );
}
