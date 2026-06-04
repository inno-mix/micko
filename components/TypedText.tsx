"use client";

import { useEffect, useRef } from "react";

const WORDS = ["scalable backends", "REST APIs", "AI/LLM pipelines", "cloud systems", "automation"];

export default function TypedText() {
  const elRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const el = elRef.current;
    if (!el) return;

    let w = 0, c = 0, del = false;
    let timer: ReturnType<typeof setTimeout>;

    function tick() {
      const word = WORDS[w];
      if (!del) {
        el!.textContent = word.slice(0, ++c);
        if (c === word.length) { del = true; timer = setTimeout(tick, 1500); return; }
      } else {
        el!.textContent = word.slice(0, --c);
        if (c === 0) { del = false; w = (w + 1) % WORDS.length; }
      }
      timer = setTimeout(tick, del ? 42 : 78);
    }
    tick();
    return () => clearTimeout(timer);
  }, []);

  return (
    <span className="hero-role">
      I build <span className="typed" ref={elRef} />
      <span className="caret" />
    </span>
  );
}
