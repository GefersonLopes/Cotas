import React from 'react';
import { Button, Form } from 'react-bootstrap';
import { useFormContext } from 'react-hook-form';
import '../styles/formField.scss';

const FormField = ({
  label,
  type,
  placeholder,
  name,
  required,
  errors,
}: {
  label: string;
  type: string;
  placeholder: string;
  name: string;
  required?: boolean;
  errors: any;
}) => {
  const { register, setValue, getValues } = useFormContext();

  const [inputValue, setInputValue] = React.useState<number>(
    getValues(name) || 0,
  );

  const handleIncrease = () => {
    const newValue = inputValue + 1;
    setInputValue(newValue);
    setValue(name, newValue);
  };

  const handleDecrease = () => {
    if (inputValue > 0) {
      const newValue = inputValue - 1;
      setInputValue(newValue);
      setValue(name, newValue);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = Number(e.target.value) || 0;
    setInputValue(newValue);
    setValue(name, newValue);
  };

  return (
    <Form.Group controlId={name} className="form-field">
      <Form.Label>{label}</Form.Label>
      <div className="container-input">
        <div className="container-input-button">
          <Button type="button" onClick={handleDecrease}>
            -
          </Button>
          <Form.Control
            type={type}
            placeholder={placeholder}
            value={inputValue}
            {...register(name, { required })}
            onChange={handleChange}
          />
          <Button type="button" onClick={handleIncrease}>
            +
          </Button>
        </div>
        {errors[name] && (
          <span className="text-danger">{errors[name].message}</span>
        )}
      </div>
    </Form.Group>
  );
};

export default FormField;
