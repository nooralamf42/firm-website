import { COMPANY_NAME, DBA_NAME } from "@/lib/constants";

export type Article = {
  slug: string;
  category: string;
  title: string;
  author: string;
  date: string;
  excerpt: string;
  content: string;
};

export const categoryColors: Record<string, string> = {
  Tax: "bg-blue-100 text-blue-800",
  Audit: "bg-purple-100 text-purple-800",
  ESG: "bg-green-100 text-green-800",
  "M&A": "bg-amber-100 text-amber-800",
  Risk: "bg-red-100 text-red-800",
  Regulatory: "bg-orange-100 text-orange-800",
  Finance: "bg-teal-100 text-teal-800",
};

export const categoryGradients: Record<string, string> = {
  Tax: "from-blue-900 to-blue-700",
  Audit: "from-purple-900 to-purple-700",
  ESG: "from-green-900 to-green-700",
  "M&A": "from-amber-900 to-amber-700",
  Risk: "from-red-900 to-red-700",
  Regulatory: "from-orange-900 to-orange-700",
  Finance: "from-teal-900 to-teal-700",
};

export const articles: Article[] = [
  {
    slug: "oecd-pillar-two-final-implementation-guidance",
    category: "Tax",
    title: "OECD Pillar Two: Final Implementation Guidance",
    author: "Marcus Webb",
    date: "March 15, 2026",
    excerpt:
      `The OECD's final administrative guidance resolves several contested interpretive questions under the Global Anti-Base Erosion rules, including the treatment of deferred tax assets and the scope of the Undertaxed Profits Rule. Marcus Webb, Partner in ${COMPANY_NAME}'s International Tax practice, provides a detailed technical walkthrough for compliance and planning teams.`,
    content: `The OECD released its consolidated administrative guidance on the Global Anti-Base Erosion (GloBE) rules in early 2026, addressing several contested interpretive questions that had created uncertainty for multinational groups attempting to implement compliant systems. The guidance clarifies the treatment of deferred tax assets arising from carry-forward losses under the GloBE computation, confirming that such assets are recoverable only to the extent they are expected to reverse within five years — a position that will materially affect the effective tax rate calculations of groups with historical loss positions in low-tax jurisdictions.

The Undertaxed Profits Rule (UTPR) allocation mechanism has been further refined, with the final guidance introducing a safe harbour for groups whose constituent entities in a jurisdiction have a combined GloBE ETR above 20% on a three-year average basis. This administrative simplification significantly reduces the compliance burden for groups operating in stable, moderate-tax environments, and will allow many multinationals to exclude entire jurisdictions from detailed GloBE calculations during the transitional period through 2026. Groups should model whether their jurisdictions qualify before investing in full data infrastructure.

From a planning perspective, the guidance's treatment of substance-based income exclusions warrants careful review. The payroll and tangible asset carve-outs have been recalibrated with updated phase-down percentages, reducing the exclusion to 7.8% of payroll costs and 5.0% of net book value of tangible assets from fiscal year 2026 onwards. Groups that have structured operations to maximise substance exclusions should remodel their GloBE ETR projections to reflect these reductions and assess whether existing low-tax jurisdictions retain their incentive economics once the recalibrated carve-outs are applied.

Compliance teams should also note the updated GloBE Information Return filing timeline. The final guidance confirms that returns for fiscal year 2025 must be filed by 31 March 2026 in designated filing jurisdictions, with a 15-month transition extension available for first-year filers. ${COMPANY_NAME}'s Global Tax Practice is advising clients to begin data collection and system readiness assessments immediately, given the complexity of sourcing jurisdiction-level financial data from ERP systems not originally designed for GloBE reporting. Early engagement with technology vendors and internal finance teams is critical to meeting these deadlines.`,
  },
  {
    slug: "ai-in-external-audit-opportunity-or-threat",
    category: "Audit",
    title: "AI in External Audit: Opportunity or Threat?",
    author: "Dr. Sarah Chen",
    date: "February 28, 2026",
    excerpt:
      "Large language models are reshaping the audit engagement lifecycle — from automated control testing to real-time anomaly detection across transaction populations. Dr. Sarah Chen assesses the regulatory expectations emerging from the PCAOB and IAASB regarding AI use in attest engagements and what audit committees need to ask their auditors.",
    content: `Large language models and machine learning algorithms are no longer pilot projects inside major audit firms — they are being deployed in live engagements for tasks ranging from automated journal entry testing to natural language review of contracts and Board minutes. The speed gains are substantial: what formerly required a team of seniors three weeks of sampling can now be completed across an entire transaction population in hours. However, the shift from sampling to full-population testing introduces its own interpretive challenges, and the audit profession has not yet established consensus on how AI-assisted procedures satisfy the evidence requirements of AS 1105 or ISA 500.

The PCAOB's December 2025 staff guidance on the use of technology-assisted analysis in attest engagements represents the most substantive regulatory intervention to date. The guidance confirms that auditors remain responsible for the design, execution, and evaluation of technology-assisted procedures and cannot delegate professional scepticism to an algorithm. Crucially, it requires auditors to understand the inputs, logic, and limitations of AI tools used in the engagement at a level sufficient to evaluate the reliability of their outputs — a standard that many firms are struggling to operationalise given the opacity of large language model reasoning.

Audit committees occupy a critical oversight position in this transition. They should be asking their audit firms directly: which AI tools were used in the current engagement, what validation testing has been performed on those tools, and how errors or hallucinations in AI output are detected and corrected before conclusions are drawn. Firms that cannot answer these questions with specificity are not yet operating to the standard that the PCAOB expects, and audit committee members should treat that uncertainty as a quality risk.

From a broader competitive perspective, AI adoption in audit is accelerating the consolidation of market share toward larger firms with the capital to invest in proprietary AI infrastructure. Mid-sized firms face a difficult choice: invest heavily in technology partnerships or risk falling behind on both quality and efficiency. ${COMPANY_NAME}'s Audit Quality team works with firms at all points of this transition, helping design AI governance frameworks that satisfy regulatory expectations while realising the genuine efficiency gains that make adoption worthwhile.`,
  },
  {
    slug: "esg-assurance-preparing-for-issb-standards",
    category: "ESG",
    title: "ESG Assurance: Preparing for ISSB Standards",
    author: "Priya Nair",
    date: "February 10, 2026",
    excerpt:
      "As IFRS S1 and S2 adoption accelerates globally, organisations face a critical window to build the data infrastructure, internal controls, and governance processes needed to support credible assurance. Priya Nair outlines a practical readiness roadmap, from materiality assessments to aligning disclosure systems with assurance provider expectations.",
    content: `The International Sustainability Standards Board's IFRS S1 and S2 standards are now mandatory for reporting periods beginning on or after 1 January 2025 in over 30 jurisdictions, with the European Union's CSRD and the SEC's parallel climate disclosure rules creating a complex multi-jurisdictional compliance landscape for globally listed companies. The convergence of these frameworks around a common core of climate-related financial disclosures is welcome, but the path to compliant, assured disclosure is longer than many boards have anticipated. Most organisations underestimate the data infrastructure investment required to produce disclosure-quality information on Scope 1, 2, and value-chain Scope 3 emissions.

The distinction between limited assurance and reasonable assurance is particularly important to understand at this stage of the cycle. Limited assurance — the standard that applies to most ISSB-aligned disclosures in the near term — requires procedures that are substantially less extensive than a full audit, but the bar for data quality and internal controls is higher than most sustainability teams currently meet. Assurance providers are requesting detailed evidence of data collection methodologies, calculation models, and management review processes. Companies that have relied on spreadsheet-based sustainability reporting will need to upgrade to systems with audit trails before they can obtain credible assurance.

The materiality assessment process under IFRS S1 deserves particular attention. The standard requires entity-specific identification of sustainability-related risks and opportunities that could reasonably be expected to affect cash flows, access to finance, or cost of capital over the short, medium, and long term. This is a more demanding standard than the double materiality concept in CSRD, and organisations that have conducted materiality assessments under the European framework will need to reconsider their conclusions through the lens of financial materiality. ${COMPANY_NAME}'s ESG Advisory team has developed a structured process for conducting ISSB-aligned materiality assessments that can be integrated with existing enterprise risk management frameworks.

Looking ahead to 2027, the trajectory is toward mandatory reasonable assurance for climate-related disclosures in leading jurisdictions. Organisations that invest now in the data systems, internal controls, and governance structures needed to support limited assurance will be well positioned to meet that higher standard without a disruptive remediation programme. The readiness roadmap ${COMPANY_NAME}'s recommendations involves four phases: baseline data assessment, systems and process upgrade, internal control design, and assurance readiness review — typically requiring 12 to 18 months for organisations without existing sustainability reporting infrastructure.`,
  },
  {
    slug: "ma-market-outlook-mid-market-activity-surges",
    category: "M&A",
    title: "M&A Market Outlook: Mid-Market Activity Surges",
    author: "Robert Castellano",
    date: "January 22, 2026",
    excerpt:
      "${COMPANY_NAME}'s Financial Advisory team tracked a significant shift in deal flow composition during 2025, with mid-market transactions — defined as enterprise values between $50M and $500M — outperforming the broader market. Robert Castellano examines the sectors driving this surge, the role of earnouts in bridging valuation gaps, and buyer due diligence trends.",
    content: `The headline M&A statistics for 2025 masked a striking divergence between deal segments. While total announced deal value declined approximately 12% year-over-year as mega-deals remained scarce — constrained by elevated financing costs and antitrust scrutiny — the mid-market segment (enterprise values of $50M to $500M) saw volume increase by 18%, driven by technology sector consolidation, healthcare services roll-ups, and private equity portfolio optimisation. This bifurcation reflects structural differences in how deals at different size points are financed and approved, and it has important implications for sellers and buyers planning transactions in 2026.

The valuation gap between seller expectations and buyer willingness to pay remains the primary deal impediment in most negotiations, and earnout structures have become the dominant mechanism for bridging it. In ${COMPANY_NAME}'s deal activity during 2025, earnout provisions were included in approximately 62% of transactions — up from 44% in 2023. The design of these provisions has become increasingly sophisticated, with buyers structuring performance milestones around EBITDA targets, revenue run-rates, customer retention metrics, and in technology deals, product development milestones. Sellers should enter negotiations with a clear understanding of the post-close integration conditions under which milestones will be measured, as disputes over earnout calculations have become the most common source of post-closing litigation.

Due diligence patterns have evolved significantly in the current environment. Buyers are conducting more extensive quality-of-earnings analyses — particularly focused on normalisation adjustments, recurring revenue classification, and the sustainability of margins achieved during periods of supply chain disruption. Cybersecurity due diligence has moved from a checkbox exercise to a substantive workstream that in some cases takes longer than financial due diligence. And in industries with significant ESG exposure, acquirers are conducting pre-close climate risk assessments to identify potential stranded asset risks before they are embedded in the acquisition price.

Looking ahead to the second half of 2026, the conditions for a mid-market M&A recovery are broadly in place. Interest rate stabilisation has improved leveraged buyout economics, strategic acquirers have rebuilt balance sheet capacity, and private equity sponsors are facing mounting pressure to realise returns from ageing portfolio investments. ${COMPANY_NAME} expects deal flow to increase approximately 20-25% in the mid-market segment relative to 2025 levels, with business services, industrial technology, and specialty healthcare services as the most active sectors.`,
  },
  {
    slug: "cybersecurity-risk-in-an-ai-driven-world",
    category: "Risk",
    title: "Cybersecurity Risk in an AI-Driven World",
    author: "Priya Nair",
    date: "January 8, 2026",
    excerpt:
      "The integration of AI into enterprise operations introduces a new class of systemic vulnerabilities that traditional IT risk frameworks were not designed to capture. This article addresses model inversion attacks, prompt injection in enterprise AI assistants, and the board-level governance structures that align with emerging NIST AI RMF expectations.",
    content: `Enterprise adoption of generative AI has accelerated faster than the governance frameworks designed to manage the associated risks. As of late 2025, over 70% of Fortune 500 companies have deployed at least one generative AI system in an operational context — processing contracts, generating financial analysis, or assisting customer-facing staff. Each of these deployments creates new attack surfaces that traditional IT risk frameworks built around perimeter defence, access controls, and patch management are ill-equipped to address. The threat landscape has shifted fundamentally, and risk functions need to adapt their assessment methodologies accordingly.

Prompt injection attacks — in which malicious instructions are embedded in content processed by an enterprise AI system, causing it to execute unintended actions — represent one of the most acute near-term risks. Unlike traditional SQL injection, which targets a specific technical interface, prompt injection can be delivered through virtually any document or data input that an AI system is asked to process. A procurement AI asked to summarise a supplier contract could be manipulated by text embedded in the contract itself; a financial analysis tool could be subverted by formatting in a spreadsheet it is asked to review. Defending against prompt injection requires a combination of input sanitisation, output monitoring, and human review of high-stakes AI-assisted decisions — none of which are yet standard practice in most organisations.

Model inversion and membership inference attacks are less immediately operational but represent significant data privacy risks as AI deployment matures. These attacks exploit the statistical properties of trained models to reconstruct elements of the training data — potentially exposing sensitive customer information, proprietary financial data, or confidential employee records that were used to fine-tune internal AI systems. Organisations that have fine-tuned foundation models on proprietary data without implementing differential privacy protections may find that their AI systems inadvertently leak sensitive information to adversaries with sufficient computational resources.

The NIST AI Risk Management Framework, released in updated form in late 2025, provides the most comprehensive publicly available structure for enterprise AI governance. It organises risk management activities around four core functions — Govern, Map, Measure, and Manage — and explicitly addresses the distinct risk profiles of generative versus predictive AI systems. Boards and audit committees should be asking their technology and risk leadership teams for a structured assessment of AI deployments against the NIST AI RMF, and organisations that have not yet conducted such an assessment should treat it as a priority before expanding their AI footprint further.`,
  },
  {
    slug: "sec-climate-disclosure-rules-compliance-roadmap",
    category: "Regulatory",
    title: "SEC Climate Disclosure Rules: A Compliance Roadmap",
    author: "Eleanor Vance",
    date: "December 2025",
    excerpt:
      "Following the SEC's phased implementation schedule, large accelerated filers must begin including climate-related disclosures in their 10-K filings for fiscal years ending on or after December 15, 2025. Eleanor Vance maps the specific disclosure items, financial statement footnote requirements, and attestation standards that apply at each phase.",
    content: `The Securities and Exchange Commission's final climate-related disclosure rules, adopted in March 2024, represent the most significant expansion of mandatory public company disclosure obligations in a generation. After surviving legal challenges that delayed implementation, the rules entered into force for large accelerated filers with fiscal years ending on or after December 15, 2025. The phased implementation schedule — which extends full requirements to accelerated filers in 2026 and non-accelerated filers in 2027 — gives smaller public companies time to build compliance infrastructure, but organisations in the first wave need to treat this as an immediate operational priority rather than a future planning item.

The disclosure framework requires affected companies to report material climate-related risks and their actual and potential impacts on business strategy, results of operations, and financial condition. This is not a checkbox exercise — the SEC expects narrative disclosure that specifically connects identified climate risks to quantifiable financial impacts. Companies that disclose a generic list of climate risks without demonstrating how those risks have been assessed for materiality and integrated into financial projections will face comment letters requesting elaboration. ${COMPANY_NAME}'s recommendations that companies develop a climate risk register that maps each identified risk to a specific financial line item and documents the assessment methodology used to evaluate materiality.

The financial statement footnote requirements represent the most technically demanding element of the rules for most companies. Specifically, if a company has disclosed that transition costs, physical risk losses, or climate-related capital expenditures are material, it must include a footnote in its financial statements quantifying those amounts and explaining the accounting treatment applied. This requires close coordination between the sustainability reporting function and the financial reporting function — a coordination that does not yet exist in many organisations, where sustainability and finance teams operate in separate silos with minimal data exchange.

Attestation requirements under the rules apply to Scope 1 and Scope 2 greenhouse gas emissions disclosures. Large accelerated filers must obtain limited assurance attestation beginning with fiscal year 2026 filings, moving to reasonable assurance for fiscal year 2029. The attestation must be provided by an independent greenhouse gas emissions attestation provider — a category that includes public accounting firms but is not limited to them. Companies should begin the process of selecting and engaging an attestation provider now, as the market for qualified providers is constrained and engagement lead times are increasing as demand rises.`,
  },
  {
    slug: "transfer-pricing-in-the-digital-economy",
    category: "Tax",
    title: "Transfer Pricing in the Digital Economy",
    author: "Marcus Webb",
    date: "December 2025",
    excerpt:
      "The digitalisation of business models continues to strain traditional transfer pricing frameworks built around physical presence and tangible asset ownership. Marcus Webb analyses how the OECD's Amount B simplified approach and the evolving guidance on marketing intangibles are reshaping arm's-length documentation requirements for technology-intensive multinationals.",
    content: `Transfer pricing has always been the most contested area of international tax, but the digitalisation of global business has elevated the tension between the economic reality of value creation and the legal frameworks used to allocate taxing rights. Traditional transfer pricing methodologies — the comparable uncontrolled price, cost-plus, and transactional net margin methods — were designed for economies where value was created through physical assets, manufacturing operations, and face-to-face service delivery. In a world where significant value is generated through software platforms, data assets, and digital distribution networks that can serve global markets from a single jurisdiction, these methodologies produce results that neither tax authorities nor taxpayers find credible.

The OECD's Amount B simplified approach, finalised in early 2024 and incorporated into the Transfer Pricing Guidelines through the Pillar One framework, represents a pragmatic attempt to reduce controversy in the most common type of transfer pricing dispute: the remuneration of baseline marketing and distribution functions. Under Amount B, entities performing routine distribution activities can elect to use a simplified return determination based on industry and geography without conducting a full comparables analysis. While the approach will not resolve disputes in high-value cases, it should meaningfully reduce audit activity in smaller jurisdictions where tax authority capacity to conduct detailed transfer pricing examinations is limited.

Marketing intangibles remain the most contentious category of transfer pricing dispute, particularly in technology and consumer goods industries where brand value and customer relationships are built through local market investment but attributed to intellectual property holding companies in low-tax jurisdictions. Recent OECD guidance has tightened the standard for remunerating routine marketing activities, requiring documentation that demonstrates how the legal owner of marketing intangibles performs substantive development, enhancement, maintenance, protection, and exploitation (DEMPE) functions — not merely holds legal title. Tax authorities in Europe, Australia, and India have been particularly aggressive in challenging arrangements that fail this substance test, and documentation strategies must be updated to reflect this enforcement environment.

From a practical documentation perspective, multinational groups should conduct a top-down review of their intercompany arrangement landscape to identify transfer pricing positions that are vulnerable under the updated OECD standards. Priority should be given to arrangements involving digital services charged to operating entities, royalty payments for marketing intangible licences, and management fee structures that aggregate multiple service categories without granular value attribution. ${COMPANY_NAME}'s International Tax team advises clients to maintain contemporaneous documentation that goes beyond compliance and articulates a coherent economic narrative for each significant intercompany arrangement — documentation that will withstand the increasingly sophisticated challenge capabilities of major tax authorities.`,
  },
  {
    slug: "cash-flow-forecasting-best-practices-2026",
    category: "Finance",
    title: "Cash Flow Forecasting Best Practices for 2026",
    author: "James Okafor",
    date: "November 2025",
    excerpt:
      "Accurate cash flow forecasting remains one of the most impactful finance function capabilities, yet many organisations still rely on static spreadsheet models that cannot respond quickly to operating volatility. James Okafor examines rolling forecast methodologies, integrated business planning platforms, and the KPIs that CFOs should track to assess forecast accuracy.",
    content: `Cash flow forecasting accuracy has never mattered more than it does in the current operating environment, where interest rate volatility, supply chain unpredictability, and geopolitical uncertainty can materially change working capital requirements within a single quarter. Yet surveys consistently find that most organisations — including large, sophisticated ones — are forecasting with a 13-week horizon at best, relying on spreadsheet models built on historical patterns that are increasingly unreliable guides to near-term cash generation. The gap between forecast and actual cash position is widening in many organisations, and that gap is becoming more expensive as the cost of unplanned borrowing rises.

The transition from periodic to rolling cash flow forecasting is the single highest-impact change most finance functions can make to improve accuracy and relevance. A rolling 13-week cash flow forecast, updated weekly and integrated with the accounts receivable, accounts payable, and payroll systems, provides treasury and CFO teams with the real-time visibility needed to optimise working capital deployment. Best-in-class organisations extend this rolling methodology to a 6-quarter horizon, using probabilistic scenario modelling to bound the range of outcomes rather than committing to a single point estimate. This approach acknowledges the inherent uncertainty in multi-quarter projections while providing the planning horizon that capital allocation decisions require.

Integrated Business Planning (IBP) platforms have matured significantly and now provide practical tools for connecting cash flow forecasting to operational planning processes. Platforms such as Anaplan, Workday Adaptive Planning, and Oracle Fusion EPM enable real-time integration between sales forecasts, production plans, procurement commitments, and cash flow projections — creating a single model of the business that eliminates the reconciliation overhead that plagues organisations using separate systems. The critical success factor in IBP implementation is not technology selection but process redesign: organisations must establish clear ownership of each assumption in the model and implement governance processes that ensure assumptions are updated promptly when operational conditions change.

CFOs should track a small number of leading indicators to assess forecast quality and drive improvement over time. Forecast accuracy — measured as the percentage variance between forecast and actual cash position at the 4-week horizon — is the most actionable metric and should be monitored weekly by the treasury team. Forecast bias (the tendency to consistently over- or under-forecast) reveals systematic errors in assumptions and should trigger a root cause analysis when it persists over multiple periods. Finally, the time-to-update metric — how quickly the forecast is revised in response to a significant operational event — reflects the agility of the forecasting process and is a leading indicator of future accuracy performance.`,
  },
  {
    slug: "spac-accounting-lessons-from-sec-enforcement",
    category: "Audit",
    title: "SPAC Accounting: Lessons from Recent SEC Enforcement",
    author: "Dr. Sarah Chen",
    date: "November 2025",
    excerpt:
      "A wave of SEC enforcement actions and restatements involving Special Purpose Acquisition Companies has highlighted persistent misapplications of ASC 480 and ASC 815 in accounting for redeemable shares and warrants. Dr. Sarah Chen examines the common errors, the audit procedures that should have detected them, and the disclosure improvements now expected by regulators.",
    content: `The SPAC boom of 2020 and 2021 left a compliance legacy that the accounting profession is still working through in 2025. Following the SEC's Staff Statement on Accounting and Reporting Considerations for Warrants Issued by Special Purpose Acquisition Companies in April 2021, which triggered hundreds of restatements across the SPAC universe, a further wave of enforcement actions and informal guidance has clarified the standards applicable to SPAC accounting in ways that remain relevant for any entity that completed a de-SPAC transaction or sponsors a currently active blank-cheque company.

The fundamental accounting question for SPAC common shares is whether Class A shares subject to possible redemption should be classified as permanent equity or temporary equity (mezzanine) under ASC 480-10-S99. The SEC's position, articulated through comment letters and enforcement actions, is that when redemption is potentially within the control of shareholders — as it is in virtually all SPACs — the full redemption value of those shares must be classified outside permanent equity. Many SPACs initially classified only a portion of redeemable shares as temporary equity, arguing that the shares were not "mandatorily redeemable" in a narrow technical sense. This position was rejected by the SEC, and companies that have not yet evaluated their redemption accounting should do so promptly.

Warrant classification under ASC 815-40 has been the more complex and litigated issue. The central question is whether SPAC warrants should be classified as equity instruments or as liabilities that must be remeasured at fair value through earnings each reporting period. The SEC's analysis focuses on whether the settlement amount of the warrant could vary based on inputs other than the issuer's stock price — a condition that is satisfied by many SPAC warrant agreements that include provisions for alternative settlement in certain change-of-control scenarios. Warrants that fail the fixed-for-fixed test under ASC 815-40-15 must be classified as liabilities, with changes in fair value recognised in earnings, typically creating significant EPS volatility.

For audit firms, the SPAC enforcement wave has reinforced the importance of independent technical accounting analysis rather than reliance on client-prepared assessments for complex instruments. The deficiencies identified in enforcement actions frequently involved auditors accepting management's accounting conclusions without conducting independent evaluations of the relevant authoritative literature. Audit procedures for SPAC clients should include a structured review of all outstanding equity instruments against the applicable classification criteria, documented by the engagement team independently of management's analysis, and reviewed by the firm's national office technical accounting group before the audit report is issued.`,
  },
  {
    slug: "supply-chain-finance-risks-and-rewards",
    category: "Risk",
    title: "Supply Chain Finance: Risks and Rewards",
    author: "Robert Castellano",
    date: "October 2025",
    excerpt:
      "Supply chain finance programmes can be powerful tools for optimising working capital across buyer-supplier networks, but they introduce financial reporting risks — particularly around the classification of extended payables — that have attracted scrutiny from standard-setters and auditors alike. Robert Castellano weighs the operational benefits against the disclosure and covenant implications.",
    content: `Supply chain finance — the practice of using a bank or fintech intermediary to offer early payment to suppliers in exchange for a discount, with the buyer repaying the bank at the original invoice due date or on extended terms — has grown into a multi-trillion dollar market globally. For large corporate buyers, these programmes offer a powerful tool for extending days payable outstanding without directly straining supplier relationships, since suppliers can elect to receive early payment at a modest cost. For suppliers, the programmes provide access to financing at rates better than they could obtain independently, collateralised by the creditworthiness of the buyer rather than their own balance sheet.

The financial reporting risk in supply chain finance programmes lies primarily in the classification of the extended payables. Under both US GAAP and IFRS, payables that have been effectively refinanced through a bank-intermediated supply chain finance programme may need to be reclassified from trade payables (operating) to bank borrowings (financing) in the cash flow statement. The key determination is whether the terms of the extended payable are substantially different from the original trade terms — if the interest rate, repayment schedule, or other terms have been modified by the bank's involvement, reclassification may be required. The IASB issued targeted amendments to IAS 7 and IFRS 7 in 2023 specifically addressing this classification question, and companies operating under IFRS should have reviewed their programmes against these amendments.

Covenant implications are an underappreciated risk in supply chain finance. Many credit facilities include debt covenants measured against trade payables or working capital metrics, and a reclassification of SCF payables from trade to financial debt could trigger covenant violations that were not anticipated by treasury teams when the SCF programme was established. Equally, leverage covenants that measure net debt as a multiple of EBITDA may be affected if SCF payables are treated as debt for covenant calculation purposes — a determination that depends on the specific language in the credit agreement rather than GAAP classification. ${COMPANY_NAME}'s recommendations that companies review their major credit agreement covenant definitions before expanding SCF programmes, particularly if current leverage ratios provide limited headroom.

The reputational and governance dimension of supply chain finance has also attracted attention following the collapse of several high-profile fintech providers in the sector. Buyers whose SCF programmes rely on a single intermediary face concentration risk that can disrupt their entire supply chain if the intermediary encounters financial difficulties. Boards should understand the counterparty risk embedded in their SCF arrangements and ensure that contingency plans exist for programme continuity if the primary intermediary becomes unavailable. Given the regulatory scrutiny that supply chain finance has attracted — including investigations by the UK's Financial Reporting Council and questions from the SEC in comment letters — robust governance and disclosure practices are no longer optional for significant programme participants.`,
  },
];

export function getArticleBySlug(slug: string): Article | undefined {
  return articles.find((a) => a.slug === slug);
}

export function getRelatedArticles(slug: string, count = 3): Article[] {
  const current = articles.find((a) => a.slug === slug);
  if (!current) return articles.slice(0, count);
  const sameCategory = articles.filter(
    (a) => a.slug !== slug && a.category === current.category
  );
  const different = articles.filter(
    (a) => a.slug !== slug && a.category !== current.category
  );
  return [...sameCategory, ...different].slice(0, count);
}
