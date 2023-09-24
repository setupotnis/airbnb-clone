'use client';
import Container from '../container';
import CategoryBox from '../CategoryBox';
import { usePathname, useSearchParams } from 'next/navigation';
import { categories } from '@/app/utils/constants';

const Categories = () => {
	const params = useSearchParams();
	const category = params?.get('category');
	const pathname = usePathname();

	const isMainPage = pathname === '/';

	if (!isMainPage) {
		return null;
	}

	return (
		<Container>
			<div
				className='
            pt-4
            flex
            flex-row
            items-center
            justify-between
            overflow-x-auto
            '
			>
				{categories.map(({ label, icon, description }, index) => (
					<CategoryBox
						key={index}
						label={label}
						icon={icon}
						description={description}
						selected={category === label}
					/>
				))}
			</div>
		</Container>
	);
};

export default Categories;
