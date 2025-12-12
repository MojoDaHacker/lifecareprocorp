import { ClientOnly } from './client'
 
export function generateStaticParams() {
  return [{ slug: [''] }]
}
 
export default function PagePage({ params }: { params: { slug: string } }) {
  return <ClientOnly />
}