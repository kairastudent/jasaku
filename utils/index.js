export const setToLS = (key, value) => {
  window.localStorage.setItem(key, JSON.stringify(value));
};

export const getFromLS = (key) => {
  if (typeof window !== "undefined") {
    const value = window.localStorage.getItem(key);
    return value;
  }
};
