/**
 * Holds the US map with all the data
 */
var map = new Datamap({
    element: document.getElementById('container'),
    responsive: true
});

window.addEventListener('resize', function() {
    map.resize();
});