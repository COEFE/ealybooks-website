import Mailjet from 'node-mailjet';

const mailjet = Mailjet.apiConnect(
  process.env.MAILJET_API_KEY || '',
  process.env.MAILJET_SECRET_KEY || ''
);

interface EmailOptions {
  to: string;
  toName?: string;
  subject: string;
  textContent?: string;
  htmlContent?: string;
}

export async function sendEmail(options: EmailOptions): Promise<void> {
  const response = await mailjet
    .post('send', { version: 'v3.1' })
    .request({
      Messages: [
        {
          From: {
            Email: process.env.MAILJET_FROM_EMAIL || 'noreply@ealybooks.com',
            Name: process.env.MAILJET_FROM_NAME || 'EalyBooks'
          },
          To: [
            {
              Email: options.to,
              Name: options.toName || options.to
            }
          ],
          Subject: options.subject,
          TextPart: options.textContent || '',
          HTMLPart: options.htmlContent || options.textContent || ''
        }
      ]
    });

  console.log('Email sent:', response.body);
}
