import TimelineItem from "@/app/components/timelineItem";
import SmartLinks from "@/app/components/smartLinks";

export default function Timeline({list}) {

    return <>
        <ol style={{
            position: 'relative',
            borderLeft: '1px solid rgba(229, 230, 230, .3)',
            marginTop: '0.5rem',
            marginBottom: '0.5rem',
            marginLeft: '1rem',
            marginRight: '1rem',
            listStyle: 'none',
            padding: 0
        }}>
            {list.map((item, key) => {
                return <TimelineItem key={key} fecha={item.date} puesto={item.job} enlace={item.company} latest={item.latest}/>
            })}
        </ol>
    </>
}