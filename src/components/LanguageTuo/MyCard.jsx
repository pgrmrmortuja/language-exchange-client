import React from 'react';
import { Link } from 'react-router-dom';
import Swal from 'sweetalert2';

const MyCard = ({ loadedTutorial, setTutorials, tutorials }) => {
    const { _id, username, photo, language, price, description, review } = loadedTutorial;

    const handleDelete = _id => {
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then((result) => {
            if (result.isConfirmed) {
                fetch(`https://language-exchange-server-xi.vercel.app/tutorials/${_id}`, {
                    method: 'DELETE',
                })
                    .then(res => res.json())
                    .then(data => {
                        if (data.deletedCount > 0) {
                            Swal.fire({
                                title: "Deleted!",
                                text: "Your tutorial has been deleted.",
                                icon: "success"
                            });

                            const remaining = tutorials.filter(tuo => tuo._id !== _id);
                            setTutorials(remaining);
                        }
                    });
            }
        });
    };

    return (
        <tr className="border border-gray-400">
            <td className="border border-gray-400 p-2 text-center">{username}</td>
            <td className="border border-gray-400 p-2 text-center">
                <img src={photo} alt={username} className="h-16 w-16 rounded-lg object-cover text-center" />
            </td>
            <td className="border border-gray-400 p-2 text-center">{language}</td>
            <td className="border border-gray-400 p-2 text-center">${price}</td>
            <td className="border border-gray-400 p-2 text-center">{description}</td>
            <td className="border border-gray-400 p-2 text-center">{review}</td>
            <td className="border border-gray-400 p-2 flex flex-col md:flex-row gap-2">
                <Link to={`/update/${_id}`}>
                    <button className="btn bg-green-500 text-black hover:text-green-400 border-none">Update</button>
                </Link>
                <button
                    onClick={() => handleDelete(_id)}
                    className="btn bg-green-500 text-black hover:text-green-400 border-none">
                    Delete
                </button>
            </td>
        </tr>
    );
};

export default MyCard;
















