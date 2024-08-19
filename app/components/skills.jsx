import {Badge, Card, Container, Grid, Row, Text} from "@nextui-org/react";

export default function Skills() {

    const listSkills = ['Java', 'Next.js', 'React', 'MUI', 'Tailwind', 'Vue.js', 'Vuetify', 'Git', 'Javascript', 'Laravel/Blade', 'PHP', 'Bootstrap', 'CSS', 'HTML', 'SQL', 'UNIX/Linux']

    return (<Grid xs={12} style={{padding: '1rem 0 1rem 0'}}>
        <Container>
            <Card>
                <Card.Body>
                    <Row justify="center" align="center">
                        <Grid.Container justify={'center'} alignItems={'center'}>
                            <Grid xs={12}>
                                <Text h2 css={{
                                    marginLeft: '.75rem', fontWeight: '$semibold', fontSize: '$xl', lineHeight: '$lg'
                                }}>Tech Stack</Text>
                            </Grid>
                            {listSkills.map((element, key) => {
                                return <Grid key={key}>
                                    <p  style={{margin: '.2rem', backgroundColor: '#094925', borderRadius:'24px', padding:'0 8px', color:'white', fontWeight:'bold', fontSize:'14px'}}>{element}</p>
                                </Grid>
                            })}
                        </Grid.Container>
                    </Row>
                </Card.Body>
            </Card>
        </Container>
    </Grid>);
}