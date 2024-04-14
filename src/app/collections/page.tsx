import { Separator } from "@/components/ui/separator";
import CollectionRows from "./_components/CollectionRows";

export default function Page() {
    return (
        <div>
            <h1 className="text-4xl font-bold mb-4">Collections</h1>
            {/* Column Titles */}
            <div className="grid grid-cols-10 text-gray-500 mb-4">
                <div className="col-span-2"></div>
                <p className="text-center">Floor</p>
                <p className="text-center">Floor Chg</p>
                <p className="text-center">Volume</p>
                <p className="text-center">Vol Chg</p>
                <p className="text-center">Sales</p>
                <p className="text-center">Sales Chg</p>
                <p className="text-right col-span-2">Listed</p>
            </div>

            <Separator />

            {/* Collections Rows */}
            <CollectionRows collectionHref="#" collectionLogoSrc="/assets/ex1.png" collectionName="Mutant Ape Yacht"
                isVerified={true} floorPrice={5.25} floorChange={-2.9} volume={1457.8} volumeChange={68.1}
                sales={273} salesChange={68.52} allCurrentListedNFTs={667} allCurrentNFTS={19486} />

            <CollectionRows collectionHref="#" collectionLogoSrc="/assets/ex1.png" collectionName="Mutant Ape Yacht"
                isVerified={true} floorPrice={5.25} floorChange={-2.9} volume={1457.8} volumeChange={68.1}
                sales={273} salesChange={68.52} allCurrentListedNFTs={667} allCurrentNFTS={19486} />
            <CollectionRows collectionHref="#" collectionLogoSrc="/assets/ex1.png" collectionName="Mutant Ape Yacht"
                isVerified={true} floorPrice={5.25} floorChange={-2.9} volume={1457.8} volumeChange={68.1}
                sales={273} salesChange={68.52} allCurrentListedNFTs={667} allCurrentNFTS={19486} />
            <CollectionRows collectionHref="#" collectionLogoSrc="/assets/ex1.png" collectionName="Mutant Ape Yacht"
                isVerified={true} floorPrice={5.25} floorChange={-2.9} volume={1457.8} volumeChange={68.1}
                sales={273} salesChange={68.52} allCurrentListedNFTs={667} allCurrentNFTS={19486} />
            <CollectionRows collectionHref="#" collectionLogoSrc="/assets/ex1.png" collectionName="Mutant Ape Yacht"
                isVerified={true} floorPrice={5.25} floorChange={-2.9} volume={1457.8} volumeChange={68.1}
                sales={273} salesChange={68.52} allCurrentListedNFTs={667} allCurrentNFTS={19486} />
        </div>
    )
}