import NFTCards from '../_components/NFTCards'

type CollectionParams = {
  params: { address: string }
}

export default async function CollectionPage({ params: { address }}: CollectionParams) {

  return (
    <main className='h-[1000px]'>
      <NFTCards address={address} />
    </main>
  )
}
