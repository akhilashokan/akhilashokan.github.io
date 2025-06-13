import About from "../components/about";
import Banner from "../components/banner";
import Contact from "../components/contact";
import Tools from "../components/tools";
import Works from "../components/works";

export default function Page() {
    return <>
        <Banner />
        <About />
        <Works />
        <Tools />
        <Contact />
    </>
}