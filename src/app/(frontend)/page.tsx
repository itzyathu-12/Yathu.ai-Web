import Link from 'next/link'

import { getDownloadSettings } from '@/lib/get-download-settings'

function SparkIcon({ className = 'size-5' }: { className?: string }) {
  return (
    <svg aria-hidden="true" className={className} fill="none" viewBox="0 0 24 24">
      <path
        d="M12 2.75c.49 4.8 4.3 8.61 9.1 9.1-4.8.49-8.61 4.3-9.1 9.1-.49-4.8-4.3-8.61-9.1-9.1 4.8-.49 8.61-4.3 9.1-9.1Z"
        fill="currentColor"
      />
    </svg>
  )
}

function ArrowIcon() {
  return (
    <svg aria-hidden="true" className="size-4" fill="none" viewBox="0 0 16 16">
      <path
        d="M3 8h9.5M9 4.5 12.5 8 9 11.5"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.5"
      />
    </svg>
  )
}

function DownloadIcon() {
  return (
    <svg aria-hidden="true" className="size-5" fill="none" viewBox="0 0 20 20">
      <path
        d="M10 2.5v9m0 0 3.5-3.5M10 11.5 6.5 8M4 14.5v2h12v-2"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.6"
      />
    </svg>
  )
}

function FeatureIcon({ type }: { type: 'mood' | 'voice' | 'shortcut' }) {
  if (type === 'voice') {
    return (
      <svg aria-hidden="true" className="size-6" fill="none" viewBox="0 0 24 24">
        <rect height="11" rx="4" stroke="currentColor" strokeWidth="1.6" width="6" x="9" y="3" />
        <path
          d="M5.5 11.5a6.5 6.5 0 0 0 13 0M12 18v3M9 21h6"
          stroke="currentColor"
          strokeLinecap="round"
          strokeWidth="1.6"
        />
      </svg>
    )
  }
  if (type === 'shortcut') {
    return (
      <svg aria-hidden="true" className="size-6" fill="none" viewBox="0 0 24 24">
        <rect height="16" rx="3" stroke="currentColor" strokeWidth="1.6" width="19" x="2.5" y="4" />
        <path
          d="M6 9h3M11 9h3M16 9h2M6 13h2M10 13h8M7 17h10"
          stroke="currentColor"
          strokeLinecap="round"
          strokeWidth="1.4"
        />
      </svg>
    )
  }
  return (
    <svg aria-hidden="true" className="size-6" fill="none" viewBox="0 0 24 24">
      <path
        d="M5 17.5c2.7-1.4 4.7-4 5.4-7.1.4-1.8 2.8-2.2 3.8-.6l.7 1.2c.9 1.4 2.7 2 4.2 1.3"
        stroke="currentColor"
        strokeLinecap="round"
        strokeWidth="1.6"
      />
      <circle cx="6" cy="7" fill="currentColor" r="2" />
      <circle cx="18" cy="17" fill="currentColor" r="2" />
    </svg>
  )
}

