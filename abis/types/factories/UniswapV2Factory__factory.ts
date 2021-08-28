/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import type {
  UniswapV2Factory,
  UniswapV2FactoryInterface,
} from "../UniswapV2Factory";

const _abi = [
  {
    inputs: [
      {
        internalType: "address",
        name: "_feeToSetter",
        type: "address",
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
        name: "token0",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "token1",
        type: "address",
      },
      {
        indexed: false,
        internalType: "address",
        name: "pair",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    name: "PairCreated",
    type: "event",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    name: "allPairs",
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
    name: "allPairsLength",
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
        name: "tokenA",
        type: "address",
      },
      {
        internalType: "address",
        name: "tokenB",
        type: "address",
      },
    ],
    name: "createPair",
    outputs: [
      {
        internalType: "address",
        name: "pair",
        type: "address",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "feeTo",
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
    name: "feeToSetter",
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
    inputs: [
      {
        internalType: "address",
        name: "_owner",
        type: "address",
      },
    ],
    name: "getBytecode",
    outputs: [
      {
        internalType: "bytes",
        name: "",
        type: "bytes",
      },
    ],
    stateMutability: "pure",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    name: "getPair",
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
    name: "migrator",
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
    name: "pairCodeHash",
    outputs: [
      {
        internalType: "bytes32",
        name: "",
        type: "bytes32",
      },
    ],
    stateMutability: "pure",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_feeTo",
        type: "address",
      },
    ],
    name: "setFeeTo",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_feeToSetter",
        type: "address",
      },
    ],
    name: "setFeeToSetter",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_migrator",
        type: "address",
      },
    ],
    name: "setMigrator",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
];

