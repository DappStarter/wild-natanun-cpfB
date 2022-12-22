require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'jazz enter boil food toward riot mad solid hotel light army giant'; 
let testAccounts = [
"0x9db2cdbe2eaa63a4ad8a0ff17fdf5cb1ef217656c4a3206aa1351efd82dea0a6",
"0x475c9e0bec80fe95333e0e20653dd7fc4af9d1991f3625593382b0873a1de48e",
"0x45a7191849d7f776bde84dca62d8b74fafa8b9f41cb7f96c0cc00a5f2147e28f",
"0xd8a3a2ac6d83b72c8234a906144278058ed31e5b014cbf55374dd592c2dd828c",
"0x70b04debdfb689163edc7f0cf186bf61124e351ba10a096cd702eb2a1ac8acc0",
"0x3df0f91e4148e144b2d11aded218b88beaf4513c965795a1b31f6f6c99e46441",
"0x886798efff5c316f6617539df153b7b3905b4e76018eaa0b283546df2cf40a2a",
"0x2de0c966a79be621fb2a85d35c7b673659a473107c1b97c7b66fde84abf912ac",
"0x819a681ccccc70041a5e014120d339cfcd1b679ef1e72069452903ca2657501a",
"0xb7de4949de6682a032ef016b7c99b777546d399eb05c9e0afc3697318db2411a"
]; 
let devUri = 'http://127.0.0.1:7545/';

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
            network_id: '*'
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};

