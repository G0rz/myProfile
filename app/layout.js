import Providers from './providers'
import {Inter} from "next/font/google";

const inter = Inter({subsets: ['latin']})

export const metadata = {
    title: 'Leonardo Yael Bazán Becerril',
    description: 'Software Engineer | Fullstack Developer | JavaScript | React | Java '
}
export default function RootLayout({children}) {
    return (<html lang="es">
    <body className={inter.className}>
    <Providers>{children}</Providers>
    </body>
    </html>)
}