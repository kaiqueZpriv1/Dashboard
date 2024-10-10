import React from 'react';
import { Container } from './style';
import { Header } from '../MenuLateral';
import { DashBoardBox } from '../dashboard';

export const Home = () => {
	return (
		<>
			<Container>
				<Header />
				<DashBoardBox />
			</Container>
		</>
	);
};
