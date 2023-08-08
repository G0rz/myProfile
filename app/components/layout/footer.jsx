import {Button, Card, Grid, Image, Loading, Switch, Text} from "@nextui-org/react";
import {DownloadIcon} from "@/public/assets/images/DownloadIcon";
import {SunIcon} from "@/public/assets/images/SunIcon";
import {MoonIcon} from "@/public/assets/images/MoonIcon";

export default function Footer() {
    return <>
        <Grid.Container  justify={'center'} alignItems={'center'}>
            <Grid>
                <Card>
                    <Card.Body css={{padding: '.5rem'}}>
                        <Text h6 css={{margin: 0}}>Hecho por G0rz © 2023</Text>
                    </Card.Body>
                </Card>
            </Grid>
        </Grid.Container>
    </>
}