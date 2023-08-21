import {Card, Container, Grid, Row, Text} from "@nextui-org/react";
import Timeline from "@/app/components/timeline";

const month = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

const jobs = [{
    date: `${month[1]} 2023 - Present`, job: "Java Web Developer", company: [{
        url: "https://dgi.edomex.gob.mx/",
        company_name: "Dirección General de Innovación e Implementación",
        latest: true
    }]
}, {
    date: `${month[2]} 2022 - ${month[1]} 2023`, job: "Frontend React Web Developer", company: [{
        url: "https://daduva.mx/", company_name: "DADUVA SYSTEMS", latest: false
    }]
}, {
    date: `${month[2]} 2021 - ${month[2]} 2022`,
    job: "Internship / Full Stack Web Developer Jr.",
    company: [{
        url: "https://satoritech.com.mx/", company_name: "Satori Tech", latest: false
    }]
}, {
    date: `${month[0]} 2019 - ${month[6]} 2019`,
    job: "Trainee for Business Planning Systems Developer",
    company: [{
        url: "https://www.edemconsultores.com.mx/", company_name: "EDEM Consultores", latest: false
    }]
}, {
    date: '', job: "Technical Support Engineer", company: [{
        url: "https://leonardobecerril.netlify.app/", company_name: "Autodidact", latest: false
    }]
}];

export default function Experience() {

    return (<Grid xs={12} md={6} style={{padding: '1rem 0 1rem 0'}}>
        <Container>
            <Card>
                <Card.Body>
                    <Row justify="center" align="center">
                        <Grid.Container>
                            <Grid xs={12}>
                                <Text h3 css={{
                                    marginLeft: '.75rem', fontWeight: '$semibold', fontSize: '$xl', lineHeight: '$lg'
                                }}>Experience</Text>
                            </Grid>
                            <Grid>
                                <Timeline list={jobs}/>
                            </Grid>
                        </Grid.Container>
                    </Row>
                </Card.Body>
            </Card>
        </Container>
    </Grid>);
}