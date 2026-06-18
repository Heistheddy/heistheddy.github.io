import { useState } from 'react';
import './Skills.css';

const SKILLS = [
  {
    category: 'Frontend',
    icon: '</>',
    color: '#06B6D4',
    desc: 'Fast, accessible, pixel-perfect interfaces.',
    items: [
      { name: 'React',       devicon: 'react',       color: '#61DAFB' },
      { name: 'TypeScript',  devicon: 'typescript',  color: '#3178C6' },
      { name: 'Next.js',     devicon: 'nextjs',      color: '#ffffff' },
      { name: 'HTML',        devicon: 'html5',       color: '#E34F26' },
      { name: 'TailwindCSS', devicon: 'tailwindcss', color: '#38BDF8' },
    ],
  },
  {
    category: 'Backend',
    icon: '⚙',
    color: '#7C3AED',
    desc: 'Scalable APIs, databases, and server-side logic.',
    items: [
      { name: 'Node.js',    devicon: 'nodejs',     color: '#68A063' },
      { name: 'Python',     devicon: 'python',     color: '#3776AB' },
      { name: 'FastAPI',    devicon: 'fastapi',    color: '#009688' },
      { name: 'PostgreSQL', devicon: 'postgresql', color: '#336791' },
      { name: 'Redis',      devicon: 'redis',      color: '#DC382D' },
    ],
  },
  {
    category: 'Fintech',
    icon: '₦',
    color: '#10B981',
    desc: 'Payment flows, KYC, escrow, and fraud signals.',
    items: [
      { name: 'Paystack',      devicon: null, color: '#00C3F7', emoji: '💳' },
      { name: 'Flutterwave',   devicon: null, color: '#F5A623', emoji: '🌊' },
      { name: 'KYC Flows',     devicon: null, color: '#10B981', emoji: '🪪' },
      { name: 'Escrow',        devicon: null, color: '#10B981', emoji: '🔐' },
      { name: 'Fraud Signals', devicon: null, color: '#EF4444', emoji: '🛡️' },
    ],
  },
  {
    category: 'Video',
    icon: '▶',
    color: '#F59E0B',
    desc: 'Commercial edits, colour grading, motion graphics.',
    items: [
      { name: 'Premiere Pro',    devicon: null, color: '#9999FF', emoji: '🎬' },
      { name: 'After Effects',   devicon: null, color: '#9999FF', emoji: '✨' },
      { name: 'DaVinci Resolve', devicon: null, color: '#F59E0B', emoji: '🎞️' },
      { name: 'Colour Grading',  devicon: null, color: '#F59E0B', emoji: '🎨' },
      { name: 'Motion Graphics', devicon: null, color: '#FF6B6B', emoji: '🎥' },
    ],
  },
  {
    category: 'Tools',
    icon: '⌥',
    color: '#EC4899',
    desc: 'The glue that holds every project together.',
    items: [
      { name: 'Git',      devicon: 'git',      color: '#F05032' },
      { name: 'Docker',   devicon: 'docker',   color: '#2496ED' },
      { name: 'Figma',    devicon: 'figma',    color: '#F24E1E' },
      { name: 'Supabase', devicon: 'supabase', color: '#3ECF8E' },
      { name: 'Firebase', devicon: 'firebase', color: '#FFCA28' },
    ],
  },
];

