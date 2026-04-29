import { TrendingUp } from "lucide-react";

interface ICardProps {
    title: string,
    revenue: number,
    percentage: number,
    date: string
}

const Card = (props: ICardProps) => {
    const { title, revenue, percentage, date } = props;

    return (
        <div className="col-span-1 sm:col-span-1 lg:col-span-4 flex flex-col border p-4 border-swiss-coffee rounded">
            <div className="flex mb-8 justify-between">
                <div className="flex flex-col gap-2">
                    <h3 className="text-tapa">{title}</h3>
                    <p className="text-3xl font-semibold">{
                        revenue.toLocaleString("es-MX", {
                            style: "currency", currency:"MXN"
                        })
                        }</p>
                </div>
                <div className="flex items-center text-xs gap-1 font-medium px-2 py-1 
                                rounded bg-green-100 text-green-700 self-start">
                    <TrendingUp className="size-3" />
                  {percentage}  
                </div>
            </div>
            <p className="text-sm text-tapa">{date}</p>

        </div>
    )
}

export default Card;