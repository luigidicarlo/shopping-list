import React from 'react';
import { Separator } from '../layout/Separator';

interface IProps {
	title?: string;
}

interface ITitleProps {
	title: string;
}

function ProductFormTitle({ title }: ITitleProps) {
	return (
		<React.Fragment>
			<h1 className="text-2xl text-center">{title}</h1>
			<Separator size="md" />
		</React.Fragment>
	);
}

export function ProductForm({ title }: IProps) {
	return (
		<form className="block container mx-auto md:w-1/2 my-4 border border-gray-300 rounded p-4">
			{title ? <ProductFormTitle title={title} /> : null}
		</form>
	);
}
