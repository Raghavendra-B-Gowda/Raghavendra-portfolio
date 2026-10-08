import { createFileRoute } from "@tanstack/react-router";
import { useRef, useState, useEffect, MouseEvent as ReactMouseEvent } from "react";
import {
  ArrowRight,
  ArrowUpRight,
  Code2,
  Copy,
  Download,
  Github,
  GraduationCap,
  Instagram,
  Linkedin,
  Mail,
  MapPin,
  Trophy,
} from "lucide-react";
import { SiGithub, SiJavascript, SiMysql, SiPython, SiReact } from "react-icons/si";
import { FaJava, FaHtml5, FaFilePowerpoint, FaFileWord, FaDatabase } from "react-icons/fa6";
import portrait from "@/assets/hero-portrait.png";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Raghavendra B | Software Developer Portfolio" },
      {
        name: "description",
        content:
          "Aspiring software developer focused on building modern, responsive and user-friendly web applications.",
      },
      { property: "og:title", content: "Raghavendra B | Software Developer" },
      {
        property: "og:description",
        content: "BCA Student, Frontend Developer, and Aspiring Software Engineer.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

const navItems = ["Home", "About", "Skills", "Projects", "Education"];

const stats = [
  { icon: Github, value: "10+", label: ["GitHub", "Projects"] },
  { icon: GraduationCap, value: "BCA", label: ["3rd Year", "Student"] },
  { icon: Code2, value: "9+", label: ["Technologies", "Learned"] },
  { icon: Trophy, value: "100%", label: ["Passion to", "Code"] },
];

const tech = [
  { name: "Python", Icon: SiPython, color: "#3776AB" },
  { name: "Java", Icon: FaJava, color: "#007396" },
  { name: "JavaScript", Icon: SiJavascript, color: "#F7DF1E" },
  { name: "React", Icon: SiReact, color: "#61DAFB" },
  { name: "HTML & CSS", Icon: FaHtml5, color: "#E34F26" },
  { name: "SQL", Icon: FaDatabase, color: "#00758F" },
  { name: "SQL & DBMS", Icon: SiMysql, color: "#4479A1" },
  { name: "Git & GitHub", Icon: SiGithub, color: "#FFFFFF" },
  { name: "MS PowerPoint", Icon: FaFilePowerpoint, color: "#D04423" },
  { name: "MS Word", Icon: FaFileWord, color: "#2B579A" },
];

const socials = [
  { icon: Github, label: "GitHub", href: "https://github.com/Raghavendra-B-Gowda" },
  { icon: Linkedin, label: "LinkedIn", href: "https://linkedin.com/in/raghavendra-b-b48218352/" },
  { icon: Instagram, label: "Instagram", href: "https://instagram.com/me_raghavendra_gowda" },
  { icon: Mail, label: "Email", href: "mailto:raghavendrab822007@gmail.com" },
];

function CodePanel() {
  const line = (indent: number, children: React.ReactNode) => (
    <div style={{ paddingLeft: `${indent * 1}rem` }}>{children}</div>
  );
  return (
    <div className="glass-panel animate-float w-full rounded-xl">
      <div className="flex items-center gap-3 border-b border-border px-4 py-3">
        <span className="flex gap-1.5">
          <span className="size-3 rounded-full bg-red-500/80" />
          <span className="size-3 rounded-full bg-yellow-500/80" />
          <span className="size-3 rounded-full bg-green-500/80" />
        </span>
        <span className="flex-1 text-center text-sm text-muted-foreground">developer.ts</span>
        <Copy className="size-4 text-muted-foreground" />
      </div>
      <pre className="overflow-x-auto px-5 py-4 font-mono text-[13px] leading-6 text-foreground/90">
        {line(
          0,
          <>
            <span className="text-accent">const</span> Raghavendra = {"{"}
          </>,
        )}
        {line(
          1,
          <>
            code: <span className="text-accent">true</span>,
          </>,
        )}
        {line(
          1,
          <>
            learn: <span className="text-accent">true</span>,
          </>,
        )}
        {line(
          1,
          <>
            build: <span className="text-accent">true</span>,
          </>,
        )}
        {line(
          1,
          <>
            passion: <span className="text-accent/80">'Solving Problems'</span>,
          </>,
        )}
        {line(
          1,
          <>
            focus: <span className="text-accent/80">'Creating Impact'</span>
          </>,
        )}
        {line(0, <>{"};"}</>)}
        <div className="h-4" />
        {line(
          0,
          <>
            <span className="text-accent">while</span>(alive) {"{"}
          </>,
        )}
        {line(1, <>code();</>)}
        {line(1, <>learn();</>)}
        {line(1, <>build();</>)}
        {line(1, <>repeat();</>)}
        {line(0, <>{"}"}</>)}
        <div className="h-4" />
        {line(0, <span className="text-accent/70">// Building today</span>)}
        {line(0, <span className="text-accent/70">// Shaping tomorrow</span>)}
      </pre>
    </div>
  );
}

function DraggableSkills() {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);
  const isHovered = useRef(false);
  const animationRef = useRef<number>(0);

  useEffect(() => {
    const scrollContainer = scrollRef.current;
    if (!scrollContainer) return;

    const autoScroll = () => {
      if (!isDragging && !isHovered.current) {
        scrollContainer.scrollLeft += 0.5;
        // Simple loop back when reached end
        if (
          scrollContainer.scrollLeft >=
          scrollContainer.scrollWidth - scrollContainer.clientWidth - 1
        ) {
          scrollContainer.scrollLeft = 0;
        }
      }
      animationRef.current = requestAnimationFrame(autoScroll);
    };

    animationRef.current = requestAnimationFrame(autoScroll);

    return () => {
      if (animationRef.current) cancelAnimationFrame(animationRef.current);
    };
  }, [isDragging]);

  const onMouseDown = (e: ReactMouseEvent) => {
    setIsDragging(true);
    if (scrollRef.current) {
      setStartX(e.pageX - scrollRef.current.offsetLeft);
      setScrollLeft(scrollRef.current.scrollLeft);
    }
  };

  const onMouseLeave = () => {
    setIsDragging(false);
    isHovered.current = false;
  };

  const onMouseEnter = () => {
    isHovered.current = true;
  };

  const onMouseUp = () => {
    setIsDragging(false);
  };

  const onMouseMove = (e: ReactMouseEvent) => {
    if (!isDragging) return;
    e.preventDefault();
    if (scrollRef.current) {
      const x = e.pageX - scrollRef.current.offsetLeft;
      const walk = (x - startX) * 2;
      scrollRef.current.scrollLeft = scrollLeft - walk;
    }
  };

  const displayTech = [...tech, ...tech, ...tech];

  return (
    <div
      ref={scrollRef}
      onMouseDown={onMouseDown}
      onMouseLeave={onMouseLeave}
      onMouseEnter={onMouseEnter}
      onMouseUp={onMouseUp}
      onMouseMove={onMouseMove}
      className={`mt-5 flex gap-8 px-6 lg:mt-6 lg:gap-12 overflow-x-auto select-none [&::-webkit-scrollbar]:hidden ${isDragging ? "cursor-grabbing" : "cursor-grab"}`}
      style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
    >
      {displayTech.map(({ name, Icon, color }, i) => (
        <div
          key={`${name}-${i}`}
          className="group w-24 shrink-0 text-center transition-transform hover:-translate-y-1"
        >
          <Icon
            className="mx-auto size-8 transition-all lg:size-10 pointer-events-none"
            style={{ color }}
          />
          <span className="mt-3 block text-[11px] font-semibold tracking-wider text-muted-foreground/50 transition-colors group-hover:text-muted-foreground pointer-events-none">
            {name}
          </span>
        </div>
      ))}
    </div>
  );
}

function Index() {
  return (
    <div className="relative min-h-screen overflow-x-hidden bg-background">
      <div className="hero-glow pointer-events-none absolute inset-x-0 top-0 h-[1000px] opacity-70" />

      {/* Navigation (Fixed) */}
      <div className="fixed top-0 inset-x-0 z-50 flex justify-center bg-background/60 backdrop-blur-md border-b border-border/20">
        <header className="flex w-full max-w-[1300px] items-center justify-between px-5 py-4 lg:px-0">
          <a href="#home" className="font-display text-2xl tracking-wide">
            R<span className="text-accent">B</span>
          </a>
          <nav className="hidden items-center gap-10 lg:flex">
            {navItems.map((item, i) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                className={`relative text-sm font-semibold tracking-[0.12em] uppercase transition-colors ${
                  i === 0 ? "text-accent" : "text-muted-foreground hover:text-foreground"
                }`}
              >
                {item}
                {i === 0 && (
                  <span className="animate-draw absolute -bottom-2 left-0 h-0.5 w-full bg-accent" />
                )}
              </a>
            ))}
          </nav>
          <a
            href="#contact"
            className="group inline-flex items-center gap-3 rounded-md border border-border bg-card/50 backdrop-blur-sm px-5 py-2.5 text-xs font-semibold tracking-[0.14em] uppercase transition-colors hover:border-accent hover:text-accent"
          >
            Let's connect
            <ArrowRight className="size-4 text-accent transition-transform group-hover:translate-x-1" />
          </a>
        </header>
      </div>

      {/* Screen 1: Hero */}
      <div className="relative flex min-h-screen flex-col pt-24 pb-6">
        {/* scroll down rail */}
        <div className="pointer-events-none absolute left-8 top-1/2 z-20 hidden -translate-y-1/2 flex-col items-center gap-4 xl:flex">
          <span className="h-24 w-px bg-border" />
          <span
            className="text-[10px] font-semibold tracking-[0.3em] text-muted-foreground uppercase"
            style={{ writingMode: "vertical-rl" }}
          >
            Scroll down
          </span>
          <span className="h-12 w-px bg-accent/50" />
          <span className="animate-pulse-dot size-1.5 rounded-full bg-accent" />
        </div>

        <main
          id="home"
          className="relative mx-auto flex w-full max-w-[1300px] flex-1 flex-col px-5 lg:px-0"
        >
          <section className="relative flex flex-1 flex-col justify-start lg:flex-row lg:items-center lg:justify-between pt-4 pb-12 lg:py-0">
            {/* Center: Background Circle (Desktop) - Behind Text */}
            <div className="pointer-events-none absolute left-[55%] top-[50%] z-0 hidden h-[650px] w-[650px] -translate-x-1/2 -translate-y-1/2 lg:block">
              <div className="hero-ring absolute inset-0 rounded-full" />
              <div className="grid-dots absolute top-16 left-16 h-32 w-32 opacity-40" />
            </div>

            {/* Mobile Image */}
            <div className="pointer-events-none relative z-0 -mb-36 mt-4 flex w-full justify-center lg:hidden">
              <div className="hero-ring absolute left-1/2 top-[10%] aspect-square w-[100vw] max-w-[450px] -translate-x-1/2 rounded-full" />
              <img
                src={portrait}
                alt="Raghavendra B"
                className="relative z-10 w-[85vw] max-w-[400px] object-contain drop-shadow-2xl"
              />
            </div>

            {/* Left Column: Text */}
            <div
              className="animate-rise relative z-20 w-full max-w-xl lg:w-[550px]"
              style={{ animationDelay: "0.05s" }}
            >
              <div className="flex items-center gap-4 mb-8 lg:mb-16 drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)]">
                <span className="text-xs font-semibold tracking-[0.3em] text-accent uppercase">
                  Hello, I'm
                </span>
                <span className="animate-draw h-px w-24 bg-accent/50" />
              </div>
              <h1 className="text-glow-name font-display text-[16vw] sm:text-[5.5rem] leading-[0.8] tracking-tight text-foreground lg:text-[7.5rem] xl:text-[8.5rem] whitespace-nowrap scale-y-[1.3] lg:scale-y-[1.35] origin-bottom-left">
                RAGHAVENDRA
              </h1>
              <p className="font-script mt-2 text-[10vw] sm:text-5xl text-accent lg:mt-8 lg:ml-12 lg:text-[4.5rem] drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)]">
                B. Gowda
              </p>

              <div className="mt-8 inline-flex items-center gap-3 rounded-md bg-card px-4 py-2 lg:px-5 lg:py-2.5 border border-border/50">
                <span className="animate-pulse-dot size-2 rounded-full bg-accent lg:size-2.5" />
                <span className="text-xs font-semibold tracking-[0.16em] uppercase lg:text-sm">
                  Aspiring Software Developer
                </span>
              </div>

              <p className="mt-6 max-w-sm text-sm text-muted-foreground/90 leading-relaxed lg:max-w-md lg:text-base">
                Aspiring software developer focused on building modern, responsive and user-friendly
                web applications while continuously improving my programming and problem-solving
                skills.
              </p>

              <div className="mt-8 flex flex-wrap gap-4">
                <a
                  href="#projects"
                  className="group inline-flex items-center gap-3 rounded-md bg-accent px-7 py-3.5 text-xs font-bold tracking-[0.12em] text-accent-foreground uppercase transition-transform hover:-translate-y-0.5"
                  style={{ boxShadow: "var(--shadow-glow)" }}
                >
                  View my work
                  <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
                </a>
                <a
                  href="#contact"
                  className="group inline-flex items-center gap-3 rounded-md border border-border bg-card px-7 py-3.5 text-xs font-bold tracking-[0.12em] uppercase transition-colors hover:border-accent"
                >
                  Download resume
                  <Download className="size-4 transition-transform group-hover:translate-y-0.5" />
                </a>
              </div>

              <div className="mt-12">
                <p className="mb-4 text-[10px] font-semibold tracking-[0.2em] text-muted-foreground uppercase">
                  Connect with me
                </p>
                <div className="flex gap-3">
                  {socials.map(({ icon: Icon, label, href }) => (
                    <a
                      key={label}
                      href={href}
                      target={href.startsWith("http") ? "_blank" : "_self"}
                      rel="noreferrer"
                      aria-label={label}
                      className="grid size-11 place-items-center rounded-xl border border-border bg-card transition-all hover:-translate-y-1 hover:border-accent hover:text-accent"
                    >
                      <Icon className="size-5" />
                    </a>
                  ))}
                </div>
              </div>
            </div>

            {/* Center: Portrait Image (Desktop) - In Front of Text */}
            <div className="pointer-events-none absolute left-[55%] top-[50%] z-20 hidden h-[650px] w-[650px] -translate-x-1/2 -translate-y-1/2 lg:block">
              <img
                src={portrait}
                alt="Raghavendra B, full stack developer"
                className="absolute bottom-[-5%] left-1/2 w-auto h-[110%] -translate-x-1/2 object-contain drop-shadow-2xl"
              />
            </div>

            {/* Right Column: Code panel & Location */}
            <div
              className="animate-rise relative z-30 mt-12 flex w-full flex-col lg:mt-0 lg:w-[420px] lg:items-end"
              style={{ animationDelay: "0.35s" }}
            >
              <div className="w-full">
                <CodePanel />
              </div>

              <div className="mt-10 flex items-center gap-4 lg:self-end">
                <span className="grid size-12 place-items-center rounded-full border border-border bg-card">
                  <MapPin className="size-5 text-accent" />
                </span>
                <div className="text-sm">
                  <span className="block text-[10px] font-semibold tracking-[0.2em] text-muted-foreground uppercase mb-1">
                    Based in
                  </span>
                  <span className="block text-xs font-bold tracking-[0.14em] text-accent uppercase">
                    Shivamogga, India
                  </span>
                </div>
              </div>
            </div>
          </section>

          {/* STATS (Bottom of Hero Screen) */}
          <section className="glass-panel relative z-20 grid grid-cols-2 gap-x-2 gap-y-6 divide-border rounded-2xl border border-border/50 bg-card py-6 px-3 sm:p-6 lg:grid-cols-4 lg:gap-y-0 lg:divide-x lg:p-0">
            {stats.map(({ icon: Icon, value, label }) => (
              <div
                key={value}
                className="flex flex-col sm:flex-row items-center sm:items-start text-center sm:text-left gap-3 px-2 sm:px-4 lg:justify-center lg:py-8"
              >
                <span className="grid size-[45px] sm:size-[60px] shrink-0 place-items-center rounded-xl border border-border/50 bg-background/50">
                  <Icon className="size-5 sm:size-6 text-accent" />
                </span>
                <span>
                  <span className="font-display block text-2xl sm:text-3xl text-accent lg:text-[2rem]">
                    {value}
                  </span>
                  <span className="mt-1 block text-[9px] sm:text-[10px] font-semibold tracking-[0.15em] uppercase text-muted-foreground">
                    {label.map((l, i) => (
                      <span key={l} className="block">
                        {l}
                      </span>
                    ))}
                  </span>
                </span>
              </div>
            ))}
          </section>
        </main>
      </div>

      {/* Rest of the Page */}
      <div className="mx-auto w-full max-w-[1300px] px-5 lg:px-0">
        <section
          id="skills"
          className="glass-panel mt-12 mb-16 scroll-mt-28 overflow-hidden rounded-xl border-border/50 bg-card py-4 lg:h-auto lg:pb-6"
        >
          <div className="flex items-center justify-center gap-3">
            <span className="animate-pulse-dot size-2 rounded-full bg-accent" />
            <h2 className="text-[11px] font-bold tracking-[0.2em] uppercase text-muted-foreground">
              Technologies I work with
            </h2>
            <span className="h-px w-16 bg-border/50" />
          </div>
          <DraggableSkills />
        </section>

        <section
          id="about"
          className="mb-20 grid scroll-mt-28 items-start gap-8 lg:grid-cols-[minmax(0,400px)_minmax(0,1fr)] lg:gap-16"
        >
          <h2 className="font-display text-5xl leading-[0.95] lg:text-6xl">
            ABOUT <span className="text-accent">ME</span>
          </h2>
          <div className="text-lg leading-relaxed text-muted-foreground lg:text-xl space-y-6">
            <p>
              Hi, I'm Raghavendra B, currently pursuing my Bachelor of Computer Applications (BCA)
              at PES Institute of Advanced Management Studies.
            </p>
            <p>
              I am an active NSS volunteer, where I have participated in multiple camps and
              workshops, gaining valuable experience in teamwork, leadership, and community service.
              These experiences have helped me develop strong communication skills and the ability
              to work effectively in a team environment.
            </p>
            <p>
              I have an interest in web development and enjoy creating responsive and user-friendly
              websites. While I am not limited to frontend development, I have good knowledge and
              hands-on experience in it.
            </p>
            <p>I am always eager to learn new technologies and continuously improve my skills.</p>
            <p>
              I believe in staying humble, learning consistently, and growing both personally and
              professionally.
            </p>
          </div>
        </section>

        <section id="projects" className="mb-20 scroll-mt-28">
          <h2 className="font-display mb-10 text-5xl lg:text-6xl">
            SELECTED <span className="text-accent">PROJECTS</span>
          </h2>
          <div className="grid gap-6 md:grid-cols-3">
            {[
              {
                t: "MyWish",
                d: "A dynamic web application for seamlessly generating, customizing, and sharing beautiful digital certificates.",
                l: "https://mywish-eta.vercel.app/",
              },
              {
                t: " ",
                d: "Full stack commerce app with MongoDB and Express.",
                comingSoon: true,
              },
              {
                t: "  ",
                d: "Next.js note-taking app with smart summaries.",
                comingSoon: true,
              },
            ].map((p) => {
              const content = (
                <>
                  <h3 className="font-display flex items-center justify-between text-3xl">
                    {p.t}
                    {p.l && (
                      <ArrowUpRight className="size-6 text-accent opacity-0 transition-all group-hover:translate-x-1 group-hover:-translate-y-1 group-hover:opacity-100" />
                    )}
                  </h3>
                  <p className="mt-4 text-base text-muted-foreground">{p.d}</p>
                  {p.comingSoon && (
                    <div className="mt-6 inline-flex items-center rounded-md border border-border/50 bg-background/50 px-2.5 py-1 text-[10px] font-semibold tracking-[0.2em] text-muted-foreground uppercase">
                      Coming soon
                    </div>
                  )}
                </>
              );

              const className = `glass-panel group rounded-2xl border border-border/50 bg-card p-8 transition-all hover:border-accent/50 hover:bg-card/80 block ${
                p.l ? "hover:-translate-y-1 cursor-pointer" : ""
              }`;

              if (p.l) {
                return (
                  <a
                    key={p.t}
                    href={p.l}
                    target={p.l.startsWith("http") ? "_blank" : undefined}
                    rel={p.l.startsWith("http") ? "noreferrer" : undefined}
                    className={className}
                  >
                    {content}
                  </a>
                );
              }

              return (
                <article key={p.t} className={className}>
                  {content}
                </article>
              );
            })}
          </div>
        </section>

        <section id="education" className="mb-20 scroll-mt-28">
          <h2 className="font-display mb-10 text-5xl lg:text-6xl">
            EDUCA<span className="text-accent">TION</span>
          </h2>
          <ol className="space-y-8 border-l border-border/50 pl-8 lg:space-y-10 lg:pl-10">
            {[
              {
                y: "2024 — 2027",
                t: "Bachelor of Computer Applications (BCA)",
                desc: "PES Institute of Advanced Management Studies (PESIAMS) • Kuvempu University",
              },
              {
                y: "Current",
                t: "BCA 3rd Year / IV Semester",
                desc: "Focusing on Software Development, Web Technologies, and Database Management.",
              },
            ].map((e) => (
              <li key={e.y} className="relative">
                <span className="absolute -left-[2.35rem] top-2.5 size-3.5 rounded-full bg-accent ring-4 ring-background lg:-left-[2.85rem]" />
                <p className="mb-2 text-xs font-bold tracking-[0.2em] text-accent uppercase">
                  {e.y}
                </p>
                <p className="text-xl font-medium text-foreground lg:text-2xl">{e.t}</p>
                {e.desc && <p className="mt-2 text-sm text-muted-foreground">{e.desc}</p>}
              </li>
            ))}
          </ol>
        </section>

        <section
          id="contact"
          className="glass-panel relative mb-20 scroll-mt-28 overflow-hidden rounded-3xl border border-border/50 bg-card p-12 text-center lg:p-20"
        >
          <div className="absolute inset-0 bg-gradient-to-b from-accent/5 to-transparent pointer-events-none" />
          <h2 className="font-display relative z-10 text-5xl lg:text-7xl">
            LET'S BUILD <span className="text-accent">SOMETHING</span>
          </h2>
          <p className="relative z-10 mx-auto mt-6 max-w-lg text-lg text-muted-foreground">
            Open to freelance work, internships and collaborations. Drop me a line if you have a
            project in mind.
          </p>
          <a
            href="mailto:raghavendrab822007@gmail.com"
            className="group relative z-10 mt-10 inline-flex items-center gap-3 rounded-full bg-accent px-8 py-4 text-sm font-bold tracking-[0.15em] text-accent-foreground uppercase transition-transform hover:-translate-y-1"
            style={{ boxShadow: "0 0 30px -10px var(--accent)" }}
          >
            Say hello
            <Mail className="size-5 transition-transform group-hover:scale-110" />
          </a>
        </section>

        <footer className="border-t border-border/50 py-10 text-center text-xs font-semibold tracking-[0.2em] text-muted-foreground uppercase">
          © 2026 Raghavendra B
        </footer>
      </div>
    </div>
  );
}
