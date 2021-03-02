import Link from 'next/link';
import Image from 'next/image';

function Header() {
	return (
		<ul className='flex justify-end pt-5 my-3'>
			<li>
				<a className='flex flex-col mr-6 text-xs text-center max-w-header'href=''>
					<div className='mx-auto'>
						<Image width={25} height={25} src='https://productimages.nimbledeals.com/nimblebuy/f4c49679771d1cb0178eeac16141c082' alt=''></Image>
					</div>
					<span>Home</span>
				</a>
			</li>
			<li>
				<a className='flex flex-col mr-6 text-xs text-center max-w-header'href=''>
					<div className='mx-auto'>
						<Image className='mx-auto' width={25} height={25} src='https://productimages.nimbledeals.com/nimblebuy/79af4aa8be3179351fe114e9c7238e' alt=''></Image>
					</div>
					<span>Check Balance</span>
				</a>
			</li>
			<li>
				<a className='flex flex-col mr-6 text-xs text-center max-w-header'href=''>
					<div className='mx-auto'>
						<Image width={25} height={25} src='https://productimages.nimbledeals.com/nimblebuy/d49e53e6b1da262bbda897ef9a12d360' alt=''></Image>
					</div>
					<span>Activate Pickup Gift Cards</span>
				</a>
			</li>
			<li>
				<a className='flex flex-col mr-6 text-xs text-center max-w-header'href=''>
					<div className='mx-auto'>
						<Image width={25} height={25} src='https://productimages.nimbledeals.com/nimblebuy/f9c45cd930691c839ffaecbc55458cb' alt=''></Image>
					</div>
					<span>Sign In/Sign Up</span>
				</a>
			</li>
			<li>
				<a className='relative flex flex-col mr-6 text-xs text-center max-w-header'href=''>
					<span className='absolute font-bold text-blue-800 -top-2 -right-2' >0</span>
					<div className='mx-auto'>
						<Image width={25} height={25} src='https://productimages.nimbledeals.com/nimblebuy/f19d8252497d8a5a5ba176f58b07f' alt=''></Image>
					</div>
					<span>Cart</span>
				</a>
			</li>
		</ul>
	);
}

export default Header;
