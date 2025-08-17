import Calendar from "./Calendar";

function HomePage () {
    return (
        <>
            <div className="bg-[#ced4da]">
                <h1><strong>Latest Events</strong></h1>
                <div className="flex">
                    <Calendar />
                </div>
            <iframe src="https://calendar.google.com/calendar/embed?src=zebolsky.adam%40gmail.com&ctz=America%2FChicago" width="800" height="600" scrolling="no"></iframe>
            </div>
        </>
    );
}

export default HomePage