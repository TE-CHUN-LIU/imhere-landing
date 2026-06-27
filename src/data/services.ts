// 有我在療癒所 — 服務資料、自評題目、推薦邏輯（方向 F・陶光）

export const BOOK_URL = "https://liff.line.me/2010483817-ECzJ2F7B"; // LINE 預約入口（LIFF，會綁定身分才收得到通知）
export const BOOK_WEB = "https://book.im-here-healingspace.com";   // 網頁版預約（桌機備用）
export const LINE_URL = "https://lin.ee/YvD0ZR6";                  // LINE 官方帳號
export const MAP_URL  = "https://maps.app.goo.gl/AtPDgVYjRramzmm69";  // Google 商家檔案地圖連結
export const ADDRESS  = "桃園市大園區致祥一街95號2樓（距桃園高鐵步行 8 分鐘）";

// 專業音療師培訓 — 報名 Google 表單（公開填寫連結）
export const TRAINING_FORM_URL = "https://docs.google.com/forms/d/e/1FAIpQLSdeudXQrOHX-c8m23u7FZYRbzzVpHuLg6YzbZypCSb2MBRdng/viewform";

// 專業音療師培訓 — 課程內容
export const TRAINING = {
  intro: "從基礎理論到進階操作，循序漸進帶你深入頌缽的世界。零基礎也能開始，一路走到能獨立帶領團體音療。",
  audience: ["零基礎初學者", "想自我療癒的人", "有志成為專業音療師"],
  levels: [
    {
      num: "01", stage: "初階", sub: "頌缽基礎與自我療癒", price: "NT$8,800",
      goal: "自我療癒：單缽運用",
      points: [
        "使用單顆頌缽進行自我放鬆與靜心",
        "學會基礎敲缽、磨缽與共振技巧",
        "建立屬於自己的日常療癒練習",
      ],
    },
    {
      num: "02", stage: "中階", sub: "身體振動療癒與聲音操作", price: "NT$12,000",
      goal: "個案療癒：3–4 缽運用",
      points: [
        "能獨立完成一對一身體放鬆療程",
        "學習缽療與聲音療癒操作技巧",
        "建立個人療癒流程與帶領能力",
      ],
    },
    {
      num: "03", stage: "高階", sub: "全脈輪療癒與團體音療", price: "NT$12,000",
      goal: "團體療癒：7 缽運用",
      points: [
        "能獨立帶領團體 Sound Bath 音浴體驗",
        "學習多人空間聲場設計與操作",
        "建立團體帶領與專業服務能力",
      ],
    },
  ],
  combo: {
    title: "三階完整培訓方案",
    lead: "從自我療癒到團體帶領，一次學會",
    price: "NT$30,800",
    orig: "原價 NT$32,800",
    save: "現省 NT$2,000",
    perks: ["課程講義", "結業證書", "課後學習社群", "課後提問與交流支持"],
  },
  note: "採預約制，課程可依學習需求與時間彈性安排，一人即可開班，歡迎加入官方 LINE 了解。上課地點：I'm here 有我在療癒所（桃園高鐵）。課程不提供退款（不可抗力除外）；身體不適可於課前一天告知改期。",
};

// 主題活動場次（由新到舊／近期在前）— 報名連結用表單公開 /viewform
export type EventItem = { date: string; day: string; name: string; time: string; price: string; url: string };
export const EVENTS: EventItem[] = [
  { date: "6 / 14", day: "日", name: "有我在・團體音療", time: "19:30–21:00", price: "NT$800／人",             url: "https://docs.google.com/forms/d/e/1FAIpQLSdWB76IT21OmGL7RUYWs6057GDuAbp3EC3cMIMiuT088qficg/viewform" },
  { date: "6 / 20", day: "六", name: "臼井靈氣頌缽聲浴", time: "14:00–16:00", price: "單人 1,300 · 雙人 2,300", url: "https://docs.google.com/forms/d/e/1FAIpQLSfoJd2SRAgu3rvdAu41PLedNIo76lGUdaXtAmWFkFWOxazbkw/viewform" },
];

// 社群媒體連結（填了才會顯示，留空不顯示，不會破版）
export const SOCIAL = {
  instagram: "https://www.instagram.com/im_here_healingspace/",
  facebook:  "https://www.facebook.com/profile.php?id=61557036314307",
  threads:   "", // 尚未提供，留空不顯示
  youtube:   "", // 尚未提供，留空不顯示（側邊浮動社群列會自動帶出）
};

export type Service = {
  key: "bowl" | "theta" | "reiki";
  num: string;
  name: string;
  photo: string;
  desc: string;
  keywords: string[];     // 療癒核心關鍵字（👉 一行，可見）
  seoKeywords: string[];  // SEO／GEO 長尾關鍵字（地區＋服務、服務＋推薦…）
  chips: string[];
  priceMain: string;   // 主價（accent 色，Noto Serif）
  priceNote: string;   // 時長／備註（弱字）
  pricing: {
    time: string;
    items: Array<{ label: string; value: string }>;
    extra?: string;
  };
  price: string;       // 完整價格字串（給結構化資料 / 結果卡 meta）
  meta: string;        // 結果卡時長價格 meta
};

