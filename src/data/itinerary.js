export const itinerary = [
  {
    id: "T01",
    date: "2026-06-23",
    time: "18:00",
    title: "Taoyuan Airport overnight stay",
    location: "Cho Stay Capsule Hotel, Taoyuan Airport Terminal 2",
    city: "Taoyuan, Taiwan",
    attention: [
      "Pack passport, boarding pass, conference documents, adapters, and presentation backups before sleeping.",
      "Plan an early checkout around 04:30 for the 07:30 flight."
    ],
    relatedScenarioIds: ["S01"]
  },
  {
    id: "T02",
    date: "2026-06-24",
    time: "07:30-10:45",
    title: "STARLUX JX846 Taipei to Kumamoto",
    location: "TPE Terminal 1 to Kumamoto Airport",
    city: "Taoyuan to Kumamoto",
    attention: [
      "Japan is one hour ahead of Taiwan.",
      "Baggage allowance: two checked bags up to 23 kg each, plus 7 kg carry-on."
    ],
    relatedScenarioIds: ["S02", "S03"]
  },
  {
    id: "T03",
    date: "2026-06-24",
    time: "11:25",
    title: "Airport pickup after arrival",
    location: "Kumamoto Airport arrival exit",
    city: "Kumamoto, Japan",
    attention: [
      "The driver should wait with a name sign after arrival.",
      "Free waiting time ends around 12:25; contact the provider if immigration or baggage claim is delayed."
    ],
    relatedScenarioIds: ["S04", "S10"]
  },
  {
    id: "T04",
    date: "2026-06-24",
    time: "15:00-24:00",
    title: "Check in at Candeo Hotels Kumamoto Shinshigai",
    location: "Candeo Hotels Kumamoto Shinshigai, Chuo-ku Shinshigai 8-7",
    city: "Kumamoto, Japan",
    attention: [
      "If arriving before check-in, ask the front desk to keep luggage.",
      "Keep passport and hotel confirmation ready."
    ],
    relatedScenarioIds: ["S05"]
  },
  {
    id: "T05",
    date: "2026-06-25",
    time: "Conference day",
    title: "TBICS / ICLEA 2026 conference",
    location: "Kumamoto Prefectural Exchange Center, 8-9 Tetorihoncho",
    city: "Kumamoto, Japan",
    attention: [
      "Bring conference registration proof, presentation files, adapters, and a backup copy.",
      "Practice asking for the registration desk, room location, and presentation equipment."
    ],
    relatedScenarioIds: ["S06", "S07", "S08"]
  },
  {
    id: "T06",
    date: "2026-06-27",
    time: "Before 11:00",
    title: "Check out from Candeo and transfer to airport hotel",
    location: "Candeo Hotels Kumamoto Shinshigai to Airport Hotel Kumamoto",
    city: "Kumamoto, Japan",
    attention: [
      "This is the busiest transition day: city hotel checkout, conference wrap-up, and airport hotel check-in.",
      "Confirm luggage storage or transport before leaving for the conference venue."
    ],
    relatedScenarioIds: ["S05", "S09", "S10"]
  },
  {
    id: "T07",
    date: "2026-06-27",
    time: "15:00-24:00",
    title: "Check in at Airport Hotel Kumamoto",
    location: "Airport Hotel Kumamoto, 1484 Muro, Ozu Town",
    city: "Kumamoto, Japan",
    attention: [
      "The hotel is near Kumamoto Airport and does not include meals.",
      "Ask about the best departure time for the next morning flight."
    ],
    relatedScenarioIds: ["S09"]
  },
  {
    id: "T08",
    date: "2026-06-28",
    time: "11:55-13:20",
    title: "STARLUX JX847 Kumamoto to Taipei",
    location: "Kumamoto Airport to TPE Terminal 1",
    city: "Kumamoto to Taoyuan",
    attention: [
      "Arrive at Kumamoto Airport early enough for international check-in and security.",
      "Check receipts, conference materials, and baggage before leaving the hotel."
    ],
    relatedScenarioIds: ["S11"]
  }
];
