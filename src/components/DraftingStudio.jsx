import React, { useState } from "react";
import { PenTool, Copy, Download, Printer, Check, ShieldCheck, AlertTriangle, FileText, Scale } from "lucide-react";
import { generateLegalDraft } from "../utils/ragEngine";
import { TRANSLATIONS } from "../data/translations";

export default function DraftingStudio({
  activeCase,
  language
}) {
  const t = TRANSLATIONS[language] || TRANSLATIONS.en;
  const [templateType, setTemplateType] = useState("bail");
  const [copied, setCopied] = useState(false);

  const draft = generateLegalDraft(templateType, activeCase);

  const handleCopy = () => {
    navigator.clipboard.writeText(draft.draftContent);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleDownload = () => {
    const element = document.createElement("a");
    const file = new Blob([draft.draftContent], { type: "text/plain" });
    element.href = URL.createObjectURL(file);
    element.download = `${activeCase.id}_legal_draft.txt`;
    document.body.appendChild(element);
    element.click();
    document.body.removeChild(element);
  };

  const handlePrint = () => {
    window.print();
  };

  // Format text to highlight citations and missing fact tags
  const renderFormattedDraft = (content) => {
    const lines = content.split("\n");
    return lines.map((line, lIdx) => {
      // Check for missing alert
      if (line.includes("[⚠️") || line.includes("MISSING")) {
        return (
          <div key={lIdx} style={{ margin: "10px 0" }}>
            <span className="inline-missing-flag">{line}</span>
          </div>
        );
      }

      // Check for citations inside line
      const parts = line.split(/(\[Citation:.*?\])/g);
      return (
        <div key={lIdx} style={{ minHeight: line.trim() ? "auto" : "1em", marginBottom: 6 }}>
          {parts.map((p, pIdx) => {
            if (p.startsWith("[Citation:")) {
              return (
                <span key={pIdx} className="inline-citation-highlight">
                  {p}
                </span>
              );
            }
            return <span key={pIdx}>{p}</span>;
          })}
        </div>
      );
    });
  };

  return (
    <div className="drafting-studio-container animate-fade">
      {/* Header and Toolbar */}
      <div className="drafting-toolbar">
        <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
          <div style={{ display: "flex", alignItems: "center", gap: 8, color: "#fff", fontWeight: 700, fontSize: "0.95rem" }}>
            <PenTool size={18} color="var(--gold-primary)" />
            <span>{t.draftingHeaderTitle}</span>
          </div>

          <div style={{ display: "flex", gap: 6, marginLeft: 16 }}>
            {activeCase.id === "case-criminal-01" ? (
              <button
                className={`tab-btn ${templateType === "bail" ? "active" : ""}`}
                onClick={() => setTemplateType("bail")}
              >
                Bail Application (Sec 483 BNSS / 437 CrPC)
              </button>
            ) : (
              <button
                className={`tab-btn ${templateType === "notice" ? "active" : ""}`}
                onClick={() => setTemplateType("notice")}
              >
                Contract Rebuttal & Legal Notice
              </button>
            )}
          </div>
        </div>

        <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
          <span className="badge badge-emerald">
            <ShieldCheck size={13} />
            {draft.groundednessScore} Grounded
          </span>
          <span className="badge badge-ruby">
            {draft.missingFlagsCount} Missing Fact Flags
          </span>

          <button className="btn-secondary" onClick={handleCopy} title="Copy draft to clipboard">
            {copied ? <Check size={14} color="var(--emerald-success)" /> : <Copy size={14} />}
            <span>{copied ? "Copied!" : "Copy Draft"}</span>
          </button>

          <button className="btn-secondary" onClick={handleDownload} title="Download draft as text file">
            <Download size={14} />
            <span>Download</span>
          </button>

          <button className="btn-primary" onClick={handlePrint} title="Print or save as PDF">
            <Printer size={14} />
            <span>Print / PDF</span>
          </button>
        </div>
      </div>

      {/* Tanglish Explanation Banner */}
      <div className="tanglish-banner">
        <Scale size={20} className="tanglish-banner-icon" />
        <div className="tanglish-banner-content">
          <h4>{t.tanglishPurithal}:</h4>
          <p>
            {language === "tanglish"
              ? "Lawyer relevant case documents upload pannuvaar. AI available facts-a use panni draft prepare pannum. Case file-la illadha facts-a AI create pannakoodadhu! Accused address illana, guess pannaama 'Information Missing' nu flag pannum."
              : "During legal drafting, AI strictly references authentic documentary clauses [Citation: Doc A, Para 4] and embeds high-visibility warnings [⚠️ CRITICAL FACTUAL ALERT] for any unverified or missing information."}
          </p>
        </div>
      </div>

      {/* Courtroom Paper Canvas */}
      <div className="drafting-editor-paper">
        <div className="paper-court-header">
          <h3>{draft.title}</h3>
          <div style={{ fontSize: "0.825rem", color: "var(--text-muted)", marginTop: 6, fontFamily: "var(--font-mono)" }}>
            {draft.caseNo}
          </div>
          <div style={{ fontSize: "0.85rem", color: "var(--text-dim)", marginTop: 2 }}>
            Petitioner: <strong>{draft.petitionerName}</strong>
          </div>
        </div>

        <div className="paper-content-text">
          {renderFormattedDraft(draft.draftContent)}
        </div>
      </div>
    </div>
  );
}
