import Head from 'next/head';
import Banner from '../components/banner';
import FeaturedCards from '../components/FeaturedCards';
import FeaturedLinks from '../components/FeaturedLinks';
import Header from '../components/header';
import Products from '../components/Products';

export default function Home({ giftcards }) {
	return (
		<div>
			<Head>
				<meta charset="utf-8"/>
				<title>Mini Mall</title>
				<link rel='icon' href='/favicon.ico' />
				<meta name='description' content=' A Gift Card for every occasion. Over 200 gift cards from your favorite retailers. Find great deals and promotions for all of your gift card needs.'></meta>
			</Head>

			<main>
				<Header/>
				<Banner/>
				<FeaturedLinks />
				<FeaturedCards />
				<section id='cardList' className='container mx-auto'>
					<Products giftcards={giftcards} />
				</section>
			</main>
		</div>
	);
}

export const getStaticProps = async () => {
	const res = await fetch('https://api.npoint.io/e4903a20e48ec12832c7');
	const json = await res.json();
	const giftcards = json.content;
	return {
		props: {
			giftcards,
		},
	};
};
