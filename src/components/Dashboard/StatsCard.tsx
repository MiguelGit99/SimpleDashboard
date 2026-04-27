import Card from "./Card";

const StatsCard = () => {

    return (
        <>
            <Card 
                title = "Gross Revenue"
                revenue = {14118.12}
                percentage = {5.5}
                date = "2026/04/30"/>
            <Card 
                title = "Avg Order"
                revenue = {512.29}
                percentage = {15.5}
                date = "2026/04/30"/>
            <Card 
                title = "Trailing Year"
                revenue = {243692.55}
                percentage = {50.5}
                date = "2026/04/30"/>
        </>
    )
}

export default StatsCard;