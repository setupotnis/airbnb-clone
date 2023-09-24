'client only';
import './globals.css';
import { Nunito } from 'next/font/google';
import { ClientOnly, RegisterModal, Navbar, LoginModal } from './components';
import { ToasterProvider } from './providers';
import { getCurrentUser } from './actions';

const font = Nunito({ subsets: ['latin'] });

export const metadata = {
	title: 'Airbnb Clone',
	description: 'An amazing Airbnb clone!',
};

export default async function RootLayout({ children }: { children: React.ReactNode }) {
	const currentUser = await getCurrentUser();
	return (
		<html lang='en'>
			<body className={font.className}>
				<ClientOnly>
					<ToasterProvider />
					<RegisterModal />
					<LoginModal />
					<Navbar currentUser={currentUser} />
				</ClientOnly>
				{children}
			</body>
		</html>
	);
}
