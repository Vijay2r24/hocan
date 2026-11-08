// LocalStorage helper utilities

export const loadState = (key, fallback) => {
  try {
    const serialized = localStorage.getItem(`hokena_${key}`);
    if (serialized === null) {
      return fallback;
    }
    return JSON.parse(serialized);
  } catch (err) {
    console.warn(`Error reading localStorage key "${key}":`, err);
    return fallback;
  }
};

export const saveState = (key, value) => {
  try {
    const serialized = JSON.stringify(value);
    localStorage.setItem(`hokena_${key}`, serialized);
  } catch (err) {
    console.warn(`Error saving to localStorage key "${key}":`, err);
  }
};
