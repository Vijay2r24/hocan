import React, { useState, useEffect } from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import Header from '../common/Header';
import Footer from '../common/Footer';
import FloatingWhatsApp from '../common/FloatingWhatsApp';
import ErrorBoundary from '../common/ErrorBoundary';
import { PublicPageSkeleton } from '../skeletons';

export default function PublicLayout() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <div className="min-h-screen flex flex-col bg-[#F5F8FA] text-[#263746]">
      <Header />
      <main className="flex-1">
        <ErrorBoundary>
          <Outlet />
        </ErrorBoundary>
      </main>
      <Footer />
      <FloatingWhatsApp />
    </div>
  );
}
