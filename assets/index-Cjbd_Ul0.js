(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))n(s);new MutationObserver(s=>{for(const r of s)if(r.type==="childList")for(const a of r.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&n(a)}).observe(document,{childList:!0,subtree:!0});function e(s){const r={};return s.integrity&&(r.integrity=s.integrity),s.referrerPolicy&&(r.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?r.credentials="include":s.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function n(s){if(s.ep)return;s.ep=!0;const r=e(s);fetch(s.href,r)}})();const gl="182",yu=0,ql=1,Su=2,Hr=1,wu=2,Ws=3,Ei=0,rn=1,Be=2,ri=0,xs=1,wn=2,Zl=3,$l=4,Eu=5,Bi=100,bu=101,Tu=102,Cu=103,Au=104,Ru=200,Pu=201,Iu=202,Lu=203,oo=204,lo=205,Du=206,Fu=207,Nu=208,Uu=209,Ou=210,Bu=211,ku=212,zu=213,Gu=214,co=0,ho=1,uo=2,vs=3,fo=4,po=5,mo=6,go=7,ha=0,Hu=1,Vu=2,Wn=0,lh=1,ch=2,hh=3,uh=4,dh=5,fh=6,ph=7,mh=300,Hi=301,Ms=302,xo=303,_o=304,ua=306,vo=1e3,ni=1001,Mo=1002,Ve=1003,Wu=1004,ur=1005,ze=1006,Ma=1007,zi=1008,fn=1009,gh=1010,xh=1011,js=1012,xl=1013,qn=1014,Nn=1015,li=1016,_l=1017,vl=1018,Qs=1020,_h=35902,vh=35899,Mh=1021,yh=1022,Un=1023,ci=1026,Gi=1027,Ml=1028,yl=1029,ys=1030,Sl=1031,wl=1033,Vr=33776,Wr=33777,Xr=33778,Yr=33779,yo=35840,So=35841,wo=35842,Eo=35843,bo=36196,To=37492,Co=37496,Ao=37488,Ro=37489,Po=37490,Io=37491,Lo=37808,Do=37809,Fo=37810,No=37811,Uo=37812,Oo=37813,Bo=37814,ko=37815,zo=37816,Go=37817,Ho=37818,Vo=37819,Wo=37820,Xo=37821,Yo=36492,qo=36494,Zo=36495,$o=36283,Ko=36284,Jo=36285,jo=36286,Xu=3200,da=0,Yu=1,vi="",_n="srgb",Ss="srgb-linear",Kr="linear",de="srgb",qi=7680,Kl=519,qu=512,Zu=513,$u=514,El=515,Ku=516,Ju=517,bl=518,ju=519,Qo=35044,Jl="300 es",Gn=2e3,Jr=2001;function Sh(i){for(let t=i.length-1;t>=0;--t)if(i[t]>=65535)return!0;return!1}function jr(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function Qu(){const i=jr("canvas");return i.style.display="block",i}const jl={};function Qr(...i){const t="THREE."+i.shift();console.log(t,...i)}function Ut(...i){const t="THREE."+i.shift();console.warn(t,...i)}function ne(...i){const t="THREE."+i.shift();console.error(t,...i)}function tr(...i){const t=i.join(" ");t in jl||(jl[t]=!0,Ut(...i))}function td(i,t,e){return new Promise(function(n,s){function r(){switch(i.clientWaitSync(t,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:s();break;case i.TIMEOUT_EXPIRED:setTimeout(r,e);break;default:n()}}setTimeout(r,e)})}class Ts{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[t]===void 0&&(n[t]=[]),n[t].indexOf(e)===-1&&n[t].push(e)}hasEventListener(t,e){const n=this._listeners;return n===void 0?!1:n[t]!==void 0&&n[t].indexOf(e)!==-1}removeEventListener(t,e){const n=this._listeners;if(n===void 0)return;const s=n[t];if(s!==void 0){const r=s.indexOf(e);r!==-1&&s.splice(r,1)}}dispatchEvent(t){const e=this._listeners;if(e===void 0)return;const n=e[t.type];if(n!==void 0){t.target=this;const s=n.slice(0);for(let r=0,a=s.length;r<a;r++)s[r].call(this,t);t.target=null}}}const We=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let Ql=1234567;const Zs=Math.PI/180,er=180/Math.PI;function Xn(){const i=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(We[i&255]+We[i>>8&255]+We[i>>16&255]+We[i>>24&255]+"-"+We[t&255]+We[t>>8&255]+"-"+We[t>>16&15|64]+We[t>>24&255]+"-"+We[e&63|128]+We[e>>8&255]+"-"+We[e>>16&255]+We[e>>24&255]+We[n&255]+We[n>>8&255]+We[n>>16&255]+We[n>>24&255]).toLowerCase()}function jt(i,t,e){return Math.max(t,Math.min(e,i))}function Tl(i,t){return(i%t+t)%t}function ed(i,t,e,n,s){return n+(i-t)*(s-n)/(e-t)}function nd(i,t,e){return i!==t?(e-i)/(t-i):0}function $s(i,t,e){return(1-e)*i+e*t}function id(i,t,e,n){return $s(i,t,1-Math.exp(-e*n))}function sd(i,t=1){return t-Math.abs(Tl(i,t*2)-t)}function rd(i,t,e){return i<=t?0:i>=e?1:(i=(i-t)/(e-t),i*i*(3-2*i))}function ad(i,t,e){return i<=t?0:i>=e?1:(i=(i-t)/(e-t),i*i*i*(i*(i*6-15)+10))}function od(i,t){return i+Math.floor(Math.random()*(t-i+1))}function ld(i,t){return i+Math.random()*(t-i)}function cd(i){return i*(.5-Math.random())}function hd(i){i!==void 0&&(Ql=i);let t=Ql+=1831565813;return t=Math.imul(t^t>>>15,t|1),t^=t+Math.imul(t^t>>>7,t|61),((t^t>>>14)>>>0)/4294967296}function ud(i){return i*Zs}function dd(i){return i*er}function fd(i){return(i&i-1)===0&&i!==0}function pd(i){return Math.pow(2,Math.ceil(Math.log(i)/Math.LN2))}function md(i){return Math.pow(2,Math.floor(Math.log(i)/Math.LN2))}function gd(i,t,e,n,s){const r=Math.cos,a=Math.sin,o=r(e/2),l=a(e/2),c=r((t+n)/2),h=a((t+n)/2),u=r((t-n)/2),d=a((t-n)/2),f=r((n-t)/2),g=a((n-t)/2);switch(s){case"XYX":i.set(o*h,l*u,l*d,o*c);break;case"YZY":i.set(l*d,o*h,l*u,o*c);break;case"ZXZ":i.set(l*u,l*d,o*h,o*c);break;case"XZX":i.set(o*h,l*g,l*f,o*c);break;case"YXY":i.set(l*f,o*h,l*g,o*c);break;case"ZYZ":i.set(l*g,l*f,o*h,o*c);break;default:Ut("MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+s)}}function In(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("Invalid component type.")}}function fe(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("Invalid component type.")}}const Se={DEG2RAD:Zs,RAD2DEG:er,generateUUID:Xn,clamp:jt,euclideanModulo:Tl,mapLinear:ed,inverseLerp:nd,lerp:$s,damp:id,pingpong:sd,smoothstep:rd,smootherstep:ad,randInt:od,randFloat:ld,randFloatSpread:cd,seededRandom:hd,degToRad:ud,radToDeg:dd,isPowerOfTwo:fd,ceilPowerOfTwo:pd,floorPowerOfTwo:md,setQuaternionFromProperEuler:gd,normalize:fe,denormalize:In};class dt{constructor(t=0,e=0){dt.prototype.isVector2=!0,this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){const e=this.x,n=this.y,s=t.elements;return this.x=s[0]*e+s[3]*n+s[6],this.y=s[1]*e+s[4]*n+s[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=jt(this.x,t.x,e.x),this.y=jt(this.y,t.y,e.y),this}clampScalar(t,e){return this.x=jt(this.x,t,e),this.y=jt(this.y,t,e),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(jt(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const n=this.dot(t)/e;return Math.acos(jt(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,n=this.y-t.y;return e*e+n*n}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){const n=Math.cos(e),s=Math.sin(e),r=this.x-t.x,a=this.y-t.y;return this.x=r*n-a*s+t.x,this.y=r*s+a*n+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class qe{constructor(t=0,e=0,n=0,s=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=n,this._w=s}static slerpFlat(t,e,n,s,r,a,o){let l=n[s+0],c=n[s+1],h=n[s+2],u=n[s+3],d=r[a+0],f=r[a+1],g=r[a+2],x=r[a+3];if(o<=0){t[e+0]=l,t[e+1]=c,t[e+2]=h,t[e+3]=u;return}if(o>=1){t[e+0]=d,t[e+1]=f,t[e+2]=g,t[e+3]=x;return}if(u!==x||l!==d||c!==f||h!==g){let m=l*d+c*f+h*g+u*x;m<0&&(d=-d,f=-f,g=-g,x=-x,m=-m);let p=1-o;if(m<.9995){const S=Math.acos(m),b=Math.sin(S);p=Math.sin(p*S)/b,o=Math.sin(o*S)/b,l=l*p+d*o,c=c*p+f*o,h=h*p+g*o,u=u*p+x*o}else{l=l*p+d*o,c=c*p+f*o,h=h*p+g*o,u=u*p+x*o;const S=1/Math.sqrt(l*l+c*c+h*h+u*u);l*=S,c*=S,h*=S,u*=S}}t[e]=l,t[e+1]=c,t[e+2]=h,t[e+3]=u}static multiplyQuaternionsFlat(t,e,n,s,r,a){const o=n[s],l=n[s+1],c=n[s+2],h=n[s+3],u=r[a],d=r[a+1],f=r[a+2],g=r[a+3];return t[e]=o*g+h*u+l*f-c*d,t[e+1]=l*g+h*d+c*u-o*f,t[e+2]=c*g+h*f+o*d-l*u,t[e+3]=h*g-o*u-l*d-c*f,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,n,s){return this._x=t,this._y=e,this._z=n,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){const n=t._x,s=t._y,r=t._z,a=t._order,o=Math.cos,l=Math.sin,c=o(n/2),h=o(s/2),u=o(r/2),d=l(n/2),f=l(s/2),g=l(r/2);switch(a){case"XYZ":this._x=d*h*u+c*f*g,this._y=c*f*u-d*h*g,this._z=c*h*g+d*f*u,this._w=c*h*u-d*f*g;break;case"YXZ":this._x=d*h*u+c*f*g,this._y=c*f*u-d*h*g,this._z=c*h*g-d*f*u,this._w=c*h*u+d*f*g;break;case"ZXY":this._x=d*h*u-c*f*g,this._y=c*f*u+d*h*g,this._z=c*h*g+d*f*u,this._w=c*h*u-d*f*g;break;case"ZYX":this._x=d*h*u-c*f*g,this._y=c*f*u+d*h*g,this._z=c*h*g-d*f*u,this._w=c*h*u+d*f*g;break;case"YZX":this._x=d*h*u+c*f*g,this._y=c*f*u+d*h*g,this._z=c*h*g-d*f*u,this._w=c*h*u-d*f*g;break;case"XZY":this._x=d*h*u-c*f*g,this._y=c*f*u-d*h*g,this._z=c*h*g+d*f*u,this._w=c*h*u+d*f*g;break;default:Ut("Quaternion: .setFromEuler() encountered an unknown order: "+a)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){const n=e/2,s=Math.sin(n);return this._x=t.x*s,this._y=t.y*s,this._z=t.z*s,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(t){const e=t.elements,n=e[0],s=e[4],r=e[8],a=e[1],o=e[5],l=e[9],c=e[2],h=e[6],u=e[10],d=n+o+u;if(d>0){const f=.5/Math.sqrt(d+1);this._w=.25/f,this._x=(h-l)*f,this._y=(r-c)*f,this._z=(a-s)*f}else if(n>o&&n>u){const f=2*Math.sqrt(1+n-o-u);this._w=(h-l)/f,this._x=.25*f,this._y=(s+a)/f,this._z=(r+c)/f}else if(o>u){const f=2*Math.sqrt(1+o-n-u);this._w=(r-c)/f,this._x=(s+a)/f,this._y=.25*f,this._z=(l+h)/f}else{const f=2*Math.sqrt(1+u-n-o);this._w=(a-s)/f,this._x=(r+c)/f,this._y=(l+h)/f,this._z=.25*f}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let n=t.dot(e)+1;return n<1e-8?(n=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=n):(this._x=0,this._y=-t.z,this._z=t.y,this._w=n)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=n),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(jt(this.dot(t),-1,1)))}rotateTowards(t,e){const n=this.angleTo(t);if(n===0)return this;const s=Math.min(1,e/n);return this.slerp(t,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){const n=t._x,s=t._y,r=t._z,a=t._w,o=e._x,l=e._y,c=e._z,h=e._w;return this._x=n*h+a*o+s*c-r*l,this._y=s*h+a*l+r*o-n*c,this._z=r*h+a*c+n*l-s*o,this._w=a*h-n*o-s*l-r*c,this._onChangeCallback(),this}slerp(t,e){if(e<=0)return this;if(e>=1)return this.copy(t);let n=t._x,s=t._y,r=t._z,a=t._w,o=this.dot(t);o<0&&(n=-n,s=-s,r=-r,a=-a,o=-o);let l=1-e;if(o<.9995){const c=Math.acos(o),h=Math.sin(c);l=Math.sin(l*c)/h,e=Math.sin(e*c)/h,this._x=this._x*l+n*e,this._y=this._y*l+s*e,this._z=this._z*l+r*e,this._w=this._w*l+a*e,this._onChangeCallback()}else this._x=this._x*l+n*e,this._y=this._y*l+s*e,this._z=this._z*l+r*e,this._w=this._w*l+a*e,this.normalize();return this}slerpQuaternions(t,e,n){return this.copy(t).slerp(e,n)}random(){const t=2*Math.PI*Math.random(),e=2*Math.PI*Math.random(),n=Math.random(),s=Math.sqrt(1-n),r=Math.sqrt(n);return this.set(s*Math.sin(t),s*Math.cos(t),r*Math.sin(e),r*Math.cos(e))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class L{constructor(t=0,e=0,n=0){L.prototype.isVector3=!0,this.x=t,this.y=e,this.z=n}set(t,e,n){return n===void 0&&(n=this.z),this.x=t,this.y=e,this.z=n,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(tc.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(tc.setFromAxisAngle(t,e))}applyMatrix3(t){const e=this.x,n=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[3]*n+r[6]*s,this.y=r[1]*e+r[4]*n+r[7]*s,this.z=r[2]*e+r[5]*n+r[8]*s,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){const e=this.x,n=this.y,s=this.z,r=t.elements,a=1/(r[3]*e+r[7]*n+r[11]*s+r[15]);return this.x=(r[0]*e+r[4]*n+r[8]*s+r[12])*a,this.y=(r[1]*e+r[5]*n+r[9]*s+r[13])*a,this.z=(r[2]*e+r[6]*n+r[10]*s+r[14])*a,this}applyQuaternion(t){const e=this.x,n=this.y,s=this.z,r=t.x,a=t.y,o=t.z,l=t.w,c=2*(a*s-o*n),h=2*(o*e-r*s),u=2*(r*n-a*e);return this.x=e+l*c+a*u-o*h,this.y=n+l*h+o*c-r*u,this.z=s+l*u+r*h-a*c,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){const e=this.x,n=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[4]*n+r[8]*s,this.y=r[1]*e+r[5]*n+r[9]*s,this.z=r[2]*e+r[6]*n+r[10]*s,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=jt(this.x,t.x,e.x),this.y=jt(this.y,t.y,e.y),this.z=jt(this.z,t.z,e.z),this}clampScalar(t,e){return this.x=jt(this.x,t,e),this.y=jt(this.y,t,e),this.z=jt(this.z,t,e),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(jt(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){const n=t.x,s=t.y,r=t.z,a=e.x,o=e.y,l=e.z;return this.x=s*l-r*o,this.y=r*a-n*l,this.z=n*o-s*a,this}projectOnVector(t){const e=t.lengthSq();if(e===0)return this.set(0,0,0);const n=t.dot(this)/e;return this.copy(t).multiplyScalar(n)}projectOnPlane(t){return ya.copy(this).projectOnVector(t),this.sub(ya)}reflect(t){return this.sub(ya.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const n=this.dot(t)/e;return Math.acos(jt(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,n=this.y-t.y,s=this.z-t.z;return e*e+n*n+s*s}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,n){const s=Math.sin(e)*t;return this.x=s*Math.sin(n),this.y=Math.cos(e)*t,this.z=s*Math.cos(n),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,n){return this.x=t*Math.sin(e),this.y=n,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){const e=this.setFromMatrixColumn(t,0).length(),n=this.setFromMatrixColumn(t,1).length(),s=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=n,this.z=s,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const t=Math.random()*Math.PI*2,e=Math.random()*2-1,n=Math.sqrt(1-e*e);return this.x=n*Math.cos(t),this.y=e,this.z=n*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const ya=new L,tc=new qe;class qt{constructor(t,e,n,s,r,a,o,l,c){qt.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,n,s,r,a,o,l,c)}set(t,e,n,s,r,a,o,l,c){const h=this.elements;return h[0]=t,h[1]=s,h[2]=o,h[3]=e,h[4]=r,h[5]=l,h[6]=n,h[7]=a,h[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){const e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],this}extractBasis(t,e,n){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(t){const e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const n=t.elements,s=e.elements,r=this.elements,a=n[0],o=n[3],l=n[6],c=n[1],h=n[4],u=n[7],d=n[2],f=n[5],g=n[8],x=s[0],m=s[3],p=s[6],S=s[1],b=s[4],w=s[7],M=s[2],C=s[5],A=s[8];return r[0]=a*x+o*S+l*M,r[3]=a*m+o*b+l*C,r[6]=a*p+o*w+l*A,r[1]=c*x+h*S+u*M,r[4]=c*m+h*b+u*C,r[7]=c*p+h*w+u*A,r[2]=d*x+f*S+g*M,r[5]=d*m+f*b+g*C,r[8]=d*p+f*w+g*A,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){const t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],a=t[4],o=t[5],l=t[6],c=t[7],h=t[8];return e*a*h-e*o*c-n*r*h+n*o*l+s*r*c-s*a*l}invert(){const t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],a=t[4],o=t[5],l=t[6],c=t[7],h=t[8],u=h*a-o*c,d=o*l-h*r,f=c*r-a*l,g=e*u+n*d+s*f;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);const x=1/g;return t[0]=u*x,t[1]=(s*c-h*n)*x,t[2]=(o*n-s*a)*x,t[3]=d*x,t[4]=(h*e-s*l)*x,t[5]=(s*r-o*e)*x,t[6]=f*x,t[7]=(n*l-c*e)*x,t[8]=(a*e-n*r)*x,this}transpose(){let t;const e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){const e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,n,s,r,a,o){const l=Math.cos(r),c=Math.sin(r);return this.set(n*l,n*c,-n*(l*a+c*o)+a+t,-s*c,s*l,-s*(-c*a+l*o)+o+e,0,0,1),this}scale(t,e){return this.premultiply(Sa.makeScale(t,e)),this}rotate(t){return this.premultiply(Sa.makeRotation(-t)),this}translate(t,e){return this.premultiply(Sa.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,n,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){const e=this.elements,n=t.elements;for(let s=0;s<9;s++)if(e[s]!==n[s])return!1;return!0}fromArray(t,e=0){for(let n=0;n<9;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){const n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t}clone(){return new this.constructor().fromArray(this.elements)}}const Sa=new qt,ec=new qt().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),nc=new qt().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function xd(){const i={enabled:!0,workingColorSpace:Ss,spaces:{},convert:function(s,r,a){return this.enabled===!1||r===a||!r||!a||(this.spaces[r].transfer===de&&(s.r=ai(s.r),s.g=ai(s.g),s.b=ai(s.b)),this.spaces[r].primaries!==this.spaces[a].primaries&&(s.applyMatrix3(this.spaces[r].toXYZ),s.applyMatrix3(this.spaces[a].fromXYZ)),this.spaces[a].transfer===de&&(s.r=_s(s.r),s.g=_s(s.g),s.b=_s(s.b))),s},workingToColorSpace:function(s,r){return this.convert(s,this.workingColorSpace,r)},colorSpaceToWorking:function(s,r){return this.convert(s,r,this.workingColorSpace)},getPrimaries:function(s){return this.spaces[s].primaries},getTransfer:function(s){return s===vi?Kr:this.spaces[s].transfer},getToneMappingMode:function(s){return this.spaces[s].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(s,r=this.workingColorSpace){return s.fromArray(this.spaces[r].luminanceCoefficients)},define:function(s){Object.assign(this.spaces,s)},_getMatrix:function(s,r,a){return s.copy(this.spaces[r].toXYZ).multiply(this.spaces[a].fromXYZ)},_getDrawingBufferColorSpace:function(s){return this.spaces[s].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(s=this.workingColorSpace){return this.spaces[s].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(s,r){return tr("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),i.workingToColorSpace(s,r)},toWorkingColorSpace:function(s,r){return tr("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),i.colorSpaceToWorking(s,r)}},t=[.64,.33,.3,.6,.15,.06],e=[.2126,.7152,.0722],n=[.3127,.329];return i.define({[Ss]:{primaries:t,whitePoint:n,transfer:Kr,toXYZ:ec,fromXYZ:nc,luminanceCoefficients:e,workingColorSpaceConfig:{unpackColorSpace:_n},outputColorSpaceConfig:{drawingBufferColorSpace:_n}},[_n]:{primaries:t,whitePoint:n,transfer:de,toXYZ:ec,fromXYZ:nc,luminanceCoefficients:e,outputColorSpaceConfig:{drawingBufferColorSpace:_n}}}),i}const re=xd();function ai(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function _s(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}let Zi;class _d{static getDataURL(t,e="image/png"){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let n;if(t instanceof HTMLCanvasElement)n=t;else{Zi===void 0&&(Zi=jr("canvas")),Zi.width=t.width,Zi.height=t.height;const s=Zi.getContext("2d");t instanceof ImageData?s.putImageData(t,0,0):s.drawImage(t,0,0,t.width,t.height),n=Zi}return n.toDataURL(e)}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){const e=jr("canvas");e.width=t.width,e.height=t.height;const n=e.getContext("2d");n.drawImage(t,0,0,t.width,t.height);const s=n.getImageData(0,0,t.width,t.height),r=s.data;for(let a=0;a<r.length;a++)r[a]=ai(r[a]/255)*255;return n.putImageData(s,0,0),e}else if(t.data){const e=t.data.slice(0);for(let n=0;n<e.length;n++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[n]=Math.floor(ai(e[n]/255)*255):e[n]=ai(e[n]);return{data:e,width:t.width,height:t.height}}else return Ut("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}}let vd=0;class Cl{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:vd++}),this.uuid=Xn(),this.data=t,this.dataReady=!0,this.version=0}getSize(t){const e=this.data;return typeof HTMLVideoElement<"u"&&e instanceof HTMLVideoElement?t.set(e.videoWidth,e.videoHeight,0):typeof VideoFrame<"u"&&e instanceof VideoFrame?t.set(e.displayHeight,e.displayWidth,0):e!==null?t.set(e.width,e.height,e.depth||0):t.set(0,0,0),t}set needsUpdate(t){t===!0&&this.version++}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];const n={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let a=0,o=s.length;a<o;a++)s[a].isDataTexture?r.push(wa(s[a].image)):r.push(wa(s[a]))}else r=wa(s);n.url=r}return e||(t.images[this.uuid]=n),n}}function wa(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?_d.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(Ut("Texture: Unable to serialize Texture."),{})}let Md=0;const Ea=new L;class Ze extends Ts{constructor(t=Ze.DEFAULT_IMAGE,e=Ze.DEFAULT_MAPPING,n=ni,s=ni,r=ze,a=zi,o=Un,l=fn,c=Ze.DEFAULT_ANISOTROPY,h=vi){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Md++}),this.uuid=Xn(),this.name="",this.source=new Cl(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=n,this.wrapT=s,this.magFilter=r,this.minFilter=a,this.anisotropy=c,this.format=o,this.internalFormat=null,this.type=l,this.offset=new dt(0,0),this.repeat=new dt(1,1),this.center=new dt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new qt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(t&&t.depth&&t.depth>1),this.pmremVersion=0}get width(){return this.source.getSize(Ea).x}get height(){return this.source.getSize(Ea).y}get depth(){return this.source.getSize(Ea).z}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.renderTarget=t.renderTarget,this.isRenderTargetTexture=t.isRenderTargetTexture,this.isArrayTexture=t.isArrayTexture,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}setValues(t){for(const e in t){const n=t[e];if(n===void 0){Ut(`Texture.setValues(): parameter '${e}' has value of undefined.`);continue}const s=this[e];if(s===void 0){Ut(`Texture.setValues(): property '${e}' does not exist.`);continue}s&&n&&s.isVector2&&n.isVector2||s&&n&&s.isVector3&&n.isVector3||s&&n&&s.isMatrix3&&n.isMatrix3?s.copy(n):this[e]=n}}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];const n={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),e||(t.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==mh)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case vo:t.x=t.x-Math.floor(t.x);break;case ni:t.x=t.x<0?0:1;break;case Mo:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case vo:t.y=t.y-Math.floor(t.y);break;case ni:t.y=t.y<0?0:1;break;case Mo:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}}Ze.DEFAULT_IMAGE=null;Ze.DEFAULT_MAPPING=mh;Ze.DEFAULT_ANISOTROPY=1;class be{constructor(t=0,e=0,n=0,s=1){be.prototype.isVector4=!0,this.x=t,this.y=e,this.z=n,this.w=s}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,n,s){return this.x=t,this.y=e,this.z=n,this.w=s,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){const e=this.x,n=this.y,s=this.z,r=this.w,a=t.elements;return this.x=a[0]*e+a[4]*n+a[8]*s+a[12]*r,this.y=a[1]*e+a[5]*n+a[9]*s+a[13]*r,this.z=a[2]*e+a[6]*n+a[10]*s+a[14]*r,this.w=a[3]*e+a[7]*n+a[11]*s+a[15]*r,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);const e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,n,s,r;const l=t.elements,c=l[0],h=l[4],u=l[8],d=l[1],f=l[5],g=l[9],x=l[2],m=l[6],p=l[10];if(Math.abs(h-d)<.01&&Math.abs(u-x)<.01&&Math.abs(g-m)<.01){if(Math.abs(h+d)<.1&&Math.abs(u+x)<.1&&Math.abs(g+m)<.1&&Math.abs(c+f+p-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;const b=(c+1)/2,w=(f+1)/2,M=(p+1)/2,C=(h+d)/4,A=(u+x)/4,D=(g+m)/4;return b>w&&b>M?b<.01?(n=0,s=.707106781,r=.707106781):(n=Math.sqrt(b),s=C/n,r=A/n):w>M?w<.01?(n=.707106781,s=0,r=.707106781):(s=Math.sqrt(w),n=C/s,r=D/s):M<.01?(n=.707106781,s=.707106781,r=0):(r=Math.sqrt(M),n=A/r,s=D/r),this.set(n,s,r,e),this}let S=Math.sqrt((m-g)*(m-g)+(u-x)*(u-x)+(d-h)*(d-h));return Math.abs(S)<.001&&(S=1),this.x=(m-g)/S,this.y=(u-x)/S,this.z=(d-h)/S,this.w=Math.acos((c+f+p-1)/2),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this.w=e[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=jt(this.x,t.x,e.x),this.y=jt(this.y,t.y,e.y),this.z=jt(this.z,t.z,e.z),this.w=jt(this.w,t.w,e.w),this}clampScalar(t,e){return this.x=jt(this.x,t,e),this.y=jt(this.y,t,e),this.z=jt(this.z,t,e),this.w=jt(this.w,t,e),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(jt(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this.w=t.w+(e.w-t.w)*n,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class yd extends Ts{constructor(t=1,e=1,n={}){super(),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:ze,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1},n),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=n.depth,this.scissor=new be(0,0,t,e),this.scissorTest=!1,this.viewport=new be(0,0,t,e);const s={width:t,height:e,depth:n.depth},r=new Ze(s);this.textures=[];const a=n.count;for(let o=0;o<a;o++)this.textures[o]=r.clone(),this.textures[o].isRenderTargetTexture=!0,this.textures[o].renderTarget=this;this._setTextureOptions(n),this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples,this.multiview=n.multiview}_setTextureOptions(t={}){const e={minFilter:ze,generateMipmaps:!1,flipY:!1,internalFormat:null};t.mapping!==void 0&&(e.mapping=t.mapping),t.wrapS!==void 0&&(e.wrapS=t.wrapS),t.wrapT!==void 0&&(e.wrapT=t.wrapT),t.wrapR!==void 0&&(e.wrapR=t.wrapR),t.magFilter!==void 0&&(e.magFilter=t.magFilter),t.minFilter!==void 0&&(e.minFilter=t.minFilter),t.format!==void 0&&(e.format=t.format),t.type!==void 0&&(e.type=t.type),t.anisotropy!==void 0&&(e.anisotropy=t.anisotropy),t.colorSpace!==void 0&&(e.colorSpace=t.colorSpace),t.flipY!==void 0&&(e.flipY=t.flipY),t.generateMipmaps!==void 0&&(e.generateMipmaps=t.generateMipmaps),t.internalFormat!==void 0&&(e.internalFormat=t.internalFormat);for(let n=0;n<this.textures.length;n++)this.textures[n].setValues(e)}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}set depthTexture(t){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),t!==null&&(t.renderTarget=this),this._depthTexture=t}get depthTexture(){return this._depthTexture}setSize(t,e,n=1){if(this.width!==t||this.height!==e||this.depth!==n){this.width=t,this.height=e,this.depth=n;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=t,this.textures[s].image.height=e,this.textures[s].image.depth=n,this.textures[s].isData3DTexture!==!0&&(this.textures[s].isArrayTexture=this.textures[s].image.depth>1);this.dispose()}this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let e=0,n=t.textures.length;e<n;e++){this.textures[e]=t.textures[e].clone(),this.textures[e].isRenderTargetTexture=!0,this.textures[e].renderTarget=this;const s=Object.assign({},t.textures[e].image);this.textures[e].source=new Cl(s)}return this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Yn extends yd{constructor(t=1,e=1,n={}){super(t,e,n),this.isWebGLRenderTarget=!0}}class wh extends Ze{constructor(t=null,e=1,n=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:n,depth:s},this.magFilter=Ve,this.minFilter=Ve,this.wrapR=ni,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}}class Sd extends Ze{constructor(t=null,e=1,n=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:n,depth:s},this.magFilter=Ve,this.minFilter=Ve,this.wrapR=ni,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Xi{constructor(t=new L(1/0,1/0,1/0),e=new L(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e+=3)this.expandByPoint(Cn.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,n=t.count;e<n;e++)this.expandByPoint(Cn.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){const n=Cn.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(n),this.max.copy(t).add(n),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);const n=t.geometry;if(n!==void 0){const r=n.getAttribute("position");if(e===!0&&r!==void 0&&t.isInstancedMesh!==!0)for(let a=0,o=r.count;a<o;a++)t.isMesh===!0?t.getVertexPosition(a,Cn):Cn.fromBufferAttribute(r,a),Cn.applyMatrix4(t.matrixWorld),this.expandByPoint(Cn);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),dr.copy(t.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),dr.copy(n.boundingBox)),dr.applyMatrix4(t.matrixWorld),this.union(dr)}const s=t.children;for(let r=0,a=s.length;r<a;r++)this.expandByObject(s[r],e);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,Cn),Cn.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,n;return t.normal.x>0?(e=t.normal.x*this.min.x,n=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,n=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,n+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,n+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,n+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,n+=t.normal.z*this.min.z),e<=-t.constant&&n>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(Ps),fr.subVectors(this.max,Ps),$i.subVectors(t.a,Ps),Ki.subVectors(t.b,Ps),Ji.subVectors(t.c,Ps),ui.subVectors(Ki,$i),di.subVectors(Ji,Ki),Ai.subVectors($i,Ji);let e=[0,-ui.z,ui.y,0,-di.z,di.y,0,-Ai.z,Ai.y,ui.z,0,-ui.x,di.z,0,-di.x,Ai.z,0,-Ai.x,-ui.y,ui.x,0,-di.y,di.x,0,-Ai.y,Ai.x,0];return!ba(e,$i,Ki,Ji,fr)||(e=[1,0,0,0,1,0,0,0,1],!ba(e,$i,Ki,Ji,fr))?!1:(pr.crossVectors(ui,di),e=[pr.x,pr.y,pr.z],ba(e,$i,Ki,Ji,fr))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,Cn).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(Cn).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(Kn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),Kn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),Kn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),Kn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),Kn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),Kn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),Kn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),Kn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(Kn),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(t){return this.min.fromArray(t.min),this.max.fromArray(t.max),this}}const Kn=[new L,new L,new L,new L,new L,new L,new L,new L],Cn=new L,dr=new Xi,$i=new L,Ki=new L,Ji=new L,ui=new L,di=new L,Ai=new L,Ps=new L,fr=new L,pr=new L,Ri=new L;function ba(i,t,e,n,s){for(let r=0,a=i.length-3;r<=a;r+=3){Ri.fromArray(i,r);const o=s.x*Math.abs(Ri.x)+s.y*Math.abs(Ri.y)+s.z*Math.abs(Ri.z),l=t.dot(Ri),c=e.dot(Ri),h=n.dot(Ri);if(Math.max(-Math.max(l,c,h),Math.min(l,c,h))>o)return!1}return!0}const wd=new Xi,Is=new L,Ta=new L;class or{constructor(t=new L,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){const n=this.center;e!==void 0?n.copy(e):wd.setFromPoints(t).getCenter(n);let s=0;for(let r=0,a=t.length;r<a;r++)s=Math.max(s,n.distanceToSquared(t[r]));return this.radius=Math.sqrt(s),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){const e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){const n=this.center.distanceToSquared(t);return e.copy(t),n>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;Is.subVectors(t,this.center);const e=Is.lengthSq();if(e>this.radius*this.radius){const n=Math.sqrt(e),s=(n-this.radius)*.5;this.center.addScaledVector(Is,s/n),this.radius+=s}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(Ta.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(Is.copy(t.center).add(Ta)),this.expandByPoint(Is.copy(t.center).sub(Ta))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(t){return this.radius=t.radius,this.center.fromArray(t.center),this}}const Jn=new L,Ca=new L,mr=new L,fi=new L,Aa=new L,gr=new L,Ra=new L;class Ed{constructor(t=new L,e=new L(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,Jn)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);const n=e.dot(this.direction);return n<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){const e=Jn.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(Jn.copy(this.origin).addScaledVector(this.direction,e),Jn.distanceToSquared(t))}distanceSqToSegment(t,e,n,s){Ca.copy(t).add(e).multiplyScalar(.5),mr.copy(e).sub(t).normalize(),fi.copy(this.origin).sub(Ca);const r=t.distanceTo(e)*.5,a=-this.direction.dot(mr),o=fi.dot(this.direction),l=-fi.dot(mr),c=fi.lengthSq(),h=Math.abs(1-a*a);let u,d,f,g;if(h>0)if(u=a*l-o,d=a*o-l,g=r*h,u>=0)if(d>=-g)if(d<=g){const x=1/h;u*=x,d*=x,f=u*(u+a*d+2*o)+d*(a*u+d+2*l)+c}else d=r,u=Math.max(0,-(a*d+o)),f=-u*u+d*(d+2*l)+c;else d=-r,u=Math.max(0,-(a*d+o)),f=-u*u+d*(d+2*l)+c;else d<=-g?(u=Math.max(0,-(-a*r+o)),d=u>0?-r:Math.min(Math.max(-r,-l),r),f=-u*u+d*(d+2*l)+c):d<=g?(u=0,d=Math.min(Math.max(-r,-l),r),f=d*(d+2*l)+c):(u=Math.max(0,-(a*r+o)),d=u>0?r:Math.min(Math.max(-r,-l),r),f=-u*u+d*(d+2*l)+c);else d=a>0?-r:r,u=Math.max(0,-(a*d+o)),f=-u*u+d*(d+2*l)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,u),s&&s.copy(Ca).addScaledVector(mr,d),f}intersectSphere(t,e){Jn.subVectors(t.center,this.origin);const n=Jn.dot(this.direction),s=Jn.dot(Jn)-n*n,r=t.radius*t.radius;if(s>r)return null;const a=Math.sqrt(r-s),o=n-a,l=n+a;return l<0?null:o<0?this.at(l,e):this.at(o,e)}intersectsSphere(t){return t.radius<0?!1:this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){const e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(t.normal)+t.constant)/e;return n>=0?n:null}intersectPlane(t,e){const n=this.distanceToPlane(t);return n===null?null:this.at(n,e)}intersectsPlane(t){const e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let n,s,r,a,o,l;const c=1/this.direction.x,h=1/this.direction.y,u=1/this.direction.z,d=this.origin;return c>=0?(n=(t.min.x-d.x)*c,s=(t.max.x-d.x)*c):(n=(t.max.x-d.x)*c,s=(t.min.x-d.x)*c),h>=0?(r=(t.min.y-d.y)*h,a=(t.max.y-d.y)*h):(r=(t.max.y-d.y)*h,a=(t.min.y-d.y)*h),n>a||r>s||((r>n||isNaN(n))&&(n=r),(a<s||isNaN(s))&&(s=a),u>=0?(o=(t.min.z-d.z)*u,l=(t.max.z-d.z)*u):(o=(t.max.z-d.z)*u,l=(t.min.z-d.z)*u),n>l||o>s)||((o>n||n!==n)&&(n=o),(l<s||s!==s)&&(s=l),s<0)?null:this.at(n>=0?n:s,e)}intersectsBox(t){return this.intersectBox(t,Jn)!==null}intersectTriangle(t,e,n,s,r){Aa.subVectors(e,t),gr.subVectors(n,t),Ra.crossVectors(Aa,gr);let a=this.direction.dot(Ra),o;if(a>0){if(s)return null;o=1}else if(a<0)o=-1,a=-a;else return null;fi.subVectors(this.origin,t);const l=o*this.direction.dot(gr.crossVectors(fi,gr));if(l<0)return null;const c=o*this.direction.dot(Aa.cross(fi));if(c<0||l+c>a)return null;const h=-o*fi.dot(Ra);return h<0?null:this.at(h/a,r)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class ee{constructor(t,e,n,s,r,a,o,l,c,h,u,d,f,g,x,m){ee.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,n,s,r,a,o,l,c,h,u,d,f,g,x,m)}set(t,e,n,s,r,a,o,l,c,h,u,d,f,g,x,m){const p=this.elements;return p[0]=t,p[4]=e,p[8]=n,p[12]=s,p[1]=r,p[5]=a,p[9]=o,p[13]=l,p[2]=c,p[6]=h,p[10]=u,p[14]=d,p[3]=f,p[7]=g,p[11]=x,p[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new ee().fromArray(this.elements)}copy(t){const e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],e[9]=n[9],e[10]=n[10],e[11]=n[11],e[12]=n[12],e[13]=n[13],e[14]=n[14],e[15]=n[15],this}copyPosition(t){const e=this.elements,n=t.elements;return e[12]=n[12],e[13]=n[13],e[14]=n[14],this}setFromMatrix3(t){const e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,n){return this.determinant()===0?(t.set(1,0,0),e.set(0,1,0),n.set(0,0,1),this):(t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this)}makeBasis(t,e,n){return this.set(t.x,e.x,n.x,0,t.y,e.y,n.y,0,t.z,e.z,n.z,0,0,0,0,1),this}extractRotation(t){if(t.determinant()===0)return this.identity();const e=this.elements,n=t.elements,s=1/ji.setFromMatrixColumn(t,0).length(),r=1/ji.setFromMatrixColumn(t,1).length(),a=1/ji.setFromMatrixColumn(t,2).length();return e[0]=n[0]*s,e[1]=n[1]*s,e[2]=n[2]*s,e[3]=0,e[4]=n[4]*r,e[5]=n[5]*r,e[6]=n[6]*r,e[7]=0,e[8]=n[8]*a,e[9]=n[9]*a,e[10]=n[10]*a,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){const e=this.elements,n=t.x,s=t.y,r=t.z,a=Math.cos(n),o=Math.sin(n),l=Math.cos(s),c=Math.sin(s),h=Math.cos(r),u=Math.sin(r);if(t.order==="XYZ"){const d=a*h,f=a*u,g=o*h,x=o*u;e[0]=l*h,e[4]=-l*u,e[8]=c,e[1]=f+g*c,e[5]=d-x*c,e[9]=-o*l,e[2]=x-d*c,e[6]=g+f*c,e[10]=a*l}else if(t.order==="YXZ"){const d=l*h,f=l*u,g=c*h,x=c*u;e[0]=d+x*o,e[4]=g*o-f,e[8]=a*c,e[1]=a*u,e[5]=a*h,e[9]=-o,e[2]=f*o-g,e[6]=x+d*o,e[10]=a*l}else if(t.order==="ZXY"){const d=l*h,f=l*u,g=c*h,x=c*u;e[0]=d-x*o,e[4]=-a*u,e[8]=g+f*o,e[1]=f+g*o,e[5]=a*h,e[9]=x-d*o,e[2]=-a*c,e[6]=o,e[10]=a*l}else if(t.order==="ZYX"){const d=a*h,f=a*u,g=o*h,x=o*u;e[0]=l*h,e[4]=g*c-f,e[8]=d*c+x,e[1]=l*u,e[5]=x*c+d,e[9]=f*c-g,e[2]=-c,e[6]=o*l,e[10]=a*l}else if(t.order==="YZX"){const d=a*l,f=a*c,g=o*l,x=o*c;e[0]=l*h,e[4]=x-d*u,e[8]=g*u+f,e[1]=u,e[5]=a*h,e[9]=-o*h,e[2]=-c*h,e[6]=f*u+g,e[10]=d-x*u}else if(t.order==="XZY"){const d=a*l,f=a*c,g=o*l,x=o*c;e[0]=l*h,e[4]=-u,e[8]=c*h,e[1]=d*u+x,e[5]=a*h,e[9]=f*u-g,e[2]=g*u-f,e[6]=o*h,e[10]=x*u+d}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(bd,t,Td)}lookAt(t,e,n){const s=this.elements;return cn.subVectors(t,e),cn.lengthSq()===0&&(cn.z=1),cn.normalize(),pi.crossVectors(n,cn),pi.lengthSq()===0&&(Math.abs(n.z)===1?cn.x+=1e-4:cn.z+=1e-4,cn.normalize(),pi.crossVectors(n,cn)),pi.normalize(),xr.crossVectors(cn,pi),s[0]=pi.x,s[4]=xr.x,s[8]=cn.x,s[1]=pi.y,s[5]=xr.y,s[9]=cn.y,s[2]=pi.z,s[6]=xr.z,s[10]=cn.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const n=t.elements,s=e.elements,r=this.elements,a=n[0],o=n[4],l=n[8],c=n[12],h=n[1],u=n[5],d=n[9],f=n[13],g=n[2],x=n[6],m=n[10],p=n[14],S=n[3],b=n[7],w=n[11],M=n[15],C=s[0],A=s[4],D=s[8],v=s[12],y=s[1],P=s[5],I=s[9],F=s[13],B=s[2],k=s[6],H=s[10],z=s[14],$=s[3],ut=s[7],st=s[11],rt=s[15];return r[0]=a*C+o*y+l*B+c*$,r[4]=a*A+o*P+l*k+c*ut,r[8]=a*D+o*I+l*H+c*st,r[12]=a*v+o*F+l*z+c*rt,r[1]=h*C+u*y+d*B+f*$,r[5]=h*A+u*P+d*k+f*ut,r[9]=h*D+u*I+d*H+f*st,r[13]=h*v+u*F+d*z+f*rt,r[2]=g*C+x*y+m*B+p*$,r[6]=g*A+x*P+m*k+p*ut,r[10]=g*D+x*I+m*H+p*st,r[14]=g*v+x*F+m*z+p*rt,r[3]=S*C+b*y+w*B+M*$,r[7]=S*A+b*P+w*k+M*ut,r[11]=S*D+b*I+w*H+M*st,r[15]=S*v+b*F+w*z+M*rt,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){const t=this.elements,e=t[0],n=t[4],s=t[8],r=t[12],a=t[1],o=t[5],l=t[9],c=t[13],h=t[2],u=t[6],d=t[10],f=t[14],g=t[3],x=t[7],m=t[11],p=t[15],S=l*f-c*d,b=o*f-c*u,w=o*d-l*u,M=a*f-c*h,C=a*d-l*h,A=a*u-o*h;return e*(x*S-m*b+p*w)-n*(g*S-m*M+p*C)+s*(g*b-x*M+p*A)-r*(g*w-x*C+m*A)}transpose(){const t=this.elements;let e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,n){const s=this.elements;return t.isVector3?(s[12]=t.x,s[13]=t.y,s[14]=t.z):(s[12]=t,s[13]=e,s[14]=n),this}invert(){const t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],a=t[4],o=t[5],l=t[6],c=t[7],h=t[8],u=t[9],d=t[10],f=t[11],g=t[12],x=t[13],m=t[14],p=t[15],S=u*m*c-x*d*c+x*l*f-o*m*f-u*l*p+o*d*p,b=g*d*c-h*m*c-g*l*f+a*m*f+h*l*p-a*d*p,w=h*x*c-g*u*c+g*o*f-a*x*f-h*o*p+a*u*p,M=g*u*l-h*x*l-g*o*d+a*x*d+h*o*m-a*u*m,C=e*S+n*b+s*w+r*M;if(C===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const A=1/C;return t[0]=S*A,t[1]=(x*d*r-u*m*r-x*s*f+n*m*f+u*s*p-n*d*p)*A,t[2]=(o*m*r-x*l*r+x*s*c-n*m*c-o*s*p+n*l*p)*A,t[3]=(u*l*r-o*d*r-u*s*c+n*d*c+o*s*f-n*l*f)*A,t[4]=b*A,t[5]=(h*m*r-g*d*r+g*s*f-e*m*f-h*s*p+e*d*p)*A,t[6]=(g*l*r-a*m*r-g*s*c+e*m*c+a*s*p-e*l*p)*A,t[7]=(a*d*r-h*l*r+h*s*c-e*d*c-a*s*f+e*l*f)*A,t[8]=w*A,t[9]=(g*u*r-h*x*r-g*n*f+e*x*f+h*n*p-e*u*p)*A,t[10]=(a*x*r-g*o*r+g*n*c-e*x*c-a*n*p+e*o*p)*A,t[11]=(h*o*r-a*u*r-h*n*c+e*u*c+a*n*f-e*o*f)*A,t[12]=M*A,t[13]=(h*x*s-g*u*s+g*n*d-e*x*d-h*n*m+e*u*m)*A,t[14]=(g*o*s-a*x*s-g*n*l+e*x*l+a*n*m-e*o*m)*A,t[15]=(a*u*s-h*o*s+h*n*l-e*u*l-a*n*d+e*o*d)*A,this}scale(t){const e=this.elements,n=t.x,s=t.y,r=t.z;return e[0]*=n,e[4]*=s,e[8]*=r,e[1]*=n,e[5]*=s,e[9]*=r,e[2]*=n,e[6]*=s,e[10]*=r,e[3]*=n,e[7]*=s,e[11]*=r,this}getMaxScaleOnAxis(){const t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],n=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],s=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,n,s))}makeTranslation(t,e,n){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,n,0,0,0,1),this}makeRotationX(t){const e=Math.cos(t),n=Math.sin(t);return this.set(1,0,0,0,0,e,-n,0,0,n,e,0,0,0,0,1),this}makeRotationY(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,0,n,0,0,1,0,0,-n,0,e,0,0,0,0,1),this}makeRotationZ(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,0,n,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){const n=Math.cos(e),s=Math.sin(e),r=1-n,a=t.x,o=t.y,l=t.z,c=r*a,h=r*o;return this.set(c*a+n,c*o-s*l,c*l+s*o,0,c*o+s*l,h*o+n,h*l-s*a,0,c*l-s*o,h*l+s*a,r*l*l+n,0,0,0,0,1),this}makeScale(t,e,n){return this.set(t,0,0,0,0,e,0,0,0,0,n,0,0,0,0,1),this}makeShear(t,e,n,s,r,a){return this.set(1,n,r,0,t,1,a,0,e,s,1,0,0,0,0,1),this}compose(t,e,n){const s=this.elements,r=e._x,a=e._y,o=e._z,l=e._w,c=r+r,h=a+a,u=o+o,d=r*c,f=r*h,g=r*u,x=a*h,m=a*u,p=o*u,S=l*c,b=l*h,w=l*u,M=n.x,C=n.y,A=n.z;return s[0]=(1-(x+p))*M,s[1]=(f+w)*M,s[2]=(g-b)*M,s[3]=0,s[4]=(f-w)*C,s[5]=(1-(d+p))*C,s[6]=(m+S)*C,s[7]=0,s[8]=(g+b)*A,s[9]=(m-S)*A,s[10]=(1-(d+x))*A,s[11]=0,s[12]=t.x,s[13]=t.y,s[14]=t.z,s[15]=1,this}decompose(t,e,n){const s=this.elements;if(t.x=s[12],t.y=s[13],t.z=s[14],this.determinant()===0)return n.set(1,1,1),e.identity(),this;let r=ji.set(s[0],s[1],s[2]).length();const a=ji.set(s[4],s[5],s[6]).length(),o=ji.set(s[8],s[9],s[10]).length();this.determinant()<0&&(r=-r),An.copy(this);const c=1/r,h=1/a,u=1/o;return An.elements[0]*=c,An.elements[1]*=c,An.elements[2]*=c,An.elements[4]*=h,An.elements[5]*=h,An.elements[6]*=h,An.elements[8]*=u,An.elements[9]*=u,An.elements[10]*=u,e.setFromRotationMatrix(An),n.x=r,n.y=a,n.z=o,this}makePerspective(t,e,n,s,r,a,o=Gn,l=!1){const c=this.elements,h=2*r/(e-t),u=2*r/(n-s),d=(e+t)/(e-t),f=(n+s)/(n-s);let g,x;if(l)g=r/(a-r),x=a*r/(a-r);else if(o===Gn)g=-(a+r)/(a-r),x=-2*a*r/(a-r);else if(o===Jr)g=-a/(a-r),x=-a*r/(a-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return c[0]=h,c[4]=0,c[8]=d,c[12]=0,c[1]=0,c[5]=u,c[9]=f,c[13]=0,c[2]=0,c[6]=0,c[10]=g,c[14]=x,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(t,e,n,s,r,a,o=Gn,l=!1){const c=this.elements,h=2/(e-t),u=2/(n-s),d=-(e+t)/(e-t),f=-(n+s)/(n-s);let g,x;if(l)g=1/(a-r),x=a/(a-r);else if(o===Gn)g=-2/(a-r),x=-(a+r)/(a-r);else if(o===Jr)g=-1/(a-r),x=-r/(a-r);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return c[0]=h,c[4]=0,c[8]=0,c[12]=d,c[1]=0,c[5]=u,c[9]=0,c[13]=f,c[2]=0,c[6]=0,c[10]=g,c[14]=x,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(t){const e=this.elements,n=t.elements;for(let s=0;s<16;s++)if(e[s]!==n[s])return!1;return!0}fromArray(t,e=0){for(let n=0;n<16;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){const n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t[e+9]=n[9],t[e+10]=n[10],t[e+11]=n[11],t[e+12]=n[12],t[e+13]=n[13],t[e+14]=n[14],t[e+15]=n[15],t}}const ji=new L,An=new ee,bd=new L(0,0,0),Td=new L(1,1,1),pi=new L,xr=new L,cn=new L,ic=new ee,sc=new qe;class Fe{constructor(t=0,e=0,n=0,s=Fe.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=n,this._order=s}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,n,s=this._order){return this._x=t,this._y=e,this._z=n,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,n=!0){const s=t.elements,r=s[0],a=s[4],o=s[8],l=s[1],c=s[5],h=s[9],u=s[2],d=s[6],f=s[10];switch(e){case"XYZ":this._y=Math.asin(jt(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-h,f),this._z=Math.atan2(-a,r)):(this._x=Math.atan2(d,c),this._z=0);break;case"YXZ":this._x=Math.asin(-jt(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(o,f),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-u,r),this._z=0);break;case"ZXY":this._x=Math.asin(jt(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-u,f),this._z=Math.atan2(-a,c)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-jt(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(d,f),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-a,c));break;case"YZX":this._z=Math.asin(jt(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-h,c),this._y=Math.atan2(-u,r)):(this._x=0,this._y=Math.atan2(o,f));break;case"XZY":this._z=Math.asin(-jt(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(d,c),this._y=Math.atan2(o,r)):(this._x=Math.atan2(-h,f),this._y=0);break;default:Ut("Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,n===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,n){return ic.makeRotationFromQuaternion(t),this.setFromRotationMatrix(ic,e,n)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return sc.setFromEuler(this),this.setFromQuaternion(sc,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Fe.DEFAULT_ORDER="XYZ";class Eh{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}}let Cd=0;const rc=new L,Qi=new qe,jn=new ee,_r=new L,Ls=new L,Ad=new L,Rd=new qe,ac=new L(1,0,0),oc=new L(0,1,0),lc=new L(0,0,1),cc={type:"added"},Pd={type:"removed"},ts={type:"childadded",child:null},Pa={type:"childremoved",child:null};class De extends Ts{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Cd++}),this.uuid=Xn(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=De.DEFAULT_UP.clone();const t=new L,e=new Fe,n=new qe,s=new L(1,1,1);function r(){n.setFromEuler(e,!1)}function a(){e.setFromQuaternion(n,void 0,!1)}e._onChange(r),n._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new ee},normalMatrix:{value:new qt}}),this.matrix=new ee,this.matrixWorld=new ee,this.matrixAutoUpdate=De.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=De.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Eh,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return Qi.setFromAxisAngle(t,e),this.quaternion.multiply(Qi),this}rotateOnWorldAxis(t,e){return Qi.setFromAxisAngle(t,e),this.quaternion.premultiply(Qi),this}rotateX(t){return this.rotateOnAxis(ac,t)}rotateY(t){return this.rotateOnAxis(oc,t)}rotateZ(t){return this.rotateOnAxis(lc,t)}translateOnAxis(t,e){return rc.copy(t).applyQuaternion(this.quaternion),this.position.add(rc.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(ac,t)}translateY(t){return this.translateOnAxis(oc,t)}translateZ(t){return this.translateOnAxis(lc,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(jn.copy(this.matrixWorld).invert())}lookAt(t,e,n){t.isVector3?_r.copy(t):_r.set(t,e,n);const s=this.parent;this.updateWorldMatrix(!0,!1),Ls.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?jn.lookAt(Ls,_r,this.up):jn.lookAt(_r,Ls,this.up),this.quaternion.setFromRotationMatrix(jn),s&&(jn.extractRotation(s.matrixWorld),Qi.setFromRotationMatrix(jn),this.quaternion.premultiply(Qi.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(ne("Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(cc),ts.child=t,this.dispatchEvent(ts),ts.child=null):ne("Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(Pd),Pa.child=t,this.dispatchEvent(Pa),Pa.child=null),this}removeFromParent(){const t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),jn.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),jn.multiply(t.parent.matrixWorld)),t.applyMatrix4(jn),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(cc),ts.child=t,this.dispatchEvent(ts),ts.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let n=0,s=this.children.length;n<s;n++){const a=this.children[n].getObjectByProperty(t,e);if(a!==void 0)return a}}getObjectsByProperty(t,e,n=[]){this[t]===e&&n.push(this);const s=this.children;for(let r=0,a=s.length;r<a;r++)s[r].getObjectsByProperty(t,e,n);return n}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ls,t,Ad),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ls,Rd,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);const e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}traverse(t){t(this);const e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);const e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].traverseVisible(t)}traverseAncestors(t){const e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);const e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].updateMatrixWorld(t)}updateWorldMatrix(t,e){const n=this.parent;if(t===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),e===!0){const s=this.children;for(let r=0,a=s.length;r<a;r++)s[r].updateWorldMatrix(!1,!0)}}toJSON(t){const e=t===void 0||typeof t=="string",n={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const s={};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.castShadow===!0&&(s.castShadow=!0),this.receiveShadow===!0&&(s.receiveShadow=!0),this.visible===!1&&(s.visible=!1),this.frustumCulled===!1&&(s.frustumCulled=!1),this.renderOrder!==0&&(s.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(s.matrixAutoUpdate=!1),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.geometryInfo=this._geometryInfo.map(o=>({...o,boundingBox:o.boundingBox?o.boundingBox.toJSON():void 0,boundingSphere:o.boundingSphere?o.boundingSphere.toJSON():void 0})),s.instanceInfo=this._instanceInfo.map(o=>({...o})),s.availableInstanceIds=this._availableInstanceIds.slice(),s.availableGeometryIds=this._availableGeometryIds.slice(),s.nextIndexStart=this._nextIndexStart,s.nextVertexStart=this._nextVertexStart,s.geometryCount=this._geometryCount,s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.matricesTexture=this._matricesTexture.toJSON(t),s.indirectTexture=this._indirectTexture.toJSON(t),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(s.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(s.boundingBox=this.boundingBox.toJSON()));function r(o,l){return o[l.uuid]===void 0&&(o[l.uuid]=l.toJSON(t)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(t.geometries,this.geometry);const o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){const l=o.shapes;if(Array.isArray(l))for(let c=0,h=l.length;c<h;c++){const u=l[c];r(t.shapes,u)}else r(t.shapes,l)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(t.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const o=[];for(let l=0,c=this.material.length;l<c;l++)o.push(r(t.materials,this.material[l]));s.material=o}else s.material=r(t.materials,this.material);if(this.children.length>0){s.children=[];for(let o=0;o<this.children.length;o++)s.children.push(this.children[o].toJSON(t).object)}if(this.animations.length>0){s.animations=[];for(let o=0;o<this.animations.length;o++){const l=this.animations[o];s.animations.push(r(t.animations,l))}}if(e){const o=a(t.geometries),l=a(t.materials),c=a(t.textures),h=a(t.images),u=a(t.shapes),d=a(t.skeletons),f=a(t.animations),g=a(t.nodes);o.length>0&&(n.geometries=o),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),h.length>0&&(n.images=h),u.length>0&&(n.shapes=u),d.length>0&&(n.skeletons=d),f.length>0&&(n.animations=f),g.length>0&&(n.nodes=g)}return n.object=s,n;function a(o){const l=[];for(const c in o){const h=o[c];delete h.metadata,l.push(h)}return l}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let n=0;n<t.children.length;n++){const s=t.children[n];this.add(s.clone())}return this}}De.DEFAULT_UP=new L(0,1,0);De.DEFAULT_MATRIX_AUTO_UPDATE=!0;De.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const Rn=new L,Qn=new L,Ia=new L,ti=new L,es=new L,ns=new L,hc=new L,La=new L,Da=new L,Fa=new L,Na=new be,Ua=new be,Oa=new be;class Sn{constructor(t=new L,e=new L,n=new L){this.a=t,this.b=e,this.c=n}static getNormal(t,e,n,s){s.subVectors(n,e),Rn.subVectors(t,e),s.cross(Rn);const r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(t,e,n,s,r){Rn.subVectors(s,e),Qn.subVectors(n,e),Ia.subVectors(t,e);const a=Rn.dot(Rn),o=Rn.dot(Qn),l=Rn.dot(Ia),c=Qn.dot(Qn),h=Qn.dot(Ia),u=a*c-o*o;if(u===0)return r.set(0,0,0),null;const d=1/u,f=(c*l-o*h)*d,g=(a*h-o*l)*d;return r.set(1-f-g,g,f)}static containsPoint(t,e,n,s){return this.getBarycoord(t,e,n,s,ti)===null?!1:ti.x>=0&&ti.y>=0&&ti.x+ti.y<=1}static getInterpolation(t,e,n,s,r,a,o,l){return this.getBarycoord(t,e,n,s,ti)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(r,ti.x),l.addScaledVector(a,ti.y),l.addScaledVector(o,ti.z),l)}static getInterpolatedAttribute(t,e,n,s,r,a){return Na.setScalar(0),Ua.setScalar(0),Oa.setScalar(0),Na.fromBufferAttribute(t,e),Ua.fromBufferAttribute(t,n),Oa.fromBufferAttribute(t,s),a.setScalar(0),a.addScaledVector(Na,r.x),a.addScaledVector(Ua,r.y),a.addScaledVector(Oa,r.z),a}static isFrontFacing(t,e,n,s){return Rn.subVectors(n,e),Qn.subVectors(t,e),Rn.cross(Qn).dot(s)<0}set(t,e,n){return this.a.copy(t),this.b.copy(e),this.c.copy(n),this}setFromPointsAndIndices(t,e,n,s){return this.a.copy(t[e]),this.b.copy(t[n]),this.c.copy(t[s]),this}setFromAttributeAndIndices(t,e,n,s){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,n),this.c.fromBufferAttribute(t,s),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return Rn.subVectors(this.c,this.b),Qn.subVectors(this.a,this.b),Rn.cross(Qn).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return Sn.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return Sn.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,n,s,r){return Sn.getInterpolation(t,this.a,this.b,this.c,e,n,s,r)}containsPoint(t){return Sn.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return Sn.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){const n=this.a,s=this.b,r=this.c;let a,o;es.subVectors(s,n),ns.subVectors(r,n),La.subVectors(t,n);const l=es.dot(La),c=ns.dot(La);if(l<=0&&c<=0)return e.copy(n);Da.subVectors(t,s);const h=es.dot(Da),u=ns.dot(Da);if(h>=0&&u<=h)return e.copy(s);const d=l*u-h*c;if(d<=0&&l>=0&&h<=0)return a=l/(l-h),e.copy(n).addScaledVector(es,a);Fa.subVectors(t,r);const f=es.dot(Fa),g=ns.dot(Fa);if(g>=0&&f<=g)return e.copy(r);const x=f*c-l*g;if(x<=0&&c>=0&&g<=0)return o=c/(c-g),e.copy(n).addScaledVector(ns,o);const m=h*g-f*u;if(m<=0&&u-h>=0&&f-g>=0)return hc.subVectors(r,s),o=(u-h)/(u-h+(f-g)),e.copy(s).addScaledVector(hc,o);const p=1/(m+x+d);return a=x*p,o=d*p,e.copy(n).addScaledVector(es,a).addScaledVector(ns,o)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}}const bh={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},mi={h:0,s:0,l:0},vr={h:0,s:0,l:0};function Ba(i,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?i+(t-i)*6*e:e<1/2?t:e<2/3?i+(t-i)*6*(2/3-e):i}class zt{constructor(t,e,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,n)}set(t,e,n){if(e===void 0&&n===void 0){const s=t;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(t,e,n);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=_n){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,re.colorSpaceToWorking(this,e),this}setRGB(t,e,n,s=re.workingColorSpace){return this.r=t,this.g=e,this.b=n,re.colorSpaceToWorking(this,s),this}setHSL(t,e,n,s=re.workingColorSpace){if(t=Tl(t,1),e=jt(e,0,1),n=jt(n,0,1),e===0)this.r=this.g=this.b=n;else{const r=n<=.5?n*(1+e):n+e-n*e,a=2*n-r;this.r=Ba(a,r,t+1/3),this.g=Ba(a,r,t),this.b=Ba(a,r,t-1/3)}return re.colorSpaceToWorking(this,s),this}setStyle(t,e=_n){function n(r){r!==void 0&&parseFloat(r)<1&&Ut("Color: Alpha component of "+t+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(t)){let r;const a=s[1],o=s[2];switch(a){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,e);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,e);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,e);break;default:Ut("Color: Unknown color model "+t)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(t)){const r=s[1],a=r.length;if(a===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,e);if(a===6)return this.setHex(parseInt(r,16),e);Ut("Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=_n){const n=bh[t.toLowerCase()];return n!==void 0?this.setHex(n,e):Ut("Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=ai(t.r),this.g=ai(t.g),this.b=ai(t.b),this}copyLinearToSRGB(t){return this.r=_s(t.r),this.g=_s(t.g),this.b=_s(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=_n){return re.workingToColorSpace(Xe.copy(this),t),Math.round(jt(Xe.r*255,0,255))*65536+Math.round(jt(Xe.g*255,0,255))*256+Math.round(jt(Xe.b*255,0,255))}getHexString(t=_n){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=re.workingColorSpace){re.workingToColorSpace(Xe.copy(this),e);const n=Xe.r,s=Xe.g,r=Xe.b,a=Math.max(n,s,r),o=Math.min(n,s,r);let l,c;const h=(o+a)/2;if(o===a)l=0,c=0;else{const u=a-o;switch(c=h<=.5?u/(a+o):u/(2-a-o),a){case n:l=(s-r)/u+(s<r?6:0);break;case s:l=(r-n)/u+2;break;case r:l=(n-s)/u+4;break}l/=6}return t.h=l,t.s=c,t.l=h,t}getRGB(t,e=re.workingColorSpace){return re.workingToColorSpace(Xe.copy(this),e),t.r=Xe.r,t.g=Xe.g,t.b=Xe.b,t}getStyle(t=_n){re.workingToColorSpace(Xe.copy(this),t);const e=Xe.r,n=Xe.g,s=Xe.b;return t!==_n?`color(${t} ${e.toFixed(3)} ${n.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(n*255)},${Math.round(s*255)})`}offsetHSL(t,e,n){return this.getHSL(mi),this.setHSL(mi.h+t,mi.s+e,mi.l+n)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,n){return this.r=t.r+(e.r-t.r)*n,this.g=t.g+(e.g-t.g)*n,this.b=t.b+(e.b-t.b)*n,this}lerpHSL(t,e){this.getHSL(mi),t.getHSL(vr);const n=$s(mi.h,vr.h,e),s=$s(mi.s,vr.s,e),r=$s(mi.l,vr.l,e);return this.setHSL(n,s,r),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){const e=this.r,n=this.g,s=this.b,r=t.elements;return this.r=r[0]*e+r[3]*n+r[6]*s,this.g=r[1]*e+r[4]*n+r[7]*s,this.b=r[2]*e+r[5]*n+r[8]*s,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Xe=new zt;zt.NAMES=bh;let Id=0;class bi extends Ts{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Id++}),this.uuid=Xn(),this.name="",this.type="Material",this.blending=xs,this.side=Ei,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=oo,this.blendDst=lo,this.blendEquation=Bi,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new zt(0,0,0),this.blendAlpha=0,this.depthFunc=vs,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Kl,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=qi,this.stencilZFail=qi,this.stencilZPass=qi,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(const e in t){const n=t[e];if(n===void 0){Ut(`Material: parameter '${e}' has value of undefined.`);continue}const s=this[e];if(s===void 0){Ut(`Material: '${e}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(n):s&&s.isVector3&&n&&n.isVector3?s.copy(n):this[e]=n}}toJSON(t){const e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});const n={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(n.sheenColorMap=this.sheenColorMap.toJSON(t).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(n.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(t).uuid),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(t).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(t).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(t).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(t).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(t).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==xs&&(n.blending=this.blending),this.side!==Ei&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==oo&&(n.blendSrc=this.blendSrc),this.blendDst!==lo&&(n.blendDst=this.blendDst),this.blendEquation!==Bi&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==vs&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Kl&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==qi&&(n.stencilFail=this.stencilFail),this.stencilZFail!==qi&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==qi&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.allowOverride===!1&&(n.allowOverride=!1),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function s(r){const a=[];for(const o in r){const l=r[o];delete l.metadata,a.push(l)}return a}if(e){const r=s(t.textures),a=s(t.images);r.length>0&&(n.textures=r),a.length>0&&(n.images=a)}return n}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;const e=t.clippingPlanes;let n=null;if(e!==null){const s=e.length;n=new Array(s);for(let r=0;r!==s;++r)n[r]=e[r].clone()}return this.clippingPlanes=n,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.allowOverride=t.allowOverride,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}}class ke extends bi{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new zt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Fe,this.combine=ha,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}}const Ae=new L,Mr=new dt;let Ld=0;class En{constructor(t,e,n=!1){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:Ld++}),this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=n,this.usage=Qo,this.updateRanges=[],this.gpuType=Nn,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,n){t*=this.itemSize,n*=e.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[t+s]=e.array[n+s];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,n=this.count;e<n;e++)Mr.fromBufferAttribute(this,e),Mr.applyMatrix3(t),this.setXY(e,Mr.x,Mr.y);else if(this.itemSize===3)for(let e=0,n=this.count;e<n;e++)Ae.fromBufferAttribute(this,e),Ae.applyMatrix3(t),this.setXYZ(e,Ae.x,Ae.y,Ae.z);return this}applyMatrix4(t){for(let e=0,n=this.count;e<n;e++)Ae.fromBufferAttribute(this,e),Ae.applyMatrix4(t),this.setXYZ(e,Ae.x,Ae.y,Ae.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)Ae.fromBufferAttribute(this,e),Ae.applyNormalMatrix(t),this.setXYZ(e,Ae.x,Ae.y,Ae.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)Ae.fromBufferAttribute(this,e),Ae.transformDirection(t),this.setXYZ(e,Ae.x,Ae.y,Ae.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let n=this.array[t*this.itemSize+e];return this.normalized&&(n=In(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=fe(n,this.array)),this.array[t*this.itemSize+e]=n,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=In(e,this.array)),e}setX(t,e){return this.normalized&&(e=fe(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=In(e,this.array)),e}setY(t,e){return this.normalized&&(e=fe(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=In(e,this.array)),e}setZ(t,e){return this.normalized&&(e=fe(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=In(e,this.array)),e}setW(t,e){return this.normalized&&(e=fe(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,n){return t*=this.itemSize,this.normalized&&(e=fe(e,this.array),n=fe(n,this.array)),this.array[t+0]=e,this.array[t+1]=n,this}setXYZ(t,e,n,s){return t*=this.itemSize,this.normalized&&(e=fe(e,this.array),n=fe(n,this.array),s=fe(s,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=s,this}setXYZW(t,e,n,s,r){return t*=this.itemSize,this.normalized&&(e=fe(e,this.array),n=fe(n,this.array),s=fe(s,this.array),r=fe(r,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=s,this.array[t+3]=r,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==Qo&&(t.usage=this.usage),t}}class Th extends En{constructor(t,e,n){super(new Uint16Array(t),e,n)}}class Ch extends En{constructor(t,e,n){super(new Uint32Array(t),e,n)}}class Le extends En{constructor(t,e,n){super(new Float32Array(t),e,n)}}let Dd=0;const mn=new ee,ka=new De,is=new L,hn=new Xi,Ds=new Xi,Oe=new L;class an extends Ts{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Dd++}),this.uuid=Xn(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(Sh(t)?Ch:Th)(t,1):this.index=t,this}setIndirect(t,e=0){return this.indirect=t,this.indirectOffset=e,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,n=0){this.groups.push({start:t,count:e,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){const e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const r=new qt().getNormalMatrix(t);n.applyNormalMatrix(r),n.needsUpdate=!0}const s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(t),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return mn.makeRotationFromQuaternion(t),this.applyMatrix4(mn),this}rotateX(t){return mn.makeRotationX(t),this.applyMatrix4(mn),this}rotateY(t){return mn.makeRotationY(t),this.applyMatrix4(mn),this}rotateZ(t){return mn.makeRotationZ(t),this.applyMatrix4(mn),this}translate(t,e,n){return mn.makeTranslation(t,e,n),this.applyMatrix4(mn),this}scale(t,e,n){return mn.makeScale(t,e,n),this.applyMatrix4(mn),this}lookAt(t){return ka.lookAt(t),ka.updateMatrix(),this.applyMatrix4(ka.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(is).negate(),this.translate(is.x,is.y,is.z),this}setFromPoints(t){const e=this.getAttribute("position");if(e===void 0){const n=[];for(let s=0,r=t.length;s<r;s++){const a=t[s];n.push(a.x,a.y,a.z||0)}this.setAttribute("position",new Le(n,3))}else{const n=Math.min(t.length,e.count);for(let s=0;s<n;s++){const r=t[s];e.setXYZ(s,r.x,r.y,r.z||0)}t.length>e.count&&Ut("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),e.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Xi);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){ne("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new L(-1/0,-1/0,-1/0),new L(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let n=0,s=e.length;n<s;n++){const r=e[n];hn.setFromBufferAttribute(r),this.morphTargetsRelative?(Oe.addVectors(this.boundingBox.min,hn.min),this.boundingBox.expandByPoint(Oe),Oe.addVectors(this.boundingBox.max,hn.max),this.boundingBox.expandByPoint(Oe)):(this.boundingBox.expandByPoint(hn.min),this.boundingBox.expandByPoint(hn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&ne('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new or);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){ne("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new L,1/0);return}if(t){const n=this.boundingSphere.center;if(hn.setFromBufferAttribute(t),e)for(let r=0,a=e.length;r<a;r++){const o=e[r];Ds.setFromBufferAttribute(o),this.morphTargetsRelative?(Oe.addVectors(hn.min,Ds.min),hn.expandByPoint(Oe),Oe.addVectors(hn.max,Ds.max),hn.expandByPoint(Oe)):(hn.expandByPoint(Ds.min),hn.expandByPoint(Ds.max))}hn.getCenter(n);let s=0;for(let r=0,a=t.count;r<a;r++)Oe.fromBufferAttribute(t,r),s=Math.max(s,n.distanceToSquared(Oe));if(e)for(let r=0,a=e.length;r<a;r++){const o=e[r],l=this.morphTargetsRelative;for(let c=0,h=o.count;c<h;c++)Oe.fromBufferAttribute(o,c),l&&(is.fromBufferAttribute(t,c),Oe.add(is)),s=Math.max(s,n.distanceToSquared(Oe))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&ne('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){ne("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=e.position,s=e.normal,r=e.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new En(new Float32Array(4*n.count),4));const a=this.getAttribute("tangent"),o=[],l=[];for(let D=0;D<n.count;D++)o[D]=new L,l[D]=new L;const c=new L,h=new L,u=new L,d=new dt,f=new dt,g=new dt,x=new L,m=new L;function p(D,v,y){c.fromBufferAttribute(n,D),h.fromBufferAttribute(n,v),u.fromBufferAttribute(n,y),d.fromBufferAttribute(r,D),f.fromBufferAttribute(r,v),g.fromBufferAttribute(r,y),h.sub(c),u.sub(c),f.sub(d),g.sub(d);const P=1/(f.x*g.y-g.x*f.y);isFinite(P)&&(x.copy(h).multiplyScalar(g.y).addScaledVector(u,-f.y).multiplyScalar(P),m.copy(u).multiplyScalar(f.x).addScaledVector(h,-g.x).multiplyScalar(P),o[D].add(x),o[v].add(x),o[y].add(x),l[D].add(m),l[v].add(m),l[y].add(m))}let S=this.groups;S.length===0&&(S=[{start:0,count:t.count}]);for(let D=0,v=S.length;D<v;++D){const y=S[D],P=y.start,I=y.count;for(let F=P,B=P+I;F<B;F+=3)p(t.getX(F+0),t.getX(F+1),t.getX(F+2))}const b=new L,w=new L,M=new L,C=new L;function A(D){M.fromBufferAttribute(s,D),C.copy(M);const v=o[D];b.copy(v),b.sub(M.multiplyScalar(M.dot(v))).normalize(),w.crossVectors(C,v);const P=w.dot(l[D])<0?-1:1;a.setXYZW(D,b.x,b.y,b.z,P)}for(let D=0,v=S.length;D<v;++D){const y=S[D],P=y.start,I=y.count;for(let F=P,B=P+I;F<B;F+=3)A(t.getX(F+0)),A(t.getX(F+1)),A(t.getX(F+2))}}computeVertexNormals(){const t=this.index,e=this.getAttribute("position");if(e!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new En(new Float32Array(e.count*3),3),this.setAttribute("normal",n);else for(let d=0,f=n.count;d<f;d++)n.setXYZ(d,0,0,0);const s=new L,r=new L,a=new L,o=new L,l=new L,c=new L,h=new L,u=new L;if(t)for(let d=0,f=t.count;d<f;d+=3){const g=t.getX(d+0),x=t.getX(d+1),m=t.getX(d+2);s.fromBufferAttribute(e,g),r.fromBufferAttribute(e,x),a.fromBufferAttribute(e,m),h.subVectors(a,r),u.subVectors(s,r),h.cross(u),o.fromBufferAttribute(n,g),l.fromBufferAttribute(n,x),c.fromBufferAttribute(n,m),o.add(h),l.add(h),c.add(h),n.setXYZ(g,o.x,o.y,o.z),n.setXYZ(x,l.x,l.y,l.z),n.setXYZ(m,c.x,c.y,c.z)}else for(let d=0,f=e.count;d<f;d+=3)s.fromBufferAttribute(e,d+0),r.fromBufferAttribute(e,d+1),a.fromBufferAttribute(e,d+2),h.subVectors(a,r),u.subVectors(s,r),h.cross(u),n.setXYZ(d+0,h.x,h.y,h.z),n.setXYZ(d+1,h.x,h.y,h.z),n.setXYZ(d+2,h.x,h.y,h.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){const t=this.attributes.normal;for(let e=0,n=t.count;e<n;e++)Oe.fromBufferAttribute(t,e),Oe.normalize(),t.setXYZ(e,Oe.x,Oe.y,Oe.z)}toNonIndexed(){function t(o,l){const c=o.array,h=o.itemSize,u=o.normalized,d=new c.constructor(l.length*h);let f=0,g=0;for(let x=0,m=l.length;x<m;x++){o.isInterleavedBufferAttribute?f=l[x]*o.data.stride+o.offset:f=l[x]*h;for(let p=0;p<h;p++)d[g++]=c[f++]}return new En(d,h,u)}if(this.index===null)return Ut("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const e=new an,n=this.index.array,s=this.attributes;for(const o in s){const l=s[o],c=t(l,n);e.setAttribute(o,c)}const r=this.morphAttributes;for(const o in r){const l=[],c=r[o];for(let h=0,u=c.length;h<u;h++){const d=c[h],f=t(d,n);l.push(f)}e.morphAttributes[o]=l}e.morphTargetsRelative=this.morphTargetsRelative;const a=this.groups;for(let o=0,l=a.length;o<l;o++){const c=a[o];e.addGroup(c.start,c.count,c.materialIndex)}return e}toJSON(){const t={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(t[c]=l[c]);return t}t.data={attributes:{}};const e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});const n=this.attributes;for(const l in n){const c=n[l];t.data.attributes[l]=c.toJSON(t.data)}const s={};let r=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],h=[];for(let u=0,d=c.length;u<d;u++){const f=c[u];h.push(f.toJSON(t.data))}h.length>0&&(s[l]=h,r=!0)}r&&(t.data.morphAttributes=s,t.data.morphTargetsRelative=this.morphTargetsRelative);const a=this.groups;a.length>0&&(t.data.groups=JSON.parse(JSON.stringify(a)));const o=this.boundingSphere;return o!==null&&(t.data.boundingSphere=o.toJSON()),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const e={};this.name=t.name;const n=t.index;n!==null&&this.setIndex(n.clone());const s=t.attributes;for(const c in s){const h=s[c];this.setAttribute(c,h.clone(e))}const r=t.morphAttributes;for(const c in r){const h=[],u=r[c];for(let d=0,f=u.length;d<f;d++)h.push(u[d].clone(e));this.morphAttributes[c]=h}this.morphTargetsRelative=t.morphTargetsRelative;const a=t.groups;for(let c=0,h=a.length;c<h;c++){const u=a[c];this.addGroup(u.start,u.count,u.materialIndex)}const o=t.boundingBox;o!==null&&(this.boundingBox=o.clone());const l=t.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const uc=new ee,Pi=new Ed,yr=new or,dc=new L,Sr=new L,wr=new L,Er=new L,za=new L,br=new L,fc=new L,Tr=new L;class j extends De{constructor(t=new an,e=new ke){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){const e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){const s=e[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){const o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}getVertexPosition(t,e){const n=this.geometry,s=n.attributes.position,r=n.morphAttributes.position,a=n.morphTargetsRelative;e.fromBufferAttribute(s,t);const o=this.morphTargetInfluences;if(r&&o){br.set(0,0,0);for(let l=0,c=r.length;l<c;l++){const h=o[l],u=r[l];h!==0&&(za.fromBufferAttribute(u,t),a?br.addScaledVector(za,h):br.addScaledVector(za.sub(e),h))}e.add(br)}return e}raycast(t,e){const n=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),yr.copy(n.boundingSphere),yr.applyMatrix4(r),Pi.copy(t.ray).recast(t.near),!(yr.containsPoint(Pi.origin)===!1&&(Pi.intersectSphere(yr,dc)===null||Pi.origin.distanceToSquared(dc)>(t.far-t.near)**2))&&(uc.copy(r).invert(),Pi.copy(t.ray).applyMatrix4(uc),!(n.boundingBox!==null&&Pi.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(t,e,Pi)))}_computeIntersections(t,e,n){let s;const r=this.geometry,a=this.material,o=r.index,l=r.attributes.position,c=r.attributes.uv,h=r.attributes.uv1,u=r.attributes.normal,d=r.groups,f=r.drawRange;if(o!==null)if(Array.isArray(a))for(let g=0,x=d.length;g<x;g++){const m=d[g],p=a[m.materialIndex],S=Math.max(m.start,f.start),b=Math.min(o.count,Math.min(m.start+m.count,f.start+f.count));for(let w=S,M=b;w<M;w+=3){const C=o.getX(w),A=o.getX(w+1),D=o.getX(w+2);s=Cr(this,p,t,n,c,h,u,C,A,D),s&&(s.faceIndex=Math.floor(w/3),s.face.materialIndex=m.materialIndex,e.push(s))}}else{const g=Math.max(0,f.start),x=Math.min(o.count,f.start+f.count);for(let m=g,p=x;m<p;m+=3){const S=o.getX(m),b=o.getX(m+1),w=o.getX(m+2);s=Cr(this,a,t,n,c,h,u,S,b,w),s&&(s.faceIndex=Math.floor(m/3),e.push(s))}}else if(l!==void 0)if(Array.isArray(a))for(let g=0,x=d.length;g<x;g++){const m=d[g],p=a[m.materialIndex],S=Math.max(m.start,f.start),b=Math.min(l.count,Math.min(m.start+m.count,f.start+f.count));for(let w=S,M=b;w<M;w+=3){const C=w,A=w+1,D=w+2;s=Cr(this,p,t,n,c,h,u,C,A,D),s&&(s.faceIndex=Math.floor(w/3),s.face.materialIndex=m.materialIndex,e.push(s))}}else{const g=Math.max(0,f.start),x=Math.min(l.count,f.start+f.count);for(let m=g,p=x;m<p;m+=3){const S=m,b=m+1,w=m+2;s=Cr(this,a,t,n,c,h,u,S,b,w),s&&(s.faceIndex=Math.floor(m/3),e.push(s))}}}}function Fd(i,t,e,n,s,r,a,o){let l;if(t.side===rn?l=n.intersectTriangle(a,r,s,!0,o):l=n.intersectTriangle(s,r,a,t.side===Ei,o),l===null)return null;Tr.copy(o),Tr.applyMatrix4(i.matrixWorld);const c=e.ray.origin.distanceTo(Tr);return c<e.near||c>e.far?null:{distance:c,point:Tr.clone(),object:i}}function Cr(i,t,e,n,s,r,a,o,l,c){i.getVertexPosition(o,Sr),i.getVertexPosition(l,wr),i.getVertexPosition(c,Er);const h=Fd(i,t,e,n,Sr,wr,Er,fc);if(h){const u=new L;Sn.getBarycoord(fc,Sr,wr,Er,u),s&&(h.uv=Sn.getInterpolatedAttribute(s,o,l,c,u,new dt)),r&&(h.uv1=Sn.getInterpolatedAttribute(r,o,l,c,u,new dt)),a&&(h.normal=Sn.getInterpolatedAttribute(a,o,l,c,u,new L),h.normal.dot(n.direction)>0&&h.normal.multiplyScalar(-1));const d={a:o,b:l,c,normal:new L,materialIndex:0};Sn.getNormal(Sr,wr,Er,d.normal),h.face=d,h.barycoord=u}return h}class se extends an{constructor(t=1,e=1,n=1,s=1,r=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:n,widthSegments:s,heightSegments:r,depthSegments:a};const o=this;s=Math.floor(s),r=Math.floor(r),a=Math.floor(a);const l=[],c=[],h=[],u=[];let d=0,f=0;g("z","y","x",-1,-1,n,e,t,a,r,0),g("z","y","x",1,-1,n,e,-t,a,r,1),g("x","z","y",1,1,t,n,e,s,a,2),g("x","z","y",1,-1,t,n,-e,s,a,3),g("x","y","z",1,-1,t,e,n,s,r,4),g("x","y","z",-1,-1,t,e,-n,s,r,5),this.setIndex(l),this.setAttribute("position",new Le(c,3)),this.setAttribute("normal",new Le(h,3)),this.setAttribute("uv",new Le(u,2));function g(x,m,p,S,b,w,M,C,A,D,v){const y=w/A,P=M/D,I=w/2,F=M/2,B=C/2,k=A+1,H=D+1;let z=0,$=0;const ut=new L;for(let st=0;st<H;st++){const rt=st*P-F;for(let kt=0;kt<k;kt++){const Nt=kt*y-I;ut[x]=Nt*S,ut[m]=rt*b,ut[p]=B,c.push(ut.x,ut.y,ut.z),ut[x]=0,ut[m]=0,ut[p]=C>0?1:-1,h.push(ut.x,ut.y,ut.z),u.push(kt/A),u.push(1-st/D),z+=1}}for(let st=0;st<D;st++)for(let rt=0;rt<A;rt++){const kt=d+rt+k*st,Nt=d+rt+k*(st+1),Kt=d+(rt+1)+k*(st+1),ie=d+(rt+1)+k*st;l.push(kt,Nt,ie),l.push(Nt,Kt,ie),$+=6}o.addGroup(f,$,v),f+=$,d+=z}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new se(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}}function ws(i){const t={};for(const e in i){t[e]={};for(const n in i[e]){const s=i[e][n];s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)?s.isRenderTargetTexture?(Ut("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][n]=null):t[e][n]=s.clone():Array.isArray(s)?t[e][n]=s.slice():t[e][n]=s}}return t}function je(i){const t={};for(let e=0;e<i.length;e++){const n=ws(i[e]);for(const s in n)t[s]=n[s]}return t}function Nd(i){const t=[];for(let e=0;e<i.length;e++)t.push(i[e].clone());return t}function Ah(i){const t=i.getRenderTarget();return t===null?i.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:re.workingColorSpace}const Ud={clone:ws,merge:je};var Od=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Bd=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Tn extends bi{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Od,this.fragmentShader=Bd,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=ws(t.uniforms),this.uniformsGroups=Nd(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this.defaultAttributeValues=Object.assign({},t.defaultAttributeValues),this.index0AttributeName=t.index0AttributeName,this.uniformsNeedUpdate=t.uniformsNeedUpdate,this}toJSON(t){const e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(const s in this.uniforms){const a=this.uniforms[s].value;a&&a.isTexture?e.uniforms[s]={type:"t",value:a.toJSON(t).uuid}:a&&a.isColor?e.uniforms[s]={type:"c",value:a.getHex()}:a&&a.isVector2?e.uniforms[s]={type:"v2",value:a.toArray()}:a&&a.isVector3?e.uniforms[s]={type:"v3",value:a.toArray()}:a&&a.isVector4?e.uniforms[s]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?e.uniforms[s]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?e.uniforms[s]={type:"m4",value:a.toArray()}:e.uniforms[s]={value:a}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;const n={};for(const s in this.extensions)this.extensions[s]===!0&&(n[s]=!0);return Object.keys(n).length>0&&(e.extensions=n),e}}class Rh extends De{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new ee,this.projectionMatrix=new ee,this.projectionMatrixInverse=new ee,this.coordinateSystem=Gn,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(t,e){super.updateWorldMatrix(t,e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const gi=new L,pc=new dt,mc=new dt;class yn extends Rh{constructor(t=50,e=1,n=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=n,this.far=s,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){const e=.5*this.getFilmHeight()/t;this.fov=er*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){const t=Math.tan(Zs*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return er*2*Math.atan(Math.tan(Zs*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,n){gi.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),e.set(gi.x,gi.y).multiplyScalar(-t/gi.z),gi.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(gi.x,gi.y).multiplyScalar(-t/gi.z)}getViewSize(t,e){return this.getViewBounds(t,pc,mc),e.subVectors(mc,pc)}setViewOffset(t,e,n,s,r,a){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=this.near;let e=t*Math.tan(Zs*.5*this.fov)/this.zoom,n=2*e,s=this.aspect*n,r=-.5*s;const a=this.view;if(this.view!==null&&this.view.enabled){const l=a.fullWidth,c=a.fullHeight;r+=a.offsetX*s/l,e-=a.offsetY*n/c,s*=a.width/l,n*=a.height/c}const o=this.filmOffset;o!==0&&(r+=t*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,e,e-n,t,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}}const ss=-90,rs=1;class kd extends De{constructor(t,e,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;const s=new yn(ss,rs,t,e);s.layers=this.layers,this.add(s);const r=new yn(ss,rs,t,e);r.layers=this.layers,this.add(r);const a=new yn(ss,rs,t,e);a.layers=this.layers,this.add(a);const o=new yn(ss,rs,t,e);o.layers=this.layers,this.add(o);const l=new yn(ss,rs,t,e);l.layers=this.layers,this.add(l);const c=new yn(ss,rs,t,e);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const t=this.coordinateSystem,e=this.children.concat(),[n,s,r,a,o,l]=e;for(const c of e)this.remove(c);if(t===Gn)n.up.set(0,1,0),n.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(t===Jr)n.up.set(0,-1,0),n.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(const c of e)this.add(c),c.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();const{renderTarget:n,activeMipmapLevel:s}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());const[r,a,o,l,c,h]=this.children,u=t.getRenderTarget(),d=t.getActiveCubeFace(),f=t.getActiveMipmapLevel(),g=t.xr.enabled;t.xr.enabled=!1;const x=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,t.setRenderTarget(n,0,s),t.render(e,r),t.setRenderTarget(n,1,s),t.render(e,a),t.setRenderTarget(n,2,s),t.render(e,o),t.setRenderTarget(n,3,s),t.render(e,l),t.setRenderTarget(n,4,s),t.render(e,c),n.texture.generateMipmaps=x,t.setRenderTarget(n,5,s),t.render(e,h),t.setRenderTarget(u,d,f),t.xr.enabled=g,n.texture.needsPMREMUpdate=!0}}class Ph extends Ze{constructor(t=[],e=Hi,n,s,r,a,o,l,c,h){super(t,e,n,s,r,a,o,l,c,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}}class Ih extends Yn{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;const n={width:t,height:t,depth:1},s=[n,n,n,n,n,n];this.texture=new Ph(s),this._setTextureOptions(e),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},s=new se(5,5,5),r=new Tn({name:"CubemapFromEquirect",uniforms:ws(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:rn,blending:ri});r.uniforms.tEquirect.value=e;const a=new j(s,r),o=e.minFilter;return e.minFilter===zi&&(e.minFilter=ze),new kd(1,10,this).update(t,a),e.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(t,e=!0,n=!0,s=!0){const r=t.getRenderTarget();for(let a=0;a<6;a++)t.setRenderTarget(this,a),t.clear(e,n,s);t.setRenderTarget(r)}}class Pe extends De{constructor(){super(),this.isGroup=!0,this.type="Group"}}const zd={type:"move"};class Ga{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Pe,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Pe,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new L,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new L),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Pe,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new L,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new L),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){const e=this._hand;if(e)for(const n of t.hand.values())this._getHandJoint(e,n)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,n){let s=null,r=null,a=null;const o=this._targetRay,l=this._grip,c=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(c&&t.hand){a=!0;for(const x of t.hand.values()){const m=e.getJointPose(x,n),p=this._getHandJoint(c,x);m!==null&&(p.matrix.fromArray(m.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,p.jointRadius=m.radius),p.visible=m!==null}const h=c.joints["index-finger-tip"],u=c.joints["thumb-tip"],d=h.position.distanceTo(u.position),f=.02,g=.005;c.inputState.pinching&&d>f+g?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!c.inputState.pinching&&d<=f-g&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else l!==null&&t.gripSpace&&(r=e.getPose(t.gripSpace,n),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1));o!==null&&(s=e.getPose(t.targetRaySpace,n),s===null&&r!==null&&(s=r),s!==null&&(o.matrix.fromArray(s.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,s.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(s.linearVelocity)):o.hasLinearVelocity=!1,s.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(s.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(zd)))}return o!==null&&(o.visible=s!==null),l!==null&&(l.visible=r!==null),c!==null&&(c.visible=a!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){const n=new Pe;n.matrixAutoUpdate=!1,n.visible=!1,t.joints[e.jointName]=n,t.add(n)}return t.joints[e.jointName]}}class Gd extends De{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Fe,this.environmentIntensity=1,this.environmentRotation=new Fe,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){const e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(e.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(e.object.backgroundIntensity=this.backgroundIntensity),e.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(e.object.environmentIntensity=this.environmentIntensity),e.object.environmentRotation=this.environmentRotation.toArray(),e}}class Hd{constructor(t,e){this.isInterleavedBuffer=!0,this.array=t,this.stride=e,this.count=t!==void 0?t.length/e:0,this.usage=Qo,this.updateRanges=[],this.version=0,this.uuid=Xn()}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.array=new t.array.constructor(t.array),this.count=t.count,this.stride=t.stride,this.usage=t.usage,this}copyAt(t,e,n){t*=this.stride,n*=e.stride;for(let s=0,r=this.stride;s<r;s++)this.array[t+s]=e.array[n+s];return this}set(t,e=0){return this.array.set(t,e),this}clone(t){t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Xn()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);const e=new this.array.constructor(t.arrayBuffers[this.array.buffer._uuid]),n=new this.constructor(e,this.stride);return n.setUsage(this.usage),n}onUpload(t){return this.onUploadCallback=t,this}toJSON(t){return t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Xn()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}}const Ke=new L;class ta{constructor(t,e,n,s=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=t,this.itemSize=e,this.offset=n,this.normalized=s}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(t){this.data.needsUpdate=t}applyMatrix4(t){for(let e=0,n=this.data.count;e<n;e++)Ke.fromBufferAttribute(this,e),Ke.applyMatrix4(t),this.setXYZ(e,Ke.x,Ke.y,Ke.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)Ke.fromBufferAttribute(this,e),Ke.applyNormalMatrix(t),this.setXYZ(e,Ke.x,Ke.y,Ke.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)Ke.fromBufferAttribute(this,e),Ke.transformDirection(t),this.setXYZ(e,Ke.x,Ke.y,Ke.z);return this}getComponent(t,e){let n=this.array[t*this.data.stride+this.offset+e];return this.normalized&&(n=In(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=fe(n,this.array)),this.data.array[t*this.data.stride+this.offset+e]=n,this}setX(t,e){return this.normalized&&(e=fe(e,this.array)),this.data.array[t*this.data.stride+this.offset]=e,this}setY(t,e){return this.normalized&&(e=fe(e,this.array)),this.data.array[t*this.data.stride+this.offset+1]=e,this}setZ(t,e){return this.normalized&&(e=fe(e,this.array)),this.data.array[t*this.data.stride+this.offset+2]=e,this}setW(t,e){return this.normalized&&(e=fe(e,this.array)),this.data.array[t*this.data.stride+this.offset+3]=e,this}getX(t){let e=this.data.array[t*this.data.stride+this.offset];return this.normalized&&(e=In(e,this.array)),e}getY(t){let e=this.data.array[t*this.data.stride+this.offset+1];return this.normalized&&(e=In(e,this.array)),e}getZ(t){let e=this.data.array[t*this.data.stride+this.offset+2];return this.normalized&&(e=In(e,this.array)),e}getW(t){let e=this.data.array[t*this.data.stride+this.offset+3];return this.normalized&&(e=In(e,this.array)),e}setXY(t,e,n){return t=t*this.data.stride+this.offset,this.normalized&&(e=fe(e,this.array),n=fe(n,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=n,this}setXYZ(t,e,n,s){return t=t*this.data.stride+this.offset,this.normalized&&(e=fe(e,this.array),n=fe(n,this.array),s=fe(s,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=n,this.data.array[t+2]=s,this}setXYZW(t,e,n,s,r){return t=t*this.data.stride+this.offset,this.normalized&&(e=fe(e,this.array),n=fe(n,this.array),s=fe(s,this.array),r=fe(r,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=n,this.data.array[t+2]=s,this.data.array[t+3]=r,this}clone(t){if(t===void 0){Qr("InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");const e=[];for(let n=0;n<this.count;n++){const s=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)e.push(this.data.array[s+r])}return new En(new this.array.constructor(e),this.itemSize,this.normalized)}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.clone(t)),new ta(t.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(t){if(t===void 0){Qr("InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");const e=[];for(let n=0;n<this.count;n++){const s=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)e.push(this.data.array[s+r])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:e,normalized:this.normalized}}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.toJSON(t)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}}class ea extends bi{constructor(t){super(),this.isSpriteMaterial=!0,this.type="SpriteMaterial",this.color=new zt(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.rotation=t.rotation,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}}let as;const Fs=new L,os=new L,ls=new L,cs=new dt,Ns=new dt,Lh=new ee,Ar=new L,Us=new L,Rr=new L,gc=new dt,Ha=new dt,xc=new dt;class tl extends De{constructor(t=new ea){if(super(),this.isSprite=!0,this.type="Sprite",as===void 0){as=new an;const e=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),n=new Hd(e,5);as.setIndex([0,1,2,0,2,3]),as.setAttribute("position",new ta(n,3,0,!1)),as.setAttribute("uv",new ta(n,2,3,!1))}this.geometry=as,this.material=t,this.center=new dt(.5,.5),this.count=1}raycast(t,e){t.camera===null&&ne('Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),os.setFromMatrixScale(this.matrixWorld),Lh.copy(t.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(t.camera.matrixWorldInverse,this.matrixWorld),ls.setFromMatrixPosition(this.modelViewMatrix),t.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&os.multiplyScalar(-ls.z);const n=this.material.rotation;let s,r;n!==0&&(r=Math.cos(n),s=Math.sin(n));const a=this.center;Pr(Ar.set(-.5,-.5,0),ls,a,os,s,r),Pr(Us.set(.5,-.5,0),ls,a,os,s,r),Pr(Rr.set(.5,.5,0),ls,a,os,s,r),gc.set(0,0),Ha.set(1,0),xc.set(1,1);let o=t.ray.intersectTriangle(Ar,Us,Rr,!1,Fs);if(o===null&&(Pr(Us.set(-.5,.5,0),ls,a,os,s,r),Ha.set(0,1),o=t.ray.intersectTriangle(Ar,Rr,Us,!1,Fs),o===null))return;const l=t.ray.origin.distanceTo(Fs);l<t.near||l>t.far||e.push({distance:l,point:Fs.clone(),uv:Sn.getInterpolation(Fs,Ar,Us,Rr,gc,Ha,xc,new dt),face:null,object:this})}copy(t,e){return super.copy(t,e),t.center!==void 0&&this.center.copy(t.center),this.material=t.material,this}}function Pr(i,t,e,n,s,r){cs.subVectors(i,e).addScalar(.5).multiply(n),s!==void 0?(Ns.x=r*cs.x-s*cs.y,Ns.y=s*cs.x+r*cs.y):Ns.copy(cs),i.copy(t),i.x+=Ns.x,i.y+=Ns.y,i.applyMatrix4(Lh)}class Dh extends Ze{constructor(t=null,e=1,n=1,s,r,a,o,l,c=Ve,h=Ve,u,d){super(null,a,o,l,c,h,s,r,u,d),this.isDataTexture=!0,this.image={data:t,width:e,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class _c extends En{constructor(t,e,n,s=1){super(t,e,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=s}copy(t){return super.copy(t),this.meshPerAttribute=t.meshPerAttribute,this}toJSON(){const t=super.toJSON();return t.meshPerAttribute=this.meshPerAttribute,t.isInstancedBufferAttribute=!0,t}}const hs=new ee,vc=new ee,Ir=[],Mc=new Xi,Vd=new ee,Os=new j,Bs=new or;class Si extends j{constructor(t,e,n){super(t,e),this.isInstancedMesh=!0,this.instanceMatrix=new _c(new Float32Array(n*16),16),this.instanceColor=null,this.morphTexture=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let s=0;s<n;s++)this.setMatrixAt(s,Vd)}computeBoundingBox(){const t=this.geometry,e=this.count;this.boundingBox===null&&(this.boundingBox=new Xi),t.boundingBox===null&&t.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<e;n++)this.getMatrixAt(n,hs),Mc.copy(t.boundingBox).applyMatrix4(hs),this.boundingBox.union(Mc)}computeBoundingSphere(){const t=this.geometry,e=this.count;this.boundingSphere===null&&(this.boundingSphere=new or),t.boundingSphere===null&&t.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<e;n++)this.getMatrixAt(n,hs),Bs.copy(t.boundingSphere).applyMatrix4(hs),this.boundingSphere.union(Bs)}copy(t,e){return super.copy(t,e),this.instanceMatrix.copy(t.instanceMatrix),t.morphTexture!==null&&(this.morphTexture=t.morphTexture.clone()),t.instanceColor!==null&&(this.instanceColor=t.instanceColor.clone()),this.count=t.count,t.boundingBox!==null&&(this.boundingBox=t.boundingBox.clone()),t.boundingSphere!==null&&(this.boundingSphere=t.boundingSphere.clone()),this}getColorAt(t,e){e.fromArray(this.instanceColor.array,t*3)}getMatrixAt(t,e){e.fromArray(this.instanceMatrix.array,t*16)}getMorphAt(t,e){const n=e.morphTargetInfluences,s=this.morphTexture.source.data.data,r=n.length+1,a=t*r+1;for(let o=0;o<n.length;o++)n[o]=s[a+o]}raycast(t,e){const n=this.matrixWorld,s=this.count;if(Os.geometry=this.geometry,Os.material=this.material,Os.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Bs.copy(this.boundingSphere),Bs.applyMatrix4(n),t.ray.intersectsSphere(Bs)!==!1))for(let r=0;r<s;r++){this.getMatrixAt(r,hs),vc.multiplyMatrices(n,hs),Os.matrixWorld=vc,Os.raycast(t,Ir);for(let a=0,o=Ir.length;a<o;a++){const l=Ir[a];l.instanceId=r,l.object=this,e.push(l)}Ir.length=0}}setColorAt(t,e){this.instanceColor===null&&(this.instanceColor=new _c(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),e.toArray(this.instanceColor.array,t*3)}setMatrixAt(t,e){e.toArray(this.instanceMatrix.array,t*16)}setMorphAt(t,e){const n=e.morphTargetInfluences,s=n.length+1;this.morphTexture===null&&(this.morphTexture=new Dh(new Float32Array(s*this.count),s,this.count,Ml,Nn));const r=this.morphTexture.source.data.data;let a=0;for(let c=0;c<n.length;c++)a+=n[c];const o=this.geometry.morphTargetsRelative?1:1-a,l=s*t;r[l]=o,r.set(n,l+1)}updateMorphTargets(){}dispose(){this.dispatchEvent({type:"dispose"}),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null)}}const Va=new L,Wd=new L,Xd=new qt;class Oi{constructor(t=new L(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,n,s){return this.normal.set(t,e,n),this.constant=s,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,n){const s=Va.subVectors(n,e).cross(Wd.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(s,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){const t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e){const n=t.delta(Va),s=this.normal.dot(n);if(s===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;const r=-(t.start.dot(this.normal)+this.constant)/s;return r<0||r>1?null:e.copy(t.start).addScaledVector(n,r)}intersectsLine(t){const e=this.distanceToPoint(t.start),n=this.distanceToPoint(t.end);return e<0&&n>0||n<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){const n=e||Xd.getNormalMatrix(t),s=this.coplanarPoint(Va).applyMatrix4(t),r=this.normal.applyMatrix3(n).normalize();return this.constant=-s.dot(r),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Ii=new or,Yd=new dt(.5,.5),Lr=new L;class Al{constructor(t=new Oi,e=new Oi,n=new Oi,s=new Oi,r=new Oi,a=new Oi){this.planes=[t,e,n,s,r,a]}set(t,e,n,s,r,a){const o=this.planes;return o[0].copy(t),o[1].copy(e),o[2].copy(n),o[3].copy(s),o[4].copy(r),o[5].copy(a),this}copy(t){const e=this.planes;for(let n=0;n<6;n++)e[n].copy(t.planes[n]);return this}setFromProjectionMatrix(t,e=Gn,n=!1){const s=this.planes,r=t.elements,a=r[0],o=r[1],l=r[2],c=r[3],h=r[4],u=r[5],d=r[6],f=r[7],g=r[8],x=r[9],m=r[10],p=r[11],S=r[12],b=r[13],w=r[14],M=r[15];if(s[0].setComponents(c-a,f-h,p-g,M-S).normalize(),s[1].setComponents(c+a,f+h,p+g,M+S).normalize(),s[2].setComponents(c+o,f+u,p+x,M+b).normalize(),s[3].setComponents(c-o,f-u,p-x,M-b).normalize(),n)s[4].setComponents(l,d,m,w).normalize(),s[5].setComponents(c-l,f-d,p-m,M-w).normalize();else if(s[4].setComponents(c-l,f-d,p-m,M-w).normalize(),e===Gn)s[5].setComponents(c+l,f+d,p+m,M+w).normalize();else if(e===Jr)s[5].setComponents(l,d,m,w).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),Ii.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{const e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),Ii.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(Ii)}intersectsSprite(t){Ii.center.set(0,0,0);const e=Yd.distanceTo(t.center);return Ii.radius=.7071067811865476+e,Ii.applyMatrix4(t.matrixWorld),this.intersectsSphere(Ii)}intersectsSphere(t){const e=this.planes,n=t.center,s=-t.radius;for(let r=0;r<6;r++)if(e[r].distanceToPoint(n)<s)return!1;return!0}intersectsBox(t){const e=this.planes;for(let n=0;n<6;n++){const s=e[n];if(Lr.x=s.normal.x>0?t.max.x:t.min.x,Lr.y=s.normal.y>0?t.max.y:t.min.y,Lr.z=s.normal.z>0?t.max.z:t.min.z,s.distanceToPoint(Lr)<0)return!1}return!0}containsPoint(t){const e=this.planes;for(let n=0;n<6;n++)if(e[n].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class Fh extends Ze{constructor(t,e,n,s,r,a,o,l,c){super(t,e,n,s,r,a,o,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}}class nr extends Ze{constructor(t,e,n=qn,s,r,a,o=Ve,l=Ve,c,h=ci,u=1){if(h!==ci&&h!==Gi)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const d={width:t,height:e,depth:u};super(d,s,r,a,o,l,h,n,c),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.source=new Cl(Object.assign({},t.image)),this.compareFunction=t.compareFunction,this}toJSON(t){const e=super.toJSON(t);return this.compareFunction!==null&&(e.compareFunction=this.compareFunction),e}}class qd extends nr{constructor(t,e=qn,n=Hi,s,r,a=Ve,o=Ve,l,c=ci){const h={width:t,height:t,depth:1},u=[h,h,h,h,h,h];super(t,t,e,n,s,r,a,o,l,c),this.image=u,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(t){this.image=t}}class Nh extends Ze{constructor(t=null){super(),this.sourceTexture=t,this.isExternalTexture=!0}copy(t){return super.copy(t),this.sourceTexture=t.sourceTexture,this}}class Ye extends an{constructor(t=1,e=1,n=1,s=32,r=1,a=!1,o=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:t,radiusBottom:e,height:n,radialSegments:s,heightSegments:r,openEnded:a,thetaStart:o,thetaLength:l};const c=this;s=Math.floor(s),r=Math.floor(r);const h=[],u=[],d=[],f=[];let g=0;const x=[],m=n/2;let p=0;S(),a===!1&&(t>0&&b(!0),e>0&&b(!1)),this.setIndex(h),this.setAttribute("position",new Le(u,3)),this.setAttribute("normal",new Le(d,3)),this.setAttribute("uv",new Le(f,2));function S(){const w=new L,M=new L;let C=0;const A=(e-t)/n;for(let D=0;D<=r;D++){const v=[],y=D/r,P=y*(e-t)+t;for(let I=0;I<=s;I++){const F=I/s,B=F*l+o,k=Math.sin(B),H=Math.cos(B);M.x=P*k,M.y=-y*n+m,M.z=P*H,u.push(M.x,M.y,M.z),w.set(k,A,H).normalize(),d.push(w.x,w.y,w.z),f.push(F,1-y),v.push(g++)}x.push(v)}for(let D=0;D<s;D++)for(let v=0;v<r;v++){const y=x[v][D],P=x[v+1][D],I=x[v+1][D+1],F=x[v][D+1];(t>0||v!==0)&&(h.push(y,P,F),C+=3),(e>0||v!==r-1)&&(h.push(P,I,F),C+=3)}c.addGroup(p,C,0),p+=C}function b(w){const M=g,C=new dt,A=new L;let D=0;const v=w===!0?t:e,y=w===!0?1:-1;for(let I=1;I<=s;I++)u.push(0,m*y,0),d.push(0,y,0),f.push(.5,.5),g++;const P=g;for(let I=0;I<=s;I++){const B=I/s*l+o,k=Math.cos(B),H=Math.sin(B);A.x=v*H,A.y=m*y,A.z=v*k,u.push(A.x,A.y,A.z),d.push(0,y,0),C.x=k*.5+.5,C.y=H*.5*y+.5,f.push(C.x,C.y),g++}for(let I=0;I<s;I++){const F=M+I,B=P+I;w===!0?h.push(B,B+1,F):h.push(B+1,B,F),D+=3}c.addGroup(p,D,w===!0?1:2),p+=D}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Ye(t.radiusTop,t.radiusBottom,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}}class tn extends Ye{constructor(t=1,e=1,n=32,s=1,r=!1,a=0,o=Math.PI*2){super(0,t,e,n,s,r,a,o),this.type="ConeGeometry",this.parameters={radius:t,height:e,radialSegments:n,heightSegments:s,openEnded:r,thetaStart:a,thetaLength:o}}static fromJSON(t){return new tn(t.radius,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}}class Zn{constructor(){this.type="Curve",this.arcLengthDivisions=200,this.needsUpdate=!1,this.cacheArcLengths=null}getPoint(){Ut("Curve: .getPoint() not implemented.")}getPointAt(t,e){const n=this.getUtoTmapping(t);return this.getPoint(n,e)}getPoints(t=5){const e=[];for(let n=0;n<=t;n++)e.push(this.getPoint(n/t));return e}getSpacedPoints(t=5){const e=[];for(let n=0;n<=t;n++)e.push(this.getPointAt(n/t));return e}getLength(){const t=this.getLengths();return t[t.length-1]}getLengths(t=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===t+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;const e=[];let n,s=this.getPoint(0),r=0;e.push(0);for(let a=1;a<=t;a++)n=this.getPoint(a/t),r+=n.distanceTo(s),e.push(r),s=n;return this.cacheArcLengths=e,e}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(t,e=null){const n=this.getLengths();let s=0;const r=n.length;let a;e?a=e:a=t*n[r-1];let o=0,l=r-1,c;for(;o<=l;)if(s=Math.floor(o+(l-o)/2),c=n[s]-a,c<0)o=s+1;else if(c>0)l=s-1;else{l=s;break}if(s=l,n[s]===a)return s/(r-1);const h=n[s],d=n[s+1]-h,f=(a-h)/d;return(s+f)/(r-1)}getTangent(t,e){let s=t-1e-4,r=t+1e-4;s<0&&(s=0),r>1&&(r=1);const a=this.getPoint(s),o=this.getPoint(r),l=e||(a.isVector2?new dt:new L);return l.copy(o).sub(a).normalize(),l}getTangentAt(t,e){const n=this.getUtoTmapping(t);return this.getTangent(n,e)}computeFrenetFrames(t,e=!1){const n=new L,s=[],r=[],a=[],o=new L,l=new ee;for(let f=0;f<=t;f++){const g=f/t;s[f]=this.getTangentAt(g,new L)}r[0]=new L,a[0]=new L;let c=Number.MAX_VALUE;const h=Math.abs(s[0].x),u=Math.abs(s[0].y),d=Math.abs(s[0].z);h<=c&&(c=h,n.set(1,0,0)),u<=c&&(c=u,n.set(0,1,0)),d<=c&&n.set(0,0,1),o.crossVectors(s[0],n).normalize(),r[0].crossVectors(s[0],o),a[0].crossVectors(s[0],r[0]);for(let f=1;f<=t;f++){if(r[f]=r[f-1].clone(),a[f]=a[f-1].clone(),o.crossVectors(s[f-1],s[f]),o.length()>Number.EPSILON){o.normalize();const g=Math.acos(jt(s[f-1].dot(s[f]),-1,1));r[f].applyMatrix4(l.makeRotationAxis(o,g))}a[f].crossVectors(s[f],r[f])}if(e===!0){let f=Math.acos(jt(r[0].dot(r[t]),-1,1));f/=t,s[0].dot(o.crossVectors(r[0],r[t]))>0&&(f=-f);for(let g=1;g<=t;g++)r[g].applyMatrix4(l.makeRotationAxis(s[g],f*g)),a[g].crossVectors(s[g],r[g])}return{tangents:s,normals:r,binormals:a}}clone(){return new this.constructor().copy(this)}copy(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}toJSON(){const t={metadata:{version:4.7,type:"Curve",generator:"Curve.toJSON"}};return t.arcLengthDivisions=this.arcLengthDivisions,t.type=this.type,t}fromJSON(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}}class Rl extends Zn{constructor(t=0,e=0,n=1,s=1,r=0,a=Math.PI*2,o=!1,l=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=t,this.aY=e,this.xRadius=n,this.yRadius=s,this.aStartAngle=r,this.aEndAngle=a,this.aClockwise=o,this.aRotation=l}getPoint(t,e=new dt){const n=e,s=Math.PI*2;let r=this.aEndAngle-this.aStartAngle;const a=Math.abs(r)<Number.EPSILON;for(;r<0;)r+=s;for(;r>s;)r-=s;r<Number.EPSILON&&(a?r=0:r=s),this.aClockwise===!0&&!a&&(r===s?r=-s:r=r-s);const o=this.aStartAngle+t*r;let l=this.aX+this.xRadius*Math.cos(o),c=this.aY+this.yRadius*Math.sin(o);if(this.aRotation!==0){const h=Math.cos(this.aRotation),u=Math.sin(this.aRotation),d=l-this.aX,f=c-this.aY;l=d*h-f*u+this.aX,c=d*u+f*h+this.aY}return n.set(l,c)}copy(t){return super.copy(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}toJSON(){const t=super.toJSON();return t.aX=this.aX,t.aY=this.aY,t.xRadius=this.xRadius,t.yRadius=this.yRadius,t.aStartAngle=this.aStartAngle,t.aEndAngle=this.aEndAngle,t.aClockwise=this.aClockwise,t.aRotation=this.aRotation,t}fromJSON(t){return super.fromJSON(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}}class Zd extends Rl{constructor(t,e,n,s,r,a){super(t,e,n,n,s,r,a),this.isArcCurve=!0,this.type="ArcCurve"}}function Pl(){let i=0,t=0,e=0,n=0;function s(r,a,o,l){i=r,t=o,e=-3*r+3*a-2*o-l,n=2*r-2*a+o+l}return{initCatmullRom:function(r,a,o,l,c){s(a,o,c*(o-r),c*(l-a))},initNonuniformCatmullRom:function(r,a,o,l,c,h,u){let d=(a-r)/c-(o-r)/(c+h)+(o-a)/h,f=(o-a)/h-(l-a)/(h+u)+(l-o)/u;d*=h,f*=h,s(a,o,d,f)},calc:function(r){const a=r*r,o=a*r;return i+t*r+e*a+n*o}}}const Dr=new L,Wa=new Pl,Xa=new Pl,Ya=new Pl;class $d extends Zn{constructor(t=[],e=!1,n="centripetal",s=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=t,this.closed=e,this.curveType=n,this.tension=s}getPoint(t,e=new L){const n=e,s=this.points,r=s.length,a=(r-(this.closed?0:1))*t;let o=Math.floor(a),l=a-o;this.closed?o+=o>0?0:(Math.floor(Math.abs(o)/r)+1)*r:l===0&&o===r-1&&(o=r-2,l=1);let c,h;this.closed||o>0?c=s[(o-1)%r]:(Dr.subVectors(s[0],s[1]).add(s[0]),c=Dr);const u=s[o%r],d=s[(o+1)%r];if(this.closed||o+2<r?h=s[(o+2)%r]:(Dr.subVectors(s[r-1],s[r-2]).add(s[r-1]),h=Dr),this.curveType==="centripetal"||this.curveType==="chordal"){const f=this.curveType==="chordal"?.5:.25;let g=Math.pow(c.distanceToSquared(u),f),x=Math.pow(u.distanceToSquared(d),f),m=Math.pow(d.distanceToSquared(h),f);x<1e-4&&(x=1),g<1e-4&&(g=x),m<1e-4&&(m=x),Wa.initNonuniformCatmullRom(c.x,u.x,d.x,h.x,g,x,m),Xa.initNonuniformCatmullRom(c.y,u.y,d.y,h.y,g,x,m),Ya.initNonuniformCatmullRom(c.z,u.z,d.z,h.z,g,x,m)}else this.curveType==="catmullrom"&&(Wa.initCatmullRom(c.x,u.x,d.x,h.x,this.tension),Xa.initCatmullRom(c.y,u.y,d.y,h.y,this.tension),Ya.initCatmullRom(c.z,u.z,d.z,h.z,this.tension));return n.set(Wa.calc(l),Xa.calc(l),Ya.calc(l)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const s=t.points[e];this.points.push(s.clone())}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}toJSON(){const t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){const s=this.points[e];t.points.push(s.toArray())}return t.closed=this.closed,t.curveType=this.curveType,t.tension=this.tension,t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const s=t.points[e];this.points.push(new L().fromArray(s))}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}}function yc(i,t,e,n,s){const r=(n-t)*.5,a=(s-e)*.5,o=i*i,l=i*o;return(2*e-2*n+r+a)*l+(-3*e+3*n-2*r-a)*o+r*i+e}function Kd(i,t){const e=1-i;return e*e*t}function Jd(i,t){return 2*(1-i)*i*t}function jd(i,t){return i*i*t}function Ks(i,t,e,n){return Kd(i,t)+Jd(i,e)+jd(i,n)}function Qd(i,t){const e=1-i;return e*e*e*t}function tf(i,t){const e=1-i;return 3*e*e*i*t}function ef(i,t){return 3*(1-i)*i*i*t}function nf(i,t){return i*i*i*t}function Js(i,t,e,n,s){return Qd(i,t)+tf(i,e)+ef(i,n)+nf(i,s)}class Uh extends Zn{constructor(t=new dt,e=new dt,n=new dt,s=new dt){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=t,this.v1=e,this.v2=n,this.v3=s}getPoint(t,e=new dt){const n=e,s=this.v0,r=this.v1,a=this.v2,o=this.v3;return n.set(Js(t,s.x,r.x,a.x,o.x),Js(t,s.y,r.y,a.y,o.y)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}}class sf extends Zn{constructor(t=new L,e=new L,n=new L,s=new L){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=t,this.v1=e,this.v2=n,this.v3=s}getPoint(t,e=new L){const n=e,s=this.v0,r=this.v1,a=this.v2,o=this.v3;return n.set(Js(t,s.x,r.x,a.x,o.x),Js(t,s.y,r.y,a.y,o.y),Js(t,s.z,r.z,a.z,o.z)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}}class Oh extends Zn{constructor(t=new dt,e=new dt){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=t,this.v2=e}getPoint(t,e=new dt){const n=e;return t===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(t).add(this.v1)),n}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new dt){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class rf extends Zn{constructor(t=new L,e=new L){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=t,this.v2=e}getPoint(t,e=new L){const n=e;return t===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(t).add(this.v1)),n}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new L){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class Bh extends Zn{constructor(t=new dt,e=new dt,n=new dt){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=t,this.v1=e,this.v2=n}getPoint(t,e=new dt){const n=e,s=this.v0,r=this.v1,a=this.v2;return n.set(Ks(t,s.x,r.x,a.x),Ks(t,s.y,r.y,a.y)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class af extends Zn{constructor(t=new L,e=new L,n=new L){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=t,this.v1=e,this.v2=n}getPoint(t,e=new L){const n=e,s=this.v0,r=this.v1,a=this.v2;return n.set(Ks(t,s.x,r.x,a.x),Ks(t,s.y,r.y,a.y),Ks(t,s.z,r.z,a.z)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class kh extends Zn{constructor(t=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=t}getPoint(t,e=new dt){const n=e,s=this.points,r=(s.length-1)*t,a=Math.floor(r),o=r-a,l=s[a===0?a:a-1],c=s[a],h=s[a>s.length-2?s.length-1:a+1],u=s[a>s.length-3?s.length-1:a+2];return n.set(yc(o,l.x,c.x,h.x,u.x),yc(o,l.y,c.y,h.y,u.y)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const s=t.points[e];this.points.push(s.clone())}return this}toJSON(){const t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){const s=this.points[e];t.points.push(s.toArray())}return t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const s=t.points[e];this.points.push(new dt().fromArray(s))}return this}}var el=Object.freeze({__proto__:null,ArcCurve:Zd,CatmullRomCurve3:$d,CubicBezierCurve:Uh,CubicBezierCurve3:sf,EllipseCurve:Rl,LineCurve:Oh,LineCurve3:rf,QuadraticBezierCurve:Bh,QuadraticBezierCurve3:af,SplineCurve:kh});class of extends Zn{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(t){this.curves.push(t)}closePath(){const t=this.curves[0].getPoint(0),e=this.curves[this.curves.length-1].getPoint(1);if(!t.equals(e)){const n=t.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new el[n](e,t))}return this}getPoint(t,e){const n=t*this.getLength(),s=this.getCurveLengths();let r=0;for(;r<s.length;){if(s[r]>=n){const a=s[r]-n,o=this.curves[r],l=o.getLength(),c=l===0?0:1-a/l;return o.getPointAt(c,e)}r++}return null}getLength(){const t=this.getCurveLengths();return t[t.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;const t=[];let e=0;for(let n=0,s=this.curves.length;n<s;n++)e+=this.curves[n].getLength(),t.push(e);return this.cacheLengths=t,t}getSpacedPoints(t=40){const e=[];for(let n=0;n<=t;n++)e.push(this.getPoint(n/t));return this.autoClose&&e.push(e[0]),e}getPoints(t=12){const e=[];let n;for(let s=0,r=this.curves;s<r.length;s++){const a=r[s],o=a.isEllipseCurve?t*2:a.isLineCurve||a.isLineCurve3?1:a.isSplineCurve?t*a.points.length:t,l=a.getPoints(o);for(let c=0;c<l.length;c++){const h=l[c];n&&n.equals(h)||(e.push(h),n=h)}}return this.autoClose&&e.length>1&&!e[e.length-1].equals(e[0])&&e.push(e[0]),e}copy(t){super.copy(t),this.curves=[];for(let e=0,n=t.curves.length;e<n;e++){const s=t.curves[e];this.curves.push(s.clone())}return this.autoClose=t.autoClose,this}toJSON(){const t=super.toJSON();t.autoClose=this.autoClose,t.curves=[];for(let e=0,n=this.curves.length;e<n;e++){const s=this.curves[e];t.curves.push(s.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.autoClose=t.autoClose,this.curves=[];for(let e=0,n=t.curves.length;e<n;e++){const s=t.curves[e];this.curves.push(new el[s.type]().fromJSON(s))}return this}}class Sc extends of{constructor(t){super(),this.type="Path",this.currentPoint=new dt,t&&this.setFromPoints(t)}setFromPoints(t){this.moveTo(t[0].x,t[0].y);for(let e=1,n=t.length;e<n;e++)this.lineTo(t[e].x,t[e].y);return this}moveTo(t,e){return this.currentPoint.set(t,e),this}lineTo(t,e){const n=new Oh(this.currentPoint.clone(),new dt(t,e));return this.curves.push(n),this.currentPoint.set(t,e),this}quadraticCurveTo(t,e,n,s){const r=new Bh(this.currentPoint.clone(),new dt(t,e),new dt(n,s));return this.curves.push(r),this.currentPoint.set(n,s),this}bezierCurveTo(t,e,n,s,r,a){const o=new Uh(this.currentPoint.clone(),new dt(t,e),new dt(n,s),new dt(r,a));return this.curves.push(o),this.currentPoint.set(r,a),this}splineThru(t){const e=[this.currentPoint.clone()].concat(t),n=new kh(e);return this.curves.push(n),this.currentPoint.copy(t[t.length-1]),this}arc(t,e,n,s,r,a){const o=this.currentPoint.x,l=this.currentPoint.y;return this.absarc(t+o,e+l,n,s,r,a),this}absarc(t,e,n,s,r,a){return this.absellipse(t,e,n,n,s,r,a),this}ellipse(t,e,n,s,r,a,o,l){const c=this.currentPoint.x,h=this.currentPoint.y;return this.absellipse(t+c,e+h,n,s,r,a,o,l),this}absellipse(t,e,n,s,r,a,o,l){const c=new Rl(t,e,n,s,r,a,o,l);if(this.curves.length>0){const u=c.getPoint(0);u.equals(this.currentPoint)||this.lineTo(u.x,u.y)}this.curves.push(c);const h=c.getPoint(1);return this.currentPoint.copy(h),this}copy(t){return super.copy(t),this.currentPoint.copy(t.currentPoint),this}toJSON(){const t=super.toJSON();return t.currentPoint=this.currentPoint.toArray(),t}fromJSON(t){return super.fromJSON(t),this.currentPoint.fromArray(t.currentPoint),this}}class Il extends Sc{constructor(t){super(t),this.uuid=Xn(),this.type="Shape",this.holes=[]}getPointsHoles(t){const e=[];for(let n=0,s=this.holes.length;n<s;n++)e[n]=this.holes[n].getPoints(t);return e}extractPoints(t){return{shape:this.getPoints(t),holes:this.getPointsHoles(t)}}copy(t){super.copy(t),this.holes=[];for(let e=0,n=t.holes.length;e<n;e++){const s=t.holes[e];this.holes.push(s.clone())}return this}toJSON(){const t=super.toJSON();t.uuid=this.uuid,t.holes=[];for(let e=0,n=this.holes.length;e<n;e++){const s=this.holes[e];t.holes.push(s.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.uuid=t.uuid,this.holes=[];for(let e=0,n=t.holes.length;e<n;e++){const s=t.holes[e];this.holes.push(new Sc().fromJSON(s))}return this}}function lf(i,t,e=2){const n=t&&t.length,s=n?t[0]*e:i.length;let r=zh(i,0,s,e,!0);const a=[];if(!r||r.next===r.prev)return a;let o,l,c;if(n&&(r=ff(i,t,r,e)),i.length>80*e){o=i[0],l=i[1];let h=o,u=l;for(let d=e;d<s;d+=e){const f=i[d],g=i[d+1];f<o&&(o=f),g<l&&(l=g),f>h&&(h=f),g>u&&(u=g)}c=Math.max(h-o,u-l),c=c!==0?32767/c:0}return ir(r,a,e,o,l,c,0),a}function zh(i,t,e,n,s){let r;if(s===Ef(i,t,e,n)>0)for(let a=t;a<e;a+=n)r=wc(a/n|0,i[a],i[a+1],r);else for(let a=e-n;a>=t;a-=n)r=wc(a/n|0,i[a],i[a+1],r);return r&&Es(r,r.next)&&(rr(r),r=r.next),r}function Vi(i,t){if(!i)return i;t||(t=i);let e=i,n;do if(n=!1,!e.steiner&&(Es(e,e.next)||_e(e.prev,e,e.next)===0)){if(rr(e),e=t=e.prev,e===e.next)break;n=!0}else e=e.next;while(n||e!==t);return t}function ir(i,t,e,n,s,r,a){if(!i)return;!a&&r&&_f(i,n,s,r);let o=i;for(;i.prev!==i.next;){const l=i.prev,c=i.next;if(r?hf(i,n,s,r):cf(i)){t.push(l.i,i.i,c.i),rr(i),i=c.next,o=c.next;continue}if(i=c,i===o){a?a===1?(i=uf(Vi(i),t),ir(i,t,e,n,s,r,2)):a===2&&df(i,t,e,n,s,r):ir(Vi(i),t,e,n,s,r,1);break}}}function cf(i){const t=i.prev,e=i,n=i.next;if(_e(t,e,n)>=0)return!1;const s=t.x,r=e.x,a=n.x,o=t.y,l=e.y,c=n.y,h=Math.min(s,r,a),u=Math.min(o,l,c),d=Math.max(s,r,a),f=Math.max(o,l,c);let g=n.next;for(;g!==t;){if(g.x>=h&&g.x<=d&&g.y>=u&&g.y<=f&&Xs(s,o,r,l,a,c,g.x,g.y)&&_e(g.prev,g,g.next)>=0)return!1;g=g.next}return!0}function hf(i,t,e,n){const s=i.prev,r=i,a=i.next;if(_e(s,r,a)>=0)return!1;const o=s.x,l=r.x,c=a.x,h=s.y,u=r.y,d=a.y,f=Math.min(o,l,c),g=Math.min(h,u,d),x=Math.max(o,l,c),m=Math.max(h,u,d),p=nl(f,g,t,e,n),S=nl(x,m,t,e,n);let b=i.prevZ,w=i.nextZ;for(;b&&b.z>=p&&w&&w.z<=S;){if(b.x>=f&&b.x<=x&&b.y>=g&&b.y<=m&&b!==s&&b!==a&&Xs(o,h,l,u,c,d,b.x,b.y)&&_e(b.prev,b,b.next)>=0||(b=b.prevZ,w.x>=f&&w.x<=x&&w.y>=g&&w.y<=m&&w!==s&&w!==a&&Xs(o,h,l,u,c,d,w.x,w.y)&&_e(w.prev,w,w.next)>=0))return!1;w=w.nextZ}for(;b&&b.z>=p;){if(b.x>=f&&b.x<=x&&b.y>=g&&b.y<=m&&b!==s&&b!==a&&Xs(o,h,l,u,c,d,b.x,b.y)&&_e(b.prev,b,b.next)>=0)return!1;b=b.prevZ}for(;w&&w.z<=S;){if(w.x>=f&&w.x<=x&&w.y>=g&&w.y<=m&&w!==s&&w!==a&&Xs(o,h,l,u,c,d,w.x,w.y)&&_e(w.prev,w,w.next)>=0)return!1;w=w.nextZ}return!0}function uf(i,t){let e=i;do{const n=e.prev,s=e.next.next;!Es(n,s)&&Hh(n,e,e.next,s)&&sr(n,s)&&sr(s,n)&&(t.push(n.i,e.i,s.i),rr(e),rr(e.next),e=i=s),e=e.next}while(e!==i);return Vi(e)}function df(i,t,e,n,s,r){let a=i;do{let o=a.next.next;for(;o!==a.prev;){if(a.i!==o.i&&yf(a,o)){let l=Vh(a,o);a=Vi(a,a.next),l=Vi(l,l.next),ir(a,t,e,n,s,r,0),ir(l,t,e,n,s,r,0);return}o=o.next}a=a.next}while(a!==i)}function ff(i,t,e,n){const s=[];for(let r=0,a=t.length;r<a;r++){const o=t[r]*n,l=r<a-1?t[r+1]*n:i.length,c=zh(i,o,l,n,!1);c===c.next&&(c.steiner=!0),s.push(Mf(c))}s.sort(pf);for(let r=0;r<s.length;r++)e=mf(s[r],e);return e}function pf(i,t){let e=i.x-t.x;if(e===0&&(e=i.y-t.y,e===0)){const n=(i.next.y-i.y)/(i.next.x-i.x),s=(t.next.y-t.y)/(t.next.x-t.x);e=n-s}return e}function mf(i,t){const e=gf(i,t);if(!e)return t;const n=Vh(e,i);return Vi(n,n.next),Vi(e,e.next)}function gf(i,t){let e=t;const n=i.x,s=i.y;let r=-1/0,a;if(Es(i,e))return e;do{if(Es(i,e.next))return e.next;if(s<=e.y&&s>=e.next.y&&e.next.y!==e.y){const u=e.x+(s-e.y)*(e.next.x-e.x)/(e.next.y-e.y);if(u<=n&&u>r&&(r=u,a=e.x<e.next.x?e:e.next,u===n))return a}e=e.next}while(e!==t);if(!a)return null;const o=a,l=a.x,c=a.y;let h=1/0;e=a;do{if(n>=e.x&&e.x>=l&&n!==e.x&&Gh(s<c?n:r,s,l,c,s<c?r:n,s,e.x,e.y)){const u=Math.abs(s-e.y)/(n-e.x);sr(e,i)&&(u<h||u===h&&(e.x>a.x||e.x===a.x&&xf(a,e)))&&(a=e,h=u)}e=e.next}while(e!==o);return a}function xf(i,t){return _e(i.prev,i,t.prev)<0&&_e(t.next,i,i.next)<0}function _f(i,t,e,n){let s=i;do s.z===0&&(s.z=nl(s.x,s.y,t,e,n)),s.prevZ=s.prev,s.nextZ=s.next,s=s.next;while(s!==i);s.prevZ.nextZ=null,s.prevZ=null,vf(s)}function vf(i){let t,e=1;do{let n=i,s;i=null;let r=null;for(t=0;n;){t++;let a=n,o=0;for(let c=0;c<e&&(o++,a=a.nextZ,!!a);c++);let l=e;for(;o>0||l>0&&a;)o!==0&&(l===0||!a||n.z<=a.z)?(s=n,n=n.nextZ,o--):(s=a,a=a.nextZ,l--),r?r.nextZ=s:i=s,s.prevZ=r,r=s;n=a}r.nextZ=null,e*=2}while(t>1);return i}function nl(i,t,e,n,s){return i=(i-e)*s|0,t=(t-n)*s|0,i=(i|i<<8)&16711935,i=(i|i<<4)&252645135,i=(i|i<<2)&858993459,i=(i|i<<1)&1431655765,t=(t|t<<8)&16711935,t=(t|t<<4)&252645135,t=(t|t<<2)&858993459,t=(t|t<<1)&1431655765,i|t<<1}function Mf(i){let t=i,e=i;do(t.x<e.x||t.x===e.x&&t.y<e.y)&&(e=t),t=t.next;while(t!==i);return e}function Gh(i,t,e,n,s,r,a,o){return(s-a)*(t-o)>=(i-a)*(r-o)&&(i-a)*(n-o)>=(e-a)*(t-o)&&(e-a)*(r-o)>=(s-a)*(n-o)}function Xs(i,t,e,n,s,r,a,o){return!(i===a&&t===o)&&Gh(i,t,e,n,s,r,a,o)}function yf(i,t){return i.next.i!==t.i&&i.prev.i!==t.i&&!Sf(i,t)&&(sr(i,t)&&sr(t,i)&&wf(i,t)&&(_e(i.prev,i,t.prev)||_e(i,t.prev,t))||Es(i,t)&&_e(i.prev,i,i.next)>0&&_e(t.prev,t,t.next)>0)}function _e(i,t,e){return(t.y-i.y)*(e.x-t.x)-(t.x-i.x)*(e.y-t.y)}function Es(i,t){return i.x===t.x&&i.y===t.y}function Hh(i,t,e,n){const s=Nr(_e(i,t,e)),r=Nr(_e(i,t,n)),a=Nr(_e(e,n,i)),o=Nr(_e(e,n,t));return!!(s!==r&&a!==o||s===0&&Fr(i,e,t)||r===0&&Fr(i,n,t)||a===0&&Fr(e,i,n)||o===0&&Fr(e,t,n))}function Fr(i,t,e){return t.x<=Math.max(i.x,e.x)&&t.x>=Math.min(i.x,e.x)&&t.y<=Math.max(i.y,e.y)&&t.y>=Math.min(i.y,e.y)}function Nr(i){return i>0?1:i<0?-1:0}function Sf(i,t){let e=i;do{if(e.i!==i.i&&e.next.i!==i.i&&e.i!==t.i&&e.next.i!==t.i&&Hh(e,e.next,i,t))return!0;e=e.next}while(e!==i);return!1}function sr(i,t){return _e(i.prev,i,i.next)<0?_e(i,t,i.next)>=0&&_e(i,i.prev,t)>=0:_e(i,t,i.prev)<0||_e(i,i.next,t)<0}function wf(i,t){let e=i,n=!1;const s=(i.x+t.x)/2,r=(i.y+t.y)/2;do e.y>r!=e.next.y>r&&e.next.y!==e.y&&s<(e.next.x-e.x)*(r-e.y)/(e.next.y-e.y)+e.x&&(n=!n),e=e.next;while(e!==i);return n}function Vh(i,t){const e=il(i.i,i.x,i.y),n=il(t.i,t.x,t.y),s=i.next,r=t.prev;return i.next=t,t.prev=i,e.next=s,s.prev=e,n.next=e,e.prev=n,r.next=n,n.prev=r,n}function wc(i,t,e,n){const s=il(i,t,e);return n?(s.next=n.next,s.prev=n,n.next.prev=s,n.next=s):(s.prev=s,s.next=s),s}function rr(i){i.next.prev=i.prev,i.prev.next=i.next,i.prevZ&&(i.prevZ.nextZ=i.nextZ),i.nextZ&&(i.nextZ.prevZ=i.prevZ)}function il(i,t,e){return{i,x:t,y:e,prev:null,next:null,z:0,prevZ:null,nextZ:null,steiner:!1}}function Ef(i,t,e,n){let s=0;for(let r=t,a=e-n;r<e;r+=n)s+=(i[a]-i[r])*(i[r+1]+i[a+1]),a=r;return s}class bf{static triangulate(t,e,n=2){return lf(t,e,n)}}class gs{static area(t){const e=t.length;let n=0;for(let s=e-1,r=0;r<e;s=r++)n+=t[s].x*t[r].y-t[r].x*t[s].y;return n*.5}static isClockWise(t){return gs.area(t)<0}static triangulateShape(t,e){const n=[],s=[],r=[];Ec(t),bc(n,t);let a=t.length;e.forEach(Ec);for(let l=0;l<e.length;l++)s.push(a),a+=e[l].length,bc(n,e[l]);const o=bf.triangulate(n,s);for(let l=0;l<o.length;l+=3)r.push(o.slice(l,l+3));return r}}function Ec(i){const t=i.length;t>2&&i[t-1].equals(i[0])&&i.pop()}function bc(i,t){for(let e=0;e<t.length;e++)i.push(t[e].x),i.push(t[e].y)}class fa extends an{constructor(t=new Il([new dt(.5,.5),new dt(-.5,.5),new dt(-.5,-.5),new dt(.5,-.5)]),e={}){super(),this.type="ExtrudeGeometry",this.parameters={shapes:t,options:e},t=Array.isArray(t)?t:[t];const n=this,s=[],r=[];for(let o=0,l=t.length;o<l;o++){const c=t[o];a(c)}this.setAttribute("position",new Le(s,3)),this.setAttribute("uv",new Le(r,2)),this.computeVertexNormals();function a(o){const l=[],c=e.curveSegments!==void 0?e.curveSegments:12,h=e.steps!==void 0?e.steps:1,u=e.depth!==void 0?e.depth:1;let d=e.bevelEnabled!==void 0?e.bevelEnabled:!0,f=e.bevelThickness!==void 0?e.bevelThickness:.2,g=e.bevelSize!==void 0?e.bevelSize:f-.1,x=e.bevelOffset!==void 0?e.bevelOffset:0,m=e.bevelSegments!==void 0?e.bevelSegments:3;const p=e.extrudePath,S=e.UVGenerator!==void 0?e.UVGenerator:Tf;let b,w=!1,M,C,A,D;if(p){b=p.getSpacedPoints(h),w=!0,d=!1;const Z=p.isCatmullRomCurve3?p.closed:!1;M=p.computeFrenetFrames(h,Z),C=new L,A=new L,D=new L}d||(m=0,f=0,g=0,x=0);const v=o.extractPoints(c);let y=v.shape;const P=v.holes;if(!gs.isClockWise(y)){y=y.reverse();for(let Z=0,nt=P.length;Z<nt;Z++){const K=P[Z];gs.isClockWise(K)&&(P[Z]=K.reverse())}}function F(Z){const K=10000000000000001e-36;let it=Z[0];for(let R=1;R<=Z.length;R++){const wt=R%Z.length,gt=Z[wt],Lt=gt.x-it.x,ht=gt.y-it.y,T=Lt*Lt+ht*ht,_=Math.max(Math.abs(gt.x),Math.abs(gt.y),Math.abs(it.x),Math.abs(it.y)),N=K*_*_;if(T<=N){Z.splice(wt,1),R--;continue}it=gt}}F(y),P.forEach(F);const B=P.length,k=y;for(let Z=0;Z<B;Z++){const nt=P[Z];y=y.concat(nt)}function H(Z,nt,K){return nt||ne("ExtrudeGeometry: vec does not exist"),Z.clone().addScaledVector(nt,K)}const z=y.length;function $(Z,nt,K){let it,R,wt;const gt=Z.x-nt.x,Lt=Z.y-nt.y,ht=K.x-Z.x,T=K.y-Z.y,_=gt*gt+Lt*Lt,N=gt*T-Lt*ht;if(Math.abs(N)>Number.EPSILON){const X=Math.sqrt(_),Q=Math.sqrt(ht*ht+T*T),Y=nt.x-Lt/X,It=nt.y+gt/X,ft=K.x-T/Q,Rt=K.y+ht/Q,Vt=((ft-Y)*T-(Rt-It)*ht)/(gt*T-Lt*ht);it=Y+gt*Vt-Z.x,R=It+Lt*Vt-Z.y;const at=it*it+R*R;if(at<=2)return new dt(it,R);wt=Math.sqrt(at/2)}else{let X=!1;gt>Number.EPSILON?ht>Number.EPSILON&&(X=!0):gt<-Number.EPSILON?ht<-Number.EPSILON&&(X=!0):Math.sign(Lt)===Math.sign(T)&&(X=!0),X?(it=-Lt,R=gt,wt=Math.sqrt(_)):(it=gt,R=Lt,wt=Math.sqrt(_/2))}return new dt(it/wt,R/wt)}const ut=[];for(let Z=0,nt=k.length,K=nt-1,it=Z+1;Z<nt;Z++,K++,it++)K===nt&&(K=0),it===nt&&(it=0),ut[Z]=$(k[Z],k[K],k[it]);const st=[];let rt,kt=ut.concat();for(let Z=0,nt=B;Z<nt;Z++){const K=P[Z];rt=[];for(let it=0,R=K.length,wt=R-1,gt=it+1;it<R;it++,wt++,gt++)wt===R&&(wt=0),gt===R&&(gt=0),rt[it]=$(K[it],K[wt],K[gt]);st.push(rt),kt=kt.concat(rt)}let Nt;if(m===0)Nt=gs.triangulateShape(k,P);else{const Z=[],nt=[];for(let K=0;K<m;K++){const it=K/m,R=f*Math.cos(it*Math.PI/2),wt=g*Math.sin(it*Math.PI/2)+x;for(let gt=0,Lt=k.length;gt<Lt;gt++){const ht=H(k[gt],ut[gt],wt);bt(ht.x,ht.y,-R),it===0&&Z.push(ht)}for(let gt=0,Lt=B;gt<Lt;gt++){const ht=P[gt];rt=st[gt];const T=[];for(let _=0,N=ht.length;_<N;_++){const X=H(ht[_],rt[_],wt);bt(X.x,X.y,-R),it===0&&T.push(X)}it===0&&nt.push(T)}}Nt=gs.triangulateShape(Z,nt)}const Kt=Nt.length,ie=g+x;for(let Z=0;Z<z;Z++){const nt=d?H(y[Z],kt[Z],ie):y[Z];w?(A.copy(M.normals[0]).multiplyScalar(nt.x),C.copy(M.binormals[0]).multiplyScalar(nt.y),D.copy(b[0]).add(A).add(C),bt(D.x,D.y,D.z)):bt(nt.x,nt.y,0)}for(let Z=1;Z<=h;Z++)for(let nt=0;nt<z;nt++){const K=d?H(y[nt],kt[nt],ie):y[nt];w?(A.copy(M.normals[Z]).multiplyScalar(K.x),C.copy(M.binormals[Z]).multiplyScalar(K.y),D.copy(b[Z]).add(A).add(C),bt(D.x,D.y,D.z)):bt(K.x,K.y,u/h*Z)}for(let Z=m-1;Z>=0;Z--){const nt=Z/m,K=f*Math.cos(nt*Math.PI/2),it=g*Math.sin(nt*Math.PI/2)+x;for(let R=0,wt=k.length;R<wt;R++){const gt=H(k[R],ut[R],it);bt(gt.x,gt.y,u+K)}for(let R=0,wt=P.length;R<wt;R++){const gt=P[R];rt=st[R];for(let Lt=0,ht=gt.length;Lt<ht;Lt++){const T=H(gt[Lt],rt[Lt],it);w?bt(T.x,T.y+b[h-1].y,b[h-1].x+K):bt(T.x,T.y,u+K)}}}q(),et();function q(){const Z=s.length/3;if(d){let nt=0,K=z*nt;for(let it=0;it<Kt;it++){const R=Nt[it];lt(R[2]+K,R[1]+K,R[0]+K)}nt=h+m*2,K=z*nt;for(let it=0;it<Kt;it++){const R=Nt[it];lt(R[0]+K,R[1]+K,R[2]+K)}}else{for(let nt=0;nt<Kt;nt++){const K=Nt[nt];lt(K[2],K[1],K[0])}for(let nt=0;nt<Kt;nt++){const K=Nt[nt];lt(K[0]+z*h,K[1]+z*h,K[2]+z*h)}}n.addGroup(Z,s.length/3-Z,0)}function et(){const Z=s.length/3;let nt=0;yt(k,nt),nt+=k.length;for(let K=0,it=P.length;K<it;K++){const R=P[K];yt(R,nt),nt+=R.length}n.addGroup(Z,s.length/3-Z,1)}function yt(Z,nt){let K=Z.length;for(;--K>=0;){const it=K;let R=K-1;R<0&&(R=Z.length-1);for(let wt=0,gt=h+m*2;wt<gt;wt++){const Lt=z*wt,ht=z*(wt+1),T=nt+it+Lt,_=nt+R+Lt,N=nt+R+ht,X=nt+it+ht;Ot(T,_,N,X)}}}function bt(Z,nt,K){l.push(Z),l.push(nt),l.push(K)}function lt(Z,nt,K){Yt(Z),Yt(nt),Yt(K);const it=s.length/3,R=S.generateTopUV(n,s,it-3,it-2,it-1);Bt(R[0]),Bt(R[1]),Bt(R[2])}function Ot(Z,nt,K,it){Yt(Z),Yt(nt),Yt(it),Yt(nt),Yt(K),Yt(it);const R=s.length/3,wt=S.generateSideWallUV(n,s,R-6,R-3,R-2,R-1);Bt(wt[0]),Bt(wt[1]),Bt(wt[3]),Bt(wt[1]),Bt(wt[2]),Bt(wt[3])}function Yt(Z){s.push(l[Z*3+0]),s.push(l[Z*3+1]),s.push(l[Z*3+2])}function Bt(Z){r.push(Z.x),r.push(Z.y)}}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){const t=super.toJSON(),e=this.parameters.shapes,n=this.parameters.options;return Cf(e,n,t)}static fromJSON(t,e){const n=[];for(let r=0,a=t.shapes.length;r<a;r++){const o=e[t.shapes[r]];n.push(o)}const s=t.options.extrudePath;return s!==void 0&&(t.options.extrudePath=new el[s.type]().fromJSON(s)),new fa(n,t.options)}}const Tf={generateTopUV:function(i,t,e,n,s){const r=t[e*3],a=t[e*3+1],o=t[n*3],l=t[n*3+1],c=t[s*3],h=t[s*3+1];return[new dt(r,a),new dt(o,l),new dt(c,h)]},generateSideWallUV:function(i,t,e,n,s,r){const a=t[e*3],o=t[e*3+1],l=t[e*3+2],c=t[n*3],h=t[n*3+1],u=t[n*3+2],d=t[s*3],f=t[s*3+1],g=t[s*3+2],x=t[r*3],m=t[r*3+1],p=t[r*3+2];return Math.abs(o-h)<Math.abs(a-c)?[new dt(a,1-l),new dt(c,1-u),new dt(d,1-g),new dt(x,1-p)]:[new dt(o,1-l),new dt(h,1-u),new dt(f,1-g),new dt(m,1-p)]}};function Cf(i,t,e){if(e.shapes=[],Array.isArray(i))for(let n=0,s=i.length;n<s;n++){const r=i[n];e.shapes.push(r.uuid)}else e.shapes.push(i.uuid);return e.options=Object.assign({},t),t.extrudePath!==void 0&&(e.options.extrudePath=t.extrudePath.toJSON()),e}class Cs extends an{constructor(t=1,e=1,n=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:n,heightSegments:s};const r=t/2,a=e/2,o=Math.floor(n),l=Math.floor(s),c=o+1,h=l+1,u=t/o,d=e/l,f=[],g=[],x=[],m=[];for(let p=0;p<h;p++){const S=p*d-a;for(let b=0;b<c;b++){const w=b*u-r;g.push(w,-S,0),x.push(0,0,1),m.push(b/o),m.push(1-p/l)}}for(let p=0;p<l;p++)for(let S=0;S<o;S++){const b=S+c*p,w=S+c*(p+1),M=S+1+c*(p+1),C=S+1+c*p;f.push(b,w,C),f.push(w,M,C)}this.setIndex(f),this.setAttribute("position",new Le(g,3)),this.setAttribute("normal",new Le(x,3)),this.setAttribute("uv",new Le(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Cs(t.width,t.height,t.widthSegments,t.heightSegments)}}class te extends an{constructor(t=1,e=32,n=16,s=0,r=Math.PI*2,a=0,o=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:t,widthSegments:e,heightSegments:n,phiStart:s,phiLength:r,thetaStart:a,thetaLength:o},e=Math.max(3,Math.floor(e)),n=Math.max(2,Math.floor(n));const l=Math.min(a+o,Math.PI);let c=0;const h=[],u=new L,d=new L,f=[],g=[],x=[],m=[];for(let p=0;p<=n;p++){const S=[],b=p/n;let w=0;p===0&&a===0?w=.5/e:p===n&&l===Math.PI&&(w=-.5/e);for(let M=0;M<=e;M++){const C=M/e;u.x=-t*Math.cos(s+C*r)*Math.sin(a+b*o),u.y=t*Math.cos(a+b*o),u.z=t*Math.sin(s+C*r)*Math.sin(a+b*o),g.push(u.x,u.y,u.z),d.copy(u).normalize(),x.push(d.x,d.y,d.z),m.push(C+w,1-b),S.push(c++)}h.push(S)}for(let p=0;p<n;p++)for(let S=0;S<e;S++){const b=h[p][S+1],w=h[p][S],M=h[p+1][S],C=h[p+1][S+1];(p!==0||a>0)&&f.push(b,w,C),(p!==n-1||l<Math.PI)&&f.push(w,M,C)}this.setIndex(f),this.setAttribute("position",new Le(g,3)),this.setAttribute("normal",new Le(x,3)),this.setAttribute("uv",new Le(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new te(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}}class na extends an{constructor(t=1,e=.4,n=12,s=48,r=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:t,tube:e,radialSegments:n,tubularSegments:s,arc:r},n=Math.floor(n),s=Math.floor(s);const a=[],o=[],l=[],c=[],h=new L,u=new L,d=new L;for(let f=0;f<=n;f++)for(let g=0;g<=s;g++){const x=g/s*r,m=f/n*Math.PI*2;u.x=(t+e*Math.cos(m))*Math.cos(x),u.y=(t+e*Math.cos(m))*Math.sin(x),u.z=e*Math.sin(m),o.push(u.x,u.y,u.z),h.x=t*Math.cos(x),h.y=t*Math.sin(x),d.subVectors(u,h).normalize(),l.push(d.x,d.y,d.z),c.push(g/s),c.push(f/n)}for(let f=1;f<=n;f++)for(let g=1;g<=s;g++){const x=(s+1)*f+g-1,m=(s+1)*(f-1)+g-1,p=(s+1)*(f-1)+g,S=(s+1)*f+g;a.push(x,m,S),a.push(m,p,S)}this.setIndex(a),this.setAttribute("position",new Le(o,3)),this.setAttribute("normal",new Le(l,3)),this.setAttribute("uv",new Le(c,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new na(t.radius,t.tube,t.radialSegments,t.tubularSegments,t.arc)}}class Af extends Tn{constructor(t){super(t),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}}class Ge extends bi{constructor(t){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new zt(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new zt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=da,this.normalScale=new dt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Fe,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.defines={STANDARD:""},this.color.copy(t.color),this.roughness=t.roughness,this.metalness=t.metalness,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.roughnessMap=t.roughnessMap,this.metalnessMap=t.metalnessMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.envMapIntensity=t.envMapIntensity,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}}class Rf extends bi{constructor(t){super(),this.isMeshPhongMaterial=!0,this.type="MeshPhongMaterial",this.color=new zt(16777215),this.specular=new zt(1118481),this.shininess=30,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new zt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=da,this.normalScale=new dt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Fe,this.combine=ha,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.specular.copy(t.specular),this.shininess=t.shininess,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}}class Qt extends bi{constructor(t){super(),this.isMeshLambertMaterial=!0,this.type="MeshLambertMaterial",this.color=new zt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new zt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=da,this.normalScale=new dt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Fe,this.combine=ha,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}}class Pf extends bi{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Xu,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}}class If extends bi{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}}const Tc={enabled:!1,files:{},add:function(i,t){this.enabled!==!1&&(this.files[i]=t)},get:function(i){if(this.enabled!==!1)return this.files[i]},remove:function(i){delete this.files[i]},clear:function(){this.files={}}};class Lf{constructor(t,e,n){const s=this;let r=!1,a=0,o=0,l;const c=[];this.onStart=void 0,this.onLoad=t,this.onProgress=e,this.onError=n,this._abortController=null,this.itemStart=function(h){o++,r===!1&&s.onStart!==void 0&&s.onStart(h,a,o),r=!0},this.itemEnd=function(h){a++,s.onProgress!==void 0&&s.onProgress(h,a,o),a===o&&(r=!1,s.onLoad!==void 0&&s.onLoad())},this.itemError=function(h){s.onError!==void 0&&s.onError(h)},this.resolveURL=function(h){return l?l(h):h},this.setURLModifier=function(h){return l=h,this},this.addHandler=function(h,u){return c.push(h,u),this},this.removeHandler=function(h){const u=c.indexOf(h);return u!==-1&&c.splice(u,2),this},this.getHandler=function(h){for(let u=0,d=c.length;u<d;u+=2){const f=c[u],g=c[u+1];if(f.global&&(f.lastIndex=0),f.test(h))return g}return null},this.abort=function(){return this.abortController.abort(),this._abortController=null,this}}get abortController(){return this._abortController||(this._abortController=new AbortController),this._abortController}}const Df=new Lf;class Ll{constructor(t){this.manager=t!==void 0?t:Df,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(t,e){const n=this;return new Promise(function(s,r){n.load(t,s,e,r)})}parse(){}setCrossOrigin(t){return this.crossOrigin=t,this}setWithCredentials(t){return this.withCredentials=t,this}setPath(t){return this.path=t,this}setResourcePath(t){return this.resourcePath=t,this}setRequestHeader(t){return this.requestHeader=t,this}abort(){return this}}Ll.DEFAULT_MATERIAL_NAME="__DEFAULT";const ei={};class Ff extends Error{constructor(t,e){super(t),this.response=e}}class Nf extends Ll{constructor(t){super(t),this.mimeType="",this.responseType="",this._abortController=new AbortController}load(t,e,n,s){t===void 0&&(t=""),this.path!==void 0&&(t=this.path+t),t=this.manager.resolveURL(t);const r=Tc.get(`file:${t}`);if(r!==void 0)return this.manager.itemStart(t),setTimeout(()=>{e&&e(r),this.manager.itemEnd(t)},0),r;if(ei[t]!==void 0){ei[t].push({onLoad:e,onProgress:n,onError:s});return}ei[t]=[],ei[t].push({onLoad:e,onProgress:n,onError:s});const a=new Request(t,{headers:new Headers(this.requestHeader),credentials:this.withCredentials?"include":"same-origin",signal:typeof AbortSignal.any=="function"?AbortSignal.any([this._abortController.signal,this.manager.abortController.signal]):this._abortController.signal}),o=this.mimeType,l=this.responseType;fetch(a).then(c=>{if(c.status===200||c.status===0){if(c.status===0&&Ut("FileLoader: HTTP Status 0 received."),typeof ReadableStream>"u"||c.body===void 0||c.body.getReader===void 0)return c;const h=ei[t],u=c.body.getReader(),d=c.headers.get("X-File-Size")||c.headers.get("Content-Length"),f=d?parseInt(d):0,g=f!==0;let x=0;const m=new ReadableStream({start(p){S();function S(){u.read().then(({done:b,value:w})=>{if(b)p.close();else{x+=w.byteLength;const M=new ProgressEvent("progress",{lengthComputable:g,loaded:x,total:f});for(let C=0,A=h.length;C<A;C++){const D=h[C];D.onProgress&&D.onProgress(M)}p.enqueue(w),S()}},b=>{p.error(b)})}}});return new Response(m)}else throw new Ff(`fetch for "${c.url}" responded with ${c.status}: ${c.statusText}`,c)}).then(c=>{switch(l){case"arraybuffer":return c.arrayBuffer();case"blob":return c.blob();case"document":return c.text().then(h=>new DOMParser().parseFromString(h,o));case"json":return c.json();default:if(o==="")return c.text();{const u=/charset="?([^;"\s]*)"?/i.exec(o),d=u&&u[1]?u[1].toLowerCase():void 0,f=new TextDecoder(d);return c.arrayBuffer().then(g=>f.decode(g))}}}).then(c=>{Tc.add(`file:${t}`,c);const h=ei[t];delete ei[t];for(let u=0,d=h.length;u<d;u++){const f=h[u];f.onLoad&&f.onLoad(c)}}).catch(c=>{const h=ei[t];if(h===void 0)throw this.manager.itemError(t),c;delete ei[t];for(let u=0,d=h.length;u<d;u++){const f=h[u];f.onError&&f.onError(c)}this.manager.itemError(t)}).finally(()=>{this.manager.itemEnd(t)}),this.manager.itemStart(t)}setResponseType(t){return this.responseType=t,this}setMimeType(t){return this.mimeType=t,this}abort(){return this._abortController.abort(),this._abortController=new AbortController,this}}class Wh extends De{constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new zt(t),this.intensity=e}dispose(){this.dispatchEvent({type:"dispose"})}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){const e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,e}}const qa=new ee,Cc=new L,Ac=new L;class Uf{constructor(t){this.camera=t,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new dt(512,512),this.mapType=fn,this.map=null,this.mapPass=null,this.matrix=new ee,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Al,this._frameExtents=new dt(1,1),this._viewportCount=1,this._viewports=[new be(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(t){const e=this.camera,n=this.matrix;Cc.setFromMatrixPosition(t.matrixWorld),e.position.copy(Cc),Ac.setFromMatrixPosition(t.target.matrixWorld),e.lookAt(Ac),e.updateMatrixWorld(),qa.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),this._frustum.setFromProjectionMatrix(qa,e.coordinateSystem,e.reversedDepth),e.reversedDepth?n.set(.5,0,0,.5,0,.5,0,.5,0,0,1,0,0,0,0,1):n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(qa)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.intensity=t.intensity,this.bias=t.bias,this.radius=t.radius,this.autoUpdate=t.autoUpdate,this.needsUpdate=t.needsUpdate,this.normalBias=t.normalBias,this.blurSamples=t.blurSamples,this.mapSize.copy(t.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const t={};return this.intensity!==1&&(t.intensity=this.intensity),this.bias!==0&&(t.bias=this.bias),this.normalBias!==0&&(t.normalBias=this.normalBias),this.radius!==1&&(t.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(t.mapSize=this.mapSize.toArray()),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}}class Dl extends Rh{constructor(t=-1,e=1,n=1,s=-1,r=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=n,this.bottom=s,this.near=r,this.far=a,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,n,s,r,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,s=(this.top+this.bottom)/2;let r=n-t,a=n+t,o=s+e,l=s-e;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,a=r+c*this.view.width,o-=h*this.view.offsetY,l=o-h*this.view.height}this.projectionMatrix.makeOrthographic(r,a,o,l,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}}class Of extends Uf{constructor(){super(new Dl(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class Bf extends Wh{constructor(t,e){super(t,e),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(De.DEFAULT_UP),this.updateMatrix(),this.target=new De,this.shadow=new Of}dispose(){super.dispose(),this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}toJSON(t){const e=super.toJSON(t);return e.object.shadow=this.shadow.toJSON(),e.object.target=this.target.uuid,e}}class kf extends Wh{constructor(t,e){super(t,e),this.isAmbientLight=!0,this.type="AmbientLight"}}let Ur;class Xh{static getContext(){return Ur===void 0&&(Ur=new(window.AudioContext||window.webkitAudioContext)),Ur}static setContext(t){Ur=t}}class zf extends Ll{constructor(t){super(t)}load(t,e,n,s){const r=this,a=new Nf(this.manager);a.setResponseType("arraybuffer"),a.setPath(this.path),a.setRequestHeader(this.requestHeader),a.setWithCredentials(this.withCredentials),a.load(t,function(l){try{const c=l.slice(0);Xh.getContext().decodeAudioData(c,function(u){e(u)}).catch(o)}catch(c){o(c)}},n,s);function o(l){s?s(l):ne(l),r.manager.itemError(t)}}}class Gf extends yn{constructor(t=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=t}}class Yh{constructor(t=!0){this.autoStart=t,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=performance.now(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let t=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const e=performance.now();t=(e-this.oldTime)/1e3,this.oldTime=e,this.elapsedTime+=t}return t}}const Li=new L,Za=new qe,Hf=new L,Di=new L,Fi=new L;class Vf extends De{constructor(){super(),this.type="AudioListener",this.context=Xh.getContext(),this.gain=this.context.createGain(),this.gain.connect(this.context.destination),this.filter=null,this.timeDelta=0,this._clock=new Yh}getInput(){return this.gain}removeFilter(){return this.filter!==null&&(this.gain.disconnect(this.filter),this.filter.disconnect(this.context.destination),this.gain.connect(this.context.destination),this.filter=null),this}getFilter(){return this.filter}setFilter(t){return this.filter!==null?(this.gain.disconnect(this.filter),this.filter.disconnect(this.context.destination)):this.gain.disconnect(this.context.destination),this.filter=t,this.gain.connect(this.filter),this.filter.connect(this.context.destination),this}getMasterVolume(){return this.gain.gain.value}setMasterVolume(t){return this.gain.gain.setTargetAtTime(t,this.context.currentTime,.01),this}updateMatrixWorld(t){super.updateMatrixWorld(t);const e=this.context.listener;if(this.timeDelta=this._clock.getDelta(),this.matrixWorld.decompose(Li,Za,Hf),Di.set(0,0,-1).applyQuaternion(Za),Fi.set(0,1,0).applyQuaternion(Za),e.positionX){const n=this.context.currentTime+this.timeDelta;e.positionX.linearRampToValueAtTime(Li.x,n),e.positionY.linearRampToValueAtTime(Li.y,n),e.positionZ.linearRampToValueAtTime(Li.z,n),e.forwardX.linearRampToValueAtTime(Di.x,n),e.forwardY.linearRampToValueAtTime(Di.y,n),e.forwardZ.linearRampToValueAtTime(Di.z,n),e.upX.linearRampToValueAtTime(Fi.x,n),e.upY.linearRampToValueAtTime(Fi.y,n),e.upZ.linearRampToValueAtTime(Fi.z,n)}else e.setPosition(Li.x,Li.y,Li.z),e.setOrientation(Di.x,Di.y,Di.z,Fi.x,Fi.y,Fi.z)}}class Rc extends De{constructor(t){super(),this.type="Audio",this.listener=t,this.context=t.context,this.gain=this.context.createGain(),this.gain.connect(t.getInput()),this.autoplay=!1,this.buffer=null,this.detune=0,this.loop=!1,this.loopStart=0,this.loopEnd=0,this.offset=0,this.duration=void 0,this.playbackRate=1,this.isPlaying=!1,this.hasPlaybackControl=!0,this.source=null,this.sourceType="empty",this._startedAt=0,this._progress=0,this._connected=!1,this.filters=[]}getOutput(){return this.gain}setNodeSource(t){return this.hasPlaybackControl=!1,this.sourceType="audioNode",this.source=t,this.connect(),this}setMediaElementSource(t){return this.hasPlaybackControl=!1,this.sourceType="mediaNode",this.source=this.context.createMediaElementSource(t),this.connect(),this}setMediaStreamSource(t){return this.hasPlaybackControl=!1,this.sourceType="mediaStreamNode",this.source=this.context.createMediaStreamSource(t),this.connect(),this}setBuffer(t){return this.buffer=t,this.sourceType="buffer",this.autoplay&&this.play(),this}play(t=0){if(this.isPlaying===!0){Ut("Audio: Audio is already playing.");return}if(this.hasPlaybackControl===!1){Ut("Audio: this Audio has no playback control.");return}this._startedAt=this.context.currentTime+t;const e=this.context.createBufferSource();return e.buffer=this.buffer,e.loop=this.loop,e.loopStart=this.loopStart,e.loopEnd=this.loopEnd,e.onended=this.onEnded.bind(this),e.start(this._startedAt,this._progress+this.offset,this.duration),this.isPlaying=!0,this.source=e,this.setDetune(this.detune),this.setPlaybackRate(this.playbackRate),this.connect()}pause(){if(this.hasPlaybackControl===!1){Ut("Audio: this Audio has no playback control.");return}return this.isPlaying===!0&&(this._progress+=Math.max(this.context.currentTime-this._startedAt,0)*this.playbackRate,this.loop===!0&&(this._progress=this._progress%(this.duration||this.buffer.duration)),this.source.stop(),this.source.onended=null,this.isPlaying=!1),this}stop(t=0){if(this.hasPlaybackControl===!1){Ut("Audio: this Audio has no playback control.");return}return this._progress=0,this.source!==null&&(this.source.stop(this.context.currentTime+t),this.source.onended=null),this.isPlaying=!1,this}connect(){if(this.filters.length>0){this.source.connect(this.filters[0]);for(let t=1,e=this.filters.length;t<e;t++)this.filters[t-1].connect(this.filters[t]);this.filters[this.filters.length-1].connect(this.getOutput())}else this.source.connect(this.getOutput());return this._connected=!0,this}disconnect(){if(this._connected!==!1){if(this.filters.length>0){this.source.disconnect(this.filters[0]);for(let t=1,e=this.filters.length;t<e;t++)this.filters[t-1].disconnect(this.filters[t]);this.filters[this.filters.length-1].disconnect(this.getOutput())}else this.source.disconnect(this.getOutput());return this._connected=!1,this}}getFilters(){return this.filters}setFilters(t){return t||(t=[]),this._connected===!0?(this.disconnect(),this.filters=t.slice(),this.connect()):this.filters=t.slice(),this}setDetune(t){return this.detune=t,this.isPlaying===!0&&this.source.detune!==void 0&&this.source.detune.setTargetAtTime(this.detune,this.context.currentTime,.01),this}getDetune(){return this.detune}getFilter(){return this.getFilters()[0]}setFilter(t){return this.setFilters(t?[t]:[])}setPlaybackRate(t){if(this.hasPlaybackControl===!1){Ut("Audio: this Audio has no playback control.");return}return this.playbackRate=t,this.isPlaying===!0&&this.source.playbackRate.setTargetAtTime(this.playbackRate,this.context.currentTime,.01),this}getPlaybackRate(){return this.playbackRate}onEnded(){this.isPlaying=!1,this._progress=0}getLoop(){return this.hasPlaybackControl===!1?(Ut("Audio: this Audio has no playback control."),!1):this.loop}setLoop(t){if(this.hasPlaybackControl===!1){Ut("Audio: this Audio has no playback control.");return}return this.loop=t,this.isPlaying===!0&&(this.source.loop=this.loop),this}setLoopStart(t){return this.loopStart=t,this}setLoopEnd(t){return this.loopEnd=t,this}getVolume(){return this.gain.gain.value}setVolume(t){return this.gain.gain.setTargetAtTime(t,this.context.currentTime,.01),this}copy(t,e){return super.copy(t,e),t.sourceType!=="buffer"?(Ut("Audio: Audio source type cannot be copied."),this):(this.autoplay=t.autoplay,this.buffer=t.buffer,this.detune=t.detune,this.loop=t.loop,this.loopStart=t.loopStart,this.loopEnd=t.loopEnd,this.offset=t.offset,this.duration=t.duration,this.playbackRate=t.playbackRate,this.hasPlaybackControl=t.hasPlaybackControl,this.sourceType=t.sourceType,this.filters=t.filters.slice(),this)}clone(t){return new this.constructor(this.listener).copy(this,t)}}function Pc(i,t,e,n){const s=Wf(n);switch(e){case Mh:return i*t;case Ml:return i*t/s.components*s.byteLength;case yl:return i*t/s.components*s.byteLength;case ys:return i*t*2/s.components*s.byteLength;case Sl:return i*t*2/s.components*s.byteLength;case yh:return i*t*3/s.components*s.byteLength;case Un:return i*t*4/s.components*s.byteLength;case wl:return i*t*4/s.components*s.byteLength;case Vr:case Wr:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*8;case Xr:case Yr:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case So:case Eo:return Math.max(i,16)*Math.max(t,8)/4;case yo:case wo:return Math.max(i,8)*Math.max(t,8)/2;case bo:case To:case Ao:case Ro:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*8;case Co:case Po:case Io:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case Lo:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case Do:return Math.floor((i+4)/5)*Math.floor((t+3)/4)*16;case Fo:return Math.floor((i+4)/5)*Math.floor((t+4)/5)*16;case No:return Math.floor((i+5)/6)*Math.floor((t+4)/5)*16;case Uo:return Math.floor((i+5)/6)*Math.floor((t+5)/6)*16;case Oo:return Math.floor((i+7)/8)*Math.floor((t+4)/5)*16;case Bo:return Math.floor((i+7)/8)*Math.floor((t+5)/6)*16;case ko:return Math.floor((i+7)/8)*Math.floor((t+7)/8)*16;case zo:return Math.floor((i+9)/10)*Math.floor((t+4)/5)*16;case Go:return Math.floor((i+9)/10)*Math.floor((t+5)/6)*16;case Ho:return Math.floor((i+9)/10)*Math.floor((t+7)/8)*16;case Vo:return Math.floor((i+9)/10)*Math.floor((t+9)/10)*16;case Wo:return Math.floor((i+11)/12)*Math.floor((t+9)/10)*16;case Xo:return Math.floor((i+11)/12)*Math.floor((t+11)/12)*16;case Yo:case qo:case Zo:return Math.ceil(i/4)*Math.ceil(t/4)*16;case $o:case Ko:return Math.ceil(i/4)*Math.ceil(t/4)*8;case Jo:case jo:return Math.ceil(i/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${e} format.`)}function Wf(i){switch(i){case fn:case gh:return{byteLength:1,components:1};case js:case xh:case li:return{byteLength:2,components:1};case _l:case vl:return{byteLength:2,components:4};case qn:case xl:case Nn:return{byteLength:4,components:1};case _h:case vh:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${i}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:gl}}));typeof window<"u"&&(window.__THREE__?Ut("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=gl);function qh(){let i=null,t=!1,e=null,n=null;function s(r,a){e(r,a),n=i.requestAnimationFrame(s)}return{start:function(){t!==!0&&e!==null&&(n=i.requestAnimationFrame(s),t=!0)},stop:function(){i.cancelAnimationFrame(n),t=!1},setAnimationLoop:function(r){e=r},setContext:function(r){i=r}}}function Xf(i){const t=new WeakMap;function e(o,l){const c=o.array,h=o.usage,u=c.byteLength,d=i.createBuffer();i.bindBuffer(l,d),i.bufferData(l,c,h),o.onUploadCallback();let f;if(c instanceof Float32Array)f=i.FLOAT;else if(typeof Float16Array<"u"&&c instanceof Float16Array)f=i.HALF_FLOAT;else if(c instanceof Uint16Array)o.isFloat16BufferAttribute?f=i.HALF_FLOAT:f=i.UNSIGNED_SHORT;else if(c instanceof Int16Array)f=i.SHORT;else if(c instanceof Uint32Array)f=i.UNSIGNED_INT;else if(c instanceof Int32Array)f=i.INT;else if(c instanceof Int8Array)f=i.BYTE;else if(c instanceof Uint8Array)f=i.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)f=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:d,type:f,bytesPerElement:c.BYTES_PER_ELEMENT,version:o.version,size:u}}function n(o,l,c){const h=l.array,u=l.updateRanges;if(i.bindBuffer(c,o),u.length===0)i.bufferSubData(c,0,h);else{u.sort((f,g)=>f.start-g.start);let d=0;for(let f=1;f<u.length;f++){const g=u[d],x=u[f];x.start<=g.start+g.count+1?g.count=Math.max(g.count,x.start+x.count-g.start):(++d,u[d]=x)}u.length=d+1;for(let f=0,g=u.length;f<g;f++){const x=u[f];i.bufferSubData(c,x.start*h.BYTES_PER_ELEMENT,h,x.start,x.count)}l.clearUpdateRanges()}l.onUploadCallback()}function s(o){return o.isInterleavedBufferAttribute&&(o=o.data),t.get(o)}function r(o){o.isInterleavedBufferAttribute&&(o=o.data);const l=t.get(o);l&&(i.deleteBuffer(l.buffer),t.delete(o))}function a(o,l){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){const h=t.get(o);(!h||h.version<o.version)&&t.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}const c=t.get(o);if(c===void 0)t.set(o,e(o,l));else if(c.version<o.version){if(c.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(c.buffer,o,l),c.version=o.version}}return{get:s,remove:r,update:a}}var Yf=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,qf=`#ifdef USE_ALPHAHASH
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
#endif`,Zf=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,$f=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Kf=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,Jf=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,jf=`#ifdef USE_AOMAP
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
#endif`,Qf=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,tp=`#ifdef USE_BATCHING
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
#endif`,ep=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,np=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,ip=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,sp=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,rp=`#ifdef USE_IRIDESCENCE
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
#endif`,ap=`#ifdef USE_BUMPMAP
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
#endif`,op=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,lp=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,cp=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,hp=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,up=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,dp=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,fp=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,pp=`#if defined( USE_COLOR_ALPHA )
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
#endif`,mp=`#define PI 3.141592653589793
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
} // validated`,gp=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,xp=`vec3 transformedNormal = objectNormal;
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
#endif`,_p=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,vp=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Mp=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,yp=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Sp="gl_FragColor = linearToOutputTexel( gl_FragColor );",wp=`vec4 LinearTransferOETF( in vec4 value ) {
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
#endif`,bp=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,Tp=`#ifdef USE_ENVMAP
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
#endif`,Cp=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Ap=`#ifdef USE_ENVMAP
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
#endif`,Rp=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Pp=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Ip=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Lp=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Dp=`#ifdef USE_GRADIENTMAP
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
}`,Fp=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Np=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Up=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Op=`uniform bool receiveShadow;
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
#endif`,Bp=`#ifdef USE_ENVMAP
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
#endif`,kp=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,zp=`varying vec3 vViewPosition;
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
material.specularStrength = specularStrength;`,Hp=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Vp=`PhysicalMaterial material;
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
#endif`,Wp=`uniform sampler2D dfgLUT;
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
}`,Xp=`
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
#endif`,Yp=`#if defined( RE_IndirectDiffuse )
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
#endif`,qp=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Zp=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,$p=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Kp=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Jp=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,jp=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Qp=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,tm=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,em=`#if defined( USE_POINTS_UV )
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
#endif`,nm=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,im=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,sm=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,rm=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,am=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,om=`#ifdef USE_MORPHTARGETS
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
#endif`,lm=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,cm=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,hm=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,um=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,dm=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,fm=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,pm=`#ifdef USE_NORMALMAP
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
#endif`,mm=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,gm=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,xm=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,_m=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,vm=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Mm=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,ym=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Sm=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,wm=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Em=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,bm=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Tm=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Cm=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Am=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Rm=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,Pm=`float getShadowMask() {
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
}`,Im=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Lm=`#ifdef USE_SKINNING
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
#endif`,Dm=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Fm=`#ifdef USE_SKINNING
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
#endif`,Nm=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Um=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Om=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Bm=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,km=`#ifdef USE_TRANSMISSION
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
#endif`,zm=`#ifdef USE_TRANSMISSION
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
#endif`,Hm=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Vm=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Wm=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const Xm=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Ym=`uniform sampler2D t2D;
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
}`,qm=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Zm=`#ifdef ENVMAP_TYPE_CUBE
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
}`,$m=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Km=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Jm=`#include <common>
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
}`,jm=`#if DEPTH_PACKING == 3200
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
}`,Qm=`#define DISTANCE
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
}`,t0=`#define DISTANCE
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
}`,e0=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,n0=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,i0=`uniform float scale;
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
}`,s0=`uniform vec3 diffuse;
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
}`,r0=`#include <common>
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
}`,a0=`uniform vec3 diffuse;
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
}`,o0=`#define LAMBERT
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
}`,l0=`#define LAMBERT
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
}`,c0=`#define MATCAP
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
}`,h0=`#define MATCAP
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
}`,u0=`#define NORMAL
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
}`,d0=`#define NORMAL
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
}`,f0=`#define PHONG
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
}`,p0=`#define PHONG
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
}`,m0=`#define STANDARD
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
}`,g0=`#define STANDARD
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
}`,x0=`#define TOON
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
}`,_0=`#define TOON
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
}`,v0=`uniform float size;
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
}`,M0=`uniform vec3 diffuse;
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
}`,y0=`#include <common>
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
}`,S0=`uniform vec3 color;
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
}`,w0=`uniform float rotation;
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
}`,Zt={alphahash_fragment:Yf,alphahash_pars_fragment:qf,alphamap_fragment:Zf,alphamap_pars_fragment:$f,alphatest_fragment:Kf,alphatest_pars_fragment:Jf,aomap_fragment:jf,aomap_pars_fragment:Qf,batching_pars_vertex:tp,batching_vertex:ep,begin_vertex:np,beginnormal_vertex:ip,bsdfs:sp,iridescence_fragment:rp,bumpmap_pars_fragment:ap,clipping_planes_fragment:op,clipping_planes_pars_fragment:lp,clipping_planes_pars_vertex:cp,clipping_planes_vertex:hp,color_fragment:up,color_pars_fragment:dp,color_pars_vertex:fp,color_vertex:pp,common:mp,cube_uv_reflection_fragment:gp,defaultnormal_vertex:xp,displacementmap_pars_vertex:_p,displacementmap_vertex:vp,emissivemap_fragment:Mp,emissivemap_pars_fragment:yp,colorspace_fragment:Sp,colorspace_pars_fragment:wp,envmap_fragment:Ep,envmap_common_pars_fragment:bp,envmap_pars_fragment:Tp,envmap_pars_vertex:Cp,envmap_physical_pars_fragment:Bp,envmap_vertex:Ap,fog_vertex:Rp,fog_pars_vertex:Pp,fog_fragment:Ip,fog_pars_fragment:Lp,gradientmap_pars_fragment:Dp,lightmap_pars_fragment:Fp,lights_lambert_fragment:Np,lights_lambert_pars_fragment:Up,lights_pars_begin:Op,lights_toon_fragment:kp,lights_toon_pars_fragment:zp,lights_phong_fragment:Gp,lights_phong_pars_fragment:Hp,lights_physical_fragment:Vp,lights_physical_pars_fragment:Wp,lights_fragment_begin:Xp,lights_fragment_maps:Yp,lights_fragment_end:qp,logdepthbuf_fragment:Zp,logdepthbuf_pars_fragment:$p,logdepthbuf_pars_vertex:Kp,logdepthbuf_vertex:Jp,map_fragment:jp,map_pars_fragment:Qp,map_particle_fragment:tm,map_particle_pars_fragment:em,metalnessmap_fragment:nm,metalnessmap_pars_fragment:im,morphinstance_vertex:sm,morphcolor_vertex:rm,morphnormal_vertex:am,morphtarget_pars_vertex:om,morphtarget_vertex:lm,normal_fragment_begin:cm,normal_fragment_maps:hm,normal_pars_fragment:um,normal_pars_vertex:dm,normal_vertex:fm,normalmap_pars_fragment:pm,clearcoat_normal_fragment_begin:mm,clearcoat_normal_fragment_maps:gm,clearcoat_pars_fragment:xm,iridescence_pars_fragment:_m,opaque_fragment:vm,packing:Mm,premultiplied_alpha_fragment:ym,project_vertex:Sm,dithering_fragment:wm,dithering_pars_fragment:Em,roughnessmap_fragment:bm,roughnessmap_pars_fragment:Tm,shadowmap_pars_fragment:Cm,shadowmap_pars_vertex:Am,shadowmap_vertex:Rm,shadowmask_pars_fragment:Pm,skinbase_vertex:Im,skinning_pars_vertex:Lm,skinning_vertex:Dm,skinnormal_vertex:Fm,specularmap_fragment:Nm,specularmap_pars_fragment:Um,tonemapping_fragment:Om,tonemapping_pars_fragment:Bm,transmission_fragment:km,transmission_pars_fragment:zm,uv_pars_fragment:Gm,uv_pars_vertex:Hm,uv_vertex:Vm,worldpos_vertex:Wm,background_vert:Xm,background_frag:Ym,backgroundCube_vert:qm,backgroundCube_frag:Zm,cube_vert:$m,cube_frag:Km,depth_vert:Jm,depth_frag:jm,distance_vert:Qm,distance_frag:t0,equirect_vert:e0,equirect_frag:n0,linedashed_vert:i0,linedashed_frag:s0,meshbasic_vert:r0,meshbasic_frag:a0,meshlambert_vert:o0,meshlambert_frag:l0,meshmatcap_vert:c0,meshmatcap_frag:h0,meshnormal_vert:u0,meshnormal_frag:d0,meshphong_vert:f0,meshphong_frag:p0,meshphysical_vert:m0,meshphysical_frag:g0,meshtoon_vert:x0,meshtoon_frag:_0,points_vert:v0,points_frag:M0,shadow_vert:y0,shadow_frag:S0,sprite_vert:w0,sprite_frag:E0},vt={common:{diffuse:{value:new zt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new qt},alphaMap:{value:null},alphaMapTransform:{value:new qt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new qt}},envmap:{envMap:{value:null},envMapRotation:{value:new qt},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new qt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new qt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new qt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new qt},normalScale:{value:new dt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new qt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new qt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new qt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new qt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new zt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new zt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new qt},alphaTest:{value:0},uvTransform:{value:new qt}},sprite:{diffuse:{value:new zt(16777215)},opacity:{value:1},center:{value:new dt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new qt},alphaMap:{value:null},alphaMapTransform:{value:new qt},alphaTest:{value:0}}},zn={basic:{uniforms:je([vt.common,vt.specularmap,vt.envmap,vt.aomap,vt.lightmap,vt.fog]),vertexShader:Zt.meshbasic_vert,fragmentShader:Zt.meshbasic_frag},lambert:{uniforms:je([vt.common,vt.specularmap,vt.envmap,vt.aomap,vt.lightmap,vt.emissivemap,vt.bumpmap,vt.normalmap,vt.displacementmap,vt.fog,vt.lights,{emissive:{value:new zt(0)}}]),vertexShader:Zt.meshlambert_vert,fragmentShader:Zt.meshlambert_frag},phong:{uniforms:je([vt.common,vt.specularmap,vt.envmap,vt.aomap,vt.lightmap,vt.emissivemap,vt.bumpmap,vt.normalmap,vt.displacementmap,vt.fog,vt.lights,{emissive:{value:new zt(0)},specular:{value:new zt(1118481)},shininess:{value:30}}]),vertexShader:Zt.meshphong_vert,fragmentShader:Zt.meshphong_frag},standard:{uniforms:je([vt.common,vt.envmap,vt.aomap,vt.lightmap,vt.emissivemap,vt.bumpmap,vt.normalmap,vt.displacementmap,vt.roughnessmap,vt.metalnessmap,vt.fog,vt.lights,{emissive:{value:new zt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Zt.meshphysical_vert,fragmentShader:Zt.meshphysical_frag},toon:{uniforms:je([vt.common,vt.aomap,vt.lightmap,vt.emissivemap,vt.bumpmap,vt.normalmap,vt.displacementmap,vt.gradientmap,vt.fog,vt.lights,{emissive:{value:new zt(0)}}]),vertexShader:Zt.meshtoon_vert,fragmentShader:Zt.meshtoon_frag},matcap:{uniforms:je([vt.common,vt.bumpmap,vt.normalmap,vt.displacementmap,vt.fog,{matcap:{value:null}}]),vertexShader:Zt.meshmatcap_vert,fragmentShader:Zt.meshmatcap_frag},points:{uniforms:je([vt.points,vt.fog]),vertexShader:Zt.points_vert,fragmentShader:Zt.points_frag},dashed:{uniforms:je([vt.common,vt.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Zt.linedashed_vert,fragmentShader:Zt.linedashed_frag},depth:{uniforms:je([vt.common,vt.displacementmap]),vertexShader:Zt.depth_vert,fragmentShader:Zt.depth_frag},normal:{uniforms:je([vt.common,vt.bumpmap,vt.normalmap,vt.displacementmap,{opacity:{value:1}}]),vertexShader:Zt.meshnormal_vert,fragmentShader:Zt.meshnormal_frag},sprite:{uniforms:je([vt.sprite,vt.fog]),vertexShader:Zt.sprite_vert,fragmentShader:Zt.sprite_frag},background:{uniforms:{uvTransform:{value:new qt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Zt.background_vert,fragmentShader:Zt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new qt}},vertexShader:Zt.backgroundCube_vert,fragmentShader:Zt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Zt.cube_vert,fragmentShader:Zt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Zt.equirect_vert,fragmentShader:Zt.equirect_frag},distance:{uniforms:je([vt.common,vt.displacementmap,{referencePosition:{value:new L},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Zt.distance_vert,fragmentShader:Zt.distance_frag},shadow:{uniforms:je([vt.lights,vt.fog,{color:{value:new zt(0)},opacity:{value:1}}]),vertexShader:Zt.shadow_vert,fragmentShader:Zt.shadow_frag}};zn.physical={uniforms:je([zn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new qt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new qt},clearcoatNormalScale:{value:new dt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new qt},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new qt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new qt},sheen:{value:0},sheenColor:{value:new zt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new qt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new qt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new qt},transmissionSamplerSize:{value:new dt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new qt},attenuationDistance:{value:0},attenuationColor:{value:new zt(0)},specularColor:{value:new zt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new qt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new qt},anisotropyVector:{value:new dt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new qt}}]),vertexShader:Zt.meshphysical_vert,fragmentShader:Zt.meshphysical_frag};const Or={r:0,b:0,g:0},Ni=new Fe,b0=new ee;function T0(i,t,e,n,s,r,a){const o=new zt(0);let l=r===!0?0:1,c,h,u=null,d=0,f=null;function g(b){let w=b.isScene===!0?b.background:null;return w&&w.isTexture&&(w=(b.backgroundBlurriness>0?e:t).get(w)),w}function x(b){let w=!1;const M=g(b);M===null?p(o,l):M&&M.isColor&&(p(M,1),w=!0);const C=i.xr.getEnvironmentBlendMode();C==="additive"?n.buffers.color.setClear(0,0,0,1,a):C==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,a),(i.autoClear||w)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))}function m(b,w){const M=g(w);M&&(M.isCubeTexture||M.mapping===ua)?(h===void 0&&(h=new j(new se(1,1,1),new Tn({name:"BackgroundCubeMaterial",uniforms:ws(zn.backgroundCube.uniforms),vertexShader:zn.backgroundCube.vertexShader,fragmentShader:zn.backgroundCube.fragmentShader,side:rn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(C,A,D){this.matrixWorld.copyPosition(D.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),s.update(h)),Ni.copy(w.backgroundRotation),Ni.x*=-1,Ni.y*=-1,Ni.z*=-1,M.isCubeTexture&&M.isRenderTargetTexture===!1&&(Ni.y*=-1,Ni.z*=-1),h.material.uniforms.envMap.value=M,h.material.uniforms.flipEnvMap.value=M.isCubeTexture&&M.isRenderTargetTexture===!1?-1:1,h.material.uniforms.backgroundBlurriness.value=w.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=w.backgroundIntensity,h.material.uniforms.backgroundRotation.value.setFromMatrix4(b0.makeRotationFromEuler(Ni)),h.material.toneMapped=re.getTransfer(M.colorSpace)!==de,(u!==M||d!==M.version||f!==i.toneMapping)&&(h.material.needsUpdate=!0,u=M,d=M.version,f=i.toneMapping),h.layers.enableAll(),b.unshift(h,h.geometry,h.material,0,0,null)):M&&M.isTexture&&(c===void 0&&(c=new j(new Cs(2,2),new Tn({name:"BackgroundMaterial",uniforms:ws(zn.background.uniforms),vertexShader:zn.background.vertexShader,fragmentShader:zn.background.fragmentShader,side:Ei,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),s.update(c)),c.material.uniforms.t2D.value=M,c.material.uniforms.backgroundIntensity.value=w.backgroundIntensity,c.material.toneMapped=re.getTransfer(M.colorSpace)!==de,M.matrixAutoUpdate===!0&&M.updateMatrix(),c.material.uniforms.uvTransform.value.copy(M.matrix),(u!==M||d!==M.version||f!==i.toneMapping)&&(c.material.needsUpdate=!0,u=M,d=M.version,f=i.toneMapping),c.layers.enableAll(),b.unshift(c,c.geometry,c.material,0,0,null))}function p(b,w){b.getRGB(Or,Ah(i)),n.buffers.color.setClear(Or.r,Or.g,Or.b,w,a)}function S(){h!==void 0&&(h.geometry.dispose(),h.material.dispose(),h=void 0),c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0)}return{getClearColor:function(){return o},setClearColor:function(b,w=1){o.set(b),l=w,p(o,l)},getClearAlpha:function(){return l},setClearAlpha:function(b){l=b,p(o,l)},render:x,addToRenderList:m,dispose:S}}function C0(i,t){const e=i.getParameter(i.MAX_VERTEX_ATTRIBS),n={},s=d(null);let r=s,a=!1;function o(y,P,I,F,B){let k=!1;const H=u(F,I,P);r!==H&&(r=H,c(r.object)),k=f(y,F,I,B),k&&g(y,F,I,B),B!==null&&t.update(B,i.ELEMENT_ARRAY_BUFFER),(k||a)&&(a=!1,w(y,P,I,F),B!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,t.get(B).buffer))}function l(){return i.createVertexArray()}function c(y){return i.bindVertexArray(y)}function h(y){return i.deleteVertexArray(y)}function u(y,P,I){const F=I.wireframe===!0;let B=n[y.id];B===void 0&&(B={},n[y.id]=B);let k=B[P.id];k===void 0&&(k={},B[P.id]=k);let H=k[F];return H===void 0&&(H=d(l()),k[F]=H),H}function d(y){const P=[],I=[],F=[];for(let B=0;B<e;B++)P[B]=0,I[B]=0,F[B]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:P,enabledAttributes:I,attributeDivisors:F,object:y,attributes:{},index:null}}function f(y,P,I,F){const B=r.attributes,k=P.attributes;let H=0;const z=I.getAttributes();for(const $ in z)if(z[$].location>=0){const st=B[$];let rt=k[$];if(rt===void 0&&($==="instanceMatrix"&&y.instanceMatrix&&(rt=y.instanceMatrix),$==="instanceColor"&&y.instanceColor&&(rt=y.instanceColor)),st===void 0||st.attribute!==rt||rt&&st.data!==rt.data)return!0;H++}return r.attributesNum!==H||r.index!==F}function g(y,P,I,F){const B={},k=P.attributes;let H=0;const z=I.getAttributes();for(const $ in z)if(z[$].location>=0){let st=k[$];st===void 0&&($==="instanceMatrix"&&y.instanceMatrix&&(st=y.instanceMatrix),$==="instanceColor"&&y.instanceColor&&(st=y.instanceColor));const rt={};rt.attribute=st,st&&st.data&&(rt.data=st.data),B[$]=rt,H++}r.attributes=B,r.attributesNum=H,r.index=F}function x(){const y=r.newAttributes;for(let P=0,I=y.length;P<I;P++)y[P]=0}function m(y){p(y,0)}function p(y,P){const I=r.newAttributes,F=r.enabledAttributes,B=r.attributeDivisors;I[y]=1,F[y]===0&&(i.enableVertexAttribArray(y),F[y]=1),B[y]!==P&&(i.vertexAttribDivisor(y,P),B[y]=P)}function S(){const y=r.newAttributes,P=r.enabledAttributes;for(let I=0,F=P.length;I<F;I++)P[I]!==y[I]&&(i.disableVertexAttribArray(I),P[I]=0)}function b(y,P,I,F,B,k,H){H===!0?i.vertexAttribIPointer(y,P,I,B,k):i.vertexAttribPointer(y,P,I,F,B,k)}function w(y,P,I,F){x();const B=F.attributes,k=I.getAttributes(),H=P.defaultAttributeValues;for(const z in k){const $=k[z];if($.location>=0){let ut=B[z];if(ut===void 0&&(z==="instanceMatrix"&&y.instanceMatrix&&(ut=y.instanceMatrix),z==="instanceColor"&&y.instanceColor&&(ut=y.instanceColor)),ut!==void 0){const st=ut.normalized,rt=ut.itemSize,kt=t.get(ut);if(kt===void 0)continue;const Nt=kt.buffer,Kt=kt.type,ie=kt.bytesPerElement,q=Kt===i.INT||Kt===i.UNSIGNED_INT||ut.gpuType===xl;if(ut.isInterleavedBufferAttribute){const et=ut.data,yt=et.stride,bt=ut.offset;if(et.isInstancedInterleavedBuffer){for(let lt=0;lt<$.locationSize;lt++)p($.location+lt,et.meshPerAttribute);y.isInstancedMesh!==!0&&F._maxInstanceCount===void 0&&(F._maxInstanceCount=et.meshPerAttribute*et.count)}else for(let lt=0;lt<$.locationSize;lt++)m($.location+lt);i.bindBuffer(i.ARRAY_BUFFER,Nt);for(let lt=0;lt<$.locationSize;lt++)b($.location+lt,rt/$.locationSize,Kt,st,yt*ie,(bt+rt/$.locationSize*lt)*ie,q)}else{if(ut.isInstancedBufferAttribute){for(let et=0;et<$.locationSize;et++)p($.location+et,ut.meshPerAttribute);y.isInstancedMesh!==!0&&F._maxInstanceCount===void 0&&(F._maxInstanceCount=ut.meshPerAttribute*ut.count)}else for(let et=0;et<$.locationSize;et++)m($.location+et);i.bindBuffer(i.ARRAY_BUFFER,Nt);for(let et=0;et<$.locationSize;et++)b($.location+et,rt/$.locationSize,Kt,st,rt*ie,rt/$.locationSize*et*ie,q)}}else if(H!==void 0){const st=H[z];if(st!==void 0)switch(st.length){case 2:i.vertexAttrib2fv($.location,st);break;case 3:i.vertexAttrib3fv($.location,st);break;case 4:i.vertexAttrib4fv($.location,st);break;default:i.vertexAttrib1fv($.location,st)}}}}S()}function M(){D();for(const y in n){const P=n[y];for(const I in P){const F=P[I];for(const B in F)h(F[B].object),delete F[B];delete P[I]}delete n[y]}}function C(y){if(n[y.id]===void 0)return;const P=n[y.id];for(const I in P){const F=P[I];for(const B in F)h(F[B].object),delete F[B];delete P[I]}delete n[y.id]}function A(y){for(const P in n){const I=n[P];if(I[y.id]===void 0)continue;const F=I[y.id];for(const B in F)h(F[B].object),delete F[B];delete I[y.id]}}function D(){v(),a=!0,r!==s&&(r=s,c(r.object))}function v(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:o,reset:D,resetDefaultState:v,dispose:M,releaseStatesOfGeometry:C,releaseStatesOfProgram:A,initAttributes:x,enableAttribute:m,disableUnusedAttributes:S}}function A0(i,t,e){let n;function s(c){n=c}function r(c,h){i.drawArrays(n,c,h),e.update(h,n,1)}function a(c,h,u){u!==0&&(i.drawArraysInstanced(n,c,h,u),e.update(h,n,u))}function o(c,h,u){if(u===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,c,0,h,0,u);let f=0;for(let g=0;g<u;g++)f+=h[g];e.update(f,n,1)}function l(c,h,u,d){if(u===0)return;const f=t.get("WEBGL_multi_draw");if(f===null)for(let g=0;g<c.length;g++)a(c[g],h[g],d[g]);else{f.multiDrawArraysInstancedWEBGL(n,c,0,h,0,d,0,u);let g=0;for(let x=0;x<u;x++)g+=h[x]*d[x];e.update(g,n,1)}}this.setMode=s,this.render=r,this.renderInstances=a,this.renderMultiDraw=o,this.renderMultiDrawInstances=l}function R0(i,t,e,n){let s;function r(){if(s!==void 0)return s;if(t.has("EXT_texture_filter_anisotropic")===!0){const A=t.get("EXT_texture_filter_anisotropic");s=i.getParameter(A.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function a(A){return!(A!==Un&&n.convert(A)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(A){const D=A===li&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(A!==fn&&n.convert(A)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE)&&A!==Nn&&!D)}function l(A){if(A==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";A="mediump"}return A==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=e.precision!==void 0?e.precision:"highp";const h=l(c);h!==c&&(Ut("WebGLRenderer:",c,"not supported, using",h,"instead."),c=h);const u=e.logarithmicDepthBuffer===!0,d=e.reversedDepthBuffer===!0&&t.has("EXT_clip_control"),f=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),g=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),x=i.getParameter(i.MAX_TEXTURE_SIZE),m=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),p=i.getParameter(i.MAX_VERTEX_ATTRIBS),S=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),b=i.getParameter(i.MAX_VARYING_VECTORS),w=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),M=i.getParameter(i.MAX_SAMPLES),C=i.getParameter(i.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:l,textureFormatReadable:a,textureTypeReadable:o,precision:c,logarithmicDepthBuffer:u,reversedDepthBuffer:d,maxTextures:f,maxVertexTextures:g,maxTextureSize:x,maxCubemapSize:m,maxAttributes:p,maxVertexUniforms:S,maxVaryings:b,maxFragmentUniforms:w,maxSamples:M,samples:C}}function P0(i){const t=this;let e=null,n=0,s=!1,r=!1;const a=new Oi,o=new qt,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(u,d){const f=u.length!==0||d||n!==0||s;return s=d,n=u.length,f},this.beginShadows=function(){r=!0,h(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(u,d){e=h(u,d,0)},this.setState=function(u,d,f){const g=u.clippingPlanes,x=u.clipIntersection,m=u.clipShadows,p=i.get(u);if(!s||g===null||g.length===0||r&&!m)r?h(null):c();else{const S=r?0:n,b=S*4;let w=p.clippingState||null;l.value=w,w=h(g,d,b,f);for(let M=0;M!==b;++M)w[M]=e[M];p.clippingState=w,this.numIntersection=x?this.numPlanes:0,this.numPlanes+=S}};function c(){l.value!==e&&(l.value=e,l.needsUpdate=n>0),t.numPlanes=n,t.numIntersection=0}function h(u,d,f,g){const x=u!==null?u.length:0;let m=null;if(x!==0){if(m=l.value,g!==!0||m===null){const p=f+x*4,S=d.matrixWorldInverse;o.getNormalMatrix(S),(m===null||m.length<p)&&(m=new Float32Array(p));for(let b=0,w=f;b!==x;++b,w+=4)a.copy(u[b]).applyMatrix4(S,o),a.normal.toArray(m,w),m[w+3]=a.constant}l.value=m,l.needsUpdate=!0}return t.numPlanes=x,t.numIntersection=0,m}}function I0(i){let t=new WeakMap;function e(a,o){return o===xo?a.mapping=Hi:o===_o&&(a.mapping=Ms),a}function n(a){if(a&&a.isTexture){const o=a.mapping;if(o===xo||o===_o)if(t.has(a)){const l=t.get(a).texture;return e(l,a.mapping)}else{const l=a.image;if(l&&l.height>0){const c=new Ih(l.height);return c.fromEquirectangularTexture(i,a),t.set(a,c),a.addEventListener("dispose",s),e(c.texture,a.mapping)}else return null}}return a}function s(a){const o=a.target;o.removeEventListener("dispose",s);const l=t.get(o);l!==void 0&&(t.delete(o),l.dispose())}function r(){t=new WeakMap}return{get:n,dispose:r}}const yi=4,Ic=[.125,.215,.35,.446,.526,.582],ki=20,L0=256,ks=new Dl,Lc=new zt;let $a=null,Ka=0,Ja=0,ja=!1;const D0=new L;class Dc{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._sigmas=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(t,e=0,n=.1,s=100,r={}){const{size:a=256,position:o=D0}=r;$a=this._renderer.getRenderTarget(),Ka=this._renderer.getActiveCubeFace(),Ja=this._renderer.getActiveMipmapLevel(),ja=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(a);const l=this._allocateTargets();return l.depthBuffer=!0,this._sceneToCubeUV(t,n,s,l,o),e>0&&this._blur(l,0,0,e),this._applyPMREM(l),this._cleanup(l),l}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Uc(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Nc(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodMeshes.length;t++)this._lodMeshes[t].geometry.dispose()}_cleanup(t){this._renderer.setRenderTarget($a,Ka,Ja),this._renderer.xr.enabled=ja,t.scissorTest=!1,us(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===Hi||t.mapping===Ms?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),$a=this._renderer.getRenderTarget(),Ka=this._renderer.getActiveCubeFace(),Ja=this._renderer.getActiveMipmapLevel(),ja=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const n=e||this._allocateTargets();return this._textureToCubeUV(t,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,n={magFilter:ze,minFilter:ze,generateMipmaps:!1,type:li,format:Un,colorSpace:Ss,depthBuffer:!1},s=Fc(t,e,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Fc(t,e,n);const{_lodMax:r}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods,sigmas:this._sigmas}=F0(r)),this._blurMaterial=U0(r,t,e),this._ggxMaterial=N0(r,t,e)}return s}_compileMaterial(t){const e=new j(new an,t);this._renderer.compile(e,ks)}_sceneToCubeUV(t,e,n,s,r){const l=new yn(90,1,e,n),c=[1,-1,1,1,1,1],h=[1,1,1,-1,-1,-1],u=this._renderer,d=u.autoClear,f=u.toneMapping;u.getClearColor(Lc),u.toneMapping=Wn,u.autoClear=!1,u.state.buffers.depth.getReversed()&&(u.setRenderTarget(s),u.clearDepth(),u.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new j(new se,new ke({name:"PMREM.Background",side:rn,depthWrite:!1,depthTest:!1})));const x=this._backgroundBox,m=x.material;let p=!1;const S=t.background;S?S.isColor&&(m.color.copy(S),t.background=null,p=!0):(m.color.copy(Lc),p=!0);for(let b=0;b<6;b++){const w=b%3;w===0?(l.up.set(0,c[b],0),l.position.set(r.x,r.y,r.z),l.lookAt(r.x+h[b],r.y,r.z)):w===1?(l.up.set(0,0,c[b]),l.position.set(r.x,r.y,r.z),l.lookAt(r.x,r.y+h[b],r.z)):(l.up.set(0,c[b],0),l.position.set(r.x,r.y,r.z),l.lookAt(r.x,r.y,r.z+h[b]));const M=this._cubeSize;us(s,w*M,b>2?M:0,M,M),u.setRenderTarget(s),p&&u.render(x,l),u.render(t,l)}u.toneMapping=f,u.autoClear=d,t.background=S}_textureToCubeUV(t,e){const n=this._renderer,s=t.mapping===Hi||t.mapping===Ms;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=Uc()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Nc());const r=s?this._cubemapMaterial:this._equirectMaterial,a=this._lodMeshes[0];a.material=r;const o=r.uniforms;o.envMap.value=t;const l=this._cubeSize;us(e,0,0,3*l,2*l),n.setRenderTarget(e),n.render(a,ks)}_applyPMREM(t){const e=this._renderer,n=e.autoClear;e.autoClear=!1;const s=this._lodMeshes.length;for(let r=1;r<s;r++)this._applyGGXFilter(t,r-1,r);e.autoClear=n}_applyGGXFilter(t,e,n){const s=this._renderer,r=this._pingPongRenderTarget,a=this._ggxMaterial,o=this._lodMeshes[n];o.material=a;const l=a.uniforms,c=n/(this._lodMeshes.length-1),h=e/(this._lodMeshes.length-1),u=Math.sqrt(c*c-h*h),d=0+c*1.25,f=u*d,{_lodMax:g}=this,x=this._sizeLods[n],m=3*x*(n>g-yi?n-g+yi:0),p=4*(this._cubeSize-x);l.envMap.value=t.texture,l.roughness.value=f,l.mipInt.value=g-e,us(r,m,p,3*x,2*x),s.setRenderTarget(r),s.render(o,ks),l.envMap.value=r.texture,l.roughness.value=0,l.mipInt.value=g-n,us(t,m,p,3*x,2*x),s.setRenderTarget(t),s.render(o,ks)}_blur(t,e,n,s,r){const a=this._pingPongRenderTarget;this._halfBlur(t,a,e,n,s,"latitudinal",r),this._halfBlur(a,t,n,n,s,"longitudinal",r)}_halfBlur(t,e,n,s,r,a,o){const l=this._renderer,c=this._blurMaterial;a!=="latitudinal"&&a!=="longitudinal"&&ne("blur direction must be either latitudinal or longitudinal!");const h=3,u=this._lodMeshes[s];u.material=c;const d=c.uniforms,f=this._sizeLods[n]-1,g=isFinite(r)?Math.PI/(2*f):2*Math.PI/(2*ki-1),x=r/g,m=isFinite(r)?1+Math.floor(h*x):ki;m>ki&&Ut(`sigmaRadians, ${r}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${ki}`);const p=[];let S=0;for(let A=0;A<ki;++A){const D=A/x,v=Math.exp(-D*D/2);p.push(v),A===0?S+=v:A<m&&(S+=2*v)}for(let A=0;A<p.length;A++)p[A]=p[A]/S;d.envMap.value=t.texture,d.samples.value=m,d.weights.value=p,d.latitudinal.value=a==="latitudinal",o&&(d.poleAxis.value=o);const{_lodMax:b}=this;d.dTheta.value=g,d.mipInt.value=b-n;const w=this._sizeLods[s],M=3*w*(s>b-yi?s-b+yi:0),C=4*(this._cubeSize-w);us(e,M,C,3*w,2*w),l.setRenderTarget(e),l.render(u,ks)}}function F0(i){const t=[],e=[],n=[];let s=i;const r=i-yi+1+Ic.length;for(let a=0;a<r;a++){const o=Math.pow(2,s);t.push(o);let l=1/o;a>i-yi?l=Ic[a-i+yi-1]:a===0&&(l=0),e.push(l);const c=1/(o-2),h=-c,u=1+c,d=[h,h,u,h,u,u,h,h,u,u,h,u],f=6,g=6,x=3,m=2,p=1,S=new Float32Array(x*g*f),b=new Float32Array(m*g*f),w=new Float32Array(p*g*f);for(let C=0;C<f;C++){const A=C%3*2/3-1,D=C>2?0:-1,v=[A,D,0,A+2/3,D,0,A+2/3,D+1,0,A,D,0,A+2/3,D+1,0,A,D+1,0];S.set(v,x*g*C),b.set(d,m*g*C);const y=[C,C,C,C,C,C];w.set(y,p*g*C)}const M=new an;M.setAttribute("position",new En(S,x)),M.setAttribute("uv",new En(b,m)),M.setAttribute("faceIndex",new En(w,p)),n.push(new j(M,null)),s>yi&&s--}return{lodMeshes:n,sizeLods:t,sigmas:e}}function Fc(i,t,e){const n=new Yn(i,t,e);return n.texture.mapping=ua,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function us(i,t,e,n,s){i.viewport.set(t,e,n,s),i.scissor.set(t,e,n,s)}function N0(i,t,e){return new Tn({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:L0,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:pa(),fragmentShader:`

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
		`,blending:ri,depthTest:!1,depthWrite:!1})}function U0(i,t,e){const n=new Float32Array(ki),s=new L(0,1,0);return new Tn({name:"SphericalGaussianBlur",defines:{n:ki,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:s}},vertexShader:pa(),fragmentShader:`

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
		`,blending:ri,depthTest:!1,depthWrite:!1})}function Nc(){return new Tn({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:pa(),fragmentShader:`

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
		`,blending:ri,depthTest:!1,depthWrite:!1})}function Uc(){return new Tn({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:pa(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:ri,depthTest:!1,depthWrite:!1})}function pa(){return`

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
	`}function O0(i){let t=new WeakMap,e=null;function n(o){if(o&&o.isTexture){const l=o.mapping,c=l===xo||l===_o,h=l===Hi||l===Ms;if(c||h){let u=t.get(o);const d=u!==void 0?u.texture.pmremVersion:0;if(o.isRenderTargetTexture&&o.pmremVersion!==d)return e===null&&(e=new Dc(i)),u=c?e.fromEquirectangular(o,u):e.fromCubemap(o,u),u.texture.pmremVersion=o.pmremVersion,t.set(o,u),u.texture;if(u!==void 0)return u.texture;{const f=o.image;return c&&f&&f.height>0||h&&f&&s(f)?(e===null&&(e=new Dc(i)),u=c?e.fromEquirectangular(o):e.fromCubemap(o),u.texture.pmremVersion=o.pmremVersion,t.set(o,u),o.addEventListener("dispose",r),u.texture):null}}}return o}function s(o){let l=0;const c=6;for(let h=0;h<c;h++)o[h]!==void 0&&l++;return l===c}function r(o){const l=o.target;l.removeEventListener("dispose",r);const c=t.get(l);c!==void 0&&(t.delete(l),c.dispose())}function a(){t=new WeakMap,e!==null&&(e.dispose(),e=null)}return{get:n,dispose:a}}function B0(i){const t={};function e(n){if(t[n]!==void 0)return t[n];const s=i.getExtension(n);return t[n]=s,s}return{has:function(n){return e(n)!==null},init:function(){e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance"),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture"),e("WEBGL_render_shared_exponent")},get:function(n){const s=e(n);return s===null&&tr("WebGLRenderer: "+n+" extension not supported."),s}}}function k0(i,t,e,n){const s={},r=new WeakMap;function a(u){const d=u.target;d.index!==null&&t.remove(d.index);for(const g in d.attributes)t.remove(d.attributes[g]);d.removeEventListener("dispose",a),delete s[d.id];const f=r.get(d);f&&(t.remove(f),r.delete(d)),n.releaseStatesOfGeometry(d),d.isInstancedBufferGeometry===!0&&delete d._maxInstanceCount,e.memory.geometries--}function o(u,d){return s[d.id]===!0||(d.addEventListener("dispose",a),s[d.id]=!0,e.memory.geometries++),d}function l(u){const d=u.attributes;for(const f in d)t.update(d[f],i.ARRAY_BUFFER)}function c(u){const d=[],f=u.index,g=u.attributes.position;let x=0;if(f!==null){const S=f.array;x=f.version;for(let b=0,w=S.length;b<w;b+=3){const M=S[b+0],C=S[b+1],A=S[b+2];d.push(M,C,C,A,A,M)}}else if(g!==void 0){const S=g.array;x=g.version;for(let b=0,w=S.length/3-1;b<w;b+=3){const M=b+0,C=b+1,A=b+2;d.push(M,C,C,A,A,M)}}else return;const m=new(Sh(d)?Ch:Th)(d,1);m.version=x;const p=r.get(u);p&&t.remove(p),r.set(u,m)}function h(u){const d=r.get(u);if(d){const f=u.index;f!==null&&d.version<f.version&&c(u)}else c(u);return r.get(u)}return{get:o,update:l,getWireframeAttribute:h}}function z0(i,t,e){let n;function s(d){n=d}let r,a;function o(d){r=d.type,a=d.bytesPerElement}function l(d,f){i.drawElements(n,f,r,d*a),e.update(f,n,1)}function c(d,f,g){g!==0&&(i.drawElementsInstanced(n,f,r,d*a,g),e.update(f,n,g))}function h(d,f,g){if(g===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,f,0,r,d,0,g);let m=0;for(let p=0;p<g;p++)m+=f[p];e.update(m,n,1)}function u(d,f,g,x){if(g===0)return;const m=t.get("WEBGL_multi_draw");if(m===null)for(let p=0;p<d.length;p++)c(d[p]/a,f[p],x[p]);else{m.multiDrawElementsInstancedWEBGL(n,f,0,r,d,0,x,0,g);let p=0;for(let S=0;S<g;S++)p+=f[S]*x[S];e.update(p,n,1)}}this.setMode=s,this.setIndex=o,this.render=l,this.renderInstances=c,this.renderMultiDraw=h,this.renderMultiDrawInstances=u}function G0(i){const t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,a,o){switch(e.calls++,a){case i.TRIANGLES:e.triangles+=o*(r/3);break;case i.LINES:e.lines+=o*(r/2);break;case i.LINE_STRIP:e.lines+=o*(r-1);break;case i.LINE_LOOP:e.lines+=o*r;break;case i.POINTS:e.points+=o*r;break;default:ne("WebGLInfo: Unknown draw mode:",a);break}}function s(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:s,update:n}}function H0(i,t,e){const n=new WeakMap,s=new be;function r(a,o,l){const c=a.morphTargetInfluences,h=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,u=h!==void 0?h.length:0;let d=n.get(o);if(d===void 0||d.count!==u){let y=function(){D.dispose(),n.delete(o),o.removeEventListener("dispose",y)};var f=y;d!==void 0&&d.texture.dispose();const g=o.morphAttributes.position!==void 0,x=o.morphAttributes.normal!==void 0,m=o.morphAttributes.color!==void 0,p=o.morphAttributes.position||[],S=o.morphAttributes.normal||[],b=o.morphAttributes.color||[];let w=0;g===!0&&(w=1),x===!0&&(w=2),m===!0&&(w=3);let M=o.attributes.position.count*w,C=1;M>t.maxTextureSize&&(C=Math.ceil(M/t.maxTextureSize),M=t.maxTextureSize);const A=new Float32Array(M*C*4*u),D=new wh(A,M,C,u);D.type=Nn,D.needsUpdate=!0;const v=w*4;for(let P=0;P<u;P++){const I=p[P],F=S[P],B=b[P],k=M*C*4*P;for(let H=0;H<I.count;H++){const z=H*v;g===!0&&(s.fromBufferAttribute(I,H),A[k+z+0]=s.x,A[k+z+1]=s.y,A[k+z+2]=s.z,A[k+z+3]=0),x===!0&&(s.fromBufferAttribute(F,H),A[k+z+4]=s.x,A[k+z+5]=s.y,A[k+z+6]=s.z,A[k+z+7]=0),m===!0&&(s.fromBufferAttribute(B,H),A[k+z+8]=s.x,A[k+z+9]=s.y,A[k+z+10]=s.z,A[k+z+11]=B.itemSize===4?s.w:1)}}d={count:u,texture:D,size:new dt(M,C)},n.set(o,d),o.addEventListener("dispose",y)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)l.getUniforms().setValue(i,"morphTexture",a.morphTexture,e);else{let g=0;for(let m=0;m<c.length;m++)g+=c[m];const x=o.morphTargetsRelative?1:1-g;l.getUniforms().setValue(i,"morphTargetBaseInfluence",x),l.getUniforms().setValue(i,"morphTargetInfluences",c)}l.getUniforms().setValue(i,"morphTargetsTexture",d.texture,e),l.getUniforms().setValue(i,"morphTargetsTextureSize",d.size)}return{update:r}}function V0(i,t,e,n){let s=new WeakMap;function r(l){const c=n.render.frame,h=l.geometry,u=t.get(l,h);if(s.get(u)!==c&&(t.update(u),s.set(u,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",o)===!1&&l.addEventListener("dispose",o),s.get(l)!==c&&(e.update(l.instanceMatrix,i.ARRAY_BUFFER),l.instanceColor!==null&&e.update(l.instanceColor,i.ARRAY_BUFFER),s.set(l,c))),l.isSkinnedMesh){const d=l.skeleton;s.get(d)!==c&&(d.update(),s.set(d,c))}return u}function a(){s=new WeakMap}function o(l){const c=l.target;c.removeEventListener("dispose",o),e.remove(c.instanceMatrix),c.instanceColor!==null&&e.remove(c.instanceColor)}return{update:r,dispose:a}}const W0={[lh]:"LINEAR_TONE_MAPPING",[ch]:"REINHARD_TONE_MAPPING",[hh]:"CINEON_TONE_MAPPING",[uh]:"ACES_FILMIC_TONE_MAPPING",[fh]:"AGX_TONE_MAPPING",[ph]:"NEUTRAL_TONE_MAPPING",[dh]:"CUSTOM_TONE_MAPPING"};function X0(i,t,e,n,s){const r=new Yn(t,e,{type:i,depthBuffer:n,stencilBuffer:s}),a=new Yn(t,e,{type:li,depthBuffer:!1,stencilBuffer:!1}),o=new an;o.setAttribute("position",new Le([-1,3,0,-1,-1,0,3,-1,0],3)),o.setAttribute("uv",new Le([0,2,0,0,2,0],2));const l=new Af({uniforms:{tDiffuse:{value:null}},vertexShader:`
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
			}`,depthTest:!1,depthWrite:!1}),c=new j(o,l),h=new Dl(-1,1,1,-1,0,1);let u=null,d=null,f=!1,g,x=null,m=[],p=!1;this.setSize=function(S,b){r.setSize(S,b),a.setSize(S,b);for(let w=0;w<m.length;w++){const M=m[w];M.setSize&&M.setSize(S,b)}},this.setEffects=function(S){m=S,p=m.length>0&&m[0].isRenderPass===!0;const b=r.width,w=r.height;for(let M=0;M<m.length;M++){const C=m[M];C.setSize&&C.setSize(b,w)}},this.begin=function(S,b){if(f||S.toneMapping===Wn&&m.length===0)return!1;if(x=b,b!==null){const w=b.width,M=b.height;(r.width!==w||r.height!==M)&&this.setSize(w,M)}return p===!1&&S.setRenderTarget(r),g=S.toneMapping,S.toneMapping=Wn,!0},this.hasRenderPass=function(){return p},this.end=function(S,b){S.toneMapping=g,f=!0;let w=r,M=a;for(let C=0;C<m.length;C++){const A=m[C];if(A.enabled!==!1&&(A.render(S,M,w,b),A.needsSwap!==!1)){const D=w;w=M,M=D}}if(u!==S.outputColorSpace||d!==S.toneMapping){u=S.outputColorSpace,d=S.toneMapping,l.defines={},re.getTransfer(u)===de&&(l.defines.SRGB_TRANSFER="");const C=W0[d];C&&(l.defines[C]=""),l.needsUpdate=!0}l.uniforms.tDiffuse.value=w.texture,S.setRenderTarget(x),S.render(c,h),x=null,f=!1},this.isCompositing=function(){return f},this.dispose=function(){r.dispose(),a.dispose(),o.dispose(),l.dispose()}}const Zh=new Ze,sl=new nr(1,1),$h=new wh,Kh=new Sd,Jh=new Ph,Oc=[],Bc=[],kc=new Float32Array(16),zc=new Float32Array(9),Gc=new Float32Array(4);function As(i,t,e){const n=i[0];if(n<=0||n>0)return i;const s=t*e;let r=Oc[s];if(r===void 0&&(r=new Float32Array(s),Oc[s]=r),t!==0){n.toArray(r,0);for(let a=1,o=0;a!==t;++a)o+=e,i[a].toArray(r,o)}return r}function Ne(i,t){if(i.length!==t.length)return!1;for(let e=0,n=i.length;e<n;e++)if(i[e]!==t[e])return!1;return!0}function Ue(i,t){for(let e=0,n=t.length;e<n;e++)i[e]=t[e]}function ma(i,t){let e=Bc[t];e===void 0&&(e=new Int32Array(t),Bc[t]=e);for(let n=0;n!==t;++n)e[n]=i.allocateTextureUnit();return e}function Y0(i,t){const e=this.cache;e[0]!==t&&(i.uniform1f(this.addr,t),e[0]=t)}function q0(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Ne(e,t))return;i.uniform2fv(this.addr,t),Ue(e,t)}}function Z0(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(i.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(Ne(e,t))return;i.uniform3fv(this.addr,t),Ue(e,t)}}function $0(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Ne(e,t))return;i.uniform4fv(this.addr,t),Ue(e,t)}}function K0(i,t){const e=this.cache,n=t.elements;if(n===void 0){if(Ne(e,t))return;i.uniformMatrix2fv(this.addr,!1,t),Ue(e,t)}else{if(Ne(e,n))return;Gc.set(n),i.uniformMatrix2fv(this.addr,!1,Gc),Ue(e,n)}}function J0(i,t){const e=this.cache,n=t.elements;if(n===void 0){if(Ne(e,t))return;i.uniformMatrix3fv(this.addr,!1,t),Ue(e,t)}else{if(Ne(e,n))return;zc.set(n),i.uniformMatrix3fv(this.addr,!1,zc),Ue(e,n)}}function j0(i,t){const e=this.cache,n=t.elements;if(n===void 0){if(Ne(e,t))return;i.uniformMatrix4fv(this.addr,!1,t),Ue(e,t)}else{if(Ne(e,n))return;kc.set(n),i.uniformMatrix4fv(this.addr,!1,kc),Ue(e,n)}}function Q0(i,t){const e=this.cache;e[0]!==t&&(i.uniform1i(this.addr,t),e[0]=t)}function tg(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Ne(e,t))return;i.uniform2iv(this.addr,t),Ue(e,t)}}function eg(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Ne(e,t))return;i.uniform3iv(this.addr,t),Ue(e,t)}}function ng(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Ne(e,t))return;i.uniform4iv(this.addr,t),Ue(e,t)}}function ig(i,t){const e=this.cache;e[0]!==t&&(i.uniform1ui(this.addr,t),e[0]=t)}function sg(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Ne(e,t))return;i.uniform2uiv(this.addr,t),Ue(e,t)}}function rg(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Ne(e,t))return;i.uniform3uiv(this.addr,t),Ue(e,t)}}function ag(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Ne(e,t))return;i.uniform4uiv(this.addr,t),Ue(e,t)}}function og(i,t,e){const n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s);let r;this.type===i.SAMPLER_2D_SHADOW?(sl.compareFunction=e.isReversedDepthBuffer()?bl:El,r=sl):r=Zh,e.setTexture2D(t||r,s)}function lg(i,t,e){const n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTexture3D(t||Kh,s)}function cg(i,t,e){const n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTextureCube(t||Jh,s)}function hg(i,t,e){const n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTexture2DArray(t||$h,s)}function ug(i){switch(i){case 5126:return Y0;case 35664:return q0;case 35665:return Z0;case 35666:return $0;case 35674:return K0;case 35675:return J0;case 35676:return j0;case 5124:case 35670:return Q0;case 35667:case 35671:return tg;case 35668:case 35672:return eg;case 35669:case 35673:return ng;case 5125:return ig;case 36294:return sg;case 36295:return rg;case 36296:return ag;case 35678:case 36198:case 36298:case 36306:case 35682:return og;case 35679:case 36299:case 36307:return lg;case 35680:case 36300:case 36308:case 36293:return cg;case 36289:case 36303:case 36311:case 36292:return hg}}function dg(i,t){i.uniform1fv(this.addr,t)}function fg(i,t){const e=As(t,this.size,2);i.uniform2fv(this.addr,e)}function pg(i,t){const e=As(t,this.size,3);i.uniform3fv(this.addr,e)}function mg(i,t){const e=As(t,this.size,4);i.uniform4fv(this.addr,e)}function gg(i,t){const e=As(t,this.size,4);i.uniformMatrix2fv(this.addr,!1,e)}function xg(i,t){const e=As(t,this.size,9);i.uniformMatrix3fv(this.addr,!1,e)}function _g(i,t){const e=As(t,this.size,16);i.uniformMatrix4fv(this.addr,!1,e)}function vg(i,t){i.uniform1iv(this.addr,t)}function Mg(i,t){i.uniform2iv(this.addr,t)}function yg(i,t){i.uniform3iv(this.addr,t)}function Sg(i,t){i.uniform4iv(this.addr,t)}function wg(i,t){i.uniform1uiv(this.addr,t)}function Eg(i,t){i.uniform2uiv(this.addr,t)}function bg(i,t){i.uniform3uiv(this.addr,t)}function Tg(i,t){i.uniform4uiv(this.addr,t)}function Cg(i,t,e){const n=this.cache,s=t.length,r=ma(e,s);Ne(n,r)||(i.uniform1iv(this.addr,r),Ue(n,r));let a;this.type===i.SAMPLER_2D_SHADOW?a=sl:a=Zh;for(let o=0;o!==s;++o)e.setTexture2D(t[o]||a,r[o])}function Ag(i,t,e){const n=this.cache,s=t.length,r=ma(e,s);Ne(n,r)||(i.uniform1iv(this.addr,r),Ue(n,r));for(let a=0;a!==s;++a)e.setTexture3D(t[a]||Kh,r[a])}function Rg(i,t,e){const n=this.cache,s=t.length,r=ma(e,s);Ne(n,r)||(i.uniform1iv(this.addr,r),Ue(n,r));for(let a=0;a!==s;++a)e.setTextureCube(t[a]||Jh,r[a])}function Pg(i,t,e){const n=this.cache,s=t.length,r=ma(e,s);Ne(n,r)||(i.uniform1iv(this.addr,r),Ue(n,r));for(let a=0;a!==s;++a)e.setTexture2DArray(t[a]||$h,r[a])}function Ig(i){switch(i){case 5126:return dg;case 35664:return fg;case 35665:return pg;case 35666:return mg;case 35674:return gg;case 35675:return xg;case 35676:return _g;case 5124:case 35670:return vg;case 35667:case 35671:return Mg;case 35668:case 35672:return yg;case 35669:case 35673:return Sg;case 5125:return wg;case 36294:return Eg;case 36295:return bg;case 36296:return Tg;case 35678:case 36198:case 36298:case 36306:case 35682:return Cg;case 35679:case 36299:case 36307:return Ag;case 35680:case 36300:case 36308:case 36293:return Rg;case 36289:case 36303:case 36311:case 36292:return Pg}}class Lg{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.setValue=ug(e.type)}}class Dg{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=Ig(e.type)}}class Fg{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,n){const s=this.seq;for(let r=0,a=s.length;r!==a;++r){const o=s[r];o.setValue(t,e[o.id],n)}}}const Qa=/(\w+)(\])?(\[|\.)?/g;function Hc(i,t){i.seq.push(t),i.map[t.id]=t}function Ng(i,t,e){const n=i.name,s=n.length;for(Qa.lastIndex=0;;){const r=Qa.exec(n),a=Qa.lastIndex;let o=r[1];const l=r[2]==="]",c=r[3];if(l&&(o=o|0),c===void 0||c==="["&&a+2===s){Hc(e,c===void 0?new Lg(o,i,t):new Dg(o,i,t));break}else{let u=e.map[o];u===void 0&&(u=new Fg(o),Hc(e,u)),e=u}}}class qr{constructor(t,e){this.seq=[],this.map={};const n=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let a=0;a<n;++a){const o=t.getActiveUniform(e,a),l=t.getUniformLocation(e,o.name);Ng(o,l,this)}const s=[],r=[];for(const a of this.seq)a.type===t.SAMPLER_2D_SHADOW||a.type===t.SAMPLER_CUBE_SHADOW||a.type===t.SAMPLER_2D_ARRAY_SHADOW?s.push(a):r.push(a);s.length>0&&(this.seq=s.concat(r))}setValue(t,e,n,s){const r=this.map[e];r!==void 0&&r.setValue(t,n,s)}setOptional(t,e,n){const s=e[n];s!==void 0&&this.setValue(t,n,s)}static upload(t,e,n,s){for(let r=0,a=e.length;r!==a;++r){const o=e[r],l=n[o.id];l.needsUpdate!==!1&&o.setValue(t,l.value,s)}}static seqWithValue(t,e){const n=[];for(let s=0,r=t.length;s!==r;++s){const a=t[s];a.id in e&&n.push(a)}return n}}function Vc(i,t,e){const n=i.createShader(t);return i.shaderSource(n,e),i.compileShader(n),n}const Ug=37297;let Og=0;function Bg(i,t){const e=i.split(`
`),n=[],s=Math.max(t-6,0),r=Math.min(t+6,e.length);for(let a=s;a<r;a++){const o=a+1;n.push(`${o===t?">":" "} ${o}: ${e[a]}`)}return n.join(`
`)}const Wc=new qt;function kg(i){re._getMatrix(Wc,re.workingColorSpace,i);const t=`mat3( ${Wc.elements.map(e=>e.toFixed(4))} )`;switch(re.getTransfer(i)){case Kr:return[t,"LinearTransferOETF"];case de:return[t,"sRGBTransferOETF"];default:return Ut("WebGLProgram: Unsupported color space: ",i),[t,"LinearTransferOETF"]}}function Xc(i,t,e){const n=i.getShaderParameter(t,i.COMPILE_STATUS),r=(i.getShaderInfoLog(t)||"").trim();if(n&&r==="")return"";const a=/ERROR: 0:(\d+)/.exec(r);if(a){const o=parseInt(a[1]);return e.toUpperCase()+`

`+r+`

`+Bg(i.getShaderSource(t),o)}else return r}function zg(i,t){const e=kg(t);return[`vec4 ${i}( vec4 value ) {`,`	return ${e[1]}( vec4( value.rgb * ${e[0]}, value.a ) );`,"}"].join(`
`)}const Gg={[lh]:"Linear",[ch]:"Reinhard",[hh]:"Cineon",[uh]:"ACESFilmic",[fh]:"AgX",[ph]:"Neutral",[dh]:"Custom"};function Hg(i,t){const e=Gg[t];return e===void 0?(Ut("WebGLProgram: Unsupported toneMapping:",t),"vec3 "+i+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+i+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}const Br=new L;function Vg(){re.getLuminanceCoefficients(Br);const i=Br.x.toFixed(4),t=Br.y.toFixed(4),e=Br.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${i}, ${t}, ${e} );`,"	return dot( weights, rgb );","}"].join(`
`)}function Wg(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Ys).join(`
`)}function Xg(i){const t=[];for(const e in i){const n=i[e];n!==!1&&t.push("#define "+e+" "+n)}return t.join(`
`)}function Yg(i,t){const e={},n=i.getProgramParameter(t,i.ACTIVE_ATTRIBUTES);for(let s=0;s<n;s++){const r=i.getActiveAttrib(t,s),a=r.name;let o=1;r.type===i.FLOAT_MAT2&&(o=2),r.type===i.FLOAT_MAT3&&(o=3),r.type===i.FLOAT_MAT4&&(o=4),e[a]={type:r.type,location:i.getAttribLocation(t,a),locationSize:o}}return e}function Ys(i){return i!==""}function Yc(i,t){const e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return i.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function qc(i,t){return i.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}const qg=/^[ \t]*#include +<([\w\d./]+)>/gm;function rl(i){return i.replace(qg,$g)}const Zg=new Map;function $g(i,t){let e=Zt[t];if(e===void 0){const n=Zg.get(t);if(n!==void 0)e=Zt[n],Ut('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,n);else throw new Error("Can not resolve #include <"+t+">")}return rl(e)}const Kg=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Zc(i){return i.replace(Kg,Jg)}function Jg(i,t,e,n){let s="";for(let r=parseInt(t);r<parseInt(e);r++)s+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function $c(i){let t=`precision ${i.precision} float;
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
#define LOW_PRECISION`),t}const jg={[Hr]:"SHADOWMAP_TYPE_PCF",[Ws]:"SHADOWMAP_TYPE_VSM"};function Qg(i){return jg[i.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}const tx={[Hi]:"ENVMAP_TYPE_CUBE",[Ms]:"ENVMAP_TYPE_CUBE",[ua]:"ENVMAP_TYPE_CUBE_UV"};function ex(i){return i.envMap===!1?"ENVMAP_TYPE_CUBE":tx[i.envMapMode]||"ENVMAP_TYPE_CUBE"}const nx={[Ms]:"ENVMAP_MODE_REFRACTION"};function ix(i){return i.envMap===!1?"ENVMAP_MODE_REFLECTION":nx[i.envMapMode]||"ENVMAP_MODE_REFLECTION"}const sx={[ha]:"ENVMAP_BLENDING_MULTIPLY",[Hu]:"ENVMAP_BLENDING_MIX",[Vu]:"ENVMAP_BLENDING_ADD"};function rx(i){return i.envMap===!1?"ENVMAP_BLENDING_NONE":sx[i.combine]||"ENVMAP_BLENDING_NONE"}function ax(i){const t=i.envMapCubeUVHeight;if(t===null)return null;const e=Math.log2(t)-2,n=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),112)),texelHeight:n,maxMip:e}}function ox(i,t,e,n){const s=i.getContext(),r=e.defines;let a=e.vertexShader,o=e.fragmentShader;const l=Qg(e),c=ex(e),h=ix(e),u=rx(e),d=ax(e),f=Wg(e),g=Xg(r),x=s.createProgram();let m,p,S=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(m=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g].filter(Ys).join(`
`),m.length>0&&(m+=`
`),p=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g].filter(Ys).join(`
`),p.length>0&&(p+=`
`)):(m=[$c(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.batchingColor?"#define USE_BATCHING_COLOR":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.instancingMorph?"#define USE_INSTANCING_MORPH":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+h:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",e.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Ys).join(`
`),p=[$c(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+c:"",e.envMap?"#define "+h:"",e.envMap?"#define "+u:"",d?"#define CUBEUV_TEXEL_WIDTH "+d.texelWidth:"",d?"#define CUBEUV_TEXEL_HEIGHT "+d.texelHeight:"",d?"#define CUBEUV_MAX_MIP "+d.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.dispersion?"#define USE_DISPERSION":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor||e.batchingColor?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",e.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",e.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==Wn?"#define TONE_MAPPING":"",e.toneMapping!==Wn?Zt.tonemapping_pars_fragment:"",e.toneMapping!==Wn?Hg("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",Zt.colorspace_pars_fragment,zg("linearToOutputTexel",e.outputColorSpace),Vg(),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(Ys).join(`
`)),a=rl(a),a=Yc(a,e),a=qc(a,e),o=rl(o),o=Yc(o,e),o=qc(o,e),a=Zc(a),o=Zc(o),e.isRawShaderMaterial!==!0&&(S=`#version 300 es
`,m=[f,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,p=["#define varying in",e.glslVersion===Jl?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===Jl?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+p);const b=S+m+a,w=S+p+o,M=Vc(s,s.VERTEX_SHADER,b),C=Vc(s,s.FRAGMENT_SHADER,w);s.attachShader(x,M),s.attachShader(x,C),e.index0AttributeName!==void 0?s.bindAttribLocation(x,0,e.index0AttributeName):e.morphTargets===!0&&s.bindAttribLocation(x,0,"position"),s.linkProgram(x);function A(P){if(i.debug.checkShaderErrors){const I=s.getProgramInfoLog(x)||"",F=s.getShaderInfoLog(M)||"",B=s.getShaderInfoLog(C)||"",k=I.trim(),H=F.trim(),z=B.trim();let $=!0,ut=!0;if(s.getProgramParameter(x,s.LINK_STATUS)===!1)if($=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(s,x,M,C);else{const st=Xc(s,M,"vertex"),rt=Xc(s,C,"fragment");ne("THREE.WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(x,s.VALIDATE_STATUS)+`

Material Name: `+P.name+`
Material Type: `+P.type+`

Program Info Log: `+k+`
`+st+`
`+rt)}else k!==""?Ut("WebGLProgram: Program Info Log:",k):(H===""||z==="")&&(ut=!1);ut&&(P.diagnostics={runnable:$,programLog:k,vertexShader:{log:H,prefix:m},fragmentShader:{log:z,prefix:p}})}s.deleteShader(M),s.deleteShader(C),D=new qr(s,x),v=Yg(s,x)}let D;this.getUniforms=function(){return D===void 0&&A(this),D};let v;this.getAttributes=function(){return v===void 0&&A(this),v};let y=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return y===!1&&(y=s.getProgramParameter(x,Ug)),y},this.destroy=function(){n.releaseStatesOfProgram(this),s.deleteProgram(x),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=Og++,this.cacheKey=t,this.usedTimes=1,this.program=x,this.vertexShader=M,this.fragmentShader=C,this}let lx=0;class cx{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){const e=t.vertexShader,n=t.fragmentShader,s=this._getShaderStage(e),r=this._getShaderStage(n),a=this._getShaderCacheForMaterial(t);return a.has(s)===!1&&(a.add(s),s.usedTimes++),a.has(r)===!1&&(a.add(r),r.usedTimes++),this}remove(t){const e=this.materialCache.get(t);for(const n of e)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){const e=this.materialCache;let n=e.get(t);return n===void 0&&(n=new Set,e.set(t,n)),n}_getShaderStage(t){const e=this.shaderCache;let n=e.get(t);return n===void 0&&(n=new hx(t),e.set(t,n)),n}}class hx{constructor(t){this.id=lx++,this.code=t,this.usedTimes=0}}function ux(i,t,e,n,s,r,a){const o=new Eh,l=new cx,c=new Set,h=[],u=new Map,d=s.logarithmicDepthBuffer;let f=s.precision;const g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function x(v){return c.add(v),v===0?"uv":`uv${v}`}function m(v,y,P,I,F){const B=I.fog,k=F.geometry,H=v.isMeshStandardMaterial?I.environment:null,z=(v.isMeshStandardMaterial?e:t).get(v.envMap||H),$=z&&z.mapping===ua?z.image.height:null,ut=g[v.type];v.precision!==null&&(f=s.getMaxPrecision(v.precision),f!==v.precision&&Ut("WebGLProgram.getParameters:",v.precision,"not supported, using",f,"instead."));const st=k.morphAttributes.position||k.morphAttributes.normal||k.morphAttributes.color,rt=st!==void 0?st.length:0;let kt=0;k.morphAttributes.position!==void 0&&(kt=1),k.morphAttributes.normal!==void 0&&(kt=2),k.morphAttributes.color!==void 0&&(kt=3);let Nt,Kt,ie,q;if(ut){const he=zn[ut];Nt=he.vertexShader,Kt=he.fragmentShader}else Nt=v.vertexShader,Kt=v.fragmentShader,l.update(v),ie=l.getVertexShaderID(v),q=l.getFragmentShaderID(v);const et=i.getRenderTarget(),yt=i.state.buffers.depth.getReversed(),bt=F.isInstancedMesh===!0,lt=F.isBatchedMesh===!0,Ot=!!v.map,Yt=!!v.matcap,Bt=!!z,Z=!!v.aoMap,nt=!!v.lightMap,K=!!v.bumpMap,it=!!v.normalMap,R=!!v.displacementMap,wt=!!v.emissiveMap,gt=!!v.metalnessMap,Lt=!!v.roughnessMap,ht=v.anisotropy>0,T=v.clearcoat>0,_=v.dispersion>0,N=v.iridescence>0,X=v.sheen>0,Q=v.transmission>0,Y=ht&&!!v.anisotropyMap,It=T&&!!v.clearcoatMap,ft=T&&!!v.clearcoatNormalMap,Rt=T&&!!v.clearcoatRoughnessMap,Vt=N&&!!v.iridescenceMap,at=N&&!!v.iridescenceThicknessMap,xt=X&&!!v.sheenColorMap,Pt=X&&!!v.sheenRoughnessMap,Dt=!!v.specularMap,mt=!!v.specularColorMap,$t=!!v.specularIntensityMap,U=Q&&!!v.transmissionMap,St=Q&&!!v.thicknessMap,ct=!!v.gradientMap,Et=!!v.alphaMap,ot=v.alphaTest>0,tt=!!v.alphaHash,pt=!!v.extensions;let Xt=Wn;v.toneMapped&&(et===null||et.isXRRenderTarget===!0)&&(Xt=i.toneMapping);const ge={shaderID:ut,shaderType:v.type,shaderName:v.name,vertexShader:Nt,fragmentShader:Kt,defines:v.defines,customVertexShaderID:ie,customFragmentShaderID:q,isRawShaderMaterial:v.isRawShaderMaterial===!0,glslVersion:v.glslVersion,precision:f,batching:lt,batchingColor:lt&&F._colorsTexture!==null,instancing:bt,instancingColor:bt&&F.instanceColor!==null,instancingMorph:bt&&F.morphTexture!==null,outputColorSpace:et===null?i.outputColorSpace:et.isXRRenderTarget===!0?et.texture.colorSpace:Ss,alphaToCoverage:!!v.alphaToCoverage,map:Ot,matcap:Yt,envMap:Bt,envMapMode:Bt&&z.mapping,envMapCubeUVHeight:$,aoMap:Z,lightMap:nt,bumpMap:K,normalMap:it,displacementMap:R,emissiveMap:wt,normalMapObjectSpace:it&&v.normalMapType===Yu,normalMapTangentSpace:it&&v.normalMapType===da,metalnessMap:gt,roughnessMap:Lt,anisotropy:ht,anisotropyMap:Y,clearcoat:T,clearcoatMap:It,clearcoatNormalMap:ft,clearcoatRoughnessMap:Rt,dispersion:_,iridescence:N,iridescenceMap:Vt,iridescenceThicknessMap:at,sheen:X,sheenColorMap:xt,sheenRoughnessMap:Pt,specularMap:Dt,specularColorMap:mt,specularIntensityMap:$t,transmission:Q,transmissionMap:U,thicknessMap:St,gradientMap:ct,opaque:v.transparent===!1&&v.blending===xs&&v.alphaToCoverage===!1,alphaMap:Et,alphaTest:ot,alphaHash:tt,combine:v.combine,mapUv:Ot&&x(v.map.channel),aoMapUv:Z&&x(v.aoMap.channel),lightMapUv:nt&&x(v.lightMap.channel),bumpMapUv:K&&x(v.bumpMap.channel),normalMapUv:it&&x(v.normalMap.channel),displacementMapUv:R&&x(v.displacementMap.channel),emissiveMapUv:wt&&x(v.emissiveMap.channel),metalnessMapUv:gt&&x(v.metalnessMap.channel),roughnessMapUv:Lt&&x(v.roughnessMap.channel),anisotropyMapUv:Y&&x(v.anisotropyMap.channel),clearcoatMapUv:It&&x(v.clearcoatMap.channel),clearcoatNormalMapUv:ft&&x(v.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Rt&&x(v.clearcoatRoughnessMap.channel),iridescenceMapUv:Vt&&x(v.iridescenceMap.channel),iridescenceThicknessMapUv:at&&x(v.iridescenceThicknessMap.channel),sheenColorMapUv:xt&&x(v.sheenColorMap.channel),sheenRoughnessMapUv:Pt&&x(v.sheenRoughnessMap.channel),specularMapUv:Dt&&x(v.specularMap.channel),specularColorMapUv:mt&&x(v.specularColorMap.channel),specularIntensityMapUv:$t&&x(v.specularIntensityMap.channel),transmissionMapUv:U&&x(v.transmissionMap.channel),thicknessMapUv:St&&x(v.thicknessMap.channel),alphaMapUv:Et&&x(v.alphaMap.channel),vertexTangents:!!k.attributes.tangent&&(it||ht),vertexColors:v.vertexColors,vertexAlphas:v.vertexColors===!0&&!!k.attributes.color&&k.attributes.color.itemSize===4,pointsUvs:F.isPoints===!0&&!!k.attributes.uv&&(Ot||Et),fog:!!B,useFog:v.fog===!0,fogExp2:!!B&&B.isFogExp2,flatShading:v.flatShading===!0&&v.wireframe===!1,sizeAttenuation:v.sizeAttenuation===!0,logarithmicDepthBuffer:d,reversedDepthBuffer:yt,skinning:F.isSkinnedMesh===!0,morphTargets:k.morphAttributes.position!==void 0,morphNormals:k.morphAttributes.normal!==void 0,morphColors:k.morphAttributes.color!==void 0,morphTargetsCount:rt,morphTextureStride:kt,numDirLights:y.directional.length,numPointLights:y.point.length,numSpotLights:y.spot.length,numSpotLightMaps:y.spotLightMap.length,numRectAreaLights:y.rectArea.length,numHemiLights:y.hemi.length,numDirLightShadows:y.directionalShadowMap.length,numPointLightShadows:y.pointShadowMap.length,numSpotLightShadows:y.spotShadowMap.length,numSpotLightShadowsWithMaps:y.numSpotLightShadowsWithMaps,numLightProbes:y.numLightProbes,numClippingPlanes:a.numPlanes,numClipIntersection:a.numIntersection,dithering:v.dithering,shadowMapEnabled:i.shadowMap.enabled&&P.length>0,shadowMapType:i.shadowMap.type,toneMapping:Xt,decodeVideoTexture:Ot&&v.map.isVideoTexture===!0&&re.getTransfer(v.map.colorSpace)===de,decodeVideoTextureEmissive:wt&&v.emissiveMap.isVideoTexture===!0&&re.getTransfer(v.emissiveMap.colorSpace)===de,premultipliedAlpha:v.premultipliedAlpha,doubleSided:v.side===Be,flipSided:v.side===rn,useDepthPacking:v.depthPacking>=0,depthPacking:v.depthPacking||0,index0AttributeName:v.index0AttributeName,extensionClipCullDistance:pt&&v.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(pt&&v.extensions.multiDraw===!0||lt)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:v.customProgramCacheKey()};return ge.vertexUv1s=c.has(1),ge.vertexUv2s=c.has(2),ge.vertexUv3s=c.has(3),c.clear(),ge}function p(v){const y=[];if(v.shaderID?y.push(v.shaderID):(y.push(v.customVertexShaderID),y.push(v.customFragmentShaderID)),v.defines!==void 0)for(const P in v.defines)y.push(P),y.push(v.defines[P]);return v.isRawShaderMaterial===!1&&(S(y,v),b(y,v),y.push(i.outputColorSpace)),y.push(v.customProgramCacheKey),y.join()}function S(v,y){v.push(y.precision),v.push(y.outputColorSpace),v.push(y.envMapMode),v.push(y.envMapCubeUVHeight),v.push(y.mapUv),v.push(y.alphaMapUv),v.push(y.lightMapUv),v.push(y.aoMapUv),v.push(y.bumpMapUv),v.push(y.normalMapUv),v.push(y.displacementMapUv),v.push(y.emissiveMapUv),v.push(y.metalnessMapUv),v.push(y.roughnessMapUv),v.push(y.anisotropyMapUv),v.push(y.clearcoatMapUv),v.push(y.clearcoatNormalMapUv),v.push(y.clearcoatRoughnessMapUv),v.push(y.iridescenceMapUv),v.push(y.iridescenceThicknessMapUv),v.push(y.sheenColorMapUv),v.push(y.sheenRoughnessMapUv),v.push(y.specularMapUv),v.push(y.specularColorMapUv),v.push(y.specularIntensityMapUv),v.push(y.transmissionMapUv),v.push(y.thicknessMapUv),v.push(y.combine),v.push(y.fogExp2),v.push(y.sizeAttenuation),v.push(y.morphTargetsCount),v.push(y.morphAttributeCount),v.push(y.numDirLights),v.push(y.numPointLights),v.push(y.numSpotLights),v.push(y.numSpotLightMaps),v.push(y.numHemiLights),v.push(y.numRectAreaLights),v.push(y.numDirLightShadows),v.push(y.numPointLightShadows),v.push(y.numSpotLightShadows),v.push(y.numSpotLightShadowsWithMaps),v.push(y.numLightProbes),v.push(y.shadowMapType),v.push(y.toneMapping),v.push(y.numClippingPlanes),v.push(y.numClipIntersection),v.push(y.depthPacking)}function b(v,y){o.disableAll(),y.instancing&&o.enable(0),y.instancingColor&&o.enable(1),y.instancingMorph&&o.enable(2),y.matcap&&o.enable(3),y.envMap&&o.enable(4),y.normalMapObjectSpace&&o.enable(5),y.normalMapTangentSpace&&o.enable(6),y.clearcoat&&o.enable(7),y.iridescence&&o.enable(8),y.alphaTest&&o.enable(9),y.vertexColors&&o.enable(10),y.vertexAlphas&&o.enable(11),y.vertexUv1s&&o.enable(12),y.vertexUv2s&&o.enable(13),y.vertexUv3s&&o.enable(14),y.vertexTangents&&o.enable(15),y.anisotropy&&o.enable(16),y.alphaHash&&o.enable(17),y.batching&&o.enable(18),y.dispersion&&o.enable(19),y.batchingColor&&o.enable(20),y.gradientMap&&o.enable(21),v.push(o.mask),o.disableAll(),y.fog&&o.enable(0),y.useFog&&o.enable(1),y.flatShading&&o.enable(2),y.logarithmicDepthBuffer&&o.enable(3),y.reversedDepthBuffer&&o.enable(4),y.skinning&&o.enable(5),y.morphTargets&&o.enable(6),y.morphNormals&&o.enable(7),y.morphColors&&o.enable(8),y.premultipliedAlpha&&o.enable(9),y.shadowMapEnabled&&o.enable(10),y.doubleSided&&o.enable(11),y.flipSided&&o.enable(12),y.useDepthPacking&&o.enable(13),y.dithering&&o.enable(14),y.transmission&&o.enable(15),y.sheen&&o.enable(16),y.opaque&&o.enable(17),y.pointsUvs&&o.enable(18),y.decodeVideoTexture&&o.enable(19),y.decodeVideoTextureEmissive&&o.enable(20),y.alphaToCoverage&&o.enable(21),v.push(o.mask)}function w(v){const y=g[v.type];let P;if(y){const I=zn[y];P=Ud.clone(I.uniforms)}else P=v.uniforms;return P}function M(v,y){let P=u.get(y);return P!==void 0?++P.usedTimes:(P=new ox(i,y,v,r),h.push(P),u.set(y,P)),P}function C(v){if(--v.usedTimes===0){const y=h.indexOf(v);h[y]=h[h.length-1],h.pop(),u.delete(v.cacheKey),v.destroy()}}function A(v){l.remove(v)}function D(){l.dispose()}return{getParameters:m,getProgramCacheKey:p,getUniforms:w,acquireProgram:M,releaseProgram:C,releaseShaderCache:A,programs:h,dispose:D}}function dx(){let i=new WeakMap;function t(a){return i.has(a)}function e(a){let o=i.get(a);return o===void 0&&(o={},i.set(a,o)),o}function n(a){i.delete(a)}function s(a,o,l){i.get(a)[o]=l}function r(){i=new WeakMap}return{has:t,get:e,remove:n,update:s,dispose:r}}function fx(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.material.id!==t.material.id?i.material.id-t.material.id:i.z!==t.z?i.z-t.z:i.id-t.id}function Kc(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.z!==t.z?t.z-i.z:i.id-t.id}function Jc(){const i=[];let t=0;const e=[],n=[],s=[];function r(){t=0,e.length=0,n.length=0,s.length=0}function a(u,d,f,g,x,m){let p=i[t];return p===void 0?(p={id:u.id,object:u,geometry:d,material:f,groupOrder:g,renderOrder:u.renderOrder,z:x,group:m},i[t]=p):(p.id=u.id,p.object=u,p.geometry=d,p.material=f,p.groupOrder=g,p.renderOrder=u.renderOrder,p.z=x,p.group=m),t++,p}function o(u,d,f,g,x,m){const p=a(u,d,f,g,x,m);f.transmission>0?n.push(p):f.transparent===!0?s.push(p):e.push(p)}function l(u,d,f,g,x,m){const p=a(u,d,f,g,x,m);f.transmission>0?n.unshift(p):f.transparent===!0?s.unshift(p):e.unshift(p)}function c(u,d){e.length>1&&e.sort(u||fx),n.length>1&&n.sort(d||Kc),s.length>1&&s.sort(d||Kc)}function h(){for(let u=t,d=i.length;u<d;u++){const f=i[u];if(f.id===null)break;f.id=null,f.object=null,f.geometry=null,f.material=null,f.group=null}}return{opaque:e,transmissive:n,transparent:s,init:r,push:o,unshift:l,finish:h,sort:c}}function px(){let i=new WeakMap;function t(n,s){const r=i.get(n);let a;return r===void 0?(a=new Jc,i.set(n,[a])):s>=r.length?(a=new Jc,r.push(a)):a=r[s],a}function e(){i=new WeakMap}return{get:t,dispose:e}}function mx(){const i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"DirectionalLight":e={direction:new L,color:new zt};break;case"SpotLight":e={position:new L,direction:new L,color:new zt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new L,color:new zt,distance:0,decay:0};break;case"HemisphereLight":e={direction:new L,skyColor:new zt,groundColor:new zt};break;case"RectAreaLight":e={color:new zt,position:new L,halfWidth:new L,halfHeight:new L};break}return i[t.id]=e,e}}}function gx(){const i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"DirectionalLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new dt};break;case"SpotLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new dt};break;case"PointLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new dt,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[t.id]=e,e}}}let xx=0;function _x(i,t){return(t.castShadow?2:0)-(i.castShadow?2:0)+(t.map?1:0)-(i.map?1:0)}function vx(i){const t=new mx,e=gx(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)n.probe.push(new L);const s=new L,r=new ee,a=new ee;function o(c){let h=0,u=0,d=0;for(let v=0;v<9;v++)n.probe[v].set(0,0,0);let f=0,g=0,x=0,m=0,p=0,S=0,b=0,w=0,M=0,C=0,A=0;c.sort(_x);for(let v=0,y=c.length;v<y;v++){const P=c[v],I=P.color,F=P.intensity,B=P.distance;let k=null;if(P.shadow&&P.shadow.map&&(P.shadow.map.texture.format===ys?k=P.shadow.map.texture:k=P.shadow.map.depthTexture||P.shadow.map.texture),P.isAmbientLight)h+=I.r*F,u+=I.g*F,d+=I.b*F;else if(P.isLightProbe){for(let H=0;H<9;H++)n.probe[H].addScaledVector(P.sh.coefficients[H],F);A++}else if(P.isDirectionalLight){const H=t.get(P);if(H.color.copy(P.color).multiplyScalar(P.intensity),P.castShadow){const z=P.shadow,$=e.get(P);$.shadowIntensity=z.intensity,$.shadowBias=z.bias,$.shadowNormalBias=z.normalBias,$.shadowRadius=z.radius,$.shadowMapSize=z.mapSize,n.directionalShadow[f]=$,n.directionalShadowMap[f]=k,n.directionalShadowMatrix[f]=P.shadow.matrix,S++}n.directional[f]=H,f++}else if(P.isSpotLight){const H=t.get(P);H.position.setFromMatrixPosition(P.matrixWorld),H.color.copy(I).multiplyScalar(F),H.distance=B,H.coneCos=Math.cos(P.angle),H.penumbraCos=Math.cos(P.angle*(1-P.penumbra)),H.decay=P.decay,n.spot[x]=H;const z=P.shadow;if(P.map&&(n.spotLightMap[M]=P.map,M++,z.updateMatrices(P),P.castShadow&&C++),n.spotLightMatrix[x]=z.matrix,P.castShadow){const $=e.get(P);$.shadowIntensity=z.intensity,$.shadowBias=z.bias,$.shadowNormalBias=z.normalBias,$.shadowRadius=z.radius,$.shadowMapSize=z.mapSize,n.spotShadow[x]=$,n.spotShadowMap[x]=k,w++}x++}else if(P.isRectAreaLight){const H=t.get(P);H.color.copy(I).multiplyScalar(F),H.halfWidth.set(P.width*.5,0,0),H.halfHeight.set(0,P.height*.5,0),n.rectArea[m]=H,m++}else if(P.isPointLight){const H=t.get(P);if(H.color.copy(P.color).multiplyScalar(P.intensity),H.distance=P.distance,H.decay=P.decay,P.castShadow){const z=P.shadow,$=e.get(P);$.shadowIntensity=z.intensity,$.shadowBias=z.bias,$.shadowNormalBias=z.normalBias,$.shadowRadius=z.radius,$.shadowMapSize=z.mapSize,$.shadowCameraNear=z.camera.near,$.shadowCameraFar=z.camera.far,n.pointShadow[g]=$,n.pointShadowMap[g]=k,n.pointShadowMatrix[g]=P.shadow.matrix,b++}n.point[g]=H,g++}else if(P.isHemisphereLight){const H=t.get(P);H.skyColor.copy(P.color).multiplyScalar(F),H.groundColor.copy(P.groundColor).multiplyScalar(F),n.hemi[p]=H,p++}}m>0&&(i.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=vt.LTC_FLOAT_1,n.rectAreaLTC2=vt.LTC_FLOAT_2):(n.rectAreaLTC1=vt.LTC_HALF_1,n.rectAreaLTC2=vt.LTC_HALF_2)),n.ambient[0]=h,n.ambient[1]=u,n.ambient[2]=d;const D=n.hash;(D.directionalLength!==f||D.pointLength!==g||D.spotLength!==x||D.rectAreaLength!==m||D.hemiLength!==p||D.numDirectionalShadows!==S||D.numPointShadows!==b||D.numSpotShadows!==w||D.numSpotMaps!==M||D.numLightProbes!==A)&&(n.directional.length=f,n.spot.length=x,n.rectArea.length=m,n.point.length=g,n.hemi.length=p,n.directionalShadow.length=S,n.directionalShadowMap.length=S,n.pointShadow.length=b,n.pointShadowMap.length=b,n.spotShadow.length=w,n.spotShadowMap.length=w,n.directionalShadowMatrix.length=S,n.pointShadowMatrix.length=b,n.spotLightMatrix.length=w+M-C,n.spotLightMap.length=M,n.numSpotLightShadowsWithMaps=C,n.numLightProbes=A,D.directionalLength=f,D.pointLength=g,D.spotLength=x,D.rectAreaLength=m,D.hemiLength=p,D.numDirectionalShadows=S,D.numPointShadows=b,D.numSpotShadows=w,D.numSpotMaps=M,D.numLightProbes=A,n.version=xx++)}function l(c,h){let u=0,d=0,f=0,g=0,x=0;const m=h.matrixWorldInverse;for(let p=0,S=c.length;p<S;p++){const b=c[p];if(b.isDirectionalLight){const w=n.directional[u];w.direction.setFromMatrixPosition(b.matrixWorld),s.setFromMatrixPosition(b.target.matrixWorld),w.direction.sub(s),w.direction.transformDirection(m),u++}else if(b.isSpotLight){const w=n.spot[f];w.position.setFromMatrixPosition(b.matrixWorld),w.position.applyMatrix4(m),w.direction.setFromMatrixPosition(b.matrixWorld),s.setFromMatrixPosition(b.target.matrixWorld),w.direction.sub(s),w.direction.transformDirection(m),f++}else if(b.isRectAreaLight){const w=n.rectArea[g];w.position.setFromMatrixPosition(b.matrixWorld),w.position.applyMatrix4(m),a.identity(),r.copy(b.matrixWorld),r.premultiply(m),a.extractRotation(r),w.halfWidth.set(b.width*.5,0,0),w.halfHeight.set(0,b.height*.5,0),w.halfWidth.applyMatrix4(a),w.halfHeight.applyMatrix4(a),g++}else if(b.isPointLight){const w=n.point[d];w.position.setFromMatrixPosition(b.matrixWorld),w.position.applyMatrix4(m),d++}else if(b.isHemisphereLight){const w=n.hemi[x];w.direction.setFromMatrixPosition(b.matrixWorld),w.direction.transformDirection(m),x++}}}return{setup:o,setupView:l,state:n}}function jc(i){const t=new vx(i),e=[],n=[];function s(h){c.camera=h,e.length=0,n.length=0}function r(h){e.push(h)}function a(h){n.push(h)}function o(){t.setup(e)}function l(h){t.setupView(e,h)}const c={lightsArray:e,shadowsArray:n,camera:null,lights:t,transmissionRenderTarget:{}};return{init:s,state:c,setupLights:o,setupLightsView:l,pushLight:r,pushShadow:a}}function Mx(i){let t=new WeakMap;function e(s,r=0){const a=t.get(s);let o;return a===void 0?(o=new jc(i),t.set(s,[o])):r>=a.length?(o=new jc(i),a.push(o)):o=a[r],o}function n(){t=new WeakMap}return{get:e,dispose:n}}const yx=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,Sx=`uniform sampler2D shadow_pass;
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
}`,wx=[new L(1,0,0),new L(-1,0,0),new L(0,1,0),new L(0,-1,0),new L(0,0,1),new L(0,0,-1)],Ex=[new L(0,-1,0),new L(0,-1,0),new L(0,0,1),new L(0,0,-1),new L(0,-1,0),new L(0,-1,0)],Qc=new ee,zs=new L,to=new L;function bx(i,t,e){let n=new Al;const s=new dt,r=new dt,a=new be,o=new Pf,l=new If,c={},h=e.maxTextureSize,u={[Ei]:rn,[rn]:Ei,[Be]:Be},d=new Tn({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new dt},radius:{value:4}},vertexShader:yx,fragmentShader:Sx}),f=d.clone();f.defines.HORIZONTAL_PASS=1;const g=new an;g.setAttribute("position",new En(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const x=new j(g,d),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Hr;let p=this.type;this.render=function(C,A,D){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||C.length===0)return;C.type===wu&&(Ut("WebGLShadowMap: PCFSoftShadowMap has been deprecated. Using PCFShadowMap instead."),C.type=Hr);const v=i.getRenderTarget(),y=i.getActiveCubeFace(),P=i.getActiveMipmapLevel(),I=i.state;I.setBlending(ri),I.buffers.depth.getReversed()===!0?I.buffers.color.setClear(0,0,0,0):I.buffers.color.setClear(1,1,1,1),I.buffers.depth.setTest(!0),I.setScissorTest(!1);const F=p!==this.type;F&&A.traverse(function(B){B.material&&(Array.isArray(B.material)?B.material.forEach(k=>k.needsUpdate=!0):B.material.needsUpdate=!0)});for(let B=0,k=C.length;B<k;B++){const H=C[B],z=H.shadow;if(z===void 0){Ut("WebGLShadowMap:",H,"has no shadow.");continue}if(z.autoUpdate===!1&&z.needsUpdate===!1)continue;s.copy(z.mapSize);const $=z.getFrameExtents();if(s.multiply($),r.copy(z.mapSize),(s.x>h||s.y>h)&&(s.x>h&&(r.x=Math.floor(h/$.x),s.x=r.x*$.x,z.mapSize.x=r.x),s.y>h&&(r.y=Math.floor(h/$.y),s.y=r.y*$.y,z.mapSize.y=r.y)),z.map===null||F===!0){if(z.map!==null&&(z.map.depthTexture!==null&&(z.map.depthTexture.dispose(),z.map.depthTexture=null),z.map.dispose()),this.type===Ws){if(H.isPointLight){Ut("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}z.map=new Yn(s.x,s.y,{format:ys,type:li,minFilter:ze,magFilter:ze,generateMipmaps:!1}),z.map.texture.name=H.name+".shadowMap",z.map.depthTexture=new nr(s.x,s.y,Nn),z.map.depthTexture.name=H.name+".shadowMapDepth",z.map.depthTexture.format=ci,z.map.depthTexture.compareFunction=null,z.map.depthTexture.minFilter=Ve,z.map.depthTexture.magFilter=Ve}else{H.isPointLight?(z.map=new Ih(s.x),z.map.depthTexture=new qd(s.x,qn)):(z.map=new Yn(s.x,s.y),z.map.depthTexture=new nr(s.x,s.y,qn)),z.map.depthTexture.name=H.name+".shadowMap",z.map.depthTexture.format=ci;const st=i.state.buffers.depth.getReversed();this.type===Hr?(z.map.depthTexture.compareFunction=st?bl:El,z.map.depthTexture.minFilter=ze,z.map.depthTexture.magFilter=ze):(z.map.depthTexture.compareFunction=null,z.map.depthTexture.minFilter=Ve,z.map.depthTexture.magFilter=Ve)}z.camera.updateProjectionMatrix()}const ut=z.map.isWebGLCubeRenderTarget?6:1;for(let st=0;st<ut;st++){if(z.map.isWebGLCubeRenderTarget)i.setRenderTarget(z.map,st),i.clear();else{st===0&&(i.setRenderTarget(z.map),i.clear());const rt=z.getViewport(st);a.set(r.x*rt.x,r.y*rt.y,r.x*rt.z,r.y*rt.w),I.viewport(a)}if(H.isPointLight){const rt=z.camera,kt=z.matrix,Nt=H.distance||rt.far;Nt!==rt.far&&(rt.far=Nt,rt.updateProjectionMatrix()),zs.setFromMatrixPosition(H.matrixWorld),rt.position.copy(zs),to.copy(rt.position),to.add(wx[st]),rt.up.copy(Ex[st]),rt.lookAt(to),rt.updateMatrixWorld(),kt.makeTranslation(-zs.x,-zs.y,-zs.z),Qc.multiplyMatrices(rt.projectionMatrix,rt.matrixWorldInverse),z._frustum.setFromProjectionMatrix(Qc,rt.coordinateSystem,rt.reversedDepth)}else z.updateMatrices(H);n=z.getFrustum(),w(A,D,z.camera,H,this.type)}z.isPointLightShadow!==!0&&this.type===Ws&&S(z,D),z.needsUpdate=!1}p=this.type,m.needsUpdate=!1,i.setRenderTarget(v,y,P)};function S(C,A){const D=t.update(x);d.defines.VSM_SAMPLES!==C.blurSamples&&(d.defines.VSM_SAMPLES=C.blurSamples,f.defines.VSM_SAMPLES=C.blurSamples,d.needsUpdate=!0,f.needsUpdate=!0),C.mapPass===null&&(C.mapPass=new Yn(s.x,s.y,{format:ys,type:li})),d.uniforms.shadow_pass.value=C.map.depthTexture,d.uniforms.resolution.value=C.mapSize,d.uniforms.radius.value=C.radius,i.setRenderTarget(C.mapPass),i.clear(),i.renderBufferDirect(A,null,D,d,x,null),f.uniforms.shadow_pass.value=C.mapPass.texture,f.uniforms.resolution.value=C.mapSize,f.uniforms.radius.value=C.radius,i.setRenderTarget(C.map),i.clear(),i.renderBufferDirect(A,null,D,f,x,null)}function b(C,A,D,v){let y=null;const P=D.isPointLight===!0?C.customDistanceMaterial:C.customDepthMaterial;if(P!==void 0)y=P;else if(y=D.isPointLight===!0?l:o,i.localClippingEnabled&&A.clipShadows===!0&&Array.isArray(A.clippingPlanes)&&A.clippingPlanes.length!==0||A.displacementMap&&A.displacementScale!==0||A.alphaMap&&A.alphaTest>0||A.map&&A.alphaTest>0||A.alphaToCoverage===!0){const I=y.uuid,F=A.uuid;let B=c[I];B===void 0&&(B={},c[I]=B);let k=B[F];k===void 0&&(k=y.clone(),B[F]=k,A.addEventListener("dispose",M)),y=k}if(y.visible=A.visible,y.wireframe=A.wireframe,v===Ws?y.side=A.shadowSide!==null?A.shadowSide:A.side:y.side=A.shadowSide!==null?A.shadowSide:u[A.side],y.alphaMap=A.alphaMap,y.alphaTest=A.alphaToCoverage===!0?.5:A.alphaTest,y.map=A.map,y.clipShadows=A.clipShadows,y.clippingPlanes=A.clippingPlanes,y.clipIntersection=A.clipIntersection,y.displacementMap=A.displacementMap,y.displacementScale=A.displacementScale,y.displacementBias=A.displacementBias,y.wireframeLinewidth=A.wireframeLinewidth,y.linewidth=A.linewidth,D.isPointLight===!0&&y.isMeshDistanceMaterial===!0){const I=i.properties.get(y);I.light=D}return y}function w(C,A,D,v,y){if(C.visible===!1)return;if(C.layers.test(A.layers)&&(C.isMesh||C.isLine||C.isPoints)&&(C.castShadow||C.receiveShadow&&y===Ws)&&(!C.frustumCulled||n.intersectsObject(C))){C.modelViewMatrix.multiplyMatrices(D.matrixWorldInverse,C.matrixWorld);const F=t.update(C),B=C.material;if(Array.isArray(B)){const k=F.groups;for(let H=0,z=k.length;H<z;H++){const $=k[H],ut=B[$.materialIndex];if(ut&&ut.visible){const st=b(C,ut,v,y);C.onBeforeShadow(i,C,A,D,F,st,$),i.renderBufferDirect(D,null,F,st,C,$),C.onAfterShadow(i,C,A,D,F,st,$)}}}else if(B.visible){const k=b(C,B,v,y);C.onBeforeShadow(i,C,A,D,F,k,null),i.renderBufferDirect(D,null,F,k,C,null),C.onAfterShadow(i,C,A,D,F,k,null)}}const I=C.children;for(let F=0,B=I.length;F<B;F++)w(I[F],A,D,v,y)}function M(C){C.target.removeEventListener("dispose",M);for(const D in c){const v=c[D],y=C.target.uuid;y in v&&(v[y].dispose(),delete v[y])}}}const Tx={[co]:ho,[uo]:mo,[fo]:go,[vs]:po,[ho]:co,[mo]:uo,[go]:fo,[po]:vs};function Cx(i,t){function e(){let U=!1;const St=new be;let ct=null;const Et=new be(0,0,0,0);return{setMask:function(ot){ct!==ot&&!U&&(i.colorMask(ot,ot,ot,ot),ct=ot)},setLocked:function(ot){U=ot},setClear:function(ot,tt,pt,Xt,ge){ge===!0&&(ot*=Xt,tt*=Xt,pt*=Xt),St.set(ot,tt,pt,Xt),Et.equals(St)===!1&&(i.clearColor(ot,tt,pt,Xt),Et.copy(St))},reset:function(){U=!1,ct=null,Et.set(-1,0,0,0)}}}function n(){let U=!1,St=!1,ct=null,Et=null,ot=null;return{setReversed:function(tt){if(St!==tt){const pt=t.get("EXT_clip_control");tt?pt.clipControlEXT(pt.LOWER_LEFT_EXT,pt.ZERO_TO_ONE_EXT):pt.clipControlEXT(pt.LOWER_LEFT_EXT,pt.NEGATIVE_ONE_TO_ONE_EXT),St=tt;const Xt=ot;ot=null,this.setClear(Xt)}},getReversed:function(){return St},setTest:function(tt){tt?et(i.DEPTH_TEST):yt(i.DEPTH_TEST)},setMask:function(tt){ct!==tt&&!U&&(i.depthMask(tt),ct=tt)},setFunc:function(tt){if(St&&(tt=Tx[tt]),Et!==tt){switch(tt){case co:i.depthFunc(i.NEVER);break;case ho:i.depthFunc(i.ALWAYS);break;case uo:i.depthFunc(i.LESS);break;case vs:i.depthFunc(i.LEQUAL);break;case fo:i.depthFunc(i.EQUAL);break;case po:i.depthFunc(i.GEQUAL);break;case mo:i.depthFunc(i.GREATER);break;case go:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}Et=tt}},setLocked:function(tt){U=tt},setClear:function(tt){ot!==tt&&(St&&(tt=1-tt),i.clearDepth(tt),ot=tt)},reset:function(){U=!1,ct=null,Et=null,ot=null,St=!1}}}function s(){let U=!1,St=null,ct=null,Et=null,ot=null,tt=null,pt=null,Xt=null,ge=null;return{setTest:function(he){U||(he?et(i.STENCIL_TEST):yt(i.STENCIL_TEST))},setMask:function(he){St!==he&&!U&&(i.stencilMask(he),St=he)},setFunc:function(he,On,$n){(ct!==he||Et!==On||ot!==$n)&&(i.stencilFunc(he,On,$n),ct=he,Et=On,ot=$n)},setOp:function(he,On,$n){(tt!==he||pt!==On||Xt!==$n)&&(i.stencilOp(he,On,$n),tt=he,pt=On,Xt=$n)},setLocked:function(he){U=he},setClear:function(he){ge!==he&&(i.clearStencil(he),ge=he)},reset:function(){U=!1,St=null,ct=null,Et=null,ot=null,tt=null,pt=null,Xt=null,ge=null}}}const r=new e,a=new n,o=new s,l=new WeakMap,c=new WeakMap;let h={},u={},d=new WeakMap,f=[],g=null,x=!1,m=null,p=null,S=null,b=null,w=null,M=null,C=null,A=new zt(0,0,0),D=0,v=!1,y=null,P=null,I=null,F=null,B=null;const k=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let H=!1,z=0;const $=i.getParameter(i.VERSION);$.indexOf("WebGL")!==-1?(z=parseFloat(/^WebGL (\d)/.exec($)[1]),H=z>=1):$.indexOf("OpenGL ES")!==-1&&(z=parseFloat(/^OpenGL ES (\d)/.exec($)[1]),H=z>=2);let ut=null,st={};const rt=i.getParameter(i.SCISSOR_BOX),kt=i.getParameter(i.VIEWPORT),Nt=new be().fromArray(rt),Kt=new be().fromArray(kt);function ie(U,St,ct,Et){const ot=new Uint8Array(4),tt=i.createTexture();i.bindTexture(U,tt),i.texParameteri(U,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(U,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let pt=0;pt<ct;pt++)U===i.TEXTURE_3D||U===i.TEXTURE_2D_ARRAY?i.texImage3D(St,0,i.RGBA,1,1,Et,0,i.RGBA,i.UNSIGNED_BYTE,ot):i.texImage2D(St+pt,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,ot);return tt}const q={};q[i.TEXTURE_2D]=ie(i.TEXTURE_2D,i.TEXTURE_2D,1),q[i.TEXTURE_CUBE_MAP]=ie(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),q[i.TEXTURE_2D_ARRAY]=ie(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),q[i.TEXTURE_3D]=ie(i.TEXTURE_3D,i.TEXTURE_3D,1,1),r.setClear(0,0,0,1),a.setClear(1),o.setClear(0),et(i.DEPTH_TEST),a.setFunc(vs),K(!1),it(ql),et(i.CULL_FACE),Z(ri);function et(U){h[U]!==!0&&(i.enable(U),h[U]=!0)}function yt(U){h[U]!==!1&&(i.disable(U),h[U]=!1)}function bt(U,St){return u[U]!==St?(i.bindFramebuffer(U,St),u[U]=St,U===i.DRAW_FRAMEBUFFER&&(u[i.FRAMEBUFFER]=St),U===i.FRAMEBUFFER&&(u[i.DRAW_FRAMEBUFFER]=St),!0):!1}function lt(U,St){let ct=f,Et=!1;if(U){ct=d.get(St),ct===void 0&&(ct=[],d.set(St,ct));const ot=U.textures;if(ct.length!==ot.length||ct[0]!==i.COLOR_ATTACHMENT0){for(let tt=0,pt=ot.length;tt<pt;tt++)ct[tt]=i.COLOR_ATTACHMENT0+tt;ct.length=ot.length,Et=!0}}else ct[0]!==i.BACK&&(ct[0]=i.BACK,Et=!0);Et&&i.drawBuffers(ct)}function Ot(U){return g!==U?(i.useProgram(U),g=U,!0):!1}const Yt={[Bi]:i.FUNC_ADD,[bu]:i.FUNC_SUBTRACT,[Tu]:i.FUNC_REVERSE_SUBTRACT};Yt[Cu]=i.MIN,Yt[Au]=i.MAX;const Bt={[Ru]:i.ZERO,[Pu]:i.ONE,[Iu]:i.SRC_COLOR,[oo]:i.SRC_ALPHA,[Ou]:i.SRC_ALPHA_SATURATE,[Nu]:i.DST_COLOR,[Du]:i.DST_ALPHA,[Lu]:i.ONE_MINUS_SRC_COLOR,[lo]:i.ONE_MINUS_SRC_ALPHA,[Uu]:i.ONE_MINUS_DST_COLOR,[Fu]:i.ONE_MINUS_DST_ALPHA,[Bu]:i.CONSTANT_COLOR,[ku]:i.ONE_MINUS_CONSTANT_COLOR,[zu]:i.CONSTANT_ALPHA,[Gu]:i.ONE_MINUS_CONSTANT_ALPHA};function Z(U,St,ct,Et,ot,tt,pt,Xt,ge,he){if(U===ri){x===!0&&(yt(i.BLEND),x=!1);return}if(x===!1&&(et(i.BLEND),x=!0),U!==Eu){if(U!==m||he!==v){if((p!==Bi||w!==Bi)&&(i.blendEquation(i.FUNC_ADD),p=Bi,w=Bi),he)switch(U){case xs:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case wn:i.blendFunc(i.ONE,i.ONE);break;case Zl:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case $l:i.blendFuncSeparate(i.DST_COLOR,i.ONE_MINUS_SRC_ALPHA,i.ZERO,i.ONE);break;default:ne("WebGLState: Invalid blending: ",U);break}else switch(U){case xs:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case wn:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE,i.ONE,i.ONE);break;case Zl:ne("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case $l:ne("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:ne("WebGLState: Invalid blending: ",U);break}S=null,b=null,M=null,C=null,A.set(0,0,0),D=0,m=U,v=he}return}ot=ot||St,tt=tt||ct,pt=pt||Et,(St!==p||ot!==w)&&(i.blendEquationSeparate(Yt[St],Yt[ot]),p=St,w=ot),(ct!==S||Et!==b||tt!==M||pt!==C)&&(i.blendFuncSeparate(Bt[ct],Bt[Et],Bt[tt],Bt[pt]),S=ct,b=Et,M=tt,C=pt),(Xt.equals(A)===!1||ge!==D)&&(i.blendColor(Xt.r,Xt.g,Xt.b,ge),A.copy(Xt),D=ge),m=U,v=!1}function nt(U,St){U.side===Be?yt(i.CULL_FACE):et(i.CULL_FACE);let ct=U.side===rn;St&&(ct=!ct),K(ct),U.blending===xs&&U.transparent===!1?Z(ri):Z(U.blending,U.blendEquation,U.blendSrc,U.blendDst,U.blendEquationAlpha,U.blendSrcAlpha,U.blendDstAlpha,U.blendColor,U.blendAlpha,U.premultipliedAlpha),a.setFunc(U.depthFunc),a.setTest(U.depthTest),a.setMask(U.depthWrite),r.setMask(U.colorWrite);const Et=U.stencilWrite;o.setTest(Et),Et&&(o.setMask(U.stencilWriteMask),o.setFunc(U.stencilFunc,U.stencilRef,U.stencilFuncMask),o.setOp(U.stencilFail,U.stencilZFail,U.stencilZPass)),wt(U.polygonOffset,U.polygonOffsetFactor,U.polygonOffsetUnits),U.alphaToCoverage===!0?et(i.SAMPLE_ALPHA_TO_COVERAGE):yt(i.SAMPLE_ALPHA_TO_COVERAGE)}function K(U){y!==U&&(U?i.frontFace(i.CW):i.frontFace(i.CCW),y=U)}function it(U){U!==yu?(et(i.CULL_FACE),U!==P&&(U===ql?i.cullFace(i.BACK):U===Su?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):yt(i.CULL_FACE),P=U}function R(U){U!==I&&(H&&i.lineWidth(U),I=U)}function wt(U,St,ct){U?(et(i.POLYGON_OFFSET_FILL),(F!==St||B!==ct)&&(i.polygonOffset(St,ct),F=St,B=ct)):yt(i.POLYGON_OFFSET_FILL)}function gt(U){U?et(i.SCISSOR_TEST):yt(i.SCISSOR_TEST)}function Lt(U){U===void 0&&(U=i.TEXTURE0+k-1),ut!==U&&(i.activeTexture(U),ut=U)}function ht(U,St,ct){ct===void 0&&(ut===null?ct=i.TEXTURE0+k-1:ct=ut);let Et=st[ct];Et===void 0&&(Et={type:void 0,texture:void 0},st[ct]=Et),(Et.type!==U||Et.texture!==St)&&(ut!==ct&&(i.activeTexture(ct),ut=ct),i.bindTexture(U,St||q[U]),Et.type=U,Et.texture=St)}function T(){const U=st[ut];U!==void 0&&U.type!==void 0&&(i.bindTexture(U.type,null),U.type=void 0,U.texture=void 0)}function _(){try{i.compressedTexImage2D(...arguments)}catch(U){ne("WebGLState:",U)}}function N(){try{i.compressedTexImage3D(...arguments)}catch(U){ne("WebGLState:",U)}}function X(){try{i.texSubImage2D(...arguments)}catch(U){ne("WebGLState:",U)}}function Q(){try{i.texSubImage3D(...arguments)}catch(U){ne("WebGLState:",U)}}function Y(){try{i.compressedTexSubImage2D(...arguments)}catch(U){ne("WebGLState:",U)}}function It(){try{i.compressedTexSubImage3D(...arguments)}catch(U){ne("WebGLState:",U)}}function ft(){try{i.texStorage2D(...arguments)}catch(U){ne("WebGLState:",U)}}function Rt(){try{i.texStorage3D(...arguments)}catch(U){ne("WebGLState:",U)}}function Vt(){try{i.texImage2D(...arguments)}catch(U){ne("WebGLState:",U)}}function at(){try{i.texImage3D(...arguments)}catch(U){ne("WebGLState:",U)}}function xt(U){Nt.equals(U)===!1&&(i.scissor(U.x,U.y,U.z,U.w),Nt.copy(U))}function Pt(U){Kt.equals(U)===!1&&(i.viewport(U.x,U.y,U.z,U.w),Kt.copy(U))}function Dt(U,St){let ct=c.get(St);ct===void 0&&(ct=new WeakMap,c.set(St,ct));let Et=ct.get(U);Et===void 0&&(Et=i.getUniformBlockIndex(St,U.name),ct.set(U,Et))}function mt(U,St){const Et=c.get(St).get(U);l.get(St)!==Et&&(i.uniformBlockBinding(St,Et,U.__bindingPointIndex),l.set(St,Et))}function $t(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),a.setReversed(!1),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),h={},ut=null,st={},u={},d=new WeakMap,f=[],g=null,x=!1,m=null,p=null,S=null,b=null,w=null,M=null,C=null,A=new zt(0,0,0),D=0,v=!1,y=null,P=null,I=null,F=null,B=null,Nt.set(0,0,i.canvas.width,i.canvas.height),Kt.set(0,0,i.canvas.width,i.canvas.height),r.reset(),a.reset(),o.reset()}return{buffers:{color:r,depth:a,stencil:o},enable:et,disable:yt,bindFramebuffer:bt,drawBuffers:lt,useProgram:Ot,setBlending:Z,setMaterial:nt,setFlipSided:K,setCullFace:it,setLineWidth:R,setPolygonOffset:wt,setScissorTest:gt,activeTexture:Lt,bindTexture:ht,unbindTexture:T,compressedTexImage2D:_,compressedTexImage3D:N,texImage2D:Vt,texImage3D:at,updateUBOMapping:Dt,uniformBlockBinding:mt,texStorage2D:ft,texStorage3D:Rt,texSubImage2D:X,texSubImage3D:Q,compressedTexSubImage2D:Y,compressedTexSubImage3D:It,scissor:xt,viewport:Pt,reset:$t}}function Ax(i,t,e,n,s,r,a){const o=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new dt,h=new WeakMap;let u;const d=new WeakMap;let f=!1;try{f=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(T,_){return f?new OffscreenCanvas(T,_):jr("canvas")}function x(T,_,N){let X=1;const Q=ht(T);if((Q.width>N||Q.height>N)&&(X=N/Math.max(Q.width,Q.height)),X<1)if(typeof HTMLImageElement<"u"&&T instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&T instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&T instanceof ImageBitmap||typeof VideoFrame<"u"&&T instanceof VideoFrame){const Y=Math.floor(X*Q.width),It=Math.floor(X*Q.height);u===void 0&&(u=g(Y,It));const ft=_?g(Y,It):u;return ft.width=Y,ft.height=It,ft.getContext("2d").drawImage(T,0,0,Y,It),Ut("WebGLRenderer: Texture has been resized from ("+Q.width+"x"+Q.height+") to ("+Y+"x"+It+")."),ft}else return"data"in T&&Ut("WebGLRenderer: Image in DataTexture is too big ("+Q.width+"x"+Q.height+")."),T;return T}function m(T){return T.generateMipmaps}function p(T){i.generateMipmap(T)}function S(T){return T.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:T.isWebGL3DRenderTarget?i.TEXTURE_3D:T.isWebGLArrayRenderTarget||T.isCompressedArrayTexture?i.TEXTURE_2D_ARRAY:i.TEXTURE_2D}function b(T,_,N,X,Q=!1){if(T!==null){if(i[T]!==void 0)return i[T];Ut("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+T+"'")}let Y=_;if(_===i.RED&&(N===i.FLOAT&&(Y=i.R32F),N===i.HALF_FLOAT&&(Y=i.R16F),N===i.UNSIGNED_BYTE&&(Y=i.R8)),_===i.RED_INTEGER&&(N===i.UNSIGNED_BYTE&&(Y=i.R8UI),N===i.UNSIGNED_SHORT&&(Y=i.R16UI),N===i.UNSIGNED_INT&&(Y=i.R32UI),N===i.BYTE&&(Y=i.R8I),N===i.SHORT&&(Y=i.R16I),N===i.INT&&(Y=i.R32I)),_===i.RG&&(N===i.FLOAT&&(Y=i.RG32F),N===i.HALF_FLOAT&&(Y=i.RG16F),N===i.UNSIGNED_BYTE&&(Y=i.RG8)),_===i.RG_INTEGER&&(N===i.UNSIGNED_BYTE&&(Y=i.RG8UI),N===i.UNSIGNED_SHORT&&(Y=i.RG16UI),N===i.UNSIGNED_INT&&(Y=i.RG32UI),N===i.BYTE&&(Y=i.RG8I),N===i.SHORT&&(Y=i.RG16I),N===i.INT&&(Y=i.RG32I)),_===i.RGB_INTEGER&&(N===i.UNSIGNED_BYTE&&(Y=i.RGB8UI),N===i.UNSIGNED_SHORT&&(Y=i.RGB16UI),N===i.UNSIGNED_INT&&(Y=i.RGB32UI),N===i.BYTE&&(Y=i.RGB8I),N===i.SHORT&&(Y=i.RGB16I),N===i.INT&&(Y=i.RGB32I)),_===i.RGBA_INTEGER&&(N===i.UNSIGNED_BYTE&&(Y=i.RGBA8UI),N===i.UNSIGNED_SHORT&&(Y=i.RGBA16UI),N===i.UNSIGNED_INT&&(Y=i.RGBA32UI),N===i.BYTE&&(Y=i.RGBA8I),N===i.SHORT&&(Y=i.RGBA16I),N===i.INT&&(Y=i.RGBA32I)),_===i.RGB&&(N===i.UNSIGNED_INT_5_9_9_9_REV&&(Y=i.RGB9_E5),N===i.UNSIGNED_INT_10F_11F_11F_REV&&(Y=i.R11F_G11F_B10F)),_===i.RGBA){const It=Q?Kr:re.getTransfer(X);N===i.FLOAT&&(Y=i.RGBA32F),N===i.HALF_FLOAT&&(Y=i.RGBA16F),N===i.UNSIGNED_BYTE&&(Y=It===de?i.SRGB8_ALPHA8:i.RGBA8),N===i.UNSIGNED_SHORT_4_4_4_4&&(Y=i.RGBA4),N===i.UNSIGNED_SHORT_5_5_5_1&&(Y=i.RGB5_A1)}return(Y===i.R16F||Y===i.R32F||Y===i.RG16F||Y===i.RG32F||Y===i.RGBA16F||Y===i.RGBA32F)&&t.get("EXT_color_buffer_float"),Y}function w(T,_){let N;return T?_===null||_===qn||_===Qs?N=i.DEPTH24_STENCIL8:_===Nn?N=i.DEPTH32F_STENCIL8:_===js&&(N=i.DEPTH24_STENCIL8,Ut("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):_===null||_===qn||_===Qs?N=i.DEPTH_COMPONENT24:_===Nn?N=i.DEPTH_COMPONENT32F:_===js&&(N=i.DEPTH_COMPONENT16),N}function M(T,_){return m(T)===!0||T.isFramebufferTexture&&T.minFilter!==Ve&&T.minFilter!==ze?Math.log2(Math.max(_.width,_.height))+1:T.mipmaps!==void 0&&T.mipmaps.length>0?T.mipmaps.length:T.isCompressedTexture&&Array.isArray(T.image)?_.mipmaps.length:1}function C(T){const _=T.target;_.removeEventListener("dispose",C),D(_),_.isVideoTexture&&h.delete(_)}function A(T){const _=T.target;_.removeEventListener("dispose",A),y(_)}function D(T){const _=n.get(T);if(_.__webglInit===void 0)return;const N=T.source,X=d.get(N);if(X){const Q=X[_.__cacheKey];Q.usedTimes--,Q.usedTimes===0&&v(T),Object.keys(X).length===0&&d.delete(N)}n.remove(T)}function v(T){const _=n.get(T);i.deleteTexture(_.__webglTexture);const N=T.source,X=d.get(N);delete X[_.__cacheKey],a.memory.textures--}function y(T){const _=n.get(T);if(T.depthTexture&&(T.depthTexture.dispose(),n.remove(T.depthTexture)),T.isWebGLCubeRenderTarget)for(let X=0;X<6;X++){if(Array.isArray(_.__webglFramebuffer[X]))for(let Q=0;Q<_.__webglFramebuffer[X].length;Q++)i.deleteFramebuffer(_.__webglFramebuffer[X][Q]);else i.deleteFramebuffer(_.__webglFramebuffer[X]);_.__webglDepthbuffer&&i.deleteRenderbuffer(_.__webglDepthbuffer[X])}else{if(Array.isArray(_.__webglFramebuffer))for(let X=0;X<_.__webglFramebuffer.length;X++)i.deleteFramebuffer(_.__webglFramebuffer[X]);else i.deleteFramebuffer(_.__webglFramebuffer);if(_.__webglDepthbuffer&&i.deleteRenderbuffer(_.__webglDepthbuffer),_.__webglMultisampledFramebuffer&&i.deleteFramebuffer(_.__webglMultisampledFramebuffer),_.__webglColorRenderbuffer)for(let X=0;X<_.__webglColorRenderbuffer.length;X++)_.__webglColorRenderbuffer[X]&&i.deleteRenderbuffer(_.__webglColorRenderbuffer[X]);_.__webglDepthRenderbuffer&&i.deleteRenderbuffer(_.__webglDepthRenderbuffer)}const N=T.textures;for(let X=0,Q=N.length;X<Q;X++){const Y=n.get(N[X]);Y.__webglTexture&&(i.deleteTexture(Y.__webglTexture),a.memory.textures--),n.remove(N[X])}n.remove(T)}let P=0;function I(){P=0}function F(){const T=P;return T>=s.maxTextures&&Ut("WebGLTextures: Trying to use "+T+" texture units while this GPU supports only "+s.maxTextures),P+=1,T}function B(T){const _=[];return _.push(T.wrapS),_.push(T.wrapT),_.push(T.wrapR||0),_.push(T.magFilter),_.push(T.minFilter),_.push(T.anisotropy),_.push(T.internalFormat),_.push(T.format),_.push(T.type),_.push(T.generateMipmaps),_.push(T.premultiplyAlpha),_.push(T.flipY),_.push(T.unpackAlignment),_.push(T.colorSpace),_.join()}function k(T,_){const N=n.get(T);if(T.isVideoTexture&&gt(T),T.isRenderTargetTexture===!1&&T.isExternalTexture!==!0&&T.version>0&&N.__version!==T.version){const X=T.image;if(X===null)Ut("WebGLRenderer: Texture marked for update but no image data found.");else if(X.complete===!1)Ut("WebGLRenderer: Texture marked for update but image is incomplete");else{q(N,T,_);return}}else T.isExternalTexture&&(N.__webglTexture=T.sourceTexture?T.sourceTexture:null);e.bindTexture(i.TEXTURE_2D,N.__webglTexture,i.TEXTURE0+_)}function H(T,_){const N=n.get(T);if(T.isRenderTargetTexture===!1&&T.version>0&&N.__version!==T.version){q(N,T,_);return}else T.isExternalTexture&&(N.__webglTexture=T.sourceTexture?T.sourceTexture:null);e.bindTexture(i.TEXTURE_2D_ARRAY,N.__webglTexture,i.TEXTURE0+_)}function z(T,_){const N=n.get(T);if(T.isRenderTargetTexture===!1&&T.version>0&&N.__version!==T.version){q(N,T,_);return}e.bindTexture(i.TEXTURE_3D,N.__webglTexture,i.TEXTURE0+_)}function $(T,_){const N=n.get(T);if(T.isCubeDepthTexture!==!0&&T.version>0&&N.__version!==T.version){et(N,T,_);return}e.bindTexture(i.TEXTURE_CUBE_MAP,N.__webglTexture,i.TEXTURE0+_)}const ut={[vo]:i.REPEAT,[ni]:i.CLAMP_TO_EDGE,[Mo]:i.MIRRORED_REPEAT},st={[Ve]:i.NEAREST,[Wu]:i.NEAREST_MIPMAP_NEAREST,[ur]:i.NEAREST_MIPMAP_LINEAR,[ze]:i.LINEAR,[Ma]:i.LINEAR_MIPMAP_NEAREST,[zi]:i.LINEAR_MIPMAP_LINEAR},rt={[qu]:i.NEVER,[ju]:i.ALWAYS,[Zu]:i.LESS,[El]:i.LEQUAL,[$u]:i.EQUAL,[bl]:i.GEQUAL,[Ku]:i.GREATER,[Ju]:i.NOTEQUAL};function kt(T,_){if(_.type===Nn&&t.has("OES_texture_float_linear")===!1&&(_.magFilter===ze||_.magFilter===Ma||_.magFilter===ur||_.magFilter===zi||_.minFilter===ze||_.minFilter===Ma||_.minFilter===ur||_.minFilter===zi)&&Ut("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(T,i.TEXTURE_WRAP_S,ut[_.wrapS]),i.texParameteri(T,i.TEXTURE_WRAP_T,ut[_.wrapT]),(T===i.TEXTURE_3D||T===i.TEXTURE_2D_ARRAY)&&i.texParameteri(T,i.TEXTURE_WRAP_R,ut[_.wrapR]),i.texParameteri(T,i.TEXTURE_MAG_FILTER,st[_.magFilter]),i.texParameteri(T,i.TEXTURE_MIN_FILTER,st[_.minFilter]),_.compareFunction&&(i.texParameteri(T,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(T,i.TEXTURE_COMPARE_FUNC,rt[_.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(_.magFilter===Ve||_.minFilter!==ur&&_.minFilter!==zi||_.type===Nn&&t.has("OES_texture_float_linear")===!1)return;if(_.anisotropy>1||n.get(_).__currentAnisotropy){const N=t.get("EXT_texture_filter_anisotropic");i.texParameterf(T,N.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(_.anisotropy,s.getMaxAnisotropy())),n.get(_).__currentAnisotropy=_.anisotropy}}}function Nt(T,_){let N=!1;T.__webglInit===void 0&&(T.__webglInit=!0,_.addEventListener("dispose",C));const X=_.source;let Q=d.get(X);Q===void 0&&(Q={},d.set(X,Q));const Y=B(_);if(Y!==T.__cacheKey){Q[Y]===void 0&&(Q[Y]={texture:i.createTexture(),usedTimes:0},a.memory.textures++,N=!0),Q[Y].usedTimes++;const It=Q[T.__cacheKey];It!==void 0&&(Q[T.__cacheKey].usedTimes--,It.usedTimes===0&&v(_)),T.__cacheKey=Y,T.__webglTexture=Q[Y].texture}return N}function Kt(T,_,N){return Math.floor(Math.floor(T/N)/_)}function ie(T,_,N,X){const Y=T.updateRanges;if(Y.length===0)e.texSubImage2D(i.TEXTURE_2D,0,0,0,_.width,_.height,N,X,_.data);else{Y.sort((at,xt)=>at.start-xt.start);let It=0;for(let at=1;at<Y.length;at++){const xt=Y[It],Pt=Y[at],Dt=xt.start+xt.count,mt=Kt(Pt.start,_.width,4),$t=Kt(xt.start,_.width,4);Pt.start<=Dt+1&&mt===$t&&Kt(Pt.start+Pt.count-1,_.width,4)===mt?xt.count=Math.max(xt.count,Pt.start+Pt.count-xt.start):(++It,Y[It]=Pt)}Y.length=It+1;const ft=i.getParameter(i.UNPACK_ROW_LENGTH),Rt=i.getParameter(i.UNPACK_SKIP_PIXELS),Vt=i.getParameter(i.UNPACK_SKIP_ROWS);i.pixelStorei(i.UNPACK_ROW_LENGTH,_.width);for(let at=0,xt=Y.length;at<xt;at++){const Pt=Y[at],Dt=Math.floor(Pt.start/4),mt=Math.ceil(Pt.count/4),$t=Dt%_.width,U=Math.floor(Dt/_.width),St=mt,ct=1;i.pixelStorei(i.UNPACK_SKIP_PIXELS,$t),i.pixelStorei(i.UNPACK_SKIP_ROWS,U),e.texSubImage2D(i.TEXTURE_2D,0,$t,U,St,ct,N,X,_.data)}T.clearUpdateRanges(),i.pixelStorei(i.UNPACK_ROW_LENGTH,ft),i.pixelStorei(i.UNPACK_SKIP_PIXELS,Rt),i.pixelStorei(i.UNPACK_SKIP_ROWS,Vt)}}function q(T,_,N){let X=i.TEXTURE_2D;(_.isDataArrayTexture||_.isCompressedArrayTexture)&&(X=i.TEXTURE_2D_ARRAY),_.isData3DTexture&&(X=i.TEXTURE_3D);const Q=Nt(T,_),Y=_.source;e.bindTexture(X,T.__webglTexture,i.TEXTURE0+N);const It=n.get(Y);if(Y.version!==It.__version||Q===!0){e.activeTexture(i.TEXTURE0+N);const ft=re.getPrimaries(re.workingColorSpace),Rt=_.colorSpace===vi?null:re.getPrimaries(_.colorSpace),Vt=_.colorSpace===vi||ft===Rt?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,_.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,_.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,_.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,Vt);let at=x(_.image,!1,s.maxTextureSize);at=Lt(_,at);const xt=r.convert(_.format,_.colorSpace),Pt=r.convert(_.type);let Dt=b(_.internalFormat,xt,Pt,_.colorSpace,_.isVideoTexture);kt(X,_);let mt;const $t=_.mipmaps,U=_.isVideoTexture!==!0,St=It.__version===void 0||Q===!0,ct=Y.dataReady,Et=M(_,at);if(_.isDepthTexture)Dt=w(_.format===Gi,_.type),St&&(U?e.texStorage2D(i.TEXTURE_2D,1,Dt,at.width,at.height):e.texImage2D(i.TEXTURE_2D,0,Dt,at.width,at.height,0,xt,Pt,null));else if(_.isDataTexture)if($t.length>0){U&&St&&e.texStorage2D(i.TEXTURE_2D,Et,Dt,$t[0].width,$t[0].height);for(let ot=0,tt=$t.length;ot<tt;ot++)mt=$t[ot],U?ct&&e.texSubImage2D(i.TEXTURE_2D,ot,0,0,mt.width,mt.height,xt,Pt,mt.data):e.texImage2D(i.TEXTURE_2D,ot,Dt,mt.width,mt.height,0,xt,Pt,mt.data);_.generateMipmaps=!1}else U?(St&&e.texStorage2D(i.TEXTURE_2D,Et,Dt,at.width,at.height),ct&&ie(_,at,xt,Pt)):e.texImage2D(i.TEXTURE_2D,0,Dt,at.width,at.height,0,xt,Pt,at.data);else if(_.isCompressedTexture)if(_.isCompressedArrayTexture){U&&St&&e.texStorage3D(i.TEXTURE_2D_ARRAY,Et,Dt,$t[0].width,$t[0].height,at.depth);for(let ot=0,tt=$t.length;ot<tt;ot++)if(mt=$t[ot],_.format!==Un)if(xt!==null)if(U){if(ct)if(_.layerUpdates.size>0){const pt=Pc(mt.width,mt.height,_.format,_.type);for(const Xt of _.layerUpdates){const ge=mt.data.subarray(Xt*pt/mt.data.BYTES_PER_ELEMENT,(Xt+1)*pt/mt.data.BYTES_PER_ELEMENT);e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,ot,0,0,Xt,mt.width,mt.height,1,xt,ge)}_.clearLayerUpdates()}else e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,ot,0,0,0,mt.width,mt.height,at.depth,xt,mt.data)}else e.compressedTexImage3D(i.TEXTURE_2D_ARRAY,ot,Dt,mt.width,mt.height,at.depth,0,mt.data,0,0);else Ut("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else U?ct&&e.texSubImage3D(i.TEXTURE_2D_ARRAY,ot,0,0,0,mt.width,mt.height,at.depth,xt,Pt,mt.data):e.texImage3D(i.TEXTURE_2D_ARRAY,ot,Dt,mt.width,mt.height,at.depth,0,xt,Pt,mt.data)}else{U&&St&&e.texStorage2D(i.TEXTURE_2D,Et,Dt,$t[0].width,$t[0].height);for(let ot=0,tt=$t.length;ot<tt;ot++)mt=$t[ot],_.format!==Un?xt!==null?U?ct&&e.compressedTexSubImage2D(i.TEXTURE_2D,ot,0,0,mt.width,mt.height,xt,mt.data):e.compressedTexImage2D(i.TEXTURE_2D,ot,Dt,mt.width,mt.height,0,mt.data):Ut("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):U?ct&&e.texSubImage2D(i.TEXTURE_2D,ot,0,0,mt.width,mt.height,xt,Pt,mt.data):e.texImage2D(i.TEXTURE_2D,ot,Dt,mt.width,mt.height,0,xt,Pt,mt.data)}else if(_.isDataArrayTexture)if(U){if(St&&e.texStorage3D(i.TEXTURE_2D_ARRAY,Et,Dt,at.width,at.height,at.depth),ct)if(_.layerUpdates.size>0){const ot=Pc(at.width,at.height,_.format,_.type);for(const tt of _.layerUpdates){const pt=at.data.subarray(tt*ot/at.data.BYTES_PER_ELEMENT,(tt+1)*ot/at.data.BYTES_PER_ELEMENT);e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,tt,at.width,at.height,1,xt,Pt,pt)}_.clearLayerUpdates()}else e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,at.width,at.height,at.depth,xt,Pt,at.data)}else e.texImage3D(i.TEXTURE_2D_ARRAY,0,Dt,at.width,at.height,at.depth,0,xt,Pt,at.data);else if(_.isData3DTexture)U?(St&&e.texStorage3D(i.TEXTURE_3D,Et,Dt,at.width,at.height,at.depth),ct&&e.texSubImage3D(i.TEXTURE_3D,0,0,0,0,at.width,at.height,at.depth,xt,Pt,at.data)):e.texImage3D(i.TEXTURE_3D,0,Dt,at.width,at.height,at.depth,0,xt,Pt,at.data);else if(_.isFramebufferTexture){if(St)if(U)e.texStorage2D(i.TEXTURE_2D,Et,Dt,at.width,at.height);else{let ot=at.width,tt=at.height;for(let pt=0;pt<Et;pt++)e.texImage2D(i.TEXTURE_2D,pt,Dt,ot,tt,0,xt,Pt,null),ot>>=1,tt>>=1}}else if($t.length>0){if(U&&St){const ot=ht($t[0]);e.texStorage2D(i.TEXTURE_2D,Et,Dt,ot.width,ot.height)}for(let ot=0,tt=$t.length;ot<tt;ot++)mt=$t[ot],U?ct&&e.texSubImage2D(i.TEXTURE_2D,ot,0,0,xt,Pt,mt):e.texImage2D(i.TEXTURE_2D,ot,Dt,xt,Pt,mt);_.generateMipmaps=!1}else if(U){if(St){const ot=ht(at);e.texStorage2D(i.TEXTURE_2D,Et,Dt,ot.width,ot.height)}ct&&e.texSubImage2D(i.TEXTURE_2D,0,0,0,xt,Pt,at)}else e.texImage2D(i.TEXTURE_2D,0,Dt,xt,Pt,at);m(_)&&p(X),It.__version=Y.version,_.onUpdate&&_.onUpdate(_)}T.__version=_.version}function et(T,_,N){if(_.image.length!==6)return;const X=Nt(T,_),Q=_.source;e.bindTexture(i.TEXTURE_CUBE_MAP,T.__webglTexture,i.TEXTURE0+N);const Y=n.get(Q);if(Q.version!==Y.__version||X===!0){e.activeTexture(i.TEXTURE0+N);const It=re.getPrimaries(re.workingColorSpace),ft=_.colorSpace===vi?null:re.getPrimaries(_.colorSpace),Rt=_.colorSpace===vi||It===ft?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,_.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,_.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,_.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,Rt);const Vt=_.isCompressedTexture||_.image[0].isCompressedTexture,at=_.image[0]&&_.image[0].isDataTexture,xt=[];for(let tt=0;tt<6;tt++)!Vt&&!at?xt[tt]=x(_.image[tt],!0,s.maxCubemapSize):xt[tt]=at?_.image[tt].image:_.image[tt],xt[tt]=Lt(_,xt[tt]);const Pt=xt[0],Dt=r.convert(_.format,_.colorSpace),mt=r.convert(_.type),$t=b(_.internalFormat,Dt,mt,_.colorSpace),U=_.isVideoTexture!==!0,St=Y.__version===void 0||X===!0,ct=Q.dataReady;let Et=M(_,Pt);kt(i.TEXTURE_CUBE_MAP,_);let ot;if(Vt){U&&St&&e.texStorage2D(i.TEXTURE_CUBE_MAP,Et,$t,Pt.width,Pt.height);for(let tt=0;tt<6;tt++){ot=xt[tt].mipmaps;for(let pt=0;pt<ot.length;pt++){const Xt=ot[pt];_.format!==Un?Dt!==null?U?ct&&e.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+tt,pt,0,0,Xt.width,Xt.height,Dt,Xt.data):e.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+tt,pt,$t,Xt.width,Xt.height,0,Xt.data):Ut("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):U?ct&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+tt,pt,0,0,Xt.width,Xt.height,Dt,mt,Xt.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+tt,pt,$t,Xt.width,Xt.height,0,Dt,mt,Xt.data)}}}else{if(ot=_.mipmaps,U&&St){ot.length>0&&Et++;const tt=ht(xt[0]);e.texStorage2D(i.TEXTURE_CUBE_MAP,Et,$t,tt.width,tt.height)}for(let tt=0;tt<6;tt++)if(at){U?ct&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+tt,0,0,0,xt[tt].width,xt[tt].height,Dt,mt,xt[tt].data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+tt,0,$t,xt[tt].width,xt[tt].height,0,Dt,mt,xt[tt].data);for(let pt=0;pt<ot.length;pt++){const ge=ot[pt].image[tt].image;U?ct&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+tt,pt+1,0,0,ge.width,ge.height,Dt,mt,ge.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+tt,pt+1,$t,ge.width,ge.height,0,Dt,mt,ge.data)}}else{U?ct&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+tt,0,0,0,Dt,mt,xt[tt]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+tt,0,$t,Dt,mt,xt[tt]);for(let pt=0;pt<ot.length;pt++){const Xt=ot[pt];U?ct&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+tt,pt+1,0,0,Dt,mt,Xt.image[tt]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+tt,pt+1,$t,Dt,mt,Xt.image[tt])}}}m(_)&&p(i.TEXTURE_CUBE_MAP),Y.__version=Q.version,_.onUpdate&&_.onUpdate(_)}T.__version=_.version}function yt(T,_,N,X,Q,Y){const It=r.convert(N.format,N.colorSpace),ft=r.convert(N.type),Rt=b(N.internalFormat,It,ft,N.colorSpace),Vt=n.get(_),at=n.get(N);if(at.__renderTarget=_,!Vt.__hasExternalTextures){const xt=Math.max(1,_.width>>Y),Pt=Math.max(1,_.height>>Y);Q===i.TEXTURE_3D||Q===i.TEXTURE_2D_ARRAY?e.texImage3D(Q,Y,Rt,xt,Pt,_.depth,0,It,ft,null):e.texImage2D(Q,Y,Rt,xt,Pt,0,It,ft,null)}e.bindFramebuffer(i.FRAMEBUFFER,T),wt(_)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,X,Q,at.__webglTexture,0,R(_)):(Q===i.TEXTURE_2D||Q>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&Q<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,X,Q,at.__webglTexture,Y),e.bindFramebuffer(i.FRAMEBUFFER,null)}function bt(T,_,N){if(i.bindRenderbuffer(i.RENDERBUFFER,T),_.depthBuffer){const X=_.depthTexture,Q=X&&X.isDepthTexture?X.type:null,Y=w(_.stencilBuffer,Q),It=_.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;wt(_)?o.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,R(_),Y,_.width,_.height):N?i.renderbufferStorageMultisample(i.RENDERBUFFER,R(_),Y,_.width,_.height):i.renderbufferStorage(i.RENDERBUFFER,Y,_.width,_.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,It,i.RENDERBUFFER,T)}else{const X=_.textures;for(let Q=0;Q<X.length;Q++){const Y=X[Q],It=r.convert(Y.format,Y.colorSpace),ft=r.convert(Y.type),Rt=b(Y.internalFormat,It,ft,Y.colorSpace);wt(_)?o.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,R(_),Rt,_.width,_.height):N?i.renderbufferStorageMultisample(i.RENDERBUFFER,R(_),Rt,_.width,_.height):i.renderbufferStorage(i.RENDERBUFFER,Rt,_.width,_.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function lt(T,_,N){const X=_.isWebGLCubeRenderTarget===!0;if(e.bindFramebuffer(i.FRAMEBUFFER,T),!(_.depthTexture&&_.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const Q=n.get(_.depthTexture);if(Q.__renderTarget=_,(!Q.__webglTexture||_.depthTexture.image.width!==_.width||_.depthTexture.image.height!==_.height)&&(_.depthTexture.image.width=_.width,_.depthTexture.image.height=_.height,_.depthTexture.needsUpdate=!0),X){if(Q.__webglInit===void 0&&(Q.__webglInit=!0,_.depthTexture.addEventListener("dispose",C)),Q.__webglTexture===void 0){Q.__webglTexture=i.createTexture(),e.bindTexture(i.TEXTURE_CUBE_MAP,Q.__webglTexture),kt(i.TEXTURE_CUBE_MAP,_.depthTexture);const Vt=r.convert(_.depthTexture.format),at=r.convert(_.depthTexture.type);let xt;_.depthTexture.format===ci?xt=i.DEPTH_COMPONENT24:_.depthTexture.format===Gi&&(xt=i.DEPTH24_STENCIL8);for(let Pt=0;Pt<6;Pt++)i.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Pt,0,xt,_.width,_.height,0,Vt,at,null)}}else k(_.depthTexture,0);const Y=Q.__webglTexture,It=R(_),ft=X?i.TEXTURE_CUBE_MAP_POSITIVE_X+N:i.TEXTURE_2D,Rt=_.depthTexture.format===Gi?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;if(_.depthTexture.format===ci)wt(_)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,Rt,ft,Y,0,It):i.framebufferTexture2D(i.FRAMEBUFFER,Rt,ft,Y,0);else if(_.depthTexture.format===Gi)wt(_)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,Rt,ft,Y,0,It):i.framebufferTexture2D(i.FRAMEBUFFER,Rt,ft,Y,0);else throw new Error("Unknown depthTexture format")}function Ot(T){const _=n.get(T),N=T.isWebGLCubeRenderTarget===!0;if(_.__boundDepthTexture!==T.depthTexture){const X=T.depthTexture;if(_.__depthDisposeCallback&&_.__depthDisposeCallback(),X){const Q=()=>{delete _.__boundDepthTexture,delete _.__depthDisposeCallback,X.removeEventListener("dispose",Q)};X.addEventListener("dispose",Q),_.__depthDisposeCallback=Q}_.__boundDepthTexture=X}if(T.depthTexture&&!_.__autoAllocateDepthBuffer)if(N)for(let X=0;X<6;X++)lt(_.__webglFramebuffer[X],T,X);else{const X=T.texture.mipmaps;X&&X.length>0?lt(_.__webglFramebuffer[0],T,0):lt(_.__webglFramebuffer,T,0)}else if(N){_.__webglDepthbuffer=[];for(let X=0;X<6;X++)if(e.bindFramebuffer(i.FRAMEBUFFER,_.__webglFramebuffer[X]),_.__webglDepthbuffer[X]===void 0)_.__webglDepthbuffer[X]=i.createRenderbuffer(),bt(_.__webglDepthbuffer[X],T,!1);else{const Q=T.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,Y=_.__webglDepthbuffer[X];i.bindRenderbuffer(i.RENDERBUFFER,Y),i.framebufferRenderbuffer(i.FRAMEBUFFER,Q,i.RENDERBUFFER,Y)}}else{const X=T.texture.mipmaps;if(X&&X.length>0?e.bindFramebuffer(i.FRAMEBUFFER,_.__webglFramebuffer[0]):e.bindFramebuffer(i.FRAMEBUFFER,_.__webglFramebuffer),_.__webglDepthbuffer===void 0)_.__webglDepthbuffer=i.createRenderbuffer(),bt(_.__webglDepthbuffer,T,!1);else{const Q=T.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,Y=_.__webglDepthbuffer;i.bindRenderbuffer(i.RENDERBUFFER,Y),i.framebufferRenderbuffer(i.FRAMEBUFFER,Q,i.RENDERBUFFER,Y)}}e.bindFramebuffer(i.FRAMEBUFFER,null)}function Yt(T,_,N){const X=n.get(T);_!==void 0&&yt(X.__webglFramebuffer,T,T.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),N!==void 0&&Ot(T)}function Bt(T){const _=T.texture,N=n.get(T),X=n.get(_);T.addEventListener("dispose",A);const Q=T.textures,Y=T.isWebGLCubeRenderTarget===!0,It=Q.length>1;if(It||(X.__webglTexture===void 0&&(X.__webglTexture=i.createTexture()),X.__version=_.version,a.memory.textures++),Y){N.__webglFramebuffer=[];for(let ft=0;ft<6;ft++)if(_.mipmaps&&_.mipmaps.length>0){N.__webglFramebuffer[ft]=[];for(let Rt=0;Rt<_.mipmaps.length;Rt++)N.__webglFramebuffer[ft][Rt]=i.createFramebuffer()}else N.__webglFramebuffer[ft]=i.createFramebuffer()}else{if(_.mipmaps&&_.mipmaps.length>0){N.__webglFramebuffer=[];for(let ft=0;ft<_.mipmaps.length;ft++)N.__webglFramebuffer[ft]=i.createFramebuffer()}else N.__webglFramebuffer=i.createFramebuffer();if(It)for(let ft=0,Rt=Q.length;ft<Rt;ft++){const Vt=n.get(Q[ft]);Vt.__webglTexture===void 0&&(Vt.__webglTexture=i.createTexture(),a.memory.textures++)}if(T.samples>0&&wt(T)===!1){N.__webglMultisampledFramebuffer=i.createFramebuffer(),N.__webglColorRenderbuffer=[],e.bindFramebuffer(i.FRAMEBUFFER,N.__webglMultisampledFramebuffer);for(let ft=0;ft<Q.length;ft++){const Rt=Q[ft];N.__webglColorRenderbuffer[ft]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,N.__webglColorRenderbuffer[ft]);const Vt=r.convert(Rt.format,Rt.colorSpace),at=r.convert(Rt.type),xt=b(Rt.internalFormat,Vt,at,Rt.colorSpace,T.isXRRenderTarget===!0),Pt=R(T);i.renderbufferStorageMultisample(i.RENDERBUFFER,Pt,xt,T.width,T.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+ft,i.RENDERBUFFER,N.__webglColorRenderbuffer[ft])}i.bindRenderbuffer(i.RENDERBUFFER,null),T.depthBuffer&&(N.__webglDepthRenderbuffer=i.createRenderbuffer(),bt(N.__webglDepthRenderbuffer,T,!0)),e.bindFramebuffer(i.FRAMEBUFFER,null)}}if(Y){e.bindTexture(i.TEXTURE_CUBE_MAP,X.__webglTexture),kt(i.TEXTURE_CUBE_MAP,_);for(let ft=0;ft<6;ft++)if(_.mipmaps&&_.mipmaps.length>0)for(let Rt=0;Rt<_.mipmaps.length;Rt++)yt(N.__webglFramebuffer[ft][Rt],T,_,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+ft,Rt);else yt(N.__webglFramebuffer[ft],T,_,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+ft,0);m(_)&&p(i.TEXTURE_CUBE_MAP),e.unbindTexture()}else if(It){for(let ft=0,Rt=Q.length;ft<Rt;ft++){const Vt=Q[ft],at=n.get(Vt);let xt=i.TEXTURE_2D;(T.isWebGL3DRenderTarget||T.isWebGLArrayRenderTarget)&&(xt=T.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),e.bindTexture(xt,at.__webglTexture),kt(xt,Vt),yt(N.__webglFramebuffer,T,Vt,i.COLOR_ATTACHMENT0+ft,xt,0),m(Vt)&&p(xt)}e.unbindTexture()}else{let ft=i.TEXTURE_2D;if((T.isWebGL3DRenderTarget||T.isWebGLArrayRenderTarget)&&(ft=T.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),e.bindTexture(ft,X.__webglTexture),kt(ft,_),_.mipmaps&&_.mipmaps.length>0)for(let Rt=0;Rt<_.mipmaps.length;Rt++)yt(N.__webglFramebuffer[Rt],T,_,i.COLOR_ATTACHMENT0,ft,Rt);else yt(N.__webglFramebuffer,T,_,i.COLOR_ATTACHMENT0,ft,0);m(_)&&p(ft),e.unbindTexture()}T.depthBuffer&&Ot(T)}function Z(T){const _=T.textures;for(let N=0,X=_.length;N<X;N++){const Q=_[N];if(m(Q)){const Y=S(T),It=n.get(Q).__webglTexture;e.bindTexture(Y,It),p(Y),e.unbindTexture()}}}const nt=[],K=[];function it(T){if(T.samples>0){if(wt(T)===!1){const _=T.textures,N=T.width,X=T.height;let Q=i.COLOR_BUFFER_BIT;const Y=T.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,It=n.get(T),ft=_.length>1;if(ft)for(let Vt=0;Vt<_.length;Vt++)e.bindFramebuffer(i.FRAMEBUFFER,It.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Vt,i.RENDERBUFFER,null),e.bindFramebuffer(i.FRAMEBUFFER,It.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+Vt,i.TEXTURE_2D,null,0);e.bindFramebuffer(i.READ_FRAMEBUFFER,It.__webglMultisampledFramebuffer);const Rt=T.texture.mipmaps;Rt&&Rt.length>0?e.bindFramebuffer(i.DRAW_FRAMEBUFFER,It.__webglFramebuffer[0]):e.bindFramebuffer(i.DRAW_FRAMEBUFFER,It.__webglFramebuffer);for(let Vt=0;Vt<_.length;Vt++){if(T.resolveDepthBuffer&&(T.depthBuffer&&(Q|=i.DEPTH_BUFFER_BIT),T.stencilBuffer&&T.resolveStencilBuffer&&(Q|=i.STENCIL_BUFFER_BIT)),ft){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,It.__webglColorRenderbuffer[Vt]);const at=n.get(_[Vt]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,at,0)}i.blitFramebuffer(0,0,N,X,0,0,N,X,Q,i.NEAREST),l===!0&&(nt.length=0,K.length=0,nt.push(i.COLOR_ATTACHMENT0+Vt),T.depthBuffer&&T.resolveDepthBuffer===!1&&(nt.push(Y),K.push(Y),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,K)),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,nt))}if(e.bindFramebuffer(i.READ_FRAMEBUFFER,null),e.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),ft)for(let Vt=0;Vt<_.length;Vt++){e.bindFramebuffer(i.FRAMEBUFFER,It.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Vt,i.RENDERBUFFER,It.__webglColorRenderbuffer[Vt]);const at=n.get(_[Vt]).__webglTexture;e.bindFramebuffer(i.FRAMEBUFFER,It.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+Vt,i.TEXTURE_2D,at,0)}e.bindFramebuffer(i.DRAW_FRAMEBUFFER,It.__webglMultisampledFramebuffer)}else if(T.depthBuffer&&T.resolveDepthBuffer===!1&&l){const _=T.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[_])}}}function R(T){return Math.min(s.maxSamples,T.samples)}function wt(T){const _=n.get(T);return T.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&_.__useRenderToTexture!==!1}function gt(T){const _=a.render.frame;h.get(T)!==_&&(h.set(T,_),T.update())}function Lt(T,_){const N=T.colorSpace,X=T.format,Q=T.type;return T.isCompressedTexture===!0||T.isVideoTexture===!0||N!==Ss&&N!==vi&&(re.getTransfer(N)===de?(X!==Un||Q!==fn)&&Ut("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):ne("WebGLTextures: Unsupported texture color space:",N)),_}function ht(T){return typeof HTMLImageElement<"u"&&T instanceof HTMLImageElement?(c.width=T.naturalWidth||T.width,c.height=T.naturalHeight||T.height):typeof VideoFrame<"u"&&T instanceof VideoFrame?(c.width=T.displayWidth,c.height=T.displayHeight):(c.width=T.width,c.height=T.height),c}this.allocateTextureUnit=F,this.resetTextureUnits=I,this.setTexture2D=k,this.setTexture2DArray=H,this.setTexture3D=z,this.setTextureCube=$,this.rebindTextures=Yt,this.setupRenderTarget=Bt,this.updateRenderTargetMipmap=Z,this.updateMultisampleRenderTarget=it,this.setupDepthRenderbuffer=Ot,this.setupFrameBufferTexture=yt,this.useMultisampledRTT=wt,this.isReversedDepthBuffer=function(){return e.buffers.depth.getReversed()}}function Rx(i,t){function e(n,s=vi){let r;const a=re.getTransfer(s);if(n===fn)return i.UNSIGNED_BYTE;if(n===_l)return i.UNSIGNED_SHORT_4_4_4_4;if(n===vl)return i.UNSIGNED_SHORT_5_5_5_1;if(n===_h)return i.UNSIGNED_INT_5_9_9_9_REV;if(n===vh)return i.UNSIGNED_INT_10F_11F_11F_REV;if(n===gh)return i.BYTE;if(n===xh)return i.SHORT;if(n===js)return i.UNSIGNED_SHORT;if(n===xl)return i.INT;if(n===qn)return i.UNSIGNED_INT;if(n===Nn)return i.FLOAT;if(n===li)return i.HALF_FLOAT;if(n===Mh)return i.ALPHA;if(n===yh)return i.RGB;if(n===Un)return i.RGBA;if(n===ci)return i.DEPTH_COMPONENT;if(n===Gi)return i.DEPTH_STENCIL;if(n===Ml)return i.RED;if(n===yl)return i.RED_INTEGER;if(n===ys)return i.RG;if(n===Sl)return i.RG_INTEGER;if(n===wl)return i.RGBA_INTEGER;if(n===Vr||n===Wr||n===Xr||n===Yr)if(a===de)if(r=t.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(n===Vr)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===Wr)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===Xr)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===Yr)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=t.get("WEBGL_compressed_texture_s3tc"),r!==null){if(n===Vr)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===Wr)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===Xr)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===Yr)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===yo||n===So||n===wo||n===Eo)if(r=t.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(n===yo)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===So)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===wo)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===Eo)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===bo||n===To||n===Co||n===Ao||n===Ro||n===Po||n===Io)if(r=t.get("WEBGL_compressed_texture_etc"),r!==null){if(n===bo||n===To)return a===de?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(n===Co)return a===de?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC;if(n===Ao)return r.COMPRESSED_R11_EAC;if(n===Ro)return r.COMPRESSED_SIGNED_R11_EAC;if(n===Po)return r.COMPRESSED_RG11_EAC;if(n===Io)return r.COMPRESSED_SIGNED_RG11_EAC}else return null;if(n===Lo||n===Do||n===Fo||n===No||n===Uo||n===Oo||n===Bo||n===ko||n===zo||n===Go||n===Ho||n===Vo||n===Wo||n===Xo)if(r=t.get("WEBGL_compressed_texture_astc"),r!==null){if(n===Lo)return a===de?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===Do)return a===de?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===Fo)return a===de?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===No)return a===de?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===Uo)return a===de?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===Oo)return a===de?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===Bo)return a===de?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===ko)return a===de?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===zo)return a===de?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===Go)return a===de?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===Ho)return a===de?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===Vo)return a===de?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===Wo)return a===de?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===Xo)return a===de?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===Yo||n===qo||n===Zo)if(r=t.get("EXT_texture_compression_bptc"),r!==null){if(n===Yo)return a===de?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===qo)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===Zo)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===$o||n===Ko||n===Jo||n===jo)if(r=t.get("EXT_texture_compression_rgtc"),r!==null){if(n===$o)return r.COMPRESSED_RED_RGTC1_EXT;if(n===Ko)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===Jo)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===jo)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===Qs?i.UNSIGNED_INT_24_8:i[n]!==void 0?i[n]:null}return{convert:e}}const Px=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,Ix=`
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

}`;class Lx{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e){if(this.texture===null){const n=new Nh(t.texture);(t.depthNear!==e.depthNear||t.depthFar!==e.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=n}}getMesh(t){if(this.texture!==null&&this.mesh===null){const e=t.cameras[0].viewport,n=new Tn({vertexShader:Px,fragmentShader:Ix,uniforms:{depthColor:{value:this.texture},depthWidth:{value:e.z},depthHeight:{value:e.w}}});this.mesh=new j(new Cs(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class Dx extends Ts{constructor(t,e){super();const n=this;let s=null,r=1,a=null,o="local-floor",l=1,c=null,h=null,u=null,d=null,f=null,g=null;const x=typeof XRWebGLBinding<"u",m=new Lx,p={},S=e.getContextAttributes();let b=null,w=null;const M=[],C=[],A=new dt;let D=null;const v=new yn;v.viewport=new be;const y=new yn;y.viewport=new be;const P=[v,y],I=new Gf;let F=null,B=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(q){let et=M[q];return et===void 0&&(et=new Ga,M[q]=et),et.getTargetRaySpace()},this.getControllerGrip=function(q){let et=M[q];return et===void 0&&(et=new Ga,M[q]=et),et.getGripSpace()},this.getHand=function(q){let et=M[q];return et===void 0&&(et=new Ga,M[q]=et),et.getHandSpace()};function k(q){const et=C.indexOf(q.inputSource);if(et===-1)return;const yt=M[et];yt!==void 0&&(yt.update(q.inputSource,q.frame,c||a),yt.dispatchEvent({type:q.type,data:q.inputSource}))}function H(){s.removeEventListener("select",k),s.removeEventListener("selectstart",k),s.removeEventListener("selectend",k),s.removeEventListener("squeeze",k),s.removeEventListener("squeezestart",k),s.removeEventListener("squeezeend",k),s.removeEventListener("end",H),s.removeEventListener("inputsourceschange",z);for(let q=0;q<M.length;q++){const et=C[q];et!==null&&(C[q]=null,M[q].disconnect(et))}F=null,B=null,m.reset();for(const q in p)delete p[q];t.setRenderTarget(b),f=null,d=null,u=null,s=null,w=null,ie.stop(),n.isPresenting=!1,t.setPixelRatio(D),t.setSize(A.width,A.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(q){r=q,n.isPresenting===!0&&Ut("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(q){o=q,n.isPresenting===!0&&Ut("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||a},this.setReferenceSpace=function(q){c=q},this.getBaseLayer=function(){return d!==null?d:f},this.getBinding=function(){return u===null&&x&&(u=new XRWebGLBinding(s,e)),u},this.getFrame=function(){return g},this.getSession=function(){return s},this.setSession=async function(q){if(s=q,s!==null){if(b=t.getRenderTarget(),s.addEventListener("select",k),s.addEventListener("selectstart",k),s.addEventListener("selectend",k),s.addEventListener("squeeze",k),s.addEventListener("squeezestart",k),s.addEventListener("squeezeend",k),s.addEventListener("end",H),s.addEventListener("inputsourceschange",z),S.xrCompatible!==!0&&await e.makeXRCompatible(),D=t.getPixelRatio(),t.getSize(A),x&&"createProjectionLayer"in XRWebGLBinding.prototype){let yt=null,bt=null,lt=null;S.depth&&(lt=S.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,yt=S.stencil?Gi:ci,bt=S.stencil?Qs:qn);const Ot={colorFormat:e.RGBA8,depthFormat:lt,scaleFactor:r};u=this.getBinding(),d=u.createProjectionLayer(Ot),s.updateRenderState({layers:[d]}),t.setPixelRatio(1),t.setSize(d.textureWidth,d.textureHeight,!1),w=new Yn(d.textureWidth,d.textureHeight,{format:Un,type:fn,depthTexture:new nr(d.textureWidth,d.textureHeight,bt,void 0,void 0,void 0,void 0,void 0,void 0,yt),stencilBuffer:S.stencil,colorSpace:t.outputColorSpace,samples:S.antialias?4:0,resolveDepthBuffer:d.ignoreDepthValues===!1,resolveStencilBuffer:d.ignoreDepthValues===!1})}else{const yt={antialias:S.antialias,alpha:!0,depth:S.depth,stencil:S.stencil,framebufferScaleFactor:r};f=new XRWebGLLayer(s,e,yt),s.updateRenderState({baseLayer:f}),t.setPixelRatio(1),t.setSize(f.framebufferWidth,f.framebufferHeight,!1),w=new Yn(f.framebufferWidth,f.framebufferHeight,{format:Un,type:fn,colorSpace:t.outputColorSpace,stencilBuffer:S.stencil,resolveDepthBuffer:f.ignoreDepthValues===!1,resolveStencilBuffer:f.ignoreDepthValues===!1})}w.isXRRenderTarget=!0,this.setFoveation(l),c=null,a=await s.requestReferenceSpace(o),ie.setContext(s),ie.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return m.getDepthTexture()};function z(q){for(let et=0;et<q.removed.length;et++){const yt=q.removed[et],bt=C.indexOf(yt);bt>=0&&(C[bt]=null,M[bt].disconnect(yt))}for(let et=0;et<q.added.length;et++){const yt=q.added[et];let bt=C.indexOf(yt);if(bt===-1){for(let Ot=0;Ot<M.length;Ot++)if(Ot>=C.length){C.push(yt),bt=Ot;break}else if(C[Ot]===null){C[Ot]=yt,bt=Ot;break}if(bt===-1)break}const lt=M[bt];lt&&lt.connect(yt)}}const $=new L,ut=new L;function st(q,et,yt){$.setFromMatrixPosition(et.matrixWorld),ut.setFromMatrixPosition(yt.matrixWorld);const bt=$.distanceTo(ut),lt=et.projectionMatrix.elements,Ot=yt.projectionMatrix.elements,Yt=lt[14]/(lt[10]-1),Bt=lt[14]/(lt[10]+1),Z=(lt[9]+1)/lt[5],nt=(lt[9]-1)/lt[5],K=(lt[8]-1)/lt[0],it=(Ot[8]+1)/Ot[0],R=Yt*K,wt=Yt*it,gt=bt/(-K+it),Lt=gt*-K;if(et.matrixWorld.decompose(q.position,q.quaternion,q.scale),q.translateX(Lt),q.translateZ(gt),q.matrixWorld.compose(q.position,q.quaternion,q.scale),q.matrixWorldInverse.copy(q.matrixWorld).invert(),lt[10]===-1)q.projectionMatrix.copy(et.projectionMatrix),q.projectionMatrixInverse.copy(et.projectionMatrixInverse);else{const ht=Yt+gt,T=Bt+gt,_=R-Lt,N=wt+(bt-Lt),X=Z*Bt/T*ht,Q=nt*Bt/T*ht;q.projectionMatrix.makePerspective(_,N,X,Q,ht,T),q.projectionMatrixInverse.copy(q.projectionMatrix).invert()}}function rt(q,et){et===null?q.matrixWorld.copy(q.matrix):q.matrixWorld.multiplyMatrices(et.matrixWorld,q.matrix),q.matrixWorldInverse.copy(q.matrixWorld).invert()}this.updateCamera=function(q){if(s===null)return;let et=q.near,yt=q.far;m.texture!==null&&(m.depthNear>0&&(et=m.depthNear),m.depthFar>0&&(yt=m.depthFar)),I.near=y.near=v.near=et,I.far=y.far=v.far=yt,(F!==I.near||B!==I.far)&&(s.updateRenderState({depthNear:I.near,depthFar:I.far}),F=I.near,B=I.far),I.layers.mask=q.layers.mask|6,v.layers.mask=I.layers.mask&3,y.layers.mask=I.layers.mask&5;const bt=q.parent,lt=I.cameras;rt(I,bt);for(let Ot=0;Ot<lt.length;Ot++)rt(lt[Ot],bt);lt.length===2?st(I,v,y):I.projectionMatrix.copy(v.projectionMatrix),kt(q,I,bt)};function kt(q,et,yt){yt===null?q.matrix.copy(et.matrixWorld):(q.matrix.copy(yt.matrixWorld),q.matrix.invert(),q.matrix.multiply(et.matrixWorld)),q.matrix.decompose(q.position,q.quaternion,q.scale),q.updateMatrixWorld(!0),q.projectionMatrix.copy(et.projectionMatrix),q.projectionMatrixInverse.copy(et.projectionMatrixInverse),q.isPerspectiveCamera&&(q.fov=er*2*Math.atan(1/q.projectionMatrix.elements[5]),q.zoom=1)}this.getCamera=function(){return I},this.getFoveation=function(){if(!(d===null&&f===null))return l},this.setFoveation=function(q){l=q,d!==null&&(d.fixedFoveation=q),f!==null&&f.fixedFoveation!==void 0&&(f.fixedFoveation=q)},this.hasDepthSensing=function(){return m.texture!==null},this.getDepthSensingMesh=function(){return m.getMesh(I)},this.getCameraTexture=function(q){return p[q]};let Nt=null;function Kt(q,et){if(h=et.getViewerPose(c||a),g=et,h!==null){const yt=h.views;f!==null&&(t.setRenderTargetFramebuffer(w,f.framebuffer),t.setRenderTarget(w));let bt=!1;yt.length!==I.cameras.length&&(I.cameras.length=0,bt=!0);for(let Bt=0;Bt<yt.length;Bt++){const Z=yt[Bt];let nt=null;if(f!==null)nt=f.getViewport(Z);else{const it=u.getViewSubImage(d,Z);nt=it.viewport,Bt===0&&(t.setRenderTargetTextures(w,it.colorTexture,it.depthStencilTexture),t.setRenderTarget(w))}let K=P[Bt];K===void 0&&(K=new yn,K.layers.enable(Bt),K.viewport=new be,P[Bt]=K),K.matrix.fromArray(Z.transform.matrix),K.matrix.decompose(K.position,K.quaternion,K.scale),K.projectionMatrix.fromArray(Z.projectionMatrix),K.projectionMatrixInverse.copy(K.projectionMatrix).invert(),K.viewport.set(nt.x,nt.y,nt.width,nt.height),Bt===0&&(I.matrix.copy(K.matrix),I.matrix.decompose(I.position,I.quaternion,I.scale)),bt===!0&&I.cameras.push(K)}const lt=s.enabledFeatures;if(lt&&lt.includes("depth-sensing")&&s.depthUsage=="gpu-optimized"&&x){u=n.getBinding();const Bt=u.getDepthInformation(yt[0]);Bt&&Bt.isValid&&Bt.texture&&m.init(Bt,s.renderState)}if(lt&&lt.includes("camera-access")&&x){t.state.unbindTexture(),u=n.getBinding();for(let Bt=0;Bt<yt.length;Bt++){const Z=yt[Bt].camera;if(Z){let nt=p[Z];nt||(nt=new Nh,p[Z]=nt);const K=u.getCameraImage(Z);nt.sourceTexture=K}}}}for(let yt=0;yt<M.length;yt++){const bt=C[yt],lt=M[yt];bt!==null&&lt!==void 0&&lt.update(bt,et,c||a)}Nt&&Nt(q,et),et.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:et}),g=null}const ie=new qh;ie.setAnimationLoop(Kt),this.setAnimationLoop=function(q){Nt=q},this.dispose=function(){}}}const Ui=new Fe,Fx=new ee;function Nx(i,t){function e(m,p){m.matrixAutoUpdate===!0&&m.updateMatrix(),p.value.copy(m.matrix)}function n(m,p){p.color.getRGB(m.fogColor.value,Ah(i)),p.isFog?(m.fogNear.value=p.near,m.fogFar.value=p.far):p.isFogExp2&&(m.fogDensity.value=p.density)}function s(m,p,S,b,w){p.isMeshBasicMaterial||p.isMeshLambertMaterial?r(m,p):p.isMeshToonMaterial?(r(m,p),u(m,p)):p.isMeshPhongMaterial?(r(m,p),h(m,p)):p.isMeshStandardMaterial?(r(m,p),d(m,p),p.isMeshPhysicalMaterial&&f(m,p,w)):p.isMeshMatcapMaterial?(r(m,p),g(m,p)):p.isMeshDepthMaterial?r(m,p):p.isMeshDistanceMaterial?(r(m,p),x(m,p)):p.isMeshNormalMaterial?r(m,p):p.isLineBasicMaterial?(a(m,p),p.isLineDashedMaterial&&o(m,p)):p.isPointsMaterial?l(m,p,S,b):p.isSpriteMaterial?c(m,p):p.isShadowMaterial?(m.color.value.copy(p.color),m.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function r(m,p){m.opacity.value=p.opacity,p.color&&m.diffuse.value.copy(p.color),p.emissive&&m.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(m.map.value=p.map,e(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,e(p.alphaMap,m.alphaMapTransform)),p.bumpMap&&(m.bumpMap.value=p.bumpMap,e(p.bumpMap,m.bumpMapTransform),m.bumpScale.value=p.bumpScale,p.side===rn&&(m.bumpScale.value*=-1)),p.normalMap&&(m.normalMap.value=p.normalMap,e(p.normalMap,m.normalMapTransform),m.normalScale.value.copy(p.normalScale),p.side===rn&&m.normalScale.value.negate()),p.displacementMap&&(m.displacementMap.value=p.displacementMap,e(p.displacementMap,m.displacementMapTransform),m.displacementScale.value=p.displacementScale,m.displacementBias.value=p.displacementBias),p.emissiveMap&&(m.emissiveMap.value=p.emissiveMap,e(p.emissiveMap,m.emissiveMapTransform)),p.specularMap&&(m.specularMap.value=p.specularMap,e(p.specularMap,m.specularMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest);const S=t.get(p),b=S.envMap,w=S.envMapRotation;b&&(m.envMap.value=b,Ui.copy(w),Ui.x*=-1,Ui.y*=-1,Ui.z*=-1,b.isCubeTexture&&b.isRenderTargetTexture===!1&&(Ui.y*=-1,Ui.z*=-1),m.envMapRotation.value.setFromMatrix4(Fx.makeRotationFromEuler(Ui)),m.flipEnvMap.value=b.isCubeTexture&&b.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=p.reflectivity,m.ior.value=p.ior,m.refractionRatio.value=p.refractionRatio),p.lightMap&&(m.lightMap.value=p.lightMap,m.lightMapIntensity.value=p.lightMapIntensity,e(p.lightMap,m.lightMapTransform)),p.aoMap&&(m.aoMap.value=p.aoMap,m.aoMapIntensity.value=p.aoMapIntensity,e(p.aoMap,m.aoMapTransform))}function a(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,p.map&&(m.map.value=p.map,e(p.map,m.mapTransform))}function o(m,p){m.dashSize.value=p.dashSize,m.totalSize.value=p.dashSize+p.gapSize,m.scale.value=p.scale}function l(m,p,S,b){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.size.value=p.size*S,m.scale.value=b*.5,p.map&&(m.map.value=p.map,e(p.map,m.uvTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,e(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function c(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.rotation.value=p.rotation,p.map&&(m.map.value=p.map,e(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,e(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function h(m,p){m.specular.value.copy(p.specular),m.shininess.value=Math.max(p.shininess,1e-4)}function u(m,p){p.gradientMap&&(m.gradientMap.value=p.gradientMap)}function d(m,p){m.metalness.value=p.metalness,p.metalnessMap&&(m.metalnessMap.value=p.metalnessMap,e(p.metalnessMap,m.metalnessMapTransform)),m.roughness.value=p.roughness,p.roughnessMap&&(m.roughnessMap.value=p.roughnessMap,e(p.roughnessMap,m.roughnessMapTransform)),p.envMap&&(m.envMapIntensity.value=p.envMapIntensity)}function f(m,p,S){m.ior.value=p.ior,p.sheen>0&&(m.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),m.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(m.sheenColorMap.value=p.sheenColorMap,e(p.sheenColorMap,m.sheenColorMapTransform)),p.sheenRoughnessMap&&(m.sheenRoughnessMap.value=p.sheenRoughnessMap,e(p.sheenRoughnessMap,m.sheenRoughnessMapTransform))),p.clearcoat>0&&(m.clearcoat.value=p.clearcoat,m.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(m.clearcoatMap.value=p.clearcoatMap,e(p.clearcoatMap,m.clearcoatMapTransform)),p.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap,e(p.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),p.clearcoatNormalMap&&(m.clearcoatNormalMap.value=p.clearcoatNormalMap,e(p.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),p.side===rn&&m.clearcoatNormalScale.value.negate())),p.dispersion>0&&(m.dispersion.value=p.dispersion),p.iridescence>0&&(m.iridescence.value=p.iridescence,m.iridescenceIOR.value=p.iridescenceIOR,m.iridescenceThicknessMinimum.value=p.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=p.iridescenceThicknessRange[1],p.iridescenceMap&&(m.iridescenceMap.value=p.iridescenceMap,e(p.iridescenceMap,m.iridescenceMapTransform)),p.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=p.iridescenceThicknessMap,e(p.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),p.transmission>0&&(m.transmission.value=p.transmission,m.transmissionSamplerMap.value=S.texture,m.transmissionSamplerSize.value.set(S.width,S.height),p.transmissionMap&&(m.transmissionMap.value=p.transmissionMap,e(p.transmissionMap,m.transmissionMapTransform)),m.thickness.value=p.thickness,p.thicknessMap&&(m.thicknessMap.value=p.thicknessMap,e(p.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=p.attenuationDistance,m.attenuationColor.value.copy(p.attenuationColor)),p.anisotropy>0&&(m.anisotropyVector.value.set(p.anisotropy*Math.cos(p.anisotropyRotation),p.anisotropy*Math.sin(p.anisotropyRotation)),p.anisotropyMap&&(m.anisotropyMap.value=p.anisotropyMap,e(p.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=p.specularIntensity,m.specularColor.value.copy(p.specularColor),p.specularColorMap&&(m.specularColorMap.value=p.specularColorMap,e(p.specularColorMap,m.specularColorMapTransform)),p.specularIntensityMap&&(m.specularIntensityMap.value=p.specularIntensityMap,e(p.specularIntensityMap,m.specularIntensityMapTransform))}function g(m,p){p.matcap&&(m.matcap.value=p.matcap)}function x(m,p){const S=t.get(p).light;m.referencePosition.value.setFromMatrixPosition(S.matrixWorld),m.nearDistance.value=S.shadow.camera.near,m.farDistance.value=S.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:s}}function Ux(i,t,e,n){let s={},r={},a=[];const o=i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS);function l(S,b){const w=b.program;n.uniformBlockBinding(S,w)}function c(S,b){let w=s[S.id];w===void 0&&(g(S),w=h(S),s[S.id]=w,S.addEventListener("dispose",m));const M=b.program;n.updateUBOMapping(S,M);const C=t.render.frame;r[S.id]!==C&&(d(S),r[S.id]=C)}function h(S){const b=u();S.__bindingPointIndex=b;const w=i.createBuffer(),M=S.__size,C=S.usage;return i.bindBuffer(i.UNIFORM_BUFFER,w),i.bufferData(i.UNIFORM_BUFFER,M,C),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,b,w),w}function u(){for(let S=0;S<o;S++)if(a.indexOf(S)===-1)return a.push(S),S;return ne("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function d(S){const b=s[S.id],w=S.uniforms,M=S.__cache;i.bindBuffer(i.UNIFORM_BUFFER,b);for(let C=0,A=w.length;C<A;C++){const D=Array.isArray(w[C])?w[C]:[w[C]];for(let v=0,y=D.length;v<y;v++){const P=D[v];if(f(P,C,v,M)===!0){const I=P.__offset,F=Array.isArray(P.value)?P.value:[P.value];let B=0;for(let k=0;k<F.length;k++){const H=F[k],z=x(H);typeof H=="number"||typeof H=="boolean"?(P.__data[0]=H,i.bufferSubData(i.UNIFORM_BUFFER,I+B,P.__data)):H.isMatrix3?(P.__data[0]=H.elements[0],P.__data[1]=H.elements[1],P.__data[2]=H.elements[2],P.__data[3]=0,P.__data[4]=H.elements[3],P.__data[5]=H.elements[4],P.__data[6]=H.elements[5],P.__data[7]=0,P.__data[8]=H.elements[6],P.__data[9]=H.elements[7],P.__data[10]=H.elements[8],P.__data[11]=0):(H.toArray(P.__data,B),B+=z.storage/Float32Array.BYTES_PER_ELEMENT)}i.bufferSubData(i.UNIFORM_BUFFER,I,P.__data)}}}i.bindBuffer(i.UNIFORM_BUFFER,null)}function f(S,b,w,M){const C=S.value,A=b+"_"+w;if(M[A]===void 0)return typeof C=="number"||typeof C=="boolean"?M[A]=C:M[A]=C.clone(),!0;{const D=M[A];if(typeof C=="number"||typeof C=="boolean"){if(D!==C)return M[A]=C,!0}else if(D.equals(C)===!1)return D.copy(C),!0}return!1}function g(S){const b=S.uniforms;let w=0;const M=16;for(let A=0,D=b.length;A<D;A++){const v=Array.isArray(b[A])?b[A]:[b[A]];for(let y=0,P=v.length;y<P;y++){const I=v[y],F=Array.isArray(I.value)?I.value:[I.value];for(let B=0,k=F.length;B<k;B++){const H=F[B],z=x(H),$=w%M,ut=$%z.boundary,st=$+ut;w+=ut,st!==0&&M-st<z.storage&&(w+=M-st),I.__data=new Float32Array(z.storage/Float32Array.BYTES_PER_ELEMENT),I.__offset=w,w+=z.storage}}}const C=w%M;return C>0&&(w+=M-C),S.__size=w,S.__cache={},this}function x(S){const b={boundary:0,storage:0};return typeof S=="number"||typeof S=="boolean"?(b.boundary=4,b.storage=4):S.isVector2?(b.boundary=8,b.storage=8):S.isVector3||S.isColor?(b.boundary=16,b.storage=12):S.isVector4?(b.boundary=16,b.storage=16):S.isMatrix3?(b.boundary=48,b.storage=48):S.isMatrix4?(b.boundary=64,b.storage=64):S.isTexture?Ut("WebGLRenderer: Texture samplers can not be part of an uniforms group."):Ut("WebGLRenderer: Unsupported uniform value type.",S),b}function m(S){const b=S.target;b.removeEventListener("dispose",m);const w=a.indexOf(b.__bindingPointIndex);a.splice(w,1),i.deleteBuffer(s[b.id]),delete s[b.id],delete r[b.id]}function p(){for(const S in s)i.deleteBuffer(s[S]);a=[],s={},r={}}return{bind:l,update:c,dispose:p}}const Ox=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]);let Bn=null;function Bx(){return Bn===null&&(Bn=new Dh(Ox,16,16,ys,li),Bn.name="DFG_LUT",Bn.minFilter=ze,Bn.magFilter=ze,Bn.wrapS=ni,Bn.wrapT=ni,Bn.generateMipmaps=!1,Bn.needsUpdate=!0),Bn}class kx{constructor(t={}){const{canvas:e=Qu(),context:n=null,depth:s=!0,stencil:r=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:u=!1,reversedDepthBuffer:d=!1,outputBufferType:f=fn}=t;this.isWebGLRenderer=!0;let g;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");g=n.getContextAttributes().alpha}else g=a;const x=f,m=new Set([wl,Sl,yl]),p=new Set([fn,qn,js,Qs,_l,vl]),S=new Uint32Array(4),b=new Int32Array(4);let w=null,M=null;const C=[],A=[];let D=null;this.domElement=e,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=Wn,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const v=this;let y=!1;this._outputColorSpace=_n;let P=0,I=0,F=null,B=-1,k=null;const H=new be,z=new be;let $=null;const ut=new zt(0);let st=0,rt=e.width,kt=e.height,Nt=1,Kt=null,ie=null;const q=new be(0,0,rt,kt),et=new be(0,0,rt,kt);let yt=!1;const bt=new Al;let lt=!1,Ot=!1;const Yt=new ee,Bt=new L,Z=new be,nt={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let K=!1;function it(){return F===null?Nt:1}let R=n;function wt(E,O){return e.getContext(E,O)}try{const E={alpha:!0,depth:s,stencil:r,antialias:o,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:h,failIfMajorPerformanceCaveat:u};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${gl}`),e.addEventListener("webglcontextlost",Xt,!1),e.addEventListener("webglcontextrestored",ge,!1),e.addEventListener("webglcontextcreationerror",he,!1),R===null){const O="webgl2";if(R=wt(O,E),R===null)throw wt(O)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(E){throw ne("WebGLRenderer: "+E.message),E}let gt,Lt,ht,T,_,N,X,Q,Y,It,ft,Rt,Vt,at,xt,Pt,Dt,mt,$t,U,St,ct,Et,ot;function tt(){gt=new B0(R),gt.init(),ct=new Rx(R,gt),Lt=new R0(R,gt,t,ct),ht=new Cx(R,gt),Lt.reversedDepthBuffer&&d&&ht.buffers.depth.setReversed(!0),T=new G0(R),_=new dx,N=new Ax(R,gt,ht,_,Lt,ct,T),X=new I0(v),Q=new O0(v),Y=new Xf(R),Et=new C0(R,Y),It=new k0(R,Y,T,Et),ft=new V0(R,It,Y,T),$t=new H0(R,Lt,N),Pt=new P0(_),Rt=new ux(v,X,Q,gt,Lt,Et,Pt),Vt=new Nx(v,_),at=new px,xt=new Mx(gt),mt=new T0(v,X,Q,ht,ft,g,l),Dt=new bx(v,ft,Lt),ot=new Ux(R,T,Lt,ht),U=new A0(R,gt,T),St=new z0(R,gt,T),T.programs=Rt.programs,v.capabilities=Lt,v.extensions=gt,v.properties=_,v.renderLists=at,v.shadowMap=Dt,v.state=ht,v.info=T}tt(),x!==fn&&(D=new X0(x,e.width,e.height,s,r));const pt=new Dx(v,R);this.xr=pt,this.getContext=function(){return R},this.getContextAttributes=function(){return R.getContextAttributes()},this.forceContextLoss=function(){const E=gt.get("WEBGL_lose_context");E&&E.loseContext()},this.forceContextRestore=function(){const E=gt.get("WEBGL_lose_context");E&&E.restoreContext()},this.getPixelRatio=function(){return Nt},this.setPixelRatio=function(E){E!==void 0&&(Nt=E,this.setSize(rt,kt,!1))},this.getSize=function(E){return E.set(rt,kt)},this.setSize=function(E,O,W=!0){if(pt.isPresenting){Ut("WebGLRenderer: Can't change size while VR device is presenting.");return}rt=E,kt=O,e.width=Math.floor(E*Nt),e.height=Math.floor(O*Nt),W===!0&&(e.style.width=E+"px",e.style.height=O+"px"),D!==null&&D.setSize(e.width,e.height),this.setViewport(0,0,E,O)},this.getDrawingBufferSize=function(E){return E.set(rt*Nt,kt*Nt).floor()},this.setDrawingBufferSize=function(E,O,W){rt=E,kt=O,Nt=W,e.width=Math.floor(E*W),e.height=Math.floor(O*W),this.setViewport(0,0,E,O)},this.setEffects=function(E){if(x===fn){console.error("THREE.WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(E){for(let O=0;O<E.length;O++)if(E[O].isOutputPass===!0){console.warn("THREE.WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}D.setEffects(E||[])},this.getCurrentViewport=function(E){return E.copy(H)},this.getViewport=function(E){return E.copy(q)},this.setViewport=function(E,O,W,V){E.isVector4?q.set(E.x,E.y,E.z,E.w):q.set(E,O,W,V),ht.viewport(H.copy(q).multiplyScalar(Nt).round())},this.getScissor=function(E){return E.copy(et)},this.setScissor=function(E,O,W,V){E.isVector4?et.set(E.x,E.y,E.z,E.w):et.set(E,O,W,V),ht.scissor(z.copy(et).multiplyScalar(Nt).round())},this.getScissorTest=function(){return yt},this.setScissorTest=function(E){ht.setScissorTest(yt=E)},this.setOpaqueSort=function(E){Kt=E},this.setTransparentSort=function(E){ie=E},this.getClearColor=function(E){return E.copy(mt.getClearColor())},this.setClearColor=function(){mt.setClearColor(...arguments)},this.getClearAlpha=function(){return mt.getClearAlpha()},this.setClearAlpha=function(){mt.setClearAlpha(...arguments)},this.clear=function(E=!0,O=!0,W=!0){let V=0;if(E){let G=!1;if(F!==null){const _t=F.texture.format;G=m.has(_t)}if(G){const _t=F.texture.type,Tt=p.has(_t),Mt=mt.getClearColor(),At=mt.getClearAlpha(),Ft=Mt.r,Wt=Mt.g,Gt=Mt.b;Tt?(S[0]=Ft,S[1]=Wt,S[2]=Gt,S[3]=At,R.clearBufferuiv(R.COLOR,0,S)):(b[0]=Ft,b[1]=Wt,b[2]=Gt,b[3]=At,R.clearBufferiv(R.COLOR,0,b))}else V|=R.COLOR_BUFFER_BIT}O&&(V|=R.DEPTH_BUFFER_BIT),W&&(V|=R.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),R.clear(V)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){e.removeEventListener("webglcontextlost",Xt,!1),e.removeEventListener("webglcontextrestored",ge,!1),e.removeEventListener("webglcontextcreationerror",he,!1),mt.dispose(),at.dispose(),xt.dispose(),_.dispose(),X.dispose(),Q.dispose(),ft.dispose(),Et.dispose(),ot.dispose(),Rt.dispose(),pt.dispose(),pt.removeEventListener("sessionstart",zl),pt.removeEventListener("sessionend",Gl),Ti.stop()};function Xt(E){E.preventDefault(),Qr("WebGLRenderer: Context Lost."),y=!0}function ge(){Qr("WebGLRenderer: Context Restored."),y=!1;const E=T.autoReset,O=Dt.enabled,W=Dt.autoUpdate,V=Dt.needsUpdate,G=Dt.type;tt(),T.autoReset=E,Dt.enabled=O,Dt.autoUpdate=W,Dt.needsUpdate=V,Dt.type=G}function he(E){ne("WebGLRenderer: A WebGL context could not be created. Reason: ",E.statusMessage)}function On(E){const O=E.target;O.removeEventListener("dispose",On),$n(O)}function $n(E){fu(E),_.remove(E)}function fu(E){const O=_.get(E).programs;O!==void 0&&(O.forEach(function(W){Rt.releaseProgram(W)}),E.isShaderMaterial&&Rt.releaseShaderCache(E))}this.renderBufferDirect=function(E,O,W,V,G,_t){O===null&&(O=nt);const Tt=G.isMesh&&G.matrixWorld.determinant()<0,Mt=mu(E,O,W,V,G);ht.setMaterial(V,Tt);let At=W.index,Ft=1;if(V.wireframe===!0){if(At=It.getWireframeAttribute(W),At===void 0)return;Ft=2}const Wt=W.drawRange,Gt=W.attributes.position;let Jt=Wt.start*Ft,pe=(Wt.start+Wt.count)*Ft;_t!==null&&(Jt=Math.max(Jt,_t.start*Ft),pe=Math.min(pe,(_t.start+_t.count)*Ft)),At!==null?(Jt=Math.max(Jt,0),pe=Math.min(pe,At.count)):Gt!=null&&(Jt=Math.max(Jt,0),pe=Math.min(pe,Gt.count));const ve=pe-Jt;if(ve<0||ve===1/0)return;Et.setup(G,V,Mt,W,At);let Me,me=U;if(At!==null&&(Me=Y.get(At),me=St,me.setIndex(Me)),G.isMesh)V.wireframe===!0?(ht.setLineWidth(V.wireframeLinewidth*it()),me.setMode(R.LINES)):me.setMode(R.TRIANGLES);else if(G.isLine){let Ht=V.linewidth;Ht===void 0&&(Ht=1),ht.setLineWidth(Ht*it()),G.isLineSegments?me.setMode(R.LINES):G.isLineLoop?me.setMode(R.LINE_LOOP):me.setMode(R.LINE_STRIP)}else G.isPoints?me.setMode(R.POINTS):G.isSprite&&me.setMode(R.TRIANGLES);if(G.isBatchedMesh)if(G._multiDrawInstances!==null)tr("WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),me.renderMultiDrawInstances(G._multiDrawStarts,G._multiDrawCounts,G._multiDrawCount,G._multiDrawInstances);else if(gt.get("WEBGL_multi_draw"))me.renderMultiDraw(G._multiDrawStarts,G._multiDrawCounts,G._multiDrawCount);else{const Ht=G._multiDrawStarts,ue=G._multiDrawCounts,ae=G._multiDrawCount,on=At?Y.get(At).bytesPerElement:1,Yi=_.get(V).currentProgram.getUniforms();for(let ln=0;ln<ae;ln++)Yi.setValue(R,"_gl_DrawID",ln),me.render(Ht[ln]/on,ue[ln])}else if(G.isInstancedMesh)me.renderInstances(Jt,ve,G.count);else if(W.isInstancedBufferGeometry){const Ht=W._maxInstanceCount!==void 0?W._maxInstanceCount:1/0,ue=Math.min(W.instanceCount,Ht);me.renderInstances(Jt,ve,ue)}else me.render(Jt,ve)};function kl(E,O,W){E.transparent===!0&&E.side===Be&&E.forceSinglePass===!1?(E.side=rn,E.needsUpdate=!0,hr(E,O,W),E.side=Ei,E.needsUpdate=!0,hr(E,O,W),E.side=Be):hr(E,O,W)}this.compile=function(E,O,W=null){W===null&&(W=E),M=xt.get(W),M.init(O),A.push(M),W.traverseVisible(function(G){G.isLight&&G.layers.test(O.layers)&&(M.pushLight(G),G.castShadow&&M.pushShadow(G))}),E!==W&&E.traverseVisible(function(G){G.isLight&&G.layers.test(O.layers)&&(M.pushLight(G),G.castShadow&&M.pushShadow(G))}),M.setupLights();const V=new Set;return E.traverse(function(G){if(!(G.isMesh||G.isPoints||G.isLine||G.isSprite))return;const _t=G.material;if(_t)if(Array.isArray(_t))for(let Tt=0;Tt<_t.length;Tt++){const Mt=_t[Tt];kl(Mt,W,G),V.add(Mt)}else kl(_t,W,G),V.add(_t)}),M=A.pop(),V},this.compileAsync=function(E,O,W=null){const V=this.compile(E,O,W);return new Promise(G=>{function _t(){if(V.forEach(function(Tt){_.get(Tt).currentProgram.isReady()&&V.delete(Tt)}),V.size===0){G(E);return}setTimeout(_t,10)}gt.get("KHR_parallel_shader_compile")!==null?_t():setTimeout(_t,10)})};let xa=null;function pu(E){xa&&xa(E)}function zl(){Ti.stop()}function Gl(){Ti.start()}const Ti=new qh;Ti.setAnimationLoop(pu),typeof self<"u"&&Ti.setContext(self),this.setAnimationLoop=function(E){xa=E,pt.setAnimationLoop(E),E===null?Ti.stop():Ti.start()},pt.addEventListener("sessionstart",zl),pt.addEventListener("sessionend",Gl),this.render=function(E,O){if(O!==void 0&&O.isCamera!==!0){ne("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(y===!0)return;const W=pt.enabled===!0&&pt.isPresenting===!0,V=D!==null&&(F===null||W)&&D.begin(v,F);if(E.matrixWorldAutoUpdate===!0&&E.updateMatrixWorld(),O.parent===null&&O.matrixWorldAutoUpdate===!0&&O.updateMatrixWorld(),pt.enabled===!0&&pt.isPresenting===!0&&(D===null||D.isCompositing()===!1)&&(pt.cameraAutoUpdate===!0&&pt.updateCamera(O),O=pt.getCamera()),E.isScene===!0&&E.onBeforeRender(v,E,O,F),M=xt.get(E,A.length),M.init(O),A.push(M),Yt.multiplyMatrices(O.projectionMatrix,O.matrixWorldInverse),bt.setFromProjectionMatrix(Yt,Gn,O.reversedDepth),Ot=this.localClippingEnabled,lt=Pt.init(this.clippingPlanes,Ot),w=at.get(E,C.length),w.init(),C.push(w),pt.enabled===!0&&pt.isPresenting===!0){const Tt=v.xr.getDepthSensingMesh();Tt!==null&&_a(Tt,O,-1/0,v.sortObjects)}_a(E,O,0,v.sortObjects),w.finish(),v.sortObjects===!0&&w.sort(Kt,ie),K=pt.enabled===!1||pt.isPresenting===!1||pt.hasDepthSensing()===!1,K&&mt.addToRenderList(w,E),this.info.render.frame++,lt===!0&&Pt.beginShadows();const G=M.state.shadowsArray;if(Dt.render(G,E,O),lt===!0&&Pt.endShadows(),this.info.autoReset===!0&&this.info.reset(),(V&&D.hasRenderPass())===!1){const Tt=w.opaque,Mt=w.transmissive;if(M.setupLights(),O.isArrayCamera){const At=O.cameras;if(Mt.length>0)for(let Ft=0,Wt=At.length;Ft<Wt;Ft++){const Gt=At[Ft];Vl(Tt,Mt,E,Gt)}K&&mt.render(E);for(let Ft=0,Wt=At.length;Ft<Wt;Ft++){const Gt=At[Ft];Hl(w,E,Gt,Gt.viewport)}}else Mt.length>0&&Vl(Tt,Mt,E,O),K&&mt.render(E),Hl(w,E,O)}F!==null&&I===0&&(N.updateMultisampleRenderTarget(F),N.updateRenderTargetMipmap(F)),V&&D.end(v),E.isScene===!0&&E.onAfterRender(v,E,O),Et.resetDefaultState(),B=-1,k=null,A.pop(),A.length>0?(M=A[A.length-1],lt===!0&&Pt.setGlobalState(v.clippingPlanes,M.state.camera)):M=null,C.pop(),C.length>0?w=C[C.length-1]:w=null};function _a(E,O,W,V){if(E.visible===!1)return;if(E.layers.test(O.layers)){if(E.isGroup)W=E.renderOrder;else if(E.isLOD)E.autoUpdate===!0&&E.update(O);else if(E.isLight)M.pushLight(E),E.castShadow&&M.pushShadow(E);else if(E.isSprite){if(!E.frustumCulled||bt.intersectsSprite(E)){V&&Z.setFromMatrixPosition(E.matrixWorld).applyMatrix4(Yt);const Tt=ft.update(E),Mt=E.material;Mt.visible&&w.push(E,Tt,Mt,W,Z.z,null)}}else if((E.isMesh||E.isLine||E.isPoints)&&(!E.frustumCulled||bt.intersectsObject(E))){const Tt=ft.update(E),Mt=E.material;if(V&&(E.boundingSphere!==void 0?(E.boundingSphere===null&&E.computeBoundingSphere(),Z.copy(E.boundingSphere.center)):(Tt.boundingSphere===null&&Tt.computeBoundingSphere(),Z.copy(Tt.boundingSphere.center)),Z.applyMatrix4(E.matrixWorld).applyMatrix4(Yt)),Array.isArray(Mt)){const At=Tt.groups;for(let Ft=0,Wt=At.length;Ft<Wt;Ft++){const Gt=At[Ft],Jt=Mt[Gt.materialIndex];Jt&&Jt.visible&&w.push(E,Tt,Jt,W,Z.z,Gt)}}else Mt.visible&&w.push(E,Tt,Mt,W,Z.z,null)}}const _t=E.children;for(let Tt=0,Mt=_t.length;Tt<Mt;Tt++)_a(_t[Tt],O,W,V)}function Hl(E,O,W,V){const{opaque:G,transmissive:_t,transparent:Tt}=E;M.setupLightsView(W),lt===!0&&Pt.setGlobalState(v.clippingPlanes,W),V&&ht.viewport(H.copy(V)),G.length>0&&cr(G,O,W),_t.length>0&&cr(_t,O,W),Tt.length>0&&cr(Tt,O,W),ht.buffers.depth.setTest(!0),ht.buffers.depth.setMask(!0),ht.buffers.color.setMask(!0),ht.setPolygonOffset(!1)}function Vl(E,O,W,V){if((W.isScene===!0?W.overrideMaterial:null)!==null)return;if(M.state.transmissionRenderTarget[V.id]===void 0){const Jt=gt.has("EXT_color_buffer_half_float")||gt.has("EXT_color_buffer_float");M.state.transmissionRenderTarget[V.id]=new Yn(1,1,{generateMipmaps:!0,type:Jt?li:fn,minFilter:zi,samples:Lt.samples,stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:re.workingColorSpace})}const _t=M.state.transmissionRenderTarget[V.id],Tt=V.viewport||H;_t.setSize(Tt.z*v.transmissionResolutionScale,Tt.w*v.transmissionResolutionScale);const Mt=v.getRenderTarget(),At=v.getActiveCubeFace(),Ft=v.getActiveMipmapLevel();v.setRenderTarget(_t),v.getClearColor(ut),st=v.getClearAlpha(),st<1&&v.setClearColor(16777215,.5),v.clear(),K&&mt.render(W);const Wt=v.toneMapping;v.toneMapping=Wn;const Gt=V.viewport;if(V.viewport!==void 0&&(V.viewport=void 0),M.setupLightsView(V),lt===!0&&Pt.setGlobalState(v.clippingPlanes,V),cr(E,W,V),N.updateMultisampleRenderTarget(_t),N.updateRenderTargetMipmap(_t),gt.has("WEBGL_multisampled_render_to_texture")===!1){let Jt=!1;for(let pe=0,ve=O.length;pe<ve;pe++){const Me=O[pe],{object:me,geometry:Ht,material:ue,group:ae}=Me;if(ue.side===Be&&me.layers.test(V.layers)){const on=ue.side;ue.side=rn,ue.needsUpdate=!0,Wl(me,W,V,Ht,ue,ae),ue.side=on,ue.needsUpdate=!0,Jt=!0}}Jt===!0&&(N.updateMultisampleRenderTarget(_t),N.updateRenderTargetMipmap(_t))}v.setRenderTarget(Mt,At,Ft),v.setClearColor(ut,st),Gt!==void 0&&(V.viewport=Gt),v.toneMapping=Wt}function cr(E,O,W){const V=O.isScene===!0?O.overrideMaterial:null;for(let G=0,_t=E.length;G<_t;G++){const Tt=E[G],{object:Mt,geometry:At,group:Ft}=Tt;let Wt=Tt.material;Wt.allowOverride===!0&&V!==null&&(Wt=V),Mt.layers.test(W.layers)&&Wl(Mt,O,W,At,Wt,Ft)}}function Wl(E,O,W,V,G,_t){E.onBeforeRender(v,O,W,V,G,_t),E.modelViewMatrix.multiplyMatrices(W.matrixWorldInverse,E.matrixWorld),E.normalMatrix.getNormalMatrix(E.modelViewMatrix),G.onBeforeRender(v,O,W,V,E,_t),G.transparent===!0&&G.side===Be&&G.forceSinglePass===!1?(G.side=rn,G.needsUpdate=!0,v.renderBufferDirect(W,O,V,G,E,_t),G.side=Ei,G.needsUpdate=!0,v.renderBufferDirect(W,O,V,G,E,_t),G.side=Be):v.renderBufferDirect(W,O,V,G,E,_t),E.onAfterRender(v,O,W,V,G,_t)}function hr(E,O,W){O.isScene!==!0&&(O=nt);const V=_.get(E),G=M.state.lights,_t=M.state.shadowsArray,Tt=G.state.version,Mt=Rt.getParameters(E,G.state,_t,O,W),At=Rt.getProgramCacheKey(Mt);let Ft=V.programs;V.environment=E.isMeshStandardMaterial?O.environment:null,V.fog=O.fog,V.envMap=(E.isMeshStandardMaterial?Q:X).get(E.envMap||V.environment),V.envMapRotation=V.environment!==null&&E.envMap===null?O.environmentRotation:E.envMapRotation,Ft===void 0&&(E.addEventListener("dispose",On),Ft=new Map,V.programs=Ft);let Wt=Ft.get(At);if(Wt!==void 0){if(V.currentProgram===Wt&&V.lightsStateVersion===Tt)return Yl(E,Mt),Wt}else Mt.uniforms=Rt.getUniforms(E),E.onBeforeCompile(Mt,v),Wt=Rt.acquireProgram(Mt,At),Ft.set(At,Wt),V.uniforms=Mt.uniforms;const Gt=V.uniforms;return(!E.isShaderMaterial&&!E.isRawShaderMaterial||E.clipping===!0)&&(Gt.clippingPlanes=Pt.uniform),Yl(E,Mt),V.needsLights=xu(E),V.lightsStateVersion=Tt,V.needsLights&&(Gt.ambientLightColor.value=G.state.ambient,Gt.lightProbe.value=G.state.probe,Gt.directionalLights.value=G.state.directional,Gt.directionalLightShadows.value=G.state.directionalShadow,Gt.spotLights.value=G.state.spot,Gt.spotLightShadows.value=G.state.spotShadow,Gt.rectAreaLights.value=G.state.rectArea,Gt.ltc_1.value=G.state.rectAreaLTC1,Gt.ltc_2.value=G.state.rectAreaLTC2,Gt.pointLights.value=G.state.point,Gt.pointLightShadows.value=G.state.pointShadow,Gt.hemisphereLights.value=G.state.hemi,Gt.directionalShadowMap.value=G.state.directionalShadowMap,Gt.directionalShadowMatrix.value=G.state.directionalShadowMatrix,Gt.spotShadowMap.value=G.state.spotShadowMap,Gt.spotLightMatrix.value=G.state.spotLightMatrix,Gt.spotLightMap.value=G.state.spotLightMap,Gt.pointShadowMap.value=G.state.pointShadowMap,Gt.pointShadowMatrix.value=G.state.pointShadowMatrix),V.currentProgram=Wt,V.uniformsList=null,Wt}function Xl(E){if(E.uniformsList===null){const O=E.currentProgram.getUniforms();E.uniformsList=qr.seqWithValue(O.seq,E.uniforms)}return E.uniformsList}function Yl(E,O){const W=_.get(E);W.outputColorSpace=O.outputColorSpace,W.batching=O.batching,W.batchingColor=O.batchingColor,W.instancing=O.instancing,W.instancingColor=O.instancingColor,W.instancingMorph=O.instancingMorph,W.skinning=O.skinning,W.morphTargets=O.morphTargets,W.morphNormals=O.morphNormals,W.morphColors=O.morphColors,W.morphTargetsCount=O.morphTargetsCount,W.numClippingPlanes=O.numClippingPlanes,W.numIntersection=O.numClipIntersection,W.vertexAlphas=O.vertexAlphas,W.vertexTangents=O.vertexTangents,W.toneMapping=O.toneMapping}function mu(E,O,W,V,G){O.isScene!==!0&&(O=nt),N.resetTextureUnits();const _t=O.fog,Tt=V.isMeshStandardMaterial?O.environment:null,Mt=F===null?v.outputColorSpace:F.isXRRenderTarget===!0?F.texture.colorSpace:Ss,At=(V.isMeshStandardMaterial?Q:X).get(V.envMap||Tt),Ft=V.vertexColors===!0&&!!W.attributes.color&&W.attributes.color.itemSize===4,Wt=!!W.attributes.tangent&&(!!V.normalMap||V.anisotropy>0),Gt=!!W.morphAttributes.position,Jt=!!W.morphAttributes.normal,pe=!!W.morphAttributes.color;let ve=Wn;V.toneMapped&&(F===null||F.isXRRenderTarget===!0)&&(ve=v.toneMapping);const Me=W.morphAttributes.position||W.morphAttributes.normal||W.morphAttributes.color,me=Me!==void 0?Me.length:0,Ht=_.get(V),ue=M.state.lights;if(lt===!0&&(Ot===!0||E!==k)){const $e=E===k&&V.id===B;Pt.setState(V,E,$e)}let ae=!1;V.version===Ht.__version?(Ht.needsLights&&Ht.lightsStateVersion!==ue.state.version||Ht.outputColorSpace!==Mt||G.isBatchedMesh&&Ht.batching===!1||!G.isBatchedMesh&&Ht.batching===!0||G.isBatchedMesh&&Ht.batchingColor===!0&&G.colorTexture===null||G.isBatchedMesh&&Ht.batchingColor===!1&&G.colorTexture!==null||G.isInstancedMesh&&Ht.instancing===!1||!G.isInstancedMesh&&Ht.instancing===!0||G.isSkinnedMesh&&Ht.skinning===!1||!G.isSkinnedMesh&&Ht.skinning===!0||G.isInstancedMesh&&Ht.instancingColor===!0&&G.instanceColor===null||G.isInstancedMesh&&Ht.instancingColor===!1&&G.instanceColor!==null||G.isInstancedMesh&&Ht.instancingMorph===!0&&G.morphTexture===null||G.isInstancedMesh&&Ht.instancingMorph===!1&&G.morphTexture!==null||Ht.envMap!==At||V.fog===!0&&Ht.fog!==_t||Ht.numClippingPlanes!==void 0&&(Ht.numClippingPlanes!==Pt.numPlanes||Ht.numIntersection!==Pt.numIntersection)||Ht.vertexAlphas!==Ft||Ht.vertexTangents!==Wt||Ht.morphTargets!==Gt||Ht.morphNormals!==Jt||Ht.morphColors!==pe||Ht.toneMapping!==ve||Ht.morphTargetsCount!==me)&&(ae=!0):(ae=!0,Ht.__version=V.version);let on=Ht.currentProgram;ae===!0&&(on=hr(V,O,G));let Yi=!1,ln=!1,Rs=!1;const xe=on.getUniforms(),en=Ht.uniforms;if(ht.useProgram(on.program)&&(Yi=!0,ln=!0,Rs=!0),V.id!==B&&(B=V.id,ln=!0),Yi||k!==E){ht.buffers.depth.getReversed()&&E.reversedDepth!==!0&&(E._reversedDepth=!0,E.updateProjectionMatrix()),xe.setValue(R,"projectionMatrix",E.projectionMatrix),xe.setValue(R,"viewMatrix",E.matrixWorldInverse);const nn=xe.map.cameraPosition;nn!==void 0&&nn.setValue(R,Bt.setFromMatrixPosition(E.matrixWorld)),Lt.logarithmicDepthBuffer&&xe.setValue(R,"logDepthBufFC",2/(Math.log(E.far+1)/Math.LN2)),(V.isMeshPhongMaterial||V.isMeshToonMaterial||V.isMeshLambertMaterial||V.isMeshBasicMaterial||V.isMeshStandardMaterial||V.isShaderMaterial)&&xe.setValue(R,"isOrthographic",E.isOrthographicCamera===!0),k!==E&&(k=E,ln=!0,Rs=!0)}if(Ht.needsLights&&(ue.state.directionalShadowMap.length>0&&xe.setValue(R,"directionalShadowMap",ue.state.directionalShadowMap,N),ue.state.spotShadowMap.length>0&&xe.setValue(R,"spotShadowMap",ue.state.spotShadowMap,N),ue.state.pointShadowMap.length>0&&xe.setValue(R,"pointShadowMap",ue.state.pointShadowMap,N)),G.isSkinnedMesh){xe.setOptional(R,G,"bindMatrix"),xe.setOptional(R,G,"bindMatrixInverse");const $e=G.skeleton;$e&&($e.boneTexture===null&&$e.computeBoneTexture(),xe.setValue(R,"boneTexture",$e.boneTexture,N))}G.isBatchedMesh&&(xe.setOptional(R,G,"batchingTexture"),xe.setValue(R,"batchingTexture",G._matricesTexture,N),xe.setOptional(R,G,"batchingIdTexture"),xe.setValue(R,"batchingIdTexture",G._indirectTexture,N),xe.setOptional(R,G,"batchingColorTexture"),G._colorsTexture!==null&&xe.setValue(R,"batchingColorTexture",G._colorsTexture,N));const pn=W.morphAttributes;if((pn.position!==void 0||pn.normal!==void 0||pn.color!==void 0)&&$t.update(G,W,on),(ln||Ht.receiveShadow!==G.receiveShadow)&&(Ht.receiveShadow=G.receiveShadow,xe.setValue(R,"receiveShadow",G.receiveShadow)),V.isMeshGouraudMaterial&&V.envMap!==null&&(en.envMap.value=At,en.flipEnvMap.value=At.isCubeTexture&&At.isRenderTargetTexture===!1?-1:1),V.isMeshStandardMaterial&&V.envMap===null&&O.environment!==null&&(en.envMapIntensity.value=O.environmentIntensity),en.dfgLUT!==void 0&&(en.dfgLUT.value=Bx()),ln&&(xe.setValue(R,"toneMappingExposure",v.toneMappingExposure),Ht.needsLights&&gu(en,Rs),_t&&V.fog===!0&&Vt.refreshFogUniforms(en,_t),Vt.refreshMaterialUniforms(en,V,Nt,kt,M.state.transmissionRenderTarget[E.id]),qr.upload(R,Xl(Ht),en,N)),V.isShaderMaterial&&V.uniformsNeedUpdate===!0&&(qr.upload(R,Xl(Ht),en,N),V.uniformsNeedUpdate=!1),V.isSpriteMaterial&&xe.setValue(R,"center",G.center),xe.setValue(R,"modelViewMatrix",G.modelViewMatrix),xe.setValue(R,"normalMatrix",G.normalMatrix),xe.setValue(R,"modelMatrix",G.matrixWorld),V.isShaderMaterial||V.isRawShaderMaterial){const $e=V.uniformsGroups;for(let nn=0,va=$e.length;nn<va;nn++){const Ci=$e[nn];ot.update(Ci,on),ot.bind(Ci,on)}}return on}function gu(E,O){E.ambientLightColor.needsUpdate=O,E.lightProbe.needsUpdate=O,E.directionalLights.needsUpdate=O,E.directionalLightShadows.needsUpdate=O,E.pointLights.needsUpdate=O,E.pointLightShadows.needsUpdate=O,E.spotLights.needsUpdate=O,E.spotLightShadows.needsUpdate=O,E.rectAreaLights.needsUpdate=O,E.hemisphereLights.needsUpdate=O}function xu(E){return E.isMeshLambertMaterial||E.isMeshToonMaterial||E.isMeshPhongMaterial||E.isMeshStandardMaterial||E.isShadowMaterial||E.isShaderMaterial&&E.lights===!0}this.getActiveCubeFace=function(){return P},this.getActiveMipmapLevel=function(){return I},this.getRenderTarget=function(){return F},this.setRenderTargetTextures=function(E,O,W){const V=_.get(E);V.__autoAllocateDepthBuffer=E.resolveDepthBuffer===!1,V.__autoAllocateDepthBuffer===!1&&(V.__useRenderToTexture=!1),_.get(E.texture).__webglTexture=O,_.get(E.depthTexture).__webglTexture=V.__autoAllocateDepthBuffer?void 0:W,V.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(E,O){const W=_.get(E);W.__webglFramebuffer=O,W.__useDefaultFramebuffer=O===void 0};const _u=R.createFramebuffer();this.setRenderTarget=function(E,O=0,W=0){F=E,P=O,I=W;let V=null,G=!1,_t=!1;if(E){const Mt=_.get(E);if(Mt.__useDefaultFramebuffer!==void 0){ht.bindFramebuffer(R.FRAMEBUFFER,Mt.__webglFramebuffer),H.copy(E.viewport),z.copy(E.scissor),$=E.scissorTest,ht.viewport(H),ht.scissor(z),ht.setScissorTest($),B=-1;return}else if(Mt.__webglFramebuffer===void 0)N.setupRenderTarget(E);else if(Mt.__hasExternalTextures)N.rebindTextures(E,_.get(E.texture).__webglTexture,_.get(E.depthTexture).__webglTexture);else if(E.depthBuffer){const Wt=E.depthTexture;if(Mt.__boundDepthTexture!==Wt){if(Wt!==null&&_.has(Wt)&&(E.width!==Wt.image.width||E.height!==Wt.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");N.setupDepthRenderbuffer(E)}}const At=E.texture;(At.isData3DTexture||At.isDataArrayTexture||At.isCompressedArrayTexture)&&(_t=!0);const Ft=_.get(E).__webglFramebuffer;E.isWebGLCubeRenderTarget?(Array.isArray(Ft[O])?V=Ft[O][W]:V=Ft[O],G=!0):E.samples>0&&N.useMultisampledRTT(E)===!1?V=_.get(E).__webglMultisampledFramebuffer:Array.isArray(Ft)?V=Ft[W]:V=Ft,H.copy(E.viewport),z.copy(E.scissor),$=E.scissorTest}else H.copy(q).multiplyScalar(Nt).floor(),z.copy(et).multiplyScalar(Nt).floor(),$=yt;if(W!==0&&(V=_u),ht.bindFramebuffer(R.FRAMEBUFFER,V)&&ht.drawBuffers(E,V),ht.viewport(H),ht.scissor(z),ht.setScissorTest($),G){const Mt=_.get(E.texture);R.framebufferTexture2D(R.FRAMEBUFFER,R.COLOR_ATTACHMENT0,R.TEXTURE_CUBE_MAP_POSITIVE_X+O,Mt.__webglTexture,W)}else if(_t){const Mt=O;for(let At=0;At<E.textures.length;At++){const Ft=_.get(E.textures[At]);R.framebufferTextureLayer(R.FRAMEBUFFER,R.COLOR_ATTACHMENT0+At,Ft.__webglTexture,W,Mt)}}else if(E!==null&&W!==0){const Mt=_.get(E.texture);R.framebufferTexture2D(R.FRAMEBUFFER,R.COLOR_ATTACHMENT0,R.TEXTURE_2D,Mt.__webglTexture,W)}B=-1},this.readRenderTargetPixels=function(E,O,W,V,G,_t,Tt,Mt=0){if(!(E&&E.isWebGLRenderTarget)){ne("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let At=_.get(E).__webglFramebuffer;if(E.isWebGLCubeRenderTarget&&Tt!==void 0&&(At=At[Tt]),At){ht.bindFramebuffer(R.FRAMEBUFFER,At);try{const Ft=E.textures[Mt],Wt=Ft.format,Gt=Ft.type;if(!Lt.textureFormatReadable(Wt)){ne("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!Lt.textureTypeReadable(Gt)){ne("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}O>=0&&O<=E.width-V&&W>=0&&W<=E.height-G&&(E.textures.length>1&&R.readBuffer(R.COLOR_ATTACHMENT0+Mt),R.readPixels(O,W,V,G,ct.convert(Wt),ct.convert(Gt),_t))}finally{const Ft=F!==null?_.get(F).__webglFramebuffer:null;ht.bindFramebuffer(R.FRAMEBUFFER,Ft)}}},this.readRenderTargetPixelsAsync=async function(E,O,W,V,G,_t,Tt,Mt=0){if(!(E&&E.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let At=_.get(E).__webglFramebuffer;if(E.isWebGLCubeRenderTarget&&Tt!==void 0&&(At=At[Tt]),At)if(O>=0&&O<=E.width-V&&W>=0&&W<=E.height-G){ht.bindFramebuffer(R.FRAMEBUFFER,At);const Ft=E.textures[Mt],Wt=Ft.format,Gt=Ft.type;if(!Lt.textureFormatReadable(Wt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!Lt.textureTypeReadable(Gt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const Jt=R.createBuffer();R.bindBuffer(R.PIXEL_PACK_BUFFER,Jt),R.bufferData(R.PIXEL_PACK_BUFFER,_t.byteLength,R.STREAM_READ),E.textures.length>1&&R.readBuffer(R.COLOR_ATTACHMENT0+Mt),R.readPixels(O,W,V,G,ct.convert(Wt),ct.convert(Gt),0);const pe=F!==null?_.get(F).__webglFramebuffer:null;ht.bindFramebuffer(R.FRAMEBUFFER,pe);const ve=R.fenceSync(R.SYNC_GPU_COMMANDS_COMPLETE,0);return R.flush(),await td(R,ve,4),R.bindBuffer(R.PIXEL_PACK_BUFFER,Jt),R.getBufferSubData(R.PIXEL_PACK_BUFFER,0,_t),R.deleteBuffer(Jt),R.deleteSync(ve),_t}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(E,O=null,W=0){const V=Math.pow(2,-W),G=Math.floor(E.image.width*V),_t=Math.floor(E.image.height*V),Tt=O!==null?O.x:0,Mt=O!==null?O.y:0;N.setTexture2D(E,0),R.copyTexSubImage2D(R.TEXTURE_2D,W,0,0,Tt,Mt,G,_t),ht.unbindTexture()};const vu=R.createFramebuffer(),Mu=R.createFramebuffer();this.copyTextureToTexture=function(E,O,W=null,V=null,G=0,_t=null){_t===null&&(G!==0?(tr("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),_t=G,G=0):_t=0);let Tt,Mt,At,Ft,Wt,Gt,Jt,pe,ve;const Me=E.isCompressedTexture?E.mipmaps[_t]:E.image;if(W!==null)Tt=W.max.x-W.min.x,Mt=W.max.y-W.min.y,At=W.isBox3?W.max.z-W.min.z:1,Ft=W.min.x,Wt=W.min.y,Gt=W.isBox3?W.min.z:0;else{const pn=Math.pow(2,-G);Tt=Math.floor(Me.width*pn),Mt=Math.floor(Me.height*pn),E.isDataArrayTexture?At=Me.depth:E.isData3DTexture?At=Math.floor(Me.depth*pn):At=1,Ft=0,Wt=0,Gt=0}V!==null?(Jt=V.x,pe=V.y,ve=V.z):(Jt=0,pe=0,ve=0);const me=ct.convert(O.format),Ht=ct.convert(O.type);let ue;O.isData3DTexture?(N.setTexture3D(O,0),ue=R.TEXTURE_3D):O.isDataArrayTexture||O.isCompressedArrayTexture?(N.setTexture2DArray(O,0),ue=R.TEXTURE_2D_ARRAY):(N.setTexture2D(O,0),ue=R.TEXTURE_2D),R.pixelStorei(R.UNPACK_FLIP_Y_WEBGL,O.flipY),R.pixelStorei(R.UNPACK_PREMULTIPLY_ALPHA_WEBGL,O.premultiplyAlpha),R.pixelStorei(R.UNPACK_ALIGNMENT,O.unpackAlignment);const ae=R.getParameter(R.UNPACK_ROW_LENGTH),on=R.getParameter(R.UNPACK_IMAGE_HEIGHT),Yi=R.getParameter(R.UNPACK_SKIP_PIXELS),ln=R.getParameter(R.UNPACK_SKIP_ROWS),Rs=R.getParameter(R.UNPACK_SKIP_IMAGES);R.pixelStorei(R.UNPACK_ROW_LENGTH,Me.width),R.pixelStorei(R.UNPACK_IMAGE_HEIGHT,Me.height),R.pixelStorei(R.UNPACK_SKIP_PIXELS,Ft),R.pixelStorei(R.UNPACK_SKIP_ROWS,Wt),R.pixelStorei(R.UNPACK_SKIP_IMAGES,Gt);const xe=E.isDataArrayTexture||E.isData3DTexture,en=O.isDataArrayTexture||O.isData3DTexture;if(E.isDepthTexture){const pn=_.get(E),$e=_.get(O),nn=_.get(pn.__renderTarget),va=_.get($e.__renderTarget);ht.bindFramebuffer(R.READ_FRAMEBUFFER,nn.__webglFramebuffer),ht.bindFramebuffer(R.DRAW_FRAMEBUFFER,va.__webglFramebuffer);for(let Ci=0;Ci<At;Ci++)xe&&(R.framebufferTextureLayer(R.READ_FRAMEBUFFER,R.COLOR_ATTACHMENT0,_.get(E).__webglTexture,G,Gt+Ci),R.framebufferTextureLayer(R.DRAW_FRAMEBUFFER,R.COLOR_ATTACHMENT0,_.get(O).__webglTexture,_t,ve+Ci)),R.blitFramebuffer(Ft,Wt,Tt,Mt,Jt,pe,Tt,Mt,R.DEPTH_BUFFER_BIT,R.NEAREST);ht.bindFramebuffer(R.READ_FRAMEBUFFER,null),ht.bindFramebuffer(R.DRAW_FRAMEBUFFER,null)}else if(G!==0||E.isRenderTargetTexture||_.has(E)){const pn=_.get(E),$e=_.get(O);ht.bindFramebuffer(R.READ_FRAMEBUFFER,vu),ht.bindFramebuffer(R.DRAW_FRAMEBUFFER,Mu);for(let nn=0;nn<At;nn++)xe?R.framebufferTextureLayer(R.READ_FRAMEBUFFER,R.COLOR_ATTACHMENT0,pn.__webglTexture,G,Gt+nn):R.framebufferTexture2D(R.READ_FRAMEBUFFER,R.COLOR_ATTACHMENT0,R.TEXTURE_2D,pn.__webglTexture,G),en?R.framebufferTextureLayer(R.DRAW_FRAMEBUFFER,R.COLOR_ATTACHMENT0,$e.__webglTexture,_t,ve+nn):R.framebufferTexture2D(R.DRAW_FRAMEBUFFER,R.COLOR_ATTACHMENT0,R.TEXTURE_2D,$e.__webglTexture,_t),G!==0?R.blitFramebuffer(Ft,Wt,Tt,Mt,Jt,pe,Tt,Mt,R.COLOR_BUFFER_BIT,R.NEAREST):en?R.copyTexSubImage3D(ue,_t,Jt,pe,ve+nn,Ft,Wt,Tt,Mt):R.copyTexSubImage2D(ue,_t,Jt,pe,Ft,Wt,Tt,Mt);ht.bindFramebuffer(R.READ_FRAMEBUFFER,null),ht.bindFramebuffer(R.DRAW_FRAMEBUFFER,null)}else en?E.isDataTexture||E.isData3DTexture?R.texSubImage3D(ue,_t,Jt,pe,ve,Tt,Mt,At,me,Ht,Me.data):O.isCompressedArrayTexture?R.compressedTexSubImage3D(ue,_t,Jt,pe,ve,Tt,Mt,At,me,Me.data):R.texSubImage3D(ue,_t,Jt,pe,ve,Tt,Mt,At,me,Ht,Me):E.isDataTexture?R.texSubImage2D(R.TEXTURE_2D,_t,Jt,pe,Tt,Mt,me,Ht,Me.data):E.isCompressedTexture?R.compressedTexSubImage2D(R.TEXTURE_2D,_t,Jt,pe,Me.width,Me.height,me,Me.data):R.texSubImage2D(R.TEXTURE_2D,_t,Jt,pe,Tt,Mt,me,Ht,Me);R.pixelStorei(R.UNPACK_ROW_LENGTH,ae),R.pixelStorei(R.UNPACK_IMAGE_HEIGHT,on),R.pixelStorei(R.UNPACK_SKIP_PIXELS,Yi),R.pixelStorei(R.UNPACK_SKIP_ROWS,ln),R.pixelStorei(R.UNPACK_SKIP_IMAGES,Rs),_t===0&&O.generateMipmaps&&R.generateMipmap(ue),ht.unbindTexture()},this.initRenderTarget=function(E){_.get(E).__webglFramebuffer===void 0&&N.setupRenderTarget(E)},this.initTexture=function(E){E.isCubeTexture?N.setTextureCube(E,0):E.isData3DTexture?N.setTexture3D(E,0):E.isDataArrayTexture||E.isCompressedArrayTexture?N.setTexture2DArray(E,0):N.setTexture2D(E,0),ht.unbindTexture()},this.resetState=function(){P=0,I=0,F=null,ht.reset(),Et.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Gn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;const e=this.getContext();e.drawingBufferColorSpace=re._getDrawingBufferColorSpace(t),e.unpackColorSpace=re._getUnpackColorSpace()}}let Re,Ln,Dn;function zx(){Cesium.Ion.defaultAccessToken="eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJqdGkiOiIzMzA1M2Q0MC01YzY1LTRkNDMtYWYzMS05MDdmZmI2MzAwYjYiLCJpZCI6NDA5NTYwLCJpYXQiOjE3NzQ1NDA1MjR9.szCoX8ALGsZ-jqCF6lvDtejplRGt2AJmQjZ2G7_51G0";let i;try{i=Cesium.Terrain.fromWorldTerrain()}catch{console.warn("Cesium World Terrain unavailable, using ellipsoid"),i=void 0}Re=new Cesium.Viewer("cesiumContainer",{terrain:i,timeline:!1,animation:!1,baseLayerPicker:!1,geocoder:!1,homeButton:!1,infoBox:!1,sceneModePicker:!1,selectionIndicator:!1,navigationHelpButton:!1,fullscreenButton:!1,shouldAnimate:!1}),Ln=new Cesium.Viewer("minimapCesium",{terrain:null,timeline:!1,animation:!1,baseLayerPicker:!1,geocoder:!1,homeButton:!1,infoBox:!1,sceneModePicker:!1,selectionIndicator:!1,navigationHelpButton:!1,fullscreenButton:!1,shouldAnimate:!1,skyBox:!1,skyAtmosphere:!1,contextOptions:{webgl:{preserveDrawingBuffer:!0}}}),Dn=new Cesium.Viewer("pauseMinimapCesium",{terrain:null,timeline:!1,animation:!1,baseLayerPicker:!1,geocoder:!1,homeButton:!1,infoBox:!1,sceneModePicker:!1,selectionIndicator:!1,navigationHelpButton:!1,fullscreenButton:!1,shouldAnimate:!1,skyBox:!1,skyAtmosphere:!1,contextOptions:{webgl:{preserveDrawingBuffer:!0}}}),[Re,Ln,Dn].forEach(t=>{t.scene.requestRenderMode=!1,t.scene.maximumRenderTimeChange=0,t.scene.globe.maximumScreenSpaceError=2,t.resolutionScale=.75,t.scene.screenSpaceCameraController.enableRotate=!1,t.scene.screenSpaceCameraController.enableTranslate=!1,t.scene.screenSpaceCameraController.enableZoom=!1,t.scene.screenSpaceCameraController.enableTilt=!1,t.scene.screenSpaceCameraController.enableLook=!1,t.scene.screenSpaceCameraController.maximumZoomDistance=25e6,t.scene.globe.tileCacheSize=2048,t.scene.globe.preloadAncestors=!0,t.scene.globe.preloadSiblings=!0,t.scene.globe.loadingDescendantLimit=20,t.scene.globe.skipLevelOfDetail=!0,t.scene.globe.baseScreenSpaceError=1024,t.scene.globe.skipScreenSpaceErrorFactor=16,t.scene.globe.skipLevels=1,t._cesiumWidget._creditContainer.style.display="none"}),Re.scene.globe.baseColor=Cesium.Color.fromCssColorString("#1a3a1a");try{Re.scene.globe.tileFailed&&Re.scene.globe.tileFailed.addEventListener(()=>{})}catch{}return[Ln,Dn].forEach(t=>{t.scene.globe.enableLighting=!1,t.scene.globe.showGroundAtmosphere=!1,t.scene.fog.enabled=!1,t.scene.highDynamicRange=!1,t.scene.postProcessStages.fxaa.enabled=!1,t.resolutionScale=1,t.scene.globe.maximumScreenSpaceError=2,t.scene.globe.baseColor=Cesium.Color.BLACK,t.scene.skyAtmosphere&&(t.scene.skyAtmosphere.show=!1)}),Re.scene.globe.enableLighting=!0,Re.scene.highDynamicRange=!1,Re.scene.postProcessStages.fxaa.enabled=!0,Re.scene.skyAtmosphere=new Cesium.SkyAtmosphere,Re.scene.fog.enabled=!0,Re.scene.fog.density=1e-4,ga(!1),Re}function Fl(i){!Re||!Ln||!Dn||[Re,Ln,Dn].forEach(t=>{t.scene.requestRenderMode=!i,t.scene.maximumRenderTimeChange=i?0:1/0})}function ga(i){if(!Re)return;const t=Re.scene.screenSpaceCameraController;t.enableRotate=i,t.enableTranslate=i,t.enableZoom=i,t.enableTilt=i,t.enableLook=i}function Gx(i,t,e,n,s,r){Re&&(Re.camera.setView({destination:Cesium.Cartesian3.fromDegrees(i,t,e),orientation:{heading:Cesium.Math.toRadians(n),pitch:Cesium.Math.toRadians(s),roll:Cesium.Math.toRadians(r)}}),Re.scene.requestRender())}function Hx(i,t,e,n){Ln&&(Ln.canvas.width===0||Ln.canvas.height===0||(Ln.camera.setView({destination:Cesium.Cartesian3.fromDegrees(i,t,e),orientation:{heading:Cesium.Math.toRadians(n),pitch:Cesium.Math.toRadians(-90),roll:0}}),Ln.scene.requestRender()))}function Vx(i,t,e,n){Dn&&(Dn.canvas.width===0||Dn.canvas.height===0||(Dn.camera.setView({destination:Cesium.Cartesian3.fromDegrees(i,t,e),orientation:{heading:Cesium.Math.toRadians(n),pitch:Cesium.Math.toRadians(-90),roll:0}}),Dn.scene.requestRender()))}function we(){return Re}function Wx(){return Ln}function Xx(){return Dn}class jh{constructor(){this.speed=15,this.maxSpeed=50,this.minSpeed=4,this.maxDiveSpeed=120,this.turboSpeed=400,this.mass=5,this.wingArea=.65,this.wingspan=2.1,this.aspectRatio=this.wingspan*this.wingspan/this.wingArea,this.clMax=1.6,this.cd0=.02,this.cdWingSpread=.008,this.k=1/(Math.PI*this.aspectRatio*.85),this.isFlapping=!1,this.flapStrength=0,this.flapCooldown=0,this.flapCycleDuration=.35,this.flapThrustImpulse=25,this.flapLiftImpulse=15,this.flapDecay=3,this.flapInput=!1,this.flapPrevInput=!1,this.gravity=9.8,this.airDensity=1.225,this.isGliding=!0,this.wingSpread=1,this.verticalSpeed=0,this.glideRatio=20,this.thermalLift=0,this.thermalStrength=0,this.thermalTimer=0,this.inThermal=!1,this.pitch=0,this.roll=0,this.heading=0,this.pitchRate=2,this.rollRate=3.2,this.yawRate=1,this.isBoosting=!1,this.boostTimeRemaining=0,this.boostDuration=4,this.boostMultiplier=2.5,this.boostRotations=0,this.boostPressed=!1,this.isTurbo=!1,this.turboPressed=!1,this.turboWindup=0,this.throttle=0,this.quaternion=new qe}boost(){this.boostTimeRemaining<=0&&(this.isBoosting=!0,this.boostTimeRemaining=this.boostDuration)}reset(t,e,n,s,r,a){this.heading=s||0,this.pitch=r||0,this.roll=a||0,this.speed=15,this.verticalSpeed=0,this.thermalLift=0,this.thermalStrength=0,this.isGliding=!0,this.isFlapping=!1,this.flapStrength=0,this.flapCooldown=0,this.wingSpread=1,this.isTurbo=!1,this.turboWindup=0;const o=new Fe(Se.degToRad(this.pitch),Se.degToRad(this.heading),Se.degToRad(this.roll),"YXZ");this.quaternion.setFromEuler(o)}getAirDensity(t){const e=t*.3048;return this.airDensity*Math.exp(-e/8500)}getLiftCoefficient(t){return t<-5?-.2:t<12?this.clMax*(t/12):t<18?this.clMax*(1-(t-12)/12):.1}updateThermals(t,e){this.thermalTimer+=t;const n=Math.max(0,1-(e-2e3)/15e3),s=this.thermalTimer,r=Math.sin(s*.3)*.4+Math.sin(s*.7+1.5)*.3+Math.sin(s*1.2+3)*.3;this.thermalStrength=Math.max(0,r)*n,this.inThermal=this.thermalStrength>.15;const a=Math.abs(this.roll)>15&&Math.abs(this.roll)<45?1.5:1;this.thermalLift=this.thermalStrength*3*a*this.wingSpread}update(t,e){this.boostTimeRemaining>0&&(this.boostTimeRemaining-=e,this.boostTimeRemaining<=0&&(this.isBoosting=!1,this.boostTimeRemaining=0)),t.boost?(!this.boostPressed&&!this.isBoosting&&!this.isTurbo&&this.boost(),this.boostPressed=!0):this.boostPressed=!1,t.turbo?(this.turboPressed||(this.isTurbo=!this.isTurbo,this.isTurbo&&(this.isBoosting=!1,this.boostTimeRemaining=0)),this.turboPressed=!0):this.turboPressed=!1,this.turboWindup=this.isTurbo?Math.min(1,this.turboWindup+e*.7):Math.max(0,this.turboWindup-e*1.5),this.flapInput=t.flap||!1,this.flapInput&&!this.isBoosting&&!this.isTurbo?(this.isFlapping=!0,this.isGliding=!1,this.flapCooldown-=e,this.flapCooldown<=0&&(this.flapStrength=1,this.flapCooldown=this.flapCycleDuration)):this.flapInput||(this.isFlapping=!1,!this.isBoosting&&!this.isTurbo&&(this.isGliding=!0)),this.flapStrength=Math.max(0,this.flapStrength-this.flapDecay*e),this.isTurbo||this.turboWindup>.1?this.wingSpread+=(.15-this.wingSpread)*e*6:this.isBoosting?(this.wingSpread+=(.2-this.wingSpread)*e*5,this.isGliding=!1):this.isGliding?this.wingSpread+=(1-this.wingSpread)*e*3:this.wingSpread=.65+this.flapStrength*.25,this.throttle=this.isFlapping?.3+this.flapStrength*.7:0;const n=this.getAirDensity(0),s=this.speed,r=.5*n*s*s,a=Math.max(-10,Math.min(20,-this.pitch*.3)),o=this.getLiftCoefficient(a)*this.wingSpread,l=r*this.wingArea*o,c=this.k*o*o,h=this.cd0+c+this.wingSpread*this.cdWingSpread;let u=r*this.wingArea*h;this.isBoosting&&(u*=.25),(this.isTurbo||this.turboWindup>.1)&&(u*=.05);let d=0;this.isFlapping&&(d=this.flapThrustImpulse*this.flapStrength);const f=Se.degToRad(this.pitch),g=this.mass*this.gravity*Math.sin(f),m=(d-u+g)/this.mass;this.speed+=m*e;let p=this.isBoosting?this.maxDiveSpeed:this.maxSpeed;if(this.pitch<-20&&!this.isBoosting&&(p+=(this.maxDiveSpeed-this.maxSpeed)*Math.min(1,Math.abs(this.pitch)/60)),(this.isTurbo||this.turboWindup>.01)&&(p=this.turboSpeed),this.speed=Math.max(this.minSpeed,Math.min(p,this.speed)),this.isTurbo||this.turboWindup>.01){const B=this.turboWindup*this.turboWindup*(3-2*this.turboWindup);this.speed+=(this.turboSpeed*B-this.speed)*e*2.5}this.isBoosting&&(this.speed+=(this.maxDiveSpeed*.8-this.speed)*e*3),this.updateThermals(e,0);const S=this.mass*this.gravity,b=this.isFlapping?this.flapLiftImpulse*this.flapStrength:0,w=(l+b-S+this.thermalLift*this.mass)/this.mass;this.verticalSpeed+=(w*.15-this.verticalSpeed)*e*2,this.speed<=this.minSpeed*1.3&&!this.isBoosting&&!this.isTurbo&&(this.pitch=Se.lerp(this.pitch,Math.min(this.pitch,-8),e*.8));const M=Math.min(1.2,this.speed/this.maxSpeed),C=M>.3?.5+M*.5:M/.3*.5,A=t.pitch*this.pitchRate*e*C,D=t.roll*this.rollRate*e*C,v=t.yaw*this.yawRate*e*C,y=new qe().setFromAxisAngle(new L(1,0,0),A),P=new qe().setFromAxisAngle(new L(0,0,1),D),I=new qe().setFromAxisAngle(new L(0,1,0),v);this.quaternion.multiply(I).multiply(y).multiply(P).normalize();const F=new Fe().setFromQuaternion(this.quaternion,"YXZ");return this.heading=Se.radToDeg(F.y),this.pitch=Se.radToDeg(F.x),this.roll=Se.radToDeg(F.z),{speed:this.speed,pitch:this.pitch,roll:this.roll,heading:this.heading,isBoosting:this.isBoosting,boostTimeRemaining:this.boostTimeRemaining,boostDuration:this.boostDuration,boostRotations:this.boostRotations,isGliding:this.isGliding,isFlapping:this.isFlapping,flapStrength:this.flapStrength,wingSpread:this.wingSpread,thermalStrength:this.thermalStrength,inThermal:this.inThermal,verticalSpeed:this.verticalSpeed,flapPhase:this.flapCooldown,liftForce:l,isTurbo:this.isTurbo,turboWindup:this.turboWindup}}}class Yx{constructor(){this.keys={},this.prevKeys={},window.addEventListener("keydown",t=>this.keys[t.key.toLowerCase()]=!0),window.addEventListener("keyup",t=>this.keys[t.key.toLowerCase()]=!1),this.mouseDragging=!1,this.mouseDeltaX=0,this.mouseDeltaY=0,this.lastMouseX=0,this.lastMouseY=0,window.addEventListener("mousedown",t=>{t.button===0&&(this.mouseDragging=!0,this.lastMouseX=t.clientX,this.lastMouseY=t.clientY)}),window.addEventListener("mousemove",t=>{this.mouseDragging&&(this.mouseDeltaX+=t.clientX-this.lastMouseX,this.mouseDeltaY+=t.clientY-this.lastMouseY,this.lastMouseX=t.clientX,this.lastMouseY=t.clientY)}),window.addEventListener("mouseup",t=>{t.button===0&&(this.mouseDragging=!1)}),this.input={throttle:0,pitch:0,roll:0,yaw:0,boost:!1,turbo:!1,flap:!1,cameraYaw:0,cameraPitch:0,isDragging:!1,fire:!1,fireFlare:!1,weaponIndex:-1,toggleWeapon:!1},this.sensitivity=.2,this.isMobile=this.detectMobile(),this.tiltEnabled=!1,this.tiltPitch=0,this.tiltRoll=0,this.tiltCalibration={pitch:0,roll:0},this.tiltSensitivity=1,this.touchThrottle=0,this.touchBoosting=!1,this.touchTurbo=!1,this.touchFlapping=!1,this.touchFiring=!1,this.touchFlare=!1,this.touchWeaponToggle=!1,this.touchPrevWeaponToggle=!1,this.touchCameraDragging=!1,this.touchCameraDeltaX=0,this.touchCameraDeltaY=0,this.lastTouchX=0,this.lastTouchY=0,this.cameraFingerID=null,this.isMobile&&this.initMobileControls()}detectMobile(){return/Android|iPhone|iPad|iPod|webOS|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)||"ontouchstart"in window||navigator.maxTouchPoints>0}async initMobileControls(){this.createTouchUI(),await this.requestOrientationPermission(),window.addEventListener("deviceorientation",s=>{if(!this.tiltEnabled)return;const r=s.beta||0,a=s.gamma||0;this.tiltPitch=r-this.tiltCalibration.pitch,this.tiltRoll=a-this.tiltCalibration.roll},!0);const t=document.getElementById("cesiumContainer"),n=document.getElementById("threeContainer")||t||document.body;n.addEventListener("touchstart",s=>this.handleViewTouchStart(s),{passive:!1}),n.addEventListener("touchmove",s=>this.handleViewTouchMove(s),{passive:!1}),n.addEventListener("touchend",s=>this.handleViewTouchEnd(s),{passive:!1})}async requestOrientationPermission(){if(typeof DeviceOrientationEvent<"u"&&typeof DeviceOrientationEvent.requestPermission=="function")try{await DeviceOrientationEvent.requestPermission()==="granted"&&(this.tiltEnabled=!0)}catch(t){console.warn("Device orientation permission denied:",t),this.tiltEnabled=!1}else this.tiltEnabled=!0}calibrateTilt(){this.tiltCalibration.pitch=this.tiltPitch+this.tiltCalibration.pitch,this.tiltCalibration.roll=this.tiltRoll+this.tiltCalibration.roll}createTouchUI(){const t=document.createElement("div");t.id="mobile-controls",t.style.cssText=`
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
		`;const o=(m,p,S,b=52)=>{const w=document.createElement("div");return w.id=m,w.style.cssText=`
				width: ${b}px; height: ${b}px; border-radius: 50%;
				background: ${S}; border: 2px solid rgba(255,255,255,0.3);
				display: flex; align-items: center; justify-content: center;
				font-size: 9px; color: #fff; text-align: center;
				user-select: none; touch-action: none;
				line-height: 1.1; font-weight: bold;
			`,w.textContent=p,w},l=o("mobile-fire","TALON","rgba(220,50,50,0.6)",58),c=o("mobile-flap","FLAP","rgba(80,180,80,0.6)",64),h=o("mobile-turbo","TURBO","rgba(255,140,0,0.6)",48),u=o("mobile-boost","DIVE","rgba(50,120,220,0.6)",44),d=o("mobile-weapon","SWITCH","rgba(212,160,23,0.5)",42),f=o("mobile-flare","SCREECH","rgba(100,200,100,0.5)",42),g=o("mobile-calibrate","LEVEL","rgba(150,150,150,0.5)",36);l.addEventListener("touchstart",m=>{m.preventDefault(),m.stopPropagation(),this.touchFiring=!0,l.style.background="rgba(255,80,80,0.8)"},{passive:!1}),l.addEventListener("touchend",m=>{this.touchFiring=!1,l.style.background="rgba(220,50,50,0.6)"}),c.addEventListener("touchstart",m=>{m.preventDefault(),m.stopPropagation(),this.touchFlapping=!0,c.style.background="rgba(100,220,100,0.9)"},{passive:!1}),c.addEventListener("touchend",m=>{this.touchFlapping=!1,c.style.background="rgba(80,180,80,0.6)"}),h.addEventListener("touchstart",m=>{m.preventDefault(),m.stopPropagation(),this.touchTurbo=!0,h.style.background=this.touchTurbo?"rgba(255,180,0,0.9)":"rgba(255,140,0,0.6)",setTimeout(()=>{h.style.background="rgba(255,140,0,0.6)"},200)},{passive:!1}),u.addEventListener("touchstart",m=>{m.preventDefault(),m.stopPropagation(),this.touchBoosting=!0,u.style.background="rgba(80,160,255,0.8)"},{passive:!1}),u.addEventListener("touchend",m=>{this.touchBoosting=!1,u.style.background="rgba(50,120,220,0.6)"}),d.addEventListener("touchstart",m=>{m.preventDefault(),m.stopPropagation(),this.touchWeaponToggle=!0,d.style.background="rgba(212,160,23,0.8)",setTimeout(()=>{d.style.background="rgba(212,160,23,0.5)"},200)},{passive:!1}),f.addEventListener("touchstart",m=>{m.preventDefault(),m.stopPropagation(),this.touchFlare=!0,f.style.background="rgba(140,240,140,0.8)"},{passive:!1}),f.addEventListener("touchend",m=>{this.touchFlare=!1,f.style.background="rgba(100,200,100,0.5)"}),g.addEventListener("touchstart",m=>{m.preventDefault(),m.stopPropagation(),this.calibrateTilt(),g.style.background="rgba(200,200,200,0.8)",setTimeout(()=>{g.style.background="rgba(150,150,150,0.5)"},300)},{passive:!1}),a.appendChild(l),a.appendChild(c),a.appendChild(h),a.appendChild(u),a.appendChild(d),a.appendChild(f),a.appendChild(g);const x=document.createElement("div");x.id="mobile-pause",x.style.cssText=`
			position: absolute; top: 8px; right: 8px; width: 36px; height: 36px;
			background: rgba(0,0,0,0.5); border: 1px solid rgba(212,160,23,0.5);
			border-radius: 4px; display: flex; align-items: center; justify-content: center;
			font-size: 18px; color: #d4a017; pointer-events: auto;
			touch-action: none; user-select: none;
		`,x.textContent="⏸",x.addEventListener("touchstart",m=>{m.preventDefault(),m.stopPropagation(),window.dispatchEvent(new KeyboardEvent("keydown",{key:"Escape"})),setTimeout(()=>{window.dispatchEvent(new KeyboardEvent("keyup",{key:"Escape"}))},100)},{passive:!1}),t.appendChild(e),t.appendChild(a),t.appendChild(x),document.body.appendChild(t),this.mobileControlsContainer=t}updateThrottleFromTouch(t,e){const n=e.getBoundingClientRect(),s=t.clientY-n.top,r=n.height,a=1-Math.max(0,Math.min(1,s/r));this.touchThrottle=a;const o=document.getElementById("mobile-throttle-fill");o&&(o.style.height=`${a*100}%`)}handleViewTouchStart(t){if(t.target.closest("#mobile-controls"))return;const e=t.changedTouches[0];this.cameraFingerID===null&&(this.cameraFingerID=e.identifier,this.lastTouchX=e.clientX,this.lastTouchY=e.clientY,this.touchCameraDragging=!0)}handleViewTouchMove(t){for(const e of t.changedTouches)e.identifier===this.cameraFingerID&&(this.touchCameraDeltaX+=e.clientX-this.lastTouchX,this.touchCameraDeltaY+=e.clientY-this.lastTouchY,this.lastTouchX=e.clientX,this.lastTouchY=e.clientY)}handleViewTouchEnd(t){for(const e of t.changedTouches)e.identifier===this.cameraFingerID&&(this.cameraFingerID=null,this.touchCameraDragging=!1)}setMobileVisible(t){this.mobileControlsContainer&&(this.mobileControlsContainer.style.display=t?"block":"none")}setSensitivity(t){this.sensitivity=t}update(){this.input.boost=!!this.keys[" "],this.input.turbo=!!this.keys.shift,this.input.isDragging=this.mouseDragging,this.input.fire=!!this.keys.enter||!!this.keys.f,this.input.fireFlare=!!this.keys.v,this.input.toggleWeapon=!!this.keys.q&&!this.prevKeys.q,this.input.weaponIndex=-1,this.keys[1]&&(this.input.weaponIndex=0),this.keys[2]&&(this.input.weaponIndex=1),this.input.flap=!!this.keys.w,this.keys.s?this.input.throttle=Math.max(0,this.input.throttle-.5*.016):this.input.flap?this.input.throttle=Math.min(1,this.input.throttle+.5*.016):this.input.throttle=Math.max(0,this.input.throttle-.2*.016);const t=this.keys.arrowup?-1:this.keys.arrowdown?1:0;this.input.pitch=this.lerp(this.input.pitch,t,.1);const e=this.keys.arrowleft?-1:this.keys.arrowright?1:0;this.input.roll=this.lerp(this.input.roll,e,.1);const n=this.keys.a?-1:this.keys.d?1:0;if(this.input.yaw=this.lerp(this.input.yaw,n,.1),this.isMobile&&this.tiltEnabled){let a=0;Math.abs(this.tiltRoll)>3&&(a=Math.max(-1,Math.min(1,(this.tiltRoll-Math.sign(this.tiltRoll)*3)/32)));let o=0;Math.abs(this.tiltPitch)>3&&(o=Math.max(-1,Math.min(1,(this.tiltPitch-Math.sign(this.tiltPitch)*3)/32))),this.input.roll=this.lerp(this.input.roll,a*this.tiltSensitivity,.15),this.input.pitch=this.lerp(this.input.pitch,o*this.tiltSensitivity,.15),Math.abs(a)>.3?this.input.yaw=this.lerp(this.input.yaw,a*.4,.1):this.input.yaw=this.lerp(this.input.yaw,0,.1)}return this.isMobile&&(this.input.throttle=this.touchThrottle,this.input.boost=this.input.boost||this.touchBoosting,this.input.turbo=this.input.turbo||this.touchTurbo,this.input.flap=this.input.flap||this.touchFlapping,this.touchFlapping&&(this.input.throttle=Math.min(1,this.input.throttle+.5*.016)),this.input.fire=this.input.fire||this.touchFiring,this.input.fireFlare=this.input.fireFlare||this.touchFlare,this.touchWeaponToggle&&!this.touchPrevWeaponToggle&&(this.input.toggleWeapon=!0),this.touchPrevWeaponToggle=this.touchWeaponToggle,this.touchWeaponToggle=!1,this.touchCameraDragging&&(this.input.isDragging=!0,this.input.cameraYaw+=this.touchCameraDeltaX*this.sensitivity,this.input.cameraPitch-=this.touchCameraDeltaY*this.sensitivity,this.input.cameraPitch=Math.max(-85,Math.min(85,this.input.cameraPitch)),this.touchCameraDeltaX=0,this.touchCameraDeltaY=0)),this.mouseDragging?(this.input.cameraYaw+=this.mouseDeltaX*this.sensitivity,this.input.cameraPitch-=this.mouseDeltaY*this.sensitivity,this.input.cameraPitch=Math.max(-85,Math.min(85,this.input.cameraPitch)),this.mouseDeltaX=0,this.mouseDeltaY=0):this.touchCameraDragging||(this.input.cameraYaw=this.lerp(this.input.cameraYaw,0,.1),this.input.cameraPitch=this.lerp(this.input.cameraPitch,0,.1)),this.prevKeys={...this.keys},this.input}reset(){this.input.cameraYaw=0,this.input.cameraPitch=0,this.mouseDragging=!1,this.mouseDeltaX=0,this.mouseDeltaY=0,this.input.throttle=0,this.input.pitch=0,this.input.roll=0,this.input.yaw=0,this.touchThrottle=0,this.touchBoosting=!1,this.touchFiring=!1,this.touchFlare=!1}lerp(t,e,n){return(1-n)*t+n*e}}function qx(){const i=new Pe,t=new Ge({color:1969924,roughness:.85,metalness:0,flatShading:!0}),e=new Ge({color:1378304,roughness:.8,flatShading:!0,side:Be}),n=new Ge({color:2759178,roughness:.85,flatShading:!0,side:Be}),s=new Ge({color:3876117,roughness:.85,flatShading:!0}),r=new Ge({color:16315628,roughness:.55,flatShading:!0}),a=new Ge({color:15245312,roughness:.35,metalness:.1,flatShading:!0}),o=new Ge({color:13410304,roughness:.3,metalness:.2}),l=new ke({color:0}),c=new Ge({color:15789536,roughness:.65,flatShading:!0}),h=new Ge({color:15245312,roughness:.5,flatShading:!0}),u=new Ge({color:656384,roughness:.85,flatShading:!0,side:Be}),d=new Ge({color:15261904,roughness:.6,flatShading:!0}),f=new te(1,10,8);f.scale(.085,.06,.22);const g=new j(f,t);i.add(g);const x=new te(1,8,6);x.scale(.07,.055,.15);const m=new j(x,s);m.position.set(0,-.018,.03),i.add(m);const p=new se(.03,.008,.16),S=new j(p,t);S.position.set(0,.04,-.02),i.add(S);const b=new Ye(.028,.04,.05,6),w=new j(b,d);w.position.set(0,.025,.17),w.rotation.x=-.25,i.add(w);const M=new te(.032,6,5);M.scale(1,.7,1);const C=new j(M,r);C.position.set(0,.015,.16),i.add(C);const A=new te(.042,8,7);A.scale(1,.95,1.1);const D=new j(A,r);D.position.set(0,.045,.21),i.add(D);const v=new te(.025,6,5);v.scale(1.2,.5,1);const y=new j(v,r);y.position.set(0,.068,.21),i.add(y);const P=new se(.055,.01,.022),I=new j(P,new Ge({color:15394520,roughness:.7,flatShading:!0}));I.position.set(0,.062,.225),i.add(I);const F=new tn(.013,.05,5),B=new j(F,a);B.position.set(0,.04,.255),B.rotation.x=Math.PI*.42,i.add(B);const k=new te(.006,4,3);k.scale(.8,1.2,1);const H=new j(k,a);H.position.set(0,.028,.268),i.add(H);const z=new tn(.007,.025,4),$=new j(z,a);$.position.set(0,.03,.25),$.rotation.x=Math.PI*.52,i.add($);const ut=new te(.009,5,4),st=new j(ut,a);st.position.set(0,.048,.235),i.add(st);for(const bt of[-1,1]){const lt=new te(.013,6,5),Ot=new j(lt,new Ge({color:2760720,roughness:.9}));Ot.position.set(bt*.029,.052,.226),i.add(Ot);const Yt=new te(.01,6,5),Bt=new j(Yt,o);Bt.position.set(bt*.03,.053,.228),i.add(Bt);const Z=new te(.005,5,4),nt=new j(Z,l);nt.position.set(bt*.033,.053,.233),i.add(nt)}function rt(bt){const lt=bt?1:-1,Ot=new Pe;Ot.position.set(lt*.065,.015,.01);const Yt=new se(.12,.015,.1);Yt.translate(lt*.06,0,.01);const Bt=new j(Yt,e);Ot.add(Bt);const Z=new se(.32,.01,.17);Z.translate(lt*.28,-.002,0);const nt=new j(Z,e);Ot.add(nt);const K=new se(.3,.004,.13);K.translate(lt*.27,-.007,0);const it=new j(K,n);Ot.add(it);for(let T=0;T<3;T++){const _=new se(.25-T*.04,.004,.025);_.translate(lt*(.18+T*.04),0,0);const N=new j(_,t);N.position.set(0,.006+T*.002,-.04+T*.025),Ot.add(N)}const R=new Pe;R.position.set(lt*.44,0,0);const wt=new se(.42,.008,.11);wt.translate(lt*.21,0,0);const gt=new j(wt,e);R.add(gt);const Lt=new se(.4,.003,.09);Lt.translate(lt*.2,-.005,0);const ht=new j(Lt,n);R.add(ht);for(let T=0;T<5;T++){const _=.1-T*.015,N=new se(_,.004,.02);N.translate(lt*_/2,0,0);const X=new j(N,u);X.position.set(lt*.4,0,-.035+T*.022),X.rotation.y=lt*(T-2)*.05,R.add(X)}return Ot.add(R),{pivot:Ot,elbowPivot:R}}const kt=rt(!0),Nt=rt(!1);i.add(kt.pivot),i.add(Nt.pivot);const Kt=new Pe;Kt.position.set(0,.008,-.2);for(let bt=0;bt<9;bt++){const lt=(bt-4)*.065,Ot=new se(.028,.005,.14);Ot.translate(0,0,-.07);const Yt=new j(Ot,c);Yt.rotation.y=lt,Yt.position.x=Math.sin(lt)*.015,Kt.add(Yt)}const ie=new se(.08,.02,.07),q=new j(ie,t);q.position.set(0,.005,.02),Kt.add(q);const et=new se(.06,.012,.05),yt=new j(et,c);yt.position.set(0,-.008,.01),Kt.add(yt),i.add(Kt);for(const bt of[-1,1]){const lt=new Ye(.014,.01,.045,5),Ot=new j(lt,t);Ot.position.set(bt*.025,-.045,-.05),Ot.rotation.x=.5,i.add(Ot);const Yt=new Ye(.005,.006,.045,5),Bt=new j(Yt,h);Bt.position.set(bt*.025,-.078,-.06),i.add(Bt);for(let Z=0;Z<4;Z++){const nt=(Z-1.5)*.45,K=new Ye(.003,.001,.022,3),it=new j(K,Z<3?h:new Ge({color:1118481,roughness:.5}));it.position.set(bt*.025+Math.sin(nt)*.012,-.098,-.06+Math.cos(nt)*.01),it.rotation.x=.7,it.rotation.z=nt*.3,i.add(it)}}return i.rotation.y=Math.PI,i.userData={leftWing:kt.pivot,rightWing:Nt.pivot,leftElbow:kt.elbowPivot,rightElbow:Nt.elbowPivot,tailPivot:Kt,flapPhase:0},i}function Zx(i,t,e){if(!i||!i.userData||!i.userData.leftWing)return;const n=i.userData,s=n.leftWing,r=n.rightWing,a=n.leftElbow,o=n.rightElbow,l=n.tailPivot,c=e.isFlapping||!1,h=e.flapStrength||0,u=e.isGliding||!1,d=e.isBoosting||!1,f=e.isTurbo||!1,g=e.pitch||0,x=(m,p,S)=>m+(p-m)*Math.min(1,S);if(f)s.rotation.z=x(s.rotation.z,-.7,t*8),r.rotation.z=x(r.rotation.z,.7,t*8),a.rotation.z=x(a.rotation.z,-.3,t*6),o.rotation.z=x(o.rotation.z,.3,t*6),l&&(l.rotation.x=x(l.rotation.x,-.1,t*5));else if(d)s.rotation.z=x(s.rotation.z,-.6,t*7),r.rotation.z=x(r.rotation.z,.6,t*7),a.rotation.z=x(a.rotation.z,-.4,t*5),o.rotation.z=x(o.rotation.z,.4,t*5),l&&(l.rotation.x=x(l.rotation.x,.15,t*4));else if(c&&h>0){n.flapPhase+=t*8;const m=n.flapPhase%(Math.PI*2),p=Math.sin(m)*.55*h,S=Math.sin(m+.3)*.2*h;s.rotation.z=p,r.rotation.z=-p,a.rotation.z=S,o.rotation.z=-S,s.rotation.y=Math.cos(m)*.08*h,r.rotation.y=-Math.cos(m)*.08*h,l&&(l.rotation.x=Math.sin(m+1)*.05)}else if(u){const m=.08+Math.sin(performance.now()*5e-4)*.02;s.rotation.z=x(s.rotation.z,m,t*3),r.rotation.z=x(r.rotation.z,-m,t*3),a.rotation.z=x(a.rotation.z,.02,t*3),o.rotation.z=x(o.rotation.z,-.02,t*3),s.rotation.y=x(s.rotation.y,0,t*2),r.rotation.y=x(r.rotation.y,0,t*2),l&&(l.rotation.x=x(l.rotation.x,g*.003,t*3)),n.flapPhase=0}else s.rotation.z=x(s.rotation.z,.05,t*4),r.rotation.z=x(r.rotation.z,-.05,t*4),a.rotation.z=x(a.rotation.z,0,t*4),o.rotation.z=x(o.rotation.z,0,t*4),s.rotation.y=x(s.rotation.y,0,t*3),r.rotation.y=x(r.rotation.y,0,t*3)}function wi(i,t,e,n,s,r){const a=Cesium.Math.toRadians(n),o=Cesium.Math.toRadians(s),l=6371e3,c=r*Math.cos(a)*Math.cos(o)/l,h=r*Math.sin(a)*Math.cos(o)/(l*Math.cos(Cesium.Math.toRadians(t))),u=r*Math.sin(o);return{lon:i+Cesium.Math.toDegrees(h),lat:t+Cesium.Math.toDegrees(c),alt:e+u}}async function Qh(i,t){try{const n=await(await fetch(`https://nominatim.openstreetmap.org/reverse?format=json&lat=${t}&lon=${i}&zoom=5&addressdetails=1`)).json();if(n&&n.address){const s=n.address,r=s.state||s.region||s.province,a=s.country;if(r&&a)return`${r}, ${a}`.toUpperCase();if(a)return a.toUpperCase()}}catch(e){console.error("Reverse geocoding error:",e)}return null}function tu(i,t,e,n){const r=t*Math.PI/180,a=n*Math.PI/180,o=(n-t)*Math.PI/180,l=(e-i)*Math.PI/180,c=Math.sin(o/2)*Math.sin(o/2)+Math.cos(r)*Math.cos(a)*Math.sin(l/2)*Math.sin(l/2);return 6371e3*(2*Math.atan2(Math.sqrt(c),Math.sqrt(1-c)))}class $x{constructor(){this.speedElem=document.getElementById("speed"),this.altElem=document.getElementById("altitude"),this.timeElem=document.getElementById("time"),this.scoreElem=document.getElementById("score"),this.fpsElem=document.getElementById("fps"),this.localDateTimeElem=document.getElementById("local-datetime"),this.coordsElem=document.getElementById("coords"),this.minimapCanvas=document.getElementById("minimap"),this.miniCtx=this.minimapCanvas.getContext("2d"),this.pauseMinimapCanvas=document.getElementById("pauseMinimap"),this.pauseMinimapCanvas&&(this.pauseMiniCtx=this.pauseMinimapCanvas.getContext("2d")),this.pauseRegionElem=document.getElementById("pause-region"),this.pauseLatElem=document.getElementById("pause-lat"),this.pauseLonElem=document.getElementById("pause-lon"),this.pauseAltElem=document.getElementById("pause-alt"),this.pauseTimeElem=document.getElementById("pause-time"),this.uiContainer=document.getElementById("uiContainer"),this.compassTape=document.getElementById("compass-tape"),this.headingDisplay=document.getElementById("heading-display"),this.regionNotif=document.getElementById("region-notification"),this.regionNameElem=document.getElementById("region-name"),this.regionTimeout=null,this.pullUpElem=document.getElementById("pull-up-warning"),this.flightModeElem=document.getElementById("flight-mode-indicator"),this.thermalIndicator=document.getElementById("thermal-indicator"),this.wingSpreadBar=document.getElementById("wing-spread-bar"),this.liftValueElem=document.getElementById("lift-value"),this.vspeedValueElem=document.getElementById("vspeed-value"),this.weatherConditionElem=document.getElementById("weather-condition"),this.weatherWindElem=document.getElementById("weather-wind"),this.killNotifContainer=document.getElementById("kill-notification-container"),this.killTextElem=document.getElementById("kill-text"),this.killScoreElem=document.getElementById("kill-score"),this.killTimeout=null,this.weaponElems={gun:document.getElementById("weapon-gun"),missile:document.getElementById("weapon-missile"),flare:document.getElementById("weapon-flare")},this.weaponAmmoElems={gun:this.weaponElems.gun.querySelector(".weapon-ammo"),missile:this.weaponElems.missile.querySelector(".weapon-ammo"),flare:this.weaponElems.flare.querySelector(".weapon-ammo")},this.weaponProgressElems={gun:this.weaponElems.gun.querySelector(".weapon-progress"),missile:this.weaponElems.missile.querySelector(".weapon-progress"),flare:this.weaponElems.flare.querySelector(".weapon-progress")},this.vignette=document.getElementById("transition-vignette"),this.startTime=Date.now(),this.smoothedPitch=0,this.smoothedRoll=0,this.smoothedHeading=0,this.smoothedThrottle=0,this.smoothedYaw=0,this.smoothedBoostScale=1,this.currentShakeX=0,this.currentShakeY=0,this.minimapRange=1,this.showHorizonLines=!1,this.npcMarkers=new Map,this.npcContainer=document.createElement("div"),this.npcContainer.id="npc-markers-layer",this.npcContainer.style.cssText="position:absolute; top:0; left:0; width:100%; height:100%; pointer-events:none; z-index:15;",this.uiContainer.appendChild(this.npcContainer),this.createHorizon(),this.createMissileCrosshair(),this.createCompass(),this.resizeMinimap(),window.addEventListener("resize",()=>this.resizeMinimap())}createMissileCrosshair(){if(document.getElementById("missile-crosshair"))return;const t=document.createElement("div");t.id="missile-crosshair",t.style.cssText=`
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
		`;const n=document.createElement("div");n.style.cssText="position:absolute; left:50%; top:50%; transform:translate(-50%,-50%); width:10px; height:10px; border-radius:50%; background:#d4a017;";const s=(u,d,f,g,x)=>{const m=document.createElement("div");return m.style.cssText=`position:absolute; left:${u}; top:${d}; width:${f}; height:${g}; background:#d4a017; transform:${x};`,m},r=48,a=18,o=s("calc(50% - "+r+"px - "+a/2+"px)","50%","18px","2px","translateY(-50%)"),l=s("calc(50% + "+r+"px - "+a/2+"px)","50%","18px","2px","translateY(-50%)"),c=s("50%","calc(50% - "+r+"px - "+a/2+"px)","2px",a+"px","translateX(-50%)");t.appendChild(e),t.appendChild(n),t.appendChild(c),t.appendChild(o),t.appendChild(l);const h=document.getElementById("horizon-container");h?h.appendChild(t):this.uiContainer.appendChild(t),this.missileCrosshair=t}showMissileCrosshair(t){if(!this.missileCrosshair)return;const e=document.getElementById("normal-crosshair");t?(e&&(e.style.display="none"),this.missileCrosshair.style.display="block"):(this.missileCrosshair.style.display="none",e&&(e.style.display="flex"))}createCompass(){if(!this.compassTape)return;const t=5,e=4;this.compassTape.innerHTML="";for(let n=-360;n<=720;n+=t){const s=document.createElement("div");s.className="compass-tick";const r=n%10===0;if(s.style.left=`${(n+360)*e}px`,s.style.height=r?"10px":"5px",r){const a=document.createElement("div");a.className="compass-label",a.style.left=`${(n+360)*e}px`;let o=n%360;o<0&&(o+=360);let l=Math.round(o).toString().padStart(3,"0");Math.round(o)===0||Math.round(o)===360?l="N":Math.round(o)===90?l="E":Math.round(o)===180?l="S":Math.round(o)===270&&(l="W"),a.innerText=l,this.compassTape.appendChild(a)}this.compassTape.appendChild(s)}}resetTime(){this.startTime=Date.now()}setMinimapRange(t){this.minimapRange=t}setShowHorizonLines(t){this.showHorizonLines=t;const e=document.getElementById("pitch-lines");e&&(e.style.display=t?"block":"none")}showKillNotification(t,e){if(this.killTimeout&&clearTimeout(this.killTimeout),this.killNotifContainer){this.killNotifContainer.classList.remove("hidden"),this.killNotifContainer.classList.remove("kill-notification-exit");const n=`${t} CAUGHT!`,s="ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*()";let r=0;this.glitchInterval&&clearInterval(this.glitchInterval),this.glitchInterval=setInterval(()=>{if(this.killTextElem){const a=Math.floor(r),o=n.split("").map((c,h)=>h<a?n[h]:h===a?s[Math.floor(Math.random()*s.length)]:"").join(""),l=a<n.length?Math.random()>.5?"_":" ":"";this.killTextElem.innerText=o+l}r>=n.length&&(this.killTextElem&&(this.killTextElem.innerText=n),clearInterval(this.glitchInterval)),r+=1},40),this.killScoreElem&&(this.killScoreElem.innerText=`+${e}`),this.killNotifContainer.style.animation="none",this.killNotifContainer.offsetHeight,this.killNotifContainer.style.animation=null,this.killTimeout=setTimeout(()=>{this.killNotifContainer.classList.add("kill-notification-exit"),setTimeout(()=>{this.killNotifContainer.classList.add("hidden"),this.killNotifContainer.classList.remove("kill-notification-exit")},500),this.glitchInterval&&clearInterval(this.glitchInterval)},3e3)}}showRegion(t){this.regionTimeout&&clearTimeout(this.regionTimeout),this.regionNameElem.innerText=t,this.regionNotif.classList.remove("hidden"),this.regionNotif.classList.remove("region-exit"),this.regionTimeout=setTimeout(()=>{this.regionNotif.classList.add("region-exit"),this.regionTimeout=setTimeout(()=>{this.regionNotif.classList.add("hidden"),this.regionTimeout=null},1e3)},4e3)}updateEagleStatus(t){if(this.flightModeElem){let e="SOARING",n="";t.isTurbo||t.turboWindup>.1?(e=`TURBO ${Math.round(t.speed)} KTS`,n="turbo"):t.isBoosting?(e="DIVING",n="diving"):t.isFlapping?(e="FLAPPING",n="flapping"):t.isGliding?(e="GLIDING",n="gliding"):t.inThermal&&(e="RIDING THERMAL",n="thermal"),this.flightModeElem.textContent=e,this.flightModeElem.className=n}if(this.thermalIndicator)if(t.inThermal){this.thermalIndicator.classList.remove("hidden");const e=Math.round((t.thermalStrength||0)*100);this.thermalIndicator.textContent=`THERMAL ${e}%`}else this.thermalIndicator.classList.add("hidden");if(this.wingSpreadBar){const e=(t.wingSpread||1)*100;this.wingSpreadBar.style.width=`${e}%`}if(this.liftValueElem){const e=t.liftForce||0;this.liftValueElem.textContent=e.toFixed(1)}if(this.vspeedValueElem){const e=t.verticalSpeed||0,n=Math.round(e*196.85);this.vspeedValueElem.textContent=`${n>0?"+":""}${n}`,this.vspeedValueElem.className=n>10?"climbing":n<-10?"descending":""}}updateWeatherDisplay(t){if(t.weatherConditions){const e=t.weatherConditions;this.weatherConditionElem&&(this.weatherConditionElem.textContent=`${e.daypartName} | ${e.weatherName}`),this.weatherWindElem&&(this.weatherWindElem.textContent=`WIND ${e.windSpeed}kt ${e.windDirection}°`)}}setPullUpWarning(t){this.pullUpElem&&(t?this.pullUpElem.classList.remove("hidden"):this.pullUpElem.classList.add("hidden"))}resizeMinimap(){requestAnimationFrame(()=>{this.minimapCanvas.width=this.minimapCanvas.offsetWidth,this.minimapCanvas.height=this.minimapCanvas.offsetHeight,this.pauseMinimapCanvas&&(this.pauseMinimapCanvas.width=this.pauseMinimapCanvas.offsetWidth,this.pauseMinimapCanvas.height=this.pauseMinimapCanvas.offsetHeight);const t=Wx();t&&t.resize();const e=Xx();e&&e.resize()})}createHorizon(){if(!document.getElementById("horizon-container")){const t=document.getElementById("uiContainer"),e=document.createElement("div");e.id="horizon-container",e.style.cssText=`
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
				`,h.innerText=c,l.appendChild(h)}e.appendChild(l),t.appendChild(e),this.setShowHorizonLines(this.showHorizonLines)}}updatePauseMenu(t,e,n=[]){if(this.pauseRegionElem&&(this.pauseRegionElem.innerText=e||"UNKNOWN REGION"),this.pauseLatElem){const g=t.lat>=0?"N":"S";this.pauseLatElem.innerText=`${Math.abs(t.lat).toFixed(4)}°${g}`}if(this.pauseLonElem){const g=t.lon>=0?"E":"W";this.pauseLonElem.innerText=`${Math.abs(t.lon).toFixed(4)}°${g}`}if(this.pauseAltElem){const g=Math.max(0,Math.round(t.alt*3.28084));this.pauseAltElem.innerText=`${g.toLocaleString()} FT`}if(this.pauseTimeElem){const g=new Date,x=g.getTime()+g.getTimezoneOffset()*6e4,m=Math.round((t.lon||0)/15),p=new Date(x+36e5*m),S=p.getFullYear(),b=(p.getMonth()+1).toString().padStart(2,"0"),w=p.getDate().toString().padStart(2,"0"),M=p.getHours().toString().padStart(2,"0"),C=p.getMinutes().toString().padStart(2,"0"),A=p.getSeconds().toString().padStart(2,"0");this.pauseTimeElem.innerText=`${S}-${b}-${w}T${M}:${C}:${A}Z`}const s=this.minimapRange*1e4;if(Vx(t.lon,t.lat,s,0),!this.pauseMiniCtx||!this.pauseMinimapCanvas)return;const r=this.pauseMiniCtx,a=this.pauseMinimapCanvas.width,o=this.pauseMinimapCanvas.height,l=a/2,c=o/2;r.clearRect(0,0,a,o),r.strokeStyle="rgba(212, 160, 23, 0.2)",r.lineWidth=1;const h=50;r.beginPath();for(let g=l;g<=a;g+=h)r.moveTo(g,0),r.lineTo(g,o);for(let g=l-h;g>=0;g-=h)r.moveTo(g,0),r.lineTo(g,o);for(let g=c;g<=o;g+=h)r.moveTo(0,g),r.lineTo(a,g);for(let g=c-h;g>=0;g-=h)r.moveTo(0,g),r.lineTo(a,g);r.stroke(),r.strokeStyle="#d4a017",r.lineWidth=2;const u=15;r.beginPath(),r.moveTo(l-u,c),r.lineTo(l+u,c),r.moveTo(l,c-u),r.lineTo(l,c+u),r.stroke(),r.fillStyle="#d4a017",r.font="12px AceCombat",r.fillText("SHADOW",l+20,c+5);const d=s*1.1547,f=o/d;n.forEach(g=>{const x=(g.lon-t.lon)*111320*Math.cos(t.lat*Math.PI/180),m=(g.lat-t.lat)*111320,p=l+x*f,S=c-m*f;p<0||p>a||S<0||S>o||(r.strokeStyle="#fff",r.lineWidth=2,r.save(),r.translate(p,S),r.rotate(45*Math.PI/180),r.beginPath(),r.rect(-5,-5,10,10),r.stroke(),r.restore(),r.fillStyle="#fff",r.font="10px AceCombat",r.fillText(g.name||"PREY",p+10,S+5))})}update(t,e=[]){const s=(I,F,B)=>{let k=F-I;for(;k<-180;)k+=360;for(;k>180;)k-=360;return I+k*B},r=(I,F)=>{let B=I-F;for(;B<-180;)B+=360;for(;B>180;)B-=360;return B},a=I=>{for(;I<=-180;)I+=360;for(;I>180;)I-=360;return I};this.smoothedPitch=s(this.smoothedPitch,t.pitch,.5),this.smoothedRoll=s(this.smoothedRoll,t.roll,.5),this.smoothedHeading=s(this.smoothedHeading,t.heading||0,.5),this.smoothedThrottle=this.smoothedThrottle+((t.throttle||0)-this.smoothedThrottle)*(.5*.4),this.smoothedYaw=this.smoothedYaw+((t.yaw||0)-this.smoothedYaw)*.5,this.smoothedPitch=a(this.smoothedPitch),this.smoothedRoll=a(this.smoothedRoll),this.smoothedHeading=a(this.smoothedHeading);const o=this.minimapRange*1500,l=this.minimapRange*2;let c=o+t.speed*l;t.isBoosting&&(c*=1.2),t.isTurbo&&(c*=3),this.currentZoom=c,Hx(t.lon,t.lat,c,this.smoothedHeading);const h=t.isBoosting||!1,u=t.isTurbo||!1;this.vignette&&(this.vignette.style.opacity=h||u?"1":"0");const d=r(t.pitch,this.smoothedPitch),f=r(t.roll,this.smoothedRoll),g=(t.yaw||0)-this.smoothedYaw,x=(t.throttle||0)-this.smoothedThrottle;if(this.uiContainer){const F=Math.max(-15,Math.min(15,d*.8)),B=Math.max(-15,Math.min(15,-f*.3+g*5)),k=50,H=Math.max(-k,Math.min(k,-f*1.5-g*20)),z=Math.max(-k,Math.min(k,d*3+x*15)),$=u?1.04:h?1.02:1;this.smoothedBoostScale=this.smoothedBoostScale+($-this.smoothedBoostScale)*.1;const ut=(1+x*.25)*this.smoothedBoostScale;if(u){const st=Date.now()*.06;this.currentShakeX=Math.sin(st*2)*3+Math.cos(st*3.1)*2,this.currentShakeY=Math.cos(st*2.3)*3+Math.sin(st*3.5)*2}else if(h){const st=Date.now()*.05;this.currentShakeX=Math.sin(st*1.5)*2+Math.cos(st*2.1)*1.5,this.currentShakeY=Math.cos(st*1.7)*2+Math.sin(st*2.3)*1.5}else this.currentShakeX*=.85,this.currentShakeY*=.85;this.uiContainer.style.transform=`perspective(1000px) rotateX(${F}deg) rotateY(${B}deg) translate(${H+this.currentShakeX}px, ${z+this.currentShakeY}px) scale(${ut})`}this.speedElem.innerText=Math.round(t.speed).toString().padStart(3,"0"),this.updateEagleStatus(t),this.updateWeatherDisplay(t),t.weaponSystem&&this.updateWeapons(t.weaponSystem);let m=this.smoothedHeading;for(;m<0;)m+=360;for(;m>=360;)m-=360;if(this.headingDisplay){let I=Math.round(m);I===360&&(I=0);let F="";I>=337.5||I<22.5?F="N":I>=22.5&&I<67.5?F="NE":I>=67.5&&I<112.5?F="E":I>=112.5&&I<157.5?F="SE":I>=157.5&&I<202.5?F="S":I>=202.5&&I<247.5?F="SW":I>=247.5&&I<292.5?F="W":I>=292.5&&I<337.5&&(F="NW"),this.headingDisplay.innerText=`${I.toString().padStart(3,"0")} ${F}`}if(this.compassTape){const k=160-(m+360)*4;this.compassTape.style.transform=`translateX(${k}px)`}const p=Math.max(0,Math.round(t.alt*3.28084));this.altElem.innerText=p.toString().padStart(5,"0"),this.scoreElem&&(this.scoreElem.innerText=(t.score||0).toString().padStart(6,"0"));const S=Date.now()-this.startTime,b=Math.floor(S/6e4),w=Math.floor(S%6e4/1e3),M=Math.floor(S%1e3/10);this.timeElem.innerText=`${b.toString().padStart(2,"0")}:${w.toString().padStart(2,"0")}:${M.toString().padStart(2,"0")}`;const C=new Date,A=C.getTime()+C.getTimezoneOffset()*6e4,D=Math.round((t.lon||0)/15),v=new Date(A+36e5*D);if(this.localDateTimeElem){const I=v.getFullYear(),F=(v.getMonth()+1).toString().padStart(2,"0"),B=v.getDate().toString().padStart(2,"0"),k=v.getHours().toString().padStart(2,"0"),H=v.getMinutes().toString().padStart(2,"0"),z=v.getSeconds().toString().padStart(2,"0");this.localDateTimeElem.innerText=`${I}-${F}-${B}T${k}:${H}:${z}Z`}if(this.coordsElem){const I=t.lat>=0?"N":"S",F=t.lon>=0?"E":"W";this.coordsElem.innerText=`POS: ${Math.abs(t.lat).toFixed(4)}°${I} ${Math.abs(t.lon).toFixed(4)}°${F}`}const y=document.getElementById("pitch-lines"),P=document.getElementById("horizon-container");y&&P&&(P.style.transform=`translate(-50%, -50%) rotate(${-this.smoothedRoll}deg)`,y.style.transform=`translateY(${this.smoothedPitch*6}px)`),this.drawMinimap(t,e),this.updateNPCMarkers(e,t)}drawMinimap(t,e=[]){if(!this.miniCtx||!this.minimapCanvas)return;const n=this.miniCtx,s=this.minimapCanvas.width||250,r=this.minimapCanvas.height||250,a=s/2,o=r/2,l=Math.min(a,o)-10;n.clearRect(0,0,s,r),n.save(),n.translate(a,o);const c=this.smoothedHeading;n.rotate(-c*Math.PI/180),n.strokeStyle="rgba(212, 160, 23, 0.35)",n.lineWidth=1;const h=this.minimapRange*1e3,u=(this.currentZoom||this.minimapRange*1500)*1.1547,d=h*r/u,f=r/u,g=Math.min(1e4*f,l),x=l*2;for(let A=0;A<=x;A+=d)n.beginPath(),n.moveTo(A,-x),n.lineTo(A,x),n.stroke(),A>0&&(n.beginPath(),n.moveTo(-A,-x),n.lineTo(-A,x),n.stroke());for(let A=0;A<=x;A+=d)n.beginPath(),n.moveTo(-x,A),n.lineTo(x,A),n.stroke(),A>0&&(n.beginPath(),n.moveTo(-x,-A),n.lineTo(x,-A),n.stroke());e.forEach(A=>{if(tu(t.lon,t.lat,A.lon,A.lat)>this.minimapRange*5e3)return;const v=(A.lon-t.lon)*111320*Math.cos(t.lat*Math.PI/180),y=(A.lat-t.lat)*111320,P=v*f,I=-y*f;Math.sqrt(P*P+I*I)>l-5||(n.save(),n.translate(P,I),n.rotate(A.heading*Math.PI/180),n.fillStyle="#fff",n.shadowBlur=0,n.beginPath(),n.moveTo(0,-8),n.lineTo(6,6),n.lineTo(0,3),n.lineTo(-6,6),n.closePath(),n.fill(),n.restore())}),n.restore();const m=12,p=a-m,S=o-m;n.strokeStyle="rgba(212, 160, 23, 0.7)",n.lineWidth=1.2,n.beginPath(),n.moveTo(0,o),n.lineTo(s,o),n.moveTo(a,0),n.lineTo(a,r);const b=we();let w=Math.PI/4;if(b&&b.camera&&b.camera.frustum){const A=b.camera.frustum.fovy,D=window.innerWidth/window.innerHeight;w=Math.atan(Math.tan(A/2)*D)}const M=s+r;n.moveTo(a,o),n.lineTo(a-Math.sin(w)*M,o-Math.cos(w)*M),n.moveTo(a,o),n.lineTo(a+Math.sin(w)*M,o-Math.cos(w)*M),n.stroke(),n.fillStyle="#d4a017",n.font=`bold 16px ${getComputedStyle(document.body).fontFamily}`,n.shadowColor="rgba(0, 0, 0, 0.5)",n.shadowBlur=4,n.textAlign="center",n.textBaseline="middle",[{label:"N",angle:0},{label:"E",angle:90},{label:"S",angle:180},{label:"W",angle:270}].forEach(A=>{const D=(A.angle-c)*Math.PI/180,v=Math.sin(D),y=Math.cos(D),P=Math.abs(v),I=Math.abs(y);let F,B;p*I>S*P?(B=y>0?-S:S,F=B*v/-y):(F=v>0?p:-p,B=F*-y/v),n.fillText(A.label,a+F,o+B)}),n.save(),n.translate(a,o),n.fillStyle="#d4a017",n.shadowBlur=0,n.beginPath(),n.moveTo(0,-12),n.lineTo(8,10),n.lineTo(0,5),n.lineTo(-8,10),n.closePath(),n.fill(),n.strokeStyle="rgba(212, 160, 23, 0.7)",n.lineWidth=1.2,n.beginPath(),n.arc(0,0,g,0,Math.PI*2),n.stroke(),n.restore();const C=Date.now()/1500%1;n.strokeStyle=`rgba(212, 160, 23, ${.7*(1-C)})`,n.lineWidth=1.2,n.beginPath(),n.arc(a,o,C*g,0,Math.PI*2),n.stroke()}updateNPCMarkers(t,e){const n=we();if(!n)return;const s=new Set;if(t&&t.length>0){this.npcContainer.style.display="block";const r=n.scene,a=r.camera,o=2e5,l=new Cesium.Cartesian3,c=new Cesium.Cartesian3;t.forEach(h=>{Cesium.Cartesian3.fromDegrees(h.lon,h.lat,h.alt,void 0,l),Cesium.Cartesian3.fromDegrees(e.lon,e.lat,e.alt,void 0,c);const u=Cesium.Cartesian3.distance(l,c);if(u>o)return;const d=h.id||h.name;s.add(d);let f=this.npcMarkers.get(d);f||(f=this.createNPCMarker(h),this.npcMarkers.set(d,f));const g=Cesium.SceneTransforms.worldToWindowCoordinates||Cesium.SceneTransforms.wgs84ToWindowCoordinates,x=g?g(r,l):null,m=Cesium.Cartesian3.subtract(l,a.position,new Cesium.Cartesian3),p=Cesium.Cartesian3.dot(m,a.direction);if(!x||p<=0||x.x<0||x.x>window.innerWidth||x.y<0||x.y>window.innerHeight){const b=Cesium.Cartesian3.dot(m,a.right),w=-Cesium.Cartesian3.dot(m,a.up);this.updateOffScreenMarker(f,b,w,h,u)}else this.updateOnScreenMarker(f,x,h,u,e)})}else this.npcContainer.style.display="none";for(const[r,a]of this.npcMarkers)s.has(r)||(a.container.remove(),this.npcMarkers.delete(r))}createNPCMarker(t){const e=document.createElement("div");e.className="npc-marker-container";const n=document.createElement("div");n.className="npc-visual-wrapper";const s=document.createElement("div");s.className="npc-diamond";const r=document.createElement("div");r.className="npc-lock-box",r.style.display="none";const a=document.createElement("div");a.className="npc-label";const o=document.createElement("div");o.className="npc-offscreen-dot",o.style.display="none";const l=document.createElement("div");return l.className="npc-offscreen-name",l.style.display="none",n.appendChild(s),n.appendChild(r),e.appendChild(n),e.appendChild(a),e.appendChild(o),e.appendChild(l),this.npcContainer.appendChild(e),{container:e,diamond:s,label:a,dot:o,offscreenName:l,lockBox:r}}updateOnScreenMarker(t,e,n,s,r){t.container.style.display="flex",t.container.style.transform=`translate3d(${e.x}px, ${e.y}px, 0) translate(-50%, -50%)`,t.diamond.style.display="block",t.label.style.display="block",t.dot.style.display="none",t.offscreenName.style.display="none";const a=r.weaponSystem;a&&a.lockingTarget===n?(t.lockBox.style.display="block",a.lockStatus==="LOCKED"?(t.lockBox.classList.remove("locking-blink"),t.lockBox.style.borderColor="#d4a017",t.lockBox.innerHTML='<span style="position:absolute; top:-20px; left:50%; transform:translateX(-50%); font-weight:bold; color:#d4a017; font-size:12px; text-shadow: 0 0 8px rgba(212, 160, 23, 0.8);">TARGET</span>'):a.lockStatus==="LOCKING"&&(t.lockBox.classList.add("locking-blink"),t.lockBox.style.borderColor="#d4a017",t.lockBox.innerHTML="")):(t.lockBox.style.display="none",t.lockBox.innerHTML="");const o=(s/1e3).toFixed(1),l=`${n.name}
${o} KM`;t.label.innerText!==l&&(t.label.innerText=l)}updateOffScreenMarker(t,e,n,s,r){t.container.style.display="flex",t.diamond.style.display="none",t.label.style.display="none",t.dot.style.display="block",t.offscreenName.style.display="block";const a=window.innerWidth/2,o=window.innerHeight/2;Math.abs(e)<1e-4&&Math.abs(n)<1e-4&&(n=-1);const l=Math.atan2(n,e),c=40,h=a-c,u=o-c,d=Math.cos(l),f=Math.sin(l);let g,x;Math.abs(h*f)>Math.abs(u*d)?(x=u*Math.sign(f),g=x*d/f):(g=h*Math.sign(d),x=g*f/d);const m=a+g,p=o+x;t.container.style.transform=`translate3d(${m}px, ${p}px, 0) translate(-50%, -50%)`,t.offscreenName.innerText!==s.name&&(t.offscreenName.innerText=s.name),t.lockBox&&(t.lockBox.style.display="none",t.lockBox.innerHTML="")}updateFPS(t){this.fpsElem&&(this.fpsElem.innerText=Math.round(t).toString())}updateWeapons(t){const e=t.getCurrentWeapon(),n=performance.now()*.001,s=!!e&&(e.id==="missile"||e.id==="aim-9"||e.name&&e.name.toLowerCase().includes("aim-9"));this.showMissileCrosshair(s),["gun","missile","flare"].forEach(r=>{const a=this.weaponElems[r],o=this.weaponAmmoElems[r],l=this.weaponProgressElems[r],h=(r==="flare"?t.flareWeapon:t.weapons.find(u=>u.id===r&&(r!=="missile"||u===e)))||(r==="flare"?t.flareWeapon:t.weapons.find(u=>u.id===r));if(a){const u=t.emptyWarningTimers&&t.emptyWarningTimers[r]>0,d=e&&e.id===r||r==="flare"&&n-t.flareWeapon.lastFire<1||u,f=r==="gun"&&t.isGunOverheated;if(d?a.classList.add("active"):a.classList.remove("active"),f||u?a.classList.add("overheated"):a.classList.remove("overheated"),d&&r==="missile"&&h){const g=a.querySelector(".weapon-name");g&&(g.innerText=h.name)}}if(l&&h){let u=0;if(r==="gun")u=t.gunHeat*100;else{const d=n-h.lastFire,f=r==="flare"?1:h.fireRate;d<f?u=d/f*100:u=0}l.style.width=`${u}%`}o&&h&&(r==="gun"&&t.isGunOverheated?o.innerText="OVERHEAT":h.ammo===1/0?o.innerText="INF":o.innerText=h.ammo.toString().padStart(2,"0"))})}}const ii={scene:null,viewer:null,list:[],_scratchMatrix:new Cesium.Matrix4,_scratchCameraMatrix:new Cesium.Matrix4,_scratchThreeMatrix:new ee,init(i,t){this.scene=i,this.viewer=t},spawnExplosion(i,t,e,n={}){const s=!!n.big,r=n.count||(s?64:36),a=s?6:3,o=new te(a,12,10),l=new ke({color:16777215,blending:wn,transparent:!0,opacity:1}),c=new j(o,l);c.life=.18+Math.random()*.12,c.maxLife=c.life,c.lon=i,c.lat=t,c.alt=e,c.isSmoke=!1,c._expand=!0,c._expandAmount=s?5:3,c.matrixAutoUpdate=!1,this.scene.add(c),this.list.push(c);for(let d=0;d<r;d++){const f=(s?.6:.35)+Math.random()*(s?2.4:.9),g=new te(f,8,6),x=new zt().setHSL(.08-Math.random()*.05,1,.5+Math.random()*.2),m=new ke({color:x,blending:wn,transparent:!0,opacity:1}),p=new j(g,m);p.life=(s?.9:.6)+Math.random()*(s?1.4:.8),p.maxLife=p.life,p.lon=i,p.lat=t,p.alt=e;const S=Math.random()*Math.PI*2,b=(Math.random()*120-60)*(Math.PI/180),w=(s?18:10)+Math.random()*(s?60:36);p._localVel={east:Math.sin(S)*Math.cos(b)*w,north:Math.cos(S)*Math.cos(b)*w,up:Math.sin(b)*w},p.isSmoke=!1,p._expand=!0,p._expandAmount=s?2.8:1.8,p.matrixAutoUpdate=!1,this.scene.add(p),this.list.push(p)}const h=s?32:18;for(let d=0;d<h;d++){const f=new te(.06+Math.random()*.14,6,6),g=new ke({color:16777164,blending:wn,transparent:!0}),x=new j(f,g);x.life=.18+Math.random()*.36,x.maxLife=x.life,x.lon=i,x.lat=t,x.alt=e;const m=Math.random()*Math.PI*2,p=(Math.random()*120-60)*(Math.PI/180),S=(s?36:18)+Math.random()*(s?120:60);x._localVel={east:Math.sin(m)*Math.cos(p)*S,north:Math.cos(m)*Math.cos(p)*S,up:Math.sin(p)*S},x.isSmoke=!1,x._expand=!0,x._expandAmount=.6,x.matrixAutoUpdate=!1,this.scene.add(x),this.list.push(x)}const u=typeof n.smokeCount<"u"?n.smokeCount:s?8:5;for(let d=0;d<u;d++){const f=(s?3:1.8)+Math.random()*(s?4:1.6),g=new te(f,12,10),x=.08+Math.random()*.3,m=new ke({color:new zt(x,x,x),transparent:!0,opacity:.75}),p=new j(g,m);p.life=(s?1:.6)+Math.random()*(s?1.2:.6),p.maxLife=p.life,p.lon=i+(Math.random()-.5)*18e-5,p.lat=t+(Math.random()-.5)*18e-5,p.alt=e-.6+(Math.random()-.5)*.8,p._localVel={east:(Math.random()-.5)*2.2,north:(Math.random()-.5)*2.2,up:.6+Math.random()*2.6},p.isSmoke=!0,p.matrixAutoUpdate=!1,this.scene.add(p),this.list.push(p)}try{this.viewer&&this.viewer.scene&&this.viewer.scene.requestRender()}catch{}},spawnWreckage(i,t,e,n=0,s=0,r={}){const a=r.count||30,o=Cesium.Math.toRadians(n),l=Cesium.Math.toRadians(s),c={east:Math.sin(o)*Math.cos(l),north:Math.cos(o)*Math.cos(l),up:Math.sin(l)};for(let h=0;h<a;h++){const u=Math.random();let d;const f=.4+Math.random()*2.4;if(u<.6){const b=[],w=3+Math.floor(Math.random()*3),M=f;for(let v=0;v<w;v++){const y=v/w*Math.PI*2+(Math.random()-.5)*.6,P=M*(.35+Math.random()*1.1);b.push(new dt(Math.cos(y)*P,Math.sin(y)*P))}const C=new Il(b),A=Math.max(.03,f*.12),D={depth:A,bevelEnabled:!1};d=new fa(C,D),d.translate(0,0,-A*.5)}else d=new tn(f*.6,f,3),d.rotateX(Math.PI/2);const g=0+Math.random()*.06,x=new Rf({color:new zt(g,g,g),flatShading:!0,side:Be}),m=new j(d,x);m.rotation.set(Math.random()*Math.PI,Math.random()*Math.PI,Math.random()*Math.PI),m.scale.set(1+Math.random()*1.5,1+Math.random()*1.5,1+Math.random()*1.5),m._rotEuler=new Fe(Math.random()*Math.PI,Math.random()*Math.PI,Math.random()*Math.PI),m._rotVel=new L((Math.random()-.5)*6,(Math.random()-.5)*6,(Math.random()-.5)*6),m.life=4+Math.random()*8,m.maxLife=m.life,m.lon=i+(Math.random()-.5)*1e-4,m.lat=t+(Math.random()-.5)*1e-4,m.alt=e+(Math.random()-.5)*1;const p=1.2,S=10+Math.random()*60;m._localVel={east:(c.east+(Math.random()-.5)*p)*S,north:(c.north+(Math.random()-.5)*p)*S,up:(c.up+(Math.random()-.5)*p*.8)*S},m._localVel.up-=4+Math.random()*6,m._fallGravityMultiplier=r.fallMultiplier||2.2,m.isSmoke=!1,m.matrixAutoUpdate=!1,this.scene.add(m),this.list.push(m)}},spawnSpark(i,t,e,n={}){const s=n.count||12;for(let r=0;r<s;r++){const a=new te(.08+Math.random()*.12,6,6),o=new ke({color:16777130,transparent:!0}),l=new j(a,o);l.life=.18+Math.random()*.36,l.maxLife=l.life,l.lon=i,l.lat=t,l.alt=e;const c=Math.random()*Math.PI*2,h=(Math.random()*120-60)*(Math.PI/180),u=18+Math.random()*40;l._localVel={east:Math.sin(c)*Math.cos(h)*u,north:Math.cos(c)*Math.cos(h)*u,up:Math.sin(h)*u},l.isSmoke=!1,l.matrixAutoUpdate=!1,this.scene.add(l),this.list.push(l)}},update(i){if(!this.viewer)return;const t=this.viewer.camera.viewMatrix;for(let e=this.list.length-1;e>=0;e--){const n=this.list[e];if(n.life-=i*(n.isSmoke?1.1:1),n.life<=0){this.scene.remove(n),this.list.splice(e,1);continue}const s=n.isSmoke?.2:n._fallGravityMultiplier||1;n._localVel.up-=9.81*i*s,n._rotEuler&&n._rotVel&&(n._rotEuler.x+=n._rotVel.x*i,n._rotEuler.y+=n._rotVel.y*i,n._rotEuler.z+=n._rotVel.z*i);const r=Cesium.Math.toRadians(n.lat),a=n._localVel.east*i/(111320*Math.cos(r)),o=n._localVel.north*i/111320,l=n._localVel.up*i;n.lon+=a,n.lat+=o,n.alt+=l;const c=n.life/n.maxLife;if(n.material&&n.material.opacity!==void 0&&(n.isSmoke?n.material.opacity=Math.max(0,c*.85):n.material.opacity=Math.max(0,c)),n._expand){const f=1+(1-c)*(n._expandAmount||1);n.scale||(n.scale=new L(1,1,1)),n.scale.set(f,f,f)}if(n.isSmoke){const f=1+(1-c)*2;n.scale.set(f,f,f)}const h=Cesium.Cartesian3.fromDegrees(n.lon,n.lat,n.alt,void 0,new Cesium.Cartesian3),u=Cesium.Transforms.eastNorthUpToFixedFrame(h,void 0,this._scratchMatrix),d=Cesium.Matrix4.multiply(t,u,this._scratchCameraMatrix);for(let f=0;f<16;f++)this._scratchThreeMatrix.elements[f]=d[f];if(n.matrix.copy(this._scratchThreeMatrix),n._rotEuler){const f=new ee,g=new qe().setFromEuler(n._rotEuler),x=n.scale?n.scale.clone():new L(1,1,1);f.compose(new L(0,0,0),g,x),n.matrix.multiply(f)}else n.scale&&(n.scale.x!==1||n.scale.y!==1||n.scale.z!==1)&&n.matrix.scale(n.scale);n.updateMatrixWorld(!0)}}};class Kx{constructor(){this.listener=new Vf,this.sounds=new Map,this.loader=new zf,this._voicePool=[],this._activeOneShots=new Set,this._lastRandom={}}init(t){t.add(this.listener)}async loadSound(t,e,n=!1,s=.5){return new Promise((r,a)=>{this.loader.load(e,o=>{const l=new Rc(this.listener);l.setBuffer(o),l.setLoop(n),l.setVolume(s),l._baseVolume=s,l._isLooping=n,this.sounds.set(t,l),r(l)},void 0,a)})}_getVoice(){return this._voicePool.pop()||new Rc(this.listener)}_releaseVoice(t){t.isPlaying&&t.stop(),this._activeOneShots.delete(t),this._voicePool.push(t)}play(t,e=0){const n=t;if(t.endsWith("-random")){const o=t.replace("-random","-"),l=Array.from(this.sounds.keys()).filter(c=>c.startsWith(o));if(l.length>0){const c=this._lastRandom[t]??-1;let h=Math.floor(Math.random()*l.length);l.length>1&&h===c&&(h=(h+1)%l.length),this._lastRandom[t]=h,t=l[h]}}const s=this.sounds.get(t);if(!s)return;const{context:r}=s;r.state==="suspended"&&r.resume();const a=s._baseVolume??.5;if(!s._isLooping){const o=this._getVoice();o.setBuffer(s.buffer),o.setVolume(a),o.play(),o._parentName=n||t,this._activeOneShots.add(o),o.source.onended=()=>{o._isPaused||this._releaseVoice(o)};return}if(!s.isPlaying)if(s.play(),e>0){s.setVolume(0);const o=r.currentTime;s.gain.gain.cancelScheduledValues(o),s.gain.gain.setValueAtTime(0,o),s.gain.gain.linearRampToValueAtTime(a,o+e)}else s.setVolume(a)}stop(t,e=0){const n=this.sounds.get(t);if(n){if(n.isPlaying)if(e>0){const s=n.context.currentTime;n.gain.gain.cancelScheduledValues(s),n.gain.gain.linearRampToValueAtTime(0,s+e),setTimeout(()=>{n.isPlaying&&(n.stop(),n.setVolume(n._baseVolume??.5))},e*1e3+50)}else n.stop();this._activeOneShots.forEach(s=>{s._parentName===t&&(s.source.onended=null,this._releaseVoice(s))})}}setVolume(t,e){const n=this.sounds.get(t);n&&n.gain.gain.setValueAtTime(e,n.context.currentTime)}isPlaying(t){const e=this.sounds.get(t);if(!e)return!1;if(e.isPlaying)return!0;for(const n of this._activeOneShots)if(n._parentName===t&&(n.isPlaying||n._isPaused))return!0;return!1}pauseAll(){this.sounds.forEach(t=>{t.isPlaying&&(t.pause(),t._wasPlaying=!0)}),this._activeOneShots.forEach(t=>{t.isPlaying&&(t.pause(),t._isPaused=!0)})}resumeAll(){this.sounds.forEach(t=>{t._wasPlaying&&(t.play(),t._wasPlaying=!1)}),this._activeOneShots.forEach(t=>{t._isPaused&&(t.play(),t._isPaused=!1)})}stopAll(t=0){this.sounds.forEach((e,n)=>this.stop(n,t))}}const Ct=new Kx;class Jx{constructor(t,e,n,s,r,a,o=null,l=null){this.scene=t,this.viewer=e,this.target=o,this.onKill=l,this.lon=n.lon,this.lat=n.lat,this.alt=n.alt,this.heading=s,this.pitch=r,this.roll=0,this.speed=a+800,this.maxLife=10,this.life=this.maxLife,this.active=!0,this._scratchMatrix=new Cesium.Matrix4,this._scratchHPR=new Cesium.HeadingPitchRoll,this._scratchCartesian=new Cesium.Cartesian3,this._scratchThreeMatrix=new ee,this._scratchCameraMatrix=new Cesium.Matrix4,this.trail=[],this.distanceSinceLastTrail=0,this.initMesh()}initMesh(){this.mesh=new Pe;const t=2.6,e=.07,n=new Ye(e,e,t,16),s=new Ge({color:13421772,metalness:.4,roughness:.5}),r=new j(n,s);this.mesh.add(r);const a=.35,o=new tn(e,a,16);o.translate(0,t/2+a/2,0);const l=new Ge({color:3355443,metalness:.8,roughness:.3}),c=new j(o,l);this.mesh.add(c);const h=new Ye(e+.001,e+.001,.15,16);h.translate(0,t/2-.4,0);const u=new ke({color:16763904}),d=new j(h,u);this.mesh.add(d);const f=new Ge({color:4473924,metalness:.3,roughness:.6}),g=new Il;g.moveTo(0,0),g.lineTo(.4,-.2),g.lineTo(.4,-.5),g.lineTo(0,-.5),g.lineTo(0,0);const x=new fa(g,{depth:.02,bevelEnabled:!1});x.center(),x.translate(.2,-.25,0);const m=new se(.35,.4,.02);m.translate(e+.175,0,0);for(let P=0;P<4;P++){const I=new Pe,F=new j(m,f);I.add(F),I.position.y=-t/2+.3,I.rotation.y=P*(Math.PI/2),this.mesh.add(I)}const p=new se(.2,.15,.015);p.translate(e+.1,0,0);for(let P=0;P<4;P++){const I=new Pe,F=new j(p,f);I.add(F),I.position.y=t/2-.6,I.rotation.y=P*(Math.PI/2),this.mesh.add(I)}const S=new zt(1,.6,.2),b=new tn(e*.9,1,16,1,!0);b.rotateX(Math.PI),b.translate(0,-.5,0);const w=new ke({color:S,transparent:!0,opacity:.8,side:Be,depthWrite:!1,blending:wn});this.flameMesh=new j(b,w),this.flameMesh.position.y=-t/2,this.mesh.add(this.flameMesh);const M=new tn(e*.5,.6,16,1,!0);M.rotateX(Math.PI),M.translate(0,-.3,0);const C=new ke({color:16777215,transparent:!0,opacity:.9,side:Be,depthWrite:!1,blending:wn});this.flameCore=new j(M,C),this.flameMesh.add(this.flameCore);const A=128,D=typeof document<"u"?document.createElement("canvas"):null;let v=null;if(D){D.width=D.height=A;const P=D.getContext("2d"),I=A/2,F=A/2,B=P.createRadialGradient(I,F,0,I,F,I);B.addColorStop(0,"rgba(255,255,255,1)"),B.addColorStop(.18,"rgba(255,245,200,1)"),B.addColorStop(.38,"rgba(255,160,30,0.95)"),B.addColorStop(.62,"rgba(220,60,10,0.6)"),B.addColorStop(1,"rgba(0,0,0,0)"),P.fillStyle=B,P.fillRect(0,0,A,A),v=new Fh(D),v.minFilter=ze,v.magFilter=ze}const y=new ea({map:v,color:new zt(1,.95,.9),transparent:!0,opacity:.98,blending:wn,depthTest:!1,depthWrite:!1});this.flameGlow=new tl(y),this.flameGlow.scale.set(2.2,2.2,1),this.flameGlow.position.y=-t/2-.08,this.mesh.add(this.flameGlow),this.mesh.layers.enable(0),this.mesh.layers.enable(1),this.mesh.matrixAutoUpdate=!1,this.scene.add(this.mesh)}update(t,e){if(!this.active){this.trail.length>0&&this.updateTrail(t);return}if(this.flameMesh){const s=.8+Math.random()*.4,r=.9+Math.random()*.2;this.flameMesh.scale.set(s,r,s),this.flameMesh.material.opacity=.7+Math.random()*.3,this.flameCore&&this.flameCore.scale.set(s,r,s)}if(this.life-=t,this.life<=0){this.destroy();return}this.target&&!this.target.destroyed&&this.trackTarget(t);const n=wi(this.lon,this.lat,this.alt,this.heading,this.pitch,this.speed*t);if(this.lon=n.lon,this.lat=n.lat,this.alt=n.alt,this.updateTrail(t),this.updateThreeMatrix(),e){for(const s of e)if(this.calculateDistSqToNPC(s)<1e4){this.hitNPC(s);return}}this.checkTerrainCollision()}trackTarget(t){const e=Cesium.Cartesian3.fromDegrees(this.target.lon,this.target.lat,this.target.alt),n=Cesium.Cartesian3.fromDegrees(this.lon,this.lat,this.alt),s=Cesium.Cartesian3.subtract(e,n,new Cesium.Cartesian3);Cesium.Cartesian3.normalize(s,s);const r=Cesium.Transforms.eastNorthUpToFixedFrame(n),a=Cesium.Matrix4.inverse(r,new Cesium.Matrix4),o=Cesium.Matrix4.multiplyByPointAsVector(a,s,new Cesium.Cartesian3),l=Cesium.Math.toDegrees(Math.atan2(o.x,o.y)),c=Cesium.Math.toDegrees(Math.asin(o.z));let h=l-this.heading;for(;h<-180;)h+=360;for(;h>180;)h-=360;const u=90;this.heading+=Math.max(-u*t,Math.min(u*t,h)),this.pitch+=Math.max(-u*t,Math.min(u*t,c-this.pitch))}updateTrail(t){if(this.active){this.distanceSinceLastTrail+=this.speed*t;const n=20;for(;this.distanceSinceLastTrail>=n;){const s=this.distanceSinceLastTrail-n,r=wi(this.lon,this.lat,this.alt,this.heading,this.pitch,-s);this.distanceSinceLastTrail-=n;const a=new te(1,16,16),o=.5+Math.random()*.75,l=new ke({color:new zt(o,o,o),transparent:!0,opacity:.6+Math.random()*.25}),c=new j(a,l);c.lon=r.lon,c.lat=r.lat,c.alt=r.alt,c.life=4,c.maxLife=4;const h=this.maxLife-this.life;c.launchScale=Math.min(1,.25+h/1.5*.75),c.matrixAutoUpdate=!1,this.scene.add(c),this.trail.push(c)}}const e=this.viewer.camera.viewMatrix;for(let n=this.trail.length-1;n>=0;n--){const s=this.trail[n];if(s.life-=t,s.life<=0){this.scene.remove(s),this.trail.splice(n,1);continue}s.randomScale||(s.randomScale=.8+Math.random()*.5);const a=(s.launchScale||1)*s.randomScale*(1+(1-s.life/s.maxLife)*15);s.scale.set(a,a,a);const o=s.life/s.maxLife*.5;s.material.opacity=o;const l=Cesium.Cartesian3.fromDegrees(s.lon,s.lat,s.alt,void 0,this._scratchCartesian),c=Cesium.Transforms.eastNorthUpToFixedFrame(l,void 0,this._scratchMatrix),h=Cesium.Matrix4.multiply(e,c,this._scratchCameraMatrix);for(let u=0;u<16;u++)this._scratchThreeMatrix.elements[u]=h[u];s.matrix.copy(this._scratchThreeMatrix),s.matrix.scale(new L(a,a,a)),s.updateMatrixWorld(!0)}}updateThreeMatrix(){const t=this.viewer.camera.viewMatrix,e=Cesium.Cartesian3.fromDegrees(this.lon,this.lat,this.alt,void 0,this._scratchCartesian),n=Cesium.Transforms.eastNorthUpToFixedFrame(e,void 0,this._scratchMatrix),s=Cesium.Math.toRadians(this.heading),r=Cesium.Math.toRadians(this.pitch),a=new Cesium.Cartesian3(Math.sin(s)*Math.cos(r),Math.cos(s)*Math.cos(r),Math.sin(r)),o=Cesium.Matrix4.multiplyByPointAsVector(n,a,new Cesium.Cartesian3);Cesium.Cartesian3.normalize(o,o);const l=new Cesium.Cartesian3(n[8],n[9],n[10]);let c=new Cesium.Cartesian3;if(Math.abs(Cesium.Cartesian3.dot(o,l))>.999){const f=new Cesium.Cartesian3(n[4],n[5],n[6]);Cesium.Cartesian3.cross(o,f,c)}else Cesium.Cartesian3.cross(o,l,c);Cesium.Cartesian3.normalize(c,c);const h=new Cesium.Cartesian3;Cesium.Cartesian3.cross(c,o,h);const u=this._scratchMatrix;u[0]=c.x,u[1]=c.y,u[2]=c.z,u[3]=0,u[4]=o.x,u[5]=o.y,u[6]=o.z,u[7]=0,u[8]=h.x,u[9]=h.y,u[10]=h.z,u[11]=0,u[12]=e.x,u[13]=e.y,u[14]=e.z,u[15]=1;const d=Cesium.Matrix4.multiply(t,u,this._scratchCameraMatrix);for(let f=0;f<16;f++)this._scratchThreeMatrix.elements[f]=d[f];if(this.mesh.matrix.copy(this._scratchThreeMatrix),this.mesh.updateMatrixWorld(!0),this.flameGlow&&this.viewer&&this.viewer.camera&&this.viewer.camera.position)try{const f=this.viewer.camera.position,g=Cesium.Cartesian3.distance(e,f)||1,x=Se.clamp(g*.0016,1,80);this.flameGlow.scale.set(x,x,1),this.flameGlow.renderOrder=9999,this.flameGlow.material&&(this.flameGlow.material.opacity=Math.max(.25,Math.min(1,80/x)))}catch{}}calculateDistSqToNPC(t){const e=(t.lon-this.lon)*111320*Math.cos(Cesium.Math.toRadians(this.lat)),n=(t.lat-this.lat)*111320,s=t.alt-this.alt;return e*e+n*n+s*s}hitNPC(t){t.destroyed=!0,this.onKill&&this.onKill(t);try{ii.spawnExplosion(this.lon,this.lat,this.alt,{count:80,smokeCount:18,big:!0}),ii.spawnWreckage(this.lon,this.lat,this.alt,this.heading,this.pitch,{count:48}),Ct.play("explosion-random")}catch{}this.destroy()}checkTerrainCollision(){const t=Cesium.Cartographic.fromDegrees(this.lon,this.lat),e=this.viewer.scene.globe.getHeight(t);if(e!==void 0&&this.alt<e){try{ii.spawnExplosion(this.lon,this.lat,this.alt,{count:80,smokeCount:18,big:!0}),ii.spawnWreckage(this.lon,this.lat,this.alt,this.heading,this.pitch,{count:48}),Ct.play("explosion-random")}catch{}this.destroy()}}destroy(){this.active=!1,this.mesh&&this.scene.remove(this.mesh)}}class jx{constructor(t,e,n,s,r,a,o=null){this.scene=t,this.viewer=e,this.onKill=o,this.lon=n.lon,this.lat=n.lat,this.alt=n.alt,this.heading=s,this.pitch=r,this.speed=a+1500,this.life=3,this.active=!0,this._scratchMatrix=new Cesium.Matrix4,this._scratchCartesian=new Cesium.Cartesian3,this._scratchThreeMatrix=new ee,this._scratchCameraMatrix=new Cesium.Matrix4,this.initMesh()}initMesh(){const t=(o,l,c)=>new Tn({uniforms:{colorStart:{value:new zt(16724736)},colorMid:{value:new zt(16763904)},colorEnd:{value:new zt(16777215)},opacity:{value:l},intensity:{value:c}},vertexShader:`
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
				`,transparent:!0,depthWrite:!1,blending:wn,side:Be});this.mesh=new Pe;const n=(o,l,c,h)=>{const u=new Cs(o,l,1,1);u.translate(0,-l/2,0);const d=t(o,c,h);return new j(u,d)};for(let o=0;o<3;o++){const l=n(.6,20,1,1);l.rotateY(o*Math.PI*2/3),this.mesh.add(l)}for(let o=0;o<3;o++){const l=n(1.6,22,.35,.65);l.rotateY(o*Math.PI*2/3+Math.PI/6),this.mesh.add(l)}const s=new tn(.12,.8,12);s.translate(0,-.4,0);const r=new ke({color:16777215,transparent:!0,opacity:1,blending:wn,depthWrite:!1}),a=new j(s,r);this.mesh.add(a),this.mesh.matrixAutoUpdate=!1,this.scene.add(this.mesh)}update(t,e){if(!this.active)return;if(this.life-=t,this.life<=0){this.destroy();return}const n=wi(this.lon,this.lat,this.alt,this.heading,this.pitch,this.speed*t);if(this.lon=n.lon,this.lat=n.lat,this.alt=n.alt,this.updateThreeMatrix(),e){for(const s of e)if(this.calculateDistSqToNPC(s)<400){this.hitNPC(s);return}}this.checkTerrainCollision()}updateThreeMatrix(){const t=this.viewer.camera.viewMatrix,e=Cesium.Cartesian3.fromDegrees(this.lon,this.lat,this.alt,void 0,this._scratchCartesian),n=Cesium.Transforms.eastNorthUpToFixedFrame(e,void 0,this._scratchMatrix),s=Cesium.Math.toRadians(this.heading),r=Cesium.Math.toRadians(this.pitch),a=new Cesium.Cartesian3(Math.sin(s)*Math.cos(r),Math.cos(s)*Math.cos(r),Math.sin(r)),o=Cesium.Matrix4.multiplyByPointAsVector(n,a,new Cesium.Cartesian3);Cesium.Cartesian3.normalize(o,o);const l=new Cesium.Cartesian3(n[8],n[9],n[10]);let c=new Cesium.Cartesian3;if(Math.abs(Cesium.Cartesian3.dot(o,l))>.999){const f=new Cesium.Cartesian3(n[4],n[5],n[6]);Cesium.Cartesian3.cross(o,f,c)}else Cesium.Cartesian3.cross(o,l,c);Cesium.Cartesian3.normalize(c,c);const h=Cesium.Cartesian3.cross(c,o,new Cesium.Cartesian3),u=this._scratchMatrix;u[0]=c.x,u[1]=c.y,u[2]=c.z,u[3]=0,u[4]=o.x,u[5]=o.y,u[6]=o.z,u[7]=0,u[8]=h.x,u[9]=h.y,u[10]=h.z,u[11]=0,u[12]=e.x,u[13]=e.y,u[14]=e.z,u[15]=1;const d=Cesium.Matrix4.multiply(t,u,this._scratchCameraMatrix);for(let f=0;f<16;f++)this._scratchThreeMatrix.elements[f]=d[f];this.mesh.matrix.copy(this._scratchThreeMatrix),this.mesh.updateMatrixWorld(!0)}calculateDistSqToNPC(t){const e=(t.lon-this.lon)*111320*Math.cos(Cesium.Math.toRadians(this.lat)),n=(t.lat-this.lat)*111320,s=t.alt-this.alt;return e*e+n*n+s*s}hitNPC(t){t.destroyed=!0,this.onKill&&this.onKill(t);try{ii.spawnExplosion(this.lon,this.lat,this.alt,{count:36,smokeCount:8,big:!0}),ii.spawnWreckage(this.lon,this.lat,this.alt,this.heading,this.pitch,{count:18});try{Ct.play("explosion-random")}catch{}}catch{}this.destroy()}checkTerrainCollision(){const t=Cesium.Cartographic.fromDegrees(this.lon,this.lat),e=this.viewer.scene.globe.getHeight(t);if(e!==void 0&&this.alt<e){try{ii.spawnSpark(this.lon,this.lat,this.alt,{count:10})}catch{}this.destroy()}}destroy(){this.active=!1,this.scene.remove(this.mesh)}}class Qx{constructor(t,e,n,s,r,a){this.scene=t,this.viewer=e,this.lon=n.lon,this.lat=n.lat,this.alt=n.alt,this.heading=s+180+(Math.random()-.5)*40,this.pitch=r-15-Math.random()*20,this.speed=a*.5,this.gravity=5,this.verticalVelocity=0,this.life=4,this.maxLife=4,this.active=!0,this._scratchCartesian=new Cesium.Cartesian3,this._scratchMatrix=new Cesium.Matrix4,this._scratchCameraMatrix=new Cesium.Matrix4,this._scratchThreeMatrix=new ee,this.trail=[],this.distanceSinceLastTrail=0,this.initMesh()}initMesh(){this.group=new Pe,this.group.matrixAutoUpdate=!1;const t=64,e=document.createElement("canvas");e.width=t,e.height=t;const n=e.getContext("2d"),s=n.createRadialGradient(t/2,t/2,0,t/2,t/2,t/2);s.addColorStop(0,"#ffffff"),s.addColorStop(.2,"#ffff66"),s.addColorStop(.5,"#ffff00"),s.addColorStop(1,"rgba(0,0,0,0)"),n.fillStyle=s,n.fillRect(0,0,t,t);const r=new Fh(e),a=new ea({map:r,color:16777028,transparent:!0,blending:wn,depthWrite:!1});this.flareSprite=new tl(a),this.flareSprite.scale.set(1.5,1.5,1),this.group.add(this.flareSprite);const o=new ea({map:r,color:16755200,transparent:!0,opacity:.8,blending:wn,depthWrite:!1});this.glowSprite=new tl(o),this.glowSprite.scale.set(4,4,1),this.group.add(this.glowSprite),this.scene.add(this.group)}update(t){if(!this.active)return;if(this.life-=t,this.life<=0){this.destroy();return}const e=this.speed*t,n=this.calculateMove(e);this.lon=n.lon,this.lat=n.lat,this.alt=n.alt,this.verticalVelocity-=this.gravity*t,this.alt+=this.verticalVelocity*t,this.speed*=.98,this.updateThreeMatrix(),this._spawnTrailIfNeeded(t),this._updateTrail(t);const s=this.life/this.maxLife;if(this.flareSprite){this.flareSprite.material.opacity=Math.min(1,s*1.5);const r=.9+Math.random()*.2;this.flareSprite.scale.set(1.5*r,1.5*r,1)}if(this.glowSprite){this.glowSprite.material.opacity=Math.min(.8,s*1.2);const r=.8+Math.random()*.4;this.glowSprite.scale.set(4*r,4*r,1)}}calculateMove(t){const e=Cesium.Math.toRadians(this.heading),n=Cesium.Math.toRadians(this.pitch),s=6371e3,r=t*Math.cos(e)*Math.cos(n)/s,a=t*Math.sin(e)*Math.cos(n)/(s*Math.cos(Cesium.Math.toRadians(this.lat))),o=t*Math.sin(n);return{lon:this.lon+Cesium.Math.toDegrees(a),lat:this.lat+Cesium.Math.toDegrees(r),alt:this.alt+o}}updateThreeMatrix(){const t=this.viewer.camera.viewMatrix,e=Cesium.Cartesian3.fromDegrees(this.lon,this.lat,this.alt),n=Cesium.Transforms.eastNorthUpToFixedFrame(e,void 0,this._scratchMatrix),s=Cesium.Matrix4.multiply(t,n,this._scratchCameraMatrix);for(let r=0;r<16;r++)this._scratchThreeMatrix.elements[r]=s[r];this.group.matrix.copy(this._scratchThreeMatrix),this.group.updateMatrixWorld(!0)}_spawnTrailIfNeeded(t){this.distanceSinceLastTrail+=(this.speed+Math.abs(this.verticalVelocity))*t;const e=3;for(;this.distanceSinceLastTrail>=e;){const s=(this.distanceSinceLastTrail-e)/((this.speed+Math.abs(this.verticalVelocity))*t||1),r=this.lon,a=this.lat,o=this.alt-this.verticalVelocity*t*s;this.distanceSinceLastTrail-=e;const l=new te(1,12,12),c=.4+Math.random()*.4,h=new ke({color:new zt(c,c,c),transparent:!0,opacity:.5+Math.random()*.2}),u=new j(l,h);u.lon=r,u.lat=a,u.alt=o,u.life=2+Math.random()*1.5,u.maxLife=u.life,u.matrixAutoUpdate=!1,this.scene.add(u),this.trail.push(u)}}_updateTrail(t){const e=this.viewer.camera.viewMatrix;for(let n=this.trail.length-1;n>=0;n--){const s=this.trail[n];if(s.life-=t,s.life<=0){this.scene.remove(s),this.trail.splice(n,1);continue}s.randomScale||(s.randomScale=.5+Math.random()*.5);const r=s.life/s.maxLife,a=s.randomScale*(1+(1-r)*8);s.scale.set(a,a,a),s.material.opacity=r*.4;const o=Cesium.Cartesian3.fromDegrees(s.lon,s.lat,s.alt,void 0,this._scratchCartesian),l=Cesium.Transforms.eastNorthUpToFixedFrame(o,void 0,this._scratchMatrix),c=Cesium.Matrix4.multiply(e,l,this._scratchCameraMatrix);for(let h=0;h<16;h++)this._scratchThreeMatrix.elements[h]=c[h];s.matrix.copy(this._scratchThreeMatrix),s.matrix.scale(new L(a,a,a)),s.updateMatrixWorld(!0),s.alt+=.5*t}}destroy(){this.active=!1,this.group&&this.scene.remove(this.group);for(const t of this.trail)this.scene.remove(t);this.trail=[]}}class t_{constructor(t,e,n){this.viewer=t,this.scene=e,this.playerModel=n,this.weapons=[{id:"gun",name:"TALON STRIKE",ammo:1/0,maxAmmo:1/0,fireRate:.3,lastFire:0},{id:"missile",name:"DIVE ATTACK",ammo:30,maxAmmo:30,fireRate:2,lastFire:0,type:"DIVE"}],this.flareWeapon={id:"flare",name:"EAGLE SCREECH",ammo:20,maxAmmo:20,fireRate:.5,lastFire:0},this.selectedWeaponIndex=0,this.projectiles=[],this.flares=[],this.onKill=null,this.target=null,this.isGunOverheated=!1,this.gunHeat=0,this.lockTime=0,this.lockRequiredTime=1.5,this.lockStatus="NONE",this.lockingTarget=null,this.flareQueue=0,this.flareInterval=.15,this.lastFlarePulse=0,this.lastMissileSide=!1,this.emptyWarningTimers={gun:0,missile:0,flare:0},this.lastEmptyWarningSoundTime=0}resetAmmo(){this.selectedWeaponIndex=0;for(const t of this.weapons)typeof t.maxAmmo<"u"&&(t.ammo=t.maxAmmo);this.flareWeapon&&typeof this.flareWeapon.maxAmmo<"u"&&(this.flareWeapon.ammo=this.flareWeapon.maxAmmo),this.gunHeat=0,this.isGunOverheated=!1,this.emptyWarningTimers={gun:0,missile:0,flare:0}}getCurrentWeapon(){return this.weapons[this.selectedWeaponIndex]}toggleWeapon(){this.selectedWeaponIndex=(this.selectedWeaponIndex+1)%this.weapons.length;try{Ct.play("weapon-switch")}catch{}}selectWeapon(t){t>=0&&t<this.weapons.length&&(this.selectedWeaponIndex=t);try{Ct.play("weapon-switch")}catch{}}calculateWeaponPos(t){if(!this.playerModel||!this.viewer)return null;const e=this.playerModel.scale.x,n=t.clone().multiplyScalar(e);n.applyQuaternion(this.playerModel.quaternion),n.add(this.playerModel.position);const s=75,r=Cesium.Math.toDegrees(this.viewer.camera.frustum.fovy),a=Math.tan(Cesium.Math.toRadians(r)*.5)/Math.tan(Cesium.Math.toRadians(s)*.5);n.x*=a,n.y*=a;const o=this.viewer.camera,l=o.right,c=o.up,h=o.direction,u=new Cesium.Cartesian3,d=Cesium.Cartesian3.multiplyByScalar(l,n.x,new Cesium.Cartesian3),f=Cesium.Cartesian3.multiplyByScalar(c,n.y,new Cesium.Cartesian3),g=Cesium.Cartesian3.multiplyByScalar(h,-n.z,new Cesium.Cartesian3);Cesium.Cartesian3.add(d,f,u),Cesium.Cartesian3.add(u,g,u);const x=o.positionWC,m=new Cesium.Cartesian3;Cesium.Cartesian3.add(x,u,m);const p=Cesium.Cartographic.fromCartesian(m);return{lon:Cesium.Math.toDegrees(p.longitude),lat:Cesium.Math.toDegrees(p.latitude),alt:p.height}}fire(t,e=null){const n=e?this.weapons.find(a=>a.id===e):this.weapons[this.selectedWeaponIndex];if(!n)return;const s=performance.now()*.001;if(n.ammo<=0){if(s-this.lastEmptyWarningSoundTime>2){this.emptyWarningTimers[n.id]=1,this.lastEmptyWarningSoundTime=s;try{Ct.play("weapon-warning")}catch{}}return}if(n.id==="gun"&&this.isGunOverheated||s-n.lastFire<n.fireRate||n.id==="missile"&&this.lockStatus!=="LOCKED")return;n.lastFire=s,n.ammo!==1/0&&n.ammo--;const r={lon:t.lon,lat:t.lat,alt:t.alt};if(n.id==="gun"){if(this.gunHeat+=.02,this.gunHeat>=1){this.isGunOverheated=!0;try{Ct.play("weapon-warning")}catch{}}const a=new L(0,0,0),o=this.calculateWeaponPos(a)||wi(r.lon,r.lat,r.alt,t.heading,t.pitch,5),l=new jx(this.scene,this.viewer,o,t.heading,t.pitch,t.speed,this.onKill);this.projectiles.push(l)}else if(n.id==="missile"){this.lastMissileSide=!this.lastMissileSide;const a=this.lastMissileSide?1:-1,o=new L(15*a,-15,0),l=this.calculateWeaponPos(o)||r,c=this.target,h=new Jx(this.scene,this.viewer,l,t.heading,t.pitch,t.speed,c,this.onKill);this.projectiles.push(h);try{Ct.play("missile-fire")}catch{}}}fireFlare(t){const e=this.flareWeapon,n=performance.now()*.001;if(!e||e.ammo<=0){if(n-this.lastEmptyWarningSoundTime>2){this.emptyWarningTimers.flare=1,this.lastEmptyWarningSoundTime=n;try{Ct.play("weapon-warning")}catch{}}return}n-e.lastFire<1||(e.ammo--,e.lastFire=n,this.flareQueue=6,this.lastFlarePulse=0)}_spawnSingleFlare(t){const e=new L(0,-10,6),n=this.calculateWeaponPos(e)||{lon:t.lon,lat:t.lat,alt:t.alt},s=new Qx(this.scene,this.viewer,n,t.heading,t.pitch,t.speed);this.flares.push(s)}update(t,e,n=null){const s=this.lockStatus,r=this.getCurrentWeapon();try{n&&n.fire&&r.id==="gun"&&!this.isGunOverheated&&r.ammo>0?Ct.isPlaying("m61-firing")||Ct.play("m61-firing"):Ct.isPlaying("m61-firing")&&Ct.stop("m61-firing")}catch{}if(r.id==="missile"){const o=this.findPotentialTarget(e);o?this.lockingTarget===o?(this.lockTime+=t,this.lockTime>=this.lockRequiredTime?(this.lockStatus="LOCKED",this.target=o):this.lockStatus="LOCKING"):(this.lockingTarget=o,this.lockTime=0,this.lockStatus="LOCKING",this.target=null):(this.lockingTarget=null,this.lockTime=0,this.lockStatus="NONE",this.target=null)}else this.lockingTarget=null,this.lockTime=0,this.lockStatus="NONE",this.target=null;try{this.lockStatus==="LOCKING"?Ct.isPlaying("rwr-tws")||Ct.play("rwr-tws"):Ct.isPlaying("rwr-tws")&&Ct.stop("rwr-tws"),s!==this.lockStatus&&this.lockStatus==="LOCKED"&&Ct.play("rwr-lock"),s==="LOCKED"&&this.lockStatus!=="LOCKED"&&Ct.isPlaying("rwr-lock")&&Ct.stop("rwr-lock")}catch{}this.flareQueue>0&&(this.lastFlarePulse+=t,(this.lastFlarePulse>=this.flareInterval||this.flareQueue===6)&&(this._spawnSingleFlare(e),this.flareQueue--,this.lastFlarePulse=0)),this.gunHeat>0&&(this.gunHeat-=t*.2,this.gunHeat<=0&&(this.gunHeat=0,this.isGunOverheated=!1),this.isGunOverheated&&this.gunHeat<.3&&(this.isGunOverheated=!1));for(const o in this.emptyWarningTimers)this.emptyWarningTimers[o]>0&&(this.emptyWarningTimers[o]-=t,this.emptyWarningTimers[o]<0&&(this.emptyWarningTimers[o]=0));const a=e.npcs||[];for(let o=this.projectiles.length-1;o>=0;o--){const l=this.projectiles[o];l.update(t,a);const c=l.trail&&l.trail.length>0;!l.active&&!c&&this.projectiles.splice(o,1)}for(let o=this.flares.length-1;o>=0;o--){const l=this.flares[o];l.update(t),l.active||this.flares.splice(o,1)}}findPotentialTarget(t){if(!t.npcs||t.npcs.length===0)return null;let e=null,n=.985;for(const s of t.npcs){if(s.destroyed)continue;const r=this.calculateDotProduct(t,s);r>n&&this.calculateDist(t,s)<1e4&&(e=s,n=r)}return e}calculateDotProduct(t,e){const n=Cesium.Math.toRadians(t.heading),s=Cesium.Math.toRadians(t.pitch),r=new L(Math.sin(n)*Math.cos(s),Math.sin(s),Math.cos(n)*Math.cos(s)),a=(e.lon-t.lon)*111320*Math.cos(Cesium.Math.toRadians(t.lat)),o=(e.lat-t.lat)*111320,l=e.alt-t.alt,c=new L(a,l,o).normalize();return r.dot(c)}calculateDist(t,e){const n=(e.lon-t.lon)*111320*Math.cos(Cesium.Math.toRadians(t.lat)),s=(e.lat-t.lat)*111320,r=e.alt-t.alt;return Math.sqrt(n*n+s*s+r*r)}}const al={RABBIT:{category:"ground",speed:3,color:9139029,size:[.12,.08,.15],score:300},SQUIRREL:{category:"ground",speed:4,color:8018490,size:[.06,.05,.1],score:200},MOUSE:{category:"ground",speed:2,color:10127994,size:[.03,.02,.05],score:100},MARMOT:{category:"ground",speed:2,color:6969914,size:[.15,.1,.2],score:400},TROUT:{category:"water",speed:2,color:6982250,size:[.08,.03,.25],score:500},BASS:{category:"water",speed:1.5,color:4876874,size:[.1,.04,.3],score:500},KOKANEE:{category:"water",speed:2.5,color:11162965,size:[.06,.03,.2],score:600},RAVEN:{category:"air",speed:18,color:1118481,size:[.15,.06,.18],score:500,wingColor:657930},CROW:{category:"air",speed:15,color:1710618,size:[.1,.05,.14],score:400,wingColor:1118481}},eu=[{type:"RABBIT",weight:15},{type:"SQUIRREL",weight:15},{type:"MOUSE",weight:10},{type:"MARMOT",weight:5},{type:"TROUT",weight:12},{type:"BASS",weight:10},{type:"KOKANEE",weight:8},{type:"RAVEN",weight:15},{type:"CROW",weight:10}],e_=eu.reduce((i,t)=>i+t.weight,0),gn={lonMin:-116.95,lonMax:-116.86,latMin:34.235,latMax:34.255,elevation:2060},kr={lon:-116.9155,lat:34.2433,radiusM:2e3};function n_(){let i=Math.random()*e_;for(const t of eu)if(i-=t.weight,i<=0)return t.type;return"RAVEN"}function i_(i){const t=al[i];if(!t)return null;const e=new Pe,n=new Qt({color:t.color,flatShading:!0}),[s,r,a]=t.size;if(t.category==="ground"){const o=new te(1,6,5);o.scale(s,r,a);const l=new j(o,n);e.add(l);const c=new te(r*.8,5,4),h=new j(c,n);h.position.set(0,r*.3,a*.9),e.add(h);const u=new ke({color:0});for(const d of[-1,1]){const f=new te(r*.15,4,3),g=new j(f,u);g.position.set(d*r*.4,r*.5,a*1),e.add(g)}if(i==="RABBIT"){for(const g of[-1,1]){const x=new se(.015,.06,.01),m=new j(x,n);m.position.set(g*.02,r+.03,a*.8),e.add(m)}const d=new te(.02,4,3),f=new j(d,new Qt({color:15658734}));f.position.set(0,r*.3,-a*.7),e.add(f)}}else if(t.category==="water"){const o=new te(1,6,5);o.scale(s*.6,r,a);const l=new j(o,n);e.add(l);const c=new se(s*.3,r*2,.01),h=new j(c,n);h.position.set(0,0,-a*.9),h.rotation.y=.2,e.add(h);const u=new se(.005,r*.8,s*.4),d=new j(u,n);d.position.set(0,r*.8,0),e.add(d);const f=new te(1,5,4);f.scale(s*.4,r*.5,a*.8);const g=new j(f,new Qt({color:13421772}));g.position.y=-r*.3,e.add(g)}else if(t.category==="air"){const o=new te(1,6,5);o.scale(s*.5,r,a);const l=new j(o,n);e.add(l);const c=new te(r*.7,5,4),h=new j(c,n);h.position.set(0,r*.3,a*.8),e.add(h);const u=new tn(.008,.03,4),d=new j(u,new Qt({color:2236962}));d.position.set(0,r*.2,a*1.1),d.rotation.x=Math.PI/2,e.add(d);const f=new Qt({color:t.wingColor||t.color,side:Be,flatShading:!0});for(const m of[-1,1]){const p=new se(s*2.5,.005,a*.6);p.translate(m*s*1.25,0,0);const S=new j(p,f);S.position.y=r*.2,e.add(S)}const g=new se(s*.5,.005,a*.5),x=new j(g,n);x.position.set(0,0,-a*.7),e.add(x)}return e.traverse(o=>{o.layers.set(0)}),e}class s_{constructor(t,e,n){this.viewer=t,this.scene=e,this.loader=n,this.npcs=[],this.lastSpawnTime=0,this.loaded=!0,this._scratchMatrix=new Cesium.Matrix4,this._scratchHPR=new Cesium.HeadingPitchRoll,this._scratchCartesian=new Cesium.Cartesian3,this._scratchThreeMatrix=new ee,this._scratchCameraMatrix=new Cesium.Matrix4}spawnNPC(t,e,n){const s=n_(),r=al[s];if(!r)return null;let a,o,l,c,h;if(c=Math.random()*360,h=r.speed+(Math.random()-.5)*r.speed*.4,r.category==="ground"){const d=Math.random()*Math.PI*2,f=100+Math.random()*kr.radiusM,g=111320*Math.cos(kr.lat*Math.PI/180);a=kr.lon+Math.cos(d)*f/g,o=kr.lat+Math.sin(d)*f/111320;const x=Cesium.Cartographic.fromDegrees(a,o),m=this.viewer.scene.globe.getHeight(x);l=(m!==void 0?m:2070)+.5}else if(r.category==="water")a=gn.lonMin+Math.random()*(gn.lonMax-gn.lonMin),o=gn.latMin+Math.random()*(gn.latMax-gn.latMin),l=gn.elevation+.3;else{const d=Math.random()*Math.PI*2,f=500+Math.random()*3e3,g=111320*Math.cos(e*Math.PI/180);a=t+Math.cos(d)*f/g,o=e+Math.sin(d)*f/111320,l=n+(Math.random()-.5)*300,l=Math.max(l,2100)}const u=s+" "+(100+Math.floor(Math.random()*900));return this.createNPC(u,s,r,a,o,l,c,h)}createNPC(t,e,n,s,r,a,o,l){const c=i_(e);if(!c)return null;c.matrixAutoUpdate=!1,this.scene.add(c);const h={id:t+"_"+Math.random().toString(36).substr(2,9),mesh:c,name:t,typeName:e,category:n.category,lon:s,lat:r,alt:a,heading:o,speed:l,pitch:0,roll:0,targetHeading:o,targetPitch:0,behaviorTimer:2+Math.random()*5,terrainCheckTimer:Math.random()*2,time:Math.random()*100,destroyed:!1,score:n.score};return this.npcs.push(h),h}update(t,e){const n=this.viewer.camera.viewMatrix;for(let s=this.npcs.length-1;s>=0;s--){const r=this.npcs[s];if(r.destroyed){this.scene.remove(r.mesh),this.npcs.splice(s,1);continue}if(r.time+=t,r.behaviorTimer-=t,r.behaviorTimer<=0&&(r.category==="ground"?(r.targetHeading=(r.heading+(Math.random()-.5)*120)%360,r.speed=Math.random()>.3?al[r.typeName].speed:0,r.behaviorTimer=1+Math.random()*4):r.category==="water"?(r.targetHeading=(r.heading+(Math.random()-.5)*90)%360,r.behaviorTimer=2+Math.random()*5):(r.targetHeading=(r.heading+(Math.random()-.5)*180)%360,r.targetPitch=(Math.random()-.5)*15,r.behaviorTimer=3+Math.random()*6)),r.category==="air"&&(r.terrainCheckTimer-=t,r.terrainCheckTimer<=0)){r.terrainCheckTimer=.5;const d=Cesium.Cartographic.fromDegrees(r.lon,r.lat),f=this.viewer.scene.globe.getHeight(d);if(f!==void 0){const g=r.alt-f;g<80&&(r.targetPitch=15,g<30&&(r.targetPitch=30))}}let a=r.targetHeading-r.heading;for(;a<-180;)a+=360;for(;a>180;)a-=360;const l=(r.category==="air"?60:120)*t;if(r.heading=(r.heading+Math.max(-l,Math.min(l,a))+360)%360,r.category==="air"&&(r.pitch+=(r.targetPitch-r.pitch)*t*.6,Math.abs(a)>.5?r.roll+=(-Math.sign(a)*Math.min(1,Math.abs(a)/45)*45-r.roll)*t*3:r.roll+=(0-r.roll)*t*3),r.speed>0)if(r.category==="ground"){const d=wi(r.lon,r.lat,r.alt,r.heading,0,r.speed*t);r.lon=d.lon,r.lat=d.lat;const f=Cesium.Cartographic.fromDegrees(r.lon,r.lat),g=this.viewer.scene.globe.getHeight(f);g!==void 0&&(r.alt=g+.5)}else if(r.category==="water"){const d=wi(r.lon,r.lat,r.alt,r.heading,0,r.speed*t);r.lon=Math.max(gn.lonMin,Math.min(gn.lonMax,d.lon)),r.lat=Math.max(gn.latMin,Math.min(gn.latMax,d.lat)),r.alt=gn.elevation+Math.sin(r.time*2)*.2}else{const d=wi(r.lon,r.lat,r.alt,r.heading,r.pitch,r.speed*t);r.lon=d.lon,r.lat=d.lat,r.alt=d.alt}const c=Cesium.Cartesian3.fromDegrees(r.lon,r.lat,r.alt,void 0,this._scratchCartesian);this._scratchHPR.heading=Cesium.Math.toRadians(r.heading),this._scratchHPR.pitch=Cesium.Math.toRadians(r.pitch),this._scratchHPR.roll=Cesium.Math.toRadians(r.roll);const h=Cesium.Transforms.headingPitchRollToFixedFrame(c,this._scratchHPR,Cesium.Ellipsoid.WGS84,Cesium.Transforms.eastNorthUpToFixedFrame,this._scratchMatrix),u=Cesium.Matrix4.multiply(n,h,this._scratchCameraMatrix);for(let d=0;d<16;d++)this._scratchThreeMatrix.elements[d]=u[d];r.mesh.matrix.copy(this._scratchThreeMatrix),r.mesh.updateMatrixWorld(!0)}this.npcs.length<12&&Date.now()-this.lastSpawnTime>2e3&&(this.spawnNPC(e.lon,e.lat,e.alt),this.lastSpawnTime=Date.now())}clear(){this.npcs.forEach(t=>this.scene.remove(t.mesh)),this.npcs=[]}}class r_{constructor(){this.container=document.getElementById("dialogue-container"),this.textElem=document.getElementById("dialogue-text"),this.dialogues=["Shadow! It's Jackie, calling from the nest. The eaglets are hungry - time to hunt!","You're soaring above Big Bear Valley. Our Jeffrey pine nest is your home base.","Check your display - SPEED on the left shows how fast you're flying, ALTITUDE on the right.","The compass at the top shows your heading. Use it to navigate back to the lake for fish.","Your talons are ready! Use TALON STRIKE for quick catches, or DIVE ATTACK for bigger prey.","Use 'W' and 'S' to control your wing speed. Glide to conserve energy.","Control your flight with ARROW keys for pitch and roll. 'A' and 'D' for turning.","Press SPACE to power dive - you can reach incredible speeds swooping down!","Switch hunting modes with '1', '2', or 'Q'. Press 'F' or ENTER to strike!","Watch out for ravens! Press 'V' to screech and scare them away from our territory.","The territory map shows prey and ravens nearby. Hunt the fish in Big Bear Lake!","Good hunting, Shadow! Bring food back for our eaglets. Jackie, out."],this.currentIndex=0,this.isActive=!1,this.isPaused=!1,this.currentCharIndex=0,this.isWaitingForNext=!1,this.lastSoundIndex=-1,this.glitchSounds=["glitch-1","glitch-2","glitch-3","glitch-4"]}start(){localStorage.getItem("tutorialCompleted")||(this.stop(),this.currentIndex=0,this.currentCharIndex=0,this.isActive=!0,this.isPaused=!1,this.isWaitingForNext=!1,this.startTimeout=setTimeout(()=>{!this.isActive||this.isPaused||(this.container.classList.remove("hidden"),this.showNext())},7e3))}pause(){this.isActive&&(this.isPaused=!0,this.container.classList.add("hidden"),this.startTimeout&&clearTimeout(this.startTimeout),this.typewriterTimeout&&clearTimeout(this.typewriterTimeout),this.nextTimeout&&clearTimeout(this.nextTimeout))}resume(){!this.isActive||!this.isPaused||(this.isPaused=!1,this.container.classList.remove("hidden"),this.isWaitingForNext?this.nextTimeout=setTimeout(()=>{this.currentIndex++,this.currentCharIndex=0,this.showNext()},2e3):this.typeWriter())}stop(){this.isActive=!1,this.isPaused=!1,this.container.classList.add("hidden"),this.startTimeout&&clearTimeout(this.startTimeout),this.typewriterTimeout&&clearTimeout(this.typewriterTimeout),this.nextTimeout&&clearTimeout(this.nextTimeout)}showNext(){if(!(!this.isActive||this.isPaused)){if(this.currentIndex>=this.dialogues.length){this.finish();return}this.textElem.textContent="",this.currentCharIndex=0,this.isWaitingForNext=!1,this.playRandomGlitch(),this.typeWriter()}}typeWriter(){if(!this.isActive||this.isPaused)return;const t=this.dialogues[this.currentIndex];this.currentCharIndex<t.length?(this.textElem.textContent=t.substring(0,this.currentCharIndex+1),this.currentCharIndex++,this.typewriterTimeout=setTimeout(()=>this.typeWriter(),30)):(this.isWaitingForNext=!0,this.nextTimeout=setTimeout(()=>{this.currentIndex++,this.currentCharIndex=0,this.showNext()},4e3))}playRandomGlitch(){let t;do t=Math.floor(Math.random()*this.glitchSounds.length);while(t===this.lastSoundIndex);this.lastSoundIndex=t,Ct.play(this.glitchSounds[t])}skip(){if(!this.isActive||this.isPaused)return;const t=this.dialogues[this.currentIndex];t&&(this.isWaitingForNext?(this.nextTimeout&&clearTimeout(this.nextTimeout),this.currentIndex++,this.currentCharIndex=0,this.showNext()):(this.typewriterTimeout&&clearTimeout(this.typewriterTimeout),this.textElem.textContent=t,this.currentCharIndex=t.length,this.isWaitingForNext=!0,this.nextTimeout&&clearTimeout(this.nextTimeout),this.nextTimeout=setTimeout(()=>{this.currentIndex++,this.currentCharIndex=0,this.showNext()},4e3)))}finish(){this.isActive=!1,this.container.classList.add("hidden"),localStorage.setItem("tutorialCompleted","true")}}class a_{constructor(){this.currentBiome="wilderness",this.lastBiomeCheck=0,this.biomeCheckInterval=3e3,this.windPlaying=!1,this.windVolume=0,this.targetWindVolume=0}getBiome(t,e,n){const s=n*.3048;if(s>3e3)return"highalt";if(e>34.23&&e<34.27&&t>-116.95&&t<-116.85)return"water";const r=[{lon:-118.24,lat:34.05,r:.12},{lon:-115.14,lat:36.17,r:.08},{lon:-117.16,lat:32.72,r:.08},{lon:-112.07,lat:33.45,r:.1}];for(const a of r)if(Math.sqrt((t-a.lon)**2+(e-a.lat)**2)<a.r)return"city";return e>34.5&&t>-117.5||e>33.5&&t>-116.5&&s<600?"desert":s>1500?"mountain":"wilderness"}update(t,e){if(!Ct||!Ct.listener)return;const n=e.speed||0;e.alt;const s=e.isFlapping||!1,r=e.isBoosting||!1,a=e.isTurbo||!1,o=8,l=80;if(n>o){const h=Math.min(1,(n-o)/(l-o));this.targetWindVolume=.08+h*.55,a&&(this.targetWindVolume=Math.min(.9,this.targetWindVolume*1.5)),r&&(this.targetWindVolume=Math.min(.85,this.targetWindVolume*1.3))}else this.targetWindVolume=.05;if(this.windVolume+=(this.targetWindVolume-this.windVolume)*t*3,Ct.sounds.has("wind")&&(this.windPlaying||(Ct.play("wind",.5),this.windPlaying=!0),Ct.setVolume("wind",this.windVolume)),Ct.sounds.has("jet-engine")&&Ct.isPlaying("jet-engine")){const h=n>30?Math.min(.3,(n-30)/200):0;Ct.setVolume("jet-engine",h)}s&&e.flapStrength>.3?(Ct.isPlaying("pitch")||Ct.play("pitch",.1),Ct.setVolume("pitch",.15+e.flapStrength*.2)):Ct.isPlaying("pitch")&&!s&&Ct.stop("pitch",.3),r&&(Ct.isPlaying("boost")||Ct.play("boost"));const c=Date.now();c-this.lastBiomeCheck>this.biomeCheckInterval&&(this.lastBiomeCheck=c,this.currentBiome=this.getBiome(e.lon,e.lat,e.alt))}startFlight(){this.windPlaying=!1,this.windVolume=.05}getCurrentBiome(){return this.currentBiome}}const th=[{name:"Big Bear Lake",center:{lon:-116.905,lat:34.244},lengthM:11e3,widthM:1600,maxDepth:22,elevation:2060,rotation:-15,shape:"ellipse"},{name:"Baldwin Lake",center:{lon:-116.82,lat:34.28},lengthM:2500,widthM:1800,maxDepth:3,elevation:2050,rotation:0,shape:"ellipse"},{name:"Lake Arrowhead",center:{lon:-117.189,lat:34.258},lengthM:1800,widthM:900,maxDepth:56,elevation:1572,rotation:-30,shape:"ellipse"},{name:"Silverwood Lake",center:{lon:-117.333,lat:34.294},lengthM:3200,widthM:800,maxDepth:55,elevation:1050,rotation:-45,shape:"ellipse"},{name:"Gregory Lake",center:{lon:-117.258,lat:34.229},lengthM:400,widthM:200,maxDepth:8,elevation:1400,rotation:10,shape:"ellipse"}],o_=`
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
`,l_=`
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
`;class nu{constructor(t,e){this.viewer=t,this.scene=e,this.waterMeshes=[],this.uniforms=null,this.initialized=!1,this.init()}init(){this.uniforms={time:{value:0},waveAmplitude:{value:.3},waveFrequency:{value:.15},shallowColor:{value:new zt(4886692)},deepColor:{value:new zt(667228)},skyColor:{value:new zt(8900331)},sunDirection:{value:new L(.5,.8,.3).normalize()},maxDepthMeters:{value:22},opacity:{value:1}};for(const t of th){const e=this.createWaterMesh(t);e&&(this.waterMeshes.push({mesh:e,body:t}),this.scene.add(e))}this.initialized=!0}createWaterMesh(t){const s=new Cs(t.lengthM,t.widthM,64,32),r=s.attributes.position;for(let c=0;c<r.count;c++){const h=r.getX(c),u=r.getY(c),d=h/(t.lengthM/2),f=u/(t.widthM/2),g=d*d+f*f;if(g>1){const x=1/Math.sqrt(g);r.setX(c,h*x),r.setY(c,u*x)}}r.needsUpdate=!0,s.rotateX(-Math.PI/2),t.rotation&&s.rotateY(Se.degToRad(t.rotation));const a={...this.uniforms,maxDepthMeters:{value:t.maxDepth}},o=new Tn({uniforms:a,vertexShader:o_,fragmentShader:l_,transparent:!0,side:Be,depthWrite:!1}),l=new j(s,o);return l.renderOrder=-1,l.layers.set(0),l.frustumCulled=!1,l}update(t,e){if(!this.initialized)return;const n=performance.now()*.001,s=e.lon,r=e.lat,a=e.alt,o=111320,l=111320*Math.cos(Se.degToRad(r));for(const{mesh:c,body:h}of this.waterMeshes){c.material.uniforms.time.value=n;const u=(h.center.lon-s)*l,d=(h.center.lat-r)*o,f=h.elevation-a*.3048;c.position.set(u,f,-d);const g=Math.sqrt(u*u+d*d);c.visible=g<3e4;const x=Math.max(.05,1-(a*.3048-h.elevation)/5e3);c.material.uniforms.waveAmplitude.value=.3*x;const m=n*.02;c.material.uniforms.sunDirection.value.set(Math.cos(m)*.5,.8,Math.sin(m)*.3).normalize()}}static isOverWater(t,e){for(const n of th){const s=(t-n.center.lon)*111320*Math.cos(e*Math.PI/180),r=(e-n.center.lat)*111320,a=-(n.rotation||0)*Math.PI/180,o=s*Math.cos(a)-r*Math.sin(a),l=s*Math.sin(a)+r*Math.cos(a),c=o/(n.lengthM/2),h=l/(n.widthM/2);if(c*c+h*h<=1)return!0}return!1}dispose(){for(const{mesh:t}of this.waterMeshes)this.scene.remove(t),t.geometry.dispose(),t.material.dispose();this.waterMeshes=[]}}const sn={renderDistance:2e3,cellSize:40,maxTrees:3e3,updateInterval:500,lodNear:500,lodFar:1500},eh={jeffreyPine:{trunkHeight:20,trunkRadius:.4,crownHeight:12,crownRadius:4,trunkColor:6044190,crownColor:2972199,altMin:1500,altMax:2400,density:.6,biome:"mountain"},whiteFir:{trunkHeight:25,trunkRadius:.5,crownHeight:18,crownRadius:3.5,trunkColor:7029286,crownColor:1789211,altMin:1700,altMax:2700,density:.5,biome:"mountain"},lodgepolePine:{trunkHeight:18,trunkRadius:.3,crownHeight:10,crownRadius:2.5,trunkColor:8016432,crownColor:3828533,altMin:2100,altMax:3e3,density:.7,biome:"mountain"},scrubOak:{trunkHeight:6,trunkRadius:.2,crownHeight:5,crownRadius:3,trunkColor:5914152,crownColor:4880954,altMin:1e3,altMax:1800,density:.3,biome:"mountain"},alpinePine:{trunkHeight:8,trunkRadius:.25,crownHeight:6,crownRadius:2,trunkColor:7031344,crownColor:2774320,altMin:2700,altMax:3500,density:.15,biome:"mountain"},joshuaTree:{trunkHeight:8,trunkRadius:.3,crownHeight:4,crownRadius:3,trunkColor:9139029,crownColor:7048782,altMin:400,altMax:1800,density:.12,biome:"desert"},saguaroCactus:{trunkHeight:10,trunkRadius:.4,crownHeight:2,crownRadius:.5,trunkColor:4880970,crownColor:5933658,altMin:200,altMax:1200,density:.06,biome:"desert"},creosoteBush:{trunkHeight:2,trunkRadius:.1,crownHeight:2,crownRadius:1.5,trunkColor:7035454,crownColor:8031056,altMin:0,altMax:1500,density:.2,biome:"desert"},desertSage:{trunkHeight:1.2,trunkRadius:.05,crownHeight:1,crownRadius:.8,trunkColor:9075296,crownColor:10135674,altMin:0,altMax:2e3,density:.25,biome:"desert"},smokeyTree:{trunkHeight:5,trunkRadius:.15,crownHeight:4,crownRadius:2.5,trunkColor:8022869,crownColor:9083514,altMin:100,altMax:900,density:.08,biome:"desert"},californiaFanPalm:{trunkHeight:18,trunkRadius:.3,crownHeight:5,crownRadius:4,trunkColor:9139029,crownColor:3836730,altMin:0,altMax:500,density:.3,biome:"coastal"},datePalm:{trunkHeight:15,trunkRadius:.35,crownHeight:6,crownRadius:4.5,trunkColor:8022864,crownColor:2980397,altMin:0,altMax:300,density:.25,biome:"coastal"},mexicanFanPalm:{trunkHeight:25,trunkRadius:.25,crownHeight:4,crownRadius:3.5,trunkColor:10127978,crownColor:4889162,altMin:0,altMax:700,density:.2,biome:"urban"},urbanLondonPlane:{trunkHeight:12,trunkRadius:.3,crownHeight:8,crownRadius:5,trunkColor:8022618,crownColor:3832368,altMin:0,altMax:500,density:.15,biome:"urban"},urbanJacaranda:{trunkHeight:10,trunkRadius:.25,crownHeight:6,crownRadius:5,trunkColor:5917242,crownColor:8018602,altMin:0,altMax:500,density:.1,biome:"urban"},urbanOak:{trunkHeight:14,trunkRadius:.4,crownHeight:10,crownRadius:7,trunkColor:5916720,crownColor:3828264,altMin:0,altMax:800,density:.12,biome:"urban"},eucalyptus:{trunkHeight:20,trunkRadius:.35,crownHeight:10,crownRadius:4,trunkColor:10127994,crownColor:5933658,altMin:0,altMax:600,density:.15,biome:"coastal"},manzanita:{trunkHeight:3,trunkRadius:.1,crownHeight:3,crownRadius:2,trunkColor:9056288,crownColor:4876848,altMin:300,altMax:1500,density:.35,biome:"chaparral"},californiaLaurel:{trunkHeight:10,trunkRadius:.3,crownHeight:7,crownRadius:5,trunkColor:5917232,crownColor:2775584,altMin:200,altMax:1200,density:.2,biome:"chaparral"},ceanothus:{trunkHeight:4,trunkRadius:.15,crownHeight:3,crownRadius:2.5,trunkColor:6969920,crownColor:3832400,altMin:200,altMax:1500,density:.3,biome:"chaparral"}};function xi(i,t){let e=i*73856093^t*19349663;return e=(e>>16^e)*73244475,e=(e>>16^e)*73244475,e=e>>16^e,(e&2147483647)/2147483647}class c_{constructor(t,e){this.viewer=t,this.scene=e,this.trunkInstances=null,this.crownInstances=null,this.activeCells=new Map,this.lastUpdateTime=0,this.lastUpdatePos={lon:0,lat:0},this.treePositions=[],this.treeCount=0,this.trunkGeometry=null,this.crownGeometries={},this.initialized=!1,this.init()}init(){this.trunkGeometry=new Ye(.3,.5,1,5,1),this.trunkGeometry.translate(0,.5,0),this.crownGeometries.conifer=new tn(1,1,6,1),this.crownGeometries.conifer.translate(0,.5,0),this.crownGeometries.deciduous=new te(1,5,4);const t=new Qt({color:6044190,flatShading:!0}),e=new Qt({color:2972199,flatShading:!0});this.trunkInstances=new Si(this.trunkGeometry,t,sn.maxTrees),this.trunkInstances.count=0,this.trunkInstances.frustumCulled=!1,this.trunkInstances.layers.set(0),this.crownInstances=new Si(this.crownGeometries.conifer,e,sn.maxTrees),this.crownInstances.count=0,this.crownInstances.frustumCulled=!1,this.crownInstances.layers.set(0),this.scene.add(this.trunkInstances),this.scene.add(this.crownInstances),this.initialized=!0}getBiome(t,e,n){if(n>1500)return"mountain";if(n>600&&n<1500)return"chaparral";if(e>34.5&&t>-117.5||e>33.5&&t>-116.5&&n<600||e<34&&e>33.3&&t>-116.8&&t<-115.5||e<34&&t>-113||e<33&&t>-112)return"desert";if(t<-117.5&&n<300||t<-118&&e<34.5)return"coastal";const s=[{lon:-118.24,lat:34.05,r:.15},{lon:-118.19,lat:33.77,r:.08},{lon:-117.16,lat:32.72,r:.12},{lon:-115.14,lat:36.17,r:.1},{lon:-117.91,lat:33.84,r:.08},{lon:-118.14,lat:34.15,r:.05},{lon:-112.07,lat:33.45,r:.12},{lon:-117.38,lat:33.98,r:.06},{lon:-117.29,lat:34.11,r:.05}];for(const r of s)if(Math.sqrt((t-r.lon)**2+(e-r.lat)**2)<r.r)return"urban";return n<300&&e>34.5?"desert":"chaparral"}getSpeciesForPosition(t,e,n){const s=this.getBiome(e,n,t),r=[];for(const[a,o]of Object.entries(eh))t>=o.altMin&&t<=o.altMax&&o.biome===s&&r.push({name:a,...o});if(r.length===0){const o={mountain:["chaparral"],chaparral:["mountain","coastal"],desert:["chaparral"],coastal:["urban","chaparral"],urban:["coastal","chaparral"]}[s]||[];for(const l of o){for(const[c,h]of Object.entries(eh))t>=h.altMin&&t<=h.altMax&&h.biome===l&&r.push({name:c,...h});if(r.length>0)break}}return r}isWaterArea(t,e){return nu.isOverWater(t,e)}generateTreesForCell(t,e,n,s,r){const a=`${t},${e}`;if(this.activeCells.has(a))return;const o=t*sn.cellSize,l=e*sn.cellSize,c=111320,h=111320*Math.cos(Se.degToRad(s)),u=n+o/h,d=s+l/c;if(this.isWaterArea(u,d)){this.activeCells.set(a,[]);return}const f=Cesium.Cartographic.fromDegrees(u,d),g=this.viewer.scene.globe.getHeight(f);if(g==null)return;const x=g,m=this.getSpeciesForPosition(x,u,d);if(m.length===0){this.activeCells.set(a,[]);return}xi(t,e);const p=[],S=3;for(let b=0;b<S;b++)for(let w=0;w<S;w++){const M=xi(t*100+b,e*100+w),C=Math.floor(M*m.length)%m.length,A=m[C];if(xi(t*200+b,e*200+w)>A.density)continue;const D=xi(t*300+b,e*300+w)*.8,v=xi(t*400+b,e*400+w)*.8,y=o+(b+D)*(sn.cellSize/S),P=l+(w+v)*(sn.cellSize/S),I=.7+xi(t*500+b,e*500+w)*.6;p.push({x:y,z:P,terrainHeight:g,species:A,sizeScale:I})}this.activeCells.set(a,p)}update(t,e){if(!this.initialized)return;const n=Date.now();if(n-this.lastUpdateTime<sn.updateInterval)return;this.lastUpdateTime=n;const s=e.lon,r=e.lat,a=e.alt;if(a>5e3){this.trunkInstances.count=0,this.crownInstances.count=0;return}const o=Math.min(sn.renderDistance,Math.max(400,a*1.5)),l=Math.ceil(o/sn.cellSize),c=l+2;for(const[m,p]of this.activeCells){const[S,b]=m.split(",").map(Number);(Math.abs(S)>c||Math.abs(b)>c)&&this.activeCells.delete(m)}for(let m=-l;m<=l;m++)for(let p=-l;p<=l;p++)Math.sqrt(m*m+p*p)*sn.cellSize>o||this.generateTreesForCell(m,p,s,r,a);let h=0;const u=new ee,d=new L,f=new qe,g=new L,x=new zt;for(const[m,p]of this.activeCells){for(const S of p){if(h>=sn.maxTrees)break;const b=Math.sqrt(S.x*S.x+S.z*S.z);if(b>o)continue;const w=b>sn.lodFar?.7:b>sn.lodNear?.85:1,M=S.species,C=S.sizeScale*w,A=S.terrainHeight-a;d.set(S.x,A,S.z),g.set(M.trunkRadius*C*2,M.trunkHeight*C,M.trunkRadius*C*2),u.compose(d,f,g),this.trunkInstances.setMatrixAt(h,u),x.setHex(M.trunkColor);const D=.8+xi(Math.floor(S.x),Math.floor(S.z))*.4;x.multiplyScalar(D),this.trunkInstances.setColorAt(h,x),d.set(S.x,A+M.trunkHeight*C*.7,S.z),g.set(M.crownRadius*C*2,M.crownHeight*C,M.crownRadius*C*2),u.compose(d,f,g),this.crownInstances.setMatrixAt(h,u),x.setHex(M.crownColor);const v=.7+xi(Math.floor(S.x)+1e3,Math.floor(S.z)+1e3)*.6;x.multiplyScalar(v),this.crownInstances.setColorAt(h,x),h++}if(h>=sn.maxTrees)break}this.trunkInstances.count=h,this.crownInstances.count=h,h>0&&(this.trunkInstances.instanceMatrix.needsUpdate=!0,this.crownInstances.instanceMatrix.needsUpdate=!0,this.trunkInstances.instanceColor&&(this.trunkInstances.instanceColor.needsUpdate=!0),this.crownInstances.instanceColor&&(this.crownInstances.instanceColor.needsUpdate=!0)),this.lastUpdatePos={lon:s,lat:r}}clear(){this.activeCells.clear(),this.trunkInstances.count=0,this.crownInstances.count=0}dispose(){this.trunkInstances&&(this.scene.remove(this.trunkInstances),this.trunkInstances.dispose()),this.crownInstances&&(this.scene.remove(this.crownInstances),this.crownInstances.dispose()),this.trunkGeometry&&this.trunkGeometry.dispose();for(const t of Object.values(this.crownGeometries))t.dispose()}}const h_=[{name:"Big Bear Ski Resort",description:"Snow Summit & Bear Mountain ski area",lon:-116.8595,lat:34.2272,elevation:2400,structures:[{type:"lodge",width:40,depth:25,height:12,color:9136404,roofColor:4861952},{type:"lodge",width:30,depth:20,height:10,color:9136404,roofColor:4861952,offsetX:60,offsetZ:20},{type:"tower",width:4,depth:4,height:25,color:8947848,offsetX:-30,offsetZ:-20},{type:"tower",width:4,depth:4,height:25,color:8947848,offsetX:-30,offsetZ:40},{type:"tower",width:4,depth:4,height:25,color:8947848,offsetX:-30,offsetZ:100},{type:"tower",width:4,depth:4,height:25,color:8947848,offsetX:-30,offsetZ:160},{type:"flat",width:80,depth:60,height:.3,color:3355443,offsetX:80,offsetZ:-30}],labelOffset:30},{name:"Las Vegas Strip",description:"The famous Las Vegas Boulevard casino strip",lon:-115.1728,lat:36.1147,elevation:610,structures:[{type:"pyramid",width:100,depth:100,height:110,color:1710618,offsetX:0,offsetZ:-200},{type:"skyscraper",width:60,depth:40,height:145,color:12887636,offsetX:-80,offsetZ:-350},{type:"skyscraper",width:80,depth:35,height:155,color:15260872,offsetX:0,offsetZ:100},{type:"skyscraper",width:70,depth:50,height:120,color:16117984,offsetX:60,offsetZ:250},{type:"curved_tower",width:50,depth:50,height:190,color:9127187,offsetX:-50,offsetZ:500},{type:"tower",width:12,depth:12,height:350,color:13421772,offsetX:0,offsetZ:900},{type:"skyscraper",width:90,depth:70,height:90,color:25600,offsetX:100,offsetZ:-100},{type:"skyscraper",width:55,depth:40,height:180,color:4620980,offsetX:30,offsetZ:0},{type:"skyscraper",width:45,depth:35,height:185,color:7372944,offsetX:-40,offsetZ:50},{type:"skyscraper",width:60,depth:45,height:145,color:14596231,offsetX:40,offsetZ:400},{type:"tower",width:8,depth:8,height:165,color:6908265,offsetX:50,offsetZ:150},{type:"flat",width:35,depth:1400,height:.5,color:2236962,offsetX:0,offsetZ:200}],labelOffset:360},{name:"Hollywood Hills",description:"Hollywood Sign and surrounding hills",lon:-118.3215,lat:34.1341,elevation:480,structures:[{type:"sign_letter",width:3,depth:1,height:14,color:16777215,offsetX:-50,offsetZ:0},{type:"sign_letter",width:3,depth:1,height:14,color:16777215,offsetX:-38,offsetZ:0},{type:"sign_letter",width:3,depth:1,height:14,color:16777215,offsetX:-26,offsetZ:0},{type:"sign_letter",width:3,depth:1,height:14,color:16777215,offsetX:-14,offsetZ:0},{type:"sign_letter",width:3,depth:1,height:14,color:16777215,offsetX:-2,offsetZ:0},{type:"sign_letter",width:3,depth:1,height:14,color:16777215,offsetX:10,offsetZ:0},{type:"sign_letter",width:3,depth:1,height:14,color:16777215,offsetX:22,offsetZ:0},{type:"sign_letter",width:3,depth:1,height:14,color:16777215,offsetX:34,offsetZ:0},{type:"sign_letter",width:3,depth:1,height:14,color:16777215,offsetX:46,offsetZ:0},{type:"dome",width:20,depth:20,height:15,color:15260872,offsetX:200,offsetZ:-300},{type:"box",width:40,depth:30,height:8,color:15260872,offsetX:200,offsetZ:-300}],labelOffset:20},{name:"Twentynine Palms",description:"Marine Corps Air Ground Combat Center",lon:-116.0542,lat:34.1356,elevation:600,structures:[{type:"military_building",width:60,depth:30,height:8,color:12759680,offsetX:0,offsetZ:0},{type:"military_building",width:40,depth:25,height:6,color:12759680,offsetX:80,offsetZ:30},{type:"military_building",width:50,depth:20,height:7,color:12759680,offsetX:-70,offsetZ:50},{type:"hangar",width:50,depth:40,height:15,color:8421504,offsetX:0,offsetZ:-100},{type:"hangar",width:50,depth:40,height:15,color:8421504,offsetX:70,offsetZ:-100},{type:"flat",width:45,depth:2500,height:.3,color:2763306,offsetX:200,offsetZ:0},{type:"tower",width:8,depth:8,height:25,color:8421504,offsetX:150,offsetZ:-50},{type:"box",width:30,depth:12,height:5,color:12759680,offsetX:-150,offsetZ:-30},{type:"box",width:30,depth:12,height:5,color:12759680,offsetX:-150,offsetZ:-60},{type:"box",width:30,depth:12,height:5,color:12759680,offsetX:-150,offsetZ:-90}],labelOffset:30},{name:"Fort Irwin NTC",description:"National Training Center - US Army desert warfare training",lon:-116.6833,lat:35.2628,elevation:730,structures:[{type:"military_building",width:80,depth:40,height:10,color:12759680,offsetX:0,offsetZ:0},{type:"military_building",width:60,depth:30,height:8,color:12759680,offsetX:100,offsetZ:40},{type:"flat",width:200,depth:150,height:.3,color:11047024,offsetX:-200,offsetZ:0},{type:"hangar",width:60,depth:50,height:18,color:7368816,offsetX:0,offsetZ:-150},{type:"hangar",width:60,depth:50,height:18,color:7368816,offsetX:80,offsetZ:-150},{type:"box",width:40,depth:15,height:6,color:12759680,offsetX:-100,offsetZ:80},{type:"box",width:40,depth:15,height:6,color:12759680,offsetX:-100,offsetZ:110},{type:"box",width:40,depth:15,height:6,color:12759680,offsetX:-100,offsetZ:140},{type:"tower",width:5,depth:5,height:40,color:11184810,offsetX:150,offsetZ:-80},{type:"water_tower",width:10,depth:10,height:30,color:13421772,offsetX:180,offsetZ:50}],labelOffset:45},{name:"Reagan Presidential Library",description:"Ronald Reagan Presidential Library & Museum, Simi Valley",lon:-118.82,lat:34.2597,elevation:470,structures:[{type:"box",width:70,depth:50,height:12,color:16115404,offsetX:0,offsetZ:0},{type:"box",width:30,depth:60,height:10,color:16115404,offsetX:-50,offsetZ:10},{type:"hangar",width:60,depth:80,height:22,color:14538176,offsetX:80,offsetZ:-50},{type:"flat",width:40,depth:40,height:.2,color:13808780,offsetX:0,offsetZ:60},{type:"tower",width:6,depth:6,height:18,color:16115404,offsetX:-20,offsetZ:-30},{type:"flat",width:100,depth:60,height:.3,color:3355443,offsetX:-100,offsetZ:-60}],labelOffset:25},{name:"Rose Bowl",description:"Rose Bowl Stadium, Pasadena",lon:-118.1676,lat:34.1613,elevation:260,structures:[{type:"stadium",width:200,depth:150,height:25,color:11047024,offsetX:0,offsetZ:0},{type:"flat",width:110,depth:75,height:.5,color:2263842,offsetX:0,offsetZ:0},{type:"flat",width:200,depth:100,height:.3,color:3355443,offsetX:0,offsetZ:-140},{type:"flat",width:150,depth:100,height:.3,color:3355443,offsetX:200,offsetZ:0}],labelOffset:30}],bn={};function ds(){return bn.box||(bn.box=new se(1,1,1)),bn.box}function u_(){return bn.cone||(bn.cone=new tn(.5,1,4)),bn.cone}function Gs(){return bn.cylinder||(bn.cylinder=new Ye(.5,.5,1,8)),bn.cylinder}function nh(){return bn.sphere||(bn.sphere=new te(.5,8,6)),bn.sphere}function d_(i){const t=new Pe,e=new Qt({color:i.color,flatShading:!0});switch(i.type){case"box":case"military_building":case"sign_letter":case"lodge":{const n=new j(ds(),e);if(n.scale.set(i.width,i.height,i.depth),n.position.y=i.height/2,t.add(n),i.type==="lodge"&&i.roofColor){const s=new Qt({color:i.roofColor,flatShading:!0}),r=new j(u_(),s);r.scale.set(i.width*1.1,i.height*.5,i.depth*1.1),r.position.y=i.height+i.height*.25,t.add(r)}break}case"skyscraper":case"curved_tower":{const n=new j(ds(),e);n.scale.set(i.width,i.height,i.depth),n.position.y=i.height/2,t.add(n);const s=new Qt({color:8956620,transparent:!0,opacity:.4});for(let r=0;r<5;r++){const a=new j(ds(),s),o=i.height*.15+i.height*.7*r/5;a.scale.set(i.width+.5,i.height*.08,i.depth+.5),a.position.y=o,t.add(a)}break}case"tower":{const n=new j(Gs(),e);n.scale.set(i.width,i.height,i.depth),n.position.y=i.height/2,t.add(n);const s=new Qt({color:11184810}),r=new j(Gs(),s);r.scale.set(i.width*2,2,i.depth*2),r.position.y=i.height,t.add(r);break}case"water_tower":{const n=new Qt({color:8947848});for(let r=0;r<4;r++){const a=new j(Gs(),n),o=r/4*Math.PI*2;a.scale.set(1,i.height*.7,1),a.position.set(Math.cos(o)*3,i.height*.35,Math.sin(o)*3),t.add(a)}const s=new j(nh(),e);s.scale.set(i.width,i.width*.6,i.depth),s.position.y=i.height*.75,t.add(s);break}case"pyramid":{const n=new tn(.707,1,4);n.rotateY(Math.PI/4);const s=new j(n,e);s.scale.set(i.width,i.height,i.depth),s.position.y=i.height/2,t.add(s);const r=new ke({color:16777096,transparent:!0,opacity:.15}),a=new j(Gs(),r);a.scale.set(3,500,3),a.position.y=i.height+250,t.add(a);break}case"dome":{const n=new j(nh(),e);n.scale.set(i.width,i.height,i.depth),n.position.y=i.height/2,t.add(n);break}case"hangar":{const n=new j(ds(),e);n.scale.set(i.width,i.height,i.depth),n.position.y=i.height/2,t.add(n);const s=new Qt({color:i.color,flatShading:!0}),r=new j(Gs(),s);r.scale.set(i.width,i.depth,i.width*.3),r.rotation.z=Math.PI/2,r.position.y=i.height,t.add(r);break}case"stadium":{const n=new Qt({color:i.color,flatShading:!0}),s=32,r=i.width/2,a=i.depth/2,o=15;for(let l=0;l<s;l++){const c=l/s*Math.PI*2,h=Math.cos(c)*r,u=Math.sin(c)*a,d=new j(ds(),n);d.scale.set(o,i.height,o),d.position.set(h,i.height/2,u),d.lookAt(0,i.height/2,0),t.add(d)}break}default:{const n=new j(ds(),e);n.scale.set(i.width,i.height||.5,i.depth),n.position.y=(i.height||.5)/2,t.add(n);break}}return t.position.set(i.offsetX||0,0,i.offsetZ||0),t.traverse(n=>{n.layers.set(0)}),t}class f_{constructor(t,e){this.viewer=t,this.scene=e,this.landmarkGroups=[],this.initialized=!1,this.init()}init(){for(const t of h_){const e=new Pe;e.visible=!1;for(const n of t.structures){const s=d_(n);e.add(s)}e.traverse(n=>{n.layers.set(0)}),this.scene.add(e),this.landmarkGroups.push({group:e,landmark:t,visible:!1})}this.initialized=!0}update(t,e){if(!this.initialized)return;const n=e.lon,s=e.lat,a=e.alt*.3048,o=111320,l=111320*Math.cos(Se.degToRad(s));for(const c of this.landmarkGroups){const h=c.landmark,u=(h.lon-n)*l,d=(h.lat-s)*o,f=Math.sqrt(u*u+d*d),g=Math.max(5e3,a*8),x=f<g;if(c.group.visible=x,x){const m=h.elevation-a;c.group.position.set(u,m,-d);const p=f>3e3?1+(f-3e3)/2e4:1;c.group.scale.setScalar(p)}}}dispose(){for(const t of this.landmarkGroups)this.scene.remove(t.group),t.group.traverse(e=>{e.geometry&&e.geometry.dispose(),e.material&&e.material.dispose()});this.landmarkGroups=[]}}const p_=[{name:"Los Angeles",lon:-118.2437,lat:34.0522,elevation:90,radius:5e3,density:.7,minHeight:5,maxHeight:280,downtownRadius:1500,style:"modern",gridSize:30},{name:"Downtown LA",lon:-118.2468,lat:34.0407,elevation:90,radius:1200,density:.9,minHeight:30,maxHeight:310,downtownRadius:600,style:"modern",gridSize:25},{name:"Las Vegas (City)",lon:-115.1398,lat:36.1699,elevation:610,radius:4e3,density:.6,minHeight:5,maxHeight:100,downtownRadius:1e3,style:"modern",gridSize:30},{name:"San Diego",lon:-117.1611,lat:32.7157,elevation:20,radius:3500,density:.65,minHeight:5,maxHeight:150,downtownRadius:800,style:"modern",gridSize:28},{name:"Phoenix",lon:-112.074,lat:33.4484,elevation:340,radius:5e3,density:.5,minHeight:5,maxHeight:130,downtownRadius:1e3,style:"modern",gridSize:35},{name:"Long Beach",lon:-118.1937,lat:33.7701,elevation:10,radius:2e3,density:.6,minHeight:5,maxHeight:90,downtownRadius:500,style:"modern",gridSize:28},{name:"Riverside",lon:-117.3755,lat:33.9806,elevation:260,radius:1800,density:.45,minHeight:5,maxHeight:50,downtownRadius:400,style:"suburban",gridSize:35},{name:"San Bernardino",lon:-117.2898,lat:34.1083,elevation:330,radius:1500,density:.4,minHeight:5,maxHeight:40,downtownRadius:400,style:"suburban",gridSize:35},{name:"Bakersfield",lon:-119.0187,lat:35.3733,elevation:120,radius:2e3,density:.4,minHeight:4,maxHeight:40,downtownRadius:500,style:"suburban",gridSize:35},{name:"Palm Springs",lon:-116.5453,lat:33.8303,elevation:150,radius:1200,density:.35,minHeight:4,maxHeight:30,downtownRadius:300,style:"resort",gridSize:40},{name:"Santa Barbara",lon:-119.6982,lat:34.4208,elevation:15,radius:1500,density:.5,minHeight:4,maxHeight:30,downtownRadius:400,style:"spanish",gridSize:30},{name:"Pasadena",lon:-118.1445,lat:34.1478,elevation:260,radius:1200,density:.5,minHeight:5,maxHeight:50,downtownRadius:400,style:"modern",gridSize:30},{name:"Glendale",lon:-118.2551,lat:34.1425,elevation:180,radius:1e3,density:.55,minHeight:5,maxHeight:70,downtownRadius:400,style:"modern",gridSize:28},{name:"Burbank",lon:-118.309,lat:34.1808,elevation:180,radius:1e3,density:.5,minHeight:5,maxHeight:50,downtownRadius:400,style:"modern",gridSize:30},{name:"Tucson",lon:-110.9747,lat:32.2226,elevation:730,radius:2500,density:.4,minHeight:4,maxHeight:60,downtownRadius:600,style:"desert",gridSize:35},{name:"Henderson",lon:-114.9817,lat:36.0395,elevation:590,radius:1500,density:.4,minHeight:4,maxHeight:30,downtownRadius:400,style:"suburban",gridSize:35},{name:"Anaheim",lon:-117.9145,lat:33.8366,elevation:50,radius:1500,density:.55,minHeight:5,maxHeight:50,downtownRadius:500,style:"modern",gridSize:30},{name:"Irvine",lon:-117.8265,lat:33.6846,elevation:25,radius:1500,density:.5,minHeight:5,maxHeight:50,downtownRadius:400,style:"modern",gridSize:30},{name:"Oxnard",lon:-119.1771,lat:34.1975,elevation:15,radius:1e3,density:.4,minHeight:4,maxHeight:25,downtownRadius:300,style:"suburban",gridSize:35},{name:"Fresno",lon:-119.7871,lat:36.7378,elevation:93,radius:2e3,density:.45,minHeight:4,maxHeight:50,downtownRadius:500,style:"suburban",gridSize:35}],ih={modern:[8952234,6715306,10070715,11189196,5596791,7833753,4478310,12307677],suburban:[14535850,13417369,12298888,15654331,13154454,12562317],resort:[16115404,15259061,16772560,15785664,14732464],spanish:[15255712,13936757,15784120,13408614,12290133],desert:[13808780,13151615,12560514,13940886,13411952]};function Pn(i,t){let e=i*73856093^t*19349663;return e=(e>>16^e)*73244475,e=(e>>16^e)*73244475,e=e>>16^e,(e&2147483647)/2147483647}const fs=5e3;class m_{constructor(t,e){this.viewer=t,this.scene=e,this.buildingInstances=null,this.windowInstances=null,this.rooftopInstances=null,this.generatedCities=new Map,this.activeCities=[],this.lastUpdateTime=0,this.initialized=!1,this.init()}init(){const t=new se(1,1,1);t.translate(0,.5,0);const e=new Qt({color:8952234,flatShading:!0});this.buildingInstances=new Si(t,e,fs),this.buildingInstances.count=0,this.buildingInstances.frustumCulled=!1,this.buildingInstances.layers.set(0),this.scene.add(this.buildingInstances);const n=new se(1,1,1);n.translate(0,.5,0);const s=new ke({color:16772778,transparent:!0,opacity:.35});this.windowInstances=new Si(n,s,fs),this.windowInstances.count=0,this.windowInstances.frustumCulled=!1,this.windowInstances.layers.set(0),this.scene.add(this.windowInstances);const r=new se(1,1,1);r.translate(0,.5,0);const a=new Qt({color:6710886,flatShading:!0});this.rooftopInstances=new Si(r,a,2e3),this.rooftopInstances.count=0,this.rooftopInstances.frustumCulled=!1,this.rooftopInstances.layers.set(0),this.scene.add(this.rooftopInstances);for(const o of p_)this.generateCity(o);this.initialized=!0}generateCity(t){const e=[],n=Math.ceil(t.radius/t.gridSize),s=ih[t.style]||ih.modern;for(let r=-n;r<=n;r++)for(let a=-n;a<=n;a++){const o=r*t.gridSize,l=a*t.gridSize,c=Math.sqrt(o*o+l*l);if(c>t.radius)continue;const h=Pn(r+t.lon*1e4,a+t.lat*1e4);if(h>t.density)continue;const u=t.style==="modern"?4:5;if(r%u===0||a%u===0)continue;1-Math.min(1,c/t.radius);const d=c<t.downtownRadius?1-c/t.downtownRadius*.5:.3*(1-(c-t.downtownRadius)/(t.radius-t.downtownRadius)),f=Pn(r*200+t.lon*5e3,a*200+t.lat*5e3),g=t.minHeight+(t.maxHeight-t.minHeight)*d*f,x=Math.max(t.minHeight,g),m=Pn(r*300,a*300),p=t.gridSize*.4+m*t.gridSize*.4,S=t.gridSize*.4+Pn(r*400,a*400)*t.gridSize*.4,b=Math.floor(Pn(r*500,a*500)*s.length)%s.length,w=x>30,M=x>80&&Pn(r*700,a*700)>.6,C=Math.max(1,Math.floor(x/4)),A=x>60&&Pn(r*800,a*800)>.5;e.push({x:o+(h-.5)*t.gridSize*.3,z:l+(Pn(r*600,a*600)-.5)*t.gridSize*.3,width:p,depth:S,height:x,color:s[b],hasRooftopDetail:w,hasAntenna:M,windowRows:C,hasSetback:A,setbackHeight:A?x*(.6+Pn(r*900,a*900)*.3):0,setbackInset:A?.7:1})}this.generatedCities.set(t.name,{city:t,buildings:e})}update(t,e){if(!this.initialized)return;const n=Date.now();if(n-this.lastUpdateTime<300)return;this.lastUpdateTime=n;const s=e.lon,r=e.lat,o=e.alt*.3048,l=111320,c=111320*Math.cos(Se.degToRad(r)),h=Math.max(8e3,o*10),u=new ee,d=new L,f=new qe,g=new L,x=new zt;let m=0,p=0,S=0;for(const[b,{city:w,buildings:M}]of this.generatedCities){const C=(w.lon-s)*c,A=(w.lat-r)*l;if(Math.sqrt(C*C+A*A)>h+w.radius)continue;const v=w.elevation-o;for(const y of M){if(m>=fs)break;const P=C+y.x,I=-A-y.z,F=Math.sqrt(P*P+I*I);if(F>h)continue;let B=y.height;if(F>h*.7&&B<20)continue;d.set(P,v,I),g.set(y.width,B,y.depth),u.compose(d,f,g),this.buildingInstances.setMatrixAt(m,u),x.setHex(y.color);const k=.85+Pn(Math.floor(y.x*7),Math.floor(y.z*7))*.3;if(x.multiplyScalar(k),this.buildingInstances.setColorAt(m,x),F<h*.5&&p<fs&&B>10){const H=B*.8;d.set(P,v+B*.1,I),g.set(y.width+.3,H,y.depth+.3),u.compose(d,f,g),this.windowInstances.setMatrixAt(p,u);const z=Pn(Math.floor(y.x*3),Math.floor(y.z*3))>.5?16772778:11197951;x.setHex(z),this.windowInstances.setColorAt(p,x),p++}if(F<h*.3&&S<2e3&&y.hasRooftopDetail&&(d.set(P+y.width*.2,v+B,I),g.set(y.width*.3,3,y.depth*.3),u.compose(d,f,g),this.rooftopInstances.setMatrixAt(S,u),x.setHex(5592405),this.rooftopInstances.setColorAt(S,x),S++,y.hasAntenna&&S<2e3&&(d.set(P,v+B,I),g.set(.5,B*.15,.5),u.compose(d,f,g),this.rooftopInstances.setMatrixAt(S,u),x.setHex(13369344),this.rooftopInstances.setColorAt(S,x),S++)),y.hasSetback&&m<fs-1){m++;const H=B-y.setbackHeight;d.set(P,v+y.setbackHeight,I),g.set(y.width*y.setbackInset,H,y.depth*y.setbackInset),u.compose(d,f,g),this.buildingInstances.setMatrixAt(m,u),x.setHex(y.color),x.multiplyScalar(k*1.1),this.buildingInstances.setColorAt(m,x)}m++}if(m>=fs)break}this.buildingInstances.count=m,this.windowInstances.count=p,this.rooftopInstances.count=S,m>0&&(this.buildingInstances.instanceMatrix.needsUpdate=!0,this.buildingInstances.instanceColor&&(this.buildingInstances.instanceColor.needsUpdate=!0)),p>0&&(this.windowInstances.instanceMatrix.needsUpdate=!0,this.windowInstances.instanceColor&&(this.windowInstances.instanceColor.needsUpdate=!0)),S>0&&(this.rooftopInstances.instanceMatrix.needsUpdate=!0,this.rooftopInstances.instanceColor&&(this.rooftopInstances.instanceColor.needsUpdate=!0))}dispose(){[this.buildingInstances,this.windowInstances,this.rooftopInstances].forEach(t=>{t&&(this.scene.remove(t),t.dispose())})}}const g_=[{name:"I-15 (LA to Vegas)",lanes:4,vehicleDensity:.8,waypoints:[{lon:-118.26,lat:34.05},{lon:-117.91,lat:34.13},{lon:-117.39,lat:34.17},{lon:-117.29,lat:34.38},{lon:-117,lat:34.83},{lon:-116.17,lat:35.26},{lon:-115.55,lat:35.6},{lon:-115.17,lat:36.08},{lon:-115.14,lat:36.17}]},{name:"I-10 (LA to Phoenix)",lanes:4,vehicleDensity:.7,waypoints:[{lon:-118.24,lat:34.04},{lon:-117.88,lat:34},{lon:-117.38,lat:33.98},{lon:-116.97,lat:33.93},{lon:-116.54,lat:33.83},{lon:-115.5,lat:33.72},{lon:-114.57,lat:33.42},{lon:-113.5,lat:33.45},{lon:-112.07,lat:33.45}]},{name:"I-5 (LA to Bakersfield)",lanes:3,vehicleDensity:.6,waypoints:[{lon:-118.24,lat:34.05},{lon:-118.38,lat:34.19},{lon:-118.53,lat:34.39},{lon:-118.73,lat:34.74},{lon:-118.94,lat:34.97},{lon:-119.02,lat:35.37}]},{name:"SR-18/138 (Big Bear Highway)",lanes:1,vehicleDensity:.3,waypoints:[{lon:-117.29,lat:34.25},{lon:-117.09,lat:34.25},{lon:-116.94,lat:34.24},{lon:-116.86,lat:34.24},{lon:-116.78,lat:34.26}]},{name:"I-405 (LA)",lanes:5,vehicleDensity:.9,waypoints:[{lon:-118.37,lat:33.79},{lon:-118.39,lat:33.94},{lon:-118.43,lat:34.02},{lon:-118.47,lat:34.08},{lon:-118.49,lat:34.17},{lon:-118.47,lat:34.23}]},{name:"US-95 (Vegas to NV)",lanes:2,vehicleDensity:.4,waypoints:[{lon:-115.14,lat:36.17},{lon:-115.12,lat:36.3},{lon:-115.14,lat:36.5},{lon:-115.32,lat:36.78}]},{name:"SR-62 (29 Palms Hwy)",lanes:1,vehicleDensity:.2,waypoints:[{lon:-116.54,lat:34.05},{lon:-116.28,lat:34.07},{lon:-116.05,lat:34.14},{lon:-115.75,lat:34.25}]}],x_=[{name:"Big Bear Lake",centerLon:-116.905,centerLat:34.244,radiusM:4e3,count:8,elevation:2060},{name:"Lake Arrowhead",centerLon:-117.189,centerLat:34.258,radiusM:800,count:4,elevation:1572},{name:"Silverwood Lake",centerLon:-117.333,centerLat:34.294,radiusM:1200,count:3,elevation:1050},{name:"San Diego Bay",centerLon:-117.175,centerLat:32.685,radiusM:3e3,count:12,elevation:0},{name:"Long Beach Harbor",centerLon:-118.19,centerLat:33.74,radiusM:4e3,count:15,elevation:0},{name:"Lake Mead (edge)",centerLon:-114.78,centerLat:36.02,radiusM:5e3,count:6,elevation:372}],__=[{name:"LAX Approach",startLon:-119.5,startLat:33.8,endLon:-118.41,endLat:33.94,altitude:3e3,count:3,speed:130},{name:"LAX Departure N",startLon:-118.41,startLat:33.94,endLon:-118.8,endLat:34.8,altitude:8e3,count:2,speed:200},{name:"Vegas Approach S",startLon:-115.5,startLat:35.5,endLon:-115.15,endLat:36.08,altitude:4e3,count:2,speed:140},{name:"Phoenix Route",startLon:-118,startLat:34,endLon:-112,endLat:33.5,altitude:11e3,count:2,speed:250},{name:"SF-SD Corridor",startLon:-118.5,startLat:35.5,endLon:-117.2,endLat:32.7,altitude:1e4,count:2,speed:240},{name:"Military (Edwards)",startLon:-117.9,startLat:34.9,endLon:-116.7,endLat:35.3,altitude:5e3,count:1,speed:300},{name:"SoCal Helicopters",startLon:-118.3,startLat:34,endLon:-117.8,endLat:34.1,altitude:500,count:3,speed:60}];function Je(i,t){let e=i*73856093^t*19349663;return e=(e>>16^e)*73244475,e=(e>>16^e)*73244475,e=e>>16^e,(e&2147483647)/2147483647}const eo=800,no=80,io=20;class v_{constructor(t,e){this.viewer=t,this.scene=e,this.vehicleInstances=null,this.boatInstances=null,this.aircraftInstances=null,this.vehicles=[],this.boats=[],this.aircraft=[],this.lastUpdateTime=0,this.time=0,this.initialized=!1,this.init()}init(){const t=new se(1,1,1);t.translate(0,.5,0);const e=new Qt({color:13421772,flatShading:!0});this.vehicleInstances=new Si(t,e,eo),this.vehicleInstances.count=0,this.vehicleInstances.frustumCulled=!1,this.vehicleInstances.layers.set(0),this.scene.add(this.vehicleInstances);const n=new se(1,1,1);n.translate(0,.5,0);const s=new Qt({color:16777215,flatShading:!0});this.boatInstances=new Si(n,s,no),this.boatInstances.count=0,this.boatInstances.frustumCulled=!1,this.boatInstances.layers.set(0),this.scene.add(this.boatInstances);const r=new se(1,1,1);r.translate(0,.5,0);const a=new Qt({color:15658734,flatShading:!0});this.aircraftInstances=new Si(r,a,io),this.aircraftInstances.count=0,this.aircraftInstances.frustumCulled=!1,this.aircraftInstances.layers.set(0),this.scene.add(this.aircraftInstances),this.spawnVehicles(),this.spawnBoats(),this.spawnAircraft(),this.initialized=!0}spawnVehicles(){for(const t of g_){const e=t.waypoints;for(let n=0;n<e.length-1;n++){const s=e[n],r=e[n+1],a=Math.sqrt((r.lon-s.lon)**2+(r.lat-s.lat)**2),o=Math.floor(a*500*t.vehicleDensity*t.lanes);for(let l=0;l<o&&!(this.vehicles.length>=eo);l++){const c=Je(n*100+l,this.vehicles.length),h=s.lon+(r.lon-s.lon)*c,u=s.lat+(r.lat-s.lat)*c,f=(Math.floor(Je(l*3,n*7)*t.lanes)-t.lanes/2)*3e-5,g=Math.atan2(r.lon-s.lon,r.lat-s.lat),x=Math.cos(g)*f,m=-Math.sin(g)*f,p=25+Je(l*5,n*3)*15,S=Je(l*9,n*11)<.15,M=S?[16777215,14540253,4473924,16763904,26316]:[13369344,17578,3355443,16777215,8947848,13421772,17408,2236962,11167232,6684672],C=M[Math.floor(Je(l*13,n*17)*M.length)];this.vehicles.push({lon:h+x,lat:u+m,speed:S?p*.7:p,heading:g,segIdx:n,segT:c,highway:t,isTruck:S,color:C,width:S?2.5:1.8,height:S?4:1.5,length:S?12:4.5,direction:Je(l*19,n*23)>.5?1:-1})}}}}spawnBoats(){for(const t of x_)for(let e=0;e<t.count&&!(this.boats.length>=no);e++){const n=Je(e*7,this.boats.length*13)*Math.PI*2,s=Je(e*11,this.boats.length*17)*.7,r=111320,a=111320*Math.cos(t.centerLat*Math.PI/180),o=Je(e*23,this.boats.length*29)<.2,l=!o&&Je(e*31,this.boats.length*37)<.3;this.boats.push({lon:t.centerLon+Math.cos(n)*s*t.radiusM/a,lat:t.centerLat+Math.sin(n)*s*t.radiusM/r,elevation:t.elevation,speed:o?3:l?2:5,heading:Je(e*41,this.boats.length*43)*Math.PI*2,turnRate:(Je(e*47,this.boats.length*53)-.5)*.3,isLarge:o,isSailboat:l,width:o?15:l?3:4,height:o?8:l?6:2,length:o?40:l?8:6,color:o?3359829:l?16777215:14540253,area:t})}}spawnAircraft(){for(const t of __)for(let e=0;e<t.count&&!(this.aircraft.length>=io);e++){const n=Je(e*7,this.aircraft.length*11),s=t.startLon+(t.endLon-t.startLon)*n,r=t.startLat+(t.endLat-t.startLat)*n,a=t.altitude<1e3,o=t.speed>250;this.aircraft.push({lon:s,lat:r,altitude:t.altitude+(Je(e*13,this.aircraft.length*17)-.5)*500,speed:t.speed+(Je(e*19,this.aircraft.length*23)-.5)*20,heading:Math.atan2(t.endLon-t.startLon,t.endLat-t.startLat),corridor:t,t:n,direction:1,isHelicopter:a,isJet:o,width:a?8:o?12:35,height:a?4:o?5:12,length:a?12:o?15:60,color:a?4473924:o?8947848:16448250})}}update(t,e){if(!this.initialized)return;this.time+=t;const n=e.lon,s=e.lat,a=e.alt*.3048,o=111320,l=111320*Math.cos(Se.degToRad(s)),c=new ee,h=new L,u=new qe,d=new L,f=new zt,g=new Fe,x=Math.max(3e3,a*5);let m=0;for(const M of this.vehicles){const C=M.highway.waypoints,A=C[M.segIdx],D=C[M.segIdx+1];if(!A||!D)continue;M.segT+=M.direction*M.speed*t/(111320*Math.sqrt((D.lon-A.lon)**2+(D.lat-A.lat)**2)),M.segT>1?(M.segT=0,M.segIdx=Math.min(M.segIdx+1,C.length-2),M.segIdx>=C.length-2&&(M.segIdx=0,M.direction=1)):M.segT<0&&(M.segT=1,M.segIdx=Math.max(M.segIdx-1,0),M.segIdx<=0&&(M.segIdx=C.length-2,M.direction=-1));const v=C[M.segIdx],y=C[M.segIdx+1];if(!v||!y)continue;M.lon=v.lon+(y.lon-v.lon)*M.segT,M.lat=v.lat+(y.lat-v.lat)*M.segT;const P=(M.lon-n)*l,I=(M.lat-s)*o;if(Math.sqrt(P*P+I*I)>x||m>=eo)continue;const B=-a;h.set(P,B,-I),g.set(0,M.heading,0),u.setFromEuler(g),d.set(M.width,M.height,M.length),c.compose(h,u,d),this.vehicleInstances.setMatrixAt(m,c),f.setHex(M.color),this.vehicleInstances.setColorAt(m,f),m++}this.vehicleInstances.count=m,m>0&&(this.vehicleInstances.instanceMatrix.needsUpdate=!0,this.vehicleInstances.instanceColor&&(this.vehicleInstances.instanceColor.needsUpdate=!0));const p=Math.max(5e3,a*6);let S=0;for(const M of this.boats){M.heading+=M.turnRate*t;const C=111320*Math.cos(M.lat*Math.PI/180);M.lon+=Math.sin(M.heading)*M.speed*t/C,M.lat+=Math.cos(M.heading)*M.speed*t/o;const A=(M.lon-M.area.centerLon)*C,D=(M.lat-M.area.centerLat)*o;if(Math.sqrt(A*A+D*D)>M.area.radiusM*.8){const k=Math.atan2(M.area.centerLon-M.lon,M.area.centerLat-M.lat);M.heading+=(k-M.heading)*t*2}const y=(M.lon-n)*l,P=(M.lat-s)*o;if(Math.sqrt(y*y+P*P)>p||S>=no)continue;const F=M.elevation-a,B=Math.sin(this.time*1.5+S*2.3)*.3;h.set(y,F+B,-P),g.set(0,M.heading,Math.sin(this.time*2+S)*.05),u.setFromEuler(g),d.set(M.width,M.height,M.length),c.compose(h,u,d),this.boatInstances.setMatrixAt(S,c),f.setHex(M.color),this.boatInstances.setColorAt(S,f),S++}this.boatInstances.count=S,S>0&&(this.boatInstances.instanceMatrix.needsUpdate=!0,this.boatInstances.instanceColor&&(this.boatInstances.instanceColor.needsUpdate=!0));const b=Math.max(15e3,a*8);let w=0;for(const M of this.aircraft){const C=M.corridor;M.t+=M.direction*M.speed*t/(111320*Math.sqrt((C.endLon-C.startLon)**2+(C.endLat-C.startLat)**2)),M.t>1&&(M.t=1,M.direction=-1),M.t<0&&(M.t=0,M.direction=1),M.lon=C.startLon+(C.endLon-C.startLon)*M.t,M.lat=C.startLat+(C.endLat-C.startLat)*M.t;const A=(M.lon-n)*l,D=(M.lat-s)*o,v=M.altitude-a;if(Math.sqrt(A*A+D*D+v*v)>b||w>=io)continue;h.set(A,v,-D);const P=M.direction>0?M.heading:M.heading+Math.PI;g.set(0,P,0),u.setFromEuler(g),d.set(M.width,M.height,M.length),c.compose(h,u,d),this.aircraftInstances.setMatrixAt(w,c),f.setHex(M.color),this.aircraftInstances.setColorAt(w,f),w++}this.aircraftInstances.count=w,w>0&&(this.aircraftInstances.instanceMatrix.needsUpdate=!0,this.aircraftInstances.instanceColor&&(this.aircraftInstances.instanceColor.needsUpdate=!0))}dispose(){[this.vehicleInstances,this.boatInstances,this.aircraftInstances].forEach(t=>{t&&(this.scene.remove(t),t.dispose())})}}const ye={lon:-116.9155,lat:34.2433,elevation:2070,treeHeight:30,heading:210};class M_{constructor(t){this.scene=t,this.nestGroup=new Pe,this.jackieGroup=null,this.chicksGroup=null,this.time=0,this.buildNest(),this.scene.add(this.nestGroup),this.nestGroup.visible=!1,this.nestGroup.traverse(e=>{e.layers.set(0)})}buildNest(){const t=new Qt({color:6044190,flatShading:!0}),e=new Qt({color:4861461,flatShading:!0}),n=new Ye(.3,.6,ye.treeHeight,8),s=new j(n,t);s.position.y=ye.treeHeight/2,this.nestGroup.add(s);for(let it=0;it<6;it++){const R=new na(.35+(1-it/6)*.15,.04,4,8),wt=new j(R,e);wt.position.y=3+it*4.5,wt.rotation.x=Math.PI/2,this.nestGroup.add(wt)}const r=new Qt({color:7029286,flatShading:!0}),a=[{y:22,angle:0,length:6,tilt:.6},{y:24,angle:Math.PI*.6,length:7,tilt:.5},{y:26,angle:Math.PI*1.2,length:5.5,tilt:.55},{y:28,angle:Math.PI*.3,length:5,tilt:.4},{y:28,angle:Math.PI*1.5,length:4.5,tilt:.45},{y:29,angle:Math.PI*.8,length:3,tilt:.2},{y:29,angle:Math.PI*1.8,length:3.5,tilt:.15}];for(const it of a){const R=new Ye(.05,.15,it.length,5);R.translate(0,it.length/2,0);const wt=new j(R,r);wt.position.y=it.y,wt.rotation.z=it.tilt,wt.rotation.y=it.angle,this.nestGroup.add(wt)}const o=new Qt({color:2972199,flatShading:!0}),l=new Qt({color:1789211,flatShading:!0}),c=[{x:0,y:32,z:0,r:3.5},{x:2,y:30,z:1,r:2.5},{x:-2.5,y:29,z:-1,r:2.8},{x:1,y:28,z:-2,r:2.2},{x:-1,y:31,z:2,r:2.5},{x:3,y:27,z:0,r:2},{x:-3,y:26,z:1,r:2.3},{x:0,y:34,z:0,r:2}];for(const it of c){const R=new te(it.r,5,4);R.scale(1,.6,1);const wt=it.y>30?o:l,gt=new j(R,wt);gt.position.set(it.x,it.y,it.z),this.nestGroup.add(gt)}const h=new Qt({color:7035450,flatShading:!0}),u=new Qt({color:4864544,flatShading:!0}),d=new Ye(1,1.2,.6,12),f=new j(d,h);f.position.set(.5,ye.treeHeight,.3),this.nestGroup.add(f);const g=new na(1,.15,6,16),x=new j(g,u);x.position.set(.5,ye.treeHeight+.3,.3),x.rotation.x=Math.PI/2,this.nestGroup.add(x);const m=new Qt({color:8022602,flatShading:!0});for(let it=0;it<20;it++){const R=it/20*Math.PI*2,wt=.9+Math.random()*.4,gt=new Ye(.02,.02,.3+Math.random()*.5,3),Lt=new j(gt,m);Lt.position.set(.5+Math.cos(R)*wt,ye.treeHeight+.2,.3+Math.sin(R)*wt),Lt.rotation.z=(Math.random()-.5)*.8,Lt.rotation.x=(Math.random()-.5)*.8,this.nestGroup.add(Lt)}const p=new Qt({color:9075290,flatShading:!0}),S=new Ye(.7,.8,.15,10),b=new j(S,p);b.position.set(.5,ye.treeHeight+.1,.3),this.nestGroup.add(b),this.jackieGroup=new Pe,this.jackieGroup.position.set(.5,ye.treeHeight+.4,.3);const w=new Qt({color:2759178,flatShading:!0}),M=new te(.35,6,5);M.scale(1,.7,1.3);const C=new j(M,w);C.position.y=.2,this.jackieGroup.add(C);const A=new Qt({color:16448250,flatShading:!0}),D=new te(.15,6,5),v=new j(D,A);v.position.set(0,.45,.25),this.jackieGroup.add(v);const y=new Qt({color:16763904,flatShading:!0}),P=new tn(.04,.12,4),I=new j(P,y);I.position.set(0,.42,.38),I.rotation.x=Math.PI/2,this.jackieGroup.add(I);const F=new ke({color:1118481}),B=new te(.02,4,4),k=new j(B,F);k.position.set(-.06,.47,.33),this.jackieGroup.add(k);const H=new j(B,F);H.position.set(.06,.47,.33),this.jackieGroup.add(H);const z=new Qt({color:15658734,flatShading:!0}),$=new se(.15,.04,.3),ut=new j($,z);ut.position.set(0,.15,-.35),this.jackieGroup.add(ut);const st=new Qt({color:1706496,flatShading:!0}),rt=new se(.05,.2,.5),kt=new j(rt,st);kt.position.set(-.25,.25,-.05),kt.rotation.z=.2,this.jackieGroup.add(kt);const Nt=new j(rt,st);Nt.position.set(.25,.25,-.05),Nt.rotation.z=-.2,this.jackieGroup.add(Nt),this.nestGroup.add(this.jackieGroup),this.chicksGroup=new Pe,this.chicksGroup.position.set(.5,ye.treeHeight+.3,.3);const Kt=new Qt({color:16117984,flatShading:!0}),ie=new te(.06,6,5);ie.scale(1,.7,1.2);const q=new j(ie,Kt);q.position.set(-.15,.05,.1),this.chicksGroup.add(q);const et=new j(ie,Kt);et.position.set(.1,.05,-.05),this.chicksGroup.add(et);const yt=new Qt({color:13421772,flatShading:!0}),bt=new te(.08,5,4),lt=new j(bt,yt);lt.position.set(.2,.1,.15),this.chicksGroup.add(lt);const Ot=new te(.05,5,4),Yt=new j(Ot,yt);Yt.position.set(.2,.2,.2),this.chicksGroup.add(Yt);const Bt=new j(B,F);Bt.position.set(.17,.22,.24),this.chicksGroup.add(Bt);const Z=new j(B,F);Z.position.set(.23,.22,.24),this.chicksGroup.add(Z);const nt=new tn(.015,.04,3),K=new j(nt,new Qt({color:3355443}));K.position.set(.2,.21,.26),K.rotation.x=Math.PI/2,this.chicksGroup.add(K),this.nestGroup.add(this.chicksGroup)}update(t,e){this.time+=t;const n=e.lon,s=e.lat,a=e.alt*.3048,o=111320,l=111320*Math.cos(Se.degToRad(s)),c=(ye.lon-n)*l,h=(ye.lat-s)*o,u=ye.elevation-a,d=Math.sqrt(c*c+h*h);this.nestGroup.visible=d<2e3,this.nestGroup.visible&&(this.nestGroup.position.set(c,u,-h),this.jackieGroup&&(this.jackieGroup.rotation.y=Math.sin(this.time*.3)*.15,this.jackieGroup.position.y=ye.treeHeight+.4+Math.sin(this.time*.8)*.01),this.chicksGroup&&this.chicksGroup.children.forEach((f,g)=>{g>=2&&(f.position.y+=Math.sin(this.time*2+g)*.001)}))}static getSpawnPosition(){return{lon:ye.lon,lat:ye.lat,alt:(ye.elevation+ye.treeHeight+50)/.3048,heading:ye.heading}}dispose(){this.scene.remove(this.nestGroup),this.nestGroup.traverse(t=>{t.geometry&&t.geometry.dispose(),t.material&&t.material.dispose()})}}const Hs={NIGHT:{start:0,end:5,name:"Night",fogMult:1.5,lightIntensity:.1},DAWN:{start:5,end:7,name:"Dawn",fogMult:1.2,lightIntensity:.4},MORNING:{start:7,end:10,name:"Morning",fogMult:.8,lightIntensity:.8},MIDDAY:{start:10,end:14,name:"Midday",fogMult:.5,lightIntensity:1},AFTERNOON:{start:14,end:17,name:"Afternoon",fogMult:.6,lightIntensity:.9},DUSK:{start:17,end:19,name:"Dusk",fogMult:1,lightIntensity:.4},EVENING:{start:19,end:21,name:"Evening",fogMult:1.3,lightIntensity:.2},LATE_NIGHT:{start:21,end:24,name:"Late Night",fogMult:1.5,lightIntensity:.1}},ps={CLEAR:{name:"Clear",fogDensity:5e-5,visibility:1,windSpeed:5,thermalMult:1},PARTLY_CLOUDY:{name:"Partly Cloudy",fogDensity:1e-4,visibility:.9,windSpeed:10,thermalMult:.8},OVERCAST:{name:"Overcast",fogDensity:3e-4,visibility:.6,windSpeed:15,thermalMult:.3},FOG:{name:"Mountain Fog",fogDensity:.001,visibility:.3,windSpeed:3,thermalMult:.1},HAZE:{name:"Desert Haze",fogDensity:4e-4,visibility:.5,windSpeed:8,thermalMult:.6},STORM:{name:"Thunderstorm",fogDensity:8e-4,visibility:.3,windSpeed:30,thermalMult:2},SNOW:{name:"Snow",fogDensity:6e-4,visibility:.4,windSpeed:20,thermalMult:0},SANTA_ANA:{name:"Santa Ana Winds",fogDensity:2e-4,visibility:.7,windSpeed:50,thermalMult:.5}};function sh(i,t){return i>=11||i<=1?t>=6&&t<=10?Math.random()<.3?"FOG":"PARTLY_CLOUDY":Math.random()<.15?"SNOW":Math.random()<.25?"OVERCAST":Math.random()<.5?"CLEAR":"PARTLY_CLOUDY":i>=2&&i<=4?t>=14&&Math.random()<.2?"STORM":Math.random()<.7?"CLEAR":"PARTLY_CLOUDY":i>=5&&i<=7?t>=14&&t<=18&&Math.random()<.3?"STORM":t>=11&&t<=15&&Math.random()<.3?"HAZE":"CLEAR":Math.random()<.15?"SANTA_ANA":Math.random()<.8?"CLEAR":"PARTLY_CLOUDY"}class y_{constructor(t){this.viewer=t,this.currentDaypart="MIDDAY",this.currentWeather="CLEAR",this.gameHour=12,this.timeScale=1,this.useRealTime=!0,this.weatherChangeTimer=0,this.weatherChangeCooldown=300,this.windDirection=0,this.windSpeed=5,this.targetFogDensity=1e-4,this.currentFogDensity=1e-4,this.initialized=!1,this.init()}init(){this.viewer&&(this.viewer.scene.globe.enableLighting=!0,this.viewer.scene.skyAtmosphere&&(this.viewer.scene.skyAtmosphere.show=!0));const t=new Date;this.updateTimeOfDay(t),this.currentWeather=sh(t.getMonth(),t.getHours()),this.applyWeather(),this.initialized=!0}updateTimeOfDay(t){const e=t.getUTCHours(),n=-8;this.gameHour=(e+n+24)%24+t.getUTCMinutes()/60;for(const[s,r]of Object.entries(Hs))if(this.gameHour>=r.start&&this.gameHour<r.end){this.currentDaypart=s;break}if(this.viewer&&this.viewer.clock){const s=Cesium.JulianDate.fromDate(t);this.viewer.clock.currentTime=s}}applyWeather(){const t=ps[this.currentWeather]||ps.CLEAR,e=Hs[this.currentDaypart]||Hs.MIDDAY;this.viewer&&(this.targetFogDensity=t.fogDensity*e.fogMult,this.windSpeed=t.windSpeed+(Math.random()-.5)*5,this.windDirection=(this.windDirection+(Math.random()-.5)*10)%360)}update(t){if(!(!this.initialized||!this.viewer)&&(this.useRealTime?this.updateTimeOfDay(new Date):this.gameHour=(this.gameHour+t*this.timeScale/3600)%24,this.currentFogDensity+=(this.targetFogDensity-this.currentFogDensity)*t*.5,this.viewer.scene.fog&&(this.viewer.scene.fog.density=this.currentFogDensity),this.weatherChangeTimer+=t,this.weatherChangeTimer>this.weatherChangeCooldown)){this.weatherChangeTimer=0;const n=sh(new Date().getMonth(),Math.floor(this.gameHour));n!==this.currentWeather&&(this.currentWeather=n,this.applyWeather())}}getConditions(){const t=Hs[this.currentDaypart]||Hs.MIDDAY,e=ps[this.currentWeather]||ps.CLEAR,n=Math.floor(this.gameHour),s=Math.floor((this.gameHour-n)*60);return{daypartName:t.name,weatherName:e.name,localTime:`${n.toString().padStart(2,"0")}:${s.toString().padStart(2,"0")} PST`,windSpeed:Math.round(this.windSpeed),windDirection:Math.round(this.windDirection),visibility:e.visibility,thermalMultiplier:e.thermalMult,lightIntensity:t.lightIntensity}}getThermalMultiplier(){return(ps[this.currentWeather]||ps.CLEAR).thermalMult}getWind(){const t=this.windDirection*Math.PI/180;return{x:Math.sin(t)*this.windSpeed,z:Math.cos(t)*this.windSpeed,speed:this.windSpeed,direction:this.windDirection}}}const Hn={lon:-116.9114,lat:34.2439},S_=500,iu=S_*1609.34,su=iu/1e3,w_=su/111.32,E_=su/(111.32*Math.cos(Hn.lat*Math.PI/180));function b_(i,t){const e=(t-Hn.lat)*Math.PI/180,n=(i-Hn.lon)*Math.PI/180,s=Math.sin(e/2)*Math.sin(e/2)+Math.cos(Hn.lat*Math.PI/180)*Math.cos(t*Math.PI/180)*Math.sin(n/2)*Math.sin(n/2);return 6371e3*(2*Math.atan2(Math.sqrt(s),Math.sqrt(1-s)))}function T_(i,t){return iu-b_(i,t)}function C_(i,t){const e=(Hn.lon-i)*Math.PI/180,n=t*Math.PI/180,s=Hn.lat*Math.PI/180,r=Math.sin(e)*Math.cos(s),a=Math.cos(n)*Math.sin(s)-Math.sin(n)*Math.cos(s)*Math.cos(e);return(Math.atan2(r,a)*180/Math.PI+360)%360}function A_(i){if(!i)return null;const t=[],e=128;for(let r=0;r<=e;r++){const a=r/e*Math.PI*2,o=Hn.lat+w_*Math.sin(a),l=Hn.lon+E_*Math.cos(a);t.push(l,o)}const n=i.entities.add({polyline:{positions:Cesium.Cartesian3.fromDegreesArray(t),width:2,material:new Cesium.PolylineDashMaterialProperty({color:Cesium.Color.fromCssColorString("rgba(255, 200, 50, 0.5)"),dashLength:16}),clampToGround:!0}}),s=i.entities.add({position:Cesium.Cartesian3.fromDegrees(Hn.lon,Hn.lat),point:{pixelSize:8,color:Cesium.Color.fromCssColorString("rgba(255, 200, 50, 0.7)"),outlineColor:Cesium.Color.WHITE,outlineWidth:1,disableDepthTestDistance:Number.POSITIVE_INFINITY},label:{text:"THE NEST",font:"12pt sans-serif",style:Cesium.LabelStyle.FILL_AND_OUTLINE,outlineWidth:2,verticalOrigin:Cesium.VerticalOrigin.BOTTOM,pixelOffset:new Cesium.Cartesian2(0,-12),disableDepthTestDistance:Number.POSITIVE_INFINITY,fillColor:Cesium.Color.fromCssColorString("rgba(255, 200, 50, 0.9)")}});return{boundaryEntity:n,centerEntity:s}}const oe={MENU:"MENU",PICK_SPAWN:"PICK_SPAWN",TRANSITIONING:"TRANSITIONING",FLYING:"FLYING",PAUSED:"PAUSED",CRASHED:"CRASHED"};let le=oe.MENU,ce={graphicsQuality:"medium",antialiasing:!0,fogEffects:!0,mouseSensitivity:.2,showHud:!0,showHorizonLines:!1,soundEnabled:!0,minimapRange:10};function R_(){const i=localStorage.getItem("flightSimSettings");if(i)try{const t=JSON.parse(i);ce={...ce,...t}}catch(t){console.error("Failed to load settings",t)}ru(),ol()}function P_(){localStorage.setItem("flightSimSettings",JSON.stringify(ce))}function ol(){document.getElementById("graphicsQuality").value=ce.graphicsQuality,document.getElementById("antialiasing").checked=ce.antialiasing,document.getElementById("fogEffects").checked=ce.fogEffects,document.getElementById("sensitivitySlider").value=ce.mouseSensitivity,document.getElementById("sensitivityValue").textContent=ce.mouseSensitivity,document.getElementById("showHud").checked=ce.showHud,document.getElementById("showHorizonLines").checked=ce.showHorizonLines,document.getElementById("soundEnabled").checked=ce.soundEnabled,document.getElementById("minimapRange").value=ce.minimapRange.toString()}function ru(){Ie&&Ie.setSensitivity(ce.mouseSensitivity),Te&&(Te.setMinimapRange(ce.minimapRange),Te.setShowHorizonLines(ce.showHorizonLines)),Ct&&Ct.listener&&Ct.listener.setMasterVolume(ce.soundEnabled?1:0);const i=we();i&&(ce.graphicsQuality==="low"?(i.resolutionScale=.5,i.scene.globe.maximumScreenSpaceError=4):ce.graphicsQuality==="medium"?(i.resolutionScale=.75,i.scene.globe.maximumScreenSpaceError=2):(i.resolutionScale=1,i.scene.globe.maximumScreenSpaceError=1.3),i.scene.postProcessStages.fxaa.enabled=ce.antialiasing,i.scene.fog.enabled=ce.fogEffects,i.scene.atmosphere.show=ce.fogEffects),[document.getElementById("hud-top-left"),document.getElementById("hud-top-right"),document.getElementById("hud-speed-box"),document.getElementById("hud-alt-box"),document.getElementById("coords"),document.getElementById("minimap-container")].forEach(e=>{e&&(e.style.display=ce.showHud?"block":"none")})}let J={lon:ye.lon,lat:ye.lat,alt:(ye.elevation+ye.treeHeight+5)/.3048,heading:ye.heading,pitch:0,roll:0,speed:0,throttle:0,score:0,weaponSystem:null},ia=null,ll=0,Zr={lon:0,lat:0};const I_=1e4,L_=1e3;let sa=0;const D_=1800;let zr=!1,au=0,Qe,un,Fn,xn,ra,cl,aa=new jh,Ie=new Yx,Te=new $x,dn,vn,Ee=new r_,oa=new a_,ar,hl,ul,dl,fl,pl,qs,F_=null,so=!1,rh=0,ro=0,ao=0;const Mi=new L(0,-.8,-2.75);let _i=new L().copy(Mi),kn=new Fe(0,0,0),ms=0,$r=0,Gr=1,ml=!1,ou=null;const lu=document.getElementById("mainMenu"),bs=document.getElementById("pauseMenu"),cu=document.getElementById("crashMenu"),hi=document.getElementById("uiContainer"),Wi=document.getElementById("threeContainer"),Nl=document.getElementById("spawnInstruction"),lr=document.getElementById("confirmSpawnBtn");let He=null;const Vs=document.getElementById("startBtn"),Vn=document.getElementById("loadingIndicator"),la=document.getElementById("loadingText"),Ce={audio:!1,model:!1,cesium:!1,globe:!1,failed:!1};function oi(){if(!Vn||!la||!Vs)return;if(le===oe.FLYING||le===oe.TRANSITIONING){Vn.classList.add("hidden");return}let i="";Ce.audio&&Ce.model&&Ce.cesium&&Ce.globe||(Ce.audio?Ce.model?Ce.cesium?Ce.globe||(i="Loading Globe Surface..."):i="Loading Satellite Imagery...":i="Loading Eagle Model...":i="Loading Audio..."),i?(la.textContent=i,Vs.disabled=!0,Vs.style.pointerEvents="none",Vn.classList.remove("hidden")):(Vn.classList.add("hidden"),Vs.disabled=!1,Vs.style.pointerEvents="auto")}async function N_(){Ct.init(un);const i=(t,e,n,s)=>Ct.loadSound(t,e,n,s).catch(r=>(console.warn(`Failed to load sound: ${t}`,r),null));await Promise.all([i("boost","./assets/sounds/boost.mp3",!1,.35),i("throttle","./assets/sounds/throttle.mp3",!1,.4),i("explode","./assets/sounds/explode.mp3",!1,.75),i("explosion-1","./assets/sounds/explosion-1.mp3",!1,.8),i("explosion-2","./assets/sounds/explosion-2.mp3",!1,.8),i("explosion-3","./assets/sounds/explosion-3.mp3",!1,.8),i("ambient-crash","./assets/sounds/ambient.mp3",!0,.5),i("weapon-warning","./assets/sounds/weapon-warning-1.mp3",!1,1),i("jet-engine","./assets/sounds/jet-engine.mp3",!0,.5),i("spawn","./assets/sounds/spawn.mp3",!1,.5),i("roll","./assets/sounds/roll.mp3",!0,.75),i("pitch","./assets/sounds/pitch.mp3",!0,.75),i("button-click","./assets/sounds/button-click.mp3",!1,1),i("weapon-switch","./assets/sounds/weapon-switch.mp3",!1,.75),i("button-hover","./assets/sounds/button-hover.mp3",!1,.25),i("zoom-in","./assets/sounds/zoom-in.mp3",!1,.5),i("missile-fire","./assets/sounds/missile-firing-1.mp3",!1,.75),i("m61-firing","./assets/sounds/m61-firing.mp3",!0,.75),i("rwr-tws","./assets/sounds/rwr-tws.mp3",!0,.2),i("rwr-lock","./assets/sounds/rwr-lock.mp3",!1,.2),i("wind","./assets/sounds/wind.mp3",!0,.25),i("terrain-pull-up","./assets/sounds/terrain-pull-up.mp3",!1,.9),i("warning","./assets/sounds/warning.mp3",!1,.6),i("glitch-1","./assets/sounds/glitch-transition-1.mp3",!1,.25),i("glitch-2","./assets/sounds/glitch-transition-2.mp3",!1,.25),i("glitch-3","./assets/sounds/glitch-transition-3.mp3",!1,.25),i("glitch-4","./assets/sounds/glitch-transition-4.mp3",!1,.25)]),Ce.audio=!0,oi(),U_()}function Ul(i=.5){Ct.stopAll(i)}function Ol(){au=Date.now(),Ct.pauseAll()}function hu(){const i=Date.now()-au;sa>0&&(sa+=i),Ct.resumeAll()}function U_(){document.addEventListener("mouseover",i=>{const t=i.target.closest("button, .menu-btn, .clickable-ui");t&&!t._hovered&&(Ct.play("button-hover"),t._hovered=!0,t.addEventListener("mouseleave",()=>{t._hovered=!1},{once:!0}))},!0),document.addEventListener("click",i=>{i.target.closest("button, .menu-btn, .clickable-ui, #search-toggle-btn")&&Ct.play("button-click")},!0)}function O_(){cl=new Yh,Qe=new Gd,un=new yn(75,window.innerWidth/window.innerHeight,.1,1e5),Fn=new kx({alpha:!0,antialias:!0}),Fn.setSize(window.innerWidth,window.innerHeight),Fn.setPixelRatio(window.devicePixelRatio),Fn.setClearColor(0,0),Wi.appendChild(Fn.domElement),Wi.classList.add("hidden");const i=new kf(16777215,1);Qe.add(i);const t=new Bf(16777215,1);t.position.set(5,10,5),Qe.add(t),i.layers.enable(1),t.layers.enable(1);try{ii.init(Qe,we())}catch{}try{ar=new c_(we(),Qe)}catch(e){console.error("Failed to init tree system",e)}try{hl=new nu(we(),Qe)}catch(e){console.error("Failed to init water system",e)}try{ul=new f_(we(),Qe)}catch(e){console.error("Failed to init landmark system",e)}try{dl=new m_(we(),Qe)}catch(e){console.error("Failed to init city system",e)}try{fl=new v_(we(),Qe)}catch(e){console.error("Failed to init traffic system",e)}try{pl=new M_(Qe)}catch(e){console.error("Failed to init nest system",e)}try{qs=new y_(we())}catch(e){console.error("Failed to init day/night weather system",e)}N_().catch(e=>{console.error("Failed to init sounds",e)}).finally(()=>{Ce.audio=!0,oi()});try{ra=qx(),xn=new Pe,xn.add(ra),Qe.add(xn),xn.layers.set(1),xn.traverse(e=>{e.layers.set(1)}),xn.position.copy(Mi),xn.scale.set(1.5,1.5,1.5),vn=new t_(we(),Qe,xn),vn.onKill=e=>{const n=e.score||500;J.score+=n;try{Ct.play("glitch-random")}catch{}Te&&Te.showKillNotification(e.name,n)},xn.traverse(e=>{e.layers.set(1)})}catch(e){console.error("Failed to create eagle model or weapon system",e)}Ce.model=!0,oi()}function B_(i){if(le!==oe.FLYING)return;const t=Ie.update(),e=aa.update(t,i),n=J.speed;J.speed=e.speed,J.pitch=e.pitch,J.roll=e.roll,J.heading=e.heading,J.throttle=t.throttle,J.yaw=t.yaw,J.isBoosting=e.isBoosting,J.weaponSystem=vn,J.npcs=dn?dn.npcs:[],J.isGliding=e.isGliding,J.isFlapping=e.isFlapping,J.flapStrength=e.flapStrength,J.wingSpread=e.wingSpread,J.inThermal=e.inThermal,J.thermalStrength=e.thermalStrength,J.verticalSpeed=e.verticalSpeed,J.liftForce=e.liftForce,J.isTurbo=e.isTurbo,J.turboWindup=e.turboWindup,J.weatherConditions=qs?qs.getConditions():null,vn&&(t.weaponIndex!==-1&&vn.selectWeapon(t.weaponIndex),t.toggleWeapon&&vn.toggleWeapon(),t.fire&&vn.fire(J),t.fireFlare&&vn.fireFlare(J),vn.update(i,J,t));const s=wi(J.lon,J.lat,J.alt,J.heading,J.pitch,J.speed*i);J.lon=s.lon,J.lat=s.lat,J.alt=s.alt;const r=Date.now(),a=tu(J.lon,J.lat,Zr.lon,Zr.lat);if((r-ll>I_||a>L_)&&(ll=r,Zr={lon:J.lon,lat:J.lat},Qh(J.lon,J.lat).then(x=>{x&&x!==ia&&(ia=x,Te.showRegion(x))})),z_(),k_(),oa)try{oa.update(i,J)}catch{}Math.abs(t.roll)>.5||Math.abs(t.yaw)>.5?Ct.isPlaying("roll")||Ct.play("roll",.1):Ct.isPlaying("roll")&&Ct.stop("roll",.1);const o=new Cesium.HeadingPitchRoll(Cesium.Math.toRadians(J.heading),Cesium.Math.toRadians(J.pitch),Cesium.Math.toRadians(J.roll)),l=Cesium.Quaternion.fromHeadingPitchRoll(o),c=new Cesium.HeadingPitchRoll(Cesium.Math.toRadians(t.cameraYaw),Cesium.Math.toRadians(-t.cameraPitch),0),h=Cesium.Quaternion.fromHeadingPitchRoll(c),u=Cesium.Quaternion.multiply(l,h,new Cesium.Quaternion),d=Cesium.HeadingPitchRoll.fromQuaternion(u);if(Gx(J.lon,J.lat,J.alt,Cesium.Math.toDegrees(d.heading),Cesium.Math.toDegrees(d.pitch),Cesium.Math.toDegrees(d.roll)),dn&&dn.update(i,J),ar)try{ar.update(i,J)}catch{}if(hl)try{hl.update(i,J)}catch{}if(ul)try{ul.update(i,J)}catch{}if(dl)try{dl.update(i,J)}catch{}if(fl)try{fl.update(i,J)}catch{}if(pl)try{pl.update(i,J)}catch{}if(qs)try{qs.update(i)}catch{}const f=T_(J.lon,J.lat);if(f/1609.34<20){if(f<=0){const x=C_(J.lon,J.lat);J.heading=Se.lerp(J.heading,x,i*2),aa.heading=J.heading}so||(so=!0,Te.showRegion("TERRITORY BOUNDARY - TURN BACK"))}else so=!1;if(Te.update(J,le===oe.FLYING?dn?dn.npcs:[]:[]),xn){const x=(J.speed-n)/i,m=t.isDragging?0:Math.max(-.5,Math.min(1.5,x*.001));let p=Mi.z-m,S=0;if(e.isBoosting){ml||(Gr=Math.random()>.5?1:-1);const ut=e.boostDuration,st=Math.max(0,Math.min(1,1-e.boostTimeRemaining/ut));if(Math.PI*2*e.boostRotations*Gr,st<.2){const rt=st/.2;S=-(rt*rt)*1.5,ms=0}else if(st<.8){const rt=(st-.2)/.6;S=-1.5,ms=(rt<.5?4*rt*rt*rt:1-Math.pow(-2*rt+2,3)/2)*(Math.PI*2*e.boostRotations)*Gr}else{const rt=(st-.8)/.2;S=-1.5+rt*rt*(3-2*rt)*.7,ms=Math.PI*2*e.boostRotations*Gr}}else ms=0,S=0;ml=e.isBoosting;const b=e.isBoosting?10*i:2*i;$r+=(S-$r)*b,p+=$r;const w=performance.now()*.001,M=Math.sin(w*.8)*.035,C=Math.cos(w*.6)*.025,A=Math.sin(w*.5)*.015,D=Math.cos(w*.4)*.015,v=Math.sin(w*.7)*.025,y=t.isDragging?Mi.x:Mi.x-t.roll*.6-t.yaw*.12+M,P=t.isDragging?Mi.y:Mi.y-t.pitch*.1+C;let I=t.isDragging?0:Se.degToRad(-t.roll*15)+v;const F=t.isDragging?0:Se.degToRad(t.pitch*10)+A,B=t.isDragging?0:Se.degToRad(-t.yaw*4)+D,k=e.isBoosting?3*i:5*i;_i.x+=(y-_i.x)*k,_i.y+=(P-_i.y)*k,_i.z+=(p-_i.z)*k,kn.z+=(I-kn.z)*k,kn.x+=(F-kn.x)*k,kn.y+=(B-kn.y)*k;const H=new qe().setFromEuler(new Fe(Se.degToRad(-t.cameraPitch),Se.degToRad(-t.cameraYaw),0,"YXZ"));xn.position.copy(_i);const z=new qe().setFromEuler(new Fe(kn.x,kn.y,kn.z+ms)),$=H.clone().invert().multiply(z);xn.quaternion.copy($)}}function k_(){if(le!==oe.FLYING){Te.setPullUpWarning(!1);return}const i=we();if(!i)return;const t=Cesium.Cartographic.fromDegrees(J.lon,J.lat),e=i.scene.globe.getHeight(t);if(e===void 0)return;const n=J.alt-e,s=Cesium.Math.toRadians(J.pitch),r=J.speed*Math.sin(s);let a=!1;if(J.pitch<-1&&n<450&&(n<150&&(a=!0),r<-20&&(a=!0)),Te.setPullUpWarning(a),a){const o=Date.now();(!zr||o-sa>D_&&!Ct.isPlaying("terrain-pull-up"))&&(Ct.play("terrain-pull-up"),sa=o),zr=!0}else zr&&(Ct.stop("terrain-pull-up",.1),zr=!1)}let ah=0,uu=0;function z_(){if(le!==oe.FLYING)return;const i=Date.now();if(i-ah<100||(ah=i,i-uu<3e3))return;const t=we();if(!t)return;const e=Cesium.Cartographic.fromDegrees(J.lon,J.lat),n=t.scene.globe.getHeight(e);if(n!==void 0&&J.alt<=n+5){le=oe.CRASHED,Ee&&Ee.stop(),hi.classList.add("hidden");const s=document.getElementById("weapons-hud");s&&s.classList.add("hidden"),Wi.classList.add("hidden"),cu.classList.remove("hidden"),Ie.isMobile&&Ie.setMobileVisible(!1),Te.update(J,[]),Ul(.1),setTimeout(()=>{Ct.play("explode"),Ct.play("ambient-crash")},50)}}function du(){requestAnimationFrame(du);const i=cl?cl.getDelta():.016,t=performance.now();if(ro++,t-ao>=1e3){rh=ro*1e3/(t-ao),ro=0,ao=t,Te.updateFPS(rh);const e=document.getElementById("menu-time");e&&(e.textContent=new Date().toISOString().split(".")[0]+"Z")}if(le===oe.FLYING||le===oe.PAUSED||le===oe.TRANSITIONING){const e=we();if(Fn.autoClear=!1,Fn.clear(),e&&e.camera&&e.camera.frustum.fovy){const n=Cesium.Math.toDegrees(e.camera.frustum.fovy);un.fov=n,un.aspect=window.innerWidth/window.innerHeight,un.updateProjectionMatrix()}un.layers.set(0),le===oe.FLYING?B_(i):le===oe.PAUSED&&Te.updatePauseMenu(J,ia,dn?dn.npcs:[]),ra&&Zx(ra,i,J);try{le===oe.FLYING&&ii.update(i)}catch{}Fn.render(Qe,un),Fn.clearDepth(),un.fov=75,un.updateProjectionMatrix(),un.layers.set(1),Fn.render(Qe,un)}else Wi.classList.add("hidden")}function Mn(){document.querySelectorAll(".modal").forEach(i=>i.classList.add("hidden"))}function G_(){document.getElementById("helpBtn").onclick=()=>{Mn(),document.getElementById("helpModal").classList.remove("hidden")},document.getElementById("optionsBtn").onclick=()=>{Mn(),ol(),document.getElementById("optionsModal").classList.remove("hidden")},document.getElementById("pauseOptionsBtn").onclick=()=>{Mn(),ol(),document.getElementById("optionsModal").classList.remove("hidden")},document.getElementById("pauseHelpBtn").onclick=()=>{Mn(),document.getElementById("helpModal").classList.remove("hidden")},document.getElementById("creditsBtn").onclick=()=>{Mn(),document.getElementById("creditsModal").classList.remove("hidden")},document.getElementById("aboutBtn").onclick=()=>{Mn(),document.getElementById("aboutBtnModal").classList.remove("hidden")},document.getElementById("sensitivitySlider").oninput=i=>{document.getElementById("sensitivityValue").textContent=i.target.value},document.getElementById("saveOptionsBtn").onclick=()=>{ce.graphicsQuality=document.getElementById("graphicsQuality").value,ce.antialiasing=document.getElementById("antialiasing").checked,ce.fogEffects=document.getElementById("fogEffects").checked,ce.mouseSensitivity=parseFloat(document.getElementById("sensitivitySlider").value),ce.showHud=document.getElementById("showHud").checked,ce.showHorizonLines=document.getElementById("showHorizonLines").checked,ce.soundEnabled=document.getElementById("soundEnabled").checked,ce.minimapRange=parseInt(document.getElementById("minimapRange").value),P_(),ru(),Mn()},document.querySelectorAll(".close-modal").forEach(i=>{i.onclick=t=>{t.stopPropagation(),i.closest(".modal").classList.add("hidden")}}),window.addEventListener("click",i=>{i.target.classList.contains("modal")&&i.target.classList.add("hidden")})}document.getElementById("startBtn").onclick=async()=>{Mn(),Ie.isMobile&&!Ie.tiltEnabled&&await Ie.requestOrientationPermission(),lu.classList.add("hidden"),Bl(!1)};G_();document.getElementById("resumeBtn").onclick=()=>{Mn(),bs.classList.add("hidden"),hi.classList.remove("hidden");const i=document.getElementById("weapons-hud");i&&i.classList.remove("hidden"),le=oe.FLYING,Ee&&Ee.resume(),hu(),Ie.isMobile&&Ie.setMobileVisible(!0)};document.getElementById("restartBtn").onclick=()=>{Mn(),bs.classList.add("hidden"),Ee&&Ee.stop(),Bl(!0)};document.getElementById("quitBtn").onclick=()=>{Mn(),Ee&&Ee.stop(),Fl(!0),location.reload()};document.getElementById("respawnBtn").onclick=()=>{Mn(),cu.classList.add("hidden"),Ee&&Ee.stop(),Bl(!0)};function Bl(i=!0){J.score=0,dn&&dn.clear(),Ul(.3),Ct.play("zoom-in"),Ct.play("wind",1);const t=document.getElementById("transition-vignette");i&&t&&(t.style.opacity="1"),setTimeout(()=>{Nl.classList.remove("hidden"),Wi.classList.add("hidden"),hi.classList.add("hidden");const n=document.getElementById("weapons-hud");n&&n.classList.add("hidden"),le=oe.PICK_SPAWN,lr.classList.add("hidden");const s=document.getElementById("locationSearch"),r=document.getElementById("instruction-text"),a=document.getElementById("search-results");s&&(s.value="",s.style.display="none"),r&&(r.style.display="block",r.textContent="CLICK ANYWHERE TO CHOOSE YOUR HUNTING GROUNDS"),a&&(a.style.display="none"),ga(!0),He&&(we().entities.remove(He),He=null),we().camera.flyTo({destination:Cesium.Cartesian3.fromDegrees(J.lon,J.lat,15e3),duration:2,complete:()=>{t&&(t.style.opacity="0")}})},i?500:0)}function H_(){Ct.play("zoom-in"),Ct.stop("wind",1),Ul(.3),Nl.classList.add("hidden"),lr.classList.add("hidden"),lu.classList.remove("hidden"),le=oe.MENU,Vn.classList.add("hidden"),Fl(!0),ga(!1),He&&(we().entities.remove(He),He=null),we().camera.flyTo({...ou,duration:2.5})}function V_(){const i=we(),t=new Cesium.ScreenSpaceEventHandler(i.scene.canvas),e=document.getElementById("instruction-text");t.setInputAction(n=>{if(le!==oe.PICK_SPAWN)return;const s=i.camera.getPickRay(n.position),r=i.scene.globe.pick(s,i.scene);if(r){const a=Cesium.Cartographic.fromCartesian(r),o=Cesium.Math.toDegrees(a.longitude),l=Cesium.Math.toDegrees(a.latitude);J.lon=o,J.lat=l,J.alt=Math.max(0,a.height)+1500,e.textContent="FETCHING LOCATION INFO...",Qh(o,l).then(c=>{c&&le===oe.PICK_SPAWN&&(e.textContent=c,He&&(He.label.text=c))}).catch(()=>{}),Cesium.sampleTerrainMostDetailed(i.terrainProvider,[a]).then(([c])=>J.alt=Math.max(0,c.height||0)+1500).catch(()=>{}),He&&i.entities.remove(He),He=i.entities.add({position:r,point:{pixelSize:15,color:Cesium.Color.RED,outlineColor:Cesium.Color.WHITE,outlineWidth:2,disableDepthTestDistance:Number.POSITIVE_INFINITY},label:{text:"Target Spawn Location",font:`14pt ${getComputedStyle(document.body).fontFamily}`,style:Cesium.LabelStyle.FILL_AND_OUTLINE,outlineWidth:2,verticalOrigin:Cesium.VerticalOrigin.BOTTOM,pixelOffset:new Cesium.Cartesian2(0,-20),disableDepthTestDistance:Number.POSITIVE_INFINITY}}),lr.classList.remove("hidden")}},Cesium.ScreenSpaceEventType.LEFT_CLICK)}function W_(){const i=document.getElementById("locationSearch"),t=document.getElementById("search-results"),e=document.getElementById("instruction-text"),n=document.getElementById("search-toggle-btn"),s=n?n.innerHTML:"";let r;n&&(n.onclick=a=>{a.stopPropagation(),i.style.display==="block"?(i.style.display="none",e.style.display="block",t.style.display="none"):(i.style.display="block",e.style.display="none",i.focus())}),i.addEventListener("input",a=>{clearTimeout(r);const o=a.target.value.trim();if(o.length<3){t.style.display="none";return}r=setTimeout(async()=>{n&&(n.innerHTML='<div class="loader-spinner"></div>');try{const c=await(await fetch(`https://nominatim.openstreetmap.org/search?format=json&q=${encodeURIComponent(o)}&limit=5`)).json();t.innerHTML="",c.length>0?(c.forEach(h=>{const u=document.createElement("div");u.textContent=h.display_name,u.style.padding="10px",u.style.cursor="pointer",u.onclick=()=>{const d=parseFloat(h.lon),f=parseFloat(h.lat),g=we(),x=Cesium.Cartesian3.fromDegrees(d,f);J.lon=d,J.lat=f,J.alt=1500;const m=Cesium.Cartographic.fromDegrees(d,f);Cesium.sampleTerrainMostDetailed(g.terrainProvider,[m]).then(([p])=>{J.alt=Math.max(0,p.height||0)+1500}).catch(()=>{}),g.camera.flyTo({destination:Cesium.Cartesian3.fromDegrees(d,f,15e3),duration:1.5}),He&&g.entities.remove(He),He=g.entities.add({position:x,point:{pixelSize:15,color:Cesium.Color.RED,outlineColor:Cesium.Color.WHITE,outlineWidth:2,disableDepthTestDistance:Number.POSITIVE_INFINITY},label:{text:h.display_name.split(",")[0],font:`14pt ${getComputedStyle(document.body).fontFamily}`,style:Cesium.LabelStyle.FILL_AND_OUTLINE,outlineWidth:2,verticalOrigin:Cesium.VerticalOrigin.BOTTOM,pixelOffset:new Cesium.Cartesian2(0,-20),disableDepthTestDistance:Number.POSITIVE_INFINITY}}),lr.classList.remove("hidden"),t.style.display="none",i.style.display="none",e.style.display="block",e.textContent=h.display_name.split(",")[0].toUpperCase(),i.value=h.display_name},t.appendChild(u)}),t.style.display="block"):t.style.display="none"}catch(l){console.error("Search error:",l)}finally{n&&(n.innerHTML=s)}},500)}),document.addEventListener("click",a=>{!i.contains(a.target)&&!t.contains(a.target)&&!n.contains(a.target)&&(t.style.display="none",i.style.display==="block"&&(i.style.display="none",e.style.display="block"))})}document.getElementById("confirmSpawnBtn").onclick=()=>{const i=document.getElementById("transition-vignette");i&&(i.style.opacity="1"),Ct.play("spawn"),setTimeout(()=>{const t=we();He&&(t.entities.remove(He),He=null),ga(!1),J.speed=12,J.pitch=0,J.roll=0;try{const e=t&&t.camera;e&&typeof e.heading=="number"?J.heading=Cesium.Math.toDegrees(e.heading):J.heading=0}catch{J.heading=0}ia=null,ll=0,Zr={lon:0,lat:0},_i.copy(Mi),kn.set(0,0,0),ms=0,$r=0,ml=!1,Ie.reset(),aa=new jh,aa.reset(J.lon,J.lat,J.alt,J.heading,J.pitch,J.roll),ar&&ar.clear(),Te.resetTime(),Te.resizeMinimap(),vn&&typeof vn.resetAmmo=="function"&&vn.resetAmmo(),dn&&dn.spawnNPC(J.lon,J.lat,J.alt),Nl.classList.add("hidden"),lr.classList.add("hidden"),Vn.classList.add("hidden"),le=oe.TRANSITIONING,Fl(!1),t.camera.flyTo({destination:Cesium.Cartesian3.fromDegrees(J.lon,J.lat,J.alt),orientation:{heading:Cesium.Math.toRadians(J.heading),pitch:Cesium.Math.toRadians(J.pitch),roll:Cesium.Math.toRadians(J.roll)},duration:2,easingFunction:Cesium.EasingFunction.QUADRATIC_IN_OUT,complete:()=>{uu=Date.now(),hi.classList.remove("hidden");const e=document.getElementById("weapons-hud");if(e&&e.classList.remove("hidden"),Wi.classList.remove("hidden"),Te.resizeMinimap(),le=oe.FLYING,Ct.play("wind",.5),oa&&oa.startFlight(),i&&(i.style.opacity="0"),Ie.isMobile){Ie.setMobileVisible(!0),Ie.calibrateTilt();try{document.documentElement.requestFullscreen?document.documentElement.requestFullscreen().catch(()=>{}):document.documentElement.webkitRequestFullscreen&&document.documentElement.webkitRequestFullscreen(),screen.orientation&&screen.orientation.lock&&screen.orientation.lock("landscape").catch(()=>{})}catch{}}Ee&&Ee.start()}})},500)};window.addEventListener("keydown",i=>{const t=i.key.toLowerCase();if(t==="escape"){const e=document.querySelectorAll(".modal:not(.hidden)");if(e.length>0){e.forEach(n=>n.classList.add("hidden"));return}}if(t==="escape"||t==="p")if(le===oe.FLYING){le=oe.PAUSED,Ee&&Ee.pause(),hi.classList.add("hidden");const e=document.getElementById("weapons-hud");e&&e.classList.add("hidden"),bs.classList.remove("hidden"),Te.resizeMinimap(),Ol(),Te.update(J,[]),Ie.isMobile&&Ie.setMobileVisible(!1)}else if(le===oe.PAUSED){le=oe.FLYING,Ee&&Ee.resume(),bs.classList.add("hidden"),hi.classList.remove("hidden");const e=document.getElementById("weapons-hud");e&&e.classList.remove("hidden"),hu(),Ie.isMobile&&Ie.setMobileVisible(!0)}else le===oe.PICK_SPAWN&&t==="escape"&&H_();t==="z"&&le===oe.FLYING&&Ee&&Ee.skip()});document.addEventListener("visibilitychange",()=>{document.hidden&&le===oe.FLYING&&(le=oe.PAUSED,Ee&&Ee.pause(),hi.classList.add("hidden"),bs.classList.remove("hidden"),Te.resizeMinimap(),Ol(),Te.update(J,[]),Ie.isMobile&&Ie.setMobileVisible(!1))});window.addEventListener("blur",()=>{le===oe.FLYING&&(le=oe.PAUSED,Ee&&Ee.pause(),hi.classList.add("hidden"),bs.classList.remove("hidden"),Te.resizeMinimap(),Ol(),Te.update(J,[]))});const si=zx();Ce.cesium=!0;oi();setTimeout(()=>{Ce.globe||(console.warn("Globe loading timeout - enabling start button anyway"),Ce.globe=!0,oi())},8e3);let oh=!1;try{const i=si.scene.postRender.addEventListener(()=>{try{const t=si.scene.globe.tilesLoaded;t||(oh=!0),t&&oh&&(Ce.globe=!0,oi(),i())}catch{Ce.globe=!0,oi(),i()}})}catch(i){console.warn("Globe tracker setup failed",i),Ce.globe=!0,oi()}si.scene.globe.tileLoadProgressEvent.addEventListener(i=>{Vn&&la&&(le===oe.PICK_SPAWN?i>0?(la.textContent="Loading Terrain...",Vn.classList.remove("hidden")):Vn.classList.add("hidden"):Ce.audio&&Ce.model&&Ce.cesium&&Ce.globe&&Vn.classList.add("hidden"))});const ca=()=>{Ct.listener.context.state==="suspended"&&Ct.listener.context.resume(),window.removeEventListener("mousedown",ca),window.removeEventListener("keydown",ca)};window.addEventListener("mousedown",ca);window.addEventListener("keydown",ca);ou={destination:si.camera.position.clone(),orientation:{heading:si.camera.heading,pitch:si.camera.pitch,roll:si.camera.roll}};O_();dn=new s_(si,Qe,null);try{F_=A_(si)}catch(i){console.error("Failed to create territory boundary",i)}V_();W_();R_();hi.classList.add("hidden");Wi.classList.add("hidden");oi();du();window.addEventListener("resize",()=>{un.aspect=window.innerWidth/window.innerHeight,un.updateProjectionMatrix(),Fn.setSize(window.innerWidth,window.innerHeight);const i=we();i&&i.resize()});window.addEventListener("contextmenu",i=>{i.preventDefault()},!1);
