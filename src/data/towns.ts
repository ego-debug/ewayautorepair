// Town landing pages for local search.
//
// READ THIS BEFORE EDITING. The build brief is explicit that these must not be
// one page find-and-replaced six times. Google treats near-duplicate location
// pages as doorway pages and demotes the whole site for them. So every town
// below has its own angle, drawn from what that town is actually like to work
// in, and the shared facts (credentials, process, pricing) are deliberately
// left on the pages those belong to instead of being repeated here.
//
// The local detail is written from general knowledge of South Jersey and needs
// the same confirmation pass as the brand failure lists. Anything the
// technician would not say out loud should be replaced with something he would.

export interface TownPage {
  slug: string; // full URL segment, e.g. cherry-hill-nj
  name: string;
  county: string;
  metaTitle: string;
  metaDescription: string;
  h1: string;
  intro: string;
  angle: string; // one-line summary of why this page is different
  body: string[];
  workHere: { title: string; body: string }[];
  nearby: string[];
}

export const TOWN_PAGES: TownPage[] = [
  {
    slug: 'cherry-hill-nj',
    name: 'Cherry Hill',
    county: 'Camden County',
    metaTitle: 'European Auto Repair in Cherry Hill NJ | Mobile BMW, Mercedes, Audi',
    metaDescription:
      'Mobile European car specialist serving Cherry Hill, NJ. 30+ years, ASE Master certified. Second opinions on dealer estimates, diagnostics and repair at your driveway.',
    h1: 'European Auto Repair in Cherry Hill, NJ',
    intro:
      'Cherry Hill has more franchise dealerships inside its borders than anywhere else I work, which means I see more dealer estimates here than anywhere else too.',
    angle: 'Dealership density, so the second-opinion angle leads.',
    body: [
      'Between the Route 70 and Route 38 corridors there is a new car dealership every few minutes of driving, and most of them have a service department attached. That is convenient right up until the estimate lands. A lot of my Cherry Hill work starts with somebody forwarding me a photo of a quote and asking whether it is real.',
      'Sometimes it is. When a dealer tells you an N54 needs a fuel pump, they are often right. But when the same sheet has six coils, six plugs, and a diagnostic fee attached to a misfire, I would rather look at the valve cover gasket first, because on that engine the oil in the plug wells causes the misfire far more often than the coils do.',
      'I come to your driveway in Cherry Hill, put the car on factory-level software, and tell you which lines on that estimate are the actual repair and which ones are the shop covering itself. You are welcome to hand me the quote and nothing else. That conversation is free.',
    ],
    workHere: [
      {
        title: 'Second opinions on dealer estimates',
        body: 'Bring me the sheet. I will tell you what the car needs now, what can wait a year, and what is on there because it is easy to sell.',
      },
      {
        title: 'Lease-return and post-warranty inspections',
        body: 'A lot of Cherry Hill cars come off a three-year lease or a four-year warranty at once. Knowing what is about to become your problem is worth an hour of my time.',
      },
      {
        title: 'Diagnostics that already failed somewhere else',
        body: 'Intermittent faults and electrical problems that a shop has already given up on. That is most of what I get called for here.',
      },
    ],
    nearby: ['Haddonfield', 'Collingswood', 'Voorhees', 'Merchantville', 'Pennsauken'],
  },
  {
    slug: 'marlton-nj',
    name: 'Marlton',
    county: 'Burlington County',
    metaTitle: 'European Auto Repair in Marlton NJ | Mobile Audi, VW, BMW Service',
    metaDescription:
      'Mobile European car specialist serving Marlton and Evesham Township, NJ. 30+ years, ASE Master certified. Post-warranty service and diagnostics at your driveway.',
    h1: 'European Auto Repair in Marlton, NJ',
    intro:
      'Marlton is full of cars that were bought new and have just come off warranty, which is exactly the point where a European car starts costing real money if nobody is paying attention.',
    angle: 'Newer cars hitting the end of warranty. Preventive maintenance leads.',
    body: [
      'The developments off Route 73 and Greentree Road are full of four and five year old Audis, BMWs and Volkswagens. They were bought new, they went to the dealer for free scheduled maintenance, and then the warranty ended and the free visits stopped. That is usually when I meet them.',
      'The problem is that the free maintenance schedule and the schedule that actually keeps the car alive are two different documents. A 2.0T that has never had its DSG fluid done at 40,000 miles is on a clock. A car that has been on 10,000 mile oil intervals its whole life has carbon on the intake valves whether or not anything feels wrong yet.',
      'The good news is that Marlton driveways are wide and the developments are easy to work in, so a catch-up service visit is straightforward. Getting a post-warranty car onto a sane schedule is the cheapest thing you will ever do for it.',
    ],
    workHere: [
      {
        title: 'The first post-warranty service',
        body: 'A full look at what the dealer schedule skipped: transmission fluid, brake fluid, plugs, filters, and an honest read on the carbon situation.',
      },
      {
        title: 'DSG and Haldex services',
        body: 'Due at 40,000 miles and skipped constantly, because nothing feels wrong until the mechatronic unit fails and the bill has four figures.',
      },
      {
        title: 'Timing chain checks on the 2.0T',
        body: 'On the earlier EA888 engines the tensioner is worth confirming before it becomes a cylinder head.',
      },
    ],
    nearby: ['Evesham Township', 'Medford', 'Mount Laurel', 'Voorhees', 'Cherry Hill'],
  },
  {
    slug: 'moorestown-nj',
    name: 'Moorestown',
    county: 'Burlington County',
    metaTitle: 'European Auto Repair in Moorestown NJ | Mobile Mercedes, Porsche, BMW',
    metaDescription:
      'Mobile European car specialist serving Moorestown, NJ. 30+ years, ASE Master certified. Long-term care for cars kept past 100,000 miles. I come to you.',
    h1: 'European Auto Repair in Moorestown, NJ',
    intro:
      'Moorestown is where I see the most European cars that somebody actually intends to keep, and those are my favorite cars to look after.',
    angle: 'Cars kept long term rather than traded. Long-horizon maintenance leads.',
    body: [
      'A lot of towns are full of cars on a three year cycle. Moorestown is not. I get called out to Mercedes and BMWs well past 100,000 miles, to Porsches that live in a garage and come out on weekends, and to the occasional older car that has been in the same family for fifteen years.',
      'Those cars need a completely different kind of attention. Nothing on them is under warranty, so there is no one to defer to, and the decisions that matter are the ones made three years before a part fails. Cooling systems on higher mileage German engines are worth replacing on a schedule rather than on the shoulder of the road. Fluids that were called lifetime are not.',
      'What that means in practice is that I would rather see a car once a year and tell you what is coming than meet it on a flatbed. If you plan to keep the car, tell me that up front, because it changes what I recommend.',
    ],
    workHere: [
      {
        title: 'Annual inspections on cars you plan to keep',
        body: 'A yearly look with a scan, a lift-free undercarriage check and a written list of what is coming in the next twelve months.',
      },
      {
        title: 'Preventive cooling system work',
        body: 'Water pumps, thermostats and plastic housings replaced before they let go, which on a higher mileage German engine is the difference between a service and a head gasket.',
      },
      {
        title: 'Cars that sit',
        body: 'Weekend and garage-kept cars have their own problems: fuel, brakes, tires and batteries all age by time rather than mileage.',
      },
    ],
    nearby: ['Mount Laurel', 'Maple Shade', 'Cinnaminson', 'Marlton', 'Riverton'],
  },
  {
    slug: 'voorhees-nj',
    name: 'Voorhees',
    county: 'Camden County',
    metaTitle: 'European Auto Repair in Voorhees NJ | Mobile Service, No Driveway Needed',
    metaDescription:
      'Mobile European car specialist serving Voorhees, NJ. 30+ years, ASE Master certified. I work in condo and townhome lots, not just private driveways.',
    h1: 'European Auto Repair in Voorhees, NJ',
    intro:
      'A fair number of Voorhees customers do not have a private driveway, and that turns out not to matter nearly as much as people expect.',
    angle: 'Townhome and condo parking. Answers the "I have no driveway" objection.',
    body: [
      'Between the townhome developments and the condo complexes off Haddonfield-Berlin Road, plenty of people here park in a shared lot rather than in front of their own house. The most common question I get from Voorhees is some version of whether mobile service works when you do not own the pavement your car is sitting on.',
      'It usually does. Diagnostics, inspections, most maintenance and a good share of repairs need a parking space and about an hour, not a bay. I bring my own power and my own light. Where it gets complicated is a complex with an explicit no-repairs rule in the association documents, and in that case the workaround is normally as simple as meeting you at your workplace instead, or at a relative’s house nearby.',
      'If you are not sure whether your lot is workable, call and describe it. I have probably already been to the complex, and if it will not work I will tell you on the phone rather than after driving out.',
    ],
    workHere: [
      {
        title: 'Shared and complex parking lots',
        body: 'I bring power and lighting. A standard space and about an hour covers most diagnostic and maintenance visits.',
      },
      {
        title: 'Service at your workplace instead',
        body: 'If your complex will not allow it, an office lot during the workday is usually the easier option anyway.',
      },
      {
        title: 'Pre-purchase inspections nearby',
        body: 'I inspect at the seller’s location anywhere in the area, so where you park has nothing to do with it.',
      },
    ],
    nearby: ['Cherry Hill', 'Gibbsboro', 'Berlin', 'Somerdale', 'Marlton'],
  },
  {
    slug: 'medford-nj',
    name: 'Medford',
    county: 'Burlington County',
    metaTitle: 'European Auto Repair in Medford NJ | Mobile Land Rover, Audi, BMW Service',
    metaDescription:
      'Mobile European car specialist serving Medford and Medford Lakes, NJ. 30+ years, ASE Master certified. Land Rover, SUV and all-wheel-drive work at your property.',
    h1: 'European Auto Repair in Medford, NJ',
    intro:
      'Medford is spread out, wooded, and a long way from anywhere with a lift, which is the situation mobile service was invented for.',
    angle: 'Rural, distant from shops, SUV heavy. Convenience and 4x4 work lead.',
    body: [
      'Getting a car to a specialist from out here is a genuine errand. It is not a ten minute drop-off, it is half a day, a second driver and a way home. That maths is why a lot of Medford cars end up at whichever general shop is closest rather than at someone who knows the platform.',
      'It is also SUV country. I see more Land Rovers, more Audi Q models and more all-wheel-drive wagons in Medford than in the closer-in towns, and those bring their own list. Air suspension is the big one on Range Rovers and Discoveries: a truck that sags overnight is telling you a strut is leaking, and dealing with it while it is still a strut is much cheaper than after the compressor has burned itself out trying to keep up.',
      'Properties out here also tend to have room, which makes this some of the easiest work I do. A long driveway with space to open both doors and set out tools beats most commercial bays I have worked in.',
    ],
    workHere: [
      {
        title: 'Air suspension on Land Rover and Range Rover',
        body: 'Struts, compressors, valve blocks and calibration. Caught early it is one part rather than three.',
      },
      {
        title: 'All-wheel-drive servicing',
        body: 'Haldex couplings, transfer cases and differentials, all of which get skipped because nothing feels wrong until it does.',
      },
      {
        title: 'Saving the trip entirely',
        body: 'Most diagnostics and maintenance happen at your property, so nobody has to arrange a second driver.',
      },
    ],
    nearby: ['Medford Lakes', 'Marlton', 'Shamong', 'Tabernacle', 'Mount Laurel'],
  },
  {
    slug: 'mount-laurel-nj',
    name: 'Mount Laurel',
    county: 'Burlington County',
    metaTitle: 'European Auto Repair in Mount Laurel NJ | Service at Your Office',
    metaDescription:
      'Mobile European car specialist serving Mount Laurel, NJ. 30+ years, ASE Master certified. I service your car in the office lot while you work. BMW, Mercedes, Audi.',
    h1: 'European Auto Repair in Mount Laurel, NJ',
    intro:
      'Mount Laurel is where most of my workplace visits happen. Your car sits in an office lot for eight hours anyway, so it may as well be getting fixed.',
    angle: 'Office parks by 295 and 73. Workplace service leads.',
    body: [
      'The business parks around the 295 and Route 73 interchange are full of cars that do nothing at all between nine and five. That is the single most useful fact about servicing a car in Mount Laurel. An oil service, a brake job or a full diagnostic scan fits comfortably inside a normal working day, and you do not lose an hour of your own time to any of it.',
      'The arrangement is simple. You tell me where you park and leave the key with reception or in a spot we agree on. I text you when I arrive, again with the estimate before anything is taken apart, and again when it is finished. Most people come out at the end of the day to a car that is done and an invoice on their phone.',
      'It is worth checking with your building first, because some managed properties have rules about it. In my experience most do not mind, particularly for a technician working out of one van in a marked space.',
    ],
    workHere: [
      {
        title: 'Service during the workday',
        body: 'Diagnostics, oil, brakes and most repairs done in the office lot while the car would have been sitting there regardless.',
      },
      {
        title: 'Written estimates by text',
        body: 'You get the estimate on your phone before any work starts, so approving it does not mean leaving your desk.',
      },
      {
        title: 'Commuter mileage servicing',
        body: 'Cars doing 295 every day accumulate miles fast. Brakes, fluids and tires come due sooner than the maintenance minder suggests.',
      },
    ],
    nearby: ['Moorestown', 'Marlton', 'Maple Shade', 'Hainesport', 'Medford'],
  },
];
