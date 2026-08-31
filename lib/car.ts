/**
 * Single source of truth for NA #17.
 * Update facts here — pages only render this module.
 */

/** Ages on the work order are computed to this date. */
export const asOfDate = "2026-08-30";

export function ageLabel(installed: string, asOf: string = asOfDate): string {
  const start = parseYmd(installed);
  const end = parseYmd(asOf);
  let months = (end.y - start.y) * 12 + (end.m - start.m);
  if (end.d < start.d) months -= 1;
  if (months < 0) months = 0;
  const years = Math.floor(months / 12);
  const rem = months % 12;
  const y = years === 1 ? "1 year" : `${years} years`;
  const mo = rem === 1 ? "1 month" : `${rem} months`;
  if (years === 0) return `~${mo}`;
  if (rem === 0) return `~${y}`;
  return `~${y} ${mo}`;
}

function parseYmd(value: string): { y: number; m: number; d: number } {
  const [y, m, d = "1"] = value.split("-");
  return { y: Number(y), m: Number(m), d: Number(d) };
}

const mountsAge = ageLabel("2017-01-12");
const hydraulicsAge = ageLabel("2018-12-29");
const clutchLineAge = ageLabel("2016-06-27");
const thermostatAge = ageLabel("2016-12");

export type Photo = {
  id: string;
  src: string;
  alt: string;
  caption: string;
  aspect: `${number} / ${number}`;
};

export type SpecLine = {
  label: string;
  value: string;
  note?: string;
  part?: string;
};

export type Lane = "queue" | "watch" | "in-process";

export type Issue = {
  id: string;
  priority: number;
  title: string;
  status: "open" | "in-process";
  lane: "queue";
  summary: string;
  symptom: string;
  dateCode: string;
  ageLabel: string;
  dateNote: string;
  why: string;
  plan: string;
  related?: string[];
};

export type WatchItem = {
  id: string;
  title: string;
  lane: "watch";
  symptom: string;
  dateCode: string;
  ageLabel: string;
  dateNote: string;
  why: string;
  plan: string;
  related?: string[];
};

export type InProcessItem = {
  id: string;
  title: string;
  status: "in-process";
  lane: "in-process";
  summary: string;
  symptom: string;
  dateCode: string;
  ageLabel: string;
  dateNote: string;
  plan: string;
};

export type TimelineEntry = {
  date: string;
  sort: string;
  era: "scott" | "ford";
  title: string;
  detail: string;
  source: "receipt" | "shop-day" | "owner";
  amount?: string;
};

export type OpenQuestion = {
  id: string;
  question: string;
  note: string;
};

export type SetupRow = {
  item: string;
  value: string;
  source: "red-co" | "sale-sheet" | "visual" | "note";
  note?: string;
};

