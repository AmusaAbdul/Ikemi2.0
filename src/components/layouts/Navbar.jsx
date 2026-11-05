
const Navbar = () => {

    return (
        <div className="border-border border-2 fixed w-full bg-[#1d0b17]">
            <div className="container">
                <div className="p-5 flex justify-between items-center">
                    <h1 className="text-2xl font-bold font-heading tracking-wider">Glam by Ikemi</h1>
                    <nav className="hidden text-text-muted md:flex gap-5">
                        <a className="hover:text-text duration-300 ease-in-out hover:scale-105 transition" href="#service">Service</a>
                        <a className="hover:text-text duration-300 ease-in-out hover:scale-105 transition" href="#gallery">Gallery</a>
                        <a className="hover:text-text duration-300 ease-in-out hover:scale-105 transition" href="#reviews">Reviews</a>
                        <a className="hover:text-text duration-300 ease-in-out hover:scale-105 transition" href="#location">Contact</a>
                    </nav>
                    <button className="bg-button text-text-soft duration-300 ease-in-out hover:scale-105 transition hover:text-text p-2 rounded-full font-bold">
                        <a href="#contact">
                            Book now
                        </a> 
                    </button>
                </div>
            </div>
        </div>
    )
}

export default Navbar
