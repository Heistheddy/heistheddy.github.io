import { useState } from 'react';
import './Skills.css';

const SKILLS = [
  {
    category: 'Engineering',
    icon: '</>',
    color: '#06B6D4',
    desc: 'Full-stack development, DevOps, and quality engineering.',
    items: [
      { name: 'JavaScript',     devicon: 'javascript',    color: '#F7DF1E' },
      { name: 'TypeScript',     devicon: 'typescript',    color: '#3178C6' },
      { name: 'React',          devicon: 'react',         color: '#61DAFB' },
      { name: 'Node.js',        devicon: 'nodejs',        color: '#68A063' },
      { name: 'Express',        devicon: 'express',       color: '#ffffff' },
      { name: 'REST APIs',      devicon: null,            color: '#06B6D4', emoji: '🔌' },
      { name: 'MongoDB',        devicon: 'mongodb',       color: '#47A248' },
      { name: 'Git',            devicon: 'git',           color: '#F05032' },
      { name: 'GitHub Actions', devicon: 'github',        color: '#ffffff' },
      { name: 'Docker',         devicon: 'docker',        color: '#2496ED' },
      { name: 'DevOps',         devicon: null,            color: '#7C3AED', emoji: '⚙️' },
      { name: 'QA Testing',     devicon: null,            color: '#10B981', emoji: '🧪' },
    ],
  },
  {
    category: 'Data & BI',
    icon: '📊',
    color: '#7C3AED',
    desc: 'Data science, business intelligence, and analytics engineering.',
    items: [
      { name: 'PostgreSQL',   devicon: 'postgresql', color: '#336791' },
      { name: 'Python',       devicon: 'python',     color: '#3776AB' },
      { name: 'Pandas',       devicon: 'pandas',     color: '#150458' },
      { name: 'Tableau',      devicon: null,         color: '#E97627', emoji: '📈' },
      { name: 'Power BI',     devicon: null,         color: '#F2C811', emoji: '📊' },
      { name: 'Google Analytics', devicon: null,     color: '#E37400', emoji: '📉' },
      { name: 'A/B Testing',  devicon: null,         color: '#7C3AED', emoji: '🔬' },
      { name: 'dbt',          devicon: null,         color: '#FF694A', emoji: '🔧' },
      { name: 'Looker',       devicon: null,         color: '#4285F4', emoji: '👁️' },
      { name: 'AWS',          devicon: 'amazonwebservices', color: '#FF9900' },
      { name: 'Kubernetes',   devicon: 'kubernetes', color: '#326CE5' },
      { name: 'Jenkins',      devicon: 'jenkins',    color: '#D33833' },
    ],
  },
  {
    category: 'Design & Dev',
    icon: '✏️',
    color: '#EC4899',
    desc: 'UI/UX design, web development, and project delivery.',
    items: [
      { name: 'Figma',        devicon: 'figma',     color: '#F24E1E' },
      { name: 'HTML',         devicon: 'html5',     color: '#E34F26' },
      { name: 'CSS',          devicon: 'css3',      color: '#1572B6' },
      { name: 'Responsive',   devicon: null,        color: '#EC4899', emoji: '📱' },
      { name: 'WordPress',    devicon: 'wordpress', color: '#21759B' },
      { name: 'Flutterwave',  devicon: null,        color: '#F5A623', emoji: '🌊' },
      { name: 'Excel',        devicon: null,        color: '#217346', emoji: '📋' },
      { name: 'Jira',         devicon: 'jira',      color: '#0052CC' },
      { name: 'Confluence',   devicon: null,        color: '#172B4D', emoji: '📝' },
      { name: 'Tech Docs',    devicon: null,        color: '#EC4899', emoji: '📄' },
    ],
  },
  {
    category: 'Product',
    icon: '🚀',
    color: '#F59E0B',
    desc: 'Product analytics, research, and roadmap ownership.',
    items: [
      { name: 'Product Analytics', devicon: null, color: '#F59E0B', emoji: '📊' },
      { name: 'Funnel Analysis',   devicon: null, color: '#EF4444', emoji: '🔽' },
      { name: 'Feature Scoping',   devicon: null, color: '#10B981', emoji: '🎯' },
      { name: 'User Research',     devicon: null, color: '#06B6D4', emoji: '🔍' },
      { name: 'KPI Definition',    devicon: null, color: '#7C3AED', emoji: '📌' },
      { name: 'Roadmapping',       devicon: null, color: '#F59E0B', emoji: '🗺️' },
      { name: 'Stakeholders',      devicon: null, color: '#EC4899', emoji: '🤝' },
      { name: 'Jira',              devicon: 'jira',   color: '#0052CC' },
      { name: 'Confluence',        devicon: null, color: '#172B4D', emoji: '📝' },
      { name: 'Agile',             devicon: null, color: '#F59E0B', emoji: '⚡' },
    ],
  },
  {
    category: 'Fintech',
    icon: '₦',
    color: '#10B981',
    desc: 'Payment systems, KYC, escrow, and financial crime awareness.',
    items: [
      { name: 'Paystack',       devicon: null, color: '#00C3F7', emoji: '💳' },
      { name: 'Flutterwave',    devicon: null, color: '#F5A623', emoji: '🌊' },
      { name: 'KYC Workflows',  devicon: null, color: '#10B981', emoji: '🪪' },
      { name: 'Escrow Arch.',   devicon: null, color: '#06B6D4', emoji: '🔐' },
      { name: 'POS Systems',    devicon: null, color: '#7C3AED', emoji: '🖥️' },
      { name: 'Fraud Signals',  devicon: null, color: '#EF4444', emoji: '🛡️' },
      { name: 'Financial Crime',devicon: null, color: '#F59E0B', emoji: '⚖️' },
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
      <SkillsBg color={skill.color} category={skill.category} />

      <div className="section__inner skills__inner">
        <div className="section__label">Toolkit</div>
        <h2 className="section__heading">
          Skills &amp; <span className="gradient-text">technologies</span>
        </h2>

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

        <div className="skills__panel" key={active}>
          <p className="skills__panel-cat" style={{ color: skill.color }}>{skill.category}</p>
          <p className="skills__panel-desc">{skill.desc}</p>

          <div className="skills__shields">
            {skill.items.map((item, i) => (
              <Shield key={item.name} item={item} index={i} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function Shield({ item, index }) {
  return (
    <div
      className="shield"
      style={{ '--shield-color': item.color, animationDelay: `${index * 0.05}s` }}
    >
      <div className="shield__scene">
        <div className="shield__box">
          {item.devicon ? (
            <i className={`devicon-${item.devicon}-plain colored`} style={{ fontSize: '1.9rem' }} />
          ) : (
            <span className="shield__emoji">{item.emoji}</span>
          )}
        </div>
      </div>
      <span className="shield__name">{item.name}</span>
    </div>
  );
}

/* ── Animated SVG background ── */
function SkillsBg({ color, category }) {
  return (
    <div className="skills-bg" aria-hidden>
      <svg className="skills-bg__svg" viewBox="0 0 1200 500" preserveAspectRatio="xMidYMid slice" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <radialGradient id="bgGlow" cx="50%" cy="50%" r="60%">
            <stop offset="0%"   stopColor={color} stopOpacity="0.1" />
            <stop offset="100%" stopColor={color} stopOpacity="0"   />
          </radialGradient>
        </defs>
        <rect width="1200" height="500" fill="url(#bgGlow)" />
        {Array.from({ length: 12 }).map((_, i) => (
          <line key={`v${i}`} x1={i*100} y1="0" x2={i*100} y2="500"
            stroke={color} strokeOpacity="0.04" strokeWidth="1" />
        ))}
        {Array.from({ length: 6 }).map((_, i) => (
          <line key={`h${i}`} x1="0" y1={i*100} x2="1200" y2={i*100}
            stroke={color} strokeOpacity="0.04" strokeWidth="1" />
        ))}
        {category === 'Engineering' && <FrontendBg color={color} />}
        {category === 'Data & BI'   && <BackendBg  color={color} />}
        {category === 'Design & Dev'&& <DesignBg   color={color} />}
        {category === 'Product'     && <ProductBg  color={color} />}
        {category === 'Fintech'     && <FintechBg  color={color} />}
      </svg>
    </div>
  );
}

function FrontendBg({ color }) {
  return (
    <g>
      <rect x="900" y="60" width="240" height="170" rx="8" fill="none" stroke={color} strokeOpacity="0.1" strokeWidth="1.5"/>
      <rect x="900" y="60" width="240" height="28" rx="8" fill={color} fillOpacity="0.06"/>
      <circle cx="916" cy="74" r="5" fill={color} fillOpacity="0.25"/>
      <circle cx="932" cy="74" r="5" fill={color} fillOpacity="0.15"/>
      <circle cx="948" cy="74" r="5" fill={color} fillOpacity="0.1"/>
      {[105,120,135,150,165,180,195].map((y,i)=>(
        <rect key={y} x="916" y={y} width={[80,120,60,100,90,70,110][i]} height="6" rx="3"
          fill={color} fillOpacity={i%2===0?0.12:0.06}/>
      ))}
      <text x="80"  y="120" fontFamily="monospace" fontSize="22" fill={color} fillOpacity="0.08" className="skills-bg__float-1">&lt;div&gt;</text>
      <text x="200" y="280" fontFamily="monospace" fontSize="18" fill={color} fillOpacity="0.07" className="skills-bg__float-2">&lt;/&gt;</text>
      <text x="550" y="80"  fontFamily="monospace" fontSize="15" fill={color} fillOpacity="0.06" className="skills-bg__float-3">const App = () =&gt; {'{}'}</text>
    </g>
  );
}

function BackendBg({ color }) {
  return (
    <g>
      {[60,120,180,240,300].map((y,i)=>(
        <g key={y}>
          <rect x="880" y={y} width="240" height="40" rx="4" fill="none" stroke={color} strokeOpacity="0.1" strokeWidth="1.2"/>
          <rect x="880" y={y} width={[180,140,200,160,120][i]} height="40" rx="4" fill={color} fillOpacity={0.04+i*0.01}/>
          <text x="894" y={y+25} fontFamily="monospace" fontSize="11" fill={color} fillOpacity="0.25">{['SELECT','GROUP BY','WHERE','JOIN','ORDER BY'][i]}</text>
        </g>
      ))}
      <text x="60"  y="140" fontFamily="monospace" fontSize="15" fill={color} fillOpacity="0.08" className="skills-bg__float-1">df.groupby()</text>
      <text x="180" y="320" fontFamily="monospace" fontSize="13" fill={color} fillOpacity="0.07" className="skills-bg__float-2">200 OK • 42ms</text>
      <text x="520" y="400" fontFamily="monospace" fontSize="13" fill={color} fillOpacity="0.06" className="skills-bg__float-3">p_value = 0.03</text>
    </g>
  );
}

function DesignBg({ color }) {
  return (
    <g>
      <rect x="880" y="60" width="260" height="180" rx="12" fill="none" stroke={color} strokeOpacity="0.12" strokeWidth="1.5"/>
      {[90,120,150,180,210].map((y,i)=>(
        <rect key={y} x="900" y={y} width={[140,100,160,80,120][i]} height="10" rx="5"
          fill={color} fillOpacity={0.06+i*0.02}/>
      ))}
      <circle cx="920" cy="80" r="10" fill="none" stroke={color} strokeOpacity="0.2" strokeWidth="1.5"/>
      <text x="80"  y="130" fontFamily="monospace" fontSize="16" fill={color} fillOpacity="0.08" className="skills-bg__float-1">display: flex;</text>
      <text x="200" y="300" fontFamily="monospace" fontSize="13" fill={color} fillOpacity="0.07" className="skills-bg__float-2">border-radius: 8px</text>
      <text x="540" y="90"  fontFamily="monospace" fontSize="13" fill={color} fillOpacity="0.06" className="skills-bg__float-3">@media (max-width)</text>
    </g>
  );
}

function ProductBg({ color }) {
  return (
    <g>
      {[80,160,240,320].map((y,i)=>(
        <g key={y}>
          <circle cx="920" cy={y} r="10" fill={color} fillOpacity="0.15"/>
          {i<3 && <line x1="920" y1={y+10} x2="920" y2={y+70} stroke={color} strokeOpacity="0.1" strokeWidth="2"/>}
          <rect x="940" y={y-8} width={[120,90,140,80][i]} height="16" rx="4" fill={color} fillOpacity="0.06"/>
        </g>
      ))}
      <text x="80"  y="130" fontFamily="monospace" fontSize="15" fill={color} fillOpacity="0.08" className="skills-bg__float-1">conversion: 4.2%</text>
      <text x="200" y="320" fontFamily="monospace" fontSize="13" fill={color} fillOpacity="0.07" className="skills-bg__float-2">DAU +18% WoW</text>
      <text x="530" y="90"  fontFamily="monospace" fontSize="13" fill={color} fillOpacity="0.06" className="skills-bg__float-3">churn_rate = 0.8%</text>
    </g>
  );
}

function FintechBg({ color }) {
  return (
    <g>
      {[80,150,220,290,360].map((y,i)=>(
        <g key={y}>
          <circle cx="900" cy={y} r="8" fill={color} fillOpacity="0.12"/>
          <line x1="908" y1={y} x2="1060" y2={y} stroke={color} strokeOpacity="0.07" strokeWidth="1" strokeDasharray="5 4"/>
          <circle cx="1068" cy={y} r="8" fill={color} fillOpacity="0.08"/>
          <rect x="922" y={y-6} width={[60,80,50,70,55][i]} height="5" rx="2" fill={color} fillOpacity="0.07"/>
        </g>
      ))}
      <text x="60"  y="130" fontFamily="monospace" fontSize="20" fill={color} fillOpacity="0.1"  className="skills-bg__float-1">₦ 0.00</text>
      <text x="200" y="320" fontFamily="monospace" fontSize="14" fill={color} fillOpacity="0.07" className="skills-bg__float-2">VERIFIED ✓</text>
      <text x="560" y="90"  fontFamily="monospace" fontSize="13" fill={color} fillOpacity="0.06" className="skills-bg__float-3">escrow_hold()</text>
    </g>
  );
}