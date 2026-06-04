"use client";

export default function Topbar() {
  return (
    <div className="topbar">
      <div className="topbar-inner">
        <span className="brand">
          MATAMOROSA<span className="dot">.</span>SYS
        </span>
        <nav className="topnav">
          <a href="#about">about</a>
          <a href="#stack">stack</a>
          <a href="#experience">experience</a>
          <a href="#projects">projects</a>
          <a href="#contact">contact</a>
        </nav>
        <div style={{ display: "flex", alignItems: "center", gap: "16px" }}>
          <a
            href="/resume.pdf"
            download="Matamorosa_Micko_Resume.pdf"
            className="resume-btn"
          >
            ↓ Resume
          </a>
          <span className="status-live">
            <span className="pulse" />
            AVAILABLE
          </span>
        </div>
      </div>
    </div>
  );
}
