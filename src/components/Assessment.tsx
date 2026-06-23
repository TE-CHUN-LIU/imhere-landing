import { useState } from "react";
import {
  QUESTIONS, SERVICES, recommend, RESULT_COPY,
  BOOK_URL, type Scores,
} from "../data/services";

const init: Scores = Object.fromEntries(QUESTIONS.map((q) => [q.id, 3] as [string, number]));

export default function Assessment() {
  const [scores, setScores] = useState<Scores>(init);
  const [done, setDone] = useState(false);

  const set = (id: string, v: number) =>
    setScores((s) => ({ ...s, [id]: v }));

  const rec = recommend(scores);
  const svc = SERVICES.find((s) => s.key === rec)!;

  if (done) {
    return (
      <div className="assess-card result">
        <span className="pill">最適合你的是</span>
        <h3>{svc.emoji} {svc.name}</h3>
        <p>{RESULT_COPY[rec]}</p>
        <p style={{ fontSize: 13.5 }}>
          {svc.time}　·　{svc.price}
        </p>
        <div className="acts">
          <a className="btn btn-pri" href={BOOK_URL} target="_blank" rel="noopener">
            立即預約 {svc.name} →
          </a>
          <button className="btn btn-ghost" onClick={() => setDone(false)}>
            重新評估
          </button>
        </div>
        {rec !== "theta" && (
          <p className="alt">
            覺得卡在情緒、關係或人生方向？也很適合 <b>✦ 希塔療癒</b>
          </p>
        )}
      </div>
    );
  }

  return (
    <div className="assess-card">
      {QUESTIONS.map((q) => (
        <div className="q" key={q.id}>
          <div className="q-label"><span>{q.text}</span></div>
          <input
            type="range" min={1} max={5} step={1}
            value={scores[q.id]}
            onChange={(e) => set(q.id, Number(e.target.value))}
            aria-label={q.text}
          />
          <div className="q-scale">
            <span>非常不同意</span>
            <span>非常同意</span>
          </div>
        </div>
      ))}
      <button
        className="btn btn-pri"
        style={{ width: "100%", justifyContent: "center", marginTop: 8 }}
        onClick={() => setDone(true)}
      >
        看看適合我的療癒 →
      </button>
    </div>
  );
}
