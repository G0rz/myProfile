import {Text, Row} from "@nextui-org/react";

export default function SmartLinks({icon, name, username, url}) {

    return ( <Row justify="center" align="center"
                  onClick={() => window.open(url, '_blank')}
                  style={{padding: '.5rem', cursor: 'pointer'}}>
        <Text size="$sm" weight={'medium'}>{icon} {name}: </Text>
        <Text size="$sm" weight={'medium'} css={{marginLeft: 'auto'}}>
            {username}
        </Text>
    </Row>);
}