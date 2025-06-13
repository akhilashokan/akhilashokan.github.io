import { ReactNode } from "react";
type SectionType = {
    name: string;
    children: ReactNode;
    className?: string;
}

export default function Section({ name, children, className = '' }: SectionType) {
    return (
        <section className={`relative mt-32 mb-16 pt-10 ${className}`}>
            <span className="absolute right-0 top-0 text-8xl translate-y-[-60%] select-none z-[-1] opacity-[0.025]">{name}</span>
            {children}
        </section>
    )
}