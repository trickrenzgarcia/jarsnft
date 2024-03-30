import { Navbar, Footer } from '@/components/(layout)'

type TradeProps = {
    children: React.ReactNode
}

export default function TradeLayout({ children }: TradeProps) {
    return (
        <body>
            <Navbar />
            {children}
            <Footer />
        </body>
    )
}