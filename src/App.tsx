import { useMemo, useState } from 'react';
import {
  Scale,
  HeartHandshake,
  GraduationCap,
  Layers,
  Activity,
  Route,
  ArrowRight,
  ChevronDown,
  ChevronRight,
  CircleCheck,
  TriangleAlert,
  Target,
  X,
  ArrowRightLeft,
} from 'lucide-react';
import { AREAS, PROBLEMS, SEVERITY_LABEL, type Area, type Problem } from './data/problems';
import { PHASES, type Phase } from './data/roadmap';
import { PILLARS, PRINCIPLES, FINANCE, type Pillar } from './data/pillars';

const ICONS: Record<string, React.ComponentType<{ size?: number; strokeWidth?: number }>> = {
  scale: Scale,
  'heart-handshake': HeartHandshake,
  'graduation-cap': GraduationCap,
  layers: Layers,
  activity: Activity,
  route: Route,
};

const SECTIONS = [
  { id: 'diagnozis', label: 'Diagnózis' },
  { id: 'pillerek', label: 'Pillerek' },
  { id: 'utemterv', label: 'Ütemterv' },
  { id: 'elv', label: 'Alapelvek' },
  { id: 'koltseg', label: 'Költség' },
  { id: 'osszevetes', label: 'Ma ↔ Holnap' },
];

const HERO_STATS = [
  { value: '17', unit: 'hiba', label: 'azonosított rendszerhiba, 8 területen' },
  { value: '6', unit: 'pillér', label: 'egymásra épülő beavatkozási terület' },
  { value: '8', unit: 'év', label: 'három választási ciklust átívelő ütemterv' },
  { value: '0', unit: 'rangsor', label: 'mérés, ami a tanulást segíti, nem szelektál' },
];

const COMPARE = [
  {
    old: 'Korai felvételi 10 évesen, szülői tőke szerint',
    new: 'Egységes alapiskola 14 éves korig, differenciált tehetséggondozás',
  },
  {
    old: 'A hátrányos helyzetű iskola ugyanannyi forintot kap',
    new: 'Súlyozott finanszírozás: hátrányos ×2,2, SNI ×3',
  },
  {
    old: 'A tanár pótol, helyettesít, adminisztrál – kiég',
    new: '22 tanóra / 40 óra, −50% adminisztráció, életpálya-bér',
  },
  {
    old: 'A bukás az egyetlen eszköz a lemaradásra',
    new: 'Szintre hozó modul, egyéni fejlesztési terv, nyári tábor',
  },
  {
    old: 'A kompetenciamérés adata rejtett, használhatatlan',
    new: 'Diagnosztikus mérés, 2 hét alatti visszajelzés a tanárnak és a szülőnek',
  },
  {
    old: 'A szegregáció jogi eset, nem mérhető rendszerjellemző',
    new: 'Nyilvános szegregációs index minden tankerületre, mix-szabály',
  },
  {
    old: 'Szakképzés = zsákutca 14 évesen',
    new: 'Közös törzs 16 éves korig, kreditszintű átjárás a felsőoktatásba',
  },
  {
    old: 'Bántalmazás: „majd megoldja az osztályfőnök”',
    new: 'Ant bullying protokoll, iskolapszichológus 1:500, éves jóllét-mérés',
  },
];

function SeverityTag({ s }: { s: Problem['severity'] }) {
  return <span className={`sev sev-${s}`}>{s}/5 · {SEVERITY_LABEL[s]}</span>;
}

