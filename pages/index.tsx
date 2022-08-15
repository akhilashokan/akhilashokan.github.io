import About from "../components/about"
import Banner from "../components/banner"
import Header from "../components/header"
import Works from "../components/works"

export default () => {
    return (<>
        <Header />
        <main>
            <Banner />
            <About />
            <Works />
        </main>
    </>)
}