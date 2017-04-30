import { itemRef } from '../apis/hn';

itemRef('14229412').then(function(res) {
    return res.json()
}).then(function(snapshot) {
    console.log(snapshot);
});