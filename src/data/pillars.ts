export interface Pillar {
  id: 1 | 2 | 3 | 4 | 5 | 6;
  num: string;
  name: string;
  tagline: string;
  color: string;
  accent: string;
  icon: string;
  principles: string[];
  changes: string[];
  metrics: { label: string; from: string; to: string; horizon: string }[];
}

export const PILLARS: Pillar[] = [
  {
    id: 1,
    num: '01',
    name: 'Méltányos alap',
    tagline: 'Egységes alapiskola 14 éves korig, szegregáció nélkül.',
    color: '#4f8ef7',
    accent: 'rgba(79,142,247,0.14)',
    icon: 'scale',
    principles: [
      'A korai szelekció nem tehetséggondozás, hanem a szülői tőke újraelosztása.',
      'A hátrány nem a gyerek hibája – a rendszer kötelessége kompenzálni.',
      'Az iskola összetétele nem lehet a szülői verseny díja.',
    ],
    changes: [
      '6 és 8 osztályos felvételi kivezetése (2027-től nincs új felvétel).',
      'Súlyozott mix-szabály: max. 30% hátrányos helyzetű tanuló / osztály.',
      'Kiegyensúlyozott beiskolázás: sorsolás + testvérprioritás + iskolabusz.',
      'Alapfokban nincs évismétlés: szintre hozó modul + nyári tábor.',
      'Kora gyermekkori szűrés 3 éves kortól.',
    ],
    metrics: [
      { label: 'Szegregációs index (iskolák közötti)', from: '0,42', to: '0,25', horizon: '5 év' },
      { label: 'Bukás aránya (1–8. évfolyam)', from: '1,8%', to: '<0,5%', horizon: '4 év' },
      { label: 'Korai iskolaelhagyás', from: '10,5%', to: '6%', horizon: '6 év' },
    ],
  },
  {
    id: 2,
    num: '02',
    name: 'Minden gyerek támogatva',
    tagline: 'Háromszintű támogatás, jóllét, mentálhigiéné.',
    color: '#34c98b',
    accent: 'rgba(52,201,139,0.14)',
    icon: 'heart-handshake',
    principles: [
      'A tanulási zavar nem kategória, hanem támogatási igény.',
      'A jóllét nem „soft” téma: a tanulás előfeltétele.',
      'A szülő partnere az iskolának, nem ellenfele.',
    ],
    changes: [
      'Háromszintű modell: differenciálás → kiscsoport → egyéni.',
      'Iskolapszichológus 1:500, szociális munkás a leszakadó iskolákban.',
      'Kötelező éves jóllét-mérés és ant bullying protokoll.',
      'Nyilvános szegregációs index minden tankerületre.',
      'Iskolai „nulla költség” garancia: eszköz, étkezés, napközi.',
    ],
    metrics: [
      { label: 'Rendszeres iskolai bántalmazás', from: '20%', to: '12%', horizon: '5 év' },
      { label: 'Fejlesztésre várás ideje', from: '6–12 hónap', to: '<30 nap', horizon: '3 év' },
      { label: 'BTM/SNI tanulók ellátottsága', from: 'kb. 60%', to: '95%', horizon: '4 év' },
    ],
  },
  {
    id: 3,
    num: '03',
    name: 'Tanár mint szakember',
    tagline: 'Életpálya, munkaidő, autonómia, rezidencia.',
    color: '#f2a33c',
    accent: 'rgba(242,163,60,0.14)',
    icon: 'graduation-cap',
    principles: [
      'A tanár nem végrehajtó, hanem tervező szakember.',
      'A tanárhiányt nem túlórával, hanem vonzerővel kell megoldani.',
      'A pályakezdő nem magára hagyott kezdő, hanem rezidens.',
    ],
    changes: [
      'Életpálya-bértábla: kezdő = diplomás átlagbér 100%-a.',
      'Max. 22 tanóra / 40 órás munkahét, adminisztráció −50%.',
      '2 éves fizetett rezidencia mentorral.',
      'Hotspot-juttatás (+30% bér, lakhatás) a hátrányos járásokban.',
      'Iskolai tanterv 35%-a szabadon tervezhető.',
    ],
    metrics: [
      { label: 'Tanárbér / diplomás átlagbér', from: '0,68', to: '1,0', horizon: '6 év' },
      { label: 'Betöltetlen álláshely', from: 'kb. 16 000', to: '<4 000', horizon: '8 év' },
      { label: 'Pályaelhagyás 5 éven belül', from: '30%', to: '15%', horizon: '6 év' },
    ],
  },
  {
    id: 4,
    num: '04',
    name: 'Kevesebb, de mélyebb',
    tagline: 'Kompetencia-alapú tanterv, digitális pedagógia.',
    color: '#a78bfa',
    accent: 'rgba(167,139,250,0.14)',
    icon: 'layers',
    principles: [
      'A tanterv kimenet, nem tartalomlista.',
      'A digitális nem eszköz, hanem tanulási környezet.',
      'A mélység többet ér, mint a lefedettség.',
    ],
    changes: [
      'NAT 2.0: 30%-kal kevesebb kötelező tartalom, kompetencia-kimenetek.',
      'Projekt- és tantárgyközi modulok, 75%-os tananyaglefedettség.',
      'Országos digitális platform (tananyag + értékelés + szülői visszajelzés).',
      '1:1 eszközgarancia 5–12. évfolyamon, 4 éves cserével.',
      'Kötelező tanárképzés a digitális módszertanra.',
    ],
    metrics: [
      { label: 'PISA szövegértés', from: '452', to: '480', horizon: '8 év' },
      { label: 'PISA matematika', from: '470', to: '495', horizon: '8 év' },
      { label: 'Tanulói túlterhelés-mutató', from: '100', to: '80', horizon: '5 év' },
    ],
  },
  {
    id: 5,
    num: '05',
    name: 'Mérhető & elszámoltatható',
    tagline: 'Diagnosztikus mérés, hozzáadott érték, nyilvános adat.',
    color: '#22c3d6',
    accent: 'rgba(34,195,214,0.14)',
    icon: 'activity',
    principles: [
      'Mérni a tanulásért kell, nem a rangsorért.',
      'Ami nyilvános, az javítható; ami titkos, az romlik.',
      'Az igazgató autonómiája és felelőssége együtt nő.',
    ],
    changes: [
      'Éves diagnosztikus mérés 2., 4., 6., 8., 10. évfolyamon.',
      'Iskolai hozzáadott érték adatlap (összetétel-korrigált).',
      '5 éves iskolai teljesítménymegállapodás a fenntartóval.',
      'Igazgatót a tantestület választja, a fenntartó erősíti meg.',
      'Nyilvános oktatási dashboard, tiszta rangsor nélkül.',
    ],
    metrics: [
      { label: 'Iskolák nyilvános adatlappal', from: '0%', to: '100%', horizon: '3 év' },
      { label: 'Diagnosztikus visszajelzés ideje', from: 'nincs', to: '2 hét', horizon: '2 év' },
      { label: 'Iskolai kontraktusok', from: '0', to: 'mind', horizon: '4 év' },
    ],
  },
  {
    id: 6,
    num: '06',
    name: 'Átjárás & élethosszig tanulás',
    tagline: 'Súlyozott finanszírozás, szakképzés, felnőtt tanulás.',
    color: '#f2607c',
    accent: 'rgba(242,96,124,0.14)',
    icon: 'route',
    principles: [
      'A finanszírozás az esélyt vásárolja, nem a létszámot.',
      'Nincs zsákutca: minden út vezet tovább.',
      'A tanulás nem ér véget 18 évesen.',
    ],
    changes: [
      'Súlyozott tanulói finanszírozás (hátrányos ×2,2, SNI ×3).',
      '6 éves kiszámítható költségvetési ciklus.',
      'Szakmaválasztás 16 évesen, közös törzs 14–16 között.',
      'Szakképzés → felsőoktatás kreditáthallgatás.',
      'Felnőtt tanulási számla: évi 120 óra, 50% állami támogatás.',
    ],
    metrics: [
      { label: 'Finanszírozási egyenlőtlenség (hátrányos javára)', from: '1,0×', to: '2,2×', horizon: '4 év' },
      { label: 'Felnőttkori tanulásban részvétel', from: '7%', to: '20%', horizon: '8 év' },
      { label: 'Szakképzés → felsőoktatás', from: '5%', to: '12%', horizon: '8 év' },
    ],
  },
];

