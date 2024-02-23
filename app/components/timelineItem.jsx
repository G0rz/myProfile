import {Text, Link} from "@nextui-org/react";

export default function TimelineItem({fecha, puesto, enlace}) {

    return (<li style={{
        marginLeft: '1rem', marginBottom: '1.25rem', borderWidth: 1,
    }}>
        <div style={fecha.includes('Present') ? {
            position: 'absolute',
            left: '-4.5px',
            backgroundColor: "#17C964",
            borderColor: "#0072F5",
            borderWidth: 1,
            borderRadius: '50%',
            width: '0.5rem',
            height: '0.5rem',
            marginTop: '.375rem'
        } : {
            position: 'absolute',
            left: '-4.5px',
            backgroundColor: "rgba(229, 230, 230, 1)",
            borderColor: "#0072F5",
            borderWidth: 1,
            borderRadius: '50%',
            width: '0.5rem',
            height: '0.5rem',
            marginTop: '.375rem'
        }}>
        </div>
        <Text css={{
            fontSize: '$xs', lineHeight: '$sm', marginTop: '.125rem', marginBottom: '.125rem'
        }}>{fecha}</Text>
        <Text css={{
            fontWeight: '$semibold', fontSize: '$lg', lineHeight: '$lg'
        }}>{puesto}</Text>
        <Text css={{
            fontWeight: '$semibold', fontSize: '$base', lineHeight: '$lg', color: '$textDefault'
        }}>
            <Link rel="noopener noreferrer" target="_blank" css={{color: '$textDefault'}}
               href={enlace[0].url !== '' ? enlace[0].url : '#'}>{enlace[0].company_name}</Link>
        </Text>
    </li>);
}