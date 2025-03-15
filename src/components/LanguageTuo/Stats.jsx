import React, { useEffect, useState } from 'react';
import { motion } from "framer-motion";

const Stats = () => {

    const [tutors, setTutors] = useState([]);
    const [tutorials, setTutorials] = useState([]);
    const [languages, setLanguages] = useState([]);
    const [users, setUsers] = useState([]);

    useEffect(() => {
        fetch("https://language-exchange-server-xi.vercel.app/tutors")
            .then(response => response.json())
            .then(data => setTutors(data))
    }, [])

    useEffect(() => {
        fetch("https://language-exchange-server-xi.vercel.app/tutorials")
            .then(response => response.json())
            .then(data => setTutorials(data))
    }, [])

    useEffect(() => {
        fetch("https://language-exchange-server-xi.vercel.app/categories")
            .then(response => response.json())
            .then(data => setLanguages(data))
    }, [])

    useEffect(() => {
        fetch("https://language-exchange-server-xi.vercel.app/users")
            .then(response => response.json())
            .then(data => setUsers(data))
    }, [])


    const totalReviews = tutorials.reduce((sum, tutorial) => sum + tutorial.review, 0);
    console.log(totalReviews);





    return (
        <div className='mb-16 mt-10'>

            <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                viewport={{ once: false, amount: 0.2 }}
                className="stats shadow border-2 border-green-500 flex flex-col sm:flex-col md:flex-row lg:flex-row">
                <div className="stat place-items-center">
                    <div className="stat-value">{tutors.length}+</div>
                    <div className="stat-title">Experienced Tutors</div>
                </div>
                <div className="stat place-items-center">
                    <div className="stat-value">{totalReviews}+</div>
                    <div className="stat-title">5-Start Tutor Reviews</div>
                </div>
                <div className="stat place-items-center">
                    <div className="stat-value">{languages.length}+</div>
                    <div className="stat-title">Subjects Taught</div>
                </div>
                <div className="stat place-items-center">
                    <div className="stat-value">{users.length}+</div>
                    <div className="stat-title">Users</div>
                </div>


            </motion.div>
        </div>
    );
};

export default Stats;