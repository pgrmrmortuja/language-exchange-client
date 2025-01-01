import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import { Rating } from '@smastrom/react-rating';
import '@smastrom/react-rating/style.css';

const Categories = () => {

    const categories = useLoaderData();
    const catgName = categories[0].language;

    return (
        <div>
            <h1 className="text-2xl font-bold mb-5 text-center">Category: {catgName}</h1>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 mb-5'>
                {
                    categories.map(category =>

                        <div key={category._id} className="card bg-base-100 w-96 shadow-xl border-2 border-green-500">
                            <figure className="px-10 pt-10">
                                <img
                                    src={category.userPhoto}
                                    alt={category.username}
                                    className="rounded-xl" />
                            </figure>
                            <div className="card-body flex flex-grow justify-end ml-4">
                                <h2 className="card-title">{category.username}</h2>
                                <p><span className='font-bold'>Category:</span> {category.language}</p>
                                <p><span className='font-bold'>Price:</span> ${category.price}</p>
                                <p>{category.description}</p>
                                <p><span className='font-bold'>Review:</span> {category.review}</p>
                                
                                <div className="card-actions justify-start">
                                    <Link to={'/'}>
                                        <button className="btn border-green-700 bg-green-300 hover:text-green-400 border-none text-black">Back Home</button>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    )
                }
            </div>

        </div>
    );
};

export default Categories;