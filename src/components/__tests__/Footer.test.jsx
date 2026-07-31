import { render, screen } from '@testing-library/react'
import { afterEach, beforeEach, describe, expect, it, vi } from 'vitest'
import Footer from '../Footer'

describe('Footer', () => {
  it('renders the name and tagline', () => {
    render(<Footer />)

    expect(screen.getByRole('heading', { name: 'Shahbaz Ansari', level: 3 })).toBeInTheDocument()
    expect(
      screen.getByText('Aspiring Software Engineer • Full Stack Developer • Backend Developer')
    ).toBeInTheDocument()
    expect(screen.getByText(/Built with React, Tailwind CSS & GSAP/)).toBeInTheDocument()
  })

  it('renders the social links safely in a new tab', () => {
    const { container } = render(<Footer />)

    const links = [...container.querySelectorAll('a')]

    expect(links.map((link) => link.getAttribute('href'))).toEqual([
      'https://github.com/Shahbaz9832',
      'https://www.linkedin.com/in/shahbaz-ansari-469326274/',
    ])
    links.forEach((link) => {
      expect(link).toHaveAttribute('target', '_blank')
      expect(link).toHaveAttribute('rel', 'noopener noreferrer')
    })
  })

  describe('copyright year', () => {
    beforeEach(() => {
      vi.useFakeTimers()
    })

    afterEach(() => {
      vi.useRealTimers()
    })

    it('shows the current year', () => {
      vi.setSystemTime(new Date('2031-03-04T00:00:00Z'))

      render(<Footer />)

      expect(screen.getByText(/© 2031 Shahbaz Ansari\. All rights reserved\./)).toBeInTheDocument()
    })
  })
})
