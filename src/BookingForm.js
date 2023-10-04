import React, { useState, useEffect } from 'react';

function BookingForm() {
    const[date, setDate] = useState('');
    const [time, setTime] = useState ('');
    const [numberOfGuests, setNumberOfGuests] = useState('');
    const [occassion, setOccassion] = useState('');
    const [availableTimes, setAvailableTimes] = useState([]);

    const generateAvailableTimes = () => {
        const times= [
        "12:00PM",
        "12:30PM",
        "13:00",
        "13:30",
        "14:00",
        "20:00",
        "20:30",
        "21:00",
        "22:00",
        "22:30",
        "23:00",
        ];
        setAvailableTimes(times);
    }
    useEffect(() => {generateAvailableTimes()}, []);

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Reservation submitted');
    }

    return (
        <div className="all-form">
            <div className="div-title">
                <h2 className="reservation-table">Reserve a table</h2>
            </div>
            <form onSubmit={handleSubmit} className="form">
                <fieldset>
                    <div>
                        <label htmlFor="date">Choose a date: </label>
                        <input id="date" type="date" name="date" value={date} onChange={(e) => setDate(e.target.value)} />
                    </div>
                    <div>
                        <label htmlFor="time">Choose time: </label>
                        <select id="time" value={time} onChange={(e) => setTime(e.target.value)}>
                            <option value=""></option>
                            {availableTimes.map((timeOption, index) => (<option key={index} value={timeOption}>{timeOption}</option>))}
                        </select>
                    </div>
                    <div>
                        <label htmlFor="guests">Number of guests: </label>
                        <input id="guests" type="number" name="guests" value={numberOfGuests} onChange={(e) => setNumberOfGuests(e.target.value)} />
                    </div>
                    <div>
                        <label htmlFor="occassion">Occassion: </label>
                        <input id="occassion" type="text" name="occassion" value={occassion} onChange={(e) => setOccassion(e.target.value)} />
                    </div>
                </fieldset>
                <div className="button-form">
                    <button type="submit">Submit</button>
                </div>
            </form>
        </div>
    )
}

export default BookingForm;