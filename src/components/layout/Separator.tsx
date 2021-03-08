import { useEffect, useState } from 'react';

interface IProps {
	size: 'sm' | 'md' | 'lg';
}

export function Separator({ size }: IProps) {
	const [separation, setSeparation] = useState<number>(2);

	useEffect(() => {
		switch (size) {
			case 'md':
				setSeparation(4);
				break;
			case 'lg':
				setSeparation(6);
				break;
		}
	}, [size]);

	return <hr className={`my-${separation}`} />;
}
