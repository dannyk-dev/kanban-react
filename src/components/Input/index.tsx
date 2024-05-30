import {
  Description,
  Field,
  Input,
  InputProps,
  Label,
} from "@headlessui/react";
import clsx from "clsx";

type InputFieldProps = InputProps & {
  label?: string;
  description?: string;
};

const InputField = ({ label, description, ...props }: InputFieldProps) => {
  return (
    <Field>
      <Label className="text-sm/6 font-medium ml-1 text-left text-white">
        {label || ""}
      </Label>
      <Description className="text-sm/6 text-white/50">
        {description || ""}
      </Description>
      <Input
        type="text"
        {...props}
        className={clsx(
          "mt-1  block w-full rounded-lg border-none bg-white/5 py-1.5 px-3 text-sm/6 text-white",
          "focus:outline-none data-[focus]:outline-2 data-[focus]:-outline-offset-2 data-[focus]:outline-white/25"
        )}
      />
    </Field>
  );
};

export default InputField;
