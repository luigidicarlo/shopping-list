import { useEffect, useState } from 'react';

export type ButtonType = 'primary' | 'danger' | 'success';

interface IProps {
	onClick?: () => void;
	children?: React.ReactNode;
	className?: string;
	type?: ButtonType;
}

const defaultClasses = 'inline-block px-3 py-2 text-white rounded';

const getTypeClassNames = (type?: ButtonType) => {
	const defaultClassName = 'bg-blue-600 hover:bg-blue-700';

	switch (type) {
		case 'primary':
			return defaultClassName;
		case 'danger':
			return defaultClassName.replaceAll('blue', 'red');
		case 'success':
			return defaultClassName.replaceAll('blue', 'green');
		default:
			return defaultClassName;
	}
};

const computeClassName = (type?: ButtonType, className?: string) => {
	let computed = defaultClasses;

	computed += ` ${getTypeClassNames(type)}`;

	if (className) computed += ` ${className}`;

	return computed;
};

export function Button({ onClick, children, className, type }: IProps) {
	const [buttonClassNames, setButtonClassNames] = useState<string>(
		defaultClasses
	);

	useEffect(() => {
		setButtonClassNames(computeClassName(type, className));
	}, [className, type]);

	return (
		<button className={buttonClassNames} onClick={onClick}>
			{children}
		</button>
	);
}
