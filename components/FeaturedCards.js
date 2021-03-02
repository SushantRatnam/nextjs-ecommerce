import Link from 'next/link';
import { useRouter } from 'next/router'
import en from "../locales/en";
import fr from "../locales/fr";


function FeaturedCards() {
	const router = useRouter();
	const { locale } = router;
	const translatedMessage = locale === 'en' ? en : fr;
	return (
		<section className='container flex flex-wrap justify-between pt-16 mx-auto'>
			<article className='flex-1 pr-8 mr-16 leading-7'>
				<h1 className='mb-3 text-5xl'>{translatedMessage.heading}</h1>
				<p className='mb-5'>
					<strong>{translatedMessage.subHeading}</strong>
				</p>
				<p className='mb-5'>{translatedMessage.description}</p>
				<Link href='#'>
					<button className='bg-blue-customBtn text-white text-xl p-2.5 w-auto'>Send an eGift Card</button>
				</Link>
			</article>
			<div className='flex-1 '>Featured Cards Space</div>
		</section>
	);
}
export default FeaturedCards;
