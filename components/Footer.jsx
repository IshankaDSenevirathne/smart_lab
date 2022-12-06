export default function Footer() {
	return (
		<footer className="bg-gray-900 py-5 flex items-center justify-center text-white font-semibold">
			<a
				href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
				target="_blank"
				rel="noopener noreferrer"
			>
				<p className="inline-block px-3 py-px text-xs font-semibold tracking-wider uppercase rounded-full ">
					Smart Lab {new Date().getFullYear()}
				</p>
			</a>
		</footer>
	);
}
