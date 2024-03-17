import { NFTContentWrapper } from '@/components/(interfaces)';
import { Suspense } from 'react';
import { NFTContentSkeleton } from '../(skeletons)';

export default async function PopularCollections() {
    return (
        <section className="container mt-12">
            <div className="2xl:w-[1456px] xl:w-[1456px] lg:w-[1280px] md:w-[768px] mx-auto">
                <Suspense fallback={<NFTContentSkeleton />}>
                    <NFTContentWrapper title='Popular Collection' />
                </Suspense>
            </div>
        </section>
    );
}