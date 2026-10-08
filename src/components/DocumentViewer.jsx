import React, { useState, useEffect, useRef } from "react";
import { FileText, Calendar, UserCheck, Search, BookmarkCheck } from "lucide-react";

export default function DocumentViewer({
  documents = [],
  highlightedCitation = null,
  onClearHighlight
}) {
  const [activeDocIndex, setActiveDocIndex] = useState(0);
  const [searchTerm, setSearchTerm] = useState("");
  const paraRefs = useRef({});

  // When a citation is clicked anywhere in the app, switch to the right document & scroll to paragraph
  useEffect(() => {
    if (highlightedCitation && highlightedCitation.docId) {
      const idx = documents.findIndex(
        (d) =>
          d.id === highlightedCitation.docId ||
          highlightedCitation.docName?.toLowerCase().includes(d.id.replace("doc-", "").toLowerCase())
      );
      if (idx !== -1) {
        setActiveDocIndex(idx);
      }
    }
  }, [highlightedCitation, documents]);

  // Scroll to paragraph after tab switch
  useEffect(() => {
    if (highlightedCitation && highlightedCitation.para) {
      const el = paraRefs.current[highlightedCitation.para];
      if (el) {
        el.scrollIntoView({ behavior: "smooth", block: "center" });
      }
    }
  }, [highlightedCitation, activeDocIndex]);

  const activeDoc = documents[activeDocIndex] || documents[0];
  if (!activeDoc) {
    return (
      <div className="doc-viewer-card" style={{ padding: 24, textAlign: "center" }}>
        <p>No documents loaded in current case.</p>
      </div>
    );
  }

  // Split content into paragraph blocks
  const paragraphs = activeDoc.content.split("\n\n").map((text, idx) => ({
    paraNumber: idx + 1,
    text
  }));

  const filteredParagraphs = searchTerm
    ? paragraphs.filter((p) => p.text.toLowerCase().includes(searchTerm.toLowerCase()))
    : paragraphs;

  return (
    <div className="doc-viewer-card">
      {/* Document tabs */}
      <div className="doc-viewer-tabs">
        {documents.map((doc, idx) => (
          <button
            key={doc.id}
            className={`doc-tab-btn ${activeDocIndex === idx ? "active" : ""}`}
            onClick={() => {
              setActiveDocIndex(idx);
              if (onClearHighlight) onClearHighlight();
            }}
          >
            <FileText size={14} />
            <span>{doc.name.split(":")[0]}</span>
          </button>
        ))}
      </div>

      {/* Document Header & Search */}
      <div className="doc-viewer-header">
        <div>
          <div className="doc-meta-title">{activeDoc.name}</div>
          <div className="doc-meta-sub">
            {activeDoc.category} • {activeDoc.date} • {activeDoc.signatory}
          </div>
        </div>

        {/* Search within document */}
        <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
          <div style={{ position: "relative" }}>
            <input
              type="text"
              placeholder="Search in doc..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              style={{
                fontSize: "0.75rem",
                padding: "5px 10px 5px 28px",
                width: 140,
                borderRadius: 4
              }}
            />
            <Search
              size={13}
              style={{
                position: "absolute",
                left: 8,
                top: "50%",
                transform: "translateY(-50%)",
                color: "var(--text-dim)"
              }}
            />
          </div>

          {highlightedCitation && (
            <span className="badge badge-gold" title="A citation is currently highlighted">
              <BookmarkCheck size={12} />
              Cited Para
            </span>
          )}
        </div>
      </div>

      {/* Document Paragraphs Scroll Body */}
      <div className="doc-body-scroll">
        {filteredParagraphs.map((p) => {
          const isCited =
            highlightedCitation &&
            (activeDoc.id === highlightedCitation.docId ||
              highlightedCitation.docName?.toLowerCase().includes(activeDoc.id.replace("doc-", ""))) &&
            (highlightedCitation.para === p.paraNumber ||
              (highlightedCitation.quote && p.text.includes(highlightedCitation.quote.slice(0, 30))));

          return (
            <div
              key={p.paraNumber}
              ref={(el) => (paraRefs.current[p.paraNumber] = el)}
              className={`doc-paragraph-block ${isCited ? "highlighted-chunk" : ""}`}
            >
              <div
                style={{
                  fontSize: "0.7rem",
                  color: isCited ? "var(--gold-primary)" : "var(--text-dim)",
                  fontWeight: 700,
                  marginBottom: 4,
                  display: "flex",
                  justifyContent: "space-between"
                }}
              >
                <span>SECTION / PARAGRAPH {p.paraNumber}</span>
                {isCited && <span style={{ color: "var(--gold-light)" }}>★ AUDITED CITATION TARGET</span>}
              </div>
              <div>{p.text}</div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
