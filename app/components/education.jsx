import {Card, Container, Grid, Row, Text} from "@nextui-org/react";
import Timeline from "@/app/components/timeline";
import Attachments from "@/app/components/attachments";

const schools = [{
    date: `August 2021 - January 2024`, job: "Organizer for GDG Lerma", company: [{
        url: "https://gdg.community.dev/", company_name: "Google Developer Groups - Lerma de Villada", latest: true
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

const attachments = [{
    date: ``, job: "", company: [{
        url: '/assets/files/CertificationB1.pdf', company_name: "TOEFL ITP Certification - CEFR Level B1", latest: false
    }]
}];

export default function Education() {

    return (<Grid xs={12} md={6} role={'education'} style={{padding: '1rem 0 1rem 0'}}>
        <Container>
            <Card>
                <Card.Body>
                    <Row justify="center" align="center">
                        <Grid.Container>
                            <Grid xs={12}>
                                <Text h3 css={{
                                    marginLeft: '.75rem', fontWeight: '$semibold', fontSize: '$xl', lineHeight: '$lg'
                                }}>Education</Text>
                            </Grid>
                            <Grid>
                                <Timeline list={schools}/>
                            </Grid>
                            <Grid xs={12}>
                                <Text h3 css={{
                                    marginLeft: '.75rem', fontWeight: '$semibold', fontSize: '$xl', lineHeight: '$lg'
                                }}>Attachments</Text>
                            </Grid>
                            <Grid>
                                <Timeline list={attachments}/>
                            </Grid>
                        </Grid.Container>
                    </Row>
                </Card.Body>
            </Card>
        </Container>
    </Grid>);
}