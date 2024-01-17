import { useEffect } from "react";
import { useState } from "react";

const currencies = ['USD', 'AUD', 'NZD', 'GBP', 'EUR', 'SGD'];

function BitcoinRates() {
    const [currency, setCurrency] = useState(currencies[0]);
    const options = currencies.map(curr => <option value={curr} key={curr}>{curr}</option>);
    const [price, setPrice] = useState('')

    useEffect(() => {
        let ignore = false
        fetch(`https://api.coingecko.com/api/v3/simple/price?ids=bitcoin&vs_currencies=${currency}`)
            .then(response => response.json())
            .then(json => {
                setCurrency(currency)
                let curr = json.bitcoin.currency
                console.log(price)
            })
        return () => {
            ignore = true
        }
    }, [])

    return (
        <div>
            <h3>Bitcoin Exchange Rate</h3>
            <label>Choose currency:
                <select value={currency} onChange={e => setCurrency(e.target.value)}>
                    {options}
                </select>
            </label>
            <p>Price: ${price}</p>
        </div>
    )
}

export default BitcoinRates;