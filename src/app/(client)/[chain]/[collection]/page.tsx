import { Metadata } from 'next';

export async function generateMetadata({ params }: { params: Promise<{ collection: string }> }): Promise<Metadata> {
  const { collection } = await params
  return {
    title: `${collection}`,
  }
}

export default function CollectionPage() {
  return (
    <div>CollectionPage</div>
  )
}
