import About from "../components/about"
import Banner from "../components/banner"
import Footer from "../components/footer/footer"
import Header from "../components/header/header"
import Works from "../components/works/works"

export default () => {
    return (<>
        <Header />
        <main>
            <Banner />
            <About />
            <Works />
        </main>
        <Footer />
    </>)
}