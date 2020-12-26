import { yupResolver } from '@hookform/resolvers/yup';
import classnames from 'classnames';
import React, { useRef, useState } from 'react';
import ReCAPTCHA from 'react-google-recaptcha';
import { useForm } from 'react-hook-form';
import * as yup from 'yup';

type FormData = { email: string; message: string };

const schema = yup.object().shape({
  email: yup.string().required().email().trim(),
  message: yup.string().min(8).max(8192),
});

const ContactForm = (): JSX.Element => {
  const recaptchaRef = useRef(null);
  const [formStatus, setFormStatus] = useState<string>('');
  const {
    errors,
    formState,
    handleSubmit,
    register,
    reset,
  } = useForm<FormData>({
    resolver: yupResolver(schema),
  });

  const onSubmit = async (data, event) => {
    const token = recaptchaRef.current.getValue();

    try {
      const response = await fetch('/api/recaptcha/', {
        body: JSON.stringify({ token }),
        method: 'POST',
      });
      const validCaptcha = await response.json();
      if (!validCaptcha) {
        recaptchaRef.current.reset();
        return setFormStatus('ERROR');
      }
    } catch (err) {
      recaptchaRef.current.reset();
      return setFormStatus('ERROR');
    }

    const form = event.target;
    const formData = new FormData();
    for (const key in data) {
      formData.append(key, data[key]);
    }

    const xhr = new XMLHttpRequest();
    xhr.open(form.method, form.action);
    xhr.setRequestHeader('Accept', 'application/json');
    xhr.onreadystatechange = () => {
      if (xhr.readyState !== XMLHttpRequest.DONE) return;
      if (xhr.status === 200) {
        recaptchaRef.current.reset();
        reset();
        setFormStatus('SUCCESS');
      } else {
        setFormStatus('ERROR');
      }
    };
    xhr.send(formData);
  };

  return (
    <form
      action="https://formspree.io/f/mjvppyev"
      className="needs-validation"
      method="POST"
      noValidate
      onSubmit={handleSubmit(onSubmit)}
    >
      <div className="mt-xxs">
        <label className="form-label" htmlFor="form-email">
          Your email address
        </label>
        <input
          aria-invalid={errors.email ? 'true' : 'false'}
          className={classnames('form-control', {
            'is-invalid': errors.email,
          })}
          id="form-email"
          name="email"
          placeholder="name@example.com"
          ref={register({ required: true })}
        />
        {errors.email && (
          <div className="invalid-feedback" role="alert">
            {errors.email?.message}
          </div>
        )}
      </div>
      <div className="mt-xxs">
        <label className="form-label" htmlFor="form-message">
          Your message
        </label>
        <textarea
          aria-invalid={errors.message ? 'true' : 'false'}
          className={classnames('form-control', {
            'is-invalid': errors.message,
          })}
          id="form-message"
          name="message"
          placeholder="Leave your message here"
          ref={register({ required: true })}
          rows={4}
        />
        {errors.message && (
          <div className="invalid-feedback" role="alert">
            {errors.message?.message}
          </div>
        )}
      </div>

      <div className="row mt-xxs justify-content-end">
        <div className="col-auto">
          <ReCAPTCHA
            ref={recaptchaRef}
            sitekey={process.env.NEXT_PUBLIC_CAPTCHA_SITE_KEY}
            size="normal"
            theme="light"
          />
        </div>
      </div>

      {formStatus === 'SUCCESS' && (
        <div className="alert alert-success mt-xxs" role="alert">
          Your message was submitted successfully! Colin will try to get back to
          you shortly.
        </div>
      )}
      {formStatus === 'ERROR' && (
        <div className="alert alert-danger mt-xxs" role="alert">
          There was an error submitting your message. Please try again!
        </div>
      )}

      {formStatus !== 'SUCCESS' && (
        <div className="row justify-content-end">
          <div className="col-auto">
            <button
              className="btn btn-lg btn-primary mt-xxs"
              disabled={formState.isSubmitting || formState.isSubmitSuccessful}
              type="submit"
            >
              Submit
            </button>
          </div>
        </div>
      )}
    </form>
  );
};

export default ContactForm;
