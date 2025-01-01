import React, { useContext, useEffect } from 'react';
import { AuthContext } from "../providers/AuthProvider";
import Swal from 'sweetalert2' 
// AddTutorial

const AddTutorial = () => {

    const { user } = useContext(AuthContext);

    useEffect(() => {
        document.title = "Add Tutorial | LinguaConnect";
    }, []);

    const handleAddTutorial = event => {
        event.preventDefault();

        const form = event.target;

        const photo = form.photo.value;
        const language = form.language.value;
        const description = form.description.value;
        const price = form.price.value;
        const review = parseInt(form.review.value);
        const email = form.email.value;
        const username = form.username.value;
        const userPhoto = form.userPhoto.value;



        const newTutorial = {userPhoto, photo, language, description, price, review, email, username };

        console.log(newTutorial);

        //send data to the server
        fetch('https://language-exchange-server-xi.vercel.app/tutorials', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(newTutorial)
        })

            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.insertedId) {
                    Swal.fire({
                        title: 'Success!',
                        text: 'New Tutorial Added Successfully',
                        icon: 'success',
                        confirmButtonText: 'Cool'
                    })
                }
            })

        form.reset();
    }



    return (
        <div className="flex justify-center items-center min-h-screen  p-6">
            <form onSubmit={handleAddTutorial} className="w-full max-w-lg bg-green-100 p-8 rounded-lg shadow-lg space-y-6">
                <h2 className="text-3xl font-bold text-center text-black mb-10">Add New Tutorial</h2>

                {/* User Name (Read-only) */}
                <div className="mb-4">
                    <label htmlFor="username" className="block text-lg font-medium text-gray-700">
                        Name
                    </label>
                    <input
                        type="text"
                        name="username"
                        id="userName"
                        value={user?.displayName || ""}
                        readOnly
                        className="mt-2 w-full border-2 border-gray-300 rounded-lg px-4 py-2 bg-white cursor-not-allowed"
                    />
                </div>

                {/* User Email (Read-only) */}
                <div className="mb-4">
                    <label htmlFor="userEmail" className="block text-lg font-medium text-gray-700">
                        Email
                    </label>
                    <input
                        type="email"
                        name="email"
                        id="userEmail"
                        value={user?.email || ""}
                        readOnly
                        className="mt-2 w-full border-2 border-gray-300 bg-white rounded-lg px-4 py-2 cursor-not-allowed"
                    />
                </div>

                {/* User Photo (Read-only) */}
                <div className="mb-4">
                    <label htmlFor="userEmail" className="block text-lg font-medium text-gray-700">
                        User Image URL
                    </label>
                    <input
                        type="text"
                        name="userPhoto"
                        id="userEmail"
                        value={user?.photoURL || ""}
                        readOnly
                        className="mt-2 w-full border-2 border-gray-300 bg-white rounded-lg px-4 py-2 cursor-not-allowed"
                    />
                </div>

                {/*Tutorial Photo URL */}
                <div className="mb-4">
                    <label htmlFor="photo" className="block text-lg font-medium text-gray-700">
                        Tutorial Image URL
                    </label>
                    <input
                        type="text"
                        name="photo"
                        id="photo"
                        className="mt-2 w-full bg-white border-2 border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
                        required
                    />
                </div>

                {/* Language */}
                <div className="mb-4">
                    <label htmlFor="language" className="block text-lg font-medium text-gray-700">
                        Language
                    </label>
                    <input
                        type="text"
                        name="language"
                        id="language"
                        className="mt-2 bg-white w-full border-2 border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
                        required
                    />
                </div>


                {/* Price */}
                <div className="mb-4">
                    <label htmlFor="price" className="block text-lg font-medium text-gray-700">
                        Price
                    </label>
                    <input
                        type="text"
                        name="price"
                        id="price"
                        className="mt-2 bg-white w-full border-2 border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
                        required
                    />
                </div>


                {/* Description */}
                <div className="mb-4">
                    <label htmlFor="description" className="block text-lg font-medium text-gray-700">
                        Description
                    </label>
                    <textarea
                        name="description"
                        id="description"
                        rows="4"
                        className="mt-2 bg-white w-full border-2 border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
                        required
                    />
                </div>


                {/* Review */}
                <div className="mb-4">
                    <label htmlFor="review" className="block text-lg font-medium text-gray-700">
                        Review
                    </label>
                    <input
                        type="text"
                        name="review"
                        id="review"
                        value= "0"
                        readOnly
                        className="mt-2 bg-white w-full border-2 border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
                        required
                    />
                </div>

               

                <button
                    type="submit"
                    className="w-full font-bold py-3 rounded-lg items-center btn  bg-green-500 text-black hover:text-green-400 border-none"
                >
                    Add Product
                </button>
            </form>
        </div>
    );
};

export default AddTutorial;
