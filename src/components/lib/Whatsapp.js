// lib/whatsapp.js
export function whatsappLink(number, message) {
    return `https://wa.me/${number}?text=${encodeURIComponent(message)}`;
}

export function buildBookingMessage({ name, service, date, time, notes, location }) {
    const prettyDate = date
        ? new Date(`${date}T00:00:00`).toLocaleDateString("en-NG", {
            weekday: "long",
            day: "numeric",
            month: "long",
        })
    : "Not specified";

    return [
        "Hi, I'd like to book an appointment.",
        "",
        `Name: ${name}`,
        `Service: ${service}`,
        `Date: ${prettyDate}`,
        time ? `Time: ${time}` : null,
        `Location: ${location}`,
        notes ? `Notes: ${notes}` : null,
    ].filter(Boolean).join("\n");
}