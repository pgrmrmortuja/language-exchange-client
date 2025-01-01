import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../providers/AuthProvider';
import MyCard from './MyCard';
import axios from 'axios';

const MyTutorials = () => {
    const [tutorials, setTutorials] = useState([]);

    useEffect(() => {
        document.title = "My Tutorials | LinguaConnect";
    }, []);

    const { user } = useContext(AuthContext);

    useEffect(() => {
        // fetch(`https://language-exchange-server-xi.vercel.app/myTutorials/${user?.email}`)
        //     .then(res => res.json())
        //     .then(data => setTutorials(data))
        //     .catch(error => console.log(error))

        axios.get(`https://language-exchange-server-xi.vercel.app/myTutorials/${user?.email}`, {
            withCredentials: true
        })
            .then(res => setTutorials(res.data))

    }, [user?.email]);


    return (
        <div className='mb-10'>
            <h1 className="text-4xl font-bold mb-5 text-center">My Tutorials</h1>

            {tutorials.length === 0 ? (
                <div className="flex flex-col items-center justify-center h-40">
                    <p className="text-2xl font-semibold text-red-600">No Tutorials Found</p>
                    <p className="text-lg">Please add your first tutorial to see it here.</p>
                </div>
            ) : (
                <div className="overflow-x-auto">
                    <table className="table-auto border-collapse border border-gray-400 w-full">
                        <thead className="bg-green-400 text-black">
                            <tr>
                                <th className="border border-gray-400 p-2">Name</th>
                                <th className="border border-gray-400 p-2">Image</th>
                                <th className="border border-gray-400 p-2">Language</th>
                                <th className="border border-gray-400 p-2">Price</th>
                                <th className="border border-gray-400 p-2">Description</th>
                                <th className="border border-gray-400 p-2">Review</th>
                                <th className="border border-gray-400 p-2">Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {tutorials.map(loadedTutorial => (
                                <MyCard
                                    key={loadedTutorial._id}
                                    tutorials={tutorials}
                                    setTutorials={setTutorials}
                                    loadedTutorial={loadedTutorial}
                                />
                            ))}
                        </tbody>
                    </table>
                </div>
            )}
        </div>
    );

};

export default MyTutorials;










