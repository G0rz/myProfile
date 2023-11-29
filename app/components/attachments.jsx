import {Badge, Card, Container, Grid, Row, Text} from "@nextui-org/react";
import Timeline from "@/app/components/timeline";

const attachments = [{
    date: ``, job: "", company: [{
        url: '/assets/files/CertificationB1.pdf', company_name: "TOEFL ITP Certification - CEFR Level B1", latest: false
    }]
}];
export default function Attachments() {

    return (<Grid xs={12} style={{padding: '1rem 0 1rem 0'}}>
        <Container>
            <Card>
                <Card.Body>
                    <Row justify="center" align="center">
                        <Grid.Container>
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