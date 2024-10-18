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
	cursor: pointer;
	&:hover {
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

export const RequestDetails = styled.div`
	display: flex;
	flex-direction: column;
	position: absolute;
	top: 20%;
	left: 20%;
	background-color: rgba(0, 0, 0, 0.13);
	backdrop-filter: blur(10px);
	border-radius: 10px;
	box-shadow: 0 0 10px ${Theme.color.fifth};
	padding: 10px 20px;
`;

export const ContainerDetailsRequest = styled.div`
	display: flex;
	flex-direction: column;
`;
export const HeaderDetailsRequest = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: center;
	padding: 10px 5px;
	border-bottom: 1px solid ${Theme.color.fifth};
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
export const ContainerRequestDetails = styled.div`
	display: grid;
	grid-template-columns: 700px 400px;
`;
export const ContentMainDetails = styled.div`
	display: flex;
	flex-direction: column;
	padding: 20px 5px;
	width: 750px;
`;

export const ClientInfoRequest = styled.div`
	display: flex;
	flex-direction: column;
	.container_info_client {
		gap: 10px;
		display: flex;
		align-items: center;
	}
	.info_name {
		font-size: ${Theme.size.small};
		font-family: ${Theme.source.primary};
		color: ${Theme.color.primary};
		font-weight: ${Theme.widthFont.regular};
	}
	.info_client {
		font-size: ${Theme.size.small};
		font-family: ${Theme.source.primary};
		color: ${Theme.color.primary};
		font-weight: ${Theme.widthFont.light};
	}
`;

export const OrderRequestContent = styled.div`
	margin-top: 10px;
	display: flex;
	flex-direction: column;
	.order_title {
		font-size: ${Theme.size.medium};
		font-family: ${Theme.source.primary};
		color: ${Theme.color.primary};
		font-weight: ${Theme.widthFont.regular};
	}
	.order_container {
		display: flex;
		align-items: center;
		gap: 40px;
	}
	.order_request {
		font-size: ${Theme.size.small};
		font-family: ${Theme.source.secundary};
		color: ${Theme.color.primary};
		font-weight: ${Theme.widthFont.light};
	}
`;

export const ActionDetails = styled.div`
	padding: 5px;
	display: flex;
	flex-direction: column;
	align-items: center;
	gap: 20px;
	border-left: 1px solid ${Theme.color.fifth};
	.title_actions {
		font-size: ${Theme.size.medium};
		font-family: ${Theme.source.primary};
		font-weight: ${Theme.widthFont.regular};
		color: ${Theme.color.secundary};
	}
`;

export const ActionsButtons = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	gap: 20px;
	.btn_action {
		gap: 10px;
		display: flex;
		align-items: center;
		justify-content: center;
		border: 1px solid ${Theme.color.fifth};
		background: transparent;
		border-radius: 5px;
		padding: 5px 10px;
		font-size: ${Theme.size.small};
		font-weight: ${Theme.widthFont.light};
		font-family: ${Theme.source.secundary};
		color: ${Theme.color.primary};
		width: 200px;
	}
	.btn_action:hover {
		transform: scale(1.1);
		transition: 1s;
	}
`;
