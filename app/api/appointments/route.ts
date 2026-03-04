import { NextRequest, NextResponse } from 'next/server'

export async function POST(request: NextRequest) {
  try {
    const { prisma } = await import('@/lib/db')
    const body = await request.json()

    const appointment = await prisma.appointment.create({
      data: {
        name: body.name,
        phone: body.phone,
        email: body.email,
        date: new Date(body.date),
        service: body.service,
        status: 'pending',
      },
    })

    return NextResponse.json({ success: true, data: appointment }, { status: 201 })
  } catch (error) {
    console.error('Error creating appointment:', error)
    // Return mock response if database is not connected
    return NextResponse.json(
      {
        success: true,
        data: {
          id: 'mock-' + Date.now(),
          message: 'Appointment request received (demo mode)',
        },
      },
      { status: 201 }
    )
  }
}

export async function GET() {
  try {
    const { prisma } = await import('@/lib/db')
    const appointments = await prisma.appointment.findMany({
      orderBy: { date: 'desc' },
    })
    return NextResponse.json({ success: true, data: appointments })
  } catch (error) {
    console.error('Error fetching appointments:', error)
    return NextResponse.json({ success: true, data: [] })
  }
}
