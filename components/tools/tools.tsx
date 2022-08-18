import style from "./tools.module.scss"
import Images from "next/image"
export default function Tools() {
    return (
        <section className={style.skills}>
            <div className={style.skills_container}>
                <div className={style.skill}>
                    <Images src={'/tools/flutter.svg'} title={'Flutter'} width={40} height={40} />
                </div>
                <div className={style.skill}>
                    <Images src={'/tools/typescript.svg'} title={'TypeScript'} width={40} height={40} />
                </div>
                <div className={style.skill}>
                    <Images src={'/tools/firebase.svg'} title={'Firebase'} width={40} height={40} />
                </div>
                <div className={style.skill}>
                    <Images src={'/tools/nodejs.svg'} title={'NodeJS'} width={40} height={40} />
                </div>
                <div className={style.skill}>
                    <Images src={'/tools/nextjs.svg'} title={'nextJS'} width={40} height={40} />
                </div>
            </div>
        </section>
    )
}