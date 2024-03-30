import Link from "next/link";

export default function FooterColumn({ titleName, linkArray }: any) {
    return (
        <div className="flex flex-col gap-y-5">
            <h1 className="font-semibold mb-1">{titleName}</h1>
            {linkArray.map((link: any, i: number) => {
                return <Link href={link.href} className="hover:underline text-sm" key={i}>{link.description}</Link>
            })}
        </div>
    )
}