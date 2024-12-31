import React, { useContext, useEffect } from 'react';
import { useLoaderData } from 'react-router-dom';
import Swal from 'sweetalert2';
import { AuthContext } from '../../providers/AuthProvider';

const Details = () => {

    useEffect(() => {
        document.title = "Details | LinguaConnect";
    }, []);

    const { user } = useContext(AuthContext);

    const userEmail = user?.email;

    const tutor = useLoaderData();

    const { _id, email, username, photo, userPhoto, description, price, language, review } = tutor;

    const newTutor = { tutorName: username, tutorId: _id, tutorEmail: email, userPhoto, photo, description, price, language, review, userEmail };
    console.log(newTutor);

    const handleBooked = event => {
        event.preventDefault();

        //send data to the server
        fetch('http://localhost:5000/booked-tutors', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(newTutor)
        })

            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.insertedId) {
                    Swal.fire({
                        title: 'Success!',
                        text: 'Your Booking Successfull',
                        icon: 'success',
                        confirmButtonText: 'Cool'
                    })
                }
            })

    }


    return (
        <div className="container mx-auto p-4">
            <h2 className="text-center text-3xl font-bold mb-5">Tutor Details</h2>
            <div className="hero bg-base-200 border-2 border-green-500 p-5 sm:p-10 rounded-lg">
                <div className="hero-content flex flex-col md:flex-row items-center gap-5">
                    <img
                        src={userPhoto}
                        alt={username}
                        className="w-full max-w-xs md:max-w-sm rounded-lg shadow-lg"
                    />
                    <div>
                        <h1 className="text-2xl sm:text-3xl font-semibold">{username}</h1>
                        <p className="text-lg mt-2">
                            <strong>Language:</strong> {language}
                        </p>
                        <p className="text-lg mt-2">
                            <strong>Price:</strong> ${price}
                        </p>
                        <p className="text-lg mt-2">
                            <strong>Description:</strong> {description}
                        </p>
                        

                        <p className="text-lg mt-2">
                            <strong>Review:</strong> {review}
                        </p>


                        <button
                            onClick={handleBooked}
                            className="btn bg-green-500 hover:bg-green-600 text-white mt-4"
                        >
                            Book Now
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Details;