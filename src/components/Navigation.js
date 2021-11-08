import { useWeb3React } from '@web3-react/core';
import { Container, Navbar } from 'react-bootstrap';
import ConnectButton from './ConnectButton';
import OffCanvasInfo from './OffCanvasInfo';


const styles = {

}

const Navigation = () => {
    const { active } = useWeb3React()
    return (
        <Navbar bg='dark' variant='dark' style={styles}>
            <Container >
                <Navbar.Brand>Counter App</Navbar.Brand>
                <Navbar.Toggle />
                <Navbar.Text>
                    {active
                        ? <OffCanvasInfo/>
                        : <ConnectButton />
                    }
                </Navbar.Text>
            </Container>
        </Navbar>
    )
}

export default Navigation