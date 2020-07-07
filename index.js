var cube = document.getElementById('cube');

var min = 1;
var max = 24;

cube.addEventListener('click', () => {
    var xRand = getRendom(min,max);
    var yRand = getRendom(min,max);

    cube.style.webkitTransform = 'rotateX('+xRand+'deg) rotateY('+yRand+'deg)';
    cube.style.transform = 'rotateX('+xRand+'deg) rotateY('+yRand+'deg)';
})

function getRendom(min,max) {
    return (Math.floor(Math.random() * (max-min)) + min) * 90;
}