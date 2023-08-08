import {Badge, Button, Card, Container, Grid, Image, Loading, Row, Switch, Text} from "@nextui-org/react";
import {getData} from "@/app/utils/functions";
import {useEffect, useState} from "react";
import {TwitterIcon} from "@/public/assets/images/TwitterIcon";
import {LocationIcon} from "@/public/assets/images/LocationIcon";
import SmartLinks from "@/app/components/smartLinks";
import {GithubIcon} from "@/public/assets/images/GithubIcon"
import {LinkedinIcon} from "@/public/assets/images/LinkedinIcon";
import {WebIcon} from "@/public/assets/images/WebIcon";
import {MailIcon} from "@/public/assets/images/MailIcon";

const enlaces = [{
    icon: <GithubIcon/>, name: 'Github', username: 'G0rz', url: 'https://github.com/G0rz'
}, {
    icon: <TwitterIcon/>, name: 'Twitter', username: 'XDeathlyZero', url: 'https://twitter.com/XDeathZero'
}, {
    icon: <LinkedinIcon/>, name: 'LinkedIn', username: 'Leonardo Yael Bazán Becerril', url: 'https://www.linkedin.com/in/typenull/'
}, {
    icon: <WebIcon/>, name: 'Website', username: 'leonardobecerril.netlify.com', url: 'https://twitter.com/XDeathZero'
}, {
    icon: <MailIcon/>, name: 'Email', username: 'leonardo.becerril@hotmail.com', url: 'mailto:leonardo.becerril@hotmail.com'
}]

export default function Links() {

    const [gitProfile, setGitProfile] = useState(null)
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        getData(setGitProfile)
    }, [])


    return <>
        <Grid xs={12}>
            <Container>
                <Card>
                    <Card.Body>
                        <Row justify="center" align="center" style={{padding: '.5rem', opacity: '.6'}}>
                            <Text size="$sm" weight={'medium'}><LocationIcon/> Based in: </Text>
                            <Text css={{marginLeft: 'auto'}} size="$sm" weight={'medium'}>Toluca, Estado de
                                México</Text>
                        </Row>
                        {enlaces.map((item, key) => {
                            return <SmartLinks key={key} icon={item.icon} name={item.name}
                                               username={item.username}
                                               url={item.url}/>
                        })}
                    </Card.Body>
                </Card>
            </Container>
        </Grid>
    </>
}