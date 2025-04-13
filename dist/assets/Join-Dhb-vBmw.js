import{_ as E,m as x,i as g,x as V,A as k,a as n,o as i,d as t,g as q,p as a,v as m,f as D,t as f,C as b,F as y,k as w,q as N,y as P,s as T,e as j,z as A}from"./index-BaYYEV3U.js";const I={class:"form-container"},J={class:"mb-3"},h={class:"input-group"},O={key:0,class:"text-danger"},R={key:1,class:"text-success"},Y={class:"mb-3"},z={class:"mb-3"},L={class:"mb-3"},_={class:"mb-3"},G={class:"d-flex"},H=["value"],K=["value"],Q=["value"],W={class:"mb-3"},X={class:"mb-3"},Z={class:"mb-3"},ee=["textContent"],te={__name:"JoinForm",props:{submitButtonText:String,initFormData:Object},emits:["form-submit"],setup(v,{emit:c}){const o=x({}),u=g(null),d=g(!1),l=x({year:"",month:"",day:""}),F=v,U=c,C=()=>{if(!d.value){alert("이메일 중복 확인을 먼저 진행해주세요.");return}if(o.userPwd!==o.userPwd2){alert("비밀번호가 일치하지 않습니다.");return}U("form-submit",T(o))};V(()=>F.initFormData,r=>{Object.assign(o,r)},{immediate:!0});const S=async()=>{if(u.value=null,!!o.email)try{(await P.get("/user/email/exists",{params:{email:o.email}})).data?(u.value="이미 존재하는 이메일입니다.",d.value=!1):d.value=!0}catch(r){console.error("이메일 중복 확인 실패",r),u.value="이메일 중복 확인에 실패했습니다.",d.value=!1}},B=k(()=>{const r=new Date().getFullYear();let e=[];for(let s=1900;s<=r;s++)e.push(s);return e}),M=["01","02","03","04","05","06","07","08","09","10","11","12"],$=k(()=>{const r=parseInt(l.month);let e=[];if(r>0){const s=new Date(l.year,r,0).getDate();for(let p=1;p<=s;p++)e.push(p<10?`0${p}`:p)}return e});return V(()=>[l.year,l.month,l.day],()=>{l.year&&l.month&&l.day?o.birthday=`${l.year}-${l.month}-${l.day}`:o.birthday=""},{immediate:!0}),(r,e)=>(i(),n("form",{onSubmit:N(C,["prevent"]),class:"signup-form"},[e[24]||(e[24]=t("h3",{class:"page-title"},"회원 가입",-1)),t("div",I,[t("div",J,[e[12]||(e[12]=t("label",{for:"email",class:"form-label"},"이메일",-1)),t("div",h,[a(t("input",{type:"email",class:"form-control",id:"email","onUpdate:modelValue":e[0]||(e[0]=s=>o.email=s),placeholder:"이메일 중복 확인 먼저 해주세요.",required:""},null,512),[[m,o.email,void 0,{trim:!0}]]),t("button",{type:"button",class:"btn btn-secondary",onClick:S},"이메일 중복 확인")]),u.value?(i(),n("small",O,[e[10]||(e[10]=t("i",{class:"bi bi-x-circle"},null,-1)),D(" "+f(u.value),1)])):q("",!0),d.value?(i(),n("small",R,e[11]||(e[11]=[t("i",{class:"bi bi-check-circle"},null,-1),D(" 이메일 중복 확인 완료 ")]))):q("",!0)]),t("div",Y,[e[13]||(e[13]=t("label",{for:"password",class:"form-label"},"비밀번호",-1)),a(t("input",{type:"password",class:"form-control",id:"userPwd","onUpdate:modelValue":e[1]||(e[1]=s=>o.userPwd=s),placeholder:"영문, 숫자, 특수기호 조합",required:""},null,512),[[m,o.userPwd]])]),t("div",z,[e[14]||(e[14]=t("label",{for:"confirmPassword",class:"form-label"},"비밀번호 확인",-1)),a(t("input",{type:"password",class:"form-control",id:"userPwd2","onUpdate:modelValue":e[2]||(e[2]=s=>o.userPwd2=s),placeholder:"비밀번호를 다시 입력해 주세요.",required:""},null,512),[[m,o.userPwd2]])]),t("div",L,[e[15]||(e[15]=t("label",{for:"name",class:"form-label"},"이름",-1)),a(t("input",{type:"text",class:"form-control",id:"name","onUpdate:modelValue":e[3]||(e[3]=s=>o.name=s),required:""},null,512),[[m,o.name,void 0,{trim:!0}]])]),t("div",_,[e[19]||(e[19]=t("label",{for:"dob",class:"form-label"},"생년월일",-1)),t("div",G,[a(t("select",{class:"form-select","onUpdate:modelValue":e[4]||(e[4]=s=>l.year=s),required:""},[e[16]||(e[16]=t("option",{value:""},"년",-1)),(i(!0),n(y,null,w(B.value,s=>(i(),n("option",{key:s,value:s},f(s),9,H))),128))],512),[[b,l.year]]),a(t("select",{class:"form-select","onUpdate:modelValue":e[5]||(e[5]=s=>l.month=s),required:""},[e[17]||(e[17]=t("option",{value:""},"월",-1)),(i(),n(y,null,w(M,s=>t("option",{key:s,value:s},f(s),9,K)),64))],512),[[b,l.month]]),a(t("select",{class:"form-select","onUpdate:modelValue":e[6]||(e[6]=s=>l.day=s),required:""},[e[18]||(e[18]=t("option",{value:""},"일",-1)),(i(!0),n(y,null,w($.value,s=>(i(),n("option",{key:s,value:s},f(s),9,Q))),128))],512),[[b,l.day]])])]),t("div",W,[e[21]||(e[21]=t("label",{for:"gender",class:"form-label"},"성별",-1)),a(t("select",{class:"form-select",id:"gender","onUpdate:modelValue":e[7]||(e[7]=s=>o.gender=s),required:""},e[20]||(e[20]=[t("option",{value:""},"성별을 선택해주세요",-1),t("option",{value:"Male"},"남성",-1),t("option",{value:"Female"},"여성",-1)]),512),[[b,o.gender]])]),t("div",X,[e[22]||(e[22]=t("label",{for:"phone",class:"form-label"},"전화번호",-1)),a(t("input",{type:"text",class:"form-control",id:"phone","onUpdate:modelValue":e[8]||(e[8]=s=>o.phone=s),placeholder:"010-1234-5678",required:""},null,512),[[m,o.phone,void 0,{trim:!0}]])]),t("div",Z,[e[23]||(e[23]=t("label",{for:"address",class:"form-label"},"주소",-1)),a(t("input",{type:"text",class:"form-control",id:"address","onUpdate:modelValue":e[9]||(e[9]=s=>o.address=s),placeholder:"주소 입력",required:""},null,512),[[m,o.address,void 0,{trim:!0}]])]),t("button",{type:"submit",class:"btn btn-primary",textContent:f(v.submitButtonText)},null,8,ee)])],32))}},se=E(te,[["__scopeId","data-v-3236d0e8"]]),le={__name:"Join",setup(v){const c=A(),o=x({email:"",userPwd:"",userPwd2:"",name:"",birthday:"",gender:"",phone:"",address:""}),u=async d=>{try{(await P.post("/user/join",d)).status===201&&(alert("정상적으로 등록되었습니다."),c.replace({name:"login"}))}catch{alert("에러가 발생했습니다.")}};return(d,l)=>(i(),n("div",null,[j(se,{"submit-button-text":"회원 가입","init-form-data":o,onFormSubmit:u},null,8,["init-form-data"])]))}};export{le as default};
