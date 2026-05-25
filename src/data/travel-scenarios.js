export const travelScenarios = [
  {
    id: "S01",
    name: "Taoyuan Airport Overnight Stay",
    location: "Cho Stay Capsule Hotel / Taoyuan Airport",
    trip_context: "2026/6/23 night to 2026/6/24 early morning",
    staff_role: "Hotel or airport staff",
    attention: [
      "Sleep near the airport, then move early from Terminal 2 to Terminal 1.",
      "Keep passport, boarding pass, conference documents, adapters, and presentation files in one bag."
    ],
    key_questions_officer_asks: [
      "May I see your reservation confirmation?",
      "What time would you like to check out?"
    ],
    your_answers: [
      "I have a reservation for tonight.",
      "I plan to check out around 4:30 tomorrow morning."
    ],
    english: [
      { speaker: "You", text: "I have a reservation for tonight.", zh: "我今晚有預約住宿。" },
      { speaker: "You", text: "I plan to check out around 4:30 tomorrow morning.", zh: "我預計明天早上四點半左右退房。" },
      { speaker: "You", text: "Could you tell me the fastest way to Terminal 1?", zh: "可以告訴我到第一航廈最快的方式嗎？" }
    ],
    japanese: [
      { speaker: "You", text: "今夜、予約しています。", zh: "我今晚有預約。" },
      { speaker: "You", text: "明日の朝4時半ごろにチェックアウトする予定です。", zh: "我預計明天早上四點半左右退房。" },
      { speaker: "You", text: "第一ターミナルへ一番早い行き方を教えていただけますか。", zh: "可以告訴我到第一航廈最快的方式嗎？" }
    ],
    key_vocabulary: [
      { en: "reservation", jp: "予約", zh: "預約" },
      { en: "check out", jp: "チェックアウト", zh: "退房" },
      { en: "terminal", jp: "ターミナル", zh: "航廈" }
    ]
  },
  {
    id: "S02",
    name: "Flight Check-in: JX846 to Kumamoto",
    location: "TPE Terminal 1 airline counter",
    trip_context: "2026/6/24 07:30 STARLUX JX846",
    staff_role: "Airline check-in staff",
    attention: [
      "Arrive early for the 07:30 departure.",
      "Baggage allowance is two checked bags up to 23 kg each, plus 7 kg carry-on."
    ],
    key_questions_officer_asks: [
      "May I see your passport?",
      "Do you have any bags to check?",
      "Would you like an aisle seat or a window seat?"
    ],
    your_answers: [
      "I would like to check in for flight JX846 to Kumamoto.",
      "I have one checked bag.",
      "An aisle seat would be great, if available."
    ],
    english: [
      { speaker: "You", text: "I would like to check in for flight JX846 to Kumamoto.", zh: "我想辦理前往熊本的 JX846 航班報到。" },
      { speaker: "You", text: "I have one checked bag.", zh: "我有一件托運行李。" },
      { speaker: "You", text: "An aisle seat would be great, if available.", zh: "如果可以的話，我想要走道位。" }
    ],
    japanese: [
      { speaker: "You", text: "熊本行きのJX846便のチェックインをお願いします。", zh: "我想辦理前往熊本的 JX846 航班報到。" },
      { speaker: "You", text: "預け荷物が一つあります。", zh: "我有一件托運行李。" },
      { speaker: "You", text: "可能であれば、通路側の席をお願いします。", zh: "如果可以的話，我想要走道位。" }
    ],
    key_vocabulary: [
      { en: "passport", jp: "パスポート", zh: "護照" },
      { en: "checked bag", jp: "預け荷物", zh: "托運行李" },
      { en: "aisle seat", jp: "通路側の席", zh: "走道位" }
    ]
  },
  {
    id: "S03",
    name: "Immigration / Arrival in Kumamoto",
    location: "Kumamoto Airport immigration counter",
    trip_context: "2026/6/24 10:45 arrival at KMJ",
    officer_role: "Japanese immigration officer",
    attention: [
      "Answer simply and consistently: academic conference, a few days, staying in Kumamoto, return ticket to Taiwan.",
      "Keep hotel and conference information ready."
    ],
    key_questions_officer_asks: [
      "What is the purpose of your visit?",
      "How long will you be staying?",
      "Where will you be staying?",
      "Do you have a return ticket?"
    ],
    your_answers: [
      "I'm here to attend an academic conference and present a research paper.",
      "I'll be staying until June 28.",
      "I'll be staying at hotels in Kumamoto.",
      "Yes, I have a return ticket back to Taiwan."
    ],
    english: [
      { speaker: "Officer", text: "What is the purpose of your visit?", zh: "你的來訪目的？" },
      { speaker: "You", text: "I'm here to attend an academic conference and present a research paper.", zh: "我是來參加學術研討會並發表研究論文。" },
      { speaker: "Officer", text: "How long will you be staying?", zh: "你會停留多久？" },
      { speaker: "You", text: "I'll be staying until June 28.", zh: "我會停留到 6 月 28 日。" }
    ],
    japanese: [
      { speaker: "You", text: "学会に参加し、研究発表をするために来ました。", zh: "我是來參加學術研討會並發表研究。" },
      { speaker: "You", text: "6月28日まで滞在します。", zh: "我會停留到 6 月 28 日。" },
      { speaker: "You", text: "熊本市内のホテルに泊まります。", zh: "我會住在熊本市區的飯店。" }
    ],
    key_vocabulary: [
      { en: "purpose", jp: "目的", zh: "目的" },
      { en: "academic conference", jp: "学会", zh: "學術研討會" },
      { en: "return ticket", jp: "帰りの航空券", zh: "回程機票" }
    ]
  },
  {
    id: "S04",
    name: "Airport Pickup",
    location: "Kumamoto Airport arrival exit",
    trip_context: "2026/6/24 11:25 pickup, free waiting until about 12:25",
    staff_role: "Pickup driver",
    attention: [
      "The driver should wait with a name sign.",
      "If immigration or baggage claim is delayed, contact the provider immediately."
    ],
    key_questions_officer_asks: [
      "Are you Mr. Bai?",
      "Do you have any luggage?"
    ],
    your_answers: [
      "I booked an airport pickup. Are you waiting for Bai Zong-En?",
      "Yes, that's me. Thank you for waiting.",
      "I have one suitcase."
    ],
    english: [
      { speaker: "You", text: "I booked an airport pickup. Are you waiting for Bai Zong-En?", zh: "我有預約接機。請問你是在等 Bai Zong-En 嗎？" },
      { speaker: "You", text: "Sorry, immigration took longer than expected.", zh: "不好意思，入境花的時間比預期久。" },
      { speaker: "You", text: "Could you take me to Candeo Hotels Kumamoto Shinshigai?", zh: "可以載我去 Candeo Hotels Kumamoto Shinshigai 嗎？" }
    ],
    japanese: [
      { speaker: "You", text: "空港送迎を予約しています。Bai Zong-Enを待っていますか。", zh: "我有預約接機。請問你是在等 Bai Zong-En 嗎？" },
      { speaker: "You", text: "入国審査に時間がかかりました。すみません。", zh: "入境審查花了些時間，不好意思。" },
      { speaker: "You", text: "カンデオホテルズ熊本新市街までお願いします。", zh: "麻煩到 Candeo Hotels Kumamoto Shinshigai。" }
    ],
    key_vocabulary: [
      { en: "airport pickup", jp: "空港送迎", zh: "接機" },
      { en: "name sign", jp: "ネームボード", zh: "舉牌" },
      { en: "suitcase", jp: "スーツケース", zh: "行李箱" }
    ]
  },
  {
    id: "S05",
    name: "Hotel Check-in: Candeo Kumamoto",
    location: "Candeo Hotels Kumamoto Shinshigai front desk",
    trip_context: "2026/6/24 check-in, 2026/6/27 checkout",
    staff_role: "Hotel front desk staff",
    attention: [
      "Check-in starts at 15:00.",
      "If arriving early, ask to store luggage.",
      "Breakfast can be added separately if needed."
    ],
    key_questions_officer_asks: [
      "May I see your passport?",
      "Would you like to add breakfast?",
      "Do you need luggage storage?"
    ],
    your_answers: [
      "I have a reservation under the name Zong-En Bai.",
      "Could you keep my luggage until check-in?",
      "Could you tell me the Wi-Fi password?"
    ],
    english: [
      { speaker: "You", text: "I have a reservation under the name Zong-En Bai.", zh: "我用 Zong-En Bai 的名字訂了房。" },
      { speaker: "You", text: "Could you keep my luggage until check-in?", zh: "可以在入住前幫我寄放行李嗎？" },
      { speaker: "You", text: "Could you tell me the best way to get to the conference venue?", zh: "可以告訴我到會議場地最好的方式嗎？" }
    ],
    japanese: [
      { speaker: "You", text: "Zong-En Baiの名前で予約しています。", zh: "我用 Zong-En Bai 的名字訂了房。" },
      { speaker: "You", text: "チェックインまで荷物を預かっていただけますか。", zh: "可以在入住前幫我寄放行李嗎？" },
      { speaker: "You", text: "会場までの行き方を教えていただけますか。", zh: "可以告訴我到會場的方式嗎？" }
    ],
    key_vocabulary: [
      { en: "front desk", jp: "フロント", zh: "櫃台" },
      { en: "luggage storage", jp: "荷物預かり", zh: "寄放行李" },
      { en: "Wi-Fi password", jp: "Wi-Fiのパスワード", zh: "Wi-Fi 密碼" }
    ]
  },
  {
    id: "S06",
    name: "Conference Registration",
    location: "Kumamoto Prefectural Exchange Center",
    trip_context: "TBICS / ICLEA 2026, June 25-27",
    staff_role: "Conference registration staff",
    attention: [
      "Bring registration proof and ID.",
      "Confirm the room and time for the ICLEA paper session."
    ],
    key_questions_officer_asks: [
      "May I have your name and affiliation?",
      "Are you a presenter?"
    ],
    your_answers: [
      "My name is Zong-En Bai.",
      "I'm presenting a full paper at ICLEA 2026.",
      "Could you tell me where the registration desk is?"
    ],
    english: [
      { speaker: "You", text: "Where is the conference registration desk?", zh: "會議報到櫃台在哪裡？" },
      { speaker: "You", text: "My name is Zong-En Bai. I'm presenting a full paper at ICLEA 2026.", zh: "我是 Zong-En Bai。我會在 ICLEA 2026 發表 full paper。" },
      { speaker: "You", text: "Could you tell me where my presentation room is?", zh: "可以告訴我我的發表教室在哪裡嗎？" }
    ],
    japanese: [
      { speaker: "You", text: "学会の受付はどこですか。", zh: "會議報到櫃台在哪裡？" },
      { speaker: "You", text: "ICLEA 2026でフルペーパーを発表します。", zh: "我會在 ICLEA 2026 發表 full paper。" },
      { speaker: "You", text: "発表会場はどこか教えていただけますか。", zh: "可以告訴我發表會場在哪裡嗎？" }
    ],
    key_vocabulary: [
      { en: "registration desk", jp: "受付", zh: "報到櫃台" },
      { en: "presenter", jp: "発表者", zh: "發表者" },
      { en: "venue", jp: "会場", zh: "會場" }
    ]
  },
  {
    id: "S07",
    name: "Presentation Logistics",
    location: "ICLEA presentation room",
    trip_context: "Before the paper presentation",
    staff_role: "Session chair or technical staff",
    attention: [
      "Prepare slides in cloud storage and on a USB drive.",
      "Check projector, audio, and time limit before the session starts."
    ],
    key_questions_officer_asks: [
      "Do you need any technical support?",
      "How long is your presentation?"
    ],
    your_answers: [
      "Could I test my slides before the session?",
      "Do I need to use my own laptop?",
      "Could you let me know when I have two minutes left?"
    ],
    english: [
      { speaker: "You", text: "Could I test my slides before the session?", zh: "我可以在場次開始前測試投影片嗎？" },
      { speaker: "You", text: "Do I need to use my own laptop, or should I upload the file here?", zh: "我需要用自己的筆電，還是把檔案上傳到這裡？" },
      { speaker: "You", text: "Could you let me know when I have two minutes left?", zh: "剩兩分鐘時可以提醒我嗎？" }
    ],
    japanese: [
      { speaker: "You", text: "発表前にスライドを確認してもよろしいですか。", zh: "我可以在發表前確認投影片嗎？" },
      { speaker: "You", text: "自分のパソコンを使う必要がありますか。", zh: "我需要使用自己的電腦嗎？" },
      { speaker: "You", text: "残り2分になったら教えていただけますか。", zh: "剩兩分鐘時可以提醒我嗎？" }
    ],
    key_vocabulary: [
      { en: "slides", jp: "スライド", zh: "投影片" },
      { en: "projector", jp: "プロジェクター", zh: "投影機" },
      { en: "time limit", jp: "制限時間", zh: "時間限制" }
    ]
  },
  {
    id: "S08",
    name: "Academic Networking",
    location: "Conference hall or reception",
    trip_context: "TBICS / ICLEA social moments",
    attention: [
      "Use a short self-introduction first.",
      "Ask one follow-up question about the other person's research."
    ],
    english: [
      { speaker: "You", text: "Hi, I'm Zong-En Bai from Taiwan. My research focuses on AI learning companions and self-regulated learning.", zh: "您好，我是來自台灣的 Zong-En Bai。我的研究聚焦於 AI 學習伴侶與自我調節學習。" },
      { speaker: "You", text: "I enjoyed your presentation. Could you tell me more about your research context?", zh: "我很喜歡您的發表。可以多分享您的研究情境嗎？" },
      { speaker: "You", text: "May I keep in touch with you after the conference?", zh: "會議後可以與您保持聯繫嗎？" }
    ],
    japanese: [
      { speaker: "You", text: "台湾から来ましたBai Zong-Enです。AI学習コンパニオンと自己調整学習を研究しています。", zh: "我是來自台灣的 Bai Zong-En，研究 AI 學習伴侶與自我調節學習。" },
      { speaker: "You", text: "ご発表、とても興味深かったです。研究の背景についてもう少し教えていただけますか。", zh: "您的發表很有趣，可以多告訴我研究背景嗎？" },
      { speaker: "You", text: "学会の後も連絡を取ってもよろしいですか。", zh: "會議後可以保持聯繫嗎？" }
    ],
    key_vocabulary: [
      { en: "research focuses on", jp: "研究しています", zh: "研究聚焦於" },
      { en: "presentation", jp: "発表", zh: "發表" },
      { en: "keep in touch", jp: "連絡を取る", zh: "保持聯繫" }
    ]
  },
  {
    id: "S09",
    name: "Transfer to Airport Hotel",
    location: "Kumamoto city to Airport Hotel Kumamoto",
    trip_context: "2026/6/27 after city hotel checkout",
    staff_role: "Hotel staff or taxi driver",
    attention: [
      "This day combines checkout, conference wrap-up, and transfer.",
      "Ask about luggage storage or taxi timing before leaving the city hotel."
    ],
    key_questions_officer_asks: [
      "Where would you like to go?",
      "Do you need a taxi?"
    ],
    your_answers: [
      "Could you call a taxi to Airport Hotel Kumamoto?",
      "Could you keep my luggage until this afternoon?",
      "How long does it usually take to get there?"
    ],
    english: [
      { speaker: "You", text: "Could you call a taxi to Airport Hotel Kumamoto?", zh: "可以幫我叫計程車到熊本機場飯店嗎？" },
      { speaker: "You", text: "Could you keep my luggage until this afternoon?", zh: "可以幫我寄放行李到今天下午嗎？" },
      { speaker: "You", text: "How long does it usually take to get there?", zh: "通常到那裡要多久？" }
    ],
    japanese: [
      { speaker: "You", text: "エアポートホテル熊本までタクシーを呼んでいただけますか。", zh: "可以幫我叫計程車到熊本機場飯店嗎？" },
      { speaker: "You", text: "今日の午後まで荷物を預かっていただけますか。", zh: "可以幫我寄放行李到今天下午嗎？" },
      { speaker: "You", text: "そこまで普通どのくらい時間がかかりますか。", zh: "通常到那裡要多久？" }
    ],
    key_vocabulary: [
      { en: "taxi", jp: "タクシー", zh: "計程車" },
      { en: "airport hotel", jp: "空港ホテル", zh: "機場飯店" },
      { en: "how long", jp: "どのくらい", zh: "多久" }
    ]
  },
  {
    id: "S10",
    name: "Emergency: Delay or Lost Luggage",
    location: "Airport, hotel, or pickup meeting point",
    trip_context: "Use when arrival, pickup, or hotel check-in does not go smoothly",
    attention: [
      "Stay concise: explain the problem, location, and what help you need.",
      "Do not share PINs or sensitive booking details with strangers."
    ],
    english: [
      { speaker: "You", text: "My flight arrived, but baggage claim is taking longer than expected.", zh: "我的班機已抵達，但領行李花的時間比預期久。" },
      { speaker: "You", text: "I cannot find my driver. Could you help me contact the pickup provider?", zh: "我找不到司機，可以幫我聯絡接機供應商嗎？" },
      { speaker: "You", text: "My luggage has not arrived. Where is the lost baggage counter?", zh: "我的行李沒有到。遺失行李櫃台在哪裡？" }
    ],
    japanese: [
      { speaker: "You", text: "飛行機は到着しましたが、荷物の受け取りに時間がかかっています。", zh: "班機已抵達，但領行李花了不少時間。" },
      { speaker: "You", text: "運転手が見つかりません。送迎会社に連絡するのを手伝っていただけますか。", zh: "我找不到司機，可以幫我聯絡接機公司嗎？" },
      { speaker: "You", text: "荷物がまだ出てきません。遺失物カウンターはどこですか。", zh: "我的行李還沒出來。遺失物櫃台在哪裡？" }
    ],
    key_vocabulary: [
      { en: "delayed", jp: "遅れている", zh: "延誤" },
      { en: "baggage claim", jp: "手荷物受取所", zh: "行李提領處" },
      { en: "lost baggage", jp: "遺失物", zh: "遺失行李" }
    ]
  },
  {
    id: "S11",
    name: "Return Flight: JX847 to Taipei",
    location: "Kumamoto Airport check-in counter",
    trip_context: "2026/6/28 11:55 STARLUX JX847",
    staff_role: "Airline check-in staff",
    attention: [
      "Leave the airport hotel early enough for international check-in and security.",
      "Check receipts, conference materials, and baggage before leaving the hotel."
    ],
    key_questions_officer_asks: [
      "May I see your passport?",
      "Do you have any checked baggage?",
      "Are you carrying any liquids or restricted items?"
    ],
    your_answers: [
      "I would like to check in for flight JX847 to Taipei.",
      "I have one checked bag.",
      "Could you tell me which gate I should go to?"
    ],
    english: [
      { speaker: "You", text: "I would like to check in for flight JX847 to Taipei.", zh: "我想辦理飛往台北的 JX847 航班報到。" },
      { speaker: "You", text: "I have one checked bag.", zh: "我有一件托運行李。" },
      { speaker: "You", text: "Could you tell me which gate I should go to?", zh: "可以告訴我要去幾號登機門嗎？" }
    ],
    japanese: [
      { speaker: "You", text: "台北行きのJX847便のチェックインをお願いします。", zh: "我想辦理飛往台北的 JX847 航班報到。" },
      { speaker: "You", text: "預け荷物が一つあります。", zh: "我有一件托運行李。" },
      { speaker: "You", text: "どの搭乗口に行けばいいですか。", zh: "我要去幾號登機門？" }
    ],
    key_vocabulary: [
      { en: "boarding gate", jp: "搭乗口", zh: "登機門" },
      { en: "restricted items", jp: "制限品", zh: "限制物品" },
      { en: "security check", jp: "保安検査", zh: "安檢" }
    ]
  }
];
