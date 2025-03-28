import Providers from './providers'
import {Roboto} from "next/font/google";

const roboto = Roboto({subsets: ['latin'], weight: ["400", "500", "700", "900"]})

export const metadata = {
    metadataBase: new URL('https://leonardobecerril.dev/'),
    alternates: {
        canonical: '/',
    },
    generator: "Next.js",
    name: "Leonardo Yael Bazán Becerril | Computer Systems Engineer",
    description: "Soy Leonardo Becerril, Ingeniero en Sistemas Computacionales especializado en el desarrollo front-end, con más de 4 años de experiencia en la creación de interfaces de usuario intuitivas y eficientes. Mi experiencia abarca desde el diseño y desarrollo de aplicaciones web hasta su implementación, mantenimiento y mejora continua.",
    applicationName: 'Leonardo Yael Bazán Becerril | Personal Website',
    referrer: 'origin-when-cross-origin',
    apple: '/assets/icons/apple-touch-icon.png',
    keywords: [
        "Leonardo Becerril",
        "Ingeniero en Sistemas Computacionales",
        "Desarrollador Front-End",
        "Desarrollo de Interfaces de Usuario",
        "Consultor en Desarrollo Front-End",
        "Diseño de Aplicaciones Web",
        "Desarrollo Web",
        "Desarrollo de Software Front-End",
        "Experiencia en Front-End",
        "Aplicaciones Web Intuitivas",
        "Mantenimiento y Mejora Continua de Aplicaciones",
        "Implementación de Aplicaciones Web",
        "Consultor de Diseño de UI/UX",
        "Consultor de Tecnologías Front-End",
        "Interfaces de Usuario Eficientes",
        "Desarrollo de Páginas Web Responsivas",
        "Desarrollo Web Profesional",
        "Programación Front-End",
        "Consultoría en Desarrollo Web",
        "Desarrollador Web Full Stack",
        "Optimización de Interfaces Web",
        "Desarrollo de React, Nextjs, Vue",
        "Soluciones de Desarrollo Front-End",
        "UI Developer",
        "Mejora Continua de Aplicaciones Front-End"
    ],
    authors: [{name: 'G0rz', url: 'https://github.com/G0rz/'}],
    creator: "Leonardo Becerril",
    publisher: "Leonardo Becerril",
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