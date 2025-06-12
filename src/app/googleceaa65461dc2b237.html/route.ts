import { NextResponse } from 'next/server';

export const dynamic = 'force-static';

export async function GET() {
  return new NextResponse(
    'google-site-verification: googleceaa65461dc2b237.html',
    {
      status: 200,
      headers: {
        'Content-Type': 'text/html',
      },
    }
  );
}
