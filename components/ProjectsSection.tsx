"use client";

import { useState, useRef, useEffect, useCallback } from "react";
import { createPortal } from "react-dom";

function useSwipe(
  ref: React.RefObject<HTMLElement | null>,
  onPrev: () => void,
  onNext: () => void
) {
  const startX = useRef<number | null>(null);
  const cbRef = useRef({ onPrev, onNext });
  cbRef.current = { onPrev, onNext };

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const onStart = (e: TouchEvent) => {
      startX.current = e.touches[0].clientX;
    };
    const onEnd = (e: TouchEvent) => {
      if (startX.current === null) return;
      const delta = startX.current - e.changedTouches[0].clientX;
      startX.current = null;
      if (Math.abs(delta) > 40)
        delta > 0 ? cbRef.current.onNext() : cbRef.current.onPrev();
    };

    el.addEventListener("touchstart", onStart, { passive: true });
    el.addEventListener("touchend", onEnd, { passive: true });
    return () => {
      el.removeEventListener("touchstart", onStart);
      el.removeEventListener("touchend", onEnd);
    };
  }, [ref]);
}

export interface Project {
  pid: string;
  title: string;
  scope: string;
  bullets: React.ReactNode[];
  chips: string[];
  url?: string;
  screenshots?: string[];
}

function ProjectCard({
  project,
  onOpen,
}: {
  project: Project;
  onOpen: () => void;
}) {
  const cardRef = useRef<HTMLElement>(null);
  const [maxChips, setMaxChips] = useState(project.chips.length);

  useEffect(() => {
    const el = cardRef.current;
    if (!el) return;
    const ro = new ResizeObserver(([entry]) => {
      const w = entry.contentRect.width;
      if (w < 260) setMaxChips(2);
      else if (w < 340) setMaxChips(3);
      else if (w < 440) setMaxChips(4);
      else setMaxChips(project.chips.length);
    });
    ro.observe(el);
    return () => ro.disconnect();
  }, [project.chips.length]);

  const shown = project.chips.slice(0, maxChips);
  const overflow = project.chips.length - shown.length;

  return (
    <article
      ref={cardRef}
      className="proj proj-clickable"
      onClick={onOpen}
      role="button"
      tabIndex={0}
      onKeyDown={(e) => (e.key === "Enter" || e.key === " ") && onOpen()}
      aria-label={`View details for ${project.title}`}
    >
      <div className="proj-click-hint">View details ↗</div>
      <div className="pid">{project.pid}</div>
      <h3>{project.title}</h3>
      <div className="scope">{project.scope}</div>
      <ul>
        {project.bullets.map((b, i) => (
          <li key={i}>{b}</li>
        ))}
      </ul>
      <div className="chips">
        {shown.map((c) => (
          <span key={c}>{c}</span>
        ))}
        {overflow > 0 && <span className="chip-more">+{overflow}</span>}
      </div>
    </article>
  );
}

function ImageCarousel({
  images,
  title,
  onFullscreen,
}: {
  images: string[];
  title: string;
  onFullscreen: (idx: number) => void;
}) {
  const [idx, setIdx] = useState(0);
  const [dir, setDir] = useState<"next" | "prev">("next");
  const [animKey, setAnimKey] = useState(0);

  const go = (next: number, direction: "next" | "prev") => {
    setDir(direction);
    setAnimKey((k) => k + 1);
    setIdx(next);
  };

  const goPrev = () => go((idx - 1 + images.length) % images.length, "prev");
  const goNext = () => go((idx + 1) % images.length, "next");

  const prev = (e?: React.MouseEvent) => { e?.stopPropagation(); goPrev(); };
  const next = (e?: React.MouseEvent) => { e?.stopPropagation(); goNext(); };

  const trackRef = useRef<HTMLDivElement>(null);
  useSwipe(trackRef, goPrev, goNext);

  return (
    <div className="carousel">
      <div className="carousel-track" ref={trackRef}>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          key={animKey}
          src={images[idx]}
          alt={`${title} screenshot ${idx + 1}`}
          className={`carousel-img carousel-img--${dir}`}
          onClick={() => onFullscreen(idx)}
          style={{ cursor: "zoom-in" }}
        />
        {images.length > 1 && (
          <>
            <button className="carousel-btn carousel-btn--prev" onClick={prev} aria-label="Previous image">‹</button>
            <button className="carousel-btn carousel-btn--next" onClick={next} aria-label="Next image">›</button>
          </>
        )}
        <button
          className="carousel-expand-btn"
          onClick={() => onFullscreen(idx)}
          aria-label="View fullscreen"
        >
          ⤢
        </button>
        {images.length > 1 && (
          <div className="carousel-counter">{idx + 1} / {images.length}</div>
        )}
      </div>
      {images.length > 1 && (
        <div className="carousel-dots">
          {images.map((_, i) => (
            <button
              key={i}
              className={`carousel-dot${i === idx ? " carousel-dot--active" : ""}`}
              onClick={() => go(i, i > idx ? "next" : "prev")}
              aria-label={`Go to image ${i + 1}`}
            />
          ))}
        </div>
      )}
    </div>
  );
}

