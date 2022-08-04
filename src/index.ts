document.addEventListener('readystatechange', () => {
    if (document.readyState === "complete") {
        greet()
        loadWorks()
    }
})

function greet(): void {
    const HOUR: number = new Date().getHours()
    const greetElement = document.getElementById('__greeting')
    if (HOUR >= 5 && HOUR <= 19) {
        greetElement.innerHTML = HOUR >= 12 ? 'afternoon' : 'morning'
    }
}

async function loadWorks() {
    type work = {
        title: string,
        subTitle: string,
        description: string,
        buildWith: string,
        link: string,
        thumb: string
    }
    const works: [work] = await fetch('/works.json')
        .then(response => response.json())

    const workContainer = document.querySelector('#_works')
    const regxUrl = /^https?:\/\/(?:www\.)?[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b(?:[-a-zA-Z0-9()@:%_\+.~#?&\/=]*)$/
    works.forEach(work => {
        var container = document.createElement('div')
        var title = document.createElement('h3')
        var description = document.createElement('p')

        if (work.thumb.match(/\.(jpg|png|webp)$/) !== null) container.setAttribute('thumb', encodeURI(work.thumb))

        if (work.link.match(regxUrl) !== null) {
            var _link = document.createElement('a')
            _link.setAttribute('href', work.link)
            _link.setAttribute('target', 'blank')
            _link.innerHTML = "goto";
            container.appendChild(_link)
        }
        title.innerText = work.title
        description.innerText = work.description
        container.appendChild(title)
        container.appendChild(description)
        container.setAttribute('name', work.title)
        container.classList.add('work')

        workContainer.appendChild(container)
    })


}
function loadMore(e: HTMLElement) {
    e.remove()
    var text = 'I am interested in all kinds of development,so far i have dabbled with android (java), flutter (Windows), react, and python (tkinter/flask) to build apps. I really appreciate learning about new things and how things function behind the scenes.'
    var para = document.querySelector('.about h2')
    var array = text.trim().split(" ")

    array.forEach(item => {
        var t = document.createElement('span')
        t.classList.add('_spans')
        t.innerText = item + ' '
        para.appendChild(t);
    })
    gsap.to('._spans', { display: 'inline', stagger: .05 })
    gsap.to('._spans', { opacity: 1, stagger: .05 })
}
