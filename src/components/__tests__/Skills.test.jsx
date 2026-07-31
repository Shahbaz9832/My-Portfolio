import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import Skills from '../Skills'

const categories = [
  'Programming Languages',
  'Frontend',
  'Backend',
  'Database',
  'Tools & Platforms',
  'AI & Computer Vision',
  'Core Computer Science',
]

describe('Skills', () => {
  it('renders the section with the skills anchor id', () => {
    const { container } = render(<Skills />)

    expect(container.querySelector('section#skills')).toBeInTheDocument()
  })

  it('renders the heading', () => {
    render(<Skills />)

    expect(
      screen.getByRole('heading', { name: 'Technical Skills', level: 2 })
    ).toBeInTheDocument()
  })

  it('renders a card for every skill category', () => {
    render(<Skills />)

    categories.forEach((title) => {
      expect(screen.getByRole('heading', { name: title, level: 3 })).toBeInTheDocument()
    })
    expect(screen.getAllByRole('heading', { level: 3 })).toHaveLength(categories.length)
  })

  it('renders individual skill tags inside their categories', () => {
    render(<Skills />)

    const skills = [
      'JavaScript',
      'React.js',
      'Tailwind CSS',
      'Express.js',
      'MongoDB',
      'GitHub',
      'YOLOv8',
      'Operating Systems',
    ]

    skills.forEach((skill) => {
      expect(screen.getByText(skill)).toBeInTheDocument()
    })
  })

  it('renders every skill tag exactly once per category', () => {
    const { container } = render(<Skills />)

    expect(container.querySelectorAll('span')).toHaveLength(30)
  })
})
