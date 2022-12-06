import axios from 'axios';
import { useState } from 'react';
import { SuccessAlert } from './Alert';

export default function SendEmail() {
	//state values for user inputs
	const [name, setName] = useState('');
	const [email, setEmail] = useState('');
	const [mobile, setMobile] = useState('');
	const [requirements, setRequirements] = useState('');
	const [budget, setBudget] = useState('');
	const [submitted, setSubmitted] = useState(false);
	const [isOpen, setIsOpen] = useState(false);

	//handle sending email
	const handleSubmit = (e) => {
		e.preventDefault();
		let data = {
			name,
			mobile,
			email,
			requirements,
			budget,
		};

		// axios
		// 	.post('/api/send-email', data)
		// 	.then(function (response) {
		// 		if (response.status == 200) {
		// 			console.log('Success : ', response);
		// 			setSubmitted(true);
		// 			setName('');
		// 			setEmail('');
		// 			setMobile('');
		// 			setRequirements('');
		// 			setBudget('');
		// 		}
		// 	})
		// 	.catch(function (error) {
		// 		console.log('error : ', error);
		// 	});
		setIsOpen(true);
	};

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
			<SuccessAlert isOpen={isOpen} setIsOpen={setIsOpen} />
		</div>
	);
}
