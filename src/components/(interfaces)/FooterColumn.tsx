import Link from "next/link";

export default function FooterColumn({ divStyle, titleStyle,
    titleName, linkArray }: any) {
    return (
        <div className={divStyle}>
            <h1 className={titleStyle}>{titleName}</h1>
            {linkArray.map((link: any, i: number) => {
                return <Link href={link.href} className={link.style} key={i}>{link.description}</Link>
            })}
        </div>
    )
}