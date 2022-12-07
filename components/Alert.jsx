import { Transition, Dialog } from '@headlessui/react';
import { Fragment } from 'react';

export function Alert({ isOpen, setIsOpen, status, setStatus, msg, setMsg }) {
	return (
		<Transition appear show={isOpen} as={Fragment}>
			<Dialog
				as="div"
				className="relative z-50"
				onClose={() => {
					setIsOpen(false);
					setStatus('');
					setMsg('');
				}}
			>
				<Transition.Child
					as={Fragment}
					enter="ease-out duration-300"
					enterFrom="opacity-0"
					enterTo="opacity-100"
					leave="ease-in duration-200"
					leaveFrom="opacity-100"
					leaveTo="opacity-0"
				>
					<div className="fixed inset-0 bg-gray-700 bg-opacity-0 backdrop-brightness-50 transition-opacity block" />
				</Transition.Child>

				<div className="fixed z-50 inset-0 overflow-y-auto">
					<div
						className="flex min-h-screen  w-screen text-center sm:block sm:px-2 lg:px-4"
						style={{ fontSize: 0 }}
					>
						<span
							className="hidden sm:inline-block sm:align-middle sm:h-screen"
							aria-hidden="true"
						>
							&#8203;
						</span>
						<Transition.Child
							as={Fragment}
							enter="ease-out duration-300"
							enterFrom="opacity-0 scale-95"
							enterTo="opacity-100 scale-100"
							leave="ease-in duration-200"
							leaveFrom="opacity-100 scale-100"
							leaveTo="opacity-0 scale-95"
						>
							<Dialog.Panel className="flex text-base text-left transform transition shadow-2xl sm:inline-block sm:max-w-xl md:max-w-2xl md:mx-4 sm:align-middle lg:max-w-7xl">
								<div className="flex flex-col justify-center px-5 py-4 bg-white rounded-md shadow-2xl w-screen sm:w-fit">
									<h1
										className={`text-3xl font-bold flex items-center gap-2 uppercase ${
											status == 'success'
												? 'text-green-400'
												: 'text-red-400'
										}
										`}
									>
										{' '}
										{status == 'success' ? (
											<svg
												xmlns="http://www.w3.org/2000/svg"
												fill="none"
												viewBox="0 0 24 24"
												strokeWidth={1.5}
												stroke="#4ade80"
												className="w-8 h-8"
											>
												<path
													strokeLinecap="round"
													strokeLinejoin="round"
													d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
												/>
											</svg>
										) : (
											<svg
												xmlns="http://www.w3.org/2000/svg"
												fill="none"
												viewBox="0 0 24 24"
												strokeWidth={1.5}
												stroke="#f87171"
												className="w-8 h-8"
											>
												<path
													strokeLinecap="round"
													strokeLinejoin="round"
													d="M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126zM12 15.75h.007v.008H12v-.008z"
												/>
											</svg>
										)}
										{status}
									</h1>
									<p>{msg}</p>
									<div className="flex w-full items-center justify-end mt-5">
										<button
											className=" px-5 py-2 border border-white hover:text-gray-500 text-gray-900 hover:bg-gray-100 duration-300 delay-10 hover:border hover:border-gray-200 bg-gray-200 text-md w-fit rounded-md"
											onClick={(e) => {
												setIsOpen(false);
												setStatus('');
												setMsg('');
											}}
											type="submit"
										>
											OK
										</button>
									</div>
								</div>
							</Dialog.Panel>
						</Transition.Child>
					</div>
				</div>
			</Dialog>
		</Transition>
	);
}
