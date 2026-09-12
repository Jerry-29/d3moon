# D3MOON Website

Astro + TypeScript + Tailwind CSS. Five-page lightweight corporate site for D3MOON.

## Run

```bash
npm install
npm run dev
```

## Build

```bash
npm run build
npm run preview
```

## Forms

Forms use the free FormSubmit AJAX endpoint by default and submit `FormData`, including resume uploads. The local test recipient is configured in `.env` as `PUBLIC_FORM_EMAIL=pasific.coc@gmail.com`. On the first submission, FormSubmit sends an activation email to that address; complete that activation before testing delivery.

For production, set `PUBLIC_FORM_ENDPOINT` to your own server-side endpoint. It must accept `POST` multipart form data and return a successful 2xx response with JSON such as `{ "success": true }`.

### FormSubmit setup

1. Run `npm run dev` and submit the contact form once.
2. Open the activation email sent to `PUBLIC_FORM_EMAIL` and click **Activate Form**.
3. Submit the form again and confirm delivery.
4. Deploy with the same `PUBLIC_FORM_EMAIL` value, or set `PUBLIC_FORM_ENDPOINT` to your own backend.

FormSubmit is free, supports AJAX submissions, and supports multipart attachments up to 10 MB total. This project intentionally limits resume files to 5 MB. It is suitable for a small launch or low-volume product, but it is not a full transactional email system: delivery depends on the provider, and production usage should eventually move to a server-side provider such as Resend, Postmark, or SendGrid with rate limiting and server-side validation.

## Branding

The global font is configured in `src/styles/global.css` under `--font-family`. Replace that single value when the official D3MOON font is confirmed.
