import {Card, Container, Grid, Row, Text} from "@nextui-org/react";
import Timeline from "@/app/components/timeline";

const month = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"];

const jobs = [{
    date: `${month[1]} 2023 - Presente`, job: "JAVA Web Developer", company: [{
        url: "https://dgi.edomex.gob.mx/", company_name: "Dirección General de Innovación e Implementación", latest: true
    }]
}, {
    date: `${month[2]} 2022 - ${month[1]} 2023`, job: "Frontend React Web Developer", company: [{
        url: "https://daduva.mx/", company_name: "DADUVA SYSTEMS", latest: false
    }]
}, {
    date: `${month[2]} 2021 - ${month[2]} 2022`,
    job: "Prácticas profesionales/Desarrollador Web Jr. Full-Stack",
    company: [{
        url: "https://satoritech.com.mx/", company_name: "Satori Tech", latest: false
    }]
}, {
    date: `${month[2]} 2019 - ${month[6]} 2019`,
    job: "Desarrollador de Sistemas de Planificación Empresarial",
    company: [{
        url: "https://www.edemconsultores.com.mx/", company_name: "EDEM Consultores", latest: false
    }]
}, {
    date: '', job: "Soporte Técnico", company: [{
        url: "https://leonardobecerril.netlify.app/", company_name: "Autodidacta", latest: false
    }]
}];

export default function Experience() {

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
                                }}>Experiencia</Text>
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