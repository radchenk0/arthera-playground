import ethers from 'ethers';
import { CONFIG } from './config.js';
import { SUBSCRIBERS_ABI, PUREFI_ABI } from './abi.js';
import { ARTHERA_CHAIN } from './chains.js';

const {
  OWNER_PRIVATE_KEY,
  SUBSCRIBERS_CONTRACT_ADDRESS,
  PUREFI_CONTRACT_ADDRESS,
  ADDRESS_TO_PLAY_WITH,
} = CONFIG;

const jsonRpcProvider = new ethers.providers.StaticJsonRpcProvider(
  ARTHERA_CHAIN.rpcUrls.default.http[0],
  {
    chainId: ARTHERA_CHAIN.id,
    name: ARTHERA_CHAIN.name,
  }
);

const signer = new ethers.Wallet(OWNER_PRIVATE_KEY, jsonRpcProvider);

const subscribersContract = new ethers.Contract(
  SUBSCRIBERS_CONTRACT_ADDRESS,
  SUBSCRIBERS_ABI,
  signer
);

const purefiContract = new ethers.Contract(
  PUREFI_CONTRACT_ADDRESS,
  PUREFI_ABI,
  signer
);

const mutation = async (contract, methodName, args = [], overrides = {}) => {
  try {
    const txReceipt = await contract[methodName](...args, overrides);

    console.log(`Transaction initiated: ${txReceipt.hash}`);

    await txReceipt.wait();

    return txReceipt;
  } catch (error) {
    console.log(error);
  }
};

const query = async (contract, methodName, args = [], overrides = {}) => {
  try {
    const data = await contract[methodName](...args, overrides);
    return data;
  } catch (error) {
    console.log(error);
  }
};

const getSubscriptionOwner = async () => {
  const result = await query(purefiContract, 'getSubscriptionOwner');
  console.log(`${result} is a subscription owner of ${purefiContract.address}`);
};

const addWhitelister = async (newWhitelister) => {
  const receipt = await mutation(subscribersContract, 'addWhitelister', [
    newWhitelister,
  ]);
  console.log(receipt);
};

const whitelistAccount = async (addressToWhitelist) => {
  const receipt = await mutation(subscribersContract, 'whitelistAccount', [
    purefiContract.address,
    addressToWhitelist,
  ]);
  console.log(receipt);
};

const blacklistAccount = async (addressToBlacklist) => {
  const receipt = await mutation(subscribersContract, 'blacklistAccount', [
    purefiContract.address,
    addressToBlacklist,
  ]);
  console.log(receipt);
};

const checkIfWhitelisted = async (addressToCheck) => {
  const result = await query(subscribersContract, 'isWhitelistedForContract', [
    purefiContract.address,
    addressToCheck,
  ]);
  console.log(result);
};

const estimateSubscriptionPrice = async (addressToCheck, tier) => {
  const result = await query(purefiContract, 'estimateSubscriptionPrice', [
    addressToCheck,
    tier,
  ]);
  console.log(result);
};

estimateSubscriptionPrice(ADDRESS_TO_PLAY_WITH, 10);

// getSubscriptionOwner();

// addWhitelister(signer.address);

// whitelistAccount(ADDRESS_TO_PLAY_WITH);

// checkIfWhitelisted(ADDRESS_TO_PLAY_WITH);
