/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import {
  Signer,
  utils,
  Contract,
  ContractFactory,
  PayableOverrides,
} from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import type { WavePortal, WavePortalInterface } from "../WavePortal";

const _abi = [
  {
    inputs: [],
    stateMutability: "payable",
    type: "constructor",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "from",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "timestamp",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "string",
        name: "message",
        type: "string",
      },
    ],
    name: "NewWave",
    type: "event",
  },
  {
    inputs: [],
    name: "getAllWaves",
    outputs: [
      {
        components: [
          {
            internalType: "address",
            name: "waver",
            type: "address",
          },
          {
            internalType: "string",
            name: "message",
            type: "string",
          },
          {
            internalType: "uint256",
            name: "timestamp",
            type: "uint256",
          },
        ],
        internalType: "struct WavePortal.Wave[]",
        name: "",
        type: "tuple[]",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "getTotalWaves",
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
        name: "",
        type: "address",
      },
    ],
    name: "lastWavedAt",
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
        internalType: "string",
        name: "_message",
        type: "string",
      },
    ],
    name: "wave",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
];

const _bytecode =
  "0x60806040526200004f6040518060400160405280601681526020017f57617665506f7274616c20436f6e7374727563746f72000000000000000000008152506200005560201b6200068b1760201c565b620001e9565b620000f5816040516024016200006c919062000162565b6040516020818303038152906040527f41304fac000000000000000000000000000000000000000000000000000000007bffffffffffffffffffffffffffffffffffffffffffffffffffffffff19166020820180517bffffffffffffffffffffffffffffffffffffffffffffffffffffffff8381831617835250505050620000f860201b60201c565b50565b60008151905060006a636f6e736f6c652e6c6f679050602083016000808483855afa5050505050565b60006200012e8262000186565b6200013a818562000191565b93506200014c818560208601620001a2565b6200015781620001d8565b840191505092915050565b600060208201905081810360008301526200017e818462000121565b905092915050565b600081519050919050565b600082825260208201905092915050565b60005b83811015620001c2578082015181840152602081019050620001a5565b83811115620001d2576000848401525b50505050565b6000601f19601f8301169050919050565b61119980620001f96000396000f3fe608060405234801561001057600080fd5b506004361061004c5760003560e01c8063449d46c0146100515780639a2cdc081461006d578063a42a46631461008b578063bd43a908146100bb575b600080fd5b61006b600480360381019061006691906109ce565b6100d9565b005b6100756104d7565b6040516100829190610d3b565b60405180910390f35b6100a560048036038101906100a091906109a5565b610522565b6040516100b29190610d3b565b60405180910390f35b6100c361053a565b6040516100d09190610c37565b60405180910390f35b42610384600260003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020546101279190610e4d565b10610167576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161015e90610d1b565b60405180910390fd5b42600260003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000208190555060016000808282546101bd9190610e4d565b925050819055506102036040518060400160405280600d81526020017f257320686173207761766564210000000000000000000000000000000000000081525033610724565b600360405180606001604052803373ffffffffffffffffffffffffffffffffffffffff16815260200183815260200142815250908060018154018082558091505060019003906000526020600020906003020160009091909190915060008201518160000160006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555060208201518160010190805190602001906102c2929190610885565b506040820151816002015550506000606460015442446102e29190610e4d565b6102ec9190610e4d565b6102f69190610f84565b90506103376040518060400160405280601681526020017f52616e646f6d20232067656e6572617465643a20257300000000000000000000815250826107c0565b80600181905550600a811015610483576103866040518060400160405280600781526020017f257320776f6e210000000000000000000000000000000000000000000000000081525033610724565b6000655af3107a40009050478111156103d4576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016103cb90610cdb565b60405180910390fd5b60003373ffffffffffffffffffffffffffffffffffffffff16826040516103fa90610c22565b60006040518083038185875af1925050503d8060008114610437576040519150601f19603f3d011682016040523d82523d6000602084013e61043c565b606091505b5050905080610480576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161047790610cfb565b60405180910390fd5b50505b3373ffffffffffffffffffffffffffffffffffffffff167f5f7e16dc676677766a70e9c5628aa6c54ddb8b6e5188e2ae1e1f17f1ffbea71642846040516104cb929190610d56565b60405180910390a25050565b600061051a6040518060400160405280601781526020017f5765206861766520256420746f74616c207761766573210000000000000000008152506000546107c0565b600054905090565b60026020528060005260406000206000915090505481565b60606003805480602002602001604051908101604052809291908181526020016000905b8282101561068257838290600052602060002090600302016040518060600160405290816000820160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020016001820180546105e790610f21565b80601f016020809104026020016040519081016040528092919081815260200182805461061390610f21565b80156106605780601f1061063557610100808354040283529160200191610660565b820191906000526020600020905b81548152906001019060200180831161064357829003601f168201915b505050505081526020016002820154815250508152602001906001019061055e565b50505050905090565b6107218160405160240161069f9190610c59565b6040516020818303038152906040527f41304fac000000000000000000000000000000000000000000000000000000007bffffffffffffffffffffffffffffffffffffffffffffffffffffffff19166020820180517bffffffffffffffffffffffffffffffffffffffffffffffffffffffff838183161783525050505061085c565b50565b6107bc828260405160240161073a929190610c7b565b6040516020818303038152906040527f319af333000000000000000000000000000000000000000000000000000000007bffffffffffffffffffffffffffffffffffffffffffffffffffffffff19166020820180517bffffffffffffffffffffffffffffffffffffffffffffffffffffffff838183161783525050505061085c565b5050565b61085882826040516024016107d6929190610cab565b6040516020818303038152906040527f9710a9d0000000000000000000000000000000000000000000000000000000007bffffffffffffffffffffffffffffffffffffffffffffffffffffffff19166020820180517bffffffffffffffffffffffffffffffffffffffffffffffffffffffff838183161783525050505061085c565b5050565b60008151905060006a636f6e736f6c652e6c6f679050602083016000808483855afa5050505050565b82805461089190610f21565b90600052602060002090601f0160209004810192826108b357600085556108fa565b82601f106108cc57805160ff19168380011785556108fa565b828001600101855582156108fa579182015b828111156108f95782518255916020019190600101906108de565b5b509050610907919061090b565b5090565b5b8082111561092457600081600090555060010161090c565b5090565b600061093b61093684610dab565b610d86565b90508281526020810184848401111561095357600080fd5b61095e848285610edf565b509392505050565b6000813590506109758161114c565b92915050565b600082601f83011261098c57600080fd5b813561099c848260208601610928565b91505092915050565b6000602082840312156109b757600080fd5b60006109c584828501610966565b91505092915050565b6000602082840312156109e057600080fd5b600082013567ffffffffffffffff8111156109fa57600080fd5b610a068482850161097b565b91505092915050565b6000610a1b8383610bb4565b905092915050565b610a2c81610ea3565b82525050565b610a3b81610ea3565b82525050565b6000610a4c82610dec565b610a568185610e0f565b935083602082028501610a6885610ddc565b8060005b85811015610aa45784840389528151610a858582610a0f565b9450610a9083610e02565b925060208a01995050600181019050610a6c565b50829750879550505050505092915050565b6000610ac182610df7565b610acb8185610e2b565b9350610adb818560208601610eee565b610ae481611071565b840191505092915050565b6000610afa82610df7565b610b048185610e3c565b9350610b14818560208601610eee565b610b1d81611071565b840191505092915050565b6000610b35603483610e3c565b9150610b4082611082565b604082019050919050565b6000610b58602783610e3c565b9150610b63826110d1565b604082019050919050565b6000610b7b600083610e20565b9150610b8682611120565b600082019050919050565b6000610b9e600883610e3c565b9150610ba982611123565b602082019050919050565b6000606083016000830151610bcc6000860182610a23565b5060208301518482036020860152610be48282610ab6565b9150506040830151610bf96040860182610c04565b508091505092915050565b610c0d81610ed5565b82525050565b610c1c81610ed5565b82525050565b6000610c2d82610b6e565b9150819050919050565b60006020820190508181036000830152610c518184610a41565b905092915050565b60006020820190508181036000830152610c738184610aef565b905092915050565b60006040820190508181036000830152610c958185610aef565b9050610ca46020830184610a32565b9392505050565b60006040820190508181036000830152610cc58185610aef565b9050610cd46020830184610c13565b9392505050565b60006020820190508181036000830152610cf481610b28565b9050919050565b60006020820190508181036000830152610d1481610b4b565b9050919050565b60006020820190508181036000830152610d3481610b91565b9050919050565b6000602082019050610d506000830184610c13565b92915050565b6000604082019050610d6b6000830185610c13565b8181036020830152610d7d8184610aef565b90509392505050565b6000610d90610da1565b9050610d9c8282610f53565b919050565b6000604051905090565b600067ffffffffffffffff821115610dc657610dc5611042565b5b610dcf82611071565b9050602081019050919050565b6000819050602082019050919050565b600081519050919050565b600081519050919050565b6000602082019050919050565b600082825260208201905092915050565b600081905092915050565b600082825260208201905092915050565b600082825260208201905092915050565b6000610e5882610ed5565b9150610e6383610ed5565b9250827fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff03821115610e9857610e97610fb5565b5b828201905092915050565b6000610eae82610eb5565b9050919050565b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b6000819050919050565b82818337600083830152505050565b60005b83811015610f0c578082015181840152602081019050610ef1565b83811115610f1b576000848401525b50505050565b60006002820490506001821680610f3957607f821691505b60208210811415610f4d57610f4c611013565b5b50919050565b610f5c82611071565b810181811067ffffffffffffffff82111715610f7b57610f7a611042565b5b80604052505050565b6000610f8f82610ed5565b9150610f9a83610ed5565b925082610faa57610fa9610fe4565b5b828206905092915050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601260045260246000fd5b7f4e487b7100000000000000000000000000000000000000000000000000000000600052602260045260246000fd5b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b6000601f19601f8301169050919050565b7f547279696e6720746f207769746864726177206d6f7265206d6f6e657920746860008201527f616e2074686520636f6e7472616374206861732e000000000000000000000000602082015250565b7f4661696c656420746f207769746864726177206d6f6e65792066726f6d20636f60008201527f6e74726163742e00000000000000000000000000000000000000000000000000602082015250565b50565b7f576169742031356d000000000000000000000000000000000000000000000000600082015250565b61115581610ea3565b811461116057600080fd5b5056fea26469706673582212201c40c0aaee8e6d036fce8aa3f933d4284f345229774f980d517944dc9469b56264736f6c63430008040033";

export class WavePortal__factory extends ContractFactory {
  constructor(signer?: Signer) {
    super(_abi, _bytecode, signer);
  }

  deploy(
    overrides?: PayableOverrides & { from?: string | Promise<string> }
  ): Promise<WavePortal> {
    return super.deploy(overrides || {}) as Promise<WavePortal>;
  }
  getDeployTransaction(
    overrides?: PayableOverrides & { from?: string | Promise<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  attach(address: string): WavePortal {
    return super.attach(address) as WavePortal;
  }
  connect(signer: Signer): WavePortal__factory {
    return super.connect(signer) as WavePortal__factory;
  }
  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): WavePortalInterface {
    return new utils.Interface(_abi) as WavePortalInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): WavePortal {
    return new Contract(address, _abi, signerOrProvider) as WavePortal;
  }
}
