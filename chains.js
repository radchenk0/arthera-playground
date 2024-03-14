// const ARTHERA_CHAIN = {
//   id: 10242,
//   name: 'Arthera Testnet',
//   network: 'arthera',
//   nativeCurrency: {
//     name: 'AA',
//     symbol: 'AA',
//     decimals: 18,
//   },
//   rpcUrls: {
//     default: {
//       http: ['https://rpc.arthera.net'],
//     },
//     public: {
//       http: ['https://rpc.arthera.net'],
//     },
//   },
//   blockExplorers: {
//     default: {
//       name: 'Blockscout',
//       url: 'https://explorer.arthera.net',
//     },
//   },
// };

const ARTHERA_CHAIN = {
  id: 10243,
  name: 'Arthera Testnet',
  network: 'arthera',
  nativeCurrency: {
    name: 'AA',
    symbol: 'AA',
    decimals: 18,
  },
  rpcUrls: {
    default: {
      http: ['https://rpc-test2.arthera.net'],
    },
    public: {
      http: ['https://rpc-test2.arthera.net'],
    },
  },
  blockExplorers: {
    default: {
      name: 'Blockscout',
      url: 'https://explorer-test.arthera.net',
    },
  },
};

export { ARTHERA_CHAIN };
