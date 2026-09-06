import React from 'react';
import { TrendingUp, AlertTriangle, ArrowRight, ShieldCheck } from 'lucide-react';

interface VisualizerProps {
  type: 'funnel' | 'rfm' | 'voc' | 'ecommerce' | 'ga4';
  stats: { label: string; value: string; trend?: string }[];
  chartData: any[];
}

export const ProjectDataVisualizer: React.FC<VisualizerProps> = ({ type, stats, chartData }) => {
  return (
    <div className="space-y-4">
      {/* Top Stat Summary Pills */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
        {stats.map((s, idx) => (
          <div key={idx} className="p-3 rounded-xl bg-neutral-950/80 border border-neutral-800/80 text-left">
            <div className="text-[11px] text-neutral-400 truncate">{s.label}</div>
            <div className="text-base font-bold font-mono text-cyan-300 mt-0.5">{s.value}</div>
            {s.trend && <div className="text-[10px] text-neutral-500 mt-0.5 truncate">{s.trend}</div>}
          </div>
        ))}
      </div>

      {/* Visual Chart Canvas */}
      <div className="p-4 rounded-xl bg-neutral-950 border border-neutral-800/90 text-left space-y-3">
        {type === 'funnel' && (
          <div className="space-y-2">
            <div className="text-xs font-mono text-neutral-400 flex items-center justify-between">
              <span>Onboarding Stage Progression</span>
              <span>Step-to-Step Drop %</span>
            </div>
            <div className="space-y-1.5">
              {chartData.map((stage: any, idx: number) => {
                const maxUsers = chartData[0]?.users || 1;
                const widthPct = Math.max(12, Math.round((stage.users / maxUsers) * 100));
                return (
                  <div key={idx} className="space-y-1">
                    <div className="flex items-center justify-between text-xs">
                      <span className="text-neutral-300 font-medium">{stage.stage}</span>
                      <span className="font-mono text-neutral-400">
                        {stage.users.toLocaleString()} users {stage.dropRate > 0 && `(-${stage.dropRate}%)`}
                      </span>
                    </div>
                    <div className="w-full bg-neutral-800/60 rounded-full h-2.5 overflow-hidden">
                      <div 
                        className="bg-gradient-to-r from-cyan-500 to-blue-500 h-full rounded-full transition-all duration-700"
                        style={{ width: `${widthPct}%` }}
                      />
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        )}

        {type === 'rfm' && (
          <div className="space-y-2">
            <div className="text-xs font-mono text-neutral-400 flex items-center justify-between">
              <span>Customer RFM Segment</span>
              <span>Revenue Contribution</span>
            </div>
            <div className="space-y-1.5">
              {chartData.map((seg: any, idx: number) => (
                <div key={idx} className="space-y-1">
                  <div className="flex items-center justify-between text-xs">
                    <span className="text-neutral-300 font-medium flex items-center gap-1.5">
                      <span className={`w-2 h-2 rounded-full ${
                        seg.risk === 'Low' ? 'bg-emerald-400' : seg.risk === 'Medium' ? 'bg-amber-400' : 'bg-red-400'
                      }`} />
                      {seg.segment}
                    </span>
                    <span className="font-mono text-cyan-300 font-bold">{seg.revenueShare}% Share</span>
                  </div>
                  <div className="w-full bg-neutral-800/60 rounded-full h-2.5 overflow-hidden">
                    <div 
                      className={`h-full rounded-full ${
                        seg.risk === 'Low' ? 'bg-cyan-500' : seg.risk === 'Medium' ? 'bg-amber-500' : 'bg-rose-500'
                      }`}
                      style={{ width: `${Math.min(100, seg.revenueShare * 2)}%` }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {type === 'voc' && (
          <div className="space-y-2">
            <div className="text-xs font-mono text-neutral-400 flex items-center justify-between">
              <span>Support Category</span>
              <span>Negative Sentiment Concentration</span>
            </div>
            <div className="space-y-1.5">
              {chartData.map((item: any, idx: number) => (
                <div key={idx} className="space-y-1">
                  <div className="flex items-center justify-between text-xs">
                    <span className="text-neutral-300 font-medium">{item.category}</span>
                    <span className="font-mono text-neutral-400">{item.tickets} tickets ({item.negativeRate}% Neg)</span>
                  </div>
                  <div className="w-full bg-neutral-800/60 rounded-full h-2.5 overflow-hidden">
                    <div 
                      className="bg-gradient-to-r from-cyan-400 to-rose-500 h-full rounded-full"
                      style={{ width: `${item.negativeRate}%` }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {type === 'ecommerce' && (
          <div className="space-y-2">
            <div className="text-xs font-mono text-neutral-400 flex items-center justify-between">
              <span>Channel</span>
              <span>Net Margin % (after ad spend)</span>
            </div>
            <div className="space-y-1.5">
              {chartData.map((item: any, idx: number) => (
                <div key={idx} className="space-y-1">
                  <div className="flex items-center justify-between text-xs">
                    <span className="text-neutral-300 font-medium">{item.channel}</span>
                    <span className="font-mono text-emerald-400 font-bold">{item.margin}% Net Margin</span>
                  </div>
                  <div className="w-full bg-neutral-800/60 rounded-full h-2.5 overflow-hidden">
                    <div 
                      className="bg-gradient-to-r from-blue-500 to-emerald-400 h-full rounded-full"
                      style={{ width: `${item.margin * 2.5}%` }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {type === 'ga4' && (
          <div className="space-y-2">
            <div className="text-xs font-mono text-neutral-400 flex items-center justify-between">
              <span>Acquisition Source</span>
              <span>Session to Goal Conversion %</span>
            </div>
            <div className="space-y-1.5">
              {chartData.map((item: any, idx: number) => (
                <div key={idx} className="space-y-1">
                  <div className="flex items-center justify-between text-xs">
                    <span className="text-neutral-300 font-medium">{item.source}</span>
                    <span className="font-mono text-cyan-300 font-bold">{item.convRate}% CR</span>
                  </div>
                  <div className="w-full bg-neutral-800/60 rounded-full h-2.5 overflow-hidden">
                    <div 
                      className="bg-gradient-to-r from-sky-400 to-cyan-500 h-full rounded-full"
                      style={{ width: `${Math.min(100, item.convRate * 20)}%` }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
