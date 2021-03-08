import { useEffect, useState } from 'react';

type FlexDirection = 'row' | 'column';

interface IProps {
	children?: React.ReactNode;
	className?: string;
	centered?: boolean;
	flex?: FlexDirection;
}

const defaultClassName = 'container mx-auto';

const computeClassName = (
	className?: string,
	centered?: boolean,
	flex?: FlexDirection
) => {
	let computed = defaultClassName;

	if (className) computed += ` ${className}`;

	if (centered) computed += ' text-center';

	switch (flex) {
		case 'row':
			computed += ' flex items-center justify-between';
			break;
		case 'column':
			computed += ' flex flex-col items-center justify-between';
			break;
	}

	return computed;
};

export function Container({
	children = '',
	className = '',
	centered,
	flex,
}: IProps) {
	const [containerClassName, setContainerClassName] = useState<string>(
		defaultClassName
	);

	useEffect(() => {
		setContainerClassName(computeClassName(className, centered, flex));
	}, [className, centered, flex]);

	return <div className={containerClassName}>{children}</div>;
}
