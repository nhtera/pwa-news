const isOnline = () => {
  return navigator.onLine;
};

const isSupportServiceWorker = () => {
  if ("serviceWorker" in navigator) {
    return true;
  }
  return false;
};

export { isOnline, isSupportServiceWorker };
