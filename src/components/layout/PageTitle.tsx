import { useHistory } from 'react-router';

interface IProps {
	title: string;
}

export function PageTitle({ title }: IProps) {
	const history = useHistory();

	const navigateBack = () => history.goBack();

	return (
		<nav className="flex items-center bg-blue-600 p-2 mb-4 text-white">
			<button
				className="p-2 flex items-center justify-center outline-none mt-1 mr-1"
				onClick={navigateBack}
			>
				<i className="fas fa-chevron-left"></i>
			</button>
			<h1 className="text-2xl">{title}</h1>
		</nav>
	);
}
