// Case Bundles Data for Agentic Legal Assistant (HNX26EPS01)
// Contains authentic legal case structures with built-in factual citations, 
// multi-document contradictions, and missing evidentiary facts.

export const CASE_BUNDLES = [
  {
    id: "case-criminal-01",
    title: "State of Tamil Nadu v. Ramesh (FIR #412/2024)",
    type: "Criminal Law / Bail & Evidence Assessment",
    jurisdiction: "Metropolitan Magistrate Court, Egmore, Chennai",
    summary: "Allegation of assault with a weapon near Anna Nagar. Serious conflict between Police FIR incident time (8:00 PM) and Key Eyewitness deposition (9:15 PM), along with missing accused residence details.",
    documents: [
      {
        id: "doc-fir",
        name: "Document A: Police FIR #412/2024",
        category: "Police Record",
        date: "14 October 2024",
        signatory: "Inspector S. Ramanathan, K-4 Anna Nagar Police Station",
        pages: 2,
        content: `FIRST INFORMATION REPORT (Under Section 173 BNSS / Sec 154 CrPC)
Station: K-4 Anna Nagar PS | Crime No: 412/2024 | Date of Registration: 14-Oct-2024, 22:30 Hrs

[Paragraph 1]
Complainant: M. Vignesh, aged 32 years, residing at Door No. 12, 4th Avenue, Shanthi Colony, Anna Nagar, Chennai.
Accused: Ramesh (Son of unknown), aged approx 28 years, occupation stated as auto driver. Permanent residence address: NOT ASCERTAINED / NOT RECORDED IN RECORD.

[Paragraph 2]
Date and Time of Occurrence: 14 October 2024 at approximately 20:00 Hours (8:00 PM).
Place of Occurrence: Adjacent to Anna Nagar Roundtana, opposite Saravana Bhavan junction, Chennai.

[Paragraph 3]
Brief Statement of Occurrence:
The complainant states that on 14-10-2024 at 8:00 PM, while he was parking his two-wheeler, the accused Ramesh approached him in an aggressive manner wearing a dark blue shirt and initiated an altercation. Without warning or provocation, the accused allegedly brandished a blunt iron rod measuring approx 2 feet in length and struck the complainant on his left shoulder and forearm.

[Paragraph 4]
Offences Registered:
Sections 115(2) (Voluntarily causing hurt) and 118(1) (Voluntarily causing hurt by dangerous weapons) of Bharatiya Nyaya Sanhita (BNS), 2023 [Corresponding to IPC Sections 323 & 324].

[Paragraph 5]
Procedural Actions:
Complainant sent to Kilpauk Medical College for urgent examination. Weapon (iron rod) recovered under Seizure Memo without independent panch witnesses. Notice of appearance under Section 35(3) BNSS / 41A CrPC has NOT been served on the accused.`
      },
      {
        id: "doc-witness",
        name: "Document B: Key Witness Statement (Karthik S)",
        category: "Deposition / Section 180 BNSS",
        date: "15 October 2024",
        signatory: "Recorded by SI K. Murugan",
        pages: 2,
        content: `STATEMENT OF EYEWITNESS (Under Section 180 BNSS / Sec 161 CrPC)
Witness: Karthik S, aged 35 years, Proprietor of Shri Lakshmi Tea Stall, Anna Nagar Roundtana.

[Paragraph 1]
I have been running my tea shop opposite Saravana Bhavan for the past 9 years. On the night of 14 October 2024, I was present behind the cash counter attending to night customers.

[Paragraph 2]
Timeline of Incident:
The incident occurred strictly at 21:15 Hours (9:15 PM), right after the post-dinner tea rush had commenced. I specifically checked my wall clock when the commotion began outside.

[Paragraph 3]
Description of Accused & Confrontation:
A man whom I now identify as Ramesh arrived on a scooter. He was wearing a black leather jacket and jeans. The complainant Vignesh was already arguing loudly with another motorist. When Ramesh told him not to block the lane, Vignesh verbally abused Ramesh and pushed him backwards first.

[Paragraph 4]
Weapon and Injury:
Ramesh picked up a discarded construction steel rod lying near the roadside drain to defend himself after Vignesh attempted to assault him with a motorcycle helmet. Ramesh struck Vignesh once defensively on the arm.

[Paragraph 5]
Departure:
After the strike, Ramesh did not flee in panic; he stayed until neighbors separated them at approximately 9:25 PM before riding away.`
      },
      {
        id: "doc-medical",
        name: "Document C: Kilpauk Hospital Medical Wound Certificate",
        category: "Medical Forensics",
        date: "14 October 2024",
        signatory: "Dr. Ananya Roy, MD (Emergency Medicine), Reg No: 88412",
        pages: 1,
        content: `ACCIDENT REGISTER & INJURY CERTIFICATE
Kilpauk Medical College Hospital, Chennai | Casualty OP No: 44921/2024
Time of Arrival at Casualty: 14 October 2024 at 22:45 Hours (10:45 PM)

[Paragraph 1]
Patient Name: M. Vignesh | Age: 32 | Brought by: Self and Constable Arumugam (PC 1044).
History stated: Alleged assault by known person near Anna Nagar at about 8:00 to 9:00 PM with an iron rod.

[Paragraph 2]
Clinical Findings:
1. Contusion with swelling measuring 6 cm x 3 cm over left forearm. X-ray indicates no bone fracture.
2. Superficial abrasion over left deltoid shoulder region (2 cm x 1 cm).
Nature of Injury: Classified as SIMPLE hurt. No grievous skeletal trauma or internal hemorrhaging observed.

[Paragraph 3]
Toxicology & Substance Screening:
Breathalyzer test and blood alcohol test conducted upon arrival: NEGATIVE for alcohol or illicit narcotics.

[Paragraph 4]
Address of Accused:
Examining medical officer noted: Accused identity or residential address NOT provided in requisition form.`
      },
      {
        id: "doc-cctv",
        name: "Document D: CCTV Traffic Junction Log #TG-881",
        category: "Digital Electronic Evidence",
        date: "16 October 2024",
        signatory: "Traffic Control Room Assistant Engineer, GCC",
        pages: 1,
        content: `GREATER CHENNAI TRAFFIC POLICE - CCTV SURVEILLANCE LOG
Camera ID: AN-RT-04 (Anna Nagar Roundtana South-East Feed) | Date: 14-Oct-2024

[Paragraph 1]
20:05:12 Hrs - Traffic flow normal. Complainant's black motorcycle seen parked near pavement.
20:08:44 Hrs - Physical altercation visible between two male subjects in front of tea stall. One individual falls toward motorcycle.
20:12:00 Hrs - Nearby shopkeepers gather. Altercation dissipates.
20:18:30 Hrs - Patrol vehicle PCR-14 arrives at the spot.

[Paragraph 2]
Timestamp Note:
The footage directly records the dispute occurring at 20:08 Hrs (8:08 PM). The time stamp is calibrated against Indian Standard Time (IST) GPS satellite clock.`
      }
    ],
    knownContradictions: [
      {
        id: "contra-1",
        title: "Incident Timing Discrepancy",
        severity: "CRITICAL",
        category: "Timeline of Crime",
        itemA: {
          doc: "Document A (FIR #412)",
          page: "Pg 1, Para 2",
          text: "Incident occurred at approximately 20:00 Hours (8:00 PM). Corroborated by CCTV log at 20:08 PM."
        },
        itemB: {
          doc: "Document B (Witness Statement)",
          page: "Pg 1, Para 2",
          text: "Incident occurred strictly at 21:15 Hours (9:15 PM), right after dinner rush."
        },
        legalImpact: "75-minute discrepancy between witness deposition and FIR/CCTV. In cross-examination, this shatters eyewitness Karthik's reliability or establishes that Karthik witnessed a completely distinct incident.",
        tanglishExplanation: "Document A FIR-la incident 8:00 PM-ku nadandhuchu nu solludhu. Aana Document B Witness 9:15 PM-nu solraaru. Rendu docs-la 1 hour 15 mins difference irukku! AI idhai highlight panni lawyer-ku cross-examination points kudukkum."
      },
      {
        id: "contra-2",
        title: "First Aggressor & Provocation Dispute",
        severity: "HIGH",
        category: "Self-Defense / Section 34 BNS",
        itemA: {
          doc: "Document A (FIR #412)",
          page: "Pg 1, Para 3",
          text: "Accused Ramesh approached aggressively and struck complainant without warning or provocation."
        },
        itemB: {
          doc: "Document B (Witness Statement)",
          page: "Pg 1, Para 3-4",
          text: "Complainant Vignesh verbally abused Ramesh, pushed him first, and attempted to strike with a helmet; accused acted in self-defense."
        },
        legalImpact: "Direct contradiction on genesis of altercation. Crucial ground for Bail Application and plea of Private Defense under Section 34 Bharatiya Nyaya Sanhita.",
        tanglishExplanation: "FIR-la accused unprovoked assault panninaar nu solludhu. Aana witness Vignesh dhaan modhalla thalli helmet-oda attack panna vandhaar, Ramesh self-defense-la dhaan thaduthaar nu solraaru."
      },
      {
        id: "contra-3",
        title: "Perpetrator Attire Description",
        severity: "MODERATE",
        category: "Identification of Accused",
        itemA: {
          doc: "Document A (FIR #412)",
          page: "Pg 1, Para 3",
          text: "Accused was wearing a dark blue shirt."
        },
        itemB: {
          doc: "Document B (Witness Statement)",
          page: "Pg 1, Para 3",
          text: "Accused was wearing a black leather jacket and jeans."
        },
        legalImpact: "Discrepancy in apparel creates reasonable doubt regarding spot identification without Test Identification Parade (TIP).",
        tanglishExplanation: "FIR-la dark blue shirt nu irukku; Witness black leather jacket nu solraaru. Identity-la contradiction irukku."
      }
    ],
    missingFacts: [
      {
        id: "miss-1",
        field: "Permanent Residential Address of Accused",
        status: "MISSING",
        risk: "HIGH",
        detail: "Accused Ramesh's permanent domicile is explicitly noted as 'NOT ASCERTAINED / NOT RECORDED' in Document A and missing in Document C.",
        legalWarning: "Mandatory requirement for Bail Surety Bond and Memo of Address. The AI will REFUSE to hallucinate or guess a fake address and flags manual court verification.",
        tanglishExplanation: "Case file-la accused-oda permanent address illa. Normal AI oru address guess pannidum, aana nam AI 'Information Missing' nu flag panni halt pannum."
      },
      {
        id: "miss-2",
        field: "Section 35(3) BNSS / 41A CrPC Notice Compliance",
        status: "MISSING",
        risk: "CRITICAL",
        detail: "Since offences carry punishment under 7 years, mandatory notice of appearance prior to arrest is absent in case records.",
        legalWarning: "Ground for immediate bail citing Supreme Court ruling in Arnesh Kumar v. State of Bihar & Satender Kumar Antil.",
        tanglishExplanation: "7 years-ku kuraivaana punishment offences-ku police notice kuduthangala nu proof illa. Idhu bail application-la strong ground!"
      },
      {
        id: "miss-3",
        field: "Independent Panch Witnesses for Seizure",
        status: "MISSING",
        risk: "MODERATE",
        detail: "The iron rod weapon recovery memo lacks independent public attesting witnesses (solely police personnel).",
        legalWarning: "Violates procedural mandate under Section 105 BNSS / 100 CrPC.",
        tanglishExplanation: "Weapon seize pannumpothu public witnesses sign pannala. Procedural violation."
      }
    ]
  },
  {
    id: "case-contract-02",
    title: "Apex Horizon Realty v. Nexus Infra Tech (Contract Breach)",
    type: "Commercial Law / Contractual Dispute & Arbitration",
    jurisdiction: "Commercial Court, High Court of Madras",
    summary: "Commercial development agreement dispute where the respondent sent a termination notice alleging an expired date and claiming ₹25,00,000, contradicting the master agreement expiry of 31 Dec 2026 and escrow ledger of ₹15,00,000.",
    documents: [
      {
        id: "doc-agreement",
        name: "Document A: Master Development Agreement 2023",
        category: "Commercial Contract",
        date: "12 January 2023",
        signatory: "Apex Horizon Realty & Nexus Infra Tech Ltd",
        pages: 3,
        content: `MASTER COMMERCIAL DEVELOPMENT & INFRASTRUCTURE AGREEMENT
Executed at Chennai on 12 January 2023.

[Clause 1: Parties]
Between M/s Apex Horizon Realty LLP (Developer) and M/s Nexus Infra Tech Limited (Contractor).

[Clause 3.2: Term and Expiration Date]
"This Agreement shall commence on the Execution Date and shall remain valid, enforceable and binding until 31 December 2026, unless earlier terminated in accordance with the express provisions of Clause 11."

[Clause 4.1: Initial Advance & Consideration]
"The Developer has transferred a non-refundable mobilisation advance of INR 15,00,000 (Rupees Fifteen Lakhs only) directly into the Contractor's dedicated project account via RTGS transfer."

[Clause 11.2: Mandatory Cure Notice]
"Neither party shall initiate termination without first serving a written 30-day Cure Notice detailing specific uncured defaults."

[Clause 14: Governing Law and Dispute Jurisdiction]
"This Agreement shall be governed by the laws of India. Any arbitration or court proceedings shall be exclusively submitted to the jurisdiction of the competent courts in Chennai, Tamil Nadu."`
      },
      {
        id: "doc-notice",
        name: "Document B: Termination Notice & Monetary Claim",
        category: "Legal Notice",
        date: "24 September 2024",
        signatory: "Advocate K. R. Sundaresan (Counsel for Apex Horizon)",
        pages: 2,
        content: `LEGAL NOTICE FOR FORFEITURE & TERMINATION
Date: 24 September 2024 | Sent to: Nexus Infra Tech Ltd, OMR, Chennai.

[Paragraph 1]
Under instructions from our client M/s Apex Horizon Realty, we hereby notify you that the Master Contract entered between parties lapsed and expired on 30 June 2024 due to failure of milestone delivery.

[Paragraph 2]
Our client hereby demands immediate refund of the advance sum of INR 25,00,000 (Rupees Twenty-Five Lakhs only) along with 18% penal interest within 15 days of this notice.

[Paragraph 3]
Failing compliance, our client shall initiate urgent commercial litigation before the Commercial Court in Bengaluru, Karnataka.`
      },
      {
        id: "doc-escrow",
        name: "Document C: Bank Escrow Account Statement",
        category: "Financial Record",
        date: "15 January 2023",
        signatory: "HDFC Bank, Anna Salai Corporate Branch",
        pages: 1,
        content: `ESCROW TRANSACTION RECEIPT & LEDGER
Account: Apex Horizon Escrow A/c #5020008819231 | Beneficiary: Nexus Infra Tech Ltd.

[Transaction Record]
Date: 15-Jan-2023 | UTR: HDFCR52023011500291
Amount: INR 15,00,000.00 (Fifteen Lakhs Only)
Narration: Mobilisation Advance as per Master Agreement Clause 4.1.
Total debits to beneficiary in financial year 2022-23: INR 15,00,000.00. No further disbursement recorded.`
      }
    ],
    knownContradictions: [
      {
        id: "contra-contract-1",
        title: "Contract Expiration Date Discrepancy",
        severity: "CRITICAL",
        category: "Term Validity",
        itemA: {
          doc: "Document A (Master Agreement)",
          page: "Pg 1, Clause 3.2",
          text: "Contract remains valid, enforceable and binding until 31 December 2026."
        },
        itemB: {
          doc: "Document B (Termination Notice)",
          page: "Pg 1, Para 1",
          text: "Alleges contract lapsed and expired on 30 June 2024."
        },
        legalImpact: "The termination notice is prima facie wrongful and bad in law; agreement subsists until 31 Dec 2026.",
        tanglishExplanation: "Agreement Clause 3.2-la expiry date '31 December 2026' nu irukku. Aana Notice-la '30 June 2024-la expire aaiduchu' nu thappa claim pannirukaanga. AI idhai clear-ah spot pannum."
      },
      {
        id: "contra-contract-2",
        title: "Disputed Advance Sum: ₹15L vs ₹25L",
        severity: "CRITICAL",
        category: "Monetary Claim",
        itemA: {
          doc: "Document A & C (Agreement & Bank Escrow)",
          page: "Clause 4.1 & Bank UTR",
          text: "Non-refundable mobilisation advance of INR 15,00,000 verified by HDFC bank ledger."
        },
        itemB: {
          doc: "Document B (Termination Notice)",
          page: "Pg 1, Para 2",
          text: "Demands refund of INR 25,00,000 (an uncorroborated inflation of ₹10,00,000)."
        },
        legalImpact: "Financial claim in legal notice is inflated by ₹10,00,000 without evidentiary basis in contract or bank statement.",
        tanglishExplanation: "Agreement-layum Bank ledger-layum ₹15,00,000 dhaan advance nu irukku. Aana Notice-la ₹25,00,000 demand pandraanga. ₹10 Lakhs unsupported claim!"
      }
    ],
    missingFacts: [
      {
        id: "miss-c1",
        field: "Mandatory 30-Day Cure Notice",
        status: "MISSING",
        risk: "CRITICAL",
        detail: "Document A Clause 11.2 requires a prerequisite 30-day Cure Notice. Document B fails to reference any prior cure letter.",
        legalWarning: "Breach of contractual dispute resolution mechanism renders termination void ab initio.",
        tanglishExplanation: "Agreement padi 30-days cure notice anupirukanum. Case file-la andha notice anupunadhukku endha proof-um illa."
      }
    ]
  }
];

