/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import {
  Signer,
  utils,
  BigNumberish,
  Contract,
  ContractFactory,
  Overrides,
} from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import type { Vesting, VestingInterface } from "../Vesting";

const _abi = [
  {
    inputs: [
      {
        internalType: "contract IERC20",
        name: "newToken",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "newDuration",
        type: "uint256",
      },
    ],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "previousOwner",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "newOwner",
        type: "address",
      },
    ],
    name: "OwnershipTransferred",
    type: "event",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "newUser",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "newAmount",
        type: "uint256",
      },
    ],
    name: "addUser",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    name: "amounts",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "newUser",
        type: "address",
      },
    ],
    name: "available",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "claim",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    name: "claimed",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "owner",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "renounceOwnership",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "token",
    outputs: [
      {
        internalType: "contract IERC20",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "newOwner",
        type: "address",
      },
    ],
    name: "transferOwnership",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
];

const _bytecode =
  "0x60a060405234801561001057600080fd5b506040516109fe3803806109fe83398101604081905261002f916100a2565b61003833610052565b6001600160a01b03909116608052426003556004556100dc565b600080546001600160a01b038381166001600160a01b0319831681178455604051919092169283917f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e09190a35050565b600080604083850312156100b557600080fd5b82516001600160a01b03811681146100cc57600080fd5b6020939093015192949293505050565b6080516109006100fe60003960008181610160015261024601526109006000f3fe608060405234801561001057600080fd5b50600436106100935760003560e01c80638da5cb5b116100665780638da5cb5b146100f0578063c884ef8314610115578063d301719314610135578063f2fde38b14610148578063fc0c546a1461015b57600080fd5b806310098ad5146100985780634e71d92d146100be57806355a3b2c1146100c8578063715018a6146100e8575b600080fd5b6100ab6100a6366004610729565b610182565b6040519081526020015b60405180910390f35b6100c66101de565b005b6100ab6100d6366004610729565b60016020526000908152604090205481565b6100c6610294565b6000546001600160a01b03165b6040516001600160a01b0390911681526020016100b5565b6100ab610123366004610729565b60026020526000908152604090205481565b6100c6610143366004610744565b6102ca565b6100c6610156366004610729565b610376565b6100fd7f000000000000000000000000000000000000000000000000000000000000000081565b6001600160a01b0381166000908152600260209081526040808320546004546001909352908320546003549192916101ba9042610784565b6101c4919061079b565b6101ce91906107ba565b6101d89190610784565b92915050565b60006101e933610182565b9050600081116102395760405162461bcd60e51b815260206004820152601660248201527543616e7420636c61696d207a65726f20746f6b656e7360501b60448201526064015b60405180910390fd5b61026d6001600160a01b037f0000000000000000000000000000000000000000000000000000000000000000163383610411565b336000908152600260205260408120805483929061028c9084906107dc565b909155505050565b6000546001600160a01b031633146102be5760405162461bcd60e51b8152600401610230906107f4565b6102c86000610468565b565b6000546001600160a01b031633146102f45760405162461bcd60e51b8152600401610230906107f4565b6001600160a01b0382166000908152600160205260409020541561035a5760405162461bcd60e51b815260206004820181905260248201527f54686973207573657220686173206265656e20616c72656164792061646465646044820152606401610230565b6001600160a01b03909116600090815260016020526040902055565b6000546001600160a01b031633146103a05760405162461bcd60e51b8152600401610230906107f4565b6001600160a01b0381166104055760405162461bcd60e51b815260206004820152602660248201527f4f776e61626c653a206e6577206f776e657220697320746865207a65726f206160448201526564647265737360d01b6064820152608401610230565b61040e81610468565b50565b604080516001600160a01b038416602482015260448082018490528251808303909101815260649091019091526020810180516001600160e01b031663a9059cbb60e01b1790526104639084906104b8565b505050565b600080546001600160a01b038381166001600160a01b0319831681178455604051919092169283917f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e09190a35050565b600061050d826040518060400160405280602081526020017f5361666545524332303a206c6f772d6c6576656c2063616c6c206661696c6564815250856001600160a01b031661058a9092919063ffffffff16565b805190915015610463578080602001905181019061052b9190610829565b6104635760405162461bcd60e51b815260206004820152602a60248201527f5361666545524332303a204552433230206f7065726174696f6e20646964206e6044820152691bdd081cdd58d8d9595960b21b6064820152608401610230565b606061059984846000856105a3565b90505b9392505050565b6060824710156106045760405162461bcd60e51b815260206004820152602660248201527f416464726573733a20696e73756666696369656e742062616c616e636520666f6044820152651c8818d85b1b60d21b6064820152608401610230565b6001600160a01b0385163b61065b5760405162461bcd60e51b815260206004820152601d60248201527f416464726573733a2063616c6c20746f206e6f6e2d636f6e74726163740000006044820152606401610230565b600080866001600160a01b03168587604051610677919061087b565b60006040518083038185875af1925050503d80600081146106b4576040519150601f19603f3d011682016040523d82523d6000602084013e6106b9565b606091505b50915091506106c98282866106d4565b979650505050505050565b606083156106e357508161059c565b8251156106f35782518084602001fd5b8160405162461bcd60e51b81526004016102309190610897565b80356001600160a01b038116811461072457600080fd5b919050565b60006020828403121561073b57600080fd5b61059c8261070d565b6000806040838503121561075757600080fd5b6107608361070d565b946020939093013593505050565b634e487b7160e01b600052601160045260246000fd5b6000828210156107965761079661076e565b500390565b60008160001904831182151516156107b5576107b561076e565b500290565b6000826107d757634e487b7160e01b600052601260045260246000fd5b500490565b600082198211156107ef576107ef61076e565b500190565b6020808252818101527f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e6572604082015260600190565b60006020828403121561083b57600080fd5b8151801515811461059c57600080fd5b60005b8381101561086657818101518382015260200161084e565b83811115610875576000848401525b50505050565b6000825161088d81846020870161084b565b9190910192915050565b60208152600082518060208401526108b681604085016020870161084b565b601f01601f1916919091016040019291505056fea2646970667358221220b577e4793126c66352402893a9f05f547e962af7f38c14abdac163ec17c7e81a64736f6c634300080a0033";

export class Vesting__factory extends ContractFactory {
  constructor(
    ...args: [signer: Signer] | ConstructorParameters<typeof ContractFactory>
  ) {
    if (args.length === 1) {
      super(_abi, _bytecode, args[0]);
    } else {
      super(...args);
    }
  }

  deploy(
    newToken: string,
    newDuration: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<Vesting> {
    return super.deploy(
      newToken,
      newDuration,
      overrides || {}
    ) as Promise<Vesting>;
  }
  getDeployTransaction(
    newToken: string,
    newDuration: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(newToken, newDuration, overrides || {});
  }
  attach(address: string): Vesting {
    return super.attach(address) as Vesting;
  }
  connect(signer: Signer): Vesting__factory {
    return super.connect(signer) as Vesting__factory;
  }
  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): VestingInterface {
    return new utils.Interface(_abi) as VestingInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): Vesting {
    return new Contract(address, _abi, signerOrProvider) as Vesting;
  }
}