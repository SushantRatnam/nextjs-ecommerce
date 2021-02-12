import Image from 'next/image';
import Link from 'next/link';

export default function Card({ image, title, brandName, minAmount, maxAmount }) {
	const { src: imageSrc, imageTitleTagText: imageTitle } = image;
	return (
		<li>
			<Link href='#'>
				<a title={imageTitle} className='grid-item image-card image-shadow'>
					<Image className='image-card__image lazy-image' alt={title} src={imageSrc} width='300' height='200' />
					<div className='image-card__content'>
						<div className='image-card__title'>
							<h2 className='image-card__heading'> {brandName} </h2>
							<p className='image_price'>
								${minAmount} - ${maxAmount}
							</p>
						</div>
					</div>
				</a>
			</Link>
		</li>
	);
}
