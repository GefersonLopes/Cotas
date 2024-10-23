import React from 'react';
import { useForm, FormProvider } from 'react-hook-form';
import { Button, Form } from 'react-bootstrap';
import FormField from '../components/FormField';
import FormContainer from '../components/Container';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { fieldsToCreateOfficials } from '../utils/fieldsToCreateOfficials';
import schemaCreateNewOfficial from '../middlewares/schemas/createNewOfficials';
import QuotaResult from '../components/QuotaResult';
import calculateQuotas from '../services/calculateQuotas';

type FormData = yup.InferType<typeof schemaCreateNewOfficial>;

const Calculation = () => {
  const [quotas, setQuotas] = React.useState<any>(null);

  const methods = useForm<FormData>({
    resolver: yupResolver(schemaCreateNewOfficial),
  });

  const onSubmit = async (req: any) => {
    const { data } = await calculateQuotas(req);
    setQuotas(data.entry);
  };

  return (
    <>
      <FormContainer title="Calcular Cotas">
        <FormProvider {...methods}>
          <Form onSubmit={methods.handleSubmit(onSubmit)} className="m-2">
            {fieldsToCreateOfficials.map((field) => (
              <FormField
                key={field.name}
                label={field.label}
                type={field.type}
                placeholder="0"
                name={field.name}
                required={true}
                errors={methods.formState.errors}
              />
            ))}

            <Button type="submit" variant="success" className="w-100 mt-3">
              Calcular
            </Button>
          </Form>
        </FormProvider>
      </FormContainer>
      {quotas && (
        <QuotaResult
          minQuota={quotas.cota_minima}
          maxQuota={quotas.cota_maxima}
          message={quotas.message}
        />
      )}
    </>
  );
};

export default Calculation;
