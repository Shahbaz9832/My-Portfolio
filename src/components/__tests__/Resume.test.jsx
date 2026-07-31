import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import Resume from '../Resume'

describe('Resume', () => {
  it('renders the section with the resume anchor id', () => {
    const { container } = render(<Resume />)

    expect(container.querySelector('section#resume')).toBeInTheDocument()
  })

  it('renders the heading and description', () => {
    render(<Resume />)

    expect(screen.getByRole('heading', { name: 'Resume', level: 2 })).toBeInTheDocument()
    expect(screen.getByText(/Download my latest resume/i)).toBeInTheDocument()
  })

  it('opens the resume in a new tab from the view link', () => {
    render(<Resume />)

    const viewLink = screen.getByRole('link', { name: /View Resume/ })

    expect(viewLink).toHaveAttribute('href', '/resume.pdf')
    expect(viewLink).toHaveAttribute('target', '_blank')
    expect(viewLink).toHaveAttribute('rel', 'noopener noreferrer')
  })

  it('marks the download link as a download', () => {
    render(<Resume />)

    const downloadLink = screen.getByRole('link', { name: /Download Resume/ })

    expect(downloadLink).toHaveAttribute('href', '/resume.pdf')
    expect(downloadLink).toHaveAttribute('download')
    expect(downloadLink).not.toHaveAttribute('target')
  })
})
