import {Card, Container, Grid, Row, Text} from "@nextui-org/react";
import {LocationIcon} from "@/public/assets/images/LocationIcon";
import SmartLinks from "@/app/components/smartLinks";
import {GithubIcon} from "@/public/assets/images/GithubIcon"
import {LinkedinIcon} from "@/public/assets/images/LinkedinIcon";
import {MailIcon} from "@/public/assets/images/MailIcon";

const enlaces = [{
    icon: <GithubIcon/>, name: 'Github', username: 'G0rz', url: 'https://github.com/G0rz'
}, {
    icon: <LinkedinIcon/>,
    name: 'LinkedIn',
    username: 'Leonardo Yael Bazán Becerril',
    url: 'https://www.linkedin.com/in/typenull/'
}, //     {
//     icon: <IndeedIcon/>,
//     name: 'Indeed',
//     username: 'Leonardo Yael Bazán Becerril',
//     url: 'https://www.linkedin.com/in/typenull/'
// },
    {
        icon: <MailIcon/>,
        name: 'Email',
        username: 'leonardo.becerril@hotmail.com',
        url: 'mailto:leonardo.becerril@hotmail.com'
    }]

export default function Links() {

    return (<Grid role={'links'} xs={12} style={{padding: '1rem 0 1rem 0'}}>
        <Container>
            <Card>
                <Card.Body>
                    <Row justify="center" align="center" style={{padding: '.5rem'}}>
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
    </Grid>);
}