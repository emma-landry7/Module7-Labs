import { useEffect } from "react";
import { useState } from "react";
import { useData } from "../hooks/useData";
import Emoji from "./Emoji";
import NewNavBar from "./NewNavBar";
import InputLabel from '@mui/material/InputLabel';
import Select from '@mui/material/Select';
import { MenuItem, Typography } from "@mui/material";

const currencies = ['USD', 'AUD', 'NZD', 'GBP', 'EUR', 'SGD'];

function BitcoinRates() {
    const [currency, setCurrency] = useState(currencies[0]);
    const options = currencies.map(curr => <MenuItem value={curr} key={curr}>{curr}</MenuItem>);
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
            <div>
                <Typography variant="h2">Bitcoin Exchange Rate</Typography>
                <NewNavBar />
                <InputLabel variant="standard">Choose currency:
                    <Select value={currency} onChange={e => setCurrency(e.target.value)}>
                        {options}
                    </Select>
                </InputLabel>
                <Typography variant="body1">Price: ${price}</Typography>                
            </div>
            <div>
                <Emoji />
            </div>

        </div>
    )
}

export default BitcoinRates;