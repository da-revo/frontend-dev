"use client"
import { useCallback, useEffect, useState } from "react";

const TRANSACTIONS = [
  {
    id: 1,
    type: 'Accounts_Payable',
    user_id: 4324325324123,
    amount: '4241.00',
    time_stamp: '2021-09-01T00:00:00.000Z',
    source: 'PAYROC',
  },
  {
    id: 2,
    type: 'Accounts_Payable',
    user_id: 5342542332,
    amount: '5241.00',
    time_stamp: '2022-09-01T00:00:00.000Z',
    source: 'ZUM',
  },
];

/*
user id is a link to a user/ID
amount is prettified 
time_stamp is pretified
source is STANDARDIED as a flair
*/


export default function Home() {

  return (
    <section className=" ">
      <table className="border-collapse border border-slate-400 ">
        <thead>
          <tr>
            <th className="border border-slate-300 ">id</th>
            <th className="border border-slate-300 ">type</th>
            <th className="border border-slate-300 ">user_id</th>
            <th className="border border-slate-300 ">amount</th>
            <th className="border border-slate-300 ">time_stamp</th>
            <th className="border border-slate-300 ">source</th>
          </tr>
        </thead>

        <tbody>
          {
            TRANSACTIONS.map((entry, index) =>
              <TransactionInfo key={index} transaction={entry} />
            )
          }
        </tbody>
      </table>
    </section>
  );
}

function TransactionInfo({ transaction }: { transaction: any }) {

  return (
    <tr>
      <td className="border border-slate-300 "> {transaction.id} </td>
      <td className="border border-slate-300 ">  {removeUnderscores(transaction.type)} </td>
      <td className="border border-slate-300 ">
        <a href={`/${transaction.user_id}`} >
          {transaction.user_id}
        </a>
      </td>
      <td className="border border-slate-300 ">  {transaction.amount} </td>
      <td className="border border-slate-300 ">  {transaction.time_stamp} </td>
      <td className="border border-slate-300 ">  {transaction.source} </td>
    </tr >
  );
}


function prettyAmount(x: string) {
  //  commas after ever

}


function removeUnderscores(x: string) {
  //  commas after ever

  let splitArr = x.split("_")

  return splitArr.join(" ")
}