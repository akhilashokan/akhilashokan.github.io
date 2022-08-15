import gsap from "gsap"
import react, { ReactElement, useEffect, useState } from "react"
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
                    {works.map((work: Work, index) => {
                        var thumb = ''
                        var link: ReactElement
                        if (work.thumb.match(/\.(jpg|png|webp)$/) !== null) thumb = encodeURI(work.thumb)

                        if (work.link.match(regxUrl) !== null) {
                            link = <a href={work.link} target={"_blank"}>
                                <svg xmlns="http://www.w3.org/2000/svg" xmlSpace="preserve" viewBox="0 0 195.085 195.085">
                                    <path d="M179.617 15.453c-.051-.05-.102-.1-.154-.149-18.689-18.549-48.477-20.463-69.37-4.441-2.091 1.599-3.776 3.053-5.302 4.575-.044.044-.087.088-.13.133L71.224 49.012c-2.929 2.929-2.929 7.678.001 10.606 2.93 2.93 7.679 2.929 10.606-.001l33.561-33.566c.035-.035.069-.07.104-.105 1.023-1.01 2.205-2.02 3.715-3.174 15.008-11.508 36.411-10.098 49.789 3.281.044.044.089.088.134.131 14.652 14.786 14.611 38.742-.124 53.483l-33.559 33.563c-2.929 2.929-2.929 7.678.001 10.606 1.465 1.464 3.384 2.196 5.303 2.196s3.839-.732 5.304-2.197l33.56-33.563c20.622-20.631 20.622-54.195-.002-74.819zM113.23 135.437l-33.541 33.542a9.483 9.483 0 0 0-.196.205c-3.708 3.648-8.059 6.449-12.945 8.333-13.995 5.418-29.888 2.07-40.481-8.524-14.768-14.784-14.768-38.84 0-53.619L59.624 81.83a7.5057 7.5057 0 0 0 2.197-5.305v-.013c0-4.143-3.357-7.494-7.5-7.494-2.135 0-4.062.895-5.428 2.328l-33.435 33.422c-20.61 20.628-20.612 54.195-.002 74.828 10.095 10.097 23.628 15.479 37.411 15.479a52.871 52.871 0 0 0 19.084-3.566c6.922-2.667 13.088-6.67 18.326-11.896.076-.075.15-.153.223-.232l33.337-33.337c2.929-2.93 2.929-7.678-.001-10.607-2.927-2.928-7.676-2.928-10.606 0z" />
                                    <path d="M59.15 135.908c1.465 1.465 3.384 2.197 5.304 2.197 1.919 0 3.839-.732 5.303-2.196l66.164-66.161c2.93-2.929 2.93-7.678.001-10.606-2.929-2.93-7.678-2.929-10.606-.001l-66.164 66.161c-2.931 2.928-2.931 7.677-.002 10.606z" />
                                </svg>
                            </a>
                        }

                        return (
                            <div className={style.work} key={index} style={{ backgroundImage: `url(${thumb})` }} >
                                {link}
                                <h3>{work.title}</h3>
                                <p>{work.subTitle}</p>
                            </div>
                        )
                    })}
                </div>
            </div>
        </section>
    )
}


