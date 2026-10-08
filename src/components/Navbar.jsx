import React from "react";
import { Scale, Globe, FolderPlus, ShieldCheck } from "lucide-react";
import { CASE_BUNDLES } from "../data/caseBundles";
import { TRANSLATIONS } from "../data/translations";

export default function Navbar({
  selectedCaseId,
  onSelectCase,
  language,
  onToggleLanguage,
  onOpenUpload
}) {
  const t = TRANSLATIONS[language] || TRANSLATIONS.en;

  return (
    <header className="navbar">
      <div className="nav-brand">
        <div className="brand-icon-box">
          <Scale size={24} />
        </div>
        <div className="brand-text">
          <h1>
            {t.appTitle}
            <span className="brand-badge">HNX26EPS01</span>
          </h1>
          <div className="brand-subtitle">{t.appSubtitle}</div>
        </div>
      </div>

      <div className="nav-controls">
        {/* Case selector */}
        <div className="case-selector-wrapper">
          <span className="case-selector-label">{t.caseSelectorLabel}</span>
          <select
            className="case-dropdown"
            value={selectedCaseId}
            onChange={(e) => onSelectCase(e.target.value)}
          >
            {CASE_BUNDLES.map((c) => (
              <option key={c.id} value={c.id}>
                {c.title}
              </option>
            ))}
          </select>
        </div>

        {/* Upload Custom File button */}
        <button className="btn-secondary" onClick={onOpenUpload} title="Upload Custom Legal Documents">
          <FolderPlus size={16} />
          <span>Upload File</span>
        </button>

        {/* English / Tanglish Language Switcher */}
        <button
          className={`lang-toggle-btn ${language === "tanglish" ? "active-tanglish" : ""}`}
          onClick={onToggleLanguage}
          title="Toggle between English and Tanglish explanations"
        >
          <Globe size={15} />
          <span>{language === "tanglish" ? "🇮🇳 Tanglish Mode" : "🇬🇧 English Mode"}</span>
        </button>

        {/* Live System Status */}
        <div className="status-pill">
          <span className="status-dot"></span>
          <span>Zero Hallucination Gate</span>
        </div>
      </div>
    </header>
  );
}
