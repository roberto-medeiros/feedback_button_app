import nodemailer from 'nodemailer'
import { MailAdapter, SendMailData } from '../mail-adapters'

const transport = nodemailer.createTransport({
  host: 'smtp.mailtrap.io',
  port: 2525,
  auth: {
    user: 'c9c8a5b17d098d',
    pass: '0a4094de315be8'
  }
})

export class NodemailMailAdapter implements MailAdapter {
  async sendMail({ subject, body }: SendMailData) {
    await transport.sendMail({
      from: 'Equipe Feedget <oi@feedget.com>',
      to: 'Roberto Medeiros <robertomedeirosjr@gmail.com>',
      subject,
      html: body
    })
  }
}
