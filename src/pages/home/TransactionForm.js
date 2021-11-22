import { useState, useEffect } from "react";
import { useFirestore } from "../../hooks/useFirestore";

export default function TransactionForm({ uid }) {
  const [trnName, settrnName] = useState("");
  const [amount, setAmount] = useState("");
  const { addDocument, response } = useFirestore("transactions");

  const addTransaction = (e) => {
    e.preventDefault();
    const doc = {
      uid: uid,
      name: trnName,
      amount: amount,
    };
    addDocument(doc);
  };

  // reset the form fields
  useEffect(() => {
    if (response.success) {
      settrnName("");
      setAmount("");
    }
  }, [response.success]);
  return (
    <>
      <h3>Add a Transaction</h3>
      <form onSubmit={addTransaction}>
        <label>
          <span>Transaction Name : </span>
          <input
            type="text"
            required
            onChange={(e) => settrnName(e.target.value)}
            value={trnName}
          />
        </label>
        <label>
          <span>Transaction Amount ($) : </span>
          <input
            type="text"
            required
            onChange={(e) => setAmount(e.target.value)}
            value={amount}
          />
        </label>
        <button className="btn">Add Transaction</button>
      </form>
    </>
  );
}
