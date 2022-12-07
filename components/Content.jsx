import Clients from './Clients';
import SendEmail from './SendEmail';
import FactoryProcess from './FactoryProcess';
export default function Content() {
	return (
		<div>
			<div className="w-full max-w-screen-xl flex flex-col items-center justify-center mx-auto px-2 md:px-5 lg:px-20">
				<Clients />
				<FactoryProcess />
				<SendEmail />
			</div>
		</div>
	);
}
