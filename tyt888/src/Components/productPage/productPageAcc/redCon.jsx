import { useState, useEffect } from "react";
import { TEXTS } from "../../../Consts/Content";

export const RedCon = ({ size, series }) => {
	const [redCon, setRedCon] = useState();
	const product = TEXTS.products.accessories[series];

	useEffect(() => {
		setRedCon(
			product[size].connectors.map((connector, index) => (
				<li key={index}>
					<p>{connector}</p>
				</li>
			))
		);
	}, [size, TEXTS.common.pl]);

	return (
		<>
			<h3 className='redConTitle'>{product.common.connectorsTitle}</h3>
			<ul className='redCon'>{redCon}</ul>
		</>
	);
};
