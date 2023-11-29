import {Card, Container, Grid, Row, Text} from "@nextui-org/react";
import Timeline from "@/app/components/timeline";
import Attachments from "@/app/components/attachments";

const schools = [{
    date: `August 2021 - Present`, job: "Organizer GDG", company: [{
        url: "https://gdg.community.dev/gdg-lerma-de-villada/",
        company_name: "Google Developers Group - Lerma de Villada",
        latest: true
    }]
}, {
    date: `May 2023`, job: "TOEFL ITP Certification - CEFR Level B1", company: [{
        url: "https://www.tolucatecnm.mx/categoria/61/coordinacion-de-lenguas-extranjeras-cle",
        company_name: "Instituto Tecnológico de Toluca - CLE",
        latest: false
    }]
}, {
    date: `July 2021 - November 2022`, job: "English language", company: [{
        url: "https://think-e.mx/", company_name: "Think-e English Courses", latest: false
    }]
}, {
    date: `August 2015 - June 2021`, job: "Computer Systems Engineering", company: [{
        url: "https://www.tolucatecnm.mx/", company_name: "Instituto Tecnológico de Toluca", latest: false
    }]
}];

export default function Education() {

    return (<>
        <Grid xs={12} md={6} style={{padding: '1rem 0 1rem 0'}}>
            <Container>
                <Card>
                    <Card.Body>
                        <Row justify="center" align="center">
                            <Grid.Container>
                                <Grid xs={12}>
                                    <Text h3 css={{
                                        marginLeft: '.75rem',
                                        fontWeight: '$semibold',
                                        fontSize: '$xl',
                                        lineHeight: '$lg'
                                    }}>Education</Text>
                                </Grid>
                                <Grid>
                                    <Timeline list={schools}/>
                                </Grid>
                            </Grid.Container>
                        </Row>
                    </Card.Body>
                </Card>
                <Attachments/>
            </Container>
        </Grid>

    </>);
}