import axios from 'axios';
import { useQuery, QueryClient, QueryClientProvider, useQueryClient } from 'react-query';
import { ReactQueryDevtools } from 'react-query/devtools';
import Image from 'next/image';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

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
		// const res = await axios.get('https://testingcallback.free.beeceptor.com/banner');

		return res.data;
	});
	if (status !== 'success') {
		return <Image src='http://placehold.it/1440x405' alt='placeholder' className='mx-auto' layout='responsive' width='1440' height='405'></Image>;
	}


	const responsive = {
		superLargeDesktop: {
			// the naming can be any, depends on you.
			breakpoint: { max: 4000, min: 3000 },
			items: 1,
			slidesToSlide: 1,
		},
		desktop: {
			breakpoint: { max: 3000, min: 1024 },
			items: 1,
			slidesToSlide: 1,
		},
		tablet: {
			breakpoint: { max: 1024, min: 464 },
			items: 1,
			slidesToSlide: 1,
		},
		mobile: {
			breakpoint: { max: 464, min: 0 },
			items: 1,
			slidesToSlide: 1,
		},
	};

	return (
		<Carousel
			swipeable={false}
			draggable={false}
			showDots={true}
			responsive={responsive}
			ssr={true} // means to render carousel on server-side.
			infinite={true}
			autoPlay={true}
			autoPlaySpeed={3000}
			keyBoardControl={true}>
			{data.banner.map((item, idx) => {
				return (
					<div key={item.src}>
						<Image className='mx-auto' alt={item.alt} src={item.src} layout='responsive' width={1440} height={405}></Image>
					</div>
				);
			})}
		</Carousel>
	);
}

export default Banner;
