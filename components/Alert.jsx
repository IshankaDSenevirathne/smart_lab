import { Transition, Dialog } from '@headlessui/react';
import { useState, Fragment } from 'react';

export function SuccessAlert({ isOpen, setIsOpen }) {
	return (
		<Transition appear show={isOpen} as={Fragment}>
			<Dialog
				as="div"
				className="relative z-50"
				onClose={() => {
					setIsOpen(false);
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
								<div className="flex flex-col justify-center px-5 py-16 bg-white rounded-md shadow-2xl w-screen sm:w-fit">
									<h1 className="text-3xl font-bold text-center">
										SUCCESS
									</h1>
								</div>
							</Dialog.Panel>
						</Transition.Child>
					</div>
				</div>
			</Dialog>
		</Transition>
	);
}
