document.addEventListener('readystatechange', function () {
    document.readyState === "interactive" ? greet() : '';
});
function greet() {
    var HOUR = new Date().getHours();
    var greetElement = document.getElementById('__greeting');
    if (HOUR >= 5) {
        greetElement.innerHTML = HOUR >= 12 ? 'afternoon' : 'morning';
    }
}
