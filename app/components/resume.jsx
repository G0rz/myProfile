import {Button, Card, Grid, Loading, Switch, useTheme, Text, Row, Container} from "@nextui-org/react";
import {DownloadIcon} from "@/public/assets/images/DownloadIcon";
import {SunIcon} from "@/public/assets/images/SunIcon";
import {MoonIcon} from "@/public/assets/images/MoonIcon";
import {useTheme as useNextTheme} from "next-themes";
import {useEffect, useState} from "react";
import {getData} from "@/app/utils/functions";
import Image from 'next/image';

export default function Resume() {

    const {setTheme} = useNextTheme();
    const {isDark} = useTheme();
    const [gitProfile, setGitProfile] = useState({avatar_url: '', name: '', bio: ''});
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        getData(setGitProfile).then(r => void r);
    }, []);

    const getCVUrl = () => {
        // Implement your logic to get the CV URL dynamically
        return '/assets/files/CV-LeonardoYaelBazánBecerril.pdf';
    };

    const downloadCV = () => {
        setLoading(true);
        const timer = setTimeout(() => {
            setLoading(false);
        }, 3000);
        const link = document.createElement('a');
        link.download = '';
        link.href = getCVUrl();
        link.click();
        return timer;
    };

    return (<Grid xs={12}>
        <Container>
            <Card>
                <Card.Header>
                    <Row justify="center" align="center" css={{paddingTop: '1.5rem'}}>
                        <Switch
                            aria-label={'switch'}
                            style={{position: 'absolute', top: 0, right: 0}}
                            checked={isDark}
                            iconOff={<SunIcon aria-label={'sun'} filled/>}
                            iconOn={<MoonIcon aria-label={'moon'} filled/>}
                            onChange={(e) => setTheme(e.target.checked ? 'dark' : 'light')}
                        />
                        <Image
                            style={{
                                borderRadius: '50%', border: '4px solid #17C964',
                            }}
                            src={gitProfile.avatar_url !== '' ? gitProfile.avatar_url : '/assets/images/profile.webp'}
                            alt="Profile Image"
                            width={150}
                            height={150}
                        />
                    </Row>
                </Card.Header>
                <Card.Body css={{textAlign: 'center'}}>
                    {gitProfile.name ? (<>
                        <Row justify="center" align="center">
                            <Text h1 css={{
                                fontWeight: '$semibold', fontSize: '$2xl', lineHeight: '$lg'
                            }}>{gitProfile.name !== '' ? gitProfile.name : 'Leonardo Yael Bazán Becerril'}</Text>
                        </Row>
                        <Row justify="center" align="center">
                            <Text weight={'medium'} span css={{opacity: '.7', marginBottom: '.75rem'}}>
                                {gitProfile.bio !== '' ? gitProfile.bio : 'Pasante de Ingeniería en Sistemas Computacionales'}
                            </Text>
                        </Row>
                        <Row justify="center" align="center">
                            <Button
                                icon={loading ? '' : <DownloadIcon label={'download'} isDark={isDark}/>}
                                bordered
                                onPress={downloadCV}
                                enabled={'false'}
                                color="success"
                                disabled={loading}
                                auto
                            >
                                {loading ? <Loading type="points" color="currentColor"/> : 'Descargar Resumen'}
                            </Button>
                        </Row>
                    </>) : (<Loading type="points" color="primary"/>)}
                </Card.Body>
            </Card>
        </Container>
    </Grid>);
}