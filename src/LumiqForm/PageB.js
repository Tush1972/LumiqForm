import React, {useState} from 'react'
import './pageB.css';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import { useNavigate } from "react-router-dom";

const RegistrationB = () => {
    const [selectedDate, setSelectedDate] = useState(new Date());
    const [selectedTime, setSelectedTime] = useState(null);

    const timeSlots = ["18:30", "19:00", "19:30", "20:00", "20:30", "21:00", "21:30"];

    const navigate = useNavigate();
    const handleNext = () => {
    navigate("/Registration");
  };

    
  return (
    <form className='form-container'>
        <div className='bg'>
            <div>
                <label><strong>Email</strong></label>
            </div>
            <div className='email-section'>
                <input type='email' placeholder='Enter Your Email' className='email-field'/>
                <br/>
                <p className='email-para'>example@gmail.com</p>
            </div>
            <div className='radio-section'>
                <label><strong>Have you ever applied to our facility before?</strong></label><br/>
                
                <input type="radio" id="yes" name="applied" value="yes"/>
                <label for="yes" className='radio-name'>Yes</label>

                <input type="radio" id="no" name="applied" value="no"/>
                <label for="no">No</label><br/>

                <input type="radio" id="other" name="applied" value="other"/>
                <label for="other">Other</label>
            </div>
            <div className='radio-section'>
                <label><strong>Which department would you like to get an appointment for?</strong></label>
                <br/>
                <input type='text' className='email-field'/>
            </div>
            <div className='procedure-section'>
                <label className='procedure-dropbox'><strong>Which procedure do you want to make an appointment for?</strong></label>
                <br/>
                <select className='procedure-dropbox'><option>Select</option>
                    <option>1</option>
                    <option>2</option>
                    <option>3</option>
                    <option>4</option>
                </select>
            </div>
            
                <label><strong>Preferred Appointment Date</strong></label>
            <div className='calendar-section'>   
                <div><Calendar selected={selectedDate} onChange={(date => setSelectedDate(date))}/>
                </div>
                <div className="time-slots">
                    {timeSlots.map((time) => (
                    <button key={time} className={`time-btn ${selectedTime === time ? "selected" : ""}`} onClick={() => setSelectedTime(time)}>{time} </button>
                    ))}
                    <p>You selected: <strong>{selectedDate.toDateString()}</strong> at <strong>{selectedTime}</strong></p>
                </div>
            </div>
            <div className='button-section'>
                <button className='btn' onClick={handleNext}>Back</button>
                <button className='btn'>Submit</button>
            </div>
            </div>
    </form>
  )
}

export default RegistrationB
