import { NextRequest, NextResponse } from 'next/server';

const AGNTUX_API_URL = process.env.AGNTUX_API_URL || 'https://api.agntux.com';
const AGNTUX_API_KEY = process.env.AGNTUX_API_KEY;

export async function POST(request: NextRequest) {
  // Check if API key is configured
  if (!AGNTUX_API_KEY) {
    return NextResponse.json(
      { success: false, error: 'Waitlist API is not configured' },
      { status: 500 }
    );
  }

  try {
    const body = await request.json();
    const { email, name, metadata } = body;

    // Validate email
    if (!email || typeof email !== 'string') {
      return NextResponse.json(
        { success: false, error: 'Email is required' },
        { status: 400 }
      );
    }

    // Basic email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { success: false, error: 'Invalid email format' },
        { status: 400 }
      );
    }

    // Validate name if provided
    if (name !== undefined && name !== null) {
      if (typeof name !== 'string' || name.trim().length === 0) {
        return NextResponse.json(
          { success: false, error: 'Name must be a non-empty string if provided' },
          { status: 400 }
        );
      }
    }

    // Validate metadata if provided
    if (metadata !== undefined && metadata !== null) {
      if (typeof metadata !== 'object' || Array.isArray(metadata)) {
        return NextResponse.json(
          { success: false, error: 'Metadata must be a valid JSON object if provided' },
          { status: 400 }
        );
      }
    }

    // Prepare request body
    const requestBody: any = { email: email.trim().toLowerCase() };
    if (name) {
      requestBody.name = name.trim();
    }
    if (metadata) {
      requestBody.metadata = metadata;
    }

    // Make API call to AgntUX waitlist endpoint
    const response = await fetch(`${AGNTUX_API_URL}/api/waitlist`, {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${AGNTUX_API_KEY}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(requestBody),
    });

    const data = await response.json();

    if (!response.ok) {
      // Forward the error from the API
      return NextResponse.json(
        { success: false, error: data.error || 'Failed to join waitlist' },
        { status: response.status }
      );
    }

    // Return success response
    return NextResponse.json(data, { status: 201 });
  } catch (error) {
    console.error('Waitlist API error:', error);
    return NextResponse.json(
      { success: false, error: 'An unexpected error occurred' },
      { status: 500 }
    );
  }
}