export const PRINCIPLES = [
  {
    num: '01',
    title: 'Méltányosság nem egyenlőség',
    text: 'Ugyanannyi forint nem ugyanannyi esélyt vásárol. A forrás a legnagyobb szükséghez megy, nem a legjobb átlaghoz.',
  },
  {
    num: '02',
    title: 'A tanár a rendszer magja',
    text: 'Nincs jó iskola jó tanár nélkül. A tanár bére, ideje és autonómiája nem költség, hanem a rendszer alaptőkéje.',
  },
  {
    num: '03',
    title: 'Mérhető, de nem rangsoroló',
    text: 'A rendszernek tudnia kell, hogy fejlődik-e. A mérés a tanulást segíti, nem az iskolák egymás elleni versenyét.',
  },
  {
    num: '04',
    title: 'A szülő partner, a gyerek alany',
    text: 'A gyerek nem a reform tárgya, hanem a célja. A szülő tájékoztatást és beleszólást kap, nem büntetést vagy versenyt.',
  },
  {
    num: '05',
    title: 'Nincs zsákutca',
    text: 'Minden iskolatípusból tovább lehet lépni, minden életkorban tanulni lehet. A rendszer nem szelektál, hanem pályát nyit.',
  },
  {
    num: '06',
    title: 'Kiszámíthatóság és bizalom',
    text: 'A reform nem 4 éves ciklusokban gondolkodik. A törvénybe foglalt időrend és a 6 éves költségvetési ciklus a bizalom alapja.',
  },
];

