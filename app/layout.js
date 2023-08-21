import Providers from './providers'
import {Roboto} from "next/font/google";

const roboto = Roboto({subsets: ['latin'], weight: ["400", "500", "700", "900"]})

export const metadata = {
    title: 'Leonardo Yael Bazán Becerril',
    description: 'Computer Systems Engineering Intern | Full Stack Web developer | JavaScript | React | Java | PHP',
    generator: 'G0rz',
    applicationName: 'Personal Profile',
    referrer: 'origin-when-cross-origin',
    keywords: ['Computer Systems Engineering Intern', 'Fullstack Web developer', 'Next.js', 'JavaScript', 'React', 'Java', 'PHP'],
    authors: [{name: 'G0rz', url: 'https://github.com/G0rz/'}],
    colorScheme: 'dark',
    creator: 'G0rz',
    icons: {
        icon: '/icon-192x192.png', apple: '/icon-192x192.png',
    },
    publisher: 'Leonardo Becerril',
    manifest: '/manifest.json',
    openGraph: {
        title: 'Leonardo Becerril',
        description: 'Computer Systems Engineering Intern | Full Stack Web developer | JavaScript | React | Java | PHP',
        url: 'https://leonardobecerril.dev/',
        siteName: 'Personal Profile',
        images: [{
            url: 'https://leonardobecerril.dev/icon-512x512.png', width: 512, height: 512,
        }],
        locale: 'en_MX',
        type: 'website',
    },
    robots: {
        index: false, follow: true, nocache: true, googleBot: {
            index: true, follow: false,
        },
    },
    twitter: {
        card: 'summary_short_image',
        title: 'Leonardo Becerril',
        description: 'Computer Systems Engineering Intern | Full Stack Web developer | JavaScript | React | Java | PHP',
        siteId: '1467726470533754880',
        creator: '@XDeathZero',
        creatorId: '1467726470533754880',
        images: ['https://leonardobecerril.dev/icon-192x192.png'],
    },
    verification: {
        google: 'google',
    },
    appleWebApp: {
        title: 'Leonardo Becerril', statusBarStyle: 'black-translucent',
    },
    category: 'technology'
}
export default function RootLayout({children}) {
    return (<html lang="en">
    <body className={roboto.className}>
    <Providers>{children}</Providers>
    </body>
    </html>)
}