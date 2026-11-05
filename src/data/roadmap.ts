export interface Phase {
  id: string;
  name: string;
  period: string;
  theme: string;
  goal: string;
  keyMoves: { title: string; detail: string; kpi: string }[];
  risks: string[];
}

export const PHASES: Phase[] = [
  {
    id: 'ph0',
    name: '0. Felmérés & felhatalmazás',
    period: '0–6 hónap',
    theme: '„Előbb mérj, aztán nyúlj hozzá.”',
    goal:
      'Létrehozni a rendszer jelenlegi állapotának hiteles, nyilvános pillanatképét, és társadalmi felhatalmazást szerezni a változtatáshoz.',
    keyMoves: [
      {
        title: 'Nemzeti Oktatási Adatvagyon (NOA)',
        detail:
          'Minden iskola egységes adatlapon közöl: létszám, szocioökonómiai összetétel, tanárhiány, tanulási eredmény, jóllét. Nyilvános, géppel olvasható.',
        kpi: '100% iskola adatot szolgáltat; első nyilvános dashboard 6 hónapon belül',
      },
      {
        title: 'Szegregációs és tanárhiány-térkép',
        detail: 'Településszintű, iskolai szintű indexek; a legrosszabb 10% nevesítve, célzott programmal.',
        kpi: 'Szegregációs index minden tankerületre, évente frissítve',
      },
      {
        title: 'Társadalmi kerekasztal',
        detail:
          'Szülők, tanárok, diákok, fenntartók, munkáltatók, roma önkormányzatok – 6 hónapos nyilvános tárgyalás, amelynek kimenete a reform mandátuma.',
        kpi: 'Írásos társadalmi megállapodás, legalább 4 párti támogatással',
      },
      {
        title: 'Jogszabályi előkészítés',
        detail: 'Új köznevelési kerettörvény tervezete, hatásvizsgálattal és 30 napos társadalmi egyeztetéssel.',
        kpi: 'Hatásvizsgálat: minden intézkedésnek mérhető, előrejelzett hatása',
      },
    ],
    risks: [
      'Adat nyilvánossága ellenállásba ütközik – kezelés: anonimizált, iskolai szintű publikáció, tanulói személyes adat nélkül.',
      'A reformpolitikai csatározásba fullad – kezelés: szakmai grémium + fix, törvénybe foglalt időrend.',
    ],
  },
  {
    id: 'ph1',
    name: '1. Méltányosság & alapkészségek',
    period: '1–3. év',
    theme: '„Minden gyerek 14 éves korig egy hajón.”',
    goal:
      'Megszüntetni a korai szelekciót, és minden iskolába bevinni a felzárkóztatás intézményét. Ez a legérzékenyebb, legtöbb politikai ellenállást kiváltó szakasz.',
    keyMoves: [
      {
        title: 'Egységes alapiskola 14 éves korig',
        detail:
          'A 6 és 8 osztályos gimnáziumi felvételi fokozatos kivezetése (2027-től nincs új felvétel, a meglévő évfolyamok kifutnak). Helyette differenciált csoportok iskolán belül, emelt szintű műhelyekkel.',
        kpi: '0 új korai felvételi; a szocioökonómiai szegregációs index 20%-kal csökken 5 év alatt',
      },
      {
        title: 'Súlyozott iskolai mix-szabály',
        detail:
          'Egy osztályban max. 30% hátrányos helyzetű tanuló (a helyi arányokhoz igazítva); a felvételi helyett „kiegyensúlyozott beiskolázás” – központi sorsolás + testvérprioritás + közlekedési támogatás.',
        kpi: 'Egy iskolán belüli szegregációs index < 0,25',
      },
      {
        title: 'Szintre hozó modell (nincs bukás alapfokban)',
        detail:
          'Évismétlés helyett 6–8 hetes intenzív modul, egyéni fejlesztési terv, nyári 3 hetes felzárkóztató tábor. A szülő heti visszajelzést kap.',
        kpi: 'Bukás aránya < 0,5% az 1–8. évfolyamon; a lemorzsolódás 10% → 6%',
      },
      {
        title: 'Kora gyermekkori szűrés 3 éves kortól',
        detail: 'Beszéd-, mozgás-, szociális fejlődés szűrése, bölcsőde–óvoda–iskola átmenet egyéni „iskolastartó” tervvel.',
        kpi: 'A fejlesztésre szorulók 90%-a 5 éves kor előtt azonosítva',
      },
    ],
    risks: [
      'A középosztály félti a „jó iskolát” – kezelés: a differenciált tehetséggondozás erősítése, nyilvános „hozzáadott érték” mutató, ami a jó tanárt díjazza, nem a jó összetételt.',
      'Az egyházi/magániskolák kimaradnak a mix-szabályból – kezelés: a közfinanszírozás feltétele a szabály betartása.',
    ],
  },
  {
    id: 'ph2',
    name: '2. Tanári szakma újjáépítése',
    period: '1–5. év',
    theme: '„A tanár legyen szakember, ne végrehajtó.”',
    goal:
      'A tanárhiányt nem „kampánnyal”, hanem életpályával, munkaidővel és autonómiával kezelni. Ez a reform költséges és hosszú megtérülésű magja.',
    keyMoves: [
      {
        title: 'Életpálya-törvény',
        detail:
          'Országos bértábla: kezdő = diplomás átlagbér 100%-a, 10 év után 150%, 20 év után 180%. Hotspot-juttatás (bér +30%) a hátrányos járásokban, lakhatási támogatással.',
        kpi: 'Tanárbér / diplomás átlagbér ≥ 1,0; a pályára jelentkezők száma +50%',
      },
      {
        title: 'Munkaidő-keret: max. 22 tanóra / 40 óra',
        detail: 'A tanórán kívüli adminisztráció 50%-os csökkentése digitális ügyintézéssel. A helyettesítés külön díjazott, nem „ingyen”.',
        kpi: 'Heti adminisztratív idő < 4 óra',
      },
      {
        title: 'Rezidencia-program',
        detail:
          '5+1 éves képzés + 2 éves fizetett gyakorlat mentorral. A gyakorlóiskola-hálózat 300 intézményre bővül, a mentor külön juttatást kap.',
        kpi: 'Pályaelhagyás az első 5 évben 30% → 15%',
      },
      {
        title: 'Szakmai autonómia',
        detail:
          'Iskolai tanterv 35%-a szabadon tervezhető; a tantestület dönt a módszertanról, tankönyvről, értékelésről. Szakmai kamara javaslati és vétójoggal a tanügyi döntésekben.',
        kpi: 'Az iskolák 80%-a él a szabad kerettel',
      },
    ],
    risks: [
      'Bérköltség fiskális terhe – kezelés: 6 éves fokozatos bevezetés + a lemorzsolódás és a bukás megtakarításából finanszírozott rész.',
      'A tanárképző egyetemek ellenállása – kezelés: közös akkreditáció, rezidenciahelyek finanszírozása.',
    ],
  },
  {
    id: 'ph3',
    name: '3. Tartalom, támogatás, jóllét',
    period: '2–6. év',
    theme: '„Kevesebb anyag, több gondolkodás, több segítség.”',
    goal:
      'A tantervi és támogatási rendszer átalakítása úgy, hogy a tanárnak teljesíthető legyen, a gyereknek pedig ne kelljen „másodállásban” tanulnia.',
    keyMoves: [
      {
        title: 'Kompetencia-alapú NAT 2.0',
        detail:
          'Kimeneti követelmények életkoronként, 30%-kal kevesebb kötelező tartalom, projekt- és tantárgyközi modulok. A tankönyv nem lefedi a NAT-ot, hanem eszköz hozzá.',
        kpi: 'Tananyaglefedettség 75%; tanulói túlterhelés-mutató 20%-kal csökken',
      },
      {
        title: 'Háromszintű támogatási modell',
        detail:
          '1. szint: minden osztályban differenciálás. 2. szint: 12 fős kiscsoportos fejlesztés (tanulási zavar, BTM). 3. szint: egyéni, szakértői bizottság alapján. Tankerületi szakmai központ minden tankerületben.',
        kpi: 'Fejlesztésre váró gyerek várakozási ideje < 30 nap',
      },
      {
        title: 'Iskolai jóllét-csomag',
        detail:
          'Kötelező éves jóllét-mérés, ant bullying protokoll, iskolapszichológus 1:500 arányban, szociális munkás a leszakadó iskolákban, „szünet – szabad játék – mozgás” védett idősávok.',
        kpi: 'Rendszeres bántalmazás 20% → 12%; iskolai kötődés +15 pont',
      },
      {
        title: 'Digitális tanulási platform',
        detail:
          'Egy országos, interoperábilis platform: tananyag, értékelés, szülői visszajelzés, tanári tudásbázis. 1:1 eszközgarancia 5–12. évfolyamon, eszközcsere 4 évente, kötelező tanárképzéssel.',
        kpi: 'A tanárok 90%-a használja hetente; digitális kompetencia az EU-átlag felett',
      },
    ],
    risks: [
      'Tankönyvpiaci és tartalomgyártói ellenérdek – kezelés: nyílt, közfinanszírozott tananyagtár, verseny a minőségre.',
      'A jóllét-mérés újabb adminisztrációvá válik – kezelés: beépül a meglévő adatkörbe, nem új űrlap.',
    ],
  },
  {
    id: 'ph4',
    name: '4. Mérés & elszámoltathatóság',
    period: '3–6. év',
    theme: '„Ami mérhető, az javítható; ami nyilvános, az számon kérhető.”',
    goal:
      'Visszaadni a rendszernek a visszacsatolást: a diáknak, a tanárnak, a szülőnek és a fenntartónak is láthatóvá tenni, mi történik.',
    keyMoves: [
      {
        title: 'Éves mérési pontok',
        detail:
          '2., 4., 6., 8., 10. évfolyamon országos, adaptív kompetenciamérés – nem szelekciós, hanem diagnosztikus céllal. Az eredmény 2 héten belül a tanárnál és a szülőnél.',
        kpi: 'Minden tanuló évente 1 diagnosztikus visszajelzést kap',
      },
      {
        title: 'Hozzáadott érték adatlap',
        detail:
          'Minden iskola nyilvános „fejlődési jelentést” kap az összetétel korrigálásával. A jó tanárt nem a jó osztály, hanem a valódi fejlődés alapján lehet felismerni.',
        kpi: '100% iskola nyilvános hozzáadott-érték adatlappal',
      },
      {
        title: 'Iskolai teljesítménymegállapodás',
        detail:
          'Az igazgató 5 éves kontraktust köt a fenntartóval: célok, erőforrások, következmények. Az igazgatót a tantestület választja, a fenntartó erősíti meg. Rossz eredmény → támogatás, nem bezárás.',
        kpi: 'Minden iskola rendelkezik 5 éves kontraktussal',
      },
      {
        title: 'Nyilvános oktatási dashboard',
        detail: 'Iskolai szintű, anonimizált adatok: összetétel, tanárhiány, jóllét, hozzáadott érték. Szülői döntéstámogatás, nem rangsor.',
        kpi: 'Évente 100k+ látogató; a szülők 70%-a ismeri a saját iskolája adatlapját',
      },
    ],
    risks: [
      'A mérés rangsorrá és újra szelekcióvá válik – kezelés: hozzáadott érték + szöveges kontextus kötelező, tiszta rangsor közlése tilos.',
      'Adatvédelmi aggályok – kezelés: GDPR-tervezés, tanulói adat anonim, szülői hozzáférés saját gyermekhez.',
    ],
  },
  {
    id: 'ph5',
    name: '5. Jövőkép: átjárás & élethosszig tanulás',
    period: '5–8. év',
    theme: '„Az iskola nem 18 éves korig tartó zsákutca.”',
    goal:
      'A szakképzés presztízsének és átjárhatóságának megteremtése, valamint a felnőttkori tanulás intézményesítése.',
    keyMoves: [
      {
        title: 'Közös törzs 14–16 éves korig',
        detail:
          'A szakmaválasztás 16 éves korra kerül; a 14–16 közötti szakasz közös alapkészség + szakmai orientáció. A duális képzés 16-tól indul, kamarai garanciával.',
        kpi: 'Szakmaváltás 25 éves kor előtt < 20%; szakképzési lemorzsolódás 15% → 8%',
      },
      {
        title: 'Szakképzés–felsőoktatás áthallgatás',
        detail:
          'A szakmai vizsga kreditként beszámít a szakirányú alapképzésbe; „felfelé lépcső” ösztöndíj a szakképzésből továbbtanulóknak.',
        kpi: 'A szakképzésből felsőoktatásba lépők aránya 5% → 12%',
      },
      {
        title: 'Felnőtt tanulási számla',
        detail:
          'Minden 18 év feletti állampolgár évi 120 tanulási órára jogosult, 50% állami támogatással; mikrotanúsítvány-keretrendszer, digitális portfólió.',
        kpi: 'Felnőttkori tanulásban való részvétel 7% → 20% (EU-átlag felett)',
      },
      {
        title: 'Regionális tanulási központok',
        detail: 'A meglévő iskolák bázisán, esti és hétvégi képzésekkel, a helyi munkáltatókkal egyeztetett kínálattal.',
        kpi: 'Minden járásban elérhető központ (max. 30 perc utazás)',
      },
    ],
    risks: [
      'A felnőttképzési piac kanibalizálása – kezelés: minősítési rendszer, a magánszolgáltatók akkreditált partnerek.',
      'Kamarai és ágazati ellenérdek – kezelés: közös finanszírozás és közös képzési alap.',
    ],
  },
];
