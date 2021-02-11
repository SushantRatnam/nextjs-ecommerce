import Head from 'next/head';
import Products from '../components/Products';
import styles from '../styles/Home.module.css';

export default function Home({giftcards}) {
	return (
		<div className={styles.container}>
			<Head>
				<title>Create Next App</title>
				<link rel='icon' href='/favicon.ico' />
			</Head>

			<main className={styles.main}>
				<Products giftcards={giftcards}/>
			</main>
		</div>
	);
}

export const getStaticProps = async () => {
	const res = await fetch('http://localhost:3001/content')
	const giftcards = await res.json()
	return {
		props: {
			giftcards
		}
	}
}