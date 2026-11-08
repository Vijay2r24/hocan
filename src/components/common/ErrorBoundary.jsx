import React from 'react';
import { AlertTriangle, RefreshCw, Home } from 'lucide-react';

export default class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false, error: null };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true, error };
  }

  componentDidCatch(error, errorInfo) {
    console.error('ErrorBoundary caught an error:', error, errorInfo);
  }

  handleReload = () => {
    this.setState({ hasError: false, error: null });
    window.location.reload();
  };

  render() {
    if (this.state.hasError) {
      return (
        <div className="min-h-[500px] flex items-center justify-center p-6 text-center">
          <div className="bg-white rounded-3xl p-8 sm:p-10 max-w-lg border border-slate-200/90 shadow-lg space-y-4">
            <div className="w-14 h-14 rounded-2xl bg-amber-50 text-amber-600 flex items-center justify-center mx-auto">
              <AlertTriangle className="w-7 h-7" />
            </div>
            <h2 className="font-display font-extrabold text-2xl text-[#073B57]">
              Something unexpected occurred
            </h2>
            <p className="text-xs sm:text-sm text-slate-500 leading-relaxed">
              We encountered an issue loading this section. Please try refreshing the page or navigating back to your dashboard.
            </p>
            {this.state.error?.message && (
              <div className="p-3 bg-slate-50 rounded-xl text-left text-[11px] font-mono text-slate-600 overflow-x-auto border border-slate-200">
                {this.state.error.message}
              </div>
            )}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-3 pt-2">
              <button
                onClick={this.handleReload}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-xl bg-[#073B57] hover:bg-[#0B5678] text-white text-xs font-bold transition-all shadow-xs"
              >
                <RefreshCw className="w-3.5 h-3.5" />
                <span>Reload Page</span>
              </button>
              <a
                href="/patient/dashboard"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-700 text-xs font-bold transition-all"
              >
                <Home className="w-3.5 h-3.5" />
                <span>Patient Dashboard</span>
              </a>
            </div>
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}
