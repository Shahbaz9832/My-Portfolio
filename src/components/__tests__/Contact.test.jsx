import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import Contact from '../Contact'

describe('Contact', () => {
  it('renders the section with the contact anchor id', () => {
    const { container } = render(<Contact />)

    expect(container.querySelector('section#contact')).toBeInTheDocument()
  })

  it('renders the heading and availability blurb', () => {
    render(<Contact />)

    expect(
      screen.getByRole('heading', { name: "Let's Build Something Amazing", level: 2 })
    ).toBeInTheDocument()
    expect(screen.getByText(/currently looking for Software Engineer/i)).toBeInTheDocument()
  })

  it('renders a mailto link for the email card', () => {
    render(<Contact />)

    expect(screen.getByRole('link', { name: /Email/ })).toHaveAttribute(
      'href',
      'mailto:shahbazansari6464141@gmail.com'
    )
  })

  it('renders the four contact cards with their destinations', () => {
    render(<Contact />)

    const hrefs = {
      Email: 'mailto:shahbazansari6464141@gmail.com',
      LinkedIn: 'https://www.linkedin.com/in/shahbaz-ansari-469326274/',
      GitHub: 'https://github.com/Shahbaz9832',
      Resume: '/resume.pdf',
    }

    Object.entries(hrefs).forEach(([name, href]) => {
      expect(screen.getByRole('link', { name: new RegExp(name) })).toHaveAttribute('href', href)
    })
  })

  it('opens the non-email cards safely in a new tab', () => {
    const { container } = render(<Contact />)

    const externalLinks = [...container.querySelectorAll('a[target="_blank"]')]

    expect(externalLinks).toHaveLength(3)
    externalLinks.forEach((link) => {
      expect(link).toHaveAttribute('rel', 'noopener noreferrer')
    })
  })
})
