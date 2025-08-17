import { EventProps } from "./EventProps";

const Event = ({summary, htmlLink, start, end} : EventProps) => {
    let startDateTime = new Date(start.dateTime);
    let endDateTime = new Date(end.dateTime);
    let day = startDateTime.getDate();
    let startHours = startDateTime.getHours();
    let startMinutes = formatTime(startDateTime.getMinutes());
    let endHours = endDateTime.getHours();
    let endMinutes = formatTime(endDateTime.getMinutes());
    let weekday = startDateTime.toLocaleString('default', { weekday: 'long' });
    let month = startDateTime.toLocaleString('default', { month: 'long' });
    // console.log(weekday + ', ' + month + ' ' + day + ' ' + hours + ':' + minutes);

    const eventTime = `${weekday}, ${month} ${day} ${startHours}:${startMinutes} - ${endHours}:${endMinutes}`;
    console.log(eventTime);

    return (
        <div className="flex justify-between content-center items-center bg-[#f5f5f5] mb-3 p-2 w-auto max-w-9/10 min-h-20 shadow-md rounded-sm">
            <div>
                <div>{summary}</div>
                <div>{eventTime}</div>
            </div>
            <a href={htmlLink} target="_blank" className="max-h-10 text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">
                Add to Calendar
            </a>
        </div>
    );
}

const formatTime = (time) => {
    return time < 10 ? '0' + time : time;
}

export default Event