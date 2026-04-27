import { ArrowRight } from "lucide-react";

interface ITableRowProps {
    order: number,
    custId: string,
    date: string,
    sku: string,
    price: string
}

const TableRow = (props: ITableRowProps) => {
    const {order, custId, date, sku, price} = props;
    return (
        <tr className={`${order % 2 === 0 ? "bg-stone-200 text-sm": "text-sm"}`}>
            <td className="p-1.5">
                <a href="#" className="text-fresh-eggplant flex gap-1 items-center underline">
                    {custId}
                    <ArrowRight className="size-3.5" />
                </a>
            </td>
            <td>{date}</td>
            <td>{sku}</td>
            <td>{price}</td>
        </tr>
    )
}

export default TableRow;