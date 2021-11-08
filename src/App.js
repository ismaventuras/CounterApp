//Hooks
import { useEagerConnect, useInactiveListener ,getErrorMessage} from './hooks'

// Web3 React
import { useWeb3React} from "@web3-react/core";

//Bootstrap
import { Col, Container, Row, Stack , Alert } from "react-bootstrap";
//Components
import Navigation from "./components/Navigation";
import NotConnected from "./components/NotConnected";
import Counter from './components/Counter';

function App() {

  const context = useWeb3React()
  const { active, error } = context

  // handle logic to eagerly connect to the injected ethereum provider, if it exists and has granted access already
  const triedEager = useEagerConnect()
  // handle logic to connect in reaction to certain events on the injected ethereum provider, if it exists
  useInactiveListener(!triedEager)


  return (
    <Stack gap={4}>
      <Navigation/>
      
      <Container>
        <Row>
          <Col sm={12}>{error ? <Alert className='text-center' variant='danger'>{getErrorMessage(error)}</Alert>  : ''}</Col>
        </Row>
        <Row>
        
        
        {active 
          ? <>
          <Counter/>
          </>
          : <NotConnected/>
        }
        </Row>
      </Container>
    </Stack>
  );
}

export default App;
