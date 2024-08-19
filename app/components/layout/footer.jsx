import {Card, Grid, Text, Link} from "@nextui-org/react";

export default function Footer() {

    return (<Grid.Container justify={'center'} alignItems={'center'}>
        <Grid style={{padding: '1rem 0 1rem 0'}}>
            <Text  css={{
                margin: 0, padding: '.5rem', fontWeight: '$base', lineHeight: '$xs',
            }}> Hecho por <Link href={'https://github.com/G0rz/'}
                                rel="noopener noreferrer" css={{fontWeight:'$bold', color: '$textDefault'}}
                                target="_blank"> G0rz</Link> © {new Date().getFullYear()}</Text>
        </Grid>
    </Grid.Container>);
}