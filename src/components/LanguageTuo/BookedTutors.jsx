import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../providers/AuthProvider';
import MyTutors from './MyTutors';

const BookedTutors = () => {

    const [tutors, setTutors] = useState([]);

    useEffect(() => {
        document.title = "My Booked Tutors | LinguaConnect";
    }, []);

    const { user } = useContext(AuthContext);
    console.log(user?.email);

    useEffect(() => {
        fetch(`http://localhost:5000/myTutors/${user?.email}`)
            .then(res => res.json())
            .then(data => setTutors(data))
            .catch(error => console.log(error))
    }, [user?.email])





    return (
        <div>
            <h1 className="text-4xl font-bold mb-5 text-center">My Booked Tutors</h1>

            {tutors.length === 0 ? (
                <div className="flex flex-col items-center justify-center h-40">
                    <p className="text-2xl text-red-600 font-semibold">No Tutors Booked Yet</p>
                    <p className="text-lg text-red-600">It seems you haven't booked any tutors yet. Browse and book your first tutor!</p>
                </div>
            ) : (
                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 mb-5'>
                    {
                        tutors.map(loadedTutors =>
                            <MyTutors
                                key={loadedTutors._id}
                                tutors={tutors}
                                setTutors={setTutors}
                                loadedTutors={loadedTutors}>
                            </MyTutors>
                        )
                    }
                </div>
            )}
        </div>
    );

};

export default BookedTutors;