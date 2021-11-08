import { useWeb3React } from "@web3-react/core"
import { useEffect, useState } from "react"

const Balance = () => {
    const { account, library, chainId } = useWeb3React()
    const [balance, setBalance] = useState()
    useEffect(() => {
        if (!!account && !!library) {
            let stale = false

            library
                .eth
                .getBalance(account)
                .then((balance) => {
                    if (!stale) {
                        setBalance(balance)
                    }
                })
                .catch(() => {
                    if (!stale) {
                        setBalance(null)
                    }
                })

            return () => {
                stale = true
                setBalance(undefined)
            }
        }
    }, [account, library, chainId])
    return (
        <>
            <span>Balance</span>
            <span role="img" aria-label="gold">
                💰
            </span>
            
            <span>{balance === null ? 'Error' : balance ? `Ξ${library.utils.fromWei(balance)}` : ''}</span>
        </>
    )
}

export default Balance