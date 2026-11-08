import React from 'react';

export default function DashboardCard({
  title,
  subtitle,
  icon: Icon,
  badge,
  badgeType = 'default',
  actions,
  children,
  className = ''
}) {
  return (
    <div className={`bg-white rounded-2xl border border-slate-200/80 shadow-xs overflow-hidden ${className}`}>
      {(title || Icon || actions) && (
        <div className="p-5 sm:p-6 border-b border-slate-100 flex items-center justify-between gap-3">
          <div className="flex items-center gap-3">
            {Icon && (
              <div className="w-10 h-10 rounded-xl bg-slate-50 border border-slate-100 flex items-center justify-center text-[#0B5678] shadow-xs">
                <Icon className="w-5 h-5 text-[#073B57]" />
              </div>
            )}
            <div>
              <div className="flex items-center gap-2">
                <h3 className="font-display font-bold text-base text-[#073B57]">
                  {title}
                </h3>
                {badge && (
                  <span className="px-2 py-0.5 rounded-full text-[10px] font-bold bg-orange-100 text-orange-800">
                    {badge}
                  </span>
                )}
              </div>
              {subtitle && <p className="text-xs text-slate-500 mt-0.5">{subtitle}</p>}
            </div>
          </div>

          {actions && <div className="flex items-center gap-2">{actions}</div>}
        </div>
      )}

      <div className="p-5 sm:p-6">{children}</div>
    </div>
  );
}
