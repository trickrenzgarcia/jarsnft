import { ThirdwebSDK } from "@thirdweb-dev/sdk"
import Client from "../Client"
import { THIRDWEB_API_KEY } from "@/types/constant"

type Props = {  
  params: {
    contract: string,
    tokenId: string
  }
}

export default async function ContractPage({ params: { contract, tokenId } }: Props) {

  return (
    <div>
      <Client tokenContract={contract} tokenId={tokenId} />
    </div>
  )

}
