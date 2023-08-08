export default function TimelineItem({fecha, puesto, enlace}) {

    console.log('ENLACE:', enlace)

    return <>
        <li style={{
            marginLeft: '1rem',
            marginBottom: '1.25rem',
            borderWidth: 1,
        }}>
            <div style={{
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
            <div style={{
                fontSize: '.75em',
                lineHeight: '1rem',
                marginTop: '.125rem',
                marginBottom: '.125rem'
            }}>
                {fecha}
            </div>
            <h3>{puesto}</h3>
            <div style={{
                marginBottom: '.1rem'
            }}>
                <a href={enlace[0].url !== '' ? enlace[0].url : '#' }>{enlace[0].company_name}</a>
            </div>
        </li>
    </>
}