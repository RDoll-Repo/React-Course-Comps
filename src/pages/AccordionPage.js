import Accordion from "../components/Accordion";

function AccordianPage() {
    const items = [
        {
            id: 'l2kjw',
            label: 'Can I use React on a project?',
            content: 'You can use React on any project'
        },
        {
            id: '423gt',
            label: 'Can I use JavaScript on a project?',
            content: 'Sure. Everyone puts it anywhere anyway'
        },
        {
            id: 'spr4e',
            label: 'Can I use CSS on a project?',
            content: 'Dont we use MUI?'
        }
    ]
    
    return <Accordion items={items}/>;
}

export default AccordianPage;