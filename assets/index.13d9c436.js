import{r as e,j as t,a as n,T as a,R as o,L as s,W as r,C as i,D as l,t as c,b as u,c as d}from"./vendor.efeaccdc.js";!function(){const e=document.createElement("link").relList;if(!(e&&e.supports&&e.supports("modulepreload"))){for(const e of document.querySelectorAll('link[rel="modulepreload"]'))t(e);new MutationObserver((e=>{for(const n of e)if("childList"===n.type)for(const e of n.addedNodes)"LINK"===e.tagName&&"modulepreload"===e.rel&&t(e)})).observe(document,{childList:!0,subtree:!0})}function t(e){if(e.ep)return;e.ep=!0;const t=function(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerpolicy&&(t.referrerPolicy=e.referrerpolicy),"use-credentials"===e.crossorigin?t.credentials="include":"anonymous"===e.crossorigin?t.credentials="omit":t.credentials="same-origin",t}(e);fetch(e.href,t)}}();var m=[{inputs:[],stateMutability:"payable",type:"constructor"},{anonymous:!1,inputs:[{indexed:!0,internalType:"address",name:"from",type:"address"},{indexed:!1,internalType:"uint256",name:"timestamp",type:"uint256"},{indexed:!1,internalType:"string",name:"message",type:"string"}],name:"NewWave",type:"event"},{inputs:[],name:"getAllWaves",outputs:[{components:[{internalType:"address",name:"waver",type:"address"},{internalType:"string",name:"message",type:"string"},{internalType:"uint256",name:"timestamp",type:"uint256"}],internalType:"struct WavePortal.Wave[]",name:"",type:"tuple[]"}],stateMutability:"view",type:"function"},{inputs:[],name:"getTotalWaves",outputs:[{internalType:"uint256",name:"",type:"uint256"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"address",name:"",type:"address"}],name:"lastWavedAt",outputs:[{internalType:"uint256",name:"",type:"uint256"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"string",name:"_message",type:"string"}],name:"wave",outputs:[],stateMutability:"nonpayable",type:"function"}];const p=()=>n("svg",{className:"warning-icon",viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg",children:n("path",{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"})}),h=()=>{const[u,d]=e.exports.useState(),[h,y]=e.exports.useState(),[g,v]=e.exports.useState(!1),[w,f]=e.exports.useState("Hello"),[b,k]=e.exports.useState([]),[x,T]=e.exports.useState(),C=e.exports.useRef();e.exports.useEffect((()=>{(async()=>{const{ethereum:e}=window;if(!e)return void console.log("Make sure you have metamask!");console.log("We have the ethereum object",e);const t=await e.request({method:"eth_accounts"});if(0!==t.length){const e=t[0];console.log("Found an authorized account:",e),d(e)}else console.log("No authorized account found")})(),(async()=>{try{const{ethereum:e}=window;if(!e)return void console.log("Ethereum object doesn't exist!");const t=new r(e).getSigner(),n=new i("0xB8b8EAe71e659C3265714Cf3b944FB6153A3C397",m,t),a=await n.getAllWaves();console.log("Retrieved all waves...",a);const o=[];a.forEach((e=>{o.push({address:e.waver,timestamp:new Date(1e3*e.timestamp.toNumber()),message:e.message})})),k(o)}catch(e){console.log(e)}})()}),[]);const S=()=>t(l,{className:"modal",isOpen:g,onDismiss:()=>v(!1),children:[n("input",{type:"textarea",onChange:e=>f(e.target.value),value:w}),n("button",{onClick:()=>{(async()=>{let e;try{const{ethereum:a}=window;if(!a)return void console.log("Ethereum object doesn't exist!");const o=new r(a).getSigner(),s=new i("0xB8b8EAe71e659C3265714Cf3b944FB6153A3C397",m,o);let l=await s.getTotalWaves();console.log("Retrieved total wave count...",l.toNumber()),y(!0),e=await s.wave(w,{gasLimit:3e5}),c.info(t("div",{children:["Transaction Started. See"," ",n("a",{target:"_blank",rel:"noopener",href:`https://rinkeby.etherscan.io/tx/${e.hash}`,children:"Rinkeby Etherscan"})]})),console.log("Mining...",e.hash),await e.wait(),console.log("Mined!",e.hash),y(!1),null==C||C.current.rewardMe(),setTimeout((()=>{window.location.reload()}),3e3),l=await s.getTotalWaves(),console.log("Retrieved total wave count...",l.toNumber())}catch(a){null==C||C.current.punishMe(),T(e.hash),c.error(t("div",{children:["Transaction Failed. See"," ",n("a",{target:"_blank",rel:"noopener",href:`https://rinkeby.etherscan.io/tx/${e.hash}`,children:"Rinkeby Etherscan"})]})),console.log(a)}})(),v(!1)},children:"Send"})]});return t("main",{className:"home",children:[n(a,{position:"top-center",hideProgressBar:!0,closeOnClick:!0,theme:"dark",autoClose:!1}),n("h1",{children:"Hey there"}),n("h3",{children:"I am Saihaj. Connect your Ethereum wallet and wave at me."}),n(S,{}),u?n(o,{ref:C,type:"memphis",children:n("div",{className:"waveButton",children:h?x?t("div",{className:"transaction-error",children:[n(p,{}),"See on"," ",n("a",{target:"_blank",rel:"noopener",href:`https://rinkeby.etherscan.io/tx/${x}`,children:"Rinkeby Etherscan"})]}):n(s,{width:60,type:"Circles",color:"var(--light-primary)"}):n("button",{onClick:()=>v(!0),children:"Wave at me"})})}):n("button",{ref:C,className:"waveButton",onClick:async()=>{try{const{ethereum:e}=window;if(!e)return void alert("Get MetaMask!");const t=await e.request({method:"eth_requestAccounts"});console.log("Connected",t[0]),d(t[0])}catch(e){console.log(e)}},children:"Connect Wallet"}),n("div",{className:"waves",children:b.map(((e,n)=>t("div",{children:[e.address," said ",e.message," on"," ",e.timestamp.toLocaleDateString()]},n)))})]})};u.render(n(d.StrictMode,{children:n(h,{})}),document.getElementById("root"));