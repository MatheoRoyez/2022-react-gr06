import { useFormContext } from "react-hook-form";

const LabelInput = ({
  label,
  type,
  defaultvalue,
  validation,
  required,
  ...rest
}) => {
  const {
    register,
    formState: { errors },
  } = useFormContext();
  return (
    <div id="labelInput">
      <label htmlFor={label}>
        {label + "*"} 
      </label>
      <input
        {...register(label, validation)}
        defaultValue={defaultvalue}
        type={type}
        id={label}
        name={label}
        required = {true}
        {...rest}
      />
      {errors[label] && (
        <p className="text-red" data-cy="labelinput_error">
          {errors[label].message}
        </p>
      )}
    </div>
  );
};

export default LabelInput;
