import Card from '../components/Card';

//import { InferGetStaticPropsType } from 'next'

// type images = {
//     "id": number,
//     "src": string,
//     "smallSrc": string,
//     "mobileSrc": string
//     "title": string,
//     "smallListViewSrc": string,
//     "imageAltTagText": string,
//     "imageTitleTagText": string,
//     "defaultImage": boolean
// }

// type timeLines = {
//     "startDate": number,
//     "endDate": number
// }

// type categories = {
//     "id": number,
//     "name": string,
//     "imageUrl": null | string,
//     "fullUrl": string,
//     "customId": string,
//     "primary": boolean
// }

// type cities = {
//     "id": number,
//     "name": string,
//     "readableName": string,
//     "type": string
// }

// type offers = {
//     "offerId": number,
//     "brand": {
//         "id": number,
//         "name": string
//     },
//     "minQuantityPerOrder": number,
//     "maxQuantityPerOrder": number,
//     "priceOptions": {
//         "minAmount": number,
//         "maxAmount": number,
//         "type": string
//     },
//     "primary": boolean
// }

// type GiftCard = {
//     "id": number,
//     "readableName": string,
//     "aliasUri": null | string,
//     "description": string,
//     "title": string,
//     "type": string,
//     "status": string,
//     "images": images[],
//     "categories": categories[],
//     "timeLines": timeLines,
//     "redemptionInstructions": string,
//     "associateInstructions": string | null,
//     "graphicOverlayEnabled": boolean,
//     "graphicOverlay": null | boolean,
//     "isSoldOut": boolean,
//     "brandName": string,
//     "companyName": string,
//     "offers": offers[],
//     "locations": string[],
//     "cities": cities[],
//     "productDetailsUrl": string
// }

function Products({ giftcards }) {
	return (
		<ul>
			{giftcards.map((card) => {
				return <Card key={card.id} src={card.images[0].src} />;
			})}
		</ul>
	);
}

export default Products;
