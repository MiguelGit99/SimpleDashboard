import { DollarSign } from "lucide-react";
import TableRow from "./TableRow";

const TransactionList = () => {

    return (
        <div className="col-span-1 lg:col-span-12 border border-stone-300 rounded p-4 overflow-x-auto">
            <div className="flex justify-between">
                <div className="flex gap-1.5 items-center mb-4">
                    <DollarSign className="size-3.5" />
                    <h3 className="flex items-center gap-1.5 font-medium">Recent Transactions</h3>
                </div>
                <button className="text-sm text-fresh-eggplant hover:underline cursor-pointer">
                    See all
                </button>
            </div>
            <table className="w-full">
                <thead>
                    <tr className="text-sm text-stone-500">
                        <th className="text-start p-1.5">CustomerID</th>
                        <th className="text-start p-1.5">SKU</th>
                        <th className="text-start p-1.5">Date</th>
                        <th className="text-start p-1.5">Price</th>
                    </tr>
                </thead>
                <tbody>
                    <TableRow
                        order={1}
                        custId="5412"
                        date="Sep 2nd"
                        sku="1 Month"
                        price="$12.45"
                    />
                    <TableRow
                        order={2}
                        custId="5478"
                        date="Ago 3nd"
                        sku="2 Month"
                        price="$20.45"
                    />
                    <TableRow
                        order={3}
                        custId="8754"
                        date="Jan 2nd"
                        sku="3 Month"
                        price="$84.45"
                    />
                    <TableRow
                        order={4}
                        custId="3215"
                        date="Mar 18th"
                        sku="4 Month"
                        price="$47.45"
                    />
                    <TableRow
                        order={5}
                        custId="5412"
                        date="Sep 2nd"
                        sku="5 Month"
                        price="$36.45"
                    />
                </tbody>
            </table>
        </div>
    )
}

export default TransactionList;