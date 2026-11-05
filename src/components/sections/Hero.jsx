import {useState} from "react"

const Hero = () => {
    const hero = [
        { name: "8 years", title: "in beauty" },
        { name: "1,200+", title: "happy client" },
        { name: "Sun to Sat", title: "10am to 6pm" }
    ]

    const buttonColor = [
        { name: "#b3294e" }, { name: "#6a1b5a" }, { name: "#e58ab0" },
        { name: "#e2674a" }, { name: "#7d1030" }
        
    ]

    const [btnColor, setBtnColor] = useState("#b3294e")

    return (
        <div className="container pt-30 p-7 flex itemSpan WeekSitting gap-5">
            <div className="">
                <h1 className="text-[clamp(2.3rem,6vw,4rem)]">Flawless looks,<span style={{color: btnColor}}>every time.</span></h1>
                <p className="text-text-muted text-lg">Bridal and event makeup, lashes, gele and shoots in Alimosho,
                    Lagos. Pick your shade, then book in two taps.
                </p>
                <div className="flex gap-5 pt-5">
                    <button className="bg-button text-text-soft duration-300 ease-in-out hover:scale-105 transition hover:text-text p-2 rounded-full font-bold">
                        <a href="#contact">
                            Book now
                        </a> 
                    </button>
                    <button className="text-text border-2 border-border duration-300 ease-in-out hover:scale-105 transition rounded-full font-bold p-2 hover:text-text-muted">
                        <a href="#service">
                            View services
                        </a> 
                    </button>
                </div>
                <div className="flex gap-5 mt-5 flex-wrap">
                    {hero.map((h, index) => (
                        <span key={index}>
                            <h1 className="text-xl">{h.name}</h1>
                            <p className="text-text-muted">{h.title}</p>
                        </span>
                    ))}
                </div>
            </div>
            <div style={{ borderColor: btnColor }} className={`duration-300 ease-in-out hover:scale-105 transition border-2 p-5 rounded-3xl w-full space-y-5 mt-10 flex flex-col justify-between`}>
                <div style={{backgroundColor: btnColor}} className="h-30 w-full flex gap-3 justify-center items-center flex-col">
                    <div className="h-10 w-10 rounded-full bg-[#b9714f]"></div>
                    <div className="bg-[#b9714f] h-10 w-15 flex justify-center p-2">
                        <div style={{ backgroundColor: btnColor }} className="h-5 w-5 rounded-4xl"></div>
                    </div>
                </div>
               <div className="space-y-3">
                    <h1>Color palette</h1>
                    <p className="text-text-muted">Choose a preferred palette</p>

                    <div className="flex gap-3 flex-wrap">
                        {buttonColor.map((b, index) => (
                            <div key={index} className={`${btnColor === b.name ? "border-text" : "border-border"}  h-10 w-10 flex justify-center items-center border-2 rounded-full hover:border-text`}>
                                <button onClick={(e) => setBtnColor(`${b.name}`)} value={`${b.name}`} style={{backgroundColor: b.name}} className={`rounded-full bg-[${b.name}] h-8 w-8`}></button>
                            </div>
                        ))}
                    </div>
               </div>
            </div>
        </div>
    )
}

export default Hero
