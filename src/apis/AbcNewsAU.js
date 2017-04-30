const url = `https://newsapi.org/v1/articles?source=abc-news-au&sortBy=top&apiKey=6220d89db3e347d6841bbdbd55baa1e2`

function getTop () {
  return fetch(url);
};

export {
    getTop,
};
