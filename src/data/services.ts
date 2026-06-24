// 有我在療癒所 — 服務資料、自評題目、推薦邏輯（方向 B・墨息）

export const BOOK_URL = "https://liff.line.me/2010483817-ECzJ2F7B"; // LINE 預約入口（LIFF，會綁定身分才收得到通知）
export const BOOK_WEB = "https://healing-booking.vercel.app";      // 網頁版預約（桌機備用）
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
    { num: "01", stage: "初階", sub: "頌缽基礎與自我療癒", price: "NT$8,800",  detail: "尼泊爾頌缽理論、脈輪知識、敲缽磨缽技巧、自我療癒法。結業能以單顆頌缽自我療癒、帶領簡單靜心。" },
    { num: "02", stage: "中階", sub: "身體振動療癒與聲音操作", price: "NT$12,000", detail: "頌缽靜心引導、身體按摩療癒法、三缽中脈療法、腦波平衡舒眠療法。結業能進行完整身體療癒。" },
    { num: "03", stage: "高階", sub: "全脈輪療癒與團體音療", price: "NT$12,000", detail: "七脈輪頌缽療癒系統、銅鑼操作、薩滿鼓技巧、團體音療。結業能帶領七脈輪療癒與團體 Sound Bath。" },
  ],
  comboTitle: "三階合報 NT$30,800",
  comboNote: "原價 32,800，省 2,000",
  note: "開課梯次將陸續公布。上課地點：有我在療癒所（桃園大園）。課程不提供退款（不可抗力除外）；身體不適可於課前一天告知改期。",
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
};

export type Service = {
  key: "bowl" | "theta" | "reiki";
  num: string;
  name: string;
  photo: string;
  desc: string;
  chips: string[];
  priceMain: string;   // 主價（accent 色，Noto Serif）
  priceNote: string;   // 時長／備註（弱字）
  price: string;       // 完整價格字串（給結構化資料 / 結果卡 meta）
  meta: string;        // 結果卡時長價格 meta
};

export const SERVICES: Service[] = [
  {
    key: "bowl",
    num: "01",
    name: "頌缽聲療",
    photo: "/photos/bowl.jpg",
    desc: "透過頌缽的聲音與振動，陪伴身心慢慢放鬆，讓忙碌的思緒有機會停下來，回到當下，感受內在的安定與平衡。",
    chips: ["想放鬆、舒緩壓力", "疲憊緊繃", "思緒繁雜"],
    priceMain: "NT$2,200／人",
    priceNote: "雙人 4,000 · 三人 5,400 · 約 90–120 分鐘",
    price: "NT$2,200／人（雙人 4,000・三人 5,400・約 90–120 分鐘）",
    meta: "約 90–120 分鐘 ・ NT$2,200／人",
  },
  {
    key: "theta",
    num: "02",
    name: "希塔療癒",
    photo: "/photos/theta.jpg",
    desc: "透過溫和的對話與覺察，陪伴你探索內在信念與情緒，整理當下的困惑與卡點，看見更多可能性。",
    chips: ["生活關係迷惘", "重複的課題", "想更認識自己"],
    priceMain: "NT$2,200／次",
    priceNote: "約 90 分鐘 · 可線上進行",
    price: "NT$2,200／次（約 90 分鐘・可線上進行）",
    meta: "約 90 分鐘 ・ NT$2,200／次 ・ 可線上",
  },
  {
    key: "reiki",
    num: "03",
    name: "靈氣療癒",
    photo: "/photos/reiki.jpg",
    desc: "透過靜心與能量陪伴，協助身心回到放鬆與平衡的狀態，給自己一段安靜休息的時間。",
    chips: ["長期高壓忙碌", "情緒緊繃", "想練習自我照顧"],
    priceMain: "NT$2,200／次",
    priceNote: "約 60 分鐘 · 可線上進行",
    price: "NT$2,200／次（約 60 分鐘・可線上進行）",
    meta: "約 60 分鐘 ・ NT$2,200／次 ・ 可線上",
  },
];

// 自評題目（同意度 1–7：非常不同意 → 非常同意）。每題歸屬一種服務，兩題一組。
export type Q = { id: string; text: string; svc: Service["key"] };
export const QUESTIONS: Q[] = [
  { id: "q1", text: "最近生活中的壓力，讓我有些喘不過氣",                 svc: "bowl"  },
  { id: "q2", text: "我的腦袋常常停不下來，即使休息時也一直在思考事情",   svc: "bowl"  },
  { id: "q3", text: "我經常感到疲憊，即使休息後也很難恢復精神",           svc: "reiki" },
  { id: "q4", text: "我已經照顧了很多人，卻很少好好照顧自己",             svc: "reiki" },
  { id: "q5", text: "我常感受到情緒卡在心裡，卻不知道該如何整理",         svc: "theta" },
  { id: "q6", text: "我願意更深入地認識自己，探索內在真正的感受與需求",   svc: "theta" },
];

export type Scores = Record<string, number>;

// 回傳推薦的服務 key；各服務分數＝其兩題滑桿值加總，取最高者；平手優先序 bowl > theta > reiki
export function recommend(s: Scores): Service["key"] {
  const order: Service["key"][] = ["bowl", "theta", "reiki"];
  const total: Record<Service["key"], number> = { bowl: 0, theta: 0, reiki: 0 };
  for (const q of QUESTIONS) total[q.svc] += s[q.id] ?? 0;
  let best: Service["key"] = "bowl";
  let bestScore = -1;
  for (const k of order) {
    if (total[k] > bestScore) { bestScore = total[k]; best = k; }
  }
  return best;
}