export interface FinanceRow {
  item: string;
  period: string;
  cost: string;
  source: string;
  effect: string;
}

export const FINANCE: FinanceRow[] = [
  {
    item: 'Tanári életpálya-bérrendezés',
    period: '1–6. év',
    cost: '≈ 520 Mrd Ft / év (fokozatosan)',
    source: 'Költségvetés + a bukás/lemorzsolódás megtakarítása',
    effect: 'A tanárhiány legfőbb oka szűnik meg; a helyettesítési és lemorzsolódási költség csökken',
  },
  {
    item: 'Súlyozott finanszírozás + felzárkóztatási alap',
    period: '1–4. év',
    cost: '≈ 180 Mrd Ft / év',
    source: 'Átcsoportosítás a jelenlegi normatívából + EU ESZA+',
    effect: 'A hátrányos iskolák valódi többlettámogatást kapnak',
  },
  {
    item: 'Személyes támogatás (pszichológus, szociális munkás, gyógypedagógus)',
    period: '2–6. év',
    cost: '≈ 95 Mrd Ft / év',
    source: 'Költségvetés + szakképzési hozzájárulás átirányítása',
    effect: 'A jóllét és a tanulási zavarok kezelése rendszerszinten',
  },
  {
    item: 'Digitális platform + 1:1 eszköz',
    period: '2–6. év',
    cost: '≈ 70 Mrd Ft beruházás + 25 Mrd Ft / év üzem',
    source: 'EU RRF/Digital Europe + hazai költségvetés',
    effect: 'Digitális szakadék csökkenése, tanári adminisztráció csökkenése',
  },
  {
    item: 'Rezidencia- és tanárképzési program',
    period: '1–5. év',
    cost: '≈ 40 Mrd Ft / év',
    source: 'Felsőoktatási forrás + költségvetés',
    effect: 'Utánpótlás, pályaelhagyás csökkenése',
  },
  {
    item: 'Mérési és adatvagyon-rendszer',
    period: '1–3. év',
    cost: '≈ 12 Mrd Ft / év',
    source: 'Költségvetés',
    effect: 'A döntések adatra épülnek, a szülő visszajelzést kap',
  },
  {
    item: 'Felnőtt tanulási számla',
    period: '5–8. év',
    cost: '≈ 110 Mrd Ft / év',
    source: 'Szakképzési hozzájárulás + EU ESZA+',
    effect: 'Felnőttkori tanulás, munkaerőpiaci átállás',
  },
];
