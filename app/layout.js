import Providers from './providers'
import {Roboto} from "next/font/google";

const roboto = Roboto({subsets: ['latin'], weight: ["400", "500", "700", "900"]})

export const metadata = {
    metadataBase: new URL('https://leonardobecerril.dev/'),
    title: 'Leonardo Yael Bazán Becerril | Computer Systems Engineer',
    description: 'Computer Systems Engineer | Web Developer',
    applicationName: 'Leonardo Yael Bazán Becerril | Personal Website',
    referrer: 'origin-when-cross-origin',
    apple: '/assets/icons/apple-touch-icon.png',
    keywords: ['Computer Systems Engineer', 'Web developer', 'Next.js developer', 'Javascript', 'React js developer', 'Java developer', 'PHP developer'],
    authors: [{name: 'G0rz', url: 'https://github.com/G0rz/'}],
    creator: 'G0rz',
    icons: {
        icon: '/assets/icons/android-chrome-512x512.png', apple: '/assets/icons/apple-touch-icon.png',
    },
    manifest: '/manifest.json',
    openGraph: {
        title: 'Leonardo Yael Bazán Becerril | Computer Systems Engineer',
        description: 'Computer Systems Engineer | Front-End Web Developer',
        url: 'https://leonardobecerril.dev/',
        siteName: 'Leonardo Yael Bazán Becerril | Personal Website',
        images: '/assets/icons/android-chrome-512x512.png',
        locale: 'en_MX',
        type: 'website',
        authors: ['G0rz'],
    },
    robots: {
        index: true, follow: false, nocache: true, googleBot: {
            index: true, follow: true,
        },
    },
    twitter: {
        card: 'summary',
        title: 'Leonardo Yael Bazán Becerril | Computer Systems Engineer',
        description: 'Computer Systems Engineer | Front-End Web Developer',
        creator: '@XDeathZero',
        image: ['https://leonardobecerril.dev/assets/icons/android-chrome-512x512.png'],
    },
    verification: {
        google: 'google',
    },
    category: 'technology',
    archives: ['https://leonardobecerril.dev/assets/files/CV-LeonardoYaelBazánBecerril.pdf'],
    assets: ['https://leonardobecerril.dev/assets']
}
export default function RootLayout({children}) {
    return (<html lang="en">
    <body className={roboto.className}>
    <Providers>{children}</Providers>
    </body>
    </html>)
}