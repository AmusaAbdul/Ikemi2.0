
const Testimonials = () => {
    const testimonial = [
        { testimonial: "My makeup lasted from the church to the reception without a single touch-up.", name: "Chidinma, bride"},
        { testimonial: "She listened, she was on time, and my gele stayed perfectly in place throughout the whole event.", name: "Tosin, regular" },
        { testimonial: "Booked her in the morning and sat in her chair by evening. Easy.", name: "Bisola, event guest" }
    ]
    return (
        <div className="bg-border">
            <div className="container p-5 pt-25">
                <h1 className="text-3xl lg:text-4xl font-heading">What clients say</h1>
                <p className="text-text-muted">Real words from real brides and regulars.</p>

                <div className="flex justify-between gap-5 itemSpan WeekSitting mt-5 ">
                    {testimonial.map((t, index) => (
                        <div key={index} className="border border-brand space-y-5 duration-300 ease-in-out hover:scale-105 transition flex flex-col itemSpan rounded-2xl p-5 w-75">
                            <h1 className="text-xl">{t.testimonial}</h1>
                            <p className="text-text-muted">{t.name}</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Testimonials