function ProblemRow({ p }: { p: Problem }) {
  const [open, setOpen] = useState(false);
  return (
    <div className={`problem${open ? ' open' : ''}`}>
      <button className="problem-head" onClick={() => setOpen((o) => !o)} aria-expanded={open}>
        <span className="p-code mono">{p.code}</span>
        <span>
          <span className="p-title">{p.title}</span>
          <span className="p-meta">
            <span className="tag">{p.area}</span>
            <SeverityTag s={p.severity} />
          </span>
        </span>
        <span className="chev">{open ? <ChevronDown size={17} /> : <ChevronRight size={17} />}</span>
      </button>
      {open && (
        <div className="problem-body">
          <div className="field">
            <div className="field-label">Bizonyíték / tünet</div>
            <div className="field-text">{p.evidence}</div>
            <div className="source" style={{ marginTop: 8 }}>{p.source}</div>
          </div>
          <div className="field">
            <div className="field-label">Gyökér-ok</div>
            <div className="field-text">{p.rootCause}</div>
            <div className="field-label" style={{ marginTop: 14 }}>Hatás, ha marad</div>
            <div className="field-text">{p.impact}</div>
          </div>
          <div className="field answer">
            <div className="field-label">OMNI-válasz · {p.pillar}. pillér</div>
            <div className="field-text">{p.answer}</div>
          </div>
        </div>
      )}
    </div>
  );
}

function PillarCard({
  pillar,
  selected,
  onClick,
}: {
  pillar: Pillar;
  selected: boolean;
  onClick: () => void;
}) {
  const Icon = ICONS[pillar.icon] ?? Layers;
  return (
    <button
      className={`pillar${selected ? ' selected' : ''}`}
      onClick={onClick}
      style={
        {
          '--pc': pillar.color,
          '--pacc': pillar.accent,
        } as React.CSSProperties
      }
    >
      <div className="pillar-top">
        <span className="pillar-num mono">{pillar.num}</span>
        <span className="pillar-icon">
          <Icon size={17} strokeWidth={1.9} />
        </span>
      </div>
      <h3>{pillar.name}</h3>
      <p className="pillar-tag">{pillar.tagline}</p>
      <div className="pillar-foot">
        <span>{pillar.changes.length} intézkedés</span>
        <span style={{ display: 'flex', alignItems: 'center', gap: 4, color: selected ? pillar.color : undefined }}>
          {selected ? 'részletek' : 'kibontás'} <ChevronRight size={13} />
        </span>
      </div>
    </button>
  );
}

