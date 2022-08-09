import About from "../components/about"
import Banner from "../components/banner"
import Header from "../components/header"

export default () => {
    return (<>
        <Header />
        <main>
            <Banner />
            <About />
        </main>
    </>)
}