export const SERVICES: Service[] = [
  {
    key: "bowl",
    num: "01",
    name: "頌缽聲療",
    photo: "/photos/bowl.jpg",
    desc: "透過頌缽的聲音與振動，陪伴身心慢慢放鬆，讓思緒漸漸沉澱，感受內在安定與平衡。",
    keywords: ["聲音", "振動", "沉澱"],
    seoKeywords: ["桃園高鐵頌缽聲療", "頌缽聲療推薦", "桃園聲音療癒", "頌缽聲浴體驗", "桃園紓壓療癒"],
    chips: ["想放鬆、舒緩壓力", "疲憊緊繃", "思緒繁雜"],
    priceMain: "單人|2200元。雙人|4000元。三人|5400元",
    priceNote: "約90-120分鐘",
    pricing: {
      time: "約90-120分鐘",
      items: [
        { label: "單人", value: "2200元" },
        { label: "雙人", value: "4000元" },
        { label: "三人", value: "5400元" },
      ],
    },
    price: "約90-120分鐘。單人|2200元。雙人|4000元。三人|5400元",
    meta: "約90-120分鐘。單人|2200元。雙人|4000元。三人|5400元",
  },
  {
    key: "theta",
    num: "02",
    name: "希塔療癒",
    photo: "/photos/theta.jpg",
    desc: "透過溫和的對話與覺察，探索內在信念與情緒，整理想法與感受，看見更多不同可能。",
    keywords: ["探索", "覺察", "信念"],
    seoKeywords: ["桃園高鐵希塔療癒", "希塔療癒推薦", "ThetaHealing 桃園", "希塔療癒線上", "桃園潛意識療癒"],
    chips: ["生活關係迷惘", "重複的課題", "想更認識自己"],
    priceMain: "一小時|2200元。每增加30分鐘+500元。",
    priceNote: "60分鐘(可線上療癒)",
    pricing: {
      time: "60分鐘(可線上療癒)",
      items: [{ label: "一小時", value: "2200元" }],
      extra: "每增加30分鐘 +500元",
    },
    price: "60分鐘(可線上療癒)。一小時|2200元。每增加30分鐘+500元。",
    meta: "60分鐘(可線上療癒)。一小時|2200元。每增加30分鐘+500元。",
  },
  {
    key: "reiki",
    num: "03",
    name: "靈氣療癒",
    photo: "/photos/reiki.jpg",
    desc: "透過溫柔的能量陪伴，邀請自己回到當下，感受平靜與放鬆，重新與內在的自己連結。",
    keywords: ["能量", "當下", "連結"],
    seoKeywords: ["桃園高鐵靈氣療癒", "靈氣療癒推薦", "臼井靈氣 桃園", "能量療癒體驗", "桃園身心放鬆"],
    chips: ["長期高壓忙碌", "情緒緊繃", "想練習自我照顧"],
    priceMain: "一小時|2200元。每增加30分鐘+500元。",
    priceNote: "60分鐘(可線上療癒)",
    pricing: {
      time: "60分鐘(可線上療癒)",
      items: [{ label: "一小時", value: "2200元" }],
      extra: "每增加30分鐘 +500元",
    },
    price: "60分鐘(可線上療癒)。一小時|2200元。每增加30分鐘+500元。",
    meta: "60分鐘(可線上療癒)。一小時|2200元。每增加30分鐘+500元。",
  },
];

// 自評題目（五點量表：非常不同意 → 非常同意）。每題可偏向一種或多種服務。
export type Q = { id: string; text: string; svc: Service["key"][] };
export const QUESTIONS: Q[] = [
  { id: "q1", text: "最近生活中的壓力，讓我有些喘不過氣", svc: ["bowl", "reiki"] },
  { id: "q2", text: "我經常感到疲憊，即使休息後也很難恢復精神", svc: ["bowl", "reiki"] },
  { id: "q3", text: "我渴望一段安靜的時間，單純地休息與陪伴自己", svc: ["bowl", "reiki"] },
  { id: "q4", text: "我的睡眠品質不太理想，容易淺眠、多夢或睡醒仍感到疲累", svc: ["bowl", "reiki"] },
  { id: "q5", text: "我已經照顧了很多人，卻很少好好照顧自己", svc: ["bowl", "theta", "reiki"] },
  { id: "q6", text: "我常感受到情緒卡在心裡，卻不知道該如何整理", svc: ["bowl", "theta", "reiki"] },
  { id: "q7", text: "我的腦袋常常停不下來，即使休息時也一直在思考事情", svc: ["bowl", "theta", "reiki"] },
  { id: "q8", text: "某些問題或課題，似乎反覆在我的人生中出現", svc: ["theta"] },
  { id: "q9", text: "我對未來有些迷惘，不太確定自己真正想要的是什麼", svc: ["theta"] },
  { id: "q10", text: "我願意更深入地認識自己，探索內在真正的感受與需求", svc: ["theta"] },
];

export type Scores = Record<string, number>;

// 回傳推薦的服務 key；題目偏向的服務都會加分，取總分最高者；平手優先序 bowl > theta > reiki
export function recommend(s: Scores): Service["key"] {
  const order: Service["key"][] = ["bowl", "theta", "reiki"];
  const total: Record<Service["key"], number> = { bowl: 0, theta: 0, reiki: 0 };
  for (const q of QUESTIONS) {
    for (const service of q.svc) total[service] += s[q.id] ?? 0;
  }
  let best: Service["key"] = "bowl";
  let bestScore = -1;
  for (const k of order) {
    if (total[k] > bestScore) { bestScore = total[k]; best = k; }
  }
  return best;
}
