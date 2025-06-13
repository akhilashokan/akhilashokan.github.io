import Section from "./Section";

export default function Contact() {
    return (
        <Section name="contact">
            <h3 className="flex justify-center items-center text-base sm:text-2xl lg:text-4xl font-primary gap-1">connect.akhilashokan@gmail.com
                <a href="mailto:connect.akhilashokan@gmail.com">
                    <svg className="w-4 lg:w-8" xmlns="http://www.w3.org/2000/svg" width={30} fill="none" stroke="#333" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24">
                        <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6m4-3h6v6m-11 5L21 3" />
                    </svg>
                </a>
            </h3>
        </Section>
    )
}