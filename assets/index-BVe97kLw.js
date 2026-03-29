(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))n(s);new MutationObserver(s=>{for(const a of s)if(a.type==="childList")for(const r of a.addedNodes)r.tagName==="LINK"&&r.rel==="modulepreload"&&n(r)}).observe(document,{childList:!0,subtree:!0});function e(s){const a={};return s.integrity&&(a.integrity=s.integrity),s.referrerPolicy&&(a.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?a.credentials="include":s.crossOrigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function n(s){if(s.ep)return;s.ep=!0;const a=e(s);fetch(s.href,a)}})();const xl="182",Tu=0,Zl=1,Au=2,Ha=1,Cu=2,Vs=3,wi=0,rn=1,Le=2,ai=0,gs=1,wn=2,$l=3,Kl=4,Ru=5,Oi=100,Pu=101,Iu=102,Lu=103,Du=104,Fu=200,Nu=201,Uu=202,Ou=203,lo=204,co=205,Bu=206,ku=207,zu=208,Hu=209,Gu=210,Vu=211,Wu=212,Xu=213,Yu=214,ho=0,uo=1,fo=2,_s=3,po=4,mo=5,go=6,xo=7,cr=0,qu=1,Zu=2,Wn=0,fh=1,ph=2,mh=3,gh=4,xh=5,_h=6,vh=7,Mh=300,Hi=301,vs=302,_o=303,vo=304,hr=306,Mo=1e3,ni=1001,yo=1002,We=1003,$u=1004,ha=1005,Ge=1006,vr=1007,ki=1008,pn=1009,yh=1010,Sh=1011,Js=1012,_l=1013,qn=1014,Nn=1015,li=1016,vl=1017,Ml=1018,js=1020,wh=35902,bh=35899,Eh=1021,Th=1022,Un=1023,ci=1026,zi=1027,yl=1028,Sl=1029,Ms=1030,wl=1031,bl=1033,Ga=33776,Va=33777,Wa=33778,Xa=33779,So=35840,wo=35841,bo=35842,Eo=35843,To=36196,Ao=37492,Co=37496,Ro=37488,Po=37489,Io=37490,Lo=37491,Do=37808,Fo=37809,No=37810,Uo=37811,Oo=37812,Bo=37813,ko=37814,zo=37815,Ho=37816,Go=37817,Vo=37818,Wo=37819,Xo=37820,Yo=37821,qo=36492,Zo=36494,$o=36495,Ko=36283,Jo=36284,jo=36285,Qo=36286,Ku=3200,ur=0,Ju=1,vi="",_n="srgb",ys="srgb-linear",$a="linear",de="srgb",Yi=7680,Jl=519,ju=512,Qu=513,td=514,El=515,ed=516,nd=517,Tl=518,id=519,tl=35044,jl="300 es",Hn=2e3,Ka=2001;function Ah(i){for(let t=i.length-1;t>=0;--t)if(i[t]>=65535)return!0;return!1}function Ja(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function sd(){const i=Ja("canvas");return i.style.display="block",i}const Ql={};function ja(...i){const t="THREE."+i.shift();console.log(t,...i)}function Ft(...i){const t="THREE."+i.shift();console.warn(t,...i)}function Qt(...i){const t="THREE."+i.shift();console.error(t,...i)}function Qs(...i){const t=i.join(" ");t in Ql||(Ql[t]=!0,Ft(...i))}function ad(i,t,e){return new Promise(function(n,s){function a(){switch(i.clientWaitSync(t,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:s();break;case i.TIMEOUT_EXPIRED:setTimeout(a,e);break;default:n()}}setTimeout(a,e)})}class Es{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[t]===void 0&&(n[t]=[]),n[t].indexOf(e)===-1&&n[t].push(e)}hasEventListener(t,e){const n=this._listeners;return n===void 0?!1:n[t]!==void 0&&n[t].indexOf(e)!==-1}removeEventListener(t,e){const n=this._listeners;if(n===void 0)return;const s=n[t];if(s!==void 0){const a=s.indexOf(e);a!==-1&&s.splice(a,1)}}dispatchEvent(t){const e=this._listeners;if(e===void 0)return;const n=e[t.type];if(n!==void 0){t.target=this;const s=n.slice(0);for(let a=0,r=s.length;a<r;a++)s[a].call(this,t);t.target=null}}}const Xe=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let tc=1234567;const qs=Math.PI/180,ta=180/Math.PI;function Xn(){const i=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(Xe[i&255]+Xe[i>>8&255]+Xe[i>>16&255]+Xe[i>>24&255]+"-"+Xe[t&255]+Xe[t>>8&255]+"-"+Xe[t>>16&15|64]+Xe[t>>24&255]+"-"+Xe[e&63|128]+Xe[e>>8&255]+"-"+Xe[e>>16&255]+Xe[e>>24&255]+Xe[n&255]+Xe[n>>8&255]+Xe[n>>16&255]+Xe[n>>24&255]).toLowerCase()}function Kt(i,t,e){return Math.max(t,Math.min(e,i))}function Al(i,t){return(i%t+t)%t}function rd(i,t,e,n,s){return n+(i-t)*(s-n)/(e-t)}function od(i,t,e){return i!==t?(e-i)/(t-i):0}function Zs(i,t,e){return(1-e)*i+e*t}function ld(i,t,e,n){return Zs(i,t,1-Math.exp(-e*n))}function cd(i,t=1){return t-Math.abs(Al(i,t*2)-t)}function hd(i,t,e){return i<=t?0:i>=e?1:(i=(i-t)/(e-t),i*i*(3-2*i))}function ud(i,t,e){return i<=t?0:i>=e?1:(i=(i-t)/(e-t),i*i*i*(i*(i*6-15)+10))}function dd(i,t){return i+Math.floor(Math.random()*(t-i+1))}function fd(i,t){return i+Math.random()*(t-i)}function pd(i){return i*(.5-Math.random())}function md(i){i!==void 0&&(tc=i);let t=tc+=1831565813;return t=Math.imul(t^t>>>15,t|1),t^=t+Math.imul(t^t>>>7,t|61),((t^t>>>14)>>>0)/4294967296}function gd(i){return i*qs}function xd(i){return i*ta}function _d(i){return(i&i-1)===0&&i!==0}function vd(i){return Math.pow(2,Math.ceil(Math.log(i)/Math.LN2))}function Md(i){return Math.pow(2,Math.floor(Math.log(i)/Math.LN2))}function yd(i,t,e,n,s){const a=Math.cos,r=Math.sin,o=a(e/2),l=r(e/2),c=a((t+n)/2),h=r((t+n)/2),u=a((t-n)/2),d=r((t-n)/2),p=a((n-t)/2),g=r((n-t)/2);switch(s){case"XYX":i.set(o*h,l*u,l*d,o*c);break;case"YZY":i.set(l*d,o*h,l*u,o*c);break;case"ZXZ":i.set(l*u,l*d,o*h,o*c);break;case"XZX":i.set(o*h,l*g,l*p,o*c);break;case"YXY":i.set(l*p,o*h,l*g,o*c);break;case"ZYZ":i.set(l*g,l*p,o*h,o*c);break;default:Ft("MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+s)}}function In(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("Invalid component type.")}}function fe(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("Invalid component type.")}}const Se={DEG2RAD:qs,RAD2DEG:ta,generateUUID:Xn,clamp:Kt,euclideanModulo:Al,mapLinear:rd,inverseLerp:od,lerp:Zs,damp:ld,pingpong:cd,smoothstep:hd,smootherstep:ud,randInt:dd,randFloat:fd,randFloatSpread:pd,seededRandom:md,degToRad:gd,radToDeg:xd,isPowerOfTwo:_d,ceilPowerOfTwo:vd,floorPowerOfTwo:Md,setQuaternionFromProperEuler:yd,normalize:fe,denormalize:In};class ut{constructor(t=0,e=0){ut.prototype.isVector2=!0,this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){const e=this.x,n=this.y,s=t.elements;return this.x=s[0]*e+s[3]*n+s[6],this.y=s[1]*e+s[4]*n+s[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=Kt(this.x,t.x,e.x),this.y=Kt(this.y,t.y,e.y),this}clampScalar(t,e){return this.x=Kt(this.x,t,e),this.y=Kt(this.y,t,e),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Kt(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const n=this.dot(t)/e;return Math.acos(Kt(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,n=this.y-t.y;return e*e+n*n}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){const n=Math.cos(e),s=Math.sin(e),a=this.x-t.x,r=this.y-t.y;return this.x=a*n-r*s+t.x,this.y=a*s+r*n+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class $e{constructor(t=0,e=0,n=0,s=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=n,this._w=s}static slerpFlat(t,e,n,s,a,r,o){let l=n[s+0],c=n[s+1],h=n[s+2],u=n[s+3],d=a[r+0],p=a[r+1],g=a[r+2],x=a[r+3];if(o<=0){t[e+0]=l,t[e+1]=c,t[e+2]=h,t[e+3]=u;return}if(o>=1){t[e+0]=d,t[e+1]=p,t[e+2]=g,t[e+3]=x;return}if(u!==x||l!==d||c!==p||h!==g){let m=l*d+c*p+h*g+u*x;m<0&&(d=-d,p=-p,g=-g,x=-x,m=-m);let f=1-o;if(m<.9995){const b=Math.acos(m),w=Math.sin(b);f=Math.sin(f*b)/w,o=Math.sin(o*b)/w,l=l*f+d*o,c=c*f+p*o,h=h*f+g*o,u=u*f+x*o}else{l=l*f+d*o,c=c*f+p*o,h=h*f+g*o,u=u*f+x*o;const b=1/Math.sqrt(l*l+c*c+h*h+u*u);l*=b,c*=b,h*=b,u*=b}}t[e]=l,t[e+1]=c,t[e+2]=h,t[e+3]=u}static multiplyQuaternionsFlat(t,e,n,s,a,r){const o=n[s],l=n[s+1],c=n[s+2],h=n[s+3],u=a[r],d=a[r+1],p=a[r+2],g=a[r+3];return t[e]=o*g+h*u+l*p-c*d,t[e+1]=l*g+h*d+c*u-o*p,t[e+2]=c*g+h*p+o*d-l*u,t[e+3]=h*g-o*u-l*d-c*p,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,n,s){return this._x=t,this._y=e,this._z=n,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){const n=t._x,s=t._y,a=t._z,r=t._order,o=Math.cos,l=Math.sin,c=o(n/2),h=o(s/2),u=o(a/2),d=l(n/2),p=l(s/2),g=l(a/2);switch(r){case"XYZ":this._x=d*h*u+c*p*g,this._y=c*p*u-d*h*g,this._z=c*h*g+d*p*u,this._w=c*h*u-d*p*g;break;case"YXZ":this._x=d*h*u+c*p*g,this._y=c*p*u-d*h*g,this._z=c*h*g-d*p*u,this._w=c*h*u+d*p*g;break;case"ZXY":this._x=d*h*u-c*p*g,this._y=c*p*u+d*h*g,this._z=c*h*g+d*p*u,this._w=c*h*u-d*p*g;break;case"ZYX":this._x=d*h*u-c*p*g,this._y=c*p*u+d*h*g,this._z=c*h*g-d*p*u,this._w=c*h*u+d*p*g;break;case"YZX":this._x=d*h*u+c*p*g,this._y=c*p*u+d*h*g,this._z=c*h*g-d*p*u,this._w=c*h*u-d*p*g;break;case"XZY":this._x=d*h*u-c*p*g,this._y=c*p*u-d*h*g,this._z=c*h*g+d*p*u,this._w=c*h*u+d*p*g;break;default:Ft("Quaternion: .setFromEuler() encountered an unknown order: "+r)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){const n=e/2,s=Math.sin(n);return this._x=t.x*s,this._y=t.y*s,this._z=t.z*s,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(t){const e=t.elements,n=e[0],s=e[4],a=e[8],r=e[1],o=e[5],l=e[9],c=e[2],h=e[6],u=e[10],d=n+o+u;if(d>0){const p=.5/Math.sqrt(d+1);this._w=.25/p,this._x=(h-l)*p,this._y=(a-c)*p,this._z=(r-s)*p}else if(n>o&&n>u){const p=2*Math.sqrt(1+n-o-u);this._w=(h-l)/p,this._x=.25*p,this._y=(s+r)/p,this._z=(a+c)/p}else if(o>u){const p=2*Math.sqrt(1+o-n-u);this._w=(a-c)/p,this._x=(s+r)/p,this._y=.25*p,this._z=(l+h)/p}else{const p=2*Math.sqrt(1+u-n-o);this._w=(r-s)/p,this._x=(a+c)/p,this._y=(l+h)/p,this._z=.25*p}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let n=t.dot(e)+1;return n<1e-8?(n=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=n):(this._x=0,this._y=-t.z,this._z=t.y,this._w=n)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=n),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(Kt(this.dot(t),-1,1)))}rotateTowards(t,e){const n=this.angleTo(t);if(n===0)return this;const s=Math.min(1,e/n);return this.slerp(t,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){const n=t._x,s=t._y,a=t._z,r=t._w,o=e._x,l=e._y,c=e._z,h=e._w;return this._x=n*h+r*o+s*c-a*l,this._y=s*h+r*l+a*o-n*c,this._z=a*h+r*c+n*l-s*o,this._w=r*h-n*o-s*l-a*c,this._onChangeCallback(),this}slerp(t,e){if(e<=0)return this;if(e>=1)return this.copy(t);let n=t._x,s=t._y,a=t._z,r=t._w,o=this.dot(t);o<0&&(n=-n,s=-s,a=-a,r=-r,o=-o);let l=1-e;if(o<.9995){const c=Math.acos(o),h=Math.sin(c);l=Math.sin(l*c)/h,e=Math.sin(e*c)/h,this._x=this._x*l+n*e,this._y=this._y*l+s*e,this._z=this._z*l+a*e,this._w=this._w*l+r*e,this._onChangeCallback()}else this._x=this._x*l+n*e,this._y=this._y*l+s*e,this._z=this._z*l+a*e,this._w=this._w*l+r*e,this.normalize();return this}slerpQuaternions(t,e,n){return this.copy(t).slerp(e,n)}random(){const t=2*Math.PI*Math.random(),e=2*Math.PI*Math.random(),n=Math.random(),s=Math.sqrt(1-n),a=Math.sqrt(n);return this.set(s*Math.sin(t),s*Math.cos(t),a*Math.sin(e),a*Math.cos(e))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class F{constructor(t=0,e=0,n=0){F.prototype.isVector3=!0,this.x=t,this.y=e,this.z=n}set(t,e,n){return n===void 0&&(n=this.z),this.x=t,this.y=e,this.z=n,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(ec.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(ec.setFromAxisAngle(t,e))}applyMatrix3(t){const e=this.x,n=this.y,s=this.z,a=t.elements;return this.x=a[0]*e+a[3]*n+a[6]*s,this.y=a[1]*e+a[4]*n+a[7]*s,this.z=a[2]*e+a[5]*n+a[8]*s,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){const e=this.x,n=this.y,s=this.z,a=t.elements,r=1/(a[3]*e+a[7]*n+a[11]*s+a[15]);return this.x=(a[0]*e+a[4]*n+a[8]*s+a[12])*r,this.y=(a[1]*e+a[5]*n+a[9]*s+a[13])*r,this.z=(a[2]*e+a[6]*n+a[10]*s+a[14])*r,this}applyQuaternion(t){const e=this.x,n=this.y,s=this.z,a=t.x,r=t.y,o=t.z,l=t.w,c=2*(r*s-o*n),h=2*(o*e-a*s),u=2*(a*n-r*e);return this.x=e+l*c+r*u-o*h,this.y=n+l*h+o*c-a*u,this.z=s+l*u+a*h-r*c,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){const e=this.x,n=this.y,s=this.z,a=t.elements;return this.x=a[0]*e+a[4]*n+a[8]*s,this.y=a[1]*e+a[5]*n+a[9]*s,this.z=a[2]*e+a[6]*n+a[10]*s,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=Kt(this.x,t.x,e.x),this.y=Kt(this.y,t.y,e.y),this.z=Kt(this.z,t.z,e.z),this}clampScalar(t,e){return this.x=Kt(this.x,t,e),this.y=Kt(this.y,t,e),this.z=Kt(this.z,t,e),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Kt(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){const n=t.x,s=t.y,a=t.z,r=e.x,o=e.y,l=e.z;return this.x=s*l-a*o,this.y=a*r-n*l,this.z=n*o-s*r,this}projectOnVector(t){const e=t.lengthSq();if(e===0)return this.set(0,0,0);const n=t.dot(this)/e;return this.copy(t).multiplyScalar(n)}projectOnPlane(t){return Mr.copy(this).projectOnVector(t),this.sub(Mr)}reflect(t){return this.sub(Mr.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const n=this.dot(t)/e;return Math.acos(Kt(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,n=this.y-t.y,s=this.z-t.z;return e*e+n*n+s*s}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,n){const s=Math.sin(e)*t;return this.x=s*Math.sin(n),this.y=Math.cos(e)*t,this.z=s*Math.cos(n),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,n){return this.x=t*Math.sin(e),this.y=n,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){const e=this.setFromMatrixColumn(t,0).length(),n=this.setFromMatrixColumn(t,1).length(),s=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=n,this.z=s,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const t=Math.random()*Math.PI*2,e=Math.random()*2-1,n=Math.sqrt(1-e*e);return this.x=n*Math.cos(t),this.y=e,this.z=n*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Mr=new F,ec=new $e;class Yt{constructor(t,e,n,s,a,r,o,l,c){Yt.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,n,s,a,r,o,l,c)}set(t,e,n,s,a,r,o,l,c){const h=this.elements;return h[0]=t,h[1]=s,h[2]=o,h[3]=e,h[4]=a,h[5]=l,h[6]=n,h[7]=r,h[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){const e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],this}extractBasis(t,e,n){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(t){const e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const n=t.elements,s=e.elements,a=this.elements,r=n[0],o=n[3],l=n[6],c=n[1],h=n[4],u=n[7],d=n[2],p=n[5],g=n[8],x=s[0],m=s[3],f=s[6],b=s[1],w=s[4],y=s[7],A=s[2],P=s[5],T=s[8];return a[0]=r*x+o*b+l*A,a[3]=r*m+o*w+l*P,a[6]=r*f+o*y+l*T,a[1]=c*x+h*b+u*A,a[4]=c*m+h*w+u*P,a[7]=c*f+h*y+u*T,a[2]=d*x+p*b+g*A,a[5]=d*m+p*w+g*P,a[8]=d*f+p*y+g*T,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){const t=this.elements,e=t[0],n=t[1],s=t[2],a=t[3],r=t[4],o=t[5],l=t[6],c=t[7],h=t[8];return e*r*h-e*o*c-n*a*h+n*o*l+s*a*c-s*r*l}invert(){const t=this.elements,e=t[0],n=t[1],s=t[2],a=t[3],r=t[4],o=t[5],l=t[6],c=t[7],h=t[8],u=h*r-o*c,d=o*l-h*a,p=c*a-r*l,g=e*u+n*d+s*p;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);const x=1/g;return t[0]=u*x,t[1]=(s*c-h*n)*x,t[2]=(o*n-s*r)*x,t[3]=d*x,t[4]=(h*e-s*l)*x,t[5]=(s*a-o*e)*x,t[6]=p*x,t[7]=(n*l-c*e)*x,t[8]=(r*e-n*a)*x,this}transpose(){let t;const e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){const e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,n,s,a,r,o){const l=Math.cos(a),c=Math.sin(a);return this.set(n*l,n*c,-n*(l*r+c*o)+r+t,-s*c,s*l,-s*(-c*r+l*o)+o+e,0,0,1),this}scale(t,e){return this.premultiply(yr.makeScale(t,e)),this}rotate(t){return this.premultiply(yr.makeRotation(-t)),this}translate(t,e){return this.premultiply(yr.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,n,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){const e=this.elements,n=t.elements;for(let s=0;s<9;s++)if(e[s]!==n[s])return!1;return!0}fromArray(t,e=0){for(let n=0;n<9;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){const n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t}clone(){return new this.constructor().fromArray(this.elements)}}const yr=new Yt,nc=new Yt().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),ic=new Yt().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function Sd(){const i={enabled:!0,workingColorSpace:ys,spaces:{},convert:function(s,a,r){return this.enabled===!1||a===r||!a||!r||(this.spaces[a].transfer===de&&(s.r=ri(s.r),s.g=ri(s.g),s.b=ri(s.b)),this.spaces[a].primaries!==this.spaces[r].primaries&&(s.applyMatrix3(this.spaces[a].toXYZ),s.applyMatrix3(this.spaces[r].fromXYZ)),this.spaces[r].transfer===de&&(s.r=xs(s.r),s.g=xs(s.g),s.b=xs(s.b))),s},workingToColorSpace:function(s,a){return this.convert(s,this.workingColorSpace,a)},colorSpaceToWorking:function(s,a){return this.convert(s,a,this.workingColorSpace)},getPrimaries:function(s){return this.spaces[s].primaries},getTransfer:function(s){return s===vi?$a:this.spaces[s].transfer},getToneMappingMode:function(s){return this.spaces[s].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(s,a=this.workingColorSpace){return s.fromArray(this.spaces[a].luminanceCoefficients)},define:function(s){Object.assign(this.spaces,s)},_getMatrix:function(s,a,r){return s.copy(this.spaces[a].toXYZ).multiply(this.spaces[r].fromXYZ)},_getDrawingBufferColorSpace:function(s){return this.spaces[s].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(s=this.workingColorSpace){return this.spaces[s].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(s,a){return Qs("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),i.workingToColorSpace(s,a)},toWorkingColorSpace:function(s,a){return Qs("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),i.colorSpaceToWorking(s,a)}},t=[.64,.33,.3,.6,.15,.06],e=[.2126,.7152,.0722],n=[.3127,.329];return i.define({[ys]:{primaries:t,whitePoint:n,transfer:$a,toXYZ:nc,fromXYZ:ic,luminanceCoefficients:e,workingColorSpaceConfig:{unpackColorSpace:_n},outputColorSpaceConfig:{drawingBufferColorSpace:_n}},[_n]:{primaries:t,whitePoint:n,transfer:de,toXYZ:nc,fromXYZ:ic,luminanceCoefficients:e,outputColorSpaceConfig:{drawingBufferColorSpace:_n}}}),i}const te=Sd();function ri(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function xs(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}let qi;class wd{static getDataURL(t,e="image/png"){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let n;if(t instanceof HTMLCanvasElement)n=t;else{qi===void 0&&(qi=Ja("canvas")),qi.width=t.width,qi.height=t.height;const s=qi.getContext("2d");t instanceof ImageData?s.putImageData(t,0,0):s.drawImage(t,0,0,t.width,t.height),n=qi}return n.toDataURL(e)}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){const e=Ja("canvas");e.width=t.width,e.height=t.height;const n=e.getContext("2d");n.drawImage(t,0,0,t.width,t.height);const s=n.getImageData(0,0,t.width,t.height),a=s.data;for(let r=0;r<a.length;r++)a[r]=ri(a[r]/255)*255;return n.putImageData(s,0,0),e}else if(t.data){const e=t.data.slice(0);for(let n=0;n<e.length;n++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[n]=Math.floor(ri(e[n]/255)*255):e[n]=ri(e[n]);return{data:e,width:t.width,height:t.height}}else return Ft("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}}let bd=0;class Cl{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:bd++}),this.uuid=Xn(),this.data=t,this.dataReady=!0,this.version=0}getSize(t){const e=this.data;return typeof HTMLVideoElement<"u"&&e instanceof HTMLVideoElement?t.set(e.videoWidth,e.videoHeight,0):typeof VideoFrame<"u"&&e instanceof VideoFrame?t.set(e.displayHeight,e.displayWidth,0):e!==null?t.set(e.width,e.height,e.depth||0):t.set(0,0,0),t}set needsUpdate(t){t===!0&&this.version++}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];const n={uuid:this.uuid,url:""},s=this.data;if(s!==null){let a;if(Array.isArray(s)){a=[];for(let r=0,o=s.length;r<o;r++)s[r].isDataTexture?a.push(Sr(s[r].image)):a.push(Sr(s[r]))}else a=Sr(s);n.url=a}return e||(t.images[this.uuid]=n),n}}function Sr(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?wd.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(Ft("Texture: Unable to serialize Texture."),{})}let Ed=0;const wr=new F;class Ke extends Es{constructor(t=Ke.DEFAULT_IMAGE,e=Ke.DEFAULT_MAPPING,n=ni,s=ni,a=Ge,r=ki,o=Un,l=pn,c=Ke.DEFAULT_ANISOTROPY,h=vi){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Ed++}),this.uuid=Xn(),this.name="",this.source=new Cl(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=n,this.wrapT=s,this.magFilter=a,this.minFilter=r,this.anisotropy=c,this.format=o,this.internalFormat=null,this.type=l,this.offset=new ut(0,0),this.repeat=new ut(1,1),this.center=new ut(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Yt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(t&&t.depth&&t.depth>1),this.pmremVersion=0}get width(){return this.source.getSize(wr).x}get height(){return this.source.getSize(wr).y}get depth(){return this.source.getSize(wr).z}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.renderTarget=t.renderTarget,this.isRenderTargetTexture=t.isRenderTargetTexture,this.isArrayTexture=t.isArrayTexture,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}setValues(t){for(const e in t){const n=t[e];if(n===void 0){Ft(`Texture.setValues(): parameter '${e}' has value of undefined.`);continue}const s=this[e];if(s===void 0){Ft(`Texture.setValues(): property '${e}' does not exist.`);continue}s&&n&&s.isVector2&&n.isVector2||s&&n&&s.isVector3&&n.isVector3||s&&n&&s.isMatrix3&&n.isMatrix3?s.copy(n):this[e]=n}}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];const n={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),e||(t.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==Mh)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case Mo:t.x=t.x-Math.floor(t.x);break;case ni:t.x=t.x<0?0:1;break;case yo:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case Mo:t.y=t.y-Math.floor(t.y);break;case ni:t.y=t.y<0?0:1;break;case yo:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}}Ke.DEFAULT_IMAGE=null;Ke.DEFAULT_MAPPING=Mh;Ke.DEFAULT_ANISOTROPY=1;class Ee{constructor(t=0,e=0,n=0,s=1){Ee.prototype.isVector4=!0,this.x=t,this.y=e,this.z=n,this.w=s}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,n,s){return this.x=t,this.y=e,this.z=n,this.w=s,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){const e=this.x,n=this.y,s=this.z,a=this.w,r=t.elements;return this.x=r[0]*e+r[4]*n+r[8]*s+r[12]*a,this.y=r[1]*e+r[5]*n+r[9]*s+r[13]*a,this.z=r[2]*e+r[6]*n+r[10]*s+r[14]*a,this.w=r[3]*e+r[7]*n+r[11]*s+r[15]*a,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);const e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,n,s,a;const l=t.elements,c=l[0],h=l[4],u=l[8],d=l[1],p=l[5],g=l[9],x=l[2],m=l[6],f=l[10];if(Math.abs(h-d)<.01&&Math.abs(u-x)<.01&&Math.abs(g-m)<.01){if(Math.abs(h+d)<.1&&Math.abs(u+x)<.1&&Math.abs(g+m)<.1&&Math.abs(c+p+f-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;const w=(c+1)/2,y=(p+1)/2,A=(f+1)/2,P=(h+d)/4,T=(u+x)/4,D=(g+m)/4;return w>y&&w>A?w<.01?(n=0,s=.707106781,a=.707106781):(n=Math.sqrt(w),s=P/n,a=T/n):y>A?y<.01?(n=.707106781,s=0,a=.707106781):(s=Math.sqrt(y),n=P/s,a=D/s):A<.01?(n=.707106781,s=.707106781,a=0):(a=Math.sqrt(A),n=T/a,s=D/a),this.set(n,s,a,e),this}let b=Math.sqrt((m-g)*(m-g)+(u-x)*(u-x)+(d-h)*(d-h));return Math.abs(b)<.001&&(b=1),this.x=(m-g)/b,this.y=(u-x)/b,this.z=(d-h)/b,this.w=Math.acos((c+p+f-1)/2),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this.w=e[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=Kt(this.x,t.x,e.x),this.y=Kt(this.y,t.y,e.y),this.z=Kt(this.z,t.z,e.z),this.w=Kt(this.w,t.w,e.w),this}clampScalar(t,e){return this.x=Kt(this.x,t,e),this.y=Kt(this.y,t,e),this.z=Kt(this.z,t,e),this.w=Kt(this.w,t,e),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Kt(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this.w=t.w+(e.w-t.w)*n,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class Td extends Es{constructor(t=1,e=1,n={}){super(),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Ge,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1},n),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=n.depth,this.scissor=new Ee(0,0,t,e),this.scissorTest=!1,this.viewport=new Ee(0,0,t,e);const s={width:t,height:e,depth:n.depth},a=new Ke(s);this.textures=[];const r=n.count;for(let o=0;o<r;o++)this.textures[o]=a.clone(),this.textures[o].isRenderTargetTexture=!0,this.textures[o].renderTarget=this;this._setTextureOptions(n),this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples,this.multiview=n.multiview}_setTextureOptions(t={}){const e={minFilter:Ge,generateMipmaps:!1,flipY:!1,internalFormat:null};t.mapping!==void 0&&(e.mapping=t.mapping),t.wrapS!==void 0&&(e.wrapS=t.wrapS),t.wrapT!==void 0&&(e.wrapT=t.wrapT),t.wrapR!==void 0&&(e.wrapR=t.wrapR),t.magFilter!==void 0&&(e.magFilter=t.magFilter),t.minFilter!==void 0&&(e.minFilter=t.minFilter),t.format!==void 0&&(e.format=t.format),t.type!==void 0&&(e.type=t.type),t.anisotropy!==void 0&&(e.anisotropy=t.anisotropy),t.colorSpace!==void 0&&(e.colorSpace=t.colorSpace),t.flipY!==void 0&&(e.flipY=t.flipY),t.generateMipmaps!==void 0&&(e.generateMipmaps=t.generateMipmaps),t.internalFormat!==void 0&&(e.internalFormat=t.internalFormat);for(let n=0;n<this.textures.length;n++)this.textures[n].setValues(e)}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}set depthTexture(t){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),t!==null&&(t.renderTarget=this),this._depthTexture=t}get depthTexture(){return this._depthTexture}setSize(t,e,n=1){if(this.width!==t||this.height!==e||this.depth!==n){this.width=t,this.height=e,this.depth=n;for(let s=0,a=this.textures.length;s<a;s++)this.textures[s].image.width=t,this.textures[s].image.height=e,this.textures[s].image.depth=n,this.textures[s].isData3DTexture!==!0&&(this.textures[s].isArrayTexture=this.textures[s].image.depth>1);this.dispose()}this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let e=0,n=t.textures.length;e<n;e++){this.textures[e]=t.textures[e].clone(),this.textures[e].isRenderTargetTexture=!0,this.textures[e].renderTarget=this;const s=Object.assign({},t.textures[e].image);this.textures[e].source=new Cl(s)}return this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Yn extends Td{constructor(t=1,e=1,n={}){super(t,e,n),this.isWebGLRenderTarget=!0}}class Ch extends Ke{constructor(t=null,e=1,n=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:n,depth:s},this.magFilter=We,this.minFilter=We,this.wrapR=ni,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}}class Ad extends Ke{constructor(t=null,e=1,n=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:n,depth:s},this.magFilter=We,this.minFilter=We,this.wrapR=ni,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Wi{constructor(t=new F(1/0,1/0,1/0),e=new F(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e+=3)this.expandByPoint(An.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,n=t.count;e<n;e++)this.expandByPoint(An.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){const n=An.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(n),this.max.copy(t).add(n),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);const n=t.geometry;if(n!==void 0){const a=n.getAttribute("position");if(e===!0&&a!==void 0&&t.isInstancedMesh!==!0)for(let r=0,o=a.count;r<o;r++)t.isMesh===!0?t.getVertexPosition(r,An):An.fromBufferAttribute(a,r),An.applyMatrix4(t.matrixWorld),this.expandByPoint(An);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),ua.copy(t.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),ua.copy(n.boundingBox)),ua.applyMatrix4(t.matrixWorld),this.union(ua)}const s=t.children;for(let a=0,r=s.length;a<r;a++)this.expandByObject(s[a],e);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,An),An.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,n;return t.normal.x>0?(e=t.normal.x*this.min.x,n=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,n=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,n+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,n+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,n+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,n+=t.normal.z*this.min.z),e<=-t.constant&&n>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(Rs),da.subVectors(this.max,Rs),Zi.subVectors(t.a,Rs),$i.subVectors(t.b,Rs),Ki.subVectors(t.c,Rs),ui.subVectors($i,Zi),di.subVectors(Ki,$i),Ai.subVectors(Zi,Ki);let e=[0,-ui.z,ui.y,0,-di.z,di.y,0,-Ai.z,Ai.y,ui.z,0,-ui.x,di.z,0,-di.x,Ai.z,0,-Ai.x,-ui.y,ui.x,0,-di.y,di.x,0,-Ai.y,Ai.x,0];return!br(e,Zi,$i,Ki,da)||(e=[1,0,0,0,1,0,0,0,1],!br(e,Zi,$i,Ki,da))?!1:(fa.crossVectors(ui,di),e=[fa.x,fa.y,fa.z],br(e,Zi,$i,Ki,da))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,An).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(An).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(Kn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),Kn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),Kn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),Kn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),Kn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),Kn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),Kn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),Kn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(Kn),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(t){return this.min.fromArray(t.min),this.max.fromArray(t.max),this}}const Kn=[new F,new F,new F,new F,new F,new F,new F,new F],An=new F,ua=new Wi,Zi=new F,$i=new F,Ki=new F,ui=new F,di=new F,Ai=new F,Rs=new F,da=new F,fa=new F,Ci=new F;function br(i,t,e,n,s){for(let a=0,r=i.length-3;a<=r;a+=3){Ci.fromArray(i,a);const o=s.x*Math.abs(Ci.x)+s.y*Math.abs(Ci.y)+s.z*Math.abs(Ci.z),l=t.dot(Ci),c=e.dot(Ci),h=n.dot(Ci);if(Math.max(-Math.max(l,c,h),Math.min(l,c,h))>o)return!1}return!0}const Cd=new Wi,Ps=new F,Er=new F;class ra{constructor(t=new F,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){const n=this.center;e!==void 0?n.copy(e):Cd.setFromPoints(t).getCenter(n);let s=0;for(let a=0,r=t.length;a<r;a++)s=Math.max(s,n.distanceToSquared(t[a]));return this.radius=Math.sqrt(s),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){const e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){const n=this.center.distanceToSquared(t);return e.copy(t),n>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;Ps.subVectors(t,this.center);const e=Ps.lengthSq();if(e>this.radius*this.radius){const n=Math.sqrt(e),s=(n-this.radius)*.5;this.center.addScaledVector(Ps,s/n),this.radius+=s}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(Er.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(Ps.copy(t.center).add(Er)),this.expandByPoint(Ps.copy(t.center).sub(Er))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(t){return this.radius=t.radius,this.center.fromArray(t.center),this}}const Jn=new F,Tr=new F,pa=new F,fi=new F,Ar=new F,ma=new F,Cr=new F;class Rd{constructor(t=new F,e=new F(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,Jn)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);const n=e.dot(this.direction);return n<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){const e=Jn.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(Jn.copy(this.origin).addScaledVector(this.direction,e),Jn.distanceToSquared(t))}distanceSqToSegment(t,e,n,s){Tr.copy(t).add(e).multiplyScalar(.5),pa.copy(e).sub(t).normalize(),fi.copy(this.origin).sub(Tr);const a=t.distanceTo(e)*.5,r=-this.direction.dot(pa),o=fi.dot(this.direction),l=-fi.dot(pa),c=fi.lengthSq(),h=Math.abs(1-r*r);let u,d,p,g;if(h>0)if(u=r*l-o,d=r*o-l,g=a*h,u>=0)if(d>=-g)if(d<=g){const x=1/h;u*=x,d*=x,p=u*(u+r*d+2*o)+d*(r*u+d+2*l)+c}else d=a,u=Math.max(0,-(r*d+o)),p=-u*u+d*(d+2*l)+c;else d=-a,u=Math.max(0,-(r*d+o)),p=-u*u+d*(d+2*l)+c;else d<=-g?(u=Math.max(0,-(-r*a+o)),d=u>0?-a:Math.min(Math.max(-a,-l),a),p=-u*u+d*(d+2*l)+c):d<=g?(u=0,d=Math.min(Math.max(-a,-l),a),p=d*(d+2*l)+c):(u=Math.max(0,-(r*a+o)),d=u>0?a:Math.min(Math.max(-a,-l),a),p=-u*u+d*(d+2*l)+c);else d=r>0?-a:a,u=Math.max(0,-(r*d+o)),p=-u*u+d*(d+2*l)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,u),s&&s.copy(Tr).addScaledVector(pa,d),p}intersectSphere(t,e){Jn.subVectors(t.center,this.origin);const n=Jn.dot(this.direction),s=Jn.dot(Jn)-n*n,a=t.radius*t.radius;if(s>a)return null;const r=Math.sqrt(a-s),o=n-r,l=n+r;return l<0?null:o<0?this.at(l,e):this.at(o,e)}intersectsSphere(t){return t.radius<0?!1:this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){const e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(t.normal)+t.constant)/e;return n>=0?n:null}intersectPlane(t,e){const n=this.distanceToPlane(t);return n===null?null:this.at(n,e)}intersectsPlane(t){const e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let n,s,a,r,o,l;const c=1/this.direction.x,h=1/this.direction.y,u=1/this.direction.z,d=this.origin;return c>=0?(n=(t.min.x-d.x)*c,s=(t.max.x-d.x)*c):(n=(t.max.x-d.x)*c,s=(t.min.x-d.x)*c),h>=0?(a=(t.min.y-d.y)*h,r=(t.max.y-d.y)*h):(a=(t.max.y-d.y)*h,r=(t.min.y-d.y)*h),n>r||a>s||((a>n||isNaN(n))&&(n=a),(r<s||isNaN(s))&&(s=r),u>=0?(o=(t.min.z-d.z)*u,l=(t.max.z-d.z)*u):(o=(t.max.z-d.z)*u,l=(t.min.z-d.z)*u),n>l||o>s)||((o>n||n!==n)&&(n=o),(l<s||s!==s)&&(s=l),s<0)?null:this.at(n>=0?n:s,e)}intersectsBox(t){return this.intersectBox(t,Jn)!==null}intersectTriangle(t,e,n,s,a){Ar.subVectors(e,t),ma.subVectors(n,t),Cr.crossVectors(Ar,ma);let r=this.direction.dot(Cr),o;if(r>0){if(s)return null;o=1}else if(r<0)o=-1,r=-r;else return null;fi.subVectors(this.origin,t);const l=o*this.direction.dot(ma.crossVectors(fi,ma));if(l<0)return null;const c=o*this.direction.dot(Ar.cross(fi));if(c<0||l+c>r)return null;const h=-o*fi.dot(Cr);return h<0?null:this.at(h/r,a)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class jt{constructor(t,e,n,s,a,r,o,l,c,h,u,d,p,g,x,m){jt.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,n,s,a,r,o,l,c,h,u,d,p,g,x,m)}set(t,e,n,s,a,r,o,l,c,h,u,d,p,g,x,m){const f=this.elements;return f[0]=t,f[4]=e,f[8]=n,f[12]=s,f[1]=a,f[5]=r,f[9]=o,f[13]=l,f[2]=c,f[6]=h,f[10]=u,f[14]=d,f[3]=p,f[7]=g,f[11]=x,f[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new jt().fromArray(this.elements)}copy(t){const e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],e[9]=n[9],e[10]=n[10],e[11]=n[11],e[12]=n[12],e[13]=n[13],e[14]=n[14],e[15]=n[15],this}copyPosition(t){const e=this.elements,n=t.elements;return e[12]=n[12],e[13]=n[13],e[14]=n[14],this}setFromMatrix3(t){const e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,n){return this.determinant()===0?(t.set(1,0,0),e.set(0,1,0),n.set(0,0,1),this):(t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this)}makeBasis(t,e,n){return this.set(t.x,e.x,n.x,0,t.y,e.y,n.y,0,t.z,e.z,n.z,0,0,0,0,1),this}extractRotation(t){if(t.determinant()===0)return this.identity();const e=this.elements,n=t.elements,s=1/Ji.setFromMatrixColumn(t,0).length(),a=1/Ji.setFromMatrixColumn(t,1).length(),r=1/Ji.setFromMatrixColumn(t,2).length();return e[0]=n[0]*s,e[1]=n[1]*s,e[2]=n[2]*s,e[3]=0,e[4]=n[4]*a,e[5]=n[5]*a,e[6]=n[6]*a,e[7]=0,e[8]=n[8]*r,e[9]=n[9]*r,e[10]=n[10]*r,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){const e=this.elements,n=t.x,s=t.y,a=t.z,r=Math.cos(n),o=Math.sin(n),l=Math.cos(s),c=Math.sin(s),h=Math.cos(a),u=Math.sin(a);if(t.order==="XYZ"){const d=r*h,p=r*u,g=o*h,x=o*u;e[0]=l*h,e[4]=-l*u,e[8]=c,e[1]=p+g*c,e[5]=d-x*c,e[9]=-o*l,e[2]=x-d*c,e[6]=g+p*c,e[10]=r*l}else if(t.order==="YXZ"){const d=l*h,p=l*u,g=c*h,x=c*u;e[0]=d+x*o,e[4]=g*o-p,e[8]=r*c,e[1]=r*u,e[5]=r*h,e[9]=-o,e[2]=p*o-g,e[6]=x+d*o,e[10]=r*l}else if(t.order==="ZXY"){const d=l*h,p=l*u,g=c*h,x=c*u;e[0]=d-x*o,e[4]=-r*u,e[8]=g+p*o,e[1]=p+g*o,e[5]=r*h,e[9]=x-d*o,e[2]=-r*c,e[6]=o,e[10]=r*l}else if(t.order==="ZYX"){const d=r*h,p=r*u,g=o*h,x=o*u;e[0]=l*h,e[4]=g*c-p,e[8]=d*c+x,e[1]=l*u,e[5]=x*c+d,e[9]=p*c-g,e[2]=-c,e[6]=o*l,e[10]=r*l}else if(t.order==="YZX"){const d=r*l,p=r*c,g=o*l,x=o*c;e[0]=l*h,e[4]=x-d*u,e[8]=g*u+p,e[1]=u,e[5]=r*h,e[9]=-o*h,e[2]=-c*h,e[6]=p*u+g,e[10]=d-x*u}else if(t.order==="XZY"){const d=r*l,p=r*c,g=o*l,x=o*c;e[0]=l*h,e[4]=-u,e[8]=c*h,e[1]=d*u+x,e[5]=r*h,e[9]=p*u-g,e[2]=g*u-p,e[6]=o*h,e[10]=x*u+d}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(Pd,t,Id)}lookAt(t,e,n){const s=this.elements;return hn.subVectors(t,e),hn.lengthSq()===0&&(hn.z=1),hn.normalize(),pi.crossVectors(n,hn),pi.lengthSq()===0&&(Math.abs(n.z)===1?hn.x+=1e-4:hn.z+=1e-4,hn.normalize(),pi.crossVectors(n,hn)),pi.normalize(),ga.crossVectors(hn,pi),s[0]=pi.x,s[4]=ga.x,s[8]=hn.x,s[1]=pi.y,s[5]=ga.y,s[9]=hn.y,s[2]=pi.z,s[6]=ga.z,s[10]=hn.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const n=t.elements,s=e.elements,a=this.elements,r=n[0],o=n[4],l=n[8],c=n[12],h=n[1],u=n[5],d=n[9],p=n[13],g=n[2],x=n[6],m=n[10],f=n[14],b=n[3],w=n[7],y=n[11],A=n[15],P=s[0],T=s[4],D=s[8],M=s[12],S=s[1],v=s[5],C=s[9],L=s[13],N=s[2],U=s[6],H=s[10],k=s[14],q=s[3],ot=s[7],tt=s[11],it=s[15];return a[0]=r*P+o*S+l*N+c*q,a[4]=r*T+o*v+l*U+c*ot,a[8]=r*D+o*C+l*H+c*tt,a[12]=r*M+o*L+l*k+c*it,a[1]=h*P+u*S+d*N+p*q,a[5]=h*T+u*v+d*U+p*ot,a[9]=h*D+u*C+d*H+p*tt,a[13]=h*M+u*L+d*k+p*it,a[2]=g*P+x*S+m*N+f*q,a[6]=g*T+x*v+m*U+f*ot,a[10]=g*D+x*C+m*H+f*tt,a[14]=g*M+x*L+m*k+f*it,a[3]=b*P+w*S+y*N+A*q,a[7]=b*T+w*v+y*U+A*ot,a[11]=b*D+w*C+y*H+A*tt,a[15]=b*M+w*L+y*k+A*it,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){const t=this.elements,e=t[0],n=t[4],s=t[8],a=t[12],r=t[1],o=t[5],l=t[9],c=t[13],h=t[2],u=t[6],d=t[10],p=t[14],g=t[3],x=t[7],m=t[11],f=t[15],b=l*p-c*d,w=o*p-c*u,y=o*d-l*u,A=r*p-c*h,P=r*d-l*h,T=r*u-o*h;return e*(x*b-m*w+f*y)-n*(g*b-m*A+f*P)+s*(g*w-x*A+f*T)-a*(g*y-x*P+m*T)}transpose(){const t=this.elements;let e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,n){const s=this.elements;return t.isVector3?(s[12]=t.x,s[13]=t.y,s[14]=t.z):(s[12]=t,s[13]=e,s[14]=n),this}invert(){const t=this.elements,e=t[0],n=t[1],s=t[2],a=t[3],r=t[4],o=t[5],l=t[6],c=t[7],h=t[8],u=t[9],d=t[10],p=t[11],g=t[12],x=t[13],m=t[14],f=t[15],b=u*m*c-x*d*c+x*l*p-o*m*p-u*l*f+o*d*f,w=g*d*c-h*m*c-g*l*p+r*m*p+h*l*f-r*d*f,y=h*x*c-g*u*c+g*o*p-r*x*p-h*o*f+r*u*f,A=g*u*l-h*x*l-g*o*d+r*x*d+h*o*m-r*u*m,P=e*b+n*w+s*y+a*A;if(P===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const T=1/P;return t[0]=b*T,t[1]=(x*d*a-u*m*a-x*s*p+n*m*p+u*s*f-n*d*f)*T,t[2]=(o*m*a-x*l*a+x*s*c-n*m*c-o*s*f+n*l*f)*T,t[3]=(u*l*a-o*d*a-u*s*c+n*d*c+o*s*p-n*l*p)*T,t[4]=w*T,t[5]=(h*m*a-g*d*a+g*s*p-e*m*p-h*s*f+e*d*f)*T,t[6]=(g*l*a-r*m*a-g*s*c+e*m*c+r*s*f-e*l*f)*T,t[7]=(r*d*a-h*l*a+h*s*c-e*d*c-r*s*p+e*l*p)*T,t[8]=y*T,t[9]=(g*u*a-h*x*a-g*n*p+e*x*p+h*n*f-e*u*f)*T,t[10]=(r*x*a-g*o*a+g*n*c-e*x*c-r*n*f+e*o*f)*T,t[11]=(h*o*a-r*u*a-h*n*c+e*u*c+r*n*p-e*o*p)*T,t[12]=A*T,t[13]=(h*x*s-g*u*s+g*n*d-e*x*d-h*n*m+e*u*m)*T,t[14]=(g*o*s-r*x*s-g*n*l+e*x*l+r*n*m-e*o*m)*T,t[15]=(r*u*s-h*o*s+h*n*l-e*u*l-r*n*d+e*o*d)*T,this}scale(t){const e=this.elements,n=t.x,s=t.y,a=t.z;return e[0]*=n,e[4]*=s,e[8]*=a,e[1]*=n,e[5]*=s,e[9]*=a,e[2]*=n,e[6]*=s,e[10]*=a,e[3]*=n,e[7]*=s,e[11]*=a,this}getMaxScaleOnAxis(){const t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],n=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],s=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,n,s))}makeTranslation(t,e,n){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,n,0,0,0,1),this}makeRotationX(t){const e=Math.cos(t),n=Math.sin(t);return this.set(1,0,0,0,0,e,-n,0,0,n,e,0,0,0,0,1),this}makeRotationY(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,0,n,0,0,1,0,0,-n,0,e,0,0,0,0,1),this}makeRotationZ(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,0,n,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){const n=Math.cos(e),s=Math.sin(e),a=1-n,r=t.x,o=t.y,l=t.z,c=a*r,h=a*o;return this.set(c*r+n,c*o-s*l,c*l+s*o,0,c*o+s*l,h*o+n,h*l-s*r,0,c*l-s*o,h*l+s*r,a*l*l+n,0,0,0,0,1),this}makeScale(t,e,n){return this.set(t,0,0,0,0,e,0,0,0,0,n,0,0,0,0,1),this}makeShear(t,e,n,s,a,r){return this.set(1,n,a,0,t,1,r,0,e,s,1,0,0,0,0,1),this}compose(t,e,n){const s=this.elements,a=e._x,r=e._y,o=e._z,l=e._w,c=a+a,h=r+r,u=o+o,d=a*c,p=a*h,g=a*u,x=r*h,m=r*u,f=o*u,b=l*c,w=l*h,y=l*u,A=n.x,P=n.y,T=n.z;return s[0]=(1-(x+f))*A,s[1]=(p+y)*A,s[2]=(g-w)*A,s[3]=0,s[4]=(p-y)*P,s[5]=(1-(d+f))*P,s[6]=(m+b)*P,s[7]=0,s[8]=(g+w)*T,s[9]=(m-b)*T,s[10]=(1-(d+x))*T,s[11]=0,s[12]=t.x,s[13]=t.y,s[14]=t.z,s[15]=1,this}decompose(t,e,n){const s=this.elements;if(t.x=s[12],t.y=s[13],t.z=s[14],this.determinant()===0)return n.set(1,1,1),e.identity(),this;let a=Ji.set(s[0],s[1],s[2]).length();const r=Ji.set(s[4],s[5],s[6]).length(),o=Ji.set(s[8],s[9],s[10]).length();this.determinant()<0&&(a=-a),Cn.copy(this);const c=1/a,h=1/r,u=1/o;return Cn.elements[0]*=c,Cn.elements[1]*=c,Cn.elements[2]*=c,Cn.elements[4]*=h,Cn.elements[5]*=h,Cn.elements[6]*=h,Cn.elements[8]*=u,Cn.elements[9]*=u,Cn.elements[10]*=u,e.setFromRotationMatrix(Cn),n.x=a,n.y=r,n.z=o,this}makePerspective(t,e,n,s,a,r,o=Hn,l=!1){const c=this.elements,h=2*a/(e-t),u=2*a/(n-s),d=(e+t)/(e-t),p=(n+s)/(n-s);let g,x;if(l)g=a/(r-a),x=r*a/(r-a);else if(o===Hn)g=-(r+a)/(r-a),x=-2*r*a/(r-a);else if(o===Ka)g=-r/(r-a),x=-r*a/(r-a);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return c[0]=h,c[4]=0,c[8]=d,c[12]=0,c[1]=0,c[5]=u,c[9]=p,c[13]=0,c[2]=0,c[6]=0,c[10]=g,c[14]=x,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(t,e,n,s,a,r,o=Hn,l=!1){const c=this.elements,h=2/(e-t),u=2/(n-s),d=-(e+t)/(e-t),p=-(n+s)/(n-s);let g,x;if(l)g=1/(r-a),x=r/(r-a);else if(o===Hn)g=-2/(r-a),x=-(r+a)/(r-a);else if(o===Ka)g=-1/(r-a),x=-a/(r-a);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return c[0]=h,c[4]=0,c[8]=0,c[12]=d,c[1]=0,c[5]=u,c[9]=0,c[13]=p,c[2]=0,c[6]=0,c[10]=g,c[14]=x,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(t){const e=this.elements,n=t.elements;for(let s=0;s<16;s++)if(e[s]!==n[s])return!1;return!0}fromArray(t,e=0){for(let n=0;n<16;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){const n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t[e+9]=n[9],t[e+10]=n[10],t[e+11]=n[11],t[e+12]=n[12],t[e+13]=n[13],t[e+14]=n[14],t[e+15]=n[15],t}}const Ji=new F,Cn=new jt,Pd=new F(0,0,0),Id=new F(1,1,1),pi=new F,ga=new F,hn=new F,sc=new jt,ac=new $e;class Be{constructor(t=0,e=0,n=0,s=Be.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=n,this._order=s}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,n,s=this._order){return this._x=t,this._y=e,this._z=n,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,n=!0){const s=t.elements,a=s[0],r=s[4],o=s[8],l=s[1],c=s[5],h=s[9],u=s[2],d=s[6],p=s[10];switch(e){case"XYZ":this._y=Math.asin(Kt(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-h,p),this._z=Math.atan2(-r,a)):(this._x=Math.atan2(d,c),this._z=0);break;case"YXZ":this._x=Math.asin(-Kt(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(o,p),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-u,a),this._z=0);break;case"ZXY":this._x=Math.asin(Kt(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-u,p),this._z=Math.atan2(-r,c)):(this._y=0,this._z=Math.atan2(l,a));break;case"ZYX":this._y=Math.asin(-Kt(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(d,p),this._z=Math.atan2(l,a)):(this._x=0,this._z=Math.atan2(-r,c));break;case"YZX":this._z=Math.asin(Kt(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-h,c),this._y=Math.atan2(-u,a)):(this._x=0,this._y=Math.atan2(o,p));break;case"XZY":this._z=Math.asin(-Kt(r,-1,1)),Math.abs(r)<.9999999?(this._x=Math.atan2(d,c),this._y=Math.atan2(o,a)):(this._x=Math.atan2(-h,p),this._y=0);break;default:Ft("Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,n===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,n){return sc.makeRotationFromQuaternion(t),this.setFromRotationMatrix(sc,e,n)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return ac.setFromEuler(this),this.setFromQuaternion(ac,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Be.DEFAULT_ORDER="XYZ";class Rh{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}}let Ld=0;const rc=new F,ji=new $e,jn=new jt,xa=new F,Is=new F,Dd=new F,Fd=new $e,oc=new F(1,0,0),lc=new F(0,1,0),cc=new F(0,0,1),hc={type:"added"},Nd={type:"removed"},Qi={type:"childadded",child:null},Rr={type:"childremoved",child:null};class Oe extends Es{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Ld++}),this.uuid=Xn(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Oe.DEFAULT_UP.clone();const t=new F,e=new Be,n=new $e,s=new F(1,1,1);function a(){n.setFromEuler(e,!1)}function r(){e.setFromQuaternion(n,void 0,!1)}e._onChange(a),n._onChange(r),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new jt},normalMatrix:{value:new Yt}}),this.matrix=new jt,this.matrixWorld=new jt,this.matrixAutoUpdate=Oe.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Oe.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Rh,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return ji.setFromAxisAngle(t,e),this.quaternion.multiply(ji),this}rotateOnWorldAxis(t,e){return ji.setFromAxisAngle(t,e),this.quaternion.premultiply(ji),this}rotateX(t){return this.rotateOnAxis(oc,t)}rotateY(t){return this.rotateOnAxis(lc,t)}rotateZ(t){return this.rotateOnAxis(cc,t)}translateOnAxis(t,e){return rc.copy(t).applyQuaternion(this.quaternion),this.position.add(rc.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(oc,t)}translateY(t){return this.translateOnAxis(lc,t)}translateZ(t){return this.translateOnAxis(cc,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(jn.copy(this.matrixWorld).invert())}lookAt(t,e,n){t.isVector3?xa.copy(t):xa.set(t,e,n);const s=this.parent;this.updateWorldMatrix(!0,!1),Is.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?jn.lookAt(Is,xa,this.up):jn.lookAt(xa,Is,this.up),this.quaternion.setFromRotationMatrix(jn),s&&(jn.extractRotation(s.matrixWorld),ji.setFromRotationMatrix(jn),this.quaternion.premultiply(ji.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(Qt("Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(hc),Qi.child=t,this.dispatchEvent(Qi),Qi.child=null):Qt("Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(Nd),Rr.child=t,this.dispatchEvent(Rr),Rr.child=null),this}removeFromParent(){const t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),jn.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),jn.multiply(t.parent.matrixWorld)),t.applyMatrix4(jn),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(hc),Qi.child=t,this.dispatchEvent(Qi),Qi.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let n=0,s=this.children.length;n<s;n++){const r=this.children[n].getObjectByProperty(t,e);if(r!==void 0)return r}}getObjectsByProperty(t,e,n=[]){this[t]===e&&n.push(this);const s=this.children;for(let a=0,r=s.length;a<r;a++)s[a].getObjectsByProperty(t,e,n);return n}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Is,t,Dd),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Is,Fd,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);const e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}traverse(t){t(this);const e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);const e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].traverseVisible(t)}traverseAncestors(t){const e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);const e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].updateMatrixWorld(t)}updateWorldMatrix(t,e){const n=this.parent;if(t===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),e===!0){const s=this.children;for(let a=0,r=s.length;a<r;a++)s[a].updateWorldMatrix(!1,!0)}}toJSON(t){const e=t===void 0||typeof t=="string",n={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const s={};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.castShadow===!0&&(s.castShadow=!0),this.receiveShadow===!0&&(s.receiveShadow=!0),this.visible===!1&&(s.visible=!1),this.frustumCulled===!1&&(s.frustumCulled=!1),this.renderOrder!==0&&(s.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(s.matrixAutoUpdate=!1),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.geometryInfo=this._geometryInfo.map(o=>({...o,boundingBox:o.boundingBox?o.boundingBox.toJSON():void 0,boundingSphere:o.boundingSphere?o.boundingSphere.toJSON():void 0})),s.instanceInfo=this._instanceInfo.map(o=>({...o})),s.availableInstanceIds=this._availableInstanceIds.slice(),s.availableGeometryIds=this._availableGeometryIds.slice(),s.nextIndexStart=this._nextIndexStart,s.nextVertexStart=this._nextVertexStart,s.geometryCount=this._geometryCount,s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.matricesTexture=this._matricesTexture.toJSON(t),s.indirectTexture=this._indirectTexture.toJSON(t),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(s.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(s.boundingBox=this.boundingBox.toJSON()));function a(o,l){return o[l.uuid]===void 0&&(o[l.uuid]=l.toJSON(t)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=a(t.geometries,this.geometry);const o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){const l=o.shapes;if(Array.isArray(l))for(let c=0,h=l.length;c<h;c++){const u=l[c];a(t.shapes,u)}else a(t.shapes,l)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(a(t.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const o=[];for(let l=0,c=this.material.length;l<c;l++)o.push(a(t.materials,this.material[l]));s.material=o}else s.material=a(t.materials,this.material);if(this.children.length>0){s.children=[];for(let o=0;o<this.children.length;o++)s.children.push(this.children[o].toJSON(t).object)}if(this.animations.length>0){s.animations=[];for(let o=0;o<this.animations.length;o++){const l=this.animations[o];s.animations.push(a(t.animations,l))}}if(e){const o=r(t.geometries),l=r(t.materials),c=r(t.textures),h=r(t.images),u=r(t.shapes),d=r(t.skeletons),p=r(t.animations),g=r(t.nodes);o.length>0&&(n.geometries=o),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),h.length>0&&(n.images=h),u.length>0&&(n.shapes=u),d.length>0&&(n.skeletons=d),p.length>0&&(n.animations=p),g.length>0&&(n.nodes=g)}return n.object=s,n;function r(o){const l=[];for(const c in o){const h=o[c];delete h.metadata,l.push(h)}return l}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let n=0;n<t.children.length;n++){const s=t.children[n];this.add(s.clone())}return this}}Oe.DEFAULT_UP=new F(0,1,0);Oe.DEFAULT_MATRIX_AUTO_UPDATE=!0;Oe.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const Rn=new F,Qn=new F,Pr=new F,ti=new F,ts=new F,es=new F,uc=new F,Ir=new F,Lr=new F,Dr=new F,Fr=new Ee,Nr=new Ee,Ur=new Ee;class Sn{constructor(t=new F,e=new F,n=new F){this.a=t,this.b=e,this.c=n}static getNormal(t,e,n,s){s.subVectors(n,e),Rn.subVectors(t,e),s.cross(Rn);const a=s.lengthSq();return a>0?s.multiplyScalar(1/Math.sqrt(a)):s.set(0,0,0)}static getBarycoord(t,e,n,s,a){Rn.subVectors(s,e),Qn.subVectors(n,e),Pr.subVectors(t,e);const r=Rn.dot(Rn),o=Rn.dot(Qn),l=Rn.dot(Pr),c=Qn.dot(Qn),h=Qn.dot(Pr),u=r*c-o*o;if(u===0)return a.set(0,0,0),null;const d=1/u,p=(c*l-o*h)*d,g=(r*h-o*l)*d;return a.set(1-p-g,g,p)}static containsPoint(t,e,n,s){return this.getBarycoord(t,e,n,s,ti)===null?!1:ti.x>=0&&ti.y>=0&&ti.x+ti.y<=1}static getInterpolation(t,e,n,s,a,r,o,l){return this.getBarycoord(t,e,n,s,ti)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(a,ti.x),l.addScaledVector(r,ti.y),l.addScaledVector(o,ti.z),l)}static getInterpolatedAttribute(t,e,n,s,a,r){return Fr.setScalar(0),Nr.setScalar(0),Ur.setScalar(0),Fr.fromBufferAttribute(t,e),Nr.fromBufferAttribute(t,n),Ur.fromBufferAttribute(t,s),r.setScalar(0),r.addScaledVector(Fr,a.x),r.addScaledVector(Nr,a.y),r.addScaledVector(Ur,a.z),r}static isFrontFacing(t,e,n,s){return Rn.subVectors(n,e),Qn.subVectors(t,e),Rn.cross(Qn).dot(s)<0}set(t,e,n){return this.a.copy(t),this.b.copy(e),this.c.copy(n),this}setFromPointsAndIndices(t,e,n,s){return this.a.copy(t[e]),this.b.copy(t[n]),this.c.copy(t[s]),this}setFromAttributeAndIndices(t,e,n,s){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,n),this.c.fromBufferAttribute(t,s),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return Rn.subVectors(this.c,this.b),Qn.subVectors(this.a,this.b),Rn.cross(Qn).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return Sn.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return Sn.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,n,s,a){return Sn.getInterpolation(t,this.a,this.b,this.c,e,n,s,a)}containsPoint(t){return Sn.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return Sn.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){const n=this.a,s=this.b,a=this.c;let r,o;ts.subVectors(s,n),es.subVectors(a,n),Ir.subVectors(t,n);const l=ts.dot(Ir),c=es.dot(Ir);if(l<=0&&c<=0)return e.copy(n);Lr.subVectors(t,s);const h=ts.dot(Lr),u=es.dot(Lr);if(h>=0&&u<=h)return e.copy(s);const d=l*u-h*c;if(d<=0&&l>=0&&h<=0)return r=l/(l-h),e.copy(n).addScaledVector(ts,r);Dr.subVectors(t,a);const p=ts.dot(Dr),g=es.dot(Dr);if(g>=0&&p<=g)return e.copy(a);const x=p*c-l*g;if(x<=0&&c>=0&&g<=0)return o=c/(c-g),e.copy(n).addScaledVector(es,o);const m=h*g-p*u;if(m<=0&&u-h>=0&&p-g>=0)return uc.subVectors(a,s),o=(u-h)/(u-h+(p-g)),e.copy(s).addScaledVector(uc,o);const f=1/(m+x+d);return r=x*f,o=d*f,e.copy(n).addScaledVector(ts,r).addScaledVector(es,o)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}}const Ph={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},mi={h:0,s:0,l:0},_a={h:0,s:0,l:0};function Or(i,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?i+(t-i)*6*e:e<1/2?t:e<2/3?i+(t-i)*6*(2/3-e):i}class Ot{constructor(t,e,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,n)}set(t,e,n){if(e===void 0&&n===void 0){const s=t;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(t,e,n);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=_n){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,te.colorSpaceToWorking(this,e),this}setRGB(t,e,n,s=te.workingColorSpace){return this.r=t,this.g=e,this.b=n,te.colorSpaceToWorking(this,s),this}setHSL(t,e,n,s=te.workingColorSpace){if(t=Al(t,1),e=Kt(e,0,1),n=Kt(n,0,1),e===0)this.r=this.g=this.b=n;else{const a=n<=.5?n*(1+e):n+e-n*e,r=2*n-a;this.r=Or(r,a,t+1/3),this.g=Or(r,a,t),this.b=Or(r,a,t-1/3)}return te.colorSpaceToWorking(this,s),this}setStyle(t,e=_n){function n(a){a!==void 0&&parseFloat(a)<1&&Ft("Color: Alpha component of "+t+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(t)){let a;const r=s[1],o=s[2];switch(r){case"rgb":case"rgba":if(a=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(a[4]),this.setRGB(Math.min(255,parseInt(a[1],10))/255,Math.min(255,parseInt(a[2],10))/255,Math.min(255,parseInt(a[3],10))/255,e);if(a=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(a[4]),this.setRGB(Math.min(100,parseInt(a[1],10))/100,Math.min(100,parseInt(a[2],10))/100,Math.min(100,parseInt(a[3],10))/100,e);break;case"hsl":case"hsla":if(a=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(a[4]),this.setHSL(parseFloat(a[1])/360,parseFloat(a[2])/100,parseFloat(a[3])/100,e);break;default:Ft("Color: Unknown color model "+t)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(t)){const a=s[1],r=a.length;if(r===3)return this.setRGB(parseInt(a.charAt(0),16)/15,parseInt(a.charAt(1),16)/15,parseInt(a.charAt(2),16)/15,e);if(r===6)return this.setHex(parseInt(a,16),e);Ft("Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=_n){const n=Ph[t.toLowerCase()];return n!==void 0?this.setHex(n,e):Ft("Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=ri(t.r),this.g=ri(t.g),this.b=ri(t.b),this}copyLinearToSRGB(t){return this.r=xs(t.r),this.g=xs(t.g),this.b=xs(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=_n){return te.workingToColorSpace(Ye.copy(this),t),Math.round(Kt(Ye.r*255,0,255))*65536+Math.round(Kt(Ye.g*255,0,255))*256+Math.round(Kt(Ye.b*255,0,255))}getHexString(t=_n){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=te.workingColorSpace){te.workingToColorSpace(Ye.copy(this),e);const n=Ye.r,s=Ye.g,a=Ye.b,r=Math.max(n,s,a),o=Math.min(n,s,a);let l,c;const h=(o+r)/2;if(o===r)l=0,c=0;else{const u=r-o;switch(c=h<=.5?u/(r+o):u/(2-r-o),r){case n:l=(s-a)/u+(s<a?6:0);break;case s:l=(a-n)/u+2;break;case a:l=(n-s)/u+4;break}l/=6}return t.h=l,t.s=c,t.l=h,t}getRGB(t,e=te.workingColorSpace){return te.workingToColorSpace(Ye.copy(this),e),t.r=Ye.r,t.g=Ye.g,t.b=Ye.b,t}getStyle(t=_n){te.workingToColorSpace(Ye.copy(this),t);const e=Ye.r,n=Ye.g,s=Ye.b;return t!==_n?`color(${t} ${e.toFixed(3)} ${n.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(n*255)},${Math.round(s*255)})`}offsetHSL(t,e,n){return this.getHSL(mi),this.setHSL(mi.h+t,mi.s+e,mi.l+n)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,n){return this.r=t.r+(e.r-t.r)*n,this.g=t.g+(e.g-t.g)*n,this.b=t.b+(e.b-t.b)*n,this}lerpHSL(t,e){this.getHSL(mi),t.getHSL(_a);const n=Zs(mi.h,_a.h,e),s=Zs(mi.s,_a.s,e),a=Zs(mi.l,_a.l,e);return this.setHSL(n,s,a),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){const e=this.r,n=this.g,s=this.b,a=t.elements;return this.r=a[0]*e+a[3]*n+a[6]*s,this.g=a[1]*e+a[4]*n+a[7]*s,this.b=a[2]*e+a[5]*n+a[8]*s,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Ye=new Ot;Ot.NAMES=Ph;let Ud=0;class bi extends Es{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Ud++}),this.uuid=Xn(),this.name="",this.type="Material",this.blending=gs,this.side=wi,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=lo,this.blendDst=co,this.blendEquation=Oi,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Ot(0,0,0),this.blendAlpha=0,this.depthFunc=_s,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Jl,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Yi,this.stencilZFail=Yi,this.stencilZPass=Yi,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(const e in t){const n=t[e];if(n===void 0){Ft(`Material: parameter '${e}' has value of undefined.`);continue}const s=this[e];if(s===void 0){Ft(`Material: '${e}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(n):s&&s.isVector3&&n&&n.isVector3?s.copy(n):this[e]=n}}toJSON(t){const e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});const n={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(n.sheenColorMap=this.sheenColorMap.toJSON(t).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(n.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(t).uuid),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(t).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(t).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(t).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(t).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(t).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==gs&&(n.blending=this.blending),this.side!==wi&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==lo&&(n.blendSrc=this.blendSrc),this.blendDst!==co&&(n.blendDst=this.blendDst),this.blendEquation!==Oi&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==_s&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Jl&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Yi&&(n.stencilFail=this.stencilFail),this.stencilZFail!==Yi&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==Yi&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.allowOverride===!1&&(n.allowOverride=!1),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function s(a){const r=[];for(const o in a){const l=a[o];delete l.metadata,r.push(l)}return r}if(e){const a=s(t.textures),r=s(t.images);a.length>0&&(n.textures=a),r.length>0&&(n.images=r)}return n}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;const e=t.clippingPlanes;let n=null;if(e!==null){const s=e.length;n=new Array(s);for(let a=0;a!==s;++a)n[a]=e[a].clone()}return this.clippingPlanes=n,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.allowOverride=t.allowOverride,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}}class Ue extends bi{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Ot(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Be,this.combine=cr,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}}const Re=new F,va=new ut;let Od=0;class bn{constructor(t,e,n=!1){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:Od++}),this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=n,this.usage=tl,this.updateRanges=[],this.gpuType=Nn,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,n){t*=this.itemSize,n*=e.itemSize;for(let s=0,a=this.itemSize;s<a;s++)this.array[t+s]=e.array[n+s];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,n=this.count;e<n;e++)va.fromBufferAttribute(this,e),va.applyMatrix3(t),this.setXY(e,va.x,va.y);else if(this.itemSize===3)for(let e=0,n=this.count;e<n;e++)Re.fromBufferAttribute(this,e),Re.applyMatrix3(t),this.setXYZ(e,Re.x,Re.y,Re.z);return this}applyMatrix4(t){for(let e=0,n=this.count;e<n;e++)Re.fromBufferAttribute(this,e),Re.applyMatrix4(t),this.setXYZ(e,Re.x,Re.y,Re.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)Re.fromBufferAttribute(this,e),Re.applyNormalMatrix(t),this.setXYZ(e,Re.x,Re.y,Re.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)Re.fromBufferAttribute(this,e),Re.transformDirection(t),this.setXYZ(e,Re.x,Re.y,Re.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let n=this.array[t*this.itemSize+e];return this.normalized&&(n=In(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=fe(n,this.array)),this.array[t*this.itemSize+e]=n,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=In(e,this.array)),e}setX(t,e){return this.normalized&&(e=fe(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=In(e,this.array)),e}setY(t,e){return this.normalized&&(e=fe(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=In(e,this.array)),e}setZ(t,e){return this.normalized&&(e=fe(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=In(e,this.array)),e}setW(t,e){return this.normalized&&(e=fe(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,n){return t*=this.itemSize,this.normalized&&(e=fe(e,this.array),n=fe(n,this.array)),this.array[t+0]=e,this.array[t+1]=n,this}setXYZ(t,e,n,s){return t*=this.itemSize,this.normalized&&(e=fe(e,this.array),n=fe(n,this.array),s=fe(s,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=s,this}setXYZW(t,e,n,s,a){return t*=this.itemSize,this.normalized&&(e=fe(e,this.array),n=fe(n,this.array),s=fe(s,this.array),a=fe(a,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=s,this.array[t+3]=a,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==tl&&(t.usage=this.usage),t}}class Ih extends bn{constructor(t,e,n){super(new Uint16Array(t),e,n)}}class Lh extends bn{constructor(t,e,n){super(new Uint32Array(t),e,n)}}class Ne extends bn{constructor(t,e,n){super(new Float32Array(t),e,n)}}let Bd=0;const gn=new jt,Br=new Oe,ns=new F,un=new Wi,Ls=new Wi,He=new F;class on extends Es{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Bd++}),this.uuid=Xn(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(Ah(t)?Lh:Ih)(t,1):this.index=t,this}setIndirect(t,e=0){return this.indirect=t,this.indirectOffset=e,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,n=0){this.groups.push({start:t,count:e,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){const e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const a=new Yt().getNormalMatrix(t);n.applyNormalMatrix(a),n.needsUpdate=!0}const s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(t),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return gn.makeRotationFromQuaternion(t),this.applyMatrix4(gn),this}rotateX(t){return gn.makeRotationX(t),this.applyMatrix4(gn),this}rotateY(t){return gn.makeRotationY(t),this.applyMatrix4(gn),this}rotateZ(t){return gn.makeRotationZ(t),this.applyMatrix4(gn),this}translate(t,e,n){return gn.makeTranslation(t,e,n),this.applyMatrix4(gn),this}scale(t,e,n){return gn.makeScale(t,e,n),this.applyMatrix4(gn),this}lookAt(t){return Br.lookAt(t),Br.updateMatrix(),this.applyMatrix4(Br.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(ns).negate(),this.translate(ns.x,ns.y,ns.z),this}setFromPoints(t){const e=this.getAttribute("position");if(e===void 0){const n=[];for(let s=0,a=t.length;s<a;s++){const r=t[s];n.push(r.x,r.y,r.z||0)}this.setAttribute("position",new Ne(n,3))}else{const n=Math.min(t.length,e.count);for(let s=0;s<n;s++){const a=t[s];e.setXYZ(s,a.x,a.y,a.z||0)}t.length>e.count&&Ft("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),e.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Wi);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){Qt("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new F(-1/0,-1/0,-1/0),new F(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let n=0,s=e.length;n<s;n++){const a=e[n];un.setFromBufferAttribute(a),this.morphTargetsRelative?(He.addVectors(this.boundingBox.min,un.min),this.boundingBox.expandByPoint(He),He.addVectors(this.boundingBox.max,un.max),this.boundingBox.expandByPoint(He)):(this.boundingBox.expandByPoint(un.min),this.boundingBox.expandByPoint(un.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&Qt('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new ra);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){Qt("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new F,1/0);return}if(t){const n=this.boundingSphere.center;if(un.setFromBufferAttribute(t),e)for(let a=0,r=e.length;a<r;a++){const o=e[a];Ls.setFromBufferAttribute(o),this.morphTargetsRelative?(He.addVectors(un.min,Ls.min),un.expandByPoint(He),He.addVectors(un.max,Ls.max),un.expandByPoint(He)):(un.expandByPoint(Ls.min),un.expandByPoint(Ls.max))}un.getCenter(n);let s=0;for(let a=0,r=t.count;a<r;a++)He.fromBufferAttribute(t,a),s=Math.max(s,n.distanceToSquared(He));if(e)for(let a=0,r=e.length;a<r;a++){const o=e[a],l=this.morphTargetsRelative;for(let c=0,h=o.count;c<h;c++)He.fromBufferAttribute(o,c),l&&(ns.fromBufferAttribute(t,c),He.add(ns)),s=Math.max(s,n.distanceToSquared(He))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&Qt('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){Qt("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=e.position,s=e.normal,a=e.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new bn(new Float32Array(4*n.count),4));const r=this.getAttribute("tangent"),o=[],l=[];for(let D=0;D<n.count;D++)o[D]=new F,l[D]=new F;const c=new F,h=new F,u=new F,d=new ut,p=new ut,g=new ut,x=new F,m=new F;function f(D,M,S){c.fromBufferAttribute(n,D),h.fromBufferAttribute(n,M),u.fromBufferAttribute(n,S),d.fromBufferAttribute(a,D),p.fromBufferAttribute(a,M),g.fromBufferAttribute(a,S),h.sub(c),u.sub(c),p.sub(d),g.sub(d);const v=1/(p.x*g.y-g.x*p.y);isFinite(v)&&(x.copy(h).multiplyScalar(g.y).addScaledVector(u,-p.y).multiplyScalar(v),m.copy(u).multiplyScalar(p.x).addScaledVector(h,-g.x).multiplyScalar(v),o[D].add(x),o[M].add(x),o[S].add(x),l[D].add(m),l[M].add(m),l[S].add(m))}let b=this.groups;b.length===0&&(b=[{start:0,count:t.count}]);for(let D=0,M=b.length;D<M;++D){const S=b[D],v=S.start,C=S.count;for(let L=v,N=v+C;L<N;L+=3)f(t.getX(L+0),t.getX(L+1),t.getX(L+2))}const w=new F,y=new F,A=new F,P=new F;function T(D){A.fromBufferAttribute(s,D),P.copy(A);const M=o[D];w.copy(M),w.sub(A.multiplyScalar(A.dot(M))).normalize(),y.crossVectors(P,M);const v=y.dot(l[D])<0?-1:1;r.setXYZW(D,w.x,w.y,w.z,v)}for(let D=0,M=b.length;D<M;++D){const S=b[D],v=S.start,C=S.count;for(let L=v,N=v+C;L<N;L+=3)T(t.getX(L+0)),T(t.getX(L+1)),T(t.getX(L+2))}}computeVertexNormals(){const t=this.index,e=this.getAttribute("position");if(e!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new bn(new Float32Array(e.count*3),3),this.setAttribute("normal",n);else for(let d=0,p=n.count;d<p;d++)n.setXYZ(d,0,0,0);const s=new F,a=new F,r=new F,o=new F,l=new F,c=new F,h=new F,u=new F;if(t)for(let d=0,p=t.count;d<p;d+=3){const g=t.getX(d+0),x=t.getX(d+1),m=t.getX(d+2);s.fromBufferAttribute(e,g),a.fromBufferAttribute(e,x),r.fromBufferAttribute(e,m),h.subVectors(r,a),u.subVectors(s,a),h.cross(u),o.fromBufferAttribute(n,g),l.fromBufferAttribute(n,x),c.fromBufferAttribute(n,m),o.add(h),l.add(h),c.add(h),n.setXYZ(g,o.x,o.y,o.z),n.setXYZ(x,l.x,l.y,l.z),n.setXYZ(m,c.x,c.y,c.z)}else for(let d=0,p=e.count;d<p;d+=3)s.fromBufferAttribute(e,d+0),a.fromBufferAttribute(e,d+1),r.fromBufferAttribute(e,d+2),h.subVectors(r,a),u.subVectors(s,a),h.cross(u),n.setXYZ(d+0,h.x,h.y,h.z),n.setXYZ(d+1,h.x,h.y,h.z),n.setXYZ(d+2,h.x,h.y,h.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){const t=this.attributes.normal;for(let e=0,n=t.count;e<n;e++)He.fromBufferAttribute(t,e),He.normalize(),t.setXYZ(e,He.x,He.y,He.z)}toNonIndexed(){function t(o,l){const c=o.array,h=o.itemSize,u=o.normalized,d=new c.constructor(l.length*h);let p=0,g=0;for(let x=0,m=l.length;x<m;x++){o.isInterleavedBufferAttribute?p=l[x]*o.data.stride+o.offset:p=l[x]*h;for(let f=0;f<h;f++)d[g++]=c[p++]}return new bn(d,h,u)}if(this.index===null)return Ft("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const e=new on,n=this.index.array,s=this.attributes;for(const o in s){const l=s[o],c=t(l,n);e.setAttribute(o,c)}const a=this.morphAttributes;for(const o in a){const l=[],c=a[o];for(let h=0,u=c.length;h<u;h++){const d=c[h],p=t(d,n);l.push(p)}e.morphAttributes[o]=l}e.morphTargetsRelative=this.morphTargetsRelative;const r=this.groups;for(let o=0,l=r.length;o<l;o++){const c=r[o];e.addGroup(c.start,c.count,c.materialIndex)}return e}toJSON(){const t={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(t[c]=l[c]);return t}t.data={attributes:{}};const e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});const n=this.attributes;for(const l in n){const c=n[l];t.data.attributes[l]=c.toJSON(t.data)}const s={};let a=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],h=[];for(let u=0,d=c.length;u<d;u++){const p=c[u];h.push(p.toJSON(t.data))}h.length>0&&(s[l]=h,a=!0)}a&&(t.data.morphAttributes=s,t.data.morphTargetsRelative=this.morphTargetsRelative);const r=this.groups;r.length>0&&(t.data.groups=JSON.parse(JSON.stringify(r)));const o=this.boundingSphere;return o!==null&&(t.data.boundingSphere=o.toJSON()),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const e={};this.name=t.name;const n=t.index;n!==null&&this.setIndex(n.clone());const s=t.attributes;for(const c in s){const h=s[c];this.setAttribute(c,h.clone(e))}const a=t.morphAttributes;for(const c in a){const h=[],u=a[c];for(let d=0,p=u.length;d<p;d++)h.push(u[d].clone(e));this.morphAttributes[c]=h}this.morphTargetsRelative=t.morphTargetsRelative;const r=t.groups;for(let c=0,h=r.length;c<h;c++){const u=r[c];this.addGroup(u.start,u.count,u.materialIndex)}const o=t.boundingBox;o!==null&&(this.boundingBox=o.clone());const l=t.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const dc=new jt,Ri=new Rd,Ma=new ra,fc=new F,ya=new F,Sa=new F,wa=new F,kr=new F,ba=new F,pc=new F,Ea=new F;class nt extends Oe{constructor(t=new on,e=new Ue){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){const e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){const s=e[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let a=0,r=s.length;a<r;a++){const o=s[a].name||String(a);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=a}}}}getVertexPosition(t,e){const n=this.geometry,s=n.attributes.position,a=n.morphAttributes.position,r=n.morphTargetsRelative;e.fromBufferAttribute(s,t);const o=this.morphTargetInfluences;if(a&&o){ba.set(0,0,0);for(let l=0,c=a.length;l<c;l++){const h=o[l],u=a[l];h!==0&&(kr.fromBufferAttribute(u,t),r?ba.addScaledVector(kr,h):ba.addScaledVector(kr.sub(e),h))}e.add(ba)}return e}raycast(t,e){const n=this.geometry,s=this.material,a=this.matrixWorld;s!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),Ma.copy(n.boundingSphere),Ma.applyMatrix4(a),Ri.copy(t.ray).recast(t.near),!(Ma.containsPoint(Ri.origin)===!1&&(Ri.intersectSphere(Ma,fc)===null||Ri.origin.distanceToSquared(fc)>(t.far-t.near)**2))&&(dc.copy(a).invert(),Ri.copy(t.ray).applyMatrix4(dc),!(n.boundingBox!==null&&Ri.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(t,e,Ri)))}_computeIntersections(t,e,n){let s;const a=this.geometry,r=this.material,o=a.index,l=a.attributes.position,c=a.attributes.uv,h=a.attributes.uv1,u=a.attributes.normal,d=a.groups,p=a.drawRange;if(o!==null)if(Array.isArray(r))for(let g=0,x=d.length;g<x;g++){const m=d[g],f=r[m.materialIndex],b=Math.max(m.start,p.start),w=Math.min(o.count,Math.min(m.start+m.count,p.start+p.count));for(let y=b,A=w;y<A;y+=3){const P=o.getX(y),T=o.getX(y+1),D=o.getX(y+2);s=Ta(this,f,t,n,c,h,u,P,T,D),s&&(s.faceIndex=Math.floor(y/3),s.face.materialIndex=m.materialIndex,e.push(s))}}else{const g=Math.max(0,p.start),x=Math.min(o.count,p.start+p.count);for(let m=g,f=x;m<f;m+=3){const b=o.getX(m),w=o.getX(m+1),y=o.getX(m+2);s=Ta(this,r,t,n,c,h,u,b,w,y),s&&(s.faceIndex=Math.floor(m/3),e.push(s))}}else if(l!==void 0)if(Array.isArray(r))for(let g=0,x=d.length;g<x;g++){const m=d[g],f=r[m.materialIndex],b=Math.max(m.start,p.start),w=Math.min(l.count,Math.min(m.start+m.count,p.start+p.count));for(let y=b,A=w;y<A;y+=3){const P=y,T=y+1,D=y+2;s=Ta(this,f,t,n,c,h,u,P,T,D),s&&(s.faceIndex=Math.floor(y/3),s.face.materialIndex=m.materialIndex,e.push(s))}}else{const g=Math.max(0,p.start),x=Math.min(l.count,p.start+p.count);for(let m=g,f=x;m<f;m+=3){const b=m,w=m+1,y=m+2;s=Ta(this,r,t,n,c,h,u,b,w,y),s&&(s.faceIndex=Math.floor(m/3),e.push(s))}}}}function kd(i,t,e,n,s,a,r,o){let l;if(t.side===rn?l=n.intersectTriangle(r,a,s,!0,o):l=n.intersectTriangle(s,a,r,t.side===wi,o),l===null)return null;Ea.copy(o),Ea.applyMatrix4(i.matrixWorld);const c=e.ray.origin.distanceTo(Ea);return c<e.near||c>e.far?null:{distance:c,point:Ea.clone(),object:i}}function Ta(i,t,e,n,s,a,r,o,l,c){i.getVertexPosition(o,ya),i.getVertexPosition(l,Sa),i.getVertexPosition(c,wa);const h=kd(i,t,e,n,ya,Sa,wa,pc);if(h){const u=new F;Sn.getBarycoord(pc,ya,Sa,wa,u),s&&(h.uv=Sn.getInterpolatedAttribute(s,o,l,c,u,new ut)),a&&(h.uv1=Sn.getInterpolatedAttribute(a,o,l,c,u,new ut)),r&&(h.normal=Sn.getInterpolatedAttribute(r,o,l,c,u,new F),h.normal.dot(n.direction)>0&&h.normal.multiplyScalar(-1));const d={a:o,b:l,c,normal:new F,materialIndex:0};Sn.getNormal(ya,Sa,wa,d.normal),h.face=d,h.barycoord=u}return h}class ce extends on{constructor(t=1,e=1,n=1,s=1,a=1,r=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:n,widthSegments:s,heightSegments:a,depthSegments:r};const o=this;s=Math.floor(s),a=Math.floor(a),r=Math.floor(r);const l=[],c=[],h=[],u=[];let d=0,p=0;g("z","y","x",-1,-1,n,e,t,r,a,0),g("z","y","x",1,-1,n,e,-t,r,a,1),g("x","z","y",1,1,t,n,e,s,r,2),g("x","z","y",1,-1,t,n,-e,s,r,3),g("x","y","z",1,-1,t,e,n,s,a,4),g("x","y","z",-1,-1,t,e,-n,s,a,5),this.setIndex(l),this.setAttribute("position",new Ne(c,3)),this.setAttribute("normal",new Ne(h,3)),this.setAttribute("uv",new Ne(u,2));function g(x,m,f,b,w,y,A,P,T,D,M){const S=y/T,v=A/D,C=y/2,L=A/2,N=P/2,U=T+1,H=D+1;let k=0,q=0;const ot=new F;for(let tt=0;tt<H;tt++){const it=tt*v-L;for(let Gt=0;Gt<U;Gt++){const zt=Gt*S-C;ot[x]=zt*b,ot[m]=it*w,ot[f]=N,c.push(ot.x,ot.y,ot.z),ot[x]=0,ot[m]=0,ot[f]=P>0?1:-1,h.push(ot.x,ot.y,ot.z),u.push(Gt/T),u.push(1-tt/D),k+=1}}for(let tt=0;tt<D;tt++)for(let it=0;it<T;it++){const Gt=d+it+U*tt,zt=d+it+U*(tt+1),ae=d+(it+1)+U*(tt+1),ne=d+(it+1)+U*tt;l.push(Gt,zt,ne),l.push(zt,ae,ne),q+=6}o.addGroup(p,q,M),p+=q,d+=k}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new ce(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}}function Ss(i){const t={};for(const e in i){t[e]={};for(const n in i[e]){const s=i[e][n];s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)?s.isRenderTargetTexture?(Ft("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][n]=null):t[e][n]=s.clone():Array.isArray(s)?t[e][n]=s.slice():t[e][n]=s}}return t}function tn(i){const t={};for(let e=0;e<i.length;e++){const n=Ss(i[e]);for(const s in n)t[s]=n[s]}return t}function zd(i){const t=[];for(let e=0;e<i.length;e++)t.push(i[e].clone());return t}function Dh(i){const t=i.getRenderTarget();return t===null?i.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:te.workingColorSpace}const Hd={clone:Ss,merge:tn};var Gd=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Vd=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Tn extends bi{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Gd,this.fragmentShader=Vd,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=Ss(t.uniforms),this.uniformsGroups=zd(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this.defaultAttributeValues=Object.assign({},t.defaultAttributeValues),this.index0AttributeName=t.index0AttributeName,this.uniformsNeedUpdate=t.uniformsNeedUpdate,this}toJSON(t){const e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(const s in this.uniforms){const r=this.uniforms[s].value;r&&r.isTexture?e.uniforms[s]={type:"t",value:r.toJSON(t).uuid}:r&&r.isColor?e.uniforms[s]={type:"c",value:r.getHex()}:r&&r.isVector2?e.uniforms[s]={type:"v2",value:r.toArray()}:r&&r.isVector3?e.uniforms[s]={type:"v3",value:r.toArray()}:r&&r.isVector4?e.uniforms[s]={type:"v4",value:r.toArray()}:r&&r.isMatrix3?e.uniforms[s]={type:"m3",value:r.toArray()}:r&&r.isMatrix4?e.uniforms[s]={type:"m4",value:r.toArray()}:e.uniforms[s]={value:r}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;const n={};for(const s in this.extensions)this.extensions[s]===!0&&(n[s]=!0);return Object.keys(n).length>0&&(e.extensions=n),e}}class Fh extends Oe{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new jt,this.projectionMatrix=new jt,this.projectionMatrixInverse=new jt,this.coordinateSystem=Hn,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(t,e){super.updateWorldMatrix(t,e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const gi=new F,mc=new ut,gc=new ut;class yn extends Fh{constructor(t=50,e=1,n=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=n,this.far=s,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){const e=.5*this.getFilmHeight()/t;this.fov=ta*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){const t=Math.tan(qs*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return ta*2*Math.atan(Math.tan(qs*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,n){gi.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),e.set(gi.x,gi.y).multiplyScalar(-t/gi.z),gi.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(gi.x,gi.y).multiplyScalar(-t/gi.z)}getViewSize(t,e){return this.getViewBounds(t,mc,gc),e.subVectors(gc,mc)}setViewOffset(t,e,n,s,a,r){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=s,this.view.width=a,this.view.height=r,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=this.near;let e=t*Math.tan(qs*.5*this.fov)/this.zoom,n=2*e,s=this.aspect*n,a=-.5*s;const r=this.view;if(this.view!==null&&this.view.enabled){const l=r.fullWidth,c=r.fullHeight;a+=r.offsetX*s/l,e-=r.offsetY*n/c,s*=r.width/l,n*=r.height/c}const o=this.filmOffset;o!==0&&(a+=t*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(a,a+s,e,e-n,t,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}}const is=-90,ss=1;class Wd extends Oe{constructor(t,e,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;const s=new yn(is,ss,t,e);s.layers=this.layers,this.add(s);const a=new yn(is,ss,t,e);a.layers=this.layers,this.add(a);const r=new yn(is,ss,t,e);r.layers=this.layers,this.add(r);const o=new yn(is,ss,t,e);o.layers=this.layers,this.add(o);const l=new yn(is,ss,t,e);l.layers=this.layers,this.add(l);const c=new yn(is,ss,t,e);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const t=this.coordinateSystem,e=this.children.concat(),[n,s,a,r,o,l]=e;for(const c of e)this.remove(c);if(t===Hn)n.up.set(0,1,0),n.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),a.up.set(0,0,-1),a.lookAt(0,1,0),r.up.set(0,0,1),r.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(t===Ka)n.up.set(0,-1,0),n.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),a.up.set(0,0,1),a.lookAt(0,1,0),r.up.set(0,0,-1),r.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(const c of e)this.add(c),c.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();const{renderTarget:n,activeMipmapLevel:s}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());const[a,r,o,l,c,h]=this.children,u=t.getRenderTarget(),d=t.getActiveCubeFace(),p=t.getActiveMipmapLevel(),g=t.xr.enabled;t.xr.enabled=!1;const x=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,t.setRenderTarget(n,0,s),t.render(e,a),t.setRenderTarget(n,1,s),t.render(e,r),t.setRenderTarget(n,2,s),t.render(e,o),t.setRenderTarget(n,3,s),t.render(e,l),t.setRenderTarget(n,4,s),t.render(e,c),n.texture.generateMipmaps=x,t.setRenderTarget(n,5,s),t.render(e,h),t.setRenderTarget(u,d,p),t.xr.enabled=g,n.texture.needsPMREMUpdate=!0}}class Nh extends Ke{constructor(t=[],e=Hi,n,s,a,r,o,l,c,h){super(t,e,n,s,a,r,o,l,c,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}}class Uh extends Yn{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;const n={width:t,height:t,depth:1},s=[n,n,n,n,n,n];this.texture=new Nh(s),this._setTextureOptions(e),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},s=new ce(5,5,5),a=new Tn({name:"CubemapFromEquirect",uniforms:Ss(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:rn,blending:ai});a.uniforms.tEquirect.value=e;const r=new nt(s,a),o=e.minFilter;return e.minFilter===ki&&(e.minFilter=Ge),new Wd(1,10,this).update(t,r),e.minFilter=o,r.geometry.dispose(),r.material.dispose(),this}clear(t,e=!0,n=!0,s=!0){const a=t.getRenderTarget();for(let r=0;r<6;r++)t.setRenderTarget(this,r),t.clear(e,n,s);t.setRenderTarget(a)}}class De extends Oe{constructor(){super(),this.isGroup=!0,this.type="Group"}}const Xd={type:"move"};class zr{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new De,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new De,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new F,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new F),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new De,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new F,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new F),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){const e=this._hand;if(e)for(const n of t.hand.values())this._getHandJoint(e,n)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,n){let s=null,a=null,r=null;const o=this._targetRay,l=this._grip,c=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(c&&t.hand){r=!0;for(const x of t.hand.values()){const m=e.getJointPose(x,n),f=this._getHandJoint(c,x);m!==null&&(f.matrix.fromArray(m.transform.matrix),f.matrix.decompose(f.position,f.rotation,f.scale),f.matrixWorldNeedsUpdate=!0,f.jointRadius=m.radius),f.visible=m!==null}const h=c.joints["index-finger-tip"],u=c.joints["thumb-tip"],d=h.position.distanceTo(u.position),p=.02,g=.005;c.inputState.pinching&&d>p+g?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!c.inputState.pinching&&d<=p-g&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else l!==null&&t.gripSpace&&(a=e.getPose(t.gripSpace,n),a!==null&&(l.matrix.fromArray(a.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,a.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(a.linearVelocity)):l.hasLinearVelocity=!1,a.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(a.angularVelocity)):l.hasAngularVelocity=!1));o!==null&&(s=e.getPose(t.targetRaySpace,n),s===null&&a!==null&&(s=a),s!==null&&(o.matrix.fromArray(s.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,s.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(s.linearVelocity)):o.hasLinearVelocity=!1,s.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(s.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(Xd)))}return o!==null&&(o.visible=s!==null),l!==null&&(l.visible=a!==null),c!==null&&(c.visible=r!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){const n=new De;n.matrixAutoUpdate=!1,n.visible=!1,t.joints[e.jointName]=n,t.add(n)}return t.joints[e.jointName]}}class Yd extends Oe{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Be,this.environmentIntensity=1,this.environmentRotation=new Be,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){const e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(e.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(e.object.backgroundIntensity=this.backgroundIntensity),e.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(e.object.environmentIntensity=this.environmentIntensity),e.object.environmentRotation=this.environmentRotation.toArray(),e}}class qd{constructor(t,e){this.isInterleavedBuffer=!0,this.array=t,this.stride=e,this.count=t!==void 0?t.length/e:0,this.usage=tl,this.updateRanges=[],this.version=0,this.uuid=Xn()}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.array=new t.array.constructor(t.array),this.count=t.count,this.stride=t.stride,this.usage=t.usage,this}copyAt(t,e,n){t*=this.stride,n*=e.stride;for(let s=0,a=this.stride;s<a;s++)this.array[t+s]=e.array[n+s];return this}set(t,e=0){return this.array.set(t,e),this}clone(t){t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Xn()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);const e=new this.array.constructor(t.arrayBuffers[this.array.buffer._uuid]),n=new this.constructor(e,this.stride);return n.setUsage(this.usage),n}onUpload(t){return this.onUploadCallback=t,this}toJSON(t){return t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Xn()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}}const Qe=new F;class Qa{constructor(t,e,n,s=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=t,this.itemSize=e,this.offset=n,this.normalized=s}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(t){this.data.needsUpdate=t}applyMatrix4(t){for(let e=0,n=this.data.count;e<n;e++)Qe.fromBufferAttribute(this,e),Qe.applyMatrix4(t),this.setXYZ(e,Qe.x,Qe.y,Qe.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)Qe.fromBufferAttribute(this,e),Qe.applyNormalMatrix(t),this.setXYZ(e,Qe.x,Qe.y,Qe.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)Qe.fromBufferAttribute(this,e),Qe.transformDirection(t),this.setXYZ(e,Qe.x,Qe.y,Qe.z);return this}getComponent(t,e){let n=this.array[t*this.data.stride+this.offset+e];return this.normalized&&(n=In(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=fe(n,this.array)),this.data.array[t*this.data.stride+this.offset+e]=n,this}setX(t,e){return this.normalized&&(e=fe(e,this.array)),this.data.array[t*this.data.stride+this.offset]=e,this}setY(t,e){return this.normalized&&(e=fe(e,this.array)),this.data.array[t*this.data.stride+this.offset+1]=e,this}setZ(t,e){return this.normalized&&(e=fe(e,this.array)),this.data.array[t*this.data.stride+this.offset+2]=e,this}setW(t,e){return this.normalized&&(e=fe(e,this.array)),this.data.array[t*this.data.stride+this.offset+3]=e,this}getX(t){let e=this.data.array[t*this.data.stride+this.offset];return this.normalized&&(e=In(e,this.array)),e}getY(t){let e=this.data.array[t*this.data.stride+this.offset+1];return this.normalized&&(e=In(e,this.array)),e}getZ(t){let e=this.data.array[t*this.data.stride+this.offset+2];return this.normalized&&(e=In(e,this.array)),e}getW(t){let e=this.data.array[t*this.data.stride+this.offset+3];return this.normalized&&(e=In(e,this.array)),e}setXY(t,e,n){return t=t*this.data.stride+this.offset,this.normalized&&(e=fe(e,this.array),n=fe(n,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=n,this}setXYZ(t,e,n,s){return t=t*this.data.stride+this.offset,this.normalized&&(e=fe(e,this.array),n=fe(n,this.array),s=fe(s,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=n,this.data.array[t+2]=s,this}setXYZW(t,e,n,s,a){return t=t*this.data.stride+this.offset,this.normalized&&(e=fe(e,this.array),n=fe(n,this.array),s=fe(s,this.array),a=fe(a,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=n,this.data.array[t+2]=s,this.data.array[t+3]=a,this}clone(t){if(t===void 0){ja("InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");const e=[];for(let n=0;n<this.count;n++){const s=n*this.data.stride+this.offset;for(let a=0;a<this.itemSize;a++)e.push(this.data.array[s+a])}return new bn(new this.array.constructor(e),this.itemSize,this.normalized)}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.clone(t)),new Qa(t.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(t){if(t===void 0){ja("InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");const e=[];for(let n=0;n<this.count;n++){const s=n*this.data.stride+this.offset;for(let a=0;a<this.itemSize;a++)e.push(this.data.array[s+a])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:e,normalized:this.normalized}}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.toJSON(t)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}}class tr extends bi{constructor(t){super(),this.isSpriteMaterial=!0,this.type="SpriteMaterial",this.color=new Ot(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.rotation=t.rotation,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}}let as;const Ds=new F,rs=new F,os=new F,ls=new ut,Fs=new ut,Oh=new jt,Aa=new F,Ns=new F,Ca=new F,xc=new ut,Hr=new ut,_c=new ut;class el extends Oe{constructor(t=new tr){if(super(),this.isSprite=!0,this.type="Sprite",as===void 0){as=new on;const e=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),n=new qd(e,5);as.setIndex([0,1,2,0,2,3]),as.setAttribute("position",new Qa(n,3,0,!1)),as.setAttribute("uv",new Qa(n,2,3,!1))}this.geometry=as,this.material=t,this.center=new ut(.5,.5),this.count=1}raycast(t,e){t.camera===null&&Qt('Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),rs.setFromMatrixScale(this.matrixWorld),Oh.copy(t.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(t.camera.matrixWorldInverse,this.matrixWorld),os.setFromMatrixPosition(this.modelViewMatrix),t.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&rs.multiplyScalar(-os.z);const n=this.material.rotation;let s,a;n!==0&&(a=Math.cos(n),s=Math.sin(n));const r=this.center;Ra(Aa.set(-.5,-.5,0),os,r,rs,s,a),Ra(Ns.set(.5,-.5,0),os,r,rs,s,a),Ra(Ca.set(.5,.5,0),os,r,rs,s,a),xc.set(0,0),Hr.set(1,0),_c.set(1,1);let o=t.ray.intersectTriangle(Aa,Ns,Ca,!1,Ds);if(o===null&&(Ra(Ns.set(-.5,.5,0),os,r,rs,s,a),Hr.set(0,1),o=t.ray.intersectTriangle(Aa,Ca,Ns,!1,Ds),o===null))return;const l=t.ray.origin.distanceTo(Ds);l<t.near||l>t.far||e.push({distance:l,point:Ds.clone(),uv:Sn.getInterpolation(Ds,Aa,Ns,Ca,xc,Hr,_c,new ut),face:null,object:this})}copy(t,e){return super.copy(t,e),t.center!==void 0&&this.center.copy(t.center),this.material=t.material,this}}function Ra(i,t,e,n,s,a){ls.subVectors(i,e).addScalar(.5).multiply(n),s!==void 0?(Fs.x=a*ls.x-s*ls.y,Fs.y=s*ls.x+a*ls.y):Fs.copy(ls),i.copy(t),i.x+=Fs.x,i.y+=Fs.y,i.applyMatrix4(Oh)}class Bh extends Ke{constructor(t=null,e=1,n=1,s,a,r,o,l,c=We,h=We,u,d){super(null,r,o,l,c,h,s,a,u,d),this.isDataTexture=!0,this.image={data:t,width:e,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class vc extends bn{constructor(t,e,n,s=1){super(t,e,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=s}copy(t){return super.copy(t),this.meshPerAttribute=t.meshPerAttribute,this}toJSON(){const t=super.toJSON();return t.meshPerAttribute=this.meshPerAttribute,t.isInstancedBufferAttribute=!0,t}}const cs=new jt,Mc=new jt,Pa=[],yc=new Wi,Zd=new jt,Us=new nt,Os=new ra;class nn extends nt{constructor(t,e,n){super(t,e),this.isInstancedMesh=!0,this.instanceMatrix=new vc(new Float32Array(n*16),16),this.instanceColor=null,this.morphTexture=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let s=0;s<n;s++)this.setMatrixAt(s,Zd)}computeBoundingBox(){const t=this.geometry,e=this.count;this.boundingBox===null&&(this.boundingBox=new Wi),t.boundingBox===null&&t.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<e;n++)this.getMatrixAt(n,cs),yc.copy(t.boundingBox).applyMatrix4(cs),this.boundingBox.union(yc)}computeBoundingSphere(){const t=this.geometry,e=this.count;this.boundingSphere===null&&(this.boundingSphere=new ra),t.boundingSphere===null&&t.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<e;n++)this.getMatrixAt(n,cs),Os.copy(t.boundingSphere).applyMatrix4(cs),this.boundingSphere.union(Os)}copy(t,e){return super.copy(t,e),this.instanceMatrix.copy(t.instanceMatrix),t.morphTexture!==null&&(this.morphTexture=t.morphTexture.clone()),t.instanceColor!==null&&(this.instanceColor=t.instanceColor.clone()),this.count=t.count,t.boundingBox!==null&&(this.boundingBox=t.boundingBox.clone()),t.boundingSphere!==null&&(this.boundingSphere=t.boundingSphere.clone()),this}getColorAt(t,e){e.fromArray(this.instanceColor.array,t*3)}getMatrixAt(t,e){e.fromArray(this.instanceMatrix.array,t*16)}getMorphAt(t,e){const n=e.morphTargetInfluences,s=this.morphTexture.source.data.data,a=n.length+1,r=t*a+1;for(let o=0;o<n.length;o++)n[o]=s[r+o]}raycast(t,e){const n=this.matrixWorld,s=this.count;if(Us.geometry=this.geometry,Us.material=this.material,Us.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Os.copy(this.boundingSphere),Os.applyMatrix4(n),t.ray.intersectsSphere(Os)!==!1))for(let a=0;a<s;a++){this.getMatrixAt(a,cs),Mc.multiplyMatrices(n,cs),Us.matrixWorld=Mc,Us.raycast(t,Pa);for(let r=0,o=Pa.length;r<o;r++){const l=Pa[r];l.instanceId=a,l.object=this,e.push(l)}Pa.length=0}}setColorAt(t,e){this.instanceColor===null&&(this.instanceColor=new vc(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),e.toArray(this.instanceColor.array,t*3)}setMatrixAt(t,e){e.toArray(this.instanceMatrix.array,t*16)}setMorphAt(t,e){const n=e.morphTargetInfluences,s=n.length+1;this.morphTexture===null&&(this.morphTexture=new Bh(new Float32Array(s*this.count),s,this.count,yl,Nn));const a=this.morphTexture.source.data.data;let r=0;for(let c=0;c<n.length;c++)r+=n[c];const o=this.geometry.morphTargetsRelative?1:1-r,l=s*t;a[l]=o,a.set(n,l+1)}updateMorphTargets(){}dispose(){this.dispatchEvent({type:"dispose"}),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null)}}const Gr=new F,$d=new F,Kd=new Yt;class Ui{constructor(t=new F(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,n,s){return this.normal.set(t,e,n),this.constant=s,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,n){const s=Gr.subVectors(n,e).cross($d.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(s,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){const t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e){const n=t.delta(Gr),s=this.normal.dot(n);if(s===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;const a=-(t.start.dot(this.normal)+this.constant)/s;return a<0||a>1?null:e.copy(t.start).addScaledVector(n,a)}intersectsLine(t){const e=this.distanceToPoint(t.start),n=this.distanceToPoint(t.end);return e<0&&n>0||n<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){const n=e||Kd.getNormalMatrix(t),s=this.coplanarPoint(Gr).applyMatrix4(t),a=this.normal.applyMatrix3(n).normalize();return this.constant=-s.dot(a),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Pi=new ra,Jd=new ut(.5,.5),Ia=new F;class Rl{constructor(t=new Ui,e=new Ui,n=new Ui,s=new Ui,a=new Ui,r=new Ui){this.planes=[t,e,n,s,a,r]}set(t,e,n,s,a,r){const o=this.planes;return o[0].copy(t),o[1].copy(e),o[2].copy(n),o[3].copy(s),o[4].copy(a),o[5].copy(r),this}copy(t){const e=this.planes;for(let n=0;n<6;n++)e[n].copy(t.planes[n]);return this}setFromProjectionMatrix(t,e=Hn,n=!1){const s=this.planes,a=t.elements,r=a[0],o=a[1],l=a[2],c=a[3],h=a[4],u=a[5],d=a[6],p=a[7],g=a[8],x=a[9],m=a[10],f=a[11],b=a[12],w=a[13],y=a[14],A=a[15];if(s[0].setComponents(c-r,p-h,f-g,A-b).normalize(),s[1].setComponents(c+r,p+h,f+g,A+b).normalize(),s[2].setComponents(c+o,p+u,f+x,A+w).normalize(),s[3].setComponents(c-o,p-u,f-x,A-w).normalize(),n)s[4].setComponents(l,d,m,y).normalize(),s[5].setComponents(c-l,p-d,f-m,A-y).normalize();else if(s[4].setComponents(c-l,p-d,f-m,A-y).normalize(),e===Hn)s[5].setComponents(c+l,p+d,f+m,A+y).normalize();else if(e===Ka)s[5].setComponents(l,d,m,y).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),Pi.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{const e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),Pi.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(Pi)}intersectsSprite(t){Pi.center.set(0,0,0);const e=Jd.distanceTo(t.center);return Pi.radius=.7071067811865476+e,Pi.applyMatrix4(t.matrixWorld),this.intersectsSphere(Pi)}intersectsSphere(t){const e=this.planes,n=t.center,s=-t.radius;for(let a=0;a<6;a++)if(e[a].distanceToPoint(n)<s)return!1;return!0}intersectsBox(t){const e=this.planes;for(let n=0;n<6;n++){const s=e[n];if(Ia.x=s.normal.x>0?t.max.x:t.min.x,Ia.y=s.normal.y>0?t.max.y:t.min.y,Ia.z=s.normal.z>0?t.max.z:t.min.z,s.distanceToPoint(Ia)<0)return!1}return!0}containsPoint(t){const e=this.planes;for(let n=0;n<6;n++)if(e[n].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class kh extends Ke{constructor(t,e,n,s,a,r,o,l,c){super(t,e,n,s,a,r,o,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}}class ea extends Ke{constructor(t,e,n=qn,s,a,r,o=We,l=We,c,h=ci,u=1){if(h!==ci&&h!==zi)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const d={width:t,height:e,depth:u};super(d,s,a,r,o,l,h,n,c),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.source=new Cl(Object.assign({},t.image)),this.compareFunction=t.compareFunction,this}toJSON(t){const e=super.toJSON(t);return this.compareFunction!==null&&(e.compareFunction=this.compareFunction),e}}class jd extends ea{constructor(t,e=qn,n=Hi,s,a,r=We,o=We,l,c=ci){const h={width:t,height:t,depth:1},u=[h,h,h,h,h,h];super(t,t,e,n,s,a,r,o,l,c),this.image=u,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(t){this.image=t}}class zh extends Ke{constructor(t=null){super(),this.sourceTexture=t,this.isExternalTexture=!0}copy(t){return super.copy(t),this.sourceTexture=t.sourceTexture,this}}class Ze extends on{constructor(t=1,e=1,n=1,s=32,a=1,r=!1,o=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:t,radiusBottom:e,height:n,radialSegments:s,heightSegments:a,openEnded:r,thetaStart:o,thetaLength:l};const c=this;s=Math.floor(s),a=Math.floor(a);const h=[],u=[],d=[],p=[];let g=0;const x=[],m=n/2;let f=0;b(),r===!1&&(t>0&&w(!0),e>0&&w(!1)),this.setIndex(h),this.setAttribute("position",new Ne(u,3)),this.setAttribute("normal",new Ne(d,3)),this.setAttribute("uv",new Ne(p,2));function b(){const y=new F,A=new F;let P=0;const T=(e-t)/n;for(let D=0;D<=a;D++){const M=[],S=D/a,v=S*(e-t)+t;for(let C=0;C<=s;C++){const L=C/s,N=L*l+o,U=Math.sin(N),H=Math.cos(N);A.x=v*U,A.y=-S*n+m,A.z=v*H,u.push(A.x,A.y,A.z),y.set(U,T,H).normalize(),d.push(y.x,y.y,y.z),p.push(L,1-S),M.push(g++)}x.push(M)}for(let D=0;D<s;D++)for(let M=0;M<a;M++){const S=x[M][D],v=x[M+1][D],C=x[M+1][D+1],L=x[M][D+1];(t>0||M!==0)&&(h.push(S,v,L),P+=3),(e>0||M!==a-1)&&(h.push(v,C,L),P+=3)}c.addGroup(f,P,0),f+=P}function w(y){const A=g,P=new ut,T=new F;let D=0;const M=y===!0?t:e,S=y===!0?1:-1;for(let C=1;C<=s;C++)u.push(0,m*S,0),d.push(0,S,0),p.push(.5,.5),g++;const v=g;for(let C=0;C<=s;C++){const N=C/s*l+o,U=Math.cos(N),H=Math.sin(N);T.x=M*H,T.y=m*S,T.z=M*U,u.push(T.x,T.y,T.z),d.push(0,S,0),P.x=U*.5+.5,P.y=H*.5*S+.5,p.push(P.x,P.y),g++}for(let C=0;C<s;C++){const L=A+C,N=v+C;y===!0?h.push(N,N+1,L):h.push(N+1,N,L),D+=3}c.addGroup(f,D,y===!0?1:2),f+=D}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Ze(t.radiusTop,t.radiusBottom,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}}class Je extends Ze{constructor(t=1,e=1,n=32,s=1,a=!1,r=0,o=Math.PI*2){super(0,t,e,n,s,a,r,o),this.type="ConeGeometry",this.parameters={radius:t,height:e,radialSegments:n,heightSegments:s,openEnded:a,thetaStart:r,thetaLength:o}}static fromJSON(t){return new Je(t.radius,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}}class Zn{constructor(){this.type="Curve",this.arcLengthDivisions=200,this.needsUpdate=!1,this.cacheArcLengths=null}getPoint(){Ft("Curve: .getPoint() not implemented.")}getPointAt(t,e){const n=this.getUtoTmapping(t);return this.getPoint(n,e)}getPoints(t=5){const e=[];for(let n=0;n<=t;n++)e.push(this.getPoint(n/t));return e}getSpacedPoints(t=5){const e=[];for(let n=0;n<=t;n++)e.push(this.getPointAt(n/t));return e}getLength(){const t=this.getLengths();return t[t.length-1]}getLengths(t=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===t+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;const e=[];let n,s=this.getPoint(0),a=0;e.push(0);for(let r=1;r<=t;r++)n=this.getPoint(r/t),a+=n.distanceTo(s),e.push(a),s=n;return this.cacheArcLengths=e,e}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(t,e=null){const n=this.getLengths();let s=0;const a=n.length;let r;e?r=e:r=t*n[a-1];let o=0,l=a-1,c;for(;o<=l;)if(s=Math.floor(o+(l-o)/2),c=n[s]-r,c<0)o=s+1;else if(c>0)l=s-1;else{l=s;break}if(s=l,n[s]===r)return s/(a-1);const h=n[s],d=n[s+1]-h,p=(r-h)/d;return(s+p)/(a-1)}getTangent(t,e){let s=t-1e-4,a=t+1e-4;s<0&&(s=0),a>1&&(a=1);const r=this.getPoint(s),o=this.getPoint(a),l=e||(r.isVector2?new ut:new F);return l.copy(o).sub(r).normalize(),l}getTangentAt(t,e){const n=this.getUtoTmapping(t);return this.getTangent(n,e)}computeFrenetFrames(t,e=!1){const n=new F,s=[],a=[],r=[],o=new F,l=new jt;for(let p=0;p<=t;p++){const g=p/t;s[p]=this.getTangentAt(g,new F)}a[0]=new F,r[0]=new F;let c=Number.MAX_VALUE;const h=Math.abs(s[0].x),u=Math.abs(s[0].y),d=Math.abs(s[0].z);h<=c&&(c=h,n.set(1,0,0)),u<=c&&(c=u,n.set(0,1,0)),d<=c&&n.set(0,0,1),o.crossVectors(s[0],n).normalize(),a[0].crossVectors(s[0],o),r[0].crossVectors(s[0],a[0]);for(let p=1;p<=t;p++){if(a[p]=a[p-1].clone(),r[p]=r[p-1].clone(),o.crossVectors(s[p-1],s[p]),o.length()>Number.EPSILON){o.normalize();const g=Math.acos(Kt(s[p-1].dot(s[p]),-1,1));a[p].applyMatrix4(l.makeRotationAxis(o,g))}r[p].crossVectors(s[p],a[p])}if(e===!0){let p=Math.acos(Kt(a[0].dot(a[t]),-1,1));p/=t,s[0].dot(o.crossVectors(a[0],a[t]))>0&&(p=-p);for(let g=1;g<=t;g++)a[g].applyMatrix4(l.makeRotationAxis(s[g],p*g)),r[g].crossVectors(s[g],a[g])}return{tangents:s,normals:a,binormals:r}}clone(){return new this.constructor().copy(this)}copy(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}toJSON(){const t={metadata:{version:4.7,type:"Curve",generator:"Curve.toJSON"}};return t.arcLengthDivisions=this.arcLengthDivisions,t.type=this.type,t}fromJSON(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}}class Pl extends Zn{constructor(t=0,e=0,n=1,s=1,a=0,r=Math.PI*2,o=!1,l=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=t,this.aY=e,this.xRadius=n,this.yRadius=s,this.aStartAngle=a,this.aEndAngle=r,this.aClockwise=o,this.aRotation=l}getPoint(t,e=new ut){const n=e,s=Math.PI*2;let a=this.aEndAngle-this.aStartAngle;const r=Math.abs(a)<Number.EPSILON;for(;a<0;)a+=s;for(;a>s;)a-=s;a<Number.EPSILON&&(r?a=0:a=s),this.aClockwise===!0&&!r&&(a===s?a=-s:a=a-s);const o=this.aStartAngle+t*a;let l=this.aX+this.xRadius*Math.cos(o),c=this.aY+this.yRadius*Math.sin(o);if(this.aRotation!==0){const h=Math.cos(this.aRotation),u=Math.sin(this.aRotation),d=l-this.aX,p=c-this.aY;l=d*h-p*u+this.aX,c=d*u+p*h+this.aY}return n.set(l,c)}copy(t){return super.copy(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}toJSON(){const t=super.toJSON();return t.aX=this.aX,t.aY=this.aY,t.xRadius=this.xRadius,t.yRadius=this.yRadius,t.aStartAngle=this.aStartAngle,t.aEndAngle=this.aEndAngle,t.aClockwise=this.aClockwise,t.aRotation=this.aRotation,t}fromJSON(t){return super.fromJSON(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}}class Qd extends Pl{constructor(t,e,n,s,a,r){super(t,e,n,n,s,a,r),this.isArcCurve=!0,this.type="ArcCurve"}}function Il(){let i=0,t=0,e=0,n=0;function s(a,r,o,l){i=a,t=o,e=-3*a+3*r-2*o-l,n=2*a-2*r+o+l}return{initCatmullRom:function(a,r,o,l,c){s(r,o,c*(o-a),c*(l-r))},initNonuniformCatmullRom:function(a,r,o,l,c,h,u){let d=(r-a)/c-(o-a)/(c+h)+(o-r)/h,p=(o-r)/h-(l-r)/(h+u)+(l-o)/u;d*=h,p*=h,s(r,o,d,p)},calc:function(a){const r=a*a,o=r*a;return i+t*a+e*r+n*o}}}const La=new F,Vr=new Il,Wr=new Il,Xr=new Il;class tf extends Zn{constructor(t=[],e=!1,n="centripetal",s=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=t,this.closed=e,this.curveType=n,this.tension=s}getPoint(t,e=new F){const n=e,s=this.points,a=s.length,r=(a-(this.closed?0:1))*t;let o=Math.floor(r),l=r-o;this.closed?o+=o>0?0:(Math.floor(Math.abs(o)/a)+1)*a:l===0&&o===a-1&&(o=a-2,l=1);let c,h;this.closed||o>0?c=s[(o-1)%a]:(La.subVectors(s[0],s[1]).add(s[0]),c=La);const u=s[o%a],d=s[(o+1)%a];if(this.closed||o+2<a?h=s[(o+2)%a]:(La.subVectors(s[a-1],s[a-2]).add(s[a-1]),h=La),this.curveType==="centripetal"||this.curveType==="chordal"){const p=this.curveType==="chordal"?.5:.25;let g=Math.pow(c.distanceToSquared(u),p),x=Math.pow(u.distanceToSquared(d),p),m=Math.pow(d.distanceToSquared(h),p);x<1e-4&&(x=1),g<1e-4&&(g=x),m<1e-4&&(m=x),Vr.initNonuniformCatmullRom(c.x,u.x,d.x,h.x,g,x,m),Wr.initNonuniformCatmullRom(c.y,u.y,d.y,h.y,g,x,m),Xr.initNonuniformCatmullRom(c.z,u.z,d.z,h.z,g,x,m)}else this.curveType==="catmullrom"&&(Vr.initCatmullRom(c.x,u.x,d.x,h.x,this.tension),Wr.initCatmullRom(c.y,u.y,d.y,h.y,this.tension),Xr.initCatmullRom(c.z,u.z,d.z,h.z,this.tension));return n.set(Vr.calc(l),Wr.calc(l),Xr.calc(l)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const s=t.points[e];this.points.push(s.clone())}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}toJSON(){const t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){const s=this.points[e];t.points.push(s.toArray())}return t.closed=this.closed,t.curveType=this.curveType,t.tension=this.tension,t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const s=t.points[e];this.points.push(new F().fromArray(s))}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}}function Sc(i,t,e,n,s){const a=(n-t)*.5,r=(s-e)*.5,o=i*i,l=i*o;return(2*e-2*n+a+r)*l+(-3*e+3*n-2*a-r)*o+a*i+e}function ef(i,t){const e=1-i;return e*e*t}function nf(i,t){return 2*(1-i)*i*t}function sf(i,t){return i*i*t}function $s(i,t,e,n){return ef(i,t)+nf(i,e)+sf(i,n)}function af(i,t){const e=1-i;return e*e*e*t}function rf(i,t){const e=1-i;return 3*e*e*i*t}function of(i,t){return 3*(1-i)*i*i*t}function lf(i,t){return i*i*i*t}function Ks(i,t,e,n,s){return af(i,t)+rf(i,e)+of(i,n)+lf(i,s)}class Hh extends Zn{constructor(t=new ut,e=new ut,n=new ut,s=new ut){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=t,this.v1=e,this.v2=n,this.v3=s}getPoint(t,e=new ut){const n=e,s=this.v0,a=this.v1,r=this.v2,o=this.v3;return n.set(Ks(t,s.x,a.x,r.x,o.x),Ks(t,s.y,a.y,r.y,o.y)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}}class cf extends Zn{constructor(t=new F,e=new F,n=new F,s=new F){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=t,this.v1=e,this.v2=n,this.v3=s}getPoint(t,e=new F){const n=e,s=this.v0,a=this.v1,r=this.v2,o=this.v3;return n.set(Ks(t,s.x,a.x,r.x,o.x),Ks(t,s.y,a.y,r.y,o.y),Ks(t,s.z,a.z,r.z,o.z)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}}class Gh extends Zn{constructor(t=new ut,e=new ut){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=t,this.v2=e}getPoint(t,e=new ut){const n=e;return t===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(t).add(this.v1)),n}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new ut){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class hf extends Zn{constructor(t=new F,e=new F){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=t,this.v2=e}getPoint(t,e=new F){const n=e;return t===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(t).add(this.v1)),n}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new F){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class Vh extends Zn{constructor(t=new ut,e=new ut,n=new ut){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=t,this.v1=e,this.v2=n}getPoint(t,e=new ut){const n=e,s=this.v0,a=this.v1,r=this.v2;return n.set($s(t,s.x,a.x,r.x),$s(t,s.y,a.y,r.y)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class uf extends Zn{constructor(t=new F,e=new F,n=new F){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=t,this.v1=e,this.v2=n}getPoint(t,e=new F){const n=e,s=this.v0,a=this.v1,r=this.v2;return n.set($s(t,s.x,a.x,r.x),$s(t,s.y,a.y,r.y),$s(t,s.z,a.z,r.z)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class Wh extends Zn{constructor(t=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=t}getPoint(t,e=new ut){const n=e,s=this.points,a=(s.length-1)*t,r=Math.floor(a),o=a-r,l=s[r===0?r:r-1],c=s[r],h=s[r>s.length-2?s.length-1:r+1],u=s[r>s.length-3?s.length-1:r+2];return n.set(Sc(o,l.x,c.x,h.x,u.x),Sc(o,l.y,c.y,h.y,u.y)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const s=t.points[e];this.points.push(s.clone())}return this}toJSON(){const t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){const s=this.points[e];t.points.push(s.toArray())}return t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const s=t.points[e];this.points.push(new ut().fromArray(s))}return this}}var nl=Object.freeze({__proto__:null,ArcCurve:Qd,CatmullRomCurve3:tf,CubicBezierCurve:Hh,CubicBezierCurve3:cf,EllipseCurve:Pl,LineCurve:Gh,LineCurve3:hf,QuadraticBezierCurve:Vh,QuadraticBezierCurve3:uf,SplineCurve:Wh});class df extends Zn{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(t){this.curves.push(t)}closePath(){const t=this.curves[0].getPoint(0),e=this.curves[this.curves.length-1].getPoint(1);if(!t.equals(e)){const n=t.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new nl[n](e,t))}return this}getPoint(t,e){const n=t*this.getLength(),s=this.getCurveLengths();let a=0;for(;a<s.length;){if(s[a]>=n){const r=s[a]-n,o=this.curves[a],l=o.getLength(),c=l===0?0:1-r/l;return o.getPointAt(c,e)}a++}return null}getLength(){const t=this.getCurveLengths();return t[t.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;const t=[];let e=0;for(let n=0,s=this.curves.length;n<s;n++)e+=this.curves[n].getLength(),t.push(e);return this.cacheLengths=t,t}getSpacedPoints(t=40){const e=[];for(let n=0;n<=t;n++)e.push(this.getPoint(n/t));return this.autoClose&&e.push(e[0]),e}getPoints(t=12){const e=[];let n;for(let s=0,a=this.curves;s<a.length;s++){const r=a[s],o=r.isEllipseCurve?t*2:r.isLineCurve||r.isLineCurve3?1:r.isSplineCurve?t*r.points.length:t,l=r.getPoints(o);for(let c=0;c<l.length;c++){const h=l[c];n&&n.equals(h)||(e.push(h),n=h)}}return this.autoClose&&e.length>1&&!e[e.length-1].equals(e[0])&&e.push(e[0]),e}copy(t){super.copy(t),this.curves=[];for(let e=0,n=t.curves.length;e<n;e++){const s=t.curves[e];this.curves.push(s.clone())}return this.autoClose=t.autoClose,this}toJSON(){const t=super.toJSON();t.autoClose=this.autoClose,t.curves=[];for(let e=0,n=this.curves.length;e<n;e++){const s=this.curves[e];t.curves.push(s.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.autoClose=t.autoClose,this.curves=[];for(let e=0,n=t.curves.length;e<n;e++){const s=t.curves[e];this.curves.push(new nl[s.type]().fromJSON(s))}return this}}class wc extends df{constructor(t){super(),this.type="Path",this.currentPoint=new ut,t&&this.setFromPoints(t)}setFromPoints(t){this.moveTo(t[0].x,t[0].y);for(let e=1,n=t.length;e<n;e++)this.lineTo(t[e].x,t[e].y);return this}moveTo(t,e){return this.currentPoint.set(t,e),this}lineTo(t,e){const n=new Gh(this.currentPoint.clone(),new ut(t,e));return this.curves.push(n),this.currentPoint.set(t,e),this}quadraticCurveTo(t,e,n,s){const a=new Vh(this.currentPoint.clone(),new ut(t,e),new ut(n,s));return this.curves.push(a),this.currentPoint.set(n,s),this}bezierCurveTo(t,e,n,s,a,r){const o=new Hh(this.currentPoint.clone(),new ut(t,e),new ut(n,s),new ut(a,r));return this.curves.push(o),this.currentPoint.set(a,r),this}splineThru(t){const e=[this.currentPoint.clone()].concat(t),n=new Wh(e);return this.curves.push(n),this.currentPoint.copy(t[t.length-1]),this}arc(t,e,n,s,a,r){const o=this.currentPoint.x,l=this.currentPoint.y;return this.absarc(t+o,e+l,n,s,a,r),this}absarc(t,e,n,s,a,r){return this.absellipse(t,e,n,n,s,a,r),this}ellipse(t,e,n,s,a,r,o,l){const c=this.currentPoint.x,h=this.currentPoint.y;return this.absellipse(t+c,e+h,n,s,a,r,o,l),this}absellipse(t,e,n,s,a,r,o,l){const c=new Pl(t,e,n,s,a,r,o,l);if(this.curves.length>0){const u=c.getPoint(0);u.equals(this.currentPoint)||this.lineTo(u.x,u.y)}this.curves.push(c);const h=c.getPoint(1);return this.currentPoint.copy(h),this}copy(t){return super.copy(t),this.currentPoint.copy(t.currentPoint),this}toJSON(){const t=super.toJSON();return t.currentPoint=this.currentPoint.toArray(),t}fromJSON(t){return super.fromJSON(t),this.currentPoint.fromArray(t.currentPoint),this}}class Ll extends wc{constructor(t){super(t),this.uuid=Xn(),this.type="Shape",this.holes=[]}getPointsHoles(t){const e=[];for(let n=0,s=this.holes.length;n<s;n++)e[n]=this.holes[n].getPoints(t);return e}extractPoints(t){return{shape:this.getPoints(t),holes:this.getPointsHoles(t)}}copy(t){super.copy(t),this.holes=[];for(let e=0,n=t.holes.length;e<n;e++){const s=t.holes[e];this.holes.push(s.clone())}return this}toJSON(){const t=super.toJSON();t.uuid=this.uuid,t.holes=[];for(let e=0,n=this.holes.length;e<n;e++){const s=this.holes[e];t.holes.push(s.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.uuid=t.uuid,this.holes=[];for(let e=0,n=t.holes.length;e<n;e++){const s=t.holes[e];this.holes.push(new wc().fromJSON(s))}return this}}function ff(i,t,e=2){const n=t&&t.length,s=n?t[0]*e:i.length;let a=Xh(i,0,s,e,!0);const r=[];if(!a||a.next===a.prev)return r;let o,l,c;if(n&&(a=_f(i,t,a,e)),i.length>80*e){o=i[0],l=i[1];let h=o,u=l;for(let d=e;d<s;d+=e){const p=i[d],g=i[d+1];p<o&&(o=p),g<l&&(l=g),p>h&&(h=p),g>u&&(u=g)}c=Math.max(h-o,u-l),c=c!==0?32767/c:0}return na(a,r,e,o,l,c,0),r}function Xh(i,t,e,n,s){let a;if(s===Rf(i,t,e,n)>0)for(let r=t;r<e;r+=n)a=bc(r/n|0,i[r],i[r+1],a);else for(let r=e-n;r>=t;r-=n)a=bc(r/n|0,i[r],i[r+1],a);return a&&ws(a,a.next)&&(sa(a),a=a.next),a}function Gi(i,t){if(!i)return i;t||(t=i);let e=i,n;do if(n=!1,!e.steiner&&(ws(e,e.next)||_e(e.prev,e,e.next)===0)){if(sa(e),e=t=e.prev,e===e.next)break;n=!0}else e=e.next;while(n||e!==t);return t}function na(i,t,e,n,s,a,r){if(!i)return;!r&&a&&wf(i,n,s,a);let o=i;for(;i.prev!==i.next;){const l=i.prev,c=i.next;if(a?mf(i,n,s,a):pf(i)){t.push(l.i,i.i,c.i),sa(i),i=c.next,o=c.next;continue}if(i=c,i===o){r?r===1?(i=gf(Gi(i),t),na(i,t,e,n,s,a,2)):r===2&&xf(i,t,e,n,s,a):na(Gi(i),t,e,n,s,a,1);break}}}function pf(i){const t=i.prev,e=i,n=i.next;if(_e(t,e,n)>=0)return!1;const s=t.x,a=e.x,r=n.x,o=t.y,l=e.y,c=n.y,h=Math.min(s,a,r),u=Math.min(o,l,c),d=Math.max(s,a,r),p=Math.max(o,l,c);let g=n.next;for(;g!==t;){if(g.x>=h&&g.x<=d&&g.y>=u&&g.y<=p&&Ws(s,o,a,l,r,c,g.x,g.y)&&_e(g.prev,g,g.next)>=0)return!1;g=g.next}return!0}function mf(i,t,e,n){const s=i.prev,a=i,r=i.next;if(_e(s,a,r)>=0)return!1;const o=s.x,l=a.x,c=r.x,h=s.y,u=a.y,d=r.y,p=Math.min(o,l,c),g=Math.min(h,u,d),x=Math.max(o,l,c),m=Math.max(h,u,d),f=il(p,g,t,e,n),b=il(x,m,t,e,n);let w=i.prevZ,y=i.nextZ;for(;w&&w.z>=f&&y&&y.z<=b;){if(w.x>=p&&w.x<=x&&w.y>=g&&w.y<=m&&w!==s&&w!==r&&Ws(o,h,l,u,c,d,w.x,w.y)&&_e(w.prev,w,w.next)>=0||(w=w.prevZ,y.x>=p&&y.x<=x&&y.y>=g&&y.y<=m&&y!==s&&y!==r&&Ws(o,h,l,u,c,d,y.x,y.y)&&_e(y.prev,y,y.next)>=0))return!1;y=y.nextZ}for(;w&&w.z>=f;){if(w.x>=p&&w.x<=x&&w.y>=g&&w.y<=m&&w!==s&&w!==r&&Ws(o,h,l,u,c,d,w.x,w.y)&&_e(w.prev,w,w.next)>=0)return!1;w=w.prevZ}for(;y&&y.z<=b;){if(y.x>=p&&y.x<=x&&y.y>=g&&y.y<=m&&y!==s&&y!==r&&Ws(o,h,l,u,c,d,y.x,y.y)&&_e(y.prev,y,y.next)>=0)return!1;y=y.nextZ}return!0}function gf(i,t){let e=i;do{const n=e.prev,s=e.next.next;!ws(n,s)&&qh(n,e,e.next,s)&&ia(n,s)&&ia(s,n)&&(t.push(n.i,e.i,s.i),sa(e),sa(e.next),e=i=s),e=e.next}while(e!==i);return Gi(e)}function xf(i,t,e,n,s,a){let r=i;do{let o=r.next.next;for(;o!==r.prev;){if(r.i!==o.i&&Tf(r,o)){let l=Zh(r,o);r=Gi(r,r.next),l=Gi(l,l.next),na(r,t,e,n,s,a,0),na(l,t,e,n,s,a,0);return}o=o.next}r=r.next}while(r!==i)}function _f(i,t,e,n){const s=[];for(let a=0,r=t.length;a<r;a++){const o=t[a]*n,l=a<r-1?t[a+1]*n:i.length,c=Xh(i,o,l,n,!1);c===c.next&&(c.steiner=!0),s.push(Ef(c))}s.sort(vf);for(let a=0;a<s.length;a++)e=Mf(s[a],e);return e}function vf(i,t){let e=i.x-t.x;if(e===0&&(e=i.y-t.y,e===0)){const n=(i.next.y-i.y)/(i.next.x-i.x),s=(t.next.y-t.y)/(t.next.x-t.x);e=n-s}return e}function Mf(i,t){const e=yf(i,t);if(!e)return t;const n=Zh(e,i);return Gi(n,n.next),Gi(e,e.next)}function yf(i,t){let e=t;const n=i.x,s=i.y;let a=-1/0,r;if(ws(i,e))return e;do{if(ws(i,e.next))return e.next;if(s<=e.y&&s>=e.next.y&&e.next.y!==e.y){const u=e.x+(s-e.y)*(e.next.x-e.x)/(e.next.y-e.y);if(u<=n&&u>a&&(a=u,r=e.x<e.next.x?e:e.next,u===n))return r}e=e.next}while(e!==t);if(!r)return null;const o=r,l=r.x,c=r.y;let h=1/0;e=r;do{if(n>=e.x&&e.x>=l&&n!==e.x&&Yh(s<c?n:a,s,l,c,s<c?a:n,s,e.x,e.y)){const u=Math.abs(s-e.y)/(n-e.x);ia(e,i)&&(u<h||u===h&&(e.x>r.x||e.x===r.x&&Sf(r,e)))&&(r=e,h=u)}e=e.next}while(e!==o);return r}function Sf(i,t){return _e(i.prev,i,t.prev)<0&&_e(t.next,i,i.next)<0}function wf(i,t,e,n){let s=i;do s.z===0&&(s.z=il(s.x,s.y,t,e,n)),s.prevZ=s.prev,s.nextZ=s.next,s=s.next;while(s!==i);s.prevZ.nextZ=null,s.prevZ=null,bf(s)}function bf(i){let t,e=1;do{let n=i,s;i=null;let a=null;for(t=0;n;){t++;let r=n,o=0;for(let c=0;c<e&&(o++,r=r.nextZ,!!r);c++);let l=e;for(;o>0||l>0&&r;)o!==0&&(l===0||!r||n.z<=r.z)?(s=n,n=n.nextZ,o--):(s=r,r=r.nextZ,l--),a?a.nextZ=s:i=s,s.prevZ=a,a=s;n=r}a.nextZ=null,e*=2}while(t>1);return i}function il(i,t,e,n,s){return i=(i-e)*s|0,t=(t-n)*s|0,i=(i|i<<8)&16711935,i=(i|i<<4)&252645135,i=(i|i<<2)&858993459,i=(i|i<<1)&1431655765,t=(t|t<<8)&16711935,t=(t|t<<4)&252645135,t=(t|t<<2)&858993459,t=(t|t<<1)&1431655765,i|t<<1}function Ef(i){let t=i,e=i;do(t.x<e.x||t.x===e.x&&t.y<e.y)&&(e=t),t=t.next;while(t!==i);return e}function Yh(i,t,e,n,s,a,r,o){return(s-r)*(t-o)>=(i-r)*(a-o)&&(i-r)*(n-o)>=(e-r)*(t-o)&&(e-r)*(a-o)>=(s-r)*(n-o)}function Ws(i,t,e,n,s,a,r,o){return!(i===r&&t===o)&&Yh(i,t,e,n,s,a,r,o)}function Tf(i,t){return i.next.i!==t.i&&i.prev.i!==t.i&&!Af(i,t)&&(ia(i,t)&&ia(t,i)&&Cf(i,t)&&(_e(i.prev,i,t.prev)||_e(i,t.prev,t))||ws(i,t)&&_e(i.prev,i,i.next)>0&&_e(t.prev,t,t.next)>0)}function _e(i,t,e){return(t.y-i.y)*(e.x-t.x)-(t.x-i.x)*(e.y-t.y)}function ws(i,t){return i.x===t.x&&i.y===t.y}function qh(i,t,e,n){const s=Fa(_e(i,t,e)),a=Fa(_e(i,t,n)),r=Fa(_e(e,n,i)),o=Fa(_e(e,n,t));return!!(s!==a&&r!==o||s===0&&Da(i,e,t)||a===0&&Da(i,n,t)||r===0&&Da(e,i,n)||o===0&&Da(e,t,n))}function Da(i,t,e){return t.x<=Math.max(i.x,e.x)&&t.x>=Math.min(i.x,e.x)&&t.y<=Math.max(i.y,e.y)&&t.y>=Math.min(i.y,e.y)}function Fa(i){return i>0?1:i<0?-1:0}function Af(i,t){let e=i;do{if(e.i!==i.i&&e.next.i!==i.i&&e.i!==t.i&&e.next.i!==t.i&&qh(e,e.next,i,t))return!0;e=e.next}while(e!==i);return!1}function ia(i,t){return _e(i.prev,i,i.next)<0?_e(i,t,i.next)>=0&&_e(i,i.prev,t)>=0:_e(i,t,i.prev)<0||_e(i,i.next,t)<0}function Cf(i,t){let e=i,n=!1;const s=(i.x+t.x)/2,a=(i.y+t.y)/2;do e.y>a!=e.next.y>a&&e.next.y!==e.y&&s<(e.next.x-e.x)*(a-e.y)/(e.next.y-e.y)+e.x&&(n=!n),e=e.next;while(e!==i);return n}function Zh(i,t){const e=sl(i.i,i.x,i.y),n=sl(t.i,t.x,t.y),s=i.next,a=t.prev;return i.next=t,t.prev=i,e.next=s,s.prev=e,n.next=e,e.prev=n,a.next=n,n.prev=a,n}function bc(i,t,e,n){const s=sl(i,t,e);return n?(s.next=n.next,s.prev=n,n.next.prev=s,n.next=s):(s.prev=s,s.next=s),s}function sa(i){i.next.prev=i.prev,i.prev.next=i.next,i.prevZ&&(i.prevZ.nextZ=i.nextZ),i.nextZ&&(i.nextZ.prevZ=i.prevZ)}function sl(i,t,e){return{i,x:t,y:e,prev:null,next:null,z:0,prevZ:null,nextZ:null,steiner:!1}}function Rf(i,t,e,n){let s=0;for(let a=t,r=e-n;a<e;a+=n)s+=(i[r]-i[a])*(i[a+1]+i[r+1]),r=a;return s}class Pf{static triangulate(t,e,n=2){return ff(t,e,n)}}class ms{static area(t){const e=t.length;let n=0;for(let s=e-1,a=0;a<e;s=a++)n+=t[s].x*t[a].y-t[a].x*t[s].y;return n*.5}static isClockWise(t){return ms.area(t)<0}static triangulateShape(t,e){const n=[],s=[],a=[];Ec(t),Tc(n,t);let r=t.length;e.forEach(Ec);for(let l=0;l<e.length;l++)s.push(r),r+=e[l].length,Tc(n,e[l]);const o=Pf.triangulate(n,s);for(let l=0;l<o.length;l+=3)a.push(o.slice(l,l+3));return a}}function Ec(i){const t=i.length;t>2&&i[t-1].equals(i[0])&&i.pop()}function Tc(i,t){for(let e=0;e<t.length;e++)i.push(t[e].x),i.push(t[e].y)}class dr extends on{constructor(t=new Ll([new ut(.5,.5),new ut(-.5,.5),new ut(-.5,-.5),new ut(.5,-.5)]),e={}){super(),this.type="ExtrudeGeometry",this.parameters={shapes:t,options:e},t=Array.isArray(t)?t:[t];const n=this,s=[],a=[];for(let o=0,l=t.length;o<l;o++){const c=t[o];r(c)}this.setAttribute("position",new Ne(s,3)),this.setAttribute("uv",new Ne(a,2)),this.computeVertexNormals();function r(o){const l=[],c=e.curveSegments!==void 0?e.curveSegments:12,h=e.steps!==void 0?e.steps:1,u=e.depth!==void 0?e.depth:1;let d=e.bevelEnabled!==void 0?e.bevelEnabled:!0,p=e.bevelThickness!==void 0?e.bevelThickness:.2,g=e.bevelSize!==void 0?e.bevelSize:p-.1,x=e.bevelOffset!==void 0?e.bevelOffset:0,m=e.bevelSegments!==void 0?e.bevelSegments:3;const f=e.extrudePath,b=e.UVGenerator!==void 0?e.UVGenerator:If;let w,y=!1,A,P,T,D;if(f){w=f.getSpacedPoints(h),y=!0,d=!1;const $=f.isCatmullRomCurve3?f.closed:!1;A=f.computeFrenetFrames(h,$),P=new F,T=new F,D=new F}d||(m=0,p=0,g=0,x=0);const M=o.extractPoints(c);let S=M.shape;const v=M.holes;if(!ms.isClockWise(S)){S=S.reverse();for(let $=0,st=v.length;$<st;$++){const J=v[$];ms.isClockWise(J)&&(v[$]=J.reverse())}}function L($){const J=10000000000000001e-36;let at=$[0];for(let I=1;I<=$.length;I++){const bt=I%$.length,xt=$[bt],Dt=xt.x-at.x,ht=xt.y-at.y,R=Dt*Dt+ht*ht,_=Math.max(Math.abs(xt.x),Math.abs(xt.y),Math.abs(at.x),Math.abs(at.y)),B=J*_*_;if(R<=B){$.splice(bt,1),I--;continue}at=xt}}L(S),v.forEach(L);const N=v.length,U=S;for(let $=0;$<N;$++){const st=v[$];S=S.concat(st)}function H($,st,J){return st||Qt("ExtrudeGeometry: vec does not exist"),$.clone().addScaledVector(st,J)}const k=S.length;function q($,st,J){let at,I,bt;const xt=$.x-st.x,Dt=$.y-st.y,ht=J.x-$.x,R=J.y-$.y,_=xt*xt+Dt*Dt,B=xt*R-Dt*ht;if(Math.abs(B)>Number.EPSILON){const X=Math.sqrt(_),j=Math.sqrt(ht*ht+R*R),Y=st.x-Dt/X,Pt=st.y+xt/X,dt=J.x-R/j,Ct=J.y+ht/j,Ht=((dt-Y)*R-(Ct-Pt)*ht)/(xt*R-Dt*ht);at=Y+xt*Ht-$.x,I=Pt+Dt*Ht-$.y;const rt=at*at+I*I;if(rt<=2)return new ut(at,I);bt=Math.sqrt(rt/2)}else{let X=!1;xt>Number.EPSILON?ht>Number.EPSILON&&(X=!0):xt<-Number.EPSILON?ht<-Number.EPSILON&&(X=!0):Math.sign(Dt)===Math.sign(R)&&(X=!0),X?(at=-Dt,I=xt,bt=Math.sqrt(_)):(at=xt,I=Dt,bt=Math.sqrt(_/2))}return new ut(at/bt,I/bt)}const ot=[];for(let $=0,st=U.length,J=st-1,at=$+1;$<st;$++,J++,at++)J===st&&(J=0),at===st&&(at=0),ot[$]=q(U[$],U[J],U[at]);const tt=[];let it,Gt=ot.concat();for(let $=0,st=N;$<st;$++){const J=v[$];it=[];for(let at=0,I=J.length,bt=I-1,xt=at+1;at<I;at++,bt++,xt++)bt===I&&(bt=0),xt===I&&(xt=0),it[at]=q(J[at],J[bt],J[xt]);tt.push(it),Gt=Gt.concat(it)}let zt;if(m===0)zt=ms.triangulateShape(U,v);else{const $=[],st=[];for(let J=0;J<m;J++){const at=J/m,I=p*Math.cos(at*Math.PI/2),bt=g*Math.sin(at*Math.PI/2)+x;for(let xt=0,Dt=U.length;xt<Dt;xt++){const ht=H(U[xt],ot[xt],bt);Nt(ht.x,ht.y,-I),at===0&&$.push(ht)}for(let xt=0,Dt=N;xt<Dt;xt++){const ht=v[xt];it=tt[xt];const R=[];for(let _=0,B=ht.length;_<B;_++){const X=H(ht[_],it[_],bt);Nt(X.x,X.y,-I),at===0&&R.push(X)}at===0&&st.push(R)}}zt=ms.triangulateShape($,st)}const ae=zt.length,ne=g+x;for(let $=0;$<k;$++){const st=d?H(S[$],Gt[$],ne):S[$];y?(T.copy(A.normals[0]).multiplyScalar(st.x),P.copy(A.binormals[0]).multiplyScalar(st.y),D.copy(w[0]).add(T).add(P),Nt(D.x,D.y,D.z)):Nt(st.x,st.y,0)}for(let $=1;$<=h;$++)for(let st=0;st<k;st++){const J=d?H(S[st],Gt[st],ne):S[st];y?(T.copy(A.normals[$]).multiplyScalar(J.x),P.copy(A.binormals[$]).multiplyScalar(J.y),D.copy(w[$]).add(T).add(P),Nt(D.x,D.y,D.z)):Nt(J.x,J.y,u/h*$)}for(let $=m-1;$>=0;$--){const st=$/m,J=p*Math.cos(st*Math.PI/2),at=g*Math.sin(st*Math.PI/2)+x;for(let I=0,bt=U.length;I<bt;I++){const xt=H(U[I],ot[I],at);Nt(xt.x,xt.y,u+J)}for(let I=0,bt=v.length;I<bt;I++){const xt=v[I];it=tt[I];for(let Dt=0,ht=xt.length;Dt<ht;Dt++){const R=H(xt[Dt],it[Dt],at);y?Nt(R.x,R.y+w[h-1].y,w[h-1].x+J):Nt(R.x,R.y,u+J)}}}Z(),et();function Z(){const $=s.length/3;if(d){let st=0,J=k*st;for(let at=0;at<ae;at++){const I=zt[at];St(I[2]+J,I[1]+J,I[0]+J)}st=h+m*2,J=k*st;for(let at=0;at<ae;at++){const I=zt[at];St(I[0]+J,I[1]+J,I[2]+J)}}else{for(let st=0;st<ae;st++){const J=zt[st];St(J[2],J[1],J[0])}for(let st=0;st<ae;st++){const J=zt[st];St(J[0]+k*h,J[1]+k*h,J[2]+k*h)}}n.addGroup($,s.length/3-$,0)}function et(){const $=s.length/3;let st=0;yt(U,st),st+=U.length;for(let J=0,at=v.length;J<at;J++){const I=v[J];yt(I,st),st+=I.length}n.addGroup($,s.length/3-$,1)}function yt($,st){let J=$.length;for(;--J>=0;){const at=J;let I=J-1;I<0&&(I=$.length-1);for(let bt=0,xt=h+m*2;bt<xt;bt++){const Dt=k*bt,ht=k*(bt+1),R=st+at+Dt,_=st+I+Dt,B=st+I+ht,X=st+at+ht;Jt(R,_,B,X)}}}function Nt($,st,J){l.push($),l.push(st),l.push(J)}function St($,st,J){re($),re(st),re(J);const at=s.length/3,I=b.generateTopUV(n,s,at-3,at-2,at-1);Wt(I[0]),Wt(I[1]),Wt(I[2])}function Jt($,st,J,at){re($),re(st),re(at),re(st),re(J),re(at);const I=s.length/3,bt=b.generateSideWallUV(n,s,I-6,I-3,I-2,I-1);Wt(bt[0]),Wt(bt[1]),Wt(bt[3]),Wt(bt[1]),Wt(bt[2]),Wt(bt[3])}function re($){s.push(l[$*3+0]),s.push(l[$*3+1]),s.push(l[$*3+2])}function Wt($){a.push($.x),a.push($.y)}}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){const t=super.toJSON(),e=this.parameters.shapes,n=this.parameters.options;return Lf(e,n,t)}static fromJSON(t,e){const n=[];for(let a=0,r=t.shapes.length;a<r;a++){const o=e[t.shapes[a]];n.push(o)}const s=t.options.extrudePath;return s!==void 0&&(t.options.extrudePath=new nl[s.type]().fromJSON(s)),new dr(n,t.options)}}const If={generateTopUV:function(i,t,e,n,s){const a=t[e*3],r=t[e*3+1],o=t[n*3],l=t[n*3+1],c=t[s*3],h=t[s*3+1];return[new ut(a,r),new ut(o,l),new ut(c,h)]},generateSideWallUV:function(i,t,e,n,s,a){const r=t[e*3],o=t[e*3+1],l=t[e*3+2],c=t[n*3],h=t[n*3+1],u=t[n*3+2],d=t[s*3],p=t[s*3+1],g=t[s*3+2],x=t[a*3],m=t[a*3+1],f=t[a*3+2];return Math.abs(o-h)<Math.abs(r-c)?[new ut(r,1-l),new ut(c,1-u),new ut(d,1-g),new ut(x,1-f)]:[new ut(o,1-l),new ut(h,1-u),new ut(p,1-g),new ut(m,1-f)]}};function Lf(i,t,e){if(e.shapes=[],Array.isArray(i))for(let n=0,s=i.length;n<s;n++){const a=i[n];e.shapes.push(a.uuid)}else e.shapes.push(i.uuid);return e.options=Object.assign({},t),t.extrudePath!==void 0&&(e.options.extrudePath=t.extrudePath.toJSON()),e}class Ts extends on{constructor(t=1,e=1,n=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:n,heightSegments:s};const a=t/2,r=e/2,o=Math.floor(n),l=Math.floor(s),c=o+1,h=l+1,u=t/o,d=e/l,p=[],g=[],x=[],m=[];for(let f=0;f<h;f++){const b=f*d-r;for(let w=0;w<c;w++){const y=w*u-a;g.push(y,-b,0),x.push(0,0,1),m.push(w/o),m.push(1-f/l)}}for(let f=0;f<l;f++)for(let b=0;b<o;b++){const w=b+c*f,y=b+c*(f+1),A=b+1+c*(f+1),P=b+1+c*f;p.push(w,y,P),p.push(y,A,P)}this.setIndex(p),this.setAttribute("position",new Ne(g,3)),this.setAttribute("normal",new Ne(x,3)),this.setAttribute("uv",new Ne(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Ts(t.width,t.height,t.widthSegments,t.heightSegments)}}class ee extends on{constructor(t=1,e=32,n=16,s=0,a=Math.PI*2,r=0,o=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:t,widthSegments:e,heightSegments:n,phiStart:s,phiLength:a,thetaStart:r,thetaLength:o},e=Math.max(3,Math.floor(e)),n=Math.max(2,Math.floor(n));const l=Math.min(r+o,Math.PI);let c=0;const h=[],u=new F,d=new F,p=[],g=[],x=[],m=[];for(let f=0;f<=n;f++){const b=[],w=f/n;let y=0;f===0&&r===0?y=.5/e:f===n&&l===Math.PI&&(y=-.5/e);for(let A=0;A<=e;A++){const P=A/e;u.x=-t*Math.cos(s+P*a)*Math.sin(r+w*o),u.y=t*Math.cos(r+w*o),u.z=t*Math.sin(s+P*a)*Math.sin(r+w*o),g.push(u.x,u.y,u.z),d.copy(u).normalize(),x.push(d.x,d.y,d.z),m.push(P+y,1-w),b.push(c++)}h.push(b)}for(let f=0;f<n;f++)for(let b=0;b<e;b++){const w=h[f][b+1],y=h[f][b],A=h[f+1][b],P=h[f+1][b+1];(f!==0||r>0)&&p.push(w,y,P),(f!==n-1||l<Math.PI)&&p.push(y,A,P)}this.setIndex(p),this.setAttribute("position",new Ne(g,3)),this.setAttribute("normal",new Ne(x,3)),this.setAttribute("uv",new Ne(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new ee(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}}class er extends on{constructor(t=1,e=.4,n=12,s=48,a=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:t,tube:e,radialSegments:n,tubularSegments:s,arc:a},n=Math.floor(n),s=Math.floor(s);const r=[],o=[],l=[],c=[],h=new F,u=new F,d=new F;for(let p=0;p<=n;p++)for(let g=0;g<=s;g++){const x=g/s*a,m=p/n*Math.PI*2;u.x=(t+e*Math.cos(m))*Math.cos(x),u.y=(t+e*Math.cos(m))*Math.sin(x),u.z=e*Math.sin(m),o.push(u.x,u.y,u.z),h.x=t*Math.cos(x),h.y=t*Math.sin(x),d.subVectors(u,h).normalize(),l.push(d.x,d.y,d.z),c.push(g/s),c.push(p/n)}for(let p=1;p<=n;p++)for(let g=1;g<=s;g++){const x=(s+1)*p+g-1,m=(s+1)*(p-1)+g-1,f=(s+1)*(p-1)+g,b=(s+1)*p+g;r.push(x,m,b),r.push(m,f,b)}this.setIndex(r),this.setAttribute("position",new Ne(o,3)),this.setAttribute("normal",new Ne(l,3)),this.setAttribute("uv",new Ne(c,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new er(t.radius,t.tube,t.radialSegments,t.tubularSegments,t.arc)}}class Df extends Tn{constructor(t){super(t),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}}class Yr extends bi{constructor(t){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new Ot(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Ot(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=ur,this.normalScale=new ut(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Be,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.defines={STANDARD:""},this.color.copy(t.color),this.roughness=t.roughness,this.metalness=t.metalness,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.roughnessMap=t.roughnessMap,this.metalnessMap=t.metalnessMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.envMapIntensity=t.envMapIntensity,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}}class Ff extends bi{constructor(t){super(),this.isMeshPhongMaterial=!0,this.type="MeshPhongMaterial",this.color=new Ot(16777215),this.specular=new Ot(1118481),this.shininess=30,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Ot(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=ur,this.normalScale=new ut(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Be,this.combine=cr,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.specular.copy(t.specular),this.shininess=t.shininess,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}}class Ut extends bi{constructor(t){super(),this.isMeshLambertMaterial=!0,this.type="MeshLambertMaterial",this.color=new Ot(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Ot(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=ur,this.normalScale=new ut(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Be,this.combine=cr,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}}class Nf extends bi{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Ku,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}}class Uf extends bi{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}}const Ac={enabled:!1,files:{},add:function(i,t){this.enabled!==!1&&(this.files[i]=t)},get:function(i){if(this.enabled!==!1)return this.files[i]},remove:function(i){delete this.files[i]},clear:function(){this.files={}}};class Of{constructor(t,e,n){const s=this;let a=!1,r=0,o=0,l;const c=[];this.onStart=void 0,this.onLoad=t,this.onProgress=e,this.onError=n,this._abortController=null,this.itemStart=function(h){o++,a===!1&&s.onStart!==void 0&&s.onStart(h,r,o),a=!0},this.itemEnd=function(h){r++,s.onProgress!==void 0&&s.onProgress(h,r,o),r===o&&(a=!1,s.onLoad!==void 0&&s.onLoad())},this.itemError=function(h){s.onError!==void 0&&s.onError(h)},this.resolveURL=function(h){return l?l(h):h},this.setURLModifier=function(h){return l=h,this},this.addHandler=function(h,u){return c.push(h,u),this},this.removeHandler=function(h){const u=c.indexOf(h);return u!==-1&&c.splice(u,2),this},this.getHandler=function(h){for(let u=0,d=c.length;u<d;u+=2){const p=c[u],g=c[u+1];if(p.global&&(p.lastIndex=0),p.test(h))return g}return null},this.abort=function(){return this.abortController.abort(),this._abortController=null,this}}get abortController(){return this._abortController||(this._abortController=new AbortController),this._abortController}}const Bf=new Of;class Dl{constructor(t){this.manager=t!==void 0?t:Bf,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(t,e){const n=this;return new Promise(function(s,a){n.load(t,s,e,a)})}parse(){}setCrossOrigin(t){return this.crossOrigin=t,this}setWithCredentials(t){return this.withCredentials=t,this}setPath(t){return this.path=t,this}setResourcePath(t){return this.resourcePath=t,this}setRequestHeader(t){return this.requestHeader=t,this}abort(){return this}}Dl.DEFAULT_MATERIAL_NAME="__DEFAULT";const ei={};class kf extends Error{constructor(t,e){super(t),this.response=e}}class zf extends Dl{constructor(t){super(t),this.mimeType="",this.responseType="",this._abortController=new AbortController}load(t,e,n,s){t===void 0&&(t=""),this.path!==void 0&&(t=this.path+t),t=this.manager.resolveURL(t);const a=Ac.get(`file:${t}`);if(a!==void 0)return this.manager.itemStart(t),setTimeout(()=>{e&&e(a),this.manager.itemEnd(t)},0),a;if(ei[t]!==void 0){ei[t].push({onLoad:e,onProgress:n,onError:s});return}ei[t]=[],ei[t].push({onLoad:e,onProgress:n,onError:s});const r=new Request(t,{headers:new Headers(this.requestHeader),credentials:this.withCredentials?"include":"same-origin",signal:typeof AbortSignal.any=="function"?AbortSignal.any([this._abortController.signal,this.manager.abortController.signal]):this._abortController.signal}),o=this.mimeType,l=this.responseType;fetch(r).then(c=>{if(c.status===200||c.status===0){if(c.status===0&&Ft("FileLoader: HTTP Status 0 received."),typeof ReadableStream>"u"||c.body===void 0||c.body.getReader===void 0)return c;const h=ei[t],u=c.body.getReader(),d=c.headers.get("X-File-Size")||c.headers.get("Content-Length"),p=d?parseInt(d):0,g=p!==0;let x=0;const m=new ReadableStream({start(f){b();function b(){u.read().then(({done:w,value:y})=>{if(w)f.close();else{x+=y.byteLength;const A=new ProgressEvent("progress",{lengthComputable:g,loaded:x,total:p});for(let P=0,T=h.length;P<T;P++){const D=h[P];D.onProgress&&D.onProgress(A)}f.enqueue(y),b()}},w=>{f.error(w)})}}});return new Response(m)}else throw new kf(`fetch for "${c.url}" responded with ${c.status}: ${c.statusText}`,c)}).then(c=>{switch(l){case"arraybuffer":return c.arrayBuffer();case"blob":return c.blob();case"document":return c.text().then(h=>new DOMParser().parseFromString(h,o));case"json":return c.json();default:if(o==="")return c.text();{const u=/charset="?([^;"\s]*)"?/i.exec(o),d=u&&u[1]?u[1].toLowerCase():void 0,p=new TextDecoder(d);return c.arrayBuffer().then(g=>p.decode(g))}}}).then(c=>{Ac.add(`file:${t}`,c);const h=ei[t];delete ei[t];for(let u=0,d=h.length;u<d;u++){const p=h[u];p.onLoad&&p.onLoad(c)}}).catch(c=>{const h=ei[t];if(h===void 0)throw this.manager.itemError(t),c;delete ei[t];for(let u=0,d=h.length;u<d;u++){const p=h[u];p.onError&&p.onError(c)}this.manager.itemError(t)}).finally(()=>{this.manager.itemEnd(t)}),this.manager.itemStart(t)}setResponseType(t){return this.responseType=t,this}setMimeType(t){return this.mimeType=t,this}abort(){return this._abortController.abort(),this._abortController=new AbortController,this}}class $h extends Oe{constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new Ot(t),this.intensity=e}dispose(){this.dispatchEvent({type:"dispose"})}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){const e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,e}}const qr=new jt,Cc=new F,Rc=new F;class Hf{constructor(t){this.camera=t,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new ut(512,512),this.mapType=pn,this.map=null,this.mapPass=null,this.matrix=new jt,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Rl,this._frameExtents=new ut(1,1),this._viewportCount=1,this._viewports=[new Ee(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(t){const e=this.camera,n=this.matrix;Cc.setFromMatrixPosition(t.matrixWorld),e.position.copy(Cc),Rc.setFromMatrixPosition(t.target.matrixWorld),e.lookAt(Rc),e.updateMatrixWorld(),qr.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),this._frustum.setFromProjectionMatrix(qr,e.coordinateSystem,e.reversedDepth),e.reversedDepth?n.set(.5,0,0,.5,0,.5,0,.5,0,0,1,0,0,0,0,1):n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(qr)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.intensity=t.intensity,this.bias=t.bias,this.radius=t.radius,this.autoUpdate=t.autoUpdate,this.needsUpdate=t.needsUpdate,this.normalBias=t.normalBias,this.blurSamples=t.blurSamples,this.mapSize.copy(t.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const t={};return this.intensity!==1&&(t.intensity=this.intensity),this.bias!==0&&(t.bias=this.bias),this.normalBias!==0&&(t.normalBias=this.normalBias),this.radius!==1&&(t.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(t.mapSize=this.mapSize.toArray()),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}}class Fl extends Fh{constructor(t=-1,e=1,n=1,s=-1,a=.1,r=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=n,this.bottom=s,this.near=a,this.far=r,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,n,s,a,r){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=s,this.view.width=a,this.view.height=r,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,s=(this.top+this.bottom)/2;let a=n-t,r=n+t,o=s+e,l=s-e;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;a+=c*this.view.offsetX,r=a+c*this.view.width,o-=h*this.view.offsetY,l=o-h*this.view.height}this.projectionMatrix.makeOrthographic(a,r,o,l,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}}class Gf extends Hf{constructor(){super(new Fl(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class Vf extends $h{constructor(t,e){super(t,e),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Oe.DEFAULT_UP),this.updateMatrix(),this.target=new Oe,this.shadow=new Gf}dispose(){super.dispose(),this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}toJSON(t){const e=super.toJSON(t);return e.object.shadow=this.shadow.toJSON(),e.object.target=this.target.uuid,e}}class Wf extends $h{constructor(t,e){super(t,e),this.isAmbientLight=!0,this.type="AmbientLight"}}let Na;class Kh{static getContext(){return Na===void 0&&(Na=new(window.AudioContext||window.webkitAudioContext)),Na}static setContext(t){Na=t}}class Xf extends Dl{constructor(t){super(t)}load(t,e,n,s){const a=this,r=new zf(this.manager);r.setResponseType("arraybuffer"),r.setPath(this.path),r.setRequestHeader(this.requestHeader),r.setWithCredentials(this.withCredentials),r.load(t,function(l){try{const c=l.slice(0);Kh.getContext().decodeAudioData(c,function(u){e(u)}).catch(o)}catch(c){o(c)}},n,s);function o(l){s?s(l):Qt(l),a.manager.itemError(t)}}}class Yf extends yn{constructor(t=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=t}}class Jh{constructor(t=!0){this.autoStart=t,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=performance.now(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let t=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const e=performance.now();t=(e-this.oldTime)/1e3,this.oldTime=e,this.elapsedTime+=t}return t}}const Ii=new F,Zr=new $e,qf=new F,Li=new F,Di=new F;class Zf extends Oe{constructor(){super(),this.type="AudioListener",this.context=Kh.getContext(),this.gain=this.context.createGain(),this.gain.connect(this.context.destination),this.filter=null,this.timeDelta=0,this._clock=new Jh}getInput(){return this.gain}removeFilter(){return this.filter!==null&&(this.gain.disconnect(this.filter),this.filter.disconnect(this.context.destination),this.gain.connect(this.context.destination),this.filter=null),this}getFilter(){return this.filter}setFilter(t){return this.filter!==null?(this.gain.disconnect(this.filter),this.filter.disconnect(this.context.destination)):this.gain.disconnect(this.context.destination),this.filter=t,this.gain.connect(this.filter),this.filter.connect(this.context.destination),this}getMasterVolume(){return this.gain.gain.value}setMasterVolume(t){return this.gain.gain.setTargetAtTime(t,this.context.currentTime,.01),this}updateMatrixWorld(t){super.updateMatrixWorld(t);const e=this.context.listener;if(this.timeDelta=this._clock.getDelta(),this.matrixWorld.decompose(Ii,Zr,qf),Li.set(0,0,-1).applyQuaternion(Zr),Di.set(0,1,0).applyQuaternion(Zr),e.positionX){const n=this.context.currentTime+this.timeDelta;e.positionX.linearRampToValueAtTime(Ii.x,n),e.positionY.linearRampToValueAtTime(Ii.y,n),e.positionZ.linearRampToValueAtTime(Ii.z,n),e.forwardX.linearRampToValueAtTime(Li.x,n),e.forwardY.linearRampToValueAtTime(Li.y,n),e.forwardZ.linearRampToValueAtTime(Li.z,n),e.upX.linearRampToValueAtTime(Di.x,n),e.upY.linearRampToValueAtTime(Di.y,n),e.upZ.linearRampToValueAtTime(Di.z,n)}else e.setPosition(Ii.x,Ii.y,Ii.z),e.setOrientation(Li.x,Li.y,Li.z,Di.x,Di.y,Di.z)}}class Pc extends Oe{constructor(t){super(),this.type="Audio",this.listener=t,this.context=t.context,this.gain=this.context.createGain(),this.gain.connect(t.getInput()),this.autoplay=!1,this.buffer=null,this.detune=0,this.loop=!1,this.loopStart=0,this.loopEnd=0,this.offset=0,this.duration=void 0,this.playbackRate=1,this.isPlaying=!1,this.hasPlaybackControl=!0,this.source=null,this.sourceType="empty",this._startedAt=0,this._progress=0,this._connected=!1,this.filters=[]}getOutput(){return this.gain}setNodeSource(t){return this.hasPlaybackControl=!1,this.sourceType="audioNode",this.source=t,this.connect(),this}setMediaElementSource(t){return this.hasPlaybackControl=!1,this.sourceType="mediaNode",this.source=this.context.createMediaElementSource(t),this.connect(),this}setMediaStreamSource(t){return this.hasPlaybackControl=!1,this.sourceType="mediaStreamNode",this.source=this.context.createMediaStreamSource(t),this.connect(),this}setBuffer(t){return this.buffer=t,this.sourceType="buffer",this.autoplay&&this.play(),this}play(t=0){if(this.isPlaying===!0){Ft("Audio: Audio is already playing.");return}if(this.hasPlaybackControl===!1){Ft("Audio: this Audio has no playback control.");return}this._startedAt=this.context.currentTime+t;const e=this.context.createBufferSource();return e.buffer=this.buffer,e.loop=this.loop,e.loopStart=this.loopStart,e.loopEnd=this.loopEnd,e.onended=this.onEnded.bind(this),e.start(this._startedAt,this._progress+this.offset,this.duration),this.isPlaying=!0,this.source=e,this.setDetune(this.detune),this.setPlaybackRate(this.playbackRate),this.connect()}pause(){if(this.hasPlaybackControl===!1){Ft("Audio: this Audio has no playback control.");return}return this.isPlaying===!0&&(this._progress+=Math.max(this.context.currentTime-this._startedAt,0)*this.playbackRate,this.loop===!0&&(this._progress=this._progress%(this.duration||this.buffer.duration)),this.source.stop(),this.source.onended=null,this.isPlaying=!1),this}stop(t=0){if(this.hasPlaybackControl===!1){Ft("Audio: this Audio has no playback control.");return}return this._progress=0,this.source!==null&&(this.source.stop(this.context.currentTime+t),this.source.onended=null),this.isPlaying=!1,this}connect(){if(this.filters.length>0){this.source.connect(this.filters[0]);for(let t=1,e=this.filters.length;t<e;t++)this.filters[t-1].connect(this.filters[t]);this.filters[this.filters.length-1].connect(this.getOutput())}else this.source.connect(this.getOutput());return this._connected=!0,this}disconnect(){if(this._connected!==!1){if(this.filters.length>0){this.source.disconnect(this.filters[0]);for(let t=1,e=this.filters.length;t<e;t++)this.filters[t-1].disconnect(this.filters[t]);this.filters[this.filters.length-1].disconnect(this.getOutput())}else this.source.disconnect(this.getOutput());return this._connected=!1,this}}getFilters(){return this.filters}setFilters(t){return t||(t=[]),this._connected===!0?(this.disconnect(),this.filters=t.slice(),this.connect()):this.filters=t.slice(),this}setDetune(t){return this.detune=t,this.isPlaying===!0&&this.source.detune!==void 0&&this.source.detune.setTargetAtTime(this.detune,this.context.currentTime,.01),this}getDetune(){return this.detune}getFilter(){return this.getFilters()[0]}setFilter(t){return this.setFilters(t?[t]:[])}setPlaybackRate(t){if(this.hasPlaybackControl===!1){Ft("Audio: this Audio has no playback control.");return}return this.playbackRate=t,this.isPlaying===!0&&this.source.playbackRate.setTargetAtTime(this.playbackRate,this.context.currentTime,.01),this}getPlaybackRate(){return this.playbackRate}onEnded(){this.isPlaying=!1,this._progress=0}getLoop(){return this.hasPlaybackControl===!1?(Ft("Audio: this Audio has no playback control."),!1):this.loop}setLoop(t){if(this.hasPlaybackControl===!1){Ft("Audio: this Audio has no playback control.");return}return this.loop=t,this.isPlaying===!0&&(this.source.loop=this.loop),this}setLoopStart(t){return this.loopStart=t,this}setLoopEnd(t){return this.loopEnd=t,this}getVolume(){return this.gain.gain.value}setVolume(t){return this.gain.gain.setTargetAtTime(t,this.context.currentTime,.01),this}copy(t,e){return super.copy(t,e),t.sourceType!=="buffer"?(Ft("Audio: Audio source type cannot be copied."),this):(this.autoplay=t.autoplay,this.buffer=t.buffer,this.detune=t.detune,this.loop=t.loop,this.loopStart=t.loopStart,this.loopEnd=t.loopEnd,this.offset=t.offset,this.duration=t.duration,this.playbackRate=t.playbackRate,this.hasPlaybackControl=t.hasPlaybackControl,this.sourceType=t.sourceType,this.filters=t.filters.slice(),this)}clone(t){return new this.constructor(this.listener).copy(this,t)}}function Ic(i,t,e,n){const s=$f(n);switch(e){case Eh:return i*t;case yl:return i*t/s.components*s.byteLength;case Sl:return i*t/s.components*s.byteLength;case Ms:return i*t*2/s.components*s.byteLength;case wl:return i*t*2/s.components*s.byteLength;case Th:return i*t*3/s.components*s.byteLength;case Un:return i*t*4/s.components*s.byteLength;case bl:return i*t*4/s.components*s.byteLength;case Ga:case Va:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*8;case Wa:case Xa:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case wo:case Eo:return Math.max(i,16)*Math.max(t,8)/4;case So:case bo:return Math.max(i,8)*Math.max(t,8)/2;case To:case Ao:case Ro:case Po:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*8;case Co:case Io:case Lo:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case Do:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case Fo:return Math.floor((i+4)/5)*Math.floor((t+3)/4)*16;case No:return Math.floor((i+4)/5)*Math.floor((t+4)/5)*16;case Uo:return Math.floor((i+5)/6)*Math.floor((t+4)/5)*16;case Oo:return Math.floor((i+5)/6)*Math.floor((t+5)/6)*16;case Bo:return Math.floor((i+7)/8)*Math.floor((t+4)/5)*16;case ko:return Math.floor((i+7)/8)*Math.floor((t+5)/6)*16;case zo:return Math.floor((i+7)/8)*Math.floor((t+7)/8)*16;case Ho:return Math.floor((i+9)/10)*Math.floor((t+4)/5)*16;case Go:return Math.floor((i+9)/10)*Math.floor((t+5)/6)*16;case Vo:return Math.floor((i+9)/10)*Math.floor((t+7)/8)*16;case Wo:return Math.floor((i+9)/10)*Math.floor((t+9)/10)*16;case Xo:return Math.floor((i+11)/12)*Math.floor((t+9)/10)*16;case Yo:return Math.floor((i+11)/12)*Math.floor((t+11)/12)*16;case qo:case Zo:case $o:return Math.ceil(i/4)*Math.ceil(t/4)*16;case Ko:case Jo:return Math.ceil(i/4)*Math.ceil(t/4)*8;case jo:case Qo:return Math.ceil(i/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${e} format.`)}function $f(i){switch(i){case pn:case yh:return{byteLength:1,components:1};case Js:case Sh:case li:return{byteLength:2,components:1};case vl:case Ml:return{byteLength:2,components:4};case qn:case _l:case Nn:return{byteLength:4,components:1};case wh:case bh:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${i}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:xl}}));typeof window<"u"&&(window.__THREE__?Ft("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=xl);function jh(){let i=null,t=!1,e=null,n=null;function s(a,r){e(a,r),n=i.requestAnimationFrame(s)}return{start:function(){t!==!0&&e!==null&&(n=i.requestAnimationFrame(s),t=!0)},stop:function(){i.cancelAnimationFrame(n),t=!1},setAnimationLoop:function(a){e=a},setContext:function(a){i=a}}}function Kf(i){const t=new WeakMap;function e(o,l){const c=o.array,h=o.usage,u=c.byteLength,d=i.createBuffer();i.bindBuffer(l,d),i.bufferData(l,c,h),o.onUploadCallback();let p;if(c instanceof Float32Array)p=i.FLOAT;else if(typeof Float16Array<"u"&&c instanceof Float16Array)p=i.HALF_FLOAT;else if(c instanceof Uint16Array)o.isFloat16BufferAttribute?p=i.HALF_FLOAT:p=i.UNSIGNED_SHORT;else if(c instanceof Int16Array)p=i.SHORT;else if(c instanceof Uint32Array)p=i.UNSIGNED_INT;else if(c instanceof Int32Array)p=i.INT;else if(c instanceof Int8Array)p=i.BYTE;else if(c instanceof Uint8Array)p=i.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)p=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:d,type:p,bytesPerElement:c.BYTES_PER_ELEMENT,version:o.version,size:u}}function n(o,l,c){const h=l.array,u=l.updateRanges;if(i.bindBuffer(c,o),u.length===0)i.bufferSubData(c,0,h);else{u.sort((p,g)=>p.start-g.start);let d=0;for(let p=1;p<u.length;p++){const g=u[d],x=u[p];x.start<=g.start+g.count+1?g.count=Math.max(g.count,x.start+x.count-g.start):(++d,u[d]=x)}u.length=d+1;for(let p=0,g=u.length;p<g;p++){const x=u[p];i.bufferSubData(c,x.start*h.BYTES_PER_ELEMENT,h,x.start,x.count)}l.clearUpdateRanges()}l.onUploadCallback()}function s(o){return o.isInterleavedBufferAttribute&&(o=o.data),t.get(o)}function a(o){o.isInterleavedBufferAttribute&&(o=o.data);const l=t.get(o);l&&(i.deleteBuffer(l.buffer),t.delete(o))}function r(o,l){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){const h=t.get(o);(!h||h.version<o.version)&&t.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}const c=t.get(o);if(c===void 0)t.set(o,e(o,l));else if(c.version<o.version){if(c.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(c.buffer,o,l),c.version=o.version}}return{get:s,remove:a,update:r}}var Jf=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,jf=`#ifdef USE_ALPHAHASH
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
#endif`,Qf=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,tp=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,ep=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,np=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,ip=`#ifdef USE_AOMAP
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
#endif`,sp=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,ap=`#ifdef USE_BATCHING
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
#endif`,rp=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,op=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,lp=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,cp=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,hp=`#ifdef USE_IRIDESCENCE
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
#endif`,up=`#ifdef USE_BUMPMAP
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
#endif`,dp=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,fp=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,pp=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,mp=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,gp=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,xp=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,_p=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,vp=`#if defined( USE_COLOR_ALPHA )
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
#endif`,Mp=`#define PI 3.141592653589793
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
} // validated`,yp=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,Sp=`vec3 transformedNormal = objectNormal;
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
#endif`,wp=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,bp=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Ep=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Tp=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Ap="gl_FragColor = linearToOutputTexel( gl_FragColor );",Cp=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,Rp=`#ifdef USE_ENVMAP
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
#endif`,Pp=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,Ip=`#ifdef USE_ENVMAP
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
#endif`,Lp=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Dp=`#ifdef USE_ENVMAP
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
#endif`,Fp=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Np=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Up=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Op=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Bp=`#ifdef USE_GRADIENTMAP
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
}`,kp=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,zp=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Hp=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Gp=`uniform bool receiveShadow;
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
#endif`,Vp=`#ifdef USE_ENVMAP
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
#endif`,Wp=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Xp=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Yp=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,qp=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Zp=`PhysicalMaterial material;
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
#endif`,$p=`uniform sampler2D dfgLUT;
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
}`,Kp=`
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
#endif`,Jp=`#if defined( RE_IndirectDiffuse )
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
#endif`,jp=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Qp=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,tm=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,em=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,nm=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,im=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,sm=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,am=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,rm=`#if defined( USE_POINTS_UV )
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
#endif`,om=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,lm=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,cm=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,hm=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,um=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,dm=`#ifdef USE_MORPHTARGETS
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
#endif`,fm=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,pm=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,mm=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,gm=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,xm=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,_m=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,vm=`#ifdef USE_NORMALMAP
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
#endif`,Mm=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,ym=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Sm=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,wm=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,bm=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Em=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,Tm=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Am=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Cm=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Rm=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Pm=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Im=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Lm=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Dm=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Fm=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,Nm=`float getShadowMask() {
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
}`,Um=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Om=`#ifdef USE_SKINNING
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
#endif`,Bm=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,km=`#ifdef USE_SKINNING
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
#endif`,zm=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Hm=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Gm=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Vm=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,Wm=`#ifdef USE_TRANSMISSION
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
#endif`,Xm=`#ifdef USE_TRANSMISSION
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
#endif`,Ym=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,qm=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Zm=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,$m=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const Km=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Jm=`uniform sampler2D t2D;
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
}`,jm=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Qm=`#ifdef ENVMAP_TYPE_CUBE
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
}`,t0=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,e0=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,n0=`#include <common>
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
}`,i0=`#if DEPTH_PACKING == 3200
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
}`,s0=`#define DISTANCE
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
}`,a0=`#define DISTANCE
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
}`,r0=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,o0=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,l0=`uniform float scale;
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
}`,c0=`uniform vec3 diffuse;
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
}`,h0=`#include <common>
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
}`,u0=`uniform vec3 diffuse;
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
}`,d0=`#define LAMBERT
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
}`,f0=`#define LAMBERT
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
}`,p0=`#define MATCAP
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
}`,m0=`#define MATCAP
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
}`,g0=`#define NORMAL
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
}`,x0=`#define NORMAL
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
}`,_0=`#define PHONG
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
}`,v0=`#define PHONG
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
}`,M0=`#define STANDARD
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
}`,y0=`#define STANDARD
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
}`,S0=`#define TOON
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
}`,w0=`#define TOON
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
}`,b0=`uniform float size;
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
}`,E0=`uniform vec3 diffuse;
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
}`,T0=`#include <common>
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
}`,A0=`uniform vec3 color;
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
}`,C0=`uniform float rotation;
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
}`,R0=`uniform vec3 diffuse;
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
}`,qt={alphahash_fragment:Jf,alphahash_pars_fragment:jf,alphamap_fragment:Qf,alphamap_pars_fragment:tp,alphatest_fragment:ep,alphatest_pars_fragment:np,aomap_fragment:ip,aomap_pars_fragment:sp,batching_pars_vertex:ap,batching_vertex:rp,begin_vertex:op,beginnormal_vertex:lp,bsdfs:cp,iridescence_fragment:hp,bumpmap_pars_fragment:up,clipping_planes_fragment:dp,clipping_planes_pars_fragment:fp,clipping_planes_pars_vertex:pp,clipping_planes_vertex:mp,color_fragment:gp,color_pars_fragment:xp,color_pars_vertex:_p,color_vertex:vp,common:Mp,cube_uv_reflection_fragment:yp,defaultnormal_vertex:Sp,displacementmap_pars_vertex:wp,displacementmap_vertex:bp,emissivemap_fragment:Ep,emissivemap_pars_fragment:Tp,colorspace_fragment:Ap,colorspace_pars_fragment:Cp,envmap_fragment:Rp,envmap_common_pars_fragment:Pp,envmap_pars_fragment:Ip,envmap_pars_vertex:Lp,envmap_physical_pars_fragment:Vp,envmap_vertex:Dp,fog_vertex:Fp,fog_pars_vertex:Np,fog_fragment:Up,fog_pars_fragment:Op,gradientmap_pars_fragment:Bp,lightmap_pars_fragment:kp,lights_lambert_fragment:zp,lights_lambert_pars_fragment:Hp,lights_pars_begin:Gp,lights_toon_fragment:Wp,lights_toon_pars_fragment:Xp,lights_phong_fragment:Yp,lights_phong_pars_fragment:qp,lights_physical_fragment:Zp,lights_physical_pars_fragment:$p,lights_fragment_begin:Kp,lights_fragment_maps:Jp,lights_fragment_end:jp,logdepthbuf_fragment:Qp,logdepthbuf_pars_fragment:tm,logdepthbuf_pars_vertex:em,logdepthbuf_vertex:nm,map_fragment:im,map_pars_fragment:sm,map_particle_fragment:am,map_particle_pars_fragment:rm,metalnessmap_fragment:om,metalnessmap_pars_fragment:lm,morphinstance_vertex:cm,morphcolor_vertex:hm,morphnormal_vertex:um,morphtarget_pars_vertex:dm,morphtarget_vertex:fm,normal_fragment_begin:pm,normal_fragment_maps:mm,normal_pars_fragment:gm,normal_pars_vertex:xm,normal_vertex:_m,normalmap_pars_fragment:vm,clearcoat_normal_fragment_begin:Mm,clearcoat_normal_fragment_maps:ym,clearcoat_pars_fragment:Sm,iridescence_pars_fragment:wm,opaque_fragment:bm,packing:Em,premultiplied_alpha_fragment:Tm,project_vertex:Am,dithering_fragment:Cm,dithering_pars_fragment:Rm,roughnessmap_fragment:Pm,roughnessmap_pars_fragment:Im,shadowmap_pars_fragment:Lm,shadowmap_pars_vertex:Dm,shadowmap_vertex:Fm,shadowmask_pars_fragment:Nm,skinbase_vertex:Um,skinning_pars_vertex:Om,skinning_vertex:Bm,skinnormal_vertex:km,specularmap_fragment:zm,specularmap_pars_fragment:Hm,tonemapping_fragment:Gm,tonemapping_pars_fragment:Vm,transmission_fragment:Wm,transmission_pars_fragment:Xm,uv_pars_fragment:Ym,uv_pars_vertex:qm,uv_vertex:Zm,worldpos_vertex:$m,background_vert:Km,background_frag:Jm,backgroundCube_vert:jm,backgroundCube_frag:Qm,cube_vert:t0,cube_frag:e0,depth_vert:n0,depth_frag:i0,distance_vert:s0,distance_frag:a0,equirect_vert:r0,equirect_frag:o0,linedashed_vert:l0,linedashed_frag:c0,meshbasic_vert:h0,meshbasic_frag:u0,meshlambert_vert:d0,meshlambert_frag:f0,meshmatcap_vert:p0,meshmatcap_frag:m0,meshnormal_vert:g0,meshnormal_frag:x0,meshphong_vert:_0,meshphong_frag:v0,meshphysical_vert:M0,meshphysical_frag:y0,meshtoon_vert:S0,meshtoon_frag:w0,points_vert:b0,points_frag:E0,shadow_vert:T0,shadow_frag:A0,sprite_vert:C0,sprite_frag:R0},_t={common:{diffuse:{value:new Ot(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Yt},alphaMap:{value:null},alphaMapTransform:{value:new Yt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Yt}},envmap:{envMap:{value:null},envMapRotation:{value:new Yt},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Yt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Yt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Yt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Yt},normalScale:{value:new ut(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Yt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Yt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Yt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Yt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Ot(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Ot(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Yt},alphaTest:{value:0},uvTransform:{value:new Yt}},sprite:{diffuse:{value:new Ot(16777215)},opacity:{value:1},center:{value:new ut(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Yt},alphaMap:{value:null},alphaMapTransform:{value:new Yt},alphaTest:{value:0}}},zn={basic:{uniforms:tn([_t.common,_t.specularmap,_t.envmap,_t.aomap,_t.lightmap,_t.fog]),vertexShader:qt.meshbasic_vert,fragmentShader:qt.meshbasic_frag},lambert:{uniforms:tn([_t.common,_t.specularmap,_t.envmap,_t.aomap,_t.lightmap,_t.emissivemap,_t.bumpmap,_t.normalmap,_t.displacementmap,_t.fog,_t.lights,{emissive:{value:new Ot(0)}}]),vertexShader:qt.meshlambert_vert,fragmentShader:qt.meshlambert_frag},phong:{uniforms:tn([_t.common,_t.specularmap,_t.envmap,_t.aomap,_t.lightmap,_t.emissivemap,_t.bumpmap,_t.normalmap,_t.displacementmap,_t.fog,_t.lights,{emissive:{value:new Ot(0)},specular:{value:new Ot(1118481)},shininess:{value:30}}]),vertexShader:qt.meshphong_vert,fragmentShader:qt.meshphong_frag},standard:{uniforms:tn([_t.common,_t.envmap,_t.aomap,_t.lightmap,_t.emissivemap,_t.bumpmap,_t.normalmap,_t.displacementmap,_t.roughnessmap,_t.metalnessmap,_t.fog,_t.lights,{emissive:{value:new Ot(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:qt.meshphysical_vert,fragmentShader:qt.meshphysical_frag},toon:{uniforms:tn([_t.common,_t.aomap,_t.lightmap,_t.emissivemap,_t.bumpmap,_t.normalmap,_t.displacementmap,_t.gradientmap,_t.fog,_t.lights,{emissive:{value:new Ot(0)}}]),vertexShader:qt.meshtoon_vert,fragmentShader:qt.meshtoon_frag},matcap:{uniforms:tn([_t.common,_t.bumpmap,_t.normalmap,_t.displacementmap,_t.fog,{matcap:{value:null}}]),vertexShader:qt.meshmatcap_vert,fragmentShader:qt.meshmatcap_frag},points:{uniforms:tn([_t.points,_t.fog]),vertexShader:qt.points_vert,fragmentShader:qt.points_frag},dashed:{uniforms:tn([_t.common,_t.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:qt.linedashed_vert,fragmentShader:qt.linedashed_frag},depth:{uniforms:tn([_t.common,_t.displacementmap]),vertexShader:qt.depth_vert,fragmentShader:qt.depth_frag},normal:{uniforms:tn([_t.common,_t.bumpmap,_t.normalmap,_t.displacementmap,{opacity:{value:1}}]),vertexShader:qt.meshnormal_vert,fragmentShader:qt.meshnormal_frag},sprite:{uniforms:tn([_t.sprite,_t.fog]),vertexShader:qt.sprite_vert,fragmentShader:qt.sprite_frag},background:{uniforms:{uvTransform:{value:new Yt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:qt.background_vert,fragmentShader:qt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Yt}},vertexShader:qt.backgroundCube_vert,fragmentShader:qt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:qt.cube_vert,fragmentShader:qt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:qt.equirect_vert,fragmentShader:qt.equirect_frag},distance:{uniforms:tn([_t.common,_t.displacementmap,{referencePosition:{value:new F},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:qt.distance_vert,fragmentShader:qt.distance_frag},shadow:{uniforms:tn([_t.lights,_t.fog,{color:{value:new Ot(0)},opacity:{value:1}}]),vertexShader:qt.shadow_vert,fragmentShader:qt.shadow_frag}};zn.physical={uniforms:tn([zn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Yt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Yt},clearcoatNormalScale:{value:new ut(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Yt},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Yt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Yt},sheen:{value:0},sheenColor:{value:new Ot(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Yt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Yt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Yt},transmissionSamplerSize:{value:new ut},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Yt},attenuationDistance:{value:0},attenuationColor:{value:new Ot(0)},specularColor:{value:new Ot(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Yt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Yt},anisotropyVector:{value:new ut},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Yt}}]),vertexShader:qt.meshphysical_vert,fragmentShader:qt.meshphysical_frag};const Ua={r:0,b:0,g:0},Fi=new Be,P0=new jt;function I0(i,t,e,n,s,a,r){const o=new Ot(0);let l=a===!0?0:1,c,h,u=null,d=0,p=null;function g(w){let y=w.isScene===!0?w.background:null;return y&&y.isTexture&&(y=(w.backgroundBlurriness>0?e:t).get(y)),y}function x(w){let y=!1;const A=g(w);A===null?f(o,l):A&&A.isColor&&(f(A,1),y=!0);const P=i.xr.getEnvironmentBlendMode();P==="additive"?n.buffers.color.setClear(0,0,0,1,r):P==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,r),(i.autoClear||y)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))}function m(w,y){const A=g(y);A&&(A.isCubeTexture||A.mapping===hr)?(h===void 0&&(h=new nt(new ce(1,1,1),new Tn({name:"BackgroundCubeMaterial",uniforms:Ss(zn.backgroundCube.uniforms),vertexShader:zn.backgroundCube.vertexShader,fragmentShader:zn.backgroundCube.fragmentShader,side:rn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(P,T,D){this.matrixWorld.copyPosition(D.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),s.update(h)),Fi.copy(y.backgroundRotation),Fi.x*=-1,Fi.y*=-1,Fi.z*=-1,A.isCubeTexture&&A.isRenderTargetTexture===!1&&(Fi.y*=-1,Fi.z*=-1),h.material.uniforms.envMap.value=A,h.material.uniforms.flipEnvMap.value=A.isCubeTexture&&A.isRenderTargetTexture===!1?-1:1,h.material.uniforms.backgroundBlurriness.value=y.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=y.backgroundIntensity,h.material.uniforms.backgroundRotation.value.setFromMatrix4(P0.makeRotationFromEuler(Fi)),h.material.toneMapped=te.getTransfer(A.colorSpace)!==de,(u!==A||d!==A.version||p!==i.toneMapping)&&(h.material.needsUpdate=!0,u=A,d=A.version,p=i.toneMapping),h.layers.enableAll(),w.unshift(h,h.geometry,h.material,0,0,null)):A&&A.isTexture&&(c===void 0&&(c=new nt(new Ts(2,2),new Tn({name:"BackgroundMaterial",uniforms:Ss(zn.background.uniforms),vertexShader:zn.background.vertexShader,fragmentShader:zn.background.fragmentShader,side:wi,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),s.update(c)),c.material.uniforms.t2D.value=A,c.material.uniforms.backgroundIntensity.value=y.backgroundIntensity,c.material.toneMapped=te.getTransfer(A.colorSpace)!==de,A.matrixAutoUpdate===!0&&A.updateMatrix(),c.material.uniforms.uvTransform.value.copy(A.matrix),(u!==A||d!==A.version||p!==i.toneMapping)&&(c.material.needsUpdate=!0,u=A,d=A.version,p=i.toneMapping),c.layers.enableAll(),w.unshift(c,c.geometry,c.material,0,0,null))}function f(w,y){w.getRGB(Ua,Dh(i)),n.buffers.color.setClear(Ua.r,Ua.g,Ua.b,y,r)}function b(){h!==void 0&&(h.geometry.dispose(),h.material.dispose(),h=void 0),c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0)}return{getClearColor:function(){return o},setClearColor:function(w,y=1){o.set(w),l=y,f(o,l)},getClearAlpha:function(){return l},setClearAlpha:function(w){l=w,f(o,l)},render:x,addToRenderList:m,dispose:b}}function L0(i,t){const e=i.getParameter(i.MAX_VERTEX_ATTRIBS),n={},s=d(null);let a=s,r=!1;function o(S,v,C,L,N){let U=!1;const H=u(L,C,v);a!==H&&(a=H,c(a.object)),U=p(S,L,C,N),U&&g(S,L,C,N),N!==null&&t.update(N,i.ELEMENT_ARRAY_BUFFER),(U||r)&&(r=!1,y(S,v,C,L),N!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,t.get(N).buffer))}function l(){return i.createVertexArray()}function c(S){return i.bindVertexArray(S)}function h(S){return i.deleteVertexArray(S)}function u(S,v,C){const L=C.wireframe===!0;let N=n[S.id];N===void 0&&(N={},n[S.id]=N);let U=N[v.id];U===void 0&&(U={},N[v.id]=U);let H=U[L];return H===void 0&&(H=d(l()),U[L]=H),H}function d(S){const v=[],C=[],L=[];for(let N=0;N<e;N++)v[N]=0,C[N]=0,L[N]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:v,enabledAttributes:C,attributeDivisors:L,object:S,attributes:{},index:null}}function p(S,v,C,L){const N=a.attributes,U=v.attributes;let H=0;const k=C.getAttributes();for(const q in k)if(k[q].location>=0){const tt=N[q];let it=U[q];if(it===void 0&&(q==="instanceMatrix"&&S.instanceMatrix&&(it=S.instanceMatrix),q==="instanceColor"&&S.instanceColor&&(it=S.instanceColor)),tt===void 0||tt.attribute!==it||it&&tt.data!==it.data)return!0;H++}return a.attributesNum!==H||a.index!==L}function g(S,v,C,L){const N={},U=v.attributes;let H=0;const k=C.getAttributes();for(const q in k)if(k[q].location>=0){let tt=U[q];tt===void 0&&(q==="instanceMatrix"&&S.instanceMatrix&&(tt=S.instanceMatrix),q==="instanceColor"&&S.instanceColor&&(tt=S.instanceColor));const it={};it.attribute=tt,tt&&tt.data&&(it.data=tt.data),N[q]=it,H++}a.attributes=N,a.attributesNum=H,a.index=L}function x(){const S=a.newAttributes;for(let v=0,C=S.length;v<C;v++)S[v]=0}function m(S){f(S,0)}function f(S,v){const C=a.newAttributes,L=a.enabledAttributes,N=a.attributeDivisors;C[S]=1,L[S]===0&&(i.enableVertexAttribArray(S),L[S]=1),N[S]!==v&&(i.vertexAttribDivisor(S,v),N[S]=v)}function b(){const S=a.newAttributes,v=a.enabledAttributes;for(let C=0,L=v.length;C<L;C++)v[C]!==S[C]&&(i.disableVertexAttribArray(C),v[C]=0)}function w(S,v,C,L,N,U,H){H===!0?i.vertexAttribIPointer(S,v,C,N,U):i.vertexAttribPointer(S,v,C,L,N,U)}function y(S,v,C,L){x();const N=L.attributes,U=C.getAttributes(),H=v.defaultAttributeValues;for(const k in U){const q=U[k];if(q.location>=0){let ot=N[k];if(ot===void 0&&(k==="instanceMatrix"&&S.instanceMatrix&&(ot=S.instanceMatrix),k==="instanceColor"&&S.instanceColor&&(ot=S.instanceColor)),ot!==void 0){const tt=ot.normalized,it=ot.itemSize,Gt=t.get(ot);if(Gt===void 0)continue;const zt=Gt.buffer,ae=Gt.type,ne=Gt.bytesPerElement,Z=ae===i.INT||ae===i.UNSIGNED_INT||ot.gpuType===_l;if(ot.isInterleavedBufferAttribute){const et=ot.data,yt=et.stride,Nt=ot.offset;if(et.isInstancedInterleavedBuffer){for(let St=0;St<q.locationSize;St++)f(q.location+St,et.meshPerAttribute);S.isInstancedMesh!==!0&&L._maxInstanceCount===void 0&&(L._maxInstanceCount=et.meshPerAttribute*et.count)}else for(let St=0;St<q.locationSize;St++)m(q.location+St);i.bindBuffer(i.ARRAY_BUFFER,zt);for(let St=0;St<q.locationSize;St++)w(q.location+St,it/q.locationSize,ae,tt,yt*ne,(Nt+it/q.locationSize*St)*ne,Z)}else{if(ot.isInstancedBufferAttribute){for(let et=0;et<q.locationSize;et++)f(q.location+et,ot.meshPerAttribute);S.isInstancedMesh!==!0&&L._maxInstanceCount===void 0&&(L._maxInstanceCount=ot.meshPerAttribute*ot.count)}else for(let et=0;et<q.locationSize;et++)m(q.location+et);i.bindBuffer(i.ARRAY_BUFFER,zt);for(let et=0;et<q.locationSize;et++)w(q.location+et,it/q.locationSize,ae,tt,it*ne,it/q.locationSize*et*ne,Z)}}else if(H!==void 0){const tt=H[k];if(tt!==void 0)switch(tt.length){case 2:i.vertexAttrib2fv(q.location,tt);break;case 3:i.vertexAttrib3fv(q.location,tt);break;case 4:i.vertexAttrib4fv(q.location,tt);break;default:i.vertexAttrib1fv(q.location,tt)}}}}b()}function A(){D();for(const S in n){const v=n[S];for(const C in v){const L=v[C];for(const N in L)h(L[N].object),delete L[N];delete v[C]}delete n[S]}}function P(S){if(n[S.id]===void 0)return;const v=n[S.id];for(const C in v){const L=v[C];for(const N in L)h(L[N].object),delete L[N];delete v[C]}delete n[S.id]}function T(S){for(const v in n){const C=n[v];if(C[S.id]===void 0)continue;const L=C[S.id];for(const N in L)h(L[N].object),delete L[N];delete C[S.id]}}function D(){M(),r=!0,a!==s&&(a=s,c(a.object))}function M(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:o,reset:D,resetDefaultState:M,dispose:A,releaseStatesOfGeometry:P,releaseStatesOfProgram:T,initAttributes:x,enableAttribute:m,disableUnusedAttributes:b}}function D0(i,t,e){let n;function s(c){n=c}function a(c,h){i.drawArrays(n,c,h),e.update(h,n,1)}function r(c,h,u){u!==0&&(i.drawArraysInstanced(n,c,h,u),e.update(h,n,u))}function o(c,h,u){if(u===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,c,0,h,0,u);let p=0;for(let g=0;g<u;g++)p+=h[g];e.update(p,n,1)}function l(c,h,u,d){if(u===0)return;const p=t.get("WEBGL_multi_draw");if(p===null)for(let g=0;g<c.length;g++)r(c[g],h[g],d[g]);else{p.multiDrawArraysInstancedWEBGL(n,c,0,h,0,d,0,u);let g=0;for(let x=0;x<u;x++)g+=h[x]*d[x];e.update(g,n,1)}}this.setMode=s,this.render=a,this.renderInstances=r,this.renderMultiDraw=o,this.renderMultiDrawInstances=l}function F0(i,t,e,n){let s;function a(){if(s!==void 0)return s;if(t.has("EXT_texture_filter_anisotropic")===!0){const T=t.get("EXT_texture_filter_anisotropic");s=i.getParameter(T.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function r(T){return!(T!==Un&&n.convert(T)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(T){const D=T===li&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(T!==pn&&n.convert(T)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE)&&T!==Nn&&!D)}function l(T){if(T==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";T="mediump"}return T==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=e.precision!==void 0?e.precision:"highp";const h=l(c);h!==c&&(Ft("WebGLRenderer:",c,"not supported, using",h,"instead."),c=h);const u=e.logarithmicDepthBuffer===!0,d=e.reversedDepthBuffer===!0&&t.has("EXT_clip_control"),p=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),g=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),x=i.getParameter(i.MAX_TEXTURE_SIZE),m=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),f=i.getParameter(i.MAX_VERTEX_ATTRIBS),b=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),w=i.getParameter(i.MAX_VARYING_VECTORS),y=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),A=i.getParameter(i.MAX_SAMPLES),P=i.getParameter(i.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:a,getMaxPrecision:l,textureFormatReadable:r,textureTypeReadable:o,precision:c,logarithmicDepthBuffer:u,reversedDepthBuffer:d,maxTextures:p,maxVertexTextures:g,maxTextureSize:x,maxCubemapSize:m,maxAttributes:f,maxVertexUniforms:b,maxVaryings:w,maxFragmentUniforms:y,maxSamples:A,samples:P}}function N0(i){const t=this;let e=null,n=0,s=!1,a=!1;const r=new Ui,o=new Yt,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(u,d){const p=u.length!==0||d||n!==0||s;return s=d,n=u.length,p},this.beginShadows=function(){a=!0,h(null)},this.endShadows=function(){a=!1},this.setGlobalState=function(u,d){e=h(u,d,0)},this.setState=function(u,d,p){const g=u.clippingPlanes,x=u.clipIntersection,m=u.clipShadows,f=i.get(u);if(!s||g===null||g.length===0||a&&!m)a?h(null):c();else{const b=a?0:n,w=b*4;let y=f.clippingState||null;l.value=y,y=h(g,d,w,p);for(let A=0;A!==w;++A)y[A]=e[A];f.clippingState=y,this.numIntersection=x?this.numPlanes:0,this.numPlanes+=b}};function c(){l.value!==e&&(l.value=e,l.needsUpdate=n>0),t.numPlanes=n,t.numIntersection=0}function h(u,d,p,g){const x=u!==null?u.length:0;let m=null;if(x!==0){if(m=l.value,g!==!0||m===null){const f=p+x*4,b=d.matrixWorldInverse;o.getNormalMatrix(b),(m===null||m.length<f)&&(m=new Float32Array(f));for(let w=0,y=p;w!==x;++w,y+=4)r.copy(u[w]).applyMatrix4(b,o),r.normal.toArray(m,y),m[y+3]=r.constant}l.value=m,l.needsUpdate=!0}return t.numPlanes=x,t.numIntersection=0,m}}function U0(i){let t=new WeakMap;function e(r,o){return o===_o?r.mapping=Hi:o===vo&&(r.mapping=vs),r}function n(r){if(r&&r.isTexture){const o=r.mapping;if(o===_o||o===vo)if(t.has(r)){const l=t.get(r).texture;return e(l,r.mapping)}else{const l=r.image;if(l&&l.height>0){const c=new Uh(l.height);return c.fromEquirectangularTexture(i,r),t.set(r,c),r.addEventListener("dispose",s),e(c.texture,r.mapping)}else return null}}return r}function s(r){const o=r.target;o.removeEventListener("dispose",s);const l=t.get(o);l!==void 0&&(t.delete(o),l.dispose())}function a(){t=new WeakMap}return{get:n,dispose:a}}const yi=4,Lc=[.125,.215,.35,.446,.526,.582],Bi=20,O0=256,Bs=new Fl,Dc=new Ot;let $r=null,Kr=0,Jr=0,jr=!1;const B0=new F;class Fc{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._sigmas=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(t,e=0,n=.1,s=100,a={}){const{size:r=256,position:o=B0}=a;$r=this._renderer.getRenderTarget(),Kr=this._renderer.getActiveCubeFace(),Jr=this._renderer.getActiveMipmapLevel(),jr=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(r);const l=this._allocateTargets();return l.depthBuffer=!0,this._sceneToCubeUV(t,n,s,l,o),e>0&&this._blur(l,0,0,e),this._applyPMREM(l),this._cleanup(l),l}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Oc(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Uc(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodMeshes.length;t++)this._lodMeshes[t].geometry.dispose()}_cleanup(t){this._renderer.setRenderTarget($r,Kr,Jr),this._renderer.xr.enabled=jr,t.scissorTest=!1,hs(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===Hi||t.mapping===vs?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),$r=this._renderer.getRenderTarget(),Kr=this._renderer.getActiveCubeFace(),Jr=this._renderer.getActiveMipmapLevel(),jr=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const n=e||this._allocateTargets();return this._textureToCubeUV(t,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,n={magFilter:Ge,minFilter:Ge,generateMipmaps:!1,type:li,format:Un,colorSpace:ys,depthBuffer:!1},s=Nc(t,e,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Nc(t,e,n);const{_lodMax:a}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods,sigmas:this._sigmas}=k0(a)),this._blurMaterial=H0(a,t,e),this._ggxMaterial=z0(a,t,e)}return s}_compileMaterial(t){const e=new nt(new on,t);this._renderer.compile(e,Bs)}_sceneToCubeUV(t,e,n,s,a){const l=new yn(90,1,e,n),c=[1,-1,1,1,1,1],h=[1,1,1,-1,-1,-1],u=this._renderer,d=u.autoClear,p=u.toneMapping;u.getClearColor(Dc),u.toneMapping=Wn,u.autoClear=!1,u.state.buffers.depth.getReversed()&&(u.setRenderTarget(s),u.clearDepth(),u.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new nt(new ce,new Ue({name:"PMREM.Background",side:rn,depthWrite:!1,depthTest:!1})));const x=this._backgroundBox,m=x.material;let f=!1;const b=t.background;b?b.isColor&&(m.color.copy(b),t.background=null,f=!0):(m.color.copy(Dc),f=!0);for(let w=0;w<6;w++){const y=w%3;y===0?(l.up.set(0,c[w],0),l.position.set(a.x,a.y,a.z),l.lookAt(a.x+h[w],a.y,a.z)):y===1?(l.up.set(0,0,c[w]),l.position.set(a.x,a.y,a.z),l.lookAt(a.x,a.y+h[w],a.z)):(l.up.set(0,c[w],0),l.position.set(a.x,a.y,a.z),l.lookAt(a.x,a.y,a.z+h[w]));const A=this._cubeSize;hs(s,y*A,w>2?A:0,A,A),u.setRenderTarget(s),f&&u.render(x,l),u.render(t,l)}u.toneMapping=p,u.autoClear=d,t.background=b}_textureToCubeUV(t,e){const n=this._renderer,s=t.mapping===Hi||t.mapping===vs;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=Oc()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Uc());const a=s?this._cubemapMaterial:this._equirectMaterial,r=this._lodMeshes[0];r.material=a;const o=a.uniforms;o.envMap.value=t;const l=this._cubeSize;hs(e,0,0,3*l,2*l),n.setRenderTarget(e),n.render(r,Bs)}_applyPMREM(t){const e=this._renderer,n=e.autoClear;e.autoClear=!1;const s=this._lodMeshes.length;for(let a=1;a<s;a++)this._applyGGXFilter(t,a-1,a);e.autoClear=n}_applyGGXFilter(t,e,n){const s=this._renderer,a=this._pingPongRenderTarget,r=this._ggxMaterial,o=this._lodMeshes[n];o.material=r;const l=r.uniforms,c=n/(this._lodMeshes.length-1),h=e/(this._lodMeshes.length-1),u=Math.sqrt(c*c-h*h),d=0+c*1.25,p=u*d,{_lodMax:g}=this,x=this._sizeLods[n],m=3*x*(n>g-yi?n-g+yi:0),f=4*(this._cubeSize-x);l.envMap.value=t.texture,l.roughness.value=p,l.mipInt.value=g-e,hs(a,m,f,3*x,2*x),s.setRenderTarget(a),s.render(o,Bs),l.envMap.value=a.texture,l.roughness.value=0,l.mipInt.value=g-n,hs(t,m,f,3*x,2*x),s.setRenderTarget(t),s.render(o,Bs)}_blur(t,e,n,s,a){const r=this._pingPongRenderTarget;this._halfBlur(t,r,e,n,s,"latitudinal",a),this._halfBlur(r,t,n,n,s,"longitudinal",a)}_halfBlur(t,e,n,s,a,r,o){const l=this._renderer,c=this._blurMaterial;r!=="latitudinal"&&r!=="longitudinal"&&Qt("blur direction must be either latitudinal or longitudinal!");const h=3,u=this._lodMeshes[s];u.material=c;const d=c.uniforms,p=this._sizeLods[n]-1,g=isFinite(a)?Math.PI/(2*p):2*Math.PI/(2*Bi-1),x=a/g,m=isFinite(a)?1+Math.floor(h*x):Bi;m>Bi&&Ft(`sigmaRadians, ${a}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${Bi}`);const f=[];let b=0;for(let T=0;T<Bi;++T){const D=T/x,M=Math.exp(-D*D/2);f.push(M),T===0?b+=M:T<m&&(b+=2*M)}for(let T=0;T<f.length;T++)f[T]=f[T]/b;d.envMap.value=t.texture,d.samples.value=m,d.weights.value=f,d.latitudinal.value=r==="latitudinal",o&&(d.poleAxis.value=o);const{_lodMax:w}=this;d.dTheta.value=g,d.mipInt.value=w-n;const y=this._sizeLods[s],A=3*y*(s>w-yi?s-w+yi:0),P=4*(this._cubeSize-y);hs(e,A,P,3*y,2*y),l.setRenderTarget(e),l.render(u,Bs)}}function k0(i){const t=[],e=[],n=[];let s=i;const a=i-yi+1+Lc.length;for(let r=0;r<a;r++){const o=Math.pow(2,s);t.push(o);let l=1/o;r>i-yi?l=Lc[r-i+yi-1]:r===0&&(l=0),e.push(l);const c=1/(o-2),h=-c,u=1+c,d=[h,h,u,h,u,u,h,h,u,u,h,u],p=6,g=6,x=3,m=2,f=1,b=new Float32Array(x*g*p),w=new Float32Array(m*g*p),y=new Float32Array(f*g*p);for(let P=0;P<p;P++){const T=P%3*2/3-1,D=P>2?0:-1,M=[T,D,0,T+2/3,D,0,T+2/3,D+1,0,T,D,0,T+2/3,D+1,0,T,D+1,0];b.set(M,x*g*P),w.set(d,m*g*P);const S=[P,P,P,P,P,P];y.set(S,f*g*P)}const A=new on;A.setAttribute("position",new bn(b,x)),A.setAttribute("uv",new bn(w,m)),A.setAttribute("faceIndex",new bn(y,f)),n.push(new nt(A,null)),s>yi&&s--}return{lodMeshes:n,sizeLods:t,sigmas:e}}function Nc(i,t,e){const n=new Yn(i,t,e);return n.texture.mapping=hr,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function hs(i,t,e,n,s){i.viewport.set(t,e,n,s),i.scissor.set(t,e,n,s)}function z0(i,t,e){return new Tn({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:O0,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:fr(),fragmentShader:`

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
		`,blending:ai,depthTest:!1,depthWrite:!1})}function H0(i,t,e){const n=new Float32Array(Bi),s=new F(0,1,0);return new Tn({name:"SphericalGaussianBlur",defines:{n:Bi,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:s}},vertexShader:fr(),fragmentShader:`

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
		`,blending:ai,depthTest:!1,depthWrite:!1})}function Uc(){return new Tn({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:fr(),fragmentShader:`

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
		`,blending:ai,depthTest:!1,depthWrite:!1})}function Oc(){return new Tn({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:fr(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:ai,depthTest:!1,depthWrite:!1})}function fr(){return`

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
	`}function G0(i){let t=new WeakMap,e=null;function n(o){if(o&&o.isTexture){const l=o.mapping,c=l===_o||l===vo,h=l===Hi||l===vs;if(c||h){let u=t.get(o);const d=u!==void 0?u.texture.pmremVersion:0;if(o.isRenderTargetTexture&&o.pmremVersion!==d)return e===null&&(e=new Fc(i)),u=c?e.fromEquirectangular(o,u):e.fromCubemap(o,u),u.texture.pmremVersion=o.pmremVersion,t.set(o,u),u.texture;if(u!==void 0)return u.texture;{const p=o.image;return c&&p&&p.height>0||h&&p&&s(p)?(e===null&&(e=new Fc(i)),u=c?e.fromEquirectangular(o):e.fromCubemap(o),u.texture.pmremVersion=o.pmremVersion,t.set(o,u),o.addEventListener("dispose",a),u.texture):null}}}return o}function s(o){let l=0;const c=6;for(let h=0;h<c;h++)o[h]!==void 0&&l++;return l===c}function a(o){const l=o.target;l.removeEventListener("dispose",a);const c=t.get(l);c!==void 0&&(t.delete(l),c.dispose())}function r(){t=new WeakMap,e!==null&&(e.dispose(),e=null)}return{get:n,dispose:r}}function V0(i){const t={};function e(n){if(t[n]!==void 0)return t[n];const s=i.getExtension(n);return t[n]=s,s}return{has:function(n){return e(n)!==null},init:function(){e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance"),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture"),e("WEBGL_render_shared_exponent")},get:function(n){const s=e(n);return s===null&&Qs("WebGLRenderer: "+n+" extension not supported."),s}}}function W0(i,t,e,n){const s={},a=new WeakMap;function r(u){const d=u.target;d.index!==null&&t.remove(d.index);for(const g in d.attributes)t.remove(d.attributes[g]);d.removeEventListener("dispose",r),delete s[d.id];const p=a.get(d);p&&(t.remove(p),a.delete(d)),n.releaseStatesOfGeometry(d),d.isInstancedBufferGeometry===!0&&delete d._maxInstanceCount,e.memory.geometries--}function o(u,d){return s[d.id]===!0||(d.addEventListener("dispose",r),s[d.id]=!0,e.memory.geometries++),d}function l(u){const d=u.attributes;for(const p in d)t.update(d[p],i.ARRAY_BUFFER)}function c(u){const d=[],p=u.index,g=u.attributes.position;let x=0;if(p!==null){const b=p.array;x=p.version;for(let w=0,y=b.length;w<y;w+=3){const A=b[w+0],P=b[w+1],T=b[w+2];d.push(A,P,P,T,T,A)}}else if(g!==void 0){const b=g.array;x=g.version;for(let w=0,y=b.length/3-1;w<y;w+=3){const A=w+0,P=w+1,T=w+2;d.push(A,P,P,T,T,A)}}else return;const m=new(Ah(d)?Lh:Ih)(d,1);m.version=x;const f=a.get(u);f&&t.remove(f),a.set(u,m)}function h(u){const d=a.get(u);if(d){const p=u.index;p!==null&&d.version<p.version&&c(u)}else c(u);return a.get(u)}return{get:o,update:l,getWireframeAttribute:h}}function X0(i,t,e){let n;function s(d){n=d}let a,r;function o(d){a=d.type,r=d.bytesPerElement}function l(d,p){i.drawElements(n,p,a,d*r),e.update(p,n,1)}function c(d,p,g){g!==0&&(i.drawElementsInstanced(n,p,a,d*r,g),e.update(p,n,g))}function h(d,p,g){if(g===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,p,0,a,d,0,g);let m=0;for(let f=0;f<g;f++)m+=p[f];e.update(m,n,1)}function u(d,p,g,x){if(g===0)return;const m=t.get("WEBGL_multi_draw");if(m===null)for(let f=0;f<d.length;f++)c(d[f]/r,p[f],x[f]);else{m.multiDrawElementsInstancedWEBGL(n,p,0,a,d,0,x,0,g);let f=0;for(let b=0;b<g;b++)f+=p[b]*x[b];e.update(f,n,1)}}this.setMode=s,this.setIndex=o,this.render=l,this.renderInstances=c,this.renderMultiDraw=h,this.renderMultiDrawInstances=u}function Y0(i){const t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function n(a,r,o){switch(e.calls++,r){case i.TRIANGLES:e.triangles+=o*(a/3);break;case i.LINES:e.lines+=o*(a/2);break;case i.LINE_STRIP:e.lines+=o*(a-1);break;case i.LINE_LOOP:e.lines+=o*a;break;case i.POINTS:e.points+=o*a;break;default:Qt("WebGLInfo: Unknown draw mode:",r);break}}function s(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:s,update:n}}function q0(i,t,e){const n=new WeakMap,s=new Ee;function a(r,o,l){const c=r.morphTargetInfluences,h=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,u=h!==void 0?h.length:0;let d=n.get(o);if(d===void 0||d.count!==u){let S=function(){D.dispose(),n.delete(o),o.removeEventListener("dispose",S)};var p=S;d!==void 0&&d.texture.dispose();const g=o.morphAttributes.position!==void 0,x=o.morphAttributes.normal!==void 0,m=o.morphAttributes.color!==void 0,f=o.morphAttributes.position||[],b=o.morphAttributes.normal||[],w=o.morphAttributes.color||[];let y=0;g===!0&&(y=1),x===!0&&(y=2),m===!0&&(y=3);let A=o.attributes.position.count*y,P=1;A>t.maxTextureSize&&(P=Math.ceil(A/t.maxTextureSize),A=t.maxTextureSize);const T=new Float32Array(A*P*4*u),D=new Ch(T,A,P,u);D.type=Nn,D.needsUpdate=!0;const M=y*4;for(let v=0;v<u;v++){const C=f[v],L=b[v],N=w[v],U=A*P*4*v;for(let H=0;H<C.count;H++){const k=H*M;g===!0&&(s.fromBufferAttribute(C,H),T[U+k+0]=s.x,T[U+k+1]=s.y,T[U+k+2]=s.z,T[U+k+3]=0),x===!0&&(s.fromBufferAttribute(L,H),T[U+k+4]=s.x,T[U+k+5]=s.y,T[U+k+6]=s.z,T[U+k+7]=0),m===!0&&(s.fromBufferAttribute(N,H),T[U+k+8]=s.x,T[U+k+9]=s.y,T[U+k+10]=s.z,T[U+k+11]=N.itemSize===4?s.w:1)}}d={count:u,texture:D,size:new ut(A,P)},n.set(o,d),o.addEventListener("dispose",S)}if(r.isInstancedMesh===!0&&r.morphTexture!==null)l.getUniforms().setValue(i,"morphTexture",r.morphTexture,e);else{let g=0;for(let m=0;m<c.length;m++)g+=c[m];const x=o.morphTargetsRelative?1:1-g;l.getUniforms().setValue(i,"morphTargetBaseInfluence",x),l.getUniforms().setValue(i,"morphTargetInfluences",c)}l.getUniforms().setValue(i,"morphTargetsTexture",d.texture,e),l.getUniforms().setValue(i,"morphTargetsTextureSize",d.size)}return{update:a}}function Z0(i,t,e,n){let s=new WeakMap;function a(l){const c=n.render.frame,h=l.geometry,u=t.get(l,h);if(s.get(u)!==c&&(t.update(u),s.set(u,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",o)===!1&&l.addEventListener("dispose",o),s.get(l)!==c&&(e.update(l.instanceMatrix,i.ARRAY_BUFFER),l.instanceColor!==null&&e.update(l.instanceColor,i.ARRAY_BUFFER),s.set(l,c))),l.isSkinnedMesh){const d=l.skeleton;s.get(d)!==c&&(d.update(),s.set(d,c))}return u}function r(){s=new WeakMap}function o(l){const c=l.target;c.removeEventListener("dispose",o),e.remove(c.instanceMatrix),c.instanceColor!==null&&e.remove(c.instanceColor)}return{update:a,dispose:r}}const $0={[fh]:"LINEAR_TONE_MAPPING",[ph]:"REINHARD_TONE_MAPPING",[mh]:"CINEON_TONE_MAPPING",[gh]:"ACES_FILMIC_TONE_MAPPING",[_h]:"AGX_TONE_MAPPING",[vh]:"NEUTRAL_TONE_MAPPING",[xh]:"CUSTOM_TONE_MAPPING"};function K0(i,t,e,n,s){const a=new Yn(t,e,{type:i,depthBuffer:n,stencilBuffer:s}),r=new Yn(t,e,{type:li,depthBuffer:!1,stencilBuffer:!1}),o=new on;o.setAttribute("position",new Ne([-1,3,0,-1,-1,0,3,-1,0],3)),o.setAttribute("uv",new Ne([0,2,0,0,2,0],2));const l=new Df({uniforms:{tDiffuse:{value:null}},vertexShader:`
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
			}`,depthTest:!1,depthWrite:!1}),c=new nt(o,l),h=new Fl(-1,1,1,-1,0,1);let u=null,d=null,p=!1,g,x=null,m=[],f=!1;this.setSize=function(b,w){a.setSize(b,w),r.setSize(b,w);for(let y=0;y<m.length;y++){const A=m[y];A.setSize&&A.setSize(b,w)}},this.setEffects=function(b){m=b,f=m.length>0&&m[0].isRenderPass===!0;const w=a.width,y=a.height;for(let A=0;A<m.length;A++){const P=m[A];P.setSize&&P.setSize(w,y)}},this.begin=function(b,w){if(p||b.toneMapping===Wn&&m.length===0)return!1;if(x=w,w!==null){const y=w.width,A=w.height;(a.width!==y||a.height!==A)&&this.setSize(y,A)}return f===!1&&b.setRenderTarget(a),g=b.toneMapping,b.toneMapping=Wn,!0},this.hasRenderPass=function(){return f},this.end=function(b,w){b.toneMapping=g,p=!0;let y=a,A=r;for(let P=0;P<m.length;P++){const T=m[P];if(T.enabled!==!1&&(T.render(b,A,y,w),T.needsSwap!==!1)){const D=y;y=A,A=D}}if(u!==b.outputColorSpace||d!==b.toneMapping){u=b.outputColorSpace,d=b.toneMapping,l.defines={},te.getTransfer(u)===de&&(l.defines.SRGB_TRANSFER="");const P=$0[d];P&&(l.defines[P]=""),l.needsUpdate=!0}l.uniforms.tDiffuse.value=y.texture,b.setRenderTarget(x),b.render(c,h),x=null,p=!1},this.isCompositing=function(){return p},this.dispose=function(){a.dispose(),r.dispose(),o.dispose(),l.dispose()}}const Qh=new Ke,al=new ea(1,1),tu=new Ch,eu=new Ad,nu=new Nh,Bc=[],kc=[],zc=new Float32Array(16),Hc=new Float32Array(9),Gc=new Float32Array(4);function As(i,t,e){const n=i[0];if(n<=0||n>0)return i;const s=t*e;let a=Bc[s];if(a===void 0&&(a=new Float32Array(s),Bc[s]=a),t!==0){n.toArray(a,0);for(let r=1,o=0;r!==t;++r)o+=e,i[r].toArray(a,o)}return a}function ke(i,t){if(i.length!==t.length)return!1;for(let e=0,n=i.length;e<n;e++)if(i[e]!==t[e])return!1;return!0}function ze(i,t){for(let e=0,n=t.length;e<n;e++)i[e]=t[e]}function pr(i,t){let e=kc[t];e===void 0&&(e=new Int32Array(t),kc[t]=e);for(let n=0;n!==t;++n)e[n]=i.allocateTextureUnit();return e}function J0(i,t){const e=this.cache;e[0]!==t&&(i.uniform1f(this.addr,t),e[0]=t)}function j0(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(ke(e,t))return;i.uniform2fv(this.addr,t),ze(e,t)}}function Q0(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(i.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(ke(e,t))return;i.uniform3fv(this.addr,t),ze(e,t)}}function tg(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(ke(e,t))return;i.uniform4fv(this.addr,t),ze(e,t)}}function eg(i,t){const e=this.cache,n=t.elements;if(n===void 0){if(ke(e,t))return;i.uniformMatrix2fv(this.addr,!1,t),ze(e,t)}else{if(ke(e,n))return;Gc.set(n),i.uniformMatrix2fv(this.addr,!1,Gc),ze(e,n)}}function ng(i,t){const e=this.cache,n=t.elements;if(n===void 0){if(ke(e,t))return;i.uniformMatrix3fv(this.addr,!1,t),ze(e,t)}else{if(ke(e,n))return;Hc.set(n),i.uniformMatrix3fv(this.addr,!1,Hc),ze(e,n)}}function ig(i,t){const e=this.cache,n=t.elements;if(n===void 0){if(ke(e,t))return;i.uniformMatrix4fv(this.addr,!1,t),ze(e,t)}else{if(ke(e,n))return;zc.set(n),i.uniformMatrix4fv(this.addr,!1,zc),ze(e,n)}}function sg(i,t){const e=this.cache;e[0]!==t&&(i.uniform1i(this.addr,t),e[0]=t)}function ag(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(ke(e,t))return;i.uniform2iv(this.addr,t),ze(e,t)}}function rg(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(ke(e,t))return;i.uniform3iv(this.addr,t),ze(e,t)}}function og(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(ke(e,t))return;i.uniform4iv(this.addr,t),ze(e,t)}}function lg(i,t){const e=this.cache;e[0]!==t&&(i.uniform1ui(this.addr,t),e[0]=t)}function cg(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(ke(e,t))return;i.uniform2uiv(this.addr,t),ze(e,t)}}function hg(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(ke(e,t))return;i.uniform3uiv(this.addr,t),ze(e,t)}}function ug(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(ke(e,t))return;i.uniform4uiv(this.addr,t),ze(e,t)}}function dg(i,t,e){const n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s);let a;this.type===i.SAMPLER_2D_SHADOW?(al.compareFunction=e.isReversedDepthBuffer()?Tl:El,a=al):a=Qh,e.setTexture2D(t||a,s)}function fg(i,t,e){const n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTexture3D(t||eu,s)}function pg(i,t,e){const n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTextureCube(t||nu,s)}function mg(i,t,e){const n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTexture2DArray(t||tu,s)}function gg(i){switch(i){case 5126:return J0;case 35664:return j0;case 35665:return Q0;case 35666:return tg;case 35674:return eg;case 35675:return ng;case 35676:return ig;case 5124:case 35670:return sg;case 35667:case 35671:return ag;case 35668:case 35672:return rg;case 35669:case 35673:return og;case 5125:return lg;case 36294:return cg;case 36295:return hg;case 36296:return ug;case 35678:case 36198:case 36298:case 36306:case 35682:return dg;case 35679:case 36299:case 36307:return fg;case 35680:case 36300:case 36308:case 36293:return pg;case 36289:case 36303:case 36311:case 36292:return mg}}function xg(i,t){i.uniform1fv(this.addr,t)}function _g(i,t){const e=As(t,this.size,2);i.uniform2fv(this.addr,e)}function vg(i,t){const e=As(t,this.size,3);i.uniform3fv(this.addr,e)}function Mg(i,t){const e=As(t,this.size,4);i.uniform4fv(this.addr,e)}function yg(i,t){const e=As(t,this.size,4);i.uniformMatrix2fv(this.addr,!1,e)}function Sg(i,t){const e=As(t,this.size,9);i.uniformMatrix3fv(this.addr,!1,e)}function wg(i,t){const e=As(t,this.size,16);i.uniformMatrix4fv(this.addr,!1,e)}function bg(i,t){i.uniform1iv(this.addr,t)}function Eg(i,t){i.uniform2iv(this.addr,t)}function Tg(i,t){i.uniform3iv(this.addr,t)}function Ag(i,t){i.uniform4iv(this.addr,t)}function Cg(i,t){i.uniform1uiv(this.addr,t)}function Rg(i,t){i.uniform2uiv(this.addr,t)}function Pg(i,t){i.uniform3uiv(this.addr,t)}function Ig(i,t){i.uniform4uiv(this.addr,t)}function Lg(i,t,e){const n=this.cache,s=t.length,a=pr(e,s);ke(n,a)||(i.uniform1iv(this.addr,a),ze(n,a));let r;this.type===i.SAMPLER_2D_SHADOW?r=al:r=Qh;for(let o=0;o!==s;++o)e.setTexture2D(t[o]||r,a[o])}function Dg(i,t,e){const n=this.cache,s=t.length,a=pr(e,s);ke(n,a)||(i.uniform1iv(this.addr,a),ze(n,a));for(let r=0;r!==s;++r)e.setTexture3D(t[r]||eu,a[r])}function Fg(i,t,e){const n=this.cache,s=t.length,a=pr(e,s);ke(n,a)||(i.uniform1iv(this.addr,a),ze(n,a));for(let r=0;r!==s;++r)e.setTextureCube(t[r]||nu,a[r])}function Ng(i,t,e){const n=this.cache,s=t.length,a=pr(e,s);ke(n,a)||(i.uniform1iv(this.addr,a),ze(n,a));for(let r=0;r!==s;++r)e.setTexture2DArray(t[r]||tu,a[r])}function Ug(i){switch(i){case 5126:return xg;case 35664:return _g;case 35665:return vg;case 35666:return Mg;case 35674:return yg;case 35675:return Sg;case 35676:return wg;case 5124:case 35670:return bg;case 35667:case 35671:return Eg;case 35668:case 35672:return Tg;case 35669:case 35673:return Ag;case 5125:return Cg;case 36294:return Rg;case 36295:return Pg;case 36296:return Ig;case 35678:case 36198:case 36298:case 36306:case 35682:return Lg;case 35679:case 36299:case 36307:return Dg;case 35680:case 36300:case 36308:case 36293:return Fg;case 36289:case 36303:case 36311:case 36292:return Ng}}class Og{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.setValue=gg(e.type)}}class Bg{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=Ug(e.type)}}class kg{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,n){const s=this.seq;for(let a=0,r=s.length;a!==r;++a){const o=s[a];o.setValue(t,e[o.id],n)}}}const Qr=/(\w+)(\])?(\[|\.)?/g;function Vc(i,t){i.seq.push(t),i.map[t.id]=t}function zg(i,t,e){const n=i.name,s=n.length;for(Qr.lastIndex=0;;){const a=Qr.exec(n),r=Qr.lastIndex;let o=a[1];const l=a[2]==="]",c=a[3];if(l&&(o=o|0),c===void 0||c==="["&&r+2===s){Vc(e,c===void 0?new Og(o,i,t):new Bg(o,i,t));break}else{let u=e.map[o];u===void 0&&(u=new kg(o),Vc(e,u)),e=u}}}class Ya{constructor(t,e){this.seq=[],this.map={};const n=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let r=0;r<n;++r){const o=t.getActiveUniform(e,r),l=t.getUniformLocation(e,o.name);zg(o,l,this)}const s=[],a=[];for(const r of this.seq)r.type===t.SAMPLER_2D_SHADOW||r.type===t.SAMPLER_CUBE_SHADOW||r.type===t.SAMPLER_2D_ARRAY_SHADOW?s.push(r):a.push(r);s.length>0&&(this.seq=s.concat(a))}setValue(t,e,n,s){const a=this.map[e];a!==void 0&&a.setValue(t,n,s)}setOptional(t,e,n){const s=e[n];s!==void 0&&this.setValue(t,n,s)}static upload(t,e,n,s){for(let a=0,r=e.length;a!==r;++a){const o=e[a],l=n[o.id];l.needsUpdate!==!1&&o.setValue(t,l.value,s)}}static seqWithValue(t,e){const n=[];for(let s=0,a=t.length;s!==a;++s){const r=t[s];r.id in e&&n.push(r)}return n}}function Wc(i,t,e){const n=i.createShader(t);return i.shaderSource(n,e),i.compileShader(n),n}const Hg=37297;let Gg=0;function Vg(i,t){const e=i.split(`
`),n=[],s=Math.max(t-6,0),a=Math.min(t+6,e.length);for(let r=s;r<a;r++){const o=r+1;n.push(`${o===t?">":" "} ${o}: ${e[r]}`)}return n.join(`
`)}const Xc=new Yt;function Wg(i){te._getMatrix(Xc,te.workingColorSpace,i);const t=`mat3( ${Xc.elements.map(e=>e.toFixed(4))} )`;switch(te.getTransfer(i)){case $a:return[t,"LinearTransferOETF"];case de:return[t,"sRGBTransferOETF"];default:return Ft("WebGLProgram: Unsupported color space: ",i),[t,"LinearTransferOETF"]}}function Yc(i,t,e){const n=i.getShaderParameter(t,i.COMPILE_STATUS),a=(i.getShaderInfoLog(t)||"").trim();if(n&&a==="")return"";const r=/ERROR: 0:(\d+)/.exec(a);if(r){const o=parseInt(r[1]);return e.toUpperCase()+`

`+a+`

`+Vg(i.getShaderSource(t),o)}else return a}function Xg(i,t){const e=Wg(t);return[`vec4 ${i}( vec4 value ) {`,`	return ${e[1]}( vec4( value.rgb * ${e[0]}, value.a ) );`,"}"].join(`
`)}const Yg={[fh]:"Linear",[ph]:"Reinhard",[mh]:"Cineon",[gh]:"ACESFilmic",[_h]:"AgX",[vh]:"Neutral",[xh]:"Custom"};function qg(i,t){const e=Yg[t];return e===void 0?(Ft("WebGLProgram: Unsupported toneMapping:",t),"vec3 "+i+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+i+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}const Oa=new F;function Zg(){te.getLuminanceCoefficients(Oa);const i=Oa.x.toFixed(4),t=Oa.y.toFixed(4),e=Oa.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${i}, ${t}, ${e} );`,"	return dot( weights, rgb );","}"].join(`
`)}function $g(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Xs).join(`
`)}function Kg(i){const t=[];for(const e in i){const n=i[e];n!==!1&&t.push("#define "+e+" "+n)}return t.join(`
`)}function Jg(i,t){const e={},n=i.getProgramParameter(t,i.ACTIVE_ATTRIBUTES);for(let s=0;s<n;s++){const a=i.getActiveAttrib(t,s),r=a.name;let o=1;a.type===i.FLOAT_MAT2&&(o=2),a.type===i.FLOAT_MAT3&&(o=3),a.type===i.FLOAT_MAT4&&(o=4),e[r]={type:a.type,location:i.getAttribLocation(t,r),locationSize:o}}return e}function Xs(i){return i!==""}function qc(i,t){const e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return i.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function Zc(i,t){return i.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}const jg=/^[ \t]*#include +<([\w\d./]+)>/gm;function rl(i){return i.replace(jg,tx)}const Qg=new Map;function tx(i,t){let e=qt[t];if(e===void 0){const n=Qg.get(t);if(n!==void 0)e=qt[n],Ft('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,n);else throw new Error("Can not resolve #include <"+t+">")}return rl(e)}const ex=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function $c(i){return i.replace(ex,nx)}function nx(i,t,e,n){let s="";for(let a=parseInt(t);a<parseInt(e);a++)s+=n.replace(/\[\s*i\s*\]/g,"[ "+a+" ]").replace(/UNROLLED_LOOP_INDEX/g,a);return s}function Kc(i){let t=`precision ${i.precision} float;
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
#define LOW_PRECISION`),t}const ix={[Ha]:"SHADOWMAP_TYPE_PCF",[Vs]:"SHADOWMAP_TYPE_VSM"};function sx(i){return ix[i.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}const ax={[Hi]:"ENVMAP_TYPE_CUBE",[vs]:"ENVMAP_TYPE_CUBE",[hr]:"ENVMAP_TYPE_CUBE_UV"};function rx(i){return i.envMap===!1?"ENVMAP_TYPE_CUBE":ax[i.envMapMode]||"ENVMAP_TYPE_CUBE"}const ox={[vs]:"ENVMAP_MODE_REFRACTION"};function lx(i){return i.envMap===!1?"ENVMAP_MODE_REFLECTION":ox[i.envMapMode]||"ENVMAP_MODE_REFLECTION"}const cx={[cr]:"ENVMAP_BLENDING_MULTIPLY",[qu]:"ENVMAP_BLENDING_MIX",[Zu]:"ENVMAP_BLENDING_ADD"};function hx(i){return i.envMap===!1?"ENVMAP_BLENDING_NONE":cx[i.combine]||"ENVMAP_BLENDING_NONE"}function ux(i){const t=i.envMapCubeUVHeight;if(t===null)return null;const e=Math.log2(t)-2,n=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),112)),texelHeight:n,maxMip:e}}function dx(i,t,e,n){const s=i.getContext(),a=e.defines;let r=e.vertexShader,o=e.fragmentShader;const l=sx(e),c=rx(e),h=lx(e),u=hx(e),d=ux(e),p=$g(e),g=Kg(a),x=s.createProgram();let m,f,b=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(m=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g].filter(Xs).join(`
`),m.length>0&&(m+=`
`),f=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g].filter(Xs).join(`
`),f.length>0&&(f+=`
`)):(m=[Kc(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.batchingColor?"#define USE_BATCHING_COLOR":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.instancingMorph?"#define USE_INSTANCING_MORPH":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+h:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",e.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Xs).join(`
`),f=[Kc(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+c:"",e.envMap?"#define "+h:"",e.envMap?"#define "+u:"",d?"#define CUBEUV_TEXEL_WIDTH "+d.texelWidth:"",d?"#define CUBEUV_TEXEL_HEIGHT "+d.texelHeight:"",d?"#define CUBEUV_MAX_MIP "+d.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.dispersion?"#define USE_DISPERSION":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor||e.batchingColor?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",e.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",e.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==Wn?"#define TONE_MAPPING":"",e.toneMapping!==Wn?qt.tonemapping_pars_fragment:"",e.toneMapping!==Wn?qg("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",qt.colorspace_pars_fragment,Xg("linearToOutputTexel",e.outputColorSpace),Zg(),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(Xs).join(`
`)),r=rl(r),r=qc(r,e),r=Zc(r,e),o=rl(o),o=qc(o,e),o=Zc(o,e),r=$c(r),o=$c(o),e.isRawShaderMaterial!==!0&&(b=`#version 300 es
`,m=[p,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,f=["#define varying in",e.glslVersion===jl?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===jl?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+f);const w=b+m+r,y=b+f+o,A=Wc(s,s.VERTEX_SHADER,w),P=Wc(s,s.FRAGMENT_SHADER,y);s.attachShader(x,A),s.attachShader(x,P),e.index0AttributeName!==void 0?s.bindAttribLocation(x,0,e.index0AttributeName):e.morphTargets===!0&&s.bindAttribLocation(x,0,"position"),s.linkProgram(x);function T(v){if(i.debug.checkShaderErrors){const C=s.getProgramInfoLog(x)||"",L=s.getShaderInfoLog(A)||"",N=s.getShaderInfoLog(P)||"",U=C.trim(),H=L.trim(),k=N.trim();let q=!0,ot=!0;if(s.getProgramParameter(x,s.LINK_STATUS)===!1)if(q=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(s,x,A,P);else{const tt=Yc(s,A,"vertex"),it=Yc(s,P,"fragment");Qt("THREE.WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(x,s.VALIDATE_STATUS)+`

Material Name: `+v.name+`
Material Type: `+v.type+`

Program Info Log: `+U+`
`+tt+`
`+it)}else U!==""?Ft("WebGLProgram: Program Info Log:",U):(H===""||k==="")&&(ot=!1);ot&&(v.diagnostics={runnable:q,programLog:U,vertexShader:{log:H,prefix:m},fragmentShader:{log:k,prefix:f}})}s.deleteShader(A),s.deleteShader(P),D=new Ya(s,x),M=Jg(s,x)}let D;this.getUniforms=function(){return D===void 0&&T(this),D};let M;this.getAttributes=function(){return M===void 0&&T(this),M};let S=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return S===!1&&(S=s.getProgramParameter(x,Hg)),S},this.destroy=function(){n.releaseStatesOfProgram(this),s.deleteProgram(x),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=Gg++,this.cacheKey=t,this.usedTimes=1,this.program=x,this.vertexShader=A,this.fragmentShader=P,this}let fx=0;class px{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){const e=t.vertexShader,n=t.fragmentShader,s=this._getShaderStage(e),a=this._getShaderStage(n),r=this._getShaderCacheForMaterial(t);return r.has(s)===!1&&(r.add(s),s.usedTimes++),r.has(a)===!1&&(r.add(a),a.usedTimes++),this}remove(t){const e=this.materialCache.get(t);for(const n of e)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){const e=this.materialCache;let n=e.get(t);return n===void 0&&(n=new Set,e.set(t,n)),n}_getShaderStage(t){const e=this.shaderCache;let n=e.get(t);return n===void 0&&(n=new mx(t),e.set(t,n)),n}}class mx{constructor(t){this.id=fx++,this.code=t,this.usedTimes=0}}function gx(i,t,e,n,s,a,r){const o=new Rh,l=new px,c=new Set,h=[],u=new Map,d=s.logarithmicDepthBuffer;let p=s.precision;const g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function x(M){return c.add(M),M===0?"uv":`uv${M}`}function m(M,S,v,C,L){const N=C.fog,U=L.geometry,H=M.isMeshStandardMaterial?C.environment:null,k=(M.isMeshStandardMaterial?e:t).get(M.envMap||H),q=k&&k.mapping===hr?k.image.height:null,ot=g[M.type];M.precision!==null&&(p=s.getMaxPrecision(M.precision),p!==M.precision&&Ft("WebGLProgram.getParameters:",M.precision,"not supported, using",p,"instead."));const tt=U.morphAttributes.position||U.morphAttributes.normal||U.morphAttributes.color,it=tt!==void 0?tt.length:0;let Gt=0;U.morphAttributes.position!==void 0&&(Gt=1),U.morphAttributes.normal!==void 0&&(Gt=2),U.morphAttributes.color!==void 0&&(Gt=3);let zt,ae,ne,Z;if(ot){const he=zn[ot];zt=he.vertexShader,ae=he.fragmentShader}else zt=M.vertexShader,ae=M.fragmentShader,l.update(M),ne=l.getVertexShaderID(M),Z=l.getFragmentShaderID(M);const et=i.getRenderTarget(),yt=i.state.buffers.depth.getReversed(),Nt=L.isInstancedMesh===!0,St=L.isBatchedMesh===!0,Jt=!!M.map,re=!!M.matcap,Wt=!!k,$=!!M.aoMap,st=!!M.lightMap,J=!!M.bumpMap,at=!!M.normalMap,I=!!M.displacementMap,bt=!!M.emissiveMap,xt=!!M.metalnessMap,Dt=!!M.roughnessMap,ht=M.anisotropy>0,R=M.clearcoat>0,_=M.dispersion>0,B=M.iridescence>0,X=M.sheen>0,j=M.transmission>0,Y=ht&&!!M.anisotropyMap,Pt=R&&!!M.clearcoatMap,dt=R&&!!M.clearcoatNormalMap,Ct=R&&!!M.clearcoatRoughnessMap,Ht=B&&!!M.iridescenceMap,rt=B&&!!M.iridescenceThicknessMap,mt=X&&!!M.sheenColorMap,Rt=X&&!!M.sheenRoughnessMap,It=!!M.specularMap,pt=!!M.specularColorMap,Zt=!!M.specularIntensityMap,O=j&&!!M.transmissionMap,Mt=j&&!!M.thicknessMap,ct=!!M.gradientMap,wt=!!M.alphaMap,lt=M.alphaTest>0,Q=!!M.alphaHash,ft=!!M.extensions;let Xt=Wn;M.toneMapped&&(et===null||et.isXRRenderTarget===!0)&&(Xt=i.toneMapping);const ge={shaderID:ot,shaderType:M.type,shaderName:M.name,vertexShader:zt,fragmentShader:ae,defines:M.defines,customVertexShaderID:ne,customFragmentShaderID:Z,isRawShaderMaterial:M.isRawShaderMaterial===!0,glslVersion:M.glslVersion,precision:p,batching:St,batchingColor:St&&L._colorsTexture!==null,instancing:Nt,instancingColor:Nt&&L.instanceColor!==null,instancingMorph:Nt&&L.morphTexture!==null,outputColorSpace:et===null?i.outputColorSpace:et.isXRRenderTarget===!0?et.texture.colorSpace:ys,alphaToCoverage:!!M.alphaToCoverage,map:Jt,matcap:re,envMap:Wt,envMapMode:Wt&&k.mapping,envMapCubeUVHeight:q,aoMap:$,lightMap:st,bumpMap:J,normalMap:at,displacementMap:I,emissiveMap:bt,normalMapObjectSpace:at&&M.normalMapType===Ju,normalMapTangentSpace:at&&M.normalMapType===ur,metalnessMap:xt,roughnessMap:Dt,anisotropy:ht,anisotropyMap:Y,clearcoat:R,clearcoatMap:Pt,clearcoatNormalMap:dt,clearcoatRoughnessMap:Ct,dispersion:_,iridescence:B,iridescenceMap:Ht,iridescenceThicknessMap:rt,sheen:X,sheenColorMap:mt,sheenRoughnessMap:Rt,specularMap:It,specularColorMap:pt,specularIntensityMap:Zt,transmission:j,transmissionMap:O,thicknessMap:Mt,gradientMap:ct,opaque:M.transparent===!1&&M.blending===gs&&M.alphaToCoverage===!1,alphaMap:wt,alphaTest:lt,alphaHash:Q,combine:M.combine,mapUv:Jt&&x(M.map.channel),aoMapUv:$&&x(M.aoMap.channel),lightMapUv:st&&x(M.lightMap.channel),bumpMapUv:J&&x(M.bumpMap.channel),normalMapUv:at&&x(M.normalMap.channel),displacementMapUv:I&&x(M.displacementMap.channel),emissiveMapUv:bt&&x(M.emissiveMap.channel),metalnessMapUv:xt&&x(M.metalnessMap.channel),roughnessMapUv:Dt&&x(M.roughnessMap.channel),anisotropyMapUv:Y&&x(M.anisotropyMap.channel),clearcoatMapUv:Pt&&x(M.clearcoatMap.channel),clearcoatNormalMapUv:dt&&x(M.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Ct&&x(M.clearcoatRoughnessMap.channel),iridescenceMapUv:Ht&&x(M.iridescenceMap.channel),iridescenceThicknessMapUv:rt&&x(M.iridescenceThicknessMap.channel),sheenColorMapUv:mt&&x(M.sheenColorMap.channel),sheenRoughnessMapUv:Rt&&x(M.sheenRoughnessMap.channel),specularMapUv:It&&x(M.specularMap.channel),specularColorMapUv:pt&&x(M.specularColorMap.channel),specularIntensityMapUv:Zt&&x(M.specularIntensityMap.channel),transmissionMapUv:O&&x(M.transmissionMap.channel),thicknessMapUv:Mt&&x(M.thicknessMap.channel),alphaMapUv:wt&&x(M.alphaMap.channel),vertexTangents:!!U.attributes.tangent&&(at||ht),vertexColors:M.vertexColors,vertexAlphas:M.vertexColors===!0&&!!U.attributes.color&&U.attributes.color.itemSize===4,pointsUvs:L.isPoints===!0&&!!U.attributes.uv&&(Jt||wt),fog:!!N,useFog:M.fog===!0,fogExp2:!!N&&N.isFogExp2,flatShading:M.flatShading===!0&&M.wireframe===!1,sizeAttenuation:M.sizeAttenuation===!0,logarithmicDepthBuffer:d,reversedDepthBuffer:yt,skinning:L.isSkinnedMesh===!0,morphTargets:U.morphAttributes.position!==void 0,morphNormals:U.morphAttributes.normal!==void 0,morphColors:U.morphAttributes.color!==void 0,morphTargetsCount:it,morphTextureStride:Gt,numDirLights:S.directional.length,numPointLights:S.point.length,numSpotLights:S.spot.length,numSpotLightMaps:S.spotLightMap.length,numRectAreaLights:S.rectArea.length,numHemiLights:S.hemi.length,numDirLightShadows:S.directionalShadowMap.length,numPointLightShadows:S.pointShadowMap.length,numSpotLightShadows:S.spotShadowMap.length,numSpotLightShadowsWithMaps:S.numSpotLightShadowsWithMaps,numLightProbes:S.numLightProbes,numClippingPlanes:r.numPlanes,numClipIntersection:r.numIntersection,dithering:M.dithering,shadowMapEnabled:i.shadowMap.enabled&&v.length>0,shadowMapType:i.shadowMap.type,toneMapping:Xt,decodeVideoTexture:Jt&&M.map.isVideoTexture===!0&&te.getTransfer(M.map.colorSpace)===de,decodeVideoTextureEmissive:bt&&M.emissiveMap.isVideoTexture===!0&&te.getTransfer(M.emissiveMap.colorSpace)===de,premultipliedAlpha:M.premultipliedAlpha,doubleSided:M.side===Le,flipSided:M.side===rn,useDepthPacking:M.depthPacking>=0,depthPacking:M.depthPacking||0,index0AttributeName:M.index0AttributeName,extensionClipCullDistance:ft&&M.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(ft&&M.extensions.multiDraw===!0||St)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:M.customProgramCacheKey()};return ge.vertexUv1s=c.has(1),ge.vertexUv2s=c.has(2),ge.vertexUv3s=c.has(3),c.clear(),ge}function f(M){const S=[];if(M.shaderID?S.push(M.shaderID):(S.push(M.customVertexShaderID),S.push(M.customFragmentShaderID)),M.defines!==void 0)for(const v in M.defines)S.push(v),S.push(M.defines[v]);return M.isRawShaderMaterial===!1&&(b(S,M),w(S,M),S.push(i.outputColorSpace)),S.push(M.customProgramCacheKey),S.join()}function b(M,S){M.push(S.precision),M.push(S.outputColorSpace),M.push(S.envMapMode),M.push(S.envMapCubeUVHeight),M.push(S.mapUv),M.push(S.alphaMapUv),M.push(S.lightMapUv),M.push(S.aoMapUv),M.push(S.bumpMapUv),M.push(S.normalMapUv),M.push(S.displacementMapUv),M.push(S.emissiveMapUv),M.push(S.metalnessMapUv),M.push(S.roughnessMapUv),M.push(S.anisotropyMapUv),M.push(S.clearcoatMapUv),M.push(S.clearcoatNormalMapUv),M.push(S.clearcoatRoughnessMapUv),M.push(S.iridescenceMapUv),M.push(S.iridescenceThicknessMapUv),M.push(S.sheenColorMapUv),M.push(S.sheenRoughnessMapUv),M.push(S.specularMapUv),M.push(S.specularColorMapUv),M.push(S.specularIntensityMapUv),M.push(S.transmissionMapUv),M.push(S.thicknessMapUv),M.push(S.combine),M.push(S.fogExp2),M.push(S.sizeAttenuation),M.push(S.morphTargetsCount),M.push(S.morphAttributeCount),M.push(S.numDirLights),M.push(S.numPointLights),M.push(S.numSpotLights),M.push(S.numSpotLightMaps),M.push(S.numHemiLights),M.push(S.numRectAreaLights),M.push(S.numDirLightShadows),M.push(S.numPointLightShadows),M.push(S.numSpotLightShadows),M.push(S.numSpotLightShadowsWithMaps),M.push(S.numLightProbes),M.push(S.shadowMapType),M.push(S.toneMapping),M.push(S.numClippingPlanes),M.push(S.numClipIntersection),M.push(S.depthPacking)}function w(M,S){o.disableAll(),S.instancing&&o.enable(0),S.instancingColor&&o.enable(1),S.instancingMorph&&o.enable(2),S.matcap&&o.enable(3),S.envMap&&o.enable(4),S.normalMapObjectSpace&&o.enable(5),S.normalMapTangentSpace&&o.enable(6),S.clearcoat&&o.enable(7),S.iridescence&&o.enable(8),S.alphaTest&&o.enable(9),S.vertexColors&&o.enable(10),S.vertexAlphas&&o.enable(11),S.vertexUv1s&&o.enable(12),S.vertexUv2s&&o.enable(13),S.vertexUv3s&&o.enable(14),S.vertexTangents&&o.enable(15),S.anisotropy&&o.enable(16),S.alphaHash&&o.enable(17),S.batching&&o.enable(18),S.dispersion&&o.enable(19),S.batchingColor&&o.enable(20),S.gradientMap&&o.enable(21),M.push(o.mask),o.disableAll(),S.fog&&o.enable(0),S.useFog&&o.enable(1),S.flatShading&&o.enable(2),S.logarithmicDepthBuffer&&o.enable(3),S.reversedDepthBuffer&&o.enable(4),S.skinning&&o.enable(5),S.morphTargets&&o.enable(6),S.morphNormals&&o.enable(7),S.morphColors&&o.enable(8),S.premultipliedAlpha&&o.enable(9),S.shadowMapEnabled&&o.enable(10),S.doubleSided&&o.enable(11),S.flipSided&&o.enable(12),S.useDepthPacking&&o.enable(13),S.dithering&&o.enable(14),S.transmission&&o.enable(15),S.sheen&&o.enable(16),S.opaque&&o.enable(17),S.pointsUvs&&o.enable(18),S.decodeVideoTexture&&o.enable(19),S.decodeVideoTextureEmissive&&o.enable(20),S.alphaToCoverage&&o.enable(21),M.push(o.mask)}function y(M){const S=g[M.type];let v;if(S){const C=zn[S];v=Hd.clone(C.uniforms)}else v=M.uniforms;return v}function A(M,S){let v=u.get(S);return v!==void 0?++v.usedTimes:(v=new dx(i,S,M,a),h.push(v),u.set(S,v)),v}function P(M){if(--M.usedTimes===0){const S=h.indexOf(M);h[S]=h[h.length-1],h.pop(),u.delete(M.cacheKey),M.destroy()}}function T(M){l.remove(M)}function D(){l.dispose()}return{getParameters:m,getProgramCacheKey:f,getUniforms:y,acquireProgram:A,releaseProgram:P,releaseShaderCache:T,programs:h,dispose:D}}function xx(){let i=new WeakMap;function t(r){return i.has(r)}function e(r){let o=i.get(r);return o===void 0&&(o={},i.set(r,o)),o}function n(r){i.delete(r)}function s(r,o,l){i.get(r)[o]=l}function a(){i=new WeakMap}return{has:t,get:e,remove:n,update:s,dispose:a}}function _x(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.material.id!==t.material.id?i.material.id-t.material.id:i.z!==t.z?i.z-t.z:i.id-t.id}function Jc(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.z!==t.z?t.z-i.z:i.id-t.id}function jc(){const i=[];let t=0;const e=[],n=[],s=[];function a(){t=0,e.length=0,n.length=0,s.length=0}function r(u,d,p,g,x,m){let f=i[t];return f===void 0?(f={id:u.id,object:u,geometry:d,material:p,groupOrder:g,renderOrder:u.renderOrder,z:x,group:m},i[t]=f):(f.id=u.id,f.object=u,f.geometry=d,f.material=p,f.groupOrder=g,f.renderOrder=u.renderOrder,f.z=x,f.group=m),t++,f}function o(u,d,p,g,x,m){const f=r(u,d,p,g,x,m);p.transmission>0?n.push(f):p.transparent===!0?s.push(f):e.push(f)}function l(u,d,p,g,x,m){const f=r(u,d,p,g,x,m);p.transmission>0?n.unshift(f):p.transparent===!0?s.unshift(f):e.unshift(f)}function c(u,d){e.length>1&&e.sort(u||_x),n.length>1&&n.sort(d||Jc),s.length>1&&s.sort(d||Jc)}function h(){for(let u=t,d=i.length;u<d;u++){const p=i[u];if(p.id===null)break;p.id=null,p.object=null,p.geometry=null,p.material=null,p.group=null}}return{opaque:e,transmissive:n,transparent:s,init:a,push:o,unshift:l,finish:h,sort:c}}function vx(){let i=new WeakMap;function t(n,s){const a=i.get(n);let r;return a===void 0?(r=new jc,i.set(n,[r])):s>=a.length?(r=new jc,a.push(r)):r=a[s],r}function e(){i=new WeakMap}return{get:t,dispose:e}}function Mx(){const i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"DirectionalLight":e={direction:new F,color:new Ot};break;case"SpotLight":e={position:new F,direction:new F,color:new Ot,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new F,color:new Ot,distance:0,decay:0};break;case"HemisphereLight":e={direction:new F,skyColor:new Ot,groundColor:new Ot};break;case"RectAreaLight":e={color:new Ot,position:new F,halfWidth:new F,halfHeight:new F};break}return i[t.id]=e,e}}}function yx(){const i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"DirectionalLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ut};break;case"SpotLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ut};break;case"PointLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ut,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[t.id]=e,e}}}let Sx=0;function wx(i,t){return(t.castShadow?2:0)-(i.castShadow?2:0)+(t.map?1:0)-(i.map?1:0)}function bx(i){const t=new Mx,e=yx(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)n.probe.push(new F);const s=new F,a=new jt,r=new jt;function o(c){let h=0,u=0,d=0;for(let M=0;M<9;M++)n.probe[M].set(0,0,0);let p=0,g=0,x=0,m=0,f=0,b=0,w=0,y=0,A=0,P=0,T=0;c.sort(wx);for(let M=0,S=c.length;M<S;M++){const v=c[M],C=v.color,L=v.intensity,N=v.distance;let U=null;if(v.shadow&&v.shadow.map&&(v.shadow.map.texture.format===Ms?U=v.shadow.map.texture:U=v.shadow.map.depthTexture||v.shadow.map.texture),v.isAmbientLight)h+=C.r*L,u+=C.g*L,d+=C.b*L;else if(v.isLightProbe){for(let H=0;H<9;H++)n.probe[H].addScaledVector(v.sh.coefficients[H],L);T++}else if(v.isDirectionalLight){const H=t.get(v);if(H.color.copy(v.color).multiplyScalar(v.intensity),v.castShadow){const k=v.shadow,q=e.get(v);q.shadowIntensity=k.intensity,q.shadowBias=k.bias,q.shadowNormalBias=k.normalBias,q.shadowRadius=k.radius,q.shadowMapSize=k.mapSize,n.directionalShadow[p]=q,n.directionalShadowMap[p]=U,n.directionalShadowMatrix[p]=v.shadow.matrix,b++}n.directional[p]=H,p++}else if(v.isSpotLight){const H=t.get(v);H.position.setFromMatrixPosition(v.matrixWorld),H.color.copy(C).multiplyScalar(L),H.distance=N,H.coneCos=Math.cos(v.angle),H.penumbraCos=Math.cos(v.angle*(1-v.penumbra)),H.decay=v.decay,n.spot[x]=H;const k=v.shadow;if(v.map&&(n.spotLightMap[A]=v.map,A++,k.updateMatrices(v),v.castShadow&&P++),n.spotLightMatrix[x]=k.matrix,v.castShadow){const q=e.get(v);q.shadowIntensity=k.intensity,q.shadowBias=k.bias,q.shadowNormalBias=k.normalBias,q.shadowRadius=k.radius,q.shadowMapSize=k.mapSize,n.spotShadow[x]=q,n.spotShadowMap[x]=U,y++}x++}else if(v.isRectAreaLight){const H=t.get(v);H.color.copy(C).multiplyScalar(L),H.halfWidth.set(v.width*.5,0,0),H.halfHeight.set(0,v.height*.5,0),n.rectArea[m]=H,m++}else if(v.isPointLight){const H=t.get(v);if(H.color.copy(v.color).multiplyScalar(v.intensity),H.distance=v.distance,H.decay=v.decay,v.castShadow){const k=v.shadow,q=e.get(v);q.shadowIntensity=k.intensity,q.shadowBias=k.bias,q.shadowNormalBias=k.normalBias,q.shadowRadius=k.radius,q.shadowMapSize=k.mapSize,q.shadowCameraNear=k.camera.near,q.shadowCameraFar=k.camera.far,n.pointShadow[g]=q,n.pointShadowMap[g]=U,n.pointShadowMatrix[g]=v.shadow.matrix,w++}n.point[g]=H,g++}else if(v.isHemisphereLight){const H=t.get(v);H.skyColor.copy(v.color).multiplyScalar(L),H.groundColor.copy(v.groundColor).multiplyScalar(L),n.hemi[f]=H,f++}}m>0&&(i.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=_t.LTC_FLOAT_1,n.rectAreaLTC2=_t.LTC_FLOAT_2):(n.rectAreaLTC1=_t.LTC_HALF_1,n.rectAreaLTC2=_t.LTC_HALF_2)),n.ambient[0]=h,n.ambient[1]=u,n.ambient[2]=d;const D=n.hash;(D.directionalLength!==p||D.pointLength!==g||D.spotLength!==x||D.rectAreaLength!==m||D.hemiLength!==f||D.numDirectionalShadows!==b||D.numPointShadows!==w||D.numSpotShadows!==y||D.numSpotMaps!==A||D.numLightProbes!==T)&&(n.directional.length=p,n.spot.length=x,n.rectArea.length=m,n.point.length=g,n.hemi.length=f,n.directionalShadow.length=b,n.directionalShadowMap.length=b,n.pointShadow.length=w,n.pointShadowMap.length=w,n.spotShadow.length=y,n.spotShadowMap.length=y,n.directionalShadowMatrix.length=b,n.pointShadowMatrix.length=w,n.spotLightMatrix.length=y+A-P,n.spotLightMap.length=A,n.numSpotLightShadowsWithMaps=P,n.numLightProbes=T,D.directionalLength=p,D.pointLength=g,D.spotLength=x,D.rectAreaLength=m,D.hemiLength=f,D.numDirectionalShadows=b,D.numPointShadows=w,D.numSpotShadows=y,D.numSpotMaps=A,D.numLightProbes=T,n.version=Sx++)}function l(c,h){let u=0,d=0,p=0,g=0,x=0;const m=h.matrixWorldInverse;for(let f=0,b=c.length;f<b;f++){const w=c[f];if(w.isDirectionalLight){const y=n.directional[u];y.direction.setFromMatrixPosition(w.matrixWorld),s.setFromMatrixPosition(w.target.matrixWorld),y.direction.sub(s),y.direction.transformDirection(m),u++}else if(w.isSpotLight){const y=n.spot[p];y.position.setFromMatrixPosition(w.matrixWorld),y.position.applyMatrix4(m),y.direction.setFromMatrixPosition(w.matrixWorld),s.setFromMatrixPosition(w.target.matrixWorld),y.direction.sub(s),y.direction.transformDirection(m),p++}else if(w.isRectAreaLight){const y=n.rectArea[g];y.position.setFromMatrixPosition(w.matrixWorld),y.position.applyMatrix4(m),r.identity(),a.copy(w.matrixWorld),a.premultiply(m),r.extractRotation(a),y.halfWidth.set(w.width*.5,0,0),y.halfHeight.set(0,w.height*.5,0),y.halfWidth.applyMatrix4(r),y.halfHeight.applyMatrix4(r),g++}else if(w.isPointLight){const y=n.point[d];y.position.setFromMatrixPosition(w.matrixWorld),y.position.applyMatrix4(m),d++}else if(w.isHemisphereLight){const y=n.hemi[x];y.direction.setFromMatrixPosition(w.matrixWorld),y.direction.transformDirection(m),x++}}}return{setup:o,setupView:l,state:n}}function Qc(i){const t=new bx(i),e=[],n=[];function s(h){c.camera=h,e.length=0,n.length=0}function a(h){e.push(h)}function r(h){n.push(h)}function o(){t.setup(e)}function l(h){t.setupView(e,h)}const c={lightsArray:e,shadowsArray:n,camera:null,lights:t,transmissionRenderTarget:{}};return{init:s,state:c,setupLights:o,setupLightsView:l,pushLight:a,pushShadow:r}}function Ex(i){let t=new WeakMap;function e(s,a=0){const r=t.get(s);let o;return r===void 0?(o=new Qc(i),t.set(s,[o])):a>=r.length?(o=new Qc(i),r.push(o)):o=r[a],o}function n(){t=new WeakMap}return{get:e,dispose:n}}const Tx=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,Ax=`uniform sampler2D shadow_pass;
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
}`,Cx=[new F(1,0,0),new F(-1,0,0),new F(0,1,0),new F(0,-1,0),new F(0,0,1),new F(0,0,-1)],Rx=[new F(0,-1,0),new F(0,-1,0),new F(0,0,1),new F(0,0,-1),new F(0,-1,0),new F(0,-1,0)],th=new jt,ks=new F,to=new F;function Px(i,t,e){let n=new Rl;const s=new ut,a=new ut,r=new Ee,o=new Nf,l=new Uf,c={},h=e.maxTextureSize,u={[wi]:rn,[rn]:wi,[Le]:Le},d=new Tn({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new ut},radius:{value:4}},vertexShader:Tx,fragmentShader:Ax}),p=d.clone();p.defines.HORIZONTAL_PASS=1;const g=new on;g.setAttribute("position",new bn(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const x=new nt(g,d),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Ha;let f=this.type;this.render=function(P,T,D){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||P.length===0)return;P.type===Cu&&(Ft("WebGLShadowMap: PCFSoftShadowMap has been deprecated. Using PCFShadowMap instead."),P.type=Ha);const M=i.getRenderTarget(),S=i.getActiveCubeFace(),v=i.getActiveMipmapLevel(),C=i.state;C.setBlending(ai),C.buffers.depth.getReversed()===!0?C.buffers.color.setClear(0,0,0,0):C.buffers.color.setClear(1,1,1,1),C.buffers.depth.setTest(!0),C.setScissorTest(!1);const L=f!==this.type;L&&T.traverse(function(N){N.material&&(Array.isArray(N.material)?N.material.forEach(U=>U.needsUpdate=!0):N.material.needsUpdate=!0)});for(let N=0,U=P.length;N<U;N++){const H=P[N],k=H.shadow;if(k===void 0){Ft("WebGLShadowMap:",H,"has no shadow.");continue}if(k.autoUpdate===!1&&k.needsUpdate===!1)continue;s.copy(k.mapSize);const q=k.getFrameExtents();if(s.multiply(q),a.copy(k.mapSize),(s.x>h||s.y>h)&&(s.x>h&&(a.x=Math.floor(h/q.x),s.x=a.x*q.x,k.mapSize.x=a.x),s.y>h&&(a.y=Math.floor(h/q.y),s.y=a.y*q.y,k.mapSize.y=a.y)),k.map===null||L===!0){if(k.map!==null&&(k.map.depthTexture!==null&&(k.map.depthTexture.dispose(),k.map.depthTexture=null),k.map.dispose()),this.type===Vs){if(H.isPointLight){Ft("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}k.map=new Yn(s.x,s.y,{format:Ms,type:li,minFilter:Ge,magFilter:Ge,generateMipmaps:!1}),k.map.texture.name=H.name+".shadowMap",k.map.depthTexture=new ea(s.x,s.y,Nn),k.map.depthTexture.name=H.name+".shadowMapDepth",k.map.depthTexture.format=ci,k.map.depthTexture.compareFunction=null,k.map.depthTexture.minFilter=We,k.map.depthTexture.magFilter=We}else{H.isPointLight?(k.map=new Uh(s.x),k.map.depthTexture=new jd(s.x,qn)):(k.map=new Yn(s.x,s.y),k.map.depthTexture=new ea(s.x,s.y,qn)),k.map.depthTexture.name=H.name+".shadowMap",k.map.depthTexture.format=ci;const tt=i.state.buffers.depth.getReversed();this.type===Ha?(k.map.depthTexture.compareFunction=tt?Tl:El,k.map.depthTexture.minFilter=Ge,k.map.depthTexture.magFilter=Ge):(k.map.depthTexture.compareFunction=null,k.map.depthTexture.minFilter=We,k.map.depthTexture.magFilter=We)}k.camera.updateProjectionMatrix()}const ot=k.map.isWebGLCubeRenderTarget?6:1;for(let tt=0;tt<ot;tt++){if(k.map.isWebGLCubeRenderTarget)i.setRenderTarget(k.map,tt),i.clear();else{tt===0&&(i.setRenderTarget(k.map),i.clear());const it=k.getViewport(tt);r.set(a.x*it.x,a.y*it.y,a.x*it.z,a.y*it.w),C.viewport(r)}if(H.isPointLight){const it=k.camera,Gt=k.matrix,zt=H.distance||it.far;zt!==it.far&&(it.far=zt,it.updateProjectionMatrix()),ks.setFromMatrixPosition(H.matrixWorld),it.position.copy(ks),to.copy(it.position),to.add(Cx[tt]),it.up.copy(Rx[tt]),it.lookAt(to),it.updateMatrixWorld(),Gt.makeTranslation(-ks.x,-ks.y,-ks.z),th.multiplyMatrices(it.projectionMatrix,it.matrixWorldInverse),k._frustum.setFromProjectionMatrix(th,it.coordinateSystem,it.reversedDepth)}else k.updateMatrices(H);n=k.getFrustum(),y(T,D,k.camera,H,this.type)}k.isPointLightShadow!==!0&&this.type===Vs&&b(k,D),k.needsUpdate=!1}f=this.type,m.needsUpdate=!1,i.setRenderTarget(M,S,v)};function b(P,T){const D=t.update(x);d.defines.VSM_SAMPLES!==P.blurSamples&&(d.defines.VSM_SAMPLES=P.blurSamples,p.defines.VSM_SAMPLES=P.blurSamples,d.needsUpdate=!0,p.needsUpdate=!0),P.mapPass===null&&(P.mapPass=new Yn(s.x,s.y,{format:Ms,type:li})),d.uniforms.shadow_pass.value=P.map.depthTexture,d.uniforms.resolution.value=P.mapSize,d.uniforms.radius.value=P.radius,i.setRenderTarget(P.mapPass),i.clear(),i.renderBufferDirect(T,null,D,d,x,null),p.uniforms.shadow_pass.value=P.mapPass.texture,p.uniforms.resolution.value=P.mapSize,p.uniforms.radius.value=P.radius,i.setRenderTarget(P.map),i.clear(),i.renderBufferDirect(T,null,D,p,x,null)}function w(P,T,D,M){let S=null;const v=D.isPointLight===!0?P.customDistanceMaterial:P.customDepthMaterial;if(v!==void 0)S=v;else if(S=D.isPointLight===!0?l:o,i.localClippingEnabled&&T.clipShadows===!0&&Array.isArray(T.clippingPlanes)&&T.clippingPlanes.length!==0||T.displacementMap&&T.displacementScale!==0||T.alphaMap&&T.alphaTest>0||T.map&&T.alphaTest>0||T.alphaToCoverage===!0){const C=S.uuid,L=T.uuid;let N=c[C];N===void 0&&(N={},c[C]=N);let U=N[L];U===void 0&&(U=S.clone(),N[L]=U,T.addEventListener("dispose",A)),S=U}if(S.visible=T.visible,S.wireframe=T.wireframe,M===Vs?S.side=T.shadowSide!==null?T.shadowSide:T.side:S.side=T.shadowSide!==null?T.shadowSide:u[T.side],S.alphaMap=T.alphaMap,S.alphaTest=T.alphaToCoverage===!0?.5:T.alphaTest,S.map=T.map,S.clipShadows=T.clipShadows,S.clippingPlanes=T.clippingPlanes,S.clipIntersection=T.clipIntersection,S.displacementMap=T.displacementMap,S.displacementScale=T.displacementScale,S.displacementBias=T.displacementBias,S.wireframeLinewidth=T.wireframeLinewidth,S.linewidth=T.linewidth,D.isPointLight===!0&&S.isMeshDistanceMaterial===!0){const C=i.properties.get(S);C.light=D}return S}function y(P,T,D,M,S){if(P.visible===!1)return;if(P.layers.test(T.layers)&&(P.isMesh||P.isLine||P.isPoints)&&(P.castShadow||P.receiveShadow&&S===Vs)&&(!P.frustumCulled||n.intersectsObject(P))){P.modelViewMatrix.multiplyMatrices(D.matrixWorldInverse,P.matrixWorld);const L=t.update(P),N=P.material;if(Array.isArray(N)){const U=L.groups;for(let H=0,k=U.length;H<k;H++){const q=U[H],ot=N[q.materialIndex];if(ot&&ot.visible){const tt=w(P,ot,M,S);P.onBeforeShadow(i,P,T,D,L,tt,q),i.renderBufferDirect(D,null,L,tt,P,q),P.onAfterShadow(i,P,T,D,L,tt,q)}}}else if(N.visible){const U=w(P,N,M,S);P.onBeforeShadow(i,P,T,D,L,U,null),i.renderBufferDirect(D,null,L,U,P,null),P.onAfterShadow(i,P,T,D,L,U,null)}}const C=P.children;for(let L=0,N=C.length;L<N;L++)y(C[L],T,D,M,S)}function A(P){P.target.removeEventListener("dispose",A);for(const D in c){const M=c[D],S=P.target.uuid;S in M&&(M[S].dispose(),delete M[S])}}}const Ix={[ho]:uo,[fo]:go,[po]:xo,[_s]:mo,[uo]:ho,[go]:fo,[xo]:po,[mo]:_s};function Lx(i,t){function e(){let O=!1;const Mt=new Ee;let ct=null;const wt=new Ee(0,0,0,0);return{setMask:function(lt){ct!==lt&&!O&&(i.colorMask(lt,lt,lt,lt),ct=lt)},setLocked:function(lt){O=lt},setClear:function(lt,Q,ft,Xt,ge){ge===!0&&(lt*=Xt,Q*=Xt,ft*=Xt),Mt.set(lt,Q,ft,Xt),wt.equals(Mt)===!1&&(i.clearColor(lt,Q,ft,Xt),wt.copy(Mt))},reset:function(){O=!1,ct=null,wt.set(-1,0,0,0)}}}function n(){let O=!1,Mt=!1,ct=null,wt=null,lt=null;return{setReversed:function(Q){if(Mt!==Q){const ft=t.get("EXT_clip_control");Q?ft.clipControlEXT(ft.LOWER_LEFT_EXT,ft.ZERO_TO_ONE_EXT):ft.clipControlEXT(ft.LOWER_LEFT_EXT,ft.NEGATIVE_ONE_TO_ONE_EXT),Mt=Q;const Xt=lt;lt=null,this.setClear(Xt)}},getReversed:function(){return Mt},setTest:function(Q){Q?et(i.DEPTH_TEST):yt(i.DEPTH_TEST)},setMask:function(Q){ct!==Q&&!O&&(i.depthMask(Q),ct=Q)},setFunc:function(Q){if(Mt&&(Q=Ix[Q]),wt!==Q){switch(Q){case ho:i.depthFunc(i.NEVER);break;case uo:i.depthFunc(i.ALWAYS);break;case fo:i.depthFunc(i.LESS);break;case _s:i.depthFunc(i.LEQUAL);break;case po:i.depthFunc(i.EQUAL);break;case mo:i.depthFunc(i.GEQUAL);break;case go:i.depthFunc(i.GREATER);break;case xo:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}wt=Q}},setLocked:function(Q){O=Q},setClear:function(Q){lt!==Q&&(Mt&&(Q=1-Q),i.clearDepth(Q),lt=Q)},reset:function(){O=!1,ct=null,wt=null,lt=null,Mt=!1}}}function s(){let O=!1,Mt=null,ct=null,wt=null,lt=null,Q=null,ft=null,Xt=null,ge=null;return{setTest:function(he){O||(he?et(i.STENCIL_TEST):yt(i.STENCIL_TEST))},setMask:function(he){Mt!==he&&!O&&(i.stencilMask(he),Mt=he)},setFunc:function(he,On,$n){(ct!==he||wt!==On||lt!==$n)&&(i.stencilFunc(he,On,$n),ct=he,wt=On,lt=$n)},setOp:function(he,On,$n){(Q!==he||ft!==On||Xt!==$n)&&(i.stencilOp(he,On,$n),Q=he,ft=On,Xt=$n)},setLocked:function(he){O=he},setClear:function(he){ge!==he&&(i.clearStencil(he),ge=he)},reset:function(){O=!1,Mt=null,ct=null,wt=null,lt=null,Q=null,ft=null,Xt=null,ge=null}}}const a=new e,r=new n,o=new s,l=new WeakMap,c=new WeakMap;let h={},u={},d=new WeakMap,p=[],g=null,x=!1,m=null,f=null,b=null,w=null,y=null,A=null,P=null,T=new Ot(0,0,0),D=0,M=!1,S=null,v=null,C=null,L=null,N=null;const U=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let H=!1,k=0;const q=i.getParameter(i.VERSION);q.indexOf("WebGL")!==-1?(k=parseFloat(/^WebGL (\d)/.exec(q)[1]),H=k>=1):q.indexOf("OpenGL ES")!==-1&&(k=parseFloat(/^OpenGL ES (\d)/.exec(q)[1]),H=k>=2);let ot=null,tt={};const it=i.getParameter(i.SCISSOR_BOX),Gt=i.getParameter(i.VIEWPORT),zt=new Ee().fromArray(it),ae=new Ee().fromArray(Gt);function ne(O,Mt,ct,wt){const lt=new Uint8Array(4),Q=i.createTexture();i.bindTexture(O,Q),i.texParameteri(O,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(O,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let ft=0;ft<ct;ft++)O===i.TEXTURE_3D||O===i.TEXTURE_2D_ARRAY?i.texImage3D(Mt,0,i.RGBA,1,1,wt,0,i.RGBA,i.UNSIGNED_BYTE,lt):i.texImage2D(Mt+ft,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,lt);return Q}const Z={};Z[i.TEXTURE_2D]=ne(i.TEXTURE_2D,i.TEXTURE_2D,1),Z[i.TEXTURE_CUBE_MAP]=ne(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),Z[i.TEXTURE_2D_ARRAY]=ne(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),Z[i.TEXTURE_3D]=ne(i.TEXTURE_3D,i.TEXTURE_3D,1,1),a.setClear(0,0,0,1),r.setClear(1),o.setClear(0),et(i.DEPTH_TEST),r.setFunc(_s),J(!1),at(Zl),et(i.CULL_FACE),$(ai);function et(O){h[O]!==!0&&(i.enable(O),h[O]=!0)}function yt(O){h[O]!==!1&&(i.disable(O),h[O]=!1)}function Nt(O,Mt){return u[O]!==Mt?(i.bindFramebuffer(O,Mt),u[O]=Mt,O===i.DRAW_FRAMEBUFFER&&(u[i.FRAMEBUFFER]=Mt),O===i.FRAMEBUFFER&&(u[i.DRAW_FRAMEBUFFER]=Mt),!0):!1}function St(O,Mt){let ct=p,wt=!1;if(O){ct=d.get(Mt),ct===void 0&&(ct=[],d.set(Mt,ct));const lt=O.textures;if(ct.length!==lt.length||ct[0]!==i.COLOR_ATTACHMENT0){for(let Q=0,ft=lt.length;Q<ft;Q++)ct[Q]=i.COLOR_ATTACHMENT0+Q;ct.length=lt.length,wt=!0}}else ct[0]!==i.BACK&&(ct[0]=i.BACK,wt=!0);wt&&i.drawBuffers(ct)}function Jt(O){return g!==O?(i.useProgram(O),g=O,!0):!1}const re={[Oi]:i.FUNC_ADD,[Pu]:i.FUNC_SUBTRACT,[Iu]:i.FUNC_REVERSE_SUBTRACT};re[Lu]=i.MIN,re[Du]=i.MAX;const Wt={[Fu]:i.ZERO,[Nu]:i.ONE,[Uu]:i.SRC_COLOR,[lo]:i.SRC_ALPHA,[Gu]:i.SRC_ALPHA_SATURATE,[zu]:i.DST_COLOR,[Bu]:i.DST_ALPHA,[Ou]:i.ONE_MINUS_SRC_COLOR,[co]:i.ONE_MINUS_SRC_ALPHA,[Hu]:i.ONE_MINUS_DST_COLOR,[ku]:i.ONE_MINUS_DST_ALPHA,[Vu]:i.CONSTANT_COLOR,[Wu]:i.ONE_MINUS_CONSTANT_COLOR,[Xu]:i.CONSTANT_ALPHA,[Yu]:i.ONE_MINUS_CONSTANT_ALPHA};function $(O,Mt,ct,wt,lt,Q,ft,Xt,ge,he){if(O===ai){x===!0&&(yt(i.BLEND),x=!1);return}if(x===!1&&(et(i.BLEND),x=!0),O!==Ru){if(O!==m||he!==M){if((f!==Oi||y!==Oi)&&(i.blendEquation(i.FUNC_ADD),f=Oi,y=Oi),he)switch(O){case gs:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case wn:i.blendFunc(i.ONE,i.ONE);break;case $l:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case Kl:i.blendFuncSeparate(i.DST_COLOR,i.ONE_MINUS_SRC_ALPHA,i.ZERO,i.ONE);break;default:Qt("WebGLState: Invalid blending: ",O);break}else switch(O){case gs:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case wn:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE,i.ONE,i.ONE);break;case $l:Qt("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case Kl:Qt("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:Qt("WebGLState: Invalid blending: ",O);break}b=null,w=null,A=null,P=null,T.set(0,0,0),D=0,m=O,M=he}return}lt=lt||Mt,Q=Q||ct,ft=ft||wt,(Mt!==f||lt!==y)&&(i.blendEquationSeparate(re[Mt],re[lt]),f=Mt,y=lt),(ct!==b||wt!==w||Q!==A||ft!==P)&&(i.blendFuncSeparate(Wt[ct],Wt[wt],Wt[Q],Wt[ft]),b=ct,w=wt,A=Q,P=ft),(Xt.equals(T)===!1||ge!==D)&&(i.blendColor(Xt.r,Xt.g,Xt.b,ge),T.copy(Xt),D=ge),m=O,M=!1}function st(O,Mt){O.side===Le?yt(i.CULL_FACE):et(i.CULL_FACE);let ct=O.side===rn;Mt&&(ct=!ct),J(ct),O.blending===gs&&O.transparent===!1?$(ai):$(O.blending,O.blendEquation,O.blendSrc,O.blendDst,O.blendEquationAlpha,O.blendSrcAlpha,O.blendDstAlpha,O.blendColor,O.blendAlpha,O.premultipliedAlpha),r.setFunc(O.depthFunc),r.setTest(O.depthTest),r.setMask(O.depthWrite),a.setMask(O.colorWrite);const wt=O.stencilWrite;o.setTest(wt),wt&&(o.setMask(O.stencilWriteMask),o.setFunc(O.stencilFunc,O.stencilRef,O.stencilFuncMask),o.setOp(O.stencilFail,O.stencilZFail,O.stencilZPass)),bt(O.polygonOffset,O.polygonOffsetFactor,O.polygonOffsetUnits),O.alphaToCoverage===!0?et(i.SAMPLE_ALPHA_TO_COVERAGE):yt(i.SAMPLE_ALPHA_TO_COVERAGE)}function J(O){S!==O&&(O?i.frontFace(i.CW):i.frontFace(i.CCW),S=O)}function at(O){O!==Tu?(et(i.CULL_FACE),O!==v&&(O===Zl?i.cullFace(i.BACK):O===Au?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):yt(i.CULL_FACE),v=O}function I(O){O!==C&&(H&&i.lineWidth(O),C=O)}function bt(O,Mt,ct){O?(et(i.POLYGON_OFFSET_FILL),(L!==Mt||N!==ct)&&(i.polygonOffset(Mt,ct),L=Mt,N=ct)):yt(i.POLYGON_OFFSET_FILL)}function xt(O){O?et(i.SCISSOR_TEST):yt(i.SCISSOR_TEST)}function Dt(O){O===void 0&&(O=i.TEXTURE0+U-1),ot!==O&&(i.activeTexture(O),ot=O)}function ht(O,Mt,ct){ct===void 0&&(ot===null?ct=i.TEXTURE0+U-1:ct=ot);let wt=tt[ct];wt===void 0&&(wt={type:void 0,texture:void 0},tt[ct]=wt),(wt.type!==O||wt.texture!==Mt)&&(ot!==ct&&(i.activeTexture(ct),ot=ct),i.bindTexture(O,Mt||Z[O]),wt.type=O,wt.texture=Mt)}function R(){const O=tt[ot];O!==void 0&&O.type!==void 0&&(i.bindTexture(O.type,null),O.type=void 0,O.texture=void 0)}function _(){try{i.compressedTexImage2D(...arguments)}catch(O){Qt("WebGLState:",O)}}function B(){try{i.compressedTexImage3D(...arguments)}catch(O){Qt("WebGLState:",O)}}function X(){try{i.texSubImage2D(...arguments)}catch(O){Qt("WebGLState:",O)}}function j(){try{i.texSubImage3D(...arguments)}catch(O){Qt("WebGLState:",O)}}function Y(){try{i.compressedTexSubImage2D(...arguments)}catch(O){Qt("WebGLState:",O)}}function Pt(){try{i.compressedTexSubImage3D(...arguments)}catch(O){Qt("WebGLState:",O)}}function dt(){try{i.texStorage2D(...arguments)}catch(O){Qt("WebGLState:",O)}}function Ct(){try{i.texStorage3D(...arguments)}catch(O){Qt("WebGLState:",O)}}function Ht(){try{i.texImage2D(...arguments)}catch(O){Qt("WebGLState:",O)}}function rt(){try{i.texImage3D(...arguments)}catch(O){Qt("WebGLState:",O)}}function mt(O){zt.equals(O)===!1&&(i.scissor(O.x,O.y,O.z,O.w),zt.copy(O))}function Rt(O){ae.equals(O)===!1&&(i.viewport(O.x,O.y,O.z,O.w),ae.copy(O))}function It(O,Mt){let ct=c.get(Mt);ct===void 0&&(ct=new WeakMap,c.set(Mt,ct));let wt=ct.get(O);wt===void 0&&(wt=i.getUniformBlockIndex(Mt,O.name),ct.set(O,wt))}function pt(O,Mt){const wt=c.get(Mt).get(O);l.get(Mt)!==wt&&(i.uniformBlockBinding(Mt,wt,O.__bindingPointIndex),l.set(Mt,wt))}function Zt(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),r.setReversed(!1),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),h={},ot=null,tt={},u={},d=new WeakMap,p=[],g=null,x=!1,m=null,f=null,b=null,w=null,y=null,A=null,P=null,T=new Ot(0,0,0),D=0,M=!1,S=null,v=null,C=null,L=null,N=null,zt.set(0,0,i.canvas.width,i.canvas.height),ae.set(0,0,i.canvas.width,i.canvas.height),a.reset(),r.reset(),o.reset()}return{buffers:{color:a,depth:r,stencil:o},enable:et,disable:yt,bindFramebuffer:Nt,drawBuffers:St,useProgram:Jt,setBlending:$,setMaterial:st,setFlipSided:J,setCullFace:at,setLineWidth:I,setPolygonOffset:bt,setScissorTest:xt,activeTexture:Dt,bindTexture:ht,unbindTexture:R,compressedTexImage2D:_,compressedTexImage3D:B,texImage2D:Ht,texImage3D:rt,updateUBOMapping:It,uniformBlockBinding:pt,texStorage2D:dt,texStorage3D:Ct,texSubImage2D:X,texSubImage3D:j,compressedTexSubImage2D:Y,compressedTexSubImage3D:Pt,scissor:mt,viewport:Rt,reset:Zt}}function Dx(i,t,e,n,s,a,r){const o=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new ut,h=new WeakMap;let u;const d=new WeakMap;let p=!1;try{p=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(R,_){return p?new OffscreenCanvas(R,_):Ja("canvas")}function x(R,_,B){let X=1;const j=ht(R);if((j.width>B||j.height>B)&&(X=B/Math.max(j.width,j.height)),X<1)if(typeof HTMLImageElement<"u"&&R instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&R instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&R instanceof ImageBitmap||typeof VideoFrame<"u"&&R instanceof VideoFrame){const Y=Math.floor(X*j.width),Pt=Math.floor(X*j.height);u===void 0&&(u=g(Y,Pt));const dt=_?g(Y,Pt):u;return dt.width=Y,dt.height=Pt,dt.getContext("2d").drawImage(R,0,0,Y,Pt),Ft("WebGLRenderer: Texture has been resized from ("+j.width+"x"+j.height+") to ("+Y+"x"+Pt+")."),dt}else return"data"in R&&Ft("WebGLRenderer: Image in DataTexture is too big ("+j.width+"x"+j.height+")."),R;return R}function m(R){return R.generateMipmaps}function f(R){i.generateMipmap(R)}function b(R){return R.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:R.isWebGL3DRenderTarget?i.TEXTURE_3D:R.isWebGLArrayRenderTarget||R.isCompressedArrayTexture?i.TEXTURE_2D_ARRAY:i.TEXTURE_2D}function w(R,_,B,X,j=!1){if(R!==null){if(i[R]!==void 0)return i[R];Ft("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+R+"'")}let Y=_;if(_===i.RED&&(B===i.FLOAT&&(Y=i.R32F),B===i.HALF_FLOAT&&(Y=i.R16F),B===i.UNSIGNED_BYTE&&(Y=i.R8)),_===i.RED_INTEGER&&(B===i.UNSIGNED_BYTE&&(Y=i.R8UI),B===i.UNSIGNED_SHORT&&(Y=i.R16UI),B===i.UNSIGNED_INT&&(Y=i.R32UI),B===i.BYTE&&(Y=i.R8I),B===i.SHORT&&(Y=i.R16I),B===i.INT&&(Y=i.R32I)),_===i.RG&&(B===i.FLOAT&&(Y=i.RG32F),B===i.HALF_FLOAT&&(Y=i.RG16F),B===i.UNSIGNED_BYTE&&(Y=i.RG8)),_===i.RG_INTEGER&&(B===i.UNSIGNED_BYTE&&(Y=i.RG8UI),B===i.UNSIGNED_SHORT&&(Y=i.RG16UI),B===i.UNSIGNED_INT&&(Y=i.RG32UI),B===i.BYTE&&(Y=i.RG8I),B===i.SHORT&&(Y=i.RG16I),B===i.INT&&(Y=i.RG32I)),_===i.RGB_INTEGER&&(B===i.UNSIGNED_BYTE&&(Y=i.RGB8UI),B===i.UNSIGNED_SHORT&&(Y=i.RGB16UI),B===i.UNSIGNED_INT&&(Y=i.RGB32UI),B===i.BYTE&&(Y=i.RGB8I),B===i.SHORT&&(Y=i.RGB16I),B===i.INT&&(Y=i.RGB32I)),_===i.RGBA_INTEGER&&(B===i.UNSIGNED_BYTE&&(Y=i.RGBA8UI),B===i.UNSIGNED_SHORT&&(Y=i.RGBA16UI),B===i.UNSIGNED_INT&&(Y=i.RGBA32UI),B===i.BYTE&&(Y=i.RGBA8I),B===i.SHORT&&(Y=i.RGBA16I),B===i.INT&&(Y=i.RGBA32I)),_===i.RGB&&(B===i.UNSIGNED_INT_5_9_9_9_REV&&(Y=i.RGB9_E5),B===i.UNSIGNED_INT_10F_11F_11F_REV&&(Y=i.R11F_G11F_B10F)),_===i.RGBA){const Pt=j?$a:te.getTransfer(X);B===i.FLOAT&&(Y=i.RGBA32F),B===i.HALF_FLOAT&&(Y=i.RGBA16F),B===i.UNSIGNED_BYTE&&(Y=Pt===de?i.SRGB8_ALPHA8:i.RGBA8),B===i.UNSIGNED_SHORT_4_4_4_4&&(Y=i.RGBA4),B===i.UNSIGNED_SHORT_5_5_5_1&&(Y=i.RGB5_A1)}return(Y===i.R16F||Y===i.R32F||Y===i.RG16F||Y===i.RG32F||Y===i.RGBA16F||Y===i.RGBA32F)&&t.get("EXT_color_buffer_float"),Y}function y(R,_){let B;return R?_===null||_===qn||_===js?B=i.DEPTH24_STENCIL8:_===Nn?B=i.DEPTH32F_STENCIL8:_===Js&&(B=i.DEPTH24_STENCIL8,Ft("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):_===null||_===qn||_===js?B=i.DEPTH_COMPONENT24:_===Nn?B=i.DEPTH_COMPONENT32F:_===Js&&(B=i.DEPTH_COMPONENT16),B}function A(R,_){return m(R)===!0||R.isFramebufferTexture&&R.minFilter!==We&&R.minFilter!==Ge?Math.log2(Math.max(_.width,_.height))+1:R.mipmaps!==void 0&&R.mipmaps.length>0?R.mipmaps.length:R.isCompressedTexture&&Array.isArray(R.image)?_.mipmaps.length:1}function P(R){const _=R.target;_.removeEventListener("dispose",P),D(_),_.isVideoTexture&&h.delete(_)}function T(R){const _=R.target;_.removeEventListener("dispose",T),S(_)}function D(R){const _=n.get(R);if(_.__webglInit===void 0)return;const B=R.source,X=d.get(B);if(X){const j=X[_.__cacheKey];j.usedTimes--,j.usedTimes===0&&M(R),Object.keys(X).length===0&&d.delete(B)}n.remove(R)}function M(R){const _=n.get(R);i.deleteTexture(_.__webglTexture);const B=R.source,X=d.get(B);delete X[_.__cacheKey],r.memory.textures--}function S(R){const _=n.get(R);if(R.depthTexture&&(R.depthTexture.dispose(),n.remove(R.depthTexture)),R.isWebGLCubeRenderTarget)for(let X=0;X<6;X++){if(Array.isArray(_.__webglFramebuffer[X]))for(let j=0;j<_.__webglFramebuffer[X].length;j++)i.deleteFramebuffer(_.__webglFramebuffer[X][j]);else i.deleteFramebuffer(_.__webglFramebuffer[X]);_.__webglDepthbuffer&&i.deleteRenderbuffer(_.__webglDepthbuffer[X])}else{if(Array.isArray(_.__webglFramebuffer))for(let X=0;X<_.__webglFramebuffer.length;X++)i.deleteFramebuffer(_.__webglFramebuffer[X]);else i.deleteFramebuffer(_.__webglFramebuffer);if(_.__webglDepthbuffer&&i.deleteRenderbuffer(_.__webglDepthbuffer),_.__webglMultisampledFramebuffer&&i.deleteFramebuffer(_.__webglMultisampledFramebuffer),_.__webglColorRenderbuffer)for(let X=0;X<_.__webglColorRenderbuffer.length;X++)_.__webglColorRenderbuffer[X]&&i.deleteRenderbuffer(_.__webglColorRenderbuffer[X]);_.__webglDepthRenderbuffer&&i.deleteRenderbuffer(_.__webglDepthRenderbuffer)}const B=R.textures;for(let X=0,j=B.length;X<j;X++){const Y=n.get(B[X]);Y.__webglTexture&&(i.deleteTexture(Y.__webglTexture),r.memory.textures--),n.remove(B[X])}n.remove(R)}let v=0;function C(){v=0}function L(){const R=v;return R>=s.maxTextures&&Ft("WebGLTextures: Trying to use "+R+" texture units while this GPU supports only "+s.maxTextures),v+=1,R}function N(R){const _=[];return _.push(R.wrapS),_.push(R.wrapT),_.push(R.wrapR||0),_.push(R.magFilter),_.push(R.minFilter),_.push(R.anisotropy),_.push(R.internalFormat),_.push(R.format),_.push(R.type),_.push(R.generateMipmaps),_.push(R.premultiplyAlpha),_.push(R.flipY),_.push(R.unpackAlignment),_.push(R.colorSpace),_.join()}function U(R,_){const B=n.get(R);if(R.isVideoTexture&&xt(R),R.isRenderTargetTexture===!1&&R.isExternalTexture!==!0&&R.version>0&&B.__version!==R.version){const X=R.image;if(X===null)Ft("WebGLRenderer: Texture marked for update but no image data found.");else if(X.complete===!1)Ft("WebGLRenderer: Texture marked for update but image is incomplete");else{Z(B,R,_);return}}else R.isExternalTexture&&(B.__webglTexture=R.sourceTexture?R.sourceTexture:null);e.bindTexture(i.TEXTURE_2D,B.__webglTexture,i.TEXTURE0+_)}function H(R,_){const B=n.get(R);if(R.isRenderTargetTexture===!1&&R.version>0&&B.__version!==R.version){Z(B,R,_);return}else R.isExternalTexture&&(B.__webglTexture=R.sourceTexture?R.sourceTexture:null);e.bindTexture(i.TEXTURE_2D_ARRAY,B.__webglTexture,i.TEXTURE0+_)}function k(R,_){const B=n.get(R);if(R.isRenderTargetTexture===!1&&R.version>0&&B.__version!==R.version){Z(B,R,_);return}e.bindTexture(i.TEXTURE_3D,B.__webglTexture,i.TEXTURE0+_)}function q(R,_){const B=n.get(R);if(R.isCubeDepthTexture!==!0&&R.version>0&&B.__version!==R.version){et(B,R,_);return}e.bindTexture(i.TEXTURE_CUBE_MAP,B.__webglTexture,i.TEXTURE0+_)}const ot={[Mo]:i.REPEAT,[ni]:i.CLAMP_TO_EDGE,[yo]:i.MIRRORED_REPEAT},tt={[We]:i.NEAREST,[$u]:i.NEAREST_MIPMAP_NEAREST,[ha]:i.NEAREST_MIPMAP_LINEAR,[Ge]:i.LINEAR,[vr]:i.LINEAR_MIPMAP_NEAREST,[ki]:i.LINEAR_MIPMAP_LINEAR},it={[ju]:i.NEVER,[id]:i.ALWAYS,[Qu]:i.LESS,[El]:i.LEQUAL,[td]:i.EQUAL,[Tl]:i.GEQUAL,[ed]:i.GREATER,[nd]:i.NOTEQUAL};function Gt(R,_){if(_.type===Nn&&t.has("OES_texture_float_linear")===!1&&(_.magFilter===Ge||_.magFilter===vr||_.magFilter===ha||_.magFilter===ki||_.minFilter===Ge||_.minFilter===vr||_.minFilter===ha||_.minFilter===ki)&&Ft("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(R,i.TEXTURE_WRAP_S,ot[_.wrapS]),i.texParameteri(R,i.TEXTURE_WRAP_T,ot[_.wrapT]),(R===i.TEXTURE_3D||R===i.TEXTURE_2D_ARRAY)&&i.texParameteri(R,i.TEXTURE_WRAP_R,ot[_.wrapR]),i.texParameteri(R,i.TEXTURE_MAG_FILTER,tt[_.magFilter]),i.texParameteri(R,i.TEXTURE_MIN_FILTER,tt[_.minFilter]),_.compareFunction&&(i.texParameteri(R,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(R,i.TEXTURE_COMPARE_FUNC,it[_.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(_.magFilter===We||_.minFilter!==ha&&_.minFilter!==ki||_.type===Nn&&t.has("OES_texture_float_linear")===!1)return;if(_.anisotropy>1||n.get(_).__currentAnisotropy){const B=t.get("EXT_texture_filter_anisotropic");i.texParameterf(R,B.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(_.anisotropy,s.getMaxAnisotropy())),n.get(_).__currentAnisotropy=_.anisotropy}}}function zt(R,_){let B=!1;R.__webglInit===void 0&&(R.__webglInit=!0,_.addEventListener("dispose",P));const X=_.source;let j=d.get(X);j===void 0&&(j={},d.set(X,j));const Y=N(_);if(Y!==R.__cacheKey){j[Y]===void 0&&(j[Y]={texture:i.createTexture(),usedTimes:0},r.memory.textures++,B=!0),j[Y].usedTimes++;const Pt=j[R.__cacheKey];Pt!==void 0&&(j[R.__cacheKey].usedTimes--,Pt.usedTimes===0&&M(_)),R.__cacheKey=Y,R.__webglTexture=j[Y].texture}return B}function ae(R,_,B){return Math.floor(Math.floor(R/B)/_)}function ne(R,_,B,X){const Y=R.updateRanges;if(Y.length===0)e.texSubImage2D(i.TEXTURE_2D,0,0,0,_.width,_.height,B,X,_.data);else{Y.sort((rt,mt)=>rt.start-mt.start);let Pt=0;for(let rt=1;rt<Y.length;rt++){const mt=Y[Pt],Rt=Y[rt],It=mt.start+mt.count,pt=ae(Rt.start,_.width,4),Zt=ae(mt.start,_.width,4);Rt.start<=It+1&&pt===Zt&&ae(Rt.start+Rt.count-1,_.width,4)===pt?mt.count=Math.max(mt.count,Rt.start+Rt.count-mt.start):(++Pt,Y[Pt]=Rt)}Y.length=Pt+1;const dt=i.getParameter(i.UNPACK_ROW_LENGTH),Ct=i.getParameter(i.UNPACK_SKIP_PIXELS),Ht=i.getParameter(i.UNPACK_SKIP_ROWS);i.pixelStorei(i.UNPACK_ROW_LENGTH,_.width);for(let rt=0,mt=Y.length;rt<mt;rt++){const Rt=Y[rt],It=Math.floor(Rt.start/4),pt=Math.ceil(Rt.count/4),Zt=It%_.width,O=Math.floor(It/_.width),Mt=pt,ct=1;i.pixelStorei(i.UNPACK_SKIP_PIXELS,Zt),i.pixelStorei(i.UNPACK_SKIP_ROWS,O),e.texSubImage2D(i.TEXTURE_2D,0,Zt,O,Mt,ct,B,X,_.data)}R.clearUpdateRanges(),i.pixelStorei(i.UNPACK_ROW_LENGTH,dt),i.pixelStorei(i.UNPACK_SKIP_PIXELS,Ct),i.pixelStorei(i.UNPACK_SKIP_ROWS,Ht)}}function Z(R,_,B){let X=i.TEXTURE_2D;(_.isDataArrayTexture||_.isCompressedArrayTexture)&&(X=i.TEXTURE_2D_ARRAY),_.isData3DTexture&&(X=i.TEXTURE_3D);const j=zt(R,_),Y=_.source;e.bindTexture(X,R.__webglTexture,i.TEXTURE0+B);const Pt=n.get(Y);if(Y.version!==Pt.__version||j===!0){e.activeTexture(i.TEXTURE0+B);const dt=te.getPrimaries(te.workingColorSpace),Ct=_.colorSpace===vi?null:te.getPrimaries(_.colorSpace),Ht=_.colorSpace===vi||dt===Ct?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,_.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,_.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,_.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,Ht);let rt=x(_.image,!1,s.maxTextureSize);rt=Dt(_,rt);const mt=a.convert(_.format,_.colorSpace),Rt=a.convert(_.type);let It=w(_.internalFormat,mt,Rt,_.colorSpace,_.isVideoTexture);Gt(X,_);let pt;const Zt=_.mipmaps,O=_.isVideoTexture!==!0,Mt=Pt.__version===void 0||j===!0,ct=Y.dataReady,wt=A(_,rt);if(_.isDepthTexture)It=y(_.format===zi,_.type),Mt&&(O?e.texStorage2D(i.TEXTURE_2D,1,It,rt.width,rt.height):e.texImage2D(i.TEXTURE_2D,0,It,rt.width,rt.height,0,mt,Rt,null));else if(_.isDataTexture)if(Zt.length>0){O&&Mt&&e.texStorage2D(i.TEXTURE_2D,wt,It,Zt[0].width,Zt[0].height);for(let lt=0,Q=Zt.length;lt<Q;lt++)pt=Zt[lt],O?ct&&e.texSubImage2D(i.TEXTURE_2D,lt,0,0,pt.width,pt.height,mt,Rt,pt.data):e.texImage2D(i.TEXTURE_2D,lt,It,pt.width,pt.height,0,mt,Rt,pt.data);_.generateMipmaps=!1}else O?(Mt&&e.texStorage2D(i.TEXTURE_2D,wt,It,rt.width,rt.height),ct&&ne(_,rt,mt,Rt)):e.texImage2D(i.TEXTURE_2D,0,It,rt.width,rt.height,0,mt,Rt,rt.data);else if(_.isCompressedTexture)if(_.isCompressedArrayTexture){O&&Mt&&e.texStorage3D(i.TEXTURE_2D_ARRAY,wt,It,Zt[0].width,Zt[0].height,rt.depth);for(let lt=0,Q=Zt.length;lt<Q;lt++)if(pt=Zt[lt],_.format!==Un)if(mt!==null)if(O){if(ct)if(_.layerUpdates.size>0){const ft=Ic(pt.width,pt.height,_.format,_.type);for(const Xt of _.layerUpdates){const ge=pt.data.subarray(Xt*ft/pt.data.BYTES_PER_ELEMENT,(Xt+1)*ft/pt.data.BYTES_PER_ELEMENT);e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,lt,0,0,Xt,pt.width,pt.height,1,mt,ge)}_.clearLayerUpdates()}else e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,lt,0,0,0,pt.width,pt.height,rt.depth,mt,pt.data)}else e.compressedTexImage3D(i.TEXTURE_2D_ARRAY,lt,It,pt.width,pt.height,rt.depth,0,pt.data,0,0);else Ft("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else O?ct&&e.texSubImage3D(i.TEXTURE_2D_ARRAY,lt,0,0,0,pt.width,pt.height,rt.depth,mt,Rt,pt.data):e.texImage3D(i.TEXTURE_2D_ARRAY,lt,It,pt.width,pt.height,rt.depth,0,mt,Rt,pt.data)}else{O&&Mt&&e.texStorage2D(i.TEXTURE_2D,wt,It,Zt[0].width,Zt[0].height);for(let lt=0,Q=Zt.length;lt<Q;lt++)pt=Zt[lt],_.format!==Un?mt!==null?O?ct&&e.compressedTexSubImage2D(i.TEXTURE_2D,lt,0,0,pt.width,pt.height,mt,pt.data):e.compressedTexImage2D(i.TEXTURE_2D,lt,It,pt.width,pt.height,0,pt.data):Ft("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):O?ct&&e.texSubImage2D(i.TEXTURE_2D,lt,0,0,pt.width,pt.height,mt,Rt,pt.data):e.texImage2D(i.TEXTURE_2D,lt,It,pt.width,pt.height,0,mt,Rt,pt.data)}else if(_.isDataArrayTexture)if(O){if(Mt&&e.texStorage3D(i.TEXTURE_2D_ARRAY,wt,It,rt.width,rt.height,rt.depth),ct)if(_.layerUpdates.size>0){const lt=Ic(rt.width,rt.height,_.format,_.type);for(const Q of _.layerUpdates){const ft=rt.data.subarray(Q*lt/rt.data.BYTES_PER_ELEMENT,(Q+1)*lt/rt.data.BYTES_PER_ELEMENT);e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,Q,rt.width,rt.height,1,mt,Rt,ft)}_.clearLayerUpdates()}else e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,rt.width,rt.height,rt.depth,mt,Rt,rt.data)}else e.texImage3D(i.TEXTURE_2D_ARRAY,0,It,rt.width,rt.height,rt.depth,0,mt,Rt,rt.data);else if(_.isData3DTexture)O?(Mt&&e.texStorage3D(i.TEXTURE_3D,wt,It,rt.width,rt.height,rt.depth),ct&&e.texSubImage3D(i.TEXTURE_3D,0,0,0,0,rt.width,rt.height,rt.depth,mt,Rt,rt.data)):e.texImage3D(i.TEXTURE_3D,0,It,rt.width,rt.height,rt.depth,0,mt,Rt,rt.data);else if(_.isFramebufferTexture){if(Mt)if(O)e.texStorage2D(i.TEXTURE_2D,wt,It,rt.width,rt.height);else{let lt=rt.width,Q=rt.height;for(let ft=0;ft<wt;ft++)e.texImage2D(i.TEXTURE_2D,ft,It,lt,Q,0,mt,Rt,null),lt>>=1,Q>>=1}}else if(Zt.length>0){if(O&&Mt){const lt=ht(Zt[0]);e.texStorage2D(i.TEXTURE_2D,wt,It,lt.width,lt.height)}for(let lt=0,Q=Zt.length;lt<Q;lt++)pt=Zt[lt],O?ct&&e.texSubImage2D(i.TEXTURE_2D,lt,0,0,mt,Rt,pt):e.texImage2D(i.TEXTURE_2D,lt,It,mt,Rt,pt);_.generateMipmaps=!1}else if(O){if(Mt){const lt=ht(rt);e.texStorage2D(i.TEXTURE_2D,wt,It,lt.width,lt.height)}ct&&e.texSubImage2D(i.TEXTURE_2D,0,0,0,mt,Rt,rt)}else e.texImage2D(i.TEXTURE_2D,0,It,mt,Rt,rt);m(_)&&f(X),Pt.__version=Y.version,_.onUpdate&&_.onUpdate(_)}R.__version=_.version}function et(R,_,B){if(_.image.length!==6)return;const X=zt(R,_),j=_.source;e.bindTexture(i.TEXTURE_CUBE_MAP,R.__webglTexture,i.TEXTURE0+B);const Y=n.get(j);if(j.version!==Y.__version||X===!0){e.activeTexture(i.TEXTURE0+B);const Pt=te.getPrimaries(te.workingColorSpace),dt=_.colorSpace===vi?null:te.getPrimaries(_.colorSpace),Ct=_.colorSpace===vi||Pt===dt?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,_.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,_.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,_.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,Ct);const Ht=_.isCompressedTexture||_.image[0].isCompressedTexture,rt=_.image[0]&&_.image[0].isDataTexture,mt=[];for(let Q=0;Q<6;Q++)!Ht&&!rt?mt[Q]=x(_.image[Q],!0,s.maxCubemapSize):mt[Q]=rt?_.image[Q].image:_.image[Q],mt[Q]=Dt(_,mt[Q]);const Rt=mt[0],It=a.convert(_.format,_.colorSpace),pt=a.convert(_.type),Zt=w(_.internalFormat,It,pt,_.colorSpace),O=_.isVideoTexture!==!0,Mt=Y.__version===void 0||X===!0,ct=j.dataReady;let wt=A(_,Rt);Gt(i.TEXTURE_CUBE_MAP,_);let lt;if(Ht){O&&Mt&&e.texStorage2D(i.TEXTURE_CUBE_MAP,wt,Zt,Rt.width,Rt.height);for(let Q=0;Q<6;Q++){lt=mt[Q].mipmaps;for(let ft=0;ft<lt.length;ft++){const Xt=lt[ft];_.format!==Un?It!==null?O?ct&&e.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Q,ft,0,0,Xt.width,Xt.height,It,Xt.data):e.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Q,ft,Zt,Xt.width,Xt.height,0,Xt.data):Ft("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):O?ct&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Q,ft,0,0,Xt.width,Xt.height,It,pt,Xt.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Q,ft,Zt,Xt.width,Xt.height,0,It,pt,Xt.data)}}}else{if(lt=_.mipmaps,O&&Mt){lt.length>0&&wt++;const Q=ht(mt[0]);e.texStorage2D(i.TEXTURE_CUBE_MAP,wt,Zt,Q.width,Q.height)}for(let Q=0;Q<6;Q++)if(rt){O?ct&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Q,0,0,0,mt[Q].width,mt[Q].height,It,pt,mt[Q].data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Q,0,Zt,mt[Q].width,mt[Q].height,0,It,pt,mt[Q].data);for(let ft=0;ft<lt.length;ft++){const ge=lt[ft].image[Q].image;O?ct&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Q,ft+1,0,0,ge.width,ge.height,It,pt,ge.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Q,ft+1,Zt,ge.width,ge.height,0,It,pt,ge.data)}}else{O?ct&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Q,0,0,0,It,pt,mt[Q]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Q,0,Zt,It,pt,mt[Q]);for(let ft=0;ft<lt.length;ft++){const Xt=lt[ft];O?ct&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Q,ft+1,0,0,It,pt,Xt.image[Q]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Q,ft+1,Zt,It,pt,Xt.image[Q])}}}m(_)&&f(i.TEXTURE_CUBE_MAP),Y.__version=j.version,_.onUpdate&&_.onUpdate(_)}R.__version=_.version}function yt(R,_,B,X,j,Y){const Pt=a.convert(B.format,B.colorSpace),dt=a.convert(B.type),Ct=w(B.internalFormat,Pt,dt,B.colorSpace),Ht=n.get(_),rt=n.get(B);if(rt.__renderTarget=_,!Ht.__hasExternalTextures){const mt=Math.max(1,_.width>>Y),Rt=Math.max(1,_.height>>Y);j===i.TEXTURE_3D||j===i.TEXTURE_2D_ARRAY?e.texImage3D(j,Y,Ct,mt,Rt,_.depth,0,Pt,dt,null):e.texImage2D(j,Y,Ct,mt,Rt,0,Pt,dt,null)}e.bindFramebuffer(i.FRAMEBUFFER,R),bt(_)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,X,j,rt.__webglTexture,0,I(_)):(j===i.TEXTURE_2D||j>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&j<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,X,j,rt.__webglTexture,Y),e.bindFramebuffer(i.FRAMEBUFFER,null)}function Nt(R,_,B){if(i.bindRenderbuffer(i.RENDERBUFFER,R),_.depthBuffer){const X=_.depthTexture,j=X&&X.isDepthTexture?X.type:null,Y=y(_.stencilBuffer,j),Pt=_.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;bt(_)?o.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,I(_),Y,_.width,_.height):B?i.renderbufferStorageMultisample(i.RENDERBUFFER,I(_),Y,_.width,_.height):i.renderbufferStorage(i.RENDERBUFFER,Y,_.width,_.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,Pt,i.RENDERBUFFER,R)}else{const X=_.textures;for(let j=0;j<X.length;j++){const Y=X[j],Pt=a.convert(Y.format,Y.colorSpace),dt=a.convert(Y.type),Ct=w(Y.internalFormat,Pt,dt,Y.colorSpace);bt(_)?o.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,I(_),Ct,_.width,_.height):B?i.renderbufferStorageMultisample(i.RENDERBUFFER,I(_),Ct,_.width,_.height):i.renderbufferStorage(i.RENDERBUFFER,Ct,_.width,_.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function St(R,_,B){const X=_.isWebGLCubeRenderTarget===!0;if(e.bindFramebuffer(i.FRAMEBUFFER,R),!(_.depthTexture&&_.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const j=n.get(_.depthTexture);if(j.__renderTarget=_,(!j.__webglTexture||_.depthTexture.image.width!==_.width||_.depthTexture.image.height!==_.height)&&(_.depthTexture.image.width=_.width,_.depthTexture.image.height=_.height,_.depthTexture.needsUpdate=!0),X){if(j.__webglInit===void 0&&(j.__webglInit=!0,_.depthTexture.addEventListener("dispose",P)),j.__webglTexture===void 0){j.__webglTexture=i.createTexture(),e.bindTexture(i.TEXTURE_CUBE_MAP,j.__webglTexture),Gt(i.TEXTURE_CUBE_MAP,_.depthTexture);const Ht=a.convert(_.depthTexture.format),rt=a.convert(_.depthTexture.type);let mt;_.depthTexture.format===ci?mt=i.DEPTH_COMPONENT24:_.depthTexture.format===zi&&(mt=i.DEPTH24_STENCIL8);for(let Rt=0;Rt<6;Rt++)i.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Rt,0,mt,_.width,_.height,0,Ht,rt,null)}}else U(_.depthTexture,0);const Y=j.__webglTexture,Pt=I(_),dt=X?i.TEXTURE_CUBE_MAP_POSITIVE_X+B:i.TEXTURE_2D,Ct=_.depthTexture.format===zi?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;if(_.depthTexture.format===ci)bt(_)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,Ct,dt,Y,0,Pt):i.framebufferTexture2D(i.FRAMEBUFFER,Ct,dt,Y,0);else if(_.depthTexture.format===zi)bt(_)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,Ct,dt,Y,0,Pt):i.framebufferTexture2D(i.FRAMEBUFFER,Ct,dt,Y,0);else throw new Error("Unknown depthTexture format")}function Jt(R){const _=n.get(R),B=R.isWebGLCubeRenderTarget===!0;if(_.__boundDepthTexture!==R.depthTexture){const X=R.depthTexture;if(_.__depthDisposeCallback&&_.__depthDisposeCallback(),X){const j=()=>{delete _.__boundDepthTexture,delete _.__depthDisposeCallback,X.removeEventListener("dispose",j)};X.addEventListener("dispose",j),_.__depthDisposeCallback=j}_.__boundDepthTexture=X}if(R.depthTexture&&!_.__autoAllocateDepthBuffer)if(B)for(let X=0;X<6;X++)St(_.__webglFramebuffer[X],R,X);else{const X=R.texture.mipmaps;X&&X.length>0?St(_.__webglFramebuffer[0],R,0):St(_.__webglFramebuffer,R,0)}else if(B){_.__webglDepthbuffer=[];for(let X=0;X<6;X++)if(e.bindFramebuffer(i.FRAMEBUFFER,_.__webglFramebuffer[X]),_.__webglDepthbuffer[X]===void 0)_.__webglDepthbuffer[X]=i.createRenderbuffer(),Nt(_.__webglDepthbuffer[X],R,!1);else{const j=R.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,Y=_.__webglDepthbuffer[X];i.bindRenderbuffer(i.RENDERBUFFER,Y),i.framebufferRenderbuffer(i.FRAMEBUFFER,j,i.RENDERBUFFER,Y)}}else{const X=R.texture.mipmaps;if(X&&X.length>0?e.bindFramebuffer(i.FRAMEBUFFER,_.__webglFramebuffer[0]):e.bindFramebuffer(i.FRAMEBUFFER,_.__webglFramebuffer),_.__webglDepthbuffer===void 0)_.__webglDepthbuffer=i.createRenderbuffer(),Nt(_.__webglDepthbuffer,R,!1);else{const j=R.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,Y=_.__webglDepthbuffer;i.bindRenderbuffer(i.RENDERBUFFER,Y),i.framebufferRenderbuffer(i.FRAMEBUFFER,j,i.RENDERBUFFER,Y)}}e.bindFramebuffer(i.FRAMEBUFFER,null)}function re(R,_,B){const X=n.get(R);_!==void 0&&yt(X.__webglFramebuffer,R,R.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),B!==void 0&&Jt(R)}function Wt(R){const _=R.texture,B=n.get(R),X=n.get(_);R.addEventListener("dispose",T);const j=R.textures,Y=R.isWebGLCubeRenderTarget===!0,Pt=j.length>1;if(Pt||(X.__webglTexture===void 0&&(X.__webglTexture=i.createTexture()),X.__version=_.version,r.memory.textures++),Y){B.__webglFramebuffer=[];for(let dt=0;dt<6;dt++)if(_.mipmaps&&_.mipmaps.length>0){B.__webglFramebuffer[dt]=[];for(let Ct=0;Ct<_.mipmaps.length;Ct++)B.__webglFramebuffer[dt][Ct]=i.createFramebuffer()}else B.__webglFramebuffer[dt]=i.createFramebuffer()}else{if(_.mipmaps&&_.mipmaps.length>0){B.__webglFramebuffer=[];for(let dt=0;dt<_.mipmaps.length;dt++)B.__webglFramebuffer[dt]=i.createFramebuffer()}else B.__webglFramebuffer=i.createFramebuffer();if(Pt)for(let dt=0,Ct=j.length;dt<Ct;dt++){const Ht=n.get(j[dt]);Ht.__webglTexture===void 0&&(Ht.__webglTexture=i.createTexture(),r.memory.textures++)}if(R.samples>0&&bt(R)===!1){B.__webglMultisampledFramebuffer=i.createFramebuffer(),B.__webglColorRenderbuffer=[],e.bindFramebuffer(i.FRAMEBUFFER,B.__webglMultisampledFramebuffer);for(let dt=0;dt<j.length;dt++){const Ct=j[dt];B.__webglColorRenderbuffer[dt]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,B.__webglColorRenderbuffer[dt]);const Ht=a.convert(Ct.format,Ct.colorSpace),rt=a.convert(Ct.type),mt=w(Ct.internalFormat,Ht,rt,Ct.colorSpace,R.isXRRenderTarget===!0),Rt=I(R);i.renderbufferStorageMultisample(i.RENDERBUFFER,Rt,mt,R.width,R.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+dt,i.RENDERBUFFER,B.__webglColorRenderbuffer[dt])}i.bindRenderbuffer(i.RENDERBUFFER,null),R.depthBuffer&&(B.__webglDepthRenderbuffer=i.createRenderbuffer(),Nt(B.__webglDepthRenderbuffer,R,!0)),e.bindFramebuffer(i.FRAMEBUFFER,null)}}if(Y){e.bindTexture(i.TEXTURE_CUBE_MAP,X.__webglTexture),Gt(i.TEXTURE_CUBE_MAP,_);for(let dt=0;dt<6;dt++)if(_.mipmaps&&_.mipmaps.length>0)for(let Ct=0;Ct<_.mipmaps.length;Ct++)yt(B.__webglFramebuffer[dt][Ct],R,_,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+dt,Ct);else yt(B.__webglFramebuffer[dt],R,_,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+dt,0);m(_)&&f(i.TEXTURE_CUBE_MAP),e.unbindTexture()}else if(Pt){for(let dt=0,Ct=j.length;dt<Ct;dt++){const Ht=j[dt],rt=n.get(Ht);let mt=i.TEXTURE_2D;(R.isWebGL3DRenderTarget||R.isWebGLArrayRenderTarget)&&(mt=R.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),e.bindTexture(mt,rt.__webglTexture),Gt(mt,Ht),yt(B.__webglFramebuffer,R,Ht,i.COLOR_ATTACHMENT0+dt,mt,0),m(Ht)&&f(mt)}e.unbindTexture()}else{let dt=i.TEXTURE_2D;if((R.isWebGL3DRenderTarget||R.isWebGLArrayRenderTarget)&&(dt=R.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),e.bindTexture(dt,X.__webglTexture),Gt(dt,_),_.mipmaps&&_.mipmaps.length>0)for(let Ct=0;Ct<_.mipmaps.length;Ct++)yt(B.__webglFramebuffer[Ct],R,_,i.COLOR_ATTACHMENT0,dt,Ct);else yt(B.__webglFramebuffer,R,_,i.COLOR_ATTACHMENT0,dt,0);m(_)&&f(dt),e.unbindTexture()}R.depthBuffer&&Jt(R)}function $(R){const _=R.textures;for(let B=0,X=_.length;B<X;B++){const j=_[B];if(m(j)){const Y=b(R),Pt=n.get(j).__webglTexture;e.bindTexture(Y,Pt),f(Y),e.unbindTexture()}}}const st=[],J=[];function at(R){if(R.samples>0){if(bt(R)===!1){const _=R.textures,B=R.width,X=R.height;let j=i.COLOR_BUFFER_BIT;const Y=R.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,Pt=n.get(R),dt=_.length>1;if(dt)for(let Ht=0;Ht<_.length;Ht++)e.bindFramebuffer(i.FRAMEBUFFER,Pt.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Ht,i.RENDERBUFFER,null),e.bindFramebuffer(i.FRAMEBUFFER,Pt.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+Ht,i.TEXTURE_2D,null,0);e.bindFramebuffer(i.READ_FRAMEBUFFER,Pt.__webglMultisampledFramebuffer);const Ct=R.texture.mipmaps;Ct&&Ct.length>0?e.bindFramebuffer(i.DRAW_FRAMEBUFFER,Pt.__webglFramebuffer[0]):e.bindFramebuffer(i.DRAW_FRAMEBUFFER,Pt.__webglFramebuffer);for(let Ht=0;Ht<_.length;Ht++){if(R.resolveDepthBuffer&&(R.depthBuffer&&(j|=i.DEPTH_BUFFER_BIT),R.stencilBuffer&&R.resolveStencilBuffer&&(j|=i.STENCIL_BUFFER_BIT)),dt){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,Pt.__webglColorRenderbuffer[Ht]);const rt=n.get(_[Ht]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,rt,0)}i.blitFramebuffer(0,0,B,X,0,0,B,X,j,i.NEAREST),l===!0&&(st.length=0,J.length=0,st.push(i.COLOR_ATTACHMENT0+Ht),R.depthBuffer&&R.resolveDepthBuffer===!1&&(st.push(Y),J.push(Y),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,J)),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,st))}if(e.bindFramebuffer(i.READ_FRAMEBUFFER,null),e.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),dt)for(let Ht=0;Ht<_.length;Ht++){e.bindFramebuffer(i.FRAMEBUFFER,Pt.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Ht,i.RENDERBUFFER,Pt.__webglColorRenderbuffer[Ht]);const rt=n.get(_[Ht]).__webglTexture;e.bindFramebuffer(i.FRAMEBUFFER,Pt.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+Ht,i.TEXTURE_2D,rt,0)}e.bindFramebuffer(i.DRAW_FRAMEBUFFER,Pt.__webglMultisampledFramebuffer)}else if(R.depthBuffer&&R.resolveDepthBuffer===!1&&l){const _=R.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[_])}}}function I(R){return Math.min(s.maxSamples,R.samples)}function bt(R){const _=n.get(R);return R.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&_.__useRenderToTexture!==!1}function xt(R){const _=r.render.frame;h.get(R)!==_&&(h.set(R,_),R.update())}function Dt(R,_){const B=R.colorSpace,X=R.format,j=R.type;return R.isCompressedTexture===!0||R.isVideoTexture===!0||B!==ys&&B!==vi&&(te.getTransfer(B)===de?(X!==Un||j!==pn)&&Ft("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):Qt("WebGLTextures: Unsupported texture color space:",B)),_}function ht(R){return typeof HTMLImageElement<"u"&&R instanceof HTMLImageElement?(c.width=R.naturalWidth||R.width,c.height=R.naturalHeight||R.height):typeof VideoFrame<"u"&&R instanceof VideoFrame?(c.width=R.displayWidth,c.height=R.displayHeight):(c.width=R.width,c.height=R.height),c}this.allocateTextureUnit=L,this.resetTextureUnits=C,this.setTexture2D=U,this.setTexture2DArray=H,this.setTexture3D=k,this.setTextureCube=q,this.rebindTextures=re,this.setupRenderTarget=Wt,this.updateRenderTargetMipmap=$,this.updateMultisampleRenderTarget=at,this.setupDepthRenderbuffer=Jt,this.setupFrameBufferTexture=yt,this.useMultisampledRTT=bt,this.isReversedDepthBuffer=function(){return e.buffers.depth.getReversed()}}function Fx(i,t){function e(n,s=vi){let a;const r=te.getTransfer(s);if(n===pn)return i.UNSIGNED_BYTE;if(n===vl)return i.UNSIGNED_SHORT_4_4_4_4;if(n===Ml)return i.UNSIGNED_SHORT_5_5_5_1;if(n===wh)return i.UNSIGNED_INT_5_9_9_9_REV;if(n===bh)return i.UNSIGNED_INT_10F_11F_11F_REV;if(n===yh)return i.BYTE;if(n===Sh)return i.SHORT;if(n===Js)return i.UNSIGNED_SHORT;if(n===_l)return i.INT;if(n===qn)return i.UNSIGNED_INT;if(n===Nn)return i.FLOAT;if(n===li)return i.HALF_FLOAT;if(n===Eh)return i.ALPHA;if(n===Th)return i.RGB;if(n===Un)return i.RGBA;if(n===ci)return i.DEPTH_COMPONENT;if(n===zi)return i.DEPTH_STENCIL;if(n===yl)return i.RED;if(n===Sl)return i.RED_INTEGER;if(n===Ms)return i.RG;if(n===wl)return i.RG_INTEGER;if(n===bl)return i.RGBA_INTEGER;if(n===Ga||n===Va||n===Wa||n===Xa)if(r===de)if(a=t.get("WEBGL_compressed_texture_s3tc_srgb"),a!==null){if(n===Ga)return a.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===Va)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===Wa)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===Xa)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(a=t.get("WEBGL_compressed_texture_s3tc"),a!==null){if(n===Ga)return a.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===Va)return a.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===Wa)return a.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===Xa)return a.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===So||n===wo||n===bo||n===Eo)if(a=t.get("WEBGL_compressed_texture_pvrtc"),a!==null){if(n===So)return a.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===wo)return a.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===bo)return a.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===Eo)return a.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===To||n===Ao||n===Co||n===Ro||n===Po||n===Io||n===Lo)if(a=t.get("WEBGL_compressed_texture_etc"),a!==null){if(n===To||n===Ao)return r===de?a.COMPRESSED_SRGB8_ETC2:a.COMPRESSED_RGB8_ETC2;if(n===Co)return r===de?a.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:a.COMPRESSED_RGBA8_ETC2_EAC;if(n===Ro)return a.COMPRESSED_R11_EAC;if(n===Po)return a.COMPRESSED_SIGNED_R11_EAC;if(n===Io)return a.COMPRESSED_RG11_EAC;if(n===Lo)return a.COMPRESSED_SIGNED_RG11_EAC}else return null;if(n===Do||n===Fo||n===No||n===Uo||n===Oo||n===Bo||n===ko||n===zo||n===Ho||n===Go||n===Vo||n===Wo||n===Xo||n===Yo)if(a=t.get("WEBGL_compressed_texture_astc"),a!==null){if(n===Do)return r===de?a.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:a.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===Fo)return r===de?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:a.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===No)return r===de?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:a.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===Uo)return r===de?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:a.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===Oo)return r===de?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:a.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===Bo)return r===de?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:a.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===ko)return r===de?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:a.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===zo)return r===de?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:a.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===Ho)return r===de?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:a.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===Go)return r===de?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:a.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===Vo)return r===de?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:a.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===Wo)return r===de?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:a.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===Xo)return r===de?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:a.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===Yo)return r===de?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:a.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===qo||n===Zo||n===$o)if(a=t.get("EXT_texture_compression_bptc"),a!==null){if(n===qo)return r===de?a.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:a.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===Zo)return a.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===$o)return a.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===Ko||n===Jo||n===jo||n===Qo)if(a=t.get("EXT_texture_compression_rgtc"),a!==null){if(n===Ko)return a.COMPRESSED_RED_RGTC1_EXT;if(n===Jo)return a.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===jo)return a.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===Qo)return a.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===js?i.UNSIGNED_INT_24_8:i[n]!==void 0?i[n]:null}return{convert:e}}const Nx=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,Ux=`
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

}`;class Ox{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e){if(this.texture===null){const n=new zh(t.texture);(t.depthNear!==e.depthNear||t.depthFar!==e.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=n}}getMesh(t){if(this.texture!==null&&this.mesh===null){const e=t.cameras[0].viewport,n=new Tn({vertexShader:Nx,fragmentShader:Ux,uniforms:{depthColor:{value:this.texture},depthWidth:{value:e.z},depthHeight:{value:e.w}}});this.mesh=new nt(new Ts(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class Bx extends Es{constructor(t,e){super();const n=this;let s=null,a=1,r=null,o="local-floor",l=1,c=null,h=null,u=null,d=null,p=null,g=null;const x=typeof XRWebGLBinding<"u",m=new Ox,f={},b=e.getContextAttributes();let w=null,y=null;const A=[],P=[],T=new ut;let D=null;const M=new yn;M.viewport=new Ee;const S=new yn;S.viewport=new Ee;const v=[M,S],C=new Yf;let L=null,N=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(Z){let et=A[Z];return et===void 0&&(et=new zr,A[Z]=et),et.getTargetRaySpace()},this.getControllerGrip=function(Z){let et=A[Z];return et===void 0&&(et=new zr,A[Z]=et),et.getGripSpace()},this.getHand=function(Z){let et=A[Z];return et===void 0&&(et=new zr,A[Z]=et),et.getHandSpace()};function U(Z){const et=P.indexOf(Z.inputSource);if(et===-1)return;const yt=A[et];yt!==void 0&&(yt.update(Z.inputSource,Z.frame,c||r),yt.dispatchEvent({type:Z.type,data:Z.inputSource}))}function H(){s.removeEventListener("select",U),s.removeEventListener("selectstart",U),s.removeEventListener("selectend",U),s.removeEventListener("squeeze",U),s.removeEventListener("squeezestart",U),s.removeEventListener("squeezeend",U),s.removeEventListener("end",H),s.removeEventListener("inputsourceschange",k);for(let Z=0;Z<A.length;Z++){const et=P[Z];et!==null&&(P[Z]=null,A[Z].disconnect(et))}L=null,N=null,m.reset();for(const Z in f)delete f[Z];t.setRenderTarget(w),p=null,d=null,u=null,s=null,y=null,ne.stop(),n.isPresenting=!1,t.setPixelRatio(D),t.setSize(T.width,T.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(Z){a=Z,n.isPresenting===!0&&Ft("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(Z){o=Z,n.isPresenting===!0&&Ft("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||r},this.setReferenceSpace=function(Z){c=Z},this.getBaseLayer=function(){return d!==null?d:p},this.getBinding=function(){return u===null&&x&&(u=new XRWebGLBinding(s,e)),u},this.getFrame=function(){return g},this.getSession=function(){return s},this.setSession=async function(Z){if(s=Z,s!==null){if(w=t.getRenderTarget(),s.addEventListener("select",U),s.addEventListener("selectstart",U),s.addEventListener("selectend",U),s.addEventListener("squeeze",U),s.addEventListener("squeezestart",U),s.addEventListener("squeezeend",U),s.addEventListener("end",H),s.addEventListener("inputsourceschange",k),b.xrCompatible!==!0&&await e.makeXRCompatible(),D=t.getPixelRatio(),t.getSize(T),x&&"createProjectionLayer"in XRWebGLBinding.prototype){let yt=null,Nt=null,St=null;b.depth&&(St=b.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,yt=b.stencil?zi:ci,Nt=b.stencil?js:qn);const Jt={colorFormat:e.RGBA8,depthFormat:St,scaleFactor:a};u=this.getBinding(),d=u.createProjectionLayer(Jt),s.updateRenderState({layers:[d]}),t.setPixelRatio(1),t.setSize(d.textureWidth,d.textureHeight,!1),y=new Yn(d.textureWidth,d.textureHeight,{format:Un,type:pn,depthTexture:new ea(d.textureWidth,d.textureHeight,Nt,void 0,void 0,void 0,void 0,void 0,void 0,yt),stencilBuffer:b.stencil,colorSpace:t.outputColorSpace,samples:b.antialias?4:0,resolveDepthBuffer:d.ignoreDepthValues===!1,resolveStencilBuffer:d.ignoreDepthValues===!1})}else{const yt={antialias:b.antialias,alpha:!0,depth:b.depth,stencil:b.stencil,framebufferScaleFactor:a};p=new XRWebGLLayer(s,e,yt),s.updateRenderState({baseLayer:p}),t.setPixelRatio(1),t.setSize(p.framebufferWidth,p.framebufferHeight,!1),y=new Yn(p.framebufferWidth,p.framebufferHeight,{format:Un,type:pn,colorSpace:t.outputColorSpace,stencilBuffer:b.stencil,resolveDepthBuffer:p.ignoreDepthValues===!1,resolveStencilBuffer:p.ignoreDepthValues===!1})}y.isXRRenderTarget=!0,this.setFoveation(l),c=null,r=await s.requestReferenceSpace(o),ne.setContext(s),ne.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return m.getDepthTexture()};function k(Z){for(let et=0;et<Z.removed.length;et++){const yt=Z.removed[et],Nt=P.indexOf(yt);Nt>=0&&(P[Nt]=null,A[Nt].disconnect(yt))}for(let et=0;et<Z.added.length;et++){const yt=Z.added[et];let Nt=P.indexOf(yt);if(Nt===-1){for(let Jt=0;Jt<A.length;Jt++)if(Jt>=P.length){P.push(yt),Nt=Jt;break}else if(P[Jt]===null){P[Jt]=yt,Nt=Jt;break}if(Nt===-1)break}const St=A[Nt];St&&St.connect(yt)}}const q=new F,ot=new F;function tt(Z,et,yt){q.setFromMatrixPosition(et.matrixWorld),ot.setFromMatrixPosition(yt.matrixWorld);const Nt=q.distanceTo(ot),St=et.projectionMatrix.elements,Jt=yt.projectionMatrix.elements,re=St[14]/(St[10]-1),Wt=St[14]/(St[10]+1),$=(St[9]+1)/St[5],st=(St[9]-1)/St[5],J=(St[8]-1)/St[0],at=(Jt[8]+1)/Jt[0],I=re*J,bt=re*at,xt=Nt/(-J+at),Dt=xt*-J;if(et.matrixWorld.decompose(Z.position,Z.quaternion,Z.scale),Z.translateX(Dt),Z.translateZ(xt),Z.matrixWorld.compose(Z.position,Z.quaternion,Z.scale),Z.matrixWorldInverse.copy(Z.matrixWorld).invert(),St[10]===-1)Z.projectionMatrix.copy(et.projectionMatrix),Z.projectionMatrixInverse.copy(et.projectionMatrixInverse);else{const ht=re+xt,R=Wt+xt,_=I-Dt,B=bt+(Nt-Dt),X=$*Wt/R*ht,j=st*Wt/R*ht;Z.projectionMatrix.makePerspective(_,B,X,j,ht,R),Z.projectionMatrixInverse.copy(Z.projectionMatrix).invert()}}function it(Z,et){et===null?Z.matrixWorld.copy(Z.matrix):Z.matrixWorld.multiplyMatrices(et.matrixWorld,Z.matrix),Z.matrixWorldInverse.copy(Z.matrixWorld).invert()}this.updateCamera=function(Z){if(s===null)return;let et=Z.near,yt=Z.far;m.texture!==null&&(m.depthNear>0&&(et=m.depthNear),m.depthFar>0&&(yt=m.depthFar)),C.near=S.near=M.near=et,C.far=S.far=M.far=yt,(L!==C.near||N!==C.far)&&(s.updateRenderState({depthNear:C.near,depthFar:C.far}),L=C.near,N=C.far),C.layers.mask=Z.layers.mask|6,M.layers.mask=C.layers.mask&3,S.layers.mask=C.layers.mask&5;const Nt=Z.parent,St=C.cameras;it(C,Nt);for(let Jt=0;Jt<St.length;Jt++)it(St[Jt],Nt);St.length===2?tt(C,M,S):C.projectionMatrix.copy(M.projectionMatrix),Gt(Z,C,Nt)};function Gt(Z,et,yt){yt===null?Z.matrix.copy(et.matrixWorld):(Z.matrix.copy(yt.matrixWorld),Z.matrix.invert(),Z.matrix.multiply(et.matrixWorld)),Z.matrix.decompose(Z.position,Z.quaternion,Z.scale),Z.updateMatrixWorld(!0),Z.projectionMatrix.copy(et.projectionMatrix),Z.projectionMatrixInverse.copy(et.projectionMatrixInverse),Z.isPerspectiveCamera&&(Z.fov=ta*2*Math.atan(1/Z.projectionMatrix.elements[5]),Z.zoom=1)}this.getCamera=function(){return C},this.getFoveation=function(){if(!(d===null&&p===null))return l},this.setFoveation=function(Z){l=Z,d!==null&&(d.fixedFoveation=Z),p!==null&&p.fixedFoveation!==void 0&&(p.fixedFoveation=Z)},this.hasDepthSensing=function(){return m.texture!==null},this.getDepthSensingMesh=function(){return m.getMesh(C)},this.getCameraTexture=function(Z){return f[Z]};let zt=null;function ae(Z,et){if(h=et.getViewerPose(c||r),g=et,h!==null){const yt=h.views;p!==null&&(t.setRenderTargetFramebuffer(y,p.framebuffer),t.setRenderTarget(y));let Nt=!1;yt.length!==C.cameras.length&&(C.cameras.length=0,Nt=!0);for(let Wt=0;Wt<yt.length;Wt++){const $=yt[Wt];let st=null;if(p!==null)st=p.getViewport($);else{const at=u.getViewSubImage(d,$);st=at.viewport,Wt===0&&(t.setRenderTargetTextures(y,at.colorTexture,at.depthStencilTexture),t.setRenderTarget(y))}let J=v[Wt];J===void 0&&(J=new yn,J.layers.enable(Wt),J.viewport=new Ee,v[Wt]=J),J.matrix.fromArray($.transform.matrix),J.matrix.decompose(J.position,J.quaternion,J.scale),J.projectionMatrix.fromArray($.projectionMatrix),J.projectionMatrixInverse.copy(J.projectionMatrix).invert(),J.viewport.set(st.x,st.y,st.width,st.height),Wt===0&&(C.matrix.copy(J.matrix),C.matrix.decompose(C.position,C.quaternion,C.scale)),Nt===!0&&C.cameras.push(J)}const St=s.enabledFeatures;if(St&&St.includes("depth-sensing")&&s.depthUsage=="gpu-optimized"&&x){u=n.getBinding();const Wt=u.getDepthInformation(yt[0]);Wt&&Wt.isValid&&Wt.texture&&m.init(Wt,s.renderState)}if(St&&St.includes("camera-access")&&x){t.state.unbindTexture(),u=n.getBinding();for(let Wt=0;Wt<yt.length;Wt++){const $=yt[Wt].camera;if($){let st=f[$];st||(st=new zh,f[$]=st);const J=u.getCameraImage($);st.sourceTexture=J}}}}for(let yt=0;yt<A.length;yt++){const Nt=P[yt],St=A[yt];Nt!==null&&St!==void 0&&St.update(Nt,et,c||r)}zt&&zt(Z,et),et.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:et}),g=null}const ne=new jh;ne.setAnimationLoop(ae),this.setAnimationLoop=function(Z){zt=Z},this.dispose=function(){}}}const Ni=new Be,kx=new jt;function zx(i,t){function e(m,f){m.matrixAutoUpdate===!0&&m.updateMatrix(),f.value.copy(m.matrix)}function n(m,f){f.color.getRGB(m.fogColor.value,Dh(i)),f.isFog?(m.fogNear.value=f.near,m.fogFar.value=f.far):f.isFogExp2&&(m.fogDensity.value=f.density)}function s(m,f,b,w,y){f.isMeshBasicMaterial||f.isMeshLambertMaterial?a(m,f):f.isMeshToonMaterial?(a(m,f),u(m,f)):f.isMeshPhongMaterial?(a(m,f),h(m,f)):f.isMeshStandardMaterial?(a(m,f),d(m,f),f.isMeshPhysicalMaterial&&p(m,f,y)):f.isMeshMatcapMaterial?(a(m,f),g(m,f)):f.isMeshDepthMaterial?a(m,f):f.isMeshDistanceMaterial?(a(m,f),x(m,f)):f.isMeshNormalMaterial?a(m,f):f.isLineBasicMaterial?(r(m,f),f.isLineDashedMaterial&&o(m,f)):f.isPointsMaterial?l(m,f,b,w):f.isSpriteMaterial?c(m,f):f.isShadowMaterial?(m.color.value.copy(f.color),m.opacity.value=f.opacity):f.isShaderMaterial&&(f.uniformsNeedUpdate=!1)}function a(m,f){m.opacity.value=f.opacity,f.color&&m.diffuse.value.copy(f.color),f.emissive&&m.emissive.value.copy(f.emissive).multiplyScalar(f.emissiveIntensity),f.map&&(m.map.value=f.map,e(f.map,m.mapTransform)),f.alphaMap&&(m.alphaMap.value=f.alphaMap,e(f.alphaMap,m.alphaMapTransform)),f.bumpMap&&(m.bumpMap.value=f.bumpMap,e(f.bumpMap,m.bumpMapTransform),m.bumpScale.value=f.bumpScale,f.side===rn&&(m.bumpScale.value*=-1)),f.normalMap&&(m.normalMap.value=f.normalMap,e(f.normalMap,m.normalMapTransform),m.normalScale.value.copy(f.normalScale),f.side===rn&&m.normalScale.value.negate()),f.displacementMap&&(m.displacementMap.value=f.displacementMap,e(f.displacementMap,m.displacementMapTransform),m.displacementScale.value=f.displacementScale,m.displacementBias.value=f.displacementBias),f.emissiveMap&&(m.emissiveMap.value=f.emissiveMap,e(f.emissiveMap,m.emissiveMapTransform)),f.specularMap&&(m.specularMap.value=f.specularMap,e(f.specularMap,m.specularMapTransform)),f.alphaTest>0&&(m.alphaTest.value=f.alphaTest);const b=t.get(f),w=b.envMap,y=b.envMapRotation;w&&(m.envMap.value=w,Ni.copy(y),Ni.x*=-1,Ni.y*=-1,Ni.z*=-1,w.isCubeTexture&&w.isRenderTargetTexture===!1&&(Ni.y*=-1,Ni.z*=-1),m.envMapRotation.value.setFromMatrix4(kx.makeRotationFromEuler(Ni)),m.flipEnvMap.value=w.isCubeTexture&&w.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=f.reflectivity,m.ior.value=f.ior,m.refractionRatio.value=f.refractionRatio),f.lightMap&&(m.lightMap.value=f.lightMap,m.lightMapIntensity.value=f.lightMapIntensity,e(f.lightMap,m.lightMapTransform)),f.aoMap&&(m.aoMap.value=f.aoMap,m.aoMapIntensity.value=f.aoMapIntensity,e(f.aoMap,m.aoMapTransform))}function r(m,f){m.diffuse.value.copy(f.color),m.opacity.value=f.opacity,f.map&&(m.map.value=f.map,e(f.map,m.mapTransform))}function o(m,f){m.dashSize.value=f.dashSize,m.totalSize.value=f.dashSize+f.gapSize,m.scale.value=f.scale}function l(m,f,b,w){m.diffuse.value.copy(f.color),m.opacity.value=f.opacity,m.size.value=f.size*b,m.scale.value=w*.5,f.map&&(m.map.value=f.map,e(f.map,m.uvTransform)),f.alphaMap&&(m.alphaMap.value=f.alphaMap,e(f.alphaMap,m.alphaMapTransform)),f.alphaTest>0&&(m.alphaTest.value=f.alphaTest)}function c(m,f){m.diffuse.value.copy(f.color),m.opacity.value=f.opacity,m.rotation.value=f.rotation,f.map&&(m.map.value=f.map,e(f.map,m.mapTransform)),f.alphaMap&&(m.alphaMap.value=f.alphaMap,e(f.alphaMap,m.alphaMapTransform)),f.alphaTest>0&&(m.alphaTest.value=f.alphaTest)}function h(m,f){m.specular.value.copy(f.specular),m.shininess.value=Math.max(f.shininess,1e-4)}function u(m,f){f.gradientMap&&(m.gradientMap.value=f.gradientMap)}function d(m,f){m.metalness.value=f.metalness,f.metalnessMap&&(m.metalnessMap.value=f.metalnessMap,e(f.metalnessMap,m.metalnessMapTransform)),m.roughness.value=f.roughness,f.roughnessMap&&(m.roughnessMap.value=f.roughnessMap,e(f.roughnessMap,m.roughnessMapTransform)),f.envMap&&(m.envMapIntensity.value=f.envMapIntensity)}function p(m,f,b){m.ior.value=f.ior,f.sheen>0&&(m.sheenColor.value.copy(f.sheenColor).multiplyScalar(f.sheen),m.sheenRoughness.value=f.sheenRoughness,f.sheenColorMap&&(m.sheenColorMap.value=f.sheenColorMap,e(f.sheenColorMap,m.sheenColorMapTransform)),f.sheenRoughnessMap&&(m.sheenRoughnessMap.value=f.sheenRoughnessMap,e(f.sheenRoughnessMap,m.sheenRoughnessMapTransform))),f.clearcoat>0&&(m.clearcoat.value=f.clearcoat,m.clearcoatRoughness.value=f.clearcoatRoughness,f.clearcoatMap&&(m.clearcoatMap.value=f.clearcoatMap,e(f.clearcoatMap,m.clearcoatMapTransform)),f.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=f.clearcoatRoughnessMap,e(f.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),f.clearcoatNormalMap&&(m.clearcoatNormalMap.value=f.clearcoatNormalMap,e(f.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(f.clearcoatNormalScale),f.side===rn&&m.clearcoatNormalScale.value.negate())),f.dispersion>0&&(m.dispersion.value=f.dispersion),f.iridescence>0&&(m.iridescence.value=f.iridescence,m.iridescenceIOR.value=f.iridescenceIOR,m.iridescenceThicknessMinimum.value=f.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=f.iridescenceThicknessRange[1],f.iridescenceMap&&(m.iridescenceMap.value=f.iridescenceMap,e(f.iridescenceMap,m.iridescenceMapTransform)),f.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=f.iridescenceThicknessMap,e(f.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),f.transmission>0&&(m.transmission.value=f.transmission,m.transmissionSamplerMap.value=b.texture,m.transmissionSamplerSize.value.set(b.width,b.height),f.transmissionMap&&(m.transmissionMap.value=f.transmissionMap,e(f.transmissionMap,m.transmissionMapTransform)),m.thickness.value=f.thickness,f.thicknessMap&&(m.thicknessMap.value=f.thicknessMap,e(f.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=f.attenuationDistance,m.attenuationColor.value.copy(f.attenuationColor)),f.anisotropy>0&&(m.anisotropyVector.value.set(f.anisotropy*Math.cos(f.anisotropyRotation),f.anisotropy*Math.sin(f.anisotropyRotation)),f.anisotropyMap&&(m.anisotropyMap.value=f.anisotropyMap,e(f.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=f.specularIntensity,m.specularColor.value.copy(f.specularColor),f.specularColorMap&&(m.specularColorMap.value=f.specularColorMap,e(f.specularColorMap,m.specularColorMapTransform)),f.specularIntensityMap&&(m.specularIntensityMap.value=f.specularIntensityMap,e(f.specularIntensityMap,m.specularIntensityMapTransform))}function g(m,f){f.matcap&&(m.matcap.value=f.matcap)}function x(m,f){const b=t.get(f).light;m.referencePosition.value.setFromMatrixPosition(b.matrixWorld),m.nearDistance.value=b.shadow.camera.near,m.farDistance.value=b.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:s}}function Hx(i,t,e,n){let s={},a={},r=[];const o=i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS);function l(b,w){const y=w.program;n.uniformBlockBinding(b,y)}function c(b,w){let y=s[b.id];y===void 0&&(g(b),y=h(b),s[b.id]=y,b.addEventListener("dispose",m));const A=w.program;n.updateUBOMapping(b,A);const P=t.render.frame;a[b.id]!==P&&(d(b),a[b.id]=P)}function h(b){const w=u();b.__bindingPointIndex=w;const y=i.createBuffer(),A=b.__size,P=b.usage;return i.bindBuffer(i.UNIFORM_BUFFER,y),i.bufferData(i.UNIFORM_BUFFER,A,P),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,w,y),y}function u(){for(let b=0;b<o;b++)if(r.indexOf(b)===-1)return r.push(b),b;return Qt("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function d(b){const w=s[b.id],y=b.uniforms,A=b.__cache;i.bindBuffer(i.UNIFORM_BUFFER,w);for(let P=0,T=y.length;P<T;P++){const D=Array.isArray(y[P])?y[P]:[y[P]];for(let M=0,S=D.length;M<S;M++){const v=D[M];if(p(v,P,M,A)===!0){const C=v.__offset,L=Array.isArray(v.value)?v.value:[v.value];let N=0;for(let U=0;U<L.length;U++){const H=L[U],k=x(H);typeof H=="number"||typeof H=="boolean"?(v.__data[0]=H,i.bufferSubData(i.UNIFORM_BUFFER,C+N,v.__data)):H.isMatrix3?(v.__data[0]=H.elements[0],v.__data[1]=H.elements[1],v.__data[2]=H.elements[2],v.__data[3]=0,v.__data[4]=H.elements[3],v.__data[5]=H.elements[4],v.__data[6]=H.elements[5],v.__data[7]=0,v.__data[8]=H.elements[6],v.__data[9]=H.elements[7],v.__data[10]=H.elements[8],v.__data[11]=0):(H.toArray(v.__data,N),N+=k.storage/Float32Array.BYTES_PER_ELEMENT)}i.bufferSubData(i.UNIFORM_BUFFER,C,v.__data)}}}i.bindBuffer(i.UNIFORM_BUFFER,null)}function p(b,w,y,A){const P=b.value,T=w+"_"+y;if(A[T]===void 0)return typeof P=="number"||typeof P=="boolean"?A[T]=P:A[T]=P.clone(),!0;{const D=A[T];if(typeof P=="number"||typeof P=="boolean"){if(D!==P)return A[T]=P,!0}else if(D.equals(P)===!1)return D.copy(P),!0}return!1}function g(b){const w=b.uniforms;let y=0;const A=16;for(let T=0,D=w.length;T<D;T++){const M=Array.isArray(w[T])?w[T]:[w[T]];for(let S=0,v=M.length;S<v;S++){const C=M[S],L=Array.isArray(C.value)?C.value:[C.value];for(let N=0,U=L.length;N<U;N++){const H=L[N],k=x(H),q=y%A,ot=q%k.boundary,tt=q+ot;y+=ot,tt!==0&&A-tt<k.storage&&(y+=A-tt),C.__data=new Float32Array(k.storage/Float32Array.BYTES_PER_ELEMENT),C.__offset=y,y+=k.storage}}}const P=y%A;return P>0&&(y+=A-P),b.__size=y,b.__cache={},this}function x(b){const w={boundary:0,storage:0};return typeof b=="number"||typeof b=="boolean"?(w.boundary=4,w.storage=4):b.isVector2?(w.boundary=8,w.storage=8):b.isVector3||b.isColor?(w.boundary=16,w.storage=12):b.isVector4?(w.boundary=16,w.storage=16):b.isMatrix3?(w.boundary=48,w.storage=48):b.isMatrix4?(w.boundary=64,w.storage=64):b.isTexture?Ft("WebGLRenderer: Texture samplers can not be part of an uniforms group."):Ft("WebGLRenderer: Unsupported uniform value type.",b),w}function m(b){const w=b.target;w.removeEventListener("dispose",m);const y=r.indexOf(w.__bindingPointIndex);r.splice(y,1),i.deleteBuffer(s[w.id]),delete s[w.id],delete a[w.id]}function f(){for(const b in s)i.deleteBuffer(s[b]);r=[],s={},a={}}return{bind:l,update:c,dispose:f}}const Gx=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]);let Bn=null;function Vx(){return Bn===null&&(Bn=new Bh(Gx,16,16,Ms,li),Bn.name="DFG_LUT",Bn.minFilter=Ge,Bn.magFilter=Ge,Bn.wrapS=ni,Bn.wrapT=ni,Bn.generateMipmaps=!1,Bn.needsUpdate=!0),Bn}class Wx{constructor(t={}){const{canvas:e=sd(),context:n=null,depth:s=!0,stencil:a=!1,alpha:r=!1,antialias:o=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:u=!1,reversedDepthBuffer:d=!1,outputBufferType:p=pn}=t;this.isWebGLRenderer=!0;let g;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");g=n.getContextAttributes().alpha}else g=r;const x=p,m=new Set([bl,wl,Sl]),f=new Set([pn,qn,Js,js,vl,Ml]),b=new Uint32Array(4),w=new Int32Array(4);let y=null,A=null;const P=[],T=[];let D=null;this.domElement=e,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=Wn,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const M=this;let S=!1;this._outputColorSpace=_n;let v=0,C=0,L=null,N=-1,U=null;const H=new Ee,k=new Ee;let q=null;const ot=new Ot(0);let tt=0,it=e.width,Gt=e.height,zt=1,ae=null,ne=null;const Z=new Ee(0,0,it,Gt),et=new Ee(0,0,it,Gt);let yt=!1;const Nt=new Rl;let St=!1,Jt=!1;const re=new jt,Wt=new F,$=new Ee,st={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let J=!1;function at(){return L===null?zt:1}let I=n;function bt(E,z){return e.getContext(E,z)}try{const E={alpha:!0,depth:s,stencil:a,antialias:o,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:h,failIfMajorPerformanceCaveat:u};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${xl}`),e.addEventListener("webglcontextlost",Xt,!1),e.addEventListener("webglcontextrestored",ge,!1),e.addEventListener("webglcontextcreationerror",he,!1),I===null){const z="webgl2";if(I=bt(z,E),I===null)throw bt(z)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(E){throw Qt("WebGLRenderer: "+E.message),E}let xt,Dt,ht,R,_,B,X,j,Y,Pt,dt,Ct,Ht,rt,mt,Rt,It,pt,Zt,O,Mt,ct,wt,lt;function Q(){xt=new V0(I),xt.init(),ct=new Fx(I,xt),Dt=new F0(I,xt,t,ct),ht=new Lx(I,xt),Dt.reversedDepthBuffer&&d&&ht.buffers.depth.setReversed(!0),R=new Y0(I),_=new xx,B=new Dx(I,xt,ht,_,Dt,ct,R),X=new U0(M),j=new G0(M),Y=new Kf(I),wt=new L0(I,Y),Pt=new W0(I,Y,R,wt),dt=new Z0(I,Pt,Y,R),Zt=new q0(I,Dt,B),Rt=new N0(_),Ct=new gx(M,X,j,xt,Dt,wt,Rt),Ht=new zx(M,_),rt=new vx,mt=new Ex(xt),pt=new I0(M,X,j,ht,dt,g,l),It=new Px(M,dt,Dt),lt=new Hx(I,R,Dt,ht),O=new D0(I,xt,R),Mt=new X0(I,xt,R),R.programs=Ct.programs,M.capabilities=Dt,M.extensions=xt,M.properties=_,M.renderLists=rt,M.shadowMap=It,M.state=ht,M.info=R}Q(),x!==pn&&(D=new K0(x,e.width,e.height,s,a));const ft=new Bx(M,I);this.xr=ft,this.getContext=function(){return I},this.getContextAttributes=function(){return I.getContextAttributes()},this.forceContextLoss=function(){const E=xt.get("WEBGL_lose_context");E&&E.loseContext()},this.forceContextRestore=function(){const E=xt.get("WEBGL_lose_context");E&&E.restoreContext()},this.getPixelRatio=function(){return zt},this.setPixelRatio=function(E){E!==void 0&&(zt=E,this.setSize(it,Gt,!1))},this.getSize=function(E){return E.set(it,Gt)},this.setSize=function(E,z,W=!0){if(ft.isPresenting){Ft("WebGLRenderer: Can't change size while VR device is presenting.");return}it=E,Gt=z,e.width=Math.floor(E*zt),e.height=Math.floor(z*zt),W===!0&&(e.style.width=E+"px",e.style.height=z+"px"),D!==null&&D.setSize(e.width,e.height),this.setViewport(0,0,E,z)},this.getDrawingBufferSize=function(E){return E.set(it*zt,Gt*zt).floor()},this.setDrawingBufferSize=function(E,z,W){it=E,Gt=z,zt=W,e.width=Math.floor(E*W),e.height=Math.floor(z*W),this.setViewport(0,0,E,z)},this.setEffects=function(E){if(x===pn){console.error("THREE.WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(E){for(let z=0;z<E.length;z++)if(E[z].isOutputPass===!0){console.warn("THREE.WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}D.setEffects(E||[])},this.getCurrentViewport=function(E){return E.copy(H)},this.getViewport=function(E){return E.copy(Z)},this.setViewport=function(E,z,W,V){E.isVector4?Z.set(E.x,E.y,E.z,E.w):Z.set(E,z,W,V),ht.viewport(H.copy(Z).multiplyScalar(zt).round())},this.getScissor=function(E){return E.copy(et)},this.setScissor=function(E,z,W,V){E.isVector4?et.set(E.x,E.y,E.z,E.w):et.set(E,z,W,V),ht.scissor(k.copy(et).multiplyScalar(zt).round())},this.getScissorTest=function(){return yt},this.setScissorTest=function(E){ht.setScissorTest(yt=E)},this.setOpaqueSort=function(E){ae=E},this.setTransparentSort=function(E){ne=E},this.getClearColor=function(E){return E.copy(pt.getClearColor())},this.setClearColor=function(){pt.setClearColor(...arguments)},this.getClearAlpha=function(){return pt.getClearAlpha()},this.setClearAlpha=function(){pt.setClearAlpha(...arguments)},this.clear=function(E=!0,z=!0,W=!0){let V=0;if(E){let G=!1;if(L!==null){const gt=L.texture.format;G=m.has(gt)}if(G){const gt=L.texture.type,Et=f.has(gt),vt=pt.getClearColor(),At=pt.getClearAlpha(),Lt=vt.r,Vt=vt.g,Bt=vt.b;Et?(b[0]=Lt,b[1]=Vt,b[2]=Bt,b[3]=At,I.clearBufferuiv(I.COLOR,0,b)):(w[0]=Lt,w[1]=Vt,w[2]=Bt,w[3]=At,I.clearBufferiv(I.COLOR,0,w))}else V|=I.COLOR_BUFFER_BIT}z&&(V|=I.DEPTH_BUFFER_BIT),W&&(V|=I.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),I.clear(V)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){e.removeEventListener("webglcontextlost",Xt,!1),e.removeEventListener("webglcontextrestored",ge,!1),e.removeEventListener("webglcontextcreationerror",he,!1),pt.dispose(),rt.dispose(),mt.dispose(),_.dispose(),X.dispose(),j.dispose(),dt.dispose(),wt.dispose(),lt.dispose(),Ct.dispose(),ft.dispose(),ft.removeEventListener("sessionstart",Hl),ft.removeEventListener("sessionend",Gl),Ei.stop()};function Xt(E){E.preventDefault(),ja("WebGLRenderer: Context Lost."),S=!0}function ge(){ja("WebGLRenderer: Context Restored."),S=!1;const E=R.autoReset,z=It.enabled,W=It.autoUpdate,V=It.needsUpdate,G=It.type;Q(),R.autoReset=E,It.enabled=z,It.autoUpdate=W,It.needsUpdate=V,It.type=G}function he(E){Qt("WebGLRenderer: A WebGL context could not be created. Reason: ",E.statusMessage)}function On(E){const z=E.target;z.removeEventListener("dispose",On),$n(z)}function $n(E){_u(E),_.remove(E)}function _u(E){const z=_.get(E).programs;z!==void 0&&(z.forEach(function(W){Ct.releaseProgram(W)}),E.isShaderMaterial&&Ct.releaseShaderCache(E))}this.renderBufferDirect=function(E,z,W,V,G,gt){z===null&&(z=st);const Et=G.isMesh&&G.matrixWorld.determinant()<0,vt=Mu(E,z,W,V,G);ht.setMaterial(V,Et);let At=W.index,Lt=1;if(V.wireframe===!0){if(At=Pt.getWireframeAttribute(W),At===void 0)return;Lt=2}const Vt=W.drawRange,Bt=W.attributes.position;let $t=Vt.start*Lt,pe=(Vt.start+Vt.count)*Lt;gt!==null&&($t=Math.max($t,gt.start*Lt),pe=Math.min(pe,(gt.start+gt.count)*Lt)),At!==null?($t=Math.max($t,0),pe=Math.min(pe,At.count)):Bt!=null&&($t=Math.max($t,0),pe=Math.min(pe,Bt.count));const ve=pe-$t;if(ve<0||ve===1/0)return;wt.setup(G,V,vt,W,At);let Me,me=O;if(At!==null&&(Me=Y.get(At),me=Mt,me.setIndex(Me)),G.isMesh)V.wireframe===!0?(ht.setLineWidth(V.wireframeLinewidth*at()),me.setMode(I.LINES)):me.setMode(I.TRIANGLES);else if(G.isLine){let kt=V.linewidth;kt===void 0&&(kt=1),ht.setLineWidth(kt*at()),G.isLineSegments?me.setMode(I.LINES):G.isLineLoop?me.setMode(I.LINE_LOOP):me.setMode(I.LINE_STRIP)}else G.isPoints?me.setMode(I.POINTS):G.isSprite&&me.setMode(I.TRIANGLES);if(G.isBatchedMesh)if(G._multiDrawInstances!==null)Qs("WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),me.renderMultiDrawInstances(G._multiDrawStarts,G._multiDrawCounts,G._multiDrawCount,G._multiDrawInstances);else if(xt.get("WEBGL_multi_draw"))me.renderMultiDraw(G._multiDrawStarts,G._multiDrawCounts,G._multiDrawCount);else{const kt=G._multiDrawStarts,ue=G._multiDrawCounts,ie=G._multiDrawCount,ln=At?Y.get(At).bytesPerElement:1,Xi=_.get(V).currentProgram.getUniforms();for(let cn=0;cn<ie;cn++)Xi.setValue(I,"_gl_DrawID",cn),me.render(kt[cn]/ln,ue[cn])}else if(G.isInstancedMesh)me.renderInstances($t,ve,G.count);else if(W.isInstancedBufferGeometry){const kt=W._maxInstanceCount!==void 0?W._maxInstanceCount:1/0,ue=Math.min(W.instanceCount,kt);me.renderInstances($t,ve,ue)}else me.render($t,ve)};function zl(E,z,W){E.transparent===!0&&E.side===Le&&E.forceSinglePass===!1?(E.side=rn,E.needsUpdate=!0,ca(E,z,W),E.side=wi,E.needsUpdate=!0,ca(E,z,W),E.side=Le):ca(E,z,W)}this.compile=function(E,z,W=null){W===null&&(W=E),A=mt.get(W),A.init(z),T.push(A),W.traverseVisible(function(G){G.isLight&&G.layers.test(z.layers)&&(A.pushLight(G),G.castShadow&&A.pushShadow(G))}),E!==W&&E.traverseVisible(function(G){G.isLight&&G.layers.test(z.layers)&&(A.pushLight(G),G.castShadow&&A.pushShadow(G))}),A.setupLights();const V=new Set;return E.traverse(function(G){if(!(G.isMesh||G.isPoints||G.isLine||G.isSprite))return;const gt=G.material;if(gt)if(Array.isArray(gt))for(let Et=0;Et<gt.length;Et++){const vt=gt[Et];zl(vt,W,G),V.add(vt)}else zl(gt,W,G),V.add(gt)}),A=T.pop(),V},this.compileAsync=function(E,z,W=null){const V=this.compile(E,z,W);return new Promise(G=>{function gt(){if(V.forEach(function(Et){_.get(Et).currentProgram.isReady()&&V.delete(Et)}),V.size===0){G(E);return}setTimeout(gt,10)}xt.get("KHR_parallel_shader_compile")!==null?gt():setTimeout(gt,10)})};let gr=null;function vu(E){gr&&gr(E)}function Hl(){Ei.stop()}function Gl(){Ei.start()}const Ei=new jh;Ei.setAnimationLoop(vu),typeof self<"u"&&Ei.setContext(self),this.setAnimationLoop=function(E){gr=E,ft.setAnimationLoop(E),E===null?Ei.stop():Ei.start()},ft.addEventListener("sessionstart",Hl),ft.addEventListener("sessionend",Gl),this.render=function(E,z){if(z!==void 0&&z.isCamera!==!0){Qt("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(S===!0)return;const W=ft.enabled===!0&&ft.isPresenting===!0,V=D!==null&&(L===null||W)&&D.begin(M,L);if(E.matrixWorldAutoUpdate===!0&&E.updateMatrixWorld(),z.parent===null&&z.matrixWorldAutoUpdate===!0&&z.updateMatrixWorld(),ft.enabled===!0&&ft.isPresenting===!0&&(D===null||D.isCompositing()===!1)&&(ft.cameraAutoUpdate===!0&&ft.updateCamera(z),z=ft.getCamera()),E.isScene===!0&&E.onBeforeRender(M,E,z,L),A=mt.get(E,T.length),A.init(z),T.push(A),re.multiplyMatrices(z.projectionMatrix,z.matrixWorldInverse),Nt.setFromProjectionMatrix(re,Hn,z.reversedDepth),Jt=this.localClippingEnabled,St=Rt.init(this.clippingPlanes,Jt),y=rt.get(E,P.length),y.init(),P.push(y),ft.enabled===!0&&ft.isPresenting===!0){const Et=M.xr.getDepthSensingMesh();Et!==null&&xr(Et,z,-1/0,M.sortObjects)}xr(E,z,0,M.sortObjects),y.finish(),M.sortObjects===!0&&y.sort(ae,ne),J=ft.enabled===!1||ft.isPresenting===!1||ft.hasDepthSensing()===!1,J&&pt.addToRenderList(y,E),this.info.render.frame++,St===!0&&Rt.beginShadows();const G=A.state.shadowsArray;if(It.render(G,E,z),St===!0&&Rt.endShadows(),this.info.autoReset===!0&&this.info.reset(),(V&&D.hasRenderPass())===!1){const Et=y.opaque,vt=y.transmissive;if(A.setupLights(),z.isArrayCamera){const At=z.cameras;if(vt.length>0)for(let Lt=0,Vt=At.length;Lt<Vt;Lt++){const Bt=At[Lt];Wl(Et,vt,E,Bt)}J&&pt.render(E);for(let Lt=0,Vt=At.length;Lt<Vt;Lt++){const Bt=At[Lt];Vl(y,E,Bt,Bt.viewport)}}else vt.length>0&&Wl(Et,vt,E,z),J&&pt.render(E),Vl(y,E,z)}L!==null&&C===0&&(B.updateMultisampleRenderTarget(L),B.updateRenderTargetMipmap(L)),V&&D.end(M),E.isScene===!0&&E.onAfterRender(M,E,z),wt.resetDefaultState(),N=-1,U=null,T.pop(),T.length>0?(A=T[T.length-1],St===!0&&Rt.setGlobalState(M.clippingPlanes,A.state.camera)):A=null,P.pop(),P.length>0?y=P[P.length-1]:y=null};function xr(E,z,W,V){if(E.visible===!1)return;if(E.layers.test(z.layers)){if(E.isGroup)W=E.renderOrder;else if(E.isLOD)E.autoUpdate===!0&&E.update(z);else if(E.isLight)A.pushLight(E),E.castShadow&&A.pushShadow(E);else if(E.isSprite){if(!E.frustumCulled||Nt.intersectsSprite(E)){V&&$.setFromMatrixPosition(E.matrixWorld).applyMatrix4(re);const Et=dt.update(E),vt=E.material;vt.visible&&y.push(E,Et,vt,W,$.z,null)}}else if((E.isMesh||E.isLine||E.isPoints)&&(!E.frustumCulled||Nt.intersectsObject(E))){const Et=dt.update(E),vt=E.material;if(V&&(E.boundingSphere!==void 0?(E.boundingSphere===null&&E.computeBoundingSphere(),$.copy(E.boundingSphere.center)):(Et.boundingSphere===null&&Et.computeBoundingSphere(),$.copy(Et.boundingSphere.center)),$.applyMatrix4(E.matrixWorld).applyMatrix4(re)),Array.isArray(vt)){const At=Et.groups;for(let Lt=0,Vt=At.length;Lt<Vt;Lt++){const Bt=At[Lt],$t=vt[Bt.materialIndex];$t&&$t.visible&&y.push(E,Et,$t,W,$.z,Bt)}}else vt.visible&&y.push(E,Et,vt,W,$.z,null)}}const gt=E.children;for(let Et=0,vt=gt.length;Et<vt;Et++)xr(gt[Et],z,W,V)}function Vl(E,z,W,V){const{opaque:G,transmissive:gt,transparent:Et}=E;A.setupLightsView(W),St===!0&&Rt.setGlobalState(M.clippingPlanes,W),V&&ht.viewport(H.copy(V)),G.length>0&&la(G,z,W),gt.length>0&&la(gt,z,W),Et.length>0&&la(Et,z,W),ht.buffers.depth.setTest(!0),ht.buffers.depth.setMask(!0),ht.buffers.color.setMask(!0),ht.setPolygonOffset(!1)}function Wl(E,z,W,V){if((W.isScene===!0?W.overrideMaterial:null)!==null)return;if(A.state.transmissionRenderTarget[V.id]===void 0){const $t=xt.has("EXT_color_buffer_half_float")||xt.has("EXT_color_buffer_float");A.state.transmissionRenderTarget[V.id]=new Yn(1,1,{generateMipmaps:!0,type:$t?li:pn,minFilter:ki,samples:Dt.samples,stencilBuffer:a,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:te.workingColorSpace})}const gt=A.state.transmissionRenderTarget[V.id],Et=V.viewport||H;gt.setSize(Et.z*M.transmissionResolutionScale,Et.w*M.transmissionResolutionScale);const vt=M.getRenderTarget(),At=M.getActiveCubeFace(),Lt=M.getActiveMipmapLevel();M.setRenderTarget(gt),M.getClearColor(ot),tt=M.getClearAlpha(),tt<1&&M.setClearColor(16777215,.5),M.clear(),J&&pt.render(W);const Vt=M.toneMapping;M.toneMapping=Wn;const Bt=V.viewport;if(V.viewport!==void 0&&(V.viewport=void 0),A.setupLightsView(V),St===!0&&Rt.setGlobalState(M.clippingPlanes,V),la(E,W,V),B.updateMultisampleRenderTarget(gt),B.updateRenderTargetMipmap(gt),xt.has("WEBGL_multisampled_render_to_texture")===!1){let $t=!1;for(let pe=0,ve=z.length;pe<ve;pe++){const Me=z[pe],{object:me,geometry:kt,material:ue,group:ie}=Me;if(ue.side===Le&&me.layers.test(V.layers)){const ln=ue.side;ue.side=rn,ue.needsUpdate=!0,Xl(me,W,V,kt,ue,ie),ue.side=ln,ue.needsUpdate=!0,$t=!0}}$t===!0&&(B.updateMultisampleRenderTarget(gt),B.updateRenderTargetMipmap(gt))}M.setRenderTarget(vt,At,Lt),M.setClearColor(ot,tt),Bt!==void 0&&(V.viewport=Bt),M.toneMapping=Vt}function la(E,z,W){const V=z.isScene===!0?z.overrideMaterial:null;for(let G=0,gt=E.length;G<gt;G++){const Et=E[G],{object:vt,geometry:At,group:Lt}=Et;let Vt=Et.material;Vt.allowOverride===!0&&V!==null&&(Vt=V),vt.layers.test(W.layers)&&Xl(vt,z,W,At,Vt,Lt)}}function Xl(E,z,W,V,G,gt){E.onBeforeRender(M,z,W,V,G,gt),E.modelViewMatrix.multiplyMatrices(W.matrixWorldInverse,E.matrixWorld),E.normalMatrix.getNormalMatrix(E.modelViewMatrix),G.onBeforeRender(M,z,W,V,E,gt),G.transparent===!0&&G.side===Le&&G.forceSinglePass===!1?(G.side=rn,G.needsUpdate=!0,M.renderBufferDirect(W,z,V,G,E,gt),G.side=wi,G.needsUpdate=!0,M.renderBufferDirect(W,z,V,G,E,gt),G.side=Le):M.renderBufferDirect(W,z,V,G,E,gt),E.onAfterRender(M,z,W,V,G,gt)}function ca(E,z,W){z.isScene!==!0&&(z=st);const V=_.get(E),G=A.state.lights,gt=A.state.shadowsArray,Et=G.state.version,vt=Ct.getParameters(E,G.state,gt,z,W),At=Ct.getProgramCacheKey(vt);let Lt=V.programs;V.environment=E.isMeshStandardMaterial?z.environment:null,V.fog=z.fog,V.envMap=(E.isMeshStandardMaterial?j:X).get(E.envMap||V.environment),V.envMapRotation=V.environment!==null&&E.envMap===null?z.environmentRotation:E.envMapRotation,Lt===void 0&&(E.addEventListener("dispose",On),Lt=new Map,V.programs=Lt);let Vt=Lt.get(At);if(Vt!==void 0){if(V.currentProgram===Vt&&V.lightsStateVersion===Et)return ql(E,vt),Vt}else vt.uniforms=Ct.getUniforms(E),E.onBeforeCompile(vt,M),Vt=Ct.acquireProgram(vt,At),Lt.set(At,Vt),V.uniforms=vt.uniforms;const Bt=V.uniforms;return(!E.isShaderMaterial&&!E.isRawShaderMaterial||E.clipping===!0)&&(Bt.clippingPlanes=Rt.uniform),ql(E,vt),V.needsLights=Su(E),V.lightsStateVersion=Et,V.needsLights&&(Bt.ambientLightColor.value=G.state.ambient,Bt.lightProbe.value=G.state.probe,Bt.directionalLights.value=G.state.directional,Bt.directionalLightShadows.value=G.state.directionalShadow,Bt.spotLights.value=G.state.spot,Bt.spotLightShadows.value=G.state.spotShadow,Bt.rectAreaLights.value=G.state.rectArea,Bt.ltc_1.value=G.state.rectAreaLTC1,Bt.ltc_2.value=G.state.rectAreaLTC2,Bt.pointLights.value=G.state.point,Bt.pointLightShadows.value=G.state.pointShadow,Bt.hemisphereLights.value=G.state.hemi,Bt.directionalShadowMap.value=G.state.directionalShadowMap,Bt.directionalShadowMatrix.value=G.state.directionalShadowMatrix,Bt.spotShadowMap.value=G.state.spotShadowMap,Bt.spotLightMatrix.value=G.state.spotLightMatrix,Bt.spotLightMap.value=G.state.spotLightMap,Bt.pointShadowMap.value=G.state.pointShadowMap,Bt.pointShadowMatrix.value=G.state.pointShadowMatrix),V.currentProgram=Vt,V.uniformsList=null,Vt}function Yl(E){if(E.uniformsList===null){const z=E.currentProgram.getUniforms();E.uniformsList=Ya.seqWithValue(z.seq,E.uniforms)}return E.uniformsList}function ql(E,z){const W=_.get(E);W.outputColorSpace=z.outputColorSpace,W.batching=z.batching,W.batchingColor=z.batchingColor,W.instancing=z.instancing,W.instancingColor=z.instancingColor,W.instancingMorph=z.instancingMorph,W.skinning=z.skinning,W.morphTargets=z.morphTargets,W.morphNormals=z.morphNormals,W.morphColors=z.morphColors,W.morphTargetsCount=z.morphTargetsCount,W.numClippingPlanes=z.numClippingPlanes,W.numIntersection=z.numClipIntersection,W.vertexAlphas=z.vertexAlphas,W.vertexTangents=z.vertexTangents,W.toneMapping=z.toneMapping}function Mu(E,z,W,V,G){z.isScene!==!0&&(z=st),B.resetTextureUnits();const gt=z.fog,Et=V.isMeshStandardMaterial?z.environment:null,vt=L===null?M.outputColorSpace:L.isXRRenderTarget===!0?L.texture.colorSpace:ys,At=(V.isMeshStandardMaterial?j:X).get(V.envMap||Et),Lt=V.vertexColors===!0&&!!W.attributes.color&&W.attributes.color.itemSize===4,Vt=!!W.attributes.tangent&&(!!V.normalMap||V.anisotropy>0),Bt=!!W.morphAttributes.position,$t=!!W.morphAttributes.normal,pe=!!W.morphAttributes.color;let ve=Wn;V.toneMapped&&(L===null||L.isXRRenderTarget===!0)&&(ve=M.toneMapping);const Me=W.morphAttributes.position||W.morphAttributes.normal||W.morphAttributes.color,me=Me!==void 0?Me.length:0,kt=_.get(V),ue=A.state.lights;if(St===!0&&(Jt===!0||E!==U)){const je=E===U&&V.id===N;Rt.setState(V,E,je)}let ie=!1;V.version===kt.__version?(kt.needsLights&&kt.lightsStateVersion!==ue.state.version||kt.outputColorSpace!==vt||G.isBatchedMesh&&kt.batching===!1||!G.isBatchedMesh&&kt.batching===!0||G.isBatchedMesh&&kt.batchingColor===!0&&G.colorTexture===null||G.isBatchedMesh&&kt.batchingColor===!1&&G.colorTexture!==null||G.isInstancedMesh&&kt.instancing===!1||!G.isInstancedMesh&&kt.instancing===!0||G.isSkinnedMesh&&kt.skinning===!1||!G.isSkinnedMesh&&kt.skinning===!0||G.isInstancedMesh&&kt.instancingColor===!0&&G.instanceColor===null||G.isInstancedMesh&&kt.instancingColor===!1&&G.instanceColor!==null||G.isInstancedMesh&&kt.instancingMorph===!0&&G.morphTexture===null||G.isInstancedMesh&&kt.instancingMorph===!1&&G.morphTexture!==null||kt.envMap!==At||V.fog===!0&&kt.fog!==gt||kt.numClippingPlanes!==void 0&&(kt.numClippingPlanes!==Rt.numPlanes||kt.numIntersection!==Rt.numIntersection)||kt.vertexAlphas!==Lt||kt.vertexTangents!==Vt||kt.morphTargets!==Bt||kt.morphNormals!==$t||kt.morphColors!==pe||kt.toneMapping!==ve||kt.morphTargetsCount!==me)&&(ie=!0):(ie=!0,kt.__version=V.version);let ln=kt.currentProgram;ie===!0&&(ln=ca(V,z,G));let Xi=!1,cn=!1,Cs=!1;const xe=ln.getUniforms(),sn=kt.uniforms;if(ht.useProgram(ln.program)&&(Xi=!0,cn=!0,Cs=!0),V.id!==N&&(N=V.id,cn=!0),Xi||U!==E){ht.buffers.depth.getReversed()&&E.reversedDepth!==!0&&(E._reversedDepth=!0,E.updateProjectionMatrix()),xe.setValue(I,"projectionMatrix",E.projectionMatrix),xe.setValue(I,"viewMatrix",E.matrixWorldInverse);const an=xe.map.cameraPosition;an!==void 0&&an.setValue(I,Wt.setFromMatrixPosition(E.matrixWorld)),Dt.logarithmicDepthBuffer&&xe.setValue(I,"logDepthBufFC",2/(Math.log(E.far+1)/Math.LN2)),(V.isMeshPhongMaterial||V.isMeshToonMaterial||V.isMeshLambertMaterial||V.isMeshBasicMaterial||V.isMeshStandardMaterial||V.isShaderMaterial)&&xe.setValue(I,"isOrthographic",E.isOrthographicCamera===!0),U!==E&&(U=E,cn=!0,Cs=!0)}if(kt.needsLights&&(ue.state.directionalShadowMap.length>0&&xe.setValue(I,"directionalShadowMap",ue.state.directionalShadowMap,B),ue.state.spotShadowMap.length>0&&xe.setValue(I,"spotShadowMap",ue.state.spotShadowMap,B),ue.state.pointShadowMap.length>0&&xe.setValue(I,"pointShadowMap",ue.state.pointShadowMap,B)),G.isSkinnedMesh){xe.setOptional(I,G,"bindMatrix"),xe.setOptional(I,G,"bindMatrixInverse");const je=G.skeleton;je&&(je.boneTexture===null&&je.computeBoneTexture(),xe.setValue(I,"boneTexture",je.boneTexture,B))}G.isBatchedMesh&&(xe.setOptional(I,G,"batchingTexture"),xe.setValue(I,"batchingTexture",G._matricesTexture,B),xe.setOptional(I,G,"batchingIdTexture"),xe.setValue(I,"batchingIdTexture",G._indirectTexture,B),xe.setOptional(I,G,"batchingColorTexture"),G._colorsTexture!==null&&xe.setValue(I,"batchingColorTexture",G._colorsTexture,B));const mn=W.morphAttributes;if((mn.position!==void 0||mn.normal!==void 0||mn.color!==void 0)&&Zt.update(G,W,ln),(cn||kt.receiveShadow!==G.receiveShadow)&&(kt.receiveShadow=G.receiveShadow,xe.setValue(I,"receiveShadow",G.receiveShadow)),V.isMeshGouraudMaterial&&V.envMap!==null&&(sn.envMap.value=At,sn.flipEnvMap.value=At.isCubeTexture&&At.isRenderTargetTexture===!1?-1:1),V.isMeshStandardMaterial&&V.envMap===null&&z.environment!==null&&(sn.envMapIntensity.value=z.environmentIntensity),sn.dfgLUT!==void 0&&(sn.dfgLUT.value=Vx()),cn&&(xe.setValue(I,"toneMappingExposure",M.toneMappingExposure),kt.needsLights&&yu(sn,Cs),gt&&V.fog===!0&&Ht.refreshFogUniforms(sn,gt),Ht.refreshMaterialUniforms(sn,V,zt,Gt,A.state.transmissionRenderTarget[E.id]),Ya.upload(I,Yl(kt),sn,B)),V.isShaderMaterial&&V.uniformsNeedUpdate===!0&&(Ya.upload(I,Yl(kt),sn,B),V.uniformsNeedUpdate=!1),V.isSpriteMaterial&&xe.setValue(I,"center",G.center),xe.setValue(I,"modelViewMatrix",G.modelViewMatrix),xe.setValue(I,"normalMatrix",G.normalMatrix),xe.setValue(I,"modelMatrix",G.matrixWorld),V.isShaderMaterial||V.isRawShaderMaterial){const je=V.uniformsGroups;for(let an=0,_r=je.length;an<_r;an++){const Ti=je[an];lt.update(Ti,ln),lt.bind(Ti,ln)}}return ln}function yu(E,z){E.ambientLightColor.needsUpdate=z,E.lightProbe.needsUpdate=z,E.directionalLights.needsUpdate=z,E.directionalLightShadows.needsUpdate=z,E.pointLights.needsUpdate=z,E.pointLightShadows.needsUpdate=z,E.spotLights.needsUpdate=z,E.spotLightShadows.needsUpdate=z,E.rectAreaLights.needsUpdate=z,E.hemisphereLights.needsUpdate=z}function Su(E){return E.isMeshLambertMaterial||E.isMeshToonMaterial||E.isMeshPhongMaterial||E.isMeshStandardMaterial||E.isShadowMaterial||E.isShaderMaterial&&E.lights===!0}this.getActiveCubeFace=function(){return v},this.getActiveMipmapLevel=function(){return C},this.getRenderTarget=function(){return L},this.setRenderTargetTextures=function(E,z,W){const V=_.get(E);V.__autoAllocateDepthBuffer=E.resolveDepthBuffer===!1,V.__autoAllocateDepthBuffer===!1&&(V.__useRenderToTexture=!1),_.get(E.texture).__webglTexture=z,_.get(E.depthTexture).__webglTexture=V.__autoAllocateDepthBuffer?void 0:W,V.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(E,z){const W=_.get(E);W.__webglFramebuffer=z,W.__useDefaultFramebuffer=z===void 0};const wu=I.createFramebuffer();this.setRenderTarget=function(E,z=0,W=0){L=E,v=z,C=W;let V=null,G=!1,gt=!1;if(E){const vt=_.get(E);if(vt.__useDefaultFramebuffer!==void 0){ht.bindFramebuffer(I.FRAMEBUFFER,vt.__webglFramebuffer),H.copy(E.viewport),k.copy(E.scissor),q=E.scissorTest,ht.viewport(H),ht.scissor(k),ht.setScissorTest(q),N=-1;return}else if(vt.__webglFramebuffer===void 0)B.setupRenderTarget(E);else if(vt.__hasExternalTextures)B.rebindTextures(E,_.get(E.texture).__webglTexture,_.get(E.depthTexture).__webglTexture);else if(E.depthBuffer){const Vt=E.depthTexture;if(vt.__boundDepthTexture!==Vt){if(Vt!==null&&_.has(Vt)&&(E.width!==Vt.image.width||E.height!==Vt.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");B.setupDepthRenderbuffer(E)}}const At=E.texture;(At.isData3DTexture||At.isDataArrayTexture||At.isCompressedArrayTexture)&&(gt=!0);const Lt=_.get(E).__webglFramebuffer;E.isWebGLCubeRenderTarget?(Array.isArray(Lt[z])?V=Lt[z][W]:V=Lt[z],G=!0):E.samples>0&&B.useMultisampledRTT(E)===!1?V=_.get(E).__webglMultisampledFramebuffer:Array.isArray(Lt)?V=Lt[W]:V=Lt,H.copy(E.viewport),k.copy(E.scissor),q=E.scissorTest}else H.copy(Z).multiplyScalar(zt).floor(),k.copy(et).multiplyScalar(zt).floor(),q=yt;if(W!==0&&(V=wu),ht.bindFramebuffer(I.FRAMEBUFFER,V)&&ht.drawBuffers(E,V),ht.viewport(H),ht.scissor(k),ht.setScissorTest(q),G){const vt=_.get(E.texture);I.framebufferTexture2D(I.FRAMEBUFFER,I.COLOR_ATTACHMENT0,I.TEXTURE_CUBE_MAP_POSITIVE_X+z,vt.__webglTexture,W)}else if(gt){const vt=z;for(let At=0;At<E.textures.length;At++){const Lt=_.get(E.textures[At]);I.framebufferTextureLayer(I.FRAMEBUFFER,I.COLOR_ATTACHMENT0+At,Lt.__webglTexture,W,vt)}}else if(E!==null&&W!==0){const vt=_.get(E.texture);I.framebufferTexture2D(I.FRAMEBUFFER,I.COLOR_ATTACHMENT0,I.TEXTURE_2D,vt.__webglTexture,W)}N=-1},this.readRenderTargetPixels=function(E,z,W,V,G,gt,Et,vt=0){if(!(E&&E.isWebGLRenderTarget)){Qt("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let At=_.get(E).__webglFramebuffer;if(E.isWebGLCubeRenderTarget&&Et!==void 0&&(At=At[Et]),At){ht.bindFramebuffer(I.FRAMEBUFFER,At);try{const Lt=E.textures[vt],Vt=Lt.format,Bt=Lt.type;if(!Dt.textureFormatReadable(Vt)){Qt("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!Dt.textureTypeReadable(Bt)){Qt("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}z>=0&&z<=E.width-V&&W>=0&&W<=E.height-G&&(E.textures.length>1&&I.readBuffer(I.COLOR_ATTACHMENT0+vt),I.readPixels(z,W,V,G,ct.convert(Vt),ct.convert(Bt),gt))}finally{const Lt=L!==null?_.get(L).__webglFramebuffer:null;ht.bindFramebuffer(I.FRAMEBUFFER,Lt)}}},this.readRenderTargetPixelsAsync=async function(E,z,W,V,G,gt,Et,vt=0){if(!(E&&E.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let At=_.get(E).__webglFramebuffer;if(E.isWebGLCubeRenderTarget&&Et!==void 0&&(At=At[Et]),At)if(z>=0&&z<=E.width-V&&W>=0&&W<=E.height-G){ht.bindFramebuffer(I.FRAMEBUFFER,At);const Lt=E.textures[vt],Vt=Lt.format,Bt=Lt.type;if(!Dt.textureFormatReadable(Vt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!Dt.textureTypeReadable(Bt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const $t=I.createBuffer();I.bindBuffer(I.PIXEL_PACK_BUFFER,$t),I.bufferData(I.PIXEL_PACK_BUFFER,gt.byteLength,I.STREAM_READ),E.textures.length>1&&I.readBuffer(I.COLOR_ATTACHMENT0+vt),I.readPixels(z,W,V,G,ct.convert(Vt),ct.convert(Bt),0);const pe=L!==null?_.get(L).__webglFramebuffer:null;ht.bindFramebuffer(I.FRAMEBUFFER,pe);const ve=I.fenceSync(I.SYNC_GPU_COMMANDS_COMPLETE,0);return I.flush(),await ad(I,ve,4),I.bindBuffer(I.PIXEL_PACK_BUFFER,$t),I.getBufferSubData(I.PIXEL_PACK_BUFFER,0,gt),I.deleteBuffer($t),I.deleteSync(ve),gt}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(E,z=null,W=0){const V=Math.pow(2,-W),G=Math.floor(E.image.width*V),gt=Math.floor(E.image.height*V),Et=z!==null?z.x:0,vt=z!==null?z.y:0;B.setTexture2D(E,0),I.copyTexSubImage2D(I.TEXTURE_2D,W,0,0,Et,vt,G,gt),ht.unbindTexture()};const bu=I.createFramebuffer(),Eu=I.createFramebuffer();this.copyTextureToTexture=function(E,z,W=null,V=null,G=0,gt=null){gt===null&&(G!==0?(Qs("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),gt=G,G=0):gt=0);let Et,vt,At,Lt,Vt,Bt,$t,pe,ve;const Me=E.isCompressedTexture?E.mipmaps[gt]:E.image;if(W!==null)Et=W.max.x-W.min.x,vt=W.max.y-W.min.y,At=W.isBox3?W.max.z-W.min.z:1,Lt=W.min.x,Vt=W.min.y,Bt=W.isBox3?W.min.z:0;else{const mn=Math.pow(2,-G);Et=Math.floor(Me.width*mn),vt=Math.floor(Me.height*mn),E.isDataArrayTexture?At=Me.depth:E.isData3DTexture?At=Math.floor(Me.depth*mn):At=1,Lt=0,Vt=0,Bt=0}V!==null?($t=V.x,pe=V.y,ve=V.z):($t=0,pe=0,ve=0);const me=ct.convert(z.format),kt=ct.convert(z.type);let ue;z.isData3DTexture?(B.setTexture3D(z,0),ue=I.TEXTURE_3D):z.isDataArrayTexture||z.isCompressedArrayTexture?(B.setTexture2DArray(z,0),ue=I.TEXTURE_2D_ARRAY):(B.setTexture2D(z,0),ue=I.TEXTURE_2D),I.pixelStorei(I.UNPACK_FLIP_Y_WEBGL,z.flipY),I.pixelStorei(I.UNPACK_PREMULTIPLY_ALPHA_WEBGL,z.premultiplyAlpha),I.pixelStorei(I.UNPACK_ALIGNMENT,z.unpackAlignment);const ie=I.getParameter(I.UNPACK_ROW_LENGTH),ln=I.getParameter(I.UNPACK_IMAGE_HEIGHT),Xi=I.getParameter(I.UNPACK_SKIP_PIXELS),cn=I.getParameter(I.UNPACK_SKIP_ROWS),Cs=I.getParameter(I.UNPACK_SKIP_IMAGES);I.pixelStorei(I.UNPACK_ROW_LENGTH,Me.width),I.pixelStorei(I.UNPACK_IMAGE_HEIGHT,Me.height),I.pixelStorei(I.UNPACK_SKIP_PIXELS,Lt),I.pixelStorei(I.UNPACK_SKIP_ROWS,Vt),I.pixelStorei(I.UNPACK_SKIP_IMAGES,Bt);const xe=E.isDataArrayTexture||E.isData3DTexture,sn=z.isDataArrayTexture||z.isData3DTexture;if(E.isDepthTexture){const mn=_.get(E),je=_.get(z),an=_.get(mn.__renderTarget),_r=_.get(je.__renderTarget);ht.bindFramebuffer(I.READ_FRAMEBUFFER,an.__webglFramebuffer),ht.bindFramebuffer(I.DRAW_FRAMEBUFFER,_r.__webglFramebuffer);for(let Ti=0;Ti<At;Ti++)xe&&(I.framebufferTextureLayer(I.READ_FRAMEBUFFER,I.COLOR_ATTACHMENT0,_.get(E).__webglTexture,G,Bt+Ti),I.framebufferTextureLayer(I.DRAW_FRAMEBUFFER,I.COLOR_ATTACHMENT0,_.get(z).__webglTexture,gt,ve+Ti)),I.blitFramebuffer(Lt,Vt,Et,vt,$t,pe,Et,vt,I.DEPTH_BUFFER_BIT,I.NEAREST);ht.bindFramebuffer(I.READ_FRAMEBUFFER,null),ht.bindFramebuffer(I.DRAW_FRAMEBUFFER,null)}else if(G!==0||E.isRenderTargetTexture||_.has(E)){const mn=_.get(E),je=_.get(z);ht.bindFramebuffer(I.READ_FRAMEBUFFER,bu),ht.bindFramebuffer(I.DRAW_FRAMEBUFFER,Eu);for(let an=0;an<At;an++)xe?I.framebufferTextureLayer(I.READ_FRAMEBUFFER,I.COLOR_ATTACHMENT0,mn.__webglTexture,G,Bt+an):I.framebufferTexture2D(I.READ_FRAMEBUFFER,I.COLOR_ATTACHMENT0,I.TEXTURE_2D,mn.__webglTexture,G),sn?I.framebufferTextureLayer(I.DRAW_FRAMEBUFFER,I.COLOR_ATTACHMENT0,je.__webglTexture,gt,ve+an):I.framebufferTexture2D(I.DRAW_FRAMEBUFFER,I.COLOR_ATTACHMENT0,I.TEXTURE_2D,je.__webglTexture,gt),G!==0?I.blitFramebuffer(Lt,Vt,Et,vt,$t,pe,Et,vt,I.COLOR_BUFFER_BIT,I.NEAREST):sn?I.copyTexSubImage3D(ue,gt,$t,pe,ve+an,Lt,Vt,Et,vt):I.copyTexSubImage2D(ue,gt,$t,pe,Lt,Vt,Et,vt);ht.bindFramebuffer(I.READ_FRAMEBUFFER,null),ht.bindFramebuffer(I.DRAW_FRAMEBUFFER,null)}else sn?E.isDataTexture||E.isData3DTexture?I.texSubImage3D(ue,gt,$t,pe,ve,Et,vt,At,me,kt,Me.data):z.isCompressedArrayTexture?I.compressedTexSubImage3D(ue,gt,$t,pe,ve,Et,vt,At,me,Me.data):I.texSubImage3D(ue,gt,$t,pe,ve,Et,vt,At,me,kt,Me):E.isDataTexture?I.texSubImage2D(I.TEXTURE_2D,gt,$t,pe,Et,vt,me,kt,Me.data):E.isCompressedTexture?I.compressedTexSubImage2D(I.TEXTURE_2D,gt,$t,pe,Me.width,Me.height,me,Me.data):I.texSubImage2D(I.TEXTURE_2D,gt,$t,pe,Et,vt,me,kt,Me);I.pixelStorei(I.UNPACK_ROW_LENGTH,ie),I.pixelStorei(I.UNPACK_IMAGE_HEIGHT,ln),I.pixelStorei(I.UNPACK_SKIP_PIXELS,Xi),I.pixelStorei(I.UNPACK_SKIP_ROWS,cn),I.pixelStorei(I.UNPACK_SKIP_IMAGES,Cs),gt===0&&z.generateMipmaps&&I.generateMipmap(ue),ht.unbindTexture()},this.initRenderTarget=function(E){_.get(E).__webglFramebuffer===void 0&&B.setupRenderTarget(E)},this.initTexture=function(E){E.isCubeTexture?B.setTextureCube(E,0):E.isData3DTexture?B.setTexture3D(E,0):E.isDataArrayTexture||E.isCompressedArrayTexture?B.setTexture2DArray(E,0):B.setTexture2D(E,0),ht.unbindTexture()},this.resetState=function(){v=0,C=0,L=null,ht.reset(),wt.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Hn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;const e=this.getContext();e.drawingBufferColorSpace=te._getDrawingBufferColorSpace(t),e.unpackColorSpace=te._getUnpackColorSpace()}}let Ie,Ln,Dn;function Xx(){Cesium.Ion.defaultAccessToken="eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJqdGkiOiIzMzA1M2Q0MC01YzY1LTRkNDMtYWYzMS05MDdmZmI2MzAwYjYiLCJpZCI6NDA5NTYwLCJpYXQiOjE3NzQ1NDA1MjR9.szCoX8ALGsZ-jqCF6lvDtejplRGt2AJmQjZ2G7_51G0";let i;try{i=Cesium.Terrain.fromWorldTerrain()}catch{console.warn("Cesium World Terrain unavailable, using ellipsoid"),i=void 0}Ie=new Cesium.Viewer("cesiumContainer",{terrain:i,timeline:!1,animation:!1,baseLayerPicker:!1,geocoder:!1,homeButton:!1,infoBox:!1,sceneModePicker:!1,selectionIndicator:!1,navigationHelpButton:!1,fullscreenButton:!1,shouldAnimate:!1}),Ln=new Cesium.Viewer("minimapCesium",{terrain:null,timeline:!1,animation:!1,baseLayerPicker:!1,geocoder:!1,homeButton:!1,infoBox:!1,sceneModePicker:!1,selectionIndicator:!1,navigationHelpButton:!1,fullscreenButton:!1,shouldAnimate:!1,skyBox:!1,skyAtmosphere:!1,contextOptions:{webgl:{preserveDrawingBuffer:!0}}}),Dn=new Cesium.Viewer("pauseMinimapCesium",{terrain:null,timeline:!1,animation:!1,baseLayerPicker:!1,geocoder:!1,homeButton:!1,infoBox:!1,sceneModePicker:!1,selectionIndicator:!1,navigationHelpButton:!1,fullscreenButton:!1,shouldAnimate:!1,skyBox:!1,skyAtmosphere:!1,contextOptions:{webgl:{preserveDrawingBuffer:!0}}}),[Ie,Ln,Dn].forEach(t=>{t.scene.requestRenderMode=!1,t.scene.maximumRenderTimeChange=0,t.scene.globe.maximumScreenSpaceError=2,t.resolutionScale=.75,t.scene.screenSpaceCameraController.enableRotate=!1,t.scene.screenSpaceCameraController.enableTranslate=!1,t.scene.screenSpaceCameraController.enableZoom=!1,t.scene.screenSpaceCameraController.enableTilt=!1,t.scene.screenSpaceCameraController.enableLook=!1,t.scene.screenSpaceCameraController.maximumZoomDistance=25e6,t.scene.globe.tileCacheSize=2048,t.scene.globe.preloadAncestors=!0,t.scene.globe.preloadSiblings=!0,t.scene.globe.loadingDescendantLimit=20,t.scene.globe.skipLevelOfDetail=!0,t.scene.globe.baseScreenSpaceError=1024,t.scene.globe.skipScreenSpaceErrorFactor=16,t.scene.globe.skipLevels=1,t._cesiumWidget._creditContainer.style.display="none"}),Ie.scene.globe.baseColor=Cesium.Color.fromCssColorString("#1a3a1a");try{Ie.scene.globe.tileFailed&&Ie.scene.globe.tileFailed.addEventListener(()=>{})}catch{}return[Ln,Dn].forEach(t=>{t.scene.globe.enableLighting=!1,t.scene.globe.showGroundAtmosphere=!1,t.scene.fog.enabled=!1,t.scene.highDynamicRange=!1,t.scene.postProcessStages.fxaa.enabled=!1,t.resolutionScale=1,t.scene.globe.maximumScreenSpaceError=2,t.scene.globe.baseColor=Cesium.Color.BLACK,t.scene.skyAtmosphere&&(t.scene.skyAtmosphere.show=!1)}),Ie.scene.globe.enableLighting=!0,Ie.scene.highDynamicRange=!1,Ie.scene.postProcessStages.fxaa.enabled=!0,Ie.scene.skyAtmosphere=new Cesium.SkyAtmosphere,Ie.scene.fog.enabled=!0,Ie.scene.fog.density=1e-4,mr(!1),Ie}function Nl(i){!Ie||!Ln||!Dn||[Ie,Ln,Dn].forEach(t=>{t.scene.requestRenderMode=!i,t.scene.maximumRenderTimeChange=i?0:1/0})}function mr(i){if(!Ie)return;const t=Ie.scene.screenSpaceCameraController;t.enableRotate=i,t.enableTranslate=i,t.enableZoom=i,t.enableTilt=i,t.enableLook=i}function Yx(i,t,e,n,s,a){Ie&&(Ie.camera.setView({destination:Cesium.Cartesian3.fromDegrees(i,t,e),orientation:{heading:Cesium.Math.toRadians(n),pitch:Cesium.Math.toRadians(s),roll:Cesium.Math.toRadians(a)}}),Ie.scene.requestRender())}function qx(i,t,e,n){Ln&&(Ln.canvas.width===0||Ln.canvas.height===0||(Ln.camera.setView({destination:Cesium.Cartesian3.fromDegrees(i,t,e),orientation:{heading:Cesium.Math.toRadians(n),pitch:Cesium.Math.toRadians(-90),roll:0}}),Ln.scene.requestRender()))}function Zx(i,t,e,n){Dn&&(Dn.canvas.width===0||Dn.canvas.height===0||(Dn.camera.setView({destination:Cesium.Cartesian3.fromDegrees(i,t,e),orientation:{heading:Cesium.Math.toRadians(n),pitch:Cesium.Math.toRadians(-90),roll:0}}),Dn.scene.requestRender()))}function we(){return Ie}function $x(){return Ln}function Kx(){return Dn}class iu{constructor(){this.speed=15,this.maxSpeed=50,this.minSpeed=4,this.maxDiveSpeed=120,this.turboSpeed=400,this.mass=5,this.wingArea=.65,this.wingspan=2.1,this.aspectRatio=this.wingspan*this.wingspan/this.wingArea,this.clMax=1.6,this.cd0=.02,this.cdWingSpread=.008,this.k=1/(Math.PI*this.aspectRatio*.85),this.isFlapping=!1,this.flapStrength=0,this.flapCooldown=0,this.flapCycleDuration=.35,this.flapThrustImpulse=25,this.flapLiftImpulse=15,this.flapDecay=3,this.flapInput=!1,this.flapPrevInput=!1,this.gravity=9.8,this.airDensity=1.225,this.isGliding=!0,this.wingSpread=1,this.verticalSpeed=0,this.glideRatio=20,this.thermalLift=0,this.thermalStrength=0,this.thermalTimer=0,this.inThermal=!1,this.pitch=0,this.roll=0,this.heading=0,this.pitchRate=2,this.rollRate=3.2,this.yawRate=1,this.isBoosting=!1,this.boostTimeRemaining=0,this.boostDuration=4,this.boostMultiplier=2.5,this.boostRotations=0,this.boostPressed=!1,this.isTurbo=!1,this.turboPressed=!1,this.turboWindup=0,this.throttle=0,this.quaternion=new $e}boost(){this.boostTimeRemaining<=0&&(this.isBoosting=!0,this.boostTimeRemaining=this.boostDuration)}reset(t,e,n,s,a,r){this.heading=s||0,this.pitch=a||0,this.roll=r||0,this.speed=15,this.verticalSpeed=0,this.thermalLift=0,this.thermalStrength=0,this.isGliding=!0,this.isFlapping=!1,this.flapStrength=0,this.flapCooldown=0,this.wingSpread=1,this.isTurbo=!1,this.turboWindup=0;const o=new Be(Se.degToRad(this.pitch),Se.degToRad(this.heading),Se.degToRad(this.roll),"YXZ");this.quaternion.setFromEuler(o)}getAirDensity(t){const e=t*.3048;return this.airDensity*Math.exp(-e/8500)}getLiftCoefficient(t){return t<-5?-.2:t<12?this.clMax*(t/12):t<18?this.clMax*(1-(t-12)/12):.1}updateThermals(t,e){this.thermalTimer+=t;const n=Math.max(0,1-(e-2e3)/15e3),s=this.thermalTimer,a=Math.sin(s*.3)*.4+Math.sin(s*.7+1.5)*.3+Math.sin(s*1.2+3)*.3;this.thermalStrength=Math.max(0,a)*n,this.inThermal=this.thermalStrength>.15;const r=Math.abs(this.roll)>15&&Math.abs(this.roll)<45?1.5:1;this.thermalLift=this.thermalStrength*3*r*this.wingSpread}update(t,e){this.boostTimeRemaining>0&&(this.boostTimeRemaining-=e,this.boostTimeRemaining<=0&&(this.isBoosting=!1,this.boostTimeRemaining=0)),t.boost?(!this.boostPressed&&!this.isBoosting&&!this.isTurbo&&this.boost(),this.boostPressed=!0):this.boostPressed=!1,t.turbo?(this.turboPressed||(this.isTurbo=!this.isTurbo,this.isTurbo&&(this.isBoosting=!1,this.boostTimeRemaining=0)),this.turboPressed=!0):this.turboPressed=!1,this.turboWindup=this.isTurbo?Math.min(1,this.turboWindup+e*.7):Math.max(0,this.turboWindup-e*1.5),this.flapInput=t.flap||!1,this.flapInput&&!this.isBoosting&&!this.isTurbo?(this.isFlapping=!0,this.isGliding=!1,this.flapCooldown-=e,this.flapCooldown<=0&&(this.flapStrength=1,this.flapCooldown=this.flapCycleDuration)):this.flapInput||(this.isFlapping=!1,!this.isBoosting&&!this.isTurbo&&(this.isGliding=!0)),this.flapStrength=Math.max(0,this.flapStrength-this.flapDecay*e),this.isTurbo||this.turboWindup>.1?this.wingSpread+=(.15-this.wingSpread)*e*6:this.isBoosting?(this.wingSpread+=(.2-this.wingSpread)*e*5,this.isGliding=!1):this.isGliding?this.wingSpread+=(1-this.wingSpread)*e*3:this.wingSpread=.65+this.flapStrength*.25,this.throttle=this.isFlapping?.3+this.flapStrength*.7:0;const n=this.getAirDensity(0),s=this.speed,a=.5*n*s*s,r=Math.max(-10,Math.min(20,-this.pitch*.3)),o=this.getLiftCoefficient(r)*this.wingSpread,l=a*this.wingArea*o,c=this.k*o*o,h=this.cd0+c+this.wingSpread*this.cdWingSpread;let u=a*this.wingArea*h;this.isBoosting&&(u*=.25),(this.isTurbo||this.turboWindup>.1)&&(u*=.05);let d=0;this.isFlapping&&(d=this.flapThrustImpulse*this.flapStrength);const p=Se.degToRad(this.pitch),g=this.mass*this.gravity*Math.sin(p),m=(d-u+g)/this.mass;this.speed+=m*e;let f=this.isBoosting?this.maxDiveSpeed:this.maxSpeed;if(this.pitch<-20&&!this.isBoosting&&(f+=(this.maxDiveSpeed-this.maxSpeed)*Math.min(1,Math.abs(this.pitch)/60)),(this.isTurbo||this.turboWindup>.01)&&(f=this.turboSpeed),this.speed=Math.max(this.minSpeed,Math.min(f,this.speed)),this.isTurbo||this.turboWindup>.01){const N=this.turboWindup*this.turboWindup*(3-2*this.turboWindup);this.speed+=(this.turboSpeed*N-this.speed)*e*2.5}this.isBoosting&&(this.speed+=(this.maxDiveSpeed*.8-this.speed)*e*3),this.updateThermals(e,0);const b=this.mass*this.gravity,w=this.isFlapping?this.flapLiftImpulse*this.flapStrength:0,y=(l+w-b+this.thermalLift*this.mass)/this.mass;this.verticalSpeed+=(y*.15-this.verticalSpeed)*e*2,this.speed<=this.minSpeed*1.3&&!this.isBoosting&&!this.isTurbo&&(this.pitch=Se.lerp(this.pitch,Math.min(this.pitch,-8),e*.8));const A=Math.min(1.2,this.speed/this.maxSpeed),P=A>.3?.5+A*.5:A/.3*.5,T=t.pitch*this.pitchRate*e*P,D=t.roll*this.rollRate*e*P,M=t.yaw*this.yawRate*e*P,S=new $e().setFromAxisAngle(new F(1,0,0),T),v=new $e().setFromAxisAngle(new F(0,0,1),D),C=new $e().setFromAxisAngle(new F(0,1,0),M);this.quaternion.multiply(C).multiply(S).multiply(v).normalize();const L=new Be().setFromQuaternion(this.quaternion,"YXZ");return this.heading=Se.radToDeg(L.y),this.pitch=Se.radToDeg(L.x),this.roll=Se.radToDeg(L.z),{speed:this.speed,pitch:this.pitch,roll:this.roll,heading:this.heading,isBoosting:this.isBoosting,boostTimeRemaining:this.boostTimeRemaining,boostDuration:this.boostDuration,boostRotations:this.boostRotations,isGliding:this.isGliding,isFlapping:this.isFlapping,flapStrength:this.flapStrength,wingSpread:this.wingSpread,thermalStrength:this.thermalStrength,inThermal:this.inThermal,verticalSpeed:this.verticalSpeed,flapPhase:this.flapCooldown,liftForce:l,isTurbo:this.isTurbo,turboWindup:this.turboWindup}}}class Jx{constructor(){this.keys={},this.prevKeys={},window.addEventListener("keydown",t=>this.keys[t.key.toLowerCase()]=!0),window.addEventListener("keyup",t=>this.keys[t.key.toLowerCase()]=!1),this.mouseDragging=!1,this.mouseDeltaX=0,this.mouseDeltaY=0,this.lastMouseX=0,this.lastMouseY=0,window.addEventListener("mousedown",t=>{t.button===0&&(this.mouseDragging=!0,this.lastMouseX=t.clientX,this.lastMouseY=t.clientY)}),window.addEventListener("mousemove",t=>{this.mouseDragging&&(this.mouseDeltaX+=t.clientX-this.lastMouseX,this.mouseDeltaY+=t.clientY-this.lastMouseY,this.lastMouseX=t.clientX,this.lastMouseY=t.clientY)}),window.addEventListener("mouseup",t=>{t.button===0&&(this.mouseDragging=!1)}),this.input={throttle:0,pitch:0,roll:0,yaw:0,boost:!1,turbo:!1,flap:!1,cameraYaw:0,cameraPitch:0,isDragging:!1,fire:!1,fireFlare:!1,weaponIndex:-1,toggleWeapon:!1},this.sensitivity=.2,this.isMobile=this.detectMobile(),this.tiltEnabled=!1,this.tiltPitch=0,this.tiltRoll=0,this.tiltCalibration={pitch:0,roll:0},this.tiltSensitivity=1,this.touchThrottle=0,this.touchBoosting=!1,this.touchTurbo=!1,this.touchFlapping=!1,this.touchFiring=!1,this.touchFlare=!1,this.touchWeaponToggle=!1,this.touchPrevWeaponToggle=!1,this.touchCameraDragging=!1,this.touchCameraDeltaX=0,this.touchCameraDeltaY=0,this.lastTouchX=0,this.lastTouchY=0,this.cameraFingerID=null,this.isMobile&&this.initMobileControls()}detectMobile(){return/Android|iPhone|iPad|iPod|webOS|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)||"ontouchstart"in window||navigator.maxTouchPoints>0}async initMobileControls(){this.createTouchUI(),await this.requestOrientationPermission(),window.addEventListener("deviceorientation",s=>{if(!this.tiltEnabled)return;const a=s.beta||0,r=s.gamma||0;this.tiltPitch=a-this.tiltCalibration.pitch,this.tiltRoll=r-this.tiltCalibration.roll},!0);const t=document.getElementById("cesiumContainer"),n=document.getElementById("threeContainer")||t||document.body;n.addEventListener("touchstart",s=>this.handleViewTouchStart(s),{passive:!1}),n.addEventListener("touchmove",s=>this.handleViewTouchMove(s),{passive:!1}),n.addEventListener("touchend",s=>this.handleViewTouchEnd(s),{passive:!1})}async requestOrientationPermission(){if(typeof DeviceOrientationEvent<"u"&&typeof DeviceOrientationEvent.requestPermission=="function")try{await DeviceOrientationEvent.requestPermission()==="granted"&&(this.tiltEnabled=!0)}catch(t){console.warn("Device orientation permission denied:",t),this.tiltEnabled=!1}else this.tiltEnabled=!0}calibrateTilt(){this.tiltCalibration.pitch=this.tiltPitch+this.tiltCalibration.pitch,this.tiltCalibration.roll=this.tiltRoll+this.tiltCalibration.roll}createTouchUI(){const t=document.createElement("div");t.id="mobile-controls",t.style.cssText=`
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
		`,s.textContent="WING POWER",e.appendChild(s);let a=null;e.addEventListener("touchstart",m=>{m.preventDefault(),m.stopPropagation();const f=m.changedTouches[0];a=f.identifier,this.updateThrottleFromTouch(f,e)},{passive:!1}),e.addEventListener("touchmove",m=>{m.preventDefault(),m.stopPropagation();for(const f of m.changedTouches)f.identifier===a&&this.updateThrottleFromTouch(f,e)},{passive:!1}),e.addEventListener("touchend",m=>{for(const f of m.changedTouches)f.identifier===a&&(a=null)});const r=document.createElement("div");r.id="mobile-buttons",r.style.cssText=`
			position: absolute; right: 8px; bottom: 40%;
			display: flex; flex-direction: column; gap: 8px;
			pointer-events: auto; align-items: center;
		`;const o=(m,f,b,w=52)=>{const y=document.createElement("div");return y.id=m,y.style.cssText=`
				width: ${w}px; height: ${w}px; border-radius: 50%;
				background: ${b}; border: 2px solid rgba(255,255,255,0.3);
				display: flex; align-items: center; justify-content: center;
				font-size: 9px; color: #fff; text-align: center;
				user-select: none; touch-action: none;
				line-height: 1.1; font-weight: bold;
			`,y.textContent=f,y},l=o("mobile-fire","TALON","rgba(220,50,50,0.6)",58),c=o("mobile-flap","FLAP","rgba(80,180,80,0.6)",64),h=o("mobile-turbo","TURBO","rgba(255,140,0,0.6)",48),u=o("mobile-boost","DIVE","rgba(50,120,220,0.6)",44),d=o("mobile-weapon","SWITCH","rgba(212,160,23,0.5)",42),p=o("mobile-flare","SCREECH","rgba(100,200,100,0.5)",42),g=o("mobile-calibrate","LEVEL","rgba(150,150,150,0.5)",36);l.addEventListener("touchstart",m=>{m.preventDefault(),m.stopPropagation(),this.touchFiring=!0,l.style.background="rgba(255,80,80,0.8)"},{passive:!1}),l.addEventListener("touchend",m=>{this.touchFiring=!1,l.style.background="rgba(220,50,50,0.6)"}),c.addEventListener("touchstart",m=>{m.preventDefault(),m.stopPropagation(),this.touchFlapping=!0,c.style.background="rgba(100,220,100,0.9)"},{passive:!1}),c.addEventListener("touchend",m=>{this.touchFlapping=!1,c.style.background="rgba(80,180,80,0.6)"}),h.addEventListener("touchstart",m=>{m.preventDefault(),m.stopPropagation(),this.touchTurbo=!0,h.style.background=this.touchTurbo?"rgba(255,180,0,0.9)":"rgba(255,140,0,0.6)",setTimeout(()=>{h.style.background="rgba(255,140,0,0.6)"},200)},{passive:!1}),u.addEventListener("touchstart",m=>{m.preventDefault(),m.stopPropagation(),this.touchBoosting=!0,u.style.background="rgba(80,160,255,0.8)"},{passive:!1}),u.addEventListener("touchend",m=>{this.touchBoosting=!1,u.style.background="rgba(50,120,220,0.6)"}),d.addEventListener("touchstart",m=>{m.preventDefault(),m.stopPropagation(),this.touchWeaponToggle=!0,d.style.background="rgba(212,160,23,0.8)",setTimeout(()=>{d.style.background="rgba(212,160,23,0.5)"},200)},{passive:!1}),p.addEventListener("touchstart",m=>{m.preventDefault(),m.stopPropagation(),this.touchFlare=!0,p.style.background="rgba(140,240,140,0.8)"},{passive:!1}),p.addEventListener("touchend",m=>{this.touchFlare=!1,p.style.background="rgba(100,200,100,0.5)"}),g.addEventListener("touchstart",m=>{m.preventDefault(),m.stopPropagation(),this.calibrateTilt(),g.style.background="rgba(200,200,200,0.8)",setTimeout(()=>{g.style.background="rgba(150,150,150,0.5)"},300)},{passive:!1}),r.appendChild(l),r.appendChild(c),r.appendChild(h),r.appendChild(u),r.appendChild(d),r.appendChild(p),r.appendChild(g);const x=document.createElement("div");x.id="mobile-pause",x.style.cssText=`
			position: absolute; top: 8px; right: 8px; width: 36px; height: 36px;
			background: rgba(0,0,0,0.5); border: 1px solid rgba(212,160,23,0.5);
			border-radius: 4px; display: flex; align-items: center; justify-content: center;
			font-size: 18px; color: #d4a017; pointer-events: auto;
			touch-action: none; user-select: none;
		`,x.textContent="⏸",x.addEventListener("touchstart",m=>{m.preventDefault(),m.stopPropagation(),window.dispatchEvent(new KeyboardEvent("keydown",{key:"Escape"})),setTimeout(()=>{window.dispatchEvent(new KeyboardEvent("keyup",{key:"Escape"}))},100)},{passive:!1}),t.appendChild(e),t.appendChild(r),t.appendChild(x),document.body.appendChild(t),this.mobileControlsContainer=t}updateThrottleFromTouch(t,e){const n=e.getBoundingClientRect(),s=t.clientY-n.top,a=n.height,r=1-Math.max(0,Math.min(1,s/a));this.touchThrottle=r;const o=document.getElementById("mobile-throttle-fill");o&&(o.style.height=`${r*100}%`)}handleViewTouchStart(t){if(t.target.closest("#mobile-controls"))return;const e=t.changedTouches[0];this.cameraFingerID===null&&(this.cameraFingerID=e.identifier,this.lastTouchX=e.clientX,this.lastTouchY=e.clientY,this.touchCameraDragging=!0)}handleViewTouchMove(t){for(const e of t.changedTouches)e.identifier===this.cameraFingerID&&(this.touchCameraDeltaX+=e.clientX-this.lastTouchX,this.touchCameraDeltaY+=e.clientY-this.lastTouchY,this.lastTouchX=e.clientX,this.lastTouchY=e.clientY)}handleViewTouchEnd(t){for(const e of t.changedTouches)e.identifier===this.cameraFingerID&&(this.cameraFingerID=null,this.touchCameraDragging=!1)}setMobileVisible(t){this.mobileControlsContainer&&(this.mobileControlsContainer.style.display=t?"block":"none")}setSensitivity(t){this.sensitivity=t}update(){this.input.boost=!!this.keys[" "],this.input.turbo=!!this.keys.shift,this.input.isDragging=this.mouseDragging,this.input.fire=!!this.keys.enter||!!this.keys.f,this.input.fireFlare=!!this.keys.v,this.input.toggleWeapon=!!this.keys.q&&!this.prevKeys.q,this.input.weaponIndex=-1,this.keys[1]&&(this.input.weaponIndex=0),this.keys[2]&&(this.input.weaponIndex=1),this.input.flap=!!this.keys.w,this.keys.s?this.input.throttle=Math.max(0,this.input.throttle-.5*.016):this.input.flap?this.input.throttle=Math.min(1,this.input.throttle+.5*.016):this.input.throttle=Math.max(0,this.input.throttle-.2*.016);const t=this.keys.arrowup?-1:this.keys.arrowdown?1:0;this.input.pitch=this.lerp(this.input.pitch,t,.1);const e=this.keys.arrowleft?-1:this.keys.arrowright?1:0;this.input.roll=this.lerp(this.input.roll,e,.1);const n=this.keys.a?-1:this.keys.d?1:0;if(this.input.yaw=this.lerp(this.input.yaw,n,.1),this.isMobile&&this.tiltEnabled){let r=0;Math.abs(this.tiltRoll)>3&&(r=Math.max(-1,Math.min(1,(this.tiltRoll-Math.sign(this.tiltRoll)*3)/32)));let o=0;Math.abs(this.tiltPitch)>3&&(o=Math.max(-1,Math.min(1,(this.tiltPitch-Math.sign(this.tiltPitch)*3)/32))),this.input.roll=this.lerp(this.input.roll,r*this.tiltSensitivity,.15),this.input.pitch=this.lerp(this.input.pitch,o*this.tiltSensitivity,.15),Math.abs(r)>.3?this.input.yaw=this.lerp(this.input.yaw,r*.4,.1):this.input.yaw=this.lerp(this.input.yaw,0,.1)}return this.isMobile&&(this.input.throttle=this.touchThrottle,this.input.boost=this.input.boost||this.touchBoosting,this.input.turbo=this.input.turbo||this.touchTurbo,this.input.flap=this.input.flap||this.touchFlapping,this.touchFlapping&&(this.input.throttle=Math.min(1,this.input.throttle+.5*.016)),this.input.fire=this.input.fire||this.touchFiring,this.input.fireFlare=this.input.fireFlare||this.touchFlare,this.touchWeaponToggle&&!this.touchPrevWeaponToggle&&(this.input.toggleWeapon=!0),this.touchPrevWeaponToggle=this.touchWeaponToggle,this.touchWeaponToggle=!1,this.touchCameraDragging&&(this.input.isDragging=!0,this.input.cameraYaw+=this.touchCameraDeltaX*this.sensitivity,this.input.cameraPitch-=this.touchCameraDeltaY*this.sensitivity,this.input.cameraPitch=Math.max(-85,Math.min(85,this.input.cameraPitch)),this.touchCameraDeltaX=0,this.touchCameraDeltaY=0)),this.mouseDragging?(this.input.cameraYaw+=this.mouseDeltaX*this.sensitivity,this.input.cameraPitch-=this.mouseDeltaY*this.sensitivity,this.input.cameraPitch=Math.max(-85,Math.min(85,this.input.cameraPitch)),this.mouseDeltaX=0,this.mouseDeltaY=0):this.touchCameraDragging||(this.input.cameraYaw=this.lerp(this.input.cameraYaw,0,.1),this.input.cameraPitch=this.lerp(this.input.cameraPitch,0,.1)),this.prevKeys={...this.keys},this.input}reset(){this.input.cameraYaw=0,this.input.cameraPitch=0,this.mouseDragging=!1,this.mouseDeltaX=0,this.mouseDeltaY=0,this.input.throttle=0,this.input.pitch=0,this.input.roll=0,this.input.yaw=0,this.touchThrottle=0,this.touchBoosting=!1,this.touchFiring=!1,this.touchFlare=!1}lerp(t,e,n){return(1-n)*t+n*e}}function jx(){const i=new De,t=new Ut({color:1969924}),e=new Ut({color:1378304,side:Le}),n=new Ut({color:16315628}),s=new Ut({color:15245312}),a=new Ut({color:15789536,side:Le}),r=new Ut({color:15245312}),o=new Ut({color:656384,side:Le}),l=new Ut({color:2760720}),c=new Ut({color:13410304}),h=new Ue({color:0});var u,d;u=new ee(1,8,6),u.scale(.09,.06,.22),i.add(new nt(u,t)),u=new ee(1,6,5),u.scale(.07,.05,.14),d=new nt(u,new Ut({color:3876117})),d.position.set(0,-.015,.03),i.add(d),d=new nt(new Ze(.025,.035,.04,6),n),d.position.set(0,.025,.16),d.rotation.x=-.2,i.add(d),u=new ee(.04,8,6),u.scale(1,.9,1.1),d=new nt(u,n),d.position.set(0,.045,.2),i.add(d),d=new nt(new ce(.05,.008,.02),n),d.position.set(0,.06,.22),i.add(d),d=new nt(new Je(.012,.045,4),s),d.position.set(0,.038,.245),d.rotation.x=1.3,i.add(d),d=new nt(new Je(.007,.02,3),s),d.position.set(0,.028,.24),d.rotation.x=1.7,i.add(d),[-1,1].forEach(function(w){d=new nt(new ee(.012,5,4),l),d.position.set(w*.028,.05,.22),i.add(d),d=new nt(new ee(.009,5,4),c),d.position.set(w*.029,.051,.224),i.add(d),d=new nt(new ee(.005,4,3),h),d.position.set(w*.031,.051,.228),i.add(d)});function p(w){var y=w?1:-1,A=new De;A.position.set(0,.012,.01);for(var P=[[.08,.16,.18],[.2,.14,.17],[.31,.13,.15],[.41,.12,.13],[.5,.1,.11],[.58,.09,.09],[.65,.08,.07]],T=0;T<P.length;T++){var D=P[T];d=new nt(new ce(D[1],.006,D[2]),e),d.position.set(y*D[0],.003-T*.001,0),A.add(d),d=new nt(new ce(D[1]*.95,.004,D[2]*.9),new Ut({color:2759178,side:Le})),d.position.set(y*D[0],-.002-T*.001,0),A.add(d)}var M=new De;M.position.set(y*.5,0,-.01);for(var S=[],v=0;v<5;v++){var C=.13-v*.012;d=new nt(new ce(C,.003,.016-v*.002),o),d.position.set(y*(.22+C/2),-.002,-.01+v*.012),d.rotation.y=y*(v-2)*.04,M.add(d),S.push(d)}return A.add(M),{pivot:A,elbow:M,primaries:S}}var g=p(!0),x=p(!1);i.add(g.pivot),i.add(x.pivot);var m=new De;m.position.set(0,.005,-.19);for(var f=0;f<9;f++){var b=(f-4)*.06;d=new nt(new ce(.025,.004,.13),a),d.position.set(Math.sin(b)*.012,0,-.065),d.rotation.y=b,m.add(d)}return d=new nt(new ce(.07,.018,.06),t),d.position.set(0,.004,.02),m.add(d),i.add(m),[-1,1].forEach(function(w){d=new nt(new Ze(.012,.008,.04,4),t),d.position.set(w*.025,-.04,-.05),d.rotation.x=.5,i.add(d),d=new nt(new Ze(.004,.005,.04,4),r),d.position.set(w*.025,-.07,-.06),i.add(d)}),i.rotation.y=Math.PI,i.userData={leftShoulder:g.pivot,rightShoulder:x.pivot,leftElbow:g.elbow,rightElbow:x.elbow,leftPrimaries:g.primaries,rightPrimaries:x.primaries,tailPivot:m,flapPhase:0,smoothRoll:0,smoothPitch:0,smoothYaw:0},i}function Qx(i,t,e){if(!i||!i.userData||!i.userData.leftShoulder)return;var n=i.userData,s=n.leftShoulder,a=n.rightShoulder,r=n.leftElbow,o=n.rightElbow,l=n.tailPivot,c=n.leftPrimaries,h=n.rightPrimaries,u=e.isFlapping||!1,d=e.flapStrength||0,p=e.isGliding||!1,g=e.isBoosting||!1,x=e.isTurbo||!1,m=e.speed||15;function f(k,q,ot){return k+(q-k)*Math.min(1,ot)}n.smoothRoll=f(n.smoothRoll,e.roll||0,t*4),n.smoothPitch=f(n.smoothPitch,e.pitch||0,t*3),n.smoothYaw=f(n.smoothYaw,e.yaw||0,t*4);var b=n.smoothRoll/45,w=b*.12,y=-b*.12,A=n.smoothPitch/30,P=A*.06,T=n.smoothYaw;if(x)s.rotation.z=f(s.rotation.z,-.7+w,t*8),a.rotation.z=f(a.rotation.z,.7+y,t*8),r.rotation.z=f(r.rotation.z,-.4,t*6),o.rotation.z=f(o.rotation.z,.4,t*6),l&&(l.rotation.x=f(l.rotation.x,-.1,t*5));else if(g)s.rotation.z=f(s.rotation.z,-.6+w,t*7),a.rotation.z=f(a.rotation.z,.6+y,t*7),r.rotation.z=f(r.rotation.z,-.35,t*5),o.rotation.z=f(o.rotation.z,.35,t*5),l&&(l.rotation.x=f(l.rotation.x,.15,t*4));else if(u&&d>0){n.flapPhase+=t*8;var D=n.flapPhase%(Math.PI*2),M=Math.sin(D)*.55*d,S=Math.sin(D+.35)*.22*d,v=Math.cos(D)*.1*d;s.rotation.z=M+w,a.rotation.z=-M+y,r.rotation.z=S,o.rotation.z=-S,s.rotation.y=v+P,a.rotation.y=-v-P,l&&(l.rotation.x=Math.sin(D+1)*.06,l.rotation.y=T*.08)}else if(p){var C=.08+Math.sin(performance.now()*5e-4)*.015;s.rotation.z=f(s.rotation.z,C+w,t*3),a.rotation.z=f(a.rotation.z,-C+y,t*3),r.rotation.z=f(r.rotation.z,.02,t*3),o.rotation.z=f(o.rotation.z,-.02,t*3),s.rotation.y=f(s.rotation.y,P,t*2.5),a.rotation.y=f(a.rotation.y,-P,t*2.5),l&&(l.rotation.x=f(l.rotation.x,A*.06,t*3),l.rotation.y=f(l.rotation.y,T*.1,t*3)),n.flapPhase=0}else s.rotation.z=f(s.rotation.z,.05+w,t*4),a.rotation.z=f(a.rotation.z,-.05+y,t*4),r.rotation.z=f(r.rotation.z,0,t*4),o.rotation.z=f(o.rotation.z,0,t*4);var L=Math.min(1,m/50),N=(1-L)*.06;if(c&&h)for(var U=0;U<5;U++){var H=N*(U-2);c[U]&&(c[U].rotation.y=f(c[U].rotation.y,H,t*3)),h[U]&&(h[U].rotation.y=f(h[U].rotation.y,-H,t*3))}}function Si(i,t,e,n,s,a){const r=Cesium.Math.toRadians(n),o=Cesium.Math.toRadians(s),l=6371e3,c=a*Math.cos(r)*Math.cos(o)/l,h=a*Math.sin(r)*Math.cos(o)/(l*Math.cos(Cesium.Math.toRadians(t))),u=a*Math.sin(o);return{lon:i+Cesium.Math.toDegrees(h),lat:t+Cesium.Math.toDegrees(c),alt:e+u}}async function su(i,t){try{const n=await(await fetch(`https://nominatim.openstreetmap.org/reverse?format=json&lat=${t}&lon=${i}&zoom=5&addressdetails=1`)).json();if(n&&n.address){const s=n.address,a=s.state||s.region||s.province,r=s.country;if(a&&r)return`${a}, ${r}`.toUpperCase();if(r)return r.toUpperCase()}}catch(e){console.error("Reverse geocoding error:",e)}return null}function au(i,t,e,n){const a=t*Math.PI/180,r=n*Math.PI/180,o=(n-t)*Math.PI/180,l=(e-i)*Math.PI/180,c=Math.sin(o/2)*Math.sin(o/2)+Math.cos(a)*Math.cos(r)*Math.sin(l/2)*Math.sin(l/2);return 6371e3*(2*Math.atan2(Math.sqrt(c),Math.sqrt(1-c)))}class t_{constructor(){this.speedElem=document.getElementById("speed"),this.altElem=document.getElementById("altitude"),this.timeElem=document.getElementById("time"),this.scoreElem=document.getElementById("score"),this.fpsElem=document.getElementById("fps"),this.localDateTimeElem=document.getElementById("local-datetime"),this.coordsElem=document.getElementById("coords"),this.minimapCanvas=document.getElementById("minimap"),this.miniCtx=this.minimapCanvas.getContext("2d"),this.pauseMinimapCanvas=document.getElementById("pauseMinimap"),this.pauseMinimapCanvas&&(this.pauseMiniCtx=this.pauseMinimapCanvas.getContext("2d")),this.pauseRegionElem=document.getElementById("pause-region"),this.pauseLatElem=document.getElementById("pause-lat"),this.pauseLonElem=document.getElementById("pause-lon"),this.pauseAltElem=document.getElementById("pause-alt"),this.pauseTimeElem=document.getElementById("pause-time"),this.uiContainer=document.getElementById("uiContainer"),this.compassTape=document.getElementById("compass-tape"),this.headingDisplay=document.getElementById("heading-display"),this.regionNotif=document.getElementById("region-notification"),this.regionNameElem=document.getElementById("region-name"),this.regionTimeout=null,this.pullUpElem=document.getElementById("pull-up-warning"),this.flightModeElem=document.getElementById("flight-mode-indicator"),this.thermalIndicator=document.getElementById("thermal-indicator"),this.wingSpreadBar=document.getElementById("wing-spread-bar"),this.liftValueElem=document.getElementById("lift-value"),this.vspeedValueElem=document.getElementById("vspeed-value"),this.weatherConditionElem=document.getElementById("weather-condition"),this.weatherWindElem=document.getElementById("weather-wind"),this.killNotifContainer=document.getElementById("kill-notification-container"),this.killTextElem=document.getElementById("kill-text"),this.killScoreElem=document.getElementById("kill-score"),this.killTimeout=null,this.weaponElems={gun:document.getElementById("weapon-gun"),missile:document.getElementById("weapon-missile"),flare:document.getElementById("weapon-flare")},this.weaponAmmoElems={gun:this.weaponElems.gun.querySelector(".weapon-ammo"),missile:this.weaponElems.missile.querySelector(".weapon-ammo"),flare:this.weaponElems.flare.querySelector(".weapon-ammo")},this.weaponProgressElems={gun:this.weaponElems.gun.querySelector(".weapon-progress"),missile:this.weaponElems.missile.querySelector(".weapon-progress"),flare:this.weaponElems.flare.querySelector(".weapon-progress")},this.vignette=document.getElementById("transition-vignette"),this.startTime=Date.now(),this.smoothedPitch=0,this.smoothedRoll=0,this.smoothedHeading=0,this.smoothedThrottle=0,this.smoothedYaw=0,this.smoothedBoostScale=1,this.currentShakeX=0,this.currentShakeY=0,this.minimapRange=1,this.showHorizonLines=!1,this.npcMarkers=new Map,this.npcContainer=document.createElement("div"),this.npcContainer.id="npc-markers-layer",this.npcContainer.style.cssText="position:absolute; top:0; left:0; width:100%; height:100%; pointer-events:none; z-index:15;",this.uiContainer.appendChild(this.npcContainer),this.createHorizon(),this.createMissileCrosshair(),this.createCompass(),this.resizeMinimap(),window.addEventListener("resize",()=>this.resizeMinimap())}createMissileCrosshair(){if(document.getElementById("missile-crosshair"))return;const t=document.createElement("div");t.id="missile-crosshair",t.style.cssText=`
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
		`;const n=document.createElement("div");n.style.cssText="position:absolute; left:50%; top:50%; transform:translate(-50%,-50%); width:10px; height:10px; border-radius:50%; background:#d4a017;";const s=(u,d,p,g,x)=>{const m=document.createElement("div");return m.style.cssText=`position:absolute; left:${u}; top:${d}; width:${p}; height:${g}; background:#d4a017; transform:${x};`,m},a=48,r=18,o=s("calc(50% - "+a+"px - "+r/2+"px)","50%","18px","2px","translateY(-50%)"),l=s("calc(50% + "+a+"px - "+r/2+"px)","50%","18px","2px","translateY(-50%)"),c=s("50%","calc(50% - "+a+"px - "+r/2+"px)","2px",r+"px","translateX(-50%)");t.appendChild(e),t.appendChild(n),t.appendChild(c),t.appendChild(o),t.appendChild(l);const h=document.getElementById("horizon-container");h?h.appendChild(t):this.uiContainer.appendChild(t),this.missileCrosshair=t}showMissileCrosshair(t){if(!this.missileCrosshair)return;const e=document.getElementById("normal-crosshair");t?(e&&(e.style.display="none"),this.missileCrosshair.style.display="block"):(this.missileCrosshair.style.display="none",e&&(e.style.display="flex"))}createCompass(){if(!this.compassTape)return;const t=5,e=4;this.compassTape.innerHTML="";for(let n=-360;n<=720;n+=t){const s=document.createElement("div");s.className="compass-tick";const a=n%10===0;if(s.style.left=`${(n+360)*e}px`,s.style.height=a?"10px":"5px",a){const r=document.createElement("div");r.className="compass-label",r.style.left=`${(n+360)*e}px`;let o=n%360;o<0&&(o+=360);let l=Math.round(o).toString().padStart(3,"0");Math.round(o)===0||Math.round(o)===360?l="N":Math.round(o)===90?l="E":Math.round(o)===180?l="S":Math.round(o)===270&&(l="W"),r.innerText=l,this.compassTape.appendChild(r)}this.compassTape.appendChild(s)}}resetTime(){this.startTime=Date.now()}setMinimapRange(t){this.minimapRange=t}setShowHorizonLines(t){this.showHorizonLines=t;const e=document.getElementById("pitch-lines");e&&(e.style.display=t?"block":"none")}showKillNotification(t,e){if(this.killTimeout&&clearTimeout(this.killTimeout),this.killNotifContainer){this.killNotifContainer.classList.remove("hidden"),this.killNotifContainer.classList.remove("kill-notification-exit");const n=`${t} CAUGHT!`,s="ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*()";let a=0;this.glitchInterval&&clearInterval(this.glitchInterval),this.glitchInterval=setInterval(()=>{if(this.killTextElem){const r=Math.floor(a),o=n.split("").map((c,h)=>h<r?n[h]:h===r?s[Math.floor(Math.random()*s.length)]:"").join(""),l=r<n.length?Math.random()>.5?"_":" ":"";this.killTextElem.innerText=o+l}a>=n.length&&(this.killTextElem&&(this.killTextElem.innerText=n),clearInterval(this.glitchInterval)),a+=1},40),this.killScoreElem&&(this.killScoreElem.innerText=`+${e}`),this.killNotifContainer.style.animation="none",this.killNotifContainer.offsetHeight,this.killNotifContainer.style.animation=null,this.killTimeout=setTimeout(()=>{this.killNotifContainer.classList.add("kill-notification-exit"),setTimeout(()=>{this.killNotifContainer.classList.add("hidden"),this.killNotifContainer.classList.remove("kill-notification-exit")},500),this.glitchInterval&&clearInterval(this.glitchInterval)},3e3)}}showRegion(t){this.regionTimeout&&clearTimeout(this.regionTimeout),this.regionNameElem.innerText=t,this.regionNotif.classList.remove("hidden"),this.regionNotif.classList.remove("region-exit"),this.regionTimeout=setTimeout(()=>{this.regionNotif.classList.add("region-exit"),this.regionTimeout=setTimeout(()=>{this.regionNotif.classList.add("hidden"),this.regionTimeout=null},1e3)},4e3)}updateEagleStatus(t){if(this.flightModeElem){let e="SOARING",n="";t.isTurbo||t.turboWindup>.1?(e=`TURBO ${Math.round(t.speed)} KTS`,n="turbo"):t.isBoosting?(e="DIVING",n="diving"):t.isFlapping?(e="FLAPPING",n="flapping"):t.isGliding?(e="GLIDING",n="gliding"):t.inThermal&&(e="RIDING THERMAL",n="thermal"),this.flightModeElem.textContent=e,this.flightModeElem.className=n}if(this.thermalIndicator)if(t.inThermal){this.thermalIndicator.classList.remove("hidden");const e=Math.round((t.thermalStrength||0)*100);this.thermalIndicator.textContent=`THERMAL ${e}%`}else this.thermalIndicator.classList.add("hidden");if(this.wingSpreadBar){const e=(t.wingSpread||1)*100;this.wingSpreadBar.style.width=`${e}%`}if(this.liftValueElem){const e=t.liftForce||0;this.liftValueElem.textContent=e.toFixed(1)}if(this.vspeedValueElem){const e=t.verticalSpeed||0,n=Math.round(e*196.85);this.vspeedValueElem.textContent=`${n>0?"+":""}${n}`,this.vspeedValueElem.className=n>10?"climbing":n<-10?"descending":""}}updateWeatherDisplay(t){if(t.weatherConditions){const e=t.weatherConditions;this.weatherConditionElem&&(this.weatherConditionElem.textContent=`${e.daypartName} | ${e.weatherName}`),this.weatherWindElem&&(this.weatherWindElem.textContent=`WIND ${e.windSpeed}kt ${e.windDirection}°`)}}setPullUpWarning(t){this.pullUpElem&&(t?this.pullUpElem.classList.remove("hidden"):this.pullUpElem.classList.add("hidden"))}resizeMinimap(){requestAnimationFrame(()=>{this.minimapCanvas.width=this.minimapCanvas.offsetWidth,this.minimapCanvas.height=this.minimapCanvas.offsetHeight,this.pauseMinimapCanvas&&(this.pauseMinimapCanvas.width=this.pauseMinimapCanvas.offsetWidth,this.pauseMinimapCanvas.height=this.pauseMinimapCanvas.offsetHeight);const t=$x();t&&t.resize();const e=Kx();e&&e.resize()})}createHorizon(){if(!document.getElementById("horizon-container")){const t=document.getElementById("uiContainer"),e=document.createElement("div");e.id="horizon-container",e.style.cssText=`
				position: absolute;
				top: 50%;
				left: 50%;
				width: 600px;
				height: 600px;
				transform: translate(-50%, -50%);
				pointer-events: none;
				overflow: hidden;
			`;const n=document.createElement("div");n.id="normal-crosshair",n.style.cssText="position:absolute; top:50%; left:50%; width:120px; height:48px; transform:translate(-50%,-50%); pointer-events:none;";const s=document.createElement("div");s.style.cssText="position:absolute; left:50%; top:50%; width:12px; height:12px; transform:translate(-50%,-50%); border-radius:50%; border:2px solid #d4a017; background:transparent;";const a=document.createElement("div");a.style.cssText="position:absolute; top:50%; left:calc(50% - 6px - 20px); width:20px; height:2px; transform:translateY(-50%); background:#d4a017;";const r=document.createElement("div");r.style.cssText="position:absolute; top:50%; left:calc(50% + 6px); width:20px; height:2px; transform:translateY(-50%); background:#d4a017;";const o=document.createElement("div");o.style.cssText="position:absolute; left:50%; top:calc(50% - 6px - 12px); width:2px; height:12px; transform:translateX(-50%); background:#d4a017;",n.appendChild(a),n.appendChild(r),n.appendChild(s),n.appendChild(o),e.appendChild(n);const l=document.createElement("div");l.id="pitch-lines",l.style.cssText=`
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
				`,h.innerText=c,l.appendChild(h)}e.appendChild(l),t.appendChild(e),this.setShowHorizonLines(this.showHorizonLines)}}updatePauseMenu(t,e,n=[]){if(this.pauseRegionElem&&(this.pauseRegionElem.innerText=e||"UNKNOWN REGION"),this.pauseLatElem){const g=t.lat>=0?"N":"S";this.pauseLatElem.innerText=`${Math.abs(t.lat).toFixed(4)}°${g}`}if(this.pauseLonElem){const g=t.lon>=0?"E":"W";this.pauseLonElem.innerText=`${Math.abs(t.lon).toFixed(4)}°${g}`}if(this.pauseAltElem){const g=Math.max(0,Math.round(t.alt*3.28084));this.pauseAltElem.innerText=`${g.toLocaleString()} FT`}if(this.pauseTimeElem){const g=new Date,x=g.getTime()+g.getTimezoneOffset()*6e4,m=Math.round((t.lon||0)/15),f=new Date(x+36e5*m),b=f.getFullYear(),w=(f.getMonth()+1).toString().padStart(2,"0"),y=f.getDate().toString().padStart(2,"0"),A=f.getHours().toString().padStart(2,"0"),P=f.getMinutes().toString().padStart(2,"0"),T=f.getSeconds().toString().padStart(2,"0");this.pauseTimeElem.innerText=`${b}-${w}-${y}T${A}:${P}:${T}Z`}const s=this.minimapRange*1e4;if(Zx(t.lon,t.lat,s,0),!this.pauseMiniCtx||!this.pauseMinimapCanvas)return;const a=this.pauseMiniCtx,r=this.pauseMinimapCanvas.width,o=this.pauseMinimapCanvas.height,l=r/2,c=o/2;a.clearRect(0,0,r,o),a.strokeStyle="rgba(212, 160, 23, 0.2)",a.lineWidth=1;const h=50;a.beginPath();for(let g=l;g<=r;g+=h)a.moveTo(g,0),a.lineTo(g,o);for(let g=l-h;g>=0;g-=h)a.moveTo(g,0),a.lineTo(g,o);for(let g=c;g<=o;g+=h)a.moveTo(0,g),a.lineTo(r,g);for(let g=c-h;g>=0;g-=h)a.moveTo(0,g),a.lineTo(r,g);a.stroke(),a.strokeStyle="#d4a017",a.lineWidth=2;const u=15;a.beginPath(),a.moveTo(l-u,c),a.lineTo(l+u,c),a.moveTo(l,c-u),a.lineTo(l,c+u),a.stroke(),a.fillStyle="#d4a017",a.font="12px AceCombat",a.fillText("SHADOW",l+20,c+5);const d=s*1.1547,p=o/d;n.forEach(g=>{const x=(g.lon-t.lon)*111320*Math.cos(t.lat*Math.PI/180),m=(g.lat-t.lat)*111320,f=l+x*p,b=c-m*p;f<0||f>r||b<0||b>o||(a.strokeStyle="#fff",a.lineWidth=2,a.save(),a.translate(f,b),a.rotate(45*Math.PI/180),a.beginPath(),a.rect(-5,-5,10,10),a.stroke(),a.restore(),a.fillStyle="#fff",a.font="10px AceCombat",a.fillText(g.name||"PREY",f+10,b+5))})}update(t,e=[]){const s=(C,L,N)=>{let U=L-C;for(;U<-180;)U+=360;for(;U>180;)U-=360;return C+U*N},a=(C,L)=>{let N=C-L;for(;N<-180;)N+=360;for(;N>180;)N-=360;return N},r=C=>{for(;C<=-180;)C+=360;for(;C>180;)C-=360;return C};this.smoothedPitch=s(this.smoothedPitch,t.pitch,.5),this.smoothedRoll=s(this.smoothedRoll,t.roll,.5),this.smoothedHeading=s(this.smoothedHeading,t.heading||0,.5),this.smoothedThrottle=this.smoothedThrottle+((t.throttle||0)-this.smoothedThrottle)*(.5*.4),this.smoothedYaw=this.smoothedYaw+((t.yaw||0)-this.smoothedYaw)*.5,this.smoothedPitch=r(this.smoothedPitch),this.smoothedRoll=r(this.smoothedRoll),this.smoothedHeading=r(this.smoothedHeading);const o=this.minimapRange*1500,l=this.minimapRange*2;let c=o+t.speed*l;t.isBoosting&&(c*=1.2),t.isTurbo&&(c*=3),this.currentZoom=c,qx(t.lon,t.lat,c,this.smoothedHeading);const h=t.isBoosting||!1,u=t.isTurbo||!1;this.vignette&&(this.vignette.style.opacity=h||u?"1":"0");const d=a(t.pitch,this.smoothedPitch),p=a(t.roll,this.smoothedRoll),g=(t.yaw||0)-this.smoothedYaw,x=(t.throttle||0)-this.smoothedThrottle;if(this.uiContainer){const L=Math.max(-15,Math.min(15,d*.8)),N=Math.max(-15,Math.min(15,-p*.3+g*5)),U=50,H=Math.max(-U,Math.min(U,-p*1.5-g*20)),k=Math.max(-U,Math.min(U,d*3+x*15)),q=u?1.04:h?1.02:1;this.smoothedBoostScale=this.smoothedBoostScale+(q-this.smoothedBoostScale)*.1;const ot=(1+x*.25)*this.smoothedBoostScale;if(u){const tt=Date.now()*.06;this.currentShakeX=Math.sin(tt*2)*3+Math.cos(tt*3.1)*2,this.currentShakeY=Math.cos(tt*2.3)*3+Math.sin(tt*3.5)*2}else if(h){const tt=Date.now()*.05;this.currentShakeX=Math.sin(tt*1.5)*2+Math.cos(tt*2.1)*1.5,this.currentShakeY=Math.cos(tt*1.7)*2+Math.sin(tt*2.3)*1.5}else this.currentShakeX*=.85,this.currentShakeY*=.85;this.uiContainer.style.transform=`perspective(1000px) rotateX(${L}deg) rotateY(${N}deg) translate(${H+this.currentShakeX}px, ${k+this.currentShakeY}px) scale(${ot})`}this.speedElem.innerText=Math.round(t.speed).toString().padStart(3,"0"),this.updateEagleStatus(t),this.updateWeatherDisplay(t),t.weaponSystem&&this.updateWeapons(t.weaponSystem);let m=this.smoothedHeading;for(;m<0;)m+=360;for(;m>=360;)m-=360;if(this.headingDisplay){let C=Math.round(m);C===360&&(C=0);let L="";C>=337.5||C<22.5?L="N":C>=22.5&&C<67.5?L="NE":C>=67.5&&C<112.5?L="E":C>=112.5&&C<157.5?L="SE":C>=157.5&&C<202.5?L="S":C>=202.5&&C<247.5?L="SW":C>=247.5&&C<292.5?L="W":C>=292.5&&C<337.5&&(L="NW"),this.headingDisplay.innerText=`${C.toString().padStart(3,"0")} ${L}`}if(this.compassTape){const U=160-(m+360)*4;this.compassTape.style.transform=`translateX(${U}px)`}const f=Math.max(0,Math.round(t.alt*3.28084));this.altElem.innerText=f.toString().padStart(5,"0"),this.scoreElem&&(this.scoreElem.innerText=(t.score||0).toString().padStart(6,"0"));const b=Date.now()-this.startTime,w=Math.floor(b/6e4),y=Math.floor(b%6e4/1e3),A=Math.floor(b%1e3/10);this.timeElem.innerText=`${w.toString().padStart(2,"0")}:${y.toString().padStart(2,"0")}:${A.toString().padStart(2,"0")}`;const P=new Date,T=P.getTime()+P.getTimezoneOffset()*6e4,D=Math.round((t.lon||0)/15),M=new Date(T+36e5*D);if(this.localDateTimeElem){const C=M.getFullYear(),L=(M.getMonth()+1).toString().padStart(2,"0"),N=M.getDate().toString().padStart(2,"0"),U=M.getHours().toString().padStart(2,"0"),H=M.getMinutes().toString().padStart(2,"0"),k=M.getSeconds().toString().padStart(2,"0");this.localDateTimeElem.innerText=`${C}-${L}-${N}T${U}:${H}:${k}Z`}if(this.coordsElem){const C=t.lat>=0?"N":"S",L=t.lon>=0?"E":"W";this.coordsElem.innerText=`POS: ${Math.abs(t.lat).toFixed(4)}°${C} ${Math.abs(t.lon).toFixed(4)}°${L}`}const S=document.getElementById("pitch-lines"),v=document.getElementById("horizon-container");S&&v&&(v.style.transform=`translate(-50%, -50%) rotate(${-this.smoothedRoll}deg)`,S.style.transform=`translateY(${this.smoothedPitch*6}px)`),this.drawMinimap(t,e),this.updateNPCMarkers(e,t)}drawMinimap(t,e=[]){if(!this.miniCtx||!this.minimapCanvas)return;const n=this.miniCtx,s=this.minimapCanvas.width||250,a=this.minimapCanvas.height||250,r=s/2,o=a/2,l=Math.min(r,o)-10;n.clearRect(0,0,s,a),n.save(),n.translate(r,o);const c=this.smoothedHeading;n.rotate(-c*Math.PI/180),n.strokeStyle="rgba(212, 160, 23, 0.35)",n.lineWidth=1;const h=this.minimapRange*1e3,u=(this.currentZoom||this.minimapRange*1500)*1.1547,d=h*a/u,p=a/u,g=Math.min(1e4*p,l),x=l*2;for(let T=0;T<=x;T+=d)n.beginPath(),n.moveTo(T,-x),n.lineTo(T,x),n.stroke(),T>0&&(n.beginPath(),n.moveTo(-T,-x),n.lineTo(-T,x),n.stroke());for(let T=0;T<=x;T+=d)n.beginPath(),n.moveTo(-x,T),n.lineTo(x,T),n.stroke(),T>0&&(n.beginPath(),n.moveTo(-x,-T),n.lineTo(x,-T),n.stroke());e.forEach(T=>{if(au(t.lon,t.lat,T.lon,T.lat)>this.minimapRange*5e3)return;const M=(T.lon-t.lon)*111320*Math.cos(t.lat*Math.PI/180),S=(T.lat-t.lat)*111320,v=M*p,C=-S*p;Math.sqrt(v*v+C*C)>l-5||(n.save(),n.translate(v,C),n.rotate(T.heading*Math.PI/180),n.fillStyle="#fff",n.shadowBlur=0,n.beginPath(),n.moveTo(0,-8),n.lineTo(6,6),n.lineTo(0,3),n.lineTo(-6,6),n.closePath(),n.fill(),n.restore())}),n.restore();const m=12,f=r-m,b=o-m;n.strokeStyle="rgba(212, 160, 23, 0.7)",n.lineWidth=1.2,n.beginPath(),n.moveTo(0,o),n.lineTo(s,o),n.moveTo(r,0),n.lineTo(r,a);const w=we();let y=Math.PI/4;if(w&&w.camera&&w.camera.frustum){const T=w.camera.frustum.fovy,D=window.innerWidth/window.innerHeight;y=Math.atan(Math.tan(T/2)*D)}const A=s+a;n.moveTo(r,o),n.lineTo(r-Math.sin(y)*A,o-Math.cos(y)*A),n.moveTo(r,o),n.lineTo(r+Math.sin(y)*A,o-Math.cos(y)*A),n.stroke(),n.fillStyle="#d4a017",n.font=`bold 16px ${getComputedStyle(document.body).fontFamily}`,n.shadowColor="rgba(0, 0, 0, 0.5)",n.shadowBlur=4,n.textAlign="center",n.textBaseline="middle",[{label:"N",angle:0},{label:"E",angle:90},{label:"S",angle:180},{label:"W",angle:270}].forEach(T=>{const D=(T.angle-c)*Math.PI/180,M=Math.sin(D),S=Math.cos(D),v=Math.abs(M),C=Math.abs(S);let L,N;f*C>b*v?(N=S>0?-b:b,L=N*M/-S):(L=M>0?f:-f,N=L*-S/M),n.fillText(T.label,r+L,o+N)}),n.save(),n.translate(r,o),n.fillStyle="#d4a017",n.shadowBlur=0,n.beginPath(),n.moveTo(0,-12),n.lineTo(8,10),n.lineTo(0,5),n.lineTo(-8,10),n.closePath(),n.fill(),n.strokeStyle="rgba(212, 160, 23, 0.7)",n.lineWidth=1.2,n.beginPath(),n.arc(0,0,g,0,Math.PI*2),n.stroke(),n.restore();const P=Date.now()/1500%1;n.strokeStyle=`rgba(212, 160, 23, ${.7*(1-P)})`,n.lineWidth=1.2,n.beginPath(),n.arc(r,o,P*g,0,Math.PI*2),n.stroke()}updateNPCMarkers(t,e){const n=we();if(!n)return;const s=new Set;if(t&&t.length>0){this.npcContainer.style.display="block";const a=n.scene,r=a.camera,o=2e5,l=new Cesium.Cartesian3,c=new Cesium.Cartesian3;t.forEach(h=>{Cesium.Cartesian3.fromDegrees(h.lon,h.lat,h.alt,void 0,l),Cesium.Cartesian3.fromDegrees(e.lon,e.lat,e.alt,void 0,c);const u=Cesium.Cartesian3.distance(l,c);if(u>o)return;const d=h.id||h.name;s.add(d);let p=this.npcMarkers.get(d);p||(p=this.createNPCMarker(h),this.npcMarkers.set(d,p));const g=Cesium.SceneTransforms.worldToWindowCoordinates||Cesium.SceneTransforms.wgs84ToWindowCoordinates,x=g?g(a,l):null,m=Cesium.Cartesian3.subtract(l,r.position,new Cesium.Cartesian3),f=Cesium.Cartesian3.dot(m,r.direction);if(!x||f<=0||x.x<0||x.x>window.innerWidth||x.y<0||x.y>window.innerHeight){const w=Cesium.Cartesian3.dot(m,r.right),y=-Cesium.Cartesian3.dot(m,r.up);this.updateOffScreenMarker(p,w,y,h,u)}else this.updateOnScreenMarker(p,x,h,u,e)})}else this.npcContainer.style.display="none";for(const[a,r]of this.npcMarkers)s.has(a)||(r.container.remove(),this.npcMarkers.delete(a))}createNPCMarker(t){const e=document.createElement("div");e.className="npc-marker-container";const n=document.createElement("div");n.className="npc-visual-wrapper";const s=document.createElement("div");s.className="npc-diamond";const a=document.createElement("div");a.className="npc-lock-box",a.style.display="none";const r=document.createElement("div");r.className="npc-label";const o=document.createElement("div");o.className="npc-offscreen-dot",o.style.display="none";const l=document.createElement("div");return l.className="npc-offscreen-name",l.style.display="none",n.appendChild(s),n.appendChild(a),e.appendChild(n),e.appendChild(r),e.appendChild(o),e.appendChild(l),this.npcContainer.appendChild(e),{container:e,diamond:s,label:r,dot:o,offscreenName:l,lockBox:a}}updateOnScreenMarker(t,e,n,s,a){t.container.style.display="flex",t.container.style.transform=`translate3d(${e.x}px, ${e.y}px, 0) translate(-50%, -50%)`,t.diamond.style.display="block",t.label.style.display="block",t.dot.style.display="none",t.offscreenName.style.display="none";const r=a.weaponSystem;r&&r.lockingTarget===n?(t.lockBox.style.display="block",r.lockStatus==="LOCKED"?(t.lockBox.classList.remove("locking-blink"),t.lockBox.style.borderColor="#d4a017",t.lockBox.innerHTML='<span style="position:absolute; top:-20px; left:50%; transform:translateX(-50%); font-weight:bold; color:#d4a017; font-size:12px; text-shadow: 0 0 8px rgba(212, 160, 23, 0.8);">TARGET</span>'):r.lockStatus==="LOCKING"&&(t.lockBox.classList.add("locking-blink"),t.lockBox.style.borderColor="#d4a017",t.lockBox.innerHTML="")):(t.lockBox.style.display="none",t.lockBox.innerHTML="");const o=(s/1e3).toFixed(1),l=`${n.name}
${o} KM`;t.label.innerText!==l&&(t.label.innerText=l)}updateOffScreenMarker(t,e,n,s,a){t.container.style.display="flex",t.diamond.style.display="none",t.label.style.display="none",t.dot.style.display="block",t.offscreenName.style.display="block";const r=window.innerWidth/2,o=window.innerHeight/2;Math.abs(e)<1e-4&&Math.abs(n)<1e-4&&(n=-1);const l=Math.atan2(n,e),c=40,h=r-c,u=o-c,d=Math.cos(l),p=Math.sin(l);let g,x;Math.abs(h*p)>Math.abs(u*d)?(x=u*Math.sign(p),g=x*d/p):(g=h*Math.sign(d),x=g*p/d);const m=r+g,f=o+x;t.container.style.transform=`translate3d(${m}px, ${f}px, 0) translate(-50%, -50%)`,t.offscreenName.innerText!==s.name&&(t.offscreenName.innerText=s.name),t.lockBox&&(t.lockBox.style.display="none",t.lockBox.innerHTML="")}updateFPS(t){this.fpsElem&&(this.fpsElem.innerText=Math.round(t).toString())}updateWeapons(t){const e=t.getCurrentWeapon(),n=performance.now()*.001,s=!!e&&(e.id==="missile"||e.id==="aim-9"||e.name&&e.name.toLowerCase().includes("aim-9"));this.showMissileCrosshair(s),["gun","missile","flare"].forEach(a=>{const r=this.weaponElems[a],o=this.weaponAmmoElems[a],l=this.weaponProgressElems[a],h=(a==="flare"?t.flareWeapon:t.weapons.find(u=>u.id===a&&(a!=="missile"||u===e)))||(a==="flare"?t.flareWeapon:t.weapons.find(u=>u.id===a));if(r){const u=t.emptyWarningTimers&&t.emptyWarningTimers[a]>0,d=e&&e.id===a||a==="flare"&&n-t.flareWeapon.lastFire<1||u,p=a==="gun"&&t.isGunOverheated;if(d?r.classList.add("active"):r.classList.remove("active"),p||u?r.classList.add("overheated"):r.classList.remove("overheated"),d&&a==="missile"&&h){const g=r.querySelector(".weapon-name");g&&(g.innerText=h.name)}}if(l&&h){let u=0;if(a==="gun")u=t.gunHeat*100;else{const d=n-h.lastFire,p=a==="flare"?1:h.fireRate;d<p?u=d/p*100:u=0}l.style.width=`${u}%`}o&&h&&(a==="gun"&&t.isGunOverheated?o.innerText="OVERHEAT":h.ammo===1/0?o.innerText="INF":o.innerText=h.ammo.toString().padStart(2,"0"))})}}const ii={scene:null,viewer:null,list:[],_scratchMatrix:new Cesium.Matrix4,_scratchCameraMatrix:new Cesium.Matrix4,_scratchThreeMatrix:new jt,init(i,t){this.scene=i,this.viewer=t},spawnExplosion(i,t,e,n={}){const s=!!n.big,a=n.count||(s?64:36),r=s?6:3,o=new ee(r,12,10),l=new Ue({color:16777215,blending:wn,transparent:!0,opacity:1}),c=new nt(o,l);c.life=.18+Math.random()*.12,c.maxLife=c.life,c.lon=i,c.lat=t,c.alt=e,c.isSmoke=!1,c._expand=!0,c._expandAmount=s?5:3,c.matrixAutoUpdate=!1,this.scene.add(c),this.list.push(c);for(let d=0;d<a;d++){const p=(s?.6:.35)+Math.random()*(s?2.4:.9),g=new ee(p,8,6),x=new Ot().setHSL(.08-Math.random()*.05,1,.5+Math.random()*.2),m=new Ue({color:x,blending:wn,transparent:!0,opacity:1}),f=new nt(g,m);f.life=(s?.9:.6)+Math.random()*(s?1.4:.8),f.maxLife=f.life,f.lon=i,f.lat=t,f.alt=e;const b=Math.random()*Math.PI*2,w=(Math.random()*120-60)*(Math.PI/180),y=(s?18:10)+Math.random()*(s?60:36);f._localVel={east:Math.sin(b)*Math.cos(w)*y,north:Math.cos(b)*Math.cos(w)*y,up:Math.sin(w)*y},f.isSmoke=!1,f._expand=!0,f._expandAmount=s?2.8:1.8,f.matrixAutoUpdate=!1,this.scene.add(f),this.list.push(f)}const h=s?32:18;for(let d=0;d<h;d++){const p=new ee(.06+Math.random()*.14,6,6),g=new Ue({color:16777164,blending:wn,transparent:!0}),x=new nt(p,g);x.life=.18+Math.random()*.36,x.maxLife=x.life,x.lon=i,x.lat=t,x.alt=e;const m=Math.random()*Math.PI*2,f=(Math.random()*120-60)*(Math.PI/180),b=(s?36:18)+Math.random()*(s?120:60);x._localVel={east:Math.sin(m)*Math.cos(f)*b,north:Math.cos(m)*Math.cos(f)*b,up:Math.sin(f)*b},x.isSmoke=!1,x._expand=!0,x._expandAmount=.6,x.matrixAutoUpdate=!1,this.scene.add(x),this.list.push(x)}const u=typeof n.smokeCount<"u"?n.smokeCount:s?8:5;for(let d=0;d<u;d++){const p=(s?3:1.8)+Math.random()*(s?4:1.6),g=new ee(p,12,10),x=.08+Math.random()*.3,m=new Ue({color:new Ot(x,x,x),transparent:!0,opacity:.75}),f=new nt(g,m);f.life=(s?1:.6)+Math.random()*(s?1.2:.6),f.maxLife=f.life,f.lon=i+(Math.random()-.5)*18e-5,f.lat=t+(Math.random()-.5)*18e-5,f.alt=e-.6+(Math.random()-.5)*.8,f._localVel={east:(Math.random()-.5)*2.2,north:(Math.random()-.5)*2.2,up:.6+Math.random()*2.6},f.isSmoke=!0,f.matrixAutoUpdate=!1,this.scene.add(f),this.list.push(f)}try{this.viewer&&this.viewer.scene&&this.viewer.scene.requestRender()}catch{}},spawnWreckage(i,t,e,n=0,s=0,a={}){const r=a.count||30,o=Cesium.Math.toRadians(n),l=Cesium.Math.toRadians(s),c={east:Math.sin(o)*Math.cos(l),north:Math.cos(o)*Math.cos(l),up:Math.sin(l)};for(let h=0;h<r;h++){const u=Math.random();let d;const p=.4+Math.random()*2.4;if(u<.6){const w=[],y=3+Math.floor(Math.random()*3),A=p;for(let M=0;M<y;M++){const S=M/y*Math.PI*2+(Math.random()-.5)*.6,v=A*(.35+Math.random()*1.1);w.push(new ut(Math.cos(S)*v,Math.sin(S)*v))}const P=new Ll(w),T=Math.max(.03,p*.12),D={depth:T,bevelEnabled:!1};d=new dr(P,D),d.translate(0,0,-T*.5)}else d=new Je(p*.6,p,3),d.rotateX(Math.PI/2);const g=0+Math.random()*.06,x=new Ff({color:new Ot(g,g,g),flatShading:!0,side:Le}),m=new nt(d,x);m.rotation.set(Math.random()*Math.PI,Math.random()*Math.PI,Math.random()*Math.PI),m.scale.set(1+Math.random()*1.5,1+Math.random()*1.5,1+Math.random()*1.5),m._rotEuler=new Be(Math.random()*Math.PI,Math.random()*Math.PI,Math.random()*Math.PI),m._rotVel=new F((Math.random()-.5)*6,(Math.random()-.5)*6,(Math.random()-.5)*6),m.life=4+Math.random()*8,m.maxLife=m.life,m.lon=i+(Math.random()-.5)*1e-4,m.lat=t+(Math.random()-.5)*1e-4,m.alt=e+(Math.random()-.5)*1;const f=1.2,b=10+Math.random()*60;m._localVel={east:(c.east+(Math.random()-.5)*f)*b,north:(c.north+(Math.random()-.5)*f)*b,up:(c.up+(Math.random()-.5)*f*.8)*b},m._localVel.up-=4+Math.random()*6,m._fallGravityMultiplier=a.fallMultiplier||2.2,m.isSmoke=!1,m.matrixAutoUpdate=!1,this.scene.add(m),this.list.push(m)}},spawnSpark(i,t,e,n={}){const s=n.count||12;for(let a=0;a<s;a++){const r=new ee(.08+Math.random()*.12,6,6),o=new Ue({color:16777130,transparent:!0}),l=new nt(r,o);l.life=.18+Math.random()*.36,l.maxLife=l.life,l.lon=i,l.lat=t,l.alt=e;const c=Math.random()*Math.PI*2,h=(Math.random()*120-60)*(Math.PI/180),u=18+Math.random()*40;l._localVel={east:Math.sin(c)*Math.cos(h)*u,north:Math.cos(c)*Math.cos(h)*u,up:Math.sin(h)*u},l.isSmoke=!1,l.matrixAutoUpdate=!1,this.scene.add(l),this.list.push(l)}},update(i){if(!this.viewer)return;const t=this.viewer.camera.viewMatrix;for(let e=this.list.length-1;e>=0;e--){const n=this.list[e];if(n.life-=i*(n.isSmoke?1.1:1),n.life<=0){this.scene.remove(n),this.list.splice(e,1);continue}const s=n.isSmoke?.2:n._fallGravityMultiplier||1;n._localVel.up-=9.81*i*s,n._rotEuler&&n._rotVel&&(n._rotEuler.x+=n._rotVel.x*i,n._rotEuler.y+=n._rotVel.y*i,n._rotEuler.z+=n._rotVel.z*i);const a=Cesium.Math.toRadians(n.lat),r=n._localVel.east*i/(111320*Math.cos(a)),o=n._localVel.north*i/111320,l=n._localVel.up*i;n.lon+=r,n.lat+=o,n.alt+=l;const c=n.life/n.maxLife;if(n.material&&n.material.opacity!==void 0&&(n.isSmoke?n.material.opacity=Math.max(0,c*.85):n.material.opacity=Math.max(0,c)),n._expand){const p=1+(1-c)*(n._expandAmount||1);n.scale||(n.scale=new F(1,1,1)),n.scale.set(p,p,p)}if(n.isSmoke){const p=1+(1-c)*2;n.scale.set(p,p,p)}const h=Cesium.Cartesian3.fromDegrees(n.lon,n.lat,n.alt,void 0,new Cesium.Cartesian3),u=Cesium.Transforms.eastNorthUpToFixedFrame(h,void 0,this._scratchMatrix),d=Cesium.Matrix4.multiply(t,u,this._scratchCameraMatrix);for(let p=0;p<16;p++)this._scratchThreeMatrix.elements[p]=d[p];if(n.matrix.copy(this._scratchThreeMatrix),n._rotEuler){const p=new jt,g=new $e().setFromEuler(n._rotEuler),x=n.scale?n.scale.clone():new F(1,1,1);p.compose(new F(0,0,0),g,x),n.matrix.multiply(p)}else n.scale&&(n.scale.x!==1||n.scale.y!==1||n.scale.z!==1)&&n.matrix.scale(n.scale);n.updateMatrixWorld(!0)}}};class e_{constructor(){this.listener=new Zf,this.sounds=new Map,this.loader=new Xf,this._voicePool=[],this._activeOneShots=new Set,this._lastRandom={}}init(t){t.add(this.listener)}async loadSound(t,e,n=!1,s=.5){return new Promise((a,r)=>{this.loader.load(e,o=>{const l=new Pc(this.listener);l.setBuffer(o),l.setLoop(n),l.setVolume(s),l._baseVolume=s,l._isLooping=n,this.sounds.set(t,l),a(l)},void 0,r)})}_getVoice(){return this._voicePool.pop()||new Pc(this.listener)}_releaseVoice(t){t.isPlaying&&t.stop(),this._activeOneShots.delete(t),this._voicePool.push(t)}play(t,e=0){const n=t;if(t.endsWith("-random")){const o=t.replace("-random","-"),l=Array.from(this.sounds.keys()).filter(c=>c.startsWith(o));if(l.length>0){const c=this._lastRandom[t]??-1;let h=Math.floor(Math.random()*l.length);l.length>1&&h===c&&(h=(h+1)%l.length),this._lastRandom[t]=h,t=l[h]}}const s=this.sounds.get(t);if(!s)return;const{context:a}=s;a.state==="suspended"&&a.resume();const r=s._baseVolume??.5;if(!s._isLooping){const o=this._getVoice();o.setBuffer(s.buffer),o.setVolume(r),o.play(),o._parentName=n||t,this._activeOneShots.add(o),o.source.onended=()=>{o._isPaused||this._releaseVoice(o)};return}if(!s.isPlaying)if(s.play(),e>0){s.setVolume(0);const o=a.currentTime;s.gain.gain.cancelScheduledValues(o),s.gain.gain.setValueAtTime(0,o),s.gain.gain.linearRampToValueAtTime(r,o+e)}else s.setVolume(r)}stop(t,e=0){const n=this.sounds.get(t);if(n){if(n.isPlaying)if(e>0){const s=n.context.currentTime;n.gain.gain.cancelScheduledValues(s),n.gain.gain.linearRampToValueAtTime(0,s+e),setTimeout(()=>{n.isPlaying&&(n.stop(),n.setVolume(n._baseVolume??.5))},e*1e3+50)}else n.stop();this._activeOneShots.forEach(s=>{s._parentName===t&&(s.source.onended=null,this._releaseVoice(s))})}}setVolume(t,e){const n=this.sounds.get(t);n&&n.gain.gain.setValueAtTime(e,n.context.currentTime)}isPlaying(t){const e=this.sounds.get(t);if(!e)return!1;if(e.isPlaying)return!0;for(const n of this._activeOneShots)if(n._parentName===t&&(n.isPlaying||n._isPaused))return!0;return!1}pauseAll(){this.sounds.forEach(t=>{t.isPlaying&&(t.pause(),t._wasPlaying=!0)}),this._activeOneShots.forEach(t=>{t.isPlaying&&(t.pause(),t._isPaused=!0)})}resumeAll(){this.sounds.forEach(t=>{t._wasPlaying&&(t.play(),t._wasPlaying=!1)}),this._activeOneShots.forEach(t=>{t._isPaused&&(t.play(),t._isPaused=!1)})}stopAll(t=0){this.sounds.forEach((e,n)=>this.stop(n,t))}}const Tt=new e_;class n_{constructor(t,e,n,s,a,r,o=null,l=null){this.scene=t,this.viewer=e,this.target=o,this.onKill=l,this.lon=n.lon,this.lat=n.lat,this.alt=n.alt,this.heading=s,this.pitch=a,this.roll=0,this.speed=r+800,this.maxLife=10,this.life=this.maxLife,this.active=!0,this._scratchMatrix=new Cesium.Matrix4,this._scratchHPR=new Cesium.HeadingPitchRoll,this._scratchCartesian=new Cesium.Cartesian3,this._scratchThreeMatrix=new jt,this._scratchCameraMatrix=new Cesium.Matrix4,this.trail=[],this.distanceSinceLastTrail=0,this.initMesh()}initMesh(){this.mesh=new De;const t=2.6,e=.07,n=new Ze(e,e,t,16),s=new Yr({color:13421772,metalness:.4,roughness:.5}),a=new nt(n,s);this.mesh.add(a);const r=.35,o=new Je(e,r,16);o.translate(0,t/2+r/2,0);const l=new Yr({color:3355443,metalness:.8,roughness:.3}),c=new nt(o,l);this.mesh.add(c);const h=new Ze(e+.001,e+.001,.15,16);h.translate(0,t/2-.4,0);const u=new Ue({color:16763904}),d=new nt(h,u);this.mesh.add(d);const p=new Yr({color:4473924,metalness:.3,roughness:.6}),g=new Ll;g.moveTo(0,0),g.lineTo(.4,-.2),g.lineTo(.4,-.5),g.lineTo(0,-.5),g.lineTo(0,0);const x=new dr(g,{depth:.02,bevelEnabled:!1});x.center(),x.translate(.2,-.25,0);const m=new ce(.35,.4,.02);m.translate(e+.175,0,0);for(let v=0;v<4;v++){const C=new De,L=new nt(m,p);C.add(L),C.position.y=-t/2+.3,C.rotation.y=v*(Math.PI/2),this.mesh.add(C)}const f=new ce(.2,.15,.015);f.translate(e+.1,0,0);for(let v=0;v<4;v++){const C=new De,L=new nt(f,p);C.add(L),C.position.y=t/2-.6,C.rotation.y=v*(Math.PI/2),this.mesh.add(C)}const b=new Ot(1,.6,.2),w=new Je(e*.9,1,16,1,!0);w.rotateX(Math.PI),w.translate(0,-.5,0);const y=new Ue({color:b,transparent:!0,opacity:.8,side:Le,depthWrite:!1,blending:wn});this.flameMesh=new nt(w,y),this.flameMesh.position.y=-t/2,this.mesh.add(this.flameMesh);const A=new Je(e*.5,.6,16,1,!0);A.rotateX(Math.PI),A.translate(0,-.3,0);const P=new Ue({color:16777215,transparent:!0,opacity:.9,side:Le,depthWrite:!1,blending:wn});this.flameCore=new nt(A,P),this.flameMesh.add(this.flameCore);const T=128,D=typeof document<"u"?document.createElement("canvas"):null;let M=null;if(D){D.width=D.height=T;const v=D.getContext("2d"),C=T/2,L=T/2,N=v.createRadialGradient(C,L,0,C,L,C);N.addColorStop(0,"rgba(255,255,255,1)"),N.addColorStop(.18,"rgba(255,245,200,1)"),N.addColorStop(.38,"rgba(255,160,30,0.95)"),N.addColorStop(.62,"rgba(220,60,10,0.6)"),N.addColorStop(1,"rgba(0,0,0,0)"),v.fillStyle=N,v.fillRect(0,0,T,T),M=new kh(D),M.minFilter=Ge,M.magFilter=Ge}const S=new tr({map:M,color:new Ot(1,.95,.9),transparent:!0,opacity:.98,blending:wn,depthTest:!1,depthWrite:!1});this.flameGlow=new el(S),this.flameGlow.scale.set(2.2,2.2,1),this.flameGlow.position.y=-t/2-.08,this.mesh.add(this.flameGlow),this.mesh.layers.enable(0),this.mesh.layers.enable(1),this.mesh.matrixAutoUpdate=!1,this.scene.add(this.mesh)}update(t,e){if(!this.active){this.trail.length>0&&this.updateTrail(t);return}if(this.flameMesh){const s=.8+Math.random()*.4,a=.9+Math.random()*.2;this.flameMesh.scale.set(s,a,s),this.flameMesh.material.opacity=.7+Math.random()*.3,this.flameCore&&this.flameCore.scale.set(s,a,s)}if(this.life-=t,this.life<=0){this.destroy();return}this.target&&!this.target.destroyed&&this.trackTarget(t);const n=Si(this.lon,this.lat,this.alt,this.heading,this.pitch,this.speed*t);if(this.lon=n.lon,this.lat=n.lat,this.alt=n.alt,this.updateTrail(t),this.updateThreeMatrix(),e){for(const s of e)if(this.calculateDistSqToNPC(s)<1e4){this.hitNPC(s);return}}this.checkTerrainCollision()}trackTarget(t){const e=Cesium.Cartesian3.fromDegrees(this.target.lon,this.target.lat,this.target.alt),n=Cesium.Cartesian3.fromDegrees(this.lon,this.lat,this.alt),s=Cesium.Cartesian3.subtract(e,n,new Cesium.Cartesian3);Cesium.Cartesian3.normalize(s,s);const a=Cesium.Transforms.eastNorthUpToFixedFrame(n),r=Cesium.Matrix4.inverse(a,new Cesium.Matrix4),o=Cesium.Matrix4.multiplyByPointAsVector(r,s,new Cesium.Cartesian3),l=Cesium.Math.toDegrees(Math.atan2(o.x,o.y)),c=Cesium.Math.toDegrees(Math.asin(o.z));let h=l-this.heading;for(;h<-180;)h+=360;for(;h>180;)h-=360;const u=90;this.heading+=Math.max(-u*t,Math.min(u*t,h)),this.pitch+=Math.max(-u*t,Math.min(u*t,c-this.pitch))}updateTrail(t){if(this.active){this.distanceSinceLastTrail+=this.speed*t;const n=20;for(;this.distanceSinceLastTrail>=n;){const s=this.distanceSinceLastTrail-n,a=Si(this.lon,this.lat,this.alt,this.heading,this.pitch,-s);this.distanceSinceLastTrail-=n;const r=new ee(1,16,16),o=.5+Math.random()*.75,l=new Ue({color:new Ot(o,o,o),transparent:!0,opacity:.6+Math.random()*.25}),c=new nt(r,l);c.lon=a.lon,c.lat=a.lat,c.alt=a.alt,c.life=4,c.maxLife=4;const h=this.maxLife-this.life;c.launchScale=Math.min(1,.25+h/1.5*.75),c.matrixAutoUpdate=!1,this.scene.add(c),this.trail.push(c)}}const e=this.viewer.camera.viewMatrix;for(let n=this.trail.length-1;n>=0;n--){const s=this.trail[n];if(s.life-=t,s.life<=0){this.scene.remove(s),this.trail.splice(n,1);continue}s.randomScale||(s.randomScale=.8+Math.random()*.5);const r=(s.launchScale||1)*s.randomScale*(1+(1-s.life/s.maxLife)*15);s.scale.set(r,r,r);const o=s.life/s.maxLife*.5;s.material.opacity=o;const l=Cesium.Cartesian3.fromDegrees(s.lon,s.lat,s.alt,void 0,this._scratchCartesian),c=Cesium.Transforms.eastNorthUpToFixedFrame(l,void 0,this._scratchMatrix),h=Cesium.Matrix4.multiply(e,c,this._scratchCameraMatrix);for(let u=0;u<16;u++)this._scratchThreeMatrix.elements[u]=h[u];s.matrix.copy(this._scratchThreeMatrix),s.matrix.scale(new F(r,r,r)),s.updateMatrixWorld(!0)}}updateThreeMatrix(){const t=this.viewer.camera.viewMatrix,e=Cesium.Cartesian3.fromDegrees(this.lon,this.lat,this.alt,void 0,this._scratchCartesian),n=Cesium.Transforms.eastNorthUpToFixedFrame(e,void 0,this._scratchMatrix),s=Cesium.Math.toRadians(this.heading),a=Cesium.Math.toRadians(this.pitch),r=new Cesium.Cartesian3(Math.sin(s)*Math.cos(a),Math.cos(s)*Math.cos(a),Math.sin(a)),o=Cesium.Matrix4.multiplyByPointAsVector(n,r,new Cesium.Cartesian3);Cesium.Cartesian3.normalize(o,o);const l=new Cesium.Cartesian3(n[8],n[9],n[10]);let c=new Cesium.Cartesian3;if(Math.abs(Cesium.Cartesian3.dot(o,l))>.999){const p=new Cesium.Cartesian3(n[4],n[5],n[6]);Cesium.Cartesian3.cross(o,p,c)}else Cesium.Cartesian3.cross(o,l,c);Cesium.Cartesian3.normalize(c,c);const h=new Cesium.Cartesian3;Cesium.Cartesian3.cross(c,o,h);const u=this._scratchMatrix;u[0]=c.x,u[1]=c.y,u[2]=c.z,u[3]=0,u[4]=o.x,u[5]=o.y,u[6]=o.z,u[7]=0,u[8]=h.x,u[9]=h.y,u[10]=h.z,u[11]=0,u[12]=e.x,u[13]=e.y,u[14]=e.z,u[15]=1;const d=Cesium.Matrix4.multiply(t,u,this._scratchCameraMatrix);for(let p=0;p<16;p++)this._scratchThreeMatrix.elements[p]=d[p];if(this.mesh.matrix.copy(this._scratchThreeMatrix),this.mesh.updateMatrixWorld(!0),this.flameGlow&&this.viewer&&this.viewer.camera&&this.viewer.camera.position)try{const p=this.viewer.camera.position,g=Cesium.Cartesian3.distance(e,p)||1,x=Se.clamp(g*.0016,1,80);this.flameGlow.scale.set(x,x,1),this.flameGlow.renderOrder=9999,this.flameGlow.material&&(this.flameGlow.material.opacity=Math.max(.25,Math.min(1,80/x)))}catch{}}calculateDistSqToNPC(t){const e=(t.lon-this.lon)*111320*Math.cos(Cesium.Math.toRadians(this.lat)),n=(t.lat-this.lat)*111320,s=t.alt-this.alt;return e*e+n*n+s*s}hitNPC(t){t.destroyed=!0,this.onKill&&this.onKill(t);try{ii.spawnExplosion(this.lon,this.lat,this.alt,{count:80,smokeCount:18,big:!0}),ii.spawnWreckage(this.lon,this.lat,this.alt,this.heading,this.pitch,{count:48}),Tt.play("explosion-random")}catch{}this.destroy()}checkTerrainCollision(){const t=Cesium.Cartographic.fromDegrees(this.lon,this.lat),e=this.viewer.scene.globe.getHeight(t);if(e!==void 0&&this.alt<e){try{ii.spawnExplosion(this.lon,this.lat,this.alt,{count:80,smokeCount:18,big:!0}),ii.spawnWreckage(this.lon,this.lat,this.alt,this.heading,this.pitch,{count:48}),Tt.play("explosion-random")}catch{}this.destroy()}}destroy(){this.active=!1,this.mesh&&this.scene.remove(this.mesh)}}class i_{constructor(t,e,n,s,a,r,o=null){this.scene=t,this.viewer=e,this.onKill=o,this.lon=n.lon,this.lat=n.lat,this.alt=n.alt,this.heading=s,this.pitch=a,this.speed=r+1500,this.life=3,this.active=!0,this._scratchMatrix=new Cesium.Matrix4,this._scratchCartesian=new Cesium.Cartesian3,this._scratchThreeMatrix=new jt,this._scratchCameraMatrix=new Cesium.Matrix4,this.initMesh()}initMesh(){const t=(o,l,c)=>new Tn({uniforms:{colorStart:{value:new Ot(16724736)},colorMid:{value:new Ot(16763904)},colorEnd:{value:new Ot(16777215)},opacity:{value:l},intensity:{value:c}},vertexShader:`
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
				`,transparent:!0,depthWrite:!1,blending:wn,side:Le});this.mesh=new De;const n=(o,l,c,h)=>{const u=new Ts(o,l,1,1);u.translate(0,-l/2,0);const d=t(o,c,h);return new nt(u,d)};for(let o=0;o<3;o++){const l=n(.6,20,1,1);l.rotateY(o*Math.PI*2/3),this.mesh.add(l)}for(let o=0;o<3;o++){const l=n(1.6,22,.35,.65);l.rotateY(o*Math.PI*2/3+Math.PI/6),this.mesh.add(l)}const s=new Je(.12,.8,12);s.translate(0,-.4,0);const a=new Ue({color:16777215,transparent:!0,opacity:1,blending:wn,depthWrite:!1}),r=new nt(s,a);this.mesh.add(r),this.mesh.matrixAutoUpdate=!1,this.scene.add(this.mesh)}update(t,e){if(!this.active)return;if(this.life-=t,this.life<=0){this.destroy();return}const n=Si(this.lon,this.lat,this.alt,this.heading,this.pitch,this.speed*t);if(this.lon=n.lon,this.lat=n.lat,this.alt=n.alt,this.updateThreeMatrix(),e){for(const s of e)if(this.calculateDistSqToNPC(s)<400){this.hitNPC(s);return}}this.checkTerrainCollision()}updateThreeMatrix(){const t=this.viewer.camera.viewMatrix,e=Cesium.Cartesian3.fromDegrees(this.lon,this.lat,this.alt,void 0,this._scratchCartesian),n=Cesium.Transforms.eastNorthUpToFixedFrame(e,void 0,this._scratchMatrix),s=Cesium.Math.toRadians(this.heading),a=Cesium.Math.toRadians(this.pitch),r=new Cesium.Cartesian3(Math.sin(s)*Math.cos(a),Math.cos(s)*Math.cos(a),Math.sin(a)),o=Cesium.Matrix4.multiplyByPointAsVector(n,r,new Cesium.Cartesian3);Cesium.Cartesian3.normalize(o,o);const l=new Cesium.Cartesian3(n[8],n[9],n[10]);let c=new Cesium.Cartesian3;if(Math.abs(Cesium.Cartesian3.dot(o,l))>.999){const p=new Cesium.Cartesian3(n[4],n[5],n[6]);Cesium.Cartesian3.cross(o,p,c)}else Cesium.Cartesian3.cross(o,l,c);Cesium.Cartesian3.normalize(c,c);const h=Cesium.Cartesian3.cross(c,o,new Cesium.Cartesian3),u=this._scratchMatrix;u[0]=c.x,u[1]=c.y,u[2]=c.z,u[3]=0,u[4]=o.x,u[5]=o.y,u[6]=o.z,u[7]=0,u[8]=h.x,u[9]=h.y,u[10]=h.z,u[11]=0,u[12]=e.x,u[13]=e.y,u[14]=e.z,u[15]=1;const d=Cesium.Matrix4.multiply(t,u,this._scratchCameraMatrix);for(let p=0;p<16;p++)this._scratchThreeMatrix.elements[p]=d[p];this.mesh.matrix.copy(this._scratchThreeMatrix),this.mesh.updateMatrixWorld(!0)}calculateDistSqToNPC(t){const e=(t.lon-this.lon)*111320*Math.cos(Cesium.Math.toRadians(this.lat)),n=(t.lat-this.lat)*111320,s=t.alt-this.alt;return e*e+n*n+s*s}hitNPC(t){t.destroyed=!0,this.onKill&&this.onKill(t);try{ii.spawnExplosion(this.lon,this.lat,this.alt,{count:36,smokeCount:8,big:!0}),ii.spawnWreckage(this.lon,this.lat,this.alt,this.heading,this.pitch,{count:18});try{Tt.play("explosion-random")}catch{}}catch{}this.destroy()}checkTerrainCollision(){const t=Cesium.Cartographic.fromDegrees(this.lon,this.lat),e=this.viewer.scene.globe.getHeight(t);if(e!==void 0&&this.alt<e){try{ii.spawnSpark(this.lon,this.lat,this.alt,{count:10})}catch{}this.destroy()}}destroy(){this.active=!1,this.scene.remove(this.mesh)}}class s_{constructor(t,e,n,s,a,r){this.scene=t,this.viewer=e,this.lon=n.lon,this.lat=n.lat,this.alt=n.alt,this.heading=s+180+(Math.random()-.5)*40,this.pitch=a-15-Math.random()*20,this.speed=r*.5,this.gravity=5,this.verticalVelocity=0,this.life=4,this.maxLife=4,this.active=!0,this._scratchCartesian=new Cesium.Cartesian3,this._scratchMatrix=new Cesium.Matrix4,this._scratchCameraMatrix=new Cesium.Matrix4,this._scratchThreeMatrix=new jt,this.trail=[],this.distanceSinceLastTrail=0,this.initMesh()}initMesh(){this.group=new De,this.group.matrixAutoUpdate=!1;const t=64,e=document.createElement("canvas");e.width=t,e.height=t;const n=e.getContext("2d"),s=n.createRadialGradient(t/2,t/2,0,t/2,t/2,t/2);s.addColorStop(0,"#ffffff"),s.addColorStop(.2,"#ffff66"),s.addColorStop(.5,"#ffff00"),s.addColorStop(1,"rgba(0,0,0,0)"),n.fillStyle=s,n.fillRect(0,0,t,t);const a=new kh(e),r=new tr({map:a,color:16777028,transparent:!0,blending:wn,depthWrite:!1});this.flareSprite=new el(r),this.flareSprite.scale.set(1.5,1.5,1),this.group.add(this.flareSprite);const o=new tr({map:a,color:16755200,transparent:!0,opacity:.8,blending:wn,depthWrite:!1});this.glowSprite=new el(o),this.glowSprite.scale.set(4,4,1),this.group.add(this.glowSprite),this.scene.add(this.group)}update(t){if(!this.active)return;if(this.life-=t,this.life<=0){this.destroy();return}const e=this.speed*t,n=this.calculateMove(e);this.lon=n.lon,this.lat=n.lat,this.alt=n.alt,this.verticalVelocity-=this.gravity*t,this.alt+=this.verticalVelocity*t,this.speed*=.98,this.updateThreeMatrix(),this._spawnTrailIfNeeded(t),this._updateTrail(t);const s=this.life/this.maxLife;if(this.flareSprite){this.flareSprite.material.opacity=Math.min(1,s*1.5);const a=.9+Math.random()*.2;this.flareSprite.scale.set(1.5*a,1.5*a,1)}if(this.glowSprite){this.glowSprite.material.opacity=Math.min(.8,s*1.2);const a=.8+Math.random()*.4;this.glowSprite.scale.set(4*a,4*a,1)}}calculateMove(t){const e=Cesium.Math.toRadians(this.heading),n=Cesium.Math.toRadians(this.pitch),s=6371e3,a=t*Math.cos(e)*Math.cos(n)/s,r=t*Math.sin(e)*Math.cos(n)/(s*Math.cos(Cesium.Math.toRadians(this.lat))),o=t*Math.sin(n);return{lon:this.lon+Cesium.Math.toDegrees(r),lat:this.lat+Cesium.Math.toDegrees(a),alt:this.alt+o}}updateThreeMatrix(){const t=this.viewer.camera.viewMatrix,e=Cesium.Cartesian3.fromDegrees(this.lon,this.lat,this.alt),n=Cesium.Transforms.eastNorthUpToFixedFrame(e,void 0,this._scratchMatrix),s=Cesium.Matrix4.multiply(t,n,this._scratchCameraMatrix);for(let a=0;a<16;a++)this._scratchThreeMatrix.elements[a]=s[a];this.group.matrix.copy(this._scratchThreeMatrix),this.group.updateMatrixWorld(!0)}_spawnTrailIfNeeded(t){this.distanceSinceLastTrail+=(this.speed+Math.abs(this.verticalVelocity))*t;const e=3;for(;this.distanceSinceLastTrail>=e;){const s=(this.distanceSinceLastTrail-e)/((this.speed+Math.abs(this.verticalVelocity))*t||1),a=this.lon,r=this.lat,o=this.alt-this.verticalVelocity*t*s;this.distanceSinceLastTrail-=e;const l=new ee(1,12,12),c=.4+Math.random()*.4,h=new Ue({color:new Ot(c,c,c),transparent:!0,opacity:.5+Math.random()*.2}),u=new nt(l,h);u.lon=a,u.lat=r,u.alt=o,u.life=2+Math.random()*1.5,u.maxLife=u.life,u.matrixAutoUpdate=!1,this.scene.add(u),this.trail.push(u)}}_updateTrail(t){const e=this.viewer.camera.viewMatrix;for(let n=this.trail.length-1;n>=0;n--){const s=this.trail[n];if(s.life-=t,s.life<=0){this.scene.remove(s),this.trail.splice(n,1);continue}s.randomScale||(s.randomScale=.5+Math.random()*.5);const a=s.life/s.maxLife,r=s.randomScale*(1+(1-a)*8);s.scale.set(r,r,r),s.material.opacity=a*.4;const o=Cesium.Cartesian3.fromDegrees(s.lon,s.lat,s.alt,void 0,this._scratchCartesian),l=Cesium.Transforms.eastNorthUpToFixedFrame(o,void 0,this._scratchMatrix),c=Cesium.Matrix4.multiply(e,l,this._scratchCameraMatrix);for(let h=0;h<16;h++)this._scratchThreeMatrix.elements[h]=c[h];s.matrix.copy(this._scratchThreeMatrix),s.matrix.scale(new F(r,r,r)),s.updateMatrixWorld(!0),s.alt+=.5*t}}destroy(){this.active=!1,this.group&&this.scene.remove(this.group);for(const t of this.trail)this.scene.remove(t);this.trail=[]}}class a_{constructor(t,e,n){this.viewer=t,this.scene=e,this.playerModel=n,this.weapons=[{id:"gun",name:"TALON STRIKE",ammo:1/0,maxAmmo:1/0,fireRate:.3,lastFire:0},{id:"missile",name:"DIVE ATTACK",ammo:30,maxAmmo:30,fireRate:2,lastFire:0,type:"DIVE"}],this.flareWeapon={id:"flare",name:"EAGLE SCREECH",ammo:20,maxAmmo:20,fireRate:.5,lastFire:0},this.selectedWeaponIndex=0,this.projectiles=[],this.flares=[],this.onKill=null,this.target=null,this.isGunOverheated=!1,this.gunHeat=0,this.lockTime=0,this.lockRequiredTime=1.5,this.lockStatus="NONE",this.lockingTarget=null,this.flareQueue=0,this.flareInterval=.15,this.lastFlarePulse=0,this.lastMissileSide=!1,this.emptyWarningTimers={gun:0,missile:0,flare:0},this.lastEmptyWarningSoundTime=0}resetAmmo(){this.selectedWeaponIndex=0;for(const t of this.weapons)typeof t.maxAmmo<"u"&&(t.ammo=t.maxAmmo);this.flareWeapon&&typeof this.flareWeapon.maxAmmo<"u"&&(this.flareWeapon.ammo=this.flareWeapon.maxAmmo),this.gunHeat=0,this.isGunOverheated=!1,this.emptyWarningTimers={gun:0,missile:0,flare:0}}getCurrentWeapon(){return this.weapons[this.selectedWeaponIndex]}toggleWeapon(){this.selectedWeaponIndex=(this.selectedWeaponIndex+1)%this.weapons.length;try{Tt.play("weapon-switch")}catch{}}selectWeapon(t){t>=0&&t<this.weapons.length&&(this.selectedWeaponIndex=t);try{Tt.play("weapon-switch")}catch{}}calculateWeaponPos(t){if(!this.playerModel||!this.viewer)return null;const e=this.playerModel.scale.x,n=t.clone().multiplyScalar(e);n.applyQuaternion(this.playerModel.quaternion),n.add(this.playerModel.position);const s=75,a=Cesium.Math.toDegrees(this.viewer.camera.frustum.fovy),r=Math.tan(Cesium.Math.toRadians(a)*.5)/Math.tan(Cesium.Math.toRadians(s)*.5);n.x*=r,n.y*=r;const o=this.viewer.camera,l=o.right,c=o.up,h=o.direction,u=new Cesium.Cartesian3,d=Cesium.Cartesian3.multiplyByScalar(l,n.x,new Cesium.Cartesian3),p=Cesium.Cartesian3.multiplyByScalar(c,n.y,new Cesium.Cartesian3),g=Cesium.Cartesian3.multiplyByScalar(h,-n.z,new Cesium.Cartesian3);Cesium.Cartesian3.add(d,p,u),Cesium.Cartesian3.add(u,g,u);const x=o.positionWC,m=new Cesium.Cartesian3;Cesium.Cartesian3.add(x,u,m);const f=Cesium.Cartographic.fromCartesian(m);return{lon:Cesium.Math.toDegrees(f.longitude),lat:Cesium.Math.toDegrees(f.latitude),alt:f.height}}fire(t,e=null){const n=e?this.weapons.find(r=>r.id===e):this.weapons[this.selectedWeaponIndex];if(!n)return;const s=performance.now()*.001;if(n.ammo<=0){if(s-this.lastEmptyWarningSoundTime>2){this.emptyWarningTimers[n.id]=1,this.lastEmptyWarningSoundTime=s;try{Tt.play("weapon-warning")}catch{}}return}if(n.id==="gun"&&this.isGunOverheated||s-n.lastFire<n.fireRate||n.id==="missile"&&this.lockStatus!=="LOCKED")return;n.lastFire=s,n.ammo!==1/0&&n.ammo--;const a={lon:t.lon,lat:t.lat,alt:t.alt};if(n.id==="gun"){if(this.gunHeat+=.02,this.gunHeat>=1){this.isGunOverheated=!0;try{Tt.play("weapon-warning")}catch{}}const r=new F(0,0,0),o=this.calculateWeaponPos(r)||Si(a.lon,a.lat,a.alt,t.heading,t.pitch,5),l=new i_(this.scene,this.viewer,o,t.heading,t.pitch,t.speed,this.onKill);this.projectiles.push(l)}else if(n.id==="missile"){this.lastMissileSide=!this.lastMissileSide;const r=this.lastMissileSide?1:-1,o=new F(15*r,-15,0),l=this.calculateWeaponPos(o)||a,c=this.target,h=new n_(this.scene,this.viewer,l,t.heading,t.pitch,t.speed,c,this.onKill);this.projectiles.push(h);try{Tt.play("missile-fire")}catch{}}}fireFlare(t){const e=this.flareWeapon,n=performance.now()*.001;if(!e||e.ammo<=0){if(n-this.lastEmptyWarningSoundTime>2){this.emptyWarningTimers.flare=1,this.lastEmptyWarningSoundTime=n;try{Tt.play("weapon-warning")}catch{}}return}n-e.lastFire<1||(e.ammo--,e.lastFire=n,this.flareQueue=6,this.lastFlarePulse=0)}_spawnSingleFlare(t){const e=new F(0,-10,6),n=this.calculateWeaponPos(e)||{lon:t.lon,lat:t.lat,alt:t.alt},s=new s_(this.scene,this.viewer,n,t.heading,t.pitch,t.speed);this.flares.push(s)}update(t,e,n=null){const s=this.lockStatus,a=this.getCurrentWeapon();try{n&&n.fire&&a.id==="gun"&&!this.isGunOverheated&&a.ammo>0?Tt.isPlaying("m61-firing")||Tt.play("m61-firing"):Tt.isPlaying("m61-firing")&&Tt.stop("m61-firing")}catch{}if(a.id==="missile"){const o=this.findPotentialTarget(e);o?this.lockingTarget===o?(this.lockTime+=t,this.lockTime>=this.lockRequiredTime?(this.lockStatus="LOCKED",this.target=o):this.lockStatus="LOCKING"):(this.lockingTarget=o,this.lockTime=0,this.lockStatus="LOCKING",this.target=null):(this.lockingTarget=null,this.lockTime=0,this.lockStatus="NONE",this.target=null)}else this.lockingTarget=null,this.lockTime=0,this.lockStatus="NONE",this.target=null;try{this.lockStatus==="LOCKING"?Tt.isPlaying("rwr-tws")||Tt.play("rwr-tws"):Tt.isPlaying("rwr-tws")&&Tt.stop("rwr-tws"),s!==this.lockStatus&&this.lockStatus==="LOCKED"&&Tt.play("rwr-lock"),s==="LOCKED"&&this.lockStatus!=="LOCKED"&&Tt.isPlaying("rwr-lock")&&Tt.stop("rwr-lock")}catch{}this.flareQueue>0&&(this.lastFlarePulse+=t,(this.lastFlarePulse>=this.flareInterval||this.flareQueue===6)&&(this._spawnSingleFlare(e),this.flareQueue--,this.lastFlarePulse=0)),this.gunHeat>0&&(this.gunHeat-=t*.2,this.gunHeat<=0&&(this.gunHeat=0,this.isGunOverheated=!1),this.isGunOverheated&&this.gunHeat<.3&&(this.isGunOverheated=!1));for(const o in this.emptyWarningTimers)this.emptyWarningTimers[o]>0&&(this.emptyWarningTimers[o]-=t,this.emptyWarningTimers[o]<0&&(this.emptyWarningTimers[o]=0));const r=e.npcs||[];for(let o=this.projectiles.length-1;o>=0;o--){const l=this.projectiles[o];l.update(t,r);const c=l.trail&&l.trail.length>0;!l.active&&!c&&this.projectiles.splice(o,1)}for(let o=this.flares.length-1;o>=0;o--){const l=this.flares[o];l.update(t),l.active||this.flares.splice(o,1)}}findPotentialTarget(t){if(!t.npcs||t.npcs.length===0)return null;let e=null,n=.985;for(const s of t.npcs){if(s.destroyed)continue;const a=this.calculateDotProduct(t,s);a>n&&this.calculateDist(t,s)<1e4&&(e=s,n=a)}return e}calculateDotProduct(t,e){const n=Cesium.Math.toRadians(t.heading),s=Cesium.Math.toRadians(t.pitch),a=new F(Math.sin(n)*Math.cos(s),Math.sin(s),Math.cos(n)*Math.cos(s)),r=(e.lon-t.lon)*111320*Math.cos(Cesium.Math.toRadians(t.lat)),o=(e.lat-t.lat)*111320,l=e.alt-t.alt,c=new F(r,l,o).normalize();return a.dot(c)}calculateDist(t,e){const n=(e.lon-t.lon)*111320*Math.cos(Cesium.Math.toRadians(t.lat)),s=(e.lat-t.lat)*111320,a=e.alt-t.alt;return Math.sqrt(n*n+s*s+a*a)}}const ol={RABBIT:{category:"ground",speed:3,color:9139029,size:[.12,.08,.15],score:300},SQUIRREL:{category:"ground",speed:4,color:8018490,size:[.06,.05,.1],score:200},MOUSE:{category:"ground",speed:2,color:10127994,size:[.03,.02,.05],score:100},MARMOT:{category:"ground",speed:2,color:6969914,size:[.15,.1,.2],score:400},TROUT:{category:"water",speed:2,color:6982250,size:[.08,.03,.25],score:500},BASS:{category:"water",speed:1.5,color:4876874,size:[.1,.04,.3],score:500},KOKANEE:{category:"water",speed:2.5,color:11162965,size:[.06,.03,.2],score:600},RAVEN:{category:"air",speed:18,color:1118481,size:[.15,.06,.18],score:500,wingColor:657930},CROW:{category:"air",speed:15,color:1710618,size:[.1,.05,.14],score:400,wingColor:1118481}},ru=[{type:"RABBIT",weight:15},{type:"SQUIRREL",weight:15},{type:"MOUSE",weight:10},{type:"MARMOT",weight:5},{type:"TROUT",weight:12},{type:"BASS",weight:10},{type:"KOKANEE",weight:8},{type:"RAVEN",weight:15},{type:"CROW",weight:10}],r_=ru.reduce((i,t)=>i+t.weight,0),Pe={lonMin:-116.95,lonMax:-116.86,latMin:34.235,latMax:34.255,elevation:2060},Ba={lon:-116.9155,lat:34.2433,radiusM:2e3};function o_(){let i=Math.random()*r_;for(const t of ru)if(i-=t.weight,i<=0)return t.type;return"RAVEN"}function l_(i){const t=ol[i];if(!t)return null;const e=new De,n=new Ut({color:t.color,flatShading:!0}),[s,a,r]=t.size;if(t.category==="ground"){const o=new ee(1,6,5);o.scale(s,a,r);const l=new nt(o,n);e.add(l);const c=new ee(a*.8,5,4),h=new nt(c,n);h.position.set(0,a*.3,r*.9),e.add(h);const u=new Ue({color:0});for(const d of[-1,1]){const p=new ee(a*.15,4,3),g=new nt(p,u);g.position.set(d*a*.4,a*.5,r*1),e.add(g)}if(i==="RABBIT"){for(const g of[-1,1]){const x=new ce(.015,.06,.01),m=new nt(x,n);m.position.set(g*.02,a+.03,r*.8),e.add(m)}const d=new ee(.02,4,3),p=new nt(d,new Ut({color:15658734}));p.position.set(0,a*.3,-r*.7),e.add(p)}}else if(t.category==="water"){const o=new ee(1,6,5);o.scale(s*.6,a,r);const l=new nt(o,n);e.add(l);const c=new ce(s*.3,a*2,.01),h=new nt(c,n);h.position.set(0,0,-r*.9),h.rotation.y=.2,e.add(h);const u=new ce(.005,a*.8,s*.4),d=new nt(u,n);d.position.set(0,a*.8,0),e.add(d);const p=new ee(1,5,4);p.scale(s*.4,a*.5,r*.8);const g=new nt(p,new Ut({color:13421772}));g.position.y=-a*.3,e.add(g)}else if(t.category==="air"){const o=new ee(1,6,5);o.scale(s*.5,a,r);const l=new nt(o,n);e.add(l);const c=new ee(a*.7,5,4),h=new nt(c,n);h.position.set(0,a*.3,r*.8),e.add(h);const u=new Je(.008,.03,4),d=new nt(u,new Ut({color:2236962}));d.position.set(0,a*.2,r*1.1),d.rotation.x=Math.PI/2,e.add(d);const p=new Ut({color:t.wingColor||t.color,side:Le,flatShading:!0});for(const m of[-1,1]){const f=new ce(s*2.5,.005,r*.6);f.translate(m*s*1.25,0,0);const b=new nt(f,p);b.position.y=a*.2,e.add(b)}const g=new ce(s*.5,.005,r*.5),x=new nt(g,n);x.position.set(0,0,-r*.7),e.add(x)}return e.traverse(o=>{o.layers.set(0)}),e}class c_{constructor(t,e,n){this.viewer=t,this.scene=e,this.loader=n,this.npcs=[],this.lastSpawnTime=0,this.loaded=!0,this._scratchMatrix=new Cesium.Matrix4,this._scratchHPR=new Cesium.HeadingPitchRoll,this._scratchCartesian=new Cesium.Cartesian3,this._scratchThreeMatrix=new jt,this._scratchCameraMatrix=new Cesium.Matrix4}isOverLake(t,e){return t>=Pe.lonMin&&t<=Pe.lonMax&&e>=Pe.latMin&&e<=Pe.latMax}spawnNPC(t,e,n){const s=o_(),a=ol[s];if(!a)return null;let r,o,l,c,h;if(c=Math.random()*360,h=a.speed+(Math.random()-.5)*a.speed*.4,a.category==="ground"){let d=0;do{const x=Math.random()*Math.PI*2,m=100+Math.random()*Ba.radiusM,f=111320*Math.cos(Ba.lat*Math.PI/180);r=Ba.lon+Math.cos(x)*m/f,o=Ba.lat+Math.sin(x)*m/111320,d++}while(this.isOverLake(r,o)&&d<10);const p=Cesium.Cartographic.fromDegrees(r,o),g=this.viewer.scene.globe.getHeight(p);l=(g!==void 0?g:2070)+.3}else if(a.category==="water")r=Pe.lonMin+.05*(Pe.lonMax-Pe.lonMin)+Math.random()*.9*(Pe.lonMax-Pe.lonMin),o=Pe.latMin+.05*(Pe.latMax-Pe.latMin)+Math.random()*.9*(Pe.latMax-Pe.latMin),l=Pe.elevation-.5+Math.random()*.8;else{const d=Math.random()*Math.PI*2,p=500+Math.random()*3e3,g=111320*Math.cos(e*Math.PI/180);r=t+Math.cos(d)*p/g,o=e+Math.sin(d)*p/111320,l=n+(Math.random()-.5)*300,l=Math.max(l,2100)}const u=s+" "+(100+Math.floor(Math.random()*900));return this.createNPC(u,s,a,r,o,l,c,h)}createNPC(t,e,n,s,a,r,o,l){const c=l_(e);if(!c)return null;c.matrixAutoUpdate=!1,this.scene.add(c);const h={id:t+"_"+Math.random().toString(36).substr(2,9),mesh:c,name:t,typeName:e,category:n.category,lon:s,lat:a,alt:r,heading:o,speed:l,pitch:0,roll:0,targetHeading:o,targetPitch:0,behaviorTimer:2+Math.random()*5,terrainCheckTimer:Math.random()*2,time:Math.random()*100,destroyed:!1,score:n.score};return this.npcs.push(h),h}update(t,e){const n=this.viewer.camera.viewMatrix;for(let s=this.npcs.length-1;s>=0;s--){const a=this.npcs[s];if(a.destroyed){this.scene.remove(a.mesh),this.npcs.splice(s,1);continue}if(a.time+=t,a.behaviorTimer-=t,a.behaviorTimer<=0&&(a.category==="ground"?(a.targetHeading=(a.heading+(Math.random()-.5)*120)%360,a.speed=Math.random()>.3?ol[a.typeName].speed:0,a.behaviorTimer=1+Math.random()*4):a.category==="water"?(a.targetHeading=(a.heading+(Math.random()-.5)*90)%360,a.behaviorTimer=2+Math.random()*5):(a.targetHeading=(a.heading+(Math.random()-.5)*180)%360,a.targetPitch=(Math.random()-.5)*15,a.behaviorTimer=3+Math.random()*6)),a.category==="air"&&(a.terrainCheckTimer-=t,a.terrainCheckTimer<=0)){a.terrainCheckTimer=.5;const d=Cesium.Cartographic.fromDegrees(a.lon,a.lat),p=this.viewer.scene.globe.getHeight(d);if(p!==void 0){const g=a.alt-p;g<80&&(a.targetPitch=15,g<30&&(a.targetPitch=30))}}let r=a.targetHeading-a.heading;for(;r<-180;)r+=360;for(;r>180;)r-=360;const l=(a.category==="air"?60:120)*t;if(a.heading=(a.heading+Math.max(-l,Math.min(l,r))+360)%360,a.category==="air"&&(a.pitch+=(a.targetPitch-a.pitch)*t*.6,Math.abs(r)>.5?a.roll+=(-Math.sign(r)*Math.min(1,Math.abs(r)/45)*45-a.roll)*t*3:a.roll+=(0-a.roll)*t*3),a.speed>0)if(a.category==="ground"){const d=Si(a.lon,a.lat,a.alt,a.heading,0,a.speed*t);this.isOverLake(d.lon,d.lat)?(a.heading=(a.heading+140+Math.random()*80)%360,a.targetHeading=a.heading):(a.lon=d.lon,a.lat=d.lat);const p=Cesium.Cartographic.fromDegrees(a.lon,a.lat),g=this.viewer.scene.globe.getHeight(p);g!==void 0&&(a.alt=g+.3)}else if(a.category==="water"){const d=Si(a.lon,a.lat,a.alt,a.heading,0,a.speed*t);d.lon<Pe.lonMin||d.lon>Pe.lonMax||d.lat<Pe.latMin||d.lat>Pe.latMax?(a.heading=(a.heading+150+Math.random()*60)%360,a.targetHeading=a.heading):(a.lon=d.lon,a.lat=d.lat),a.alt=Pe.elevation-.3+Math.sin(a.time*1.5)*.4}else{const d=Si(a.lon,a.lat,a.alt,a.heading,a.pitch,a.speed*t);a.lon=d.lon,a.lat=d.lat,a.alt=d.alt}const c=Cesium.Cartesian3.fromDegrees(a.lon,a.lat,a.alt,void 0,this._scratchCartesian);this._scratchHPR.heading=Cesium.Math.toRadians(a.heading),this._scratchHPR.pitch=Cesium.Math.toRadians(a.pitch),this._scratchHPR.roll=Cesium.Math.toRadians(a.roll);const h=Cesium.Transforms.headingPitchRollToFixedFrame(c,this._scratchHPR,Cesium.Ellipsoid.WGS84,Cesium.Transforms.eastNorthUpToFixedFrame,this._scratchMatrix),u=Cesium.Matrix4.multiply(n,h,this._scratchCameraMatrix);for(let d=0;d<16;d++)this._scratchThreeMatrix.elements[d]=u[d];a.mesh.matrix.copy(this._scratchThreeMatrix),a.mesh.updateMatrixWorld(!0)}this.npcs.length<12&&Date.now()-this.lastSpawnTime>2e3&&(this.spawnNPC(e.lon,e.lat,e.alt),this.lastSpawnTime=Date.now())}clear(){this.npcs.forEach(t=>this.scene.remove(t.mesh)),this.npcs=[]}}class h_{constructor(){this.container=document.getElementById("dialogue-container"),this.textElem=document.getElementById("dialogue-text"),this.dialogues=["Shadow! It's Jackie, calling from the nest. The eaglets are hungry - time to hunt!","You're soaring above Big Bear Valley. Our Jeffrey pine nest is your home base.","Check your display - SPEED on the left shows how fast you're flying, ALTITUDE on the right.","The compass at the top shows your heading. Use it to navigate back to the lake for fish.","Your talons are ready! Use TALON STRIKE for quick catches, or DIVE ATTACK for bigger prey.","Use 'W' and 'S' to control your wing speed. Glide to conserve energy.","Control your flight with ARROW keys for pitch and roll. 'A' and 'D' for turning.","Press SPACE to power dive - you can reach incredible speeds swooping down!","Switch hunting modes with '1', '2', or 'Q'. Press 'F' or ENTER to strike!","Watch out for ravens! Press 'V' to screech and scare them away from our territory.","The territory map shows prey and ravens nearby. Hunt the fish in Big Bear Lake!","Good hunting, Shadow! Bring food back for our eaglets. Jackie, out."],this.currentIndex=0,this.isActive=!1,this.isPaused=!1,this.currentCharIndex=0,this.isWaitingForNext=!1,this.lastSoundIndex=-1,this.glitchSounds=["glitch-1","glitch-2","glitch-3","glitch-4"]}start(){localStorage.getItem("tutorialCompleted")||(this.stop(),this.currentIndex=0,this.currentCharIndex=0,this.isActive=!0,this.isPaused=!1,this.isWaitingForNext=!1,this.startTimeout=setTimeout(()=>{!this.isActive||this.isPaused||(this.container.classList.remove("hidden"),this.showNext())},7e3))}pause(){this.isActive&&(this.isPaused=!0,this.container.classList.add("hidden"),this.startTimeout&&clearTimeout(this.startTimeout),this.typewriterTimeout&&clearTimeout(this.typewriterTimeout),this.nextTimeout&&clearTimeout(this.nextTimeout))}resume(){!this.isActive||!this.isPaused||(this.isPaused=!1,this.container.classList.remove("hidden"),this.isWaitingForNext?this.nextTimeout=setTimeout(()=>{this.currentIndex++,this.currentCharIndex=0,this.showNext()},2e3):this.typeWriter())}stop(){this.isActive=!1,this.isPaused=!1,this.container.classList.add("hidden"),this.startTimeout&&clearTimeout(this.startTimeout),this.typewriterTimeout&&clearTimeout(this.typewriterTimeout),this.nextTimeout&&clearTimeout(this.nextTimeout)}showNext(){if(!(!this.isActive||this.isPaused)){if(this.currentIndex>=this.dialogues.length){this.finish();return}this.textElem.textContent="",this.currentCharIndex=0,this.isWaitingForNext=!1,this.playRandomGlitch(),this.typeWriter()}}typeWriter(){if(!this.isActive||this.isPaused)return;const t=this.dialogues[this.currentIndex];this.currentCharIndex<t.length?(this.textElem.textContent=t.substring(0,this.currentCharIndex+1),this.currentCharIndex++,this.typewriterTimeout=setTimeout(()=>this.typeWriter(),30)):(this.isWaitingForNext=!0,this.nextTimeout=setTimeout(()=>{this.currentIndex++,this.currentCharIndex=0,this.showNext()},4e3))}playRandomGlitch(){let t;do t=Math.floor(Math.random()*this.glitchSounds.length);while(t===this.lastSoundIndex);this.lastSoundIndex=t,Tt.play(this.glitchSounds[t])}skip(){if(!this.isActive||this.isPaused)return;const t=this.dialogues[this.currentIndex];t&&(this.isWaitingForNext?(this.nextTimeout&&clearTimeout(this.nextTimeout),this.currentIndex++,this.currentCharIndex=0,this.showNext()):(this.typewriterTimeout&&clearTimeout(this.typewriterTimeout),this.textElem.textContent=t,this.currentCharIndex=t.length,this.isWaitingForNext=!0,this.nextTimeout&&clearTimeout(this.nextTimeout),this.nextTimeout=setTimeout(()=>{this.currentIndex++,this.currentCharIndex=0,this.showNext()},4e3)))}finish(){this.isActive=!1,this.container.classList.add("hidden"),localStorage.setItem("tutorialCompleted","true")}}class u_{constructor(){this.currentBiome="wilderness",this.lastBiomeCheck=0,this.biomeCheckInterval=3e3,this.windPlaying=!1,this.windVolume=0,this.targetWindVolume=0}getBiome(t,e,n){const s=n*.3048;if(s>3e3)return"highalt";if(e>34.23&&e<34.27&&t>-116.95&&t<-116.85)return"water";const a=[{lon:-118.24,lat:34.05,r:.12},{lon:-115.14,lat:36.17,r:.08},{lon:-117.16,lat:32.72,r:.08},{lon:-112.07,lat:33.45,r:.1}];for(const r of a)if(Math.sqrt((t-r.lon)**2+(e-r.lat)**2)<r.r)return"city";return e>34.5&&t>-117.5||e>33.5&&t>-116.5&&s<600?"desert":s>1500?"mountain":"wilderness"}update(t,e){if(!Tt||!Tt.listener)return;const n=e.speed||0;e.alt;const s=e.isFlapping||!1,a=e.isBoosting||!1,r=e.isTurbo||!1,o=8,l=80;if(n>o){const h=Math.min(1,(n-o)/(l-o));this.targetWindVolume=.08+h*.55,r&&(this.targetWindVolume=Math.min(.9,this.targetWindVolume*1.5)),a&&(this.targetWindVolume=Math.min(.85,this.targetWindVolume*1.3))}else this.targetWindVolume=.05;if(this.windVolume+=(this.targetWindVolume-this.windVolume)*t*3,Tt.sounds.has("wind")&&(this.windPlaying||(Tt.play("wind",.5),this.windPlaying=!0),Tt.setVolume("wind",this.windVolume)),Tt.sounds.has("jet-engine")&&Tt.isPlaying("jet-engine")){const h=n>30?Math.min(.3,(n-30)/200):0;Tt.setVolume("jet-engine",h)}s&&e.flapStrength>.3?(Tt.isPlaying("pitch")||Tt.play("pitch",.1),Tt.setVolume("pitch",.15+e.flapStrength*.2)):Tt.isPlaying("pitch")&&!s&&Tt.stop("pitch",.3),a&&(Tt.isPlaying("boost")||Tt.play("boost"));const c=Date.now();c-this.lastBiomeCheck>this.biomeCheckInterval&&(this.lastBiomeCheck=c,this.currentBiome=this.getBiome(e.lon,e.lat,e.alt))}startFlight(){this.windPlaying=!1,this.windVolume=.05}getCurrentBiome(){return this.currentBiome}}const eh=[{name:"Big Bear Lake",center:{lon:-116.905,lat:34.244},lengthM:11e3,widthM:1600,maxDepth:22,elevation:2060,rotation:-15,shape:"ellipse"},{name:"Baldwin Lake",center:{lon:-116.82,lat:34.28},lengthM:2500,widthM:1800,maxDepth:3,elevation:2050,rotation:0,shape:"ellipse"},{name:"Lake Arrowhead",center:{lon:-117.189,lat:34.258},lengthM:1800,widthM:900,maxDepth:56,elevation:1572,rotation:-30,shape:"ellipse"},{name:"Silverwood Lake",center:{lon:-117.333,lat:34.294},lengthM:3200,widthM:800,maxDepth:55,elevation:1050,rotation:-45,shape:"ellipse"},{name:"Gregory Lake",center:{lon:-117.258,lat:34.229},lengthM:400,widthM:200,maxDepth:8,elevation:1400,rotation:10,shape:"ellipse"}],d_=`
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
`,f_=`
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
`;class ou{constructor(t,e){this.viewer=t,this.scene=e,this.waterMeshes=[],this.uniforms=null,this.initialized=!1,this.init()}init(){this.uniforms={time:{value:0},waveAmplitude:{value:.3},waveFrequency:{value:.15},shallowColor:{value:new Ot(4886692)},deepColor:{value:new Ot(667228)},skyColor:{value:new Ot(8900331)},sunDirection:{value:new F(.5,.8,.3).normalize()},maxDepthMeters:{value:22},opacity:{value:1}};for(const t of eh){const e=this.createWaterMesh(t);e&&(this.waterMeshes.push({mesh:e,body:t}),this.scene.add(e))}this.initialized=!0}createWaterMesh(t){const s=new Ts(t.lengthM,t.widthM,64,32),a=s.attributes.position;for(let c=0;c<a.count;c++){const h=a.getX(c),u=a.getY(c),d=h/(t.lengthM/2),p=u/(t.widthM/2),g=d*d+p*p;if(g>1){const x=1/Math.sqrt(g);a.setX(c,h*x),a.setY(c,u*x)}}a.needsUpdate=!0,s.rotateX(-Math.PI/2),t.rotation&&s.rotateY(Se.degToRad(t.rotation));const r={...this.uniforms,maxDepthMeters:{value:t.maxDepth}},o=new Tn({uniforms:r,vertexShader:d_,fragmentShader:f_,transparent:!0,side:Le,depthWrite:!1}),l=new nt(s,o);return l.renderOrder=-1,l.layers.set(0),l.frustumCulled=!1,l}update(t,e){if(!this.initialized)return;const n=performance.now()*.001,s=e.lon,a=e.lat,r=e.alt,o=111320,l=111320*Math.cos(Se.degToRad(a));for(const{mesh:c,body:h}of this.waterMeshes){c.material.uniforms.time.value=n;const u=(h.center.lon-s)*l,d=(h.center.lat-a)*o,p=h.elevation-r*.3048;c.position.set(u,p,-d);const g=Math.sqrt(u*u+d*d);c.visible=g<3e4;const x=Math.max(.05,1-(r*.3048-h.elevation)/5e3);c.material.uniforms.waveAmplitude.value=.3*x;const m=n*.02;c.material.uniforms.sunDirection.value.set(Math.cos(m)*.5,.8,Math.sin(m)*.3).normalize()}}static isOverWater(t,e){for(const n of eh){const s=(t-n.center.lon)*111320*Math.cos(e*Math.PI/180),a=(e-n.center.lat)*111320,r=-(n.rotation||0)*Math.PI/180,o=s*Math.cos(r)-a*Math.sin(r),l=s*Math.sin(r)+a*Math.cos(r),c=o/(n.lengthM/2),h=l/(n.widthM/2);if(c*c+h*h<=1)return!0}return!1}dispose(){for(const{mesh:t}of this.waterMeshes)this.scene.remove(t),t.geometry.dispose(),t.material.dispose();this.waterMeshes=[]}}const qe={renderDistance:2e3,cellSize:40,maxTrees:3e3,updateInterval:500,lodNear:500,lodFar:1500},nh={jeffreyPine:{trunkHeight:20,trunkRadius:.4,crownHeight:12,crownRadius:4,trunkColor:6044190,crownColor:2972199,altMin:1500,altMax:2400,density:.6,biome:"mountain"},whiteFir:{trunkHeight:25,trunkRadius:.5,crownHeight:18,crownRadius:3.5,trunkColor:7029286,crownColor:1789211,altMin:1700,altMax:2700,density:.5,biome:"mountain"},lodgepolePine:{trunkHeight:18,trunkRadius:.3,crownHeight:10,crownRadius:2.5,trunkColor:8016432,crownColor:3828533,altMin:2100,altMax:3e3,density:.7,biome:"mountain"},scrubOak:{trunkHeight:6,trunkRadius:.2,crownHeight:5,crownRadius:3,trunkColor:5914152,crownColor:4880954,altMin:1e3,altMax:1800,density:.3,biome:"mountain"},alpinePine:{trunkHeight:8,trunkRadius:.25,crownHeight:6,crownRadius:2,trunkColor:7031344,crownColor:2774320,altMin:2700,altMax:3500,density:.15,biome:"mountain"},joshuaTree:{trunkHeight:8,trunkRadius:.3,crownHeight:4,crownRadius:3,trunkColor:9139029,crownColor:7048782,altMin:400,altMax:1800,density:.12,biome:"desert"},saguaroCactus:{trunkHeight:10,trunkRadius:.4,crownHeight:2,crownRadius:.5,trunkColor:4880970,crownColor:5933658,altMin:200,altMax:1200,density:.06,biome:"desert"},creosoteBush:{trunkHeight:2,trunkRadius:.1,crownHeight:2,crownRadius:1.5,trunkColor:7035454,crownColor:8031056,altMin:0,altMax:1500,density:.2,biome:"desert"},desertSage:{trunkHeight:1.2,trunkRadius:.05,crownHeight:1,crownRadius:.8,trunkColor:9075296,crownColor:10135674,altMin:0,altMax:2e3,density:.25,biome:"desert"},smokeyTree:{trunkHeight:5,trunkRadius:.15,crownHeight:4,crownRadius:2.5,trunkColor:8022869,crownColor:9083514,altMin:100,altMax:900,density:.08,biome:"desert"},californiaFanPalm:{trunkHeight:18,trunkRadius:.3,crownHeight:5,crownRadius:4,trunkColor:9139029,crownColor:3836730,altMin:0,altMax:500,density:.3,biome:"coastal"},datePalm:{trunkHeight:15,trunkRadius:.35,crownHeight:6,crownRadius:4.5,trunkColor:8022864,crownColor:2980397,altMin:0,altMax:300,density:.25,biome:"coastal"},mexicanFanPalm:{trunkHeight:25,trunkRadius:.25,crownHeight:4,crownRadius:3.5,trunkColor:10127978,crownColor:4889162,altMin:0,altMax:700,density:.2,biome:"urban"},urbanLondonPlane:{trunkHeight:12,trunkRadius:.3,crownHeight:8,crownRadius:5,trunkColor:8022618,crownColor:3832368,altMin:0,altMax:500,density:.15,biome:"urban"},urbanJacaranda:{trunkHeight:10,trunkRadius:.25,crownHeight:6,crownRadius:5,trunkColor:5917242,crownColor:8018602,altMin:0,altMax:500,density:.1,biome:"urban"},urbanOak:{trunkHeight:14,trunkRadius:.4,crownHeight:10,crownRadius:7,trunkColor:5916720,crownColor:3828264,altMin:0,altMax:800,density:.12,biome:"urban"},eucalyptus:{trunkHeight:20,trunkRadius:.35,crownHeight:10,crownRadius:4,trunkColor:10127994,crownColor:5933658,altMin:0,altMax:600,density:.15,biome:"coastal"},manzanita:{trunkHeight:3,trunkRadius:.1,crownHeight:3,crownRadius:2,trunkColor:9056288,crownColor:4876848,altMin:300,altMax:1500,density:.35,biome:"chaparral"},californiaLaurel:{trunkHeight:10,trunkRadius:.3,crownHeight:7,crownRadius:5,trunkColor:5917232,crownColor:2775584,altMin:200,altMax:1200,density:.2,biome:"chaparral"},ceanothus:{trunkHeight:4,trunkRadius:.15,crownHeight:3,crownRadius:2.5,trunkColor:6969920,crownColor:3832400,altMin:200,altMax:1500,density:.3,biome:"chaparral"}};function xi(i,t){let e=i*73856093^t*19349663;return e=(e>>16^e)*73244475,e=(e>>16^e)*73244475,e=e>>16^e,(e&2147483647)/2147483647}class p_{constructor(t,e){this.viewer=t,this.scene=e,this.trunkInstances=null,this.crownInstances=null,this.activeCells=new Map,this.lastUpdateTime=0,this.lastUpdatePos={lon:0,lat:0},this.treePositions=[],this.treeCount=0,this.trunkGeometry=null,this.crownGeometries={},this.initialized=!1,this.init()}init(){this.trunkGeometry=new Ze(.3,.5,1,5,1),this.trunkGeometry.translate(0,.5,0),this.crownGeometries.conifer=new Je(1,1,6,1),this.crownGeometries.conifer.translate(0,.5,0),this.crownGeometries.deciduous=new ee(1,5,4),this.crownGeometries.deciduous.translate(0,0,0),this.crownGeometries.palm=new ee(1,6,4),this.crownGeometries.palm.scale(1,.4,1),this.crownGeometries.palm.translate(0,.2,0),this.crownGeometries.cactus=new Ze(.3,.4,1,5,1),this.crownGeometries.cactus.translate(0,.5,0);const t=new Ut({color:6044190,flatShading:!0});this.trunkInstances=new nn(this.trunkGeometry,t,qe.maxTrees),this.trunkInstances.count=0,this.trunkInstances.frustumCulled=!1,this.trunkInstances.layers.set(0);const e=new Ut({color:2972199,flatShading:!0});this.coniferInstances=new nn(this.crownGeometries.conifer,e,qe.maxTrees),this.coniferInstances.count=0,this.coniferInstances.frustumCulled=!1,this.coniferInstances.layers.set(0);const n=new Ut({color:3832368,flatShading:!0});this.deciduousInstances=new nn(this.crownGeometries.deciduous,n,1e3),this.deciduousInstances.count=0,this.deciduousInstances.frustumCulled=!1,this.deciduousInstances.layers.set(0);const s=new Ut({color:3836730,flatShading:!0});this.palmInstances=new nn(this.crownGeometries.palm,s,500),this.palmInstances.count=0,this.palmInstances.frustumCulled=!1,this.palmInstances.layers.set(0);const a=new Ut({color:4880970,flatShading:!0});this.cactusInstances=new nn(this.crownGeometries.cactus,a,500),this.cactusInstances.count=0,this.cactusInstances.frustumCulled=!1,this.cactusInstances.layers.set(0),this.crownInstances=this.coniferInstances,this.scene.add(this.trunkInstances),this.scene.add(this.coniferInstances),this.scene.add(this.deciduousInstances),this.scene.add(this.palmInstances),this.scene.add(this.cactusInstances),this.initialized=!0}getBiome(t,e,n){if(n>1500)return"mountain";if(n>600&&n<1500)return"chaparral";if(e>34.5&&t>-117.5||e>33.5&&t>-116.5&&n<600||e<34&&e>33.3&&t>-116.8&&t<-115.5||e<34&&t>-113||e<33&&t>-112)return"desert";if(t<-117.5&&n<300||t<-118&&e<34.5)return"coastal";const s=[{lon:-118.24,lat:34.05,r:.15},{lon:-118.19,lat:33.77,r:.08},{lon:-117.16,lat:32.72,r:.12},{lon:-115.14,lat:36.17,r:.1},{lon:-117.91,lat:33.84,r:.08},{lon:-118.14,lat:34.15,r:.05},{lon:-112.07,lat:33.45,r:.12},{lon:-117.38,lat:33.98,r:.06},{lon:-117.29,lat:34.11,r:.05}];for(const a of s)if(Math.sqrt((t-a.lon)**2+(e-a.lat)**2)<a.r)return"urban";return n<300&&e>34.5?"desert":"chaparral"}getSpeciesForPosition(t,e,n){const s=this.getBiome(e,n,t),a=[];for(const[r,o]of Object.entries(nh))t>=o.altMin&&t<=o.altMax&&o.biome===s&&a.push({name:r,...o});if(a.length===0){const o={mountain:["chaparral"],chaparral:["mountain","coastal"],desert:["chaparral"],coastal:["urban","chaparral"],urban:["coastal","chaparral"]}[s]||[];for(const l of o){for(const[c,h]of Object.entries(nh))t>=h.altMin&&t<=h.altMax&&h.biome===l&&a.push({name:c,...h});if(a.length>0)break}}return a}isWaterArea(t,e){return ou.isOverWater(t,e)}generateTreesForCell(t,e,n,s,a){const r=`${t},${e}`;if(this.activeCells.has(r))return;const o=t*qe.cellSize,l=e*qe.cellSize,c=111320,h=111320*Math.cos(Se.degToRad(s)),u=n+o/h,d=s+l/c;if(this.isWaterArea(u,d)){this.activeCells.set(r,[]);return}const p=Cesium.Cartographic.fromDegrees(u,d),g=this.viewer.scene.globe.getHeight(p);if(g==null)return;const x=g,m=this.getSpeciesForPosition(x,u,d);if(m.length===0){this.activeCells.set(r,[]);return}xi(t,e);const f=[],b=3;for(let w=0;w<b;w++)for(let y=0;y<b;y++){const A=xi(t*100+w,e*100+y),P=Math.floor(A*m.length)%m.length,T=m[P];if(xi(t*200+w,e*200+y)>T.density)continue;const D=xi(t*300+w,e*300+y)*.8,M=xi(t*400+w,e*400+y)*.8,S=o+(w+D)*(qe.cellSize/b),v=l+(y+M)*(qe.cellSize/b),C=.7+xi(t*500+w,e*500+y)*.6;f.push({x:S,z:v,terrainHeight:g,species:T,sizeScale:C})}this.activeCells.set(r,f)}update(t,e){if(!this.initialized)return;const n=Date.now();if(n-this.lastUpdateTime<qe.updateInterval)return;this.lastUpdateTime=n;const s=e.lon,a=e.lat,r=e.alt*.3048;if(r>3e3){this.trunkInstances.count=0,this.coniferInstances.count=0,this.deciduousInstances.count=0,this.palmInstances.count=0,this.cactusInstances.count=0;return}const o=Math.min(qe.renderDistance,Math.max(400,r*2)),l=Math.ceil(o/qe.cellSize),c=l+2;for(const[P,T]of this.activeCells){const[D,M]=P.split(",").map(Number);(Math.abs(D)>c||Math.abs(M)>c)&&this.activeCells.delete(P)}for(let P=-l;P<=l;P++)for(let T=-l;T<=l;T++)Math.sqrt(P*P+T*T)*qe.cellSize>o||this.generateTreesForCell(P,T,s,a,eagleAlt);let h=0,u=0,d=0,p=0,g=0;const x=new jt,m=new F,f=new $e,b=new F,w=new Ot,y={mountain:"conifer",chaparral:"deciduous",desert:"cactus",coastal:"palm",urban:"deciduous"};for(const[P,T]of this.activeCells){for(const D of T){if(h>=qe.maxTrees)break;const M=Math.sqrt(D.x*D.x+D.z*D.z);if(M>o)continue;const S=M>qe.lodFar?.7:M>qe.lodNear?.85:1,v=D.species,C=D.sizeScale*S,L=D.terrainHeight-r;m.set(D.x,L,D.z),b.set(v.trunkRadius*C*2,v.trunkHeight*C,v.trunkRadius*C*2),x.compose(m,f,b),this.trunkInstances.setMatrixAt(h,x),w.setHex(v.trunkColor),w.multiplyScalar(.8+xi(Math.floor(D.x),Math.floor(D.z))*.4),this.trunkInstances.setColorAt(h,w),h++,m.set(D.x,L+v.trunkHeight*C*.7,D.z),b.set(v.crownRadius*C*2,v.crownHeight*C,v.crownRadius*C*2),x.compose(m,f,b),w.setHex(v.crownColor),w.multiplyScalar(.7+xi(Math.floor(D.x)+1e3,Math.floor(D.z)+1e3)*.6);const N=y[v.biome]||"conifer";N==="conifer"&&u<qe.maxTrees?(this.coniferInstances.setMatrixAt(u,x),this.coniferInstances.setColorAt(u,w),u++):N==="deciduous"&&d<1e3?(this.deciduousInstances.setMatrixAt(d,x),this.deciduousInstances.setColorAt(d,w),d++):N==="palm"&&p<500?(this.palmInstances.setMatrixAt(p,x),this.palmInstances.setColorAt(p,w),p++):N==="cactus"&&g<500?(this.cactusInstances.setMatrixAt(g,x),this.cactusInstances.setColorAt(g,w),g++):u<qe.maxTrees&&(this.coniferInstances.setMatrixAt(u,x),this.coniferInstances.setColorAt(u,w),u++)}if(h>=qe.maxTrees)break}this.trunkInstances.count=h,this.coniferInstances.count=u,this.deciduousInstances.count=d,this.palmInstances.count=p,this.cactusInstances.count=g;const A=P=>{P.count>0&&(P.instanceMatrix.needsUpdate=!0,P.instanceColor&&(P.instanceColor.needsUpdate=!0))};A(this.trunkInstances),A(this.coniferInstances),A(this.deciduousInstances),A(this.palmInstances),A(this.cactusInstances),this.lastUpdatePos={lon:s,lat:a}}clear(){this.activeCells.clear(),this.trunkInstances.count=0,this.coniferInstances.count=0,this.deciduousInstances.count=0,this.palmInstances.count=0,this.cactusInstances.count=0}dispose(){[this.trunkInstances,this.coniferInstances,this.deciduousInstances,this.palmInstances,this.cactusInstances].forEach(t=>{t&&(this.scene.remove(t),t.dispose())}),this.trunkGeometry&&this.trunkGeometry.dispose();for(const t of Object.values(this.crownGeometries))t.dispose()}}const m_=[{name:"Big Bear Ski Resort",description:"Snow Summit & Bear Mountain ski area",lon:-116.8595,lat:34.2272,elevation:2400,structures:[{type:"lodge",width:40,depth:25,height:12,color:9136404,roofColor:4861952},{type:"lodge",width:30,depth:20,height:10,color:9136404,roofColor:4861952,offsetX:60,offsetZ:20},{type:"tower",width:4,depth:4,height:25,color:8947848,offsetX:-30,offsetZ:-20},{type:"tower",width:4,depth:4,height:25,color:8947848,offsetX:-30,offsetZ:40},{type:"tower",width:4,depth:4,height:25,color:8947848,offsetX:-30,offsetZ:100},{type:"tower",width:4,depth:4,height:25,color:8947848,offsetX:-30,offsetZ:160},{type:"flat",width:80,depth:60,height:.3,color:3355443,offsetX:80,offsetZ:-30}],labelOffset:30},{name:"Las Vegas Strip",description:"The famous Las Vegas Boulevard casino strip",lon:-115.1728,lat:36.1147,elevation:610,structures:[{type:"pyramid",width:100,depth:100,height:110,color:1710618,offsetX:0,offsetZ:-200},{type:"skyscraper",width:60,depth:40,height:145,color:12887636,offsetX:-80,offsetZ:-350},{type:"skyscraper",width:80,depth:35,height:155,color:15260872,offsetX:0,offsetZ:100},{type:"skyscraper",width:70,depth:50,height:120,color:16117984,offsetX:60,offsetZ:250},{type:"curved_tower",width:50,depth:50,height:190,color:9127187,offsetX:-50,offsetZ:500},{type:"tower",width:12,depth:12,height:350,color:13421772,offsetX:0,offsetZ:900},{type:"skyscraper",width:90,depth:70,height:90,color:25600,offsetX:100,offsetZ:-100},{type:"skyscraper",width:55,depth:40,height:180,color:4620980,offsetX:30,offsetZ:0},{type:"skyscraper",width:45,depth:35,height:185,color:7372944,offsetX:-40,offsetZ:50},{type:"skyscraper",width:60,depth:45,height:145,color:14596231,offsetX:40,offsetZ:400},{type:"tower",width:8,depth:8,height:165,color:6908265,offsetX:50,offsetZ:150},{type:"flat",width:35,depth:1400,height:.5,color:2236962,offsetX:0,offsetZ:200}],labelOffset:360},{name:"Hollywood Hills",description:"Hollywood Sign and surrounding hills",lon:-118.3215,lat:34.1341,elevation:480,structures:[{type:"sign_letter",width:3,depth:1,height:14,color:16777215,offsetX:-50,offsetZ:0},{type:"sign_letter",width:3,depth:1,height:14,color:16777215,offsetX:-38,offsetZ:0},{type:"sign_letter",width:3,depth:1,height:14,color:16777215,offsetX:-26,offsetZ:0},{type:"sign_letter",width:3,depth:1,height:14,color:16777215,offsetX:-14,offsetZ:0},{type:"sign_letter",width:3,depth:1,height:14,color:16777215,offsetX:-2,offsetZ:0},{type:"sign_letter",width:3,depth:1,height:14,color:16777215,offsetX:10,offsetZ:0},{type:"sign_letter",width:3,depth:1,height:14,color:16777215,offsetX:22,offsetZ:0},{type:"sign_letter",width:3,depth:1,height:14,color:16777215,offsetX:34,offsetZ:0},{type:"sign_letter",width:3,depth:1,height:14,color:16777215,offsetX:46,offsetZ:0},{type:"dome",width:20,depth:20,height:15,color:15260872,offsetX:200,offsetZ:-300},{type:"box",width:40,depth:30,height:8,color:15260872,offsetX:200,offsetZ:-300}],labelOffset:20},{name:"Twentynine Palms",description:"Marine Corps Air Ground Combat Center",lon:-116.0542,lat:34.1356,elevation:600,structures:[{type:"military_building",width:60,depth:30,height:8,color:12759680,offsetX:0,offsetZ:0},{type:"military_building",width:40,depth:25,height:6,color:12759680,offsetX:80,offsetZ:30},{type:"military_building",width:50,depth:20,height:7,color:12759680,offsetX:-70,offsetZ:50},{type:"hangar",width:50,depth:40,height:15,color:8421504,offsetX:0,offsetZ:-100},{type:"hangar",width:50,depth:40,height:15,color:8421504,offsetX:70,offsetZ:-100},{type:"flat",width:45,depth:2500,height:.3,color:2763306,offsetX:200,offsetZ:0},{type:"tower",width:8,depth:8,height:25,color:8421504,offsetX:150,offsetZ:-50},{type:"box",width:30,depth:12,height:5,color:12759680,offsetX:-150,offsetZ:-30},{type:"box",width:30,depth:12,height:5,color:12759680,offsetX:-150,offsetZ:-60},{type:"box",width:30,depth:12,height:5,color:12759680,offsetX:-150,offsetZ:-90}],labelOffset:30},{name:"Fort Irwin NTC",description:"National Training Center - US Army desert warfare training",lon:-116.6833,lat:35.2628,elevation:730,structures:[{type:"military_building",width:80,depth:40,height:10,color:12759680,offsetX:0,offsetZ:0},{type:"military_building",width:60,depth:30,height:8,color:12759680,offsetX:100,offsetZ:40},{type:"flat",width:200,depth:150,height:.3,color:11047024,offsetX:-200,offsetZ:0},{type:"hangar",width:60,depth:50,height:18,color:7368816,offsetX:0,offsetZ:-150},{type:"hangar",width:60,depth:50,height:18,color:7368816,offsetX:80,offsetZ:-150},{type:"box",width:40,depth:15,height:6,color:12759680,offsetX:-100,offsetZ:80},{type:"box",width:40,depth:15,height:6,color:12759680,offsetX:-100,offsetZ:110},{type:"box",width:40,depth:15,height:6,color:12759680,offsetX:-100,offsetZ:140},{type:"tower",width:5,depth:5,height:40,color:11184810,offsetX:150,offsetZ:-80},{type:"water_tower",width:10,depth:10,height:30,color:13421772,offsetX:180,offsetZ:50}],labelOffset:45},{name:"Reagan Presidential Library",description:"Ronald Reagan Presidential Library & Museum, Simi Valley",lon:-118.82,lat:34.2597,elevation:470,structures:[{type:"box",width:70,depth:50,height:12,color:16115404,offsetX:0,offsetZ:0},{type:"box",width:30,depth:60,height:10,color:16115404,offsetX:-50,offsetZ:10},{type:"hangar",width:60,depth:80,height:22,color:14538176,offsetX:80,offsetZ:-50},{type:"flat",width:40,depth:40,height:.2,color:13808780,offsetX:0,offsetZ:60},{type:"tower",width:6,depth:6,height:18,color:16115404,offsetX:-20,offsetZ:-30},{type:"flat",width:100,depth:60,height:.3,color:3355443,offsetX:-100,offsetZ:-60}],labelOffset:25},{name:"Rose Bowl",description:"Rose Bowl Stadium, Pasadena",lon:-118.1676,lat:34.1613,elevation:260,structures:[{type:"stadium",width:200,depth:150,height:25,color:11047024,offsetX:0,offsetZ:0},{type:"flat",width:110,depth:75,height:.5,color:2263842,offsetX:0,offsetZ:0},{type:"flat",width:200,depth:100,height:.3,color:3355443,offsetX:0,offsetZ:-140},{type:"flat",width:150,depth:100,height:.3,color:3355443,offsetX:200,offsetZ:0}],labelOffset:30}],En={};function us(){return En.box||(En.box=new ce(1,1,1)),En.box}function g_(){return En.cone||(En.cone=new Je(.5,1,4)),En.cone}function zs(){return En.cylinder||(En.cylinder=new Ze(.5,.5,1,8)),En.cylinder}function ih(){return En.sphere||(En.sphere=new ee(.5,8,6)),En.sphere}function x_(i){const t=new De,e=new Ut({color:i.color,flatShading:!0});switch(i.type){case"box":case"military_building":case"sign_letter":case"lodge":{const n=new nt(us(),e);if(n.scale.set(i.width,i.height,i.depth),n.position.y=i.height/2,t.add(n),i.type==="lodge"&&i.roofColor){const s=new Ut({color:i.roofColor,flatShading:!0}),a=new nt(g_(),s);a.scale.set(i.width*1.1,i.height*.5,i.depth*1.1),a.position.y=i.height+i.height*.25,t.add(a)}break}case"skyscraper":case"curved_tower":{const n=new nt(us(),e);n.scale.set(i.width,i.height,i.depth),n.position.y=i.height/2,t.add(n);const s=new Ut({color:8956620,transparent:!0,opacity:.4});for(let a=0;a<5;a++){const r=new nt(us(),s),o=i.height*.15+i.height*.7*a/5;r.scale.set(i.width+.5,i.height*.08,i.depth+.5),r.position.y=o,t.add(r)}break}case"tower":{const n=new nt(zs(),e);n.scale.set(i.width,i.height,i.depth),n.position.y=i.height/2,t.add(n);const s=new Ut({color:11184810}),a=new nt(zs(),s);a.scale.set(i.width*2,2,i.depth*2),a.position.y=i.height,t.add(a);break}case"water_tower":{const n=new Ut({color:8947848});for(let a=0;a<4;a++){const r=new nt(zs(),n),o=a/4*Math.PI*2;r.scale.set(1,i.height*.7,1),r.position.set(Math.cos(o)*3,i.height*.35,Math.sin(o)*3),t.add(r)}const s=new nt(ih(),e);s.scale.set(i.width,i.width*.6,i.depth),s.position.y=i.height*.75,t.add(s);break}case"pyramid":{const n=new Je(.707,1,4);n.rotateY(Math.PI/4);const s=new nt(n,e);s.scale.set(i.width,i.height,i.depth),s.position.y=i.height/2,t.add(s);const a=new Ue({color:16777096,transparent:!0,opacity:.15}),r=new nt(zs(),a);r.scale.set(3,500,3),r.position.y=i.height+250,t.add(r);break}case"dome":{const n=new nt(ih(),e);n.scale.set(i.width,i.height,i.depth),n.position.y=i.height/2,t.add(n);break}case"hangar":{const n=new nt(us(),e);n.scale.set(i.width,i.height,i.depth),n.position.y=i.height/2,t.add(n);const s=new Ut({color:i.color,flatShading:!0}),a=new nt(zs(),s);a.scale.set(i.width,i.depth,i.width*.3),a.rotation.z=Math.PI/2,a.position.y=i.height,t.add(a);break}case"stadium":{const n=new Ut({color:i.color,flatShading:!0}),s=32,a=i.width/2,r=i.depth/2,o=15;for(let l=0;l<s;l++){const c=l/s*Math.PI*2,h=Math.cos(c)*a,u=Math.sin(c)*r,d=new nt(us(),n);d.scale.set(o,i.height,o),d.position.set(h,i.height/2,u),d.lookAt(0,i.height/2,0),t.add(d)}break}default:{const n=new nt(us(),e);n.scale.set(i.width,i.height||.5,i.depth),n.position.y=(i.height||.5)/2,t.add(n);break}}return t.position.set(i.offsetX||0,0,i.offsetZ||0),t.traverse(n=>{n.layers.set(0)}),t}class __{constructor(t,e){this.viewer=t,this.scene=e,this.landmarkGroups=[],this.initialized=!1,this.init()}init(){for(const t of m_){const e=new De;e.visible=!1;for(const n of t.structures){const s=x_(n);e.add(s)}e.traverse(n=>{n.layers.set(0)}),this.scene.add(e),this.landmarkGroups.push({group:e,landmark:t,visible:!1})}this.initialized=!0}update(t,e){if(!this.initialized)return;const n=e.lon,s=e.lat,r=e.alt*.3048,o=111320,l=111320*Math.cos(Se.degToRad(s));for(const c of this.landmarkGroups){const h=c.landmark,u=(h.lon-n)*l,d=(h.lat-s)*o,p=Math.sqrt(u*u+d*d),g=Math.max(5e3,r*8),x=p<g;if(c.group.visible=x,x){const m=h.elevation-r;c.group.position.set(u,m,-d);const f=p>3e3?1+(p-3e3)/2e4:1;c.group.scale.setScalar(f)}}}dispose(){for(const t of this.landmarkGroups)this.scene.remove(t.group),t.group.traverse(e=>{e.geometry&&e.geometry.dispose(),e.material&&e.material.dispose()});this.landmarkGroups=[]}}const v_=[{name:"Los Angeles",lon:-118.2437,lat:34.0522,elevation:90,radius:5e3,density:.7,minHeight:5,maxHeight:280,downtownRadius:1500,style:"modern",gridSize:30},{name:"Downtown LA",lon:-118.2468,lat:34.0407,elevation:90,radius:1200,density:.9,minHeight:30,maxHeight:310,downtownRadius:600,style:"modern",gridSize:25},{name:"Las Vegas (City)",lon:-115.1398,lat:36.1699,elevation:610,radius:4e3,density:.6,minHeight:5,maxHeight:100,downtownRadius:1e3,style:"modern",gridSize:30},{name:"San Diego",lon:-117.1611,lat:32.7157,elevation:20,radius:3500,density:.65,minHeight:5,maxHeight:150,downtownRadius:800,style:"modern",gridSize:28},{name:"Phoenix",lon:-112.074,lat:33.4484,elevation:340,radius:5e3,density:.5,minHeight:5,maxHeight:130,downtownRadius:1e3,style:"modern",gridSize:35},{name:"Long Beach",lon:-118.1937,lat:33.7701,elevation:10,radius:2e3,density:.6,minHeight:5,maxHeight:90,downtownRadius:500,style:"modern",gridSize:28},{name:"Riverside",lon:-117.3755,lat:33.9806,elevation:260,radius:1800,density:.45,minHeight:5,maxHeight:50,downtownRadius:400,style:"suburban",gridSize:35},{name:"San Bernardino",lon:-117.2898,lat:34.1083,elevation:330,radius:1500,density:.4,minHeight:5,maxHeight:40,downtownRadius:400,style:"suburban",gridSize:35},{name:"Bakersfield",lon:-119.0187,lat:35.3733,elevation:120,radius:2e3,density:.4,minHeight:4,maxHeight:40,downtownRadius:500,style:"suburban",gridSize:35},{name:"Palm Springs",lon:-116.5453,lat:33.8303,elevation:150,radius:1200,density:.35,minHeight:4,maxHeight:30,downtownRadius:300,style:"resort",gridSize:40},{name:"Santa Barbara",lon:-119.6982,lat:34.4208,elevation:15,radius:1500,density:.5,minHeight:4,maxHeight:30,downtownRadius:400,style:"spanish",gridSize:30},{name:"Pasadena",lon:-118.1445,lat:34.1478,elevation:260,radius:1200,density:.5,minHeight:5,maxHeight:50,downtownRadius:400,style:"modern",gridSize:30},{name:"Glendale",lon:-118.2551,lat:34.1425,elevation:180,radius:1e3,density:.55,minHeight:5,maxHeight:70,downtownRadius:400,style:"modern",gridSize:28},{name:"Burbank",lon:-118.309,lat:34.1808,elevation:180,radius:1e3,density:.5,minHeight:5,maxHeight:50,downtownRadius:400,style:"modern",gridSize:30},{name:"Tucson",lon:-110.9747,lat:32.2226,elevation:730,radius:2500,density:.4,minHeight:4,maxHeight:60,downtownRadius:600,style:"desert",gridSize:35},{name:"Henderson",lon:-114.9817,lat:36.0395,elevation:590,radius:1500,density:.4,minHeight:4,maxHeight:30,downtownRadius:400,style:"suburban",gridSize:35},{name:"Anaheim",lon:-117.9145,lat:33.8366,elevation:50,radius:1500,density:.55,minHeight:5,maxHeight:50,downtownRadius:500,style:"modern",gridSize:30},{name:"Irvine",lon:-117.8265,lat:33.6846,elevation:25,radius:1500,density:.5,minHeight:5,maxHeight:50,downtownRadius:400,style:"modern",gridSize:30},{name:"Oxnard",lon:-119.1771,lat:34.1975,elevation:15,radius:1e3,density:.4,minHeight:4,maxHeight:25,downtownRadius:300,style:"suburban",gridSize:35},{name:"Fresno",lon:-119.7871,lat:36.7378,elevation:93,radius:2e3,density:.45,minHeight:4,maxHeight:50,downtownRadius:500,style:"suburban",gridSize:35}],sh={modern:[8952234,6715306,10070715,11189196,5596791,7833753,4478310,12307677],suburban:[14535850,13417369,12298888,15654331,13154454,12562317],resort:[16115404,15259061,16772560,15785664,14732464],spanish:[15255712,13936757,15784120,13408614,12290133],desert:[13808780,13151615,12560514,13940886,13411952]};function Pn(i,t){let e=i*73856093^t*19349663;return e=(e>>16^e)*73244475,e=(e>>16^e)*73244475,e=e>>16^e,(e&2147483647)/2147483647}const ds=5e3;class M_{constructor(t,e){this.viewer=t,this.scene=e,this.buildingInstances=null,this.windowInstances=null,this.rooftopInstances=null,this.generatedCities=new Map,this.activeCities=[],this.lastUpdateTime=0,this.initialized=!1,this.init()}init(){const t=new ce(1,1,1);t.translate(0,.5,0);const e=new Ut({color:8952234,flatShading:!0});this.buildingInstances=new nn(t,e,ds),this.buildingInstances.count=0,this.buildingInstances.frustumCulled=!1,this.buildingInstances.layers.set(0),this.scene.add(this.buildingInstances);const n=new ce(1,1,1);n.translate(0,.5,0);const s=new Ue({color:16772778,transparent:!0,opacity:.35});this.windowInstances=new nn(n,s,ds),this.windowInstances.count=0,this.windowInstances.frustumCulled=!1,this.windowInstances.layers.set(0),this.scene.add(this.windowInstances);const a=new ce(1,1,1);a.translate(0,.5,0);const r=new Ut({color:6710886,flatShading:!0});this.rooftopInstances=new nn(a,r,2e3),this.rooftopInstances.count=0,this.rooftopInstances.frustumCulled=!1,this.rooftopInstances.layers.set(0),this.scene.add(this.rooftopInstances);for(const o of v_)this.generateCity(o);this.initialized=!0}generateCity(t){const e=[],n=Math.ceil(t.radius/t.gridSize),s=sh[t.style]||sh.modern;for(let a=-n;a<=n;a++)for(let r=-n;r<=n;r++){const o=a*t.gridSize,l=r*t.gridSize,c=Math.sqrt(o*o+l*l);if(c>t.radius)continue;const h=Pn(a+t.lon*1e4,r+t.lat*1e4);if(h>t.density)continue;const u=t.style==="modern"?4:5;if(a%u===0||r%u===0)continue;1-Math.min(1,c/t.radius);const d=c<t.downtownRadius?1-c/t.downtownRadius*.5:.3*(1-(c-t.downtownRadius)/(t.radius-t.downtownRadius)),p=Pn(a*200+t.lon*5e3,r*200+t.lat*5e3),g=t.minHeight+(t.maxHeight-t.minHeight)*d*p,x=Math.max(t.minHeight,g),m=Pn(a*300,r*300),f=t.gridSize*.4+m*t.gridSize*.4,b=t.gridSize*.4+Pn(a*400,r*400)*t.gridSize*.4,w=Math.floor(Pn(a*500,r*500)*s.length)%s.length,y=x>30,A=x>80&&Pn(a*700,r*700)>.6,P=Math.max(1,Math.floor(x/4)),T=x>60&&Pn(a*800,r*800)>.5;e.push({x:o+(h-.5)*t.gridSize*.3,z:l+(Pn(a*600,r*600)-.5)*t.gridSize*.3,width:f,depth:b,height:x,color:s[w],hasRooftopDetail:y,hasAntenna:A,windowRows:P,hasSetback:T,setbackHeight:T?x*(.6+Pn(a*900,r*900)*.3):0,setbackInset:T?.7:1})}this.generatedCities.set(t.name,{city:t,buildings:e})}update(t,e){if(!this.initialized)return;const n=Date.now();if(n-this.lastUpdateTime<300)return;this.lastUpdateTime=n;const s=e.lon,a=e.lat,o=e.alt*.3048,l=111320,c=111320*Math.cos(Se.degToRad(a)),h=Math.max(8e3,o*10),u=new jt,d=new F,p=new $e,g=new F,x=new Ot;let m=0,f=0,b=0;for(const[w,{city:y,buildings:A}]of this.generatedCities){const P=(y.lon-s)*c,T=(y.lat-a)*l;if(Math.sqrt(P*P+T*T)>h+y.radius)continue;const M=y.elevation-o;for(const S of A){if(m>=ds)break;const v=P+S.x,C=-T-S.z,L=Math.sqrt(v*v+C*C);if(L>h)continue;let N=S.height;if(L>h*.7&&N<20)continue;d.set(v,M,C),g.set(S.width,N,S.depth),u.compose(d,p,g),this.buildingInstances.setMatrixAt(m,u),x.setHex(S.color);const U=.85+Pn(Math.floor(S.x*7),Math.floor(S.z*7))*.3;if(x.multiplyScalar(U),this.buildingInstances.setColorAt(m,x),L<h*.5&&f<ds&&N>10){const H=N*.8;d.set(v,M+N*.1,C),g.set(S.width+.3,H,S.depth+.3),u.compose(d,p,g),this.windowInstances.setMatrixAt(f,u);const k=Pn(Math.floor(S.x*3),Math.floor(S.z*3))>.5?16772778:11197951;x.setHex(k),this.windowInstances.setColorAt(f,x),f++}if(L<h*.3&&b<2e3&&S.hasRooftopDetail&&(d.set(v+S.width*.2,M+N,C),g.set(S.width*.3,3,S.depth*.3),u.compose(d,p,g),this.rooftopInstances.setMatrixAt(b,u),x.setHex(5592405),this.rooftopInstances.setColorAt(b,x),b++,S.hasAntenna&&b<2e3&&(d.set(v,M+N,C),g.set(.5,N*.15,.5),u.compose(d,p,g),this.rooftopInstances.setMatrixAt(b,u),x.setHex(13369344),this.rooftopInstances.setColorAt(b,x),b++)),S.hasSetback&&m<ds-1){m++;const H=N-S.setbackHeight;d.set(v,M+S.setbackHeight,C),g.set(S.width*S.setbackInset,H,S.depth*S.setbackInset),u.compose(d,p,g),this.buildingInstances.setMatrixAt(m,u),x.setHex(S.color),x.multiplyScalar(U*1.1),this.buildingInstances.setColorAt(m,x)}m++}if(m>=ds)break}this.buildingInstances.count=m,this.windowInstances.count=f,this.rooftopInstances.count=b,m>0&&(this.buildingInstances.instanceMatrix.needsUpdate=!0,this.buildingInstances.instanceColor&&(this.buildingInstances.instanceColor.needsUpdate=!0)),f>0&&(this.windowInstances.instanceMatrix.needsUpdate=!0,this.windowInstances.instanceColor&&(this.windowInstances.instanceColor.needsUpdate=!0)),b>0&&(this.rooftopInstances.instanceMatrix.needsUpdate=!0,this.rooftopInstances.instanceColor&&(this.rooftopInstances.instanceColor.needsUpdate=!0))}dispose(){[this.buildingInstances,this.windowInstances,this.rooftopInstances].forEach(t=>{t&&(this.scene.remove(t),t.dispose())})}}const y_=[{name:"I-15 (LA to Vegas)",lanes:4,vehicleDensity:.8,waypoints:[{lon:-118.26,lat:34.05},{lon:-117.91,lat:34.13},{lon:-117.39,lat:34.17},{lon:-117.29,lat:34.38},{lon:-117,lat:34.83},{lon:-116.17,lat:35.26},{lon:-115.55,lat:35.6},{lon:-115.17,lat:36.08},{lon:-115.14,lat:36.17}]},{name:"I-10 (LA to Phoenix)",lanes:4,vehicleDensity:.7,waypoints:[{lon:-118.24,lat:34.04},{lon:-117.88,lat:34},{lon:-117.38,lat:33.98},{lon:-116.97,lat:33.93},{lon:-116.54,lat:33.83},{lon:-115.5,lat:33.72},{lon:-114.57,lat:33.42},{lon:-113.5,lat:33.45},{lon:-112.07,lat:33.45}]},{name:"I-5 (LA to Bakersfield)",lanes:3,vehicleDensity:.6,waypoints:[{lon:-118.24,lat:34.05},{lon:-118.38,lat:34.19},{lon:-118.53,lat:34.39},{lon:-118.73,lat:34.74},{lon:-118.94,lat:34.97},{lon:-119.02,lat:35.37}]},{name:"SR-18/138 (Big Bear Highway)",lanes:1,vehicleDensity:.3,waypoints:[{lon:-117.29,lat:34.25},{lon:-117.09,lat:34.25},{lon:-116.94,lat:34.24},{lon:-116.86,lat:34.24},{lon:-116.78,lat:34.26}]},{name:"I-405 (LA)",lanes:5,vehicleDensity:.9,waypoints:[{lon:-118.37,lat:33.79},{lon:-118.39,lat:33.94},{lon:-118.43,lat:34.02},{lon:-118.47,lat:34.08},{lon:-118.49,lat:34.17},{lon:-118.47,lat:34.23}]},{name:"US-95 (Vegas to NV)",lanes:2,vehicleDensity:.4,waypoints:[{lon:-115.14,lat:36.17},{lon:-115.12,lat:36.3},{lon:-115.14,lat:36.5},{lon:-115.32,lat:36.78}]},{name:"SR-62 (29 Palms Hwy)",lanes:1,vehicleDensity:.2,waypoints:[{lon:-116.54,lat:34.05},{lon:-116.28,lat:34.07},{lon:-116.05,lat:34.14},{lon:-115.75,lat:34.25}]}],S_=[{name:"Big Bear Lake",centerLon:-116.905,centerLat:34.244,radiusM:4e3,count:8,elevation:2060},{name:"Lake Arrowhead",centerLon:-117.189,centerLat:34.258,radiusM:800,count:4,elevation:1572},{name:"Silverwood Lake",centerLon:-117.333,centerLat:34.294,radiusM:1200,count:3,elevation:1050},{name:"San Diego Bay",centerLon:-117.175,centerLat:32.685,radiusM:3e3,count:12,elevation:0},{name:"Long Beach Harbor",centerLon:-118.19,centerLat:33.74,radiusM:4e3,count:15,elevation:0},{name:"Lake Mead (edge)",centerLon:-114.78,centerLat:36.02,radiusM:5e3,count:6,elevation:372}],w_=[{name:"LAX Approach",startLon:-119.5,startLat:33.8,endLon:-118.41,endLat:33.94,altitude:3e3,count:3,speed:130},{name:"LAX Departure N",startLon:-118.41,startLat:33.94,endLon:-118.8,endLat:34.8,altitude:8e3,count:2,speed:200},{name:"Vegas Approach S",startLon:-115.5,startLat:35.5,endLon:-115.15,endLat:36.08,altitude:4e3,count:2,speed:140},{name:"Phoenix Route",startLon:-118,startLat:34,endLon:-112,endLat:33.5,altitude:11e3,count:2,speed:250},{name:"SF-SD Corridor",startLon:-118.5,startLat:35.5,endLon:-117.2,endLat:32.7,altitude:1e4,count:2,speed:240},{name:"Military (Edwards)",startLon:-117.9,startLat:34.9,endLon:-116.7,endLat:35.3,altitude:5e3,count:1,speed:300},{name:"SoCal Helicopters",startLon:-118.3,startLat:34,endLon:-117.8,endLat:34.1,altitude:500,count:3,speed:60}],ah=[{name:"Bear Mountain Main",topLon:-116.858,topLat:34.226,topAlt:2680,botLon:-116.861,botLat:34.229,botAlt:2440,count:15},{name:"Bear Mountain East",topLon:-116.8555,topLat:34.2255,topAlt:2650,botLon:-116.8575,botLat:34.2285,botAlt:2450,count:10},{name:"Snow Summit Main",topLon:-116.865,topLat:34.2275,topAlt:2600,botLon:-116.868,botLat:34.231,botAlt:2400,count:12},{name:"Snow Summit West",topLon:-116.867,topLat:34.227,topAlt:2580,botLon:-116.8695,botLat:34.23,botAlt:2410,count:8}],eo=60,rh=30,oh=40;function Ae(i,t){let e=i*73856093^t*19349663;return e=(e>>16^e)*73244475,e=(e>>16^e)*73244475,e=e>>16^e,(e&2147483647)/2147483647}const no=800,io=80,so=20,lh=60;class b_{constructor(t,e){this.viewer=t,this.scene=e,this.vehicleInstances=null,this.boatInstances=null,this.aircraftInstances=null,this.vehicles=[],this.boats=[],this.aircraft=[],this.skiers=[],this.contrailSegments=[],this.skierInstances=null,this.sailInstances=null,this.contrailInstances=null,this.lastUpdateTime=0,this.time=0,this.initialized=!1,this.init()}init(){const t=new ce(1,1,1);t.translate(0,.5,0);const e=new Ut({color:13421772,flatShading:!0});this.vehicleInstances=new nn(t,e,no),this.vehicleInstances.count=0,this.vehicleInstances.frustumCulled=!1,this.vehicleInstances.layers.set(0),this.scene.add(this.vehicleInstances);const n=new ce(1,1,1);n.translate(0,.5,0);const s=new Ut({color:16777215,flatShading:!0});this.boatInstances=new nn(n,s,io),this.boatInstances.count=0,this.boatInstances.frustumCulled=!1,this.boatInstances.layers.set(0),this.scene.add(this.boatInstances);const a=new ce(1,1,1);a.translate(0,.5,0);const r=new Ut({color:15658734,flatShading:!0});this.aircraftInstances=new nn(a,r,so),this.aircraftInstances.count=0,this.aircraftInstances.frustumCulled=!1,this.aircraftInstances.layers.set(0),this.scene.add(this.aircraftInstances);const o=new ce(1,1,1);o.translate(0,.5,0);const l=new Ut({color:16711680});this.skierInstances=new nn(o,l,eo),this.skierInstances.count=0,this.skierInstances.frustumCulled=!1,this.skierInstances.layers.set(0),this.scene.add(this.skierInstances);const c=new Je(.5,1,3);c.translate(0,.5,0);const h=new Ut({color:16777215,side:Le});this.sailInstances=new nn(c,h,rh),this.sailInstances.count=0,this.sailInstances.frustumCulled=!1,this.sailInstances.layers.set(0),this.scene.add(this.sailInstances);const u=new ce(1,1,1);u.translate(0,.5,0);const d=new Ue({color:16777215,transparent:!0,opacity:.5});this.contrailInstances=new nn(u,d,oh),this.contrailInstances.count=0,this.contrailInstances.frustumCulled=!1,this.contrailInstances.layers.set(0),this.scene.add(this.contrailInstances);const p=new ce(1,1,1);p.translate(0,.5,0);const g=new Ut({color:7829367});this.liftInstances=new nn(p,g,lh),this.liftInstances.count=0,this.liftInstances.frustumCulled=!1,this.liftInstances.layers.set(0),this.scene.add(this.liftInstances),this.liftTowers=[];for(const x of ah){const m=Math.atan2(x.botLon-x.topLon,x.botLat-x.topLat);for(let f=0;f<=4;f++){const b=f/4,w=x.topLon+(x.botLon-x.topLon)*b,y=x.topLat+(x.botLat-x.topLat)*b,A=x.topAlt+(x.botAlt-x.topAlt)*b,P=Math.cos(m+Math.PI/2)*15/(111320*Math.cos(y*Math.PI/180)),T=Math.sin(m+Math.PI/2)*15/111320,D=10+(1-b)*5;this.liftTowers.push({lon:w+P,lat:y+T,alt:A,w:.8,h:D,d:.8}),this.liftTowers.push({lon:w+P,lat:y+T,alt:A+D,w:5,h:.4,d:.4})}}this.spawnVehicles(),this.spawnBoats(),this.spawnAircraft(),this.spawnSkiers(),this.initialized=!0}spawnVehicles(){for(const t of y_){const e=t.waypoints;for(let n=0;n<e.length-1;n++){const s=e[n],a=e[n+1],r=Math.sqrt((a.lon-s.lon)**2+(a.lat-s.lat)**2),o=Math.floor(r*500*t.vehicleDensity*t.lanes);for(let l=0;l<o&&!(this.vehicles.length>=no);l++){const c=Ae(n*100+l,this.vehicles.length),h=s.lon+(a.lon-s.lon)*c,u=s.lat+(a.lat-s.lat)*c,p=(Math.floor(Ae(l*3,n*7)*t.lanes)-t.lanes/2)*3e-5,g=Math.atan2(a.lon-s.lon,a.lat-s.lat),x=Math.cos(g)*p,m=-Math.sin(g)*p,f=25+Ae(l*5,n*3)*15,b=Ae(l*9,n*11)<.15,A=b?[16777215,14540253,4473924,16763904,26316]:[13369344,17578,3355443,16777215,8947848,13421772,17408,2236962,11167232,6684672],P=A[Math.floor(Ae(l*13,n*17)*A.length)];this.vehicles.push({lon:h+x,lat:u+m,speed:b?f*.7:f,heading:g,segIdx:n,segT:c,highway:t,isTruck:b,color:P,width:b?2.5:1.8,height:b?4:1.5,length:b?12:4.5,direction:Ae(l*19,n*23)>.5?1:-1})}}}}spawnBoats(){for(const t of S_)for(let e=0;e<t.count&&!(this.boats.length>=io);e++){const n=Ae(e*7,this.boats.length*13)*Math.PI*2,s=Ae(e*11,this.boats.length*17)*.7,a=111320,r=111320*Math.cos(t.centerLat*Math.PI/180),o=Ae(e*23,this.boats.length*29)<.2,l=!o&&Ae(e*31,this.boats.length*37)<.3;this.boats.push({lon:t.centerLon+Math.cos(n)*s*t.radiusM/r,lat:t.centerLat+Math.sin(n)*s*t.radiusM/a,elevation:t.elevation,speed:o?3:l?2:5,heading:Ae(e*41,this.boats.length*43)*Math.PI*2,turnRate:(Ae(e*47,this.boats.length*53)-.5)*.3,isLarge:o,isSailboat:l,width:o?15:l?3:4,height:o?8:l?6:2,length:o?40:l?8:6,color:o?3359829:l?16777215:14540253,area:t})}}spawnAircraft(){for(const t of w_)for(let e=0;e<t.count&&!(this.aircraft.length>=so);e++){const n=Ae(e*7,this.aircraft.length*11),s=t.startLon+(t.endLon-t.startLon)*n,a=t.startLat+(t.endLat-t.startLat)*n,r=t.altitude<1e3,o=t.speed>250,l=t.altitude>7e3&&!r;this.aircraft.push({lon:s,lat:a,altitude:t.altitude+(Ae(e*13,this.aircraft.length*17)-.5)*500,speed:t.speed+(Ae(e*19,this.aircraft.length*23)-.5)*20,heading:Math.atan2(t.endLon-t.startLon,t.endLat-t.startLat),corridor:t,t:n,direction:1,isHelicopter:r,isJet:o,hasContrail:l,width:r?8:o?12:35,height:r?4:o?5:12,length:r?12:o?15:60,color:r?4473924:o?8947848:16448250,prevPositions:[]})}}spawnSkiers(){for(const t of ah)for(let e=0;e<t.count&&!(this.skiers.length>=eo);e++){const n=Ae(e*7,this.skiers.length*13),s=t.topLon+(t.botLon-t.topLon)*n,a=t.topLat+(t.botLat-t.topLat)*n,r=t.topAlt+(t.botAlt-t.topAlt)*n,o=111320*Math.cos(a*Math.PI/180),l=(Ae(e*17,this.skiers.length*23)-.5)*40,c=Math.atan2(t.botLon-t.topLon,t.botLat-t.topLat),h=[16711680,17663,43520,16737792,16776960,16711935,0,16777215],u=h[Math.floor(Ae(e*31,this.skiers.length*37)*h.length)],d=Ae(e*41,this.skiers.length*43)>.6;this.skiers.push({lon:s+Math.cos(c+Math.PI/2)*l/o,lat:a+Math.sin(c+Math.PI/2)*l/111320,alt:r,speed:d?4+Ae(e*47,this.skiers.length*53)*8:5+Ae(e*47,this.skiers.length*53)*10,slope:t,t:n,heading:c,color:u,isSnowboarder:d,direction:1})}}update(t,e){if(!this.initialized)return;this.time+=t;const n=e.lon,s=e.lat,r=e.alt*.3048,o=111320,l=111320*Math.cos(Se.degToRad(s)),c=new jt,h=new F,u=new $e,d=new F,p=new Ot,g=new Be,x=Math.max(3e3,r*5);let m=0;for(const v of this.vehicles){const C=v.highway.waypoints,L=C[v.segIdx],N=C[v.segIdx+1];if(!L||!N)continue;v.segT+=v.direction*v.speed*t/(111320*Math.sqrt((N.lon-L.lon)**2+(N.lat-L.lat)**2)),v.segT>1?(v.segT=0,v.segIdx=Math.min(v.segIdx+1,C.length-2),v.segIdx>=C.length-2&&(v.segIdx=0,v.direction=1)):v.segT<0&&(v.segT=1,v.segIdx=Math.max(v.segIdx-1,0),v.segIdx<=0&&(v.segIdx=C.length-2,v.direction=-1));const U=C[v.segIdx],H=C[v.segIdx+1];if(!U||!H)continue;v.lon=U.lon+(H.lon-U.lon)*v.segT,v.lat=U.lat+(H.lat-U.lat)*v.segT;const k=(v.lon-n)*l,q=(v.lat-s)*o;if(Math.sqrt(k*k+q*q)>x||m>=no)continue;const tt=-r;h.set(k,tt,-q),g.set(0,v.heading,0),u.setFromEuler(g),d.set(v.width,v.height,v.length),c.compose(h,u,d),this.vehicleInstances.setMatrixAt(m,c),p.setHex(v.color),this.vehicleInstances.setColorAt(m,p),m++}this.vehicleInstances.count=m,m>0&&(this.vehicleInstances.instanceMatrix.needsUpdate=!0,this.vehicleInstances.instanceColor&&(this.vehicleInstances.instanceColor.needsUpdate=!0));const f=Math.max(5e3,r*6);let b=0;for(const v of this.boats){v.heading+=v.turnRate*t;const C=111320*Math.cos(v.lat*Math.PI/180);v.lon+=Math.sin(v.heading)*v.speed*t/C,v.lat+=Math.cos(v.heading)*v.speed*t/o;const L=(v.lon-v.area.centerLon)*C,N=(v.lat-v.area.centerLat)*o;if(Math.sqrt(L*L+N*N)>v.area.radiusM*.8){const it=Math.atan2(v.area.centerLon-v.lon,v.area.centerLat-v.lat);v.heading+=(it-v.heading)*t*2}const H=(v.lon-n)*l,k=(v.lat-s)*o;if(Math.sqrt(H*H+k*k)>f||b>=io)continue;const ot=v.elevation-r,tt=Math.sin(this.time*1.5+b*2.3)*.3;h.set(H,ot+tt,-k),g.set(0,v.heading,Math.sin(this.time*2+b)*.05),u.setFromEuler(g),d.set(v.width,v.height,v.length),c.compose(h,u,d),this.boatInstances.setMatrixAt(b,c),p.setHex(v.color),this.boatInstances.setColorAt(b,p),b++}this.boatInstances.count=b,b>0&&(this.boatInstances.instanceMatrix.needsUpdate=!0,this.boatInstances.instanceColor&&(this.boatInstances.instanceColor.needsUpdate=!0));const w=Math.max(15e3,r*8);let y=0;for(const v of this.aircraft){const C=v.corridor;v.t+=v.direction*v.speed*t/(111320*Math.sqrt((C.endLon-C.startLon)**2+(C.endLat-C.startLat)**2)),v.t>1&&(v.t=1,v.direction=-1),v.t<0&&(v.t=0,v.direction=1),v.lon=C.startLon+(C.endLon-C.startLon)*v.t,v.lat=C.startLat+(C.endLat-C.startLat)*v.t;const L=(v.lon-n)*l,N=(v.lat-s)*o,U=v.altitude-r;if(Math.sqrt(L*L+N*N+U*U)>w||y>=so)continue;h.set(L,U,-N);const k=v.direction>0?v.heading:v.heading+Math.PI;g.set(0,k,0),u.setFromEuler(g),d.set(v.width,v.height,v.length),c.compose(h,u,d),this.aircraftInstances.setMatrixAt(y,c),p.setHex(v.color),this.aircraftInstances.setColorAt(y,p),y++}if(this.aircraftInstances.count=y,y>0&&(this.aircraftInstances.instanceMatrix.needsUpdate=!0,this.aircraftInstances.instanceColor&&(this.aircraftInstances.instanceColor.needsUpdate=!0)),this.liftTowers&&this.liftInstances){const v=Math.max(6e3,r*5);let C=0;for(const L of this.liftTowers){if(C>=lh)break;const N=(L.lon-n)*l,U=(L.lat-s)*o;if(Math.sqrt(N*N+U*U)>v)continue;let k=L.alt;try{const ot=Cesium.Cartographic.fromDegrees(L.lon,L.lat),tt=this.viewer.scene.globe.getHeight(ot);tt!=null&&(k=tt)}catch{}const q=k-r;h.set(N,q,-U),u.identity(),d.set(L.w,L.h,L.d),c.compose(h,u,d),this.liftInstances.setMatrixAt(C,c),p.setHex(7829367),this.liftInstances.setColorAt(C,p),C++}this.liftInstances.count=C,C>0&&(this.liftInstances.instanceMatrix.needsUpdate=!0,this.liftInstances.instanceColor&&(this.liftInstances.instanceColor.needsUpdate=!0))}let A=0;for(const v of this.boats){if(!v.isSailboat||A>=rh)continue;const C=(v.lon-n)*l,L=(v.lat-s)*o;if(Math.sqrt(C*C+L*L)>f)continue;const U=v.elevation-r,H=Math.sin(this.time*1.5+A*2.3)*.3;h.set(C,U+H+v.height*.8,-L),g.set(0,v.heading+.3,Math.sin(this.time+A)*.1),u.setFromEuler(g),d.set(v.width*.6,v.height*1.5,v.width*.4),c.compose(h,u,d),this.sailInstances.setMatrixAt(A,c),p.setHex(16777215),this.sailInstances.setColorAt(A,p),A++}this.sailInstances.count=A,A>0&&(this.sailInstances.instanceMatrix.needsUpdate=!0,this.sailInstances.instanceColor&&(this.sailInstances.instanceColor.needsUpdate=!0));const P=Math.max(6e3,r*5);let T=0;for(const v of this.skiers){const C=v.slope,L=Math.sqrt(((C.botLon-C.topLon)*l)**2+((C.botLat-C.topLat)*o)**2);v.t+=v.direction*v.speed*t/Math.max(1,L),v.t>1&&(v.t=1,v.direction=-1,v.speed=2),v.t<0&&(v.t=0,v.direction=1,v.speed=v.isSnowboarder?4+Math.random()*8:5+Math.random()*10),v.lon=C.topLon+(C.botLon-C.topLon)*v.t,v.lat=C.topLat+(C.botLat-C.topLat)*v.t;try{var D=Cesium.Cartographic.fromDegrees(v.lon,v.lat),M=this.viewer.scene.globe.getHeight(D);M!=null?v.alt=M+1:v.alt=C.topAlt+(C.botAlt-C.topAlt)*v.t}catch{v.alt=C.topAlt+(C.botAlt-C.topAlt)*v.t}const N=(v.lon-n)*l,U=(v.lat-s)*o,H=Math.sqrt(N*N+U*U);if(H>P||T>=eo)continue;const k=v.alt-r,q=Math.max(1,H/500);h.set(N,k,-U),g.set(0,v.heading,0),u.setFromEuler(g),d.set(.8*q,1.8*q,.8*q),c.compose(h,u,d),this.skierInstances.setMatrixAt(T,c),p.setHex(v.color),this.skierInstances.setColorAt(T,p),T++}this.skierInstances.count=T,T>0&&(this.skierInstances.instanceMatrix.needsUpdate=!0,this.skierInstances.instanceColor&&(this.skierInstances.instanceColor.needsUpdate=!0));let S=0;for(const v of this.aircraft){if(!v.hasContrail||S>=oh)continue;const C=(v.lon-n)*l,L=(v.lat-s)*o,N=v.altitude-r;if(Math.sqrt(C*C+L*L)>w)continue;const H=v.direction>0?v.heading:v.heading+Math.PI,k=300+v.speed*2,q=C-Math.sin(H)*k*.5,ot=-L+Math.cos(H)*k*.5;h.set(q,N,ot),g.set(0,H,0),u.setFromEuler(g),d.set(3,2,k),c.compose(h,u,d),this.contrailInstances.setMatrixAt(S,c),p.setHex(16777215),this.contrailInstances.setColorAt(S,p),S++}this.contrailInstances.count=S,S>0&&(this.contrailInstances.instanceMatrix.needsUpdate=!0,this.contrailInstances.instanceColor&&(this.contrailInstances.instanceColor.needsUpdate=!0))}dispose(){[this.vehicleInstances,this.boatInstances,this.aircraftInstances,this.skierInstances,this.sailInstances,this.contrailInstances,this.liftInstances].forEach(t=>{t&&(this.scene.remove(t),t.dispose())})}}const ye={lon:-116.9155,lat:34.2433,elevation:2070,treeHeight:30,heading:210};class E_{constructor(t){this.scene=t,this.nestGroup=new De,this.jackieGroup=null,this.chicksGroup=null,this.time=0,this.buildNest(),this.scene.add(this.nestGroup),this.nestGroup.visible=!1,this.nestGroup.traverse(e=>{e.layers.set(0)})}buildNest(){const t=new Ut({color:6044190,flatShading:!0}),e=new Ut({color:4861461,flatShading:!0}),n=new Ze(.3,.6,ye.treeHeight,8),s=new nt(n,t);s.position.y=ye.treeHeight/2,this.nestGroup.add(s);for(let at=0;at<6;at++){const I=new er(.35+(1-at/6)*.15,.04,4,8),bt=new nt(I,e);bt.position.y=3+at*4.5,bt.rotation.x=Math.PI/2,this.nestGroup.add(bt)}const a=new Ut({color:7029286,flatShading:!0}),r=[{y:22,angle:0,length:6,tilt:.6},{y:24,angle:Math.PI*.6,length:7,tilt:.5},{y:26,angle:Math.PI*1.2,length:5.5,tilt:.55},{y:28,angle:Math.PI*.3,length:5,tilt:.4},{y:28,angle:Math.PI*1.5,length:4.5,tilt:.45},{y:29,angle:Math.PI*.8,length:3,tilt:.2},{y:29,angle:Math.PI*1.8,length:3.5,tilt:.15}];for(const at of r){const I=new Ze(.05,.15,at.length,5);I.translate(0,at.length/2,0);const bt=new nt(I,a);bt.position.y=at.y,bt.rotation.z=at.tilt,bt.rotation.y=at.angle,this.nestGroup.add(bt)}const o=new Ut({color:2972199,flatShading:!0}),l=new Ut({color:1789211,flatShading:!0}),c=[{x:0,y:32,z:0,r:3.5},{x:2,y:30,z:1,r:2.5},{x:-2.5,y:29,z:-1,r:2.8},{x:1,y:28,z:-2,r:2.2},{x:-1,y:31,z:2,r:2.5},{x:3,y:27,z:0,r:2},{x:-3,y:26,z:1,r:2.3},{x:0,y:34,z:0,r:2}];for(const at of c){const I=new ee(at.r,5,4);I.scale(1,.6,1);const bt=at.y>30?o:l,xt=new nt(I,bt);xt.position.set(at.x,at.y,at.z),this.nestGroup.add(xt)}const h=new Ut({color:7035450,flatShading:!0}),u=new Ut({color:4864544,flatShading:!0}),d=new Ze(1,1.2,.6,12),p=new nt(d,h);p.position.set(.5,ye.treeHeight,.3),this.nestGroup.add(p);const g=new er(1,.15,6,16),x=new nt(g,u);x.position.set(.5,ye.treeHeight+.3,.3),x.rotation.x=Math.PI/2,this.nestGroup.add(x);const m=new Ut({color:8022602,flatShading:!0});for(let at=0;at<20;at++){const I=at/20*Math.PI*2,bt=.9+Math.random()*.4,xt=new Ze(.02,.02,.3+Math.random()*.5,3),Dt=new nt(xt,m);Dt.position.set(.5+Math.cos(I)*bt,ye.treeHeight+.2,.3+Math.sin(I)*bt),Dt.rotation.z=(Math.random()-.5)*.8,Dt.rotation.x=(Math.random()-.5)*.8,this.nestGroup.add(Dt)}const f=new Ut({color:9075290,flatShading:!0}),b=new Ze(.7,.8,.15,10),w=new nt(b,f);w.position.set(.5,ye.treeHeight+.1,.3),this.nestGroup.add(w),this.jackieGroup=new De,this.jackieGroup.position.set(.5,ye.treeHeight+.4,.3);const y=new Ut({color:2759178,flatShading:!0}),A=new ee(.35,6,5);A.scale(1,.7,1.3);const P=new nt(A,y);P.position.y=.2,this.jackieGroup.add(P);const T=new Ut({color:16448250,flatShading:!0}),D=new ee(.15,6,5),M=new nt(D,T);M.position.set(0,.45,.25),this.jackieGroup.add(M);const S=new Ut({color:16763904,flatShading:!0}),v=new Je(.04,.12,4),C=new nt(v,S);C.position.set(0,.42,.38),C.rotation.x=Math.PI/2,this.jackieGroup.add(C);const L=new Ue({color:1118481}),N=new ee(.02,4,4),U=new nt(N,L);U.position.set(-.06,.47,.33),this.jackieGroup.add(U);const H=new nt(N,L);H.position.set(.06,.47,.33),this.jackieGroup.add(H);const k=new Ut({color:15658734,flatShading:!0}),q=new ce(.15,.04,.3),ot=new nt(q,k);ot.position.set(0,.15,-.35),this.jackieGroup.add(ot);const tt=new Ut({color:1706496,flatShading:!0}),it=new ce(.05,.2,.5),Gt=new nt(it,tt);Gt.position.set(-.25,.25,-.05),Gt.rotation.z=.2,this.jackieGroup.add(Gt);const zt=new nt(it,tt);zt.position.set(.25,.25,-.05),zt.rotation.z=-.2,this.jackieGroup.add(zt),this.nestGroup.add(this.jackieGroup),this.chicksGroup=new De,this.chicksGroup.position.set(.5,ye.treeHeight+.3,.3);const ae=new Ut({color:16117984,flatShading:!0}),ne=new ee(.06,6,5);ne.scale(1,.7,1.2);const Z=new nt(ne,ae);Z.position.set(-.15,.05,.1),this.chicksGroup.add(Z);const et=new nt(ne,ae);et.position.set(.1,.05,-.05),this.chicksGroup.add(et);const yt=new Ut({color:13421772,flatShading:!0}),Nt=new ee(.08,5,4),St=new nt(Nt,yt);St.position.set(.2,.1,.15),this.chicksGroup.add(St);const Jt=new ee(.05,5,4),re=new nt(Jt,yt);re.position.set(.2,.2,.2),this.chicksGroup.add(re);const Wt=new nt(N,L);Wt.position.set(.17,.22,.24),this.chicksGroup.add(Wt);const $=new nt(N,L);$.position.set(.23,.22,.24),this.chicksGroup.add($);const st=new Je(.015,.04,3),J=new nt(st,new Ut({color:3355443}));J.position.set(.2,.21,.26),J.rotation.x=Math.PI/2,this.chicksGroup.add(J),this.nestGroup.add(this.chicksGroup)}update(t,e){this.time+=t;const n=e.lon,s=e.lat,r=e.alt*.3048,o=111320,l=111320*Math.cos(Se.degToRad(s)),c=(ye.lon-n)*l,h=(ye.lat-s)*o,u=ye.elevation-r,d=Math.sqrt(c*c+h*h);this.nestGroup.visible=d<2e3,this.nestGroup.visible&&(this.nestGroup.position.set(c,u,-h),this.jackieGroup&&(this.jackieGroup.rotation.y=Math.sin(this.time*.3)*.15,this.jackieGroup.position.y=ye.treeHeight+.4+Math.sin(this.time*.8)*.01),this.chicksGroup&&this.chicksGroup.children.forEach((p,g)=>{g>=2&&(p.position.y+=Math.sin(this.time*2+g)*.001)}))}static getSpawnPosition(){return{lon:ye.lon,lat:ye.lat,alt:(ye.elevation+ye.treeHeight+50)/.3048,heading:ye.heading}}dispose(){this.scene.remove(this.nestGroup),this.nestGroup.traverse(t=>{t.geometry&&t.geometry.dispose(),t.material&&t.material.dispose()})}}const Hs={NIGHT:{start:0,end:5,name:"Night",fogMult:1.5,lightIntensity:.1},DAWN:{start:5,end:7,name:"Dawn",fogMult:1.2,lightIntensity:.4},MORNING:{start:7,end:10,name:"Morning",fogMult:.8,lightIntensity:.8},MIDDAY:{start:10,end:14,name:"Midday",fogMult:.5,lightIntensity:1},AFTERNOON:{start:14,end:17,name:"Afternoon",fogMult:.6,lightIntensity:.9},DUSK:{start:17,end:19,name:"Dusk",fogMult:1,lightIntensity:.4},EVENING:{start:19,end:21,name:"Evening",fogMult:1.3,lightIntensity:.2},LATE_NIGHT:{start:21,end:24,name:"Late Night",fogMult:1.5,lightIntensity:.1}},fs={CLEAR:{name:"Clear",fogDensity:5e-5,visibility:1,windSpeed:5,thermalMult:1},PARTLY_CLOUDY:{name:"Partly Cloudy",fogDensity:1e-4,visibility:.9,windSpeed:10,thermalMult:.8},OVERCAST:{name:"Overcast",fogDensity:3e-4,visibility:.6,windSpeed:15,thermalMult:.3},FOG:{name:"Mountain Fog",fogDensity:.001,visibility:.3,windSpeed:3,thermalMult:.1},HAZE:{name:"Desert Haze",fogDensity:4e-4,visibility:.5,windSpeed:8,thermalMult:.6},STORM:{name:"Thunderstorm",fogDensity:8e-4,visibility:.3,windSpeed:30,thermalMult:2},SNOW:{name:"Snow",fogDensity:6e-4,visibility:.4,windSpeed:20,thermalMult:0},SANTA_ANA:{name:"Santa Ana Winds",fogDensity:2e-4,visibility:.7,windSpeed:50,thermalMult:.5}};function ch(i,t){return i>=11||i<=1?t>=6&&t<=10?Math.random()<.3?"FOG":"PARTLY_CLOUDY":Math.random()<.15?"SNOW":Math.random()<.25?"OVERCAST":Math.random()<.5?"CLEAR":"PARTLY_CLOUDY":i>=2&&i<=4?t>=14&&Math.random()<.2?"STORM":Math.random()<.7?"CLEAR":"PARTLY_CLOUDY":i>=5&&i<=7?t>=14&&t<=18&&Math.random()<.3?"STORM":t>=11&&t<=15&&Math.random()<.3?"HAZE":"CLEAR":Math.random()<.15?"SANTA_ANA":Math.random()<.8?"CLEAR":"PARTLY_CLOUDY"}class T_{constructor(t){this.viewer=t,this.currentDaypart="MIDDAY",this.currentWeather="CLEAR",this.gameHour=12,this.timeScale=1,this.useRealTime=!0,this.weatherChangeTimer=0,this.weatherChangeCooldown=300,this.windDirection=0,this.windSpeed=5,this.targetFogDensity=1e-4,this.currentFogDensity=1e-4,this.initialized=!1,this.init()}init(){this.viewer&&(this.viewer.scene.globe.enableLighting=!0,this.viewer.scene.skyAtmosphere&&(this.viewer.scene.skyAtmosphere.show=!0));const t=new Date;this.updateTimeOfDay(t),this.currentWeather=ch(t.getMonth(),t.getHours()),this.applyWeather(),this.initialized=!0}updateTimeOfDay(t){const e=t.getUTCHours(),n=-8;this.gameHour=(e+n+24)%24+t.getUTCMinutes()/60;for(const[s,a]of Object.entries(Hs))if(this.gameHour>=a.start&&this.gameHour<a.end){this.currentDaypart=s;break}if(this.viewer&&this.viewer.clock){const s=Cesium.JulianDate.fromDate(t);this.viewer.clock.currentTime=s}}applyWeather(){const t=fs[this.currentWeather]||fs.CLEAR,e=Hs[this.currentDaypart]||Hs.MIDDAY;this.viewer&&(this.targetFogDensity=t.fogDensity*e.fogMult,this.windSpeed=t.windSpeed+(Math.random()-.5)*5,this.windDirection=(this.windDirection+(Math.random()-.5)*10)%360)}update(t){if(!(!this.initialized||!this.viewer)&&(this.useRealTime?this.updateTimeOfDay(new Date):this.gameHour=(this.gameHour+t*this.timeScale/3600)%24,this.currentFogDensity+=(this.targetFogDensity-this.currentFogDensity)*t*.5,this.viewer.scene.fog&&(this.viewer.scene.fog.density=this.currentFogDensity),this.weatherChangeTimer+=t,this.weatherChangeTimer>this.weatherChangeCooldown)){this.weatherChangeTimer=0;const n=ch(new Date().getMonth(),Math.floor(this.gameHour));n!==this.currentWeather&&(this.currentWeather=n,this.applyWeather())}}getConditions(){const t=Hs[this.currentDaypart]||Hs.MIDDAY,e=fs[this.currentWeather]||fs.CLEAR,n=Math.floor(this.gameHour),s=Math.floor((this.gameHour-n)*60);return{daypartName:t.name,weatherName:e.name,localTime:`${n.toString().padStart(2,"0")}:${s.toString().padStart(2,"0")} PST`,windSpeed:Math.round(this.windSpeed),windDirection:Math.round(this.windDirection),visibility:e.visibility,thermalMultiplier:e.thermalMult,lightIntensity:t.lightIntensity}}getThermalMultiplier(){return(fs[this.currentWeather]||fs.CLEAR).thermalMult}getWind(){const t=this.windDirection*Math.PI/180;return{x:Math.sin(t)*this.windSpeed,z:Math.cos(t)*this.windSpeed,speed:this.windSpeed,direction:this.windDirection}}}const Gn={lon:-116.9114,lat:34.2439},A_=500,lu=A_*1609.34,cu=lu/1e3,C_=cu/111.32,R_=cu/(111.32*Math.cos(Gn.lat*Math.PI/180));function P_(i,t){const e=(t-Gn.lat)*Math.PI/180,n=(i-Gn.lon)*Math.PI/180,s=Math.sin(e/2)*Math.sin(e/2)+Math.cos(Gn.lat*Math.PI/180)*Math.cos(t*Math.PI/180)*Math.sin(n/2)*Math.sin(n/2);return 6371e3*(2*Math.atan2(Math.sqrt(s),Math.sqrt(1-s)))}function I_(i,t){return lu-P_(i,t)}function L_(i,t){const e=(Gn.lon-i)*Math.PI/180,n=t*Math.PI/180,s=Gn.lat*Math.PI/180,a=Math.sin(e)*Math.cos(s),r=Math.cos(n)*Math.sin(s)-Math.sin(n)*Math.cos(s)*Math.cos(e);return(Math.atan2(a,r)*180/Math.PI+360)%360}function D_(i){if(!i)return null;const t=[],e=128;for(let o=0;o<=e;o++){const l=o/e*Math.PI*2,c=Gn.lat+C_*Math.sin(l),h=Gn.lon+R_*Math.cos(l);t.push(h,c)}const n=i.entities.add({polyline:{positions:Cesium.Cartesian3.fromDegreesArray(t),width:2,material:new Cesium.PolylineDashMaterialProperty({color:Cesium.Color.fromCssColorString("rgba(255, 200, 50, 0.5)"),dashLength:16}),clampToGround:!0}}),s=i.entities.add({position:Cesium.Cartesian3.fromDegrees(Gn.lon,Gn.lat),point:{pixelSize:8,color:Cesium.Color.fromCssColorString("rgba(255, 200, 50, 0.7)"),outlineColor:Cesium.Color.WHITE,outlineWidth:1,disableDepthTestDistance:Number.POSITIVE_INFINITY},label:{text:"THE NEST",font:"12pt sans-serif",style:Cesium.LabelStyle.FILL_AND_OUTLINE,outlineWidth:2,verticalOrigin:Cesium.VerticalOrigin.BOTTOM,pixelOffset:new Cesium.Cartesian2(0,-12),disableDepthTestDistance:Number.POSITIVE_INFINITY,fillColor:Cesium.Color.fromCssColorString("rgba(255, 200, 50, 0.9)")}}),a=[{name:"LAS VEGAS",lon:-115.1728,lat:36.1147,icon:"🎰"},{name:"HOLLYWOOD",lon:-118.3215,lat:34.1341,icon:"🎬"},{name:"29 PALMS",lon:-116.0542,lat:34.1356,icon:"🌴"},{name:"FT IRWIN NTC",lon:-116.6833,lat:35.2628,icon:"⭐"},{name:"REAGAN LIBRARY",lon:-118.82,lat:34.2597,icon:"🏛"},{name:"ROSE BOWL",lon:-118.1676,lat:34.1613,icon:"🏟"},{name:"BIG BEAR SKI",lon:-116.8595,lat:34.2272,icon:"⛷"},{name:"LOS ANGELES",lon:-118.2437,lat:34.0522,icon:"🏙"},{name:"SAN DIEGO",lon:-117.1611,lat:32.7157,icon:"🏙"},{name:"PHOENIX",lon:-112.074,lat:33.4484,icon:"🏜"},{name:"PALM SPRINGS",lon:-116.5453,lat:33.8303,icon:"🌴"},{name:"BAKERSFIELD",lon:-119.0187,lat:35.3733,icon:"🏙"}],r=[];for(const o of a){const l=i.entities.add({position:Cesium.Cartesian3.fromDegrees(o.lon,o.lat),point:{pixelSize:6,color:Cesium.Color.fromCssColorString("rgba(255, 120, 40, 0.8)"),outlineColor:Cesium.Color.WHITE,outlineWidth:1,disableDepthTestDistance:Number.POSITIVE_INFINITY},label:{text:o.icon+" "+o.name,font:"11pt sans-serif",style:Cesium.LabelStyle.FILL_AND_OUTLINE,outlineWidth:2,outlineColor:Cesium.Color.BLACK,verticalOrigin:Cesium.VerticalOrigin.BOTTOM,pixelOffset:new Cesium.Cartesian2(0,-10),disableDepthTestDistance:Number.POSITIVE_INFINITY,fillColor:Cesium.Color.fromCssColorString("rgba(255, 200, 100, 0.95)"),scaleByDistance:new Cesium.NearFarScalar(1e3,1,5e5,.4)}});r.push(l)}return{boundaryEntity:n,centerEntity:s,landmarkEntities:r}}const se={MENU:"MENU",PICK_SPAWN:"PICK_SPAWN",TRANSITIONING:"TRANSITIONING",FLYING:"FLYING",PAUSED:"PAUSED",CRASHED:"CRASHED"};let oe=se.MENU,le={graphicsQuality:"medium",antialiasing:!0,fogEffects:!0,mouseSensitivity:.2,showHud:!0,showHorizonLines:!1,soundEnabled:!0,minimapRange:10};function F_(){const i=localStorage.getItem("flightSimSettings");if(i)try{const t=JSON.parse(i);le={...le,...t}}catch(t){console.error("Failed to load settings",t)}hu(),ll()}function N_(){localStorage.setItem("flightSimSettings",JSON.stringify(le))}function ll(){document.getElementById("graphicsQuality").value=le.graphicsQuality,document.getElementById("antialiasing").checked=le.antialiasing,document.getElementById("fogEffects").checked=le.fogEffects,document.getElementById("sensitivitySlider").value=le.mouseSensitivity,document.getElementById("sensitivityValue").textContent=le.mouseSensitivity,document.getElementById("showHud").checked=le.showHud,document.getElementById("showHorizonLines").checked=le.showHorizonLines,document.getElementById("soundEnabled").checked=le.soundEnabled,document.getElementById("minimapRange").value=le.minimapRange.toString()}function hu(){Fe&&Fe.setSensitivity(le.mouseSensitivity),Te&&(Te.setMinimapRange(le.minimapRange),Te.setShowHorizonLines(le.showHorizonLines)),Tt&&Tt.listener&&Tt.listener.setMasterVolume(le.soundEnabled?1:0);const i=we();i&&(le.graphicsQuality==="low"?(i.resolutionScale=.5,i.scene.globe.maximumScreenSpaceError=4):le.graphicsQuality==="medium"?(i.resolutionScale=.75,i.scene.globe.maximumScreenSpaceError=2):(i.resolutionScale=1,i.scene.globe.maximumScreenSpaceError=1.3),i.scene.postProcessStages.fxaa.enabled=le.antialiasing,i.scene.fog.enabled=le.fogEffects,i.scene.atmosphere.show=le.fogEffects),[document.getElementById("hud-top-left"),document.getElementById("hud-top-right"),document.getElementById("hud-speed-box"),document.getElementById("hud-alt-box"),document.getElementById("coords"),document.getElementById("minimap-container")].forEach(e=>{e&&(e.style.display=le.showHud?"block":"none")})}let K={lon:ye.lon,lat:ye.lat,alt:(ye.elevation+ye.treeHeight+5)/.3048,heading:ye.heading,pitch:0,roll:0,speed:0,throttle:0,score:0,weaponSystem:null},nr=null,cl=0,qa={lon:0,lat:0};const U_=1e4,O_=1e3;let ir=0;const B_=1800;let ka=!1,uu=0,en,dn,Fn,xn,sr,hl,ar=new iu,Fe=new Jx,Te=new t_,fn,vn,be=new h_,rr=new u_,aa,ul,dl,fl,pl,ml,Ys,k_=null,ao=!1,hh=0,ro=0,oo=0;const Mi=new F(0,-.8,-2.75);let _i=new F().copy(Mi),kn=new Be(0,0,0),ps=0,Za=0,za=1,gl=!1,du=null;const fu=document.getElementById("mainMenu"),bs=document.getElementById("pauseMenu"),pu=document.getElementById("crashMenu"),hi=document.getElementById("uiContainer"),Vi=document.getElementById("threeContainer"),Ul=document.getElementById("spawnInstruction"),oa=document.getElementById("confirmSpawnBtn");let Ve=null;const Gs=document.getElementById("startBtn"),Vn=document.getElementById("loadingIndicator"),or=document.getElementById("loadingText"),Ce={audio:!1,model:!1,cesium:!1,globe:!1,failed:!1};function oi(){if(!Vn||!or||!Gs)return;if(oe===se.FLYING||oe===se.TRANSITIONING){Vn.classList.add("hidden");return}let i="";Ce.audio&&Ce.model&&Ce.cesium&&Ce.globe||(Ce.audio?Ce.model?Ce.cesium?Ce.globe||(i="Loading Globe Surface..."):i="Loading Satellite Imagery...":i="Loading Eagle Model...":i="Loading Audio..."),i?(or.textContent=i,Gs.disabled=!0,Gs.style.pointerEvents="none",Vn.classList.remove("hidden")):(Vn.classList.add("hidden"),Gs.disabled=!1,Gs.style.pointerEvents="auto")}async function z_(){Tt.init(dn);const i=(t,e,n,s)=>Tt.loadSound(t,e,n,s).catch(a=>(console.warn(`Failed to load sound: ${t}`,a),null));await Promise.all([i("boost","./assets/sounds/boost.mp3",!1,.35),i("throttle","./assets/sounds/throttle.mp3",!1,.4),i("explode","./assets/sounds/explode.mp3",!1,.75),i("explosion-1","./assets/sounds/explosion-1.mp3",!1,.8),i("explosion-2","./assets/sounds/explosion-2.mp3",!1,.8),i("explosion-3","./assets/sounds/explosion-3.mp3",!1,.8),i("ambient-crash","./assets/sounds/ambient.mp3",!0,.5),i("weapon-warning","./assets/sounds/weapon-warning-1.mp3",!1,1),i("jet-engine","./assets/sounds/jet-engine.mp3",!0,.5),i("spawn","./assets/sounds/spawn.mp3",!1,.5),i("roll","./assets/sounds/roll.mp3",!0,.75),i("pitch","./assets/sounds/pitch.mp3",!0,.75),i("button-click","./assets/sounds/button-click.mp3",!1,1),i("weapon-switch","./assets/sounds/weapon-switch.mp3",!1,.75),i("button-hover","./assets/sounds/button-hover.mp3",!1,.25),i("zoom-in","./assets/sounds/zoom-in.mp3",!1,.5),i("missile-fire","./assets/sounds/missile-firing-1.mp3",!1,.75),i("m61-firing","./assets/sounds/m61-firing.mp3",!0,.75),i("rwr-tws","./assets/sounds/rwr-tws.mp3",!0,.2),i("rwr-lock","./assets/sounds/rwr-lock.mp3",!1,.2),i("wind","./assets/sounds/wind.mp3",!0,.25),i("terrain-pull-up","./assets/sounds/terrain-pull-up.mp3",!1,.9),i("warning","./assets/sounds/warning.mp3",!1,.6),i("glitch-1","./assets/sounds/glitch-transition-1.mp3",!1,.25),i("glitch-2","./assets/sounds/glitch-transition-2.mp3",!1,.25),i("glitch-3","./assets/sounds/glitch-transition-3.mp3",!1,.25),i("glitch-4","./assets/sounds/glitch-transition-4.mp3",!1,.25)]),Ce.audio=!0,oi(),H_()}function Ol(i=.5){Tt.stopAll(i)}function Bl(){uu=Date.now(),Tt.pauseAll()}function mu(){const i=Date.now()-uu;ir>0&&(ir+=i),Tt.resumeAll()}function H_(){document.addEventListener("mouseover",i=>{const t=i.target.closest("button, .menu-btn, .clickable-ui");t&&!t._hovered&&(Tt.play("button-hover"),t._hovered=!0,t.addEventListener("mouseleave",()=>{t._hovered=!1},{once:!0}))},!0),document.addEventListener("click",i=>{i.target.closest("button, .menu-btn, .clickable-ui, #search-toggle-btn")&&Tt.play("button-click")},!0)}function G_(){hl=new Jh,en=new Yd,dn=new yn(75,window.innerWidth/window.innerHeight,.1,1e5),Fn=new Wx({alpha:!0,antialias:!0}),Fn.setSize(window.innerWidth,window.innerHeight),Fn.setPixelRatio(window.devicePixelRatio),Fn.setClearColor(0,0),Vi.appendChild(Fn.domElement),Vi.classList.add("hidden");const i=new Wf(16777215,1);en.add(i);const t=new Vf(16777215,1);t.position.set(5,10,5),en.add(t),i.layers.enable(1),t.layers.enable(1);try{ii.init(en,we())}catch{}try{aa=new p_(we(),en)}catch(e){console.error("Failed to init tree system",e)}try{ul=new ou(we(),en)}catch(e){console.error("Failed to init water system",e)}try{dl=new __(we(),en)}catch(e){console.error("Failed to init landmark system",e)}try{fl=new M_(we(),en)}catch(e){console.error("Failed to init city system",e)}try{pl=new b_(we(),en)}catch(e){console.error("Failed to init traffic system",e)}try{ml=new E_(en)}catch(e){console.error("Failed to init nest system",e)}try{Ys=new T_(we())}catch(e){console.error("Failed to init day/night weather system",e)}z_().catch(e=>{console.error("Failed to init sounds",e)}).finally(()=>{Ce.audio=!0,oi()});try{sr=jx(),xn=new De,xn.add(sr),en.add(xn),xn.layers.set(1),xn.traverse(e=>{e.layers.set(1)}),xn.position.copy(Mi),xn.scale.set(1.5,1.5,1.5),vn=new a_(we(),en,xn),vn.onKill=e=>{const n=e.score||500;K.score+=n;try{Tt.play("glitch-random")}catch{}Te&&Te.showKillNotification(e.name,n)},xn.traverse(e=>{e.layers.set(1)})}catch(e){console.error("Failed to create eagle model or weapon system",e)}Ce.model=!0,oi()}function V_(i){if(oe!==se.FLYING)return;const t=Fe.update(),e=ar.update(t,i),n=K.speed;K.speed=e.speed,K.pitch=e.pitch,K.roll=e.roll,K.heading=e.heading,K.throttle=t.throttle,K.yaw=t.yaw,K.isBoosting=e.isBoosting,K.weaponSystem=vn,K.npcs=fn?fn.npcs:[],K.isGliding=e.isGliding,K.isFlapping=e.isFlapping,K.flapStrength=e.flapStrength,K.wingSpread=e.wingSpread,K.inThermal=e.inThermal,K.thermalStrength=e.thermalStrength,K.verticalSpeed=e.verticalSpeed,K.liftForce=e.liftForce,K.isTurbo=e.isTurbo,K.turboWindup=e.turboWindup,K.weatherConditions=Ys?Ys.getConditions():null,vn&&(t.weaponIndex!==-1&&vn.selectWeapon(t.weaponIndex),t.toggleWeapon&&vn.toggleWeapon(),t.fire&&vn.fire(K),t.fireFlare&&vn.fireFlare(K),vn.update(i,K,t));const s=Si(K.lon,K.lat,K.alt,K.heading,K.pitch,K.speed*i);K.lon=s.lon,K.lat=s.lat,K.alt=s.alt;const a=Date.now(),r=au(K.lon,K.lat,qa.lon,qa.lat);if((a-cl>U_||r>O_)&&(cl=a,qa={lon:K.lon,lat:K.lat},su(K.lon,K.lat).then(x=>{x&&x!==nr&&(nr=x,Te.showRegion(x))})),X_(),W_(),rr)try{rr.update(i,K)}catch{}Math.abs(t.roll)>.5||Math.abs(t.yaw)>.5?Tt.isPlaying("roll")||Tt.play("roll",.1):Tt.isPlaying("roll")&&Tt.stop("roll",.1);const o=new Cesium.HeadingPitchRoll(Cesium.Math.toRadians(K.heading),Cesium.Math.toRadians(K.pitch),Cesium.Math.toRadians(K.roll)),l=Cesium.Quaternion.fromHeadingPitchRoll(o),c=new Cesium.HeadingPitchRoll(Cesium.Math.toRadians(t.cameraYaw),Cesium.Math.toRadians(-t.cameraPitch),0),h=Cesium.Quaternion.fromHeadingPitchRoll(c),u=Cesium.Quaternion.multiply(l,h,new Cesium.Quaternion),d=Cesium.HeadingPitchRoll.fromQuaternion(u);if(Yx(K.lon,K.lat,K.alt,Cesium.Math.toDegrees(d.heading),Cesium.Math.toDegrees(d.pitch),Cesium.Math.toDegrees(d.roll)),fn&&fn.update(i,K),aa)try{aa.update(i,K)}catch{}if(ul)try{ul.update(i,K)}catch{}if(dl)try{dl.update(i,K)}catch{}if(fl)try{fl.update(i,K)}catch{}if(pl)try{pl.update(i,K)}catch{}if(ml)try{ml.update(i,K)}catch{}if(Ys)try{Ys.update(i)}catch{}const p=I_(K.lon,K.lat);if(p/1609.34<20){if(p<=0){const x=L_(K.lon,K.lat);K.heading=Se.lerp(K.heading,x,i*2),ar.heading=K.heading}ao||(ao=!0,Te.showRegion("TERRITORY BOUNDARY - TURN BACK"))}else ao=!1;if(Te.update(K,oe===se.FLYING?fn?fn.npcs:[]:[]),xn){const x=(K.speed-n)/i,m=t.isDragging?0:Math.max(-.5,Math.min(1.5,x*.001));let f=Mi.z-m,b=0;if(e.isBoosting){gl||(za=Math.random()>.5?1:-1);const ot=e.boostDuration,tt=Math.max(0,Math.min(1,1-e.boostTimeRemaining/ot));if(Math.PI*2*e.boostRotations*za,tt<.2){const it=tt/.2;b=-(it*it)*1.5,ps=0}else if(tt<.8){const it=(tt-.2)/.6;b=-1.5,ps=(it<.5?4*it*it*it:1-Math.pow(-2*it+2,3)/2)*(Math.PI*2*e.boostRotations)*za}else{const it=(tt-.8)/.2;b=-1.5+it*it*(3-2*it)*.7,ps=Math.PI*2*e.boostRotations*za}}else ps=0,b=0;gl=e.isBoosting;const w=e.isBoosting?10*i:2*i;Za+=(b-Za)*w,f+=Za;const y=performance.now()*.001,A=Math.sin(y*.8)*.035,P=Math.cos(y*.6)*.025,T=Math.sin(y*.5)*.015,D=Math.cos(y*.4)*.015,M=Math.sin(y*.7)*.025,S=t.isDragging?Mi.x:Mi.x-t.roll*.6-t.yaw*.12+A,v=t.isDragging?Mi.y:Mi.y-t.pitch*.1+P;let C=t.isDragging?0:Se.degToRad(-t.roll*15)+M;const L=t.isDragging?0:Se.degToRad(t.pitch*10)+T,N=t.isDragging?0:Se.degToRad(-t.yaw*4)+D,U=e.isBoosting?3*i:5*i;_i.x+=(S-_i.x)*U,_i.y+=(v-_i.y)*U,_i.z+=(f-_i.z)*U,kn.z+=(C-kn.z)*U,kn.x+=(L-kn.x)*U,kn.y+=(N-kn.y)*U;const H=new $e().setFromEuler(new Be(Se.degToRad(-t.cameraPitch),Se.degToRad(-t.cameraYaw),0,"YXZ"));xn.position.copy(_i);const k=new $e().setFromEuler(new Be(kn.x,kn.y,kn.z+ps)),q=H.clone().invert().multiply(k);xn.quaternion.copy(q)}}function W_(){if(oe!==se.FLYING){Te.setPullUpWarning(!1);return}const i=we();if(!i)return;const t=Cesium.Cartographic.fromDegrees(K.lon,K.lat),e=i.scene.globe.getHeight(t);if(e===void 0)return;const n=K.alt-e,s=Cesium.Math.toRadians(K.pitch),a=K.speed*Math.sin(s);let r=!1;if(K.pitch<-1&&n<450&&(n<150&&(r=!0),a<-20&&(r=!0)),Te.setPullUpWarning(r),r){const o=Date.now();(!ka||o-ir>B_&&!Tt.isPlaying("terrain-pull-up"))&&(Tt.play("terrain-pull-up"),ir=o),ka=!0}else ka&&(Tt.stop("terrain-pull-up",.1),ka=!1)}let uh=0,gu=0;function X_(){if(oe!==se.FLYING)return;const i=Date.now();if(i-uh<100||(uh=i,i-gu<3e3))return;const t=we();if(!t)return;const e=Cesium.Cartographic.fromDegrees(K.lon,K.lat),n=t.scene.globe.getHeight(e);if(n!==void 0&&K.alt<=n+5){oe=se.CRASHED,be&&be.stop(),hi.classList.add("hidden");const s=document.getElementById("weapons-hud");s&&s.classList.add("hidden"),Vi.classList.add("hidden"),pu.classList.remove("hidden"),Fe.isMobile&&Fe.setMobileVisible(!1),Te.update(K,[]),Ol(.1),setTimeout(()=>{Tt.play("explode"),Tt.play("ambient-crash")},50)}}function xu(){requestAnimationFrame(xu);const i=hl?hl.getDelta():.016,t=performance.now();if(ro++,t-oo>=1e3){hh=ro*1e3/(t-oo),ro=0,oo=t,Te.updateFPS(hh);const e=document.getElementById("menu-time");e&&(e.textContent=new Date().toISOString().split(".")[0]+"Z")}if(oe===se.FLYING||oe===se.PAUSED||oe===se.TRANSITIONING){const e=we();if(Fn.autoClear=!1,Fn.clear(),e&&e.camera&&e.camera.frustum.fovy){const n=Cesium.Math.toDegrees(e.camera.frustum.fovy);dn.fov=n,dn.aspect=window.innerWidth/window.innerHeight,dn.updateProjectionMatrix()}dn.layers.set(0),oe===se.FLYING?V_(i):oe===se.PAUSED&&Te.updatePauseMenu(K,nr,fn?fn.npcs:[]),sr&&Qx(sr,i,K);try{oe===se.FLYING&&ii.update(i)}catch{}Fn.render(en,dn),Fn.clearDepth(),dn.fov=75,dn.updateProjectionMatrix(),dn.layers.set(1),Fn.render(en,dn)}else Vi.classList.add("hidden")}function Mn(){document.querySelectorAll(".modal").forEach(i=>i.classList.add("hidden"))}function Y_(){document.getElementById("helpBtn").onclick=()=>{Mn(),document.getElementById("helpModal").classList.remove("hidden")},document.getElementById("optionsBtn").onclick=()=>{Mn(),ll(),document.getElementById("optionsModal").classList.remove("hidden")},document.getElementById("pauseOptionsBtn").onclick=()=>{Mn(),ll(),document.getElementById("optionsModal").classList.remove("hidden")},document.getElementById("pauseHelpBtn").onclick=()=>{Mn(),document.getElementById("helpModal").classList.remove("hidden")},document.getElementById("creditsBtn").onclick=()=>{Mn(),document.getElementById("creditsModal").classList.remove("hidden")},document.getElementById("aboutBtn").onclick=()=>{Mn(),document.getElementById("aboutBtnModal").classList.remove("hidden")},document.getElementById("sensitivitySlider").oninput=i=>{document.getElementById("sensitivityValue").textContent=i.target.value},document.getElementById("saveOptionsBtn").onclick=()=>{le.graphicsQuality=document.getElementById("graphicsQuality").value,le.antialiasing=document.getElementById("antialiasing").checked,le.fogEffects=document.getElementById("fogEffects").checked,le.mouseSensitivity=parseFloat(document.getElementById("sensitivitySlider").value),le.showHud=document.getElementById("showHud").checked,le.showHorizonLines=document.getElementById("showHorizonLines").checked,le.soundEnabled=document.getElementById("soundEnabled").checked,le.minimapRange=parseInt(document.getElementById("minimapRange").value),N_(),hu(),Mn()},document.querySelectorAll(".close-modal").forEach(i=>{i.onclick=t=>{t.stopPropagation(),i.closest(".modal").classList.add("hidden")}}),window.addEventListener("click",i=>{i.target.classList.contains("modal")&&i.target.classList.add("hidden")})}document.getElementById("startBtn").onclick=async()=>{Mn(),Fe.isMobile&&!Fe.tiltEnabled&&await Fe.requestOrientationPermission(),fu.classList.add("hidden"),kl(!1)};Y_();document.getElementById("resumeBtn").onclick=()=>{Mn(),bs.classList.add("hidden"),hi.classList.remove("hidden");const i=document.getElementById("weapons-hud");i&&i.classList.remove("hidden"),oe=se.FLYING,be&&be.resume(),mu(),Fe.isMobile&&Fe.setMobileVisible(!0)};document.getElementById("restartBtn").onclick=()=>{Mn(),bs.classList.add("hidden"),be&&be.stop(),kl(!0)};document.getElementById("quitBtn").onclick=()=>{Mn(),be&&be.stop(),Nl(!0),location.reload()};document.getElementById("respawnBtn").onclick=()=>{Mn(),pu.classList.add("hidden"),be&&be.stop(),kl(!0)};function kl(i=!0){K.score=0,fn&&fn.clear(),Ol(.3),Tt.play("zoom-in"),Tt.play("wind",1);const t=document.getElementById("transition-vignette");i&&t&&(t.style.opacity="1"),setTimeout(()=>{Ul.classList.remove("hidden"),Vi.classList.add("hidden"),hi.classList.add("hidden");const n=document.getElementById("weapons-hud");n&&n.classList.add("hidden"),oe=se.PICK_SPAWN,oa.classList.add("hidden");const s=document.getElementById("locationSearch"),a=document.getElementById("instruction-text"),r=document.getElementById("search-results");s&&(s.value="",s.style.display="none"),a&&(a.style.display="block",a.textContent="CLICK ANYWHERE TO CHOOSE YOUR HUNTING GROUNDS"),r&&(r.style.display="none"),mr(!0),Ve&&(we().entities.remove(Ve),Ve=null),we().camera.flyTo({destination:Cesium.Cartesian3.fromDegrees(K.lon,K.lat,15e3),duration:2,complete:()=>{t&&(t.style.opacity="0")}})},i?500:0)}function q_(){Tt.play("zoom-in"),Tt.stop("wind",1),Ol(.3),Ul.classList.add("hidden"),oa.classList.add("hidden"),fu.classList.remove("hidden"),oe=se.MENU,Vn.classList.add("hidden"),Nl(!0),mr(!1),Ve&&(we().entities.remove(Ve),Ve=null),we().camera.flyTo({...du,duration:2.5})}function Z_(){const i=we(),t=new Cesium.ScreenSpaceEventHandler(i.scene.canvas),e=document.getElementById("instruction-text");t.setInputAction(n=>{if(oe!==se.PICK_SPAWN)return;const s=i.camera.getPickRay(n.position),a=i.scene.globe.pick(s,i.scene);if(a){const r=Cesium.Cartographic.fromCartesian(a),o=Cesium.Math.toDegrees(r.longitude),l=Cesium.Math.toDegrees(r.latitude);K.lon=o,K.lat=l,K.alt=Math.max(0,r.height)+1500,e.textContent="FETCHING LOCATION INFO...",su(o,l).then(c=>{c&&oe===se.PICK_SPAWN&&(e.textContent=c,Ve&&(Ve.label.text=c))}).catch(()=>{}),Cesium.sampleTerrainMostDetailed(i.terrainProvider,[r]).then(([c])=>K.alt=Math.max(0,c.height||0)+1500).catch(()=>{}),Ve&&i.entities.remove(Ve),Ve=i.entities.add({position:a,point:{pixelSize:15,color:Cesium.Color.RED,outlineColor:Cesium.Color.WHITE,outlineWidth:2,disableDepthTestDistance:Number.POSITIVE_INFINITY},label:{text:"Target Spawn Location",font:`14pt ${getComputedStyle(document.body).fontFamily}`,style:Cesium.LabelStyle.FILL_AND_OUTLINE,outlineWidth:2,verticalOrigin:Cesium.VerticalOrigin.BOTTOM,pixelOffset:new Cesium.Cartesian2(0,-20),disableDepthTestDistance:Number.POSITIVE_INFINITY}}),oa.classList.remove("hidden")}},Cesium.ScreenSpaceEventType.LEFT_CLICK)}function $_(){const i=document.getElementById("locationSearch"),t=document.getElementById("search-results"),e=document.getElementById("instruction-text"),n=document.getElementById("search-toggle-btn"),s=n?n.innerHTML:"";let a;n&&(n.onclick=r=>{r.stopPropagation(),i.style.display==="block"?(i.style.display="none",e.style.display="block",t.style.display="none"):(i.style.display="block",e.style.display="none",i.focus())}),i.addEventListener("input",r=>{clearTimeout(a);const o=r.target.value.trim();if(o.length<3){t.style.display="none";return}a=setTimeout(async()=>{n&&(n.innerHTML='<div class="loader-spinner"></div>');try{const c=await(await fetch(`https://nominatim.openstreetmap.org/search?format=json&q=${encodeURIComponent(o)}&limit=5`)).json();t.innerHTML="",c.length>0?(c.forEach(h=>{const u=document.createElement("div");u.textContent=h.display_name,u.style.padding="10px",u.style.cursor="pointer",u.onclick=()=>{const d=parseFloat(h.lon),p=parseFloat(h.lat),g=we(),x=Cesium.Cartesian3.fromDegrees(d,p);K.lon=d,K.lat=p,K.alt=1500;const m=Cesium.Cartographic.fromDegrees(d,p);Cesium.sampleTerrainMostDetailed(g.terrainProvider,[m]).then(([f])=>{K.alt=Math.max(0,f.height||0)+1500}).catch(()=>{}),g.camera.flyTo({destination:Cesium.Cartesian3.fromDegrees(d,p,15e3),duration:1.5}),Ve&&g.entities.remove(Ve),Ve=g.entities.add({position:x,point:{pixelSize:15,color:Cesium.Color.RED,outlineColor:Cesium.Color.WHITE,outlineWidth:2,disableDepthTestDistance:Number.POSITIVE_INFINITY},label:{text:h.display_name.split(",")[0],font:`14pt ${getComputedStyle(document.body).fontFamily}`,style:Cesium.LabelStyle.FILL_AND_OUTLINE,outlineWidth:2,verticalOrigin:Cesium.VerticalOrigin.BOTTOM,pixelOffset:new Cesium.Cartesian2(0,-20),disableDepthTestDistance:Number.POSITIVE_INFINITY}}),oa.classList.remove("hidden"),t.style.display="none",i.style.display="none",e.style.display="block",e.textContent=h.display_name.split(",")[0].toUpperCase(),i.value=h.display_name},t.appendChild(u)}),t.style.display="block"):t.style.display="none"}catch(l){console.error("Search error:",l)}finally{n&&(n.innerHTML=s)}},500)}),document.addEventListener("click",r=>{!i.contains(r.target)&&!t.contains(r.target)&&!n.contains(r.target)&&(t.style.display="none",i.style.display==="block"&&(i.style.display="none",e.style.display="block"))})}document.getElementById("confirmSpawnBtn").onclick=()=>{const i=document.getElementById("transition-vignette");i&&(i.style.opacity="1"),Tt.play("spawn"),setTimeout(()=>{const t=we();Ve&&(t.entities.remove(Ve),Ve=null),mr(!1),K.speed=12,K.pitch=0,K.roll=0;try{const e=t&&t.camera;e&&typeof e.heading=="number"?K.heading=Cesium.Math.toDegrees(e.heading):K.heading=0}catch{K.heading=0}nr=null,cl=0,qa={lon:0,lat:0},_i.copy(Mi),kn.set(0,0,0),ps=0,Za=0,gl=!1,Fe.reset(),ar=new iu,ar.reset(K.lon,K.lat,K.alt,K.heading,K.pitch,K.roll),aa&&aa.clear(),Te.resetTime(),Te.resizeMinimap(),vn&&typeof vn.resetAmmo=="function"&&vn.resetAmmo(),fn&&fn.spawnNPC(K.lon,K.lat,K.alt),Ul.classList.add("hidden"),oa.classList.add("hidden"),Vn.classList.add("hidden"),oe=se.TRANSITIONING,Nl(!1),t.camera.flyTo({destination:Cesium.Cartesian3.fromDegrees(K.lon,K.lat,K.alt),orientation:{heading:Cesium.Math.toRadians(K.heading),pitch:Cesium.Math.toRadians(K.pitch),roll:Cesium.Math.toRadians(K.roll)},duration:2,easingFunction:Cesium.EasingFunction.QUADRATIC_IN_OUT,complete:()=>{gu=Date.now(),hi.classList.remove("hidden");const e=document.getElementById("weapons-hud");if(e&&e.classList.remove("hidden"),Vi.classList.remove("hidden"),Te.resizeMinimap(),oe=se.FLYING,Tt.play("wind",.5),rr&&rr.startFlight(),i&&(i.style.opacity="0"),Fe.isMobile){Fe.setMobileVisible(!0),Fe.calibrateTilt();try{document.documentElement.requestFullscreen?document.documentElement.requestFullscreen().catch(()=>{}):document.documentElement.webkitRequestFullscreen&&document.documentElement.webkitRequestFullscreen(),screen.orientation&&screen.orientation.lock&&screen.orientation.lock("landscape").catch(()=>{})}catch{}}be&&be.start()}})},500)};window.addEventListener("keydown",i=>{const t=i.key.toLowerCase();if(t==="escape"){const e=document.querySelectorAll(".modal:not(.hidden)");if(e.length>0){e.forEach(n=>n.classList.add("hidden"));return}}if(t==="escape"||t==="p")if(oe===se.FLYING){oe=se.PAUSED,be&&be.pause(),hi.classList.add("hidden");const e=document.getElementById("weapons-hud");e&&e.classList.add("hidden"),bs.classList.remove("hidden"),Te.resizeMinimap(),Bl(),Te.update(K,[]),Fe.isMobile&&Fe.setMobileVisible(!1)}else if(oe===se.PAUSED){oe=se.FLYING,be&&be.resume(),bs.classList.add("hidden"),hi.classList.remove("hidden");const e=document.getElementById("weapons-hud");e&&e.classList.remove("hidden"),mu(),Fe.isMobile&&Fe.setMobileVisible(!0)}else oe===se.PICK_SPAWN&&t==="escape"&&q_();t==="z"&&oe===se.FLYING&&be&&be.skip()});document.addEventListener("visibilitychange",()=>{document.hidden&&oe===se.FLYING&&(oe=se.PAUSED,be&&be.pause(),hi.classList.add("hidden"),bs.classList.remove("hidden"),Te.resizeMinimap(),Bl(),Te.update(K,[]),Fe.isMobile&&Fe.setMobileVisible(!1))});window.addEventListener("blur",()=>{oe===se.FLYING&&(oe=se.PAUSED,be&&be.pause(),hi.classList.add("hidden"),bs.classList.remove("hidden"),Te.resizeMinimap(),Bl(),Te.update(K,[]))});const si=Xx();Ce.cesium=!0;oi();setTimeout(()=>{Ce.globe||(console.warn("Globe loading timeout - enabling start button anyway"),Ce.globe=!0,oi())},8e3);let dh=!1;try{const i=si.scene.postRender.addEventListener(()=>{try{const t=si.scene.globe.tilesLoaded;t||(dh=!0),t&&dh&&(Ce.globe=!0,oi(),i())}catch{Ce.globe=!0,oi(),i()}})}catch(i){console.warn("Globe tracker setup failed",i),Ce.globe=!0,oi()}si.scene.globe.tileLoadProgressEvent.addEventListener(i=>{Vn&&or&&(oe===se.PICK_SPAWN?i>0?(or.textContent="Loading Terrain...",Vn.classList.remove("hidden")):Vn.classList.add("hidden"):Ce.audio&&Ce.model&&Ce.cesium&&Ce.globe&&Vn.classList.add("hidden"))});const lr=()=>{Tt.listener.context.state==="suspended"&&Tt.listener.context.resume(),window.removeEventListener("mousedown",lr),window.removeEventListener("keydown",lr)};window.addEventListener("mousedown",lr);window.addEventListener("keydown",lr);du={destination:si.camera.position.clone(),orientation:{heading:si.camera.heading,pitch:si.camera.pitch,roll:si.camera.roll}};G_();fn=new c_(si,en,null);try{k_=D_(si)}catch(i){console.error("Failed to create territory boundary",i)}Z_();$_();F_();hi.classList.add("hidden");Vi.classList.add("hidden");oi();xu();window.addEventListener("resize",()=>{dn.aspect=window.innerWidth/window.innerHeight,dn.updateProjectionMatrix(),Fn.setSize(window.innerWidth,window.innerHeight);const i=we();i&&i.resize()});window.addEventListener("contextmenu",i=>{i.preventDefault()},!1);
