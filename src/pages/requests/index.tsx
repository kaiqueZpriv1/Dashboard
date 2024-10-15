import {
	BtnAprove,
	BtnCancel,
	ClientInfoRequest,
	Container,
	ContainerDetailsRequest,
	ContentMainDetails,
	ContentRequest,
	FiltersRequests,
	HeaderDetailsRequest,
	HeaderRequest,
	OrderRequestContent,
	RequestDetails,
	RequestFull,
	RequestGlobal,
	SelectFilters,
	TitleHeaderRequest,
	TitleRequest,
} from './style';
import { Header } from '../MenuLateral';
import { Theme } from '../../theme';
import { useState } from 'react';
import { AiOutlineClose } from 'react-icons/ai';
import { TfiArrowRight } from 'react-icons/tfi';
import { FaHome } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { Fade } from 'react-awesome-reveal';
import { ListClient } from '../../components/ListClient';

interface Client {
	id: string;
	data: string;
	status: string;
	name: string;
	value: string;
	details?: {
		time: string;
		email: string;
		phone: string;
		payment: string;
		order?: {
			item: string;
			amount: string;
		};
		deliveryMethod: string;
		deliveryTime: string;
		address: {
			Street: string;
			CEP: string;
			number: string;
			neighborhood: string;
			state: string;
		};
	};
}

export const Requests = () => {
	const [statusFilter, setStatusFilter] = useState('');
	const [searchTermId, setSearchTermId] = useState(''); // armazena Id inserido em <Input/>
	const [searchTermName, setSearchTermName] = useState(''); //armazena Name inserido em <input/>
	const [filteredList, setFilteredList] = useState(ListClient);

	const handleSearchId = (event: { target: { value: string } }) => {
		setSearchTermId(event.target.value.toLowerCase());
		applyFilters();
	};
	const handleSearchName = (event: { target: { value: string } }) => {
		setSearchTermName(event.target.value.toLowerCase());
		applyFilters();
	};

	const handleStatusFilterChange = (event: { target: { value: string } }) => {
		const selectValueOption = event.target.value;

		// Se "All filters" for selecionado, retorna toda a lista de clientes
		if (selectValueOption === 'All filters') {
			setFilteredList(ListClient);
		} else {
			// Caso contrário, filtra de acordo com o status selecionado
			const filteredClients = ListClient.filter(
				(client) => selectValueOption === client.status
			);
			setFilteredList(filteredClients);
		}

		// Atualiza o status do filtro selecionado
		setStatusFilter(selectValueOption);
	};

	const applyFilters = () => {
		const filteredClients = ListClient.filter(
			(client) =>
				client.id.toUpperCase().includes(searchTermId.toUpperCase()) &&
				client.name.toUpperCase().includes(searchTermName.toUpperCase())
		);
		setFilteredList(filteredClients);
	};

	const [selectedRequestId, setSelectedRequestId] = useState('');
	const [isDetailsOpen, setIsDetailsOpen] = useState(false);

	const handleRequestClick = (id: string) => {
		setSelectedRequestId(id);
		setIsDetailsOpen(true);
	};

	const handleCloseDetails = () => {
		setSelectedRequestId('');
		setIsDetailsOpen(false);
	};
	return (
		<>
			<Container>
				<Header />
				<ContentRequest>
					<TitleRequest>Requests</TitleRequest>
					<FiltersRequests>
						<h3 className='text-filter'>Filters:</h3>
						<input
							type='text'
							className='ipt_global ipt_id'
							placeholder='Order identifier'
							value={searchTermId}
							onChange={handleSearchId}
						/>
						<input
							type='text'
							className='ipt_global ipt_name'
							placeholder='Name client'
							value={searchTermName}
							onChange={handleSearchName}
						/>
						<SelectFilters
							value={statusFilter}
							onChange={handleStatusFilterChange}>
							<option value='All filters'>All filters</option>
							<option value='Pending'>Pending</option>
							<option value='Concluded'>Concluded</option>
							<option value='Cancel'>Cancel</option>
							<option value='In preparation'>In preparation</option>
							<option value='In delivery'>In delivery</option>
							<option value='Delivered'>Delivered</option>
						</SelectFilters>
					</FiltersRequests>
					<RequestGlobal>
						<HeaderRequest>
							<span className='text_request'>Identifier</span>
							<span
								className='text_request'
								style={{ position: 'relative', right: '50px' }}>
								Carried out there
							</span>
							<span
								className='text_request'
								style={{ position: 'relative', right: '50px' }}>
								Status
							</span>
							<span className='text_request'>Client</span>
							<span className='text_request'>Order Total</span>
						</HeaderRequest>
						{filteredList.map((client) => (
							<RequestFull
								key={client.id}
								onClick={() => handleRequestClick(client.id)}>
								<Fade cascade damping={0.2}>
									<h3 className='id_request'>{client.id}</h3>
									<h3 className='data_request'>{client.data}</h3>
									<h3 className='status_request'>{client.status}</h3>
									<h3 className='name_client_request'>{client.name}</h3>
									<h3 className='value_request'>{client.value}</h3>
									<div className='container-btn'>
										<BtnAprove>
											<TfiArrowRight
												size={20}
												color={`${Theme.color.primary}`}
											/>
											Approve
										</BtnAprove>
										<BtnCancel>
											<AiOutlineClose
												size={20}
												color={`${Theme.color.primary}`}
											/>
											{client.status === 'Pending'
												? 'Cancel'
												: 'in preparation'}
										</BtnCancel>
									</div>
								</Fade>
							</RequestFull>
						))}
					</RequestGlobal>
				</ContentRequest>
			{isDetailsOpen && selectedRequestId && (
				<RequestDetailsModal
					request={
						ListClient.find((client) => client.id === selectedRequestId) || null
					}
					onClose={handleCloseDetails}
				/>
			)}
			</Container>
		</>
	);
};