interface FsState { images: string[]; idx: number; title: string }

function FullscreenViewer({
  state,
  onClose,
}: {
  state: FsState;
  onClose: () => void;
}) {
  const { images, title } = state;
  const [idx, setIdx] = useState(state.idx);
  const [dir, setDir] = useState<"next" | "prev">("next");
  const [animKey, setAnimKey] = useState(0);

  const go = (next: number, direction: "next" | "prev") => {
    setDir(direction);
    setAnimKey((k) => k + 1);
    setIdx(next);
  };

  const goPrev = () => go((idx - 1 + images.length) % images.length, "prev");
  const goNext = () => go((idx + 1) % images.length, "next");

  const prev = (e: React.MouseEvent) => { e.stopPropagation(); goPrev(); };
  const next = (e: React.MouseEvent) => { e.stopPropagation(); goNext(); };

  const backdropRef = useRef<HTMLDivElement>(null);
  useSwipe(backdropRef, goPrev, goNext);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      e.stopImmediatePropagation();
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowRight") go((idx + 1) % images.length, "next");
      if (e.key === "ArrowLeft") go((idx - 1 + images.length) % images.length, "prev");
    };
    document.addEventListener("keydown", onKey, true);
    return () => document.removeEventListener("keydown", onKey, true);
  }, [idx, images.length, onClose]);

  return createPortal(
    <div
      ref={backdropRef}
      className="fs-backdrop"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-label={`${title} fullscreen`}
    >
      <button className="fs-close" onClick={onClose} aria-label="Close fullscreen">✕</button>
      {images.length > 1 && (
        <div className="fs-counter">{idx + 1} / {images.length}</div>
      )}
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        key={animKey}
        src={images[idx]}
        alt={`${title} screenshot ${idx + 1}`}
        className={`fs-img fs-img--${dir}`}
        onClick={(e) => e.stopPropagation()}
      />
      {images.length > 1 && (
        <>
          <button className="fs-nav fs-nav--prev" onClick={prev} aria-label="Previous image">‹</button>
          <button className="fs-nav fs-nav--next" onClick={next} aria-label="Next image">›</button>
        </>
      )}
    </div>,
    document.body
  );
}

function ProjectModal({
  project,
  onClose,
  onFullscreen,
}: {
  project: Project;
  onClose: () => void;
  onFullscreen: (images: string[], idx: number) => void;
}) {
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [onClose]);

  const hasImages = project.screenshots && project.screenshots.length > 0;

  return createPortal(
    <div
      className="modal-backdrop"
      onClick={(e) => e.target === e.currentTarget && onClose()}
      role="dialog"
      aria-modal="true"
      aria-label={project.title}
    >
      <div className="modal-panel">
        <button className="modal-close" onClick={onClose} aria-label="Close">
          ✕
        </button>

        <div className="modal-pid">{project.pid}</div>
        <h2 className="modal-title">{project.title}</h2>
        <div className="modal-scope">{project.scope}</div>

        {project.url && (
          <a
            href={project.url}
            target="_blank"
            rel="noopener noreferrer"
            className="modal-url"
          >
            <span className="modal-url-icon">↗</span>
            {project.url.replace(/^https?:\/\//, "")}
          </a>
        )}

        {hasImages && (
          <ImageCarousel
            images={project.screenshots!}
            title={project.title}
            onFullscreen={(idx) => onFullscreen(project.screenshots!, idx)}
          />
        )}

        <div className="modal-section-label">Highlights</div>
        <ul className="modal-bullets">
          {project.bullets.map((b, i) => (
            <li key={i}>{b}</li>
          ))}
        </ul>

        <div className="modal-section-label">Tech Stack</div>
        <div className="modal-chips">
          {project.chips.map((c) => (
            <span key={c} className="modal-chip">
              {c}
            </span>
          ))}
        </div>
      </div>
    </div>,
    document.body
  );
}

export default function ProjectsSection({
  projects,
}: {
  projects: Project[];
}) {
  const [open, setOpen] = useState<Project | null>(null);
  const [fs, setFs] = useState<FsState | null>(null);

  const closeModal = useCallback(() => setOpen(null), []);
  const closeFs = useCallback(() => setFs(null), []);
  const openFs = useCallback((images: string[], idx: number, title: string) => {
    setFs({ images, idx, title });
  }, []);

  return (
    <>
      <div className="projects">
        {projects.map((p) => (
          <ProjectCard key={p.pid} project={p} onOpen={() => setOpen(p)} />
        ))}
      </div>
      {open && (
        <ProjectModal
          project={open}
          onClose={closeModal}
          onFullscreen={(images, idx) => openFs(images, idx, open.title)}
        />
      )}
      {fs && <FullscreenViewer state={fs} onClose={closeFs} />}
    </>
  );
}
