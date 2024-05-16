"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[1422],{47401:function(e,t,n){n.d(t,{o:function(){return a}}),n(88767);let a=async(e,t)=>await fetch("https://api-blast.reservoir.tools/users/".concat(t,"/tokens/v10?contract=").concat(e,"&limit=200"),{headers:{accept:"*/*","x-api-key":"29933ebc-4aa9-5b0f-a55c-8568f8668120"}}).then(e=>e.json()).then(e=>e.tokens.map(e=>{let t=e.token,n={groupId:0,id:"".concat(t.tokenId),isLiked:!1,name:t.name,imageUrl:t.image,imageThumbnailUrl:t.imageSmall,tokenId:Number(t.tokenId),traits:[],transactions:[]};return n}))},82050:function(e,t,n){n.d(t,{L:function(){return f},c:function(){return m}});var a=n(85893),i=n(47516),s=n(20238),r=n(41664),p=n.n(r),d=n(89583),l=n(57851),u=n(98716),o=n(69077);n(67294);var y=n(30710);let m={1:"https://etherscan.io",5:"https://goerli.etherscan.io",1337:"https://sepolia.etherscan.io",81457:"https://blastscan.io",168587773:"https://testnet.blastscan.io"},c=e=>{let t=m[u.Kj]||m[1];return"".concat(t,"/address/").concat(e)},T=e=>e&&(0,u.qZ)(e)?c(e):"/pool/".concat(e),f=e=>{let{address:t,label:n,short:r=!1,type:m,className:f="",hideAddressOnSelf:b=!1,showAvatar:x=!1,displaySelf:v=!0,useBlockie:w=!1,displayIcon:h=!1}=e,{address:g}=(0,o.mA)(),{data:N}=(0,o.F6)({address:t,enabled:!u.WA}),{data:M}=(0,o.c9)({name:N,enabled:x&&!u.WA}),k=t;return(r&&(k="".concat(t.slice(0,4),"...").concat(t.slice(t.length-4,t.length))),t===s.dE)?(0,a.jsx)("div",{className:(0,l.m)("font-light",f||""),children:k}):(0,a.jsx)(p(),{href:"pool"===m?T(t):c(t),target:"_blank",className:(0,l.m)("hover:text-white hover:underline font-light",f||""),suppressHydrationWarning:!0,children:(0,a.jsxs)("div",{className:"flex flex-row items-center justify-start gap-1",suppressHydrationWarning:!0,children:[x&&M?(0,a.jsx)("img",{src:M,alt:"ens_avatar",className:"w-8 h-8 rounded-full mr-1"}):w?(0,a.jsx)(y.Z,{seed:t,size:8,scale:4,className:"mr-1 rounded-full"}):void 0,"pool"===m?(0,a.jsx)(d.ein,{}):null,h?(0,a.jsx)("img",{src:"/static/etherscan-logo-circle-light.svg",alt:"img",className:"h-5 w-5 hover:scale-110"}):(()=>{if(n)return n;if(N)return r&&N.length>16?N.toLowerCase().slice(0,12)+"...":N.toLowerCase();let e=(null==g?void 0:g.toLowerCase())===t.toLowerCase();return(v&&e?"(You) ":"")+(e&&b?"":k)})()+" ",!h&&(0,a.jsx)(i.rpH,{})]})})}},29427:function(e,t,n){n.d(t,{$R:function(){return y},Fx:function(){return m},rC:function(){return c}});var a=n(85893),i=n(69077),s=n(67294),r=n(2593),p=n(7470),d=n(75840),l=n(66125),u=n(7692),o=n(30049);let y=r.O$.from("115792089237316195423570985008687907853269984665640564039457584007913129639935"),m=()=>{let[e,t]=(0,s.useState)(!1);return{approved:e,approvalChanged:t}},c=e=>{let{contractAddress:t,spender:n,approvalChanged:m,amount:c,numDigits:T=2,className:f="",requestMaxValue:b=!1,autoStart:x}=e,{address:v}=(0,i.mA)(),[w,h]=(0,s.useState)(!1),{refetch:g,isLoading:N,isSuccess:M,data:k}=(0,o.wxS)({address:t,args:[v,n],onSuccess:e=>{console.log("allowance",n,t,e);let a=(0,d.Md)(e),i=a.gte(c);h(i),m(i)},enabled:void 0!==v});(0,s.useEffect)(()=>{g()},[c]);let j={id:"allow_erc20_transfer",alertOnError:!0,addressOrName:t,contractInterface:o.emX,functionName:"approve",args:[n,b?y:c],enabled:void 0!==v,loadingText:"Getting Approval...",onTransactionSuccess:()=>{g(),(0,l.Hj)("tokenAllowance",{tokenAllowance:t,tokenAllowanceAmount:b?"MAX_VALUE":(0,d.dF)(c).toString(),spender:n})}};return(0,a.jsxs)(u.HD,{...j,autoStart:x&&M&&void 0!==k&&r.O$.from(k).lt(c),disabled:w&&N,loading:N,className:f,children:[!N&&w&&"Token Transfer Approved",!N&&!w&&(b?(0,a.jsx)(a.Fragment,{children:"Approve transfer of your tokens"}):(0,a.jsx)(p.Z,{label:"Approve transfer of",value:c,tokenAddress:t,size:4,removeTrailingZeroes:!0,numDigits:T||2})),N&&"Looking Up Approval"]})}},66411:function(e,t,n){n.d(t,{h:function(){return T},l:function(){return f}});var a=n(85893),i=n(88767),s=n(21419),r=n(2593),p=n(18726),d=n(67294),l=n(94184),u=n.n(l),o=n(47516),y=n(57851),m=n(70231),c=n(5434);let T=()=>{let[e,t]=(0,d.useState)();return{selectedTokenIds:e,onChange:t}},f=e=>{let{owner:t,contractAddress:n,selectedTokenIds:l=[],onChange:T=()=>{},multiSelect:f=!0,enabled:b=!0,size:x=40,fetcher:v=async(e,t)=>await (0,s.xk)(e,t,void 0),id:w="ownerTokens",tokenIsLocked:h,noTokensText:g,className:N,autoSelectAll:M=!1}=e,k=e=>h&&h(e.tokenId.toString()),j=()=>{l.length===(null==A?void 0:A.filter(e=>!k(e)).length)?T([]):T((A||[]).filter(e=>!k(e)).map(e=>r.O$.from(e.tokenId)))},{data:A,isLoading:I,isRefetching:E,refetch:C,isSuccess:F}=(0,i.useQuery)([w,n,t],async()=>await (v||s.xk)(n,t),{cacheTime:6e4,staleTime:6e4});return(0,d.useEffect)(()=>{M&&F&&j()},[F,M]),(0,a.jsxs)("div",{className:(0,y.m)("standard-stack standard-frame p-2 items-center justify-between",N||""),children:[I||A&&0!=A.length?(0,a.jsxs)("div",{className:"w-full grid gap-2 overflow-y-auto auto-rows-min no-scrollbar grid-cols-fill-sm p-1",children:[(I||E)&&Array.from(Array(6).keys()).map(e=>(0,a.jsx)("div",{className:"bg-slate-600 animate-pulse rounded-md min-h-[160px]"},"loading_item_".concat(e))),!(I||E)&&A&&A.sort((e,t)=>{if(!h)return 0;let n=k(e),a=k(t);return n&&a?0:n?1:a?-1:e.tokenId-t.tokenId}).map(e=>{let t=r.O$.from(e.tokenId),n=l.findIndex(e=>e.eq(t)),i=n>=0;return(0,a.jsxs)("div",{className:u()("relative overflow-hidden flex flex-col items-center rounded-md bg-glass",{"hover:bg-glass-focus hover:cursor-pointer":b&&!k(e),"outline-call hover:outline-white outline-2 outline":i}),onClick:()=>{!b||!T||k(e)||(i?T(l.filter(e=>!e.eq(t))):f?T([...l,t]):T([t]))},children:[(0,a.jsx)("img",{alt:"asset image",src:e.imageThumbnailUrl||e.imageUrl}),k(e)&&(0,a.jsx)("div",{className:"absolute m-1 p-1 w-32 h-32 bg-glass-focus rounded-md",children:(0,a.jsx)(o.Uh_,{})}),i&&(0,a.jsx)("div",{className:"absolute m-1 p-1 w-full h-full bg-glass-focus rounded-md text-call flex justify-end",children:(0,a.jsx)(m.uxi,{})}),(0,a.jsx)("div",{className:"label p-3 flex flex-row items-center justify-center",children:(0,a.jsxs)("span",{children:["#",e.tokenId]})})]},e.id)})]}):(0,a.jsx)("div",{className:"w-full p-4",children:g||"No tokens owned from this collection"}),!I&&b&&f&&(0,a.jsxs)("div",{className:"w-full flex flex-row gap-2 justify-evenly",children:[(0,a.jsxs)(p.z,{buttonType:p.L.NEUTRAL,onClick:()=>C(),children:[(0,a.jsx)(c.la_,{className:"font-bold",size:18})," Reload"]}),(0,a.jsx)(p.z,{buttonType:p.L.SECONDARY,onClick:j,children:l.length===(null==A?void 0:A.filter(e=>!k(e)).length)?"Unselect All (".concat(l.length,")"):"Select All (".concat(l.length,")")})]})]})}},61092:function(e,t,n){n.d(t,{Z:function(){return s}});var a=n(85893),i=n(42038);n(67294);let s=e=>{let{children:t,label:n,tooltip:s,isError:r,isLoading:p,data:d,disabled:l,className:u}=e;return(0,a.jsx)(i.H,{label:n,tooltip:s,className:u||"",children:p?(0,a.jsx)("div",{className:"min-w-[100px] min-h-[16px] rounded-md bg-slate-600 animate-pulse"}):l||r||void 0===d?"--":(0,a.jsx)("span",{className:"text-white",children:t(d)})})}},91422:function(e,t,n){n.d(t,{Q:function(){return k}});var a=n(85893),i=n(67294),s=n(47401),r=n(9279),p=n(66411),d=n(51649),l=n(18726),u=n(40491),o=n(75840),y=n(91812);let m=[{inputs:[{internalType:"address",name:"target",type:"address"}],name:"AddressEmptyCode",type:"error"},{inputs:[],name:"AlreadyLinked",type:"error"},{inputs:[],name:"CannotLink",type:"error"},{inputs:[{internalType:"address",name:"implementation",type:"address"}],name:"ERC1967InvalidImplementation",type:"error"},{inputs:[],name:"ERC1967NonPayable",type:"error"},{inputs:[],name:"FailedInnerCall",type:"error"},{inputs:[],name:"InvalidInitialization",type:"error"},{inputs:[],name:"NotInitializing",type:"error"},{inputs:[],name:"NotLinked",type:"error"},{inputs:[],name:"SenderNotBase",type:"error"},{inputs:[],name:"SenderNotDeployer",type:"error"},{inputs:[],name:"TransferToNonERC721ReceiverImplementer",type:"error"},{inputs:[],name:"UUPSUnauthorizedCallContext",type:"error"},{inputs:[{internalType:"bytes32",name:"slot",type:"bytes32"}],name:"UUPSUnsupportedProxiableUUID",type:"error"},{inputs:[],name:"Unauthorized",type:"error"},{anonymous:!1,inputs:[{indexed:!0,internalType:"address",name:"owner",type:"address"},{indexed:!0,internalType:"address",name:"account",type:"address"},{indexed:!0,internalType:"uint256",name:"id",type:"uint256"}],name:"Approval",type:"event"},{anonymous:!1,inputs:[{indexed:!0,internalType:"address",name:"owner",type:"address"},{indexed:!0,internalType:"address",name:"operator",type:"address"},{indexed:!1,internalType:"bool",name:"isApproved",type:"bool"}],name:"ApprovalForAll",type:"event"},{anonymous:!1,inputs:[{indexed:!0,internalType:"uint256",name:"id",type:"uint256"},{indexed:!0,internalType:"address",name:"from",type:"address"},{indexed:!1,internalType:"uint256",name:"price",type:"uint256"}],name:"Bid",type:"event"},{anonymous:!1,inputs:[{indexed:!0,internalType:"uint256",name:"id",type:"uint256"},{indexed:!0,internalType:"address",name:"from",type:"address"},{indexed:!0,internalType:"address",name:"to",type:"address"},{indexed:!1,internalType:"uint256",name:"price",type:"uint256"}],name:"Bought",type:"event"},{anonymous:!1,inputs:[{indexed:!0,internalType:"uint256",name:"id",type:"uint256"},{indexed:!0,internalType:"address",name:"from",type:"address"}],name:"CancelBid",type:"event"},{anonymous:!1,inputs:[{indexed:!0,internalType:"uint256",name:"id",type:"uint256"},{indexed:!0,internalType:"address",name:"owner",type:"address"}],name:"CancelOffer",type:"event"},{anonymous:!1,inputs:[{indexed:!0,internalType:"uint256",name:"idX",type:"uint256"},{indexed:!0,internalType:"uint256",name:"idY",type:"uint256"},{indexed:!1,internalType:"uint256",name:"exchangeFee",type:"uint256"}],name:"Exchange",type:"event"},{anonymous:!1,inputs:[{indexed:!1,internalType:"uint64",name:"version",type:"uint64"}],name:"Initialized",type:"event"},{anonymous:!1,inputs:[{indexed:!0,internalType:"uint256",name:"id",type:"uint256"},{indexed:!0,internalType:"address",name:"to",type:"address"},{indexed:!1,internalType:"uint256",name:"minPrice",type:"uint256"}],name:"Offer",type:"event"},{anonymous:!1,inputs:[{indexed:!0,internalType:"address",name:"oldOwner",type:"address"},{indexed:!0,internalType:"address",name:"newOwner",type:"address"}],name:"OwnershipTransferred",type:"event"},{anonymous:!1,inputs:[{indexed:!0,internalType:"address",name:"from",type:"address"},{indexed:!0,internalType:"address",name:"to",type:"address"},{indexed:!0,internalType:"uint256",name:"id",type:"uint256"}],name:"Transfer",type:"event"},{anonymous:!1,inputs:[{indexed:!0,internalType:"address",name:"owner",type:"address"},{indexed:!0,internalType:"uint256",name:"id",type:"uint256"},{indexed:!1,internalType:"bool",name:"lockStatus",type:"bool"}],name:"UpdateLockState",type:"event"},{anonymous:!1,inputs:[{indexed:!0,internalType:"address",name:"implementation",type:"address"}],name:"Upgraded",type:"event"},{stateMutability:"payable",type:"fallback"},{inputs:[],name:"UPGRADE_INTERFACE_VERSION",outputs:[{internalType:"string",name:"",type:"string"}],stateMutability:"view",type:"function"},{inputs:[{components:[{internalType:"uint256",name:"id",type:"uint256"},{internalType:"uint256",name:"price",type:"uint256"}],internalType:"struct DN404Mirror.NFTOrder[]",name:"orders",type:"tuple[]"}],name:"acceptBid",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[{components:[{internalType:"uint256",name:"id",type:"uint256"},{internalType:"uint256",name:"price",type:"uint256"}],internalType:"struct DN404Mirror.NFTOrder[]",name:"orders",type:"tuple[]"}],name:"acceptOffer",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"address",name:"spender",type:"address"},{internalType:"uint256",name:"id",type:"uint256"}],name:"approve",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"address",name:"nftOwner",type:"address"}],name:"balanceOf",outputs:[{internalType:"uint256",name:"result",type:"uint256"}],stateMutability:"view",type:"function"},{inputs:[],name:"baseERC20",outputs:[{internalType:"address",name:"base",type:"address"}],stateMutability:"view",type:"function"},{inputs:[],name:"baseERC721",outputs:[{internalType:"address",name:"",type:"address"}],stateMutability:"view",type:"function"},{inputs:[{components:[{internalType:"uint256",name:"id",type:"uint256"},{internalType:"uint256",name:"price",type:"uint256"}],internalType:"struct DN404Mirror.NFTOrder[]",name:"orders",type:"tuple[]"}],name:"bidForBuy",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"uint256[]",name:"ids",type:"uint256[]"}],name:"cancelBid",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"uint256[]",name:"ids",type:"uint256[]"}],name:"cancelOffer",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"uint256",name:"idX",type:"uint256"},{internalType:"uint256",name:"idY",type:"uint256"}],name:"exchange",outputs:[{internalType:"uint256",name:"exchangeFee",type:"uint256"}],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"uint256",name:"id",type:"uint256"}],name:"getApproved",outputs:[{internalType:"address",name:"",type:"address"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"address",name:"__baseERC721",type:"address"}],name:"initialize",outputs:[],stateMutability:"payable",type:"function"},{inputs:[{internalType:"address",name:"nftOwner",type:"address"},{internalType:"address",name:"operator",type:"address"}],name:"isApprovedForAll",outputs:[{internalType:"bool",name:"result",type:"bool"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"address",name:"account",type:"address"},{internalType:"uint256",name:"begin",type:"uint256"},{internalType:"uint256",name:"end",type:"uint256"}],name:"lockedIds",outputs:[{internalType:"uint256[]",name:"",type:"uint256[]"}],stateMutability:"view",type:"function"},{inputs:[],name:"name",outputs:[{internalType:"string",name:"result",type:"string"}],stateMutability:"view",type:"function"},{inputs:[{components:[{internalType:"uint256",name:"id",type:"uint256"},{internalType:"uint256",name:"price",type:"uint256"}],internalType:"struct DN404Mirror.NFTOrder[]",name:"orders",type:"tuple[]"},{internalType:"address",name:"sellTo",type:"address"}],name:"offerForSale",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"address",name:"",type:"address"},{internalType:"address",name:"",type:"address"},{internalType:"uint256",name:"",type:"uint256"},{internalType:"bytes",name:"",type:"bytes"}],name:"onERC721Received",outputs:[{internalType:"bytes4",name:"",type:"bytes4"}],stateMutability:"pure",type:"function"},{inputs:[{internalType:"address",name:"account",type:"address"},{internalType:"uint256",name:"begin",type:"uint256"},{internalType:"uint256",name:"end",type:"uint256"}],name:"ownedIds",outputs:[{internalType:"uint256[]",name:"",type:"uint256[]"}],stateMutability:"view",type:"function"},{inputs:[],name:"owner",outputs:[{internalType:"address",name:"",type:"address"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"uint256",name:"id",type:"uint256"}],name:"ownerAt",outputs:[{internalType:"address",name:"result",type:"address"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"uint256",name:"id",type:"uint256"}],name:"ownerOf",outputs:[{internalType:"address",name:"result",type:"address"}],stateMutability:"view",type:"function"},{inputs:[],name:"proxiableUUID",outputs:[{internalType:"bytes32",name:"",type:"bytes32"}],stateMutability:"view",type:"function"},{inputs:[],name:"pullOwner",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"address",name:"from",type:"address"},{internalType:"address",name:"to",type:"address"},{internalType:"uint256",name:"id",type:"uint256"}],name:"safeTransferFrom",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"address",name:"from",type:"address"},{internalType:"address",name:"to",type:"address"},{internalType:"uint256",name:"id",type:"uint256"},{internalType:"bytes",name:"data",type:"bytes"}],name:"safeTransferFrom",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"address",name:"operator",type:"address"},{internalType:"bool",name:"approved",type:"bool"}],name:"setApprovalForAll",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"bytes4",name:"interfaceId",type:"bytes4"}],name:"supportsInterface",outputs:[{internalType:"bool",name:"result",type:"bool"}],stateMutability:"view",type:"function"},{inputs:[],name:"symbol",outputs:[{internalType:"string",name:"result",type:"string"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"uint256",name:"id",type:"uint256"}],name:"tokenURI",outputs:[{internalType:"string",name:"result",type:"string"}],stateMutability:"view",type:"function"},{inputs:[],name:"totalSupply",outputs:[{internalType:"uint256",name:"result",type:"uint256"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"address",name:"from",type:"address"},{internalType:"address",name:"to",type:"address"},{internalType:"uint256",name:"id",type:"uint256"}],name:"transferFrom",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"uint256[]",name:"ids",type:"uint256[]"}],name:"unwrapBatch",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"uint256[]",name:"ids",type:"uint256[]"},{internalType:"bool",name:"lock",type:"bool"}],name:"updateLockState",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"address",name:"newImplementation",type:"address"},{internalType:"bytes",name:"data",type:"bytes"}],name:"upgradeToAndCall",outputs:[],stateMutability:"payable",type:"function"},{inputs:[{internalType:"uint256[]",name:"ids",type:"uint256[]"}],name:"wrapBatch",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"uint256[]",name:"ids",type:"uint256[]"},{internalType:"bool",name:"lock",type:"bool"}],name:"wrapBatch",outputs:[],stateMutability:"nonpayable",type:"function"},{stateMutability:"payable",type:"receive"}];var c=n(30049),T=n(22852),f=n(61092),b=n(82050),x=n(13331),v=n(29427),w=n(2593),h=n(48289),g=n(11163),N=n(12536);let M={ogNFTAddress:"0xda0005f01654bd92ebec85cf82ed1a4e2b3ce70f",wrapper:"0xc8d8d820f88df3bd48c4f8e95bca3b994b73c699",mirrorWrapper:"0xb0a19fa556ab92e51ea7969ef5fefef5a357870c",vaultAddress:"0xc8061516994aa5d884fdf6385c6b64e7b9e93014",vaultName:"wmBLASTOPIANS"},k=()=>{var e,t;let n=(0,x.f)(),k=(0,g.useRouter)(),{address:j}=(0,N.x)(),A=(0,p.h)(),I=(0,p.h)(),E=(0,c.Aqq)({address:M.ogNFTAddress,args:[j||r.d],enabled:!!j}),C=(0,c.Aqq)({address:M.mirrorWrapper,args:[j||r.d],enabled:!!j}),F=(0,c.cYP)({address:M.wrapper,args:[j||r.d],enabled:!!j}),S=()=>{var e,t;return((null===(e=A.selectedTokenIds)||void 0===e?void 0:e.length)||0)+((null===(t=I.selectedTokenIds)||void 0===t?void 0:t.length)||0)},R=()=>S()>0,O=()=>{var e;return((null===(e=A.selectedTokenIds)||void 0===e?void 0:e.length)||0)>0};(0,i.useEffect)(()=>{(null==A?void 0:A.selectedTokenIds)&&A.selectedTokenIds.length>0&&I.onChange([])},[A.selectedTokenIds]),(0,i.useEffect)(()=>{(null==I?void 0:I.selectedTokenIds)&&I.selectedTokenIds.length>0&&A.onChange([])},[I.selectedTokenIds]);let U=[],L=[];if(O()){let e={name:"Allow NFT Transfers",description:"Allow the transfer of your NFTs to be wrapped",stepRenderer:(e,t)=>(0,a.jsx)(y._,{contractAddress:M.ogNFTAddress,to:M.mirrorWrapper,singleToken:!1,autoStart:!0,className:"capitalize text-xs w-full",approvalChanged:t=>{t&&e()}})};U.push(e),L.push(e)}if(O()){let e={name:"Fractionalize NFTs",description:(0,a.jsxs)("ul",{className:"list-disc px-4 text-sm",children:[(0,a.jsx)("li",{children:"Receiving the same NFT that was originally staked is not guaranteed."}),(0,a.jsxs)("li",{children:["If your Blastopian is already staked on the Blastopian site,",(0,a.jsx)("br",{}),"you will not lose your points streak when staking on Wasabi."]})]}),button:{id:"wrapNFT",loadingText:"Fractionalizing...",addressOrName:M.mirrorWrapper,functionName:"wrapBatch",contractInterface:m,args:[A.selectedTokenIds],enabled:R()}};U.push(e),L.push(e)}else U.push({name:"Redeem OG NFTs",description:"Redeem OG NFTs",button:{id:"unwrapNFT",loadingText:"Redeeming...",addressOrName:M.mirrorWrapper,functionName:"unwrapBatch",contractInterface:m,args:[I.selectedTokenIds||[]],enabled:R()}});return L.push({name:"Allow Token Transfers",description:"Allow the transfer of your token to the vault",stepRenderer:(e,t)=>(0,a.jsx)(v.rC,{autoStart:!0,spender:M.vaultAddress,requestMaxValue:!0,amount:w.O$.from((0,T.v)((1e3*S()).toString(),18)),contractAddress:M.wrapper,approvalChanged:t=>{t&&e()},className:"capitalize text-xs w-full"})}),L.push({name:"Stake Tokens",description:"Stake Tokens",button:{id:"deposit",loadingText:"Depositing...",addressOrName:M.vaultAddress,functionName:"deposit",contractInterface:h.F,args:[(0,T.v)((1e3*S()).toString(),18),j],enabled:!!j}}),(0,a.jsxs)("div",{className:"w-full standard-stack !gap-4 items-center justify-center p-4",children:[(0,a.jsx)("h1",{className:"text-2xl",children:"Fractionalize & Stake"}),(0,a.jsx)("div",{className:"text-lg",children:"Earn Blast Gold, Wasabi Points, Blastopian Points and yield"}),n&&(0,a.jsxs)(a.Fragment,{children:[(0,a.jsxs)("div",{className:"w-full responsive-flex gap-4 items-center justify-center max-w-[1000px]",children:[(0,a.jsxs)("div",{className:"standard-stack",children:[(0,a.jsxs)("div",{className:"standard-frame standard-stack p-4 min-h-[110px]",children:[(0,a.jsxs)("div",{className:"flex flex-row gap-2 items-center justify-between",children:[(0,a.jsx)("span",{children:"Blastopians - ERC721"}),(0,a.jsx)(b.L,{displayIcon:!0,address:M.ogNFTAddress,label:"Block Explorer",className:"text-neutral-content text-xs"})]}),(0,a.jsx)(f.Z,{label:"Num Owned",className:"text-sm",isLoading:E.isLoading,isError:E.isError,data:E.data,disabled:!j,children:e=>(0,a.jsx)("span",{className:"flex flex-row items-center text-white text-md",children:e.toString()||0})})]}),(0,a.jsx)(p.l,{...A,id:"og_owned",noTokensText:"No ERC721 tokens found.",className:"w-[300px] h-[300px]",owner:j||r.d,contractAddress:M.ogNFTAddress,fetcher:s.o,autoSelectAll:!0})]}),((null===(e=A.selectedTokenIds)||void 0===e?void 0:e.length)||0)>0?(0,a.jsx)(d.ntD,{size:30}):((null===(t=I.selectedTokenIds)||void 0===t?void 0:t.length)||0)>0?(0,a.jsx)(d.D_,{size:30}):(0,a.jsx)(d.F_J,{size:30}),(0,a.jsxs)("div",{className:"standard-stack",children:[(0,a.jsxs)("div",{className:"standard-frame standard-stack p-4 min-h-[110px]",children:[(0,a.jsxs)("div",{className:"flex flex-row gap-2 items-center justify-between",children:[(0,a.jsx)("span",{children:"mBlastopians - BT404"}),(0,a.jsx)(b.L,{displayIcon:!0,address:M.mirrorWrapper,label:"Block Explorer",className:"text-neutral-content text-xs"})]}),(0,a.jsx)(f.Z,{label:"Token Balance",className:"text-sm",isLoading:F.isLoading,isError:F.isError,data:F.data,disabled:!j,children:e=>(0,a.jsx)("span",{className:"flex flex-row items-center text-white text-md",children:(0,o.Bw)(e.valueOf()).toLocaleString()})}),(0,a.jsx)(f.Z,{label:"Num NFTs Owned",className:"text-sm",isLoading:C.isLoading,isError:C.isError,data:C.data,disabled:!j,children:e=>(0,a.jsx)("span",{className:"flex flex-row items-center text-white text-md",children:e.toString()})})]}),(0,a.jsx)(p.l,{...I,id:"wrapped",noTokensText:"No BT404 tokens found.",className:"w-[300px] h-[300px]",owner:j||r.d,contractAddress:M.mirrorWrapper,fetcher:s.o})]})]}),(0,a.jsx)("div",{className:"flex flex-row gap-2 items-center",children:R()?(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(u.h,{buttonType:l.L.SECONDARY,id:R()?"empty":O()?"fractionalize":"redeem",title:R()?O()?"Fractionalize":"Redeem NFTs":"Select NFTs",transactionChain:U,enabled:R(),onSuccess:()=>{setTimeout(()=>window.location.reload(),2e3)}}),(0,a.jsx)(u.h,{buttonType:l.L.PRIMARY,id:R()?"empty2":O()?"Fractionalize & Stake":"Stake ".concat(S()," NFT").concat(S()>1?"s":""),title:R()?O()?"Fractionalize & Stake":"Stake ".concat(S()," NFT").concat(S()>1?"s":""):"Select NFTs",transactionChain:L,enabled:R(),onSuccess:()=>{setTimeout(()=>{k.push("/vaults?vault=".concat(M.vaultName))},2e3)}})]}):(0,a.jsx)("div",{className:"wasabi-button wasabi-button-neutral",children:"Select NFTs To Start"})})]})]})}},48289:function(e,t,n){n.d(t,{F:function(){return a}});let a=[{inputs:[{internalType:"address",name:"target",type:"address"}],name:"AddressEmptyCode",type:"error"},{inputs:[{internalType:"address",name:"account",type:"address"}],name:"AddressInsufficientBalance",type:"error"},{inputs:[],name:"CallerNotPool",type:"error"},{inputs:[],name:"CannotDepositEth",type:"error"},{inputs:[{internalType:"address",name:"implementation",type:"address"}],name:"ERC1967InvalidImplementation",type:"error"},{inputs:[],name:"ERC1967NonPayable",type:"error"},{inputs:[{internalType:"address",name:"spender",type:"address"},{internalType:"uint256",name:"allowance",type:"uint256"},{internalType:"uint256",name:"needed",type:"uint256"}],name:"ERC20InsufficientAllowance",type:"error"},{inputs:[{internalType:"address",name:"sender",type:"address"},{internalType:"uint256",name:"balance",type:"uint256"},{internalType:"uint256",name:"needed",type:"uint256"}],name:"ERC20InsufficientBalance",type:"error"},{inputs:[{internalType:"address",name:"approver",type:"address"}],name:"ERC20InvalidApprover",type:"error"},{inputs:[{internalType:"address",name:"receiver",type:"address"}],name:"ERC20InvalidReceiver",type:"error"},{inputs:[{internalType:"address",name:"sender",type:"address"}],name:"ERC20InvalidSender",type:"error"},{inputs:[{internalType:"address",name:"spender",type:"address"}],name:"ERC20InvalidSpender",type:"error"},{inputs:[{internalType:"address",name:"receiver",type:"address"},{internalType:"uint256",name:"assets",type:"uint256"},{internalType:"uint256",name:"max",type:"uint256"}],name:"ERC4626ExceededMaxDeposit",type:"error"},{inputs:[{internalType:"address",name:"receiver",type:"address"},{internalType:"uint256",name:"shares",type:"uint256"},{internalType:"uint256",name:"max",type:"uint256"}],name:"ERC4626ExceededMaxMint",type:"error"},{inputs:[{internalType:"address",name:"owner",type:"address"},{internalType:"uint256",name:"shares",type:"uint256"},{internalType:"uint256",name:"max",type:"uint256"}],name:"ERC4626ExceededMaxRedeem",type:"error"},{inputs:[{internalType:"address",name:"owner",type:"address"},{internalType:"uint256",name:"assets",type:"uint256"},{internalType:"uint256",name:"max",type:"uint256"}],name:"ERC4626ExceededMaxWithdraw",type:"error"},{inputs:[],name:"EthTransferFailed",type:"error"},{inputs:[],name:"FailedInnerCall",type:"error"},{inputs:[],name:"InvalidEthAmount",type:"error"},{inputs:[],name:"InvalidInitialization",type:"error"},{inputs:[],name:"MathOverflowedMulDiv",type:"error"},{inputs:[],name:"NotInitializing",type:"error"},{inputs:[{internalType:"address",name:"owner",type:"address"}],name:"OwnableInvalidOwner",type:"error"},{inputs:[{internalType:"address",name:"account",type:"address"}],name:"OwnableUnauthorizedAccount",type:"error"},{inputs:[],name:"ReentrancyGuardReentrantCall",type:"error"},{inputs:[{internalType:"address",name:"token",type:"address"}],name:"SafeERC20FailedOperation",type:"error"},{inputs:[],name:"UUPSUnauthorizedCallContext",type:"error"},{inputs:[{internalType:"bytes32",name:"slot",type:"bytes32"}],name:"UUPSUnsupportedProxiableUUID",type:"error"},{anonymous:!1,inputs:[{indexed:!0,internalType:"address",name:"owner",type:"address"},{indexed:!0,internalType:"address",name:"spender",type:"address"},{indexed:!1,internalType:"uint256",name:"value",type:"uint256"}],name:"Approval",type:"event"},{anonymous:!1,inputs:[{indexed:!0,internalType:"address",name:"sender",type:"address"},{indexed:!0,internalType:"address",name:"owner",type:"address"},{indexed:!1,internalType:"uint256",name:"assets",type:"uint256"},{indexed:!1,internalType:"uint256",name:"shares",type:"uint256"}],name:"Deposit",type:"event"},{anonymous:!1,inputs:[{indexed:!1,internalType:"uint64",name:"version",type:"uint64"}],name:"Initialized",type:"event"},{anonymous:!1,inputs:[{indexed:!0,internalType:"address",name:"previousOwner",type:"address"},{indexed:!0,internalType:"address",name:"newOwner",type:"address"}],name:"OwnershipTransferred",type:"event"},{anonymous:!1,inputs:[{indexed:!0,internalType:"address",name:"from",type:"address"},{indexed:!0,internalType:"address",name:"to",type:"address"},{indexed:!1,internalType:"uint256",name:"value",type:"uint256"}],name:"Transfer",type:"event"},{anonymous:!1,inputs:[{indexed:!0,internalType:"address",name:"implementation",type:"address"}],name:"Upgraded",type:"event"},{anonymous:!1,inputs:[{indexed:!0,internalType:"address",name:"sender",type:"address"},{indexed:!0,internalType:"address",name:"receiver",type:"address"},{indexed:!0,internalType:"address",name:"owner",type:"address"},{indexed:!1,internalType:"uint256",name:"assets",type:"uint256"},{indexed:!1,internalType:"uint256",name:"shares",type:"uint256"}],name:"Withdraw",type:"event"},{inputs:[],name:"UPGRADE_INTERFACE_VERSION",outputs:[{internalType:"string",name:"",type:"string"}],stateMutability:"view",type:"function"},{inputs:[],name:"addressProvider",outputs:[{internalType:"contract IAddressProvider",name:"",type:"address"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"address",name:"owner",type:"address"},{internalType:"address",name:"spender",type:"address"}],name:"allowance",outputs:[{internalType:"uint256",name:"",type:"uint256"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"address",name:"spender",type:"address"},{internalType:"uint256",name:"value",type:"uint256"}],name:"approve",outputs:[{internalType:"bool",name:"",type:"bool"}],stateMutability:"nonpayable",type:"function"},{inputs:[],name:"asset",outputs:[{internalType:"address",name:"",type:"address"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"address",name:"account",type:"address"}],name:"balanceOf",outputs:[{internalType:"uint256",name:"",type:"uint256"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"uint256",name:"shares",type:"uint256"}],name:"convertToAssets",outputs:[{internalType:"uint256",name:"",type:"uint256"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"uint256",name:"assets",type:"uint256"}],name:"convertToShares",outputs:[{internalType:"uint256",name:"",type:"uint256"}],stateMutability:"view",type:"function"},{inputs:[],name:"decimals",outputs:[{internalType:"uint8",name:"",type:"uint8"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"uint256",name:"assets",type:"uint256"},{internalType:"address",name:"receiver",type:"address"}],name:"deposit",outputs:[{internalType:"uint256",name:"",type:"uint256"}],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"address",name:"receiver",type:"address"}],name:"depositEth",outputs:[{internalType:"uint256",name:"",type:"uint256"}],stateMutability:"payable",type:"function"},{inputs:[],name:"getAsset",outputs:[{internalType:"address",name:"",type:"address"}],stateMutability:"view",type:"function"},{inputs:[],name:"getPoolAddress",outputs:[{internalType:"address",name:"",type:"address"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"contract IWasabiPerps",name:"_pool",type:"address"},{internalType:"contract IAddressProvider",name:"_addressProvider",type:"address"},{internalType:"contract IERC20",name:"_asset",type:"address"},{internalType:"string",name:"name",type:"string"},{internalType:"string",name:"symbol",type:"string"}],name:"initialize",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"address",name:"",type:"address"}],name:"maxDeposit",outputs:[{internalType:"uint256",name:"",type:"uint256"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"address",name:"",type:"address"}],name:"maxMint",outputs:[{internalType:"uint256",name:"",type:"uint256"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"address",name:"owner",type:"address"}],name:"maxRedeem",outputs:[{internalType:"uint256",name:"",type:"uint256"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"address",name:"owner",type:"address"}],name:"maxWithdraw",outputs:[{internalType:"uint256",name:"",type:"uint256"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"uint256",name:"shares",type:"uint256"},{internalType:"address",name:"receiver",type:"address"}],name:"mint",outputs:[{internalType:"uint256",name:"",type:"uint256"}],stateMutability:"nonpayable",type:"function"},{inputs:[],name:"name",outputs:[{internalType:"string",name:"",type:"string"}],stateMutability:"view",type:"function"},{inputs:[],name:"owner",outputs:[{internalType:"address",name:"",type:"address"}],stateMutability:"view",type:"function"},{inputs:[],name:"pool",outputs:[{internalType:"contract IWasabiPerps",name:"",type:"address"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"uint256",name:"assets",type:"uint256"}],name:"previewDeposit",outputs:[{internalType:"uint256",name:"",type:"uint256"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"uint256",name:"shares",type:"uint256"}],name:"previewMint",outputs:[{internalType:"uint256",name:"",type:"uint256"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"uint256",name:"shares",type:"uint256"}],name:"previewRedeem",outputs:[{internalType:"uint256",name:"",type:"uint256"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"uint256",name:"assets",type:"uint256"}],name:"previewWithdraw",outputs:[{internalType:"uint256",name:"",type:"uint256"}],stateMutability:"view",type:"function"},{inputs:[],name:"proxiableUUID",outputs:[{internalType:"bytes32",name:"",type:"bytes32"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"uint256",name:"_interestAmount",type:"uint256"}],name:"recordInterestEarned",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"uint256",name:"_amountLost",type:"uint256"}],name:"recordLoss",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"uint256",name:"shares",type:"uint256"},{internalType:"address",name:"receiver",type:"address"},{internalType:"address",name:"owner",type:"address"}],name:"redeem",outputs:[{internalType:"uint256",name:"",type:"uint256"}],stateMutability:"nonpayable",type:"function"},{inputs:[],name:"renounceOwnership",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[],name:"symbol",outputs:[{internalType:"string",name:"",type:"string"}],stateMutability:"view",type:"function"},{inputs:[],name:"totalAssetValue",outputs:[{internalType:"uint256",name:"",type:"uint256"}],stateMutability:"view",type:"function"},{inputs:[],name:"totalAssets",outputs:[{internalType:"uint256",name:"",type:"uint256"}],stateMutability:"view",type:"function"},{inputs:[],name:"totalSupply",outputs:[{internalType:"uint256",name:"",type:"uint256"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"address",name:"to",type:"address"},{internalType:"uint256",name:"value",type:"uint256"}],name:"transfer",outputs:[{internalType:"bool",name:"",type:"bool"}],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"address",name:"from",type:"address"},{internalType:"address",name:"to",type:"address"},{internalType:"uint256",name:"value",type:"uint256"}],name:"transferFrom",outputs:[{internalType:"bool",name:"",type:"bool"}],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"address",name:"newOwner",type:"address"}],name:"transferOwnership",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"address",name:"newImplementation",type:"address"},{internalType:"bytes",name:"data",type:"bytes"}],name:"upgradeToAndCall",outputs:[],stateMutability:"payable",type:"function"},{inputs:[{internalType:"uint256",name:"assets",type:"uint256"},{internalType:"address",name:"receiver",type:"address"},{internalType:"address",name:"owner",type:"address"}],name:"withdraw",outputs:[{internalType:"uint256",name:"",type:"uint256"}],stateMutability:"nonpayable",type:"function"}]}}]);