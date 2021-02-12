import Image from 'next/image';
import Link from 'next/link';

export default function Card({ image, title, brandName, minAmount, maxAmount }) {
	const { src: imageSrc, imageTitleTagText: imageTitle } = image;
	return (
		<li className='m-2.5 border border-solid border-gray-cardBorder shadow-card bg-gray-cardBackground flex-4-col'>
			<Link href='#'>
				<a title={imageTitle} className='grid-item image-card image-shadow'>
					<div className='p-2'>
						<Image className='p-2' alt={title} src={imageSrc} width='300' height='200' />
					</div>
					<div className='px-2 py-3 border border-t border-solid border-gray-cardDescriptionBorderTop'>
						<div className='flex justify-between'>
							<h2> {brandName} </h2>
							<p className='text-sm text-black-cardPrice'>
								${minAmount} - ${maxAmount}
							</p>
						</div>
					</div>
				</a>
			</Link>
		</li>
	);
}
