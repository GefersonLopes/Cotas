import * as Yup from 'yup';

const schemaCreateNewCompany = Yup.object().shape({
  bairro: Yup.string().required('Bairro é obrigatório'),
  categoria: Yup.number()
    .required('Categoria é obrigatória')
    .positive('Categoria deve ser um número positivo'),
  cep: Yup.string()
    .matches(/^\d{5}-\d{3}$/, 'CEP deve estar no formato 12345-678')
    .required('CEP é obrigatório'),
  cnpj: Yup.string()
    .matches(
      /^\d{2}\.\d{3}\.\d{3}\/\d{4}-\d{2}$/,
      'CNPJ deve estar no formato 00.000.000/0000-00',
    )
    .required('CNPJ é obrigatório'),
  codinst: Yup.number()
    .required('Código da Instituição é obrigatório')
    .positive('Código da Instituição deve ser um número positivo'),
  codmunicipio: Yup.string().required('Código do Município é obrigatório'),
  complemento: Yup.string().nullable(), // Não obrigatório
  email: Yup.string().email('Email inválido').required('Email é obrigatório'),
  estado: Yup.string()
    .length(2, 'Estado deve ter 2 caracteres (UF)')
    .required('Estado é obrigatório'),
  nome: Yup.string().required('Nome da Empresa é obrigatório'),
  nomefantasia: Yup.string().required('Nome Fantasia é obrigatório'),
  numero: Yup.string().required('Número é obrigatório'),
  parceiraestagio: Yup.boolean().required(
    'Indicação de Parceira de Estágio é obrigatória',
  ),
  rua: Yup.string().required('Rua é obrigatória'),
  site: Yup.string().url('URL do site inválido').nullable(), // Opcional
  telefone: Yup.string()
    .matches(
      /^\(\d{2}\) \d{4,5}-\d{4}$/,
      'Telefone deve estar no formato (XX) XXXXX-XXXX ou (XX) XXXX-XXXX',
    )
    .required('Telefone é obrigatório'),
});

export default schemaCreateNewCompany;
