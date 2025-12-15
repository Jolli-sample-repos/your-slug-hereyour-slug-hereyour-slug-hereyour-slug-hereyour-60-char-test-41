import { redirect } from 'next/navigation'

export default function Home() {
  redirect('/api-docs/valid-jolli-api-yaml')
}
