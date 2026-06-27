import { useEffect, useRef, useState } from "react";
import {
  QUESTIONS, SERVICES, recommend,
  BOOK_URL, type Scores,
} from "../data/services";

const init: Scores = Object.fromEntries(QUESTIONS.map((q) => [q.id, 3] as [string, number]));
const initialScores = () => ({ ...init });

export default function Assessment() {
  const [scores, setScores] = useState<Scores>(() => initialScores());
  const [revealed, setRevealed] = useState(false);
  const resultRef = useRef<HTMLDivElement>(null);

  const set = (id: string, v: number) =>
    setScores((s) => ({ ...s, [id]: v }));

  const rec = recommend(scores);
  const svc = SERVICES.find((s) => s.key === rec)!;

  useEffect(() => {
    if (!revealed) return;
    resultRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });
  }, [revealed]);

  return (
    <div className="assess">
      <div className="qs">
        {QUESTIONS.map((q) => (
          <div className="q" key={q.id}>
            <div className="q-text">{q.text}</div>
            <input
              type="range" min={1} max={5} step={1}
              value={scores[q.id]}
              onInput={(event) => set(q.id, Number(event.currentTarget.value))}
              aria-label={q.text}
            />
            <div className="q-scale">
              <span>非常不同意</span>
              <span>非常同意</span>
            </div>
          </div>
        ))}
      </div>

      <div className="assess-go">
        <button
          className="btn btn-pri"
          type="button"
          onClick={() => {
            setRevealed(true);
          }}
        >
          看看適合我的療癒　→
        </button>
      </div>

      {revealed && (
        <div className="result" ref={resultRef}>
          <div className="result-eyebrow latin">For you now</div>
          <div className="result-row">
            <div className="result-main">
              <h3>此刻，{svc.name}也許最適合你</h3>
              <p>{svc.desc}</p>
              <div className="result-meta">
                <div className="result-meta-time">{svc.pricing.time}</div>
                <div className="result-meta-price">
                  {svc.pricing.items.map((i) => `${i.label}｜${i.value}`).join("　")}
                  {svc.pricing.extra ? `　${svc.pricing.extra}` : ""}
                </div>
              </div>
            </div>
            <div className="result-acts">
              <a className="btn btn-pri" href={BOOK_URL} target="_blank" rel="noopener">
                預約 {svc.name}
              </a>
              <button
                className="btn btn-ghost"
                type="button"
                onClick={() => {
                  setScores(initialScores());
                  setRevealed(false);
                }}
              >
                重新測一次
              </button>
            </div>
          </div>
          <div className="result-note">
            不確定也沒關係 — 你也可以加 LINE 跟 Here 聊聊近期的身心狀態，再一起決定。
          </div>
        </div>
      )}
    </div>
  );
}
