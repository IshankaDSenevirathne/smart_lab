import nodemailer from 'nodemailer';

const email = process.env.EMAIL;
const password = process.env.PASSWORD;
export const config = {
	runtime: 'experimental-edge',
};
const handler = async (req, res) => {
	if (req.method === 'POST') {
		const data = req.body;
		if (
			!data ||
			!data.name ||
			!data.email ||
			!data.requirements ||
			!data.organization ||
			!data.mobile ||
			!data.budget
		) {
			return new Response(JSON.stringify({ success: false }), {
				status: 400,
				headers: {
					'Content-Type': 'application/json',
				},
			});
		}
		const transporter = nodemailer.createTransport({
			service: 'gmail',
			auth: {
				user: email,
				pass: password,
			},
		});
		const mailOptions = {
			from: data.email,
			to: email,
		};
		const mailData = {
			html: `
				<div>
					<p>Full Name</p>
					<p>${data.name}</p>
					<p>Full Name</p>
					<p>${data.organization}</p>
					<p>Mobile No</p>
					<p>${data.mobile}</p>
					<p>Email</p>
					<p>${data.email}</p>
					<p>Requirements</p>
					<p>${data.requirements}</p>
					<p>Budget</p>
					<p>${data.budget}</p>
				</div>`,
		};
		try {
			await transporter.sendMail({
				...mailOptions,
				...mailData,
				subject: `Message from ${data.name}, ${data.organization}`,
			});

			return new Response(JSON.stringify({ success: true }), {
				status: 200,
				headers: {
					'Content-Type': 'application/json',
				},
			});
		} catch (err) {
			console.log(err);
			return new Response(JSON.stringify({ success: false }), {
				status: 400,
				headers: {
					'Content-Type': 'application/json',
				},
			});
		}
	}
	return new Response(JSON.stringify({ success: false }), {
		status: 400,
		headers: {
			'Content-Type': 'application/json',
		},
	});
};

export default handler;
