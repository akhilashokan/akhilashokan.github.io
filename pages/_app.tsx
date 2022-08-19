import "./style.scss"
import Head from "next/head"
import { useRouter } from "next/router"
import { useEffect } from "react"
import gsap from "gsap"
export default function Portfolio({ Component, pageProps }) {
    return (
        <>
            <Head>
                <meta charSet="utf-8" />
                <meta name="viewport" content="initial-scale=1.0, width=device-width" />
                <title>Akhil Ashokan</title>
                <link rel="icon" href="https://raw.githubusercontent.com/akhilashokan/akhilashokan.github.io/react/public/favicon.ico" />
            </Head>
            <Splash />
            <Component {...pageProps} />
        </>
    )
}
function Splash() {
    const router = useRouter()
    useEffect(() => {
        gsap.set("main", { opacity: 0 })
        gsap.to("._splash", { delay: "0.5", x: "-100%" })
        gsap.to("main", { delay: "0.5", opacity: 1 })
        const loadingStart = (url: string) => (url !== router.asPath) && startLoading()
        const loadingComplete = (url: string) => (url === router.asPath) && setTimeout(() => { stopLoading() }, 1000)
        router.events.on('routeChangeStart', loadingStart)
        router.events.on('routeChangeComplete', loadingComplete)
        router.events.on('routeChangeError', loadingComplete)

        return () => {
            router.events.off('routeChangeStart', loadingStart)
            router.events.off('routeChangeComplete', loadingComplete)
            router.events.off('routeChangeError', loadingComplete)
        }
    })
    function startLoading() {
        gsap.to("body main", { opacity: 0 })
        gsap.to("._splash", { x: 0 })
    }
    function stopLoading() {
        gsap.to("body main", { opacity: 1 })
        gsap.to("._splash", { x: "-100%" })
    }

    return <div className="_splash"></div>
}