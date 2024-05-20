import SellClient from "./SellClient"


type Props = {  
  params: {
    contract: string,
    tokenId: string
  }
}

export default async function ContractPage({ params: { contract, tokenId } }: Props) {

  return (
    <div>
      <SellClient tokenContract={contract} tokenId={tokenId} />
    </div>
  )

}
