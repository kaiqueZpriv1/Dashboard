import {
	BtnAprove,
	BtnCancel,
	BtnFilterAplication,
	Container,
	ContentRequest,
	FiltersRequests,
	HeaderDetailsRequest,
	HeaderRequest,
	RequestDetails,
	RequestFull,
	RequestGlobal,
	SelectFilters,
	TitleHeaderRequest,
	TitleRequest,
} from './style';
import { Header } from '../MenuLateral';
import { Theme } from '../../theme';
import React, { useEffect, useState } from 'react';
import { AiOutlineClose } from 'react-icons/ai';
import { TfiArrowRight } from 'react-icons/tfi';
import { FaHome } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { Fade } from 'react-awesome-reveal';

interface Client {
	id: string;
	data: string;
	status: string;
	name: string;
	value: string;
}

export const Requests = () => {
	const ListClient = [
		{
			id: '8f3t2b94hr7qsd5',
			data: '04/10/2024',
			status: 'Pending',
			name: 'Arthur William Pereira',
			value: 'R$ 71,00',
			details: {
				phone: '',
				email: '',
				payment: 'Cartão Debito',
				change: '',
				order: '(1) X-tudo, (1) CocaCola 600ml',
				address: {
					Street: 'Rua Laide Barbosa Da Silva',
					CEP: '05734-190',
					number: '27',
					neighborhood: 'Parque Rebouças',
					state: 'São Paulo',
				},
			},
		},
		{
			id: '9d7p5a81jt6rgf4',
			data: '04/10/2024',
			status: 'Pending',
			name: 'Ana Clara Rodrigues',
			value: 'R$ 63,00',
		},
		{
			id: '7b1m4c92ks5rhe3',
			data: '04/10/2024',
			status: 'Pending',
			name: 'Gabriel Lucas Silva',
			value: 'R$ 29,00',
		},
		{
			id: '6a0l3d80it4qgd2',
			data: '04/10/2024',
			status: 'Pending',
			name: 'Beatriz Sofia Santos',
			value: 'R$ 82,00',
		},
		{
			id: '5z9k2c79hs3pfd1',
			data: '04/10/2024',
			status: 'Pending',
			name: 'Leonardo Henrique Costa',
			value: 'R$ 96,00',
		},
		{
			id: '4y8j1b68gt2ogc0',
			data: '04/10/2024',
			status: 'Delivered',
			name: 'Camila Isabella Alves',
			value: 'R$ 52,00',
		},
		{
			id: '3x7i0a57fu1nhb9',
			data: '04/10/2024',
			status: 'In delivery',
			name: 'Matheus Eduardo Santos',
			value: 'R$ 91,00',
		},
		{
			id: '2w6h9z46ev0mg8',
			data: '04/10/2024',
			status: 'Cancel',
			name: 'Laura Vitória Ferreira',
			value: 'R$ 73,00',
		},
		{
			id: '1v5g8y35du0lf7',
			data: '04/10/2024',
			status: 'In preparation',
			name: 'Pedro Rafael Oliveira',
			value: 'R$ 25,00',
		},
		{
			id: '0u4f7x24ct0ke6',
			data: '04/10/2024',
			status: 'Concluded',
			name: 'Mariana Eduarda Gomes',
			value: 'R$ 61,00',
		},
	];

	const [statusFilter, setStatusFilter] = useState('');
	const [searchTermId, setSearchTermId] = useState(''); // armazena Id inserido em <Input/>
	const [searchTermName, setSearchTermName] = useState(''); //armazena Name inserido em <input/>
	const [filteredList, setFilteredList] = useState(ListClient); // armazena ListClient
	const [renderClient, setRenderCancel] = useState(false);

	const handleSearchId = (event: { target: { value: string } }) => {
		setSearchTermId(event.target.value.toLowerCase());
		applyFilters();
	};
	const handleSearchName = (event: { target: { value: string } }) => {
		setSearchTermName(event.target.value.toLowerCase());
		applyFilters();
	};

	const RenderBtn = (event: { target: { value: string } }) => {
		const statusRender = event.target.value;

		if (statusRender === 'Cancel') {
			setRenderCancel(true);
		} else {
			setRenderCancel(false);
		}
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
						{/* <BtnFilterAplication>Apply filters</BtnFilterAplication>
						<BtnFilterAplication style={{ background: 'transparent' }}>
							Remove filters
						</BtnFilterAplication> */}
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
								<Fade cascade damping={0.3}>
									<h3 className='id_request'>{client.id}</h3>
									<h3 className='data_request'>{client.data}</h3>
									<h3 className='status_request'>{client.status}</h3>
									<h3 className='name_client_request'>{client.name}</h3>
									<h3 className='value_request'>{client.value}</h3>
									<BtnAprove>
										<TfiArrowRight size={20} color={`${Theme.color.primary}`} />
										Approve
									</BtnAprove>
									<BtnCancel>
										<AiOutlineClose
											size={20}
											color={`${Theme.color.primary}`}
										/>
										{client.status === 'Pending' ? 'Cancel' : 'in preparation'}
									</BtnCancel>
								</Fade>
							</RequestFull>
						))}
					</RequestGlobal>
					{isDetailsOpen && selectedRequestId && (
						<RequestDetailsModal
							request={
								ListClient.find((client) => client.id === selectedRequestId) ||
								null
							}
							onClose={handleCloseDetails}
						/>
					)}
				</ContentRequest>
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
				<HeaderDetailsRequest>
					<Link to='/'>
						<FaHome size={25} color={`${Theme.color.primary}`} />
					</Link>
					<TitleHeaderRequest>{request.id}</TitleHeaderRequest>
					<AiOutlineClose color='#fafafa' size={25} onClick={onClose} />
				</HeaderDetailsRequest>
			)}
		</RequestDetails>
	);
};
