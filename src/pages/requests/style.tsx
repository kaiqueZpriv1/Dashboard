import styled from 'styled-components';
import { Theme } from '../../theme';

export const Container = styled.section`
	width: 100%;
	height: 1200px;
	display: flex;
	flex-direction: column;
	background: ${Theme.color.background};
`;

export const ContentRequest = styled.div`
	display: flex;
	flex-direction: column;
	margin-left: 50px;
`;

export const TitleRequest = styled.h3`
	font-size: ${Theme.size.medium};
	font-weight: ${Theme.widthFont.regular};
	color: ${Theme.color.primary};
	font-family: ${Theme.source.primary};
	&::selection {
		overflow: hidden;
	}
`;

export const FiltersRequests = styled.div`
	display: flex;
	align-items: center;
	gap: 15px;
	.text-filter {
		font-size: ${Theme.size.small};
		font-weight: ${Theme.widthFont.regular};
		color: ${Theme.color.primary};
		font-family: ${Theme.source.primary};
	}
	.ipt_global {
		padding: 5px 15px;
		border-radius: 5px;
		border: 1px solid ${Theme.color.room};
		background: transparent;
		font-size: ${Theme.size.small};
		color: ${Theme.color.primary};
		font-family: ${Theme.source.secundary};
	}
	.ipt_global:focus {
		outline: none;
	}
	.ipt_id {
		width: 260px;
	}
	.ipt_name {
		width: 350px;
	}
`;

export const SelectFilters = styled.select`
	padding: 5px 35px;
	border-radius: 5px;
	border: 1px solid ${Theme.color.room};
	background: ${Theme.color.background};
	color: #fafafa;
	font-family: ${Theme.source.secundary};
	&:focus {
		outline: none;
	}
`;

export const BtnFilterAplication = styled.button`
	padding: 6px 25px;
	background: ${Theme.color.fifth};
	border-radius: 5px;
	border: 1px solid ${Theme.color.room};
	color: ${Theme.color.primary};
	cursor: pointer;
	font-family: ${Theme.source.secundary};
`;

export const RequestGlobal = styled.div`
	border: 1px solid ${Theme.color.room};
	border-radius: 10px;
	width: 97%;
	height: 100%;
	display: flex;
	flex-direction: column;
`;

export const HeaderRequest = styled.div`
	padding: 10px 60px;
	display: flex;
	align-items: center;
	gap: 200px;
	border-bottom: 1px solid ${Theme.color.room};
	.text_request {
		font-size: ${Theme.size.small};
		color: ${Theme.color.room};
		font-family: ${Theme.source.primary};
		font-weight: ${Theme.widthFont.regular};
	}
`;

export const RequestFull = styled.div`
	display: grid;
	grid-template-columns: 280px 280px 280px 280px 280px 380px;
	align-items: center;
	border-bottom: 1px solid ${Theme.color.room};
	padding: 10px 20px;
	&:hover {
		/* background: ${Theme.color.fifth}; */
		background: #141414;
	}
	.id_request {
		font-size: ${Theme.size.min};
		color: ${Theme.color.primary};
		font-weight: ${Theme.widthFont.regular};
		font-family: ${Theme.source.secundary};
		&::selection {
			overflow: hidden;
		}
	}
	.data_request {
		font-size: ${Theme.size.min};
		color: ${Theme.color.room};
		font-weight: ${Theme.widthFont.regular};
		font-family: ${Theme.source.secundary};
		&::selection {
			overflow: hidden;
		}
	}
	.status_request {
		font-size: ${Theme.size.min};
		color: ${Theme.color.room};
		font-weight: ${Theme.widthFont.regular};
		font-family: ${Theme.source.secundary};
		&::selection {
			overflow: hidden;
		}
	}
	.name_client_request {
		font-size: ${Theme.size.min};
		color: ${Theme.color.primary};
		font-weight: ${Theme.widthFont.regular};
		font-family: ${Theme.source.secundary};
		&::selection {
			overflow: hidden;
		}
	}
	.value_request {
		font-size: ${Theme.size.min};
		color: ${Theme.color.secundary};
		font-weight: ${Theme.widthFont.regular};
		font-family: ${Theme.source.secundary};
		&::selection {
			overflow: hidden;
		}
	}
	.container-btn {
		display: flex;
		align-items: center;
		gap: 110px;
	}
`;

export const BtnAprove = styled.button`
	display: flex;
	align-items: center;
	justify-content: center;
	gap: 20px;
	border: 1px solid ${Theme.color.fifth};
	background: transparent;
	color: ${Theme.color.primary};
	border-radius: 5px;
	font-family: ${Theme.source.secundary};
	font-weight: ${Theme.widthFont.regular};
	/* width: 150px; */
	padding: 5px;
	cursor: pointer;
	&::selection {
		overflow: hidden;
	}
`;
export const BtnCancel = styled.button`
	display: flex;
	align-items: center;
	border: none;
	background: transparent;
	color: ${Theme.color.primary};
	border-radius: 5px;
	font-family: ${Theme.source.secundary};
	font-weight: ${Theme.widthFont.regular};
	cursor: pointer;
	/* width: 100px; */
	&::selection {
		overflow: hidden;
	}
`;

export const RequestDetails = styled.div`
	display: flex;
	flex-direction: column;
	width: 1000px;
	height: 800px;
	position: absolute;
	left: 23%;
	top: 10%;
	background-color: ${Theme.color.background};
	border-radius: 10px;
	box-shadow: 0 0 10px ${Theme.color.fifth};
	padding: 10px 20px;
`;

export const HeaderDetailsRequest = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: center;
`;

export const TitleHeaderRequest = styled.h3`
	font-size: ${Theme.size.small};
	color: ${Theme.color.third};
	font-weight: ${Theme.widthFont.regular};
	font-family: ${Theme.source.secundary};
	&::selection {
		overflow: hidden;
	}
`;
