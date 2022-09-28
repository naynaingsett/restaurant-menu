import React from 'react';

const HeadlineCards = () => {
	return (
		<div className='max-w-[1640px] mx-auto p-4 py-12 grid md:grid-cols-3 gap-6'>
			{/* Card */}
			<div className='rounded-xl relative'>
				{/* Overlay */}
				<div className='absolute w-full h-full bg-black/50 rounded-xl text-white'>
					<p className='font-bold text-2xl px-2 pt-4'>
						European Dishes
					</p>
					<p className='px-2'>Through November</p>
					<button className='border-white bg-white text-black mx-2 absolute bottom-4 p-1 rounded'>
						Order Now
					</button>
				</div>
				<img
					className='max-h-[160px] md:max-h-[200px] w-full object-cover rounded-xl'
					src='https://images.unsplash.com/photo-1563379926898-05f4575a45d8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80'
					alt='/'
				/>
			</div>
			{/* Card */}
			<div className='rounded-xl relative'>
				{/* Overlay */}
				<div className='absolute w-full h-full bg-black/50 rounded-xl text-white'>
					<p className='font-bold text-2xl px-2 pt-4'>
						New Dishes
					</p>
					<p className='px-2'>Weekly Specials</p>
					<button className='border-white bg-white text-black mx-2 absolute bottom-4 p-1 rounded'>
						Order Now
					</button>
				</div>
				<img
					className='max-h-[160px] md:max-h-[200px] w-full object-cover rounded-xl'
					src='https://images.unsplash.com/photo-1568901346375-23c9450c58cd?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1899&q=80'
					alt='/'
				/>
			</div>
			{/* Card */}
			<div className='rounded-xl relative'>
				{/* Overlay */}
				<div className='absolute w-full h-full bg-black/50 rounded-xl text-white'>
					<p className='font-bold text-2xl px-2 pt-4'>
						We Deliver Fancy Desserts Too
					</p>
					<p className='px-2'>Tasty Treats</p>
					<button className='border-white bg-white text-black mx-2 absolute bottom-4 p-1 rounded'>
						Order Now
					</button>
				</div>
				<img
					className='max-h-[160px] md:max-h-[200px] w-full object-cover rounded-xl'
					src='https://images.unsplash.com/photo-1567620905732-2d1ec7ab7445?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=480&q=80'
					alt='/'
				/>
			</div>
		</div>
	);
};

export default HeadlineCards;
