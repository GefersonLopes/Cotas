import * as Yup from 'yup';

const schemaCreateNewOfficial = Yup.object().shape({
  empresa_id: Yup.number()
    .typeError('Id da Empresa deve ser um número válido')
    .required('Id da Empresa é obrigatório')
    .transform((value, originalValue) =>
      String(originalValue).trim() === '' ? NaN : value,
    )
    .positive('Quantidade de Aprendizes deve ser um número positivo'),
  qtd_aprendizes: Yup.number()
    .typeError('Id da Empresa deve ser um número válido')
    .required('Quantidade de Aprendizes é obrigatório')
    .transform((value, originalValue) =>
      String(originalValue).trim() === '' ? NaN : value,
    )
    .positive('Quantidade de Aprendizes deve ser um número positivo'),
  qtd_autonomo: Yup.number()
    .typeError('Id da Empresa deve ser um número válido')
    .required('Quantidade de Autonomos é obrigatório')
    .transform((value, originalValue) =>
      String(originalValue).trim() === '' ? NaN : value,
    )
    .positive('Quantidade de Autonomos deve ser um número positivo'),
  qtd_direcao: Yup.number()
    .typeError('Id da Empresa deve ser um número válido')
    .required('Quantidade de Diretores é obrigatório')
    .transform((value, originalValue) =>
      String(originalValue).trim() === '' ? NaN : value,
    )
    .positive('Quantidade de Diretores deve ser um número positivo'),
  qtd_estagiarios: Yup.number()
    .typeError('Id da Empresa deve ser um número válido')
    .required('Quantidade de Estagiários é obrigatório')
    .transform((value, originalValue) =>
      String(originalValue).trim() === '' ? NaN : value,
    )
    .positive('Quantidade de Estagiários deve ser um número positivo'),
  qtd_funcao_simplificada: Yup.number()
    .typeError('Id da Empresa deve ser um número válido')
    .required('Quantidade de Funcionários é obrigatório')
    .transform((value, originalValue) =>
      String(originalValue).trim() === '' ? NaN : value,
    )
    .positive('Quantidade de Funcionários deve ser um número positivo'),
  qtd_outros: Yup.number()
    .typeError('Id da Empresa deve ser um número válido')
    .required('Quantidade de Funcionários é obrigatório')
    .transform((value, originalValue) =>
      String(originalValue).trim() === '' ? NaN : value,
    )
    .positive('Quantidade de Funcionários deve ser um número positivo'),
});

export default schemaCreateNewOfficial;
