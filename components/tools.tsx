import Images from "next/image"
import Section from "./Section"
export default function Tools() {
    return (
        <Section name="tools">
            <div className="flex flex-wrap items-center gap-2 justify-evenly">
                <div>
                    <Images alt="flutter logo" src={'/tools/flutter.svg'} title={'Flutter'} width={40} height={40} />
                </div>
                <div>
                    <Images alt="typescript logo" src={'/tools/typescript.svg'} title={'TypeScript'} width={40} height={40} />
                </div>
                <div>
                    <Images alt="firebase logo" src={'/tools/firebase.svg'} title={'Firebase'} width={40} height={40} />
                </div>
                <div>
                    <Images alt="nodejs logo" src={'/tools/nodejs.svg'} title={'NodeJS'} width={40} height={40} />
                </div>
                <div>
                    <Images alt="nextjs logo" src={'/tools/nextjs.svg'} title={'nextJS'} width={40} height={40} />
                </div>
                <div>
                    <Images alt="php logo" src={'/tools/php.svg'} title={'php'} width={40} height={40} />
                </div>
            </div>
        </Section>
    )
}