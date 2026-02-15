
import React from 'react';
import { MarketAnalysis } from '../types';
import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip, Legend } from 'recharts';
import { TrendingUp, Scale, Lightbulb, ExternalLink } from 'lucide-react';

const COLORS = ['#6366f1', '#8b5cf6', '#ec4899', '#f43f5e', '#f97316'];

export const MarketAnalysisView: React.FC<{ analysis: MarketAnalysis }> = ({ analysis }) => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
      {/* Summary Card */}
      <div className="lg:col-span-2 space-y-6">
        <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100">
          <div className="flex items-center gap-2 mb-4">
            <TrendingUp className="w-6 h-6 text-indigo-600" />
            <h2 className="text-xl font-bold text-slate-800">Market Overview</h2>
          </div>
          <p className="text-slate-600 leading-relaxed mb-6">
            {analysis.summary}
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="p-4 bg-indigo-50 rounded-xl">
              <span className="text-xs font-bold text-indigo-600 uppercase">Trade Status</span>
              <p className="text-lg font-semibold text-indigo-900 mt-1">{analysis.tradeBalance}</p>
            </div>
            <div className="p-4 bg-slate-50 rounded-xl">
              <span className="text-xs font-bold text-slate-500 uppercase">Sectors Analyzed</span>
              <p className="text-lg font-semibold text-slate-900 mt-1">{analysis.topSectors.length} Key Sub-segments</p>
            </div>
          </div>
        </div>

        {/* Strategic Insights */}
        <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100">
          <div className="flex items-center gap-2 mb-4">
            <Lightbulb className="w-6 h-6 text-amber-500" />
            <h2 className="text-xl font-bold text-slate-800">Trade Strategy Insights</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {analysis.strategicInsights.map((insight, idx) => (
              <div key={idx} className="flex gap-3 p-4 border border-slate-100 rounded-xl hover:bg-slate-50 transition-colors">
                <div className="flex-shrink-0 w-6 h-6 rounded-full bg-indigo-100 text-indigo-600 flex items-center justify-center text-xs font-bold">
                  {idx + 1}
                </div>
                <p className="text-sm text-slate-600">{insight}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Sources */}
        {analysis.sources.length > 0 && (
          <div className="bg-slate-100 p-4 rounded-xl">
            <h3 className="text-xs font-bold text-slate-500 uppercase mb-3 flex items-center gap-2">
              <Scale className="w-4 h-4" /> Grounding Resources
            </h3>
            <div className="flex flex-wrap gap-3">
              {analysis.sources.map((source, idx) => (
                <a 
                  key={idx} 
                  href={source.uri} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-white border border-slate-200 rounded-lg text-xs font-medium text-slate-700 hover:text-indigo-600 transition-colors"
                >
                  {source.title} <ExternalLink className="w-3 h-3" />
                </a>
              ))}
            </div>
          </div>
        )}
      </div>

      {/* Charts Side */}
      <div className="space-y-6">
        <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100">
          <h2 className="text-lg font-bold text-slate-800 mb-4">Structure by Segment</h2>
          <div className="h-64">
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie
                  data={analysis.topSectors}
                  cx="50%"
                  cy="50%"
                  innerRadius={60}
                  outerRadius={80}
                  paddingAngle={5}
                  dataKey="percentage"
                >
                  {analysis.topSectors.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                  ))}
                </Pie>
                <Tooltip />
                <Legend layout="vertical" verticalAlign="middle" align="right" wrapperStyle={{ fontSize: '12px' }} />
              </PieChart>
            </ResponsiveContainer>
          </div>
        </div>

        <div className="bg-gradient-to-br from-indigo-600 to-indigo-800 p-6 rounded-2xl text-white shadow-lg">
          <h3 className="font-bold mb-2">Foreign Trade Tip</h3>
          <p className="text-indigo-100 text-sm italic">
            "When analyzing a country's business structure, the presence of large clusters in specialized sectors often indicates a robust export ecosystem with mature supply chains."
          </p>
        </div>
      </div>
    </div>
  );
};
