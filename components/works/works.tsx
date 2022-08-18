import gsap from "gsap"
import react, { FocusEventHandler, ReactElement, useEffect, useState } from "react"
import style from "./works.module.scss"
type Work = {
    title: string,
    subTitle: string,
    description: string,
    buildWith: string,
    link: string,
    thumb: string
}

export default function Works() {
    const [works, setWorks] = useState(null)
    const [isLoading, setLoading] = useState(false)
    const regxUrl = /^https?:\/\/(?:www\.)?[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b(?:[-a-zA-Z0-9()@:%_\+.~#?&\/=]*)$/

    useEffect(() => {
        setLoading(true)
        fetch('https://akhilprops.netlify.app/get/works')
            .then(res => res.json())
            .then(data => {
                setWorks(data)
                setLoading(false)
            })
    }, [])

    if (isLoading)
        return (
            <section className="works">
                <div className="wrapper column">
                    <h2 className={style.loading} >Loading...</h2>
                </div>
            </section>
        )


    if (!works) return (
        <section className="works">
            <div className="wrapper column">
                <h2>no works yet</h2>
            </div>
        </section>
    )

    return (
        <section className="works">
            <div className="wrapper column">
                <div className={style.works_container} id="__id">
                    {works.map((work: Work, index: number) => {
                        var link: ReactElement
                        var thumb: string = ''
                        // work.thumb.match(/\.(jpg|png|webp)$/) !== null ? encodeURI(work.thumb) : ''  todo 
                        link = <a href={work.link} title={"Link to " + work.title} className={style.link} rel="noreferrer" target={"_blank"}>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" stroke="#333" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24">
                                <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6m4-3h6v6m-11 5L21 3" />
                            </svg>
                        </a>

                        return (
                            <div tabIndex={index} title={work.title} className={`${style.work} __closed`} key={index} style={{ backgroundImage: `url(${thumb})` }} >
                                <div className={style.header}>
                                    <h3>{work.title}</h3>
                                    <p>{work.buildWith}</p>
                                </div>
                                {work.link.match(regxUrl) !== null && link}
                                <div className={style.description}>
                                    <p>{work.description}</p>
                                </div>
                            </div>
                        )
                    })}
                </div>
            </div>
        </section>
    )
}