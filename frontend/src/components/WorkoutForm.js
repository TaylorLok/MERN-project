import { useState } from 'react';
import { json } from 'react-router-dom';

const WorkoutForm = () => {
    const [title, setTitle] = useState('');
    const [reps, setReps] = useState('');
    const [load, setLoad] = useState('');
    const [notes, setNotes] = useState('');
    const [error, setError] = useState(null);

    //on submit action function
    const handleSubmit = async (e) => {
        e.preventDefault();
        const workout = { title, reps, load, notes };

        const response = await fetch('/api/workouts', {
            method: 'POST',
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(workout)
        })

        const data = await response.json();

        if(!response.ok){
            setError(json.error)
        }

        if(response.ok){
            setTitle(''); //to clear or reset the input field
            setReps('');
            setLoad('');
            setNotes('');
            setError(null);
            console.log('New Workout Added', data);
        }
    }

    return (

        <form className="create" onSubmit={handleSubmit}>
            <h3>Add a New Work</h3>

            <label>Workout Title:</label>
            <input 
                type="text" 
                value={title}
                onChange={(e) => setTitle(e.target.value)}
            />

            <label>Reps:</label>
            <input
                type="number"	 
                required 
                value={reps}
                onChange={(e) => setReps(e.target.value)}
            />

            <label>Load:</label>
            <input
                type="number"	 
                required 
                value={load}
                onChange={(e) => setLoad(e.target.value)}
            />

            <label>Notes:</label>
            <textarea
                type="text"
                required 
                value={notes}
                onChange={(e) => setNotes(e.target.value)}
            ></textarea>
            <br />
            <button>Add Workout</button>

            {error && <p className="error">{error}</p>}

        </form>
    );
}

export default WorkoutForm;