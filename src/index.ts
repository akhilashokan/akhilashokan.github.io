document.addEventListener('readystatechange', () => {
    if (document.readyState === "complete") {
        greet();
    }
})

function greet(): void {
    const HOUR: number = new Date().getHours()
    const greetElement = document.getElementById('__greeting')
    if (HOUR >= 5) {
        greetElement.innerHTML = HOUR >= 12 ? 'afternoon' : 'morning'
    }
}