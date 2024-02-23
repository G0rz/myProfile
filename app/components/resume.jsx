import {Button, Card, Grid, Loading, Switch, useTheme, Text, Row, Container} from "@nextui-org/react";
import {DownloadIcon} from "@/public/assets/images/DownloadIcon";
import {SunIcon} from "@/public/assets/images/SunIcon";
import {MoonIcon} from "@/public/assets/images/MoonIcon";
import {useTheme as useNextTheme} from "next-themes";
import {useEffect, useState} from "react";
import {getData} from "@/app/utils/functions";
import Image from 'next/image';
import profilePic from '@/public/assets/images/profile.webp'

export default function Resume() {

    const {setTheme} = useNextTheme();
    const {isDark} = useTheme();
    const [gitProfile, setGitProfile] = useState({avatar_url: '', name: '', bio: ''});
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        getData(setGitProfile).then(r => void r);
    }, []);

    const getCVUrl = () => {
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

    return (<Grid xs={12} style={{padding: '1rem 0 1rem 0'}}>
        <Container>
            <Card>
                <Card.Header>
                    <Row justify="center" align="center" css={{paddingTop: '1.5rem'}}>
                        <Switch
                            id={"icon"}
                            aria-labelledby={"icon"}
                            aria-label={"icon"}
                            title={"icon"}
                            style={{position: 'absolute', top: 0, right: 0}}
                            checked={isDark}
                            iconOff={<SunIcon aria-labelledby={"icon"}
                                              aria-label={"icon"} filled/>}
                            iconOn={<MoonIcon aria-labelledby={"icon"}
                                              aria-label={"icon"} filled/>}
                            onChange={(e) => setTheme(e.target.checked ? 'dark' : 'light')}
                        />
                        <Image
                            style={{
                                borderRadius: '50%', objectFit: 'cover'
                            }}
                            src={gitProfile.avatar_url ? gitProfile.avatar_url : profilePic}
                            alt="Profile Image"
                            unoptimized
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
                            <Text weight={'medium'} span css={{marginBottom: '.75rem'}}>
                                {gitProfile.bio !== '' ? gitProfile.bio : 'Computer Systems Engineering Intern'}
                            </Text>
                        </Row>
                        <Row justify="center" align="center">
                            <Button
                                icon={loading ? '' : <DownloadIcon label={'download'} isDark={isDark}/>}
                                onPress={downloadCV}
                                enabled={'false'}
                                color="success"
                                disabled={loading}
                                auto
                            >
                                {loading ? <Loading type="points" color="currentColor"/> : 'Download Resume'}
                            </Button>
                        </Row>
                    </>) : (<Loading type="points" color="success"/>)}
                </Card.Body>
            </Card>
        </Container>
    </Grid>);
}