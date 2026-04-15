export type PlanData = {
    name: string;
    price: number;
    description: string;
    features: string[];
    popular?: boolean;
}

export const PLANS = {
  foundation: {
    name: "Foundation",
    price: 2499,
    description: "Perfect for basic bookkeeping and bank reconciliation",
    features: [
      "Up to 2 Bank Accounts",
      "Monthly Financial Statements",
      "Annual Tax Preparation Support",
      "Dedicated Account Manager",
      "Email Support"
    ]
  },
  growth: {
    name: "Growth",
    price: 4999,
    popular: true,
    description: "Ideal for growing businesses needing quarterly advisory",
    features: [
      "Everything in Foundation",
      "Accounts Payable & Receivable",
      "Quarterly Tax Planning",
      "Priority Email & Phone Support",
      "Cash Flow Analysis"
    ]
  },
  enterprise: {
    name: "Enterprise",
    price: 6999,
    description: "Tailored for complex financials and CFO advisory",
    features: [
      "Everything in Growth",
      "CFO Advisory Services",
      "Unlimited Accounts & Transactions",
      "Payroll Processing Included",
      "Audit Representation"
    ]
  }
};
