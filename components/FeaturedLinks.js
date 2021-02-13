import Link from 'next/link';

function FeaturedLinks() {
	return (
		<section className='container px-5 mx-auto' role='main' aria-label='Reasons to buy gift cards with Kroger'>
			<ul className='flex-wrap justify-between mt-10 md:flex' aria-label='Reasons to buy gift cards with Kroger'>
				<li className='font-semibold flex-1 m-2.5 text-white p-2.5 shadow-customBtn'>
					<Link href='#'>
						<button className='bg-blue-customBtn w-full h-full p-2.5'>Current Offers</button>
					</Link>
				</li>
				<li className='font-semibold flex-1 m-2.5 text-white p-2.5 shadow-customBtn'>
					<Link href='#'>
						<button className='bg-blue-customBtn w-full h-full p-2.5'>Holiday Shopping</button>
					</Link>
				</li>
				<li className='font-semibold flex-1 m-2.5 text-white p-2.5 shadow-customBtn'>
					<Link href='#'>
						<button className='bg-blue-customBtn w-full h-full p-2.5'>Valentine's Day</button>
					</Link>
				</li>
				<li className='font-semibold flex-1 m-2.5 text-white p-2.5 shadow-customBtn'>
					<Link href='#'>
						<button className='bg-blue-customBtn w-full h-full p-2.5'>Streaming and Digital Entertainment</button>
					</Link>
				</li>
			</ul>
		</section>
	);
}

export default FeaturedLinks;
