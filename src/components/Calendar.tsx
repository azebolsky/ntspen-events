import { useState, useEffect } from "react";
import Event from "./Event";
import { EventProps } from "./EventProps";

const Calendar = () => {
    const [events, setEvents] = useState<EventProps[]>([]);

    const apiKey = import.meta.env.VITE_GOOGLE_CALENDAR_API_KEY;

    useEffect(() => {
        fetch(`https://www.googleapis.com/calendar/v3/calendars/zebolsky.adam@gmail.com/events?key=${apiKey}&orderBy=updated&timeMin=2025-07-01T00:00:00Z`)
        .then((res) => {
            return res.json();
        })
        .then((data) => {
            console.log(data.items);
            setEvents(data.items.slice(0,10));
        })
    }, []);

    return (
        <div>
            {events.map((event) => <Event key={event.id} {...event}  />)}
        </div>
    );
}

export default Calendar