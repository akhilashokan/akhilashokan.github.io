import style from "./contact.module.scss"
export default function Contact() {
    return (
        <section className={style.contacts}>
            <div className={style.contact_methods}>
                <div className={style.method}>
                    <h3>connect.akhilashokan@gmail.com
                        <a href="mailto:connect.akhilashokan@gmail.com">
                            <svg xmlns="http://www.w3.org/2000/svg" width={'auto'} height={'100%'} fill="none" stroke="#333" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24">
                                <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6m4-3h6v6m-11 5L21 3" />
                            </svg>
                        </a>
                    </h3>
                </div>
            </div>
        </section>
    )
}