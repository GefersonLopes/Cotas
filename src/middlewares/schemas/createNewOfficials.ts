import * as Yup from 'yup';

const schemaCreateNewOfficial = Yup.object().shape({
  qtd_aprendizes: Yup.number()
    .required('Quantidade de Aprendizes é obrigatório')
    .min(1, 'Quantidade de Aprendizes deve ser no mínimo 1'),
  qtd_autonomo: Yup.number()
    .required('Quantidade de Autonomos é obrigatório')
    .min(1, 'Quantidade de Autonomos deve ser no mínimo 1'),
  qtd_direcao: Yup.number()
    .required('Quantidade de Diretores é obrigatório')
    .min(1, 'Quantidade de Diretores deve ser no mínimo 1'),
  qtd_estagiarios: Yup.number()
    .required('Quantidade de Estagiários é obrigatório')
    .min(1, 'Quantidade de Estagiários deve ser no mínimo 1'),
  qtd_funcao_simplificada: Yup.number()
    .required('Quantidade de Funcionários é obrigatório')
    .min(1, 'Quantidade de Funcionários deve ser no mínimo 1'),
  qtd_outros: Yup.number()
    .required('Quantidade de Outros é obrigatório')
    .min(1, 'Quantidade de Outros deve ser no mínimo 1'),
});

export default schemaCreateNewOfficial;
