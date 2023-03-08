import {React, useState} from 'react'

// Styles
import './Fm.css'
export default function Fm() {
    const [name, Setname] = useState('');
    const [cardnum, Setcardnum] = useState(null);
    const [month, Setmonth] = useState('');
    const [year, Setyear] = useState(null);
    const [cvc, Setcvc] = useState(null);
  return (
    <div>
        <form >
          <label>
            <span>CARDHOLDER NAME:</span>
            <input
              type="text"
              onChange={(e)=> Setname(e.target.value.trim())}
              value={name.toLower}
              placeholder="e.g Jane AppleSeed"
              required
            />
          </label>

          <label>
            <span>CARD NUMBER:</span>
            <input
              type="number"
              onChange={(e)=> Setcardnum(e.target.value.trim())}
              value={cardnum}
              placeholder = "e.g 1234 5678 9123 0000"
              required
            />
          </label>

          <label>
            <span>MM</span>
            <input
              type="number"
              onChange={(e)=> Setmonth(e.target.value.trim())}
              value={month}
              placeholder = "MM"
              required
            />
          </label>

          <label>
            <span>YY</span>
            <input
              type="text"
              onChange={(e)=> Setyear(e.target.value.trim())}
              value={year}
              placeholder = "YY"
              required
            />
          </label>

          <label>
            <span>CVC</span>
            <input
              type="text"
              onChange={(e)=> Setcvc(e.target.value.trim())}
              value={cvc}
              placeholder = "e.g. 123"
              required
            />
          </label>
          <button>Confirm</button>
          </form>
    </div>
  )
}
