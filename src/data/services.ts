// 有我在療癒所 — 服務資料、自評題目、推薦邏輯

export const BOOK_URL = "https://liff.line.me/2010483817-ECzJ2F7B"; // LINE 預約入口（LIFF，會綁定身分才收得到通知）
export const BOOK_WEB = "https://healing-booking.vercel.app";      // 網頁版預約（桌機備用）
export const LINE_URL = "https://line.me/R/ti/p/@933jczxb";        // LINE 官方帳號
export const MAP_URL  = "https://maps.app.goo.gl/yhqgjgoiSVQnAC1dA";
export const ADDRESS  = "桃園市大園區致祥一街95號2樓（距桃園高鐵步行 8 分鐘）";

// 專業音療師培訓 — 報名 Google 表單
// ⚠️ 這是「編輯網址(/edit)」改成的 /viewform，對外請改成表單「傳送 → 連結」的公開網址才保證訪客打得開
export const TRAINING_FORM_URL = "https://docs.google.com/forms/d/1U-kZvhPV9qEdq90nwVeTTdDoo1WKDiUBtpsEYSzqQ4g/viewform";

// 主題活動場次（由新到舊／近期在前）— 報名連結用表單公開 /viewform
export type EventItem = { date: string; day: string; name: string; url: string };
export const EVENTS: EventItem[] = [
  { date: "6/14", day: "日", name: "有我在・團體音療",     url: "https://docs.google.com/forms/d/e/1FAIpQLSdWB76IT21OmGL7RUYWs6057GDuAbp3EC3cMIMiuT088qficg/viewform" },
  { date: "6/20", day: "六", name: "臼井靈氣頌缽聲浴",     url: "https://docs.google.com/forms/d/e/1FAIpQLSfoJd2SRAgu3rvdAu41PLedNIo76lGUdaXtAmWFkFWOxazbkw/viewform" },
];

// 社群媒體連結（填了才會顯示，留空不顯示，不會破版）— TODO: 慢慢補
export const SOCIAL = {
  instagram: "https://www.instagram.com/im_here_healingspace/",
  facebook:  "https://www.facebook.com/profile.php?id=61557036314307",
  threads:   "", // 尚未提供，留空不顯示
};

export type Service = {
  key: "bowl" | "theta" | "reiki";
  emoji: string;
  name: string;
  photo: string;
  desc: string;
  fit: string[];
  time: string;
  price: string;
};

export const SERVICES: Service[] = [
  {
    key: "bowl",
    emoji: "✨",
    name: "頌缽聲療",
    photo: "/photos/bowl.jpg",
    desc: "透過頌缽的聲音與振動，陪伴身心慢慢放鬆，讓忙碌的思緒有機會停下來，回到當下，感受內在的安定與平衡。",
    fit: ["想放鬆身心、舒緩日常壓力", "經常感到疲憊、緊繃", "思緒繁雜、難以靜下心來", "想留一段時間好好陪伴自己"],
    time: "約 90–120 分鐘",
    price: "NT$2,200／人 · 雙人 4,000 · 三人 5,400",
  },
  {
    key: "theta",
    emoji: "✨",
    name: "希塔療癒",
    photo: "/photos/theta.jpg",
    desc: "透過溫和的對話與覺察，陪伴你探索內在信念與情緒，整理當下的困惑與卡點，看見更多可能性。",
    fit: ["生活或關係中感到迷惘", "重複遇到相似課題", "想更認識自己的想法與感受", "希望重新找回內在力量與方向"],
    time: "約 90 分鐘",
    price: "NT$2,200／次",
  },
  {
    key: "reiki",
    emoji: "✨",
    name: "靈氣療癒",
    photo: "/photos/reiki.jpg",
    desc: "透過靜心與能量陪伴，協助身心回到放鬆與平衡的狀態，給自己一段安靜休息的時間。",
    fit: ["長期處於高壓與忙碌狀態", "情緒容易緊繃或感到疲憊", "想練習放鬆與自我照顧", "希望獲得溫柔的陪伴與支持"],
    time: "約 60 分鐘",
    price: "NT$2,200／次",
  },
];

// 自評題目（1–5 分）
export type Q = { id: keyof typeof WEIGHTS["bowl"]; label: string; hint: string; lo: string; hi: string };
export const QUESTIONS: Q[] = [
  { id: "sleep",   label: "睡眠品質",       hint: "難入睡或睡不沉嗎？", lo: "睡得很好", hi: "幾乎睡不好" },
  { id: "fatigue", label: "容易疲憊",       hint: "醒來還是覺得累？",   lo: "精神不錯", hi: "總是很累" },
  { id: "stress",  label: "壓力承載",       hint: "最近壓力大嗎？",     lo: "還算輕鬆", hi: "快撐不住" },
  { id: "mind",    label: "思緒停不下來",   hint: "腦袋一直轉？",       lo: "很平靜",   hi: "停不下來" },
  { id: "relax",   label: "想找個地方放鬆", hint: "渴望喘口氣嗎？",     lo: "還好",     hi: "非常想" },
];

// 各療癒的權重（推薦邏輯）
export const WEIGHTS = {
  bowl:  { sleep: 2.0, fatigue: 1.0, stress: 1.0, mind: 2.0, relax: 1.5 },
  reiki: { sleep: 1.0, fatigue: 2.0, stress: 1.5, mind: 0.5, relax: 1.5 },
  theta: { sleep: 0.5, fatigue: 0.8, stress: 2.0, mind: 1.2, relax: 0.6 },
} as const;

export type Scores = Record<Q["id"], number>;

// 回傳推薦的服務 key；平手優先序 bowl > reiki > theta
export function recommend(s: Scores): Service["key"] {
  const order: Service["key"][] = ["bowl", "reiki", "theta"];
  let best: Service["key"] = "bowl";
  let bestScore = -1;
  for (const k of order) {
    const w = WEIGHTS[k];
    const score = (Object.keys(w) as Q["id"][]).reduce((sum, id) => sum + w[id] * (s[id] ?? 0), 0);
    if (score > bestScore) { bestScore = score; best = k; }
  }
  return best;
}

export const RESULT_COPY: Record<Service["key"], string> = {
  bowl:  "你的身心需要一段「停下來」的時間。讓頌缽的聲音與振動，把停不下來的思緒、淺眠與緊繃，慢慢梳理開來。",
  reiki: "你已經累了一段時間了。靈氣療癒給你一段安靜、被溫柔陪伴的休息，把消耗掉的能量補回來。",
  theta: "你卡住的可能不只是身體。希塔療癒陪你看見壓力底下的信念與情緒，把卡點一個個鬆開。",
};
