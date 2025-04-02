import React from "react";
import Calendar from "react-calendar";

const timeSlots = ["18:30", "19:00", "19:30", "20:00", "20:30", "21:00", "21:30"];

export const EmailSection = ({formik}) => (
    <>
    <div>
       <label><strong>Email</strong></label>
    </div>
        <div className="email-section">
          <input 
            type="email" placeholder="Enter Your Email" className="email-field" required {...formik.getFieldProps("email")}
            onInput={(e) => {
                e.target.value = e.target.value.replace(/[^a-zA-Z0-9@._-]/g, '');
            }}
          />
          {formik.touched.email && formik.errors.email && (
              <div className="error">{formik.errors.email}</div>
            )}
          <br />
          <p className="email-para">example@gmail.com</p>
        </div>
    </>
);

export const RadioSection = ({appliedBefore, setAppliedBefore}) => (
    <div className="radio-section">
        <label><strong>Have you ever applied to our facility before?</strong></label>
        <br />
        
        <input 
        type="radio" id="yes" name="appliedBefore" value="yes"
        onChange={(e) => setAppliedBefore(e.target.value)} 
        checked={appliedBefore === "yes"}
        />
        <label htmlFor="yes" className="radio-name">Yes</label>

        <input 
        type="radio" id="no" name="appliedBefore" value="no" 
        onChange={(e) => setAppliedBefore(e.target.value)} 
        checked={appliedBefore === "no"}
        />
        <label htmlFor="no">No</label>
        <br />

        <input 
        type="radio" id="other" name="appliedBefore" value="other" 
        onChange={(e) => setAppliedBefore(e.target.value)} 
        checked={appliedBefore === "other"}
        />
        <label htmlFor="other">Other</label>
    </div>
)

export const AppointmentSection = ({formik}) => (
    <div className="radio-section">
        <label><strong>Which department would you like to get an appointment for?</strong></label>
        <br />
        <input 
        type="text" className="email-field" {...formik.getFieldProps("department")} required/>
    </div>
)

export const ProcedureSection = ({formik}) => (
    <div className="procedure-section">
        <label className="procedure-dropbox"><strong>Which procedure do you want to make an appointment for?</strong></label>
        <br />
        <select className="procedure-dropbox" {...formik.getFieldProps("procedure")} required>
        <option value="">Select</option>
        <option>1</option>
        <option>2</option>
        <option>3</option>
        <option>4</option>
        </select>
    </div>
)

export const CalendarSection = ({selectedDate, setSelectedDate, selectedTime, setSelectedTime}) => (
    <>
    <label><strong>Preferred Appointment Date</strong></label>
    <div className="calendar-section">
        <div>
        <Calendar value={selectedDate} onChange={setSelectedDate} />
        </div>
        <div className="time-slots">
        {timeSlots.map((time) => (
            <button
            key={time} type="button" className={`time-btn ${selectedTime === time ? "selected" : ""}`}onClick={() => setSelectedTime(time)}>
            {time}
            </button>
        ))}
        <p> You selected: <strong>{selectedDate.toDateString()}</strong> at{" "}<strong>{selectedTime}</strong></p>
        </div>
    </div>
    </>
)

export const Buttons = ({handleNext}) => (
    <div className="button-section">
        <button type="button" className="btn" onClick={handleNext}>
        Back
        </button>
        <button type="submit" className="btn">Submit</button>
    </div>
)