import { DetailedHTMLProps, InputHTMLAttributes } from 'react';
import { twMerge } from 'tailwind-merge';
import ErrorMessage from './ErrorMessage';

interface InputProps
  extends DetailedHTMLProps<
    InputHTMLAttributes<HTMLInputElement>,
    HTMLInputElement
  > {
  label: string;
  name: string;
  errors: string[];
}

export default function Input({
  className,
  label,
  name,
  errors,
  ...rest
}: InputProps) {
  return (
    <div className="flex flex-col gap-2">
      <label htmlFor={name}>{label}</label>
      <input
        id={name}
        name={name}
        className={twMerge(
          'bg-neutral-0 text-neutral-12 ring-neutral-6 placeholder:text-neutral-9 focus:ring-primary-11 block w-full rounded-md border-0 px-4 py-2 leading-loose ring-1 outline-none ring-inset focus:ring-2 focus:ring-inset',
          className,
        )}
        {...rest}
      />
      {errors.map((error) => (
        <ErrorMessage describes={name} key={error}>
          {error}
        </ErrorMessage>
      ))}
    </div>
  );
}
