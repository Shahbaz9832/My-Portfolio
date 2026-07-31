import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { describe, expect, it, vi } from 'vitest'
import Header from '../Header'

describe('Header', () => {
  it('renders the logo linking to the hero section', () => {
    render(<Header toggleDarkMode={() => {}} darkMode={false} />)

    expect(screen.getByRole('link', { name: 'Shahbaz Ansari' })).toHaveAttribute(
      'href',
      '#hero'
    )
  })

  it('renders every navigation anchor', () => {
    render(<Header toggleDarkMode={() => {}} darkMode={false} />)

    const links = {
      About: '#about',
      Skills: '#skills',
      Projects: '#projects',
      Resume: '#resume',
      Contact: '#contact',
    }

    Object.entries(links).forEach(([name, href]) => {
      expect(screen.getByRole('link', { name })).toHaveAttribute('href', href)
    })
  })

  it('labels the toggle for switching to dark mode when light mode is active', () => {
    render(<Header toggleDarkMode={() => {}} darkMode={false} />)

    expect(screen.getByRole('button')).toHaveTextContent('🌙 Dark')
  })

  it('labels the toggle for switching to light mode when dark mode is active', () => {
    render(<Header toggleDarkMode={() => {}} darkMode={true} />)

    expect(screen.getByRole('button')).toHaveTextContent('☀️ Light')
  })

  it('calls toggleDarkMode when the toggle is clicked', async () => {
    const toggleDarkMode = vi.fn()
    render(<Header toggleDarkMode={toggleDarkMode} darkMode={false} />)

    await userEvent.click(screen.getByRole('button'))

    expect(toggleDarkMode).toHaveBeenCalledTimes(1)
  })
})
