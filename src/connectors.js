import { InjectedConnector } from '@web3-react/injected-connector'
const local = 1337
const bsc_testnet = 97
export const injected = new InjectedConnector(
    {
        supportedChainIds: [bsc_testnet]
    }
)