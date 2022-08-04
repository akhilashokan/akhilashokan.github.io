export default function Banner() {
    var greeting = greet()
    function greet(): string {
        const HOUR: number = new Date().getHours()
        var greet = 'evening'
        if (HOUR >= 5 && HOUR <= 19) {
            greet = HOUR >= 12 ? 'afternoon' : 'morning'
        }
        return greet;
    }
    return (
        <section className="banner">
            <div className="wrapper">
                <h1 className="intro" attr-raft="web developer">
                    <span className="__hello">Hello</span> there! good {greeting} <br />
                    <span className="__name">
                        <span className="__iam">Iam</span>
                        Akhil Ashokan
                    </span>
                </h1>
            </div>
        </section>
    );
}