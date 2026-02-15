
import React from 'react';
import { Company } from '../types';
import { Star, Building, BarChart3, ArrowRight } from 'lucide-react';

export const CompanyList: React.FC<{ companies: Company[] }> = ({ companies }) => {
  return (
    <div className="mt-8">
      <h2 className="text-2xl font-bold text-slate-800 mb-6 flex items-center gap-3">
        <Building className="w-7 h-7 text-indigo-600" />
        Key Industry Players
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {companies.map((company, idx) => (
          <div key={idx} className="group bg-white rounded-2xl border border-slate-200 p-6 hover:shadow-xl hover:border-indigo-200 transition-all duration-300">
            <div className="flex justify-between items-start mb-4">
              <div className="bg-indigo-50 p-3 rounded-xl group-hover:bg-indigo-600 group-hover:text-white transition-colors">
                <Building className="w-6 h-6" />
              </div>
              <div className="flex items-center gap-1 px-3 py-1 bg-amber-50 text-amber-600 rounded-full text-xs font-bold">
                <Star className="w-3 h-3 fill-current" />
                Exp: {company.exportCapability}/10
              </div>
            </div>
            
            <h3 className="text-lg font-bold text-slate-900 group-hover:text-indigo-600 transition-colors">{company.name}</h3>
            <span className="text-xs font-semibold text-slate-400 uppercase tracking-wider">{company.sector}</span>
            
            <p className="mt-3 text-sm text-slate-600 line-clamp-3 leading-relaxed">
              {company.description}
            </p>

            <div className="mt-6 pt-6 border-t border-slate-100 flex items-center justify-between">
              <div className="flex items-center gap-2 text-slate-400">
                <BarChart3 className="w-4 h-4" />
                <span className="text-xs font-medium">{company.size}</span>
              </div>
              <button className="text-indigo-600 hover:text-indigo-800 font-bold text-sm flex items-center gap-1 group/btn">
                Details <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
