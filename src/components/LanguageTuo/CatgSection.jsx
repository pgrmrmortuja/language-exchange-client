import React from 'react';
import { motion } from "framer-motion";
import { Link } from 'react-router-dom';
import { FaChevronRight } from "react-icons/fa6";
import { FaChalkboardTeacher } from "react-icons/fa";
import { GiTeacher } from "react-icons/gi";
import { PiChalkboardTeacher } from "react-icons/pi";
import { PiChalkboardTeacherBold } from "react-icons/pi";
import { PiChalkboardTeacherDuotone } from "react-icons/pi";
import { PiChalkboardTeacherFill } from "react-icons/pi";
import { PiChalkboardTeacherLight } from "react-icons/pi";
import { PiChalkboardTeacherThin } from "react-icons/pi";
import { LiaChalkboardTeacherSolid } from "react-icons/lia";

const CatgSection = () => {
    return (
        <div className='mb-20'>
            <motion.h1
                initial={{ opacity: 0, y: -50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: false, amount: 0.2 }}
                className="text-4xl font-bold mb-10 text-center"
            >Choose Your Tutor</motion.h1>

            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 mb-5'>

                {/* Card 1 */}
                <Link to={"/find-tutors/English"}>
                    <motion.div
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        viewport={{ once: false, amount: 0.2 }}
                        className="border-2 border-green-500 p-5 flex justify-between items-center hover:shadow-lg transition-shadow duration-300">
                        <div className="flex items-center space-x-3">
                            <FaChalkboardTeacher className="text-3xl text-blue-500" />
                            <span className="font-semibold text-lg">English Tutor</span>
                        </div>

                        <FaChevronRight className="text-xl text-gray-500" />

                    </motion.div>
                </Link>
                {/* Card 2 */}
                <Link to={"/find-tutors/Spanish"}>
                    <motion.div
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        viewport={{ once: false, amount: 0.2 }}
                        className="border-2 border-green-500 p-5 flex justify-between items-center hover:shadow-lg transition-shadow duration-300">
                        <div className="flex items-center space-x-3">
                            <GiTeacher className="text-3xl text-blue-500" />
                            <span className="font-semibold text-lg">Spanish Tutor</span>
                        </div>

                        <FaChevronRight className="text-xl text-gray-500" />

                    </motion.div>
                </Link>
                {/* Card 3 */}
                <Link to={"/find-tutors/French"}>
                    <motion.div
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        viewport={{ once: false, amount: 0.2 }}
                        className="border-2 border-green-500 p-5 flex justify-between items-center hover:shadow-lg transition-shadow duration-300">
                        <div className="flex items-center space-x-3">
                            <PiChalkboardTeacher className="text-3xl text-blue-500" />
                            <span className="font-semibold text-lg">French Tutor</span>
                        </div>

                        <FaChevronRight className="text-xl text-gray-500" />

                    </motion.div>
                </Link>
                {/* Card 4 */}
                <Link to={"/find-tutors/German"}>
                    <motion.div
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        viewport={{ once: false, amount: 0.2 }}
                        className="border-2 border-green-500 p-5 flex justify-between items-center hover:shadow-lg transition-shadow duration-300">
                        <div className="flex items-center space-x-3">
                            <PiChalkboardTeacherBold className="text-3xl text-blue-500" />
                            <span className="font-semibold text-lg">German Tutor</span>
                        </div>

                        <FaChevronRight className="text-xl text-gray-500" />

                    </motion.div>
                </Link>
                {/* Card 5 */}
                <Link to={"/find-tutors/Italian"}>
                    <motion.div
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        viewport={{ once: false, amount: 0.2 }}
                        className="border-2 border-green-500 p-5 flex justify-between items-center hover:shadow-lg transition-shadow duration-300">
                        <div className="flex items-center space-x-3">
                            <PiChalkboardTeacherDuotone className="text-3xl text-blue-500" />
                            <span className="font-semibold text-lg">Italian Tutor</span>
                        </div>

                        <FaChevronRight className="text-xl text-gray-500" />

                    </motion.div>
                </Link>
                {/* Card 6 */}
                <Link to={"/find-tutors/Portuguese"}>
                    <motion.div
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        viewport={{ once: false, amount: 0.2 }}
                        className="border-2 border-green-500 p-5 flex justify-between items-center hover:shadow-lg transition-shadow duration-300">
                        <div className="flex items-center space-x-3">
                            <PiChalkboardTeacherFill className="text-3xl text-blue-500" />
                            <span className="font-semibold text-lg">Portuguese Tutor</span>
                        </div>

                        <FaChevronRight className="text-xl text-gray-500" />

                    </motion.div>
                </Link>
                {/* Card 7 */}
                <Link to={"/find-tutors/Russian"}>
                    <motion.div
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        viewport={{ once: false, amount: 0.2 }}
                        className="border-2 border-green-500 p-5 flex justify-between items-center hover:shadow-lg transition-shadow duration-300">
                        <div className="flex items-center space-x-3">
                            <PiChalkboardTeacherLight className="text-3xl text-blue-500" />
                            <span className="font-semibold text-lg">Russian Tutor</span>
                        </div>

                        <FaChevronRight className="text-xl text-gray-500" />

                    </motion.div>
                </Link>
                {/* Card 8 */}
                <Link to={"/find-tutors/Mandarin"}>
                    <motion.div
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        viewport={{ once: false, amount: 0.2 }}
                        className="border-2 border-green-500 p-5 flex justify-between items-center hover:shadow-lg transition-shadow duration-300">
                        <div className="flex items-center space-x-3">
                            <PiChalkboardTeacherThin className="text-3xl text-blue-500" />
                            <span className="font-semibold text-lg">Mandarin Tutor</span>
                        </div>

                        <FaChevronRight className="text-xl text-gray-500" />

                    </motion.div>
                </Link>
                {/* Card 9 */}
                <Link to={"/find-tutors/Japanese"}>
                    <motion.div
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        viewport={{ once: false, amount: 0.2 }}
                        className="border-2 border-green-500 p-5 flex justify-between items-center hover:shadow-lg transition-shadow duration-300">
                        <div className="flex items-center space-x-3">
                            <LiaChalkboardTeacherSolid className="text-3xl text-blue-500" />
                            <span className="font-semibold text-lg">Japanese Tutor</span>
                        </div>

                        <FaChevronRight className="text-xl text-gray-500" />

                    </motion.div>
                </Link>


            </div>

        </div>
    );
};

export default CatgSection;