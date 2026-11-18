export const SITE = {
  name: 'Pro Car Security & Audio',
  phone: '2144895107',
  phoneDisplay: '(214) 489-5107',
  address: '725 Peach Tree Ln, Anna, TX 75409',
  hours: 'Mon–Sat · 10AM–5PM',
  /** Customer-facing region label (geo math still uses baseLat/baseLng) */
  marketingRegion: 'DFW',
  baseCity: 'Anna',
  baseState: 'TX',
  baseZip: '75409',
  /** WGS84 — shop base (address / dispatch) */
  baseLat: 33.3493,
  baseLng: -96.5489,
  serviceRadiusMiles: 50,
} as const

/** Map + ZIP zone checks — center of DFW metro (not shop address) */
export const DFW_CENTER = {
  lat: 32.7767,
  lng: -96.797,
  label: 'DFW',
} as const

export const services = [
  {
    id: 'car-audio',
    icon: '🔊',
    title: 'Car Audio',
    description: 'Speakers, stereos, subwoofers, and amplifiers — installed cleanly in your driveway.',
    priceAnchor: 'car-audio',
  },
  {
    id: 'motorcycle',
    icon: '🏍️',
    title: 'Motorcycle Audio',
    description: 'Audio built for bikes — hear your music on the road.',
    priceAnchor: 'motorcycle-audio',
  },
  {
    id: 'marine',
    icon: '⛵',
    title: 'Marine Audio',
    description: 'Weather-ready audio for boats and watercraft.',
    priceAnchor: 'marine-audio',
  },
  {
    id: 'security',
    icon: '🚨',
    title: 'Security & Tech',
    description: 'Alarms, remote start, GPS tracking, and dash cameras.',
    priceAnchor: 'security-systems',
  },
  {
    id: 'led',
    icon: '💡',
    title: 'Custom LED Lighting',
    description: 'Interior, exterior, and underglow lighting to match your style.',
    priceAnchor: 'led-lighting',
  },
] as const

/** DashCam-style labor tiers — ranges until client updates exact numbers */
export const installTiers = [
  {
    kicker: 'Tier 01 · Basic',
    name: 'Basic install',
    forLabel: 'Single device or swap',
    summary: 'Single device or straightforward swap',
    examples: 'Dash cam · interior LEDs · speaker upgrade',
    range: '$99 – $199',
    featured: false,
  },
  {
    kicker: 'Tier 02 · Standard',
    name: 'Standard install',
    forLabel: 'Moderate wiring',
    summary: 'Moderate wiring and integration',
    examples: 'Remote start · alarm · head unit · sub & amp',
    range: '$199 – $449',
    featured: true,
  },
  {
    kicker: 'Tier 03 · Advanced',
    name: 'Advanced install',
    forLabel: 'Complex / multi-system',
    summary: 'Complex routing or multiple systems',
    examples: 'Full audio build · marine package · multi-camera',
    range: '$449 – $1,200+',
    featured: false,
  },
] as const

export const trustItems = [
  { icon: '★', label: 'Licensed & insured' },
  { icon: '◎', label: 'Mobile — we come to you' },
  { icon: '✓', label: `${SITE.serviceRadiusMiles} mi standard zone` },
  { icon: '⚡', label: 'Pro install quality' },
] as const

export type PriceCategoryId =
  | 'car-audio'
  | 'motorcycle-audio'
  | 'marine-audio'
  | 'security-systems'
  | 'led-lighting'

export const priceCategories: {
  id: PriceCategoryId
  name: string
  icon: string
  items: { service: string; range: string; note: string }[]
}[] = [
  {
    id: 'car-audio',
    name: 'Car Audio',
    icon: '🔊',
    items: [
      { service: 'Speaker system upgrade', range: '$149 – $399', note: 'Installation included; parts extra' },
      { service: 'Head unit / stereo', range: '$99 – $299', note: 'Labor; stereo cost varies' },
      { service: 'Subwoofer & amplifier', range: '$299 – $699', note: 'Installation included' },
      { service: 'Full audio system build', range: '$599 – $2,500+', note: 'Custom quote by vehicle' },
    ],
  },
  {
    id: 'motorcycle-audio',
    name: 'Motorcycle Audio',
    icon: '🏍️',
    items: [
      { service: 'Speaker install', range: '$149 – $349', note: 'Installation included' },
      { service: 'Full bike audio package', range: '$399 – $900+', note: 'Custom quote' },
    ],
  },
  {
    id: 'marine-audio',
    name: 'Marine Audio',
    icon: '⛵',
    items: [
      { service: 'Marine speakers', range: '$199 – $499', note: 'Installation included' },
      { service: 'Marine stereo package', range: '$499 – $1,200', note: 'Hardware + labor' },
      { service: 'Full boat audio build', range: '$999 – $3,500+', note: 'Custom quote' },
    ],
  },
  {
    id: 'security-systems',
    name: 'Security & Tech',
    icon: '🚨',
    items: [
      { service: 'Car alarm', range: '$149 – $399', note: 'Installation included' },
      { service: 'Remote start', range: '$249 – $599', note: 'Installation included' },
      { service: 'GPS tracker', range: '$199 – $449', note: 'Hardware + installation' },
      { service: 'Dash camera', range: '$129 – $349', note: 'Installation included' },
    ],
  },
  {
    id: 'led-lighting',
    name: 'LED Lighting',
    icon: '💡',
    items: [
      { service: 'Interior LED', range: '$99 – $249', note: 'Installation included' },
      { service: 'Exterior accents', range: '$149 – $399', note: 'Installation included' },
      { service: 'Underglow / RGB', range: '$199 – $549', note: 'Installation included' },
      { service: 'Full lighting package', range: '$399 – $1,200+', note: 'Custom quote' },
    ],
  },
]

/** Representative cities inside ~50 mi of shop base (Anna, TX) — checker uses ZIP geocode; list is for scanability */
export const includedAreaCities = [
  'Anna',
  'McKinney',
  'Prosper',
  'Celina',
  'Melissa',
  'Van Alstyne',
  'Frisco',
  'Allen',
  'Plano',
  'Princeton',
  'Farmersville',
  'Wylie',
  'Murphy',
  'Lucas',
  'Fairview',
  'Lavon',
  'Aubrey',
  'Little Elm',
  'The Colony',
  'Sherman',
  'Denison',
  'Greenville',
  'Howe',
  'Gunter',
  'Weston',
  'Blue Ridge',
  'Leonard',
]
