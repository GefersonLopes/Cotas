const Input = (props: any) => {
  return (
    <input
      type={props.type}
      name={props.name}
      placeholder={props.placeholder}
      className={props.className}
    />
  );
};

export default Input;
