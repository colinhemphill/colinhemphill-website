import { yupResolver } from '@hookform/resolvers/yup';
import classnames from 'classnames';
import React, { useState } from 'react';
import ReactGA from 'react-ga';
import { useForm } from 'react-hook-form';
import * as yup from 'yup';

type FormData = { email: string; message: string };

const schema = yup.object().shape({
  email: yup.string().required().email().trim(),
  message: yup.string().min(8).max(8192),
});

const ContactForm = (): JSX.Element => {
  const [captchaReady, setCaptchaReady] = useState<boolean>(false);
  const [formStatus, setFormStatus] = useState<{
    message?: string;
    successful?: boolean;
  }>({});
  const [submitting, setSubmitting] = useState<boolean>(false);
  const { errors, handleSubmit, register, reset } = useForm<FormData>({
    resolver: yupResolver(schema),
  });

  const loadCaptcha = () => {
    if (captchaReady) return;
    const script = document.createElement('script');
    script.src = 'https://www.google.com/recaptcha/api.js';
    script.id = 'recaptcha';
    document.body.appendChild(script);
    setCaptchaReady(true);
  };

  const resetCaptcha = () => {
    grecaptcha.reset();
  };

  const submitError = (description: string, message?: string) => {
    resetCaptcha();
    setFormStatus({ message, successful: false });
    ReactGA.exception({ description, fatal: false });
    setSubmitting(false);
  };

  const onSubmit = async (data, event) => {
    setSubmitting(true);
    const t0 = Math.round(performance.now());
    const token = grecaptcha.getResponse();

    if (!token) {
      return submitError(
        'Contact form: missing reCAPTCHA token',
        'Please complete the reCAPTCHA verification.',
      );
    }

    try {
      const response = await fetch('/api/recaptcha', {
        body: JSON.stringify({ token }),
        method: 'POST',
      });
      const captchaResult = await response.json();
      if (captchaResult.valid === false) {
        return submitError('Contact form: failed reCAPTCHA validation');
      }
    } catch (err) {
      return submitError(`Contact form: ${err.message}`);
    }

    const t1 = Math.round(performance.now());
    ReactGA.timing({
      category: 'Requests',
      label: 'Contact form',
      value: t1 - t0,
      variable: 'reCAPTCH verification',
    });

    const form = event.target;
    const formData = new FormData();
    for (const key in data) {
      formData.append(key, data[key]);
    }

    const xhr = new XMLHttpRequest();
    xhr.open(form.method, form.action);
    xhr.setRequestHeader('Accept', 'application/json');
    xhr.onreadystatechange = () => {
      const t2 = Math.round(performance.now());
      setSubmitting(false);
      if (xhr.readyState !== XMLHttpRequest.DONE) return;
      if (xhr.status === 200) {
        resetCaptcha();
        reset();
        setFormStatus({ successful: true });
        ReactGA.event({
          action: 'Submitted contact form',
          category: 'Forms',
          label: 'Submit',
        });
        ReactGA.timing({
          category: 'Requests',
          label: 'Contact form',
          value: t2 - t0,
          variable: 'Formspree submission',
        });
      } else {
        submitError(
          `Contact form: ${xhr.status} error submitting to Formspree`,
        );
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
          disabled={formStatus.successful === true}
          id="form-email"
          name="email"
          onFocus={() => loadCaptcha()}
          placeholder="name@example.com"
          ref={register({ required: true })}
        />
        <input className="d-none" type="text" name="_gotcha" />
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
          disabled={formStatus.successful === true}
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
          {captchaReady && formStatus.successful !== true && (
            <div
              className="g-recaptcha"
              data-sitekey={process.env.NEXT_PUBLIC_CAPTCHA_SITE_KEY}
            />
          )}
        </div>
      </div>

      {formStatus.successful === true && (
        <div className="alert alert-success mt-xxs" role="alert">
          {formStatus.message ||
            'Your message was submitted successfully! Colin will try to get back to you shortly.'}
        </div>
      )}
      {formStatus.successful === false && (
        <div className="alert alert-danger mt-xxs" role="alert">
          {formStatus.message ||
            'There was an error submitting your message. Please try again!'}
        </div>
      )}

      {formStatus.successful !== true && (
        <div className="row justify-content-end">
          <div className="col-auto">
            <button
              className="btn btn-lg btn-primary mt-xxs"
              disabled={submitting}
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
