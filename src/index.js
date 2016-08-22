var Rx = require('rxjs');
var btn = document.querySelector('#clickMe');
var clicks = Rx.Observable.fromEvent(btn, 'click');
clicks.scan(function (s) { return s + 1; }, 0)
    .buffer(clicks.throttle(1000))
    .forEach(function (x) { return sendValues(x); });
function sendValues(arr) {
    var pre = document.createElement('pre');
    pre.innerHTML = JSON.stringify(arr);
    document.querySelector('#results')
        .appendChild(pre);
}
