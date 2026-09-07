# NA 17

Living build log for Ford Heacock’s **1995 Mazda Miata (NA)**, door number 17. Classic Red, black soft top, black bolt-on flares, cream mesh Traklite wheels. Twin Sparco Sprints on PCI mounts, NRG wheel + QR, door glass out. Track car becoming a club-sport car — weekend street, still track. Look goals: paint-matched flares, red hardtop, better wheels.

Public Next.js App Router site. No auth. No database. Facts are static.

## Run it

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

```bash
npm run build
npm start
```

## Update the car, not the JSX

All car data lives in **`lib/car.ts`**.

- Identity, photos, snapshot chips
- Spec lines (engine, mounts, cooling, chassis, interior, steering, wheels) with part numbers
- Ford’s work since purchase
- Club-sport look goals (painted flares, hardtop, wheels)
- Live issues / date-code work order (order matters; ages computed to 2026-08-30)
- Red Co setup sheet
- Receipt timeline and open questions
- Auto Sauce shop block

Pages only render that module. Change a spring rate or a part number in `lib/car.ts` and it shows up everywhere it should.

## Pages

| Path | What it is |
| --- | --- |
| `/` | Identity, hero photo, current snapshot, four live issues, look goals |
| `/spec` | Current state — engine, chassis, interior, steering, wheels/brakes, cooling, Ford’s work |
| `/next` | Date-code work order: mounts → clutch → exhaust → timing, plus look goals and watch list |
| `/history` | Scott’s 2016–2019 receipt trail, then Ford 2026. First name only. |
| `/chassis` | Red Co setup sheet numbers |

## Photos

Hero and gallery images are in `public/photos/`:

- `car-1.jpg` `car-2.jpg` `car-3.jpg` — exterior
- `engine-1.jpg` `engine-2.jpg` — bay

Replace a file in place (same name) to swap a shot. Captions and alt text are in `lib/car.ts` → `photos`.

## What stays off the log

Previous-owner contact details (phone, email, street address, card numbers) are not in this repo. A 2023 RockAuto alternator packing slip shipped to someone else is unverified and is not listed as a part on this car.

Auto Sauce Performance (Lakeland) is on the next-steps page on purpose — that’s the shop for the muffler/resonator and the timing/tune coordination.
