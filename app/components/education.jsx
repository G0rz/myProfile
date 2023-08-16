import {Card, Container, Grid, Row, Text} from "@nextui-org/react";
import Timeline from "@/app/components/timeline";

const schools = [
    {
        date: `April 2023`, job: "TOEFL ITP Certification - Level B1", company: [{
            url: "https://www.tolucatecnm.mx/categoria/61/coordinacion-de-lenguas-extranjeras-cle", company_name: "Instituto Tecnológico de Toluca - CLE", latest: true
        }]
    },{
    date: `July 2021 - November 2022`, job: "English language", company: [{
        url: "https://think-e.mx/", company_name: "Think-e English Courses", latest: true
    }]
}, {
    date: `August 2015 - December 2020`, job: "Computer Systems Engineering", company: [{
        url: "https://www.tolucatecnm.mx/", company_name: "Instituto Tecnológico de Toluca", latest: false
    }]
}];

export default function Education() {

    return (<Grid xs={12} md={6}>
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
        </Container>
    </Grid>);
}