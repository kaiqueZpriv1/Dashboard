import React from 'react';
import { Container, ContentHeader, NavRouters } from './style';

import { RiDashboardHorizontalLine } from 'react-icons/ri';
import { FaHome } from 'react-icons/fa';
import { GiFoodTruck } from 'react-icons/gi';

import { Link } from 'react-router-dom';
import { Theme } from '../../theme';

export const Header = () => {
	return (
		<>
			<Container>
				<ContentHeader>
					<NavRouters>
						<RiDashboardHorizontalLine
							size={25}
							color={`${Theme.color.primary}`}
						/>
						<Link to='/' style={{ textDecoration: 'none' }}>
							<div className='box_router'>
								<FaHome size={20} color={`${Theme.color.primary}`} />
								<button className='btn_router'>Home</button>
							</div>
						</Link>
						<Link to='/request' style={{ textDecoration: 'none' }}>
							<div className='box_router'>
								<GiFoodTruck size={20} color={`${Theme.color.primary}`} />
								<button className='btn_router'>requests</button>
							</div>
						</Link>
					</NavRouters>
				</ContentHeader>
			</Container>
		</>
	);
};
