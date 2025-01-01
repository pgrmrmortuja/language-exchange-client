import React from 'react';
import Swal from 'sweetalert2';
import { Rating } from '@smastrom/react-rating';
import '@smastrom/react-rating/style.css';

const MyTutors = ({ loadedTutors, setTutors, tutors }) => {

    const { tutorName, tutorId, tutorEmail, userPhoto, description, price, language, review, userEmail } = loadedTutors;


    const handleReview = () => {

        // if (review >= 5) {
        //     Swal.fire({
        //         title: 'Maximum Reviews Reached!',
        //         text: 'You cannot add more than 5 reviews.',
        //         icon: 'warning',
        //         confirmButtonText: 'Okay',
        //     });
        //     return;
        // }

        fetch(`http://localhost:5000/review/${tutorId}`, {
            method: 'PATCH',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ increment: 1 }),
        })
            .then((res) => res.json())
            .then((data) => {
                console.log(data);
                if (data.languageUpdated || data.bookingsUpdated) {
                    Swal.fire({
                        title: 'Success!',
                        text: 'Review updated successfully!',
                        icon: 'success',
                        confirmButtonText: 'Cool',
                    });


                    const updatedTutors = tutors.map((tutor) =>
                        tutor.tutorId === tutorId
                            ? { ...tutor, review: tutor.review + 1 }
                            : tutor
                    );

                    setTutors(updatedTutors);
                }
            })
            .catch((error) => console.error('Error updating review:', error));
    };





    return (
        <div className="card border-2 border-green-400 bg-base-100 w-96 shadow-xl mt-5 mb-10">
            <figure className="px-10 pt-10">
                <img
                    src={userPhoto}
                    alt={tutorName}
                    className="rounded-xl" />
            </figure>
            <div className="card-body flex flex-grow justify-end ml-4">
                <h2 className="card-title">{tutorName}</h2>
                <p><span className='font-bold'>Language:</span> {language}</p>
                <p>Price: ${price}</p>
                <p>Review: {review}</p>
                <div className="card-actions mt-3 justify-center sm:justify-center md:justify-start lg:justify-start">

                    <button onClick={handleReview} className="btn  bg-green-500 text-black hover:text-green-400 border-none">Give Review</button>
                </div>
            </div>
        </div>
    );
};

export default MyTutors;