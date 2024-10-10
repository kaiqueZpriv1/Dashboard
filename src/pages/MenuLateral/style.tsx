import styled from 'styled-components';
import { Theme } from '../../theme';

export const Container = styled.div`
	width: 100%;
	height: 75px;
	border-bottom: 1px solid ${Theme.color.room};
`;

export const ContentHeader = styled.div`
	display: flex;
	align-items: center;
	justify-content: space-between;
	padding: 25px 25px;
`;

export const NavRouters = styled.div`
	display: flex;
	gap: 50px;
	align-items: center;
	justify-content: center;
	.box_router {
		display: flex;
		align-items: center;
		gap: 5px;
	}
	.btn_router {
		background: transparent;
		border: none;
		font-size: ${Theme.size.small};
		font-weight: ${Theme.widthFont.light};
		color: ${Theme.color.primary};
		cursor: pointer;
	}
	.btn_router::selection {
		overflow: hidden;
	}
`;
