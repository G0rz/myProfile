import {Card, Container, Grid, Row, Text} from "@nextui-org/react";
import Timeline from "@/app/components/timeline";

export default function Education() {
    const schools = [{
        date: "AGO 2015 - DIC 2020", job: "JAVA Web Developer", company: [{
            url: "", company_name: "Dirección General de Innovación e Implementación",
        }]
    }, {
        date: "MAR 2022 - FEB 2023", job: "Frontend React Web Developer", company: [{
            url: "", company_name: "DADUVA SYSTEMS",
        }]
    }, {
        date: "MAR 2021 - MAR 2022", job: "Prácticas profesionales/Desarrollador Web Jr. Full-Stack", company: [{
            url: "", company_name: "Satori Tech",
        }]
    }, {
        date: "MAR 2019 - JUL 2019", job: "Desarrollador de Sistemas de Planificación Empresarial", company: [{
            url: "", company_name: "EDEM Consultores",
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
                                    <Text h3>Educación</Text>
                                </Grid>
                                <Grid>
                                    <Timeline list={schools}/>
                                </Grid>
                            </Grid.Container>
                        </Row>
                    </Card.Body>
                </Card>
            </Container>
        </Grid>
    </>
}