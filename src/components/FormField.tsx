import React from 'react';
import { Form } from 'react-bootstrap';
import '../styles/formField.scss';

const FormField = ({
  label,
  type,
  placeholder,
  name,
  register,
  required,
  errors,
  defaultValue,
}: {
  label: string;
  type: string;
  placeholder: string;
  name: string;
  register: any;
  required?: boolean;
  defaultValue?: string | number | boolean | undefined;
  errors: any;
}) => (
  <Form.Group controlId={name} className="form-field">
    <Form.Label>{label}</Form.Label>
    <div className="container-input">
      <Form.Control
        type={type}
        placeholder={placeholder}
        defaultValue={defaultValue}
        {...register(name, { required })}
      />
      {errors[name] && (
        <span className="text-danger">{errors[name].message}</span>
      )}
    </div>
  </Form.Group>
);

export default FormField;
