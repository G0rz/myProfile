'use client'

import {Grid} from "@nextui-org/react";
import Footer from "@/app/components/layout/footer";
import Resume from "@/app/components/resume";
import Links from "@/app/components/links";
import Skills from "@/app/components/skills";
import Experience from "@/app/components/experience";
import Education from "@/app/components/education";

export default function Home() {

    return (<main>
        <Grid.Container justify={'center'} alignItems={'center'} css={{marginTop: '1rem'}}>
            <Grid md={4} xs={12}>
                <Grid.Container gap={2}>
                    <Resume/>
                    <Links/>
                    <Skills/>
                </Grid.Container>
            </Grid>
            <Grid md={8} xs={12}>
                <Grid.Container gap={2}>
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