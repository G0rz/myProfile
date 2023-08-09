import {Badge, Card, Container, Grid, Row, Text} from "@nextui-org/react";

export default function Skills() {

    const listSkills = ['JavaEE', 'Java', 'Next.js', 'React', 'MUI', 'Tailwind', 'Vue.js', 'Vuetify', 'Javascript', 'Laravel/Blade', 'PHP', 'Bootstrap', 'CSS', 'SQL', 'Git', 'Linux']

    return <>
        <Grid xs={12}>
            <Container>
                <Card>
                    <Card.Body>
                        <Row justify="center" align="center">
                            <Grid.Container justify={'center'} alignItems={'center'}>
                                <Grid xs={12}>
                                    <Text h2 css={{
                                        marginLeft: '.75rem',
                                        fontWeight: '$semibold',
                                        fontSize: '$xl',
                                        lineHeight: '$lg'
                                    }}>Tech Stack</Text>
                                </Grid>
                                {listSkills.map((element, key) => {
                                    return <Grid key={key}>
                                        <Badge color="success">{element}</Badge>
                                    </Grid>
                                })}
                            </Grid.Container>
                        </Row>
                    </Card.Body>
                </Card>
            </Container>
        </Grid>
    </>
}