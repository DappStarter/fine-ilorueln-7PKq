require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'grid enter off food nothing dash six protect hockey immense army gaze'; 
let testAccounts = [
"0xc5114b94f1c353ac14871eb355f6a27c7b1f17f0218dc642d9409e33ddb3ec8c",
"0x4eb244e37bd7738e4a350f90d9d93fcc1638a15c58c8fca6cf2c1bbf943ab123",
"0x68bbaba1499b77b200106c0963f6ce8b2ca5375d6db1607a1f92c5e1b6a36779",
"0x123c682c401c9a44430e6e852928435a350d2fa42ec043f4c3d6c6cd80e03457",
"0x5f496fc0c59006881963bf2f45dc8d64a0af44530ba11904a13bf112c64fa09f",
"0x3c631be05e8d35fbffda9ba3fc5f436a6e75f415badca80a2f4044d977e726ae",
"0x6aae95fb35fa069d43f5dd40657d7147953f9fe0f65f8134a30b32dcf4d070a3",
"0x243c935ba350f2a4835f3c68bad27637965710773aa1dc3c378dd0f9a6ae61fe",
"0xa9c54ba03638f4b06c29cc40f91b00ec92a7d6cc2876801157f68b36dc8703d7",
"0x64746619a69b8673e2a8c01530ca428616dfafff7464d9c5858a01162b912def"
]; 
let devUri = 'https://rpc-mumbai.matic.today';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 2000000,
            network_id: 80001,
            confirmations: 1,
            timeoutBlocks: 100,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};

