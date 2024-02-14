import { NFTContentWrapper } from '@/components/(interfaces)';
import { CollectionsProvider } from '@/components/(providers)';
import { getCollections } from '@/lib/ctx';
import { Suspense } from 'react';
import { Skeleton } from "@/components/ui/skeleton"
import { NFTContentSkeleton } from '../(skeletons)';

export default async function PopularCollections() {
    return (
        <section className=""> {/* mt-10 */}
            <div className="2xl:w-[1456px] xl:w-[1280px] lg:w-[1024px] md:w-[768px] mx-auto">
                <Suspense fallback={<NFTContentSkeleton />}>
                    <NFTContentWrapper title='Popular Collection' />
                </Suspense>  
            </div>
        </section>
    );
}