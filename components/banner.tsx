'use client'
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
        <section className="h-[90vh] flex items-center">
            <h1 className="font-primary text-2xl/tight md:text-6xl/tight lg:text-7xl/tight relative">
                <span className="max-md:text-8xl max-md:block">Hello</span> there! good {greet} <br />
                <span className="max-md:block max-md:mt-[20vh] max-md:text-5xl">
                    <span className="max-md:block max-md:text-base">Iam </span>Akhil Ashokan
                </span>
                <span className="absolute left-0 bottom-0 transform-[translateY(100%)] text-base md:text-2xl">web developer</span>
            </h1>
        </section>
    );
}