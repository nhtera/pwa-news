import localforage from "localforage";
const HAS_RUN = "HAS_RUN";

const configStorage = () => {
  localforage.config({
    name: "pwa-news-db",
    version: 1.0,
    storeName: "news",
    description: "news"
  });
};

configStorage();

const isFirstRun = !localStorage.getItem(HAS_RUN);

const setAsRun = () => localStorage.setItem(HAS_RUN, 1);

const getData = (id) => localforage.getItem(id);

const saveData = (id, news) => localforage.setItem(id, news);

export { getData, saveData, isFirstRun, setAsRun };
