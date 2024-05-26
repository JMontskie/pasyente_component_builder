/* eslint-disable react/require-default-props */
import * as React from 'react';

import {
  useForm,
  UseFormReturn,
  SubmitHandler,
  UseFormProps,
  FieldValues,
} from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { ZodType, ZodTypeDef } from 'zod';

type FormProps<TFormValues extends FieldValues, Schema> = {
  onSubmit: SubmitHandler<TFormValues>;
  children: (methods: UseFormReturn<TFormValues>) => React.ReactNode;
  options?: UseFormProps<TFormValues>;
  id?: string;
  schema?: Schema;
};

// TFormValues is expected to be an object type with string as key and unknown value
// If TFormValues is not supplied, it will resolve to an empty object (Record<string, unknown>)
// The same goes for Schema except with the type ZodType<unknown, ZodTypeDef>
export const HookForm = <
  TFormValues extends Record<string, unknown> = Record<string, unknown>,
  Schema extends ZodType<unknown, ZodTypeDef, unknown> = ZodType<unknown, ZodTypeDef, unknown>,
>({
    onSubmit,
    children,
    options,
    id,
    schema,
  }: FormProps<TFormValues, Schema>) => {
  // extract all the methods from useForm hook
  const methods = useForm<TFormValues>({
    ...options,
    resolver: schema && zodResolver(schema),
  });

  return (
    <form
      onSubmit={methods.handleSubmit(onSubmit)}
      id={id}
    >
      { children(methods) }
    </form>
  );
};
