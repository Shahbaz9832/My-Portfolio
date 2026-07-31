import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import About from '../About'

describe('About', () => {
  it('renders the section with the about anchor id', () => {
    const { container } = render(<About />)

    expect(container.querySelector('section#about')).toBeInTheDocument()
  })

  it('renders the heading', () => {
    render(<About />)

    expect(screen.getByRole('heading', { name: 'About Me', level: 2 })).toBeInTheDocument()
  })

  it('renders every highlight card with its title and value', () => {
    render(<About />)

    const highlights = [
      ['Degree', 'B.Tech CSE'],
      ['Graduation', '2026'],
      ['Projects', '5+ Completed'],
      ['Focus', 'Full Stack Development'],
    ]

    highlights.forEach(([title, value]) => {
      expect(screen.getByRole('heading', { name: title, level: 3 })).toBeInTheDocument()
      expect(screen.getByText(value)).toBeInTheDocument()
    })
  })

  it('renders the three biography paragraphs', () => {
    render(<About />)

    expect(screen.getByText(/final-year Computer Science and Engineering student/i)).toBeInTheDocument()
    expect(screen.getByText(/hands-on\s+experience in full-stack development/i)).toBeInTheDocument()
    expect(screen.getByText(/currently seeking opportunities/i)).toBeInTheDocument()
  })
})
