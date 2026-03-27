(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))n(s);new MutationObserver(s=>{for(const r of s)if(r.type==="childList")for(const a of r.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&n(a)}).observe(document,{childList:!0,subtree:!0});function e(s){const r={};return s.integrity&&(r.integrity=s.integrity),s.referrerPolicy&&(r.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?r.credentials="include":s.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function n(s){if(s.ep)return;s.ep=!0;const r=e(s);fetch(s.href,r)}})();const gl="182",Su=0,ql=1,wu=2,Hr=1,bu=2,Vs=3,wi=0,rn=1,ke=2,si=0,gs=1,Sn=2,Zl=3,$l=4,Eu=5,Oi=100,Tu=101,Cu=102,Au=103,Ru=104,Pu=200,Iu=201,Lu=202,Du=203,oo=204,lo=205,Fu=206,Nu=207,Uu=208,Ou=209,Bu=210,ku=211,zu=212,Hu=213,Gu=214,co=0,ho=1,uo=2,_s=3,fo=4,po=5,mo=6,go=7,ca=0,Vu=1,Wu=2,Vn=0,ch=1,hh=2,uh=3,dh=4,fh=5,ph=6,mh=7,gh=300,Hi=301,vs=302,xo=303,_o=304,ha=306,vo=1e3,ei=1001,Mo=1002,Ve=1003,Xu=1004,hr=1005,He=1006,va=1007,ki=1008,fn=1009,xh=1010,_h=1011,Js=1012,xl=1013,Yn=1014,Fn=1015,oi=1016,_l=1017,vl=1018,js=1020,vh=35902,Mh=35899,yh=1021,Sh=1022,Nn=1023,li=1026,zi=1027,Ml=1028,yl=1029,Ms=1030,Sl=1031,wl=1033,Gr=33776,Vr=33777,Wr=33778,Xr=33779,yo=35840,So=35841,wo=35842,bo=35843,Eo=36196,To=37492,Co=37496,Ao=37488,Ro=37489,Po=37490,Io=37491,Lo=37808,Do=37809,Fo=37810,No=37811,Uo=37812,Oo=37813,Bo=37814,ko=37815,zo=37816,Ho=37817,Go=37818,Vo=37819,Wo=37820,Xo=37821,Yo=36492,qo=36494,Zo=36495,$o=36283,Ko=36284,Jo=36285,jo=36286,Yu=3200,ua=0,qu=1,_i="",xn="srgb",ys="srgb-linear",$r="linear",ue="srgb",Yi=7680,Kl=519,Zu=512,$u=513,Ku=514,bl=515,Ju=516,ju=517,El=518,Qu=519,Qo=35044,Jl="300 es",zn=2e3,Kr=2001;function wh(i){for(let t=i.length-1;t>=0;--t)if(i[t]>=65535)return!0;return!1}function Jr(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function td(){const i=Jr("canvas");return i.style.display="block",i}const jl={};function jr(...i){const t="THREE."+i.shift();console.log(t,...i)}function Ot(...i){const t="THREE."+i.shift();console.warn(t,...i)}function ee(...i){const t="THREE."+i.shift();console.error(t,...i)}function Qs(...i){const t=i.join(" ");t in jl||(jl[t]=!0,Ot(...i))}function ed(i,t,e){return new Promise(function(n,s){function r(){switch(i.clientWaitSync(t,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:s();break;case i.TIMEOUT_EXPIRED:setTimeout(r,e);break;default:n()}}setTimeout(r,e)})}class Es{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[t]===void 0&&(n[t]=[]),n[t].indexOf(e)===-1&&n[t].push(e)}hasEventListener(t,e){const n=this._listeners;return n===void 0?!1:n[t]!==void 0&&n[t].indexOf(e)!==-1}removeEventListener(t,e){const n=this._listeners;if(n===void 0)return;const s=n[t];if(s!==void 0){const r=s.indexOf(e);r!==-1&&s.splice(r,1)}}dispatchEvent(t){const e=this._listeners;if(e===void 0)return;const n=e[t.type];if(n!==void 0){t.target=this;const s=n.slice(0);for(let r=0,a=s.length;r<a;r++)s[r].call(this,t);t.target=null}}}const We=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let Ql=1234567;const qs=Math.PI/180,tr=180/Math.PI;function Wn(){const i=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(We[i&255]+We[i>>8&255]+We[i>>16&255]+We[i>>24&255]+"-"+We[t&255]+We[t>>8&255]+"-"+We[t>>16&15|64]+We[t>>24&255]+"-"+We[e&63|128]+We[e>>8&255]+"-"+We[e>>16&255]+We[e>>24&255]+We[n&255]+We[n>>8&255]+We[n>>16&255]+We[n>>24&255]).toLowerCase()}function Jt(i,t,e){return Math.max(t,Math.min(e,i))}function Tl(i,t){return(i%t+t)%t}function nd(i,t,e,n,s){return n+(i-t)*(s-n)/(e-t)}function id(i,t,e){return i!==t?(e-i)/(t-i):0}function Zs(i,t,e){return(1-e)*i+e*t}function sd(i,t,e,n){return Zs(i,t,1-Math.exp(-e*n))}function rd(i,t=1){return t-Math.abs(Tl(i,t*2)-t)}function ad(i,t,e){return i<=t?0:i>=e?1:(i=(i-t)/(e-t),i*i*(3-2*i))}function od(i,t,e){return i<=t?0:i>=e?1:(i=(i-t)/(e-t),i*i*i*(i*(i*6-15)+10))}function ld(i,t){return i+Math.floor(Math.random()*(t-i+1))}function cd(i,t){return i+Math.random()*(t-i)}function hd(i){return i*(.5-Math.random())}function ud(i){i!==void 0&&(Ql=i);let t=Ql+=1831565813;return t=Math.imul(t^t>>>15,t|1),t^=t+Math.imul(t^t>>>7,t|61),((t^t>>>14)>>>0)/4294967296}function dd(i){return i*qs}function fd(i){return i*tr}function pd(i){return(i&i-1)===0&&i!==0}function md(i){return Math.pow(2,Math.ceil(Math.log(i)/Math.LN2))}function gd(i){return Math.pow(2,Math.floor(Math.log(i)/Math.LN2))}function xd(i,t,e,n,s){const r=Math.cos,a=Math.sin,o=r(e/2),l=a(e/2),c=r((t+n)/2),h=a((t+n)/2),u=r((t-n)/2),d=a((t-n)/2),f=r((n-t)/2),g=a((n-t)/2);switch(s){case"XYX":i.set(o*h,l*u,l*d,o*c);break;case"YZY":i.set(l*d,o*h,l*u,o*c);break;case"ZXZ":i.set(l*u,l*d,o*h,o*c);break;case"XZX":i.set(o*h,l*g,l*f,o*c);break;case"YXY":i.set(l*f,o*h,l*g,o*c);break;case"ZYZ":i.set(l*g,l*f,o*h,o*c);break;default:Ot("MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+s)}}function Pn(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("Invalid component type.")}}function de(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("Invalid component type.")}}const Se={DEG2RAD:qs,RAD2DEG:tr,generateUUID:Wn,clamp:Jt,euclideanModulo:Tl,mapLinear:nd,inverseLerp:id,lerp:Zs,damp:sd,pingpong:rd,smoothstep:ad,smootherstep:od,randInt:ld,randFloat:cd,randFloatSpread:hd,seededRandom:ud,degToRad:dd,radToDeg:fd,isPowerOfTwo:pd,ceilPowerOfTwo:md,floorPowerOfTwo:gd,setQuaternionFromProperEuler:xd,normalize:de,denormalize:Pn};class ut{constructor(t=0,e=0){ut.prototype.isVector2=!0,this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){const e=this.x,n=this.y,s=t.elements;return this.x=s[0]*e+s[3]*n+s[6],this.y=s[1]*e+s[4]*n+s[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=Jt(this.x,t.x,e.x),this.y=Jt(this.y,t.y,e.y),this}clampScalar(t,e){return this.x=Jt(this.x,t,e),this.y=Jt(this.y,t,e),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Jt(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const n=this.dot(t)/e;return Math.acos(Jt(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,n=this.y-t.y;return e*e+n*n}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){const n=Math.cos(e),s=Math.sin(e),r=this.x-t.x,a=this.y-t.y;return this.x=r*n-a*s+t.x,this.y=r*s+a*n+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class qe{constructor(t=0,e=0,n=0,s=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=n,this._w=s}static slerpFlat(t,e,n,s,r,a,o){let l=n[s+0],c=n[s+1],h=n[s+2],u=n[s+3],d=r[a+0],f=r[a+1],g=r[a+2],x=r[a+3];if(o<=0){t[e+0]=l,t[e+1]=c,t[e+2]=h,t[e+3]=u;return}if(o>=1){t[e+0]=d,t[e+1]=f,t[e+2]=g,t[e+3]=x;return}if(u!==x||l!==d||c!==f||h!==g){let m=l*d+c*f+h*g+u*x;m<0&&(d=-d,f=-f,g=-g,x=-x,m=-m);let p=1-o;if(m<.9995){const w=Math.acos(m),b=Math.sin(w);p=Math.sin(p*w)/b,o=Math.sin(o*w)/b,l=l*p+d*o,c=c*p+f*o,h=h*p+g*o,u=u*p+x*o}else{l=l*p+d*o,c=c*p+f*o,h=h*p+g*o,u=u*p+x*o;const w=1/Math.sqrt(l*l+c*c+h*h+u*u);l*=w,c*=w,h*=w,u*=w}}t[e]=l,t[e+1]=c,t[e+2]=h,t[e+3]=u}static multiplyQuaternionsFlat(t,e,n,s,r,a){const o=n[s],l=n[s+1],c=n[s+2],h=n[s+3],u=r[a],d=r[a+1],f=r[a+2],g=r[a+3];return t[e]=o*g+h*u+l*f-c*d,t[e+1]=l*g+h*d+c*u-o*f,t[e+2]=c*g+h*f+o*d-l*u,t[e+3]=h*g-o*u-l*d-c*f,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,n,s){return this._x=t,this._y=e,this._z=n,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){const n=t._x,s=t._y,r=t._z,a=t._order,o=Math.cos,l=Math.sin,c=o(n/2),h=o(s/2),u=o(r/2),d=l(n/2),f=l(s/2),g=l(r/2);switch(a){case"XYZ":this._x=d*h*u+c*f*g,this._y=c*f*u-d*h*g,this._z=c*h*g+d*f*u,this._w=c*h*u-d*f*g;break;case"YXZ":this._x=d*h*u+c*f*g,this._y=c*f*u-d*h*g,this._z=c*h*g-d*f*u,this._w=c*h*u+d*f*g;break;case"ZXY":this._x=d*h*u-c*f*g,this._y=c*f*u+d*h*g,this._z=c*h*g+d*f*u,this._w=c*h*u-d*f*g;break;case"ZYX":this._x=d*h*u-c*f*g,this._y=c*f*u+d*h*g,this._z=c*h*g-d*f*u,this._w=c*h*u+d*f*g;break;case"YZX":this._x=d*h*u+c*f*g,this._y=c*f*u+d*h*g,this._z=c*h*g-d*f*u,this._w=c*h*u-d*f*g;break;case"XZY":this._x=d*h*u-c*f*g,this._y=c*f*u-d*h*g,this._z=c*h*g+d*f*u,this._w=c*h*u+d*f*g;break;default:Ot("Quaternion: .setFromEuler() encountered an unknown order: "+a)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){const n=e/2,s=Math.sin(n);return this._x=t.x*s,this._y=t.y*s,this._z=t.z*s,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(t){const e=t.elements,n=e[0],s=e[4],r=e[8],a=e[1],o=e[5],l=e[9],c=e[2],h=e[6],u=e[10],d=n+o+u;if(d>0){const f=.5/Math.sqrt(d+1);this._w=.25/f,this._x=(h-l)*f,this._y=(r-c)*f,this._z=(a-s)*f}else if(n>o&&n>u){const f=2*Math.sqrt(1+n-o-u);this._w=(h-l)/f,this._x=.25*f,this._y=(s+a)/f,this._z=(r+c)/f}else if(o>u){const f=2*Math.sqrt(1+o-n-u);this._w=(r-c)/f,this._x=(s+a)/f,this._y=.25*f,this._z=(l+h)/f}else{const f=2*Math.sqrt(1+u-n-o);this._w=(a-s)/f,this._x=(r+c)/f,this._y=(l+h)/f,this._z=.25*f}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let n=t.dot(e)+1;return n<1e-8?(n=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=n):(this._x=0,this._y=-t.z,this._z=t.y,this._w=n)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=n),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(Jt(this.dot(t),-1,1)))}rotateTowards(t,e){const n=this.angleTo(t);if(n===0)return this;const s=Math.min(1,e/n);return this.slerp(t,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){const n=t._x,s=t._y,r=t._z,a=t._w,o=e._x,l=e._y,c=e._z,h=e._w;return this._x=n*h+a*o+s*c-r*l,this._y=s*h+a*l+r*o-n*c,this._z=r*h+a*c+n*l-s*o,this._w=a*h-n*o-s*l-r*c,this._onChangeCallback(),this}slerp(t,e){if(e<=0)return this;if(e>=1)return this.copy(t);let n=t._x,s=t._y,r=t._z,a=t._w,o=this.dot(t);o<0&&(n=-n,s=-s,r=-r,a=-a,o=-o);let l=1-e;if(o<.9995){const c=Math.acos(o),h=Math.sin(c);l=Math.sin(l*c)/h,e=Math.sin(e*c)/h,this._x=this._x*l+n*e,this._y=this._y*l+s*e,this._z=this._z*l+r*e,this._w=this._w*l+a*e,this._onChangeCallback()}else this._x=this._x*l+n*e,this._y=this._y*l+s*e,this._z=this._z*l+r*e,this._w=this._w*l+a*e,this.normalize();return this}slerpQuaternions(t,e,n){return this.copy(t).slerp(e,n)}random(){const t=2*Math.PI*Math.random(),e=2*Math.PI*Math.random(),n=Math.random(),s=Math.sqrt(1-n),r=Math.sqrt(n);return this.set(s*Math.sin(t),s*Math.cos(t),r*Math.sin(e),r*Math.cos(e))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class D{constructor(t=0,e=0,n=0){D.prototype.isVector3=!0,this.x=t,this.y=e,this.z=n}set(t,e,n){return n===void 0&&(n=this.z),this.x=t,this.y=e,this.z=n,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(tc.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(tc.setFromAxisAngle(t,e))}applyMatrix3(t){const e=this.x,n=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[3]*n+r[6]*s,this.y=r[1]*e+r[4]*n+r[7]*s,this.z=r[2]*e+r[5]*n+r[8]*s,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){const e=this.x,n=this.y,s=this.z,r=t.elements,a=1/(r[3]*e+r[7]*n+r[11]*s+r[15]);return this.x=(r[0]*e+r[4]*n+r[8]*s+r[12])*a,this.y=(r[1]*e+r[5]*n+r[9]*s+r[13])*a,this.z=(r[2]*e+r[6]*n+r[10]*s+r[14])*a,this}applyQuaternion(t){const e=this.x,n=this.y,s=this.z,r=t.x,a=t.y,o=t.z,l=t.w,c=2*(a*s-o*n),h=2*(o*e-r*s),u=2*(r*n-a*e);return this.x=e+l*c+a*u-o*h,this.y=n+l*h+o*c-r*u,this.z=s+l*u+r*h-a*c,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){const e=this.x,n=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[4]*n+r[8]*s,this.y=r[1]*e+r[5]*n+r[9]*s,this.z=r[2]*e+r[6]*n+r[10]*s,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=Jt(this.x,t.x,e.x),this.y=Jt(this.y,t.y,e.y),this.z=Jt(this.z,t.z,e.z),this}clampScalar(t,e){return this.x=Jt(this.x,t,e),this.y=Jt(this.y,t,e),this.z=Jt(this.z,t,e),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Jt(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){const n=t.x,s=t.y,r=t.z,a=e.x,o=e.y,l=e.z;return this.x=s*l-r*o,this.y=r*a-n*l,this.z=n*o-s*a,this}projectOnVector(t){const e=t.lengthSq();if(e===0)return this.set(0,0,0);const n=t.dot(this)/e;return this.copy(t).multiplyScalar(n)}projectOnPlane(t){return Ma.copy(this).projectOnVector(t),this.sub(Ma)}reflect(t){return this.sub(Ma.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const n=this.dot(t)/e;return Math.acos(Jt(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,n=this.y-t.y,s=this.z-t.z;return e*e+n*n+s*s}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,n){const s=Math.sin(e)*t;return this.x=s*Math.sin(n),this.y=Math.cos(e)*t,this.z=s*Math.cos(n),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,n){return this.x=t*Math.sin(e),this.y=n,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){const e=this.setFromMatrixColumn(t,0).length(),n=this.setFromMatrixColumn(t,1).length(),s=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=n,this.z=s,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const t=Math.random()*Math.PI*2,e=Math.random()*2-1,n=Math.sqrt(1-e*e);return this.x=n*Math.cos(t),this.y=e,this.z=n*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Ma=new D,tc=new qe;class Yt{constructor(t,e,n,s,r,a,o,l,c){Yt.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,n,s,r,a,o,l,c)}set(t,e,n,s,r,a,o,l,c){const h=this.elements;return h[0]=t,h[1]=s,h[2]=o,h[3]=e,h[4]=r,h[5]=l,h[6]=n,h[7]=a,h[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){const e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],this}extractBasis(t,e,n){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(t){const e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const n=t.elements,s=e.elements,r=this.elements,a=n[0],o=n[3],l=n[6],c=n[1],h=n[4],u=n[7],d=n[2],f=n[5],g=n[8],x=s[0],m=s[3],p=s[6],w=s[1],b=s[4],M=s[7],y=s[2],T=s[5],C=s[8];return r[0]=a*x+o*w+l*y,r[3]=a*m+o*b+l*T,r[6]=a*p+o*M+l*C,r[1]=c*x+h*w+u*y,r[4]=c*m+h*b+u*T,r[7]=c*p+h*M+u*C,r[2]=d*x+f*w+g*y,r[5]=d*m+f*b+g*T,r[8]=d*p+f*M+g*C,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){const t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],a=t[4],o=t[5],l=t[6],c=t[7],h=t[8];return e*a*h-e*o*c-n*r*h+n*o*l+s*r*c-s*a*l}invert(){const t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],a=t[4],o=t[5],l=t[6],c=t[7],h=t[8],u=h*a-o*c,d=o*l-h*r,f=c*r-a*l,g=e*u+n*d+s*f;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);const x=1/g;return t[0]=u*x,t[1]=(s*c-h*n)*x,t[2]=(o*n-s*a)*x,t[3]=d*x,t[4]=(h*e-s*l)*x,t[5]=(s*r-o*e)*x,t[6]=f*x,t[7]=(n*l-c*e)*x,t[8]=(a*e-n*r)*x,this}transpose(){let t;const e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){const e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,n,s,r,a,o){const l=Math.cos(r),c=Math.sin(r);return this.set(n*l,n*c,-n*(l*a+c*o)+a+t,-s*c,s*l,-s*(-c*a+l*o)+o+e,0,0,1),this}scale(t,e){return this.premultiply(ya.makeScale(t,e)),this}rotate(t){return this.premultiply(ya.makeRotation(-t)),this}translate(t,e){return this.premultiply(ya.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,n,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){const e=this.elements,n=t.elements;for(let s=0;s<9;s++)if(e[s]!==n[s])return!1;return!0}fromArray(t,e=0){for(let n=0;n<9;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){const n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t}clone(){return new this.constructor().fromArray(this.elements)}}const ya=new Yt,ec=new Yt().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),nc=new Yt().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function _d(){const i={enabled:!0,workingColorSpace:ys,spaces:{},convert:function(s,r,a){return this.enabled===!1||r===a||!r||!a||(this.spaces[r].transfer===ue&&(s.r=ri(s.r),s.g=ri(s.g),s.b=ri(s.b)),this.spaces[r].primaries!==this.spaces[a].primaries&&(s.applyMatrix3(this.spaces[r].toXYZ),s.applyMatrix3(this.spaces[a].fromXYZ)),this.spaces[a].transfer===ue&&(s.r=xs(s.r),s.g=xs(s.g),s.b=xs(s.b))),s},workingToColorSpace:function(s,r){return this.convert(s,this.workingColorSpace,r)},colorSpaceToWorking:function(s,r){return this.convert(s,r,this.workingColorSpace)},getPrimaries:function(s){return this.spaces[s].primaries},getTransfer:function(s){return s===_i?$r:this.spaces[s].transfer},getToneMappingMode:function(s){return this.spaces[s].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(s,r=this.workingColorSpace){return s.fromArray(this.spaces[r].luminanceCoefficients)},define:function(s){Object.assign(this.spaces,s)},_getMatrix:function(s,r,a){return s.copy(this.spaces[r].toXYZ).multiply(this.spaces[a].fromXYZ)},_getDrawingBufferColorSpace:function(s){return this.spaces[s].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(s=this.workingColorSpace){return this.spaces[s].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(s,r){return Qs("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),i.workingToColorSpace(s,r)},toWorkingColorSpace:function(s,r){return Qs("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),i.colorSpaceToWorking(s,r)}},t=[.64,.33,.3,.6,.15,.06],e=[.2126,.7152,.0722],n=[.3127,.329];return i.define({[ys]:{primaries:t,whitePoint:n,transfer:$r,toXYZ:ec,fromXYZ:nc,luminanceCoefficients:e,workingColorSpaceConfig:{unpackColorSpace:xn},outputColorSpaceConfig:{drawingBufferColorSpace:xn}},[xn]:{primaries:t,whitePoint:n,transfer:ue,toXYZ:ec,fromXYZ:nc,luminanceCoefficients:e,outputColorSpaceConfig:{drawingBufferColorSpace:xn}}}),i}const ie=_d();function ri(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function xs(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}let qi;class vd{static getDataURL(t,e="image/png"){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let n;if(t instanceof HTMLCanvasElement)n=t;else{qi===void 0&&(qi=Jr("canvas")),qi.width=t.width,qi.height=t.height;const s=qi.getContext("2d");t instanceof ImageData?s.putImageData(t,0,0):s.drawImage(t,0,0,t.width,t.height),n=qi}return n.toDataURL(e)}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){const e=Jr("canvas");e.width=t.width,e.height=t.height;const n=e.getContext("2d");n.drawImage(t,0,0,t.width,t.height);const s=n.getImageData(0,0,t.width,t.height),r=s.data;for(let a=0;a<r.length;a++)r[a]=ri(r[a]/255)*255;return n.putImageData(s,0,0),e}else if(t.data){const e=t.data.slice(0);for(let n=0;n<e.length;n++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[n]=Math.floor(ri(e[n]/255)*255):e[n]=ri(e[n]);return{data:e,width:t.width,height:t.height}}else return Ot("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}}let Md=0;class Cl{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:Md++}),this.uuid=Wn(),this.data=t,this.dataReady=!0,this.version=0}getSize(t){const e=this.data;return typeof HTMLVideoElement<"u"&&e instanceof HTMLVideoElement?t.set(e.videoWidth,e.videoHeight,0):typeof VideoFrame<"u"&&e instanceof VideoFrame?t.set(e.displayHeight,e.displayWidth,0):e!==null?t.set(e.width,e.height,e.depth||0):t.set(0,0,0),t}set needsUpdate(t){t===!0&&this.version++}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];const n={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let a=0,o=s.length;a<o;a++)s[a].isDataTexture?r.push(Sa(s[a].image)):r.push(Sa(s[a]))}else r=Sa(s);n.url=r}return e||(t.images[this.uuid]=n),n}}function Sa(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?vd.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(Ot("Texture: Unable to serialize Texture."),{})}let yd=0;const wa=new D;class Ze extends Es{constructor(t=Ze.DEFAULT_IMAGE,e=Ze.DEFAULT_MAPPING,n=ei,s=ei,r=He,a=ki,o=Nn,l=fn,c=Ze.DEFAULT_ANISOTROPY,h=_i){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:yd++}),this.uuid=Wn(),this.name="",this.source=new Cl(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=n,this.wrapT=s,this.magFilter=r,this.minFilter=a,this.anisotropy=c,this.format=o,this.internalFormat=null,this.type=l,this.offset=new ut(0,0),this.repeat=new ut(1,1),this.center=new ut(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Yt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(t&&t.depth&&t.depth>1),this.pmremVersion=0}get width(){return this.source.getSize(wa).x}get height(){return this.source.getSize(wa).y}get depth(){return this.source.getSize(wa).z}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.renderTarget=t.renderTarget,this.isRenderTargetTexture=t.isRenderTargetTexture,this.isArrayTexture=t.isArrayTexture,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}setValues(t){for(const e in t){const n=t[e];if(n===void 0){Ot(`Texture.setValues(): parameter '${e}' has value of undefined.`);continue}const s=this[e];if(s===void 0){Ot(`Texture.setValues(): property '${e}' does not exist.`);continue}s&&n&&s.isVector2&&n.isVector2||s&&n&&s.isVector3&&n.isVector3||s&&n&&s.isMatrix3&&n.isMatrix3?s.copy(n):this[e]=n}}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];const n={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),e||(t.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==gh)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case vo:t.x=t.x-Math.floor(t.x);break;case ei:t.x=t.x<0?0:1;break;case Mo:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case vo:t.y=t.y-Math.floor(t.y);break;case ei:t.y=t.y<0?0:1;break;case Mo:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}}Ze.DEFAULT_IMAGE=null;Ze.DEFAULT_MAPPING=gh;Ze.DEFAULT_ANISOTROPY=1;class Ee{constructor(t=0,e=0,n=0,s=1){Ee.prototype.isVector4=!0,this.x=t,this.y=e,this.z=n,this.w=s}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,n,s){return this.x=t,this.y=e,this.z=n,this.w=s,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){const e=this.x,n=this.y,s=this.z,r=this.w,a=t.elements;return this.x=a[0]*e+a[4]*n+a[8]*s+a[12]*r,this.y=a[1]*e+a[5]*n+a[9]*s+a[13]*r,this.z=a[2]*e+a[6]*n+a[10]*s+a[14]*r,this.w=a[3]*e+a[7]*n+a[11]*s+a[15]*r,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);const e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,n,s,r;const l=t.elements,c=l[0],h=l[4],u=l[8],d=l[1],f=l[5],g=l[9],x=l[2],m=l[6],p=l[10];if(Math.abs(h-d)<.01&&Math.abs(u-x)<.01&&Math.abs(g-m)<.01){if(Math.abs(h+d)<.1&&Math.abs(u+x)<.1&&Math.abs(g+m)<.1&&Math.abs(c+f+p-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;const b=(c+1)/2,M=(f+1)/2,y=(p+1)/2,T=(h+d)/4,C=(u+x)/4,L=(g+m)/4;return b>M&&b>y?b<.01?(n=0,s=.707106781,r=.707106781):(n=Math.sqrt(b),s=T/n,r=C/n):M>y?M<.01?(n=.707106781,s=0,r=.707106781):(s=Math.sqrt(M),n=T/s,r=L/s):y<.01?(n=.707106781,s=.707106781,r=0):(r=Math.sqrt(y),n=C/r,s=L/r),this.set(n,s,r,e),this}let w=Math.sqrt((m-g)*(m-g)+(u-x)*(u-x)+(d-h)*(d-h));return Math.abs(w)<.001&&(w=1),this.x=(m-g)/w,this.y=(u-x)/w,this.z=(d-h)/w,this.w=Math.acos((c+f+p-1)/2),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this.w=e[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=Jt(this.x,t.x,e.x),this.y=Jt(this.y,t.y,e.y),this.z=Jt(this.z,t.z,e.z),this.w=Jt(this.w,t.w,e.w),this}clampScalar(t,e){return this.x=Jt(this.x,t,e),this.y=Jt(this.y,t,e),this.z=Jt(this.z,t,e),this.w=Jt(this.w,t,e),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Jt(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this.w=t.w+(e.w-t.w)*n,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class Sd extends Es{constructor(t=1,e=1,n={}){super(),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:He,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1},n),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=n.depth,this.scissor=new Ee(0,0,t,e),this.scissorTest=!1,this.viewport=new Ee(0,0,t,e);const s={width:t,height:e,depth:n.depth},r=new Ze(s);this.textures=[];const a=n.count;for(let o=0;o<a;o++)this.textures[o]=r.clone(),this.textures[o].isRenderTargetTexture=!0,this.textures[o].renderTarget=this;this._setTextureOptions(n),this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples,this.multiview=n.multiview}_setTextureOptions(t={}){const e={minFilter:He,generateMipmaps:!1,flipY:!1,internalFormat:null};t.mapping!==void 0&&(e.mapping=t.mapping),t.wrapS!==void 0&&(e.wrapS=t.wrapS),t.wrapT!==void 0&&(e.wrapT=t.wrapT),t.wrapR!==void 0&&(e.wrapR=t.wrapR),t.magFilter!==void 0&&(e.magFilter=t.magFilter),t.minFilter!==void 0&&(e.minFilter=t.minFilter),t.format!==void 0&&(e.format=t.format),t.type!==void 0&&(e.type=t.type),t.anisotropy!==void 0&&(e.anisotropy=t.anisotropy),t.colorSpace!==void 0&&(e.colorSpace=t.colorSpace),t.flipY!==void 0&&(e.flipY=t.flipY),t.generateMipmaps!==void 0&&(e.generateMipmaps=t.generateMipmaps),t.internalFormat!==void 0&&(e.internalFormat=t.internalFormat);for(let n=0;n<this.textures.length;n++)this.textures[n].setValues(e)}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}set depthTexture(t){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),t!==null&&(t.renderTarget=this),this._depthTexture=t}get depthTexture(){return this._depthTexture}setSize(t,e,n=1){if(this.width!==t||this.height!==e||this.depth!==n){this.width=t,this.height=e,this.depth=n;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=t,this.textures[s].image.height=e,this.textures[s].image.depth=n,this.textures[s].isData3DTexture!==!0&&(this.textures[s].isArrayTexture=this.textures[s].image.depth>1);this.dispose()}this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let e=0,n=t.textures.length;e<n;e++){this.textures[e]=t.textures[e].clone(),this.textures[e].isRenderTargetTexture=!0,this.textures[e].renderTarget=this;const s=Object.assign({},t.textures[e].image);this.textures[e].source=new Cl(s)}return this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Xn extends Sd{constructor(t=1,e=1,n={}){super(t,e,n),this.isWebGLRenderTarget=!0}}class bh extends Ze{constructor(t=null,e=1,n=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:n,depth:s},this.magFilter=Ve,this.minFilter=Ve,this.wrapR=ei,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}}class wd extends Ze{constructor(t=null,e=1,n=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:n,depth:s},this.magFilter=Ve,this.minFilter=Ve,this.wrapR=ei,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Wi{constructor(t=new D(1/0,1/0,1/0),e=new D(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e+=3)this.expandByPoint(Tn.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,n=t.count;e<n;e++)this.expandByPoint(Tn.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){const n=Tn.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(n),this.max.copy(t).add(n),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);const n=t.geometry;if(n!==void 0){const r=n.getAttribute("position");if(e===!0&&r!==void 0&&t.isInstancedMesh!==!0)for(let a=0,o=r.count;a<o;a++)t.isMesh===!0?t.getVertexPosition(a,Tn):Tn.fromBufferAttribute(r,a),Tn.applyMatrix4(t.matrixWorld),this.expandByPoint(Tn);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),ur.copy(t.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),ur.copy(n.boundingBox)),ur.applyMatrix4(t.matrixWorld),this.union(ur)}const s=t.children;for(let r=0,a=s.length;r<a;r++)this.expandByObject(s[r],e);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,Tn),Tn.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,n;return t.normal.x>0?(e=t.normal.x*this.min.x,n=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,n=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,n+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,n+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,n+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,n+=t.normal.z*this.min.z),e<=-t.constant&&n>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(Rs),dr.subVectors(this.max,Rs),Zi.subVectors(t.a,Rs),$i.subVectors(t.b,Rs),Ki.subVectors(t.c,Rs),hi.subVectors($i,Zi),ui.subVectors(Ki,$i),Ci.subVectors(Zi,Ki);let e=[0,-hi.z,hi.y,0,-ui.z,ui.y,0,-Ci.z,Ci.y,hi.z,0,-hi.x,ui.z,0,-ui.x,Ci.z,0,-Ci.x,-hi.y,hi.x,0,-ui.y,ui.x,0,-Ci.y,Ci.x,0];return!ba(e,Zi,$i,Ki,dr)||(e=[1,0,0,0,1,0,0,0,1],!ba(e,Zi,$i,Ki,dr))?!1:(fr.crossVectors(hi,ui),e=[fr.x,fr.y,fr.z],ba(e,Zi,$i,Ki,dr))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,Tn).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(Tn).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:($n[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),$n[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),$n[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),$n[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),$n[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),$n[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),$n[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),$n[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints($n),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(t){return this.min.fromArray(t.min),this.max.fromArray(t.max),this}}const $n=[new D,new D,new D,new D,new D,new D,new D,new D],Tn=new D,ur=new Wi,Zi=new D,$i=new D,Ki=new D,hi=new D,ui=new D,Ci=new D,Rs=new D,dr=new D,fr=new D,Ai=new D;function ba(i,t,e,n,s){for(let r=0,a=i.length-3;r<=a;r+=3){Ai.fromArray(i,r);const o=s.x*Math.abs(Ai.x)+s.y*Math.abs(Ai.y)+s.z*Math.abs(Ai.z),l=t.dot(Ai),c=e.dot(Ai),h=n.dot(Ai);if(Math.max(-Math.max(l,c,h),Math.min(l,c,h))>o)return!1}return!0}const bd=new Wi,Ps=new D,Ea=new D;class ar{constructor(t=new D,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){const n=this.center;e!==void 0?n.copy(e):bd.setFromPoints(t).getCenter(n);let s=0;for(let r=0,a=t.length;r<a;r++)s=Math.max(s,n.distanceToSquared(t[r]));return this.radius=Math.sqrt(s),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){const e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){const n=this.center.distanceToSquared(t);return e.copy(t),n>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;Ps.subVectors(t,this.center);const e=Ps.lengthSq();if(e>this.radius*this.radius){const n=Math.sqrt(e),s=(n-this.radius)*.5;this.center.addScaledVector(Ps,s/n),this.radius+=s}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(Ea.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(Ps.copy(t.center).add(Ea)),this.expandByPoint(Ps.copy(t.center).sub(Ea))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(t){return this.radius=t.radius,this.center.fromArray(t.center),this}}const Kn=new D,Ta=new D,pr=new D,di=new D,Ca=new D,mr=new D,Aa=new D;class Ed{constructor(t=new D,e=new D(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,Kn)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);const n=e.dot(this.direction);return n<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){const e=Kn.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(Kn.copy(this.origin).addScaledVector(this.direction,e),Kn.distanceToSquared(t))}distanceSqToSegment(t,e,n,s){Ta.copy(t).add(e).multiplyScalar(.5),pr.copy(e).sub(t).normalize(),di.copy(this.origin).sub(Ta);const r=t.distanceTo(e)*.5,a=-this.direction.dot(pr),o=di.dot(this.direction),l=-di.dot(pr),c=di.lengthSq(),h=Math.abs(1-a*a);let u,d,f,g;if(h>0)if(u=a*l-o,d=a*o-l,g=r*h,u>=0)if(d>=-g)if(d<=g){const x=1/h;u*=x,d*=x,f=u*(u+a*d+2*o)+d*(a*u+d+2*l)+c}else d=r,u=Math.max(0,-(a*d+o)),f=-u*u+d*(d+2*l)+c;else d=-r,u=Math.max(0,-(a*d+o)),f=-u*u+d*(d+2*l)+c;else d<=-g?(u=Math.max(0,-(-a*r+o)),d=u>0?-r:Math.min(Math.max(-r,-l),r),f=-u*u+d*(d+2*l)+c):d<=g?(u=0,d=Math.min(Math.max(-r,-l),r),f=d*(d+2*l)+c):(u=Math.max(0,-(a*r+o)),d=u>0?r:Math.min(Math.max(-r,-l),r),f=-u*u+d*(d+2*l)+c);else d=a>0?-r:r,u=Math.max(0,-(a*d+o)),f=-u*u+d*(d+2*l)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,u),s&&s.copy(Ta).addScaledVector(pr,d),f}intersectSphere(t,e){Kn.subVectors(t.center,this.origin);const n=Kn.dot(this.direction),s=Kn.dot(Kn)-n*n,r=t.radius*t.radius;if(s>r)return null;const a=Math.sqrt(r-s),o=n-a,l=n+a;return l<0?null:o<0?this.at(l,e):this.at(o,e)}intersectsSphere(t){return t.radius<0?!1:this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){const e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(t.normal)+t.constant)/e;return n>=0?n:null}intersectPlane(t,e){const n=this.distanceToPlane(t);return n===null?null:this.at(n,e)}intersectsPlane(t){const e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let n,s,r,a,o,l;const c=1/this.direction.x,h=1/this.direction.y,u=1/this.direction.z,d=this.origin;return c>=0?(n=(t.min.x-d.x)*c,s=(t.max.x-d.x)*c):(n=(t.max.x-d.x)*c,s=(t.min.x-d.x)*c),h>=0?(r=(t.min.y-d.y)*h,a=(t.max.y-d.y)*h):(r=(t.max.y-d.y)*h,a=(t.min.y-d.y)*h),n>a||r>s||((r>n||isNaN(n))&&(n=r),(a<s||isNaN(s))&&(s=a),u>=0?(o=(t.min.z-d.z)*u,l=(t.max.z-d.z)*u):(o=(t.max.z-d.z)*u,l=(t.min.z-d.z)*u),n>l||o>s)||((o>n||n!==n)&&(n=o),(l<s||s!==s)&&(s=l),s<0)?null:this.at(n>=0?n:s,e)}intersectsBox(t){return this.intersectBox(t,Kn)!==null}intersectTriangle(t,e,n,s,r){Ca.subVectors(e,t),mr.subVectors(n,t),Aa.crossVectors(Ca,mr);let a=this.direction.dot(Aa),o;if(a>0){if(s)return null;o=1}else if(a<0)o=-1,a=-a;else return null;di.subVectors(this.origin,t);const l=o*this.direction.dot(mr.crossVectors(di,mr));if(l<0)return null;const c=o*this.direction.dot(Ca.cross(di));if(c<0||l+c>a)return null;const h=-o*di.dot(Aa);return h<0?null:this.at(h/a,r)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Qt{constructor(t,e,n,s,r,a,o,l,c,h,u,d,f,g,x,m){Qt.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,n,s,r,a,o,l,c,h,u,d,f,g,x,m)}set(t,e,n,s,r,a,o,l,c,h,u,d,f,g,x,m){const p=this.elements;return p[0]=t,p[4]=e,p[8]=n,p[12]=s,p[1]=r,p[5]=a,p[9]=o,p[13]=l,p[2]=c,p[6]=h,p[10]=u,p[14]=d,p[3]=f,p[7]=g,p[11]=x,p[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Qt().fromArray(this.elements)}copy(t){const e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],e[9]=n[9],e[10]=n[10],e[11]=n[11],e[12]=n[12],e[13]=n[13],e[14]=n[14],e[15]=n[15],this}copyPosition(t){const e=this.elements,n=t.elements;return e[12]=n[12],e[13]=n[13],e[14]=n[14],this}setFromMatrix3(t){const e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,n){return this.determinant()===0?(t.set(1,0,0),e.set(0,1,0),n.set(0,0,1),this):(t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this)}makeBasis(t,e,n){return this.set(t.x,e.x,n.x,0,t.y,e.y,n.y,0,t.z,e.z,n.z,0,0,0,0,1),this}extractRotation(t){if(t.determinant()===0)return this.identity();const e=this.elements,n=t.elements,s=1/Ji.setFromMatrixColumn(t,0).length(),r=1/Ji.setFromMatrixColumn(t,1).length(),a=1/Ji.setFromMatrixColumn(t,2).length();return e[0]=n[0]*s,e[1]=n[1]*s,e[2]=n[2]*s,e[3]=0,e[4]=n[4]*r,e[5]=n[5]*r,e[6]=n[6]*r,e[7]=0,e[8]=n[8]*a,e[9]=n[9]*a,e[10]=n[10]*a,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){const e=this.elements,n=t.x,s=t.y,r=t.z,a=Math.cos(n),o=Math.sin(n),l=Math.cos(s),c=Math.sin(s),h=Math.cos(r),u=Math.sin(r);if(t.order==="XYZ"){const d=a*h,f=a*u,g=o*h,x=o*u;e[0]=l*h,e[4]=-l*u,e[8]=c,e[1]=f+g*c,e[5]=d-x*c,e[9]=-o*l,e[2]=x-d*c,e[6]=g+f*c,e[10]=a*l}else if(t.order==="YXZ"){const d=l*h,f=l*u,g=c*h,x=c*u;e[0]=d+x*o,e[4]=g*o-f,e[8]=a*c,e[1]=a*u,e[5]=a*h,e[9]=-o,e[2]=f*o-g,e[6]=x+d*o,e[10]=a*l}else if(t.order==="ZXY"){const d=l*h,f=l*u,g=c*h,x=c*u;e[0]=d-x*o,e[4]=-a*u,e[8]=g+f*o,e[1]=f+g*o,e[5]=a*h,e[9]=x-d*o,e[2]=-a*c,e[6]=o,e[10]=a*l}else if(t.order==="ZYX"){const d=a*h,f=a*u,g=o*h,x=o*u;e[0]=l*h,e[4]=g*c-f,e[8]=d*c+x,e[1]=l*u,e[5]=x*c+d,e[9]=f*c-g,e[2]=-c,e[6]=o*l,e[10]=a*l}else if(t.order==="YZX"){const d=a*l,f=a*c,g=o*l,x=o*c;e[0]=l*h,e[4]=x-d*u,e[8]=g*u+f,e[1]=u,e[5]=a*h,e[9]=-o*h,e[2]=-c*h,e[6]=f*u+g,e[10]=d-x*u}else if(t.order==="XZY"){const d=a*l,f=a*c,g=o*l,x=o*c;e[0]=l*h,e[4]=-u,e[8]=c*h,e[1]=d*u+x,e[5]=a*h,e[9]=f*u-g,e[2]=g*u-f,e[6]=o*h,e[10]=x*u+d}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(Td,t,Cd)}lookAt(t,e,n){const s=this.elements;return cn.subVectors(t,e),cn.lengthSq()===0&&(cn.z=1),cn.normalize(),fi.crossVectors(n,cn),fi.lengthSq()===0&&(Math.abs(n.z)===1?cn.x+=1e-4:cn.z+=1e-4,cn.normalize(),fi.crossVectors(n,cn)),fi.normalize(),gr.crossVectors(cn,fi),s[0]=fi.x,s[4]=gr.x,s[8]=cn.x,s[1]=fi.y,s[5]=gr.y,s[9]=cn.y,s[2]=fi.z,s[6]=gr.z,s[10]=cn.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const n=t.elements,s=e.elements,r=this.elements,a=n[0],o=n[4],l=n[8],c=n[12],h=n[1],u=n[5],d=n[9],f=n[13],g=n[2],x=n[6],m=n[10],p=n[14],w=n[3],b=n[7],M=n[11],y=n[15],T=s[0],C=s[4],L=s[8],v=s[12],S=s[1],P=s[5],I=s[9],F=s[13],B=s[2],N=s[6],H=s[10],z=s[14],$=s[3],st=s[7],Z=s[11],j=s[15];return r[0]=a*T+o*S+l*B+c*$,r[4]=a*C+o*P+l*N+c*st,r[8]=a*L+o*I+l*H+c*Z,r[12]=a*v+o*F+l*z+c*j,r[1]=h*T+u*S+d*B+f*$,r[5]=h*C+u*P+d*N+f*st,r[9]=h*L+u*I+d*H+f*Z,r[13]=h*v+u*F+d*z+f*j,r[2]=g*T+x*S+m*B+p*$,r[6]=g*C+x*P+m*N+p*st,r[10]=g*L+x*I+m*H+p*Z,r[14]=g*v+x*F+m*z+p*j,r[3]=w*T+b*S+M*B+y*$,r[7]=w*C+b*P+M*N+y*st,r[11]=w*L+b*I+M*H+y*Z,r[15]=w*v+b*F+M*z+y*j,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){const t=this.elements,e=t[0],n=t[4],s=t[8],r=t[12],a=t[1],o=t[5],l=t[9],c=t[13],h=t[2],u=t[6],d=t[10],f=t[14],g=t[3],x=t[7],m=t[11],p=t[15],w=l*f-c*d,b=o*f-c*u,M=o*d-l*u,y=a*f-c*h,T=a*d-l*h,C=a*u-o*h;return e*(x*w-m*b+p*M)-n*(g*w-m*y+p*T)+s*(g*b-x*y+p*C)-r*(g*M-x*T+m*C)}transpose(){const t=this.elements;let e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,n){const s=this.elements;return t.isVector3?(s[12]=t.x,s[13]=t.y,s[14]=t.z):(s[12]=t,s[13]=e,s[14]=n),this}invert(){const t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],a=t[4],o=t[5],l=t[6],c=t[7],h=t[8],u=t[9],d=t[10],f=t[11],g=t[12],x=t[13],m=t[14],p=t[15],w=u*m*c-x*d*c+x*l*f-o*m*f-u*l*p+o*d*p,b=g*d*c-h*m*c-g*l*f+a*m*f+h*l*p-a*d*p,M=h*x*c-g*u*c+g*o*f-a*x*f-h*o*p+a*u*p,y=g*u*l-h*x*l-g*o*d+a*x*d+h*o*m-a*u*m,T=e*w+n*b+s*M+r*y;if(T===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const C=1/T;return t[0]=w*C,t[1]=(x*d*r-u*m*r-x*s*f+n*m*f+u*s*p-n*d*p)*C,t[2]=(o*m*r-x*l*r+x*s*c-n*m*c-o*s*p+n*l*p)*C,t[3]=(u*l*r-o*d*r-u*s*c+n*d*c+o*s*f-n*l*f)*C,t[4]=b*C,t[5]=(h*m*r-g*d*r+g*s*f-e*m*f-h*s*p+e*d*p)*C,t[6]=(g*l*r-a*m*r-g*s*c+e*m*c+a*s*p-e*l*p)*C,t[7]=(a*d*r-h*l*r+h*s*c-e*d*c-a*s*f+e*l*f)*C,t[8]=M*C,t[9]=(g*u*r-h*x*r-g*n*f+e*x*f+h*n*p-e*u*p)*C,t[10]=(a*x*r-g*o*r+g*n*c-e*x*c-a*n*p+e*o*p)*C,t[11]=(h*o*r-a*u*r-h*n*c+e*u*c+a*n*f-e*o*f)*C,t[12]=y*C,t[13]=(h*x*s-g*u*s+g*n*d-e*x*d-h*n*m+e*u*m)*C,t[14]=(g*o*s-a*x*s-g*n*l+e*x*l+a*n*m-e*o*m)*C,t[15]=(a*u*s-h*o*s+h*n*l-e*u*l-a*n*d+e*o*d)*C,this}scale(t){const e=this.elements,n=t.x,s=t.y,r=t.z;return e[0]*=n,e[4]*=s,e[8]*=r,e[1]*=n,e[5]*=s,e[9]*=r,e[2]*=n,e[6]*=s,e[10]*=r,e[3]*=n,e[7]*=s,e[11]*=r,this}getMaxScaleOnAxis(){const t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],n=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],s=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,n,s))}makeTranslation(t,e,n){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,n,0,0,0,1),this}makeRotationX(t){const e=Math.cos(t),n=Math.sin(t);return this.set(1,0,0,0,0,e,-n,0,0,n,e,0,0,0,0,1),this}makeRotationY(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,0,n,0,0,1,0,0,-n,0,e,0,0,0,0,1),this}makeRotationZ(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,0,n,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){const n=Math.cos(e),s=Math.sin(e),r=1-n,a=t.x,o=t.y,l=t.z,c=r*a,h=r*o;return this.set(c*a+n,c*o-s*l,c*l+s*o,0,c*o+s*l,h*o+n,h*l-s*a,0,c*l-s*o,h*l+s*a,r*l*l+n,0,0,0,0,1),this}makeScale(t,e,n){return this.set(t,0,0,0,0,e,0,0,0,0,n,0,0,0,0,1),this}makeShear(t,e,n,s,r,a){return this.set(1,n,r,0,t,1,a,0,e,s,1,0,0,0,0,1),this}compose(t,e,n){const s=this.elements,r=e._x,a=e._y,o=e._z,l=e._w,c=r+r,h=a+a,u=o+o,d=r*c,f=r*h,g=r*u,x=a*h,m=a*u,p=o*u,w=l*c,b=l*h,M=l*u,y=n.x,T=n.y,C=n.z;return s[0]=(1-(x+p))*y,s[1]=(f+M)*y,s[2]=(g-b)*y,s[3]=0,s[4]=(f-M)*T,s[5]=(1-(d+p))*T,s[6]=(m+w)*T,s[7]=0,s[8]=(g+b)*C,s[9]=(m-w)*C,s[10]=(1-(d+x))*C,s[11]=0,s[12]=t.x,s[13]=t.y,s[14]=t.z,s[15]=1,this}decompose(t,e,n){const s=this.elements;if(t.x=s[12],t.y=s[13],t.z=s[14],this.determinant()===0)return n.set(1,1,1),e.identity(),this;let r=Ji.set(s[0],s[1],s[2]).length();const a=Ji.set(s[4],s[5],s[6]).length(),o=Ji.set(s[8],s[9],s[10]).length();this.determinant()<0&&(r=-r),Cn.copy(this);const c=1/r,h=1/a,u=1/o;return Cn.elements[0]*=c,Cn.elements[1]*=c,Cn.elements[2]*=c,Cn.elements[4]*=h,Cn.elements[5]*=h,Cn.elements[6]*=h,Cn.elements[8]*=u,Cn.elements[9]*=u,Cn.elements[10]*=u,e.setFromRotationMatrix(Cn),n.x=r,n.y=a,n.z=o,this}makePerspective(t,e,n,s,r,a,o=zn,l=!1){const c=this.elements,h=2*r/(e-t),u=2*r/(n-s),d=(e+t)/(e-t),f=(n+s)/(n-s);let g,x;if(l)g=r/(a-r),x=a*r/(a-r);else if(o===zn)g=-(a+r)/(a-r),x=-2*a*r/(a-r);else if(o===Kr)g=-a/(a-r),x=-a*r/(a-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return c[0]=h,c[4]=0,c[8]=d,c[12]=0,c[1]=0,c[5]=u,c[9]=f,c[13]=0,c[2]=0,c[6]=0,c[10]=g,c[14]=x,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(t,e,n,s,r,a,o=zn,l=!1){const c=this.elements,h=2/(e-t),u=2/(n-s),d=-(e+t)/(e-t),f=-(n+s)/(n-s);let g,x;if(l)g=1/(a-r),x=a/(a-r);else if(o===zn)g=-2/(a-r),x=-(a+r)/(a-r);else if(o===Kr)g=-1/(a-r),x=-r/(a-r);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return c[0]=h,c[4]=0,c[8]=0,c[12]=d,c[1]=0,c[5]=u,c[9]=0,c[13]=f,c[2]=0,c[6]=0,c[10]=g,c[14]=x,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(t){const e=this.elements,n=t.elements;for(let s=0;s<16;s++)if(e[s]!==n[s])return!1;return!0}fromArray(t,e=0){for(let n=0;n<16;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){const n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t[e+9]=n[9],t[e+10]=n[10],t[e+11]=n[11],t[e+12]=n[12],t[e+13]=n[13],t[e+14]=n[14],t[e+15]=n[15],t}}const Ji=new D,Cn=new Qt,Td=new D(0,0,0),Cd=new D(1,1,1),fi=new D,gr=new D,cn=new D,ic=new Qt,sc=new qe;class Ne{constructor(t=0,e=0,n=0,s=Ne.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=n,this._order=s}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,n,s=this._order){return this._x=t,this._y=e,this._z=n,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,n=!0){const s=t.elements,r=s[0],a=s[4],o=s[8],l=s[1],c=s[5],h=s[9],u=s[2],d=s[6],f=s[10];switch(e){case"XYZ":this._y=Math.asin(Jt(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-h,f),this._z=Math.atan2(-a,r)):(this._x=Math.atan2(d,c),this._z=0);break;case"YXZ":this._x=Math.asin(-Jt(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(o,f),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-u,r),this._z=0);break;case"ZXY":this._x=Math.asin(Jt(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-u,f),this._z=Math.atan2(-a,c)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-Jt(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(d,f),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-a,c));break;case"YZX":this._z=Math.asin(Jt(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-h,c),this._y=Math.atan2(-u,r)):(this._x=0,this._y=Math.atan2(o,f));break;case"XZY":this._z=Math.asin(-Jt(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(d,c),this._y=Math.atan2(o,r)):(this._x=Math.atan2(-h,f),this._y=0);break;default:Ot("Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,n===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,n){return ic.makeRotationFromQuaternion(t),this.setFromRotationMatrix(ic,e,n)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return sc.setFromEuler(this),this.setFromQuaternion(sc,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Ne.DEFAULT_ORDER="XYZ";class Eh{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}}let Ad=0;const rc=new D,ji=new qe,Jn=new Qt,xr=new D,Is=new D,Rd=new D,Pd=new qe,ac=new D(1,0,0),oc=new D(0,1,0),lc=new D(0,0,1),cc={type:"added"},Id={type:"removed"},Qi={type:"childadded",child:null},Ra={type:"childremoved",child:null};class Fe extends Es{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Ad++}),this.uuid=Wn(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Fe.DEFAULT_UP.clone();const t=new D,e=new Ne,n=new qe,s=new D(1,1,1);function r(){n.setFromEuler(e,!1)}function a(){e.setFromQuaternion(n,void 0,!1)}e._onChange(r),n._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new Qt},normalMatrix:{value:new Yt}}),this.matrix=new Qt,this.matrixWorld=new Qt,this.matrixAutoUpdate=Fe.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Fe.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Eh,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return ji.setFromAxisAngle(t,e),this.quaternion.multiply(ji),this}rotateOnWorldAxis(t,e){return ji.setFromAxisAngle(t,e),this.quaternion.premultiply(ji),this}rotateX(t){return this.rotateOnAxis(ac,t)}rotateY(t){return this.rotateOnAxis(oc,t)}rotateZ(t){return this.rotateOnAxis(lc,t)}translateOnAxis(t,e){return rc.copy(t).applyQuaternion(this.quaternion),this.position.add(rc.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(ac,t)}translateY(t){return this.translateOnAxis(oc,t)}translateZ(t){return this.translateOnAxis(lc,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(Jn.copy(this.matrixWorld).invert())}lookAt(t,e,n){t.isVector3?xr.copy(t):xr.set(t,e,n);const s=this.parent;this.updateWorldMatrix(!0,!1),Is.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Jn.lookAt(Is,xr,this.up):Jn.lookAt(xr,Is,this.up),this.quaternion.setFromRotationMatrix(Jn),s&&(Jn.extractRotation(s.matrixWorld),ji.setFromRotationMatrix(Jn),this.quaternion.premultiply(ji.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(ee("Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(cc),Qi.child=t,this.dispatchEvent(Qi),Qi.child=null):ee("Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(Id),Ra.child=t,this.dispatchEvent(Ra),Ra.child=null),this}removeFromParent(){const t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),Jn.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),Jn.multiply(t.parent.matrixWorld)),t.applyMatrix4(Jn),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(cc),Qi.child=t,this.dispatchEvent(Qi),Qi.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let n=0,s=this.children.length;n<s;n++){const a=this.children[n].getObjectByProperty(t,e);if(a!==void 0)return a}}getObjectsByProperty(t,e,n=[]){this[t]===e&&n.push(this);const s=this.children;for(let r=0,a=s.length;r<a;r++)s[r].getObjectsByProperty(t,e,n);return n}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Is,t,Rd),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Is,Pd,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);const e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}traverse(t){t(this);const e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);const e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].traverseVisible(t)}traverseAncestors(t){const e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);const e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].updateMatrixWorld(t)}updateWorldMatrix(t,e){const n=this.parent;if(t===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),e===!0){const s=this.children;for(let r=0,a=s.length;r<a;r++)s[r].updateWorldMatrix(!1,!0)}}toJSON(t){const e=t===void 0||typeof t=="string",n={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const s={};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.castShadow===!0&&(s.castShadow=!0),this.receiveShadow===!0&&(s.receiveShadow=!0),this.visible===!1&&(s.visible=!1),this.frustumCulled===!1&&(s.frustumCulled=!1),this.renderOrder!==0&&(s.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(s.matrixAutoUpdate=!1),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.geometryInfo=this._geometryInfo.map(o=>({...o,boundingBox:o.boundingBox?o.boundingBox.toJSON():void 0,boundingSphere:o.boundingSphere?o.boundingSphere.toJSON():void 0})),s.instanceInfo=this._instanceInfo.map(o=>({...o})),s.availableInstanceIds=this._availableInstanceIds.slice(),s.availableGeometryIds=this._availableGeometryIds.slice(),s.nextIndexStart=this._nextIndexStart,s.nextVertexStart=this._nextVertexStart,s.geometryCount=this._geometryCount,s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.matricesTexture=this._matricesTexture.toJSON(t),s.indirectTexture=this._indirectTexture.toJSON(t),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(s.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(s.boundingBox=this.boundingBox.toJSON()));function r(o,l){return o[l.uuid]===void 0&&(o[l.uuid]=l.toJSON(t)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(t.geometries,this.geometry);const o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){const l=o.shapes;if(Array.isArray(l))for(let c=0,h=l.length;c<h;c++){const u=l[c];r(t.shapes,u)}else r(t.shapes,l)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(t.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const o=[];for(let l=0,c=this.material.length;l<c;l++)o.push(r(t.materials,this.material[l]));s.material=o}else s.material=r(t.materials,this.material);if(this.children.length>0){s.children=[];for(let o=0;o<this.children.length;o++)s.children.push(this.children[o].toJSON(t).object)}if(this.animations.length>0){s.animations=[];for(let o=0;o<this.animations.length;o++){const l=this.animations[o];s.animations.push(r(t.animations,l))}}if(e){const o=a(t.geometries),l=a(t.materials),c=a(t.textures),h=a(t.images),u=a(t.shapes),d=a(t.skeletons),f=a(t.animations),g=a(t.nodes);o.length>0&&(n.geometries=o),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),h.length>0&&(n.images=h),u.length>0&&(n.shapes=u),d.length>0&&(n.skeletons=d),f.length>0&&(n.animations=f),g.length>0&&(n.nodes=g)}return n.object=s,n;function a(o){const l=[];for(const c in o){const h=o[c];delete h.metadata,l.push(h)}return l}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let n=0;n<t.children.length;n++){const s=t.children[n];this.add(s.clone())}return this}}Fe.DEFAULT_UP=new D(0,1,0);Fe.DEFAULT_MATRIX_AUTO_UPDATE=!0;Fe.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const An=new D,jn=new D,Pa=new D,Qn=new D,ts=new D,es=new D,hc=new D,Ia=new D,La=new D,Da=new D,Fa=new Ee,Na=new Ee,Ua=new Ee;class yn{constructor(t=new D,e=new D,n=new D){this.a=t,this.b=e,this.c=n}static getNormal(t,e,n,s){s.subVectors(n,e),An.subVectors(t,e),s.cross(An);const r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(t,e,n,s,r){An.subVectors(s,e),jn.subVectors(n,e),Pa.subVectors(t,e);const a=An.dot(An),o=An.dot(jn),l=An.dot(Pa),c=jn.dot(jn),h=jn.dot(Pa),u=a*c-o*o;if(u===0)return r.set(0,0,0),null;const d=1/u,f=(c*l-o*h)*d,g=(a*h-o*l)*d;return r.set(1-f-g,g,f)}static containsPoint(t,e,n,s){return this.getBarycoord(t,e,n,s,Qn)===null?!1:Qn.x>=0&&Qn.y>=0&&Qn.x+Qn.y<=1}static getInterpolation(t,e,n,s,r,a,o,l){return this.getBarycoord(t,e,n,s,Qn)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(r,Qn.x),l.addScaledVector(a,Qn.y),l.addScaledVector(o,Qn.z),l)}static getInterpolatedAttribute(t,e,n,s,r,a){return Fa.setScalar(0),Na.setScalar(0),Ua.setScalar(0),Fa.fromBufferAttribute(t,e),Na.fromBufferAttribute(t,n),Ua.fromBufferAttribute(t,s),a.setScalar(0),a.addScaledVector(Fa,r.x),a.addScaledVector(Na,r.y),a.addScaledVector(Ua,r.z),a}static isFrontFacing(t,e,n,s){return An.subVectors(n,e),jn.subVectors(t,e),An.cross(jn).dot(s)<0}set(t,e,n){return this.a.copy(t),this.b.copy(e),this.c.copy(n),this}setFromPointsAndIndices(t,e,n,s){return this.a.copy(t[e]),this.b.copy(t[n]),this.c.copy(t[s]),this}setFromAttributeAndIndices(t,e,n,s){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,n),this.c.fromBufferAttribute(t,s),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return An.subVectors(this.c,this.b),jn.subVectors(this.a,this.b),An.cross(jn).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return yn.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return yn.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,n,s,r){return yn.getInterpolation(t,this.a,this.b,this.c,e,n,s,r)}containsPoint(t){return yn.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return yn.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){const n=this.a,s=this.b,r=this.c;let a,o;ts.subVectors(s,n),es.subVectors(r,n),Ia.subVectors(t,n);const l=ts.dot(Ia),c=es.dot(Ia);if(l<=0&&c<=0)return e.copy(n);La.subVectors(t,s);const h=ts.dot(La),u=es.dot(La);if(h>=0&&u<=h)return e.copy(s);const d=l*u-h*c;if(d<=0&&l>=0&&h<=0)return a=l/(l-h),e.copy(n).addScaledVector(ts,a);Da.subVectors(t,r);const f=ts.dot(Da),g=es.dot(Da);if(g>=0&&f<=g)return e.copy(r);const x=f*c-l*g;if(x<=0&&c>=0&&g<=0)return o=c/(c-g),e.copy(n).addScaledVector(es,o);const m=h*g-f*u;if(m<=0&&u-h>=0&&f-g>=0)return hc.subVectors(r,s),o=(u-h)/(u-h+(f-g)),e.copy(s).addScaledVector(hc,o);const p=1/(m+x+d);return a=x*p,o=d*p,e.copy(n).addScaledVector(ts,a).addScaledVector(es,o)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}}const Th={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},pi={h:0,s:0,l:0},_r={h:0,s:0,l:0};function Oa(i,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?i+(t-i)*6*e:e<1/2?t:e<2/3?i+(t-i)*6*(2/3-e):i}class Bt{constructor(t,e,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,n)}set(t,e,n){if(e===void 0&&n===void 0){const s=t;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(t,e,n);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=xn){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,ie.colorSpaceToWorking(this,e),this}setRGB(t,e,n,s=ie.workingColorSpace){return this.r=t,this.g=e,this.b=n,ie.colorSpaceToWorking(this,s),this}setHSL(t,e,n,s=ie.workingColorSpace){if(t=Tl(t,1),e=Jt(e,0,1),n=Jt(n,0,1),e===0)this.r=this.g=this.b=n;else{const r=n<=.5?n*(1+e):n+e-n*e,a=2*n-r;this.r=Oa(a,r,t+1/3),this.g=Oa(a,r,t),this.b=Oa(a,r,t-1/3)}return ie.colorSpaceToWorking(this,s),this}setStyle(t,e=xn){function n(r){r!==void 0&&parseFloat(r)<1&&Ot("Color: Alpha component of "+t+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(t)){let r;const a=s[1],o=s[2];switch(a){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,e);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,e);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,e);break;default:Ot("Color: Unknown color model "+t)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(t)){const r=s[1],a=r.length;if(a===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,e);if(a===6)return this.setHex(parseInt(r,16),e);Ot("Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=xn){const n=Th[t.toLowerCase()];return n!==void 0?this.setHex(n,e):Ot("Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=ri(t.r),this.g=ri(t.g),this.b=ri(t.b),this}copyLinearToSRGB(t){return this.r=xs(t.r),this.g=xs(t.g),this.b=xs(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=xn){return ie.workingToColorSpace(Xe.copy(this),t),Math.round(Jt(Xe.r*255,0,255))*65536+Math.round(Jt(Xe.g*255,0,255))*256+Math.round(Jt(Xe.b*255,0,255))}getHexString(t=xn){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=ie.workingColorSpace){ie.workingToColorSpace(Xe.copy(this),e);const n=Xe.r,s=Xe.g,r=Xe.b,a=Math.max(n,s,r),o=Math.min(n,s,r);let l,c;const h=(o+a)/2;if(o===a)l=0,c=0;else{const u=a-o;switch(c=h<=.5?u/(a+o):u/(2-a-o),a){case n:l=(s-r)/u+(s<r?6:0);break;case s:l=(r-n)/u+2;break;case r:l=(n-s)/u+4;break}l/=6}return t.h=l,t.s=c,t.l=h,t}getRGB(t,e=ie.workingColorSpace){return ie.workingToColorSpace(Xe.copy(this),e),t.r=Xe.r,t.g=Xe.g,t.b=Xe.b,t}getStyle(t=xn){ie.workingToColorSpace(Xe.copy(this),t);const e=Xe.r,n=Xe.g,s=Xe.b;return t!==xn?`color(${t} ${e.toFixed(3)} ${n.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(n*255)},${Math.round(s*255)})`}offsetHSL(t,e,n){return this.getHSL(pi),this.setHSL(pi.h+t,pi.s+e,pi.l+n)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,n){return this.r=t.r+(e.r-t.r)*n,this.g=t.g+(e.g-t.g)*n,this.b=t.b+(e.b-t.b)*n,this}lerpHSL(t,e){this.getHSL(pi),t.getHSL(_r);const n=Zs(pi.h,_r.h,e),s=Zs(pi.s,_r.s,e),r=Zs(pi.l,_r.l,e);return this.setHSL(n,s,r),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){const e=this.r,n=this.g,s=this.b,r=t.elements;return this.r=r[0]*e+r[3]*n+r[6]*s,this.g=r[1]*e+r[4]*n+r[7]*s,this.b=r[2]*e+r[5]*n+r[8]*s,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Xe=new Bt;Bt.NAMES=Th;let Ld=0;class bi extends Es{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Ld++}),this.uuid=Wn(),this.name="",this.type="Material",this.blending=gs,this.side=wi,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=oo,this.blendDst=lo,this.blendEquation=Oi,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Bt(0,0,0),this.blendAlpha=0,this.depthFunc=_s,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Kl,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Yi,this.stencilZFail=Yi,this.stencilZPass=Yi,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(const e in t){const n=t[e];if(n===void 0){Ot(`Material: parameter '${e}' has value of undefined.`);continue}const s=this[e];if(s===void 0){Ot(`Material: '${e}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(n):s&&s.isVector3&&n&&n.isVector3?s.copy(n):this[e]=n}}toJSON(t){const e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});const n={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(n.sheenColorMap=this.sheenColorMap.toJSON(t).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(n.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(t).uuid),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(t).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(t).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(t).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(t).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(t).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==gs&&(n.blending=this.blending),this.side!==wi&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==oo&&(n.blendSrc=this.blendSrc),this.blendDst!==lo&&(n.blendDst=this.blendDst),this.blendEquation!==Oi&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==_s&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Kl&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Yi&&(n.stencilFail=this.stencilFail),this.stencilZFail!==Yi&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==Yi&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.allowOverride===!1&&(n.allowOverride=!1),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function s(r){const a=[];for(const o in r){const l=r[o];delete l.metadata,a.push(l)}return a}if(e){const r=s(t.textures),a=s(t.images);r.length>0&&(n.textures=r),a.length>0&&(n.images=a)}return n}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;const e=t.clippingPlanes;let n=null;if(e!==null){const s=e.length;n=new Array(s);for(let r=0;r!==s;++r)n[r]=e[r].clone()}return this.clippingPlanes=n,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.allowOverride=t.allowOverride,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}}class ze extends bi{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Bt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Ne,this.combine=ca,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}}const Ae=new D,vr=new ut;let Dd=0;class wn{constructor(t,e,n=!1){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:Dd++}),this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=n,this.usage=Qo,this.updateRanges=[],this.gpuType=Fn,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,n){t*=this.itemSize,n*=e.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[t+s]=e.array[n+s];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,n=this.count;e<n;e++)vr.fromBufferAttribute(this,e),vr.applyMatrix3(t),this.setXY(e,vr.x,vr.y);else if(this.itemSize===3)for(let e=0,n=this.count;e<n;e++)Ae.fromBufferAttribute(this,e),Ae.applyMatrix3(t),this.setXYZ(e,Ae.x,Ae.y,Ae.z);return this}applyMatrix4(t){for(let e=0,n=this.count;e<n;e++)Ae.fromBufferAttribute(this,e),Ae.applyMatrix4(t),this.setXYZ(e,Ae.x,Ae.y,Ae.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)Ae.fromBufferAttribute(this,e),Ae.applyNormalMatrix(t),this.setXYZ(e,Ae.x,Ae.y,Ae.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)Ae.fromBufferAttribute(this,e),Ae.transformDirection(t),this.setXYZ(e,Ae.x,Ae.y,Ae.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let n=this.array[t*this.itemSize+e];return this.normalized&&(n=Pn(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=de(n,this.array)),this.array[t*this.itemSize+e]=n,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=Pn(e,this.array)),e}setX(t,e){return this.normalized&&(e=de(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=Pn(e,this.array)),e}setY(t,e){return this.normalized&&(e=de(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=Pn(e,this.array)),e}setZ(t,e){return this.normalized&&(e=de(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=Pn(e,this.array)),e}setW(t,e){return this.normalized&&(e=de(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,n){return t*=this.itemSize,this.normalized&&(e=de(e,this.array),n=de(n,this.array)),this.array[t+0]=e,this.array[t+1]=n,this}setXYZ(t,e,n,s){return t*=this.itemSize,this.normalized&&(e=de(e,this.array),n=de(n,this.array),s=de(s,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=s,this}setXYZW(t,e,n,s,r){return t*=this.itemSize,this.normalized&&(e=de(e,this.array),n=de(n,this.array),s=de(s,this.array),r=de(r,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=s,this.array[t+3]=r,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==Qo&&(t.usage=this.usage),t}}class Ch extends wn{constructor(t,e,n){super(new Uint16Array(t),e,n)}}class Ah extends wn{constructor(t,e,n){super(new Uint32Array(t),e,n)}}class De extends wn{constructor(t,e,n){super(new Float32Array(t),e,n)}}let Fd=0;const mn=new Qt,Ba=new Fe,ns=new D,hn=new Wi,Ls=new Wi,Be=new D;class an extends Es{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Fd++}),this.uuid=Wn(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(wh(t)?Ah:Ch)(t,1):this.index=t,this}setIndirect(t,e=0){return this.indirect=t,this.indirectOffset=e,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,n=0){this.groups.push({start:t,count:e,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){const e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const r=new Yt().getNormalMatrix(t);n.applyNormalMatrix(r),n.needsUpdate=!0}const s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(t),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return mn.makeRotationFromQuaternion(t),this.applyMatrix4(mn),this}rotateX(t){return mn.makeRotationX(t),this.applyMatrix4(mn),this}rotateY(t){return mn.makeRotationY(t),this.applyMatrix4(mn),this}rotateZ(t){return mn.makeRotationZ(t),this.applyMatrix4(mn),this}translate(t,e,n){return mn.makeTranslation(t,e,n),this.applyMatrix4(mn),this}scale(t,e,n){return mn.makeScale(t,e,n),this.applyMatrix4(mn),this}lookAt(t){return Ba.lookAt(t),Ba.updateMatrix(),this.applyMatrix4(Ba.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(ns).negate(),this.translate(ns.x,ns.y,ns.z),this}setFromPoints(t){const e=this.getAttribute("position");if(e===void 0){const n=[];for(let s=0,r=t.length;s<r;s++){const a=t[s];n.push(a.x,a.y,a.z||0)}this.setAttribute("position",new De(n,3))}else{const n=Math.min(t.length,e.count);for(let s=0;s<n;s++){const r=t[s];e.setXYZ(s,r.x,r.y,r.z||0)}t.length>e.count&&Ot("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),e.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Wi);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){ee("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new D(-1/0,-1/0,-1/0),new D(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let n=0,s=e.length;n<s;n++){const r=e[n];hn.setFromBufferAttribute(r),this.morphTargetsRelative?(Be.addVectors(this.boundingBox.min,hn.min),this.boundingBox.expandByPoint(Be),Be.addVectors(this.boundingBox.max,hn.max),this.boundingBox.expandByPoint(Be)):(this.boundingBox.expandByPoint(hn.min),this.boundingBox.expandByPoint(hn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&ee('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new ar);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){ee("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new D,1/0);return}if(t){const n=this.boundingSphere.center;if(hn.setFromBufferAttribute(t),e)for(let r=0,a=e.length;r<a;r++){const o=e[r];Ls.setFromBufferAttribute(o),this.morphTargetsRelative?(Be.addVectors(hn.min,Ls.min),hn.expandByPoint(Be),Be.addVectors(hn.max,Ls.max),hn.expandByPoint(Be)):(hn.expandByPoint(Ls.min),hn.expandByPoint(Ls.max))}hn.getCenter(n);let s=0;for(let r=0,a=t.count;r<a;r++)Be.fromBufferAttribute(t,r),s=Math.max(s,n.distanceToSquared(Be));if(e)for(let r=0,a=e.length;r<a;r++){const o=e[r],l=this.morphTargetsRelative;for(let c=0,h=o.count;c<h;c++)Be.fromBufferAttribute(o,c),l&&(ns.fromBufferAttribute(t,c),Be.add(ns)),s=Math.max(s,n.distanceToSquared(Be))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&ee('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){ee("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=e.position,s=e.normal,r=e.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new wn(new Float32Array(4*n.count),4));const a=this.getAttribute("tangent"),o=[],l=[];for(let L=0;L<n.count;L++)o[L]=new D,l[L]=new D;const c=new D,h=new D,u=new D,d=new ut,f=new ut,g=new ut,x=new D,m=new D;function p(L,v,S){c.fromBufferAttribute(n,L),h.fromBufferAttribute(n,v),u.fromBufferAttribute(n,S),d.fromBufferAttribute(r,L),f.fromBufferAttribute(r,v),g.fromBufferAttribute(r,S),h.sub(c),u.sub(c),f.sub(d),g.sub(d);const P=1/(f.x*g.y-g.x*f.y);isFinite(P)&&(x.copy(h).multiplyScalar(g.y).addScaledVector(u,-f.y).multiplyScalar(P),m.copy(u).multiplyScalar(f.x).addScaledVector(h,-g.x).multiplyScalar(P),o[L].add(x),o[v].add(x),o[S].add(x),l[L].add(m),l[v].add(m),l[S].add(m))}let w=this.groups;w.length===0&&(w=[{start:0,count:t.count}]);for(let L=0,v=w.length;L<v;++L){const S=w[L],P=S.start,I=S.count;for(let F=P,B=P+I;F<B;F+=3)p(t.getX(F+0),t.getX(F+1),t.getX(F+2))}const b=new D,M=new D,y=new D,T=new D;function C(L){y.fromBufferAttribute(s,L),T.copy(y);const v=o[L];b.copy(v),b.sub(y.multiplyScalar(y.dot(v))).normalize(),M.crossVectors(T,v);const P=M.dot(l[L])<0?-1:1;a.setXYZW(L,b.x,b.y,b.z,P)}for(let L=0,v=w.length;L<v;++L){const S=w[L],P=S.start,I=S.count;for(let F=P,B=P+I;F<B;F+=3)C(t.getX(F+0)),C(t.getX(F+1)),C(t.getX(F+2))}}computeVertexNormals(){const t=this.index,e=this.getAttribute("position");if(e!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new wn(new Float32Array(e.count*3),3),this.setAttribute("normal",n);else for(let d=0,f=n.count;d<f;d++)n.setXYZ(d,0,0,0);const s=new D,r=new D,a=new D,o=new D,l=new D,c=new D,h=new D,u=new D;if(t)for(let d=0,f=t.count;d<f;d+=3){const g=t.getX(d+0),x=t.getX(d+1),m=t.getX(d+2);s.fromBufferAttribute(e,g),r.fromBufferAttribute(e,x),a.fromBufferAttribute(e,m),h.subVectors(a,r),u.subVectors(s,r),h.cross(u),o.fromBufferAttribute(n,g),l.fromBufferAttribute(n,x),c.fromBufferAttribute(n,m),o.add(h),l.add(h),c.add(h),n.setXYZ(g,o.x,o.y,o.z),n.setXYZ(x,l.x,l.y,l.z),n.setXYZ(m,c.x,c.y,c.z)}else for(let d=0,f=e.count;d<f;d+=3)s.fromBufferAttribute(e,d+0),r.fromBufferAttribute(e,d+1),a.fromBufferAttribute(e,d+2),h.subVectors(a,r),u.subVectors(s,r),h.cross(u),n.setXYZ(d+0,h.x,h.y,h.z),n.setXYZ(d+1,h.x,h.y,h.z),n.setXYZ(d+2,h.x,h.y,h.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){const t=this.attributes.normal;for(let e=0,n=t.count;e<n;e++)Be.fromBufferAttribute(t,e),Be.normalize(),t.setXYZ(e,Be.x,Be.y,Be.z)}toNonIndexed(){function t(o,l){const c=o.array,h=o.itemSize,u=o.normalized,d=new c.constructor(l.length*h);let f=0,g=0;for(let x=0,m=l.length;x<m;x++){o.isInterleavedBufferAttribute?f=l[x]*o.data.stride+o.offset:f=l[x]*h;for(let p=0;p<h;p++)d[g++]=c[f++]}return new wn(d,h,u)}if(this.index===null)return Ot("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const e=new an,n=this.index.array,s=this.attributes;for(const o in s){const l=s[o],c=t(l,n);e.setAttribute(o,c)}const r=this.morphAttributes;for(const o in r){const l=[],c=r[o];for(let h=0,u=c.length;h<u;h++){const d=c[h],f=t(d,n);l.push(f)}e.morphAttributes[o]=l}e.morphTargetsRelative=this.morphTargetsRelative;const a=this.groups;for(let o=0,l=a.length;o<l;o++){const c=a[o];e.addGroup(c.start,c.count,c.materialIndex)}return e}toJSON(){const t={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(t[c]=l[c]);return t}t.data={attributes:{}};const e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});const n=this.attributes;for(const l in n){const c=n[l];t.data.attributes[l]=c.toJSON(t.data)}const s={};let r=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],h=[];for(let u=0,d=c.length;u<d;u++){const f=c[u];h.push(f.toJSON(t.data))}h.length>0&&(s[l]=h,r=!0)}r&&(t.data.morphAttributes=s,t.data.morphTargetsRelative=this.morphTargetsRelative);const a=this.groups;a.length>0&&(t.data.groups=JSON.parse(JSON.stringify(a)));const o=this.boundingSphere;return o!==null&&(t.data.boundingSphere=o.toJSON()),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const e={};this.name=t.name;const n=t.index;n!==null&&this.setIndex(n.clone());const s=t.attributes;for(const c in s){const h=s[c];this.setAttribute(c,h.clone(e))}const r=t.morphAttributes;for(const c in r){const h=[],u=r[c];for(let d=0,f=u.length;d<f;d++)h.push(u[d].clone(e));this.morphAttributes[c]=h}this.morphTargetsRelative=t.morphTargetsRelative;const a=t.groups;for(let c=0,h=a.length;c<h;c++){const u=a[c];this.addGroup(u.start,u.count,u.materialIndex)}const o=t.boundingBox;o!==null&&(this.boundingBox=o.clone());const l=t.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const uc=new Qt,Ri=new Ed,Mr=new ar,dc=new D,yr=new D,Sr=new D,wr=new D,ka=new D,br=new D,fc=new D,Er=new D;class it extends Fe{constructor(t=new an,e=new ze){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){const e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){const s=e[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){const o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}getVertexPosition(t,e){const n=this.geometry,s=n.attributes.position,r=n.morphAttributes.position,a=n.morphTargetsRelative;e.fromBufferAttribute(s,t);const o=this.morphTargetInfluences;if(r&&o){br.set(0,0,0);for(let l=0,c=r.length;l<c;l++){const h=o[l],u=r[l];h!==0&&(ka.fromBufferAttribute(u,t),a?br.addScaledVector(ka,h):br.addScaledVector(ka.sub(e),h))}e.add(br)}return e}raycast(t,e){const n=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),Mr.copy(n.boundingSphere),Mr.applyMatrix4(r),Ri.copy(t.ray).recast(t.near),!(Mr.containsPoint(Ri.origin)===!1&&(Ri.intersectSphere(Mr,dc)===null||Ri.origin.distanceToSquared(dc)>(t.far-t.near)**2))&&(uc.copy(r).invert(),Ri.copy(t.ray).applyMatrix4(uc),!(n.boundingBox!==null&&Ri.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(t,e,Ri)))}_computeIntersections(t,e,n){let s;const r=this.geometry,a=this.material,o=r.index,l=r.attributes.position,c=r.attributes.uv,h=r.attributes.uv1,u=r.attributes.normal,d=r.groups,f=r.drawRange;if(o!==null)if(Array.isArray(a))for(let g=0,x=d.length;g<x;g++){const m=d[g],p=a[m.materialIndex],w=Math.max(m.start,f.start),b=Math.min(o.count,Math.min(m.start+m.count,f.start+f.count));for(let M=w,y=b;M<y;M+=3){const T=o.getX(M),C=o.getX(M+1),L=o.getX(M+2);s=Tr(this,p,t,n,c,h,u,T,C,L),s&&(s.faceIndex=Math.floor(M/3),s.face.materialIndex=m.materialIndex,e.push(s))}}else{const g=Math.max(0,f.start),x=Math.min(o.count,f.start+f.count);for(let m=g,p=x;m<p;m+=3){const w=o.getX(m),b=o.getX(m+1),M=o.getX(m+2);s=Tr(this,a,t,n,c,h,u,w,b,M),s&&(s.faceIndex=Math.floor(m/3),e.push(s))}}else if(l!==void 0)if(Array.isArray(a))for(let g=0,x=d.length;g<x;g++){const m=d[g],p=a[m.materialIndex],w=Math.max(m.start,f.start),b=Math.min(l.count,Math.min(m.start+m.count,f.start+f.count));for(let M=w,y=b;M<y;M+=3){const T=M,C=M+1,L=M+2;s=Tr(this,p,t,n,c,h,u,T,C,L),s&&(s.faceIndex=Math.floor(M/3),s.face.materialIndex=m.materialIndex,e.push(s))}}else{const g=Math.max(0,f.start),x=Math.min(l.count,f.start+f.count);for(let m=g,p=x;m<p;m+=3){const w=m,b=m+1,M=m+2;s=Tr(this,a,t,n,c,h,u,w,b,M),s&&(s.faceIndex=Math.floor(m/3),e.push(s))}}}}function Nd(i,t,e,n,s,r,a,o){let l;if(t.side===rn?l=n.intersectTriangle(a,r,s,!0,o):l=n.intersectTriangle(s,r,a,t.side===wi,o),l===null)return null;Er.copy(o),Er.applyMatrix4(i.matrixWorld);const c=e.ray.origin.distanceTo(Er);return c<e.near||c>e.far?null:{distance:c,point:Er.clone(),object:i}}function Tr(i,t,e,n,s,r,a,o,l,c){i.getVertexPosition(o,yr),i.getVertexPosition(l,Sr),i.getVertexPosition(c,wr);const h=Nd(i,t,e,n,yr,Sr,wr,fc);if(h){const u=new D;yn.getBarycoord(fc,yr,Sr,wr,u),s&&(h.uv=yn.getInterpolatedAttribute(s,o,l,c,u,new ut)),r&&(h.uv1=yn.getInterpolatedAttribute(r,o,l,c,u,new ut)),a&&(h.normal=yn.getInterpolatedAttribute(a,o,l,c,u,new D),h.normal.dot(n.direction)>0&&h.normal.multiplyScalar(-1));const d={a:o,b:l,c,normal:new D,materialIndex:0};yn.getNormal(yr,Sr,wr,d.normal),h.face=d,h.barycoord=u}return h}class me extends an{constructor(t=1,e=1,n=1,s=1,r=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:n,widthSegments:s,heightSegments:r,depthSegments:a};const o=this;s=Math.floor(s),r=Math.floor(r),a=Math.floor(a);const l=[],c=[],h=[],u=[];let d=0,f=0;g("z","y","x",-1,-1,n,e,t,a,r,0),g("z","y","x",1,-1,n,e,-t,a,r,1),g("x","z","y",1,1,t,n,e,s,a,2),g("x","z","y",1,-1,t,n,-e,s,a,3),g("x","y","z",1,-1,t,e,n,s,r,4),g("x","y","z",-1,-1,t,e,-n,s,r,5),this.setIndex(l),this.setAttribute("position",new De(c,3)),this.setAttribute("normal",new De(h,3)),this.setAttribute("uv",new De(u,2));function g(x,m,p,w,b,M,y,T,C,L,v){const S=M/C,P=y/L,I=M/2,F=y/2,B=T/2,N=C+1,H=L+1;let z=0,$=0;const st=new D;for(let Z=0;Z<H;Z++){const j=Z*P-F;for(let Ct=0;Ct<N;Ct++){const It=Ct*S-I;st[x]=It*w,st[m]=j*b,st[p]=B,c.push(st.x,st.y,st.z),st[x]=0,st[m]=0,st[p]=T>0?1:-1,h.push(st.x,st.y,st.z),u.push(Ct/C),u.push(1-Z/L),z+=1}}for(let Z=0;Z<L;Z++)for(let j=0;j<C;j++){const Ct=d+j+N*Z,It=d+j+N*(Z+1),$t=d+(j+1)+N*(Z+1),te=d+(j+1)+N*Z;l.push(Ct,It,te),l.push(It,$t,te),$+=6}o.addGroup(f,$,v),f+=$,d+=z}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new me(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}}function Ss(i){const t={};for(const e in i){t[e]={};for(const n in i[e]){const s=i[e][n];s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)?s.isRenderTargetTexture?(Ot("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][n]=null):t[e][n]=s.clone():Array.isArray(s)?t[e][n]=s.slice():t[e][n]=s}}return t}function je(i){const t={};for(let e=0;e<i.length;e++){const n=Ss(i[e]);for(const s in n)t[s]=n[s]}return t}function Ud(i){const t=[];for(let e=0;e<i.length;e++)t.push(i[e].clone());return t}function Rh(i){const t=i.getRenderTarget();return t===null?i.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:ie.workingColorSpace}const Od={clone:Ss,merge:je};var Bd=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,kd=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class En extends bi{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Bd,this.fragmentShader=kd,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=Ss(t.uniforms),this.uniformsGroups=Ud(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this.defaultAttributeValues=Object.assign({},t.defaultAttributeValues),this.index0AttributeName=t.index0AttributeName,this.uniformsNeedUpdate=t.uniformsNeedUpdate,this}toJSON(t){const e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(const s in this.uniforms){const a=this.uniforms[s].value;a&&a.isTexture?e.uniforms[s]={type:"t",value:a.toJSON(t).uuid}:a&&a.isColor?e.uniforms[s]={type:"c",value:a.getHex()}:a&&a.isVector2?e.uniforms[s]={type:"v2",value:a.toArray()}:a&&a.isVector3?e.uniforms[s]={type:"v3",value:a.toArray()}:a&&a.isVector4?e.uniforms[s]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?e.uniforms[s]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?e.uniforms[s]={type:"m4",value:a.toArray()}:e.uniforms[s]={value:a}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;const n={};for(const s in this.extensions)this.extensions[s]===!0&&(n[s]=!0);return Object.keys(n).length>0&&(e.extensions=n),e}}class Ph extends Fe{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Qt,this.projectionMatrix=new Qt,this.projectionMatrixInverse=new Qt,this.coordinateSystem=zn,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(t,e){super.updateWorldMatrix(t,e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const mi=new D,pc=new ut,mc=new ut;class Mn extends Ph{constructor(t=50,e=1,n=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=n,this.far=s,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){const e=.5*this.getFilmHeight()/t;this.fov=tr*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){const t=Math.tan(qs*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return tr*2*Math.atan(Math.tan(qs*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,n){mi.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),e.set(mi.x,mi.y).multiplyScalar(-t/mi.z),mi.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(mi.x,mi.y).multiplyScalar(-t/mi.z)}getViewSize(t,e){return this.getViewBounds(t,pc,mc),e.subVectors(mc,pc)}setViewOffset(t,e,n,s,r,a){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=this.near;let e=t*Math.tan(qs*.5*this.fov)/this.zoom,n=2*e,s=this.aspect*n,r=-.5*s;const a=this.view;if(this.view!==null&&this.view.enabled){const l=a.fullWidth,c=a.fullHeight;r+=a.offsetX*s/l,e-=a.offsetY*n/c,s*=a.width/l,n*=a.height/c}const o=this.filmOffset;o!==0&&(r+=t*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,e,e-n,t,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}}const is=-90,ss=1;class zd extends Fe{constructor(t,e,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;const s=new Mn(is,ss,t,e);s.layers=this.layers,this.add(s);const r=new Mn(is,ss,t,e);r.layers=this.layers,this.add(r);const a=new Mn(is,ss,t,e);a.layers=this.layers,this.add(a);const o=new Mn(is,ss,t,e);o.layers=this.layers,this.add(o);const l=new Mn(is,ss,t,e);l.layers=this.layers,this.add(l);const c=new Mn(is,ss,t,e);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const t=this.coordinateSystem,e=this.children.concat(),[n,s,r,a,o,l]=e;for(const c of e)this.remove(c);if(t===zn)n.up.set(0,1,0),n.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(t===Kr)n.up.set(0,-1,0),n.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(const c of e)this.add(c),c.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();const{renderTarget:n,activeMipmapLevel:s}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());const[r,a,o,l,c,h]=this.children,u=t.getRenderTarget(),d=t.getActiveCubeFace(),f=t.getActiveMipmapLevel(),g=t.xr.enabled;t.xr.enabled=!1;const x=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,t.setRenderTarget(n,0,s),t.render(e,r),t.setRenderTarget(n,1,s),t.render(e,a),t.setRenderTarget(n,2,s),t.render(e,o),t.setRenderTarget(n,3,s),t.render(e,l),t.setRenderTarget(n,4,s),t.render(e,c),n.texture.generateMipmaps=x,t.setRenderTarget(n,5,s),t.render(e,h),t.setRenderTarget(u,d,f),t.xr.enabled=g,n.texture.needsPMREMUpdate=!0}}class Ih extends Ze{constructor(t=[],e=Hi,n,s,r,a,o,l,c,h){super(t,e,n,s,r,a,o,l,c,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}}class Lh extends Xn{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;const n={width:t,height:t,depth:1},s=[n,n,n,n,n,n];this.texture=new Ih(s),this._setTextureOptions(e),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},s=new me(5,5,5),r=new En({name:"CubemapFromEquirect",uniforms:Ss(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:rn,blending:si});r.uniforms.tEquirect.value=e;const a=new it(s,r),o=e.minFilter;return e.minFilter===ki&&(e.minFilter=He),new zd(1,10,this).update(t,a),e.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(t,e=!0,n=!0,s=!0){const r=t.getRenderTarget();for(let a=0;a<6;a++)t.setRenderTarget(this,a),t.clear(e,n,s);t.setRenderTarget(r)}}class Ie extends Fe{constructor(){super(),this.isGroup=!0,this.type="Group"}}const Hd={type:"move"};class za{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Ie,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Ie,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new D,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new D),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Ie,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new D,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new D),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){const e=this._hand;if(e)for(const n of t.hand.values())this._getHandJoint(e,n)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,n){let s=null,r=null,a=null;const o=this._targetRay,l=this._grip,c=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(c&&t.hand){a=!0;for(const x of t.hand.values()){const m=e.getJointPose(x,n),p=this._getHandJoint(c,x);m!==null&&(p.matrix.fromArray(m.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,p.jointRadius=m.radius),p.visible=m!==null}const h=c.joints["index-finger-tip"],u=c.joints["thumb-tip"],d=h.position.distanceTo(u.position),f=.02,g=.005;c.inputState.pinching&&d>f+g?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!c.inputState.pinching&&d<=f-g&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else l!==null&&t.gripSpace&&(r=e.getPose(t.gripSpace,n),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1));o!==null&&(s=e.getPose(t.targetRaySpace,n),s===null&&r!==null&&(s=r),s!==null&&(o.matrix.fromArray(s.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,s.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(s.linearVelocity)):o.hasLinearVelocity=!1,s.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(s.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(Hd)))}return o!==null&&(o.visible=s!==null),l!==null&&(l.visible=r!==null),c!==null&&(c.visible=a!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){const n=new Ie;n.matrixAutoUpdate=!1,n.visible=!1,t.joints[e.jointName]=n,t.add(n)}return t.joints[e.jointName]}}class Gd extends Fe{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Ne,this.environmentIntensity=1,this.environmentRotation=new Ne,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){const e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(e.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(e.object.backgroundIntensity=this.backgroundIntensity),e.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(e.object.environmentIntensity=this.environmentIntensity),e.object.environmentRotation=this.environmentRotation.toArray(),e}}class Vd{constructor(t,e){this.isInterleavedBuffer=!0,this.array=t,this.stride=e,this.count=t!==void 0?t.length/e:0,this.usage=Qo,this.updateRanges=[],this.version=0,this.uuid=Wn()}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.array=new t.array.constructor(t.array),this.count=t.count,this.stride=t.stride,this.usage=t.usage,this}copyAt(t,e,n){t*=this.stride,n*=e.stride;for(let s=0,r=this.stride;s<r;s++)this.array[t+s]=e.array[n+s];return this}set(t,e=0){return this.array.set(t,e),this}clone(t){t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Wn()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);const e=new this.array.constructor(t.arrayBuffers[this.array.buffer._uuid]),n=new this.constructor(e,this.stride);return n.setUsage(this.usage),n}onUpload(t){return this.onUploadCallback=t,this}toJSON(t){return t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Wn()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}}const Ke=new D;class Qr{constructor(t,e,n,s=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=t,this.itemSize=e,this.offset=n,this.normalized=s}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(t){this.data.needsUpdate=t}applyMatrix4(t){for(let e=0,n=this.data.count;e<n;e++)Ke.fromBufferAttribute(this,e),Ke.applyMatrix4(t),this.setXYZ(e,Ke.x,Ke.y,Ke.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)Ke.fromBufferAttribute(this,e),Ke.applyNormalMatrix(t),this.setXYZ(e,Ke.x,Ke.y,Ke.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)Ke.fromBufferAttribute(this,e),Ke.transformDirection(t),this.setXYZ(e,Ke.x,Ke.y,Ke.z);return this}getComponent(t,e){let n=this.array[t*this.data.stride+this.offset+e];return this.normalized&&(n=Pn(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=de(n,this.array)),this.data.array[t*this.data.stride+this.offset+e]=n,this}setX(t,e){return this.normalized&&(e=de(e,this.array)),this.data.array[t*this.data.stride+this.offset]=e,this}setY(t,e){return this.normalized&&(e=de(e,this.array)),this.data.array[t*this.data.stride+this.offset+1]=e,this}setZ(t,e){return this.normalized&&(e=de(e,this.array)),this.data.array[t*this.data.stride+this.offset+2]=e,this}setW(t,e){return this.normalized&&(e=de(e,this.array)),this.data.array[t*this.data.stride+this.offset+3]=e,this}getX(t){let e=this.data.array[t*this.data.stride+this.offset];return this.normalized&&(e=Pn(e,this.array)),e}getY(t){let e=this.data.array[t*this.data.stride+this.offset+1];return this.normalized&&(e=Pn(e,this.array)),e}getZ(t){let e=this.data.array[t*this.data.stride+this.offset+2];return this.normalized&&(e=Pn(e,this.array)),e}getW(t){let e=this.data.array[t*this.data.stride+this.offset+3];return this.normalized&&(e=Pn(e,this.array)),e}setXY(t,e,n){return t=t*this.data.stride+this.offset,this.normalized&&(e=de(e,this.array),n=de(n,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=n,this}setXYZ(t,e,n,s){return t=t*this.data.stride+this.offset,this.normalized&&(e=de(e,this.array),n=de(n,this.array),s=de(s,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=n,this.data.array[t+2]=s,this}setXYZW(t,e,n,s,r){return t=t*this.data.stride+this.offset,this.normalized&&(e=de(e,this.array),n=de(n,this.array),s=de(s,this.array),r=de(r,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=n,this.data.array[t+2]=s,this.data.array[t+3]=r,this}clone(t){if(t===void 0){jr("InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");const e=[];for(let n=0;n<this.count;n++){const s=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)e.push(this.data.array[s+r])}return new wn(new this.array.constructor(e),this.itemSize,this.normalized)}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.clone(t)),new Qr(t.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(t){if(t===void 0){jr("InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");const e=[];for(let n=0;n<this.count;n++){const s=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)e.push(this.data.array[s+r])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:e,normalized:this.normalized}}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.toJSON(t)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}}class ta extends bi{constructor(t){super(),this.isSpriteMaterial=!0,this.type="SpriteMaterial",this.color=new Bt(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.rotation=t.rotation,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}}let rs;const Ds=new D,as=new D,os=new D,ls=new ut,Fs=new ut,Dh=new Qt,Cr=new D,Ns=new D,Ar=new D,gc=new ut,Ha=new ut,xc=new ut;class tl extends Fe{constructor(t=new ta){if(super(),this.isSprite=!0,this.type="Sprite",rs===void 0){rs=new an;const e=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),n=new Vd(e,5);rs.setIndex([0,1,2,0,2,3]),rs.setAttribute("position",new Qr(n,3,0,!1)),rs.setAttribute("uv",new Qr(n,2,3,!1))}this.geometry=rs,this.material=t,this.center=new ut(.5,.5),this.count=1}raycast(t,e){t.camera===null&&ee('Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),as.setFromMatrixScale(this.matrixWorld),Dh.copy(t.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(t.camera.matrixWorldInverse,this.matrixWorld),os.setFromMatrixPosition(this.modelViewMatrix),t.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&as.multiplyScalar(-os.z);const n=this.material.rotation;let s,r;n!==0&&(r=Math.cos(n),s=Math.sin(n));const a=this.center;Rr(Cr.set(-.5,-.5,0),os,a,as,s,r),Rr(Ns.set(.5,-.5,0),os,a,as,s,r),Rr(Ar.set(.5,.5,0),os,a,as,s,r),gc.set(0,0),Ha.set(1,0),xc.set(1,1);let o=t.ray.intersectTriangle(Cr,Ns,Ar,!1,Ds);if(o===null&&(Rr(Ns.set(-.5,.5,0),os,a,as,s,r),Ha.set(0,1),o=t.ray.intersectTriangle(Cr,Ar,Ns,!1,Ds),o===null))return;const l=t.ray.origin.distanceTo(Ds);l<t.near||l>t.far||e.push({distance:l,point:Ds.clone(),uv:yn.getInterpolation(Ds,Cr,Ns,Ar,gc,Ha,xc,new ut),face:null,object:this})}copy(t,e){return super.copy(t,e),t.center!==void 0&&this.center.copy(t.center),this.material=t.material,this}}function Rr(i,t,e,n,s,r){ls.subVectors(i,e).addScalar(.5).multiply(n),s!==void 0?(Fs.x=r*ls.x-s*ls.y,Fs.y=s*ls.x+r*ls.y):Fs.copy(ls),i.copy(t),i.x+=Fs.x,i.y+=Fs.y,i.applyMatrix4(Dh)}class Fh extends Ze{constructor(t=null,e=1,n=1,s,r,a,o,l,c=Ve,h=Ve,u,d){super(null,a,o,l,c,h,s,r,u,d),this.isDataTexture=!0,this.image={data:t,width:e,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class _c extends wn{constructor(t,e,n,s=1){super(t,e,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=s}copy(t){return super.copy(t),this.meshPerAttribute=t.meshPerAttribute,this}toJSON(){const t=super.toJSON();return t.meshPerAttribute=this.meshPerAttribute,t.isInstancedBufferAttribute=!0,t}}const cs=new Qt,vc=new Qt,Pr=[],Mc=new Wi,Wd=new Qt,Us=new it,Os=new ar;class yi extends it{constructor(t,e,n){super(t,e),this.isInstancedMesh=!0,this.instanceMatrix=new _c(new Float32Array(n*16),16),this.instanceColor=null,this.morphTexture=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let s=0;s<n;s++)this.setMatrixAt(s,Wd)}computeBoundingBox(){const t=this.geometry,e=this.count;this.boundingBox===null&&(this.boundingBox=new Wi),t.boundingBox===null&&t.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<e;n++)this.getMatrixAt(n,cs),Mc.copy(t.boundingBox).applyMatrix4(cs),this.boundingBox.union(Mc)}computeBoundingSphere(){const t=this.geometry,e=this.count;this.boundingSphere===null&&(this.boundingSphere=new ar),t.boundingSphere===null&&t.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<e;n++)this.getMatrixAt(n,cs),Os.copy(t.boundingSphere).applyMatrix4(cs),this.boundingSphere.union(Os)}copy(t,e){return super.copy(t,e),this.instanceMatrix.copy(t.instanceMatrix),t.morphTexture!==null&&(this.morphTexture=t.morphTexture.clone()),t.instanceColor!==null&&(this.instanceColor=t.instanceColor.clone()),this.count=t.count,t.boundingBox!==null&&(this.boundingBox=t.boundingBox.clone()),t.boundingSphere!==null&&(this.boundingSphere=t.boundingSphere.clone()),this}getColorAt(t,e){e.fromArray(this.instanceColor.array,t*3)}getMatrixAt(t,e){e.fromArray(this.instanceMatrix.array,t*16)}getMorphAt(t,e){const n=e.morphTargetInfluences,s=this.morphTexture.source.data.data,r=n.length+1,a=t*r+1;for(let o=0;o<n.length;o++)n[o]=s[a+o]}raycast(t,e){const n=this.matrixWorld,s=this.count;if(Us.geometry=this.geometry,Us.material=this.material,Us.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Os.copy(this.boundingSphere),Os.applyMatrix4(n),t.ray.intersectsSphere(Os)!==!1))for(let r=0;r<s;r++){this.getMatrixAt(r,cs),vc.multiplyMatrices(n,cs),Us.matrixWorld=vc,Us.raycast(t,Pr);for(let a=0,o=Pr.length;a<o;a++){const l=Pr[a];l.instanceId=r,l.object=this,e.push(l)}Pr.length=0}}setColorAt(t,e){this.instanceColor===null&&(this.instanceColor=new _c(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),e.toArray(this.instanceColor.array,t*3)}setMatrixAt(t,e){e.toArray(this.instanceMatrix.array,t*16)}setMorphAt(t,e){const n=e.morphTargetInfluences,s=n.length+1;this.morphTexture===null&&(this.morphTexture=new Fh(new Float32Array(s*this.count),s,this.count,Ml,Fn));const r=this.morphTexture.source.data.data;let a=0;for(let c=0;c<n.length;c++)a+=n[c];const o=this.geometry.morphTargetsRelative?1:1-a,l=s*t;r[l]=o,r.set(n,l+1)}updateMorphTargets(){}dispose(){this.dispatchEvent({type:"dispose"}),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null)}}const Ga=new D,Xd=new D,Yd=new Yt;class Ui{constructor(t=new D(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,n,s){return this.normal.set(t,e,n),this.constant=s,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,n){const s=Ga.subVectors(n,e).cross(Xd.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(s,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){const t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e){const n=t.delta(Ga),s=this.normal.dot(n);if(s===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;const r=-(t.start.dot(this.normal)+this.constant)/s;return r<0||r>1?null:e.copy(t.start).addScaledVector(n,r)}intersectsLine(t){const e=this.distanceToPoint(t.start),n=this.distanceToPoint(t.end);return e<0&&n>0||n<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){const n=e||Yd.getNormalMatrix(t),s=this.coplanarPoint(Ga).applyMatrix4(t),r=this.normal.applyMatrix3(n).normalize();return this.constant=-s.dot(r),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Pi=new ar,qd=new ut(.5,.5),Ir=new D;class Al{constructor(t=new Ui,e=new Ui,n=new Ui,s=new Ui,r=new Ui,a=new Ui){this.planes=[t,e,n,s,r,a]}set(t,e,n,s,r,a){const o=this.planes;return o[0].copy(t),o[1].copy(e),o[2].copy(n),o[3].copy(s),o[4].copy(r),o[5].copy(a),this}copy(t){const e=this.planes;for(let n=0;n<6;n++)e[n].copy(t.planes[n]);return this}setFromProjectionMatrix(t,e=zn,n=!1){const s=this.planes,r=t.elements,a=r[0],o=r[1],l=r[2],c=r[3],h=r[4],u=r[5],d=r[6],f=r[7],g=r[8],x=r[9],m=r[10],p=r[11],w=r[12],b=r[13],M=r[14],y=r[15];if(s[0].setComponents(c-a,f-h,p-g,y-w).normalize(),s[1].setComponents(c+a,f+h,p+g,y+w).normalize(),s[2].setComponents(c+o,f+u,p+x,y+b).normalize(),s[3].setComponents(c-o,f-u,p-x,y-b).normalize(),n)s[4].setComponents(l,d,m,M).normalize(),s[5].setComponents(c-l,f-d,p-m,y-M).normalize();else if(s[4].setComponents(c-l,f-d,p-m,y-M).normalize(),e===zn)s[5].setComponents(c+l,f+d,p+m,y+M).normalize();else if(e===Kr)s[5].setComponents(l,d,m,M).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),Pi.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{const e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),Pi.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(Pi)}intersectsSprite(t){Pi.center.set(0,0,0);const e=qd.distanceTo(t.center);return Pi.radius=.7071067811865476+e,Pi.applyMatrix4(t.matrixWorld),this.intersectsSphere(Pi)}intersectsSphere(t){const e=this.planes,n=t.center,s=-t.radius;for(let r=0;r<6;r++)if(e[r].distanceToPoint(n)<s)return!1;return!0}intersectsBox(t){const e=this.planes;for(let n=0;n<6;n++){const s=e[n];if(Ir.x=s.normal.x>0?t.max.x:t.min.x,Ir.y=s.normal.y>0?t.max.y:t.min.y,Ir.z=s.normal.z>0?t.max.z:t.min.z,s.distanceToPoint(Ir)<0)return!1}return!0}containsPoint(t){const e=this.planes;for(let n=0;n<6;n++)if(e[n].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class Nh extends Ze{constructor(t,e,n,s,r,a,o,l,c){super(t,e,n,s,r,a,o,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}}class er extends Ze{constructor(t,e,n=Yn,s,r,a,o=Ve,l=Ve,c,h=li,u=1){if(h!==li&&h!==zi)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const d={width:t,height:e,depth:u};super(d,s,r,a,o,l,h,n,c),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.source=new Cl(Object.assign({},t.image)),this.compareFunction=t.compareFunction,this}toJSON(t){const e=super.toJSON(t);return this.compareFunction!==null&&(e.compareFunction=this.compareFunction),e}}class Zd extends er{constructor(t,e=Yn,n=Hi,s,r,a=Ve,o=Ve,l,c=li){const h={width:t,height:t,depth:1},u=[h,h,h,h,h,h];super(t,t,e,n,s,r,a,o,l,c),this.image=u,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(t){this.image=t}}class Uh extends Ze{constructor(t=null){super(),this.sourceTexture=t,this.isExternalTexture=!0}copy(t){return super.copy(t),this.sourceTexture=t.sourceTexture,this}}class Ye extends an{constructor(t=1,e=1,n=1,s=32,r=1,a=!1,o=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:t,radiusBottom:e,height:n,radialSegments:s,heightSegments:r,openEnded:a,thetaStart:o,thetaLength:l};const c=this;s=Math.floor(s),r=Math.floor(r);const h=[],u=[],d=[],f=[];let g=0;const x=[],m=n/2;let p=0;w(),a===!1&&(t>0&&b(!0),e>0&&b(!1)),this.setIndex(h),this.setAttribute("position",new De(u,3)),this.setAttribute("normal",new De(d,3)),this.setAttribute("uv",new De(f,2));function w(){const M=new D,y=new D;let T=0;const C=(e-t)/n;for(let L=0;L<=r;L++){const v=[],S=L/r,P=S*(e-t)+t;for(let I=0;I<=s;I++){const F=I/s,B=F*l+o,N=Math.sin(B),H=Math.cos(B);y.x=P*N,y.y=-S*n+m,y.z=P*H,u.push(y.x,y.y,y.z),M.set(N,C,H).normalize(),d.push(M.x,M.y,M.z),f.push(F,1-S),v.push(g++)}x.push(v)}for(let L=0;L<s;L++)for(let v=0;v<r;v++){const S=x[v][L],P=x[v+1][L],I=x[v+1][L+1],F=x[v][L+1];(t>0||v!==0)&&(h.push(S,P,F),T+=3),(e>0||v!==r-1)&&(h.push(P,I,F),T+=3)}c.addGroup(p,T,0),p+=T}function b(M){const y=g,T=new ut,C=new D;let L=0;const v=M===!0?t:e,S=M===!0?1:-1;for(let I=1;I<=s;I++)u.push(0,m*S,0),d.push(0,S,0),f.push(.5,.5),g++;const P=g;for(let I=0;I<=s;I++){const B=I/s*l+o,N=Math.cos(B),H=Math.sin(B);C.x=v*H,C.y=m*S,C.z=v*N,u.push(C.x,C.y,C.z),d.push(0,S,0),T.x=N*.5+.5,T.y=H*.5*S+.5,f.push(T.x,T.y),g++}for(let I=0;I<s;I++){const F=y+I,B=P+I;M===!0?h.push(B,B+1,F):h.push(B+1,B,F),L+=3}c.addGroup(p,L,M===!0?1:2),p+=L}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Ye(t.radiusTop,t.radiusBottom,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}}class tn extends Ye{constructor(t=1,e=1,n=32,s=1,r=!1,a=0,o=Math.PI*2){super(0,t,e,n,s,r,a,o),this.type="ConeGeometry",this.parameters={radius:t,height:e,radialSegments:n,heightSegments:s,openEnded:r,thetaStart:a,thetaLength:o}}static fromJSON(t){return new tn(t.radius,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}}class qn{constructor(){this.type="Curve",this.arcLengthDivisions=200,this.needsUpdate=!1,this.cacheArcLengths=null}getPoint(){Ot("Curve: .getPoint() not implemented.")}getPointAt(t,e){const n=this.getUtoTmapping(t);return this.getPoint(n,e)}getPoints(t=5){const e=[];for(let n=0;n<=t;n++)e.push(this.getPoint(n/t));return e}getSpacedPoints(t=5){const e=[];for(let n=0;n<=t;n++)e.push(this.getPointAt(n/t));return e}getLength(){const t=this.getLengths();return t[t.length-1]}getLengths(t=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===t+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;const e=[];let n,s=this.getPoint(0),r=0;e.push(0);for(let a=1;a<=t;a++)n=this.getPoint(a/t),r+=n.distanceTo(s),e.push(r),s=n;return this.cacheArcLengths=e,e}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(t,e=null){const n=this.getLengths();let s=0;const r=n.length;let a;e?a=e:a=t*n[r-1];let o=0,l=r-1,c;for(;o<=l;)if(s=Math.floor(o+(l-o)/2),c=n[s]-a,c<0)o=s+1;else if(c>0)l=s-1;else{l=s;break}if(s=l,n[s]===a)return s/(r-1);const h=n[s],d=n[s+1]-h,f=(a-h)/d;return(s+f)/(r-1)}getTangent(t,e){let s=t-1e-4,r=t+1e-4;s<0&&(s=0),r>1&&(r=1);const a=this.getPoint(s),o=this.getPoint(r),l=e||(a.isVector2?new ut:new D);return l.copy(o).sub(a).normalize(),l}getTangentAt(t,e){const n=this.getUtoTmapping(t);return this.getTangent(n,e)}computeFrenetFrames(t,e=!1){const n=new D,s=[],r=[],a=[],o=new D,l=new Qt;for(let f=0;f<=t;f++){const g=f/t;s[f]=this.getTangentAt(g,new D)}r[0]=new D,a[0]=new D;let c=Number.MAX_VALUE;const h=Math.abs(s[0].x),u=Math.abs(s[0].y),d=Math.abs(s[0].z);h<=c&&(c=h,n.set(1,0,0)),u<=c&&(c=u,n.set(0,1,0)),d<=c&&n.set(0,0,1),o.crossVectors(s[0],n).normalize(),r[0].crossVectors(s[0],o),a[0].crossVectors(s[0],r[0]);for(let f=1;f<=t;f++){if(r[f]=r[f-1].clone(),a[f]=a[f-1].clone(),o.crossVectors(s[f-1],s[f]),o.length()>Number.EPSILON){o.normalize();const g=Math.acos(Jt(s[f-1].dot(s[f]),-1,1));r[f].applyMatrix4(l.makeRotationAxis(o,g))}a[f].crossVectors(s[f],r[f])}if(e===!0){let f=Math.acos(Jt(r[0].dot(r[t]),-1,1));f/=t,s[0].dot(o.crossVectors(r[0],r[t]))>0&&(f=-f);for(let g=1;g<=t;g++)r[g].applyMatrix4(l.makeRotationAxis(s[g],f*g)),a[g].crossVectors(s[g],r[g])}return{tangents:s,normals:r,binormals:a}}clone(){return new this.constructor().copy(this)}copy(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}toJSON(){const t={metadata:{version:4.7,type:"Curve",generator:"Curve.toJSON"}};return t.arcLengthDivisions=this.arcLengthDivisions,t.type=this.type,t}fromJSON(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}}class Rl extends qn{constructor(t=0,e=0,n=1,s=1,r=0,a=Math.PI*2,o=!1,l=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=t,this.aY=e,this.xRadius=n,this.yRadius=s,this.aStartAngle=r,this.aEndAngle=a,this.aClockwise=o,this.aRotation=l}getPoint(t,e=new ut){const n=e,s=Math.PI*2;let r=this.aEndAngle-this.aStartAngle;const a=Math.abs(r)<Number.EPSILON;for(;r<0;)r+=s;for(;r>s;)r-=s;r<Number.EPSILON&&(a?r=0:r=s),this.aClockwise===!0&&!a&&(r===s?r=-s:r=r-s);const o=this.aStartAngle+t*r;let l=this.aX+this.xRadius*Math.cos(o),c=this.aY+this.yRadius*Math.sin(o);if(this.aRotation!==0){const h=Math.cos(this.aRotation),u=Math.sin(this.aRotation),d=l-this.aX,f=c-this.aY;l=d*h-f*u+this.aX,c=d*u+f*h+this.aY}return n.set(l,c)}copy(t){return super.copy(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}toJSON(){const t=super.toJSON();return t.aX=this.aX,t.aY=this.aY,t.xRadius=this.xRadius,t.yRadius=this.yRadius,t.aStartAngle=this.aStartAngle,t.aEndAngle=this.aEndAngle,t.aClockwise=this.aClockwise,t.aRotation=this.aRotation,t}fromJSON(t){return super.fromJSON(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}}class $d extends Rl{constructor(t,e,n,s,r,a){super(t,e,n,n,s,r,a),this.isArcCurve=!0,this.type="ArcCurve"}}function Pl(){let i=0,t=0,e=0,n=0;function s(r,a,o,l){i=r,t=o,e=-3*r+3*a-2*o-l,n=2*r-2*a+o+l}return{initCatmullRom:function(r,a,o,l,c){s(a,o,c*(o-r),c*(l-a))},initNonuniformCatmullRom:function(r,a,o,l,c,h,u){let d=(a-r)/c-(o-r)/(c+h)+(o-a)/h,f=(o-a)/h-(l-a)/(h+u)+(l-o)/u;d*=h,f*=h,s(a,o,d,f)},calc:function(r){const a=r*r,o=a*r;return i+t*r+e*a+n*o}}}const Lr=new D,Va=new Pl,Wa=new Pl,Xa=new Pl;class Kd extends qn{constructor(t=[],e=!1,n="centripetal",s=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=t,this.closed=e,this.curveType=n,this.tension=s}getPoint(t,e=new D){const n=e,s=this.points,r=s.length,a=(r-(this.closed?0:1))*t;let o=Math.floor(a),l=a-o;this.closed?o+=o>0?0:(Math.floor(Math.abs(o)/r)+1)*r:l===0&&o===r-1&&(o=r-2,l=1);let c,h;this.closed||o>0?c=s[(o-1)%r]:(Lr.subVectors(s[0],s[1]).add(s[0]),c=Lr);const u=s[o%r],d=s[(o+1)%r];if(this.closed||o+2<r?h=s[(o+2)%r]:(Lr.subVectors(s[r-1],s[r-2]).add(s[r-1]),h=Lr),this.curveType==="centripetal"||this.curveType==="chordal"){const f=this.curveType==="chordal"?.5:.25;let g=Math.pow(c.distanceToSquared(u),f),x=Math.pow(u.distanceToSquared(d),f),m=Math.pow(d.distanceToSquared(h),f);x<1e-4&&(x=1),g<1e-4&&(g=x),m<1e-4&&(m=x),Va.initNonuniformCatmullRom(c.x,u.x,d.x,h.x,g,x,m),Wa.initNonuniformCatmullRom(c.y,u.y,d.y,h.y,g,x,m),Xa.initNonuniformCatmullRom(c.z,u.z,d.z,h.z,g,x,m)}else this.curveType==="catmullrom"&&(Va.initCatmullRom(c.x,u.x,d.x,h.x,this.tension),Wa.initCatmullRom(c.y,u.y,d.y,h.y,this.tension),Xa.initCatmullRom(c.z,u.z,d.z,h.z,this.tension));return n.set(Va.calc(l),Wa.calc(l),Xa.calc(l)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const s=t.points[e];this.points.push(s.clone())}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}toJSON(){const t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){const s=this.points[e];t.points.push(s.toArray())}return t.closed=this.closed,t.curveType=this.curveType,t.tension=this.tension,t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const s=t.points[e];this.points.push(new D().fromArray(s))}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}}function yc(i,t,e,n,s){const r=(n-t)*.5,a=(s-e)*.5,o=i*i,l=i*o;return(2*e-2*n+r+a)*l+(-3*e+3*n-2*r-a)*o+r*i+e}function Jd(i,t){const e=1-i;return e*e*t}function jd(i,t){return 2*(1-i)*i*t}function Qd(i,t){return i*i*t}function $s(i,t,e,n){return Jd(i,t)+jd(i,e)+Qd(i,n)}function tf(i,t){const e=1-i;return e*e*e*t}function ef(i,t){const e=1-i;return 3*e*e*i*t}function nf(i,t){return 3*(1-i)*i*i*t}function sf(i,t){return i*i*i*t}function Ks(i,t,e,n,s){return tf(i,t)+ef(i,e)+nf(i,n)+sf(i,s)}class Oh extends qn{constructor(t=new ut,e=new ut,n=new ut,s=new ut){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=t,this.v1=e,this.v2=n,this.v3=s}getPoint(t,e=new ut){const n=e,s=this.v0,r=this.v1,a=this.v2,o=this.v3;return n.set(Ks(t,s.x,r.x,a.x,o.x),Ks(t,s.y,r.y,a.y,o.y)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}}class rf extends qn{constructor(t=new D,e=new D,n=new D,s=new D){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=t,this.v1=e,this.v2=n,this.v3=s}getPoint(t,e=new D){const n=e,s=this.v0,r=this.v1,a=this.v2,o=this.v3;return n.set(Ks(t,s.x,r.x,a.x,o.x),Ks(t,s.y,r.y,a.y,o.y),Ks(t,s.z,r.z,a.z,o.z)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}}class Bh extends qn{constructor(t=new ut,e=new ut){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=t,this.v2=e}getPoint(t,e=new ut){const n=e;return t===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(t).add(this.v1)),n}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new ut){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class af extends qn{constructor(t=new D,e=new D){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=t,this.v2=e}getPoint(t,e=new D){const n=e;return t===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(t).add(this.v1)),n}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new D){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class kh extends qn{constructor(t=new ut,e=new ut,n=new ut){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=t,this.v1=e,this.v2=n}getPoint(t,e=new ut){const n=e,s=this.v0,r=this.v1,a=this.v2;return n.set($s(t,s.x,r.x,a.x),$s(t,s.y,r.y,a.y)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class of extends qn{constructor(t=new D,e=new D,n=new D){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=t,this.v1=e,this.v2=n}getPoint(t,e=new D){const n=e,s=this.v0,r=this.v1,a=this.v2;return n.set($s(t,s.x,r.x,a.x),$s(t,s.y,r.y,a.y),$s(t,s.z,r.z,a.z)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class zh extends qn{constructor(t=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=t}getPoint(t,e=new ut){const n=e,s=this.points,r=(s.length-1)*t,a=Math.floor(r),o=r-a,l=s[a===0?a:a-1],c=s[a],h=s[a>s.length-2?s.length-1:a+1],u=s[a>s.length-3?s.length-1:a+2];return n.set(yc(o,l.x,c.x,h.x,u.x),yc(o,l.y,c.y,h.y,u.y)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const s=t.points[e];this.points.push(s.clone())}return this}toJSON(){const t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){const s=this.points[e];t.points.push(s.toArray())}return t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const s=t.points[e];this.points.push(new ut().fromArray(s))}return this}}var el=Object.freeze({__proto__:null,ArcCurve:$d,CatmullRomCurve3:Kd,CubicBezierCurve:Oh,CubicBezierCurve3:rf,EllipseCurve:Rl,LineCurve:Bh,LineCurve3:af,QuadraticBezierCurve:kh,QuadraticBezierCurve3:of,SplineCurve:zh});class lf extends qn{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(t){this.curves.push(t)}closePath(){const t=this.curves[0].getPoint(0),e=this.curves[this.curves.length-1].getPoint(1);if(!t.equals(e)){const n=t.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new el[n](e,t))}return this}getPoint(t,e){const n=t*this.getLength(),s=this.getCurveLengths();let r=0;for(;r<s.length;){if(s[r]>=n){const a=s[r]-n,o=this.curves[r],l=o.getLength(),c=l===0?0:1-a/l;return o.getPointAt(c,e)}r++}return null}getLength(){const t=this.getCurveLengths();return t[t.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;const t=[];let e=0;for(let n=0,s=this.curves.length;n<s;n++)e+=this.curves[n].getLength(),t.push(e);return this.cacheLengths=t,t}getSpacedPoints(t=40){const e=[];for(let n=0;n<=t;n++)e.push(this.getPoint(n/t));return this.autoClose&&e.push(e[0]),e}getPoints(t=12){const e=[];let n;for(let s=0,r=this.curves;s<r.length;s++){const a=r[s],o=a.isEllipseCurve?t*2:a.isLineCurve||a.isLineCurve3?1:a.isSplineCurve?t*a.points.length:t,l=a.getPoints(o);for(let c=0;c<l.length;c++){const h=l[c];n&&n.equals(h)||(e.push(h),n=h)}}return this.autoClose&&e.length>1&&!e[e.length-1].equals(e[0])&&e.push(e[0]),e}copy(t){super.copy(t),this.curves=[];for(let e=0,n=t.curves.length;e<n;e++){const s=t.curves[e];this.curves.push(s.clone())}return this.autoClose=t.autoClose,this}toJSON(){const t=super.toJSON();t.autoClose=this.autoClose,t.curves=[];for(let e=0,n=this.curves.length;e<n;e++){const s=this.curves[e];t.curves.push(s.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.autoClose=t.autoClose,this.curves=[];for(let e=0,n=t.curves.length;e<n;e++){const s=t.curves[e];this.curves.push(new el[s.type]().fromJSON(s))}return this}}class Sc extends lf{constructor(t){super(),this.type="Path",this.currentPoint=new ut,t&&this.setFromPoints(t)}setFromPoints(t){this.moveTo(t[0].x,t[0].y);for(let e=1,n=t.length;e<n;e++)this.lineTo(t[e].x,t[e].y);return this}moveTo(t,e){return this.currentPoint.set(t,e),this}lineTo(t,e){const n=new Bh(this.currentPoint.clone(),new ut(t,e));return this.curves.push(n),this.currentPoint.set(t,e),this}quadraticCurveTo(t,e,n,s){const r=new kh(this.currentPoint.clone(),new ut(t,e),new ut(n,s));return this.curves.push(r),this.currentPoint.set(n,s),this}bezierCurveTo(t,e,n,s,r,a){const o=new Oh(this.currentPoint.clone(),new ut(t,e),new ut(n,s),new ut(r,a));return this.curves.push(o),this.currentPoint.set(r,a),this}splineThru(t){const e=[this.currentPoint.clone()].concat(t),n=new zh(e);return this.curves.push(n),this.currentPoint.copy(t[t.length-1]),this}arc(t,e,n,s,r,a){const o=this.currentPoint.x,l=this.currentPoint.y;return this.absarc(t+o,e+l,n,s,r,a),this}absarc(t,e,n,s,r,a){return this.absellipse(t,e,n,n,s,r,a),this}ellipse(t,e,n,s,r,a,o,l){const c=this.currentPoint.x,h=this.currentPoint.y;return this.absellipse(t+c,e+h,n,s,r,a,o,l),this}absellipse(t,e,n,s,r,a,o,l){const c=new Rl(t,e,n,s,r,a,o,l);if(this.curves.length>0){const u=c.getPoint(0);u.equals(this.currentPoint)||this.lineTo(u.x,u.y)}this.curves.push(c);const h=c.getPoint(1);return this.currentPoint.copy(h),this}copy(t){return super.copy(t),this.currentPoint.copy(t.currentPoint),this}toJSON(){const t=super.toJSON();return t.currentPoint=this.currentPoint.toArray(),t}fromJSON(t){return super.fromJSON(t),this.currentPoint.fromArray(t.currentPoint),this}}class Il extends Sc{constructor(t){super(t),this.uuid=Wn(),this.type="Shape",this.holes=[]}getPointsHoles(t){const e=[];for(let n=0,s=this.holes.length;n<s;n++)e[n]=this.holes[n].getPoints(t);return e}extractPoints(t){return{shape:this.getPoints(t),holes:this.getPointsHoles(t)}}copy(t){super.copy(t),this.holes=[];for(let e=0,n=t.holes.length;e<n;e++){const s=t.holes[e];this.holes.push(s.clone())}return this}toJSON(){const t=super.toJSON();t.uuid=this.uuid,t.holes=[];for(let e=0,n=this.holes.length;e<n;e++){const s=this.holes[e];t.holes.push(s.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.uuid=t.uuid,this.holes=[];for(let e=0,n=t.holes.length;e<n;e++){const s=t.holes[e];this.holes.push(new Sc().fromJSON(s))}return this}}function cf(i,t,e=2){const n=t&&t.length,s=n?t[0]*e:i.length;let r=Hh(i,0,s,e,!0);const a=[];if(!r||r.next===r.prev)return a;let o,l,c;if(n&&(r=pf(i,t,r,e)),i.length>80*e){o=i[0],l=i[1];let h=o,u=l;for(let d=e;d<s;d+=e){const f=i[d],g=i[d+1];f<o&&(o=f),g<l&&(l=g),f>h&&(h=f),g>u&&(u=g)}c=Math.max(h-o,u-l),c=c!==0?32767/c:0}return nr(r,a,e,o,l,c,0),a}function Hh(i,t,e,n,s){let r;if(s===Ef(i,t,e,n)>0)for(let a=t;a<e;a+=n)r=wc(a/n|0,i[a],i[a+1],r);else for(let a=e-n;a>=t;a-=n)r=wc(a/n|0,i[a],i[a+1],r);return r&&ws(r,r.next)&&(sr(r),r=r.next),r}function Gi(i,t){if(!i)return i;t||(t=i);let e=i,n;do if(n=!1,!e.steiner&&(ws(e,e.next)||_e(e.prev,e,e.next)===0)){if(sr(e),e=t=e.prev,e===e.next)break;n=!0}else e=e.next;while(n||e!==t);return t}function nr(i,t,e,n,s,r,a){if(!i)return;!a&&r&&vf(i,n,s,r);let o=i;for(;i.prev!==i.next;){const l=i.prev,c=i.next;if(r?uf(i,n,s,r):hf(i)){t.push(l.i,i.i,c.i),sr(i),i=c.next,o=c.next;continue}if(i=c,i===o){a?a===1?(i=df(Gi(i),t),nr(i,t,e,n,s,r,2)):a===2&&ff(i,t,e,n,s,r):nr(Gi(i),t,e,n,s,r,1);break}}}function hf(i){const t=i.prev,e=i,n=i.next;if(_e(t,e,n)>=0)return!1;const s=t.x,r=e.x,a=n.x,o=t.y,l=e.y,c=n.y,h=Math.min(s,r,a),u=Math.min(o,l,c),d=Math.max(s,r,a),f=Math.max(o,l,c);let g=n.next;for(;g!==t;){if(g.x>=h&&g.x<=d&&g.y>=u&&g.y<=f&&Ws(s,o,r,l,a,c,g.x,g.y)&&_e(g.prev,g,g.next)>=0)return!1;g=g.next}return!0}function uf(i,t,e,n){const s=i.prev,r=i,a=i.next;if(_e(s,r,a)>=0)return!1;const o=s.x,l=r.x,c=a.x,h=s.y,u=r.y,d=a.y,f=Math.min(o,l,c),g=Math.min(h,u,d),x=Math.max(o,l,c),m=Math.max(h,u,d),p=nl(f,g,t,e,n),w=nl(x,m,t,e,n);let b=i.prevZ,M=i.nextZ;for(;b&&b.z>=p&&M&&M.z<=w;){if(b.x>=f&&b.x<=x&&b.y>=g&&b.y<=m&&b!==s&&b!==a&&Ws(o,h,l,u,c,d,b.x,b.y)&&_e(b.prev,b,b.next)>=0||(b=b.prevZ,M.x>=f&&M.x<=x&&M.y>=g&&M.y<=m&&M!==s&&M!==a&&Ws(o,h,l,u,c,d,M.x,M.y)&&_e(M.prev,M,M.next)>=0))return!1;M=M.nextZ}for(;b&&b.z>=p;){if(b.x>=f&&b.x<=x&&b.y>=g&&b.y<=m&&b!==s&&b!==a&&Ws(o,h,l,u,c,d,b.x,b.y)&&_e(b.prev,b,b.next)>=0)return!1;b=b.prevZ}for(;M&&M.z<=w;){if(M.x>=f&&M.x<=x&&M.y>=g&&M.y<=m&&M!==s&&M!==a&&Ws(o,h,l,u,c,d,M.x,M.y)&&_e(M.prev,M,M.next)>=0)return!1;M=M.nextZ}return!0}function df(i,t){let e=i;do{const n=e.prev,s=e.next.next;!ws(n,s)&&Vh(n,e,e.next,s)&&ir(n,s)&&ir(s,n)&&(t.push(n.i,e.i,s.i),sr(e),sr(e.next),e=i=s),e=e.next}while(e!==i);return Gi(e)}function ff(i,t,e,n,s,r){let a=i;do{let o=a.next.next;for(;o!==a.prev;){if(a.i!==o.i&&Sf(a,o)){let l=Wh(a,o);a=Gi(a,a.next),l=Gi(l,l.next),nr(a,t,e,n,s,r,0),nr(l,t,e,n,s,r,0);return}o=o.next}a=a.next}while(a!==i)}function pf(i,t,e,n){const s=[];for(let r=0,a=t.length;r<a;r++){const o=t[r]*n,l=r<a-1?t[r+1]*n:i.length,c=Hh(i,o,l,n,!1);c===c.next&&(c.steiner=!0),s.push(yf(c))}s.sort(mf);for(let r=0;r<s.length;r++)e=gf(s[r],e);return e}function mf(i,t){let e=i.x-t.x;if(e===0&&(e=i.y-t.y,e===0)){const n=(i.next.y-i.y)/(i.next.x-i.x),s=(t.next.y-t.y)/(t.next.x-t.x);e=n-s}return e}function gf(i,t){const e=xf(i,t);if(!e)return t;const n=Wh(e,i);return Gi(n,n.next),Gi(e,e.next)}function xf(i,t){let e=t;const n=i.x,s=i.y;let r=-1/0,a;if(ws(i,e))return e;do{if(ws(i,e.next))return e.next;if(s<=e.y&&s>=e.next.y&&e.next.y!==e.y){const u=e.x+(s-e.y)*(e.next.x-e.x)/(e.next.y-e.y);if(u<=n&&u>r&&(r=u,a=e.x<e.next.x?e:e.next,u===n))return a}e=e.next}while(e!==t);if(!a)return null;const o=a,l=a.x,c=a.y;let h=1/0;e=a;do{if(n>=e.x&&e.x>=l&&n!==e.x&&Gh(s<c?n:r,s,l,c,s<c?r:n,s,e.x,e.y)){const u=Math.abs(s-e.y)/(n-e.x);ir(e,i)&&(u<h||u===h&&(e.x>a.x||e.x===a.x&&_f(a,e)))&&(a=e,h=u)}e=e.next}while(e!==o);return a}function _f(i,t){return _e(i.prev,i,t.prev)<0&&_e(t.next,i,i.next)<0}function vf(i,t,e,n){let s=i;do s.z===0&&(s.z=nl(s.x,s.y,t,e,n)),s.prevZ=s.prev,s.nextZ=s.next,s=s.next;while(s!==i);s.prevZ.nextZ=null,s.prevZ=null,Mf(s)}function Mf(i){let t,e=1;do{let n=i,s;i=null;let r=null;for(t=0;n;){t++;let a=n,o=0;for(let c=0;c<e&&(o++,a=a.nextZ,!!a);c++);let l=e;for(;o>0||l>0&&a;)o!==0&&(l===0||!a||n.z<=a.z)?(s=n,n=n.nextZ,o--):(s=a,a=a.nextZ,l--),r?r.nextZ=s:i=s,s.prevZ=r,r=s;n=a}r.nextZ=null,e*=2}while(t>1);return i}function nl(i,t,e,n,s){return i=(i-e)*s|0,t=(t-n)*s|0,i=(i|i<<8)&16711935,i=(i|i<<4)&252645135,i=(i|i<<2)&858993459,i=(i|i<<1)&1431655765,t=(t|t<<8)&16711935,t=(t|t<<4)&252645135,t=(t|t<<2)&858993459,t=(t|t<<1)&1431655765,i|t<<1}function yf(i){let t=i,e=i;do(t.x<e.x||t.x===e.x&&t.y<e.y)&&(e=t),t=t.next;while(t!==i);return e}function Gh(i,t,e,n,s,r,a,o){return(s-a)*(t-o)>=(i-a)*(r-o)&&(i-a)*(n-o)>=(e-a)*(t-o)&&(e-a)*(r-o)>=(s-a)*(n-o)}function Ws(i,t,e,n,s,r,a,o){return!(i===a&&t===o)&&Gh(i,t,e,n,s,r,a,o)}function Sf(i,t){return i.next.i!==t.i&&i.prev.i!==t.i&&!wf(i,t)&&(ir(i,t)&&ir(t,i)&&bf(i,t)&&(_e(i.prev,i,t.prev)||_e(i,t.prev,t))||ws(i,t)&&_e(i.prev,i,i.next)>0&&_e(t.prev,t,t.next)>0)}function _e(i,t,e){return(t.y-i.y)*(e.x-t.x)-(t.x-i.x)*(e.y-t.y)}function ws(i,t){return i.x===t.x&&i.y===t.y}function Vh(i,t,e,n){const s=Fr(_e(i,t,e)),r=Fr(_e(i,t,n)),a=Fr(_e(e,n,i)),o=Fr(_e(e,n,t));return!!(s!==r&&a!==o||s===0&&Dr(i,e,t)||r===0&&Dr(i,n,t)||a===0&&Dr(e,i,n)||o===0&&Dr(e,t,n))}function Dr(i,t,e){return t.x<=Math.max(i.x,e.x)&&t.x>=Math.min(i.x,e.x)&&t.y<=Math.max(i.y,e.y)&&t.y>=Math.min(i.y,e.y)}function Fr(i){return i>0?1:i<0?-1:0}function wf(i,t){let e=i;do{if(e.i!==i.i&&e.next.i!==i.i&&e.i!==t.i&&e.next.i!==t.i&&Vh(e,e.next,i,t))return!0;e=e.next}while(e!==i);return!1}function ir(i,t){return _e(i.prev,i,i.next)<0?_e(i,t,i.next)>=0&&_e(i,i.prev,t)>=0:_e(i,t,i.prev)<0||_e(i,i.next,t)<0}function bf(i,t){let e=i,n=!1;const s=(i.x+t.x)/2,r=(i.y+t.y)/2;do e.y>r!=e.next.y>r&&e.next.y!==e.y&&s<(e.next.x-e.x)*(r-e.y)/(e.next.y-e.y)+e.x&&(n=!n),e=e.next;while(e!==i);return n}function Wh(i,t){const e=il(i.i,i.x,i.y),n=il(t.i,t.x,t.y),s=i.next,r=t.prev;return i.next=t,t.prev=i,e.next=s,s.prev=e,n.next=e,e.prev=n,r.next=n,n.prev=r,n}function wc(i,t,e,n){const s=il(i,t,e);return n?(s.next=n.next,s.prev=n,n.next.prev=s,n.next=s):(s.prev=s,s.next=s),s}function sr(i){i.next.prev=i.prev,i.prev.next=i.next,i.prevZ&&(i.prevZ.nextZ=i.nextZ),i.nextZ&&(i.nextZ.prevZ=i.prevZ)}function il(i,t,e){return{i,x:t,y:e,prev:null,next:null,z:0,prevZ:null,nextZ:null,steiner:!1}}function Ef(i,t,e,n){let s=0;for(let r=t,a=e-n;r<e;r+=n)s+=(i[a]-i[r])*(i[r+1]+i[a+1]),a=r;return s}class Tf{static triangulate(t,e,n=2){return cf(t,e,n)}}class ms{static area(t){const e=t.length;let n=0;for(let s=e-1,r=0;r<e;s=r++)n+=t[s].x*t[r].y-t[r].x*t[s].y;return n*.5}static isClockWise(t){return ms.area(t)<0}static triangulateShape(t,e){const n=[],s=[],r=[];bc(t),Ec(n,t);let a=t.length;e.forEach(bc);for(let l=0;l<e.length;l++)s.push(a),a+=e[l].length,Ec(n,e[l]);const o=Tf.triangulate(n,s);for(let l=0;l<o.length;l+=3)r.push(o.slice(l,l+3));return r}}function bc(i){const t=i.length;t>2&&i[t-1].equals(i[0])&&i.pop()}function Ec(i,t){for(let e=0;e<t.length;e++)i.push(t[e].x),i.push(t[e].y)}class da extends an{constructor(t=new Il([new ut(.5,.5),new ut(-.5,.5),new ut(-.5,-.5),new ut(.5,-.5)]),e={}){super(),this.type="ExtrudeGeometry",this.parameters={shapes:t,options:e},t=Array.isArray(t)?t:[t];const n=this,s=[],r=[];for(let o=0,l=t.length;o<l;o++){const c=t[o];a(c)}this.setAttribute("position",new De(s,3)),this.setAttribute("uv",new De(r,2)),this.computeVertexNormals();function a(o){const l=[],c=e.curveSegments!==void 0?e.curveSegments:12,h=e.steps!==void 0?e.steps:1,u=e.depth!==void 0?e.depth:1;let d=e.bevelEnabled!==void 0?e.bevelEnabled:!0,f=e.bevelThickness!==void 0?e.bevelThickness:.2,g=e.bevelSize!==void 0?e.bevelSize:f-.1,x=e.bevelOffset!==void 0?e.bevelOffset:0,m=e.bevelSegments!==void 0?e.bevelSegments:3;const p=e.extrudePath,w=e.UVGenerator!==void 0?e.UVGenerator:Cf;let b,M=!1,y,T,C,L;if(p){b=p.getSpacedPoints(h),M=!0,d=!1;const K=p.isCatmullRomCurve3?p.closed:!1;y=p.computeFrenetFrames(h,K),T=new D,C=new D,L=new D}d||(m=0,f=0,g=0,x=0);const v=o.extractPoints(c);let S=v.shape;const P=v.holes;if(!ms.isClockWise(S)){S=S.reverse();for(let K=0,rt=P.length;K<rt;K++){const tt=P[K];ms.isClockWise(tt)&&(P[K]=tt.reverse())}}function F(K){const tt=10000000000000001e-36;let at=K[0];for(let R=1;R<=K.length;R++){const bt=R%K.length,_t=K[bt],Ut=_t.x-at.x,ht=_t.y-at.y,A=Ut*Ut+ht*ht,_=Math.max(Math.abs(_t.x),Math.abs(_t.y),Math.abs(at.x),Math.abs(at.y)),O=tt*_*_;if(A<=O){K.splice(bt,1),R--;continue}at=_t}}F(S),P.forEach(F);const B=P.length,N=S;for(let K=0;K<B;K++){const rt=P[K];S=S.concat(rt)}function H(K,rt,tt){return rt||ee("ExtrudeGeometry: vec does not exist"),K.clone().addScaledVector(rt,tt)}const z=S.length;function $(K,rt,tt){let at,R,bt;const _t=K.x-rt.x,Ut=K.y-rt.y,ht=tt.x-K.x,A=tt.y-K.y,_=_t*_t+Ut*Ut,O=_t*A-Ut*ht;if(Math.abs(O)>Number.EPSILON){const X=Math.sqrt(_),et=Math.sqrt(ht*ht+A*A),q=rt.x-Ut/X,Lt=rt.y+_t/X,dt=tt.x-A/et,Rt=tt.y+ht/et,Ht=((dt-q)*A-(Rt-Lt)*ht)/(_t*A-Ut*ht);at=q+_t*Ht-K.x,R=Lt+Ut*Ht-K.y;const ot=at*at+R*R;if(ot<=2)return new ut(at,R);bt=Math.sqrt(ot/2)}else{let X=!1;_t>Number.EPSILON?ht>Number.EPSILON&&(X=!0):_t<-Number.EPSILON?ht<-Number.EPSILON&&(X=!0):Math.sign(Ut)===Math.sign(A)&&(X=!0),X?(at=-Ut,R=_t,bt=Math.sqrt(_)):(at=_t,R=Ut,bt=Math.sqrt(_/2))}return new ut(at/bt,R/bt)}const st=[];for(let K=0,rt=N.length,tt=rt-1,at=K+1;K<rt;K++,tt++,at++)tt===rt&&(tt=0),at===rt&&(at=0),st[K]=$(N[K],N[tt],N[at]);const Z=[];let j,Ct=st.concat();for(let K=0,rt=B;K<rt;K++){const tt=P[K];j=[];for(let at=0,R=tt.length,bt=R-1,_t=at+1;at<R;at++,bt++,_t++)bt===R&&(bt=0),_t===R&&(_t=0),j[at]=$(tt[at],tt[bt],tt[_t]);Z.push(j),Ct=Ct.concat(j)}let It;if(m===0)It=ms.triangulateShape(N,P);else{const K=[],rt=[];for(let tt=0;tt<m;tt++){const at=tt/m,R=f*Math.cos(at*Math.PI/2),bt=g*Math.sin(at*Math.PI/2)+x;for(let _t=0,Ut=N.length;_t<Ut;_t++){const ht=H(N[_t],st[_t],bt);Ft(ht.x,ht.y,-R),at===0&&K.push(ht)}for(let _t=0,Ut=B;_t<Ut;_t++){const ht=P[_t];j=Z[_t];const A=[];for(let _=0,O=ht.length;_<O;_++){const X=H(ht[_],j[_],bt);Ft(X.x,X.y,-R),at===0&&A.push(X)}at===0&&rt.push(A)}}It=ms.triangulateShape(K,rt)}const $t=It.length,te=g+x;for(let K=0;K<z;K++){const rt=d?H(S[K],Ct[K],te):S[K];M?(C.copy(y.normals[0]).multiplyScalar(rt.x),T.copy(y.binormals[0]).multiplyScalar(rt.y),L.copy(b[0]).add(C).add(T),Ft(L.x,L.y,L.z)):Ft(rt.x,rt.y,0)}for(let K=1;K<=h;K++)for(let rt=0;rt<z;rt++){const tt=d?H(S[rt],Ct[rt],te):S[rt];M?(C.copy(y.normals[K]).multiplyScalar(tt.x),T.copy(y.binormals[K]).multiplyScalar(tt.y),L.copy(b[K]).add(C).add(T),Ft(L.x,L.y,L.z)):Ft(tt.x,tt.y,u/h*K)}for(let K=m-1;K>=0;K--){const rt=K/m,tt=f*Math.cos(rt*Math.PI/2),at=g*Math.sin(rt*Math.PI/2)+x;for(let R=0,bt=N.length;R<bt;R++){const _t=H(N[R],st[R],at);Ft(_t.x,_t.y,u+tt)}for(let R=0,bt=P.length;R<bt;R++){const _t=P[R];j=Z[R];for(let Ut=0,ht=_t.length;Ut<ht;Ut++){const A=H(_t[Ut],j[Ut],at);M?Ft(A.x,A.y+b[h-1].y,b[h-1].x+tt):Ft(A.x,A.y,u+tt)}}}Y(),Q();function Y(){const K=s.length/3;if(d){let rt=0,tt=z*rt;for(let at=0;at<$t;at++){const R=It[at];St(R[2]+tt,R[1]+tt,R[0]+tt)}rt=h+m*2,tt=z*rt;for(let at=0;at<$t;at++){const R=It[at];St(R[0]+tt,R[1]+tt,R[2]+tt)}}else{for(let rt=0;rt<$t;rt++){const tt=It[rt];St(tt[2],tt[1],tt[0])}for(let rt=0;rt<$t;rt++){const tt=It[rt];St(tt[0]+z*h,tt[1]+z*h,tt[2]+z*h)}}n.addGroup(K,s.length/3-K,0)}function Q(){const K=s.length/3;let rt=0;xt(N,rt),rt+=N.length;for(let tt=0,at=P.length;tt<at;tt++){const R=P[tt];xt(R,rt),rt+=R.length}n.addGroup(K,s.length/3-K,1)}function xt(K,rt){let tt=K.length;for(;--tt>=0;){const at=tt;let R=tt-1;R<0&&(R=K.length-1);for(let bt=0,_t=h+m*2;bt<_t;bt++){const Ut=z*bt,ht=z*(bt+1),A=rt+at+Ut,_=rt+R+Ut,O=rt+R+ht,X=rt+at+ht;jt(A,_,O,X)}}}function Ft(K,rt,tt){l.push(K),l.push(rt),l.push(tt)}function St(K,rt,tt){ae(K),ae(rt),ae(tt);const at=s.length/3,R=w.generateTopUV(n,s,at-3,at-2,at-1);Wt(R[0]),Wt(R[1]),Wt(R[2])}function jt(K,rt,tt,at){ae(K),ae(rt),ae(at),ae(rt),ae(tt),ae(at);const R=s.length/3,bt=w.generateSideWallUV(n,s,R-6,R-3,R-2,R-1);Wt(bt[0]),Wt(bt[1]),Wt(bt[3]),Wt(bt[1]),Wt(bt[2]),Wt(bt[3])}function ae(K){s.push(l[K*3+0]),s.push(l[K*3+1]),s.push(l[K*3+2])}function Wt(K){r.push(K.x),r.push(K.y)}}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){const t=super.toJSON(),e=this.parameters.shapes,n=this.parameters.options;return Af(e,n,t)}static fromJSON(t,e){const n=[];for(let r=0,a=t.shapes.length;r<a;r++){const o=e[t.shapes[r]];n.push(o)}const s=t.options.extrudePath;return s!==void 0&&(t.options.extrudePath=new el[s.type]().fromJSON(s)),new da(n,t.options)}}const Cf={generateTopUV:function(i,t,e,n,s){const r=t[e*3],a=t[e*3+1],o=t[n*3],l=t[n*3+1],c=t[s*3],h=t[s*3+1];return[new ut(r,a),new ut(o,l),new ut(c,h)]},generateSideWallUV:function(i,t,e,n,s,r){const a=t[e*3],o=t[e*3+1],l=t[e*3+2],c=t[n*3],h=t[n*3+1],u=t[n*3+2],d=t[s*3],f=t[s*3+1],g=t[s*3+2],x=t[r*3],m=t[r*3+1],p=t[r*3+2];return Math.abs(o-h)<Math.abs(a-c)?[new ut(a,1-l),new ut(c,1-u),new ut(d,1-g),new ut(x,1-p)]:[new ut(o,1-l),new ut(h,1-u),new ut(f,1-g),new ut(m,1-p)]}};function Af(i,t,e){if(e.shapes=[],Array.isArray(i))for(let n=0,s=i.length;n<s;n++){const r=i[n];e.shapes.push(r.uuid)}else e.shapes.push(i.uuid);return e.options=Object.assign({},t),t.extrudePath!==void 0&&(e.options.extrudePath=t.extrudePath.toJSON()),e}class Ts extends an{constructor(t=1,e=1,n=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:n,heightSegments:s};const r=t/2,a=e/2,o=Math.floor(n),l=Math.floor(s),c=o+1,h=l+1,u=t/o,d=e/l,f=[],g=[],x=[],m=[];for(let p=0;p<h;p++){const w=p*d-a;for(let b=0;b<c;b++){const M=b*u-r;g.push(M,-w,0),x.push(0,0,1),m.push(b/o),m.push(1-p/l)}}for(let p=0;p<l;p++)for(let w=0;w<o;w++){const b=w+c*p,M=w+c*(p+1),y=w+1+c*(p+1),T=w+1+c*p;f.push(b,M,T),f.push(M,y,T)}this.setIndex(f),this.setAttribute("position",new De(g,3)),this.setAttribute("normal",new De(x,3)),this.setAttribute("uv",new De(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Ts(t.width,t.height,t.widthSegments,t.heightSegments)}}class ne extends an{constructor(t=1,e=32,n=16,s=0,r=Math.PI*2,a=0,o=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:t,widthSegments:e,heightSegments:n,phiStart:s,phiLength:r,thetaStart:a,thetaLength:o},e=Math.max(3,Math.floor(e)),n=Math.max(2,Math.floor(n));const l=Math.min(a+o,Math.PI);let c=0;const h=[],u=new D,d=new D,f=[],g=[],x=[],m=[];for(let p=0;p<=n;p++){const w=[],b=p/n;let M=0;p===0&&a===0?M=.5/e:p===n&&l===Math.PI&&(M=-.5/e);for(let y=0;y<=e;y++){const T=y/e;u.x=-t*Math.cos(s+T*r)*Math.sin(a+b*o),u.y=t*Math.cos(a+b*o),u.z=t*Math.sin(s+T*r)*Math.sin(a+b*o),g.push(u.x,u.y,u.z),d.copy(u).normalize(),x.push(d.x,d.y,d.z),m.push(T+M,1-b),w.push(c++)}h.push(w)}for(let p=0;p<n;p++)for(let w=0;w<e;w++){const b=h[p][w+1],M=h[p][w],y=h[p+1][w],T=h[p+1][w+1];(p!==0||a>0)&&f.push(b,M,T),(p!==n-1||l<Math.PI)&&f.push(M,y,T)}this.setIndex(f),this.setAttribute("position",new De(g,3)),this.setAttribute("normal",new De(x,3)),this.setAttribute("uv",new De(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new ne(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}}class ea extends an{constructor(t=1,e=.4,n=12,s=48,r=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:t,tube:e,radialSegments:n,tubularSegments:s,arc:r},n=Math.floor(n),s=Math.floor(s);const a=[],o=[],l=[],c=[],h=new D,u=new D,d=new D;for(let f=0;f<=n;f++)for(let g=0;g<=s;g++){const x=g/s*r,m=f/n*Math.PI*2;u.x=(t+e*Math.cos(m))*Math.cos(x),u.y=(t+e*Math.cos(m))*Math.sin(x),u.z=e*Math.sin(m),o.push(u.x,u.y,u.z),h.x=t*Math.cos(x),h.y=t*Math.sin(x),d.subVectors(u,h).normalize(),l.push(d.x,d.y,d.z),c.push(g/s),c.push(f/n)}for(let f=1;f<=n;f++)for(let g=1;g<=s;g++){const x=(s+1)*f+g-1,m=(s+1)*(f-1)+g-1,p=(s+1)*(f-1)+g,w=(s+1)*f+g;a.push(x,m,w),a.push(m,p,w)}this.setIndex(a),this.setAttribute("position",new De(o,3)),this.setAttribute("normal",new De(l,3)),this.setAttribute("uv",new De(c,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new ea(t.radius,t.tube,t.radialSegments,t.tubularSegments,t.arc)}}class Rf extends En{constructor(t){super(t),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}}class Ya extends bi{constructor(t){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new Bt(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Bt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=ua,this.normalScale=new ut(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Ne,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.defines={STANDARD:""},this.color.copy(t.color),this.roughness=t.roughness,this.metalness=t.metalness,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.roughnessMap=t.roughnessMap,this.metalnessMap=t.metalnessMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.envMapIntensity=t.envMapIntensity,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}}class Pf extends bi{constructor(t){super(),this.isMeshPhongMaterial=!0,this.type="MeshPhongMaterial",this.color=new Bt(16777215),this.specular=new Bt(1118481),this.shininess=30,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Bt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=ua,this.normalScale=new ut(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Ne,this.combine=ca,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.specular.copy(t.specular),this.shininess=t.shininess,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}}class Vt extends bi{constructor(t){super(),this.isMeshLambertMaterial=!0,this.type="MeshLambertMaterial",this.color=new Bt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Bt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=ua,this.normalScale=new ut(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Ne,this.combine=ca,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}}class If extends bi{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Yu,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}}class Lf extends bi{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}}const Tc={enabled:!1,files:{},add:function(i,t){this.enabled!==!1&&(this.files[i]=t)},get:function(i){if(this.enabled!==!1)return this.files[i]},remove:function(i){delete this.files[i]},clear:function(){this.files={}}};class Df{constructor(t,e,n){const s=this;let r=!1,a=0,o=0,l;const c=[];this.onStart=void 0,this.onLoad=t,this.onProgress=e,this.onError=n,this._abortController=null,this.itemStart=function(h){o++,r===!1&&s.onStart!==void 0&&s.onStart(h,a,o),r=!0},this.itemEnd=function(h){a++,s.onProgress!==void 0&&s.onProgress(h,a,o),a===o&&(r=!1,s.onLoad!==void 0&&s.onLoad())},this.itemError=function(h){s.onError!==void 0&&s.onError(h)},this.resolveURL=function(h){return l?l(h):h},this.setURLModifier=function(h){return l=h,this},this.addHandler=function(h,u){return c.push(h,u),this},this.removeHandler=function(h){const u=c.indexOf(h);return u!==-1&&c.splice(u,2),this},this.getHandler=function(h){for(let u=0,d=c.length;u<d;u+=2){const f=c[u],g=c[u+1];if(f.global&&(f.lastIndex=0),f.test(h))return g}return null},this.abort=function(){return this.abortController.abort(),this._abortController=null,this}}get abortController(){return this._abortController||(this._abortController=new AbortController),this._abortController}}const Ff=new Df;class Ll{constructor(t){this.manager=t!==void 0?t:Ff,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(t,e){const n=this;return new Promise(function(s,r){n.load(t,s,e,r)})}parse(){}setCrossOrigin(t){return this.crossOrigin=t,this}setWithCredentials(t){return this.withCredentials=t,this}setPath(t){return this.path=t,this}setResourcePath(t){return this.resourcePath=t,this}setRequestHeader(t){return this.requestHeader=t,this}abort(){return this}}Ll.DEFAULT_MATERIAL_NAME="__DEFAULT";const ti={};class Nf extends Error{constructor(t,e){super(t),this.response=e}}class Uf extends Ll{constructor(t){super(t),this.mimeType="",this.responseType="",this._abortController=new AbortController}load(t,e,n,s){t===void 0&&(t=""),this.path!==void 0&&(t=this.path+t),t=this.manager.resolveURL(t);const r=Tc.get(`file:${t}`);if(r!==void 0)return this.manager.itemStart(t),setTimeout(()=>{e&&e(r),this.manager.itemEnd(t)},0),r;if(ti[t]!==void 0){ti[t].push({onLoad:e,onProgress:n,onError:s});return}ti[t]=[],ti[t].push({onLoad:e,onProgress:n,onError:s});const a=new Request(t,{headers:new Headers(this.requestHeader),credentials:this.withCredentials?"include":"same-origin",signal:typeof AbortSignal.any=="function"?AbortSignal.any([this._abortController.signal,this.manager.abortController.signal]):this._abortController.signal}),o=this.mimeType,l=this.responseType;fetch(a).then(c=>{if(c.status===200||c.status===0){if(c.status===0&&Ot("FileLoader: HTTP Status 0 received."),typeof ReadableStream>"u"||c.body===void 0||c.body.getReader===void 0)return c;const h=ti[t],u=c.body.getReader(),d=c.headers.get("X-File-Size")||c.headers.get("Content-Length"),f=d?parseInt(d):0,g=f!==0;let x=0;const m=new ReadableStream({start(p){w();function w(){u.read().then(({done:b,value:M})=>{if(b)p.close();else{x+=M.byteLength;const y=new ProgressEvent("progress",{lengthComputable:g,loaded:x,total:f});for(let T=0,C=h.length;T<C;T++){const L=h[T];L.onProgress&&L.onProgress(y)}p.enqueue(M),w()}},b=>{p.error(b)})}}});return new Response(m)}else throw new Nf(`fetch for "${c.url}" responded with ${c.status}: ${c.statusText}`,c)}).then(c=>{switch(l){case"arraybuffer":return c.arrayBuffer();case"blob":return c.blob();case"document":return c.text().then(h=>new DOMParser().parseFromString(h,o));case"json":return c.json();default:if(o==="")return c.text();{const u=/charset="?([^;"\s]*)"?/i.exec(o),d=u&&u[1]?u[1].toLowerCase():void 0,f=new TextDecoder(d);return c.arrayBuffer().then(g=>f.decode(g))}}}).then(c=>{Tc.add(`file:${t}`,c);const h=ti[t];delete ti[t];for(let u=0,d=h.length;u<d;u++){const f=h[u];f.onLoad&&f.onLoad(c)}}).catch(c=>{const h=ti[t];if(h===void 0)throw this.manager.itemError(t),c;delete ti[t];for(let u=0,d=h.length;u<d;u++){const f=h[u];f.onError&&f.onError(c)}this.manager.itemError(t)}).finally(()=>{this.manager.itemEnd(t)}),this.manager.itemStart(t)}setResponseType(t){return this.responseType=t,this}setMimeType(t){return this.mimeType=t,this}abort(){return this._abortController.abort(),this._abortController=new AbortController,this}}class Xh extends Fe{constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new Bt(t),this.intensity=e}dispose(){this.dispatchEvent({type:"dispose"})}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){const e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,e}}const qa=new Qt,Cc=new D,Ac=new D;class Of{constructor(t){this.camera=t,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new ut(512,512),this.mapType=fn,this.map=null,this.mapPass=null,this.matrix=new Qt,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Al,this._frameExtents=new ut(1,1),this._viewportCount=1,this._viewports=[new Ee(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(t){const e=this.camera,n=this.matrix;Cc.setFromMatrixPosition(t.matrixWorld),e.position.copy(Cc),Ac.setFromMatrixPosition(t.target.matrixWorld),e.lookAt(Ac),e.updateMatrixWorld(),qa.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),this._frustum.setFromProjectionMatrix(qa,e.coordinateSystem,e.reversedDepth),e.reversedDepth?n.set(.5,0,0,.5,0,.5,0,.5,0,0,1,0,0,0,0,1):n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(qa)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.intensity=t.intensity,this.bias=t.bias,this.radius=t.radius,this.autoUpdate=t.autoUpdate,this.needsUpdate=t.needsUpdate,this.normalBias=t.normalBias,this.blurSamples=t.blurSamples,this.mapSize.copy(t.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const t={};return this.intensity!==1&&(t.intensity=this.intensity),this.bias!==0&&(t.bias=this.bias),this.normalBias!==0&&(t.normalBias=this.normalBias),this.radius!==1&&(t.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(t.mapSize=this.mapSize.toArray()),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}}class Dl extends Ph{constructor(t=-1,e=1,n=1,s=-1,r=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=n,this.bottom=s,this.near=r,this.far=a,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,n,s,r,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,s=(this.top+this.bottom)/2;let r=n-t,a=n+t,o=s+e,l=s-e;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,a=r+c*this.view.width,o-=h*this.view.offsetY,l=o-h*this.view.height}this.projectionMatrix.makeOrthographic(r,a,o,l,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}}class Bf extends Of{constructor(){super(new Dl(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class kf extends Xh{constructor(t,e){super(t,e),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Fe.DEFAULT_UP),this.updateMatrix(),this.target=new Fe,this.shadow=new Bf}dispose(){super.dispose(),this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}toJSON(t){const e=super.toJSON(t);return e.object.shadow=this.shadow.toJSON(),e.object.target=this.target.uuid,e}}class zf extends Xh{constructor(t,e){super(t,e),this.isAmbientLight=!0,this.type="AmbientLight"}}let Nr;class Yh{static getContext(){return Nr===void 0&&(Nr=new(window.AudioContext||window.webkitAudioContext)),Nr}static setContext(t){Nr=t}}class Hf extends Ll{constructor(t){super(t)}load(t,e,n,s){const r=this,a=new Uf(this.manager);a.setResponseType("arraybuffer"),a.setPath(this.path),a.setRequestHeader(this.requestHeader),a.setWithCredentials(this.withCredentials),a.load(t,function(l){try{const c=l.slice(0);Yh.getContext().decodeAudioData(c,function(u){e(u)}).catch(o)}catch(c){o(c)}},n,s);function o(l){s?s(l):ee(l),r.manager.itemError(t)}}}class Gf extends Mn{constructor(t=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=t}}class qh{constructor(t=!0){this.autoStart=t,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=performance.now(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let t=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const e=performance.now();t=(e-this.oldTime)/1e3,this.oldTime=e,this.elapsedTime+=t}return t}}const Ii=new D,Za=new qe,Vf=new D,Li=new D,Di=new D;class Wf extends Fe{constructor(){super(),this.type="AudioListener",this.context=Yh.getContext(),this.gain=this.context.createGain(),this.gain.connect(this.context.destination),this.filter=null,this.timeDelta=0,this._clock=new qh}getInput(){return this.gain}removeFilter(){return this.filter!==null&&(this.gain.disconnect(this.filter),this.filter.disconnect(this.context.destination),this.gain.connect(this.context.destination),this.filter=null),this}getFilter(){return this.filter}setFilter(t){return this.filter!==null?(this.gain.disconnect(this.filter),this.filter.disconnect(this.context.destination)):this.gain.disconnect(this.context.destination),this.filter=t,this.gain.connect(this.filter),this.filter.connect(this.context.destination),this}getMasterVolume(){return this.gain.gain.value}setMasterVolume(t){return this.gain.gain.setTargetAtTime(t,this.context.currentTime,.01),this}updateMatrixWorld(t){super.updateMatrixWorld(t);const e=this.context.listener;if(this.timeDelta=this._clock.getDelta(),this.matrixWorld.decompose(Ii,Za,Vf),Li.set(0,0,-1).applyQuaternion(Za),Di.set(0,1,0).applyQuaternion(Za),e.positionX){const n=this.context.currentTime+this.timeDelta;e.positionX.linearRampToValueAtTime(Ii.x,n),e.positionY.linearRampToValueAtTime(Ii.y,n),e.positionZ.linearRampToValueAtTime(Ii.z,n),e.forwardX.linearRampToValueAtTime(Li.x,n),e.forwardY.linearRampToValueAtTime(Li.y,n),e.forwardZ.linearRampToValueAtTime(Li.z,n),e.upX.linearRampToValueAtTime(Di.x,n),e.upY.linearRampToValueAtTime(Di.y,n),e.upZ.linearRampToValueAtTime(Di.z,n)}else e.setPosition(Ii.x,Ii.y,Ii.z),e.setOrientation(Li.x,Li.y,Li.z,Di.x,Di.y,Di.z)}}class Rc extends Fe{constructor(t){super(),this.type="Audio",this.listener=t,this.context=t.context,this.gain=this.context.createGain(),this.gain.connect(t.getInput()),this.autoplay=!1,this.buffer=null,this.detune=0,this.loop=!1,this.loopStart=0,this.loopEnd=0,this.offset=0,this.duration=void 0,this.playbackRate=1,this.isPlaying=!1,this.hasPlaybackControl=!0,this.source=null,this.sourceType="empty",this._startedAt=0,this._progress=0,this._connected=!1,this.filters=[]}getOutput(){return this.gain}setNodeSource(t){return this.hasPlaybackControl=!1,this.sourceType="audioNode",this.source=t,this.connect(),this}setMediaElementSource(t){return this.hasPlaybackControl=!1,this.sourceType="mediaNode",this.source=this.context.createMediaElementSource(t),this.connect(),this}setMediaStreamSource(t){return this.hasPlaybackControl=!1,this.sourceType="mediaStreamNode",this.source=this.context.createMediaStreamSource(t),this.connect(),this}setBuffer(t){return this.buffer=t,this.sourceType="buffer",this.autoplay&&this.play(),this}play(t=0){if(this.isPlaying===!0){Ot("Audio: Audio is already playing.");return}if(this.hasPlaybackControl===!1){Ot("Audio: this Audio has no playback control.");return}this._startedAt=this.context.currentTime+t;const e=this.context.createBufferSource();return e.buffer=this.buffer,e.loop=this.loop,e.loopStart=this.loopStart,e.loopEnd=this.loopEnd,e.onended=this.onEnded.bind(this),e.start(this._startedAt,this._progress+this.offset,this.duration),this.isPlaying=!0,this.source=e,this.setDetune(this.detune),this.setPlaybackRate(this.playbackRate),this.connect()}pause(){if(this.hasPlaybackControl===!1){Ot("Audio: this Audio has no playback control.");return}return this.isPlaying===!0&&(this._progress+=Math.max(this.context.currentTime-this._startedAt,0)*this.playbackRate,this.loop===!0&&(this._progress=this._progress%(this.duration||this.buffer.duration)),this.source.stop(),this.source.onended=null,this.isPlaying=!1),this}stop(t=0){if(this.hasPlaybackControl===!1){Ot("Audio: this Audio has no playback control.");return}return this._progress=0,this.source!==null&&(this.source.stop(this.context.currentTime+t),this.source.onended=null),this.isPlaying=!1,this}connect(){if(this.filters.length>0){this.source.connect(this.filters[0]);for(let t=1,e=this.filters.length;t<e;t++)this.filters[t-1].connect(this.filters[t]);this.filters[this.filters.length-1].connect(this.getOutput())}else this.source.connect(this.getOutput());return this._connected=!0,this}disconnect(){if(this._connected!==!1){if(this.filters.length>0){this.source.disconnect(this.filters[0]);for(let t=1,e=this.filters.length;t<e;t++)this.filters[t-1].disconnect(this.filters[t]);this.filters[this.filters.length-1].disconnect(this.getOutput())}else this.source.disconnect(this.getOutput());return this._connected=!1,this}}getFilters(){return this.filters}setFilters(t){return t||(t=[]),this._connected===!0?(this.disconnect(),this.filters=t.slice(),this.connect()):this.filters=t.slice(),this}setDetune(t){return this.detune=t,this.isPlaying===!0&&this.source.detune!==void 0&&this.source.detune.setTargetAtTime(this.detune,this.context.currentTime,.01),this}getDetune(){return this.detune}getFilter(){return this.getFilters()[0]}setFilter(t){return this.setFilters(t?[t]:[])}setPlaybackRate(t){if(this.hasPlaybackControl===!1){Ot("Audio: this Audio has no playback control.");return}return this.playbackRate=t,this.isPlaying===!0&&this.source.playbackRate.setTargetAtTime(this.playbackRate,this.context.currentTime,.01),this}getPlaybackRate(){return this.playbackRate}onEnded(){this.isPlaying=!1,this._progress=0}getLoop(){return this.hasPlaybackControl===!1?(Ot("Audio: this Audio has no playback control."),!1):this.loop}setLoop(t){if(this.hasPlaybackControl===!1){Ot("Audio: this Audio has no playback control.");return}return this.loop=t,this.isPlaying===!0&&(this.source.loop=this.loop),this}setLoopStart(t){return this.loopStart=t,this}setLoopEnd(t){return this.loopEnd=t,this}getVolume(){return this.gain.gain.value}setVolume(t){return this.gain.gain.setTargetAtTime(t,this.context.currentTime,.01),this}copy(t,e){return super.copy(t,e),t.sourceType!=="buffer"?(Ot("Audio: Audio source type cannot be copied."),this):(this.autoplay=t.autoplay,this.buffer=t.buffer,this.detune=t.detune,this.loop=t.loop,this.loopStart=t.loopStart,this.loopEnd=t.loopEnd,this.offset=t.offset,this.duration=t.duration,this.playbackRate=t.playbackRate,this.hasPlaybackControl=t.hasPlaybackControl,this.sourceType=t.sourceType,this.filters=t.filters.slice(),this)}clone(t){return new this.constructor(this.listener).copy(this,t)}}function Pc(i,t,e,n){const s=Xf(n);switch(e){case yh:return i*t;case Ml:return i*t/s.components*s.byteLength;case yl:return i*t/s.components*s.byteLength;case Ms:return i*t*2/s.components*s.byteLength;case Sl:return i*t*2/s.components*s.byteLength;case Sh:return i*t*3/s.components*s.byteLength;case Nn:return i*t*4/s.components*s.byteLength;case wl:return i*t*4/s.components*s.byteLength;case Gr:case Vr:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*8;case Wr:case Xr:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case So:case bo:return Math.max(i,16)*Math.max(t,8)/4;case yo:case wo:return Math.max(i,8)*Math.max(t,8)/2;case Eo:case To:case Ao:case Ro:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*8;case Co:case Po:case Io:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case Lo:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case Do:return Math.floor((i+4)/5)*Math.floor((t+3)/4)*16;case Fo:return Math.floor((i+4)/5)*Math.floor((t+4)/5)*16;case No:return Math.floor((i+5)/6)*Math.floor((t+4)/5)*16;case Uo:return Math.floor((i+5)/6)*Math.floor((t+5)/6)*16;case Oo:return Math.floor((i+7)/8)*Math.floor((t+4)/5)*16;case Bo:return Math.floor((i+7)/8)*Math.floor((t+5)/6)*16;case ko:return Math.floor((i+7)/8)*Math.floor((t+7)/8)*16;case zo:return Math.floor((i+9)/10)*Math.floor((t+4)/5)*16;case Ho:return Math.floor((i+9)/10)*Math.floor((t+5)/6)*16;case Go:return Math.floor((i+9)/10)*Math.floor((t+7)/8)*16;case Vo:return Math.floor((i+9)/10)*Math.floor((t+9)/10)*16;case Wo:return Math.floor((i+11)/12)*Math.floor((t+9)/10)*16;case Xo:return Math.floor((i+11)/12)*Math.floor((t+11)/12)*16;case Yo:case qo:case Zo:return Math.ceil(i/4)*Math.ceil(t/4)*16;case $o:case Ko:return Math.ceil(i/4)*Math.ceil(t/4)*8;case Jo:case jo:return Math.ceil(i/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${e} format.`)}function Xf(i){switch(i){case fn:case xh:return{byteLength:1,components:1};case Js:case _h:case oi:return{byteLength:2,components:1};case _l:case vl:return{byteLength:2,components:4};case Yn:case xl:case Fn:return{byteLength:4,components:1};case vh:case Mh:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${i}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:gl}}));typeof window<"u"&&(window.__THREE__?Ot("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=gl);function Zh(){let i=null,t=!1,e=null,n=null;function s(r,a){e(r,a),n=i.requestAnimationFrame(s)}return{start:function(){t!==!0&&e!==null&&(n=i.requestAnimationFrame(s),t=!0)},stop:function(){i.cancelAnimationFrame(n),t=!1},setAnimationLoop:function(r){e=r},setContext:function(r){i=r}}}function Yf(i){const t=new WeakMap;function e(o,l){const c=o.array,h=o.usage,u=c.byteLength,d=i.createBuffer();i.bindBuffer(l,d),i.bufferData(l,c,h),o.onUploadCallback();let f;if(c instanceof Float32Array)f=i.FLOAT;else if(typeof Float16Array<"u"&&c instanceof Float16Array)f=i.HALF_FLOAT;else if(c instanceof Uint16Array)o.isFloat16BufferAttribute?f=i.HALF_FLOAT:f=i.UNSIGNED_SHORT;else if(c instanceof Int16Array)f=i.SHORT;else if(c instanceof Uint32Array)f=i.UNSIGNED_INT;else if(c instanceof Int32Array)f=i.INT;else if(c instanceof Int8Array)f=i.BYTE;else if(c instanceof Uint8Array)f=i.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)f=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:d,type:f,bytesPerElement:c.BYTES_PER_ELEMENT,version:o.version,size:u}}function n(o,l,c){const h=l.array,u=l.updateRanges;if(i.bindBuffer(c,o),u.length===0)i.bufferSubData(c,0,h);else{u.sort((f,g)=>f.start-g.start);let d=0;for(let f=1;f<u.length;f++){const g=u[d],x=u[f];x.start<=g.start+g.count+1?g.count=Math.max(g.count,x.start+x.count-g.start):(++d,u[d]=x)}u.length=d+1;for(let f=0,g=u.length;f<g;f++){const x=u[f];i.bufferSubData(c,x.start*h.BYTES_PER_ELEMENT,h,x.start,x.count)}l.clearUpdateRanges()}l.onUploadCallback()}function s(o){return o.isInterleavedBufferAttribute&&(o=o.data),t.get(o)}function r(o){o.isInterleavedBufferAttribute&&(o=o.data);const l=t.get(o);l&&(i.deleteBuffer(l.buffer),t.delete(o))}function a(o,l){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){const h=t.get(o);(!h||h.version<o.version)&&t.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}const c=t.get(o);if(c===void 0)t.set(o,e(o,l));else if(c.version<o.version){if(c.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(c.buffer,o,l),c.version=o.version}}return{get:s,remove:r,update:a}}var qf=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Zf=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,$f=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Kf=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Jf=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,jf=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Qf=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,tp=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,ep=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec3 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 ).rgb;
	}
#endif`,np=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,ip=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,sp=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,rp=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,ap=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,op=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,lp=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,cp=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,hp=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,up=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,dp=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,fp=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,pp=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,mp=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif
#ifdef USE_BATCHING_COLOR
	vec3 batchingColor = getBatchingColor( getIndirectIndex( gl_DrawID ) );
	vColor.xyz *= batchingColor.xyz;
#endif`,gp=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,xp=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,_p=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,vp=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Mp=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,yp=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Sp=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,wp="gl_FragColor = linearToOutputTexel( gl_FragColor );",bp=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,Ep=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,Tp=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,Cp=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,Ap=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Rp=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,Pp=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Ip=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Lp=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Dp=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Fp=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,Np=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Up=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Op=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Bp=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,kp=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, pow4( roughness ) ) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,zp=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Hp=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Gp=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Vp=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Wp=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.diffuseContribution = diffuseColor.rgb * ( 1.0 - metalnessFactor );
material.metalness = metalnessFactor;
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor;
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = vec3( 0.04 );
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.0001, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,Xp=`uniform sampler2D dfgLUT;
struct PhysicalMaterial {
	vec3 diffuseColor;
	vec3 diffuseContribution;
	vec3 specularColor;
	vec3 specularColorBlended;
	float roughness;
	float metalness;
	float specularF90;
	float dispersion;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
		vec3 iridescenceFresnelDielectric;
		vec3 iridescenceFresnelMetallic;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return v;
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColorBlended;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transpose( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float rInv = 1.0 / ( roughness + 0.1 );
	float a = -1.9362 + 1.0678 * roughness + 0.4573 * r2 - 0.8469 * rInv;
	float b = -0.6014 + 0.5538 * roughness - 0.4670 * r2 - 0.1255 * rInv;
	float DG = exp( a * dotNV + b );
	return saturate( DG );
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
vec3 BRDF_GGX_Multiscatter( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 singleScatter = BRDF_GGX( lightDir, viewDir, normal, material );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 dfgV = texture2D( dfgLUT, vec2( material.roughness, dotNV ) ).rg;
	vec2 dfgL = texture2D( dfgLUT, vec2( material.roughness, dotNL ) ).rg;
	vec3 FssEss_V = material.specularColorBlended * dfgV.x + material.specularF90 * dfgV.y;
	vec3 FssEss_L = material.specularColorBlended * dfgL.x + material.specularF90 * dfgL.y;
	float Ess_V = dfgV.x + dfgV.y;
	float Ess_L = dfgL.x + dfgL.y;
	float Ems_V = 1.0 - Ess_V;
	float Ems_L = 1.0 - Ess_L;
	vec3 Favg = material.specularColorBlended + ( 1.0 - material.specularColorBlended ) * 0.047619;
	vec3 Fms = FssEss_V * FssEss_L * Favg / ( 1.0 - Ems_V * Ems_L * Favg + EPSILON );
	float compensationFactor = Ems_V * Ems_L;
	vec3 multiScatter = Fms * compensationFactor;
	return singleScatter + multiScatter;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColorBlended * t2.x + ( vec3( 1.0 ) - material.specularColorBlended ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseContribution * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
 
 		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
 
 		float sheenAlbedoV = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
 		float sheenAlbedoL = IBLSheenBRDF( geometryNormal, directLight.direction, material.sheenRoughness );
 
 		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * max( sheenAlbedoV, sheenAlbedoL );
 
 		irradiance *= sheenEnergyComp;
 
 	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX_Multiscatter( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseContribution );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 diffuse = irradiance * BRDF_Lambert( material.diffuseContribution );
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		diffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectDiffuse += diffuse;
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness ) * RECIPROCAL_PI;
 	#endif
	vec3 singleScatteringDielectric = vec3( 0.0 );
	vec3 multiScatteringDielectric = vec3( 0.0 );
	vec3 singleScatteringMetallic = vec3( 0.0 );
	vec3 multiScatteringMetallic = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnelDielectric, material.roughness, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.diffuseColor, material.specularF90, material.iridescence, material.iridescenceFresnelMetallic, material.roughness, singleScatteringMetallic, multiScatteringMetallic );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscattering( geometryNormal, geometryViewDir, material.diffuseColor, material.specularF90, material.roughness, singleScatteringMetallic, multiScatteringMetallic );
	#endif
	vec3 singleScattering = mix( singleScatteringDielectric, singleScatteringMetallic, material.metalness );
	vec3 multiScattering = mix( multiScatteringDielectric, multiScatteringMetallic, material.metalness );
	vec3 totalScatteringDielectric = singleScatteringDielectric + multiScatteringDielectric;
	vec3 diffuse = material.diffuseContribution * ( 1.0 - totalScatteringDielectric );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	vec3 indirectSpecular = radiance * singleScattering;
	indirectSpecular += multiScattering * cosineWeightedIrradiance;
	vec3 indirectDiffuse = diffuse * cosineWeightedIrradiance;
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		indirectSpecular *= sheenEnergyComp;
		indirectDiffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectSpecular += indirectSpecular;
	reflectedLight.indirectDiffuse += indirectDiffuse;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,Yp=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnelDielectric = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceFresnelMetallic = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.diffuseColor );
		material.iridescenceFresnel = mix( material.iridescenceFresnelDielectric, material.iridescenceFresnelMetallic, material.metalness );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS ) && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,qp=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,Zp=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,$p=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Kp=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Jp=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,jp=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,Qp=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,tm=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,em=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,nm=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,im=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,sm=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,rm=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,am=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,om=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,lm=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,cm=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,hm=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,um=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,dm=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,fm=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,pm=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,mm=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,gm=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,xm=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,_m=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,vm=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Mm=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,ym=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,Sm=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,wm=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,bm=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Em=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Tm=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Cm=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Am=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#else
			uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#endif
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#else
			uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#endif
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform samplerCubeShadow pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#elif defined( SHADOWMAP_TYPE_BASIC )
			uniform samplerCube pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#endif
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float interleavedGradientNoise( vec2 position ) {
			return fract( 52.9829189 * fract( dot( position, vec2( 0.06711056, 0.00583715 ) ) ) );
		}
		vec2 vogelDiskSample( int sampleIndex, int samplesCount, float phi ) {
			const float goldenAngle = 2.399963229728653;
			float r = sqrt( ( float( sampleIndex ) + 0.5 ) / float( samplesCount ) );
			float theta = float( sampleIndex ) * goldenAngle + phi;
			return vec2( cos( theta ), sin( theta ) ) * r;
		}
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float getShadow( sampler2DShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			shadowCoord.z += shadowBias;
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
				float radius = shadowRadius * texelSize.x;
				float phi = interleavedGradientNoise( gl_FragCoord.xy ) * 6.28318530718;
				shadow = (
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 0, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 1, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 2, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 3, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 4, 5, phi ) * radius, shadowCoord.z ) )
				) * 0.2;
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#elif defined( SHADOWMAP_TYPE_VSM )
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			shadowCoord.z += shadowBias;
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 distribution = texture2D( shadowMap, shadowCoord.xy ).rg;
				float mean = distribution.x;
				float variance = distribution.y * distribution.y;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					float hard_shadow = step( mean, shadowCoord.z );
				#else
					float hard_shadow = step( shadowCoord.z, mean );
				#endif
				if ( hard_shadow == 1.0 ) {
					shadow = 1.0;
				} else {
					variance = max( variance, 0.0000001 );
					float d = shadowCoord.z - mean;
					float p_max = variance / ( variance + d * d );
					p_max = clamp( ( p_max - 0.3 ) / 0.65, 0.0, 1.0 );
					shadow = max( hard_shadow, p_max );
				}
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#else
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			shadowCoord.z += shadowBias;
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				float depth = texture2D( shadowMap, shadowCoord.xy ).r;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					shadow = step( depth, shadowCoord.z );
				#else
					shadow = step( shadowCoord.z, depth );
				#endif
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	#if defined( SHADOWMAP_TYPE_PCF )
	float getPointShadow( samplerCubeShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 bd3D = normalize( lightToPosition );
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
			dp += shadowBias;
			float texelSize = shadowRadius / shadowMapSize.x;
			vec3 absDir = abs( bd3D );
			vec3 tangent = absDir.x > absDir.z ? vec3( 0.0, 1.0, 0.0 ) : vec3( 1.0, 0.0, 0.0 );
			tangent = normalize( cross( bd3D, tangent ) );
			vec3 bitangent = cross( bd3D, tangent );
			float phi = interleavedGradientNoise( gl_FragCoord.xy ) * 6.28318530718;
			shadow = (
				texture( shadowMap, vec4( bd3D + ( tangent * vogelDiskSample( 0, 5, phi ).x + bitangent * vogelDiskSample( 0, 5, phi ).y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * vogelDiskSample( 1, 5, phi ).x + bitangent * vogelDiskSample( 1, 5, phi ).y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * vogelDiskSample( 2, 5, phi ).x + bitangent * vogelDiskSample( 2, 5, phi ).y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * vogelDiskSample( 3, 5, phi ).x + bitangent * vogelDiskSample( 3, 5, phi ).y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * vogelDiskSample( 4, 5, phi ).x + bitangent * vogelDiskSample( 4, 5, phi ).y ) * texelSize, dp ) )
			) * 0.2;
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#elif defined( SHADOWMAP_TYPE_BASIC )
	float getPointShadow( samplerCube shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 bd3D = normalize( lightToPosition );
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
			dp += shadowBias;
			float depth = textureCube( shadowMap, bd3D ).r;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadow = step( depth, dp );
			#else
				shadow = step( dp, depth );
			#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#endif
	#endif
#endif`,Rm=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,Pm=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,Im=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0 && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,Lm=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Dm=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,Fm=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Nm=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,Um=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Om=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Bm=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,km=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,zm=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseContribution, material.specularColorBlended, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,Hm=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		#else
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,Gm=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,Vm=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,Wm=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,Xm=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const Ym=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,qm=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Zm=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,$m=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Km=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Jm=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,jm=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,Qm=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	#ifdef USE_REVERSED_DEPTH_BUFFER
		float fragCoordZ = vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ];
	#else
		float fragCoordZ = 0.5 * vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ] + 0.5;
	#endif
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,t0=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,e0=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = vec4( dist, 0.0, 0.0, 1.0 );
}`,n0=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,i0=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,s0=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,r0=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,a0=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,o0=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,l0=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,c0=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,h0=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,u0=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,d0=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,f0=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( normalize( normal ) * 0.5 + 0.5, diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,p0=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,m0=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,g0=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,x0=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
 
		outgoingLight = outgoingLight + sheenSpecularDirect + sheenSpecularIndirect;
 
 	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,_0=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,v0=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,M0=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,y0=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,S0=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,w0=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,b0=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,E0=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,qt={alphahash_fragment:qf,alphahash_pars_fragment:Zf,alphamap_fragment:$f,alphamap_pars_fragment:Kf,alphatest_fragment:Jf,alphatest_pars_fragment:jf,aomap_fragment:Qf,aomap_pars_fragment:tp,batching_pars_vertex:ep,batching_vertex:np,begin_vertex:ip,beginnormal_vertex:sp,bsdfs:rp,iridescence_fragment:ap,bumpmap_pars_fragment:op,clipping_planes_fragment:lp,clipping_planes_pars_fragment:cp,clipping_planes_pars_vertex:hp,clipping_planes_vertex:up,color_fragment:dp,color_pars_fragment:fp,color_pars_vertex:pp,color_vertex:mp,common:gp,cube_uv_reflection_fragment:xp,defaultnormal_vertex:_p,displacementmap_pars_vertex:vp,displacementmap_vertex:Mp,emissivemap_fragment:yp,emissivemap_pars_fragment:Sp,colorspace_fragment:wp,colorspace_pars_fragment:bp,envmap_fragment:Ep,envmap_common_pars_fragment:Tp,envmap_pars_fragment:Cp,envmap_pars_vertex:Ap,envmap_physical_pars_fragment:kp,envmap_vertex:Rp,fog_vertex:Pp,fog_pars_vertex:Ip,fog_fragment:Lp,fog_pars_fragment:Dp,gradientmap_pars_fragment:Fp,lightmap_pars_fragment:Np,lights_lambert_fragment:Up,lights_lambert_pars_fragment:Op,lights_pars_begin:Bp,lights_toon_fragment:zp,lights_toon_pars_fragment:Hp,lights_phong_fragment:Gp,lights_phong_pars_fragment:Vp,lights_physical_fragment:Wp,lights_physical_pars_fragment:Xp,lights_fragment_begin:Yp,lights_fragment_maps:qp,lights_fragment_end:Zp,logdepthbuf_fragment:$p,logdepthbuf_pars_fragment:Kp,logdepthbuf_pars_vertex:Jp,logdepthbuf_vertex:jp,map_fragment:Qp,map_pars_fragment:tm,map_particle_fragment:em,map_particle_pars_fragment:nm,metalnessmap_fragment:im,metalnessmap_pars_fragment:sm,morphinstance_vertex:rm,morphcolor_vertex:am,morphnormal_vertex:om,morphtarget_pars_vertex:lm,morphtarget_vertex:cm,normal_fragment_begin:hm,normal_fragment_maps:um,normal_pars_fragment:dm,normal_pars_vertex:fm,normal_vertex:pm,normalmap_pars_fragment:mm,clearcoat_normal_fragment_begin:gm,clearcoat_normal_fragment_maps:xm,clearcoat_pars_fragment:_m,iridescence_pars_fragment:vm,opaque_fragment:Mm,packing:ym,premultiplied_alpha_fragment:Sm,project_vertex:wm,dithering_fragment:bm,dithering_pars_fragment:Em,roughnessmap_fragment:Tm,roughnessmap_pars_fragment:Cm,shadowmap_pars_fragment:Am,shadowmap_pars_vertex:Rm,shadowmap_vertex:Pm,shadowmask_pars_fragment:Im,skinbase_vertex:Lm,skinning_pars_vertex:Dm,skinning_vertex:Fm,skinnormal_vertex:Nm,specularmap_fragment:Um,specularmap_pars_fragment:Om,tonemapping_fragment:Bm,tonemapping_pars_fragment:km,transmission_fragment:zm,transmission_pars_fragment:Hm,uv_pars_fragment:Gm,uv_pars_vertex:Vm,uv_vertex:Wm,worldpos_vertex:Xm,background_vert:Ym,background_frag:qm,backgroundCube_vert:Zm,backgroundCube_frag:$m,cube_vert:Km,cube_frag:Jm,depth_vert:jm,depth_frag:Qm,distance_vert:t0,distance_frag:e0,equirect_vert:n0,equirect_frag:i0,linedashed_vert:s0,linedashed_frag:r0,meshbasic_vert:a0,meshbasic_frag:o0,meshlambert_vert:l0,meshlambert_frag:c0,meshmatcap_vert:h0,meshmatcap_frag:u0,meshnormal_vert:d0,meshnormal_frag:f0,meshphong_vert:p0,meshphong_frag:m0,meshphysical_vert:g0,meshphysical_frag:x0,meshtoon_vert:_0,meshtoon_frag:v0,points_vert:M0,points_frag:y0,shadow_vert:S0,shadow_frag:w0,sprite_vert:b0,sprite_frag:E0},vt={common:{diffuse:{value:new Bt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Yt},alphaMap:{value:null},alphaMapTransform:{value:new Yt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Yt}},envmap:{envMap:{value:null},envMapRotation:{value:new Yt},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Yt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Yt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Yt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Yt},normalScale:{value:new ut(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Yt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Yt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Yt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Yt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Bt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Bt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Yt},alphaTest:{value:0},uvTransform:{value:new Yt}},sprite:{diffuse:{value:new Bt(16777215)},opacity:{value:1},center:{value:new ut(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Yt},alphaMap:{value:null},alphaMapTransform:{value:new Yt},alphaTest:{value:0}}},kn={basic:{uniforms:je([vt.common,vt.specularmap,vt.envmap,vt.aomap,vt.lightmap,vt.fog]),vertexShader:qt.meshbasic_vert,fragmentShader:qt.meshbasic_frag},lambert:{uniforms:je([vt.common,vt.specularmap,vt.envmap,vt.aomap,vt.lightmap,vt.emissivemap,vt.bumpmap,vt.normalmap,vt.displacementmap,vt.fog,vt.lights,{emissive:{value:new Bt(0)}}]),vertexShader:qt.meshlambert_vert,fragmentShader:qt.meshlambert_frag},phong:{uniforms:je([vt.common,vt.specularmap,vt.envmap,vt.aomap,vt.lightmap,vt.emissivemap,vt.bumpmap,vt.normalmap,vt.displacementmap,vt.fog,vt.lights,{emissive:{value:new Bt(0)},specular:{value:new Bt(1118481)},shininess:{value:30}}]),vertexShader:qt.meshphong_vert,fragmentShader:qt.meshphong_frag},standard:{uniforms:je([vt.common,vt.envmap,vt.aomap,vt.lightmap,vt.emissivemap,vt.bumpmap,vt.normalmap,vt.displacementmap,vt.roughnessmap,vt.metalnessmap,vt.fog,vt.lights,{emissive:{value:new Bt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:qt.meshphysical_vert,fragmentShader:qt.meshphysical_frag},toon:{uniforms:je([vt.common,vt.aomap,vt.lightmap,vt.emissivemap,vt.bumpmap,vt.normalmap,vt.displacementmap,vt.gradientmap,vt.fog,vt.lights,{emissive:{value:new Bt(0)}}]),vertexShader:qt.meshtoon_vert,fragmentShader:qt.meshtoon_frag},matcap:{uniforms:je([vt.common,vt.bumpmap,vt.normalmap,vt.displacementmap,vt.fog,{matcap:{value:null}}]),vertexShader:qt.meshmatcap_vert,fragmentShader:qt.meshmatcap_frag},points:{uniforms:je([vt.points,vt.fog]),vertexShader:qt.points_vert,fragmentShader:qt.points_frag},dashed:{uniforms:je([vt.common,vt.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:qt.linedashed_vert,fragmentShader:qt.linedashed_frag},depth:{uniforms:je([vt.common,vt.displacementmap]),vertexShader:qt.depth_vert,fragmentShader:qt.depth_frag},normal:{uniforms:je([vt.common,vt.bumpmap,vt.normalmap,vt.displacementmap,{opacity:{value:1}}]),vertexShader:qt.meshnormal_vert,fragmentShader:qt.meshnormal_frag},sprite:{uniforms:je([vt.sprite,vt.fog]),vertexShader:qt.sprite_vert,fragmentShader:qt.sprite_frag},background:{uniforms:{uvTransform:{value:new Yt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:qt.background_vert,fragmentShader:qt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Yt}},vertexShader:qt.backgroundCube_vert,fragmentShader:qt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:qt.cube_vert,fragmentShader:qt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:qt.equirect_vert,fragmentShader:qt.equirect_frag},distance:{uniforms:je([vt.common,vt.displacementmap,{referencePosition:{value:new D},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:qt.distance_vert,fragmentShader:qt.distance_frag},shadow:{uniforms:je([vt.lights,vt.fog,{color:{value:new Bt(0)},opacity:{value:1}}]),vertexShader:qt.shadow_vert,fragmentShader:qt.shadow_frag}};kn.physical={uniforms:je([kn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Yt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Yt},clearcoatNormalScale:{value:new ut(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Yt},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Yt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Yt},sheen:{value:0},sheenColor:{value:new Bt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Yt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Yt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Yt},transmissionSamplerSize:{value:new ut},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Yt},attenuationDistance:{value:0},attenuationColor:{value:new Bt(0)},specularColor:{value:new Bt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Yt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Yt},anisotropyVector:{value:new ut},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Yt}}]),vertexShader:qt.meshphysical_vert,fragmentShader:qt.meshphysical_frag};const Ur={r:0,b:0,g:0},Fi=new Ne,T0=new Qt;function C0(i,t,e,n,s,r,a){const o=new Bt(0);let l=r===!0?0:1,c,h,u=null,d=0,f=null;function g(b){let M=b.isScene===!0?b.background:null;return M&&M.isTexture&&(M=(b.backgroundBlurriness>0?e:t).get(M)),M}function x(b){let M=!1;const y=g(b);y===null?p(o,l):y&&y.isColor&&(p(y,1),M=!0);const T=i.xr.getEnvironmentBlendMode();T==="additive"?n.buffers.color.setClear(0,0,0,1,a):T==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,a),(i.autoClear||M)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))}function m(b,M){const y=g(M);y&&(y.isCubeTexture||y.mapping===ha)?(h===void 0&&(h=new it(new me(1,1,1),new En({name:"BackgroundCubeMaterial",uniforms:Ss(kn.backgroundCube.uniforms),vertexShader:kn.backgroundCube.vertexShader,fragmentShader:kn.backgroundCube.fragmentShader,side:rn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(T,C,L){this.matrixWorld.copyPosition(L.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),s.update(h)),Fi.copy(M.backgroundRotation),Fi.x*=-1,Fi.y*=-1,Fi.z*=-1,y.isCubeTexture&&y.isRenderTargetTexture===!1&&(Fi.y*=-1,Fi.z*=-1),h.material.uniforms.envMap.value=y,h.material.uniforms.flipEnvMap.value=y.isCubeTexture&&y.isRenderTargetTexture===!1?-1:1,h.material.uniforms.backgroundBlurriness.value=M.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=M.backgroundIntensity,h.material.uniforms.backgroundRotation.value.setFromMatrix4(T0.makeRotationFromEuler(Fi)),h.material.toneMapped=ie.getTransfer(y.colorSpace)!==ue,(u!==y||d!==y.version||f!==i.toneMapping)&&(h.material.needsUpdate=!0,u=y,d=y.version,f=i.toneMapping),h.layers.enableAll(),b.unshift(h,h.geometry,h.material,0,0,null)):y&&y.isTexture&&(c===void 0&&(c=new it(new Ts(2,2),new En({name:"BackgroundMaterial",uniforms:Ss(kn.background.uniforms),vertexShader:kn.background.vertexShader,fragmentShader:kn.background.fragmentShader,side:wi,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),s.update(c)),c.material.uniforms.t2D.value=y,c.material.uniforms.backgroundIntensity.value=M.backgroundIntensity,c.material.toneMapped=ie.getTransfer(y.colorSpace)!==ue,y.matrixAutoUpdate===!0&&y.updateMatrix(),c.material.uniforms.uvTransform.value.copy(y.matrix),(u!==y||d!==y.version||f!==i.toneMapping)&&(c.material.needsUpdate=!0,u=y,d=y.version,f=i.toneMapping),c.layers.enableAll(),b.unshift(c,c.geometry,c.material,0,0,null))}function p(b,M){b.getRGB(Ur,Rh(i)),n.buffers.color.setClear(Ur.r,Ur.g,Ur.b,M,a)}function w(){h!==void 0&&(h.geometry.dispose(),h.material.dispose(),h=void 0),c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0)}return{getClearColor:function(){return o},setClearColor:function(b,M=1){o.set(b),l=M,p(o,l)},getClearAlpha:function(){return l},setClearAlpha:function(b){l=b,p(o,l)},render:x,addToRenderList:m,dispose:w}}function A0(i,t){const e=i.getParameter(i.MAX_VERTEX_ATTRIBS),n={},s=d(null);let r=s,a=!1;function o(S,P,I,F,B){let N=!1;const H=u(F,I,P);r!==H&&(r=H,c(r.object)),N=f(S,F,I,B),N&&g(S,F,I,B),B!==null&&t.update(B,i.ELEMENT_ARRAY_BUFFER),(N||a)&&(a=!1,M(S,P,I,F),B!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,t.get(B).buffer))}function l(){return i.createVertexArray()}function c(S){return i.bindVertexArray(S)}function h(S){return i.deleteVertexArray(S)}function u(S,P,I){const F=I.wireframe===!0;let B=n[S.id];B===void 0&&(B={},n[S.id]=B);let N=B[P.id];N===void 0&&(N={},B[P.id]=N);let H=N[F];return H===void 0&&(H=d(l()),N[F]=H),H}function d(S){const P=[],I=[],F=[];for(let B=0;B<e;B++)P[B]=0,I[B]=0,F[B]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:P,enabledAttributes:I,attributeDivisors:F,object:S,attributes:{},index:null}}function f(S,P,I,F){const B=r.attributes,N=P.attributes;let H=0;const z=I.getAttributes();for(const $ in z)if(z[$].location>=0){const Z=B[$];let j=N[$];if(j===void 0&&($==="instanceMatrix"&&S.instanceMatrix&&(j=S.instanceMatrix),$==="instanceColor"&&S.instanceColor&&(j=S.instanceColor)),Z===void 0||Z.attribute!==j||j&&Z.data!==j.data)return!0;H++}return r.attributesNum!==H||r.index!==F}function g(S,P,I,F){const B={},N=P.attributes;let H=0;const z=I.getAttributes();for(const $ in z)if(z[$].location>=0){let Z=N[$];Z===void 0&&($==="instanceMatrix"&&S.instanceMatrix&&(Z=S.instanceMatrix),$==="instanceColor"&&S.instanceColor&&(Z=S.instanceColor));const j={};j.attribute=Z,Z&&Z.data&&(j.data=Z.data),B[$]=j,H++}r.attributes=B,r.attributesNum=H,r.index=F}function x(){const S=r.newAttributes;for(let P=0,I=S.length;P<I;P++)S[P]=0}function m(S){p(S,0)}function p(S,P){const I=r.newAttributes,F=r.enabledAttributes,B=r.attributeDivisors;I[S]=1,F[S]===0&&(i.enableVertexAttribArray(S),F[S]=1),B[S]!==P&&(i.vertexAttribDivisor(S,P),B[S]=P)}function w(){const S=r.newAttributes,P=r.enabledAttributes;for(let I=0,F=P.length;I<F;I++)P[I]!==S[I]&&(i.disableVertexAttribArray(I),P[I]=0)}function b(S,P,I,F,B,N,H){H===!0?i.vertexAttribIPointer(S,P,I,B,N):i.vertexAttribPointer(S,P,I,F,B,N)}function M(S,P,I,F){x();const B=F.attributes,N=I.getAttributes(),H=P.defaultAttributeValues;for(const z in N){const $=N[z];if($.location>=0){let st=B[z];if(st===void 0&&(z==="instanceMatrix"&&S.instanceMatrix&&(st=S.instanceMatrix),z==="instanceColor"&&S.instanceColor&&(st=S.instanceColor)),st!==void 0){const Z=st.normalized,j=st.itemSize,Ct=t.get(st);if(Ct===void 0)continue;const It=Ct.buffer,$t=Ct.type,te=Ct.bytesPerElement,Y=$t===i.INT||$t===i.UNSIGNED_INT||st.gpuType===xl;if(st.isInterleavedBufferAttribute){const Q=st.data,xt=Q.stride,Ft=st.offset;if(Q.isInstancedInterleavedBuffer){for(let St=0;St<$.locationSize;St++)p($.location+St,Q.meshPerAttribute);S.isInstancedMesh!==!0&&F._maxInstanceCount===void 0&&(F._maxInstanceCount=Q.meshPerAttribute*Q.count)}else for(let St=0;St<$.locationSize;St++)m($.location+St);i.bindBuffer(i.ARRAY_BUFFER,It);for(let St=0;St<$.locationSize;St++)b($.location+St,j/$.locationSize,$t,Z,xt*te,(Ft+j/$.locationSize*St)*te,Y)}else{if(st.isInstancedBufferAttribute){for(let Q=0;Q<$.locationSize;Q++)p($.location+Q,st.meshPerAttribute);S.isInstancedMesh!==!0&&F._maxInstanceCount===void 0&&(F._maxInstanceCount=st.meshPerAttribute*st.count)}else for(let Q=0;Q<$.locationSize;Q++)m($.location+Q);i.bindBuffer(i.ARRAY_BUFFER,It);for(let Q=0;Q<$.locationSize;Q++)b($.location+Q,j/$.locationSize,$t,Z,j*te,j/$.locationSize*Q*te,Y)}}else if(H!==void 0){const Z=H[z];if(Z!==void 0)switch(Z.length){case 2:i.vertexAttrib2fv($.location,Z);break;case 3:i.vertexAttrib3fv($.location,Z);break;case 4:i.vertexAttrib4fv($.location,Z);break;default:i.vertexAttrib1fv($.location,Z)}}}}w()}function y(){L();for(const S in n){const P=n[S];for(const I in P){const F=P[I];for(const B in F)h(F[B].object),delete F[B];delete P[I]}delete n[S]}}function T(S){if(n[S.id]===void 0)return;const P=n[S.id];for(const I in P){const F=P[I];for(const B in F)h(F[B].object),delete F[B];delete P[I]}delete n[S.id]}function C(S){for(const P in n){const I=n[P];if(I[S.id]===void 0)continue;const F=I[S.id];for(const B in F)h(F[B].object),delete F[B];delete I[S.id]}}function L(){v(),a=!0,r!==s&&(r=s,c(r.object))}function v(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:o,reset:L,resetDefaultState:v,dispose:y,releaseStatesOfGeometry:T,releaseStatesOfProgram:C,initAttributes:x,enableAttribute:m,disableUnusedAttributes:w}}function R0(i,t,e){let n;function s(c){n=c}function r(c,h){i.drawArrays(n,c,h),e.update(h,n,1)}function a(c,h,u){u!==0&&(i.drawArraysInstanced(n,c,h,u),e.update(h,n,u))}function o(c,h,u){if(u===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,c,0,h,0,u);let f=0;for(let g=0;g<u;g++)f+=h[g];e.update(f,n,1)}function l(c,h,u,d){if(u===0)return;const f=t.get("WEBGL_multi_draw");if(f===null)for(let g=0;g<c.length;g++)a(c[g],h[g],d[g]);else{f.multiDrawArraysInstancedWEBGL(n,c,0,h,0,d,0,u);let g=0;for(let x=0;x<u;x++)g+=h[x]*d[x];e.update(g,n,1)}}this.setMode=s,this.render=r,this.renderInstances=a,this.renderMultiDraw=o,this.renderMultiDrawInstances=l}function P0(i,t,e,n){let s;function r(){if(s!==void 0)return s;if(t.has("EXT_texture_filter_anisotropic")===!0){const C=t.get("EXT_texture_filter_anisotropic");s=i.getParameter(C.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function a(C){return!(C!==Nn&&n.convert(C)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(C){const L=C===oi&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(C!==fn&&n.convert(C)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE)&&C!==Fn&&!L)}function l(C){if(C==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";C="mediump"}return C==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=e.precision!==void 0?e.precision:"highp";const h=l(c);h!==c&&(Ot("WebGLRenderer:",c,"not supported, using",h,"instead."),c=h);const u=e.logarithmicDepthBuffer===!0,d=e.reversedDepthBuffer===!0&&t.has("EXT_clip_control"),f=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),g=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),x=i.getParameter(i.MAX_TEXTURE_SIZE),m=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),p=i.getParameter(i.MAX_VERTEX_ATTRIBS),w=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),b=i.getParameter(i.MAX_VARYING_VECTORS),M=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),y=i.getParameter(i.MAX_SAMPLES),T=i.getParameter(i.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:l,textureFormatReadable:a,textureTypeReadable:o,precision:c,logarithmicDepthBuffer:u,reversedDepthBuffer:d,maxTextures:f,maxVertexTextures:g,maxTextureSize:x,maxCubemapSize:m,maxAttributes:p,maxVertexUniforms:w,maxVaryings:b,maxFragmentUniforms:M,maxSamples:y,samples:T}}function I0(i){const t=this;let e=null,n=0,s=!1,r=!1;const a=new Ui,o=new Yt,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(u,d){const f=u.length!==0||d||n!==0||s;return s=d,n=u.length,f},this.beginShadows=function(){r=!0,h(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(u,d){e=h(u,d,0)},this.setState=function(u,d,f){const g=u.clippingPlanes,x=u.clipIntersection,m=u.clipShadows,p=i.get(u);if(!s||g===null||g.length===0||r&&!m)r?h(null):c();else{const w=r?0:n,b=w*4;let M=p.clippingState||null;l.value=M,M=h(g,d,b,f);for(let y=0;y!==b;++y)M[y]=e[y];p.clippingState=M,this.numIntersection=x?this.numPlanes:0,this.numPlanes+=w}};function c(){l.value!==e&&(l.value=e,l.needsUpdate=n>0),t.numPlanes=n,t.numIntersection=0}function h(u,d,f,g){const x=u!==null?u.length:0;let m=null;if(x!==0){if(m=l.value,g!==!0||m===null){const p=f+x*4,w=d.matrixWorldInverse;o.getNormalMatrix(w),(m===null||m.length<p)&&(m=new Float32Array(p));for(let b=0,M=f;b!==x;++b,M+=4)a.copy(u[b]).applyMatrix4(w,o),a.normal.toArray(m,M),m[M+3]=a.constant}l.value=m,l.needsUpdate=!0}return t.numPlanes=x,t.numIntersection=0,m}}function L0(i){let t=new WeakMap;function e(a,o){return o===xo?a.mapping=Hi:o===_o&&(a.mapping=vs),a}function n(a){if(a&&a.isTexture){const o=a.mapping;if(o===xo||o===_o)if(t.has(a)){const l=t.get(a).texture;return e(l,a.mapping)}else{const l=a.image;if(l&&l.height>0){const c=new Lh(l.height);return c.fromEquirectangularTexture(i,a),t.set(a,c),a.addEventListener("dispose",s),e(c.texture,a.mapping)}else return null}}return a}function s(a){const o=a.target;o.removeEventListener("dispose",s);const l=t.get(o);l!==void 0&&(t.delete(o),l.dispose())}function r(){t=new WeakMap}return{get:n,dispose:r}}const Mi=4,Ic=[.125,.215,.35,.446,.526,.582],Bi=20,D0=256,Bs=new Dl,Lc=new Bt;let $a=null,Ka=0,Ja=0,ja=!1;const F0=new D;class Dc{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._sigmas=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(t,e=0,n=.1,s=100,r={}){const{size:a=256,position:o=F0}=r;$a=this._renderer.getRenderTarget(),Ka=this._renderer.getActiveCubeFace(),Ja=this._renderer.getActiveMipmapLevel(),ja=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(a);const l=this._allocateTargets();return l.depthBuffer=!0,this._sceneToCubeUV(t,n,s,l,o),e>0&&this._blur(l,0,0,e),this._applyPMREM(l),this._cleanup(l),l}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Uc(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Nc(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodMeshes.length;t++)this._lodMeshes[t].geometry.dispose()}_cleanup(t){this._renderer.setRenderTarget($a,Ka,Ja),this._renderer.xr.enabled=ja,t.scissorTest=!1,hs(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===Hi||t.mapping===vs?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),$a=this._renderer.getRenderTarget(),Ka=this._renderer.getActiveCubeFace(),Ja=this._renderer.getActiveMipmapLevel(),ja=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const n=e||this._allocateTargets();return this._textureToCubeUV(t,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,n={magFilter:He,minFilter:He,generateMipmaps:!1,type:oi,format:Nn,colorSpace:ys,depthBuffer:!1},s=Fc(t,e,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Fc(t,e,n);const{_lodMax:r}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods,sigmas:this._sigmas}=N0(r)),this._blurMaterial=O0(r,t,e),this._ggxMaterial=U0(r,t,e)}return s}_compileMaterial(t){const e=new it(new an,t);this._renderer.compile(e,Bs)}_sceneToCubeUV(t,e,n,s,r){const l=new Mn(90,1,e,n),c=[1,-1,1,1,1,1],h=[1,1,1,-1,-1,-1],u=this._renderer,d=u.autoClear,f=u.toneMapping;u.getClearColor(Lc),u.toneMapping=Vn,u.autoClear=!1,u.state.buffers.depth.getReversed()&&(u.setRenderTarget(s),u.clearDepth(),u.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new it(new me,new ze({name:"PMREM.Background",side:rn,depthWrite:!1,depthTest:!1})));const x=this._backgroundBox,m=x.material;let p=!1;const w=t.background;w?w.isColor&&(m.color.copy(w),t.background=null,p=!0):(m.color.copy(Lc),p=!0);for(let b=0;b<6;b++){const M=b%3;M===0?(l.up.set(0,c[b],0),l.position.set(r.x,r.y,r.z),l.lookAt(r.x+h[b],r.y,r.z)):M===1?(l.up.set(0,0,c[b]),l.position.set(r.x,r.y,r.z),l.lookAt(r.x,r.y+h[b],r.z)):(l.up.set(0,c[b],0),l.position.set(r.x,r.y,r.z),l.lookAt(r.x,r.y,r.z+h[b]));const y=this._cubeSize;hs(s,M*y,b>2?y:0,y,y),u.setRenderTarget(s),p&&u.render(x,l),u.render(t,l)}u.toneMapping=f,u.autoClear=d,t.background=w}_textureToCubeUV(t,e){const n=this._renderer,s=t.mapping===Hi||t.mapping===vs;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=Uc()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Nc());const r=s?this._cubemapMaterial:this._equirectMaterial,a=this._lodMeshes[0];a.material=r;const o=r.uniforms;o.envMap.value=t;const l=this._cubeSize;hs(e,0,0,3*l,2*l),n.setRenderTarget(e),n.render(a,Bs)}_applyPMREM(t){const e=this._renderer,n=e.autoClear;e.autoClear=!1;const s=this._lodMeshes.length;for(let r=1;r<s;r++)this._applyGGXFilter(t,r-1,r);e.autoClear=n}_applyGGXFilter(t,e,n){const s=this._renderer,r=this._pingPongRenderTarget,a=this._ggxMaterial,o=this._lodMeshes[n];o.material=a;const l=a.uniforms,c=n/(this._lodMeshes.length-1),h=e/(this._lodMeshes.length-1),u=Math.sqrt(c*c-h*h),d=0+c*1.25,f=u*d,{_lodMax:g}=this,x=this._sizeLods[n],m=3*x*(n>g-Mi?n-g+Mi:0),p=4*(this._cubeSize-x);l.envMap.value=t.texture,l.roughness.value=f,l.mipInt.value=g-e,hs(r,m,p,3*x,2*x),s.setRenderTarget(r),s.render(o,Bs),l.envMap.value=r.texture,l.roughness.value=0,l.mipInt.value=g-n,hs(t,m,p,3*x,2*x),s.setRenderTarget(t),s.render(o,Bs)}_blur(t,e,n,s,r){const a=this._pingPongRenderTarget;this._halfBlur(t,a,e,n,s,"latitudinal",r),this._halfBlur(a,t,n,n,s,"longitudinal",r)}_halfBlur(t,e,n,s,r,a,o){const l=this._renderer,c=this._blurMaterial;a!=="latitudinal"&&a!=="longitudinal"&&ee("blur direction must be either latitudinal or longitudinal!");const h=3,u=this._lodMeshes[s];u.material=c;const d=c.uniforms,f=this._sizeLods[n]-1,g=isFinite(r)?Math.PI/(2*f):2*Math.PI/(2*Bi-1),x=r/g,m=isFinite(r)?1+Math.floor(h*x):Bi;m>Bi&&Ot(`sigmaRadians, ${r}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${Bi}`);const p=[];let w=0;for(let C=0;C<Bi;++C){const L=C/x,v=Math.exp(-L*L/2);p.push(v),C===0?w+=v:C<m&&(w+=2*v)}for(let C=0;C<p.length;C++)p[C]=p[C]/w;d.envMap.value=t.texture,d.samples.value=m,d.weights.value=p,d.latitudinal.value=a==="latitudinal",o&&(d.poleAxis.value=o);const{_lodMax:b}=this;d.dTheta.value=g,d.mipInt.value=b-n;const M=this._sizeLods[s],y=3*M*(s>b-Mi?s-b+Mi:0),T=4*(this._cubeSize-M);hs(e,y,T,3*M,2*M),l.setRenderTarget(e),l.render(u,Bs)}}function N0(i){const t=[],e=[],n=[];let s=i;const r=i-Mi+1+Ic.length;for(let a=0;a<r;a++){const o=Math.pow(2,s);t.push(o);let l=1/o;a>i-Mi?l=Ic[a-i+Mi-1]:a===0&&(l=0),e.push(l);const c=1/(o-2),h=-c,u=1+c,d=[h,h,u,h,u,u,h,h,u,u,h,u],f=6,g=6,x=3,m=2,p=1,w=new Float32Array(x*g*f),b=new Float32Array(m*g*f),M=new Float32Array(p*g*f);for(let T=0;T<f;T++){const C=T%3*2/3-1,L=T>2?0:-1,v=[C,L,0,C+2/3,L,0,C+2/3,L+1,0,C,L,0,C+2/3,L+1,0,C,L+1,0];w.set(v,x*g*T),b.set(d,m*g*T);const S=[T,T,T,T,T,T];M.set(S,p*g*T)}const y=new an;y.setAttribute("position",new wn(w,x)),y.setAttribute("uv",new wn(b,m)),y.setAttribute("faceIndex",new wn(M,p)),n.push(new it(y,null)),s>Mi&&s--}return{lodMeshes:n,sizeLods:t,sigmas:e}}function Fc(i,t,e){const n=new Xn(i,t,e);return n.texture.mapping=ha,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function hs(i,t,e,n,s){i.viewport.set(t,e,n,s),i.scissor.set(t,e,n,s)}function U0(i,t,e){return new En({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:D0,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:fa(),fragmentShader:`

			precision highp float;
			precision highp int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform float roughness;
			uniform float mipInt;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			#define PI 3.14159265359

			// Van der Corput radical inverse
			float radicalInverse_VdC(uint bits) {
				bits = (bits << 16u) | (bits >> 16u);
				bits = ((bits & 0x55555555u) << 1u) | ((bits & 0xAAAAAAAAu) >> 1u);
				bits = ((bits & 0x33333333u) << 2u) | ((bits & 0xCCCCCCCCu) >> 2u);
				bits = ((bits & 0x0F0F0F0Fu) << 4u) | ((bits & 0xF0F0F0F0u) >> 4u);
				bits = ((bits & 0x00FF00FFu) << 8u) | ((bits & 0xFF00FF00u) >> 8u);
				return float(bits) * 2.3283064365386963e-10; // / 0x100000000
			}

			// Hammersley sequence
			vec2 hammersley(uint i, uint N) {
				return vec2(float(i) / float(N), radicalInverse_VdC(i));
			}

			// GGX VNDF importance sampling (Eric Heitz 2018)
			// "Sampling the GGX Distribution of Visible Normals"
			// https://jcgt.org/published/0007/04/01/
			vec3 importanceSampleGGX_VNDF(vec2 Xi, vec3 V, float roughness) {
				float alpha = roughness * roughness;

				// Section 3.2: Transform view direction to hemisphere configuration
				vec3 Vh = normalize(vec3(alpha * V.x, alpha * V.y, V.z));

				// Section 4.1: Orthonormal basis
				float lensq = Vh.x * Vh.x + Vh.y * Vh.y;
				vec3 T1 = lensq > 0.0 ? vec3(-Vh.y, Vh.x, 0.0) / sqrt(lensq) : vec3(1.0, 0.0, 0.0);
				vec3 T2 = cross(Vh, T1);

				// Section 4.2: Parameterization of projected area
				float r = sqrt(Xi.x);
				float phi = 2.0 * PI * Xi.y;
				float t1 = r * cos(phi);
				float t2 = r * sin(phi);
				float s = 0.5 * (1.0 + Vh.z);
				t2 = (1.0 - s) * sqrt(1.0 - t1 * t1) + s * t2;

				// Section 4.3: Reprojection onto hemisphere
				vec3 Nh = t1 * T1 + t2 * T2 + sqrt(max(0.0, 1.0 - t1 * t1 - t2 * t2)) * Vh;

				// Section 3.4: Transform back to ellipsoid configuration
				return normalize(vec3(alpha * Nh.x, alpha * Nh.y, max(0.0, Nh.z)));
			}

			void main() {
				vec3 N = normalize(vOutputDirection);
				vec3 V = N; // Assume view direction equals normal for pre-filtering

				vec3 prefilteredColor = vec3(0.0);
				float totalWeight = 0.0;

				// For very low roughness, just sample the environment directly
				if (roughness < 0.001) {
					gl_FragColor = vec4(bilinearCubeUV(envMap, N, mipInt), 1.0);
					return;
				}

				// Tangent space basis for VNDF sampling
				vec3 up = abs(N.z) < 0.999 ? vec3(0.0, 0.0, 1.0) : vec3(1.0, 0.0, 0.0);
				vec3 tangent = normalize(cross(up, N));
				vec3 bitangent = cross(N, tangent);

				for(uint i = 0u; i < uint(GGX_SAMPLES); i++) {
					vec2 Xi = hammersley(i, uint(GGX_SAMPLES));

					// For PMREM, V = N, so in tangent space V is always (0, 0, 1)
					vec3 H_tangent = importanceSampleGGX_VNDF(Xi, vec3(0.0, 0.0, 1.0), roughness);

					// Transform H back to world space
					vec3 H = normalize(tangent * H_tangent.x + bitangent * H_tangent.y + N * H_tangent.z);
					vec3 L = normalize(2.0 * dot(V, H) * H - V);

					float NdotL = max(dot(N, L), 0.0);

					if(NdotL > 0.0) {
						// Sample environment at fixed mip level
						// VNDF importance sampling handles the distribution filtering
						vec3 sampleColor = bilinearCubeUV(envMap, L, mipInt);

						// Weight by NdotL for the split-sum approximation
						// VNDF PDF naturally accounts for the visible microfacet distribution
						prefilteredColor += sampleColor * NdotL;
						totalWeight += NdotL;
					}
				}

				if (totalWeight > 0.0) {
					prefilteredColor = prefilteredColor / totalWeight;
				}

				gl_FragColor = vec4(prefilteredColor, 1.0);
			}
		`,blending:si,depthTest:!1,depthWrite:!1})}function O0(i,t,e){const n=new Float32Array(Bi),s=new D(0,1,0);return new En({name:"SphericalGaussianBlur",defines:{n:Bi,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:s}},vertexShader:fa(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:si,depthTest:!1,depthWrite:!1})}function Nc(){return new En({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:fa(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:si,depthTest:!1,depthWrite:!1})}function Uc(){return new En({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:fa(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:si,depthTest:!1,depthWrite:!1})}function fa(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function B0(i){let t=new WeakMap,e=null;function n(o){if(o&&o.isTexture){const l=o.mapping,c=l===xo||l===_o,h=l===Hi||l===vs;if(c||h){let u=t.get(o);const d=u!==void 0?u.texture.pmremVersion:0;if(o.isRenderTargetTexture&&o.pmremVersion!==d)return e===null&&(e=new Dc(i)),u=c?e.fromEquirectangular(o,u):e.fromCubemap(o,u),u.texture.pmremVersion=o.pmremVersion,t.set(o,u),u.texture;if(u!==void 0)return u.texture;{const f=o.image;return c&&f&&f.height>0||h&&f&&s(f)?(e===null&&(e=new Dc(i)),u=c?e.fromEquirectangular(o):e.fromCubemap(o),u.texture.pmremVersion=o.pmremVersion,t.set(o,u),o.addEventListener("dispose",r),u.texture):null}}}return o}function s(o){let l=0;const c=6;for(let h=0;h<c;h++)o[h]!==void 0&&l++;return l===c}function r(o){const l=o.target;l.removeEventListener("dispose",r);const c=t.get(l);c!==void 0&&(t.delete(l),c.dispose())}function a(){t=new WeakMap,e!==null&&(e.dispose(),e=null)}return{get:n,dispose:a}}function k0(i){const t={};function e(n){if(t[n]!==void 0)return t[n];const s=i.getExtension(n);return t[n]=s,s}return{has:function(n){return e(n)!==null},init:function(){e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance"),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture"),e("WEBGL_render_shared_exponent")},get:function(n){const s=e(n);return s===null&&Qs("WebGLRenderer: "+n+" extension not supported."),s}}}function z0(i,t,e,n){const s={},r=new WeakMap;function a(u){const d=u.target;d.index!==null&&t.remove(d.index);for(const g in d.attributes)t.remove(d.attributes[g]);d.removeEventListener("dispose",a),delete s[d.id];const f=r.get(d);f&&(t.remove(f),r.delete(d)),n.releaseStatesOfGeometry(d),d.isInstancedBufferGeometry===!0&&delete d._maxInstanceCount,e.memory.geometries--}function o(u,d){return s[d.id]===!0||(d.addEventListener("dispose",a),s[d.id]=!0,e.memory.geometries++),d}function l(u){const d=u.attributes;for(const f in d)t.update(d[f],i.ARRAY_BUFFER)}function c(u){const d=[],f=u.index,g=u.attributes.position;let x=0;if(f!==null){const w=f.array;x=f.version;for(let b=0,M=w.length;b<M;b+=3){const y=w[b+0],T=w[b+1],C=w[b+2];d.push(y,T,T,C,C,y)}}else if(g!==void 0){const w=g.array;x=g.version;for(let b=0,M=w.length/3-1;b<M;b+=3){const y=b+0,T=b+1,C=b+2;d.push(y,T,T,C,C,y)}}else return;const m=new(wh(d)?Ah:Ch)(d,1);m.version=x;const p=r.get(u);p&&t.remove(p),r.set(u,m)}function h(u){const d=r.get(u);if(d){const f=u.index;f!==null&&d.version<f.version&&c(u)}else c(u);return r.get(u)}return{get:o,update:l,getWireframeAttribute:h}}function H0(i,t,e){let n;function s(d){n=d}let r,a;function o(d){r=d.type,a=d.bytesPerElement}function l(d,f){i.drawElements(n,f,r,d*a),e.update(f,n,1)}function c(d,f,g){g!==0&&(i.drawElementsInstanced(n,f,r,d*a,g),e.update(f,n,g))}function h(d,f,g){if(g===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,f,0,r,d,0,g);let m=0;for(let p=0;p<g;p++)m+=f[p];e.update(m,n,1)}function u(d,f,g,x){if(g===0)return;const m=t.get("WEBGL_multi_draw");if(m===null)for(let p=0;p<d.length;p++)c(d[p]/a,f[p],x[p]);else{m.multiDrawElementsInstancedWEBGL(n,f,0,r,d,0,x,0,g);let p=0;for(let w=0;w<g;w++)p+=f[w]*x[w];e.update(p,n,1)}}this.setMode=s,this.setIndex=o,this.render=l,this.renderInstances=c,this.renderMultiDraw=h,this.renderMultiDrawInstances=u}function G0(i){const t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,a,o){switch(e.calls++,a){case i.TRIANGLES:e.triangles+=o*(r/3);break;case i.LINES:e.lines+=o*(r/2);break;case i.LINE_STRIP:e.lines+=o*(r-1);break;case i.LINE_LOOP:e.lines+=o*r;break;case i.POINTS:e.points+=o*r;break;default:ee("WebGLInfo: Unknown draw mode:",a);break}}function s(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:s,update:n}}function V0(i,t,e){const n=new WeakMap,s=new Ee;function r(a,o,l){const c=a.morphTargetInfluences,h=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,u=h!==void 0?h.length:0;let d=n.get(o);if(d===void 0||d.count!==u){let S=function(){L.dispose(),n.delete(o),o.removeEventListener("dispose",S)};var f=S;d!==void 0&&d.texture.dispose();const g=o.morphAttributes.position!==void 0,x=o.morphAttributes.normal!==void 0,m=o.morphAttributes.color!==void 0,p=o.morphAttributes.position||[],w=o.morphAttributes.normal||[],b=o.morphAttributes.color||[];let M=0;g===!0&&(M=1),x===!0&&(M=2),m===!0&&(M=3);let y=o.attributes.position.count*M,T=1;y>t.maxTextureSize&&(T=Math.ceil(y/t.maxTextureSize),y=t.maxTextureSize);const C=new Float32Array(y*T*4*u),L=new bh(C,y,T,u);L.type=Fn,L.needsUpdate=!0;const v=M*4;for(let P=0;P<u;P++){const I=p[P],F=w[P],B=b[P],N=y*T*4*P;for(let H=0;H<I.count;H++){const z=H*v;g===!0&&(s.fromBufferAttribute(I,H),C[N+z+0]=s.x,C[N+z+1]=s.y,C[N+z+2]=s.z,C[N+z+3]=0),x===!0&&(s.fromBufferAttribute(F,H),C[N+z+4]=s.x,C[N+z+5]=s.y,C[N+z+6]=s.z,C[N+z+7]=0),m===!0&&(s.fromBufferAttribute(B,H),C[N+z+8]=s.x,C[N+z+9]=s.y,C[N+z+10]=s.z,C[N+z+11]=B.itemSize===4?s.w:1)}}d={count:u,texture:L,size:new ut(y,T)},n.set(o,d),o.addEventListener("dispose",S)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)l.getUniforms().setValue(i,"morphTexture",a.morphTexture,e);else{let g=0;for(let m=0;m<c.length;m++)g+=c[m];const x=o.morphTargetsRelative?1:1-g;l.getUniforms().setValue(i,"morphTargetBaseInfluence",x),l.getUniforms().setValue(i,"morphTargetInfluences",c)}l.getUniforms().setValue(i,"morphTargetsTexture",d.texture,e),l.getUniforms().setValue(i,"morphTargetsTextureSize",d.size)}return{update:r}}function W0(i,t,e,n){let s=new WeakMap;function r(l){const c=n.render.frame,h=l.geometry,u=t.get(l,h);if(s.get(u)!==c&&(t.update(u),s.set(u,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",o)===!1&&l.addEventListener("dispose",o),s.get(l)!==c&&(e.update(l.instanceMatrix,i.ARRAY_BUFFER),l.instanceColor!==null&&e.update(l.instanceColor,i.ARRAY_BUFFER),s.set(l,c))),l.isSkinnedMesh){const d=l.skeleton;s.get(d)!==c&&(d.update(),s.set(d,c))}return u}function a(){s=new WeakMap}function o(l){const c=l.target;c.removeEventListener("dispose",o),e.remove(c.instanceMatrix),c.instanceColor!==null&&e.remove(c.instanceColor)}return{update:r,dispose:a}}const X0={[ch]:"LINEAR_TONE_MAPPING",[hh]:"REINHARD_TONE_MAPPING",[uh]:"CINEON_TONE_MAPPING",[dh]:"ACES_FILMIC_TONE_MAPPING",[ph]:"AGX_TONE_MAPPING",[mh]:"NEUTRAL_TONE_MAPPING",[fh]:"CUSTOM_TONE_MAPPING"};function Y0(i,t,e,n,s){const r=new Xn(t,e,{type:i,depthBuffer:n,stencilBuffer:s}),a=new Xn(t,e,{type:oi,depthBuffer:!1,stencilBuffer:!1}),o=new an;o.setAttribute("position",new De([-1,3,0,-1,-1,0,3,-1,0],3)),o.setAttribute("uv",new De([0,2,0,0,2,0],2));const l=new Rf({uniforms:{tDiffuse:{value:null}},vertexShader:`
			precision highp float;

			uniform mat4 modelViewMatrix;
			uniform mat4 projectionMatrix;

			attribute vec3 position;
			attribute vec2 uv;

			varying vec2 vUv;

			void main() {
				vUv = uv;
				gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
			}`,fragmentShader:`
			precision highp float;

			uniform sampler2D tDiffuse;

			varying vec2 vUv;

			#include <tonemapping_pars_fragment>
			#include <colorspace_pars_fragment>

			void main() {
				gl_FragColor = texture2D( tDiffuse, vUv );

				#ifdef LINEAR_TONE_MAPPING
					gl_FragColor.rgb = LinearToneMapping( gl_FragColor.rgb );
				#elif defined( REINHARD_TONE_MAPPING )
					gl_FragColor.rgb = ReinhardToneMapping( gl_FragColor.rgb );
				#elif defined( CINEON_TONE_MAPPING )
					gl_FragColor.rgb = CineonToneMapping( gl_FragColor.rgb );
				#elif defined( ACES_FILMIC_TONE_MAPPING )
					gl_FragColor.rgb = ACESFilmicToneMapping( gl_FragColor.rgb );
				#elif defined( AGX_TONE_MAPPING )
					gl_FragColor.rgb = AgXToneMapping( gl_FragColor.rgb );
				#elif defined( NEUTRAL_TONE_MAPPING )
					gl_FragColor.rgb = NeutralToneMapping( gl_FragColor.rgb );
				#elif defined( CUSTOM_TONE_MAPPING )
					gl_FragColor.rgb = CustomToneMapping( gl_FragColor.rgb );
				#endif

				#ifdef SRGB_TRANSFER
					gl_FragColor = sRGBTransferOETF( gl_FragColor );
				#endif
			}`,depthTest:!1,depthWrite:!1}),c=new it(o,l),h=new Dl(-1,1,1,-1,0,1);let u=null,d=null,f=!1,g,x=null,m=[],p=!1;this.setSize=function(w,b){r.setSize(w,b),a.setSize(w,b);for(let M=0;M<m.length;M++){const y=m[M];y.setSize&&y.setSize(w,b)}},this.setEffects=function(w){m=w,p=m.length>0&&m[0].isRenderPass===!0;const b=r.width,M=r.height;for(let y=0;y<m.length;y++){const T=m[y];T.setSize&&T.setSize(b,M)}},this.begin=function(w,b){if(f||w.toneMapping===Vn&&m.length===0)return!1;if(x=b,b!==null){const M=b.width,y=b.height;(r.width!==M||r.height!==y)&&this.setSize(M,y)}return p===!1&&w.setRenderTarget(r),g=w.toneMapping,w.toneMapping=Vn,!0},this.hasRenderPass=function(){return p},this.end=function(w,b){w.toneMapping=g,f=!0;let M=r,y=a;for(let T=0;T<m.length;T++){const C=m[T];if(C.enabled!==!1&&(C.render(w,y,M,b),C.needsSwap!==!1)){const L=M;M=y,y=L}}if(u!==w.outputColorSpace||d!==w.toneMapping){u=w.outputColorSpace,d=w.toneMapping,l.defines={},ie.getTransfer(u)===ue&&(l.defines.SRGB_TRANSFER="");const T=X0[d];T&&(l.defines[T]=""),l.needsUpdate=!0}l.uniforms.tDiffuse.value=M.texture,w.setRenderTarget(x),w.render(c,h),x=null,f=!1},this.isCompositing=function(){return f},this.dispose=function(){r.dispose(),a.dispose(),o.dispose(),l.dispose()}}const $h=new Ze,sl=new er(1,1),Kh=new bh,Jh=new wd,jh=new Ih,Oc=[],Bc=[],kc=new Float32Array(16),zc=new Float32Array(9),Hc=new Float32Array(4);function Cs(i,t,e){const n=i[0];if(n<=0||n>0)return i;const s=t*e;let r=Oc[s];if(r===void 0&&(r=new Float32Array(s),Oc[s]=r),t!==0){n.toArray(r,0);for(let a=1,o=0;a!==t;++a)o+=e,i[a].toArray(r,o)}return r}function Ue(i,t){if(i.length!==t.length)return!1;for(let e=0,n=i.length;e<n;e++)if(i[e]!==t[e])return!1;return!0}function Oe(i,t){for(let e=0,n=t.length;e<n;e++)i[e]=t[e]}function pa(i,t){let e=Bc[t];e===void 0&&(e=new Int32Array(t),Bc[t]=e);for(let n=0;n!==t;++n)e[n]=i.allocateTextureUnit();return e}function q0(i,t){const e=this.cache;e[0]!==t&&(i.uniform1f(this.addr,t),e[0]=t)}function Z0(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Ue(e,t))return;i.uniform2fv(this.addr,t),Oe(e,t)}}function $0(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(i.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(Ue(e,t))return;i.uniform3fv(this.addr,t),Oe(e,t)}}function K0(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Ue(e,t))return;i.uniform4fv(this.addr,t),Oe(e,t)}}function J0(i,t){const e=this.cache,n=t.elements;if(n===void 0){if(Ue(e,t))return;i.uniformMatrix2fv(this.addr,!1,t),Oe(e,t)}else{if(Ue(e,n))return;Hc.set(n),i.uniformMatrix2fv(this.addr,!1,Hc),Oe(e,n)}}function j0(i,t){const e=this.cache,n=t.elements;if(n===void 0){if(Ue(e,t))return;i.uniformMatrix3fv(this.addr,!1,t),Oe(e,t)}else{if(Ue(e,n))return;zc.set(n),i.uniformMatrix3fv(this.addr,!1,zc),Oe(e,n)}}function Q0(i,t){const e=this.cache,n=t.elements;if(n===void 0){if(Ue(e,t))return;i.uniformMatrix4fv(this.addr,!1,t),Oe(e,t)}else{if(Ue(e,n))return;kc.set(n),i.uniformMatrix4fv(this.addr,!1,kc),Oe(e,n)}}function tg(i,t){const e=this.cache;e[0]!==t&&(i.uniform1i(this.addr,t),e[0]=t)}function eg(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Ue(e,t))return;i.uniform2iv(this.addr,t),Oe(e,t)}}function ng(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Ue(e,t))return;i.uniform3iv(this.addr,t),Oe(e,t)}}function ig(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Ue(e,t))return;i.uniform4iv(this.addr,t),Oe(e,t)}}function sg(i,t){const e=this.cache;e[0]!==t&&(i.uniform1ui(this.addr,t),e[0]=t)}function rg(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Ue(e,t))return;i.uniform2uiv(this.addr,t),Oe(e,t)}}function ag(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Ue(e,t))return;i.uniform3uiv(this.addr,t),Oe(e,t)}}function og(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Ue(e,t))return;i.uniform4uiv(this.addr,t),Oe(e,t)}}function lg(i,t,e){const n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s);let r;this.type===i.SAMPLER_2D_SHADOW?(sl.compareFunction=e.isReversedDepthBuffer()?El:bl,r=sl):r=$h,e.setTexture2D(t||r,s)}function cg(i,t,e){const n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTexture3D(t||Jh,s)}function hg(i,t,e){const n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTextureCube(t||jh,s)}function ug(i,t,e){const n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTexture2DArray(t||Kh,s)}function dg(i){switch(i){case 5126:return q0;case 35664:return Z0;case 35665:return $0;case 35666:return K0;case 35674:return J0;case 35675:return j0;case 35676:return Q0;case 5124:case 35670:return tg;case 35667:case 35671:return eg;case 35668:case 35672:return ng;case 35669:case 35673:return ig;case 5125:return sg;case 36294:return rg;case 36295:return ag;case 36296:return og;case 35678:case 36198:case 36298:case 36306:case 35682:return lg;case 35679:case 36299:case 36307:return cg;case 35680:case 36300:case 36308:case 36293:return hg;case 36289:case 36303:case 36311:case 36292:return ug}}function fg(i,t){i.uniform1fv(this.addr,t)}function pg(i,t){const e=Cs(t,this.size,2);i.uniform2fv(this.addr,e)}function mg(i,t){const e=Cs(t,this.size,3);i.uniform3fv(this.addr,e)}function gg(i,t){const e=Cs(t,this.size,4);i.uniform4fv(this.addr,e)}function xg(i,t){const e=Cs(t,this.size,4);i.uniformMatrix2fv(this.addr,!1,e)}function _g(i,t){const e=Cs(t,this.size,9);i.uniformMatrix3fv(this.addr,!1,e)}function vg(i,t){const e=Cs(t,this.size,16);i.uniformMatrix4fv(this.addr,!1,e)}function Mg(i,t){i.uniform1iv(this.addr,t)}function yg(i,t){i.uniform2iv(this.addr,t)}function Sg(i,t){i.uniform3iv(this.addr,t)}function wg(i,t){i.uniform4iv(this.addr,t)}function bg(i,t){i.uniform1uiv(this.addr,t)}function Eg(i,t){i.uniform2uiv(this.addr,t)}function Tg(i,t){i.uniform3uiv(this.addr,t)}function Cg(i,t){i.uniform4uiv(this.addr,t)}function Ag(i,t,e){const n=this.cache,s=t.length,r=pa(e,s);Ue(n,r)||(i.uniform1iv(this.addr,r),Oe(n,r));let a;this.type===i.SAMPLER_2D_SHADOW?a=sl:a=$h;for(let o=0;o!==s;++o)e.setTexture2D(t[o]||a,r[o])}function Rg(i,t,e){const n=this.cache,s=t.length,r=pa(e,s);Ue(n,r)||(i.uniform1iv(this.addr,r),Oe(n,r));for(let a=0;a!==s;++a)e.setTexture3D(t[a]||Jh,r[a])}function Pg(i,t,e){const n=this.cache,s=t.length,r=pa(e,s);Ue(n,r)||(i.uniform1iv(this.addr,r),Oe(n,r));for(let a=0;a!==s;++a)e.setTextureCube(t[a]||jh,r[a])}function Ig(i,t,e){const n=this.cache,s=t.length,r=pa(e,s);Ue(n,r)||(i.uniform1iv(this.addr,r),Oe(n,r));for(let a=0;a!==s;++a)e.setTexture2DArray(t[a]||Kh,r[a])}function Lg(i){switch(i){case 5126:return fg;case 35664:return pg;case 35665:return mg;case 35666:return gg;case 35674:return xg;case 35675:return _g;case 35676:return vg;case 5124:case 35670:return Mg;case 35667:case 35671:return yg;case 35668:case 35672:return Sg;case 35669:case 35673:return wg;case 5125:return bg;case 36294:return Eg;case 36295:return Tg;case 36296:return Cg;case 35678:case 36198:case 36298:case 36306:case 35682:return Ag;case 35679:case 36299:case 36307:return Rg;case 35680:case 36300:case 36308:case 36293:return Pg;case 36289:case 36303:case 36311:case 36292:return Ig}}class Dg{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.setValue=dg(e.type)}}class Fg{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=Lg(e.type)}}class Ng{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,n){const s=this.seq;for(let r=0,a=s.length;r!==a;++r){const o=s[r];o.setValue(t,e[o.id],n)}}}const Qa=/(\w+)(\])?(\[|\.)?/g;function Gc(i,t){i.seq.push(t),i.map[t.id]=t}function Ug(i,t,e){const n=i.name,s=n.length;for(Qa.lastIndex=0;;){const r=Qa.exec(n),a=Qa.lastIndex;let o=r[1];const l=r[2]==="]",c=r[3];if(l&&(o=o|0),c===void 0||c==="["&&a+2===s){Gc(e,c===void 0?new Dg(o,i,t):new Fg(o,i,t));break}else{let u=e.map[o];u===void 0&&(u=new Ng(o),Gc(e,u)),e=u}}}class Yr{constructor(t,e){this.seq=[],this.map={};const n=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let a=0;a<n;++a){const o=t.getActiveUniform(e,a),l=t.getUniformLocation(e,o.name);Ug(o,l,this)}const s=[],r=[];for(const a of this.seq)a.type===t.SAMPLER_2D_SHADOW||a.type===t.SAMPLER_CUBE_SHADOW||a.type===t.SAMPLER_2D_ARRAY_SHADOW?s.push(a):r.push(a);s.length>0&&(this.seq=s.concat(r))}setValue(t,e,n,s){const r=this.map[e];r!==void 0&&r.setValue(t,n,s)}setOptional(t,e,n){const s=e[n];s!==void 0&&this.setValue(t,n,s)}static upload(t,e,n,s){for(let r=0,a=e.length;r!==a;++r){const o=e[r],l=n[o.id];l.needsUpdate!==!1&&o.setValue(t,l.value,s)}}static seqWithValue(t,e){const n=[];for(let s=0,r=t.length;s!==r;++s){const a=t[s];a.id in e&&n.push(a)}return n}}function Vc(i,t,e){const n=i.createShader(t);return i.shaderSource(n,e),i.compileShader(n),n}const Og=37297;let Bg=0;function kg(i,t){const e=i.split(`
`),n=[],s=Math.max(t-6,0),r=Math.min(t+6,e.length);for(let a=s;a<r;a++){const o=a+1;n.push(`${o===t?">":" "} ${o}: ${e[a]}`)}return n.join(`
`)}const Wc=new Yt;function zg(i){ie._getMatrix(Wc,ie.workingColorSpace,i);const t=`mat3( ${Wc.elements.map(e=>e.toFixed(4))} )`;switch(ie.getTransfer(i)){case $r:return[t,"LinearTransferOETF"];case ue:return[t,"sRGBTransferOETF"];default:return Ot("WebGLProgram: Unsupported color space: ",i),[t,"LinearTransferOETF"]}}function Xc(i,t,e){const n=i.getShaderParameter(t,i.COMPILE_STATUS),r=(i.getShaderInfoLog(t)||"").trim();if(n&&r==="")return"";const a=/ERROR: 0:(\d+)/.exec(r);if(a){const o=parseInt(a[1]);return e.toUpperCase()+`

`+r+`

`+kg(i.getShaderSource(t),o)}else return r}function Hg(i,t){const e=zg(t);return[`vec4 ${i}( vec4 value ) {`,`	return ${e[1]}( vec4( value.rgb * ${e[0]}, value.a ) );`,"}"].join(`
`)}const Gg={[ch]:"Linear",[hh]:"Reinhard",[uh]:"Cineon",[dh]:"ACESFilmic",[ph]:"AgX",[mh]:"Neutral",[fh]:"Custom"};function Vg(i,t){const e=Gg[t];return e===void 0?(Ot("WebGLProgram: Unsupported toneMapping:",t),"vec3 "+i+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+i+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}const Or=new D;function Wg(){ie.getLuminanceCoefficients(Or);const i=Or.x.toFixed(4),t=Or.y.toFixed(4),e=Or.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${i}, ${t}, ${e} );`,"	return dot( weights, rgb );","}"].join(`
`)}function Xg(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Xs).join(`
`)}function Yg(i){const t=[];for(const e in i){const n=i[e];n!==!1&&t.push("#define "+e+" "+n)}return t.join(`
`)}function qg(i,t){const e={},n=i.getProgramParameter(t,i.ACTIVE_ATTRIBUTES);for(let s=0;s<n;s++){const r=i.getActiveAttrib(t,s),a=r.name;let o=1;r.type===i.FLOAT_MAT2&&(o=2),r.type===i.FLOAT_MAT3&&(o=3),r.type===i.FLOAT_MAT4&&(o=4),e[a]={type:r.type,location:i.getAttribLocation(t,a),locationSize:o}}return e}function Xs(i){return i!==""}function Yc(i,t){const e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return i.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function qc(i,t){return i.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}const Zg=/^[ \t]*#include +<([\w\d./]+)>/gm;function rl(i){return i.replace(Zg,Kg)}const $g=new Map;function Kg(i,t){let e=qt[t];if(e===void 0){const n=$g.get(t);if(n!==void 0)e=qt[n],Ot('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,n);else throw new Error("Can not resolve #include <"+t+">")}return rl(e)}const Jg=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Zc(i){return i.replace(Jg,jg)}function jg(i,t,e,n){let s="";for(let r=parseInt(t);r<parseInt(e);r++)s+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function $c(i){let t=`precision ${i.precision} float;
	precision ${i.precision} int;
	precision ${i.precision} sampler2D;
	precision ${i.precision} samplerCube;
	precision ${i.precision} sampler3D;
	precision ${i.precision} sampler2DArray;
	precision ${i.precision} sampler2DShadow;
	precision ${i.precision} samplerCubeShadow;
	precision ${i.precision} sampler2DArrayShadow;
	precision ${i.precision} isampler2D;
	precision ${i.precision} isampler3D;
	precision ${i.precision} isamplerCube;
	precision ${i.precision} isampler2DArray;
	precision ${i.precision} usampler2D;
	precision ${i.precision} usampler3D;
	precision ${i.precision} usamplerCube;
	precision ${i.precision} usampler2DArray;
	`;return i.precision==="highp"?t+=`
#define HIGH_PRECISION`:i.precision==="mediump"?t+=`
#define MEDIUM_PRECISION`:i.precision==="lowp"&&(t+=`
#define LOW_PRECISION`),t}const Qg={[Hr]:"SHADOWMAP_TYPE_PCF",[Vs]:"SHADOWMAP_TYPE_VSM"};function tx(i){return Qg[i.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}const ex={[Hi]:"ENVMAP_TYPE_CUBE",[vs]:"ENVMAP_TYPE_CUBE",[ha]:"ENVMAP_TYPE_CUBE_UV"};function nx(i){return i.envMap===!1?"ENVMAP_TYPE_CUBE":ex[i.envMapMode]||"ENVMAP_TYPE_CUBE"}const ix={[vs]:"ENVMAP_MODE_REFRACTION"};function sx(i){return i.envMap===!1?"ENVMAP_MODE_REFLECTION":ix[i.envMapMode]||"ENVMAP_MODE_REFLECTION"}const rx={[ca]:"ENVMAP_BLENDING_MULTIPLY",[Vu]:"ENVMAP_BLENDING_MIX",[Wu]:"ENVMAP_BLENDING_ADD"};function ax(i){return i.envMap===!1?"ENVMAP_BLENDING_NONE":rx[i.combine]||"ENVMAP_BLENDING_NONE"}function ox(i){const t=i.envMapCubeUVHeight;if(t===null)return null;const e=Math.log2(t)-2,n=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),112)),texelHeight:n,maxMip:e}}function lx(i,t,e,n){const s=i.getContext(),r=e.defines;let a=e.vertexShader,o=e.fragmentShader;const l=tx(e),c=nx(e),h=sx(e),u=ax(e),d=ox(e),f=Xg(e),g=Yg(r),x=s.createProgram();let m,p,w=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(m=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g].filter(Xs).join(`
`),m.length>0&&(m+=`
`),p=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g].filter(Xs).join(`
`),p.length>0&&(p+=`
`)):(m=[$c(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.batchingColor?"#define USE_BATCHING_COLOR":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.instancingMorph?"#define USE_INSTANCING_MORPH":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+h:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",e.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Xs).join(`
`),p=[$c(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+c:"",e.envMap?"#define "+h:"",e.envMap?"#define "+u:"",d?"#define CUBEUV_TEXEL_WIDTH "+d.texelWidth:"",d?"#define CUBEUV_TEXEL_HEIGHT "+d.texelHeight:"",d?"#define CUBEUV_MAX_MIP "+d.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.dispersion?"#define USE_DISPERSION":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor||e.batchingColor?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",e.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",e.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==Vn?"#define TONE_MAPPING":"",e.toneMapping!==Vn?qt.tonemapping_pars_fragment:"",e.toneMapping!==Vn?Vg("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",qt.colorspace_pars_fragment,Hg("linearToOutputTexel",e.outputColorSpace),Wg(),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(Xs).join(`
`)),a=rl(a),a=Yc(a,e),a=qc(a,e),o=rl(o),o=Yc(o,e),o=qc(o,e),a=Zc(a),o=Zc(o),e.isRawShaderMaterial!==!0&&(w=`#version 300 es
`,m=[f,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,p=["#define varying in",e.glslVersion===Jl?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===Jl?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+p);const b=w+m+a,M=w+p+o,y=Vc(s,s.VERTEX_SHADER,b),T=Vc(s,s.FRAGMENT_SHADER,M);s.attachShader(x,y),s.attachShader(x,T),e.index0AttributeName!==void 0?s.bindAttribLocation(x,0,e.index0AttributeName):e.morphTargets===!0&&s.bindAttribLocation(x,0,"position"),s.linkProgram(x);function C(P){if(i.debug.checkShaderErrors){const I=s.getProgramInfoLog(x)||"",F=s.getShaderInfoLog(y)||"",B=s.getShaderInfoLog(T)||"",N=I.trim(),H=F.trim(),z=B.trim();let $=!0,st=!0;if(s.getProgramParameter(x,s.LINK_STATUS)===!1)if($=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(s,x,y,T);else{const Z=Xc(s,y,"vertex"),j=Xc(s,T,"fragment");ee("THREE.WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(x,s.VALIDATE_STATUS)+`

Material Name: `+P.name+`
Material Type: `+P.type+`

Program Info Log: `+N+`
`+Z+`
`+j)}else N!==""?Ot("WebGLProgram: Program Info Log:",N):(H===""||z==="")&&(st=!1);st&&(P.diagnostics={runnable:$,programLog:N,vertexShader:{log:H,prefix:m},fragmentShader:{log:z,prefix:p}})}s.deleteShader(y),s.deleteShader(T),L=new Yr(s,x),v=qg(s,x)}let L;this.getUniforms=function(){return L===void 0&&C(this),L};let v;this.getAttributes=function(){return v===void 0&&C(this),v};let S=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return S===!1&&(S=s.getProgramParameter(x,Og)),S},this.destroy=function(){n.releaseStatesOfProgram(this),s.deleteProgram(x),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=Bg++,this.cacheKey=t,this.usedTimes=1,this.program=x,this.vertexShader=y,this.fragmentShader=T,this}let cx=0;class hx{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){const e=t.vertexShader,n=t.fragmentShader,s=this._getShaderStage(e),r=this._getShaderStage(n),a=this._getShaderCacheForMaterial(t);return a.has(s)===!1&&(a.add(s),s.usedTimes++),a.has(r)===!1&&(a.add(r),r.usedTimes++),this}remove(t){const e=this.materialCache.get(t);for(const n of e)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){const e=this.materialCache;let n=e.get(t);return n===void 0&&(n=new Set,e.set(t,n)),n}_getShaderStage(t){const e=this.shaderCache;let n=e.get(t);return n===void 0&&(n=new ux(t),e.set(t,n)),n}}class ux{constructor(t){this.id=cx++,this.code=t,this.usedTimes=0}}function dx(i,t,e,n,s,r,a){const o=new Eh,l=new hx,c=new Set,h=[],u=new Map,d=s.logarithmicDepthBuffer;let f=s.precision;const g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function x(v){return c.add(v),v===0?"uv":`uv${v}`}function m(v,S,P,I,F){const B=I.fog,N=F.geometry,H=v.isMeshStandardMaterial?I.environment:null,z=(v.isMeshStandardMaterial?e:t).get(v.envMap||H),$=z&&z.mapping===ha?z.image.height:null,st=g[v.type];v.precision!==null&&(f=s.getMaxPrecision(v.precision),f!==v.precision&&Ot("WebGLProgram.getParameters:",v.precision,"not supported, using",f,"instead."));const Z=N.morphAttributes.position||N.morphAttributes.normal||N.morphAttributes.color,j=Z!==void 0?Z.length:0;let Ct=0;N.morphAttributes.position!==void 0&&(Ct=1),N.morphAttributes.normal!==void 0&&(Ct=2),N.morphAttributes.color!==void 0&&(Ct=3);let It,$t,te,Y;if(st){const ce=kn[st];It=ce.vertexShader,$t=ce.fragmentShader}else It=v.vertexShader,$t=v.fragmentShader,l.update(v),te=l.getVertexShaderID(v),Y=l.getFragmentShaderID(v);const Q=i.getRenderTarget(),xt=i.state.buffers.depth.getReversed(),Ft=F.isInstancedMesh===!0,St=F.isBatchedMesh===!0,jt=!!v.map,ae=!!v.matcap,Wt=!!z,K=!!v.aoMap,rt=!!v.lightMap,tt=!!v.bumpMap,at=!!v.normalMap,R=!!v.displacementMap,bt=!!v.emissiveMap,_t=!!v.metalnessMap,Ut=!!v.roughnessMap,ht=v.anisotropy>0,A=v.clearcoat>0,_=v.dispersion>0,O=v.iridescence>0,X=v.sheen>0,et=v.transmission>0,q=ht&&!!v.anisotropyMap,Lt=A&&!!v.clearcoatMap,dt=A&&!!v.clearcoatNormalMap,Rt=A&&!!v.clearcoatRoughnessMap,Ht=O&&!!v.iridescenceMap,ot=O&&!!v.iridescenceThicknessMap,mt=X&&!!v.sheenColorMap,Pt=X&&!!v.sheenRoughnessMap,Dt=!!v.specularMap,pt=!!v.specularColorMap,Zt=!!v.specularIntensityMap,U=et&&!!v.transmissionMap,yt=et&&!!v.thicknessMap,ct=!!v.gradientMap,wt=!!v.alphaMap,lt=v.alphaTest>0,nt=!!v.alphaHash,ft=!!v.extensions;let Xt=Vn;v.toneMapped&&(Q===null||Q.isXRRenderTarget===!0)&&(Xt=i.toneMapping);const ge={shaderID:st,shaderType:v.type,shaderName:v.name,vertexShader:It,fragmentShader:$t,defines:v.defines,customVertexShaderID:te,customFragmentShaderID:Y,isRawShaderMaterial:v.isRawShaderMaterial===!0,glslVersion:v.glslVersion,precision:f,batching:St,batchingColor:St&&F._colorsTexture!==null,instancing:Ft,instancingColor:Ft&&F.instanceColor!==null,instancingMorph:Ft&&F.morphTexture!==null,outputColorSpace:Q===null?i.outputColorSpace:Q.isXRRenderTarget===!0?Q.texture.colorSpace:ys,alphaToCoverage:!!v.alphaToCoverage,map:jt,matcap:ae,envMap:Wt,envMapMode:Wt&&z.mapping,envMapCubeUVHeight:$,aoMap:K,lightMap:rt,bumpMap:tt,normalMap:at,displacementMap:R,emissiveMap:bt,normalMapObjectSpace:at&&v.normalMapType===qu,normalMapTangentSpace:at&&v.normalMapType===ua,metalnessMap:_t,roughnessMap:Ut,anisotropy:ht,anisotropyMap:q,clearcoat:A,clearcoatMap:Lt,clearcoatNormalMap:dt,clearcoatRoughnessMap:Rt,dispersion:_,iridescence:O,iridescenceMap:Ht,iridescenceThicknessMap:ot,sheen:X,sheenColorMap:mt,sheenRoughnessMap:Pt,specularMap:Dt,specularColorMap:pt,specularIntensityMap:Zt,transmission:et,transmissionMap:U,thicknessMap:yt,gradientMap:ct,opaque:v.transparent===!1&&v.blending===gs&&v.alphaToCoverage===!1,alphaMap:wt,alphaTest:lt,alphaHash:nt,combine:v.combine,mapUv:jt&&x(v.map.channel),aoMapUv:K&&x(v.aoMap.channel),lightMapUv:rt&&x(v.lightMap.channel),bumpMapUv:tt&&x(v.bumpMap.channel),normalMapUv:at&&x(v.normalMap.channel),displacementMapUv:R&&x(v.displacementMap.channel),emissiveMapUv:bt&&x(v.emissiveMap.channel),metalnessMapUv:_t&&x(v.metalnessMap.channel),roughnessMapUv:Ut&&x(v.roughnessMap.channel),anisotropyMapUv:q&&x(v.anisotropyMap.channel),clearcoatMapUv:Lt&&x(v.clearcoatMap.channel),clearcoatNormalMapUv:dt&&x(v.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Rt&&x(v.clearcoatRoughnessMap.channel),iridescenceMapUv:Ht&&x(v.iridescenceMap.channel),iridescenceThicknessMapUv:ot&&x(v.iridescenceThicknessMap.channel),sheenColorMapUv:mt&&x(v.sheenColorMap.channel),sheenRoughnessMapUv:Pt&&x(v.sheenRoughnessMap.channel),specularMapUv:Dt&&x(v.specularMap.channel),specularColorMapUv:pt&&x(v.specularColorMap.channel),specularIntensityMapUv:Zt&&x(v.specularIntensityMap.channel),transmissionMapUv:U&&x(v.transmissionMap.channel),thicknessMapUv:yt&&x(v.thicknessMap.channel),alphaMapUv:wt&&x(v.alphaMap.channel),vertexTangents:!!N.attributes.tangent&&(at||ht),vertexColors:v.vertexColors,vertexAlphas:v.vertexColors===!0&&!!N.attributes.color&&N.attributes.color.itemSize===4,pointsUvs:F.isPoints===!0&&!!N.attributes.uv&&(jt||wt),fog:!!B,useFog:v.fog===!0,fogExp2:!!B&&B.isFogExp2,flatShading:v.flatShading===!0&&v.wireframe===!1,sizeAttenuation:v.sizeAttenuation===!0,logarithmicDepthBuffer:d,reversedDepthBuffer:xt,skinning:F.isSkinnedMesh===!0,morphTargets:N.morphAttributes.position!==void 0,morphNormals:N.morphAttributes.normal!==void 0,morphColors:N.morphAttributes.color!==void 0,morphTargetsCount:j,morphTextureStride:Ct,numDirLights:S.directional.length,numPointLights:S.point.length,numSpotLights:S.spot.length,numSpotLightMaps:S.spotLightMap.length,numRectAreaLights:S.rectArea.length,numHemiLights:S.hemi.length,numDirLightShadows:S.directionalShadowMap.length,numPointLightShadows:S.pointShadowMap.length,numSpotLightShadows:S.spotShadowMap.length,numSpotLightShadowsWithMaps:S.numSpotLightShadowsWithMaps,numLightProbes:S.numLightProbes,numClippingPlanes:a.numPlanes,numClipIntersection:a.numIntersection,dithering:v.dithering,shadowMapEnabled:i.shadowMap.enabled&&P.length>0,shadowMapType:i.shadowMap.type,toneMapping:Xt,decodeVideoTexture:jt&&v.map.isVideoTexture===!0&&ie.getTransfer(v.map.colorSpace)===ue,decodeVideoTextureEmissive:bt&&v.emissiveMap.isVideoTexture===!0&&ie.getTransfer(v.emissiveMap.colorSpace)===ue,premultipliedAlpha:v.premultipliedAlpha,doubleSided:v.side===ke,flipSided:v.side===rn,useDepthPacking:v.depthPacking>=0,depthPacking:v.depthPacking||0,index0AttributeName:v.index0AttributeName,extensionClipCullDistance:ft&&v.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(ft&&v.extensions.multiDraw===!0||St)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:v.customProgramCacheKey()};return ge.vertexUv1s=c.has(1),ge.vertexUv2s=c.has(2),ge.vertexUv3s=c.has(3),c.clear(),ge}function p(v){const S=[];if(v.shaderID?S.push(v.shaderID):(S.push(v.customVertexShaderID),S.push(v.customFragmentShaderID)),v.defines!==void 0)for(const P in v.defines)S.push(P),S.push(v.defines[P]);return v.isRawShaderMaterial===!1&&(w(S,v),b(S,v),S.push(i.outputColorSpace)),S.push(v.customProgramCacheKey),S.join()}function w(v,S){v.push(S.precision),v.push(S.outputColorSpace),v.push(S.envMapMode),v.push(S.envMapCubeUVHeight),v.push(S.mapUv),v.push(S.alphaMapUv),v.push(S.lightMapUv),v.push(S.aoMapUv),v.push(S.bumpMapUv),v.push(S.normalMapUv),v.push(S.displacementMapUv),v.push(S.emissiveMapUv),v.push(S.metalnessMapUv),v.push(S.roughnessMapUv),v.push(S.anisotropyMapUv),v.push(S.clearcoatMapUv),v.push(S.clearcoatNormalMapUv),v.push(S.clearcoatRoughnessMapUv),v.push(S.iridescenceMapUv),v.push(S.iridescenceThicknessMapUv),v.push(S.sheenColorMapUv),v.push(S.sheenRoughnessMapUv),v.push(S.specularMapUv),v.push(S.specularColorMapUv),v.push(S.specularIntensityMapUv),v.push(S.transmissionMapUv),v.push(S.thicknessMapUv),v.push(S.combine),v.push(S.fogExp2),v.push(S.sizeAttenuation),v.push(S.morphTargetsCount),v.push(S.morphAttributeCount),v.push(S.numDirLights),v.push(S.numPointLights),v.push(S.numSpotLights),v.push(S.numSpotLightMaps),v.push(S.numHemiLights),v.push(S.numRectAreaLights),v.push(S.numDirLightShadows),v.push(S.numPointLightShadows),v.push(S.numSpotLightShadows),v.push(S.numSpotLightShadowsWithMaps),v.push(S.numLightProbes),v.push(S.shadowMapType),v.push(S.toneMapping),v.push(S.numClippingPlanes),v.push(S.numClipIntersection),v.push(S.depthPacking)}function b(v,S){o.disableAll(),S.instancing&&o.enable(0),S.instancingColor&&o.enable(1),S.instancingMorph&&o.enable(2),S.matcap&&o.enable(3),S.envMap&&o.enable(4),S.normalMapObjectSpace&&o.enable(5),S.normalMapTangentSpace&&o.enable(6),S.clearcoat&&o.enable(7),S.iridescence&&o.enable(8),S.alphaTest&&o.enable(9),S.vertexColors&&o.enable(10),S.vertexAlphas&&o.enable(11),S.vertexUv1s&&o.enable(12),S.vertexUv2s&&o.enable(13),S.vertexUv3s&&o.enable(14),S.vertexTangents&&o.enable(15),S.anisotropy&&o.enable(16),S.alphaHash&&o.enable(17),S.batching&&o.enable(18),S.dispersion&&o.enable(19),S.batchingColor&&o.enable(20),S.gradientMap&&o.enable(21),v.push(o.mask),o.disableAll(),S.fog&&o.enable(0),S.useFog&&o.enable(1),S.flatShading&&o.enable(2),S.logarithmicDepthBuffer&&o.enable(3),S.reversedDepthBuffer&&o.enable(4),S.skinning&&o.enable(5),S.morphTargets&&o.enable(6),S.morphNormals&&o.enable(7),S.morphColors&&o.enable(8),S.premultipliedAlpha&&o.enable(9),S.shadowMapEnabled&&o.enable(10),S.doubleSided&&o.enable(11),S.flipSided&&o.enable(12),S.useDepthPacking&&o.enable(13),S.dithering&&o.enable(14),S.transmission&&o.enable(15),S.sheen&&o.enable(16),S.opaque&&o.enable(17),S.pointsUvs&&o.enable(18),S.decodeVideoTexture&&o.enable(19),S.decodeVideoTextureEmissive&&o.enable(20),S.alphaToCoverage&&o.enable(21),v.push(o.mask)}function M(v){const S=g[v.type];let P;if(S){const I=kn[S];P=Od.clone(I.uniforms)}else P=v.uniforms;return P}function y(v,S){let P=u.get(S);return P!==void 0?++P.usedTimes:(P=new lx(i,S,v,r),h.push(P),u.set(S,P)),P}function T(v){if(--v.usedTimes===0){const S=h.indexOf(v);h[S]=h[h.length-1],h.pop(),u.delete(v.cacheKey),v.destroy()}}function C(v){l.remove(v)}function L(){l.dispose()}return{getParameters:m,getProgramCacheKey:p,getUniforms:M,acquireProgram:y,releaseProgram:T,releaseShaderCache:C,programs:h,dispose:L}}function fx(){let i=new WeakMap;function t(a){return i.has(a)}function e(a){let o=i.get(a);return o===void 0&&(o={},i.set(a,o)),o}function n(a){i.delete(a)}function s(a,o,l){i.get(a)[o]=l}function r(){i=new WeakMap}return{has:t,get:e,remove:n,update:s,dispose:r}}function px(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.material.id!==t.material.id?i.material.id-t.material.id:i.z!==t.z?i.z-t.z:i.id-t.id}function Kc(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.z!==t.z?t.z-i.z:i.id-t.id}function Jc(){const i=[];let t=0;const e=[],n=[],s=[];function r(){t=0,e.length=0,n.length=0,s.length=0}function a(u,d,f,g,x,m){let p=i[t];return p===void 0?(p={id:u.id,object:u,geometry:d,material:f,groupOrder:g,renderOrder:u.renderOrder,z:x,group:m},i[t]=p):(p.id=u.id,p.object=u,p.geometry=d,p.material=f,p.groupOrder=g,p.renderOrder=u.renderOrder,p.z=x,p.group=m),t++,p}function o(u,d,f,g,x,m){const p=a(u,d,f,g,x,m);f.transmission>0?n.push(p):f.transparent===!0?s.push(p):e.push(p)}function l(u,d,f,g,x,m){const p=a(u,d,f,g,x,m);f.transmission>0?n.unshift(p):f.transparent===!0?s.unshift(p):e.unshift(p)}function c(u,d){e.length>1&&e.sort(u||px),n.length>1&&n.sort(d||Kc),s.length>1&&s.sort(d||Kc)}function h(){for(let u=t,d=i.length;u<d;u++){const f=i[u];if(f.id===null)break;f.id=null,f.object=null,f.geometry=null,f.material=null,f.group=null}}return{opaque:e,transmissive:n,transparent:s,init:r,push:o,unshift:l,finish:h,sort:c}}function mx(){let i=new WeakMap;function t(n,s){const r=i.get(n);let a;return r===void 0?(a=new Jc,i.set(n,[a])):s>=r.length?(a=new Jc,r.push(a)):a=r[s],a}function e(){i=new WeakMap}return{get:t,dispose:e}}function gx(){const i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"DirectionalLight":e={direction:new D,color:new Bt};break;case"SpotLight":e={position:new D,direction:new D,color:new Bt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new D,color:new Bt,distance:0,decay:0};break;case"HemisphereLight":e={direction:new D,skyColor:new Bt,groundColor:new Bt};break;case"RectAreaLight":e={color:new Bt,position:new D,halfWidth:new D,halfHeight:new D};break}return i[t.id]=e,e}}}function xx(){const i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"DirectionalLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ut};break;case"SpotLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ut};break;case"PointLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ut,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[t.id]=e,e}}}let _x=0;function vx(i,t){return(t.castShadow?2:0)-(i.castShadow?2:0)+(t.map?1:0)-(i.map?1:0)}function Mx(i){const t=new gx,e=xx(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)n.probe.push(new D);const s=new D,r=new Qt,a=new Qt;function o(c){let h=0,u=0,d=0;for(let v=0;v<9;v++)n.probe[v].set(0,0,0);let f=0,g=0,x=0,m=0,p=0,w=0,b=0,M=0,y=0,T=0,C=0;c.sort(vx);for(let v=0,S=c.length;v<S;v++){const P=c[v],I=P.color,F=P.intensity,B=P.distance;let N=null;if(P.shadow&&P.shadow.map&&(P.shadow.map.texture.format===Ms?N=P.shadow.map.texture:N=P.shadow.map.depthTexture||P.shadow.map.texture),P.isAmbientLight)h+=I.r*F,u+=I.g*F,d+=I.b*F;else if(P.isLightProbe){for(let H=0;H<9;H++)n.probe[H].addScaledVector(P.sh.coefficients[H],F);C++}else if(P.isDirectionalLight){const H=t.get(P);if(H.color.copy(P.color).multiplyScalar(P.intensity),P.castShadow){const z=P.shadow,$=e.get(P);$.shadowIntensity=z.intensity,$.shadowBias=z.bias,$.shadowNormalBias=z.normalBias,$.shadowRadius=z.radius,$.shadowMapSize=z.mapSize,n.directionalShadow[f]=$,n.directionalShadowMap[f]=N,n.directionalShadowMatrix[f]=P.shadow.matrix,w++}n.directional[f]=H,f++}else if(P.isSpotLight){const H=t.get(P);H.position.setFromMatrixPosition(P.matrixWorld),H.color.copy(I).multiplyScalar(F),H.distance=B,H.coneCos=Math.cos(P.angle),H.penumbraCos=Math.cos(P.angle*(1-P.penumbra)),H.decay=P.decay,n.spot[x]=H;const z=P.shadow;if(P.map&&(n.spotLightMap[y]=P.map,y++,z.updateMatrices(P),P.castShadow&&T++),n.spotLightMatrix[x]=z.matrix,P.castShadow){const $=e.get(P);$.shadowIntensity=z.intensity,$.shadowBias=z.bias,$.shadowNormalBias=z.normalBias,$.shadowRadius=z.radius,$.shadowMapSize=z.mapSize,n.spotShadow[x]=$,n.spotShadowMap[x]=N,M++}x++}else if(P.isRectAreaLight){const H=t.get(P);H.color.copy(I).multiplyScalar(F),H.halfWidth.set(P.width*.5,0,0),H.halfHeight.set(0,P.height*.5,0),n.rectArea[m]=H,m++}else if(P.isPointLight){const H=t.get(P);if(H.color.copy(P.color).multiplyScalar(P.intensity),H.distance=P.distance,H.decay=P.decay,P.castShadow){const z=P.shadow,$=e.get(P);$.shadowIntensity=z.intensity,$.shadowBias=z.bias,$.shadowNormalBias=z.normalBias,$.shadowRadius=z.radius,$.shadowMapSize=z.mapSize,$.shadowCameraNear=z.camera.near,$.shadowCameraFar=z.camera.far,n.pointShadow[g]=$,n.pointShadowMap[g]=N,n.pointShadowMatrix[g]=P.shadow.matrix,b++}n.point[g]=H,g++}else if(P.isHemisphereLight){const H=t.get(P);H.skyColor.copy(P.color).multiplyScalar(F),H.groundColor.copy(P.groundColor).multiplyScalar(F),n.hemi[p]=H,p++}}m>0&&(i.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=vt.LTC_FLOAT_1,n.rectAreaLTC2=vt.LTC_FLOAT_2):(n.rectAreaLTC1=vt.LTC_HALF_1,n.rectAreaLTC2=vt.LTC_HALF_2)),n.ambient[0]=h,n.ambient[1]=u,n.ambient[2]=d;const L=n.hash;(L.directionalLength!==f||L.pointLength!==g||L.spotLength!==x||L.rectAreaLength!==m||L.hemiLength!==p||L.numDirectionalShadows!==w||L.numPointShadows!==b||L.numSpotShadows!==M||L.numSpotMaps!==y||L.numLightProbes!==C)&&(n.directional.length=f,n.spot.length=x,n.rectArea.length=m,n.point.length=g,n.hemi.length=p,n.directionalShadow.length=w,n.directionalShadowMap.length=w,n.pointShadow.length=b,n.pointShadowMap.length=b,n.spotShadow.length=M,n.spotShadowMap.length=M,n.directionalShadowMatrix.length=w,n.pointShadowMatrix.length=b,n.spotLightMatrix.length=M+y-T,n.spotLightMap.length=y,n.numSpotLightShadowsWithMaps=T,n.numLightProbes=C,L.directionalLength=f,L.pointLength=g,L.spotLength=x,L.rectAreaLength=m,L.hemiLength=p,L.numDirectionalShadows=w,L.numPointShadows=b,L.numSpotShadows=M,L.numSpotMaps=y,L.numLightProbes=C,n.version=_x++)}function l(c,h){let u=0,d=0,f=0,g=0,x=0;const m=h.matrixWorldInverse;for(let p=0,w=c.length;p<w;p++){const b=c[p];if(b.isDirectionalLight){const M=n.directional[u];M.direction.setFromMatrixPosition(b.matrixWorld),s.setFromMatrixPosition(b.target.matrixWorld),M.direction.sub(s),M.direction.transformDirection(m),u++}else if(b.isSpotLight){const M=n.spot[f];M.position.setFromMatrixPosition(b.matrixWorld),M.position.applyMatrix4(m),M.direction.setFromMatrixPosition(b.matrixWorld),s.setFromMatrixPosition(b.target.matrixWorld),M.direction.sub(s),M.direction.transformDirection(m),f++}else if(b.isRectAreaLight){const M=n.rectArea[g];M.position.setFromMatrixPosition(b.matrixWorld),M.position.applyMatrix4(m),a.identity(),r.copy(b.matrixWorld),r.premultiply(m),a.extractRotation(r),M.halfWidth.set(b.width*.5,0,0),M.halfHeight.set(0,b.height*.5,0),M.halfWidth.applyMatrix4(a),M.halfHeight.applyMatrix4(a),g++}else if(b.isPointLight){const M=n.point[d];M.position.setFromMatrixPosition(b.matrixWorld),M.position.applyMatrix4(m),d++}else if(b.isHemisphereLight){const M=n.hemi[x];M.direction.setFromMatrixPosition(b.matrixWorld),M.direction.transformDirection(m),x++}}}return{setup:o,setupView:l,state:n}}function jc(i){const t=new Mx(i),e=[],n=[];function s(h){c.camera=h,e.length=0,n.length=0}function r(h){e.push(h)}function a(h){n.push(h)}function o(){t.setup(e)}function l(h){t.setupView(e,h)}const c={lightsArray:e,shadowsArray:n,camera:null,lights:t,transmissionRenderTarget:{}};return{init:s,state:c,setupLights:o,setupLightsView:l,pushLight:r,pushShadow:a}}function yx(i){let t=new WeakMap;function e(s,r=0){const a=t.get(s);let o;return a===void 0?(o=new jc(i),t.set(s,[o])):r>=a.length?(o=new jc(i),a.push(o)):o=a[r],o}function n(){t=new WeakMap}return{get:e,dispose:n}}const Sx=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,wx=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ).rg;
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ).r;
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( max( 0.0, squared_mean - mean * mean ) );
	gl_FragColor = vec4( mean, std_dev, 0.0, 1.0 );
}`,bx=[new D(1,0,0),new D(-1,0,0),new D(0,1,0),new D(0,-1,0),new D(0,0,1),new D(0,0,-1)],Ex=[new D(0,-1,0),new D(0,-1,0),new D(0,0,1),new D(0,0,-1),new D(0,-1,0),new D(0,-1,0)],Qc=new Qt,ks=new D,to=new D;function Tx(i,t,e){let n=new Al;const s=new ut,r=new ut,a=new Ee,o=new If,l=new Lf,c={},h=e.maxTextureSize,u={[wi]:rn,[rn]:wi,[ke]:ke},d=new En({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new ut},radius:{value:4}},vertexShader:Sx,fragmentShader:wx}),f=d.clone();f.defines.HORIZONTAL_PASS=1;const g=new an;g.setAttribute("position",new wn(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const x=new it(g,d),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Hr;let p=this.type;this.render=function(T,C,L){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||T.length===0)return;T.type===bu&&(Ot("WebGLShadowMap: PCFSoftShadowMap has been deprecated. Using PCFShadowMap instead."),T.type=Hr);const v=i.getRenderTarget(),S=i.getActiveCubeFace(),P=i.getActiveMipmapLevel(),I=i.state;I.setBlending(si),I.buffers.depth.getReversed()===!0?I.buffers.color.setClear(0,0,0,0):I.buffers.color.setClear(1,1,1,1),I.buffers.depth.setTest(!0),I.setScissorTest(!1);const F=p!==this.type;F&&C.traverse(function(B){B.material&&(Array.isArray(B.material)?B.material.forEach(N=>N.needsUpdate=!0):B.material.needsUpdate=!0)});for(let B=0,N=T.length;B<N;B++){const H=T[B],z=H.shadow;if(z===void 0){Ot("WebGLShadowMap:",H,"has no shadow.");continue}if(z.autoUpdate===!1&&z.needsUpdate===!1)continue;s.copy(z.mapSize);const $=z.getFrameExtents();if(s.multiply($),r.copy(z.mapSize),(s.x>h||s.y>h)&&(s.x>h&&(r.x=Math.floor(h/$.x),s.x=r.x*$.x,z.mapSize.x=r.x),s.y>h&&(r.y=Math.floor(h/$.y),s.y=r.y*$.y,z.mapSize.y=r.y)),z.map===null||F===!0){if(z.map!==null&&(z.map.depthTexture!==null&&(z.map.depthTexture.dispose(),z.map.depthTexture=null),z.map.dispose()),this.type===Vs){if(H.isPointLight){Ot("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}z.map=new Xn(s.x,s.y,{format:Ms,type:oi,minFilter:He,magFilter:He,generateMipmaps:!1}),z.map.texture.name=H.name+".shadowMap",z.map.depthTexture=new er(s.x,s.y,Fn),z.map.depthTexture.name=H.name+".shadowMapDepth",z.map.depthTexture.format=li,z.map.depthTexture.compareFunction=null,z.map.depthTexture.minFilter=Ve,z.map.depthTexture.magFilter=Ve}else{H.isPointLight?(z.map=new Lh(s.x),z.map.depthTexture=new Zd(s.x,Yn)):(z.map=new Xn(s.x,s.y),z.map.depthTexture=new er(s.x,s.y,Yn)),z.map.depthTexture.name=H.name+".shadowMap",z.map.depthTexture.format=li;const Z=i.state.buffers.depth.getReversed();this.type===Hr?(z.map.depthTexture.compareFunction=Z?El:bl,z.map.depthTexture.minFilter=He,z.map.depthTexture.magFilter=He):(z.map.depthTexture.compareFunction=null,z.map.depthTexture.minFilter=Ve,z.map.depthTexture.magFilter=Ve)}z.camera.updateProjectionMatrix()}const st=z.map.isWebGLCubeRenderTarget?6:1;for(let Z=0;Z<st;Z++){if(z.map.isWebGLCubeRenderTarget)i.setRenderTarget(z.map,Z),i.clear();else{Z===0&&(i.setRenderTarget(z.map),i.clear());const j=z.getViewport(Z);a.set(r.x*j.x,r.y*j.y,r.x*j.z,r.y*j.w),I.viewport(a)}if(H.isPointLight){const j=z.camera,Ct=z.matrix,It=H.distance||j.far;It!==j.far&&(j.far=It,j.updateProjectionMatrix()),ks.setFromMatrixPosition(H.matrixWorld),j.position.copy(ks),to.copy(j.position),to.add(bx[Z]),j.up.copy(Ex[Z]),j.lookAt(to),j.updateMatrixWorld(),Ct.makeTranslation(-ks.x,-ks.y,-ks.z),Qc.multiplyMatrices(j.projectionMatrix,j.matrixWorldInverse),z._frustum.setFromProjectionMatrix(Qc,j.coordinateSystem,j.reversedDepth)}else z.updateMatrices(H);n=z.getFrustum(),M(C,L,z.camera,H,this.type)}z.isPointLightShadow!==!0&&this.type===Vs&&w(z,L),z.needsUpdate=!1}p=this.type,m.needsUpdate=!1,i.setRenderTarget(v,S,P)};function w(T,C){const L=t.update(x);d.defines.VSM_SAMPLES!==T.blurSamples&&(d.defines.VSM_SAMPLES=T.blurSamples,f.defines.VSM_SAMPLES=T.blurSamples,d.needsUpdate=!0,f.needsUpdate=!0),T.mapPass===null&&(T.mapPass=new Xn(s.x,s.y,{format:Ms,type:oi})),d.uniforms.shadow_pass.value=T.map.depthTexture,d.uniforms.resolution.value=T.mapSize,d.uniforms.radius.value=T.radius,i.setRenderTarget(T.mapPass),i.clear(),i.renderBufferDirect(C,null,L,d,x,null),f.uniforms.shadow_pass.value=T.mapPass.texture,f.uniforms.resolution.value=T.mapSize,f.uniforms.radius.value=T.radius,i.setRenderTarget(T.map),i.clear(),i.renderBufferDirect(C,null,L,f,x,null)}function b(T,C,L,v){let S=null;const P=L.isPointLight===!0?T.customDistanceMaterial:T.customDepthMaterial;if(P!==void 0)S=P;else if(S=L.isPointLight===!0?l:o,i.localClippingEnabled&&C.clipShadows===!0&&Array.isArray(C.clippingPlanes)&&C.clippingPlanes.length!==0||C.displacementMap&&C.displacementScale!==0||C.alphaMap&&C.alphaTest>0||C.map&&C.alphaTest>0||C.alphaToCoverage===!0){const I=S.uuid,F=C.uuid;let B=c[I];B===void 0&&(B={},c[I]=B);let N=B[F];N===void 0&&(N=S.clone(),B[F]=N,C.addEventListener("dispose",y)),S=N}if(S.visible=C.visible,S.wireframe=C.wireframe,v===Vs?S.side=C.shadowSide!==null?C.shadowSide:C.side:S.side=C.shadowSide!==null?C.shadowSide:u[C.side],S.alphaMap=C.alphaMap,S.alphaTest=C.alphaToCoverage===!0?.5:C.alphaTest,S.map=C.map,S.clipShadows=C.clipShadows,S.clippingPlanes=C.clippingPlanes,S.clipIntersection=C.clipIntersection,S.displacementMap=C.displacementMap,S.displacementScale=C.displacementScale,S.displacementBias=C.displacementBias,S.wireframeLinewidth=C.wireframeLinewidth,S.linewidth=C.linewidth,L.isPointLight===!0&&S.isMeshDistanceMaterial===!0){const I=i.properties.get(S);I.light=L}return S}function M(T,C,L,v,S){if(T.visible===!1)return;if(T.layers.test(C.layers)&&(T.isMesh||T.isLine||T.isPoints)&&(T.castShadow||T.receiveShadow&&S===Vs)&&(!T.frustumCulled||n.intersectsObject(T))){T.modelViewMatrix.multiplyMatrices(L.matrixWorldInverse,T.matrixWorld);const F=t.update(T),B=T.material;if(Array.isArray(B)){const N=F.groups;for(let H=0,z=N.length;H<z;H++){const $=N[H],st=B[$.materialIndex];if(st&&st.visible){const Z=b(T,st,v,S);T.onBeforeShadow(i,T,C,L,F,Z,$),i.renderBufferDirect(L,null,F,Z,T,$),T.onAfterShadow(i,T,C,L,F,Z,$)}}}else if(B.visible){const N=b(T,B,v,S);T.onBeforeShadow(i,T,C,L,F,N,null),i.renderBufferDirect(L,null,F,N,T,null),T.onAfterShadow(i,T,C,L,F,N,null)}}const I=T.children;for(let F=0,B=I.length;F<B;F++)M(I[F],C,L,v,S)}function y(T){T.target.removeEventListener("dispose",y);for(const L in c){const v=c[L],S=T.target.uuid;S in v&&(v[S].dispose(),delete v[S])}}}const Cx={[co]:ho,[uo]:mo,[fo]:go,[_s]:po,[ho]:co,[mo]:uo,[go]:fo,[po]:_s};function Ax(i,t){function e(){let U=!1;const yt=new Ee;let ct=null;const wt=new Ee(0,0,0,0);return{setMask:function(lt){ct!==lt&&!U&&(i.colorMask(lt,lt,lt,lt),ct=lt)},setLocked:function(lt){U=lt},setClear:function(lt,nt,ft,Xt,ge){ge===!0&&(lt*=Xt,nt*=Xt,ft*=Xt),yt.set(lt,nt,ft,Xt),wt.equals(yt)===!1&&(i.clearColor(lt,nt,ft,Xt),wt.copy(yt))},reset:function(){U=!1,ct=null,wt.set(-1,0,0,0)}}}function n(){let U=!1,yt=!1,ct=null,wt=null,lt=null;return{setReversed:function(nt){if(yt!==nt){const ft=t.get("EXT_clip_control");nt?ft.clipControlEXT(ft.LOWER_LEFT_EXT,ft.ZERO_TO_ONE_EXT):ft.clipControlEXT(ft.LOWER_LEFT_EXT,ft.NEGATIVE_ONE_TO_ONE_EXT),yt=nt;const Xt=lt;lt=null,this.setClear(Xt)}},getReversed:function(){return yt},setTest:function(nt){nt?Q(i.DEPTH_TEST):xt(i.DEPTH_TEST)},setMask:function(nt){ct!==nt&&!U&&(i.depthMask(nt),ct=nt)},setFunc:function(nt){if(yt&&(nt=Cx[nt]),wt!==nt){switch(nt){case co:i.depthFunc(i.NEVER);break;case ho:i.depthFunc(i.ALWAYS);break;case uo:i.depthFunc(i.LESS);break;case _s:i.depthFunc(i.LEQUAL);break;case fo:i.depthFunc(i.EQUAL);break;case po:i.depthFunc(i.GEQUAL);break;case mo:i.depthFunc(i.GREATER);break;case go:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}wt=nt}},setLocked:function(nt){U=nt},setClear:function(nt){lt!==nt&&(yt&&(nt=1-nt),i.clearDepth(nt),lt=nt)},reset:function(){U=!1,ct=null,wt=null,lt=null,yt=!1}}}function s(){let U=!1,yt=null,ct=null,wt=null,lt=null,nt=null,ft=null,Xt=null,ge=null;return{setTest:function(ce){U||(ce?Q(i.STENCIL_TEST):xt(i.STENCIL_TEST))},setMask:function(ce){yt!==ce&&!U&&(i.stencilMask(ce),yt=ce)},setFunc:function(ce,Un,Zn){(ct!==ce||wt!==Un||lt!==Zn)&&(i.stencilFunc(ce,Un,Zn),ct=ce,wt=Un,lt=Zn)},setOp:function(ce,Un,Zn){(nt!==ce||ft!==Un||Xt!==Zn)&&(i.stencilOp(ce,Un,Zn),nt=ce,ft=Un,Xt=Zn)},setLocked:function(ce){U=ce},setClear:function(ce){ge!==ce&&(i.clearStencil(ce),ge=ce)},reset:function(){U=!1,yt=null,ct=null,wt=null,lt=null,nt=null,ft=null,Xt=null,ge=null}}}const r=new e,a=new n,o=new s,l=new WeakMap,c=new WeakMap;let h={},u={},d=new WeakMap,f=[],g=null,x=!1,m=null,p=null,w=null,b=null,M=null,y=null,T=null,C=new Bt(0,0,0),L=0,v=!1,S=null,P=null,I=null,F=null,B=null;const N=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let H=!1,z=0;const $=i.getParameter(i.VERSION);$.indexOf("WebGL")!==-1?(z=parseFloat(/^WebGL (\d)/.exec($)[1]),H=z>=1):$.indexOf("OpenGL ES")!==-1&&(z=parseFloat(/^OpenGL ES (\d)/.exec($)[1]),H=z>=2);let st=null,Z={};const j=i.getParameter(i.SCISSOR_BOX),Ct=i.getParameter(i.VIEWPORT),It=new Ee().fromArray(j),$t=new Ee().fromArray(Ct);function te(U,yt,ct,wt){const lt=new Uint8Array(4),nt=i.createTexture();i.bindTexture(U,nt),i.texParameteri(U,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(U,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let ft=0;ft<ct;ft++)U===i.TEXTURE_3D||U===i.TEXTURE_2D_ARRAY?i.texImage3D(yt,0,i.RGBA,1,1,wt,0,i.RGBA,i.UNSIGNED_BYTE,lt):i.texImage2D(yt+ft,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,lt);return nt}const Y={};Y[i.TEXTURE_2D]=te(i.TEXTURE_2D,i.TEXTURE_2D,1),Y[i.TEXTURE_CUBE_MAP]=te(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),Y[i.TEXTURE_2D_ARRAY]=te(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),Y[i.TEXTURE_3D]=te(i.TEXTURE_3D,i.TEXTURE_3D,1,1),r.setClear(0,0,0,1),a.setClear(1),o.setClear(0),Q(i.DEPTH_TEST),a.setFunc(_s),tt(!1),at(ql),Q(i.CULL_FACE),K(si);function Q(U){h[U]!==!0&&(i.enable(U),h[U]=!0)}function xt(U){h[U]!==!1&&(i.disable(U),h[U]=!1)}function Ft(U,yt){return u[U]!==yt?(i.bindFramebuffer(U,yt),u[U]=yt,U===i.DRAW_FRAMEBUFFER&&(u[i.FRAMEBUFFER]=yt),U===i.FRAMEBUFFER&&(u[i.DRAW_FRAMEBUFFER]=yt),!0):!1}function St(U,yt){let ct=f,wt=!1;if(U){ct=d.get(yt),ct===void 0&&(ct=[],d.set(yt,ct));const lt=U.textures;if(ct.length!==lt.length||ct[0]!==i.COLOR_ATTACHMENT0){for(let nt=0,ft=lt.length;nt<ft;nt++)ct[nt]=i.COLOR_ATTACHMENT0+nt;ct.length=lt.length,wt=!0}}else ct[0]!==i.BACK&&(ct[0]=i.BACK,wt=!0);wt&&i.drawBuffers(ct)}function jt(U){return g!==U?(i.useProgram(U),g=U,!0):!1}const ae={[Oi]:i.FUNC_ADD,[Tu]:i.FUNC_SUBTRACT,[Cu]:i.FUNC_REVERSE_SUBTRACT};ae[Au]=i.MIN,ae[Ru]=i.MAX;const Wt={[Pu]:i.ZERO,[Iu]:i.ONE,[Lu]:i.SRC_COLOR,[oo]:i.SRC_ALPHA,[Bu]:i.SRC_ALPHA_SATURATE,[Uu]:i.DST_COLOR,[Fu]:i.DST_ALPHA,[Du]:i.ONE_MINUS_SRC_COLOR,[lo]:i.ONE_MINUS_SRC_ALPHA,[Ou]:i.ONE_MINUS_DST_COLOR,[Nu]:i.ONE_MINUS_DST_ALPHA,[ku]:i.CONSTANT_COLOR,[zu]:i.ONE_MINUS_CONSTANT_COLOR,[Hu]:i.CONSTANT_ALPHA,[Gu]:i.ONE_MINUS_CONSTANT_ALPHA};function K(U,yt,ct,wt,lt,nt,ft,Xt,ge,ce){if(U===si){x===!0&&(xt(i.BLEND),x=!1);return}if(x===!1&&(Q(i.BLEND),x=!0),U!==Eu){if(U!==m||ce!==v){if((p!==Oi||M!==Oi)&&(i.blendEquation(i.FUNC_ADD),p=Oi,M=Oi),ce)switch(U){case gs:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Sn:i.blendFunc(i.ONE,i.ONE);break;case Zl:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case $l:i.blendFuncSeparate(i.DST_COLOR,i.ONE_MINUS_SRC_ALPHA,i.ZERO,i.ONE);break;default:ee("WebGLState: Invalid blending: ",U);break}else switch(U){case gs:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Sn:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE,i.ONE,i.ONE);break;case Zl:ee("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case $l:ee("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:ee("WebGLState: Invalid blending: ",U);break}w=null,b=null,y=null,T=null,C.set(0,0,0),L=0,m=U,v=ce}return}lt=lt||yt,nt=nt||ct,ft=ft||wt,(yt!==p||lt!==M)&&(i.blendEquationSeparate(ae[yt],ae[lt]),p=yt,M=lt),(ct!==w||wt!==b||nt!==y||ft!==T)&&(i.blendFuncSeparate(Wt[ct],Wt[wt],Wt[nt],Wt[ft]),w=ct,b=wt,y=nt,T=ft),(Xt.equals(C)===!1||ge!==L)&&(i.blendColor(Xt.r,Xt.g,Xt.b,ge),C.copy(Xt),L=ge),m=U,v=!1}function rt(U,yt){U.side===ke?xt(i.CULL_FACE):Q(i.CULL_FACE);let ct=U.side===rn;yt&&(ct=!ct),tt(ct),U.blending===gs&&U.transparent===!1?K(si):K(U.blending,U.blendEquation,U.blendSrc,U.blendDst,U.blendEquationAlpha,U.blendSrcAlpha,U.blendDstAlpha,U.blendColor,U.blendAlpha,U.premultipliedAlpha),a.setFunc(U.depthFunc),a.setTest(U.depthTest),a.setMask(U.depthWrite),r.setMask(U.colorWrite);const wt=U.stencilWrite;o.setTest(wt),wt&&(o.setMask(U.stencilWriteMask),o.setFunc(U.stencilFunc,U.stencilRef,U.stencilFuncMask),o.setOp(U.stencilFail,U.stencilZFail,U.stencilZPass)),bt(U.polygonOffset,U.polygonOffsetFactor,U.polygonOffsetUnits),U.alphaToCoverage===!0?Q(i.SAMPLE_ALPHA_TO_COVERAGE):xt(i.SAMPLE_ALPHA_TO_COVERAGE)}function tt(U){S!==U&&(U?i.frontFace(i.CW):i.frontFace(i.CCW),S=U)}function at(U){U!==Su?(Q(i.CULL_FACE),U!==P&&(U===ql?i.cullFace(i.BACK):U===wu?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):xt(i.CULL_FACE),P=U}function R(U){U!==I&&(H&&i.lineWidth(U),I=U)}function bt(U,yt,ct){U?(Q(i.POLYGON_OFFSET_FILL),(F!==yt||B!==ct)&&(i.polygonOffset(yt,ct),F=yt,B=ct)):xt(i.POLYGON_OFFSET_FILL)}function _t(U){U?Q(i.SCISSOR_TEST):xt(i.SCISSOR_TEST)}function Ut(U){U===void 0&&(U=i.TEXTURE0+N-1),st!==U&&(i.activeTexture(U),st=U)}function ht(U,yt,ct){ct===void 0&&(st===null?ct=i.TEXTURE0+N-1:ct=st);let wt=Z[ct];wt===void 0&&(wt={type:void 0,texture:void 0},Z[ct]=wt),(wt.type!==U||wt.texture!==yt)&&(st!==ct&&(i.activeTexture(ct),st=ct),i.bindTexture(U,yt||Y[U]),wt.type=U,wt.texture=yt)}function A(){const U=Z[st];U!==void 0&&U.type!==void 0&&(i.bindTexture(U.type,null),U.type=void 0,U.texture=void 0)}function _(){try{i.compressedTexImage2D(...arguments)}catch(U){ee("WebGLState:",U)}}function O(){try{i.compressedTexImage3D(...arguments)}catch(U){ee("WebGLState:",U)}}function X(){try{i.texSubImage2D(...arguments)}catch(U){ee("WebGLState:",U)}}function et(){try{i.texSubImage3D(...arguments)}catch(U){ee("WebGLState:",U)}}function q(){try{i.compressedTexSubImage2D(...arguments)}catch(U){ee("WebGLState:",U)}}function Lt(){try{i.compressedTexSubImage3D(...arguments)}catch(U){ee("WebGLState:",U)}}function dt(){try{i.texStorage2D(...arguments)}catch(U){ee("WebGLState:",U)}}function Rt(){try{i.texStorage3D(...arguments)}catch(U){ee("WebGLState:",U)}}function Ht(){try{i.texImage2D(...arguments)}catch(U){ee("WebGLState:",U)}}function ot(){try{i.texImage3D(...arguments)}catch(U){ee("WebGLState:",U)}}function mt(U){It.equals(U)===!1&&(i.scissor(U.x,U.y,U.z,U.w),It.copy(U))}function Pt(U){$t.equals(U)===!1&&(i.viewport(U.x,U.y,U.z,U.w),$t.copy(U))}function Dt(U,yt){let ct=c.get(yt);ct===void 0&&(ct=new WeakMap,c.set(yt,ct));let wt=ct.get(U);wt===void 0&&(wt=i.getUniformBlockIndex(yt,U.name),ct.set(U,wt))}function pt(U,yt){const wt=c.get(yt).get(U);l.get(yt)!==wt&&(i.uniformBlockBinding(yt,wt,U.__bindingPointIndex),l.set(yt,wt))}function Zt(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),a.setReversed(!1),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),h={},st=null,Z={},u={},d=new WeakMap,f=[],g=null,x=!1,m=null,p=null,w=null,b=null,M=null,y=null,T=null,C=new Bt(0,0,0),L=0,v=!1,S=null,P=null,I=null,F=null,B=null,It.set(0,0,i.canvas.width,i.canvas.height),$t.set(0,0,i.canvas.width,i.canvas.height),r.reset(),a.reset(),o.reset()}return{buffers:{color:r,depth:a,stencil:o},enable:Q,disable:xt,bindFramebuffer:Ft,drawBuffers:St,useProgram:jt,setBlending:K,setMaterial:rt,setFlipSided:tt,setCullFace:at,setLineWidth:R,setPolygonOffset:bt,setScissorTest:_t,activeTexture:Ut,bindTexture:ht,unbindTexture:A,compressedTexImage2D:_,compressedTexImage3D:O,texImage2D:Ht,texImage3D:ot,updateUBOMapping:Dt,uniformBlockBinding:pt,texStorage2D:dt,texStorage3D:Rt,texSubImage2D:X,texSubImage3D:et,compressedTexSubImage2D:q,compressedTexSubImage3D:Lt,scissor:mt,viewport:Pt,reset:Zt}}function Rx(i,t,e,n,s,r,a){const o=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new ut,h=new WeakMap;let u;const d=new WeakMap;let f=!1;try{f=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(A,_){return f?new OffscreenCanvas(A,_):Jr("canvas")}function x(A,_,O){let X=1;const et=ht(A);if((et.width>O||et.height>O)&&(X=O/Math.max(et.width,et.height)),X<1)if(typeof HTMLImageElement<"u"&&A instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&A instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&A instanceof ImageBitmap||typeof VideoFrame<"u"&&A instanceof VideoFrame){const q=Math.floor(X*et.width),Lt=Math.floor(X*et.height);u===void 0&&(u=g(q,Lt));const dt=_?g(q,Lt):u;return dt.width=q,dt.height=Lt,dt.getContext("2d").drawImage(A,0,0,q,Lt),Ot("WebGLRenderer: Texture has been resized from ("+et.width+"x"+et.height+") to ("+q+"x"+Lt+")."),dt}else return"data"in A&&Ot("WebGLRenderer: Image in DataTexture is too big ("+et.width+"x"+et.height+")."),A;return A}function m(A){return A.generateMipmaps}function p(A){i.generateMipmap(A)}function w(A){return A.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:A.isWebGL3DRenderTarget?i.TEXTURE_3D:A.isWebGLArrayRenderTarget||A.isCompressedArrayTexture?i.TEXTURE_2D_ARRAY:i.TEXTURE_2D}function b(A,_,O,X,et=!1){if(A!==null){if(i[A]!==void 0)return i[A];Ot("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+A+"'")}let q=_;if(_===i.RED&&(O===i.FLOAT&&(q=i.R32F),O===i.HALF_FLOAT&&(q=i.R16F),O===i.UNSIGNED_BYTE&&(q=i.R8)),_===i.RED_INTEGER&&(O===i.UNSIGNED_BYTE&&(q=i.R8UI),O===i.UNSIGNED_SHORT&&(q=i.R16UI),O===i.UNSIGNED_INT&&(q=i.R32UI),O===i.BYTE&&(q=i.R8I),O===i.SHORT&&(q=i.R16I),O===i.INT&&(q=i.R32I)),_===i.RG&&(O===i.FLOAT&&(q=i.RG32F),O===i.HALF_FLOAT&&(q=i.RG16F),O===i.UNSIGNED_BYTE&&(q=i.RG8)),_===i.RG_INTEGER&&(O===i.UNSIGNED_BYTE&&(q=i.RG8UI),O===i.UNSIGNED_SHORT&&(q=i.RG16UI),O===i.UNSIGNED_INT&&(q=i.RG32UI),O===i.BYTE&&(q=i.RG8I),O===i.SHORT&&(q=i.RG16I),O===i.INT&&(q=i.RG32I)),_===i.RGB_INTEGER&&(O===i.UNSIGNED_BYTE&&(q=i.RGB8UI),O===i.UNSIGNED_SHORT&&(q=i.RGB16UI),O===i.UNSIGNED_INT&&(q=i.RGB32UI),O===i.BYTE&&(q=i.RGB8I),O===i.SHORT&&(q=i.RGB16I),O===i.INT&&(q=i.RGB32I)),_===i.RGBA_INTEGER&&(O===i.UNSIGNED_BYTE&&(q=i.RGBA8UI),O===i.UNSIGNED_SHORT&&(q=i.RGBA16UI),O===i.UNSIGNED_INT&&(q=i.RGBA32UI),O===i.BYTE&&(q=i.RGBA8I),O===i.SHORT&&(q=i.RGBA16I),O===i.INT&&(q=i.RGBA32I)),_===i.RGB&&(O===i.UNSIGNED_INT_5_9_9_9_REV&&(q=i.RGB9_E5),O===i.UNSIGNED_INT_10F_11F_11F_REV&&(q=i.R11F_G11F_B10F)),_===i.RGBA){const Lt=et?$r:ie.getTransfer(X);O===i.FLOAT&&(q=i.RGBA32F),O===i.HALF_FLOAT&&(q=i.RGBA16F),O===i.UNSIGNED_BYTE&&(q=Lt===ue?i.SRGB8_ALPHA8:i.RGBA8),O===i.UNSIGNED_SHORT_4_4_4_4&&(q=i.RGBA4),O===i.UNSIGNED_SHORT_5_5_5_1&&(q=i.RGB5_A1)}return(q===i.R16F||q===i.R32F||q===i.RG16F||q===i.RG32F||q===i.RGBA16F||q===i.RGBA32F)&&t.get("EXT_color_buffer_float"),q}function M(A,_){let O;return A?_===null||_===Yn||_===js?O=i.DEPTH24_STENCIL8:_===Fn?O=i.DEPTH32F_STENCIL8:_===Js&&(O=i.DEPTH24_STENCIL8,Ot("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):_===null||_===Yn||_===js?O=i.DEPTH_COMPONENT24:_===Fn?O=i.DEPTH_COMPONENT32F:_===Js&&(O=i.DEPTH_COMPONENT16),O}function y(A,_){return m(A)===!0||A.isFramebufferTexture&&A.minFilter!==Ve&&A.minFilter!==He?Math.log2(Math.max(_.width,_.height))+1:A.mipmaps!==void 0&&A.mipmaps.length>0?A.mipmaps.length:A.isCompressedTexture&&Array.isArray(A.image)?_.mipmaps.length:1}function T(A){const _=A.target;_.removeEventListener("dispose",T),L(_),_.isVideoTexture&&h.delete(_)}function C(A){const _=A.target;_.removeEventListener("dispose",C),S(_)}function L(A){const _=n.get(A);if(_.__webglInit===void 0)return;const O=A.source,X=d.get(O);if(X){const et=X[_.__cacheKey];et.usedTimes--,et.usedTimes===0&&v(A),Object.keys(X).length===0&&d.delete(O)}n.remove(A)}function v(A){const _=n.get(A);i.deleteTexture(_.__webglTexture);const O=A.source,X=d.get(O);delete X[_.__cacheKey],a.memory.textures--}function S(A){const _=n.get(A);if(A.depthTexture&&(A.depthTexture.dispose(),n.remove(A.depthTexture)),A.isWebGLCubeRenderTarget)for(let X=0;X<6;X++){if(Array.isArray(_.__webglFramebuffer[X]))for(let et=0;et<_.__webglFramebuffer[X].length;et++)i.deleteFramebuffer(_.__webglFramebuffer[X][et]);else i.deleteFramebuffer(_.__webglFramebuffer[X]);_.__webglDepthbuffer&&i.deleteRenderbuffer(_.__webglDepthbuffer[X])}else{if(Array.isArray(_.__webglFramebuffer))for(let X=0;X<_.__webglFramebuffer.length;X++)i.deleteFramebuffer(_.__webglFramebuffer[X]);else i.deleteFramebuffer(_.__webglFramebuffer);if(_.__webglDepthbuffer&&i.deleteRenderbuffer(_.__webglDepthbuffer),_.__webglMultisampledFramebuffer&&i.deleteFramebuffer(_.__webglMultisampledFramebuffer),_.__webglColorRenderbuffer)for(let X=0;X<_.__webglColorRenderbuffer.length;X++)_.__webglColorRenderbuffer[X]&&i.deleteRenderbuffer(_.__webglColorRenderbuffer[X]);_.__webglDepthRenderbuffer&&i.deleteRenderbuffer(_.__webglDepthRenderbuffer)}const O=A.textures;for(let X=0,et=O.length;X<et;X++){const q=n.get(O[X]);q.__webglTexture&&(i.deleteTexture(q.__webglTexture),a.memory.textures--),n.remove(O[X])}n.remove(A)}let P=0;function I(){P=0}function F(){const A=P;return A>=s.maxTextures&&Ot("WebGLTextures: Trying to use "+A+" texture units while this GPU supports only "+s.maxTextures),P+=1,A}function B(A){const _=[];return _.push(A.wrapS),_.push(A.wrapT),_.push(A.wrapR||0),_.push(A.magFilter),_.push(A.minFilter),_.push(A.anisotropy),_.push(A.internalFormat),_.push(A.format),_.push(A.type),_.push(A.generateMipmaps),_.push(A.premultiplyAlpha),_.push(A.flipY),_.push(A.unpackAlignment),_.push(A.colorSpace),_.join()}function N(A,_){const O=n.get(A);if(A.isVideoTexture&&_t(A),A.isRenderTargetTexture===!1&&A.isExternalTexture!==!0&&A.version>0&&O.__version!==A.version){const X=A.image;if(X===null)Ot("WebGLRenderer: Texture marked for update but no image data found.");else if(X.complete===!1)Ot("WebGLRenderer: Texture marked for update but image is incomplete");else{Y(O,A,_);return}}else A.isExternalTexture&&(O.__webglTexture=A.sourceTexture?A.sourceTexture:null);e.bindTexture(i.TEXTURE_2D,O.__webglTexture,i.TEXTURE0+_)}function H(A,_){const O=n.get(A);if(A.isRenderTargetTexture===!1&&A.version>0&&O.__version!==A.version){Y(O,A,_);return}else A.isExternalTexture&&(O.__webglTexture=A.sourceTexture?A.sourceTexture:null);e.bindTexture(i.TEXTURE_2D_ARRAY,O.__webglTexture,i.TEXTURE0+_)}function z(A,_){const O=n.get(A);if(A.isRenderTargetTexture===!1&&A.version>0&&O.__version!==A.version){Y(O,A,_);return}e.bindTexture(i.TEXTURE_3D,O.__webglTexture,i.TEXTURE0+_)}function $(A,_){const O=n.get(A);if(A.isCubeDepthTexture!==!0&&A.version>0&&O.__version!==A.version){Q(O,A,_);return}e.bindTexture(i.TEXTURE_CUBE_MAP,O.__webglTexture,i.TEXTURE0+_)}const st={[vo]:i.REPEAT,[ei]:i.CLAMP_TO_EDGE,[Mo]:i.MIRRORED_REPEAT},Z={[Ve]:i.NEAREST,[Xu]:i.NEAREST_MIPMAP_NEAREST,[hr]:i.NEAREST_MIPMAP_LINEAR,[He]:i.LINEAR,[va]:i.LINEAR_MIPMAP_NEAREST,[ki]:i.LINEAR_MIPMAP_LINEAR},j={[Zu]:i.NEVER,[Qu]:i.ALWAYS,[$u]:i.LESS,[bl]:i.LEQUAL,[Ku]:i.EQUAL,[El]:i.GEQUAL,[Ju]:i.GREATER,[ju]:i.NOTEQUAL};function Ct(A,_){if(_.type===Fn&&t.has("OES_texture_float_linear")===!1&&(_.magFilter===He||_.magFilter===va||_.magFilter===hr||_.magFilter===ki||_.minFilter===He||_.minFilter===va||_.minFilter===hr||_.minFilter===ki)&&Ot("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(A,i.TEXTURE_WRAP_S,st[_.wrapS]),i.texParameteri(A,i.TEXTURE_WRAP_T,st[_.wrapT]),(A===i.TEXTURE_3D||A===i.TEXTURE_2D_ARRAY)&&i.texParameteri(A,i.TEXTURE_WRAP_R,st[_.wrapR]),i.texParameteri(A,i.TEXTURE_MAG_FILTER,Z[_.magFilter]),i.texParameteri(A,i.TEXTURE_MIN_FILTER,Z[_.minFilter]),_.compareFunction&&(i.texParameteri(A,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(A,i.TEXTURE_COMPARE_FUNC,j[_.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(_.magFilter===Ve||_.minFilter!==hr&&_.minFilter!==ki||_.type===Fn&&t.has("OES_texture_float_linear")===!1)return;if(_.anisotropy>1||n.get(_).__currentAnisotropy){const O=t.get("EXT_texture_filter_anisotropic");i.texParameterf(A,O.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(_.anisotropy,s.getMaxAnisotropy())),n.get(_).__currentAnisotropy=_.anisotropy}}}function It(A,_){let O=!1;A.__webglInit===void 0&&(A.__webglInit=!0,_.addEventListener("dispose",T));const X=_.source;let et=d.get(X);et===void 0&&(et={},d.set(X,et));const q=B(_);if(q!==A.__cacheKey){et[q]===void 0&&(et[q]={texture:i.createTexture(),usedTimes:0},a.memory.textures++,O=!0),et[q].usedTimes++;const Lt=et[A.__cacheKey];Lt!==void 0&&(et[A.__cacheKey].usedTimes--,Lt.usedTimes===0&&v(_)),A.__cacheKey=q,A.__webglTexture=et[q].texture}return O}function $t(A,_,O){return Math.floor(Math.floor(A/O)/_)}function te(A,_,O,X){const q=A.updateRanges;if(q.length===0)e.texSubImage2D(i.TEXTURE_2D,0,0,0,_.width,_.height,O,X,_.data);else{q.sort((ot,mt)=>ot.start-mt.start);let Lt=0;for(let ot=1;ot<q.length;ot++){const mt=q[Lt],Pt=q[ot],Dt=mt.start+mt.count,pt=$t(Pt.start,_.width,4),Zt=$t(mt.start,_.width,4);Pt.start<=Dt+1&&pt===Zt&&$t(Pt.start+Pt.count-1,_.width,4)===pt?mt.count=Math.max(mt.count,Pt.start+Pt.count-mt.start):(++Lt,q[Lt]=Pt)}q.length=Lt+1;const dt=i.getParameter(i.UNPACK_ROW_LENGTH),Rt=i.getParameter(i.UNPACK_SKIP_PIXELS),Ht=i.getParameter(i.UNPACK_SKIP_ROWS);i.pixelStorei(i.UNPACK_ROW_LENGTH,_.width);for(let ot=0,mt=q.length;ot<mt;ot++){const Pt=q[ot],Dt=Math.floor(Pt.start/4),pt=Math.ceil(Pt.count/4),Zt=Dt%_.width,U=Math.floor(Dt/_.width),yt=pt,ct=1;i.pixelStorei(i.UNPACK_SKIP_PIXELS,Zt),i.pixelStorei(i.UNPACK_SKIP_ROWS,U),e.texSubImage2D(i.TEXTURE_2D,0,Zt,U,yt,ct,O,X,_.data)}A.clearUpdateRanges(),i.pixelStorei(i.UNPACK_ROW_LENGTH,dt),i.pixelStorei(i.UNPACK_SKIP_PIXELS,Rt),i.pixelStorei(i.UNPACK_SKIP_ROWS,Ht)}}function Y(A,_,O){let X=i.TEXTURE_2D;(_.isDataArrayTexture||_.isCompressedArrayTexture)&&(X=i.TEXTURE_2D_ARRAY),_.isData3DTexture&&(X=i.TEXTURE_3D);const et=It(A,_),q=_.source;e.bindTexture(X,A.__webglTexture,i.TEXTURE0+O);const Lt=n.get(q);if(q.version!==Lt.__version||et===!0){e.activeTexture(i.TEXTURE0+O);const dt=ie.getPrimaries(ie.workingColorSpace),Rt=_.colorSpace===_i?null:ie.getPrimaries(_.colorSpace),Ht=_.colorSpace===_i||dt===Rt?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,_.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,_.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,_.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,Ht);let ot=x(_.image,!1,s.maxTextureSize);ot=Ut(_,ot);const mt=r.convert(_.format,_.colorSpace),Pt=r.convert(_.type);let Dt=b(_.internalFormat,mt,Pt,_.colorSpace,_.isVideoTexture);Ct(X,_);let pt;const Zt=_.mipmaps,U=_.isVideoTexture!==!0,yt=Lt.__version===void 0||et===!0,ct=q.dataReady,wt=y(_,ot);if(_.isDepthTexture)Dt=M(_.format===zi,_.type),yt&&(U?e.texStorage2D(i.TEXTURE_2D,1,Dt,ot.width,ot.height):e.texImage2D(i.TEXTURE_2D,0,Dt,ot.width,ot.height,0,mt,Pt,null));else if(_.isDataTexture)if(Zt.length>0){U&&yt&&e.texStorage2D(i.TEXTURE_2D,wt,Dt,Zt[0].width,Zt[0].height);for(let lt=0,nt=Zt.length;lt<nt;lt++)pt=Zt[lt],U?ct&&e.texSubImage2D(i.TEXTURE_2D,lt,0,0,pt.width,pt.height,mt,Pt,pt.data):e.texImage2D(i.TEXTURE_2D,lt,Dt,pt.width,pt.height,0,mt,Pt,pt.data);_.generateMipmaps=!1}else U?(yt&&e.texStorage2D(i.TEXTURE_2D,wt,Dt,ot.width,ot.height),ct&&te(_,ot,mt,Pt)):e.texImage2D(i.TEXTURE_2D,0,Dt,ot.width,ot.height,0,mt,Pt,ot.data);else if(_.isCompressedTexture)if(_.isCompressedArrayTexture){U&&yt&&e.texStorage3D(i.TEXTURE_2D_ARRAY,wt,Dt,Zt[0].width,Zt[0].height,ot.depth);for(let lt=0,nt=Zt.length;lt<nt;lt++)if(pt=Zt[lt],_.format!==Nn)if(mt!==null)if(U){if(ct)if(_.layerUpdates.size>0){const ft=Pc(pt.width,pt.height,_.format,_.type);for(const Xt of _.layerUpdates){const ge=pt.data.subarray(Xt*ft/pt.data.BYTES_PER_ELEMENT,(Xt+1)*ft/pt.data.BYTES_PER_ELEMENT);e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,lt,0,0,Xt,pt.width,pt.height,1,mt,ge)}_.clearLayerUpdates()}else e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,lt,0,0,0,pt.width,pt.height,ot.depth,mt,pt.data)}else e.compressedTexImage3D(i.TEXTURE_2D_ARRAY,lt,Dt,pt.width,pt.height,ot.depth,0,pt.data,0,0);else Ot("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else U?ct&&e.texSubImage3D(i.TEXTURE_2D_ARRAY,lt,0,0,0,pt.width,pt.height,ot.depth,mt,Pt,pt.data):e.texImage3D(i.TEXTURE_2D_ARRAY,lt,Dt,pt.width,pt.height,ot.depth,0,mt,Pt,pt.data)}else{U&&yt&&e.texStorage2D(i.TEXTURE_2D,wt,Dt,Zt[0].width,Zt[0].height);for(let lt=0,nt=Zt.length;lt<nt;lt++)pt=Zt[lt],_.format!==Nn?mt!==null?U?ct&&e.compressedTexSubImage2D(i.TEXTURE_2D,lt,0,0,pt.width,pt.height,mt,pt.data):e.compressedTexImage2D(i.TEXTURE_2D,lt,Dt,pt.width,pt.height,0,pt.data):Ot("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):U?ct&&e.texSubImage2D(i.TEXTURE_2D,lt,0,0,pt.width,pt.height,mt,Pt,pt.data):e.texImage2D(i.TEXTURE_2D,lt,Dt,pt.width,pt.height,0,mt,Pt,pt.data)}else if(_.isDataArrayTexture)if(U){if(yt&&e.texStorage3D(i.TEXTURE_2D_ARRAY,wt,Dt,ot.width,ot.height,ot.depth),ct)if(_.layerUpdates.size>0){const lt=Pc(ot.width,ot.height,_.format,_.type);for(const nt of _.layerUpdates){const ft=ot.data.subarray(nt*lt/ot.data.BYTES_PER_ELEMENT,(nt+1)*lt/ot.data.BYTES_PER_ELEMENT);e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,nt,ot.width,ot.height,1,mt,Pt,ft)}_.clearLayerUpdates()}else e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,ot.width,ot.height,ot.depth,mt,Pt,ot.data)}else e.texImage3D(i.TEXTURE_2D_ARRAY,0,Dt,ot.width,ot.height,ot.depth,0,mt,Pt,ot.data);else if(_.isData3DTexture)U?(yt&&e.texStorage3D(i.TEXTURE_3D,wt,Dt,ot.width,ot.height,ot.depth),ct&&e.texSubImage3D(i.TEXTURE_3D,0,0,0,0,ot.width,ot.height,ot.depth,mt,Pt,ot.data)):e.texImage3D(i.TEXTURE_3D,0,Dt,ot.width,ot.height,ot.depth,0,mt,Pt,ot.data);else if(_.isFramebufferTexture){if(yt)if(U)e.texStorage2D(i.TEXTURE_2D,wt,Dt,ot.width,ot.height);else{let lt=ot.width,nt=ot.height;for(let ft=0;ft<wt;ft++)e.texImage2D(i.TEXTURE_2D,ft,Dt,lt,nt,0,mt,Pt,null),lt>>=1,nt>>=1}}else if(Zt.length>0){if(U&&yt){const lt=ht(Zt[0]);e.texStorage2D(i.TEXTURE_2D,wt,Dt,lt.width,lt.height)}for(let lt=0,nt=Zt.length;lt<nt;lt++)pt=Zt[lt],U?ct&&e.texSubImage2D(i.TEXTURE_2D,lt,0,0,mt,Pt,pt):e.texImage2D(i.TEXTURE_2D,lt,Dt,mt,Pt,pt);_.generateMipmaps=!1}else if(U){if(yt){const lt=ht(ot);e.texStorage2D(i.TEXTURE_2D,wt,Dt,lt.width,lt.height)}ct&&e.texSubImage2D(i.TEXTURE_2D,0,0,0,mt,Pt,ot)}else e.texImage2D(i.TEXTURE_2D,0,Dt,mt,Pt,ot);m(_)&&p(X),Lt.__version=q.version,_.onUpdate&&_.onUpdate(_)}A.__version=_.version}function Q(A,_,O){if(_.image.length!==6)return;const X=It(A,_),et=_.source;e.bindTexture(i.TEXTURE_CUBE_MAP,A.__webglTexture,i.TEXTURE0+O);const q=n.get(et);if(et.version!==q.__version||X===!0){e.activeTexture(i.TEXTURE0+O);const Lt=ie.getPrimaries(ie.workingColorSpace),dt=_.colorSpace===_i?null:ie.getPrimaries(_.colorSpace),Rt=_.colorSpace===_i||Lt===dt?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,_.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,_.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,_.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,Rt);const Ht=_.isCompressedTexture||_.image[0].isCompressedTexture,ot=_.image[0]&&_.image[0].isDataTexture,mt=[];for(let nt=0;nt<6;nt++)!Ht&&!ot?mt[nt]=x(_.image[nt],!0,s.maxCubemapSize):mt[nt]=ot?_.image[nt].image:_.image[nt],mt[nt]=Ut(_,mt[nt]);const Pt=mt[0],Dt=r.convert(_.format,_.colorSpace),pt=r.convert(_.type),Zt=b(_.internalFormat,Dt,pt,_.colorSpace),U=_.isVideoTexture!==!0,yt=q.__version===void 0||X===!0,ct=et.dataReady;let wt=y(_,Pt);Ct(i.TEXTURE_CUBE_MAP,_);let lt;if(Ht){U&&yt&&e.texStorage2D(i.TEXTURE_CUBE_MAP,wt,Zt,Pt.width,Pt.height);for(let nt=0;nt<6;nt++){lt=mt[nt].mipmaps;for(let ft=0;ft<lt.length;ft++){const Xt=lt[ft];_.format!==Nn?Dt!==null?U?ct&&e.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+nt,ft,0,0,Xt.width,Xt.height,Dt,Xt.data):e.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+nt,ft,Zt,Xt.width,Xt.height,0,Xt.data):Ot("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):U?ct&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+nt,ft,0,0,Xt.width,Xt.height,Dt,pt,Xt.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+nt,ft,Zt,Xt.width,Xt.height,0,Dt,pt,Xt.data)}}}else{if(lt=_.mipmaps,U&&yt){lt.length>0&&wt++;const nt=ht(mt[0]);e.texStorage2D(i.TEXTURE_CUBE_MAP,wt,Zt,nt.width,nt.height)}for(let nt=0;nt<6;nt++)if(ot){U?ct&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+nt,0,0,0,mt[nt].width,mt[nt].height,Dt,pt,mt[nt].data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+nt,0,Zt,mt[nt].width,mt[nt].height,0,Dt,pt,mt[nt].data);for(let ft=0;ft<lt.length;ft++){const ge=lt[ft].image[nt].image;U?ct&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+nt,ft+1,0,0,ge.width,ge.height,Dt,pt,ge.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+nt,ft+1,Zt,ge.width,ge.height,0,Dt,pt,ge.data)}}else{U?ct&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+nt,0,0,0,Dt,pt,mt[nt]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+nt,0,Zt,Dt,pt,mt[nt]);for(let ft=0;ft<lt.length;ft++){const Xt=lt[ft];U?ct&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+nt,ft+1,0,0,Dt,pt,Xt.image[nt]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+nt,ft+1,Zt,Dt,pt,Xt.image[nt])}}}m(_)&&p(i.TEXTURE_CUBE_MAP),q.__version=et.version,_.onUpdate&&_.onUpdate(_)}A.__version=_.version}function xt(A,_,O,X,et,q){const Lt=r.convert(O.format,O.colorSpace),dt=r.convert(O.type),Rt=b(O.internalFormat,Lt,dt,O.colorSpace),Ht=n.get(_),ot=n.get(O);if(ot.__renderTarget=_,!Ht.__hasExternalTextures){const mt=Math.max(1,_.width>>q),Pt=Math.max(1,_.height>>q);et===i.TEXTURE_3D||et===i.TEXTURE_2D_ARRAY?e.texImage3D(et,q,Rt,mt,Pt,_.depth,0,Lt,dt,null):e.texImage2D(et,q,Rt,mt,Pt,0,Lt,dt,null)}e.bindFramebuffer(i.FRAMEBUFFER,A),bt(_)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,X,et,ot.__webglTexture,0,R(_)):(et===i.TEXTURE_2D||et>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&et<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,X,et,ot.__webglTexture,q),e.bindFramebuffer(i.FRAMEBUFFER,null)}function Ft(A,_,O){if(i.bindRenderbuffer(i.RENDERBUFFER,A),_.depthBuffer){const X=_.depthTexture,et=X&&X.isDepthTexture?X.type:null,q=M(_.stencilBuffer,et),Lt=_.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;bt(_)?o.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,R(_),q,_.width,_.height):O?i.renderbufferStorageMultisample(i.RENDERBUFFER,R(_),q,_.width,_.height):i.renderbufferStorage(i.RENDERBUFFER,q,_.width,_.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,Lt,i.RENDERBUFFER,A)}else{const X=_.textures;for(let et=0;et<X.length;et++){const q=X[et],Lt=r.convert(q.format,q.colorSpace),dt=r.convert(q.type),Rt=b(q.internalFormat,Lt,dt,q.colorSpace);bt(_)?o.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,R(_),Rt,_.width,_.height):O?i.renderbufferStorageMultisample(i.RENDERBUFFER,R(_),Rt,_.width,_.height):i.renderbufferStorage(i.RENDERBUFFER,Rt,_.width,_.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function St(A,_,O){const X=_.isWebGLCubeRenderTarget===!0;if(e.bindFramebuffer(i.FRAMEBUFFER,A),!(_.depthTexture&&_.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const et=n.get(_.depthTexture);if(et.__renderTarget=_,(!et.__webglTexture||_.depthTexture.image.width!==_.width||_.depthTexture.image.height!==_.height)&&(_.depthTexture.image.width=_.width,_.depthTexture.image.height=_.height,_.depthTexture.needsUpdate=!0),X){if(et.__webglInit===void 0&&(et.__webglInit=!0,_.depthTexture.addEventListener("dispose",T)),et.__webglTexture===void 0){et.__webglTexture=i.createTexture(),e.bindTexture(i.TEXTURE_CUBE_MAP,et.__webglTexture),Ct(i.TEXTURE_CUBE_MAP,_.depthTexture);const Ht=r.convert(_.depthTexture.format),ot=r.convert(_.depthTexture.type);let mt;_.depthTexture.format===li?mt=i.DEPTH_COMPONENT24:_.depthTexture.format===zi&&(mt=i.DEPTH24_STENCIL8);for(let Pt=0;Pt<6;Pt++)i.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Pt,0,mt,_.width,_.height,0,Ht,ot,null)}}else N(_.depthTexture,0);const q=et.__webglTexture,Lt=R(_),dt=X?i.TEXTURE_CUBE_MAP_POSITIVE_X+O:i.TEXTURE_2D,Rt=_.depthTexture.format===zi?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;if(_.depthTexture.format===li)bt(_)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,Rt,dt,q,0,Lt):i.framebufferTexture2D(i.FRAMEBUFFER,Rt,dt,q,0);else if(_.depthTexture.format===zi)bt(_)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,Rt,dt,q,0,Lt):i.framebufferTexture2D(i.FRAMEBUFFER,Rt,dt,q,0);else throw new Error("Unknown depthTexture format")}function jt(A){const _=n.get(A),O=A.isWebGLCubeRenderTarget===!0;if(_.__boundDepthTexture!==A.depthTexture){const X=A.depthTexture;if(_.__depthDisposeCallback&&_.__depthDisposeCallback(),X){const et=()=>{delete _.__boundDepthTexture,delete _.__depthDisposeCallback,X.removeEventListener("dispose",et)};X.addEventListener("dispose",et),_.__depthDisposeCallback=et}_.__boundDepthTexture=X}if(A.depthTexture&&!_.__autoAllocateDepthBuffer)if(O)for(let X=0;X<6;X++)St(_.__webglFramebuffer[X],A,X);else{const X=A.texture.mipmaps;X&&X.length>0?St(_.__webglFramebuffer[0],A,0):St(_.__webglFramebuffer,A,0)}else if(O){_.__webglDepthbuffer=[];for(let X=0;X<6;X++)if(e.bindFramebuffer(i.FRAMEBUFFER,_.__webglFramebuffer[X]),_.__webglDepthbuffer[X]===void 0)_.__webglDepthbuffer[X]=i.createRenderbuffer(),Ft(_.__webglDepthbuffer[X],A,!1);else{const et=A.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,q=_.__webglDepthbuffer[X];i.bindRenderbuffer(i.RENDERBUFFER,q),i.framebufferRenderbuffer(i.FRAMEBUFFER,et,i.RENDERBUFFER,q)}}else{const X=A.texture.mipmaps;if(X&&X.length>0?e.bindFramebuffer(i.FRAMEBUFFER,_.__webglFramebuffer[0]):e.bindFramebuffer(i.FRAMEBUFFER,_.__webglFramebuffer),_.__webglDepthbuffer===void 0)_.__webglDepthbuffer=i.createRenderbuffer(),Ft(_.__webglDepthbuffer,A,!1);else{const et=A.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,q=_.__webglDepthbuffer;i.bindRenderbuffer(i.RENDERBUFFER,q),i.framebufferRenderbuffer(i.FRAMEBUFFER,et,i.RENDERBUFFER,q)}}e.bindFramebuffer(i.FRAMEBUFFER,null)}function ae(A,_,O){const X=n.get(A);_!==void 0&&xt(X.__webglFramebuffer,A,A.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),O!==void 0&&jt(A)}function Wt(A){const _=A.texture,O=n.get(A),X=n.get(_);A.addEventListener("dispose",C);const et=A.textures,q=A.isWebGLCubeRenderTarget===!0,Lt=et.length>1;if(Lt||(X.__webglTexture===void 0&&(X.__webglTexture=i.createTexture()),X.__version=_.version,a.memory.textures++),q){O.__webglFramebuffer=[];for(let dt=0;dt<6;dt++)if(_.mipmaps&&_.mipmaps.length>0){O.__webglFramebuffer[dt]=[];for(let Rt=0;Rt<_.mipmaps.length;Rt++)O.__webglFramebuffer[dt][Rt]=i.createFramebuffer()}else O.__webglFramebuffer[dt]=i.createFramebuffer()}else{if(_.mipmaps&&_.mipmaps.length>0){O.__webglFramebuffer=[];for(let dt=0;dt<_.mipmaps.length;dt++)O.__webglFramebuffer[dt]=i.createFramebuffer()}else O.__webglFramebuffer=i.createFramebuffer();if(Lt)for(let dt=0,Rt=et.length;dt<Rt;dt++){const Ht=n.get(et[dt]);Ht.__webglTexture===void 0&&(Ht.__webglTexture=i.createTexture(),a.memory.textures++)}if(A.samples>0&&bt(A)===!1){O.__webglMultisampledFramebuffer=i.createFramebuffer(),O.__webglColorRenderbuffer=[],e.bindFramebuffer(i.FRAMEBUFFER,O.__webglMultisampledFramebuffer);for(let dt=0;dt<et.length;dt++){const Rt=et[dt];O.__webglColorRenderbuffer[dt]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,O.__webglColorRenderbuffer[dt]);const Ht=r.convert(Rt.format,Rt.colorSpace),ot=r.convert(Rt.type),mt=b(Rt.internalFormat,Ht,ot,Rt.colorSpace,A.isXRRenderTarget===!0),Pt=R(A);i.renderbufferStorageMultisample(i.RENDERBUFFER,Pt,mt,A.width,A.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+dt,i.RENDERBUFFER,O.__webglColorRenderbuffer[dt])}i.bindRenderbuffer(i.RENDERBUFFER,null),A.depthBuffer&&(O.__webglDepthRenderbuffer=i.createRenderbuffer(),Ft(O.__webglDepthRenderbuffer,A,!0)),e.bindFramebuffer(i.FRAMEBUFFER,null)}}if(q){e.bindTexture(i.TEXTURE_CUBE_MAP,X.__webglTexture),Ct(i.TEXTURE_CUBE_MAP,_);for(let dt=0;dt<6;dt++)if(_.mipmaps&&_.mipmaps.length>0)for(let Rt=0;Rt<_.mipmaps.length;Rt++)xt(O.__webglFramebuffer[dt][Rt],A,_,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+dt,Rt);else xt(O.__webglFramebuffer[dt],A,_,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+dt,0);m(_)&&p(i.TEXTURE_CUBE_MAP),e.unbindTexture()}else if(Lt){for(let dt=0,Rt=et.length;dt<Rt;dt++){const Ht=et[dt],ot=n.get(Ht);let mt=i.TEXTURE_2D;(A.isWebGL3DRenderTarget||A.isWebGLArrayRenderTarget)&&(mt=A.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),e.bindTexture(mt,ot.__webglTexture),Ct(mt,Ht),xt(O.__webglFramebuffer,A,Ht,i.COLOR_ATTACHMENT0+dt,mt,0),m(Ht)&&p(mt)}e.unbindTexture()}else{let dt=i.TEXTURE_2D;if((A.isWebGL3DRenderTarget||A.isWebGLArrayRenderTarget)&&(dt=A.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),e.bindTexture(dt,X.__webglTexture),Ct(dt,_),_.mipmaps&&_.mipmaps.length>0)for(let Rt=0;Rt<_.mipmaps.length;Rt++)xt(O.__webglFramebuffer[Rt],A,_,i.COLOR_ATTACHMENT0,dt,Rt);else xt(O.__webglFramebuffer,A,_,i.COLOR_ATTACHMENT0,dt,0);m(_)&&p(dt),e.unbindTexture()}A.depthBuffer&&jt(A)}function K(A){const _=A.textures;for(let O=0,X=_.length;O<X;O++){const et=_[O];if(m(et)){const q=w(A),Lt=n.get(et).__webglTexture;e.bindTexture(q,Lt),p(q),e.unbindTexture()}}}const rt=[],tt=[];function at(A){if(A.samples>0){if(bt(A)===!1){const _=A.textures,O=A.width,X=A.height;let et=i.COLOR_BUFFER_BIT;const q=A.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,Lt=n.get(A),dt=_.length>1;if(dt)for(let Ht=0;Ht<_.length;Ht++)e.bindFramebuffer(i.FRAMEBUFFER,Lt.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Ht,i.RENDERBUFFER,null),e.bindFramebuffer(i.FRAMEBUFFER,Lt.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+Ht,i.TEXTURE_2D,null,0);e.bindFramebuffer(i.READ_FRAMEBUFFER,Lt.__webglMultisampledFramebuffer);const Rt=A.texture.mipmaps;Rt&&Rt.length>0?e.bindFramebuffer(i.DRAW_FRAMEBUFFER,Lt.__webglFramebuffer[0]):e.bindFramebuffer(i.DRAW_FRAMEBUFFER,Lt.__webglFramebuffer);for(let Ht=0;Ht<_.length;Ht++){if(A.resolveDepthBuffer&&(A.depthBuffer&&(et|=i.DEPTH_BUFFER_BIT),A.stencilBuffer&&A.resolveStencilBuffer&&(et|=i.STENCIL_BUFFER_BIT)),dt){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,Lt.__webglColorRenderbuffer[Ht]);const ot=n.get(_[Ht]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,ot,0)}i.blitFramebuffer(0,0,O,X,0,0,O,X,et,i.NEAREST),l===!0&&(rt.length=0,tt.length=0,rt.push(i.COLOR_ATTACHMENT0+Ht),A.depthBuffer&&A.resolveDepthBuffer===!1&&(rt.push(q),tt.push(q),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,tt)),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,rt))}if(e.bindFramebuffer(i.READ_FRAMEBUFFER,null),e.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),dt)for(let Ht=0;Ht<_.length;Ht++){e.bindFramebuffer(i.FRAMEBUFFER,Lt.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Ht,i.RENDERBUFFER,Lt.__webglColorRenderbuffer[Ht]);const ot=n.get(_[Ht]).__webglTexture;e.bindFramebuffer(i.FRAMEBUFFER,Lt.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+Ht,i.TEXTURE_2D,ot,0)}e.bindFramebuffer(i.DRAW_FRAMEBUFFER,Lt.__webglMultisampledFramebuffer)}else if(A.depthBuffer&&A.resolveDepthBuffer===!1&&l){const _=A.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[_])}}}function R(A){return Math.min(s.maxSamples,A.samples)}function bt(A){const _=n.get(A);return A.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&_.__useRenderToTexture!==!1}function _t(A){const _=a.render.frame;h.get(A)!==_&&(h.set(A,_),A.update())}function Ut(A,_){const O=A.colorSpace,X=A.format,et=A.type;return A.isCompressedTexture===!0||A.isVideoTexture===!0||O!==ys&&O!==_i&&(ie.getTransfer(O)===ue?(X!==Nn||et!==fn)&&Ot("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):ee("WebGLTextures: Unsupported texture color space:",O)),_}function ht(A){return typeof HTMLImageElement<"u"&&A instanceof HTMLImageElement?(c.width=A.naturalWidth||A.width,c.height=A.naturalHeight||A.height):typeof VideoFrame<"u"&&A instanceof VideoFrame?(c.width=A.displayWidth,c.height=A.displayHeight):(c.width=A.width,c.height=A.height),c}this.allocateTextureUnit=F,this.resetTextureUnits=I,this.setTexture2D=N,this.setTexture2DArray=H,this.setTexture3D=z,this.setTextureCube=$,this.rebindTextures=ae,this.setupRenderTarget=Wt,this.updateRenderTargetMipmap=K,this.updateMultisampleRenderTarget=at,this.setupDepthRenderbuffer=jt,this.setupFrameBufferTexture=xt,this.useMultisampledRTT=bt,this.isReversedDepthBuffer=function(){return e.buffers.depth.getReversed()}}function Px(i,t){function e(n,s=_i){let r;const a=ie.getTransfer(s);if(n===fn)return i.UNSIGNED_BYTE;if(n===_l)return i.UNSIGNED_SHORT_4_4_4_4;if(n===vl)return i.UNSIGNED_SHORT_5_5_5_1;if(n===vh)return i.UNSIGNED_INT_5_9_9_9_REV;if(n===Mh)return i.UNSIGNED_INT_10F_11F_11F_REV;if(n===xh)return i.BYTE;if(n===_h)return i.SHORT;if(n===Js)return i.UNSIGNED_SHORT;if(n===xl)return i.INT;if(n===Yn)return i.UNSIGNED_INT;if(n===Fn)return i.FLOAT;if(n===oi)return i.HALF_FLOAT;if(n===yh)return i.ALPHA;if(n===Sh)return i.RGB;if(n===Nn)return i.RGBA;if(n===li)return i.DEPTH_COMPONENT;if(n===zi)return i.DEPTH_STENCIL;if(n===Ml)return i.RED;if(n===yl)return i.RED_INTEGER;if(n===Ms)return i.RG;if(n===Sl)return i.RG_INTEGER;if(n===wl)return i.RGBA_INTEGER;if(n===Gr||n===Vr||n===Wr||n===Xr)if(a===ue)if(r=t.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(n===Gr)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===Vr)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===Wr)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===Xr)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=t.get("WEBGL_compressed_texture_s3tc"),r!==null){if(n===Gr)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===Vr)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===Wr)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===Xr)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===yo||n===So||n===wo||n===bo)if(r=t.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(n===yo)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===So)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===wo)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===bo)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===Eo||n===To||n===Co||n===Ao||n===Ro||n===Po||n===Io)if(r=t.get("WEBGL_compressed_texture_etc"),r!==null){if(n===Eo||n===To)return a===ue?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(n===Co)return a===ue?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC;if(n===Ao)return r.COMPRESSED_R11_EAC;if(n===Ro)return r.COMPRESSED_SIGNED_R11_EAC;if(n===Po)return r.COMPRESSED_RG11_EAC;if(n===Io)return r.COMPRESSED_SIGNED_RG11_EAC}else return null;if(n===Lo||n===Do||n===Fo||n===No||n===Uo||n===Oo||n===Bo||n===ko||n===zo||n===Ho||n===Go||n===Vo||n===Wo||n===Xo)if(r=t.get("WEBGL_compressed_texture_astc"),r!==null){if(n===Lo)return a===ue?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===Do)return a===ue?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===Fo)return a===ue?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===No)return a===ue?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===Uo)return a===ue?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===Oo)return a===ue?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===Bo)return a===ue?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===ko)return a===ue?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===zo)return a===ue?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===Ho)return a===ue?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===Go)return a===ue?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===Vo)return a===ue?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===Wo)return a===ue?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===Xo)return a===ue?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===Yo||n===qo||n===Zo)if(r=t.get("EXT_texture_compression_bptc"),r!==null){if(n===Yo)return a===ue?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===qo)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===Zo)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===$o||n===Ko||n===Jo||n===jo)if(r=t.get("EXT_texture_compression_rgtc"),r!==null){if(n===$o)return r.COMPRESSED_RED_RGTC1_EXT;if(n===Ko)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===Jo)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===jo)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===js?i.UNSIGNED_INT_24_8:i[n]!==void 0?i[n]:null}return{convert:e}}const Ix=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,Lx=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;class Dx{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e){if(this.texture===null){const n=new Uh(t.texture);(t.depthNear!==e.depthNear||t.depthFar!==e.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=n}}getMesh(t){if(this.texture!==null&&this.mesh===null){const e=t.cameras[0].viewport,n=new En({vertexShader:Ix,fragmentShader:Lx,uniforms:{depthColor:{value:this.texture},depthWidth:{value:e.z},depthHeight:{value:e.w}}});this.mesh=new it(new Ts(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class Fx extends Es{constructor(t,e){super();const n=this;let s=null,r=1,a=null,o="local-floor",l=1,c=null,h=null,u=null,d=null,f=null,g=null;const x=typeof XRWebGLBinding<"u",m=new Dx,p={},w=e.getContextAttributes();let b=null,M=null;const y=[],T=[],C=new ut;let L=null;const v=new Mn;v.viewport=new Ee;const S=new Mn;S.viewport=new Ee;const P=[v,S],I=new Gf;let F=null,B=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(Y){let Q=y[Y];return Q===void 0&&(Q=new za,y[Y]=Q),Q.getTargetRaySpace()},this.getControllerGrip=function(Y){let Q=y[Y];return Q===void 0&&(Q=new za,y[Y]=Q),Q.getGripSpace()},this.getHand=function(Y){let Q=y[Y];return Q===void 0&&(Q=new za,y[Y]=Q),Q.getHandSpace()};function N(Y){const Q=T.indexOf(Y.inputSource);if(Q===-1)return;const xt=y[Q];xt!==void 0&&(xt.update(Y.inputSource,Y.frame,c||a),xt.dispatchEvent({type:Y.type,data:Y.inputSource}))}function H(){s.removeEventListener("select",N),s.removeEventListener("selectstart",N),s.removeEventListener("selectend",N),s.removeEventListener("squeeze",N),s.removeEventListener("squeezestart",N),s.removeEventListener("squeezeend",N),s.removeEventListener("end",H),s.removeEventListener("inputsourceschange",z);for(let Y=0;Y<y.length;Y++){const Q=T[Y];Q!==null&&(T[Y]=null,y[Y].disconnect(Q))}F=null,B=null,m.reset();for(const Y in p)delete p[Y];t.setRenderTarget(b),f=null,d=null,u=null,s=null,M=null,te.stop(),n.isPresenting=!1,t.setPixelRatio(L),t.setSize(C.width,C.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(Y){r=Y,n.isPresenting===!0&&Ot("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(Y){o=Y,n.isPresenting===!0&&Ot("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||a},this.setReferenceSpace=function(Y){c=Y},this.getBaseLayer=function(){return d!==null?d:f},this.getBinding=function(){return u===null&&x&&(u=new XRWebGLBinding(s,e)),u},this.getFrame=function(){return g},this.getSession=function(){return s},this.setSession=async function(Y){if(s=Y,s!==null){if(b=t.getRenderTarget(),s.addEventListener("select",N),s.addEventListener("selectstart",N),s.addEventListener("selectend",N),s.addEventListener("squeeze",N),s.addEventListener("squeezestart",N),s.addEventListener("squeezeend",N),s.addEventListener("end",H),s.addEventListener("inputsourceschange",z),w.xrCompatible!==!0&&await e.makeXRCompatible(),L=t.getPixelRatio(),t.getSize(C),x&&"createProjectionLayer"in XRWebGLBinding.prototype){let xt=null,Ft=null,St=null;w.depth&&(St=w.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,xt=w.stencil?zi:li,Ft=w.stencil?js:Yn);const jt={colorFormat:e.RGBA8,depthFormat:St,scaleFactor:r};u=this.getBinding(),d=u.createProjectionLayer(jt),s.updateRenderState({layers:[d]}),t.setPixelRatio(1),t.setSize(d.textureWidth,d.textureHeight,!1),M=new Xn(d.textureWidth,d.textureHeight,{format:Nn,type:fn,depthTexture:new er(d.textureWidth,d.textureHeight,Ft,void 0,void 0,void 0,void 0,void 0,void 0,xt),stencilBuffer:w.stencil,colorSpace:t.outputColorSpace,samples:w.antialias?4:0,resolveDepthBuffer:d.ignoreDepthValues===!1,resolveStencilBuffer:d.ignoreDepthValues===!1})}else{const xt={antialias:w.antialias,alpha:!0,depth:w.depth,stencil:w.stencil,framebufferScaleFactor:r};f=new XRWebGLLayer(s,e,xt),s.updateRenderState({baseLayer:f}),t.setPixelRatio(1),t.setSize(f.framebufferWidth,f.framebufferHeight,!1),M=new Xn(f.framebufferWidth,f.framebufferHeight,{format:Nn,type:fn,colorSpace:t.outputColorSpace,stencilBuffer:w.stencil,resolveDepthBuffer:f.ignoreDepthValues===!1,resolveStencilBuffer:f.ignoreDepthValues===!1})}M.isXRRenderTarget=!0,this.setFoveation(l),c=null,a=await s.requestReferenceSpace(o),te.setContext(s),te.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return m.getDepthTexture()};function z(Y){for(let Q=0;Q<Y.removed.length;Q++){const xt=Y.removed[Q],Ft=T.indexOf(xt);Ft>=0&&(T[Ft]=null,y[Ft].disconnect(xt))}for(let Q=0;Q<Y.added.length;Q++){const xt=Y.added[Q];let Ft=T.indexOf(xt);if(Ft===-1){for(let jt=0;jt<y.length;jt++)if(jt>=T.length){T.push(xt),Ft=jt;break}else if(T[jt]===null){T[jt]=xt,Ft=jt;break}if(Ft===-1)break}const St=y[Ft];St&&St.connect(xt)}}const $=new D,st=new D;function Z(Y,Q,xt){$.setFromMatrixPosition(Q.matrixWorld),st.setFromMatrixPosition(xt.matrixWorld);const Ft=$.distanceTo(st),St=Q.projectionMatrix.elements,jt=xt.projectionMatrix.elements,ae=St[14]/(St[10]-1),Wt=St[14]/(St[10]+1),K=(St[9]+1)/St[5],rt=(St[9]-1)/St[5],tt=(St[8]-1)/St[0],at=(jt[8]+1)/jt[0],R=ae*tt,bt=ae*at,_t=Ft/(-tt+at),Ut=_t*-tt;if(Q.matrixWorld.decompose(Y.position,Y.quaternion,Y.scale),Y.translateX(Ut),Y.translateZ(_t),Y.matrixWorld.compose(Y.position,Y.quaternion,Y.scale),Y.matrixWorldInverse.copy(Y.matrixWorld).invert(),St[10]===-1)Y.projectionMatrix.copy(Q.projectionMatrix),Y.projectionMatrixInverse.copy(Q.projectionMatrixInverse);else{const ht=ae+_t,A=Wt+_t,_=R-Ut,O=bt+(Ft-Ut),X=K*Wt/A*ht,et=rt*Wt/A*ht;Y.projectionMatrix.makePerspective(_,O,X,et,ht,A),Y.projectionMatrixInverse.copy(Y.projectionMatrix).invert()}}function j(Y,Q){Q===null?Y.matrixWorld.copy(Y.matrix):Y.matrixWorld.multiplyMatrices(Q.matrixWorld,Y.matrix),Y.matrixWorldInverse.copy(Y.matrixWorld).invert()}this.updateCamera=function(Y){if(s===null)return;let Q=Y.near,xt=Y.far;m.texture!==null&&(m.depthNear>0&&(Q=m.depthNear),m.depthFar>0&&(xt=m.depthFar)),I.near=S.near=v.near=Q,I.far=S.far=v.far=xt,(F!==I.near||B!==I.far)&&(s.updateRenderState({depthNear:I.near,depthFar:I.far}),F=I.near,B=I.far),I.layers.mask=Y.layers.mask|6,v.layers.mask=I.layers.mask&3,S.layers.mask=I.layers.mask&5;const Ft=Y.parent,St=I.cameras;j(I,Ft);for(let jt=0;jt<St.length;jt++)j(St[jt],Ft);St.length===2?Z(I,v,S):I.projectionMatrix.copy(v.projectionMatrix),Ct(Y,I,Ft)};function Ct(Y,Q,xt){xt===null?Y.matrix.copy(Q.matrixWorld):(Y.matrix.copy(xt.matrixWorld),Y.matrix.invert(),Y.matrix.multiply(Q.matrixWorld)),Y.matrix.decompose(Y.position,Y.quaternion,Y.scale),Y.updateMatrixWorld(!0),Y.projectionMatrix.copy(Q.projectionMatrix),Y.projectionMatrixInverse.copy(Q.projectionMatrixInverse),Y.isPerspectiveCamera&&(Y.fov=tr*2*Math.atan(1/Y.projectionMatrix.elements[5]),Y.zoom=1)}this.getCamera=function(){return I},this.getFoveation=function(){if(!(d===null&&f===null))return l},this.setFoveation=function(Y){l=Y,d!==null&&(d.fixedFoveation=Y),f!==null&&f.fixedFoveation!==void 0&&(f.fixedFoveation=Y)},this.hasDepthSensing=function(){return m.texture!==null},this.getDepthSensingMesh=function(){return m.getMesh(I)},this.getCameraTexture=function(Y){return p[Y]};let It=null;function $t(Y,Q){if(h=Q.getViewerPose(c||a),g=Q,h!==null){const xt=h.views;f!==null&&(t.setRenderTargetFramebuffer(M,f.framebuffer),t.setRenderTarget(M));let Ft=!1;xt.length!==I.cameras.length&&(I.cameras.length=0,Ft=!0);for(let Wt=0;Wt<xt.length;Wt++){const K=xt[Wt];let rt=null;if(f!==null)rt=f.getViewport(K);else{const at=u.getViewSubImage(d,K);rt=at.viewport,Wt===0&&(t.setRenderTargetTextures(M,at.colorTexture,at.depthStencilTexture),t.setRenderTarget(M))}let tt=P[Wt];tt===void 0&&(tt=new Mn,tt.layers.enable(Wt),tt.viewport=new Ee,P[Wt]=tt),tt.matrix.fromArray(K.transform.matrix),tt.matrix.decompose(tt.position,tt.quaternion,tt.scale),tt.projectionMatrix.fromArray(K.projectionMatrix),tt.projectionMatrixInverse.copy(tt.projectionMatrix).invert(),tt.viewport.set(rt.x,rt.y,rt.width,rt.height),Wt===0&&(I.matrix.copy(tt.matrix),I.matrix.decompose(I.position,I.quaternion,I.scale)),Ft===!0&&I.cameras.push(tt)}const St=s.enabledFeatures;if(St&&St.includes("depth-sensing")&&s.depthUsage=="gpu-optimized"&&x){u=n.getBinding();const Wt=u.getDepthInformation(xt[0]);Wt&&Wt.isValid&&Wt.texture&&m.init(Wt,s.renderState)}if(St&&St.includes("camera-access")&&x){t.state.unbindTexture(),u=n.getBinding();for(let Wt=0;Wt<xt.length;Wt++){const K=xt[Wt].camera;if(K){let rt=p[K];rt||(rt=new Uh,p[K]=rt);const tt=u.getCameraImage(K);rt.sourceTexture=tt}}}}for(let xt=0;xt<y.length;xt++){const Ft=T[xt],St=y[xt];Ft!==null&&St!==void 0&&St.update(Ft,Q,c||a)}It&&It(Y,Q),Q.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:Q}),g=null}const te=new Zh;te.setAnimationLoop($t),this.setAnimationLoop=function(Y){It=Y},this.dispose=function(){}}}const Ni=new Ne,Nx=new Qt;function Ux(i,t){function e(m,p){m.matrixAutoUpdate===!0&&m.updateMatrix(),p.value.copy(m.matrix)}function n(m,p){p.color.getRGB(m.fogColor.value,Rh(i)),p.isFog?(m.fogNear.value=p.near,m.fogFar.value=p.far):p.isFogExp2&&(m.fogDensity.value=p.density)}function s(m,p,w,b,M){p.isMeshBasicMaterial||p.isMeshLambertMaterial?r(m,p):p.isMeshToonMaterial?(r(m,p),u(m,p)):p.isMeshPhongMaterial?(r(m,p),h(m,p)):p.isMeshStandardMaterial?(r(m,p),d(m,p),p.isMeshPhysicalMaterial&&f(m,p,M)):p.isMeshMatcapMaterial?(r(m,p),g(m,p)):p.isMeshDepthMaterial?r(m,p):p.isMeshDistanceMaterial?(r(m,p),x(m,p)):p.isMeshNormalMaterial?r(m,p):p.isLineBasicMaterial?(a(m,p),p.isLineDashedMaterial&&o(m,p)):p.isPointsMaterial?l(m,p,w,b):p.isSpriteMaterial?c(m,p):p.isShadowMaterial?(m.color.value.copy(p.color),m.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function r(m,p){m.opacity.value=p.opacity,p.color&&m.diffuse.value.copy(p.color),p.emissive&&m.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(m.map.value=p.map,e(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,e(p.alphaMap,m.alphaMapTransform)),p.bumpMap&&(m.bumpMap.value=p.bumpMap,e(p.bumpMap,m.bumpMapTransform),m.bumpScale.value=p.bumpScale,p.side===rn&&(m.bumpScale.value*=-1)),p.normalMap&&(m.normalMap.value=p.normalMap,e(p.normalMap,m.normalMapTransform),m.normalScale.value.copy(p.normalScale),p.side===rn&&m.normalScale.value.negate()),p.displacementMap&&(m.displacementMap.value=p.displacementMap,e(p.displacementMap,m.displacementMapTransform),m.displacementScale.value=p.displacementScale,m.displacementBias.value=p.displacementBias),p.emissiveMap&&(m.emissiveMap.value=p.emissiveMap,e(p.emissiveMap,m.emissiveMapTransform)),p.specularMap&&(m.specularMap.value=p.specularMap,e(p.specularMap,m.specularMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest);const w=t.get(p),b=w.envMap,M=w.envMapRotation;b&&(m.envMap.value=b,Ni.copy(M),Ni.x*=-1,Ni.y*=-1,Ni.z*=-1,b.isCubeTexture&&b.isRenderTargetTexture===!1&&(Ni.y*=-1,Ni.z*=-1),m.envMapRotation.value.setFromMatrix4(Nx.makeRotationFromEuler(Ni)),m.flipEnvMap.value=b.isCubeTexture&&b.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=p.reflectivity,m.ior.value=p.ior,m.refractionRatio.value=p.refractionRatio),p.lightMap&&(m.lightMap.value=p.lightMap,m.lightMapIntensity.value=p.lightMapIntensity,e(p.lightMap,m.lightMapTransform)),p.aoMap&&(m.aoMap.value=p.aoMap,m.aoMapIntensity.value=p.aoMapIntensity,e(p.aoMap,m.aoMapTransform))}function a(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,p.map&&(m.map.value=p.map,e(p.map,m.mapTransform))}function o(m,p){m.dashSize.value=p.dashSize,m.totalSize.value=p.dashSize+p.gapSize,m.scale.value=p.scale}function l(m,p,w,b){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.size.value=p.size*w,m.scale.value=b*.5,p.map&&(m.map.value=p.map,e(p.map,m.uvTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,e(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function c(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.rotation.value=p.rotation,p.map&&(m.map.value=p.map,e(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,e(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function h(m,p){m.specular.value.copy(p.specular),m.shininess.value=Math.max(p.shininess,1e-4)}function u(m,p){p.gradientMap&&(m.gradientMap.value=p.gradientMap)}function d(m,p){m.metalness.value=p.metalness,p.metalnessMap&&(m.metalnessMap.value=p.metalnessMap,e(p.metalnessMap,m.metalnessMapTransform)),m.roughness.value=p.roughness,p.roughnessMap&&(m.roughnessMap.value=p.roughnessMap,e(p.roughnessMap,m.roughnessMapTransform)),p.envMap&&(m.envMapIntensity.value=p.envMapIntensity)}function f(m,p,w){m.ior.value=p.ior,p.sheen>0&&(m.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),m.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(m.sheenColorMap.value=p.sheenColorMap,e(p.sheenColorMap,m.sheenColorMapTransform)),p.sheenRoughnessMap&&(m.sheenRoughnessMap.value=p.sheenRoughnessMap,e(p.sheenRoughnessMap,m.sheenRoughnessMapTransform))),p.clearcoat>0&&(m.clearcoat.value=p.clearcoat,m.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(m.clearcoatMap.value=p.clearcoatMap,e(p.clearcoatMap,m.clearcoatMapTransform)),p.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap,e(p.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),p.clearcoatNormalMap&&(m.clearcoatNormalMap.value=p.clearcoatNormalMap,e(p.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),p.side===rn&&m.clearcoatNormalScale.value.negate())),p.dispersion>0&&(m.dispersion.value=p.dispersion),p.iridescence>0&&(m.iridescence.value=p.iridescence,m.iridescenceIOR.value=p.iridescenceIOR,m.iridescenceThicknessMinimum.value=p.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=p.iridescenceThicknessRange[1],p.iridescenceMap&&(m.iridescenceMap.value=p.iridescenceMap,e(p.iridescenceMap,m.iridescenceMapTransform)),p.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=p.iridescenceThicknessMap,e(p.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),p.transmission>0&&(m.transmission.value=p.transmission,m.transmissionSamplerMap.value=w.texture,m.transmissionSamplerSize.value.set(w.width,w.height),p.transmissionMap&&(m.transmissionMap.value=p.transmissionMap,e(p.transmissionMap,m.transmissionMapTransform)),m.thickness.value=p.thickness,p.thicknessMap&&(m.thicknessMap.value=p.thicknessMap,e(p.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=p.attenuationDistance,m.attenuationColor.value.copy(p.attenuationColor)),p.anisotropy>0&&(m.anisotropyVector.value.set(p.anisotropy*Math.cos(p.anisotropyRotation),p.anisotropy*Math.sin(p.anisotropyRotation)),p.anisotropyMap&&(m.anisotropyMap.value=p.anisotropyMap,e(p.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=p.specularIntensity,m.specularColor.value.copy(p.specularColor),p.specularColorMap&&(m.specularColorMap.value=p.specularColorMap,e(p.specularColorMap,m.specularColorMapTransform)),p.specularIntensityMap&&(m.specularIntensityMap.value=p.specularIntensityMap,e(p.specularIntensityMap,m.specularIntensityMapTransform))}function g(m,p){p.matcap&&(m.matcap.value=p.matcap)}function x(m,p){const w=t.get(p).light;m.referencePosition.value.setFromMatrixPosition(w.matrixWorld),m.nearDistance.value=w.shadow.camera.near,m.farDistance.value=w.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:s}}function Ox(i,t,e,n){let s={},r={},a=[];const o=i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS);function l(w,b){const M=b.program;n.uniformBlockBinding(w,M)}function c(w,b){let M=s[w.id];M===void 0&&(g(w),M=h(w),s[w.id]=M,w.addEventListener("dispose",m));const y=b.program;n.updateUBOMapping(w,y);const T=t.render.frame;r[w.id]!==T&&(d(w),r[w.id]=T)}function h(w){const b=u();w.__bindingPointIndex=b;const M=i.createBuffer(),y=w.__size,T=w.usage;return i.bindBuffer(i.UNIFORM_BUFFER,M),i.bufferData(i.UNIFORM_BUFFER,y,T),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,b,M),M}function u(){for(let w=0;w<o;w++)if(a.indexOf(w)===-1)return a.push(w),w;return ee("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function d(w){const b=s[w.id],M=w.uniforms,y=w.__cache;i.bindBuffer(i.UNIFORM_BUFFER,b);for(let T=0,C=M.length;T<C;T++){const L=Array.isArray(M[T])?M[T]:[M[T]];for(let v=0,S=L.length;v<S;v++){const P=L[v];if(f(P,T,v,y)===!0){const I=P.__offset,F=Array.isArray(P.value)?P.value:[P.value];let B=0;for(let N=0;N<F.length;N++){const H=F[N],z=x(H);typeof H=="number"||typeof H=="boolean"?(P.__data[0]=H,i.bufferSubData(i.UNIFORM_BUFFER,I+B,P.__data)):H.isMatrix3?(P.__data[0]=H.elements[0],P.__data[1]=H.elements[1],P.__data[2]=H.elements[2],P.__data[3]=0,P.__data[4]=H.elements[3],P.__data[5]=H.elements[4],P.__data[6]=H.elements[5],P.__data[7]=0,P.__data[8]=H.elements[6],P.__data[9]=H.elements[7],P.__data[10]=H.elements[8],P.__data[11]=0):(H.toArray(P.__data,B),B+=z.storage/Float32Array.BYTES_PER_ELEMENT)}i.bufferSubData(i.UNIFORM_BUFFER,I,P.__data)}}}i.bindBuffer(i.UNIFORM_BUFFER,null)}function f(w,b,M,y){const T=w.value,C=b+"_"+M;if(y[C]===void 0)return typeof T=="number"||typeof T=="boolean"?y[C]=T:y[C]=T.clone(),!0;{const L=y[C];if(typeof T=="number"||typeof T=="boolean"){if(L!==T)return y[C]=T,!0}else if(L.equals(T)===!1)return L.copy(T),!0}return!1}function g(w){const b=w.uniforms;let M=0;const y=16;for(let C=0,L=b.length;C<L;C++){const v=Array.isArray(b[C])?b[C]:[b[C]];for(let S=0,P=v.length;S<P;S++){const I=v[S],F=Array.isArray(I.value)?I.value:[I.value];for(let B=0,N=F.length;B<N;B++){const H=F[B],z=x(H),$=M%y,st=$%z.boundary,Z=$+st;M+=st,Z!==0&&y-Z<z.storage&&(M+=y-Z),I.__data=new Float32Array(z.storage/Float32Array.BYTES_PER_ELEMENT),I.__offset=M,M+=z.storage}}}const T=M%y;return T>0&&(M+=y-T),w.__size=M,w.__cache={},this}function x(w){const b={boundary:0,storage:0};return typeof w=="number"||typeof w=="boolean"?(b.boundary=4,b.storage=4):w.isVector2?(b.boundary=8,b.storage=8):w.isVector3||w.isColor?(b.boundary=16,b.storage=12):w.isVector4?(b.boundary=16,b.storage=16):w.isMatrix3?(b.boundary=48,b.storage=48):w.isMatrix4?(b.boundary=64,b.storage=64):w.isTexture?Ot("WebGLRenderer: Texture samplers can not be part of an uniforms group."):Ot("WebGLRenderer: Unsupported uniform value type.",w),b}function m(w){const b=w.target;b.removeEventListener("dispose",m);const M=a.indexOf(b.__bindingPointIndex);a.splice(M,1),i.deleteBuffer(s[b.id]),delete s[b.id],delete r[b.id]}function p(){for(const w in s)i.deleteBuffer(s[w]);a=[],s={},r={}}return{bind:l,update:c,dispose:p}}const Bx=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]);let On=null;function kx(){return On===null&&(On=new Fh(Bx,16,16,Ms,oi),On.name="DFG_LUT",On.minFilter=He,On.magFilter=He,On.wrapS=ei,On.wrapT=ei,On.generateMipmaps=!1,On.needsUpdate=!0),On}class zx{constructor(t={}){const{canvas:e=td(),context:n=null,depth:s=!0,stencil:r=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:u=!1,reversedDepthBuffer:d=!1,outputBufferType:f=fn}=t;this.isWebGLRenderer=!0;let g;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");g=n.getContextAttributes().alpha}else g=a;const x=f,m=new Set([wl,Sl,yl]),p=new Set([fn,Yn,Js,js,_l,vl]),w=new Uint32Array(4),b=new Int32Array(4);let M=null,y=null;const T=[],C=[];let L=null;this.domElement=e,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=Vn,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const v=this;let S=!1;this._outputColorSpace=xn;let P=0,I=0,F=null,B=-1,N=null;const H=new Ee,z=new Ee;let $=null;const st=new Bt(0);let Z=0,j=e.width,Ct=e.height,It=1,$t=null,te=null;const Y=new Ee(0,0,j,Ct),Q=new Ee(0,0,j,Ct);let xt=!1;const Ft=new Al;let St=!1,jt=!1;const ae=new Qt,Wt=new D,K=new Ee,rt={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let tt=!1;function at(){return F===null?It:1}let R=n;function bt(E,k){return e.getContext(E,k)}try{const E={alpha:!0,depth:s,stencil:r,antialias:o,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:h,failIfMajorPerformanceCaveat:u};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${gl}`),e.addEventListener("webglcontextlost",Xt,!1),e.addEventListener("webglcontextrestored",ge,!1),e.addEventListener("webglcontextcreationerror",ce,!1),R===null){const k="webgl2";if(R=bt(k,E),R===null)throw bt(k)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(E){throw ee("WebGLRenderer: "+E.message),E}let _t,Ut,ht,A,_,O,X,et,q,Lt,dt,Rt,Ht,ot,mt,Pt,Dt,pt,Zt,U,yt,ct,wt,lt;function nt(){_t=new k0(R),_t.init(),ct=new Px(R,_t),Ut=new P0(R,_t,t,ct),ht=new Ax(R,_t),Ut.reversedDepthBuffer&&d&&ht.buffers.depth.setReversed(!0),A=new G0(R),_=new fx,O=new Rx(R,_t,ht,_,Ut,ct,A),X=new L0(v),et=new B0(v),q=new Yf(R),wt=new A0(R,q),Lt=new z0(R,q,A,wt),dt=new W0(R,Lt,q,A),Zt=new V0(R,Ut,O),Pt=new I0(_),Rt=new dx(v,X,et,_t,Ut,wt,Pt),Ht=new Ux(v,_),ot=new mx,mt=new yx(_t),pt=new C0(v,X,et,ht,dt,g,l),Dt=new Tx(v,dt,Ut),lt=new Ox(R,A,Ut,ht),U=new R0(R,_t,A),yt=new H0(R,_t,A),A.programs=Rt.programs,v.capabilities=Ut,v.extensions=_t,v.properties=_,v.renderLists=ot,v.shadowMap=Dt,v.state=ht,v.info=A}nt(),x!==fn&&(L=new Y0(x,e.width,e.height,s,r));const ft=new Fx(v,R);this.xr=ft,this.getContext=function(){return R},this.getContextAttributes=function(){return R.getContextAttributes()},this.forceContextLoss=function(){const E=_t.get("WEBGL_lose_context");E&&E.loseContext()},this.forceContextRestore=function(){const E=_t.get("WEBGL_lose_context");E&&E.restoreContext()},this.getPixelRatio=function(){return It},this.setPixelRatio=function(E){E!==void 0&&(It=E,this.setSize(j,Ct,!1))},this.getSize=function(E){return E.set(j,Ct)},this.setSize=function(E,k,W=!0){if(ft.isPresenting){Ot("WebGLRenderer: Can't change size while VR device is presenting.");return}j=E,Ct=k,e.width=Math.floor(E*It),e.height=Math.floor(k*It),W===!0&&(e.style.width=E+"px",e.style.height=k+"px"),L!==null&&L.setSize(e.width,e.height),this.setViewport(0,0,E,k)},this.getDrawingBufferSize=function(E){return E.set(j*It,Ct*It).floor()},this.setDrawingBufferSize=function(E,k,W){j=E,Ct=k,It=W,e.width=Math.floor(E*W),e.height=Math.floor(k*W),this.setViewport(0,0,E,k)},this.setEffects=function(E){if(x===fn){console.error("THREE.WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(E){for(let k=0;k<E.length;k++)if(E[k].isOutputPass===!0){console.warn("THREE.WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}L.setEffects(E||[])},this.getCurrentViewport=function(E){return E.copy(H)},this.getViewport=function(E){return E.copy(Y)},this.setViewport=function(E,k,W,V){E.isVector4?Y.set(E.x,E.y,E.z,E.w):Y.set(E,k,W,V),ht.viewport(H.copy(Y).multiplyScalar(It).round())},this.getScissor=function(E){return E.copy(Q)},this.setScissor=function(E,k,W,V){E.isVector4?Q.set(E.x,E.y,E.z,E.w):Q.set(E,k,W,V),ht.scissor(z.copy(Q).multiplyScalar(It).round())},this.getScissorTest=function(){return xt},this.setScissorTest=function(E){ht.setScissorTest(xt=E)},this.setOpaqueSort=function(E){$t=E},this.setTransparentSort=function(E){te=E},this.getClearColor=function(E){return E.copy(pt.getClearColor())},this.setClearColor=function(){pt.setClearColor(...arguments)},this.getClearAlpha=function(){return pt.getClearAlpha()},this.setClearAlpha=function(){pt.setClearAlpha(...arguments)},this.clear=function(E=!0,k=!0,W=!0){let V=0;if(E){let G=!1;if(F!==null){const gt=F.texture.format;G=m.has(gt)}if(G){const gt=F.texture.type,Et=p.has(gt),Mt=pt.getClearColor(),At=pt.getClearAlpha(),Nt=Mt.r,Gt=Mt.g,kt=Mt.b;Et?(w[0]=Nt,w[1]=Gt,w[2]=kt,w[3]=At,R.clearBufferuiv(R.COLOR,0,w)):(b[0]=Nt,b[1]=Gt,b[2]=kt,b[3]=At,R.clearBufferiv(R.COLOR,0,b))}else V|=R.COLOR_BUFFER_BIT}k&&(V|=R.DEPTH_BUFFER_BIT),W&&(V|=R.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),R.clear(V)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){e.removeEventListener("webglcontextlost",Xt,!1),e.removeEventListener("webglcontextrestored",ge,!1),e.removeEventListener("webglcontextcreationerror",ce,!1),pt.dispose(),ot.dispose(),mt.dispose(),_.dispose(),X.dispose(),et.dispose(),dt.dispose(),wt.dispose(),lt.dispose(),Rt.dispose(),ft.dispose(),ft.removeEventListener("sessionstart",zl),ft.removeEventListener("sessionend",Hl),Ei.stop()};function Xt(E){E.preventDefault(),jr("WebGLRenderer: Context Lost."),S=!0}function ge(){jr("WebGLRenderer: Context Restored."),S=!1;const E=A.autoReset,k=Dt.enabled,W=Dt.autoUpdate,V=Dt.needsUpdate,G=Dt.type;nt(),A.autoReset=E,Dt.enabled=k,Dt.autoUpdate=W,Dt.needsUpdate=V,Dt.type=G}function ce(E){ee("WebGLRenderer: A WebGL context could not be created. Reason: ",E.statusMessage)}function Un(E){const k=E.target;k.removeEventListener("dispose",Un),Zn(k)}function Zn(E){pu(E),_.remove(E)}function pu(E){const k=_.get(E).programs;k!==void 0&&(k.forEach(function(W){Rt.releaseProgram(W)}),E.isShaderMaterial&&Rt.releaseShaderCache(E))}this.renderBufferDirect=function(E,k,W,V,G,gt){k===null&&(k=rt);const Et=G.isMesh&&G.matrixWorld.determinant()<0,Mt=gu(E,k,W,V,G);ht.setMaterial(V,Et);let At=W.index,Nt=1;if(V.wireframe===!0){if(At=Lt.getWireframeAttribute(W),At===void 0)return;Nt=2}const Gt=W.drawRange,kt=W.attributes.position;let Kt=Gt.start*Nt,fe=(Gt.start+Gt.count)*Nt;gt!==null&&(Kt=Math.max(Kt,gt.start*Nt),fe=Math.min(fe,(gt.start+gt.count)*Nt)),At!==null?(Kt=Math.max(Kt,0),fe=Math.min(fe,At.count)):kt!=null&&(Kt=Math.max(Kt,0),fe=Math.min(fe,kt.count));const ve=fe-Kt;if(ve<0||ve===1/0)return;wt.setup(G,V,Mt,W,At);let Me,pe=U;if(At!==null&&(Me=q.get(At),pe=yt,pe.setIndex(Me)),G.isMesh)V.wireframe===!0?(ht.setLineWidth(V.wireframeLinewidth*at()),pe.setMode(R.LINES)):pe.setMode(R.TRIANGLES);else if(G.isLine){let zt=V.linewidth;zt===void 0&&(zt=1),ht.setLineWidth(zt*at()),G.isLineSegments?pe.setMode(R.LINES):G.isLineLoop?pe.setMode(R.LINE_LOOP):pe.setMode(R.LINE_STRIP)}else G.isPoints?pe.setMode(R.POINTS):G.isSprite&&pe.setMode(R.TRIANGLES);if(G.isBatchedMesh)if(G._multiDrawInstances!==null)Qs("WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),pe.renderMultiDrawInstances(G._multiDrawStarts,G._multiDrawCounts,G._multiDrawCount,G._multiDrawInstances);else if(_t.get("WEBGL_multi_draw"))pe.renderMultiDraw(G._multiDrawStarts,G._multiDrawCounts,G._multiDrawCount);else{const zt=G._multiDrawStarts,he=G._multiDrawCounts,se=G._multiDrawCount,on=At?q.get(At).bytesPerElement:1,Xi=_.get(V).currentProgram.getUniforms();for(let ln=0;ln<se;ln++)Xi.setValue(R,"_gl_DrawID",ln),pe.render(zt[ln]/on,he[ln])}else if(G.isInstancedMesh)pe.renderInstances(Kt,ve,G.count);else if(W.isInstancedBufferGeometry){const zt=W._maxInstanceCount!==void 0?W._maxInstanceCount:1/0,he=Math.min(W.instanceCount,zt);pe.renderInstances(Kt,ve,he)}else pe.render(Kt,ve)};function kl(E,k,W){E.transparent===!0&&E.side===ke&&E.forceSinglePass===!1?(E.side=rn,E.needsUpdate=!0,cr(E,k,W),E.side=wi,E.needsUpdate=!0,cr(E,k,W),E.side=ke):cr(E,k,W)}this.compile=function(E,k,W=null){W===null&&(W=E),y=mt.get(W),y.init(k),C.push(y),W.traverseVisible(function(G){G.isLight&&G.layers.test(k.layers)&&(y.pushLight(G),G.castShadow&&y.pushShadow(G))}),E!==W&&E.traverseVisible(function(G){G.isLight&&G.layers.test(k.layers)&&(y.pushLight(G),G.castShadow&&y.pushShadow(G))}),y.setupLights();const V=new Set;return E.traverse(function(G){if(!(G.isMesh||G.isPoints||G.isLine||G.isSprite))return;const gt=G.material;if(gt)if(Array.isArray(gt))for(let Et=0;Et<gt.length;Et++){const Mt=gt[Et];kl(Mt,W,G),V.add(Mt)}else kl(gt,W,G),V.add(gt)}),y=C.pop(),V},this.compileAsync=function(E,k,W=null){const V=this.compile(E,k,W);return new Promise(G=>{function gt(){if(V.forEach(function(Et){_.get(Et).currentProgram.isReady()&&V.delete(Et)}),V.size===0){G(E);return}setTimeout(gt,10)}_t.get("KHR_parallel_shader_compile")!==null?gt():setTimeout(gt,10)})};let ga=null;function mu(E){ga&&ga(E)}function zl(){Ei.stop()}function Hl(){Ei.start()}const Ei=new Zh;Ei.setAnimationLoop(mu),typeof self<"u"&&Ei.setContext(self),this.setAnimationLoop=function(E){ga=E,ft.setAnimationLoop(E),E===null?Ei.stop():Ei.start()},ft.addEventListener("sessionstart",zl),ft.addEventListener("sessionend",Hl),this.render=function(E,k){if(k!==void 0&&k.isCamera!==!0){ee("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(S===!0)return;const W=ft.enabled===!0&&ft.isPresenting===!0,V=L!==null&&(F===null||W)&&L.begin(v,F);if(E.matrixWorldAutoUpdate===!0&&E.updateMatrixWorld(),k.parent===null&&k.matrixWorldAutoUpdate===!0&&k.updateMatrixWorld(),ft.enabled===!0&&ft.isPresenting===!0&&(L===null||L.isCompositing()===!1)&&(ft.cameraAutoUpdate===!0&&ft.updateCamera(k),k=ft.getCamera()),E.isScene===!0&&E.onBeforeRender(v,E,k,F),y=mt.get(E,C.length),y.init(k),C.push(y),ae.multiplyMatrices(k.projectionMatrix,k.matrixWorldInverse),Ft.setFromProjectionMatrix(ae,zn,k.reversedDepth),jt=this.localClippingEnabled,St=Pt.init(this.clippingPlanes,jt),M=ot.get(E,T.length),M.init(),T.push(M),ft.enabled===!0&&ft.isPresenting===!0){const Et=v.xr.getDepthSensingMesh();Et!==null&&xa(Et,k,-1/0,v.sortObjects)}xa(E,k,0,v.sortObjects),M.finish(),v.sortObjects===!0&&M.sort($t,te),tt=ft.enabled===!1||ft.isPresenting===!1||ft.hasDepthSensing()===!1,tt&&pt.addToRenderList(M,E),this.info.render.frame++,St===!0&&Pt.beginShadows();const G=y.state.shadowsArray;if(Dt.render(G,E,k),St===!0&&Pt.endShadows(),this.info.autoReset===!0&&this.info.reset(),(V&&L.hasRenderPass())===!1){const Et=M.opaque,Mt=M.transmissive;if(y.setupLights(),k.isArrayCamera){const At=k.cameras;if(Mt.length>0)for(let Nt=0,Gt=At.length;Nt<Gt;Nt++){const kt=At[Nt];Vl(Et,Mt,E,kt)}tt&&pt.render(E);for(let Nt=0,Gt=At.length;Nt<Gt;Nt++){const kt=At[Nt];Gl(M,E,kt,kt.viewport)}}else Mt.length>0&&Vl(Et,Mt,E,k),tt&&pt.render(E),Gl(M,E,k)}F!==null&&I===0&&(O.updateMultisampleRenderTarget(F),O.updateRenderTargetMipmap(F)),V&&L.end(v),E.isScene===!0&&E.onAfterRender(v,E,k),wt.resetDefaultState(),B=-1,N=null,C.pop(),C.length>0?(y=C[C.length-1],St===!0&&Pt.setGlobalState(v.clippingPlanes,y.state.camera)):y=null,T.pop(),T.length>0?M=T[T.length-1]:M=null};function xa(E,k,W,V){if(E.visible===!1)return;if(E.layers.test(k.layers)){if(E.isGroup)W=E.renderOrder;else if(E.isLOD)E.autoUpdate===!0&&E.update(k);else if(E.isLight)y.pushLight(E),E.castShadow&&y.pushShadow(E);else if(E.isSprite){if(!E.frustumCulled||Ft.intersectsSprite(E)){V&&K.setFromMatrixPosition(E.matrixWorld).applyMatrix4(ae);const Et=dt.update(E),Mt=E.material;Mt.visible&&M.push(E,Et,Mt,W,K.z,null)}}else if((E.isMesh||E.isLine||E.isPoints)&&(!E.frustumCulled||Ft.intersectsObject(E))){const Et=dt.update(E),Mt=E.material;if(V&&(E.boundingSphere!==void 0?(E.boundingSphere===null&&E.computeBoundingSphere(),K.copy(E.boundingSphere.center)):(Et.boundingSphere===null&&Et.computeBoundingSphere(),K.copy(Et.boundingSphere.center)),K.applyMatrix4(E.matrixWorld).applyMatrix4(ae)),Array.isArray(Mt)){const At=Et.groups;for(let Nt=0,Gt=At.length;Nt<Gt;Nt++){const kt=At[Nt],Kt=Mt[kt.materialIndex];Kt&&Kt.visible&&M.push(E,Et,Kt,W,K.z,kt)}}else Mt.visible&&M.push(E,Et,Mt,W,K.z,null)}}const gt=E.children;for(let Et=0,Mt=gt.length;Et<Mt;Et++)xa(gt[Et],k,W,V)}function Gl(E,k,W,V){const{opaque:G,transmissive:gt,transparent:Et}=E;y.setupLightsView(W),St===!0&&Pt.setGlobalState(v.clippingPlanes,W),V&&ht.viewport(H.copy(V)),G.length>0&&lr(G,k,W),gt.length>0&&lr(gt,k,W),Et.length>0&&lr(Et,k,W),ht.buffers.depth.setTest(!0),ht.buffers.depth.setMask(!0),ht.buffers.color.setMask(!0),ht.setPolygonOffset(!1)}function Vl(E,k,W,V){if((W.isScene===!0?W.overrideMaterial:null)!==null)return;if(y.state.transmissionRenderTarget[V.id]===void 0){const Kt=_t.has("EXT_color_buffer_half_float")||_t.has("EXT_color_buffer_float");y.state.transmissionRenderTarget[V.id]=new Xn(1,1,{generateMipmaps:!0,type:Kt?oi:fn,minFilter:ki,samples:Ut.samples,stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:ie.workingColorSpace})}const gt=y.state.transmissionRenderTarget[V.id],Et=V.viewport||H;gt.setSize(Et.z*v.transmissionResolutionScale,Et.w*v.transmissionResolutionScale);const Mt=v.getRenderTarget(),At=v.getActiveCubeFace(),Nt=v.getActiveMipmapLevel();v.setRenderTarget(gt),v.getClearColor(st),Z=v.getClearAlpha(),Z<1&&v.setClearColor(16777215,.5),v.clear(),tt&&pt.render(W);const Gt=v.toneMapping;v.toneMapping=Vn;const kt=V.viewport;if(V.viewport!==void 0&&(V.viewport=void 0),y.setupLightsView(V),St===!0&&Pt.setGlobalState(v.clippingPlanes,V),lr(E,W,V),O.updateMultisampleRenderTarget(gt),O.updateRenderTargetMipmap(gt),_t.has("WEBGL_multisampled_render_to_texture")===!1){let Kt=!1;for(let fe=0,ve=k.length;fe<ve;fe++){const Me=k[fe],{object:pe,geometry:zt,material:he,group:se}=Me;if(he.side===ke&&pe.layers.test(V.layers)){const on=he.side;he.side=rn,he.needsUpdate=!0,Wl(pe,W,V,zt,he,se),he.side=on,he.needsUpdate=!0,Kt=!0}}Kt===!0&&(O.updateMultisampleRenderTarget(gt),O.updateRenderTargetMipmap(gt))}v.setRenderTarget(Mt,At,Nt),v.setClearColor(st,Z),kt!==void 0&&(V.viewport=kt),v.toneMapping=Gt}function lr(E,k,W){const V=k.isScene===!0?k.overrideMaterial:null;for(let G=0,gt=E.length;G<gt;G++){const Et=E[G],{object:Mt,geometry:At,group:Nt}=Et;let Gt=Et.material;Gt.allowOverride===!0&&V!==null&&(Gt=V),Mt.layers.test(W.layers)&&Wl(Mt,k,W,At,Gt,Nt)}}function Wl(E,k,W,V,G,gt){E.onBeforeRender(v,k,W,V,G,gt),E.modelViewMatrix.multiplyMatrices(W.matrixWorldInverse,E.matrixWorld),E.normalMatrix.getNormalMatrix(E.modelViewMatrix),G.onBeforeRender(v,k,W,V,E,gt),G.transparent===!0&&G.side===ke&&G.forceSinglePass===!1?(G.side=rn,G.needsUpdate=!0,v.renderBufferDirect(W,k,V,G,E,gt),G.side=wi,G.needsUpdate=!0,v.renderBufferDirect(W,k,V,G,E,gt),G.side=ke):v.renderBufferDirect(W,k,V,G,E,gt),E.onAfterRender(v,k,W,V,G,gt)}function cr(E,k,W){k.isScene!==!0&&(k=rt);const V=_.get(E),G=y.state.lights,gt=y.state.shadowsArray,Et=G.state.version,Mt=Rt.getParameters(E,G.state,gt,k,W),At=Rt.getProgramCacheKey(Mt);let Nt=V.programs;V.environment=E.isMeshStandardMaterial?k.environment:null,V.fog=k.fog,V.envMap=(E.isMeshStandardMaterial?et:X).get(E.envMap||V.environment),V.envMapRotation=V.environment!==null&&E.envMap===null?k.environmentRotation:E.envMapRotation,Nt===void 0&&(E.addEventListener("dispose",Un),Nt=new Map,V.programs=Nt);let Gt=Nt.get(At);if(Gt!==void 0){if(V.currentProgram===Gt&&V.lightsStateVersion===Et)return Yl(E,Mt),Gt}else Mt.uniforms=Rt.getUniforms(E),E.onBeforeCompile(Mt,v),Gt=Rt.acquireProgram(Mt,At),Nt.set(At,Gt),V.uniforms=Mt.uniforms;const kt=V.uniforms;return(!E.isShaderMaterial&&!E.isRawShaderMaterial||E.clipping===!0)&&(kt.clippingPlanes=Pt.uniform),Yl(E,Mt),V.needsLights=_u(E),V.lightsStateVersion=Et,V.needsLights&&(kt.ambientLightColor.value=G.state.ambient,kt.lightProbe.value=G.state.probe,kt.directionalLights.value=G.state.directional,kt.directionalLightShadows.value=G.state.directionalShadow,kt.spotLights.value=G.state.spot,kt.spotLightShadows.value=G.state.spotShadow,kt.rectAreaLights.value=G.state.rectArea,kt.ltc_1.value=G.state.rectAreaLTC1,kt.ltc_2.value=G.state.rectAreaLTC2,kt.pointLights.value=G.state.point,kt.pointLightShadows.value=G.state.pointShadow,kt.hemisphereLights.value=G.state.hemi,kt.directionalShadowMap.value=G.state.directionalShadowMap,kt.directionalShadowMatrix.value=G.state.directionalShadowMatrix,kt.spotShadowMap.value=G.state.spotShadowMap,kt.spotLightMatrix.value=G.state.spotLightMatrix,kt.spotLightMap.value=G.state.spotLightMap,kt.pointShadowMap.value=G.state.pointShadowMap,kt.pointShadowMatrix.value=G.state.pointShadowMatrix),V.currentProgram=Gt,V.uniformsList=null,Gt}function Xl(E){if(E.uniformsList===null){const k=E.currentProgram.getUniforms();E.uniformsList=Yr.seqWithValue(k.seq,E.uniforms)}return E.uniformsList}function Yl(E,k){const W=_.get(E);W.outputColorSpace=k.outputColorSpace,W.batching=k.batching,W.batchingColor=k.batchingColor,W.instancing=k.instancing,W.instancingColor=k.instancingColor,W.instancingMorph=k.instancingMorph,W.skinning=k.skinning,W.morphTargets=k.morphTargets,W.morphNormals=k.morphNormals,W.morphColors=k.morphColors,W.morphTargetsCount=k.morphTargetsCount,W.numClippingPlanes=k.numClippingPlanes,W.numIntersection=k.numClipIntersection,W.vertexAlphas=k.vertexAlphas,W.vertexTangents=k.vertexTangents,W.toneMapping=k.toneMapping}function gu(E,k,W,V,G){k.isScene!==!0&&(k=rt),O.resetTextureUnits();const gt=k.fog,Et=V.isMeshStandardMaterial?k.environment:null,Mt=F===null?v.outputColorSpace:F.isXRRenderTarget===!0?F.texture.colorSpace:ys,At=(V.isMeshStandardMaterial?et:X).get(V.envMap||Et),Nt=V.vertexColors===!0&&!!W.attributes.color&&W.attributes.color.itemSize===4,Gt=!!W.attributes.tangent&&(!!V.normalMap||V.anisotropy>0),kt=!!W.morphAttributes.position,Kt=!!W.morphAttributes.normal,fe=!!W.morphAttributes.color;let ve=Vn;V.toneMapped&&(F===null||F.isXRRenderTarget===!0)&&(ve=v.toneMapping);const Me=W.morphAttributes.position||W.morphAttributes.normal||W.morphAttributes.color,pe=Me!==void 0?Me.length:0,zt=_.get(V),he=y.state.lights;if(St===!0&&(jt===!0||E!==N)){const $e=E===N&&V.id===B;Pt.setState(V,E,$e)}let se=!1;V.version===zt.__version?(zt.needsLights&&zt.lightsStateVersion!==he.state.version||zt.outputColorSpace!==Mt||G.isBatchedMesh&&zt.batching===!1||!G.isBatchedMesh&&zt.batching===!0||G.isBatchedMesh&&zt.batchingColor===!0&&G.colorTexture===null||G.isBatchedMesh&&zt.batchingColor===!1&&G.colorTexture!==null||G.isInstancedMesh&&zt.instancing===!1||!G.isInstancedMesh&&zt.instancing===!0||G.isSkinnedMesh&&zt.skinning===!1||!G.isSkinnedMesh&&zt.skinning===!0||G.isInstancedMesh&&zt.instancingColor===!0&&G.instanceColor===null||G.isInstancedMesh&&zt.instancingColor===!1&&G.instanceColor!==null||G.isInstancedMesh&&zt.instancingMorph===!0&&G.morphTexture===null||G.isInstancedMesh&&zt.instancingMorph===!1&&G.morphTexture!==null||zt.envMap!==At||V.fog===!0&&zt.fog!==gt||zt.numClippingPlanes!==void 0&&(zt.numClippingPlanes!==Pt.numPlanes||zt.numIntersection!==Pt.numIntersection)||zt.vertexAlphas!==Nt||zt.vertexTangents!==Gt||zt.morphTargets!==kt||zt.morphNormals!==Kt||zt.morphColors!==fe||zt.toneMapping!==ve||zt.morphTargetsCount!==pe)&&(se=!0):(se=!0,zt.__version=V.version);let on=zt.currentProgram;se===!0&&(on=cr(V,k,G));let Xi=!1,ln=!1,As=!1;const xe=on.getUniforms(),en=zt.uniforms;if(ht.useProgram(on.program)&&(Xi=!0,ln=!0,As=!0),V.id!==B&&(B=V.id,ln=!0),Xi||N!==E){ht.buffers.depth.getReversed()&&E.reversedDepth!==!0&&(E._reversedDepth=!0,E.updateProjectionMatrix()),xe.setValue(R,"projectionMatrix",E.projectionMatrix),xe.setValue(R,"viewMatrix",E.matrixWorldInverse);const nn=xe.map.cameraPosition;nn!==void 0&&nn.setValue(R,Wt.setFromMatrixPosition(E.matrixWorld)),Ut.logarithmicDepthBuffer&&xe.setValue(R,"logDepthBufFC",2/(Math.log(E.far+1)/Math.LN2)),(V.isMeshPhongMaterial||V.isMeshToonMaterial||V.isMeshLambertMaterial||V.isMeshBasicMaterial||V.isMeshStandardMaterial||V.isShaderMaterial)&&xe.setValue(R,"isOrthographic",E.isOrthographicCamera===!0),N!==E&&(N=E,ln=!0,As=!0)}if(zt.needsLights&&(he.state.directionalShadowMap.length>0&&xe.setValue(R,"directionalShadowMap",he.state.directionalShadowMap,O),he.state.spotShadowMap.length>0&&xe.setValue(R,"spotShadowMap",he.state.spotShadowMap,O),he.state.pointShadowMap.length>0&&xe.setValue(R,"pointShadowMap",he.state.pointShadowMap,O)),G.isSkinnedMesh){xe.setOptional(R,G,"bindMatrix"),xe.setOptional(R,G,"bindMatrixInverse");const $e=G.skeleton;$e&&($e.boneTexture===null&&$e.computeBoneTexture(),xe.setValue(R,"boneTexture",$e.boneTexture,O))}G.isBatchedMesh&&(xe.setOptional(R,G,"batchingTexture"),xe.setValue(R,"batchingTexture",G._matricesTexture,O),xe.setOptional(R,G,"batchingIdTexture"),xe.setValue(R,"batchingIdTexture",G._indirectTexture,O),xe.setOptional(R,G,"batchingColorTexture"),G._colorsTexture!==null&&xe.setValue(R,"batchingColorTexture",G._colorsTexture,O));const pn=W.morphAttributes;if((pn.position!==void 0||pn.normal!==void 0||pn.color!==void 0)&&Zt.update(G,W,on),(ln||zt.receiveShadow!==G.receiveShadow)&&(zt.receiveShadow=G.receiveShadow,xe.setValue(R,"receiveShadow",G.receiveShadow)),V.isMeshGouraudMaterial&&V.envMap!==null&&(en.envMap.value=At,en.flipEnvMap.value=At.isCubeTexture&&At.isRenderTargetTexture===!1?-1:1),V.isMeshStandardMaterial&&V.envMap===null&&k.environment!==null&&(en.envMapIntensity.value=k.environmentIntensity),en.dfgLUT!==void 0&&(en.dfgLUT.value=kx()),ln&&(xe.setValue(R,"toneMappingExposure",v.toneMappingExposure),zt.needsLights&&xu(en,As),gt&&V.fog===!0&&Ht.refreshFogUniforms(en,gt),Ht.refreshMaterialUniforms(en,V,It,Ct,y.state.transmissionRenderTarget[E.id]),Yr.upload(R,Xl(zt),en,O)),V.isShaderMaterial&&V.uniformsNeedUpdate===!0&&(Yr.upload(R,Xl(zt),en,O),V.uniformsNeedUpdate=!1),V.isSpriteMaterial&&xe.setValue(R,"center",G.center),xe.setValue(R,"modelViewMatrix",G.modelViewMatrix),xe.setValue(R,"normalMatrix",G.normalMatrix),xe.setValue(R,"modelMatrix",G.matrixWorld),V.isShaderMaterial||V.isRawShaderMaterial){const $e=V.uniformsGroups;for(let nn=0,_a=$e.length;nn<_a;nn++){const Ti=$e[nn];lt.update(Ti,on),lt.bind(Ti,on)}}return on}function xu(E,k){E.ambientLightColor.needsUpdate=k,E.lightProbe.needsUpdate=k,E.directionalLights.needsUpdate=k,E.directionalLightShadows.needsUpdate=k,E.pointLights.needsUpdate=k,E.pointLightShadows.needsUpdate=k,E.spotLights.needsUpdate=k,E.spotLightShadows.needsUpdate=k,E.rectAreaLights.needsUpdate=k,E.hemisphereLights.needsUpdate=k}function _u(E){return E.isMeshLambertMaterial||E.isMeshToonMaterial||E.isMeshPhongMaterial||E.isMeshStandardMaterial||E.isShadowMaterial||E.isShaderMaterial&&E.lights===!0}this.getActiveCubeFace=function(){return P},this.getActiveMipmapLevel=function(){return I},this.getRenderTarget=function(){return F},this.setRenderTargetTextures=function(E,k,W){const V=_.get(E);V.__autoAllocateDepthBuffer=E.resolveDepthBuffer===!1,V.__autoAllocateDepthBuffer===!1&&(V.__useRenderToTexture=!1),_.get(E.texture).__webglTexture=k,_.get(E.depthTexture).__webglTexture=V.__autoAllocateDepthBuffer?void 0:W,V.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(E,k){const W=_.get(E);W.__webglFramebuffer=k,W.__useDefaultFramebuffer=k===void 0};const vu=R.createFramebuffer();this.setRenderTarget=function(E,k=0,W=0){F=E,P=k,I=W;let V=null,G=!1,gt=!1;if(E){const Mt=_.get(E);if(Mt.__useDefaultFramebuffer!==void 0){ht.bindFramebuffer(R.FRAMEBUFFER,Mt.__webglFramebuffer),H.copy(E.viewport),z.copy(E.scissor),$=E.scissorTest,ht.viewport(H),ht.scissor(z),ht.setScissorTest($),B=-1;return}else if(Mt.__webglFramebuffer===void 0)O.setupRenderTarget(E);else if(Mt.__hasExternalTextures)O.rebindTextures(E,_.get(E.texture).__webglTexture,_.get(E.depthTexture).__webglTexture);else if(E.depthBuffer){const Gt=E.depthTexture;if(Mt.__boundDepthTexture!==Gt){if(Gt!==null&&_.has(Gt)&&(E.width!==Gt.image.width||E.height!==Gt.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");O.setupDepthRenderbuffer(E)}}const At=E.texture;(At.isData3DTexture||At.isDataArrayTexture||At.isCompressedArrayTexture)&&(gt=!0);const Nt=_.get(E).__webglFramebuffer;E.isWebGLCubeRenderTarget?(Array.isArray(Nt[k])?V=Nt[k][W]:V=Nt[k],G=!0):E.samples>0&&O.useMultisampledRTT(E)===!1?V=_.get(E).__webglMultisampledFramebuffer:Array.isArray(Nt)?V=Nt[W]:V=Nt,H.copy(E.viewport),z.copy(E.scissor),$=E.scissorTest}else H.copy(Y).multiplyScalar(It).floor(),z.copy(Q).multiplyScalar(It).floor(),$=xt;if(W!==0&&(V=vu),ht.bindFramebuffer(R.FRAMEBUFFER,V)&&ht.drawBuffers(E,V),ht.viewport(H),ht.scissor(z),ht.setScissorTest($),G){const Mt=_.get(E.texture);R.framebufferTexture2D(R.FRAMEBUFFER,R.COLOR_ATTACHMENT0,R.TEXTURE_CUBE_MAP_POSITIVE_X+k,Mt.__webglTexture,W)}else if(gt){const Mt=k;for(let At=0;At<E.textures.length;At++){const Nt=_.get(E.textures[At]);R.framebufferTextureLayer(R.FRAMEBUFFER,R.COLOR_ATTACHMENT0+At,Nt.__webglTexture,W,Mt)}}else if(E!==null&&W!==0){const Mt=_.get(E.texture);R.framebufferTexture2D(R.FRAMEBUFFER,R.COLOR_ATTACHMENT0,R.TEXTURE_2D,Mt.__webglTexture,W)}B=-1},this.readRenderTargetPixels=function(E,k,W,V,G,gt,Et,Mt=0){if(!(E&&E.isWebGLRenderTarget)){ee("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let At=_.get(E).__webglFramebuffer;if(E.isWebGLCubeRenderTarget&&Et!==void 0&&(At=At[Et]),At){ht.bindFramebuffer(R.FRAMEBUFFER,At);try{const Nt=E.textures[Mt],Gt=Nt.format,kt=Nt.type;if(!Ut.textureFormatReadable(Gt)){ee("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!Ut.textureTypeReadable(kt)){ee("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}k>=0&&k<=E.width-V&&W>=0&&W<=E.height-G&&(E.textures.length>1&&R.readBuffer(R.COLOR_ATTACHMENT0+Mt),R.readPixels(k,W,V,G,ct.convert(Gt),ct.convert(kt),gt))}finally{const Nt=F!==null?_.get(F).__webglFramebuffer:null;ht.bindFramebuffer(R.FRAMEBUFFER,Nt)}}},this.readRenderTargetPixelsAsync=async function(E,k,W,V,G,gt,Et,Mt=0){if(!(E&&E.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let At=_.get(E).__webglFramebuffer;if(E.isWebGLCubeRenderTarget&&Et!==void 0&&(At=At[Et]),At)if(k>=0&&k<=E.width-V&&W>=0&&W<=E.height-G){ht.bindFramebuffer(R.FRAMEBUFFER,At);const Nt=E.textures[Mt],Gt=Nt.format,kt=Nt.type;if(!Ut.textureFormatReadable(Gt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!Ut.textureTypeReadable(kt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const Kt=R.createBuffer();R.bindBuffer(R.PIXEL_PACK_BUFFER,Kt),R.bufferData(R.PIXEL_PACK_BUFFER,gt.byteLength,R.STREAM_READ),E.textures.length>1&&R.readBuffer(R.COLOR_ATTACHMENT0+Mt),R.readPixels(k,W,V,G,ct.convert(Gt),ct.convert(kt),0);const fe=F!==null?_.get(F).__webglFramebuffer:null;ht.bindFramebuffer(R.FRAMEBUFFER,fe);const ve=R.fenceSync(R.SYNC_GPU_COMMANDS_COMPLETE,0);return R.flush(),await ed(R,ve,4),R.bindBuffer(R.PIXEL_PACK_BUFFER,Kt),R.getBufferSubData(R.PIXEL_PACK_BUFFER,0,gt),R.deleteBuffer(Kt),R.deleteSync(ve),gt}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(E,k=null,W=0){const V=Math.pow(2,-W),G=Math.floor(E.image.width*V),gt=Math.floor(E.image.height*V),Et=k!==null?k.x:0,Mt=k!==null?k.y:0;O.setTexture2D(E,0),R.copyTexSubImage2D(R.TEXTURE_2D,W,0,0,Et,Mt,G,gt),ht.unbindTexture()};const Mu=R.createFramebuffer(),yu=R.createFramebuffer();this.copyTextureToTexture=function(E,k,W=null,V=null,G=0,gt=null){gt===null&&(G!==0?(Qs("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),gt=G,G=0):gt=0);let Et,Mt,At,Nt,Gt,kt,Kt,fe,ve;const Me=E.isCompressedTexture?E.mipmaps[gt]:E.image;if(W!==null)Et=W.max.x-W.min.x,Mt=W.max.y-W.min.y,At=W.isBox3?W.max.z-W.min.z:1,Nt=W.min.x,Gt=W.min.y,kt=W.isBox3?W.min.z:0;else{const pn=Math.pow(2,-G);Et=Math.floor(Me.width*pn),Mt=Math.floor(Me.height*pn),E.isDataArrayTexture?At=Me.depth:E.isData3DTexture?At=Math.floor(Me.depth*pn):At=1,Nt=0,Gt=0,kt=0}V!==null?(Kt=V.x,fe=V.y,ve=V.z):(Kt=0,fe=0,ve=0);const pe=ct.convert(k.format),zt=ct.convert(k.type);let he;k.isData3DTexture?(O.setTexture3D(k,0),he=R.TEXTURE_3D):k.isDataArrayTexture||k.isCompressedArrayTexture?(O.setTexture2DArray(k,0),he=R.TEXTURE_2D_ARRAY):(O.setTexture2D(k,0),he=R.TEXTURE_2D),R.pixelStorei(R.UNPACK_FLIP_Y_WEBGL,k.flipY),R.pixelStorei(R.UNPACK_PREMULTIPLY_ALPHA_WEBGL,k.premultiplyAlpha),R.pixelStorei(R.UNPACK_ALIGNMENT,k.unpackAlignment);const se=R.getParameter(R.UNPACK_ROW_LENGTH),on=R.getParameter(R.UNPACK_IMAGE_HEIGHT),Xi=R.getParameter(R.UNPACK_SKIP_PIXELS),ln=R.getParameter(R.UNPACK_SKIP_ROWS),As=R.getParameter(R.UNPACK_SKIP_IMAGES);R.pixelStorei(R.UNPACK_ROW_LENGTH,Me.width),R.pixelStorei(R.UNPACK_IMAGE_HEIGHT,Me.height),R.pixelStorei(R.UNPACK_SKIP_PIXELS,Nt),R.pixelStorei(R.UNPACK_SKIP_ROWS,Gt),R.pixelStorei(R.UNPACK_SKIP_IMAGES,kt);const xe=E.isDataArrayTexture||E.isData3DTexture,en=k.isDataArrayTexture||k.isData3DTexture;if(E.isDepthTexture){const pn=_.get(E),$e=_.get(k),nn=_.get(pn.__renderTarget),_a=_.get($e.__renderTarget);ht.bindFramebuffer(R.READ_FRAMEBUFFER,nn.__webglFramebuffer),ht.bindFramebuffer(R.DRAW_FRAMEBUFFER,_a.__webglFramebuffer);for(let Ti=0;Ti<At;Ti++)xe&&(R.framebufferTextureLayer(R.READ_FRAMEBUFFER,R.COLOR_ATTACHMENT0,_.get(E).__webglTexture,G,kt+Ti),R.framebufferTextureLayer(R.DRAW_FRAMEBUFFER,R.COLOR_ATTACHMENT0,_.get(k).__webglTexture,gt,ve+Ti)),R.blitFramebuffer(Nt,Gt,Et,Mt,Kt,fe,Et,Mt,R.DEPTH_BUFFER_BIT,R.NEAREST);ht.bindFramebuffer(R.READ_FRAMEBUFFER,null),ht.bindFramebuffer(R.DRAW_FRAMEBUFFER,null)}else if(G!==0||E.isRenderTargetTexture||_.has(E)){const pn=_.get(E),$e=_.get(k);ht.bindFramebuffer(R.READ_FRAMEBUFFER,Mu),ht.bindFramebuffer(R.DRAW_FRAMEBUFFER,yu);for(let nn=0;nn<At;nn++)xe?R.framebufferTextureLayer(R.READ_FRAMEBUFFER,R.COLOR_ATTACHMENT0,pn.__webglTexture,G,kt+nn):R.framebufferTexture2D(R.READ_FRAMEBUFFER,R.COLOR_ATTACHMENT0,R.TEXTURE_2D,pn.__webglTexture,G),en?R.framebufferTextureLayer(R.DRAW_FRAMEBUFFER,R.COLOR_ATTACHMENT0,$e.__webglTexture,gt,ve+nn):R.framebufferTexture2D(R.DRAW_FRAMEBUFFER,R.COLOR_ATTACHMENT0,R.TEXTURE_2D,$e.__webglTexture,gt),G!==0?R.blitFramebuffer(Nt,Gt,Et,Mt,Kt,fe,Et,Mt,R.COLOR_BUFFER_BIT,R.NEAREST):en?R.copyTexSubImage3D(he,gt,Kt,fe,ve+nn,Nt,Gt,Et,Mt):R.copyTexSubImage2D(he,gt,Kt,fe,Nt,Gt,Et,Mt);ht.bindFramebuffer(R.READ_FRAMEBUFFER,null),ht.bindFramebuffer(R.DRAW_FRAMEBUFFER,null)}else en?E.isDataTexture||E.isData3DTexture?R.texSubImage3D(he,gt,Kt,fe,ve,Et,Mt,At,pe,zt,Me.data):k.isCompressedArrayTexture?R.compressedTexSubImage3D(he,gt,Kt,fe,ve,Et,Mt,At,pe,Me.data):R.texSubImage3D(he,gt,Kt,fe,ve,Et,Mt,At,pe,zt,Me):E.isDataTexture?R.texSubImage2D(R.TEXTURE_2D,gt,Kt,fe,Et,Mt,pe,zt,Me.data):E.isCompressedTexture?R.compressedTexSubImage2D(R.TEXTURE_2D,gt,Kt,fe,Me.width,Me.height,pe,Me.data):R.texSubImage2D(R.TEXTURE_2D,gt,Kt,fe,Et,Mt,pe,zt,Me);R.pixelStorei(R.UNPACK_ROW_LENGTH,se),R.pixelStorei(R.UNPACK_IMAGE_HEIGHT,on),R.pixelStorei(R.UNPACK_SKIP_PIXELS,Xi),R.pixelStorei(R.UNPACK_SKIP_ROWS,ln),R.pixelStorei(R.UNPACK_SKIP_IMAGES,As),gt===0&&k.generateMipmaps&&R.generateMipmap(he),ht.unbindTexture()},this.initRenderTarget=function(E){_.get(E).__webglFramebuffer===void 0&&O.setupRenderTarget(E)},this.initTexture=function(E){E.isCubeTexture?O.setTextureCube(E,0):E.isData3DTexture?O.setTexture3D(E,0):E.isDataArrayTexture||E.isCompressedArrayTexture?O.setTexture2DArray(E,0):O.setTexture2D(E,0),ht.unbindTexture()},this.resetState=function(){P=0,I=0,F=null,ht.reset(),wt.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return zn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;const e=this.getContext();e.drawingBufferColorSpace=ie._getDrawingBufferColorSpace(t),e.unpackColorSpace=ie._getUnpackColorSpace()}}let Pe,In,Ln;function Hx(){Cesium.Ion.defaultAccessToken="eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJqdGkiOiIzMzA1M2Q0MC01YzY1LTRkNDMtYWYzMS05MDdmZmI2MzAwYjYiLCJpZCI6NDA5NTYwLCJpYXQiOjE3NzQ1NDA1MjR9.szCoX8ALGsZ-jqCF6lvDtejplRGt2AJmQjZ2G7_51G0";let i;try{i=Cesium.Terrain.fromWorldTerrain()}catch{console.warn("Cesium World Terrain unavailable, using ellipsoid"),i=void 0}Pe=new Cesium.Viewer("cesiumContainer",{terrain:i,timeline:!1,animation:!1,baseLayerPicker:!1,geocoder:!1,homeButton:!1,infoBox:!1,sceneModePicker:!1,selectionIndicator:!1,navigationHelpButton:!1,fullscreenButton:!1,shouldAnimate:!1}),In=new Cesium.Viewer("minimapCesium",{terrain:null,timeline:!1,animation:!1,baseLayerPicker:!1,geocoder:!1,homeButton:!1,infoBox:!1,sceneModePicker:!1,selectionIndicator:!1,navigationHelpButton:!1,fullscreenButton:!1,shouldAnimate:!1,skyBox:!1,skyAtmosphere:!1,contextOptions:{webgl:{preserveDrawingBuffer:!0}}}),Ln=new Cesium.Viewer("pauseMinimapCesium",{terrain:null,timeline:!1,animation:!1,baseLayerPicker:!1,geocoder:!1,homeButton:!1,infoBox:!1,sceneModePicker:!1,selectionIndicator:!1,navigationHelpButton:!1,fullscreenButton:!1,shouldAnimate:!1,skyBox:!1,skyAtmosphere:!1,contextOptions:{webgl:{preserveDrawingBuffer:!0}}}),[Pe,In,Ln].forEach(t=>{t.scene.requestRenderMode=!1,t.scene.maximumRenderTimeChange=0,t.scene.globe.maximumScreenSpaceError=2,t.resolutionScale=.75,t.scene.screenSpaceCameraController.enableRotate=!1,t.scene.screenSpaceCameraController.enableTranslate=!1,t.scene.screenSpaceCameraController.enableZoom=!1,t.scene.screenSpaceCameraController.enableTilt=!1,t.scene.screenSpaceCameraController.enableLook=!1,t.scene.screenSpaceCameraController.maximumZoomDistance=25e6,t.scene.globe.tileCacheSize=2048,t.scene.globe.preloadAncestors=!0,t.scene.globe.preloadSiblings=!0,t.scene.globe.loadingDescendantLimit=20,t.scene.globe.skipLevelOfDetail=!0,t.scene.globe.baseScreenSpaceError=1024,t.scene.globe.skipScreenSpaceErrorFactor=16,t.scene.globe.skipLevels=1,t._cesiumWidget._creditContainer.style.display="none"}),Pe.scene.globe.baseColor=Cesium.Color.fromCssColorString("#1a3a1a");try{Pe.scene.globe.tileFailed&&Pe.scene.globe.tileFailed.addEventListener(()=>{})}catch{}return[In,Ln].forEach(t=>{t.scene.globe.enableLighting=!1,t.scene.globe.showGroundAtmosphere=!1,t.scene.fog.enabled=!1,t.scene.highDynamicRange=!1,t.scene.postProcessStages.fxaa.enabled=!1,t.resolutionScale=1,t.scene.globe.maximumScreenSpaceError=2,t.scene.globe.baseColor=Cesium.Color.BLACK,t.scene.skyAtmosphere&&(t.scene.skyAtmosphere.show=!1)}),Pe.scene.globe.enableLighting=!0,Pe.scene.highDynamicRange=!1,Pe.scene.postProcessStages.fxaa.enabled=!0,Pe.scene.skyAtmosphere=new Cesium.SkyAtmosphere,Pe.scene.fog.enabled=!0,Pe.scene.fog.density=1e-4,ma(!1),Pe}function Fl(i){!Pe||!In||!Ln||[Pe,In,Ln].forEach(t=>{t.scene.requestRenderMode=!i,t.scene.maximumRenderTimeChange=i?0:1/0})}function ma(i){if(!Pe)return;const t=Pe.scene.screenSpaceCameraController;t.enableRotate=i,t.enableTranslate=i,t.enableZoom=i,t.enableTilt=i,t.enableLook=i}function Gx(i,t,e,n,s,r){Pe&&(Pe.camera.setView({destination:Cesium.Cartesian3.fromDegrees(i,t,e),orientation:{heading:Cesium.Math.toRadians(n),pitch:Cesium.Math.toRadians(s),roll:Cesium.Math.toRadians(r)}}),Pe.scene.requestRender())}function Vx(i,t,e,n){In&&(In.canvas.width===0||In.canvas.height===0||(In.camera.setView({destination:Cesium.Cartesian3.fromDegrees(i,t,e),orientation:{heading:Cesium.Math.toRadians(n),pitch:Cesium.Math.toRadians(-90),roll:0}}),In.scene.requestRender()))}function Wx(i,t,e,n){Ln&&(Ln.canvas.width===0||Ln.canvas.height===0||(Ln.camera.setView({destination:Cesium.Cartesian3.fromDegrees(i,t,e),orientation:{heading:Cesium.Math.toRadians(n),pitch:Cesium.Math.toRadians(-90),roll:0}}),Ln.scene.requestRender()))}function we(){return Pe}function Xx(){return In}function Yx(){return Ln}class Qh{constructor(){this.speed=15,this.maxSpeed=50,this.minSpeed=4,this.maxDiveSpeed=120,this.turboSpeed=400,this.mass=5,this.wingArea=.65,this.wingspan=2.1,this.aspectRatio=this.wingspan*this.wingspan/this.wingArea,this.clMax=1.6,this.cd0=.02,this.cdWingSpread=.008,this.k=1/(Math.PI*this.aspectRatio*.85),this.isFlapping=!1,this.flapStrength=0,this.flapCooldown=0,this.flapCycleDuration=.35,this.flapThrustImpulse=25,this.flapLiftImpulse=15,this.flapDecay=3,this.flapInput=!1,this.flapPrevInput=!1,this.gravity=9.8,this.airDensity=1.225,this.isGliding=!0,this.wingSpread=1,this.verticalSpeed=0,this.glideRatio=20,this.thermalLift=0,this.thermalStrength=0,this.thermalTimer=0,this.inThermal=!1,this.pitch=0,this.roll=0,this.heading=0,this.pitchRate=2,this.rollRate=3.2,this.yawRate=1,this.isBoosting=!1,this.boostTimeRemaining=0,this.boostDuration=4,this.boostMultiplier=2.5,this.boostRotations=0,this.boostPressed=!1,this.isTurbo=!1,this.turboPressed=!1,this.turboWindup=0,this.throttle=0,this.quaternion=new qe}boost(){this.boostTimeRemaining<=0&&(this.isBoosting=!0,this.boostTimeRemaining=this.boostDuration)}reset(t,e,n,s,r,a){this.heading=s||0,this.pitch=r||0,this.roll=a||0,this.speed=15,this.verticalSpeed=0,this.thermalLift=0,this.thermalStrength=0,this.isGliding=!0,this.isFlapping=!1,this.flapStrength=0,this.flapCooldown=0,this.wingSpread=1,this.isTurbo=!1,this.turboWindup=0;const o=new Ne(Se.degToRad(this.pitch),Se.degToRad(this.heading),Se.degToRad(this.roll),"YXZ");this.quaternion.setFromEuler(o)}getAirDensity(t){const e=t*.3048;return this.airDensity*Math.exp(-e/8500)}getLiftCoefficient(t){return t<-5?-.2:t<12?this.clMax*(t/12):t<18?this.clMax*(1-(t-12)/12):.1}updateThermals(t,e){this.thermalTimer+=t;const n=Math.max(0,1-(e-2e3)/15e3),s=this.thermalTimer,r=Math.sin(s*.3)*.4+Math.sin(s*.7+1.5)*.3+Math.sin(s*1.2+3)*.3;this.thermalStrength=Math.max(0,r)*n,this.inThermal=this.thermalStrength>.15;const a=Math.abs(this.roll)>15&&Math.abs(this.roll)<45?1.5:1;this.thermalLift=this.thermalStrength*3*a*this.wingSpread}update(t,e){this.boostTimeRemaining>0&&(this.boostTimeRemaining-=e,this.boostTimeRemaining<=0&&(this.isBoosting=!1,this.boostTimeRemaining=0)),t.boost?(!this.boostPressed&&!this.isBoosting&&!this.isTurbo&&this.boost(),this.boostPressed=!0):this.boostPressed=!1,t.turbo?(this.turboPressed||(this.isTurbo=!this.isTurbo,this.isTurbo&&(this.isBoosting=!1,this.boostTimeRemaining=0)),this.turboPressed=!0):this.turboPressed=!1,this.turboWindup=this.isTurbo?Math.min(1,this.turboWindup+e*.7):Math.max(0,this.turboWindup-e*1.5),this.flapInput=t.flap||!1,this.flapInput&&!this.isBoosting&&!this.isTurbo?(this.isFlapping=!0,this.isGliding=!1,this.flapCooldown-=e,this.flapCooldown<=0&&(this.flapStrength=1,this.flapCooldown=this.flapCycleDuration)):this.flapInput||(this.isFlapping=!1,!this.isBoosting&&!this.isTurbo&&(this.isGliding=!0)),this.flapStrength=Math.max(0,this.flapStrength-this.flapDecay*e),this.isTurbo||this.turboWindup>.1?this.wingSpread+=(.15-this.wingSpread)*e*6:this.isBoosting?(this.wingSpread+=(.2-this.wingSpread)*e*5,this.isGliding=!1):this.isGliding?this.wingSpread+=(1-this.wingSpread)*e*3:this.wingSpread=.65+this.flapStrength*.25,this.throttle=this.isFlapping?.3+this.flapStrength*.7:0;const n=this.getAirDensity(0),s=this.speed,r=.5*n*s*s,a=Math.max(-10,Math.min(20,-this.pitch*.3)),o=this.getLiftCoefficient(a)*this.wingSpread,l=r*this.wingArea*o,c=this.k*o*o,h=this.cd0+c+this.wingSpread*this.cdWingSpread;let u=r*this.wingArea*h;this.isBoosting&&(u*=.25),(this.isTurbo||this.turboWindup>.1)&&(u*=.05);let d=0;this.isFlapping&&(d=this.flapThrustImpulse*this.flapStrength);const f=Se.degToRad(this.pitch),g=this.mass*this.gravity*Math.sin(f),m=(d-u+g)/this.mass;this.speed+=m*e;let p=this.isBoosting?this.maxDiveSpeed:this.maxSpeed;if(this.pitch<-20&&!this.isBoosting&&(p+=(this.maxDiveSpeed-this.maxSpeed)*Math.min(1,Math.abs(this.pitch)/60)),(this.isTurbo||this.turboWindup>.01)&&(p=this.turboSpeed),this.speed=Math.max(this.minSpeed,Math.min(p,this.speed)),this.isTurbo||this.turboWindup>.01){const B=this.turboWindup*this.turboWindup*(3-2*this.turboWindup);this.speed+=(this.turboSpeed*B-this.speed)*e*2.5}this.isBoosting&&(this.speed+=(this.maxDiveSpeed*.8-this.speed)*e*3),this.updateThermals(e,0);const w=this.mass*this.gravity,b=this.isFlapping?this.flapLiftImpulse*this.flapStrength:0,M=(l+b-w+this.thermalLift*this.mass)/this.mass;this.verticalSpeed+=(M*.15-this.verticalSpeed)*e*2,this.speed<=this.minSpeed*1.3&&!this.isBoosting&&!this.isTurbo&&(this.pitch=Se.lerp(this.pitch,Math.min(this.pitch,-8),e*.8));const y=Math.min(1.2,this.speed/this.maxSpeed),T=y>.3?.5+y*.5:y/.3*.5,C=t.pitch*this.pitchRate*e*T,L=t.roll*this.rollRate*e*T,v=t.yaw*this.yawRate*e*T,S=new qe().setFromAxisAngle(new D(1,0,0),C),P=new qe().setFromAxisAngle(new D(0,0,1),L),I=new qe().setFromAxisAngle(new D(0,1,0),v);this.quaternion.multiply(I).multiply(S).multiply(P).normalize();const F=new Ne().setFromQuaternion(this.quaternion,"YXZ");return this.heading=Se.radToDeg(F.y),this.pitch=Se.radToDeg(F.x),this.roll=Se.radToDeg(F.z),{speed:this.speed,pitch:this.pitch,roll:this.roll,heading:this.heading,isBoosting:this.isBoosting,boostTimeRemaining:this.boostTimeRemaining,boostDuration:this.boostDuration,boostRotations:this.boostRotations,isGliding:this.isGliding,isFlapping:this.isFlapping,flapStrength:this.flapStrength,wingSpread:this.wingSpread,thermalStrength:this.thermalStrength,inThermal:this.inThermal,verticalSpeed:this.verticalSpeed,flapPhase:this.flapCooldown,liftForce:l,isTurbo:this.isTurbo,turboWindup:this.turboWindup}}}class qx{constructor(){this.keys={},this.prevKeys={},window.addEventListener("keydown",t=>this.keys[t.key.toLowerCase()]=!0),window.addEventListener("keyup",t=>this.keys[t.key.toLowerCase()]=!1),this.mouseDragging=!1,this.mouseDeltaX=0,this.mouseDeltaY=0,this.lastMouseX=0,this.lastMouseY=0,window.addEventListener("mousedown",t=>{t.button===0&&(this.mouseDragging=!0,this.lastMouseX=t.clientX,this.lastMouseY=t.clientY)}),window.addEventListener("mousemove",t=>{this.mouseDragging&&(this.mouseDeltaX+=t.clientX-this.lastMouseX,this.mouseDeltaY+=t.clientY-this.lastMouseY,this.lastMouseX=t.clientX,this.lastMouseY=t.clientY)}),window.addEventListener("mouseup",t=>{t.button===0&&(this.mouseDragging=!1)}),this.input={throttle:0,pitch:0,roll:0,yaw:0,boost:!1,turbo:!1,flap:!1,cameraYaw:0,cameraPitch:0,isDragging:!1,fire:!1,fireFlare:!1,weaponIndex:-1,toggleWeapon:!1},this.sensitivity=.2,this.isMobile=this.detectMobile(),this.tiltEnabled=!1,this.tiltPitch=0,this.tiltRoll=0,this.tiltCalibration={pitch:0,roll:0},this.tiltSensitivity=1,this.touchThrottle=0,this.touchBoosting=!1,this.touchTurbo=!1,this.touchFlapping=!1,this.touchFiring=!1,this.touchFlare=!1,this.touchWeaponToggle=!1,this.touchPrevWeaponToggle=!1,this.touchCameraDragging=!1,this.touchCameraDeltaX=0,this.touchCameraDeltaY=0,this.lastTouchX=0,this.lastTouchY=0,this.cameraFingerID=null,this.isMobile&&this.initMobileControls()}detectMobile(){return/Android|iPhone|iPad|iPod|webOS|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)||"ontouchstart"in window||navigator.maxTouchPoints>0}async initMobileControls(){this.createTouchUI(),await this.requestOrientationPermission(),window.addEventListener("deviceorientation",s=>{if(!this.tiltEnabled)return;const r=s.beta||0,a=s.gamma||0;this.tiltPitch=r-this.tiltCalibration.pitch,this.tiltRoll=a-this.tiltCalibration.roll},!0);const t=document.getElementById("cesiumContainer"),n=document.getElementById("threeContainer")||t||document.body;n.addEventListener("touchstart",s=>this.handleViewTouchStart(s),{passive:!1}),n.addEventListener("touchmove",s=>this.handleViewTouchMove(s),{passive:!1}),n.addEventListener("touchend",s=>this.handleViewTouchEnd(s),{passive:!1})}async requestOrientationPermission(){if(typeof DeviceOrientationEvent<"u"&&typeof DeviceOrientationEvent.requestPermission=="function")try{await DeviceOrientationEvent.requestPermission()==="granted"&&(this.tiltEnabled=!0)}catch(t){console.warn("Device orientation permission denied:",t),this.tiltEnabled=!1}else this.tiltEnabled=!0}calibrateTilt(){this.tiltCalibration.pitch=this.tiltPitch+this.tiltCalibration.pitch,this.tiltCalibration.roll=this.tiltRoll+this.tiltCalibration.roll}createTouchUI(){const t=document.createElement("div");t.id="mobile-controls",t.style.cssText=`
			position: fixed; top: 0; left: 0; width: 100%; height: 100%;
			pointer-events: none; z-index: 25; display: none;
		`;const e=document.createElement("div");e.id="mobile-throttle",e.style.cssText=`
			position: absolute; left: 8px; top: 50%; transform: translateY(-50%);
			width: 44px; height: 200px; pointer-events: auto;
			background: rgba(0,0,0,0.4); border: 1px solid rgba(212,160,23,0.5);
			border-radius: 6px; display: flex; flex-direction: column;
			align-items: center; justify-content: flex-end;
			touch-action: none;
		`;const n=document.createElement("div");n.id="mobile-throttle-fill",n.style.cssText=`
			width: 100%; background: rgba(212,160,23,0.5);
			border-radius: 0 0 5px 5px; transition: height 0.05s;
			position: absolute; bottom: 0; height: 30%;
		`,e.appendChild(n);const s=document.createElement("div");s.style.cssText=`
			position: absolute; top: -18px; left: 0; width: 100%; text-align: center;
			font-size: 9px; color: #d4a017; pointer-events: none;
		`,s.textContent="WING POWER",e.appendChild(s);let r=null;e.addEventListener("touchstart",m=>{m.preventDefault(),m.stopPropagation();const p=m.changedTouches[0];r=p.identifier,this.updateThrottleFromTouch(p,e)},{passive:!1}),e.addEventListener("touchmove",m=>{m.preventDefault(),m.stopPropagation();for(const p of m.changedTouches)p.identifier===r&&this.updateThrottleFromTouch(p,e)},{passive:!1}),e.addEventListener("touchend",m=>{for(const p of m.changedTouches)p.identifier===r&&(r=null)});const a=document.createElement("div");a.id="mobile-buttons",a.style.cssText=`
			position: absolute; right: 8px; bottom: 40%;
			display: flex; flex-direction: column; gap: 8px;
			pointer-events: auto; align-items: center;
		`;const o=(m,p,w,b=52)=>{const M=document.createElement("div");return M.id=m,M.style.cssText=`
				width: ${b}px; height: ${b}px; border-radius: 50%;
				background: ${w}; border: 2px solid rgba(255,255,255,0.3);
				display: flex; align-items: center; justify-content: center;
				font-size: 9px; color: #fff; text-align: center;
				user-select: none; touch-action: none;
				line-height: 1.1; font-weight: bold;
			`,M.textContent=p,M},l=o("mobile-fire","TALON","rgba(220,50,50,0.6)",58),c=o("mobile-flap","FLAP","rgba(80,180,80,0.6)",64),h=o("mobile-turbo","TURBO","rgba(255,140,0,0.6)",48),u=o("mobile-boost","DIVE","rgba(50,120,220,0.6)",44),d=o("mobile-weapon","SWITCH","rgba(212,160,23,0.5)",42),f=o("mobile-flare","SCREECH","rgba(100,200,100,0.5)",42),g=o("mobile-calibrate","LEVEL","rgba(150,150,150,0.5)",36);l.addEventListener("touchstart",m=>{m.preventDefault(),m.stopPropagation(),this.touchFiring=!0,l.style.background="rgba(255,80,80,0.8)"},{passive:!1}),l.addEventListener("touchend",m=>{this.touchFiring=!1,l.style.background="rgba(220,50,50,0.6)"}),c.addEventListener("touchstart",m=>{m.preventDefault(),m.stopPropagation(),this.touchFlapping=!0,c.style.background="rgba(100,220,100,0.9)"},{passive:!1}),c.addEventListener("touchend",m=>{this.touchFlapping=!1,c.style.background="rgba(80,180,80,0.6)"}),h.addEventListener("touchstart",m=>{m.preventDefault(),m.stopPropagation(),this.touchTurbo=!0,h.style.background=this.touchTurbo?"rgba(255,180,0,0.9)":"rgba(255,140,0,0.6)",setTimeout(()=>{h.style.background="rgba(255,140,0,0.6)"},200)},{passive:!1}),u.addEventListener("touchstart",m=>{m.preventDefault(),m.stopPropagation(),this.touchBoosting=!0,u.style.background="rgba(80,160,255,0.8)"},{passive:!1}),u.addEventListener("touchend",m=>{this.touchBoosting=!1,u.style.background="rgba(50,120,220,0.6)"}),d.addEventListener("touchstart",m=>{m.preventDefault(),m.stopPropagation(),this.touchWeaponToggle=!0,d.style.background="rgba(212,160,23,0.8)",setTimeout(()=>{d.style.background="rgba(212,160,23,0.5)"},200)},{passive:!1}),f.addEventListener("touchstart",m=>{m.preventDefault(),m.stopPropagation(),this.touchFlare=!0,f.style.background="rgba(140,240,140,0.8)"},{passive:!1}),f.addEventListener("touchend",m=>{this.touchFlare=!1,f.style.background="rgba(100,200,100,0.5)"}),g.addEventListener("touchstart",m=>{m.preventDefault(),m.stopPropagation(),this.calibrateTilt(),g.style.background="rgba(200,200,200,0.8)",setTimeout(()=>{g.style.background="rgba(150,150,150,0.5)"},300)},{passive:!1}),a.appendChild(l),a.appendChild(c),a.appendChild(h),a.appendChild(u),a.appendChild(d),a.appendChild(f),a.appendChild(g);const x=document.createElement("div");x.id="mobile-pause",x.style.cssText=`
			position: absolute; top: 8px; right: 8px; width: 36px; height: 36px;
			background: rgba(0,0,0,0.5); border: 1px solid rgba(212,160,23,0.5);
			border-radius: 4px; display: flex; align-items: center; justify-content: center;
			font-size: 18px; color: #d4a017; pointer-events: auto;
			touch-action: none; user-select: none;
		`,x.textContent="⏸",x.addEventListener("touchstart",m=>{m.preventDefault(),m.stopPropagation(),window.dispatchEvent(new KeyboardEvent("keydown",{key:"Escape"})),setTimeout(()=>{window.dispatchEvent(new KeyboardEvent("keyup",{key:"Escape"}))},100)},{passive:!1}),t.appendChild(e),t.appendChild(a),t.appendChild(x),document.body.appendChild(t),this.mobileControlsContainer=t}updateThrottleFromTouch(t,e){const n=e.getBoundingClientRect(),s=t.clientY-n.top,r=n.height,a=1-Math.max(0,Math.min(1,s/r));this.touchThrottle=a;const o=document.getElementById("mobile-throttle-fill");o&&(o.style.height=`${a*100}%`)}handleViewTouchStart(t){if(t.target.closest("#mobile-controls"))return;const e=t.changedTouches[0];this.cameraFingerID===null&&(this.cameraFingerID=e.identifier,this.lastTouchX=e.clientX,this.lastTouchY=e.clientY,this.touchCameraDragging=!0)}handleViewTouchMove(t){for(const e of t.changedTouches)e.identifier===this.cameraFingerID&&(this.touchCameraDeltaX+=e.clientX-this.lastTouchX,this.touchCameraDeltaY+=e.clientY-this.lastTouchY,this.lastTouchX=e.clientX,this.lastTouchY=e.clientY)}handleViewTouchEnd(t){for(const e of t.changedTouches)e.identifier===this.cameraFingerID&&(this.cameraFingerID=null,this.touchCameraDragging=!1)}setMobileVisible(t){this.mobileControlsContainer&&(this.mobileControlsContainer.style.display=t?"block":"none")}setSensitivity(t){this.sensitivity=t}update(){this.input.boost=!!this.keys[" "],this.input.turbo=!!this.keys.shift,this.input.isDragging=this.mouseDragging,this.input.fire=!!this.keys.enter||!!this.keys.f,this.input.fireFlare=!!this.keys.v,this.input.toggleWeapon=!!this.keys.q&&!this.prevKeys.q,this.input.weaponIndex=-1,this.keys[1]&&(this.input.weaponIndex=0),this.keys[2]&&(this.input.weaponIndex=1),this.input.flap=!!this.keys.w,this.keys.s?this.input.throttle=Math.max(0,this.input.throttle-.5*.016):this.input.flap?this.input.throttle=Math.min(1,this.input.throttle+.5*.016):this.input.throttle=Math.max(0,this.input.throttle-.2*.016);const t=this.keys.arrowup?-1:this.keys.arrowdown?1:0;this.input.pitch=this.lerp(this.input.pitch,t,.1);const e=this.keys.arrowleft?-1:this.keys.arrowright?1:0;this.input.roll=this.lerp(this.input.roll,e,.1);const n=this.keys.a?-1:this.keys.d?1:0;if(this.input.yaw=this.lerp(this.input.yaw,n,.1),this.isMobile&&this.tiltEnabled){let a=0;Math.abs(this.tiltRoll)>3&&(a=Math.max(-1,Math.min(1,(this.tiltRoll-Math.sign(this.tiltRoll)*3)/32)));let o=0;Math.abs(this.tiltPitch)>3&&(o=Math.max(-1,Math.min(1,(this.tiltPitch-Math.sign(this.tiltPitch)*3)/32))),this.input.roll=this.lerp(this.input.roll,a*this.tiltSensitivity,.15),this.input.pitch=this.lerp(this.input.pitch,o*this.tiltSensitivity,.15),Math.abs(a)>.3?this.input.yaw=this.lerp(this.input.yaw,a*.4,.1):this.input.yaw=this.lerp(this.input.yaw,0,.1)}return this.isMobile&&(this.input.throttle=this.touchThrottle,this.input.boost=this.input.boost||this.touchBoosting,this.input.turbo=this.input.turbo||this.touchTurbo,this.input.flap=this.input.flap||this.touchFlapping,this.touchFlapping&&(this.input.throttle=Math.min(1,this.input.throttle+.5*.016)),this.input.fire=this.input.fire||this.touchFiring,this.input.fireFlare=this.input.fireFlare||this.touchFlare,this.touchWeaponToggle&&!this.touchPrevWeaponToggle&&(this.input.toggleWeapon=!0),this.touchPrevWeaponToggle=this.touchWeaponToggle,this.touchWeaponToggle=!1,this.touchCameraDragging&&(this.input.isDragging=!0,this.input.cameraYaw+=this.touchCameraDeltaX*this.sensitivity,this.input.cameraPitch-=this.touchCameraDeltaY*this.sensitivity,this.input.cameraPitch=Math.max(-85,Math.min(85,this.input.cameraPitch)),this.touchCameraDeltaX=0,this.touchCameraDeltaY=0)),this.mouseDragging?(this.input.cameraYaw+=this.mouseDeltaX*this.sensitivity,this.input.cameraPitch-=this.mouseDeltaY*this.sensitivity,this.input.cameraPitch=Math.max(-85,Math.min(85,this.input.cameraPitch)),this.mouseDeltaX=0,this.mouseDeltaY=0):this.touchCameraDragging||(this.input.cameraYaw=this.lerp(this.input.cameraYaw,0,.1),this.input.cameraPitch=this.lerp(this.input.cameraPitch,0,.1)),this.prevKeys={...this.keys},this.input}reset(){this.input.cameraYaw=0,this.input.cameraPitch=0,this.mouseDragging=!1,this.mouseDeltaX=0,this.mouseDeltaY=0,this.input.throttle=0,this.input.pitch=0,this.input.roll=0,this.input.yaw=0,this.touchThrottle=0,this.touchBoosting=!1,this.touchFiring=!1,this.touchFlare=!1}lerp(t,e,n){return(1-n)*t+n*e}}function th(i,t,e,n){const s=new me(i,t,e,4,1,4),r=s.attributes.position;for(let a=0;a<r.count;a++){const o=r.getY(a),l=r.getX(a),h=r.getZ(a)/e+.5,u=l/i+.5;if(o>0){const d=e*.15*h*(1-h)*(1-u*.4);r.setY(a,d+.001)}else r.setY(a,-.001)}return r.needsUpdate=!0,s.computeVertexNormals(),new it(s,n)}function Zx(){const i=new Ie,t=new Vt({color:1969924,flatShading:!0}),e=new Vt({color:1378304,flatShading:!0,side:ke}),n=new Vt({color:3876117,flatShading:!0}),s=new Vt({color:16315628,flatShading:!0}),r=new Vt({color:15245312,flatShading:!0}),a=new Vt({color:13410304}),o=new ze({color:0}),l=new Vt({color:15789536,flatShading:!0,side:ke}),c=new Vt({color:15245312,flatShading:!0}),h=new Vt({color:656384,flatShading:!0,side:ke}),u=new Vt({color:15261904,flatShading:!0}),d=new ne(1,10,8);d.scale(.085,.06,.22),i.add(new it(d,t));const f=new ne(1,8,6);f.scale(.07,.055,.15);const g=new it(f,n);g.position.set(0,-.018,.03),i.add(g);const x=new Ye(.028,.04,.05,6),m=new it(x,u);m.position.set(0,.025,.17),m.rotation.x=-.25,i.add(m);const p=new ne(.042,8,7);p.scale(1,.95,1.1);const w=new it(p,s);w.position.set(0,.045,.21),i.add(w);const b=new me(.055,.01,.022),M=new it(b,u);M.position.set(0,.062,.225),i.add(M);const y=new tn(.013,.05,5),T=new it(y,r);T.position.set(0,.04,.255),T.rotation.x=Math.PI*.42,i.add(T);const C=new ne(.006,4,3),L=new it(C,r);L.position.set(0,.028,.268),i.add(L);const v=new tn(.007,.025,4),S=new it(v,r);S.position.set(0,.03,.25),S.rotation.x=Math.PI*.52,i.add(S);const P=new ne(.009,5,4),I=new it(P,r);I.position.set(0,.048,.235),i.add(I);for(const st of[-1,1]){const Z=new it(new ne(.013,6,5),new Vt({color:2760720}));Z.position.set(st*.029,.052,.226),i.add(Z);const j=new it(new ne(.01,6,5),a);j.position.set(st*.03,.053,.228),i.add(j);const Ct=new it(new ne(.005,5,4),o);Ct.position.set(st*.033,.053,.233),i.add(Ct)}function F(st){const Z=st?1:-1,j=new Ie;j.position.set(Z*.065,.015,.01);const Ct=th(.38,.01,.17,e);Ct.position.set(Z*.19,0,0),j.add(Ct);for(let Y=0;Y<3;Y++){const Q=new me(.22-Y*.03,.003,.02),xt=new it(Q,t);xt.position.set(Z*(.16+Y*.04),.01+Y*.002,-.03+Y*.022),j.add(xt)}const It=new Ie;It.position.set(Z*.42,0,-.01);const $t=th(.45,.008,.11,e);$t.position.set(Z*.225,0,0),It.add($t);const te=[];for(let Y=0;Y<5;Y++){const Q=.1-Y*.012,xt=new me(Q,.003,.018-Y*.002);xt.translate(Z*Q/2,0,0);const Ft=new it(xt,h);Ft.position.set(Z*.43,0,-.02+Y*.016),Ft.rotation.y=Z*(Y-2)*.04,It.add(Ft),te.push(Ft)}return j.add(It),{shoulderPivot:j,elbowPivot:It,primaries:te}}const B=F(!0),N=F(!1);i.add(B.shoulderPivot),i.add(N.shoulderPivot);const H=new Ie;H.position.set(0,.008,-.2);for(let st=0;st<9;st++){const Z=(st-4)*.065,j=new me(.028,.005,.14);j.translate(0,0,-.07);const Ct=new it(j,l);Ct.rotation.y=Z,Ct.position.x=Math.sin(Z)*.015,H.add(Ct)}const z=new me(.08,.02,.07),$=new it(z,t);$.position.set(0,.005,.02),H.add($),i.add(H);for(const st of[-1,1]){const Z=new it(new Ye(.014,.01,.045,5),t);Z.position.set(st*.025,-.045,-.05),Z.rotation.x=.5,i.add(Z);const j=new it(new Ye(.005,.006,.045,5),c);j.position.set(st*.025,-.078,-.06),i.add(j);for(let Ct=0;Ct<4;Ct++){const It=(Ct-1.5)*.45,$t=new it(new Ye(.003,.001,.022,3),c);$t.position.set(st*.025+Math.sin(It)*.012,-.098,-.06+Math.cos(It)*.01),$t.rotation.set(.7,0,It*.3),i.add($t)}}return i.rotation.y=Math.PI,i.userData={leftShoulder:B.shoulderPivot,rightShoulder:N.shoulderPivot,leftElbow:B.elbowPivot,rightElbow:N.elbowPivot,leftPrimaries:B.primaries,rightPrimaries:N.primaries,tailPivot:H,flapPhase:0,smoothRoll:0,smoothPitch:0,smoothYaw:0},i}function $x(i,t,e){if(!i||!i.userData||!i.userData.leftShoulder)return;const n=i.userData,s=n.leftShoulder,r=n.rightShoulder,a=n.leftElbow,o=n.rightElbow,l=n.tailPivot,c=n.leftPrimaries,h=n.rightPrimaries,u=e.isFlapping||!1,d=e.flapStrength||0,f=e.isGliding||!1,g=e.isBoosting||!1,x=e.isTurbo||!1,m=e.speed||15,p=e.roll||0,w=e.pitch||0,b=e.yaw||0,M=(N,H,z)=>N+(H-N)*Math.min(1,z);n.smoothRoll=M(n.smoothRoll,p,t*4),n.smoothPitch=M(n.smoothPitch,w,t*3),n.smoothYaw=M(n.smoothYaw,b||0,t*4);const y=n.smoothRoll/45,T=y*.12,C=-y*.12,L=n.smoothPitch/30,v=L*.06,S=n.smoothYaw,P=S*.05,I=-S*.05,B=(1-Math.min(1,m/50))*.06;if(x)s.rotation.z=M(s.rotation.z,-.7+T,t*8),r.rotation.z=M(r.rotation.z,.7+C,t*8),a.rotation.z=M(a.rotation.z,-.4,t*6),o.rotation.z=M(o.rotation.z,.4,t*6),s.rotation.y=M(s.rotation.y,-.15,t*5),r.rotation.y=M(r.rotation.y,.15,t*5),l&&(l.rotation.x=M(l.rotation.x,-.1+L*.05,t*5));else if(g)s.rotation.z=M(s.rotation.z,-.6+T,t*7),r.rotation.z=M(r.rotation.z,.6+C,t*7),a.rotation.z=M(a.rotation.z,-.35,t*5),o.rotation.z=M(o.rotation.z,.35,t*5),l&&(l.rotation.x=M(l.rotation.x,.15+L*.05,t*4));else if(u&&d>0){n.flapPhase+=t*8;const N=n.flapPhase%(Math.PI*2),H=Math.sin(N)*.55*d,z=Math.sin(N+.35)*.22*d,$=Math.cos(N)*.1*d;s.rotation.z=H+T+P,r.rotation.z=-H+C+I,a.rotation.z=z,o.rotation.z=-z,s.rotation.y=$+v,r.rotation.y=-$-v,l&&(l.rotation.x=Math.sin(N+1)*.06+L*.03,l.rotation.y=S*.08)}else if(f){const N=performance.now()*.001,z=.08+Math.sin(N*.5)*.015;s.rotation.z=M(s.rotation.z,z+T+P,t*3),r.rotation.z=M(r.rotation.z,-z+C+I,t*3),a.rotation.z=M(a.rotation.z,.02+Math.abs(y)*.05,t*3),o.rotation.z=M(o.rotation.z,-.02-Math.abs(y)*.05,t*3),s.rotation.y=M(s.rotation.y,v,t*2.5),r.rotation.y=M(r.rotation.y,-v,t*2.5),l&&(l.rotation.x=M(l.rotation.x,L*.06,t*3),l.rotation.y=M(l.rotation.y,S*.1,t*3)),n.flapPhase=0}else s.rotation.z=M(s.rotation.z,.05+T,t*4),r.rotation.z=M(r.rotation.z,-.05+C,t*4),a.rotation.z=M(a.rotation.z,0,t*4),o.rotation.z=M(o.rotation.z,0,t*4),s.rotation.y=M(s.rotation.y,v,t*3),r.rotation.y=M(r.rotation.y,-v,t*3);if(c&&h)for(let N=0;N<Math.min(c.length,5);N++){const H=B*(N-2);c[N]&&(c[N].rotation.y=M(c[N].rotation.y,H,t*3)),h[N]&&(h[N].rotation.y=M(h[N].rotation.y,-H,t*3))}if(!x&&!g&&a&&o){const N=performance.now()*.001;a.rotation.x=Math.sin(N*3+1)*.008*(1+m/50),o.rotation.x=-Math.sin(N*3+1)*.008*(1+m/50)}}function Si(i,t,e,n,s,r){const a=Cesium.Math.toRadians(n),o=Cesium.Math.toRadians(s),l=6371e3,c=r*Math.cos(a)*Math.cos(o)/l,h=r*Math.sin(a)*Math.cos(o)/(l*Math.cos(Cesium.Math.toRadians(t))),u=r*Math.sin(o);return{lon:i+Cesium.Math.toDegrees(h),lat:t+Cesium.Math.toDegrees(c),alt:e+u}}async function tu(i,t){try{const n=await(await fetch(`https://nominatim.openstreetmap.org/reverse?format=json&lat=${t}&lon=${i}&zoom=5&addressdetails=1`)).json();if(n&&n.address){const s=n.address,r=s.state||s.region||s.province,a=s.country;if(r&&a)return`${r}, ${a}`.toUpperCase();if(a)return a.toUpperCase()}}catch(e){console.error("Reverse geocoding error:",e)}return null}function eu(i,t,e,n){const r=t*Math.PI/180,a=n*Math.PI/180,o=(n-t)*Math.PI/180,l=(e-i)*Math.PI/180,c=Math.sin(o/2)*Math.sin(o/2)+Math.cos(r)*Math.cos(a)*Math.sin(l/2)*Math.sin(l/2);return 6371e3*(2*Math.atan2(Math.sqrt(c),Math.sqrt(1-c)))}class Kx{constructor(){this.speedElem=document.getElementById("speed"),this.altElem=document.getElementById("altitude"),this.timeElem=document.getElementById("time"),this.scoreElem=document.getElementById("score"),this.fpsElem=document.getElementById("fps"),this.localDateTimeElem=document.getElementById("local-datetime"),this.coordsElem=document.getElementById("coords"),this.minimapCanvas=document.getElementById("minimap"),this.miniCtx=this.minimapCanvas.getContext("2d"),this.pauseMinimapCanvas=document.getElementById("pauseMinimap"),this.pauseMinimapCanvas&&(this.pauseMiniCtx=this.pauseMinimapCanvas.getContext("2d")),this.pauseRegionElem=document.getElementById("pause-region"),this.pauseLatElem=document.getElementById("pause-lat"),this.pauseLonElem=document.getElementById("pause-lon"),this.pauseAltElem=document.getElementById("pause-alt"),this.pauseTimeElem=document.getElementById("pause-time"),this.uiContainer=document.getElementById("uiContainer"),this.compassTape=document.getElementById("compass-tape"),this.headingDisplay=document.getElementById("heading-display"),this.regionNotif=document.getElementById("region-notification"),this.regionNameElem=document.getElementById("region-name"),this.regionTimeout=null,this.pullUpElem=document.getElementById("pull-up-warning"),this.flightModeElem=document.getElementById("flight-mode-indicator"),this.thermalIndicator=document.getElementById("thermal-indicator"),this.wingSpreadBar=document.getElementById("wing-spread-bar"),this.liftValueElem=document.getElementById("lift-value"),this.vspeedValueElem=document.getElementById("vspeed-value"),this.weatherConditionElem=document.getElementById("weather-condition"),this.weatherWindElem=document.getElementById("weather-wind"),this.killNotifContainer=document.getElementById("kill-notification-container"),this.killTextElem=document.getElementById("kill-text"),this.killScoreElem=document.getElementById("kill-score"),this.killTimeout=null,this.weaponElems={gun:document.getElementById("weapon-gun"),missile:document.getElementById("weapon-missile"),flare:document.getElementById("weapon-flare")},this.weaponAmmoElems={gun:this.weaponElems.gun.querySelector(".weapon-ammo"),missile:this.weaponElems.missile.querySelector(".weapon-ammo"),flare:this.weaponElems.flare.querySelector(".weapon-ammo")},this.weaponProgressElems={gun:this.weaponElems.gun.querySelector(".weapon-progress"),missile:this.weaponElems.missile.querySelector(".weapon-progress"),flare:this.weaponElems.flare.querySelector(".weapon-progress")},this.vignette=document.getElementById("transition-vignette"),this.startTime=Date.now(),this.smoothedPitch=0,this.smoothedRoll=0,this.smoothedHeading=0,this.smoothedThrottle=0,this.smoothedYaw=0,this.smoothedBoostScale=1,this.currentShakeX=0,this.currentShakeY=0,this.minimapRange=1,this.showHorizonLines=!1,this.npcMarkers=new Map,this.npcContainer=document.createElement("div"),this.npcContainer.id="npc-markers-layer",this.npcContainer.style.cssText="position:absolute; top:0; left:0; width:100%; height:100%; pointer-events:none; z-index:15;",this.uiContainer.appendChild(this.npcContainer),this.createHorizon(),this.createMissileCrosshair(),this.createCompass(),this.resizeMinimap(),window.addEventListener("resize",()=>this.resizeMinimap())}createMissileCrosshair(){if(document.getElementById("missile-crosshair"))return;const t=document.createElement("div");t.id="missile-crosshair",t.style.cssText=`
			position: absolute;
			left: 50%;
			top: 50%;
			transform: translate(-50%, -50%);
			width: 220px;
			height: 220px;
			display: none;
		`;const e=document.createElement("div");e.style.cssText=`
			position:absolute; left:50%; top:50%; width:76px; height:76px; transform:translate(-50%,-50%);
			border-radius:50%;
			border:2px solid #d4a017;
		`;const n=document.createElement("div");n.style.cssText="position:absolute; left:50%; top:50%; transform:translate(-50%,-50%); width:10px; height:10px; border-radius:50%; background:#d4a017;";const s=(u,d,f,g,x)=>{const m=document.createElement("div");return m.style.cssText=`position:absolute; left:${u}; top:${d}; width:${f}; height:${g}; background:#d4a017; transform:${x};`,m},r=48,a=18,o=s("calc(50% - "+r+"px - "+a/2+"px)","50%","18px","2px","translateY(-50%)"),l=s("calc(50% + "+r+"px - "+a/2+"px)","50%","18px","2px","translateY(-50%)"),c=s("50%","calc(50% - "+r+"px - "+a/2+"px)","2px",a+"px","translateX(-50%)");t.appendChild(e),t.appendChild(n),t.appendChild(c),t.appendChild(o),t.appendChild(l);const h=document.getElementById("horizon-container");h?h.appendChild(t):this.uiContainer.appendChild(t),this.missileCrosshair=t}showMissileCrosshair(t){if(!this.missileCrosshair)return;const e=document.getElementById("normal-crosshair");t?(e&&(e.style.display="none"),this.missileCrosshair.style.display="block"):(this.missileCrosshair.style.display="none",e&&(e.style.display="flex"))}createCompass(){if(!this.compassTape)return;const t=5,e=4;this.compassTape.innerHTML="";for(let n=-360;n<=720;n+=t){const s=document.createElement("div");s.className="compass-tick";const r=n%10===0;if(s.style.left=`${(n+360)*e}px`,s.style.height=r?"10px":"5px",r){const a=document.createElement("div");a.className="compass-label",a.style.left=`${(n+360)*e}px`;let o=n%360;o<0&&(o+=360);let l=Math.round(o).toString().padStart(3,"0");Math.round(o)===0||Math.round(o)===360?l="N":Math.round(o)===90?l="E":Math.round(o)===180?l="S":Math.round(o)===270&&(l="W"),a.innerText=l,this.compassTape.appendChild(a)}this.compassTape.appendChild(s)}}resetTime(){this.startTime=Date.now()}setMinimapRange(t){this.minimapRange=t}setShowHorizonLines(t){this.showHorizonLines=t;const e=document.getElementById("pitch-lines");e&&(e.style.display=t?"block":"none")}showKillNotification(t,e){if(this.killTimeout&&clearTimeout(this.killTimeout),this.killNotifContainer){this.killNotifContainer.classList.remove("hidden"),this.killNotifContainer.classList.remove("kill-notification-exit");const n=`${t} CAUGHT!`,s="ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*()";let r=0;this.glitchInterval&&clearInterval(this.glitchInterval),this.glitchInterval=setInterval(()=>{if(this.killTextElem){const a=Math.floor(r),o=n.split("").map((c,h)=>h<a?n[h]:h===a?s[Math.floor(Math.random()*s.length)]:"").join(""),l=a<n.length?Math.random()>.5?"_":" ":"";this.killTextElem.innerText=o+l}r>=n.length&&(this.killTextElem&&(this.killTextElem.innerText=n),clearInterval(this.glitchInterval)),r+=1},40),this.killScoreElem&&(this.killScoreElem.innerText=`+${e}`),this.killNotifContainer.style.animation="none",this.killNotifContainer.offsetHeight,this.killNotifContainer.style.animation=null,this.killTimeout=setTimeout(()=>{this.killNotifContainer.classList.add("kill-notification-exit"),setTimeout(()=>{this.killNotifContainer.classList.add("hidden"),this.killNotifContainer.classList.remove("kill-notification-exit")},500),this.glitchInterval&&clearInterval(this.glitchInterval)},3e3)}}showRegion(t){this.regionTimeout&&clearTimeout(this.regionTimeout),this.regionNameElem.innerText=t,this.regionNotif.classList.remove("hidden"),this.regionNotif.classList.remove("region-exit"),this.regionTimeout=setTimeout(()=>{this.regionNotif.classList.add("region-exit"),this.regionTimeout=setTimeout(()=>{this.regionNotif.classList.add("hidden"),this.regionTimeout=null},1e3)},4e3)}updateEagleStatus(t){if(this.flightModeElem){let e="SOARING",n="";t.isTurbo||t.turboWindup>.1?(e=`TURBO ${Math.round(t.speed)} KTS`,n="turbo"):t.isBoosting?(e="DIVING",n="diving"):t.isFlapping?(e="FLAPPING",n="flapping"):t.isGliding?(e="GLIDING",n="gliding"):t.inThermal&&(e="RIDING THERMAL",n="thermal"),this.flightModeElem.textContent=e,this.flightModeElem.className=n}if(this.thermalIndicator)if(t.inThermal){this.thermalIndicator.classList.remove("hidden");const e=Math.round((t.thermalStrength||0)*100);this.thermalIndicator.textContent=`THERMAL ${e}%`}else this.thermalIndicator.classList.add("hidden");if(this.wingSpreadBar){const e=(t.wingSpread||1)*100;this.wingSpreadBar.style.width=`${e}%`}if(this.liftValueElem){const e=t.liftForce||0;this.liftValueElem.textContent=e.toFixed(1)}if(this.vspeedValueElem){const e=t.verticalSpeed||0,n=Math.round(e*196.85);this.vspeedValueElem.textContent=`${n>0?"+":""}${n}`,this.vspeedValueElem.className=n>10?"climbing":n<-10?"descending":""}}updateWeatherDisplay(t){if(t.weatherConditions){const e=t.weatherConditions;this.weatherConditionElem&&(this.weatherConditionElem.textContent=`${e.daypartName} | ${e.weatherName}`),this.weatherWindElem&&(this.weatherWindElem.textContent=`WIND ${e.windSpeed}kt ${e.windDirection}°`)}}setPullUpWarning(t){this.pullUpElem&&(t?this.pullUpElem.classList.remove("hidden"):this.pullUpElem.classList.add("hidden"))}resizeMinimap(){requestAnimationFrame(()=>{this.minimapCanvas.width=this.minimapCanvas.offsetWidth,this.minimapCanvas.height=this.minimapCanvas.offsetHeight,this.pauseMinimapCanvas&&(this.pauseMinimapCanvas.width=this.pauseMinimapCanvas.offsetWidth,this.pauseMinimapCanvas.height=this.pauseMinimapCanvas.offsetHeight);const t=Xx();t&&t.resize();const e=Yx();e&&e.resize()})}createHorizon(){if(!document.getElementById("horizon-container")){const t=document.getElementById("uiContainer"),e=document.createElement("div");e.id="horizon-container",e.style.cssText=`
				position: absolute;
				top: 50%;
				left: 50%;
				width: 600px;
				height: 600px;
				transform: translate(-50%, -50%);
				pointer-events: none;
				overflow: hidden;
			`;const n=document.createElement("div");n.id="normal-crosshair",n.style.cssText="position:absolute; top:50%; left:50%; width:120px; height:48px; transform:translate(-50%,-50%); pointer-events:none;";const s=document.createElement("div");s.style.cssText="position:absolute; left:50%; top:50%; width:12px; height:12px; transform:translate(-50%,-50%); border-radius:50%; border:2px solid #d4a017; background:transparent;";const r=document.createElement("div");r.style.cssText="position:absolute; top:50%; left:calc(50% - 6px - 20px); width:20px; height:2px; transform:translateY(-50%); background:#d4a017;";const a=document.createElement("div");a.style.cssText="position:absolute; top:50%; left:calc(50% + 6px); width:20px; height:2px; transform:translateY(-50%); background:#d4a017;";const o=document.createElement("div");o.style.cssText="position:absolute; left:50%; top:calc(50% - 6px - 12px); width:2px; height:12px; transform:translateX(-50%); background:#d4a017;",n.appendChild(r),n.appendChild(a),n.appendChild(s),n.appendChild(o),e.appendChild(n);const l=document.createElement("div");l.id="pitch-lines",l.style.cssText=`
				position: absolute;
				width: 100%;
				height: 100%;
			`;for(let c=-90;c<=90;c+=10){if(c===0)continue;const h=document.createElement("div");h.style.cssText=`
					position: absolute;
					left: 30%;
					width: 40%;
					height: 1px;
					background: rgba(212, 160, 23, 0.5);
					top: ${50-c}% ;
					text-align: center;
					font-size: 10px;
				`,h.innerText=c,l.appendChild(h)}e.appendChild(l),t.appendChild(e),this.setShowHorizonLines(this.showHorizonLines)}}updatePauseMenu(t,e,n=[]){if(this.pauseRegionElem&&(this.pauseRegionElem.innerText=e||"UNKNOWN REGION"),this.pauseLatElem){const g=t.lat>=0?"N":"S";this.pauseLatElem.innerText=`${Math.abs(t.lat).toFixed(4)}°${g}`}if(this.pauseLonElem){const g=t.lon>=0?"E":"W";this.pauseLonElem.innerText=`${Math.abs(t.lon).toFixed(4)}°${g}`}if(this.pauseAltElem){const g=Math.max(0,Math.round(t.alt*3.28084));this.pauseAltElem.innerText=`${g.toLocaleString()} FT`}if(this.pauseTimeElem){const g=new Date,x=g.getTime()+g.getTimezoneOffset()*6e4,m=Math.round((t.lon||0)/15),p=new Date(x+36e5*m),w=p.getFullYear(),b=(p.getMonth()+1).toString().padStart(2,"0"),M=p.getDate().toString().padStart(2,"0"),y=p.getHours().toString().padStart(2,"0"),T=p.getMinutes().toString().padStart(2,"0"),C=p.getSeconds().toString().padStart(2,"0");this.pauseTimeElem.innerText=`${w}-${b}-${M}T${y}:${T}:${C}Z`}const s=this.minimapRange*1e4;if(Wx(t.lon,t.lat,s,0),!this.pauseMiniCtx||!this.pauseMinimapCanvas)return;const r=this.pauseMiniCtx,a=this.pauseMinimapCanvas.width,o=this.pauseMinimapCanvas.height,l=a/2,c=o/2;r.clearRect(0,0,a,o),r.strokeStyle="rgba(212, 160, 23, 0.2)",r.lineWidth=1;const h=50;r.beginPath();for(let g=l;g<=a;g+=h)r.moveTo(g,0),r.lineTo(g,o);for(let g=l-h;g>=0;g-=h)r.moveTo(g,0),r.lineTo(g,o);for(let g=c;g<=o;g+=h)r.moveTo(0,g),r.lineTo(a,g);for(let g=c-h;g>=0;g-=h)r.moveTo(0,g),r.lineTo(a,g);r.stroke(),r.strokeStyle="#d4a017",r.lineWidth=2;const u=15;r.beginPath(),r.moveTo(l-u,c),r.lineTo(l+u,c),r.moveTo(l,c-u),r.lineTo(l,c+u),r.stroke(),r.fillStyle="#d4a017",r.font="12px AceCombat",r.fillText("SHADOW",l+20,c+5);const d=s*1.1547,f=o/d;n.forEach(g=>{const x=(g.lon-t.lon)*111320*Math.cos(t.lat*Math.PI/180),m=(g.lat-t.lat)*111320,p=l+x*f,w=c-m*f;p<0||p>a||w<0||w>o||(r.strokeStyle="#fff",r.lineWidth=2,r.save(),r.translate(p,w),r.rotate(45*Math.PI/180),r.beginPath(),r.rect(-5,-5,10,10),r.stroke(),r.restore(),r.fillStyle="#fff",r.font="10px AceCombat",r.fillText(g.name||"PREY",p+10,w+5))})}update(t,e=[]){const s=(I,F,B)=>{let N=F-I;for(;N<-180;)N+=360;for(;N>180;)N-=360;return I+N*B},r=(I,F)=>{let B=I-F;for(;B<-180;)B+=360;for(;B>180;)B-=360;return B},a=I=>{for(;I<=-180;)I+=360;for(;I>180;)I-=360;return I};this.smoothedPitch=s(this.smoothedPitch,t.pitch,.5),this.smoothedRoll=s(this.smoothedRoll,t.roll,.5),this.smoothedHeading=s(this.smoothedHeading,t.heading||0,.5),this.smoothedThrottle=this.smoothedThrottle+((t.throttle||0)-this.smoothedThrottle)*(.5*.4),this.smoothedYaw=this.smoothedYaw+((t.yaw||0)-this.smoothedYaw)*.5,this.smoothedPitch=a(this.smoothedPitch),this.smoothedRoll=a(this.smoothedRoll),this.smoothedHeading=a(this.smoothedHeading);const o=this.minimapRange*1500,l=this.minimapRange*2;let c=o+t.speed*l;t.isBoosting&&(c*=1.2),t.isTurbo&&(c*=3),this.currentZoom=c,Vx(t.lon,t.lat,c,this.smoothedHeading);const h=t.isBoosting||!1,u=t.isTurbo||!1;this.vignette&&(this.vignette.style.opacity=h||u?"1":"0");const d=r(t.pitch,this.smoothedPitch),f=r(t.roll,this.smoothedRoll),g=(t.yaw||0)-this.smoothedYaw,x=(t.throttle||0)-this.smoothedThrottle;if(this.uiContainer){const F=Math.max(-15,Math.min(15,d*.8)),B=Math.max(-15,Math.min(15,-f*.3+g*5)),N=50,H=Math.max(-N,Math.min(N,-f*1.5-g*20)),z=Math.max(-N,Math.min(N,d*3+x*15)),$=u?1.04:h?1.02:1;this.smoothedBoostScale=this.smoothedBoostScale+($-this.smoothedBoostScale)*.1;const st=(1+x*.25)*this.smoothedBoostScale;if(u){const Z=Date.now()*.06;this.currentShakeX=Math.sin(Z*2)*3+Math.cos(Z*3.1)*2,this.currentShakeY=Math.cos(Z*2.3)*3+Math.sin(Z*3.5)*2}else if(h){const Z=Date.now()*.05;this.currentShakeX=Math.sin(Z*1.5)*2+Math.cos(Z*2.1)*1.5,this.currentShakeY=Math.cos(Z*1.7)*2+Math.sin(Z*2.3)*1.5}else this.currentShakeX*=.85,this.currentShakeY*=.85;this.uiContainer.style.transform=`perspective(1000px) rotateX(${F}deg) rotateY(${B}deg) translate(${H+this.currentShakeX}px, ${z+this.currentShakeY}px) scale(${st})`}this.speedElem.innerText=Math.round(t.speed).toString().padStart(3,"0"),this.updateEagleStatus(t),this.updateWeatherDisplay(t),t.weaponSystem&&this.updateWeapons(t.weaponSystem);let m=this.smoothedHeading;for(;m<0;)m+=360;for(;m>=360;)m-=360;if(this.headingDisplay){let I=Math.round(m);I===360&&(I=0);let F="";I>=337.5||I<22.5?F="N":I>=22.5&&I<67.5?F="NE":I>=67.5&&I<112.5?F="E":I>=112.5&&I<157.5?F="SE":I>=157.5&&I<202.5?F="S":I>=202.5&&I<247.5?F="SW":I>=247.5&&I<292.5?F="W":I>=292.5&&I<337.5&&(F="NW"),this.headingDisplay.innerText=`${I.toString().padStart(3,"0")} ${F}`}if(this.compassTape){const N=160-(m+360)*4;this.compassTape.style.transform=`translateX(${N}px)`}const p=Math.max(0,Math.round(t.alt*3.28084));this.altElem.innerText=p.toString().padStart(5,"0"),this.scoreElem&&(this.scoreElem.innerText=(t.score||0).toString().padStart(6,"0"));const w=Date.now()-this.startTime,b=Math.floor(w/6e4),M=Math.floor(w%6e4/1e3),y=Math.floor(w%1e3/10);this.timeElem.innerText=`${b.toString().padStart(2,"0")}:${M.toString().padStart(2,"0")}:${y.toString().padStart(2,"0")}`;const T=new Date,C=T.getTime()+T.getTimezoneOffset()*6e4,L=Math.round((t.lon||0)/15),v=new Date(C+36e5*L);if(this.localDateTimeElem){const I=v.getFullYear(),F=(v.getMonth()+1).toString().padStart(2,"0"),B=v.getDate().toString().padStart(2,"0"),N=v.getHours().toString().padStart(2,"0"),H=v.getMinutes().toString().padStart(2,"0"),z=v.getSeconds().toString().padStart(2,"0");this.localDateTimeElem.innerText=`${I}-${F}-${B}T${N}:${H}:${z}Z`}if(this.coordsElem){const I=t.lat>=0?"N":"S",F=t.lon>=0?"E":"W";this.coordsElem.innerText=`POS: ${Math.abs(t.lat).toFixed(4)}°${I} ${Math.abs(t.lon).toFixed(4)}°${F}`}const S=document.getElementById("pitch-lines"),P=document.getElementById("horizon-container");S&&P&&(P.style.transform=`translate(-50%, -50%) rotate(${-this.smoothedRoll}deg)`,S.style.transform=`translateY(${this.smoothedPitch*6}px)`),this.drawMinimap(t,e),this.updateNPCMarkers(e,t)}drawMinimap(t,e=[]){if(!this.miniCtx||!this.minimapCanvas)return;const n=this.miniCtx,s=this.minimapCanvas.width||250,r=this.minimapCanvas.height||250,a=s/2,o=r/2,l=Math.min(a,o)-10;n.clearRect(0,0,s,r),n.save(),n.translate(a,o);const c=this.smoothedHeading;n.rotate(-c*Math.PI/180),n.strokeStyle="rgba(212, 160, 23, 0.35)",n.lineWidth=1;const h=this.minimapRange*1e3,u=(this.currentZoom||this.minimapRange*1500)*1.1547,d=h*r/u,f=r/u,g=Math.min(1e4*f,l),x=l*2;for(let C=0;C<=x;C+=d)n.beginPath(),n.moveTo(C,-x),n.lineTo(C,x),n.stroke(),C>0&&(n.beginPath(),n.moveTo(-C,-x),n.lineTo(-C,x),n.stroke());for(let C=0;C<=x;C+=d)n.beginPath(),n.moveTo(-x,C),n.lineTo(x,C),n.stroke(),C>0&&(n.beginPath(),n.moveTo(-x,-C),n.lineTo(x,-C),n.stroke());e.forEach(C=>{if(eu(t.lon,t.lat,C.lon,C.lat)>this.minimapRange*5e3)return;const v=(C.lon-t.lon)*111320*Math.cos(t.lat*Math.PI/180),S=(C.lat-t.lat)*111320,P=v*f,I=-S*f;Math.sqrt(P*P+I*I)>l-5||(n.save(),n.translate(P,I),n.rotate(C.heading*Math.PI/180),n.fillStyle="#fff",n.shadowBlur=0,n.beginPath(),n.moveTo(0,-8),n.lineTo(6,6),n.lineTo(0,3),n.lineTo(-6,6),n.closePath(),n.fill(),n.restore())}),n.restore();const m=12,p=a-m,w=o-m;n.strokeStyle="rgba(212, 160, 23, 0.7)",n.lineWidth=1.2,n.beginPath(),n.moveTo(0,o),n.lineTo(s,o),n.moveTo(a,0),n.lineTo(a,r);const b=we();let M=Math.PI/4;if(b&&b.camera&&b.camera.frustum){const C=b.camera.frustum.fovy,L=window.innerWidth/window.innerHeight;M=Math.atan(Math.tan(C/2)*L)}const y=s+r;n.moveTo(a,o),n.lineTo(a-Math.sin(M)*y,o-Math.cos(M)*y),n.moveTo(a,o),n.lineTo(a+Math.sin(M)*y,o-Math.cos(M)*y),n.stroke(),n.fillStyle="#d4a017",n.font=`bold 16px ${getComputedStyle(document.body).fontFamily}`,n.shadowColor="rgba(0, 0, 0, 0.5)",n.shadowBlur=4,n.textAlign="center",n.textBaseline="middle",[{label:"N",angle:0},{label:"E",angle:90},{label:"S",angle:180},{label:"W",angle:270}].forEach(C=>{const L=(C.angle-c)*Math.PI/180,v=Math.sin(L),S=Math.cos(L),P=Math.abs(v),I=Math.abs(S);let F,B;p*I>w*P?(B=S>0?-w:w,F=B*v/-S):(F=v>0?p:-p,B=F*-S/v),n.fillText(C.label,a+F,o+B)}),n.save(),n.translate(a,o),n.fillStyle="#d4a017",n.shadowBlur=0,n.beginPath(),n.moveTo(0,-12),n.lineTo(8,10),n.lineTo(0,5),n.lineTo(-8,10),n.closePath(),n.fill(),n.strokeStyle="rgba(212, 160, 23, 0.7)",n.lineWidth=1.2,n.beginPath(),n.arc(0,0,g,0,Math.PI*2),n.stroke(),n.restore();const T=Date.now()/1500%1;n.strokeStyle=`rgba(212, 160, 23, ${.7*(1-T)})`,n.lineWidth=1.2,n.beginPath(),n.arc(a,o,T*g,0,Math.PI*2),n.stroke()}updateNPCMarkers(t,e){const n=we();if(!n)return;const s=new Set;if(t&&t.length>0){this.npcContainer.style.display="block";const r=n.scene,a=r.camera,o=2e5,l=new Cesium.Cartesian3,c=new Cesium.Cartesian3;t.forEach(h=>{Cesium.Cartesian3.fromDegrees(h.lon,h.lat,h.alt,void 0,l),Cesium.Cartesian3.fromDegrees(e.lon,e.lat,e.alt,void 0,c);const u=Cesium.Cartesian3.distance(l,c);if(u>o)return;const d=h.id||h.name;s.add(d);let f=this.npcMarkers.get(d);f||(f=this.createNPCMarker(h),this.npcMarkers.set(d,f));const g=Cesium.SceneTransforms.worldToWindowCoordinates||Cesium.SceneTransforms.wgs84ToWindowCoordinates,x=g?g(r,l):null,m=Cesium.Cartesian3.subtract(l,a.position,new Cesium.Cartesian3),p=Cesium.Cartesian3.dot(m,a.direction);if(!x||p<=0||x.x<0||x.x>window.innerWidth||x.y<0||x.y>window.innerHeight){const b=Cesium.Cartesian3.dot(m,a.right),M=-Cesium.Cartesian3.dot(m,a.up);this.updateOffScreenMarker(f,b,M,h,u)}else this.updateOnScreenMarker(f,x,h,u,e)})}else this.npcContainer.style.display="none";for(const[r,a]of this.npcMarkers)s.has(r)||(a.container.remove(),this.npcMarkers.delete(r))}createNPCMarker(t){const e=document.createElement("div");e.className="npc-marker-container";const n=document.createElement("div");n.className="npc-visual-wrapper";const s=document.createElement("div");s.className="npc-diamond";const r=document.createElement("div");r.className="npc-lock-box",r.style.display="none";const a=document.createElement("div");a.className="npc-label";const o=document.createElement("div");o.className="npc-offscreen-dot",o.style.display="none";const l=document.createElement("div");return l.className="npc-offscreen-name",l.style.display="none",n.appendChild(s),n.appendChild(r),e.appendChild(n),e.appendChild(a),e.appendChild(o),e.appendChild(l),this.npcContainer.appendChild(e),{container:e,diamond:s,label:a,dot:o,offscreenName:l,lockBox:r}}updateOnScreenMarker(t,e,n,s,r){t.container.style.display="flex",t.container.style.transform=`translate3d(${e.x}px, ${e.y}px, 0) translate(-50%, -50%)`,t.diamond.style.display="block",t.label.style.display="block",t.dot.style.display="none",t.offscreenName.style.display="none";const a=r.weaponSystem;a&&a.lockingTarget===n?(t.lockBox.style.display="block",a.lockStatus==="LOCKED"?(t.lockBox.classList.remove("locking-blink"),t.lockBox.style.borderColor="#d4a017",t.lockBox.innerHTML='<span style="position:absolute; top:-20px; left:50%; transform:translateX(-50%); font-weight:bold; color:#d4a017; font-size:12px; text-shadow: 0 0 8px rgba(212, 160, 23, 0.8);">TARGET</span>'):a.lockStatus==="LOCKING"&&(t.lockBox.classList.add("locking-blink"),t.lockBox.style.borderColor="#d4a017",t.lockBox.innerHTML="")):(t.lockBox.style.display="none",t.lockBox.innerHTML="");const o=(s/1e3).toFixed(1),l=`${n.name}
${o} KM`;t.label.innerText!==l&&(t.label.innerText=l)}updateOffScreenMarker(t,e,n,s,r){t.container.style.display="flex",t.diamond.style.display="none",t.label.style.display="none",t.dot.style.display="block",t.offscreenName.style.display="block";const a=window.innerWidth/2,o=window.innerHeight/2;Math.abs(e)<1e-4&&Math.abs(n)<1e-4&&(n=-1);const l=Math.atan2(n,e),c=40,h=a-c,u=o-c,d=Math.cos(l),f=Math.sin(l);let g,x;Math.abs(h*f)>Math.abs(u*d)?(x=u*Math.sign(f),g=x*d/f):(g=h*Math.sign(d),x=g*f/d);const m=a+g,p=o+x;t.container.style.transform=`translate3d(${m}px, ${p}px, 0) translate(-50%, -50%)`,t.offscreenName.innerText!==s.name&&(t.offscreenName.innerText=s.name),t.lockBox&&(t.lockBox.style.display="none",t.lockBox.innerHTML="")}updateFPS(t){this.fpsElem&&(this.fpsElem.innerText=Math.round(t).toString())}updateWeapons(t){const e=t.getCurrentWeapon(),n=performance.now()*.001,s=!!e&&(e.id==="missile"||e.id==="aim-9"||e.name&&e.name.toLowerCase().includes("aim-9"));this.showMissileCrosshair(s),["gun","missile","flare"].forEach(r=>{const a=this.weaponElems[r],o=this.weaponAmmoElems[r],l=this.weaponProgressElems[r],h=(r==="flare"?t.flareWeapon:t.weapons.find(u=>u.id===r&&(r!=="missile"||u===e)))||(r==="flare"?t.flareWeapon:t.weapons.find(u=>u.id===r));if(a){const u=t.emptyWarningTimers&&t.emptyWarningTimers[r]>0,d=e&&e.id===r||r==="flare"&&n-t.flareWeapon.lastFire<1||u,f=r==="gun"&&t.isGunOverheated;if(d?a.classList.add("active"):a.classList.remove("active"),f||u?a.classList.add("overheated"):a.classList.remove("overheated"),d&&r==="missile"&&h){const g=a.querySelector(".weapon-name");g&&(g.innerText=h.name)}}if(l&&h){let u=0;if(r==="gun")u=t.gunHeat*100;else{const d=n-h.lastFire,f=r==="flare"?1:h.fireRate;d<f?u=d/f*100:u=0}l.style.width=`${u}%`}o&&h&&(r==="gun"&&t.isGunOverheated?o.innerText="OVERHEAT":h.ammo===1/0?o.innerText="INF":o.innerText=h.ammo.toString().padStart(2,"0"))})}}const ni={scene:null,viewer:null,list:[],_scratchMatrix:new Cesium.Matrix4,_scratchCameraMatrix:new Cesium.Matrix4,_scratchThreeMatrix:new Qt,init(i,t){this.scene=i,this.viewer=t},spawnExplosion(i,t,e,n={}){const s=!!n.big,r=n.count||(s?64:36),a=s?6:3,o=new ne(a,12,10),l=new ze({color:16777215,blending:Sn,transparent:!0,opacity:1}),c=new it(o,l);c.life=.18+Math.random()*.12,c.maxLife=c.life,c.lon=i,c.lat=t,c.alt=e,c.isSmoke=!1,c._expand=!0,c._expandAmount=s?5:3,c.matrixAutoUpdate=!1,this.scene.add(c),this.list.push(c);for(let d=0;d<r;d++){const f=(s?.6:.35)+Math.random()*(s?2.4:.9),g=new ne(f,8,6),x=new Bt().setHSL(.08-Math.random()*.05,1,.5+Math.random()*.2),m=new ze({color:x,blending:Sn,transparent:!0,opacity:1}),p=new it(g,m);p.life=(s?.9:.6)+Math.random()*(s?1.4:.8),p.maxLife=p.life,p.lon=i,p.lat=t,p.alt=e;const w=Math.random()*Math.PI*2,b=(Math.random()*120-60)*(Math.PI/180),M=(s?18:10)+Math.random()*(s?60:36);p._localVel={east:Math.sin(w)*Math.cos(b)*M,north:Math.cos(w)*Math.cos(b)*M,up:Math.sin(b)*M},p.isSmoke=!1,p._expand=!0,p._expandAmount=s?2.8:1.8,p.matrixAutoUpdate=!1,this.scene.add(p),this.list.push(p)}const h=s?32:18;for(let d=0;d<h;d++){const f=new ne(.06+Math.random()*.14,6,6),g=new ze({color:16777164,blending:Sn,transparent:!0}),x=new it(f,g);x.life=.18+Math.random()*.36,x.maxLife=x.life,x.lon=i,x.lat=t,x.alt=e;const m=Math.random()*Math.PI*2,p=(Math.random()*120-60)*(Math.PI/180),w=(s?36:18)+Math.random()*(s?120:60);x._localVel={east:Math.sin(m)*Math.cos(p)*w,north:Math.cos(m)*Math.cos(p)*w,up:Math.sin(p)*w},x.isSmoke=!1,x._expand=!0,x._expandAmount=.6,x.matrixAutoUpdate=!1,this.scene.add(x),this.list.push(x)}const u=typeof n.smokeCount<"u"?n.smokeCount:s?8:5;for(let d=0;d<u;d++){const f=(s?3:1.8)+Math.random()*(s?4:1.6),g=new ne(f,12,10),x=.08+Math.random()*.3,m=new ze({color:new Bt(x,x,x),transparent:!0,opacity:.75}),p=new it(g,m);p.life=(s?1:.6)+Math.random()*(s?1.2:.6),p.maxLife=p.life,p.lon=i+(Math.random()-.5)*18e-5,p.lat=t+(Math.random()-.5)*18e-5,p.alt=e-.6+(Math.random()-.5)*.8,p._localVel={east:(Math.random()-.5)*2.2,north:(Math.random()-.5)*2.2,up:.6+Math.random()*2.6},p.isSmoke=!0,p.matrixAutoUpdate=!1,this.scene.add(p),this.list.push(p)}try{this.viewer&&this.viewer.scene&&this.viewer.scene.requestRender()}catch{}},spawnWreckage(i,t,e,n=0,s=0,r={}){const a=r.count||30,o=Cesium.Math.toRadians(n),l=Cesium.Math.toRadians(s),c={east:Math.sin(o)*Math.cos(l),north:Math.cos(o)*Math.cos(l),up:Math.sin(l)};for(let h=0;h<a;h++){const u=Math.random();let d;const f=.4+Math.random()*2.4;if(u<.6){const b=[],M=3+Math.floor(Math.random()*3),y=f;for(let v=0;v<M;v++){const S=v/M*Math.PI*2+(Math.random()-.5)*.6,P=y*(.35+Math.random()*1.1);b.push(new ut(Math.cos(S)*P,Math.sin(S)*P))}const T=new Il(b),C=Math.max(.03,f*.12),L={depth:C,bevelEnabled:!1};d=new da(T,L),d.translate(0,0,-C*.5)}else d=new tn(f*.6,f,3),d.rotateX(Math.PI/2);const g=0+Math.random()*.06,x=new Pf({color:new Bt(g,g,g),flatShading:!0,side:ke}),m=new it(d,x);m.rotation.set(Math.random()*Math.PI,Math.random()*Math.PI,Math.random()*Math.PI),m.scale.set(1+Math.random()*1.5,1+Math.random()*1.5,1+Math.random()*1.5),m._rotEuler=new Ne(Math.random()*Math.PI,Math.random()*Math.PI,Math.random()*Math.PI),m._rotVel=new D((Math.random()-.5)*6,(Math.random()-.5)*6,(Math.random()-.5)*6),m.life=4+Math.random()*8,m.maxLife=m.life,m.lon=i+(Math.random()-.5)*1e-4,m.lat=t+(Math.random()-.5)*1e-4,m.alt=e+(Math.random()-.5)*1;const p=1.2,w=10+Math.random()*60;m._localVel={east:(c.east+(Math.random()-.5)*p)*w,north:(c.north+(Math.random()-.5)*p)*w,up:(c.up+(Math.random()-.5)*p*.8)*w},m._localVel.up-=4+Math.random()*6,m._fallGravityMultiplier=r.fallMultiplier||2.2,m.isSmoke=!1,m.matrixAutoUpdate=!1,this.scene.add(m),this.list.push(m)}},spawnSpark(i,t,e,n={}){const s=n.count||12;for(let r=0;r<s;r++){const a=new ne(.08+Math.random()*.12,6,6),o=new ze({color:16777130,transparent:!0}),l=new it(a,o);l.life=.18+Math.random()*.36,l.maxLife=l.life,l.lon=i,l.lat=t,l.alt=e;const c=Math.random()*Math.PI*2,h=(Math.random()*120-60)*(Math.PI/180),u=18+Math.random()*40;l._localVel={east:Math.sin(c)*Math.cos(h)*u,north:Math.cos(c)*Math.cos(h)*u,up:Math.sin(h)*u},l.isSmoke=!1,l.matrixAutoUpdate=!1,this.scene.add(l),this.list.push(l)}},update(i){if(!this.viewer)return;const t=this.viewer.camera.viewMatrix;for(let e=this.list.length-1;e>=0;e--){const n=this.list[e];if(n.life-=i*(n.isSmoke?1.1:1),n.life<=0){this.scene.remove(n),this.list.splice(e,1);continue}const s=n.isSmoke?.2:n._fallGravityMultiplier||1;n._localVel.up-=9.81*i*s,n._rotEuler&&n._rotVel&&(n._rotEuler.x+=n._rotVel.x*i,n._rotEuler.y+=n._rotVel.y*i,n._rotEuler.z+=n._rotVel.z*i);const r=Cesium.Math.toRadians(n.lat),a=n._localVel.east*i/(111320*Math.cos(r)),o=n._localVel.north*i/111320,l=n._localVel.up*i;n.lon+=a,n.lat+=o,n.alt+=l;const c=n.life/n.maxLife;if(n.material&&n.material.opacity!==void 0&&(n.isSmoke?n.material.opacity=Math.max(0,c*.85):n.material.opacity=Math.max(0,c)),n._expand){const f=1+(1-c)*(n._expandAmount||1);n.scale||(n.scale=new D(1,1,1)),n.scale.set(f,f,f)}if(n.isSmoke){const f=1+(1-c)*2;n.scale.set(f,f,f)}const h=Cesium.Cartesian3.fromDegrees(n.lon,n.lat,n.alt,void 0,new Cesium.Cartesian3),u=Cesium.Transforms.eastNorthUpToFixedFrame(h,void 0,this._scratchMatrix),d=Cesium.Matrix4.multiply(t,u,this._scratchCameraMatrix);for(let f=0;f<16;f++)this._scratchThreeMatrix.elements[f]=d[f];if(n.matrix.copy(this._scratchThreeMatrix),n._rotEuler){const f=new Qt,g=new qe().setFromEuler(n._rotEuler),x=n.scale?n.scale.clone():new D(1,1,1);f.compose(new D(0,0,0),g,x),n.matrix.multiply(f)}else n.scale&&(n.scale.x!==1||n.scale.y!==1||n.scale.z!==1)&&n.matrix.scale(n.scale);n.updateMatrixWorld(!0)}}};class Jx{constructor(){this.listener=new Wf,this.sounds=new Map,this.loader=new Hf,this._voicePool=[],this._activeOneShots=new Set,this._lastRandom={}}init(t){t.add(this.listener)}async loadSound(t,e,n=!1,s=.5){return new Promise((r,a)=>{this.loader.load(e,o=>{const l=new Rc(this.listener);l.setBuffer(o),l.setLoop(n),l.setVolume(s),l._baseVolume=s,l._isLooping=n,this.sounds.set(t,l),r(l)},void 0,a)})}_getVoice(){return this._voicePool.pop()||new Rc(this.listener)}_releaseVoice(t){t.isPlaying&&t.stop(),this._activeOneShots.delete(t),this._voicePool.push(t)}play(t,e=0){const n=t;if(t.endsWith("-random")){const o=t.replace("-random","-"),l=Array.from(this.sounds.keys()).filter(c=>c.startsWith(o));if(l.length>0){const c=this._lastRandom[t]??-1;let h=Math.floor(Math.random()*l.length);l.length>1&&h===c&&(h=(h+1)%l.length),this._lastRandom[t]=h,t=l[h]}}const s=this.sounds.get(t);if(!s)return;const{context:r}=s;r.state==="suspended"&&r.resume();const a=s._baseVolume??.5;if(!s._isLooping){const o=this._getVoice();o.setBuffer(s.buffer),o.setVolume(a),o.play(),o._parentName=n||t,this._activeOneShots.add(o),o.source.onended=()=>{o._isPaused||this._releaseVoice(o)};return}if(!s.isPlaying)if(s.play(),e>0){s.setVolume(0);const o=r.currentTime;s.gain.gain.cancelScheduledValues(o),s.gain.gain.setValueAtTime(0,o),s.gain.gain.linearRampToValueAtTime(a,o+e)}else s.setVolume(a)}stop(t,e=0){const n=this.sounds.get(t);if(n){if(n.isPlaying)if(e>0){const s=n.context.currentTime;n.gain.gain.cancelScheduledValues(s),n.gain.gain.linearRampToValueAtTime(0,s+e),setTimeout(()=>{n.isPlaying&&(n.stop(),n.setVolume(n._baseVolume??.5))},e*1e3+50)}else n.stop();this._activeOneShots.forEach(s=>{s._parentName===t&&(s.source.onended=null,this._releaseVoice(s))})}}setVolume(t,e){const n=this.sounds.get(t);n&&n.gain.gain.setValueAtTime(e,n.context.currentTime)}isPlaying(t){const e=this.sounds.get(t);if(!e)return!1;if(e.isPlaying)return!0;for(const n of this._activeOneShots)if(n._parentName===t&&(n.isPlaying||n._isPaused))return!0;return!1}pauseAll(){this.sounds.forEach(t=>{t.isPlaying&&(t.pause(),t._wasPlaying=!0)}),this._activeOneShots.forEach(t=>{t.isPlaying&&(t.pause(),t._isPaused=!0)})}resumeAll(){this.sounds.forEach(t=>{t._wasPlaying&&(t.play(),t._wasPlaying=!1)}),this._activeOneShots.forEach(t=>{t._isPaused&&(t.play(),t._isPaused=!1)})}stopAll(t=0){this.sounds.forEach((e,n)=>this.stop(n,t))}}const Tt=new Jx;class jx{constructor(t,e,n,s,r,a,o=null,l=null){this.scene=t,this.viewer=e,this.target=o,this.onKill=l,this.lon=n.lon,this.lat=n.lat,this.alt=n.alt,this.heading=s,this.pitch=r,this.roll=0,this.speed=a+800,this.maxLife=10,this.life=this.maxLife,this.active=!0,this._scratchMatrix=new Cesium.Matrix4,this._scratchHPR=new Cesium.HeadingPitchRoll,this._scratchCartesian=new Cesium.Cartesian3,this._scratchThreeMatrix=new Qt,this._scratchCameraMatrix=new Cesium.Matrix4,this.trail=[],this.distanceSinceLastTrail=0,this.initMesh()}initMesh(){this.mesh=new Ie;const t=2.6,e=.07,n=new Ye(e,e,t,16),s=new Ya({color:13421772,metalness:.4,roughness:.5}),r=new it(n,s);this.mesh.add(r);const a=.35,o=new tn(e,a,16);o.translate(0,t/2+a/2,0);const l=new Ya({color:3355443,metalness:.8,roughness:.3}),c=new it(o,l);this.mesh.add(c);const h=new Ye(e+.001,e+.001,.15,16);h.translate(0,t/2-.4,0);const u=new ze({color:16763904}),d=new it(h,u);this.mesh.add(d);const f=new Ya({color:4473924,metalness:.3,roughness:.6}),g=new Il;g.moveTo(0,0),g.lineTo(.4,-.2),g.lineTo(.4,-.5),g.lineTo(0,-.5),g.lineTo(0,0);const x=new da(g,{depth:.02,bevelEnabled:!1});x.center(),x.translate(.2,-.25,0);const m=new me(.35,.4,.02);m.translate(e+.175,0,0);for(let P=0;P<4;P++){const I=new Ie,F=new it(m,f);I.add(F),I.position.y=-t/2+.3,I.rotation.y=P*(Math.PI/2),this.mesh.add(I)}const p=new me(.2,.15,.015);p.translate(e+.1,0,0);for(let P=0;P<4;P++){const I=new Ie,F=new it(p,f);I.add(F),I.position.y=t/2-.6,I.rotation.y=P*(Math.PI/2),this.mesh.add(I)}const w=new Bt(1,.6,.2),b=new tn(e*.9,1,16,1,!0);b.rotateX(Math.PI),b.translate(0,-.5,0);const M=new ze({color:w,transparent:!0,opacity:.8,side:ke,depthWrite:!1,blending:Sn});this.flameMesh=new it(b,M),this.flameMesh.position.y=-t/2,this.mesh.add(this.flameMesh);const y=new tn(e*.5,.6,16,1,!0);y.rotateX(Math.PI),y.translate(0,-.3,0);const T=new ze({color:16777215,transparent:!0,opacity:.9,side:ke,depthWrite:!1,blending:Sn});this.flameCore=new it(y,T),this.flameMesh.add(this.flameCore);const C=128,L=typeof document<"u"?document.createElement("canvas"):null;let v=null;if(L){L.width=L.height=C;const P=L.getContext("2d"),I=C/2,F=C/2,B=P.createRadialGradient(I,F,0,I,F,I);B.addColorStop(0,"rgba(255,255,255,1)"),B.addColorStop(.18,"rgba(255,245,200,1)"),B.addColorStop(.38,"rgba(255,160,30,0.95)"),B.addColorStop(.62,"rgba(220,60,10,0.6)"),B.addColorStop(1,"rgba(0,0,0,0)"),P.fillStyle=B,P.fillRect(0,0,C,C),v=new Nh(L),v.minFilter=He,v.magFilter=He}const S=new ta({map:v,color:new Bt(1,.95,.9),transparent:!0,opacity:.98,blending:Sn,depthTest:!1,depthWrite:!1});this.flameGlow=new tl(S),this.flameGlow.scale.set(2.2,2.2,1),this.flameGlow.position.y=-t/2-.08,this.mesh.add(this.flameGlow),this.mesh.layers.enable(0),this.mesh.layers.enable(1),this.mesh.matrixAutoUpdate=!1,this.scene.add(this.mesh)}update(t,e){if(!this.active){this.trail.length>0&&this.updateTrail(t);return}if(this.flameMesh){const s=.8+Math.random()*.4,r=.9+Math.random()*.2;this.flameMesh.scale.set(s,r,s),this.flameMesh.material.opacity=.7+Math.random()*.3,this.flameCore&&this.flameCore.scale.set(s,r,s)}if(this.life-=t,this.life<=0){this.destroy();return}this.target&&!this.target.destroyed&&this.trackTarget(t);const n=Si(this.lon,this.lat,this.alt,this.heading,this.pitch,this.speed*t);if(this.lon=n.lon,this.lat=n.lat,this.alt=n.alt,this.updateTrail(t),this.updateThreeMatrix(),e){for(const s of e)if(this.calculateDistSqToNPC(s)<1e4){this.hitNPC(s);return}}this.checkTerrainCollision()}trackTarget(t){const e=Cesium.Cartesian3.fromDegrees(this.target.lon,this.target.lat,this.target.alt),n=Cesium.Cartesian3.fromDegrees(this.lon,this.lat,this.alt),s=Cesium.Cartesian3.subtract(e,n,new Cesium.Cartesian3);Cesium.Cartesian3.normalize(s,s);const r=Cesium.Transforms.eastNorthUpToFixedFrame(n),a=Cesium.Matrix4.inverse(r,new Cesium.Matrix4),o=Cesium.Matrix4.multiplyByPointAsVector(a,s,new Cesium.Cartesian3),l=Cesium.Math.toDegrees(Math.atan2(o.x,o.y)),c=Cesium.Math.toDegrees(Math.asin(o.z));let h=l-this.heading;for(;h<-180;)h+=360;for(;h>180;)h-=360;const u=90;this.heading+=Math.max(-u*t,Math.min(u*t,h)),this.pitch+=Math.max(-u*t,Math.min(u*t,c-this.pitch))}updateTrail(t){if(this.active){this.distanceSinceLastTrail+=this.speed*t;const n=20;for(;this.distanceSinceLastTrail>=n;){const s=this.distanceSinceLastTrail-n,r=Si(this.lon,this.lat,this.alt,this.heading,this.pitch,-s);this.distanceSinceLastTrail-=n;const a=new ne(1,16,16),o=.5+Math.random()*.75,l=new ze({color:new Bt(o,o,o),transparent:!0,opacity:.6+Math.random()*.25}),c=new it(a,l);c.lon=r.lon,c.lat=r.lat,c.alt=r.alt,c.life=4,c.maxLife=4;const h=this.maxLife-this.life;c.launchScale=Math.min(1,.25+h/1.5*.75),c.matrixAutoUpdate=!1,this.scene.add(c),this.trail.push(c)}}const e=this.viewer.camera.viewMatrix;for(let n=this.trail.length-1;n>=0;n--){const s=this.trail[n];if(s.life-=t,s.life<=0){this.scene.remove(s),this.trail.splice(n,1);continue}s.randomScale||(s.randomScale=.8+Math.random()*.5);const a=(s.launchScale||1)*s.randomScale*(1+(1-s.life/s.maxLife)*15);s.scale.set(a,a,a);const o=s.life/s.maxLife*.5;s.material.opacity=o;const l=Cesium.Cartesian3.fromDegrees(s.lon,s.lat,s.alt,void 0,this._scratchCartesian),c=Cesium.Transforms.eastNorthUpToFixedFrame(l,void 0,this._scratchMatrix),h=Cesium.Matrix4.multiply(e,c,this._scratchCameraMatrix);for(let u=0;u<16;u++)this._scratchThreeMatrix.elements[u]=h[u];s.matrix.copy(this._scratchThreeMatrix),s.matrix.scale(new D(a,a,a)),s.updateMatrixWorld(!0)}}updateThreeMatrix(){const t=this.viewer.camera.viewMatrix,e=Cesium.Cartesian3.fromDegrees(this.lon,this.lat,this.alt,void 0,this._scratchCartesian),n=Cesium.Transforms.eastNorthUpToFixedFrame(e,void 0,this._scratchMatrix),s=Cesium.Math.toRadians(this.heading),r=Cesium.Math.toRadians(this.pitch),a=new Cesium.Cartesian3(Math.sin(s)*Math.cos(r),Math.cos(s)*Math.cos(r),Math.sin(r)),o=Cesium.Matrix4.multiplyByPointAsVector(n,a,new Cesium.Cartesian3);Cesium.Cartesian3.normalize(o,o);const l=new Cesium.Cartesian3(n[8],n[9],n[10]);let c=new Cesium.Cartesian3;if(Math.abs(Cesium.Cartesian3.dot(o,l))>.999){const f=new Cesium.Cartesian3(n[4],n[5],n[6]);Cesium.Cartesian3.cross(o,f,c)}else Cesium.Cartesian3.cross(o,l,c);Cesium.Cartesian3.normalize(c,c);const h=new Cesium.Cartesian3;Cesium.Cartesian3.cross(c,o,h);const u=this._scratchMatrix;u[0]=c.x,u[1]=c.y,u[2]=c.z,u[3]=0,u[4]=o.x,u[5]=o.y,u[6]=o.z,u[7]=0,u[8]=h.x,u[9]=h.y,u[10]=h.z,u[11]=0,u[12]=e.x,u[13]=e.y,u[14]=e.z,u[15]=1;const d=Cesium.Matrix4.multiply(t,u,this._scratchCameraMatrix);for(let f=0;f<16;f++)this._scratchThreeMatrix.elements[f]=d[f];if(this.mesh.matrix.copy(this._scratchThreeMatrix),this.mesh.updateMatrixWorld(!0),this.flameGlow&&this.viewer&&this.viewer.camera&&this.viewer.camera.position)try{const f=this.viewer.camera.position,g=Cesium.Cartesian3.distance(e,f)||1,x=Se.clamp(g*.0016,1,80);this.flameGlow.scale.set(x,x,1),this.flameGlow.renderOrder=9999,this.flameGlow.material&&(this.flameGlow.material.opacity=Math.max(.25,Math.min(1,80/x)))}catch{}}calculateDistSqToNPC(t){const e=(t.lon-this.lon)*111320*Math.cos(Cesium.Math.toRadians(this.lat)),n=(t.lat-this.lat)*111320,s=t.alt-this.alt;return e*e+n*n+s*s}hitNPC(t){t.destroyed=!0,this.onKill&&this.onKill(t);try{ni.spawnExplosion(this.lon,this.lat,this.alt,{count:80,smokeCount:18,big:!0}),ni.spawnWreckage(this.lon,this.lat,this.alt,this.heading,this.pitch,{count:48}),Tt.play("explosion-random")}catch{}this.destroy()}checkTerrainCollision(){const t=Cesium.Cartographic.fromDegrees(this.lon,this.lat),e=this.viewer.scene.globe.getHeight(t);if(e!==void 0&&this.alt<e){try{ni.spawnExplosion(this.lon,this.lat,this.alt,{count:80,smokeCount:18,big:!0}),ni.spawnWreckage(this.lon,this.lat,this.alt,this.heading,this.pitch,{count:48}),Tt.play("explosion-random")}catch{}this.destroy()}}destroy(){this.active=!1,this.mesh&&this.scene.remove(this.mesh)}}class Qx{constructor(t,e,n,s,r,a,o=null){this.scene=t,this.viewer=e,this.onKill=o,this.lon=n.lon,this.lat=n.lat,this.alt=n.alt,this.heading=s,this.pitch=r,this.speed=a+1500,this.life=3,this.active=!0,this._scratchMatrix=new Cesium.Matrix4,this._scratchCartesian=new Cesium.Cartesian3,this._scratchThreeMatrix=new Qt,this._scratchCameraMatrix=new Cesium.Matrix4,this.initMesh()}initMesh(){const t=(o,l,c)=>new En({uniforms:{colorStart:{value:new Bt(16724736)},colorMid:{value:new Bt(16763904)},colorEnd:{value:new Bt(16777215)},opacity:{value:l},intensity:{value:c}},vertexShader:`
					varying vec2 vUv;
					void main() {
						vUv = uv;
						gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
					}
				`,fragmentShader:`
					uniform vec3 colorStart;
					uniform vec3 colorMid;
					uniform vec3 colorEnd;
					uniform float opacity;
					uniform float intensity;
					varying vec2 vUv;
					void main() {
						float t = clamp(vUv.y, 0.0, 1.0);
						vec3 a = mix(colorStart, colorMid, smoothstep(0.0, 0.5, t));
						vec3 b = mix(colorMid, colorEnd, smoothstep(0.5, 1.0, t));
						vec3 col = mix(a, b, smoothstep(0.0, 1.0, t));
						float alpha = opacity * pow(t, 0.6) * intensity;
						float edge = 1.0 - smoothstep(0.0, 0.5, abs(vUv.x - 0.5) * 2.0);
						alpha *= edge;
						gl_FragColor = vec4(col, alpha);
					}
				`,transparent:!0,depthWrite:!1,blending:Sn,side:ke});this.mesh=new Ie;const n=(o,l,c,h)=>{const u=new Ts(o,l,1,1);u.translate(0,-l/2,0);const d=t(o,c,h);return new it(u,d)};for(let o=0;o<3;o++){const l=n(.6,20,1,1);l.rotateY(o*Math.PI*2/3),this.mesh.add(l)}for(let o=0;o<3;o++){const l=n(1.6,22,.35,.65);l.rotateY(o*Math.PI*2/3+Math.PI/6),this.mesh.add(l)}const s=new tn(.12,.8,12);s.translate(0,-.4,0);const r=new ze({color:16777215,transparent:!0,opacity:1,blending:Sn,depthWrite:!1}),a=new it(s,r);this.mesh.add(a),this.mesh.matrixAutoUpdate=!1,this.scene.add(this.mesh)}update(t,e){if(!this.active)return;if(this.life-=t,this.life<=0){this.destroy();return}const n=Si(this.lon,this.lat,this.alt,this.heading,this.pitch,this.speed*t);if(this.lon=n.lon,this.lat=n.lat,this.alt=n.alt,this.updateThreeMatrix(),e){for(const s of e)if(this.calculateDistSqToNPC(s)<400){this.hitNPC(s);return}}this.checkTerrainCollision()}updateThreeMatrix(){const t=this.viewer.camera.viewMatrix,e=Cesium.Cartesian3.fromDegrees(this.lon,this.lat,this.alt,void 0,this._scratchCartesian),n=Cesium.Transforms.eastNorthUpToFixedFrame(e,void 0,this._scratchMatrix),s=Cesium.Math.toRadians(this.heading),r=Cesium.Math.toRadians(this.pitch),a=new Cesium.Cartesian3(Math.sin(s)*Math.cos(r),Math.cos(s)*Math.cos(r),Math.sin(r)),o=Cesium.Matrix4.multiplyByPointAsVector(n,a,new Cesium.Cartesian3);Cesium.Cartesian3.normalize(o,o);const l=new Cesium.Cartesian3(n[8],n[9],n[10]);let c=new Cesium.Cartesian3;if(Math.abs(Cesium.Cartesian3.dot(o,l))>.999){const f=new Cesium.Cartesian3(n[4],n[5],n[6]);Cesium.Cartesian3.cross(o,f,c)}else Cesium.Cartesian3.cross(o,l,c);Cesium.Cartesian3.normalize(c,c);const h=Cesium.Cartesian3.cross(c,o,new Cesium.Cartesian3),u=this._scratchMatrix;u[0]=c.x,u[1]=c.y,u[2]=c.z,u[3]=0,u[4]=o.x,u[5]=o.y,u[6]=o.z,u[7]=0,u[8]=h.x,u[9]=h.y,u[10]=h.z,u[11]=0,u[12]=e.x,u[13]=e.y,u[14]=e.z,u[15]=1;const d=Cesium.Matrix4.multiply(t,u,this._scratchCameraMatrix);for(let f=0;f<16;f++)this._scratchThreeMatrix.elements[f]=d[f];this.mesh.matrix.copy(this._scratchThreeMatrix),this.mesh.updateMatrixWorld(!0)}calculateDistSqToNPC(t){const e=(t.lon-this.lon)*111320*Math.cos(Cesium.Math.toRadians(this.lat)),n=(t.lat-this.lat)*111320,s=t.alt-this.alt;return e*e+n*n+s*s}hitNPC(t){t.destroyed=!0,this.onKill&&this.onKill(t);try{ni.spawnExplosion(this.lon,this.lat,this.alt,{count:36,smokeCount:8,big:!0}),ni.spawnWreckage(this.lon,this.lat,this.alt,this.heading,this.pitch,{count:18});try{Tt.play("explosion-random")}catch{}}catch{}this.destroy()}checkTerrainCollision(){const t=Cesium.Cartographic.fromDegrees(this.lon,this.lat),e=this.viewer.scene.globe.getHeight(t);if(e!==void 0&&this.alt<e){try{ni.spawnSpark(this.lon,this.lat,this.alt,{count:10})}catch{}this.destroy()}}destroy(){this.active=!1,this.scene.remove(this.mesh)}}class t_{constructor(t,e,n,s,r,a){this.scene=t,this.viewer=e,this.lon=n.lon,this.lat=n.lat,this.alt=n.alt,this.heading=s+180+(Math.random()-.5)*40,this.pitch=r-15-Math.random()*20,this.speed=a*.5,this.gravity=5,this.verticalVelocity=0,this.life=4,this.maxLife=4,this.active=!0,this._scratchCartesian=new Cesium.Cartesian3,this._scratchMatrix=new Cesium.Matrix4,this._scratchCameraMatrix=new Cesium.Matrix4,this._scratchThreeMatrix=new Qt,this.trail=[],this.distanceSinceLastTrail=0,this.initMesh()}initMesh(){this.group=new Ie,this.group.matrixAutoUpdate=!1;const t=64,e=document.createElement("canvas");e.width=t,e.height=t;const n=e.getContext("2d"),s=n.createRadialGradient(t/2,t/2,0,t/2,t/2,t/2);s.addColorStop(0,"#ffffff"),s.addColorStop(.2,"#ffff66"),s.addColorStop(.5,"#ffff00"),s.addColorStop(1,"rgba(0,0,0,0)"),n.fillStyle=s,n.fillRect(0,0,t,t);const r=new Nh(e),a=new ta({map:r,color:16777028,transparent:!0,blending:Sn,depthWrite:!1});this.flareSprite=new tl(a),this.flareSprite.scale.set(1.5,1.5,1),this.group.add(this.flareSprite);const o=new ta({map:r,color:16755200,transparent:!0,opacity:.8,blending:Sn,depthWrite:!1});this.glowSprite=new tl(o),this.glowSprite.scale.set(4,4,1),this.group.add(this.glowSprite),this.scene.add(this.group)}update(t){if(!this.active)return;if(this.life-=t,this.life<=0){this.destroy();return}const e=this.speed*t,n=this.calculateMove(e);this.lon=n.lon,this.lat=n.lat,this.alt=n.alt,this.verticalVelocity-=this.gravity*t,this.alt+=this.verticalVelocity*t,this.speed*=.98,this.updateThreeMatrix(),this._spawnTrailIfNeeded(t),this._updateTrail(t);const s=this.life/this.maxLife;if(this.flareSprite){this.flareSprite.material.opacity=Math.min(1,s*1.5);const r=.9+Math.random()*.2;this.flareSprite.scale.set(1.5*r,1.5*r,1)}if(this.glowSprite){this.glowSprite.material.opacity=Math.min(.8,s*1.2);const r=.8+Math.random()*.4;this.glowSprite.scale.set(4*r,4*r,1)}}calculateMove(t){const e=Cesium.Math.toRadians(this.heading),n=Cesium.Math.toRadians(this.pitch),s=6371e3,r=t*Math.cos(e)*Math.cos(n)/s,a=t*Math.sin(e)*Math.cos(n)/(s*Math.cos(Cesium.Math.toRadians(this.lat))),o=t*Math.sin(n);return{lon:this.lon+Cesium.Math.toDegrees(a),lat:this.lat+Cesium.Math.toDegrees(r),alt:this.alt+o}}updateThreeMatrix(){const t=this.viewer.camera.viewMatrix,e=Cesium.Cartesian3.fromDegrees(this.lon,this.lat,this.alt),n=Cesium.Transforms.eastNorthUpToFixedFrame(e,void 0,this._scratchMatrix),s=Cesium.Matrix4.multiply(t,n,this._scratchCameraMatrix);for(let r=0;r<16;r++)this._scratchThreeMatrix.elements[r]=s[r];this.group.matrix.copy(this._scratchThreeMatrix),this.group.updateMatrixWorld(!0)}_spawnTrailIfNeeded(t){this.distanceSinceLastTrail+=(this.speed+Math.abs(this.verticalVelocity))*t;const e=3;for(;this.distanceSinceLastTrail>=e;){const s=(this.distanceSinceLastTrail-e)/((this.speed+Math.abs(this.verticalVelocity))*t||1),r=this.lon,a=this.lat,o=this.alt-this.verticalVelocity*t*s;this.distanceSinceLastTrail-=e;const l=new ne(1,12,12),c=.4+Math.random()*.4,h=new ze({color:new Bt(c,c,c),transparent:!0,opacity:.5+Math.random()*.2}),u=new it(l,h);u.lon=r,u.lat=a,u.alt=o,u.life=2+Math.random()*1.5,u.maxLife=u.life,u.matrixAutoUpdate=!1,this.scene.add(u),this.trail.push(u)}}_updateTrail(t){const e=this.viewer.camera.viewMatrix;for(let n=this.trail.length-1;n>=0;n--){const s=this.trail[n];if(s.life-=t,s.life<=0){this.scene.remove(s),this.trail.splice(n,1);continue}s.randomScale||(s.randomScale=.5+Math.random()*.5);const r=s.life/s.maxLife,a=s.randomScale*(1+(1-r)*8);s.scale.set(a,a,a),s.material.opacity=r*.4;const o=Cesium.Cartesian3.fromDegrees(s.lon,s.lat,s.alt,void 0,this._scratchCartesian),l=Cesium.Transforms.eastNorthUpToFixedFrame(o,void 0,this._scratchMatrix),c=Cesium.Matrix4.multiply(e,l,this._scratchCameraMatrix);for(let h=0;h<16;h++)this._scratchThreeMatrix.elements[h]=c[h];s.matrix.copy(this._scratchThreeMatrix),s.matrix.scale(new D(a,a,a)),s.updateMatrixWorld(!0),s.alt+=.5*t}}destroy(){this.active=!1,this.group&&this.scene.remove(this.group);for(const t of this.trail)this.scene.remove(t);this.trail=[]}}class e_{constructor(t,e,n){this.viewer=t,this.scene=e,this.playerModel=n,this.weapons=[{id:"gun",name:"TALON STRIKE",ammo:1/0,maxAmmo:1/0,fireRate:.3,lastFire:0},{id:"missile",name:"DIVE ATTACK",ammo:30,maxAmmo:30,fireRate:2,lastFire:0,type:"DIVE"}],this.flareWeapon={id:"flare",name:"EAGLE SCREECH",ammo:20,maxAmmo:20,fireRate:.5,lastFire:0},this.selectedWeaponIndex=0,this.projectiles=[],this.flares=[],this.onKill=null,this.target=null,this.isGunOverheated=!1,this.gunHeat=0,this.lockTime=0,this.lockRequiredTime=1.5,this.lockStatus="NONE",this.lockingTarget=null,this.flareQueue=0,this.flareInterval=.15,this.lastFlarePulse=0,this.lastMissileSide=!1,this.emptyWarningTimers={gun:0,missile:0,flare:0},this.lastEmptyWarningSoundTime=0}resetAmmo(){this.selectedWeaponIndex=0;for(const t of this.weapons)typeof t.maxAmmo<"u"&&(t.ammo=t.maxAmmo);this.flareWeapon&&typeof this.flareWeapon.maxAmmo<"u"&&(this.flareWeapon.ammo=this.flareWeapon.maxAmmo),this.gunHeat=0,this.isGunOverheated=!1,this.emptyWarningTimers={gun:0,missile:0,flare:0}}getCurrentWeapon(){return this.weapons[this.selectedWeaponIndex]}toggleWeapon(){this.selectedWeaponIndex=(this.selectedWeaponIndex+1)%this.weapons.length;try{Tt.play("weapon-switch")}catch{}}selectWeapon(t){t>=0&&t<this.weapons.length&&(this.selectedWeaponIndex=t);try{Tt.play("weapon-switch")}catch{}}calculateWeaponPos(t){if(!this.playerModel||!this.viewer)return null;const e=this.playerModel.scale.x,n=t.clone().multiplyScalar(e);n.applyQuaternion(this.playerModel.quaternion),n.add(this.playerModel.position);const s=75,r=Cesium.Math.toDegrees(this.viewer.camera.frustum.fovy),a=Math.tan(Cesium.Math.toRadians(r)*.5)/Math.tan(Cesium.Math.toRadians(s)*.5);n.x*=a,n.y*=a;const o=this.viewer.camera,l=o.right,c=o.up,h=o.direction,u=new Cesium.Cartesian3,d=Cesium.Cartesian3.multiplyByScalar(l,n.x,new Cesium.Cartesian3),f=Cesium.Cartesian3.multiplyByScalar(c,n.y,new Cesium.Cartesian3),g=Cesium.Cartesian3.multiplyByScalar(h,-n.z,new Cesium.Cartesian3);Cesium.Cartesian3.add(d,f,u),Cesium.Cartesian3.add(u,g,u);const x=o.positionWC,m=new Cesium.Cartesian3;Cesium.Cartesian3.add(x,u,m);const p=Cesium.Cartographic.fromCartesian(m);return{lon:Cesium.Math.toDegrees(p.longitude),lat:Cesium.Math.toDegrees(p.latitude),alt:p.height}}fire(t,e=null){const n=e?this.weapons.find(a=>a.id===e):this.weapons[this.selectedWeaponIndex];if(!n)return;const s=performance.now()*.001;if(n.ammo<=0){if(s-this.lastEmptyWarningSoundTime>2){this.emptyWarningTimers[n.id]=1,this.lastEmptyWarningSoundTime=s;try{Tt.play("weapon-warning")}catch{}}return}if(n.id==="gun"&&this.isGunOverheated||s-n.lastFire<n.fireRate||n.id==="missile"&&this.lockStatus!=="LOCKED")return;n.lastFire=s,n.ammo!==1/0&&n.ammo--;const r={lon:t.lon,lat:t.lat,alt:t.alt};if(n.id==="gun"){if(this.gunHeat+=.02,this.gunHeat>=1){this.isGunOverheated=!0;try{Tt.play("weapon-warning")}catch{}}const a=new D(0,0,0),o=this.calculateWeaponPos(a)||Si(r.lon,r.lat,r.alt,t.heading,t.pitch,5),l=new Qx(this.scene,this.viewer,o,t.heading,t.pitch,t.speed,this.onKill);this.projectiles.push(l)}else if(n.id==="missile"){this.lastMissileSide=!this.lastMissileSide;const a=this.lastMissileSide?1:-1,o=new D(15*a,-15,0),l=this.calculateWeaponPos(o)||r,c=this.target,h=new jx(this.scene,this.viewer,l,t.heading,t.pitch,t.speed,c,this.onKill);this.projectiles.push(h);try{Tt.play("missile-fire")}catch{}}}fireFlare(t){const e=this.flareWeapon,n=performance.now()*.001;if(!e||e.ammo<=0){if(n-this.lastEmptyWarningSoundTime>2){this.emptyWarningTimers.flare=1,this.lastEmptyWarningSoundTime=n;try{Tt.play("weapon-warning")}catch{}}return}n-e.lastFire<1||(e.ammo--,e.lastFire=n,this.flareQueue=6,this.lastFlarePulse=0)}_spawnSingleFlare(t){const e=new D(0,-10,6),n=this.calculateWeaponPos(e)||{lon:t.lon,lat:t.lat,alt:t.alt},s=new t_(this.scene,this.viewer,n,t.heading,t.pitch,t.speed);this.flares.push(s)}update(t,e,n=null){const s=this.lockStatus,r=this.getCurrentWeapon();try{n&&n.fire&&r.id==="gun"&&!this.isGunOverheated&&r.ammo>0?Tt.isPlaying("m61-firing")||Tt.play("m61-firing"):Tt.isPlaying("m61-firing")&&Tt.stop("m61-firing")}catch{}if(r.id==="missile"){const o=this.findPotentialTarget(e);o?this.lockingTarget===o?(this.lockTime+=t,this.lockTime>=this.lockRequiredTime?(this.lockStatus="LOCKED",this.target=o):this.lockStatus="LOCKING"):(this.lockingTarget=o,this.lockTime=0,this.lockStatus="LOCKING",this.target=null):(this.lockingTarget=null,this.lockTime=0,this.lockStatus="NONE",this.target=null)}else this.lockingTarget=null,this.lockTime=0,this.lockStatus="NONE",this.target=null;try{this.lockStatus==="LOCKING"?Tt.isPlaying("rwr-tws")||Tt.play("rwr-tws"):Tt.isPlaying("rwr-tws")&&Tt.stop("rwr-tws"),s!==this.lockStatus&&this.lockStatus==="LOCKED"&&Tt.play("rwr-lock"),s==="LOCKED"&&this.lockStatus!=="LOCKED"&&Tt.isPlaying("rwr-lock")&&Tt.stop("rwr-lock")}catch{}this.flareQueue>0&&(this.lastFlarePulse+=t,(this.lastFlarePulse>=this.flareInterval||this.flareQueue===6)&&(this._spawnSingleFlare(e),this.flareQueue--,this.lastFlarePulse=0)),this.gunHeat>0&&(this.gunHeat-=t*.2,this.gunHeat<=0&&(this.gunHeat=0,this.isGunOverheated=!1),this.isGunOverheated&&this.gunHeat<.3&&(this.isGunOverheated=!1));for(const o in this.emptyWarningTimers)this.emptyWarningTimers[o]>0&&(this.emptyWarningTimers[o]-=t,this.emptyWarningTimers[o]<0&&(this.emptyWarningTimers[o]=0));const a=e.npcs||[];for(let o=this.projectiles.length-1;o>=0;o--){const l=this.projectiles[o];l.update(t,a);const c=l.trail&&l.trail.length>0;!l.active&&!c&&this.projectiles.splice(o,1)}for(let o=this.flares.length-1;o>=0;o--){const l=this.flares[o];l.update(t),l.active||this.flares.splice(o,1)}}findPotentialTarget(t){if(!t.npcs||t.npcs.length===0)return null;let e=null,n=.985;for(const s of t.npcs){if(s.destroyed)continue;const r=this.calculateDotProduct(t,s);r>n&&this.calculateDist(t,s)<1e4&&(e=s,n=r)}return e}calculateDotProduct(t,e){const n=Cesium.Math.toRadians(t.heading),s=Cesium.Math.toRadians(t.pitch),r=new D(Math.sin(n)*Math.cos(s),Math.sin(s),Math.cos(n)*Math.cos(s)),a=(e.lon-t.lon)*111320*Math.cos(Cesium.Math.toRadians(t.lat)),o=(e.lat-t.lat)*111320,l=e.alt-t.alt,c=new D(a,l,o).normalize();return r.dot(c)}calculateDist(t,e){const n=(e.lon-t.lon)*111320*Math.cos(Cesium.Math.toRadians(t.lat)),s=(e.lat-t.lat)*111320,r=e.alt-t.alt;return Math.sqrt(n*n+s*s+r*r)}}const al={RABBIT:{category:"ground",speed:3,color:9139029,size:[.12,.08,.15],score:300},SQUIRREL:{category:"ground",speed:4,color:8018490,size:[.06,.05,.1],score:200},MOUSE:{category:"ground",speed:2,color:10127994,size:[.03,.02,.05],score:100},MARMOT:{category:"ground",speed:2,color:6969914,size:[.15,.1,.2],score:400},TROUT:{category:"water",speed:2,color:6982250,size:[.08,.03,.25],score:500},BASS:{category:"water",speed:1.5,color:4876874,size:[.1,.04,.3],score:500},KOKANEE:{category:"water",speed:2.5,color:11162965,size:[.06,.03,.2],score:600},RAVEN:{category:"air",speed:18,color:1118481,size:[.15,.06,.18],score:500,wingColor:657930},CROW:{category:"air",speed:15,color:1710618,size:[.1,.05,.14],score:400,wingColor:1118481}},nu=[{type:"RABBIT",weight:15},{type:"SQUIRREL",weight:15},{type:"MOUSE",weight:10},{type:"MARMOT",weight:5},{type:"TROUT",weight:12},{type:"BASS",weight:10},{type:"KOKANEE",weight:8},{type:"RAVEN",weight:15},{type:"CROW",weight:10}],n_=nu.reduce((i,t)=>i+t.weight,0),Re={lonMin:-116.95,lonMax:-116.86,latMin:34.235,latMax:34.255,elevation:2060},Br={lon:-116.9155,lat:34.2433,radiusM:2e3};function i_(){let i=Math.random()*n_;for(const t of nu)if(i-=t.weight,i<=0)return t.type;return"RAVEN"}function s_(i){const t=al[i];if(!t)return null;const e=new Ie,n=new Vt({color:t.color,flatShading:!0}),[s,r,a]=t.size;if(t.category==="ground"){const o=new ne(1,6,5);o.scale(s,r,a);const l=new it(o,n);e.add(l);const c=new ne(r*.8,5,4),h=new it(c,n);h.position.set(0,r*.3,a*.9),e.add(h);const u=new ze({color:0});for(const d of[-1,1]){const f=new ne(r*.15,4,3),g=new it(f,u);g.position.set(d*r*.4,r*.5,a*1),e.add(g)}if(i==="RABBIT"){for(const g of[-1,1]){const x=new me(.015,.06,.01),m=new it(x,n);m.position.set(g*.02,r+.03,a*.8),e.add(m)}const d=new ne(.02,4,3),f=new it(d,new Vt({color:15658734}));f.position.set(0,r*.3,-a*.7),e.add(f)}}else if(t.category==="water"){const o=new ne(1,6,5);o.scale(s*.6,r,a);const l=new it(o,n);e.add(l);const c=new me(s*.3,r*2,.01),h=new it(c,n);h.position.set(0,0,-a*.9),h.rotation.y=.2,e.add(h);const u=new me(.005,r*.8,s*.4),d=new it(u,n);d.position.set(0,r*.8,0),e.add(d);const f=new ne(1,5,4);f.scale(s*.4,r*.5,a*.8);const g=new it(f,new Vt({color:13421772}));g.position.y=-r*.3,e.add(g)}else if(t.category==="air"){const o=new ne(1,6,5);o.scale(s*.5,r,a);const l=new it(o,n);e.add(l);const c=new ne(r*.7,5,4),h=new it(c,n);h.position.set(0,r*.3,a*.8),e.add(h);const u=new tn(.008,.03,4),d=new it(u,new Vt({color:2236962}));d.position.set(0,r*.2,a*1.1),d.rotation.x=Math.PI/2,e.add(d);const f=new Vt({color:t.wingColor||t.color,side:ke,flatShading:!0});for(const m of[-1,1]){const p=new me(s*2.5,.005,a*.6);p.translate(m*s*1.25,0,0);const w=new it(p,f);w.position.y=r*.2,e.add(w)}const g=new me(s*.5,.005,a*.5),x=new it(g,n);x.position.set(0,0,-a*.7),e.add(x)}return e.traverse(o=>{o.layers.set(0)}),e}class r_{constructor(t,e,n){this.viewer=t,this.scene=e,this.loader=n,this.npcs=[],this.lastSpawnTime=0,this.loaded=!0,this._scratchMatrix=new Cesium.Matrix4,this._scratchHPR=new Cesium.HeadingPitchRoll,this._scratchCartesian=new Cesium.Cartesian3,this._scratchThreeMatrix=new Qt,this._scratchCameraMatrix=new Cesium.Matrix4}isOverLake(t,e){return t>=Re.lonMin&&t<=Re.lonMax&&e>=Re.latMin&&e<=Re.latMax}spawnNPC(t,e,n){const s=i_(),r=al[s];if(!r)return null;let a,o,l,c,h;if(c=Math.random()*360,h=r.speed+(Math.random()-.5)*r.speed*.4,r.category==="ground"){let d=0;do{const x=Math.random()*Math.PI*2,m=100+Math.random()*Br.radiusM,p=111320*Math.cos(Br.lat*Math.PI/180);a=Br.lon+Math.cos(x)*m/p,o=Br.lat+Math.sin(x)*m/111320,d++}while(this.isOverLake(a,o)&&d<10);const f=Cesium.Cartographic.fromDegrees(a,o),g=this.viewer.scene.globe.getHeight(f);l=(g!==void 0?g:2070)+.3}else if(r.category==="water")a=Re.lonMin+.05*(Re.lonMax-Re.lonMin)+Math.random()*.9*(Re.lonMax-Re.lonMin),o=Re.latMin+.05*(Re.latMax-Re.latMin)+Math.random()*.9*(Re.latMax-Re.latMin),l=Re.elevation-.5+Math.random()*.8;else{const d=Math.random()*Math.PI*2,f=500+Math.random()*3e3,g=111320*Math.cos(e*Math.PI/180);a=t+Math.cos(d)*f/g,o=e+Math.sin(d)*f/111320,l=n+(Math.random()-.5)*300,l=Math.max(l,2100)}const u=s+" "+(100+Math.floor(Math.random()*900));return this.createNPC(u,s,r,a,o,l,c,h)}createNPC(t,e,n,s,r,a,o,l){const c=s_(e);if(!c)return null;c.matrixAutoUpdate=!1,this.scene.add(c);const h={id:t+"_"+Math.random().toString(36).substr(2,9),mesh:c,name:t,typeName:e,category:n.category,lon:s,lat:r,alt:a,heading:o,speed:l,pitch:0,roll:0,targetHeading:o,targetPitch:0,behaviorTimer:2+Math.random()*5,terrainCheckTimer:Math.random()*2,time:Math.random()*100,destroyed:!1,score:n.score};return this.npcs.push(h),h}update(t,e){const n=this.viewer.camera.viewMatrix;for(let s=this.npcs.length-1;s>=0;s--){const r=this.npcs[s];if(r.destroyed){this.scene.remove(r.mesh),this.npcs.splice(s,1);continue}if(r.time+=t,r.behaviorTimer-=t,r.behaviorTimer<=0&&(r.category==="ground"?(r.targetHeading=(r.heading+(Math.random()-.5)*120)%360,r.speed=Math.random()>.3?al[r.typeName].speed:0,r.behaviorTimer=1+Math.random()*4):r.category==="water"?(r.targetHeading=(r.heading+(Math.random()-.5)*90)%360,r.behaviorTimer=2+Math.random()*5):(r.targetHeading=(r.heading+(Math.random()-.5)*180)%360,r.targetPitch=(Math.random()-.5)*15,r.behaviorTimer=3+Math.random()*6)),r.category==="air"&&(r.terrainCheckTimer-=t,r.terrainCheckTimer<=0)){r.terrainCheckTimer=.5;const d=Cesium.Cartographic.fromDegrees(r.lon,r.lat),f=this.viewer.scene.globe.getHeight(d);if(f!==void 0){const g=r.alt-f;g<80&&(r.targetPitch=15,g<30&&(r.targetPitch=30))}}let a=r.targetHeading-r.heading;for(;a<-180;)a+=360;for(;a>180;)a-=360;const l=(r.category==="air"?60:120)*t;if(r.heading=(r.heading+Math.max(-l,Math.min(l,a))+360)%360,r.category==="air"&&(r.pitch+=(r.targetPitch-r.pitch)*t*.6,Math.abs(a)>.5?r.roll+=(-Math.sign(a)*Math.min(1,Math.abs(a)/45)*45-r.roll)*t*3:r.roll+=(0-r.roll)*t*3),r.speed>0)if(r.category==="ground"){const d=Si(r.lon,r.lat,r.alt,r.heading,0,r.speed*t);this.isOverLake(d.lon,d.lat)?(r.heading=(r.heading+140+Math.random()*80)%360,r.targetHeading=r.heading):(r.lon=d.lon,r.lat=d.lat);const f=Cesium.Cartographic.fromDegrees(r.lon,r.lat),g=this.viewer.scene.globe.getHeight(f);g!==void 0&&(r.alt=g+.3)}else if(r.category==="water"){const d=Si(r.lon,r.lat,r.alt,r.heading,0,r.speed*t);d.lon<Re.lonMin||d.lon>Re.lonMax||d.lat<Re.latMin||d.lat>Re.latMax?(r.heading=(r.heading+150+Math.random()*60)%360,r.targetHeading=r.heading):(r.lon=d.lon,r.lat=d.lat),r.alt=Re.elevation-.3+Math.sin(r.time*1.5)*.4}else{const d=Si(r.lon,r.lat,r.alt,r.heading,r.pitch,r.speed*t);r.lon=d.lon,r.lat=d.lat,r.alt=d.alt}const c=Cesium.Cartesian3.fromDegrees(r.lon,r.lat,r.alt,void 0,this._scratchCartesian);this._scratchHPR.heading=Cesium.Math.toRadians(r.heading),this._scratchHPR.pitch=Cesium.Math.toRadians(r.pitch),this._scratchHPR.roll=Cesium.Math.toRadians(r.roll);const h=Cesium.Transforms.headingPitchRollToFixedFrame(c,this._scratchHPR,Cesium.Ellipsoid.WGS84,Cesium.Transforms.eastNorthUpToFixedFrame,this._scratchMatrix),u=Cesium.Matrix4.multiply(n,h,this._scratchCameraMatrix);for(let d=0;d<16;d++)this._scratchThreeMatrix.elements[d]=u[d];r.mesh.matrix.copy(this._scratchThreeMatrix),r.mesh.updateMatrixWorld(!0)}this.npcs.length<12&&Date.now()-this.lastSpawnTime>2e3&&(this.spawnNPC(e.lon,e.lat,e.alt),this.lastSpawnTime=Date.now())}clear(){this.npcs.forEach(t=>this.scene.remove(t.mesh)),this.npcs=[]}}class a_{constructor(){this.container=document.getElementById("dialogue-container"),this.textElem=document.getElementById("dialogue-text"),this.dialogues=["Shadow! It's Jackie, calling from the nest. The eaglets are hungry - time to hunt!","You're soaring above Big Bear Valley. Our Jeffrey pine nest is your home base.","Check your display - SPEED on the left shows how fast you're flying, ALTITUDE on the right.","The compass at the top shows your heading. Use it to navigate back to the lake for fish.","Your talons are ready! Use TALON STRIKE for quick catches, or DIVE ATTACK for bigger prey.","Use 'W' and 'S' to control your wing speed. Glide to conserve energy.","Control your flight with ARROW keys for pitch and roll. 'A' and 'D' for turning.","Press SPACE to power dive - you can reach incredible speeds swooping down!","Switch hunting modes with '1', '2', or 'Q'. Press 'F' or ENTER to strike!","Watch out for ravens! Press 'V' to screech and scare them away from our territory.","The territory map shows prey and ravens nearby. Hunt the fish in Big Bear Lake!","Good hunting, Shadow! Bring food back for our eaglets. Jackie, out."],this.currentIndex=0,this.isActive=!1,this.isPaused=!1,this.currentCharIndex=0,this.isWaitingForNext=!1,this.lastSoundIndex=-1,this.glitchSounds=["glitch-1","glitch-2","glitch-3","glitch-4"]}start(){localStorage.getItem("tutorialCompleted")||(this.stop(),this.currentIndex=0,this.currentCharIndex=0,this.isActive=!0,this.isPaused=!1,this.isWaitingForNext=!1,this.startTimeout=setTimeout(()=>{!this.isActive||this.isPaused||(this.container.classList.remove("hidden"),this.showNext())},7e3))}pause(){this.isActive&&(this.isPaused=!0,this.container.classList.add("hidden"),this.startTimeout&&clearTimeout(this.startTimeout),this.typewriterTimeout&&clearTimeout(this.typewriterTimeout),this.nextTimeout&&clearTimeout(this.nextTimeout))}resume(){!this.isActive||!this.isPaused||(this.isPaused=!1,this.container.classList.remove("hidden"),this.isWaitingForNext?this.nextTimeout=setTimeout(()=>{this.currentIndex++,this.currentCharIndex=0,this.showNext()},2e3):this.typeWriter())}stop(){this.isActive=!1,this.isPaused=!1,this.container.classList.add("hidden"),this.startTimeout&&clearTimeout(this.startTimeout),this.typewriterTimeout&&clearTimeout(this.typewriterTimeout),this.nextTimeout&&clearTimeout(this.nextTimeout)}showNext(){if(!(!this.isActive||this.isPaused)){if(this.currentIndex>=this.dialogues.length){this.finish();return}this.textElem.textContent="",this.currentCharIndex=0,this.isWaitingForNext=!1,this.playRandomGlitch(),this.typeWriter()}}typeWriter(){if(!this.isActive||this.isPaused)return;const t=this.dialogues[this.currentIndex];this.currentCharIndex<t.length?(this.textElem.textContent=t.substring(0,this.currentCharIndex+1),this.currentCharIndex++,this.typewriterTimeout=setTimeout(()=>this.typeWriter(),30)):(this.isWaitingForNext=!0,this.nextTimeout=setTimeout(()=>{this.currentIndex++,this.currentCharIndex=0,this.showNext()},4e3))}playRandomGlitch(){let t;do t=Math.floor(Math.random()*this.glitchSounds.length);while(t===this.lastSoundIndex);this.lastSoundIndex=t,Tt.play(this.glitchSounds[t])}skip(){if(!this.isActive||this.isPaused)return;const t=this.dialogues[this.currentIndex];t&&(this.isWaitingForNext?(this.nextTimeout&&clearTimeout(this.nextTimeout),this.currentIndex++,this.currentCharIndex=0,this.showNext()):(this.typewriterTimeout&&clearTimeout(this.typewriterTimeout),this.textElem.textContent=t,this.currentCharIndex=t.length,this.isWaitingForNext=!0,this.nextTimeout&&clearTimeout(this.nextTimeout),this.nextTimeout=setTimeout(()=>{this.currentIndex++,this.currentCharIndex=0,this.showNext()},4e3)))}finish(){this.isActive=!1,this.container.classList.add("hidden"),localStorage.setItem("tutorialCompleted","true")}}class o_{constructor(){this.currentBiome="wilderness",this.lastBiomeCheck=0,this.biomeCheckInterval=3e3,this.windPlaying=!1,this.windVolume=0,this.targetWindVolume=0}getBiome(t,e,n){const s=n*.3048;if(s>3e3)return"highalt";if(e>34.23&&e<34.27&&t>-116.95&&t<-116.85)return"water";const r=[{lon:-118.24,lat:34.05,r:.12},{lon:-115.14,lat:36.17,r:.08},{lon:-117.16,lat:32.72,r:.08},{lon:-112.07,lat:33.45,r:.1}];for(const a of r)if(Math.sqrt((t-a.lon)**2+(e-a.lat)**2)<a.r)return"city";return e>34.5&&t>-117.5||e>33.5&&t>-116.5&&s<600?"desert":s>1500?"mountain":"wilderness"}update(t,e){if(!Tt||!Tt.listener)return;const n=e.speed||0;e.alt;const s=e.isFlapping||!1,r=e.isBoosting||!1,a=e.isTurbo||!1,o=8,l=80;if(n>o){const h=Math.min(1,(n-o)/(l-o));this.targetWindVolume=.08+h*.55,a&&(this.targetWindVolume=Math.min(.9,this.targetWindVolume*1.5)),r&&(this.targetWindVolume=Math.min(.85,this.targetWindVolume*1.3))}else this.targetWindVolume=.05;if(this.windVolume+=(this.targetWindVolume-this.windVolume)*t*3,Tt.sounds.has("wind")&&(this.windPlaying||(Tt.play("wind",.5),this.windPlaying=!0),Tt.setVolume("wind",this.windVolume)),Tt.sounds.has("jet-engine")&&Tt.isPlaying("jet-engine")){const h=n>30?Math.min(.3,(n-30)/200):0;Tt.setVolume("jet-engine",h)}s&&e.flapStrength>.3?(Tt.isPlaying("pitch")||Tt.play("pitch",.1),Tt.setVolume("pitch",.15+e.flapStrength*.2)):Tt.isPlaying("pitch")&&!s&&Tt.stop("pitch",.3),r&&(Tt.isPlaying("boost")||Tt.play("boost"));const c=Date.now();c-this.lastBiomeCheck>this.biomeCheckInterval&&(this.lastBiomeCheck=c,this.currentBiome=this.getBiome(e.lon,e.lat,e.alt))}startFlight(){this.windPlaying=!1,this.windVolume=.05}getCurrentBiome(){return this.currentBiome}}const eh=[{name:"Big Bear Lake",center:{lon:-116.905,lat:34.244},lengthM:11e3,widthM:1600,maxDepth:22,elevation:2060,rotation:-15,shape:"ellipse"},{name:"Baldwin Lake",center:{lon:-116.82,lat:34.28},lengthM:2500,widthM:1800,maxDepth:3,elevation:2050,rotation:0,shape:"ellipse"},{name:"Lake Arrowhead",center:{lon:-117.189,lat:34.258},lengthM:1800,widthM:900,maxDepth:56,elevation:1572,rotation:-30,shape:"ellipse"},{name:"Silverwood Lake",center:{lon:-117.333,lat:34.294},lengthM:3200,widthM:800,maxDepth:55,elevation:1050,rotation:-45,shape:"ellipse"},{name:"Gregory Lake",center:{lon:-117.258,lat:34.229},lengthM:400,widthM:200,maxDepth:8,elevation:1400,rotation:10,shape:"ellipse"}],l_=`
	uniform float time;
	uniform float waveAmplitude;
	uniform float waveFrequency;
	varying vec2 vUv;
	varying vec3 vWorldPosition;
	varying vec3 vNormal;
	varying float vDepth;

	void main() {
		vUv = uv;

		// Wave displacement
		vec3 pos = position;
		float wave1 = sin(pos.x * waveFrequency + time * 1.2) * waveAmplitude;
		float wave2 = sin(pos.z * waveFrequency * 0.7 + time * 0.8) * waveAmplitude * 0.6;
		float wave3 = cos((pos.x + pos.z) * waveFrequency * 0.5 + time * 1.5) * waveAmplitude * 0.3;
		pos.y += wave1 + wave2 + wave3;

		// Depth based on distance from center (elliptical)
		float distFromCenter = length(uv - vec2(0.5, 0.5)) * 2.0;
		vDepth = 1.0 - distFromCenter * distFromCenter;

		// Calculate displaced normal for ripples
		float dx = cos(pos.x * waveFrequency + time * 1.2) * waveAmplitude * waveFrequency;
		float dz = cos(pos.z * waveFrequency * 0.7 + time * 0.8) * waveAmplitude * 0.6 * waveFrequency * 0.7;
		vNormal = normalize(vec3(-dx, 1.0, -dz));

		vWorldPosition = (modelMatrix * vec4(pos, 1.0)).xyz;
		gl_Position = projectionMatrix * modelViewMatrix * vec4(pos, 1.0);
	}
`,c_=`
	uniform float time;
	uniform vec3 shallowColor;
	uniform vec3 deepColor;
	uniform vec3 skyColor;
	uniform vec3 sunDirection;
	uniform float maxDepthMeters;
	uniform float opacity;
	varying vec2 vUv;
	varying vec3 vWorldPosition;
	varying vec3 vNormal;
	varying float vDepth;

	void main() {
		// View direction
		vec3 viewDir = normalize(cameraPosition - vWorldPosition);

		// Fresnel effect - more reflection at glancing angles
		float fresnel = pow(1.0 - max(dot(viewDir, vNormal), 0.0), 3.0);
		fresnel = mix(0.05, 0.8, fresnel);

		// Depth-based water color
		float depthFactor = clamp(vDepth * maxDepthMeters / 20.0, 0.0, 1.0);
		vec3 waterColor = mix(shallowColor, deepColor, depthFactor);

		// Animated caustic-like pattern
		float caustic = sin(vUv.x * 40.0 + time * 0.5) * sin(vUv.y * 40.0 + time * 0.3) * 0.5 + 0.5;
		caustic = pow(caustic, 3.0) * 0.15;
		waterColor += vec3(caustic * 0.5, caustic * 0.8, caustic);

		// Sun specular reflection
		vec3 reflectDir = reflect(-sunDirection, vNormal);
		float specular = pow(max(dot(viewDir, reflectDir), 0.0), 128.0);
		vec3 specularColor = vec3(1.0, 0.95, 0.8) * specular * 2.0;

		// Combine: water color + fresnel sky reflection + specular
		vec3 finalColor = mix(waterColor, skyColor, fresnel) + specularColor;

		// Edge fade for shoreline
		float edgeDist = length(vUv - vec2(0.5, 0.5)) * 2.0;
		float edgeFade = 1.0 - smoothstep(0.85, 1.0, edgeDist);

		// Opacity varies with depth (shallow = more transparent)
		float alpha = mix(0.6, 0.92, depthFactor) * edgeFade * opacity;

		gl_FragColor = vec4(finalColor, alpha);
	}
`;class iu{constructor(t,e){this.viewer=t,this.scene=e,this.waterMeshes=[],this.uniforms=null,this.initialized=!1,this.init()}init(){this.uniforms={time:{value:0},waveAmplitude:{value:.3},waveFrequency:{value:.15},shallowColor:{value:new Bt(4886692)},deepColor:{value:new Bt(667228)},skyColor:{value:new Bt(8900331)},sunDirection:{value:new D(.5,.8,.3).normalize()},maxDepthMeters:{value:22},opacity:{value:1}};for(const t of eh){const e=this.createWaterMesh(t);e&&(this.waterMeshes.push({mesh:e,body:t}),this.scene.add(e))}this.initialized=!0}createWaterMesh(t){const s=new Ts(t.lengthM,t.widthM,64,32),r=s.attributes.position;for(let c=0;c<r.count;c++){const h=r.getX(c),u=r.getY(c),d=h/(t.lengthM/2),f=u/(t.widthM/2),g=d*d+f*f;if(g>1){const x=1/Math.sqrt(g);r.setX(c,h*x),r.setY(c,u*x)}}r.needsUpdate=!0,s.rotateX(-Math.PI/2),t.rotation&&s.rotateY(Se.degToRad(t.rotation));const a={...this.uniforms,maxDepthMeters:{value:t.maxDepth}},o=new En({uniforms:a,vertexShader:l_,fragmentShader:c_,transparent:!0,side:ke,depthWrite:!1}),l=new it(s,o);return l.renderOrder=-1,l.layers.set(0),l.frustumCulled=!1,l}update(t,e){if(!this.initialized)return;const n=performance.now()*.001,s=e.lon,r=e.lat,a=e.alt,o=111320,l=111320*Math.cos(Se.degToRad(r));for(const{mesh:c,body:h}of this.waterMeshes){c.material.uniforms.time.value=n;const u=(h.center.lon-s)*l,d=(h.center.lat-r)*o,f=h.elevation-a*.3048;c.position.set(u,f,-d);const g=Math.sqrt(u*u+d*d);c.visible=g<3e4;const x=Math.max(.05,1-(a*.3048-h.elevation)/5e3);c.material.uniforms.waveAmplitude.value=.3*x;const m=n*.02;c.material.uniforms.sunDirection.value.set(Math.cos(m)*.5,.8,Math.sin(m)*.3).normalize()}}static isOverWater(t,e){for(const n of eh){const s=(t-n.center.lon)*111320*Math.cos(e*Math.PI/180),r=(e-n.center.lat)*111320,a=-(n.rotation||0)*Math.PI/180,o=s*Math.cos(a)-r*Math.sin(a),l=s*Math.sin(a)+r*Math.cos(a),c=o/(n.lengthM/2),h=l/(n.widthM/2);if(c*c+h*h<=1)return!0}return!1}dispose(){for(const{mesh:t}of this.waterMeshes)this.scene.remove(t),t.geometry.dispose(),t.material.dispose();this.waterMeshes=[]}}const sn={renderDistance:2e3,cellSize:40,maxTrees:3e3,updateInterval:500,lodNear:500,lodFar:1500},nh={jeffreyPine:{trunkHeight:20,trunkRadius:.4,crownHeight:12,crownRadius:4,trunkColor:6044190,crownColor:2972199,altMin:1500,altMax:2400,density:.6,biome:"mountain"},whiteFir:{trunkHeight:25,trunkRadius:.5,crownHeight:18,crownRadius:3.5,trunkColor:7029286,crownColor:1789211,altMin:1700,altMax:2700,density:.5,biome:"mountain"},lodgepolePine:{trunkHeight:18,trunkRadius:.3,crownHeight:10,crownRadius:2.5,trunkColor:8016432,crownColor:3828533,altMin:2100,altMax:3e3,density:.7,biome:"mountain"},scrubOak:{trunkHeight:6,trunkRadius:.2,crownHeight:5,crownRadius:3,trunkColor:5914152,crownColor:4880954,altMin:1e3,altMax:1800,density:.3,biome:"mountain"},alpinePine:{trunkHeight:8,trunkRadius:.25,crownHeight:6,crownRadius:2,trunkColor:7031344,crownColor:2774320,altMin:2700,altMax:3500,density:.15,biome:"mountain"},joshuaTree:{trunkHeight:8,trunkRadius:.3,crownHeight:4,crownRadius:3,trunkColor:9139029,crownColor:7048782,altMin:400,altMax:1800,density:.12,biome:"desert"},saguaroCactus:{trunkHeight:10,trunkRadius:.4,crownHeight:2,crownRadius:.5,trunkColor:4880970,crownColor:5933658,altMin:200,altMax:1200,density:.06,biome:"desert"},creosoteBush:{trunkHeight:2,trunkRadius:.1,crownHeight:2,crownRadius:1.5,trunkColor:7035454,crownColor:8031056,altMin:0,altMax:1500,density:.2,biome:"desert"},desertSage:{trunkHeight:1.2,trunkRadius:.05,crownHeight:1,crownRadius:.8,trunkColor:9075296,crownColor:10135674,altMin:0,altMax:2e3,density:.25,biome:"desert"},smokeyTree:{trunkHeight:5,trunkRadius:.15,crownHeight:4,crownRadius:2.5,trunkColor:8022869,crownColor:9083514,altMin:100,altMax:900,density:.08,biome:"desert"},californiaFanPalm:{trunkHeight:18,trunkRadius:.3,crownHeight:5,crownRadius:4,trunkColor:9139029,crownColor:3836730,altMin:0,altMax:500,density:.3,biome:"coastal"},datePalm:{trunkHeight:15,trunkRadius:.35,crownHeight:6,crownRadius:4.5,trunkColor:8022864,crownColor:2980397,altMin:0,altMax:300,density:.25,biome:"coastal"},mexicanFanPalm:{trunkHeight:25,trunkRadius:.25,crownHeight:4,crownRadius:3.5,trunkColor:10127978,crownColor:4889162,altMin:0,altMax:700,density:.2,biome:"urban"},urbanLondonPlane:{trunkHeight:12,trunkRadius:.3,crownHeight:8,crownRadius:5,trunkColor:8022618,crownColor:3832368,altMin:0,altMax:500,density:.15,biome:"urban"},urbanJacaranda:{trunkHeight:10,trunkRadius:.25,crownHeight:6,crownRadius:5,trunkColor:5917242,crownColor:8018602,altMin:0,altMax:500,density:.1,biome:"urban"},urbanOak:{trunkHeight:14,trunkRadius:.4,crownHeight:10,crownRadius:7,trunkColor:5916720,crownColor:3828264,altMin:0,altMax:800,density:.12,biome:"urban"},eucalyptus:{trunkHeight:20,trunkRadius:.35,crownHeight:10,crownRadius:4,trunkColor:10127994,crownColor:5933658,altMin:0,altMax:600,density:.15,biome:"coastal"},manzanita:{trunkHeight:3,trunkRadius:.1,crownHeight:3,crownRadius:2,trunkColor:9056288,crownColor:4876848,altMin:300,altMax:1500,density:.35,biome:"chaparral"},californiaLaurel:{trunkHeight:10,trunkRadius:.3,crownHeight:7,crownRadius:5,trunkColor:5917232,crownColor:2775584,altMin:200,altMax:1200,density:.2,biome:"chaparral"},ceanothus:{trunkHeight:4,trunkRadius:.15,crownHeight:3,crownRadius:2.5,trunkColor:6969920,crownColor:3832400,altMin:200,altMax:1500,density:.3,biome:"chaparral"}};function gi(i,t){let e=i*73856093^t*19349663;return e=(e>>16^e)*73244475,e=(e>>16^e)*73244475,e=e>>16^e,(e&2147483647)/2147483647}class h_{constructor(t,e){this.viewer=t,this.scene=e,this.trunkInstances=null,this.crownInstances=null,this.activeCells=new Map,this.lastUpdateTime=0,this.lastUpdatePos={lon:0,lat:0},this.treePositions=[],this.treeCount=0,this.trunkGeometry=null,this.crownGeometries={},this.initialized=!1,this.init()}init(){this.trunkGeometry=new Ye(.3,.5,1,5,1),this.trunkGeometry.translate(0,.5,0),this.crownGeometries.conifer=new tn(1,1,6,1),this.crownGeometries.conifer.translate(0,.5,0),this.crownGeometries.deciduous=new ne(1,5,4);const t=new Vt({color:6044190,flatShading:!0}),e=new Vt({color:2972199,flatShading:!0});this.trunkInstances=new yi(this.trunkGeometry,t,sn.maxTrees),this.trunkInstances.count=0,this.trunkInstances.frustumCulled=!1,this.trunkInstances.layers.set(0),this.crownInstances=new yi(this.crownGeometries.conifer,e,sn.maxTrees),this.crownInstances.count=0,this.crownInstances.frustumCulled=!1,this.crownInstances.layers.set(0),this.scene.add(this.trunkInstances),this.scene.add(this.crownInstances),this.initialized=!0}getBiome(t,e,n){if(n>1500)return"mountain";if(n>600&&n<1500)return"chaparral";if(e>34.5&&t>-117.5||e>33.5&&t>-116.5&&n<600||e<34&&e>33.3&&t>-116.8&&t<-115.5||e<34&&t>-113||e<33&&t>-112)return"desert";if(t<-117.5&&n<300||t<-118&&e<34.5)return"coastal";const s=[{lon:-118.24,lat:34.05,r:.15},{lon:-118.19,lat:33.77,r:.08},{lon:-117.16,lat:32.72,r:.12},{lon:-115.14,lat:36.17,r:.1},{lon:-117.91,lat:33.84,r:.08},{lon:-118.14,lat:34.15,r:.05},{lon:-112.07,lat:33.45,r:.12},{lon:-117.38,lat:33.98,r:.06},{lon:-117.29,lat:34.11,r:.05}];for(const r of s)if(Math.sqrt((t-r.lon)**2+(e-r.lat)**2)<r.r)return"urban";return n<300&&e>34.5?"desert":"chaparral"}getSpeciesForPosition(t,e,n){const s=this.getBiome(e,n,t),r=[];for(const[a,o]of Object.entries(nh))t>=o.altMin&&t<=o.altMax&&o.biome===s&&r.push({name:a,...o});if(r.length===0){const o={mountain:["chaparral"],chaparral:["mountain","coastal"],desert:["chaparral"],coastal:["urban","chaparral"],urban:["coastal","chaparral"]}[s]||[];for(const l of o){for(const[c,h]of Object.entries(nh))t>=h.altMin&&t<=h.altMax&&h.biome===l&&r.push({name:c,...h});if(r.length>0)break}}return r}isWaterArea(t,e){return iu.isOverWater(t,e)}generateTreesForCell(t,e,n,s,r){const a=`${t},${e}`;if(this.activeCells.has(a))return;const o=t*sn.cellSize,l=e*sn.cellSize,c=111320,h=111320*Math.cos(Se.degToRad(s)),u=n+o/h,d=s+l/c;if(this.isWaterArea(u,d)){this.activeCells.set(a,[]);return}const f=Cesium.Cartographic.fromDegrees(u,d),g=this.viewer.scene.globe.getHeight(f);if(g==null)return;const x=g,m=this.getSpeciesForPosition(x,u,d);if(m.length===0){this.activeCells.set(a,[]);return}gi(t,e);const p=[],w=3;for(let b=0;b<w;b++)for(let M=0;M<w;M++){const y=gi(t*100+b,e*100+M),T=Math.floor(y*m.length)%m.length,C=m[T];if(gi(t*200+b,e*200+M)>C.density)continue;const L=gi(t*300+b,e*300+M)*.8,v=gi(t*400+b,e*400+M)*.8,S=o+(b+L)*(sn.cellSize/w),P=l+(M+v)*(sn.cellSize/w),I=.7+gi(t*500+b,e*500+M)*.6;p.push({x:S,z:P,terrainHeight:g,species:C,sizeScale:I})}this.activeCells.set(a,p)}update(t,e){if(!this.initialized)return;const n=Date.now();if(n-this.lastUpdateTime<sn.updateInterval)return;this.lastUpdateTime=n;const s=e.lon,r=e.lat,a=e.alt;if(a>5e3){this.trunkInstances.count=0,this.crownInstances.count=0;return}const o=Math.min(sn.renderDistance,Math.max(400,a*1.5)),l=Math.ceil(o/sn.cellSize),c=l+2;for(const[m,p]of this.activeCells){const[w,b]=m.split(",").map(Number);(Math.abs(w)>c||Math.abs(b)>c)&&this.activeCells.delete(m)}for(let m=-l;m<=l;m++)for(let p=-l;p<=l;p++)Math.sqrt(m*m+p*p)*sn.cellSize>o||this.generateTreesForCell(m,p,s,r,a);let h=0;const u=new Qt,d=new D,f=new qe,g=new D,x=new Bt;for(const[m,p]of this.activeCells){for(const w of p){if(h>=sn.maxTrees)break;const b=Math.sqrt(w.x*w.x+w.z*w.z);if(b>o)continue;const M=b>sn.lodFar?.7:b>sn.lodNear?.85:1,y=w.species,T=w.sizeScale*M,C=w.terrainHeight-a;d.set(w.x,C,w.z),g.set(y.trunkRadius*T*2,y.trunkHeight*T,y.trunkRadius*T*2),u.compose(d,f,g),this.trunkInstances.setMatrixAt(h,u),x.setHex(y.trunkColor);const L=.8+gi(Math.floor(w.x),Math.floor(w.z))*.4;x.multiplyScalar(L),this.trunkInstances.setColorAt(h,x),d.set(w.x,C+y.trunkHeight*T*.7,w.z),g.set(y.crownRadius*T*2,y.crownHeight*T,y.crownRadius*T*2),u.compose(d,f,g),this.crownInstances.setMatrixAt(h,u),x.setHex(y.crownColor);const v=.7+gi(Math.floor(w.x)+1e3,Math.floor(w.z)+1e3)*.6;x.multiplyScalar(v),this.crownInstances.setColorAt(h,x),h++}if(h>=sn.maxTrees)break}this.trunkInstances.count=h,this.crownInstances.count=h,h>0&&(this.trunkInstances.instanceMatrix.needsUpdate=!0,this.crownInstances.instanceMatrix.needsUpdate=!0,this.trunkInstances.instanceColor&&(this.trunkInstances.instanceColor.needsUpdate=!0),this.crownInstances.instanceColor&&(this.crownInstances.instanceColor.needsUpdate=!0)),this.lastUpdatePos={lon:s,lat:r}}clear(){this.activeCells.clear(),this.trunkInstances.count=0,this.crownInstances.count=0}dispose(){this.trunkInstances&&(this.scene.remove(this.trunkInstances),this.trunkInstances.dispose()),this.crownInstances&&(this.scene.remove(this.crownInstances),this.crownInstances.dispose()),this.trunkGeometry&&this.trunkGeometry.dispose();for(const t of Object.values(this.crownGeometries))t.dispose()}}const u_=[{name:"Big Bear Ski Resort",description:"Snow Summit & Bear Mountain ski area",lon:-116.8595,lat:34.2272,elevation:2400,structures:[{type:"lodge",width:40,depth:25,height:12,color:9136404,roofColor:4861952},{type:"lodge",width:30,depth:20,height:10,color:9136404,roofColor:4861952,offsetX:60,offsetZ:20},{type:"tower",width:4,depth:4,height:25,color:8947848,offsetX:-30,offsetZ:-20},{type:"tower",width:4,depth:4,height:25,color:8947848,offsetX:-30,offsetZ:40},{type:"tower",width:4,depth:4,height:25,color:8947848,offsetX:-30,offsetZ:100},{type:"tower",width:4,depth:4,height:25,color:8947848,offsetX:-30,offsetZ:160},{type:"flat",width:80,depth:60,height:.3,color:3355443,offsetX:80,offsetZ:-30}],labelOffset:30},{name:"Las Vegas Strip",description:"The famous Las Vegas Boulevard casino strip",lon:-115.1728,lat:36.1147,elevation:610,structures:[{type:"pyramid",width:100,depth:100,height:110,color:1710618,offsetX:0,offsetZ:-200},{type:"skyscraper",width:60,depth:40,height:145,color:12887636,offsetX:-80,offsetZ:-350},{type:"skyscraper",width:80,depth:35,height:155,color:15260872,offsetX:0,offsetZ:100},{type:"skyscraper",width:70,depth:50,height:120,color:16117984,offsetX:60,offsetZ:250},{type:"curved_tower",width:50,depth:50,height:190,color:9127187,offsetX:-50,offsetZ:500},{type:"tower",width:12,depth:12,height:350,color:13421772,offsetX:0,offsetZ:900},{type:"skyscraper",width:90,depth:70,height:90,color:25600,offsetX:100,offsetZ:-100},{type:"skyscraper",width:55,depth:40,height:180,color:4620980,offsetX:30,offsetZ:0},{type:"skyscraper",width:45,depth:35,height:185,color:7372944,offsetX:-40,offsetZ:50},{type:"skyscraper",width:60,depth:45,height:145,color:14596231,offsetX:40,offsetZ:400},{type:"tower",width:8,depth:8,height:165,color:6908265,offsetX:50,offsetZ:150},{type:"flat",width:35,depth:1400,height:.5,color:2236962,offsetX:0,offsetZ:200}],labelOffset:360},{name:"Hollywood Hills",description:"Hollywood Sign and surrounding hills",lon:-118.3215,lat:34.1341,elevation:480,structures:[{type:"sign_letter",width:3,depth:1,height:14,color:16777215,offsetX:-50,offsetZ:0},{type:"sign_letter",width:3,depth:1,height:14,color:16777215,offsetX:-38,offsetZ:0},{type:"sign_letter",width:3,depth:1,height:14,color:16777215,offsetX:-26,offsetZ:0},{type:"sign_letter",width:3,depth:1,height:14,color:16777215,offsetX:-14,offsetZ:0},{type:"sign_letter",width:3,depth:1,height:14,color:16777215,offsetX:-2,offsetZ:0},{type:"sign_letter",width:3,depth:1,height:14,color:16777215,offsetX:10,offsetZ:0},{type:"sign_letter",width:3,depth:1,height:14,color:16777215,offsetX:22,offsetZ:0},{type:"sign_letter",width:3,depth:1,height:14,color:16777215,offsetX:34,offsetZ:0},{type:"sign_letter",width:3,depth:1,height:14,color:16777215,offsetX:46,offsetZ:0},{type:"dome",width:20,depth:20,height:15,color:15260872,offsetX:200,offsetZ:-300},{type:"box",width:40,depth:30,height:8,color:15260872,offsetX:200,offsetZ:-300}],labelOffset:20},{name:"Twentynine Palms",description:"Marine Corps Air Ground Combat Center",lon:-116.0542,lat:34.1356,elevation:600,structures:[{type:"military_building",width:60,depth:30,height:8,color:12759680,offsetX:0,offsetZ:0},{type:"military_building",width:40,depth:25,height:6,color:12759680,offsetX:80,offsetZ:30},{type:"military_building",width:50,depth:20,height:7,color:12759680,offsetX:-70,offsetZ:50},{type:"hangar",width:50,depth:40,height:15,color:8421504,offsetX:0,offsetZ:-100},{type:"hangar",width:50,depth:40,height:15,color:8421504,offsetX:70,offsetZ:-100},{type:"flat",width:45,depth:2500,height:.3,color:2763306,offsetX:200,offsetZ:0},{type:"tower",width:8,depth:8,height:25,color:8421504,offsetX:150,offsetZ:-50},{type:"box",width:30,depth:12,height:5,color:12759680,offsetX:-150,offsetZ:-30},{type:"box",width:30,depth:12,height:5,color:12759680,offsetX:-150,offsetZ:-60},{type:"box",width:30,depth:12,height:5,color:12759680,offsetX:-150,offsetZ:-90}],labelOffset:30},{name:"Fort Irwin NTC",description:"National Training Center - US Army desert warfare training",lon:-116.6833,lat:35.2628,elevation:730,structures:[{type:"military_building",width:80,depth:40,height:10,color:12759680,offsetX:0,offsetZ:0},{type:"military_building",width:60,depth:30,height:8,color:12759680,offsetX:100,offsetZ:40},{type:"flat",width:200,depth:150,height:.3,color:11047024,offsetX:-200,offsetZ:0},{type:"hangar",width:60,depth:50,height:18,color:7368816,offsetX:0,offsetZ:-150},{type:"hangar",width:60,depth:50,height:18,color:7368816,offsetX:80,offsetZ:-150},{type:"box",width:40,depth:15,height:6,color:12759680,offsetX:-100,offsetZ:80},{type:"box",width:40,depth:15,height:6,color:12759680,offsetX:-100,offsetZ:110},{type:"box",width:40,depth:15,height:6,color:12759680,offsetX:-100,offsetZ:140},{type:"tower",width:5,depth:5,height:40,color:11184810,offsetX:150,offsetZ:-80},{type:"water_tower",width:10,depth:10,height:30,color:13421772,offsetX:180,offsetZ:50}],labelOffset:45},{name:"Reagan Presidential Library",description:"Ronald Reagan Presidential Library & Museum, Simi Valley",lon:-118.82,lat:34.2597,elevation:470,structures:[{type:"box",width:70,depth:50,height:12,color:16115404,offsetX:0,offsetZ:0},{type:"box",width:30,depth:60,height:10,color:16115404,offsetX:-50,offsetZ:10},{type:"hangar",width:60,depth:80,height:22,color:14538176,offsetX:80,offsetZ:-50},{type:"flat",width:40,depth:40,height:.2,color:13808780,offsetX:0,offsetZ:60},{type:"tower",width:6,depth:6,height:18,color:16115404,offsetX:-20,offsetZ:-30},{type:"flat",width:100,depth:60,height:.3,color:3355443,offsetX:-100,offsetZ:-60}],labelOffset:25},{name:"Rose Bowl",description:"Rose Bowl Stadium, Pasadena",lon:-118.1676,lat:34.1613,elevation:260,structures:[{type:"stadium",width:200,depth:150,height:25,color:11047024,offsetX:0,offsetZ:0},{type:"flat",width:110,depth:75,height:.5,color:2263842,offsetX:0,offsetZ:0},{type:"flat",width:200,depth:100,height:.3,color:3355443,offsetX:0,offsetZ:-140},{type:"flat",width:150,depth:100,height:.3,color:3355443,offsetX:200,offsetZ:0}],labelOffset:30}],bn={};function us(){return bn.box||(bn.box=new me(1,1,1)),bn.box}function d_(){return bn.cone||(bn.cone=new tn(.5,1,4)),bn.cone}function zs(){return bn.cylinder||(bn.cylinder=new Ye(.5,.5,1,8)),bn.cylinder}function ih(){return bn.sphere||(bn.sphere=new ne(.5,8,6)),bn.sphere}function f_(i){const t=new Ie,e=new Vt({color:i.color,flatShading:!0});switch(i.type){case"box":case"military_building":case"sign_letter":case"lodge":{const n=new it(us(),e);if(n.scale.set(i.width,i.height,i.depth),n.position.y=i.height/2,t.add(n),i.type==="lodge"&&i.roofColor){const s=new Vt({color:i.roofColor,flatShading:!0}),r=new it(d_(),s);r.scale.set(i.width*1.1,i.height*.5,i.depth*1.1),r.position.y=i.height+i.height*.25,t.add(r)}break}case"skyscraper":case"curved_tower":{const n=new it(us(),e);n.scale.set(i.width,i.height,i.depth),n.position.y=i.height/2,t.add(n);const s=new Vt({color:8956620,transparent:!0,opacity:.4});for(let r=0;r<5;r++){const a=new it(us(),s),o=i.height*.15+i.height*.7*r/5;a.scale.set(i.width+.5,i.height*.08,i.depth+.5),a.position.y=o,t.add(a)}break}case"tower":{const n=new it(zs(),e);n.scale.set(i.width,i.height,i.depth),n.position.y=i.height/2,t.add(n);const s=new Vt({color:11184810}),r=new it(zs(),s);r.scale.set(i.width*2,2,i.depth*2),r.position.y=i.height,t.add(r);break}case"water_tower":{const n=new Vt({color:8947848});for(let r=0;r<4;r++){const a=new it(zs(),n),o=r/4*Math.PI*2;a.scale.set(1,i.height*.7,1),a.position.set(Math.cos(o)*3,i.height*.35,Math.sin(o)*3),t.add(a)}const s=new it(ih(),e);s.scale.set(i.width,i.width*.6,i.depth),s.position.y=i.height*.75,t.add(s);break}case"pyramid":{const n=new tn(.707,1,4);n.rotateY(Math.PI/4);const s=new it(n,e);s.scale.set(i.width,i.height,i.depth),s.position.y=i.height/2,t.add(s);const r=new ze({color:16777096,transparent:!0,opacity:.15}),a=new it(zs(),r);a.scale.set(3,500,3),a.position.y=i.height+250,t.add(a);break}case"dome":{const n=new it(ih(),e);n.scale.set(i.width,i.height,i.depth),n.position.y=i.height/2,t.add(n);break}case"hangar":{const n=new it(us(),e);n.scale.set(i.width,i.height,i.depth),n.position.y=i.height/2,t.add(n);const s=new Vt({color:i.color,flatShading:!0}),r=new it(zs(),s);r.scale.set(i.width,i.depth,i.width*.3),r.rotation.z=Math.PI/2,r.position.y=i.height,t.add(r);break}case"stadium":{const n=new Vt({color:i.color,flatShading:!0}),s=32,r=i.width/2,a=i.depth/2,o=15;for(let l=0;l<s;l++){const c=l/s*Math.PI*2,h=Math.cos(c)*r,u=Math.sin(c)*a,d=new it(us(),n);d.scale.set(o,i.height,o),d.position.set(h,i.height/2,u),d.lookAt(0,i.height/2,0),t.add(d)}break}default:{const n=new it(us(),e);n.scale.set(i.width,i.height||.5,i.depth),n.position.y=(i.height||.5)/2,t.add(n);break}}return t.position.set(i.offsetX||0,0,i.offsetZ||0),t.traverse(n=>{n.layers.set(0)}),t}class p_{constructor(t,e){this.viewer=t,this.scene=e,this.landmarkGroups=[],this.initialized=!1,this.init()}init(){for(const t of u_){const e=new Ie;e.visible=!1;for(const n of t.structures){const s=f_(n);e.add(s)}e.traverse(n=>{n.layers.set(0)}),this.scene.add(e),this.landmarkGroups.push({group:e,landmark:t,visible:!1})}this.initialized=!0}update(t,e){if(!this.initialized)return;const n=e.lon,s=e.lat,a=e.alt*.3048,o=111320,l=111320*Math.cos(Se.degToRad(s));for(const c of this.landmarkGroups){const h=c.landmark,u=(h.lon-n)*l,d=(h.lat-s)*o,f=Math.sqrt(u*u+d*d),g=Math.max(5e3,a*8),x=f<g;if(c.group.visible=x,x){const m=h.elevation-a;c.group.position.set(u,m,-d);const p=f>3e3?1+(f-3e3)/2e4:1;c.group.scale.setScalar(p)}}}dispose(){for(const t of this.landmarkGroups)this.scene.remove(t.group),t.group.traverse(e=>{e.geometry&&e.geometry.dispose(),e.material&&e.material.dispose()});this.landmarkGroups=[]}}const m_=[{name:"Los Angeles",lon:-118.2437,lat:34.0522,elevation:90,radius:5e3,density:.7,minHeight:5,maxHeight:280,downtownRadius:1500,style:"modern",gridSize:30},{name:"Downtown LA",lon:-118.2468,lat:34.0407,elevation:90,radius:1200,density:.9,minHeight:30,maxHeight:310,downtownRadius:600,style:"modern",gridSize:25},{name:"Las Vegas (City)",lon:-115.1398,lat:36.1699,elevation:610,radius:4e3,density:.6,minHeight:5,maxHeight:100,downtownRadius:1e3,style:"modern",gridSize:30},{name:"San Diego",lon:-117.1611,lat:32.7157,elevation:20,radius:3500,density:.65,minHeight:5,maxHeight:150,downtownRadius:800,style:"modern",gridSize:28},{name:"Phoenix",lon:-112.074,lat:33.4484,elevation:340,radius:5e3,density:.5,minHeight:5,maxHeight:130,downtownRadius:1e3,style:"modern",gridSize:35},{name:"Long Beach",lon:-118.1937,lat:33.7701,elevation:10,radius:2e3,density:.6,minHeight:5,maxHeight:90,downtownRadius:500,style:"modern",gridSize:28},{name:"Riverside",lon:-117.3755,lat:33.9806,elevation:260,radius:1800,density:.45,minHeight:5,maxHeight:50,downtownRadius:400,style:"suburban",gridSize:35},{name:"San Bernardino",lon:-117.2898,lat:34.1083,elevation:330,radius:1500,density:.4,minHeight:5,maxHeight:40,downtownRadius:400,style:"suburban",gridSize:35},{name:"Bakersfield",lon:-119.0187,lat:35.3733,elevation:120,radius:2e3,density:.4,minHeight:4,maxHeight:40,downtownRadius:500,style:"suburban",gridSize:35},{name:"Palm Springs",lon:-116.5453,lat:33.8303,elevation:150,radius:1200,density:.35,minHeight:4,maxHeight:30,downtownRadius:300,style:"resort",gridSize:40},{name:"Santa Barbara",lon:-119.6982,lat:34.4208,elevation:15,radius:1500,density:.5,minHeight:4,maxHeight:30,downtownRadius:400,style:"spanish",gridSize:30},{name:"Pasadena",lon:-118.1445,lat:34.1478,elevation:260,radius:1200,density:.5,minHeight:5,maxHeight:50,downtownRadius:400,style:"modern",gridSize:30},{name:"Glendale",lon:-118.2551,lat:34.1425,elevation:180,radius:1e3,density:.55,minHeight:5,maxHeight:70,downtownRadius:400,style:"modern",gridSize:28},{name:"Burbank",lon:-118.309,lat:34.1808,elevation:180,radius:1e3,density:.5,minHeight:5,maxHeight:50,downtownRadius:400,style:"modern",gridSize:30},{name:"Tucson",lon:-110.9747,lat:32.2226,elevation:730,radius:2500,density:.4,minHeight:4,maxHeight:60,downtownRadius:600,style:"desert",gridSize:35},{name:"Henderson",lon:-114.9817,lat:36.0395,elevation:590,radius:1500,density:.4,minHeight:4,maxHeight:30,downtownRadius:400,style:"suburban",gridSize:35},{name:"Anaheim",lon:-117.9145,lat:33.8366,elevation:50,radius:1500,density:.55,minHeight:5,maxHeight:50,downtownRadius:500,style:"modern",gridSize:30},{name:"Irvine",lon:-117.8265,lat:33.6846,elevation:25,radius:1500,density:.5,minHeight:5,maxHeight:50,downtownRadius:400,style:"modern",gridSize:30},{name:"Oxnard",lon:-119.1771,lat:34.1975,elevation:15,radius:1e3,density:.4,minHeight:4,maxHeight:25,downtownRadius:300,style:"suburban",gridSize:35},{name:"Fresno",lon:-119.7871,lat:36.7378,elevation:93,radius:2e3,density:.45,minHeight:4,maxHeight:50,downtownRadius:500,style:"suburban",gridSize:35}],sh={modern:[8952234,6715306,10070715,11189196,5596791,7833753,4478310,12307677],suburban:[14535850,13417369,12298888,15654331,13154454,12562317],resort:[16115404,15259061,16772560,15785664,14732464],spanish:[15255712,13936757,15784120,13408614,12290133],desert:[13808780,13151615,12560514,13940886,13411952]};function Rn(i,t){let e=i*73856093^t*19349663;return e=(e>>16^e)*73244475,e=(e>>16^e)*73244475,e=e>>16^e,(e&2147483647)/2147483647}const ds=5e3;class g_{constructor(t,e){this.viewer=t,this.scene=e,this.buildingInstances=null,this.windowInstances=null,this.rooftopInstances=null,this.generatedCities=new Map,this.activeCities=[],this.lastUpdateTime=0,this.initialized=!1,this.init()}init(){const t=new me(1,1,1);t.translate(0,.5,0);const e=new Vt({color:8952234,flatShading:!0});this.buildingInstances=new yi(t,e,ds),this.buildingInstances.count=0,this.buildingInstances.frustumCulled=!1,this.buildingInstances.layers.set(0),this.scene.add(this.buildingInstances);const n=new me(1,1,1);n.translate(0,.5,0);const s=new ze({color:16772778,transparent:!0,opacity:.35});this.windowInstances=new yi(n,s,ds),this.windowInstances.count=0,this.windowInstances.frustumCulled=!1,this.windowInstances.layers.set(0),this.scene.add(this.windowInstances);const r=new me(1,1,1);r.translate(0,.5,0);const a=new Vt({color:6710886,flatShading:!0});this.rooftopInstances=new yi(r,a,2e3),this.rooftopInstances.count=0,this.rooftopInstances.frustumCulled=!1,this.rooftopInstances.layers.set(0),this.scene.add(this.rooftopInstances);for(const o of m_)this.generateCity(o);this.initialized=!0}generateCity(t){const e=[],n=Math.ceil(t.radius/t.gridSize),s=sh[t.style]||sh.modern;for(let r=-n;r<=n;r++)for(let a=-n;a<=n;a++){const o=r*t.gridSize,l=a*t.gridSize,c=Math.sqrt(o*o+l*l);if(c>t.radius)continue;const h=Rn(r+t.lon*1e4,a+t.lat*1e4);if(h>t.density)continue;const u=t.style==="modern"?4:5;if(r%u===0||a%u===0)continue;1-Math.min(1,c/t.radius);const d=c<t.downtownRadius?1-c/t.downtownRadius*.5:.3*(1-(c-t.downtownRadius)/(t.radius-t.downtownRadius)),f=Rn(r*200+t.lon*5e3,a*200+t.lat*5e3),g=t.minHeight+(t.maxHeight-t.minHeight)*d*f,x=Math.max(t.minHeight,g),m=Rn(r*300,a*300),p=t.gridSize*.4+m*t.gridSize*.4,w=t.gridSize*.4+Rn(r*400,a*400)*t.gridSize*.4,b=Math.floor(Rn(r*500,a*500)*s.length)%s.length,M=x>30,y=x>80&&Rn(r*700,a*700)>.6,T=Math.max(1,Math.floor(x/4)),C=x>60&&Rn(r*800,a*800)>.5;e.push({x:o+(h-.5)*t.gridSize*.3,z:l+(Rn(r*600,a*600)-.5)*t.gridSize*.3,width:p,depth:w,height:x,color:s[b],hasRooftopDetail:M,hasAntenna:y,windowRows:T,hasSetback:C,setbackHeight:C?x*(.6+Rn(r*900,a*900)*.3):0,setbackInset:C?.7:1})}this.generatedCities.set(t.name,{city:t,buildings:e})}update(t,e){if(!this.initialized)return;const n=Date.now();if(n-this.lastUpdateTime<300)return;this.lastUpdateTime=n;const s=e.lon,r=e.lat,o=e.alt*.3048,l=111320,c=111320*Math.cos(Se.degToRad(r)),h=Math.max(8e3,o*10),u=new Qt,d=new D,f=new qe,g=new D,x=new Bt;let m=0,p=0,w=0;for(const[b,{city:M,buildings:y}]of this.generatedCities){const T=(M.lon-s)*c,C=(M.lat-r)*l;if(Math.sqrt(T*T+C*C)>h+M.radius)continue;const v=M.elevation-o;for(const S of y){if(m>=ds)break;const P=T+S.x,I=-C-S.z,F=Math.sqrt(P*P+I*I);if(F>h)continue;let B=S.height;if(F>h*.7&&B<20)continue;d.set(P,v,I),g.set(S.width,B,S.depth),u.compose(d,f,g),this.buildingInstances.setMatrixAt(m,u),x.setHex(S.color);const N=.85+Rn(Math.floor(S.x*7),Math.floor(S.z*7))*.3;if(x.multiplyScalar(N),this.buildingInstances.setColorAt(m,x),F<h*.5&&p<ds&&B>10){const H=B*.8;d.set(P,v+B*.1,I),g.set(S.width+.3,H,S.depth+.3),u.compose(d,f,g),this.windowInstances.setMatrixAt(p,u);const z=Rn(Math.floor(S.x*3),Math.floor(S.z*3))>.5?16772778:11197951;x.setHex(z),this.windowInstances.setColorAt(p,x),p++}if(F<h*.3&&w<2e3&&S.hasRooftopDetail&&(d.set(P+S.width*.2,v+B,I),g.set(S.width*.3,3,S.depth*.3),u.compose(d,f,g),this.rooftopInstances.setMatrixAt(w,u),x.setHex(5592405),this.rooftopInstances.setColorAt(w,x),w++,S.hasAntenna&&w<2e3&&(d.set(P,v+B,I),g.set(.5,B*.15,.5),u.compose(d,f,g),this.rooftopInstances.setMatrixAt(w,u),x.setHex(13369344),this.rooftopInstances.setColorAt(w,x),w++)),S.hasSetback&&m<ds-1){m++;const H=B-S.setbackHeight;d.set(P,v+S.setbackHeight,I),g.set(S.width*S.setbackInset,H,S.depth*S.setbackInset),u.compose(d,f,g),this.buildingInstances.setMatrixAt(m,u),x.setHex(S.color),x.multiplyScalar(N*1.1),this.buildingInstances.setColorAt(m,x)}m++}if(m>=ds)break}this.buildingInstances.count=m,this.windowInstances.count=p,this.rooftopInstances.count=w,m>0&&(this.buildingInstances.instanceMatrix.needsUpdate=!0,this.buildingInstances.instanceColor&&(this.buildingInstances.instanceColor.needsUpdate=!0)),p>0&&(this.windowInstances.instanceMatrix.needsUpdate=!0,this.windowInstances.instanceColor&&(this.windowInstances.instanceColor.needsUpdate=!0)),w>0&&(this.rooftopInstances.instanceMatrix.needsUpdate=!0,this.rooftopInstances.instanceColor&&(this.rooftopInstances.instanceColor.needsUpdate=!0))}dispose(){[this.buildingInstances,this.windowInstances,this.rooftopInstances].forEach(t=>{t&&(this.scene.remove(t),t.dispose())})}}const x_=[{name:"I-15 (LA to Vegas)",lanes:4,vehicleDensity:.8,waypoints:[{lon:-118.26,lat:34.05},{lon:-117.91,lat:34.13},{lon:-117.39,lat:34.17},{lon:-117.29,lat:34.38},{lon:-117,lat:34.83},{lon:-116.17,lat:35.26},{lon:-115.55,lat:35.6},{lon:-115.17,lat:36.08},{lon:-115.14,lat:36.17}]},{name:"I-10 (LA to Phoenix)",lanes:4,vehicleDensity:.7,waypoints:[{lon:-118.24,lat:34.04},{lon:-117.88,lat:34},{lon:-117.38,lat:33.98},{lon:-116.97,lat:33.93},{lon:-116.54,lat:33.83},{lon:-115.5,lat:33.72},{lon:-114.57,lat:33.42},{lon:-113.5,lat:33.45},{lon:-112.07,lat:33.45}]},{name:"I-5 (LA to Bakersfield)",lanes:3,vehicleDensity:.6,waypoints:[{lon:-118.24,lat:34.05},{lon:-118.38,lat:34.19},{lon:-118.53,lat:34.39},{lon:-118.73,lat:34.74},{lon:-118.94,lat:34.97},{lon:-119.02,lat:35.37}]},{name:"SR-18/138 (Big Bear Highway)",lanes:1,vehicleDensity:.3,waypoints:[{lon:-117.29,lat:34.25},{lon:-117.09,lat:34.25},{lon:-116.94,lat:34.24},{lon:-116.86,lat:34.24},{lon:-116.78,lat:34.26}]},{name:"I-405 (LA)",lanes:5,vehicleDensity:.9,waypoints:[{lon:-118.37,lat:33.79},{lon:-118.39,lat:33.94},{lon:-118.43,lat:34.02},{lon:-118.47,lat:34.08},{lon:-118.49,lat:34.17},{lon:-118.47,lat:34.23}]},{name:"US-95 (Vegas to NV)",lanes:2,vehicleDensity:.4,waypoints:[{lon:-115.14,lat:36.17},{lon:-115.12,lat:36.3},{lon:-115.14,lat:36.5},{lon:-115.32,lat:36.78}]},{name:"SR-62 (29 Palms Hwy)",lanes:1,vehicleDensity:.2,waypoints:[{lon:-116.54,lat:34.05},{lon:-116.28,lat:34.07},{lon:-116.05,lat:34.14},{lon:-115.75,lat:34.25}]}],__=[{name:"Big Bear Lake",centerLon:-116.905,centerLat:34.244,radiusM:4e3,count:8,elevation:2060},{name:"Lake Arrowhead",centerLon:-117.189,centerLat:34.258,radiusM:800,count:4,elevation:1572},{name:"Silverwood Lake",centerLon:-117.333,centerLat:34.294,radiusM:1200,count:3,elevation:1050},{name:"San Diego Bay",centerLon:-117.175,centerLat:32.685,radiusM:3e3,count:12,elevation:0},{name:"Long Beach Harbor",centerLon:-118.19,centerLat:33.74,radiusM:4e3,count:15,elevation:0},{name:"Lake Mead (edge)",centerLon:-114.78,centerLat:36.02,radiusM:5e3,count:6,elevation:372}],v_=[{name:"LAX Approach",startLon:-119.5,startLat:33.8,endLon:-118.41,endLat:33.94,altitude:3e3,count:3,speed:130},{name:"LAX Departure N",startLon:-118.41,startLat:33.94,endLon:-118.8,endLat:34.8,altitude:8e3,count:2,speed:200},{name:"Vegas Approach S",startLon:-115.5,startLat:35.5,endLon:-115.15,endLat:36.08,altitude:4e3,count:2,speed:140},{name:"Phoenix Route",startLon:-118,startLat:34,endLon:-112,endLat:33.5,altitude:11e3,count:2,speed:250},{name:"SF-SD Corridor",startLon:-118.5,startLat:35.5,endLon:-117.2,endLat:32.7,altitude:1e4,count:2,speed:240},{name:"Military (Edwards)",startLon:-117.9,startLat:34.9,endLon:-116.7,endLat:35.3,altitude:5e3,count:1,speed:300},{name:"SoCal Helicopters",startLon:-118.3,startLat:34,endLon:-117.8,endLat:34.1,altitude:500,count:3,speed:60}];function Je(i,t){let e=i*73856093^t*19349663;return e=(e>>16^e)*73244475,e=(e>>16^e)*73244475,e=e>>16^e,(e&2147483647)/2147483647}const eo=800,no=80,io=20;class M_{constructor(t,e){this.viewer=t,this.scene=e,this.vehicleInstances=null,this.boatInstances=null,this.aircraftInstances=null,this.vehicles=[],this.boats=[],this.aircraft=[],this.lastUpdateTime=0,this.time=0,this.initialized=!1,this.init()}init(){const t=new me(1,1,1);t.translate(0,.5,0);const e=new Vt({color:13421772,flatShading:!0});this.vehicleInstances=new yi(t,e,eo),this.vehicleInstances.count=0,this.vehicleInstances.frustumCulled=!1,this.vehicleInstances.layers.set(0),this.scene.add(this.vehicleInstances);const n=new me(1,1,1);n.translate(0,.5,0);const s=new Vt({color:16777215,flatShading:!0});this.boatInstances=new yi(n,s,no),this.boatInstances.count=0,this.boatInstances.frustumCulled=!1,this.boatInstances.layers.set(0),this.scene.add(this.boatInstances);const r=new me(1,1,1);r.translate(0,.5,0);const a=new Vt({color:15658734,flatShading:!0});this.aircraftInstances=new yi(r,a,io),this.aircraftInstances.count=0,this.aircraftInstances.frustumCulled=!1,this.aircraftInstances.layers.set(0),this.scene.add(this.aircraftInstances),this.spawnVehicles(),this.spawnBoats(),this.spawnAircraft(),this.initialized=!0}spawnVehicles(){for(const t of x_){const e=t.waypoints;for(let n=0;n<e.length-1;n++){const s=e[n],r=e[n+1],a=Math.sqrt((r.lon-s.lon)**2+(r.lat-s.lat)**2),o=Math.floor(a*500*t.vehicleDensity*t.lanes);for(let l=0;l<o&&!(this.vehicles.length>=eo);l++){const c=Je(n*100+l,this.vehicles.length),h=s.lon+(r.lon-s.lon)*c,u=s.lat+(r.lat-s.lat)*c,f=(Math.floor(Je(l*3,n*7)*t.lanes)-t.lanes/2)*3e-5,g=Math.atan2(r.lon-s.lon,r.lat-s.lat),x=Math.cos(g)*f,m=-Math.sin(g)*f,p=25+Je(l*5,n*3)*15,w=Je(l*9,n*11)<.15,y=w?[16777215,14540253,4473924,16763904,26316]:[13369344,17578,3355443,16777215,8947848,13421772,17408,2236962,11167232,6684672],T=y[Math.floor(Je(l*13,n*17)*y.length)];this.vehicles.push({lon:h+x,lat:u+m,speed:w?p*.7:p,heading:g,segIdx:n,segT:c,highway:t,isTruck:w,color:T,width:w?2.5:1.8,height:w?4:1.5,length:w?12:4.5,direction:Je(l*19,n*23)>.5?1:-1})}}}}spawnBoats(){for(const t of __)for(let e=0;e<t.count&&!(this.boats.length>=no);e++){const n=Je(e*7,this.boats.length*13)*Math.PI*2,s=Je(e*11,this.boats.length*17)*.7,r=111320,a=111320*Math.cos(t.centerLat*Math.PI/180),o=Je(e*23,this.boats.length*29)<.2,l=!o&&Je(e*31,this.boats.length*37)<.3;this.boats.push({lon:t.centerLon+Math.cos(n)*s*t.radiusM/a,lat:t.centerLat+Math.sin(n)*s*t.radiusM/r,elevation:t.elevation,speed:o?3:l?2:5,heading:Je(e*41,this.boats.length*43)*Math.PI*2,turnRate:(Je(e*47,this.boats.length*53)-.5)*.3,isLarge:o,isSailboat:l,width:o?15:l?3:4,height:o?8:l?6:2,length:o?40:l?8:6,color:o?3359829:l?16777215:14540253,area:t})}}spawnAircraft(){for(const t of v_)for(let e=0;e<t.count&&!(this.aircraft.length>=io);e++){const n=Je(e*7,this.aircraft.length*11),s=t.startLon+(t.endLon-t.startLon)*n,r=t.startLat+(t.endLat-t.startLat)*n,a=t.altitude<1e3,o=t.speed>250;this.aircraft.push({lon:s,lat:r,altitude:t.altitude+(Je(e*13,this.aircraft.length*17)-.5)*500,speed:t.speed+(Je(e*19,this.aircraft.length*23)-.5)*20,heading:Math.atan2(t.endLon-t.startLon,t.endLat-t.startLat),corridor:t,t:n,direction:1,isHelicopter:a,isJet:o,width:a?8:o?12:35,height:a?4:o?5:12,length:a?12:o?15:60,color:a?4473924:o?8947848:16448250})}}update(t,e){if(!this.initialized)return;this.time+=t;const n=e.lon,s=e.lat,a=e.alt*.3048,o=111320,l=111320*Math.cos(Se.degToRad(s)),c=new Qt,h=new D,u=new qe,d=new D,f=new Bt,g=new Ne,x=Math.max(3e3,a*5);let m=0;for(const y of this.vehicles){const T=y.highway.waypoints,C=T[y.segIdx],L=T[y.segIdx+1];if(!C||!L)continue;y.segT+=y.direction*y.speed*t/(111320*Math.sqrt((L.lon-C.lon)**2+(L.lat-C.lat)**2)),y.segT>1?(y.segT=0,y.segIdx=Math.min(y.segIdx+1,T.length-2),y.segIdx>=T.length-2&&(y.segIdx=0,y.direction=1)):y.segT<0&&(y.segT=1,y.segIdx=Math.max(y.segIdx-1,0),y.segIdx<=0&&(y.segIdx=T.length-2,y.direction=-1));const v=T[y.segIdx],S=T[y.segIdx+1];if(!v||!S)continue;y.lon=v.lon+(S.lon-v.lon)*y.segT,y.lat=v.lat+(S.lat-v.lat)*y.segT;const P=(y.lon-n)*l,I=(y.lat-s)*o;if(Math.sqrt(P*P+I*I)>x||m>=eo)continue;const B=-a;h.set(P,B,-I),g.set(0,y.heading,0),u.setFromEuler(g),d.set(y.width,y.height,y.length),c.compose(h,u,d),this.vehicleInstances.setMatrixAt(m,c),f.setHex(y.color),this.vehicleInstances.setColorAt(m,f),m++}this.vehicleInstances.count=m,m>0&&(this.vehicleInstances.instanceMatrix.needsUpdate=!0,this.vehicleInstances.instanceColor&&(this.vehicleInstances.instanceColor.needsUpdate=!0));const p=Math.max(5e3,a*6);let w=0;for(const y of this.boats){y.heading+=y.turnRate*t;const T=111320*Math.cos(y.lat*Math.PI/180);y.lon+=Math.sin(y.heading)*y.speed*t/T,y.lat+=Math.cos(y.heading)*y.speed*t/o;const C=(y.lon-y.area.centerLon)*T,L=(y.lat-y.area.centerLat)*o;if(Math.sqrt(C*C+L*L)>y.area.radiusM*.8){const N=Math.atan2(y.area.centerLon-y.lon,y.area.centerLat-y.lat);y.heading+=(N-y.heading)*t*2}const S=(y.lon-n)*l,P=(y.lat-s)*o;if(Math.sqrt(S*S+P*P)>p||w>=no)continue;const F=y.elevation-a,B=Math.sin(this.time*1.5+w*2.3)*.3;h.set(S,F+B,-P),g.set(0,y.heading,Math.sin(this.time*2+w)*.05),u.setFromEuler(g),d.set(y.width,y.height,y.length),c.compose(h,u,d),this.boatInstances.setMatrixAt(w,c),f.setHex(y.color),this.boatInstances.setColorAt(w,f),w++}this.boatInstances.count=w,w>0&&(this.boatInstances.instanceMatrix.needsUpdate=!0,this.boatInstances.instanceColor&&(this.boatInstances.instanceColor.needsUpdate=!0));const b=Math.max(15e3,a*8);let M=0;for(const y of this.aircraft){const T=y.corridor;y.t+=y.direction*y.speed*t/(111320*Math.sqrt((T.endLon-T.startLon)**2+(T.endLat-T.startLat)**2)),y.t>1&&(y.t=1,y.direction=-1),y.t<0&&(y.t=0,y.direction=1),y.lon=T.startLon+(T.endLon-T.startLon)*y.t,y.lat=T.startLat+(T.endLat-T.startLat)*y.t;const C=(y.lon-n)*l,L=(y.lat-s)*o,v=y.altitude-a;if(Math.sqrt(C*C+L*L+v*v)>b||M>=io)continue;h.set(C,v,-L);const P=y.direction>0?y.heading:y.heading+Math.PI;g.set(0,P,0),u.setFromEuler(g),d.set(y.width,y.height,y.length),c.compose(h,u,d),this.aircraftInstances.setMatrixAt(M,c),f.setHex(y.color),this.aircraftInstances.setColorAt(M,f),M++}this.aircraftInstances.count=M,M>0&&(this.aircraftInstances.instanceMatrix.needsUpdate=!0,this.aircraftInstances.instanceColor&&(this.aircraftInstances.instanceColor.needsUpdate=!0))}dispose(){[this.vehicleInstances,this.boatInstances,this.aircraftInstances].forEach(t=>{t&&(this.scene.remove(t),t.dispose())})}}const ye={lon:-116.9155,lat:34.2433,elevation:2070,treeHeight:30,heading:210};class y_{constructor(t){this.scene=t,this.nestGroup=new Ie,this.jackieGroup=null,this.chicksGroup=null,this.time=0,this.buildNest(),this.scene.add(this.nestGroup),this.nestGroup.visible=!1,this.nestGroup.traverse(e=>{e.layers.set(0)})}buildNest(){const t=new Vt({color:6044190,flatShading:!0}),e=new Vt({color:4861461,flatShading:!0}),n=new Ye(.3,.6,ye.treeHeight,8),s=new it(n,t);s.position.y=ye.treeHeight/2,this.nestGroup.add(s);for(let at=0;at<6;at++){const R=new ea(.35+(1-at/6)*.15,.04,4,8),bt=new it(R,e);bt.position.y=3+at*4.5,bt.rotation.x=Math.PI/2,this.nestGroup.add(bt)}const r=new Vt({color:7029286,flatShading:!0}),a=[{y:22,angle:0,length:6,tilt:.6},{y:24,angle:Math.PI*.6,length:7,tilt:.5},{y:26,angle:Math.PI*1.2,length:5.5,tilt:.55},{y:28,angle:Math.PI*.3,length:5,tilt:.4},{y:28,angle:Math.PI*1.5,length:4.5,tilt:.45},{y:29,angle:Math.PI*.8,length:3,tilt:.2},{y:29,angle:Math.PI*1.8,length:3.5,tilt:.15}];for(const at of a){const R=new Ye(.05,.15,at.length,5);R.translate(0,at.length/2,0);const bt=new it(R,r);bt.position.y=at.y,bt.rotation.z=at.tilt,bt.rotation.y=at.angle,this.nestGroup.add(bt)}const o=new Vt({color:2972199,flatShading:!0}),l=new Vt({color:1789211,flatShading:!0}),c=[{x:0,y:32,z:0,r:3.5},{x:2,y:30,z:1,r:2.5},{x:-2.5,y:29,z:-1,r:2.8},{x:1,y:28,z:-2,r:2.2},{x:-1,y:31,z:2,r:2.5},{x:3,y:27,z:0,r:2},{x:-3,y:26,z:1,r:2.3},{x:0,y:34,z:0,r:2}];for(const at of c){const R=new ne(at.r,5,4);R.scale(1,.6,1);const bt=at.y>30?o:l,_t=new it(R,bt);_t.position.set(at.x,at.y,at.z),this.nestGroup.add(_t)}const h=new Vt({color:7035450,flatShading:!0}),u=new Vt({color:4864544,flatShading:!0}),d=new Ye(1,1.2,.6,12),f=new it(d,h);f.position.set(.5,ye.treeHeight,.3),this.nestGroup.add(f);const g=new ea(1,.15,6,16),x=new it(g,u);x.position.set(.5,ye.treeHeight+.3,.3),x.rotation.x=Math.PI/2,this.nestGroup.add(x);const m=new Vt({color:8022602,flatShading:!0});for(let at=0;at<20;at++){const R=at/20*Math.PI*2,bt=.9+Math.random()*.4,_t=new Ye(.02,.02,.3+Math.random()*.5,3),Ut=new it(_t,m);Ut.position.set(.5+Math.cos(R)*bt,ye.treeHeight+.2,.3+Math.sin(R)*bt),Ut.rotation.z=(Math.random()-.5)*.8,Ut.rotation.x=(Math.random()-.5)*.8,this.nestGroup.add(Ut)}const p=new Vt({color:9075290,flatShading:!0}),w=new Ye(.7,.8,.15,10),b=new it(w,p);b.position.set(.5,ye.treeHeight+.1,.3),this.nestGroup.add(b),this.jackieGroup=new Ie,this.jackieGroup.position.set(.5,ye.treeHeight+.4,.3);const M=new Vt({color:2759178,flatShading:!0}),y=new ne(.35,6,5);y.scale(1,.7,1.3);const T=new it(y,M);T.position.y=.2,this.jackieGroup.add(T);const C=new Vt({color:16448250,flatShading:!0}),L=new ne(.15,6,5),v=new it(L,C);v.position.set(0,.45,.25),this.jackieGroup.add(v);const S=new Vt({color:16763904,flatShading:!0}),P=new tn(.04,.12,4),I=new it(P,S);I.position.set(0,.42,.38),I.rotation.x=Math.PI/2,this.jackieGroup.add(I);const F=new ze({color:1118481}),B=new ne(.02,4,4),N=new it(B,F);N.position.set(-.06,.47,.33),this.jackieGroup.add(N);const H=new it(B,F);H.position.set(.06,.47,.33),this.jackieGroup.add(H);const z=new Vt({color:15658734,flatShading:!0}),$=new me(.15,.04,.3),st=new it($,z);st.position.set(0,.15,-.35),this.jackieGroup.add(st);const Z=new Vt({color:1706496,flatShading:!0}),j=new me(.05,.2,.5),Ct=new it(j,Z);Ct.position.set(-.25,.25,-.05),Ct.rotation.z=.2,this.jackieGroup.add(Ct);const It=new it(j,Z);It.position.set(.25,.25,-.05),It.rotation.z=-.2,this.jackieGroup.add(It),this.nestGroup.add(this.jackieGroup),this.chicksGroup=new Ie,this.chicksGroup.position.set(.5,ye.treeHeight+.3,.3);const $t=new Vt({color:16117984,flatShading:!0}),te=new ne(.06,6,5);te.scale(1,.7,1.2);const Y=new it(te,$t);Y.position.set(-.15,.05,.1),this.chicksGroup.add(Y);const Q=new it(te,$t);Q.position.set(.1,.05,-.05),this.chicksGroup.add(Q);const xt=new Vt({color:13421772,flatShading:!0}),Ft=new ne(.08,5,4),St=new it(Ft,xt);St.position.set(.2,.1,.15),this.chicksGroup.add(St);const jt=new ne(.05,5,4),ae=new it(jt,xt);ae.position.set(.2,.2,.2),this.chicksGroup.add(ae);const Wt=new it(B,F);Wt.position.set(.17,.22,.24),this.chicksGroup.add(Wt);const K=new it(B,F);K.position.set(.23,.22,.24),this.chicksGroup.add(K);const rt=new tn(.015,.04,3),tt=new it(rt,new Vt({color:3355443}));tt.position.set(.2,.21,.26),tt.rotation.x=Math.PI/2,this.chicksGroup.add(tt),this.nestGroup.add(this.chicksGroup)}update(t,e){this.time+=t;const n=e.lon,s=e.lat,a=e.alt*.3048,o=111320,l=111320*Math.cos(Se.degToRad(s)),c=(ye.lon-n)*l,h=(ye.lat-s)*o,u=ye.elevation-a,d=Math.sqrt(c*c+h*h);this.nestGroup.visible=d<2e3,this.nestGroup.visible&&(this.nestGroup.position.set(c,u,-h),this.jackieGroup&&(this.jackieGroup.rotation.y=Math.sin(this.time*.3)*.15,this.jackieGroup.position.y=ye.treeHeight+.4+Math.sin(this.time*.8)*.01),this.chicksGroup&&this.chicksGroup.children.forEach((f,g)=>{g>=2&&(f.position.y+=Math.sin(this.time*2+g)*.001)}))}static getSpawnPosition(){return{lon:ye.lon,lat:ye.lat,alt:(ye.elevation+ye.treeHeight+50)/.3048,heading:ye.heading}}dispose(){this.scene.remove(this.nestGroup),this.nestGroup.traverse(t=>{t.geometry&&t.geometry.dispose(),t.material&&t.material.dispose()})}}const Hs={NIGHT:{start:0,end:5,name:"Night",fogMult:1.5,lightIntensity:.1},DAWN:{start:5,end:7,name:"Dawn",fogMult:1.2,lightIntensity:.4},MORNING:{start:7,end:10,name:"Morning",fogMult:.8,lightIntensity:.8},MIDDAY:{start:10,end:14,name:"Midday",fogMult:.5,lightIntensity:1},AFTERNOON:{start:14,end:17,name:"Afternoon",fogMult:.6,lightIntensity:.9},DUSK:{start:17,end:19,name:"Dusk",fogMult:1,lightIntensity:.4},EVENING:{start:19,end:21,name:"Evening",fogMult:1.3,lightIntensity:.2},LATE_NIGHT:{start:21,end:24,name:"Late Night",fogMult:1.5,lightIntensity:.1}},fs={CLEAR:{name:"Clear",fogDensity:5e-5,visibility:1,windSpeed:5,thermalMult:1},PARTLY_CLOUDY:{name:"Partly Cloudy",fogDensity:1e-4,visibility:.9,windSpeed:10,thermalMult:.8},OVERCAST:{name:"Overcast",fogDensity:3e-4,visibility:.6,windSpeed:15,thermalMult:.3},FOG:{name:"Mountain Fog",fogDensity:.001,visibility:.3,windSpeed:3,thermalMult:.1},HAZE:{name:"Desert Haze",fogDensity:4e-4,visibility:.5,windSpeed:8,thermalMult:.6},STORM:{name:"Thunderstorm",fogDensity:8e-4,visibility:.3,windSpeed:30,thermalMult:2},SNOW:{name:"Snow",fogDensity:6e-4,visibility:.4,windSpeed:20,thermalMult:0},SANTA_ANA:{name:"Santa Ana Winds",fogDensity:2e-4,visibility:.7,windSpeed:50,thermalMult:.5}};function rh(i,t){return i>=11||i<=1?t>=6&&t<=10?Math.random()<.3?"FOG":"PARTLY_CLOUDY":Math.random()<.15?"SNOW":Math.random()<.25?"OVERCAST":Math.random()<.5?"CLEAR":"PARTLY_CLOUDY":i>=2&&i<=4?t>=14&&Math.random()<.2?"STORM":Math.random()<.7?"CLEAR":"PARTLY_CLOUDY":i>=5&&i<=7?t>=14&&t<=18&&Math.random()<.3?"STORM":t>=11&&t<=15&&Math.random()<.3?"HAZE":"CLEAR":Math.random()<.15?"SANTA_ANA":Math.random()<.8?"CLEAR":"PARTLY_CLOUDY"}class S_{constructor(t){this.viewer=t,this.currentDaypart="MIDDAY",this.currentWeather="CLEAR",this.gameHour=12,this.timeScale=1,this.useRealTime=!0,this.weatherChangeTimer=0,this.weatherChangeCooldown=300,this.windDirection=0,this.windSpeed=5,this.targetFogDensity=1e-4,this.currentFogDensity=1e-4,this.initialized=!1,this.init()}init(){this.viewer&&(this.viewer.scene.globe.enableLighting=!0,this.viewer.scene.skyAtmosphere&&(this.viewer.scene.skyAtmosphere.show=!0));const t=new Date;this.updateTimeOfDay(t),this.currentWeather=rh(t.getMonth(),t.getHours()),this.applyWeather(),this.initialized=!0}updateTimeOfDay(t){const e=t.getUTCHours(),n=-8;this.gameHour=(e+n+24)%24+t.getUTCMinutes()/60;for(const[s,r]of Object.entries(Hs))if(this.gameHour>=r.start&&this.gameHour<r.end){this.currentDaypart=s;break}if(this.viewer&&this.viewer.clock){const s=Cesium.JulianDate.fromDate(t);this.viewer.clock.currentTime=s}}applyWeather(){const t=fs[this.currentWeather]||fs.CLEAR,e=Hs[this.currentDaypart]||Hs.MIDDAY;this.viewer&&(this.targetFogDensity=t.fogDensity*e.fogMult,this.windSpeed=t.windSpeed+(Math.random()-.5)*5,this.windDirection=(this.windDirection+(Math.random()-.5)*10)%360)}update(t){if(!(!this.initialized||!this.viewer)&&(this.useRealTime?this.updateTimeOfDay(new Date):this.gameHour=(this.gameHour+t*this.timeScale/3600)%24,this.currentFogDensity+=(this.targetFogDensity-this.currentFogDensity)*t*.5,this.viewer.scene.fog&&(this.viewer.scene.fog.density=this.currentFogDensity),this.weatherChangeTimer+=t,this.weatherChangeTimer>this.weatherChangeCooldown)){this.weatherChangeTimer=0;const n=rh(new Date().getMonth(),Math.floor(this.gameHour));n!==this.currentWeather&&(this.currentWeather=n,this.applyWeather())}}getConditions(){const t=Hs[this.currentDaypart]||Hs.MIDDAY,e=fs[this.currentWeather]||fs.CLEAR,n=Math.floor(this.gameHour),s=Math.floor((this.gameHour-n)*60);return{daypartName:t.name,weatherName:e.name,localTime:`${n.toString().padStart(2,"0")}:${s.toString().padStart(2,"0")} PST`,windSpeed:Math.round(this.windSpeed),windDirection:Math.round(this.windDirection),visibility:e.visibility,thermalMultiplier:e.thermalMult,lightIntensity:t.lightIntensity}}getThermalMultiplier(){return(fs[this.currentWeather]||fs.CLEAR).thermalMult}getWind(){const t=this.windDirection*Math.PI/180;return{x:Math.sin(t)*this.windSpeed,z:Math.cos(t)*this.windSpeed,speed:this.windSpeed,direction:this.windDirection}}}const Hn={lon:-116.9114,lat:34.2439},w_=500,su=w_*1609.34,ru=su/1e3,b_=ru/111.32,E_=ru/(111.32*Math.cos(Hn.lat*Math.PI/180));function T_(i,t){const e=(t-Hn.lat)*Math.PI/180,n=(i-Hn.lon)*Math.PI/180,s=Math.sin(e/2)*Math.sin(e/2)+Math.cos(Hn.lat*Math.PI/180)*Math.cos(t*Math.PI/180)*Math.sin(n/2)*Math.sin(n/2);return 6371e3*(2*Math.atan2(Math.sqrt(s),Math.sqrt(1-s)))}function C_(i,t){return su-T_(i,t)}function A_(i,t){const e=(Hn.lon-i)*Math.PI/180,n=t*Math.PI/180,s=Hn.lat*Math.PI/180,r=Math.sin(e)*Math.cos(s),a=Math.cos(n)*Math.sin(s)-Math.sin(n)*Math.cos(s)*Math.cos(e);return(Math.atan2(r,a)*180/Math.PI+360)%360}function R_(i){if(!i)return null;const t=[],e=128;for(let r=0;r<=e;r++){const a=r/e*Math.PI*2,o=Hn.lat+b_*Math.sin(a),l=Hn.lon+E_*Math.cos(a);t.push(l,o)}const n=i.entities.add({polyline:{positions:Cesium.Cartesian3.fromDegreesArray(t),width:2,material:new Cesium.PolylineDashMaterialProperty({color:Cesium.Color.fromCssColorString("rgba(255, 200, 50, 0.5)"),dashLength:16}),clampToGround:!0}}),s=i.entities.add({position:Cesium.Cartesian3.fromDegrees(Hn.lon,Hn.lat),point:{pixelSize:8,color:Cesium.Color.fromCssColorString("rgba(255, 200, 50, 0.7)"),outlineColor:Cesium.Color.WHITE,outlineWidth:1,disableDepthTestDistance:Number.POSITIVE_INFINITY},label:{text:"THE NEST",font:"12pt sans-serif",style:Cesium.LabelStyle.FILL_AND_OUTLINE,outlineWidth:2,verticalOrigin:Cesium.VerticalOrigin.BOTTOM,pixelOffset:new Cesium.Cartesian2(0,-12),disableDepthTestDistance:Number.POSITIVE_INFINITY,fillColor:Cesium.Color.fromCssColorString("rgba(255, 200, 50, 0.9)")}});return{boundaryEntity:n,centerEntity:s}}const re={MENU:"MENU",PICK_SPAWN:"PICK_SPAWN",TRANSITIONING:"TRANSITIONING",FLYING:"FLYING",PAUSED:"PAUSED",CRASHED:"CRASHED"};let oe=re.MENU,le={graphicsQuality:"medium",antialiasing:!0,fogEffects:!0,mouseSensitivity:.2,showHud:!0,showHorizonLines:!1,soundEnabled:!0,minimapRange:10};function P_(){const i=localStorage.getItem("flightSimSettings");if(i)try{const t=JSON.parse(i);le={...le,...t}}catch(t){console.error("Failed to load settings",t)}au(),ol()}function I_(){localStorage.setItem("flightSimSettings",JSON.stringify(le))}function ol(){document.getElementById("graphicsQuality").value=le.graphicsQuality,document.getElementById("antialiasing").checked=le.antialiasing,document.getElementById("fogEffects").checked=le.fogEffects,document.getElementById("sensitivitySlider").value=le.mouseSensitivity,document.getElementById("sensitivityValue").textContent=le.mouseSensitivity,document.getElementById("showHud").checked=le.showHud,document.getElementById("showHorizonLines").checked=le.showHorizonLines,document.getElementById("soundEnabled").checked=le.soundEnabled,document.getElementById("minimapRange").value=le.minimapRange.toString()}function au(){Le&&Le.setSensitivity(le.mouseSensitivity),Te&&(Te.setMinimapRange(le.minimapRange),Te.setShowHorizonLines(le.showHorizonLines)),Tt&&Tt.listener&&Tt.listener.setMasterVolume(le.soundEnabled?1:0);const i=we();i&&(le.graphicsQuality==="low"?(i.resolutionScale=.5,i.scene.globe.maximumScreenSpaceError=4):le.graphicsQuality==="medium"?(i.resolutionScale=.75,i.scene.globe.maximumScreenSpaceError=2):(i.resolutionScale=1,i.scene.globe.maximumScreenSpaceError=1.3),i.scene.postProcessStages.fxaa.enabled=le.antialiasing,i.scene.fog.enabled=le.fogEffects,i.scene.atmosphere.show=le.fogEffects),[document.getElementById("hud-top-left"),document.getElementById("hud-top-right"),document.getElementById("hud-speed-box"),document.getElementById("hud-alt-box"),document.getElementById("coords"),document.getElementById("minimap-container")].forEach(e=>{e&&(e.style.display=le.showHud?"block":"none")})}let J={lon:ye.lon,lat:ye.lat,alt:(ye.elevation+ye.treeHeight+5)/.3048,heading:ye.heading,pitch:0,roll:0,speed:0,throttle:0,score:0,weaponSystem:null},na=null,ll=0,qr={lon:0,lat:0};const L_=1e4,D_=1e3;let ia=0;const F_=1800;let kr=!1,ou=0,Qe,un,Dn,gn,sa,cl,ra=new Qh,Le=new qx,Te=new Kx,dn,_n,be=new a_,aa=new o_,rr,hl,ul,dl,fl,pl,Ys,N_=null,so=!1,ah=0,ro=0,ao=0;const vi=new D(0,-.8,-2.75);let xi=new D().copy(vi),Bn=new Ne(0,0,0),ps=0,Zr=0,zr=1,ml=!1,lu=null;const cu=document.getElementById("mainMenu"),bs=document.getElementById("pauseMenu"),hu=document.getElementById("crashMenu"),ci=document.getElementById("uiContainer"),Vi=document.getElementById("threeContainer"),Nl=document.getElementById("spawnInstruction"),or=document.getElementById("confirmSpawnBtn");let Ge=null;const Gs=document.getElementById("startBtn"),Gn=document.getElementById("loadingIndicator"),oa=document.getElementById("loadingText"),Ce={audio:!1,model:!1,cesium:!1,globe:!1,failed:!1};function ai(){if(!Gn||!oa||!Gs)return;if(oe===re.FLYING||oe===re.TRANSITIONING){Gn.classList.add("hidden");return}let i="";Ce.audio&&Ce.model&&Ce.cesium&&Ce.globe||(Ce.audio?Ce.model?Ce.cesium?Ce.globe||(i="Loading Globe Surface..."):i="Loading Satellite Imagery...":i="Loading Eagle Model...":i="Loading Audio..."),i?(oa.textContent=i,Gs.disabled=!0,Gs.style.pointerEvents="none",Gn.classList.remove("hidden")):(Gn.classList.add("hidden"),Gs.disabled=!1,Gs.style.pointerEvents="auto")}async function U_(){Tt.init(un);const i=(t,e,n,s)=>Tt.loadSound(t,e,n,s).catch(r=>(console.warn(`Failed to load sound: ${t}`,r),null));await Promise.all([i("boost","./assets/sounds/boost.mp3",!1,.35),i("throttle","./assets/sounds/throttle.mp3",!1,.4),i("explode","./assets/sounds/explode.mp3",!1,.75),i("explosion-1","./assets/sounds/explosion-1.mp3",!1,.8),i("explosion-2","./assets/sounds/explosion-2.mp3",!1,.8),i("explosion-3","./assets/sounds/explosion-3.mp3",!1,.8),i("ambient-crash","./assets/sounds/ambient.mp3",!0,.5),i("weapon-warning","./assets/sounds/weapon-warning-1.mp3",!1,1),i("jet-engine","./assets/sounds/jet-engine.mp3",!0,.5),i("spawn","./assets/sounds/spawn.mp3",!1,.5),i("roll","./assets/sounds/roll.mp3",!0,.75),i("pitch","./assets/sounds/pitch.mp3",!0,.75),i("button-click","./assets/sounds/button-click.mp3",!1,1),i("weapon-switch","./assets/sounds/weapon-switch.mp3",!1,.75),i("button-hover","./assets/sounds/button-hover.mp3",!1,.25),i("zoom-in","./assets/sounds/zoom-in.mp3",!1,.5),i("missile-fire","./assets/sounds/missile-firing-1.mp3",!1,.75),i("m61-firing","./assets/sounds/m61-firing.mp3",!0,.75),i("rwr-tws","./assets/sounds/rwr-tws.mp3",!0,.2),i("rwr-lock","./assets/sounds/rwr-lock.mp3",!1,.2),i("wind","./assets/sounds/wind.mp3",!0,.25),i("terrain-pull-up","./assets/sounds/terrain-pull-up.mp3",!1,.9),i("warning","./assets/sounds/warning.mp3",!1,.6),i("glitch-1","./assets/sounds/glitch-transition-1.mp3",!1,.25),i("glitch-2","./assets/sounds/glitch-transition-2.mp3",!1,.25),i("glitch-3","./assets/sounds/glitch-transition-3.mp3",!1,.25),i("glitch-4","./assets/sounds/glitch-transition-4.mp3",!1,.25)]),Ce.audio=!0,ai(),O_()}function Ul(i=.5){Tt.stopAll(i)}function Ol(){ou=Date.now(),Tt.pauseAll()}function uu(){const i=Date.now()-ou;ia>0&&(ia+=i),Tt.resumeAll()}function O_(){document.addEventListener("mouseover",i=>{const t=i.target.closest("button, .menu-btn, .clickable-ui");t&&!t._hovered&&(Tt.play("button-hover"),t._hovered=!0,t.addEventListener("mouseleave",()=>{t._hovered=!1},{once:!0}))},!0),document.addEventListener("click",i=>{i.target.closest("button, .menu-btn, .clickable-ui, #search-toggle-btn")&&Tt.play("button-click")},!0)}function B_(){cl=new qh,Qe=new Gd,un=new Mn(75,window.innerWidth/window.innerHeight,.1,1e5),Dn=new zx({alpha:!0,antialias:!0}),Dn.setSize(window.innerWidth,window.innerHeight),Dn.setPixelRatio(window.devicePixelRatio),Dn.setClearColor(0,0),Vi.appendChild(Dn.domElement),Vi.classList.add("hidden");const i=new zf(16777215,1);Qe.add(i);const t=new kf(16777215,1);t.position.set(5,10,5),Qe.add(t),i.layers.enable(1),t.layers.enable(1);try{ni.init(Qe,we())}catch{}try{rr=new h_(we(),Qe)}catch(e){console.error("Failed to init tree system",e)}try{hl=new iu(we(),Qe)}catch(e){console.error("Failed to init water system",e)}try{ul=new p_(we(),Qe)}catch(e){console.error("Failed to init landmark system",e)}try{dl=new g_(we(),Qe)}catch(e){console.error("Failed to init city system",e)}try{fl=new M_(we(),Qe)}catch(e){console.error("Failed to init traffic system",e)}try{pl=new y_(Qe)}catch(e){console.error("Failed to init nest system",e)}try{Ys=new S_(we())}catch(e){console.error("Failed to init day/night weather system",e)}U_().catch(e=>{console.error("Failed to init sounds",e)}).finally(()=>{Ce.audio=!0,ai()});try{sa=Zx(),gn=new Ie,gn.add(sa),Qe.add(gn),gn.layers.set(1),gn.traverse(e=>{e.layers.set(1)}),gn.position.copy(vi),gn.scale.set(1.5,1.5,1.5),_n=new e_(we(),Qe,gn),_n.onKill=e=>{const n=e.score||500;J.score+=n;try{Tt.play("glitch-random")}catch{}Te&&Te.showKillNotification(e.name,n)},gn.traverse(e=>{e.layers.set(1)})}catch(e){console.error("Failed to create eagle model or weapon system",e)}Ce.model=!0,ai()}function k_(i){if(oe!==re.FLYING)return;const t=Le.update(),e=ra.update(t,i),n=J.speed;J.speed=e.speed,J.pitch=e.pitch,J.roll=e.roll,J.heading=e.heading,J.throttle=t.throttle,J.yaw=t.yaw,J.isBoosting=e.isBoosting,J.weaponSystem=_n,J.npcs=dn?dn.npcs:[],J.isGliding=e.isGliding,J.isFlapping=e.isFlapping,J.flapStrength=e.flapStrength,J.wingSpread=e.wingSpread,J.inThermal=e.inThermal,J.thermalStrength=e.thermalStrength,J.verticalSpeed=e.verticalSpeed,J.liftForce=e.liftForce,J.isTurbo=e.isTurbo,J.turboWindup=e.turboWindup,J.weatherConditions=Ys?Ys.getConditions():null,_n&&(t.weaponIndex!==-1&&_n.selectWeapon(t.weaponIndex),t.toggleWeapon&&_n.toggleWeapon(),t.fire&&_n.fire(J),t.fireFlare&&_n.fireFlare(J),_n.update(i,J,t));const s=Si(J.lon,J.lat,J.alt,J.heading,J.pitch,J.speed*i);J.lon=s.lon,J.lat=s.lat,J.alt=s.alt;const r=Date.now(),a=eu(J.lon,J.lat,qr.lon,qr.lat);if((r-ll>L_||a>D_)&&(ll=r,qr={lon:J.lon,lat:J.lat},tu(J.lon,J.lat).then(x=>{x&&x!==na&&(na=x,Te.showRegion(x))})),H_(),z_(),aa)try{aa.update(i,J)}catch{}Math.abs(t.roll)>.5||Math.abs(t.yaw)>.5?Tt.isPlaying("roll")||Tt.play("roll",.1):Tt.isPlaying("roll")&&Tt.stop("roll",.1);const o=new Cesium.HeadingPitchRoll(Cesium.Math.toRadians(J.heading),Cesium.Math.toRadians(J.pitch),Cesium.Math.toRadians(J.roll)),l=Cesium.Quaternion.fromHeadingPitchRoll(o),c=new Cesium.HeadingPitchRoll(Cesium.Math.toRadians(t.cameraYaw),Cesium.Math.toRadians(-t.cameraPitch),0),h=Cesium.Quaternion.fromHeadingPitchRoll(c),u=Cesium.Quaternion.multiply(l,h,new Cesium.Quaternion),d=Cesium.HeadingPitchRoll.fromQuaternion(u);if(Gx(J.lon,J.lat,J.alt,Cesium.Math.toDegrees(d.heading),Cesium.Math.toDegrees(d.pitch),Cesium.Math.toDegrees(d.roll)),dn&&dn.update(i,J),rr)try{rr.update(i,J)}catch{}if(hl)try{hl.update(i,J)}catch{}if(ul)try{ul.update(i,J)}catch{}if(dl)try{dl.update(i,J)}catch{}if(fl)try{fl.update(i,J)}catch{}if(pl)try{pl.update(i,J)}catch{}if(Ys)try{Ys.update(i)}catch{}const f=C_(J.lon,J.lat);if(f/1609.34<20){if(f<=0){const x=A_(J.lon,J.lat);J.heading=Se.lerp(J.heading,x,i*2),ra.heading=J.heading}so||(so=!0,Te.showRegion("TERRITORY BOUNDARY - TURN BACK"))}else so=!1;if(Te.update(J,oe===re.FLYING?dn?dn.npcs:[]:[]),gn){const x=(J.speed-n)/i,m=t.isDragging?0:Math.max(-.5,Math.min(1.5,x*.001));let p=vi.z-m,w=0;if(e.isBoosting){ml||(zr=Math.random()>.5?1:-1);const st=e.boostDuration,Z=Math.max(0,Math.min(1,1-e.boostTimeRemaining/st));if(Math.PI*2*e.boostRotations*zr,Z<.2){const j=Z/.2;w=-(j*j)*1.5,ps=0}else if(Z<.8){const j=(Z-.2)/.6;w=-1.5,ps=(j<.5?4*j*j*j:1-Math.pow(-2*j+2,3)/2)*(Math.PI*2*e.boostRotations)*zr}else{const j=(Z-.8)/.2;w=-1.5+j*j*(3-2*j)*.7,ps=Math.PI*2*e.boostRotations*zr}}else ps=0,w=0;ml=e.isBoosting;const b=e.isBoosting?10*i:2*i;Zr+=(w-Zr)*b,p+=Zr;const M=performance.now()*.001,y=Math.sin(M*.8)*.035,T=Math.cos(M*.6)*.025,C=Math.sin(M*.5)*.015,L=Math.cos(M*.4)*.015,v=Math.sin(M*.7)*.025,S=t.isDragging?vi.x:vi.x-t.roll*.6-t.yaw*.12+y,P=t.isDragging?vi.y:vi.y-t.pitch*.1+T;let I=t.isDragging?0:Se.degToRad(-t.roll*15)+v;const F=t.isDragging?0:Se.degToRad(t.pitch*10)+C,B=t.isDragging?0:Se.degToRad(-t.yaw*4)+L,N=e.isBoosting?3*i:5*i;xi.x+=(S-xi.x)*N,xi.y+=(P-xi.y)*N,xi.z+=(p-xi.z)*N,Bn.z+=(I-Bn.z)*N,Bn.x+=(F-Bn.x)*N,Bn.y+=(B-Bn.y)*N;const H=new qe().setFromEuler(new Ne(Se.degToRad(-t.cameraPitch),Se.degToRad(-t.cameraYaw),0,"YXZ"));gn.position.copy(xi);const z=new qe().setFromEuler(new Ne(Bn.x,Bn.y,Bn.z+ps)),$=H.clone().invert().multiply(z);gn.quaternion.copy($)}}function z_(){if(oe!==re.FLYING){Te.setPullUpWarning(!1);return}const i=we();if(!i)return;const t=Cesium.Cartographic.fromDegrees(J.lon,J.lat),e=i.scene.globe.getHeight(t);if(e===void 0)return;const n=J.alt-e,s=Cesium.Math.toRadians(J.pitch),r=J.speed*Math.sin(s);let a=!1;if(J.pitch<-1&&n<450&&(n<150&&(a=!0),r<-20&&(a=!0)),Te.setPullUpWarning(a),a){const o=Date.now();(!kr||o-ia>F_&&!Tt.isPlaying("terrain-pull-up"))&&(Tt.play("terrain-pull-up"),ia=o),kr=!0}else kr&&(Tt.stop("terrain-pull-up",.1),kr=!1)}let oh=0,du=0;function H_(){if(oe!==re.FLYING)return;const i=Date.now();if(i-oh<100||(oh=i,i-du<3e3))return;const t=we();if(!t)return;const e=Cesium.Cartographic.fromDegrees(J.lon,J.lat),n=t.scene.globe.getHeight(e);if(n!==void 0&&J.alt<=n+5){oe=re.CRASHED,be&&be.stop(),ci.classList.add("hidden");const s=document.getElementById("weapons-hud");s&&s.classList.add("hidden"),Vi.classList.add("hidden"),hu.classList.remove("hidden"),Le.isMobile&&Le.setMobileVisible(!1),Te.update(J,[]),Ul(.1),setTimeout(()=>{Tt.play("explode"),Tt.play("ambient-crash")},50)}}function fu(){requestAnimationFrame(fu);const i=cl?cl.getDelta():.016,t=performance.now();if(ro++,t-ao>=1e3){ah=ro*1e3/(t-ao),ro=0,ao=t,Te.updateFPS(ah);const e=document.getElementById("menu-time");e&&(e.textContent=new Date().toISOString().split(".")[0]+"Z")}if(oe===re.FLYING||oe===re.PAUSED||oe===re.TRANSITIONING){const e=we();if(Dn.autoClear=!1,Dn.clear(),e&&e.camera&&e.camera.frustum.fovy){const n=Cesium.Math.toDegrees(e.camera.frustum.fovy);un.fov=n,un.aspect=window.innerWidth/window.innerHeight,un.updateProjectionMatrix()}un.layers.set(0),oe===re.FLYING?k_(i):oe===re.PAUSED&&Te.updatePauseMenu(J,na,dn?dn.npcs:[]),sa&&$x(sa,i,J);try{oe===re.FLYING&&ni.update(i)}catch{}Dn.render(Qe,un),Dn.clearDepth(),un.fov=75,un.updateProjectionMatrix(),un.layers.set(1),Dn.render(Qe,un)}else Vi.classList.add("hidden")}function vn(){document.querySelectorAll(".modal").forEach(i=>i.classList.add("hidden"))}function G_(){document.getElementById("helpBtn").onclick=()=>{vn(),document.getElementById("helpModal").classList.remove("hidden")},document.getElementById("optionsBtn").onclick=()=>{vn(),ol(),document.getElementById("optionsModal").classList.remove("hidden")},document.getElementById("pauseOptionsBtn").onclick=()=>{vn(),ol(),document.getElementById("optionsModal").classList.remove("hidden")},document.getElementById("pauseHelpBtn").onclick=()=>{vn(),document.getElementById("helpModal").classList.remove("hidden")},document.getElementById("creditsBtn").onclick=()=>{vn(),document.getElementById("creditsModal").classList.remove("hidden")},document.getElementById("aboutBtn").onclick=()=>{vn(),document.getElementById("aboutBtnModal").classList.remove("hidden")},document.getElementById("sensitivitySlider").oninput=i=>{document.getElementById("sensitivityValue").textContent=i.target.value},document.getElementById("saveOptionsBtn").onclick=()=>{le.graphicsQuality=document.getElementById("graphicsQuality").value,le.antialiasing=document.getElementById("antialiasing").checked,le.fogEffects=document.getElementById("fogEffects").checked,le.mouseSensitivity=parseFloat(document.getElementById("sensitivitySlider").value),le.showHud=document.getElementById("showHud").checked,le.showHorizonLines=document.getElementById("showHorizonLines").checked,le.soundEnabled=document.getElementById("soundEnabled").checked,le.minimapRange=parseInt(document.getElementById("minimapRange").value),I_(),au(),vn()},document.querySelectorAll(".close-modal").forEach(i=>{i.onclick=t=>{t.stopPropagation(),i.closest(".modal").classList.add("hidden")}}),window.addEventListener("click",i=>{i.target.classList.contains("modal")&&i.target.classList.add("hidden")})}document.getElementById("startBtn").onclick=async()=>{vn(),Le.isMobile&&!Le.tiltEnabled&&await Le.requestOrientationPermission(),cu.classList.add("hidden"),Bl(!1)};G_();document.getElementById("resumeBtn").onclick=()=>{vn(),bs.classList.add("hidden"),ci.classList.remove("hidden");const i=document.getElementById("weapons-hud");i&&i.classList.remove("hidden"),oe=re.FLYING,be&&be.resume(),uu(),Le.isMobile&&Le.setMobileVisible(!0)};document.getElementById("restartBtn").onclick=()=>{vn(),bs.classList.add("hidden"),be&&be.stop(),Bl(!0)};document.getElementById("quitBtn").onclick=()=>{vn(),be&&be.stop(),Fl(!0),location.reload()};document.getElementById("respawnBtn").onclick=()=>{vn(),hu.classList.add("hidden"),be&&be.stop(),Bl(!0)};function Bl(i=!0){J.score=0,dn&&dn.clear(),Ul(.3),Tt.play("zoom-in"),Tt.play("wind",1);const t=document.getElementById("transition-vignette");i&&t&&(t.style.opacity="1"),setTimeout(()=>{Nl.classList.remove("hidden"),Vi.classList.add("hidden"),ci.classList.add("hidden");const n=document.getElementById("weapons-hud");n&&n.classList.add("hidden"),oe=re.PICK_SPAWN,or.classList.add("hidden");const s=document.getElementById("locationSearch"),r=document.getElementById("instruction-text"),a=document.getElementById("search-results");s&&(s.value="",s.style.display="none"),r&&(r.style.display="block",r.textContent="CLICK ANYWHERE TO CHOOSE YOUR HUNTING GROUNDS"),a&&(a.style.display="none"),ma(!0),Ge&&(we().entities.remove(Ge),Ge=null),we().camera.flyTo({destination:Cesium.Cartesian3.fromDegrees(J.lon,J.lat,15e3),duration:2,complete:()=>{t&&(t.style.opacity="0")}})},i?500:0)}function V_(){Tt.play("zoom-in"),Tt.stop("wind",1),Ul(.3),Nl.classList.add("hidden"),or.classList.add("hidden"),cu.classList.remove("hidden"),oe=re.MENU,Gn.classList.add("hidden"),Fl(!0),ma(!1),Ge&&(we().entities.remove(Ge),Ge=null),we().camera.flyTo({...lu,duration:2.5})}function W_(){const i=we(),t=new Cesium.ScreenSpaceEventHandler(i.scene.canvas),e=document.getElementById("instruction-text");t.setInputAction(n=>{if(oe!==re.PICK_SPAWN)return;const s=i.camera.getPickRay(n.position),r=i.scene.globe.pick(s,i.scene);if(r){const a=Cesium.Cartographic.fromCartesian(r),o=Cesium.Math.toDegrees(a.longitude),l=Cesium.Math.toDegrees(a.latitude);J.lon=o,J.lat=l,J.alt=Math.max(0,a.height)+1500,e.textContent="FETCHING LOCATION INFO...",tu(o,l).then(c=>{c&&oe===re.PICK_SPAWN&&(e.textContent=c,Ge&&(Ge.label.text=c))}).catch(()=>{}),Cesium.sampleTerrainMostDetailed(i.terrainProvider,[a]).then(([c])=>J.alt=Math.max(0,c.height||0)+1500).catch(()=>{}),Ge&&i.entities.remove(Ge),Ge=i.entities.add({position:r,point:{pixelSize:15,color:Cesium.Color.RED,outlineColor:Cesium.Color.WHITE,outlineWidth:2,disableDepthTestDistance:Number.POSITIVE_INFINITY},label:{text:"Target Spawn Location",font:`14pt ${getComputedStyle(document.body).fontFamily}`,style:Cesium.LabelStyle.FILL_AND_OUTLINE,outlineWidth:2,verticalOrigin:Cesium.VerticalOrigin.BOTTOM,pixelOffset:new Cesium.Cartesian2(0,-20),disableDepthTestDistance:Number.POSITIVE_INFINITY}}),or.classList.remove("hidden")}},Cesium.ScreenSpaceEventType.LEFT_CLICK)}function X_(){const i=document.getElementById("locationSearch"),t=document.getElementById("search-results"),e=document.getElementById("instruction-text"),n=document.getElementById("search-toggle-btn"),s=n?n.innerHTML:"";let r;n&&(n.onclick=a=>{a.stopPropagation(),i.style.display==="block"?(i.style.display="none",e.style.display="block",t.style.display="none"):(i.style.display="block",e.style.display="none",i.focus())}),i.addEventListener("input",a=>{clearTimeout(r);const o=a.target.value.trim();if(o.length<3){t.style.display="none";return}r=setTimeout(async()=>{n&&(n.innerHTML='<div class="loader-spinner"></div>');try{const c=await(await fetch(`https://nominatim.openstreetmap.org/search?format=json&q=${encodeURIComponent(o)}&limit=5`)).json();t.innerHTML="",c.length>0?(c.forEach(h=>{const u=document.createElement("div");u.textContent=h.display_name,u.style.padding="10px",u.style.cursor="pointer",u.onclick=()=>{const d=parseFloat(h.lon),f=parseFloat(h.lat),g=we(),x=Cesium.Cartesian3.fromDegrees(d,f);J.lon=d,J.lat=f,J.alt=1500;const m=Cesium.Cartographic.fromDegrees(d,f);Cesium.sampleTerrainMostDetailed(g.terrainProvider,[m]).then(([p])=>{J.alt=Math.max(0,p.height||0)+1500}).catch(()=>{}),g.camera.flyTo({destination:Cesium.Cartesian3.fromDegrees(d,f,15e3),duration:1.5}),Ge&&g.entities.remove(Ge),Ge=g.entities.add({position:x,point:{pixelSize:15,color:Cesium.Color.RED,outlineColor:Cesium.Color.WHITE,outlineWidth:2,disableDepthTestDistance:Number.POSITIVE_INFINITY},label:{text:h.display_name.split(",")[0],font:`14pt ${getComputedStyle(document.body).fontFamily}`,style:Cesium.LabelStyle.FILL_AND_OUTLINE,outlineWidth:2,verticalOrigin:Cesium.VerticalOrigin.BOTTOM,pixelOffset:new Cesium.Cartesian2(0,-20),disableDepthTestDistance:Number.POSITIVE_INFINITY}}),or.classList.remove("hidden"),t.style.display="none",i.style.display="none",e.style.display="block",e.textContent=h.display_name.split(",")[0].toUpperCase(),i.value=h.display_name},t.appendChild(u)}),t.style.display="block"):t.style.display="none"}catch(l){console.error("Search error:",l)}finally{n&&(n.innerHTML=s)}},500)}),document.addEventListener("click",a=>{!i.contains(a.target)&&!t.contains(a.target)&&!n.contains(a.target)&&(t.style.display="none",i.style.display==="block"&&(i.style.display="none",e.style.display="block"))})}document.getElementById("confirmSpawnBtn").onclick=()=>{const i=document.getElementById("transition-vignette");i&&(i.style.opacity="1"),Tt.play("spawn"),setTimeout(()=>{const t=we();Ge&&(t.entities.remove(Ge),Ge=null),ma(!1),J.speed=12,J.pitch=0,J.roll=0;try{const e=t&&t.camera;e&&typeof e.heading=="number"?J.heading=Cesium.Math.toDegrees(e.heading):J.heading=0}catch{J.heading=0}na=null,ll=0,qr={lon:0,lat:0},xi.copy(vi),Bn.set(0,0,0),ps=0,Zr=0,ml=!1,Le.reset(),ra=new Qh,ra.reset(J.lon,J.lat,J.alt,J.heading,J.pitch,J.roll),rr&&rr.clear(),Te.resetTime(),Te.resizeMinimap(),_n&&typeof _n.resetAmmo=="function"&&_n.resetAmmo(),dn&&dn.spawnNPC(J.lon,J.lat,J.alt),Nl.classList.add("hidden"),or.classList.add("hidden"),Gn.classList.add("hidden"),oe=re.TRANSITIONING,Fl(!1),t.camera.flyTo({destination:Cesium.Cartesian3.fromDegrees(J.lon,J.lat,J.alt),orientation:{heading:Cesium.Math.toRadians(J.heading),pitch:Cesium.Math.toRadians(J.pitch),roll:Cesium.Math.toRadians(J.roll)},duration:2,easingFunction:Cesium.EasingFunction.QUADRATIC_IN_OUT,complete:()=>{du=Date.now(),ci.classList.remove("hidden");const e=document.getElementById("weapons-hud");if(e&&e.classList.remove("hidden"),Vi.classList.remove("hidden"),Te.resizeMinimap(),oe=re.FLYING,Tt.play("wind",.5),aa&&aa.startFlight(),i&&(i.style.opacity="0"),Le.isMobile){Le.setMobileVisible(!0),Le.calibrateTilt();try{document.documentElement.requestFullscreen?document.documentElement.requestFullscreen().catch(()=>{}):document.documentElement.webkitRequestFullscreen&&document.documentElement.webkitRequestFullscreen(),screen.orientation&&screen.orientation.lock&&screen.orientation.lock("landscape").catch(()=>{})}catch{}}be&&be.start()}})},500)};window.addEventListener("keydown",i=>{const t=i.key.toLowerCase();if(t==="escape"){const e=document.querySelectorAll(".modal:not(.hidden)");if(e.length>0){e.forEach(n=>n.classList.add("hidden"));return}}if(t==="escape"||t==="p")if(oe===re.FLYING){oe=re.PAUSED,be&&be.pause(),ci.classList.add("hidden");const e=document.getElementById("weapons-hud");e&&e.classList.add("hidden"),bs.classList.remove("hidden"),Te.resizeMinimap(),Ol(),Te.update(J,[]),Le.isMobile&&Le.setMobileVisible(!1)}else if(oe===re.PAUSED){oe=re.FLYING,be&&be.resume(),bs.classList.add("hidden"),ci.classList.remove("hidden");const e=document.getElementById("weapons-hud");e&&e.classList.remove("hidden"),uu(),Le.isMobile&&Le.setMobileVisible(!0)}else oe===re.PICK_SPAWN&&t==="escape"&&V_();t==="z"&&oe===re.FLYING&&be&&be.skip()});document.addEventListener("visibilitychange",()=>{document.hidden&&oe===re.FLYING&&(oe=re.PAUSED,be&&be.pause(),ci.classList.add("hidden"),bs.classList.remove("hidden"),Te.resizeMinimap(),Ol(),Te.update(J,[]),Le.isMobile&&Le.setMobileVisible(!1))});window.addEventListener("blur",()=>{oe===re.FLYING&&(oe=re.PAUSED,be&&be.pause(),ci.classList.add("hidden"),bs.classList.remove("hidden"),Te.resizeMinimap(),Ol(),Te.update(J,[]))});const ii=Hx();Ce.cesium=!0;ai();setTimeout(()=>{Ce.globe||(console.warn("Globe loading timeout - enabling start button anyway"),Ce.globe=!0,ai())},8e3);let lh=!1;try{const i=ii.scene.postRender.addEventListener(()=>{try{const t=ii.scene.globe.tilesLoaded;t||(lh=!0),t&&lh&&(Ce.globe=!0,ai(),i())}catch{Ce.globe=!0,ai(),i()}})}catch(i){console.warn("Globe tracker setup failed",i),Ce.globe=!0,ai()}ii.scene.globe.tileLoadProgressEvent.addEventListener(i=>{Gn&&oa&&(oe===re.PICK_SPAWN?i>0?(oa.textContent="Loading Terrain...",Gn.classList.remove("hidden")):Gn.classList.add("hidden"):Ce.audio&&Ce.model&&Ce.cesium&&Ce.globe&&Gn.classList.add("hidden"))});const la=()=>{Tt.listener.context.state==="suspended"&&Tt.listener.context.resume(),window.removeEventListener("mousedown",la),window.removeEventListener("keydown",la)};window.addEventListener("mousedown",la);window.addEventListener("keydown",la);lu={destination:ii.camera.position.clone(),orientation:{heading:ii.camera.heading,pitch:ii.camera.pitch,roll:ii.camera.roll}};B_();dn=new r_(ii,Qe,null);try{N_=R_(ii)}catch(i){console.error("Failed to create territory boundary",i)}W_();X_();P_();ci.classList.add("hidden");Vi.classList.add("hidden");ai();fu();window.addEventListener("resize",()=>{un.aspect=window.innerWidth/window.innerHeight,un.updateProjectionMatrix(),Dn.setSize(window.innerWidth,window.innerHeight);const i=we();i&&i.resize()});window.addEventListener("contextmenu",i=>{i.preventDefault()},!1);
