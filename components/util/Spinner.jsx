export default function Spinner() {
	return (
		<div className="flex items-center justify-center gap-2 ">
			<span className="h-5 w-5 block rounded-full border-4 border-red-400 border-t-red-800 border-r-red-800 animate-spin"></span>
		</div>
	);
}
