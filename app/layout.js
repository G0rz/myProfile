import Providers from './providers'
import {Roboto} from "next/font/google";

const roboto = Roboto({subsets: ['latin'], weight: ["400", "500", "700", "900"]})

export const metadata = {
    title: 'Leonardo Yael Bazán Becerril',
    description: 'Pasante de Ingeniería en Sistemas Computacionales | Fullstack Web developer | JavaScript | React | Java | PHP'
}
export default function RootLayout({children}) {
    return (<html lang="es">
    <body className={roboto.className}>
    <Providers>{children}</Providers>
    </body>
    </html>)
}