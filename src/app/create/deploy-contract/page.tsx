import React from 'react'
import NFTCreateContractCard from '../_components/NFTCreateContractCard'
import DetailsCard from '../_components/DetailsCard'

export default function DeployContractPage() {
  return (
    <main className='w-full flex flex-col md:flex-row justify-center py-8 gap-5'>
        <section>
            <NFTCreateContractCard 
                title='Create NFT Collection'
                description='The NFT Collection contract is suitable for when you want to have a collection of unique NFTs, but not "drop" or "release" them for your community to claim.'
            />
        </section>
        <section className='hidden lg:block'>
            <DetailsCard title="Once your contract deployment is complete, you'll have the ability to:" />
        </section>
        
    </main>
  )
}
