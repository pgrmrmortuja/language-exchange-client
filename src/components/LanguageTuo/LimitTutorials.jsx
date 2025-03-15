import React, { useEffect, useState } from 'react';
import { motion } from "framer-motion";
import { Link } from 'react-router-dom';

const LimitTutorials = () => {

    const [limits, setLimits] = useState([]);

    useEffect(() => {
        fetch('https://language-exchange-server-xi.vercel.app/tutorials-limited?limit=6')
            .then(res => res.json())
            .then(data => setLimits(data))
            .catch(error => console.log(error))
    }, [])


    return (
        <div className='mb-20'>
            <motion.h2
                initial={{ opacity: 0, y: -50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: false, amount: 0.2 }}
                className="text-center text-4xl font-bold p-2 mb-10">Top Tutorials</motion.h2>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mb-5'>
                {
                    limits.map(limit =>
                        <motion.div
                            key={limit._id}
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: limit._id * 0.2 }}
                            viewport={{ once: false, amount: 0.2 }}
                            className="card border-2 border-green-500 bg-base-100  shadow-xl">
                            <figure className="px-10 pt-10">
                                <img
                                    src={limit.photo}
                                    alt={limit.language}
                                    className="rounded-xl" />
                            </figure>
                            <div className="card-body flex flex-grow justify-end ml-4">
                                <h2 className="card-title">{limit.language}</h2>
                                <p>Tutor: {limit.username}</p>
                                <p>Price: ${limit.price}</p>

                                <div className="card-actions justify-start">
                                    <Link to={`/tutor/${limit._id}`}>
                                        <button className="btn  bg-green-300 text-black hover:text-green-400 border-none">View Details</button>
                                    </Link>

                                </div>
                            </div>
                        </motion.div>
                    )
                }
            </div>
        </div>
    );
};

export default LimitTutorials;