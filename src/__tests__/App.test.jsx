import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { afterEach, describe, expect, it, vi } from 'vitest'
import App from '../App'

vi.mock('gsap', () => ({
  default: { fromTo: vi.fn() },
}))

afterEach(() => {
  document.documentElement.classList.remove('dark')
})

describe('App', () => {
  it('renders the header, every content section and the footer', () => {
    const { container } = render(<App />)

    expect(container.querySelector('header')).toBeInTheDocument()
    expect(container.querySelector('footer')).toBeInTheDocument()
    ;['hero', 'about', 'skills', 'projects', 'contact'].forEach((id) => {
      expect(container.querySelector(`section#${id}`)).toBeInTheDocument()
    })
  })

  it('starts in light mode', () => {
    render(<App />)

    expect(document.documentElement).not.toHaveClass('dark')
    expect(screen.getByRole('button', { name: /Dark/ })).toBeInTheDocument()
  })

  it('toggles the dark class on the html element', async () => {
    render(<App />)

    await userEvent.click(screen.getByRole('button', { name: /Dark/ }))
    expect(document.documentElement).toHaveClass('dark')

    await userEvent.click(screen.getByRole('button', { name: /Light/ }))
    expect(document.documentElement).not.toHaveClass('dark')
  })
})
