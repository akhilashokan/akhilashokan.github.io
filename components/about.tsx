'use client'
import gsap from "gsap";
import { SyntheticEvent, useMemo, useRef } from "react";
import Section from "./Section";

export default function About() {
    const paraRef = useRef(null);
    const more_text = 'I am interested in all kinds of development,so far i have dabbled with android (java), flutter (Windows), react, and python (tkinter/flask) to build apps. I really appreciate learning about new things and how things function behind the scenes.'
    const more_text_array = useMemo(() => more_text.trim().split(" "), [more_text]);

    const loadMore = (e: SyntheticEvent) => {
        e.currentTarget.remove()
        if (!paraRef) return
        more_text_array.forEach(word => {
            const tempSpan = document.createElement('span');
            tempSpan.style.display = 'none';
            tempSpan.style.opacity = '0.5';
            tempSpan.innerText = word + ' '
            paraRef.current.appendChild(tempSpan);
        })
        gsap.to(".__about span", { display: 'inline', stagger: .05 })
        gsap.to(".__about span", { opacity: 1, stagger: .05 })
    }

    return (
        <Section name="about">
            <div>
                <h2 ref={paraRef} className="__about text-2xl/normal md:text-4xl/normal lg:text-6xl/normal font-primary">
                    I am a full stack web developer based in India building fast, clean websites and apps since 2019.
                    <span onClick={loadMore} className="opacity-50 cursor-pointer after:content-['...']" title="know more ?">
                        I am
                    </span>
                </h2>
            </div>
        </Section>
    );
}