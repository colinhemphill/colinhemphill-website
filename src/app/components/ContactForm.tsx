'use client';

import Alert from '@/strum/Alert';
import Button from '@/strum/Button';
import Input from '@/strum/Input';
import Textarea from '@/strum/Textarea';
import { FormEventHandler, useRef, useState } from 'react';

export default function ContactForm() {
  const formRef = useRef<HTMLFormElement>(null);
  const [error, setError] = useState('');
  const [message, setMessage] = useState('');
  const [submitting, setSubmitting] = useState(false);

  const onSubmit: FormEventHandler<HTMLFormElement> = async (e) => {
    setError('');
    setMessage('');

    e.preventDefault();
    setSubmitting(true);

    const formData = new FormData(formRef.current as HTMLFormElement);

    try {
      await fetch('/__forms.html', {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: new URLSearchParams(formData as any).toString(),
      });
      setMessage('Thanks, your message was submitted!');
      formRef.current?.reset();
    } catch (err) {
      const error = err as Error;
      setError(error.message);
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <>
      <p className="text-neutral-11 mt-4">
        Colin is pretty busy, but if you’re not spam he will do his best to get
        back to you! Please <em>do not reach out</em> if you’re recruiting for
        opportunities in Web3, crypto, AI/ML, or fintech.
      </p>

      <form
        aria-describedby={message ? 'message' : undefined}
        aria-errormessage={error ? 'error' : undefined}
        className="mt-8 flex flex-col gap-6"
        data-netlify="true"
        name="contact"
        onSubmit={onSubmit}
        ref={formRef}
      >
        <input type="hidden" name="form-name" value="contact" />

        <p className="hidden">
          <label>
            Don’t fill this out if you’re human: <input name="bot-field" />
          </label>
        </p>

        <Input
          errors={[]}
          label="Name"
          name="name"
          placeholder="Your full name"
          required
          type="text"
        />

        <Input
          errors={[]}
          label="Email"
          name="email"
          placeholder="Your email"
          required
          type="email"
        />

        <Textarea
          errors={[]}
          label="Message"
          minLength={140}
          name="message"
          placeholder="Your message"
          required
        />

        {error && (
          <Alert color="warning" id="error">
            {error}
          </Alert>
        )}
        {message && (
          <Alert color="primary" id="message">
            {message}
          </Alert>
        )}

        <Button className="self-end" disabled={submitting} type="submit">
          Submit
        </Button>
      </form>
    </>
  );
}
