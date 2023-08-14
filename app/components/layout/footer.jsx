import {Card, Grid, Text} from "@nextui-org/react";

export default function Footer() {

    return (<Grid.Container justify={'center'} alignItems={'center'} gap={1}>
        <Grid>
            <Card>
                <Card.Body css={{padding: '.5rem'}}>
                    <Text  css={{
                        margin: 0, padding: '.5rem', fontWeight: '$base', lineHeight: '$xs',
                    }}> Hecho por <a href={'https://github.com/G0rz/'}
                                     rel="noopener noreferrer" style={{color: "#697177", fontWeight:'bold'}}
                                     target="_blank"> G0rz</a> © {new Date().getFullYear()}</Text>
                </Card.Body>
            </Card>
        </Grid>
    </Grid.Container>);
}