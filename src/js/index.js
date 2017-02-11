var barra = document.querySelector('#pp');
var barra2 = document.querySelector('#zec');
var barra3 = document.querySelector('#psoe');
var barra4 = document.querySelector('#cs');
var barra5 = document.querySelector('#cha');
var barra6 = document.querySelector('#resto');
var extremeInOutEasing = mojs.easing.path('M0,100 C50,100 50,100 50,50 C50,0 50,0 100,0');
squashCurve = mojs.easing.path('M0,100.004963 C0,100.004963 25,147.596355 25,100.004961 C25,70.7741867 32.2461944,85.3230873 58.484375,94.8579105 C68.9280825,98.6531013 83.2611815,99.9999999 100,100');


new mojs.Tween({
    delay: 500,
    duration: 1500,
    onUpdate: function(progress) {
        var bounceProgress = extremeInOutEasing(progress);
        squashProgress = squashCurve(progress),
            scaleX = 1 - 10 * squashProgress,
            scaleY = 1 + 10 * squashProgress;
        barra.style.width = '26.88' * bounceProgress + '%';
        barra.style.transform =
            'scaleX(' + scaleX + ') ' + 'scaleY(' + scaleY + ')';
    }
}).play();

new mojs.Tween({
    delay: 500,
    duration: 1500,
    onUpdate: function(progress) {
        var bounceProgress = extremeInOutEasing(progress);
        squashProgress = squashCurve(progress),
            scaleX = 1 - 6 * squashProgress,
            scaleY = 1 + 6 * squashProgress;
        barra2.style.width = '24.57' * bounceProgress + '%';
        barra2.style.transform =
            'scaleX(' + scaleX + ') ' + 'scaleY(' + scaleY + ')';
    }
}).play();

new mojs.Tween({
    delay: 500,
    duration: 1500,
    onUpdate: function(progress) {
        var bounceProgress = extremeInOutEasing(progress);
        squashProgress = squashCurve(progress),
            scaleX = 1 - 4 * squashProgress,
            scaleY = 1 + 4 * squashProgress;
        barra3.style.width = '18.65' * bounceProgress + '%';
        barra3.style.transform =
            'scaleX(' + scaleX + ') ' + 'scaleY(' + scaleY + ')';
    }
}).play();

new mojs.Tween({
    delay: 500,
    duration: 1500,
    onUpdate: function(progress) {
        var bounceProgress = extremeInOutEasing(progress);
        squashProgress = squashCurve(progress),
            scaleX = 1 - 5.5 * squashProgress,
            scaleY = 1 + 5.5 * squashProgress;
        barra4.style.width = '12.29' * bounceProgress + '%';
        barra4.style.transform =
            'scaleX(' + scaleX + ') ' + 'scaleY(' + scaleY + ')';
    }
}).play();

new mojs.Tween({
    delay: 500,
    duration: 1500,
    onUpdate: function(progress) {
        var bounceProgress = extremeInOutEasing(progress);
        squashProgress = squashCurve(progress),
            scaleX = 1 - 3 * squashProgress,
            scaleY = 1 + 3 * squashProgress;
        barra5.style.width = '6.78' * bounceProgress + '%';
        barra5.style.transform =
            'scaleX(' + scaleX + ') ' + 'scaleY(' + scaleY + ')';
    }
}).play();

new mojs.Tween({
    delay: 500,
    duration: 1500,
    onUpdate: function(progress) {
        var bounceProgress = extremeInOutEasing(progress);
        squashProgress = squashCurve(progress),
            scaleX = 1 - 3 * squashProgress,
            scaleY = 1 + 3 * squashProgress;
        barra6.style.width = '10.83' * bounceProgress + '%';
        barra6.style.transform =
            'scaleX(' + scaleX + ') ' + 'scaleY(' + scaleY + ')';
    }
}).play();

//Javascript puro para añadir un clase con un click sin soporte para IE9
[].forEach.call(document.querySelector('#buscador'), function(el) {
    el.addEventListener('click', function() {
        document.querySelector('.prueba').classList.add('wrap');
    }, false);
});
