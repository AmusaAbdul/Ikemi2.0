import {useState} from "react"

const Services = () => {
    const [button, setButton] = useState("Makeup")

    const service = [
        {name: "Bridal makeup", hours: "3hrs", price: "150000"},
        { name: "Soft glam", hours: "2hrs", price: "50000" },
        { name: "Owambe glam", hours: "2hrs", price: "50000" },
        {name: "Gele tying", hours: "10mins", price: "20000"},
        {name: "Shoot", hours: "30mins", price: "30000"}
    ]

    const filteredService = button === "Makeup" ? service : service.filter(s => s.name === button)

    const formatter = new Intl.NumberFormat('en-NG', {
        style: 'currency',
        currency: 'NGN',

        minimumFractionDigits: 0,
        maximumFractionDigits: 2,
    });
    return (
        <div className="container p-5 pt-25 space-y-3">
            <h1 className="text-3xl lg:text-4xl font-heading">Services and prices</h1>
            <p className="text-text-muted">Clear prices, no surprises. Tap Book on anything to message us with it already filled in.</p>

            <div className="flex gap-3 mt-5">
                <button onClick={() => setButton("Makeup")} value={"Makeup"} className={`${button === "Makeup" ? "bg-white text-black" : ""} border-border hover:bg-white hover:text-black p-3 duration-300 ease-in-out hover:scale-105 transition border rounded-full`}>Makeup</button>
                <button onClick={() => setButton("Gele tying")} value={"Gele tying"} className={`${button === "Gele tying" ? "bg-white text-black" : ""} border-border p-3 border hover:bg-white duration-300 ease-in-out hover:scale-105 transition hover:text-black rounded-full`}>Gele</button>
                <button onClick={() => setButton("Shoot")} value={"Shoot"} className={`${button === "Shoot" ? "bg-white text-black" : ""} border-border p-3 hover:bg-white hover:text-black border duration-300 ease-in-out hover:scale-105 transition rounded-full`}>Shoot</button>
            </div>
            <div className="rounded-2xl border-2 border-border  space-y-5 mt-5">
                    {filteredService.map((s, index) => (
                        <div key = { index }>
                            <div  className="flex justify-between p-3">
                                <span className="flex flex-col justify-center ">
                                    <h1 className="md:text-xl">{s.name}</h1>
                                    <p className="text-text-muted">{s.hours}</p>
                                </span>
                                <span className="flex flex-col md:flex-row flex-wrap gap-5 justify-center items-center">
                                    <h1 className="md:text-xl">{formatter.format(s.price)}</h1>
                                    <button className="border border-border rounded-2xl p-2 hover:bg-white duration-300 ease-in-out hover:scale-105 transition hover:text-black">
                                        <a href="#contact">
                                            Book 
                                        </a>
                                    </button>
                                </span>
                            </div>
                            {index !== service.length - 1 && (
                                <hr className="border-t border-border" />
                            )}                        
                        </div>
                    ))}
            </div>
        </div>
    )
}

export default Services
