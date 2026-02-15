
import React from 'react';
import { CompanySize, SearchParams } from '../types';
import { Search, Globe, Building2, Layers } from 'lucide-react';

interface SearchPanelProps {
  onSearch: (params: SearchParams) => void;
  isLoading: boolean;
}

export const SearchPanel: React.FC<SearchPanelProps> = ({ onSearch, isLoading }) => {
  const [country, setCountry] = React.useState('Germany');
  const [sector, setSector] = React.useState('Automotive');
  const [size, setSize] = React.useState<CompanySize>(CompanySize.LARGE);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSearch({ country, sector, size });
  };

  return (
    <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-200">
      <form onSubmit={handleSubmit} className="flex flex-col md:flex-row gap-4">
        <div className="flex-1">
          <label className="text-xs font-semibold text-slate-500 uppercase tracking-wider mb-2 block">Country</label>
          <div className="relative">
            <Globe className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400" />
            <input
              type="text"
              value={country}
              onChange={(e) => setCountry(e.target.value)}
              className="w-full pl-10 pr-4 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition-all outline-none"
              placeholder="e.g. Spain, Vietnam..."
            />
          </div>
        </div>

        <div className="flex-1">
          <label className="text-xs font-semibold text-slate-500 uppercase tracking-wider mb-2 block">Industry Sector</label>
          <div className="relative">
            <Building2 className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400" />
            <select
              value={sector}
              onChange={(e) => setSector(e.target.value)}
              className="w-full pl-10 pr-4 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition-all outline-none appearance-none"
            >
              <option value="Automotive">Automotive</option>
              <option value="Technology">Technology & Software</option>
              <option value="Agriculture">Agriculture & Food</option>
              <option value="Pharmaceuticals">Pharmaceuticals</option>
              <option value="Textiles">Textiles & Apparel</option>
              <option value="Energy">Energy & Renewables</option>
              <option value="Logistics">Logistics & Supply Chain</option>
            </select>
          </div>
        </div>

        <div className="flex-1">
          <label className="text-xs font-semibold text-slate-500 uppercase tracking-wider mb-2 block">Company Size</label>
          <div className="relative">
            <Layers className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400" />
            <select
              value={size}
              onChange={(e) => setSize(e.target.value as CompanySize)}
              className="w-full pl-10 pr-4 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition-all outline-none appearance-none"
            >
              <option value={CompanySize.SME}>Small & Medium Enterprises</option>
              <option value={CompanySize.LARGE}>Large Enterprises</option>
              <option value={CompanySize.MULTINATIONAL}>Multinational Corps</option>
            </select>
          </div>
        </div>

        <div className="flex items-end">
          <button
            type="submit"
            disabled={isLoading}
            className="w-full md:w-auto px-8 py-3 bg-indigo-600 hover:bg-indigo-700 disabled:bg-indigo-400 text-white font-semibold rounded-xl transition-all shadow-lg shadow-indigo-200 flex items-center justify-center gap-2"
          >
            {isLoading ? (
              <div className="animate-spin rounded-full h-5 w-5 border-2 border-white border-t-transparent" />
            ) : (
              <>
                <Search className="w-5 h-5" />
                Analyze
              </>
            )}
          </button>
        </div>
      </form>
    </div>
  );
};
