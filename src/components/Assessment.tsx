import { useState } from "react";
import {
  QUESTIONS, SERVICES, recommend, RESULT_COPY,
  BOOK_URL, type Scores,
} from "../data/services";

const init: Scores = Object.fromEntries(QUESTIONS.map((q) => [q.id, 4] as [string, number]));

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
        <span className="pill">此刻推薦</span>
        <h3>此刻，{svc.name} 也許最適合你</h3>
        <p>{RESULT_COPY[rec]}</p>
        <p style={{ fontSize: 13.5 }}>
          {svc.time}　·　{svc.price}
        </p>
        <div className="acts">
          <a className="btn btn-pri" href={BOOK_URL} target="_blank" rel="noopener">
            預約 {svc.name}
          </a>
          <button className="btn btn-ghost" onClick={() => setDone(false)}>
            重新測一次
          </button>
        </div>
        <p className="alt">
          不確定也沒關係 — 你也可以加 LINE 跟蕙如聊聊近期的身心狀態，再一起決定。
        </p>
      </div>
    );
  }

  return (
    <div className="assess-card">
      {QUESTIONS.map((q) => (
        <div className="q" key={q.id}>
          <div className="q-label"><span>{q.text}</span></div>
          <input
            type="range" min={1} max={7} step={1}
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
