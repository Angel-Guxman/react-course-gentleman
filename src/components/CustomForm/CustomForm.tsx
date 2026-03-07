import { useForm, type SubmitHandler } from "react-hook-form";
import type { FormValues } from "../../models";
import { zodResolver } from "@hookform/resolvers/zod";
import { formSchema } from "../../models";
import { InputForm } from "../CustomInput/CustomInput";
export const CustomForm = () => {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    mode: "onBlur",
    defaultValues: {
      name: "",
      email: "",
      password: "",
      confirmPassword: "",
    },
  });

  const onSubmit: SubmitHandler<FormValues> = (data) => {
    console.log(data);
  };
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <InputForm
        type="text"
        name="name"
        control={control}
        error={errors.name}
        label="Ingresa el nombre"
      />
      <InputForm
        type="text"
        name="email"
        control={control}
        error={errors.email}
        label="Ingresa el email"
      />
      <InputForm
        type="text"
        name="password"
        control={control}
        error={errors.password}
        label="Ingresa la contraseña"
      />
      <InputForm
        type="text"
        name="confirmPassword"
        control={control}
        error={errors.confirmPassword}
        label="Confirma la contraseña"
      />
      <button
        className="bg-amber-500 text-white px-2 py-0.5 rounded-md  my-2"
        type="submit"
      >
        submit
      </button>
    </form>
  );
};
