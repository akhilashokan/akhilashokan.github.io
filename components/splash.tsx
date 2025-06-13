'use client'
import { useEffect, useRef } from "react"

export default function () {
    const ref = useRef();
    console.log('test');
    
    useEffect(() => {
        const element: HTMLDivElement = ref.current;
        const timeout = setTimeout(() => {
            element.style.transform = 'translateX(-100%)'
        }, 500);
        return (() => {
            clearTimeout(timeout);
        })
    }, [])
    return (
        <div className="transition-transform duration-400 w-full h-dvh fixed inset-0 bg-[hsla(0,0%,100%,.6)] backdrop-blur-[10px] z-20 cursor-progress" ref={ref}></div>
    )
}