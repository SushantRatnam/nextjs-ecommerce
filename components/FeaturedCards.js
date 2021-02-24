import Link from 'next/link';

function FeaturedCards() {
	return (
		<section className='container flex flex-wrap justify-between pt-16 mx-auto'>
			<article className='flex-1 mr-5'>
				<h1 className='mb-3 text-5xl'>Gift Cards</h1>
				<p className='mb-5'>
					<strong>Show someone you care by sending an eGift today. Easy delivery, within minutes.</strong>
				</p>
				<p className='mb-5'>While you may not be able to visit with your loved ones or thank those supporting your local community in person, we have a simple solution. eGifts are a great way to give thanks, give a gift, or to simply show someone you’re thinking of them. With hundreds of brands to choose from, there is an eGift Card for everyone!</p>
				<Link href='#'>
					<button className='bg-blue-customBtn text-white text-xl p-2.5 w-auto'>Send an eGift Card</button>
				</Link>
			</article>
			<div className='flex-1 '>Featured Cards Space</div>
		</section>
	);
}
export default FeaturedCards;
