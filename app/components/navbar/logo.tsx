'use client';
import Image from 'next/image';
import { useRouter } from 'next/navigation';

function logo() {
	const router = useRouter();

	return (
		<Image
			onClick={() => router.push('/')}
			className='hidden md:block cursor-pointer'
			src='/images/airbnb-logo.png'
			width={100}
			height={100}
			alt='Logo'
		/>
	);
}

export default logo;
