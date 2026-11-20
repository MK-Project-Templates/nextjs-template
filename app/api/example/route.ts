import { NextRequest, NextResponse } from 'next/server';

export async function GET() {
  const mockData = [
    { id: '1', title: 'Example 1', description: 'This is example item 1' },
    { id: '2', title: 'Example 2', description: 'This is example item 2' },
    { id: '3', title: 'Example 3', description: 'This is example item 3' },
  ];

  return NextResponse.json(mockData);
}

export async function POST(request: NextRequest) {
  const body = await request.json();
  const newItem = {
    id: Date.now().toString(),
    ...body,
  };

  return NextResponse.json(newItem, { status: 201 });
}
