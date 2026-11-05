
const Gallery = () => {
    return (
        <div className="bg-border">
            <div className="container p-5 pt-25">
                <h1 className="text-3xl lg:text-4xl font-heading">Recent work</h1>
                <p className="text-text-muted">A few looks from this season. More on Instagram.</p>

                <div className="grid mt-5">
                    <div className="tile a bg-rouge duration-300 ease-in-out hover:scale-105 transition">Bridal glam</div>
                    <div className="tile b bg-[#6a1b5a] duration-300 ease-in-out hover:scale-105 transition">Soft glam</div>
                    <div className="tile c bg-[#e58ab0] duration-300 ease-in-out hover:scale-105 transition">Editorial</div>
                    <div className="tile d bg-[#e2674a] duration-300 ease-in-out hover:scale-105 transition">Lash set</div>
                    <div className="tile e bg-[#7d1030] duration-300 ease-in-out hover:scale-105 transition">Gele and makeup</div>
                    <div className="tile f bg-text-muted duration-300 ease-in-out hover:scale-105 transition">Owambe ready</div>
                </div>
            </div>
        </div>
    )
}

export default Gallery
