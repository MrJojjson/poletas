import{useCallback as e,useState as o}from"../../_snowpack/pkg/react.js";const u={x:0,y:0};export const useDrag=()=>{const[r,a]=o(u),[c,t]=o(!1),g=e(({clientX:s,clientY:n,button:l,...p})=>{l!==0||!s||!n||(t(!0),a({x:s,y:n}))},[]),i=e(()=>{t(!1)},[]);return{pos:r,dragging:c,onDrag:g,onDragEnd:i}};