import About from "../components/about/about"
import Banner from "../components/banner"
import Contact from "../components/contact/contact"
import Footer from "../components/footer/footer"
import Header from "../components/header/header"
import Tools from "../components/tools/tools"
import Works from "../components/works/works"

export default function App() {
    return (<>
        <Header />
        <main>
            <Banner />
            <About />
            <Works />
            <Tools />
            <Contact />
        </main>
        <Footer />
    </>)
}
App.displayName = "App"