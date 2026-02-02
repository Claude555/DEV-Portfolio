import { Resend } from "resend"
import { NextResponse } from "next/server"

const resend = new Resend(process.env.RESEND_API_KEY)

export async function POST(req: Request) {
  try {
    const { name, email, message } = await req.json()

    if (!name || !email || !message) {
      return NextResponse.json(
        { error: "Missing fields" },
        { status: 400 }
      )
    }

    /* 1️⃣ SEND MESSAGE TO YOU */
    await resend.emails.send({
      from: process.env.FROM_EMAIL!,
      to: process.env.CONTACT_EMAIL!,
      subject: `New Portfolio Contact — ${name}`,
      replyTo: email,
      html: `
        <h2>New Contact Message</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Message:</strong></p>
        <p>${message}</p>
      `,
    })

    /* 2️⃣ AUTO-REPLY TO CLIENT */
    await resend.emails.send({
      from: process.env.FROM_EMAIL!,
      to: email,
      subject: "Thanks for reaching out!",
      html: `
        <p>Hi ${name},</p>

        <p>Thank you for contacting me. I’ve received your message and will
        review it shortly.</p>

        <p>I typically respond within <strong>24 hours</strong>.</p>

        <p>Looking forward to learning more about your project.</p>

        <br />

        <p>Best regards,<br />
        Ibrahim</p>
      `,
    })

    return NextResponse.json({ success: true })
  } catch (error) {
    console.error(error)
    return NextResponse.json(
      { error: "Failed to send message" },
      { status: 500 }
    )
  }
}
