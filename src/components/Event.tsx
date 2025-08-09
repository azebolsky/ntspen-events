import { EventProps } from "./EventProps";

const Event = ({summary} : EventProps) => {
    return (
        <>
            <div>{summary}</div>            
        </>
    );
}

export default Event