export const car = {
  identity: {
    owner: "Ford Heacock",
    year: 1995,
    chassis: "NA",
    model: "Mazda Miata",
    doorNumber: 17,
    color: "Classic Red",
    roof: "Black soft top",
    flares: "Black bolt-on widebody flares",
    wheels: "Cream mesh Traklite, 15×8",
    mission: "Dedicated track car → club sport",
    missionDetail:
      "Weekend street car that still goes to the track. Keep the race bits that work. Put back the pieces a street car needs.",
    vin: null as string | null,
    mEditionClaim: "unverified" as const,
  },

  photos: {
    hero: {
      id: "car-1",
      src: "/photos/car-1.jpg",
      alt: "1995 Classic Red NA Miata #17, three-quarter front, black flares, cream Traklite wheels",
      caption: "Passenger-side three-quarter. Door 17, flares, Sparco visible, black top up.",
      aspect: "4 / 3",
    },
    side: {
      id: "car-2",
      src: "/photos/car-2.jpg",
      alt: "Side profile of the Classic Red NA Miata #17 in front of a shop",
      caption: "Side profile. Club-sport stance, not a show car.",
      aspect: "4 / 3",
    },
    rear: {
      id: "car-3",
      src: "/photos/car-3.jpg",
      alt: "Rear three-quarter of NA #17 in the rain, red roll bar visible through the rear window",
      caption: "Passenger-side rear three-quarter. Rain on the top. Red bar through the plastic window.",
      aspect: "4 / 3",
    },
    bay: {
      id: "engine-1",
      src: "/photos/engine-1.jpg",
      alt: "Top-down engine bay: red valve cover, Mishimoto radiator, blue G-Plus hoses, Spectre intake",
      caption: "Bay from above. Red cover, Mishimoto rad, blue G-Plus, wrapped header, Spectre cone.",
      aspect: "3 / 4",
    },
    bayDetail: {
      id: "engine-2",
      src: "/photos/engine-2.jpg",
      alt: "Engine bay detail showing 1999 intake, wrapped header, and red Classic Red painted bay",
      caption: "Same bay, tighter. 1999 intake, heat-wrapped header, red firewall.",
      aspect: "4 / 3",
    },
  } satisfies Record<string, Photo>,

  snapshot: [
    { label: "Short block", value: "2002 / 01–05" },
    { label: "Head / intake", value: "1999" },
    { label: "Springs", value: "800 F / 350 R" },
    { label: "Tires", value: "Toyo R888R" },
    { label: "Timing", value: "8° BTDC (want 10°)" },
    { label: "Driver seat", value: "Kirkey → Sparco" },
    { label: "Mounts", value: `2017 Comp, ${mountsAge}` },
    { label: "Exhaust", value: "Header + open back" },
  ],

  spec: {
    engine: [
      {
        label: "Short block",
        value: "2002 / 01–05",
        note: "Redline 01–05 short block, installed swap day 2016-11-11.",
      },
      {
        label: "Cylinder head",
        value: "1999",
        note: "Treasure Coast used 99 head. 2016-01 Miatas & More head work was likely the original head, later replaced.",
      },
      {
        label: "Intake manifold",
        value: "1999",
        note: "Installed with the swap, not the original NA intake.",
      },
      {
        label: "Head studs",
        value: "ARP, small washer",
        part: "FM 04-66205 / ARP 218-4701",
      },
      {
        label: "Fuel rail",
        value: "Flyin’ Miata dual-feed, 1994–97",
        part: "FM 04-46550",
        note: "–6 lines.",
      },
      {
        label: "Fuel pump",
        value: "AEM E85",
        part: "AEM 50-1200",
        note: "Summit, 2019-04. Fuel in the tank is still an open question — E85 vs pump gas.",
      },
      {
        label: "Header",
        value: "Wrapped header",
        note: "Keep it. Header-back is Springfield Dyno.",
      },
      {
        label: "Header-back",
        value: "Springfield Dyno",
        note: "Too loud for street. Muffler + resonator is next, not a header swap.",
      },
      {
        label: "Intake",
        value: "Spectre polished pipe, red cone, factory MAF",
      },
      {
        label: "Dress",
        value: "Red valve cover, red wires",
      },
    ] satisfies SpecLine[],

    cooling: [
      {
        label: "Radiator",
        value: "Mishimoto aluminum",
      },
      {
        label: "Thermostat",
        value: "Mishimoto 155°F",
        note: `5X, 2016-12, with OEM seals/gaskets. ${thermostatAge}. No cooling symptom — watch list only.`,
      },
      {
        label: "Hoses",
        value: "Blue G-Plus silicone",
      },
      {
        label: "Fan",
        value: "Manual radiator fan switch",
        note: "Ford, 2026.",
      },
    ] satisfies SpecLine[],

    mounts: [
      {
        label: "What’s on the car",
        value: "Mazda Competition, pair bought Jan 2017",
        part: "NAY1-39-040 / FM 04-70155",
        note: `75A rubber. About 40% stiffer than stock 55A when new. ${mountsAge} — likely sagged or torn.`,
      },
      {
        label: "Not these",
        value: "Not Mazdaspeed turbo OEM mounts. Not poly. Not Innovative.",
      },
      {
        label: "Club-sport replacement",
        value: "A fresh pair of the same Comp mounts",
        part: "NAY1-39-040",
      },
    ] satisfies SpecLine[],

    chassis: [
      {
        label: "Coilovers",
        value: "IS Racing, Bilstein",
        note: "2016-03 IS Racing estimate covered suspension/flares.",
      },
      {
        label: "Springs",
        value: "800 F / 350 R",
        note: "Trust the Red Co setup sheet. Sale sheet said 700 / 325.",
      },
      {
        label: "Flares",
        value: "Black bolt-on widebody, riveted",
      },
      {
        label: "Upper bushings",
        value: "Offset",
      },
      {
        label: "Alignment (sheet)",
        value: "2.5° F / 2.0° R camber",
      },
      {
        label: "Front bar",
        value: "2nd-softest hole",
      },
      {
        label: "Rear bar",
        value: "Small bar, softest",
      },
      {
        label: "Corner weights",
        value: "~2464 lb / ~2357 lb",
        note: "Two conditions. 51.3% front. Driver 200 lb.",
      },
    ] satisfies SpecLine[],

    interior: [
      {
        label: "Passenger",
        value: "Sparco Sprint + harness",
      },
      {
        label: "Driver (now)",
        value: "Kirkey — being sold",
      },
      {
        label: "Driver (target)",
        value: "Second Sparco Sprint + frame rail",
      },
      {
        label: "Cage",
        value: "Red roll bar",
      },
      {
        label: "Shifter",
        value: "G-Racing short shifter",
        note: "Ford, 2026.",
      },
      {
        label: "Knob",
        value: "MiataRoadster black Delrin",
        note: "2017-03, with header stud kit.",
      },
      {
        label: "Glass",
        value: "In",
      },
      {
        label: "Headlights",
        value: "Used pop-ups reinstalled",
        note: "Ford, 2026.",
      },
      {
        label: "Still gone",
        value: "Carpet, door panels, airbag",
      },
    ] satisfies SpecLine[],

    wheels: [
      {
        label: "Wheels",
        value: "15×8 Traklite, cream mesh, polished lip",
      },
      {
        label: "Tires",
        value: "Toyo Proxes R888R (new)",
        note: "Ford, new 2026.",
      },
      {
        label: "Pads",
        value: "Hawk Blue (new)",
        note: "Ford, 2026.",
      },
      {
        label: "Lugs",
        value: "5X 12×1.5",
        note: "2017-08.",
      },
    ] satisfies SpecLine[],
  },

  fordsWork: {
    done: [
      "G-Racing short shifter",
      "Timing 2° ATDC → 8° BTDC (wants 10°)",
      "New battery",
      "New Toyo Proxes R888R",
      "New Hawk Blue pads",
      "Used pop-ups reinstalled",
      "New gas cap",
      "Manual radiator fan switch",
    ],
    inProcess: [
      "Sell the Kirkey",
      "Driver Sparco Sprint + frame rail",
    ],
  },

  shops: {
    autoSauce: {
      name: "Auto Sauce Performance",
      address: "820 Creative Dr #1, Lakeland",
      phone: "863-247-6345",
      jobs: ["Exhaust (muffler + resonator, keep wrapped header)", "Timing / tune coordination"],
    },
  },

  workOrder: {
    asOf: asOfDate,
    asOfLabel: "Sunday 2026-08-30",
    kicker: "Work order",
    title: "Suggested next steps",
    intro: [
      "This is not a shopping list. The order comes from receipt date codes plus what the car is doing right now. Ages are computed to Sunday 2026-08-30.",
      "Worn 2017 Comp mounts rock the engine. That rock is the shifter shake on clutch crawl and part of the 1st-gear shudder — clutch take-up plus engine rock. The sound is like tire squeal; that is the noise, not a tire diagnosis. The Springfield Dyno header-back is a track pipe with no muffler. Timing is Ford’s unfinished 8° BTDC set — factory is 10°, do not overshoot.",
      "Mounts first. Re-evaluate the clutch after the engine stops rocking. Quiet the exhaust. Finish timing with Auto Sauce so nobody double-advances the CAS.",
    ],
  },

  issues: [
    {
      id: "mounts",
      priority: 1,
      title: "Engine mounts",
      status: "open",
      lane: "queue",
      summary: `Mazda Comp pair, ${mountsAge}. Engine rock on clutch crawl — part of the 1st-gear shudder. Fresh Comp pair, not poly.`,
      symptom:
        "Shifter shake when crawling on the clutch. The G-Racing short shifter is new; the shake is engine rock, not the shifter. Same rock is part of the clutch shudder out of 1st.",
      dateCode: "Jan 12 and Jan 20, 2017 · NAY1-39-040 / FM 04-70155",
      ageLabel: mountsAge,
      dateNote:
        "Pair bought Jan 12 and Jan 20, 2017 (previous-owner receipts). 75A rubber, about 40% stiffer than stock 55A when new. Genuine Mazda Motorsports Comp mounts — not Mazdaspeed turbo OEM, not poly, not Innovative. Likely sagged or torn.",
      why: `Age (${mountsAge}) plus the rock you can feel in the shifter. Tired 75A Comp rubber lets the engine move. That motion shows up as shake on clutch crawl and feeds the 1st-gear shudder. Fix the mounts before chasing the disc.`,
      plan: "Replace with a fresh pair of the same Mazda Comp mounts — NAY1-39-040 (FM 04-70155). Do not go poly. Do not use Innovative. Do not use Mazdaspeed turbo OEM. Inspect the 2016 clutch line while the mounts are out.",
      related: ["NAY1-39-040", "FM 04-70155"],
    },
    {
      id: "clutch",
      priority: 2,
      title: "Clutch shudder out of 1st",
      status: "open",
      lane: "queue",
      summary:
        "Sounds like tire squeal unless the pedal comes up slowly. Clutch take-up plus engine rock from the worn Comp mounts. Re-evaluate after the mounts.",
      symptom:
        "Clutch shudder out of 1st that sounds like tire squeal unless the pedal is released slowly. That is a description of the noise, not a tire diagnosis. The shudder is clutch take-up and engine rock from the worn Comp mounts.",
      dateCode: "Cory Fairbanks Mazda invoice 84135 · 2018-12-29",
      ageLabel: hydraulicsAge,
      dateNote: `Master NA01-41-400A + slave NA01-41-920C + two oil seals, invoice 84135, 2018-12-29. Hydraulics are ${hydraulicsAge} and still reasonable. Disc is unknown. Extended clutch line is a separate 2016 watch item — inspect during the mount job, do not replace on speculation.`,
      why: "Clutch take-up plus engine rock from the tired Comp mounts. Hydraulics from 2018 are not the first suspect. Do not throw a clutch kit first.",
      plan: "After the engine stops rocking, re-evaluate take-up. If the shudder is still there, then look at the disc. Leave the 2018 master/slave unless a hydraulic symptom shows.",
      related: ["NA01-41-400A", "NA01-41-920C"],
    },
    {
      id: "exhaust",
      priority: 3,
      title: "Exhaust too loud",
      status: "open",
      lane: "queue",
      summary:
        "Wrapped header + Springfield Dyno header-back, no muffler. Too loud for club-sport / neighborhood.",
      symptom:
        "Exhaust is too loud for club-sport and the neighborhood. Wrapped header + Springfield Dyno header-back, no muffler or resonator.",
      dateCode: "Track pipe — conversion item, not a date code",
      ageLabel: "Not an age job",
      dateNote:
        "Loudness is the open header-back, not a worn part. Keep the wrapped header. Quiet the rest.",
      why: "Club-sport means the car has to leave the house without being a nuisance. This is a conversion item, not a receipt-age failure.",
      plan: "Keep the wrapped header. Add a muffler and a resonator. Shop: Auto Sauce Performance, 820 Creative Dr #1, Lakeland, 863-247-6345.",
      related: ["Auto Sauce Performance"],
    },
    {
      id: "timing",
      priority: 4,
      title: "Timing 8° → 10° BTDC",
      status: "open",
      lane: "queue",
      summary:
        "Ford moved it from 2° ATDC to 8° BTDC. Factory is 10°. Finish it — do not overshoot.",
      symptom:
        "Timing is currently 8° BTDC after Ford moved it from 2° ATDC. Factory is 10° BTDC. Unfinished 2026 adjustment.",
      dateCode: "Ford, 2026 — unfinished set",
      ageLabel: "This year’s adjustment",
      dateNote:
        "Ford’s 2026 timing move, not a receipt from the previous owner. Still one degree short of stock.",
      why: "Finish the set. Easy to overshoot if a shop advances it again on the dyno.",
      plan: "Set factory 10° BTDC with a CAS and a timing light. Coordinate with Auto Sauce so they do not double-advance it.",
      related: ["CAS", "Auto Sauce Performance"],
    },
  ] satisfies Issue[],

  inProcess: {
    id: "driver-seat",
    title: "Driver Sparco Sprint + frame rail",
    status: "in-process" as const,
    lane: "in-process" as const,
    summary:
      "Passenger already has a Sparco Sprint and harness. Driver is still a Kirkey, which is being sold. Replacement is a second Sprint on a frame rail.",
    symptom:
      "Not a diagnosis. Passenger already has a Sprint + harness. Driver is still the Kirkey.",
    dateCode: "Ford, 2026",
    ageLabel: "In process",
    dateNote:
      "Seat swap is underway. It is not ranked against the receipt-age jobs.",
    plan: "Sell the Kirkey. Fit a driver Sparco Sprint on a frame rail.",
  } satisfies InProcessItem,

  watch: [
    {
      id: "thermostat",
      title: "Mishimoto 155°F thermostat",
      lane: "watch",
      symptom:
        "None. No cooling complaint. Ford added a manual radiator fan switch in 2026.",
      dateCode: "5X Racing, 2016-12 · MMTS-MIA-90 + OEM seals",
      ageLabel: thermostatAge,
      dateNote: `Bought 2016-12 with seals/gaskets. ${thermostatAge}. Age alone is not a reason to pull it.`,
      why: "Old, but the car is not overheating. Watch list until a cooling symptom shows.",
      plan: "Leave it. Watch temps. The 2026 manual fan switch is already on the car.",
      related: ["MMTS-MIA-90"],
    },
    {
      id: "clutch-line",
      title: "Extended black clutch line",
      lane: "watch",
      symptom: "No hydraulic complaint tied to the line.",
      dateCode: "5X Racing order 2122679 · 2016-06-27",
      ageLabel: clutchLineAge,
      dateNote: `${clutchLineAge}. Still on the car. Hydraulics as a system are not the first shudder suspect.`,
      why: "Long in the tooth, but do not replace on speculation. The 2018 master/slave are the newer half of the hydraulic circuit.",
      plan: "Inspect when the Comp mounts come out. Replace only if the line is weeping, swollen, or crusted.",
      related: ["5X 2122679"],
    },
  ] satisfies WatchItem[],

  datedQuiet: [
    {
      title: "Engine swap day",
      dateCode: "2016-11-11",
      note: "2002/01–05 short block + 1999 head/intake. No current leak or overheat complaint tied to the swap.",
    },
    {
      title: "ARP head studs",
      dateCode: "Jan 2017 · FM 04-66205 / ARP 218-4701",
      note: "Installed with the Comp-mount era. No leak complaint.",
    },
    {
      title: "FM dual-feed rail",
      dateCode: "May 2017 · FM 04-46550",
      note: "No current leak complaint tied to the rail.",
    },
  ],

  chassisSetup: {
    shop: "Red Co",
    sheetTitle: "NA #17 — Red Co setup sheet",
    trustNote:
      "Trust this sheet over the sale sheet. Sale paperwork said 700 F / 325 R. The sheet says 800 F / 350 R.",
    rows: [
      {
        item: "Dampers",
        value: "IS Racing coilovers, Bilstein",
        source: "visual",
      },
      {
        item: "Spring rate",
        value: "800 F / 350 R",
        source: "red-co",
        note: "Sale sheet: 700 / 325. Use 800 / 350 until a later swap is proven.",
      },
      {
        item: "Front camber",
        value: "2.5°",
        source: "red-co",
      },
      {
        item: "Rear camber",
        value: "2.0°",
        source: "red-co",
      },
      {
        item: "Front sway bar",
        value: "2nd-softest hole",
        source: "red-co",
      },
      {
        item: "Rear sway bar",
        value: "Small bar, softest",
        source: "red-co",
      },
      {
        item: "Upper bushings",
        value: "Offset",
        source: "visual",
      },
      {
        item: "Flares",
        value: "Black bolt-on widebody",
        source: "visual",
      },
      {
        item: "Corner weight A",
        value: "~2464 lb",
        source: "red-co",
        note: "One of two recorded conditions.",
      },
      {
        item: "Corner weight B",
        value: "~2357 lb",
        source: "red-co",
        note: "Second condition. Per-corner breakdown not on file.",
      },
      {
        item: "Front bias",
        value: "51.3%",
        source: "red-co",
      },
      {
        item: "Driver ballast",
        value: "200 lb",
        source: "red-co",
      },
    ] satisfies SetupRow[],
  },

  history: [
    {
      date: "2016-01",
      sort: "2016-01",
      era: "scott",
      title: "Miatas & More head work",
      detail:
        "$320. Likely the original head. That head was later replaced on swap day — do not treat this as the current 1999 head.",
      source: "receipt",
      amount: "$320",
    },
    {
      date: "2016-03",
      sort: "2016-03",
      era: "scott",
      title: "IS Racing estimate — suspension / flares",
      detail: "Estimate $2,377 for suspension and flares. The IS Racing / Bilstein / flare package on the car traces here.",
      source: "receipt",
      amount: "$2,377",
    },
    {
      date: "2016-06",
      sort: "2016-06",
      era: "scott",
      title: "5X extended clutch line",
      detail: `Order 2122679, 2016-06-27. Still on the car, ${clutchLineAge}. Inspect when the mounts come out — do not replace on speculation.`,
      source: "receipt",
    },
    {
      date: "2016-11-11",
      sort: "2016-11-11",
      era: "scott",
      title: "Engine swap day",
      detail:
        "Treasure Coast 99 used head + Redline 01–05 short block + 99 intake. This is the engine in the bay now.",
      source: "shop-day",
    },
    {
      date: "2016-12",
      sort: "2016-12",
      era: "scott",
      title: "5X Mishimoto 155°F thermostat",
      detail: `MMTS-MIA-90 plus OEM seals and gaskets. ${thermostatAge}. No cooling symptom — watch list only.`,
      source: "receipt",
    },
    {
      date: "2017-01",
      sort: "2017-01",
      era: "scott",
      title: "ARP studs, crank tool, Comp mounts",
      detail:
        `Flyin’ Miata ARP head studs, crank tool, and the first Mazda Comp mount (Jan 12). Second Comp mount Jan 20. Those are the mounts still in the car — ${mountsAge}.`,
      source: "receipt",
    },
    {
      date: "2017-03",
      sort: "2017-03",
      era: "scott",
      title: "MiataRoadster header studs + shift knob",
      detail: "Header stud kit and the black Delrin knob still on the G-Racing shifter.",
      source: "receipt",
    },
    {
      date: "2017-05",
      sort: "2017-05",
      era: "scott",
      title: "FM dual-feed fuel rail",
      detail: "Flyin’ Miata 04-46550, 1994–97 rail, –6 lines.",
      source: "receipt",
    },
    {
      date: "2017-08",
      sort: "2017-08",
      era: "scott",
      title: "5X lug nuts",
      detail: "12×1.5. Still the lugs on the Traklites.",
      source: "receipt",
    },
    {
      date: "2018-12",
      sort: "2018-12",
      era: "scott",
      title: "Fairbanks clutch master / slave",
      detail: `Cory Fairbanks Mazda invoice 84135, 2018-12-29. Master NA01-41-400A, slave NA01-41-920C, two oil seals. Hydraulics are ${hydraulicsAge} — not the first shudder suspect.`,
      source: "receipt",
    },
    {
      date: "2019-04",
      sort: "2019-04",
      era: "scott",
      title: "Summit AEM E85 pump",
      detail: "AEM 50-1200. Pump is E85-capable. What is actually in the tank is still open.",
      source: "receipt",
    },
    {
      date: "2026",
      sort: "2026-01",
      era: "ford",
      title: "Ford’s first pass",
      detail:
        "G-Racing short shifter. Timing 2° ATDC → 8° BTDC. New battery, R888Rs, Hawk Blues, used pop-ups, new gas cap, manual radiator fan switch. Kirkey listed to sell. Driver Sparco + frame rail in process.",
      source: "owner",
    },
  ] satisfies TimelineEntry[],

  omitted: [
    "Previous-owner contact details (phone, email, street address, card numbers) stay off this log.",
    "A 2023 RockAuto alternator packing list is unverified and is not listed as a part on this car.",
  ],

  openQuestions: [
    {
      id: "vin",
      question: "VIN",
      note: "Not on file. Needed before title, insurance, or a serious M Edition claim.",
    },
    {
      id: "m-edition",
      question: "Is it really an M Edition?",
      note: "Factory M Edition for 1995 was Merlot Mica. This car is Classic Red now. Treat M Edition as unverified until the VIN and a cowl/tag check say otherwise.",
    },
    {
      id: "fuel",
      question: "E85 vs pump gas",
      note: "AEM 50-1200 is an E85 pump. That does not mean the tank is E85. Confirm fuel before any Auto Sauce tune.",
    },
    {
      id: "springs",
      question: "800 / 350 vs a later spring swap",
      note: "Red Co sheet is 800 F / 350 R. Sale sheet was 700 / 325. No receipt for a later swap. Run the sheet numbers until someone measures the springs.",
    },
  ] satisfies OpenQuestion[],
} as const;

export const photos = Object.values(car.photos);

export const nav = [
  { href: "/", label: "Log" },
  { href: "/spec", label: "Spec" },
  { href: "/next", label: "Next" },
  { href: "/history", label: "History" },
  { href: "/chassis", label: "Chassis" },
] as const;
