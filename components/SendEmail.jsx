import { useState } from 'react';
import { Alert } from './Alert';
import Spinner from '../components/util/Spinner';
export default function SendEmail() {
	//state values for user inputs
	const [name, setName] = useState('');
	const [organization, setOrganization] = useState('');
	const [email, setEmail] = useState('');
	const [mobile, setMobile] = useState('');
	const [requirements, setRequirements] = useState('');
	const [budget, setBudget] = useState('');
	const [status, setStatus] = useState('');
	const [msg, setMsg] = useState('');
	const [isOpen, setIsOpen] = useState(false);
	const [isLoading, setIsLoading] = useState(false);

	//handle sending email
	async function handleSubmit(e) {
		e.preventDefault();
		let data = {
			name,
			mobile,
			email,
			requirements,
			organization,
			budget,
		};
		setIsLoading(true);
		await fetch('/api/send-email', {
			method: 'POST',
			body: JSON.stringify(data),
			headers: {
				'Content-Type': 'application/json',
				Accept: 'application/json',
			},
		}).then((res) => {
			setIsLoading(false);
			if (res.status === 200) {
				setStatus('success');
				setMsg('Email has been sent successfully!');
				setIsOpen(true);
			} else {
				setStatus('error');
				setMsg('Failed to send emai!');
				setIsOpen(true);
			}
			setName('');
			setOrganization('');
			setEmail('');
			setMobile('');
			setRequirements('');
			setBudget('');
		});
	}

	return (
		<div className="my-20 p-5 bg-white w-full max-w-screen-md rounded-md shadow-md">
			<form className="flex flex-col gap-1 w-full">
				<formgroup className="flex flex-col">
					<label className="text-lg py-2 text-black " htmlFor="name">
						Full Name
					</label>
					<input
						className="rounded-sm p-2 border"
						onChange={(e) => setName(e.target.value)}
						type="text"
						name="name"
						value={name}
					/>
				</formgroup>
				<formgroup className="flex flex-col">
					<label
						className="text-lg py-2 text-black "
						htmlFor="organization"
					>
						Organization Name
					</label>
					<input
						className="rounded-sm p-2 border"
						onChange={(e) => setOrganization(e.target.value)}
						type="text"
						name="organization"
						value={organization}
					/>
				</formgroup>
				<formgroup className="flex flex-col">
					<label
						className="text-lg py-2 text-black "
						htmlFor="mobile"
					>
						Mobile No
					</label>
					<input
						className="rounded-sm p-2 border"
						onChange={(e) => setMobile(e.target.value)}
						type="number"
						name="mobile"
						value={mobile}
					/>
				</formgroup>
				<formgroup className="flex flex-col">
					<label className="text-lg py-2 text-black " htmlFor="email">
						Email
					</label>
					<input
						className="rounded-sm p-2 border"
						onChange={(e) => setEmail(e.target.value)}
						type="email"
						name="email"
						value={email}
					/>
				</formgroup>
				<formgroup className="flex flex-col">
					<label
						className="text-lg py-2 text-black "
						htmlFor="requirements"
					>
						Requirements
					</label>
					<textarea
						name="requirements"
						className="resize-none h-40 rounded-sm p-2 border"
						onChange={(e) => setRequirements(e.target.value)}
						value={requirements}
					/>
				</formgroup>
				<formgroup className="flex flex-col">
					<label
						className="text-lg py-2 text-black "
						htmlFor="budget"
					>
						Budget
					</label>
					<input
						className="rounded-sm p-2 border"
						onChange={(e) => setBudget(e.target.value)}
						type="number"
						name="budget"
						value={budget}
					/>
				</formgroup>
				<div className="w-full flex justify-center py-10">
					<button
						className="inline-flex items-center justify-center h-12 px-6 mr-6 font-medium tracking-wide text-white transition duration-300 rounded shadow-md bg-red-400 hover:bg-red-700 focus:shadow-outline focus:outline-none"
						onClick={(e) => handleSubmit(e)}
						type="submit"
					>
						{isLoading ? (
							<span className="flex items-center gap-2 justify-center">
								<Spinner /> <p>Loading...</p>
							</span>
						) : (
							'Send'
						)}
					</button>
				</div>
			</form>
			<Alert
				status={status}
				msg={msg}
				isOpen={isOpen}
				setIsOpen={setIsOpen}
			/>
		</div>
	);
}
