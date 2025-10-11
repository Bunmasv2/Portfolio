import nodemailer from "nodemailer";

export async function POST(req: Request) {
    try {
        const { name, email, message } = await req.json();

        if (!name || !email || !message) {
            return Response.json({ success: false, error: "Missing fields" }, { status: 400 });
        }

        const transporter = nodemailer.createTransport({
            service: "gmail",
            auth: {
                user: process.env.GMAIL_USER,
                pass: process.env.GMAIL_PASS,
            },
        });

        await transporter.sendMail({
            from: `"Portfolio Contact" <${process.env.GMAIL_USER}>`,
            to: process.env.GMAIL_USER, // gửi mail về chính bạn
            subject: `New message from ${name}`,
            text: `Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`,
        });

        return Response.json({ success: true });
    } catch (err) {
        console.error("Mail error:", err);
        return Response.json({ success: false, error: "Failed to send email" }, { status: 500 });
    }
}
