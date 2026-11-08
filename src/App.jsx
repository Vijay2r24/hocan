import React, { useEffect } from 'react';
import { BrowserRouter, useLocation } from 'react-router-dom';
import { Provider } from 'react-redux';
import { store } from './store';
import { ToastProvider } from './components/common/ToastNotification';
import AppRoutes from './routes/AppRoutes';
import AOS from 'aos';
import 'aos/dist/aos.css';

function AosInitializer() {
  const { pathname } = useLocation();

  useEffect(() => {
    AOS.init({
      duration: 650,
      easing: 'ease-out-cubic',
      once: false,
      offset: 60,
      delay: 50
    });

    // When async content or skeletons (750ms) finish, refreshHard re-queries all [data-aos] elements
    let timeoutId = null;
    const observer = new MutationObserver(() => {
      if (timeoutId) clearTimeout(timeoutId);
      timeoutId = setTimeout(() => {
        AOS.refreshHard();
      }, 120);
    });

    observer.observe(document.body, {
      childList: true,
      subtree: true
    });

    const initialTimer = setTimeout(() => {
      AOS.refreshHard();
    }, 850);

    return () => {
      clearTimeout(initialTimer);
      if (timeoutId) clearTimeout(timeoutId);
      observer.disconnect();
    };
  }, []);

  useEffect(() => {
    window.scrollTo(0, 0);
    const timer = setTimeout(() => {
      AOS.refreshHard();
    }, 120);
    return () => clearTimeout(timer);
  }, [pathname]);

  return null;
}

export default function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <ToastProvider>
          <AosInitializer />
          <AppRoutes />
        </ToastProvider>
      </BrowserRouter>
    </Provider>
  );
}
