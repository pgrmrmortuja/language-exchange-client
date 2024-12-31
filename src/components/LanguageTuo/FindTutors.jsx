import React, { useContext, useEffect, useState } from 'react';
import { useLoaderData } from "react-router-dom";
import { Link } from 'react-router-dom';
// import { AuthContext } from '../../providers/AuthProvider';
// import Loading from '../../Pages/Loading';

const FindTutors = () => {

    useEffect(() => {
        document.title = "Find Tutors | LinguaConnect";
    }, []);


    const tutors = useLoaderData();

    const [searchTerm, setSearchTerm] = useState("");


    const filteredTutors = tutors.filter((tutor) =>
        tutor.language.toLowerCase().includes(searchTerm.toLowerCase())
    );


    return (
        <div className="container mx-auto my-10 px-4">
            <h1 className="text-4xl font-bold mb-10 text-center">Find Tutors</h1>

            {/* Search Input */}
            {/* Search Input */}
            <div className="relative mb-6">
                <input
                    type="text"
                    placeholder="Search by language"
                    className="w-full p-3 pl-10 border rounded-lg focus:outline-none focus:ring focus:ring-green-300"
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                />
                <span className="absolute inset-y-0 left-3 flex items-center text-gray-500">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={2}
                        stroke="currentColor"
                        className="w-5 h-5"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M21 21l-4.35-4.35M18 10.5a7.5 7.5 0 11-15 0 7.5 7.5 0 0115 0z"
                        />
                    </svg>
                </span>
            </div>

            {/* If no tutors found */}
            {filteredTutors.length === 0 ? (
                <div className="text-center text-lg text-red-500 mb-5">No tutors found for the given language.</div>
            ) : (
                <div className="overflow-hidden">
                    <table className="table-fixed w-full border border-gray-300">
                        <thead>
                            <tr className="bg-green-200 text-black">
                                <th className="border border-gray-300 px-4 py-2 w-1/4 text-center whitespace-normal break-words">Name</th>
                                <th className="border border-gray-300 px-4 py-2 w-1/4 text-center whitespace-normal break-words">Language</th>
                                <th className="border border-gray-300 px-4 py-2 w-1/4 text-center whitespace-normal break-words">Review</th>
                                <th className="border border-gray-300 px-4 py-2 w-1/4 text-center whitespace-normal break-words">Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {filteredTutors.map((tutor) => (
                                <tr key={tutor._id} className="hover:bg-gray-100">
                                    <td className="text-center border border-gray-300 px-4 py-2 whitespace-normal break-words ">
                                        <div className='flex justify-center items-center gap-2 border-none'>
                                            <img src={tutor.userPhoto} alt={tutor.username} className="h-10 w-10 rounded-lg object-cover border-none" />
                                            <p className='border-none'>{tutor.username}</p>
                                        </div>

                                    </td>
                                    <td className="text-center border border-gray-300 px-4 py-2 whitespace-normal break-words">
                                        {tutor.language}
                                    </td>
                                    <td className="text-center border border-gray-300 px-4 py-2">
                                        {tutor.review}
                                    </td>
                                    <td className="border border-gray-300 md:px-4 sm:px-8 py-2 text-center">
                                        <Link
                                            to={`/tutor/${tutor._id}`}
                                            className="btn  bg-green-300 text-black hover:text-green-400 border-none"
                                        >
                                            View Details
                                        </Link>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            )}


        </div>
    );
};

export default FindTutors;
