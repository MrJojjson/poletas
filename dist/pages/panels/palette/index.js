import{map as c}from"../../../../_snowpack/pkg/ramda.js";import e from"../../../../_snowpack/pkg/react.js";import{useDispatch as r,useSelector as n}from"../../../../_snowpack/pkg/react-redux.js";import{useAddPage as p,useGetPages as i}from"../../../api/pages.js";import{uniquePageId as m}from"../../../utils/uniqueId.js";import{Page as g}from"./pages/page.js";export const Palette=()=>{const l=r(),{defined:d=[],active:u}=n(({pages:t})=>t),{onAddPage:s}=p(),{loading:o,error:f,pages:a=[]}=i();return console.log("pages",a),console.log("loading",o),e.createElement("div",{className:"palette"},e.createElement("div",{className:"pages"},c(t=>e.createElement(g,{...t}),a),e.createElement("button",{onClick:()=>{const t=m();s({title:"xczvxzcx"})}},"Add page")),e.createElement("div",{className:"page-content"}))};