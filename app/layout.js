import Providers from './providers'
import {Roboto} from "next/font/google";

const roboto = Roboto({subsets: ['latin'], weight: ["400", "500", "700", "900"]})

export const metadata = {
    title: 'Leonardo Yael Bazán Becerril',
    description: 'Computer Systems Engineering Intern | Full Stack Web developer | JavaScript | React | Java | PHP',
    applicationName: 'Personal Profile',
    referrer: 'origin-when-cross-origin',
    keywords: ['Computer Systems Engineering Intern', 'Fullstack Web developer', 'JavaScript', 'React', 'Java', 'PHP'],
    authors: [{name: 'G0rz', url: 'https://github.com/G0rz/'}],
    colorScheme: 'dark',
    creator: 'G0rz',
    icons: {
        icon: '/icon-192x192.png',
        apple: '/icon-192x192.png',
    },
    manifest: '/manifest.json',
}
export default function RootLayout({children}) {
    return (<html lang="en">
    <body className={roboto.className}>
    <Providers>{children}</Providers>
    </body>
    </html>)
}