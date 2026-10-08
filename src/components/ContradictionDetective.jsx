import React from "react";
import { AlertTriangle, GitCompare, ShieldAlert, ArrowRight, BookOpen, Scale } from "lucide-react";
import { TRANSLATIONS } from "../data/translations";

export default function ContradictionDetective({
  activeCase,
  language,
  onInspectCitation
}) {
  const t = TRANSLATIONS[language] || TRANSLATIONS.en;
  const contradictions = activeCase.knownContradictions || [];

  return (
    <div className="conflict-container animate-fade">
      {/* Hero section */}
      <div className="conflict-hero">
        <div className="conflict-hero-text">
          <h2>
            <AlertTriangle size={24} color="var(--ruby-danger)" />
            {t.contradictionHeaderTitle}
          </h2>
          <p>{t.contradictionHeaderDesc}</p>
        </div>
        <div style={{ textAlign: "right" }}>
          <div style={{ fontSize: "1.8rem", fontWeight: 800, color: "var(--gold-primary)", fontFamily: "var(--font-mono)" }}>
            {contradictions.length} CONFLICTS
          </div>
          <div style={{ fontSize: "0.75rem", color: "var(--text-muted)" }}>
            Autonomous Multi-Doc Discrepancies
          </div>
        </div>
      </div>

      {/* Tanglish Explanation Banner */}
      <div className="tanglish-banner">
        <Scale size={20} className="tanglish-banner-icon" />
        <div className="tanglish-banner-content">
          <h4>{t.tanglishPurithal}:</h4>
          <p>
            {language === "tanglish"
              ? "ரெண்டு ஆவணங்கள்ல வெவ்வேற தகவல் இருந்தா (உதாரணத்துக்கு FIR-ல 8:00 PM, Witness 9:15 PM), AI தனியா ஒரு நேரத்த சரி nu முடிவு பண்ணாம, ரெண்டையும் side-by-side காட்டி வழக்கறிஞருக்கு முரண்பாட்டை எடுத்துரைக்கும்!"
              : "When documents provide conflicting dates, times, amounts, or descriptions (e.g. 8:00 PM in FIR vs 9:15 PM in Deposition), the Agentic Assistant refuses to blend them arbitrarily. Instead, it tabulates them side-by-side with cross-examination strategies for trial counsel."}
          </p>
        </div>
      </div>

      {/* List of contradictions */}
      <div style={{ display: "flex", flexDirection: "column", gap: 18 }}>
        {contradictions.map((contra, idx) => {
          let sevBadge = "badge-ruby";
          if (contra.severity === "HIGH") sevBadge = "badge-amber";
          if (contra.severity === "MODERATE") sevBadge = "badge-indigo";

          return (
            <div key={contra.id || idx} className="conflict-card">
              <div className="conflict-card-header">
                <h3>
                  <GitCompare size={18} color="var(--gold-primary)" />
                  <span>#{idx + 1}: {contra.title}</span>
                </h3>
                <div style={{ display: "flex", gap: 8, alignItems: "center" }}>
                  <span className="badge badge-gold">{contra.category}</span>
                  <span className={`badge ${sevBadge}`}>{contra.severity} SEVERITY</span>
                </div>
              </div>

              {/* Side-by-side comparison grid */}
              <div className="conflict-grid">
                {/* Document A side */}
                <div className="conflict-item-box">
                  <div className="conflict-doc-tag">
                    {contra.itemA.doc} • [{contra.itemA.page}]
                  </div>
                  <div className="conflict-quote">
                    "{contra.itemA.text}"
                  </div>
                  <button
                    className="btn-secondary"
                    style={{ alignSelf: "flex-start", fontSize: "0.75rem", padding: "4px 10px" }}
                    onClick={() =>
                      onInspectCitation({
                        docId: "doc-fir",
                        docName: contra.itemA.doc,
                        quote: contra.itemA.text,
                        para: 2
                      })
                    }
                  >
                    <BookOpen size={13} />
                    <span>View in Case Doc A</span>
                  </button>
                </div>

                {/* Document B side */}
                <div className="conflict-item-box">
                  <div className="conflict-doc-tag" style={{ color: "var(--cyan-accent)" }}>
                    {contra.itemB.doc} • [{contra.itemB.page}]
                  </div>
                  <div className="conflict-quote" style={{ borderLeftColor: "var(--cyan-accent)" }}>
                    "{contra.itemB.text}"
                  </div>
                  <button
                    className="btn-secondary"
                    style={{ alignSelf: "flex-start", fontSize: "0.75rem", padding: "4px 10px" }}
                    onClick={() =>
                      onInspectCitation({
                        docId: "doc-witness",
                        docName: contra.itemB.doc,
                        quote: contra.itemB.text,
                        para: 2
                      })
                    }
                  >
                    <BookOpen size={13} />
                    <span>View in Case Doc B</span>
                  </button>
                </div>
              </div>

              {/* Trial strategy & Legal Impact */}
              <div className="conflict-impact-bar">
                <strong>⚖️ Trial Strategy & Evidentiary Significance:</strong>{" "}
                {contra.legalImpact}
              </div>

              {/* Tanglish Explanation snippet */}
              {contra.tanglishExplanation && (
                <div style={{ padding: "10px 20px", background: "rgba(245, 158, 11, 0.04)", fontSize: "0.8rem", color: "var(--gold-light)" }}>
                  <strong>💡 எளிய விளக்கம்:</strong> {contra.tanglishExplanation}
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}
