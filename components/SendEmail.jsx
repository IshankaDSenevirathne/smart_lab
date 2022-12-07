import { useState } from 'react';
import { Alert } from './Alert';

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

		await fetch('/api/contact', {
			method: 'POST',
			body: JSON.stringify(data),
			headers: {
				'Content-Type': 'application/json',
				Accept: 'application/json',
			},
		}).then((res) => {
			if (!res.ok) {
				setStatus('error');
				setMsg('Failed to send emai!');
				setIsOpen(true);
				setName('');
				setOrganization('');
				setEmail('');
				setMobile('');
				setRequirements('');
				setBudget('');
			}
			setStatus('success');
			setMsg('Email has been sent successfully!');
			setIsOpen(true);
			setName('');
			setOrganization('');
			setEmail('');
			setMobile('');
			setRequirements('');
			setBudget('');
		});
	}

	return (
		<div className="my-20 p-5 bg-white rounded-md shadow-md">
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
					/>
				</formgroup>
				<div className="w-full flex justify-center py-10">
					<button
						className=" px-5 py-2 border border-white hover:text-red-500 text-white hover:bg-red-100 duration-300 delay-10 hover:border hover:border-red-200 bg-red-400 text-lg w-fit rounded-md"
						onClick={(e) => handleSubmit(e)}
						type="submit"
					>
						Send
					</button>
				</div>
			</form>
			<Alert
				status={status}
				msg={msg}
				isOpen={isOpen}
				setIsOpen={setIsOpen}
				setMsg={setMsg}
				setStatus={setStatus}
			/>
		</div>
	);
}
