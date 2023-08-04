
import BookAppointment from "./BookAppointment";

export default function BookingModal({open}){
    if(!open) return null
    
    return (
        <div>
        <div className="overlay">
        <div className="modalContainer">
        </div>
        </div>
        </div>
    )
}
