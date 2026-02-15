
import React from 'react';
import { SearchPanel } from './components/SearchPanel';
import { MarketAnalysisView } from './components/MarketAnalysisView';
import { CompanyList } from './components/CompanyList';
import { analyzeMarket } from './services/geminiService';
import { MarketAnalysis, SearchParams } from './types';
import { Globe2, Briefcase, ChevronRight, Info } from 'lucide-react';

const App: React.FC = () => {
  const [analysis, setAnalysis] = React.useState<MarketAnalysis | null>(null);
  const [loading, setLoading] = React.useState(false);
  const [error, setError] = React.useState<string | null>(null);

  const handleSearch = async (params: SearchParams) => {
    setLoading(true);
    setError(null);
    try {
      const result = await analyzeMarket(params);
      setAnalysis(result);
    } catch (err) {
      setError('Unable to fetch market data. Please check your network or try a different search.');
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen pb-20">
      {/* Navigation / Header */}
      <header className="bg-white border-b border-slate-200 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 h-16 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-indigo-600 rounded-xl flex items-center justify-center text-white">
              <Globe2 className="w-6 h-6" />
            </div>
            <div>
              <h1 className="text-lg font-bold text-slate-900 leading-none">Trade Hub</h1>
              <span className="text-[10px] font-bold text-indigo-600 uppercase tracking-[0.2em]">Intelligence Platform</span>
            </div>
          </div>
          
          <nav className="hidden md:flex items-center gap-8">
            <a href="#" className="text-sm font-semibold text-indigo-600">Analyzer</a>
            <a href="#" className="text-sm font-semibold text-slate-500 hover:text-indigo-600 transition-colors">Economic Map</a>
            <a href="#" className="text-sm font-semibold text-slate-500 hover:text-indigo-600 transition-colors">Export Guides</a>
          </nav>

          <button className="px-4 py-2 bg-slate-900 text-white text-sm font-bold rounded-lg hover:bg-slate-800 transition-all">
            Pro Access
          </button>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 py-12">
        <div className="mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-indigo-50 text-indigo-600 rounded-full text-xs font-bold mb-4">
            <Briefcase className="w-3 h-3" />
            Global Market Research Tool
          </div>
          <h2 className="text-4xl font-extrabold text-slate-900 mb-4">
            Decode Country Business Structures.
          </h2>
          <p className="text-xl text-slate-500 max-w-2xl leading-relaxed">
            Gain deep visibility into foreign corporate landscapes. Identify strategic partners, analyze sector distribution, and improve your foreign trade intelligence.
          </p>
        </div>

        <SearchPanel onSearch={handleSearch} isLoading={loading} />

        {error && (
          <div className="mt-8 p-4 bg-red-50 border border-red-100 rounded-xl flex items-center gap-3 text-red-600">
            <Info className="w-5 h-5" />
            <p className="font-medium">{error}</p>
          </div>
        )}

        {loading && !analysis && (
          <div className="mt-20 flex flex-col items-center justify-center space-y-4">
            <div className="w-16 h-16 border-4 border-indigo-100 border-t-indigo-600 rounded-full animate-spin" />
            <p className="text-slate-500 font-medium animate-pulse">Scanning global business databases...</p>
          </div>
        )}

        {analysis && (
          <div className="mt-12 space-y-12 animate-in fade-in slide-in-from-bottom-4 duration-700">
            <MarketAnalysisView analysis={analysis} />
            <CompanyList companies={analysis.suggestedCompanies} />
          </div>
        )}

        {!analysis && !loading && (
          <div className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { title: 'Sector Analysis', desc: 'Identify which industries dominate a specific country\'s exports.', icon: Briefcase },
              { title: 'Company Scouting', desc: 'Find real players and key competitors in niche international markets.', icon: Globe2 },
              { title: 'Strategic Insights', desc: 'Get AI-driven tips for negotiating and entering new trade regions.', icon: ChevronRight },
            ].map((feature, i) => (
              <div key={i} className="bg-white p-8 rounded-2xl border border-slate-100 shadow-sm hover:shadow-md transition-all">
                <div className="w-12 h-12 bg-indigo-50 text-indigo-600 rounded-xl flex items-center justify-center mb-6">
                  <feature.icon className="w-6 h-6" />
                </div>
                <h3 className="text-lg font-bold text-slate-900 mb-2">{feature.title}</h3>
                <p className="text-slate-500 text-sm leading-relaxed">{feature.desc}</p>
              </div>
            ))}
          </div>
        )}
      </main>

      {/* Footer Info */}
      <footer className="mt-auto py-12 border-t border-slate-200 bg-white">
        <div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex items-center gap-3 grayscale">
            <Globe2 className="w-5 h-5 text-slate-400" />
            <span className="text-sm font-bold text-slate-400 uppercase tracking-widest">Intelligence Hub</span>
          </div>
          <p className="text-slate-400 text-sm">
            © 2025 Trade Hub Platform. Powered by Gemini Flash Intelligence.
          </p>
          <div className="flex gap-6">
            <a href="#" className="text-sm text-slate-400 hover:text-slate-600">Privacy</a>
            <a href="#" className="text-sm text-slate-400 hover:text-slate-600">Terms</a>
            <a href="#" className="text-sm text-slate-400 hover:text-slate-600">API Documentation</a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default App;
