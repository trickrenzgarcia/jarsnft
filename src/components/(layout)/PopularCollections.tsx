import { NFTContentWrapper } from '@/components/(interfaces)';
import { CollectionsProvider } from '@/components/(providers)';
import { getCollections } from '@/lib/ctx';

export default function PopularCollections() {
    const collections = getCollections()

    return (
        <section className=""> {/* mt-10 */}
            <div className="2xl:w-[1456px] xl:w-[1280px] lg:w-[1024px] md:w-[768px] mx-auto">
                <CollectionsProvider value={collections}>
                    <NFTContentWrapper title='Popular Collection' />
                </CollectionsProvider>
            </div>
        </section>
    );
}
