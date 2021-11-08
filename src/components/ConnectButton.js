import {Button} from 'react-bootstrap'
import { useWeb3React } from "@web3-react/core"
import { injected } from '../connectors'

const ConnectButton = () => {
    const {activate} = useWeb3React()
    return(
        <>
          <Button variant="outline-warning" onClick={() => { activate(injected) }}>Connect</Button>
        </>
    )
}
export default ConnectButton