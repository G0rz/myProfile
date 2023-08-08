import {Card, Container, Grid, Row, Text} from "@nextui-org/react";
import Timeline from "@/app/components/timeline";

export default function Experience() {
    const jobs = [{
        date: "FEB 2023 - TODAY", job: "JAVA Web Developer", company: [{
            url: "", company_name: "Dirección General de Innovación e Implementación", latest: true
        }]
    }, {
        date: "MAR 2022 - FEB 2023", job: "Frontend React Web Developer", company: [{
            url: "", company_name: "DADUVA SYSTEMS", latest: false
        }]
    }, {
        date: "MAR 2021 - MAR 2022", job: "Prácticas profesionales/Desarrollador Web Jr. Full-Stack", company: [{
            url: "", company_name: "Satori Tech", latest: false
        }]
    }, {
        date: "MAR 2019 - JUL 2019", job: "Desarrollador de Sistemas de Planificación Empresarial", company: [{
            url: "", company_name: "EDEM Consultores", latest: false
        }]
    },];
    return <>
        <Grid xs={12}>
            <Container>
                <Card>
                    <Card.Body>
                        <Row justify="center" align="center">
                            <Grid.Container>
                                <Grid xs={12}>
                                    <Text h3>Experiencia</Text>
                                </Grid>
                                <Grid>
                                    <Timeline list={jobs}/>
                                </Grid>
                            </Grid.Container>
                        </Row>
                    </Card.Body>
                </Card>
            </Container>
        </Grid>
    </>
}