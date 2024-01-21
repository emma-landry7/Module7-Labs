import { useEffect } from "react";
import { useState } from "react";
import { useData } from "../hooks/useData";

const currencies = ['USD', 'AUD', 'NZD', 'GBP', 'EUR', 'SGD'];

function BitcoinRates() {
    const [currency, setCurrency] = useState(currencies[0]);
    const options = currencies.map(curr => <option value={curr} key={curr}>{curr}</option>);
    // const [price, setPrice] = useState('')
    const data = useData(`https://api.coingecko.com/api/v3/simple/price?ids=bitcoin&vs_currencies=${currency}`)

    let curr = data ? Object.values(data.bitcoin) : 'not found'
    // console.log(curr)
    let price = curr[0]
    console.log(currency, price)

    // useEffect(() => {
    //     let ignore = false
    //     fetch(`https://api.coingecko.com/api/v3/simple/price?ids=bitcoin&vs_currencies=${currency}`)
    //         .then(response => response.json())
    //         .then(json => {
    //             // setCurrency(currency)
    //             let curr = Object.values(json.bitcoin)
    //             console.log(currency, curr[0])
    //             setPrice(curr[0])
    //         })
    //     return () => {
    //         ignore = true
    //         console.log('Cleanup effect')
    //     }
    // }, [currency])

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