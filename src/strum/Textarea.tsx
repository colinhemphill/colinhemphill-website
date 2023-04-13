import { DetailedHTMLProps, TextareaHTMLAttributes } from 'react';
import { twMerge } from 'tailwind-merge';
import ErrorMessage from './ErrorMessage';

interface InputProps
  extends DetailedHTMLProps<
    TextareaHTMLAttributes<HTMLTextAreaElement>,
    HTMLTextAreaElement
  > {
  label: string;
  name: string;
  errors: string[];
}

export default function Textarea({
  className,
  label,
  name,
  errors,
  ...rest
}: InputProps) {
  return (
    <div className="flex flex-col gap-2">
      <label htmlFor={name}>{label}</label>
      <textarea
        id={name}
        name={name}
        className={twMerge(
          'block w-full rounded-md border-0 bg-neutral-0 px-4 py-2 leading-loose text-neutral-10 outline-none ring-1 ring-inset ring-neutral-3 placeholder:text-neutral-5 focus:ring-2 focus:ring-inset focus:ring-primary-7',
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
