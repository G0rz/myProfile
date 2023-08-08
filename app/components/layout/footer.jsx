import {Card, Grid, Text, Link} from "@nextui-org/react";

export default function Footer() {


    return <>
        <Grid.Container justify={'center'} alignItems={'center'} gap={1}>
            <Grid>
                <Card>
                    <Card.Body css={{padding: '.5rem'}}>
                        <Text> Hecho por <a style={{margin: 0}} href={'https://github.com/G0rz/'} rel="noopener noreferrer" target="_blank"> G0rz</a> © 2023</Text>
                    </Card.Body>
                </Card>
            </Grid>
        </Grid.Container>
    </>
}