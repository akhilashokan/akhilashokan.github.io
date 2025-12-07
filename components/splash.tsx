'use client'
import { useEffect, useRef } from "react"
import { EventEmitter as Emitter } from "./eventEmitter";

export default function Splash() {
    const ref = useRef(null);
    let timer: NodeJS.Timeout = null;

    useEffect(() => {
        const element: HTMLDivElement = ref.current;

        timer = setTimeout(() => {
            element.style.transform = 'translateX(-100%)';
        }, 400);

        Emitter.addEventListener('splashActive', handleSplashActive);

        return (() => {
            clearTimeout(timer);
            Emitter.removeEventListener('splashActive', handleSplashActive)
        })
    }, [])

    function handleSplashActive({ detail }: CustomEvent) {
        const splashStatus = Boolean(detail?.show);
        const element: HTMLDivElement = ref.current;

        if (!element) return;
        if (!splashStatus) return;
        if (timer) clearTimeout(timer);

        element.style.transform = 'translateX(0%)';
        timer = setTimeout(() => {
            element.style.transform = 'translateX(-100%)';
        }, 400);
    }
    return (
        <div className="transition-transform duration-400 w-full h-dvh fixed inset-0 bg-[hsla(0,0%,100%,.4)] dark:bg-[hsla(0,0%,20%,.4)] backdrop-blur-[24px] z-20 cursor-progress" ref={ref}></div>
    )
}