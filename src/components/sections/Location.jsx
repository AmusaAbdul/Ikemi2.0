
const Location = () => {
  const openLink = (url) => {
    window.open(url, "_blank", "noopener,noreferrer");
  };

  const address = [
    {name: "Address", content: "Alake, Ikotun-Idimu Rd, Lagos"},
    {name: "Hours", content: "Sunday to Saturday, 10am to 6pm"},
    {name: "Phone", content: "09055444513"}
  ]
  return (
    <div className="container p-5 pt-30 flex itemSpan WeekSitting gap-15 items-center">
      <div className="space-y-2">
        <h1 className="text-3xl lg:text-4xl font-heading">Find us</h1>
        <p className="text-text-muted">Walk-ins welcome when we have space, but booking keeps your spot.</p>

        <div className="mt-10 space-y-3 flex flex-col">
          {address.map((add, index) => (
            <span key={index}>
              <h1 className="text-xl">{add.name}</h1>
              <p className="text-text-muted">{add.content}</p>
            </span>
          ))}
        </div>
        <div className="flex gap-5 flex-wrap mt-5">
          <button onClick={() => openLink("https://wa.me/23409055444513")} className="p-2 bg-green-500 rounded-full duration-300 ease-in-out hover:scale-105 transition text-text font-bold hover:bg-green-800">Chat on Whatsapp</button>
          <button onClick={() => openLink("https://www.instagram.com/ikemi_concept?utm_source=ig_web_button_share_sheet&psln=ZDNlZDc0MzIxNw==")} className="p-2 border-text rounded-full border text-text duration-300 ease-in-out hover:scale-105 transition">Instagram</button>
        </div>
      </div>
      <div className="border-border border-4 h-50 w-full duration-300 ease-in-out hover:scale-105 transition"></div>
    </div>
  )
}

export default Location
