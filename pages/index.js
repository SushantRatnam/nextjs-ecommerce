import Head from 'next/head';
import Products from '../components/Products';

export default function Home({ giftcards }) {
	return (
		<div>
			<Head>
				<title>Mini Mall</title>
				<link rel='icon' href='/favicon.ico' />
			</Head>

			<main>
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
