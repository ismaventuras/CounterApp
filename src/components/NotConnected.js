
const NotConnected = () => {
    return (
        <>
            <div className="px-4 py-5 my-5 text-center">                
                <h1 className ="display-5 fw-bold">Metamask  is mandatory for this app</h1>
                <div className ="col-lg-6 mx-auto">
                <p className ="lead mb-4">This application needs Metamask installed and BSC Testnet chain configured.</p>
                <div className ="d-grid gap-2 d-sm-flex justify-content-sm-center">
                <button type ="button" className ="btn btn-primary btn-lg px-4 gap-3"><a style={{color:'inherit',textDecoration:'none'}} href='https://metamask.io/' target='_blank' rel='noreferrer'>Install Metamask</a></button>
                <button type ="button" className ="btn btn-warning btn-lg px-4 gap-3"><a style={{color:'inherit',textDecoration:'none'}} href='https://docs.binance.org/smart-chain/developer/rpc.html' target='_blank' rel='noreferrer'>BSC Testnet Info</a></button>
                
                </div>
                </div>
            </div>
        </>
    )
}

export default NotConnected