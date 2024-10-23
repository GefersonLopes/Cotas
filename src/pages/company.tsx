import React from 'react';
import { useForm } from 'react-hook-form';
import { Button, Form } from 'react-bootstrap';
import FormField from '../components/FormField';
import FormCheckbox from '../components/FormCheckbox';
import FormContainer from '../components/Container';
import {
  defaultValuesCreateCompany,
  fieldsCreateCompany,
  formatDataOfSubmit,
} from '../utils/fieldsToCreateCompany';
import createNewCompany from '../services/createNewCompany';
import schemaCreateNewCompany from '../middlewares/schemas/createNewCompany';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';

type FormData = yup.InferType<typeof schemaCreateNewCompany>;

const Company = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({
    resolver: yupResolver(schemaCreateNewCompany),
  });

  const onSubmit = (data: any) => {
    const body = formatDataOfSubmit(data);
    createNewCompany(body);
  };

  const propsCommon = {
    register,
    required: true,
    errors,
  };

  return (
    <FormContainer title="Registrar Empresa">
      <Form onSubmit={handleSubmit(onSubmit)}>
        {/* {fieldsCreateCompany.map((field) =>
          field.type === 'checkbox' ? (
            <FormCheckbox
              key={field.name}
              label="Parceira de Estágio"
              name="parceiraestagio"
              register={register}
              defaultValue={
                defaultValuesCreateCompany[
                  field.name as keyof typeof defaultValuesCreateCompany
                ] === 'S'
              }
            />
          ) : (
            <FormField
              key={field.name}
              label={field.label}
              type={field.type}
              placeholder={field.label}
              defaultValue={
                defaultValuesCreateCompany[
                  field.name as keyof typeof defaultValuesCreateCompany
                ]
              }
              name={field.name}
              {...propsCommon}
            />
          ),
        )} */}

        <Button type="submit" variant="success" className="w-100">
          Registrar Empresa
        </Button>
      </Form>
    </FormContainer>
  );
};

export default Company;
