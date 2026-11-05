# OMNI – Új iskolarendszer (terv)

Interaktív **reformterv** a magyar közoktatás rendszerhibáiról és egy 8 éves, hat pillérre
épülő új iskolarendszerről. React + TypeScript + Vite.

> Ez a repó **terv**, nem kész termék: a cél, hogy a javaslatot át lehessen látni,
> szűrni, kinyitni és vitatni.

## Futtatás

```bash
npm install
npm run dev      # http://localhost:5173
npm run build    # produkciós build a dist/ mappába
```

## Mi van benne

| Szekció | Tartalom | Fájl |
| --- | --- | --- |
| **Diagnózis** | 17 rendszerhiba 8 területen: tünet + forrás, gyökér-ok, hatás, OMNI-válasz. Terület szerint szűrhető, soronként kibontható. | `src/data/problems.ts` |
| **Pillerek** | A 6 beavatkozási pillér: vezérelv, konkrét változások, mérőszámok (ma → cél → időtáv). | `src/data/pillars.ts` |
| **Ütemterv** | 6 fázis (0–8. év): cél, intézkedések KPI-val, kockázatok és kezelésük. | `src/data/roadmap.ts` |
| **Alapelvek** | A 6 döntési elv, amihez minden javaslatot mérni kell. | `src/data/pillars.ts` |
| **Költség** | Nagyságrendi költségtábla fedezettel és várható hatással. | `src/data/pillars.ts` |
| **Ma ↔ OMNI** | 8 konkrét összevetés: mai működés vs. javasolt működés. | `src/App.tsx` |

## A terv egy mondatban

A korai szelekció megszüntetése (egységes alapiskola 14 éves korig, szegregációmentes
beiskolázás, súlyozott finanszírozás), a tanári szakma újjáépítése (életpálya-bér, 22 tanóra,
rezidencia, autonómia), kevesebb de mélyebb tananyag, háromszintű támogatás és jóllét-csomag,
diagnosztikus mérés hozzáadott értékkel, végül a szakképzés és a felnőttkori tanulás
átjárhatóvá tétele.

## Fontos

- A számok **nagyságrendi becslések**, nyilvános forrásokból (PISA 2022–2025, KSH, OECD, PSZ,
  Oktatási Hivatal, ÁSZ, Eurostat) – nem hivatalos költségvetési vagy jogszabály-tervezet.
- A 0. fázis (felmérés, társadalmi egyeztetés, hatásvizsgálat) szándékosan az első: a terv
  addig javaslat, amíg nincs mögötte hiteles adat és felhatalmazás.
