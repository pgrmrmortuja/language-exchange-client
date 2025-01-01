import React, { useContext, useEffect } from 'react';
import Swal from 'sweetalert2'
import { useLoaderData } from 'react-router-dom';
import { AuthContext } from '../../providers/AuthProvider';

const Update = () => {

    const { user } = useContext(AuthContext);

    useEffect(() => {
        document.title = "Update | LinguaConnect";
    }, []);

    const tutorial = useLoaderData();

    const { _id, username, email, photo, language, description, price} = tutorial;
    console.log(language);

    const handleUpdate = event => {
        event.preventDefault();

        const form = event.target;

        const photo = form.photo.value;
        const userPhoto = form.userPhoto.value;
        const language = form.language.value;
        const description = form.description.value;
        const price = form.price.value;
        const review = parseInt(form.review.value);
        

        const update = { photo, language, description, price, review, userPhoto};

        console.log(update);

        //send data to the server
        fetch(`https://language-exchange-server-xi.vercel.app/tutorials/${_id}`, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(update)
        })

            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.modifiedCount > 0) {
                    Swal.fire({
                        title: 'Success!',
                        text: 'Updated Successfully',
                        icon: 'success',
                        confirmButtonText: 'Cool'
                    })
                }
            })
    }



    return (
        <div className="flex justify-center items-center min-h-screen  p-6">
            <form onSubmit={handleUpdate} className="w-full max-w-lg  p-8 rounded-lg shadow-lg space-y-6 bg-green-100">
                <h2 className="text-3xl font-bold text-center text-gray-800 mb-6">Update Tutorials</h2>

                {/* User Name (Read-only) */}
                <div className="mb-4">
                    <label htmlFor="username" className="block text-lg font-medium text-gray-700">
                        Name
                    </label>
                    <input
                        type="text"
                        name="username"
                        id="userName"
                        // value={user?.displayName || ""}
                        defaultValue={username}
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
                        // value={user?.email || ""}
                        defaultValue={email}
                        readOnly
                        className="mt-2 w-full border-2 border-gray-300 rounded-lg px-4 py-2 bg-white cursor-not-allowed"
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
                        id="userPhoto"
                        value={"you can update your photo"}
                        className="mt-2 w-full border-2 border-gray-300 rounded-lg px-4 py-2 bg-white cursor-not-allowed"
                    />
                </div>

                {/* Photo URL */}
                <div className="mb-4">
                    <label htmlFor="photo" className="block text-lg font-medium text-gray-700">
                        Tutorial's Image URL
                    </label>
                    <input
                        type="text"
                        name="photo"
                        defaultValue={photo}
                        id="photo"
                        className="mt-2 w-full border-2 border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400 bg-white"
                        required
                    />
                </div>

                

                {/* Language Name */}
                <div className="mb-4">
                    <label htmlFor="language" className="block text-lg font-medium text-gray-700">
                        Language
                    </label>
                    <input
                        type="text"
                        name="language"
                        defaultValue={language}
                        id="language"
                        className="mt-2 w-full border-2 border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400 bg-white"
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
                        defaultValue={description}
                        id="description"
                        rows="4"
                        className="mt-2 w-full border-2 border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400 bg-white"
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
                        defaultValue={price}
                        id="price"
                        className="mt-2 w-full border-2 border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400 bg-white"
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
                        className="mt-2 w-full border-2 border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400 bg-white"
                        required
                    />
                </div>

                <button
                    type="submit"
                    className="w-full font-medium py-3 rounded-lg  bg-green-500 text-black hover:text-green-400 border-none"
                >
                    Update
                </button>
            </form>
        </div>
    );
};

export default Update;