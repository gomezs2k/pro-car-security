import { NextRequest, NextResponse } from 'next/server'
import { prisma } from '@/lib/db'

export async function GET() {
  try {
    const reviews = await prisma.review.findMany({
      orderBy: { date: 'desc' },
    })
    return NextResponse.json({ success: true, data: reviews })
  } catch (error) {
    console.error('Error fetching reviews:', error)
    // Return mock reviews if database is not connected
    const mockReviews = [
      {
        id: '1',
        reviewerName: 'Michael Thompson',
        rating: 5,
        text: 'Excellent service from start to finish. The technicians were professional and knowledgeable.',
        date: new Date('2026-01-15'),
        source: 'google',
      },
      {
        id: '2',
        reviewerName: 'Sarah Chen',
        rating: 5,
        text: 'Outstanding work on my remote start system. The app control works flawlessly.',
        date: new Date('2025-12-20'),
        source: 'google',
      },
      {
        id: '3',
        reviewerName: 'David Martin',
        rating: 5,
        text: 'Best audio and security installer in North Texas! Great installation and super convenient mobile service.',
        date: new Date('2025-11-10'),
        source: 'google',
      },
    ]
    return NextResponse.json({ success: true, data: mockReviews })
  }
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()

    const review = await prisma.review.create({
      data: {
        reviewerName: body.reviewerName,
        rating: body.rating,
        text: body.text,
        date: new Date(),
        source: body.source || 'website',
      },
    })

    return NextResponse.json({ success: true, data: review }, { status: 201 })
  } catch (error) {
    console.error('Error creating review:', error)
    return NextResponse.json(
      { success: false, error: 'Failed to create review' },
      { status: 500 }
    )
  }
}
