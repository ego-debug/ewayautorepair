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
      'Mobile BMW specialist serving South Jersey. 30+ years on BMW platforms, ASE Master certified. Diagnostics, maintenance, coding and pre-purchase inspections at your driveway.',
    h1: 'BMW Repair and Service — South Jersey',
    intro:
      'Thirty years on BMW platforms, from E30s through the current cars. Factory-level diagnostics, the right oil, and the coding done properly. In your driveway.',
    opening: [
      "I've been working on BMWs since the E30 was still a new car. Most of what comes in has a known cause, and after this long you tend to recognize it before the scan tool finishes booting up.",
      "That's where the savings are. A shop that only sees a BMW now and then works down a list, replacing parts until the light stays off, and you pay for every one of those guesses. I'd rather start with the part that fails on your engine and prove it before anything gets ordered.",
    ],
    failuresHeading: 'Common problems I see on BMW',
    failures: [
      {
        title: 'N54 / N55 charge pipe',
        body: "The plastic charge pipe splits under boost. You get a lean code, limp mode, and usually a whoosh sound when you get into the throttle. On a turbo car with a lean complaint it's the first thing I look at. An aluminum pipe puts an end to it.",
      },
      {
        title: 'Valve cover gasket leaking into the plug wells',
        body: "Oil works its way down into the spark plug wells and causes misfires. Those misfires get blamed on the coils constantly. If somebody handed you a quote for six coils and a set of plugs, let me look at it first. Most of the time the gasket is what's leaking and the coils are fine.",
      },
      {
        title: 'VANOS solenoids and seals',
        body: "Rough idle when the engine is cold, hesitation off idle, timing correlation codes. On the inline sixes I'm usually replacing solenoids or cleaning the screens behind them. The dealer estimate tends to have the whole VANOS unit on it.",
      },
      {
        title: 'N20 / N26 timing chain guides',
        body: "The four-cylinders built before roughly 2015 go through chain guides. A whine or a rattle from the back of the engine is not something to sit on. I've done plenty of these as a chain job, and I've also had a couple show up on a flatbed after the chain jumped. At that point you're pricing an engine.",
      },
      {
        title: 'Electric water pump on N52 / N54',
        body: "The electric pump usually gives out somewhere between 60 and 90 thousand miles, and it doesn't give much warning first. If yours is original and you're in that range, do the pump and thermostat together. Cheaper than getting towed off 73.",
      },
      {
        title: 'Oil filter housing gasket',
        body: 'It leaks down the front of the block onto the serpentine belt. Left alone long enough the belt comes apart, and pieces of it get pulled behind the crank pulley into the front seal. Now a gasket job is engine-out work.',
      },
      {
        title: 'Battery registration and coding',
        body: "A new battery has to be registered or the charging system keeps treating it like the old one, and you end up chasing electrical faults that were never really faults. Same story after certain repairs, where a module has to be told what changed. I do the coding while I'm there.",
      },
    ],
    services: [
      'Check engine light and drivability diagnostics using BMW software',
      'Oil services with LL-01 or LL-04 approved oil and the service reset done properly',
      'Cooling system work: water pumps, thermostats, expansion tanks, hoses',
      'Valve cover, oil filter housing, and oil pan leaks',
      'Brakes, including electronic parking brake retraction and wear sensors',
      'Battery replacement with registration and adaptations',
      'Pre-purchase inspections on any BMW, wherever the car happens to be',
    ],
    maintenance: [
      'BMW calls the transmission fluid lifetime. The ZF units in most of these cars want fluid and a filter around 60 to 80 thousand miles, and you can see the difference at 150. The ones that got serviced still shift right.',
      "Condition-based service will stretch an oil change past 10,000 miles. On a direct-injection turbo engine I'd rather see it every 5 to 7 with the correct LL oil. It's the cheapest thing you can do for the car.",
    ],
    independent: [
      "Dealer labor around here runs about $170 an hour, and you don't get any say in who works on your car. I have the diagnostic access the job requires, I've seen your engine's particular failure before, and you talk to me instead of a service writer. The rate is lower and I come to you.",
    ],
  },
  {
    slug: 'mercedes-benz',
    name: 'Mercedes-Benz',
    shortName: 'Mercedes',
    metaTitle: 'Mercedes-Benz Repair & Service in South Jersey | Eway Auto Repairs',
    metaDescription:
      'Mobile Mercedes-Benz specialist in South Jersey. 30+ years of experience, ASE Master certified. Diagnostics, Airmatic, transmission service and pre-purchase inspections at your driveway.',
    h1: 'Mercedes-Benz Repair and Service — South Jersey',
    intro:
      'W124s through the current lineup. Three decades of Mercedes diagnostics and service, and the judgment to tell you what needs doing now and what does not.',
    opening: [
      "A Mercedes hides its problems well, right up until it doesn't. The build quality is real and so is the list of things that go wrong on each platform. Knowing which noise is just how the car sounds and which one is a four-thousand-dollar warning is most of what thirty years buys you.",
      'I work on everything from daily-driver C-Classes to AMG cars, with STAR-level diagnostic access.',
    ],
    failuresHeading: 'Common problems I see on Mercedes-Benz',
    failures: [
      {
        title: 'M272 / M273 balance shaft and idler gear',
        body: "The early M272 V6 and M273 V8 wear the balance shaft sprocket, and it shows up as camshaft correlation codes in the P0016 and P0017 family. It's a big job and an expensive one. This is exactly the kind of thing an inspection is for, because it is much better to find it on somebody else's car.",
      },
      {
        title: 'Airmatic compressor and struts',
        body: 'If the car sits down overnight, or the compressor runs and runs, the air suspension is leaking somewhere. Catch it while it is a strut and you replace a strut. Ignore it and the compressor burns itself out trying to keep up, and then you buy both.',
      },
      {
        title: '722.9 conductor plate and valve body',
        body: "Harsh shifts, limp mode, sometimes a no-start after the car has been sitting. The conductor plate inside the 7-speed is a common cause, and it is a repair rather than a transmission replacement. That distinction doesn't always make it onto the estimate you were handed.",
      },
      {
        title: 'Oil cooler and rear main seal leaks',
        body: 'The M272-era engines seep from the oil cooler seals down into the engine valley. Older cars leak from the rear main. Once oil is out it runs everywhere, so the real work is finding where it started before anybody buys parts.',
      },
      {
        title: 'M271 timing chain stretch',
        body: 'The supercharged and early turbo four-cylinders stretch chains and wear the cam adjusters. A rattle at cold start on a C-Class means get it scanned this week, not next month.',
      },
      {
        title: 'Crankcase breather and misfires',
        body: 'Higher-mileage V6s that run rough for no obvious reason are frequently the breather system. Coils usually get replaced first anyway, and the rough running is still there afterward.',
      },
    ],
    services: [
      'Mercedes diagnostics across engine, transmission, SRS, and chassis systems',
      'A and B service done off the actual sheet, with MB-approved fluids, at your driveway',
      'Airmatic diagnosis and repair: struts, compressors, valve blocks',
      'Transmission services on the 722.6 and 722.9 despite the filled-for-life label',
      'Oil leak diagnosis and repair',
      'Brakes, including SBC-aware and electronic parking brake procedures where fitted',
      'Pre-purchase inspections on any Mercedes',
    ],
    maintenance: [
      'Mercedes calls the 722.9 sealed for life. The fluid still breaks down. A service around 60 to 70 thousand miles is the difference between a transmission that keeps going and a valve body at 120.',
      'The A and B service system is a fine schedule. What matters is what actually gets done under it. I work off the factory sheet for your chassis and mileage, and every line item shows up on the invoice.',
    ],
    independent: [
      "Dealer service advisors sell hours. I sell fixes. You talk directly to the person who has chased this exact failure down on this exact engine before, and the estimate is in writing before a tool comes out of the van.",
    ],
  },
  {
    slug: 'audi-volkswagen',
    name: 'Audi & Volkswagen',
    shortName: 'Audi/VW',
    metaTitle: 'Audi & Volkswagen Repair in South Jersey | Eway Auto Repairs',
    metaDescription:
      'Mobile Audi and VW specialist in South Jersey. 30+ years, ASE Master certified. Carbon cleaning, timing chain work, DSG service, diagnostics and pre-purchase inspections at your driveway.',
    h1: 'Audi and Volkswagen Repair — South Jersey',
    intro:
      'Same engines, same transmissions, same problems. I work on VW-Audi Group cars daily, from GTIs to Q7s, with the scan capability the electronics demand.',
    opening: [
      'Audi and Volkswagen share engines, transmissions, and electronics, so they share their failures too. The 2.0T that powers half the lineup has a well-documented list of them, and knowing that list is most of the diagnosis before the hood is even open.',
      "These cars are also less forgiving than most about maintenance that got skipped. A stretched timing chain or a DSG that never had fluid doesn't warn you politely.",
    ],
    failuresHeading: 'Common problems I see on Audi and VW',
    failures: [
      {
        title: '2.0T timing chain tensioner (EA888)',
        body: "The early tensioner can let the chain skip on a cold start, and this is an interference engine, so that means bent valves. If your pre-2013 2.0T rattles for a second when you first turn the key, stop driving it and call me. The updated tensioner is not an expensive part, and I would much rather install one than have a conversation with you about a cylinder head.",
      },
      {
        title: 'Carbon buildup on the intake valves',
        body: "Direct injection means no fuel ever washes across the back of the intake valves, so carbon builds up there instead. Rough idle when cold, misfires on cold start, and the car just doesn't pull the way it used to. Walnut blasting cleans it off. On FSI and TFSI engines this is normal somewhere between 60 and 100 thousand miles and it doesn't mean anything is broken.",
      },
      {
        title: 'PCV valve and oil separator',
        body: 'A whistle from the engine bay, oil consumption, rough idle, or an oil cap that fights you when you try to open it. The diaphragm tears and the engine starts pulling a vacuum leak through it. Cheap part, and it gets mistaken for something much worse fairly often.',
      },
      {
        title: 'Water pump and thermostat housing',
        body: 'The composite pump and housing assemblies weep coolant down onto the block. If you smell coolant, or you are topping off the reservoir more than once in a blue moon, have it looked at before it lets go on you somewhere inconvenient.',
      },
      {
        title: 'Oil consumption on 2.0T and 3.0T',
        body: 'Some EA888 generations use oil because of how the piston rings were designed. The supercharged 3.0T has habits of its own. Whether yours is normal for the engine or an actual problem comes down to a measured consumption test, and it is one of the first things I check on a used Audi.',
      },
      {
        title: 'DSG and Haldex service that never happened',
        body: 'DSG fluid is due every 40,000 miles. Haldex cars need the rear coupling done as well. Both get skipped constantly because nothing feels wrong at the time, and both failures cost many times what the service would have.',
      },
    ],
    services: [
      'Full-system VW-Audi diagnostics: engine, DSG, electronics, adaptations',
      'Carbon cleaning on direct-injection engines',
      'Timing chain and tensioner inspection and replacement',
      'DSG and Haldex services on the real interval',
      'PCV, water pump, and gasket work',
      'Oil services with VW 502, 504, or 507 spec oil',
      'Pre-purchase inspections on any Audi or VW',
    ],
    maintenance: [
      'DSG fluid every 40,000 miles is not optional. The mechatronic unit that fails when it gets skipped costs more than a decade of services would have.',
      'On the older 1.8T and the 2.5 five-cylinder, timing belts are due by time as much as by mileage. A ten-year-old belt with 40,000 miles on it is still a ten-year-old belt.',
    ],
    independent: [
      "VW and Audi dealers quote out of the flat-rate book. I diagnose the car that's in front of me, tell you what it needs now and what can wait, and put it in writing. At your house, not in a service lane.",
    ],
  },
  {
    slug: 'porsche',
    name: 'Porsche',
    shortName: 'Porsche',
    metaTitle: 'Porsche Service & Repair in South Jersey | Eway Auto Repairs',
    metaDescription:
      'Mobile Porsche specialist in South Jersey. 30+ years, ASE Master certified. 911, Boxster, Cayman, Cayenne, Macan. Diagnostics, service and inspections at your location.',
    h1: 'Porsche Service and Repair — South Jersey',
    intro:
      'Air-cooled through PDK. Porsches serviced with the care they were built with, and inspections that know where each generation hides its risk.',
    opening: [
      'Nobody buys a Porsche casually and nobody should service one casually either. Each generation has a short list of real problems and a much longer list of things the forums will scare you about. Thirty years of hands-on time is how you tell those apart.',
      'I service 911s, Boxsters and Caymans, and the Cayenne and Macan side of the family. Correct fluids, correct torque, and no shortcuts on cars that were not built with any.',
    ],
    failuresHeading: 'Common problems I see on Porsche',
    failures: [
      {
        title: 'IMS bearing on M96 / M97 engines',
        body: 'The intermediate shaft bearing on the 996 and 997.1 cars and the 986 and 987 Boxster and Cayman is the famous one. The risk is real, but it is specific to certain years and certain bearing types, and the internet has it worse than it is. On an inspection I check whether the retrofit was already done and what is sitting in the oil filter. If you own one, an upgraded bearing at clutch time closes the subject for good.',
      },
      {
        title: 'Bore scoring on M96 / M97',
        body: 'Cold-start knock on the bank 2 side, oil consumption, a sooty left tailpipe. Bore scoring is the expensive risk on these engines, and it is why a Porsche inspection includes a borescope conversation and not just a scan.',
      },
      {
        title: 'Coolant pipes on 996/997 Turbo and Cayenne',
        body: "Porsche glued the coolant pipes into place on these engines, and the glue lets go with age and heat. Pinning or welding them is a permanent fix. I would rather do that on a schedule than on the shoulder of 295.",
      },
      {
        title: 'Air-oil separator',
        body: 'A cloud of smoke at startup, or oil disappearing with no visible leak, is often the AOS. It is a maintenance part. From the driver seat it looks like the engine is finished.',
      },
      {
        title: 'Water pumps and low-temp thermostats',
        body: 'Plastic impellers shed vanes as they age, and the pieces end up circulating through the cooling system. On a higher-mileage car I replace the pump before it fails and put the low-temperature thermostat in while everything is already apart.',
      },
      {
        title: 'PDK and Tiptronic service',
        body: 'PDK fluid is lifetime in the brochure and 60,000-mile fluid in the real world. Serviced on schedule these hold up extremely well. The ones that never got done are the most expensive repair on the car.',
      },
    ],
    services: [
      'Annual and interval services with Porsche-approved oil and filters',
      'Porsche diagnostics, over-rev report reads, and module coding',
      'Cooling system repairs: pumps, thermostats, pipes, radiators',
      'AOS, spark plug, coil, and gasket work on flat-six engines',
      'PDK and Tiptronic fluid services on the real interval',
      'Brake service, including big-brake and PSM-equipped cars',
      'Pre-purchase inspections with generation-specific risk checks',
    ],
    maintenance: [
      'A Porsche that mostly sits still needs an oil change once a year regardless of what the odometer says. Condensation and fuel dilution do not care how many miles you drove.',
      'The DME stores an over-rev report that tells you honestly how the car was driven. I pull it on every inspection. Most sellers have no idea it is in there.',
    ],
    independent: [
      'Porsche dealer labor is the highest in the region, and a lot of what these cars need is disciplined maintenance rather than anything exotic. You get the same capability, a written estimate, and the same set of hands on the car every time.',
    ],
  },
  {
    slug: 'land-rover-jaguar',
    name: 'Land Rover & Jaguar',
    shortName: 'LR/Jaguar',
    metaTitle: 'Land Rover & Jaguar Repair in South Jersey | Eway Auto Repairs',
    metaDescription:
      'Mobile Land Rover and Jaguar specialist in South Jersey. 30+ years, ASE Master certified. Air suspension, timing chains, diagnostics and pre-purchase inspections at your driveway.',
    h1: 'Land Rover and Jaguar Repair — South Jersey',
    intro:
      'British engineering, serviced by somebody who knows its habits. Air suspension, timing chains, cooling systems, and the electronics tying all of it together.',
    opening: [
      'Land Rovers and Jaguars share JLR engineering, and they reward an owner who stays in front of a fairly predictable list of problems. Stay ahead of that list and these are excellent vehicles. Fall behind it and they get expensive in a hurry.',
      'I work on both sides of the family, Range Rovers and Discoveries as well as the F-Pace and XF cars.',
    ],
    failuresHeading: 'Common problems I see on Land Rover and Jaguar',
    failures: [
      {
        title: 'Air suspension compressors and struts',
        body: 'The classic one. Truck sags overnight, suspension fault comes up on the dash, compressor runs longer every time. A leaking strut caught early is just a strut. Left alone it kills the compressor and then you are buying both.',
      },
      {
        title: 'Timing chain guides on the 5.0 V8 and 3.0 supercharged V6',
        body: 'The AJ133 V8 and the supercharged V6 wear chain guides and tensioners. A rattle at cold start is the warning. It is a serious job at that stage but a bounded one, and if you drive on it long enough the conversation turns into an engine instead.',
      },
      {
        title: 'Coolant crossover pipes',
        body: 'Plastic crossover pipes sit down under the supercharger and weep until they do not. On any higher-mileage supercharged JLR engine the cooling system is worth getting ahead of rather than waiting on.',
      },
      {
        title: 'Supercharger nose cone and coupler',
        body: 'A rattle from the front of a supercharged engine at idle is often the coupler inside the blower nose. That is a repairable part. A quick estimate might have a whole supercharger on it.',
      },
      {
        title: 'EGR and DPF on the diesels',
        body: 'The TDV6 diesels clog EGR systems and particulate filters, mostly on cars that only ever do short trips. Sometimes the answer is a forced regeneration and an honest talk about how the truck gets driven. Sometimes it is a filter. Those are very different numbers, so it is worth diagnosing properly.',
      },
      {
        title: 'Electrical drains and module faults',
        body: 'A battery that is dead after a weekend usually means a module is not going to sleep. Infotainment, the gateway, and the tailgate are the usual suspects. This is scan tool detective work, and it is the kind of problem shops quote once and then give up on.',
      },
    ],
    services: [
      'JLR diagnostics across engine, air suspension, and body electronics',
      'Air suspension repair: struts, compressors, valve blocks, calibration',
      'Timing chain inspection and replacement on the V6 and V8 engines',
      'Cooling system overhauls on supercharged engines',
      'Oil, transmission, transfer case, and differential services',
      'Brake and suspension work sized for a five-thousand-pound vehicle',
      'Pre-purchase inspections, which matter more on this marque than most',
    ],
    maintenance: [
      'The ZF 8-speed in most JLR products is another lifetime-fluid casualty. Service it around 60 to 70 thousand miles and it will outlast the rest of the truck.',
      'If you are buying a used Land Rover or Jaguar, budget honestly. The purchase price is the entry fee. An inspection beforehand is the difference between a plan and a surprise.',
    ],
    independent: [
      'JLR dealer visits are famous for four-figure invoices and a loaner you keep for a week. Most of what these vehicles need is methodical diagnosis and maintenance that actually gets done, at your driveway, with the estimate in writing first.',
    ],
  },
];
