import React, { useState } from "react";
import { Send, ShieldAlert, CheckCircle2, AlertTriangle, XCircle, Sparkles, ChevronDown, ChevronUp, ExternalLink, HelpCircle } from "lucide-react";
import { processLegalQuery } from "../utils/ragEngine";
import { TRANSLATIONS } from "../data/translations";

export default function GroundedChat({
  activeCase,
  language,
  onSelectCitation
}) {
  const t = TRANSLATIONS[language] || TRANSLATIONS.en;

  // Initial greeting message for the active case
  const [messages, setMessages] = useState([
    {
      id: "msg-init",
      sender: "agent",
      timestamp: "Just now",
      content: `Welcome to **NyayaMitra Agentic Legal Intelligence**.\n\nCurrently analyzing **${activeCase.title}** (${activeCase.documents.length} verified documents loaded).\n\n⚖️ **Zero-Hallucination Protocol Active:**\nEvery factual assertion will be cross-referenced with exact paragraph and page citations. If a fact (such as accused residence or missing notices) is absent from the file, the system will explicitly refuse to guess or hallucinate.`,
      citations: [],
      claims: [
        { claim: "Case documents loaded and verified", status: "SUPPORTED", citation: "Corpus Init" }
      ],
      tanglishExplanation: "Nam AI unmaiyaana case documents-a mattum dhaan rely pannum. Endha fact-um guess pannaadhu. Kelvigal kettu verify pannunga!"
    }
  ]);

  const [inputValue, setInputValue] = useState("");
  const [isProcessing, setIsProcessing] = useState(false);
  const [expandedGates, setExpandedGates] = useState({ "msg-init": false });

  // Default quick questions based on the active case
  const quickPrompts = activeCase.id === "case-criminal-01" ? [
    "What time did the incident occur according to the police report and witness?",
    "What is the permanent address of the accused Ramesh?",
    "What offences are registered and what weapon was allegedly seized?",
    "Was notice under Section 35(3) BNSS / 41A CrPC served on the accused?"
  ] : [
    "According to the uploaded agreement, when does the contract expire?",
    "What advance amount was paid and does it match the legal notice claim?",
    "Was the mandatory 30-day cure notice served prior to termination?",
    "Which court has exclusive jurisdiction under the Master Agreement?"
  ];

  const handleSend = (queryText) => {
    const text = queryText || inputValue;
    if (!text.trim() || isProcessing) return;

    const userMsg = {
      id: `msg-user-${Date.now()}`,
      sender: "user",
      timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
      content: text
    };

    setMessages((prev) => [...prev, userMsg]);
    setInputValue("");
    setIsProcessing(true);

    // Simulate agentic retrieval, entailment audit, and verification pipeline
    setTimeout(() => {
      const result = processLegalQuery(text, activeCase);
      const agentMsg = {
        id: `msg-agent-${Date.now()}`,
        sender: "agent",
        timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
        content: result.groundedAnswer,
        citations: result.citations || [],
        claims: result.claims || [],
        tanglishExplanation: result.tanglishExplanation || "",
        type: result.type
      };

      setMessages((prev) => [...prev, agentMsg]);
      setExpandedGates((prev) => ({ ...prev, [agentMsg.id]: true }));
      setIsProcessing(false);
    }, 600);
  };

  const toggleGate = (msgId) => {
    setExpandedGates((prev) => ({ ...prev, [msgId]: !prev[msgId] }));
  };

  return (
    <div className="chat-container">
      {/* Chat header */}
      <div className="chat-header">
        <div className="chat-header-info">
          <h2>
            <Sparkles size={18} color="var(--gold-primary)" />
            {t.chatHeaderTitle}
          </h2>
          <div className="chat-header-desc">{t.chatHeaderDesc}</div>
        </div>
        <div className="badge badge-emerald">
          <CheckCircle2 size={12} />
          {t.badgeVerified}
        </div>
      </div>

      {/* Messages viewport */}
      <div className="chat-messages">
        {messages.map((msg) => {
          const isUser = msg.sender === "user";
          const isExpanded = expandedGates[msg.id];

          return (
            <div
              key={msg.id}
              className={`message-bubble ${isUser ? "message-user" : "message-agent"} animate-fade`}
            >
              <div className="message-meta">
                <span style={{ fontWeight: 700, color: isUser ? "#fff" : "var(--gold-primary)" }}>
                  {isUser ? "You (Advocate / Researcher)" : "NyayaMitra Agentic RAG"}
                </span>
                <span>{msg.timestamp}</span>
              </div>

              <div className="message-body">
                <div className="message-content-text">{msg.content}</div>

                {/* Tanglish voice explanation callout */}
                {language === "tanglish" && msg.tanglishExplanation && (
                  <div
                    style={{
                      marginTop: 12,
                      padding: "8px 12px",
                      background: "rgba(245, 158, 11, 0.12)",
                      borderLeft: "3px solid var(--gold-primary)",
                      borderRadius: 4,
                      fontSize: "0.8rem",
                      color: "var(--gold-light)"
                    }}
                  >
                    <strong>💡 டங்கிலிஷ் விளக்கம்:</strong> {msg.tanglishExplanation}
                  </div>
                )}

                {/* Clickable Source Citations */}
                {!isUser && msg.citations && msg.citations.length > 0 && (
                  <div className="citations-box">
                    <div className="citations-title">
                      <ExternalLink size={13} />
                      <span>CLICK TO INSPECT SUPPORTING DOCUMENT CLAUSE:</span>
                    </div>
                    <div className="citation-chips">
                      {msg.citations.map((cit, idx) => (
                        <button
                          key={idx}
                          className="citation-chip"
                          onClick={() => onSelectCitation(cit)}
                          title={`Jump to ${cit.docName} Pg ${cit.page}, Para ${cit.para}`}
                        >
                          <span>{cit.docName}</span>
                          <span style={{ opacity: 0.8 }}>[Pg {cit.page}, Para {cit.para}]</span>
                        </button>
                      ))}
                    </div>
                  </div>
                )}

                {/* Expandable Claim Verification Gate */}
                {!isUser && msg.claims && msg.claims.length > 0 && (
                  <div className="claim-gate-box">
                    <div className="claim-gate-header" onClick={() => toggleGate(msg.id)}>
                      <span style={{ display: "flex", alignItems: "center", gap: 6 }}>
                        <ShieldAlert size={14} color="var(--gold-primary)" />
                        {t.claimGateTitle} ({msg.claims.length} Atomic Claims Audited)
                      </span>
                      {isExpanded ? <ChevronUp size={15} /> : <ChevronDown size={15} />}
                    </div>

                    {isExpanded && (
                      <div className="claim-gate-list">
                        {msg.claims.map((cl, cIdx) => {
                          let badgeClass = "badge-emerald";
                          let icon = <CheckCircle2 size={13} />;
                          let statusLabel = t.claimSupported;

                          if (cl.status === "UNSUPPORTED") {
                            badgeClass = "badge-ruby";
                            icon = <XCircle size={13} />;
                            statusLabel = t.claimUnsupported;
                          } else if (cl.status === "CONFLICTING") {
                            badgeClass = "badge-amber";
                            icon = <AlertTriangle size={13} />;
                            statusLabel = t.claimConflicting;
                          }

                          return (
                            <div key={cIdx} className="claim-gate-item">
                              <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
                                <span style={{ color: "var(--text-dim)", fontFamily: "var(--font-mono)" }}>
                                  #{cIdx + 1}
                                </span>
                                <span>{cl.claim}</span>
                              </div>
                              <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
                                <span style={{ fontSize: "0.7rem", color: "var(--text-dim)", fontFamily: "var(--font-mono)" }}>
                                  {cl.citation}
                                </span>
                                <span className={`badge ${badgeClass}`}>
                                  {icon}
                                  {statusLabel}
                                </span>
                              </div>
                            </div>
                          );
                        })}
                      </div>
                    )}
                  </div>
                )}
              </div>
            </div>
          );
        })}

        {isProcessing && (
          <div className="message-bubble message-agent animate-fade">
            <div className="message-body" style={{ color: "var(--gold-primary)", display: "flex", alignItems: "center", gap: 8 }}>
              <Sparkles size={16} className="animate-spin" />
              <span>Scanning document vectors, cross-referencing contradictions, and verifying claims...</span>
            </div>
          </div>
        )}
      </div>

      {/* Suggested Quick Questions */}
      <div className="quick-prompts-bar">
        <div className="quick-prompts-title">Verified Inquiries (Click to Test Live):</div>
        <div className="quick-prompts-list">
          {quickPrompts.map((p, idx) => (
            <button
              key={idx}
              className="quick-prompt-chip"
              onClick={() => handleSend(p)}
              disabled={isProcessing}
            >
              {p}
            </button>
          ))}
        </div>
      </div>

      {/* Input query area */}
      <form
        className="chat-input-area"
        onSubmit={(e) => {
          e.preventDefault();
          handleSend();
        }}
      >
        <input
          type="text"
          className="chat-input"
          placeholder="Ask any legal question across case documents (e.g. incident time, contract expiry, accused address)..."
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          disabled={isProcessing}
        />
        <button type="submit" className="chat-send-btn" disabled={isProcessing || !inputValue.trim()}>
          <Send size={15} />
          <span>Ask Agent</span>
        </button>
      </form>
    </div>
  );
}
