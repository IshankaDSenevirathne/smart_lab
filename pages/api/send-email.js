export default function (req, res) {
	let nodemailer = require('nodemailer');
	const transporter = nodemailer.createTransport({
		port: 465,
		host: 'smtp.gmail.com',
		auth: {
			user: process.env.EMAIL,
			pass: process.env.PASSWORD,
		},
		secure: true,
	});
	const mailData = {
		from: req.body.email,
		to: `${process.env.EMAIL}`,
		subject: `Message from ${req.body.name}, Smart Lab`,
		html: `
            <div>
                <p>Full Name</p>
                <p>${req.body.name}</p>
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
	transporter.sendMail(mailData, function (err, info) {
		if (err) {
			console.log(err);
		} else {
			console.log(info);
		}
		res.status(200);
	});

	console.log(req.body);
}
