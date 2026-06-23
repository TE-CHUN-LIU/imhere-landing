// 有我在療癒所 — 服務資料、自評題目、推薦邏輯

export const BOOK_URL = "https://liff.line.me/2010483817-ECzJ2F7B"; // LINE 預約入口（LIFF，會綁定身分才收得到通知）
export const BOOK_WEB = "https://healing-booking.vercel.app";      // 網頁版預約（桌機備用）
export const LINE_URL = "https://lin.ee/YvD0ZR6";                  // LINE 官方帳號
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

// 自評題目（同意度 1–5：非常不同意 → 非常同意）
export type Q = { id: string; text: string };
export const QUESTIONS: Q[] = [
  { id: "q1",  text: "最近生活中的壓力，讓我有些喘不過氣" },
  { id: "q2",  text: "我經常感到疲憊，即使休息後也很難恢復精神" },
  { id: "q3",  text: "我渴望一段安靜的時間，單純地休息與陪伴自己" },
  { id: "q4",  text: "我的睡眠品質不太理想，容易淺眠、多夢或睡醒仍感到疲累" },
  { id: "q5",  text: "我已經照顧了很多人，卻很少好好照顧自己" },
  { id: "q6",  text: "我常感受到情緒卡在心裡，卻不知道該如何整理" },
  { id: "q7",  text: "我的腦袋常常停不下來，即使休息時也一直在思考事情" },
  { id: "q8",  text: "某些問題或課題，似乎反覆在我的人生中出現" },
  { id: "q9",  text: "我對未來有些迷惘，不太確定自己真正想要的是什麼" },
  { id: "q10", text: "我願意更深入地認識自己，探索內在真正的感受與需求" },
];

// 每題偏向的療癒（同意度越高，對應療癒加越多分）
export const Q_BIAS: Record<string, Service["key"][]> = {
  q1: ["bowl", "reiki"],
  q2: ["bowl", "reiki"],
  q3: ["bowl", "reiki"],
  q4: ["bowl", "reiki"],
  q5: ["bowl", "theta", "reiki"],
  q6: ["bowl", "theta", "reiki"],
  q7: ["bowl", "theta", "reiki"],
  q8: ["theta"],
  q9: ["theta"],
  q10: ["theta"],
};

export type Scores = Record<string, number>;

// 回傳推薦的服務 key；平手優先序 bowl > reiki > theta
export function recommend(s: Scores): Service["key"] {
  const order: Service["key"][] = ["bowl", "reiki", "theta"];
  const total: Record<Service["key"], number> = { bowl: 0, reiki: 0, theta: 0 };
  for (const q of QUESTIONS) {
    const v = s[q.id] ?? 0;
    for (const k of Q_BIAS[q.id]) total[k] += v;
  }
  let best: Service["key"] = "bowl";
  let bestScore = -1;
  for (const k of order) {
    if (total[k] > bestScore) { bestScore = total[k]; best = k; }
  }
  return best;
}

export const RESULT_COPY: Record<Service["key"], string> = {
  bowl:  "你的身心需要一段「停下來」的時間。讓頌缽的聲音與振動，把停不下來的思緒、淺眠與緊繃，慢慢梳理開來。",
  reiki: "你已經累了一段時間了。靈氣療癒給你一段安靜、被溫柔陪伴的休息，把消耗掉的能量補回來。",
  theta: "你卡住的可能不只是身體。希塔療癒陪你看見壓力底下的信念與情緒，把卡點一個個鬆開。",
};