function PillarDetail({ pillar, onClose }: { pillar: Pillar; onClose: () => void }) {
  return (
    <div className="detail-panel" style={{ '--pc': pillar.color } as React.CSSProperties}>
      <div className="detail-head">
        <div>
          <div className="sec-kicker" style={{ marginBottom: 8 }}>{pillar.num} · pillér</div>
          <h3 className="detail-title">{pillar.name}</h3>
          <p className="sec-sub" style={{ marginTop: 8 }}>{pillar.tagline}</p>
        </div>
        <button className="chip" onClick={onClose} aria-label="Bezárás">
          <X size={13} style={{ verticalAlign: -2, marginRight: 6 }} />
          Bezárás
        </button>
      </div>
      <div className="detail-cols">
        <div>
          <div className="field-label" style={{ marginBottom: 12 }}>Vezérelv</div>
          <ul className="list quote">
            {pillar.principles.map((x) => (
              <li key={x}>{x}</li>
            ))}
          </ul>
        </div>
        <div>
          <div className="field-label" style={{ marginBottom: 12 }}>Konkrét változás</div>
          <ul className="list">
            {pillar.changes.map((x) => (
              <li key={x}>{x}</li>
            ))}
          </ul>
        </div>
      </div>
      <table className="metric-table">
        <thead>
          <tr>
            <th>Mutató</th>
            <th>Ma</th>
            <th>Cél</th>
            <th>Időtáv</th>
          </tr>
        </thead>
        <tbody>
          {pillar.metrics.map((m) => (
            <tr key={m.label}>
              <td>{m.label}</td>
              <td className="metric-from mono">{m.from}</td>
              <td className="metric-to mono">{m.to}</td>
              <td className="mono" style={{ color: 'var(--dim)' }}>{m.horizon}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

function PhaseItem({ phase, index }: { phase: Phase; index: number }) {
  const [open, setOpen] = useState(index < 2);
  return (
    <div className={`tl-item${open ? ' expanded' : ''}`}>
      <div className="tl-left">
        <div className="tl-period mono">{phase.period}</div>
        <div className="tl-name">{phase.name}</div>
        <div className="tl-theme">{phase.theme}</div>
      </div>
      <div className="tl-body">
        <span className="tl-node" />
        <p className="tl-goal">{phase.goal}</p>
        <button className="tl-toggle" onClick={() => setOpen((o) => !o)}>
          {open ? <ChevronDown size={13} /> : <ChevronRight size={13} />}
          {open ? 'Visszacsukás' : `${phase.keyMoves.length} intézkedés + kockázatok`}
        </button>
        {open && (
          <>
            <div className="moves">
              {phase.keyMoves.map((m, i) => (
                <div className="move" key={m.title}>
                  <div className="move-title">
                    <span className="move-idx mono">{String(i + 1).padStart(2, '0')}</span>
                    {m.title}
                  </div>
                  <div className="move-detail">{m.detail}</div>
                  <div className="move-kpi">
                    <Target size={13} style={{ flexShrink: 0, marginTop: 2 }} />
                    <span>{m.kpi}</span>
                  </div>
                </div>
              ))}
            </div>
            <div className="risk-box">
              <div className="risk-title">Kockázatok és kezelésük</div>
              {phase.risks.map((r) => (
                <div className="risk-line" key={r}>
                  <TriangleAlert size={11} style={{ verticalAlign: -1, marginRight: 6 }} />
                  {r}
                </div>
              ))}
            </div>
          </>
        )}
      </div>
    </div>
  );
}

export default function App() {
  const [area, setArea] = useState<Area | 'Mind'>('Mind');
  const [pillarId, setPillarId] = useState<number | null>(1);

  const filtered = useMemo(
    () => (area === 'Mind' ? PROBLEMS : PROBLEMS.filter((p) => p.area === area)),
    [area]
  );
  const selectedPillar = PILLARS.find((p) => p.id === pillarId) ?? null;

  const scrollTo = (id: string) =>
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth', block: 'start' });

  return (
    <>
      <nav className="nav">
        <div className="nav-inner">
          <div className="logo" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
            <span className="logo-mark mono">O</span>
            OMNI
          </div>
          <div className="nav-links">
            {SECTIONS.map((s) => (
              <button key={s.id} className="nav-link" onClick={() => scrollTo(s.id)}>
                {s.label}
              </button>
            ))}
          </div>
          <button className="nav-cta" onClick={() => scrollTo('diagnozis')}>
            Terv megtekintése
          </button>
        </div>
      </nav>

      {/* HERO */}
      <header className="hero">
        <div className="wrap">
          <div className="hero-grid">
            <div>
              <div className="badge">
                <span className="dot" /> Reformterv · v0.1 · 2026
              </div>
              <h1>
                Új iskolarendszer.
                <br />
                Nem javítás – <em>újraépítés</em>.
              </h1>
              <p className="hero-lead">
                Az OMNI a magyar közoktatás 17 rendszerhibájából indul ki, és egy 8 éves, hat pillérre
                épülő tervet ad arra, hogyan lehet méltányos, mérhető és emberi iskolarendszert
                felépíteni. Ez a dokumentum a <b>terv</b> – nem kampányanyag, hanem döntési alap.
              </p>
              <div className="hero-actions">
                <button className="btn btn-primary" onClick={() => scrollTo('diagnozis')}>
                  Hibaleltár megnyitása <ArrowRight size={15} style={{ verticalAlign: -3 }} />
                </button>
                <button className="btn btn-ghost" onClick={() => scrollTo('utemterv')}>
                  8 éves ütemterv
                </button>
              </div>
            </div>
            <div>
              <div className="hero-stats">
                {HERO_STATS.map((s) => (
                  <div className="hstat" key={s.label}>
                    <div className="hstat-value mono">
                      {s.value}
                      <span> {s.unit}</span>
                    </div>
                    <div className="hstat-label">{s.label}</div>
                  </div>
                ))}
              </div>
              <p className="hero-note">
                Az adatok nyilvános hazai és nemzetközi forrásokból (PISA 2022–2025, KSH, OECD,
                PSZ, Oktatási Hivatal) származó, kerekített nagyságrendek. A terv koncepcionális:
                a részletes jogszabályi és költségvetési kidolgozás a 0. fázis feladata.
              </p>
            </div>
          </div>
        </div>
      </header>

      {/* DIAGNÓZIS */}
      <section id="diagnozis">
        <div className="wrap">
          <div className="sec-head">
            <div>
              <div className="sec-kicker">01 · Diagnózis</div>
              <h2 className="sec-title">Mi romlott el – és miért pont ott?</h2>
              <p className="sec-sub">
                17 rendszerhiba, 8 területen. Minden hibánál tünet, gyökér-ok, hatás és az OMNI
                konkrét válasza. Kattints a sorra a kibontáshoz.
              </p>
            </div>
            <div className="mono" style={{ color: 'var(--dim)', fontSize: 12 }}>
              {filtered.length} / {PROBLEMS.length} tétel
            </div>
          </div>

          <div className="filters">
            <button className={`chip${area === 'Mind' ? ' active' : ''}`} onClick={() => setArea('Mind')}>
              Mind
            </button>
            {AREAS.map((a) => (
              <button
                key={a}
                className={`chip${area === a ? ' active' : ''}`}
                onClick={() => setArea(a)}
              >
                {a}
              </button>
            ))}
          </div>

          <div className="problem-list">
            {filtered.map((p) => (
              <ProblemRow key={p.id} p={p} />
            ))}
          </div>
        </div>
      </section>

      {/* PILLÉREK */}
      <section id="pillerek">
        <div className="wrap">
          <div className="sec-head">
            <div>
              <div className="sec-kicker">02 · Architektúra</div>
              <h2 className="sec-title">Hat pillér, egy rendszer</h2>
              <p className="sec-sub">
                A pillérek nem egymás melletti projektek: a méltányosság forrás nélkül ígéret, a
                forrás autonómia nélkül pazarlás, az autonómia mérés nélkül vakrepülés.
              </p>
            </div>
          </div>

          <div className="pillar-grid">
            {PILLARS.map((p) => (
              <PillarCard
                key={p.id}
                pillar={p}
                selected={p.id === pillarId}
                onClick={() => setPillarId(p.id === pillarId ? null : p.id)}
              />
            ))}
          </div>
          {selectedPillar && <PillarDetail pillar={selectedPillar} onClose={() => setPillarId(null)} />}
        </div>
      </section>

      {/* ÜTEMTERV */}
      <section id="utemterv">
        <div className="wrap">
          <div className="sec-head">
            <div>
              <div className="sec-kicker">03 · Ütemterv</div>
              <h2 className="sec-title">8 év, hat szakasz, kiszámítható sorrend</h2>
              <p className="sec-sub">
                A sorrend nem véletlen: előbb mérni és felhatalmazást szerezni, aztán a
                legérzékenyebb intézkedés, majd a tanári szakma, a tartalom, a mérés, végül az
                átjárás. Minden szakasznál KPI és kockázat.
              </p>
            </div>
          </div>
          <div className="timeline">
            {PHASES.map((ph, i) => (
              <PhaseItem key={ph.id} phase={ph} index={i} />
            ))}
          </div>
        </div>
      </section>

      {/* ALAPELVEK */}
      <section id="elv">
        <div className="wrap">
          <div className="sec-head">
            <div>
              <div className="sec-kicker">04 · Alapelvek</div>
              <h2 className="sec-title">A döntések mögötti hat elv</h2>
              <p className="sec-sub">
                Ha egy javaslat ezek bármelyikével ellentmond, akkor a javaslat rossz – nem az elv.
              </p>
            </div>
          </div>
          <div className="principles">
            {PRINCIPLES.map((p) => (
              <div className="principle" key={p.num}>
                <div className="principle-num mono">{p.num}</div>
                <h3>{p.title}</h3>
                <p>{p.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* KÖLTSÉG */}
      <section id="koltseg">
        <div className="wrap">
          <div className="sec-head">
            <div>
              <div className="sec-kicker">05 · Költség és fedezet</div>
              <h2 className="sec-title">Mennyibe kerül, és miből?</h2>
              <p className="sec-sub">
                Nagyságrendi becslés, mai áron. A reform nem „többlet”, hanem átcsoportosítás +
                megtakarítás + uniós forrás: a lemorzsolódás és a bukás költsége ma is megvan,
                csak nem az oktatási tárcánál jelentkezik.
              </p>
            </div>
          </div>
          <table className="finance-table">
            <thead>
              <tr>
                <th>Intézkedés</th>
                <th>Időszak</th>
                <th>Költség (nagyságrend)</th>
                <th>Fedezet</th>
                <th>Várható hatás</th>
              </tr>
            </thead>
            <tbody>
              {FINANCE.map((f) => (
                <tr key={f.item}>
                  <td>{f.item}</td>
                  <td className="mono" style={{ whiteSpace: 'nowrap' }}>{f.period}</td>
                  <td className="cost">{f.cost}</td>
                  <td>{f.source}</td>
                  <td>{f.effect}</td>
                </tr>
              ))}
            </tbody>
          </table>
          <div className="finance-total">
            <div>
              <div className="field-label">Teljes csúcsidőszaki éves többletigény</div>
              <div style={{ color: 'var(--muted)', fontSize: 13, marginTop: 4 }}>
                a 6–8. évben, fokozatos bevezetéssel – a GDP kb. 0,9–1,1%-a
              </div>
            </div>
            <strong className="mono">≈ 1 050 Mrd Ft / év</strong>
          </div>
        </div>
      </section>

      {/* ÖSSZEVETÉS */}
      <section id="osszevetes">
        <div className="wrap">
          <div className="sec-head">
            <div>
              <div className="sec-kicker">06 · Összevetés</div>
              <h2 className="sec-title">Ma ↔ OMNI</h2>
              <p className="sec-sub">
                Ugyanaz a nyolc kérdés, két válasz. Nem elvek, hanem működés.
              </p>
            </div>
          </div>
          <div className="compare">
            <div className="cmp-col">
              <div className="cmp-head">Ma · magyar közoktatás</div>
              {COMPARE.map((c) => (
                <div className="cmp-row" key={c.old}>
                  <X size={14} style={{ flexShrink: 0, marginTop: 3, color: 'var(--bad)' }} />
                  <span>{c.old}</span>
                </div>
              ))}
            </div>
            <div className="cmp-mid">
              <ArrowRightLeft size={20} />
            </div>
            <div className="cmp-col new">
              <div className="cmp-head">OMNI · javaslat</div>
              {COMPARE.map((c) => (
                <div className="cmp-row" key={c.new}>
                  <CircleCheck size={14} style={{ flexShrink: 0, marginTop: 3, color: 'var(--good)' }} />
                  <span>
                    <b>{c.new}</b>
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <footer>
        <div className="wrap foot-inner">
          <div>
            <div className="logo" style={{ marginBottom: 12 }}>
              <span className="logo-mark mono">O</span> OMNI
            </div>
            <div className="mono" style={{ fontSize: 11.5 }}>
              Új iskolarendszer – tervezet v0.1 · 2026. november
            </div>
          </div>
          <p className="foot-note">
            Ez egy koncepcionális tervezet, nyilvános statisztikákra és szakpolitikai elemzésekre
            építve. A számok nagyságrendi becslések, nem hivatalos költségvetési vagy
            jogszabály-tervezetek. A következő lépés a részletes hatásvizsgálat és a társadalmi
            egyeztetés – ez a 0. fázis feladata.
          </p>
        </div>
      </footer>
    </>
  );
}
