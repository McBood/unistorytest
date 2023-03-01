"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.useReadonlyNetwork = void 0;
const network_1 = require("../providers/network");
const useChainId_1 = require("./useChainId");
/**
 * Gets a readonly provider for specific chainId.
 * @param opts.chainId Requested chainId. If not provided, the currently connected wallet's chainId will be used or the default one from the config.
 * @returns An ethers.js provider or undefined.
 * @public
 */
function useReadonlyNetwork(opts = {}) {
    const chainId = (0, useChainId_1.useChainId)({ queryParams: { chainId: opts.chainId } });
    const providers = (0, network_1.useReadonlyNetworks)();
    return providers[chainId] !== undefined && chainId !== undefined
        ? {
            provider: providers[chainId],
            chainId: chainId,
        }
        : undefined;
}
exports.useReadonlyNetwork = useReadonlyNetwork;
//# sourceMappingURL=useReadonlyProvider.js.map