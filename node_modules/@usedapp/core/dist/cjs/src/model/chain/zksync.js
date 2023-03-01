"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ZkSyncTestnet = void 0;
const chainExplorerLink_1 = require("../../helpers/chainExplorerLink");
const zksyncExplorerUrl = 'https://zksync2-testnet.zkscan.io';
exports.ZkSyncTestnet = {
    chainId: 280,
    chainName: 'zkSync testnet',
    isTestChain: true,
    isLocalChain: false,
    multicallAddress: '0x5014a961801de9a52548068bDac853CE337221e7',
    multicall2Address: '0x32Caf123F6f574035f51532E597125062C0Aa8EE',
    rpcUrl: 'https://zksync2-testnet.zksync.dev',
    nativeCurrency: {
        name: 'ETH',
        symbol: 'ETH',
        decimals: 18,
    },
    blockExplorerUrl: zksyncExplorerUrl,
    getExplorerAddressLink: (0, chainExplorerLink_1.getAddressLink)(zksyncExplorerUrl),
    getExplorerTransactionLink: (0, chainExplorerLink_1.getTransactionLink)(zksyncExplorerUrl),
};
//# sourceMappingURL=zksync.js.map