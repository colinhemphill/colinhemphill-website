'use client';

import Button from '@/strum/Button';
import Input from '@/strum/Input';
import Textarea from '@/strum/Textarea';
import { Field, Form, FormInstance } from 'houseform';
import dynamic from 'next/dynamic';
import { useRef, useState } from 'react';
import { z } from 'zod';

const HCaptcha = dynamic(() => import('@hcaptcha/react-hcaptcha'));

interface ContactFormFields {
  botcheck: boolean;
  name: string;
  email: string;
  message: string;
}

export default function ContactForm() {
  const formRef = useRef<FormInstance<ContactFormFields>>(null);
  const formDataRef = useRef<HTMLFormElement>(null);
  const [token, setToken] = useState<string>('');
  const [captchaLoaded, setCaptchaLoaded] = useState(false);
  const [submitting, setSubmitting] = useState(false);

  const loadCaptcha = () => {
    setCaptchaLoaded(true);
  };

  const onSubmit = async (data: ContactFormFields) => {
    const messageData = {
      access_key: 'c7a8e7ae-d70b-406a-a921-a922cc5c8122',
      from_name: 'colinhemphill.com',
      subject: `${data.name} sent a message from colinhemphill.com`,
      ...data,
    };

    if (!token) {
      return alert('Please complete the captcha verification.');
    }

    setSubmitting(true);
    try {
      const response = await fetch('/api/captcha', {
        body: JSON.stringify({ token }),
        method: 'POST',
      });
      const captchaResult = await response.json();
      if (captchaResult.valid === false) {
        return alert('Error verifying captcha. Please try again!');
      }
    } catch (err) {
      const error = err as Error;
      return alert(error.message);
    } finally {
      setSubmitting(false);
    }

    const formData = new FormData(formDataRef.current as HTMLFormElement);

    try {
      const response = await fetch('/__forms.html', {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: new URLSearchParams(formData as any).toString(),
      });
      await response.json();
      alert('Thanks, your message was submitted!');
      formRef.current?.reset();
    } catch (err) {
      const error = err as Error;
      alert(error.message);
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <>
      <p className="mt-4 text-neutral-6">
        Colin is pretty busy, but if you’re not spam he will do his best to get
        back to you! Please <em>do not reach out</em> if you’re recruiting for
        opportunities in Web3, crypto, AI/ML, or finances.
      </p>

      <Form<ContactFormFields> onSubmit={onSubmit} ref={formRef}>
        {({ isValidating, submit }) => (
          <form
            className="mt-8 flex flex-col gap-6"
            data-netlify="true"
            name="contact"
            noValidate
            onSubmit={(e) => {
              e.preventDefault();
              submit();
            }}
            ref={formDataRef}
          >
            <input type="hidden" name="form-name" value="contact" />
            <Field<ContactFormFields['botcheck']> name="botcheck">
              {({ value, setValue, onBlur, props }) => {
                return (
                  <input
                    checked={value}
                    className="hidden"
                    name={props.name}
                    onBlur={onBlur}
                    onChange={(e) => setValue(e.target.checked)}
                    type="checkbox"
                  />
                );
              }}
            </Field>
            <Field<ContactFormFields['name']>
              name="name"
              onSubmitValidate={z.string().min(1, 'Name is required')}
            >
              {({ value, setValue, onBlur, props, errors }) => {
                return (
                  <Input
                    errors={errors}
                    label="Name"
                    name={props.name}
                    onBlur={onBlur}
                    onFocus={loadCaptcha}
                    onChange={(e) => setValue(e.target.value)}
                    placeholder="Your full name"
                    type="text"
                    value={value}
                  />
                );
              }}
            </Field>
            <Field<ContactFormFields['email']>
              name="email"
              onSubmitValidate={z
                .string()
                .email('A valid email address is required')}
            >
              {({ value, setValue, props, onBlur, errors }) => {
                return (
                  <Input
                    errors={errors}
                    label="Email"
                    name={props.name}
                    onBlur={onBlur}
                    onFocus={loadCaptcha}
                    onChange={(e) => setValue(e.target.value)}
                    placeholder="Your email"
                    type="email"
                    value={value}
                  />
                );
              }}
            </Field>
            <Field<ContactFormFields['message']>
              name="message"
              onSubmitValidate={z
                .string()
                .min(140, 'Message must be at least 140 characters')}
            >
              {({ value, setValue, onBlur, props, errors, isTouched }) => {
                return (
                  <Textarea
                    errors={errors}
                    label="Message"
                    name={props.name}
                    onBlur={onBlur}
                    onFocus={loadCaptcha}
                    onChange={(e) => setValue(e.target.value)}
                    placeholder="Your message"
                    value={value}
                  />
                );
              }}
            </Field>

            {captchaLoaded && (
              <div className="flex justify-end">
                <HCaptcha
                  onVerify={setToken}
                  reCaptchaCompat={false}
                  sitekey={process.env.NEXT_PUBLIC_HCAPTCHA_SITE_KEY as string}
                />
              </div>
            )}

            <Button
              className="self-end"
              disabled={isValidating || submitting}
              type="submit"
            >
              Submit
            </Button>
          </form>
        )}
      </Form>
    </>
  );
}
