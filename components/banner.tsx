import { useEffect, useState } from "react";

export default function Banner() {
    const [greet, setGreet] = useState('evening')
    useEffect(() => {
        function greetUser(): void {
            const HOUR: number = new Date().getHours()
            if (HOUR >= 5 && HOUR <= 19) {
                HOUR >= 12 ? setGreet('afternoon') : setGreet('morning')
            }
        }
        greetUser()
    }, [])
    return (
        <section className="banner">
            <div className="wrapper">
                <h1 className="intro" attr-craft="web developer">
                    <span className="__hello">Hello</span> there! good {greet} <br />
                    <span className="__name">
                        <span className="__iam">Iam </span>
                        Akhil Ashokan
                    </span>
                </h1>
            </div>
        </section>
    );
}