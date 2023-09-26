import { useEffect, useState } from 'react';

//import workdeatils component
import WorkDetails from '../components/WorkDetails';
import WorkoutForm from '../components/WorkoutForm';

const Home = () => {
    //state
    const [workouts, setWorkouts] = useState(null);
    
    //to only show the home page when it rendering once
    useEffect(() => {

        const fetchWorkouts = async () => {
            const response = await fetch('/api/workouts');//backend server
            const data = await response.json();

            //managing state
            if(response.ok){
                setWorkouts(data);
            }
        }
        fetchWorkouts();
    }, [])



    return (
        <div className="home">
           {/* add workouts here we are getting there to show in home page */}
           <div className="workouts">
            {workouts && workouts.map((workout) => (  
                // <p key={workout._id}>{workout.title}</p>
                <WorkDetails key={workout._id} workout={workout} /> //to add details of workout                
            ))}
           </div>

           {/*to add new workout */}
            <WorkoutForm />
        </div>
    );
}

export default Home;