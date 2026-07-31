import { render, screen } from '@testing-library/react'
import gsap from 'gsap'
import { beforeEach, describe, expect, it, vi } from 'vitest'
import Hero from '../Hero'

vi.mock('gsap', () => ({
  default: { fromTo: vi.fn() },
}))

describe('Hero', () => {
  beforeEach(() => {
    gsap.fromTo.mockClear()
  })

  it('renders the section with the hero anchor id', () => {
    const { container } = render(<Hero />)

    expect(container.querySelector('section#hero')).toBeInTheDocument()
  })

  it('renders the name, role subtitle and availability badge', () => {
    render(<Hero />)

    expect(screen.getByRole('heading', { level: 1 })).toHaveTextContent("Hi, I'm Shahbaz Ansari")
    expect(
      screen.getByText('Software Engineer • Full Stack Developer • Backend Developer')
    ).toBeInTheDocument()
    expect(screen.getByText(/Available for Full-Time Opportunities/)).toBeInTheDocument()
  })

  it('renders the call-to-action links', () => {
    render(<Hero />)

    expect(screen.getByRole('link', { name: /View Projects/ })).toHaveAttribute('href', '#projects')
    expect(screen.getByRole('link', { name: /Resume/ })).toHaveAttribute('href', '/resume.pdf')
    expect(screen.getByRole('link', { name: 'Contact Me' })).toHaveAttribute('href', '#contact')
  })

  it('opens external links safely in a new tab', () => {
    const { container } = render(<Hero />)

    const externalLinks = [...container.querySelectorAll('a[target="_blank"]')]

    expect(externalLinks.map((link) => link.getAttribute('href'))).toEqual([
      '/resume.pdf',
      'https://github.com/Shahbaz9832',
      'https://www.linkedin.com/in/shahbaz-ansari-469326274/',
    ])
    externalLinks.forEach((link) => {
      expect(link).toHaveAttribute('rel', 'noopener noreferrer')
    })
  })

  it('animates its children on mount', () => {
    render(<Hero />)

    expect(gsap.fromTo).toHaveBeenCalledTimes(1)

    const [target, from, to] = gsap.fromTo.mock.calls[0]

    expect(target).toHaveLength(1)
    expect(from).toEqual({ opacity: 0, y: 40 })
    expect(to).toMatchObject({ opacity: 1, y: 0, stagger: 0.15 })
  })
})
