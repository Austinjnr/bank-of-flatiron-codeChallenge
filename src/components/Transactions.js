import React, { useEffect, useState } from "react"
import TransactionItem from "./TransactionItem"

function Transactions() {
    const [transactions, setTransactions] = useState([])
    useEffect(() => {
        fetch("https://api-test-7h6w.onrender.com/transactions")
            .then(r => r.json())
            .then(transc => setTransactions(transc))
            .catch(err => console.log(err))
    }, [])
    return (
        <div>
             <table>
                <tr>
                    <th>DATE</th>
                    <th>CATEGORY</th>
                    <th>DESCRIPTION</th>
                    <th>AMOUNT</th>
                </tr>
                {transactions.map((transaction,index)=>{
                    return <TransactionItem 
                    index={index}
                    date={transaction.date}
                    category={transaction.category}
                    description={transaction.description}
                    amount={transaction.amount}
                    key={transaction.id}
                    />
                })}
            </table>
        </div>
           
    )
}
export default Transactions;