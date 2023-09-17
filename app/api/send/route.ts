import { NextResponse } from 'next/server';
import { Resend } from 'resend';

export const runtime = 'edge';
export const dynamic = 'force-dynamic';

const resend = new Resend('re_123456789');

export async function POST() {
    try {
        const data = await resend.emails.send({
            from: 'Acme <onboarding@resend.dev>',
            to: ['delivered@resend.dev'],
            subject: 'Hello World',
            html: '<strong>It works!</strong>',
        });
        
        return NextResponse.json({
            statusCode: 200,
            body: data,
        });
    }
    catch (error) {
        return NextResponse.json({
            statusCode: 500,
            body: error.message,
        });
    }
}