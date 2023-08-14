'use client'

import {useServerInsertedHTML} from 'next/navigation'
import {CssBaseline} from '@nextui-org/react'
import {NextUIProvider} from '@nextui-org/react'
import {ThemeProvider as NextThemesProvider} from 'next-themes';
import {darkTheme, lightTheme} from "@/app/theme";

export default function Providers({children}) {
    useServerInsertedHTML(() => {
        return <>{CssBaseline.flush()}</>
    })

    return (
        <NextThemesProvider
            defaultTheme="system"
            attribute="class"
            value={{
                light: lightTheme.className,
                dark: darkTheme.className
            }}
        >
            <NextUIProvider>
                {children}
            </NextUIProvider>
        </NextThemesProvider>
    )
}