import {createTheme} from "@nextui-org/react";

export const darkTheme = createTheme({
    type: "dark", // it could be "light" or "dark"
    theme: {
        colors: {
            background: '#15191E',
            backgroundContrast: "#1D232A",
        },
        fontSizes: {
            xs: '0.75rem', /* 12px */
            sm: '0.875rem', /* 14px */
            base: '1rem', /* 16px */
            md: '1rem', /* 16px */
            lg: '1.125rem', /* 18px */
            xl: '1.25rem', /* 20px */
            '2xl': '1.5rem', /* 24px */
            '3xl': '1.875rem', /* 30px */
            '4xl': '2.25rem', /* 36px */
            '5xl': '3rem', /* 48px */
            '6xl': '3.75rem', /* 60px */
            '7xl': '4.5rem', /* 72px */
            '8xl': '6rem', /* 96px */
            '9xl': '8rem', /* 128px */
        },
        fontWeights: {
            hairline: 100,
            thin: 200,
            light: 300,
            normal: 400,
            medium: 500,
            semibold: 600,
            bold: 700,
            extrabold: 800,
            black: 900
        },
        lineHeights: {
            xs: 1, /* 16px */
            sm: 1.25, /* 20px */
            base: 1.5, /* 24px */
            md: 1.5, /* 24px */
            lg: 1.75, /* 28px */
            xl: 1.75, /* 28px */
            '2xl': 2, /* 32px */
            '3xl': 2.25, /* 36px */
            '4xl': 2.5, /* 40px */
            '5xl': 1, /* 16px */
            '6xl': 1, /* 16px */
            '7xl': 1, /* 16px */
            '8xl': 1, /* 16px */
            '9xl': 1 /* 16px */
        },
        letterSpacings: {
            tighter: '-0.05em',
            tight: '-0.025em',
            normal: '0',
            wide: '0.025em',
            wider: '0.05em',
            widest: '0.1em'
        },
        radii: {
            xs: '7px',
            sm: '9px',
            md: '12px',
            base: '14px',
            lg: '14px', // preferred value by NextUI components
            xl: '18px',
            '2xl': '24px',
            '3xl': '32px',
            squared: '33%',
            rounded: '50%',
            pill: '9999px',
        },
        spacing: {
            0: '0rem',
            xs: '0.5rem',
            sm: '0.75rem',
            md: '1rem',
            lg: '1.375rem',
            xl: '2.25rem',
            '2xl': '3rem',
            '3xl': '5rem',
            '4xl': '10rem',
            '5xl': '14rem',
            '6xl': '18rem',
            '7xl': '24rem',
            '8xl': '32rem',
            '9xl': '40rem',
            min: 'min-content',
            max: 'max-content',
            fit: 'fit-content',
            screen: '100vw',
            full: '100%',
            px: '1px',
        },
        breakpoints: {
            xs: '650px',
            sm: '960px',
            md: '1280px',
            lg: '1400px',
            xl: '1920px'
        },
    }
})

export const lightTheme = createTheme({
    type: 'light',
    theme: {
        colors: {
            background: "#E5E6E6",
            backgroundContrast: "#FFFFFF",
        },
        fontSizes: {
            xs: '0.75rem', /* 12px */
            sm: '0.875rem', /* 14px */
            base: '1rem', /* 16px */
            md: '1rem', /* 16px */
            lg: '1.125rem', /* 18px */
            xl: '1.25rem', /* 20px */
            '2xl': '1.5rem', /* 24px */
            '3xl': '1.875rem', /* 30px */
            '4xl': '2.25rem', /* 36px */
            '5xl': '3rem', /* 48px */
            '6xl': '3.75rem', /* 60px */
            '7xl': '4.5rem', /* 72px */
            '8xl': '6rem', /* 96px */
            '9xl': '8rem', /* 128px */
        },
        fontWeights: {
            hairline: 100,
            thin: 200,
            light: 300,
            normal: 400,
            medium: 500,
            semibold: 600,
            bold: 700,
            extrabold: 800,
            black: 900
        },
        lineHeights: {
            xs: 1, /* 16px */
            sm: 1.25, /* 20px */
            base: 1.5, /* 24px */
            md: 1.5, /* 24px */
            lg: 1.75, /* 28px */
            xl: 1.75, /* 28px */
            '2xl': 2, /* 32px */
            '3xl': 2.25, /* 36px */
            '4xl': 2.5, /* 40px */
            '5xl': 1, /* 16px */
            '6xl': 1, /* 16px */
            '7xl': 1, /* 16px */
            '8xl': 1, /* 16px */
            '9xl': 1 /* 16px */
        },
        letterSpacings: {
            tighter: '-0.05em',
            tight: '-0.025em',
            normal: '0',
            wide: '0.025em',
            wider: '0.05em',
            widest: '0.1em'
        },
        radii: {
            xs: '7px',
            sm: '9px',
            md: '12px',
            base: '14px',
            lg: '14px', // preferred value by NextUI components
            xl: '18px',
            '2xl': '24px',
            '3xl': '32px',
            squared: '33%',
            rounded: '50%',
            pill: '9999px',
        },
        spacing: {
            0: '0rem',
            xs: '0.5rem',
            sm: '0.75rem',
            md: '1rem',
            lg: '1.375rem',
            xl: '2.25rem',
            '2xl': '3rem',
            '3xl': '5rem',
            '4xl': '10rem',
            '5xl': '14rem',
            '6xl': '18rem',
            '7xl': '24rem',
            '8xl': '32rem',
            '9xl': '40rem',
            min: 'min-content',
            max: 'max-content',
            fit: 'fit-content',
            screen: '100vw',
            full: '100%',
            px: '1px',
        },
        breakpoints: {
            xs: '650px',
            sm: '960px',
            md: '1280px',
            lg: '1400px',
            xl: '1920px'
        },
    }
})