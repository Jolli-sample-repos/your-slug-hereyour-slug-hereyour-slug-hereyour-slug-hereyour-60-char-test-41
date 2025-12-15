'use client'

import { useTheme } from 'next-themes'
import { useEffect, useState } from 'react'

interface ApiReferenceProps {
  slug: string
}

export default function ApiReference({ slug }: ApiReferenceProps) {
  const { resolvedTheme } = useTheme()
  const [mounted, setMounted] = useState(false)

  // Avoid hydration mismatch by waiting for mount
  useEffect(() => {
    setMounted(true)
  }, [])

  // Don't render iframe until we know the actual theme
  if (!mounted) {
    return (
      <div style={{ width: '100%', height: 'calc(100vh - 64px)', minHeight: '600px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        <span>Loading API Reference...</span>
      </div>
    )
  }

  const theme = resolvedTheme === 'dark' ? 'dark' : 'light'

  return (
    <div style={{ width: '100%', height: 'calc(100vh - 64px)', minHeight: '600px' }}>
      <iframe
        key={theme}
        src={`/api-docs-${slug}.html?theme=${theme}`}
        style={{ width: '100%', height: '100%', border: 'none' }}
        title="API Reference"
      />
    </div>
  )
}