export default function Skills() {
  const [active, setActive] = useState(0);
  const skill = SKILLS[active];

  const prev = () => setActive(i => (i - 1 + SKILLS.length) % SKILLS.length);
  const next = () => setActive(i => (i + 1) % SKILLS.length);

  return (
    <section className="skills section" id="skills">

      {/* ── Animated background canvas ── */}
      <SkillsBg color={skill.color} category={skill.category} />

      <div className="section__inner skills__inner">
        <div className="section__label">Toolkit</div>
        <h2 className="section__heading">
          Skills &amp; <span className="gradient-text">technologies</span>
        </h2>

        {/* ── Category selector ── */}
        <div className="skills__selector">
          <button className="skills__arrow" onClick={prev} aria-label="Previous">
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
              <path d="M13 4l-6 6 6 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </button>

          <div className="skills__cats">
            {SKILLS.map((s, i) => (
              <button
                key={s.category}
                className={`skills__cat${active === i ? ' skills__cat--active' : ''}`}
                style={{ '--cat-color': s.color }}
                onClick={() => setActive(i)}
              >
                <span className="skills__cat-icon">{s.icon}</span>
                <span>{s.category}</span>
              </button>
            ))}
          </div>

          <button className="skills__arrow" onClick={next} aria-label="Next">
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
              <path d="M7 4l6 6-6 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </button>
        </div>

        {/* ── Panel ── */}
        <div className="skills__panel" key={active}>
          <p className="skills__panel-cat" style={{ color: skill.color }}>{skill.category}</p>
          <p className="skills__panel-desc">{skill.desc}</p>

          <div className="skills__shields">
            {skill.items.map(item => (
              <div key={item.name} className="shield" style={{ '--shield-color': item.color }}>
                <div className="shield__icon">
                  {item.devicon ? (
                    <i className={`devicon-${item.devicon}-plain colored`} style={{ fontSize: '2.2rem' }} />
                  ) : (
                    <span className="shield__emoji">{item.emoji}</span>
                  )}
                </div>
                <span className="shield__name">{item.name}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

/* ── Animated SVG background ── */
function SkillsBg({ color, category }) {
  return (
    <div className="skills-bg" aria-hidden>
      <svg className="skills-bg__svg" viewBox="0 0 1200 500" preserveAspectRatio="xMidYMid slice" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <radialGradient id="bgGlow" cx="50%" cy="50%" r="60%">
            <stop offset="0%" stopColor={color} stopOpacity="0.12" />
            <stop offset="100%" stopColor={color} stopOpacity="0" />
          </radialGradient>
        </defs>
        <rect width="1200" height="500" fill="url(#bgGlow)" />

        {/* Grid lines — like a code editor / monitor */}
        {Array.from({ length: 12 }).map((_, i) => (
          <line key={`v${i}`} x1={i * 100} y1="0" x2={i * 100} y2="500"
            stroke={color} strokeOpacity="0.04" strokeWidth="1" />
        ))}
        {Array.from({ length: 6 }).map((_, i) => (
          <line key={`h${i}`} x1="0" y1={i * 100} x2="1200" y2={i * 100}
            stroke={color} strokeOpacity="0.04" strokeWidth="1" />
        ))}

        {/* Floating nodes — represent full-stack layers */}
        {category === 'Frontend' && <FrontendBg color={color} />}
        {category === 'Backend'  && <BackendBg  color={color} />}
        {category === 'Fintech'  && <FintechBg  color={color} />}
        {category === 'Video'    && <VideoBg    color={color} />}
        {category === 'Tools'    && <ToolsBg    color={color} />}
      </svg>
    </div>
  );
}

function FrontendBg({ color }) {
  return (
    <g>
      {/* Browser window outline */}
      <rect x="900" y="60" width="240" height="170" rx="8" fill="none" stroke={color} strokeOpacity="0.12" strokeWidth="1.5" />
      <rect x="900" y="60" width="240" height="28" rx="8" fill={color} fillOpacity="0.07" />
      <circle cx="916" cy="74" r="5" fill={color} fillOpacity="0.25" />
      <circle cx="932" cy="74" r="5" fill={color} fillOpacity="0.18" />
      <circle cx="948" cy="74" r="5" fill={color} fillOpacity="0.12" />
      {/* Code lines */}
      {[105, 120, 135, 150, 165, 180, 195].map((y, i) => (
        <rect key={y} x="916" y={y} width={[80,120,60,100,90,70,110][i]} height="6" rx="3"
          fill={color} fillOpacity={i % 2 === 0 ? 0.15 : 0.08} />
      ))}
      {/* Floating tags */}
      <text x="80" y="120" fontFamily="monospace" fontSize="22" fill={color} fillOpacity="0.1" className="skills-bg__float-1">&lt;div&gt;</text>
      <text x="200" y="280" fontFamily="monospace" fontSize="18" fill={color} fillOpacity="0.08" className="skills-bg__float-2">&lt;/&gt;</text>
      <text x="600" y="80" fontFamily="monospace" fontSize="16" fill={color} fillOpacity="0.07" className="skills-bg__float-3">const App = () =&gt;</text>
    </g>
  );
}

function BackendBg({ color }) {
  return (
    <g>
      {/* Server stack */}
      {[60, 110, 160].map((y, i) => (
        <g key={y}>
          <rect x="900" y={y} width="220" height="36" rx="4" fill="none" stroke={color} strokeOpacity="0.12" strokeWidth="1.5" />
          <circle cx="920" cy={y + 18} r="5" fill={color} fillOpacity={0.3 - i * 0.08} />
          <rect x="934" y={y + 13} width="80" height="5" rx="2" fill={color} fillOpacity="0.1" />
          <rect x="934" y={y + 22} width="50" height="4" rx="2" fill={color} fillOpacity="0.07" />
        </g>
      ))}
      {/* Data flow arrows */}
      <path d="M800 130 Q850 100 900 130" fill="none" stroke={color} strokeOpacity="0.1" strokeWidth="1.5" strokeDasharray="6 4" />
      <text x="60" y="150" fontFamily="monospace" fontSize="15" fill={color} fillOpacity="0.08" className="skills-bg__float-1">GET /api/v1/</text>
      <text x="150" y="300" fontFamily="monospace" fontSize="13" fill={color} fillOpacity="0.07" className="skills-bg__float-2">200 OK</text>
      <text x="550" y="400" fontFamily="monospace" fontSize="14" fill={color} fillOpacity="0.06" className="skills-bg__float-3">SELECT * FROM</text>
    </g>
  );
}

function FintechBg({ color }) {
  return (
    <g>
      {/* Transaction lines */}
      {[80, 140, 200, 260, 320].map((y, i) => (
        <g key={y}>
          <circle cx="920" cy={y} r="8" fill={color} fillOpacity="0.12" />
          <line x1="928" y1={y} x2="1080" y2={y} stroke={color} strokeOpacity="0.08" strokeWidth="1" strokeDasharray="4 3" />
          <circle cx="1088" cy={y} r="8" fill={color} fillOpacity="0.08" />
          <rect x="940" y={y - 6} width={[60,80,50,70,55][i]} height="5" rx="2" fill={color} fillOpacity="0.07" />
        </g>
      ))}
      <text x="60" y="130" fontFamily="monospace" fontSize="20" fill={color} fillOpacity="0.1" className="skills-bg__float-1">₦ 0.00</text>
      <text x="200" y="320" fontFamily="monospace" fontSize="14" fill={color} fillOpacity="0.07" className="skills-bg__float-2">VERIFIED</text>
      <text x="580" y="90" fontFamily="monospace" fontSize="13" fill={color} fillOpacity="0.06" className="skills-bg__float-3">escrow_hold()</text>
    </g>
  );
}

function VideoBg({ color }) {
  return (
    <g>
      {/* Timeline */}
      <rect x="80" y="380" width="1040" height="6" rx="3" fill={color} fillOpacity="0.08" />
      {[80, 240, 400, 560, 720, 880, 1040].map((x, i) => (
        <g key={x}>
          <rect x={x} y="355" width={[140,120,150,100,130,110,120][i] * 0.9} height="28" rx="4"
            fill={color} fillOpacity={i % 2 === 0 ? 0.1 : 0.06} />
          <line x1={x} y1="350" x2={x} y2="395" stroke={color} strokeOpacity="0.12" strokeWidth="1" />
        </g>
      ))}
      {/* Play button */}
      <circle cx="920" cy="160" r="50" fill="none" stroke={color} strokeOpacity="0.1" strokeWidth="1.5" />
      <polygon points="905,140 905,180 945,160" fill={color} fillOpacity="0.12" />
      <text x="80" y="150" fontFamily="monospace" fontSize="14" fill={color} fillOpacity="0.08" className="skills-bg__float-1">00:00:00:00</text>
      <text x="200" y="280" fontFamily="monospace" fontSize="13" fill={color} fillOpacity="0.07" className="skills-bg__float-2">4K • 24fps</text>
    </g>
  );
}

function ToolsBg({ color }) {
  return (
    <g>
      {/* Git branch */}
      <circle cx="960" cy="100" r="8" fill={color} fillOpacity="0.2" />
      <circle cx="960" cy="200" r="8" fill={color} fillOpacity="0.15" />
      <circle cx="960" cy="300" r="8" fill={color} fillOpacity="0.12" />
      <circle cx="1060" cy="150" r="8" fill={color} fillOpacity="0.1" />
      <circle cx="1060" cy="250" r="8" fill={color} fillOpacity="0.1" />
      <line x1="960" y1="108" x2="960" y2="192" stroke={color} strokeOpacity="0.12" strokeWidth="2" />
      <line x1="960" y1="208" x2="960" y2="292" stroke={color} strokeOpacity="0.12" strokeWidth="2" />
      <path d="M960 120 Q1010 120 1060 150" fill="none" stroke={color} strokeOpacity="0.1" strokeWidth="1.5" />
      <path d="M1060 150 Q1010 200 960 200" fill="none" stroke={color} strokeOpacity="0.1" strokeWidth="1.5" />
      <path d="M960 220 Q1010 220 1060 250" fill="none" stroke={color} strokeOpacity="0.1" strokeWidth="1.5" />
      <text x="60" y="120" fontFamily="monospace" fontSize="14" fill={color} fillOpacity="0.08" className="skills-bg__float-1">git commit -m</text>
      <text x="180" y="300" fontFamily="monospace" fontSize="13" fill={color} fillOpacity="0.07" className="skills-bg__float-2">docker build .</text>
      <text x="550" y="400" fontFamily="monospace" fontSize="13" fill={color} fillOpacity="0.06" className="skills-bg__float-3">npm run deploy</text>
    </g>
  );
}