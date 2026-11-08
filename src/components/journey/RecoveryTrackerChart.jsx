import React from 'react';
import {
  ResponsiveContainer,
  AreaChart,
  Area,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid
} from 'recharts';

export default function RecoveryTrackerChart() {
  const recoveryData = [
    { day: 'Day 1', mobilityScore: 20, painLevel: 7 },
    { day: 'Day 3', mobilityScore: 35, painLevel: 5 },
    { day: 'Day 5', mobilityScore: 50, painLevel: 4 },
    { day: 'Day 8', mobilityScore: 68, painLevel: 3 },
    { day: 'Day 12', mobilityScore: 82, painLevel: 2 },
    { day: 'Day 15', mobilityScore: 92, painLevel: 1 },
    { day: 'Target', mobilityScore: 100, painLevel: 0 },
  ];

  return (
    <div className="bg-white rounded-2xl border border-slate-200/80 p-5 shadow-xs">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-4">
        <div>
          <h4 className="font-display font-bold text-sm text-[#073B57]">
            Mobility Index vs Pain Score Trend
          </h4>
          <p className="text-xs text-slate-500">
            Higher mobility score indicates joint strength and independent ambulation
          </p>
        </div>
        <div className="flex items-center gap-3 text-xs">
          <span className="flex items-center gap-1.5 text-slate-600">
            <span className="w-2.5 h-2.5 rounded-full bg-emerald-500" /> Mobility Index %
          </span>
          <span className="flex items-center gap-1.5 text-slate-600">
            <span className="w-2.5 h-2.5 rounded-full bg-rose-500" /> Pain Score (1-10)
          </span>
        </div>
      </div>

      <div className="h-64 w-full">
        <ResponsiveContainer width="100%" height="100%">
          <AreaChart data={recoveryData} margin={{ top: 10, right: 20, left: -15, bottom: 0 }}>
            <defs>
              <linearGradient id="mobilityGrad" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#16A36A" stopOpacity={0.4} />
                <stop offset="95%" stopColor="#16A36A" stopOpacity={0} />
              </linearGradient>
            </defs>
            <CartesianGrid strokeDasharray="3 3" stroke="#f1f5f9" />
            <XAxis dataKey="day" tick={{ fontSize: 11, fill: '#64748b' }} />
            <YAxis tick={{ fontSize: 11, fill: '#64748b' }} domain={[0, 100]} />
            <Tooltip
              contentStyle={{
                backgroundColor: '#ffffff',
                borderColor: '#e2e8f0',
                borderRadius: '0.75rem',
                fontSize: '12px',
                boxShadow: '0 10px 15px -3px rgba(0, 0, 0, 0.1)'
              }}
            />
            <Area
              type="monotone"
              dataKey="mobilityScore"
              name="Mobility Score (%)"
              stroke="#16A36A"
              strokeWidth={3}
              fillOpacity={1}
              fill="url(#mobilityGrad)"
            />
            <Area
              type="monotone"
              dataKey="painLevel"
              name="Pain Level (0-10)"
              stroke="#e11d48"
              strokeWidth={2}
              fill="transparent"
            />
          </AreaChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}
