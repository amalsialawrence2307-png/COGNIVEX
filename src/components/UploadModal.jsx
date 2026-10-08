import React, { useState } from "react";
import { X, UploadCloud, FileText, CheckCircle2 } from "lucide-react";

export default function UploadModal({ isOpen, onClose, onAddCustomDocument }) {
  const [docName, setDocName] = useState("");
  const [category, setCategory] = useState("Legal Notice / Agreement");
  const [content, setContent] = useState("");
  const [isSuccess, setIsSuccess] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!docName.trim() || !content.trim()) return;

    onAddCustomDocument({
      id: `custom-doc-${Date.now()}`,
      name: `Document: ${docName}`,
      category,
      date: new Date().toLocaleDateString("en-GB", { day: "numeric", month: "long", year: "numeric" }),
      signatory: "Uploaded by User / Counsel",
      pages: 1,
      content
    });

    setIsSuccess(true);
    setTimeout(() => {
      setIsSuccess(false);
      onClose();
    }, 1200);
  };

  const handleLoadSample = (sampleType) => {
    if (sampleType === "nda") {
      setDocName("Non-Disclosure & Non-Compete Covenant");
      setCategory("Employment Contract");
      setContent(`NON-DISCLOSURE AND NON-COMPETE AGREEMENT
Date: 10 May 2023 | Parties: Zenith Tech Corp & Senior Architect David

[Clause 1: Term of Restraint]
The Employee covenants that for a period of 24 months post termination of employment, he shall not engage in competing ventures within South India.

[Clause 4: Liquidated Damages]
Breach of this covenant shall entail liquidated damages of INR 50,00,000 without prejudice to injunctive relief before Chennai High Court.

[Clause 7: Governing Jurisdiction]
Sole jurisdiction shall vest in the High Court of Judicature at Madras.`);
    } else {
      setDocName("Medical Negligence Forensic Opinion");
      setCategory("Expert Forensic Report");
      setContent(`MEDICAL COUNCIL INQUIRY REPORT - CAUSE OF CARDIAC ARREST
Date: 12 August 2024 | Subject: Patient Smt. Revathi (Deceased)

[Paragraph 1]
The enquiry committee examined the surgical logs of Dr. Anand. The anaesthetic administration was conducted as per standard medical protocols.

[Paragraph 2]
No gross surgical negligence or procedural departure observed in the operative theatre notes. Post-operative monitoring complied with MCI regulations.`);
    }
  };

  return (
    <div
      style={{
        position: "fixed",
        inset: 0,
        backgroundColor: "rgba(0, 0, 0, 0.75)",
        backdropFilter: "blur(6px)",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        zIndex: 100,
        padding: 20
      }}
      onClick={onClose}
    >
      <div
        style={{
          background: "var(--bg-card)",
          border: "1px solid var(--border-glow)",
          borderRadius: "var(--radius-lg)",
          width: "100%",
          maxWidth: 620,
          boxShadow: "0 25px 60px rgba(0,0,0,0.8)",
          overflow: "hidden"
        }}
        onClick={(e) => e.stopPropagation()}
      >
        <div
          style={{
            padding: "16px 24px",
            borderBottom: "1px solid var(--border-subtle)",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between"
          }}
        >
          <div style={{ display: "flex", alignItems: "center", gap: 10, fontWeight: 700, fontSize: "1rem" }}>
            <UploadCloud size={20} color="var(--gold-primary)" />
            <span>Upload or Ingest Legal Case Document</span>
          </div>
          <button
            onClick={onClose}
            style={{ background: "transparent", color: "var(--text-dim)", padding: 4 }}
          >
            <X size={20} />
          </button>
        </div>

        {/* Quick Sample Presets */}
        <div style={{ padding: "12px 24px", background: "rgba(0,0,0,0.2)", borderBottom: "1px solid var(--border-subtle)" }}>
          <div style={{ fontSize: "0.75rem", color: "var(--text-dim)", fontWeight: 600, marginBottom: 6 }}>
            Or Load Pre-formatted Case Sample:
          </div>
          <div style={{ display: "flex", gap: 8 }}>
            <button
              type="button"
              className="quick-prompt-chip"
              onClick={() => handleLoadSample("nda")}
            >
              + Load NDA Restraint Covenant
            </button>
            <button
              type="button"
              className="quick-prompt-chip"
              onClick={() => handleLoadSample("med")}
            >
              + Load Medical Council Opinion
            </button>
          </div>
        </div>

        <form onSubmit={handleSubmit} style={{ padding: 24, display: "flex", flexDirection: "column", gap: 16 }}>
          <div>
            <label style={{ fontSize: "0.8rem", color: "var(--text-muted)", fontWeight: 600, display: "block", marginBottom: 6 }}>
              Document Title / Name:
            </label>
            <input
              type="text"
              placeholder="e.g. Supplementary Witness Statement / Lease Agreement"
              value={docName}
              onChange={(e) => setDocName(e.target.value)}
              style={{ width: "100%", padding: "10px 14px" }}
              required
            />
          </div>

          <div>
            <label style={{ fontSize: "0.8rem", color: "var(--text-muted)", fontWeight: 600, display: "block", marginBottom: 6 }}>
              Category / Law Domain:
            </label>
            <select
              value={category}
              onChange={(e) => setCategory(e.target.value)}
              style={{ width: "100%", padding: "10px 14px" }}
            >
              <option value="Police Record / FIR">Police Record / FIR</option>
              <option value="Witness Statement / Deposition">Witness Statement / Deposition</option>
              <option value="Medical Forensics">Medical Forensics</option>
              <option value="Commercial Contract">Commercial Contract</option>
              <option value="Legal Notice">Legal Notice</option>
            </select>
          </div>

          <div>
            <label style={{ fontSize: "0.8rem", color: "var(--text-muted)", fontWeight: 600, display: "block", marginBottom: 6 }}>
              Document Content (or paste extracted PDF text):
            </label>
            <textarea
              rows={6}
              placeholder="Paste paragraphs or contract clauses here. Each paragraph break will be indexed as an audited section..."
              value={content}
              onChange={(e) => setContent(e.target.value)}
              style={{ width: "100%", padding: "12px 14px", resize: "vertical", fontSize: "0.825rem" }}
              required
            ></textarea>
          </div>

          {isSuccess && (
            <div style={{ display: "flex", alignItems: "center", gap: 8, color: "var(--emerald-success)", fontSize: "0.85rem" }}>
              <CheckCircle2 size={16} />
              <span>Document ingested and added to active case index successfully!</span>
            </div>
          )}

          <div style={{ display: "flex", justifyContent: "flex-end", gap: 10, marginTop: 8 }}>
            <button type="button" className="btn-secondary" onClick={onClose}>
              Cancel
            </button>
            <button type="submit" className="btn-primary">
              <FileText size={15} />
              <span>Ingest Document</span>
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
