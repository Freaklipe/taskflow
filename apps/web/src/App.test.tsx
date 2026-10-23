import { expect, test } from 'vitest'
import App from './App'
import { renderToStaticMarkup } from 'react-dom/server'

test('App renders with title and nav links', () => {
  const html = renderToStaticMarkup(<App />)
  expect(html).toContain('<h1>TaskFlow</h1>')
  expect(html).toContain('Tasks')
  expect(html).toContain('Settings')
  expect(html).toContain('Help')
})
