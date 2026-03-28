(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))n(s);new MutationObserver(s=>{for(const a of s)if(a.type==="childList")for(const r of a.addedNodes)r.tagName==="LINK"&&r.rel==="modulepreload"&&n(r)}).observe(document,{childList:!0,subtree:!0});function e(s){const a={};return s.integrity&&(a.integrity=s.integrity),s.referrerPolicy&&(a.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?a.credentials="include":s.crossOrigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function n(s){if(s.ep)return;s.ep=!0;const a=e(s);fetch(s.href,a)}})();const xl="182",bu=0,Zl=1,Eu=2,Ha=1,Tu=2,Vs=3,wi=0,an=1,Le=2,ai=0,gs=1,Sn=2,$l=3,Kl=4,Cu=5,Oi=100,Au=101,Ru=102,Pu=103,Iu=104,Lu=200,Du=201,Fu=202,Nu=203,lo=204,co=205,Uu=206,Ou=207,Bu=208,ku=209,zu=210,Hu=211,Gu=212,Vu=213,Wu=214,ho=0,uo=1,fo=2,_s=3,po=4,mo=5,go=6,xo=7,cr=0,Xu=1,Yu=2,Wn=0,uh=1,dh=2,fh=3,ph=4,mh=5,gh=6,xh=7,_h=300,Hi=301,vs=302,_o=303,vo=304,hr=306,Mo=1e3,ni=1001,yo=1002,We=1003,qu=1004,ha=1005,Ge=1006,vr=1007,ki=1008,fn=1009,vh=1010,Mh=1011,Js=1012,_l=1013,qn=1014,Nn=1015,li=1016,vl=1017,Ml=1018,js=1020,yh=35902,Sh=35899,wh=1021,bh=1022,Un=1023,ci=1026,zi=1027,yl=1028,Sl=1029,Ms=1030,wl=1031,bl=1033,Ga=33776,Va=33777,Wa=33778,Xa=33779,So=35840,wo=35841,bo=35842,Eo=35843,To=36196,Co=37492,Ao=37496,Ro=37488,Po=37489,Io=37490,Lo=37491,Do=37808,Fo=37809,No=37810,Uo=37811,Oo=37812,Bo=37813,ko=37814,zo=37815,Ho=37816,Go=37817,Vo=37818,Wo=37819,Xo=37820,Yo=37821,qo=36492,Zo=36494,$o=36495,Ko=36283,Jo=36284,jo=36285,Qo=36286,Zu=3200,ur=0,$u=1,vi="",xn="srgb",ys="srgb-linear",$a="linear",ue="srgb",Yi=7680,Jl=519,Ku=512,Ju=513,ju=514,El=515,Qu=516,td=517,Tl=518,ed=519,tl=35044,jl="300 es",Hn=2e3,Ka=2001;function Eh(i){for(let t=i.length-1;t>=0;--t)if(i[t]>=65535)return!0;return!1}function Ja(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function nd(){const i=Ja("canvas");return i.style.display="block",i}const Ql={};function ja(...i){const t="THREE."+i.shift();console.log(t,...i)}function Ft(...i){const t="THREE."+i.shift();console.warn(t,...i)}function Qt(...i){const t="THREE."+i.shift();console.error(t,...i)}function Qs(...i){const t=i.join(" ");t in Ql||(Ql[t]=!0,Ft(...i))}function id(i,t,e){return new Promise(function(n,s){function a(){switch(i.clientWaitSync(t,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:s();break;case i.TIMEOUT_EXPIRED:setTimeout(a,e);break;default:n()}}setTimeout(a,e)})}class Es{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[t]===void 0&&(n[t]=[]),n[t].indexOf(e)===-1&&n[t].push(e)}hasEventListener(t,e){const n=this._listeners;return n===void 0?!1:n[t]!==void 0&&n[t].indexOf(e)!==-1}removeEventListener(t,e){const n=this._listeners;if(n===void 0)return;const s=n[t];if(s!==void 0){const a=s.indexOf(e);a!==-1&&s.splice(a,1)}}dispatchEvent(t){const e=this._listeners;if(e===void 0)return;const n=e[t.type];if(n!==void 0){t.target=this;const s=n.slice(0);for(let a=0,r=s.length;a<r;a++)s[a].call(this,t);t.target=null}}}const Xe=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let tc=1234567;const qs=Math.PI/180,ta=180/Math.PI;function Xn(){const i=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(Xe[i&255]+Xe[i>>8&255]+Xe[i>>16&255]+Xe[i>>24&255]+"-"+Xe[t&255]+Xe[t>>8&255]+"-"+Xe[t>>16&15|64]+Xe[t>>24&255]+"-"+Xe[e&63|128]+Xe[e>>8&255]+"-"+Xe[e>>16&255]+Xe[e>>24&255]+Xe[n&255]+Xe[n>>8&255]+Xe[n>>16&255]+Xe[n>>24&255]).toLowerCase()}function Kt(i,t,e){return Math.max(t,Math.min(e,i))}function Cl(i,t){return(i%t+t)%t}function sd(i,t,e,n,s){return n+(i-t)*(s-n)/(e-t)}function ad(i,t,e){return i!==t?(e-i)/(t-i):0}function Zs(i,t,e){return(1-e)*i+e*t}function rd(i,t,e,n){return Zs(i,t,1-Math.exp(-e*n))}function od(i,t=1){return t-Math.abs(Cl(i,t*2)-t)}function ld(i,t,e){return i<=t?0:i>=e?1:(i=(i-t)/(e-t),i*i*(3-2*i))}function cd(i,t,e){return i<=t?0:i>=e?1:(i=(i-t)/(e-t),i*i*i*(i*(i*6-15)+10))}function hd(i,t){return i+Math.floor(Math.random()*(t-i+1))}function ud(i,t){return i+Math.random()*(t-i)}function dd(i){return i*(.5-Math.random())}function fd(i){i!==void 0&&(tc=i);let t=tc+=1831565813;return t=Math.imul(t^t>>>15,t|1),t^=t+Math.imul(t^t>>>7,t|61),((t^t>>>14)>>>0)/4294967296}function pd(i){return i*qs}function md(i){return i*ta}function gd(i){return(i&i-1)===0&&i!==0}function xd(i){return Math.pow(2,Math.ceil(Math.log(i)/Math.LN2))}function _d(i){return Math.pow(2,Math.floor(Math.log(i)/Math.LN2))}function vd(i,t,e,n,s){const a=Math.cos,r=Math.sin,o=a(e/2),l=r(e/2),c=a((t+n)/2),h=r((t+n)/2),u=a((t-n)/2),d=r((t-n)/2),p=a((n-t)/2),g=r((n-t)/2);switch(s){case"XYX":i.set(o*h,l*u,l*d,o*c);break;case"YZY":i.set(l*d,o*h,l*u,o*c);break;case"ZXZ":i.set(l*u,l*d,o*h,o*c);break;case"XZX":i.set(o*h,l*g,l*p,o*c);break;case"YXY":i.set(l*p,o*h,l*g,o*c);break;case"ZYZ":i.set(l*g,l*p,o*h,o*c);break;default:Ft("MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+s)}}function In(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("Invalid component type.")}}function de(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("Invalid component type.")}}const Se={DEG2RAD:qs,RAD2DEG:ta,generateUUID:Xn,clamp:Kt,euclideanModulo:Cl,mapLinear:sd,inverseLerp:ad,lerp:Zs,damp:rd,pingpong:od,smoothstep:ld,smootherstep:cd,randInt:hd,randFloat:ud,randFloatSpread:dd,seededRandom:fd,degToRad:pd,radToDeg:md,isPowerOfTwo:gd,ceilPowerOfTwo:xd,floorPowerOfTwo:_d,setQuaternionFromProperEuler:vd,normalize:de,denormalize:In};class ut{constructor(t=0,e=0){ut.prototype.isVector2=!0,this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){const e=this.x,n=this.y,s=t.elements;return this.x=s[0]*e+s[3]*n+s[6],this.y=s[1]*e+s[4]*n+s[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=Kt(this.x,t.x,e.x),this.y=Kt(this.y,t.y,e.y),this}clampScalar(t,e){return this.x=Kt(this.x,t,e),this.y=Kt(this.y,t,e),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Kt(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const n=this.dot(t)/e;return Math.acos(Kt(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,n=this.y-t.y;return e*e+n*n}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){const n=Math.cos(e),s=Math.sin(e),a=this.x-t.x,r=this.y-t.y;return this.x=a*n-r*s+t.x,this.y=a*s+r*n+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class qe{constructor(t=0,e=0,n=0,s=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=n,this._w=s}static slerpFlat(t,e,n,s,a,r,o){let l=n[s+0],c=n[s+1],h=n[s+2],u=n[s+3],d=a[r+0],p=a[r+1],g=a[r+2],_=a[r+3];if(o<=0){t[e+0]=l,t[e+1]=c,t[e+2]=h,t[e+3]=u;return}if(o>=1){t[e+0]=d,t[e+1]=p,t[e+2]=g,t[e+3]=_;return}if(u!==_||l!==d||c!==p||h!==g){let m=l*d+c*p+h*g+u*_;m<0&&(d=-d,p=-p,g=-g,_=-_,m=-m);let f=1-o;if(m<.9995){const S=Math.acos(m),w=Math.sin(S);f=Math.sin(f*S)/w,o=Math.sin(o*S)/w,l=l*f+d*o,c=c*f+p*o,h=h*f+g*o,u=u*f+_*o}else{l=l*f+d*o,c=c*f+p*o,h=h*f+g*o,u=u*f+_*o;const S=1/Math.sqrt(l*l+c*c+h*h+u*u);l*=S,c*=S,h*=S,u*=S}}t[e]=l,t[e+1]=c,t[e+2]=h,t[e+3]=u}static multiplyQuaternionsFlat(t,e,n,s,a,r){const o=n[s],l=n[s+1],c=n[s+2],h=n[s+3],u=a[r],d=a[r+1],p=a[r+2],g=a[r+3];return t[e]=o*g+h*u+l*p-c*d,t[e+1]=l*g+h*d+c*u-o*p,t[e+2]=c*g+h*p+o*d-l*u,t[e+3]=h*g-o*u-l*d-c*p,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,n,s){return this._x=t,this._y=e,this._z=n,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){const n=t._x,s=t._y,a=t._z,r=t._order,o=Math.cos,l=Math.sin,c=o(n/2),h=o(s/2),u=o(a/2),d=l(n/2),p=l(s/2),g=l(a/2);switch(r){case"XYZ":this._x=d*h*u+c*p*g,this._y=c*p*u-d*h*g,this._z=c*h*g+d*p*u,this._w=c*h*u-d*p*g;break;case"YXZ":this._x=d*h*u+c*p*g,this._y=c*p*u-d*h*g,this._z=c*h*g-d*p*u,this._w=c*h*u+d*p*g;break;case"ZXY":this._x=d*h*u-c*p*g,this._y=c*p*u+d*h*g,this._z=c*h*g+d*p*u,this._w=c*h*u-d*p*g;break;case"ZYX":this._x=d*h*u-c*p*g,this._y=c*p*u+d*h*g,this._z=c*h*g-d*p*u,this._w=c*h*u+d*p*g;break;case"YZX":this._x=d*h*u+c*p*g,this._y=c*p*u+d*h*g,this._z=c*h*g-d*p*u,this._w=c*h*u-d*p*g;break;case"XZY":this._x=d*h*u-c*p*g,this._y=c*p*u-d*h*g,this._z=c*h*g+d*p*u,this._w=c*h*u+d*p*g;break;default:Ft("Quaternion: .setFromEuler() encountered an unknown order: "+r)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){const n=e/2,s=Math.sin(n);return this._x=t.x*s,this._y=t.y*s,this._z=t.z*s,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(t){const e=t.elements,n=e[0],s=e[4],a=e[8],r=e[1],o=e[5],l=e[9],c=e[2],h=e[6],u=e[10],d=n+o+u;if(d>0){const p=.5/Math.sqrt(d+1);this._w=.25/p,this._x=(h-l)*p,this._y=(a-c)*p,this._z=(r-s)*p}else if(n>o&&n>u){const p=2*Math.sqrt(1+n-o-u);this._w=(h-l)/p,this._x=.25*p,this._y=(s+r)/p,this._z=(a+c)/p}else if(o>u){const p=2*Math.sqrt(1+o-n-u);this._w=(a-c)/p,this._x=(s+r)/p,this._y=.25*p,this._z=(l+h)/p}else{const p=2*Math.sqrt(1+u-n-o);this._w=(r-s)/p,this._x=(a+c)/p,this._y=(l+h)/p,this._z=.25*p}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let n=t.dot(e)+1;return n<1e-8?(n=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=n):(this._x=0,this._y=-t.z,this._z=t.y,this._w=n)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=n),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(Kt(this.dot(t),-1,1)))}rotateTowards(t,e){const n=this.angleTo(t);if(n===0)return this;const s=Math.min(1,e/n);return this.slerp(t,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){const n=t._x,s=t._y,a=t._z,r=t._w,o=e._x,l=e._y,c=e._z,h=e._w;return this._x=n*h+r*o+s*c-a*l,this._y=s*h+r*l+a*o-n*c,this._z=a*h+r*c+n*l-s*o,this._w=r*h-n*o-s*l-a*c,this._onChangeCallback(),this}slerp(t,e){if(e<=0)return this;if(e>=1)return this.copy(t);let n=t._x,s=t._y,a=t._z,r=t._w,o=this.dot(t);o<0&&(n=-n,s=-s,a=-a,r=-r,o=-o);let l=1-e;if(o<.9995){const c=Math.acos(o),h=Math.sin(c);l=Math.sin(l*c)/h,e=Math.sin(e*c)/h,this._x=this._x*l+n*e,this._y=this._y*l+s*e,this._z=this._z*l+a*e,this._w=this._w*l+r*e,this._onChangeCallback()}else this._x=this._x*l+n*e,this._y=this._y*l+s*e,this._z=this._z*l+a*e,this._w=this._w*l+r*e,this.normalize();return this}slerpQuaternions(t,e,n){return this.copy(t).slerp(e,n)}random(){const t=2*Math.PI*Math.random(),e=2*Math.PI*Math.random(),n=Math.random(),s=Math.sqrt(1-n),a=Math.sqrt(n);return this.set(s*Math.sin(t),s*Math.cos(t),a*Math.sin(e),a*Math.cos(e))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class F{constructor(t=0,e=0,n=0){F.prototype.isVector3=!0,this.x=t,this.y=e,this.z=n}set(t,e,n){return n===void 0&&(n=this.z),this.x=t,this.y=e,this.z=n,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(ec.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(ec.setFromAxisAngle(t,e))}applyMatrix3(t){const e=this.x,n=this.y,s=this.z,a=t.elements;return this.x=a[0]*e+a[3]*n+a[6]*s,this.y=a[1]*e+a[4]*n+a[7]*s,this.z=a[2]*e+a[5]*n+a[8]*s,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){const e=this.x,n=this.y,s=this.z,a=t.elements,r=1/(a[3]*e+a[7]*n+a[11]*s+a[15]);return this.x=(a[0]*e+a[4]*n+a[8]*s+a[12])*r,this.y=(a[1]*e+a[5]*n+a[9]*s+a[13])*r,this.z=(a[2]*e+a[6]*n+a[10]*s+a[14])*r,this}applyQuaternion(t){const e=this.x,n=this.y,s=this.z,a=t.x,r=t.y,o=t.z,l=t.w,c=2*(r*s-o*n),h=2*(o*e-a*s),u=2*(a*n-r*e);return this.x=e+l*c+r*u-o*h,this.y=n+l*h+o*c-a*u,this.z=s+l*u+a*h-r*c,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){const e=this.x,n=this.y,s=this.z,a=t.elements;return this.x=a[0]*e+a[4]*n+a[8]*s,this.y=a[1]*e+a[5]*n+a[9]*s,this.z=a[2]*e+a[6]*n+a[10]*s,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=Kt(this.x,t.x,e.x),this.y=Kt(this.y,t.y,e.y),this.z=Kt(this.z,t.z,e.z),this}clampScalar(t,e){return this.x=Kt(this.x,t,e),this.y=Kt(this.y,t,e),this.z=Kt(this.z,t,e),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Kt(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){const n=t.x,s=t.y,a=t.z,r=e.x,o=e.y,l=e.z;return this.x=s*l-a*o,this.y=a*r-n*l,this.z=n*o-s*r,this}projectOnVector(t){const e=t.lengthSq();if(e===0)return this.set(0,0,0);const n=t.dot(this)/e;return this.copy(t).multiplyScalar(n)}projectOnPlane(t){return Mr.copy(this).projectOnVector(t),this.sub(Mr)}reflect(t){return this.sub(Mr.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const n=this.dot(t)/e;return Math.acos(Kt(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,n=this.y-t.y,s=this.z-t.z;return e*e+n*n+s*s}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,n){const s=Math.sin(e)*t;return this.x=s*Math.sin(n),this.y=Math.cos(e)*t,this.z=s*Math.cos(n),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,n){return this.x=t*Math.sin(e),this.y=n,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){const e=this.setFromMatrixColumn(t,0).length(),n=this.setFromMatrixColumn(t,1).length(),s=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=n,this.z=s,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const t=Math.random()*Math.PI*2,e=Math.random()*2-1,n=Math.sqrt(1-e*e);return this.x=n*Math.cos(t),this.y=e,this.z=n*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Mr=new F,ec=new qe;class Yt{constructor(t,e,n,s,a,r,o,l,c){Yt.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,n,s,a,r,o,l,c)}set(t,e,n,s,a,r,o,l,c){const h=this.elements;return h[0]=t,h[1]=s,h[2]=o,h[3]=e,h[4]=a,h[5]=l,h[6]=n,h[7]=r,h[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){const e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],this}extractBasis(t,e,n){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(t){const e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const n=t.elements,s=e.elements,a=this.elements,r=n[0],o=n[3],l=n[6],c=n[1],h=n[4],u=n[7],d=n[2],p=n[5],g=n[8],_=s[0],m=s[3],f=s[6],S=s[1],w=s[4],y=s[7],E=s[2],R=s[5],T=s[8];return a[0]=r*_+o*S+l*E,a[3]=r*m+o*w+l*R,a[6]=r*f+o*y+l*T,a[1]=c*_+h*S+u*E,a[4]=c*m+h*w+u*R,a[7]=c*f+h*y+u*T,a[2]=d*_+p*S+g*E,a[5]=d*m+p*w+g*R,a[8]=d*f+p*y+g*T,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){const t=this.elements,e=t[0],n=t[1],s=t[2],a=t[3],r=t[4],o=t[5],l=t[6],c=t[7],h=t[8];return e*r*h-e*o*c-n*a*h+n*o*l+s*a*c-s*r*l}invert(){const t=this.elements,e=t[0],n=t[1],s=t[2],a=t[3],r=t[4],o=t[5],l=t[6],c=t[7],h=t[8],u=h*r-o*c,d=o*l-h*a,p=c*a-r*l,g=e*u+n*d+s*p;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);const _=1/g;return t[0]=u*_,t[1]=(s*c-h*n)*_,t[2]=(o*n-s*r)*_,t[3]=d*_,t[4]=(h*e-s*l)*_,t[5]=(s*a-o*e)*_,t[6]=p*_,t[7]=(n*l-c*e)*_,t[8]=(r*e-n*a)*_,this}transpose(){let t;const e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){const e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,n,s,a,r,o){const l=Math.cos(a),c=Math.sin(a);return this.set(n*l,n*c,-n*(l*r+c*o)+r+t,-s*c,s*l,-s*(-c*r+l*o)+o+e,0,0,1),this}scale(t,e){return this.premultiply(yr.makeScale(t,e)),this}rotate(t){return this.premultiply(yr.makeRotation(-t)),this}translate(t,e){return this.premultiply(yr.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,n,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){const e=this.elements,n=t.elements;for(let s=0;s<9;s++)if(e[s]!==n[s])return!1;return!0}fromArray(t,e=0){for(let n=0;n<9;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){const n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t}clone(){return new this.constructor().fromArray(this.elements)}}const yr=new Yt,nc=new Yt().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),ic=new Yt().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function Md(){const i={enabled:!0,workingColorSpace:ys,spaces:{},convert:function(s,a,r){return this.enabled===!1||a===r||!a||!r||(this.spaces[a].transfer===ue&&(s.r=ri(s.r),s.g=ri(s.g),s.b=ri(s.b)),this.spaces[a].primaries!==this.spaces[r].primaries&&(s.applyMatrix3(this.spaces[a].toXYZ),s.applyMatrix3(this.spaces[r].fromXYZ)),this.spaces[r].transfer===ue&&(s.r=xs(s.r),s.g=xs(s.g),s.b=xs(s.b))),s},workingToColorSpace:function(s,a){return this.convert(s,this.workingColorSpace,a)},colorSpaceToWorking:function(s,a){return this.convert(s,a,this.workingColorSpace)},getPrimaries:function(s){return this.spaces[s].primaries},getTransfer:function(s){return s===vi?$a:this.spaces[s].transfer},getToneMappingMode:function(s){return this.spaces[s].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(s,a=this.workingColorSpace){return s.fromArray(this.spaces[a].luminanceCoefficients)},define:function(s){Object.assign(this.spaces,s)},_getMatrix:function(s,a,r){return s.copy(this.spaces[a].toXYZ).multiply(this.spaces[r].fromXYZ)},_getDrawingBufferColorSpace:function(s){return this.spaces[s].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(s=this.workingColorSpace){return this.spaces[s].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(s,a){return Qs("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),i.workingToColorSpace(s,a)},toWorkingColorSpace:function(s,a){return Qs("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),i.colorSpaceToWorking(s,a)}},t=[.64,.33,.3,.6,.15,.06],e=[.2126,.7152,.0722],n=[.3127,.329];return i.define({[ys]:{primaries:t,whitePoint:n,transfer:$a,toXYZ:nc,fromXYZ:ic,luminanceCoefficients:e,workingColorSpaceConfig:{unpackColorSpace:xn},outputColorSpaceConfig:{drawingBufferColorSpace:xn}},[xn]:{primaries:t,whitePoint:n,transfer:ue,toXYZ:nc,fromXYZ:ic,luminanceCoefficients:e,outputColorSpaceConfig:{drawingBufferColorSpace:xn}}}),i}const te=Md();function ri(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function xs(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}let qi;class yd{static getDataURL(t,e="image/png"){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let n;if(t instanceof HTMLCanvasElement)n=t;else{qi===void 0&&(qi=Ja("canvas")),qi.width=t.width,qi.height=t.height;const s=qi.getContext("2d");t instanceof ImageData?s.putImageData(t,0,0):s.drawImage(t,0,0,t.width,t.height),n=qi}return n.toDataURL(e)}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){const e=Ja("canvas");e.width=t.width,e.height=t.height;const n=e.getContext("2d");n.drawImage(t,0,0,t.width,t.height);const s=n.getImageData(0,0,t.width,t.height),a=s.data;for(let r=0;r<a.length;r++)a[r]=ri(a[r]/255)*255;return n.putImageData(s,0,0),e}else if(t.data){const e=t.data.slice(0);for(let n=0;n<e.length;n++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[n]=Math.floor(ri(e[n]/255)*255):e[n]=ri(e[n]);return{data:e,width:t.width,height:t.height}}else return Ft("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}}let Sd=0;class Al{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:Sd++}),this.uuid=Xn(),this.data=t,this.dataReady=!0,this.version=0}getSize(t){const e=this.data;return typeof HTMLVideoElement<"u"&&e instanceof HTMLVideoElement?t.set(e.videoWidth,e.videoHeight,0):typeof VideoFrame<"u"&&e instanceof VideoFrame?t.set(e.displayHeight,e.displayWidth,0):e!==null?t.set(e.width,e.height,e.depth||0):t.set(0,0,0),t}set needsUpdate(t){t===!0&&this.version++}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];const n={uuid:this.uuid,url:""},s=this.data;if(s!==null){let a;if(Array.isArray(s)){a=[];for(let r=0,o=s.length;r<o;r++)s[r].isDataTexture?a.push(Sr(s[r].image)):a.push(Sr(s[r]))}else a=Sr(s);n.url=a}return e||(t.images[this.uuid]=n),n}}function Sr(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?yd.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(Ft("Texture: Unable to serialize Texture."),{})}let wd=0;const wr=new F;class Ze extends Es{constructor(t=Ze.DEFAULT_IMAGE,e=Ze.DEFAULT_MAPPING,n=ni,s=ni,a=Ge,r=ki,o=Un,l=fn,c=Ze.DEFAULT_ANISOTROPY,h=vi){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:wd++}),this.uuid=Xn(),this.name="",this.source=new Al(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=n,this.wrapT=s,this.magFilter=a,this.minFilter=r,this.anisotropy=c,this.format=o,this.internalFormat=null,this.type=l,this.offset=new ut(0,0),this.repeat=new ut(1,1),this.center=new ut(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Yt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(t&&t.depth&&t.depth>1),this.pmremVersion=0}get width(){return this.source.getSize(wr).x}get height(){return this.source.getSize(wr).y}get depth(){return this.source.getSize(wr).z}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.renderTarget=t.renderTarget,this.isRenderTargetTexture=t.isRenderTargetTexture,this.isArrayTexture=t.isArrayTexture,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}setValues(t){for(const e in t){const n=t[e];if(n===void 0){Ft(`Texture.setValues(): parameter '${e}' has value of undefined.`);continue}const s=this[e];if(s===void 0){Ft(`Texture.setValues(): property '${e}' does not exist.`);continue}s&&n&&s.isVector2&&n.isVector2||s&&n&&s.isVector3&&n.isVector3||s&&n&&s.isMatrix3&&n.isMatrix3?s.copy(n):this[e]=n}}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];const n={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),e||(t.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==_h)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case Mo:t.x=t.x-Math.floor(t.x);break;case ni:t.x=t.x<0?0:1;break;case yo:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case Mo:t.y=t.y-Math.floor(t.y);break;case ni:t.y=t.y<0?0:1;break;case yo:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}}Ze.DEFAULT_IMAGE=null;Ze.DEFAULT_MAPPING=_h;Ze.DEFAULT_ANISOTROPY=1;class Ee{constructor(t=0,e=0,n=0,s=1){Ee.prototype.isVector4=!0,this.x=t,this.y=e,this.z=n,this.w=s}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,n,s){return this.x=t,this.y=e,this.z=n,this.w=s,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){const e=this.x,n=this.y,s=this.z,a=this.w,r=t.elements;return this.x=r[0]*e+r[4]*n+r[8]*s+r[12]*a,this.y=r[1]*e+r[5]*n+r[9]*s+r[13]*a,this.z=r[2]*e+r[6]*n+r[10]*s+r[14]*a,this.w=r[3]*e+r[7]*n+r[11]*s+r[15]*a,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);const e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,n,s,a;const l=t.elements,c=l[0],h=l[4],u=l[8],d=l[1],p=l[5],g=l[9],_=l[2],m=l[6],f=l[10];if(Math.abs(h-d)<.01&&Math.abs(u-_)<.01&&Math.abs(g-m)<.01){if(Math.abs(h+d)<.1&&Math.abs(u+_)<.1&&Math.abs(g+m)<.1&&Math.abs(c+p+f-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;const w=(c+1)/2,y=(p+1)/2,E=(f+1)/2,R=(h+d)/4,T=(u+_)/4,D=(g+m)/4;return w>y&&w>E?w<.01?(n=0,s=.707106781,a=.707106781):(n=Math.sqrt(w),s=R/n,a=T/n):y>E?y<.01?(n=.707106781,s=0,a=.707106781):(s=Math.sqrt(y),n=R/s,a=D/s):E<.01?(n=.707106781,s=.707106781,a=0):(a=Math.sqrt(E),n=T/a,s=D/a),this.set(n,s,a,e),this}let S=Math.sqrt((m-g)*(m-g)+(u-_)*(u-_)+(d-h)*(d-h));return Math.abs(S)<.001&&(S=1),this.x=(m-g)/S,this.y=(u-_)/S,this.z=(d-h)/S,this.w=Math.acos((c+p+f-1)/2),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this.w=e[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=Kt(this.x,t.x,e.x),this.y=Kt(this.y,t.y,e.y),this.z=Kt(this.z,t.z,e.z),this.w=Kt(this.w,t.w,e.w),this}clampScalar(t,e){return this.x=Kt(this.x,t,e),this.y=Kt(this.y,t,e),this.z=Kt(this.z,t,e),this.w=Kt(this.w,t,e),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Kt(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this.w=t.w+(e.w-t.w)*n,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class bd extends Es{constructor(t=1,e=1,n={}){super(),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Ge,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1},n),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=n.depth,this.scissor=new Ee(0,0,t,e),this.scissorTest=!1,this.viewport=new Ee(0,0,t,e);const s={width:t,height:e,depth:n.depth},a=new Ze(s);this.textures=[];const r=n.count;for(let o=0;o<r;o++)this.textures[o]=a.clone(),this.textures[o].isRenderTargetTexture=!0,this.textures[o].renderTarget=this;this._setTextureOptions(n),this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples,this.multiview=n.multiview}_setTextureOptions(t={}){const e={minFilter:Ge,generateMipmaps:!1,flipY:!1,internalFormat:null};t.mapping!==void 0&&(e.mapping=t.mapping),t.wrapS!==void 0&&(e.wrapS=t.wrapS),t.wrapT!==void 0&&(e.wrapT=t.wrapT),t.wrapR!==void 0&&(e.wrapR=t.wrapR),t.magFilter!==void 0&&(e.magFilter=t.magFilter),t.minFilter!==void 0&&(e.minFilter=t.minFilter),t.format!==void 0&&(e.format=t.format),t.type!==void 0&&(e.type=t.type),t.anisotropy!==void 0&&(e.anisotropy=t.anisotropy),t.colorSpace!==void 0&&(e.colorSpace=t.colorSpace),t.flipY!==void 0&&(e.flipY=t.flipY),t.generateMipmaps!==void 0&&(e.generateMipmaps=t.generateMipmaps),t.internalFormat!==void 0&&(e.internalFormat=t.internalFormat);for(let n=0;n<this.textures.length;n++)this.textures[n].setValues(e)}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}set depthTexture(t){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),t!==null&&(t.renderTarget=this),this._depthTexture=t}get depthTexture(){return this._depthTexture}setSize(t,e,n=1){if(this.width!==t||this.height!==e||this.depth!==n){this.width=t,this.height=e,this.depth=n;for(let s=0,a=this.textures.length;s<a;s++)this.textures[s].image.width=t,this.textures[s].image.height=e,this.textures[s].image.depth=n,this.textures[s].isData3DTexture!==!0&&(this.textures[s].isArrayTexture=this.textures[s].image.depth>1);this.dispose()}this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let e=0,n=t.textures.length;e<n;e++){this.textures[e]=t.textures[e].clone(),this.textures[e].isRenderTargetTexture=!0,this.textures[e].renderTarget=this;const s=Object.assign({},t.textures[e].image);this.textures[e].source=new Al(s)}return this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Yn extends bd{constructor(t=1,e=1,n={}){super(t,e,n),this.isWebGLRenderTarget=!0}}class Th extends Ze{constructor(t=null,e=1,n=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:n,depth:s},this.magFilter=We,this.minFilter=We,this.wrapR=ni,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}}class Ed extends Ze{constructor(t=null,e=1,n=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:n,depth:s},this.magFilter=We,this.minFilter=We,this.wrapR=ni,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Wi{constructor(t=new F(1/0,1/0,1/0),e=new F(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e+=3)this.expandByPoint(Tn.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,n=t.count;e<n;e++)this.expandByPoint(Tn.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){const n=Tn.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(n),this.max.copy(t).add(n),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);const n=t.geometry;if(n!==void 0){const a=n.getAttribute("position");if(e===!0&&a!==void 0&&t.isInstancedMesh!==!0)for(let r=0,o=a.count;r<o;r++)t.isMesh===!0?t.getVertexPosition(r,Tn):Tn.fromBufferAttribute(a,r),Tn.applyMatrix4(t.matrixWorld),this.expandByPoint(Tn);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),ua.copy(t.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),ua.copy(n.boundingBox)),ua.applyMatrix4(t.matrixWorld),this.union(ua)}const s=t.children;for(let a=0,r=s.length;a<r;a++)this.expandByObject(s[a],e);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,Tn),Tn.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,n;return t.normal.x>0?(e=t.normal.x*this.min.x,n=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,n=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,n+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,n+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,n+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,n+=t.normal.z*this.min.z),e<=-t.constant&&n>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(Rs),da.subVectors(this.max,Rs),Zi.subVectors(t.a,Rs),$i.subVectors(t.b,Rs),Ki.subVectors(t.c,Rs),ui.subVectors($i,Zi),di.subVectors(Ki,$i),Ci.subVectors(Zi,Ki);let e=[0,-ui.z,ui.y,0,-di.z,di.y,0,-Ci.z,Ci.y,ui.z,0,-ui.x,di.z,0,-di.x,Ci.z,0,-Ci.x,-ui.y,ui.x,0,-di.y,di.x,0,-Ci.y,Ci.x,0];return!br(e,Zi,$i,Ki,da)||(e=[1,0,0,0,1,0,0,0,1],!br(e,Zi,$i,Ki,da))?!1:(fa.crossVectors(ui,di),e=[fa.x,fa.y,fa.z],br(e,Zi,$i,Ki,da))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,Tn).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(Tn).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(Kn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),Kn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),Kn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),Kn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),Kn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),Kn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),Kn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),Kn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(Kn),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(t){return this.min.fromArray(t.min),this.max.fromArray(t.max),this}}const Kn=[new F,new F,new F,new F,new F,new F,new F,new F],Tn=new F,ua=new Wi,Zi=new F,$i=new F,Ki=new F,ui=new F,di=new F,Ci=new F,Rs=new F,da=new F,fa=new F,Ai=new F;function br(i,t,e,n,s){for(let a=0,r=i.length-3;a<=r;a+=3){Ai.fromArray(i,a);const o=s.x*Math.abs(Ai.x)+s.y*Math.abs(Ai.y)+s.z*Math.abs(Ai.z),l=t.dot(Ai),c=e.dot(Ai),h=n.dot(Ai);if(Math.max(-Math.max(l,c,h),Math.min(l,c,h))>o)return!1}return!0}const Td=new Wi,Ps=new F,Er=new F;class ra{constructor(t=new F,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){const n=this.center;e!==void 0?n.copy(e):Td.setFromPoints(t).getCenter(n);let s=0;for(let a=0,r=t.length;a<r;a++)s=Math.max(s,n.distanceToSquared(t[a]));return this.radius=Math.sqrt(s),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){const e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){const n=this.center.distanceToSquared(t);return e.copy(t),n>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;Ps.subVectors(t,this.center);const e=Ps.lengthSq();if(e>this.radius*this.radius){const n=Math.sqrt(e),s=(n-this.radius)*.5;this.center.addScaledVector(Ps,s/n),this.radius+=s}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(Er.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(Ps.copy(t.center).add(Er)),this.expandByPoint(Ps.copy(t.center).sub(Er))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(t){return this.radius=t.radius,this.center.fromArray(t.center),this}}const Jn=new F,Tr=new F,pa=new F,fi=new F,Cr=new F,ma=new F,Ar=new F;class Cd{constructor(t=new F,e=new F(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,Jn)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);const n=e.dot(this.direction);return n<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){const e=Jn.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(Jn.copy(this.origin).addScaledVector(this.direction,e),Jn.distanceToSquared(t))}distanceSqToSegment(t,e,n,s){Tr.copy(t).add(e).multiplyScalar(.5),pa.copy(e).sub(t).normalize(),fi.copy(this.origin).sub(Tr);const a=t.distanceTo(e)*.5,r=-this.direction.dot(pa),o=fi.dot(this.direction),l=-fi.dot(pa),c=fi.lengthSq(),h=Math.abs(1-r*r);let u,d,p,g;if(h>0)if(u=r*l-o,d=r*o-l,g=a*h,u>=0)if(d>=-g)if(d<=g){const _=1/h;u*=_,d*=_,p=u*(u+r*d+2*o)+d*(r*u+d+2*l)+c}else d=a,u=Math.max(0,-(r*d+o)),p=-u*u+d*(d+2*l)+c;else d=-a,u=Math.max(0,-(r*d+o)),p=-u*u+d*(d+2*l)+c;else d<=-g?(u=Math.max(0,-(-r*a+o)),d=u>0?-a:Math.min(Math.max(-a,-l),a),p=-u*u+d*(d+2*l)+c):d<=g?(u=0,d=Math.min(Math.max(-a,-l),a),p=d*(d+2*l)+c):(u=Math.max(0,-(r*a+o)),d=u>0?a:Math.min(Math.max(-a,-l),a),p=-u*u+d*(d+2*l)+c);else d=r>0?-a:a,u=Math.max(0,-(r*d+o)),p=-u*u+d*(d+2*l)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,u),s&&s.copy(Tr).addScaledVector(pa,d),p}intersectSphere(t,e){Jn.subVectors(t.center,this.origin);const n=Jn.dot(this.direction),s=Jn.dot(Jn)-n*n,a=t.radius*t.radius;if(s>a)return null;const r=Math.sqrt(a-s),o=n-r,l=n+r;return l<0?null:o<0?this.at(l,e):this.at(o,e)}intersectsSphere(t){return t.radius<0?!1:this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){const e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(t.normal)+t.constant)/e;return n>=0?n:null}intersectPlane(t,e){const n=this.distanceToPlane(t);return n===null?null:this.at(n,e)}intersectsPlane(t){const e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let n,s,a,r,o,l;const c=1/this.direction.x,h=1/this.direction.y,u=1/this.direction.z,d=this.origin;return c>=0?(n=(t.min.x-d.x)*c,s=(t.max.x-d.x)*c):(n=(t.max.x-d.x)*c,s=(t.min.x-d.x)*c),h>=0?(a=(t.min.y-d.y)*h,r=(t.max.y-d.y)*h):(a=(t.max.y-d.y)*h,r=(t.min.y-d.y)*h),n>r||a>s||((a>n||isNaN(n))&&(n=a),(r<s||isNaN(s))&&(s=r),u>=0?(o=(t.min.z-d.z)*u,l=(t.max.z-d.z)*u):(o=(t.max.z-d.z)*u,l=(t.min.z-d.z)*u),n>l||o>s)||((o>n||n!==n)&&(n=o),(l<s||s!==s)&&(s=l),s<0)?null:this.at(n>=0?n:s,e)}intersectsBox(t){return this.intersectBox(t,Jn)!==null}intersectTriangle(t,e,n,s,a){Cr.subVectors(e,t),ma.subVectors(n,t),Ar.crossVectors(Cr,ma);let r=this.direction.dot(Ar),o;if(r>0){if(s)return null;o=1}else if(r<0)o=-1,r=-r;else return null;fi.subVectors(this.origin,t);const l=o*this.direction.dot(ma.crossVectors(fi,ma));if(l<0)return null;const c=o*this.direction.dot(Cr.cross(fi));if(c<0||l+c>r)return null;const h=-o*fi.dot(Ar);return h<0?null:this.at(h/r,a)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class jt{constructor(t,e,n,s,a,r,o,l,c,h,u,d,p,g,_,m){jt.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,n,s,a,r,o,l,c,h,u,d,p,g,_,m)}set(t,e,n,s,a,r,o,l,c,h,u,d,p,g,_,m){const f=this.elements;return f[0]=t,f[4]=e,f[8]=n,f[12]=s,f[1]=a,f[5]=r,f[9]=o,f[13]=l,f[2]=c,f[6]=h,f[10]=u,f[14]=d,f[3]=p,f[7]=g,f[11]=_,f[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new jt().fromArray(this.elements)}copy(t){const e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],e[9]=n[9],e[10]=n[10],e[11]=n[11],e[12]=n[12],e[13]=n[13],e[14]=n[14],e[15]=n[15],this}copyPosition(t){const e=this.elements,n=t.elements;return e[12]=n[12],e[13]=n[13],e[14]=n[14],this}setFromMatrix3(t){const e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,n){return this.determinant()===0?(t.set(1,0,0),e.set(0,1,0),n.set(0,0,1),this):(t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this)}makeBasis(t,e,n){return this.set(t.x,e.x,n.x,0,t.y,e.y,n.y,0,t.z,e.z,n.z,0,0,0,0,1),this}extractRotation(t){if(t.determinant()===0)return this.identity();const e=this.elements,n=t.elements,s=1/Ji.setFromMatrixColumn(t,0).length(),a=1/Ji.setFromMatrixColumn(t,1).length(),r=1/Ji.setFromMatrixColumn(t,2).length();return e[0]=n[0]*s,e[1]=n[1]*s,e[2]=n[2]*s,e[3]=0,e[4]=n[4]*a,e[5]=n[5]*a,e[6]=n[6]*a,e[7]=0,e[8]=n[8]*r,e[9]=n[9]*r,e[10]=n[10]*r,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){const e=this.elements,n=t.x,s=t.y,a=t.z,r=Math.cos(n),o=Math.sin(n),l=Math.cos(s),c=Math.sin(s),h=Math.cos(a),u=Math.sin(a);if(t.order==="XYZ"){const d=r*h,p=r*u,g=o*h,_=o*u;e[0]=l*h,e[4]=-l*u,e[8]=c,e[1]=p+g*c,e[5]=d-_*c,e[9]=-o*l,e[2]=_-d*c,e[6]=g+p*c,e[10]=r*l}else if(t.order==="YXZ"){const d=l*h,p=l*u,g=c*h,_=c*u;e[0]=d+_*o,e[4]=g*o-p,e[8]=r*c,e[1]=r*u,e[5]=r*h,e[9]=-o,e[2]=p*o-g,e[6]=_+d*o,e[10]=r*l}else if(t.order==="ZXY"){const d=l*h,p=l*u,g=c*h,_=c*u;e[0]=d-_*o,e[4]=-r*u,e[8]=g+p*o,e[1]=p+g*o,e[5]=r*h,e[9]=_-d*o,e[2]=-r*c,e[6]=o,e[10]=r*l}else if(t.order==="ZYX"){const d=r*h,p=r*u,g=o*h,_=o*u;e[0]=l*h,e[4]=g*c-p,e[8]=d*c+_,e[1]=l*u,e[5]=_*c+d,e[9]=p*c-g,e[2]=-c,e[6]=o*l,e[10]=r*l}else if(t.order==="YZX"){const d=r*l,p=r*c,g=o*l,_=o*c;e[0]=l*h,e[4]=_-d*u,e[8]=g*u+p,e[1]=u,e[5]=r*h,e[9]=-o*h,e[2]=-c*h,e[6]=p*u+g,e[10]=d-_*u}else if(t.order==="XZY"){const d=r*l,p=r*c,g=o*l,_=o*c;e[0]=l*h,e[4]=-u,e[8]=c*h,e[1]=d*u+_,e[5]=r*h,e[9]=p*u-g,e[2]=g*u-p,e[6]=o*h,e[10]=_*u+d}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(Ad,t,Rd)}lookAt(t,e,n){const s=this.elements;return cn.subVectors(t,e),cn.lengthSq()===0&&(cn.z=1),cn.normalize(),pi.crossVectors(n,cn),pi.lengthSq()===0&&(Math.abs(n.z)===1?cn.x+=1e-4:cn.z+=1e-4,cn.normalize(),pi.crossVectors(n,cn)),pi.normalize(),ga.crossVectors(cn,pi),s[0]=pi.x,s[4]=ga.x,s[8]=cn.x,s[1]=pi.y,s[5]=ga.y,s[9]=cn.y,s[2]=pi.z,s[6]=ga.z,s[10]=cn.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const n=t.elements,s=e.elements,a=this.elements,r=n[0],o=n[4],l=n[8],c=n[12],h=n[1],u=n[5],d=n[9],p=n[13],g=n[2],_=n[6],m=n[10],f=n[14],S=n[3],w=n[7],y=n[11],E=n[15],R=s[0],T=s[4],D=s[8],x=s[12],M=s[1],A=s[5],I=s[9],L=s[13],B=s[2],O=s[6],G=s[10],z=s[14],Z=s[3],lt=s[7],et=s[11],rt=s[15];return a[0]=r*R+o*M+l*B+c*Z,a[4]=r*T+o*A+l*O+c*lt,a[8]=r*D+o*I+l*G+c*et,a[12]=r*x+o*L+l*z+c*rt,a[1]=h*R+u*M+d*B+p*Z,a[5]=h*T+u*A+d*O+p*lt,a[9]=h*D+u*I+d*G+p*et,a[13]=h*x+u*L+d*z+p*rt,a[2]=g*R+_*M+m*B+f*Z,a[6]=g*T+_*A+m*O+f*lt,a[10]=g*D+_*I+m*G+f*et,a[14]=g*x+_*L+m*z+f*rt,a[3]=S*R+w*M+y*B+E*Z,a[7]=S*T+w*A+y*O+E*lt,a[11]=S*D+w*I+y*G+E*et,a[15]=S*x+w*L+y*z+E*rt,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){const t=this.elements,e=t[0],n=t[4],s=t[8],a=t[12],r=t[1],o=t[5],l=t[9],c=t[13],h=t[2],u=t[6],d=t[10],p=t[14],g=t[3],_=t[7],m=t[11],f=t[15],S=l*p-c*d,w=o*p-c*u,y=o*d-l*u,E=r*p-c*h,R=r*d-l*h,T=r*u-o*h;return e*(_*S-m*w+f*y)-n*(g*S-m*E+f*R)+s*(g*w-_*E+f*T)-a*(g*y-_*R+m*T)}transpose(){const t=this.elements;let e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,n){const s=this.elements;return t.isVector3?(s[12]=t.x,s[13]=t.y,s[14]=t.z):(s[12]=t,s[13]=e,s[14]=n),this}invert(){const t=this.elements,e=t[0],n=t[1],s=t[2],a=t[3],r=t[4],o=t[5],l=t[6],c=t[7],h=t[8],u=t[9],d=t[10],p=t[11],g=t[12],_=t[13],m=t[14],f=t[15],S=u*m*c-_*d*c+_*l*p-o*m*p-u*l*f+o*d*f,w=g*d*c-h*m*c-g*l*p+r*m*p+h*l*f-r*d*f,y=h*_*c-g*u*c+g*o*p-r*_*p-h*o*f+r*u*f,E=g*u*l-h*_*l-g*o*d+r*_*d+h*o*m-r*u*m,R=e*S+n*w+s*y+a*E;if(R===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const T=1/R;return t[0]=S*T,t[1]=(_*d*a-u*m*a-_*s*p+n*m*p+u*s*f-n*d*f)*T,t[2]=(o*m*a-_*l*a+_*s*c-n*m*c-o*s*f+n*l*f)*T,t[3]=(u*l*a-o*d*a-u*s*c+n*d*c+o*s*p-n*l*p)*T,t[4]=w*T,t[5]=(h*m*a-g*d*a+g*s*p-e*m*p-h*s*f+e*d*f)*T,t[6]=(g*l*a-r*m*a-g*s*c+e*m*c+r*s*f-e*l*f)*T,t[7]=(r*d*a-h*l*a+h*s*c-e*d*c-r*s*p+e*l*p)*T,t[8]=y*T,t[9]=(g*u*a-h*_*a-g*n*p+e*_*p+h*n*f-e*u*f)*T,t[10]=(r*_*a-g*o*a+g*n*c-e*_*c-r*n*f+e*o*f)*T,t[11]=(h*o*a-r*u*a-h*n*c+e*u*c+r*n*p-e*o*p)*T,t[12]=E*T,t[13]=(h*_*s-g*u*s+g*n*d-e*_*d-h*n*m+e*u*m)*T,t[14]=(g*o*s-r*_*s-g*n*l+e*_*l+r*n*m-e*o*m)*T,t[15]=(r*u*s-h*o*s+h*n*l-e*u*l-r*n*d+e*o*d)*T,this}scale(t){const e=this.elements,n=t.x,s=t.y,a=t.z;return e[0]*=n,e[4]*=s,e[8]*=a,e[1]*=n,e[5]*=s,e[9]*=a,e[2]*=n,e[6]*=s,e[10]*=a,e[3]*=n,e[7]*=s,e[11]*=a,this}getMaxScaleOnAxis(){const t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],n=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],s=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,n,s))}makeTranslation(t,e,n){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,n,0,0,0,1),this}makeRotationX(t){const e=Math.cos(t),n=Math.sin(t);return this.set(1,0,0,0,0,e,-n,0,0,n,e,0,0,0,0,1),this}makeRotationY(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,0,n,0,0,1,0,0,-n,0,e,0,0,0,0,1),this}makeRotationZ(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,0,n,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){const n=Math.cos(e),s=Math.sin(e),a=1-n,r=t.x,o=t.y,l=t.z,c=a*r,h=a*o;return this.set(c*r+n,c*o-s*l,c*l+s*o,0,c*o+s*l,h*o+n,h*l-s*r,0,c*l-s*o,h*l+s*r,a*l*l+n,0,0,0,0,1),this}makeScale(t,e,n){return this.set(t,0,0,0,0,e,0,0,0,0,n,0,0,0,0,1),this}makeShear(t,e,n,s,a,r){return this.set(1,n,a,0,t,1,r,0,e,s,1,0,0,0,0,1),this}compose(t,e,n){const s=this.elements,a=e._x,r=e._y,o=e._z,l=e._w,c=a+a,h=r+r,u=o+o,d=a*c,p=a*h,g=a*u,_=r*h,m=r*u,f=o*u,S=l*c,w=l*h,y=l*u,E=n.x,R=n.y,T=n.z;return s[0]=(1-(_+f))*E,s[1]=(p+y)*E,s[2]=(g-w)*E,s[3]=0,s[4]=(p-y)*R,s[5]=(1-(d+f))*R,s[6]=(m+S)*R,s[7]=0,s[8]=(g+w)*T,s[9]=(m-S)*T,s[10]=(1-(d+_))*T,s[11]=0,s[12]=t.x,s[13]=t.y,s[14]=t.z,s[15]=1,this}decompose(t,e,n){const s=this.elements;if(t.x=s[12],t.y=s[13],t.z=s[14],this.determinant()===0)return n.set(1,1,1),e.identity(),this;let a=Ji.set(s[0],s[1],s[2]).length();const r=Ji.set(s[4],s[5],s[6]).length(),o=Ji.set(s[8],s[9],s[10]).length();this.determinant()<0&&(a=-a),Cn.copy(this);const c=1/a,h=1/r,u=1/o;return Cn.elements[0]*=c,Cn.elements[1]*=c,Cn.elements[2]*=c,Cn.elements[4]*=h,Cn.elements[5]*=h,Cn.elements[6]*=h,Cn.elements[8]*=u,Cn.elements[9]*=u,Cn.elements[10]*=u,e.setFromRotationMatrix(Cn),n.x=a,n.y=r,n.z=o,this}makePerspective(t,e,n,s,a,r,o=Hn,l=!1){const c=this.elements,h=2*a/(e-t),u=2*a/(n-s),d=(e+t)/(e-t),p=(n+s)/(n-s);let g,_;if(l)g=a/(r-a),_=r*a/(r-a);else if(o===Hn)g=-(r+a)/(r-a),_=-2*r*a/(r-a);else if(o===Ka)g=-r/(r-a),_=-r*a/(r-a);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return c[0]=h,c[4]=0,c[8]=d,c[12]=0,c[1]=0,c[5]=u,c[9]=p,c[13]=0,c[2]=0,c[6]=0,c[10]=g,c[14]=_,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(t,e,n,s,a,r,o=Hn,l=!1){const c=this.elements,h=2/(e-t),u=2/(n-s),d=-(e+t)/(e-t),p=-(n+s)/(n-s);let g,_;if(l)g=1/(r-a),_=r/(r-a);else if(o===Hn)g=-2/(r-a),_=-(r+a)/(r-a);else if(o===Ka)g=-1/(r-a),_=-a/(r-a);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return c[0]=h,c[4]=0,c[8]=0,c[12]=d,c[1]=0,c[5]=u,c[9]=0,c[13]=p,c[2]=0,c[6]=0,c[10]=g,c[14]=_,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(t){const e=this.elements,n=t.elements;for(let s=0;s<16;s++)if(e[s]!==n[s])return!1;return!0}fromArray(t,e=0){for(let n=0;n<16;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){const n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t[e+9]=n[9],t[e+10]=n[10],t[e+11]=n[11],t[e+12]=n[12],t[e+13]=n[13],t[e+14]=n[14],t[e+15]=n[15],t}}const Ji=new F,Cn=new jt,Ad=new F(0,0,0),Rd=new F(1,1,1),pi=new F,ga=new F,cn=new F,sc=new jt,ac=new qe;class Be{constructor(t=0,e=0,n=0,s=Be.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=n,this._order=s}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,n,s=this._order){return this._x=t,this._y=e,this._z=n,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,n=!0){const s=t.elements,a=s[0],r=s[4],o=s[8],l=s[1],c=s[5],h=s[9],u=s[2],d=s[6],p=s[10];switch(e){case"XYZ":this._y=Math.asin(Kt(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-h,p),this._z=Math.atan2(-r,a)):(this._x=Math.atan2(d,c),this._z=0);break;case"YXZ":this._x=Math.asin(-Kt(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(o,p),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-u,a),this._z=0);break;case"ZXY":this._x=Math.asin(Kt(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-u,p),this._z=Math.atan2(-r,c)):(this._y=0,this._z=Math.atan2(l,a));break;case"ZYX":this._y=Math.asin(-Kt(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(d,p),this._z=Math.atan2(l,a)):(this._x=0,this._z=Math.atan2(-r,c));break;case"YZX":this._z=Math.asin(Kt(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-h,c),this._y=Math.atan2(-u,a)):(this._x=0,this._y=Math.atan2(o,p));break;case"XZY":this._z=Math.asin(-Kt(r,-1,1)),Math.abs(r)<.9999999?(this._x=Math.atan2(d,c),this._y=Math.atan2(o,a)):(this._x=Math.atan2(-h,p),this._y=0);break;default:Ft("Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,n===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,n){return sc.makeRotationFromQuaternion(t),this.setFromRotationMatrix(sc,e,n)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return ac.setFromEuler(this),this.setFromQuaternion(ac,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Be.DEFAULT_ORDER="XYZ";class Ch{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}}let Pd=0;const rc=new F,ji=new qe,jn=new jt,xa=new F,Is=new F,Id=new F,Ld=new qe,oc=new F(1,0,0),lc=new F(0,1,0),cc=new F(0,0,1),hc={type:"added"},Dd={type:"removed"},Qi={type:"childadded",child:null},Rr={type:"childremoved",child:null};class Oe extends Es{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Pd++}),this.uuid=Xn(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Oe.DEFAULT_UP.clone();const t=new F,e=new Be,n=new qe,s=new F(1,1,1);function a(){n.setFromEuler(e,!1)}function r(){e.setFromQuaternion(n,void 0,!1)}e._onChange(a),n._onChange(r),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new jt},normalMatrix:{value:new Yt}}),this.matrix=new jt,this.matrixWorld=new jt,this.matrixAutoUpdate=Oe.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Oe.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Ch,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return ji.setFromAxisAngle(t,e),this.quaternion.multiply(ji),this}rotateOnWorldAxis(t,e){return ji.setFromAxisAngle(t,e),this.quaternion.premultiply(ji),this}rotateX(t){return this.rotateOnAxis(oc,t)}rotateY(t){return this.rotateOnAxis(lc,t)}rotateZ(t){return this.rotateOnAxis(cc,t)}translateOnAxis(t,e){return rc.copy(t).applyQuaternion(this.quaternion),this.position.add(rc.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(oc,t)}translateY(t){return this.translateOnAxis(lc,t)}translateZ(t){return this.translateOnAxis(cc,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(jn.copy(this.matrixWorld).invert())}lookAt(t,e,n){t.isVector3?xa.copy(t):xa.set(t,e,n);const s=this.parent;this.updateWorldMatrix(!0,!1),Is.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?jn.lookAt(Is,xa,this.up):jn.lookAt(xa,Is,this.up),this.quaternion.setFromRotationMatrix(jn),s&&(jn.extractRotation(s.matrixWorld),ji.setFromRotationMatrix(jn),this.quaternion.premultiply(ji.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(Qt("Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(hc),Qi.child=t,this.dispatchEvent(Qi),Qi.child=null):Qt("Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(Dd),Rr.child=t,this.dispatchEvent(Rr),Rr.child=null),this}removeFromParent(){const t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),jn.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),jn.multiply(t.parent.matrixWorld)),t.applyMatrix4(jn),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(hc),Qi.child=t,this.dispatchEvent(Qi),Qi.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let n=0,s=this.children.length;n<s;n++){const r=this.children[n].getObjectByProperty(t,e);if(r!==void 0)return r}}getObjectsByProperty(t,e,n=[]){this[t]===e&&n.push(this);const s=this.children;for(let a=0,r=s.length;a<r;a++)s[a].getObjectsByProperty(t,e,n);return n}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Is,t,Id),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Is,Ld,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);const e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}traverse(t){t(this);const e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);const e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].traverseVisible(t)}traverseAncestors(t){const e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);const e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].updateMatrixWorld(t)}updateWorldMatrix(t,e){const n=this.parent;if(t===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),e===!0){const s=this.children;for(let a=0,r=s.length;a<r;a++)s[a].updateWorldMatrix(!1,!0)}}toJSON(t){const e=t===void 0||typeof t=="string",n={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const s={};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.castShadow===!0&&(s.castShadow=!0),this.receiveShadow===!0&&(s.receiveShadow=!0),this.visible===!1&&(s.visible=!1),this.frustumCulled===!1&&(s.frustumCulled=!1),this.renderOrder!==0&&(s.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(s.matrixAutoUpdate=!1),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.geometryInfo=this._geometryInfo.map(o=>({...o,boundingBox:o.boundingBox?o.boundingBox.toJSON():void 0,boundingSphere:o.boundingSphere?o.boundingSphere.toJSON():void 0})),s.instanceInfo=this._instanceInfo.map(o=>({...o})),s.availableInstanceIds=this._availableInstanceIds.slice(),s.availableGeometryIds=this._availableGeometryIds.slice(),s.nextIndexStart=this._nextIndexStart,s.nextVertexStart=this._nextVertexStart,s.geometryCount=this._geometryCount,s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.matricesTexture=this._matricesTexture.toJSON(t),s.indirectTexture=this._indirectTexture.toJSON(t),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(s.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(s.boundingBox=this.boundingBox.toJSON()));function a(o,l){return o[l.uuid]===void 0&&(o[l.uuid]=l.toJSON(t)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=a(t.geometries,this.geometry);const o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){const l=o.shapes;if(Array.isArray(l))for(let c=0,h=l.length;c<h;c++){const u=l[c];a(t.shapes,u)}else a(t.shapes,l)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(a(t.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const o=[];for(let l=0,c=this.material.length;l<c;l++)o.push(a(t.materials,this.material[l]));s.material=o}else s.material=a(t.materials,this.material);if(this.children.length>0){s.children=[];for(let o=0;o<this.children.length;o++)s.children.push(this.children[o].toJSON(t).object)}if(this.animations.length>0){s.animations=[];for(let o=0;o<this.animations.length;o++){const l=this.animations[o];s.animations.push(a(t.animations,l))}}if(e){const o=r(t.geometries),l=r(t.materials),c=r(t.textures),h=r(t.images),u=r(t.shapes),d=r(t.skeletons),p=r(t.animations),g=r(t.nodes);o.length>0&&(n.geometries=o),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),h.length>0&&(n.images=h),u.length>0&&(n.shapes=u),d.length>0&&(n.skeletons=d),p.length>0&&(n.animations=p),g.length>0&&(n.nodes=g)}return n.object=s,n;function r(o){const l=[];for(const c in o){const h=o[c];delete h.metadata,l.push(h)}return l}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let n=0;n<t.children.length;n++){const s=t.children[n];this.add(s.clone())}return this}}Oe.DEFAULT_UP=new F(0,1,0);Oe.DEFAULT_MATRIX_AUTO_UPDATE=!0;Oe.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const An=new F,Qn=new F,Pr=new F,ti=new F,ts=new F,es=new F,uc=new F,Ir=new F,Lr=new F,Dr=new F,Fr=new Ee,Nr=new Ee,Ur=new Ee;class yn{constructor(t=new F,e=new F,n=new F){this.a=t,this.b=e,this.c=n}static getNormal(t,e,n,s){s.subVectors(n,e),An.subVectors(t,e),s.cross(An);const a=s.lengthSq();return a>0?s.multiplyScalar(1/Math.sqrt(a)):s.set(0,0,0)}static getBarycoord(t,e,n,s,a){An.subVectors(s,e),Qn.subVectors(n,e),Pr.subVectors(t,e);const r=An.dot(An),o=An.dot(Qn),l=An.dot(Pr),c=Qn.dot(Qn),h=Qn.dot(Pr),u=r*c-o*o;if(u===0)return a.set(0,0,0),null;const d=1/u,p=(c*l-o*h)*d,g=(r*h-o*l)*d;return a.set(1-p-g,g,p)}static containsPoint(t,e,n,s){return this.getBarycoord(t,e,n,s,ti)===null?!1:ti.x>=0&&ti.y>=0&&ti.x+ti.y<=1}static getInterpolation(t,e,n,s,a,r,o,l){return this.getBarycoord(t,e,n,s,ti)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(a,ti.x),l.addScaledVector(r,ti.y),l.addScaledVector(o,ti.z),l)}static getInterpolatedAttribute(t,e,n,s,a,r){return Fr.setScalar(0),Nr.setScalar(0),Ur.setScalar(0),Fr.fromBufferAttribute(t,e),Nr.fromBufferAttribute(t,n),Ur.fromBufferAttribute(t,s),r.setScalar(0),r.addScaledVector(Fr,a.x),r.addScaledVector(Nr,a.y),r.addScaledVector(Ur,a.z),r}static isFrontFacing(t,e,n,s){return An.subVectors(n,e),Qn.subVectors(t,e),An.cross(Qn).dot(s)<0}set(t,e,n){return this.a.copy(t),this.b.copy(e),this.c.copy(n),this}setFromPointsAndIndices(t,e,n,s){return this.a.copy(t[e]),this.b.copy(t[n]),this.c.copy(t[s]),this}setFromAttributeAndIndices(t,e,n,s){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,n),this.c.fromBufferAttribute(t,s),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return An.subVectors(this.c,this.b),Qn.subVectors(this.a,this.b),An.cross(Qn).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return yn.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return yn.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,n,s,a){return yn.getInterpolation(t,this.a,this.b,this.c,e,n,s,a)}containsPoint(t){return yn.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return yn.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){const n=this.a,s=this.b,a=this.c;let r,o;ts.subVectors(s,n),es.subVectors(a,n),Ir.subVectors(t,n);const l=ts.dot(Ir),c=es.dot(Ir);if(l<=0&&c<=0)return e.copy(n);Lr.subVectors(t,s);const h=ts.dot(Lr),u=es.dot(Lr);if(h>=0&&u<=h)return e.copy(s);const d=l*u-h*c;if(d<=0&&l>=0&&h<=0)return r=l/(l-h),e.copy(n).addScaledVector(ts,r);Dr.subVectors(t,a);const p=ts.dot(Dr),g=es.dot(Dr);if(g>=0&&p<=g)return e.copy(a);const _=p*c-l*g;if(_<=0&&c>=0&&g<=0)return o=c/(c-g),e.copy(n).addScaledVector(es,o);const m=h*g-p*u;if(m<=0&&u-h>=0&&p-g>=0)return uc.subVectors(a,s),o=(u-h)/(u-h+(p-g)),e.copy(s).addScaledVector(uc,o);const f=1/(m+_+d);return r=_*f,o=d*f,e.copy(n).addScaledVector(ts,r).addScaledVector(es,o)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}}const Ah={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},mi={h:0,s:0,l:0},_a={h:0,s:0,l:0};function Or(i,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?i+(t-i)*6*e:e<1/2?t:e<2/3?i+(t-i)*6*(2/3-e):i}class Ut{constructor(t,e,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,n)}set(t,e,n){if(e===void 0&&n===void 0){const s=t;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(t,e,n);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=xn){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,te.colorSpaceToWorking(this,e),this}setRGB(t,e,n,s=te.workingColorSpace){return this.r=t,this.g=e,this.b=n,te.colorSpaceToWorking(this,s),this}setHSL(t,e,n,s=te.workingColorSpace){if(t=Cl(t,1),e=Kt(e,0,1),n=Kt(n,0,1),e===0)this.r=this.g=this.b=n;else{const a=n<=.5?n*(1+e):n+e-n*e,r=2*n-a;this.r=Or(r,a,t+1/3),this.g=Or(r,a,t),this.b=Or(r,a,t-1/3)}return te.colorSpaceToWorking(this,s),this}setStyle(t,e=xn){function n(a){a!==void 0&&parseFloat(a)<1&&Ft("Color: Alpha component of "+t+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(t)){let a;const r=s[1],o=s[2];switch(r){case"rgb":case"rgba":if(a=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(a[4]),this.setRGB(Math.min(255,parseInt(a[1],10))/255,Math.min(255,parseInt(a[2],10))/255,Math.min(255,parseInt(a[3],10))/255,e);if(a=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(a[4]),this.setRGB(Math.min(100,parseInt(a[1],10))/100,Math.min(100,parseInt(a[2],10))/100,Math.min(100,parseInt(a[3],10))/100,e);break;case"hsl":case"hsla":if(a=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(a[4]),this.setHSL(parseFloat(a[1])/360,parseFloat(a[2])/100,parseFloat(a[3])/100,e);break;default:Ft("Color: Unknown color model "+t)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(t)){const a=s[1],r=a.length;if(r===3)return this.setRGB(parseInt(a.charAt(0),16)/15,parseInt(a.charAt(1),16)/15,parseInt(a.charAt(2),16)/15,e);if(r===6)return this.setHex(parseInt(a,16),e);Ft("Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=xn){const n=Ah[t.toLowerCase()];return n!==void 0?this.setHex(n,e):Ft("Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=ri(t.r),this.g=ri(t.g),this.b=ri(t.b),this}copyLinearToSRGB(t){return this.r=xs(t.r),this.g=xs(t.g),this.b=xs(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=xn){return te.workingToColorSpace(Ye.copy(this),t),Math.round(Kt(Ye.r*255,0,255))*65536+Math.round(Kt(Ye.g*255,0,255))*256+Math.round(Kt(Ye.b*255,0,255))}getHexString(t=xn){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=te.workingColorSpace){te.workingToColorSpace(Ye.copy(this),e);const n=Ye.r,s=Ye.g,a=Ye.b,r=Math.max(n,s,a),o=Math.min(n,s,a);let l,c;const h=(o+r)/2;if(o===r)l=0,c=0;else{const u=r-o;switch(c=h<=.5?u/(r+o):u/(2-r-o),r){case n:l=(s-a)/u+(s<a?6:0);break;case s:l=(a-n)/u+2;break;case a:l=(n-s)/u+4;break}l/=6}return t.h=l,t.s=c,t.l=h,t}getRGB(t,e=te.workingColorSpace){return te.workingToColorSpace(Ye.copy(this),e),t.r=Ye.r,t.g=Ye.g,t.b=Ye.b,t}getStyle(t=xn){te.workingToColorSpace(Ye.copy(this),t);const e=Ye.r,n=Ye.g,s=Ye.b;return t!==xn?`color(${t} ${e.toFixed(3)} ${n.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(n*255)},${Math.round(s*255)})`}offsetHSL(t,e,n){return this.getHSL(mi),this.setHSL(mi.h+t,mi.s+e,mi.l+n)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,n){return this.r=t.r+(e.r-t.r)*n,this.g=t.g+(e.g-t.g)*n,this.b=t.b+(e.b-t.b)*n,this}lerpHSL(t,e){this.getHSL(mi),t.getHSL(_a);const n=Zs(mi.h,_a.h,e),s=Zs(mi.s,_a.s,e),a=Zs(mi.l,_a.l,e);return this.setHSL(n,s,a),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){const e=this.r,n=this.g,s=this.b,a=t.elements;return this.r=a[0]*e+a[3]*n+a[6]*s,this.g=a[1]*e+a[4]*n+a[7]*s,this.b=a[2]*e+a[5]*n+a[8]*s,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Ye=new Ut;Ut.NAMES=Ah;let Fd=0;class bi extends Es{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Fd++}),this.uuid=Xn(),this.name="",this.type="Material",this.blending=gs,this.side=wi,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=lo,this.blendDst=co,this.blendEquation=Oi,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Ut(0,0,0),this.blendAlpha=0,this.depthFunc=_s,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Jl,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Yi,this.stencilZFail=Yi,this.stencilZPass=Yi,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(const e in t){const n=t[e];if(n===void 0){Ft(`Material: parameter '${e}' has value of undefined.`);continue}const s=this[e];if(s===void 0){Ft(`Material: '${e}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(n):s&&s.isVector3&&n&&n.isVector3?s.copy(n):this[e]=n}}toJSON(t){const e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});const n={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(n.sheenColorMap=this.sheenColorMap.toJSON(t).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(n.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(t).uuid),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(t).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(t).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(t).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(t).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(t).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==gs&&(n.blending=this.blending),this.side!==wi&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==lo&&(n.blendSrc=this.blendSrc),this.blendDst!==co&&(n.blendDst=this.blendDst),this.blendEquation!==Oi&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==_s&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Jl&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Yi&&(n.stencilFail=this.stencilFail),this.stencilZFail!==Yi&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==Yi&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.allowOverride===!1&&(n.allowOverride=!1),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function s(a){const r=[];for(const o in a){const l=a[o];delete l.metadata,r.push(l)}return r}if(e){const a=s(t.textures),r=s(t.images);a.length>0&&(n.textures=a),r.length>0&&(n.images=r)}return n}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;const e=t.clippingPlanes;let n=null;if(e!==null){const s=e.length;n=new Array(s);for(let a=0;a!==s;++a)n[a]=e[a].clone()}return this.clippingPlanes=n,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.allowOverride=t.allowOverride,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}}class Ue extends bi{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Ut(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Be,this.combine=cr,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}}const Re=new F,va=new ut;let Nd=0;class wn{constructor(t,e,n=!1){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:Nd++}),this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=n,this.usage=tl,this.updateRanges=[],this.gpuType=Nn,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,n){t*=this.itemSize,n*=e.itemSize;for(let s=0,a=this.itemSize;s<a;s++)this.array[t+s]=e.array[n+s];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,n=this.count;e<n;e++)va.fromBufferAttribute(this,e),va.applyMatrix3(t),this.setXY(e,va.x,va.y);else if(this.itemSize===3)for(let e=0,n=this.count;e<n;e++)Re.fromBufferAttribute(this,e),Re.applyMatrix3(t),this.setXYZ(e,Re.x,Re.y,Re.z);return this}applyMatrix4(t){for(let e=0,n=this.count;e<n;e++)Re.fromBufferAttribute(this,e),Re.applyMatrix4(t),this.setXYZ(e,Re.x,Re.y,Re.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)Re.fromBufferAttribute(this,e),Re.applyNormalMatrix(t),this.setXYZ(e,Re.x,Re.y,Re.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)Re.fromBufferAttribute(this,e),Re.transformDirection(t),this.setXYZ(e,Re.x,Re.y,Re.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let n=this.array[t*this.itemSize+e];return this.normalized&&(n=In(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=de(n,this.array)),this.array[t*this.itemSize+e]=n,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=In(e,this.array)),e}setX(t,e){return this.normalized&&(e=de(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=In(e,this.array)),e}setY(t,e){return this.normalized&&(e=de(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=In(e,this.array)),e}setZ(t,e){return this.normalized&&(e=de(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=In(e,this.array)),e}setW(t,e){return this.normalized&&(e=de(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,n){return t*=this.itemSize,this.normalized&&(e=de(e,this.array),n=de(n,this.array)),this.array[t+0]=e,this.array[t+1]=n,this}setXYZ(t,e,n,s){return t*=this.itemSize,this.normalized&&(e=de(e,this.array),n=de(n,this.array),s=de(s,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=s,this}setXYZW(t,e,n,s,a){return t*=this.itemSize,this.normalized&&(e=de(e,this.array),n=de(n,this.array),s=de(s,this.array),a=de(a,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=s,this.array[t+3]=a,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==tl&&(t.usage=this.usage),t}}class Rh extends wn{constructor(t,e,n){super(new Uint16Array(t),e,n)}}class Ph extends wn{constructor(t,e,n){super(new Uint32Array(t),e,n)}}class Ne extends wn{constructor(t,e,n){super(new Float32Array(t),e,n)}}let Ud=0;const mn=new jt,Br=new Oe,ns=new F,hn=new Wi,Ls=new Wi,He=new F;class rn extends Es{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Ud++}),this.uuid=Xn(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(Eh(t)?Ph:Rh)(t,1):this.index=t,this}setIndirect(t,e=0){return this.indirect=t,this.indirectOffset=e,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,n=0){this.groups.push({start:t,count:e,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){const e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const a=new Yt().getNormalMatrix(t);n.applyNormalMatrix(a),n.needsUpdate=!0}const s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(t),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return mn.makeRotationFromQuaternion(t),this.applyMatrix4(mn),this}rotateX(t){return mn.makeRotationX(t),this.applyMatrix4(mn),this}rotateY(t){return mn.makeRotationY(t),this.applyMatrix4(mn),this}rotateZ(t){return mn.makeRotationZ(t),this.applyMatrix4(mn),this}translate(t,e,n){return mn.makeTranslation(t,e,n),this.applyMatrix4(mn),this}scale(t,e,n){return mn.makeScale(t,e,n),this.applyMatrix4(mn),this}lookAt(t){return Br.lookAt(t),Br.updateMatrix(),this.applyMatrix4(Br.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(ns).negate(),this.translate(ns.x,ns.y,ns.z),this}setFromPoints(t){const e=this.getAttribute("position");if(e===void 0){const n=[];for(let s=0,a=t.length;s<a;s++){const r=t[s];n.push(r.x,r.y,r.z||0)}this.setAttribute("position",new Ne(n,3))}else{const n=Math.min(t.length,e.count);for(let s=0;s<n;s++){const a=t[s];e.setXYZ(s,a.x,a.y,a.z||0)}t.length>e.count&&Ft("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),e.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Wi);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){Qt("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new F(-1/0,-1/0,-1/0),new F(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let n=0,s=e.length;n<s;n++){const a=e[n];hn.setFromBufferAttribute(a),this.morphTargetsRelative?(He.addVectors(this.boundingBox.min,hn.min),this.boundingBox.expandByPoint(He),He.addVectors(this.boundingBox.max,hn.max),this.boundingBox.expandByPoint(He)):(this.boundingBox.expandByPoint(hn.min),this.boundingBox.expandByPoint(hn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&Qt('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new ra);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){Qt("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new F,1/0);return}if(t){const n=this.boundingSphere.center;if(hn.setFromBufferAttribute(t),e)for(let a=0,r=e.length;a<r;a++){const o=e[a];Ls.setFromBufferAttribute(o),this.morphTargetsRelative?(He.addVectors(hn.min,Ls.min),hn.expandByPoint(He),He.addVectors(hn.max,Ls.max),hn.expandByPoint(He)):(hn.expandByPoint(Ls.min),hn.expandByPoint(Ls.max))}hn.getCenter(n);let s=0;for(let a=0,r=t.count;a<r;a++)He.fromBufferAttribute(t,a),s=Math.max(s,n.distanceToSquared(He));if(e)for(let a=0,r=e.length;a<r;a++){const o=e[a],l=this.morphTargetsRelative;for(let c=0,h=o.count;c<h;c++)He.fromBufferAttribute(o,c),l&&(ns.fromBufferAttribute(t,c),He.add(ns)),s=Math.max(s,n.distanceToSquared(He))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&Qt('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){Qt("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=e.position,s=e.normal,a=e.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new wn(new Float32Array(4*n.count),4));const r=this.getAttribute("tangent"),o=[],l=[];for(let D=0;D<n.count;D++)o[D]=new F,l[D]=new F;const c=new F,h=new F,u=new F,d=new ut,p=new ut,g=new ut,_=new F,m=new F;function f(D,x,M){c.fromBufferAttribute(n,D),h.fromBufferAttribute(n,x),u.fromBufferAttribute(n,M),d.fromBufferAttribute(a,D),p.fromBufferAttribute(a,x),g.fromBufferAttribute(a,M),h.sub(c),u.sub(c),p.sub(d),g.sub(d);const A=1/(p.x*g.y-g.x*p.y);isFinite(A)&&(_.copy(h).multiplyScalar(g.y).addScaledVector(u,-p.y).multiplyScalar(A),m.copy(u).multiplyScalar(p.x).addScaledVector(h,-g.x).multiplyScalar(A),o[D].add(_),o[x].add(_),o[M].add(_),l[D].add(m),l[x].add(m),l[M].add(m))}let S=this.groups;S.length===0&&(S=[{start:0,count:t.count}]);for(let D=0,x=S.length;D<x;++D){const M=S[D],A=M.start,I=M.count;for(let L=A,B=A+I;L<B;L+=3)f(t.getX(L+0),t.getX(L+1),t.getX(L+2))}const w=new F,y=new F,E=new F,R=new F;function T(D){E.fromBufferAttribute(s,D),R.copy(E);const x=o[D];w.copy(x),w.sub(E.multiplyScalar(E.dot(x))).normalize(),y.crossVectors(R,x);const A=y.dot(l[D])<0?-1:1;r.setXYZW(D,w.x,w.y,w.z,A)}for(let D=0,x=S.length;D<x;++D){const M=S[D],A=M.start,I=M.count;for(let L=A,B=A+I;L<B;L+=3)T(t.getX(L+0)),T(t.getX(L+1)),T(t.getX(L+2))}}computeVertexNormals(){const t=this.index,e=this.getAttribute("position");if(e!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new wn(new Float32Array(e.count*3),3),this.setAttribute("normal",n);else for(let d=0,p=n.count;d<p;d++)n.setXYZ(d,0,0,0);const s=new F,a=new F,r=new F,o=new F,l=new F,c=new F,h=new F,u=new F;if(t)for(let d=0,p=t.count;d<p;d+=3){const g=t.getX(d+0),_=t.getX(d+1),m=t.getX(d+2);s.fromBufferAttribute(e,g),a.fromBufferAttribute(e,_),r.fromBufferAttribute(e,m),h.subVectors(r,a),u.subVectors(s,a),h.cross(u),o.fromBufferAttribute(n,g),l.fromBufferAttribute(n,_),c.fromBufferAttribute(n,m),o.add(h),l.add(h),c.add(h),n.setXYZ(g,o.x,o.y,o.z),n.setXYZ(_,l.x,l.y,l.z),n.setXYZ(m,c.x,c.y,c.z)}else for(let d=0,p=e.count;d<p;d+=3)s.fromBufferAttribute(e,d+0),a.fromBufferAttribute(e,d+1),r.fromBufferAttribute(e,d+2),h.subVectors(r,a),u.subVectors(s,a),h.cross(u),n.setXYZ(d+0,h.x,h.y,h.z),n.setXYZ(d+1,h.x,h.y,h.z),n.setXYZ(d+2,h.x,h.y,h.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){const t=this.attributes.normal;for(let e=0,n=t.count;e<n;e++)He.fromBufferAttribute(t,e),He.normalize(),t.setXYZ(e,He.x,He.y,He.z)}toNonIndexed(){function t(o,l){const c=o.array,h=o.itemSize,u=o.normalized,d=new c.constructor(l.length*h);let p=0,g=0;for(let _=0,m=l.length;_<m;_++){o.isInterleavedBufferAttribute?p=l[_]*o.data.stride+o.offset:p=l[_]*h;for(let f=0;f<h;f++)d[g++]=c[p++]}return new wn(d,h,u)}if(this.index===null)return Ft("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const e=new rn,n=this.index.array,s=this.attributes;for(const o in s){const l=s[o],c=t(l,n);e.setAttribute(o,c)}const a=this.morphAttributes;for(const o in a){const l=[],c=a[o];for(let h=0,u=c.length;h<u;h++){const d=c[h],p=t(d,n);l.push(p)}e.morphAttributes[o]=l}e.morphTargetsRelative=this.morphTargetsRelative;const r=this.groups;for(let o=0,l=r.length;o<l;o++){const c=r[o];e.addGroup(c.start,c.count,c.materialIndex)}return e}toJSON(){const t={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(t[c]=l[c]);return t}t.data={attributes:{}};const e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});const n=this.attributes;for(const l in n){const c=n[l];t.data.attributes[l]=c.toJSON(t.data)}const s={};let a=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],h=[];for(let u=0,d=c.length;u<d;u++){const p=c[u];h.push(p.toJSON(t.data))}h.length>0&&(s[l]=h,a=!0)}a&&(t.data.morphAttributes=s,t.data.morphTargetsRelative=this.morphTargetsRelative);const r=this.groups;r.length>0&&(t.data.groups=JSON.parse(JSON.stringify(r)));const o=this.boundingSphere;return o!==null&&(t.data.boundingSphere=o.toJSON()),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const e={};this.name=t.name;const n=t.index;n!==null&&this.setIndex(n.clone());const s=t.attributes;for(const c in s){const h=s[c];this.setAttribute(c,h.clone(e))}const a=t.morphAttributes;for(const c in a){const h=[],u=a[c];for(let d=0,p=u.length;d<p;d++)h.push(u[d].clone(e));this.morphAttributes[c]=h}this.morphTargetsRelative=t.morphTargetsRelative;const r=t.groups;for(let c=0,h=r.length;c<h;c++){const u=r[c];this.addGroup(u.start,u.count,u.materialIndex)}const o=t.boundingBox;o!==null&&(this.boundingBox=o.clone());const l=t.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const dc=new jt,Ri=new Cd,Ma=new ra,fc=new F,ya=new F,Sa=new F,wa=new F,kr=new F,ba=new F,pc=new F,Ea=new F;class nt extends Oe{constructor(t=new rn,e=new Ue){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){const e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){const s=e[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let a=0,r=s.length;a<r;a++){const o=s[a].name||String(a);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=a}}}}getVertexPosition(t,e){const n=this.geometry,s=n.attributes.position,a=n.morphAttributes.position,r=n.morphTargetsRelative;e.fromBufferAttribute(s,t);const o=this.morphTargetInfluences;if(a&&o){ba.set(0,0,0);for(let l=0,c=a.length;l<c;l++){const h=o[l],u=a[l];h!==0&&(kr.fromBufferAttribute(u,t),r?ba.addScaledVector(kr,h):ba.addScaledVector(kr.sub(e),h))}e.add(ba)}return e}raycast(t,e){const n=this.geometry,s=this.material,a=this.matrixWorld;s!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),Ma.copy(n.boundingSphere),Ma.applyMatrix4(a),Ri.copy(t.ray).recast(t.near),!(Ma.containsPoint(Ri.origin)===!1&&(Ri.intersectSphere(Ma,fc)===null||Ri.origin.distanceToSquared(fc)>(t.far-t.near)**2))&&(dc.copy(a).invert(),Ri.copy(t.ray).applyMatrix4(dc),!(n.boundingBox!==null&&Ri.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(t,e,Ri)))}_computeIntersections(t,e,n){let s;const a=this.geometry,r=this.material,o=a.index,l=a.attributes.position,c=a.attributes.uv,h=a.attributes.uv1,u=a.attributes.normal,d=a.groups,p=a.drawRange;if(o!==null)if(Array.isArray(r))for(let g=0,_=d.length;g<_;g++){const m=d[g],f=r[m.materialIndex],S=Math.max(m.start,p.start),w=Math.min(o.count,Math.min(m.start+m.count,p.start+p.count));for(let y=S,E=w;y<E;y+=3){const R=o.getX(y),T=o.getX(y+1),D=o.getX(y+2);s=Ta(this,f,t,n,c,h,u,R,T,D),s&&(s.faceIndex=Math.floor(y/3),s.face.materialIndex=m.materialIndex,e.push(s))}}else{const g=Math.max(0,p.start),_=Math.min(o.count,p.start+p.count);for(let m=g,f=_;m<f;m+=3){const S=o.getX(m),w=o.getX(m+1),y=o.getX(m+2);s=Ta(this,r,t,n,c,h,u,S,w,y),s&&(s.faceIndex=Math.floor(m/3),e.push(s))}}else if(l!==void 0)if(Array.isArray(r))for(let g=0,_=d.length;g<_;g++){const m=d[g],f=r[m.materialIndex],S=Math.max(m.start,p.start),w=Math.min(l.count,Math.min(m.start+m.count,p.start+p.count));for(let y=S,E=w;y<E;y+=3){const R=y,T=y+1,D=y+2;s=Ta(this,f,t,n,c,h,u,R,T,D),s&&(s.faceIndex=Math.floor(y/3),s.face.materialIndex=m.materialIndex,e.push(s))}}else{const g=Math.max(0,p.start),_=Math.min(l.count,p.start+p.count);for(let m=g,f=_;m<f;m+=3){const S=m,w=m+1,y=m+2;s=Ta(this,r,t,n,c,h,u,S,w,y),s&&(s.faceIndex=Math.floor(m/3),e.push(s))}}}}function Od(i,t,e,n,s,a,r,o){let l;if(t.side===an?l=n.intersectTriangle(r,a,s,!0,o):l=n.intersectTriangle(s,a,r,t.side===wi,o),l===null)return null;Ea.copy(o),Ea.applyMatrix4(i.matrixWorld);const c=e.ray.origin.distanceTo(Ea);return c<e.near||c>e.far?null:{distance:c,point:Ea.clone(),object:i}}function Ta(i,t,e,n,s,a,r,o,l,c){i.getVertexPosition(o,ya),i.getVertexPosition(l,Sa),i.getVertexPosition(c,wa);const h=Od(i,t,e,n,ya,Sa,wa,pc);if(h){const u=new F;yn.getBarycoord(pc,ya,Sa,wa,u),s&&(h.uv=yn.getInterpolatedAttribute(s,o,l,c,u,new ut)),a&&(h.uv1=yn.getInterpolatedAttribute(a,o,l,c,u,new ut)),r&&(h.normal=yn.getInterpolatedAttribute(r,o,l,c,u,new F),h.normal.dot(n.direction)>0&&h.normal.multiplyScalar(-1));const d={a:o,b:l,c,normal:new F,materialIndex:0};yn.getNormal(ya,Sa,wa,d.normal),h.face=d,h.barycoord=u}return h}class fe extends rn{constructor(t=1,e=1,n=1,s=1,a=1,r=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:n,widthSegments:s,heightSegments:a,depthSegments:r};const o=this;s=Math.floor(s),a=Math.floor(a),r=Math.floor(r);const l=[],c=[],h=[],u=[];let d=0,p=0;g("z","y","x",-1,-1,n,e,t,r,a,0),g("z","y","x",1,-1,n,e,-t,r,a,1),g("x","z","y",1,1,t,n,e,s,r,2),g("x","z","y",1,-1,t,n,-e,s,r,3),g("x","y","z",1,-1,t,e,n,s,a,4),g("x","y","z",-1,-1,t,e,-n,s,a,5),this.setIndex(l),this.setAttribute("position",new Ne(c,3)),this.setAttribute("normal",new Ne(h,3)),this.setAttribute("uv",new Ne(u,2));function g(_,m,f,S,w,y,E,R,T,D,x){const M=y/T,A=E/D,I=y/2,L=E/2,B=R/2,O=T+1,G=D+1;let z=0,Z=0;const lt=new F;for(let et=0;et<G;et++){const rt=et*A-L;for(let Ht=0;Ht<O;Ht++){const kt=Ht*M-I;lt[_]=kt*S,lt[m]=rt*w,lt[f]=B,c.push(lt.x,lt.y,lt.z),lt[_]=0,lt[m]=0,lt[f]=R>0?1:-1,h.push(lt.x,lt.y,lt.z),u.push(Ht/T),u.push(1-et/D),z+=1}}for(let et=0;et<D;et++)for(let rt=0;rt<T;rt++){const Ht=d+rt+O*et,kt=d+rt+O*(et+1),ae=d+(rt+1)+O*(et+1),ee=d+(rt+1)+O*et;l.push(Ht,kt,ee),l.push(kt,ae,ee),Z+=6}o.addGroup(p,Z,x),p+=Z,d+=z}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new fe(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}}function Ss(i){const t={};for(const e in i){t[e]={};for(const n in i[e]){const s=i[e][n];s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)?s.isRenderTargetTexture?(Ft("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][n]=null):t[e][n]=s.clone():Array.isArray(s)?t[e][n]=s.slice():t[e][n]=s}}return t}function je(i){const t={};for(let e=0;e<i.length;e++){const n=Ss(i[e]);for(const s in n)t[s]=n[s]}return t}function Bd(i){const t=[];for(let e=0;e<i.length;e++)t.push(i[e].clone());return t}function Ih(i){const t=i.getRenderTarget();return t===null?i.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:te.workingColorSpace}const kd={clone:Ss,merge:je};var zd=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Hd=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class En extends bi{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=zd,this.fragmentShader=Hd,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=Ss(t.uniforms),this.uniformsGroups=Bd(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this.defaultAttributeValues=Object.assign({},t.defaultAttributeValues),this.index0AttributeName=t.index0AttributeName,this.uniformsNeedUpdate=t.uniformsNeedUpdate,this}toJSON(t){const e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(const s in this.uniforms){const r=this.uniforms[s].value;r&&r.isTexture?e.uniforms[s]={type:"t",value:r.toJSON(t).uuid}:r&&r.isColor?e.uniforms[s]={type:"c",value:r.getHex()}:r&&r.isVector2?e.uniforms[s]={type:"v2",value:r.toArray()}:r&&r.isVector3?e.uniforms[s]={type:"v3",value:r.toArray()}:r&&r.isVector4?e.uniforms[s]={type:"v4",value:r.toArray()}:r&&r.isMatrix3?e.uniforms[s]={type:"m3",value:r.toArray()}:r&&r.isMatrix4?e.uniforms[s]={type:"m4",value:r.toArray()}:e.uniforms[s]={value:r}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;const n={};for(const s in this.extensions)this.extensions[s]===!0&&(n[s]=!0);return Object.keys(n).length>0&&(e.extensions=n),e}}class Lh extends Oe{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new jt,this.projectionMatrix=new jt,this.projectionMatrixInverse=new jt,this.coordinateSystem=Hn,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(t,e){super.updateWorldMatrix(t,e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const gi=new F,mc=new ut,gc=new ut;class Mn extends Lh{constructor(t=50,e=1,n=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=n,this.far=s,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){const e=.5*this.getFilmHeight()/t;this.fov=ta*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){const t=Math.tan(qs*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return ta*2*Math.atan(Math.tan(qs*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,n){gi.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),e.set(gi.x,gi.y).multiplyScalar(-t/gi.z),gi.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(gi.x,gi.y).multiplyScalar(-t/gi.z)}getViewSize(t,e){return this.getViewBounds(t,mc,gc),e.subVectors(gc,mc)}setViewOffset(t,e,n,s,a,r){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=s,this.view.width=a,this.view.height=r,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=this.near;let e=t*Math.tan(qs*.5*this.fov)/this.zoom,n=2*e,s=this.aspect*n,a=-.5*s;const r=this.view;if(this.view!==null&&this.view.enabled){const l=r.fullWidth,c=r.fullHeight;a+=r.offsetX*s/l,e-=r.offsetY*n/c,s*=r.width/l,n*=r.height/c}const o=this.filmOffset;o!==0&&(a+=t*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(a,a+s,e,e-n,t,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}}const is=-90,ss=1;class Gd extends Oe{constructor(t,e,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;const s=new Mn(is,ss,t,e);s.layers=this.layers,this.add(s);const a=new Mn(is,ss,t,e);a.layers=this.layers,this.add(a);const r=new Mn(is,ss,t,e);r.layers=this.layers,this.add(r);const o=new Mn(is,ss,t,e);o.layers=this.layers,this.add(o);const l=new Mn(is,ss,t,e);l.layers=this.layers,this.add(l);const c=new Mn(is,ss,t,e);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const t=this.coordinateSystem,e=this.children.concat(),[n,s,a,r,o,l]=e;for(const c of e)this.remove(c);if(t===Hn)n.up.set(0,1,0),n.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),a.up.set(0,0,-1),a.lookAt(0,1,0),r.up.set(0,0,1),r.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(t===Ka)n.up.set(0,-1,0),n.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),a.up.set(0,0,1),a.lookAt(0,1,0),r.up.set(0,0,-1),r.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(const c of e)this.add(c),c.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();const{renderTarget:n,activeMipmapLevel:s}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());const[a,r,o,l,c,h]=this.children,u=t.getRenderTarget(),d=t.getActiveCubeFace(),p=t.getActiveMipmapLevel(),g=t.xr.enabled;t.xr.enabled=!1;const _=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,t.setRenderTarget(n,0,s),t.render(e,a),t.setRenderTarget(n,1,s),t.render(e,r),t.setRenderTarget(n,2,s),t.render(e,o),t.setRenderTarget(n,3,s),t.render(e,l),t.setRenderTarget(n,4,s),t.render(e,c),n.texture.generateMipmaps=_,t.setRenderTarget(n,5,s),t.render(e,h),t.setRenderTarget(u,d,p),t.xr.enabled=g,n.texture.needsPMREMUpdate=!0}}class Dh extends Ze{constructor(t=[],e=Hi,n,s,a,r,o,l,c,h){super(t,e,n,s,a,r,o,l,c,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}}class Fh extends Yn{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;const n={width:t,height:t,depth:1},s=[n,n,n,n,n,n];this.texture=new Dh(s),this._setTextureOptions(e),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},s=new fe(5,5,5),a=new En({name:"CubemapFromEquirect",uniforms:Ss(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:an,blending:ai});a.uniforms.tEquirect.value=e;const r=new nt(s,a),o=e.minFilter;return e.minFilter===ki&&(e.minFilter=Ge),new Gd(1,10,this).update(t,r),e.minFilter=o,r.geometry.dispose(),r.material.dispose(),this}clear(t,e=!0,n=!0,s=!0){const a=t.getRenderTarget();for(let r=0;r<6;r++)t.setRenderTarget(this,r),t.clear(e,n,s);t.setRenderTarget(a)}}class De extends Oe{constructor(){super(),this.isGroup=!0,this.type="Group"}}const Vd={type:"move"};class zr{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new De,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new De,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new F,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new F),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new De,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new F,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new F),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){const e=this._hand;if(e)for(const n of t.hand.values())this._getHandJoint(e,n)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,n){let s=null,a=null,r=null;const o=this._targetRay,l=this._grip,c=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(c&&t.hand){r=!0;for(const _ of t.hand.values()){const m=e.getJointPose(_,n),f=this._getHandJoint(c,_);m!==null&&(f.matrix.fromArray(m.transform.matrix),f.matrix.decompose(f.position,f.rotation,f.scale),f.matrixWorldNeedsUpdate=!0,f.jointRadius=m.radius),f.visible=m!==null}const h=c.joints["index-finger-tip"],u=c.joints["thumb-tip"],d=h.position.distanceTo(u.position),p=.02,g=.005;c.inputState.pinching&&d>p+g?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!c.inputState.pinching&&d<=p-g&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else l!==null&&t.gripSpace&&(a=e.getPose(t.gripSpace,n),a!==null&&(l.matrix.fromArray(a.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,a.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(a.linearVelocity)):l.hasLinearVelocity=!1,a.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(a.angularVelocity)):l.hasAngularVelocity=!1));o!==null&&(s=e.getPose(t.targetRaySpace,n),s===null&&a!==null&&(s=a),s!==null&&(o.matrix.fromArray(s.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,s.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(s.linearVelocity)):o.hasLinearVelocity=!1,s.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(s.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(Vd)))}return o!==null&&(o.visible=s!==null),l!==null&&(l.visible=a!==null),c!==null&&(c.visible=r!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){const n=new De;n.matrixAutoUpdate=!1,n.visible=!1,t.joints[e.jointName]=n,t.add(n)}return t.joints[e.jointName]}}class Wd extends Oe{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Be,this.environmentIntensity=1,this.environmentRotation=new Be,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){const e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(e.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(e.object.backgroundIntensity=this.backgroundIntensity),e.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(e.object.environmentIntensity=this.environmentIntensity),e.object.environmentRotation=this.environmentRotation.toArray(),e}}class Xd{constructor(t,e){this.isInterleavedBuffer=!0,this.array=t,this.stride=e,this.count=t!==void 0?t.length/e:0,this.usage=tl,this.updateRanges=[],this.version=0,this.uuid=Xn()}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.array=new t.array.constructor(t.array),this.count=t.count,this.stride=t.stride,this.usage=t.usage,this}copyAt(t,e,n){t*=this.stride,n*=e.stride;for(let s=0,a=this.stride;s<a;s++)this.array[t+s]=e.array[n+s];return this}set(t,e=0){return this.array.set(t,e),this}clone(t){t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Xn()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);const e=new this.array.constructor(t.arrayBuffers[this.array.buffer._uuid]),n=new this.constructor(e,this.stride);return n.setUsage(this.usage),n}onUpload(t){return this.onUploadCallback=t,this}toJSON(t){return t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Xn()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}}const Je=new F;class Qa{constructor(t,e,n,s=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=t,this.itemSize=e,this.offset=n,this.normalized=s}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(t){this.data.needsUpdate=t}applyMatrix4(t){for(let e=0,n=this.data.count;e<n;e++)Je.fromBufferAttribute(this,e),Je.applyMatrix4(t),this.setXYZ(e,Je.x,Je.y,Je.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)Je.fromBufferAttribute(this,e),Je.applyNormalMatrix(t),this.setXYZ(e,Je.x,Je.y,Je.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)Je.fromBufferAttribute(this,e),Je.transformDirection(t),this.setXYZ(e,Je.x,Je.y,Je.z);return this}getComponent(t,e){let n=this.array[t*this.data.stride+this.offset+e];return this.normalized&&(n=In(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=de(n,this.array)),this.data.array[t*this.data.stride+this.offset+e]=n,this}setX(t,e){return this.normalized&&(e=de(e,this.array)),this.data.array[t*this.data.stride+this.offset]=e,this}setY(t,e){return this.normalized&&(e=de(e,this.array)),this.data.array[t*this.data.stride+this.offset+1]=e,this}setZ(t,e){return this.normalized&&(e=de(e,this.array)),this.data.array[t*this.data.stride+this.offset+2]=e,this}setW(t,e){return this.normalized&&(e=de(e,this.array)),this.data.array[t*this.data.stride+this.offset+3]=e,this}getX(t){let e=this.data.array[t*this.data.stride+this.offset];return this.normalized&&(e=In(e,this.array)),e}getY(t){let e=this.data.array[t*this.data.stride+this.offset+1];return this.normalized&&(e=In(e,this.array)),e}getZ(t){let e=this.data.array[t*this.data.stride+this.offset+2];return this.normalized&&(e=In(e,this.array)),e}getW(t){let e=this.data.array[t*this.data.stride+this.offset+3];return this.normalized&&(e=In(e,this.array)),e}setXY(t,e,n){return t=t*this.data.stride+this.offset,this.normalized&&(e=de(e,this.array),n=de(n,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=n,this}setXYZ(t,e,n,s){return t=t*this.data.stride+this.offset,this.normalized&&(e=de(e,this.array),n=de(n,this.array),s=de(s,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=n,this.data.array[t+2]=s,this}setXYZW(t,e,n,s,a){return t=t*this.data.stride+this.offset,this.normalized&&(e=de(e,this.array),n=de(n,this.array),s=de(s,this.array),a=de(a,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=n,this.data.array[t+2]=s,this.data.array[t+3]=a,this}clone(t){if(t===void 0){ja("InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");const e=[];for(let n=0;n<this.count;n++){const s=n*this.data.stride+this.offset;for(let a=0;a<this.itemSize;a++)e.push(this.data.array[s+a])}return new wn(new this.array.constructor(e),this.itemSize,this.normalized)}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.clone(t)),new Qa(t.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(t){if(t===void 0){ja("InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");const e=[];for(let n=0;n<this.count;n++){const s=n*this.data.stride+this.offset;for(let a=0;a<this.itemSize;a++)e.push(this.data.array[s+a])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:e,normalized:this.normalized}}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.toJSON(t)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}}class tr extends bi{constructor(t){super(),this.isSpriteMaterial=!0,this.type="SpriteMaterial",this.color=new Ut(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.rotation=t.rotation,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}}let as;const Ds=new F,rs=new F,os=new F,ls=new ut,Fs=new ut,Nh=new jt,Ca=new F,Ns=new F,Aa=new F,xc=new ut,Hr=new ut,_c=new ut;class el extends Oe{constructor(t=new tr){if(super(),this.isSprite=!0,this.type="Sprite",as===void 0){as=new rn;const e=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),n=new Xd(e,5);as.setIndex([0,1,2,0,2,3]),as.setAttribute("position",new Qa(n,3,0,!1)),as.setAttribute("uv",new Qa(n,2,3,!1))}this.geometry=as,this.material=t,this.center=new ut(.5,.5),this.count=1}raycast(t,e){t.camera===null&&Qt('Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),rs.setFromMatrixScale(this.matrixWorld),Nh.copy(t.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(t.camera.matrixWorldInverse,this.matrixWorld),os.setFromMatrixPosition(this.modelViewMatrix),t.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&rs.multiplyScalar(-os.z);const n=this.material.rotation;let s,a;n!==0&&(a=Math.cos(n),s=Math.sin(n));const r=this.center;Ra(Ca.set(-.5,-.5,0),os,r,rs,s,a),Ra(Ns.set(.5,-.5,0),os,r,rs,s,a),Ra(Aa.set(.5,.5,0),os,r,rs,s,a),xc.set(0,0),Hr.set(1,0),_c.set(1,1);let o=t.ray.intersectTriangle(Ca,Ns,Aa,!1,Ds);if(o===null&&(Ra(Ns.set(-.5,.5,0),os,r,rs,s,a),Hr.set(0,1),o=t.ray.intersectTriangle(Ca,Aa,Ns,!1,Ds),o===null))return;const l=t.ray.origin.distanceTo(Ds);l<t.near||l>t.far||e.push({distance:l,point:Ds.clone(),uv:yn.getInterpolation(Ds,Ca,Ns,Aa,xc,Hr,_c,new ut),face:null,object:this})}copy(t,e){return super.copy(t,e),t.center!==void 0&&this.center.copy(t.center),this.material=t.material,this}}function Ra(i,t,e,n,s,a){ls.subVectors(i,e).addScalar(.5).multiply(n),s!==void 0?(Fs.x=a*ls.x-s*ls.y,Fs.y=s*ls.x+a*ls.y):Fs.copy(ls),i.copy(t),i.x+=Fs.x,i.y+=Fs.y,i.applyMatrix4(Nh)}class Uh extends Ze{constructor(t=null,e=1,n=1,s,a,r,o,l,c=We,h=We,u,d){super(null,r,o,l,c,h,s,a,u,d),this.isDataTexture=!0,this.image={data:t,width:e,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class vc extends wn{constructor(t,e,n,s=1){super(t,e,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=s}copy(t){return super.copy(t),this.meshPerAttribute=t.meshPerAttribute,this}toJSON(){const t=super.toJSON();return t.meshPerAttribute=this.meshPerAttribute,t.isInstancedBufferAttribute=!0,t}}const cs=new jt,Mc=new jt,Pa=[],yc=new Wi,Yd=new jt,Us=new nt,Os=new ra;class Pn extends nt{constructor(t,e,n){super(t,e),this.isInstancedMesh=!0,this.instanceMatrix=new vc(new Float32Array(n*16),16),this.instanceColor=null,this.morphTexture=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let s=0;s<n;s++)this.setMatrixAt(s,Yd)}computeBoundingBox(){const t=this.geometry,e=this.count;this.boundingBox===null&&(this.boundingBox=new Wi),t.boundingBox===null&&t.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<e;n++)this.getMatrixAt(n,cs),yc.copy(t.boundingBox).applyMatrix4(cs),this.boundingBox.union(yc)}computeBoundingSphere(){const t=this.geometry,e=this.count;this.boundingSphere===null&&(this.boundingSphere=new ra),t.boundingSphere===null&&t.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<e;n++)this.getMatrixAt(n,cs),Os.copy(t.boundingSphere).applyMatrix4(cs),this.boundingSphere.union(Os)}copy(t,e){return super.copy(t,e),this.instanceMatrix.copy(t.instanceMatrix),t.morphTexture!==null&&(this.morphTexture=t.morphTexture.clone()),t.instanceColor!==null&&(this.instanceColor=t.instanceColor.clone()),this.count=t.count,t.boundingBox!==null&&(this.boundingBox=t.boundingBox.clone()),t.boundingSphere!==null&&(this.boundingSphere=t.boundingSphere.clone()),this}getColorAt(t,e){e.fromArray(this.instanceColor.array,t*3)}getMatrixAt(t,e){e.fromArray(this.instanceMatrix.array,t*16)}getMorphAt(t,e){const n=e.morphTargetInfluences,s=this.morphTexture.source.data.data,a=n.length+1,r=t*a+1;for(let o=0;o<n.length;o++)n[o]=s[r+o]}raycast(t,e){const n=this.matrixWorld,s=this.count;if(Us.geometry=this.geometry,Us.material=this.material,Us.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Os.copy(this.boundingSphere),Os.applyMatrix4(n),t.ray.intersectsSphere(Os)!==!1))for(let a=0;a<s;a++){this.getMatrixAt(a,cs),Mc.multiplyMatrices(n,cs),Us.matrixWorld=Mc,Us.raycast(t,Pa);for(let r=0,o=Pa.length;r<o;r++){const l=Pa[r];l.instanceId=a,l.object=this,e.push(l)}Pa.length=0}}setColorAt(t,e){this.instanceColor===null&&(this.instanceColor=new vc(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),e.toArray(this.instanceColor.array,t*3)}setMatrixAt(t,e){e.toArray(this.instanceMatrix.array,t*16)}setMorphAt(t,e){const n=e.morphTargetInfluences,s=n.length+1;this.morphTexture===null&&(this.morphTexture=new Uh(new Float32Array(s*this.count),s,this.count,yl,Nn));const a=this.morphTexture.source.data.data;let r=0;for(let c=0;c<n.length;c++)r+=n[c];const o=this.geometry.morphTargetsRelative?1:1-r,l=s*t;a[l]=o,a.set(n,l+1)}updateMorphTargets(){}dispose(){this.dispatchEvent({type:"dispose"}),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null)}}const Gr=new F,qd=new F,Zd=new Yt;class Ui{constructor(t=new F(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,n,s){return this.normal.set(t,e,n),this.constant=s,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,n){const s=Gr.subVectors(n,e).cross(qd.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(s,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){const t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e){const n=t.delta(Gr),s=this.normal.dot(n);if(s===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;const a=-(t.start.dot(this.normal)+this.constant)/s;return a<0||a>1?null:e.copy(t.start).addScaledVector(n,a)}intersectsLine(t){const e=this.distanceToPoint(t.start),n=this.distanceToPoint(t.end);return e<0&&n>0||n<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){const n=e||Zd.getNormalMatrix(t),s=this.coplanarPoint(Gr).applyMatrix4(t),a=this.normal.applyMatrix3(n).normalize();return this.constant=-s.dot(a),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Pi=new ra,$d=new ut(.5,.5),Ia=new F;class Rl{constructor(t=new Ui,e=new Ui,n=new Ui,s=new Ui,a=new Ui,r=new Ui){this.planes=[t,e,n,s,a,r]}set(t,e,n,s,a,r){const o=this.planes;return o[0].copy(t),o[1].copy(e),o[2].copy(n),o[3].copy(s),o[4].copy(a),o[5].copy(r),this}copy(t){const e=this.planes;for(let n=0;n<6;n++)e[n].copy(t.planes[n]);return this}setFromProjectionMatrix(t,e=Hn,n=!1){const s=this.planes,a=t.elements,r=a[0],o=a[1],l=a[2],c=a[3],h=a[4],u=a[5],d=a[6],p=a[7],g=a[8],_=a[9],m=a[10],f=a[11],S=a[12],w=a[13],y=a[14],E=a[15];if(s[0].setComponents(c-r,p-h,f-g,E-S).normalize(),s[1].setComponents(c+r,p+h,f+g,E+S).normalize(),s[2].setComponents(c+o,p+u,f+_,E+w).normalize(),s[3].setComponents(c-o,p-u,f-_,E-w).normalize(),n)s[4].setComponents(l,d,m,y).normalize(),s[5].setComponents(c-l,p-d,f-m,E-y).normalize();else if(s[4].setComponents(c-l,p-d,f-m,E-y).normalize(),e===Hn)s[5].setComponents(c+l,p+d,f+m,E+y).normalize();else if(e===Ka)s[5].setComponents(l,d,m,y).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),Pi.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{const e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),Pi.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(Pi)}intersectsSprite(t){Pi.center.set(0,0,0);const e=$d.distanceTo(t.center);return Pi.radius=.7071067811865476+e,Pi.applyMatrix4(t.matrixWorld),this.intersectsSphere(Pi)}intersectsSphere(t){const e=this.planes,n=t.center,s=-t.radius;for(let a=0;a<6;a++)if(e[a].distanceToPoint(n)<s)return!1;return!0}intersectsBox(t){const e=this.planes;for(let n=0;n<6;n++){const s=e[n];if(Ia.x=s.normal.x>0?t.max.x:t.min.x,Ia.y=s.normal.y>0?t.max.y:t.min.y,Ia.z=s.normal.z>0?t.max.z:t.min.z,s.distanceToPoint(Ia)<0)return!1}return!0}containsPoint(t){const e=this.planes;for(let n=0;n<6;n++)if(e[n].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class Oh extends Ze{constructor(t,e,n,s,a,r,o,l,c){super(t,e,n,s,a,r,o,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}}class ea extends Ze{constructor(t,e,n=qn,s,a,r,o=We,l=We,c,h=ci,u=1){if(h!==ci&&h!==zi)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const d={width:t,height:e,depth:u};super(d,s,a,r,o,l,h,n,c),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.source=new Al(Object.assign({},t.image)),this.compareFunction=t.compareFunction,this}toJSON(t){const e=super.toJSON(t);return this.compareFunction!==null&&(e.compareFunction=this.compareFunction),e}}class Kd extends ea{constructor(t,e=qn,n=Hi,s,a,r=We,o=We,l,c=ci){const h={width:t,height:t,depth:1},u=[h,h,h,h,h,h];super(t,t,e,n,s,a,r,o,l,c),this.image=u,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(t){this.image=t}}class Bh extends Ze{constructor(t=null){super(),this.sourceTexture=t,this.isExternalTexture=!0}copy(t){return super.copy(t),this.sourceTexture=t.sourceTexture,this}}class tn extends rn{constructor(t=1,e=1,n=1,s=32,a=1,r=!1,o=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:t,radiusBottom:e,height:n,radialSegments:s,heightSegments:a,openEnded:r,thetaStart:o,thetaLength:l};const c=this;s=Math.floor(s),a=Math.floor(a);const h=[],u=[],d=[],p=[];let g=0;const _=[],m=n/2;let f=0;S(),r===!1&&(t>0&&w(!0),e>0&&w(!1)),this.setIndex(h),this.setAttribute("position",new Ne(u,3)),this.setAttribute("normal",new Ne(d,3)),this.setAttribute("uv",new Ne(p,2));function S(){const y=new F,E=new F;let R=0;const T=(e-t)/n;for(let D=0;D<=a;D++){const x=[],M=D/a,A=M*(e-t)+t;for(let I=0;I<=s;I++){const L=I/s,B=L*l+o,O=Math.sin(B),G=Math.cos(B);E.x=A*O,E.y=-M*n+m,E.z=A*G,u.push(E.x,E.y,E.z),y.set(O,T,G).normalize(),d.push(y.x,y.y,y.z),p.push(L,1-M),x.push(g++)}_.push(x)}for(let D=0;D<s;D++)for(let x=0;x<a;x++){const M=_[x][D],A=_[x+1][D],I=_[x+1][D+1],L=_[x][D+1];(t>0||x!==0)&&(h.push(M,A,L),R+=3),(e>0||x!==a-1)&&(h.push(A,I,L),R+=3)}c.addGroup(f,R,0),f+=R}function w(y){const E=g,R=new ut,T=new F;let D=0;const x=y===!0?t:e,M=y===!0?1:-1;for(let I=1;I<=s;I++)u.push(0,m*M,0),d.push(0,M,0),p.push(.5,.5),g++;const A=g;for(let I=0;I<=s;I++){const B=I/s*l+o,O=Math.cos(B),G=Math.sin(B);T.x=x*G,T.y=m*M,T.z=x*O,u.push(T.x,T.y,T.z),d.push(0,M,0),R.x=O*.5+.5,R.y=G*.5*M+.5,p.push(R.x,R.y),g++}for(let I=0;I<s;I++){const L=E+I,B=A+I;y===!0?h.push(B,B+1,L):h.push(B+1,B,L),D+=3}c.addGroup(f,D,y===!0?1:2),f+=D}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new tn(t.radiusTop,t.radiusBottom,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}}class $e extends tn{constructor(t=1,e=1,n=32,s=1,a=!1,r=0,o=Math.PI*2){super(0,t,e,n,s,a,r,o),this.type="ConeGeometry",this.parameters={radius:t,height:e,radialSegments:n,heightSegments:s,openEnded:a,thetaStart:r,thetaLength:o}}static fromJSON(t){return new $e(t.radius,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}}class Zn{constructor(){this.type="Curve",this.arcLengthDivisions=200,this.needsUpdate=!1,this.cacheArcLengths=null}getPoint(){Ft("Curve: .getPoint() not implemented.")}getPointAt(t,e){const n=this.getUtoTmapping(t);return this.getPoint(n,e)}getPoints(t=5){const e=[];for(let n=0;n<=t;n++)e.push(this.getPoint(n/t));return e}getSpacedPoints(t=5){const e=[];for(let n=0;n<=t;n++)e.push(this.getPointAt(n/t));return e}getLength(){const t=this.getLengths();return t[t.length-1]}getLengths(t=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===t+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;const e=[];let n,s=this.getPoint(0),a=0;e.push(0);for(let r=1;r<=t;r++)n=this.getPoint(r/t),a+=n.distanceTo(s),e.push(a),s=n;return this.cacheArcLengths=e,e}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(t,e=null){const n=this.getLengths();let s=0;const a=n.length;let r;e?r=e:r=t*n[a-1];let o=0,l=a-1,c;for(;o<=l;)if(s=Math.floor(o+(l-o)/2),c=n[s]-r,c<0)o=s+1;else if(c>0)l=s-1;else{l=s;break}if(s=l,n[s]===r)return s/(a-1);const h=n[s],d=n[s+1]-h,p=(r-h)/d;return(s+p)/(a-1)}getTangent(t,e){let s=t-1e-4,a=t+1e-4;s<0&&(s=0),a>1&&(a=1);const r=this.getPoint(s),o=this.getPoint(a),l=e||(r.isVector2?new ut:new F);return l.copy(o).sub(r).normalize(),l}getTangentAt(t,e){const n=this.getUtoTmapping(t);return this.getTangent(n,e)}computeFrenetFrames(t,e=!1){const n=new F,s=[],a=[],r=[],o=new F,l=new jt;for(let p=0;p<=t;p++){const g=p/t;s[p]=this.getTangentAt(g,new F)}a[0]=new F,r[0]=new F;let c=Number.MAX_VALUE;const h=Math.abs(s[0].x),u=Math.abs(s[0].y),d=Math.abs(s[0].z);h<=c&&(c=h,n.set(1,0,0)),u<=c&&(c=u,n.set(0,1,0)),d<=c&&n.set(0,0,1),o.crossVectors(s[0],n).normalize(),a[0].crossVectors(s[0],o),r[0].crossVectors(s[0],a[0]);for(let p=1;p<=t;p++){if(a[p]=a[p-1].clone(),r[p]=r[p-1].clone(),o.crossVectors(s[p-1],s[p]),o.length()>Number.EPSILON){o.normalize();const g=Math.acos(Kt(s[p-1].dot(s[p]),-1,1));a[p].applyMatrix4(l.makeRotationAxis(o,g))}r[p].crossVectors(s[p],a[p])}if(e===!0){let p=Math.acos(Kt(a[0].dot(a[t]),-1,1));p/=t,s[0].dot(o.crossVectors(a[0],a[t]))>0&&(p=-p);for(let g=1;g<=t;g++)a[g].applyMatrix4(l.makeRotationAxis(s[g],p*g)),r[g].crossVectors(s[g],a[g])}return{tangents:s,normals:a,binormals:r}}clone(){return new this.constructor().copy(this)}copy(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}toJSON(){const t={metadata:{version:4.7,type:"Curve",generator:"Curve.toJSON"}};return t.arcLengthDivisions=this.arcLengthDivisions,t.type=this.type,t}fromJSON(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}}class Pl extends Zn{constructor(t=0,e=0,n=1,s=1,a=0,r=Math.PI*2,o=!1,l=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=t,this.aY=e,this.xRadius=n,this.yRadius=s,this.aStartAngle=a,this.aEndAngle=r,this.aClockwise=o,this.aRotation=l}getPoint(t,e=new ut){const n=e,s=Math.PI*2;let a=this.aEndAngle-this.aStartAngle;const r=Math.abs(a)<Number.EPSILON;for(;a<0;)a+=s;for(;a>s;)a-=s;a<Number.EPSILON&&(r?a=0:a=s),this.aClockwise===!0&&!r&&(a===s?a=-s:a=a-s);const o=this.aStartAngle+t*a;let l=this.aX+this.xRadius*Math.cos(o),c=this.aY+this.yRadius*Math.sin(o);if(this.aRotation!==0){const h=Math.cos(this.aRotation),u=Math.sin(this.aRotation),d=l-this.aX,p=c-this.aY;l=d*h-p*u+this.aX,c=d*u+p*h+this.aY}return n.set(l,c)}copy(t){return super.copy(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}toJSON(){const t=super.toJSON();return t.aX=this.aX,t.aY=this.aY,t.xRadius=this.xRadius,t.yRadius=this.yRadius,t.aStartAngle=this.aStartAngle,t.aEndAngle=this.aEndAngle,t.aClockwise=this.aClockwise,t.aRotation=this.aRotation,t}fromJSON(t){return super.fromJSON(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}}class Jd extends Pl{constructor(t,e,n,s,a,r){super(t,e,n,n,s,a,r),this.isArcCurve=!0,this.type="ArcCurve"}}function Il(){let i=0,t=0,e=0,n=0;function s(a,r,o,l){i=a,t=o,e=-3*a+3*r-2*o-l,n=2*a-2*r+o+l}return{initCatmullRom:function(a,r,o,l,c){s(r,o,c*(o-a),c*(l-r))},initNonuniformCatmullRom:function(a,r,o,l,c,h,u){let d=(r-a)/c-(o-a)/(c+h)+(o-r)/h,p=(o-r)/h-(l-r)/(h+u)+(l-o)/u;d*=h,p*=h,s(r,o,d,p)},calc:function(a){const r=a*a,o=r*a;return i+t*a+e*r+n*o}}}const La=new F,Vr=new Il,Wr=new Il,Xr=new Il;class jd extends Zn{constructor(t=[],e=!1,n="centripetal",s=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=t,this.closed=e,this.curveType=n,this.tension=s}getPoint(t,e=new F){const n=e,s=this.points,a=s.length,r=(a-(this.closed?0:1))*t;let o=Math.floor(r),l=r-o;this.closed?o+=o>0?0:(Math.floor(Math.abs(o)/a)+1)*a:l===0&&o===a-1&&(o=a-2,l=1);let c,h;this.closed||o>0?c=s[(o-1)%a]:(La.subVectors(s[0],s[1]).add(s[0]),c=La);const u=s[o%a],d=s[(o+1)%a];if(this.closed||o+2<a?h=s[(o+2)%a]:(La.subVectors(s[a-1],s[a-2]).add(s[a-1]),h=La),this.curveType==="centripetal"||this.curveType==="chordal"){const p=this.curveType==="chordal"?.5:.25;let g=Math.pow(c.distanceToSquared(u),p),_=Math.pow(u.distanceToSquared(d),p),m=Math.pow(d.distanceToSquared(h),p);_<1e-4&&(_=1),g<1e-4&&(g=_),m<1e-4&&(m=_),Vr.initNonuniformCatmullRom(c.x,u.x,d.x,h.x,g,_,m),Wr.initNonuniformCatmullRom(c.y,u.y,d.y,h.y,g,_,m),Xr.initNonuniformCatmullRom(c.z,u.z,d.z,h.z,g,_,m)}else this.curveType==="catmullrom"&&(Vr.initCatmullRom(c.x,u.x,d.x,h.x,this.tension),Wr.initCatmullRom(c.y,u.y,d.y,h.y,this.tension),Xr.initCatmullRom(c.z,u.z,d.z,h.z,this.tension));return n.set(Vr.calc(l),Wr.calc(l),Xr.calc(l)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const s=t.points[e];this.points.push(s.clone())}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}toJSON(){const t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){const s=this.points[e];t.points.push(s.toArray())}return t.closed=this.closed,t.curveType=this.curveType,t.tension=this.tension,t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const s=t.points[e];this.points.push(new F().fromArray(s))}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}}function Sc(i,t,e,n,s){const a=(n-t)*.5,r=(s-e)*.5,o=i*i,l=i*o;return(2*e-2*n+a+r)*l+(-3*e+3*n-2*a-r)*o+a*i+e}function Qd(i,t){const e=1-i;return e*e*t}function tf(i,t){return 2*(1-i)*i*t}function ef(i,t){return i*i*t}function $s(i,t,e,n){return Qd(i,t)+tf(i,e)+ef(i,n)}function nf(i,t){const e=1-i;return e*e*e*t}function sf(i,t){const e=1-i;return 3*e*e*i*t}function af(i,t){return 3*(1-i)*i*i*t}function rf(i,t){return i*i*i*t}function Ks(i,t,e,n,s){return nf(i,t)+sf(i,e)+af(i,n)+rf(i,s)}class kh extends Zn{constructor(t=new ut,e=new ut,n=new ut,s=new ut){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=t,this.v1=e,this.v2=n,this.v3=s}getPoint(t,e=new ut){const n=e,s=this.v0,a=this.v1,r=this.v2,o=this.v3;return n.set(Ks(t,s.x,a.x,r.x,o.x),Ks(t,s.y,a.y,r.y,o.y)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}}class of extends Zn{constructor(t=new F,e=new F,n=new F,s=new F){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=t,this.v1=e,this.v2=n,this.v3=s}getPoint(t,e=new F){const n=e,s=this.v0,a=this.v1,r=this.v2,o=this.v3;return n.set(Ks(t,s.x,a.x,r.x,o.x),Ks(t,s.y,a.y,r.y,o.y),Ks(t,s.z,a.z,r.z,o.z)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}}class zh extends Zn{constructor(t=new ut,e=new ut){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=t,this.v2=e}getPoint(t,e=new ut){const n=e;return t===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(t).add(this.v1)),n}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new ut){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class lf extends Zn{constructor(t=new F,e=new F){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=t,this.v2=e}getPoint(t,e=new F){const n=e;return t===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(t).add(this.v1)),n}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new F){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class Hh extends Zn{constructor(t=new ut,e=new ut,n=new ut){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=t,this.v1=e,this.v2=n}getPoint(t,e=new ut){const n=e,s=this.v0,a=this.v1,r=this.v2;return n.set($s(t,s.x,a.x,r.x),$s(t,s.y,a.y,r.y)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class cf extends Zn{constructor(t=new F,e=new F,n=new F){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=t,this.v1=e,this.v2=n}getPoint(t,e=new F){const n=e,s=this.v0,a=this.v1,r=this.v2;return n.set($s(t,s.x,a.x,r.x),$s(t,s.y,a.y,r.y),$s(t,s.z,a.z,r.z)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class Gh extends Zn{constructor(t=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=t}getPoint(t,e=new ut){const n=e,s=this.points,a=(s.length-1)*t,r=Math.floor(a),o=a-r,l=s[r===0?r:r-1],c=s[r],h=s[r>s.length-2?s.length-1:r+1],u=s[r>s.length-3?s.length-1:r+2];return n.set(Sc(o,l.x,c.x,h.x,u.x),Sc(o,l.y,c.y,h.y,u.y)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const s=t.points[e];this.points.push(s.clone())}return this}toJSON(){const t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){const s=this.points[e];t.points.push(s.toArray())}return t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const s=t.points[e];this.points.push(new ut().fromArray(s))}return this}}var nl=Object.freeze({__proto__:null,ArcCurve:Jd,CatmullRomCurve3:jd,CubicBezierCurve:kh,CubicBezierCurve3:of,EllipseCurve:Pl,LineCurve:zh,LineCurve3:lf,QuadraticBezierCurve:Hh,QuadraticBezierCurve3:cf,SplineCurve:Gh});class hf extends Zn{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(t){this.curves.push(t)}closePath(){const t=this.curves[0].getPoint(0),e=this.curves[this.curves.length-1].getPoint(1);if(!t.equals(e)){const n=t.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new nl[n](e,t))}return this}getPoint(t,e){const n=t*this.getLength(),s=this.getCurveLengths();let a=0;for(;a<s.length;){if(s[a]>=n){const r=s[a]-n,o=this.curves[a],l=o.getLength(),c=l===0?0:1-r/l;return o.getPointAt(c,e)}a++}return null}getLength(){const t=this.getCurveLengths();return t[t.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;const t=[];let e=0;for(let n=0,s=this.curves.length;n<s;n++)e+=this.curves[n].getLength(),t.push(e);return this.cacheLengths=t,t}getSpacedPoints(t=40){const e=[];for(let n=0;n<=t;n++)e.push(this.getPoint(n/t));return this.autoClose&&e.push(e[0]),e}getPoints(t=12){const e=[];let n;for(let s=0,a=this.curves;s<a.length;s++){const r=a[s],o=r.isEllipseCurve?t*2:r.isLineCurve||r.isLineCurve3?1:r.isSplineCurve?t*r.points.length:t,l=r.getPoints(o);for(let c=0;c<l.length;c++){const h=l[c];n&&n.equals(h)||(e.push(h),n=h)}}return this.autoClose&&e.length>1&&!e[e.length-1].equals(e[0])&&e.push(e[0]),e}copy(t){super.copy(t),this.curves=[];for(let e=0,n=t.curves.length;e<n;e++){const s=t.curves[e];this.curves.push(s.clone())}return this.autoClose=t.autoClose,this}toJSON(){const t=super.toJSON();t.autoClose=this.autoClose,t.curves=[];for(let e=0,n=this.curves.length;e<n;e++){const s=this.curves[e];t.curves.push(s.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.autoClose=t.autoClose,this.curves=[];for(let e=0,n=t.curves.length;e<n;e++){const s=t.curves[e];this.curves.push(new nl[s.type]().fromJSON(s))}return this}}class wc extends hf{constructor(t){super(),this.type="Path",this.currentPoint=new ut,t&&this.setFromPoints(t)}setFromPoints(t){this.moveTo(t[0].x,t[0].y);for(let e=1,n=t.length;e<n;e++)this.lineTo(t[e].x,t[e].y);return this}moveTo(t,e){return this.currentPoint.set(t,e),this}lineTo(t,e){const n=new zh(this.currentPoint.clone(),new ut(t,e));return this.curves.push(n),this.currentPoint.set(t,e),this}quadraticCurveTo(t,e,n,s){const a=new Hh(this.currentPoint.clone(),new ut(t,e),new ut(n,s));return this.curves.push(a),this.currentPoint.set(n,s),this}bezierCurveTo(t,e,n,s,a,r){const o=new kh(this.currentPoint.clone(),new ut(t,e),new ut(n,s),new ut(a,r));return this.curves.push(o),this.currentPoint.set(a,r),this}splineThru(t){const e=[this.currentPoint.clone()].concat(t),n=new Gh(e);return this.curves.push(n),this.currentPoint.copy(t[t.length-1]),this}arc(t,e,n,s,a,r){const o=this.currentPoint.x,l=this.currentPoint.y;return this.absarc(t+o,e+l,n,s,a,r),this}absarc(t,e,n,s,a,r){return this.absellipse(t,e,n,n,s,a,r),this}ellipse(t,e,n,s,a,r,o,l){const c=this.currentPoint.x,h=this.currentPoint.y;return this.absellipse(t+c,e+h,n,s,a,r,o,l),this}absellipse(t,e,n,s,a,r,o,l){const c=new Pl(t,e,n,s,a,r,o,l);if(this.curves.length>0){const u=c.getPoint(0);u.equals(this.currentPoint)||this.lineTo(u.x,u.y)}this.curves.push(c);const h=c.getPoint(1);return this.currentPoint.copy(h),this}copy(t){return super.copy(t),this.currentPoint.copy(t.currentPoint),this}toJSON(){const t=super.toJSON();return t.currentPoint=this.currentPoint.toArray(),t}fromJSON(t){return super.fromJSON(t),this.currentPoint.fromArray(t.currentPoint),this}}class Ll extends wc{constructor(t){super(t),this.uuid=Xn(),this.type="Shape",this.holes=[]}getPointsHoles(t){const e=[];for(let n=0,s=this.holes.length;n<s;n++)e[n]=this.holes[n].getPoints(t);return e}extractPoints(t){return{shape:this.getPoints(t),holes:this.getPointsHoles(t)}}copy(t){super.copy(t),this.holes=[];for(let e=0,n=t.holes.length;e<n;e++){const s=t.holes[e];this.holes.push(s.clone())}return this}toJSON(){const t=super.toJSON();t.uuid=this.uuid,t.holes=[];for(let e=0,n=this.holes.length;e<n;e++){const s=this.holes[e];t.holes.push(s.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.uuid=t.uuid,this.holes=[];for(let e=0,n=t.holes.length;e<n;e++){const s=t.holes[e];this.holes.push(new wc().fromJSON(s))}return this}}function uf(i,t,e=2){const n=t&&t.length,s=n?t[0]*e:i.length;let a=Vh(i,0,s,e,!0);const r=[];if(!a||a.next===a.prev)return r;let o,l,c;if(n&&(a=gf(i,t,a,e)),i.length>80*e){o=i[0],l=i[1];let h=o,u=l;for(let d=e;d<s;d+=e){const p=i[d],g=i[d+1];p<o&&(o=p),g<l&&(l=g),p>h&&(h=p),g>u&&(u=g)}c=Math.max(h-o,u-l),c=c!==0?32767/c:0}return na(a,r,e,o,l,c,0),r}function Vh(i,t,e,n,s){let a;if(s===Cf(i,t,e,n)>0)for(let r=t;r<e;r+=n)a=bc(r/n|0,i[r],i[r+1],a);else for(let r=e-n;r>=t;r-=n)a=bc(r/n|0,i[r],i[r+1],a);return a&&ws(a,a.next)&&(sa(a),a=a.next),a}function Gi(i,t){if(!i)return i;t||(t=i);let e=i,n;do if(n=!1,!e.steiner&&(ws(e,e.next)||_e(e.prev,e,e.next)===0)){if(sa(e),e=t=e.prev,e===e.next)break;n=!0}else e=e.next;while(n||e!==t);return t}function na(i,t,e,n,s,a,r){if(!i)return;!r&&a&&yf(i,n,s,a);let o=i;for(;i.prev!==i.next;){const l=i.prev,c=i.next;if(a?ff(i,n,s,a):df(i)){t.push(l.i,i.i,c.i),sa(i),i=c.next,o=c.next;continue}if(i=c,i===o){r?r===1?(i=pf(Gi(i),t),na(i,t,e,n,s,a,2)):r===2&&mf(i,t,e,n,s,a):na(Gi(i),t,e,n,s,a,1);break}}}function df(i){const t=i.prev,e=i,n=i.next;if(_e(t,e,n)>=0)return!1;const s=t.x,a=e.x,r=n.x,o=t.y,l=e.y,c=n.y,h=Math.min(s,a,r),u=Math.min(o,l,c),d=Math.max(s,a,r),p=Math.max(o,l,c);let g=n.next;for(;g!==t;){if(g.x>=h&&g.x<=d&&g.y>=u&&g.y<=p&&Ws(s,o,a,l,r,c,g.x,g.y)&&_e(g.prev,g,g.next)>=0)return!1;g=g.next}return!0}function ff(i,t,e,n){const s=i.prev,a=i,r=i.next;if(_e(s,a,r)>=0)return!1;const o=s.x,l=a.x,c=r.x,h=s.y,u=a.y,d=r.y,p=Math.min(o,l,c),g=Math.min(h,u,d),_=Math.max(o,l,c),m=Math.max(h,u,d),f=il(p,g,t,e,n),S=il(_,m,t,e,n);let w=i.prevZ,y=i.nextZ;for(;w&&w.z>=f&&y&&y.z<=S;){if(w.x>=p&&w.x<=_&&w.y>=g&&w.y<=m&&w!==s&&w!==r&&Ws(o,h,l,u,c,d,w.x,w.y)&&_e(w.prev,w,w.next)>=0||(w=w.prevZ,y.x>=p&&y.x<=_&&y.y>=g&&y.y<=m&&y!==s&&y!==r&&Ws(o,h,l,u,c,d,y.x,y.y)&&_e(y.prev,y,y.next)>=0))return!1;y=y.nextZ}for(;w&&w.z>=f;){if(w.x>=p&&w.x<=_&&w.y>=g&&w.y<=m&&w!==s&&w!==r&&Ws(o,h,l,u,c,d,w.x,w.y)&&_e(w.prev,w,w.next)>=0)return!1;w=w.prevZ}for(;y&&y.z<=S;){if(y.x>=p&&y.x<=_&&y.y>=g&&y.y<=m&&y!==s&&y!==r&&Ws(o,h,l,u,c,d,y.x,y.y)&&_e(y.prev,y,y.next)>=0)return!1;y=y.nextZ}return!0}function pf(i,t){let e=i;do{const n=e.prev,s=e.next.next;!ws(n,s)&&Xh(n,e,e.next,s)&&ia(n,s)&&ia(s,n)&&(t.push(n.i,e.i,s.i),sa(e),sa(e.next),e=i=s),e=e.next}while(e!==i);return Gi(e)}function mf(i,t,e,n,s,a){let r=i;do{let o=r.next.next;for(;o!==r.prev;){if(r.i!==o.i&&bf(r,o)){let l=Yh(r,o);r=Gi(r,r.next),l=Gi(l,l.next),na(r,t,e,n,s,a,0),na(l,t,e,n,s,a,0);return}o=o.next}r=r.next}while(r!==i)}function gf(i,t,e,n){const s=[];for(let a=0,r=t.length;a<r;a++){const o=t[a]*n,l=a<r-1?t[a+1]*n:i.length,c=Vh(i,o,l,n,!1);c===c.next&&(c.steiner=!0),s.push(wf(c))}s.sort(xf);for(let a=0;a<s.length;a++)e=_f(s[a],e);return e}function xf(i,t){let e=i.x-t.x;if(e===0&&(e=i.y-t.y,e===0)){const n=(i.next.y-i.y)/(i.next.x-i.x),s=(t.next.y-t.y)/(t.next.x-t.x);e=n-s}return e}function _f(i,t){const e=vf(i,t);if(!e)return t;const n=Yh(e,i);return Gi(n,n.next),Gi(e,e.next)}function vf(i,t){let e=t;const n=i.x,s=i.y;let a=-1/0,r;if(ws(i,e))return e;do{if(ws(i,e.next))return e.next;if(s<=e.y&&s>=e.next.y&&e.next.y!==e.y){const u=e.x+(s-e.y)*(e.next.x-e.x)/(e.next.y-e.y);if(u<=n&&u>a&&(a=u,r=e.x<e.next.x?e:e.next,u===n))return r}e=e.next}while(e!==t);if(!r)return null;const o=r,l=r.x,c=r.y;let h=1/0;e=r;do{if(n>=e.x&&e.x>=l&&n!==e.x&&Wh(s<c?n:a,s,l,c,s<c?a:n,s,e.x,e.y)){const u=Math.abs(s-e.y)/(n-e.x);ia(e,i)&&(u<h||u===h&&(e.x>r.x||e.x===r.x&&Mf(r,e)))&&(r=e,h=u)}e=e.next}while(e!==o);return r}function Mf(i,t){return _e(i.prev,i,t.prev)<0&&_e(t.next,i,i.next)<0}function yf(i,t,e,n){let s=i;do s.z===0&&(s.z=il(s.x,s.y,t,e,n)),s.prevZ=s.prev,s.nextZ=s.next,s=s.next;while(s!==i);s.prevZ.nextZ=null,s.prevZ=null,Sf(s)}function Sf(i){let t,e=1;do{let n=i,s;i=null;let a=null;for(t=0;n;){t++;let r=n,o=0;for(let c=0;c<e&&(o++,r=r.nextZ,!!r);c++);let l=e;for(;o>0||l>0&&r;)o!==0&&(l===0||!r||n.z<=r.z)?(s=n,n=n.nextZ,o--):(s=r,r=r.nextZ,l--),a?a.nextZ=s:i=s,s.prevZ=a,a=s;n=r}a.nextZ=null,e*=2}while(t>1);return i}function il(i,t,e,n,s){return i=(i-e)*s|0,t=(t-n)*s|0,i=(i|i<<8)&16711935,i=(i|i<<4)&252645135,i=(i|i<<2)&858993459,i=(i|i<<1)&1431655765,t=(t|t<<8)&16711935,t=(t|t<<4)&252645135,t=(t|t<<2)&858993459,t=(t|t<<1)&1431655765,i|t<<1}function wf(i){let t=i,e=i;do(t.x<e.x||t.x===e.x&&t.y<e.y)&&(e=t),t=t.next;while(t!==i);return e}function Wh(i,t,e,n,s,a,r,o){return(s-r)*(t-o)>=(i-r)*(a-o)&&(i-r)*(n-o)>=(e-r)*(t-o)&&(e-r)*(a-o)>=(s-r)*(n-o)}function Ws(i,t,e,n,s,a,r,o){return!(i===r&&t===o)&&Wh(i,t,e,n,s,a,r,o)}function bf(i,t){return i.next.i!==t.i&&i.prev.i!==t.i&&!Ef(i,t)&&(ia(i,t)&&ia(t,i)&&Tf(i,t)&&(_e(i.prev,i,t.prev)||_e(i,t.prev,t))||ws(i,t)&&_e(i.prev,i,i.next)>0&&_e(t.prev,t,t.next)>0)}function _e(i,t,e){return(t.y-i.y)*(e.x-t.x)-(t.x-i.x)*(e.y-t.y)}function ws(i,t){return i.x===t.x&&i.y===t.y}function Xh(i,t,e,n){const s=Fa(_e(i,t,e)),a=Fa(_e(i,t,n)),r=Fa(_e(e,n,i)),o=Fa(_e(e,n,t));return!!(s!==a&&r!==o||s===0&&Da(i,e,t)||a===0&&Da(i,n,t)||r===0&&Da(e,i,n)||o===0&&Da(e,t,n))}function Da(i,t,e){return t.x<=Math.max(i.x,e.x)&&t.x>=Math.min(i.x,e.x)&&t.y<=Math.max(i.y,e.y)&&t.y>=Math.min(i.y,e.y)}function Fa(i){return i>0?1:i<0?-1:0}function Ef(i,t){let e=i;do{if(e.i!==i.i&&e.next.i!==i.i&&e.i!==t.i&&e.next.i!==t.i&&Xh(e,e.next,i,t))return!0;e=e.next}while(e!==i);return!1}function ia(i,t){return _e(i.prev,i,i.next)<0?_e(i,t,i.next)>=0&&_e(i,i.prev,t)>=0:_e(i,t,i.prev)<0||_e(i,i.next,t)<0}function Tf(i,t){let e=i,n=!1;const s=(i.x+t.x)/2,a=(i.y+t.y)/2;do e.y>a!=e.next.y>a&&e.next.y!==e.y&&s<(e.next.x-e.x)*(a-e.y)/(e.next.y-e.y)+e.x&&(n=!n),e=e.next;while(e!==i);return n}function Yh(i,t){const e=sl(i.i,i.x,i.y),n=sl(t.i,t.x,t.y),s=i.next,a=t.prev;return i.next=t,t.prev=i,e.next=s,s.prev=e,n.next=e,e.prev=n,a.next=n,n.prev=a,n}function bc(i,t,e,n){const s=sl(i,t,e);return n?(s.next=n.next,s.prev=n,n.next.prev=s,n.next=s):(s.prev=s,s.next=s),s}function sa(i){i.next.prev=i.prev,i.prev.next=i.next,i.prevZ&&(i.prevZ.nextZ=i.nextZ),i.nextZ&&(i.nextZ.prevZ=i.prevZ)}function sl(i,t,e){return{i,x:t,y:e,prev:null,next:null,z:0,prevZ:null,nextZ:null,steiner:!1}}function Cf(i,t,e,n){let s=0;for(let a=t,r=e-n;a<e;a+=n)s+=(i[r]-i[a])*(i[a+1]+i[r+1]),r=a;return s}class Af{static triangulate(t,e,n=2){return uf(t,e,n)}}class ms{static area(t){const e=t.length;let n=0;for(let s=e-1,a=0;a<e;s=a++)n+=t[s].x*t[a].y-t[a].x*t[s].y;return n*.5}static isClockWise(t){return ms.area(t)<0}static triangulateShape(t,e){const n=[],s=[],a=[];Ec(t),Tc(n,t);let r=t.length;e.forEach(Ec);for(let l=0;l<e.length;l++)s.push(r),r+=e[l].length,Tc(n,e[l]);const o=Af.triangulate(n,s);for(let l=0;l<o.length;l+=3)a.push(o.slice(l,l+3));return a}}function Ec(i){const t=i.length;t>2&&i[t-1].equals(i[0])&&i.pop()}function Tc(i,t){for(let e=0;e<t.length;e++)i.push(t[e].x),i.push(t[e].y)}class dr extends rn{constructor(t=new Ll([new ut(.5,.5),new ut(-.5,.5),new ut(-.5,-.5),new ut(.5,-.5)]),e={}){super(),this.type="ExtrudeGeometry",this.parameters={shapes:t,options:e},t=Array.isArray(t)?t:[t];const n=this,s=[],a=[];for(let o=0,l=t.length;o<l;o++){const c=t[o];r(c)}this.setAttribute("position",new Ne(s,3)),this.setAttribute("uv",new Ne(a,2)),this.computeVertexNormals();function r(o){const l=[],c=e.curveSegments!==void 0?e.curveSegments:12,h=e.steps!==void 0?e.steps:1,u=e.depth!==void 0?e.depth:1;let d=e.bevelEnabled!==void 0?e.bevelEnabled:!0,p=e.bevelThickness!==void 0?e.bevelThickness:.2,g=e.bevelSize!==void 0?e.bevelSize:p-.1,_=e.bevelOffset!==void 0?e.bevelOffset:0,m=e.bevelSegments!==void 0?e.bevelSegments:3;const f=e.extrudePath,S=e.UVGenerator!==void 0?e.UVGenerator:Rf;let w,y=!1,E,R,T,D;if(f){w=f.getSpacedPoints(h),y=!0,d=!1;const $=f.isCatmullRomCurve3?f.closed:!1;E=f.computeFrenetFrames(h,$),R=new F,T=new F,D=new F}d||(m=0,p=0,g=0,_=0);const x=o.extractPoints(c);let M=x.shape;const A=x.holes;if(!ms.isClockWise(M)){M=M.reverse();for(let $=0,it=A.length;$<it;$++){const J=A[$];ms.isClockWise(J)&&(A[$]=J.reverse())}}function L($){const J=10000000000000001e-36;let st=$[0];for(let P=1;P<=$.length;P++){const bt=P%$.length,xt=$[bt],Dt=xt.x-st.x,ht=xt.y-st.y,C=Dt*Dt+ht*ht,v=Math.max(Math.abs(xt.x),Math.abs(xt.y),Math.abs(st.x),Math.abs(st.y)),U=J*v*v;if(C<=U){$.splice(bt,1),P--;continue}st=xt}}L(M),A.forEach(L);const B=A.length,O=M;for(let $=0;$<B;$++){const it=A[$];M=M.concat(it)}function G($,it,J){return it||Qt("ExtrudeGeometry: vec does not exist"),$.clone().addScaledVector(it,J)}const z=M.length;function Z($,it,J){let st,P,bt;const xt=$.x-it.x,Dt=$.y-it.y,ht=J.x-$.x,C=J.y-$.y,v=xt*xt+Dt*Dt,U=xt*C-Dt*ht;if(Math.abs(U)>Number.EPSILON){const X=Math.sqrt(v),j=Math.sqrt(ht*ht+C*C),Y=it.x-Dt/X,Pt=it.y+xt/X,dt=J.x-C/j,At=J.y+ht/j,zt=((dt-Y)*C-(At-Pt)*ht)/(xt*C-Dt*ht);st=Y+xt*zt-$.x,P=Pt+Dt*zt-$.y;const at=st*st+P*P;if(at<=2)return new ut(st,P);bt=Math.sqrt(at/2)}else{let X=!1;xt>Number.EPSILON?ht>Number.EPSILON&&(X=!0):xt<-Number.EPSILON?ht<-Number.EPSILON&&(X=!0):Math.sign(Dt)===Math.sign(C)&&(X=!0),X?(st=-Dt,P=xt,bt=Math.sqrt(v)):(st=xt,P=Dt,bt=Math.sqrt(v/2))}return new ut(st/bt,P/bt)}const lt=[];for(let $=0,it=O.length,J=it-1,st=$+1;$<it;$++,J++,st++)J===it&&(J=0),st===it&&(st=0),lt[$]=Z(O[$],O[J],O[st]);const et=[];let rt,Ht=lt.concat();for(let $=0,it=B;$<it;$++){const J=A[$];rt=[];for(let st=0,P=J.length,bt=P-1,xt=st+1;st<P;st++,bt++,xt++)bt===P&&(bt=0),xt===P&&(xt=0),rt[st]=Z(J[st],J[bt],J[xt]);et.push(rt),Ht=Ht.concat(rt)}let kt;if(m===0)kt=ms.triangulateShape(O,A);else{const $=[],it=[];for(let J=0;J<m;J++){const st=J/m,P=p*Math.cos(st*Math.PI/2),bt=g*Math.sin(st*Math.PI/2)+_;for(let xt=0,Dt=O.length;xt<Dt;xt++){const ht=G(O[xt],lt[xt],bt);Nt(ht.x,ht.y,-P),st===0&&$.push(ht)}for(let xt=0,Dt=B;xt<Dt;xt++){const ht=A[xt];rt=et[xt];const C=[];for(let v=0,U=ht.length;v<U;v++){const X=G(ht[v],rt[v],bt);Nt(X.x,X.y,-P),st===0&&C.push(X)}st===0&&it.push(C)}}kt=ms.triangulateShape($,it)}const ae=kt.length,ee=g+_;for(let $=0;$<z;$++){const it=d?G(M[$],Ht[$],ee):M[$];y?(T.copy(E.normals[0]).multiplyScalar(it.x),R.copy(E.binormals[0]).multiplyScalar(it.y),D.copy(w[0]).add(T).add(R),Nt(D.x,D.y,D.z)):Nt(it.x,it.y,0)}for(let $=1;$<=h;$++)for(let it=0;it<z;it++){const J=d?G(M[it],Ht[it],ee):M[it];y?(T.copy(E.normals[$]).multiplyScalar(J.x),R.copy(E.binormals[$]).multiplyScalar(J.y),D.copy(w[$]).add(T).add(R),Nt(D.x,D.y,D.z)):Nt(J.x,J.y,u/h*$)}for(let $=m-1;$>=0;$--){const it=$/m,J=p*Math.cos(it*Math.PI/2),st=g*Math.sin(it*Math.PI/2)+_;for(let P=0,bt=O.length;P<bt;P++){const xt=G(O[P],lt[P],st);Nt(xt.x,xt.y,u+J)}for(let P=0,bt=A.length;P<bt;P++){const xt=A[P];rt=et[P];for(let Dt=0,ht=xt.length;Dt<ht;Dt++){const C=G(xt[Dt],rt[Dt],st);y?Nt(C.x,C.y+w[h-1].y,w[h-1].x+J):Nt(C.x,C.y,u+J)}}}q(),tt();function q(){const $=s.length/3;if(d){let it=0,J=z*it;for(let st=0;st<ae;st++){const P=kt[st];St(P[2]+J,P[1]+J,P[0]+J)}it=h+m*2,J=z*it;for(let st=0;st<ae;st++){const P=kt[st];St(P[0]+J,P[1]+J,P[2]+J)}}else{for(let it=0;it<ae;it++){const J=kt[it];St(J[2],J[1],J[0])}for(let it=0;it<ae;it++){const J=kt[it];St(J[0]+z*h,J[1]+z*h,J[2]+z*h)}}n.addGroup($,s.length/3-$,0)}function tt(){const $=s.length/3;let it=0;yt(O,it),it+=O.length;for(let J=0,st=A.length;J<st;J++){const P=A[J];yt(P,it),it+=P.length}n.addGroup($,s.length/3-$,1)}function yt($,it){let J=$.length;for(;--J>=0;){const st=J;let P=J-1;P<0&&(P=$.length-1);for(let bt=0,xt=h+m*2;bt<xt;bt++){const Dt=z*bt,ht=z*(bt+1),C=it+st+Dt,v=it+P+Dt,U=it+P+ht,X=it+st+ht;Jt(C,v,U,X)}}}function Nt($,it,J){l.push($),l.push(it),l.push(J)}function St($,it,J){re($),re(it),re(J);const st=s.length/3,P=S.generateTopUV(n,s,st-3,st-2,st-1);Wt(P[0]),Wt(P[1]),Wt(P[2])}function Jt($,it,J,st){re($),re(it),re(st),re(it),re(J),re(st);const P=s.length/3,bt=S.generateSideWallUV(n,s,P-6,P-3,P-2,P-1);Wt(bt[0]),Wt(bt[1]),Wt(bt[3]),Wt(bt[1]),Wt(bt[2]),Wt(bt[3])}function re($){s.push(l[$*3+0]),s.push(l[$*3+1]),s.push(l[$*3+2])}function Wt($){a.push($.x),a.push($.y)}}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){const t=super.toJSON(),e=this.parameters.shapes,n=this.parameters.options;return Pf(e,n,t)}static fromJSON(t,e){const n=[];for(let a=0,r=t.shapes.length;a<r;a++){const o=e[t.shapes[a]];n.push(o)}const s=t.options.extrudePath;return s!==void 0&&(t.options.extrudePath=new nl[s.type]().fromJSON(s)),new dr(n,t.options)}}const Rf={generateTopUV:function(i,t,e,n,s){const a=t[e*3],r=t[e*3+1],o=t[n*3],l=t[n*3+1],c=t[s*3],h=t[s*3+1];return[new ut(a,r),new ut(o,l),new ut(c,h)]},generateSideWallUV:function(i,t,e,n,s,a){const r=t[e*3],o=t[e*3+1],l=t[e*3+2],c=t[n*3],h=t[n*3+1],u=t[n*3+2],d=t[s*3],p=t[s*3+1],g=t[s*3+2],_=t[a*3],m=t[a*3+1],f=t[a*3+2];return Math.abs(o-h)<Math.abs(r-c)?[new ut(r,1-l),new ut(c,1-u),new ut(d,1-g),new ut(_,1-f)]:[new ut(o,1-l),new ut(h,1-u),new ut(p,1-g),new ut(m,1-f)]}};function Pf(i,t,e){if(e.shapes=[],Array.isArray(i))for(let n=0,s=i.length;n<s;n++){const a=i[n];e.shapes.push(a.uuid)}else e.shapes.push(i.uuid);return e.options=Object.assign({},t),t.extrudePath!==void 0&&(e.options.extrudePath=t.extrudePath.toJSON()),e}class Ts extends rn{constructor(t=1,e=1,n=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:n,heightSegments:s};const a=t/2,r=e/2,o=Math.floor(n),l=Math.floor(s),c=o+1,h=l+1,u=t/o,d=e/l,p=[],g=[],_=[],m=[];for(let f=0;f<h;f++){const S=f*d-r;for(let w=0;w<c;w++){const y=w*u-a;g.push(y,-S,0),_.push(0,0,1),m.push(w/o),m.push(1-f/l)}}for(let f=0;f<l;f++)for(let S=0;S<o;S++){const w=S+c*f,y=S+c*(f+1),E=S+1+c*(f+1),R=S+1+c*f;p.push(w,y,R),p.push(y,E,R)}this.setIndex(p),this.setAttribute("position",new Ne(g,3)),this.setAttribute("normal",new Ne(_,3)),this.setAttribute("uv",new Ne(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Ts(t.width,t.height,t.widthSegments,t.heightSegments)}}class ie extends rn{constructor(t=1,e=32,n=16,s=0,a=Math.PI*2,r=0,o=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:t,widthSegments:e,heightSegments:n,phiStart:s,phiLength:a,thetaStart:r,thetaLength:o},e=Math.max(3,Math.floor(e)),n=Math.max(2,Math.floor(n));const l=Math.min(r+o,Math.PI);let c=0;const h=[],u=new F,d=new F,p=[],g=[],_=[],m=[];for(let f=0;f<=n;f++){const S=[],w=f/n;let y=0;f===0&&r===0?y=.5/e:f===n&&l===Math.PI&&(y=-.5/e);for(let E=0;E<=e;E++){const R=E/e;u.x=-t*Math.cos(s+R*a)*Math.sin(r+w*o),u.y=t*Math.cos(r+w*o),u.z=t*Math.sin(s+R*a)*Math.sin(r+w*o),g.push(u.x,u.y,u.z),d.copy(u).normalize(),_.push(d.x,d.y,d.z),m.push(R+y,1-w),S.push(c++)}h.push(S)}for(let f=0;f<n;f++)for(let S=0;S<e;S++){const w=h[f][S+1],y=h[f][S],E=h[f+1][S],R=h[f+1][S+1];(f!==0||r>0)&&p.push(w,y,R),(f!==n-1||l<Math.PI)&&p.push(y,E,R)}this.setIndex(p),this.setAttribute("position",new Ne(g,3)),this.setAttribute("normal",new Ne(_,3)),this.setAttribute("uv",new Ne(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new ie(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}}class er extends rn{constructor(t=1,e=.4,n=12,s=48,a=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:t,tube:e,radialSegments:n,tubularSegments:s,arc:a},n=Math.floor(n),s=Math.floor(s);const r=[],o=[],l=[],c=[],h=new F,u=new F,d=new F;for(let p=0;p<=n;p++)for(let g=0;g<=s;g++){const _=g/s*a,m=p/n*Math.PI*2;u.x=(t+e*Math.cos(m))*Math.cos(_),u.y=(t+e*Math.cos(m))*Math.sin(_),u.z=e*Math.sin(m),o.push(u.x,u.y,u.z),h.x=t*Math.cos(_),h.y=t*Math.sin(_),d.subVectors(u,h).normalize(),l.push(d.x,d.y,d.z),c.push(g/s),c.push(p/n)}for(let p=1;p<=n;p++)for(let g=1;g<=s;g++){const _=(s+1)*p+g-1,m=(s+1)*(p-1)+g-1,f=(s+1)*(p-1)+g,S=(s+1)*p+g;r.push(_,m,S),r.push(m,f,S)}this.setIndex(r),this.setAttribute("position",new Ne(o,3)),this.setAttribute("normal",new Ne(l,3)),this.setAttribute("uv",new Ne(c,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new er(t.radius,t.tube,t.radialSegments,t.tubularSegments,t.arc)}}class If extends En{constructor(t){super(t),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}}class Yr extends bi{constructor(t){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new Ut(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Ut(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=ur,this.normalScale=new ut(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Be,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.defines={STANDARD:""},this.color.copy(t.color),this.roughness=t.roughness,this.metalness=t.metalness,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.roughnessMap=t.roughnessMap,this.metalnessMap=t.metalnessMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.envMapIntensity=t.envMapIntensity,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}}class Lf extends bi{constructor(t){super(),this.isMeshPhongMaterial=!0,this.type="MeshPhongMaterial",this.color=new Ut(16777215),this.specular=new Ut(1118481),this.shininess=30,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Ut(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=ur,this.normalScale=new ut(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Be,this.combine=cr,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.specular.copy(t.specular),this.shininess=t.shininess,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}}class Gt extends bi{constructor(t){super(),this.isMeshLambertMaterial=!0,this.type="MeshLambertMaterial",this.color=new Ut(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Ut(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=ur,this.normalScale=new ut(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Be,this.combine=cr,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}}class Df extends bi{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Zu,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}}class Ff extends bi{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}}const Cc={enabled:!1,files:{},add:function(i,t){this.enabled!==!1&&(this.files[i]=t)},get:function(i){if(this.enabled!==!1)return this.files[i]},remove:function(i){delete this.files[i]},clear:function(){this.files={}}};class Nf{constructor(t,e,n){const s=this;let a=!1,r=0,o=0,l;const c=[];this.onStart=void 0,this.onLoad=t,this.onProgress=e,this.onError=n,this._abortController=null,this.itemStart=function(h){o++,a===!1&&s.onStart!==void 0&&s.onStart(h,r,o),a=!0},this.itemEnd=function(h){r++,s.onProgress!==void 0&&s.onProgress(h,r,o),r===o&&(a=!1,s.onLoad!==void 0&&s.onLoad())},this.itemError=function(h){s.onError!==void 0&&s.onError(h)},this.resolveURL=function(h){return l?l(h):h},this.setURLModifier=function(h){return l=h,this},this.addHandler=function(h,u){return c.push(h,u),this},this.removeHandler=function(h){const u=c.indexOf(h);return u!==-1&&c.splice(u,2),this},this.getHandler=function(h){for(let u=0,d=c.length;u<d;u+=2){const p=c[u],g=c[u+1];if(p.global&&(p.lastIndex=0),p.test(h))return g}return null},this.abort=function(){return this.abortController.abort(),this._abortController=null,this}}get abortController(){return this._abortController||(this._abortController=new AbortController),this._abortController}}const Uf=new Nf;class Dl{constructor(t){this.manager=t!==void 0?t:Uf,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(t,e){const n=this;return new Promise(function(s,a){n.load(t,s,e,a)})}parse(){}setCrossOrigin(t){return this.crossOrigin=t,this}setWithCredentials(t){return this.withCredentials=t,this}setPath(t){return this.path=t,this}setResourcePath(t){return this.resourcePath=t,this}setRequestHeader(t){return this.requestHeader=t,this}abort(){return this}}Dl.DEFAULT_MATERIAL_NAME="__DEFAULT";const ei={};class Of extends Error{constructor(t,e){super(t),this.response=e}}class Bf extends Dl{constructor(t){super(t),this.mimeType="",this.responseType="",this._abortController=new AbortController}load(t,e,n,s){t===void 0&&(t=""),this.path!==void 0&&(t=this.path+t),t=this.manager.resolveURL(t);const a=Cc.get(`file:${t}`);if(a!==void 0)return this.manager.itemStart(t),setTimeout(()=>{e&&e(a),this.manager.itemEnd(t)},0),a;if(ei[t]!==void 0){ei[t].push({onLoad:e,onProgress:n,onError:s});return}ei[t]=[],ei[t].push({onLoad:e,onProgress:n,onError:s});const r=new Request(t,{headers:new Headers(this.requestHeader),credentials:this.withCredentials?"include":"same-origin",signal:typeof AbortSignal.any=="function"?AbortSignal.any([this._abortController.signal,this.manager.abortController.signal]):this._abortController.signal}),o=this.mimeType,l=this.responseType;fetch(r).then(c=>{if(c.status===200||c.status===0){if(c.status===0&&Ft("FileLoader: HTTP Status 0 received."),typeof ReadableStream>"u"||c.body===void 0||c.body.getReader===void 0)return c;const h=ei[t],u=c.body.getReader(),d=c.headers.get("X-File-Size")||c.headers.get("Content-Length"),p=d?parseInt(d):0,g=p!==0;let _=0;const m=new ReadableStream({start(f){S();function S(){u.read().then(({done:w,value:y})=>{if(w)f.close();else{_+=y.byteLength;const E=new ProgressEvent("progress",{lengthComputable:g,loaded:_,total:p});for(let R=0,T=h.length;R<T;R++){const D=h[R];D.onProgress&&D.onProgress(E)}f.enqueue(y),S()}},w=>{f.error(w)})}}});return new Response(m)}else throw new Of(`fetch for "${c.url}" responded with ${c.status}: ${c.statusText}`,c)}).then(c=>{switch(l){case"arraybuffer":return c.arrayBuffer();case"blob":return c.blob();case"document":return c.text().then(h=>new DOMParser().parseFromString(h,o));case"json":return c.json();default:if(o==="")return c.text();{const u=/charset="?([^;"\s]*)"?/i.exec(o),d=u&&u[1]?u[1].toLowerCase():void 0,p=new TextDecoder(d);return c.arrayBuffer().then(g=>p.decode(g))}}}).then(c=>{Cc.add(`file:${t}`,c);const h=ei[t];delete ei[t];for(let u=0,d=h.length;u<d;u++){const p=h[u];p.onLoad&&p.onLoad(c)}}).catch(c=>{const h=ei[t];if(h===void 0)throw this.manager.itemError(t),c;delete ei[t];for(let u=0,d=h.length;u<d;u++){const p=h[u];p.onError&&p.onError(c)}this.manager.itemError(t)}).finally(()=>{this.manager.itemEnd(t)}),this.manager.itemStart(t)}setResponseType(t){return this.responseType=t,this}setMimeType(t){return this.mimeType=t,this}abort(){return this._abortController.abort(),this._abortController=new AbortController,this}}class qh extends Oe{constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new Ut(t),this.intensity=e}dispose(){this.dispatchEvent({type:"dispose"})}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){const e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,e}}const qr=new jt,Ac=new F,Rc=new F;class kf{constructor(t){this.camera=t,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new ut(512,512),this.mapType=fn,this.map=null,this.mapPass=null,this.matrix=new jt,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Rl,this._frameExtents=new ut(1,1),this._viewportCount=1,this._viewports=[new Ee(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(t){const e=this.camera,n=this.matrix;Ac.setFromMatrixPosition(t.matrixWorld),e.position.copy(Ac),Rc.setFromMatrixPosition(t.target.matrixWorld),e.lookAt(Rc),e.updateMatrixWorld(),qr.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),this._frustum.setFromProjectionMatrix(qr,e.coordinateSystem,e.reversedDepth),e.reversedDepth?n.set(.5,0,0,.5,0,.5,0,.5,0,0,1,0,0,0,0,1):n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(qr)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.intensity=t.intensity,this.bias=t.bias,this.radius=t.radius,this.autoUpdate=t.autoUpdate,this.needsUpdate=t.needsUpdate,this.normalBias=t.normalBias,this.blurSamples=t.blurSamples,this.mapSize.copy(t.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const t={};return this.intensity!==1&&(t.intensity=this.intensity),this.bias!==0&&(t.bias=this.bias),this.normalBias!==0&&(t.normalBias=this.normalBias),this.radius!==1&&(t.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(t.mapSize=this.mapSize.toArray()),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}}class Fl extends Lh{constructor(t=-1,e=1,n=1,s=-1,a=.1,r=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=n,this.bottom=s,this.near=a,this.far=r,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,n,s,a,r){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=s,this.view.width=a,this.view.height=r,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,s=(this.top+this.bottom)/2;let a=n-t,r=n+t,o=s+e,l=s-e;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;a+=c*this.view.offsetX,r=a+c*this.view.width,o-=h*this.view.offsetY,l=o-h*this.view.height}this.projectionMatrix.makeOrthographic(a,r,o,l,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}}class zf extends kf{constructor(){super(new Fl(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class Hf extends qh{constructor(t,e){super(t,e),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Oe.DEFAULT_UP),this.updateMatrix(),this.target=new Oe,this.shadow=new zf}dispose(){super.dispose(),this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}toJSON(t){const e=super.toJSON(t);return e.object.shadow=this.shadow.toJSON(),e.object.target=this.target.uuid,e}}class Gf extends qh{constructor(t,e){super(t,e),this.isAmbientLight=!0,this.type="AmbientLight"}}let Na;class Zh{static getContext(){return Na===void 0&&(Na=new(window.AudioContext||window.webkitAudioContext)),Na}static setContext(t){Na=t}}class Vf extends Dl{constructor(t){super(t)}load(t,e,n,s){const a=this,r=new Bf(this.manager);r.setResponseType("arraybuffer"),r.setPath(this.path),r.setRequestHeader(this.requestHeader),r.setWithCredentials(this.withCredentials),r.load(t,function(l){try{const c=l.slice(0);Zh.getContext().decodeAudioData(c,function(u){e(u)}).catch(o)}catch(c){o(c)}},n,s);function o(l){s?s(l):Qt(l),a.manager.itemError(t)}}}class Wf extends Mn{constructor(t=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=t}}class $h{constructor(t=!0){this.autoStart=t,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=performance.now(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let t=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const e=performance.now();t=(e-this.oldTime)/1e3,this.oldTime=e,this.elapsedTime+=t}return t}}const Ii=new F,Zr=new qe,Xf=new F,Li=new F,Di=new F;class Yf extends Oe{constructor(){super(),this.type="AudioListener",this.context=Zh.getContext(),this.gain=this.context.createGain(),this.gain.connect(this.context.destination),this.filter=null,this.timeDelta=0,this._clock=new $h}getInput(){return this.gain}removeFilter(){return this.filter!==null&&(this.gain.disconnect(this.filter),this.filter.disconnect(this.context.destination),this.gain.connect(this.context.destination),this.filter=null),this}getFilter(){return this.filter}setFilter(t){return this.filter!==null?(this.gain.disconnect(this.filter),this.filter.disconnect(this.context.destination)):this.gain.disconnect(this.context.destination),this.filter=t,this.gain.connect(this.filter),this.filter.connect(this.context.destination),this}getMasterVolume(){return this.gain.gain.value}setMasterVolume(t){return this.gain.gain.setTargetAtTime(t,this.context.currentTime,.01),this}updateMatrixWorld(t){super.updateMatrixWorld(t);const e=this.context.listener;if(this.timeDelta=this._clock.getDelta(),this.matrixWorld.decompose(Ii,Zr,Xf),Li.set(0,0,-1).applyQuaternion(Zr),Di.set(0,1,0).applyQuaternion(Zr),e.positionX){const n=this.context.currentTime+this.timeDelta;e.positionX.linearRampToValueAtTime(Ii.x,n),e.positionY.linearRampToValueAtTime(Ii.y,n),e.positionZ.linearRampToValueAtTime(Ii.z,n),e.forwardX.linearRampToValueAtTime(Li.x,n),e.forwardY.linearRampToValueAtTime(Li.y,n),e.forwardZ.linearRampToValueAtTime(Li.z,n),e.upX.linearRampToValueAtTime(Di.x,n),e.upY.linearRampToValueAtTime(Di.y,n),e.upZ.linearRampToValueAtTime(Di.z,n)}else e.setPosition(Ii.x,Ii.y,Ii.z),e.setOrientation(Li.x,Li.y,Li.z,Di.x,Di.y,Di.z)}}class Pc extends Oe{constructor(t){super(),this.type="Audio",this.listener=t,this.context=t.context,this.gain=this.context.createGain(),this.gain.connect(t.getInput()),this.autoplay=!1,this.buffer=null,this.detune=0,this.loop=!1,this.loopStart=0,this.loopEnd=0,this.offset=0,this.duration=void 0,this.playbackRate=1,this.isPlaying=!1,this.hasPlaybackControl=!0,this.source=null,this.sourceType="empty",this._startedAt=0,this._progress=0,this._connected=!1,this.filters=[]}getOutput(){return this.gain}setNodeSource(t){return this.hasPlaybackControl=!1,this.sourceType="audioNode",this.source=t,this.connect(),this}setMediaElementSource(t){return this.hasPlaybackControl=!1,this.sourceType="mediaNode",this.source=this.context.createMediaElementSource(t),this.connect(),this}setMediaStreamSource(t){return this.hasPlaybackControl=!1,this.sourceType="mediaStreamNode",this.source=this.context.createMediaStreamSource(t),this.connect(),this}setBuffer(t){return this.buffer=t,this.sourceType="buffer",this.autoplay&&this.play(),this}play(t=0){if(this.isPlaying===!0){Ft("Audio: Audio is already playing.");return}if(this.hasPlaybackControl===!1){Ft("Audio: this Audio has no playback control.");return}this._startedAt=this.context.currentTime+t;const e=this.context.createBufferSource();return e.buffer=this.buffer,e.loop=this.loop,e.loopStart=this.loopStart,e.loopEnd=this.loopEnd,e.onended=this.onEnded.bind(this),e.start(this._startedAt,this._progress+this.offset,this.duration),this.isPlaying=!0,this.source=e,this.setDetune(this.detune),this.setPlaybackRate(this.playbackRate),this.connect()}pause(){if(this.hasPlaybackControl===!1){Ft("Audio: this Audio has no playback control.");return}return this.isPlaying===!0&&(this._progress+=Math.max(this.context.currentTime-this._startedAt,0)*this.playbackRate,this.loop===!0&&(this._progress=this._progress%(this.duration||this.buffer.duration)),this.source.stop(),this.source.onended=null,this.isPlaying=!1),this}stop(t=0){if(this.hasPlaybackControl===!1){Ft("Audio: this Audio has no playback control.");return}return this._progress=0,this.source!==null&&(this.source.stop(this.context.currentTime+t),this.source.onended=null),this.isPlaying=!1,this}connect(){if(this.filters.length>0){this.source.connect(this.filters[0]);for(let t=1,e=this.filters.length;t<e;t++)this.filters[t-1].connect(this.filters[t]);this.filters[this.filters.length-1].connect(this.getOutput())}else this.source.connect(this.getOutput());return this._connected=!0,this}disconnect(){if(this._connected!==!1){if(this.filters.length>0){this.source.disconnect(this.filters[0]);for(let t=1,e=this.filters.length;t<e;t++)this.filters[t-1].disconnect(this.filters[t]);this.filters[this.filters.length-1].disconnect(this.getOutput())}else this.source.disconnect(this.getOutput());return this._connected=!1,this}}getFilters(){return this.filters}setFilters(t){return t||(t=[]),this._connected===!0?(this.disconnect(),this.filters=t.slice(),this.connect()):this.filters=t.slice(),this}setDetune(t){return this.detune=t,this.isPlaying===!0&&this.source.detune!==void 0&&this.source.detune.setTargetAtTime(this.detune,this.context.currentTime,.01),this}getDetune(){return this.detune}getFilter(){return this.getFilters()[0]}setFilter(t){return this.setFilters(t?[t]:[])}setPlaybackRate(t){if(this.hasPlaybackControl===!1){Ft("Audio: this Audio has no playback control.");return}return this.playbackRate=t,this.isPlaying===!0&&this.source.playbackRate.setTargetAtTime(this.playbackRate,this.context.currentTime,.01),this}getPlaybackRate(){return this.playbackRate}onEnded(){this.isPlaying=!1,this._progress=0}getLoop(){return this.hasPlaybackControl===!1?(Ft("Audio: this Audio has no playback control."),!1):this.loop}setLoop(t){if(this.hasPlaybackControl===!1){Ft("Audio: this Audio has no playback control.");return}return this.loop=t,this.isPlaying===!0&&(this.source.loop=this.loop),this}setLoopStart(t){return this.loopStart=t,this}setLoopEnd(t){return this.loopEnd=t,this}getVolume(){return this.gain.gain.value}setVolume(t){return this.gain.gain.setTargetAtTime(t,this.context.currentTime,.01),this}copy(t,e){return super.copy(t,e),t.sourceType!=="buffer"?(Ft("Audio: Audio source type cannot be copied."),this):(this.autoplay=t.autoplay,this.buffer=t.buffer,this.detune=t.detune,this.loop=t.loop,this.loopStart=t.loopStart,this.loopEnd=t.loopEnd,this.offset=t.offset,this.duration=t.duration,this.playbackRate=t.playbackRate,this.hasPlaybackControl=t.hasPlaybackControl,this.sourceType=t.sourceType,this.filters=t.filters.slice(),this)}clone(t){return new this.constructor(this.listener).copy(this,t)}}function Ic(i,t,e,n){const s=qf(n);switch(e){case wh:return i*t;case yl:return i*t/s.components*s.byteLength;case Sl:return i*t/s.components*s.byteLength;case Ms:return i*t*2/s.components*s.byteLength;case wl:return i*t*2/s.components*s.byteLength;case bh:return i*t*3/s.components*s.byteLength;case Un:return i*t*4/s.components*s.byteLength;case bl:return i*t*4/s.components*s.byteLength;case Ga:case Va:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*8;case Wa:case Xa:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case wo:case Eo:return Math.max(i,16)*Math.max(t,8)/4;case So:case bo:return Math.max(i,8)*Math.max(t,8)/2;case To:case Co:case Ro:case Po:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*8;case Ao:case Io:case Lo:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case Do:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case Fo:return Math.floor((i+4)/5)*Math.floor((t+3)/4)*16;case No:return Math.floor((i+4)/5)*Math.floor((t+4)/5)*16;case Uo:return Math.floor((i+5)/6)*Math.floor((t+4)/5)*16;case Oo:return Math.floor((i+5)/6)*Math.floor((t+5)/6)*16;case Bo:return Math.floor((i+7)/8)*Math.floor((t+4)/5)*16;case ko:return Math.floor((i+7)/8)*Math.floor((t+5)/6)*16;case zo:return Math.floor((i+7)/8)*Math.floor((t+7)/8)*16;case Ho:return Math.floor((i+9)/10)*Math.floor((t+4)/5)*16;case Go:return Math.floor((i+9)/10)*Math.floor((t+5)/6)*16;case Vo:return Math.floor((i+9)/10)*Math.floor((t+7)/8)*16;case Wo:return Math.floor((i+9)/10)*Math.floor((t+9)/10)*16;case Xo:return Math.floor((i+11)/12)*Math.floor((t+9)/10)*16;case Yo:return Math.floor((i+11)/12)*Math.floor((t+11)/12)*16;case qo:case Zo:case $o:return Math.ceil(i/4)*Math.ceil(t/4)*16;case Ko:case Jo:return Math.ceil(i/4)*Math.ceil(t/4)*8;case jo:case Qo:return Math.ceil(i/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${e} format.`)}function qf(i){switch(i){case fn:case vh:return{byteLength:1,components:1};case Js:case Mh:case li:return{byteLength:2,components:1};case vl:case Ml:return{byteLength:2,components:4};case qn:case _l:case Nn:return{byteLength:4,components:1};case yh:case Sh:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${i}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:xl}}));typeof window<"u"&&(window.__THREE__?Ft("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=xl);function Kh(){let i=null,t=!1,e=null,n=null;function s(a,r){e(a,r),n=i.requestAnimationFrame(s)}return{start:function(){t!==!0&&e!==null&&(n=i.requestAnimationFrame(s),t=!0)},stop:function(){i.cancelAnimationFrame(n),t=!1},setAnimationLoop:function(a){e=a},setContext:function(a){i=a}}}function Zf(i){const t=new WeakMap;function e(o,l){const c=o.array,h=o.usage,u=c.byteLength,d=i.createBuffer();i.bindBuffer(l,d),i.bufferData(l,c,h),o.onUploadCallback();let p;if(c instanceof Float32Array)p=i.FLOAT;else if(typeof Float16Array<"u"&&c instanceof Float16Array)p=i.HALF_FLOAT;else if(c instanceof Uint16Array)o.isFloat16BufferAttribute?p=i.HALF_FLOAT:p=i.UNSIGNED_SHORT;else if(c instanceof Int16Array)p=i.SHORT;else if(c instanceof Uint32Array)p=i.UNSIGNED_INT;else if(c instanceof Int32Array)p=i.INT;else if(c instanceof Int8Array)p=i.BYTE;else if(c instanceof Uint8Array)p=i.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)p=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:d,type:p,bytesPerElement:c.BYTES_PER_ELEMENT,version:o.version,size:u}}function n(o,l,c){const h=l.array,u=l.updateRanges;if(i.bindBuffer(c,o),u.length===0)i.bufferSubData(c,0,h);else{u.sort((p,g)=>p.start-g.start);let d=0;for(let p=1;p<u.length;p++){const g=u[d],_=u[p];_.start<=g.start+g.count+1?g.count=Math.max(g.count,_.start+_.count-g.start):(++d,u[d]=_)}u.length=d+1;for(let p=0,g=u.length;p<g;p++){const _=u[p];i.bufferSubData(c,_.start*h.BYTES_PER_ELEMENT,h,_.start,_.count)}l.clearUpdateRanges()}l.onUploadCallback()}function s(o){return o.isInterleavedBufferAttribute&&(o=o.data),t.get(o)}function a(o){o.isInterleavedBufferAttribute&&(o=o.data);const l=t.get(o);l&&(i.deleteBuffer(l.buffer),t.delete(o))}function r(o,l){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){const h=t.get(o);(!h||h.version<o.version)&&t.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}const c=t.get(o);if(c===void 0)t.set(o,e(o,l));else if(c.version<o.version){if(c.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(c.buffer,o,l),c.version=o.version}}return{get:s,remove:a,update:r}}var $f=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Kf=`#ifdef USE_ALPHAHASH
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
#endif`,Jf=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,jf=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Qf=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,tp=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,ep=`#ifdef USE_AOMAP
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
#endif`,np=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,ip=`#ifdef USE_BATCHING
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
#endif`,sp=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,ap=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,rp=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,op=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,lp=`#ifdef USE_IRIDESCENCE
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
#endif`,cp=`#ifdef USE_BUMPMAP
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
#endif`,hp=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,up=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,dp=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,fp=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,pp=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,mp=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,gp=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,xp=`#if defined( USE_COLOR_ALPHA )
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
#endif`,_p=`#define PI 3.141592653589793
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
} // validated`,vp=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,Mp=`vec3 transformedNormal = objectNormal;
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
#endif`,yp=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Sp=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,wp=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,bp=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Ep="gl_FragColor = linearToOutputTexel( gl_FragColor );",Tp=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,Cp=`#ifdef USE_ENVMAP
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
#endif`,Ap=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,Rp=`#ifdef USE_ENVMAP
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
#endif`,Pp=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Ip=`#ifdef USE_ENVMAP
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
#endif`,Lp=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Dp=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Fp=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Np=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Up=`#ifdef USE_GRADIENTMAP
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
}`,Op=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Bp=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,kp=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,zp=`uniform bool receiveShadow;
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
#endif`,Hp=`#ifdef USE_ENVMAP
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
#endif`,Gp=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Vp=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Wp=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Xp=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Yp=`PhysicalMaterial material;
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
#endif`,qp=`uniform sampler2D dfgLUT;
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
}`,Zp=`
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
#endif`,$p=`#if defined( RE_IndirectDiffuse )
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
#endif`,Kp=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Jp=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,jp=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Qp=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,tm=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,em=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,nm=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,im=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,sm=`#if defined( USE_POINTS_UV )
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
#endif`,am=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,rm=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,om=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,lm=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,cm=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,hm=`#ifdef USE_MORPHTARGETS
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
#endif`,um=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,dm=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,fm=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,pm=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,mm=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,gm=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,xm=`#ifdef USE_NORMALMAP
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
#endif`,_m=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,vm=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Mm=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,ym=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Sm=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,wm=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,bm=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Em=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Tm=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Cm=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Am=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Rm=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Pm=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Im=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Lm=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,Dm=`float getShadowMask() {
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
}`,Fm=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Nm=`#ifdef USE_SKINNING
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
#endif`,Um=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Om=`#ifdef USE_SKINNING
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
#endif`,Bm=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,km=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,zm=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Hm=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,Gm=`#ifdef USE_TRANSMISSION
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
#endif`,Vm=`#ifdef USE_TRANSMISSION
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
#endif`,Wm=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Xm=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Ym=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,qm=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const Zm=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,$m=`uniform sampler2D t2D;
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
}`,Km=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Jm=`#ifdef ENVMAP_TYPE_CUBE
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
}`,jm=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Qm=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,t0=`#include <common>
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
}`,e0=`#if DEPTH_PACKING == 3200
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
}`,n0=`#define DISTANCE
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
}`,i0=`#define DISTANCE
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
}`,s0=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,a0=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,r0=`uniform float scale;
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
}`,o0=`uniform vec3 diffuse;
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
}`,l0=`#include <common>
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
}`,c0=`uniform vec3 diffuse;
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
}`,h0=`#define LAMBERT
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
}`,u0=`#define LAMBERT
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
}`,d0=`#define MATCAP
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
}`,f0=`#define MATCAP
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
}`,p0=`#define NORMAL
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
}`,m0=`#define NORMAL
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
}`,g0=`#define PHONG
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
}`,x0=`#define PHONG
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
}`,_0=`#define STANDARD
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
}`,v0=`#define STANDARD
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
}`,M0=`#define TOON
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
}`,y0=`#define TOON
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
}`,S0=`uniform float size;
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
}`,w0=`uniform vec3 diffuse;
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
}`,b0=`#include <common>
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
}`,E0=`uniform vec3 color;
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
}`,T0=`uniform float rotation;
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
}`,C0=`uniform vec3 diffuse;
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
}`,qt={alphahash_fragment:$f,alphahash_pars_fragment:Kf,alphamap_fragment:Jf,alphamap_pars_fragment:jf,alphatest_fragment:Qf,alphatest_pars_fragment:tp,aomap_fragment:ep,aomap_pars_fragment:np,batching_pars_vertex:ip,batching_vertex:sp,begin_vertex:ap,beginnormal_vertex:rp,bsdfs:op,iridescence_fragment:lp,bumpmap_pars_fragment:cp,clipping_planes_fragment:hp,clipping_planes_pars_fragment:up,clipping_planes_pars_vertex:dp,clipping_planes_vertex:fp,color_fragment:pp,color_pars_fragment:mp,color_pars_vertex:gp,color_vertex:xp,common:_p,cube_uv_reflection_fragment:vp,defaultnormal_vertex:Mp,displacementmap_pars_vertex:yp,displacementmap_vertex:Sp,emissivemap_fragment:wp,emissivemap_pars_fragment:bp,colorspace_fragment:Ep,colorspace_pars_fragment:Tp,envmap_fragment:Cp,envmap_common_pars_fragment:Ap,envmap_pars_fragment:Rp,envmap_pars_vertex:Pp,envmap_physical_pars_fragment:Hp,envmap_vertex:Ip,fog_vertex:Lp,fog_pars_vertex:Dp,fog_fragment:Fp,fog_pars_fragment:Np,gradientmap_pars_fragment:Up,lightmap_pars_fragment:Op,lights_lambert_fragment:Bp,lights_lambert_pars_fragment:kp,lights_pars_begin:zp,lights_toon_fragment:Gp,lights_toon_pars_fragment:Vp,lights_phong_fragment:Wp,lights_phong_pars_fragment:Xp,lights_physical_fragment:Yp,lights_physical_pars_fragment:qp,lights_fragment_begin:Zp,lights_fragment_maps:$p,lights_fragment_end:Kp,logdepthbuf_fragment:Jp,logdepthbuf_pars_fragment:jp,logdepthbuf_pars_vertex:Qp,logdepthbuf_vertex:tm,map_fragment:em,map_pars_fragment:nm,map_particle_fragment:im,map_particle_pars_fragment:sm,metalnessmap_fragment:am,metalnessmap_pars_fragment:rm,morphinstance_vertex:om,morphcolor_vertex:lm,morphnormal_vertex:cm,morphtarget_pars_vertex:hm,morphtarget_vertex:um,normal_fragment_begin:dm,normal_fragment_maps:fm,normal_pars_fragment:pm,normal_pars_vertex:mm,normal_vertex:gm,normalmap_pars_fragment:xm,clearcoat_normal_fragment_begin:_m,clearcoat_normal_fragment_maps:vm,clearcoat_pars_fragment:Mm,iridescence_pars_fragment:ym,opaque_fragment:Sm,packing:wm,premultiplied_alpha_fragment:bm,project_vertex:Em,dithering_fragment:Tm,dithering_pars_fragment:Cm,roughnessmap_fragment:Am,roughnessmap_pars_fragment:Rm,shadowmap_pars_fragment:Pm,shadowmap_pars_vertex:Im,shadowmap_vertex:Lm,shadowmask_pars_fragment:Dm,skinbase_vertex:Fm,skinning_pars_vertex:Nm,skinning_vertex:Um,skinnormal_vertex:Om,specularmap_fragment:Bm,specularmap_pars_fragment:km,tonemapping_fragment:zm,tonemapping_pars_fragment:Hm,transmission_fragment:Gm,transmission_pars_fragment:Vm,uv_pars_fragment:Wm,uv_pars_vertex:Xm,uv_vertex:Ym,worldpos_vertex:qm,background_vert:Zm,background_frag:$m,backgroundCube_vert:Km,backgroundCube_frag:Jm,cube_vert:jm,cube_frag:Qm,depth_vert:t0,depth_frag:e0,distance_vert:n0,distance_frag:i0,equirect_vert:s0,equirect_frag:a0,linedashed_vert:r0,linedashed_frag:o0,meshbasic_vert:l0,meshbasic_frag:c0,meshlambert_vert:h0,meshlambert_frag:u0,meshmatcap_vert:d0,meshmatcap_frag:f0,meshnormal_vert:p0,meshnormal_frag:m0,meshphong_vert:g0,meshphong_frag:x0,meshphysical_vert:_0,meshphysical_frag:v0,meshtoon_vert:M0,meshtoon_frag:y0,points_vert:S0,points_frag:w0,shadow_vert:b0,shadow_frag:E0,sprite_vert:T0,sprite_frag:C0},_t={common:{diffuse:{value:new Ut(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Yt},alphaMap:{value:null},alphaMapTransform:{value:new Yt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Yt}},envmap:{envMap:{value:null},envMapRotation:{value:new Yt},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Yt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Yt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Yt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Yt},normalScale:{value:new ut(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Yt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Yt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Yt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Yt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Ut(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Ut(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Yt},alphaTest:{value:0},uvTransform:{value:new Yt}},sprite:{diffuse:{value:new Ut(16777215)},opacity:{value:1},center:{value:new ut(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Yt},alphaMap:{value:null},alphaMapTransform:{value:new Yt},alphaTest:{value:0}}},zn={basic:{uniforms:je([_t.common,_t.specularmap,_t.envmap,_t.aomap,_t.lightmap,_t.fog]),vertexShader:qt.meshbasic_vert,fragmentShader:qt.meshbasic_frag},lambert:{uniforms:je([_t.common,_t.specularmap,_t.envmap,_t.aomap,_t.lightmap,_t.emissivemap,_t.bumpmap,_t.normalmap,_t.displacementmap,_t.fog,_t.lights,{emissive:{value:new Ut(0)}}]),vertexShader:qt.meshlambert_vert,fragmentShader:qt.meshlambert_frag},phong:{uniforms:je([_t.common,_t.specularmap,_t.envmap,_t.aomap,_t.lightmap,_t.emissivemap,_t.bumpmap,_t.normalmap,_t.displacementmap,_t.fog,_t.lights,{emissive:{value:new Ut(0)},specular:{value:new Ut(1118481)},shininess:{value:30}}]),vertexShader:qt.meshphong_vert,fragmentShader:qt.meshphong_frag},standard:{uniforms:je([_t.common,_t.envmap,_t.aomap,_t.lightmap,_t.emissivemap,_t.bumpmap,_t.normalmap,_t.displacementmap,_t.roughnessmap,_t.metalnessmap,_t.fog,_t.lights,{emissive:{value:new Ut(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:qt.meshphysical_vert,fragmentShader:qt.meshphysical_frag},toon:{uniforms:je([_t.common,_t.aomap,_t.lightmap,_t.emissivemap,_t.bumpmap,_t.normalmap,_t.displacementmap,_t.gradientmap,_t.fog,_t.lights,{emissive:{value:new Ut(0)}}]),vertexShader:qt.meshtoon_vert,fragmentShader:qt.meshtoon_frag},matcap:{uniforms:je([_t.common,_t.bumpmap,_t.normalmap,_t.displacementmap,_t.fog,{matcap:{value:null}}]),vertexShader:qt.meshmatcap_vert,fragmentShader:qt.meshmatcap_frag},points:{uniforms:je([_t.points,_t.fog]),vertexShader:qt.points_vert,fragmentShader:qt.points_frag},dashed:{uniforms:je([_t.common,_t.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:qt.linedashed_vert,fragmentShader:qt.linedashed_frag},depth:{uniforms:je([_t.common,_t.displacementmap]),vertexShader:qt.depth_vert,fragmentShader:qt.depth_frag},normal:{uniforms:je([_t.common,_t.bumpmap,_t.normalmap,_t.displacementmap,{opacity:{value:1}}]),vertexShader:qt.meshnormal_vert,fragmentShader:qt.meshnormal_frag},sprite:{uniforms:je([_t.sprite,_t.fog]),vertexShader:qt.sprite_vert,fragmentShader:qt.sprite_frag},background:{uniforms:{uvTransform:{value:new Yt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:qt.background_vert,fragmentShader:qt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Yt}},vertexShader:qt.backgroundCube_vert,fragmentShader:qt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:qt.cube_vert,fragmentShader:qt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:qt.equirect_vert,fragmentShader:qt.equirect_frag},distance:{uniforms:je([_t.common,_t.displacementmap,{referencePosition:{value:new F},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:qt.distance_vert,fragmentShader:qt.distance_frag},shadow:{uniforms:je([_t.lights,_t.fog,{color:{value:new Ut(0)},opacity:{value:1}}]),vertexShader:qt.shadow_vert,fragmentShader:qt.shadow_frag}};zn.physical={uniforms:je([zn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Yt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Yt},clearcoatNormalScale:{value:new ut(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Yt},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Yt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Yt},sheen:{value:0},sheenColor:{value:new Ut(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Yt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Yt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Yt},transmissionSamplerSize:{value:new ut},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Yt},attenuationDistance:{value:0},attenuationColor:{value:new Ut(0)},specularColor:{value:new Ut(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Yt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Yt},anisotropyVector:{value:new ut},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Yt}}]),vertexShader:qt.meshphysical_vert,fragmentShader:qt.meshphysical_frag};const Ua={r:0,b:0,g:0},Fi=new Be,A0=new jt;function R0(i,t,e,n,s,a,r){const o=new Ut(0);let l=a===!0?0:1,c,h,u=null,d=0,p=null;function g(w){let y=w.isScene===!0?w.background:null;return y&&y.isTexture&&(y=(w.backgroundBlurriness>0?e:t).get(y)),y}function _(w){let y=!1;const E=g(w);E===null?f(o,l):E&&E.isColor&&(f(E,1),y=!0);const R=i.xr.getEnvironmentBlendMode();R==="additive"?n.buffers.color.setClear(0,0,0,1,r):R==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,r),(i.autoClear||y)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))}function m(w,y){const E=g(y);E&&(E.isCubeTexture||E.mapping===hr)?(h===void 0&&(h=new nt(new fe(1,1,1),new En({name:"BackgroundCubeMaterial",uniforms:Ss(zn.backgroundCube.uniforms),vertexShader:zn.backgroundCube.vertexShader,fragmentShader:zn.backgroundCube.fragmentShader,side:an,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(R,T,D){this.matrixWorld.copyPosition(D.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),s.update(h)),Fi.copy(y.backgroundRotation),Fi.x*=-1,Fi.y*=-1,Fi.z*=-1,E.isCubeTexture&&E.isRenderTargetTexture===!1&&(Fi.y*=-1,Fi.z*=-1),h.material.uniforms.envMap.value=E,h.material.uniforms.flipEnvMap.value=E.isCubeTexture&&E.isRenderTargetTexture===!1?-1:1,h.material.uniforms.backgroundBlurriness.value=y.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=y.backgroundIntensity,h.material.uniforms.backgroundRotation.value.setFromMatrix4(A0.makeRotationFromEuler(Fi)),h.material.toneMapped=te.getTransfer(E.colorSpace)!==ue,(u!==E||d!==E.version||p!==i.toneMapping)&&(h.material.needsUpdate=!0,u=E,d=E.version,p=i.toneMapping),h.layers.enableAll(),w.unshift(h,h.geometry,h.material,0,0,null)):E&&E.isTexture&&(c===void 0&&(c=new nt(new Ts(2,2),new En({name:"BackgroundMaterial",uniforms:Ss(zn.background.uniforms),vertexShader:zn.background.vertexShader,fragmentShader:zn.background.fragmentShader,side:wi,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),s.update(c)),c.material.uniforms.t2D.value=E,c.material.uniforms.backgroundIntensity.value=y.backgroundIntensity,c.material.toneMapped=te.getTransfer(E.colorSpace)!==ue,E.matrixAutoUpdate===!0&&E.updateMatrix(),c.material.uniforms.uvTransform.value.copy(E.matrix),(u!==E||d!==E.version||p!==i.toneMapping)&&(c.material.needsUpdate=!0,u=E,d=E.version,p=i.toneMapping),c.layers.enableAll(),w.unshift(c,c.geometry,c.material,0,0,null))}function f(w,y){w.getRGB(Ua,Ih(i)),n.buffers.color.setClear(Ua.r,Ua.g,Ua.b,y,r)}function S(){h!==void 0&&(h.geometry.dispose(),h.material.dispose(),h=void 0),c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0)}return{getClearColor:function(){return o},setClearColor:function(w,y=1){o.set(w),l=y,f(o,l)},getClearAlpha:function(){return l},setClearAlpha:function(w){l=w,f(o,l)},render:_,addToRenderList:m,dispose:S}}function P0(i,t){const e=i.getParameter(i.MAX_VERTEX_ATTRIBS),n={},s=d(null);let a=s,r=!1;function o(M,A,I,L,B){let O=!1;const G=u(L,I,A);a!==G&&(a=G,c(a.object)),O=p(M,L,I,B),O&&g(M,L,I,B),B!==null&&t.update(B,i.ELEMENT_ARRAY_BUFFER),(O||r)&&(r=!1,y(M,A,I,L),B!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,t.get(B).buffer))}function l(){return i.createVertexArray()}function c(M){return i.bindVertexArray(M)}function h(M){return i.deleteVertexArray(M)}function u(M,A,I){const L=I.wireframe===!0;let B=n[M.id];B===void 0&&(B={},n[M.id]=B);let O=B[A.id];O===void 0&&(O={},B[A.id]=O);let G=O[L];return G===void 0&&(G=d(l()),O[L]=G),G}function d(M){const A=[],I=[],L=[];for(let B=0;B<e;B++)A[B]=0,I[B]=0,L[B]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:A,enabledAttributes:I,attributeDivisors:L,object:M,attributes:{},index:null}}function p(M,A,I,L){const B=a.attributes,O=A.attributes;let G=0;const z=I.getAttributes();for(const Z in z)if(z[Z].location>=0){const et=B[Z];let rt=O[Z];if(rt===void 0&&(Z==="instanceMatrix"&&M.instanceMatrix&&(rt=M.instanceMatrix),Z==="instanceColor"&&M.instanceColor&&(rt=M.instanceColor)),et===void 0||et.attribute!==rt||rt&&et.data!==rt.data)return!0;G++}return a.attributesNum!==G||a.index!==L}function g(M,A,I,L){const B={},O=A.attributes;let G=0;const z=I.getAttributes();for(const Z in z)if(z[Z].location>=0){let et=O[Z];et===void 0&&(Z==="instanceMatrix"&&M.instanceMatrix&&(et=M.instanceMatrix),Z==="instanceColor"&&M.instanceColor&&(et=M.instanceColor));const rt={};rt.attribute=et,et&&et.data&&(rt.data=et.data),B[Z]=rt,G++}a.attributes=B,a.attributesNum=G,a.index=L}function _(){const M=a.newAttributes;for(let A=0,I=M.length;A<I;A++)M[A]=0}function m(M){f(M,0)}function f(M,A){const I=a.newAttributes,L=a.enabledAttributes,B=a.attributeDivisors;I[M]=1,L[M]===0&&(i.enableVertexAttribArray(M),L[M]=1),B[M]!==A&&(i.vertexAttribDivisor(M,A),B[M]=A)}function S(){const M=a.newAttributes,A=a.enabledAttributes;for(let I=0,L=A.length;I<L;I++)A[I]!==M[I]&&(i.disableVertexAttribArray(I),A[I]=0)}function w(M,A,I,L,B,O,G){G===!0?i.vertexAttribIPointer(M,A,I,B,O):i.vertexAttribPointer(M,A,I,L,B,O)}function y(M,A,I,L){_();const B=L.attributes,O=I.getAttributes(),G=A.defaultAttributeValues;for(const z in O){const Z=O[z];if(Z.location>=0){let lt=B[z];if(lt===void 0&&(z==="instanceMatrix"&&M.instanceMatrix&&(lt=M.instanceMatrix),z==="instanceColor"&&M.instanceColor&&(lt=M.instanceColor)),lt!==void 0){const et=lt.normalized,rt=lt.itemSize,Ht=t.get(lt);if(Ht===void 0)continue;const kt=Ht.buffer,ae=Ht.type,ee=Ht.bytesPerElement,q=ae===i.INT||ae===i.UNSIGNED_INT||lt.gpuType===_l;if(lt.isInterleavedBufferAttribute){const tt=lt.data,yt=tt.stride,Nt=lt.offset;if(tt.isInstancedInterleavedBuffer){for(let St=0;St<Z.locationSize;St++)f(Z.location+St,tt.meshPerAttribute);M.isInstancedMesh!==!0&&L._maxInstanceCount===void 0&&(L._maxInstanceCount=tt.meshPerAttribute*tt.count)}else for(let St=0;St<Z.locationSize;St++)m(Z.location+St);i.bindBuffer(i.ARRAY_BUFFER,kt);for(let St=0;St<Z.locationSize;St++)w(Z.location+St,rt/Z.locationSize,ae,et,yt*ee,(Nt+rt/Z.locationSize*St)*ee,q)}else{if(lt.isInstancedBufferAttribute){for(let tt=0;tt<Z.locationSize;tt++)f(Z.location+tt,lt.meshPerAttribute);M.isInstancedMesh!==!0&&L._maxInstanceCount===void 0&&(L._maxInstanceCount=lt.meshPerAttribute*lt.count)}else for(let tt=0;tt<Z.locationSize;tt++)m(Z.location+tt);i.bindBuffer(i.ARRAY_BUFFER,kt);for(let tt=0;tt<Z.locationSize;tt++)w(Z.location+tt,rt/Z.locationSize,ae,et,rt*ee,rt/Z.locationSize*tt*ee,q)}}else if(G!==void 0){const et=G[z];if(et!==void 0)switch(et.length){case 2:i.vertexAttrib2fv(Z.location,et);break;case 3:i.vertexAttrib3fv(Z.location,et);break;case 4:i.vertexAttrib4fv(Z.location,et);break;default:i.vertexAttrib1fv(Z.location,et)}}}}S()}function E(){D();for(const M in n){const A=n[M];for(const I in A){const L=A[I];for(const B in L)h(L[B].object),delete L[B];delete A[I]}delete n[M]}}function R(M){if(n[M.id]===void 0)return;const A=n[M.id];for(const I in A){const L=A[I];for(const B in L)h(L[B].object),delete L[B];delete A[I]}delete n[M.id]}function T(M){for(const A in n){const I=n[A];if(I[M.id]===void 0)continue;const L=I[M.id];for(const B in L)h(L[B].object),delete L[B];delete I[M.id]}}function D(){x(),r=!0,a!==s&&(a=s,c(a.object))}function x(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:o,reset:D,resetDefaultState:x,dispose:E,releaseStatesOfGeometry:R,releaseStatesOfProgram:T,initAttributes:_,enableAttribute:m,disableUnusedAttributes:S}}function I0(i,t,e){let n;function s(c){n=c}function a(c,h){i.drawArrays(n,c,h),e.update(h,n,1)}function r(c,h,u){u!==0&&(i.drawArraysInstanced(n,c,h,u),e.update(h,n,u))}function o(c,h,u){if(u===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,c,0,h,0,u);let p=0;for(let g=0;g<u;g++)p+=h[g];e.update(p,n,1)}function l(c,h,u,d){if(u===0)return;const p=t.get("WEBGL_multi_draw");if(p===null)for(let g=0;g<c.length;g++)r(c[g],h[g],d[g]);else{p.multiDrawArraysInstancedWEBGL(n,c,0,h,0,d,0,u);let g=0;for(let _=0;_<u;_++)g+=h[_]*d[_];e.update(g,n,1)}}this.setMode=s,this.render=a,this.renderInstances=r,this.renderMultiDraw=o,this.renderMultiDrawInstances=l}function L0(i,t,e,n){let s;function a(){if(s!==void 0)return s;if(t.has("EXT_texture_filter_anisotropic")===!0){const T=t.get("EXT_texture_filter_anisotropic");s=i.getParameter(T.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function r(T){return!(T!==Un&&n.convert(T)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(T){const D=T===li&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(T!==fn&&n.convert(T)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE)&&T!==Nn&&!D)}function l(T){if(T==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";T="mediump"}return T==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=e.precision!==void 0?e.precision:"highp";const h=l(c);h!==c&&(Ft("WebGLRenderer:",c,"not supported, using",h,"instead."),c=h);const u=e.logarithmicDepthBuffer===!0,d=e.reversedDepthBuffer===!0&&t.has("EXT_clip_control"),p=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),g=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),_=i.getParameter(i.MAX_TEXTURE_SIZE),m=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),f=i.getParameter(i.MAX_VERTEX_ATTRIBS),S=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),w=i.getParameter(i.MAX_VARYING_VECTORS),y=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),E=i.getParameter(i.MAX_SAMPLES),R=i.getParameter(i.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:a,getMaxPrecision:l,textureFormatReadable:r,textureTypeReadable:o,precision:c,logarithmicDepthBuffer:u,reversedDepthBuffer:d,maxTextures:p,maxVertexTextures:g,maxTextureSize:_,maxCubemapSize:m,maxAttributes:f,maxVertexUniforms:S,maxVaryings:w,maxFragmentUniforms:y,maxSamples:E,samples:R}}function D0(i){const t=this;let e=null,n=0,s=!1,a=!1;const r=new Ui,o=new Yt,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(u,d){const p=u.length!==0||d||n!==0||s;return s=d,n=u.length,p},this.beginShadows=function(){a=!0,h(null)},this.endShadows=function(){a=!1},this.setGlobalState=function(u,d){e=h(u,d,0)},this.setState=function(u,d,p){const g=u.clippingPlanes,_=u.clipIntersection,m=u.clipShadows,f=i.get(u);if(!s||g===null||g.length===0||a&&!m)a?h(null):c();else{const S=a?0:n,w=S*4;let y=f.clippingState||null;l.value=y,y=h(g,d,w,p);for(let E=0;E!==w;++E)y[E]=e[E];f.clippingState=y,this.numIntersection=_?this.numPlanes:0,this.numPlanes+=S}};function c(){l.value!==e&&(l.value=e,l.needsUpdate=n>0),t.numPlanes=n,t.numIntersection=0}function h(u,d,p,g){const _=u!==null?u.length:0;let m=null;if(_!==0){if(m=l.value,g!==!0||m===null){const f=p+_*4,S=d.matrixWorldInverse;o.getNormalMatrix(S),(m===null||m.length<f)&&(m=new Float32Array(f));for(let w=0,y=p;w!==_;++w,y+=4)r.copy(u[w]).applyMatrix4(S,o),r.normal.toArray(m,y),m[y+3]=r.constant}l.value=m,l.needsUpdate=!0}return t.numPlanes=_,t.numIntersection=0,m}}function F0(i){let t=new WeakMap;function e(r,o){return o===_o?r.mapping=Hi:o===vo&&(r.mapping=vs),r}function n(r){if(r&&r.isTexture){const o=r.mapping;if(o===_o||o===vo)if(t.has(r)){const l=t.get(r).texture;return e(l,r.mapping)}else{const l=r.image;if(l&&l.height>0){const c=new Fh(l.height);return c.fromEquirectangularTexture(i,r),t.set(r,c),r.addEventListener("dispose",s),e(c.texture,r.mapping)}else return null}}return r}function s(r){const o=r.target;o.removeEventListener("dispose",s);const l=t.get(o);l!==void 0&&(t.delete(o),l.dispose())}function a(){t=new WeakMap}return{get:n,dispose:a}}const yi=4,Lc=[.125,.215,.35,.446,.526,.582],Bi=20,N0=256,Bs=new Fl,Dc=new Ut;let $r=null,Kr=0,Jr=0,jr=!1;const U0=new F;class Fc{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._sigmas=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(t,e=0,n=.1,s=100,a={}){const{size:r=256,position:o=U0}=a;$r=this._renderer.getRenderTarget(),Kr=this._renderer.getActiveCubeFace(),Jr=this._renderer.getActiveMipmapLevel(),jr=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(r);const l=this._allocateTargets();return l.depthBuffer=!0,this._sceneToCubeUV(t,n,s,l,o),e>0&&this._blur(l,0,0,e),this._applyPMREM(l),this._cleanup(l),l}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Oc(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Uc(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodMeshes.length;t++)this._lodMeshes[t].geometry.dispose()}_cleanup(t){this._renderer.setRenderTarget($r,Kr,Jr),this._renderer.xr.enabled=jr,t.scissorTest=!1,hs(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===Hi||t.mapping===vs?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),$r=this._renderer.getRenderTarget(),Kr=this._renderer.getActiveCubeFace(),Jr=this._renderer.getActiveMipmapLevel(),jr=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const n=e||this._allocateTargets();return this._textureToCubeUV(t,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,n={magFilter:Ge,minFilter:Ge,generateMipmaps:!1,type:li,format:Un,colorSpace:ys,depthBuffer:!1},s=Nc(t,e,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Nc(t,e,n);const{_lodMax:a}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods,sigmas:this._sigmas}=O0(a)),this._blurMaterial=k0(a,t,e),this._ggxMaterial=B0(a,t,e)}return s}_compileMaterial(t){const e=new nt(new rn,t);this._renderer.compile(e,Bs)}_sceneToCubeUV(t,e,n,s,a){const l=new Mn(90,1,e,n),c=[1,-1,1,1,1,1],h=[1,1,1,-1,-1,-1],u=this._renderer,d=u.autoClear,p=u.toneMapping;u.getClearColor(Dc),u.toneMapping=Wn,u.autoClear=!1,u.state.buffers.depth.getReversed()&&(u.setRenderTarget(s),u.clearDepth(),u.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new nt(new fe,new Ue({name:"PMREM.Background",side:an,depthWrite:!1,depthTest:!1})));const _=this._backgroundBox,m=_.material;let f=!1;const S=t.background;S?S.isColor&&(m.color.copy(S),t.background=null,f=!0):(m.color.copy(Dc),f=!0);for(let w=0;w<6;w++){const y=w%3;y===0?(l.up.set(0,c[w],0),l.position.set(a.x,a.y,a.z),l.lookAt(a.x+h[w],a.y,a.z)):y===1?(l.up.set(0,0,c[w]),l.position.set(a.x,a.y,a.z),l.lookAt(a.x,a.y+h[w],a.z)):(l.up.set(0,c[w],0),l.position.set(a.x,a.y,a.z),l.lookAt(a.x,a.y,a.z+h[w]));const E=this._cubeSize;hs(s,y*E,w>2?E:0,E,E),u.setRenderTarget(s),f&&u.render(_,l),u.render(t,l)}u.toneMapping=p,u.autoClear=d,t.background=S}_textureToCubeUV(t,e){const n=this._renderer,s=t.mapping===Hi||t.mapping===vs;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=Oc()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Uc());const a=s?this._cubemapMaterial:this._equirectMaterial,r=this._lodMeshes[0];r.material=a;const o=a.uniforms;o.envMap.value=t;const l=this._cubeSize;hs(e,0,0,3*l,2*l),n.setRenderTarget(e),n.render(r,Bs)}_applyPMREM(t){const e=this._renderer,n=e.autoClear;e.autoClear=!1;const s=this._lodMeshes.length;for(let a=1;a<s;a++)this._applyGGXFilter(t,a-1,a);e.autoClear=n}_applyGGXFilter(t,e,n){const s=this._renderer,a=this._pingPongRenderTarget,r=this._ggxMaterial,o=this._lodMeshes[n];o.material=r;const l=r.uniforms,c=n/(this._lodMeshes.length-1),h=e/(this._lodMeshes.length-1),u=Math.sqrt(c*c-h*h),d=0+c*1.25,p=u*d,{_lodMax:g}=this,_=this._sizeLods[n],m=3*_*(n>g-yi?n-g+yi:0),f=4*(this._cubeSize-_);l.envMap.value=t.texture,l.roughness.value=p,l.mipInt.value=g-e,hs(a,m,f,3*_,2*_),s.setRenderTarget(a),s.render(o,Bs),l.envMap.value=a.texture,l.roughness.value=0,l.mipInt.value=g-n,hs(t,m,f,3*_,2*_),s.setRenderTarget(t),s.render(o,Bs)}_blur(t,e,n,s,a){const r=this._pingPongRenderTarget;this._halfBlur(t,r,e,n,s,"latitudinal",a),this._halfBlur(r,t,n,n,s,"longitudinal",a)}_halfBlur(t,e,n,s,a,r,o){const l=this._renderer,c=this._blurMaterial;r!=="latitudinal"&&r!=="longitudinal"&&Qt("blur direction must be either latitudinal or longitudinal!");const h=3,u=this._lodMeshes[s];u.material=c;const d=c.uniforms,p=this._sizeLods[n]-1,g=isFinite(a)?Math.PI/(2*p):2*Math.PI/(2*Bi-1),_=a/g,m=isFinite(a)?1+Math.floor(h*_):Bi;m>Bi&&Ft(`sigmaRadians, ${a}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${Bi}`);const f=[];let S=0;for(let T=0;T<Bi;++T){const D=T/_,x=Math.exp(-D*D/2);f.push(x),T===0?S+=x:T<m&&(S+=2*x)}for(let T=0;T<f.length;T++)f[T]=f[T]/S;d.envMap.value=t.texture,d.samples.value=m,d.weights.value=f,d.latitudinal.value=r==="latitudinal",o&&(d.poleAxis.value=o);const{_lodMax:w}=this;d.dTheta.value=g,d.mipInt.value=w-n;const y=this._sizeLods[s],E=3*y*(s>w-yi?s-w+yi:0),R=4*(this._cubeSize-y);hs(e,E,R,3*y,2*y),l.setRenderTarget(e),l.render(u,Bs)}}function O0(i){const t=[],e=[],n=[];let s=i;const a=i-yi+1+Lc.length;for(let r=0;r<a;r++){const o=Math.pow(2,s);t.push(o);let l=1/o;r>i-yi?l=Lc[r-i+yi-1]:r===0&&(l=0),e.push(l);const c=1/(o-2),h=-c,u=1+c,d=[h,h,u,h,u,u,h,h,u,u,h,u],p=6,g=6,_=3,m=2,f=1,S=new Float32Array(_*g*p),w=new Float32Array(m*g*p),y=new Float32Array(f*g*p);for(let R=0;R<p;R++){const T=R%3*2/3-1,D=R>2?0:-1,x=[T,D,0,T+2/3,D,0,T+2/3,D+1,0,T,D,0,T+2/3,D+1,0,T,D+1,0];S.set(x,_*g*R),w.set(d,m*g*R);const M=[R,R,R,R,R,R];y.set(M,f*g*R)}const E=new rn;E.setAttribute("position",new wn(S,_)),E.setAttribute("uv",new wn(w,m)),E.setAttribute("faceIndex",new wn(y,f)),n.push(new nt(E,null)),s>yi&&s--}return{lodMeshes:n,sizeLods:t,sigmas:e}}function Nc(i,t,e){const n=new Yn(i,t,e);return n.texture.mapping=hr,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function hs(i,t,e,n,s){i.viewport.set(t,e,n,s),i.scissor.set(t,e,n,s)}function B0(i,t,e){return new En({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:N0,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:fr(),fragmentShader:`

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
		`,blending:ai,depthTest:!1,depthWrite:!1})}function k0(i,t,e){const n=new Float32Array(Bi),s=new F(0,1,0);return new En({name:"SphericalGaussianBlur",defines:{n:Bi,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:s}},vertexShader:fr(),fragmentShader:`

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
		`,blending:ai,depthTest:!1,depthWrite:!1})}function Uc(){return new En({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:fr(),fragmentShader:`

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
		`,blending:ai,depthTest:!1,depthWrite:!1})}function Oc(){return new En({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:fr(),fragmentShader:`

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
	`}function z0(i){let t=new WeakMap,e=null;function n(o){if(o&&o.isTexture){const l=o.mapping,c=l===_o||l===vo,h=l===Hi||l===vs;if(c||h){let u=t.get(o);const d=u!==void 0?u.texture.pmremVersion:0;if(o.isRenderTargetTexture&&o.pmremVersion!==d)return e===null&&(e=new Fc(i)),u=c?e.fromEquirectangular(o,u):e.fromCubemap(o,u),u.texture.pmremVersion=o.pmremVersion,t.set(o,u),u.texture;if(u!==void 0)return u.texture;{const p=o.image;return c&&p&&p.height>0||h&&p&&s(p)?(e===null&&(e=new Fc(i)),u=c?e.fromEquirectangular(o):e.fromCubemap(o),u.texture.pmremVersion=o.pmremVersion,t.set(o,u),o.addEventListener("dispose",a),u.texture):null}}}return o}function s(o){let l=0;const c=6;for(let h=0;h<c;h++)o[h]!==void 0&&l++;return l===c}function a(o){const l=o.target;l.removeEventListener("dispose",a);const c=t.get(l);c!==void 0&&(t.delete(l),c.dispose())}function r(){t=new WeakMap,e!==null&&(e.dispose(),e=null)}return{get:n,dispose:r}}function H0(i){const t={};function e(n){if(t[n]!==void 0)return t[n];const s=i.getExtension(n);return t[n]=s,s}return{has:function(n){return e(n)!==null},init:function(){e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance"),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture"),e("WEBGL_render_shared_exponent")},get:function(n){const s=e(n);return s===null&&Qs("WebGLRenderer: "+n+" extension not supported."),s}}}function G0(i,t,e,n){const s={},a=new WeakMap;function r(u){const d=u.target;d.index!==null&&t.remove(d.index);for(const g in d.attributes)t.remove(d.attributes[g]);d.removeEventListener("dispose",r),delete s[d.id];const p=a.get(d);p&&(t.remove(p),a.delete(d)),n.releaseStatesOfGeometry(d),d.isInstancedBufferGeometry===!0&&delete d._maxInstanceCount,e.memory.geometries--}function o(u,d){return s[d.id]===!0||(d.addEventListener("dispose",r),s[d.id]=!0,e.memory.geometries++),d}function l(u){const d=u.attributes;for(const p in d)t.update(d[p],i.ARRAY_BUFFER)}function c(u){const d=[],p=u.index,g=u.attributes.position;let _=0;if(p!==null){const S=p.array;_=p.version;for(let w=0,y=S.length;w<y;w+=3){const E=S[w+0],R=S[w+1],T=S[w+2];d.push(E,R,R,T,T,E)}}else if(g!==void 0){const S=g.array;_=g.version;for(let w=0,y=S.length/3-1;w<y;w+=3){const E=w+0,R=w+1,T=w+2;d.push(E,R,R,T,T,E)}}else return;const m=new(Eh(d)?Ph:Rh)(d,1);m.version=_;const f=a.get(u);f&&t.remove(f),a.set(u,m)}function h(u){const d=a.get(u);if(d){const p=u.index;p!==null&&d.version<p.version&&c(u)}else c(u);return a.get(u)}return{get:o,update:l,getWireframeAttribute:h}}function V0(i,t,e){let n;function s(d){n=d}let a,r;function o(d){a=d.type,r=d.bytesPerElement}function l(d,p){i.drawElements(n,p,a,d*r),e.update(p,n,1)}function c(d,p,g){g!==0&&(i.drawElementsInstanced(n,p,a,d*r,g),e.update(p,n,g))}function h(d,p,g){if(g===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,p,0,a,d,0,g);let m=0;for(let f=0;f<g;f++)m+=p[f];e.update(m,n,1)}function u(d,p,g,_){if(g===0)return;const m=t.get("WEBGL_multi_draw");if(m===null)for(let f=0;f<d.length;f++)c(d[f]/r,p[f],_[f]);else{m.multiDrawElementsInstancedWEBGL(n,p,0,a,d,0,_,0,g);let f=0;for(let S=0;S<g;S++)f+=p[S]*_[S];e.update(f,n,1)}}this.setMode=s,this.setIndex=o,this.render=l,this.renderInstances=c,this.renderMultiDraw=h,this.renderMultiDrawInstances=u}function W0(i){const t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function n(a,r,o){switch(e.calls++,r){case i.TRIANGLES:e.triangles+=o*(a/3);break;case i.LINES:e.lines+=o*(a/2);break;case i.LINE_STRIP:e.lines+=o*(a-1);break;case i.LINE_LOOP:e.lines+=o*a;break;case i.POINTS:e.points+=o*a;break;default:Qt("WebGLInfo: Unknown draw mode:",r);break}}function s(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:s,update:n}}function X0(i,t,e){const n=new WeakMap,s=new Ee;function a(r,o,l){const c=r.morphTargetInfluences,h=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,u=h!==void 0?h.length:0;let d=n.get(o);if(d===void 0||d.count!==u){let M=function(){D.dispose(),n.delete(o),o.removeEventListener("dispose",M)};var p=M;d!==void 0&&d.texture.dispose();const g=o.morphAttributes.position!==void 0,_=o.morphAttributes.normal!==void 0,m=o.morphAttributes.color!==void 0,f=o.morphAttributes.position||[],S=o.morphAttributes.normal||[],w=o.morphAttributes.color||[];let y=0;g===!0&&(y=1),_===!0&&(y=2),m===!0&&(y=3);let E=o.attributes.position.count*y,R=1;E>t.maxTextureSize&&(R=Math.ceil(E/t.maxTextureSize),E=t.maxTextureSize);const T=new Float32Array(E*R*4*u),D=new Th(T,E,R,u);D.type=Nn,D.needsUpdate=!0;const x=y*4;for(let A=0;A<u;A++){const I=f[A],L=S[A],B=w[A],O=E*R*4*A;for(let G=0;G<I.count;G++){const z=G*x;g===!0&&(s.fromBufferAttribute(I,G),T[O+z+0]=s.x,T[O+z+1]=s.y,T[O+z+2]=s.z,T[O+z+3]=0),_===!0&&(s.fromBufferAttribute(L,G),T[O+z+4]=s.x,T[O+z+5]=s.y,T[O+z+6]=s.z,T[O+z+7]=0),m===!0&&(s.fromBufferAttribute(B,G),T[O+z+8]=s.x,T[O+z+9]=s.y,T[O+z+10]=s.z,T[O+z+11]=B.itemSize===4?s.w:1)}}d={count:u,texture:D,size:new ut(E,R)},n.set(o,d),o.addEventListener("dispose",M)}if(r.isInstancedMesh===!0&&r.morphTexture!==null)l.getUniforms().setValue(i,"morphTexture",r.morphTexture,e);else{let g=0;for(let m=0;m<c.length;m++)g+=c[m];const _=o.morphTargetsRelative?1:1-g;l.getUniforms().setValue(i,"morphTargetBaseInfluence",_),l.getUniforms().setValue(i,"morphTargetInfluences",c)}l.getUniforms().setValue(i,"morphTargetsTexture",d.texture,e),l.getUniforms().setValue(i,"morphTargetsTextureSize",d.size)}return{update:a}}function Y0(i,t,e,n){let s=new WeakMap;function a(l){const c=n.render.frame,h=l.geometry,u=t.get(l,h);if(s.get(u)!==c&&(t.update(u),s.set(u,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",o)===!1&&l.addEventListener("dispose",o),s.get(l)!==c&&(e.update(l.instanceMatrix,i.ARRAY_BUFFER),l.instanceColor!==null&&e.update(l.instanceColor,i.ARRAY_BUFFER),s.set(l,c))),l.isSkinnedMesh){const d=l.skeleton;s.get(d)!==c&&(d.update(),s.set(d,c))}return u}function r(){s=new WeakMap}function o(l){const c=l.target;c.removeEventListener("dispose",o),e.remove(c.instanceMatrix),c.instanceColor!==null&&e.remove(c.instanceColor)}return{update:a,dispose:r}}const q0={[uh]:"LINEAR_TONE_MAPPING",[dh]:"REINHARD_TONE_MAPPING",[fh]:"CINEON_TONE_MAPPING",[ph]:"ACES_FILMIC_TONE_MAPPING",[gh]:"AGX_TONE_MAPPING",[xh]:"NEUTRAL_TONE_MAPPING",[mh]:"CUSTOM_TONE_MAPPING"};function Z0(i,t,e,n,s){const a=new Yn(t,e,{type:i,depthBuffer:n,stencilBuffer:s}),r=new Yn(t,e,{type:li,depthBuffer:!1,stencilBuffer:!1}),o=new rn;o.setAttribute("position",new Ne([-1,3,0,-1,-1,0,3,-1,0],3)),o.setAttribute("uv",new Ne([0,2,0,0,2,0],2));const l=new If({uniforms:{tDiffuse:{value:null}},vertexShader:`
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
			}`,depthTest:!1,depthWrite:!1}),c=new nt(o,l),h=new Fl(-1,1,1,-1,0,1);let u=null,d=null,p=!1,g,_=null,m=[],f=!1;this.setSize=function(S,w){a.setSize(S,w),r.setSize(S,w);for(let y=0;y<m.length;y++){const E=m[y];E.setSize&&E.setSize(S,w)}},this.setEffects=function(S){m=S,f=m.length>0&&m[0].isRenderPass===!0;const w=a.width,y=a.height;for(let E=0;E<m.length;E++){const R=m[E];R.setSize&&R.setSize(w,y)}},this.begin=function(S,w){if(p||S.toneMapping===Wn&&m.length===0)return!1;if(_=w,w!==null){const y=w.width,E=w.height;(a.width!==y||a.height!==E)&&this.setSize(y,E)}return f===!1&&S.setRenderTarget(a),g=S.toneMapping,S.toneMapping=Wn,!0},this.hasRenderPass=function(){return f},this.end=function(S,w){S.toneMapping=g,p=!0;let y=a,E=r;for(let R=0;R<m.length;R++){const T=m[R];if(T.enabled!==!1&&(T.render(S,E,y,w),T.needsSwap!==!1)){const D=y;y=E,E=D}}if(u!==S.outputColorSpace||d!==S.toneMapping){u=S.outputColorSpace,d=S.toneMapping,l.defines={},te.getTransfer(u)===ue&&(l.defines.SRGB_TRANSFER="");const R=q0[d];R&&(l.defines[R]=""),l.needsUpdate=!0}l.uniforms.tDiffuse.value=y.texture,S.setRenderTarget(_),S.render(c,h),_=null,p=!1},this.isCompositing=function(){return p},this.dispose=function(){a.dispose(),r.dispose(),o.dispose(),l.dispose()}}const Jh=new Ze,al=new ea(1,1),jh=new Th,Qh=new Ed,tu=new Dh,Bc=[],kc=[],zc=new Float32Array(16),Hc=new Float32Array(9),Gc=new Float32Array(4);function Cs(i,t,e){const n=i[0];if(n<=0||n>0)return i;const s=t*e;let a=Bc[s];if(a===void 0&&(a=new Float32Array(s),Bc[s]=a),t!==0){n.toArray(a,0);for(let r=1,o=0;r!==t;++r)o+=e,i[r].toArray(a,o)}return a}function ke(i,t){if(i.length!==t.length)return!1;for(let e=0,n=i.length;e<n;e++)if(i[e]!==t[e])return!1;return!0}function ze(i,t){for(let e=0,n=t.length;e<n;e++)i[e]=t[e]}function pr(i,t){let e=kc[t];e===void 0&&(e=new Int32Array(t),kc[t]=e);for(let n=0;n!==t;++n)e[n]=i.allocateTextureUnit();return e}function $0(i,t){const e=this.cache;e[0]!==t&&(i.uniform1f(this.addr,t),e[0]=t)}function K0(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(ke(e,t))return;i.uniform2fv(this.addr,t),ze(e,t)}}function J0(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(i.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(ke(e,t))return;i.uniform3fv(this.addr,t),ze(e,t)}}function j0(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(ke(e,t))return;i.uniform4fv(this.addr,t),ze(e,t)}}function Q0(i,t){const e=this.cache,n=t.elements;if(n===void 0){if(ke(e,t))return;i.uniformMatrix2fv(this.addr,!1,t),ze(e,t)}else{if(ke(e,n))return;Gc.set(n),i.uniformMatrix2fv(this.addr,!1,Gc),ze(e,n)}}function tg(i,t){const e=this.cache,n=t.elements;if(n===void 0){if(ke(e,t))return;i.uniformMatrix3fv(this.addr,!1,t),ze(e,t)}else{if(ke(e,n))return;Hc.set(n),i.uniformMatrix3fv(this.addr,!1,Hc),ze(e,n)}}function eg(i,t){const e=this.cache,n=t.elements;if(n===void 0){if(ke(e,t))return;i.uniformMatrix4fv(this.addr,!1,t),ze(e,t)}else{if(ke(e,n))return;zc.set(n),i.uniformMatrix4fv(this.addr,!1,zc),ze(e,n)}}function ng(i,t){const e=this.cache;e[0]!==t&&(i.uniform1i(this.addr,t),e[0]=t)}function ig(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(ke(e,t))return;i.uniform2iv(this.addr,t),ze(e,t)}}function sg(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(ke(e,t))return;i.uniform3iv(this.addr,t),ze(e,t)}}function ag(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(ke(e,t))return;i.uniform4iv(this.addr,t),ze(e,t)}}function rg(i,t){const e=this.cache;e[0]!==t&&(i.uniform1ui(this.addr,t),e[0]=t)}function og(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(ke(e,t))return;i.uniform2uiv(this.addr,t),ze(e,t)}}function lg(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(ke(e,t))return;i.uniform3uiv(this.addr,t),ze(e,t)}}function cg(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(ke(e,t))return;i.uniform4uiv(this.addr,t),ze(e,t)}}function hg(i,t,e){const n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s);let a;this.type===i.SAMPLER_2D_SHADOW?(al.compareFunction=e.isReversedDepthBuffer()?Tl:El,a=al):a=Jh,e.setTexture2D(t||a,s)}function ug(i,t,e){const n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTexture3D(t||Qh,s)}function dg(i,t,e){const n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTextureCube(t||tu,s)}function fg(i,t,e){const n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTexture2DArray(t||jh,s)}function pg(i){switch(i){case 5126:return $0;case 35664:return K0;case 35665:return J0;case 35666:return j0;case 35674:return Q0;case 35675:return tg;case 35676:return eg;case 5124:case 35670:return ng;case 35667:case 35671:return ig;case 35668:case 35672:return sg;case 35669:case 35673:return ag;case 5125:return rg;case 36294:return og;case 36295:return lg;case 36296:return cg;case 35678:case 36198:case 36298:case 36306:case 35682:return hg;case 35679:case 36299:case 36307:return ug;case 35680:case 36300:case 36308:case 36293:return dg;case 36289:case 36303:case 36311:case 36292:return fg}}function mg(i,t){i.uniform1fv(this.addr,t)}function gg(i,t){const e=Cs(t,this.size,2);i.uniform2fv(this.addr,e)}function xg(i,t){const e=Cs(t,this.size,3);i.uniform3fv(this.addr,e)}function _g(i,t){const e=Cs(t,this.size,4);i.uniform4fv(this.addr,e)}function vg(i,t){const e=Cs(t,this.size,4);i.uniformMatrix2fv(this.addr,!1,e)}function Mg(i,t){const e=Cs(t,this.size,9);i.uniformMatrix3fv(this.addr,!1,e)}function yg(i,t){const e=Cs(t,this.size,16);i.uniformMatrix4fv(this.addr,!1,e)}function Sg(i,t){i.uniform1iv(this.addr,t)}function wg(i,t){i.uniform2iv(this.addr,t)}function bg(i,t){i.uniform3iv(this.addr,t)}function Eg(i,t){i.uniform4iv(this.addr,t)}function Tg(i,t){i.uniform1uiv(this.addr,t)}function Cg(i,t){i.uniform2uiv(this.addr,t)}function Ag(i,t){i.uniform3uiv(this.addr,t)}function Rg(i,t){i.uniform4uiv(this.addr,t)}function Pg(i,t,e){const n=this.cache,s=t.length,a=pr(e,s);ke(n,a)||(i.uniform1iv(this.addr,a),ze(n,a));let r;this.type===i.SAMPLER_2D_SHADOW?r=al:r=Jh;for(let o=0;o!==s;++o)e.setTexture2D(t[o]||r,a[o])}function Ig(i,t,e){const n=this.cache,s=t.length,a=pr(e,s);ke(n,a)||(i.uniform1iv(this.addr,a),ze(n,a));for(let r=0;r!==s;++r)e.setTexture3D(t[r]||Qh,a[r])}function Lg(i,t,e){const n=this.cache,s=t.length,a=pr(e,s);ke(n,a)||(i.uniform1iv(this.addr,a),ze(n,a));for(let r=0;r!==s;++r)e.setTextureCube(t[r]||tu,a[r])}function Dg(i,t,e){const n=this.cache,s=t.length,a=pr(e,s);ke(n,a)||(i.uniform1iv(this.addr,a),ze(n,a));for(let r=0;r!==s;++r)e.setTexture2DArray(t[r]||jh,a[r])}function Fg(i){switch(i){case 5126:return mg;case 35664:return gg;case 35665:return xg;case 35666:return _g;case 35674:return vg;case 35675:return Mg;case 35676:return yg;case 5124:case 35670:return Sg;case 35667:case 35671:return wg;case 35668:case 35672:return bg;case 35669:case 35673:return Eg;case 5125:return Tg;case 36294:return Cg;case 36295:return Ag;case 36296:return Rg;case 35678:case 36198:case 36298:case 36306:case 35682:return Pg;case 35679:case 36299:case 36307:return Ig;case 35680:case 36300:case 36308:case 36293:return Lg;case 36289:case 36303:case 36311:case 36292:return Dg}}class Ng{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.setValue=pg(e.type)}}class Ug{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=Fg(e.type)}}class Og{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,n){const s=this.seq;for(let a=0,r=s.length;a!==r;++a){const o=s[a];o.setValue(t,e[o.id],n)}}}const Qr=/(\w+)(\])?(\[|\.)?/g;function Vc(i,t){i.seq.push(t),i.map[t.id]=t}function Bg(i,t,e){const n=i.name,s=n.length;for(Qr.lastIndex=0;;){const a=Qr.exec(n),r=Qr.lastIndex;let o=a[1];const l=a[2]==="]",c=a[3];if(l&&(o=o|0),c===void 0||c==="["&&r+2===s){Vc(e,c===void 0?new Ng(o,i,t):new Ug(o,i,t));break}else{let u=e.map[o];u===void 0&&(u=new Og(o),Vc(e,u)),e=u}}}class Ya{constructor(t,e){this.seq=[],this.map={};const n=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let r=0;r<n;++r){const o=t.getActiveUniform(e,r),l=t.getUniformLocation(e,o.name);Bg(o,l,this)}const s=[],a=[];for(const r of this.seq)r.type===t.SAMPLER_2D_SHADOW||r.type===t.SAMPLER_CUBE_SHADOW||r.type===t.SAMPLER_2D_ARRAY_SHADOW?s.push(r):a.push(r);s.length>0&&(this.seq=s.concat(a))}setValue(t,e,n,s){const a=this.map[e];a!==void 0&&a.setValue(t,n,s)}setOptional(t,e,n){const s=e[n];s!==void 0&&this.setValue(t,n,s)}static upload(t,e,n,s){for(let a=0,r=e.length;a!==r;++a){const o=e[a],l=n[o.id];l.needsUpdate!==!1&&o.setValue(t,l.value,s)}}static seqWithValue(t,e){const n=[];for(let s=0,a=t.length;s!==a;++s){const r=t[s];r.id in e&&n.push(r)}return n}}function Wc(i,t,e){const n=i.createShader(t);return i.shaderSource(n,e),i.compileShader(n),n}const kg=37297;let zg=0;function Hg(i,t){const e=i.split(`
`),n=[],s=Math.max(t-6,0),a=Math.min(t+6,e.length);for(let r=s;r<a;r++){const o=r+1;n.push(`${o===t?">":" "} ${o}: ${e[r]}`)}return n.join(`
`)}const Xc=new Yt;function Gg(i){te._getMatrix(Xc,te.workingColorSpace,i);const t=`mat3( ${Xc.elements.map(e=>e.toFixed(4))} )`;switch(te.getTransfer(i)){case $a:return[t,"LinearTransferOETF"];case ue:return[t,"sRGBTransferOETF"];default:return Ft("WebGLProgram: Unsupported color space: ",i),[t,"LinearTransferOETF"]}}function Yc(i,t,e){const n=i.getShaderParameter(t,i.COMPILE_STATUS),a=(i.getShaderInfoLog(t)||"").trim();if(n&&a==="")return"";const r=/ERROR: 0:(\d+)/.exec(a);if(r){const o=parseInt(r[1]);return e.toUpperCase()+`

`+a+`

`+Hg(i.getShaderSource(t),o)}else return a}function Vg(i,t){const e=Gg(t);return[`vec4 ${i}( vec4 value ) {`,`	return ${e[1]}( vec4( value.rgb * ${e[0]}, value.a ) );`,"}"].join(`
`)}const Wg={[uh]:"Linear",[dh]:"Reinhard",[fh]:"Cineon",[ph]:"ACESFilmic",[gh]:"AgX",[xh]:"Neutral",[mh]:"Custom"};function Xg(i,t){const e=Wg[t];return e===void 0?(Ft("WebGLProgram: Unsupported toneMapping:",t),"vec3 "+i+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+i+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}const Oa=new F;function Yg(){te.getLuminanceCoefficients(Oa);const i=Oa.x.toFixed(4),t=Oa.y.toFixed(4),e=Oa.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${i}, ${t}, ${e} );`,"	return dot( weights, rgb );","}"].join(`
`)}function qg(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Xs).join(`
`)}function Zg(i){const t=[];for(const e in i){const n=i[e];n!==!1&&t.push("#define "+e+" "+n)}return t.join(`
`)}function $g(i,t){const e={},n=i.getProgramParameter(t,i.ACTIVE_ATTRIBUTES);for(let s=0;s<n;s++){const a=i.getActiveAttrib(t,s),r=a.name;let o=1;a.type===i.FLOAT_MAT2&&(o=2),a.type===i.FLOAT_MAT3&&(o=3),a.type===i.FLOAT_MAT4&&(o=4),e[r]={type:a.type,location:i.getAttribLocation(t,r),locationSize:o}}return e}function Xs(i){return i!==""}function qc(i,t){const e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return i.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function Zc(i,t){return i.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}const Kg=/^[ \t]*#include +<([\w\d./]+)>/gm;function rl(i){return i.replace(Kg,jg)}const Jg=new Map;function jg(i,t){let e=qt[t];if(e===void 0){const n=Jg.get(t);if(n!==void 0)e=qt[n],Ft('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,n);else throw new Error("Can not resolve #include <"+t+">")}return rl(e)}const Qg=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function $c(i){return i.replace(Qg,tx)}function tx(i,t,e,n){let s="";for(let a=parseInt(t);a<parseInt(e);a++)s+=n.replace(/\[\s*i\s*\]/g,"[ "+a+" ]").replace(/UNROLLED_LOOP_INDEX/g,a);return s}function Kc(i){let t=`precision ${i.precision} float;
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
#define LOW_PRECISION`),t}const ex={[Ha]:"SHADOWMAP_TYPE_PCF",[Vs]:"SHADOWMAP_TYPE_VSM"};function nx(i){return ex[i.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}const ix={[Hi]:"ENVMAP_TYPE_CUBE",[vs]:"ENVMAP_TYPE_CUBE",[hr]:"ENVMAP_TYPE_CUBE_UV"};function sx(i){return i.envMap===!1?"ENVMAP_TYPE_CUBE":ix[i.envMapMode]||"ENVMAP_TYPE_CUBE"}const ax={[vs]:"ENVMAP_MODE_REFRACTION"};function rx(i){return i.envMap===!1?"ENVMAP_MODE_REFLECTION":ax[i.envMapMode]||"ENVMAP_MODE_REFLECTION"}const ox={[cr]:"ENVMAP_BLENDING_MULTIPLY",[Xu]:"ENVMAP_BLENDING_MIX",[Yu]:"ENVMAP_BLENDING_ADD"};function lx(i){return i.envMap===!1?"ENVMAP_BLENDING_NONE":ox[i.combine]||"ENVMAP_BLENDING_NONE"}function cx(i){const t=i.envMapCubeUVHeight;if(t===null)return null;const e=Math.log2(t)-2,n=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),112)),texelHeight:n,maxMip:e}}function hx(i,t,e,n){const s=i.getContext(),a=e.defines;let r=e.vertexShader,o=e.fragmentShader;const l=nx(e),c=sx(e),h=rx(e),u=lx(e),d=cx(e),p=qg(e),g=Zg(a),_=s.createProgram();let m,f,S=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(m=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g].filter(Xs).join(`
`),m.length>0&&(m+=`
`),f=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g].filter(Xs).join(`
`),f.length>0&&(f+=`
`)):(m=[Kc(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.batchingColor?"#define USE_BATCHING_COLOR":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.instancingMorph?"#define USE_INSTANCING_MORPH":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+h:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",e.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Xs).join(`
`),f=[Kc(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+c:"",e.envMap?"#define "+h:"",e.envMap?"#define "+u:"",d?"#define CUBEUV_TEXEL_WIDTH "+d.texelWidth:"",d?"#define CUBEUV_TEXEL_HEIGHT "+d.texelHeight:"",d?"#define CUBEUV_MAX_MIP "+d.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.dispersion?"#define USE_DISPERSION":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor||e.batchingColor?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",e.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",e.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==Wn?"#define TONE_MAPPING":"",e.toneMapping!==Wn?qt.tonemapping_pars_fragment:"",e.toneMapping!==Wn?Xg("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",qt.colorspace_pars_fragment,Vg("linearToOutputTexel",e.outputColorSpace),Yg(),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(Xs).join(`
`)),r=rl(r),r=qc(r,e),r=Zc(r,e),o=rl(o),o=qc(o,e),o=Zc(o,e),r=$c(r),o=$c(o),e.isRawShaderMaterial!==!0&&(S=`#version 300 es
`,m=[p,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,f=["#define varying in",e.glslVersion===jl?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===jl?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+f);const w=S+m+r,y=S+f+o,E=Wc(s,s.VERTEX_SHADER,w),R=Wc(s,s.FRAGMENT_SHADER,y);s.attachShader(_,E),s.attachShader(_,R),e.index0AttributeName!==void 0?s.bindAttribLocation(_,0,e.index0AttributeName):e.morphTargets===!0&&s.bindAttribLocation(_,0,"position"),s.linkProgram(_);function T(A){if(i.debug.checkShaderErrors){const I=s.getProgramInfoLog(_)||"",L=s.getShaderInfoLog(E)||"",B=s.getShaderInfoLog(R)||"",O=I.trim(),G=L.trim(),z=B.trim();let Z=!0,lt=!0;if(s.getProgramParameter(_,s.LINK_STATUS)===!1)if(Z=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(s,_,E,R);else{const et=Yc(s,E,"vertex"),rt=Yc(s,R,"fragment");Qt("THREE.WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(_,s.VALIDATE_STATUS)+`

Material Name: `+A.name+`
Material Type: `+A.type+`

Program Info Log: `+O+`
`+et+`
`+rt)}else O!==""?Ft("WebGLProgram: Program Info Log:",O):(G===""||z==="")&&(lt=!1);lt&&(A.diagnostics={runnable:Z,programLog:O,vertexShader:{log:G,prefix:m},fragmentShader:{log:z,prefix:f}})}s.deleteShader(E),s.deleteShader(R),D=new Ya(s,_),x=$g(s,_)}let D;this.getUniforms=function(){return D===void 0&&T(this),D};let x;this.getAttributes=function(){return x===void 0&&T(this),x};let M=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return M===!1&&(M=s.getProgramParameter(_,kg)),M},this.destroy=function(){n.releaseStatesOfProgram(this),s.deleteProgram(_),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=zg++,this.cacheKey=t,this.usedTimes=1,this.program=_,this.vertexShader=E,this.fragmentShader=R,this}let ux=0;class dx{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){const e=t.vertexShader,n=t.fragmentShader,s=this._getShaderStage(e),a=this._getShaderStage(n),r=this._getShaderCacheForMaterial(t);return r.has(s)===!1&&(r.add(s),s.usedTimes++),r.has(a)===!1&&(r.add(a),a.usedTimes++),this}remove(t){const e=this.materialCache.get(t);for(const n of e)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){const e=this.materialCache;let n=e.get(t);return n===void 0&&(n=new Set,e.set(t,n)),n}_getShaderStage(t){const e=this.shaderCache;let n=e.get(t);return n===void 0&&(n=new fx(t),e.set(t,n)),n}}class fx{constructor(t){this.id=ux++,this.code=t,this.usedTimes=0}}function px(i,t,e,n,s,a,r){const o=new Ch,l=new dx,c=new Set,h=[],u=new Map,d=s.logarithmicDepthBuffer;let p=s.precision;const g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function _(x){return c.add(x),x===0?"uv":`uv${x}`}function m(x,M,A,I,L){const B=I.fog,O=L.geometry,G=x.isMeshStandardMaterial?I.environment:null,z=(x.isMeshStandardMaterial?e:t).get(x.envMap||G),Z=z&&z.mapping===hr?z.image.height:null,lt=g[x.type];x.precision!==null&&(p=s.getMaxPrecision(x.precision),p!==x.precision&&Ft("WebGLProgram.getParameters:",x.precision,"not supported, using",p,"instead."));const et=O.morphAttributes.position||O.morphAttributes.normal||O.morphAttributes.color,rt=et!==void 0?et.length:0;let Ht=0;O.morphAttributes.position!==void 0&&(Ht=1),O.morphAttributes.normal!==void 0&&(Ht=2),O.morphAttributes.color!==void 0&&(Ht=3);let kt,ae,ee,q;if(lt){const ce=zn[lt];kt=ce.vertexShader,ae=ce.fragmentShader}else kt=x.vertexShader,ae=x.fragmentShader,l.update(x),ee=l.getVertexShaderID(x),q=l.getFragmentShaderID(x);const tt=i.getRenderTarget(),yt=i.state.buffers.depth.getReversed(),Nt=L.isInstancedMesh===!0,St=L.isBatchedMesh===!0,Jt=!!x.map,re=!!x.matcap,Wt=!!z,$=!!x.aoMap,it=!!x.lightMap,J=!!x.bumpMap,st=!!x.normalMap,P=!!x.displacementMap,bt=!!x.emissiveMap,xt=!!x.metalnessMap,Dt=!!x.roughnessMap,ht=x.anisotropy>0,C=x.clearcoat>0,v=x.dispersion>0,U=x.iridescence>0,X=x.sheen>0,j=x.transmission>0,Y=ht&&!!x.anisotropyMap,Pt=C&&!!x.clearcoatMap,dt=C&&!!x.clearcoatNormalMap,At=C&&!!x.clearcoatRoughnessMap,zt=U&&!!x.iridescenceMap,at=U&&!!x.iridescenceThicknessMap,mt=X&&!!x.sheenColorMap,Rt=X&&!!x.sheenRoughnessMap,It=!!x.specularMap,pt=!!x.specularColorMap,Zt=!!x.specularIntensityMap,N=j&&!!x.transmissionMap,Mt=j&&!!x.thicknessMap,ct=!!x.gradientMap,wt=!!x.alphaMap,ot=x.alphaTest>0,Q=!!x.alphaHash,ft=!!x.extensions;let Xt=Wn;x.toneMapped&&(tt===null||tt.isXRRenderTarget===!0)&&(Xt=i.toneMapping);const ge={shaderID:lt,shaderType:x.type,shaderName:x.name,vertexShader:kt,fragmentShader:ae,defines:x.defines,customVertexShaderID:ee,customFragmentShaderID:q,isRawShaderMaterial:x.isRawShaderMaterial===!0,glslVersion:x.glslVersion,precision:p,batching:St,batchingColor:St&&L._colorsTexture!==null,instancing:Nt,instancingColor:Nt&&L.instanceColor!==null,instancingMorph:Nt&&L.morphTexture!==null,outputColorSpace:tt===null?i.outputColorSpace:tt.isXRRenderTarget===!0?tt.texture.colorSpace:ys,alphaToCoverage:!!x.alphaToCoverage,map:Jt,matcap:re,envMap:Wt,envMapMode:Wt&&z.mapping,envMapCubeUVHeight:Z,aoMap:$,lightMap:it,bumpMap:J,normalMap:st,displacementMap:P,emissiveMap:bt,normalMapObjectSpace:st&&x.normalMapType===$u,normalMapTangentSpace:st&&x.normalMapType===ur,metalnessMap:xt,roughnessMap:Dt,anisotropy:ht,anisotropyMap:Y,clearcoat:C,clearcoatMap:Pt,clearcoatNormalMap:dt,clearcoatRoughnessMap:At,dispersion:v,iridescence:U,iridescenceMap:zt,iridescenceThicknessMap:at,sheen:X,sheenColorMap:mt,sheenRoughnessMap:Rt,specularMap:It,specularColorMap:pt,specularIntensityMap:Zt,transmission:j,transmissionMap:N,thicknessMap:Mt,gradientMap:ct,opaque:x.transparent===!1&&x.blending===gs&&x.alphaToCoverage===!1,alphaMap:wt,alphaTest:ot,alphaHash:Q,combine:x.combine,mapUv:Jt&&_(x.map.channel),aoMapUv:$&&_(x.aoMap.channel),lightMapUv:it&&_(x.lightMap.channel),bumpMapUv:J&&_(x.bumpMap.channel),normalMapUv:st&&_(x.normalMap.channel),displacementMapUv:P&&_(x.displacementMap.channel),emissiveMapUv:bt&&_(x.emissiveMap.channel),metalnessMapUv:xt&&_(x.metalnessMap.channel),roughnessMapUv:Dt&&_(x.roughnessMap.channel),anisotropyMapUv:Y&&_(x.anisotropyMap.channel),clearcoatMapUv:Pt&&_(x.clearcoatMap.channel),clearcoatNormalMapUv:dt&&_(x.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:At&&_(x.clearcoatRoughnessMap.channel),iridescenceMapUv:zt&&_(x.iridescenceMap.channel),iridescenceThicknessMapUv:at&&_(x.iridescenceThicknessMap.channel),sheenColorMapUv:mt&&_(x.sheenColorMap.channel),sheenRoughnessMapUv:Rt&&_(x.sheenRoughnessMap.channel),specularMapUv:It&&_(x.specularMap.channel),specularColorMapUv:pt&&_(x.specularColorMap.channel),specularIntensityMapUv:Zt&&_(x.specularIntensityMap.channel),transmissionMapUv:N&&_(x.transmissionMap.channel),thicknessMapUv:Mt&&_(x.thicknessMap.channel),alphaMapUv:wt&&_(x.alphaMap.channel),vertexTangents:!!O.attributes.tangent&&(st||ht),vertexColors:x.vertexColors,vertexAlphas:x.vertexColors===!0&&!!O.attributes.color&&O.attributes.color.itemSize===4,pointsUvs:L.isPoints===!0&&!!O.attributes.uv&&(Jt||wt),fog:!!B,useFog:x.fog===!0,fogExp2:!!B&&B.isFogExp2,flatShading:x.flatShading===!0&&x.wireframe===!1,sizeAttenuation:x.sizeAttenuation===!0,logarithmicDepthBuffer:d,reversedDepthBuffer:yt,skinning:L.isSkinnedMesh===!0,morphTargets:O.morphAttributes.position!==void 0,morphNormals:O.morphAttributes.normal!==void 0,morphColors:O.morphAttributes.color!==void 0,morphTargetsCount:rt,morphTextureStride:Ht,numDirLights:M.directional.length,numPointLights:M.point.length,numSpotLights:M.spot.length,numSpotLightMaps:M.spotLightMap.length,numRectAreaLights:M.rectArea.length,numHemiLights:M.hemi.length,numDirLightShadows:M.directionalShadowMap.length,numPointLightShadows:M.pointShadowMap.length,numSpotLightShadows:M.spotShadowMap.length,numSpotLightShadowsWithMaps:M.numSpotLightShadowsWithMaps,numLightProbes:M.numLightProbes,numClippingPlanes:r.numPlanes,numClipIntersection:r.numIntersection,dithering:x.dithering,shadowMapEnabled:i.shadowMap.enabled&&A.length>0,shadowMapType:i.shadowMap.type,toneMapping:Xt,decodeVideoTexture:Jt&&x.map.isVideoTexture===!0&&te.getTransfer(x.map.colorSpace)===ue,decodeVideoTextureEmissive:bt&&x.emissiveMap.isVideoTexture===!0&&te.getTransfer(x.emissiveMap.colorSpace)===ue,premultipliedAlpha:x.premultipliedAlpha,doubleSided:x.side===Le,flipSided:x.side===an,useDepthPacking:x.depthPacking>=0,depthPacking:x.depthPacking||0,index0AttributeName:x.index0AttributeName,extensionClipCullDistance:ft&&x.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(ft&&x.extensions.multiDraw===!0||St)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:x.customProgramCacheKey()};return ge.vertexUv1s=c.has(1),ge.vertexUv2s=c.has(2),ge.vertexUv3s=c.has(3),c.clear(),ge}function f(x){const M=[];if(x.shaderID?M.push(x.shaderID):(M.push(x.customVertexShaderID),M.push(x.customFragmentShaderID)),x.defines!==void 0)for(const A in x.defines)M.push(A),M.push(x.defines[A]);return x.isRawShaderMaterial===!1&&(S(M,x),w(M,x),M.push(i.outputColorSpace)),M.push(x.customProgramCacheKey),M.join()}function S(x,M){x.push(M.precision),x.push(M.outputColorSpace),x.push(M.envMapMode),x.push(M.envMapCubeUVHeight),x.push(M.mapUv),x.push(M.alphaMapUv),x.push(M.lightMapUv),x.push(M.aoMapUv),x.push(M.bumpMapUv),x.push(M.normalMapUv),x.push(M.displacementMapUv),x.push(M.emissiveMapUv),x.push(M.metalnessMapUv),x.push(M.roughnessMapUv),x.push(M.anisotropyMapUv),x.push(M.clearcoatMapUv),x.push(M.clearcoatNormalMapUv),x.push(M.clearcoatRoughnessMapUv),x.push(M.iridescenceMapUv),x.push(M.iridescenceThicknessMapUv),x.push(M.sheenColorMapUv),x.push(M.sheenRoughnessMapUv),x.push(M.specularMapUv),x.push(M.specularColorMapUv),x.push(M.specularIntensityMapUv),x.push(M.transmissionMapUv),x.push(M.thicknessMapUv),x.push(M.combine),x.push(M.fogExp2),x.push(M.sizeAttenuation),x.push(M.morphTargetsCount),x.push(M.morphAttributeCount),x.push(M.numDirLights),x.push(M.numPointLights),x.push(M.numSpotLights),x.push(M.numSpotLightMaps),x.push(M.numHemiLights),x.push(M.numRectAreaLights),x.push(M.numDirLightShadows),x.push(M.numPointLightShadows),x.push(M.numSpotLightShadows),x.push(M.numSpotLightShadowsWithMaps),x.push(M.numLightProbes),x.push(M.shadowMapType),x.push(M.toneMapping),x.push(M.numClippingPlanes),x.push(M.numClipIntersection),x.push(M.depthPacking)}function w(x,M){o.disableAll(),M.instancing&&o.enable(0),M.instancingColor&&o.enable(1),M.instancingMorph&&o.enable(2),M.matcap&&o.enable(3),M.envMap&&o.enable(4),M.normalMapObjectSpace&&o.enable(5),M.normalMapTangentSpace&&o.enable(6),M.clearcoat&&o.enable(7),M.iridescence&&o.enable(8),M.alphaTest&&o.enable(9),M.vertexColors&&o.enable(10),M.vertexAlphas&&o.enable(11),M.vertexUv1s&&o.enable(12),M.vertexUv2s&&o.enable(13),M.vertexUv3s&&o.enable(14),M.vertexTangents&&o.enable(15),M.anisotropy&&o.enable(16),M.alphaHash&&o.enable(17),M.batching&&o.enable(18),M.dispersion&&o.enable(19),M.batchingColor&&o.enable(20),M.gradientMap&&o.enable(21),x.push(o.mask),o.disableAll(),M.fog&&o.enable(0),M.useFog&&o.enable(1),M.flatShading&&o.enable(2),M.logarithmicDepthBuffer&&o.enable(3),M.reversedDepthBuffer&&o.enable(4),M.skinning&&o.enable(5),M.morphTargets&&o.enable(6),M.morphNormals&&o.enable(7),M.morphColors&&o.enable(8),M.premultipliedAlpha&&o.enable(9),M.shadowMapEnabled&&o.enable(10),M.doubleSided&&o.enable(11),M.flipSided&&o.enable(12),M.useDepthPacking&&o.enable(13),M.dithering&&o.enable(14),M.transmission&&o.enable(15),M.sheen&&o.enable(16),M.opaque&&o.enable(17),M.pointsUvs&&o.enable(18),M.decodeVideoTexture&&o.enable(19),M.decodeVideoTextureEmissive&&o.enable(20),M.alphaToCoverage&&o.enable(21),x.push(o.mask)}function y(x){const M=g[x.type];let A;if(M){const I=zn[M];A=kd.clone(I.uniforms)}else A=x.uniforms;return A}function E(x,M){let A=u.get(M);return A!==void 0?++A.usedTimes:(A=new hx(i,M,x,a),h.push(A),u.set(M,A)),A}function R(x){if(--x.usedTimes===0){const M=h.indexOf(x);h[M]=h[h.length-1],h.pop(),u.delete(x.cacheKey),x.destroy()}}function T(x){l.remove(x)}function D(){l.dispose()}return{getParameters:m,getProgramCacheKey:f,getUniforms:y,acquireProgram:E,releaseProgram:R,releaseShaderCache:T,programs:h,dispose:D}}function mx(){let i=new WeakMap;function t(r){return i.has(r)}function e(r){let o=i.get(r);return o===void 0&&(o={},i.set(r,o)),o}function n(r){i.delete(r)}function s(r,o,l){i.get(r)[o]=l}function a(){i=new WeakMap}return{has:t,get:e,remove:n,update:s,dispose:a}}function gx(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.material.id!==t.material.id?i.material.id-t.material.id:i.z!==t.z?i.z-t.z:i.id-t.id}function Jc(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.z!==t.z?t.z-i.z:i.id-t.id}function jc(){const i=[];let t=0;const e=[],n=[],s=[];function a(){t=0,e.length=0,n.length=0,s.length=0}function r(u,d,p,g,_,m){let f=i[t];return f===void 0?(f={id:u.id,object:u,geometry:d,material:p,groupOrder:g,renderOrder:u.renderOrder,z:_,group:m},i[t]=f):(f.id=u.id,f.object=u,f.geometry=d,f.material=p,f.groupOrder=g,f.renderOrder=u.renderOrder,f.z=_,f.group=m),t++,f}function o(u,d,p,g,_,m){const f=r(u,d,p,g,_,m);p.transmission>0?n.push(f):p.transparent===!0?s.push(f):e.push(f)}function l(u,d,p,g,_,m){const f=r(u,d,p,g,_,m);p.transmission>0?n.unshift(f):p.transparent===!0?s.unshift(f):e.unshift(f)}function c(u,d){e.length>1&&e.sort(u||gx),n.length>1&&n.sort(d||Jc),s.length>1&&s.sort(d||Jc)}function h(){for(let u=t,d=i.length;u<d;u++){const p=i[u];if(p.id===null)break;p.id=null,p.object=null,p.geometry=null,p.material=null,p.group=null}}return{opaque:e,transmissive:n,transparent:s,init:a,push:o,unshift:l,finish:h,sort:c}}function xx(){let i=new WeakMap;function t(n,s){const a=i.get(n);let r;return a===void 0?(r=new jc,i.set(n,[r])):s>=a.length?(r=new jc,a.push(r)):r=a[s],r}function e(){i=new WeakMap}return{get:t,dispose:e}}function _x(){const i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"DirectionalLight":e={direction:new F,color:new Ut};break;case"SpotLight":e={position:new F,direction:new F,color:new Ut,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new F,color:new Ut,distance:0,decay:0};break;case"HemisphereLight":e={direction:new F,skyColor:new Ut,groundColor:new Ut};break;case"RectAreaLight":e={color:new Ut,position:new F,halfWidth:new F,halfHeight:new F};break}return i[t.id]=e,e}}}function vx(){const i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"DirectionalLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ut};break;case"SpotLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ut};break;case"PointLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ut,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[t.id]=e,e}}}let Mx=0;function yx(i,t){return(t.castShadow?2:0)-(i.castShadow?2:0)+(t.map?1:0)-(i.map?1:0)}function Sx(i){const t=new _x,e=vx(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)n.probe.push(new F);const s=new F,a=new jt,r=new jt;function o(c){let h=0,u=0,d=0;for(let x=0;x<9;x++)n.probe[x].set(0,0,0);let p=0,g=0,_=0,m=0,f=0,S=0,w=0,y=0,E=0,R=0,T=0;c.sort(yx);for(let x=0,M=c.length;x<M;x++){const A=c[x],I=A.color,L=A.intensity,B=A.distance;let O=null;if(A.shadow&&A.shadow.map&&(A.shadow.map.texture.format===Ms?O=A.shadow.map.texture:O=A.shadow.map.depthTexture||A.shadow.map.texture),A.isAmbientLight)h+=I.r*L,u+=I.g*L,d+=I.b*L;else if(A.isLightProbe){for(let G=0;G<9;G++)n.probe[G].addScaledVector(A.sh.coefficients[G],L);T++}else if(A.isDirectionalLight){const G=t.get(A);if(G.color.copy(A.color).multiplyScalar(A.intensity),A.castShadow){const z=A.shadow,Z=e.get(A);Z.shadowIntensity=z.intensity,Z.shadowBias=z.bias,Z.shadowNormalBias=z.normalBias,Z.shadowRadius=z.radius,Z.shadowMapSize=z.mapSize,n.directionalShadow[p]=Z,n.directionalShadowMap[p]=O,n.directionalShadowMatrix[p]=A.shadow.matrix,S++}n.directional[p]=G,p++}else if(A.isSpotLight){const G=t.get(A);G.position.setFromMatrixPosition(A.matrixWorld),G.color.copy(I).multiplyScalar(L),G.distance=B,G.coneCos=Math.cos(A.angle),G.penumbraCos=Math.cos(A.angle*(1-A.penumbra)),G.decay=A.decay,n.spot[_]=G;const z=A.shadow;if(A.map&&(n.spotLightMap[E]=A.map,E++,z.updateMatrices(A),A.castShadow&&R++),n.spotLightMatrix[_]=z.matrix,A.castShadow){const Z=e.get(A);Z.shadowIntensity=z.intensity,Z.shadowBias=z.bias,Z.shadowNormalBias=z.normalBias,Z.shadowRadius=z.radius,Z.shadowMapSize=z.mapSize,n.spotShadow[_]=Z,n.spotShadowMap[_]=O,y++}_++}else if(A.isRectAreaLight){const G=t.get(A);G.color.copy(I).multiplyScalar(L),G.halfWidth.set(A.width*.5,0,0),G.halfHeight.set(0,A.height*.5,0),n.rectArea[m]=G,m++}else if(A.isPointLight){const G=t.get(A);if(G.color.copy(A.color).multiplyScalar(A.intensity),G.distance=A.distance,G.decay=A.decay,A.castShadow){const z=A.shadow,Z=e.get(A);Z.shadowIntensity=z.intensity,Z.shadowBias=z.bias,Z.shadowNormalBias=z.normalBias,Z.shadowRadius=z.radius,Z.shadowMapSize=z.mapSize,Z.shadowCameraNear=z.camera.near,Z.shadowCameraFar=z.camera.far,n.pointShadow[g]=Z,n.pointShadowMap[g]=O,n.pointShadowMatrix[g]=A.shadow.matrix,w++}n.point[g]=G,g++}else if(A.isHemisphereLight){const G=t.get(A);G.skyColor.copy(A.color).multiplyScalar(L),G.groundColor.copy(A.groundColor).multiplyScalar(L),n.hemi[f]=G,f++}}m>0&&(i.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=_t.LTC_FLOAT_1,n.rectAreaLTC2=_t.LTC_FLOAT_2):(n.rectAreaLTC1=_t.LTC_HALF_1,n.rectAreaLTC2=_t.LTC_HALF_2)),n.ambient[0]=h,n.ambient[1]=u,n.ambient[2]=d;const D=n.hash;(D.directionalLength!==p||D.pointLength!==g||D.spotLength!==_||D.rectAreaLength!==m||D.hemiLength!==f||D.numDirectionalShadows!==S||D.numPointShadows!==w||D.numSpotShadows!==y||D.numSpotMaps!==E||D.numLightProbes!==T)&&(n.directional.length=p,n.spot.length=_,n.rectArea.length=m,n.point.length=g,n.hemi.length=f,n.directionalShadow.length=S,n.directionalShadowMap.length=S,n.pointShadow.length=w,n.pointShadowMap.length=w,n.spotShadow.length=y,n.spotShadowMap.length=y,n.directionalShadowMatrix.length=S,n.pointShadowMatrix.length=w,n.spotLightMatrix.length=y+E-R,n.spotLightMap.length=E,n.numSpotLightShadowsWithMaps=R,n.numLightProbes=T,D.directionalLength=p,D.pointLength=g,D.spotLength=_,D.rectAreaLength=m,D.hemiLength=f,D.numDirectionalShadows=S,D.numPointShadows=w,D.numSpotShadows=y,D.numSpotMaps=E,D.numLightProbes=T,n.version=Mx++)}function l(c,h){let u=0,d=0,p=0,g=0,_=0;const m=h.matrixWorldInverse;for(let f=0,S=c.length;f<S;f++){const w=c[f];if(w.isDirectionalLight){const y=n.directional[u];y.direction.setFromMatrixPosition(w.matrixWorld),s.setFromMatrixPosition(w.target.matrixWorld),y.direction.sub(s),y.direction.transformDirection(m),u++}else if(w.isSpotLight){const y=n.spot[p];y.position.setFromMatrixPosition(w.matrixWorld),y.position.applyMatrix4(m),y.direction.setFromMatrixPosition(w.matrixWorld),s.setFromMatrixPosition(w.target.matrixWorld),y.direction.sub(s),y.direction.transformDirection(m),p++}else if(w.isRectAreaLight){const y=n.rectArea[g];y.position.setFromMatrixPosition(w.matrixWorld),y.position.applyMatrix4(m),r.identity(),a.copy(w.matrixWorld),a.premultiply(m),r.extractRotation(a),y.halfWidth.set(w.width*.5,0,0),y.halfHeight.set(0,w.height*.5,0),y.halfWidth.applyMatrix4(r),y.halfHeight.applyMatrix4(r),g++}else if(w.isPointLight){const y=n.point[d];y.position.setFromMatrixPosition(w.matrixWorld),y.position.applyMatrix4(m),d++}else if(w.isHemisphereLight){const y=n.hemi[_];y.direction.setFromMatrixPosition(w.matrixWorld),y.direction.transformDirection(m),_++}}}return{setup:o,setupView:l,state:n}}function Qc(i){const t=new Sx(i),e=[],n=[];function s(h){c.camera=h,e.length=0,n.length=0}function a(h){e.push(h)}function r(h){n.push(h)}function o(){t.setup(e)}function l(h){t.setupView(e,h)}const c={lightsArray:e,shadowsArray:n,camera:null,lights:t,transmissionRenderTarget:{}};return{init:s,state:c,setupLights:o,setupLightsView:l,pushLight:a,pushShadow:r}}function wx(i){let t=new WeakMap;function e(s,a=0){const r=t.get(s);let o;return r===void 0?(o=new Qc(i),t.set(s,[o])):a>=r.length?(o=new Qc(i),r.push(o)):o=r[a],o}function n(){t=new WeakMap}return{get:e,dispose:n}}const bx=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,Ex=`uniform sampler2D shadow_pass;
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
}`,Tx=[new F(1,0,0),new F(-1,0,0),new F(0,1,0),new F(0,-1,0),new F(0,0,1),new F(0,0,-1)],Cx=[new F(0,-1,0),new F(0,-1,0),new F(0,0,1),new F(0,0,-1),new F(0,-1,0),new F(0,-1,0)],th=new jt,ks=new F,to=new F;function Ax(i,t,e){let n=new Rl;const s=new ut,a=new ut,r=new Ee,o=new Df,l=new Ff,c={},h=e.maxTextureSize,u={[wi]:an,[an]:wi,[Le]:Le},d=new En({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new ut},radius:{value:4}},vertexShader:bx,fragmentShader:Ex}),p=d.clone();p.defines.HORIZONTAL_PASS=1;const g=new rn;g.setAttribute("position",new wn(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const _=new nt(g,d),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Ha;let f=this.type;this.render=function(R,T,D){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||R.length===0)return;R.type===Tu&&(Ft("WebGLShadowMap: PCFSoftShadowMap has been deprecated. Using PCFShadowMap instead."),R.type=Ha);const x=i.getRenderTarget(),M=i.getActiveCubeFace(),A=i.getActiveMipmapLevel(),I=i.state;I.setBlending(ai),I.buffers.depth.getReversed()===!0?I.buffers.color.setClear(0,0,0,0):I.buffers.color.setClear(1,1,1,1),I.buffers.depth.setTest(!0),I.setScissorTest(!1);const L=f!==this.type;L&&T.traverse(function(B){B.material&&(Array.isArray(B.material)?B.material.forEach(O=>O.needsUpdate=!0):B.material.needsUpdate=!0)});for(let B=0,O=R.length;B<O;B++){const G=R[B],z=G.shadow;if(z===void 0){Ft("WebGLShadowMap:",G,"has no shadow.");continue}if(z.autoUpdate===!1&&z.needsUpdate===!1)continue;s.copy(z.mapSize);const Z=z.getFrameExtents();if(s.multiply(Z),a.copy(z.mapSize),(s.x>h||s.y>h)&&(s.x>h&&(a.x=Math.floor(h/Z.x),s.x=a.x*Z.x,z.mapSize.x=a.x),s.y>h&&(a.y=Math.floor(h/Z.y),s.y=a.y*Z.y,z.mapSize.y=a.y)),z.map===null||L===!0){if(z.map!==null&&(z.map.depthTexture!==null&&(z.map.depthTexture.dispose(),z.map.depthTexture=null),z.map.dispose()),this.type===Vs){if(G.isPointLight){Ft("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}z.map=new Yn(s.x,s.y,{format:Ms,type:li,minFilter:Ge,magFilter:Ge,generateMipmaps:!1}),z.map.texture.name=G.name+".shadowMap",z.map.depthTexture=new ea(s.x,s.y,Nn),z.map.depthTexture.name=G.name+".shadowMapDepth",z.map.depthTexture.format=ci,z.map.depthTexture.compareFunction=null,z.map.depthTexture.minFilter=We,z.map.depthTexture.magFilter=We}else{G.isPointLight?(z.map=new Fh(s.x),z.map.depthTexture=new Kd(s.x,qn)):(z.map=new Yn(s.x,s.y),z.map.depthTexture=new ea(s.x,s.y,qn)),z.map.depthTexture.name=G.name+".shadowMap",z.map.depthTexture.format=ci;const et=i.state.buffers.depth.getReversed();this.type===Ha?(z.map.depthTexture.compareFunction=et?Tl:El,z.map.depthTexture.minFilter=Ge,z.map.depthTexture.magFilter=Ge):(z.map.depthTexture.compareFunction=null,z.map.depthTexture.minFilter=We,z.map.depthTexture.magFilter=We)}z.camera.updateProjectionMatrix()}const lt=z.map.isWebGLCubeRenderTarget?6:1;for(let et=0;et<lt;et++){if(z.map.isWebGLCubeRenderTarget)i.setRenderTarget(z.map,et),i.clear();else{et===0&&(i.setRenderTarget(z.map),i.clear());const rt=z.getViewport(et);r.set(a.x*rt.x,a.y*rt.y,a.x*rt.z,a.y*rt.w),I.viewport(r)}if(G.isPointLight){const rt=z.camera,Ht=z.matrix,kt=G.distance||rt.far;kt!==rt.far&&(rt.far=kt,rt.updateProjectionMatrix()),ks.setFromMatrixPosition(G.matrixWorld),rt.position.copy(ks),to.copy(rt.position),to.add(Tx[et]),rt.up.copy(Cx[et]),rt.lookAt(to),rt.updateMatrixWorld(),Ht.makeTranslation(-ks.x,-ks.y,-ks.z),th.multiplyMatrices(rt.projectionMatrix,rt.matrixWorldInverse),z._frustum.setFromProjectionMatrix(th,rt.coordinateSystem,rt.reversedDepth)}else z.updateMatrices(G);n=z.getFrustum(),y(T,D,z.camera,G,this.type)}z.isPointLightShadow!==!0&&this.type===Vs&&S(z,D),z.needsUpdate=!1}f=this.type,m.needsUpdate=!1,i.setRenderTarget(x,M,A)};function S(R,T){const D=t.update(_);d.defines.VSM_SAMPLES!==R.blurSamples&&(d.defines.VSM_SAMPLES=R.blurSamples,p.defines.VSM_SAMPLES=R.blurSamples,d.needsUpdate=!0,p.needsUpdate=!0),R.mapPass===null&&(R.mapPass=new Yn(s.x,s.y,{format:Ms,type:li})),d.uniforms.shadow_pass.value=R.map.depthTexture,d.uniforms.resolution.value=R.mapSize,d.uniforms.radius.value=R.radius,i.setRenderTarget(R.mapPass),i.clear(),i.renderBufferDirect(T,null,D,d,_,null),p.uniforms.shadow_pass.value=R.mapPass.texture,p.uniforms.resolution.value=R.mapSize,p.uniforms.radius.value=R.radius,i.setRenderTarget(R.map),i.clear(),i.renderBufferDirect(T,null,D,p,_,null)}function w(R,T,D,x){let M=null;const A=D.isPointLight===!0?R.customDistanceMaterial:R.customDepthMaterial;if(A!==void 0)M=A;else if(M=D.isPointLight===!0?l:o,i.localClippingEnabled&&T.clipShadows===!0&&Array.isArray(T.clippingPlanes)&&T.clippingPlanes.length!==0||T.displacementMap&&T.displacementScale!==0||T.alphaMap&&T.alphaTest>0||T.map&&T.alphaTest>0||T.alphaToCoverage===!0){const I=M.uuid,L=T.uuid;let B=c[I];B===void 0&&(B={},c[I]=B);let O=B[L];O===void 0&&(O=M.clone(),B[L]=O,T.addEventListener("dispose",E)),M=O}if(M.visible=T.visible,M.wireframe=T.wireframe,x===Vs?M.side=T.shadowSide!==null?T.shadowSide:T.side:M.side=T.shadowSide!==null?T.shadowSide:u[T.side],M.alphaMap=T.alphaMap,M.alphaTest=T.alphaToCoverage===!0?.5:T.alphaTest,M.map=T.map,M.clipShadows=T.clipShadows,M.clippingPlanes=T.clippingPlanes,M.clipIntersection=T.clipIntersection,M.displacementMap=T.displacementMap,M.displacementScale=T.displacementScale,M.displacementBias=T.displacementBias,M.wireframeLinewidth=T.wireframeLinewidth,M.linewidth=T.linewidth,D.isPointLight===!0&&M.isMeshDistanceMaterial===!0){const I=i.properties.get(M);I.light=D}return M}function y(R,T,D,x,M){if(R.visible===!1)return;if(R.layers.test(T.layers)&&(R.isMesh||R.isLine||R.isPoints)&&(R.castShadow||R.receiveShadow&&M===Vs)&&(!R.frustumCulled||n.intersectsObject(R))){R.modelViewMatrix.multiplyMatrices(D.matrixWorldInverse,R.matrixWorld);const L=t.update(R),B=R.material;if(Array.isArray(B)){const O=L.groups;for(let G=0,z=O.length;G<z;G++){const Z=O[G],lt=B[Z.materialIndex];if(lt&&lt.visible){const et=w(R,lt,x,M);R.onBeforeShadow(i,R,T,D,L,et,Z),i.renderBufferDirect(D,null,L,et,R,Z),R.onAfterShadow(i,R,T,D,L,et,Z)}}}else if(B.visible){const O=w(R,B,x,M);R.onBeforeShadow(i,R,T,D,L,O,null),i.renderBufferDirect(D,null,L,O,R,null),R.onAfterShadow(i,R,T,D,L,O,null)}}const I=R.children;for(let L=0,B=I.length;L<B;L++)y(I[L],T,D,x,M)}function E(R){R.target.removeEventListener("dispose",E);for(const D in c){const x=c[D],M=R.target.uuid;M in x&&(x[M].dispose(),delete x[M])}}}const Rx={[ho]:uo,[fo]:go,[po]:xo,[_s]:mo,[uo]:ho,[go]:fo,[xo]:po,[mo]:_s};function Px(i,t){function e(){let N=!1;const Mt=new Ee;let ct=null;const wt=new Ee(0,0,0,0);return{setMask:function(ot){ct!==ot&&!N&&(i.colorMask(ot,ot,ot,ot),ct=ot)},setLocked:function(ot){N=ot},setClear:function(ot,Q,ft,Xt,ge){ge===!0&&(ot*=Xt,Q*=Xt,ft*=Xt),Mt.set(ot,Q,ft,Xt),wt.equals(Mt)===!1&&(i.clearColor(ot,Q,ft,Xt),wt.copy(Mt))},reset:function(){N=!1,ct=null,wt.set(-1,0,0,0)}}}function n(){let N=!1,Mt=!1,ct=null,wt=null,ot=null;return{setReversed:function(Q){if(Mt!==Q){const ft=t.get("EXT_clip_control");Q?ft.clipControlEXT(ft.LOWER_LEFT_EXT,ft.ZERO_TO_ONE_EXT):ft.clipControlEXT(ft.LOWER_LEFT_EXT,ft.NEGATIVE_ONE_TO_ONE_EXT),Mt=Q;const Xt=ot;ot=null,this.setClear(Xt)}},getReversed:function(){return Mt},setTest:function(Q){Q?tt(i.DEPTH_TEST):yt(i.DEPTH_TEST)},setMask:function(Q){ct!==Q&&!N&&(i.depthMask(Q),ct=Q)},setFunc:function(Q){if(Mt&&(Q=Rx[Q]),wt!==Q){switch(Q){case ho:i.depthFunc(i.NEVER);break;case uo:i.depthFunc(i.ALWAYS);break;case fo:i.depthFunc(i.LESS);break;case _s:i.depthFunc(i.LEQUAL);break;case po:i.depthFunc(i.EQUAL);break;case mo:i.depthFunc(i.GEQUAL);break;case go:i.depthFunc(i.GREATER);break;case xo:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}wt=Q}},setLocked:function(Q){N=Q},setClear:function(Q){ot!==Q&&(Mt&&(Q=1-Q),i.clearDepth(Q),ot=Q)},reset:function(){N=!1,ct=null,wt=null,ot=null,Mt=!1}}}function s(){let N=!1,Mt=null,ct=null,wt=null,ot=null,Q=null,ft=null,Xt=null,ge=null;return{setTest:function(ce){N||(ce?tt(i.STENCIL_TEST):yt(i.STENCIL_TEST))},setMask:function(ce){Mt!==ce&&!N&&(i.stencilMask(ce),Mt=ce)},setFunc:function(ce,On,$n){(ct!==ce||wt!==On||ot!==$n)&&(i.stencilFunc(ce,On,$n),ct=ce,wt=On,ot=$n)},setOp:function(ce,On,$n){(Q!==ce||ft!==On||Xt!==$n)&&(i.stencilOp(ce,On,$n),Q=ce,ft=On,Xt=$n)},setLocked:function(ce){N=ce},setClear:function(ce){ge!==ce&&(i.clearStencil(ce),ge=ce)},reset:function(){N=!1,Mt=null,ct=null,wt=null,ot=null,Q=null,ft=null,Xt=null,ge=null}}}const a=new e,r=new n,o=new s,l=new WeakMap,c=new WeakMap;let h={},u={},d=new WeakMap,p=[],g=null,_=!1,m=null,f=null,S=null,w=null,y=null,E=null,R=null,T=new Ut(0,0,0),D=0,x=!1,M=null,A=null,I=null,L=null,B=null;const O=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let G=!1,z=0;const Z=i.getParameter(i.VERSION);Z.indexOf("WebGL")!==-1?(z=parseFloat(/^WebGL (\d)/.exec(Z)[1]),G=z>=1):Z.indexOf("OpenGL ES")!==-1&&(z=parseFloat(/^OpenGL ES (\d)/.exec(Z)[1]),G=z>=2);let lt=null,et={};const rt=i.getParameter(i.SCISSOR_BOX),Ht=i.getParameter(i.VIEWPORT),kt=new Ee().fromArray(rt),ae=new Ee().fromArray(Ht);function ee(N,Mt,ct,wt){const ot=new Uint8Array(4),Q=i.createTexture();i.bindTexture(N,Q),i.texParameteri(N,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(N,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let ft=0;ft<ct;ft++)N===i.TEXTURE_3D||N===i.TEXTURE_2D_ARRAY?i.texImage3D(Mt,0,i.RGBA,1,1,wt,0,i.RGBA,i.UNSIGNED_BYTE,ot):i.texImage2D(Mt+ft,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,ot);return Q}const q={};q[i.TEXTURE_2D]=ee(i.TEXTURE_2D,i.TEXTURE_2D,1),q[i.TEXTURE_CUBE_MAP]=ee(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),q[i.TEXTURE_2D_ARRAY]=ee(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),q[i.TEXTURE_3D]=ee(i.TEXTURE_3D,i.TEXTURE_3D,1,1),a.setClear(0,0,0,1),r.setClear(1),o.setClear(0),tt(i.DEPTH_TEST),r.setFunc(_s),J(!1),st(Zl),tt(i.CULL_FACE),$(ai);function tt(N){h[N]!==!0&&(i.enable(N),h[N]=!0)}function yt(N){h[N]!==!1&&(i.disable(N),h[N]=!1)}function Nt(N,Mt){return u[N]!==Mt?(i.bindFramebuffer(N,Mt),u[N]=Mt,N===i.DRAW_FRAMEBUFFER&&(u[i.FRAMEBUFFER]=Mt),N===i.FRAMEBUFFER&&(u[i.DRAW_FRAMEBUFFER]=Mt),!0):!1}function St(N,Mt){let ct=p,wt=!1;if(N){ct=d.get(Mt),ct===void 0&&(ct=[],d.set(Mt,ct));const ot=N.textures;if(ct.length!==ot.length||ct[0]!==i.COLOR_ATTACHMENT0){for(let Q=0,ft=ot.length;Q<ft;Q++)ct[Q]=i.COLOR_ATTACHMENT0+Q;ct.length=ot.length,wt=!0}}else ct[0]!==i.BACK&&(ct[0]=i.BACK,wt=!0);wt&&i.drawBuffers(ct)}function Jt(N){return g!==N?(i.useProgram(N),g=N,!0):!1}const re={[Oi]:i.FUNC_ADD,[Au]:i.FUNC_SUBTRACT,[Ru]:i.FUNC_REVERSE_SUBTRACT};re[Pu]=i.MIN,re[Iu]=i.MAX;const Wt={[Lu]:i.ZERO,[Du]:i.ONE,[Fu]:i.SRC_COLOR,[lo]:i.SRC_ALPHA,[zu]:i.SRC_ALPHA_SATURATE,[Bu]:i.DST_COLOR,[Uu]:i.DST_ALPHA,[Nu]:i.ONE_MINUS_SRC_COLOR,[co]:i.ONE_MINUS_SRC_ALPHA,[ku]:i.ONE_MINUS_DST_COLOR,[Ou]:i.ONE_MINUS_DST_ALPHA,[Hu]:i.CONSTANT_COLOR,[Gu]:i.ONE_MINUS_CONSTANT_COLOR,[Vu]:i.CONSTANT_ALPHA,[Wu]:i.ONE_MINUS_CONSTANT_ALPHA};function $(N,Mt,ct,wt,ot,Q,ft,Xt,ge,ce){if(N===ai){_===!0&&(yt(i.BLEND),_=!1);return}if(_===!1&&(tt(i.BLEND),_=!0),N!==Cu){if(N!==m||ce!==x){if((f!==Oi||y!==Oi)&&(i.blendEquation(i.FUNC_ADD),f=Oi,y=Oi),ce)switch(N){case gs:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Sn:i.blendFunc(i.ONE,i.ONE);break;case $l:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case Kl:i.blendFuncSeparate(i.DST_COLOR,i.ONE_MINUS_SRC_ALPHA,i.ZERO,i.ONE);break;default:Qt("WebGLState: Invalid blending: ",N);break}else switch(N){case gs:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Sn:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE,i.ONE,i.ONE);break;case $l:Qt("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case Kl:Qt("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:Qt("WebGLState: Invalid blending: ",N);break}S=null,w=null,E=null,R=null,T.set(0,0,0),D=0,m=N,x=ce}return}ot=ot||Mt,Q=Q||ct,ft=ft||wt,(Mt!==f||ot!==y)&&(i.blendEquationSeparate(re[Mt],re[ot]),f=Mt,y=ot),(ct!==S||wt!==w||Q!==E||ft!==R)&&(i.blendFuncSeparate(Wt[ct],Wt[wt],Wt[Q],Wt[ft]),S=ct,w=wt,E=Q,R=ft),(Xt.equals(T)===!1||ge!==D)&&(i.blendColor(Xt.r,Xt.g,Xt.b,ge),T.copy(Xt),D=ge),m=N,x=!1}function it(N,Mt){N.side===Le?yt(i.CULL_FACE):tt(i.CULL_FACE);let ct=N.side===an;Mt&&(ct=!ct),J(ct),N.blending===gs&&N.transparent===!1?$(ai):$(N.blending,N.blendEquation,N.blendSrc,N.blendDst,N.blendEquationAlpha,N.blendSrcAlpha,N.blendDstAlpha,N.blendColor,N.blendAlpha,N.premultipliedAlpha),r.setFunc(N.depthFunc),r.setTest(N.depthTest),r.setMask(N.depthWrite),a.setMask(N.colorWrite);const wt=N.stencilWrite;o.setTest(wt),wt&&(o.setMask(N.stencilWriteMask),o.setFunc(N.stencilFunc,N.stencilRef,N.stencilFuncMask),o.setOp(N.stencilFail,N.stencilZFail,N.stencilZPass)),bt(N.polygonOffset,N.polygonOffsetFactor,N.polygonOffsetUnits),N.alphaToCoverage===!0?tt(i.SAMPLE_ALPHA_TO_COVERAGE):yt(i.SAMPLE_ALPHA_TO_COVERAGE)}function J(N){M!==N&&(N?i.frontFace(i.CW):i.frontFace(i.CCW),M=N)}function st(N){N!==bu?(tt(i.CULL_FACE),N!==A&&(N===Zl?i.cullFace(i.BACK):N===Eu?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):yt(i.CULL_FACE),A=N}function P(N){N!==I&&(G&&i.lineWidth(N),I=N)}function bt(N,Mt,ct){N?(tt(i.POLYGON_OFFSET_FILL),(L!==Mt||B!==ct)&&(i.polygonOffset(Mt,ct),L=Mt,B=ct)):yt(i.POLYGON_OFFSET_FILL)}function xt(N){N?tt(i.SCISSOR_TEST):yt(i.SCISSOR_TEST)}function Dt(N){N===void 0&&(N=i.TEXTURE0+O-1),lt!==N&&(i.activeTexture(N),lt=N)}function ht(N,Mt,ct){ct===void 0&&(lt===null?ct=i.TEXTURE0+O-1:ct=lt);let wt=et[ct];wt===void 0&&(wt={type:void 0,texture:void 0},et[ct]=wt),(wt.type!==N||wt.texture!==Mt)&&(lt!==ct&&(i.activeTexture(ct),lt=ct),i.bindTexture(N,Mt||q[N]),wt.type=N,wt.texture=Mt)}function C(){const N=et[lt];N!==void 0&&N.type!==void 0&&(i.bindTexture(N.type,null),N.type=void 0,N.texture=void 0)}function v(){try{i.compressedTexImage2D(...arguments)}catch(N){Qt("WebGLState:",N)}}function U(){try{i.compressedTexImage3D(...arguments)}catch(N){Qt("WebGLState:",N)}}function X(){try{i.texSubImage2D(...arguments)}catch(N){Qt("WebGLState:",N)}}function j(){try{i.texSubImage3D(...arguments)}catch(N){Qt("WebGLState:",N)}}function Y(){try{i.compressedTexSubImage2D(...arguments)}catch(N){Qt("WebGLState:",N)}}function Pt(){try{i.compressedTexSubImage3D(...arguments)}catch(N){Qt("WebGLState:",N)}}function dt(){try{i.texStorage2D(...arguments)}catch(N){Qt("WebGLState:",N)}}function At(){try{i.texStorage3D(...arguments)}catch(N){Qt("WebGLState:",N)}}function zt(){try{i.texImage2D(...arguments)}catch(N){Qt("WebGLState:",N)}}function at(){try{i.texImage3D(...arguments)}catch(N){Qt("WebGLState:",N)}}function mt(N){kt.equals(N)===!1&&(i.scissor(N.x,N.y,N.z,N.w),kt.copy(N))}function Rt(N){ae.equals(N)===!1&&(i.viewport(N.x,N.y,N.z,N.w),ae.copy(N))}function It(N,Mt){let ct=c.get(Mt);ct===void 0&&(ct=new WeakMap,c.set(Mt,ct));let wt=ct.get(N);wt===void 0&&(wt=i.getUniformBlockIndex(Mt,N.name),ct.set(N,wt))}function pt(N,Mt){const wt=c.get(Mt).get(N);l.get(Mt)!==wt&&(i.uniformBlockBinding(Mt,wt,N.__bindingPointIndex),l.set(Mt,wt))}function Zt(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),r.setReversed(!1),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),h={},lt=null,et={},u={},d=new WeakMap,p=[],g=null,_=!1,m=null,f=null,S=null,w=null,y=null,E=null,R=null,T=new Ut(0,0,0),D=0,x=!1,M=null,A=null,I=null,L=null,B=null,kt.set(0,0,i.canvas.width,i.canvas.height),ae.set(0,0,i.canvas.width,i.canvas.height),a.reset(),r.reset(),o.reset()}return{buffers:{color:a,depth:r,stencil:o},enable:tt,disable:yt,bindFramebuffer:Nt,drawBuffers:St,useProgram:Jt,setBlending:$,setMaterial:it,setFlipSided:J,setCullFace:st,setLineWidth:P,setPolygonOffset:bt,setScissorTest:xt,activeTexture:Dt,bindTexture:ht,unbindTexture:C,compressedTexImage2D:v,compressedTexImage3D:U,texImage2D:zt,texImage3D:at,updateUBOMapping:It,uniformBlockBinding:pt,texStorage2D:dt,texStorage3D:At,texSubImage2D:X,texSubImage3D:j,compressedTexSubImage2D:Y,compressedTexSubImage3D:Pt,scissor:mt,viewport:Rt,reset:Zt}}function Ix(i,t,e,n,s,a,r){const o=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new ut,h=new WeakMap;let u;const d=new WeakMap;let p=!1;try{p=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(C,v){return p?new OffscreenCanvas(C,v):Ja("canvas")}function _(C,v,U){let X=1;const j=ht(C);if((j.width>U||j.height>U)&&(X=U/Math.max(j.width,j.height)),X<1)if(typeof HTMLImageElement<"u"&&C instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&C instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&C instanceof ImageBitmap||typeof VideoFrame<"u"&&C instanceof VideoFrame){const Y=Math.floor(X*j.width),Pt=Math.floor(X*j.height);u===void 0&&(u=g(Y,Pt));const dt=v?g(Y,Pt):u;return dt.width=Y,dt.height=Pt,dt.getContext("2d").drawImage(C,0,0,Y,Pt),Ft("WebGLRenderer: Texture has been resized from ("+j.width+"x"+j.height+") to ("+Y+"x"+Pt+")."),dt}else return"data"in C&&Ft("WebGLRenderer: Image in DataTexture is too big ("+j.width+"x"+j.height+")."),C;return C}function m(C){return C.generateMipmaps}function f(C){i.generateMipmap(C)}function S(C){return C.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:C.isWebGL3DRenderTarget?i.TEXTURE_3D:C.isWebGLArrayRenderTarget||C.isCompressedArrayTexture?i.TEXTURE_2D_ARRAY:i.TEXTURE_2D}function w(C,v,U,X,j=!1){if(C!==null){if(i[C]!==void 0)return i[C];Ft("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+C+"'")}let Y=v;if(v===i.RED&&(U===i.FLOAT&&(Y=i.R32F),U===i.HALF_FLOAT&&(Y=i.R16F),U===i.UNSIGNED_BYTE&&(Y=i.R8)),v===i.RED_INTEGER&&(U===i.UNSIGNED_BYTE&&(Y=i.R8UI),U===i.UNSIGNED_SHORT&&(Y=i.R16UI),U===i.UNSIGNED_INT&&(Y=i.R32UI),U===i.BYTE&&(Y=i.R8I),U===i.SHORT&&(Y=i.R16I),U===i.INT&&(Y=i.R32I)),v===i.RG&&(U===i.FLOAT&&(Y=i.RG32F),U===i.HALF_FLOAT&&(Y=i.RG16F),U===i.UNSIGNED_BYTE&&(Y=i.RG8)),v===i.RG_INTEGER&&(U===i.UNSIGNED_BYTE&&(Y=i.RG8UI),U===i.UNSIGNED_SHORT&&(Y=i.RG16UI),U===i.UNSIGNED_INT&&(Y=i.RG32UI),U===i.BYTE&&(Y=i.RG8I),U===i.SHORT&&(Y=i.RG16I),U===i.INT&&(Y=i.RG32I)),v===i.RGB_INTEGER&&(U===i.UNSIGNED_BYTE&&(Y=i.RGB8UI),U===i.UNSIGNED_SHORT&&(Y=i.RGB16UI),U===i.UNSIGNED_INT&&(Y=i.RGB32UI),U===i.BYTE&&(Y=i.RGB8I),U===i.SHORT&&(Y=i.RGB16I),U===i.INT&&(Y=i.RGB32I)),v===i.RGBA_INTEGER&&(U===i.UNSIGNED_BYTE&&(Y=i.RGBA8UI),U===i.UNSIGNED_SHORT&&(Y=i.RGBA16UI),U===i.UNSIGNED_INT&&(Y=i.RGBA32UI),U===i.BYTE&&(Y=i.RGBA8I),U===i.SHORT&&(Y=i.RGBA16I),U===i.INT&&(Y=i.RGBA32I)),v===i.RGB&&(U===i.UNSIGNED_INT_5_9_9_9_REV&&(Y=i.RGB9_E5),U===i.UNSIGNED_INT_10F_11F_11F_REV&&(Y=i.R11F_G11F_B10F)),v===i.RGBA){const Pt=j?$a:te.getTransfer(X);U===i.FLOAT&&(Y=i.RGBA32F),U===i.HALF_FLOAT&&(Y=i.RGBA16F),U===i.UNSIGNED_BYTE&&(Y=Pt===ue?i.SRGB8_ALPHA8:i.RGBA8),U===i.UNSIGNED_SHORT_4_4_4_4&&(Y=i.RGBA4),U===i.UNSIGNED_SHORT_5_5_5_1&&(Y=i.RGB5_A1)}return(Y===i.R16F||Y===i.R32F||Y===i.RG16F||Y===i.RG32F||Y===i.RGBA16F||Y===i.RGBA32F)&&t.get("EXT_color_buffer_float"),Y}function y(C,v){let U;return C?v===null||v===qn||v===js?U=i.DEPTH24_STENCIL8:v===Nn?U=i.DEPTH32F_STENCIL8:v===Js&&(U=i.DEPTH24_STENCIL8,Ft("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):v===null||v===qn||v===js?U=i.DEPTH_COMPONENT24:v===Nn?U=i.DEPTH_COMPONENT32F:v===Js&&(U=i.DEPTH_COMPONENT16),U}function E(C,v){return m(C)===!0||C.isFramebufferTexture&&C.minFilter!==We&&C.minFilter!==Ge?Math.log2(Math.max(v.width,v.height))+1:C.mipmaps!==void 0&&C.mipmaps.length>0?C.mipmaps.length:C.isCompressedTexture&&Array.isArray(C.image)?v.mipmaps.length:1}function R(C){const v=C.target;v.removeEventListener("dispose",R),D(v),v.isVideoTexture&&h.delete(v)}function T(C){const v=C.target;v.removeEventListener("dispose",T),M(v)}function D(C){const v=n.get(C);if(v.__webglInit===void 0)return;const U=C.source,X=d.get(U);if(X){const j=X[v.__cacheKey];j.usedTimes--,j.usedTimes===0&&x(C),Object.keys(X).length===0&&d.delete(U)}n.remove(C)}function x(C){const v=n.get(C);i.deleteTexture(v.__webglTexture);const U=C.source,X=d.get(U);delete X[v.__cacheKey],r.memory.textures--}function M(C){const v=n.get(C);if(C.depthTexture&&(C.depthTexture.dispose(),n.remove(C.depthTexture)),C.isWebGLCubeRenderTarget)for(let X=0;X<6;X++){if(Array.isArray(v.__webglFramebuffer[X]))for(let j=0;j<v.__webglFramebuffer[X].length;j++)i.deleteFramebuffer(v.__webglFramebuffer[X][j]);else i.deleteFramebuffer(v.__webglFramebuffer[X]);v.__webglDepthbuffer&&i.deleteRenderbuffer(v.__webglDepthbuffer[X])}else{if(Array.isArray(v.__webglFramebuffer))for(let X=0;X<v.__webglFramebuffer.length;X++)i.deleteFramebuffer(v.__webglFramebuffer[X]);else i.deleteFramebuffer(v.__webglFramebuffer);if(v.__webglDepthbuffer&&i.deleteRenderbuffer(v.__webglDepthbuffer),v.__webglMultisampledFramebuffer&&i.deleteFramebuffer(v.__webglMultisampledFramebuffer),v.__webglColorRenderbuffer)for(let X=0;X<v.__webglColorRenderbuffer.length;X++)v.__webglColorRenderbuffer[X]&&i.deleteRenderbuffer(v.__webglColorRenderbuffer[X]);v.__webglDepthRenderbuffer&&i.deleteRenderbuffer(v.__webglDepthRenderbuffer)}const U=C.textures;for(let X=0,j=U.length;X<j;X++){const Y=n.get(U[X]);Y.__webglTexture&&(i.deleteTexture(Y.__webglTexture),r.memory.textures--),n.remove(U[X])}n.remove(C)}let A=0;function I(){A=0}function L(){const C=A;return C>=s.maxTextures&&Ft("WebGLTextures: Trying to use "+C+" texture units while this GPU supports only "+s.maxTextures),A+=1,C}function B(C){const v=[];return v.push(C.wrapS),v.push(C.wrapT),v.push(C.wrapR||0),v.push(C.magFilter),v.push(C.minFilter),v.push(C.anisotropy),v.push(C.internalFormat),v.push(C.format),v.push(C.type),v.push(C.generateMipmaps),v.push(C.premultiplyAlpha),v.push(C.flipY),v.push(C.unpackAlignment),v.push(C.colorSpace),v.join()}function O(C,v){const U=n.get(C);if(C.isVideoTexture&&xt(C),C.isRenderTargetTexture===!1&&C.isExternalTexture!==!0&&C.version>0&&U.__version!==C.version){const X=C.image;if(X===null)Ft("WebGLRenderer: Texture marked for update but no image data found.");else if(X.complete===!1)Ft("WebGLRenderer: Texture marked for update but image is incomplete");else{q(U,C,v);return}}else C.isExternalTexture&&(U.__webglTexture=C.sourceTexture?C.sourceTexture:null);e.bindTexture(i.TEXTURE_2D,U.__webglTexture,i.TEXTURE0+v)}function G(C,v){const U=n.get(C);if(C.isRenderTargetTexture===!1&&C.version>0&&U.__version!==C.version){q(U,C,v);return}else C.isExternalTexture&&(U.__webglTexture=C.sourceTexture?C.sourceTexture:null);e.bindTexture(i.TEXTURE_2D_ARRAY,U.__webglTexture,i.TEXTURE0+v)}function z(C,v){const U=n.get(C);if(C.isRenderTargetTexture===!1&&C.version>0&&U.__version!==C.version){q(U,C,v);return}e.bindTexture(i.TEXTURE_3D,U.__webglTexture,i.TEXTURE0+v)}function Z(C,v){const U=n.get(C);if(C.isCubeDepthTexture!==!0&&C.version>0&&U.__version!==C.version){tt(U,C,v);return}e.bindTexture(i.TEXTURE_CUBE_MAP,U.__webglTexture,i.TEXTURE0+v)}const lt={[Mo]:i.REPEAT,[ni]:i.CLAMP_TO_EDGE,[yo]:i.MIRRORED_REPEAT},et={[We]:i.NEAREST,[qu]:i.NEAREST_MIPMAP_NEAREST,[ha]:i.NEAREST_MIPMAP_LINEAR,[Ge]:i.LINEAR,[vr]:i.LINEAR_MIPMAP_NEAREST,[ki]:i.LINEAR_MIPMAP_LINEAR},rt={[Ku]:i.NEVER,[ed]:i.ALWAYS,[Ju]:i.LESS,[El]:i.LEQUAL,[ju]:i.EQUAL,[Tl]:i.GEQUAL,[Qu]:i.GREATER,[td]:i.NOTEQUAL};function Ht(C,v){if(v.type===Nn&&t.has("OES_texture_float_linear")===!1&&(v.magFilter===Ge||v.magFilter===vr||v.magFilter===ha||v.magFilter===ki||v.minFilter===Ge||v.minFilter===vr||v.minFilter===ha||v.minFilter===ki)&&Ft("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(C,i.TEXTURE_WRAP_S,lt[v.wrapS]),i.texParameteri(C,i.TEXTURE_WRAP_T,lt[v.wrapT]),(C===i.TEXTURE_3D||C===i.TEXTURE_2D_ARRAY)&&i.texParameteri(C,i.TEXTURE_WRAP_R,lt[v.wrapR]),i.texParameteri(C,i.TEXTURE_MAG_FILTER,et[v.magFilter]),i.texParameteri(C,i.TEXTURE_MIN_FILTER,et[v.minFilter]),v.compareFunction&&(i.texParameteri(C,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(C,i.TEXTURE_COMPARE_FUNC,rt[v.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(v.magFilter===We||v.minFilter!==ha&&v.minFilter!==ki||v.type===Nn&&t.has("OES_texture_float_linear")===!1)return;if(v.anisotropy>1||n.get(v).__currentAnisotropy){const U=t.get("EXT_texture_filter_anisotropic");i.texParameterf(C,U.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(v.anisotropy,s.getMaxAnisotropy())),n.get(v).__currentAnisotropy=v.anisotropy}}}function kt(C,v){let U=!1;C.__webglInit===void 0&&(C.__webglInit=!0,v.addEventListener("dispose",R));const X=v.source;let j=d.get(X);j===void 0&&(j={},d.set(X,j));const Y=B(v);if(Y!==C.__cacheKey){j[Y]===void 0&&(j[Y]={texture:i.createTexture(),usedTimes:0},r.memory.textures++,U=!0),j[Y].usedTimes++;const Pt=j[C.__cacheKey];Pt!==void 0&&(j[C.__cacheKey].usedTimes--,Pt.usedTimes===0&&x(v)),C.__cacheKey=Y,C.__webglTexture=j[Y].texture}return U}function ae(C,v,U){return Math.floor(Math.floor(C/U)/v)}function ee(C,v,U,X){const Y=C.updateRanges;if(Y.length===0)e.texSubImage2D(i.TEXTURE_2D,0,0,0,v.width,v.height,U,X,v.data);else{Y.sort((at,mt)=>at.start-mt.start);let Pt=0;for(let at=1;at<Y.length;at++){const mt=Y[Pt],Rt=Y[at],It=mt.start+mt.count,pt=ae(Rt.start,v.width,4),Zt=ae(mt.start,v.width,4);Rt.start<=It+1&&pt===Zt&&ae(Rt.start+Rt.count-1,v.width,4)===pt?mt.count=Math.max(mt.count,Rt.start+Rt.count-mt.start):(++Pt,Y[Pt]=Rt)}Y.length=Pt+1;const dt=i.getParameter(i.UNPACK_ROW_LENGTH),At=i.getParameter(i.UNPACK_SKIP_PIXELS),zt=i.getParameter(i.UNPACK_SKIP_ROWS);i.pixelStorei(i.UNPACK_ROW_LENGTH,v.width);for(let at=0,mt=Y.length;at<mt;at++){const Rt=Y[at],It=Math.floor(Rt.start/4),pt=Math.ceil(Rt.count/4),Zt=It%v.width,N=Math.floor(It/v.width),Mt=pt,ct=1;i.pixelStorei(i.UNPACK_SKIP_PIXELS,Zt),i.pixelStorei(i.UNPACK_SKIP_ROWS,N),e.texSubImage2D(i.TEXTURE_2D,0,Zt,N,Mt,ct,U,X,v.data)}C.clearUpdateRanges(),i.pixelStorei(i.UNPACK_ROW_LENGTH,dt),i.pixelStorei(i.UNPACK_SKIP_PIXELS,At),i.pixelStorei(i.UNPACK_SKIP_ROWS,zt)}}function q(C,v,U){let X=i.TEXTURE_2D;(v.isDataArrayTexture||v.isCompressedArrayTexture)&&(X=i.TEXTURE_2D_ARRAY),v.isData3DTexture&&(X=i.TEXTURE_3D);const j=kt(C,v),Y=v.source;e.bindTexture(X,C.__webglTexture,i.TEXTURE0+U);const Pt=n.get(Y);if(Y.version!==Pt.__version||j===!0){e.activeTexture(i.TEXTURE0+U);const dt=te.getPrimaries(te.workingColorSpace),At=v.colorSpace===vi?null:te.getPrimaries(v.colorSpace),zt=v.colorSpace===vi||dt===At?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,v.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,v.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,v.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,zt);let at=_(v.image,!1,s.maxTextureSize);at=Dt(v,at);const mt=a.convert(v.format,v.colorSpace),Rt=a.convert(v.type);let It=w(v.internalFormat,mt,Rt,v.colorSpace,v.isVideoTexture);Ht(X,v);let pt;const Zt=v.mipmaps,N=v.isVideoTexture!==!0,Mt=Pt.__version===void 0||j===!0,ct=Y.dataReady,wt=E(v,at);if(v.isDepthTexture)It=y(v.format===zi,v.type),Mt&&(N?e.texStorage2D(i.TEXTURE_2D,1,It,at.width,at.height):e.texImage2D(i.TEXTURE_2D,0,It,at.width,at.height,0,mt,Rt,null));else if(v.isDataTexture)if(Zt.length>0){N&&Mt&&e.texStorage2D(i.TEXTURE_2D,wt,It,Zt[0].width,Zt[0].height);for(let ot=0,Q=Zt.length;ot<Q;ot++)pt=Zt[ot],N?ct&&e.texSubImage2D(i.TEXTURE_2D,ot,0,0,pt.width,pt.height,mt,Rt,pt.data):e.texImage2D(i.TEXTURE_2D,ot,It,pt.width,pt.height,0,mt,Rt,pt.data);v.generateMipmaps=!1}else N?(Mt&&e.texStorage2D(i.TEXTURE_2D,wt,It,at.width,at.height),ct&&ee(v,at,mt,Rt)):e.texImage2D(i.TEXTURE_2D,0,It,at.width,at.height,0,mt,Rt,at.data);else if(v.isCompressedTexture)if(v.isCompressedArrayTexture){N&&Mt&&e.texStorage3D(i.TEXTURE_2D_ARRAY,wt,It,Zt[0].width,Zt[0].height,at.depth);for(let ot=0,Q=Zt.length;ot<Q;ot++)if(pt=Zt[ot],v.format!==Un)if(mt!==null)if(N){if(ct)if(v.layerUpdates.size>0){const ft=Ic(pt.width,pt.height,v.format,v.type);for(const Xt of v.layerUpdates){const ge=pt.data.subarray(Xt*ft/pt.data.BYTES_PER_ELEMENT,(Xt+1)*ft/pt.data.BYTES_PER_ELEMENT);e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,ot,0,0,Xt,pt.width,pt.height,1,mt,ge)}v.clearLayerUpdates()}else e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,ot,0,0,0,pt.width,pt.height,at.depth,mt,pt.data)}else e.compressedTexImage3D(i.TEXTURE_2D_ARRAY,ot,It,pt.width,pt.height,at.depth,0,pt.data,0,0);else Ft("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else N?ct&&e.texSubImage3D(i.TEXTURE_2D_ARRAY,ot,0,0,0,pt.width,pt.height,at.depth,mt,Rt,pt.data):e.texImage3D(i.TEXTURE_2D_ARRAY,ot,It,pt.width,pt.height,at.depth,0,mt,Rt,pt.data)}else{N&&Mt&&e.texStorage2D(i.TEXTURE_2D,wt,It,Zt[0].width,Zt[0].height);for(let ot=0,Q=Zt.length;ot<Q;ot++)pt=Zt[ot],v.format!==Un?mt!==null?N?ct&&e.compressedTexSubImage2D(i.TEXTURE_2D,ot,0,0,pt.width,pt.height,mt,pt.data):e.compressedTexImage2D(i.TEXTURE_2D,ot,It,pt.width,pt.height,0,pt.data):Ft("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):N?ct&&e.texSubImage2D(i.TEXTURE_2D,ot,0,0,pt.width,pt.height,mt,Rt,pt.data):e.texImage2D(i.TEXTURE_2D,ot,It,pt.width,pt.height,0,mt,Rt,pt.data)}else if(v.isDataArrayTexture)if(N){if(Mt&&e.texStorage3D(i.TEXTURE_2D_ARRAY,wt,It,at.width,at.height,at.depth),ct)if(v.layerUpdates.size>0){const ot=Ic(at.width,at.height,v.format,v.type);for(const Q of v.layerUpdates){const ft=at.data.subarray(Q*ot/at.data.BYTES_PER_ELEMENT,(Q+1)*ot/at.data.BYTES_PER_ELEMENT);e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,Q,at.width,at.height,1,mt,Rt,ft)}v.clearLayerUpdates()}else e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,at.width,at.height,at.depth,mt,Rt,at.data)}else e.texImage3D(i.TEXTURE_2D_ARRAY,0,It,at.width,at.height,at.depth,0,mt,Rt,at.data);else if(v.isData3DTexture)N?(Mt&&e.texStorage3D(i.TEXTURE_3D,wt,It,at.width,at.height,at.depth),ct&&e.texSubImage3D(i.TEXTURE_3D,0,0,0,0,at.width,at.height,at.depth,mt,Rt,at.data)):e.texImage3D(i.TEXTURE_3D,0,It,at.width,at.height,at.depth,0,mt,Rt,at.data);else if(v.isFramebufferTexture){if(Mt)if(N)e.texStorage2D(i.TEXTURE_2D,wt,It,at.width,at.height);else{let ot=at.width,Q=at.height;for(let ft=0;ft<wt;ft++)e.texImage2D(i.TEXTURE_2D,ft,It,ot,Q,0,mt,Rt,null),ot>>=1,Q>>=1}}else if(Zt.length>0){if(N&&Mt){const ot=ht(Zt[0]);e.texStorage2D(i.TEXTURE_2D,wt,It,ot.width,ot.height)}for(let ot=0,Q=Zt.length;ot<Q;ot++)pt=Zt[ot],N?ct&&e.texSubImage2D(i.TEXTURE_2D,ot,0,0,mt,Rt,pt):e.texImage2D(i.TEXTURE_2D,ot,It,mt,Rt,pt);v.generateMipmaps=!1}else if(N){if(Mt){const ot=ht(at);e.texStorage2D(i.TEXTURE_2D,wt,It,ot.width,ot.height)}ct&&e.texSubImage2D(i.TEXTURE_2D,0,0,0,mt,Rt,at)}else e.texImage2D(i.TEXTURE_2D,0,It,mt,Rt,at);m(v)&&f(X),Pt.__version=Y.version,v.onUpdate&&v.onUpdate(v)}C.__version=v.version}function tt(C,v,U){if(v.image.length!==6)return;const X=kt(C,v),j=v.source;e.bindTexture(i.TEXTURE_CUBE_MAP,C.__webglTexture,i.TEXTURE0+U);const Y=n.get(j);if(j.version!==Y.__version||X===!0){e.activeTexture(i.TEXTURE0+U);const Pt=te.getPrimaries(te.workingColorSpace),dt=v.colorSpace===vi?null:te.getPrimaries(v.colorSpace),At=v.colorSpace===vi||Pt===dt?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,v.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,v.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,v.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,At);const zt=v.isCompressedTexture||v.image[0].isCompressedTexture,at=v.image[0]&&v.image[0].isDataTexture,mt=[];for(let Q=0;Q<6;Q++)!zt&&!at?mt[Q]=_(v.image[Q],!0,s.maxCubemapSize):mt[Q]=at?v.image[Q].image:v.image[Q],mt[Q]=Dt(v,mt[Q]);const Rt=mt[0],It=a.convert(v.format,v.colorSpace),pt=a.convert(v.type),Zt=w(v.internalFormat,It,pt,v.colorSpace),N=v.isVideoTexture!==!0,Mt=Y.__version===void 0||X===!0,ct=j.dataReady;let wt=E(v,Rt);Ht(i.TEXTURE_CUBE_MAP,v);let ot;if(zt){N&&Mt&&e.texStorage2D(i.TEXTURE_CUBE_MAP,wt,Zt,Rt.width,Rt.height);for(let Q=0;Q<6;Q++){ot=mt[Q].mipmaps;for(let ft=0;ft<ot.length;ft++){const Xt=ot[ft];v.format!==Un?It!==null?N?ct&&e.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Q,ft,0,0,Xt.width,Xt.height,It,Xt.data):e.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Q,ft,Zt,Xt.width,Xt.height,0,Xt.data):Ft("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):N?ct&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Q,ft,0,0,Xt.width,Xt.height,It,pt,Xt.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Q,ft,Zt,Xt.width,Xt.height,0,It,pt,Xt.data)}}}else{if(ot=v.mipmaps,N&&Mt){ot.length>0&&wt++;const Q=ht(mt[0]);e.texStorage2D(i.TEXTURE_CUBE_MAP,wt,Zt,Q.width,Q.height)}for(let Q=0;Q<6;Q++)if(at){N?ct&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Q,0,0,0,mt[Q].width,mt[Q].height,It,pt,mt[Q].data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Q,0,Zt,mt[Q].width,mt[Q].height,0,It,pt,mt[Q].data);for(let ft=0;ft<ot.length;ft++){const ge=ot[ft].image[Q].image;N?ct&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Q,ft+1,0,0,ge.width,ge.height,It,pt,ge.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Q,ft+1,Zt,ge.width,ge.height,0,It,pt,ge.data)}}else{N?ct&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Q,0,0,0,It,pt,mt[Q]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Q,0,Zt,It,pt,mt[Q]);for(let ft=0;ft<ot.length;ft++){const Xt=ot[ft];N?ct&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Q,ft+1,0,0,It,pt,Xt.image[Q]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Q,ft+1,Zt,It,pt,Xt.image[Q])}}}m(v)&&f(i.TEXTURE_CUBE_MAP),Y.__version=j.version,v.onUpdate&&v.onUpdate(v)}C.__version=v.version}function yt(C,v,U,X,j,Y){const Pt=a.convert(U.format,U.colorSpace),dt=a.convert(U.type),At=w(U.internalFormat,Pt,dt,U.colorSpace),zt=n.get(v),at=n.get(U);if(at.__renderTarget=v,!zt.__hasExternalTextures){const mt=Math.max(1,v.width>>Y),Rt=Math.max(1,v.height>>Y);j===i.TEXTURE_3D||j===i.TEXTURE_2D_ARRAY?e.texImage3D(j,Y,At,mt,Rt,v.depth,0,Pt,dt,null):e.texImage2D(j,Y,At,mt,Rt,0,Pt,dt,null)}e.bindFramebuffer(i.FRAMEBUFFER,C),bt(v)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,X,j,at.__webglTexture,0,P(v)):(j===i.TEXTURE_2D||j>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&j<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,X,j,at.__webglTexture,Y),e.bindFramebuffer(i.FRAMEBUFFER,null)}function Nt(C,v,U){if(i.bindRenderbuffer(i.RENDERBUFFER,C),v.depthBuffer){const X=v.depthTexture,j=X&&X.isDepthTexture?X.type:null,Y=y(v.stencilBuffer,j),Pt=v.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;bt(v)?o.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,P(v),Y,v.width,v.height):U?i.renderbufferStorageMultisample(i.RENDERBUFFER,P(v),Y,v.width,v.height):i.renderbufferStorage(i.RENDERBUFFER,Y,v.width,v.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,Pt,i.RENDERBUFFER,C)}else{const X=v.textures;for(let j=0;j<X.length;j++){const Y=X[j],Pt=a.convert(Y.format,Y.colorSpace),dt=a.convert(Y.type),At=w(Y.internalFormat,Pt,dt,Y.colorSpace);bt(v)?o.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,P(v),At,v.width,v.height):U?i.renderbufferStorageMultisample(i.RENDERBUFFER,P(v),At,v.width,v.height):i.renderbufferStorage(i.RENDERBUFFER,At,v.width,v.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function St(C,v,U){const X=v.isWebGLCubeRenderTarget===!0;if(e.bindFramebuffer(i.FRAMEBUFFER,C),!(v.depthTexture&&v.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const j=n.get(v.depthTexture);if(j.__renderTarget=v,(!j.__webglTexture||v.depthTexture.image.width!==v.width||v.depthTexture.image.height!==v.height)&&(v.depthTexture.image.width=v.width,v.depthTexture.image.height=v.height,v.depthTexture.needsUpdate=!0),X){if(j.__webglInit===void 0&&(j.__webglInit=!0,v.depthTexture.addEventListener("dispose",R)),j.__webglTexture===void 0){j.__webglTexture=i.createTexture(),e.bindTexture(i.TEXTURE_CUBE_MAP,j.__webglTexture),Ht(i.TEXTURE_CUBE_MAP,v.depthTexture);const zt=a.convert(v.depthTexture.format),at=a.convert(v.depthTexture.type);let mt;v.depthTexture.format===ci?mt=i.DEPTH_COMPONENT24:v.depthTexture.format===zi&&(mt=i.DEPTH24_STENCIL8);for(let Rt=0;Rt<6;Rt++)i.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Rt,0,mt,v.width,v.height,0,zt,at,null)}}else O(v.depthTexture,0);const Y=j.__webglTexture,Pt=P(v),dt=X?i.TEXTURE_CUBE_MAP_POSITIVE_X+U:i.TEXTURE_2D,At=v.depthTexture.format===zi?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;if(v.depthTexture.format===ci)bt(v)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,At,dt,Y,0,Pt):i.framebufferTexture2D(i.FRAMEBUFFER,At,dt,Y,0);else if(v.depthTexture.format===zi)bt(v)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,At,dt,Y,0,Pt):i.framebufferTexture2D(i.FRAMEBUFFER,At,dt,Y,0);else throw new Error("Unknown depthTexture format")}function Jt(C){const v=n.get(C),U=C.isWebGLCubeRenderTarget===!0;if(v.__boundDepthTexture!==C.depthTexture){const X=C.depthTexture;if(v.__depthDisposeCallback&&v.__depthDisposeCallback(),X){const j=()=>{delete v.__boundDepthTexture,delete v.__depthDisposeCallback,X.removeEventListener("dispose",j)};X.addEventListener("dispose",j),v.__depthDisposeCallback=j}v.__boundDepthTexture=X}if(C.depthTexture&&!v.__autoAllocateDepthBuffer)if(U)for(let X=0;X<6;X++)St(v.__webglFramebuffer[X],C,X);else{const X=C.texture.mipmaps;X&&X.length>0?St(v.__webglFramebuffer[0],C,0):St(v.__webglFramebuffer,C,0)}else if(U){v.__webglDepthbuffer=[];for(let X=0;X<6;X++)if(e.bindFramebuffer(i.FRAMEBUFFER,v.__webglFramebuffer[X]),v.__webglDepthbuffer[X]===void 0)v.__webglDepthbuffer[X]=i.createRenderbuffer(),Nt(v.__webglDepthbuffer[X],C,!1);else{const j=C.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,Y=v.__webglDepthbuffer[X];i.bindRenderbuffer(i.RENDERBUFFER,Y),i.framebufferRenderbuffer(i.FRAMEBUFFER,j,i.RENDERBUFFER,Y)}}else{const X=C.texture.mipmaps;if(X&&X.length>0?e.bindFramebuffer(i.FRAMEBUFFER,v.__webglFramebuffer[0]):e.bindFramebuffer(i.FRAMEBUFFER,v.__webglFramebuffer),v.__webglDepthbuffer===void 0)v.__webglDepthbuffer=i.createRenderbuffer(),Nt(v.__webglDepthbuffer,C,!1);else{const j=C.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,Y=v.__webglDepthbuffer;i.bindRenderbuffer(i.RENDERBUFFER,Y),i.framebufferRenderbuffer(i.FRAMEBUFFER,j,i.RENDERBUFFER,Y)}}e.bindFramebuffer(i.FRAMEBUFFER,null)}function re(C,v,U){const X=n.get(C);v!==void 0&&yt(X.__webglFramebuffer,C,C.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),U!==void 0&&Jt(C)}function Wt(C){const v=C.texture,U=n.get(C),X=n.get(v);C.addEventListener("dispose",T);const j=C.textures,Y=C.isWebGLCubeRenderTarget===!0,Pt=j.length>1;if(Pt||(X.__webglTexture===void 0&&(X.__webglTexture=i.createTexture()),X.__version=v.version,r.memory.textures++),Y){U.__webglFramebuffer=[];for(let dt=0;dt<6;dt++)if(v.mipmaps&&v.mipmaps.length>0){U.__webglFramebuffer[dt]=[];for(let At=0;At<v.mipmaps.length;At++)U.__webglFramebuffer[dt][At]=i.createFramebuffer()}else U.__webglFramebuffer[dt]=i.createFramebuffer()}else{if(v.mipmaps&&v.mipmaps.length>0){U.__webglFramebuffer=[];for(let dt=0;dt<v.mipmaps.length;dt++)U.__webglFramebuffer[dt]=i.createFramebuffer()}else U.__webglFramebuffer=i.createFramebuffer();if(Pt)for(let dt=0,At=j.length;dt<At;dt++){const zt=n.get(j[dt]);zt.__webglTexture===void 0&&(zt.__webglTexture=i.createTexture(),r.memory.textures++)}if(C.samples>0&&bt(C)===!1){U.__webglMultisampledFramebuffer=i.createFramebuffer(),U.__webglColorRenderbuffer=[],e.bindFramebuffer(i.FRAMEBUFFER,U.__webglMultisampledFramebuffer);for(let dt=0;dt<j.length;dt++){const At=j[dt];U.__webglColorRenderbuffer[dt]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,U.__webglColorRenderbuffer[dt]);const zt=a.convert(At.format,At.colorSpace),at=a.convert(At.type),mt=w(At.internalFormat,zt,at,At.colorSpace,C.isXRRenderTarget===!0),Rt=P(C);i.renderbufferStorageMultisample(i.RENDERBUFFER,Rt,mt,C.width,C.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+dt,i.RENDERBUFFER,U.__webglColorRenderbuffer[dt])}i.bindRenderbuffer(i.RENDERBUFFER,null),C.depthBuffer&&(U.__webglDepthRenderbuffer=i.createRenderbuffer(),Nt(U.__webglDepthRenderbuffer,C,!0)),e.bindFramebuffer(i.FRAMEBUFFER,null)}}if(Y){e.bindTexture(i.TEXTURE_CUBE_MAP,X.__webglTexture),Ht(i.TEXTURE_CUBE_MAP,v);for(let dt=0;dt<6;dt++)if(v.mipmaps&&v.mipmaps.length>0)for(let At=0;At<v.mipmaps.length;At++)yt(U.__webglFramebuffer[dt][At],C,v,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+dt,At);else yt(U.__webglFramebuffer[dt],C,v,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+dt,0);m(v)&&f(i.TEXTURE_CUBE_MAP),e.unbindTexture()}else if(Pt){for(let dt=0,At=j.length;dt<At;dt++){const zt=j[dt],at=n.get(zt);let mt=i.TEXTURE_2D;(C.isWebGL3DRenderTarget||C.isWebGLArrayRenderTarget)&&(mt=C.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),e.bindTexture(mt,at.__webglTexture),Ht(mt,zt),yt(U.__webglFramebuffer,C,zt,i.COLOR_ATTACHMENT0+dt,mt,0),m(zt)&&f(mt)}e.unbindTexture()}else{let dt=i.TEXTURE_2D;if((C.isWebGL3DRenderTarget||C.isWebGLArrayRenderTarget)&&(dt=C.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),e.bindTexture(dt,X.__webglTexture),Ht(dt,v),v.mipmaps&&v.mipmaps.length>0)for(let At=0;At<v.mipmaps.length;At++)yt(U.__webglFramebuffer[At],C,v,i.COLOR_ATTACHMENT0,dt,At);else yt(U.__webglFramebuffer,C,v,i.COLOR_ATTACHMENT0,dt,0);m(v)&&f(dt),e.unbindTexture()}C.depthBuffer&&Jt(C)}function $(C){const v=C.textures;for(let U=0,X=v.length;U<X;U++){const j=v[U];if(m(j)){const Y=S(C),Pt=n.get(j).__webglTexture;e.bindTexture(Y,Pt),f(Y),e.unbindTexture()}}}const it=[],J=[];function st(C){if(C.samples>0){if(bt(C)===!1){const v=C.textures,U=C.width,X=C.height;let j=i.COLOR_BUFFER_BIT;const Y=C.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,Pt=n.get(C),dt=v.length>1;if(dt)for(let zt=0;zt<v.length;zt++)e.bindFramebuffer(i.FRAMEBUFFER,Pt.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+zt,i.RENDERBUFFER,null),e.bindFramebuffer(i.FRAMEBUFFER,Pt.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+zt,i.TEXTURE_2D,null,0);e.bindFramebuffer(i.READ_FRAMEBUFFER,Pt.__webglMultisampledFramebuffer);const At=C.texture.mipmaps;At&&At.length>0?e.bindFramebuffer(i.DRAW_FRAMEBUFFER,Pt.__webglFramebuffer[0]):e.bindFramebuffer(i.DRAW_FRAMEBUFFER,Pt.__webglFramebuffer);for(let zt=0;zt<v.length;zt++){if(C.resolveDepthBuffer&&(C.depthBuffer&&(j|=i.DEPTH_BUFFER_BIT),C.stencilBuffer&&C.resolveStencilBuffer&&(j|=i.STENCIL_BUFFER_BIT)),dt){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,Pt.__webglColorRenderbuffer[zt]);const at=n.get(v[zt]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,at,0)}i.blitFramebuffer(0,0,U,X,0,0,U,X,j,i.NEAREST),l===!0&&(it.length=0,J.length=0,it.push(i.COLOR_ATTACHMENT0+zt),C.depthBuffer&&C.resolveDepthBuffer===!1&&(it.push(Y),J.push(Y),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,J)),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,it))}if(e.bindFramebuffer(i.READ_FRAMEBUFFER,null),e.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),dt)for(let zt=0;zt<v.length;zt++){e.bindFramebuffer(i.FRAMEBUFFER,Pt.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+zt,i.RENDERBUFFER,Pt.__webglColorRenderbuffer[zt]);const at=n.get(v[zt]).__webglTexture;e.bindFramebuffer(i.FRAMEBUFFER,Pt.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+zt,i.TEXTURE_2D,at,0)}e.bindFramebuffer(i.DRAW_FRAMEBUFFER,Pt.__webglMultisampledFramebuffer)}else if(C.depthBuffer&&C.resolveDepthBuffer===!1&&l){const v=C.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[v])}}}function P(C){return Math.min(s.maxSamples,C.samples)}function bt(C){const v=n.get(C);return C.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&v.__useRenderToTexture!==!1}function xt(C){const v=r.render.frame;h.get(C)!==v&&(h.set(C,v),C.update())}function Dt(C,v){const U=C.colorSpace,X=C.format,j=C.type;return C.isCompressedTexture===!0||C.isVideoTexture===!0||U!==ys&&U!==vi&&(te.getTransfer(U)===ue?(X!==Un||j!==fn)&&Ft("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):Qt("WebGLTextures: Unsupported texture color space:",U)),v}function ht(C){return typeof HTMLImageElement<"u"&&C instanceof HTMLImageElement?(c.width=C.naturalWidth||C.width,c.height=C.naturalHeight||C.height):typeof VideoFrame<"u"&&C instanceof VideoFrame?(c.width=C.displayWidth,c.height=C.displayHeight):(c.width=C.width,c.height=C.height),c}this.allocateTextureUnit=L,this.resetTextureUnits=I,this.setTexture2D=O,this.setTexture2DArray=G,this.setTexture3D=z,this.setTextureCube=Z,this.rebindTextures=re,this.setupRenderTarget=Wt,this.updateRenderTargetMipmap=$,this.updateMultisampleRenderTarget=st,this.setupDepthRenderbuffer=Jt,this.setupFrameBufferTexture=yt,this.useMultisampledRTT=bt,this.isReversedDepthBuffer=function(){return e.buffers.depth.getReversed()}}function Lx(i,t){function e(n,s=vi){let a;const r=te.getTransfer(s);if(n===fn)return i.UNSIGNED_BYTE;if(n===vl)return i.UNSIGNED_SHORT_4_4_4_4;if(n===Ml)return i.UNSIGNED_SHORT_5_5_5_1;if(n===yh)return i.UNSIGNED_INT_5_9_9_9_REV;if(n===Sh)return i.UNSIGNED_INT_10F_11F_11F_REV;if(n===vh)return i.BYTE;if(n===Mh)return i.SHORT;if(n===Js)return i.UNSIGNED_SHORT;if(n===_l)return i.INT;if(n===qn)return i.UNSIGNED_INT;if(n===Nn)return i.FLOAT;if(n===li)return i.HALF_FLOAT;if(n===wh)return i.ALPHA;if(n===bh)return i.RGB;if(n===Un)return i.RGBA;if(n===ci)return i.DEPTH_COMPONENT;if(n===zi)return i.DEPTH_STENCIL;if(n===yl)return i.RED;if(n===Sl)return i.RED_INTEGER;if(n===Ms)return i.RG;if(n===wl)return i.RG_INTEGER;if(n===bl)return i.RGBA_INTEGER;if(n===Ga||n===Va||n===Wa||n===Xa)if(r===ue)if(a=t.get("WEBGL_compressed_texture_s3tc_srgb"),a!==null){if(n===Ga)return a.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===Va)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===Wa)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===Xa)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(a=t.get("WEBGL_compressed_texture_s3tc"),a!==null){if(n===Ga)return a.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===Va)return a.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===Wa)return a.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===Xa)return a.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===So||n===wo||n===bo||n===Eo)if(a=t.get("WEBGL_compressed_texture_pvrtc"),a!==null){if(n===So)return a.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===wo)return a.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===bo)return a.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===Eo)return a.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===To||n===Co||n===Ao||n===Ro||n===Po||n===Io||n===Lo)if(a=t.get("WEBGL_compressed_texture_etc"),a!==null){if(n===To||n===Co)return r===ue?a.COMPRESSED_SRGB8_ETC2:a.COMPRESSED_RGB8_ETC2;if(n===Ao)return r===ue?a.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:a.COMPRESSED_RGBA8_ETC2_EAC;if(n===Ro)return a.COMPRESSED_R11_EAC;if(n===Po)return a.COMPRESSED_SIGNED_R11_EAC;if(n===Io)return a.COMPRESSED_RG11_EAC;if(n===Lo)return a.COMPRESSED_SIGNED_RG11_EAC}else return null;if(n===Do||n===Fo||n===No||n===Uo||n===Oo||n===Bo||n===ko||n===zo||n===Ho||n===Go||n===Vo||n===Wo||n===Xo||n===Yo)if(a=t.get("WEBGL_compressed_texture_astc"),a!==null){if(n===Do)return r===ue?a.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:a.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===Fo)return r===ue?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:a.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===No)return r===ue?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:a.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===Uo)return r===ue?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:a.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===Oo)return r===ue?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:a.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===Bo)return r===ue?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:a.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===ko)return r===ue?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:a.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===zo)return r===ue?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:a.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===Ho)return r===ue?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:a.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===Go)return r===ue?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:a.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===Vo)return r===ue?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:a.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===Wo)return r===ue?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:a.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===Xo)return r===ue?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:a.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===Yo)return r===ue?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:a.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===qo||n===Zo||n===$o)if(a=t.get("EXT_texture_compression_bptc"),a!==null){if(n===qo)return r===ue?a.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:a.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===Zo)return a.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===$o)return a.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===Ko||n===Jo||n===jo||n===Qo)if(a=t.get("EXT_texture_compression_rgtc"),a!==null){if(n===Ko)return a.COMPRESSED_RED_RGTC1_EXT;if(n===Jo)return a.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===jo)return a.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===Qo)return a.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===js?i.UNSIGNED_INT_24_8:i[n]!==void 0?i[n]:null}return{convert:e}}const Dx=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,Fx=`
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

}`;class Nx{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e){if(this.texture===null){const n=new Bh(t.texture);(t.depthNear!==e.depthNear||t.depthFar!==e.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=n}}getMesh(t){if(this.texture!==null&&this.mesh===null){const e=t.cameras[0].viewport,n=new En({vertexShader:Dx,fragmentShader:Fx,uniforms:{depthColor:{value:this.texture},depthWidth:{value:e.z},depthHeight:{value:e.w}}});this.mesh=new nt(new Ts(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class Ux extends Es{constructor(t,e){super();const n=this;let s=null,a=1,r=null,o="local-floor",l=1,c=null,h=null,u=null,d=null,p=null,g=null;const _=typeof XRWebGLBinding<"u",m=new Nx,f={},S=e.getContextAttributes();let w=null,y=null;const E=[],R=[],T=new ut;let D=null;const x=new Mn;x.viewport=new Ee;const M=new Mn;M.viewport=new Ee;const A=[x,M],I=new Wf;let L=null,B=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(q){let tt=E[q];return tt===void 0&&(tt=new zr,E[q]=tt),tt.getTargetRaySpace()},this.getControllerGrip=function(q){let tt=E[q];return tt===void 0&&(tt=new zr,E[q]=tt),tt.getGripSpace()},this.getHand=function(q){let tt=E[q];return tt===void 0&&(tt=new zr,E[q]=tt),tt.getHandSpace()};function O(q){const tt=R.indexOf(q.inputSource);if(tt===-1)return;const yt=E[tt];yt!==void 0&&(yt.update(q.inputSource,q.frame,c||r),yt.dispatchEvent({type:q.type,data:q.inputSource}))}function G(){s.removeEventListener("select",O),s.removeEventListener("selectstart",O),s.removeEventListener("selectend",O),s.removeEventListener("squeeze",O),s.removeEventListener("squeezestart",O),s.removeEventListener("squeezeend",O),s.removeEventListener("end",G),s.removeEventListener("inputsourceschange",z);for(let q=0;q<E.length;q++){const tt=R[q];tt!==null&&(R[q]=null,E[q].disconnect(tt))}L=null,B=null,m.reset();for(const q in f)delete f[q];t.setRenderTarget(w),p=null,d=null,u=null,s=null,y=null,ee.stop(),n.isPresenting=!1,t.setPixelRatio(D),t.setSize(T.width,T.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(q){a=q,n.isPresenting===!0&&Ft("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(q){o=q,n.isPresenting===!0&&Ft("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||r},this.setReferenceSpace=function(q){c=q},this.getBaseLayer=function(){return d!==null?d:p},this.getBinding=function(){return u===null&&_&&(u=new XRWebGLBinding(s,e)),u},this.getFrame=function(){return g},this.getSession=function(){return s},this.setSession=async function(q){if(s=q,s!==null){if(w=t.getRenderTarget(),s.addEventListener("select",O),s.addEventListener("selectstart",O),s.addEventListener("selectend",O),s.addEventListener("squeeze",O),s.addEventListener("squeezestart",O),s.addEventListener("squeezeend",O),s.addEventListener("end",G),s.addEventListener("inputsourceschange",z),S.xrCompatible!==!0&&await e.makeXRCompatible(),D=t.getPixelRatio(),t.getSize(T),_&&"createProjectionLayer"in XRWebGLBinding.prototype){let yt=null,Nt=null,St=null;S.depth&&(St=S.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,yt=S.stencil?zi:ci,Nt=S.stencil?js:qn);const Jt={colorFormat:e.RGBA8,depthFormat:St,scaleFactor:a};u=this.getBinding(),d=u.createProjectionLayer(Jt),s.updateRenderState({layers:[d]}),t.setPixelRatio(1),t.setSize(d.textureWidth,d.textureHeight,!1),y=new Yn(d.textureWidth,d.textureHeight,{format:Un,type:fn,depthTexture:new ea(d.textureWidth,d.textureHeight,Nt,void 0,void 0,void 0,void 0,void 0,void 0,yt),stencilBuffer:S.stencil,colorSpace:t.outputColorSpace,samples:S.antialias?4:0,resolveDepthBuffer:d.ignoreDepthValues===!1,resolveStencilBuffer:d.ignoreDepthValues===!1})}else{const yt={antialias:S.antialias,alpha:!0,depth:S.depth,stencil:S.stencil,framebufferScaleFactor:a};p=new XRWebGLLayer(s,e,yt),s.updateRenderState({baseLayer:p}),t.setPixelRatio(1),t.setSize(p.framebufferWidth,p.framebufferHeight,!1),y=new Yn(p.framebufferWidth,p.framebufferHeight,{format:Un,type:fn,colorSpace:t.outputColorSpace,stencilBuffer:S.stencil,resolveDepthBuffer:p.ignoreDepthValues===!1,resolveStencilBuffer:p.ignoreDepthValues===!1})}y.isXRRenderTarget=!0,this.setFoveation(l),c=null,r=await s.requestReferenceSpace(o),ee.setContext(s),ee.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return m.getDepthTexture()};function z(q){for(let tt=0;tt<q.removed.length;tt++){const yt=q.removed[tt],Nt=R.indexOf(yt);Nt>=0&&(R[Nt]=null,E[Nt].disconnect(yt))}for(let tt=0;tt<q.added.length;tt++){const yt=q.added[tt];let Nt=R.indexOf(yt);if(Nt===-1){for(let Jt=0;Jt<E.length;Jt++)if(Jt>=R.length){R.push(yt),Nt=Jt;break}else if(R[Jt]===null){R[Jt]=yt,Nt=Jt;break}if(Nt===-1)break}const St=E[Nt];St&&St.connect(yt)}}const Z=new F,lt=new F;function et(q,tt,yt){Z.setFromMatrixPosition(tt.matrixWorld),lt.setFromMatrixPosition(yt.matrixWorld);const Nt=Z.distanceTo(lt),St=tt.projectionMatrix.elements,Jt=yt.projectionMatrix.elements,re=St[14]/(St[10]-1),Wt=St[14]/(St[10]+1),$=(St[9]+1)/St[5],it=(St[9]-1)/St[5],J=(St[8]-1)/St[0],st=(Jt[8]+1)/Jt[0],P=re*J,bt=re*st,xt=Nt/(-J+st),Dt=xt*-J;if(tt.matrixWorld.decompose(q.position,q.quaternion,q.scale),q.translateX(Dt),q.translateZ(xt),q.matrixWorld.compose(q.position,q.quaternion,q.scale),q.matrixWorldInverse.copy(q.matrixWorld).invert(),St[10]===-1)q.projectionMatrix.copy(tt.projectionMatrix),q.projectionMatrixInverse.copy(tt.projectionMatrixInverse);else{const ht=re+xt,C=Wt+xt,v=P-Dt,U=bt+(Nt-Dt),X=$*Wt/C*ht,j=it*Wt/C*ht;q.projectionMatrix.makePerspective(v,U,X,j,ht,C),q.projectionMatrixInverse.copy(q.projectionMatrix).invert()}}function rt(q,tt){tt===null?q.matrixWorld.copy(q.matrix):q.matrixWorld.multiplyMatrices(tt.matrixWorld,q.matrix),q.matrixWorldInverse.copy(q.matrixWorld).invert()}this.updateCamera=function(q){if(s===null)return;let tt=q.near,yt=q.far;m.texture!==null&&(m.depthNear>0&&(tt=m.depthNear),m.depthFar>0&&(yt=m.depthFar)),I.near=M.near=x.near=tt,I.far=M.far=x.far=yt,(L!==I.near||B!==I.far)&&(s.updateRenderState({depthNear:I.near,depthFar:I.far}),L=I.near,B=I.far),I.layers.mask=q.layers.mask|6,x.layers.mask=I.layers.mask&3,M.layers.mask=I.layers.mask&5;const Nt=q.parent,St=I.cameras;rt(I,Nt);for(let Jt=0;Jt<St.length;Jt++)rt(St[Jt],Nt);St.length===2?et(I,x,M):I.projectionMatrix.copy(x.projectionMatrix),Ht(q,I,Nt)};function Ht(q,tt,yt){yt===null?q.matrix.copy(tt.matrixWorld):(q.matrix.copy(yt.matrixWorld),q.matrix.invert(),q.matrix.multiply(tt.matrixWorld)),q.matrix.decompose(q.position,q.quaternion,q.scale),q.updateMatrixWorld(!0),q.projectionMatrix.copy(tt.projectionMatrix),q.projectionMatrixInverse.copy(tt.projectionMatrixInverse),q.isPerspectiveCamera&&(q.fov=ta*2*Math.atan(1/q.projectionMatrix.elements[5]),q.zoom=1)}this.getCamera=function(){return I},this.getFoveation=function(){if(!(d===null&&p===null))return l},this.setFoveation=function(q){l=q,d!==null&&(d.fixedFoveation=q),p!==null&&p.fixedFoveation!==void 0&&(p.fixedFoveation=q)},this.hasDepthSensing=function(){return m.texture!==null},this.getDepthSensingMesh=function(){return m.getMesh(I)},this.getCameraTexture=function(q){return f[q]};let kt=null;function ae(q,tt){if(h=tt.getViewerPose(c||r),g=tt,h!==null){const yt=h.views;p!==null&&(t.setRenderTargetFramebuffer(y,p.framebuffer),t.setRenderTarget(y));let Nt=!1;yt.length!==I.cameras.length&&(I.cameras.length=0,Nt=!0);for(let Wt=0;Wt<yt.length;Wt++){const $=yt[Wt];let it=null;if(p!==null)it=p.getViewport($);else{const st=u.getViewSubImage(d,$);it=st.viewport,Wt===0&&(t.setRenderTargetTextures(y,st.colorTexture,st.depthStencilTexture),t.setRenderTarget(y))}let J=A[Wt];J===void 0&&(J=new Mn,J.layers.enable(Wt),J.viewport=new Ee,A[Wt]=J),J.matrix.fromArray($.transform.matrix),J.matrix.decompose(J.position,J.quaternion,J.scale),J.projectionMatrix.fromArray($.projectionMatrix),J.projectionMatrixInverse.copy(J.projectionMatrix).invert(),J.viewport.set(it.x,it.y,it.width,it.height),Wt===0&&(I.matrix.copy(J.matrix),I.matrix.decompose(I.position,I.quaternion,I.scale)),Nt===!0&&I.cameras.push(J)}const St=s.enabledFeatures;if(St&&St.includes("depth-sensing")&&s.depthUsage=="gpu-optimized"&&_){u=n.getBinding();const Wt=u.getDepthInformation(yt[0]);Wt&&Wt.isValid&&Wt.texture&&m.init(Wt,s.renderState)}if(St&&St.includes("camera-access")&&_){t.state.unbindTexture(),u=n.getBinding();for(let Wt=0;Wt<yt.length;Wt++){const $=yt[Wt].camera;if($){let it=f[$];it||(it=new Bh,f[$]=it);const J=u.getCameraImage($);it.sourceTexture=J}}}}for(let yt=0;yt<E.length;yt++){const Nt=R[yt],St=E[yt];Nt!==null&&St!==void 0&&St.update(Nt,tt,c||r)}kt&&kt(q,tt),tt.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:tt}),g=null}const ee=new Kh;ee.setAnimationLoop(ae),this.setAnimationLoop=function(q){kt=q},this.dispose=function(){}}}const Ni=new Be,Ox=new jt;function Bx(i,t){function e(m,f){m.matrixAutoUpdate===!0&&m.updateMatrix(),f.value.copy(m.matrix)}function n(m,f){f.color.getRGB(m.fogColor.value,Ih(i)),f.isFog?(m.fogNear.value=f.near,m.fogFar.value=f.far):f.isFogExp2&&(m.fogDensity.value=f.density)}function s(m,f,S,w,y){f.isMeshBasicMaterial||f.isMeshLambertMaterial?a(m,f):f.isMeshToonMaterial?(a(m,f),u(m,f)):f.isMeshPhongMaterial?(a(m,f),h(m,f)):f.isMeshStandardMaterial?(a(m,f),d(m,f),f.isMeshPhysicalMaterial&&p(m,f,y)):f.isMeshMatcapMaterial?(a(m,f),g(m,f)):f.isMeshDepthMaterial?a(m,f):f.isMeshDistanceMaterial?(a(m,f),_(m,f)):f.isMeshNormalMaterial?a(m,f):f.isLineBasicMaterial?(r(m,f),f.isLineDashedMaterial&&o(m,f)):f.isPointsMaterial?l(m,f,S,w):f.isSpriteMaterial?c(m,f):f.isShadowMaterial?(m.color.value.copy(f.color),m.opacity.value=f.opacity):f.isShaderMaterial&&(f.uniformsNeedUpdate=!1)}function a(m,f){m.opacity.value=f.opacity,f.color&&m.diffuse.value.copy(f.color),f.emissive&&m.emissive.value.copy(f.emissive).multiplyScalar(f.emissiveIntensity),f.map&&(m.map.value=f.map,e(f.map,m.mapTransform)),f.alphaMap&&(m.alphaMap.value=f.alphaMap,e(f.alphaMap,m.alphaMapTransform)),f.bumpMap&&(m.bumpMap.value=f.bumpMap,e(f.bumpMap,m.bumpMapTransform),m.bumpScale.value=f.bumpScale,f.side===an&&(m.bumpScale.value*=-1)),f.normalMap&&(m.normalMap.value=f.normalMap,e(f.normalMap,m.normalMapTransform),m.normalScale.value.copy(f.normalScale),f.side===an&&m.normalScale.value.negate()),f.displacementMap&&(m.displacementMap.value=f.displacementMap,e(f.displacementMap,m.displacementMapTransform),m.displacementScale.value=f.displacementScale,m.displacementBias.value=f.displacementBias),f.emissiveMap&&(m.emissiveMap.value=f.emissiveMap,e(f.emissiveMap,m.emissiveMapTransform)),f.specularMap&&(m.specularMap.value=f.specularMap,e(f.specularMap,m.specularMapTransform)),f.alphaTest>0&&(m.alphaTest.value=f.alphaTest);const S=t.get(f),w=S.envMap,y=S.envMapRotation;w&&(m.envMap.value=w,Ni.copy(y),Ni.x*=-1,Ni.y*=-1,Ni.z*=-1,w.isCubeTexture&&w.isRenderTargetTexture===!1&&(Ni.y*=-1,Ni.z*=-1),m.envMapRotation.value.setFromMatrix4(Ox.makeRotationFromEuler(Ni)),m.flipEnvMap.value=w.isCubeTexture&&w.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=f.reflectivity,m.ior.value=f.ior,m.refractionRatio.value=f.refractionRatio),f.lightMap&&(m.lightMap.value=f.lightMap,m.lightMapIntensity.value=f.lightMapIntensity,e(f.lightMap,m.lightMapTransform)),f.aoMap&&(m.aoMap.value=f.aoMap,m.aoMapIntensity.value=f.aoMapIntensity,e(f.aoMap,m.aoMapTransform))}function r(m,f){m.diffuse.value.copy(f.color),m.opacity.value=f.opacity,f.map&&(m.map.value=f.map,e(f.map,m.mapTransform))}function o(m,f){m.dashSize.value=f.dashSize,m.totalSize.value=f.dashSize+f.gapSize,m.scale.value=f.scale}function l(m,f,S,w){m.diffuse.value.copy(f.color),m.opacity.value=f.opacity,m.size.value=f.size*S,m.scale.value=w*.5,f.map&&(m.map.value=f.map,e(f.map,m.uvTransform)),f.alphaMap&&(m.alphaMap.value=f.alphaMap,e(f.alphaMap,m.alphaMapTransform)),f.alphaTest>0&&(m.alphaTest.value=f.alphaTest)}function c(m,f){m.diffuse.value.copy(f.color),m.opacity.value=f.opacity,m.rotation.value=f.rotation,f.map&&(m.map.value=f.map,e(f.map,m.mapTransform)),f.alphaMap&&(m.alphaMap.value=f.alphaMap,e(f.alphaMap,m.alphaMapTransform)),f.alphaTest>0&&(m.alphaTest.value=f.alphaTest)}function h(m,f){m.specular.value.copy(f.specular),m.shininess.value=Math.max(f.shininess,1e-4)}function u(m,f){f.gradientMap&&(m.gradientMap.value=f.gradientMap)}function d(m,f){m.metalness.value=f.metalness,f.metalnessMap&&(m.metalnessMap.value=f.metalnessMap,e(f.metalnessMap,m.metalnessMapTransform)),m.roughness.value=f.roughness,f.roughnessMap&&(m.roughnessMap.value=f.roughnessMap,e(f.roughnessMap,m.roughnessMapTransform)),f.envMap&&(m.envMapIntensity.value=f.envMapIntensity)}function p(m,f,S){m.ior.value=f.ior,f.sheen>0&&(m.sheenColor.value.copy(f.sheenColor).multiplyScalar(f.sheen),m.sheenRoughness.value=f.sheenRoughness,f.sheenColorMap&&(m.sheenColorMap.value=f.sheenColorMap,e(f.sheenColorMap,m.sheenColorMapTransform)),f.sheenRoughnessMap&&(m.sheenRoughnessMap.value=f.sheenRoughnessMap,e(f.sheenRoughnessMap,m.sheenRoughnessMapTransform))),f.clearcoat>0&&(m.clearcoat.value=f.clearcoat,m.clearcoatRoughness.value=f.clearcoatRoughness,f.clearcoatMap&&(m.clearcoatMap.value=f.clearcoatMap,e(f.clearcoatMap,m.clearcoatMapTransform)),f.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=f.clearcoatRoughnessMap,e(f.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),f.clearcoatNormalMap&&(m.clearcoatNormalMap.value=f.clearcoatNormalMap,e(f.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(f.clearcoatNormalScale),f.side===an&&m.clearcoatNormalScale.value.negate())),f.dispersion>0&&(m.dispersion.value=f.dispersion),f.iridescence>0&&(m.iridescence.value=f.iridescence,m.iridescenceIOR.value=f.iridescenceIOR,m.iridescenceThicknessMinimum.value=f.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=f.iridescenceThicknessRange[1],f.iridescenceMap&&(m.iridescenceMap.value=f.iridescenceMap,e(f.iridescenceMap,m.iridescenceMapTransform)),f.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=f.iridescenceThicknessMap,e(f.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),f.transmission>0&&(m.transmission.value=f.transmission,m.transmissionSamplerMap.value=S.texture,m.transmissionSamplerSize.value.set(S.width,S.height),f.transmissionMap&&(m.transmissionMap.value=f.transmissionMap,e(f.transmissionMap,m.transmissionMapTransform)),m.thickness.value=f.thickness,f.thicknessMap&&(m.thicknessMap.value=f.thicknessMap,e(f.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=f.attenuationDistance,m.attenuationColor.value.copy(f.attenuationColor)),f.anisotropy>0&&(m.anisotropyVector.value.set(f.anisotropy*Math.cos(f.anisotropyRotation),f.anisotropy*Math.sin(f.anisotropyRotation)),f.anisotropyMap&&(m.anisotropyMap.value=f.anisotropyMap,e(f.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=f.specularIntensity,m.specularColor.value.copy(f.specularColor),f.specularColorMap&&(m.specularColorMap.value=f.specularColorMap,e(f.specularColorMap,m.specularColorMapTransform)),f.specularIntensityMap&&(m.specularIntensityMap.value=f.specularIntensityMap,e(f.specularIntensityMap,m.specularIntensityMapTransform))}function g(m,f){f.matcap&&(m.matcap.value=f.matcap)}function _(m,f){const S=t.get(f).light;m.referencePosition.value.setFromMatrixPosition(S.matrixWorld),m.nearDistance.value=S.shadow.camera.near,m.farDistance.value=S.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:s}}function kx(i,t,e,n){let s={},a={},r=[];const o=i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS);function l(S,w){const y=w.program;n.uniformBlockBinding(S,y)}function c(S,w){let y=s[S.id];y===void 0&&(g(S),y=h(S),s[S.id]=y,S.addEventListener("dispose",m));const E=w.program;n.updateUBOMapping(S,E);const R=t.render.frame;a[S.id]!==R&&(d(S),a[S.id]=R)}function h(S){const w=u();S.__bindingPointIndex=w;const y=i.createBuffer(),E=S.__size,R=S.usage;return i.bindBuffer(i.UNIFORM_BUFFER,y),i.bufferData(i.UNIFORM_BUFFER,E,R),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,w,y),y}function u(){for(let S=0;S<o;S++)if(r.indexOf(S)===-1)return r.push(S),S;return Qt("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function d(S){const w=s[S.id],y=S.uniforms,E=S.__cache;i.bindBuffer(i.UNIFORM_BUFFER,w);for(let R=0,T=y.length;R<T;R++){const D=Array.isArray(y[R])?y[R]:[y[R]];for(let x=0,M=D.length;x<M;x++){const A=D[x];if(p(A,R,x,E)===!0){const I=A.__offset,L=Array.isArray(A.value)?A.value:[A.value];let B=0;for(let O=0;O<L.length;O++){const G=L[O],z=_(G);typeof G=="number"||typeof G=="boolean"?(A.__data[0]=G,i.bufferSubData(i.UNIFORM_BUFFER,I+B,A.__data)):G.isMatrix3?(A.__data[0]=G.elements[0],A.__data[1]=G.elements[1],A.__data[2]=G.elements[2],A.__data[3]=0,A.__data[4]=G.elements[3],A.__data[5]=G.elements[4],A.__data[6]=G.elements[5],A.__data[7]=0,A.__data[8]=G.elements[6],A.__data[9]=G.elements[7],A.__data[10]=G.elements[8],A.__data[11]=0):(G.toArray(A.__data,B),B+=z.storage/Float32Array.BYTES_PER_ELEMENT)}i.bufferSubData(i.UNIFORM_BUFFER,I,A.__data)}}}i.bindBuffer(i.UNIFORM_BUFFER,null)}function p(S,w,y,E){const R=S.value,T=w+"_"+y;if(E[T]===void 0)return typeof R=="number"||typeof R=="boolean"?E[T]=R:E[T]=R.clone(),!0;{const D=E[T];if(typeof R=="number"||typeof R=="boolean"){if(D!==R)return E[T]=R,!0}else if(D.equals(R)===!1)return D.copy(R),!0}return!1}function g(S){const w=S.uniforms;let y=0;const E=16;for(let T=0,D=w.length;T<D;T++){const x=Array.isArray(w[T])?w[T]:[w[T]];for(let M=0,A=x.length;M<A;M++){const I=x[M],L=Array.isArray(I.value)?I.value:[I.value];for(let B=0,O=L.length;B<O;B++){const G=L[B],z=_(G),Z=y%E,lt=Z%z.boundary,et=Z+lt;y+=lt,et!==0&&E-et<z.storage&&(y+=E-et),I.__data=new Float32Array(z.storage/Float32Array.BYTES_PER_ELEMENT),I.__offset=y,y+=z.storage}}}const R=y%E;return R>0&&(y+=E-R),S.__size=y,S.__cache={},this}function _(S){const w={boundary:0,storage:0};return typeof S=="number"||typeof S=="boolean"?(w.boundary=4,w.storage=4):S.isVector2?(w.boundary=8,w.storage=8):S.isVector3||S.isColor?(w.boundary=16,w.storage=12):S.isVector4?(w.boundary=16,w.storage=16):S.isMatrix3?(w.boundary=48,w.storage=48):S.isMatrix4?(w.boundary=64,w.storage=64):S.isTexture?Ft("WebGLRenderer: Texture samplers can not be part of an uniforms group."):Ft("WebGLRenderer: Unsupported uniform value type.",S),w}function m(S){const w=S.target;w.removeEventListener("dispose",m);const y=r.indexOf(w.__bindingPointIndex);r.splice(y,1),i.deleteBuffer(s[w.id]),delete s[w.id],delete a[w.id]}function f(){for(const S in s)i.deleteBuffer(s[S]);r=[],s={},a={}}return{bind:l,update:c,dispose:f}}const zx=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]);let Bn=null;function Hx(){return Bn===null&&(Bn=new Uh(zx,16,16,Ms,li),Bn.name="DFG_LUT",Bn.minFilter=Ge,Bn.magFilter=Ge,Bn.wrapS=ni,Bn.wrapT=ni,Bn.generateMipmaps=!1,Bn.needsUpdate=!0),Bn}class Gx{constructor(t={}){const{canvas:e=nd(),context:n=null,depth:s=!0,stencil:a=!1,alpha:r=!1,antialias:o=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:u=!1,reversedDepthBuffer:d=!1,outputBufferType:p=fn}=t;this.isWebGLRenderer=!0;let g;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");g=n.getContextAttributes().alpha}else g=r;const _=p,m=new Set([bl,wl,Sl]),f=new Set([fn,qn,Js,js,vl,Ml]),S=new Uint32Array(4),w=new Int32Array(4);let y=null,E=null;const R=[],T=[];let D=null;this.domElement=e,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=Wn,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const x=this;let M=!1;this._outputColorSpace=xn;let A=0,I=0,L=null,B=-1,O=null;const G=new Ee,z=new Ee;let Z=null;const lt=new Ut(0);let et=0,rt=e.width,Ht=e.height,kt=1,ae=null,ee=null;const q=new Ee(0,0,rt,Ht),tt=new Ee(0,0,rt,Ht);let yt=!1;const Nt=new Rl;let St=!1,Jt=!1;const re=new jt,Wt=new F,$=new Ee,it={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let J=!1;function st(){return L===null?kt:1}let P=n;function bt(b,k){return e.getContext(b,k)}try{const b={alpha:!0,depth:s,stencil:a,antialias:o,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:h,failIfMajorPerformanceCaveat:u};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${xl}`),e.addEventListener("webglcontextlost",Xt,!1),e.addEventListener("webglcontextrestored",ge,!1),e.addEventListener("webglcontextcreationerror",ce,!1),P===null){const k="webgl2";if(P=bt(k,b),P===null)throw bt(k)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(b){throw Qt("WebGLRenderer: "+b.message),b}let xt,Dt,ht,C,v,U,X,j,Y,Pt,dt,At,zt,at,mt,Rt,It,pt,Zt,N,Mt,ct,wt,ot;function Q(){xt=new H0(P),xt.init(),ct=new Lx(P,xt),Dt=new L0(P,xt,t,ct),ht=new Px(P,xt),Dt.reversedDepthBuffer&&d&&ht.buffers.depth.setReversed(!0),C=new W0(P),v=new mx,U=new Ix(P,xt,ht,v,Dt,ct,C),X=new F0(x),j=new z0(x),Y=new Zf(P),wt=new P0(P,Y),Pt=new G0(P,Y,C,wt),dt=new Y0(P,Pt,Y,C),Zt=new X0(P,Dt,U),Rt=new D0(v),At=new px(x,X,j,xt,Dt,wt,Rt),zt=new Bx(x,v),at=new xx,mt=new wx(xt),pt=new R0(x,X,j,ht,dt,g,l),It=new Ax(x,dt,Dt),ot=new kx(P,C,Dt,ht),N=new I0(P,xt,C),Mt=new V0(P,xt,C),C.programs=At.programs,x.capabilities=Dt,x.extensions=xt,x.properties=v,x.renderLists=at,x.shadowMap=It,x.state=ht,x.info=C}Q(),_!==fn&&(D=new Z0(_,e.width,e.height,s,a));const ft=new Ux(x,P);this.xr=ft,this.getContext=function(){return P},this.getContextAttributes=function(){return P.getContextAttributes()},this.forceContextLoss=function(){const b=xt.get("WEBGL_lose_context");b&&b.loseContext()},this.forceContextRestore=function(){const b=xt.get("WEBGL_lose_context");b&&b.restoreContext()},this.getPixelRatio=function(){return kt},this.setPixelRatio=function(b){b!==void 0&&(kt=b,this.setSize(rt,Ht,!1))},this.getSize=function(b){return b.set(rt,Ht)},this.setSize=function(b,k,W=!0){if(ft.isPresenting){Ft("WebGLRenderer: Can't change size while VR device is presenting.");return}rt=b,Ht=k,e.width=Math.floor(b*kt),e.height=Math.floor(k*kt),W===!0&&(e.style.width=b+"px",e.style.height=k+"px"),D!==null&&D.setSize(e.width,e.height),this.setViewport(0,0,b,k)},this.getDrawingBufferSize=function(b){return b.set(rt*kt,Ht*kt).floor()},this.setDrawingBufferSize=function(b,k,W){rt=b,Ht=k,kt=W,e.width=Math.floor(b*W),e.height=Math.floor(k*W),this.setViewport(0,0,b,k)},this.setEffects=function(b){if(_===fn){console.error("THREE.WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(b){for(let k=0;k<b.length;k++)if(b[k].isOutputPass===!0){console.warn("THREE.WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}D.setEffects(b||[])},this.getCurrentViewport=function(b){return b.copy(G)},this.getViewport=function(b){return b.copy(q)},this.setViewport=function(b,k,W,V){b.isVector4?q.set(b.x,b.y,b.z,b.w):q.set(b,k,W,V),ht.viewport(G.copy(q).multiplyScalar(kt).round())},this.getScissor=function(b){return b.copy(tt)},this.setScissor=function(b,k,W,V){b.isVector4?tt.set(b.x,b.y,b.z,b.w):tt.set(b,k,W,V),ht.scissor(z.copy(tt).multiplyScalar(kt).round())},this.getScissorTest=function(){return yt},this.setScissorTest=function(b){ht.setScissorTest(yt=b)},this.setOpaqueSort=function(b){ae=b},this.setTransparentSort=function(b){ee=b},this.getClearColor=function(b){return b.copy(pt.getClearColor())},this.setClearColor=function(){pt.setClearColor(...arguments)},this.getClearAlpha=function(){return pt.getClearAlpha()},this.setClearAlpha=function(){pt.setClearAlpha(...arguments)},this.clear=function(b=!0,k=!0,W=!0){let V=0;if(b){let H=!1;if(L!==null){const gt=L.texture.format;H=m.has(gt)}if(H){const gt=L.texture.type,Et=f.has(gt),vt=pt.getClearColor(),Ct=pt.getClearAlpha(),Lt=vt.r,Vt=vt.g,Ot=vt.b;Et?(S[0]=Lt,S[1]=Vt,S[2]=Ot,S[3]=Ct,P.clearBufferuiv(P.COLOR,0,S)):(w[0]=Lt,w[1]=Vt,w[2]=Ot,w[3]=Ct,P.clearBufferiv(P.COLOR,0,w))}else V|=P.COLOR_BUFFER_BIT}k&&(V|=P.DEPTH_BUFFER_BIT),W&&(V|=P.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),P.clear(V)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){e.removeEventListener("webglcontextlost",Xt,!1),e.removeEventListener("webglcontextrestored",ge,!1),e.removeEventListener("webglcontextcreationerror",ce,!1),pt.dispose(),at.dispose(),mt.dispose(),v.dispose(),X.dispose(),j.dispose(),dt.dispose(),wt.dispose(),ot.dispose(),At.dispose(),ft.dispose(),ft.removeEventListener("sessionstart",Hl),ft.removeEventListener("sessionend",Gl),Ei.stop()};function Xt(b){b.preventDefault(),ja("WebGLRenderer: Context Lost."),M=!0}function ge(){ja("WebGLRenderer: Context Restored."),M=!1;const b=C.autoReset,k=It.enabled,W=It.autoUpdate,V=It.needsUpdate,H=It.type;Q(),C.autoReset=b,It.enabled=k,It.autoUpdate=W,It.needsUpdate=V,It.type=H}function ce(b){Qt("WebGLRenderer: A WebGL context could not be created. Reason: ",b.statusMessage)}function On(b){const k=b.target;k.removeEventListener("dispose",On),$n(k)}function $n(b){gu(b),v.remove(b)}function gu(b){const k=v.get(b).programs;k!==void 0&&(k.forEach(function(W){At.releaseProgram(W)}),b.isShaderMaterial&&At.releaseShaderCache(b))}this.renderBufferDirect=function(b,k,W,V,H,gt){k===null&&(k=it);const Et=H.isMesh&&H.matrixWorld.determinant()<0,vt=_u(b,k,W,V,H);ht.setMaterial(V,Et);let Ct=W.index,Lt=1;if(V.wireframe===!0){if(Ct=Pt.getWireframeAttribute(W),Ct===void 0)return;Lt=2}const Vt=W.drawRange,Ot=W.attributes.position;let $t=Vt.start*Lt,pe=(Vt.start+Vt.count)*Lt;gt!==null&&($t=Math.max($t,gt.start*Lt),pe=Math.min(pe,(gt.start+gt.count)*Lt)),Ct!==null?($t=Math.max($t,0),pe=Math.min(pe,Ct.count)):Ot!=null&&($t=Math.max($t,0),pe=Math.min(pe,Ot.count));const ve=pe-$t;if(ve<0||ve===1/0)return;wt.setup(H,V,vt,W,Ct);let Me,me=N;if(Ct!==null&&(Me=Y.get(Ct),me=Mt,me.setIndex(Me)),H.isMesh)V.wireframe===!0?(ht.setLineWidth(V.wireframeLinewidth*st()),me.setMode(P.LINES)):me.setMode(P.TRIANGLES);else if(H.isLine){let Bt=V.linewidth;Bt===void 0&&(Bt=1),ht.setLineWidth(Bt*st()),H.isLineSegments?me.setMode(P.LINES):H.isLineLoop?me.setMode(P.LINE_LOOP):me.setMode(P.LINE_STRIP)}else H.isPoints?me.setMode(P.POINTS):H.isSprite&&me.setMode(P.TRIANGLES);if(H.isBatchedMesh)if(H._multiDrawInstances!==null)Qs("WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),me.renderMultiDrawInstances(H._multiDrawStarts,H._multiDrawCounts,H._multiDrawCount,H._multiDrawInstances);else if(xt.get("WEBGL_multi_draw"))me.renderMultiDraw(H._multiDrawStarts,H._multiDrawCounts,H._multiDrawCount);else{const Bt=H._multiDrawStarts,he=H._multiDrawCounts,ne=H._multiDrawCount,on=Ct?Y.get(Ct).bytesPerElement:1,Xi=v.get(V).currentProgram.getUniforms();for(let ln=0;ln<ne;ln++)Xi.setValue(P,"_gl_DrawID",ln),me.render(Bt[ln]/on,he[ln])}else if(H.isInstancedMesh)me.renderInstances($t,ve,H.count);else if(W.isInstancedBufferGeometry){const Bt=W._maxInstanceCount!==void 0?W._maxInstanceCount:1/0,he=Math.min(W.instanceCount,Bt);me.renderInstances($t,ve,he)}else me.render($t,ve)};function zl(b,k,W){b.transparent===!0&&b.side===Le&&b.forceSinglePass===!1?(b.side=an,b.needsUpdate=!0,ca(b,k,W),b.side=wi,b.needsUpdate=!0,ca(b,k,W),b.side=Le):ca(b,k,W)}this.compile=function(b,k,W=null){W===null&&(W=b),E=mt.get(W),E.init(k),T.push(E),W.traverseVisible(function(H){H.isLight&&H.layers.test(k.layers)&&(E.pushLight(H),H.castShadow&&E.pushShadow(H))}),b!==W&&b.traverseVisible(function(H){H.isLight&&H.layers.test(k.layers)&&(E.pushLight(H),H.castShadow&&E.pushShadow(H))}),E.setupLights();const V=new Set;return b.traverse(function(H){if(!(H.isMesh||H.isPoints||H.isLine||H.isSprite))return;const gt=H.material;if(gt)if(Array.isArray(gt))for(let Et=0;Et<gt.length;Et++){const vt=gt[Et];zl(vt,W,H),V.add(vt)}else zl(gt,W,H),V.add(gt)}),E=T.pop(),V},this.compileAsync=function(b,k,W=null){const V=this.compile(b,k,W);return new Promise(H=>{function gt(){if(V.forEach(function(Et){v.get(Et).currentProgram.isReady()&&V.delete(Et)}),V.size===0){H(b);return}setTimeout(gt,10)}xt.get("KHR_parallel_shader_compile")!==null?gt():setTimeout(gt,10)})};let gr=null;function xu(b){gr&&gr(b)}function Hl(){Ei.stop()}function Gl(){Ei.start()}const Ei=new Kh;Ei.setAnimationLoop(xu),typeof self<"u"&&Ei.setContext(self),this.setAnimationLoop=function(b){gr=b,ft.setAnimationLoop(b),b===null?Ei.stop():Ei.start()},ft.addEventListener("sessionstart",Hl),ft.addEventListener("sessionend",Gl),this.render=function(b,k){if(k!==void 0&&k.isCamera!==!0){Qt("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(M===!0)return;const W=ft.enabled===!0&&ft.isPresenting===!0,V=D!==null&&(L===null||W)&&D.begin(x,L);if(b.matrixWorldAutoUpdate===!0&&b.updateMatrixWorld(),k.parent===null&&k.matrixWorldAutoUpdate===!0&&k.updateMatrixWorld(),ft.enabled===!0&&ft.isPresenting===!0&&(D===null||D.isCompositing()===!1)&&(ft.cameraAutoUpdate===!0&&ft.updateCamera(k),k=ft.getCamera()),b.isScene===!0&&b.onBeforeRender(x,b,k,L),E=mt.get(b,T.length),E.init(k),T.push(E),re.multiplyMatrices(k.projectionMatrix,k.matrixWorldInverse),Nt.setFromProjectionMatrix(re,Hn,k.reversedDepth),Jt=this.localClippingEnabled,St=Rt.init(this.clippingPlanes,Jt),y=at.get(b,R.length),y.init(),R.push(y),ft.enabled===!0&&ft.isPresenting===!0){const Et=x.xr.getDepthSensingMesh();Et!==null&&xr(Et,k,-1/0,x.sortObjects)}xr(b,k,0,x.sortObjects),y.finish(),x.sortObjects===!0&&y.sort(ae,ee),J=ft.enabled===!1||ft.isPresenting===!1||ft.hasDepthSensing()===!1,J&&pt.addToRenderList(y,b),this.info.render.frame++,St===!0&&Rt.beginShadows();const H=E.state.shadowsArray;if(It.render(H,b,k),St===!0&&Rt.endShadows(),this.info.autoReset===!0&&this.info.reset(),(V&&D.hasRenderPass())===!1){const Et=y.opaque,vt=y.transmissive;if(E.setupLights(),k.isArrayCamera){const Ct=k.cameras;if(vt.length>0)for(let Lt=0,Vt=Ct.length;Lt<Vt;Lt++){const Ot=Ct[Lt];Wl(Et,vt,b,Ot)}J&&pt.render(b);for(let Lt=0,Vt=Ct.length;Lt<Vt;Lt++){const Ot=Ct[Lt];Vl(y,b,Ot,Ot.viewport)}}else vt.length>0&&Wl(Et,vt,b,k),J&&pt.render(b),Vl(y,b,k)}L!==null&&I===0&&(U.updateMultisampleRenderTarget(L),U.updateRenderTargetMipmap(L)),V&&D.end(x),b.isScene===!0&&b.onAfterRender(x,b,k),wt.resetDefaultState(),B=-1,O=null,T.pop(),T.length>0?(E=T[T.length-1],St===!0&&Rt.setGlobalState(x.clippingPlanes,E.state.camera)):E=null,R.pop(),R.length>0?y=R[R.length-1]:y=null};function xr(b,k,W,V){if(b.visible===!1)return;if(b.layers.test(k.layers)){if(b.isGroup)W=b.renderOrder;else if(b.isLOD)b.autoUpdate===!0&&b.update(k);else if(b.isLight)E.pushLight(b),b.castShadow&&E.pushShadow(b);else if(b.isSprite){if(!b.frustumCulled||Nt.intersectsSprite(b)){V&&$.setFromMatrixPosition(b.matrixWorld).applyMatrix4(re);const Et=dt.update(b),vt=b.material;vt.visible&&y.push(b,Et,vt,W,$.z,null)}}else if((b.isMesh||b.isLine||b.isPoints)&&(!b.frustumCulled||Nt.intersectsObject(b))){const Et=dt.update(b),vt=b.material;if(V&&(b.boundingSphere!==void 0?(b.boundingSphere===null&&b.computeBoundingSphere(),$.copy(b.boundingSphere.center)):(Et.boundingSphere===null&&Et.computeBoundingSphere(),$.copy(Et.boundingSphere.center)),$.applyMatrix4(b.matrixWorld).applyMatrix4(re)),Array.isArray(vt)){const Ct=Et.groups;for(let Lt=0,Vt=Ct.length;Lt<Vt;Lt++){const Ot=Ct[Lt],$t=vt[Ot.materialIndex];$t&&$t.visible&&y.push(b,Et,$t,W,$.z,Ot)}}else vt.visible&&y.push(b,Et,vt,W,$.z,null)}}const gt=b.children;for(let Et=0,vt=gt.length;Et<vt;Et++)xr(gt[Et],k,W,V)}function Vl(b,k,W,V){const{opaque:H,transmissive:gt,transparent:Et}=b;E.setupLightsView(W),St===!0&&Rt.setGlobalState(x.clippingPlanes,W),V&&ht.viewport(G.copy(V)),H.length>0&&la(H,k,W),gt.length>0&&la(gt,k,W),Et.length>0&&la(Et,k,W),ht.buffers.depth.setTest(!0),ht.buffers.depth.setMask(!0),ht.buffers.color.setMask(!0),ht.setPolygonOffset(!1)}function Wl(b,k,W,V){if((W.isScene===!0?W.overrideMaterial:null)!==null)return;if(E.state.transmissionRenderTarget[V.id]===void 0){const $t=xt.has("EXT_color_buffer_half_float")||xt.has("EXT_color_buffer_float");E.state.transmissionRenderTarget[V.id]=new Yn(1,1,{generateMipmaps:!0,type:$t?li:fn,minFilter:ki,samples:Dt.samples,stencilBuffer:a,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:te.workingColorSpace})}const gt=E.state.transmissionRenderTarget[V.id],Et=V.viewport||G;gt.setSize(Et.z*x.transmissionResolutionScale,Et.w*x.transmissionResolutionScale);const vt=x.getRenderTarget(),Ct=x.getActiveCubeFace(),Lt=x.getActiveMipmapLevel();x.setRenderTarget(gt),x.getClearColor(lt),et=x.getClearAlpha(),et<1&&x.setClearColor(16777215,.5),x.clear(),J&&pt.render(W);const Vt=x.toneMapping;x.toneMapping=Wn;const Ot=V.viewport;if(V.viewport!==void 0&&(V.viewport=void 0),E.setupLightsView(V),St===!0&&Rt.setGlobalState(x.clippingPlanes,V),la(b,W,V),U.updateMultisampleRenderTarget(gt),U.updateRenderTargetMipmap(gt),xt.has("WEBGL_multisampled_render_to_texture")===!1){let $t=!1;for(let pe=0,ve=k.length;pe<ve;pe++){const Me=k[pe],{object:me,geometry:Bt,material:he,group:ne}=Me;if(he.side===Le&&me.layers.test(V.layers)){const on=he.side;he.side=an,he.needsUpdate=!0,Xl(me,W,V,Bt,he,ne),he.side=on,he.needsUpdate=!0,$t=!0}}$t===!0&&(U.updateMultisampleRenderTarget(gt),U.updateRenderTargetMipmap(gt))}x.setRenderTarget(vt,Ct,Lt),x.setClearColor(lt,et),Ot!==void 0&&(V.viewport=Ot),x.toneMapping=Vt}function la(b,k,W){const V=k.isScene===!0?k.overrideMaterial:null;for(let H=0,gt=b.length;H<gt;H++){const Et=b[H],{object:vt,geometry:Ct,group:Lt}=Et;let Vt=Et.material;Vt.allowOverride===!0&&V!==null&&(Vt=V),vt.layers.test(W.layers)&&Xl(vt,k,W,Ct,Vt,Lt)}}function Xl(b,k,W,V,H,gt){b.onBeforeRender(x,k,W,V,H,gt),b.modelViewMatrix.multiplyMatrices(W.matrixWorldInverse,b.matrixWorld),b.normalMatrix.getNormalMatrix(b.modelViewMatrix),H.onBeforeRender(x,k,W,V,b,gt),H.transparent===!0&&H.side===Le&&H.forceSinglePass===!1?(H.side=an,H.needsUpdate=!0,x.renderBufferDirect(W,k,V,H,b,gt),H.side=wi,H.needsUpdate=!0,x.renderBufferDirect(W,k,V,H,b,gt),H.side=Le):x.renderBufferDirect(W,k,V,H,b,gt),b.onAfterRender(x,k,W,V,H,gt)}function ca(b,k,W){k.isScene!==!0&&(k=it);const V=v.get(b),H=E.state.lights,gt=E.state.shadowsArray,Et=H.state.version,vt=At.getParameters(b,H.state,gt,k,W),Ct=At.getProgramCacheKey(vt);let Lt=V.programs;V.environment=b.isMeshStandardMaterial?k.environment:null,V.fog=k.fog,V.envMap=(b.isMeshStandardMaterial?j:X).get(b.envMap||V.environment),V.envMapRotation=V.environment!==null&&b.envMap===null?k.environmentRotation:b.envMapRotation,Lt===void 0&&(b.addEventListener("dispose",On),Lt=new Map,V.programs=Lt);let Vt=Lt.get(Ct);if(Vt!==void 0){if(V.currentProgram===Vt&&V.lightsStateVersion===Et)return ql(b,vt),Vt}else vt.uniforms=At.getUniforms(b),b.onBeforeCompile(vt,x),Vt=At.acquireProgram(vt,Ct),Lt.set(Ct,Vt),V.uniforms=vt.uniforms;const Ot=V.uniforms;return(!b.isShaderMaterial&&!b.isRawShaderMaterial||b.clipping===!0)&&(Ot.clippingPlanes=Rt.uniform),ql(b,vt),V.needsLights=Mu(b),V.lightsStateVersion=Et,V.needsLights&&(Ot.ambientLightColor.value=H.state.ambient,Ot.lightProbe.value=H.state.probe,Ot.directionalLights.value=H.state.directional,Ot.directionalLightShadows.value=H.state.directionalShadow,Ot.spotLights.value=H.state.spot,Ot.spotLightShadows.value=H.state.spotShadow,Ot.rectAreaLights.value=H.state.rectArea,Ot.ltc_1.value=H.state.rectAreaLTC1,Ot.ltc_2.value=H.state.rectAreaLTC2,Ot.pointLights.value=H.state.point,Ot.pointLightShadows.value=H.state.pointShadow,Ot.hemisphereLights.value=H.state.hemi,Ot.directionalShadowMap.value=H.state.directionalShadowMap,Ot.directionalShadowMatrix.value=H.state.directionalShadowMatrix,Ot.spotShadowMap.value=H.state.spotShadowMap,Ot.spotLightMatrix.value=H.state.spotLightMatrix,Ot.spotLightMap.value=H.state.spotLightMap,Ot.pointShadowMap.value=H.state.pointShadowMap,Ot.pointShadowMatrix.value=H.state.pointShadowMatrix),V.currentProgram=Vt,V.uniformsList=null,Vt}function Yl(b){if(b.uniformsList===null){const k=b.currentProgram.getUniforms();b.uniformsList=Ya.seqWithValue(k.seq,b.uniforms)}return b.uniformsList}function ql(b,k){const W=v.get(b);W.outputColorSpace=k.outputColorSpace,W.batching=k.batching,W.batchingColor=k.batchingColor,W.instancing=k.instancing,W.instancingColor=k.instancingColor,W.instancingMorph=k.instancingMorph,W.skinning=k.skinning,W.morphTargets=k.morphTargets,W.morphNormals=k.morphNormals,W.morphColors=k.morphColors,W.morphTargetsCount=k.morphTargetsCount,W.numClippingPlanes=k.numClippingPlanes,W.numIntersection=k.numClipIntersection,W.vertexAlphas=k.vertexAlphas,W.vertexTangents=k.vertexTangents,W.toneMapping=k.toneMapping}function _u(b,k,W,V,H){k.isScene!==!0&&(k=it),U.resetTextureUnits();const gt=k.fog,Et=V.isMeshStandardMaterial?k.environment:null,vt=L===null?x.outputColorSpace:L.isXRRenderTarget===!0?L.texture.colorSpace:ys,Ct=(V.isMeshStandardMaterial?j:X).get(V.envMap||Et),Lt=V.vertexColors===!0&&!!W.attributes.color&&W.attributes.color.itemSize===4,Vt=!!W.attributes.tangent&&(!!V.normalMap||V.anisotropy>0),Ot=!!W.morphAttributes.position,$t=!!W.morphAttributes.normal,pe=!!W.morphAttributes.color;let ve=Wn;V.toneMapped&&(L===null||L.isXRRenderTarget===!0)&&(ve=x.toneMapping);const Me=W.morphAttributes.position||W.morphAttributes.normal||W.morphAttributes.color,me=Me!==void 0?Me.length:0,Bt=v.get(V),he=E.state.lights;if(St===!0&&(Jt===!0||b!==O)){const Ke=b===O&&V.id===B;Rt.setState(V,b,Ke)}let ne=!1;V.version===Bt.__version?(Bt.needsLights&&Bt.lightsStateVersion!==he.state.version||Bt.outputColorSpace!==vt||H.isBatchedMesh&&Bt.batching===!1||!H.isBatchedMesh&&Bt.batching===!0||H.isBatchedMesh&&Bt.batchingColor===!0&&H.colorTexture===null||H.isBatchedMesh&&Bt.batchingColor===!1&&H.colorTexture!==null||H.isInstancedMesh&&Bt.instancing===!1||!H.isInstancedMesh&&Bt.instancing===!0||H.isSkinnedMesh&&Bt.skinning===!1||!H.isSkinnedMesh&&Bt.skinning===!0||H.isInstancedMesh&&Bt.instancingColor===!0&&H.instanceColor===null||H.isInstancedMesh&&Bt.instancingColor===!1&&H.instanceColor!==null||H.isInstancedMesh&&Bt.instancingMorph===!0&&H.morphTexture===null||H.isInstancedMesh&&Bt.instancingMorph===!1&&H.morphTexture!==null||Bt.envMap!==Ct||V.fog===!0&&Bt.fog!==gt||Bt.numClippingPlanes!==void 0&&(Bt.numClippingPlanes!==Rt.numPlanes||Bt.numIntersection!==Rt.numIntersection)||Bt.vertexAlphas!==Lt||Bt.vertexTangents!==Vt||Bt.morphTargets!==Ot||Bt.morphNormals!==$t||Bt.morphColors!==pe||Bt.toneMapping!==ve||Bt.morphTargetsCount!==me)&&(ne=!0):(ne=!0,Bt.__version=V.version);let on=Bt.currentProgram;ne===!0&&(on=ca(V,k,H));let Xi=!1,ln=!1,As=!1;const xe=on.getUniforms(),en=Bt.uniforms;if(ht.useProgram(on.program)&&(Xi=!0,ln=!0,As=!0),V.id!==B&&(B=V.id,ln=!0),Xi||O!==b){ht.buffers.depth.getReversed()&&b.reversedDepth!==!0&&(b._reversedDepth=!0,b.updateProjectionMatrix()),xe.setValue(P,"projectionMatrix",b.projectionMatrix),xe.setValue(P,"viewMatrix",b.matrixWorldInverse);const nn=xe.map.cameraPosition;nn!==void 0&&nn.setValue(P,Wt.setFromMatrixPosition(b.matrixWorld)),Dt.logarithmicDepthBuffer&&xe.setValue(P,"logDepthBufFC",2/(Math.log(b.far+1)/Math.LN2)),(V.isMeshPhongMaterial||V.isMeshToonMaterial||V.isMeshLambertMaterial||V.isMeshBasicMaterial||V.isMeshStandardMaterial||V.isShaderMaterial)&&xe.setValue(P,"isOrthographic",b.isOrthographicCamera===!0),O!==b&&(O=b,ln=!0,As=!0)}if(Bt.needsLights&&(he.state.directionalShadowMap.length>0&&xe.setValue(P,"directionalShadowMap",he.state.directionalShadowMap,U),he.state.spotShadowMap.length>0&&xe.setValue(P,"spotShadowMap",he.state.spotShadowMap,U),he.state.pointShadowMap.length>0&&xe.setValue(P,"pointShadowMap",he.state.pointShadowMap,U)),H.isSkinnedMesh){xe.setOptional(P,H,"bindMatrix"),xe.setOptional(P,H,"bindMatrixInverse");const Ke=H.skeleton;Ke&&(Ke.boneTexture===null&&Ke.computeBoneTexture(),xe.setValue(P,"boneTexture",Ke.boneTexture,U))}H.isBatchedMesh&&(xe.setOptional(P,H,"batchingTexture"),xe.setValue(P,"batchingTexture",H._matricesTexture,U),xe.setOptional(P,H,"batchingIdTexture"),xe.setValue(P,"batchingIdTexture",H._indirectTexture,U),xe.setOptional(P,H,"batchingColorTexture"),H._colorsTexture!==null&&xe.setValue(P,"batchingColorTexture",H._colorsTexture,U));const pn=W.morphAttributes;if((pn.position!==void 0||pn.normal!==void 0||pn.color!==void 0)&&Zt.update(H,W,on),(ln||Bt.receiveShadow!==H.receiveShadow)&&(Bt.receiveShadow=H.receiveShadow,xe.setValue(P,"receiveShadow",H.receiveShadow)),V.isMeshGouraudMaterial&&V.envMap!==null&&(en.envMap.value=Ct,en.flipEnvMap.value=Ct.isCubeTexture&&Ct.isRenderTargetTexture===!1?-1:1),V.isMeshStandardMaterial&&V.envMap===null&&k.environment!==null&&(en.envMapIntensity.value=k.environmentIntensity),en.dfgLUT!==void 0&&(en.dfgLUT.value=Hx()),ln&&(xe.setValue(P,"toneMappingExposure",x.toneMappingExposure),Bt.needsLights&&vu(en,As),gt&&V.fog===!0&&zt.refreshFogUniforms(en,gt),zt.refreshMaterialUniforms(en,V,kt,Ht,E.state.transmissionRenderTarget[b.id]),Ya.upload(P,Yl(Bt),en,U)),V.isShaderMaterial&&V.uniformsNeedUpdate===!0&&(Ya.upload(P,Yl(Bt),en,U),V.uniformsNeedUpdate=!1),V.isSpriteMaterial&&xe.setValue(P,"center",H.center),xe.setValue(P,"modelViewMatrix",H.modelViewMatrix),xe.setValue(P,"normalMatrix",H.normalMatrix),xe.setValue(P,"modelMatrix",H.matrixWorld),V.isShaderMaterial||V.isRawShaderMaterial){const Ke=V.uniformsGroups;for(let nn=0,_r=Ke.length;nn<_r;nn++){const Ti=Ke[nn];ot.update(Ti,on),ot.bind(Ti,on)}}return on}function vu(b,k){b.ambientLightColor.needsUpdate=k,b.lightProbe.needsUpdate=k,b.directionalLights.needsUpdate=k,b.directionalLightShadows.needsUpdate=k,b.pointLights.needsUpdate=k,b.pointLightShadows.needsUpdate=k,b.spotLights.needsUpdate=k,b.spotLightShadows.needsUpdate=k,b.rectAreaLights.needsUpdate=k,b.hemisphereLights.needsUpdate=k}function Mu(b){return b.isMeshLambertMaterial||b.isMeshToonMaterial||b.isMeshPhongMaterial||b.isMeshStandardMaterial||b.isShadowMaterial||b.isShaderMaterial&&b.lights===!0}this.getActiveCubeFace=function(){return A},this.getActiveMipmapLevel=function(){return I},this.getRenderTarget=function(){return L},this.setRenderTargetTextures=function(b,k,W){const V=v.get(b);V.__autoAllocateDepthBuffer=b.resolveDepthBuffer===!1,V.__autoAllocateDepthBuffer===!1&&(V.__useRenderToTexture=!1),v.get(b.texture).__webglTexture=k,v.get(b.depthTexture).__webglTexture=V.__autoAllocateDepthBuffer?void 0:W,V.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(b,k){const W=v.get(b);W.__webglFramebuffer=k,W.__useDefaultFramebuffer=k===void 0};const yu=P.createFramebuffer();this.setRenderTarget=function(b,k=0,W=0){L=b,A=k,I=W;let V=null,H=!1,gt=!1;if(b){const vt=v.get(b);if(vt.__useDefaultFramebuffer!==void 0){ht.bindFramebuffer(P.FRAMEBUFFER,vt.__webglFramebuffer),G.copy(b.viewport),z.copy(b.scissor),Z=b.scissorTest,ht.viewport(G),ht.scissor(z),ht.setScissorTest(Z),B=-1;return}else if(vt.__webglFramebuffer===void 0)U.setupRenderTarget(b);else if(vt.__hasExternalTextures)U.rebindTextures(b,v.get(b.texture).__webglTexture,v.get(b.depthTexture).__webglTexture);else if(b.depthBuffer){const Vt=b.depthTexture;if(vt.__boundDepthTexture!==Vt){if(Vt!==null&&v.has(Vt)&&(b.width!==Vt.image.width||b.height!==Vt.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");U.setupDepthRenderbuffer(b)}}const Ct=b.texture;(Ct.isData3DTexture||Ct.isDataArrayTexture||Ct.isCompressedArrayTexture)&&(gt=!0);const Lt=v.get(b).__webglFramebuffer;b.isWebGLCubeRenderTarget?(Array.isArray(Lt[k])?V=Lt[k][W]:V=Lt[k],H=!0):b.samples>0&&U.useMultisampledRTT(b)===!1?V=v.get(b).__webglMultisampledFramebuffer:Array.isArray(Lt)?V=Lt[W]:V=Lt,G.copy(b.viewport),z.copy(b.scissor),Z=b.scissorTest}else G.copy(q).multiplyScalar(kt).floor(),z.copy(tt).multiplyScalar(kt).floor(),Z=yt;if(W!==0&&(V=yu),ht.bindFramebuffer(P.FRAMEBUFFER,V)&&ht.drawBuffers(b,V),ht.viewport(G),ht.scissor(z),ht.setScissorTest(Z),H){const vt=v.get(b.texture);P.framebufferTexture2D(P.FRAMEBUFFER,P.COLOR_ATTACHMENT0,P.TEXTURE_CUBE_MAP_POSITIVE_X+k,vt.__webglTexture,W)}else if(gt){const vt=k;for(let Ct=0;Ct<b.textures.length;Ct++){const Lt=v.get(b.textures[Ct]);P.framebufferTextureLayer(P.FRAMEBUFFER,P.COLOR_ATTACHMENT0+Ct,Lt.__webglTexture,W,vt)}}else if(b!==null&&W!==0){const vt=v.get(b.texture);P.framebufferTexture2D(P.FRAMEBUFFER,P.COLOR_ATTACHMENT0,P.TEXTURE_2D,vt.__webglTexture,W)}B=-1},this.readRenderTargetPixels=function(b,k,W,V,H,gt,Et,vt=0){if(!(b&&b.isWebGLRenderTarget)){Qt("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Ct=v.get(b).__webglFramebuffer;if(b.isWebGLCubeRenderTarget&&Et!==void 0&&(Ct=Ct[Et]),Ct){ht.bindFramebuffer(P.FRAMEBUFFER,Ct);try{const Lt=b.textures[vt],Vt=Lt.format,Ot=Lt.type;if(!Dt.textureFormatReadable(Vt)){Qt("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!Dt.textureTypeReadable(Ot)){Qt("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}k>=0&&k<=b.width-V&&W>=0&&W<=b.height-H&&(b.textures.length>1&&P.readBuffer(P.COLOR_ATTACHMENT0+vt),P.readPixels(k,W,V,H,ct.convert(Vt),ct.convert(Ot),gt))}finally{const Lt=L!==null?v.get(L).__webglFramebuffer:null;ht.bindFramebuffer(P.FRAMEBUFFER,Lt)}}},this.readRenderTargetPixelsAsync=async function(b,k,W,V,H,gt,Et,vt=0){if(!(b&&b.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Ct=v.get(b).__webglFramebuffer;if(b.isWebGLCubeRenderTarget&&Et!==void 0&&(Ct=Ct[Et]),Ct)if(k>=0&&k<=b.width-V&&W>=0&&W<=b.height-H){ht.bindFramebuffer(P.FRAMEBUFFER,Ct);const Lt=b.textures[vt],Vt=Lt.format,Ot=Lt.type;if(!Dt.textureFormatReadable(Vt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!Dt.textureTypeReadable(Ot))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const $t=P.createBuffer();P.bindBuffer(P.PIXEL_PACK_BUFFER,$t),P.bufferData(P.PIXEL_PACK_BUFFER,gt.byteLength,P.STREAM_READ),b.textures.length>1&&P.readBuffer(P.COLOR_ATTACHMENT0+vt),P.readPixels(k,W,V,H,ct.convert(Vt),ct.convert(Ot),0);const pe=L!==null?v.get(L).__webglFramebuffer:null;ht.bindFramebuffer(P.FRAMEBUFFER,pe);const ve=P.fenceSync(P.SYNC_GPU_COMMANDS_COMPLETE,0);return P.flush(),await id(P,ve,4),P.bindBuffer(P.PIXEL_PACK_BUFFER,$t),P.getBufferSubData(P.PIXEL_PACK_BUFFER,0,gt),P.deleteBuffer($t),P.deleteSync(ve),gt}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(b,k=null,W=0){const V=Math.pow(2,-W),H=Math.floor(b.image.width*V),gt=Math.floor(b.image.height*V),Et=k!==null?k.x:0,vt=k!==null?k.y:0;U.setTexture2D(b,0),P.copyTexSubImage2D(P.TEXTURE_2D,W,0,0,Et,vt,H,gt),ht.unbindTexture()};const Su=P.createFramebuffer(),wu=P.createFramebuffer();this.copyTextureToTexture=function(b,k,W=null,V=null,H=0,gt=null){gt===null&&(H!==0?(Qs("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),gt=H,H=0):gt=0);let Et,vt,Ct,Lt,Vt,Ot,$t,pe,ve;const Me=b.isCompressedTexture?b.mipmaps[gt]:b.image;if(W!==null)Et=W.max.x-W.min.x,vt=W.max.y-W.min.y,Ct=W.isBox3?W.max.z-W.min.z:1,Lt=W.min.x,Vt=W.min.y,Ot=W.isBox3?W.min.z:0;else{const pn=Math.pow(2,-H);Et=Math.floor(Me.width*pn),vt=Math.floor(Me.height*pn),b.isDataArrayTexture?Ct=Me.depth:b.isData3DTexture?Ct=Math.floor(Me.depth*pn):Ct=1,Lt=0,Vt=0,Ot=0}V!==null?($t=V.x,pe=V.y,ve=V.z):($t=0,pe=0,ve=0);const me=ct.convert(k.format),Bt=ct.convert(k.type);let he;k.isData3DTexture?(U.setTexture3D(k,0),he=P.TEXTURE_3D):k.isDataArrayTexture||k.isCompressedArrayTexture?(U.setTexture2DArray(k,0),he=P.TEXTURE_2D_ARRAY):(U.setTexture2D(k,0),he=P.TEXTURE_2D),P.pixelStorei(P.UNPACK_FLIP_Y_WEBGL,k.flipY),P.pixelStorei(P.UNPACK_PREMULTIPLY_ALPHA_WEBGL,k.premultiplyAlpha),P.pixelStorei(P.UNPACK_ALIGNMENT,k.unpackAlignment);const ne=P.getParameter(P.UNPACK_ROW_LENGTH),on=P.getParameter(P.UNPACK_IMAGE_HEIGHT),Xi=P.getParameter(P.UNPACK_SKIP_PIXELS),ln=P.getParameter(P.UNPACK_SKIP_ROWS),As=P.getParameter(P.UNPACK_SKIP_IMAGES);P.pixelStorei(P.UNPACK_ROW_LENGTH,Me.width),P.pixelStorei(P.UNPACK_IMAGE_HEIGHT,Me.height),P.pixelStorei(P.UNPACK_SKIP_PIXELS,Lt),P.pixelStorei(P.UNPACK_SKIP_ROWS,Vt),P.pixelStorei(P.UNPACK_SKIP_IMAGES,Ot);const xe=b.isDataArrayTexture||b.isData3DTexture,en=k.isDataArrayTexture||k.isData3DTexture;if(b.isDepthTexture){const pn=v.get(b),Ke=v.get(k),nn=v.get(pn.__renderTarget),_r=v.get(Ke.__renderTarget);ht.bindFramebuffer(P.READ_FRAMEBUFFER,nn.__webglFramebuffer),ht.bindFramebuffer(P.DRAW_FRAMEBUFFER,_r.__webglFramebuffer);for(let Ti=0;Ti<Ct;Ti++)xe&&(P.framebufferTextureLayer(P.READ_FRAMEBUFFER,P.COLOR_ATTACHMENT0,v.get(b).__webglTexture,H,Ot+Ti),P.framebufferTextureLayer(P.DRAW_FRAMEBUFFER,P.COLOR_ATTACHMENT0,v.get(k).__webglTexture,gt,ve+Ti)),P.blitFramebuffer(Lt,Vt,Et,vt,$t,pe,Et,vt,P.DEPTH_BUFFER_BIT,P.NEAREST);ht.bindFramebuffer(P.READ_FRAMEBUFFER,null),ht.bindFramebuffer(P.DRAW_FRAMEBUFFER,null)}else if(H!==0||b.isRenderTargetTexture||v.has(b)){const pn=v.get(b),Ke=v.get(k);ht.bindFramebuffer(P.READ_FRAMEBUFFER,Su),ht.bindFramebuffer(P.DRAW_FRAMEBUFFER,wu);for(let nn=0;nn<Ct;nn++)xe?P.framebufferTextureLayer(P.READ_FRAMEBUFFER,P.COLOR_ATTACHMENT0,pn.__webglTexture,H,Ot+nn):P.framebufferTexture2D(P.READ_FRAMEBUFFER,P.COLOR_ATTACHMENT0,P.TEXTURE_2D,pn.__webglTexture,H),en?P.framebufferTextureLayer(P.DRAW_FRAMEBUFFER,P.COLOR_ATTACHMENT0,Ke.__webglTexture,gt,ve+nn):P.framebufferTexture2D(P.DRAW_FRAMEBUFFER,P.COLOR_ATTACHMENT0,P.TEXTURE_2D,Ke.__webglTexture,gt),H!==0?P.blitFramebuffer(Lt,Vt,Et,vt,$t,pe,Et,vt,P.COLOR_BUFFER_BIT,P.NEAREST):en?P.copyTexSubImage3D(he,gt,$t,pe,ve+nn,Lt,Vt,Et,vt):P.copyTexSubImage2D(he,gt,$t,pe,Lt,Vt,Et,vt);ht.bindFramebuffer(P.READ_FRAMEBUFFER,null),ht.bindFramebuffer(P.DRAW_FRAMEBUFFER,null)}else en?b.isDataTexture||b.isData3DTexture?P.texSubImage3D(he,gt,$t,pe,ve,Et,vt,Ct,me,Bt,Me.data):k.isCompressedArrayTexture?P.compressedTexSubImage3D(he,gt,$t,pe,ve,Et,vt,Ct,me,Me.data):P.texSubImage3D(he,gt,$t,pe,ve,Et,vt,Ct,me,Bt,Me):b.isDataTexture?P.texSubImage2D(P.TEXTURE_2D,gt,$t,pe,Et,vt,me,Bt,Me.data):b.isCompressedTexture?P.compressedTexSubImage2D(P.TEXTURE_2D,gt,$t,pe,Me.width,Me.height,me,Me.data):P.texSubImage2D(P.TEXTURE_2D,gt,$t,pe,Et,vt,me,Bt,Me);P.pixelStorei(P.UNPACK_ROW_LENGTH,ne),P.pixelStorei(P.UNPACK_IMAGE_HEIGHT,on),P.pixelStorei(P.UNPACK_SKIP_PIXELS,Xi),P.pixelStorei(P.UNPACK_SKIP_ROWS,ln),P.pixelStorei(P.UNPACK_SKIP_IMAGES,As),gt===0&&k.generateMipmaps&&P.generateMipmap(he),ht.unbindTexture()},this.initRenderTarget=function(b){v.get(b).__webglFramebuffer===void 0&&U.setupRenderTarget(b)},this.initTexture=function(b){b.isCubeTexture?U.setTextureCube(b,0):b.isData3DTexture?U.setTexture3D(b,0):b.isDataArrayTexture||b.isCompressedArrayTexture?U.setTexture2DArray(b,0):U.setTexture2D(b,0),ht.unbindTexture()},this.resetState=function(){A=0,I=0,L=null,ht.reset(),wt.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Hn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;const e=this.getContext();e.drawingBufferColorSpace=te._getDrawingBufferColorSpace(t),e.unpackColorSpace=te._getUnpackColorSpace()}}let Ie,Ln,Dn;function Vx(){Cesium.Ion.defaultAccessToken="eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJqdGkiOiIzMzA1M2Q0MC01YzY1LTRkNDMtYWYzMS05MDdmZmI2MzAwYjYiLCJpZCI6NDA5NTYwLCJpYXQiOjE3NzQ1NDA1MjR9.szCoX8ALGsZ-jqCF6lvDtejplRGt2AJmQjZ2G7_51G0";let i;try{i=Cesium.Terrain.fromWorldTerrain()}catch{console.warn("Cesium World Terrain unavailable, using ellipsoid"),i=void 0}Ie=new Cesium.Viewer("cesiumContainer",{terrain:i,timeline:!1,animation:!1,baseLayerPicker:!1,geocoder:!1,homeButton:!1,infoBox:!1,sceneModePicker:!1,selectionIndicator:!1,navigationHelpButton:!1,fullscreenButton:!1,shouldAnimate:!1}),Ln=new Cesium.Viewer("minimapCesium",{terrain:null,timeline:!1,animation:!1,baseLayerPicker:!1,geocoder:!1,homeButton:!1,infoBox:!1,sceneModePicker:!1,selectionIndicator:!1,navigationHelpButton:!1,fullscreenButton:!1,shouldAnimate:!1,skyBox:!1,skyAtmosphere:!1,contextOptions:{webgl:{preserveDrawingBuffer:!0}}}),Dn=new Cesium.Viewer("pauseMinimapCesium",{terrain:null,timeline:!1,animation:!1,baseLayerPicker:!1,geocoder:!1,homeButton:!1,infoBox:!1,sceneModePicker:!1,selectionIndicator:!1,navigationHelpButton:!1,fullscreenButton:!1,shouldAnimate:!1,skyBox:!1,skyAtmosphere:!1,contextOptions:{webgl:{preserveDrawingBuffer:!0}}}),[Ie,Ln,Dn].forEach(t=>{t.scene.requestRenderMode=!1,t.scene.maximumRenderTimeChange=0,t.scene.globe.maximumScreenSpaceError=2,t.resolutionScale=.75,t.scene.screenSpaceCameraController.enableRotate=!1,t.scene.screenSpaceCameraController.enableTranslate=!1,t.scene.screenSpaceCameraController.enableZoom=!1,t.scene.screenSpaceCameraController.enableTilt=!1,t.scene.screenSpaceCameraController.enableLook=!1,t.scene.screenSpaceCameraController.maximumZoomDistance=25e6,t.scene.globe.tileCacheSize=2048,t.scene.globe.preloadAncestors=!0,t.scene.globe.preloadSiblings=!0,t.scene.globe.loadingDescendantLimit=20,t.scene.globe.skipLevelOfDetail=!0,t.scene.globe.baseScreenSpaceError=1024,t.scene.globe.skipScreenSpaceErrorFactor=16,t.scene.globe.skipLevels=1,t._cesiumWidget._creditContainer.style.display="none"}),Ie.scene.globe.baseColor=Cesium.Color.fromCssColorString("#1a3a1a");try{Ie.scene.globe.tileFailed&&Ie.scene.globe.tileFailed.addEventListener(()=>{})}catch{}return[Ln,Dn].forEach(t=>{t.scene.globe.enableLighting=!1,t.scene.globe.showGroundAtmosphere=!1,t.scene.fog.enabled=!1,t.scene.highDynamicRange=!1,t.scene.postProcessStages.fxaa.enabled=!1,t.resolutionScale=1,t.scene.globe.maximumScreenSpaceError=2,t.scene.globe.baseColor=Cesium.Color.BLACK,t.scene.skyAtmosphere&&(t.scene.skyAtmosphere.show=!1)}),Ie.scene.globe.enableLighting=!0,Ie.scene.highDynamicRange=!1,Ie.scene.postProcessStages.fxaa.enabled=!0,Ie.scene.skyAtmosphere=new Cesium.SkyAtmosphere,Ie.scene.fog.enabled=!0,Ie.scene.fog.density=1e-4,mr(!1),Ie}function Nl(i){!Ie||!Ln||!Dn||[Ie,Ln,Dn].forEach(t=>{t.scene.requestRenderMode=!i,t.scene.maximumRenderTimeChange=i?0:1/0})}function mr(i){if(!Ie)return;const t=Ie.scene.screenSpaceCameraController;t.enableRotate=i,t.enableTranslate=i,t.enableZoom=i,t.enableTilt=i,t.enableLook=i}function Wx(i,t,e,n,s,a){Ie&&(Ie.camera.setView({destination:Cesium.Cartesian3.fromDegrees(i,t,e),orientation:{heading:Cesium.Math.toRadians(n),pitch:Cesium.Math.toRadians(s),roll:Cesium.Math.toRadians(a)}}),Ie.scene.requestRender())}function Xx(i,t,e,n){Ln&&(Ln.canvas.width===0||Ln.canvas.height===0||(Ln.camera.setView({destination:Cesium.Cartesian3.fromDegrees(i,t,e),orientation:{heading:Cesium.Math.toRadians(n),pitch:Cesium.Math.toRadians(-90),roll:0}}),Ln.scene.requestRender()))}function Yx(i,t,e,n){Dn&&(Dn.canvas.width===0||Dn.canvas.height===0||(Dn.camera.setView({destination:Cesium.Cartesian3.fromDegrees(i,t,e),orientation:{heading:Cesium.Math.toRadians(n),pitch:Cesium.Math.toRadians(-90),roll:0}}),Dn.scene.requestRender()))}function we(){return Ie}function qx(){return Ln}function Zx(){return Dn}class eu{constructor(){this.speed=15,this.maxSpeed=50,this.minSpeed=4,this.maxDiveSpeed=120,this.turboSpeed=400,this.mass=5,this.wingArea=.65,this.wingspan=2.1,this.aspectRatio=this.wingspan*this.wingspan/this.wingArea,this.clMax=1.6,this.cd0=.02,this.cdWingSpread=.008,this.k=1/(Math.PI*this.aspectRatio*.85),this.isFlapping=!1,this.flapStrength=0,this.flapCooldown=0,this.flapCycleDuration=.35,this.flapThrustImpulse=25,this.flapLiftImpulse=15,this.flapDecay=3,this.flapInput=!1,this.flapPrevInput=!1,this.gravity=9.8,this.airDensity=1.225,this.isGliding=!0,this.wingSpread=1,this.verticalSpeed=0,this.glideRatio=20,this.thermalLift=0,this.thermalStrength=0,this.thermalTimer=0,this.inThermal=!1,this.pitch=0,this.roll=0,this.heading=0,this.pitchRate=2,this.rollRate=3.2,this.yawRate=1,this.isBoosting=!1,this.boostTimeRemaining=0,this.boostDuration=4,this.boostMultiplier=2.5,this.boostRotations=0,this.boostPressed=!1,this.isTurbo=!1,this.turboPressed=!1,this.turboWindup=0,this.throttle=0,this.quaternion=new qe}boost(){this.boostTimeRemaining<=0&&(this.isBoosting=!0,this.boostTimeRemaining=this.boostDuration)}reset(t,e,n,s,a,r){this.heading=s||0,this.pitch=a||0,this.roll=r||0,this.speed=15,this.verticalSpeed=0,this.thermalLift=0,this.thermalStrength=0,this.isGliding=!0,this.isFlapping=!1,this.flapStrength=0,this.flapCooldown=0,this.wingSpread=1,this.isTurbo=!1,this.turboWindup=0;const o=new Be(Se.degToRad(this.pitch),Se.degToRad(this.heading),Se.degToRad(this.roll),"YXZ");this.quaternion.setFromEuler(o)}getAirDensity(t){const e=t*.3048;return this.airDensity*Math.exp(-e/8500)}getLiftCoefficient(t){return t<-5?-.2:t<12?this.clMax*(t/12):t<18?this.clMax*(1-(t-12)/12):.1}updateThermals(t,e){this.thermalTimer+=t;const n=Math.max(0,1-(e-2e3)/15e3),s=this.thermalTimer,a=Math.sin(s*.3)*.4+Math.sin(s*.7+1.5)*.3+Math.sin(s*1.2+3)*.3;this.thermalStrength=Math.max(0,a)*n,this.inThermal=this.thermalStrength>.15;const r=Math.abs(this.roll)>15&&Math.abs(this.roll)<45?1.5:1;this.thermalLift=this.thermalStrength*3*r*this.wingSpread}update(t,e){this.boostTimeRemaining>0&&(this.boostTimeRemaining-=e,this.boostTimeRemaining<=0&&(this.isBoosting=!1,this.boostTimeRemaining=0)),t.boost?(!this.boostPressed&&!this.isBoosting&&!this.isTurbo&&this.boost(),this.boostPressed=!0):this.boostPressed=!1,t.turbo?(this.turboPressed||(this.isTurbo=!this.isTurbo,this.isTurbo&&(this.isBoosting=!1,this.boostTimeRemaining=0)),this.turboPressed=!0):this.turboPressed=!1,this.turboWindup=this.isTurbo?Math.min(1,this.turboWindup+e*.7):Math.max(0,this.turboWindup-e*1.5),this.flapInput=t.flap||!1,this.flapInput&&!this.isBoosting&&!this.isTurbo?(this.isFlapping=!0,this.isGliding=!1,this.flapCooldown-=e,this.flapCooldown<=0&&(this.flapStrength=1,this.flapCooldown=this.flapCycleDuration)):this.flapInput||(this.isFlapping=!1,!this.isBoosting&&!this.isTurbo&&(this.isGliding=!0)),this.flapStrength=Math.max(0,this.flapStrength-this.flapDecay*e),this.isTurbo||this.turboWindup>.1?this.wingSpread+=(.15-this.wingSpread)*e*6:this.isBoosting?(this.wingSpread+=(.2-this.wingSpread)*e*5,this.isGliding=!1):this.isGliding?this.wingSpread+=(1-this.wingSpread)*e*3:this.wingSpread=.65+this.flapStrength*.25,this.throttle=this.isFlapping?.3+this.flapStrength*.7:0;const n=this.getAirDensity(0),s=this.speed,a=.5*n*s*s,r=Math.max(-10,Math.min(20,-this.pitch*.3)),o=this.getLiftCoefficient(r)*this.wingSpread,l=a*this.wingArea*o,c=this.k*o*o,h=this.cd0+c+this.wingSpread*this.cdWingSpread;let u=a*this.wingArea*h;this.isBoosting&&(u*=.25),(this.isTurbo||this.turboWindup>.1)&&(u*=.05);let d=0;this.isFlapping&&(d=this.flapThrustImpulse*this.flapStrength);const p=Se.degToRad(this.pitch),g=this.mass*this.gravity*Math.sin(p),m=(d-u+g)/this.mass;this.speed+=m*e;let f=this.isBoosting?this.maxDiveSpeed:this.maxSpeed;if(this.pitch<-20&&!this.isBoosting&&(f+=(this.maxDiveSpeed-this.maxSpeed)*Math.min(1,Math.abs(this.pitch)/60)),(this.isTurbo||this.turboWindup>.01)&&(f=this.turboSpeed),this.speed=Math.max(this.minSpeed,Math.min(f,this.speed)),this.isTurbo||this.turboWindup>.01){const B=this.turboWindup*this.turboWindup*(3-2*this.turboWindup);this.speed+=(this.turboSpeed*B-this.speed)*e*2.5}this.isBoosting&&(this.speed+=(this.maxDiveSpeed*.8-this.speed)*e*3),this.updateThermals(e,0);const S=this.mass*this.gravity,w=this.isFlapping?this.flapLiftImpulse*this.flapStrength:0,y=(l+w-S+this.thermalLift*this.mass)/this.mass;this.verticalSpeed+=(y*.15-this.verticalSpeed)*e*2,this.speed<=this.minSpeed*1.3&&!this.isBoosting&&!this.isTurbo&&(this.pitch=Se.lerp(this.pitch,Math.min(this.pitch,-8),e*.8));const E=Math.min(1.2,this.speed/this.maxSpeed),R=E>.3?.5+E*.5:E/.3*.5,T=t.pitch*this.pitchRate*e*R,D=t.roll*this.rollRate*e*R,x=t.yaw*this.yawRate*e*R,M=new qe().setFromAxisAngle(new F(1,0,0),T),A=new qe().setFromAxisAngle(new F(0,0,1),D),I=new qe().setFromAxisAngle(new F(0,1,0),x);this.quaternion.multiply(I).multiply(M).multiply(A).normalize();const L=new Be().setFromQuaternion(this.quaternion,"YXZ");return this.heading=Se.radToDeg(L.y),this.pitch=Se.radToDeg(L.x),this.roll=Se.radToDeg(L.z),{speed:this.speed,pitch:this.pitch,roll:this.roll,heading:this.heading,isBoosting:this.isBoosting,boostTimeRemaining:this.boostTimeRemaining,boostDuration:this.boostDuration,boostRotations:this.boostRotations,isGliding:this.isGliding,isFlapping:this.isFlapping,flapStrength:this.flapStrength,wingSpread:this.wingSpread,thermalStrength:this.thermalStrength,inThermal:this.inThermal,verticalSpeed:this.verticalSpeed,flapPhase:this.flapCooldown,liftForce:l,isTurbo:this.isTurbo,turboWindup:this.turboWindup}}}class $x{constructor(){this.keys={},this.prevKeys={},window.addEventListener("keydown",t=>this.keys[t.key.toLowerCase()]=!0),window.addEventListener("keyup",t=>this.keys[t.key.toLowerCase()]=!1),this.mouseDragging=!1,this.mouseDeltaX=0,this.mouseDeltaY=0,this.lastMouseX=0,this.lastMouseY=0,window.addEventListener("mousedown",t=>{t.button===0&&(this.mouseDragging=!0,this.lastMouseX=t.clientX,this.lastMouseY=t.clientY)}),window.addEventListener("mousemove",t=>{this.mouseDragging&&(this.mouseDeltaX+=t.clientX-this.lastMouseX,this.mouseDeltaY+=t.clientY-this.lastMouseY,this.lastMouseX=t.clientX,this.lastMouseY=t.clientY)}),window.addEventListener("mouseup",t=>{t.button===0&&(this.mouseDragging=!1)}),this.input={throttle:0,pitch:0,roll:0,yaw:0,boost:!1,turbo:!1,flap:!1,cameraYaw:0,cameraPitch:0,isDragging:!1,fire:!1,fireFlare:!1,weaponIndex:-1,toggleWeapon:!1},this.sensitivity=.2,this.isMobile=this.detectMobile(),this.tiltEnabled=!1,this.tiltPitch=0,this.tiltRoll=0,this.tiltCalibration={pitch:0,roll:0},this.tiltSensitivity=1,this.touchThrottle=0,this.touchBoosting=!1,this.touchTurbo=!1,this.touchFlapping=!1,this.touchFiring=!1,this.touchFlare=!1,this.touchWeaponToggle=!1,this.touchPrevWeaponToggle=!1,this.touchCameraDragging=!1,this.touchCameraDeltaX=0,this.touchCameraDeltaY=0,this.lastTouchX=0,this.lastTouchY=0,this.cameraFingerID=null,this.isMobile&&this.initMobileControls()}detectMobile(){return/Android|iPhone|iPad|iPod|webOS|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)||"ontouchstart"in window||navigator.maxTouchPoints>0}async initMobileControls(){this.createTouchUI(),await this.requestOrientationPermission(),window.addEventListener("deviceorientation",s=>{if(!this.tiltEnabled)return;const a=s.beta||0,r=s.gamma||0;this.tiltPitch=a-this.tiltCalibration.pitch,this.tiltRoll=r-this.tiltCalibration.roll},!0);const t=document.getElementById("cesiumContainer"),n=document.getElementById("threeContainer")||t||document.body;n.addEventListener("touchstart",s=>this.handleViewTouchStart(s),{passive:!1}),n.addEventListener("touchmove",s=>this.handleViewTouchMove(s),{passive:!1}),n.addEventListener("touchend",s=>this.handleViewTouchEnd(s),{passive:!1})}async requestOrientationPermission(){if(typeof DeviceOrientationEvent<"u"&&typeof DeviceOrientationEvent.requestPermission=="function")try{await DeviceOrientationEvent.requestPermission()==="granted"&&(this.tiltEnabled=!0)}catch(t){console.warn("Device orientation permission denied:",t),this.tiltEnabled=!1}else this.tiltEnabled=!0}calibrateTilt(){this.tiltCalibration.pitch=this.tiltPitch+this.tiltCalibration.pitch,this.tiltCalibration.roll=this.tiltRoll+this.tiltCalibration.roll}createTouchUI(){const t=document.createElement("div");t.id="mobile-controls",t.style.cssText=`
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
		`;const o=(m,f,S,w=52)=>{const y=document.createElement("div");return y.id=m,y.style.cssText=`
				width: ${w}px; height: ${w}px; border-radius: 50%;
				background: ${S}; border: 2px solid rgba(255,255,255,0.3);
				display: flex; align-items: center; justify-content: center;
				font-size: 9px; color: #fff; text-align: center;
				user-select: none; touch-action: none;
				line-height: 1.1; font-weight: bold;
			`,y.textContent=f,y},l=o("mobile-fire","TALON","rgba(220,50,50,0.6)",58),c=o("mobile-flap","FLAP","rgba(80,180,80,0.6)",64),h=o("mobile-turbo","TURBO","rgba(255,140,0,0.6)",48),u=o("mobile-boost","DIVE","rgba(50,120,220,0.6)",44),d=o("mobile-weapon","SWITCH","rgba(212,160,23,0.5)",42),p=o("mobile-flare","SCREECH","rgba(100,200,100,0.5)",42),g=o("mobile-calibrate","LEVEL","rgba(150,150,150,0.5)",36);l.addEventListener("touchstart",m=>{m.preventDefault(),m.stopPropagation(),this.touchFiring=!0,l.style.background="rgba(255,80,80,0.8)"},{passive:!1}),l.addEventListener("touchend",m=>{this.touchFiring=!1,l.style.background="rgba(220,50,50,0.6)"}),c.addEventListener("touchstart",m=>{m.preventDefault(),m.stopPropagation(),this.touchFlapping=!0,c.style.background="rgba(100,220,100,0.9)"},{passive:!1}),c.addEventListener("touchend",m=>{this.touchFlapping=!1,c.style.background="rgba(80,180,80,0.6)"}),h.addEventListener("touchstart",m=>{m.preventDefault(),m.stopPropagation(),this.touchTurbo=!0,h.style.background=this.touchTurbo?"rgba(255,180,0,0.9)":"rgba(255,140,0,0.6)",setTimeout(()=>{h.style.background="rgba(255,140,0,0.6)"},200)},{passive:!1}),u.addEventListener("touchstart",m=>{m.preventDefault(),m.stopPropagation(),this.touchBoosting=!0,u.style.background="rgba(80,160,255,0.8)"},{passive:!1}),u.addEventListener("touchend",m=>{this.touchBoosting=!1,u.style.background="rgba(50,120,220,0.6)"}),d.addEventListener("touchstart",m=>{m.preventDefault(),m.stopPropagation(),this.touchWeaponToggle=!0,d.style.background="rgba(212,160,23,0.8)",setTimeout(()=>{d.style.background="rgba(212,160,23,0.5)"},200)},{passive:!1}),p.addEventListener("touchstart",m=>{m.preventDefault(),m.stopPropagation(),this.touchFlare=!0,p.style.background="rgba(140,240,140,0.8)"},{passive:!1}),p.addEventListener("touchend",m=>{this.touchFlare=!1,p.style.background="rgba(100,200,100,0.5)"}),g.addEventListener("touchstart",m=>{m.preventDefault(),m.stopPropagation(),this.calibrateTilt(),g.style.background="rgba(200,200,200,0.8)",setTimeout(()=>{g.style.background="rgba(150,150,150,0.5)"},300)},{passive:!1}),r.appendChild(l),r.appendChild(c),r.appendChild(h),r.appendChild(u),r.appendChild(d),r.appendChild(p),r.appendChild(g);const _=document.createElement("div");_.id="mobile-pause",_.style.cssText=`
			position: absolute; top: 8px; right: 8px; width: 36px; height: 36px;
			background: rgba(0,0,0,0.5); border: 1px solid rgba(212,160,23,0.5);
			border-radius: 4px; display: flex; align-items: center; justify-content: center;
			font-size: 18px; color: #d4a017; pointer-events: auto;
			touch-action: none; user-select: none;
		`,_.textContent="⏸",_.addEventListener("touchstart",m=>{m.preventDefault(),m.stopPropagation(),window.dispatchEvent(new KeyboardEvent("keydown",{key:"Escape"})),setTimeout(()=>{window.dispatchEvent(new KeyboardEvent("keyup",{key:"Escape"}))},100)},{passive:!1}),t.appendChild(e),t.appendChild(r),t.appendChild(_),document.body.appendChild(t),this.mobileControlsContainer=t}updateThrottleFromTouch(t,e){const n=e.getBoundingClientRect(),s=t.clientY-n.top,a=n.height,r=1-Math.max(0,Math.min(1,s/a));this.touchThrottle=r;const o=document.getElementById("mobile-throttle-fill");o&&(o.style.height=`${r*100}%`)}handleViewTouchStart(t){if(t.target.closest("#mobile-controls"))return;const e=t.changedTouches[0];this.cameraFingerID===null&&(this.cameraFingerID=e.identifier,this.lastTouchX=e.clientX,this.lastTouchY=e.clientY,this.touchCameraDragging=!0)}handleViewTouchMove(t){for(const e of t.changedTouches)e.identifier===this.cameraFingerID&&(this.touchCameraDeltaX+=e.clientX-this.lastTouchX,this.touchCameraDeltaY+=e.clientY-this.lastTouchY,this.lastTouchX=e.clientX,this.lastTouchY=e.clientY)}handleViewTouchEnd(t){for(const e of t.changedTouches)e.identifier===this.cameraFingerID&&(this.cameraFingerID=null,this.touchCameraDragging=!1)}setMobileVisible(t){this.mobileControlsContainer&&(this.mobileControlsContainer.style.display=t?"block":"none")}setSensitivity(t){this.sensitivity=t}update(){this.input.boost=!!this.keys[" "],this.input.turbo=!!this.keys.shift,this.input.isDragging=this.mouseDragging,this.input.fire=!!this.keys.enter||!!this.keys.f,this.input.fireFlare=!!this.keys.v,this.input.toggleWeapon=!!this.keys.q&&!this.prevKeys.q,this.input.weaponIndex=-1,this.keys[1]&&(this.input.weaponIndex=0),this.keys[2]&&(this.input.weaponIndex=1),this.input.flap=!!this.keys.w,this.keys.s?this.input.throttle=Math.max(0,this.input.throttle-.5*.016):this.input.flap?this.input.throttle=Math.min(1,this.input.throttle+.5*.016):this.input.throttle=Math.max(0,this.input.throttle-.2*.016);const t=this.keys.arrowup?-1:this.keys.arrowdown?1:0;this.input.pitch=this.lerp(this.input.pitch,t,.1);const e=this.keys.arrowleft?-1:this.keys.arrowright?1:0;this.input.roll=this.lerp(this.input.roll,e,.1);const n=this.keys.a?-1:this.keys.d?1:0;if(this.input.yaw=this.lerp(this.input.yaw,n,.1),this.isMobile&&this.tiltEnabled){let r=0;Math.abs(this.tiltRoll)>3&&(r=Math.max(-1,Math.min(1,(this.tiltRoll-Math.sign(this.tiltRoll)*3)/32)));let o=0;Math.abs(this.tiltPitch)>3&&(o=Math.max(-1,Math.min(1,(this.tiltPitch-Math.sign(this.tiltPitch)*3)/32))),this.input.roll=this.lerp(this.input.roll,r*this.tiltSensitivity,.15),this.input.pitch=this.lerp(this.input.pitch,o*this.tiltSensitivity,.15),Math.abs(r)>.3?this.input.yaw=this.lerp(this.input.yaw,r*.4,.1):this.input.yaw=this.lerp(this.input.yaw,0,.1)}return this.isMobile&&(this.input.throttle=this.touchThrottle,this.input.boost=this.input.boost||this.touchBoosting,this.input.turbo=this.input.turbo||this.touchTurbo,this.input.flap=this.input.flap||this.touchFlapping,this.touchFlapping&&(this.input.throttle=Math.min(1,this.input.throttle+.5*.016)),this.input.fire=this.input.fire||this.touchFiring,this.input.fireFlare=this.input.fireFlare||this.touchFlare,this.touchWeaponToggle&&!this.touchPrevWeaponToggle&&(this.input.toggleWeapon=!0),this.touchPrevWeaponToggle=this.touchWeaponToggle,this.touchWeaponToggle=!1,this.touchCameraDragging&&(this.input.isDragging=!0,this.input.cameraYaw+=this.touchCameraDeltaX*this.sensitivity,this.input.cameraPitch-=this.touchCameraDeltaY*this.sensitivity,this.input.cameraPitch=Math.max(-85,Math.min(85,this.input.cameraPitch)),this.touchCameraDeltaX=0,this.touchCameraDeltaY=0)),this.mouseDragging?(this.input.cameraYaw+=this.mouseDeltaX*this.sensitivity,this.input.cameraPitch-=this.mouseDeltaY*this.sensitivity,this.input.cameraPitch=Math.max(-85,Math.min(85,this.input.cameraPitch)),this.mouseDeltaX=0,this.mouseDeltaY=0):this.touchCameraDragging||(this.input.cameraYaw=this.lerp(this.input.cameraYaw,0,.1),this.input.cameraPitch=this.lerp(this.input.cameraPitch,0,.1)),this.prevKeys={...this.keys},this.input}reset(){this.input.cameraYaw=0,this.input.cameraPitch=0,this.mouseDragging=!1,this.mouseDeltaX=0,this.mouseDeltaY=0,this.input.throttle=0,this.input.pitch=0,this.input.roll=0,this.input.yaw=0,this.touchThrottle=0,this.touchBoosting=!1,this.touchFiring=!1,this.touchFlare=!1}lerp(t,e,n){return(1-n)*t+n*e}}function Kx(){const i=new De,t=new Gt({color:1969924}),e=new Gt({color:1378304,side:Le}),n=new Gt({color:16315628}),s=new Gt({color:15245312}),a=new Gt({color:15789536,side:Le}),r=new Gt({color:15245312}),o=new Gt({color:656384,side:Le}),l=new Gt({color:2760720}),c=new Gt({color:13410304}),h=new Ue({color:0});var u,d;u=new ie(1,8,6),u.scale(.09,.06,.22),i.add(new nt(u,t)),u=new ie(1,6,5),u.scale(.07,.05,.14),d=new nt(u,new Gt({color:3876117})),d.position.set(0,-.015,.03),i.add(d),d=new nt(new tn(.025,.035,.04,6),n),d.position.set(0,.025,.16),d.rotation.x=-.2,i.add(d),u=new ie(.04,8,6),u.scale(1,.9,1.1),d=new nt(u,n),d.position.set(0,.045,.2),i.add(d),d=new nt(new fe(.05,.008,.02),n),d.position.set(0,.06,.22),i.add(d),d=new nt(new $e(.012,.045,4),s),d.position.set(0,.038,.245),d.rotation.x=1.3,i.add(d),d=new nt(new $e(.007,.02,3),s),d.position.set(0,.028,.24),d.rotation.x=1.7,i.add(d),[-1,1].forEach(function(w){d=new nt(new ie(.012,5,4),l),d.position.set(w*.028,.05,.22),i.add(d),d=new nt(new ie(.009,5,4),c),d.position.set(w*.029,.051,.224),i.add(d),d=new nt(new ie(.005,4,3),h),d.position.set(w*.031,.051,.228),i.add(d)});function p(w){var y=w?1:-1,E=new De;E.position.set(0,.012,.01);for(var R=[[.08,.16,.18],[.2,.14,.17],[.31,.13,.15],[.41,.12,.13],[.5,.1,.11],[.58,.09,.09],[.65,.08,.07]],T=0;T<R.length;T++){var D=R[T];d=new nt(new fe(D[1],.006,D[2]),e),d.position.set(y*D[0],.003-T*.001,0),E.add(d),d=new nt(new fe(D[1]*.95,.004,D[2]*.9),new Gt({color:2759178,side:Le})),d.position.set(y*D[0],-.002-T*.001,0),E.add(d)}var x=new De;x.position.set(y*.5,0,-.01);for(var M=[],A=0;A<5;A++){var I=.13-A*.012;d=new nt(new fe(I,.003,.016-A*.002),o),d.position.set(y*(.22+I/2),-.002,-.01+A*.012),d.rotation.y=y*(A-2)*.04,x.add(d),M.push(d)}return E.add(x),{pivot:E,elbow:x,primaries:M}}var g=p(!0),_=p(!1);i.add(g.pivot),i.add(_.pivot);var m=new De;m.position.set(0,.005,-.19);for(var f=0;f<9;f++){var S=(f-4)*.06;d=new nt(new fe(.025,.004,.13),a),d.position.set(Math.sin(S)*.012,0,-.065),d.rotation.y=S,m.add(d)}return d=new nt(new fe(.07,.018,.06),t),d.position.set(0,.004,.02),m.add(d),i.add(m),[-1,1].forEach(function(w){d=new nt(new tn(.012,.008,.04,4),t),d.position.set(w*.025,-.04,-.05),d.rotation.x=.5,i.add(d),d=new nt(new tn(.004,.005,.04,4),r),d.position.set(w*.025,-.07,-.06),i.add(d)}),i.rotation.y=Math.PI,i.userData={leftShoulder:g.pivot,rightShoulder:_.pivot,leftElbow:g.elbow,rightElbow:_.elbow,leftPrimaries:g.primaries,rightPrimaries:_.primaries,tailPivot:m,flapPhase:0,smoothRoll:0,smoothPitch:0,smoothYaw:0},i}function Jx(i,t,e){if(!i||!i.userData||!i.userData.leftShoulder)return;var n=i.userData,s=n.leftShoulder,a=n.rightShoulder,r=n.leftElbow,o=n.rightElbow,l=n.tailPivot,c=n.leftPrimaries,h=n.rightPrimaries,u=e.isFlapping||!1,d=e.flapStrength||0,p=e.isGliding||!1,g=e.isBoosting||!1,_=e.isTurbo||!1,m=e.speed||15;function f(z,Z,lt){return z+(Z-z)*Math.min(1,lt)}n.smoothRoll=f(n.smoothRoll,e.roll||0,t*4),n.smoothPitch=f(n.smoothPitch,e.pitch||0,t*3),n.smoothYaw=f(n.smoothYaw,e.yaw||0,t*4);var S=n.smoothRoll/45,w=S*.12,y=-S*.12,E=n.smoothPitch/30,R=E*.06,T=n.smoothYaw;if(_)s.rotation.z=f(s.rotation.z,-.7+w,t*8),a.rotation.z=f(a.rotation.z,.7+y,t*8),r.rotation.z=f(r.rotation.z,-.4,t*6),o.rotation.z=f(o.rotation.z,.4,t*6),l&&(l.rotation.x=f(l.rotation.x,-.1,t*5));else if(g)s.rotation.z=f(s.rotation.z,-.6+w,t*7),a.rotation.z=f(a.rotation.z,.6+y,t*7),r.rotation.z=f(r.rotation.z,-.35,t*5),o.rotation.z=f(o.rotation.z,.35,t*5),l&&(l.rotation.x=f(l.rotation.x,.15,t*4));else if(u&&d>0){n.flapPhase+=t*8;var D=n.flapPhase%(Math.PI*2),x=Math.sin(D)*.55*d,M=Math.sin(D+.35)*.22*d,A=Math.cos(D)*.1*d;s.rotation.z=x+w,a.rotation.z=-x+y,r.rotation.z=M,o.rotation.z=-M,s.rotation.y=A+R,a.rotation.y=-A-R,l&&(l.rotation.x=Math.sin(D+1)*.06,l.rotation.y=T*.08)}else if(p){var I=.08+Math.sin(performance.now()*5e-4)*.015;s.rotation.z=f(s.rotation.z,I+w,t*3),a.rotation.z=f(a.rotation.z,-I+y,t*3),r.rotation.z=f(r.rotation.z,.02,t*3),o.rotation.z=f(o.rotation.z,-.02,t*3),s.rotation.y=f(s.rotation.y,R,t*2.5),a.rotation.y=f(a.rotation.y,-R,t*2.5),l&&(l.rotation.x=f(l.rotation.x,E*.06,t*3),l.rotation.y=f(l.rotation.y,T*.1,t*3)),n.flapPhase=0}else s.rotation.z=f(s.rotation.z,.05+w,t*4),a.rotation.z=f(a.rotation.z,-.05+y,t*4),r.rotation.z=f(r.rotation.z,0,t*4),o.rotation.z=f(o.rotation.z,0,t*4);var L=Math.min(1,m/50),B=(1-L)*.06;if(c&&h)for(var O=0;O<5;O++){var G=B*(O-2);c[O]&&(c[O].rotation.y=f(c[O].rotation.y,G,t*3)),h[O]&&(h[O].rotation.y=f(h[O].rotation.y,-G,t*3))}}function Si(i,t,e,n,s,a){const r=Cesium.Math.toRadians(n),o=Cesium.Math.toRadians(s),l=6371e3,c=a*Math.cos(r)*Math.cos(o)/l,h=a*Math.sin(r)*Math.cos(o)/(l*Math.cos(Cesium.Math.toRadians(t))),u=a*Math.sin(o);return{lon:i+Cesium.Math.toDegrees(h),lat:t+Cesium.Math.toDegrees(c),alt:e+u}}async function nu(i,t){try{const n=await(await fetch(`https://nominatim.openstreetmap.org/reverse?format=json&lat=${t}&lon=${i}&zoom=5&addressdetails=1`)).json();if(n&&n.address){const s=n.address,a=s.state||s.region||s.province,r=s.country;if(a&&r)return`${a}, ${r}`.toUpperCase();if(r)return r.toUpperCase()}}catch(e){console.error("Reverse geocoding error:",e)}return null}function iu(i,t,e,n){const a=t*Math.PI/180,r=n*Math.PI/180,o=(n-t)*Math.PI/180,l=(e-i)*Math.PI/180,c=Math.sin(o/2)*Math.sin(o/2)+Math.cos(a)*Math.cos(r)*Math.sin(l/2)*Math.sin(l/2);return 6371e3*(2*Math.atan2(Math.sqrt(c),Math.sqrt(1-c)))}class jx{constructor(){this.speedElem=document.getElementById("speed"),this.altElem=document.getElementById("altitude"),this.timeElem=document.getElementById("time"),this.scoreElem=document.getElementById("score"),this.fpsElem=document.getElementById("fps"),this.localDateTimeElem=document.getElementById("local-datetime"),this.coordsElem=document.getElementById("coords"),this.minimapCanvas=document.getElementById("minimap"),this.miniCtx=this.minimapCanvas.getContext("2d"),this.pauseMinimapCanvas=document.getElementById("pauseMinimap"),this.pauseMinimapCanvas&&(this.pauseMiniCtx=this.pauseMinimapCanvas.getContext("2d")),this.pauseRegionElem=document.getElementById("pause-region"),this.pauseLatElem=document.getElementById("pause-lat"),this.pauseLonElem=document.getElementById("pause-lon"),this.pauseAltElem=document.getElementById("pause-alt"),this.pauseTimeElem=document.getElementById("pause-time"),this.uiContainer=document.getElementById("uiContainer"),this.compassTape=document.getElementById("compass-tape"),this.headingDisplay=document.getElementById("heading-display"),this.regionNotif=document.getElementById("region-notification"),this.regionNameElem=document.getElementById("region-name"),this.regionTimeout=null,this.pullUpElem=document.getElementById("pull-up-warning"),this.flightModeElem=document.getElementById("flight-mode-indicator"),this.thermalIndicator=document.getElementById("thermal-indicator"),this.wingSpreadBar=document.getElementById("wing-spread-bar"),this.liftValueElem=document.getElementById("lift-value"),this.vspeedValueElem=document.getElementById("vspeed-value"),this.weatherConditionElem=document.getElementById("weather-condition"),this.weatherWindElem=document.getElementById("weather-wind"),this.killNotifContainer=document.getElementById("kill-notification-container"),this.killTextElem=document.getElementById("kill-text"),this.killScoreElem=document.getElementById("kill-score"),this.killTimeout=null,this.weaponElems={gun:document.getElementById("weapon-gun"),missile:document.getElementById("weapon-missile"),flare:document.getElementById("weapon-flare")},this.weaponAmmoElems={gun:this.weaponElems.gun.querySelector(".weapon-ammo"),missile:this.weaponElems.missile.querySelector(".weapon-ammo"),flare:this.weaponElems.flare.querySelector(".weapon-ammo")},this.weaponProgressElems={gun:this.weaponElems.gun.querySelector(".weapon-progress"),missile:this.weaponElems.missile.querySelector(".weapon-progress"),flare:this.weaponElems.flare.querySelector(".weapon-progress")},this.vignette=document.getElementById("transition-vignette"),this.startTime=Date.now(),this.smoothedPitch=0,this.smoothedRoll=0,this.smoothedHeading=0,this.smoothedThrottle=0,this.smoothedYaw=0,this.smoothedBoostScale=1,this.currentShakeX=0,this.currentShakeY=0,this.minimapRange=1,this.showHorizonLines=!1,this.npcMarkers=new Map,this.npcContainer=document.createElement("div"),this.npcContainer.id="npc-markers-layer",this.npcContainer.style.cssText="position:absolute; top:0; left:0; width:100%; height:100%; pointer-events:none; z-index:15;",this.uiContainer.appendChild(this.npcContainer),this.createHorizon(),this.createMissileCrosshair(),this.createCompass(),this.resizeMinimap(),window.addEventListener("resize",()=>this.resizeMinimap())}createMissileCrosshair(){if(document.getElementById("missile-crosshair"))return;const t=document.createElement("div");t.id="missile-crosshair",t.style.cssText=`
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
		`;const n=document.createElement("div");n.style.cssText="position:absolute; left:50%; top:50%; transform:translate(-50%,-50%); width:10px; height:10px; border-radius:50%; background:#d4a017;";const s=(u,d,p,g,_)=>{const m=document.createElement("div");return m.style.cssText=`position:absolute; left:${u}; top:${d}; width:${p}; height:${g}; background:#d4a017; transform:${_};`,m},a=48,r=18,o=s("calc(50% - "+a+"px - "+r/2+"px)","50%","18px","2px","translateY(-50%)"),l=s("calc(50% + "+a+"px - "+r/2+"px)","50%","18px","2px","translateY(-50%)"),c=s("50%","calc(50% - "+a+"px - "+r/2+"px)","2px",r+"px","translateX(-50%)");t.appendChild(e),t.appendChild(n),t.appendChild(c),t.appendChild(o),t.appendChild(l);const h=document.getElementById("horizon-container");h?h.appendChild(t):this.uiContainer.appendChild(t),this.missileCrosshair=t}showMissileCrosshair(t){if(!this.missileCrosshair)return;const e=document.getElementById("normal-crosshair");t?(e&&(e.style.display="none"),this.missileCrosshair.style.display="block"):(this.missileCrosshair.style.display="none",e&&(e.style.display="flex"))}createCompass(){if(!this.compassTape)return;const t=5,e=4;this.compassTape.innerHTML="";for(let n=-360;n<=720;n+=t){const s=document.createElement("div");s.className="compass-tick";const a=n%10===0;if(s.style.left=`${(n+360)*e}px`,s.style.height=a?"10px":"5px",a){const r=document.createElement("div");r.className="compass-label",r.style.left=`${(n+360)*e}px`;let o=n%360;o<0&&(o+=360);let l=Math.round(o).toString().padStart(3,"0");Math.round(o)===0||Math.round(o)===360?l="N":Math.round(o)===90?l="E":Math.round(o)===180?l="S":Math.round(o)===270&&(l="W"),r.innerText=l,this.compassTape.appendChild(r)}this.compassTape.appendChild(s)}}resetTime(){this.startTime=Date.now()}setMinimapRange(t){this.minimapRange=t}setShowHorizonLines(t){this.showHorizonLines=t;const e=document.getElementById("pitch-lines");e&&(e.style.display=t?"block":"none")}showKillNotification(t,e){if(this.killTimeout&&clearTimeout(this.killTimeout),this.killNotifContainer){this.killNotifContainer.classList.remove("hidden"),this.killNotifContainer.classList.remove("kill-notification-exit");const n=`${t} CAUGHT!`,s="ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*()";let a=0;this.glitchInterval&&clearInterval(this.glitchInterval),this.glitchInterval=setInterval(()=>{if(this.killTextElem){const r=Math.floor(a),o=n.split("").map((c,h)=>h<r?n[h]:h===r?s[Math.floor(Math.random()*s.length)]:"").join(""),l=r<n.length?Math.random()>.5?"_":" ":"";this.killTextElem.innerText=o+l}a>=n.length&&(this.killTextElem&&(this.killTextElem.innerText=n),clearInterval(this.glitchInterval)),a+=1},40),this.killScoreElem&&(this.killScoreElem.innerText=`+${e}`),this.killNotifContainer.style.animation="none",this.killNotifContainer.offsetHeight,this.killNotifContainer.style.animation=null,this.killTimeout=setTimeout(()=>{this.killNotifContainer.classList.add("kill-notification-exit"),setTimeout(()=>{this.killNotifContainer.classList.add("hidden"),this.killNotifContainer.classList.remove("kill-notification-exit")},500),this.glitchInterval&&clearInterval(this.glitchInterval)},3e3)}}showRegion(t){this.regionTimeout&&clearTimeout(this.regionTimeout),this.regionNameElem.innerText=t,this.regionNotif.classList.remove("hidden"),this.regionNotif.classList.remove("region-exit"),this.regionTimeout=setTimeout(()=>{this.regionNotif.classList.add("region-exit"),this.regionTimeout=setTimeout(()=>{this.regionNotif.classList.add("hidden"),this.regionTimeout=null},1e3)},4e3)}updateEagleStatus(t){if(this.flightModeElem){let e="SOARING",n="";t.isTurbo||t.turboWindup>.1?(e=`TURBO ${Math.round(t.speed)} KTS`,n="turbo"):t.isBoosting?(e="DIVING",n="diving"):t.isFlapping?(e="FLAPPING",n="flapping"):t.isGliding?(e="GLIDING",n="gliding"):t.inThermal&&(e="RIDING THERMAL",n="thermal"),this.flightModeElem.textContent=e,this.flightModeElem.className=n}if(this.thermalIndicator)if(t.inThermal){this.thermalIndicator.classList.remove("hidden");const e=Math.round((t.thermalStrength||0)*100);this.thermalIndicator.textContent=`THERMAL ${e}%`}else this.thermalIndicator.classList.add("hidden");if(this.wingSpreadBar){const e=(t.wingSpread||1)*100;this.wingSpreadBar.style.width=`${e}%`}if(this.liftValueElem){const e=t.liftForce||0;this.liftValueElem.textContent=e.toFixed(1)}if(this.vspeedValueElem){const e=t.verticalSpeed||0,n=Math.round(e*196.85);this.vspeedValueElem.textContent=`${n>0?"+":""}${n}`,this.vspeedValueElem.className=n>10?"climbing":n<-10?"descending":""}}updateWeatherDisplay(t){if(t.weatherConditions){const e=t.weatherConditions;this.weatherConditionElem&&(this.weatherConditionElem.textContent=`${e.daypartName} | ${e.weatherName}`),this.weatherWindElem&&(this.weatherWindElem.textContent=`WIND ${e.windSpeed}kt ${e.windDirection}°`)}}setPullUpWarning(t){this.pullUpElem&&(t?this.pullUpElem.classList.remove("hidden"):this.pullUpElem.classList.add("hidden"))}resizeMinimap(){requestAnimationFrame(()=>{this.minimapCanvas.width=this.minimapCanvas.offsetWidth,this.minimapCanvas.height=this.minimapCanvas.offsetHeight,this.pauseMinimapCanvas&&(this.pauseMinimapCanvas.width=this.pauseMinimapCanvas.offsetWidth,this.pauseMinimapCanvas.height=this.pauseMinimapCanvas.offsetHeight);const t=qx();t&&t.resize();const e=Zx();e&&e.resize()})}createHorizon(){if(!document.getElementById("horizon-container")){const t=document.getElementById("uiContainer"),e=document.createElement("div");e.id="horizon-container",e.style.cssText=`
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
				`,h.innerText=c,l.appendChild(h)}e.appendChild(l),t.appendChild(e),this.setShowHorizonLines(this.showHorizonLines)}}updatePauseMenu(t,e,n=[]){if(this.pauseRegionElem&&(this.pauseRegionElem.innerText=e||"UNKNOWN REGION"),this.pauseLatElem){const g=t.lat>=0?"N":"S";this.pauseLatElem.innerText=`${Math.abs(t.lat).toFixed(4)}°${g}`}if(this.pauseLonElem){const g=t.lon>=0?"E":"W";this.pauseLonElem.innerText=`${Math.abs(t.lon).toFixed(4)}°${g}`}if(this.pauseAltElem){const g=Math.max(0,Math.round(t.alt*3.28084));this.pauseAltElem.innerText=`${g.toLocaleString()} FT`}if(this.pauseTimeElem){const g=new Date,_=g.getTime()+g.getTimezoneOffset()*6e4,m=Math.round((t.lon||0)/15),f=new Date(_+36e5*m),S=f.getFullYear(),w=(f.getMonth()+1).toString().padStart(2,"0"),y=f.getDate().toString().padStart(2,"0"),E=f.getHours().toString().padStart(2,"0"),R=f.getMinutes().toString().padStart(2,"0"),T=f.getSeconds().toString().padStart(2,"0");this.pauseTimeElem.innerText=`${S}-${w}-${y}T${E}:${R}:${T}Z`}const s=this.minimapRange*1e4;if(Yx(t.lon,t.lat,s,0),!this.pauseMiniCtx||!this.pauseMinimapCanvas)return;const a=this.pauseMiniCtx,r=this.pauseMinimapCanvas.width,o=this.pauseMinimapCanvas.height,l=r/2,c=o/2;a.clearRect(0,0,r,o),a.strokeStyle="rgba(212, 160, 23, 0.2)",a.lineWidth=1;const h=50;a.beginPath();for(let g=l;g<=r;g+=h)a.moveTo(g,0),a.lineTo(g,o);for(let g=l-h;g>=0;g-=h)a.moveTo(g,0),a.lineTo(g,o);for(let g=c;g<=o;g+=h)a.moveTo(0,g),a.lineTo(r,g);for(let g=c-h;g>=0;g-=h)a.moveTo(0,g),a.lineTo(r,g);a.stroke(),a.strokeStyle="#d4a017",a.lineWidth=2;const u=15;a.beginPath(),a.moveTo(l-u,c),a.lineTo(l+u,c),a.moveTo(l,c-u),a.lineTo(l,c+u),a.stroke(),a.fillStyle="#d4a017",a.font="12px AceCombat",a.fillText("SHADOW",l+20,c+5);const d=s*1.1547,p=o/d;n.forEach(g=>{const _=(g.lon-t.lon)*111320*Math.cos(t.lat*Math.PI/180),m=(g.lat-t.lat)*111320,f=l+_*p,S=c-m*p;f<0||f>r||S<0||S>o||(a.strokeStyle="#fff",a.lineWidth=2,a.save(),a.translate(f,S),a.rotate(45*Math.PI/180),a.beginPath(),a.rect(-5,-5,10,10),a.stroke(),a.restore(),a.fillStyle="#fff",a.font="10px AceCombat",a.fillText(g.name||"PREY",f+10,S+5))})}update(t,e=[]){const s=(I,L,B)=>{let O=L-I;for(;O<-180;)O+=360;for(;O>180;)O-=360;return I+O*B},a=(I,L)=>{let B=I-L;for(;B<-180;)B+=360;for(;B>180;)B-=360;return B},r=I=>{for(;I<=-180;)I+=360;for(;I>180;)I-=360;return I};this.smoothedPitch=s(this.smoothedPitch,t.pitch,.5),this.smoothedRoll=s(this.smoothedRoll,t.roll,.5),this.smoothedHeading=s(this.smoothedHeading,t.heading||0,.5),this.smoothedThrottle=this.smoothedThrottle+((t.throttle||0)-this.smoothedThrottle)*(.5*.4),this.smoothedYaw=this.smoothedYaw+((t.yaw||0)-this.smoothedYaw)*.5,this.smoothedPitch=r(this.smoothedPitch),this.smoothedRoll=r(this.smoothedRoll),this.smoothedHeading=r(this.smoothedHeading);const o=this.minimapRange*1500,l=this.minimapRange*2;let c=o+t.speed*l;t.isBoosting&&(c*=1.2),t.isTurbo&&(c*=3),this.currentZoom=c,Xx(t.lon,t.lat,c,this.smoothedHeading);const h=t.isBoosting||!1,u=t.isTurbo||!1;this.vignette&&(this.vignette.style.opacity=h||u?"1":"0");const d=a(t.pitch,this.smoothedPitch),p=a(t.roll,this.smoothedRoll),g=(t.yaw||0)-this.smoothedYaw,_=(t.throttle||0)-this.smoothedThrottle;if(this.uiContainer){const L=Math.max(-15,Math.min(15,d*.8)),B=Math.max(-15,Math.min(15,-p*.3+g*5)),O=50,G=Math.max(-O,Math.min(O,-p*1.5-g*20)),z=Math.max(-O,Math.min(O,d*3+_*15)),Z=u?1.04:h?1.02:1;this.smoothedBoostScale=this.smoothedBoostScale+(Z-this.smoothedBoostScale)*.1;const lt=(1+_*.25)*this.smoothedBoostScale;if(u){const et=Date.now()*.06;this.currentShakeX=Math.sin(et*2)*3+Math.cos(et*3.1)*2,this.currentShakeY=Math.cos(et*2.3)*3+Math.sin(et*3.5)*2}else if(h){const et=Date.now()*.05;this.currentShakeX=Math.sin(et*1.5)*2+Math.cos(et*2.1)*1.5,this.currentShakeY=Math.cos(et*1.7)*2+Math.sin(et*2.3)*1.5}else this.currentShakeX*=.85,this.currentShakeY*=.85;this.uiContainer.style.transform=`perspective(1000px) rotateX(${L}deg) rotateY(${B}deg) translate(${G+this.currentShakeX}px, ${z+this.currentShakeY}px) scale(${lt})`}this.speedElem.innerText=Math.round(t.speed).toString().padStart(3,"0"),this.updateEagleStatus(t),this.updateWeatherDisplay(t),t.weaponSystem&&this.updateWeapons(t.weaponSystem);let m=this.smoothedHeading;for(;m<0;)m+=360;for(;m>=360;)m-=360;if(this.headingDisplay){let I=Math.round(m);I===360&&(I=0);let L="";I>=337.5||I<22.5?L="N":I>=22.5&&I<67.5?L="NE":I>=67.5&&I<112.5?L="E":I>=112.5&&I<157.5?L="SE":I>=157.5&&I<202.5?L="S":I>=202.5&&I<247.5?L="SW":I>=247.5&&I<292.5?L="W":I>=292.5&&I<337.5&&(L="NW"),this.headingDisplay.innerText=`${I.toString().padStart(3,"0")} ${L}`}if(this.compassTape){const O=160-(m+360)*4;this.compassTape.style.transform=`translateX(${O}px)`}const f=Math.max(0,Math.round(t.alt*3.28084));this.altElem.innerText=f.toString().padStart(5,"0"),this.scoreElem&&(this.scoreElem.innerText=(t.score||0).toString().padStart(6,"0"));const S=Date.now()-this.startTime,w=Math.floor(S/6e4),y=Math.floor(S%6e4/1e3),E=Math.floor(S%1e3/10);this.timeElem.innerText=`${w.toString().padStart(2,"0")}:${y.toString().padStart(2,"0")}:${E.toString().padStart(2,"0")}`;const R=new Date,T=R.getTime()+R.getTimezoneOffset()*6e4,D=Math.round((t.lon||0)/15),x=new Date(T+36e5*D);if(this.localDateTimeElem){const I=x.getFullYear(),L=(x.getMonth()+1).toString().padStart(2,"0"),B=x.getDate().toString().padStart(2,"0"),O=x.getHours().toString().padStart(2,"0"),G=x.getMinutes().toString().padStart(2,"0"),z=x.getSeconds().toString().padStart(2,"0");this.localDateTimeElem.innerText=`${I}-${L}-${B}T${O}:${G}:${z}Z`}if(this.coordsElem){const I=t.lat>=0?"N":"S",L=t.lon>=0?"E":"W";this.coordsElem.innerText=`POS: ${Math.abs(t.lat).toFixed(4)}°${I} ${Math.abs(t.lon).toFixed(4)}°${L}`}const M=document.getElementById("pitch-lines"),A=document.getElementById("horizon-container");M&&A&&(A.style.transform=`translate(-50%, -50%) rotate(${-this.smoothedRoll}deg)`,M.style.transform=`translateY(${this.smoothedPitch*6}px)`),this.drawMinimap(t,e),this.updateNPCMarkers(e,t)}drawMinimap(t,e=[]){if(!this.miniCtx||!this.minimapCanvas)return;const n=this.miniCtx,s=this.minimapCanvas.width||250,a=this.minimapCanvas.height||250,r=s/2,o=a/2,l=Math.min(r,o)-10;n.clearRect(0,0,s,a),n.save(),n.translate(r,o);const c=this.smoothedHeading;n.rotate(-c*Math.PI/180),n.strokeStyle="rgba(212, 160, 23, 0.35)",n.lineWidth=1;const h=this.minimapRange*1e3,u=(this.currentZoom||this.minimapRange*1500)*1.1547,d=h*a/u,p=a/u,g=Math.min(1e4*p,l),_=l*2;for(let T=0;T<=_;T+=d)n.beginPath(),n.moveTo(T,-_),n.lineTo(T,_),n.stroke(),T>0&&(n.beginPath(),n.moveTo(-T,-_),n.lineTo(-T,_),n.stroke());for(let T=0;T<=_;T+=d)n.beginPath(),n.moveTo(-_,T),n.lineTo(_,T),n.stroke(),T>0&&(n.beginPath(),n.moveTo(-_,-T),n.lineTo(_,-T),n.stroke());e.forEach(T=>{if(iu(t.lon,t.lat,T.lon,T.lat)>this.minimapRange*5e3)return;const x=(T.lon-t.lon)*111320*Math.cos(t.lat*Math.PI/180),M=(T.lat-t.lat)*111320,A=x*p,I=-M*p;Math.sqrt(A*A+I*I)>l-5||(n.save(),n.translate(A,I),n.rotate(T.heading*Math.PI/180),n.fillStyle="#fff",n.shadowBlur=0,n.beginPath(),n.moveTo(0,-8),n.lineTo(6,6),n.lineTo(0,3),n.lineTo(-6,6),n.closePath(),n.fill(),n.restore())}),n.restore();const m=12,f=r-m,S=o-m;n.strokeStyle="rgba(212, 160, 23, 0.7)",n.lineWidth=1.2,n.beginPath(),n.moveTo(0,o),n.lineTo(s,o),n.moveTo(r,0),n.lineTo(r,a);const w=we();let y=Math.PI/4;if(w&&w.camera&&w.camera.frustum){const T=w.camera.frustum.fovy,D=window.innerWidth/window.innerHeight;y=Math.atan(Math.tan(T/2)*D)}const E=s+a;n.moveTo(r,o),n.lineTo(r-Math.sin(y)*E,o-Math.cos(y)*E),n.moveTo(r,o),n.lineTo(r+Math.sin(y)*E,o-Math.cos(y)*E),n.stroke(),n.fillStyle="#d4a017",n.font=`bold 16px ${getComputedStyle(document.body).fontFamily}`,n.shadowColor="rgba(0, 0, 0, 0.5)",n.shadowBlur=4,n.textAlign="center",n.textBaseline="middle",[{label:"N",angle:0},{label:"E",angle:90},{label:"S",angle:180},{label:"W",angle:270}].forEach(T=>{const D=(T.angle-c)*Math.PI/180,x=Math.sin(D),M=Math.cos(D),A=Math.abs(x),I=Math.abs(M);let L,B;f*I>S*A?(B=M>0?-S:S,L=B*x/-M):(L=x>0?f:-f,B=L*-M/x),n.fillText(T.label,r+L,o+B)}),n.save(),n.translate(r,o),n.fillStyle="#d4a017",n.shadowBlur=0,n.beginPath(),n.moveTo(0,-12),n.lineTo(8,10),n.lineTo(0,5),n.lineTo(-8,10),n.closePath(),n.fill(),n.strokeStyle="rgba(212, 160, 23, 0.7)",n.lineWidth=1.2,n.beginPath(),n.arc(0,0,g,0,Math.PI*2),n.stroke(),n.restore();const R=Date.now()/1500%1;n.strokeStyle=`rgba(212, 160, 23, ${.7*(1-R)})`,n.lineWidth=1.2,n.beginPath(),n.arc(r,o,R*g,0,Math.PI*2),n.stroke()}updateNPCMarkers(t,e){const n=we();if(!n)return;const s=new Set;if(t&&t.length>0){this.npcContainer.style.display="block";const a=n.scene,r=a.camera,o=2e5,l=new Cesium.Cartesian3,c=new Cesium.Cartesian3;t.forEach(h=>{Cesium.Cartesian3.fromDegrees(h.lon,h.lat,h.alt,void 0,l),Cesium.Cartesian3.fromDegrees(e.lon,e.lat,e.alt,void 0,c);const u=Cesium.Cartesian3.distance(l,c);if(u>o)return;const d=h.id||h.name;s.add(d);let p=this.npcMarkers.get(d);p||(p=this.createNPCMarker(h),this.npcMarkers.set(d,p));const g=Cesium.SceneTransforms.worldToWindowCoordinates||Cesium.SceneTransforms.wgs84ToWindowCoordinates,_=g?g(a,l):null,m=Cesium.Cartesian3.subtract(l,r.position,new Cesium.Cartesian3),f=Cesium.Cartesian3.dot(m,r.direction);if(!_||f<=0||_.x<0||_.x>window.innerWidth||_.y<0||_.y>window.innerHeight){const w=Cesium.Cartesian3.dot(m,r.right),y=-Cesium.Cartesian3.dot(m,r.up);this.updateOffScreenMarker(p,w,y,h,u)}else this.updateOnScreenMarker(p,_,h,u,e)})}else this.npcContainer.style.display="none";for(const[a,r]of this.npcMarkers)s.has(a)||(r.container.remove(),this.npcMarkers.delete(a))}createNPCMarker(t){const e=document.createElement("div");e.className="npc-marker-container";const n=document.createElement("div");n.className="npc-visual-wrapper";const s=document.createElement("div");s.className="npc-diamond";const a=document.createElement("div");a.className="npc-lock-box",a.style.display="none";const r=document.createElement("div");r.className="npc-label";const o=document.createElement("div");o.className="npc-offscreen-dot",o.style.display="none";const l=document.createElement("div");return l.className="npc-offscreen-name",l.style.display="none",n.appendChild(s),n.appendChild(a),e.appendChild(n),e.appendChild(r),e.appendChild(o),e.appendChild(l),this.npcContainer.appendChild(e),{container:e,diamond:s,label:r,dot:o,offscreenName:l,lockBox:a}}updateOnScreenMarker(t,e,n,s,a){t.container.style.display="flex",t.container.style.transform=`translate3d(${e.x}px, ${e.y}px, 0) translate(-50%, -50%)`,t.diamond.style.display="block",t.label.style.display="block",t.dot.style.display="none",t.offscreenName.style.display="none";const r=a.weaponSystem;r&&r.lockingTarget===n?(t.lockBox.style.display="block",r.lockStatus==="LOCKED"?(t.lockBox.classList.remove("locking-blink"),t.lockBox.style.borderColor="#d4a017",t.lockBox.innerHTML='<span style="position:absolute; top:-20px; left:50%; transform:translateX(-50%); font-weight:bold; color:#d4a017; font-size:12px; text-shadow: 0 0 8px rgba(212, 160, 23, 0.8);">TARGET</span>'):r.lockStatus==="LOCKING"&&(t.lockBox.classList.add("locking-blink"),t.lockBox.style.borderColor="#d4a017",t.lockBox.innerHTML="")):(t.lockBox.style.display="none",t.lockBox.innerHTML="");const o=(s/1e3).toFixed(1),l=`${n.name}
${o} KM`;t.label.innerText!==l&&(t.label.innerText=l)}updateOffScreenMarker(t,e,n,s,a){t.container.style.display="flex",t.diamond.style.display="none",t.label.style.display="none",t.dot.style.display="block",t.offscreenName.style.display="block";const r=window.innerWidth/2,o=window.innerHeight/2;Math.abs(e)<1e-4&&Math.abs(n)<1e-4&&(n=-1);const l=Math.atan2(n,e),c=40,h=r-c,u=o-c,d=Math.cos(l),p=Math.sin(l);let g,_;Math.abs(h*p)>Math.abs(u*d)?(_=u*Math.sign(p),g=_*d/p):(g=h*Math.sign(d),_=g*p/d);const m=r+g,f=o+_;t.container.style.transform=`translate3d(${m}px, ${f}px, 0) translate(-50%, -50%)`,t.offscreenName.innerText!==s.name&&(t.offscreenName.innerText=s.name),t.lockBox&&(t.lockBox.style.display="none",t.lockBox.innerHTML="")}updateFPS(t){this.fpsElem&&(this.fpsElem.innerText=Math.round(t).toString())}updateWeapons(t){const e=t.getCurrentWeapon(),n=performance.now()*.001,s=!!e&&(e.id==="missile"||e.id==="aim-9"||e.name&&e.name.toLowerCase().includes("aim-9"));this.showMissileCrosshair(s),["gun","missile","flare"].forEach(a=>{const r=this.weaponElems[a],o=this.weaponAmmoElems[a],l=this.weaponProgressElems[a],h=(a==="flare"?t.flareWeapon:t.weapons.find(u=>u.id===a&&(a!=="missile"||u===e)))||(a==="flare"?t.flareWeapon:t.weapons.find(u=>u.id===a));if(r){const u=t.emptyWarningTimers&&t.emptyWarningTimers[a]>0,d=e&&e.id===a||a==="flare"&&n-t.flareWeapon.lastFire<1||u,p=a==="gun"&&t.isGunOverheated;if(d?r.classList.add("active"):r.classList.remove("active"),p||u?r.classList.add("overheated"):r.classList.remove("overheated"),d&&a==="missile"&&h){const g=r.querySelector(".weapon-name");g&&(g.innerText=h.name)}}if(l&&h){let u=0;if(a==="gun")u=t.gunHeat*100;else{const d=n-h.lastFire,p=a==="flare"?1:h.fireRate;d<p?u=d/p*100:u=0}l.style.width=`${u}%`}o&&h&&(a==="gun"&&t.isGunOverheated?o.innerText="OVERHEAT":h.ammo===1/0?o.innerText="INF":o.innerText=h.ammo.toString().padStart(2,"0"))})}}const ii={scene:null,viewer:null,list:[],_scratchMatrix:new Cesium.Matrix4,_scratchCameraMatrix:new Cesium.Matrix4,_scratchThreeMatrix:new jt,init(i,t){this.scene=i,this.viewer=t},spawnExplosion(i,t,e,n={}){const s=!!n.big,a=n.count||(s?64:36),r=s?6:3,o=new ie(r,12,10),l=new Ue({color:16777215,blending:Sn,transparent:!0,opacity:1}),c=new nt(o,l);c.life=.18+Math.random()*.12,c.maxLife=c.life,c.lon=i,c.lat=t,c.alt=e,c.isSmoke=!1,c._expand=!0,c._expandAmount=s?5:3,c.matrixAutoUpdate=!1,this.scene.add(c),this.list.push(c);for(let d=0;d<a;d++){const p=(s?.6:.35)+Math.random()*(s?2.4:.9),g=new ie(p,8,6),_=new Ut().setHSL(.08-Math.random()*.05,1,.5+Math.random()*.2),m=new Ue({color:_,blending:Sn,transparent:!0,opacity:1}),f=new nt(g,m);f.life=(s?.9:.6)+Math.random()*(s?1.4:.8),f.maxLife=f.life,f.lon=i,f.lat=t,f.alt=e;const S=Math.random()*Math.PI*2,w=(Math.random()*120-60)*(Math.PI/180),y=(s?18:10)+Math.random()*(s?60:36);f._localVel={east:Math.sin(S)*Math.cos(w)*y,north:Math.cos(S)*Math.cos(w)*y,up:Math.sin(w)*y},f.isSmoke=!1,f._expand=!0,f._expandAmount=s?2.8:1.8,f.matrixAutoUpdate=!1,this.scene.add(f),this.list.push(f)}const h=s?32:18;for(let d=0;d<h;d++){const p=new ie(.06+Math.random()*.14,6,6),g=new Ue({color:16777164,blending:Sn,transparent:!0}),_=new nt(p,g);_.life=.18+Math.random()*.36,_.maxLife=_.life,_.lon=i,_.lat=t,_.alt=e;const m=Math.random()*Math.PI*2,f=(Math.random()*120-60)*(Math.PI/180),S=(s?36:18)+Math.random()*(s?120:60);_._localVel={east:Math.sin(m)*Math.cos(f)*S,north:Math.cos(m)*Math.cos(f)*S,up:Math.sin(f)*S},_.isSmoke=!1,_._expand=!0,_._expandAmount=.6,_.matrixAutoUpdate=!1,this.scene.add(_),this.list.push(_)}const u=typeof n.smokeCount<"u"?n.smokeCount:s?8:5;for(let d=0;d<u;d++){const p=(s?3:1.8)+Math.random()*(s?4:1.6),g=new ie(p,12,10),_=.08+Math.random()*.3,m=new Ue({color:new Ut(_,_,_),transparent:!0,opacity:.75}),f=new nt(g,m);f.life=(s?1:.6)+Math.random()*(s?1.2:.6),f.maxLife=f.life,f.lon=i+(Math.random()-.5)*18e-5,f.lat=t+(Math.random()-.5)*18e-5,f.alt=e-.6+(Math.random()-.5)*.8,f._localVel={east:(Math.random()-.5)*2.2,north:(Math.random()-.5)*2.2,up:.6+Math.random()*2.6},f.isSmoke=!0,f.matrixAutoUpdate=!1,this.scene.add(f),this.list.push(f)}try{this.viewer&&this.viewer.scene&&this.viewer.scene.requestRender()}catch{}},spawnWreckage(i,t,e,n=0,s=0,a={}){const r=a.count||30,o=Cesium.Math.toRadians(n),l=Cesium.Math.toRadians(s),c={east:Math.sin(o)*Math.cos(l),north:Math.cos(o)*Math.cos(l),up:Math.sin(l)};for(let h=0;h<r;h++){const u=Math.random();let d;const p=.4+Math.random()*2.4;if(u<.6){const w=[],y=3+Math.floor(Math.random()*3),E=p;for(let x=0;x<y;x++){const M=x/y*Math.PI*2+(Math.random()-.5)*.6,A=E*(.35+Math.random()*1.1);w.push(new ut(Math.cos(M)*A,Math.sin(M)*A))}const R=new Ll(w),T=Math.max(.03,p*.12),D={depth:T,bevelEnabled:!1};d=new dr(R,D),d.translate(0,0,-T*.5)}else d=new $e(p*.6,p,3),d.rotateX(Math.PI/2);const g=0+Math.random()*.06,_=new Lf({color:new Ut(g,g,g),flatShading:!0,side:Le}),m=new nt(d,_);m.rotation.set(Math.random()*Math.PI,Math.random()*Math.PI,Math.random()*Math.PI),m.scale.set(1+Math.random()*1.5,1+Math.random()*1.5,1+Math.random()*1.5),m._rotEuler=new Be(Math.random()*Math.PI,Math.random()*Math.PI,Math.random()*Math.PI),m._rotVel=new F((Math.random()-.5)*6,(Math.random()-.5)*6,(Math.random()-.5)*6),m.life=4+Math.random()*8,m.maxLife=m.life,m.lon=i+(Math.random()-.5)*1e-4,m.lat=t+(Math.random()-.5)*1e-4,m.alt=e+(Math.random()-.5)*1;const f=1.2,S=10+Math.random()*60;m._localVel={east:(c.east+(Math.random()-.5)*f)*S,north:(c.north+(Math.random()-.5)*f)*S,up:(c.up+(Math.random()-.5)*f*.8)*S},m._localVel.up-=4+Math.random()*6,m._fallGravityMultiplier=a.fallMultiplier||2.2,m.isSmoke=!1,m.matrixAutoUpdate=!1,this.scene.add(m),this.list.push(m)}},spawnSpark(i,t,e,n={}){const s=n.count||12;for(let a=0;a<s;a++){const r=new ie(.08+Math.random()*.12,6,6),o=new Ue({color:16777130,transparent:!0}),l=new nt(r,o);l.life=.18+Math.random()*.36,l.maxLife=l.life,l.lon=i,l.lat=t,l.alt=e;const c=Math.random()*Math.PI*2,h=(Math.random()*120-60)*(Math.PI/180),u=18+Math.random()*40;l._localVel={east:Math.sin(c)*Math.cos(h)*u,north:Math.cos(c)*Math.cos(h)*u,up:Math.sin(h)*u},l.isSmoke=!1,l.matrixAutoUpdate=!1,this.scene.add(l),this.list.push(l)}},update(i){if(!this.viewer)return;const t=this.viewer.camera.viewMatrix;for(let e=this.list.length-1;e>=0;e--){const n=this.list[e];if(n.life-=i*(n.isSmoke?1.1:1),n.life<=0){this.scene.remove(n),this.list.splice(e,1);continue}const s=n.isSmoke?.2:n._fallGravityMultiplier||1;n._localVel.up-=9.81*i*s,n._rotEuler&&n._rotVel&&(n._rotEuler.x+=n._rotVel.x*i,n._rotEuler.y+=n._rotVel.y*i,n._rotEuler.z+=n._rotVel.z*i);const a=Cesium.Math.toRadians(n.lat),r=n._localVel.east*i/(111320*Math.cos(a)),o=n._localVel.north*i/111320,l=n._localVel.up*i;n.lon+=r,n.lat+=o,n.alt+=l;const c=n.life/n.maxLife;if(n.material&&n.material.opacity!==void 0&&(n.isSmoke?n.material.opacity=Math.max(0,c*.85):n.material.opacity=Math.max(0,c)),n._expand){const p=1+(1-c)*(n._expandAmount||1);n.scale||(n.scale=new F(1,1,1)),n.scale.set(p,p,p)}if(n.isSmoke){const p=1+(1-c)*2;n.scale.set(p,p,p)}const h=Cesium.Cartesian3.fromDegrees(n.lon,n.lat,n.alt,void 0,new Cesium.Cartesian3),u=Cesium.Transforms.eastNorthUpToFixedFrame(h,void 0,this._scratchMatrix),d=Cesium.Matrix4.multiply(t,u,this._scratchCameraMatrix);for(let p=0;p<16;p++)this._scratchThreeMatrix.elements[p]=d[p];if(n.matrix.copy(this._scratchThreeMatrix),n._rotEuler){const p=new jt,g=new qe().setFromEuler(n._rotEuler),_=n.scale?n.scale.clone():new F(1,1,1);p.compose(new F(0,0,0),g,_),n.matrix.multiply(p)}else n.scale&&(n.scale.x!==1||n.scale.y!==1||n.scale.z!==1)&&n.matrix.scale(n.scale);n.updateMatrixWorld(!0)}}};class Qx{constructor(){this.listener=new Yf,this.sounds=new Map,this.loader=new Vf,this._voicePool=[],this._activeOneShots=new Set,this._lastRandom={}}init(t){t.add(this.listener)}async loadSound(t,e,n=!1,s=.5){return new Promise((a,r)=>{this.loader.load(e,o=>{const l=new Pc(this.listener);l.setBuffer(o),l.setLoop(n),l.setVolume(s),l._baseVolume=s,l._isLooping=n,this.sounds.set(t,l),a(l)},void 0,r)})}_getVoice(){return this._voicePool.pop()||new Pc(this.listener)}_releaseVoice(t){t.isPlaying&&t.stop(),this._activeOneShots.delete(t),this._voicePool.push(t)}play(t,e=0){const n=t;if(t.endsWith("-random")){const o=t.replace("-random","-"),l=Array.from(this.sounds.keys()).filter(c=>c.startsWith(o));if(l.length>0){const c=this._lastRandom[t]??-1;let h=Math.floor(Math.random()*l.length);l.length>1&&h===c&&(h=(h+1)%l.length),this._lastRandom[t]=h,t=l[h]}}const s=this.sounds.get(t);if(!s)return;const{context:a}=s;a.state==="suspended"&&a.resume();const r=s._baseVolume??.5;if(!s._isLooping){const o=this._getVoice();o.setBuffer(s.buffer),o.setVolume(r),o.play(),o._parentName=n||t,this._activeOneShots.add(o),o.source.onended=()=>{o._isPaused||this._releaseVoice(o)};return}if(!s.isPlaying)if(s.play(),e>0){s.setVolume(0);const o=a.currentTime;s.gain.gain.cancelScheduledValues(o),s.gain.gain.setValueAtTime(0,o),s.gain.gain.linearRampToValueAtTime(r,o+e)}else s.setVolume(r)}stop(t,e=0){const n=this.sounds.get(t);if(n){if(n.isPlaying)if(e>0){const s=n.context.currentTime;n.gain.gain.cancelScheduledValues(s),n.gain.gain.linearRampToValueAtTime(0,s+e),setTimeout(()=>{n.isPlaying&&(n.stop(),n.setVolume(n._baseVolume??.5))},e*1e3+50)}else n.stop();this._activeOneShots.forEach(s=>{s._parentName===t&&(s.source.onended=null,this._releaseVoice(s))})}}setVolume(t,e){const n=this.sounds.get(t);n&&n.gain.gain.setValueAtTime(e,n.context.currentTime)}isPlaying(t){const e=this.sounds.get(t);if(!e)return!1;if(e.isPlaying)return!0;for(const n of this._activeOneShots)if(n._parentName===t&&(n.isPlaying||n._isPaused))return!0;return!1}pauseAll(){this.sounds.forEach(t=>{t.isPlaying&&(t.pause(),t._wasPlaying=!0)}),this._activeOneShots.forEach(t=>{t.isPlaying&&(t.pause(),t._isPaused=!0)})}resumeAll(){this.sounds.forEach(t=>{t._wasPlaying&&(t.play(),t._wasPlaying=!1)}),this._activeOneShots.forEach(t=>{t._isPaused&&(t.play(),t._isPaused=!1)})}stopAll(t=0){this.sounds.forEach((e,n)=>this.stop(n,t))}}const Tt=new Qx;class t_{constructor(t,e,n,s,a,r,o=null,l=null){this.scene=t,this.viewer=e,this.target=o,this.onKill=l,this.lon=n.lon,this.lat=n.lat,this.alt=n.alt,this.heading=s,this.pitch=a,this.roll=0,this.speed=r+800,this.maxLife=10,this.life=this.maxLife,this.active=!0,this._scratchMatrix=new Cesium.Matrix4,this._scratchHPR=new Cesium.HeadingPitchRoll,this._scratchCartesian=new Cesium.Cartesian3,this._scratchThreeMatrix=new jt,this._scratchCameraMatrix=new Cesium.Matrix4,this.trail=[],this.distanceSinceLastTrail=0,this.initMesh()}initMesh(){this.mesh=new De;const t=2.6,e=.07,n=new tn(e,e,t,16),s=new Yr({color:13421772,metalness:.4,roughness:.5}),a=new nt(n,s);this.mesh.add(a);const r=.35,o=new $e(e,r,16);o.translate(0,t/2+r/2,0);const l=new Yr({color:3355443,metalness:.8,roughness:.3}),c=new nt(o,l);this.mesh.add(c);const h=new tn(e+.001,e+.001,.15,16);h.translate(0,t/2-.4,0);const u=new Ue({color:16763904}),d=new nt(h,u);this.mesh.add(d);const p=new Yr({color:4473924,metalness:.3,roughness:.6}),g=new Ll;g.moveTo(0,0),g.lineTo(.4,-.2),g.lineTo(.4,-.5),g.lineTo(0,-.5),g.lineTo(0,0);const _=new dr(g,{depth:.02,bevelEnabled:!1});_.center(),_.translate(.2,-.25,0);const m=new fe(.35,.4,.02);m.translate(e+.175,0,0);for(let A=0;A<4;A++){const I=new De,L=new nt(m,p);I.add(L),I.position.y=-t/2+.3,I.rotation.y=A*(Math.PI/2),this.mesh.add(I)}const f=new fe(.2,.15,.015);f.translate(e+.1,0,0);for(let A=0;A<4;A++){const I=new De,L=new nt(f,p);I.add(L),I.position.y=t/2-.6,I.rotation.y=A*(Math.PI/2),this.mesh.add(I)}const S=new Ut(1,.6,.2),w=new $e(e*.9,1,16,1,!0);w.rotateX(Math.PI),w.translate(0,-.5,0);const y=new Ue({color:S,transparent:!0,opacity:.8,side:Le,depthWrite:!1,blending:Sn});this.flameMesh=new nt(w,y),this.flameMesh.position.y=-t/2,this.mesh.add(this.flameMesh);const E=new $e(e*.5,.6,16,1,!0);E.rotateX(Math.PI),E.translate(0,-.3,0);const R=new Ue({color:16777215,transparent:!0,opacity:.9,side:Le,depthWrite:!1,blending:Sn});this.flameCore=new nt(E,R),this.flameMesh.add(this.flameCore);const T=128,D=typeof document<"u"?document.createElement("canvas"):null;let x=null;if(D){D.width=D.height=T;const A=D.getContext("2d"),I=T/2,L=T/2,B=A.createRadialGradient(I,L,0,I,L,I);B.addColorStop(0,"rgba(255,255,255,1)"),B.addColorStop(.18,"rgba(255,245,200,1)"),B.addColorStop(.38,"rgba(255,160,30,0.95)"),B.addColorStop(.62,"rgba(220,60,10,0.6)"),B.addColorStop(1,"rgba(0,0,0,0)"),A.fillStyle=B,A.fillRect(0,0,T,T),x=new Oh(D),x.minFilter=Ge,x.magFilter=Ge}const M=new tr({map:x,color:new Ut(1,.95,.9),transparent:!0,opacity:.98,blending:Sn,depthTest:!1,depthWrite:!1});this.flameGlow=new el(M),this.flameGlow.scale.set(2.2,2.2,1),this.flameGlow.position.y=-t/2-.08,this.mesh.add(this.flameGlow),this.mesh.layers.enable(0),this.mesh.layers.enable(1),this.mesh.matrixAutoUpdate=!1,this.scene.add(this.mesh)}update(t,e){if(!this.active){this.trail.length>0&&this.updateTrail(t);return}if(this.flameMesh){const s=.8+Math.random()*.4,a=.9+Math.random()*.2;this.flameMesh.scale.set(s,a,s),this.flameMesh.material.opacity=.7+Math.random()*.3,this.flameCore&&this.flameCore.scale.set(s,a,s)}if(this.life-=t,this.life<=0){this.destroy();return}this.target&&!this.target.destroyed&&this.trackTarget(t);const n=Si(this.lon,this.lat,this.alt,this.heading,this.pitch,this.speed*t);if(this.lon=n.lon,this.lat=n.lat,this.alt=n.alt,this.updateTrail(t),this.updateThreeMatrix(),e){for(const s of e)if(this.calculateDistSqToNPC(s)<1e4){this.hitNPC(s);return}}this.checkTerrainCollision()}trackTarget(t){const e=Cesium.Cartesian3.fromDegrees(this.target.lon,this.target.lat,this.target.alt),n=Cesium.Cartesian3.fromDegrees(this.lon,this.lat,this.alt),s=Cesium.Cartesian3.subtract(e,n,new Cesium.Cartesian3);Cesium.Cartesian3.normalize(s,s);const a=Cesium.Transforms.eastNorthUpToFixedFrame(n),r=Cesium.Matrix4.inverse(a,new Cesium.Matrix4),o=Cesium.Matrix4.multiplyByPointAsVector(r,s,new Cesium.Cartesian3),l=Cesium.Math.toDegrees(Math.atan2(o.x,o.y)),c=Cesium.Math.toDegrees(Math.asin(o.z));let h=l-this.heading;for(;h<-180;)h+=360;for(;h>180;)h-=360;const u=90;this.heading+=Math.max(-u*t,Math.min(u*t,h)),this.pitch+=Math.max(-u*t,Math.min(u*t,c-this.pitch))}updateTrail(t){if(this.active){this.distanceSinceLastTrail+=this.speed*t;const n=20;for(;this.distanceSinceLastTrail>=n;){const s=this.distanceSinceLastTrail-n,a=Si(this.lon,this.lat,this.alt,this.heading,this.pitch,-s);this.distanceSinceLastTrail-=n;const r=new ie(1,16,16),o=.5+Math.random()*.75,l=new Ue({color:new Ut(o,o,o),transparent:!0,opacity:.6+Math.random()*.25}),c=new nt(r,l);c.lon=a.lon,c.lat=a.lat,c.alt=a.alt,c.life=4,c.maxLife=4;const h=this.maxLife-this.life;c.launchScale=Math.min(1,.25+h/1.5*.75),c.matrixAutoUpdate=!1,this.scene.add(c),this.trail.push(c)}}const e=this.viewer.camera.viewMatrix;for(let n=this.trail.length-1;n>=0;n--){const s=this.trail[n];if(s.life-=t,s.life<=0){this.scene.remove(s),this.trail.splice(n,1);continue}s.randomScale||(s.randomScale=.8+Math.random()*.5);const r=(s.launchScale||1)*s.randomScale*(1+(1-s.life/s.maxLife)*15);s.scale.set(r,r,r);const o=s.life/s.maxLife*.5;s.material.opacity=o;const l=Cesium.Cartesian3.fromDegrees(s.lon,s.lat,s.alt,void 0,this._scratchCartesian),c=Cesium.Transforms.eastNorthUpToFixedFrame(l,void 0,this._scratchMatrix),h=Cesium.Matrix4.multiply(e,c,this._scratchCameraMatrix);for(let u=0;u<16;u++)this._scratchThreeMatrix.elements[u]=h[u];s.matrix.copy(this._scratchThreeMatrix),s.matrix.scale(new F(r,r,r)),s.updateMatrixWorld(!0)}}updateThreeMatrix(){const t=this.viewer.camera.viewMatrix,e=Cesium.Cartesian3.fromDegrees(this.lon,this.lat,this.alt,void 0,this._scratchCartesian),n=Cesium.Transforms.eastNorthUpToFixedFrame(e,void 0,this._scratchMatrix),s=Cesium.Math.toRadians(this.heading),a=Cesium.Math.toRadians(this.pitch),r=new Cesium.Cartesian3(Math.sin(s)*Math.cos(a),Math.cos(s)*Math.cos(a),Math.sin(a)),o=Cesium.Matrix4.multiplyByPointAsVector(n,r,new Cesium.Cartesian3);Cesium.Cartesian3.normalize(o,o);const l=new Cesium.Cartesian3(n[8],n[9],n[10]);let c=new Cesium.Cartesian3;if(Math.abs(Cesium.Cartesian3.dot(o,l))>.999){const p=new Cesium.Cartesian3(n[4],n[5],n[6]);Cesium.Cartesian3.cross(o,p,c)}else Cesium.Cartesian3.cross(o,l,c);Cesium.Cartesian3.normalize(c,c);const h=new Cesium.Cartesian3;Cesium.Cartesian3.cross(c,o,h);const u=this._scratchMatrix;u[0]=c.x,u[1]=c.y,u[2]=c.z,u[3]=0,u[4]=o.x,u[5]=o.y,u[6]=o.z,u[7]=0,u[8]=h.x,u[9]=h.y,u[10]=h.z,u[11]=0,u[12]=e.x,u[13]=e.y,u[14]=e.z,u[15]=1;const d=Cesium.Matrix4.multiply(t,u,this._scratchCameraMatrix);for(let p=0;p<16;p++)this._scratchThreeMatrix.elements[p]=d[p];if(this.mesh.matrix.copy(this._scratchThreeMatrix),this.mesh.updateMatrixWorld(!0),this.flameGlow&&this.viewer&&this.viewer.camera&&this.viewer.camera.position)try{const p=this.viewer.camera.position,g=Cesium.Cartesian3.distance(e,p)||1,_=Se.clamp(g*.0016,1,80);this.flameGlow.scale.set(_,_,1),this.flameGlow.renderOrder=9999,this.flameGlow.material&&(this.flameGlow.material.opacity=Math.max(.25,Math.min(1,80/_)))}catch{}}calculateDistSqToNPC(t){const e=(t.lon-this.lon)*111320*Math.cos(Cesium.Math.toRadians(this.lat)),n=(t.lat-this.lat)*111320,s=t.alt-this.alt;return e*e+n*n+s*s}hitNPC(t){t.destroyed=!0,this.onKill&&this.onKill(t);try{ii.spawnExplosion(this.lon,this.lat,this.alt,{count:80,smokeCount:18,big:!0}),ii.spawnWreckage(this.lon,this.lat,this.alt,this.heading,this.pitch,{count:48}),Tt.play("explosion-random")}catch{}this.destroy()}checkTerrainCollision(){const t=Cesium.Cartographic.fromDegrees(this.lon,this.lat),e=this.viewer.scene.globe.getHeight(t);if(e!==void 0&&this.alt<e){try{ii.spawnExplosion(this.lon,this.lat,this.alt,{count:80,smokeCount:18,big:!0}),ii.spawnWreckage(this.lon,this.lat,this.alt,this.heading,this.pitch,{count:48}),Tt.play("explosion-random")}catch{}this.destroy()}}destroy(){this.active=!1,this.mesh&&this.scene.remove(this.mesh)}}class e_{constructor(t,e,n,s,a,r,o=null){this.scene=t,this.viewer=e,this.onKill=o,this.lon=n.lon,this.lat=n.lat,this.alt=n.alt,this.heading=s,this.pitch=a,this.speed=r+1500,this.life=3,this.active=!0,this._scratchMatrix=new Cesium.Matrix4,this._scratchCartesian=new Cesium.Cartesian3,this._scratchThreeMatrix=new jt,this._scratchCameraMatrix=new Cesium.Matrix4,this.initMesh()}initMesh(){const t=(o,l,c)=>new En({uniforms:{colorStart:{value:new Ut(16724736)},colorMid:{value:new Ut(16763904)},colorEnd:{value:new Ut(16777215)},opacity:{value:l},intensity:{value:c}},vertexShader:`
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
				`,transparent:!0,depthWrite:!1,blending:Sn,side:Le});this.mesh=new De;const n=(o,l,c,h)=>{const u=new Ts(o,l,1,1);u.translate(0,-l/2,0);const d=t(o,c,h);return new nt(u,d)};for(let o=0;o<3;o++){const l=n(.6,20,1,1);l.rotateY(o*Math.PI*2/3),this.mesh.add(l)}for(let o=0;o<3;o++){const l=n(1.6,22,.35,.65);l.rotateY(o*Math.PI*2/3+Math.PI/6),this.mesh.add(l)}const s=new $e(.12,.8,12);s.translate(0,-.4,0);const a=new Ue({color:16777215,transparent:!0,opacity:1,blending:Sn,depthWrite:!1}),r=new nt(s,a);this.mesh.add(r),this.mesh.matrixAutoUpdate=!1,this.scene.add(this.mesh)}update(t,e){if(!this.active)return;if(this.life-=t,this.life<=0){this.destroy();return}const n=Si(this.lon,this.lat,this.alt,this.heading,this.pitch,this.speed*t);if(this.lon=n.lon,this.lat=n.lat,this.alt=n.alt,this.updateThreeMatrix(),e){for(const s of e)if(this.calculateDistSqToNPC(s)<400){this.hitNPC(s);return}}this.checkTerrainCollision()}updateThreeMatrix(){const t=this.viewer.camera.viewMatrix,e=Cesium.Cartesian3.fromDegrees(this.lon,this.lat,this.alt,void 0,this._scratchCartesian),n=Cesium.Transforms.eastNorthUpToFixedFrame(e,void 0,this._scratchMatrix),s=Cesium.Math.toRadians(this.heading),a=Cesium.Math.toRadians(this.pitch),r=new Cesium.Cartesian3(Math.sin(s)*Math.cos(a),Math.cos(s)*Math.cos(a),Math.sin(a)),o=Cesium.Matrix4.multiplyByPointAsVector(n,r,new Cesium.Cartesian3);Cesium.Cartesian3.normalize(o,o);const l=new Cesium.Cartesian3(n[8],n[9],n[10]);let c=new Cesium.Cartesian3;if(Math.abs(Cesium.Cartesian3.dot(o,l))>.999){const p=new Cesium.Cartesian3(n[4],n[5],n[6]);Cesium.Cartesian3.cross(o,p,c)}else Cesium.Cartesian3.cross(o,l,c);Cesium.Cartesian3.normalize(c,c);const h=Cesium.Cartesian3.cross(c,o,new Cesium.Cartesian3),u=this._scratchMatrix;u[0]=c.x,u[1]=c.y,u[2]=c.z,u[3]=0,u[4]=o.x,u[5]=o.y,u[6]=o.z,u[7]=0,u[8]=h.x,u[9]=h.y,u[10]=h.z,u[11]=0,u[12]=e.x,u[13]=e.y,u[14]=e.z,u[15]=1;const d=Cesium.Matrix4.multiply(t,u,this._scratchCameraMatrix);for(let p=0;p<16;p++)this._scratchThreeMatrix.elements[p]=d[p];this.mesh.matrix.copy(this._scratchThreeMatrix),this.mesh.updateMatrixWorld(!0)}calculateDistSqToNPC(t){const e=(t.lon-this.lon)*111320*Math.cos(Cesium.Math.toRadians(this.lat)),n=(t.lat-this.lat)*111320,s=t.alt-this.alt;return e*e+n*n+s*s}hitNPC(t){t.destroyed=!0,this.onKill&&this.onKill(t);try{ii.spawnExplosion(this.lon,this.lat,this.alt,{count:36,smokeCount:8,big:!0}),ii.spawnWreckage(this.lon,this.lat,this.alt,this.heading,this.pitch,{count:18});try{Tt.play("explosion-random")}catch{}}catch{}this.destroy()}checkTerrainCollision(){const t=Cesium.Cartographic.fromDegrees(this.lon,this.lat),e=this.viewer.scene.globe.getHeight(t);if(e!==void 0&&this.alt<e){try{ii.spawnSpark(this.lon,this.lat,this.alt,{count:10})}catch{}this.destroy()}}destroy(){this.active=!1,this.scene.remove(this.mesh)}}class n_{constructor(t,e,n,s,a,r){this.scene=t,this.viewer=e,this.lon=n.lon,this.lat=n.lat,this.alt=n.alt,this.heading=s+180+(Math.random()-.5)*40,this.pitch=a-15-Math.random()*20,this.speed=r*.5,this.gravity=5,this.verticalVelocity=0,this.life=4,this.maxLife=4,this.active=!0,this._scratchCartesian=new Cesium.Cartesian3,this._scratchMatrix=new Cesium.Matrix4,this._scratchCameraMatrix=new Cesium.Matrix4,this._scratchThreeMatrix=new jt,this.trail=[],this.distanceSinceLastTrail=0,this.initMesh()}initMesh(){this.group=new De,this.group.matrixAutoUpdate=!1;const t=64,e=document.createElement("canvas");e.width=t,e.height=t;const n=e.getContext("2d"),s=n.createRadialGradient(t/2,t/2,0,t/2,t/2,t/2);s.addColorStop(0,"#ffffff"),s.addColorStop(.2,"#ffff66"),s.addColorStop(.5,"#ffff00"),s.addColorStop(1,"rgba(0,0,0,0)"),n.fillStyle=s,n.fillRect(0,0,t,t);const a=new Oh(e),r=new tr({map:a,color:16777028,transparent:!0,blending:Sn,depthWrite:!1});this.flareSprite=new el(r),this.flareSprite.scale.set(1.5,1.5,1),this.group.add(this.flareSprite);const o=new tr({map:a,color:16755200,transparent:!0,opacity:.8,blending:Sn,depthWrite:!1});this.glowSprite=new el(o),this.glowSprite.scale.set(4,4,1),this.group.add(this.glowSprite),this.scene.add(this.group)}update(t){if(!this.active)return;if(this.life-=t,this.life<=0){this.destroy();return}const e=this.speed*t,n=this.calculateMove(e);this.lon=n.lon,this.lat=n.lat,this.alt=n.alt,this.verticalVelocity-=this.gravity*t,this.alt+=this.verticalVelocity*t,this.speed*=.98,this.updateThreeMatrix(),this._spawnTrailIfNeeded(t),this._updateTrail(t);const s=this.life/this.maxLife;if(this.flareSprite){this.flareSprite.material.opacity=Math.min(1,s*1.5);const a=.9+Math.random()*.2;this.flareSprite.scale.set(1.5*a,1.5*a,1)}if(this.glowSprite){this.glowSprite.material.opacity=Math.min(.8,s*1.2);const a=.8+Math.random()*.4;this.glowSprite.scale.set(4*a,4*a,1)}}calculateMove(t){const e=Cesium.Math.toRadians(this.heading),n=Cesium.Math.toRadians(this.pitch),s=6371e3,a=t*Math.cos(e)*Math.cos(n)/s,r=t*Math.sin(e)*Math.cos(n)/(s*Math.cos(Cesium.Math.toRadians(this.lat))),o=t*Math.sin(n);return{lon:this.lon+Cesium.Math.toDegrees(r),lat:this.lat+Cesium.Math.toDegrees(a),alt:this.alt+o}}updateThreeMatrix(){const t=this.viewer.camera.viewMatrix,e=Cesium.Cartesian3.fromDegrees(this.lon,this.lat,this.alt),n=Cesium.Transforms.eastNorthUpToFixedFrame(e,void 0,this._scratchMatrix),s=Cesium.Matrix4.multiply(t,n,this._scratchCameraMatrix);for(let a=0;a<16;a++)this._scratchThreeMatrix.elements[a]=s[a];this.group.matrix.copy(this._scratchThreeMatrix),this.group.updateMatrixWorld(!0)}_spawnTrailIfNeeded(t){this.distanceSinceLastTrail+=(this.speed+Math.abs(this.verticalVelocity))*t;const e=3;for(;this.distanceSinceLastTrail>=e;){const s=(this.distanceSinceLastTrail-e)/((this.speed+Math.abs(this.verticalVelocity))*t||1),a=this.lon,r=this.lat,o=this.alt-this.verticalVelocity*t*s;this.distanceSinceLastTrail-=e;const l=new ie(1,12,12),c=.4+Math.random()*.4,h=new Ue({color:new Ut(c,c,c),transparent:!0,opacity:.5+Math.random()*.2}),u=new nt(l,h);u.lon=a,u.lat=r,u.alt=o,u.life=2+Math.random()*1.5,u.maxLife=u.life,u.matrixAutoUpdate=!1,this.scene.add(u),this.trail.push(u)}}_updateTrail(t){const e=this.viewer.camera.viewMatrix;for(let n=this.trail.length-1;n>=0;n--){const s=this.trail[n];if(s.life-=t,s.life<=0){this.scene.remove(s),this.trail.splice(n,1);continue}s.randomScale||(s.randomScale=.5+Math.random()*.5);const a=s.life/s.maxLife,r=s.randomScale*(1+(1-a)*8);s.scale.set(r,r,r),s.material.opacity=a*.4;const o=Cesium.Cartesian3.fromDegrees(s.lon,s.lat,s.alt,void 0,this._scratchCartesian),l=Cesium.Transforms.eastNorthUpToFixedFrame(o,void 0,this._scratchMatrix),c=Cesium.Matrix4.multiply(e,l,this._scratchCameraMatrix);for(let h=0;h<16;h++)this._scratchThreeMatrix.elements[h]=c[h];s.matrix.copy(this._scratchThreeMatrix),s.matrix.scale(new F(r,r,r)),s.updateMatrixWorld(!0),s.alt+=.5*t}}destroy(){this.active=!1,this.group&&this.scene.remove(this.group);for(const t of this.trail)this.scene.remove(t);this.trail=[]}}class i_{constructor(t,e,n){this.viewer=t,this.scene=e,this.playerModel=n,this.weapons=[{id:"gun",name:"TALON STRIKE",ammo:1/0,maxAmmo:1/0,fireRate:.3,lastFire:0},{id:"missile",name:"DIVE ATTACK",ammo:30,maxAmmo:30,fireRate:2,lastFire:0,type:"DIVE"}],this.flareWeapon={id:"flare",name:"EAGLE SCREECH",ammo:20,maxAmmo:20,fireRate:.5,lastFire:0},this.selectedWeaponIndex=0,this.projectiles=[],this.flares=[],this.onKill=null,this.target=null,this.isGunOverheated=!1,this.gunHeat=0,this.lockTime=0,this.lockRequiredTime=1.5,this.lockStatus="NONE",this.lockingTarget=null,this.flareQueue=0,this.flareInterval=.15,this.lastFlarePulse=0,this.lastMissileSide=!1,this.emptyWarningTimers={gun:0,missile:0,flare:0},this.lastEmptyWarningSoundTime=0}resetAmmo(){this.selectedWeaponIndex=0;for(const t of this.weapons)typeof t.maxAmmo<"u"&&(t.ammo=t.maxAmmo);this.flareWeapon&&typeof this.flareWeapon.maxAmmo<"u"&&(this.flareWeapon.ammo=this.flareWeapon.maxAmmo),this.gunHeat=0,this.isGunOverheated=!1,this.emptyWarningTimers={gun:0,missile:0,flare:0}}getCurrentWeapon(){return this.weapons[this.selectedWeaponIndex]}toggleWeapon(){this.selectedWeaponIndex=(this.selectedWeaponIndex+1)%this.weapons.length;try{Tt.play("weapon-switch")}catch{}}selectWeapon(t){t>=0&&t<this.weapons.length&&(this.selectedWeaponIndex=t);try{Tt.play("weapon-switch")}catch{}}calculateWeaponPos(t){if(!this.playerModel||!this.viewer)return null;const e=this.playerModel.scale.x,n=t.clone().multiplyScalar(e);n.applyQuaternion(this.playerModel.quaternion),n.add(this.playerModel.position);const s=75,a=Cesium.Math.toDegrees(this.viewer.camera.frustum.fovy),r=Math.tan(Cesium.Math.toRadians(a)*.5)/Math.tan(Cesium.Math.toRadians(s)*.5);n.x*=r,n.y*=r;const o=this.viewer.camera,l=o.right,c=o.up,h=o.direction,u=new Cesium.Cartesian3,d=Cesium.Cartesian3.multiplyByScalar(l,n.x,new Cesium.Cartesian3),p=Cesium.Cartesian3.multiplyByScalar(c,n.y,new Cesium.Cartesian3),g=Cesium.Cartesian3.multiplyByScalar(h,-n.z,new Cesium.Cartesian3);Cesium.Cartesian3.add(d,p,u),Cesium.Cartesian3.add(u,g,u);const _=o.positionWC,m=new Cesium.Cartesian3;Cesium.Cartesian3.add(_,u,m);const f=Cesium.Cartographic.fromCartesian(m);return{lon:Cesium.Math.toDegrees(f.longitude),lat:Cesium.Math.toDegrees(f.latitude),alt:f.height}}fire(t,e=null){const n=e?this.weapons.find(r=>r.id===e):this.weapons[this.selectedWeaponIndex];if(!n)return;const s=performance.now()*.001;if(n.ammo<=0){if(s-this.lastEmptyWarningSoundTime>2){this.emptyWarningTimers[n.id]=1,this.lastEmptyWarningSoundTime=s;try{Tt.play("weapon-warning")}catch{}}return}if(n.id==="gun"&&this.isGunOverheated||s-n.lastFire<n.fireRate||n.id==="missile"&&this.lockStatus!=="LOCKED")return;n.lastFire=s,n.ammo!==1/0&&n.ammo--;const a={lon:t.lon,lat:t.lat,alt:t.alt};if(n.id==="gun"){if(this.gunHeat+=.02,this.gunHeat>=1){this.isGunOverheated=!0;try{Tt.play("weapon-warning")}catch{}}const r=new F(0,0,0),o=this.calculateWeaponPos(r)||Si(a.lon,a.lat,a.alt,t.heading,t.pitch,5),l=new e_(this.scene,this.viewer,o,t.heading,t.pitch,t.speed,this.onKill);this.projectiles.push(l)}else if(n.id==="missile"){this.lastMissileSide=!this.lastMissileSide;const r=this.lastMissileSide?1:-1,o=new F(15*r,-15,0),l=this.calculateWeaponPos(o)||a,c=this.target,h=new t_(this.scene,this.viewer,l,t.heading,t.pitch,t.speed,c,this.onKill);this.projectiles.push(h);try{Tt.play("missile-fire")}catch{}}}fireFlare(t){const e=this.flareWeapon,n=performance.now()*.001;if(!e||e.ammo<=0){if(n-this.lastEmptyWarningSoundTime>2){this.emptyWarningTimers.flare=1,this.lastEmptyWarningSoundTime=n;try{Tt.play("weapon-warning")}catch{}}return}n-e.lastFire<1||(e.ammo--,e.lastFire=n,this.flareQueue=6,this.lastFlarePulse=0)}_spawnSingleFlare(t){const e=new F(0,-10,6),n=this.calculateWeaponPos(e)||{lon:t.lon,lat:t.lat,alt:t.alt},s=new n_(this.scene,this.viewer,n,t.heading,t.pitch,t.speed);this.flares.push(s)}update(t,e,n=null){const s=this.lockStatus,a=this.getCurrentWeapon();try{n&&n.fire&&a.id==="gun"&&!this.isGunOverheated&&a.ammo>0?Tt.isPlaying("m61-firing")||Tt.play("m61-firing"):Tt.isPlaying("m61-firing")&&Tt.stop("m61-firing")}catch{}if(a.id==="missile"){const o=this.findPotentialTarget(e);o?this.lockingTarget===o?(this.lockTime+=t,this.lockTime>=this.lockRequiredTime?(this.lockStatus="LOCKED",this.target=o):this.lockStatus="LOCKING"):(this.lockingTarget=o,this.lockTime=0,this.lockStatus="LOCKING",this.target=null):(this.lockingTarget=null,this.lockTime=0,this.lockStatus="NONE",this.target=null)}else this.lockingTarget=null,this.lockTime=0,this.lockStatus="NONE",this.target=null;try{this.lockStatus==="LOCKING"?Tt.isPlaying("rwr-tws")||Tt.play("rwr-tws"):Tt.isPlaying("rwr-tws")&&Tt.stop("rwr-tws"),s!==this.lockStatus&&this.lockStatus==="LOCKED"&&Tt.play("rwr-lock"),s==="LOCKED"&&this.lockStatus!=="LOCKED"&&Tt.isPlaying("rwr-lock")&&Tt.stop("rwr-lock")}catch{}this.flareQueue>0&&(this.lastFlarePulse+=t,(this.lastFlarePulse>=this.flareInterval||this.flareQueue===6)&&(this._spawnSingleFlare(e),this.flareQueue--,this.lastFlarePulse=0)),this.gunHeat>0&&(this.gunHeat-=t*.2,this.gunHeat<=0&&(this.gunHeat=0,this.isGunOverheated=!1),this.isGunOverheated&&this.gunHeat<.3&&(this.isGunOverheated=!1));for(const o in this.emptyWarningTimers)this.emptyWarningTimers[o]>0&&(this.emptyWarningTimers[o]-=t,this.emptyWarningTimers[o]<0&&(this.emptyWarningTimers[o]=0));const r=e.npcs||[];for(let o=this.projectiles.length-1;o>=0;o--){const l=this.projectiles[o];l.update(t,r);const c=l.trail&&l.trail.length>0;!l.active&&!c&&this.projectiles.splice(o,1)}for(let o=this.flares.length-1;o>=0;o--){const l=this.flares[o];l.update(t),l.active||this.flares.splice(o,1)}}findPotentialTarget(t){if(!t.npcs||t.npcs.length===0)return null;let e=null,n=.985;for(const s of t.npcs){if(s.destroyed)continue;const a=this.calculateDotProduct(t,s);a>n&&this.calculateDist(t,s)<1e4&&(e=s,n=a)}return e}calculateDotProduct(t,e){const n=Cesium.Math.toRadians(t.heading),s=Cesium.Math.toRadians(t.pitch),a=new F(Math.sin(n)*Math.cos(s),Math.sin(s),Math.cos(n)*Math.cos(s)),r=(e.lon-t.lon)*111320*Math.cos(Cesium.Math.toRadians(t.lat)),o=(e.lat-t.lat)*111320,l=e.alt-t.alt,c=new F(r,l,o).normalize();return a.dot(c)}calculateDist(t,e){const n=(e.lon-t.lon)*111320*Math.cos(Cesium.Math.toRadians(t.lat)),s=(e.lat-t.lat)*111320,a=e.alt-t.alt;return Math.sqrt(n*n+s*s+a*a)}}const ol={RABBIT:{category:"ground",speed:3,color:9139029,size:[.12,.08,.15],score:300},SQUIRREL:{category:"ground",speed:4,color:8018490,size:[.06,.05,.1],score:200},MOUSE:{category:"ground",speed:2,color:10127994,size:[.03,.02,.05],score:100},MARMOT:{category:"ground",speed:2,color:6969914,size:[.15,.1,.2],score:400},TROUT:{category:"water",speed:2,color:6982250,size:[.08,.03,.25],score:500},BASS:{category:"water",speed:1.5,color:4876874,size:[.1,.04,.3],score:500},KOKANEE:{category:"water",speed:2.5,color:11162965,size:[.06,.03,.2],score:600},RAVEN:{category:"air",speed:18,color:1118481,size:[.15,.06,.18],score:500,wingColor:657930},CROW:{category:"air",speed:15,color:1710618,size:[.1,.05,.14],score:400,wingColor:1118481}},su=[{type:"RABBIT",weight:15},{type:"SQUIRREL",weight:15},{type:"MOUSE",weight:10},{type:"MARMOT",weight:5},{type:"TROUT",weight:12},{type:"BASS",weight:10},{type:"KOKANEE",weight:8},{type:"RAVEN",weight:15},{type:"CROW",weight:10}],s_=su.reduce((i,t)=>i+t.weight,0),Pe={lonMin:-116.95,lonMax:-116.86,latMin:34.235,latMax:34.255,elevation:2060},Ba={lon:-116.9155,lat:34.2433,radiusM:2e3};function a_(){let i=Math.random()*s_;for(const t of su)if(i-=t.weight,i<=0)return t.type;return"RAVEN"}function r_(i){const t=ol[i];if(!t)return null;const e=new De,n=new Gt({color:t.color,flatShading:!0}),[s,a,r]=t.size;if(t.category==="ground"){const o=new ie(1,6,5);o.scale(s,a,r);const l=new nt(o,n);e.add(l);const c=new ie(a*.8,5,4),h=new nt(c,n);h.position.set(0,a*.3,r*.9),e.add(h);const u=new Ue({color:0});for(const d of[-1,1]){const p=new ie(a*.15,4,3),g=new nt(p,u);g.position.set(d*a*.4,a*.5,r*1),e.add(g)}if(i==="RABBIT"){for(const g of[-1,1]){const _=new fe(.015,.06,.01),m=new nt(_,n);m.position.set(g*.02,a+.03,r*.8),e.add(m)}const d=new ie(.02,4,3),p=new nt(d,new Gt({color:15658734}));p.position.set(0,a*.3,-r*.7),e.add(p)}}else if(t.category==="water"){const o=new ie(1,6,5);o.scale(s*.6,a,r);const l=new nt(o,n);e.add(l);const c=new fe(s*.3,a*2,.01),h=new nt(c,n);h.position.set(0,0,-r*.9),h.rotation.y=.2,e.add(h);const u=new fe(.005,a*.8,s*.4),d=new nt(u,n);d.position.set(0,a*.8,0),e.add(d);const p=new ie(1,5,4);p.scale(s*.4,a*.5,r*.8);const g=new nt(p,new Gt({color:13421772}));g.position.y=-a*.3,e.add(g)}else if(t.category==="air"){const o=new ie(1,6,5);o.scale(s*.5,a,r);const l=new nt(o,n);e.add(l);const c=new ie(a*.7,5,4),h=new nt(c,n);h.position.set(0,a*.3,r*.8),e.add(h);const u=new $e(.008,.03,4),d=new nt(u,new Gt({color:2236962}));d.position.set(0,a*.2,r*1.1),d.rotation.x=Math.PI/2,e.add(d);const p=new Gt({color:t.wingColor||t.color,side:Le,flatShading:!0});for(const m of[-1,1]){const f=new fe(s*2.5,.005,r*.6);f.translate(m*s*1.25,0,0);const S=new nt(f,p);S.position.y=a*.2,e.add(S)}const g=new fe(s*.5,.005,r*.5),_=new nt(g,n);_.position.set(0,0,-r*.7),e.add(_)}return e.traverse(o=>{o.layers.set(0)}),e}class o_{constructor(t,e,n){this.viewer=t,this.scene=e,this.loader=n,this.npcs=[],this.lastSpawnTime=0,this.loaded=!0,this._scratchMatrix=new Cesium.Matrix4,this._scratchHPR=new Cesium.HeadingPitchRoll,this._scratchCartesian=new Cesium.Cartesian3,this._scratchThreeMatrix=new jt,this._scratchCameraMatrix=new Cesium.Matrix4}isOverLake(t,e){return t>=Pe.lonMin&&t<=Pe.lonMax&&e>=Pe.latMin&&e<=Pe.latMax}spawnNPC(t,e,n){const s=a_(),a=ol[s];if(!a)return null;let r,o,l,c,h;if(c=Math.random()*360,h=a.speed+(Math.random()-.5)*a.speed*.4,a.category==="ground"){let d=0;do{const _=Math.random()*Math.PI*2,m=100+Math.random()*Ba.radiusM,f=111320*Math.cos(Ba.lat*Math.PI/180);r=Ba.lon+Math.cos(_)*m/f,o=Ba.lat+Math.sin(_)*m/111320,d++}while(this.isOverLake(r,o)&&d<10);const p=Cesium.Cartographic.fromDegrees(r,o),g=this.viewer.scene.globe.getHeight(p);l=(g!==void 0?g:2070)+.3}else if(a.category==="water")r=Pe.lonMin+.05*(Pe.lonMax-Pe.lonMin)+Math.random()*.9*(Pe.lonMax-Pe.lonMin),o=Pe.latMin+.05*(Pe.latMax-Pe.latMin)+Math.random()*.9*(Pe.latMax-Pe.latMin),l=Pe.elevation-.5+Math.random()*.8;else{const d=Math.random()*Math.PI*2,p=500+Math.random()*3e3,g=111320*Math.cos(e*Math.PI/180);r=t+Math.cos(d)*p/g,o=e+Math.sin(d)*p/111320,l=n+(Math.random()-.5)*300,l=Math.max(l,2100)}const u=s+" "+(100+Math.floor(Math.random()*900));return this.createNPC(u,s,a,r,o,l,c,h)}createNPC(t,e,n,s,a,r,o,l){const c=r_(e);if(!c)return null;c.matrixAutoUpdate=!1,this.scene.add(c);const h={id:t+"_"+Math.random().toString(36).substr(2,9),mesh:c,name:t,typeName:e,category:n.category,lon:s,lat:a,alt:r,heading:o,speed:l,pitch:0,roll:0,targetHeading:o,targetPitch:0,behaviorTimer:2+Math.random()*5,terrainCheckTimer:Math.random()*2,time:Math.random()*100,destroyed:!1,score:n.score};return this.npcs.push(h),h}update(t,e){const n=this.viewer.camera.viewMatrix;for(let s=this.npcs.length-1;s>=0;s--){const a=this.npcs[s];if(a.destroyed){this.scene.remove(a.mesh),this.npcs.splice(s,1);continue}if(a.time+=t,a.behaviorTimer-=t,a.behaviorTimer<=0&&(a.category==="ground"?(a.targetHeading=(a.heading+(Math.random()-.5)*120)%360,a.speed=Math.random()>.3?ol[a.typeName].speed:0,a.behaviorTimer=1+Math.random()*4):a.category==="water"?(a.targetHeading=(a.heading+(Math.random()-.5)*90)%360,a.behaviorTimer=2+Math.random()*5):(a.targetHeading=(a.heading+(Math.random()-.5)*180)%360,a.targetPitch=(Math.random()-.5)*15,a.behaviorTimer=3+Math.random()*6)),a.category==="air"&&(a.terrainCheckTimer-=t,a.terrainCheckTimer<=0)){a.terrainCheckTimer=.5;const d=Cesium.Cartographic.fromDegrees(a.lon,a.lat),p=this.viewer.scene.globe.getHeight(d);if(p!==void 0){const g=a.alt-p;g<80&&(a.targetPitch=15,g<30&&(a.targetPitch=30))}}let r=a.targetHeading-a.heading;for(;r<-180;)r+=360;for(;r>180;)r-=360;const l=(a.category==="air"?60:120)*t;if(a.heading=(a.heading+Math.max(-l,Math.min(l,r))+360)%360,a.category==="air"&&(a.pitch+=(a.targetPitch-a.pitch)*t*.6,Math.abs(r)>.5?a.roll+=(-Math.sign(r)*Math.min(1,Math.abs(r)/45)*45-a.roll)*t*3:a.roll+=(0-a.roll)*t*3),a.speed>0)if(a.category==="ground"){const d=Si(a.lon,a.lat,a.alt,a.heading,0,a.speed*t);this.isOverLake(d.lon,d.lat)?(a.heading=(a.heading+140+Math.random()*80)%360,a.targetHeading=a.heading):(a.lon=d.lon,a.lat=d.lat);const p=Cesium.Cartographic.fromDegrees(a.lon,a.lat),g=this.viewer.scene.globe.getHeight(p);g!==void 0&&(a.alt=g+.3)}else if(a.category==="water"){const d=Si(a.lon,a.lat,a.alt,a.heading,0,a.speed*t);d.lon<Pe.lonMin||d.lon>Pe.lonMax||d.lat<Pe.latMin||d.lat>Pe.latMax?(a.heading=(a.heading+150+Math.random()*60)%360,a.targetHeading=a.heading):(a.lon=d.lon,a.lat=d.lat),a.alt=Pe.elevation-.3+Math.sin(a.time*1.5)*.4}else{const d=Si(a.lon,a.lat,a.alt,a.heading,a.pitch,a.speed*t);a.lon=d.lon,a.lat=d.lat,a.alt=d.alt}const c=Cesium.Cartesian3.fromDegrees(a.lon,a.lat,a.alt,void 0,this._scratchCartesian);this._scratchHPR.heading=Cesium.Math.toRadians(a.heading),this._scratchHPR.pitch=Cesium.Math.toRadians(a.pitch),this._scratchHPR.roll=Cesium.Math.toRadians(a.roll);const h=Cesium.Transforms.headingPitchRollToFixedFrame(c,this._scratchHPR,Cesium.Ellipsoid.WGS84,Cesium.Transforms.eastNorthUpToFixedFrame,this._scratchMatrix),u=Cesium.Matrix4.multiply(n,h,this._scratchCameraMatrix);for(let d=0;d<16;d++)this._scratchThreeMatrix.elements[d]=u[d];a.mesh.matrix.copy(this._scratchThreeMatrix),a.mesh.updateMatrixWorld(!0)}this.npcs.length<12&&Date.now()-this.lastSpawnTime>2e3&&(this.spawnNPC(e.lon,e.lat,e.alt),this.lastSpawnTime=Date.now())}clear(){this.npcs.forEach(t=>this.scene.remove(t.mesh)),this.npcs=[]}}class l_{constructor(){this.container=document.getElementById("dialogue-container"),this.textElem=document.getElementById("dialogue-text"),this.dialogues=["Shadow! It's Jackie, calling from the nest. The eaglets are hungry - time to hunt!","You're soaring above Big Bear Valley. Our Jeffrey pine nest is your home base.","Check your display - SPEED on the left shows how fast you're flying, ALTITUDE on the right.","The compass at the top shows your heading. Use it to navigate back to the lake for fish.","Your talons are ready! Use TALON STRIKE for quick catches, or DIVE ATTACK for bigger prey.","Use 'W' and 'S' to control your wing speed. Glide to conserve energy.","Control your flight with ARROW keys for pitch and roll. 'A' and 'D' for turning.","Press SPACE to power dive - you can reach incredible speeds swooping down!","Switch hunting modes with '1', '2', or 'Q'. Press 'F' or ENTER to strike!","Watch out for ravens! Press 'V' to screech and scare them away from our territory.","The territory map shows prey and ravens nearby. Hunt the fish in Big Bear Lake!","Good hunting, Shadow! Bring food back for our eaglets. Jackie, out."],this.currentIndex=0,this.isActive=!1,this.isPaused=!1,this.currentCharIndex=0,this.isWaitingForNext=!1,this.lastSoundIndex=-1,this.glitchSounds=["glitch-1","glitch-2","glitch-3","glitch-4"]}start(){localStorage.getItem("tutorialCompleted")||(this.stop(),this.currentIndex=0,this.currentCharIndex=0,this.isActive=!0,this.isPaused=!1,this.isWaitingForNext=!1,this.startTimeout=setTimeout(()=>{!this.isActive||this.isPaused||(this.container.classList.remove("hidden"),this.showNext())},7e3))}pause(){this.isActive&&(this.isPaused=!0,this.container.classList.add("hidden"),this.startTimeout&&clearTimeout(this.startTimeout),this.typewriterTimeout&&clearTimeout(this.typewriterTimeout),this.nextTimeout&&clearTimeout(this.nextTimeout))}resume(){!this.isActive||!this.isPaused||(this.isPaused=!1,this.container.classList.remove("hidden"),this.isWaitingForNext?this.nextTimeout=setTimeout(()=>{this.currentIndex++,this.currentCharIndex=0,this.showNext()},2e3):this.typeWriter())}stop(){this.isActive=!1,this.isPaused=!1,this.container.classList.add("hidden"),this.startTimeout&&clearTimeout(this.startTimeout),this.typewriterTimeout&&clearTimeout(this.typewriterTimeout),this.nextTimeout&&clearTimeout(this.nextTimeout)}showNext(){if(!(!this.isActive||this.isPaused)){if(this.currentIndex>=this.dialogues.length){this.finish();return}this.textElem.textContent="",this.currentCharIndex=0,this.isWaitingForNext=!1,this.playRandomGlitch(),this.typeWriter()}}typeWriter(){if(!this.isActive||this.isPaused)return;const t=this.dialogues[this.currentIndex];this.currentCharIndex<t.length?(this.textElem.textContent=t.substring(0,this.currentCharIndex+1),this.currentCharIndex++,this.typewriterTimeout=setTimeout(()=>this.typeWriter(),30)):(this.isWaitingForNext=!0,this.nextTimeout=setTimeout(()=>{this.currentIndex++,this.currentCharIndex=0,this.showNext()},4e3))}playRandomGlitch(){let t;do t=Math.floor(Math.random()*this.glitchSounds.length);while(t===this.lastSoundIndex);this.lastSoundIndex=t,Tt.play(this.glitchSounds[t])}skip(){if(!this.isActive||this.isPaused)return;const t=this.dialogues[this.currentIndex];t&&(this.isWaitingForNext?(this.nextTimeout&&clearTimeout(this.nextTimeout),this.currentIndex++,this.currentCharIndex=0,this.showNext()):(this.typewriterTimeout&&clearTimeout(this.typewriterTimeout),this.textElem.textContent=t,this.currentCharIndex=t.length,this.isWaitingForNext=!0,this.nextTimeout&&clearTimeout(this.nextTimeout),this.nextTimeout=setTimeout(()=>{this.currentIndex++,this.currentCharIndex=0,this.showNext()},4e3)))}finish(){this.isActive=!1,this.container.classList.add("hidden"),localStorage.setItem("tutorialCompleted","true")}}class c_{constructor(){this.currentBiome="wilderness",this.lastBiomeCheck=0,this.biomeCheckInterval=3e3,this.windPlaying=!1,this.windVolume=0,this.targetWindVolume=0}getBiome(t,e,n){const s=n*.3048;if(s>3e3)return"highalt";if(e>34.23&&e<34.27&&t>-116.95&&t<-116.85)return"water";const a=[{lon:-118.24,lat:34.05,r:.12},{lon:-115.14,lat:36.17,r:.08},{lon:-117.16,lat:32.72,r:.08},{lon:-112.07,lat:33.45,r:.1}];for(const r of a)if(Math.sqrt((t-r.lon)**2+(e-r.lat)**2)<r.r)return"city";return e>34.5&&t>-117.5||e>33.5&&t>-116.5&&s<600?"desert":s>1500?"mountain":"wilderness"}update(t,e){if(!Tt||!Tt.listener)return;const n=e.speed||0;e.alt;const s=e.isFlapping||!1,a=e.isBoosting||!1,r=e.isTurbo||!1,o=8,l=80;if(n>o){const h=Math.min(1,(n-o)/(l-o));this.targetWindVolume=.08+h*.55,r&&(this.targetWindVolume=Math.min(.9,this.targetWindVolume*1.5)),a&&(this.targetWindVolume=Math.min(.85,this.targetWindVolume*1.3))}else this.targetWindVolume=.05;if(this.windVolume+=(this.targetWindVolume-this.windVolume)*t*3,Tt.sounds.has("wind")&&(this.windPlaying||(Tt.play("wind",.5),this.windPlaying=!0),Tt.setVolume("wind",this.windVolume)),Tt.sounds.has("jet-engine")&&Tt.isPlaying("jet-engine")){const h=n>30?Math.min(.3,(n-30)/200):0;Tt.setVolume("jet-engine",h)}s&&e.flapStrength>.3?(Tt.isPlaying("pitch")||Tt.play("pitch",.1),Tt.setVolume("pitch",.15+e.flapStrength*.2)):Tt.isPlaying("pitch")&&!s&&Tt.stop("pitch",.3),a&&(Tt.isPlaying("boost")||Tt.play("boost"));const c=Date.now();c-this.lastBiomeCheck>this.biomeCheckInterval&&(this.lastBiomeCheck=c,this.currentBiome=this.getBiome(e.lon,e.lat,e.alt))}startFlight(){this.windPlaying=!1,this.windVolume=.05}getCurrentBiome(){return this.currentBiome}}const eh=[{name:"Big Bear Lake",center:{lon:-116.905,lat:34.244},lengthM:11e3,widthM:1600,maxDepth:22,elevation:2060,rotation:-15,shape:"ellipse"},{name:"Baldwin Lake",center:{lon:-116.82,lat:34.28},lengthM:2500,widthM:1800,maxDepth:3,elevation:2050,rotation:0,shape:"ellipse"},{name:"Lake Arrowhead",center:{lon:-117.189,lat:34.258},lengthM:1800,widthM:900,maxDepth:56,elevation:1572,rotation:-30,shape:"ellipse"},{name:"Silverwood Lake",center:{lon:-117.333,lat:34.294},lengthM:3200,widthM:800,maxDepth:55,elevation:1050,rotation:-45,shape:"ellipse"},{name:"Gregory Lake",center:{lon:-117.258,lat:34.229},lengthM:400,widthM:200,maxDepth:8,elevation:1400,rotation:10,shape:"ellipse"}],h_=`
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
`,u_=`
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
`;class au{constructor(t,e){this.viewer=t,this.scene=e,this.waterMeshes=[],this.uniforms=null,this.initialized=!1,this.init()}init(){this.uniforms={time:{value:0},waveAmplitude:{value:.3},waveFrequency:{value:.15},shallowColor:{value:new Ut(4886692)},deepColor:{value:new Ut(667228)},skyColor:{value:new Ut(8900331)},sunDirection:{value:new F(.5,.8,.3).normalize()},maxDepthMeters:{value:22},opacity:{value:1}};for(const t of eh){const e=this.createWaterMesh(t);e&&(this.waterMeshes.push({mesh:e,body:t}),this.scene.add(e))}this.initialized=!0}createWaterMesh(t){const s=new Ts(t.lengthM,t.widthM,64,32),a=s.attributes.position;for(let c=0;c<a.count;c++){const h=a.getX(c),u=a.getY(c),d=h/(t.lengthM/2),p=u/(t.widthM/2),g=d*d+p*p;if(g>1){const _=1/Math.sqrt(g);a.setX(c,h*_),a.setY(c,u*_)}}a.needsUpdate=!0,s.rotateX(-Math.PI/2),t.rotation&&s.rotateY(Se.degToRad(t.rotation));const r={...this.uniforms,maxDepthMeters:{value:t.maxDepth}},o=new En({uniforms:r,vertexShader:h_,fragmentShader:u_,transparent:!0,side:Le,depthWrite:!1}),l=new nt(s,o);return l.renderOrder=-1,l.layers.set(0),l.frustumCulled=!1,l}update(t,e){if(!this.initialized)return;const n=performance.now()*.001,s=e.lon,a=e.lat,r=e.alt,o=111320,l=111320*Math.cos(Se.degToRad(a));for(const{mesh:c,body:h}of this.waterMeshes){c.material.uniforms.time.value=n;const u=(h.center.lon-s)*l,d=(h.center.lat-a)*o,p=h.elevation-r*.3048;c.position.set(u,p,-d);const g=Math.sqrt(u*u+d*d);c.visible=g<3e4;const _=Math.max(.05,1-(r*.3048-h.elevation)/5e3);c.material.uniforms.waveAmplitude.value=.3*_;const m=n*.02;c.material.uniforms.sunDirection.value.set(Math.cos(m)*.5,.8,Math.sin(m)*.3).normalize()}}static isOverWater(t,e){for(const n of eh){const s=(t-n.center.lon)*111320*Math.cos(e*Math.PI/180),a=(e-n.center.lat)*111320,r=-(n.rotation||0)*Math.PI/180,o=s*Math.cos(r)-a*Math.sin(r),l=s*Math.sin(r)+a*Math.cos(r),c=o/(n.lengthM/2),h=l/(n.widthM/2);if(c*c+h*h<=1)return!0}return!1}dispose(){for(const{mesh:t}of this.waterMeshes)this.scene.remove(t),t.geometry.dispose(),t.material.dispose();this.waterMeshes=[]}}const sn={renderDistance:2e3,cellSize:40,maxTrees:3e3,updateInterval:500,lodNear:500,lodFar:1500},nh={jeffreyPine:{trunkHeight:20,trunkRadius:.4,crownHeight:12,crownRadius:4,trunkColor:6044190,crownColor:2972199,altMin:1500,altMax:2400,density:.6,biome:"mountain"},whiteFir:{trunkHeight:25,trunkRadius:.5,crownHeight:18,crownRadius:3.5,trunkColor:7029286,crownColor:1789211,altMin:1700,altMax:2700,density:.5,biome:"mountain"},lodgepolePine:{trunkHeight:18,trunkRadius:.3,crownHeight:10,crownRadius:2.5,trunkColor:8016432,crownColor:3828533,altMin:2100,altMax:3e3,density:.7,biome:"mountain"},scrubOak:{trunkHeight:6,trunkRadius:.2,crownHeight:5,crownRadius:3,trunkColor:5914152,crownColor:4880954,altMin:1e3,altMax:1800,density:.3,biome:"mountain"},alpinePine:{trunkHeight:8,trunkRadius:.25,crownHeight:6,crownRadius:2,trunkColor:7031344,crownColor:2774320,altMin:2700,altMax:3500,density:.15,biome:"mountain"},joshuaTree:{trunkHeight:8,trunkRadius:.3,crownHeight:4,crownRadius:3,trunkColor:9139029,crownColor:7048782,altMin:400,altMax:1800,density:.12,biome:"desert"},saguaroCactus:{trunkHeight:10,trunkRadius:.4,crownHeight:2,crownRadius:.5,trunkColor:4880970,crownColor:5933658,altMin:200,altMax:1200,density:.06,biome:"desert"},creosoteBush:{trunkHeight:2,trunkRadius:.1,crownHeight:2,crownRadius:1.5,trunkColor:7035454,crownColor:8031056,altMin:0,altMax:1500,density:.2,biome:"desert"},desertSage:{trunkHeight:1.2,trunkRadius:.05,crownHeight:1,crownRadius:.8,trunkColor:9075296,crownColor:10135674,altMin:0,altMax:2e3,density:.25,biome:"desert"},smokeyTree:{trunkHeight:5,trunkRadius:.15,crownHeight:4,crownRadius:2.5,trunkColor:8022869,crownColor:9083514,altMin:100,altMax:900,density:.08,biome:"desert"},californiaFanPalm:{trunkHeight:18,trunkRadius:.3,crownHeight:5,crownRadius:4,trunkColor:9139029,crownColor:3836730,altMin:0,altMax:500,density:.3,biome:"coastal"},datePalm:{trunkHeight:15,trunkRadius:.35,crownHeight:6,crownRadius:4.5,trunkColor:8022864,crownColor:2980397,altMin:0,altMax:300,density:.25,biome:"coastal"},mexicanFanPalm:{trunkHeight:25,trunkRadius:.25,crownHeight:4,crownRadius:3.5,trunkColor:10127978,crownColor:4889162,altMin:0,altMax:700,density:.2,biome:"urban"},urbanLondonPlane:{trunkHeight:12,trunkRadius:.3,crownHeight:8,crownRadius:5,trunkColor:8022618,crownColor:3832368,altMin:0,altMax:500,density:.15,biome:"urban"},urbanJacaranda:{trunkHeight:10,trunkRadius:.25,crownHeight:6,crownRadius:5,trunkColor:5917242,crownColor:8018602,altMin:0,altMax:500,density:.1,biome:"urban"},urbanOak:{trunkHeight:14,trunkRadius:.4,crownHeight:10,crownRadius:7,trunkColor:5916720,crownColor:3828264,altMin:0,altMax:800,density:.12,biome:"urban"},eucalyptus:{trunkHeight:20,trunkRadius:.35,crownHeight:10,crownRadius:4,trunkColor:10127994,crownColor:5933658,altMin:0,altMax:600,density:.15,biome:"coastal"},manzanita:{trunkHeight:3,trunkRadius:.1,crownHeight:3,crownRadius:2,trunkColor:9056288,crownColor:4876848,altMin:300,altMax:1500,density:.35,biome:"chaparral"},californiaLaurel:{trunkHeight:10,trunkRadius:.3,crownHeight:7,crownRadius:5,trunkColor:5917232,crownColor:2775584,altMin:200,altMax:1200,density:.2,biome:"chaparral"},ceanothus:{trunkHeight:4,trunkRadius:.15,crownHeight:3,crownRadius:2.5,trunkColor:6969920,crownColor:3832400,altMin:200,altMax:1500,density:.3,biome:"chaparral"}};function xi(i,t){let e=i*73856093^t*19349663;return e=(e>>16^e)*73244475,e=(e>>16^e)*73244475,e=e>>16^e,(e&2147483647)/2147483647}class d_{constructor(t,e){this.viewer=t,this.scene=e,this.trunkInstances=null,this.crownInstances=null,this.activeCells=new Map,this.lastUpdateTime=0,this.lastUpdatePos={lon:0,lat:0},this.treePositions=[],this.treeCount=0,this.trunkGeometry=null,this.crownGeometries={},this.initialized=!1,this.init()}init(){this.trunkGeometry=new tn(.3,.5,1,5,1),this.trunkGeometry.translate(0,.5,0),this.crownGeometries.conifer=new $e(1,1,6,1),this.crownGeometries.conifer.translate(0,.5,0),this.crownGeometries.deciduous=new ie(1,5,4);const t=new Gt({color:6044190,flatShading:!0}),e=new Gt({color:2972199,flatShading:!0});this.trunkInstances=new Pn(this.trunkGeometry,t,sn.maxTrees),this.trunkInstances.count=0,this.trunkInstances.frustumCulled=!1,this.trunkInstances.layers.set(0),this.crownInstances=new Pn(this.crownGeometries.conifer,e,sn.maxTrees),this.crownInstances.count=0,this.crownInstances.frustumCulled=!1,this.crownInstances.layers.set(0),this.scene.add(this.trunkInstances),this.scene.add(this.crownInstances),this.initialized=!0}getBiome(t,e,n){if(n>1500)return"mountain";if(n>600&&n<1500)return"chaparral";if(e>34.5&&t>-117.5||e>33.5&&t>-116.5&&n<600||e<34&&e>33.3&&t>-116.8&&t<-115.5||e<34&&t>-113||e<33&&t>-112)return"desert";if(t<-117.5&&n<300||t<-118&&e<34.5)return"coastal";const s=[{lon:-118.24,lat:34.05,r:.15},{lon:-118.19,lat:33.77,r:.08},{lon:-117.16,lat:32.72,r:.12},{lon:-115.14,lat:36.17,r:.1},{lon:-117.91,lat:33.84,r:.08},{lon:-118.14,lat:34.15,r:.05},{lon:-112.07,lat:33.45,r:.12},{lon:-117.38,lat:33.98,r:.06},{lon:-117.29,lat:34.11,r:.05}];for(const a of s)if(Math.sqrt((t-a.lon)**2+(e-a.lat)**2)<a.r)return"urban";return n<300&&e>34.5?"desert":"chaparral"}getSpeciesForPosition(t,e,n){const s=this.getBiome(e,n,t),a=[];for(const[r,o]of Object.entries(nh))t>=o.altMin&&t<=o.altMax&&o.biome===s&&a.push({name:r,...o});if(a.length===0){const o={mountain:["chaparral"],chaparral:["mountain","coastal"],desert:["chaparral"],coastal:["urban","chaparral"],urban:["coastal","chaparral"]}[s]||[];for(const l of o){for(const[c,h]of Object.entries(nh))t>=h.altMin&&t<=h.altMax&&h.biome===l&&a.push({name:c,...h});if(a.length>0)break}}return a}isWaterArea(t,e){return au.isOverWater(t,e)}generateTreesForCell(t,e,n,s,a){const r=`${t},${e}`;if(this.activeCells.has(r))return;const o=t*sn.cellSize,l=e*sn.cellSize,c=111320,h=111320*Math.cos(Se.degToRad(s)),u=n+o/h,d=s+l/c;if(this.isWaterArea(u,d)){this.activeCells.set(r,[]);return}const p=Cesium.Cartographic.fromDegrees(u,d),g=this.viewer.scene.globe.getHeight(p);if(g==null)return;const _=g,m=this.getSpeciesForPosition(_,u,d);if(m.length===0){this.activeCells.set(r,[]);return}xi(t,e);const f=[],S=3;for(let w=0;w<S;w++)for(let y=0;y<S;y++){const E=xi(t*100+w,e*100+y),R=Math.floor(E*m.length)%m.length,T=m[R];if(xi(t*200+w,e*200+y)>T.density)continue;const D=xi(t*300+w,e*300+y)*.8,x=xi(t*400+w,e*400+y)*.8,M=o+(w+D)*(sn.cellSize/S),A=l+(y+x)*(sn.cellSize/S),I=.7+xi(t*500+w,e*500+y)*.6;f.push({x:M,z:A,terrainHeight:g,species:T,sizeScale:I})}this.activeCells.set(r,f)}update(t,e){if(!this.initialized)return;const n=Date.now();if(n-this.lastUpdateTime<sn.updateInterval)return;this.lastUpdateTime=n;const s=e.lon,a=e.lat,r=e.alt;if(r>5e3){this.trunkInstances.count=0,this.crownInstances.count=0;return}const o=Math.min(sn.renderDistance,Math.max(400,r*1.5)),l=Math.ceil(o/sn.cellSize),c=l+2;for(const[m,f]of this.activeCells){const[S,w]=m.split(",").map(Number);(Math.abs(S)>c||Math.abs(w)>c)&&this.activeCells.delete(m)}for(let m=-l;m<=l;m++)for(let f=-l;f<=l;f++)Math.sqrt(m*m+f*f)*sn.cellSize>o||this.generateTreesForCell(m,f,s,a,r);let h=0;const u=new jt,d=new F,p=new qe,g=new F,_=new Ut;for(const[m,f]of this.activeCells){for(const S of f){if(h>=sn.maxTrees)break;const w=Math.sqrt(S.x*S.x+S.z*S.z);if(w>o)continue;const y=w>sn.lodFar?.7:w>sn.lodNear?.85:1,E=S.species,R=S.sizeScale*y,T=S.terrainHeight-r;d.set(S.x,T,S.z),g.set(E.trunkRadius*R*2,E.trunkHeight*R,E.trunkRadius*R*2),u.compose(d,p,g),this.trunkInstances.setMatrixAt(h,u),_.setHex(E.trunkColor);const D=.8+xi(Math.floor(S.x),Math.floor(S.z))*.4;_.multiplyScalar(D),this.trunkInstances.setColorAt(h,_),d.set(S.x,T+E.trunkHeight*R*.7,S.z),g.set(E.crownRadius*R*2,E.crownHeight*R,E.crownRadius*R*2),u.compose(d,p,g),this.crownInstances.setMatrixAt(h,u),_.setHex(E.crownColor);const x=.7+xi(Math.floor(S.x)+1e3,Math.floor(S.z)+1e3)*.6;_.multiplyScalar(x),this.crownInstances.setColorAt(h,_),h++}if(h>=sn.maxTrees)break}this.trunkInstances.count=h,this.crownInstances.count=h,h>0&&(this.trunkInstances.instanceMatrix.needsUpdate=!0,this.crownInstances.instanceMatrix.needsUpdate=!0,this.trunkInstances.instanceColor&&(this.trunkInstances.instanceColor.needsUpdate=!0),this.crownInstances.instanceColor&&(this.crownInstances.instanceColor.needsUpdate=!0)),this.lastUpdatePos={lon:s,lat:a}}clear(){this.activeCells.clear(),this.trunkInstances.count=0,this.crownInstances.count=0}dispose(){this.trunkInstances&&(this.scene.remove(this.trunkInstances),this.trunkInstances.dispose()),this.crownInstances&&(this.scene.remove(this.crownInstances),this.crownInstances.dispose()),this.trunkGeometry&&this.trunkGeometry.dispose();for(const t of Object.values(this.crownGeometries))t.dispose()}}const f_=[{name:"Big Bear Ski Resort",description:"Snow Summit & Bear Mountain ski area",lon:-116.8595,lat:34.2272,elevation:2400,structures:[{type:"lodge",width:40,depth:25,height:12,color:9136404,roofColor:4861952},{type:"lodge",width:30,depth:20,height:10,color:9136404,roofColor:4861952,offsetX:60,offsetZ:20},{type:"tower",width:4,depth:4,height:25,color:8947848,offsetX:-30,offsetZ:-20},{type:"tower",width:4,depth:4,height:25,color:8947848,offsetX:-30,offsetZ:40},{type:"tower",width:4,depth:4,height:25,color:8947848,offsetX:-30,offsetZ:100},{type:"tower",width:4,depth:4,height:25,color:8947848,offsetX:-30,offsetZ:160},{type:"flat",width:80,depth:60,height:.3,color:3355443,offsetX:80,offsetZ:-30}],labelOffset:30},{name:"Las Vegas Strip",description:"The famous Las Vegas Boulevard casino strip",lon:-115.1728,lat:36.1147,elevation:610,structures:[{type:"pyramid",width:100,depth:100,height:110,color:1710618,offsetX:0,offsetZ:-200},{type:"skyscraper",width:60,depth:40,height:145,color:12887636,offsetX:-80,offsetZ:-350},{type:"skyscraper",width:80,depth:35,height:155,color:15260872,offsetX:0,offsetZ:100},{type:"skyscraper",width:70,depth:50,height:120,color:16117984,offsetX:60,offsetZ:250},{type:"curved_tower",width:50,depth:50,height:190,color:9127187,offsetX:-50,offsetZ:500},{type:"tower",width:12,depth:12,height:350,color:13421772,offsetX:0,offsetZ:900},{type:"skyscraper",width:90,depth:70,height:90,color:25600,offsetX:100,offsetZ:-100},{type:"skyscraper",width:55,depth:40,height:180,color:4620980,offsetX:30,offsetZ:0},{type:"skyscraper",width:45,depth:35,height:185,color:7372944,offsetX:-40,offsetZ:50},{type:"skyscraper",width:60,depth:45,height:145,color:14596231,offsetX:40,offsetZ:400},{type:"tower",width:8,depth:8,height:165,color:6908265,offsetX:50,offsetZ:150},{type:"flat",width:35,depth:1400,height:.5,color:2236962,offsetX:0,offsetZ:200}],labelOffset:360},{name:"Hollywood Hills",description:"Hollywood Sign and surrounding hills",lon:-118.3215,lat:34.1341,elevation:480,structures:[{type:"sign_letter",width:3,depth:1,height:14,color:16777215,offsetX:-50,offsetZ:0},{type:"sign_letter",width:3,depth:1,height:14,color:16777215,offsetX:-38,offsetZ:0},{type:"sign_letter",width:3,depth:1,height:14,color:16777215,offsetX:-26,offsetZ:0},{type:"sign_letter",width:3,depth:1,height:14,color:16777215,offsetX:-14,offsetZ:0},{type:"sign_letter",width:3,depth:1,height:14,color:16777215,offsetX:-2,offsetZ:0},{type:"sign_letter",width:3,depth:1,height:14,color:16777215,offsetX:10,offsetZ:0},{type:"sign_letter",width:3,depth:1,height:14,color:16777215,offsetX:22,offsetZ:0},{type:"sign_letter",width:3,depth:1,height:14,color:16777215,offsetX:34,offsetZ:0},{type:"sign_letter",width:3,depth:1,height:14,color:16777215,offsetX:46,offsetZ:0},{type:"dome",width:20,depth:20,height:15,color:15260872,offsetX:200,offsetZ:-300},{type:"box",width:40,depth:30,height:8,color:15260872,offsetX:200,offsetZ:-300}],labelOffset:20},{name:"Twentynine Palms",description:"Marine Corps Air Ground Combat Center",lon:-116.0542,lat:34.1356,elevation:600,structures:[{type:"military_building",width:60,depth:30,height:8,color:12759680,offsetX:0,offsetZ:0},{type:"military_building",width:40,depth:25,height:6,color:12759680,offsetX:80,offsetZ:30},{type:"military_building",width:50,depth:20,height:7,color:12759680,offsetX:-70,offsetZ:50},{type:"hangar",width:50,depth:40,height:15,color:8421504,offsetX:0,offsetZ:-100},{type:"hangar",width:50,depth:40,height:15,color:8421504,offsetX:70,offsetZ:-100},{type:"flat",width:45,depth:2500,height:.3,color:2763306,offsetX:200,offsetZ:0},{type:"tower",width:8,depth:8,height:25,color:8421504,offsetX:150,offsetZ:-50},{type:"box",width:30,depth:12,height:5,color:12759680,offsetX:-150,offsetZ:-30},{type:"box",width:30,depth:12,height:5,color:12759680,offsetX:-150,offsetZ:-60},{type:"box",width:30,depth:12,height:5,color:12759680,offsetX:-150,offsetZ:-90}],labelOffset:30},{name:"Fort Irwin NTC",description:"National Training Center - US Army desert warfare training",lon:-116.6833,lat:35.2628,elevation:730,structures:[{type:"military_building",width:80,depth:40,height:10,color:12759680,offsetX:0,offsetZ:0},{type:"military_building",width:60,depth:30,height:8,color:12759680,offsetX:100,offsetZ:40},{type:"flat",width:200,depth:150,height:.3,color:11047024,offsetX:-200,offsetZ:0},{type:"hangar",width:60,depth:50,height:18,color:7368816,offsetX:0,offsetZ:-150},{type:"hangar",width:60,depth:50,height:18,color:7368816,offsetX:80,offsetZ:-150},{type:"box",width:40,depth:15,height:6,color:12759680,offsetX:-100,offsetZ:80},{type:"box",width:40,depth:15,height:6,color:12759680,offsetX:-100,offsetZ:110},{type:"box",width:40,depth:15,height:6,color:12759680,offsetX:-100,offsetZ:140},{type:"tower",width:5,depth:5,height:40,color:11184810,offsetX:150,offsetZ:-80},{type:"water_tower",width:10,depth:10,height:30,color:13421772,offsetX:180,offsetZ:50}],labelOffset:45},{name:"Reagan Presidential Library",description:"Ronald Reagan Presidential Library & Museum, Simi Valley",lon:-118.82,lat:34.2597,elevation:470,structures:[{type:"box",width:70,depth:50,height:12,color:16115404,offsetX:0,offsetZ:0},{type:"box",width:30,depth:60,height:10,color:16115404,offsetX:-50,offsetZ:10},{type:"hangar",width:60,depth:80,height:22,color:14538176,offsetX:80,offsetZ:-50},{type:"flat",width:40,depth:40,height:.2,color:13808780,offsetX:0,offsetZ:60},{type:"tower",width:6,depth:6,height:18,color:16115404,offsetX:-20,offsetZ:-30},{type:"flat",width:100,depth:60,height:.3,color:3355443,offsetX:-100,offsetZ:-60}],labelOffset:25},{name:"Rose Bowl",description:"Rose Bowl Stadium, Pasadena",lon:-118.1676,lat:34.1613,elevation:260,structures:[{type:"stadium",width:200,depth:150,height:25,color:11047024,offsetX:0,offsetZ:0},{type:"flat",width:110,depth:75,height:.5,color:2263842,offsetX:0,offsetZ:0},{type:"flat",width:200,depth:100,height:.3,color:3355443,offsetX:0,offsetZ:-140},{type:"flat",width:150,depth:100,height:.3,color:3355443,offsetX:200,offsetZ:0}],labelOffset:30}],bn={};function us(){return bn.box||(bn.box=new fe(1,1,1)),bn.box}function p_(){return bn.cone||(bn.cone=new $e(.5,1,4)),bn.cone}function zs(){return bn.cylinder||(bn.cylinder=new tn(.5,.5,1,8)),bn.cylinder}function ih(){return bn.sphere||(bn.sphere=new ie(.5,8,6)),bn.sphere}function m_(i){const t=new De,e=new Gt({color:i.color,flatShading:!0});switch(i.type){case"box":case"military_building":case"sign_letter":case"lodge":{const n=new nt(us(),e);if(n.scale.set(i.width,i.height,i.depth),n.position.y=i.height/2,t.add(n),i.type==="lodge"&&i.roofColor){const s=new Gt({color:i.roofColor,flatShading:!0}),a=new nt(p_(),s);a.scale.set(i.width*1.1,i.height*.5,i.depth*1.1),a.position.y=i.height+i.height*.25,t.add(a)}break}case"skyscraper":case"curved_tower":{const n=new nt(us(),e);n.scale.set(i.width,i.height,i.depth),n.position.y=i.height/2,t.add(n);const s=new Gt({color:8956620,transparent:!0,opacity:.4});for(let a=0;a<5;a++){const r=new nt(us(),s),o=i.height*.15+i.height*.7*a/5;r.scale.set(i.width+.5,i.height*.08,i.depth+.5),r.position.y=o,t.add(r)}break}case"tower":{const n=new nt(zs(),e);n.scale.set(i.width,i.height,i.depth),n.position.y=i.height/2,t.add(n);const s=new Gt({color:11184810}),a=new nt(zs(),s);a.scale.set(i.width*2,2,i.depth*2),a.position.y=i.height,t.add(a);break}case"water_tower":{const n=new Gt({color:8947848});for(let a=0;a<4;a++){const r=new nt(zs(),n),o=a/4*Math.PI*2;r.scale.set(1,i.height*.7,1),r.position.set(Math.cos(o)*3,i.height*.35,Math.sin(o)*3),t.add(r)}const s=new nt(ih(),e);s.scale.set(i.width,i.width*.6,i.depth),s.position.y=i.height*.75,t.add(s);break}case"pyramid":{const n=new $e(.707,1,4);n.rotateY(Math.PI/4);const s=new nt(n,e);s.scale.set(i.width,i.height,i.depth),s.position.y=i.height/2,t.add(s);const a=new Ue({color:16777096,transparent:!0,opacity:.15}),r=new nt(zs(),a);r.scale.set(3,500,3),r.position.y=i.height+250,t.add(r);break}case"dome":{const n=new nt(ih(),e);n.scale.set(i.width,i.height,i.depth),n.position.y=i.height/2,t.add(n);break}case"hangar":{const n=new nt(us(),e);n.scale.set(i.width,i.height,i.depth),n.position.y=i.height/2,t.add(n);const s=new Gt({color:i.color,flatShading:!0}),a=new nt(zs(),s);a.scale.set(i.width,i.depth,i.width*.3),a.rotation.z=Math.PI/2,a.position.y=i.height,t.add(a);break}case"stadium":{const n=new Gt({color:i.color,flatShading:!0}),s=32,a=i.width/2,r=i.depth/2,o=15;for(let l=0;l<s;l++){const c=l/s*Math.PI*2,h=Math.cos(c)*a,u=Math.sin(c)*r,d=new nt(us(),n);d.scale.set(o,i.height,o),d.position.set(h,i.height/2,u),d.lookAt(0,i.height/2,0),t.add(d)}break}default:{const n=new nt(us(),e);n.scale.set(i.width,i.height||.5,i.depth),n.position.y=(i.height||.5)/2,t.add(n);break}}return t.position.set(i.offsetX||0,0,i.offsetZ||0),t.traverse(n=>{n.layers.set(0)}),t}class g_{constructor(t,e){this.viewer=t,this.scene=e,this.landmarkGroups=[],this.initialized=!1,this.init()}init(){for(const t of f_){const e=new De;e.visible=!1;for(const n of t.structures){const s=m_(n);e.add(s)}e.traverse(n=>{n.layers.set(0)}),this.scene.add(e),this.landmarkGroups.push({group:e,landmark:t,visible:!1})}this.initialized=!0}update(t,e){if(!this.initialized)return;const n=e.lon,s=e.lat,r=e.alt*.3048,o=111320,l=111320*Math.cos(Se.degToRad(s));for(const c of this.landmarkGroups){const h=c.landmark,u=(h.lon-n)*l,d=(h.lat-s)*o,p=Math.sqrt(u*u+d*d),g=Math.max(5e3,r*8),_=p<g;if(c.group.visible=_,_){const m=h.elevation-r;c.group.position.set(u,m,-d);const f=p>3e3?1+(p-3e3)/2e4:1;c.group.scale.setScalar(f)}}}dispose(){for(const t of this.landmarkGroups)this.scene.remove(t.group),t.group.traverse(e=>{e.geometry&&e.geometry.dispose(),e.material&&e.material.dispose()});this.landmarkGroups=[]}}const x_=[{name:"Los Angeles",lon:-118.2437,lat:34.0522,elevation:90,radius:5e3,density:.7,minHeight:5,maxHeight:280,downtownRadius:1500,style:"modern",gridSize:30},{name:"Downtown LA",lon:-118.2468,lat:34.0407,elevation:90,radius:1200,density:.9,minHeight:30,maxHeight:310,downtownRadius:600,style:"modern",gridSize:25},{name:"Las Vegas (City)",lon:-115.1398,lat:36.1699,elevation:610,radius:4e3,density:.6,minHeight:5,maxHeight:100,downtownRadius:1e3,style:"modern",gridSize:30},{name:"San Diego",lon:-117.1611,lat:32.7157,elevation:20,radius:3500,density:.65,minHeight:5,maxHeight:150,downtownRadius:800,style:"modern",gridSize:28},{name:"Phoenix",lon:-112.074,lat:33.4484,elevation:340,radius:5e3,density:.5,minHeight:5,maxHeight:130,downtownRadius:1e3,style:"modern",gridSize:35},{name:"Long Beach",lon:-118.1937,lat:33.7701,elevation:10,radius:2e3,density:.6,minHeight:5,maxHeight:90,downtownRadius:500,style:"modern",gridSize:28},{name:"Riverside",lon:-117.3755,lat:33.9806,elevation:260,radius:1800,density:.45,minHeight:5,maxHeight:50,downtownRadius:400,style:"suburban",gridSize:35},{name:"San Bernardino",lon:-117.2898,lat:34.1083,elevation:330,radius:1500,density:.4,minHeight:5,maxHeight:40,downtownRadius:400,style:"suburban",gridSize:35},{name:"Bakersfield",lon:-119.0187,lat:35.3733,elevation:120,radius:2e3,density:.4,minHeight:4,maxHeight:40,downtownRadius:500,style:"suburban",gridSize:35},{name:"Palm Springs",lon:-116.5453,lat:33.8303,elevation:150,radius:1200,density:.35,minHeight:4,maxHeight:30,downtownRadius:300,style:"resort",gridSize:40},{name:"Santa Barbara",lon:-119.6982,lat:34.4208,elevation:15,radius:1500,density:.5,minHeight:4,maxHeight:30,downtownRadius:400,style:"spanish",gridSize:30},{name:"Pasadena",lon:-118.1445,lat:34.1478,elevation:260,radius:1200,density:.5,minHeight:5,maxHeight:50,downtownRadius:400,style:"modern",gridSize:30},{name:"Glendale",lon:-118.2551,lat:34.1425,elevation:180,radius:1e3,density:.55,minHeight:5,maxHeight:70,downtownRadius:400,style:"modern",gridSize:28},{name:"Burbank",lon:-118.309,lat:34.1808,elevation:180,radius:1e3,density:.5,minHeight:5,maxHeight:50,downtownRadius:400,style:"modern",gridSize:30},{name:"Tucson",lon:-110.9747,lat:32.2226,elevation:730,radius:2500,density:.4,minHeight:4,maxHeight:60,downtownRadius:600,style:"desert",gridSize:35},{name:"Henderson",lon:-114.9817,lat:36.0395,elevation:590,radius:1500,density:.4,minHeight:4,maxHeight:30,downtownRadius:400,style:"suburban",gridSize:35},{name:"Anaheim",lon:-117.9145,lat:33.8366,elevation:50,radius:1500,density:.55,minHeight:5,maxHeight:50,downtownRadius:500,style:"modern",gridSize:30},{name:"Irvine",lon:-117.8265,lat:33.6846,elevation:25,radius:1500,density:.5,minHeight:5,maxHeight:50,downtownRadius:400,style:"modern",gridSize:30},{name:"Oxnard",lon:-119.1771,lat:34.1975,elevation:15,radius:1e3,density:.4,minHeight:4,maxHeight:25,downtownRadius:300,style:"suburban",gridSize:35},{name:"Fresno",lon:-119.7871,lat:36.7378,elevation:93,radius:2e3,density:.45,minHeight:4,maxHeight:50,downtownRadius:500,style:"suburban",gridSize:35}],sh={modern:[8952234,6715306,10070715,11189196,5596791,7833753,4478310,12307677],suburban:[14535850,13417369,12298888,15654331,13154454,12562317],resort:[16115404,15259061,16772560,15785664,14732464],spanish:[15255712,13936757,15784120,13408614,12290133],desert:[13808780,13151615,12560514,13940886,13411952]};function Rn(i,t){let e=i*73856093^t*19349663;return e=(e>>16^e)*73244475,e=(e>>16^e)*73244475,e=e>>16^e,(e&2147483647)/2147483647}const ds=5e3;class __{constructor(t,e){this.viewer=t,this.scene=e,this.buildingInstances=null,this.windowInstances=null,this.rooftopInstances=null,this.generatedCities=new Map,this.activeCities=[],this.lastUpdateTime=0,this.initialized=!1,this.init()}init(){const t=new fe(1,1,1);t.translate(0,.5,0);const e=new Gt({color:8952234,flatShading:!0});this.buildingInstances=new Pn(t,e,ds),this.buildingInstances.count=0,this.buildingInstances.frustumCulled=!1,this.buildingInstances.layers.set(0),this.scene.add(this.buildingInstances);const n=new fe(1,1,1);n.translate(0,.5,0);const s=new Ue({color:16772778,transparent:!0,opacity:.35});this.windowInstances=new Pn(n,s,ds),this.windowInstances.count=0,this.windowInstances.frustumCulled=!1,this.windowInstances.layers.set(0),this.scene.add(this.windowInstances);const a=new fe(1,1,1);a.translate(0,.5,0);const r=new Gt({color:6710886,flatShading:!0});this.rooftopInstances=new Pn(a,r,2e3),this.rooftopInstances.count=0,this.rooftopInstances.frustumCulled=!1,this.rooftopInstances.layers.set(0),this.scene.add(this.rooftopInstances);for(const o of x_)this.generateCity(o);this.initialized=!0}generateCity(t){const e=[],n=Math.ceil(t.radius/t.gridSize),s=sh[t.style]||sh.modern;for(let a=-n;a<=n;a++)for(let r=-n;r<=n;r++){const o=a*t.gridSize,l=r*t.gridSize,c=Math.sqrt(o*o+l*l);if(c>t.radius)continue;const h=Rn(a+t.lon*1e4,r+t.lat*1e4);if(h>t.density)continue;const u=t.style==="modern"?4:5;if(a%u===0||r%u===0)continue;1-Math.min(1,c/t.radius);const d=c<t.downtownRadius?1-c/t.downtownRadius*.5:.3*(1-(c-t.downtownRadius)/(t.radius-t.downtownRadius)),p=Rn(a*200+t.lon*5e3,r*200+t.lat*5e3),g=t.minHeight+(t.maxHeight-t.minHeight)*d*p,_=Math.max(t.minHeight,g),m=Rn(a*300,r*300),f=t.gridSize*.4+m*t.gridSize*.4,S=t.gridSize*.4+Rn(a*400,r*400)*t.gridSize*.4,w=Math.floor(Rn(a*500,r*500)*s.length)%s.length,y=_>30,E=_>80&&Rn(a*700,r*700)>.6,R=Math.max(1,Math.floor(_/4)),T=_>60&&Rn(a*800,r*800)>.5;e.push({x:o+(h-.5)*t.gridSize*.3,z:l+(Rn(a*600,r*600)-.5)*t.gridSize*.3,width:f,depth:S,height:_,color:s[w],hasRooftopDetail:y,hasAntenna:E,windowRows:R,hasSetback:T,setbackHeight:T?_*(.6+Rn(a*900,r*900)*.3):0,setbackInset:T?.7:1})}this.generatedCities.set(t.name,{city:t,buildings:e})}update(t,e){if(!this.initialized)return;const n=Date.now();if(n-this.lastUpdateTime<300)return;this.lastUpdateTime=n;const s=e.lon,a=e.lat,o=e.alt*.3048,l=111320,c=111320*Math.cos(Se.degToRad(a)),h=Math.max(8e3,o*10),u=new jt,d=new F,p=new qe,g=new F,_=new Ut;let m=0,f=0,S=0;for(const[w,{city:y,buildings:E}]of this.generatedCities){const R=(y.lon-s)*c,T=(y.lat-a)*l;if(Math.sqrt(R*R+T*T)>h+y.radius)continue;const x=y.elevation-o;for(const M of E){if(m>=ds)break;const A=R+M.x,I=-T-M.z,L=Math.sqrt(A*A+I*I);if(L>h)continue;let B=M.height;if(L>h*.7&&B<20)continue;d.set(A,x,I),g.set(M.width,B,M.depth),u.compose(d,p,g),this.buildingInstances.setMatrixAt(m,u),_.setHex(M.color);const O=.85+Rn(Math.floor(M.x*7),Math.floor(M.z*7))*.3;if(_.multiplyScalar(O),this.buildingInstances.setColorAt(m,_),L<h*.5&&f<ds&&B>10){const G=B*.8;d.set(A,x+B*.1,I),g.set(M.width+.3,G,M.depth+.3),u.compose(d,p,g),this.windowInstances.setMatrixAt(f,u);const z=Rn(Math.floor(M.x*3),Math.floor(M.z*3))>.5?16772778:11197951;_.setHex(z),this.windowInstances.setColorAt(f,_),f++}if(L<h*.3&&S<2e3&&M.hasRooftopDetail&&(d.set(A+M.width*.2,x+B,I),g.set(M.width*.3,3,M.depth*.3),u.compose(d,p,g),this.rooftopInstances.setMatrixAt(S,u),_.setHex(5592405),this.rooftopInstances.setColorAt(S,_),S++,M.hasAntenna&&S<2e3&&(d.set(A,x+B,I),g.set(.5,B*.15,.5),u.compose(d,p,g),this.rooftopInstances.setMatrixAt(S,u),_.setHex(13369344),this.rooftopInstances.setColorAt(S,_),S++)),M.hasSetback&&m<ds-1){m++;const G=B-M.setbackHeight;d.set(A,x+M.setbackHeight,I),g.set(M.width*M.setbackInset,G,M.depth*M.setbackInset),u.compose(d,p,g),this.buildingInstances.setMatrixAt(m,u),_.setHex(M.color),_.multiplyScalar(O*1.1),this.buildingInstances.setColorAt(m,_)}m++}if(m>=ds)break}this.buildingInstances.count=m,this.windowInstances.count=f,this.rooftopInstances.count=S,m>0&&(this.buildingInstances.instanceMatrix.needsUpdate=!0,this.buildingInstances.instanceColor&&(this.buildingInstances.instanceColor.needsUpdate=!0)),f>0&&(this.windowInstances.instanceMatrix.needsUpdate=!0,this.windowInstances.instanceColor&&(this.windowInstances.instanceColor.needsUpdate=!0)),S>0&&(this.rooftopInstances.instanceMatrix.needsUpdate=!0,this.rooftopInstances.instanceColor&&(this.rooftopInstances.instanceColor.needsUpdate=!0))}dispose(){[this.buildingInstances,this.windowInstances,this.rooftopInstances].forEach(t=>{t&&(this.scene.remove(t),t.dispose())})}}const v_=[{name:"I-15 (LA to Vegas)",lanes:4,vehicleDensity:.8,waypoints:[{lon:-118.26,lat:34.05},{lon:-117.91,lat:34.13},{lon:-117.39,lat:34.17},{lon:-117.29,lat:34.38},{lon:-117,lat:34.83},{lon:-116.17,lat:35.26},{lon:-115.55,lat:35.6},{lon:-115.17,lat:36.08},{lon:-115.14,lat:36.17}]},{name:"I-10 (LA to Phoenix)",lanes:4,vehicleDensity:.7,waypoints:[{lon:-118.24,lat:34.04},{lon:-117.88,lat:34},{lon:-117.38,lat:33.98},{lon:-116.97,lat:33.93},{lon:-116.54,lat:33.83},{lon:-115.5,lat:33.72},{lon:-114.57,lat:33.42},{lon:-113.5,lat:33.45},{lon:-112.07,lat:33.45}]},{name:"I-5 (LA to Bakersfield)",lanes:3,vehicleDensity:.6,waypoints:[{lon:-118.24,lat:34.05},{lon:-118.38,lat:34.19},{lon:-118.53,lat:34.39},{lon:-118.73,lat:34.74},{lon:-118.94,lat:34.97},{lon:-119.02,lat:35.37}]},{name:"SR-18/138 (Big Bear Highway)",lanes:1,vehicleDensity:.3,waypoints:[{lon:-117.29,lat:34.25},{lon:-117.09,lat:34.25},{lon:-116.94,lat:34.24},{lon:-116.86,lat:34.24},{lon:-116.78,lat:34.26}]},{name:"I-405 (LA)",lanes:5,vehicleDensity:.9,waypoints:[{lon:-118.37,lat:33.79},{lon:-118.39,lat:33.94},{lon:-118.43,lat:34.02},{lon:-118.47,lat:34.08},{lon:-118.49,lat:34.17},{lon:-118.47,lat:34.23}]},{name:"US-95 (Vegas to NV)",lanes:2,vehicleDensity:.4,waypoints:[{lon:-115.14,lat:36.17},{lon:-115.12,lat:36.3},{lon:-115.14,lat:36.5},{lon:-115.32,lat:36.78}]},{name:"SR-62 (29 Palms Hwy)",lanes:1,vehicleDensity:.2,waypoints:[{lon:-116.54,lat:34.05},{lon:-116.28,lat:34.07},{lon:-116.05,lat:34.14},{lon:-115.75,lat:34.25}]}],M_=[{name:"Big Bear Lake",centerLon:-116.905,centerLat:34.244,radiusM:4e3,count:8,elevation:2060},{name:"Lake Arrowhead",centerLon:-117.189,centerLat:34.258,radiusM:800,count:4,elevation:1572},{name:"Silverwood Lake",centerLon:-117.333,centerLat:34.294,radiusM:1200,count:3,elevation:1050},{name:"San Diego Bay",centerLon:-117.175,centerLat:32.685,radiusM:3e3,count:12,elevation:0},{name:"Long Beach Harbor",centerLon:-118.19,centerLat:33.74,radiusM:4e3,count:15,elevation:0},{name:"Lake Mead (edge)",centerLon:-114.78,centerLat:36.02,radiusM:5e3,count:6,elevation:372}],y_=[{name:"LAX Approach",startLon:-119.5,startLat:33.8,endLon:-118.41,endLat:33.94,altitude:3e3,count:3,speed:130},{name:"LAX Departure N",startLon:-118.41,startLat:33.94,endLon:-118.8,endLat:34.8,altitude:8e3,count:2,speed:200},{name:"Vegas Approach S",startLon:-115.5,startLat:35.5,endLon:-115.15,endLat:36.08,altitude:4e3,count:2,speed:140},{name:"Phoenix Route",startLon:-118,startLat:34,endLon:-112,endLat:33.5,altitude:11e3,count:2,speed:250},{name:"SF-SD Corridor",startLon:-118.5,startLat:35.5,endLon:-117.2,endLat:32.7,altitude:1e4,count:2,speed:240},{name:"Military (Edwards)",startLon:-117.9,startLat:34.9,endLon:-116.7,endLat:35.3,altitude:5e3,count:1,speed:300},{name:"SoCal Helicopters",startLon:-118.3,startLat:34,endLon:-117.8,endLat:34.1,altitude:500,count:3,speed:60}],S_=[{name:"Bear Mountain Main",topLon:-116.858,topLat:34.226,topAlt:2680,botLon:-116.861,botLat:34.229,botAlt:2440,count:15},{name:"Bear Mountain East",topLon:-116.8555,topLat:34.2255,topAlt:2650,botLon:-116.8575,botLat:34.2285,botAlt:2450,count:10},{name:"Snow Summit Main",topLon:-116.865,topLat:34.2275,topAlt:2600,botLon:-116.868,botLat:34.231,botAlt:2400,count:12},{name:"Snow Summit West",topLon:-116.867,topLat:34.227,topAlt:2580,botLon:-116.8695,botLat:34.23,botAlt:2410,count:8}],eo=60,ah=30,rh=40;function Ce(i,t){let e=i*73856093^t*19349663;return e=(e>>16^e)*73244475,e=(e>>16^e)*73244475,e=e>>16^e,(e&2147483647)/2147483647}const no=800,io=80,so=20;class w_{constructor(t,e){this.viewer=t,this.scene=e,this.vehicleInstances=null,this.boatInstances=null,this.aircraftInstances=null,this.vehicles=[],this.boats=[],this.aircraft=[],this.skiers=[],this.contrailSegments=[],this.skierInstances=null,this.sailInstances=null,this.contrailInstances=null,this.lastUpdateTime=0,this.time=0,this.initialized=!1,this.init()}init(){const t=new fe(1,1,1);t.translate(0,.5,0);const e=new Gt({color:13421772,flatShading:!0});this.vehicleInstances=new Pn(t,e,no),this.vehicleInstances.count=0,this.vehicleInstances.frustumCulled=!1,this.vehicleInstances.layers.set(0),this.scene.add(this.vehicleInstances);const n=new fe(1,1,1);n.translate(0,.5,0);const s=new Gt({color:16777215,flatShading:!0});this.boatInstances=new Pn(n,s,io),this.boatInstances.count=0,this.boatInstances.frustumCulled=!1,this.boatInstances.layers.set(0),this.scene.add(this.boatInstances);const a=new fe(1,1,1);a.translate(0,.5,0);const r=new Gt({color:15658734,flatShading:!0});this.aircraftInstances=new Pn(a,r,so),this.aircraftInstances.count=0,this.aircraftInstances.frustumCulled=!1,this.aircraftInstances.layers.set(0),this.scene.add(this.aircraftInstances);const o=new fe(1,1,1);o.translate(0,.5,0);const l=new Gt({color:16711680});this.skierInstances=new Pn(o,l,eo),this.skierInstances.count=0,this.skierInstances.frustumCulled=!1,this.skierInstances.layers.set(0),this.scene.add(this.skierInstances);const c=new $e(.5,1,3);c.translate(0,.5,0);const h=new Gt({color:16777215,side:Le});this.sailInstances=new Pn(c,h,ah),this.sailInstances.count=0,this.sailInstances.frustumCulled=!1,this.sailInstances.layers.set(0),this.scene.add(this.sailInstances);const u=new fe(1,1,1);u.translate(0,.5,0);const d=new Ue({color:16777215,transparent:!0,opacity:.5});this.contrailInstances=new Pn(u,d,rh),this.contrailInstances.count=0,this.contrailInstances.frustumCulled=!1,this.contrailInstances.layers.set(0),this.scene.add(this.contrailInstances),this.spawnVehicles(),this.spawnBoats(),this.spawnAircraft(),this.spawnSkiers(),this.initialized=!0}spawnVehicles(){for(const t of v_){const e=t.waypoints;for(let n=0;n<e.length-1;n++){const s=e[n],a=e[n+1],r=Math.sqrt((a.lon-s.lon)**2+(a.lat-s.lat)**2),o=Math.floor(r*500*t.vehicleDensity*t.lanes);for(let l=0;l<o&&!(this.vehicles.length>=no);l++){const c=Ce(n*100+l,this.vehicles.length),h=s.lon+(a.lon-s.lon)*c,u=s.lat+(a.lat-s.lat)*c,p=(Math.floor(Ce(l*3,n*7)*t.lanes)-t.lanes/2)*3e-5,g=Math.atan2(a.lon-s.lon,a.lat-s.lat),_=Math.cos(g)*p,m=-Math.sin(g)*p,f=25+Ce(l*5,n*3)*15,S=Ce(l*9,n*11)<.15,E=S?[16777215,14540253,4473924,16763904,26316]:[13369344,17578,3355443,16777215,8947848,13421772,17408,2236962,11167232,6684672],R=E[Math.floor(Ce(l*13,n*17)*E.length)];this.vehicles.push({lon:h+_,lat:u+m,speed:S?f*.7:f,heading:g,segIdx:n,segT:c,highway:t,isTruck:S,color:R,width:S?2.5:1.8,height:S?4:1.5,length:S?12:4.5,direction:Ce(l*19,n*23)>.5?1:-1})}}}}spawnBoats(){for(const t of M_)for(let e=0;e<t.count&&!(this.boats.length>=io);e++){const n=Ce(e*7,this.boats.length*13)*Math.PI*2,s=Ce(e*11,this.boats.length*17)*.7,a=111320,r=111320*Math.cos(t.centerLat*Math.PI/180),o=Ce(e*23,this.boats.length*29)<.2,l=!o&&Ce(e*31,this.boats.length*37)<.3;this.boats.push({lon:t.centerLon+Math.cos(n)*s*t.radiusM/r,lat:t.centerLat+Math.sin(n)*s*t.radiusM/a,elevation:t.elevation,speed:o?3:l?2:5,heading:Ce(e*41,this.boats.length*43)*Math.PI*2,turnRate:(Ce(e*47,this.boats.length*53)-.5)*.3,isLarge:o,isSailboat:l,width:o?15:l?3:4,height:o?8:l?6:2,length:o?40:l?8:6,color:o?3359829:l?16777215:14540253,area:t})}}spawnAircraft(){for(const t of y_)for(let e=0;e<t.count&&!(this.aircraft.length>=so);e++){const n=Ce(e*7,this.aircraft.length*11),s=t.startLon+(t.endLon-t.startLon)*n,a=t.startLat+(t.endLat-t.startLat)*n,r=t.altitude<1e3,o=t.speed>250,l=t.altitude>7e3&&!r;this.aircraft.push({lon:s,lat:a,altitude:t.altitude+(Ce(e*13,this.aircraft.length*17)-.5)*500,speed:t.speed+(Ce(e*19,this.aircraft.length*23)-.5)*20,heading:Math.atan2(t.endLon-t.startLon,t.endLat-t.startLat),corridor:t,t:n,direction:1,isHelicopter:r,isJet:o,hasContrail:l,width:r?8:o?12:35,height:r?4:o?5:12,length:r?12:o?15:60,color:r?4473924:o?8947848:16448250,prevPositions:[]})}}spawnSkiers(){for(const t of S_)for(let e=0;e<t.count&&!(this.skiers.length>=eo);e++){const n=Ce(e*7,this.skiers.length*13),s=t.topLon+(t.botLon-t.topLon)*n,a=t.topLat+(t.botLat-t.topLat)*n,r=t.topAlt+(t.botAlt-t.topAlt)*n,o=111320*Math.cos(a*Math.PI/180),l=(Ce(e*17,this.skiers.length*23)-.5)*40,c=Math.atan2(t.botLon-t.topLon,t.botLat-t.topLat),h=[16711680,17663,43520,16737792,16776960,16711935,0,16777215],u=h[Math.floor(Ce(e*31,this.skiers.length*37)*h.length)],d=Ce(e*41,this.skiers.length*43)>.6;this.skiers.push({lon:s+Math.cos(c+Math.PI/2)*l/o,lat:a+Math.sin(c+Math.PI/2)*l/111320,alt:r,speed:d?4+Ce(e*47,this.skiers.length*53)*8:5+Ce(e*47,this.skiers.length*53)*10,slope:t,t:n,heading:c,color:u,isSnowboarder:d,direction:1})}}update(t,e){if(!this.initialized)return;this.time+=t;const n=e.lon,s=e.lat,r=e.alt*.3048,o=111320,l=111320*Math.cos(Se.degToRad(s)),c=new jt,h=new F,u=new qe,d=new F,p=new Ut,g=new Be,_=Math.max(3e3,r*5);let m=0;for(const x of this.vehicles){const M=x.highway.waypoints,A=M[x.segIdx],I=M[x.segIdx+1];if(!A||!I)continue;x.segT+=x.direction*x.speed*t/(111320*Math.sqrt((I.lon-A.lon)**2+(I.lat-A.lat)**2)),x.segT>1?(x.segT=0,x.segIdx=Math.min(x.segIdx+1,M.length-2),x.segIdx>=M.length-2&&(x.segIdx=0,x.direction=1)):x.segT<0&&(x.segT=1,x.segIdx=Math.max(x.segIdx-1,0),x.segIdx<=0&&(x.segIdx=M.length-2,x.direction=-1));const L=M[x.segIdx],B=M[x.segIdx+1];if(!L||!B)continue;x.lon=L.lon+(B.lon-L.lon)*x.segT,x.lat=L.lat+(B.lat-L.lat)*x.segT;const O=(x.lon-n)*l,G=(x.lat-s)*o;if(Math.sqrt(O*O+G*G)>_||m>=no)continue;const Z=-r;h.set(O,Z,-G),g.set(0,x.heading,0),u.setFromEuler(g),d.set(x.width,x.height,x.length),c.compose(h,u,d),this.vehicleInstances.setMatrixAt(m,c),p.setHex(x.color),this.vehicleInstances.setColorAt(m,p),m++}this.vehicleInstances.count=m,m>0&&(this.vehicleInstances.instanceMatrix.needsUpdate=!0,this.vehicleInstances.instanceColor&&(this.vehicleInstances.instanceColor.needsUpdate=!0));const f=Math.max(5e3,r*6);let S=0;for(const x of this.boats){x.heading+=x.turnRate*t;const M=111320*Math.cos(x.lat*Math.PI/180);x.lon+=Math.sin(x.heading)*x.speed*t/M,x.lat+=Math.cos(x.heading)*x.speed*t/o;const A=(x.lon-x.area.centerLon)*M,I=(x.lat-x.area.centerLat)*o;if(Math.sqrt(A*A+I*I)>x.area.radiusM*.8){const lt=Math.atan2(x.area.centerLon-x.lon,x.area.centerLat-x.lat);x.heading+=(lt-x.heading)*t*2}const B=(x.lon-n)*l,O=(x.lat-s)*o;if(Math.sqrt(B*B+O*O)>f||S>=io)continue;const z=x.elevation-r,Z=Math.sin(this.time*1.5+S*2.3)*.3;h.set(B,z+Z,-O),g.set(0,x.heading,Math.sin(this.time*2+S)*.05),u.setFromEuler(g),d.set(x.width,x.height,x.length),c.compose(h,u,d),this.boatInstances.setMatrixAt(S,c),p.setHex(x.color),this.boatInstances.setColorAt(S,p),S++}this.boatInstances.count=S,S>0&&(this.boatInstances.instanceMatrix.needsUpdate=!0,this.boatInstances.instanceColor&&(this.boatInstances.instanceColor.needsUpdate=!0));const w=Math.max(15e3,r*8);let y=0;for(const x of this.aircraft){const M=x.corridor;x.t+=x.direction*x.speed*t/(111320*Math.sqrt((M.endLon-M.startLon)**2+(M.endLat-M.startLat)**2)),x.t>1&&(x.t=1,x.direction=-1),x.t<0&&(x.t=0,x.direction=1),x.lon=M.startLon+(M.endLon-M.startLon)*x.t,x.lat=M.startLat+(M.endLat-M.startLat)*x.t;const A=(x.lon-n)*l,I=(x.lat-s)*o,L=x.altitude-r;if(Math.sqrt(A*A+I*I+L*L)>w||y>=so)continue;h.set(A,L,-I);const O=x.direction>0?x.heading:x.heading+Math.PI;g.set(0,O,0),u.setFromEuler(g),d.set(x.width,x.height,x.length),c.compose(h,u,d),this.aircraftInstances.setMatrixAt(y,c),p.setHex(x.color),this.aircraftInstances.setColorAt(y,p),y++}this.aircraftInstances.count=y,y>0&&(this.aircraftInstances.instanceMatrix.needsUpdate=!0,this.aircraftInstances.instanceColor&&(this.aircraftInstances.instanceColor.needsUpdate=!0));let E=0;for(const x of this.boats){if(!x.isSailboat||E>=ah)continue;const M=(x.lon-n)*l,A=(x.lat-s)*o;if(Math.sqrt(M*M+A*A)>f)continue;const L=x.elevation-r,B=Math.sin(this.time*1.5+E*2.3)*.3;h.set(M,L+B+x.height*.8,-A),g.set(0,x.heading+.3,Math.sin(this.time+E)*.1),u.setFromEuler(g),d.set(x.width*.6,x.height*1.5,x.width*.4),c.compose(h,u,d),this.sailInstances.setMatrixAt(E,c),p.setHex(16777215),this.sailInstances.setColorAt(E,p),E++}this.sailInstances.count=E,E>0&&(this.sailInstances.instanceMatrix.needsUpdate=!0,this.sailInstances.instanceColor&&(this.sailInstances.instanceColor.needsUpdate=!0));const R=Math.max(2e3,r*3);let T=0;for(const x of this.skiers){const M=x.slope,A=Math.sqrt(((M.botLon-M.topLon)*l)**2+((M.botLat-M.topLat)*o)**2);x.t+=x.direction*x.speed*t/A,x.t>1&&(x.t=1,x.direction=-1,x.speed*=.3),x.t<0&&(x.t=0,x.direction=1,x.speed=x.isSnowboarder?4+Math.random()*8:5+Math.random()*10),x.lon=M.topLon+(M.botLon-M.topLon)*x.t,x.lat=M.topLat+(M.botLat-M.topLat)*x.t,x.alt=M.topAlt+(M.botAlt-M.topAlt)*x.t;const I=(x.lon-n)*l,L=(x.lat-s)*o;if(Math.sqrt(I*I+L*L)>R||T>=eo)continue;const O=x.alt-r;h.set(I,O,-L),g.set(0,x.heading,0),u.setFromEuler(g),d.set(.5,1.8,.5),c.compose(h,u,d),this.skierInstances.setMatrixAt(T,c),p.setHex(x.color),this.skierInstances.setColorAt(T,p),T++}this.skierInstances.count=T,T>0&&(this.skierInstances.instanceMatrix.needsUpdate=!0,this.skierInstances.instanceColor&&(this.skierInstances.instanceColor.needsUpdate=!0));let D=0;for(const x of this.aircraft){if(!x.hasContrail||D>=rh)continue;const M=(x.lon-n)*l,A=(x.lat-s)*o,I=x.altitude-r;if(Math.sqrt(M*M+A*A)>w)continue;const B=x.direction>0?x.heading:x.heading+Math.PI,O=300+x.speed*2,G=M-Math.sin(B)*O*.5,z=-A+Math.cos(B)*O*.5;h.set(G,I,z),g.set(0,B,0),u.setFromEuler(g),d.set(3,2,O),c.compose(h,u,d),this.contrailInstances.setMatrixAt(D,c),p.setHex(16777215),this.contrailInstances.setColorAt(D,p),D++}this.contrailInstances.count=D,D>0&&(this.contrailInstances.instanceMatrix.needsUpdate=!0,this.contrailInstances.instanceColor&&(this.contrailInstances.instanceColor.needsUpdate=!0))}dispose(){[this.vehicleInstances,this.boatInstances,this.aircraftInstances,this.skierInstances,this.sailInstances,this.contrailInstances].forEach(t=>{t&&(this.scene.remove(t),t.dispose())})}}const ye={lon:-116.9155,lat:34.2433,elevation:2070,treeHeight:30,heading:210};class b_{constructor(t){this.scene=t,this.nestGroup=new De,this.jackieGroup=null,this.chicksGroup=null,this.time=0,this.buildNest(),this.scene.add(this.nestGroup),this.nestGroup.visible=!1,this.nestGroup.traverse(e=>{e.layers.set(0)})}buildNest(){const t=new Gt({color:6044190,flatShading:!0}),e=new Gt({color:4861461,flatShading:!0}),n=new tn(.3,.6,ye.treeHeight,8),s=new nt(n,t);s.position.y=ye.treeHeight/2,this.nestGroup.add(s);for(let st=0;st<6;st++){const P=new er(.35+(1-st/6)*.15,.04,4,8),bt=new nt(P,e);bt.position.y=3+st*4.5,bt.rotation.x=Math.PI/2,this.nestGroup.add(bt)}const a=new Gt({color:7029286,flatShading:!0}),r=[{y:22,angle:0,length:6,tilt:.6},{y:24,angle:Math.PI*.6,length:7,tilt:.5},{y:26,angle:Math.PI*1.2,length:5.5,tilt:.55},{y:28,angle:Math.PI*.3,length:5,tilt:.4},{y:28,angle:Math.PI*1.5,length:4.5,tilt:.45},{y:29,angle:Math.PI*.8,length:3,tilt:.2},{y:29,angle:Math.PI*1.8,length:3.5,tilt:.15}];for(const st of r){const P=new tn(.05,.15,st.length,5);P.translate(0,st.length/2,0);const bt=new nt(P,a);bt.position.y=st.y,bt.rotation.z=st.tilt,bt.rotation.y=st.angle,this.nestGroup.add(bt)}const o=new Gt({color:2972199,flatShading:!0}),l=new Gt({color:1789211,flatShading:!0}),c=[{x:0,y:32,z:0,r:3.5},{x:2,y:30,z:1,r:2.5},{x:-2.5,y:29,z:-1,r:2.8},{x:1,y:28,z:-2,r:2.2},{x:-1,y:31,z:2,r:2.5},{x:3,y:27,z:0,r:2},{x:-3,y:26,z:1,r:2.3},{x:0,y:34,z:0,r:2}];for(const st of c){const P=new ie(st.r,5,4);P.scale(1,.6,1);const bt=st.y>30?o:l,xt=new nt(P,bt);xt.position.set(st.x,st.y,st.z),this.nestGroup.add(xt)}const h=new Gt({color:7035450,flatShading:!0}),u=new Gt({color:4864544,flatShading:!0}),d=new tn(1,1.2,.6,12),p=new nt(d,h);p.position.set(.5,ye.treeHeight,.3),this.nestGroup.add(p);const g=new er(1,.15,6,16),_=new nt(g,u);_.position.set(.5,ye.treeHeight+.3,.3),_.rotation.x=Math.PI/2,this.nestGroup.add(_);const m=new Gt({color:8022602,flatShading:!0});for(let st=0;st<20;st++){const P=st/20*Math.PI*2,bt=.9+Math.random()*.4,xt=new tn(.02,.02,.3+Math.random()*.5,3),Dt=new nt(xt,m);Dt.position.set(.5+Math.cos(P)*bt,ye.treeHeight+.2,.3+Math.sin(P)*bt),Dt.rotation.z=(Math.random()-.5)*.8,Dt.rotation.x=(Math.random()-.5)*.8,this.nestGroup.add(Dt)}const f=new Gt({color:9075290,flatShading:!0}),S=new tn(.7,.8,.15,10),w=new nt(S,f);w.position.set(.5,ye.treeHeight+.1,.3),this.nestGroup.add(w),this.jackieGroup=new De,this.jackieGroup.position.set(.5,ye.treeHeight+.4,.3);const y=new Gt({color:2759178,flatShading:!0}),E=new ie(.35,6,5);E.scale(1,.7,1.3);const R=new nt(E,y);R.position.y=.2,this.jackieGroup.add(R);const T=new Gt({color:16448250,flatShading:!0}),D=new ie(.15,6,5),x=new nt(D,T);x.position.set(0,.45,.25),this.jackieGroup.add(x);const M=new Gt({color:16763904,flatShading:!0}),A=new $e(.04,.12,4),I=new nt(A,M);I.position.set(0,.42,.38),I.rotation.x=Math.PI/2,this.jackieGroup.add(I);const L=new Ue({color:1118481}),B=new ie(.02,4,4),O=new nt(B,L);O.position.set(-.06,.47,.33),this.jackieGroup.add(O);const G=new nt(B,L);G.position.set(.06,.47,.33),this.jackieGroup.add(G);const z=new Gt({color:15658734,flatShading:!0}),Z=new fe(.15,.04,.3),lt=new nt(Z,z);lt.position.set(0,.15,-.35),this.jackieGroup.add(lt);const et=new Gt({color:1706496,flatShading:!0}),rt=new fe(.05,.2,.5),Ht=new nt(rt,et);Ht.position.set(-.25,.25,-.05),Ht.rotation.z=.2,this.jackieGroup.add(Ht);const kt=new nt(rt,et);kt.position.set(.25,.25,-.05),kt.rotation.z=-.2,this.jackieGroup.add(kt),this.nestGroup.add(this.jackieGroup),this.chicksGroup=new De,this.chicksGroup.position.set(.5,ye.treeHeight+.3,.3);const ae=new Gt({color:16117984,flatShading:!0}),ee=new ie(.06,6,5);ee.scale(1,.7,1.2);const q=new nt(ee,ae);q.position.set(-.15,.05,.1),this.chicksGroup.add(q);const tt=new nt(ee,ae);tt.position.set(.1,.05,-.05),this.chicksGroup.add(tt);const yt=new Gt({color:13421772,flatShading:!0}),Nt=new ie(.08,5,4),St=new nt(Nt,yt);St.position.set(.2,.1,.15),this.chicksGroup.add(St);const Jt=new ie(.05,5,4),re=new nt(Jt,yt);re.position.set(.2,.2,.2),this.chicksGroup.add(re);const Wt=new nt(B,L);Wt.position.set(.17,.22,.24),this.chicksGroup.add(Wt);const $=new nt(B,L);$.position.set(.23,.22,.24),this.chicksGroup.add($);const it=new $e(.015,.04,3),J=new nt(it,new Gt({color:3355443}));J.position.set(.2,.21,.26),J.rotation.x=Math.PI/2,this.chicksGroup.add(J),this.nestGroup.add(this.chicksGroup)}update(t,e){this.time+=t;const n=e.lon,s=e.lat,r=e.alt*.3048,o=111320,l=111320*Math.cos(Se.degToRad(s)),c=(ye.lon-n)*l,h=(ye.lat-s)*o,u=ye.elevation-r,d=Math.sqrt(c*c+h*h);this.nestGroup.visible=d<2e3,this.nestGroup.visible&&(this.nestGroup.position.set(c,u,-h),this.jackieGroup&&(this.jackieGroup.rotation.y=Math.sin(this.time*.3)*.15,this.jackieGroup.position.y=ye.treeHeight+.4+Math.sin(this.time*.8)*.01),this.chicksGroup&&this.chicksGroup.children.forEach((p,g)=>{g>=2&&(p.position.y+=Math.sin(this.time*2+g)*.001)}))}static getSpawnPosition(){return{lon:ye.lon,lat:ye.lat,alt:(ye.elevation+ye.treeHeight+50)/.3048,heading:ye.heading}}dispose(){this.scene.remove(this.nestGroup),this.nestGroup.traverse(t=>{t.geometry&&t.geometry.dispose(),t.material&&t.material.dispose()})}}const Hs={NIGHT:{start:0,end:5,name:"Night",fogMult:1.5,lightIntensity:.1},DAWN:{start:5,end:7,name:"Dawn",fogMult:1.2,lightIntensity:.4},MORNING:{start:7,end:10,name:"Morning",fogMult:.8,lightIntensity:.8},MIDDAY:{start:10,end:14,name:"Midday",fogMult:.5,lightIntensity:1},AFTERNOON:{start:14,end:17,name:"Afternoon",fogMult:.6,lightIntensity:.9},DUSK:{start:17,end:19,name:"Dusk",fogMult:1,lightIntensity:.4},EVENING:{start:19,end:21,name:"Evening",fogMult:1.3,lightIntensity:.2},LATE_NIGHT:{start:21,end:24,name:"Late Night",fogMult:1.5,lightIntensity:.1}},fs={CLEAR:{name:"Clear",fogDensity:5e-5,visibility:1,windSpeed:5,thermalMult:1},PARTLY_CLOUDY:{name:"Partly Cloudy",fogDensity:1e-4,visibility:.9,windSpeed:10,thermalMult:.8},OVERCAST:{name:"Overcast",fogDensity:3e-4,visibility:.6,windSpeed:15,thermalMult:.3},FOG:{name:"Mountain Fog",fogDensity:.001,visibility:.3,windSpeed:3,thermalMult:.1},HAZE:{name:"Desert Haze",fogDensity:4e-4,visibility:.5,windSpeed:8,thermalMult:.6},STORM:{name:"Thunderstorm",fogDensity:8e-4,visibility:.3,windSpeed:30,thermalMult:2},SNOW:{name:"Snow",fogDensity:6e-4,visibility:.4,windSpeed:20,thermalMult:0},SANTA_ANA:{name:"Santa Ana Winds",fogDensity:2e-4,visibility:.7,windSpeed:50,thermalMult:.5}};function oh(i,t){return i>=11||i<=1?t>=6&&t<=10?Math.random()<.3?"FOG":"PARTLY_CLOUDY":Math.random()<.15?"SNOW":Math.random()<.25?"OVERCAST":Math.random()<.5?"CLEAR":"PARTLY_CLOUDY":i>=2&&i<=4?t>=14&&Math.random()<.2?"STORM":Math.random()<.7?"CLEAR":"PARTLY_CLOUDY":i>=5&&i<=7?t>=14&&t<=18&&Math.random()<.3?"STORM":t>=11&&t<=15&&Math.random()<.3?"HAZE":"CLEAR":Math.random()<.15?"SANTA_ANA":Math.random()<.8?"CLEAR":"PARTLY_CLOUDY"}class E_{constructor(t){this.viewer=t,this.currentDaypart="MIDDAY",this.currentWeather="CLEAR",this.gameHour=12,this.timeScale=1,this.useRealTime=!0,this.weatherChangeTimer=0,this.weatherChangeCooldown=300,this.windDirection=0,this.windSpeed=5,this.targetFogDensity=1e-4,this.currentFogDensity=1e-4,this.initialized=!1,this.init()}init(){this.viewer&&(this.viewer.scene.globe.enableLighting=!0,this.viewer.scene.skyAtmosphere&&(this.viewer.scene.skyAtmosphere.show=!0));const t=new Date;this.updateTimeOfDay(t),this.currentWeather=oh(t.getMonth(),t.getHours()),this.applyWeather(),this.initialized=!0}updateTimeOfDay(t){const e=t.getUTCHours(),n=-8;this.gameHour=(e+n+24)%24+t.getUTCMinutes()/60;for(const[s,a]of Object.entries(Hs))if(this.gameHour>=a.start&&this.gameHour<a.end){this.currentDaypart=s;break}if(this.viewer&&this.viewer.clock){const s=Cesium.JulianDate.fromDate(t);this.viewer.clock.currentTime=s}}applyWeather(){const t=fs[this.currentWeather]||fs.CLEAR,e=Hs[this.currentDaypart]||Hs.MIDDAY;this.viewer&&(this.targetFogDensity=t.fogDensity*e.fogMult,this.windSpeed=t.windSpeed+(Math.random()-.5)*5,this.windDirection=(this.windDirection+(Math.random()-.5)*10)%360)}update(t){if(!(!this.initialized||!this.viewer)&&(this.useRealTime?this.updateTimeOfDay(new Date):this.gameHour=(this.gameHour+t*this.timeScale/3600)%24,this.currentFogDensity+=(this.targetFogDensity-this.currentFogDensity)*t*.5,this.viewer.scene.fog&&(this.viewer.scene.fog.density=this.currentFogDensity),this.weatherChangeTimer+=t,this.weatherChangeTimer>this.weatherChangeCooldown)){this.weatherChangeTimer=0;const n=oh(new Date().getMonth(),Math.floor(this.gameHour));n!==this.currentWeather&&(this.currentWeather=n,this.applyWeather())}}getConditions(){const t=Hs[this.currentDaypart]||Hs.MIDDAY,e=fs[this.currentWeather]||fs.CLEAR,n=Math.floor(this.gameHour),s=Math.floor((this.gameHour-n)*60);return{daypartName:t.name,weatherName:e.name,localTime:`${n.toString().padStart(2,"0")}:${s.toString().padStart(2,"0")} PST`,windSpeed:Math.round(this.windSpeed),windDirection:Math.round(this.windDirection),visibility:e.visibility,thermalMultiplier:e.thermalMult,lightIntensity:t.lightIntensity}}getThermalMultiplier(){return(fs[this.currentWeather]||fs.CLEAR).thermalMult}getWind(){const t=this.windDirection*Math.PI/180;return{x:Math.sin(t)*this.windSpeed,z:Math.cos(t)*this.windSpeed,speed:this.windSpeed,direction:this.windDirection}}}const Gn={lon:-116.9114,lat:34.2439},T_=500,ru=T_*1609.34,ou=ru/1e3,C_=ou/111.32,A_=ou/(111.32*Math.cos(Gn.lat*Math.PI/180));function R_(i,t){const e=(t-Gn.lat)*Math.PI/180,n=(i-Gn.lon)*Math.PI/180,s=Math.sin(e/2)*Math.sin(e/2)+Math.cos(Gn.lat*Math.PI/180)*Math.cos(t*Math.PI/180)*Math.sin(n/2)*Math.sin(n/2);return 6371e3*(2*Math.atan2(Math.sqrt(s),Math.sqrt(1-s)))}function P_(i,t){return ru-R_(i,t)}function I_(i,t){const e=(Gn.lon-i)*Math.PI/180,n=t*Math.PI/180,s=Gn.lat*Math.PI/180,a=Math.sin(e)*Math.cos(s),r=Math.cos(n)*Math.sin(s)-Math.sin(n)*Math.cos(s)*Math.cos(e);return(Math.atan2(a,r)*180/Math.PI+360)%360}function L_(i){if(!i)return null;const t=[],e=128;for(let a=0;a<=e;a++){const r=a/e*Math.PI*2,o=Gn.lat+C_*Math.sin(r),l=Gn.lon+A_*Math.cos(r);t.push(l,o)}const n=i.entities.add({polyline:{positions:Cesium.Cartesian3.fromDegreesArray(t),width:2,material:new Cesium.PolylineDashMaterialProperty({color:Cesium.Color.fromCssColorString("rgba(255, 200, 50, 0.5)"),dashLength:16}),clampToGround:!0}}),s=i.entities.add({position:Cesium.Cartesian3.fromDegrees(Gn.lon,Gn.lat),point:{pixelSize:8,color:Cesium.Color.fromCssColorString("rgba(255, 200, 50, 0.7)"),outlineColor:Cesium.Color.WHITE,outlineWidth:1,disableDepthTestDistance:Number.POSITIVE_INFINITY},label:{text:"THE NEST",font:"12pt sans-serif",style:Cesium.LabelStyle.FILL_AND_OUTLINE,outlineWidth:2,verticalOrigin:Cesium.VerticalOrigin.BOTTOM,pixelOffset:new Cesium.Cartesian2(0,-12),disableDepthTestDistance:Number.POSITIVE_INFINITY,fillColor:Cesium.Color.fromCssColorString("rgba(255, 200, 50, 0.9)")}});return{boundaryEntity:n,centerEntity:s}}const se={MENU:"MENU",PICK_SPAWN:"PICK_SPAWN",TRANSITIONING:"TRANSITIONING",FLYING:"FLYING",PAUSED:"PAUSED",CRASHED:"CRASHED"};let oe=se.MENU,le={graphicsQuality:"medium",antialiasing:!0,fogEffects:!0,mouseSensitivity:.2,showHud:!0,showHorizonLines:!1,soundEnabled:!0,minimapRange:10};function D_(){const i=localStorage.getItem("flightSimSettings");if(i)try{const t=JSON.parse(i);le={...le,...t}}catch(t){console.error("Failed to load settings",t)}lu(),ll()}function F_(){localStorage.setItem("flightSimSettings",JSON.stringify(le))}function ll(){document.getElementById("graphicsQuality").value=le.graphicsQuality,document.getElementById("antialiasing").checked=le.antialiasing,document.getElementById("fogEffects").checked=le.fogEffects,document.getElementById("sensitivitySlider").value=le.mouseSensitivity,document.getElementById("sensitivityValue").textContent=le.mouseSensitivity,document.getElementById("showHud").checked=le.showHud,document.getElementById("showHorizonLines").checked=le.showHorizonLines,document.getElementById("soundEnabled").checked=le.soundEnabled,document.getElementById("minimapRange").value=le.minimapRange.toString()}function lu(){Fe&&Fe.setSensitivity(le.mouseSensitivity),Te&&(Te.setMinimapRange(le.minimapRange),Te.setShowHorizonLines(le.showHorizonLines)),Tt&&Tt.listener&&Tt.listener.setMasterVolume(le.soundEnabled?1:0);const i=we();i&&(le.graphicsQuality==="low"?(i.resolutionScale=.5,i.scene.globe.maximumScreenSpaceError=4):le.graphicsQuality==="medium"?(i.resolutionScale=.75,i.scene.globe.maximumScreenSpaceError=2):(i.resolutionScale=1,i.scene.globe.maximumScreenSpaceError=1.3),i.scene.postProcessStages.fxaa.enabled=le.antialiasing,i.scene.fog.enabled=le.fogEffects,i.scene.atmosphere.show=le.fogEffects),[document.getElementById("hud-top-left"),document.getElementById("hud-top-right"),document.getElementById("hud-speed-box"),document.getElementById("hud-alt-box"),document.getElementById("coords"),document.getElementById("minimap-container")].forEach(e=>{e&&(e.style.display=le.showHud?"block":"none")})}let K={lon:ye.lon,lat:ye.lat,alt:(ye.elevation+ye.treeHeight+5)/.3048,heading:ye.heading,pitch:0,roll:0,speed:0,throttle:0,score:0,weaponSystem:null},nr=null,cl=0,qa={lon:0,lat:0};const N_=1e4,U_=1e3;let ir=0;const O_=1800;let ka=!1,cu=0,Qe,un,Fn,gn,sr,hl,ar=new eu,Fe=new $x,Te=new jx,dn,_n,be=new l_,rr=new c_,aa,ul,dl,fl,pl,ml,Ys,B_=null,ao=!1,lh=0,ro=0,oo=0;const Mi=new F(0,-.8,-2.75);let _i=new F().copy(Mi),kn=new Be(0,0,0),ps=0,Za=0,za=1,gl=!1,hu=null;const uu=document.getElementById("mainMenu"),bs=document.getElementById("pauseMenu"),du=document.getElementById("crashMenu"),hi=document.getElementById("uiContainer"),Vi=document.getElementById("threeContainer"),Ul=document.getElementById("spawnInstruction"),oa=document.getElementById("confirmSpawnBtn");let Ve=null;const Gs=document.getElementById("startBtn"),Vn=document.getElementById("loadingIndicator"),or=document.getElementById("loadingText"),Ae={audio:!1,model:!1,cesium:!1,globe:!1,failed:!1};function oi(){if(!Vn||!or||!Gs)return;if(oe===se.FLYING||oe===se.TRANSITIONING){Vn.classList.add("hidden");return}let i="";Ae.audio&&Ae.model&&Ae.cesium&&Ae.globe||(Ae.audio?Ae.model?Ae.cesium?Ae.globe||(i="Loading Globe Surface..."):i="Loading Satellite Imagery...":i="Loading Eagle Model...":i="Loading Audio..."),i?(or.textContent=i,Gs.disabled=!0,Gs.style.pointerEvents="none",Vn.classList.remove("hidden")):(Vn.classList.add("hidden"),Gs.disabled=!1,Gs.style.pointerEvents="auto")}async function k_(){Tt.init(un);const i=(t,e,n,s)=>Tt.loadSound(t,e,n,s).catch(a=>(console.warn(`Failed to load sound: ${t}`,a),null));await Promise.all([i("boost","./assets/sounds/boost.mp3",!1,.35),i("throttle","./assets/sounds/throttle.mp3",!1,.4),i("explode","./assets/sounds/explode.mp3",!1,.75),i("explosion-1","./assets/sounds/explosion-1.mp3",!1,.8),i("explosion-2","./assets/sounds/explosion-2.mp3",!1,.8),i("explosion-3","./assets/sounds/explosion-3.mp3",!1,.8),i("ambient-crash","./assets/sounds/ambient.mp3",!0,.5),i("weapon-warning","./assets/sounds/weapon-warning-1.mp3",!1,1),i("jet-engine","./assets/sounds/jet-engine.mp3",!0,.5),i("spawn","./assets/sounds/spawn.mp3",!1,.5),i("roll","./assets/sounds/roll.mp3",!0,.75),i("pitch","./assets/sounds/pitch.mp3",!0,.75),i("button-click","./assets/sounds/button-click.mp3",!1,1),i("weapon-switch","./assets/sounds/weapon-switch.mp3",!1,.75),i("button-hover","./assets/sounds/button-hover.mp3",!1,.25),i("zoom-in","./assets/sounds/zoom-in.mp3",!1,.5),i("missile-fire","./assets/sounds/missile-firing-1.mp3",!1,.75),i("m61-firing","./assets/sounds/m61-firing.mp3",!0,.75),i("rwr-tws","./assets/sounds/rwr-tws.mp3",!0,.2),i("rwr-lock","./assets/sounds/rwr-lock.mp3",!1,.2),i("wind","./assets/sounds/wind.mp3",!0,.25),i("terrain-pull-up","./assets/sounds/terrain-pull-up.mp3",!1,.9),i("warning","./assets/sounds/warning.mp3",!1,.6),i("glitch-1","./assets/sounds/glitch-transition-1.mp3",!1,.25),i("glitch-2","./assets/sounds/glitch-transition-2.mp3",!1,.25),i("glitch-3","./assets/sounds/glitch-transition-3.mp3",!1,.25),i("glitch-4","./assets/sounds/glitch-transition-4.mp3",!1,.25)]),Ae.audio=!0,oi(),z_()}function Ol(i=.5){Tt.stopAll(i)}function Bl(){cu=Date.now(),Tt.pauseAll()}function fu(){const i=Date.now()-cu;ir>0&&(ir+=i),Tt.resumeAll()}function z_(){document.addEventListener("mouseover",i=>{const t=i.target.closest("button, .menu-btn, .clickable-ui");t&&!t._hovered&&(Tt.play("button-hover"),t._hovered=!0,t.addEventListener("mouseleave",()=>{t._hovered=!1},{once:!0}))},!0),document.addEventListener("click",i=>{i.target.closest("button, .menu-btn, .clickable-ui, #search-toggle-btn")&&Tt.play("button-click")},!0)}function H_(){hl=new $h,Qe=new Wd,un=new Mn(75,window.innerWidth/window.innerHeight,.1,1e5),Fn=new Gx({alpha:!0,antialias:!0}),Fn.setSize(window.innerWidth,window.innerHeight),Fn.setPixelRatio(window.devicePixelRatio),Fn.setClearColor(0,0),Vi.appendChild(Fn.domElement),Vi.classList.add("hidden");const i=new Gf(16777215,1);Qe.add(i);const t=new Hf(16777215,1);t.position.set(5,10,5),Qe.add(t),i.layers.enable(1),t.layers.enable(1);try{ii.init(Qe,we())}catch{}try{aa=new d_(we(),Qe)}catch(e){console.error("Failed to init tree system",e)}try{ul=new au(we(),Qe)}catch(e){console.error("Failed to init water system",e)}try{dl=new g_(we(),Qe)}catch(e){console.error("Failed to init landmark system",e)}try{fl=new __(we(),Qe)}catch(e){console.error("Failed to init city system",e)}try{pl=new w_(we(),Qe)}catch(e){console.error("Failed to init traffic system",e)}try{ml=new b_(Qe)}catch(e){console.error("Failed to init nest system",e)}try{Ys=new E_(we())}catch(e){console.error("Failed to init day/night weather system",e)}k_().catch(e=>{console.error("Failed to init sounds",e)}).finally(()=>{Ae.audio=!0,oi()});try{sr=Kx(),gn=new De,gn.add(sr),Qe.add(gn),gn.layers.set(1),gn.traverse(e=>{e.layers.set(1)}),gn.position.copy(Mi),gn.scale.set(1.5,1.5,1.5),_n=new i_(we(),Qe,gn),_n.onKill=e=>{const n=e.score||500;K.score+=n;try{Tt.play("glitch-random")}catch{}Te&&Te.showKillNotification(e.name,n)},gn.traverse(e=>{e.layers.set(1)})}catch(e){console.error("Failed to create eagle model or weapon system",e)}Ae.model=!0,oi()}function G_(i){if(oe!==se.FLYING)return;const t=Fe.update(),e=ar.update(t,i),n=K.speed;K.speed=e.speed,K.pitch=e.pitch,K.roll=e.roll,K.heading=e.heading,K.throttle=t.throttle,K.yaw=t.yaw,K.isBoosting=e.isBoosting,K.weaponSystem=_n,K.npcs=dn?dn.npcs:[],K.isGliding=e.isGliding,K.isFlapping=e.isFlapping,K.flapStrength=e.flapStrength,K.wingSpread=e.wingSpread,K.inThermal=e.inThermal,K.thermalStrength=e.thermalStrength,K.verticalSpeed=e.verticalSpeed,K.liftForce=e.liftForce,K.isTurbo=e.isTurbo,K.turboWindup=e.turboWindup,K.weatherConditions=Ys?Ys.getConditions():null,_n&&(t.weaponIndex!==-1&&_n.selectWeapon(t.weaponIndex),t.toggleWeapon&&_n.toggleWeapon(),t.fire&&_n.fire(K),t.fireFlare&&_n.fireFlare(K),_n.update(i,K,t));const s=Si(K.lon,K.lat,K.alt,K.heading,K.pitch,K.speed*i);K.lon=s.lon,K.lat=s.lat,K.alt=s.alt;const a=Date.now(),r=iu(K.lon,K.lat,qa.lon,qa.lat);if((a-cl>N_||r>U_)&&(cl=a,qa={lon:K.lon,lat:K.lat},nu(K.lon,K.lat).then(_=>{_&&_!==nr&&(nr=_,Te.showRegion(_))})),W_(),V_(),rr)try{rr.update(i,K)}catch{}Math.abs(t.roll)>.5||Math.abs(t.yaw)>.5?Tt.isPlaying("roll")||Tt.play("roll",.1):Tt.isPlaying("roll")&&Tt.stop("roll",.1);const o=new Cesium.HeadingPitchRoll(Cesium.Math.toRadians(K.heading),Cesium.Math.toRadians(K.pitch),Cesium.Math.toRadians(K.roll)),l=Cesium.Quaternion.fromHeadingPitchRoll(o),c=new Cesium.HeadingPitchRoll(Cesium.Math.toRadians(t.cameraYaw),Cesium.Math.toRadians(-t.cameraPitch),0),h=Cesium.Quaternion.fromHeadingPitchRoll(c),u=Cesium.Quaternion.multiply(l,h,new Cesium.Quaternion),d=Cesium.HeadingPitchRoll.fromQuaternion(u);if(Wx(K.lon,K.lat,K.alt,Cesium.Math.toDegrees(d.heading),Cesium.Math.toDegrees(d.pitch),Cesium.Math.toDegrees(d.roll)),dn&&dn.update(i,K),aa)try{aa.update(i,K)}catch{}if(ul)try{ul.update(i,K)}catch{}if(dl)try{dl.update(i,K)}catch{}if(fl)try{fl.update(i,K)}catch{}if(pl)try{pl.update(i,K)}catch{}if(ml)try{ml.update(i,K)}catch{}if(Ys)try{Ys.update(i)}catch{}const p=P_(K.lon,K.lat);if(p/1609.34<20){if(p<=0){const _=I_(K.lon,K.lat);K.heading=Se.lerp(K.heading,_,i*2),ar.heading=K.heading}ao||(ao=!0,Te.showRegion("TERRITORY BOUNDARY - TURN BACK"))}else ao=!1;if(Te.update(K,oe===se.FLYING?dn?dn.npcs:[]:[]),gn){const _=(K.speed-n)/i,m=t.isDragging?0:Math.max(-.5,Math.min(1.5,_*.001));let f=Mi.z-m,S=0;if(e.isBoosting){gl||(za=Math.random()>.5?1:-1);const lt=e.boostDuration,et=Math.max(0,Math.min(1,1-e.boostTimeRemaining/lt));if(Math.PI*2*e.boostRotations*za,et<.2){const rt=et/.2;S=-(rt*rt)*1.5,ps=0}else if(et<.8){const rt=(et-.2)/.6;S=-1.5,ps=(rt<.5?4*rt*rt*rt:1-Math.pow(-2*rt+2,3)/2)*(Math.PI*2*e.boostRotations)*za}else{const rt=(et-.8)/.2;S=-1.5+rt*rt*(3-2*rt)*.7,ps=Math.PI*2*e.boostRotations*za}}else ps=0,S=0;gl=e.isBoosting;const w=e.isBoosting?10*i:2*i;Za+=(S-Za)*w,f+=Za;const y=performance.now()*.001,E=Math.sin(y*.8)*.035,R=Math.cos(y*.6)*.025,T=Math.sin(y*.5)*.015,D=Math.cos(y*.4)*.015,x=Math.sin(y*.7)*.025,M=t.isDragging?Mi.x:Mi.x-t.roll*.6-t.yaw*.12+E,A=t.isDragging?Mi.y:Mi.y-t.pitch*.1+R;let I=t.isDragging?0:Se.degToRad(-t.roll*15)+x;const L=t.isDragging?0:Se.degToRad(t.pitch*10)+T,B=t.isDragging?0:Se.degToRad(-t.yaw*4)+D,O=e.isBoosting?3*i:5*i;_i.x+=(M-_i.x)*O,_i.y+=(A-_i.y)*O,_i.z+=(f-_i.z)*O,kn.z+=(I-kn.z)*O,kn.x+=(L-kn.x)*O,kn.y+=(B-kn.y)*O;const G=new qe().setFromEuler(new Be(Se.degToRad(-t.cameraPitch),Se.degToRad(-t.cameraYaw),0,"YXZ"));gn.position.copy(_i);const z=new qe().setFromEuler(new Be(kn.x,kn.y,kn.z+ps)),Z=G.clone().invert().multiply(z);gn.quaternion.copy(Z)}}function V_(){if(oe!==se.FLYING){Te.setPullUpWarning(!1);return}const i=we();if(!i)return;const t=Cesium.Cartographic.fromDegrees(K.lon,K.lat),e=i.scene.globe.getHeight(t);if(e===void 0)return;const n=K.alt-e,s=Cesium.Math.toRadians(K.pitch),a=K.speed*Math.sin(s);let r=!1;if(K.pitch<-1&&n<450&&(n<150&&(r=!0),a<-20&&(r=!0)),Te.setPullUpWarning(r),r){const o=Date.now();(!ka||o-ir>O_&&!Tt.isPlaying("terrain-pull-up"))&&(Tt.play("terrain-pull-up"),ir=o),ka=!0}else ka&&(Tt.stop("terrain-pull-up",.1),ka=!1)}let ch=0,pu=0;function W_(){if(oe!==se.FLYING)return;const i=Date.now();if(i-ch<100||(ch=i,i-pu<3e3))return;const t=we();if(!t)return;const e=Cesium.Cartographic.fromDegrees(K.lon,K.lat),n=t.scene.globe.getHeight(e);if(n!==void 0&&K.alt<=n+5){oe=se.CRASHED,be&&be.stop(),hi.classList.add("hidden");const s=document.getElementById("weapons-hud");s&&s.classList.add("hidden"),Vi.classList.add("hidden"),du.classList.remove("hidden"),Fe.isMobile&&Fe.setMobileVisible(!1),Te.update(K,[]),Ol(.1),setTimeout(()=>{Tt.play("explode"),Tt.play("ambient-crash")},50)}}function mu(){requestAnimationFrame(mu);const i=hl?hl.getDelta():.016,t=performance.now();if(ro++,t-oo>=1e3){lh=ro*1e3/(t-oo),ro=0,oo=t,Te.updateFPS(lh);const e=document.getElementById("menu-time");e&&(e.textContent=new Date().toISOString().split(".")[0]+"Z")}if(oe===se.FLYING||oe===se.PAUSED||oe===se.TRANSITIONING){const e=we();if(Fn.autoClear=!1,Fn.clear(),e&&e.camera&&e.camera.frustum.fovy){const n=Cesium.Math.toDegrees(e.camera.frustum.fovy);un.fov=n,un.aspect=window.innerWidth/window.innerHeight,un.updateProjectionMatrix()}un.layers.set(0),oe===se.FLYING?G_(i):oe===se.PAUSED&&Te.updatePauseMenu(K,nr,dn?dn.npcs:[]),sr&&Jx(sr,i,K);try{oe===se.FLYING&&ii.update(i)}catch{}Fn.render(Qe,un),Fn.clearDepth(),un.fov=75,un.updateProjectionMatrix(),un.layers.set(1),Fn.render(Qe,un)}else Vi.classList.add("hidden")}function vn(){document.querySelectorAll(".modal").forEach(i=>i.classList.add("hidden"))}function X_(){document.getElementById("helpBtn").onclick=()=>{vn(),document.getElementById("helpModal").classList.remove("hidden")},document.getElementById("optionsBtn").onclick=()=>{vn(),ll(),document.getElementById("optionsModal").classList.remove("hidden")},document.getElementById("pauseOptionsBtn").onclick=()=>{vn(),ll(),document.getElementById("optionsModal").classList.remove("hidden")},document.getElementById("pauseHelpBtn").onclick=()=>{vn(),document.getElementById("helpModal").classList.remove("hidden")},document.getElementById("creditsBtn").onclick=()=>{vn(),document.getElementById("creditsModal").classList.remove("hidden")},document.getElementById("aboutBtn").onclick=()=>{vn(),document.getElementById("aboutBtnModal").classList.remove("hidden")},document.getElementById("sensitivitySlider").oninput=i=>{document.getElementById("sensitivityValue").textContent=i.target.value},document.getElementById("saveOptionsBtn").onclick=()=>{le.graphicsQuality=document.getElementById("graphicsQuality").value,le.antialiasing=document.getElementById("antialiasing").checked,le.fogEffects=document.getElementById("fogEffects").checked,le.mouseSensitivity=parseFloat(document.getElementById("sensitivitySlider").value),le.showHud=document.getElementById("showHud").checked,le.showHorizonLines=document.getElementById("showHorizonLines").checked,le.soundEnabled=document.getElementById("soundEnabled").checked,le.minimapRange=parseInt(document.getElementById("minimapRange").value),F_(),lu(),vn()},document.querySelectorAll(".close-modal").forEach(i=>{i.onclick=t=>{t.stopPropagation(),i.closest(".modal").classList.add("hidden")}}),window.addEventListener("click",i=>{i.target.classList.contains("modal")&&i.target.classList.add("hidden")})}document.getElementById("startBtn").onclick=async()=>{vn(),Fe.isMobile&&!Fe.tiltEnabled&&await Fe.requestOrientationPermission(),uu.classList.add("hidden"),kl(!1)};X_();document.getElementById("resumeBtn").onclick=()=>{vn(),bs.classList.add("hidden"),hi.classList.remove("hidden");const i=document.getElementById("weapons-hud");i&&i.classList.remove("hidden"),oe=se.FLYING,be&&be.resume(),fu(),Fe.isMobile&&Fe.setMobileVisible(!0)};document.getElementById("restartBtn").onclick=()=>{vn(),bs.classList.add("hidden"),be&&be.stop(),kl(!0)};document.getElementById("quitBtn").onclick=()=>{vn(),be&&be.stop(),Nl(!0),location.reload()};document.getElementById("respawnBtn").onclick=()=>{vn(),du.classList.add("hidden"),be&&be.stop(),kl(!0)};function kl(i=!0){K.score=0,dn&&dn.clear(),Ol(.3),Tt.play("zoom-in"),Tt.play("wind",1);const t=document.getElementById("transition-vignette");i&&t&&(t.style.opacity="1"),setTimeout(()=>{Ul.classList.remove("hidden"),Vi.classList.add("hidden"),hi.classList.add("hidden");const n=document.getElementById("weapons-hud");n&&n.classList.add("hidden"),oe=se.PICK_SPAWN,oa.classList.add("hidden");const s=document.getElementById("locationSearch"),a=document.getElementById("instruction-text"),r=document.getElementById("search-results");s&&(s.value="",s.style.display="none"),a&&(a.style.display="block",a.textContent="CLICK ANYWHERE TO CHOOSE YOUR HUNTING GROUNDS"),r&&(r.style.display="none"),mr(!0),Ve&&(we().entities.remove(Ve),Ve=null),we().camera.flyTo({destination:Cesium.Cartesian3.fromDegrees(K.lon,K.lat,15e3),duration:2,complete:()=>{t&&(t.style.opacity="0")}})},i?500:0)}function Y_(){Tt.play("zoom-in"),Tt.stop("wind",1),Ol(.3),Ul.classList.add("hidden"),oa.classList.add("hidden"),uu.classList.remove("hidden"),oe=se.MENU,Vn.classList.add("hidden"),Nl(!0),mr(!1),Ve&&(we().entities.remove(Ve),Ve=null),we().camera.flyTo({...hu,duration:2.5})}function q_(){const i=we(),t=new Cesium.ScreenSpaceEventHandler(i.scene.canvas),e=document.getElementById("instruction-text");t.setInputAction(n=>{if(oe!==se.PICK_SPAWN)return;const s=i.camera.getPickRay(n.position),a=i.scene.globe.pick(s,i.scene);if(a){const r=Cesium.Cartographic.fromCartesian(a),o=Cesium.Math.toDegrees(r.longitude),l=Cesium.Math.toDegrees(r.latitude);K.lon=o,K.lat=l,K.alt=Math.max(0,r.height)+1500,e.textContent="FETCHING LOCATION INFO...",nu(o,l).then(c=>{c&&oe===se.PICK_SPAWN&&(e.textContent=c,Ve&&(Ve.label.text=c))}).catch(()=>{}),Cesium.sampleTerrainMostDetailed(i.terrainProvider,[r]).then(([c])=>K.alt=Math.max(0,c.height||0)+1500).catch(()=>{}),Ve&&i.entities.remove(Ve),Ve=i.entities.add({position:a,point:{pixelSize:15,color:Cesium.Color.RED,outlineColor:Cesium.Color.WHITE,outlineWidth:2,disableDepthTestDistance:Number.POSITIVE_INFINITY},label:{text:"Target Spawn Location",font:`14pt ${getComputedStyle(document.body).fontFamily}`,style:Cesium.LabelStyle.FILL_AND_OUTLINE,outlineWidth:2,verticalOrigin:Cesium.VerticalOrigin.BOTTOM,pixelOffset:new Cesium.Cartesian2(0,-20),disableDepthTestDistance:Number.POSITIVE_INFINITY}}),oa.classList.remove("hidden")}},Cesium.ScreenSpaceEventType.LEFT_CLICK)}function Z_(){const i=document.getElementById("locationSearch"),t=document.getElementById("search-results"),e=document.getElementById("instruction-text"),n=document.getElementById("search-toggle-btn"),s=n?n.innerHTML:"";let a;n&&(n.onclick=r=>{r.stopPropagation(),i.style.display==="block"?(i.style.display="none",e.style.display="block",t.style.display="none"):(i.style.display="block",e.style.display="none",i.focus())}),i.addEventListener("input",r=>{clearTimeout(a);const o=r.target.value.trim();if(o.length<3){t.style.display="none";return}a=setTimeout(async()=>{n&&(n.innerHTML='<div class="loader-spinner"></div>');try{const c=await(await fetch(`https://nominatim.openstreetmap.org/search?format=json&q=${encodeURIComponent(o)}&limit=5`)).json();t.innerHTML="",c.length>0?(c.forEach(h=>{const u=document.createElement("div");u.textContent=h.display_name,u.style.padding="10px",u.style.cursor="pointer",u.onclick=()=>{const d=parseFloat(h.lon),p=parseFloat(h.lat),g=we(),_=Cesium.Cartesian3.fromDegrees(d,p);K.lon=d,K.lat=p,K.alt=1500;const m=Cesium.Cartographic.fromDegrees(d,p);Cesium.sampleTerrainMostDetailed(g.terrainProvider,[m]).then(([f])=>{K.alt=Math.max(0,f.height||0)+1500}).catch(()=>{}),g.camera.flyTo({destination:Cesium.Cartesian3.fromDegrees(d,p,15e3),duration:1.5}),Ve&&g.entities.remove(Ve),Ve=g.entities.add({position:_,point:{pixelSize:15,color:Cesium.Color.RED,outlineColor:Cesium.Color.WHITE,outlineWidth:2,disableDepthTestDistance:Number.POSITIVE_INFINITY},label:{text:h.display_name.split(",")[0],font:`14pt ${getComputedStyle(document.body).fontFamily}`,style:Cesium.LabelStyle.FILL_AND_OUTLINE,outlineWidth:2,verticalOrigin:Cesium.VerticalOrigin.BOTTOM,pixelOffset:new Cesium.Cartesian2(0,-20),disableDepthTestDistance:Number.POSITIVE_INFINITY}}),oa.classList.remove("hidden"),t.style.display="none",i.style.display="none",e.style.display="block",e.textContent=h.display_name.split(",")[0].toUpperCase(),i.value=h.display_name},t.appendChild(u)}),t.style.display="block"):t.style.display="none"}catch(l){console.error("Search error:",l)}finally{n&&(n.innerHTML=s)}},500)}),document.addEventListener("click",r=>{!i.contains(r.target)&&!t.contains(r.target)&&!n.contains(r.target)&&(t.style.display="none",i.style.display==="block"&&(i.style.display="none",e.style.display="block"))})}document.getElementById("confirmSpawnBtn").onclick=()=>{const i=document.getElementById("transition-vignette");i&&(i.style.opacity="1"),Tt.play("spawn"),setTimeout(()=>{const t=we();Ve&&(t.entities.remove(Ve),Ve=null),mr(!1),K.speed=12,K.pitch=0,K.roll=0;try{const e=t&&t.camera;e&&typeof e.heading=="number"?K.heading=Cesium.Math.toDegrees(e.heading):K.heading=0}catch{K.heading=0}nr=null,cl=0,qa={lon:0,lat:0},_i.copy(Mi),kn.set(0,0,0),ps=0,Za=0,gl=!1,Fe.reset(),ar=new eu,ar.reset(K.lon,K.lat,K.alt,K.heading,K.pitch,K.roll),aa&&aa.clear(),Te.resetTime(),Te.resizeMinimap(),_n&&typeof _n.resetAmmo=="function"&&_n.resetAmmo(),dn&&dn.spawnNPC(K.lon,K.lat,K.alt),Ul.classList.add("hidden"),oa.classList.add("hidden"),Vn.classList.add("hidden"),oe=se.TRANSITIONING,Nl(!1),t.camera.flyTo({destination:Cesium.Cartesian3.fromDegrees(K.lon,K.lat,K.alt),orientation:{heading:Cesium.Math.toRadians(K.heading),pitch:Cesium.Math.toRadians(K.pitch),roll:Cesium.Math.toRadians(K.roll)},duration:2,easingFunction:Cesium.EasingFunction.QUADRATIC_IN_OUT,complete:()=>{pu=Date.now(),hi.classList.remove("hidden");const e=document.getElementById("weapons-hud");if(e&&e.classList.remove("hidden"),Vi.classList.remove("hidden"),Te.resizeMinimap(),oe=se.FLYING,Tt.play("wind",.5),rr&&rr.startFlight(),i&&(i.style.opacity="0"),Fe.isMobile){Fe.setMobileVisible(!0),Fe.calibrateTilt();try{document.documentElement.requestFullscreen?document.documentElement.requestFullscreen().catch(()=>{}):document.documentElement.webkitRequestFullscreen&&document.documentElement.webkitRequestFullscreen(),screen.orientation&&screen.orientation.lock&&screen.orientation.lock("landscape").catch(()=>{})}catch{}}be&&be.start()}})},500)};window.addEventListener("keydown",i=>{const t=i.key.toLowerCase();if(t==="escape"){const e=document.querySelectorAll(".modal:not(.hidden)");if(e.length>0){e.forEach(n=>n.classList.add("hidden"));return}}if(t==="escape"||t==="p")if(oe===se.FLYING){oe=se.PAUSED,be&&be.pause(),hi.classList.add("hidden");const e=document.getElementById("weapons-hud");e&&e.classList.add("hidden"),bs.classList.remove("hidden"),Te.resizeMinimap(),Bl(),Te.update(K,[]),Fe.isMobile&&Fe.setMobileVisible(!1)}else if(oe===se.PAUSED){oe=se.FLYING,be&&be.resume(),bs.classList.add("hidden"),hi.classList.remove("hidden");const e=document.getElementById("weapons-hud");e&&e.classList.remove("hidden"),fu(),Fe.isMobile&&Fe.setMobileVisible(!0)}else oe===se.PICK_SPAWN&&t==="escape"&&Y_();t==="z"&&oe===se.FLYING&&be&&be.skip()});document.addEventListener("visibilitychange",()=>{document.hidden&&oe===se.FLYING&&(oe=se.PAUSED,be&&be.pause(),hi.classList.add("hidden"),bs.classList.remove("hidden"),Te.resizeMinimap(),Bl(),Te.update(K,[]),Fe.isMobile&&Fe.setMobileVisible(!1))});window.addEventListener("blur",()=>{oe===se.FLYING&&(oe=se.PAUSED,be&&be.pause(),hi.classList.add("hidden"),bs.classList.remove("hidden"),Te.resizeMinimap(),Bl(),Te.update(K,[]))});const si=Vx();Ae.cesium=!0;oi();setTimeout(()=>{Ae.globe||(console.warn("Globe loading timeout - enabling start button anyway"),Ae.globe=!0,oi())},8e3);let hh=!1;try{const i=si.scene.postRender.addEventListener(()=>{try{const t=si.scene.globe.tilesLoaded;t||(hh=!0),t&&hh&&(Ae.globe=!0,oi(),i())}catch{Ae.globe=!0,oi(),i()}})}catch(i){console.warn("Globe tracker setup failed",i),Ae.globe=!0,oi()}si.scene.globe.tileLoadProgressEvent.addEventListener(i=>{Vn&&or&&(oe===se.PICK_SPAWN?i>0?(or.textContent="Loading Terrain...",Vn.classList.remove("hidden")):Vn.classList.add("hidden"):Ae.audio&&Ae.model&&Ae.cesium&&Ae.globe&&Vn.classList.add("hidden"))});const lr=()=>{Tt.listener.context.state==="suspended"&&Tt.listener.context.resume(),window.removeEventListener("mousedown",lr),window.removeEventListener("keydown",lr)};window.addEventListener("mousedown",lr);window.addEventListener("keydown",lr);hu={destination:si.camera.position.clone(),orientation:{heading:si.camera.heading,pitch:si.camera.pitch,roll:si.camera.roll}};H_();dn=new o_(si,Qe,null);try{B_=L_(si)}catch(i){console.error("Failed to create territory boundary",i)}q_();Z_();D_();hi.classList.add("hidden");Vi.classList.add("hidden");oi();mu();window.addEventListener("resize",()=>{un.aspect=window.innerWidth/window.innerHeight,un.updateProjectionMatrix(),Fn.setSize(window.innerWidth,window.innerHeight);const i=we();i&&i.resize()});window.addEventListener("contextmenu",i=>{i.preventDefault()},!1);
