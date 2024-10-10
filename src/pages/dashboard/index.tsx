import React from 'react';

import {
	ContentHome,
	TextMain,
	DashBoardValues,
	BoxDashboard,
	ContentGraph,
} from './style';
import CircleGraph from '../graphCircle';
import GraphLineB from '../graphLine';

import { Fade } from 'react-awesome-reveal';

export const DashBoardBox = () => {
	const DashBoard = [
		{
			title: 'Receita Total',
			value: 'R$ 1.523,23',
			percentage: '-14.52%',
		},
		{
			title: 'Pedido(Mês)',
			value: '96',
			percentage: '-19.45%',
		},
		{
			title: ' Pedido(Dia)',
			value: '13',
			percentage: '-39.84%',
		},
		{
			title: 'Cancelamento(Mês)',
			value: '14',
			percentage: '-35.16%',
		},
	];
	return (
		<>
			<ContentHome>
				<TextMain>DashBoard</TextMain>
				<DashBoardValues>
					{DashBoard.map((i) => {
						return (
							<Fade cascade damping={0.4}>
								<BoxDashboard>
									<h3 className='title_dashboard'>{i.title}</h3>
									<h1 className='value_dashboard'>{i.value}</h1>
									<div className='box_comparison'>
										<span className='percentage_data'>{i.percentage}</span>
										<h3 className='comparison_data'>
											em relação ao mês passado
										</h3>
									</div>
								</BoxDashboard>
							</Fade>
						);
					})}
				</DashBoardValues>
				<ContentGraph>
					<GraphLineB />
					<CircleGraph />
				</ContentGraph>
			</ContentHome>
		</>
	);
};
