import styled from 'styled-components';
import { Theme } from '../../theme';

export const ContentHome = styled.div`
	display: flex;
	flex-direction: column;
	padding: 50px;
`;

export const TextMain = styled.h3`
	font-size: ${Theme.size.medium};
	font-weight: ${Theme.widthFont.regular};
	color: ${Theme.color.primary};
	font-family: ${Theme.source.primary};
	&::selection {
		overflow: hidden;
	}
`;

export const DashBoardValues = styled.div`
	display: grid;
	grid-template-columns: 400px 400px 400px 400px;
	gap: 50px;
`;

export const BoxDashboard = styled.div`
	display: flex;
	flex-direction: column;
	gap: 15px;
	border-radius: 10px;
	border: 1px solid ${Theme.color.room};
	padding: 30px;

	.title_dashboard {
		font-size: ${Theme.size.small};
		color: ${Theme.color.primary};
		font-weight: ${Theme.widthFont.light};
		font-family: ${Theme.source.primary};
		&::selection {
			overflow: hidden;
		}
	}
	.value_dashboard {
		font-size: ${Theme.size.medium};
		font-family: ${Theme.source.secundary};
		font-weight: ${Theme.widthFont.bold};
		color: ${Theme.color.primary};
		&::selection {
			overflow: hidden;
		}
	}
	.box_comparison {
		display: flex;
		align-items: center;
		gap: 10px;
		&::selection {
			overflow: hidden;
		}
	}
	.percentage_data {
		font-size: ${Theme.size.small};
		font-family: ${Theme.source.primary};
		font-weight: ${Theme.widthFont.light};
		color: ${Theme.color.secundary};
		&::selection {
			overflow: hidden;
		}
	}
	.comparison_data {
		font-size: ${Theme.size.small};
		font-family: ${Theme.source.primary};
		font-weight: ${Theme.widthFont.light};
		color: ${Theme.color.primary};
		&::selection {
			overflow: hidden;
		}
	}
`;

export const ContentGraph = styled.div`
	margin: 100px 0 0 0;
	display: flex;
	align-items: center;
	gap: 30px;
`;
