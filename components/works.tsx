'use client'
import { ReactElement, useEffect, useState } from "react"
import Section from "./Section"
type Work = {
    title: string;
    subTitle?: string;
    description?: string;
    buildWith?: string;
    link?: string;
    thumb?: string;
}

export default function Works() {
    const [works, setWorks] = useState<Work[]>([]);
    const [isLoading, setLoading] = useState(false)
    const regxUrl = /^https?:\/\/(?:www\.)?[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b(?:[-a-zA-Z0-9()@:%_\+.~#?&\/=]*)$/

    useEffect(() => {
        setLoading(true)
        fetch('https://akhilprops.netlify.app/get/works')
            .then(res => res.json())
            .then(data => setWorks(data))
            .catch(err => console.info('Prop fetch failed.', err))
            .finally(() => setLoading(false))
    }, []);

    if (isLoading) return (<div className="flex justify-center font-primary opacity-50 text-2xl">Loading...</div>);

    if (!works) return (<div className="flex justify-center opacity-50"><em>Failed to load works</em></div>);

    return (
        <Section name="works">
            <div className="flex flex-col gap-10 py-10">
                {!isLoading && Array.isArray(works) && works?.map((work: Work, index: number) => {
                    var link: ReactElement
                    var thumb: string = ''
                    // work.thumb.match(/\.(jpg|png|webp)$/) !== null ? encodeURI(work.thumb) : ''  todo 
                    link = <a href={work?.link} title={"Link to " + work?.title} className="ml-auto" rel="noreferrer" target={"_blank"}>
                        <svg xmlns="http://www.w3.org/2000/svg" width={20} height={20} fill="none" stroke="#333" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24">
                            <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6m4-3h6v6m-11 5L21 3" />
                        </svg>
                    </a>

                    return (
                        <div tabIndex={index} title={work?.title} className="group/work" key={`workId_${index}`} style={{ backgroundImage: thumb ? `url(${thumb})` : '' }} >
                            <div className="flex items-end gap-2 relative py-4 flex-wrap">
                                <h3 className="text-3xl block w-full lg:text-6xl font-primary capitalize">{work?.title}</h3>
                                <p className="opacity-80 text-base">{work?.buildWith}</p>
                                {work?.link?.match(regxUrl) !== null && link}
                                <span className="absolute w-full h-[1px] left-0 bottom-0 bg-gray-400 transition-all duration-500 ease-in-out max-w-0 group-hover/work:max-w-full"></span>
                            </div>
                            <div className="transition-all duration-300 ease-in-out overflow-hidden max-h-0 group-hover/work:max-h-80 group-focus-within/work:max-h-80">
                                <p>{work?.description}</p>
                            </div>
                        </div>
                    )
                })}
            </div>
        </Section>
    )
}