import React from "react";
import { ShieldCheck, XCircle, CheckCircle2, AlertOctagon, Scale, ShieldAlert } from "lucide-react";
import { TRANSLATIONS } from "../data/translations";

export default function MissingEvidenceDetector({
  activeCase,
  language
}) {
  const t = TRANSLATIONS[language] || TRANSLATIONS.en;
  const missingFacts = activeCase.missingFacts || [];

  // Available positive verified facts for the case
  const verifiedFacts = activeCase.id === "case-criminal-01" ? [
    { title: "Complainant Identity & Address", source: "Doc A: Para 1", status: "VERIFIED" },
    { title: "Applicable Penal Sections (BNS 115(2), 118(1))", source: "Doc A: Para 4", status: "VERIFIED" },
    { title: "Medical Injury Classification (Simple Hurt)", source: "Doc C: Para 2", status: "VERIFIED" },
    { title: "CCTV Digital Electronic Time Stamp (20:08:44 IST)", source: "Doc D: Para 1", status: "VERIFIED" }
  ] : [
    { title: "Parties Identity & Master Agreement Execution Date", source: "Doc A: Clause 1", status: "VERIFIED" },
    { title: "Governing Law & Exclusive Chennai Seat", source: "Doc A: Clause 14", status: "VERIFIED" },
    { title: "Contract Term & Expiry (31 December 2026)", source: "Doc A: Clause 3.2", status: "VERIFIED" },
    { title: "Bank Escrow Mobilisation Advance Proof (₹15,00,000)", source: "Doc C: UTR Record", status: "VERIFIED" }
  ];

  return (
    <div className="missing-evidence-container animate-fade">
      {/* Header */}
      <div className="conflict-hero" style={{ background: "linear-gradient(135deg, rgba(245, 158, 11, 0.08), rgba(99, 102, 241, 0.04))", borderColor: "var(--border-glow)" }}>
        <div className="conflict-hero-text">
          <h2>
            <AlertOctagon size={24} color="var(--gold-primary)" />
            {t.missingHeaderTitle}
          </h2>
          <p>{t.missingHeaderDesc}</p>
        </div>
        <div style={{ textAlign: "right" }}>
          <div style={{ fontSize: "1.8rem", fontWeight: 800, color: "var(--ruby-danger)", fontFamily: "var(--font-mono)" }}>
            {missingFacts.length} MISSING
          </div>
          <div style={{ fontSize: "0.75rem", color: "var(--text-muted)" }}>
            Hallucination Guardrails Active
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
              ? "Petition draft panna thevaiyaana details-la edhu document-la illayo, adhai AI kandupidikkum. Accused-oda address illa na, AI thappa oru address-a guess panni ezhudhaama, 'Information Missing' nu flag panni halt pannum!"
              : "Standard LLMs fabricate plausible details (like fictional street addresses or dates) when information is absent. NyayaMitra's Missing Evidence Gate prevents perjury by enforcing strict refusals and generating courtroom warning flags."}
          </p>
        </div>
      </div>

      {/* Missing Evidentiary Checklist */}
      <div className="missing-checklist-card">
        <div className="conflict-card-header">
          <h3>
            <ShieldAlert size={18} color="var(--ruby-danger)" />
            <span>Missing Case Facts (Strict Refusal & Hallucination Block)</span>
          </h3>
          <span className="badge badge-ruby">Zero Guesswork Enforced</span>
        </div>

        <div>
          {missingFacts.map((item, idx) => (
            <div key={item.id || idx} className="missing-item-row">
              <div className="missing-item-left">
                <div className="missing-item-title">
                  <XCircle size={16} color="var(--ruby-danger)" />
                  <span>{item.field}</span>
                  <span className="badge badge-ruby" style={{ fontSize: "0.65rem" }}>
                    {item.risk} RISK
                  </span>
                </div>
                <div className="missing-item-desc">{item.detail}</div>
                <div className="missing-item-warning">
                  <strong>⚠️ Legal Implication & Guardrail:</strong> {item.legalWarning}
                </div>
                {item.tanglishExplanation && (
                  <div style={{ fontSize: "0.785rem", color: "var(--text-muted)", marginTop: 4 }}>
                    💡 <em>{item.tanglishExplanation}</em>
                  </div>
                )}
              </div>

              <div style={{ textAlign: "right", minWidth: 140 }}>
                <span className="badge badge-ruby">
                  Refused to Fill
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Positively Verified Elements */}
      <div className="missing-checklist-card">
        <div className="conflict-card-header">
          <h3>
            <ShieldCheck size={18} color="var(--emerald-success)" />
            <span>Documented & Fully Verified Case Elements</span>
          </h3>
          <span className="badge badge-emerald">Available in Corpus</span>
        </div>

        <div>
          {verifiedFacts.map((vf, idx) => (
            <div key={idx} className="missing-item-row" style={{ alignItems: "center" }}>
              <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
                <CheckCircle2 size={16} color="var(--emerald-success)" />
                <span style={{ fontWeight: 600, color: "#fff", fontSize: "0.875rem" }}>
                  {vf.title}
                </span>
              </div>
              <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
                <span style={{ fontSize: "0.75rem", fontFamily: "var(--font-mono)", color: "var(--gold-primary)" }}>
                  {vf.source}
                </span>
                <span className="badge badge-emerald">
                  Grounded
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
