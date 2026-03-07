import {
  Controller,
  type Control,
  type FieldError,
  type FieldValues,
  type Path,
} from "react-hook-form";
interface Props<T extends FieldValues> {
  type: string;
  name: Path<T>;
  control: Control<T>;
  error: FieldError | undefined;
  label: string;
}
export const InputForm = <T extends FieldValues>({
  type,
  name,
  control,
  error,
  label,
}: Props<T>) => {
  return (
    <div className="flex flex-col px-2">
      <label className=" py-1.5" htmlFor={name}>
        {label}
      </label>
      <Controller
        name={name}
        control={control}
        render={({ field }) => (
          <input
            id={name}
            type={type}
            {...field}
            className={` rounded-md p-1 h-7 w-fit border ${error && "border-red-500"}`}
          />
        )}
      />
      {error && (
        <p className="text-red-500 tex-sm font-medium">{error.message}</p>
      )}
    </div>
  );
};
