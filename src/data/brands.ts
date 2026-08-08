// Brand page content. The failure-mode lists are drafted from the build brief's
// §5.3 examples plus widely documented platform issues at the same specificity
// level. CONFIRM AND EXTEND THESE WITH THE TECHNICIAN before launch — his real
// list is the most valuable content on the site and cannot be invented.

export interface BrandPage {
  slug: string;
  name: string;
  shortName: string;
  metaTitle: string;
  metaDescription: string;
  h1: string;
  intro: string;
  opening: string[];
  failuresHeading: string;
  failures: { title: string; body: string }[];
  services: string[];
  maintenance: string[];
  independent: string[];
}

export const BRAND_PAGES: BrandPage[] = [
  {
    slug: 'bmw',
    name: 'BMW',
    shortName: 'BMW',
    metaTitle: 'BMW Repair & Service in South Jersey | Eway Auto Repairs',
    metaDescription:
      'Mobile BMW specialist serving South Jersey. 30+ years on BMW platforms, ASE Master certified. Diagnostics, maintenance, coding and pre-purchase inspections — at your driveway.',
    h1: 'BMW Repair and Service — South Jersey',
    intro:
      'Thirty years on BMW platforms, from E30s to the current G chassis. Factory-level diagnostics, correct-spec parts, and battery registration done right — in your driveway.',
    opening: [
      "BMWs are engineered tight, and they reward a technician who knows exactly where they fail. After three decades on these platforms I usually know what a BMW is doing before the scan tool confirms it — because I've seen the same failure on the same engine dozens of times.",
      "That matters for your wallet. A shop that doesn't live on BMWs replaces parts until the light goes out. I test the part that actually fails on your engine code first.",
    ],
    failuresHeading: 'Common problems I see on BMW',
    failures: [
      {
        title: 'N54 / N55 charge pipe failure',
        body: 'The factory plastic charge pipe cracks under boost — sudden lean codes, limp mode, a whoosh under acceleration. Common enough that I check it before anything else on a twin-scroll car with a lean complaint. An aluminum replacement ends it for good.',
      },
      {
        title: 'Valve cover gasket leaking into the plug wells',
        body: 'Oil seeps into the spark plug wells and causes misfires that get misdiagnosed as bad coils. If you were quoted six coils and plugs, get a second opinion — most of the time it is a gasket.',
      },
      {
        title: 'VANOS solenoids and seals',
        body: 'Rough cold idle, hesitation, timing correlation codes. On many inline-sixes the fix is solenoids or screens, not the expensive VANOS units a dealer may quote.',
      },
      {
        title: 'N20 / N26 timing chain guides',
        body: 'Pre-2015 four-cylinders wear their chain guides early. A whine or rattle from the back of the engine is not a wait-and-see item — caught early it is a chain job, caught late it is an engine.',
      },
      {
        title: 'Electric water pump on N52 / N54',
        body: 'The electric pump fails around 60–90k, often with little warning. If yours is original at that mileage, replacing pump and thermostat proactively is far cheaper than an overheat on Route 73.',
      },
      {
        title: 'Oil filter housing gasket',
        body: 'Leaks down the front of the block and drips onto the serpentine belt — left long enough the oil-soaked belt shreds and can get pulled into the front main seal. A gasket now beats an engine-out repair later.',
      },
      {
        title: 'Battery registration and coding after repairs',
        body: 'BMWs need the new battery registered and modules told about certain repairs, or you get phantom electrical gremlins. I do the coding as part of the job, not as an extra trip.',
      },
    ],
    services: [
      'Check engine light and drivability diagnostics with BMW-specific software',
      'Oil services with LL-01/LL-04 approved oils and correct reset procedures',
      'Cooling system repairs — water pumps, thermostats, expansion tanks, hoses',
      'Valve cover, oil filter housing, and oil pan gasket repairs',
      'Brakes with electronic parking brake retraction and wear sensor replacement',
      'Battery replacement with registration, module coding, and adaptations',
      'Pre-purchase inspections on any BMW, at the seller’s location',
    ],
    maintenance: [
      'BMW’s "lifetime" transmission fluid claim is marketing, not engineering. The ZF automatics in most BMWs want fluid and a filter around 60–80k miles — the difference shows up at 150k, when serviced transmissions still shift right.',
      'The factory oil interval stretches to 10,000+ miles on condition-based service. On direct-injection turbo engines I recommend 5–7k with the correct LL-spec oil. It is the cheapest insurance a BMW owner can buy.',
    ],
    independent: [
      'A BMW dealership in this area bills roughly $170 an hour, and your car is diagnosed by whoever is free. I carry the diagnostic capability the work requires, I have seen your engine’s failure pattern before, and you talk to the person doing the work — at an independent rate, in your driveway.',
    ],
  },
  {
    slug: 'mercedes-benz',
    name: 'Mercedes-Benz',
    shortName: 'Mercedes',
    metaTitle: 'Mercedes-Benz Repair & Service in South Jersey | Eway Auto Repairs',
    metaDescription:
      'Mobile Mercedes-Benz specialist in South Jersey. 30+ years of experience, ASE Master certified. Diagnostics, Airmatic, transmission service and PPIs — we come to you.',
    h1: 'Mercedes-Benz Repair and Service — South Jersey',
    intro:
      'From W124s to the current lineup — three decades of Mercedes diagnostics, service, and the judgment to tell you what actually needs fixing.',
    opening: [
      'A Mercedes hides its problems well right up until it doesn’t. The build quality is real, but so are the platform-specific failures — and knowing which noise is character and which is a $4,000 warning is what thirty years on these cars buys you.',
      'I service everything from daily-driver C-Classes to AMG cars, with the STAR-level diagnostics the brand requires.',
    ],
    failuresHeading: 'Common problems I see on Mercedes-Benz',
    failures: [
      {
        title: 'M272 / M273 balance shaft and idler gear wear',
        body: 'The early versions of these V6/V8 engines wear the balance shaft sprocket — camshaft correlation codes (P0016/P0017 family) are the tell. It is a big job, and it is exactly what a pre-purchase inspection exists to catch before you buy.',
      },
      {
        title: 'Airmatic compressor and strut failure',
        body: 'A Mercedes that sits low overnight, or a compressor that runs constantly, is telling you the air suspension is leaking. Fixed early, it is a strut or a compressor; ignored, the compressor burns out chasing the leak and you pay for both.',
      },
      {
        title: '722.9 transmission conductor plate and valve body',
        body: 'Harsh shifts, limp mode, or a no-start after sitting can trace to the conductor plate inside the 7-speed automatic. Often repairable without replacing the transmission — which is not always the quote you will get elsewhere.',
      },
      {
        title: 'Oil cooler and rear main seal leaks',
        body: 'The M272-era engines leak from the oil cooler seals down into the engine valley, and older cars from the rear main. Finding the actual source before throwing parts is the whole job — oil runs everywhere once it escapes.',
      },
      {
        title: 'M271 timing chain stretch',
        body: 'The supercharged and early turbo four-cylinders stretch chains and wear cam adjusters. A rattle at cold start on a C-Class is worth a scan the same week.',
      },
      {
        title: 'Crankcase breather and ignition misfires',
        body: 'Rough running with no obvious cause on higher-mileage V6s is frequently the breather system, not coils. Diagnosis first, parts second.',
      },
    ],
    services: [
      'Mercedes-specific diagnostics for engine, transmission, SRS, and chassis systems',
      'A/B service done to the actual sheet with MB-approved fluids — at your driveway',
      'Airmatic diagnosis and repair — struts, compressors, valve blocks',
      '722.6 / 722.9 transmission services despite the “filled for life” label',
      'Oil leak diagnosis and repair — oil cooler, valve covers, rear main',
      'Brakes with SBC-aware and electronic parking brake procedures where fitted',
      'Pre-purchase inspections on any Mercedes, at the seller’s location',
    ],
    maintenance: [
      'Mercedes calls the 722.9 transmission sealed for life. The fluid still degrades — a service around 60–70k miles is the difference between a transmission that lasts and a valve body replacement at 120k.',
      'The A/B service system is fine as a schedule, but what matters is what actually gets done. I work from the factory sheet for your chassis and mileage, and every line item shows on the invoice.',
    ],
    independent: [
      'Dealer service advisors sell hours; I sell fixes. You talk directly to the technician who has run this exact failure to ground on this exact engine — and the estimate is in writing before a tool comes out.',
    ],
  },
  {
    slug: 'audi-volkswagen',
    name: 'Audi & Volkswagen',
    shortName: 'Audi/VW',
    metaTitle: 'Audi & Volkswagen Repair in South Jersey | Eway Auto Repairs',
    metaDescription:
      'Mobile Audi and VW specialist in South Jersey. 30+ years, ASE Master certified. 2.0T carbon cleaning, timing chain, DSG service, diagnostics and PPIs at your driveway.',
    h1: 'Audi and Volkswagen Repair — South Jersey',
    intro:
      'Same platforms, same engines, same failure patterns — I work on VW-Audi Group cars daily, from GTIs to Q7s, with the scan capability the group’s electronics demand.',
    opening: [
      'Audi and Volkswagen share engines, transmissions, and electrics, which means they share failure patterns — and the 2.0T that powers half the lineup has a well-documented list of them. Knowing that list cold is most of the diagnosis.',
      'These cars also punish deferred maintenance harder than most: a missed DSG service or a stretched timing chain does not announce itself politely.',
    ],
    failuresHeading: 'Common problems I see on Audi and VW',
    failures: [
      {
        title: '2.0T timing chain tensioner (EA888)',
        body: 'The early tensioner design can let the chain jump on a cold start — and that bends valves. If your pre-2013 2.0T rattles for a second at startup, stop driving it and call. The updated tensioner is cheap insurance; the interference-engine failure is not.',
      },
      {
        title: 'Carbon buildup on direct-injection intake valves',
        body: 'Rough cold idle, misfire codes on cold start, and a car that no longer pulls like it did. Direct injection means fuel never washes the intake valves — walnut blasting restores them. Normal on FSI/TFSI engines around 60–100k.',
      },
      {
        title: 'PCV valve / oil separator failure',
        body: 'A whistle from the engine bay, oil consumption, rough idle, or an oil cap that fights you — the PCV diaphragm is a classic VW-Audi failure and a cheap fix that often gets misdiagnosed as something bigger.',
      },
      {
        title: 'Water pump and thermostat housing leaks',
        body: 'The composite pump/thermostat assemblies weep coolant onto the block. If you smell coolant or top off the reservoir more than rarely, have it looked at before it strands you.',
      },
      {
        title: 'Oil consumption on 2.0T and 3.0T engines',
        body: 'Certain EA888 generations consume oil through piston ring design; the supercharged 3.0T has its own appetites. Whether yours is normal wear or a real problem is a measurement, not a guess — and it is a key PPI item on used Audis.',
      },
      {
        title: 'Neglected DSG and Haldex service',
        body: 'The DSG dual-clutch wants fluid every 40k; Haldex all-wheel-drive cars want their rear coupling serviced too. Both get skipped constantly, and both failures cost twenty times the service.',
      },
    ],
    services: [
      'Full-system VW-Audi diagnostics — engine, DSG, electronics, adaptations',
      'Carbon cleaning on direct-injection engines',
      'Timing chain and tensioner inspection and replacement',
      'DSG and Haldex services on the actual interval',
      'PCV, water pump, and gasket repairs',
      'Oil services with VW 502/504/507-spec oils',
      'Pre-purchase inspections on any Audi or VW, at the seller’s location',
    ],
    maintenance: [
      'DSG fluid every 40,000 miles is not optional — the mechatronic unit that fails when it is skipped costs more than a decade of services.',
      'On older 1.8T and the 2.5 five-cylinder, timing belts and water pumps are due by time as well as mileage. A ten-year-old belt with 40k on it is still a ten-year-old belt.',
    ],
    independent: [
      'VW and Audi dealers quote from the flat-rate book. I diagnose the actual car in front of me, tell you what it needs now versus what can wait, and put it in writing — at your house, not a service lane.',
    ],
  },
  {
    slug: 'porsche',
    name: 'Porsche',
    shortName: 'Porsche',
    metaTitle: 'Porsche Service & Repair in South Jersey | Eway Auto Repairs',
    metaDescription:
      'Mobile Porsche specialist in South Jersey. 30+ years, ASE Master certified. 911, Boxster, Cayman, Cayenne, Macan — diagnostics, service, IMS-aware PPIs at your location.',
    h1: 'Porsche Service and Repair — South Jersey',
    intro:
      'Air-cooled to PDK — Porsches serviced with the care they were built with, and pre-purchase inspections that know exactly where each generation hides its risk.',
    opening: [
      'Nobody buys a Porsche casually, and nobody should service one casually. Each generation has a short, specific list of things that actually go wrong — and a much longer list of things the internet will scare you about. Thirty years of hands-on time tells them apart.',
      'I service 911s, Boxsters and Caymans, and the Cayenne/Macan/Panamera side of the family, with position-correct fluids and the discipline these cars deserve.',
    ],
    failuresHeading: 'Common problems I see on Porsche',
    failures: [
      {
        title: 'IMS bearing on M96 / M97 engines',
        body: 'The intermediate shaft bearing on 996/997.1-era 911s and 986/987 Boxsters is the famous one — and the risk is real but generation-specific. On a PPI I check for the retrofit and the oil-filter evidence; on ownership, an upgraded bearing at clutch time closes the topic.',
      },
      {
        title: 'Bore scoring on M96 / M97',
        body: 'A cold-start knock on cylinder bank 2, oil consumption, a sooty left tailpipe — bore scoring is the expensive risk on these engines and exactly why a Porsche PPI includes a borescope conversation, not just a scan.',
      },
      {
        title: 'Coolant pipes on 996/997 Turbo and Cayenne',
        body: 'The factory glued the coolant pipes into place on these engines; the glue lets go with age. Pinned or welded repairs fix it permanently — and it is a known item I check before it leaves you in a cloud of steam.',
      },
      {
        title: 'Air-oil separator failure',
        body: 'A puff of smoke at startup or high oil consumption on a flat-six is often the AOS, a maintenance-level part — not the engine rebuild it looks like from the driver’s seat.',
      },
      {
        title: 'Water pumps and low-temperature thermostats',
        body: 'Plastic-impeller pumps shed vanes into the cooling system with age. On higher-mileage cars I replace the pump before it fails and fit the low-temp thermostat while in there.',
      },
      {
        title: 'PDK and Tiptronic service intervals',
        body: 'PDK fluid is "lifetime" in the brochure and 60k-mile fluid in reality. Serviced on time, these transmissions are near-bulletproof; skipped, they are the most expensive part on the car.',
      },
    ],
    services: [
      'Annual and interval services with Porsche-approved oils and filters',
      'Porsche-specific diagnostics, over-rev report reads, and module coding',
      'Cooling system repairs — pumps, thermostats, pipes, radiators',
      'AOS, spark plug, coil, and gasket services on flat-six engines',
      'PDK/Tiptronic fluid services on the real interval',
      'Brake services including big-brake and PSM-equipped cars',
      'Pre-purchase inspections with generation-specific risk checks, at the seller’s location',
    ],
    maintenance: [
      'Porsches that sit deserve an annual oil change regardless of mileage — condensation and fuel dilution do not read the odometer.',
      'On any used Porsche, the over-rev report inside the DME tells the honest history of how the car was driven. I pull it on every PPI; sellers almost never know it exists.',
    ],
    independent: [
      'Porsche dealer labor is the highest in the region, and much of what these cars need is disciplined, well-informed maintenance — not dealership theater. You get factory-level capability, a written estimate, and the same person’s hands on the car every time.',
    ],
  },
  {
    slug: 'land-rover-jaguar',
    name: 'Land Rover & Jaguar',
    shortName: 'LR/Jaguar',
    metaTitle: 'Land Rover & Jaguar Repair in South Jersey | Eway Auto Repairs',
    metaDescription:
      'Mobile Land Rover and Jaguar specialist in South Jersey. 30+ years, ASE Master certified. Air suspension, timing chains, diagnostics and PPIs — we come to you.',
    h1: 'Land Rover and Jaguar Repair — South Jersey',
    intro:
      'British engineering, serviced by someone who knows its habits — air suspension, timing chains, cooling systems, and the electronics that tie it all together.',
    opening: [
      'Land Rovers and Jaguars share JLR engineering, and they reward owners who stay ahead of a known, predictable list of issues. Stay ahead of that list and these are genuinely great vehicles; fall behind it and they get expensive fast.',
      'I handle both sides of the family — Range Rovers and Discoveries, F-Paces and XFs — with the diagnostics the platforms require.',
    ],
    failuresHeading: 'Common problems I see on Land Rover and Jaguar',
    failures: [
      {
        title: 'Air suspension compressors and struts',
        body: 'The classic Range Rover/Discovery complaint: sagging overnight, "suspension fault" on the dash, a compressor that runs forever. A leaking strut fixed early saves the compressor; ignored, you replace both.',
      },
      {
        title: 'Timing chain guides on the 5.0 V8 and 3.0 supercharged V6',
        body: 'The AJ133 V8 and the supercharged V6 wear chain guides and tensioners — a rattle at cold start is the warning. Caught at the rattle stage it is a serious but bounded job; driven on, it is an engine.',
      },
      {
        title: 'Coolant crossover pipes and plastic cooling parts',
        body: 'Plastic crossover pipes buried under the supercharger weep and then let go. On any higher-mileage supercharged JLR engine, the cooling system deserves proactive attention, not reactive.',
      },
      {
        title: 'Supercharger nose cone and coupler wear',
        body: 'A rattle from the front of a supercharged engine at idle is often the coupler in the blower nose — a repairable item, and much cheaper than the supercharger a quick quote might name.',
      },
      {
        title: 'EGR and DPF problems on diesels',
        body: 'The TDV6 diesels clog EGR systems and particulate filters, especially on short-trip cars. Diagnosis matters: a regeneration and driving-pattern fix is very different money from a new DPF.',
      },
      {
        title: 'Electrical drains and module faults',
        body: 'A battery that dies over a weekend usually traces to a module staying awake — infotainment, gateway, or tailgate are the usual suspects. This is scan-tool detective work, and it is exactly the kind of problem shops give up on.',
      },
    ],
    services: [
      'JLR-specific diagnostics across engine, air suspension, and body electronics',
      'Air suspension repair — struts, compressors, valve blocks, calibration',
      'Timing chain inspection and replacement on V6 and V8 engines',
      'Cooling system overhauls on supercharged engines',
      'Oil, transmission, transfer case, and differential services on real intervals',
      'Brake and suspension work sized for 5,000-pound vehicles',
      'Pre-purchase inspections — especially important on this marque, at the seller’s location',
    ],
    maintenance: [
      'The ZF 8-speed in most JLR products is another "lifetime fluid" casualty — service it around 60–70k and it will outlast the rest of the truck.',
      'On any used Land Rover or Jaguar, budget realistically: the purchase price is the entry fee, and a pre-purchase inspection is the difference between a plan and a surprise.',
    ],
    independent: [
      'JLR dealer visits are famous for four-figure invoices and a loaner you keep for a week. Most of what these vehicles need is methodical diagnosis and disciplined maintenance — done at your driveway, with the estimate in writing first.',
    ],
  },
];
