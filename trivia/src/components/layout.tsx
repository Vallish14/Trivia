import { Libre_Franklin } from 'next/font/google'
import './styles.css'
import { ReactNode } from 'react';

const libre_franklin = Libre_Franklin({
    subsets: ['latin'],
    display: 'swap',
    variable: '--font-libre_franklin',
});

interface LayoutProps {
    children: ReactNode;
}

export default function Layout({ children }: LayoutProps) {
    return (
        <html lang="en">
        <body className={libre_franklin.variable}>
        {children}
        </body>
        </html>
    )
}
