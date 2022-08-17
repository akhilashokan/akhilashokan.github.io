import gsap from "gsap";
import { SyntheticEvent } from "react";
import style from "./about.module.scss"
export default function About() {
    const loadMore = (e: SyntheticEvent) => {
        e.currentTarget.remove()

        var text = 'I am interested in all kinds of development,so far i have dabbled with android (java), flutter (Windows), react, and python (tkinter/flask) to build apps. I really appreciate learning about new things and how things function behind the scenes.'
        var para = document.querySelector('#__aboutH2')
        var array = text.trim().split(" ")
        var span = style._spans
        console.log(span);

        array.forEach(item => {
            var t = document.createElement('span')
            t.classList.add(span)
            t.innerText = item + ' '
            para.appendChild(t);
        })
        gsap.to("." + span, { display: 'inline', stagger: .05 })
        gsap.to("." + span, { opacity: 1, stagger: .05 })
    }
    return (
        <section className={style.about}>
            <div className="wrapper">
                <div className="block">
                    <h2 id="__aboutH2">I am a full stack web developer based in India
                        building fast, clean websites and apps since 2019.
                        <span onClick={loadMore} className={style._showMore} title="know more ?">
                            I am
                        </span>
                    </h2>
                </div>
            </div>
        </section>
    );
}