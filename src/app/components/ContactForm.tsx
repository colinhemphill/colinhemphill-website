'use client';

import Alert from '@/strum/Alert';
import Button from '@/strum/Button';
import Input from '@/strum/Input';
import Textarea from '@/strum/Textarea';
import { useForm, ValidationError } from '@formspree/react';

export default function ContactForm() {
  const [state, handleSubmit] = useForm(process.env.NEXT_PUBLIC_FORMSPREE_ID!);

  if (state.succeeded) {
    return (
      <>
        <p className="text-neutral-11 mt-4">
          Colin is pretty busy, but if you’re not spam he will do his best to
          get back to you! Please <em>do not reach out</em> if you’re recruiting
          for opportunities in Web3, crypto, AI/ML, or fintech.
        </p>
        <Alert color="primary" className="mt-8">
          Thanks, your message was submitted!
        </Alert>
      </>
    );
  }

  return (
    <>
      <p className="text-neutral-11 mt-4">
        Colin is pretty busy, but if you’re not spam he will do his best to get
        back to you! Please <em>do not reach out</em> if you’re recruiting for
        opportunities in Web3, crypto, AI/ML, or fintech.
      </p>

      <form className="mt-8 flex flex-col gap-6" onSubmit={handleSubmit}>
        <Input
          errors={[]}
          label="Name"
          name="name"
          placeholder="Your full name"
          required
          type="text"
        />
        <ValidationError prefix="Name" field="name" errors={state.errors} />

        <Input
          errors={[]}
          label="Email"
          name="email"
          placeholder="Your email"
          required
          type="email"
        />
        <ValidationError prefix="Email" field="email" errors={state.errors} />

        <Textarea
          errors={[]}
          label="Message"
          minLength={140}
          name="message"
          placeholder="Your message"
          required
        />
        <ValidationError
          prefix="Message"
          field="message"
          errors={state.errors}
        />

        {state.errors && Object.keys(state.errors).length > 0 && (
          <Alert color="warning">
            There was an error submitting your form. Please try again.
          </Alert>
        )}

        <Button className="self-end" disabled={state.submitting} type="submit">
          {state.submitting ? 'Submitting...' : 'Submit'}
        </Button>
      </form>
    </>
  );
}
