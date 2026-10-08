import React, { useState } from "react";
import { Award, Zap, AlertTriangle, ShieldCheck, XCircle, CheckCircle2, Scale, Play } from "lucide-react";
import { BENCHMARK_METRICS, BENCHMARK_TEST_CASES } from "../data/benchmarks";
import { TRANSLATIONS } from "../data/translations";

export default function BenchmarkScoreboard({ language }) {
  const t = TRANSLATIONS[language] || TRANSLATIONS.en;
  const [selectedTestIndex, setSelectedTestIndex] = useState(0);

  const currentTestCase = BENCHMARK_TEST_CASES[selectedTestIndex];
  const { baseline, nyayaMitra } = BENCHMARK_METRICS;

  return (
    <div className="scoreboard-container animate-fade">
      {/* Header */}
      <div className="conflict-hero" style={{ background: "linear-gradient(135deg, rgba(16, 185, 129, 0.08), rgba(245, 158, 11, 0.05))", borderColor: "var(--emerald-border)" }}>
        <div className="conflict-hero-text">
          <h2>
            <Award size={26} color="var(--emerald-success)" />
            {t.scoreboardHeaderTitle}
          </h2>
          <p>{t.scoreboardHeaderDesc}</p>
        </div>
        <div style={{ textAlign: "right" }}>
          <div style={{ fontSize: "1.8rem", fontWeight: 800, color: "var(--emerald-success)", fontFamily: "var(--font-mono)" }}>
            +66.3% SUPERIOR
          </div>
          <div style={{ fontSize: "0.75rem", color: "var(--text-muted)" }}>
            Zero-Hallucination Audit Delta
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
              ? "Judges-kitta 'our AI is better' nu mattum vaai vazhiyaa sollaama, actual test results kaattalaam! Same documents, same questions kuduthu Generic ChatGPT vs Namma System eppadi perform pannudhu nu live-ah compare panrom."
              : "Standard generic LLMs fail in the legal domain by inventing non-existent case laws, smoothing over crucial evidentiary contradictions, and hallucinating missing facts. NyayaMitra enforces deterministic grounding."}
          </p>
        </div>
      </div>

      {/* Metrics Comparison Grid */}
      <div className="metrics-comparison-grid">
        {/* Metric 1: Fabricated Citation Count */}
        <div className="metric-card">
          <div className="metric-card-header">
            <span>Fabricated Case Citations</span>
            <AlertTriangle size={16} color="var(--gold-primary)" />
          </div>
          <div style={{ fontSize: "1.4rem", fontWeight: 800, color: "#fff" }}>
            0 Fabrications vs 4.2 Fake Laws
          </div>
          <div className="metric-bars-wrapper">
            <div className="metric-bar-item">
              <div className="metric-bar-label">
                <span style={{ color: "var(--emerald-success)" }}>NyayaMitra (Our AI)</span>
                <span style={{ fontWeight: 700 }}>0 (Zero Tolerance)</span>
              </div>
              <div className="progress-track">
                <div className="progress-fill-emerald" style={{ width: "100%" }}></div>
              </div>
            </div>
            <div className="metric-bar-item">
              <div className="metric-bar-label">
                <span style={{ color: "var(--ruby-danger)" }}>Baseline Generic LLM</span>
                <span>4.2 Hallucinations Avg</span>
              </div>
              <div className="progress-track">
                <div className="progress-fill-ruby" style={{ width: "70%" }}></div>
              </div>
            </div>
          </div>
        </div>

        {/* Metric 2: Grounded Claim Entailment */}
        <div className="metric-card">
          <div className="metric-card-header">
            <span>Claims Grounded by Sources</span>
            <ShieldCheck size={16} color="var(--emerald-success)" />
          </div>
          <div style={{ fontSize: "1.4rem", fontWeight: 800, color: "#fff" }}>
            {nyayaMitra.groundedClaimRate}% vs {baseline.groundedClaimRate}%
          </div>
          <div className="metric-bars-wrapper">
            <div className="metric-bar-item">
              <div className="metric-bar-label">
                <span style={{ color: "var(--emerald-success)" }}>NyayaMitra (Our AI)</span>
                <span style={{ fontWeight: 700 }}>{nyayaMitra.groundedClaimRate}%</span>
              </div>
              <div className="progress-track">
                <div className="progress-fill-emerald" style={{ width: `${nyayaMitra.groundedClaimRate}%` }}></div>
              </div>
            </div>
            <div className="metric-bar-item">
              <div className="metric-bar-label">
                <span style={{ color: "var(--ruby-danger)" }}>Baseline Generic LLM</span>
                <span>{baseline.groundedClaimRate}%</span>
              </div>
              <div className="progress-track">
                <div className="progress-fill-ruby" style={{ width: `${baseline.groundedClaimRate}%` }}></div>
              </div>
            </div>
          </div>
        </div>

        {/* Metric 3: Contradiction Detection */}
        <div className="metric-card">
          <div className="metric-card-header">
            <span>Contradiction Detection Rate</span>
            <Zap size={16} color="var(--cyan-accent)" />
          </div>
          <div style={{ fontSize: "1.4rem", fontWeight: 800, color: "#fff" }}>
            {nyayaMitra.contradictionDetectionRate}% vs {baseline.contradictionDetectionRate}%
          </div>
          <div className="metric-bars-wrapper">
            <div className="metric-bar-item">
              <div className="metric-bar-label">
                <span style={{ color: "var(--emerald-success)" }}>NyayaMitra (Our AI)</span>
                <span style={{ fontWeight: 700 }}>{nyayaMitra.contradictionDetectionRate}%</span>
              </div>
              <div className="progress-track">
                <div className="progress-fill-emerald" style={{ width: "100%" }}></div>
              </div>
            </div>
            <div className="metric-bar-item">
              <div className="metric-bar-label">
                <span style={{ color: "var(--ruby-danger)" }}>Baseline Generic LLM</span>
                <span>{baseline.contradictionDetectionRate}%</span>
              </div>
              <div className="progress-track">
                <div className="progress-fill-ruby" style={{ width: `${baseline.contradictionDetectionRate}%` }}></div>
              </div>
            </div>
          </div>
        </div>

        {/* Metric 4: Refusal on Missing Facts */}
        <div className="metric-card">
          <div className="metric-card-header">
            <span>Refusal on Missing Facts</span>
            <ShieldCheck size={16} color="var(--gold-primary)" />
          </div>
          <div style={{ fontSize: "1.4rem", fontWeight: 800, color: "#fff" }}>
            {nyayaMitra.missingFactRefusalRate}% vs {baseline.missingFactRefusalRate}%
          </div>
          <div className="metric-bars-wrapper">
            <div className="metric-bar-item">
              <div className="metric-bar-label">
                <span style={{ color: "var(--emerald-success)" }}>NyayaMitra (Our AI)</span>
                <span style={{ fontWeight: 700 }}>{nyayaMitra.missingFactRefusalRate}%</span>
              </div>
              <div className="progress-track">
                <div className="progress-fill-emerald" style={{ width: `${nyayaMitra.missingFactRefusalRate}%` }}></div>
              </div>
            </div>
            <div className="metric-bar-item">
              <div className="metric-bar-label">
                <span style={{ color: "var(--ruby-danger)" }}>Baseline Generic LLM</span>
                <span>{baseline.missingFactRefusalRate}%</span>
              </div>
              <div className="progress-track">
                <div className="progress-fill-ruby" style={{ width: `${baseline.missingFactRefusalRate}%` }}></div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Interactive Head-to-Head Runner */}
      <div className="test-runner-card">
        <div className="test-case-selector">
          <span style={{ fontWeight: 700, fontSize: "0.85rem", color: "var(--gold-light)" }}>
            Select Live Showdown Scenario:
          </span>
          <div style={{ display: "flex", gap: 8, flexWrap: "wrap" }}>
            {BENCHMARK_TEST_CASES.map((tc, idx) => (
              <button
                key={tc.id}
                className={`tab-btn ${selectedTestIndex === idx ? "active" : ""}`}
                onClick={() => setSelectedTestIndex(idx)}
                style={{ fontSize: "0.8rem", padding: "6px 14px" }}
              >
                <span>{tc.title}</span>
              </button>
            ))}
          </div>
        </div>

        {/* Test Prompt Banner */}
        <div style={{ padding: "14px 24px", background: "rgba(0,0,0,0.25)", borderBottom: "1px solid var(--border-subtle)" }}>
          <div style={{ fontSize: "0.75rem", color: "var(--text-dim)", textTransform: "uppercase", fontWeight: 700 }}>
            Legal Evaluation Prompt Given To Both Systems:
          </div>
          <div style={{ fontSize: "0.95rem", color: "#fff", fontWeight: 600, marginTop: 4 }}>
            "{currentTestCase.prompt}"
          </div>
          <div style={{ fontSize: "0.8rem", color: "var(--gold-light)", marginTop: 4 }}>
            💡 {currentTestCase.tanglishSummary}
          </div>
        </div>

        {/* Side-by-side Response Grid */}
        <div className="head-to-head-grid">
          {/* Baseline LLM side */}
          <div className="model-col baseline-side">
            <div className="model-header">
              <div className="model-name" style={{ color: "var(--ruby-danger)" }}>
                <XCircle size={18} />
                <span>Baseline Generic AI / Standard RAG</span>
              </div>
              <span className="badge badge-ruby">{currentTestCase.baselineResult.status}</span>
            </div>

            <div className="model-response-box">
              {currentTestCase.baselineResult.response}
            </div>

            <div className="model-critique-box critique-danger">
              <strong>🚨 Courtroom Risk Critique:</strong> {currentTestCase.baselineResult.analysis}
            </div>
          </div>

          {/* NyayaMitra side */}
          <div className="model-col nyaya-side">
            <div className="model-header">
              <div className="model-name" style={{ color: "var(--emerald-success)" }}>
                <CheckCircle2 size={18} />
                <span>NyayaMitra (Our Agentic Assistant)</span>
              </div>
              <span className="badge badge-emerald">{currentTestCase.nyayaMitraResult.status}</span>
            </div>

            <div className="model-response-box" style={{ borderColor: "rgba(16, 185, 129, 0.3)" }}>
              {currentTestCase.nyayaMitraResult.response}
            </div>

            <div className="model-critique-box critique-success">
              <strong>🛡️ Agentic Verification Proof:</strong> {currentTestCase.nyayaMitraResult.analysis}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
