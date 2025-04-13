import{_ as u,u as c,m,a as f,d as o,p as t,v as d,z as P,y as l,o as y}from"./index-BaYYEV3U.js";const b={class:"pwd-modify"},v={class:"pwd-info"},g={class:"mb-3"},C={class:"mb-3"},h={__name:"PwdModify",setup(_){const n=P(),i=c(),r=m({oldPassword:"",newPassword:"",newPasswordConfirm:""}),w=async()=>{if(!r.oldPassword){alert("기존 비밀번호를 입력해주세요.");return}const a=localStorage.getItem("accessToken");if(!a){n.push("/login");return}try{if(!(await l.get("/user/my-page/verify-pwd",{params:{oldPassword:r.oldPassword}},{headers:{Authorization:`Bearer ${a}`}})).data){alert("기존 비밀번호가 일치하지 않습니다.");return}if(r.newPassword!==r.newPasswordConfirm){alert("새 비밀번호와 새 비밀번호 확인이 일치하지 않습니다.");return}(await l.post("/user/my-page/pass-word",r,{headers:{Authorization:`Bearer ${a}`}})).status===200&&(alert("비밀번호가 성공적으로 변경되었습니다."),alert("다시 로그인해주세요."),i.logout())}catch(s){console.error(s),alert("비밀번호 변경에 실패했습니다. 다시 시도해주세요.")}},p=()=>{n.go(-1)};return(a,s)=>(y(),f("div",b,[s[6]||(s[6]=o("h2",{class:"page-title"},"비밀번호 변경",-1)),o("div",v,[o("div",g,[s[3]||(s[3]=o("label",{for:"oldPassword",class:"form-label"},"기존 비밀번호",-1)),t(o("input",{type:"password",class:"form-control",id:"oldPassword","onUpdate:modelValue":s[0]||(s[0]=e=>r.oldPassword=e),placeholder:"기존 비밀번호를 입력해주세요.",required:""},null,512),[[d,r.oldPassword,void 0,{trim:!0}]])]),o("div",C,[s[4]||(s[4]=o("label",{for:"newPassword",class:"form-label"},"새 비밀번호",-1)),t(o("input",{type:"password",class:"form-control",id:"newPassword","onUpdate:modelValue":s[1]||(s[1]=e=>r.newPassword=e),placeholder:"새 비밀번호를 입력해 주세요.",required:""},null,512),[[d,r.newPassword,void 0,{trim:!0}]]),s[5]||(s[5]=o("label",{for:"newPasswordConfirm",class:"form-label"},"새 비밀번호 확인",-1)),t(o("input",{type:"password",class:"form-control",id:"newPasswordConfirm","onUpdate:modelValue":s[2]||(s[2]=e=>r.newPasswordConfirm=e),placeholder:"비밀번호를 다시 입력해 주세요.",required:""},null,512),[[d,r.newPasswordConfirm,void 0,{trim:!0}]])]),o("div",{class:"form-actions"},[o("button",{onClick:w,class:"btn btn-primary",style:{"margin-right":"10px"}},"저장하기"),o("button",{onClick:p,class:"btn btn-secondary"},"취소")])])]))}},x=u(h,[["__scopeId","data-v-cd2940af"]]);export{x as default};
