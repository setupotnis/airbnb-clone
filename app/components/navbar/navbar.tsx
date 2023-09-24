'use client';
import { Categories, Logo, Search, UserMenu } from '.';
import Container from '../container';
import { SafeUser } from '../../types';

interface NavBarProps {
	currentUser?: SafeUser | null;
}

const navbar: React.FC<NavBarProps> = ({ currentUser }) => {
	return (
		<div className='fixed w-full bg-white z-10 shadow-sm'>
			<div className='py-4 border-b-[1px]'>
				<Container>
					<div className='flex flex-row justify-between items-center gap-3 md:gap-0'>
						<Logo />
						<Search />
						<UserMenu currentUser={currentUser} />
					</div>
				</Container>
			</div>
			<Categories />
		</div>
	);
};

export default navbar;
