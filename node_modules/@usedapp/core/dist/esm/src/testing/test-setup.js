import 'mock-local-storage';
import chai from 'chai';
import { solidity } from 'ethereum-waffle';
import chaiAsPromised from 'chai-as-promised';
let jsdomCleanup;
before(() => {
    // eslint-disable-next-line @typescript-eslint/no-var-requires
    jsdomCleanup = require('jsdom-global')(undefined, { url: 'http://localhost/' });
});
after(() => jsdomCleanup === null || jsdomCleanup === void 0 ? void 0 : jsdomCleanup());
chai.use(solidity);
chai.use(chaiAsPromised);
//# sourceMappingURL=test-setup.js.map