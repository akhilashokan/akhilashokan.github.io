
import Link from "next/link"
import Footer from "../components/footer/footer"
import Header from "../components/header/header"
export default function About() {
    return (<>
        <Header />
        <main className="aboutPage">
            <section>
                <h1>About</h1>
            </section>

            <p className="__intro">
                I am an Indian Full Stack Developer who aims to creates fast,
                clean websites and apps.I am also a <em title="assassins creed FTW">gamer</em> at heart.
            </p>
            <p className="__intro_extras">
                I am interested in all kinds of development and really appreciate learning about
                new things and how things function behind the scenes.
                So far I have dabbled with <em title="Catering App">android (java)</em>,
                <em title="PropMan">flutter (Windows)</em>, <em title="this site :)">react</em>, and
                <em title="learned them to teach my cousin sis">python (tkinter/flask)</em> to build apps.
            </p>
            <p className="__intro_extras">
                For more information here is my <strong><a title="link to my resume" href={"/AkhilAshokanResume.pdf"}> full resume</a></strong> .
            </p>
        </main>
        <Footer />
    </>)
}