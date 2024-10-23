import dayjs from 'dayjs';
import { v4 as uuidv4 } from 'uuid';

export const fieldsCreateCompany = [
  {
    label: 'Nome da Empresa',
    name: 'nome',
    type: 'text',
  },
  {
    label: 'Nome Fantasia',
    name: 'nomefantasia',
    type: 'text',
  },
  {
    label: 'Categoria',
    name: 'categoria',
    type: 'number',
  },
  {
    label: 'CNPJ',
    name: 'cnpj',
    type: 'text',
  },
  {
    label: 'Código da Instituição',
    name: 'codinst',
    type: 'number',
  },
  {
    label: 'Código do Município',
    name: 'codmunicipio',
    type: 'text',
  },
  {
    label: 'Email',
    name: 'email',
    type: 'email',
  },
  {
    label: 'CEP',
    name: 'cep',
    type: 'text',
  },
  {
    label: 'Bairro',
    name: 'bairro',
    type: 'text',
  },
  {
    label: 'Estado',
    name: 'estado',
    type: 'text',
  },
  {
    label: 'Rua',
    name: 'rua',
    type: 'text',
  },
  {
    label: 'Número',
    name: 'numero',
    type: 'text',
  },
  {
    label: 'Complemento',
    name: 'complemento',
    type: 'text',
  },
  {
    label: 'Site',
    name: 'site',
    type: 'url',
  },
  {
    label: 'Telefone',
    name: 'telefone',
    type: 'tel',
  },
  {
    label: 'Parceira de Estágio',
    name: 'parceiraestagio',
    type: 'checkbox',
  },
];

export const defaultValuesCreateCompany = {
  bairro: 'Centro',
  categoria: 1,
  cep: '12345-678',
  cnpj: '12.345.678/0001-90',
  codinst: 100,
  codmunicipio: '3550308',
  codusuario: 'USR123', //
  complemento: 'Sala 101',
  email: 'contato@empresa.com.br',
  estado: 'SP',
  idempresa: 1, //
  idpais: 55, //
  nome: 'Empresa Exemplo Ltda',
  nomefantasia: 'Empresa Exemplo',
  numero: '123',
  numprocesfluig: 98765, //
  parceiraestagio: 'S',
  recmodifiedby: 'admin',
  recmodifiedon: '2024-10-17T00:00:00',
  recrecreatedby: 'admin',
  recrecreatedon: '2024-10-17T00:00:00',
  rua: 'Rua das Flores',
  site: 'https://www.empresa.com.br',
  telefone: '(11) 98765-4321',
  tipodoc: 1,
  uuid_id: '123e4567-e89b-12d3-a456-426614174000',
};

export const formatDataOfSubmit = (data: any) => {
  const newData = {
    ...defaultValuesCreateCompany,
    recmodifiedon: dayjs().format('YYYY-MM-DDTHH:mm:ss'),
    recrecreatedon: dayjs().format('YYYY-MM-DDTHH:mm:ss'),
    ...data,
    parceiraestagio: data.parceiraestagio ? 'S' : 'N',
    uuid_id: uuidv4(),
  };
  return newData;
};
