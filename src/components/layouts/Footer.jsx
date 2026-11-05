
const Footer = () => {

    const year = new Date().getFullYear()
    return (
        <div className="container p-5 pt-20 flex justify-between items-center flex-wrap gap-5">
            <h1 className="text-text-muted">@{year} Glam by Ikemi</h1>
            <h1 className="text-text-muted border-border">
                Built by <a className="border border-border p-2 duration-300 ease-in-out hover:scale-105 transition" href="https://amusadev.vercel.app/">Abdullah</a>
            </h1>

        </div>
    )
}

export default Footer
