import{z as c,m as b,x as p,a as x,o as f,d as o,p as a,v as r,t as v,q as g}from"./index-BaYYEV3U.js";const y={class:"input-form border-bottom pb-5"},B={class:"input-group mb-3 row"},w={class:"input-group row"},_={class:"btn-section d-flex mt-5 mb-5"},k=["textContent"],h={__name:"BoardForm",props:{submitButtonText:String,board:Object},emits:["form-submit"],setup(n,{emit:l}){c();const e=b({}),u=l,d=n,m=()=>{u("form-submit",e)};return p(d.board,i=>{Object.assign(e,i)},{immediate:!0}),(i,t)=>(f(),x("form",{onSubmit:g(m,["prevent"])},[o("div",y,[o("div",B,[t[3]||(t[3]=o("span",{class:"input-title input-group-text col-2",id:"basic-addon1"}," 제목",-1)),a(o("input",{type:"text",class:"form-control col-10",placeholder:"제목을 입력하세요","aria-label":"Username","aria-describedby":"basic-addon1","onUpdate:modelValue":t[0]||(t[0]=s=>e.title=s)},null,512),[[r,e.title,void 0,{trim:!0}]])]),o("div",w,[t[4]||(t[4]=o("span",{class:"input-content input-group-text col-2"},"내용",-1)),a(o("textarea",{class:"form-control col-10","aria-label":"With textarea",placeholder:"내용을 입력하세요","onUpdate:modelValue":t[1]||(t[1]=s=>e.content=s)},null,512),[[r,e.content,void 0,{trim:!0}]])])]),o("div",_,[o("button",{class:"submit-btn btn btn-outline-secondary fs-5",type:"submit",textContent:v(n.submitButtonText)},null,8,k),o("button",{class:"cancel-btn btn btn-outline-secondary fs-5",type:"button",onClick:t[2]||(t[2]=s=>this.$router.go(-1))},"취소하기")])],32))}};export{h as _};
