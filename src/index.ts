document.addEventListener('readystatechange', () => {
    if (document.readyState === "complete") {
        greet();
        loadWorks()
    }
})

function greet(): void {
    const HOUR: number = new Date().getHours()
    const greetElement = document.getElementById('__greeting')
    if (HOUR >= 5) {
        greetElement.innerHTML = HOUR >= 12 ? 'afternoon' : 'morning'
    }
}

async function loadWorks() {
    type work = {
        name: string,
        description: string,
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
        if (work.thumb.match(regxUrl) !== null) container.style.backgroundImage = encodeURI(work.thumb)

        title.innerText = work.name
        description.innerText = work.description
        container.appendChild(title)
        container.appendChild(description)

        workContainer.appendChild(container)
    })

}