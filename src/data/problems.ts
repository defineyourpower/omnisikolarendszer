export type Severity = 1 | 2 | 3 | 4 | 5;

export const AREAS = [
  'Méltányosság & szelekció',
  'Tanár & szakma',
  'Tananyag & módszer',
  'Mérés & elszámoltathatóság',
  'Irányítás & finanszírozás',
  'Digitális & jövőképesség',
  'Jóllét & mentálhigiéné',
  'Szakképzés & átjárás',
] as const;

export type Area = (typeof AREAS)[number];

export interface Problem {
  id: string;
  code: string;
  area: Area;
  severity: Severity;
  title: string;
  evidence: string;
  source: string;
  rootCause: string;
  impact: string;
  answer: string;
  pillar: 1 | 2 | 3 | 4 | 5 | 6;
}

export const PROBLEMS: Problem[] = [
  {
    id: 'p1',
    code: 'H-01',
    area: 'Méltányosság & szelekció',
    severity: 5,
    title: 'A korai szelekció a legtehetségesebb és a leghátrányosabb gyerekeket is szétválasztja',
    evidence:
      'A 10 és 12 éves kori felvételi (6 és 8 osztályos gimnázium) Európában szinte egyedülállóan korai. A magyar iskolarendszer társadalmi-gazdasági szempontból az egyik legerősebben szegregált az OECD-n belül: az iskolák közötti különbségek nagy részét a tanulók családi háttere magyarázza, nem a tanítás minősége.',
    source: 'PISA 2022–2025 országjelentés, OECD „Equity in education” mutatók',
    rootCause:
      'A jogszabály lehetővé teszi a tanulók kiválogatását 10 éves korban, miközben nincs érdemi szabály a szocioökonómiai összetétel kiegyensúlyozására. A szabad iskolaválasztás + körzethatárok + felvételi együtt „versenyhelyzetet” csinál, ahol a szülői tőke dönt.',
    impact:
      'A hátrányos helyzetű gyerek tanulótárs-hatása (peer effect) drasztikusan romlik, a tehetséggondozás pedig a városi középosztály kiváltságává válik. A különbségek 10 éves korban rögzülnek, később csak drágán korrigálhatók.',
    answer:
      'Egységes alapiskola 14 éves korig, a korai felvételi kivezetése, szocioökonómiai mix-szabály (max. 30% hátrányos helyzetű egy osztályban), differenciált csoportok az iskolán belül.',
    pillar: 1,
  },
  {
    id: 'p2',
    code: 'H-02',
    area: 'Méltányosság & szelekció',
    severity: 5,
    title: 'Az iskolai szegregáció intézményesült, nem „baleset”',
    evidence:
      'Számos tankerületben működik gyakorlatilag elkülönített „roma osztály” vagy telephelyi szegregáció; a roma tanulók aránya egyes iskolákban 80% feletti, miközben a környező iskolákban néhány százalék. A jogorvoslat egyéni panaszra épül, rendszerszintű mérés nincs.',
    source: 'Egyenlő Bánásmód Hatóság / AJBH jelentések, Civilek a szegregáció ellen esettanulmányok',
    rootCause:
      'Nincs kötelező, iskolai szintű szegregációs adatközlés és nincs következménye a szegregáló felvételi gyakorlatnak. A fenntartó (tankerület) egyszerre „versenyezteti” és „felügyeli” az iskoláit.',
    impact:
      'A leszakadás nemzedékekre öröklődik. Az érintett gyerekek PISA-szintű kompetenciái 2–3 évfolyammal maradnak el, ami közvetlenül vezet korai iskolaelhagyáshoz.',
    answer:
      'Országos szegregációs index (nyilvános), mix-szabály, iskolabusz + ingyenes étkezés + napközi, „szegregációmentes felvételi” tanúsítvány a fenntartói finanszírozás feltételeként.',
    pillar: 1,
  },
  {
    id: 'p3',
    code: 'H-03',
    area: 'Méltányosság & szelekció',
    severity: 4,
    title: 'A korai iskolaelhagyás és a bukás első osztályban tetőzik',
    evidence:
      'Az évismétlők aránya az első évfolyamon a legmagasabb (≈4,5%), miközben a többi évfolyamon 0,7–1,9% között mozog. A korai iskolaelhagyók aránya tartósan 10% feletti, a szakképzésben ennél jóval magasabb.',
    source: 'KSH oktatási statisztika, Európai Szemeszter országjelentés',
    rootCause:
      'Az iskolaérettség és a beiskolázás adminisztratív szabályozása, a tanulási zavarok késői felismerése, és az, hogy a bukás az iskola egyetlen rendelkezésre álló „eszköze” a lemaradásra.',
    impact:
      'A bukás önbeteljesítő: a bukott gyerek 3–4× nagyobb eséllyel hagyja el az iskolát. Depriváció + későbbi munkanélküliség + szociális költség.',
    answer:
      'Az alapfokban nincs évismétlés: helyette szintre hozó modul, egyéni fejlesztési terv és nyári felzárkóztatás. Kora gyermekkori szűrés 3 éves kortól.',
    pillar: 2,
  },
  {
    id: 'p4',
    code: 'T-01',
    area: 'Tanár & szakma',
    severity: 5,
    title: 'A tanárhiány már nem mennyiségi, hanem minőségi és területi válság',
    evidence:
      'A Pedagógusok Szakszervezete szerint ≈16 ezer pedagógus hiányzik; a nyugdíjas korú tanárok aránya 15% feletti, a 30 év alattiaké 7% alatti. A hiány földrajzilag koncentrált: a hátrányos helyzetű járásokban a legnagyobb.',
    source: 'PSZ közlemény (2025), KSH korfa, Oktatási Hivatal intézményi adatok',
    rootCause:
      'A pálya jövedelme hosszú ideig messze elmaradt a diplomás átlagtól, a munkaterhelés nőtt (adminisztráció, helyettesítés), a szakmai autonómia csökkent, és a nyugdíjazási hullámot nem követte utánpótlás.',
    impact:
      'A legrosszabb helyzetű iskolákban tanít a legkevésbé tapasztalt tanár, szaktanár nélkül folyik a tanítás. Ez pontosan ott rontja a minőséget, ahol a legnagyobb szükség lenne rá.',
    answer:
      'Tanári életpálya-törvény: országos bértábla (kezdő = diplomás átlagbér 100%-a), max. 22 tanóra/hét, adminisztráció −50%, „hotspot” juttatás a hátrányos járásokban.',
    pillar: 3,
  },
  {
    id: 'p5',
    code: 'T-02',
    area: 'Tanár & szakma',
    severity: 4,
    title: 'A tanárképzés és a gyakorlat elszakadt egymástól',
    evidence:
      'A tanárképzés elméleti túlsúlyú, a gyakorlóiskolai idő rövid, a pályakezdőt gyakran felkészületlenül, mentorálás nélkül teszik önálló osztály elé. A pályaelhagyás az első 5 évben 25–35% körüli.',
    source: 'Oktatáskutatók konferencia-előadások, pedagógus-pályakövetési kutatások',
    rootCause:
      'A képzés és a köznevelés külön irányítás alatt áll, nincs közös felelősség a pályakezdőért, a mentorrendszer formális és alulfinanszírozott.',
    impact:
      'A legtehetségesebb pályakezdők hagyják el a szakmát, a rendszer „szivárogtat”. A képzésbe fektetett állami forint megtérülése alacsony.',
    answer:
      'Egységes 5+1 éves képzés, 2 éves fizetett rezidencia mentorral, gyakorlóiskola-hálózat, „tanár a gyárban / tanár a faluban” ösztöndíj.',
    pillar: 3,
  },
  {
    id: 'p6',
    code: 'T-03',
    area: 'Tanár & szakma',
    severity: 4,
    title: 'A tanár nem szakember, hanem végrehajtó',
    evidence:
      'A tanmenet, tankönyv, értékelési mód és módszertan nagy részét központilag szabályozzák; a tanár szabad döntési tere az óratervezésre szűkül. Az intézményvezető kinevezése politikai/fenntartói döntés, a szakmai testület szerepe formális.',
    source: 'NAT / kerettanterv, köznevelési törvény, intézményvezetői kinevezési gyakorlat',
    rootCause:
      'A 2010-es évek centralizációja a tanár szakmai felelősségét elvette anélkül, hogy a felelősséget máshova tette volna. Az elszámoltathatóság így adminisztratív, nem szakmai.',
    impact:
      'Motivációvesztés, „megcsinálom, ami elő van írva” kultúra. A jó tanár nem tud differenciálni, mert a tananyagmennyiség és a követelmény központi.',
    answer:
      'Iskolai szintű tanterv (30–40% szabadon tervezhető), tanári szakmai közösségek, a tanár mint tervező és értékelő szakember, szakmai kamara javaslati joggal.',
    pillar: 4,
  },
  {
    id: 'p7',
    code: 'A-01',
    area: 'Tananyag & módszer',
    severity: 4,
    title: 'Túl sok tananyag, túl kevés mélység',
    evidence:
      'A magyar tanulók tanórai terhelése OECD-átlag feletti, miközben a tananyag mélységi feldolgozására kevés idő jut. A felmérések szerint a szülők és a tanárok is a tananyag mennyiségét nevezik az egyik legnagyobb problémának (≈27%).',
    source: 'OECD tanulási idő mutatók, Mérlegen az állam 2025 kutatás',
    rootCause:
      'A NAT „lefedni való” tartalomlistaként működik, nem kompetencia-leírásként. A tankönyvpiac és a felvételi verseny tovább fokozza a mennyiségi versenyt.',
    impact:
      'Felszínes tudás, ami a PISA alkalmazás-orientált feladatain nem működik. A diák megtanul „iskolázni”, nem gondolkodni.',
    answer:
      'Kb. 30%-kal kevesebb kötelező tartalom, kompetencia-alapú kimeneti követelmények, tantárgyközi projektek, „kevesebb, de mélyebben” elv.',
    pillar: 4,
  },
  {
    id: 'p8',
    code: 'A-02',
    area: 'Tananyag & módszer',
    severity: 4,
    title: 'A tanulási zavarok és az SNI tömeges, de a támogatás nem követi',
    evidence:
      'Öt év alatt ≈10 ezerrel nőtt a súlyos tanulási zavarral azonosított gyermekek száma. Az SNI/BTM arány emelkedik, az utazó gyógypedagógusi és fejlesztőpedagógusi kapacitás nem. Az ellátás minősége intézményenként szélsőségesen szórt.',
    source: 'Népszava / Oktatási Hivatal szakértői bizottsági adatok (2020–2025)',
    rootCause:
      'A diagnózis és az ellátás külön rendszerben van; a finanszírozás nem követi a tényleges támogatási igényt. A pedagógus egyedül marad a heterogén osztállyal.',
    impact:
      'A „rosszul viselkedő” gyerekből lesz rossz tanuló, a valódi tehetsége elvész. A szülők magánútra kényszerülnek, ami növeli az egyenlőtlenséget.',
    answer:
      'Háromszintű támogatási modell (mindenkire / kiscsoportos / egyéni), 12 fős támogatási csoportok, országos szűrő 5 és 10 évesen, tankerületi szakmai központ.',
    pillar: 2,
  },
  {
    id: 'p9',
    code: 'M-01',
    area: 'Mérés & elszámoltathatóság',
    severity: 5,
    title: 'Az iskolai teljesítmény mérése gyakorlatilag megszűnt',
    evidence:
      'Az országos kompetenciamérés adatai nem nyilvánosak iskolai szinten, a mérési rendszer többször átalakult, és a 2020-as évektől a tanulói szintű visszajelzés is korlátozott. Magyarország nem tudja megmondani, melyik iskolában mennyit fejlődik egy gyerek.',
    source: 'Oktatási Hivatal mérési dokumentumok, szakpolitikai elemzések',
    rootCause:
      'A mérést elszámoltathatósági eszközként, nem tanulástámogató eszközként kezelik; a nyilvánosságtól való félelem miatt inkább zárják az adatot.',
    impact:
      'Nincs visszacsatolás sem a szülőnek, sem a tanárnak, sem a döntéshozónak. A rossz iskolát nem lehet megkülönböztetni a jótól, a szegregáció mérhetetlen marad.',
    answer:
      'Évente minden 2., 4., 6., 8., 10. évfolyamon mérési pont; intézményi „hozzáadott érték” adatlap nyilvánosan; a tanárnak és szülőnek tanulói szintű, azonnali visszajelzés.',
    pillar: 5,
  },
  {
    id: 'p10',
    code: 'M-02',
    area: 'Mérés & elszámoltathatóság',
    severity: 4,
    title: 'Nincs felelőse a rendszernek – és nincs következménye sem',
    evidence:
      'A fenntartás, a szakmai irányítás és az ellenőrzés szétválik, de a felelősség nem egyértelmű. Az iskolai szintű rossz eredménynek nincs intézményi következménye, és nincs támogatása sem.',
    source: 'Közoktatási irányítási struktúra, ÁSZ-jelentések',
    rootCause:
      'Túlcentralizált döntés, decentralizált felelősség. A tankerületi központ operatív feladatokat lát el, nem szakmai vezetést.',
    impact:
      'Az igazgató kockázatkerülő lesz: nem kezdeményez, mert nem ő dönt; nem dönt, mert nem ő felel. Az innováció elhal.',
    answer:
      'Iskolai autonómia + 5 éves teljesítménymegállapodás (kontraktus) a fenntartóval; az igazgatót szakmai testület választja, a fenntartó erősíti meg.',
    pillar: 5,
  },
  {
    id: 'p11',
    code: 'F-01',
    area: 'Irányítás & finanszírozás',
    severity: 4,
    title: 'A finanszírozás egyenlő, nem méltányos',
    evidence:
      'A közoktatás GDP-arányos ráfordítása ≈4,5%, elmarad az OECD-átlagtól, és az egy tanulóra jutó összeg alig különbözik a hátrányos és a jó helyzetű iskolákban – holott utóbbiaknak többszörös támogatásra lenne szükségük.',
    source: 'OECD Education at a Glance, Költségvetési törvény, ÁSZ',
    rootCause:
      'A normatív finanszírozás létszám-alapú, a hátrányos helyzet csak kis súllyal jelenik meg, a felzárkóztatás pedig projektfinanszírozású, nem rendszerszintű.',
    impact:
      'A rendszer újratermeli a különbségeket: ugyanannyi forint nem ugyanannyi esélyt vásárol.',
    answer:
      'Súlyozott tanulói finanszírozás (hátrányos helyzet ×2,2, SNI ×3), 6 éves kiszámítható ciklus, „felzárkóztatási alap” a tankerületeknél, teljesítményhez kötött kiegészítés.',
    pillar: 6,
  },
  {
    id: 'p12',
    code: 'F-02',
    area: 'Irányítás & finanszírozás',
    severity: 3,
    title: '„Ingyenes” iskola, ami a szülőknek mégis pénzbe kerül',
    evidence:
      'A tankönyv ingyenessége formális, a gyakorlatban másolási, felszerelési, tanfolyami, iskolai programköltségek hárulnak a családokra. A szegényebb családok gyerekei rendszeresen hiányzó eszközökkel járnak iskolába.',
    source: 'Népszava / TASZ esettanulmányok, szülői felmérések',
    rootCause:
      'A központi normatíva nem fedezi a működési költségeket, az iskolák „szülői hozzájárulásból” tömik be a lyukat, ami informális tandíj.',
    impact:
      'Rejtett szelekció: ahol a szülő fizet, ott a szegény gyerek nem tud részt venni. A formális egyenlőség valótlan.',
    answer:
      'Iskolai „nulla költség” garancia: eszköz, étkezés, napközi, tanfolyam, kirándulás minden tanulónak; az iskolai alapítványok nem finanszírozhatnak kötelező szolgáltatást.',
    pillar: 6,
  },
  {
    id: 'p13',
    code: 'D-01',
    area: 'Digitális & jövőképesség',
    severity: 3,
    title: 'A digitális oktatás eszközbeszerzés maradt, nem pedagógia',
    evidence:
      'A 2020 utáni eszközbeszerzések nem jártak tanárképzéssel és egységes platformmal; az iskolai digitális gyakorlat intézményi lelkesedésen múlik. A tanulók digitális kompetenciája nem javult arányosan.',
    source: 'EU DESI országjelentés, oktatási digitalizációs auditok',
    rootCause:
      'Projektlogika: elszámolható laptop kell, nem tanulási folyamat. Nincs közös tananyagtár, nincs interoperabilitás, nincs adatvédelem.',
    impact:
      'Digitális szakadék: a jó iskola jobb lesz, a rossz rosszabb. Az eszközök elavulnak, a tudás nem épül.',
    answer:
      'Egy országos platform (tananyag + értékelés + szülői visszajelzés), 1:1 eszközgarancia 5–12. évfolyamon, kötelező tanárképzés, mobilhasználati irányelv.',
    pillar: 4,
  },
  {
    id: 'p14',
    code: 'J-01',
    area: 'Jóllét & mentálhigiéné',
    severity: 5,
    title: 'Minden ötödik diák rendszeres bántalmazásról számol be',
    evidence:
      'A PISA 2025 szerint a magyar 15 évesek ≈20%-át havonta többször is bántalmazták az iskolában, 5%-át online is. A mentálhigiénés szakemberek száma az iskolákban töredéke a szükségesnek.',
    source: 'PISA 2025, iskolai jóllét mutatók',
    rootCause:
      'Nincs kötelező, rendszerszintű iskolai jóllét-mérés és ant bullying protokoll; a pedagógus nincs felkészítve, az iskolapszichológus 1:1500 arányban van jelen, ha van.',
    impact:
      'A bántalmazott gyerek tanulási teljesítménye mérhetően csökken, iskolakerüléshez, mentális betegséghez vezet. A tanár is kiég.',
    answer:
      'Kötelező iskolai jóllét-mérés évente, ant bully protokoll, iskolapszichológus 1:500 arányban, szociális munkás a hátrányos iskolákban, „mindennapos testnevelés + szabad játék”.',
    pillar: 2,
  },
  {
    id: 'p15',
    code: 'J-02',
    area: 'Jóllét & mentálhigiéné',
    severity: 4,
    title: 'A tanár kiégése rendszerkockázat',
    evidence:
      'A pedagógusok körében a kiégési tünetek aránya nemzetközi összehasonlításban magas, a pályaelhagyási szándék a fiatalok körében különösen nagy. A helyettesítések és a „másodállás” mindennapos.',
    source: 'Pedagógus jóllét-kutatások, PSZ felmérések',
    rootCause:
      'Túlterhelés + alacsony autonómia + alacsony társadalmi megbecsülés együtt. Nincs szupervízió, nincs munkaidő-korlát.',
    impact:
      'A tanárhiány önfenntartó spirálja: aki marad, még többet dolgozik, még inkább kiég.',
    answer:
      'Munkaidő-keret törvényi rögzítése (max. 40 óra, ebből 22 tanóra), kötelező szupervízió, iskolai „mentálhigiénés csomag”, adminisztráció-automatizálás.',
    pillar: 3,
  },
  {
    id: 'p16',
    code: 'S-01',
    area: 'Szakképzés & átjárás',
    severity: 4,
    title: 'A szakképzés zsákutca, nem pálya',
    evidence:
      'A szakképzés presztízse alacsony, a 14 éves kori kényszerű választás korai; a szakképzésből a felsőoktatásba való átjárás gyakorlatilag nincs, a felnőttkori átképzés pedig nem intézményes.',
    source: 'Szakképzési statisztikák, OECD „Vocational education” jelentés',
    rootCause:
      'A szakképzés és a gimnázium külön jogszabályi és finanszírozási világban él; a kamarák szerepe formális, a munkaerőpiaci előrejelzés nem épül be a kínálatba.',
    impact:
      'A munkaerőhiány és a diplomás túlkínálat egyszerre van jelen; a fiatal „választott” szakmájában felnőttként már nem talál munkát.',
    answer:
      'Közös 4+2 törzs 14–16 éves korig, szakmaválasztás 16 évesen, „szakképzés–felsőoktatás” áthallgatás, felnőttkori tanulási számla, kamarai előrejelzés a kínálatba.',
    pillar: 6,
  },
  {
    id: 'p17',
    code: 'S-02',
    area: 'Szakképzés & átjárás',
    severity: 3,
    title: 'Nincs élethosszig tartó tanulás intézménye',
    evidence:
      'A felnőttek formális tanulásban való részvétele az EU-átlag alatt van, a digitális átképzés töredékes. Az iskola 18 éves korig „felelős”, utána a piacra bízza a felkészítést.',
    source: 'Eurostat AES, DESI',
    rootCause:
      'Nincs tanulási számla, nincs elismert mikrotanúsítvány, a vállalati képzés adóösztönzése gyenge.',
    impact:
      'Az automatizáció és az AI miatt kieső munkaerő nem tud átállni; a regionális különbségek nőnek.',
    answer:
      'Felnőtt tanulási számla (évi 120 óra, állami 50%), mikrotanúsítvány-keretrendszer, regionális felnőttképzési központok az iskolák bázisán.',
    pillar: 6,
  },
];

export const SEVERITY_LABEL: Record<Severity, string> = {
  1: 'Enyhe',
  2: 'Közepes',
  3: 'Jelentős',
  4: 'Súlyos',
  5: 'Kritikus',
};
