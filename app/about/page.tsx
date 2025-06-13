export const metadata = {
    title: 'About',
    description: 'About Akhil Ashokan',
}
export default function () {
    return (
        <section className="mt-24 text-gray-800 max-w-[1600px] mx-auto font-[Arial,Helvetica] text-2xl splash">
            <h1 className="font-primary text-6xl mb-14" >About</h1>

            <p className="text-2xl md:text-5xl font-medium max-w-[45ch]">
                I am a Full Stack Developer from India who aims to creates fast,
                clean websites and apps.I am also a <em title="assassins creed FTW">gamer</em> at heart.
            </p>
            <p className="text-lg md:text-2xl font-light max-w-[65ch] mt-4">
                I am interested in all kinds of development and really appreciate learning about
                new things and how things function behind the scenes.
                So far I have dabbled with <em title="Catering App">android (java)</em>,
                <em title="PropMan">flutter (Windows)</em>, <em title="this site :)">react</em>, and
                <em title="learned them to teach my cousin sis"> python (tkinter/flask)</em> to build apps.
            </p>
            <p className="text-lg md:text-2xl mt-4 mb-16">
                For more information here is my <strong><a className="text-green-600" title="link to my resume" href="https://github.com/akhilashokan/akhilashokan.github.io/raw/react/public/AkhilAshokanResume.pdf"> full resume</a></strong> .
            </p>
        </section>
    )
}