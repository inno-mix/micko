"use client";

import { useEffect, useRef } from "react";

export default function ExperienceCounter() {
  const elRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const el = elRef.current;
    if (!el) return;

    const MS_PER_YEAR = 1000 * 60 * 60 * 24 * 365.25;
    // Period 1: Boomsourcing — May 2019 to Feb 2020
    const p1 = new Date(2020, 1, 1).getTime() - new Date(2019, 4, 1).getTime();
    // Period 2: Boom AI Solutions — Sep 2020 to Dec 2025
    const p2 = new Date(2025, 11, 31).getTime() - new Date(2020, 8, 1).getTime();
    const target = (p1 + p2) / MS_PER_YEAR;
    let cur = 0;

    let raf: number;
    const step = () => {
      cur += target / 45;
      if (cur >= target) { el.textContent = target.toFixed(1) + " yrs"; return; }
      el.textContent = cur.toFixed(1) + " yrs";
      raf = requestAnimationFrame(step);
    };

    const t = setTimeout(step, 500);
    return () => { clearTimeout(t); cancelAnimationFrame(raf); };
  }, []);

  return <span className="counter" ref={elRef}>0 yrs</span>;
}
