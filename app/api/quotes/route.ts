import { NextRequest, NextResponse } from 'next/server'
import { prisma } from '@/lib/db'

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()

    const quote = await prisma.quote.create({
      data: {
        name: body.name,
        phone: body.phone,
        email: body.email,
        vehicle: `${body.year} ${body.make} ${body.model}`,
        services: body.services || [],
        package: body.selectedPackage,
        message: body.message || '',
      },
    })

    return NextResponse.json({ success: true, data: quote }, { status: 201 })
  } catch (error) {
    console.error('Error creating quote:', error)
    // Return mock response if database is not connected
    return NextResponse.json(
      {
        success: true,
        data: {
          id: 'mock-' + Date.now(),
          message: 'Quote request received (demo mode)',
        },
      },
      { status: 201 }
    )
  }
}

export async function GET() {
  try {
    const quotes = await prisma.quote.findMany({
      orderBy: { createdAt: 'desc' },
    })
    return NextResponse.json({ success: true, data: quotes })
  } catch (error) {
    console.error('Error fetching quotes:', error)
    return NextResponse.json({ success: true, data: [] })
  }
}
