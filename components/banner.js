import axios from 'axios';
import { useQuery, QueryClient, QueryClientProvider, useQueryClient } from 'react-query';
import { ReactQueryDevtools } from 'react-query/devtools';
import Image from 'next/image';
import 'react-responsive-carousel/lib/styles/carousel.min.css'; // requires a loader
import { Carousel } from 'react-responsive-carousel';

const queryClient = new QueryClient();

function Banner() {
	return (
		<QueryClientProvider client={queryClient}>
			<div className='container mx-auto'>
				<BannerData />
			</div>
			<ReactQueryDevtools initialIsOpen={false} />
		</QueryClientProvider>
	);
}

function BannerData() {
	const queryClient = useQueryClient();
	const { status, data } = useQuery('banner', async () => {
		const res = await axios.get('https://api.npoint.io/5603b3fdf4e75017bf60');
		return res.data;
	});
	if (status !== 'success') {
		return <Image src='http://placehold.it/1440x405' alt="placeholder" className='mx-auto' layout='responsive' width='1440' height='405'></Image>
	}

	return (
		<Carousel autoPlay infiniteLoop emulateTouch showThumbs={false}>
			{data.banner.map((item, idx) => {
				return (
					<div key={item.src}>
						<Image className='mx-auto' alt={item.alt} src={item.src} layout='responsive' width='1440' height='405'></Image>
					</div>
				);
			})}
		</Carousel>
	);
}

export default Banner;
