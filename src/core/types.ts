export interface Company {
  bairro: string;
  categoria: number;
  cep: string;
  cnpj: string;
  codinst: number;
  codmunicipio: string;
  codusuario: string;
  complemento: string;
  email: string;
  estado: string;
  idempresa: number;
  idpais: number;
  nome: string;
  nomefantasia: string;
  numero: string;
  numprocesfluig: number;
  parceiraestagio: string;
  recmodifiedby: string;
  recmodifiedon: string;
  recrecreatedby: string;
  recrecreatedon: string;
  site: string;
  telefone: string;
  tipodoc: number;
  uuid_id: string;
}

export interface Official {
  empresa_id: number;
  qtd_aprendizes: number;
  qtd_autonomo: number;
  qtd_direcao: number;
  qtd_estagiarios: number;
  qtd_funcao_simplificada: number;
  qtd_outros: number;
}
