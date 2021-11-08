import Account from "./Account"
import Balance from "./Balance"

const style ={
    color:'',
    
}

const Wallet = () => {

    return(
        <p style={style} className='my-auto'>
            <span><Account/> - <Balance/></span>
        </p>
    )
}

export default Wallet