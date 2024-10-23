import { Form } from 'react-bootstrap';

const FormCheckbox = ({
  label,
  name,
  defaultValue,
  register,
}: {
  label: string;
  name: string;
  defaultValue?: boolean;
  register: any;
}) => (
  <Form.Group controlId={name} className="mb-3">
    <Form.Check
      type="checkbox"
      label={label}
      {...register(name)}
      defaultChecked={defaultValue}
    />
  </Form.Group>
);

export default FormCheckbox;
