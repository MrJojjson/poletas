import p from"../../../../../_snowpack/pkg/react.js";import{useDispatch as tm,useSelector as am}from"../../../../../_snowpack/pkg/react-redux.js";import{menuPage as dm}from"../../../../redux/actions/pageAction.js";import{PageMenu as fm}from"./menu.js";export const Page=({title:e,id:t})=>{const r=tm(),{active:n,edit:o,menu:i,defined:a=[]}=am((({pages:e})=>e));return p.createElement("span",null,p.createElement("button",{onClick:()=>r(dm({id:t}))},":"),i===t&&p.createElement(fm,{id:t}))};