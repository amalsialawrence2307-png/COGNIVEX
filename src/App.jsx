import React, { useState } from "react";
import Navbar from "./components/Navbar";
import GroundedChat from "./components/GroundedChat";
import DocumentViewer from "./components/DocumentViewer";
import ContradictionDetective from "./components/ContradictionDetective";
import MissingEvidenceDetector from "./components/MissingEvidenceDetector";
import DraftingStudio from "./components/DraftingStudio";
import BenchmarkScoreboard from "./components/BenchmarkScoreboard";
import UploadModal from "./components/UploadModal";
import { CASE_BUNDLES } from "./data/caseBundles";
import { TRANSLATIONS } from "./data/translations";
import { MessageSquare, GitCompare, AlertOctagon, PenTool, Award, FileText } from "lucide-react";
import "./App.css";

export default function App() {
  const [cases, setCases] = useState(CASE_BUNDLES);
  const [selectedCaseId, setSelectedCaseId] = useState("case-criminal-01");
  const [activeTab, setActiveTab] = useState("chat");
  const [language, setLanguage] = useState("tanglish"); // Tanglish by default for HNX26EPS01!
  const [highlightedCitation, setHighlightedCitation] = useState(null);
  const [isUploadOpen, setIsUploadOpen] = useState(false);

  const activeCase = cases.find((c) => c.id === selectedCaseId) || cases[0];
  const t = TRANSLATIONS[language] || TRANSLATIONS.en;

  const handleSelectCitation = (citation) => {
    setHighlightedCitation(citation);
    // If not in chat (split view) or documents view, switch to chat so the viewer is visible
    if (activeTab !== "chat" && activeTab !== "documents") {
      setActiveTab("chat");
    }
  };

  const handleAddCustomDocument = (newDoc) => {
    setCases((prev) =>
      prev.map((c) => {
        if (c.id === selectedCaseId) {
          return {
            ...c,
            documents: [...c.documents, newDoc]
          };
        }
        return c;
      })
    );
  };

  return (
    <div className="app-layout">
      {/* Top Brand Navbar */}
      <Navbar
        selectedCaseId={selectedCaseId}
        onSelectCase={(id) => {
          setSelectedCaseId(id);
          setHighlightedCitation(null);
        }}
        language={language}
        onToggleLanguage={() => setLanguage((prev) => (prev === "en" ? "tanglish" : "en"))}
        onOpenUpload={() => setIsUploadOpen(true)}
      />

      {/* Main Feature Tabs Bar */}
      <nav className="tabs-bar" aria-label="Feature navigation">
        <button
          className={`tab-btn ${activeTab === "chat" ? "active" : ""}`}
          onClick={() => setActiveTab("chat")}
        >
          <MessageSquare size={16} />
          <span>{t.tabChat}</span>
        </button>

        <button
          className={`tab-btn ${activeTab === "contradictions" ? "active" : ""}`}
          onClick={() => setActiveTab("contradictions")}
        >
          <GitCompare size={16} />
          <span>{t.tabContradictions}</span>
          <span className="tab-count-badge">
            {activeCase.knownContradictions?.length || 0}
          </span>
        </button>

        <button
          className={`tab-btn ${activeTab === "missing" ? "active" : ""}`}
          onClick={() => setActiveTab("missing")}
        >
          <AlertOctagon size={16} />
          <span>{t.tabMissingFacts}</span>
          <span className="tab-count-badge" style={{ background: "var(--ruby-danger)", color: "#fff" }}>
            {activeCase.missingFacts?.length || 0}
          </span>
        </button>

        <button
          className={`tab-btn ${activeTab === "drafting" ? "active" : ""}`}
          onClick={() => setActiveTab("drafting")}
        >
          <PenTool size={16} />
          <span>{t.tabDrafting}</span>
        </button>

        <button
          className={`tab-btn ${activeTab === "scoreboard" ? "active" : ""}`}
          onClick={() => setActiveTab("scoreboard")}
        >
          <Award size={16} />
          <span>{t.tabScoreboard}</span>
          <span className="tab-count-badge" style={{ background: "var(--emerald-success)", color: "#000" }}>
            LIVE
          </span>
        </button>

        <button
          className={`tab-btn ${activeTab === "documents" ? "active" : ""}`}
          onClick={() => setActiveTab("documents")}
        >
          <FileText size={16} />
          <span>{t.tabDocuments} ({activeCase.documents.length})</span>
        </button>
      </nav>

      {/* Active Workspace View */}
      <main className="main-content">
        {/* Tab 1: Grounded RAG Chat + Real-time Interactive Document Viewer Split */}
        {activeTab === "chat" && (
          <div className="split-layout">
            <GroundedChat
              activeCase={activeCase}
              language={language}
              onSelectCitation={handleSelectCitation}
            />

            <DocumentViewer
              documents={activeCase.documents}
              highlightedCitation={highlightedCitation}
              onClearHighlight={() => setHighlightedCitation(null)}
            />
          </div>
        )}

        {/* Tab 2: Contradiction Detective */}
        {activeTab === "contradictions" && (
          <ContradictionDetective
            activeCase={activeCase}
            language={language}
            onInspectCitation={handleSelectCitation}
          />
        )}

        {/* Tab 3: Missing Evidence Gate */}
        {activeTab === "missing" && (
          <MissingEvidenceDetector
            activeCase={activeCase}
            language={language}
          />
        )}

        {/* Tab 4: Agentic Legal Drafting Studio */}
        {activeTab === "drafting" && (
          <DraftingStudio
            activeCase={activeCase}
            language={language}
          />
        )}

        {/* Tab 5: Baseline vs Our AI Scoreboard */}
        {activeTab === "scoreboard" && (
          <BenchmarkScoreboard
            language={language}
          />
        )}

        {/* Tab 6: Full Document Corpus View */}
        {activeTab === "documents" && (
          <div style={{ maxWidth: 1100, margin: "0 auto", width: "100%" }}>
            <DocumentViewer
              documents={activeCase.documents}
              highlightedCitation={highlightedCitation}
              onClearHighlight={() => setHighlightedCitation(null)}
            />
          </div>
        )}
      </main>

      {/* Custom Upload Modal */}
      <UploadModal
        isOpen={isUploadOpen}
        onClose={() => setIsUploadOpen(false)}
        onAddCustomDocument={handleAddCustomDocument}
      />
    </div>
  );
}
