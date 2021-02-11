import Image from 'next/image'

export default function Card({
    src: imageSrc,
}) {
    return (
        <li>
            <Image
                src={imageSrc}
                width='300'
                height='200'
            />
        </li>
    )
}
