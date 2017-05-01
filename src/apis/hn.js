const endPoint = 'https://hacker-news.firebaseio.com/v0'
const options = {
  method: 'GET',
  headers: {
    'Accept': 'application/json'
  }
}

function storiesRef(path) {
  return fetch(endPoint + '/' + path + '.json', options);
}

function itemRef(id) {
  return fetch(endPoint + '/item/' + id + '.json', options);
}

function itemRefJSON(id) {
  return itemRef(id).then(function(response) {
    return response.json()
  });
}

function userRef(id) {
  return fetch(endPoint + '/user/' + id + '.json', options);
}

function updatesRef() {
  return fetch(endPoint + '/updates/items/' + '.json', options);
}

function fetchItem(id, cb) {
  itemRef(id).then(function(snapshot) {
    cb(snapshot)
  });
}

function fetchItems(ids, cb) {
  var items = []
  var promises = []
  ids.forEach(function(id) {
    promises.push(itemRefJSON(id))
  })
  Promise.all(promises).then(function(values) {
    items = values
    if (items.length >= ids.length) {
      cb(items)
    }
  });
}

// storiesRef('topstories')
// .then(response => response.json())
// .then((res) => {
//     console.log(res);
// });

export {
  fetchItem,
  fetchItems,
  storiesRef,
  itemRef,
  userRef,
  updatesRef
};