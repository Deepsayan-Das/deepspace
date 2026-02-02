import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(request) {
    try {
        const { name, email, message } = await request.json();

        // Validate input
        if (!name || !email || !message) {
            return NextResponse.json(
                { error: 'All fields are required' },
                { status: 400 }
            );
        }

        // Create transporter
        const transporter = nodemailer.createTransport({
            service: 'gmail',
            auth: {
                user: process.env.EMAIL_USER,
                pass: process.env.EMAIL_PASS,
            },
        });

        // Email options
        const mailOptions = {
            from: process.env.EMAIL_USER,
            to: process.env.EMAIL_TO || process.env.EMAIL_USER,
            subject: `Portfolio Contact: Message from ${name}`,
            html: `
                <div style="font-family: 'Courier New', monospace; background-color: #0a0a0a; color: #ffffff; padding: 40px; border: 2px solid #c4ff00;">
                    <div style="border-left: 4px solid #c4ff00; padding-left: 20px; margin-bottom: 30px;">
                        <h2 style="color: #c4ff00; margin: 0; font-size: 24px; letter-spacing: 2px;">NEW CONTACT MESSAGE</h2>
                        <p style="color: #666; margin: 5px 0 0 0; font-size: 12px; letter-spacing: 1px;">PORTFOLIO_SYSTEM_NOTIFICATION</p>
                    </div>
                    
                    <div style="background-color: rgba(196, 255, 0, 0.05); padding: 20px; margin-bottom: 20px;">
                        <p style="margin: 0 0 10px 0; color: #999; font-size: 11px; letter-spacing: 1px;">SENDER_IDENTIFIER</p>
                        <p style="margin: 0; font-size: 18px; font-weight: bold; color: #c4ff00;">${name}</p>
                    </div>
                    
                    <div style="background-color: rgba(196, 255, 0, 0.05); padding: 20px; margin-bottom: 20px;">
                        <p style="margin: 0 0 10px 0; color: #999; font-size: 11px; letter-spacing: 1px;">EMAIL_ENDPOINT</p>
                        <p style="margin: 0; font-size: 16px; color: #ffffff;">${email}</p>
                    </div>
                    
                    <div style="background-color: rgba(196, 255, 0, 0.05); padding: 20px; margin-bottom: 20px;">
                        <p style="margin: 0 0 10px 0; color: #999; font-size: 11px; letter-spacing: 1px;">MESSAGE_PAYLOAD</p>
                        <p style="margin: 0; font-size: 14px; line-height: 1.6; color: #ffffff; white-space: pre-wrap;">${message}</p>
                    </div>
                    
                    <div style="border-top: 1px solid #333; padding-top: 20px; margin-top: 30px;">
                        <p style="margin: 0; font-size: 10px; color: #666; letter-spacing: 1px;">
                            TIMESTAMP: ${new Date().toISOString()}<br/>
                            SOURCE: PORTFOLIO_CONTACT_FORM<br/>
                            STATUS: TRANSMISSION_COMPLETE
                        </p>
                    </div>
                </div>
            `,
            text: `
NEW CONTACT MESSAGE
===================

From: ${name}
Email: ${email}

Message:
${message}

---
Timestamp: ${new Date().toISOString()}
Source: Portfolio Contact Form
            `,
        };

        // Send email
        await transporter.sendMail(mailOptions);

        return NextResponse.json(
            { success: true, message: 'Email sent successfully' },
            { status: 200 }
        );
    } catch (error) {
        console.error('Email error:', error);
        return NextResponse.json(
            { error: 'Failed to send email', details: error.message },
            { status: 500 }
        );
    }
}
