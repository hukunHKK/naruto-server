import{d as i,D as p,c as d,a as r,w as c,o as m,W as e,V as o,_ as u}from"./index-3baf4151.js";import{t as g,v as f}from"./el-table-column-75fc0e2e.js";import{g as v}from"./login-cc933f12.js";import{g as b}from"./dateFormat-99d748d6.js";import"./request-e3dd6866.js";const h={class:"website-wrapper"},x={style:{"margin-right":"10px"}},D=i({__name:"LoginRecord",setup(y){const s=p([]);return(async()=>{const n=await v();s.value=n.data.map(t=>({...t,visitTime:b(t.createdAt,"-",!0)}))})(),(n,t)=>{const _=f,l=g;return m(),d("div",h,[r(l,{data:s.value,border:""},{default:c(()=>[r(_,{prop:"website",align:"center",label:"记录"},{default:c(({row:a})=>[e("div",null,[e("span",x,o(a.user),1),e("span",null,o(a.phone?"手机":"电脑"),1)]),e("div",null,o(a.visitTime),1)]),_:1})]),_:1},8,["data"])])}}});const L=u(D,[["__scopeId","data-v-c2a1ea0f"]]);export{L as default};