const RequestDetailsModal = ({
	request,
	onClose,
}: {
	request: Client | null;
	onClose: () => void;
}) => {
	return (
		<RequestDetails>
			{request && (
				<ContainerDetailsRequest>
					<HeaderDetailsRequest>
						<Link to='/'>
							<FaHome size={25} color={`${Theme.color.primary}`} />
						</Link>
						<TitleHeaderRequest>{request.id}</TitleHeaderRequest>
						<AiOutlineClose color='#fafafa' size={25} onClick={onClose} />
					</HeaderDetailsRequest>
					<ContentMainDetails>
						<ClientInfoRequest>
							<div className='container_info_client'>
								<h3 className='info_name'>Name:</h3>
								<h3 className='info_client'>{request.name}</h3>
							</div>
							<div className='container_info_client'>
								<h3 className='info_name'>Phone:</h3>
								<h3 className='info_client'>{request.details?.phone}</h3>
							</div>
							<div className='container_info_client'>
								<h3 className='info_name'>Address:</h3>
								<h3 className='info_client'>
									{request.details?.address.Street}
								</h3>
								<h3 className='info_client'>
									{request.details?.address.number}
								</h3>
								<h3 className='info_client'>
									{request.details?.address.neighborhood}
								</h3>
								<h3 className='info_client'>{request.details?.address.CEP}</h3>
								<h3 className='info_client'>
									{request.details?.address.state}
								</h3>
							</div>
							<div className='container_info_client'>
								<h3 className='info_name'>E-mail:</h3>
								<h3 className='info_client'>{request.details?.email}</h3>
							</div>
							<div className='container_info_client'>
								<h3 className='info_name'>Delivery time: </h3>
								<h3 className='info_client'>{request.details?.deliveryTime}</h3>
							</div>
							<div className='container_info_client'>
								<h3 className='info_name'>Delivery method:</h3>
								<h3 className='info_client'>
									{request.details?.deliveryMethod}
								</h3>
							</div>
							<div className='container_info_client'>
								<h3 className='info_name'>Payment</h3>
								<h3 className='info_client'>{request.details?.payment}</h3>
							</div>
						</ClientInfoRequest>
						<OrderRequestContent>
							<h3 className='order_title'>Order:</h3>
							<div className='order_container'>
								<h3 className='order_request'>
									{request.details?.order?.item}
								</h3>
								<h3 className='order_request'>
									{request.details?.order?.amount}
								</h3>
							</div>
						</OrderRequestContent>
					</ContentMainDetails>
				</ContainerDetailsRequest>
			)}
		</RequestDetails>
	);
};
