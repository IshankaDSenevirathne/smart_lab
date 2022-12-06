import Head from 'next/head';
import Header from '../components/Header';
import Content from '../components/Content';

export default function Home() {
	return (
		<div>
			<Head>
				<title>Smart Lab</title>
				<meta name="description" content="Lab Furniture company" />
				<link rel="icon" href="/favicon.ico" />
			</Head>
			<main>
				<Header />
				<Content />
			</main>
		</div>
	);
}
