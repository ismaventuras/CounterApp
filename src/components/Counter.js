
import { Button, Spinner } from 'react-bootstrap'
import { useWeb3React } from '@web3-react/core'
import { useEffect, useState } from 'react'
import CounterABI from '../contracts/Counter.json'

const Counter = () => {
    const { account, library, chainId } = useWeb3React()
    const [counter, setCounter] = useState()
    const [loadingIncrement, setLoadingIncrement] = useState()
    const [loadingDecrement, setLoadingDecrement] = useState()
    const contract = new library.eth.Contract(
        CounterABI.abi,
        '0x66AB20b324361B51fF4745E8E381DD8e2cFcDD3d'
    )

    useEffect(() => {

        const interval = setInterval(() => {
            contract.methods.counter().call()
                .then(result => {
                    setCounter(result)
                })
                .catch(error =>{
                    console.log(error)
                })
        }, 1000)

        return () => {
            clearInterval(interval)
        }
    }, [])

    const handleIncrement = () => {
        setLoadingIncrement(true)
        contract.methods.increment().send({ 'from': account })
            .then(result => {
                console.log(result)
                setLoadingIncrement(false)
            })
            .catch(error => {
                console.log(error)
                setLoadingIncrement(false)
            })
        
    }
    const handleDecrement = () => {
        setLoadingDecrement(true)
        contract.methods.decrement().send({ 'from': account })
            .then(result => {
                console.log(result)
                setLoadingDecrement(false)
            })
            .catch(error => {
                console.log(error)
                setLoadingDecrement(false)
            })
        
    }

    return (
        <>
            <div className="px-4 py-5 my-5 text-center">
                <h1 className="display-5 fw-bold">Counter</h1>
                <p className='display-3'>
                    {counter}
                </p>
                <div className='d-grid gap-2 d-sm-flex justify-content-sm-center'>
                    {loadingIncrement
                        ?
                        <Button variant='success' className=' btn-lg px-4 gap-3'>
                            <Spinner as='span' animation='border' size='sm' role='status' aria-hidden='true' />
                        </Button>
                        :
                        <Button onClick={handleIncrement} variant='success' className=' btn-lg px-4 gap-3'>
                            Increment
                        </Button>
                    }
                    {loadingDecrement
                        ?
                        <Button variant='danger' className=' btn-lg px-4 gap-3'>
                            <Spinner as='span' animation='border' size='sm' role='status' aria-hidden='true' />
                        </Button>
                        :
                        <Button onClick={handleDecrement} variant='danger' className=' btn-lg px-4 gap-3'>Decrement</Button>
                    }

                </div>
            </div>
        </>
    )
}

export default Counter