import { Config, Mainnet } from "@usedapp/core"
import { getDefaultProvider } from "ethers"

export const config: Config = {
    readOnlyChainId: Mainnet.chainId,
    readOnlyUrls: {
      [Mainnet.chainId]: getDefaultProvider('mainnet'),
    }
}