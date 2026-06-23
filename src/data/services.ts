// 有我在療癒所 — 服務資料、自評題目、推薦邏輯

export const BOOK_URL = "https://liff.line.me/2010483817-ECzJ2F7B"; // LINE 預約入口（LIFF，會綁定身分才收得到通知）
export const BOOK_WEB = "https://healing-booking.vercel.app";      // 網頁版預約（桌機備用）
export const LINE_URL = "https://lin.ee/YvD0ZR6";                  // LINE 官方帳號
export const MAP_URL  = "https://maps.app.goo.gl/yhqgjgoiSVQnAC1dA";
export const ADDRESS  = "桃園市大園區致祥一街95號2樓（距桃園高鐵步行 8 分鐘）";

// 專業音療師培訓 — 報名 Google 表單（公開填寫連結）
export const TRAINING_FORM_URL = "https://docs.google.com/forms/d/e/1FAIpQLSdeudXQrOHX-c8m23u7FZYRbzzVpHuLg6YzbZypCSb2MBRdng/viewform";

// 專業音療師培訓 — 課程內容
export const TRAINING = {
  intro: "從基礎理論到進階操作，循序漸進帶你深入頌缽的世界。零基礎也能開始，一路走到能獨立帶領團體音療。",
  audience: ["零基礎初學者", "想自我療癒的人", "有志成為專業音療師"],
  levels: [
    { name: "初階｜頌缽基礎與自我療癒", price: "NT$8,800", detail: "尼泊爾頌缽理論、脈輪知識、敲缽磨缽技巧、自我療癒法。結業能以單顆頌缽自我療癒、帶領簡單靜心。" },
    { name: "中階｜身體振動療癒與聲音操作", price: "NT$12,000", detail: "頌缽靜心引導、身體按摩療癒法、三缽中脈療法、腦波平衡舒眠療法。結業能進行完整身體療癒、建立個人療癒流程。" },
    { name: "高階｜全脈輪療癒與團體音療", price: "NT$12,000", detail: "七脈輪頌缽療癒系統、銅鑼操作、薩滿鼓技巧、團體音療。結業能帶領七脈輪療癒與團體 Sound Bath。" },
  ],
  combo: "三階合報 NT$30,800（原價 32,800，省 2,000）",
  note: "開課梯次將陸續公布，想參加歡迎加官方 LINE 詢問最新時間與報名。上課地點：有我在療癒所（桃園大園）。課程不提供退款（不可抗力除外）；身體不適可於課前一天告知改期。",
};

// 主題活動場次（由新到舊／近期在前）— 報名連結用表單公開 /viewform
export type EventItem = { date: string; day: string; name: string; time: string; price: string; url: string };
export const EVENTS: EventItem[] = [
  { date: "6/14", day: "日", name: "有我在・團體音療",   time: "19:30–21:00", price: "NT$800／人",            url: "https://docs.google.com/forms/d/e/1FAIpQLSdWB76IT21OmGL7RUYWs6057GDuAbp3EC3cMIMiuT088qficg/viewform" },
  { date: "6/20", day: "六", name: "臼井靈氣頌缽聲浴",   time: "14:00–16:00", price: "單人 1,300 · 雙人 2,300", url: "https://docs.google.com/forms/d/e/1FAIpQLSfoJd2SRAgu3rvdAu41PLedNIo76lGUdaXtAmWFkFWOxazbkw/viewform" },
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

// 每題對各療癒的權重（同意度 × 權重 = 加分）
// 頌缽、靈氣同屬「身心放鬆」但有側重：壓力/睡眠偏頌缽、疲憊/渴望休息偏靈氣；情緒/課題偏希塔
export const Q_WEIGHTS: Record<string, Partial<Record<Service["key"], number>>> = {
  q1:  { bowl: 2,   reiki: 1 },              // 壓力喘不過氣 → 偏頌缽
  q2:  { reiki: 2,  bowl: 1 },               // 疲憊難恢復 → 偏靈氣
  q3:  { reiki: 2,  bowl: 1 },               // 渴望安靜休息陪伴 → 偏靈氣
  q4:  { bowl: 2,   reiki: 1 },              // 睡眠不理想 → 偏頌缽
  q5:  { bowl: 1,   reiki: 1,   theta: 1 },  // 照顧別人忽略自己 → 三者
  q6:  { bowl: 1,   reiki: 1,   theta: 1.2 },// 情緒卡住 → 略偏希塔
  q7:  { bowl: 1.2, reiki: 1,   theta: 1 },  // 腦袋停不下來 → 略偏頌缽
  q8:  { theta: 1.5 },                       // 課題反覆 → 希塔
  q9:  { theta: 1.5 },                       // 對未來迷惘 → 希塔
  q10: { theta: 1.5 },                       // 願意認識自己 → 希塔
};

export type Scores = Record<string, number>;

// 回傳推薦的服務 key；平手優先序 bowl > reiki > theta
export function recommend(s: Scores): Service["key"] {
  const order: Service["key"][] = ["bowl", "reiki", "theta"];
  const total: Record<Service["key"], number> = { bowl: 0, reiki: 0, theta: 0 };
  for (const q of QUESTIONS) {
    const v = s[q.id] ?? 0;
    const w = Q_WEIGHTS[q.id] ?? {};
    for (const k of order) total[k] += (w[k] ?? 0) * v;
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
