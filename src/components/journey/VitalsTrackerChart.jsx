import React from 'react';
import {
  ResponsiveContainer,
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
  CartesianGrid
} from 'recharts';

export default function VitalsTrackerChart({ data }) {
  if (!data || data.length === 0) return null;

  return (
    <div className="bg-white rounded-2xl border border-slate-200/80 p-5 shadow-xs">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-4">
        <div>
          <h4 className="font-display font-bold text-sm text-[#073B57]">
            Post-Op Inpatient Clinical Vitals Trend
          </h4>
          <p className="text-xs text-slate-500">
            Recorded by Fortis ICU & Inpatient Clinical Nursing Team
          </p>
        </div>
        <div className="flex items-center gap-3 text-xs">
          <span className="flex items-center gap-1.5 text-slate-600">
            <span className="w-2.5 h-2.5 rounded-full bg-[#073B57]" /> BP Systolic
          </span>
          <span className="flex items-center gap-1.5 text-slate-600">
            <span className="w-2.5 h-2.5 rounded-full bg-[#FF791B]" /> Heart Rate (bpm)
          </span>
          <span className="flex items-center gap-1.5 text-slate-600">
            <span className="w-2.5 h-2.5 rounded-full bg-[#16A36A]" /> SpO2 (%)
          </span>
        </div>
      </div>

      <div className="h-64 w-full">
        <ResponsiveContainer width="100%" height="100%">
          <LineChart data={data} margin={{ top: 10, right: 20, left: -10, bottom: 0 }}>
            <CartesianGrid strokeDasharray="3 3" stroke="#f1f5f9" />
            <XAxis dataKey="time" tick={{ fontSize: 11, fill: '#64748b' }} />
            <YAxis tick={{ fontSize: 11, fill: '#64748b' }} domain={[50, 140]} />
            <Tooltip
              contentStyle={{
                backgroundColor: '#ffffff',
                borderColor: '#e2e8f0',
                borderRadius: '0.75rem',
                fontSize: '12px',
                boxShadow: '0 10px 15px -3px rgba(0, 0, 0, 0.1)'
              }}
            />
            <Line
              type="monotone"
              dataKey="bloodPressure"
              name="BP Systolic"
              stroke="#073B57"
              strokeWidth={2.5}
              dot={{ r: 4, fill: '#073B57' }}
            />
            <Line
              type="monotone"
              dataKey="heartRate"
              name="Heart Rate"
              stroke="#FF791B"
              strokeWidth={2.5}
              dot={{ r: 4, fill: '#FF791B' }}
            />
            <Line
              type="monotone"
              dataKey="oxygen"
              name="Oxygen SpO2 %"
              stroke="#16A36A"
              strokeWidth={2.5}
              dot={{ r: 4, fill: '#16A36A' }}
            />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}
