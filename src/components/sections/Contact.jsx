import { site } from "../data/site";
import { whatsappLink, buildBookingMessage } from "../lib/Whatsapp";
import { useState } from "react"

const Contact = () => {
    const [other, setOther] = useState(false)
    const [studio, setStudio] = useState(false)


    function handleSubmit(e) {
        e.preventDefault();
        const form = new FormData(e.currentTarget);
        const msg = buildBookingMessage({
            name: form.get("name")?.trim(),
            service: form.get("service"),
            date: form.get("date"),
            time: form.get("time"),
            location: studio ? "Studio session" : form.get("location"),
            notes: form.get("notes")?.trim(),
        });
        window.open(whatsappLink(site.whatsapp, msg), "_blank", "noopener");
    }

    return (
        <div className="container p-5">
            <div className="p-5 bg-white mt-20 rounded-3xl">
                <div className="flex  itemSpan WeekSitting gap-5">
                    <div className="space-y-3">
                        <h1 className="text-border text-3xl font-bold lg:text-4xl font-heading">Book your slot</h1>
                        <p className="text-border">
                            Fill this in and we’ll respond with your request ready to send.
                            Ikemi replies within the hour.
                        </p>
                    </div>

                    <form onSubmit={handleSubmit} action="" className="flex flex-col gap-5 text-border w-full">
                        <span className="flex flex-col w-full">
                            <label htmlFor="name">Your name</label>
                            <input name="name" type="text" placeholder="Ikemi" className="itemSpan WeekSitting bg-border text-white rounded-xl p-2 " />
                        </span>

                        <span className="flex flex-col">
                            <label htmlFor="service">Service</label>
                            <select name="service" className="itemSpan WeekSitting bg-border rounded-xl p-4 text-white">
                                <option value="bridal">Bridal makeup</option>
                                <option value="softglam">Soft glam</option>
                                <option value="owambe">Owambe glam</option>
                                <option value="gele">Gele tying</option>
                                <option value="shoot">Shoot</option>
                            </select>
                        </span>

                        <span className="flex flex-col">
                            <label htmlFor="Preferred Date">Preferred Date</label>
                            <input name="date" type="date" className="itemSpan WeekSitting bg-border rounded-xl p-4 text-white" />
                        </span>

                        <span className="flex flex-col">
                            <label htmlFor="Preferred Time">Preferred Time</label>
                            <input name="time" type="time" className="itemSpan WeekSitting bg-border rounded-xl p-4 text-white" />
                        </span>

                        <span className="flex flex-col">
                            <label htmlFor="Location">Location</label>
                            <div className={`gap-5 ${other ? "hidden" : "flex"}`}>
                                <button type="button" onClick={() => setStudio(true)} name="location" className={`${studio ? "bg-green-700" : ""} p-2 duration-300 ease-in-out hover:scale-105 transition hover:bg-green-700 bg-border text-text rounded-full`}>Studio session</button>
                                <button type="button"  className="p-2 duration-300 ease-in-out hover:scale-105 transition bg-border text-text hover:bg-green-700 rounded-full" onClick={() => (setOther(true), setStudio(false))}>Preferred Location?</button>
                            </div>
                            {other ? 
                            <span className="w-full space-y-4">
                                    <input name="location" className="itemSpan WeekSitting bg-border w-full rounded-xl p-2 text-white" type="text" placeholder="12, St.Mary, Governor's Road, Ikotun" />
                                    <button onClick={() => setOther(false)} className="bg-border p-2 duration-300 ease-in-out hover:scale-105 transition hover:bg-amber-700 text-text rounded-full">Go Back</button>
                            </span> : ""
                            }
                        </span>

                        <span className="flex flex-col">
                            <label htmlFor="Note">Note</label>
                            <textarea name="notes" className="itemSpan  WeekSitting outline-none bg-border rounded-xl p-2 text-white" />
                        </span>

                        <button type="submit" className="bg-green-500 duration-300 ease-in-out hover:scale-105 transition rounded-full p-2 font-bold text-text hover:bg-green-800">SEND BOOKINGS</button>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Contact
