'use client'

import {Grid} from "@nextui-org/react";
import Footer from "@/app/components/layout/footer";
import Resume from "@/app/components/resume";
import Links from "@/app/components/links";
import Skills from "@/app/components/skills";
import Experience from "@/app/components/experience";
import Education from "@/app/components/education";
import initFirebase from "@/app/initFirebase";
import {useEffect} from "react";

export default function Home() {

    initFirebase()

    useEffect(() => {
        if ('serviceWorker' in navigator) {
            navigator.serviceWorker
                .register('/serviceworker.js')
                .then((registration) => console.log('scope is: ', registration.scope));
        }
    }, []);

    return (<main>
        <Grid.Container justify={'center'} alignItems={'center'}>
            <Grid md={4} xs={12}>
                <Grid.Container>
                    <Resume/>
                    <Links/>
                    <Skills/>
                </Grid.Container>
            </Grid>
            <Grid md={8} xs={12}>
                <Grid.Container>
                    <Experience/>
                    <Education/>
                </Grid.Container>
            </Grid>
            <Grid xs={12} md={12}>
                <Footer/>
            </Grid>
        </Grid.Container>
    </main>)
}