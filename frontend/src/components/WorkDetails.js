const WorkDetails = ({ workout }) => {
    return (
        <div className="workout-details">
           <h4>{workout.title}</h4>
           <p><strong>Reps:</strong>{workout.reps}</p>
           <p><strong>Load:</strong>{workout.load}</p>
           <p><strong>Notes:</strong>{workout.notes}</p>
           <p>{workout.createdAt}</p>
        </div>
    );
}

export default WorkDetails;