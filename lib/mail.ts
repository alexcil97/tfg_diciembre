import { Resend } from "resend";

const resend = new Resend(process.env.NEXT_PUBLIC_RESEND_API);
const domain = process.env.NEXT_PUBLIC_API_URL;

export const sendTwoFactortTokenEmail = async (
  email: string,
  token: string
) => {
  await resend.emails.send({
    from: "mail@email.netgram.eu",
    to: email,
    subject: "2FA código",
    html: `<h1>${token}</h1>`,
  });
};

export const sendPasswordResetEmail = async (email: string, token: string) => {
  const resetLink = `${domain}/auth/new-password?token=${token}`;

  await resend.emails.send({
    from: "mail@email.netgram.eu",
    to: email,
    subject: "Restablecer contraseña",
    html: `<h1>${resetLink}</h1>`,
  });
};

export const sendVerificationEmail = async (email: string, token: string) => {
  const confirmLink = `${domain}/auth/new-verification?token=${token}`;

  await resend.emails.send({
    from: "mail@email.netgram.eu",
    to: email,
    subject: "Confirmar tu correo electrónico",
    html: `<a class="button" href="${confirmLink}">Confirmar tu correo</a>`,
  });
};
