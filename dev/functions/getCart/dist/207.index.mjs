export const id=207;export const ids=[207];export const modules={207:(t,e,o)=>{o.d(e,{CognitoIdentityClient:()=>k.D,GetCredentialsForIdentityCommand:()=>H,GetIdCommand:()=>Y});var n=o(12),s=o(208),a=o(297),i=o(19);class r extends a.TJ{constructor(t){super(t),Object.setPrototypeOf(this,r.prototype)}}class c extends r{constructor(t){super({name:"InternalErrorException",$fault:"server",...t}),this.name="InternalErrorException",this.$fault="server",Object.setPrototypeOf(this,c.prototype)}}class d extends r{constructor(t){super({name:"InvalidParameterException",$fault:"client",...t}),this.name="InvalidParameterException",this.$fault="client",Object.setPrototypeOf(this,d.prototype)}}class l extends r{constructor(t){super({name:"LimitExceededException",$fault:"client",...t}),this.name="LimitExceededException",this.$fault="client",Object.setPrototypeOf(this,l.prototype)}}class u extends r{constructor(t){super({name:"NotAuthorizedException",$fault:"client",...t}),this.name="NotAuthorizedException",this.$fault="client",Object.setPrototypeOf(this,u.prototype)}}class p extends r{constructor(t){super({name:"ResourceConflictException",$fault:"client",...t}),this.name="ResourceConflictException",this.$fault="client",Object.setPrototypeOf(this,p.prototype)}}class y extends r{constructor(t){super({name:"TooManyRequestsException",$fault:"client",...t}),this.name="TooManyRequestsException",this.$fault="client",Object.setPrototypeOf(this,y.prototype)}}class m extends r{constructor(t){super({name:"ResourceNotFoundException",$fault:"client",...t}),this.name="ResourceNotFoundException",this.$fault="client",Object.setPrototypeOf(this,m.prototype)}}class x extends r{constructor(t){super({name:"ExternalServiceException",$fault:"client",...t}),this.name="ExternalServiceException",this.$fault="client",Object.setPrototypeOf(this,x.prototype)}}class h extends r{constructor(t){super({name:"InvalidIdentityPoolConfigurationException",$fault:"client",...t}),this.name="InvalidIdentityPoolConfigurationException",this.$fault="client",Object.setPrototypeOf(this,h.prototype)}}class w extends r{constructor(t){super({name:"DeveloperUserAlreadyRegisteredException",$fault:"client",...t}),this.name="DeveloperUserAlreadyRegisteredException",this.$fault="client",Object.setPrototypeOf(this,w.prototype)}}class E extends r{constructor(t){super({name:"ConcurrentModificationException",$fault:"client",...t}),this.name="ConcurrentModificationException",this.$fault="client",Object.setPrototypeOf(this,E.prototype)}}const f=t=>({...t,...t.Logins&&{Logins:a.$H}}),$=t=>({...t,...t.SecretKey&&{SecretKey:a.$H}}),C=t=>({...t,...t.Credentials&&{Credentials:$(t.Credentials)}}),I=t=>({...t,...t.Logins&&{Logins:a.$H}});var g=o(902),S=o(479);const b=async(t,e)=>{const o=W("GetCredentialsForIdentity");let n;return n=JSON.stringify((0,a.Ss)(t)),U(e,o,"/",void 0,n)},v=async(t,e)=>{const o=W("GetId");let n;return n=JSON.stringify((0,a.Ss)(t)),U(e,o,"/",void 0,n)},O=async(t,e)=>{if(t.statusCode>=300)return P(t,e);const o=await(0,g.Y2)(t.body,e);let n={};return n=D(o,e),{$metadata:B(t),...n}},z=async(t,e)=>{if(t.statusCode>=300)return P(t,e);const o=await(0,g.Y2)(t.body,e);let n={};return n=(0,a.Ss)(o),{$metadata:B(t),...n}},P=async(t,e)=>{const o={...t,body:await(0,g.CG)(t.body,e)},n=(0,g.cJ)(t,o.body);switch(n){case"InternalErrorException":case"com.amazonaws.cognitoidentity#InternalErrorException":throw await A(o,e);case"InvalidParameterException":case"com.amazonaws.cognitoidentity#InvalidParameterException":throw await q(o,e);case"LimitExceededException":case"com.amazonaws.cognitoidentity#LimitExceededException":throw await G(o,e);case"NotAuthorizedException":case"com.amazonaws.cognitoidentity#NotAuthorizedException":throw await K(o,e);case"ResourceConflictException":case"com.amazonaws.cognitoidentity#ResourceConflictException":throw await T(o,e);case"TooManyRequestsException":case"com.amazonaws.cognitoidentity#TooManyRequestsException":throw await L(o,e);case"ResourceNotFoundException":case"com.amazonaws.cognitoidentity#ResourceNotFoundException":throw await F(o,e);case"ExternalServiceException":case"com.amazonaws.cognitoidentity#ExternalServiceException":throw await j(o,e);case"InvalidIdentityPoolConfigurationException":case"com.amazonaws.cognitoidentity#InvalidIdentityPoolConfigurationException":throw await N(o,e);case"DeveloperUserAlreadyRegisteredException":case"com.amazonaws.cognitoidentity#DeveloperUserAlreadyRegisteredException":throw await R(o,e);case"ConcurrentModificationException":case"com.amazonaws.cognitoidentity#ConcurrentModificationException":throw await M(o,e);default:const s=o.body;return J({output:t,parsedBody:s,errorCode:n})}},M=async(t,e)=>{const o=t.body,n=(0,a.Ss)(o),s=new E({$metadata:B(t),...n});return(0,a.Mw)(s,o)},R=async(t,e)=>{const o=t.body,n=(0,a.Ss)(o),s=new w({$metadata:B(t),...n});return(0,a.Mw)(s,o)},j=async(t,e)=>{const o=t.body,n=(0,a.Ss)(o),s=new x({$metadata:B(t),...n});return(0,a.Mw)(s,o)},A=async(t,e)=>{const o=t.body,n=(0,a.Ss)(o),s=new c({$metadata:B(t),...n});return(0,a.Mw)(s,o)},N=async(t,e)=>{const o=t.body,n=(0,a.Ss)(o),s=new h({$metadata:B(t),...n});return(0,a.Mw)(s,o)},q=async(t,e)=>{const o=t.body,n=(0,a.Ss)(o),s=new d({$metadata:B(t),...n});return(0,a.Mw)(s,o)},G=async(t,e)=>{const o=t.body,n=(0,a.Ss)(o),s=new l({$metadata:B(t),...n});return(0,a.Mw)(s,o)},K=async(t,e)=>{const o=t.body,n=(0,a.Ss)(o),s=new u({$metadata:B(t),...n});return(0,a.Mw)(s,o)},T=async(t,e)=>{const o=t.body,n=(0,a.Ss)(o),s=new p({$metadata:B(t),...n});return(0,a.Mw)(s,o)},F=async(t,e)=>{const o=t.body,n=(0,a.Ss)(o),s=new m({$metadata:B(t),...n});return(0,a.Mw)(s,o)},L=async(t,e)=>{const o=t.body,n=(0,a.Ss)(o),s=new y({$metadata:B(t),...n});return(0,a.Mw)(s,o)},D=(t,e)=>(0,a.s)(t,{Credentials:t=>(t=>(0,a.s)(t,{AccessKeyId:a.lK,Expiration:t=>(0,a.Y0)((0,a.l3)((0,a.r$)(t))),SecretKey:a.lK,SessionToken:a.lK}))(t),IdentityId:a.lK}),B=t=>({httpStatusCode:t.statusCode,requestId:t.headers["x-amzn-requestid"]??t.headers["x-amzn-request-id"]??t.headers["x-amz-request-id"],extendedRequestId:t.headers["x-amz-id-2"],cfId:t.headers["x-amz-cf-id"]}),J=(0,a.jr)(r),U=async(t,e,o,n,s)=>{const{hostname:a,protocol:i="https",port:r,path:c}=await t.endpoint(),d={protocol:i,hostname:a,port:r,method:"POST",path:c.endsWith("/")?c.slice(0,-1)+o:c+o,headers:e};return void 0!==n&&(d.hostname=n),void 0!==s&&(d.body=s),new S.Kd(d)};function W(t){return{"content-type":"application/x-amz-json-1.1","x-amz-target":`AWSCognitoIdentityService.${t}`}}class H extends(a.uB.classBuilder().ep(i.S).m((function(t,e,o,a){return[(0,s.TM)(o,this.serialize,this.deserialize),(0,n.rD)(o,t.getEndpointParameterInstructions())]})).s("AWSCognitoIdentityService","GetCredentialsForIdentity",{}).n("CognitoIdentityClient","GetCredentialsForIdentityCommand").f(f,C).ser(b).de(O).build()){}class Y extends(a.uB.classBuilder().ep(i.S).m((function(t,e,o,a){return[(0,s.TM)(o,this.serialize,this.deserialize),(0,n.rD)(o,t.getEndpointParameterInstructions())]})).s("AWSCognitoIdentityService","GetId",{}).n("CognitoIdentityClient","GetIdCommand").f(I,void 0).ser(v).de(z).build()){}var k=o(636)}};