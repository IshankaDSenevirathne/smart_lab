import nodemailer from 'nodemailer';

const email = process.env.EMAIL;
const password = process.env.PASSWORD;

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
			return res.status(400).send({ message: 'Bad request' });
		}
		const transporter = nodemailer.createTransport({
			service: 'gmail',
			auth: {
				user: email,
				pass: password,
			},
		});
		const mailOptions = {
			from: req.body.email,
			to: email,
		};
		const mailData = {
			html: `
				<div>
					<p>Full Name</p>
					<p>${req.body.name}</p>
					<p>Full Name</p>
					<p>${req.body.organization}</p>
					<p>Mobile No</p>
					<p>${req.body.mobile}</p>
					<p>Email</p>
					<p>${req.body.email}</p>
					<p>Requirements</p>
					<p>${req.body.requirements}</p>
					<p>Budget</p>
					<p>${req.body.budget}</p>
				</div>`,
		};
		try {
			await transporter.sendMail({
				...mailOptions,
				...mailData,
				subject: `Message from ${data.name}, ${data.organization}`,
			});

			return res.status(200).json({ success: true });
		} catch (err) {
			console.log(err);
			return res.status(400).json({ error: err.message });
		}
	}
	return res.status(400).json({ message: 'Method not allowed!' });
};

export default handler;
