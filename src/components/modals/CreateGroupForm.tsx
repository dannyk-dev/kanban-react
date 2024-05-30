import {
  Fieldset,
  Legend,
  Field,
  Label,
  Input,
  Textarea,
  Description,
  Button,
} from "@headlessui/react";
import clsx from "clsx";
import { FormikErrors, useFormik } from "formik";
import { useCreateTodoGroup } from "../../hooks/todo-groups";

type FormValues = {
  title: string;
  description?: string;
};

type CreateGroupFormProps = {
  onCompleteMutation: () => void;
};

const CreateGroupForm = ({ onCompleteMutation }: CreateGroupFormProps) => {
  const { trigger, isMutating } = useCreateTodoGroup();

  const validate = (values: FormValues) => {
    const errors: FormikErrors<FormValues> = {};

    if (!values.title) {
      errors.title = "Required";
    }

    return errors;
  };

  const formik = useFormik<FormValues>({
    initialValues: {
      title: "",
      description: "",
    },
    validate,
    onSubmit: (values) => {
      trigger({
        ...values,
      });
      onCompleteMutation();
    },
  });

  return (
    <form onSubmit={formik.handleSubmit}>
      <Fieldset className="space-y-6 rounded-xl p-2 sm:p-10">
        <Legend className="text-base/7 font-semibold text-white">
          Create a New Task List
        </Legend>
        <Field>
          <Label htmlFor="title" className="text-sm/6 font-medium text-white">
            Group Name
          </Label>
          <Input
            id="title"
            name="title"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.title}
            className={clsx(
              "mt-3 block w-full rounded-lg border-none bg-white/5 py-1.5 px-3 text-sm/6 text-white",
              "focus:outline-none data-[focus]:outline-2 data-[focus]:-outline-offset-2 data-[focus]:outline-white/25"
            )}
          />
          {formik.errors.title ? (
            <p className="block py-2 text-red-500">{formik.errors.title}</p>
          ) : null}
        </Field>
        <Field>
          <Label
            htmlFor="description"
            className="text-sm/6 font-medium text-white"
          >
            Description
          </Label>
          <Description className="text-sm/6 text-white/50">
            Describe this list will be used for
          </Description>
          <Textarea
            id="description"
            name="description"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.description}
            className={clsx(
              "mt-3 block w-full resize-none rounded-lg border-none bg-white/5 py-1.5 px-3 text-sm/6 text-white",
              "focus:outline-none data-[focus]:outline-2 data-[focus]:-outline-offset-2 data-[focus]:outline-white/25"
            )}
            rows={3}
          />
        </Field>
        <Field>
          <Button
            type="submit"
            onClick={() => formik.resetForm}
            className="flex items-center mx-auto gap-2 rounded-md bg-gray-700 py-2 w-full justify-center text-sm/6 font-semibold text-white shadow-inner shadow-white/10 focus:outline-none data-[hover]:bg-gray-600 data-[open]:bg-gray-700 data-[focus]:outline-1 data-[focus]:outline-white"
          >
            {isMutating ? "Loading..." : "Create List Group"}
          </Button>
        </Field>
      </Fieldset>
    </form>
  );
};

export default CreateGroupForm;