const _bytecode =
  "0x608060405234801561001057600080fd5b506040516130d13803806130d18339818101604052602081101561003357600080fd5b5051600180546001600160a01b0319166001600160a01b0390921691909117905561306e806100636000396000f3fe608060405234801561001057600080fd5b50600436106100d45760003560e01c80637cd07e4711610081578063c9c653961161005b578063c9c6539614610235578063e6a4390514610263578063f46901ed14610291576100d4565b80637cd07e47146101ff5780639aab924814610207578063a2e74af61461020f576100d4565b80631e3dd18b116100b25780631e3dd18b146101a057806323cf3118146101bd578063574f2ba3146101e5576100d4565b8063017e7e58146100d9578063094b7415146100fd5780630c6008af14610105575b600080fd5b6100e16102b7565b604080516001600160a01b039092168252519081900360200190f35b6100e16102c6565b61012b6004803603602081101561011b57600080fd5b50356001600160a01b03166102d5565b6040805160208082528351818301528351919283929083019185019080838360005b8381101561016557818101518382015260200161014d565b50505050905090810190601f1680156101925780820380516001836020036101000a031916815260200191505b509250505060405180910390f35b6100e1600480360360208110156101b657600080fd5b50356103e0565b6101e3600480360360208110156101d357600080fd5b50356001600160a01b031661040a565b005b6101ed610482565b60408051918252519081900360200190f35b6100e1610488565b6101ed610497565b6101e36004803603602081101561022557600080fd5b50356001600160a01b03166104c9565b6100e16004803603604081101561024b57600080fd5b506001600160a01b0381358116916020013516610541565b6100e16004803603604081101561027957600080fd5b506001600160a01b0381358116916020013516610873565b6101e3600480360360208110156102a757600080fd5b50356001600160a01b0316610899565b6000546001600160a01b031681565b6001546001600160a01b031681565b60606000604051806020016102e990610911565b6020820181038252601f19601f820116604052509050808360405160200180826001600160a01b031681526020019150506040516020818303038152906040526040516020018083805190602001908083835b6020831061035b5780518252601f19909201916020918201910161033c565b51815160209384036101000a600019018019909216911617905285519190930192850191508083835b602083106103a35780518252601f199092019160209182019101610384565b6001836020036101000a03801982511681845116808217855250505050505090500192505050604051602081830303815290604052915050919050565b600481815481106103f057600080fd5b6000918252602090912001546001600160a01b0316905081565b6001546001600160a01b03163314610460576040805162461bcd60e51b81526020600482015260146024820152732ab734b9bbb0b82b191d102327a92124a22222a760611b604482015290519081900360640190fd5b600280546001600160a01b0319166001600160a01b0392909216919091179055565b60045490565b6002546001600160a01b031681565b6000604051806020016104a990610911565b6020820181038252601f19601f8201166040525080519060200120905090565b6001546001600160a01b0316331461051f576040805162461bcd60e51b81526020600482015260146024820152732ab734b9bbb0b82b191d102327a92124a22222a760611b604482015290519081900360640190fd5b600180546001600160a01b0319166001600160a01b0392909216919091179055565b6000816001600160a01b0316836001600160a01b031614156105aa576040805162461bcd60e51b815260206004820152601e60248201527f556e697377617056323a204944454e544943414c5f4144445245535345530000604482015290519081900360640190fd5b600080836001600160a01b0316856001600160a01b0316106105cd5783856105d0565b84845b90925090506001600160a01b038216610630576040805162461bcd60e51b815260206004820152601760248201527f556e697377617056323a205a45524f5f41444452455353000000000000000000604482015290519081900360640190fd5b6001600160a01b038281166000908152600360209081526040808320858516845290915290205416156106aa576040805162461bcd60e51b815260206004820152601660248201527f556e697377617056323a20504149525f45584953545300000000000000000000604482015290519081900360640190fd5b6000604051806020016106bc90610911565b6020820181038252601f19601f8201166040525090506000838360405160200180836001600160a01b031660601b8152601401826001600160a01b031660601b815260140192505050604051602081830303815290604052805190602001209050808251602084016000f59450846001600160a01b031663485cc95585856040518363ffffffff1660e01b815260040180836001600160a01b03168152602001826001600160a01b0316815260200192505050600060405180830381600087803b15801561078957600080fd5b505af115801561079d573d6000803e3d6000fd5b505050506001600160a01b0384811660008181526003602081815260408084208987168086529083528185208054978d166001600160a01b031998891681179091559383528185208686528352818520805488168517905560048054600181018255958190527f8a35acfbc15ff81a39ae7d344fd709f28e8600b4aa8c65c6b64bfe7fe36bd19b90950180549097168417909655925483519283529082015281517f0d3648bd0f6ba80134a33ba9275ac585d9d315f0ad8355cddefde31afa28d0e9929181900390910190a35050505092915050565b60036020908152600092835260408084209091529082529020546001600160a01b031681565b6001546001600160a01b031633146108ef576040805162461bcd60e51b81526020600482015260146024820152732ab734b9bbb0b82b191d102327a92124a22222a760611b604482015290519081900360640190fd5b600080546001600160a01b0319166001600160a01b0392909216919091179055565b6127438061091f8339019056fe60806040526001600c553480156200001657600080fd5b506040518060400160405280600e81526020016d2634b8bab4b234ba3caa37b5b2b760911b8152506040518060400160405280600381526020016213145560ea1b815250816003908051906020019062000072929190620000b1565b50805162000088906004906020840190620000b1565b505060058054601260ff1990911617610100600160a81b0319166101003302179055506200015d565b828054600181600116156101000203166002900490600052602060002090601f016020900481019282620000e9576000855562000134565b82601f106200010457805160ff191683800117855562000134565b8280016001018555821562000134579182015b828111156200013457825182559160200191906001019062000117565b506200014292915062000146565b5090565b5b8082111562000142576000815560010162000147565b6125d6806200016d6000396000f3fe608060405234801561001057600080fd5b50600436106101a35760003560e01c80636a627842116100ee578063a9059cbb11610097578063c45a015511610071578063c45a015514610548578063d21220a714610550578063dd62ed3e14610558578063fff6cae914610586576101a3565b8063a9059cbb146104ee578063ba9a7a561461051a578063bc25cf7714610522576101a3565b806389afcb44116100c857806389afcb441461047b57806395d89b41146104ba578063a457c2d7146104c2576101a3565b80636a6278421461042757806370a082311461044d5780637464fc3d14610473576101a3565b806323b872dd11610150578063485cc9551161012a578063485cc955146103e95780635909c0d5146104175780635a3d54931461041f576101a3565b806323b872dd14610369578063313ce5671461039f57806339509351146103bd576101a3565b8063095ea7b311610181578063095ea7b3146102eb5780630dfe16811461032b57806318160ddd1461034f576101a3565b8063022c0d9f146101a857806306fdde03146102365780630902f1ac146102b3575b600080fd5b610234600480360360808110156101be57600080fd5b8135916020810135916001600160a01b0360408301351691908101906080810160608201356401000000008111156101f557600080fd5b82018360208201111561020757600080fd5b8035906020019184600183028401116401000000008311171561022957600080fd5b50909250905061058e565b005b61023e610aaf565b6040805160208082528351818301528351919283929083019185019080838360005b83811015610278578181015183820152602001610260565b50505050905090810190601f1680156102a55780820380516001836020036101000a031916815260200191505b509250505060405180910390f35b6102bb610b45565b604080516001600160701b03948516815292909316602083015263ffffffff168183015290519081900360600190f35b6103176004803603604081101561030157600080fd5b506001600160a01b038135169060200135610b6f565b604080519115158252519081900360200190f35b610333610b8d565b604080516001600160a01b039092168252519081900360200190f35b610357610b9c565b60408051918252519081900360200190f35b6103176004803603606081101561037f57600080fd5b506001600160a01b03813581169160208101359091169060400135610ba2565b6103a7610c29565b6040805160ff9092168252519081900360200190f35b610317600480360360408110156103d357600080fd5b506001600160a01b038135169060200135610c32565b610234600480360360408110156103ff57600080fd5b506001600160a01b0381358116916020013516610c80565b610357610d2a565b610357610d30565b6103576004803603602081101561043d57600080fd5b50356001600160a01b0316610d36565b6103576004803603602081101561046357600080fd5b50356001600160a01b031661100d565b61035761102c565b6104a16004803603602081101561049157600080fd5b50356001600160a01b0316611032565b6040805192835260208301919091528051918290030190f35b61023e6113cc565b610317600480360360408110156104d857600080fd5b506001600160a01b03813516906020013561142d565b6103176004803603604081101561050457600080fd5b506001600160a01b038135169060200135611495565b6103576114a9565b6102346004803603602081101561053857600080fd5b50356001600160a01b03166114af565b610333611621565b610333611635565b6103576004803603604081101561056e57600080fd5b506001600160a01b0381358116916020013516611644565b61023461166f565b600c546001146105d9576040805162461bcd60e51b8152602060048201526011602482015270155b9a5cddd85c158c8e881313d0d2d151607a1b604482015290519081900360640190fd5b6000600c55841515806105ec5750600084115b6106275760405162461bcd60e51b81526004018080602001828103825260258152602001806123cc6025913960400191505060405180910390fd5b600080610632610b45565b5091509150816001600160701b0316871080156106575750806001600160701b031686105b6106925760405162461bcd60e51b815260040180806020018281038252602181526020018061247c6021913960400191505060405180910390fd5b60065460075460009182916001600160a01b039182169190811690891682148015906106d05750806001600160a01b0316896001600160a01b031614155b610721576040805162461bcd60e51b815260206004820152601560248201527f556e697377617056323a20494e56414c49445f544f0000000000000000000000604482015290519081900360640190fd5b8a1561073257610732828a8d6117d1565b891561074357610743818a8c6117d1565b86156107f557886001600160a01b03166310d1e85c338d8d8c8c6040518663ffffffff1660e01b815260040180866001600160a01b03168152602001858152602001848152602001806020018281038252848482818152602001925080828437600081840152601f19601f8201169050808301925050509650505050505050600060405180830381600087803b1580156107dc57600080fd5b505af11580156107f0573d6000803e3d6000fd5b505050505b604080516370a0823160e01b815230600482015290516001600160a01b038416916370a08231916024808301926020929190829003018186803b15801561083b57600080fd5b505afa15801561084f573d6000803e3d6000fd5b505050506040513d602081101561086557600080fd5b5051604080516370a0823160e01b815230600482015290519195506001600160a01b038316916370a0823191602480820192602092909190829003018186803b1580156108b157600080fd5b505afa1580156108c5573d6000803e3d6000fd5b505050506040513d60208110156108db57600080fd5b5051925060009150506001600160701b0385168a900383116108fe57600061090d565b89856001600160701b03160383035b9050600089856001600160701b031603831161092a576000610939565b89856001600160701b03160383035b9050600082118061094a5750600081115b6109855760405162461bcd60e51b81526004018080602001828103825260248152602001806124146024913960400191505060405180910390fd5b60006109a761099584600361196a565b6109a1876103e861196a565b906119d6565b905060006109b961099584600361196a565b90506109de620f42406109d86001600160701b038b8116908b1661196a565b9061196a565b6109e8838361196a565b1015610a3b576040805162461bcd60e51b815260206004820152600c60248201527f556e697377617056323a204b0000000000000000000000000000000000000000604482015290519081900360640190fd5b5050610a4984848888611a2e565b60408051838152602081018390528082018d9052606081018c905290516001600160a01b038b169133917fd78ad95fa46c994b6551d0da85fc275fe613ce37657fb8d5e3d130840159d8229181900360800190a350506001600c55505050505050505050565b60038054604080516020601f6002600019610100600188161502019095169490940493840181900481028201810190925282815260609390929091830182828015610b3b5780601f10610b1057610100808354040283529160200191610b3b565b820191906000526020600020905b815481529060010190602001808311610b1e57829003601f168201915b5050505050905090565b6008546001600160701b0380821692600160701b830490911691600160e01b900463ffffffff1690565b6000610b83610b7c611c05565b8484611c09565b5060015b92915050565b6006546001600160a01b031681565b60025490565b6000610baf848484611cf5565b610c1f84610bbb611c05565b610c1a85604051806060016040528060288152602001612513602891396001600160a01b038a16600090815260016020526040812090610bf9611c05565b6001600160a01b031681526020810191909152604001600020549190611e50565b611c09565b5060019392505050565b60055460ff1690565b6000610b83610c3f611c05565b84610c1a8560016000610c50611c05565b6001600160a01b03908116825260208083019390935260409182016000908120918c168152925290205490611ee7565b60055461010090046001600160a01b03163314610ce4576040805162461bcd60e51b815260206004820152601460248201527f556e697377617056323a20464f5242494444454e000000000000000000000000604482015290519081900360640190fd5b600680546001600160a01b039384167fffffffffffffffffffffffff00000000000000000000000000000000000000009182161790915560078054929093169116179055565b60095481565b600a5481565b6000600c54600114610d83576040805162461bcd60e51b8152602060048201526011602482015270155b9a5cddd85c158c8e881313d0d2d151607a1b604482015290519081900360640190fd5b6000600c81905580610d93610b45565b50600654604080516370a0823160e01b815230600482015290519395509193506000926001600160a01b03909116916370a08231916024808301926020929190829003018186803b158015610de757600080fd5b505afa158015610dfb573d6000803e3d6000fd5b505050506040513d6020811015610e1157600080fd5b5051600754604080516370a0823160e01b815230600482015290519293506000926001600160a01b03909216916370a0823191602480820192602092909190829003018186803b158015610e6457600080fd5b505afa158015610e78573d6000803e3d6000fd5b505050506040513d6020811015610e8e57600080fd5b505190506000610ea7836001600160701b0387166119d6565b90506000610ebe836001600160701b0387166119d6565b90506000610ecc8787611f48565b90506000610ed8610b9c565b905080610efe57610ef76103e86109a1610ef2878761196a565b612087565b9850610f41565b610f3e6001600160701b038916610f15868461196a565b81610f1c57fe5b046001600160701b038916610f31868561196a565b81610f3857fe5b046120d8565b98505b60008911610f805760405162461bcd60e51b81526004018080602001828103825260288152602001806124eb6028913960400191505060405180910390fd5b610f8a8a8a6120ee565b610f9686868a8a611a2e565b8115610fc057600854610fbc906001600160701b0380821691600160701b90041661196a565b600b555b6040805185815260208101859052815133927f4c209b5fc8ad50758f13e2e1088ba56a560dff690a1c6fef26394f4c03821c4f928290030190a250506001600c5550949695505050505050565b6001600160a01b0381166000908152602081905260409020545b919050565b600b5481565b600080600c54600114611080576040805162461bcd60e51b8152602060048201526011602482015270155b9a5cddd85c158c8e881313d0d2d151607a1b604482015290519081900360640190fd5b6000600c81905580611090610b45565b50600654600754604080516370a0823160e01b815230600482015290519496509294506001600160a01b039182169391169160009184916370a08231916024808301926020929190829003018186803b1580156110ec57600080fd5b505afa158015611100573d6000803e3d6000fd5b505050506040513d602081101561111657600080fd5b5051604080516370a0823160e01b815230600482015290519192506000916001600160a01b038516916370a08231916024808301926020929190829003018186803b15801561116457600080fd5b505afa158015611178573d6000803e3d6000fd5b505050506040513d602081101561118e57600080fd5b50519050600061119d3061100d565b905060006111ab8888611f48565b905060006111b7610b9c565b9050806111c4848761196a565b816111cb57fe5b049a50806111d9848661196a565b816111e057fe5b04995060008b1180156111f3575060008a115b61122e5760405162461bcd60e51b81526004018080602001828103825260288152602001806124c36028913960400191505060405180910390fd5b61123830846121de565b611243878d8d6117d1565b61124e868d8c6117d1565b604080516370a0823160e01b815230600482015290516001600160a01b038916916370a08231916024808301926020929190829003018186803b15801561129457600080fd5b505afa1580156112a8573d6000803e3d6000fd5b505050506040513d60208110156112be57600080fd5b5051604080516370a0823160e01b815230600482015290519196506001600160a01b038816916370a0823191602480820192602092909190829003018186803b15801561130a57600080fd5b505afa15801561131e573d6000803e3d6000fd5b505050506040513d602081101561133457600080fd5b5051935061134485858b8b611a2e565b811561136e5760085461136a906001600160701b0380821691600160701b90041661196a565b600b555b604080518c8152602081018c905281516001600160a01b038f169233927fdccd412f0b1252819cb1fd330b93224ca42612892bb3f4f789976e6d81936496929081900390910190a35050505050505050506001600c81905550915091565b60048054604080516020601f6002600019610100600188161502019095169490940493840181900481028201810190925282815260609390929091830182828015610b3b5780601f10610b1057610100808354040283529160200191610b3b565b6000610b8361143a611c05565b84610c1a856040518060600160405280602581526020016125a56025913960016000611464611c05565b6001600160a01b03908116825260208083019390935260409182016000908120918d16815292529020549190611e50565b6000610b836114a2611c05565b8484611cf5565b6103e881565b600c546001146114fa576040805162461bcd60e51b8152602060048201526011602482015270155b9a5cddd85c158c8e881313d0d2d151607a1b604482015290519081900360640190fd5b6000600c55600654600754600854604080516370a0823160e01b815230600482015290516001600160a01b0394851694909316926115a3928592879261159e926001600160701b03169185916370a0823191602480820192602092909190829003018186803b15801561156c57600080fd5b505afa158015611580573d6000803e3d6000fd5b505050506040513d602081101561159657600080fd5b5051906119d6565b6117d1565b611617818461159e6008600e9054906101000a90046001600160701b03166001600160701b0316856001600160a01b03166370a08231306040518263ffffffff1660e01b815260040180826001600160a01b0316815260200191505060206040518083038186803b15801561156c57600080fd5b50506001600c5550565b60055461010090046001600160a01b031681565b6007546001600160a01b031681565b6001600160a01b03918216600090815260016020908152604080832093909416825291909152205490565b600c546001146116ba576040805162461bcd60e51b8152602060048201526011602482015270155b9a5cddd85c158c8e881313d0d2d151607a1b604482015290519081900360640190fd5b6000600c55600654604080516370a0823160e01b815230600482015290516117ca926001600160a01b0316916370a08231916024808301926020929190829003018186803b15801561170b57600080fd5b505afa15801561171f573d6000803e3d6000fd5b505050506040513d602081101561173557600080fd5b5051600754604080516370a0823160e01b815230600482015290516001600160a01b03909216916370a0823191602480820192602092909190829003018186803b15801561178257600080fd5b505afa158015611796573d6000803e3d6000fd5b505050506040513d60208110156117ac57600080fd5b50516008546001600160701b0380821691600160701b900416611a2e565b6001600c55565b604080518082018252601981527f7472616e7366657228616464726573732c75696e74323536290000000000000060209182015281516001600160a01b0385811660248301526044808301869052845180840390910181526064909201845291810180516001600160e01b031663a9059cbb60e01b17815292518151600094859489169392918291908083835b6020831061187d5780518252601f19909201916020918201910161185e565b6001836020036101000a0380198251168184511680821785525050505050509050019150506000604051808303816000865af19150503d80600081146118df576040519150601f19603f3d011682016040523d82523d6000602084013e6118e4565b606091505b5091509150818015611912575080511580611912575080806020019051602081101561190f57600080fd5b50515b611963576040805162461bcd60e51b815260206004820152601a60248201527f556e697377617056323a205452414e534645525f4641494c4544000000000000604482015290519081900360640190fd5b5050505050565b60008115806119855750508082028282828161198257fe5b04145b610b87576040805162461bcd60e51b815260206004820152601460248201527f64732d6d6174682d6d756c2d6f766572666c6f77000000000000000000000000604482015290519081900360640190fd5b80820382811115610b87576040805162461bcd60e51b815260206004820152601560248201527f64732d6d6174682d7375622d756e646572666c6f770000000000000000000000604482015290519081900360640190fd5b6001600160701b038411801590611a4c57506001600160701b038311155b611a9d576040805162461bcd60e51b815260206004820152601360248201527f556e697377617056323a204f564552464c4f5700000000000000000000000000604482015290519081900360640190fd5b60085463ffffffff42811691600160e01b90048116820390811615801590611acd57506001600160701b03841615155b8015611ae157506001600160701b03831615155b15611b4c578063ffffffff16611b0985611afa866122da565b6001600160e01b0316906122ec565b600980546001600160e01b03929092169290920201905563ffffffff8116611b3484611afa876122da565b600a80546001600160e01b0392909216929092020190555b600880546dffffffffffffffffffffffffffff19166001600160701b03888116919091177fffffffff0000000000000000000000000000ffffffffffffffffffffffffffff16600160701b8883168102919091176001600160e01b0316600160e01b63ffffffff871602179283905560408051848416815291909304909116602082015281517f1c411e9a96e071241c2f21f7726b17ae89e3cab4c78be50e062b03a9fffbbad1929181900390910190a1505050505050565b3390565b6001600160a01b038316611c4e5760405162461bcd60e51b81526004018080602001828103825260248152602001806125816024913960400191505060405180910390fd5b6001600160a01b038216611c935760405162461bcd60e51b815260040180806020018281038252602281526020018061245a6022913960400191505060405180910390fd5b6001600160a01b03808416600081815260016020908152604080832094871680845294825291829020859055815185815291517f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b9259281900390910190a3505050565b6001600160a01b038316611d3a5760405162461bcd60e51b815260040180806020018281038252602581526020018061255c6025913960400191505060405180910390fd5b6001600160a01b038216611d7f5760405162461bcd60e51b81526004018080602001828103825260238152602001806123f16023913960400191505060405180910390fd5b611d8a838383612311565b611dc78160405180606001604052806026815260200161249d602691396001600160a01b0386166000908152602081905260409020549190611e50565b6001600160a01b038085166000908152602081905260408082209390935590841681522054611df69082611ee7565b6001600160a01b038084166000818152602081815260409182902094909455805185815290519193928716927fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef92918290030190a3505050565b60008184841115611edf5760405162461bcd60e51b81526004018080602001828103825283818151815260200191508051906020019080838360005b83811015611ea4578181015183820152602001611e8c565b50505050905090810190601f168015611ed15780820380516001836020036101000a031916815260200191505b509250505060405180910390fd5b505050900390565b600082820183811015611f41576040805162461bcd60e51b815260206004820152601b60248201527f536166654d6174683a206164646974696f6e206f766572666c6f770000000000604482015290519081900360640190fd5b9392505050565b600080600560019054906101000a90046001600160a01b03166001600160a01b031663017e7e586040518163ffffffff1660e01b815260040160206040518083038186803b158015611f9957600080fd5b505afa158015611fad573d6000803e3d6000fd5b505050506040513d6020811015611fc357600080fd5b5051600b546001600160a01b03821615801594509192509061207357801561206e576000612000610ef26001600160701b0388811690881661196a565b9050600061200d83612087565b90508082111561206b57600061202e61202684846119d6565b6109d8610b9c565b905060006120478361204186600561196a565b90612316565b9050600081838161205457fe5b04905080156120675761206787826120ee565b5050505b50505b61207f565b801561207f576000600b555b505092915050565b600060038211156120ca575080600160028204015b818110156120c4578091506002818285816120b357fe5b0401816120bc57fe5b04905061209c565b50611027565b811561102757506001919050565b60008183106120e75781611f41565b5090919050565b6001600160a01b038216612149576040805162461bcd60e51b815260206004820152601f60248201527f45524332303a206d696e7420746f20746865207a65726f206164647265737300604482015290519081900360640190fd5b61215560008383612311565b6002546121629082611ee7565b6002556001600160a01b0382166000908152602081905260409020546121889082611ee7565b6001600160a01b0383166000818152602081815260408083209490945583518581529351929391927fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef9281900390910190a35050565b6001600160a01b0382166122235760405162461bcd60e51b815260040180806020018281038252602181526020018061253b6021913960400191505060405180910390fd5b61222f82600083612311565b61226c81604051806060016040528060228152602001612438602291396001600160a01b0385166000908152602081905260409020549190611e50565b6001600160a01b038316600090815260208190526040902055600254612292908261236e565b6002556040805182815290516000916001600160a01b038516917fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef9181900360200190a35050565b6001600160701b0316600160701b0290565b60006001600160701b0382166001600160e01b0384168161230957fe5b049392505050565b505050565b80820182811015610b87576040805162461bcd60e51b815260206004820152601460248201527f64732d6d6174682d6164642d6f766572666c6f77000000000000000000000000604482015290519081900360640190fd5b6000828211156123c5576040805162461bcd60e51b815260206004820152601e60248201527f536166654d6174683a207375627472616374696f6e206f766572666c6f770000604482015290519081900360640190fd5b5090039056fe556e697377617056323a20494e53554646494349454e545f4f55545055545f414d4f554e5445524332303a207472616e7366657220746f20746865207a65726f2061646472657373556e697377617056323a20494e53554646494349454e545f494e5055545f414d4f554e5445524332303a206275726e20616d6f756e7420657863656564732062616c616e636545524332303a20617070726f766520746f20746865207a65726f2061646472657373556e697377617056323a20494e53554646494349454e545f4c495155494449545945524332303a207472616e7366657220616d6f756e7420657863656564732062616c616e6365556e697377617056323a20494e53554646494349454e545f4c49515549444954595f4255524e4544556e697377617056323a20494e53554646494349454e545f4c49515549444954595f4d494e54454445524332303a207472616e7366657220616d6f756e74206578636565647320616c6c6f77616e636545524332303a206275726e2066726f6d20746865207a65726f206164647265737345524332303a207472616e736665722066726f6d20746865207a65726f206164647265737345524332303a20617070726f76652066726f6d20746865207a65726f206164647265737345524332303a2064656372656173656420616c6c6f77616e63652062656c6f77207a65726fa164736f6c6343000706000aa164736f6c6343000706000a";

export class UniswapV2Factory__factory extends ContractFactory {
  constructor(signer?: Signer) {
    super(_abi, _bytecode, signer);
  }

  deploy(
    _feeToSetter: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<UniswapV2Factory> {
    return super.deploy(
      _feeToSetter,
      overrides || {}
    ) as Promise<UniswapV2Factory>;
  }
  getDeployTransaction(
    _feeToSetter: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(_feeToSetter, overrides || {});
  }
  attach(address: string): UniswapV2Factory {
    return super.attach(address) as UniswapV2Factory;
  }
  connect(signer: Signer): UniswapV2Factory__factory {
    return super.connect(signer) as UniswapV2Factory__factory;
  }
  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): UniswapV2FactoryInterface {
    return new utils.Interface(_abi) as UniswapV2FactoryInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): UniswapV2Factory {
    return new Contract(address, _abi, signerOrProvider) as UniswapV2Factory;
  }
}
