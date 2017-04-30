
function getURL (id) {
  return `https://newsapi.org/v1/articles?source=${id}&sortBy=top&apiKey=6220d89db3e347d6841bbdbd55baa1e2`;
};

function getTop (id='abc-news-au') {
  return () => {
    return fetch((getURL(id)))
        .then(response => response.json());
  };
}

export default {
    getTop,
};