export default async function HomePage() {
  const download = await getDownloadSettings()
  const releaseDetails = [
    download.version ? `v${download.version}` : null,
    download.fileSize,
    'Windows 10/11',
  ].filter(Boolean)

  return (
    <main className="min-h-screen overflow-hidden bg-[#f4f2ed] text-[#15211d]">
      <header className="relative z-20 mx-auto flex max-w-[1440px] items-center justify-between px-5 py-6 sm:px-10 lg:px-16">
        <Link className="flex items-center gap-2.5" href="/" aria-label="Yathu.ai home">
          <span className="grid size-9 place-items-center rounded-[12px] bg-[#17251f] text-[#d9ff5c] shadow-[0_8px_24px_rgba(23,37,31,0.18)]">
            <SparkIcon className="size-5" />
          </span>
          <span className="text-[19px] font-bold tracking-[-0.04em]">Yathu.ai</span>
        </Link>
        <nav className="hidden items-center gap-8 text-sm font-medium text-[#52605a] md:flex">
          <a className="transition-colors hover:text-[#15211d]" href="#features">
            Features
          </a>
          <a className="transition-colors hover:text-[#15211d]" href="#how-it-works">
            How it works
          </a>
          <a className="transition-colors hover:text-[#15211d]" href="#download">
            Download
          </a>
        </nav>
        <a
          className="group inline-flex items-center gap-2 rounded-full border border-[#cad0ca] bg-white/70 px-4 py-2.5 text-sm font-semibold shadow-sm backdrop-blur transition hover:border-[#9ea9a2] hover:bg-white"
          href="#download"
        >
          Get Yathu
          <span className="transition-transform group-hover:translate-x-0.5">
            <ArrowIcon />
          </span>
        </a>
      </header>

      <section className="relative mx-auto grid max-w-[1440px] items-center gap-14 px-5 pb-24 pt-14 sm:px-10 md:pt-20 lg:min-h-[780px] lg:grid-cols-[0.9fr_1.1fr] lg:gap-12 lg:px-16 lg:pb-32 lg:pt-12">
        <div className="pointer-events-none absolute -left-40 top-12 size-[460px] rounded-full bg-[#d9ff5c]/20 blur-[90px]" />
        <div className="relative z-10 max-w-2xl">
          <div className="mb-7 inline-flex items-center gap-2 rounded-full border border-[#d8ddd7] bg-white/65 px-3.5 py-2 text-xs font-semibold uppercase tracking-[0.16em] text-[#4b5c54] shadow-sm backdrop-blur">
            <span className="size-1.5 rounded-full bg-[#78a900] shadow-[0_0_0_4px_rgba(120,169,0,0.12)]" />
            Your desktop, in tune
          </div>
          <h1 className="max-w-[680px] text-[clamp(3.55rem,7vw,7rem)] font-semibold leading-[0.9] tracking-[-0.075em]">
            A desktop that
            <span className="mt-2 block font-serif font-normal italic tracking-[-0.055em] text-[#617064]">
              feels like you.
            </span>
          </h1>
          <p className="mt-8 max-w-xl text-lg leading-8 text-[#59655f] sm:text-xl">
            Yathu is the quiet AI companion that reshapes your desktop to match your mood, your
            focus, and your flow.
          </p>
          <div className="mt-10 flex flex-col gap-3 sm:flex-row sm:items-center">
            {download.url ? (
              <a
                className="inline-flex min-h-14 items-center justify-center gap-2.5 rounded-full bg-[#17251f] px-7 text-[15px] font-semibold text-white shadow-[0_14px_34px_rgba(23,37,31,0.22)] transition hover:-translate-y-0.5 hover:bg-[#24362e]"
                download={download.fileName ?? undefined}
                href={download.url}
              >
                <DownloadIcon />
                Download for Windows
              </a>
            ) : (
              <a
                className="inline-flex min-h-14 items-center justify-center gap-2.5 rounded-full bg-[#17251f] px-7 text-[15px] font-semibold text-white shadow-[0_14px_34px_rgba(23,37,31,0.22)] transition hover:-translate-y-0.5 hover:bg-[#24362e]"
                href="#download"
              >
                <DownloadIcon />
                Join the first release
              </a>
            )}
            <span className="px-3 text-sm text-[#738078]">Free for personal use</span>
          </div>
        </div>

        <div className="relative mx-auto w-full max-w-[700px] lg:ml-auto">
          <div className="absolute -right-12 -top-16 size-48 rounded-full bg-[#b9a9ff]/35 blur-[55px]" />
          <div className="absolute -bottom-10 left-10 size-52 rounded-full bg-[#d9ff5c]/35 blur-[60px]" />
          <div className="relative rotate-[1.5deg] rounded-[28px] border border-white/80 bg-[#d9ded7] p-2.5 shadow-[0_40px_100px_rgba(31,45,38,0.22)]">
            <div className="overflow-hidden rounded-[20px] border border-[#bdc5bd] bg-[#202c27]">
              <div className="flex h-11 items-center justify-between border-b border-white/8 bg-[#18231e] px-4">
                <div className="flex gap-1.5">
                  <span className="size-2.5 rounded-full bg-white/15" />
                  <span className="size-2.5 rounded-full bg-white/15" />
                  <span className="size-2.5 rounded-full bg-white/15" />
                </div>
                <span className="text-[10px] font-medium tracking-[0.2em] text-white/35">
                  YATHU DESKTOP
                </span>
                <span className="size-5 rounded-full border border-white/10 bg-white/5" />
              </div>
              <div className="relative min-h-[410px] overflow-hidden bg-[radial-gradient(circle_at_72%_28%,rgba(201,187,255,0.42),transparent_33%),radial-gradient(circle_at_25%_80%,rgba(217,255,92,0.24),transparent_30%),linear-gradient(145deg,#344941_0%,#19241f_68%)] p-5 sm:min-h-[500px] sm:p-7">
                <div className="absolute inset-0 opacity-[0.1] [background-image:linear-gradient(rgba(255,255,255,.25)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.25)_1px,transparent_1px)] [background-size:32px_32px]" />
                <div className="relative flex justify-between">
                  <div className="flex gap-2">
                    <div className="grid size-11 place-items-center rounded-2xl border border-white/10 bg-white/8 text-[#d9ff5c] backdrop-blur">
                      <SparkIcon />
                    </div>
                    <div>
                      <p className="text-sm font-semibold text-white">Good evening.</p>
                      <p className="mt-0.5 text-[11px] text-white/45">
                        Your space feels calm today.
                      </p>
                    </div>
                  </div>
                  <div className="rounded-full border border-white/10 bg-white/8 px-3 py-1.5 text-[10px] text-white/60 backdrop-blur">
                    18:42
                  </div>
                </div>
                <div className="relative mx-auto mt-16 max-w-[390px] rounded-[24px] border border-white/15 bg-[#101914]/72 p-5 shadow-2xl backdrop-blur-xl sm:mt-24 sm:p-6">
                  <div className="flex items-center gap-3">
                    <div className="grid size-10 shrink-0 place-items-center rounded-full bg-[#d9ff5c] text-[#17251f]">
                      <SparkIcon />
                    </div>
                    <div className="min-w-0 flex-1">
                      <p className="text-sm font-medium text-white">How should your space feel?</p>
                      <p className="mt-1 truncate text-xs text-white/40">
                        Try “make it quiet and focused”
                      </p>
                    </div>
                    <div className="flex h-7 items-end gap-[3px]">
                      {[9, 16, 12, 20, 14, 8].map((height, index) => (
                        <span
                          className="w-[2px] rounded-full bg-[#d9ff5c]"
                          key={index}
                          style={{ height }}
                        />
                      ))}
                    </div>
                  </div>
                  <div className="mt-5 flex items-center justify-between border-t border-white/10 pt-4 text-[11px]">
                    <span className="text-white/40">Listening…</span>
                    <span className="rounded-md border border-white/10 bg-white/8 px-2 py-1 font-medium text-white/60">
                      Ctrl + Space
                    </span>
                  </div>
                </div>
                <div className="absolute bottom-5 left-1/2 flex -translate-x-1/2 gap-2 rounded-2xl border border-white/10 bg-[#111a16]/60 p-2 backdrop-blur-xl">
                  {['#d9ff5c', '#baaaff', '#f5f0e6', '#86c7ad'].map((color) => (
                    <span
                      className="size-8 rounded-xl border border-white/10"
                      key={color}
                      style={{ backgroundColor: color }}
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>
          <div className="absolute -left-5 bottom-14 hidden -rotate-3 rounded-2xl border border-white/80 bg-white/85 px-4 py-3 shadow-xl backdrop-blur sm:block">
            <p className="text-[10px] font-semibold uppercase tracking-[0.14em] text-[#89938e]">
              Current mood
            </p>
            <p className="mt-1.5 text-sm font-semibold">Quiet focus</p>
          </div>
        </div>
      </section>

      <section
        className="bg-[#17251f] px-5 py-24 text-white sm:px-10 lg:px-16 lg:py-32"
        id="features"
      >
        <div className="mx-auto max-w-[1312px]">
          <div className="grid gap-8 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#d9ff5c]">
                Made to feel natural
              </p>
              <h2 className="mt-5 max-w-md text-4xl font-semibold leading-[1.05] tracking-[-0.05em] sm:text-5xl">
                Less interface. More intuition.
              </h2>
            </div>
            <p className="max-w-2xl self-end text-lg leading-8 text-white/55">
              No dashboards to learn. No endless settings to tune. Just say what you need, or press
              a shortcut, and Yathu quietly brings your desktop into alignment.
            </p>
          </div>
          <div className="mt-16 grid gap-px overflow-hidden rounded-[28px] border border-white/10 bg-white/10 md:grid-cols-3">
            {[
              {
                type: 'mood' as const,
                number: '01',
                title: 'Mood-aware spaces',
                copy: 'Warm, focused, playful, or calm. Yathu adjusts your visual environment to support how you want to feel.',
              },
              {
                type: 'voice' as const,
                number: '02',
                title: 'Wake with your voice',
                copy: 'Speak naturally. Yathu listens when invited and turns a simple feeling into a complete desktop atmosphere.',
              },
              {
                type: 'shortcut' as const,
                number: '03',
                title: 'One shortcut away',
                copy: 'Press Ctrl + Space from anywhere. Your assistant appears instantly without interrupting your flow.',
              },
            ].map((feature) => (
              <article
                className="group min-h-[330px] bg-[#17251f] p-8 transition hover:bg-[#1e3028] sm:p-10"
                key={feature.title}
              >
                <div className="flex items-start justify-between">
                  <div className="grid size-12 place-items-center rounded-2xl bg-white/8 text-[#d9ff5c] transition group-hover:bg-[#d9ff5c] group-hover:text-[#17251f]">
                    <FeatureIcon type={feature.type} />
                  </div>
                  <span className="text-xs font-medium text-white/25">{feature.number}</span>
                </div>
                <h3 className="mt-16 text-2xl font-semibold tracking-[-0.03em]">{feature.title}</h3>
                <p className="mt-4 leading-7 text-white/45">{feature.copy}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="px-5 py-24 sm:px-10 lg:px-16 lg:py-32" id="how-it-works">
        <div className="mx-auto max-w-[1160px]">
          <div className="text-center">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#778278]">
              How it works
            </p>
            <h2 className="mx-auto mt-5 max-w-2xl text-4xl font-semibold tracking-[-0.05em] sm:text-6xl">
              From feeling to flow in seconds.
            </h2>
          </div>
          <div className="relative mt-20 grid gap-12 md:grid-cols-3 md:gap-8">
            <div className="absolute left-[16%] right-[16%] top-7 hidden border-t border-dashed border-[#b8c0b9] md:block" />
            {[
              ['01', 'Wake Yathu', 'Say the wake phrase or press Ctrl + Space.'],
              ['02', 'Share your mood', 'Tell Yathu how you feel or what you need.'],
              ['03', 'Enter your space', 'Watch your desktop shift into the right atmosphere.'],
            ].map(([number, title, copy]) => (
              <div className="relative text-center" key={number}>
                <span className="relative z-10 mx-auto grid size-14 place-items-center rounded-full border border-[#cfd5cf] bg-[#f4f2ed] text-sm font-bold shadow-[0_0_0_8px_#f4f2ed]">
                  {number}
                </span>
                <h3 className="mt-7 text-xl font-semibold">{title}</h3>
                <p className="mx-auto mt-3 max-w-[260px] leading-7 text-[#68736c]">{copy}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="px-5 pb-8 sm:px-10 lg:px-16" id="download">
        <div className="relative mx-auto max-w-[1312px] overflow-hidden rounded-[34px] bg-[#c9baff] px-6 py-16 sm:px-12 lg:px-20 lg:py-20">
          <div className="absolute -right-28 -top-24 size-80 rounded-full border-[55px] border-white/20" />
          <div className="absolute -bottom-32 right-[24%] size-64 rounded-full bg-[#d9ff5c]/45 blur-3xl" />
          <div className="relative grid items-end gap-12 lg:grid-cols-[1fr_auto]">
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#463e6a]">
                Available for Windows
              </p>
              <h2 className="mt-5 max-w-3xl text-4xl font-semibold leading-[1] tracking-[-0.055em] text-[#19172a] sm:text-6xl">
                Make your desktop feel like home.
              </h2>
              {download.releaseNote && (
                <p className="mt-6 max-w-xl text-base leading-7 text-[#4e4864]">
                  {download.releaseNote}
                </p>
              )}
              <div className="mt-7 flex flex-wrap gap-x-3 gap-y-1 text-sm font-medium text-[#5c5574]">
                {releaseDetails.map((detail, index) => (
                  <span className="flex items-center gap-3" key={detail}>
                    {index > 0 && <span className="size-1 rounded-full bg-[#6a627c]/50" />}
                    {detail}
                  </span>
                ))}
              </div>
            </div>
            <div className="flex flex-col items-start lg:items-end">
              {download.url ? (
                <a
                  className="inline-flex min-h-14 items-center justify-center gap-2.5 rounded-full bg-[#19172a] px-7 font-semibold text-white shadow-[0_16px_35px_rgba(42,35,72,0.22)] transition hover:-translate-y-0.5 hover:bg-[#2a2642]"
                  download={download.fileName ?? undefined}
                  href={download.url}
                >
                  <DownloadIcon />
                  Download Yathu
                </a>
              ) : (
                <div className="rounded-2xl border border-[#39334e]/15 bg-white/30 p-5 backdrop-blur">
                  <p className="font-semibold text-[#211e34]">First release coming soon.</p>
                  <p className="mt-1 text-sm text-[#5c5574]">
                    The Windows installer will appear here when it is ready.
                  </p>
                </div>
              )}
              <Link
                className="mt-4 text-xs font-semibold text-[#4d4763] underline decoration-[#4d4763]/35 underline-offset-4 hover:decoration-[#4d4763]"
                href="/admin"
              >
                Manage the current release
              </Link>
            </div>
          </div>
        </div>
      </section>

      <footer className="mx-auto flex max-w-[1440px] flex-col gap-5 px-5 py-10 text-sm text-[#69746d] sm:px-10 md:flex-row md:items-center md:justify-between lg:px-16">
        <div className="flex items-center gap-2 font-semibold text-[#243129]">
          <SparkIcon className="size-4" />
          Yathu.ai
        </div>
        <p>Your space. Your mood. Your rhythm.</p>
        <p>© {new Date().getFullYear()} Yathu.ai</p>
      </footer>
    </main>
  )
}
