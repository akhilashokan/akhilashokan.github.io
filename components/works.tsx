import react, { useEffect, useState } from "react"

export default function Works() {
    const [works, setWorks] = useState(null)
    const [isLoading, setLoading] = useState(false)

    useEffect(() => {
        setLoading(true)
        fetch('https://akhilprops.netlify.app/get/works')
            .then(res => res.json())
            .then(data => {
                console.log(data)
                setWorks(data)
                setLoading(false)
            })
    }, [])

    if (!works) return <h2>no works yet</h2>
    if (isLoading) return <p>Loading...</p>
    return (
        <section className="works">
            <div className="wrapper column">
                <header>
                    <h2>Works</h2>
                </header>
                <div className="works_container" >
                    {works.map((data, index) => {
                        return <p>{data.title}</p>
                    })}
                </div>
            </div>
        </section>
    )
}
