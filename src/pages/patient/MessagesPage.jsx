import React, { useState, useEffect } from 'react';
import ChatInterface from '../../components/patient/ChatInterface';
import { MessagesSkeleton } from '../../components/skeletons';

export default function MessagesPage() {
  const [isLoading, setIsLoading] = useState(true);

  // Automatically load page-related messages skeleton on mount
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 750);
    return () => clearTimeout(timer);
  }, []);

  if (isLoading) {
    return <MessagesSkeleton />;
  }

  return (
    <div className="space-y-6">
      <div>
        <h1 className="font-display font-extrabold text-2xl text-[#073B57]">
          Patient Communication & Support Center
        </h1>
        <p className="text-xs text-slate-500 mt-1">
          Chat directly with your assigned international patient coordinator, exchange clinical reports, and coordinate logistics.
        </p>
      </div>

      <ChatInterface />
    </div>
  );
}
