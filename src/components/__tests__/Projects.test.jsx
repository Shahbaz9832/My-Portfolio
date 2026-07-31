import { render, screen, within } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import Projects from '../Projects'

const titles = [
  'Plastecure',
  'AI Interview Preparation Platform',
  'iPhone Website Clone',
  'MERN E-Commerce Backend API',
  'Note Taking Web Application',
]

describe('Projects', () => {
  it('renders the section with the projects anchor id', () => {
    const { container } = render(<Projects />)

    expect(container.querySelector('section#projects')).toBeInTheDocument()
  })

  it('renders a card for every project', () => {
    render(<Projects />)

    titles.forEach((title) => {
      expect(screen.getByRole('heading', { name: title, level: 3 })).toBeInTheDocument()
    })
  })

  it('renders each project achievement', () => {
    render(<Projects />)

    expect(screen.getByText('✓ 92% Plastic Detection Accuracy')).toBeInTheDocument()
    expect(screen.getByText('✓ Full Stack AI Platform')).toBeInTheDocument()
    expect(screen.getByText('✓ Responsive 3D UI')).toBeInTheDocument()
    expect(screen.getByText('✓ Secure REST APIs')).toBeInTheDocument()
    expect(screen.getByText('✓ CRUD Functionality')).toBeInTheDocument()
  })

  it('links every project to GitHub in a new, safely rel-tagged tab', () => {
    render(<Projects />)

    const githubLinks = screen.getAllByRole('link', { name: /GitHub/ })

    expect(githubLinks).toHaveLength(titles.length)
    githubLinks.forEach((link) => {
      expect(link).toHaveAttribute('href', expect.stringContaining('https://github.com/Shahbaz9832'))
      expect(link).toHaveAttribute('target', '_blank')
      expect(link).toHaveAttribute('rel', 'noopener noreferrer')
    })
  })

  it('renders a live demo link only for projects that define one', () => {
    render(<Projects />)

    const demoLinks = screen.getAllByRole('link', { name: /Live Demo/ })

    expect(demoLinks.map((link) => link.getAttribute('href'))).toEqual([
      'https://plastecure.netlify.app',
      'https://ai-interview-preparation-platform-five.vercel.app',
      'https://iphone-website-nu-nine.vercel.app/',
    ])
  })

  it('omits the live demo link for backend-only projects', () => {
    render(<Projects />)

    const card = screen
      .getByRole('heading', { name: 'MERN E-Commerce Backend API' })
      .closest('div.flex')

    expect(within(card).queryByRole('link', { name: /Live Demo/ })).not.toBeInTheDocument()
    expect(within(card).getByRole('link', { name: /GitHub/ })).toBeInTheDocument()
  })

  it('renders the tech stack tags of a project', () => {
    render(<Projects />)

    const card = screen.getByRole('heading', { name: 'Plastecure' }).closest('div.flex')

    ;['React', 'Node.js', 'YOLOv8', 'OpenCV', 'MongoDB'].forEach((tech) => {
      expect(within(card).getByText(tech)).toBeInTheDocument()
    })
  })
})