export const MOCK_RAG_DATABASE = {
  // Common pre-indexed prompt responses for lightning fast, exact, verifiable demonstrations
  "case-criminal-01": [
    {
      query: "According to the uploaded agreement or documents, when does the incident occur?",
      groundedAnswer: "According to the uploaded documents, there is a direct temporal contradiction regarding when the incident occurred:\n\n1. **Document A (Police FIR #412/2024, Pg 1, Para 2)** records the incident occurred on **14 October 2024 at approximately 20:00 Hours (8:00 PM)** adjacent to Anna Nagar Roundtana. This timing is corroborated by **Document D (CCTV Traffic Log #TG-881, Para 1)** which shows the altercation initiating at **20:08:44 Hours (8:08 PM)**.\n\n2. Conversely, **Document B (Key Witness Statement of Karthik S, Pg 1, Para 2)** explicitly states that the incident occurred at **21:15 Hours (9:15 PM)** after the dinner tea rush.\n\n*Agentic Directive:* The AI will not pick or fabricate a single conclusive time; this 75-minute discrepancy is flagged as a material contradiction for cross-examination.",
      citations: [
        { docId: "doc-fir", docName: "Document A (FIR #412)", page: 1, para: 2, quote: "Date and Time of Occurrence: 14 October 2024 at approximately 20:00 Hours (8:00 PM)." },
        { docId: "doc-witness", docName: "Document B (Witness Karthik)", page: 1, para: 2, quote: "The incident occurred strictly at 21:15 Hours (9:15 PM), right after the post-dinner tea rush had commenced." },
        { docId: "doc-cctv", docName: "Document D (CCTV Log)", page: 1, para: 1, quote: "20:08:44 Hrs - Physical altercation visible between two male subjects in front of tea stall." }
      ],
      claims: [
        { claim: "Police FIR reports incident occurred at 8:00 PM on 14-Oct-2024", status: "SUPPORTED", citation: "Doc A: Para 2" },
        { claim: "CCTV Traffic Log records altercation at 20:08:44 (8:08 PM)", status: "SUPPORTED", citation: "Doc D: Para 1" },
        { claim: "Eyewitness Karthik S deposes that incident occurred at 9:15 PM", status: "SUPPORTED", citation: "Doc B: Para 2" },
        { claim: "75-minute contradiction exists between FIR/CCTV and eyewitness", status: "CONFLICTING", citation: "Doc A vs Doc B" }
      ],
      tanglishExplanation: "Police FIR 8:00 PM nu solludhu, CCTV 8:08 PM nu kaatudhu, aana witness 9:15 PM nu solraaru. AI oru time-a assume pannala, rendu contradictory sources-ayum citation-oda report pannudhu."
    },
    {
      query: "What is the permanent residential address of the accused Ramesh?",
      groundedAnswer: "⚠️ **EVIDENTIARY REFUSAL / MISSING FACT FLAG**:\n\nThe permanent residential address of accused Ramesh **could not be verified from the provided case documents**.\n\n- In **Document A (Police FIR #412/2024, Pg 1, Para 1)**, the accused's permanent address is explicitly marked as: *'Permanent residence address: NOT ASCERTAINED / NOT RECORDED IN RECORD.'*\n- In **Document C (Kilpauk Hospital Medical Wound Certificate, Pg 1, Para 4)**, the doctor notes: *'Accused identity or residential address NOT provided in requisition form.'*\n\n*Agentic Guardrail:* Standard LLMs frequently hallucinate plausible fictional street names (e.g., 'No 45, Anna Nagar 2nd Street'). NyayaMitra strictly enforces zero hallucination and halts drafting until verified address proofs (Aadhaar / Voter ID) are furnished by counsel.",
      citations: [
        { docId: "doc-fir", docName: "Document A (FIR #412)", page: 1, para: 1, quote: "Permanent residence address: NOT ASCERTAINED / NOT RECORDED IN RECORD." },
        { docId: "doc-medical", docName: "Document C (Medical Certificate)", page: 1, para: 4, quote: "Accused identity or residential address NOT provided in requisition form." }
      ],
      claims: [
        { claim: "Accused permanent residence is not recorded in FIR #412/2024", status: "SUPPORTED", citation: "Doc A: Para 1" },
        { claim: "Medical examination record does not contain accused address", status: "SUPPORTED", citation: "Doc C: Para 4" },
        { claim: "Permanent address cannot be established from provided records", status: "UNSUPPORTED", citation: "None - Flagged as Missing" }
      ],
      tanglishExplanation: "Case file-la accused Ramesh-oda address illave illa! Normal AI oru poi address guess panni ezhudhura risk irukku. Namma AI 'Information Missing' nu flag panni lawyer-ku alert kudukkum."
    },
    {
      query: "What offences are registered and what weapon was allegedly seized?",
      groundedAnswer: "According to **Document A (FIR #412/2024, Pg 1, Paras 3-4)**:\n\n1. **Registered Offences:**\n   - Section 115(2) BNS, 2023 (Voluntarily causing hurt) [equiv. to IPC 323]\n   - Section 118(1) BNS, 2023 (Voluntarily causing hurt by dangerous weapons) [equiv. to IPC 324]\n\n2. **Alleged Weapon:**\n   - Complainant alleges an **iron rod measuring approximately 2 feet in length** (Doc A, Para 3).\n   - Eyewitness Karthik S specifies it was a **'discarded construction steel rod lying near the roadside drain'** picked up during the altercation (Doc B, Para 4).\n\n3. **Evidentiary Note:**\n   - In **Document A (Para 5)**, the seizure was conducted without independent public panch witnesses, which creates a procedural vulnerability under Section 105 BNSS.",
      citations: [
        { docId: "doc-fir", docName: "Document A (FIR #412)", page: 1, para: 3, quote: "blunt iron rod measuring approx 2 feet in length" },
        { docId: "doc-fir", docName: "Document A (FIR #412)", page: 1, para: 4, quote: "Sections 115(2) and 118(1) of Bharatiya Nyaya Sanhita (BNS), 2023" },
        { docId: "doc-witness", docName: "Document B (Witness Karthik)", page: 1, para: 4, quote: "discarded construction steel rod lying near the roadside drain" }
      ],
      claims: [
        { claim: "FIR registers Sections 115(2) and 118(1) BNS 2023", status: "SUPPORTED", citation: "Doc A: Para 4" },
        { claim: "Weapon described as 2-foot blunt iron rod", status: "SUPPORTED", citation: "Doc A: Para 3" },
        { claim: "Seizure memo conducted without independent panch witnesses", status: "SUPPORTED", citation: "Doc A: Para 5" }
      ],
      tanglishExplanation: "BNS 115(2) and 118(1) sections register pannirukaanga. 2 feet iron rod use pannadha FIR solludhu. Aana public witness illama seize pannirukaanga nu AI report pannudhu."
    }
  ],
  "case-contract-02": [
    {
      query: "According to the uploaded agreement, when does the contract expire?",
      groundedAnswer: "According to **Document A (Master Commercial Development Agreement 2023, Pg 1, Clause 3.2)**:\n\n> *\"This Agreement shall commence on the Execution Date and shall remain valid, enforceable and binding until 31 December 2026, unless earlier terminated in accordance with the express provisions of Clause 11.\"*\n\nTherefore, the verified contract expiration date is **31 December 2026**.\n\n⚠️ **CONTRADICTION DETECTED WITH DOCUMENT B**:\nIn **Document B (Termination Notice, Pg 1, Para 1)**, the claimant's counsel asserts that the contract lapsed on **30 June 2024**. This assertion directly conflicts with the binding terms of Clause 3.2, as no prior 30-day Cure Notice (required by Clause 11.2) was served.",
      citations: [
        { docId: "doc-agreement", docName: "Document A (Master Agreement)", page: 1, para: 2, quote: "remain valid, enforceable and binding until 31 December 2026" },
        { docId: "doc-notice", docName: "Document B (Termination Notice)", page: 1, para: 1, quote: "contract entered between parties lapsed and expired on 30 June 2024" }
      ],
      claims: [
        { claim: "Master Agreement Clause 3.2 states contract expiry is 31 December 2026", status: "SUPPORTED", citation: "Doc A: Clause 3.2" },
        { claim: "Termination Notice claims contract expired prematurely on 30 June 2024", status: "SUPPORTED", citation: "Doc B: Para 1" },
        { claim: "Termination Notice claim directly contradicts Master Agreement term", status: "CONFLICTING", citation: "Doc A vs Doc B" }
      ],
      tanglishExplanation: "Agreement Clause 3.2 padi contract expiry date 31 December 2026 dhaan. Aana Notice-la 30 June 2024 nu thappa sollirukaanga. AI citation-oda verify panni prove pannudhu."
    },
    {
      query: "What advance amount was paid and does it match the legal notice claim?",
      groundedAnswer: "There is an uncorroborated **INR 10,00,000 discrepancy** between the agreement records and the legal notice:\n\n1. **Verified Agreement & Bank Records:**\n   - **Document A (Clause 4.1, Pg 1)** specifies a mobilisation advance of **INR 15,00,000 (Rupees Fifteen Lakhs)** paid via RTGS.\n   - **Document C (Bank Escrow Statement, Pg 1)** confirms a single transfer of **INR 15,00,000.00** on 15-Jan-2023 under UTR #HDFCR52023011500291, noting no further disbursements.\n\n2. **Unverified Claimant Demand:**\n   - **Document B (Legal Notice, Pg 1, Para 2)** demands repayment of **INR 25,00,000 (Rupees Twenty-Five Lakhs)**.\n\n*Agentic Audit:* The claim of ₹25,00,000 is **UNSUPPORTED** by the escrow ledger and is a material factual inflation.",
      citations: [
        { docId: "doc-agreement", docName: "Document A (Master Agreement)", page: 1, para: 3, quote: "advance of INR 15,00,000 (Rupees Fifteen Lakhs only) directly into the Contractor's dedicated project account" },
        { docId: "doc-escrow", docName: "Document C (Bank Ledger)", page: 1, para: 1, quote: "Amount: INR 15,00,000.00 (Fifteen Lakhs Only) | UTR: HDFCR52023011500291" },
        { docId: "doc-notice", docName: "Document B (Termination Notice)", page: 1, para: 2, quote: "refund of the advance sum of INR 25,00,000 (Rupees Twenty-Five Lakhs only)" }
      ],
      claims: [
        { claim: "Master Agreement Clause 4.1 records advance of ₹15,00,000", status: "SUPPORTED", citation: "Doc A: Clause 4.1" },
        { claim: "Bank Escrow record confirms transfer of ₹15,00,000 on 15-Jan-2023", status: "SUPPORTED", citation: "Doc C: Pg 1" },
        { claim: "Legal Notice demands ₹25,00,000 refund with interest", status: "SUPPORTED", citation: "Doc B: Para 2" },
        { claim: "Claim for additional ₹10,00,000 is unsupported by documentary records", status: "UNSUPPORTED", citation: "Missing in bank statement" }
      ],
      tanglishExplanation: "Agreement and Bank statement-la ₹15,00,000 dhaan advance nu irukku. Aana Notice-la ₹25,00,000 ketrukaanga. AI idhai unverified claim nu highlight pannudhu."
    }
  ]
};
