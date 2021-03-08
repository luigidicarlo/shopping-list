import { Link } from 'react-router-dom';

const defaultClasses =
	'inline-block text-white bg-blue-600 px-4 py-2 rounded transition hover:bg-blue-700';

interface IProps {
	to: string;
	className?: string;
	children?: React.ReactNode;
}

export function LinkButton({ to, className = '', children = '' }: IProps) {
	return (
		<Link to={to} className={`${defaultClasses} ${className || ''}`}>
			{children}
		</Link>
	);
}
