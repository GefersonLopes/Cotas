import React from 'react';
import { useForm } from 'react-hook-form';
import { Button, Form } from 'react-bootstrap';
import FormField from '../components/FormField';
import FormContainer from '../components/Container';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import {
  defaultValuesCreateOfficial,
  fieldsToCreateOfficials,
} from '../utils/fieldsToCreateOfficials';
import schemaCreateNewOfficial from '../middlewares/schemas/createNewOfficials';
import createNewOfficial from '../services/createNewOfficial';

type FormData = yup.InferType<typeof schemaCreateNewOfficial>;

const Officials = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({
    resolver: yupResolver(schemaCreateNewOfficial),
    defaultValues: defaultValuesCreateOfficial,
  });

  const onSubmit = (data: any) => {
    createNewOfficial(data);
  };

  const propsCommon = {
    register,
    required: true,
    errors,
  };

  return (
    <FormContainer title="Registrar Funcionário à Empresa">
      <Form onSubmit={handleSubmit(onSubmit)}>
        {/* {fieldsToCreateOfficials.map((field) => (
          <FormField
            key={field.name}
            label={field.label}
            type={field.type}
            placeholder={field.label}
            defaultValue={
              defaultValuesCreateOfficial[
                field.name as keyof typeof defaultValuesCreateOfficial
              ]
            }
            name={field.name}
            {...propsCommon}
          />
        ))} */}

        <Button type="submit" variant="success" className="w-100 mt-3">
          Registrar Funcionário
        </Button>
      </Form>
    </FormContainer>
  );
};

export default Officials;
