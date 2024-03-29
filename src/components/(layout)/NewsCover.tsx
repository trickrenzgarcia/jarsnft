import Image from 'next/image'

export default function NewsCover() {
    return (
        <section className='flex flex-col'>
            <div className="relative w-auto h-[220px]">
                <Image src="/assets/newsBackground.jpg" fill style={{
                    objectFit: "cover"
                }} alt='image of a banner' />

            </div>
        </section>
    )
}