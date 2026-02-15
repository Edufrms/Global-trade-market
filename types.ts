
export enum CompanySize {
  SME = 'Small/Medium',
  LARGE = 'Large Enterprise',
  MULTINATIONAL = 'Multinational'
}

export interface Company {
  name: string;
  sector: string;
  size: CompanySize;
  description: string;
  exportCapability: number; // 1-10
  website?: string;
}

export interface MarketAnalysis {
  summary: string;
  topSectors: Array<{ name: string; percentage: number }>;
  tradeBalance: string;
  strategicInsights: string[];
  suggestedCompanies: Company[];
  sources: Array<{ title: string; uri: string }>;
}

export interface SearchParams {
  country: string;
  sector: string;
  size: CompanySize;
}
