import {Card, Container, Grid, Row, Text} from "@nextui-org/react";
import Timeline from "@/app/components/timeline";

const schools = [
    {
        date: `Abril 2023`, job: "Certificación TOEFL ITP - Nivel B1", company: [{
            url: "https://www.tolucatecnm.mx/categoria/61/coordinacion-de-lenguas-extranjeras-cle", company_name: "Instituto Tecnológico de Toluca - CLE", latest: true
        }]
    },{
    date: `Julio 2021 - Noviembre 2022`, job: "Idioma Inglés", company: [{
        url: "https://think-e.mx/", company_name: "Think-e English Courses", latest: true
    }]
}, {
    date: `Agosto 2015 - Diciembre 2020`, job: "Ingeniería en Sistemas Computacionales", company: [{
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
                                }}>Educación</Text>
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