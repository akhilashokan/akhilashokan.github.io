import style from "./tools.module.scss"
import Images from "next/image"
export default function Tools() {
    return (
        <section className={style.skills}>
            <div className={style.skills_container}>
                <div className={style.skill}>
                    <Images src={'/tools/flutter.svg'} title={'Flutter'} width={50} height={50} />
                </div>
                <div className={style.skill}>
                    <Images src={'/tools/typescript.svg'} title={'TypeScript'} width={50} height={50} />
                </div>
                <div className={style.skill}>
                    <Images src={'/tools/firebase.svg'} title={'Firebase'} width={50} height={50} />
                </div>
                <div className={style.skill}>
                    <Images src={'/tools/nodejs.svg'} title={'NodeJS'} width={50} height={50} />
                </div>
                <div className={style.skill}>
                    <Images src={'/tools/nextjs.svg'} title={'nextJS'} width={50} height={50} />
                </div>
            </div>
        </section>
    )
}