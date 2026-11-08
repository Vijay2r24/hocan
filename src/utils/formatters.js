// Utility helpers & formatters

export const formatCurrency = (amount, currency = 'USD') => {
  if (amount === undefined || amount === null) return '$0';
  const symbols = {
    USD: '$',
    GBP: '£',
    EUR: '€',
    INR: '₹',
    AED: 'AED '
  };
  const sym = symbols[currency] || '$';
  return `${sym}${Number(amount).toLocaleString()}`;
};

export const getStageName = (stageNumber) => {
  const names = {
    1: 'Enquiry',
    2: 'Consultation',
    3: 'Confirmation & Quotation',
    4: 'Medical Visa',
    5: 'Travel & Arrival',
    6: 'Treatment',
    7: 'Recovery & Follow-up',
    8: 'Return Home'
  };
  return names[stageNumber] || `Stage ${stageNumber}`;
};

export const getStageColor = (stageNumber) => {
  const colors = {
    1: '#073B57',
    2: '#0B5678',
    3: '#FF791B',
    4: '#073B57',
    5: '#0B5678',
    6: '#FF791B',
    7: '#16A36A',
    8: '#073B57'
  };
  return colors[stageNumber] || '#073B57';
};
