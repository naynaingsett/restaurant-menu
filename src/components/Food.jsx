import React, { useState } from 'react';
import { data } from '../data/data.js';

const Food = () => {
	//   console.log(data);
	const [foods, setFoods] = useState(data);

	//   Filter Type burgers/pizza/etc
	const filterType = (category) => {
		setFoods(
			data.filter((item) => {
				return item.category === category;
			})
		);
	};

	//   Filter by price
	const filterPrice = (price) => {
		setFoods(
			data.filter((item) => {
				return item.price === price;
			})
		);
	};

	return (
		<div className='max-w-[1640px] m-auto px-4 py-12'>
			<h1 className='text-black font-bold text-4xl text-center'>
				Top Rated Menu Items
			</h1>

			{/* Filter Row */}
			<div className='flex flex-col lg:flex-row justify-between'>
				{/* Filter Type */}
				<div>
					<p className='font-bold text-gray-700'>
						Filter Type
					</p>
					<div className='flex justify-between flex-wrap'>
						<button
							onClick={() => setFoods(data)}
							className='m-1 bg-orange-100 border-orange-600 text-black-lg hover:bg-orange-600 focus:bg-orange-600 focus:text-white hover:text-white p-2 rounded'
						>
							All
						</button>
						<button
							onClick={() => filterType('soup')}
							className='m-1 bg-orange-100 border-orange-600 text-black-lg hover:bg-orange-600 focus:bg-orange-600 focus:text-white hover:text-white p-2 rounded'
						>
							Soup
						</button>
						<button
							onClick={() => filterType('salad')}
							className='m-1 bg-orange-100 border-orange-600 text-black-lg hover:bg-orange-600 focus:bg-orange-600 focus:text-white hover:text-white p-2 rounded'
						>
							Salads
						</button>
						<button
							onClick={() => filterType('snack')}
							className='m-1 bg-orange-100 border-orange-600 text-black-lg hover:bg-orange-600 focus:bg-orange-600 focus:text-white hover:text-white p-2 rounded'
						>
							Snacks
						</button>
						<button
							onClick={() => filterType('rice')}
							className='m-1 bg-orange-100 border-orange-600 text-black-lg hover:bg-orange-600 focus:bg-orange-600 focus:text-white hover:text-white p-2 rounded'
						>
							Rice
						</button>
						<button
							onClick={() =>
								filterType('dessert')
							}
							className='m-1 bg-orange-100 border-orange-600 text-black-lg hover:bg-orange-600 focus:bg-orange-600 focus:text-white hover:text-white p-2 rounded'
						>
							Desserts
						</button>
					</div>
				</div>

				{/* Filter Price */}
				<div>
					<p className='font-bold text-gray-700'>
						Filter Price
					</p>
					<div className='flex justify-between max-w-[390px] w-full'>
						<button
							onClick={() => filterPrice('$')}
							className='m-1 bg-orange-100 border-orange-600 text-black-lg hover:bg-orange-600 focus:bg-orange-600 focus:text-white hover:text-white rounded p-1'
						>
							$
						</button>
						<button
							onClick={() => filterPrice('$$')}
							className='m-1 bg-orange-100 border-orange-600 text-black-lg hover:bg-orange-600 focus:bg-orange-600 focus:text-white hover:text-white rounded p-1'
						>
							$$
						</button>
						<button
							onClick={() => filterPrice('$$$')}
							className='m-1 bg-orange-100 border-orange-600 text-black-lg hover:bg-orange-600 focus:bg-orange-600 focus:text-white hover:text-white rounded p-1'
						>
							$$$
						</button>
					</div>
				</div>
			</div>

			{/* Display foods */}
			<div className='grid grid-cols-2 lg:grid-cols-4 gap-6 pt-4'>
				{foods.map((item, index) => (
					<div
						key={index}
						className='border shadow-lg rounded-lg hover:scale-105 duration-300 bg-gray-50'
					>
						<img
							src={item.image}
							alt={item.name}
							className='w-full h-[200px] object-cover rounded-t-lg'
						/>
						<div className='flex justify-between px-2 py-4'>
							<p className='font-bold text-lg'>
								{item.name}
							</p>
							<p>
								<span className='bg-orange-500 text-white p-1 rounded-lg'>
									{item.price}
								</span>
							</p>
						</div>
					</div>
				))}
			</div>
		</div>
	);
};

export default Food;
