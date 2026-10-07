/* Grok Bot Chess 3D — bundled with three.js (MIT, (c) 2010-2026 three.js authors) */
(()=>{var js={LEFT:0,MIDDLE:1,RIGHT:2,ROTATE:0,DOLLY:1,PAN:2},Qs={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},km=0,Yd=1,Lm=2;var Nr=1,Dm=2,Fo=3,er=0,Pn=1,pn=2,Mi=0,Bo=1,Bn=2,Kd=3,Zd=4,Nm=5;var Ur=100,Um=101,Om=102,Fm=103,Bm=104,Hm=200,zm=201,Gm=202,Vm=203,Jd=204,jd=205,Wm=206,$m=207,qm=208,Xm=209,Ym=210,Km=211,Zm=212,Jm=213,jm=214,Vc=0,Wc=1,$c=2,Eo=3,qc=4,Xc=5,Yc=6,Kc=7,wh=0,Qm=1,e0=2,qi=0,fl=1,pl=2,ml=3,Or=4,gl=5,yl=6,_l=7;var Qd=300,tr=301,Fr=302,Eh=303,Th=304,vl=306,Gi=1e3,ss=1001,Zc=1002,wn=1003,t0=1004;var xl=1005;var Rn=1006,Ah=1007;var nr=1008;var Jn=1009,ef=1010,tf=1011,Ho=1012,Rh=1013,Xi=1014,Si=1015,In=1016,Ch=1017,Ph=1018,zo=1020,nf=35902,sf=35899,rf=1021,of=1022,wi=1023,os=1026,ir=1027,Ih=1028,kh=1029,sr=1030,Lh=1031;var Dh=1033,bl=33776,Ml=33777,Sl=33778,wl=33779,Nh=35840,Uh=35841,Oh=35842,Fh=35843,Bh=36196,Hh=37492,zh=37496,Gh=37488,Vh=37489,El=37490,Wh=37491,$h=37808,qh=37809,Xh=37810,Yh=37811,Kh=37812,Zh=37813,Jh=37814,jh=37815,Qh=37816,eu=37817,tu=37818,nu=37819,iu=37820,su=37821,ru=36492,ou=36494,au=36495,lu=36283,cu=36284,Tl=36285,hu=36286;var Na=2300,Jc=2301,zc=2302,Dd=2303,Nd=2400,Ud=2401,Od=2402;var n0=3200;var Al=0,i0=1,Ps="",Vt="srgb",Ua="srgb-linear",Oa="linear",bt="srgb";var Gc=7680;var s0=519,r0=512,o0=513,a0=514,uu=515,l0=516,c0=517,du=518,h0=519,af=35044;var lf="300 es",zi=2e3,To=2001;function Qy(n){for(let e=n.length-1;e>=0;--e)if(n[e]>=65535)return!0;return!1}function e_(n){return ArrayBuffer.isView(n)&&!(n instanceof DataView)}function Fa(n){return document.createElementNS("http://www.w3.org/1999/xhtml",n)}function u0(){let n=Fa("canvas");return n.style.display="block",n}var Zp={},Ao=null;function Ba(...n){let e="THREE."+n.shift();Ao?Ao("log",e,...n):console.log(e,...n)}function d0(n){let e=n[0];if(typeof e=="string"&&e.startsWith("TSL:")){let t=n[1];t&&t.isStackTrace?n[0]+=" "+t.getLocation():n[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return n}function Xe(...n){n=d0(n);let e="THREE."+n.shift();if(Ao)Ao("warn",e,...n);else{let t=n[0];t&&t.isStackTrace?console.warn(t.getError(e)):console.warn(e,...n)}}function qe(...n){n=d0(n);let e="THREE."+n.shift();if(Ao)Ao("error",e,...n);else{let t=n[0];t&&t.isStackTrace?console.error(t.getError(e)):console.error(e,...n)}}function Tr(...n){let e=n.join(" ");e in Zp||(Zp[e]=!0,Xe(...n))}function f0(n,e,t){return new Promise(function(i,s){function r(){switch(n.clientWaitSync(e,n.SYNC_FLUSH_COMMANDS_BIT,0)){case n.WAIT_FAILED:s();break;case n.TIMEOUT_EXPIRED:setTimeout(r,t);break;default:i()}}setTimeout(r,t)})}var p0={[Vc]:Wc,[$c]:Yc,[qc]:Kc,[Eo]:Xc,[Wc]:Vc,[Yc]:$c,[Kc]:qc,[Xc]:Eo},Vi=class{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});let i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(t)===-1&&i[e].push(t)}hasEventListener(e,t){let i=this._listeners;return i===void 0?!1:i[e]!==void 0&&i[e].indexOf(t)!==-1}removeEventListener(e,t){let i=this._listeners;if(i===void 0)return;let s=i[e];if(s!==void 0){let r=s.indexOf(t);r!==-1&&s.splice(r,1)}}dispatchEvent(e){let t=this._listeners;if(t===void 0)return;let i=t[e.type];if(i!==void 0){e.target=this;let s=i.slice(0);for(let r=0,o=s.length;r<o;r++)s[r].call(this,e);e.target=null}}},Un=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Jp=1234567,Ia=Math.PI/180,Ro=180/Math.PI;function rs(){let n=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(Un[n&255]+Un[n>>8&255]+Un[n>>16&255]+Un[n>>24&255]+"-"+Un[e&255]+Un[e>>8&255]+"-"+Un[e>>16&15|64]+Un[e>>24&255]+"-"+Un[t&63|128]+Un[t>>8&255]+"-"+Un[t>>16&255]+Un[t>>24&255]+Un[i&255]+Un[i>>8&255]+Un[i>>16&255]+Un[i>>24&255]).toLowerCase()}function it(n,e,t){return Math.max(e,Math.min(t,n))}function cf(n,e){return(n%e+e)%e}function t_(n,e,t,i,s){return i+(n-e)*(s-i)/(t-e)}function n_(n,e,t){return n!==e?(t-n)/(e-n):0}function ka(n,e,t){return(1-t)*n+t*e}function i_(n,e,t,i){return ka(n,e,1-Math.exp(-t*i))}function s_(n,e=1){return e-Math.abs(cf(n,e*2)-e)}function r_(n,e,t){return n<=e?0:n>=t?1:(n=(n-e)/(t-e),n*n*(3-2*n))}function o_(n,e,t){return n<=e?0:n>=t?1:(n=(n-e)/(t-e),n*n*n*(n*(n*6-15)+10))}function a_(n,e){return n+Math.floor(Math.random()*(e-n+1))}function l_(n,e){return n+Math.random()*(e-n)}function c_(n){return n*(.5-Math.random())}function h_(n){n!==void 0&&(Jp=n);let e=Jp+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function u_(n){return n*Ia}function d_(n){return n*Ro}function f_(n){return n>0&&Number.isInteger(n)&&2**Math.round(Math.log2(n))===n}function p_(n){return Math.pow(2,Math.ceil(Math.log(n)/Math.LN2))}function m_(n){return Math.pow(2,Math.floor(Math.log(n)/Math.LN2))}function g_(n,e,t,i,s){let r=Math.cos,o=Math.sin,a=r(t/2),l=o(t/2),c=r((e+i)/2),d=o((e+i)/2),f=r((e-i)/2),h=o((e-i)/2),u=r((i-e)/2),m=o((i-e)/2);switch(s){case"XYX":n.set(a*d,l*f,l*h,a*c);break;case"YZY":n.set(l*h,a*d,l*f,a*c);break;case"ZXZ":n.set(l*f,l*h,a*d,a*c);break;case"XZX":n.set(a*d,l*m,l*u,a*c);break;case"YXY":n.set(l*u,a*d,l*m,a*c);break;case"ZYZ":n.set(l*m,l*u,a*d,a*c);break;default:Xe("MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+s)}}function Hi(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return n/4294967295;case Uint16Array:return n/65535;case Uint8Array:case Uint8ClampedArray:return n/255;case Int32Array:return Math.max(n/2147483647,-1);case Int16Array:return Math.max(n/32767,-1);case Int8Array:return Math.max(n/127,-1);default:throw new Error("THREE.MathUtils: Invalid component type.")}}function Ct(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return Math.round(n*4294967295);case Uint16Array:return Math.round(n*65535);case Uint8Array:case Uint8ClampedArray:return Math.round(n*255);case Int32Array:return Math.round(n*2147483647);case Int16Array:return Math.round(n*32767);case Int8Array:return Math.round(n*127);default:throw new Error("THREE.MathUtils: Invalid component type.")}}var us={DEG2RAD:Ia,RAD2DEG:Ro,generateUUID:rs,clamp:it,euclideanModulo:cf,mapLinear:t_,inverseLerp:n_,lerp:ka,damp:i_,pingpong:s_,smoothstep:r_,smootherstep:o_,randInt:a_,randFloat:l_,randFloatSpread:c_,seededRandom:h_,degToRad:u_,radToDeg:d_,isPowerOfTwo:f_,ceilPowerOfTwo:p_,floorPowerOfTwo:m_,setQuaternionFromProperEuler:g_,normalize:Ct,denormalize:Hi},mf=class mf{constructor(e=0,t=0){this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("THREE.Vector2: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("THREE.Vector2: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){let t=this.x,i=this.y,s=e.elements;return this.x=s[0]*t+s[3]*i+s[6],this.y=s[1]*t+s[4]*i+s[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=it(this.x,e.x,t.x),this.y=it(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=it(this.x,e,t),this.y=it(this.y,e,t),this}clampLength(e,t){let i=this.length();return this.divideScalar(i||1).multiplyScalar(it(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let i=this.dot(e)/t;return Math.acos(it(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,i=this.y-e.y;return t*t+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){let i=Math.cos(t),s=Math.sin(t),r=this.x-e.x,o=this.y-e.y;return this.x=r*i-o*s+e.x,this.y=r*s+o*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}};mf.prototype.isVector2=!0;var j=mf,ai=class{constructor(e=0,t=0,i=0,s=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=i,this._w=s}static slerpFlat(e,t,i,s,r,o,a){let l=i[s+0],c=i[s+1],d=i[s+2],f=i[s+3],h=r[o+0],u=r[o+1],m=r[o+2],y=r[o+3];if(f!==y||l!==h||c!==u||d!==m){let g=l*h+c*u+d*m+f*y;g<0&&(h=-h,u=-u,m=-m,y=-y,g=-g);let p=1-a;if(g<.9995){let v=Math.acos(g),M=Math.sin(v);p=Math.sin(p*v)/M,a=Math.sin(a*v)/M,l=l*p+h*a,c=c*p+u*a,d=d*p+m*a,f=f*p+y*a}else{l=l*p+h*a,c=c*p+u*a,d=d*p+m*a,f=f*p+y*a;let v=1/Math.sqrt(l*l+c*c+d*d+f*f);l*=v,c*=v,d*=v,f*=v}}e[t]=l,e[t+1]=c,e[t+2]=d,e[t+3]=f}static multiplyQuaternionsFlat(e,t,i,s,r,o){let a=i[s],l=i[s+1],c=i[s+2],d=i[s+3],f=r[o],h=r[o+1],u=r[o+2],m=r[o+3];return e[t]=a*m+d*f+l*u-c*h,e[t+1]=l*m+d*h+c*f-a*u,e[t+2]=c*m+d*u+a*h-l*f,e[t+3]=d*m-a*f-l*h-c*u,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,i,s){return this._x=e,this._y=t,this._z=i,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){let i=e._x,s=e._y,r=e._z,o=e._order,a=Math.cos,l=Math.sin,c=a(i/2),d=a(s/2),f=a(r/2),h=l(i/2),u=l(s/2),m=l(r/2);switch(o){case"XYZ":this._x=h*d*f+c*u*m,this._y=c*u*f-h*d*m,this._z=c*d*m+h*u*f,this._w=c*d*f-h*u*m;break;case"YXZ":this._x=h*d*f+c*u*m,this._y=c*u*f-h*d*m,this._z=c*d*m-h*u*f,this._w=c*d*f+h*u*m;break;case"ZXY":this._x=h*d*f-c*u*m,this._y=c*u*f+h*d*m,this._z=c*d*m+h*u*f,this._w=c*d*f-h*u*m;break;case"ZYX":this._x=h*d*f-c*u*m,this._y=c*u*f+h*d*m,this._z=c*d*m-h*u*f,this._w=c*d*f+h*u*m;break;case"YZX":this._x=h*d*f+c*u*m,this._y=c*u*f+h*d*m,this._z=c*d*m-h*u*f,this._w=c*d*f-h*u*m;break;case"XZY":this._x=h*d*f-c*u*m,this._y=c*u*f-h*d*m,this._z=c*d*m+h*u*f,this._w=c*d*f+h*u*m;break;default:Xe("Quaternion: .setFromEuler() encountered an unknown order: "+o)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){let i=t/2,s=Math.sin(i);return this._x=e.x*s,this._y=e.y*s,this._z=e.z*s,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){let t=e.elements,i=t[0],s=t[4],r=t[8],o=t[1],a=t[5],l=t[9],c=t[2],d=t[6],f=t[10],h=i+a+f;if(h>0){let u=.5/Math.sqrt(h+1);this._w=.25/u,this._x=(d-l)*u,this._y=(r-c)*u,this._z=(o-s)*u}else if(i>a&&i>f){let u=2*Math.sqrt(1+i-a-f);this._w=(d-l)/u,this._x=.25*u,this._y=(s+o)/u,this._z=(r+c)/u}else if(a>f){let u=2*Math.sqrt(1+a-i-f);this._w=(r-c)/u,this._x=(s+o)/u,this._y=.25*u,this._z=(l+d)/u}else{let u=2*Math.sqrt(1+f-i-a);this._w=(o-s)/u,this._x=(r+c)/u,this._y=(l+d)/u,this._z=.25*u}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let i=e.dot(t)+1;return i<1e-8?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(it(this.dot(e),-1,1)))}rotateTowards(e,t){let i=this.angleTo(e);if(i===0)return this;let s=Math.min(1,t/i);return this.slerp(e,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){let i=e._x,s=e._y,r=e._z,o=e._w,a=t._x,l=t._y,c=t._z,d=t._w;return this._x=i*d+o*a+s*c-r*l,this._y=s*d+o*l+r*a-i*c,this._z=r*d+o*c+i*l-s*a,this._w=o*d-i*a-s*l-r*c,this._onChangeCallback(),this}slerp(e,t){let i=e._x,s=e._y,r=e._z,o=e._w,a=this.dot(e);a<0&&(i=-i,s=-s,r=-r,o=-o,a=-a);let l=1-t;if(a<.9995){let c=Math.acos(a),d=Math.sin(c);l=Math.sin(l*c)/d,t=Math.sin(t*c)/d,this._x=this._x*l+i*t,this._y=this._y*l+s*t,this._z=this._z*l+r*t,this._w=this._w*l+o*t,this._onChangeCallback()}else this._x=this._x*l+i*t,this._y=this._y*l+s*t,this._z=this._z*l+r*t,this._w=this._w*l+o*t,this.normalize();return this}slerpQuaternions(e,t,i){return this.copy(e).slerp(t,i)}random(){let e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),i=Math.random(),s=Math.sqrt(1-i),r=Math.sqrt(i);return this.set(s*Math.sin(e),s*Math.cos(e),r*Math.sin(t),r*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},gf=class gf{constructor(e=0,t=0,i=0){this.x=e,this.y=t,this.z=i}set(e,t,i){return i===void 0&&(i=this.z),this.x=e,this.y=t,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("THREE.Vector3: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("THREE.Vector3: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(jp.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(jp.setFromAxisAngle(e,t))}applyMatrix3(e){let t=this.x,i=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[3]*i+r[6]*s,this.y=r[1]*t+r[4]*i+r[7]*s,this.z=r[2]*t+r[5]*i+r[8]*s,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){let t=this.x,i=this.y,s=this.z,r=e.elements,o=1/(r[3]*t+r[7]*i+r[11]*s+r[15]);return this.x=(r[0]*t+r[4]*i+r[8]*s+r[12])*o,this.y=(r[1]*t+r[5]*i+r[9]*s+r[13])*o,this.z=(r[2]*t+r[6]*i+r[10]*s+r[14])*o,this}applyQuaternion(e){let t=this.x,i=this.y,s=this.z,r=e.x,o=e.y,a=e.z,l=e.w,c=2*(o*s-a*i),d=2*(a*t-r*s),f=2*(r*i-o*t);return this.x=t+l*c+o*f-a*d,this.y=i+l*d+a*c-r*f,this.z=s+l*f+r*d-o*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){let t=this.x,i=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[4]*i+r[8]*s,this.y=r[1]*t+r[5]*i+r[9]*s,this.z=r[2]*t+r[6]*i+r[10]*s,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=it(this.x,e.x,t.x),this.y=it(this.y,e.y,t.y),this.z=it(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=it(this.x,e,t),this.y=it(this.y,e,t),this.z=it(this.z,e,t),this}clampLength(e,t){let i=this.length();return this.divideScalar(i||1).multiplyScalar(it(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){let i=e.x,s=e.y,r=e.z,o=t.x,a=t.y,l=t.z;return this.x=s*l-r*a,this.y=r*o-i*l,this.z=i*a-s*o,this}projectOnVector(e){let t=e.lengthSq();if(t===0)return this.set(0,0,0);let i=e.dot(this)/t;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return cd.copy(this).projectOnVector(e),this.sub(cd)}reflect(e){return this.sub(cd.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let i=this.dot(e)/t;return Math.acos(it(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,i=this.y-e.y,s=this.z-e.z;return t*t+i*i+s*s}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,i){let s=Math.sin(t)*e;return this.x=s*Math.sin(i),this.y=Math.cos(t)*e,this.z=s*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,i){return this.x=e*Math.sin(t),this.y=i,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){let t=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),s=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=i,this.z=s,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let e=Math.random()*Math.PI*2,t=Math.random()*2-1,i=Math.sqrt(1-t*t);return this.x=i*Math.cos(e),this.y=t,this.z=i*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}};gf.prototype.isVector3=!0;var I=gf,cd=new I,jp=new ai,yf=class yf{constructor(e,t,i,s,r,o,a,l,c){this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,i,s,r,o,a,l,c)}set(e,t,i,s,r,o,a,l,c){let d=this.elements;return d[0]=e,d[1]=s,d[2]=a,d[3]=t,d[4]=r,d[5]=l,d[6]=i,d[7]=o,d[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){let t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],this}extractBasis(e,t,i){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){let t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let i=e.elements,s=t.elements,r=this.elements,o=i[0],a=i[3],l=i[6],c=i[1],d=i[4],f=i[7],h=i[2],u=i[5],m=i[8],y=s[0],g=s[3],p=s[6],v=s[1],M=s[4],_=s[7],S=s[2],E=s[5],P=s[8];return r[0]=o*y+a*v+l*S,r[3]=o*g+a*M+l*E,r[6]=o*p+a*_+l*P,r[1]=c*y+d*v+f*S,r[4]=c*g+d*M+f*E,r[7]=c*p+d*_+f*P,r[2]=h*y+u*v+m*S,r[5]=h*g+u*M+m*E,r[8]=h*p+u*_+m*P,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){let e=this.elements,t=e[0],i=e[1],s=e[2],r=e[3],o=e[4],a=e[5],l=e[6],c=e[7],d=e[8];return t*o*d-t*a*c-i*r*d+i*a*l+s*r*c-s*o*l}invert(){let e=this.elements,t=e[0],i=e[1],s=e[2],r=e[3],o=e[4],a=e[5],l=e[6],c=e[7],d=e[8],f=d*o-a*c,h=a*l-d*r,u=c*r-o*l,m=t*f+i*h+s*u;if(m===0)return this.set(0,0,0,0,0,0,0,0,0);let y=1/m;return e[0]=f*y,e[1]=(s*c-d*i)*y,e[2]=(a*i-s*o)*y,e[3]=h*y,e[4]=(d*t-s*l)*y,e[5]=(s*r-a*t)*y,e[6]=u*y,e[7]=(i*l-c*t)*y,e[8]=(o*t-i*r)*y,this}transpose(){let e,t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){let t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,i,s,r,o,a){let l=Math.cos(r),c=Math.sin(r);return this.set(i*l,i*c,-i*(l*o+c*a)+o+e,-s*c,s*l,-s*(-c*o+l*a)+a+t,0,0,1),this}scale(e,t){return Tr("Matrix3: .scale() is deprecated. Use .makeScale() instead."),this.premultiply(hd.makeScale(e,t)),this}rotate(e){return Tr("Matrix3: .rotate() is deprecated. Use .makeRotation() instead."),this.premultiply(hd.makeRotation(-e)),this}translate(e,t){return Tr("Matrix3: .translate() is deprecated. Use .makeTranslation() instead."),this.premultiply(hd.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){let t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,i,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){let t=this.elements,i=e.elements;for(let s=0;s<9;s++)if(t[s]!==i[s])return!1;return!0}fromArray(e,t=0){for(let i=0;i<9;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){let i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}};yf.prototype.isMatrix3=!0;var et=yf,hd=new et,Qp=new et().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),em=new et().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function y_(){let n={enabled:!0,workingColorSpace:Ua,spaces:{},convert:function(s,r,o){return this.enabled===!1||r===o||!r||!o||(this.spaces[r].transfer===bt&&(s.r=Es(s.r),s.g=Es(s.g),s.b=Es(s.b)),this.spaces[r].primaries!==this.spaces[o].primaries&&(s.applyMatrix3(this.spaces[r].toXYZ),s.applyMatrix3(this.spaces[o].fromXYZ)),this.spaces[o].transfer===bt&&(s.r=wo(s.r),s.g=wo(s.g),s.b=wo(s.b))),s},workingToColorSpace:function(s,r){return this.convert(s,this.workingColorSpace,r)},colorSpaceToWorking:function(s,r){return this.convert(s,r,this.workingColorSpace)},getPrimaries:function(s){return this.spaces[s].primaries},getTransfer:function(s){return s===Ps?Oa:this.spaces[s].transfer},getToneMappingMode:function(s){return this.spaces[s].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(s,r=this.workingColorSpace){return s.fromArray(this.spaces[r].luminanceCoefficients)},define:function(s){Object.assign(this.spaces,s)},_getMatrix:function(s,r,o){return s.copy(this.spaces[r].toXYZ).multiply(this.spaces[o].fromXYZ)},_getDrawingBufferColorSpace:function(s){return this.spaces[s].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(s=this.workingColorSpace){return this.spaces[s].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(s,r){return Tr("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),n.workingToColorSpace(s,r)},toWorkingColorSpace:function(s,r){return Tr("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),n.colorSpaceToWorking(s,r)}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],i=[.3127,.329];return n.define({[Ua]:{primaries:e,whitePoint:i,transfer:Oa,toXYZ:Qp,fromXYZ:em,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:Vt},outputColorSpaceConfig:{drawingBufferColorSpace:Vt}},[Vt]:{primaries:e,whitePoint:i,transfer:bt,toXYZ:Qp,fromXYZ:em,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:Vt}}}),n}var ct=y_();function Es(n){return n<.04045?n*.0773993808:Math.pow(n*.9478672986+.0521327014,2.4)}function wo(n){return n<.0031308?n*12.92:1.055*Math.pow(n,.41666)-.055}var ro,jc=class{static getDataURL(e,t="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let i;if(e instanceof HTMLCanvasElement)i=e;else{ro===void 0&&(ro=Fa("canvas")),ro.width=e.width,ro.height=e.height;let s=ro.getContext("2d");e instanceof ImageData?s.putImageData(e,0,0):s.drawImage(e,0,0,e.width,e.height),i=ro}return i.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){let t=Fa("canvas");t.width=e.width,t.height=e.height;let i=t.getContext("2d");i.drawImage(e,0,0,e.width,e.height);let s=i.getImageData(0,0,e.width,e.height),r=s.data;for(let o=0;o<r.length;o++)r[o]=Es(r[o]/255)*255;return i.putImageData(s,0,0),t}else if(e.data){let t=e.data.slice(0);for(let i=0;i<t.length;i++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[i]=Math.floor(Es(t[i]/255)*255):t[i]=Es(t[i]);return{data:t,width:e.width,height:e.height}}else return Xe("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}},__=0,Co=class{constructor(e=null){this.isTextureSource=!0,Object.defineProperty(this,"id",{value:__++}),this.uuid=rs(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){let t=this.data;return typeof HTMLVideoElement<"u"&&t instanceof HTMLVideoElement?e.set(t.videoWidth,t.videoHeight,0):typeof VideoFrame<"u"&&t instanceof VideoFrame?e.set(t.displayWidth,t.displayHeight,0):t!==null?e.set(t.width,t.height,t.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];let i={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let o=0,a=s.length;o<a;o++)s[o].isDataTexture?r.push(ud(s[o].image)):r.push(ud(s[o]))}else r=ud(s);i.url=r}return t||(e.images[this.uuid]=i),i}};function ud(n){return typeof HTMLImageElement<"u"&&n instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&n instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&n instanceof ImageBitmap?jc.getDataURL(n):n.data?{data:Array.from(n.data),width:n.width,height:n.height,type:n.data.constructor.name}:(Xe("Texture: Unable to serialize Texture."),{})}var v_=0,dd=new I,Wn=class n extends Vi{constructor(e=n.DEFAULT_IMAGE,t=n.DEFAULT_MAPPING,i=ss,s=ss,r=Rn,o=nr,a=wi,l=Jn,c=n.DEFAULT_ANISOTROPY,d=Ps){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:v_++}),this.uuid=rs(),this.name="",this.source=new Co(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=i,this.wrapT=s,this.magFilter=r,this.minFilter=o,this.anisotropy=c,this.format=a,this.internalFormat=null,this.type=l,this.offset=new j(0,0),this.repeat=new j(1,1),this.center=new j(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new et,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=d,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0,this.normalized=!1}get width(){return this.source.getSize(dd).x}get height(){return this.source.getSize(dd).y}get depth(){return this.source.getSize(dd).z}get image(){return this.source.data}set image(e){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.normalized=e.normalized,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(let t in e){let i=e[t];if(i===void 0){Xe(`Texture.setValues(): parameter '${t}' has value of undefined.`);continue}let s=this[t];if(s===void 0){Xe(`Texture.setValues(): property '${t}' does not exist.`);continue}s&&i&&s.isVector2&&i.isVector2||s&&i&&s.isVector3&&i.isVector3||s&&i&&s.isMatrix3&&i.isMatrix3?s.copy(i):this[t]=i}}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];let i={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),t||(e.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Qd)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Gi:e.x=e.x-Math.floor(e.x);break;case ss:e.x=e.x<0?0:1;break;case Zc:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Gi:e.y=e.y-Math.floor(e.y);break;case ss:e.y=e.y<0?0:1;break;case Zc:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}};Wn.DEFAULT_IMAGE=null;Wn.DEFAULT_MAPPING=Qd;Wn.DEFAULT_ANISOTROPY=1;var _f=class _f{constructor(e=0,t=0,i=0,s=1){this.x=e,this.y=t,this.z=i,this.w=s}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,i,s){return this.x=e,this.y=t,this.z=i,this.w=s,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("THREE.Vector4: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("THREE.Vector4: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){let t=this.x,i=this.y,s=this.z,r=this.w,o=e.elements;return this.x=o[0]*t+o[4]*i+o[8]*s+o[12]*r,this.y=o[1]*t+o[5]*i+o[9]*s+o[13]*r,this.z=o[2]*t+o[6]*i+o[10]*s+o[14]*r,this.w=o[3]*t+o[7]*i+o[11]*s+o[15]*r,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);let t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,i,s,r,l=e.elements,c=l[0],d=l[4],f=l[8],h=l[1],u=l[5],m=l[9],y=l[2],g=l[6],p=l[10];if(Math.abs(d-h)<.01&&Math.abs(f-y)<.01&&Math.abs(m-g)<.01){if(Math.abs(d+h)<.1&&Math.abs(f+y)<.1&&Math.abs(m+g)<.1&&Math.abs(c+u+p-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;let M=(c+1)/2,_=(u+1)/2,S=(p+1)/2,E=(d+h)/4,P=(f+y)/4,x=(m+g)/4;return M>_&&M>S?M<.01?(i=0,s=.707106781,r=.707106781):(i=Math.sqrt(M),s=E/i,r=P/i):_>S?_<.01?(i=.707106781,s=0,r=.707106781):(s=Math.sqrt(_),i=E/s,r=x/s):S<.01?(i=.707106781,s=.707106781,r=0):(r=Math.sqrt(S),i=P/r,s=x/r),this.set(i,s,r,t),this}let v=Math.sqrt((g-m)*(g-m)+(f-y)*(f-y)+(h-d)*(h-d));return Math.abs(v)<.001&&(v=1),this.x=(g-m)/v,this.y=(f-y)/v,this.z=(h-d)/v,this.w=Math.acos((c+u+p-1)/2),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=it(this.x,e.x,t.x),this.y=it(this.y,e.y,t.y),this.z=it(this.z,e.z,t.z),this.w=it(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=it(this.x,e,t),this.y=it(this.y,e,t),this.z=it(this.z,e,t),this.w=it(this.w,e,t),this}clampLength(e,t){let i=this.length();return this.divideScalar(i||1).multiplyScalar(it(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this.w=e.w+(t.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}};_f.prototype.isVector4=!0;var Xt=_f,Qc=class extends Vi{constructor(e=1,t=1,i={}){super(),i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Rn,depthBuffer:!0,stencilBuffer:!1,resolveColorBuffer:!0,resolveDepthBuffer:!0,resolveStencilBuffer:!0,storeMultisampledColorBuffer:!0,storeMultisampledDepthBuffer:!0,storeMultisampledStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},i),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=i.depth,this.scissor=new Xt(0,0,e,t),this.scissorTest=!1,this.viewport=new Xt(0,0,e,t),this.textures=[];let s={width:e,height:t,depth:i.depth},r=new Wn(s),o=i.count;for(let a=0;a<o;a++)this.textures[a]=r.clone(),this.textures[a].isRenderTargetTexture=!0,this.textures[a].renderTarget=this;this._setTextureOptions(i),this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveColorBuffer=i.resolveColorBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this.storeMultisampledColorBuffer=i.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=i.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=i.storeMultisampledStencilBuffer,this._depthTexture=null,this.depthTexture=i.depthTexture,this.samples=i.samples,this.multiview=i.multiview,this.useArrayDepthTexture=i.useArrayDepthTexture}_setTextureOptions(e={}){let t={minFilter:Rn,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(t.mapping=e.mapping),e.wrapS!==void 0&&(t.wrapS=e.wrapS),e.wrapT!==void 0&&(t.wrapT=e.wrapT),e.wrapR!==void 0&&(t.wrapR=e.wrapR),e.magFilter!==void 0&&(t.magFilter=e.magFilter),e.minFilter!==void 0&&(t.minFilter=e.minFilter),e.format!==void 0&&(t.format=e.format),e.type!==void 0&&(t.type=e.type),e.anisotropy!==void 0&&(t.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(t.colorSpace=e.colorSpace),e.flipY!==void 0&&(t.flipY=e.flipY),e.generateMipmaps!==void 0&&(t.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(t.internalFormat=e.internalFormat);for(let i=0;i<this.textures.length;i++)this.textures[i].setValues(t)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&this._depthTexture.renderTarget===this&&(this._depthTexture.renderTarget=null),e!==null&&e.renderTarget===null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,i=1){if(this.width!==e||this.height!==t||this.depth!==i){this.width=e,this.height=t,this.depth=i;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=e,this.textures[s].image.height=t,this.textures[s].image.depth=i,this.textures[s].isData3DTexture!==!0&&(this.textures[s].isArrayTexture=this.textures[s].image.depth>1);this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,i=e.textures.length;t<i;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;let s=Object.assign({},e.textures[t].image);this.textures[t].source=new Co(s)}if(this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveColorBuffer=e.resolveColorBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,this.storeMultisampledColorBuffer=e.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=e.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=e.storeMultisampledStencilBuffer,e.depthTexture!==null)if(e.depthTexture.renderTarget===e){let t=e.depthTexture.clone();t.renderTarget=null,this.depthTexture=t}else this.depthTexture=e.depthTexture;return this.samples=e.samples,this.multiview=e.multiview,this.useArrayDepthTexture=e.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:"dispose"})}},hn=class extends Qc{constructor(e=1,t=1,i={}){super(e,t,i),this.isWebGLRenderTarget=!0}},Ha=class extends Wn{constructor(e=null,t=1,i=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:i,depth:s},this.magFilter=wn,this.minFilter=wn,this.wrapR=ss,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}copy(e){return super.copy(e),this.wrapR=e.wrapR,this}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}};var eh=class extends Wn{constructor(e=null,t=1,i=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:i,depth:s},this.magFilter=wn,this.minFilter=wn,this.wrapR=ss,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}copy(e){return super.copy(e),this.wrapR=e.wrapR,this}};var Sh=class Sh{constructor(e,t,i,s,r,o,a,l,c,d,f,h,u,m,y,g){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,i,s,r,o,a,l,c,d,f,h,u,m,y,g)}set(e,t,i,s,r,o,a,l,c,d,f,h,u,m,y,g){let p=this.elements;return p[0]=e,p[4]=t,p[8]=i,p[12]=s,p[1]=r,p[5]=o,p[9]=a,p[13]=l,p[2]=c,p[6]=d,p[10]=f,p[14]=h,p[3]=u,p[7]=m,p[11]=y,p[15]=g,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Sh().fromArray(this.elements)}copy(e){let t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],t[9]=i[9],t[10]=i[10],t[11]=i[11],t[12]=i[12],t[13]=i[13],t[14]=i[14],t[15]=i[15],this}copyPosition(e){let t=this.elements,i=e.elements;return t[12]=i[12],t[13]=i[13],t[14]=i[14],this}setFromMatrix3(e){let t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,i){return this.determinantAffine()===0?(e.set(1,0,0),t.set(0,1,0),i.set(0,0,1),this):(e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this)}makeBasis(e,t,i){return this.set(e.x,t.x,i.x,0,e.y,t.y,i.y,0,e.z,t.z,i.z,0,0,0,0,1),this}extractRotation(e){if(e.determinantAffine()===0)return this.identity();let t=this.elements,i=e.elements,s=1/oo.setFromMatrixColumn(e,0).length(),r=1/oo.setFromMatrixColumn(e,1).length(),o=1/oo.setFromMatrixColumn(e,2).length();return t[0]=i[0]*s,t[1]=i[1]*s,t[2]=i[2]*s,t[3]=0,t[4]=i[4]*r,t[5]=i[5]*r,t[6]=i[6]*r,t[7]=0,t[8]=i[8]*o,t[9]=i[9]*o,t[10]=i[10]*o,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){let t=this.elements,i=e.x,s=e.y,r=e.z,o=Math.cos(i),a=Math.sin(i),l=Math.cos(s),c=Math.sin(s),d=Math.cos(r),f=Math.sin(r);if(e.order==="XYZ"){let h=o*d,u=o*f,m=a*d,y=a*f;t[0]=l*d,t[4]=-l*f,t[8]=c,t[1]=u+m*c,t[5]=h-y*c,t[9]=-a*l,t[2]=y-h*c,t[6]=m+u*c,t[10]=o*l}else if(e.order==="YXZ"){let h=l*d,u=l*f,m=c*d,y=c*f;t[0]=h+y*a,t[4]=m*a-u,t[8]=o*c,t[1]=o*f,t[5]=o*d,t[9]=-a,t[2]=u*a-m,t[6]=y+h*a,t[10]=o*l}else if(e.order==="ZXY"){let h=l*d,u=l*f,m=c*d,y=c*f;t[0]=h-y*a,t[4]=-o*f,t[8]=m+u*a,t[1]=u+m*a,t[5]=o*d,t[9]=y-h*a,t[2]=-o*c,t[6]=a,t[10]=o*l}else if(e.order==="ZYX"){let h=o*d,u=o*f,m=a*d,y=a*f;t[0]=l*d,t[4]=m*c-u,t[8]=h*c+y,t[1]=l*f,t[5]=y*c+h,t[9]=u*c-m,t[2]=-c,t[6]=a*l,t[10]=o*l}else if(e.order==="YZX"){let h=o*l,u=o*c,m=a*l,y=a*c;t[0]=l*d,t[4]=y-h*f,t[8]=m*f+u,t[1]=f,t[5]=o*d,t[9]=-a*d,t[2]=-c*d,t[6]=u*f+m,t[10]=h-y*f}else if(e.order==="XZY"){let h=o*l,u=o*c,m=a*l,y=a*c;t[0]=l*d,t[4]=-f,t[8]=c*d,t[1]=h*f+y,t[5]=o*d,t[9]=u*f-m,t[2]=m*f-u,t[6]=a*d,t[10]=y*f+h}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(x_,e,b_)}lookAt(e,t,i){let s=this.elements;return si.subVectors(e,t),si.lengthSq()===0&&(si.z=1),si.normalize(),Hs.crossVectors(i,si),Hs.lengthSq()===0&&(Math.abs(i.z)===1?si.x+=1e-4:si.z+=1e-4,si.normalize(),Hs.crossVectors(i,si)),Hs.normalize(),pc.crossVectors(si,Hs),s[0]=Hs.x,s[4]=pc.x,s[8]=si.x,s[1]=Hs.y,s[5]=pc.y,s[9]=si.y,s[2]=Hs.z,s[6]=pc.z,s[10]=si.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let i=e.elements,s=t.elements,r=this.elements,o=i[0],a=i[4],l=i[8],c=i[12],d=i[1],f=i[5],h=i[9],u=i[13],m=i[2],y=i[6],g=i[10],p=i[14],v=i[3],M=i[7],_=i[11],S=i[15],E=s[0],P=s[4],x=s[8],A=s[12],T=s[1],C=s[5],k=s[9],D=s[13],L=s[2],F=s[6],B=s[10],$=s[14],se=s[3],X=s[7],Q=s[11],ne=s[15];return r[0]=o*E+a*T+l*L+c*se,r[4]=o*P+a*C+l*F+c*X,r[8]=o*x+a*k+l*B+c*Q,r[12]=o*A+a*D+l*$+c*ne,r[1]=d*E+f*T+h*L+u*se,r[5]=d*P+f*C+h*F+u*X,r[9]=d*x+f*k+h*B+u*Q,r[13]=d*A+f*D+h*$+u*ne,r[2]=m*E+y*T+g*L+p*se,r[6]=m*P+y*C+g*F+p*X,r[10]=m*x+y*k+g*B+p*Q,r[14]=m*A+y*D+g*$+p*ne,r[3]=v*E+M*T+_*L+S*se,r[7]=v*P+M*C+_*F+S*X,r[11]=v*x+M*k+_*B+S*Q,r[15]=v*A+M*D+_*$+S*ne,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){let e=this.elements,t=e[0],i=e[4],s=e[8],r=e[12],o=e[1],a=e[5],l=e[9],c=e[13],d=e[2],f=e[6],h=e[10],u=e[14],m=e[3],y=e[7],g=e[11],p=e[15],v=l*u-c*h,M=a*u-c*f,_=a*h-l*f,S=o*u-c*d,E=o*h-l*d,P=o*f-a*d;return t*(y*v-g*M+p*_)-i*(m*v-g*S+p*E)+s*(m*M-y*S+p*P)-r*(m*_-y*E+g*P)}determinantAffine(){let e=this.elements,t=e[0],i=e[4],s=e[8],r=e[1],o=e[5],a=e[9],l=e[2],c=e[6],d=e[10];return t*(o*d-a*c)-i*(r*d-a*l)+s*(r*c-o*l)}transpose(){let e=this.elements,t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,i){let s=this.elements;return e.isVector3?(s[12]=e.x,s[13]=e.y,s[14]=e.z):(s[12]=e,s[13]=t,s[14]=i),this}invert(){let e=this.elements,t=e[0],i=e[1],s=e[2],r=e[3],o=e[4],a=e[5],l=e[6],c=e[7],d=e[8],f=e[9],h=e[10],u=e[11],m=e[12],y=e[13],g=e[14],p=e[15],v=t*a-i*o,M=t*l-s*o,_=t*c-r*o,S=i*l-s*a,E=i*c-r*a,P=s*c-r*l,x=d*y-f*m,A=d*g-h*m,T=d*p-u*m,C=f*g-h*y,k=f*p-u*y,D=h*p-u*g,L=v*D-M*k+_*C+S*T-E*A+P*x;if(L===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let F=1/L;return e[0]=(a*D-l*k+c*C)*F,e[1]=(s*k-i*D-r*C)*F,e[2]=(y*P-g*E+p*S)*F,e[3]=(h*E-f*P-u*S)*F,e[4]=(l*T-o*D-c*A)*F,e[5]=(t*D-s*T+r*A)*F,e[6]=(g*_-m*P-p*M)*F,e[7]=(d*P-h*_+u*M)*F,e[8]=(o*k-a*T+c*x)*F,e[9]=(i*T-t*k-r*x)*F,e[10]=(m*E-y*_+p*v)*F,e[11]=(f*_-d*E-u*v)*F,e[12]=(a*A-o*C-l*x)*F,e[13]=(t*C-i*A+s*x)*F,e[14]=(y*M-m*S-g*v)*F,e[15]=(d*S-f*M+h*v)*F,this}scale(e){let t=this.elements,i=e.x,s=e.y,r=e.z;return t[0]*=i,t[4]*=s,t[8]*=r,t[1]*=i,t[5]*=s,t[9]*=r,t[2]*=i,t[6]*=s,t[10]*=r,t[3]*=i,t[7]*=s,t[11]*=r,this}getMaxScaleOnAxis(){let e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],s=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,i,s))}makeTranslation(e,t,i){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,i,0,0,0,1),this}makeRotationX(e){let t=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,t,-i,0,0,i,t,0,0,0,0,1),this}makeRotationY(e){let t=Math.cos(e),i=Math.sin(e);return this.set(t,0,i,0,0,1,0,0,-i,0,t,0,0,0,0,1),this}makeRotationZ(e){let t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,0,i,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){let i=Math.cos(t),s=Math.sin(t),r=1-i,o=e.x,a=e.y,l=e.z,c=r*o,d=r*a;return this.set(c*o+i,c*a-s*l,c*l+s*a,0,c*a+s*l,d*a+i,d*l-s*o,0,c*l-s*a,d*l+s*o,r*l*l+i,0,0,0,0,1),this}makeScale(e,t,i){return this.set(e,0,0,0,0,t,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,t,i,s,r,o){return this.set(1,i,r,0,e,1,o,0,t,s,1,0,0,0,0,1),this}compose(e,t,i){let s=this.elements,r=t._x,o=t._y,a=t._z,l=t._w,c=r+r,d=o+o,f=a+a,h=r*c,u=r*d,m=r*f,y=o*d,g=o*f,p=a*f,v=l*c,M=l*d,_=l*f,S=i.x,E=i.y,P=i.z;return s[0]=(1-(y+p))*S,s[1]=(u+_)*S,s[2]=(m-M)*S,s[3]=0,s[4]=(u-_)*E,s[5]=(1-(h+p))*E,s[6]=(g+v)*E,s[7]=0,s[8]=(m+M)*P,s[9]=(g-v)*P,s[10]=(1-(h+y))*P,s[11]=0,s[12]=e.x,s[13]=e.y,s[14]=e.z,s[15]=1,this}decompose(e,t,i){let s=this.elements;e.x=s[12],e.y=s[13],e.z=s[14];let r=this.determinantAffine();if(r===0)return i.set(1,1,1),t.identity(),this;let o=oo.set(s[0],s[1],s[2]).length(),a=oo.set(s[4],s[5],s[6]).length(),l=oo.set(s[8],s[9],s[10]).length();r<0&&(o=-o),Oi.copy(this);let c=1/o,d=1/a,f=1/l;return Oi.elements[0]*=c,Oi.elements[1]*=c,Oi.elements[2]*=c,Oi.elements[4]*=d,Oi.elements[5]*=d,Oi.elements[6]*=d,Oi.elements[8]*=f,Oi.elements[9]*=f,Oi.elements[10]*=f,t.setFromRotationMatrix(Oi),i.x=o,i.y=a,i.z=l,this}makePerspective(e,t,i,s,r,o,a=zi,l=!1){let c=this.elements,d=2*r/(t-e),f=2*r/(i-s),h=(t+e)/(t-e),u=(i+s)/(i-s),m,y;if(l)m=r/(o-r),y=o*r/(o-r);else if(a===zi)m=-(o+r)/(o-r),y=-2*o*r/(o-r);else if(a===To)m=-o/(o-r),y=-o*r/(o-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return c[0]=d,c[4]=0,c[8]=h,c[12]=0,c[1]=0,c[5]=f,c[9]=u,c[13]=0,c[2]=0,c[6]=0,c[10]=m,c[14]=y,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(e,t,i,s,r,o,a=zi,l=!1){let c=this.elements,d=2/(t-e),f=2/(i-s),h=-(t+e)/(t-e),u=-(i+s)/(i-s),m,y;if(l)m=1/(o-r),y=o/(o-r);else if(a===zi)m=-2/(o-r),y=-(o+r)/(o-r);else if(a===To)m=-1/(o-r),y=-r/(o-r);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return c[0]=d,c[4]=0,c[8]=0,c[12]=h,c[1]=0,c[5]=f,c[9]=0,c[13]=u,c[2]=0,c[6]=0,c[10]=m,c[14]=y,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(e){let t=this.elements,i=e.elements;for(let s=0;s<16;s++)if(t[s]!==i[s])return!1;return!0}fromArray(e,t=0){for(let i=0;i<16;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){let i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e[t+9]=i[9],e[t+10]=i[10],e[t+11]=i[11],e[t+12]=i[12],e[t+13]=i[13],e[t+14]=i[14],e[t+15]=i[15],e}};Sh.prototype.isMatrix4=!0;var Et=Sh,oo=new I,Oi=new Et,x_=new I(0,0,0),b_=new I(1,1,1),Hs=new I,pc=new I,si=new I,tm=new Et,nm=new ai,as=class n{constructor(e=0,t=0,i=0,s=n.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=i,this._order=s}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,i,s=this._order){return this._x=e,this._y=t,this._z=i,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,i=!0){let s=e.elements,r=s[0],o=s[4],a=s[8],l=s[1],c=s[5],d=s[9],f=s[2],h=s[6],u=s[10];switch(t){case"XYZ":this._y=Math.asin(it(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-d,u),this._z=Math.atan2(-o,r)):(this._x=Math.atan2(h,c),this._z=0);break;case"YXZ":this._x=Math.asin(-it(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(a,u),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-f,r),this._z=0);break;case"ZXY":this._x=Math.asin(it(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(-f,u),this._z=Math.atan2(-o,c)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-it(f,-1,1)),Math.abs(f)<.9999999?(this._x=Math.atan2(h,u),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-o,c));break;case"YZX":this._z=Math.asin(it(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-d,c),this._y=Math.atan2(-f,r)):(this._x=0,this._y=Math.atan2(a,u));break;case"XZY":this._z=Math.asin(-it(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(h,c),this._y=Math.atan2(a,r)):(this._x=Math.atan2(-d,u),this._y=0);break;default:Xe("Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,i===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,i){return tm.makeRotationFromQuaternion(e),this.setFromRotationMatrix(tm,t,i)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return nm.setFromEuler(this),this.setFromQuaternion(nm,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};as.DEFAULT_ORDER="XYZ";var Po=class{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}},M_=0,im=new I,ao=new ai,vs=new Et,mc=new I,ba=new I,S_=new I,w_=new ai,sm=new I(1,0,0),rm=new I(0,1,0),om=new I(0,0,1),am={type:"added"},E_={type:"removed"},lo={type:"childadded",child:null},fd={type:"childremoved",child:null},un=class n extends Vi{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:M_++}),this.uuid=rs(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=n.DEFAULT_UP.clone();let e=new I,t=new as,i=new ai,s=new I(1,1,1);function r(){i.setFromEuler(t,!1)}function o(){t.setFromQuaternion(i,void 0,!1)}t._onChange(r),i._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new Et},normalMatrix:{value:new et}}),this.matrix=new Et,this.matrixWorld=new Et,this.matrixAutoUpdate=n.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=n.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Po,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return ao.setFromAxisAngle(e,t),this.quaternion.multiply(ao),this}rotateOnWorldAxis(e,t){return ao.setFromAxisAngle(e,t),this.quaternion.premultiply(ao),this}rotateX(e){return this.rotateOnAxis(sm,e)}rotateY(e){return this.rotateOnAxis(rm,e)}rotateZ(e){return this.rotateOnAxis(om,e)}translateOnAxis(e,t){return im.copy(e).applyQuaternion(this.quaternion),this.position.add(im.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(sm,e)}translateY(e){return this.translateOnAxis(rm,e)}translateZ(e){return this.translateOnAxis(om,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(vs.copy(this.matrixWorld).invert())}lookAt(e,t,i){e.isVector3?mc.copy(e):mc.set(e,t,i);let s=this.parent;this.updateWorldMatrix(!0,!1),ba.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?vs.lookAt(ba,mc,this.up):vs.lookAt(mc,ba,this.up),this.quaternion.setFromRotationMatrix(vs),s&&(vs.extractRotation(s.matrixWorld),ao.setFromRotationMatrix(vs),this.quaternion.premultiply(ao.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(qe("Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(am),lo.child=e,this.dispatchEvent(lo),lo.child=null):qe("Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}let t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(E_),fd.child=e,this.dispatchEvent(fd),fd.child=null),this}removeFromParent(){let e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),vs.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),vs.multiply(e.parent.matrixWorld)),e.applyMatrix4(vs),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(am),lo.child=e,this.dispatchEvent(lo),lo.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let i=0,s=this.children.length;i<s;i++){let o=this.children[i].getObjectByProperty(e,t);if(o!==void 0)return o}}getObjectsByProperty(e,t,i=[]){this[e]===t&&i.push(this);let s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].getObjectsByProperty(e,t,i);return i}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(ba,e,S_),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(ba,w_,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);let t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}intersectsFrustum(){}traverse(e){e(this);let t=this.children;for(let i=0,s=t.length;i<s;i++)t[i].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);let t=this.children;for(let i=0,s=t.length;i<s;i++)t[i].traverseVisible(e)}traverseAncestors(e){let t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);let e=this.pivot;if(e!==null){let t=e.x,i=e.y,s=e.z,r=this.matrix.elements;r[12]+=t-r[0]*t-r[4]*i-r[8]*s,r[13]+=i-r[1]*t-r[5]*i-r[9]*s,r[14]+=s-r[2]*t-r[6]*i-r[10]*s}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);let t=this.children;for(let i=0,s=t.length;i<s;i++)t[i].updateMatrixWorld(e)}updateWorldMatrix(e,t,i=!1){let s=this.parent;if(e===!0&&s!==null&&s.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||i)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,i=!0),t===!0){let r=this.children;for(let o=0,a=r.length;o<a;o++)r[o].updateWorldMatrix(!1,!0,i)}}toJSON(e){let t=e===void 0||typeof e=="string",i={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});let s={};s.uuid=this.uuid,s.type=this.type,s.name=this.name,s.castShadow=this.castShadow,s.receiveShadow=this.receiveShadow,s.visible=this.visible,s.frustumCulled=this.frustumCulled,s.renderOrder=this.renderOrder,s.static=this.static,s.matrixAutoUpdate=this.matrixAutoUpdate,Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.pivot!==null&&(s.pivot=this.pivot.toArray()),this.morphTargetDictionary!==void 0&&(s.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(s.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.geometryInfo=this._geometryInfo.map(a=>({...a,boundingBox:a.boundingBox?a.boundingBox.toJSON():void 0,boundingSphere:a.boundingSphere?a.boundingSphere.toJSON():void 0})),s.instanceInfo=this._instanceInfo.map(a=>({...a})),s.availableInstanceIds=this._availableInstanceIds.slice(),s.availableGeometryIds=this._availableGeometryIds.slice(),s.nextIndexStart=this._nextIndexStart,s.nextVertexStart=this._nextVertexStart,s.geometryCount=this._geometryCount,s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.matricesTexture=this._matricesTexture.toJSON(e),s.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(s.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(s.boundingBox=this.boundingBox.toJSON()));function r(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(e.geometries,this.geometry);let a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){let l=a.shapes;if(Array.isArray(l))for(let c=0,d=l.length;c<d;c++){let f=l[c];r(e.shapes,f)}else r(e.shapes,l)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(e.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let a=[];for(let l=0,c=this.material.length;l<c;l++)a.push(r(e.materials,this.material[l]));s.material=a}else s.material=r(e.materials,this.material);if(this.children.length>0){s.children=[];for(let a=0;a<this.children.length;a++)s.children.push(this.children[a].toJSON(e).object)}if(this.animations.length>0){s.animations=[];for(let a=0;a<this.animations.length;a++){let l=this.animations[a];s.animations.push(r(e.animations,l))}}if(t){let a=o(e.geometries),l=o(e.materials),c=o(e.textures),d=o(e.images),f=o(e.shapes),h=o(e.skeletons),u=o(e.animations),m=o(e.nodes);a.length>0&&(i.geometries=a),l.length>0&&(i.materials=l),c.length>0&&(i.textures=c),d.length>0&&(i.images=d),f.length>0&&(i.shapes=f),h.length>0&&(i.skeletons=h),u.length>0&&(i.animations=u),m.length>0&&(i.nodes=m)}return i.object=s,i;function o(a){let l=[];for(let c in a){let d=a[c];delete d.metadata,l.push(d)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.pivot=e.pivot!==null?e.pivot.clone():null,this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.static=e.static,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let i=0;i<e.children.length;i++){let s=e.children[i];this.add(s.clone())}return this}dispose(){this.dispatchEvent({type:"dispose"})}};un.DEFAULT_UP=new I(0,1,0);un.DEFAULT_MATRIX_AUTO_UPDATE=!0;un.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var gt=class extends un{constructor(){super(),this.isGroup=!0,this.type="Group"}},T_={type:"move"},Io=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new gt,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new gt,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new I,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new I),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new gt,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new I,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new I,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){let t=this._hand;if(t)for(let i of e.hand.values())this._getHandJoint(t,i)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,i){let s=null,r=null,o=null,a=this._targetRay,l=this._grip,c=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(c&&e.hand){o=!0;for(let y of e.hand.values()){let g=t.getJointPose(y,i),p=this._getHandJoint(c,y);g!==null&&(p.matrix.fromArray(g.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,p.jointRadius=g.radius),p.visible=g!==null}let d=c.joints["index-finger-tip"],f=c.joints["thumb-tip"],h=d.position.distanceTo(f.position),u=.02,m=.005;c.inputState.pinching&&h>u+m?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&h<=u-m&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(r=t.getPose(e.gripSpace,i),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1,l.eventsEnabled&&l.dispatchEvent({type:"gripUpdated",data:e,target:this})));a!==null&&(s=t.getPose(e.targetRaySpace,i),s===null&&r!==null&&(s=r),s!==null&&(a.matrix.fromArray(s.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,s.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(s.linearVelocity)):a.hasLinearVelocity=!1,s.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(s.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(T_)))}return a!==null&&(a.visible=s!==null),l!==null&&(l.visible=r!==null),c!==null&&(c.visible=o!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){let i=new gt;i.matrixAutoUpdate=!1,i.visible=!1,e.joints[t.jointName]=i,e.add(i)}return e.joints[t.jointName]}},m0={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},zs={h:0,s:0,l:0},gc={h:0,s:0,l:0};function pd(n,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?n+(e-n)*6*t:t<1/2?e:t<2/3?n+(e-n)*6*(2/3-t):n}var Ie=class{constructor(e,t,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,i)}set(e,t,i){if(t===void 0&&i===void 0){let s=e;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(e,t,i);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=Vt){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,ct.colorSpaceToWorking(this,t),this}setRGB(e,t,i,s=ct.workingColorSpace){return this.r=e,this.g=t,this.b=i,ct.colorSpaceToWorking(this,s),this}setHSL(e,t,i,s=ct.workingColorSpace){if(e=cf(e,1),t=it(t,0,1),i=it(i,0,1),t===0)this.r=this.g=this.b=i;else{let r=i<=.5?i*(1+t):i+t-i*t,o=2*i-r;this.r=pd(o,r,e+1/3),this.g=pd(o,r,e),this.b=pd(o,r,e-1/3)}return ct.colorSpaceToWorking(this,s),this}setStyle(e,t=Vt){function i(r){r!==void 0&&parseFloat(r)<1&&Xe("Color: Alpha component of "+e+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(e)){let r,o=s[1],a=s[2];switch(o){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,t);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,t);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,t);break;default:Xe("Color: Unknown color model "+e)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(e)){let r=s[1],o=r.length;if(o===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,t);if(o===6)return this.setHex(parseInt(r,16),t);Xe("Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=Vt){let i=m0[e.toLowerCase()];return i!==void 0?this.setHex(i,t):Xe("Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Es(e.r),this.g=Es(e.g),this.b=Es(e.b),this}copyLinearToSRGB(e){return this.r=wo(e.r),this.g=wo(e.g),this.b=wo(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Vt){return ct.workingToColorSpace(On.copy(this),e),Math.round(it(On.r*255,0,255))*65536+Math.round(it(On.g*255,0,255))*256+Math.round(it(On.b*255,0,255))}getHexString(e=Vt){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=ct.workingColorSpace){ct.workingToColorSpace(On.copy(this),t);let i=On.r,s=On.g,r=On.b,o=Math.max(i,s,r),a=Math.min(i,s,r),l,c,d=(a+o)/2;if(a===o)l=0,c=0;else{let f=o-a;switch(c=d<=.5?f/(o+a):f/(2-o-a),o){case i:l=(s-r)/f+(s<r?6:0);break;case s:l=(r-i)/f+2;break;case r:l=(i-s)/f+4;break}l/=6}return e.h=l,e.s=c,e.l=d,e}getRGB(e,t=ct.workingColorSpace){return ct.workingToColorSpace(On.copy(this),t),e.r=On.r,e.g=On.g,e.b=On.b,e}getStyle(e=Vt){ct.workingToColorSpace(On.copy(this),e);let t=On.r,i=On.g,s=On.b;return e!==Vt?`color(${e} ${t.toFixed(3)} ${i.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(i*255)},${Math.round(s*255)})`}offsetHSL(e,t,i){return this.getHSL(zs),this.setHSL(zs.h+e,zs.s+t,zs.l+i)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,i){return this.r=e.r+(t.r-e.r)*i,this.g=e.g+(t.g-e.g)*i,this.b=e.b+(t.b-e.b)*i,this}lerpHSL(e,t){this.getHSL(zs),e.getHSL(gc);let i=ka(zs.h,gc.h,t),s=ka(zs.s,gc.s,t),r=ka(zs.l,gc.l,t);return this.setHSL(i,s,r),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){let t=this.r,i=this.g,s=this.b,r=e.elements;return this.r=r[0]*t+r[3]*i+r[6]*s,this.g=r[1]*t+r[4]*i+r[7]*s,this.b=r[2]*t+r[5]*i+r[8]*s,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},On=new Ie;Ie.NAMES=m0;var za=class n{constructor(e,t=1,i=1e3){this.isFog=!0,this.name="",this.color=new Ie(e),this.near=t,this.far=i}clone(){return new n(this.color,this.near,this.far)}toJSON(){return{type:"Fog",name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}},Ar=class extends un{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new as,this.environmentIntensity=1,this.environmentRotation=new as,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){let t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),t.object.backgroundBlurriness=this.backgroundBlurriness,t.object.backgroundIntensity=this.backgroundIntensity,t.object.backgroundRotation=this.backgroundRotation.toArray(),t.object.environmentIntensity=this.environmentIntensity,t.object.environmentRotation=this.environmentRotation.toArray(),t}},Fi=new I,xs=new I,md=new I,bs=new I,co=new I,ho=new I,lm=new I,gd=new I,yd=new I,_d=new I,vd=new Xt,xd=new Xt,bd=new Xt,ws=class n{constructor(e=new I,t=new I,i=new I){this.a=e,this.b=t,this.c=i}static getNormal(e,t,i,s){s.subVectors(i,t),Fi.subVectors(e,t),s.cross(Fi);let r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(e,t,i,s,r){Fi.subVectors(s,t),xs.subVectors(i,t),md.subVectors(e,t);let o=Fi.dot(Fi),a=Fi.dot(xs),l=Fi.dot(md),c=xs.dot(xs),d=xs.dot(md),f=o*c-a*a;if(f===0)return r.set(0,0,0),null;let h=1/f,u=(c*l-a*d)*h,m=(o*d-a*l)*h;return r.set(1-u-m,m,u)}static containsPoint(e,t,i,s){return this.getBarycoord(e,t,i,s,bs)===null?!1:bs.x>=0&&bs.y>=0&&bs.x+bs.y<=1}static getInterpolation(e,t,i,s,r,o,a,l){return this.getBarycoord(e,t,i,s,bs)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(r,bs.x),l.addScaledVector(o,bs.y),l.addScaledVector(a,bs.z),l)}static getInterpolatedAttribute(e,t,i,s,r,o){return vd.setScalar(0),xd.setScalar(0),bd.setScalar(0),vd.fromBufferAttribute(e,t),xd.fromBufferAttribute(e,i),bd.fromBufferAttribute(e,s),o.setScalar(0),o.addScaledVector(vd,r.x),o.addScaledVector(xd,r.y),o.addScaledVector(bd,r.z),o}static isFrontFacing(e,t,i,s){return Fi.subVectors(i,t),xs.subVectors(e,t),Fi.cross(xs).dot(s)<0}set(e,t,i){return this.a.copy(e),this.b.copy(t),this.c.copy(i),this}setFromPointsAndIndices(e,t,i,s){return this.a.copy(e[t]),this.b.copy(e[i]),this.c.copy(e[s]),this}setFromAttributeAndIndices(e,t,i,s){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,s),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Fi.subVectors(this.c,this.b),xs.subVectors(this.a,this.b),Fi.cross(xs).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return n.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return n.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,i,s,r){return n.getInterpolation(e,this.a,this.b,this.c,t,i,s,r)}containsPoint(e){return n.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return n.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){let i=this.a,s=this.b,r=this.c,o,a;co.subVectors(s,i),ho.subVectors(r,i),gd.subVectors(e,i);let l=co.dot(gd),c=ho.dot(gd);if(l<=0&&c<=0)return t.copy(i);yd.subVectors(e,s);let d=co.dot(yd),f=ho.dot(yd);if(d>=0&&f<=d)return t.copy(s);let h=l*f-d*c;if(h<=0&&l>=0&&d<=0)return o=l/(l-d),t.copy(i).addScaledVector(co,o);_d.subVectors(e,r);let u=co.dot(_d),m=ho.dot(_d);if(m>=0&&u<=m)return t.copy(r);let y=u*c-l*m;if(y<=0&&c>=0&&m<=0)return a=c/(c-m),t.copy(i).addScaledVector(ho,a);let g=d*m-u*f;if(g<=0&&f-d>=0&&u-m>=0)return lm.subVectors(r,s),a=(f-d)/(f-d+(u-m)),t.copy(s).addScaledVector(lm,a);let p=1/(g+y+h);return o=y*p,a=h*p,t.copy(i).addScaledVector(co,o).addScaledVector(ho,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}},ls=class{constructor(e=new I(1/0,1/0,1/0),t=new I(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t+=3)this.expandByPoint(Bi.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,i=e.count;t<i;t++)this.expandByPoint(Bi.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){let i=Bi.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);let i=e.geometry;if(i!==void 0){let r=i.getAttribute("position");if(t===!0&&r!==void 0&&e.isInstancedMesh!==!0)for(let o=0,a=r.count;o<a;o++)e.isMesh===!0?e.getVertexPosition(o,Bi):Bi.fromBufferAttribute(r,o),Bi.applyMatrix4(e.matrixWorld),this.expandByPoint(Bi);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),yc.copy(e.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),yc.copy(i.boundingBox)),yc.applyMatrix4(e.matrixWorld),this.union(yc)}let s=e.children;for(let r=0,o=s.length;r<o;r++)this.expandByObject(s[r],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,Bi),Bi.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,i;return e.normal.x>0?(t=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),t<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Ma),_c.subVectors(this.max,Ma),uo.subVectors(e.a,Ma),fo.subVectors(e.b,Ma),po.subVectors(e.c,Ma),Gs.subVectors(fo,uo),Vs.subVectors(po,fo),br.subVectors(uo,po);let t=[0,-Gs.z,Gs.y,0,-Vs.z,Vs.y,0,-br.z,br.y,Gs.z,0,-Gs.x,Vs.z,0,-Vs.x,br.z,0,-br.x,-Gs.y,Gs.x,0,-Vs.y,Vs.x,0,-br.y,br.x,0];return!Md(t,uo,fo,po,_c)||(t=[1,0,0,0,1,0,0,0,1],!Md(t,uo,fo,po,_c))?!1:(vc.crossVectors(Gs,Vs),t=[vc.x,vc.y,vc.z],Md(t,uo,fo,po,_c))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Bi).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Bi).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Ms[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Ms[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Ms[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Ms[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Ms[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Ms[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Ms[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Ms[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Ms),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}},Ms=[new I,new I,new I,new I,new I,new I,new I,new I],Bi=new I,yc=new ls,uo=new I,fo=new I,po=new I,Gs=new I,Vs=new I,br=new I,Ma=new I,_c=new I,vc=new I,Mr=new I;function Md(n,e,t,i,s){for(let r=0,o=n.length-3;r<=o;r+=3){Mr.fromArray(n,r);let a=s.x*Math.abs(Mr.x)+s.y*Math.abs(Mr.y)+s.z*Math.abs(Mr.z),l=e.dot(Mr),c=t.dot(Mr),d=i.dot(Mr);if(Math.max(-Math.max(l,c,d),Math.min(l,c,d))>a)return!1}return!0}var cn=new I,xc=new j,A_=0,gn=class extends Vi{constructor(e,t,i=!1){if(super(),Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:A_++}),this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=i,this.usage=af,this.updateRanges=[],this.gpuType=Si,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,i){e*=this.itemSize,i*=t.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[e+s]=t.array[i+s];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,i=this.count;t<i;t++)xc.fromBufferAttribute(this,t),xc.applyMatrix3(e),this.setXY(t,xc.x,xc.y);else if(this.itemSize===3)for(let t=0,i=this.count;t<i;t++)cn.fromBufferAttribute(this,t),cn.applyMatrix3(e),this.setXYZ(t,cn.x,cn.y,cn.z);return this}applyMatrix4(e){for(let t=0,i=this.count;t<i;t++)cn.fromBufferAttribute(this,t),cn.applyMatrix4(e),this.setXYZ(t,cn.x,cn.y,cn.z);return this}applyNormalMatrix(e){for(let t=0,i=this.count;t<i;t++)cn.fromBufferAttribute(this,t),cn.applyNormalMatrix(e),this.setXYZ(t,cn.x,cn.y,cn.z);return this}transformDirection(e){for(let t=0,i=this.count;t<i;t++)cn.fromBufferAttribute(this,t),cn.transformDirection(e),this.setXYZ(t,cn.x,cn.y,cn.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let i=this.array[e*this.itemSize+t];return this.normalized&&(i=Hi(i,this.array)),i}setComponent(e,t,i){return this.normalized&&(i=Ct(i,this.array)),this.array[e*this.itemSize+t]=i,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=Hi(t,this.array)),t}setX(e,t){return this.normalized&&(t=Ct(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=Hi(t,this.array)),t}setY(e,t){return this.normalized&&(t=Ct(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=Hi(t,this.array)),t}setZ(e,t){return this.normalized&&(t=Ct(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=Hi(t,this.array)),t}setW(e,t){return this.normalized&&(t=Ct(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,i){return e*=this.itemSize,this.normalized&&(t=Ct(t,this.array),i=Ct(i,this.array)),this.array[e+0]=t,this.array[e+1]=i,this}setXYZ(e,t,i,s){return e*=this.itemSize,this.normalized&&(t=Ct(t,this.array),i=Ct(i,this.array),s=Ct(s,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=s,this}setXYZW(e,t,i,s,r){return e*=this.itemSize,this.normalized&&(t=Ct(t,this.array),i=Ct(i,this.array),s=Ct(s,this.array),r=Ct(r,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=s,this.array[e+3]=r,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return e.name=this.name,e.usage=this.usage,e.gpuType=this.gpuType,e}dispose(){this.dispatchEvent({type:"dispose"})}};var Ga=class extends gn{constructor(e,t,i){super(new Uint16Array(e),t,i)}};var Va=class extends gn{constructor(e,t,i){super(new Uint32Array(e),t,i)}};var ht=class extends gn{constructor(e,t,i){super(new Float32Array(e),t,i)}},R_=new ls,Sa=new I,Sd=new I,Ts=class{constructor(e=new I,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){let i=this.center;t!==void 0?i.copy(t):R_.setFromPoints(e).getCenter(i);let s=0;for(let r=0,o=e.length;r<o;r++)s=Math.max(s,i.distanceToSquared(e[r]));return this.radius=Math.sqrt(s),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){let t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){let i=this.center.distanceToSquared(e);return t.copy(e),i>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Sa.subVectors(e,this.center);let t=Sa.lengthSq();if(t>this.radius*this.radius){let i=Math.sqrt(t),s=(i-this.radius)*.5;this.center.addScaledVector(Sa,s/i),this.radius+=s}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Sd.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Sa.copy(e.center).add(Sd)),this.expandByPoint(Sa.copy(e.center).sub(Sd))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}},C_=0,vi=new Et,wd=new un,mo=new I,ri=new ls,wa=new ls,Sn=new I,Ft=class n extends Vi{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:C_++}),this.uuid=rs(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(Qy(e)?Va:Ga)(e,1):this.index=e,this}setIndirect(e,t=0){return this.indirect=e,this.indirectOffset=t,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,i=0){this.groups.push({start:e,count:t,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){let t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);let i=this.attributes.normal;if(i!==void 0){let r=new et().getNormalMatrix(e);i.applyNormalMatrix(r),i.needsUpdate=!0}let s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(e),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this._transformed=!0,this}applyQuaternion(e){return vi.makeRotationFromQuaternion(e),this.applyMatrix4(vi),this}rotateX(e){return vi.makeRotationX(e),this.applyMatrix4(vi),this}rotateY(e){return vi.makeRotationY(e),this.applyMatrix4(vi),this}rotateZ(e){return vi.makeRotationZ(e),this.applyMatrix4(vi),this}translate(e,t,i){return vi.makeTranslation(e,t,i),this.applyMatrix4(vi),this}scale(e,t,i){return vi.makeScale(e,t,i),this.applyMatrix4(vi),this}lookAt(e){return wd.lookAt(e),wd.updateMatrix(),this.applyMatrix4(wd.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(mo).negate(),this.translate(mo.x,mo.y,mo.z),this}setFromPoints(e){let t=this.getAttribute("position");if(t===void 0){let i=[];for(let s=0,r=e.length;s<r;s++){let o=e[s];i.push(o.x,o.y,o.z||0)}this.setAttribute("position",new ht(i,3))}else{let i=Math.min(e.length,t.count);for(let s=0;s<i;s++){let r=e[s];t.setXYZ(s,r.x,r.y,r.z||0)}e.length>t.count&&Xe("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new ls);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){qe("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new I(-1/0,-1/0,-1/0),new I(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let i=0,s=t.length;i<s;i++){let r=t[i];ri.setFromBufferAttribute(r),this.morphTargetsRelative?(Sn.addVectors(this.boundingBox.min,ri.min),this.boundingBox.expandByPoint(Sn),Sn.addVectors(this.boundingBox.max,ri.max),this.boundingBox.expandByPoint(Sn)):(this.boundingBox.expandByPoint(ri.min),this.boundingBox.expandByPoint(ri.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&qe('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Ts);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){qe("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new I,1/0);return}if(e){let i=this.boundingSphere.center;if(ri.setFromBufferAttribute(e),t)for(let r=0,o=t.length;r<o;r++){let a=t[r];wa.setFromBufferAttribute(a),this.morphTargetsRelative?(Sn.addVectors(ri.min,wa.min),ri.expandByPoint(Sn),Sn.addVectors(ri.max,wa.max),ri.expandByPoint(Sn)):(ri.expandByPoint(wa.min),ri.expandByPoint(wa.max))}ri.getCenter(i);let s=0;for(let r=0,o=e.count;r<o;r++)Sn.fromBufferAttribute(e,r),s=Math.max(s,i.distanceToSquared(Sn));if(t)for(let r=0,o=t.length;r<o;r++){let a=t[r],l=this.morphTargetsRelative;for(let c=0,d=a.count;c<d;c++)Sn.fromBufferAttribute(a,c),l&&(mo.fromBufferAttribute(e,c),Sn.add(mo)),s=Math.max(s,i.distanceToSquared(Sn))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&qe('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){qe("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let i=t.position,s=t.normal,r=t.uv,o=this.getAttribute("tangent");(o===void 0||o.count!==i.count)&&(o=new gn(new Float32Array(4*i.count),4),this.setAttribute("tangent",o));let a=[],l=[];for(let x=0;x<i.count;x++)a[x]=new I,l[x]=new I;let c=new I,d=new I,f=new I,h=new j,u=new j,m=new j,y=new I,g=new I;function p(x,A,T){c.fromBufferAttribute(i,x),d.fromBufferAttribute(i,A),f.fromBufferAttribute(i,T),h.fromBufferAttribute(r,x),u.fromBufferAttribute(r,A),m.fromBufferAttribute(r,T),d.sub(c),f.sub(c),u.sub(h),m.sub(h);let C=1/(u.x*m.y-m.x*u.y);isFinite(C)&&(y.copy(d).multiplyScalar(m.y).addScaledVector(f,-u.y).multiplyScalar(C),g.copy(f).multiplyScalar(u.x).addScaledVector(d,-m.x).multiplyScalar(C),a[x].add(y),a[A].add(y),a[T].add(y),l[x].add(g),l[A].add(g),l[T].add(g))}let v=this.groups;v.length===0&&(v=[{start:0,count:e.count}]);for(let x=0,A=v.length;x<A;++x){let T=v[x],C=T.start,k=T.count;for(let D=C,L=C+k;D<L;D+=3)p(e.getX(D+0),e.getX(D+1),e.getX(D+2))}let M=new I,_=new I,S=new I,E=new I;function P(x){S.fromBufferAttribute(s,x),E.copy(S);let A=a[x];M.copy(A),M.sub(S.multiplyScalar(S.dot(A))).normalize(),_.crossVectors(E,A);let C=_.dot(l[x])<0?-1:1;o.setXYZW(x,M.x,M.y,M.z,C)}for(let x=0,A=v.length;x<A;++x){let T=v[x],C=T.start,k=T.count;for(let D=C,L=C+k;D<L;D+=3)P(e.getX(D+0)),P(e.getX(D+1)),P(e.getX(D+2))}this._transformed=!0}computeVertexNormals(){let e=this.index,t=this.getAttribute("position");if(t!==void 0){let i=this.getAttribute("normal");if(i===void 0||i.count!==t.count)i=new gn(new Float32Array(t.count*3),3),this.setAttribute("normal",i);else for(let h=0,u=i.count;h<u;h++)i.setXYZ(h,0,0,0);let s=new I,r=new I,o=new I,a=new I,l=new I,c=new I,d=new I,f=new I;if(e)for(let h=0,u=e.count;h<u;h+=3){let m=e.getX(h+0),y=e.getX(h+1),g=e.getX(h+2);s.fromBufferAttribute(t,m),r.fromBufferAttribute(t,y),o.fromBufferAttribute(t,g),d.subVectors(o,r),f.subVectors(s,r),d.cross(f),a.fromBufferAttribute(i,m),l.fromBufferAttribute(i,y),c.fromBufferAttribute(i,g),a.add(d),l.add(d),c.add(d),i.setXYZ(m,a.x,a.y,a.z),i.setXYZ(y,l.x,l.y,l.z),i.setXYZ(g,c.x,c.y,c.z)}else for(let h=0,u=t.count;h<u;h+=3)s.fromBufferAttribute(t,h+0),r.fromBufferAttribute(t,h+1),o.fromBufferAttribute(t,h+2),d.subVectors(o,r),f.subVectors(s,r),d.cross(f),i.setXYZ(h+0,d.x,d.y,d.z),i.setXYZ(h+1,d.x,d.y,d.z),i.setXYZ(h+2,d.x,d.y,d.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){let e=this.attributes.normal;for(let t=0,i=e.count;t<i;t++)Sn.fromBufferAttribute(e,t),Sn.normalize(),e.setXYZ(t,Sn.x,Sn.y,Sn.z)}toNonIndexed(){function e(a,l){let c=a.array,d=a.itemSize,f=a.normalized,h=new c.constructor(l.length*d),u=0,m=0;for(let y=0,g=l.length;y<g;y++){a.isInterleavedBufferAttribute?u=l[y]*a.data.stride+a.offset:u=l[y]*d;for(let p=0;p<d;p++)h[m++]=c[u++]}return new gn(h,d,f)}if(this.index===null)return Xe("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let t=new n,i=this.index.array,s=this.attributes;for(let a in s){let l=s[a],c=e(l,i);t.setAttribute(a,c)}let r=this.morphAttributes;for(let a in r){let l=[],c=r[a];for(let d=0,f=c.length;d<f;d++){let h=c[d],u=e(h,i);l.push(u)}t.morphAttributes[a]=l}t.morphTargetsRelative=this.morphTargetsRelative;let o=this.groups;for(let a=0,l=o.length;a<l;a++){let c=o[a];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){let e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.parameters!==void 0&&this._transformed===!0?"BufferGeometry":this.type,e.name=this.name,Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0&&this._transformed!==!0){let l=this.parameters;for(let c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};let t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});let i=this.attributes;for(let l in i){let c=i[l];e.data.attributes[l]=c.toJSON(e.data)}let s={},r=!1;for(let l in this.morphAttributes){let c=this.morphAttributes[l],d=[];for(let f=0,h=c.length;f<h;f++){let u=c[f];d.push(u.toJSON(e.data))}d.length>0&&(s[l]=d,r=!0)}r&&(e.data.morphAttributes=s,e.data.morphTargetsRelative=this.morphTargetsRelative);let o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));let a=this.boundingSphere;return a!==null&&(e.data.boundingSphere=a.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let t={};this.name=e.name;let i=e.index;i!==null&&this.setIndex(i.clone());let s=e.attributes;for(let c in s){let d=s[c];this.setAttribute(c,d.clone(t))}let r=e.morphAttributes;for(let c in r){let d=[],f=r[c];for(let h=0,u=f.length;h<u;h++)d.push(f[h].clone(t));this.morphAttributes[c]=d}this.morphTargetsRelative=e.morphTargetsRelative;let o=e.groups;for(let c=0,d=o.length;c<d;c++){let f=o[c];this.addGroup(f.start,f.count,f.materialIndex)}let a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());let l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this._transformed=e._transformed,this}dispose(){this.dispatchEvent({type:"dispose"})}},th=class{constructor(e,t){this.isInterleavedBuffer=!0,this.array=e,this.stride=t,this.count=e!==void 0?e.length/t:0,this.usage=af,this.updateRanges=[],this.version=0,this.uuid=rs()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,t,i){e*=this.stride,i*=t.stride;for(let s=0,r=this.stride;s<r;s++)this.array[e+s]=t.array[i+s];return this}set(e,t=0){return this.array.set(e,t),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=rs()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);let t=new this.array.constructor(e.arrayBuffers[this.array.buffer._uuid]),i=new this.constructor(t,this.stride);return i.setUsage(this.usage),i}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=rs()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer)));let t={uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride};return t.usage=this.usage,t}},Vn=new I,Wa=class n{constructor(e,t,i,s=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=e,this.itemSize=t,this.offset=i,this.normalized=s}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let t=0,i=this.data.count;t<i;t++)Vn.fromBufferAttribute(this,t),Vn.applyMatrix4(e),this.setXYZ(t,Vn.x,Vn.y,Vn.z);return this}applyNormalMatrix(e){for(let t=0,i=this.count;t<i;t++)Vn.fromBufferAttribute(this,t),Vn.applyNormalMatrix(e),this.setXYZ(t,Vn.x,Vn.y,Vn.z);return this}transformDirection(e){for(let t=0,i=this.count;t<i;t++)Vn.fromBufferAttribute(this,t),Vn.transformDirection(e),this.setXYZ(t,Vn.x,Vn.y,Vn.z);return this}getComponent(e,t){let i=this.array[e*this.data.stride+this.offset+t];return this.normalized&&(i=Hi(i,this.array)),i}setComponent(e,t,i){return this.normalized&&(i=Ct(i,this.array)),this.data.array[e*this.data.stride+this.offset+t]=i,this}setX(e,t){return this.normalized&&(t=Ct(t,this.array)),this.data.array[e*this.data.stride+this.offset]=t,this}setY(e,t){return this.normalized&&(t=Ct(t,this.array)),this.data.array[e*this.data.stride+this.offset+1]=t,this}setZ(e,t){return this.normalized&&(t=Ct(t,this.array)),this.data.array[e*this.data.stride+this.offset+2]=t,this}setW(e,t){return this.normalized&&(t=Ct(t,this.array)),this.data.array[e*this.data.stride+this.offset+3]=t,this}getX(e){let t=this.data.array[e*this.data.stride+this.offset];return this.normalized&&(t=Hi(t,this.array)),t}getY(e){let t=this.data.array[e*this.data.stride+this.offset+1];return this.normalized&&(t=Hi(t,this.array)),t}getZ(e){let t=this.data.array[e*this.data.stride+this.offset+2];return this.normalized&&(t=Hi(t,this.array)),t}getW(e){let t=this.data.array[e*this.data.stride+this.offset+3];return this.normalized&&(t=Hi(t,this.array)),t}setXY(e,t,i){return e=e*this.data.stride+this.offset,this.normalized&&(t=Ct(t,this.array),i=Ct(i,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=i,this}setXYZ(e,t,i,s){return e=e*this.data.stride+this.offset,this.normalized&&(t=Ct(t,this.array),i=Ct(i,this.array),s=Ct(s,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=i,this.data.array[e+2]=s,this}setXYZW(e,t,i,s,r){return e=e*this.data.stride+this.offset,this.normalized&&(t=Ct(t,this.array),i=Ct(i,this.array),s=Ct(s,this.array),r=Ct(r,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=i,this.data.array[e+2]=s,this.data.array[e+3]=r,this}clone(e){if(e===void 0){Ba("InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");let t=[];for(let i=0;i<this.count;i++){let s=i*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[s+r])}return new gn(new this.array.constructor(t),this.itemSize,this.normalized)}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.clone(e)),new n(e.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){Ba("InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");let t=[];for(let i=0;i<this.count;i++){let s=i*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[s+r])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:t,normalized:this.normalized}}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}},Ed=new I,P_=new I,I_=new et,oi=class{constructor(e=new I(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,i,s){return this.normal.set(e,t,i),this.constant=s,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,i){let s=Ed.subVectors(i,t).cross(P_.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(s,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){let e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t,i=!0){let s=e.delta(Ed),r=this.normal.dot(s);if(r===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;let o=-(e.start.dot(this.normal)+this.constant)/r;return i===!0&&(o<0||o>1)?null:t.copy(e.start).addScaledVector(s,o)}intersectsLine(e){let t=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return t<0&&i>0||i<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){let i=t||I_.getNormalMatrix(e),s=this.coplanarPoint(Ed).applyMatrix4(e),r=this.normal.applyMatrix3(i).normalize();return this.constant=-s.dot(r),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}toJSON(){return{normal:this.normal.toArray(),constant:this.constant}}fromJSON(e){return this.normal.fromArray(e.normal),this.constant=e.constant,this}},k_=0,xi=class extends Vi{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:k_++}),this.uuid=rs(),this.name="",this.type="Material",this.blending=Bo,this.side=er,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Jd,this.blendDst=jd,this.blendEquation=Ur,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Ie(0,0,0),this.blendAlpha=0,this.depthFunc=Eo,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=s0,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Gc,this.stencilZFail=Gc,this.stencilZPass=Gc,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(let t in e){let i=e[t];if(i===void 0){Xe(`Material: parameter '${t}' has value of undefined.`);continue}let s=this[t];if(s===void 0){Xe(`Material: '${t}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(i):s&&s.isVector2&&i&&i.isVector2||s&&s.isEuler&&i&&i.isEuler||s&&s.isVector3&&i&&i.isVector3?s.copy(i):this[t]=i}}toJSON(e){let t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});let i={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,i.blending=this.blending,i.side=this.side,i.shadowSide=this.shadowSide,i.vertexColors=this.vertexColors,i.opacity=this.opacity,i.transparent=this.transparent,i.blendSrc=this.blendSrc,i.blendDst=this.blendDst,i.blendEquation=this.blendEquation,i.blendSrcAlpha=this.blendSrcAlpha,i.blendDstAlpha=this.blendDstAlpha,i.blendEquationAlpha=this.blendEquationAlpha,i.blendColor=this.blendColor.getHex(),i.blendAlpha=this.blendAlpha,i.depthFunc=this.depthFunc,i.depthTest=this.depthTest,i.depthWrite=this.depthWrite,i.colorWrite=this.colorWrite,i.clipIntersection=this.clipIntersection,i.clipShadows=this.clipShadows,i.stencilWriteMask=this.stencilWriteMask,i.stencilFunc=this.stencilFunc,i.stencilRef=this.stencilRef,i.stencilFuncMask=this.stencilFuncMask,i.stencilFail=this.stencilFail,i.stencilZFail=this.stencilZFail,i.stencilZPass=this.stencilZPass,i.stencilWrite=this.stencilWrite,i.polygonOffset=this.polygonOffset,i.polygonOffsetFactor=this.polygonOffsetFactor,i.polygonOffsetUnits=this.polygonOffsetUnits,i.dithering=this.dithering,i.alphaTest=this.alphaTest,i.alphaHash=this.alphaHash,i.alphaToCoverage=this.alphaToCoverage,i.premultipliedAlpha=this.premultipliedAlpha,i.forceSinglePass=this.forceSinglePass,i.allowOverride=this.allowOverride,i.visible=this.visible,i.toneMapped=this.toneMapped,i.name=this.name,this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(i.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(i.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.retroreflectivity!==void 0&&(i.retroreflectivity=this.retroreflectivity),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),Array.isArray(this.clippingPlanes)&&this.clippingPlanes.length>0&&(i.clippingPlanes=this.clippingPlanes.map(r=>r.toJSON())),this.rotation!==void 0&&(i.rotation=this.rotation),this.depthPacking!==void 0&&(i.depthPacking=this.depthPacking),this.linewidth!==void 0&&(i.linewidth=this.linewidth),this.linecap!==void 0&&(i.linecap=this.linecap),this.linejoin!==void 0&&(i.linejoin=this.linejoin),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.wireframe!==void 0&&(i.wireframe=this.wireframe),this.wireframeLinewidth!==void 0&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!==void 0&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!==void 0&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading!==void 0&&(i.flatShading=this.flatShading),this.fog!==void 0&&(i.fog=this.fog),Object.keys(this.userData).length>0&&(i.userData=this.userData);function s(r){let o=[];for(let a in r){let l=r[a];delete l.metadata,o.push(l)}return o}if(t){let r=s(e.textures),o=s(e.images);r.length>0&&(i.textures=r),o.length>0&&(i.images=o)}return i}fromJSON(e,t){if(e.uuid!==void 0&&(this.uuid=e.uuid),e.name!==void 0&&(this.name=e.name),e.color!==void 0&&this.color!==void 0&&this.color.setHex(e.color),e.roughness!==void 0&&(this.roughness=e.roughness),e.metalness!==void 0&&(this.metalness=e.metalness),e.sheen!==void 0&&(this.sheen=e.sheen),e.sheenColor!==void 0&&(this.sheenColor=new Ie().setHex(e.sheenColor)),e.sheenRoughness!==void 0&&(this.sheenRoughness=e.sheenRoughness),e.emissive!==void 0&&this.emissive!==void 0&&this.emissive.setHex(e.emissive),e.specular!==void 0&&this.specular!==void 0&&this.specular.setHex(e.specular),e.specularIntensity!==void 0&&(this.specularIntensity=e.specularIntensity),e.specularColor!==void 0&&this.specularColor!==void 0&&this.specularColor.setHex(e.specularColor),e.shininess!==void 0&&(this.shininess=e.shininess),e.clearcoat!==void 0&&(this.clearcoat=e.clearcoat),e.clearcoatRoughness!==void 0&&(this.clearcoatRoughness=e.clearcoatRoughness),e.dispersion!==void 0&&(this.dispersion=e.dispersion),e.retroreflectivity!==void 0&&(this.retroreflectivity=e.retroreflectivity),e.iridescence!==void 0&&(this.iridescence=e.iridescence),e.iridescenceIOR!==void 0&&(this.iridescenceIOR=e.iridescenceIOR),e.iridescenceThicknessRange!==void 0&&(this.iridescenceThicknessRange=e.iridescenceThicknessRange),e.transmission!==void 0&&(this.transmission=e.transmission),e.thickness!==void 0&&(this.thickness=e.thickness),e.attenuationDistance!==void 0&&(this.attenuationDistance=e.attenuationDistance),e.attenuationColor!==void 0&&this.attenuationColor!==void 0&&this.attenuationColor.setHex(e.attenuationColor),e.anisotropy!==void 0&&(this.anisotropy=e.anisotropy),e.anisotropyRotation!==void 0&&(this.anisotropyRotation=e.anisotropyRotation),e.fog!==void 0&&(this.fog=e.fog),e.flatShading!==void 0&&(this.flatShading=e.flatShading),e.blending!==void 0&&(this.blending=e.blending),e.combine!==void 0&&(this.combine=e.combine),e.side!==void 0&&(this.side=e.side),e.shadowSide!==void 0&&(this.shadowSide=e.shadowSide),e.opacity!==void 0&&(this.opacity=e.opacity),e.transparent!==void 0&&(this.transparent=e.transparent),e.alphaTest!==void 0&&(this.alphaTest=e.alphaTest),e.alphaHash!==void 0&&(this.alphaHash=e.alphaHash),e.depthFunc!==void 0&&(this.depthFunc=e.depthFunc),e.depthTest!==void 0&&(this.depthTest=e.depthTest),e.depthWrite!==void 0&&(this.depthWrite=e.depthWrite),e.colorWrite!==void 0&&(this.colorWrite=e.colorWrite),e.clippingPlanes!==void 0&&(this.clippingPlanes=e.clippingPlanes.map(i=>new oi().fromJSON(i))),e.clipIntersection!==void 0&&(this.clipIntersection=e.clipIntersection),e.clipShadows!==void 0&&(this.clipShadows=e.clipShadows),e.depthPacking!==void 0&&(this.depthPacking=e.depthPacking),e.blendSrc!==void 0&&(this.blendSrc=e.blendSrc),e.blendDst!==void 0&&(this.blendDst=e.blendDst),e.blendEquation!==void 0&&(this.blendEquation=e.blendEquation),e.blendSrcAlpha!==void 0&&(this.blendSrcAlpha=e.blendSrcAlpha),e.blendDstAlpha!==void 0&&(this.blendDstAlpha=e.blendDstAlpha),e.blendEquationAlpha!==void 0&&(this.blendEquationAlpha=e.blendEquationAlpha),e.blendColor!==void 0&&this.blendColor!==void 0&&this.blendColor.setHex(e.blendColor),e.blendAlpha!==void 0&&(this.blendAlpha=e.blendAlpha),e.stencilWriteMask!==void 0&&(this.stencilWriteMask=e.stencilWriteMask),e.stencilFunc!==void 0&&(this.stencilFunc=e.stencilFunc),e.stencilRef!==void 0&&(this.stencilRef=e.stencilRef),e.stencilFuncMask!==void 0&&(this.stencilFuncMask=e.stencilFuncMask),e.stencilFail!==void 0&&(this.stencilFail=e.stencilFail),e.stencilZFail!==void 0&&(this.stencilZFail=e.stencilZFail),e.stencilZPass!==void 0&&(this.stencilZPass=e.stencilZPass),e.stencilWrite!==void 0&&(this.stencilWrite=e.stencilWrite),e.wireframe!==void 0&&(this.wireframe=e.wireframe),e.wireframeLinewidth!==void 0&&(this.wireframeLinewidth=e.wireframeLinewidth),e.wireframeLinecap!==void 0&&(this.wireframeLinecap=e.wireframeLinecap),e.wireframeLinejoin!==void 0&&(this.wireframeLinejoin=e.wireframeLinejoin),e.rotation!==void 0&&(this.rotation=e.rotation),e.linewidth!==void 0&&(this.linewidth=e.linewidth),e.linecap!==void 0&&(this.linecap=e.linecap),e.linejoin!==void 0&&(this.linejoin=e.linejoin),e.dashSize!==void 0&&(this.dashSize=e.dashSize),e.gapSize!==void 0&&(this.gapSize=e.gapSize),e.scale!==void 0&&(this.scale=e.scale),e.polygonOffset!==void 0&&(this.polygonOffset=e.polygonOffset),e.polygonOffsetFactor!==void 0&&(this.polygonOffsetFactor=e.polygonOffsetFactor),e.polygonOffsetUnits!==void 0&&(this.polygonOffsetUnits=e.polygonOffsetUnits),e.dithering!==void 0&&(this.dithering=e.dithering),e.alphaToCoverage!==void 0&&(this.alphaToCoverage=e.alphaToCoverage),e.premultipliedAlpha!==void 0&&(this.premultipliedAlpha=e.premultipliedAlpha),e.forceSinglePass!==void 0&&(this.forceSinglePass=e.forceSinglePass),e.allowOverride!==void 0&&(this.allowOverride=e.allowOverride),e.visible!==void 0&&(this.visible=e.visible),e.toneMapped!==void 0&&(this.toneMapped=e.toneMapped),e.userData!==void 0&&(this.userData=e.userData),e.vertexColors!==void 0&&(typeof e.vertexColors=="number"?this.vertexColors=e.vertexColors>0:this.vertexColors=e.vertexColors),e.size!==void 0&&(this.size=e.size),e.sizeAttenuation!==void 0&&(this.sizeAttenuation=e.sizeAttenuation),e.map!==void 0&&(this.map=t[e.map]||null),e.matcap!==void 0&&(this.matcap=t[e.matcap]||null),e.alphaMap!==void 0&&(this.alphaMap=t[e.alphaMap]||null),e.bumpMap!==void 0&&(this.bumpMap=t[e.bumpMap]||null),e.bumpScale!==void 0&&(this.bumpScale=e.bumpScale),e.normalMap!==void 0&&(this.normalMap=t[e.normalMap]||null),e.normalMapType!==void 0&&(this.normalMapType=e.normalMapType),e.normalScale!==void 0){let i=e.normalScale;Array.isArray(i)===!1&&(i=[i,i]),this.normalScale=new j().fromArray(i)}return e.displacementMap!==void 0&&(this.displacementMap=t[e.displacementMap]||null),e.displacementScale!==void 0&&(this.displacementScale=e.displacementScale),e.displacementBias!==void 0&&(this.displacementBias=e.displacementBias),e.roughnessMap!==void 0&&(this.roughnessMap=t[e.roughnessMap]||null),e.metalnessMap!==void 0&&(this.metalnessMap=t[e.metalnessMap]||null),e.emissiveMap!==void 0&&(this.emissiveMap=t[e.emissiveMap]||null),e.emissiveIntensity!==void 0&&(this.emissiveIntensity=e.emissiveIntensity),e.specularMap!==void 0&&(this.specularMap=t[e.specularMap]||null),e.specularIntensityMap!==void 0&&(this.specularIntensityMap=t[e.specularIntensityMap]||null),e.specularColorMap!==void 0&&(this.specularColorMap=t[e.specularColorMap]||null),e.envMap!==void 0&&(this.envMap=t[e.envMap]||null),e.envMapRotation!==void 0&&this.envMapRotation.fromArray(e.envMapRotation),e.envMapIntensity!==void 0&&(this.envMapIntensity=e.envMapIntensity),e.reflectivity!==void 0&&(this.reflectivity=e.reflectivity),e.refractionRatio!==void 0&&(this.refractionRatio=e.refractionRatio),e.lightMap!==void 0&&(this.lightMap=t[e.lightMap]||null),e.lightMapIntensity!==void 0&&(this.lightMapIntensity=e.lightMapIntensity),e.aoMap!==void 0&&(this.aoMap=t[e.aoMap]||null),e.aoMapIntensity!==void 0&&(this.aoMapIntensity=e.aoMapIntensity),e.gradientMap!==void 0&&(this.gradientMap=t[e.gradientMap]||null),e.clearcoatMap!==void 0&&(this.clearcoatMap=t[e.clearcoatMap]||null),e.clearcoatRoughnessMap!==void 0&&(this.clearcoatRoughnessMap=t[e.clearcoatRoughnessMap]||null),e.clearcoatNormalMap!==void 0&&(this.clearcoatNormalMap=t[e.clearcoatNormalMap]||null),e.clearcoatNormalScale!==void 0&&(this.clearcoatNormalScale=new j().fromArray(e.clearcoatNormalScale)),e.iridescenceMap!==void 0&&(this.iridescenceMap=t[e.iridescenceMap]||null),e.iridescenceThicknessMap!==void 0&&(this.iridescenceThicknessMap=t[e.iridescenceThicknessMap]||null),e.transmissionMap!==void 0&&(this.transmissionMap=t[e.transmissionMap]||null),e.thicknessMap!==void 0&&(this.thicknessMap=t[e.thicknessMap]||null),e.anisotropyMap!==void 0&&(this.anisotropyMap=t[e.anisotropyMap]||null),e.sheenColorMap!==void 0&&(this.sheenColorMap=t[e.sheenColorMap]||null),e.sheenRoughnessMap!==void 0&&(this.sheenRoughnessMap=t[e.sheenRoughnessMap]||null),this}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;let t=e.clippingPlanes,i=null;if(t!==null){let s=t.length;i=new Array(s);for(let r=0;r!==s;++r)i[r]=t[r].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.allowOverride=e.allowOverride,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}},Wi=class extends xi{constructor(e){super(),this.isSpriteMaterial=!0,this.type="SpriteMaterial",this.color=new Ie(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.rotation=e.rotation,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}},go,Ea=new I,yo=new I,_o=new I,vo=new j,Ta=new j,g0=new Et,bc=new I,Aa=new I,Mc=new I,cm=new j,Td=new j,hm=new j,cs=class extends un{constructor(e=new Wi){if(super(),this.isSprite=!0,this.type="Sprite",go===void 0){go=new Ft;let t=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),i=new th(t,5);go.setIndex([0,1,2,0,2,3]),go.setAttribute("position",new Wa(i,3,0,!1)),go.setAttribute("uv",new Wa(i,2,3,!1))}this.geometry=go,this.material=e,this.center=new j(.5,.5),this.count=1}intersectsFrustum(e){return e.intersectsSprite(this)}raycast(e,t){e.camera===null&&qe('Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),yo.setFromMatrixScale(this.matrixWorld),g0.copy(e.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(e.camera.matrixWorldInverse,this.matrixWorld),_o.setFromMatrixPosition(this.modelViewMatrix),e.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&yo.multiplyScalar(-_o.z);let i=this.material.rotation,s,r;i!==0&&(r=Math.cos(i),s=Math.sin(i));let o=this.center;Sc(bc.set(-.5,-.5,0),_o,o,yo,s,r),Sc(Aa.set(.5,-.5,0),_o,o,yo,s,r),Sc(Mc.set(.5,.5,0),_o,o,yo,s,r),cm.set(0,0),Td.set(1,0),hm.set(1,1);let a=e.ray.intersectTriangle(bc,Aa,Mc,!1,Ea);if(a===null&&(Sc(Aa.set(-.5,.5,0),_o,o,yo,s,r),Td.set(0,1),a=e.ray.intersectTriangle(bc,Mc,Aa,!1,Ea),a===null))return;let l=e.ray.origin.distanceTo(Ea);l<e.near||l>e.far||t.push({distance:l,point:Ea.clone(),uv:ws.getInterpolation(Ea,bc,Aa,Mc,cm,Td,hm,new j),face:null,object:this})}copy(e,t){return super.copy(e,t),e.center!==void 0&&this.center.copy(e.center),this.material=e.material,this}};function Sc(n,e,t,i,s,r){vo.subVectors(n,t).addScalar(.5).multiply(i),s!==void 0?(Ta.x=r*vo.x-s*vo.y,Ta.y=s*vo.x+r*vo.y):Ta.copy(vo),n.copy(e),n.x+=Ta.x,n.y+=Ta.y,n.applyMatrix4(g0)}var Ss=new I,Ad=new I,wc=new I,Ec=new I,$s=class{constructor(e=new I,t=new I(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Ss)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);let i=t.dot(this.direction);return i<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){let t=Ss.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(Ss.copy(this.origin).addScaledVector(this.direction,t),Ss.distanceToSquared(e))}distanceSqToSegment(e,t,i,s){Ad.copy(e).add(t).multiplyScalar(.5),wc.copy(t).sub(e).normalize(),Ec.copy(this.origin).sub(Ad);let r=e.distanceTo(t)*.5,o=-this.direction.dot(wc),a=Ec.dot(this.direction),l=-Ec.dot(wc),c=Ec.lengthSq(),d=Math.abs(1-o*o),f,h,u,m;if(d>0)if(f=o*l-a,h=o*a-l,m=r*d,f>=0)if(h>=-m)if(h<=m){let y=1/d;f*=y,h*=y,u=f*(f+o*h+2*a)+h*(o*f+h+2*l)+c}else h=r,f=Math.max(0,-(o*h+a)),u=-f*f+h*(h+2*l)+c;else h=-r,f=Math.max(0,-(o*h+a)),u=-f*f+h*(h+2*l)+c;else h<=-m?(f=Math.max(0,-(-o*r+a)),h=f>0?-r:Math.min(Math.max(-r,-l),r),u=-f*f+h*(h+2*l)+c):h<=m?(f=0,h=Math.min(Math.max(-r,-l),r),u=h*(h+2*l)+c):(f=Math.max(0,-(o*r+a)),h=f>0?r:Math.min(Math.max(-r,-l),r),u=-f*f+h*(h+2*l)+c);else h=o>0?-r:r,f=Math.max(0,-(o*h+a)),u=-f*f+h*(h+2*l)+c;return i&&i.copy(this.origin).addScaledVector(this.direction,f),s&&s.copy(Ad).addScaledVector(wc,h),u}intersectSphere(e,t){if(e.radius<0)return null;Ss.subVectors(e.center,this.origin);let i=Ss.dot(this.direction),s=Ss.dot(Ss)-i*i,r=e.radius*e.radius;if(s>r)return null;let o=Math.sqrt(r-s),a=i-o,l=i+o;return l<0?null:a<0?this.at(l,t):this.at(a,t)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){let t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;let i=-(this.origin.dot(e.normal)+e.constant)/t;return i>=0?i:null}intersectPlane(e,t){let i=this.distanceToPlane(e);return i===null?null:this.at(i,t)}intersectsPlane(e){let t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let i,s,r,o,a,l,c=1/this.direction.x,d=1/this.direction.y,f=1/this.direction.z,h=this.origin;return c>=0?(i=(e.min.x-h.x)*c,s=(e.max.x-h.x)*c):(i=(e.max.x-h.x)*c,s=(e.min.x-h.x)*c),d>=0?(r=(e.min.y-h.y)*d,o=(e.max.y-h.y)*d):(r=(e.max.y-h.y)*d,o=(e.min.y-h.y)*d),i>o||r>s||((r>i||isNaN(i))&&(i=r),(o<s||isNaN(s))&&(s=o),f>=0?(a=(e.min.z-h.z)*f,l=(e.max.z-h.z)*f):(a=(e.max.z-h.z)*f,l=(e.min.z-h.z)*f),i>l||a>s)||((a>i||i!==i)&&(i=a),(l<s||s!==s)&&(s=l),s<0)?null:this.at(i>=0?i:s,t)}intersectsBox(e){return this.intersectBox(e,Ss)!==null}intersectTriangle(e,t,i,s,r){let o=this.origin,a=this.direction,l=a.x,c=a.y,d=a.z,f=e.x-o.x,h=e.y-o.y,u=e.z-o.z,m=t.x-o.x,y=t.y-o.y,g=t.z-o.z,p=i.x-o.x,v=i.y-o.y,M=i.z-o.z,_=Math.abs(l),S=Math.abs(c),E=Math.abs(d),P,x,A,T,C,k,D,L,F,B,$,se;if(_>=S&&_>=E?(A=l,k=f,F=m,se=p,l>=0?(P=c,x=d,T=h,C=u,D=y,L=g,B=v,$=M):(P=d,x=c,T=u,C=h,D=g,L=y,B=M,$=v)):S>=E?(A=c,k=h,F=y,se=v,c>=0?(P=d,x=l,T=u,C=f,D=g,L=m,B=M,$=p):(P=l,x=d,T=f,C=u,D=m,L=g,B=p,$=M)):(A=d,k=u,F=g,se=M,d>=0?(P=l,x=c,T=f,C=h,D=m,L=y,B=p,$=v):(P=c,x=l,T=h,C=f,D=y,L=m,B=v,$=p)),A===0)return null;let X=P/A,Q=x/A,ne=1/A,Oe=T-X*k,Ce=C-Q*k,mt=D-X*F,at=L-Q*F,Le=B-X*se,V=$-Q*se,J=Le*at-V*mt,fe=Oe*V-Ce*Le,Ye=mt*Ce-at*Oe;if(s){if(J<0||fe<0||Ye<0)return null}else if((J<0||fe<0||Ye<0)&&(J>0||fe>0||Ye>0))return null;let Ae=J+fe+Ye;if(Ae===0)return null;let Ke=ne*(J*k+fe*F+Ye*se);return(Ae>0?Ke<0:Ke>0)?null:this.at(Ke/Ae,r)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},Wt=class extends xi{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Ie(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new as,this.combine=wh,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}},um=new Et,Sr=new $s,Tc=new Ts,dm=new I,Ac=new I,Rc=new I,Cc=new I,Rd=new I,Pc=new I,fm=new I,Ic=new I,oe=class extends un{constructor(e=new Ft,t=new Wt){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){let t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){let s=t[i[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){let a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}getVertexPosition(e,t){let i=this.geometry,s=i.attributes.position,r=i.morphAttributes.position,o=i.morphTargetsRelative;t.fromBufferAttribute(s,e);let a=this.morphTargetInfluences;if(r&&a){Pc.set(0,0,0);for(let l=0,c=r.length;l<c;l++){let d=a[l],f=r[l];d!==0&&(Rd.fromBufferAttribute(f,e),o?Pc.addScaledVector(Rd,d):Pc.addScaledVector(Rd.sub(t),d))}t.add(Pc)}return t}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,t){let i=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),Tc.copy(i.boundingSphere),Tc.applyMatrix4(r),Sr.copy(e.ray).recast(e.near),!(Tc.containsPoint(Sr.origin)===!1&&(Sr.intersectSphere(Tc,dm)===null||Sr.origin.distanceToSquared(dm)>(e.far-e.near)**2))&&(um.copy(r).invert(),Sr.copy(e.ray).applyMatrix4(um),!(i.boundingBox!==null&&Sr.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(e,t,Sr)))}_computeIntersections(e,t,i){let s,r=this.geometry,o=this.material,a=r.index,l=r.attributes.position,c=r.attributes.uv,d=r.attributes.uv1,f=r.attributes.normal,h=r.groups,u=r.drawRange;if(a!==null)if(Array.isArray(o))for(let m=0,y=h.length;m<y;m++){let g=h[m],p=o[g.materialIndex],v=Math.max(g.start,u.start),M=Math.min(a.count,Math.min(g.start+g.count,u.start+u.count));for(let _=v,S=M;_<S;_+=3){let E=a.getX(_),P=a.getX(_+1),x=a.getX(_+2);s=kc(this,p,e,i,c,d,f,E,P,x),s&&(s.faceIndex=Math.floor(_/3),s.face.materialIndex=g.materialIndex,t.push(s))}}else{let m=Math.max(0,u.start),y=Math.min(a.count,u.start+u.count);for(let g=m,p=y;g<p;g+=3){let v=a.getX(g),M=a.getX(g+1),_=a.getX(g+2);s=kc(this,o,e,i,c,d,f,v,M,_),s&&(s.faceIndex=Math.floor(g/3),t.push(s))}}else if(l!==void 0)if(Array.isArray(o))for(let m=0,y=h.length;m<y;m++){let g=h[m],p=o[g.materialIndex],v=Math.max(g.start,u.start),M=Math.min(l.count,Math.min(g.start+g.count,u.start+u.count));for(let _=v,S=M;_<S;_+=3){let E=_,P=_+1,x=_+2;s=kc(this,p,e,i,c,d,f,E,P,x),s&&(s.faceIndex=Math.floor(_/3),s.face.materialIndex=g.materialIndex,t.push(s))}}else{let m=Math.max(0,u.start),y=Math.min(l.count,u.start+u.count);for(let g=m,p=y;g<p;g+=3){let v=g,M=g+1,_=g+2;s=kc(this,o,e,i,c,d,f,v,M,_),s&&(s.faceIndex=Math.floor(g/3),t.push(s))}}}};function L_(n,e,t,i,s,r,o,a){let l;if(e.side===Pn?l=i.intersectTriangle(o,r,s,!0,a):l=i.intersectTriangle(s,r,o,e.side===er,a),l===null)return null;Ic.copy(a),Ic.applyMatrix4(n.matrixWorld);let c=t.ray.origin.distanceTo(Ic);return c<t.near||c>t.far?null:{distance:c,point:Ic.clone(),object:n}}function kc(n,e,t,i,s,r,o,a,l,c){n.getVertexPosition(a,Ac),n.getVertexPosition(l,Rc),n.getVertexPosition(c,Cc);let d=L_(n,e,t,i,Ac,Rc,Cc,fm);if(d){let f=new I;ws.getBarycoord(fm,Ac,Rc,Cc,f),s&&(d.uv=ws.getInterpolatedAttribute(s,a,l,c,f,new j)),r&&(d.uv1=ws.getInterpolatedAttribute(r,a,l,c,f,new j)),o&&(d.normal=ws.getInterpolatedAttribute(o,a,l,c,f,new I),d.normal.dot(i.direction)>0&&d.normal.multiplyScalar(-1));let h={a,b:l,c,normal:new I,materialIndex:0};ws.getNormal(Ac,Rc,Cc,h.normal),d.face=h,d.barycoord=f}return d}var $a=class extends Wn{constructor(e=null,t=1,i=1,s,r,o,a,l,c=wn,d=wn,f,h){super(null,o,a,l,c,d,s,r,f,h),this.isDataTexture=!0,this.image={data:e,width:t,height:i},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var qa=class extends gn{constructor(e,t,i,s=1){super(e,t,i),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=s}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){let e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}},xo=new Et,pm=new Et,Lc=[],mm=new ls,D_=new Et,Ra=new oe,Ca=new Ts,Xa=class extends oe{constructor(e,t,i){super(e,t),this.isInstancedMesh=!0,this.instanceMatrix=new qa(new Float32Array(i*16),16),this.instanceColor=null,this.morphTexture=null,this.count=i,this.boundingBox=null,this.boundingSphere=null;for(let s=0;s<i;s++)this.setMatrixAt(s,D_)}computeBoundingBox(){let e=this.geometry,t=this.count;this.boundingBox===null&&(this.boundingBox=new ls),e.boundingBox===null&&e.computeBoundingBox(),this.boundingBox.makeEmpty();for(let i=0;i<t;i++)this.getMatrixAt(i,xo),mm.copy(e.boundingBox).applyMatrix4(xo),this.boundingBox.union(mm)}computeBoundingSphere(){let e=this.geometry,t=this.count;this.boundingSphere===null&&(this.boundingSphere=new Ts),e.boundingSphere===null&&e.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let i=0;i<t;i++)this.getMatrixAt(i,xo),Ca.copy(e.boundingSphere).applyMatrix4(xo),this.boundingSphere.union(Ca)}copy(e,t){return super.copy(e,t),this.instanceMatrix.copy(e.instanceMatrix),e.morphTexture!==null&&(this.morphTexture=e.morphTexture.clone()),e.instanceColor!==null&&(this.instanceColor=e.instanceColor.clone()),this.count=e.count,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}getColorAt(e,t){return this.instanceColor===null?t.setRGB(1,1,1):t.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,t){return t.fromArray(this.instanceMatrix.array,e*16)}getMorphAt(e,t){let i=t.morphTargetInfluences,s=this.morphTexture.source.data.data,r=i.length+1,o=e*r+1;for(let a=0;a<i.length;a++)i[a]=s[o+a]}raycast(e,t){let i=this.matrixWorld,s=this.count;if(Ra.geometry=this.geometry,Ra.material=this.material,Ra.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Ca.copy(this.boundingSphere),Ca.applyMatrix4(i),e.ray.intersectsSphere(Ca)!==!1))for(let r=0;r<s;r++){this.getMatrixAt(r,xo),pm.multiplyMatrices(i,xo),Ra.matrixWorld=pm,Ra.raycast(e,Lc);for(let o=0,a=Lc.length;o<a;o++){let l=Lc[o];l.instanceId=r,l.object=this,t.push(l)}Lc.length=0}}setColorAt(e,t){return this.instanceColor===null&&(this.instanceColor=new qa(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),t.toArray(this.instanceColor.array,e*3),this}setMatrixAt(e,t){return t.toArray(this.instanceMatrix.array,e*16),this}setMorphAt(e,t){let i=t.morphTargetInfluences,s=i.length+1;this.morphTexture===null&&(this.morphTexture=new $a(new Float32Array(s*this.count),s,this.count,Ih,Si));let r=this.morphTexture.source.data.data,o=0;for(let c=0;c<i.length;c++)o+=i[c];let a=this.geometry.morphTargetsRelative?1:1-o,l=s*e;return r[l]=a,r.set(i,l+1),this}updateMorphTargets(){}dispose(){super.dispose(),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null)}},wr=new Ts,N_=new j(.5,.5),Dc=new I,ko=class{constructor(e=new oi,t=new oi,i=new oi,s=new oi,r=new oi,o=new oi){this.planes=[e,t,i,s,r,o]}set(e,t,i,s,r,o){let a=this.planes;return a[0].copy(e),a[1].copy(t),a[2].copy(i),a[3].copy(s),a[4].copy(r),a[5].copy(o),this}copy(e){let t=this.planes;for(let i=0;i<6;i++)t[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e,t=zi,i=!1){let s=this.planes,r=e.elements,o=r[0],a=r[1],l=r[2],c=r[3],d=r[4],f=r[5],h=r[6],u=r[7],m=r[8],y=r[9],g=r[10],p=r[11],v=r[12],M=r[13],_=r[14],S=r[15];if(s[0].setComponents(c-o,u-d,p-m,S-v).normalize(),s[1].setComponents(c+o,u+d,p+m,S+v).normalize(),s[2].setComponents(c+a,u+f,p+y,S+M).normalize(),s[3].setComponents(c-a,u-f,p-y,S-M).normalize(),i)s[4].setComponents(l,h,g,_).normalize(),s[5].setComponents(c-l,u-h,p-g,S-_).normalize();else if(s[4].setComponents(c-l,u-h,p-g,S-_).normalize(),t===zi)s[5].setComponents(c+l,u+h,p+g,S+_).normalize();else if(t===To)s[5].setComponents(l,h,g,_).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),wr.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{let t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),wr.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(wr)}intersectsSprite(e){wr.center.set(0,0,0);let t=N_.distanceTo(e.center);return wr.radius=.7071067811865476+t,wr.applyMatrix4(e.matrixWorld),this.intersectsSphere(wr)}intersectsSphere(e){let t=this.planes,i=e.center,s=-e.radius;for(let r=0;r<6;r++)if(t[r].distanceToPoint(i)<s)return!1;return!0}intersectsBox(e){let t=this.planes;for(let i=0;i<6;i++){let s=t[i];if(Dc.x=s.normal.x>0?e.max.x:e.min.x,Dc.y=s.normal.y>0?e.max.y:e.min.y,Dc.z=s.normal.z>0?e.max.z:e.min.z,s.distanceToPoint(Dc)<0)return!1}return!0}containsPoint(e){let t=this.planes;for(let i=0;i<6;i++)if(t[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}};var qs=class extends xi{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new Ie(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}},gm=new Et,Fd=new $s,Nc=new Ts,Uc=new I,Rr=class extends un{constructor(e=new Ft,t=new qs){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,t){let i=this.geometry,s=this.matrixWorld,r=e.params.Points.threshold,o=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),Nc.copy(i.boundingSphere),Nc.applyMatrix4(s),Nc.radius+=r,e.ray.intersectsSphere(Nc)===!1)return;gm.copy(s).invert(),Fd.copy(e.ray).applyMatrix4(gm);let a=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=i.index,f=i.attributes.position;if(c!==null){let h=Math.max(0,o.start),u=Math.min(c.count,o.start+o.count);for(let m=h,y=u;m<y;m++){let g=c.getX(m);Uc.fromBufferAttribute(f,g),ym(Uc,g,l,s,e,t,this)}}else{let h=Math.max(0,o.start),u=Math.min(f.count,o.start+o.count);for(let m=h,y=u;m<y;m++)Uc.fromBufferAttribute(f,m),ym(Uc,m,l,s,e,t,this)}}updateMorphTargets(){let t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){let s=t[i[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){let a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}};function ym(n,e,t,i,s,r,o){let a=Fd.distanceSqToPoint(n);if(a<t){let l=new I;Fd.closestPointToPoint(n,l),l.applyMatrix4(i);let c=s.ray.origin.distanceTo(l);if(c<s.near||c>s.far)return;r.push({distance:c,distanceToRay:Math.sqrt(a),point:l,index:e,face:null,faceIndex:null,barycoord:null,object:o})}}var Ya=class extends Wn{constructor(e=[],t=tr,i,s,r,o,a,l,c,d){super(e,t,i,s,r,o,a,l,c,d),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}},dn=class extends Wn{constructor(e,t,i,s,r,o,a,l,c){super(e,t,i,s,r,o,a,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}};var Xs=class extends Wn{constructor(e,t,i=Xi,s,r,o,a=wn,l=wn,c,d=os,f=1){if(d!==os&&d!==ir)throw new Error("THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat");let h={width:e,height:t,depth:f};super(h,s,r,o,a,l,d,i,c),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new Co(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){let t=super.toJSON(e);return t.compareFunction=this.compareFunction,t}},nh=class extends Xs{constructor(e,t=Xi,i=tr,s,r,o=wn,a=wn,l,c=os){let d={width:e,height:e,depth:1},f=[d,d,d,d,d,d];super(e,e,t,i,s,r,o,a,l,c),this.image=f,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(e){this.image=e}},Ka=class extends Wn{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}},Fn=class n extends Ft{constructor(e=1,t=1,i=1,s=1,r=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:i,widthSegments:s,heightSegments:r,depthSegments:o};let a=this;s=Math.floor(s),r=Math.floor(r),o=Math.floor(o);let l=[],c=[],d=[],f=[],h=0,u=0;m("z","y","x",-1,-1,i,t,e,o,r,0),m("z","y","x",1,-1,i,t,-e,o,r,1),m("x","z","y",1,1,e,i,t,s,o,2),m("x","z","y",1,-1,e,i,-t,s,o,3),m("x","y","z",1,-1,e,t,i,s,r,4),m("x","y","z",-1,-1,e,t,-i,s,r,5),this.setIndex(l),this.setAttribute("position",new ht(c,3)),this.setAttribute("normal",new ht(d,3)),this.setAttribute("uv",new ht(f,2));function m(y,g,p,v,M,_,S,E,P,x,A){let T=_/P,C=S/x,k=_/2,D=S/2,L=E/2,F=P+1,B=x+1,$=0,se=0,X=new I;for(let Q=0;Q<B;Q++){let ne=Q*C-D;for(let Oe=0;Oe<F;Oe++){let Ce=Oe*T-k;X[y]=Ce*v,X[g]=ne*M,X[p]=L,c.push(X.x,X.y,X.z),X[y]=0,X[g]=0,X[p]=E>0?1:-1,d.push(X.x,X.y,X.z),f.push(Oe/P),f.push(1-Q/x),$+=1}}for(let Q=0;Q<x;Q++)for(let ne=0;ne<P;ne++){let Oe=h+ne+F*Q,Ce=h+ne+F*(Q+1),mt=h+(ne+1)+F*(Q+1),at=h+(ne+1)+F*Q;l.push(Oe,Ce,at),l.push(Ce,mt,at),se+=6}a.addGroup(u,se,A),u+=se,h+=$}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}};var As=class n extends Ft{constructor(e=1,t=32,i=0,s=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:e,segments:t,thetaStart:i,thetaLength:s},t=Math.max(3,t);let r=[],o=[],a=[],l=[],c=new I,d=new j;o.push(0,0,0),a.push(0,0,1),l.push(.5,.5);for(let f=0,h=3;f<=t;f++,h+=3){let u=i+f/t*s;c.x=e*Math.cos(u),c.y=e*Math.sin(u),o.push(c.x,c.y,c.z),a.push(0,0,1),d.x=(o[h]/e+1)/2,d.y=(o[h+1]/e+1)/2,l.push(d.x,d.y)}for(let f=1;f<=t;f++)r.push(f,f+1,0);this.setIndex(r),this.setAttribute("position",new ht(o,3)),this.setAttribute("normal",new ht(a,3)),this.setAttribute("uv",new ht(l,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.radius,e.segments,e.thetaStart,e.thetaLength)}},yt=class n extends Ft{constructor(e=1,t=1,i=1,s=32,r=1,o=!1,a=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:i,radialSegments:s,heightSegments:r,openEnded:o,thetaStart:a,thetaLength:l};let c=this;s=Math.floor(s),r=Math.floor(r);let d=[],f=[],h=[],u=[],m=0,y=[],g=i/2,p=0;v(),o===!1&&(e>0&&M(!0),t>0&&M(!1)),this.setIndex(d),this.setAttribute("position",new ht(f,3)),this.setAttribute("normal",new ht(h,3)),this.setAttribute("uv",new ht(u,2));function v(){let _=new I,S=new I,E=0,P=(t-e)/i;for(let x=0;x<=r;x++){let A=[],T=x/r,C=T*(t-e)+e;for(let k=0;k<=s;k++){let D=k/s,L=D*l+a,F=Math.sin(L),B=Math.cos(L);S.x=C*F,S.y=-T*i+g,S.z=C*B,f.push(S.x,S.y,S.z),_.set(F,P,B).normalize(),h.push(_.x,_.y,_.z),u.push(D,1-T),A.push(m++)}y.push(A)}for(let x=0;x<s;x++)for(let A=0;A<r;A++){let T=y[A][x],C=y[A+1][x],k=y[A+1][x+1],D=y[A][x+1];(e>0||A!==0)&&(d.push(T,C,D),E+=3),(t>0||A!==r-1)&&(d.push(C,k,D),E+=3)}c.addGroup(p,E,0),p+=E}function M(_){let S=m,E=new j,P=new I,x=0,A=_===!0?e:t,T=_===!0?1:-1;for(let k=1;k<=s;k++)f.push(0,g*T,0),h.push(0,T,0),u.push(.5,.5),m++;let C=m;for(let k=0;k<=s;k++){let L=k/s*l+a,F=Math.cos(L),B=Math.sin(L);P.x=A*B,P.y=g*T,P.z=A*F,f.push(P.x,P.y,P.z),h.push(0,T,0),E.x=F*.5+.5,E.y=B*.5*T+.5,u.push(E.x,E.y),m++}for(let k=0;k<s;k++){let D=S+k,L=C+k;_===!0?d.push(L,L+1,D):d.push(L+1,L,D),x+=3}c.addGroup(p,x,_===!0?1:2),p+=x}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}},Rs=class n extends yt{constructor(e=1,t=1,i=32,s=1,r=!1,o=0,a=Math.PI*2){super(0,e,t,i,s,r,o,a),this.type="ConeGeometry",this.parameters={radius:e,height:t,radialSegments:i,heightSegments:s,openEnded:r,thetaStart:o,thetaLength:a}}static fromJSON(e){return new n(e.radius,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}},Za=class n extends Ft{constructor(e=[],t=[],i=1,s=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:e,indices:t,radius:i,detail:s};let r=[],o=[];a(s),c(i),d(),this.setAttribute("position",new ht(r,3)),this.setAttribute("normal",new ht(r.slice(),3)),this.setAttribute("uv",new ht(o,2)),s===0?this.computeVertexNormals():this.normalizeNormals();function a(v){let M=new I,_=new I,S=new I;for(let E=0;E<t.length;E+=3)u(t[E+0],M),u(t[E+1],_),u(t[E+2],S),l(M,_,S,v)}function l(v,M,_,S){let E=S+1,P=[];for(let x=0;x<=E;x++){P[x]=[];let A=v.clone().lerp(_,x/E),T=M.clone().lerp(_,x/E),C=E-x;for(let k=0;k<=C;k++)k===0&&x===E?P[x][k]=A:P[x][k]=A.clone().lerp(T,k/C)}for(let x=0;x<E;x++)for(let A=0;A<2*(E-x)-1;A++){let T=Math.floor(A/2);A%2===0?(h(P[x][T+1]),h(P[x+1][T]),h(P[x][T])):(h(P[x][T+1]),h(P[x+1][T+1]),h(P[x+1][T]))}}function c(v){let M=new I;for(let _=0;_<r.length;_+=3)M.x=r[_+0],M.y=r[_+1],M.z=r[_+2],M.normalize().multiplyScalar(v),r[_+0]=M.x,r[_+1]=M.y,r[_+2]=M.z}function d(){let v=new I;for(let M=0;M<r.length;M+=3){v.x=r[M+0],v.y=r[M+1],v.z=r[M+2];let _=g(v)/2/Math.PI+.5,S=p(v)/Math.PI+.5;o.push(_,1-S)}m(),f()}function f(){for(let v=0;v<o.length;v+=6){let M=o[v+0],_=o[v+2],S=o[v+4],E=Math.max(M,_,S),P=Math.min(M,_,S);E>.9&&P<.1&&(M<.2&&(o[v+0]+=1),_<.2&&(o[v+2]+=1),S<.2&&(o[v+4]+=1))}}function h(v){r.push(v.x,v.y,v.z)}function u(v,M){let _=v*3;M.x=e[_+0],M.y=e[_+1],M.z=e[_+2]}function m(){let v=new I,M=new I,_=new I,S=new I,E=new j,P=new j,x=new j;for(let A=0,T=0;A<r.length;A+=9,T+=6){v.set(r[A+0],r[A+1],r[A+2]),M.set(r[A+3],r[A+4],r[A+5]),_.set(r[A+6],r[A+7],r[A+8]),E.set(o[T+0],o[T+1]),P.set(o[T+2],o[T+3]),x.set(o[T+4],o[T+5]),S.copy(v).add(M).add(_).divideScalar(3);let C=g(S);y(E,T+0,v,C),y(P,T+2,M,C),y(x,T+4,_,C)}}function y(v,M,_,S){S<0&&v.x===1&&(o[M]=v.x-1),_.x===0&&_.z===0&&(o[M]=S/2/Math.PI+.5)}function g(v){return Math.atan2(v.z,-v.x)}function p(v){return Math.atan2(-v.y,Math.sqrt(v.x*v.x+v.z*v.z))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.vertices,e.indices,e.radius,e.detail)}};var li=class{constructor(){this.type="Curve",this.arcLengthDivisions=200,this.needsUpdate=!1,this.cacheArcLengths=null}getPoint(){Xe("Curve: .getPoint() not implemented.")}getPointAt(e,t){let i=this.getUtoTmapping(e);return this.getPoint(i,t)}getPoints(e=5){let t=[];for(let i=0;i<=e;i++)t.push(this.getPoint(i/e));return t}getSpacedPoints(e=5){let t=[];for(let i=0;i<=e;i++)t.push(this.getPointAt(i/e));return t}getLength(){let e=this.getLengths();return e[e.length-1]}getLengths(e=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===e+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;let t=[],i,s=this.getPoint(0),r=0;t.push(0);for(let o=1;o<=e;o++)i=this.getPoint(o/e),r+=i.distanceTo(s),t.push(r),s=i;return this.cacheArcLengths=t,t}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(e,t=null){let i=this.getLengths(),s=0,r=i.length,o;t?o=t:o=e*i[r-1];let a=0,l=r-1,c;for(;a<=l;)if(s=Math.floor(a+(l-a)/2),c=i[s]-o,c<0)a=s+1;else if(c>0)l=s-1;else{l=s;break}if(s=l,i[s]===o)return s/(r-1);let d=i[s],h=i[s+1]-d,u=(o-d)/h;return(s+u)/(r-1)}getTangent(e,t){let s=e-1e-4,r=e+1e-4;s<0&&(s=0),r>1&&(r=1);let o=this.getPoint(s),a=this.getPoint(r),l=t||(o.isVector2?new j:new I);return l.copy(a).sub(o).normalize(),l}getTangentAt(e,t){let i=this.getUtoTmapping(e);return this.getTangent(i,t)}computeFrenetFrames(e,t=!1){let i=new I,s=[],r=[],o=[],a=new I,l=new Et;for(let u=0;u<=e;u++){let m=u/e;s[u]=this.getTangentAt(m,new I)}r[0]=new I,o[0]=new I;let c=Number.MAX_VALUE,d=Math.abs(s[0].x),f=Math.abs(s[0].y),h=Math.abs(s[0].z);d<=c&&(c=d,i.set(1,0,0)),f<=c&&(c=f,i.set(0,1,0)),h<=c&&i.set(0,0,1),a.crossVectors(s[0],i).normalize(),r[0].crossVectors(s[0],a),o[0].crossVectors(s[0],r[0]);for(let u=1;u<=e;u++){if(r[u]=r[u-1].clone(),o[u]=o[u-1].clone(),a.crossVectors(s[u-1],s[u]),a.length()>Number.EPSILON){a.normalize();let m=Math.acos(it(s[u-1].dot(s[u]),-1,1));r[u].applyMatrix4(l.makeRotationAxis(a,m))}o[u].crossVectors(s[u],r[u])}if(t===!0){let u=Math.acos(it(r[0].dot(r[e]),-1,1));u/=e,s[0].dot(a.crossVectors(r[0],r[e]))>0&&(u=-u);for(let m=1;m<=e;m++)r[m].applyMatrix4(l.makeRotationAxis(s[m],u*m)),o[m].crossVectors(s[m],r[m])}return{tangents:s,normals:r,binormals:o}}clone(){return new this.constructor().copy(this)}copy(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}toJSON(){let e={metadata:{version:4.7,type:"Curve",generator:"Curve.toJSON"}};return e.arcLengthDivisions=this.arcLengthDivisions,e.type=this.type,e}fromJSON(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}},Lo=class extends li{constructor(e=0,t=0,i=1,s=1,r=0,o=Math.PI*2,a=!1,l=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=e,this.aY=t,this.xRadius=i,this.yRadius=s,this.aStartAngle=r,this.aEndAngle=o,this.aClockwise=a,this.aRotation=l}getPoint(e,t=new j){let i=t,s=Math.PI*2,r=this.aEndAngle-this.aStartAngle,o=Math.abs(r)<Number.EPSILON;for(;r<0;)r+=s;for(;r>s;)r-=s;r<Number.EPSILON&&(o?r=0:r=s),this.aClockwise===!0&&!o&&(r===s?r=-s:r=r-s);let a=this.aStartAngle+e*r,l=this.aX+this.xRadius*Math.cos(a),c=this.aY+this.yRadius*Math.sin(a);if(this.aRotation!==0){let d=Math.cos(this.aRotation),f=Math.sin(this.aRotation),h=l-this.aX,u=c-this.aY;l=h*d-u*f+this.aX,c=h*f+u*d+this.aY}return i.set(l,c)}copy(e){return super.copy(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}toJSON(){let e=super.toJSON();return e.aX=this.aX,e.aY=this.aY,e.xRadius=this.xRadius,e.yRadius=this.yRadius,e.aStartAngle=this.aStartAngle,e.aEndAngle=this.aEndAngle,e.aClockwise=this.aClockwise,e.aRotation=this.aRotation,e}fromJSON(e){return super.fromJSON(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}},ih=class extends Lo{constructor(e,t,i,s,r,o){super(e,t,i,i,s,r,o),this.isArcCurve=!0,this.type="ArcCurve"}};function hf(){let n=0,e=0,t=0,i=0;function s(r,o,a,l){n=r,e=a,t=-3*r+3*o-2*a-l,i=2*r-2*o+a+l}return{initCatmullRom:function(r,o,a,l,c){s(o,a,c*(a-r),c*(l-o))},initNonuniformCatmullRom:function(r,o,a,l,c,d,f){let h=(o-r)/c-(a-r)/(c+d)+(a-o)/d,u=(a-o)/d-(l-o)/(d+f)+(l-a)/f;h*=d,u*=d,s(o,a,h,u)},calc:function(r){let o=r*r,a=o*r;return n+e*r+t*o+i*a}}}var _m=new I,vm=new I,Cd=new hf,Pd=new hf,Id=new hf,sh=class extends li{constructor(e=[],t=!1,i="centripetal",s=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=e,this.closed=t,this.curveType=i,this.tension=s}getPoint(e,t=new I){let i=t,s=this.points,r=s.length,o=(r-(this.closed?0:1))*e,a=Math.floor(o),l=o-a;this.closed?a+=a>0?0:(Math.floor(Math.abs(a)/r)+1)*r:l===0&&a===r-1&&(a=r-2,l=1);let c,d;this.closed||a>0?c=s[(a-1)%r]:(vm.subVectors(s[0],s[1]).add(s[0]),c=vm);let f=s[a%r],h=s[(a+1)%r];if(this.closed||a+2<r?d=s[(a+2)%r]:(_m.subVectors(s[r-1],s[r-2]).add(s[r-1]),d=_m),this.curveType==="centripetal"||this.curveType==="chordal"){let u=this.curveType==="chordal"?.5:.25,m=Math.pow(c.distanceToSquared(f),u),y=Math.pow(f.distanceToSquared(h),u),g=Math.pow(h.distanceToSquared(d),u);y<1e-4&&(y=1),m<1e-4&&(m=y),g<1e-4&&(g=y),Cd.initNonuniformCatmullRom(c.x,f.x,h.x,d.x,m,y,g),Pd.initNonuniformCatmullRom(c.y,f.y,h.y,d.y,m,y,g),Id.initNonuniformCatmullRom(c.z,f.z,h.z,d.z,m,y,g)}else this.curveType==="catmullrom"&&(Cd.initCatmullRom(c.x,f.x,h.x,d.x,this.tension),Pd.initCatmullRom(c.y,f.y,h.y,d.y,this.tension),Id.initCatmullRom(c.z,f.z,h.z,d.z,this.tension));return i.set(Cd.calc(l),Pd.calc(l),Id.calc(l)),i}copy(e){super.copy(e),this.points=[];for(let t=0,i=e.points.length;t<i;t++){let s=e.points[t];this.points.push(s.clone())}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}toJSON(){let e=super.toJSON();e.points=[];for(let t=0,i=this.points.length;t<i;t++){let s=this.points[t];e.points.push(s.toArray())}return e.closed=this.closed,e.curveType=this.curveType,e.tension=this.tension,e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,i=e.points.length;t<i;t++){let s=e.points[t];this.points.push(new I().fromArray(s))}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}};function xm(n,e,t,i,s){let r=(i-e)*.5,o=(s-t)*.5,a=n*n,l=n*a;return(2*t-2*i+r+o)*l+(-3*t+3*i-2*r-o)*a+r*n+t}function U_(n,e){let t=1-n;return t*t*e}function O_(n,e){return 2*(1-n)*n*e}function F_(n,e){return n*n*e}function La(n,e,t,i){return U_(n,e)+O_(n,t)+F_(n,i)}function B_(n,e){let t=1-n;return t*t*t*e}function H_(n,e){let t=1-n;return 3*t*t*n*e}function z_(n,e){return 3*(1-n)*n*n*e}function G_(n,e){return n*n*n*e}function Da(n,e,t,i,s){return B_(n,e)+H_(n,t)+z_(n,i)+G_(n,s)}var Cr=class extends li{constructor(e=new j,t=new j,i=new j,s=new j){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=e,this.v1=t,this.v2=i,this.v3=s}getPoint(e,t=new j){let i=t,s=this.v0,r=this.v1,o=this.v2,a=this.v3;return i.set(Da(e,s.x,r.x,o.x,a.x),Da(e,s.y,r.y,o.y,a.y)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}},rh=class extends li{constructor(e=new I,t=new I,i=new I,s=new I){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=e,this.v1=t,this.v2=i,this.v3=s}getPoint(e,t=new I){let i=t,s=this.v0,r=this.v1,o=this.v2,a=this.v3;return i.set(Da(e,s.x,r.x,o.x,a.x),Da(e,s.y,r.y,o.y,a.y),Da(e,s.z,r.z,o.z,a.z)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}},Ja=class extends li{constructor(e=new j,t=new j){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=e,this.v2=t}getPoint(e,t=new j){let i=t;return e===1?i.copy(this.v2):(i.copy(this.v2).sub(this.v1),i.multiplyScalar(e).add(this.v1)),i}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new j){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},oh=class extends li{constructor(e=new I,t=new I){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=e,this.v2=t}getPoint(e,t=new I){let i=t;return e===1?i.copy(this.v2):(i.copy(this.v2).sub(this.v1),i.multiplyScalar(e).add(this.v1)),i}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new I){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},ja=class extends li{constructor(e=new j,t=new j,i=new j){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=e,this.v1=t,this.v2=i}getPoint(e,t=new j){let i=t,s=this.v0,r=this.v1,o=this.v2;return i.set(La(e,s.x,r.x,o.x),La(e,s.y,r.y,o.y)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},ah=class extends li{constructor(e=new I,t=new I,i=new I){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=e,this.v1=t,this.v2=i}getPoint(e,t=new I){let i=t,s=this.v0,r=this.v1,o=this.v2;return i.set(La(e,s.x,r.x,o.x),La(e,s.y,r.y,o.y),La(e,s.z,r.z,o.z)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},Pr=class extends li{constructor(e=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=e}getPoint(e,t=new j){let i=t,s=this.points,r=(s.length-1)*e,o=Math.floor(r),a=r-o,l=s[o===0?o:o-1],c=s[o],d=s[o>s.length-2?s.length-1:o+1],f=s[o>s.length-3?s.length-1:o+2];return i.set(xm(a,l.x,c.x,d.x,f.x),xm(a,l.y,c.y,d.y,f.y)),i}copy(e){super.copy(e),this.points=[];for(let t=0,i=e.points.length;t<i;t++){let s=e.points[t];this.points.push(s.clone())}return this}toJSON(){let e=super.toJSON();e.points=[];for(let t=0,i=this.points.length;t<i;t++){let s=this.points[t];e.points.push(s.toArray())}return e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,i=e.points.length;t<i;t++){let s=e.points[t];this.points.push(new j().fromArray(s))}return this}},Bd=Object.freeze({__proto__:null,ArcCurve:ih,CatmullRomCurve3:sh,CubicBezierCurve:Cr,CubicBezierCurve3:rh,EllipseCurve:Lo,LineCurve:Ja,LineCurve3:oh,QuadraticBezierCurve:ja,QuadraticBezierCurve3:ah,SplineCurve:Pr}),lh=class extends li{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(e){this.curves.push(e)}closePath(){let e=this.curves[0].getPoint(0),t=this.curves[this.curves.length-1].getPoint(1);if(!e.equals(t)){let i=e.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new Bd[i](t,e))}return this}getPoint(e,t){let i=e*this.getLength(),s=this.getCurveLengths(),r=0;for(;r<s.length;){if(s[r]>=i){let o=s[r]-i,a=this.curves[r],l=a.getLength(),c=l===0?0:1-o/l;return a.getPointAt(c,t)}r++}return null}getLength(){let e=this.getCurveLengths();return e[e.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;let e=[],t=0;for(let i=0,s=this.curves.length;i<s;i++)t+=this.curves[i].getLength(),e.push(t);return this.cacheLengths=e,e}getSpacedPoints(e=40){let t=[];for(let i=0;i<=e;i++)t.push(this.getPoint(i/e));return this.autoClose&&t.push(t[0]),t}getPoints(e=12){let t=[],i;for(let s=0,r=this.curves;s<r.length;s++){let o=r[s],a=o.isEllipseCurve?e*2:o.isLineCurve||o.isLineCurve3?1:o.isSplineCurve?e*o.points.length:e,l=o.getPoints(a);for(let c=0;c<l.length;c++){let d=l[c];i&&i.equals(d)||(t.push(d),i=d)}}return this.autoClose&&t.length>1&&!t[t.length-1].equals(t[0])&&t.push(t[0]),t}copy(e){super.copy(e),this.curves=[];for(let t=0,i=e.curves.length;t<i;t++){let s=e.curves[t];this.curves.push(s.clone())}return this.autoClose=e.autoClose,this}toJSON(){let e=super.toJSON();e.autoClose=this.autoClose,e.curves=[];for(let t=0,i=this.curves.length;t<i;t++){let s=this.curves[t];e.curves.push(s.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.autoClose=e.autoClose,this.curves=[];for(let t=0,i=e.curves.length;t<i;t++){let s=e.curves[t];this.curves.push(new Bd[s.type]().fromJSON(s))}return this}},Qa=class extends lh{constructor(e){super(),this.type="Path",this.currentPoint=new j,e&&this.setFromPoints(e)}setFromPoints(e){this.moveTo(e[0].x,e[0].y);for(let t=1,i=e.length;t<i;t++)this.lineTo(e[t].x,e[t].y);return this}moveTo(e,t){return this.currentPoint.set(e,t),this}lineTo(e,t){let i=new Ja(this.currentPoint.clone(),new j(e,t));return this.curves.push(i),this.currentPoint.set(e,t),this}quadraticCurveTo(e,t,i,s){let r=new ja(this.currentPoint.clone(),new j(e,t),new j(i,s));return this.curves.push(r),this.currentPoint.set(i,s),this}bezierCurveTo(e,t,i,s,r,o){let a=new Cr(this.currentPoint.clone(),new j(e,t),new j(i,s),new j(r,o));return this.curves.push(a),this.currentPoint.set(r,o),this}splineThru(e){let t=[this.currentPoint.clone()].concat(e),i=new Pr(t);return this.curves.push(i),this.currentPoint.copy(e[e.length-1]),this}arc(e,t,i,s,r,o){let a=this.currentPoint.x,l=this.currentPoint.y;return this.absarc(e+a,t+l,i,s,r,o),this}absarc(e,t,i,s,r,o){return this.absellipse(e,t,i,i,s,r,o),this}ellipse(e,t,i,s,r,o,a,l){let c=this.currentPoint.x,d=this.currentPoint.y;return this.absellipse(e+c,t+d,i,s,r,o,a,l),this}absellipse(e,t,i,s,r,o,a,l){let c=new Lo(e,t,i,s,r,o,a,l);if(this.curves.length>0){let f=c.getPoint(0);f.equals(this.currentPoint)||this.lineTo(f.x,f.y)}this.curves.push(c);let d=c.getPoint(1);return this.currentPoint.copy(d),this}copy(e){return super.copy(e),this.currentPoint.copy(e.currentPoint),this}toJSON(){let e=super.toJSON();return e.currentPoint=this.currentPoint.toArray(),e}fromJSON(e){return super.fromJSON(e),this.currentPoint.fromArray(e.currentPoint),this}},bi=class extends Qa{constructor(e){super(e),this.uuid=rs(),this.type="Shape",this.holes=[]}getPointsHoles(e){let t=[];for(let i=0,s=this.holes.length;i<s;i++)t[i]=this.holes[i].getPoints(e);return t}extractPoints(e){return{shape:this.getPoints(e),holes:this.getPointsHoles(e)}}copy(e){super.copy(e),this.holes=[];for(let t=0,i=e.holes.length;t<i;t++){let s=e.holes[t];this.holes.push(s.clone())}return this}toJSON(){let e=super.toJSON();e.uuid=this.uuid,e.holes=[];for(let t=0,i=this.holes.length;t<i;t++){let s=this.holes[t];e.holes.push(s.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.uuid=e.uuid,this.holes=[];for(let t=0,i=e.holes.length;t<i;t++){let s=e.holes[t];this.holes.push(new Qa().fromJSON(s))}return this}};function V_(n,e,t=2){let i=e&&e.length,s=i?e[0]*t:n.length,r=y0(n,0,s,t,!0),o=[];if(!r||r.next===r.prev)return o;let a,l,c;if(i&&(r=Y_(n,e,r,t)),n.length>80*t){a=n[0],l=n[1];let d=a,f=l;for(let h=t;h<s;h+=t){let u=n[h],m=n[h+1];u<a&&(a=u),m<l&&(l=m),u>d&&(d=u),m>f&&(f=m)}c=Math.max(d-a,f-l),c=c!==0?32767/c:0}return el(r,o,t,a,l,c,0),o}function y0(n,e,t,i,s){let r;if(s===rv(n,e,t,i)>0)for(let o=e;o<t;o+=i)r=bm(o/i|0,n[o],n[o+1],r);else for(let o=t-i;o>=e;o-=i)r=bm(o/i|0,n[o],n[o+1],r);return r&&Do(r,r.next)&&(nl(r),r=r.next),r}function Ir(n,e){if(!n)return n;e||(e=n);let t=n,i;do if(i=!1,!t.steiner&&(Do(t,t.next)||jt(t.prev,t,t.next)===0)){if(nl(t),t=e=t.prev,t===t.next)break;i=!0}else t=t.next;while(i||t!==e);return e}function el(n,e,t,i,s,r,o){if(!n)return;!o&&r&&Q_(n,i,s,r);let a=n;for(;n.prev!==n.next;){let l=n.prev,c=n.next;if(r?$_(n,i,s,r):W_(n)){e.push(l.i,n.i,c.i),nl(n),n=c.next,a=c.next;continue}if(n=c,n===a){o?o===1?(n=q_(Ir(n),e),el(n,e,t,i,s,r,2)):o===2&&X_(n,e,t,i,s,r):el(Ir(n),e,t,i,s,r,1);break}}}function W_(n){let e=n.prev,t=n,i=n.next;if(jt(e,t,i)>=0)return!1;let s=e.x,r=t.x,o=i.x,a=e.y,l=t.y,c=i.y,d=Math.min(s,r,o),f=Math.min(a,l,c),h=Math.max(s,r,o),u=Math.max(a,l,c),m=i.next;for(;m!==e;){if(m.x>=d&&m.x<=h&&m.y>=f&&m.y<=u&&Pa(s,a,r,l,o,c,m.x,m.y)&&jt(m.prev,m,m.next)>=0)return!1;m=m.next}return!0}function $_(n,e,t,i){let s=n.prev,r=n,o=n.next;if(jt(s,r,o)>=0)return!1;let a=s.x,l=r.x,c=o.x,d=s.y,f=r.y,h=o.y,u=Math.min(a,l,c),m=Math.min(d,f,h),y=Math.max(a,l,c),g=Math.max(d,f,h),p=Hd(u,m,e,t,i),v=Hd(y,g,e,t,i),M=n.prevZ,_=n.nextZ;for(;M&&M.z>=p&&_&&_.z<=v;){if(M.x>=u&&M.x<=y&&M.y>=m&&M.y<=g&&M!==s&&M!==o&&Pa(a,d,l,f,c,h,M.x,M.y)&&jt(M.prev,M,M.next)>=0||(M=M.prevZ,_.x>=u&&_.x<=y&&_.y>=m&&_.y<=g&&_!==s&&_!==o&&Pa(a,d,l,f,c,h,_.x,_.y)&&jt(_.prev,_,_.next)>=0))return!1;_=_.nextZ}for(;M&&M.z>=p;){if(M.x>=u&&M.x<=y&&M.y>=m&&M.y<=g&&M!==s&&M!==o&&Pa(a,d,l,f,c,h,M.x,M.y)&&jt(M.prev,M,M.next)>=0)return!1;M=M.prevZ}for(;_&&_.z<=v;){if(_.x>=u&&_.x<=y&&_.y>=m&&_.y<=g&&_!==s&&_!==o&&Pa(a,d,l,f,c,h,_.x,_.y)&&jt(_.prev,_,_.next)>=0)return!1;_=_.nextZ}return!0}function q_(n,e){let t=n;do{let i=t.prev,s=t.next.next;!Do(i,s)&&v0(i,t,t.next,s)&&tl(i,s)&&tl(s,i)&&(e.push(i.i,t.i,s.i),nl(t),nl(t.next),t=n=s),t=t.next}while(t!==n);return Ir(t)}function X_(n,e,t,i,s,r){let o=n;do{let a=o.next.next;for(;a!==o.prev;){if(o.i!==a.i&&nv(o,a)){let l=x0(o,a);o=Ir(o,o.next),l=Ir(l,l.next),el(o,e,t,i,s,r,0),el(l,e,t,i,s,r,0);return}a=a.next}o=o.next}while(o!==n)}function Y_(n,e,t,i){let s=[];for(let r=0,o=e.length;r<o;r++){let a=e[r]*i,l=r<o-1?e[r+1]*i:n.length,c=y0(n,a,l,i,!1);c===c.next&&(c.steiner=!0),s.push(tv(c))}s.sort(K_);for(let r=0;r<s.length;r++)t=Z_(s[r],t);return t}function K_(n,e){let t=n.x-e.x;if(t===0&&(t=n.y-e.y,t===0)){let i=(n.next.y-n.y)/(n.next.x-n.x),s=(e.next.y-e.y)/(e.next.x-e.x);t=i-s}return t}function Z_(n,e){let t=J_(n,e);if(!t)return e;let i=x0(t,n);return Ir(i,i.next),Ir(t,t.next)}function J_(n,e){let t=e,i=n.x,s=n.y,r=-1/0,o;if(Do(n,t))return t;do{if(Do(n,t.next))return t.next;if(s<=t.y&&s>=t.next.y&&t.next.y!==t.y){let f=t.x+(s-t.y)*(t.next.x-t.x)/(t.next.y-t.y);if(f<=i&&f>r&&(r=f,o=t.x<t.next.x?t:t.next,f===i))return o}t=t.next}while(t!==e);if(!o)return null;let a=o,l=o.x,c=o.y,d=1/0;t=o;do{if(i>=t.x&&t.x>=l&&i!==t.x&&_0(s<c?i:r,s,l,c,s<c?r:i,s,t.x,t.y)){let f=Math.abs(s-t.y)/(i-t.x);tl(t,n)&&(f<d||f===d&&(t.x>o.x||t.x===o.x&&j_(o,t)))&&(o=t,d=f)}t=t.next}while(t!==a);return o}function j_(n,e){return jt(n.prev,n,e.prev)<0&&jt(e.next,n,n.next)<0}function Q_(n,e,t,i){let s=n;do s.z===0&&(s.z=Hd(s.x,s.y,e,t,i)),s.prevZ=s.prev,s.nextZ=s.next,s=s.next;while(s!==n);s.prevZ.nextZ=null,s.prevZ=null,ev(s)}function ev(n){let e,t=1;do{let i=n,s;n=null;let r=null;for(e=0;i;){e++;let o=i,a=0;for(let c=0;c<t&&(a++,o=o.nextZ,!!o);c++);let l=t;for(;a>0||l>0&&o;)a!==0&&(l===0||!o||i.z<=o.z)?(s=i,i=i.nextZ,a--):(s=o,o=o.nextZ,l--),r?r.nextZ=s:n=s,s.prevZ=r,r=s;i=o}r.nextZ=null,t*=2}while(e>1);return n}function Hd(n,e,t,i,s){return n=(n-t)*s|0,e=(e-i)*s|0,n=(n|n<<8)&16711935,n=(n|n<<4)&252645135,n=(n|n<<2)&858993459,n=(n|n<<1)&1431655765,e=(e|e<<8)&16711935,e=(e|e<<4)&252645135,e=(e|e<<2)&858993459,e=(e|e<<1)&1431655765,n|e<<1}function tv(n){let e=n,t=n;do(e.x<t.x||e.x===t.x&&e.y<t.y)&&(t=e),e=e.next;while(e!==n);return t}function _0(n,e,t,i,s,r,o,a){return(s-o)*(e-a)>=(n-o)*(r-a)&&(n-o)*(i-a)>=(t-o)*(e-a)&&(t-o)*(r-a)>=(s-o)*(i-a)}function Pa(n,e,t,i,s,r,o,a){return!(n===o&&e===a)&&_0(n,e,t,i,s,r,o,a)}function nv(n,e){return n.next.i!==e.i&&n.prev.i!==e.i&&!iv(n,e)&&(tl(n,e)&&tl(e,n)&&sv(n,e)&&(jt(n.prev,n,e.prev)||jt(n,e.prev,e))||Do(n,e)&&jt(n.prev,n,n.next)>0&&jt(e.prev,e,e.next)>0)}function jt(n,e,t){return(e.y-n.y)*(t.x-e.x)-(e.x-n.x)*(t.y-e.y)}function Do(n,e){return n.x===e.x&&n.y===e.y}function v0(n,e,t,i){let s=Fc(jt(n,e,t)),r=Fc(jt(n,e,i)),o=Fc(jt(t,i,n)),a=Fc(jt(t,i,e));return!!(s!==r&&o!==a||s===0&&Oc(n,t,e)||r===0&&Oc(n,i,e)||o===0&&Oc(t,n,i)||a===0&&Oc(t,e,i))}function Oc(n,e,t){return e.x<=Math.max(n.x,t.x)&&e.x>=Math.min(n.x,t.x)&&e.y<=Math.max(n.y,t.y)&&e.y>=Math.min(n.y,t.y)}function Fc(n){return n>0?1:n<0?-1:0}function iv(n,e){let t=n;do{if(t.i!==n.i&&t.next.i!==n.i&&t.i!==e.i&&t.next.i!==e.i&&v0(t,t.next,n,e))return!0;t=t.next}while(t!==n);return!1}function tl(n,e){return jt(n.prev,n,n.next)<0?jt(n,e,n.next)>=0&&jt(n,n.prev,e)>=0:jt(n,e,n.prev)<0||jt(n,n.next,e)<0}function sv(n,e){let t=n,i=!1,s=(n.x+e.x)/2,r=(n.y+e.y)/2;do t.y>r!=t.next.y>r&&t.next.y!==t.y&&s<(t.next.x-t.x)*(r-t.y)/(t.next.y-t.y)+t.x&&(i=!i),t=t.next;while(t!==n);return i}function x0(n,e){let t=zd(n.i,n.x,n.y),i=zd(e.i,e.x,e.y),s=n.next,r=e.prev;return n.next=e,e.prev=n,t.next=s,s.prev=t,i.next=t,t.prev=i,r.next=i,i.prev=r,i}function bm(n,e,t,i){let s=zd(n,e,t);return i?(s.next=i.next,s.prev=i,i.next.prev=s,i.next=s):(s.prev=s,s.next=s),s}function nl(n){n.next.prev=n.prev,n.prev.next=n.next,n.prevZ&&(n.prevZ.nextZ=n.nextZ),n.nextZ&&(n.nextZ.prevZ=n.prevZ)}function zd(n,e,t){return{i:n,x:e,y:t,prev:null,next:null,z:0,prevZ:null,nextZ:null,steiner:!1}}function rv(n,e,t,i){let s=0;for(let r=e,o=t-i;r<t;r+=i)s+=(n[o]-n[r])*(n[r+1]+n[o+1]),o=r;return s}var Gd=class{static triangulate(e,t,i=2){return V_(e,t,i)}},Er=class n{static area(e){let t=e.length,i=0;for(let s=t-1,r=0;r<t;s=r++)i+=e[s].x*e[r].y-e[r].x*e[s].y;return i*.5}static isClockWise(e){return n.area(e)<0}static triangulateShape(e,t){let i=[],s=[],r=[];Mm(e),Sm(i,e);let o=e.length;t.forEach(Mm);for(let l=0;l<t.length;l++)s.push(o),o+=t[l].length,Sm(i,t[l]);let a=Gd.triangulate(i,s);for(let l=0;l<a.length;l+=3)r.push(a.slice(l,l+3));return r}};function Mm(n){let e=n.length;e>2&&n[e-1].equals(n[0])&&n.pop()}function Sm(n,e){for(let t=0;t<e.length;t++)n.push(e[t].x),n.push(e[t].y)}var $i=class n extends Ft{constructor(e=new bi([new j(.5,.5),new j(-.5,.5),new j(-.5,-.5),new j(.5,-.5)]),t={}){super(),this.type="ExtrudeGeometry",this.parameters={shapes:e,options:t},e=Array.isArray(e)?e:[e];let i=this,s=[],r=[];for(let a=0,l=e.length;a<l;a++){let c=e[a];o(c)}this.setAttribute("position",new ht(s,3)),this.setAttribute("uv",new ht(r,2)),this.computeVertexNormals();function o(a){let l=[],c=t.curveSegments!==void 0?t.curveSegments:12,d=t.steps!==void 0?t.steps:1,f=t.depth!==void 0?t.depth:1,h=t.bevelEnabled!==void 0?t.bevelEnabled:!0,u=t.bevelThickness!==void 0?t.bevelThickness:.2,m=t.bevelSize!==void 0?t.bevelSize:u-.1,y=t.bevelOffset!==void 0?t.bevelOffset:0,g=t.bevelSegments!==void 0?t.bevelSegments:3,p=t.extrudePath,v=t.UVGenerator!==void 0?t.UVGenerator:ov,M,_=!1,S,E,P,x;if(p){M=p.getSpacedPoints(d),_=!0,h=!1;let ie=p.isCatmullRomCurve3?p.closed:!1;S=p.computeFrenetFrames(d,ie),E=new I,P=new I,x=new I}h||(g=0,u=0,m=0,y=0);let A=a.extractPoints(c),T=A.shape,C=A.holes;if(!Er.isClockWise(T)){T=T.reverse();for(let ie=0,ae=C.length;ie<ae;ie++){let ce=C[ie];Er.isClockWise(ce)&&(C[ie]=ce.reverse())}}function D(ie){let ce=10000000000000001e-36,he=ie[0];for(let me=1;me<=ie.length;me++){let We=me%ie.length,Ve=ie[We],Ze=Ve.x-he.x,tt=Ve.y-he.y,N=Ze*Ze+tt*tt,Mt=Math.max(Math.abs(Ve.x),Math.abs(Ve.y),Math.abs(he.x),Math.abs(he.y)),ut=ce*Mt*Mt;if(N<=ut){ie.splice(We,1),me--;continue}he=Ve}}D(T),C.forEach(D);let L=C.length,F=T;for(let ie=0;ie<L;ie++){let ae=C[ie];T=T.concat(ae)}function B(ie,ae,ce){return ae||qe("ExtrudeGeometry: vec does not exist"),ie.clone().addScaledVector(ae,ce)}let $=T.length;function se(ie,ae,ce){let he,me,We,Ve=ie.x-ae.x,Ze=ie.y-ae.y,tt=ce.x-ie.x,N=ce.y-ie.y,Mt=Ve*Ve+Ze*Ze,ut=Ve*N-Ze*tt;if(Math.abs(ut)>Number.EPSILON){let R=Math.sqrt(Mt),b=Math.sqrt(tt*tt+N*N),H=ae.x-Ze/R,W=ae.y+Ve/R,Y=ce.x-N/b,ue=ce.y+tt/b,pe=((Y-H)*N-(ue-W)*tt)/(Ve*N-Ze*tt);he=H+Ve*pe-ie.x,me=W+Ze*pe-ie.y;let Z=he*he+me*me;if(Z<=2)return new j(he,me);We=Math.sqrt(Z/2)}else{let R=!1;Ve>Number.EPSILON?tt>Number.EPSILON&&(R=!0):Ve<-Number.EPSILON?tt<-Number.EPSILON&&(R=!0):Math.sign(Ze)===Math.sign(N)&&(R=!0),R?(he=-Ze,me=Ve,We=Math.sqrt(Mt)):(he=Ve,me=Ze,We=Math.sqrt(Mt/2))}return new j(he/We,me/We)}let X=[];for(let ie=0,ae=F.length,ce=ae-1,he=ie+1;ie<ae;ie++,ce++,he++)ce===ae&&(ce=0),he===ae&&(he=0),X[ie]=se(F[ie],F[ce],F[he]);let Q=[],ne,Oe=X.concat();for(let ie=0,ae=L;ie<ae;ie++){let ce=C[ie];ne=[];for(let he=0,me=ce.length,We=me-1,Ve=he+1;he<me;he++,We++,Ve++)We===me&&(We=0),Ve===me&&(Ve=0),ne[he]=se(ce[he],ce[We],ce[Ve]);Q.push(ne),Oe=Oe.concat(ne)}let Ce;if(g===0)Ce=Er.triangulateShape(F,C);else{let ie=[],ae=[];for(let ce=0;ce<g;ce++){let he=ce/g,me=u*Math.cos(he*Math.PI/2),We=m*Math.sin(he*Math.PI/2)+y;for(let Ve=0,Ze=F.length;Ve<Ze;Ve++){let tt=B(F[Ve],X[Ve],We);fe(tt.x,tt.y,-me),he===0&&ie.push(tt)}for(let Ve=0,Ze=L;Ve<Ze;Ve++){let tt=C[Ve];ne=Q[Ve];let N=[];for(let Mt=0,ut=tt.length;Mt<ut;Mt++){let R=B(tt[Mt],ne[Mt],We);fe(R.x,R.y,-me),he===0&&N.push(R)}he===0&&ae.push(N)}}Ce=Er.triangulateShape(ie,ae)}let mt=Ce.length,at=m+y;for(let ie=0;ie<$;ie++){let ae=h?B(T[ie],Oe[ie],at):T[ie];_?(P.copy(S.normals[0]).multiplyScalar(ae.x),E.copy(S.binormals[0]).multiplyScalar(ae.y),x.copy(M[0]).add(P).add(E),fe(x.x,x.y,x.z)):fe(ae.x,ae.y,0)}for(let ie=1;ie<=d;ie++)for(let ae=0;ae<$;ae++){let ce=h?B(T[ae],Oe[ae],at):T[ae];_?(P.copy(S.normals[ie]).multiplyScalar(ce.x),E.copy(S.binormals[ie]).multiplyScalar(ce.y),x.copy(M[ie]).add(P).add(E),fe(x.x,x.y,x.z)):fe(ce.x,ce.y,f/d*ie)}for(let ie=g-1;ie>=0;ie--){let ae=ie/g,ce=u*Math.cos(ae*Math.PI/2),he=m*Math.sin(ae*Math.PI/2)+y;for(let me=0,We=F.length;me<We;me++){let Ve=B(F[me],X[me],he);fe(Ve.x,Ve.y,f+ce)}for(let me=0,We=C.length;me<We;me++){let Ve=C[me];ne=Q[me];for(let Ze=0,tt=Ve.length;Ze<tt;Ze++){let N=B(Ve[Ze],ne[Ze],he);_?fe(N.x,N.y+M[d-1].y,M[d-1].x+ce):fe(N.x,N.y,f+ce)}}}Le(),V();function Le(){let ie=s.length/3;if(h){let ae=0,ce=$*ae;for(let he=0;he<mt;he++){let me=Ce[he];Ye(me[2]+ce,me[1]+ce,me[0]+ce)}ae=d+g*2,ce=$*ae;for(let he=0;he<mt;he++){let me=Ce[he];Ye(me[0]+ce,me[1]+ce,me[2]+ce)}}else{for(let ae=0;ae<mt;ae++){let ce=Ce[ae];Ye(ce[2],ce[1],ce[0])}for(let ae=0;ae<mt;ae++){let ce=Ce[ae];Ye(ce[0]+$*d,ce[1]+$*d,ce[2]+$*d)}}i.addGroup(ie,s.length/3-ie,0)}function V(){let ie=s.length/3,ae=0;J(F,ae),ae+=F.length;for(let ce=0,he=C.length;ce<he;ce++){let me=C[ce];J(me,ae),ae+=me.length}i.addGroup(ie,s.length/3-ie,1)}function J(ie,ae){let ce=ie.length;for(;--ce>=0;){let he=ce,me=ce-1;me<0&&(me=ie.length-1);for(let We=0,Ve=d+g*2;We<Ve;We++){let Ze=$*We,tt=$*(We+1),N=ae+he+Ze,Mt=ae+me+Ze,ut=ae+me+tt,R=ae+he+tt;Ae(N,Mt,ut,R)}}}function fe(ie,ae,ce){l.push(ie),l.push(ae),l.push(ce)}function Ye(ie,ae,ce){Ke(ie),Ke(ae),Ke(ce);let he=s.length/3,me=v.generateTopUV(i,s,he-3,he-2,he-1);Rt(me[0]),Rt(me[1]),Rt(me[2])}function Ae(ie,ae,ce,he){Ke(ie),Ke(ae),Ke(he),Ke(ae),Ke(ce),Ke(he);let me=s.length/3,We=v.generateSideWallUV(i,s,me-6,me-3,me-2,me-1);Rt(We[0]),Rt(We[1]),Rt(We[3]),Rt(We[1]),Rt(We[2]),Rt(We[3])}function Ke(ie){s.push(l[ie*3+0]),s.push(l[ie*3+1]),s.push(l[ie*3+2])}function Rt(ie){r.push(ie.x),r.push(ie.y)}}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){let e=super.toJSON(),t=this.parameters.shapes,i=this.parameters.options;return av(t,i,e)}static fromJSON(e,t){let i=[];for(let r=0,o=e.shapes.length;r<o;r++){let a=t[e.shapes[r]];i.push(a)}let s=e.options.extrudePath;return s!==void 0&&(e.options.extrudePath=new Bd[s.type]().fromJSON(s)),new n(i,e.options)}},ov={generateTopUV:function(n,e,t,i,s){let r=e[t*3],o=e[t*3+1],a=e[i*3],l=e[i*3+1],c=e[s*3],d=e[s*3+1];return[new j(r,o),new j(a,l),new j(c,d)]},generateSideWallUV:function(n,e,t,i,s,r){let o=e[t*3],a=e[t*3+1],l=e[t*3+2],c=e[i*3],d=e[i*3+1],f=e[i*3+2],h=e[s*3],u=e[s*3+1],m=e[s*3+2],y=e[r*3],g=e[r*3+1],p=e[r*3+2];return Math.abs(a-d)<Math.abs(o-c)?[new j(o,1-l),new j(c,1-f),new j(h,1-m),new j(y,1-p)]:[new j(a,1-l),new j(d,1-f),new j(u,1-m),new j(g,1-p)]}};function av(n,e,t){if(t.shapes=[],Array.isArray(n))for(let i=0,s=n.length;i<s;i++){let r=n[i];t.shapes.push(r.uuid)}else t.shapes.push(n.uuid);return t.options=Object.assign({},e),e.extrudePath!==void 0&&(t.options.extrudePath=e.extrudePath.toJSON()),t}var il=class n extends Za{constructor(e=1,t=0){let i=(1+Math.sqrt(5))/2,s=[-1,i,0,1,i,0,-1,-i,0,1,-i,0,0,-1,i,0,1,i,0,-1,-i,0,1,-i,i,0,-1,i,0,1,-i,0,-1,-i,0,1],r=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];super(s,r,e,t),this.type="IcosahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new n(e.radius,e.detail)}},sl=class n extends Ft{constructor(e=[new j(0,-.5),new j(.5,0),new j(0,.5)],t=12,i=0,s=Math.PI*2){super(),this.type="LatheGeometry",this.parameters={points:e,segments:t,phiStart:i,phiLength:s},t=Math.floor(t),s=it(s,0,Math.PI*2);let r=[],o=[],a=[],l=[],c=[],d=1/t,f=new I,h=new j,u=new I,m=new I,y=new I,g=0,p=0;for(let v=0;v<=e.length-1;v++)switch(v){case 0:g=e[v+1].x-e[v].x,p=e[v+1].y-e[v].y,u.x=p*1,u.y=-g,u.z=p*0,y.copy(u),u.normalize(),l.push(u.x,u.y,u.z);break;case e.length-1:l.push(y.x,y.y,y.z);break;default:g=e[v+1].x-e[v].x,p=e[v+1].y-e[v].y,u.x=p*1,u.y=-g,u.z=p*0,m.copy(u),u.x+=y.x,u.y+=y.y,u.z+=y.z,u.normalize(),l.push(u.x,u.y,u.z),y.copy(m)}for(let v=0;v<=t;v++){let M=i+v*d*s,_=Math.sin(M),S=Math.cos(M);for(let E=0;E<=e.length-1;E++){f.x=e[E].x*_,f.y=e[E].y,f.z=e[E].x*S,o.push(f.x,f.y,f.z),h.x=v/t,h.y=E/(e.length-1),a.push(h.x,h.y);let P=l[3*E+0]*_,x=l[3*E+1],A=l[3*E+0]*S;c.push(P,x,A)}}for(let v=0;v<t;v++)for(let M=0;M<e.length-1;M++){let _=M+v*e.length,S=_,E=_+e.length,P=_+e.length+1,x=_+1;r.push(S,E,x),r.push(P,x,E)}this.setIndex(r),this.setAttribute("position",new ht(o,3)),this.setAttribute("uv",new ht(a,2)),this.setAttribute("normal",new ht(c,3))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.points,e.segments,e.phiStart,e.phiLength)}},kr=class n extends Za{constructor(e=1,t=0){let i=[1,0,0,-1,0,0,0,1,0,0,-1,0,0,0,1,0,0,-1],s=[0,2,4,0,4,3,0,3,5,0,5,2,1,2,5,1,5,3,1,3,4,1,4,2];super(i,s,e,t),this.type="OctahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new n(e.radius,e.detail)}},Zn=class n extends Ft{constructor(e=1,t=1,i=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:i,heightSegments:s};let r=e/2,o=t/2,a=Math.floor(i),l=Math.floor(s),c=a+1,d=l+1,f=e/a,h=t/l,u=[],m=[],y=[],g=[];for(let p=0;p<d;p++){let v=p*h-o;for(let M=0;M<c;M++){let _=M*f-r;m.push(_,-v,0),y.push(0,0,1),g.push(M/a),g.push(1-p/l)}}for(let p=0;p<l;p++)for(let v=0;v<a;v++){let M=v+c*p,_=v+c*(p+1),S=v+1+c*(p+1),E=v+1+c*p;u.push(M,_,E),u.push(_,S,E)}this.setIndex(u),this.setAttribute("position",new ht(m,3)),this.setAttribute("normal",new ht(y,3)),this.setAttribute("uv",new ht(g,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.width,e.height,e.widthSegments,e.heightSegments)}},Lr=class n extends Ft{constructor(e=.5,t=1,i=32,s=1,r=0,o=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:e,outerRadius:t,thetaSegments:i,phiSegments:s,thetaStart:r,thetaLength:o},i=Math.max(3,i),s=Math.max(1,s);let a=[],l=[],c=[],d=[],f=e,h=(t-e)/s,u=new I,m=new j;for(let y=0;y<=s;y++){for(let g=0;g<=i;g++){let p=r+g/i*o;u.x=f*Math.cos(p),u.y=f*Math.sin(p),l.push(u.x,u.y,u.z),c.push(0,0,1),m.x=(u.x/t+1)/2,m.y=(u.y/t+1)/2,d.push(m.x,m.y)}f+=h}for(let y=0;y<s;y++){let g=y*(i+1);for(let p=0;p<i;p++){let v=p+g,M=v,_=v+i+1,S=v+i+2,E=v+1;a.push(M,_,E),a.push(_,S,E)}}this.setIndex(a),this.setAttribute("position",new ht(l,3)),this.setAttribute("normal",new ht(c,3)),this.setAttribute("uv",new ht(d,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.innerRadius,e.outerRadius,e.thetaSegments,e.phiSegments,e.thetaStart,e.thetaLength)}};var Tt=class n extends Ft{constructor(e=1,t=32,i=16,s=0,r=Math.PI*2,o=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:i,phiStart:s,phiLength:r,thetaStart:o,thetaLength:a},t=Math.max(3,Math.floor(t)),i=Math.max(2,Math.floor(i));let l=Math.min(o+a,Math.PI),c=0,d=[],f=new I,h=new I,u=[],m=[],y=[],g=[];for(let p=0;p<=i;p++){let v=[],M=p/i,_=o+M*a,S=e*Math.cos(_),E=Math.sqrt(e*e-S*S),P=0;p===0&&o===0?P=.5/t:p===i&&l===Math.PI&&(P=-.5/t);for(let x=0;x<=t;x++){let A=x/t,T=s+A*r;f.x=-E*Math.cos(T),f.y=S,f.z=E*Math.sin(T),m.push(f.x,f.y,f.z),h.copy(f).normalize(),y.push(h.x,h.y,h.z),g.push(A+P,1-M),v.push(c++)}d.push(v)}for(let p=0;p<i;p++)for(let v=0;v<t;v++){let M=d[p][v+1],_=d[p][v],S=d[p+1][v],E=d[p+1][v+1];(p!==0||o>0)&&u.push(M,_,E),(p!==i-1||l<Math.PI)&&u.push(_,S,E)}this.setIndex(u),this.setAttribute("position",new ht(m,3)),this.setAttribute("normal",new ht(y,3)),this.setAttribute("uv",new ht(g,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}};var fn=class n extends Ft{constructor(e=1,t=.4,i=12,s=48,r=Math.PI*2,o=0,a=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:e,tube:t,radialSegments:i,tubularSegments:s,arc:r,thetaStart:o,thetaLength:a},i=Math.floor(i),s=Math.floor(s);let l=[],c=[],d=[],f=[],h=new I,u=new I,m=new I;for(let y=0;y<=i;y++){let g=o+y/i*a;for(let p=0;p<=s;p++){let v=p/s*r;u.x=(e+t*Math.cos(g))*Math.cos(v),u.y=(e+t*Math.cos(g))*Math.sin(v),u.z=t*Math.sin(g),c.push(u.x,u.y,u.z),h.x=e*Math.cos(v),h.y=e*Math.sin(v),m.subVectors(u,h).normalize(),d.push(m.x,m.y,m.z),f.push(p/s),f.push(y/i)}}for(let y=1;y<=i;y++)for(let g=1;g<=s;g++){let p=(s+1)*y+g-1,v=(s+1)*(y-1)+g-1,M=(s+1)*(y-1)+g,_=(s+1)*y+g;l.push(p,v,_),l.push(v,M,_)}this.setIndex(l),this.setAttribute("position",new ht(c,3)),this.setAttribute("normal",new ht(d,3)),this.setAttribute("uv",new ht(f,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.radius,e.tube,e.radialSegments,e.tubularSegments,e.arc,e.thetaStart,e.thetaLength)}};var rl=class extends xi{constructor(e){super(),this.isShadowMaterial=!0,this.type="ShadowMaterial",this.color=new Ie(0),this.transparent=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.fog=e.fog,this}};function Br(n){let e={};for(let t in n){e[t]={};for(let i in n[t]){let s=n[t][i];if(wm(s))s.isRenderTargetTexture?(Xe("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][i]=null):e[t][i]=s.clone();else if(Array.isArray(s))if(wm(s[0])){let r=[];for(let o=0,a=s.length;o<a;o++)r[o]=s[o].clone();e[t][i]=r}else e[t][i]=s.slice();else e[t][i]=s}}return e}function Hn(n){let e={};for(let t=0;t<n.length;t++){let i=Br(n[t]);for(let s in i)e[s]=i[s]}return e}function wm(n){return n&&(n.isColor||n.isMatrix3||n.isMatrix4||n.isVector2||n.isVector3||n.isVector4||n.isTexture||n.isQuaternion)}function lv(n){let e=[];for(let t=0;t<n.length;t++)e.push(n[t].clone());return e}function uf(n){let e=n.getRenderTarget();return e===null?n.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:ct.workingColorSpace}var Is={clone:Br,merge:Hn},cv=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,hv=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,rn=class extends xi{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=cv,this.fragmentShader=hv,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Br(e.uniforms),this.uniformsGroups=lv(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this.defaultAttributeValues=Object.assign({},e.defaultAttributeValues),this.index0AttributeName=e.index0AttributeName,this.uniformsNeedUpdate=e.uniformsNeedUpdate,this}toJSON(e){let t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(let s in this.uniforms){let o=this.uniforms[s].value;o&&o.isTexture?t.uniforms[s]={type:"t",value:o.toJSON(e).uuid}:o&&o.isColor?t.uniforms[s]={type:"c",value:o.getHex()}:o&&o.isVector2?t.uniforms[s]={type:"v2",value:o.toArray()}:o&&o.isVector3?t.uniforms[s]={type:"v3",value:o.toArray()}:o&&o.isVector4?t.uniforms[s]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?t.uniforms[s]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?t.uniforms[s]={type:"m4",value:o.toArray()}:t.uniforms[s]={value:o}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;let i={};for(let s in this.extensions)this.extensions[s]===!0&&(i[s]=!0);return Object.keys(i).length>0&&(t.extensions=i),t}fromJSON(e,t){if(super.fromJSON(e,t),e.uniforms!==void 0)for(let i in e.uniforms){let s=e.uniforms[i];switch(this.uniforms[i]={},s.type){case"t":this.uniforms[i].value=t[s.value]||null;break;case"c":this.uniforms[i].value=new Ie().setHex(s.value);break;case"v2":this.uniforms[i].value=new j().fromArray(s.value);break;case"v3":this.uniforms[i].value=new I().fromArray(s.value);break;case"v4":this.uniforms[i].value=new Xt().fromArray(s.value);break;case"m3":this.uniforms[i].value=new et().fromArray(s.value);break;case"m4":this.uniforms[i].value=new Et().fromArray(s.value);break;default:this.uniforms[i].value=s.value}}if(e.defines!==void 0&&(this.defines=e.defines),e.vertexShader!==void 0&&(this.vertexShader=e.vertexShader),e.fragmentShader!==void 0&&(this.fragmentShader=e.fragmentShader),e.glslVersion!==void 0&&(this.glslVersion=e.glslVersion),e.extensions!==void 0)for(let i in e.extensions)this.extensions[i]=e.extensions[i];return e.lights!==void 0&&(this.lights=e.lights),e.clipping!==void 0&&(this.clipping=e.clipping),this}},No=class extends rn{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}},ke=class extends xi{constructor(e){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new Ie(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Ie(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Al,this.normalScale=new j(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new as,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}},Cn=class extends ke{constructor(e){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new j(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return it(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(t){this.ior=(1+.4*t)/(1-.4*t)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new Ie(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new Ie(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new Ie(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._dispersion=0,this._iridescence=0,this._retroreflectivity=0,this._sheen=0,this._transmission=0,this.setValues(e)}get anisotropy(){return this._anisotropy}set anisotropy(e){this._anisotropy>0!=e>0&&this.version++,this._anisotropy=e}get clearcoat(){return this._clearcoat}set clearcoat(e){this._clearcoat>0!=e>0&&this.version++,this._clearcoat=e}get iridescence(){return this._iridescence}set iridescence(e){this._iridescence>0!=e>0&&this.version++,this._iridescence=e}get dispersion(){return this._dispersion}set dispersion(e){this._dispersion>0!=e>0&&this.version++,this._dispersion=e}get retroreflectivity(){return this._retroreflectivity}set retroreflectivity(e){this._retroreflectivity>0!=e>0&&this.version++,this._retroreflectivity=e}get sheen(){return this._sheen}set sheen(e){this._sheen>0!=e>0&&this.version++,this._sheen=e}get transmission(){return this._transmission}set transmission(e){this._transmission>0!=e>0&&this.version++,this._transmission=e}copy(e){return super.copy(e),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=e.anisotropy,this.anisotropyRotation=e.anisotropyRotation,this.anisotropyMap=e.anisotropyMap,this.clearcoat=e.clearcoat,this.clearcoatMap=e.clearcoatMap,this.clearcoatRoughness=e.clearcoatRoughness,this.clearcoatRoughnessMap=e.clearcoatRoughnessMap,this.clearcoatNormalMap=e.clearcoatNormalMap,this.clearcoatNormalScale.copy(e.clearcoatNormalScale),this.dispersion=e.dispersion,this.ior=e.ior,this.iridescence=e.iridescence,this.iridescenceMap=e.iridescenceMap,this.iridescenceIOR=e.iridescenceIOR,this.iridescenceThicknessRange=[...e.iridescenceThicknessRange],this.iridescenceThicknessMap=e.iridescenceThicknessMap,this.retroreflectivity=e.retroreflectivity,this.sheen=e.sheen,this.sheenColor.copy(e.sheenColor),this.sheenColorMap=e.sheenColorMap,this.sheenRoughness=e.sheenRoughness,this.sheenRoughnessMap=e.sheenRoughnessMap,this.transmission=e.transmission,this.transmissionMap=e.transmissionMap,this.thickness=e.thickness,this.thicknessMap=e.thicknessMap,this.attenuationDistance=e.attenuationDistance,this.attenuationColor.copy(e.attenuationColor),this.specularIntensity=e.specularIntensity,this.specularIntensityMap=e.specularIntensityMap,this.specularColor.copy(e.specularColor),this.specularColorMap=e.specularColorMap,this}};var ol=class extends xi{constructor(e){super(),this.isMeshLambertMaterial=!0,this.type="MeshLambertMaterial",this.color=new Ie(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Ie(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Al,this.normalScale=new j(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new as,this.combine=wh,this.reflectivity=1,this.envMapIntensity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.envMapIntensity=e.envMapIntensity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}},ch=class extends xi{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=n0,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}},hh=class extends xi{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}};function bo(n,e){return!n||n.constructor===e?n:typeof e.BYTES_PER_ELEMENT=="number"?new e(n):Array.prototype.slice.call(n)}function kd(n){return n!==void 0&&n.inTangents!==void 0&&n.outTangents!==void 0}var Ys=class{constructor(e,t,i,s){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=s!==void 0?s:new t.constructor(i),this.sampleValues=t,this.valueSize=i,this.settings=null,this.DefaultSettings_={}}evaluate(e){let t=this.parameterPositions,i=this._cachedIndex,s=t[i],r=t[i-1];n:{e:{let o;t:{i:if(!(e<s)){for(let a=i+2;;){if(s===void 0){if(e<r)break i;return i=t.length,this._cachedIndex=i,this.copySampleValue_(i-1)}if(i===a)break;if(r=s,s=t[++i],e<s)break e}o=t.length;break t}if(!(e>=r)){let a=t[1];e<a&&(i=2,r=a);for(let l=i-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(i===l)break;if(s=r,r=t[--i-1],e>=r)break e}o=i,i=0;break t}break n}for(;i<o;){let a=i+o>>>1;e<t[a]?o=a:i=a+1}if(s=t[i],r=t[i-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(s===void 0)return i=t.length,this._cachedIndex=i,this.copySampleValue_(i-1)}this._cachedIndex=i,this.intervalChanged_(i,r,s)}return this.interpolate_(i,r,e,s)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){let t=this.resultBuffer,i=this.sampleValues,s=this.valueSize,r=e*s;for(let o=0;o!==s;++o)t[o]=i[r+o];return t}interpolate_(){throw new Error("THREE.Interpolant: Call to abstract method.")}intervalChanged_(){}},uh=class extends Ys{constructor(e,t,i,s){super(e,t,i,s),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:Nd,endingEnd:Nd}}intervalChanged_(e,t,i){let s=this.parameterPositions,r=e-2,o=e+1,a=s[r],l=s[o];if(a===void 0)switch(this.getSettings_().endingStart){case Ud:r=e,a=2*t-i;break;case Od:r=s.length-2,a=t+s[r]-s[r+1];break;default:r=e,a=i}if(l===void 0)switch(this.getSettings_().endingEnd){case Ud:o=e,l=2*i-t;break;case Od:o=1,l=i+s[1]-s[0];break;default:o=e-1,l=t}let c=(i-t)*.5,d=this.valueSize;this._weightPrev=c/(t-a),this._weightNext=c/(l-i),this._offsetPrev=r*d,this._offsetNext=o*d}interpolate_(e,t,i,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=e*a,c=l-a,d=this._offsetPrev,f=this._offsetNext,h=this._weightPrev,u=this._weightNext,m=(i-t)/(s-t),y=m*m,g=y*m,p=-h*g+2*h*y-h*m,v=(1+h)*g+(-1.5-2*h)*y+(-.5+h)*m+1,M=(-1-u)*g+(1.5+u)*y+.5*m,_=u*g-u*y;for(let S=0;S!==a;++S)r[S]=p*o[d+S]+v*o[c+S]+M*o[l+S]+_*o[f+S];return r}},dh=class extends Ys{constructor(e,t,i,s){super(e,t,i,s)}interpolate_(e,t,i,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=e*a,c=l-a,d=(i-t)/(s-t),f=1-d;for(let h=0;h!==a;++h)r[h]=o[c+h]*f+o[l+h]*d;return r}},fh=class extends Ys{constructor(e,t,i,s){super(e,t,i,s)}interpolate_(e){return this.copySampleValue_(e-1)}},ph=class extends Ys{interpolate_(e,t,i,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=e*a,c=l-a,d=this.inTangents,f=this.outTangents;if(!d||!f){let m=(i-t)/(s-t),y=1-m;for(let g=0;g!==a;++g)r[g]=o[c+g]*y+o[l+g]*m;return r}let h=a*2,u=e-1;for(let m=0;m!==a;++m){let y=o[c+m],g=o[l+m],p=u*h+m*2,v=f[p],M=f[p+1],_=e*h+m*2,S=d[_],E=d[_+1],P=dv(i,t,v,S,s);r[m]=b0(P,y,M,E,g)}return r}};function b0(n,e,t,i,s){let r=1-n;return r*r*r*e+3*r*r*n*t+3*r*n*n*i+n*n*n*s}function uv(n,e,t,i,s){let r=1-n;return 3*r*r*(t-e)+6*r*n*(i-t)+3*n*n*(s-i)}function dv(n,e,t,i,s){let r=(n-e)/(s-e);for(let o=0;o<8;o++){let a=b0(r,e,t,i,s)-n;if(Math.abs(a)<1e-10)break;let l=uv(r,e,t,i,s);if(Math.abs(l)<1e-10)break;r=Math.max(0,Math.min(1,r-a/l))}return r}var ci=class{constructor(e,t,i,s){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(t===void 0||t.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=bo(t,this.TimeBufferType),this.values=bo(i,this.ValueBufferType),this.setInterpolation(s||this.DefaultInterpolation)}static toJSON(e){let t=e.constructor,i;if(t.toJSON!==this.toJSON)i=t.toJSON(e);else{i={name:e.name,times:bo(e.times,Array),values:bo(e.values,Array)};let s=e.getInterpolation();s!==e.DefaultInterpolation&&(i.interpolation=s),kd(e.settings)&&(i.settings={inTangents:bo(e.settings.inTangents,Array),outTangents:bo(e.settings.outTangents,Array)})}return i.type=e.ValueTypeName,i}InterpolantFactoryMethodDiscrete(e){return new fh(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new dh(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new uh(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodBezier(e){let t=new ph(this.times,this.values,this.getValueSize(),e);return this.settings&&(t.inTangents=this.settings.inTangents,t.outTangents=this.settings.outTangents),t}setInterpolation(e){let t;switch(e){case Na:t=this.InterpolantFactoryMethodDiscrete;break;case Jc:t=this.InterpolantFactoryMethodLinear;break;case zc:t=this.InterpolantFactoryMethodSmooth;break;case Dd:t=this.InterpolantFactoryMethodBezier;break}if(t===void 0){let i="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(i);return Xe("KeyframeTrack:",i),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return Na;case this.InterpolantFactoryMethodLinear:return Jc;case this.InterpolantFactoryMethodSmooth:return zc;case this.InterpolantFactoryMethodBezier:return Dd}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){let t=this.times;for(let i=0,s=t.length;i!==s;++i)t[i]+=e}return this}scale(e){if(e!==1){let t=this.times;for(let i=0,s=t.length;i!==s;++i)t[i]*=e;kd(this.settings)&&(Em(this.settings.inTangents,e),Em(this.settings.outTangents,e))}return this}trim(e,t){let i=this.times,s=i.length,r=0,o=s-1;for(;r!==s&&i[r]<e;)++r;for(;o!==-1&&i[o]>t;)--o;if(++o,r!==0||o!==s){r>=o&&(o=Math.max(o,1),r=o-1);let a=this.getValueSize();this.times=i.slice(r,o),this.values=this.values.slice(r*a,o*a)}return this}validate(){let e=!0,t=this.getValueSize();t-Math.floor(t)!==0&&(qe("KeyframeTrack: Invalid value size in track.",this),e=!1);let i=this.times,s=this.values,r=i.length;r===0&&(qe("KeyframeTrack: Track is empty.",this),e=!1);let o=null;for(let a=0;a!==r;a++){let l=i[a];if(typeof l=="number"&&isNaN(l)){qe("KeyframeTrack: Time is not a valid number.",this,a,l),e=!1;break}if(o!==null&&o>l){qe("KeyframeTrack: Out of order keys.",this,a,l,o),e=!1;break}o=l}if(s!==void 0&&e_(s))for(let a=0,l=s.length;a!==l;++a){let c=s[a];if(isNaN(c)){qe("KeyframeTrack: Value is not a valid number.",this,a,c),e=!1;break}}return e}optimize(){let e=this.times.slice(),t=this.values.slice(),i=this.getValueSize(),s=this.getInterpolation()===zc,r=e.length-1,o=1;for(let a=1;a<r;++a){let l=!1,c=e[a],d=e[a+1];if(c!==d&&(a!==1||c!==e[0]))if(s)l=!0;else{let f=a*i,h=f-i,u=f+i;for(let m=0;m!==i;++m){let y=t[f+m];if(y!==t[h+m]||y!==t[u+m]){l=!0;break}}}if(l){if(a!==o){e[o]=e[a];let f=a*i,h=o*i;for(let u=0;u!==i;++u)t[h+u]=t[f+u]}++o}}if(r>0){e[o]=e[r];for(let a=r*i,l=o*i,c=0;c!==i;++c)t[l+c]=t[a+c];++o}return o!==e.length?(this.times=e.slice(0,o),this.values=t.slice(0,o*i)):(this.times=e,this.values=t),this}clone(){let e=this.times.slice(),t=this.values.slice(),i=this.constructor,s=new i(this.name,e,t);return s.createInterpolant=this.createInterpolant,kd(this.settings)&&(s.settings={inTangents:this.settings.inTangents.slice(),outTangents:this.settings.outTangents.slice()}),s}};function Em(n,e){for(let t=0,i=n.length;t!==i;t+=2)n[t]*=e}ci.prototype.ValueTypeName="";ci.prototype.TimeBufferType=Float32Array;ci.prototype.ValueBufferType=Float32Array;ci.prototype.DefaultInterpolation=Jc;var Ks=class extends ci{constructor(e,t,i){super(e,t,i)}};Ks.prototype.ValueTypeName="bool";Ks.prototype.ValueBufferType=Array;Ks.prototype.DefaultInterpolation=Na;Ks.prototype.InterpolantFactoryMethodLinear=void 0;Ks.prototype.InterpolantFactoryMethodSmooth=void 0;var mh=class extends ci{constructor(e,t,i,s){super(e,t,i,s)}};mh.prototype.ValueTypeName="color";var gh=class extends ci{constructor(e,t,i,s){super(e,t,i,s)}};gh.prototype.ValueTypeName="number";var yh=class extends Ys{constructor(e,t,i,s){super(e,t,i,s)}interpolate_(e,t,i,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=(i-t)/(s-t),c=e*a;for(let d=c+a;c!==d;c+=4)ai.slerpFlat(r,0,o,c-a,o,c,l);return r}},al=class extends ci{constructor(e,t,i,s){super(e,t,i,s)}InterpolantFactoryMethodLinear(e){return new yh(this.times,this.values,this.getValueSize(),e)}};al.prototype.ValueTypeName="quaternion";al.prototype.InterpolantFactoryMethodSmooth=void 0;var Zs=class extends ci{constructor(e,t,i){super(e,t,i)}};Zs.prototype.ValueTypeName="string";Zs.prototype.ValueBufferType=Array;Zs.prototype.DefaultInterpolation=Na;Zs.prototype.InterpolantFactoryMethodLinear=void 0;Zs.prototype.InterpolantFactoryMethodSmooth=void 0;var _h=class extends ci{constructor(e,t,i,s){super(e,t,i,s)}};_h.prototype.ValueTypeName="vector";var vh=class{constructor(e,t,i){let s=this,r=!1,o=0,a=0,l,c=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=i,this._abortController=null,this.itemStart=function(d){a++,r===!1&&s.onStart!==void 0&&s.onStart(d,o,a),r=!0},this.itemEnd=function(d){o++,s.onProgress!==void 0&&s.onProgress(d,o,a),o===a&&(r=!1,s.onLoad!==void 0&&s.onLoad())},this.itemError=function(d){s.onError!==void 0&&s.onError(d)},this.resolveURL=function(d){return d=d.normalize("NFC"),l?l(d):d},this.setURLModifier=function(d){return l=d,this},this.addHandler=function(d,f){return c.push(d,f),this},this.removeHandler=function(d){let f=c.indexOf(d);return f!==-1&&c.splice(f,2),this},this.getHandler=function(d){for(let f=0,h=c.length;f<h;f+=2){let u=c[f],m=c[f+1];if(u.global&&(u.lastIndex=0),u.test(d))return m}return null},this.abort=function(){return this.abortController.abort(),this._abortController=null,this}}get abortController(){return this._abortController||(this._abortController=new AbortController),this._abortController}},M0=new vh,xh=class{constructor(e){this.manager=e!==void 0?e:M0,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}load(){}loadAsync(e,t){let i=this;return new Promise(function(s,r){i.load(e,s,t,r)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}abort(){return this}};xh.DEFAULT_MATERIAL_NAME="__DEFAULT";var Uo=class extends un{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new Ie(e),this.intensity=t}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){let t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,t}},ll=class extends Uo{constructor(e,t,i){super(e,i),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(un.DEFAULT_UP),this.updateMatrix(),this.groundColor=new Ie(t)}copy(e,t){return super.copy(e,t),this.groundColor.copy(e.groundColor),this}toJSON(e){let t=super.toJSON(e);return t.object.groundColor=this.groundColor.getHex(),t}},Ld=new Et,Tm=new I,Am=new I,cl=class{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new j(512,512),this.mapType=Jn,this.map=null,this.mapPass=null,this.matrix=new Et,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new ko,this._frameExtents=new j(1,1),this._viewportCount=1,this._viewports=[new Xt(0,0,1,1)]}getViewportCount(){return this._viewportCount}getCamera(){return this.camera}getFrustum(){return this._frustum}updateMatrices(e){let t=this.camera;Tm.setFromMatrixPosition(e.matrixWorld),t.position.copy(Tm),Am.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(Am),t.updateMatrixWorld(),this._updateMatrix(t,this.matrix,this._frustum)}_updateMatrix(e,t,i,s){Ld.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),i.setFromProjectionMatrix(Ld,e.coordinateSystem,e.reversedDepth);let r=this._frameExtents,o=s?s.z/r.x:1,a=s?s.w/r.y:1,l=s?s.x/r.x:0,c=s?s.y/r.y:0;e.coordinateSystem===To||e.reversedDepth?t.set(.5*o,0,0,.5*o+l,0,.5*a,0,.5*a+c,0,0,1,0,0,0,0,1):t.set(.5*o,0,0,.5*o+l,0,.5*a,0,.5*a+c,0,0,.5,.5,0,0,0,1),t.multiply(Ld)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.autoUpdate=e.autoUpdate,this.needsUpdate=e.needsUpdate,this.normalBias=e.normalBias,this.blurSamples=e.blurSamples,this.mapSize.copy(e.mapSize),this.biasNode=e.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){let e={};return e.intensity=this.intensity,e.bias=this.bias,e.normalBias=this.normalBias,e.radius=this.radius,e.blurSamples=this.blurSamples,e.mapSize=this.mapSize.toArray(),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}},Bc=new I,Hc=new ai,is=new I,hl=class extends un{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Et,this.projectionMatrix=new Et,this.projectionMatrixInverse=new Et,this.coordinateSystem=zi,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorld.decompose(Bc,Hc,is),is.x===1&&is.y===1&&is.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Bc,Hc,is.set(1,1,1)).invert()}updateWorldMatrix(e,t,i=!1){super.updateWorldMatrix(e,t,i),this.matrixWorld.decompose(Bc,Hc,is),is.x===1&&is.y===1&&is.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Bc,Hc,is.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}},Ws=new I,Rm=new j,Cm=new j,An=class extends hl{constructor(e=50,t=1,i=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=s,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){let t=.5*this.getFilmHeight()/e;this.fov=Ro*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){let e=Math.tan(Ia*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Ro*2*Math.atan(Math.tan(Ia*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,i){Ws.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(Ws.x,Ws.y).multiplyScalar(-e/Ws.z),Ws.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(Ws.x,Ws.y).multiplyScalar(-e/Ws.z)}getViewSize(e,t){return this.getViewBounds(e,Rm,Cm),t.subVectors(Cm,Rm)}setViewOffset(e,t,i,s,r,o){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=this.near,t=e*Math.tan(Ia*.5*this.fov)/this.zoom,i=2*t,s=this.aspect*i,r=-.5*s,o=this.view;if(this.view!==null&&this.view.enabled){let l=o.fullWidth,c=o.fullHeight;r+=o.offsetX*s/l,t-=o.offsetY*i/c,s*=o.width/l,i*=o.height/c}let a=this.filmOffset;a!==0&&(r+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,t,t-i,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}};var Vd=class extends cl{constructor(){super(new An(90,1,.5,500)),this.isPointLightShadow=!0}},hs=class extends Uo{constructor(e,t,i=0,s=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=i,this.decay=s,this.shadow=new Vd}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){super.dispose(),this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}toJSON(e){let t=super.toJSON(e);return t.object.distance=this.distance,t.object.decay=this.decay,t.object.shadow=this.shadow.toJSON(),t}},Js=class extends hl{constructor(e=-1,t=1,i=1,s=-1,r=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=i,this.bottom=s,this.near=r,this.far=o,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,i,s,r,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,s=(this.top+this.bottom)/2,r=i-e,o=i+e,a=s+t,l=s-t;if(this.view!==null&&this.view.enabled){let c=(this.right-this.left)/this.view.fullWidth/this.zoom,d=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,o=r+c*this.view.width,a-=d*this.view.offsetY,l=a-d*this.view.height}this.projectionMatrix.makeOrthographic(r,o,a,l,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}},Wd=class extends cl{constructor(){super(new Js(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},Oo=class extends Uo{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(un.DEFAULT_UP),this.updateMatrix(),this.target=new un,this.shadow=new Wd}dispose(){super.dispose(),this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}toJSON(e){let t=super.toJSON(e);return t.object.shadow=this.shadow.toJSON(),t.object.target=this.target.uuid,t}};var Mo=-90,So=1,bh=class extends un{constructor(e,t,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;let s=new An(Mo,So,e,t);s.layers=this.layers,this.add(s);let r=new An(Mo,So,e,t);r.layers=this.layers,this.add(r);let o=new An(Mo,So,e,t);o.layers=this.layers,this.add(o);let a=new An(Mo,So,e,t);a.layers=this.layers,this.add(a);let l=new An(Mo,So,e,t);l.layers=this.layers,this.add(l);let c=new An(Mo,So,e,t);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){let e=this.coordinateSystem,t=this.children.concat(),[i,s,r,o,a,l]=t;for(let c of t)this.remove(c);if(e===zi)i.up.set(0,1,0),i.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===To)i.up.set(0,-1,0),i.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(let c of t)this.add(c),c.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();let{renderTarget:i,activeMipmapLevel:s}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());let[r,o,a,l,c,d]=this.children,f=e.getRenderTarget(),h=e.getActiveCubeFace(),u=e.getActiveMipmapLevel(),m=e.xr.enabled;e.xr.enabled=!1;let y=i.texture.generateMipmaps;i.texture.generateMipmaps=!1;let g=!1;e.isWebGLRenderer===!0?g=e.state.buffers.depth.getReversed():g=e.reversedDepthBuffer,e.setRenderTarget(i,0,s),g&&e.autoClear===!1&&e.clearDepth(),e.render(t,r),e.setRenderTarget(i,1,s),g&&e.autoClear===!1&&e.clearDepth(),e.render(t,o),e.setRenderTarget(i,2,s),g&&e.autoClear===!1&&e.clearDepth(),e.render(t,a),e.setRenderTarget(i,3,s),g&&e.autoClear===!1&&e.clearDepth(),e.render(t,l),e.setRenderTarget(i,4,s),g&&e.autoClear===!1&&e.clearDepth(),e.render(t,c),i.texture.generateMipmaps=y,e.setRenderTarget(i,5,s),g&&e.autoClear===!1&&e.clearDepth(),e.render(t,d),e.setRenderTarget(f,h,u),e.xr.enabled=m,i.texture.needsPMREMUpdate=!0}},Mh=class extends An{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}},Dr=class{constructor(){this._previousTime=0,this._currentTime=0,this._startTime=performance.now(),this._delta=0,this._elapsed=0,this._timescale=1,this._document=null,this._pageVisibilityHandler=null}connect(e){this._document=e,e.hidden!==void 0&&(this._pageVisibilityHandler=fv.bind(this),e.addEventListener("visibilitychange",this._pageVisibilityHandler,!1))}disconnect(){this._pageVisibilityHandler!==null&&(this._document.removeEventListener("visibilitychange",this._pageVisibilityHandler),this._pageVisibilityHandler=null),this._document=null}getDelta(){return this._delta/1e3}getElapsed(){return this._elapsed/1e3}getTimescale(){return this._timescale}setTimescale(e){return this._timescale=e,this}reset(){return this._currentTime=performance.now()-this._startTime,this}dispose(){this.disconnect()}update(e){return this._pageVisibilityHandler!==null&&this._document.hidden===!0?this._delta=0:(this._previousTime=this._currentTime,this._currentTime=(e!==void 0?e:performance.now())-this._startTime,this._delta=(this._currentTime-this._previousTime)*this._timescale,this._elapsed+=this._delta),this}};function fv(){this._document.hidden===!1&&this.reset()}var df="\\[\\]\\.:\\/",pv=new RegExp("["+df+"]","g"),ff="[^"+df+"]",mv="[^"+df.replace("\\.","")+"]",gv=/((?:WC+[\/:])*)/.source.replace("WC",ff),yv=/(WCOD+)?/.source.replace("WCOD",mv),_v=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",ff),vv=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",ff),xv=new RegExp("^"+gv+yv+_v+vv+"$"),bv=["material","materials","bones","map"],$d=class{constructor(e,t,i){let s=i||Gt.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,s)}getValue(e,t){this.bind();let i=this._targetGroup.nCachedObjects_,s=this._bindings[i];s!==void 0&&s.getValue(e,t)}setValue(e,t){let i=this._bindings;for(let s=this._targetGroup.nCachedObjects_,r=i.length;s!==r;++s)i[s].setValue(e,t)}bind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,i=e.length;t!==i;++t)e[t].bind()}unbind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,i=e.length;t!==i;++t)e[t].unbind()}},Gt=class n{constructor(e,t,i){this.path=t,this.parsedPath=i||n.parseTrackName(t),this.node=n.findNode(e,this.parsedPath.nodeName),this.rootNode=e,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(e,t,i){return e&&e.isAnimationObjectGroup?new n.Composite(e,t,i):new n(e,t,i)}static sanitizeNodeName(e){return e.replace(/\s/g,"_").replace(pv,"")}static parseTrackName(e){let t=xv.exec(e);if(t===null)throw new Error("THREE.PropertyBinding: Cannot parse trackName: "+e);let i={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},s=i.nodeName&&i.nodeName.lastIndexOf(".");if(s!==void 0&&s!==-1){let r=i.nodeName.substring(s+1);bv.indexOf(r)!==-1&&(i.nodeName=i.nodeName.substring(0,s),i.objectName=r)}if(i.propertyName===null||i.propertyName.length===0)throw new Error("THREE.PropertyBinding: can not parse propertyName from trackName: "+e);return i}static findNode(e,t){if(t===void 0||t===""||t==="."||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){let i=e.skeleton.getBoneByName(t);if(i!==void 0)return i}if(e.children){let i=function(r){for(let o=0;o<r.length;o++){let a=r[o];if(a.name===t||a.uuid===t)return a;let l=i(a.children);if(l)return l}return null},s=i(e.children);if(s)return s}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){let i=this.resolvedProperty;for(let s=0,r=i.length;s!==r;++s)e[t++]=i[s]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){let i=this.resolvedProperty;for(let s=0,r=i.length;s!==r;++s)i[s]=e[t++]}_setValue_array_setNeedsUpdate(e,t){let i=this.resolvedProperty;for(let s=0,r=i.length;s!==r;++s)i[s]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){let i=this.resolvedProperty;for(let s=0,r=i.length;s!==r;++s)i[s]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let e=this.node,t=this.parsedPath,i=t.objectName,s=t.propertyName,r=t.propertyIndex;if(e||(e=n.findNode(this.rootNode,t.nodeName),this.node=e),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!e){Xe("PropertyBinding: No target node found for track: "+this.path+".");return}if(i){let c=t.objectIndex;switch(i){case"materials":if(!e.material){qe("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.materials){qe("PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}e=e.material.materials;break;case"bones":if(!e.skeleton){qe("PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}e=e.skeleton.bones;for(let d=0;d<e.length;d++)if(e[d].name===c){c=d;break}break;case"map":if("map"in e){e=e.map;break}if(!e.material){qe("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.map){qe("PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}e=e.material.map;break;default:if(e[i]===void 0){qe("PropertyBinding: Can not bind to objectName of node undefined.",this);return}e=e[i]}if(c!==void 0){if(e[c]===void 0){qe("PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,e);return}e=e[c]}}let o=e[s];if(o===void 0){let c=t.nodeName;qe("PropertyBinding: Trying to update property for track: "+c+"."+s+" but it wasn't found.",e);return}let a=this.Versioning.None;this.targetObject=e,e.isMaterial===!0?a=this.Versioning.NeedsUpdate:e.isObject3D===!0&&(a=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(r!==void 0){if(s==="morphTargetInfluences"){if(!e.geometry){qe("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!e.geometry.morphAttributes){qe("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}e.morphTargetDictionary[r]!==void 0&&(r=e.morphTargetDictionary[r])}l=this.BindingType.ArrayElement,this.resolvedProperty=o,this.propertyIndex=r}else o.fromArray!==void 0&&o.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=o):Array.isArray(o)?(l=this.BindingType.EntireArray,this.resolvedProperty=o):this.propertyName=s;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][a]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};Gt.Composite=$d;Gt.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};Gt.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};Gt.prototype.GetterByBindingType=[Gt.prototype._getValue_direct,Gt.prototype._getValue_array,Gt.prototype._getValue_arrayElement,Gt.prototype._getValue_toArray];Gt.prototype.SetterByBindingTypeAndVersioning=[[Gt.prototype._setValue_direct,Gt.prototype._setValue_direct_setNeedsUpdate,Gt.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[Gt.prototype._setValue_array,Gt.prototype._setValue_array_setNeedsUpdate,Gt.prototype._setValue_array_setMatrixWorldNeedsUpdate],[Gt.prototype._setValue_arrayElement,Gt.prototype._setValue_arrayElement_setNeedsUpdate,Gt.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[Gt.prototype._setValue_fromArray,Gt.prototype._setValue_fromArray_setNeedsUpdate,Gt.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var aT=new Float32Array(1);var Pm=new Et,ul=class{constructor(e,t,i=0,s=1/0){this.ray=new $s(e,t),this.near=i,this.far=s,this.camera=null,this.layers=new Po,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,t){this.ray.set(e,t)}setFromCamera(e,t){t.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(t).sub(this.ray.origin).normalize(),this.camera=t):t.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,t.projectionMatrix.elements[14]).unproject(t),this.ray.direction.set(0,0,-1).transformDirection(t.matrixWorld),this.camera=t):qe("Raycaster: Unsupported camera type: "+t.type)}setFromXRController(e){return Pm.identity().extractRotation(e.matrixWorld),this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(Pm),this}intersectObject(e,t=!0,i=[]){return qd(e,this,i,t),i.sort(Im),i}intersectObjects(e,t=!0,i=[]){for(let s=0,r=e.length;s<r;s++)qd(e[s],this,i,t);return i.sort(Im),i}};function Im(n,e){return n.distance-e.distance}function qd(n,e,t,i){let s=!0;if(n.layers.test(e.layers)&&n.raycast(e,t)===!1&&(s=!1),s===!0&&i===!0){let r=n.children;for(let o=0,a=r.length;o<a;o++)qd(r[o],e,t,!0)}}var Cs=class{constructor(e=1,t=0,i=0){this.radius=e,this.phi=t,this.theta=i}set(e,t,i){return this.radius=e,this.phi=t,this.theta=i,this}copy(e){return this.radius=e.radius,this.phi=e.phi,this.theta=e.theta,this}makeSafe(){return this.phi=it(this.phi,1e-6,Math.PI-1e-6),this}setFromVector3(e){return this.setFromCartesianCoords(e.x,e.y,e.z)}setFromCartesianCoords(e,t,i){return this.radius=Math.sqrt(e*e+t*t+i*i),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(e,i),this.phi=Math.acos(it(t/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}};var vf=class vf{constructor(e,t,i,s){this.elements=[1,0,0,1],e!==void 0&&this.set(e,t,i,s)}identity(){return this.set(1,0,0,1),this}fromArray(e,t=0){for(let i=0;i<4;i++)this.elements[i]=e[i+t];return this}set(e,t,i,s){let r=this.elements;return r[0]=e,r[2]=t,r[1]=i,r[3]=s,this}};vf.prototype.isMatrix2=!0;var Xd=vf;var dl=class extends Vi{constructor(e,t=null){super(),this.object=e,this.domElement=t,this.enabled=!0,this.state=-1,this.keys={},this.mouseButtons={LEFT:null,MIDDLE:null,RIGHT:null},this.touches={ONE:null,TWO:null}}connect(e){this.domElement!==null&&this.disconnect(),this.domElement=e}disconnect(){}dispose(){}update(){}};function pf(n,e,t,i){let s=Mv(i);switch(t){case rf:return n*e;case Ih:return n*e/s.components*s.byteLength;case kh:return n*e/s.components*s.byteLength;case sr:return n*e*2/s.components*s.byteLength;case Lh:return n*e*2/s.components*s.byteLength;case of:return n*e*3/s.components*s.byteLength;case wi:return n*e*4/s.components*s.byteLength;case Dh:return n*e*4/s.components*s.byteLength;case bl:case Ml:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*8;case Sl:case wl:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case Uh:case Fh:return Math.max(n,16)*Math.max(e,8)/4;case Nh:case Oh:return Math.max(n,8)*Math.max(e,8)/2;case Bh:case Hh:case Gh:case Vh:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*8;case zh:case El:case Wh:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case $h:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case qh:return Math.floor((n+4)/5)*Math.floor((e+3)/4)*16;case Xh:return Math.floor((n+4)/5)*Math.floor((e+4)/5)*16;case Yh:return Math.floor((n+5)/6)*Math.floor((e+4)/5)*16;case Kh:return Math.floor((n+5)/6)*Math.floor((e+5)/6)*16;case Zh:return Math.floor((n+7)/8)*Math.floor((e+4)/5)*16;case Jh:return Math.floor((n+7)/8)*Math.floor((e+5)/6)*16;case jh:return Math.floor((n+7)/8)*Math.floor((e+7)/8)*16;case Qh:return Math.floor((n+9)/10)*Math.floor((e+4)/5)*16;case eu:return Math.floor((n+9)/10)*Math.floor((e+5)/6)*16;case tu:return Math.floor((n+9)/10)*Math.floor((e+7)/8)*16;case nu:return Math.floor((n+9)/10)*Math.floor((e+9)/10)*16;case iu:return Math.floor((n+11)/12)*Math.floor((e+9)/10)*16;case su:return Math.floor((n+11)/12)*Math.floor((e+11)/12)*16;case ru:case ou:case au:return Math.ceil(n/4)*Math.ceil(e/4)*16;case lu:case cu:return Math.ceil(n/4)*Math.ceil(e/4)*8;case Tl:case hu:return Math.ceil(n/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function Mv(n){switch(n){case Jn:case ef:return{byteLength:1,components:1};case Ho:case tf:case In:return{byteLength:2,components:1};case Ch:case Ph:return{byteLength:2,components:4};case Xi:case Rh:case Si:return{byteLength:4,components:1};case nf:case sf:return{byteLength:4,components:3}}throw new Error(`THREE.TextureUtils: Unknown texture type ${n}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:"186"}}));typeof window<"u"&&(window.__THREE__?Xe("WARNING: Multiple instances of Three.js being imported."):window.__THREE__="186");function W0(){let n=null,e=!1,t=null,i=null;function s(r,o){i=n.requestAnimationFrame(s),t(r,o)}return{start:function(){e!==!0&&t!==null&&n!==null&&(i=n.requestAnimationFrame(s),e=!0)},stop:function(){n!==null&&n.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(r){t=r},setContext:function(r){n=r}}}function wv(n){let e=new WeakMap;function t(a,l){let c=a.array,d=a.usage,f=c.byteLength,h=n.createBuffer();n.bindBuffer(l,h),n.bufferData(l,c,d),a.onUploadCallback();let u;if(c instanceof Float32Array)u=n.FLOAT;else if(typeof Float16Array<"u"&&c instanceof Float16Array)u=n.HALF_FLOAT;else if(c instanceof Uint16Array)a.isFloat16BufferAttribute?u=n.HALF_FLOAT:u=n.UNSIGNED_SHORT;else if(c instanceof Int16Array)u=n.SHORT;else if(c instanceof Uint32Array)u=n.UNSIGNED_INT;else if(c instanceof Int32Array)u=n.INT;else if(c instanceof Int8Array)u=n.BYTE;else if(c instanceof Uint8Array)u=n.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)u=n.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:h,type:u,bytesPerElement:c.BYTES_PER_ELEMENT,version:a.version,size:f}}function i(a,l,c){let d=l.array,f=l.updateRanges;if(n.bindBuffer(c,a),f.length===0)n.bufferSubData(c,0,d);else{f.sort((u,m)=>u.start-m.start);let h=0;for(let u=1;u<f.length;u++){let m=f[h],y=f[u];y.start<=m.start+m.count+1?m.count=Math.max(m.count,y.start+y.count-m.start):(++h,f[h]=y)}f.length=h+1;for(let u=0,m=f.length;u<m;u++){let y=f[u];n.bufferSubData(c,y.start*d.BYTES_PER_ELEMENT,d,y.start,y.count)}l.clearUpdateRanges()}l.onUploadCallback()}function s(a){return a.isInterleavedBufferAttribute&&(a=a.data),e.get(a)}function r(a){a.isInterleavedBufferAttribute&&(a=a.data);let l=e.get(a);l&&(n.deleteBuffer(l.buffer),e.delete(a))}function o(a,l){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){let d=e.get(a);(!d||d.version<a.version)&&e.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}let c=e.get(a);if(c===void 0)e.set(a,t(a,l));else if(c.version<a.version){if(c.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(c.buffer,a,l),c.version=a.version}}return{get:s,remove:r,update:o}}var Ev=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Tv=`#ifdef USE_ALPHAHASH
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
#endif`,Av=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Rv=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Cv=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,Pv=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Iv=`#ifdef USE_AOMAP
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
#endif`,kv=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Lv=`#ifdef USE_BATCHING
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
	vec4 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 );
	}
#endif`,Dv=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,Nv=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Uv=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Ov=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,Fv=`#ifdef USE_IRIDESCENCE
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
#endif`,Bv=`#ifdef USE_BUMPMAP
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
#endif`,Hv=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,zv=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Gv=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Vv=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Wv=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,$v=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,qv=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,Xv=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec4( 1.0 );
#endif
#ifdef USE_COLOR_ALPHA
	vColor *= color;
#elif defined( USE_COLOR )
	vColor.rgb *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.rgb *= instanceColor.rgb;
#endif
#ifdef USE_BATCHING_COLOR
	vColor *= getBatchingColor( getIndirectIndex( gl_DrawID ) );
#endif`,Yv=`#define PI 3.141592653589793
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
#define inverseTransformDirection transformDirectionByInverseViewMatrix
vec3 transformNormalByInverseViewMatrix( in vec3 normal, in mat4 viewMatrix ) {
	return normalize( ( vec4( normal, 0.0 ) * viewMatrix ).xyz );
}
vec3 transformDirectionByInverseViewMatrix( in vec3 dir, in mat4 viewMatrix ) {
	return normalize( ( vec4( dir, 0.0 ) * viewMatrix ).xyz );
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
} // validated`,Kv=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,Zv=`vec3 transformedNormal = objectNormal;
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
#endif`,Jv=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,jv=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Qv=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,ex=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,tx="gl_FragColor = linearToOutputTexel( gl_FragColor );",nx=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,ix=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * reflectVec );
		#ifdef ENVMAP_BLENDING_MULTIPLY
			outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_MIX )
			outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_ADD )
			outgoingLight += envColor.xyz * specularStrength * reflectivity;
		#endif
	#endif
#endif`,sx=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,rx=`#ifdef USE_ENVMAP
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
#endif`,ox=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,ax=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = transformNormalByInverseViewMatrix( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,lx=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,cx=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,hx=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,ux=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,dx=`#ifdef USE_GRADIENTMAP
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
}`,fx=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,px=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,mx=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,gx=`uniform bool receiveShadow;
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
	vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
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
#if NUM_SUN_LIGHTS > 0
	struct SunLight {
		vec3 direction;
		vec3 color;
	};
	uniform SunLight sunLights[ NUM_SUN_LIGHTS ];
	void getSunLightInfo( const in SunLight sunLight, out IncidentLight light ) {
		light.color = sunLight.color;
		light.direction = sunLight.direction;
		light.visible = true;
	}
#endif
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
#endif
#include <lightprobes_pars_fragment>`,yx=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
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
			reflectVec = transformDirectionByInverseViewMatrix( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_RETROREFLECTION
		vec3 getIBLRetroRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 retroVec = normalize( mix( viewDir, normal, pow4( roughness ) ) );
				retroVec = transformDirectionByInverseViewMatrix( retroVec, viewMatrix );
				vec4 envMapColor = textureCubeUV( envMap, envMapRotation * retroVec, roughness );
				return envMapColor.rgb * envMapIntensity;
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
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
		#ifdef USE_RETROREFLECTION
			vec3 getIBLAnisotropyRetroRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
				#ifdef ENVMAP_TYPE_CUBE_UV
					vec3 bentNormal = cross( bitangent, viewDir );
					bentNormal = normalize( cross( bentNormal, bitangent ) );
					bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
					return getIBLRetroRadiance( viewDir, bentNormal, roughness );
				#else
					return vec3( 0.0 );
				#endif
			}
		#endif
	#endif
#endif`,_x=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,vx=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,xx=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,bx=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Mx=`PhysicalMaterial material;
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
#ifdef USE_RETROREFLECTION
	material.retroreflectivity = retroreflectivity;
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
#endif`,Sx=`uniform sampler2D dfgLUT;
struct PhysicalMaterial {
	vec3 diffuseColor;
	vec3 diffuseContribution;
	vec3 specularColor;
	vec3 specularColorBlended;
	float roughness;
	float metalness;
	float specularF90;
	float dispersion;
	vec2 dfg;
	vec3 multiScatteringCompensation;
	#ifdef USE_RETROREFLECTION
		float retroreflectivity;
	#endif
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
		vec3 iridescenceF0Dielectric;
		vec3 iridescenceF0Metallic;
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
		return 0.5 / max( gv + gl, EPSILON );
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
void computeMultiscatteringIridescence( const in vec2 fab, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec2 fab, const in vec3 specularColor, const in float specularF90, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
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
		vec3 fresnel = ( material.specularColorBlended * t2.x + ( material.specularF90 - material.specularColorBlended ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseContribution * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
		#ifdef USE_CLEARCOAT
			vec3 Ncc = geometryClearcoatNormal;
			vec2 uvClearcoat = LTC_Uv( Ncc, viewDir, material.clearcoatRoughness );
			vec4 t1Clearcoat = texture2D( ltc_1, uvClearcoat );
			vec4 t2Clearcoat = texture2D( ltc_2, uvClearcoat );
			mat3 mInvClearcoat = mat3(
				vec3( t1Clearcoat.x, 0, t1Clearcoat.y ),
				vec3(             0, 1,             0 ),
				vec3( t1Clearcoat.z, 0, t1Clearcoat.w )
			);
			vec3 fresnelClearcoat = material.clearcoatF0 * t2Clearcoat.x + ( material.clearcoatF90 - material.clearcoatF0 ) * t2Clearcoat.y;
			clearcoatSpecularDirect += lightColor * fresnelClearcoat * LTC_Evaluate( Ncc, viewDir, position, mInvClearcoat, rectCoords );
		#endif
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
	vec3 specularBRDF = BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	#ifdef USE_RETROREFLECTION
		vec3 retroViewDir = reflect( - geometryViewDir, geometryNormal );
		vec3 retroSpecularBRDF = BRDF_GGX( directLight.direction, retroViewDir, geometryNormal, material );
		specularBRDF = mix( specularBRDF, retroSpecularBRDF, saturate( material.retroreflectivity ) );
	#endif
	reflectedLight.directSpecular += irradiance * specularBRDF * material.multiScatteringCompensation;
	vec3 halfDir = normalize( directLight.direction + geometryViewDir );
	float dotVH = saturate( dot( geometryViewDir, halfDir ) );
	vec3 F = F_Schlick( material.specularColor, material.specularF90, dotVH );
	#ifdef USE_RETROREFLECTION
		vec3 retroHalfDir = normalize( directLight.direction + retroViewDir );
		float dotRetroVH = saturate( dot( retroViewDir, retroHalfDir ) );
		vec3 retroF = F_Schlick( material.specularColor, material.specularF90, dotRetroVH );
		F = mix( F, retroF, saturate( material.retroreflectivity ) );
	#endif
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseContribution ) * ( 1.0 - F );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( material.dfg, material.specularColor, material.specularF90, material.iridescence, material.iridescenceF0Dielectric, singleScattering, multiScattering );
	#else
		computeMultiscattering( material.dfg, material.specularColor, material.specularF90, singleScattering, multiScattering );
	#endif
	vec3 diffuse = irradiance * BRDF_Lambert( material.diffuseContribution ) * ( 1.0 - singleScattering - multiScattering );
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		sheenSpecularIndirect += irradiance * material.sheenColor * sheenAlbedo * RECIPROCAL_PI;
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
		computeMultiscatteringIridescence( material.dfg, material.specularColor, material.specularF90, material.iridescence, material.iridescenceF0Dielectric, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscatteringIridescence( material.dfg, material.diffuseColor, material.specularF90, material.iridescence, material.iridescenceF0Metallic, singleScatteringMetallic, multiScatteringMetallic );
	#else
		computeMultiscattering( material.dfg, material.specularColor, material.specularF90, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscattering( material.dfg, material.diffuseColor, material.specularF90, singleScatteringMetallic, multiScatteringMetallic );
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
}`,wx=`
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
		vec3 iridescenceFresnelDielectric = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		vec3 iridescenceFresnelMetallic = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.diffuseColor );
		material.iridescenceFresnel = mix( iridescenceFresnelDielectric, iridescenceFresnelMetallic, material.metalness );
		material.iridescenceF0Dielectric = Schlick_to_F0( iridescenceFresnelDielectric, 1.0, dotNVi );
		material.iridescenceF0Metallic = Schlick_to_F0( iridescenceFresnelMetallic, 1.0, dotNVi );
	}
#endif
#ifdef STANDARD
	float dotNVms = saturate( dot( geometryNormal, geometryViewDir ) );
	material.dfg = texture2D( dfgLUT, vec2( material.roughness, dotNVms ) ).rg;
	#if ( NUM_SUN_LIGHTS > 0 || NUM_DIR_LIGHTS > 0 || NUM_POINT_LIGHTS > 0 || NUM_SPOT_LIGHTS > 0 )
		float EssMs = material.dfg.x + material.dfg.y;
		material.multiScatteringCompensation = 1.0 + material.specularColorBlended * ( 1.0 / EssMs - 1.0 );
	#endif
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
#if ( NUM_SUN_LIGHTS > 0 ) && defined( RE_Direct )
	SunLight sunLight;
	#if defined( USE_SHADOWMAP ) && NUM_SUN_LIGHT_SHADOWS > 0
	SunLightShadow sunLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SUN_LIGHTS; i ++ ) {
		sunLight = sunLights[ i ];
		getSunLightInfo( sunLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SUN_LIGHT_SHADOWS )
		sunLightShadow = sunLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getSunShadow( sunShadowMap[ i ], sunLightShadow, UNROLLED_LOOP_INDEX ) : 1.0;
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
	#ifdef USE_LIGHT_PROBES_GRID
		vec3 probeWorldPos = ( ( vec4( geometryPosition, 1.0 ) - viewMatrix[ 3 ] ) * viewMatrix ).xyz;
		vec3 probeWorldNormal = transformNormalByInverseViewMatrix( geometryNormal, viewMatrix );
		irradiance += getLightProbeGridIrradiance( probeWorldPos, probeWorldNormal );
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,Ex=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( ENVMAP_TYPE_CUBE_UV )
		#if defined( STANDARD ) || defined( LAMBERT ) || defined( PHONG )
			iblIrradiance += getIBLIrradiance( geometryNormal );
		#endif
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		vec3 iblRadiance = getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		vec3 iblRadiance = getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_RETROREFLECTION
		#ifdef USE_ANISOTROPY
			vec3 retroIBLRadiance = getIBLAnisotropyRetroRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
		#else
			vec3 retroIBLRadiance = getIBLRetroRadiance( geometryViewDir, geometryNormal, material.roughness );
		#endif
		iblRadiance = mix( iblRadiance, retroIBLRadiance, saturate( material.retroreflectivity ) );
	#endif
	radiance += iblRadiance;
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,Tx=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Ax=`#ifdef USE_LIGHT_PROBES_GRID
uniform highp sampler3D probesSH;
uniform vec3 probesMin;
uniform vec3 probesMax;
uniform vec3 probesResolution;
vec3 getLightProbeGridIrradiance( vec3 worldPos, vec3 worldNormal ) {
	vec3 res = probesResolution;
	vec3 gridRange = probesMax - probesMin;
	vec3 resMinusOne = res - 1.0;
	vec3 probeSpacing = gridRange / resMinusOne;
	vec3 samplePos = worldPos + worldNormal * probeSpacing * 0.5;
	vec3 uvw = clamp( ( samplePos - probesMin ) / gridRange, 0.0, 1.0 );
	uvw = uvw * resMinusOne / res + 0.5 / res;
	float nz          = res.z;
	float paddedSlices = nz + 2.0;
	float atlasDepth  = 7.0 * paddedSlices;
	float uvZBase     = uvw.z * nz + 1.0;
	vec4 s0 = texture( probesSH, vec3( uvw.xy, ( uvZBase                       ) / atlasDepth ) );
	vec4 s1 = texture( probesSH, vec3( uvw.xy, ( uvZBase +       paddedSlices   ) / atlasDepth ) );
	vec4 s2 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 2.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s3 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 3.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s4 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 4.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s5 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 5.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s6 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 6.0 * paddedSlices   ) / atlasDepth ) );
	vec3 c0 = s0.xyz;
	vec3 c1 = vec3( s0.w, s1.xy );
	vec3 c2 = vec3( s1.zw, s2.x );
	vec3 c3 = s2.yzw;
	vec3 c4 = s3.xyz;
	vec3 c5 = vec3( s3.w, s4.xy );
	vec3 c6 = vec3( s4.zw, s5.x );
	vec3 c7 = s5.yzw;
	vec3 c8 = s6.xyz;
	float x = worldNormal.x, y = worldNormal.y, z = worldNormal.z;
	vec3 result = c0 * 0.886227;
	result += c1 * 2.0 * 0.511664 * y;
	result += c2 * 2.0 * 0.511664 * z;
	result += c3 * 2.0 * 0.511664 * x;
	result += c4 * 2.0 * 0.429043 * x * y;
	result += c5 * 2.0 * 0.429043 * y * z;
	result += c6 * ( 0.743125 * z * z - 0.247708 );
	result += c7 * 2.0 * 0.429043 * x * z;
	result += c8 * 0.429043 * ( x * x - y * y );
	return max( result, vec3( 0.0 ) );
}
#endif`,Rx=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Cx=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Px=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Ix=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,kx=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Lx=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Dx=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,Nx=`#if defined( USE_POINTS_UV )
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
#endif`,Ux=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Ox=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Fx=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,Bx=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Hx=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,zx=`#ifdef USE_MORPHTARGETS
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
#endif`,Gx=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Vx=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
	#ifdef DOUBLE_SIDED
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
	#ifdef DOUBLE_SIDED
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,Wx=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
	#if defined( USE_PACKED_NORMALMAP )
		mapN = vec3( mapN.xy, sqrt( saturate( 1.0 - dot( mapN.xy, mapN.xy ) ) ) );
	#endif
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,$x=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,qx=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Xx=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
		#ifdef FLIP_SIDED
			vBitangent = - vBitangent;
		#endif
	#endif
#endif`,Yx=`#ifdef USE_NORMALMAP
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
#endif`,Kx=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Zx=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Jx=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,jx=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Qx=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,eb=`vec3 packNormalToRGB( const in vec3 normal ) {
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
	#ifdef USE_REVERSED_DEPTH_BUFFER
	
		return depth * ( far - near ) - far;
	#else
		return depth * ( near - far ) - near;
	#endif
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	
	#ifdef USE_REVERSED_DEPTH_BUFFER
		return ( near * far ) / ( ( near - far ) * depth - near );
	#else
		return ( near * far ) / ( ( far - near ) * depth - far );
	#endif
}`,tb=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,nb=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,ib=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,sb=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,rb=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,ob=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,ab=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
		#define SUN_LIGHT_CASCADES 2
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow sunShadowMap[ NUM_SUN_LIGHT_SHADOWS ];
		#else
			uniform sampler2D sunShadowMap[ NUM_SUN_LIGHT_SHADOWS ];
		#endif
		uniform mat4 sunShadowMatrix[ NUM_SUN_LIGHT_SHADOWS * SUN_LIGHT_CASCADES ];
		uniform vec4 sunShadowCascade[ NUM_SUN_LIGHT_SHADOWS * SUN_LIGHT_CASCADES ];
		varying vec4 vSunShadowWorldPosition;
		varying vec3 vSunShadowWorldNormal;
		struct SunLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SunLightShadow sunLightShadows[ NUM_SUN_LIGHT_SHADOWS ];
	#endif
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
				float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
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
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
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
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
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
	#if NUM_SUN_LIGHT_SHADOWS > 0
		float getSunShadow(
			#if defined( SHADOWMAP_TYPE_PCF )
				sampler2DShadow shadowMap,
			#else
				sampler2D shadowMap,
			#endif
			SunLightShadow sunLightShadow,
			int shadowIndex
		) {
			vec4 shadowWorldPosition = vec4( vSunShadowWorldPosition.xyz + vSunShadowWorldNormal * sunLightShadow.shadowNormalBias, 1.0 );
			float viewDepth = vSunShadowWorldPosition.w;
			int cascadeOffset = shadowIndex * SUN_LIGHT_CASCADES;
			float shadow = 1.0;
			for ( int i = SUN_LIGHT_CASCADES - 1; i >= 0; i -- ) {
				vec4 cascade = sunShadowCascade[ cascadeOffset + i ];
				if ( viewDepth >= cascade.x && viewDepth < cascade.y ) {
					float cascadeShadow = getShadow(
						shadowMap,
						sunLightShadow.shadowMapSize,
						sunLightShadow.shadowIntensity,
						sunLightShadow.shadowBias,
						sunLightShadow.shadowRadius,
						sunShadowMatrix[ cascadeOffset + i ] * shadowWorldPosition
					);
					shadow = mix( cascadeShadow, shadow, smoothstep( cascade.z, cascade.y, viewDepth ) );
				}
			}
			return shadow;
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
			#ifdef USE_REVERSED_DEPTH_BUFFER
				float dp = ( shadowCameraNear * ( shadowCameraFar - viewSpaceZ ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
				dp -= shadowBias;
			#else
				float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
				dp += shadowBias;
			#endif
			float texelSize = shadowRadius / shadowMapSize.x;
			vec3 absDir = abs( bd3D );
			vec3 tangent = absDir.x > absDir.z ? vec3( 0.0, 1.0, 0.0 ) : vec3( 1.0, 0.0, 0.0 );
			tangent = normalize( cross( bd3D, tangent ) );
			vec3 bitangent = cross( bd3D, tangent );
			float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
			vec2 sample0 = vogelDiskSample( 0, 5, phi );
			vec2 sample1 = vogelDiskSample( 1, 5, phi );
			vec2 sample2 = vogelDiskSample( 2, 5, phi );
			vec2 sample3 = vogelDiskSample( 3, 5, phi );
			vec2 sample4 = vogelDiskSample( 4, 5, phi );
			shadow = (
				texture( shadowMap, vec4( bd3D + ( tangent * sample0.x + bitangent * sample0.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample1.x + bitangent * sample1.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample2.x + bitangent * sample2.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample3.x + bitangent * sample3.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample4.x + bitangent * sample4.y ) * texelSize, dp ) )
			) * 0.2;
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#elif defined( SHADOWMAP_TYPE_BASIC )
	float getPointShadow( samplerCube shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			float depth = textureCube( shadowMap, bd3D ).r;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				depth = 1.0 - depth;
			#endif
			shadow = step( dp, depth );
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#endif
	#endif
#endif`,lb=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
		varying vec4 vSunShadowWorldPosition;
		varying vec3 vSunShadowWorldNormal;
	#endif
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
#endif`,cb=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_SUN_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	#ifdef HAS_NORMAL
		vec3 shadowWorldNormal = transformNormalByInverseViewMatrix( transformedNormal, viewMatrix );
	#else
		vec3 shadowWorldNormal = vec3( 0.0 );
	#endif
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_SUN_LIGHT_SHADOWS > 0
		vSunShadowWorldPosition = vec4( worldPosition.xyz, - mvPosition.z );
		vSunShadowWorldNormal = shadowWorldNormal;
	#endif
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
#endif`,hb=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
	SunLightShadow sunLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SUN_LIGHT_SHADOWS; i ++ ) {
		sunLight = sunLightShadows[ i ];
		shadow *= receiveShadow ? getSunShadow( sunShadowMap[ i ], sunLight, UNROLLED_LOOP_INDEX ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
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
}`,ub=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,db=`#ifdef USE_SKINNING
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
#endif`,fb=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,pb=`#ifdef USE_SKINNING
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
#endif`,mb=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,gb=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,yb=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,_b=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,vb=`#ifdef USE_TRANSMISSION
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
	vec3 n = transformNormalByInverseViewMatrix( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseContribution, material.specularColorBlended, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,xb=`#ifdef USE_TRANSMISSION
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
#endif`,bb=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Mb=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Sb=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,wb=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,Eb=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Tb=`uniform sampler2D t2D;
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
}`,Ab=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Rb=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vWorldDirection );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Cb=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Pb=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Ib=`#include <common>
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
}`,kb=`#if DEPTH_PACKING == 3200
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
}`,Lb=`#define DISTANCE
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
}`,Db=`#define DISTANCE
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
void main() {
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
}`,Nb=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Ub=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Ob=`uniform float scale;
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
}`,Fb=`uniform vec3 diffuse;
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
}`,Bb=`#include <common>
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
}`,Hb=`uniform vec3 diffuse;
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
}`,zb=`#define LAMBERT
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
}`,Gb=`#define LAMBERT
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
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
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
}`,Vb=`#define MATCAP
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
}`,Wb=`#define MATCAP
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
}`,$b=`#define NORMAL
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
}`,qb=`#define NORMAL
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
}`,Xb=`#define PHONG
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
}`,Yb=`#define PHONG
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
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
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
}`,Kb=`#define STANDARD
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
}`,Zb=`#define STANDARD
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
#ifdef USE_RETROREFLECTION
	uniform float retroreflectivity;
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
}`,Jb=`#define TOON
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
}`,jb=`#define TOON
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
}`,Qb=`uniform float size;
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
}`,eM=`uniform vec3 diffuse;
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
}`,tM=`#include <common>
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
}`,nM=`uniform vec3 color;
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
	#include <premultiplied_alpha_fragment>
}`,iM=`uniform float rotation;
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
}`,sM=`uniform vec3 diffuse;
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
}`,ot={alphahash_fragment:Ev,alphahash_pars_fragment:Tv,alphamap_fragment:Av,alphamap_pars_fragment:Rv,alphatest_fragment:Cv,alphatest_pars_fragment:Pv,aomap_fragment:Iv,aomap_pars_fragment:kv,batching_pars_vertex:Lv,batching_vertex:Dv,begin_vertex:Nv,beginnormal_vertex:Uv,bsdfs:Ov,iridescence_fragment:Fv,bumpmap_pars_fragment:Bv,clipping_planes_fragment:Hv,clipping_planes_pars_fragment:zv,clipping_planes_pars_vertex:Gv,clipping_planes_vertex:Vv,color_fragment:Wv,color_pars_fragment:$v,color_pars_vertex:qv,color_vertex:Xv,common:Yv,cube_uv_reflection_fragment:Kv,defaultnormal_vertex:Zv,displacementmap_pars_vertex:Jv,displacementmap_vertex:jv,emissivemap_fragment:Qv,emissivemap_pars_fragment:ex,colorspace_fragment:tx,colorspace_pars_fragment:nx,envmap_fragment:ix,envmap_common_pars_fragment:sx,envmap_pars_fragment:rx,envmap_pars_vertex:ox,envmap_physical_pars_fragment:yx,envmap_vertex:ax,fog_vertex:lx,fog_pars_vertex:cx,fog_fragment:hx,fog_pars_fragment:ux,gradientmap_pars_fragment:dx,lightmap_pars_fragment:fx,lights_lambert_fragment:px,lights_lambert_pars_fragment:mx,lights_pars_begin:gx,lights_toon_fragment:_x,lights_toon_pars_fragment:vx,lights_phong_fragment:xx,lights_phong_pars_fragment:bx,lights_physical_fragment:Mx,lights_physical_pars_fragment:Sx,lights_fragment_begin:wx,lights_fragment_maps:Ex,lights_fragment_end:Tx,lightprobes_pars_fragment:Ax,logdepthbuf_fragment:Rx,logdepthbuf_pars_fragment:Cx,logdepthbuf_pars_vertex:Px,logdepthbuf_vertex:Ix,map_fragment:kx,map_pars_fragment:Lx,map_particle_fragment:Dx,map_particle_pars_fragment:Nx,metalnessmap_fragment:Ux,metalnessmap_pars_fragment:Ox,morphinstance_vertex:Fx,morphcolor_vertex:Bx,morphnormal_vertex:Hx,morphtarget_pars_vertex:zx,morphtarget_vertex:Gx,normal_fragment_begin:Vx,normal_fragment_maps:Wx,normal_pars_fragment:$x,normal_pars_vertex:qx,normal_vertex:Xx,normalmap_pars_fragment:Yx,clearcoat_normal_fragment_begin:Kx,clearcoat_normal_fragment_maps:Zx,clearcoat_pars_fragment:Jx,iridescence_pars_fragment:jx,opaque_fragment:Qx,packing:eb,premultiplied_alpha_fragment:tb,project_vertex:nb,dithering_fragment:ib,dithering_pars_fragment:sb,roughnessmap_fragment:rb,roughnessmap_pars_fragment:ob,shadowmap_pars_fragment:ab,shadowmap_pars_vertex:lb,shadowmap_vertex:cb,shadowmask_pars_fragment:hb,skinbase_vertex:ub,skinning_pars_vertex:db,skinning_vertex:fb,skinnormal_vertex:pb,specularmap_fragment:mb,specularmap_pars_fragment:gb,tonemapping_fragment:yb,tonemapping_pars_fragment:_b,transmission_fragment:vb,transmission_pars_fragment:xb,uv_pars_fragment:bb,uv_pars_vertex:Mb,uv_vertex:Sb,worldpos_vertex:wb,background_vert:Eb,background_frag:Tb,backgroundCube_vert:Ab,backgroundCube_frag:Rb,cube_vert:Cb,cube_frag:Pb,depth_vert:Ib,depth_frag:kb,distance_vert:Lb,distance_frag:Db,equirect_vert:Nb,equirect_frag:Ub,linedashed_vert:Ob,linedashed_frag:Fb,meshbasic_vert:Bb,meshbasic_frag:Hb,meshlambert_vert:zb,meshlambert_frag:Gb,meshmatcap_vert:Vb,meshmatcap_frag:Wb,meshnormal_vert:$b,meshnormal_frag:qb,meshphong_vert:Xb,meshphong_frag:Yb,meshphysical_vert:Kb,meshphysical_frag:Zb,meshtoon_vert:Jb,meshtoon_frag:jb,points_vert:Qb,points_frag:eM,shadow_vert:tM,shadow_frag:nM,sprite_vert:iM,sprite_frag:sM},Me={common:{diffuse:{value:new Ie(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new et},alphaMap:{value:null},alphaMapTransform:{value:new et},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new et}},envmap:{envMap:{value:null},envMapRotation:{value:new et},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new et}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new et}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new et},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new et},normalScale:{value:new j(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new et},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new et}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new et}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new et}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Ie(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},sunLights:{value:[],properties:{direction:{},color:{}}},sunLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},sunShadowMatrix:{value:[]},sunShadowCascade:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:null},probesMin:{value:new I},probesMax:{value:new I},probesResolution:{value:new I}},points:{diffuse:{value:new Ie(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new et},alphaTest:{value:0},uvTransform:{value:new et}},sprite:{diffuse:{value:new Ie(16777215)},opacity:{value:1},center:{value:new j(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new et},alphaMap:{value:null},alphaMapTransform:{value:new et},alphaTest:{value:0}}},fs={basic:{uniforms:Hn([Me.common,Me.specularmap,Me.envmap,Me.aomap,Me.lightmap,Me.fog]),vertexShader:ot.meshbasic_vert,fragmentShader:ot.meshbasic_frag},lambert:{uniforms:Hn([Me.common,Me.specularmap,Me.envmap,Me.aomap,Me.lightmap,Me.emissivemap,Me.bumpmap,Me.normalmap,Me.displacementmap,Me.fog,Me.lights,{emissive:{value:new Ie(0)},envMapIntensity:{value:1}}]),vertexShader:ot.meshlambert_vert,fragmentShader:ot.meshlambert_frag},phong:{uniforms:Hn([Me.common,Me.specularmap,Me.envmap,Me.aomap,Me.lightmap,Me.emissivemap,Me.bumpmap,Me.normalmap,Me.displacementmap,Me.fog,Me.lights,{emissive:{value:new Ie(0)},specular:{value:new Ie(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:ot.meshphong_vert,fragmentShader:ot.meshphong_frag},standard:{uniforms:Hn([Me.common,Me.envmap,Me.aomap,Me.lightmap,Me.emissivemap,Me.bumpmap,Me.normalmap,Me.displacementmap,Me.roughnessmap,Me.metalnessmap,Me.fog,Me.lights,{emissive:{value:new Ie(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:ot.meshphysical_vert,fragmentShader:ot.meshphysical_frag},toon:{uniforms:Hn([Me.common,Me.aomap,Me.lightmap,Me.emissivemap,Me.bumpmap,Me.normalmap,Me.displacementmap,Me.gradientmap,Me.fog,Me.lights,{emissive:{value:new Ie(0)}}]),vertexShader:ot.meshtoon_vert,fragmentShader:ot.meshtoon_frag},matcap:{uniforms:Hn([Me.common,Me.bumpmap,Me.normalmap,Me.displacementmap,Me.fog,{matcap:{value:null}}]),vertexShader:ot.meshmatcap_vert,fragmentShader:ot.meshmatcap_frag},points:{uniforms:Hn([Me.points,Me.fog]),vertexShader:ot.points_vert,fragmentShader:ot.points_frag},dashed:{uniforms:Hn([Me.common,Me.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:ot.linedashed_vert,fragmentShader:ot.linedashed_frag},depth:{uniforms:Hn([Me.common,Me.displacementmap]),vertexShader:ot.depth_vert,fragmentShader:ot.depth_frag},normal:{uniforms:Hn([Me.common,Me.bumpmap,Me.normalmap,Me.displacementmap,{opacity:{value:1}}]),vertexShader:ot.meshnormal_vert,fragmentShader:ot.meshnormal_frag},sprite:{uniforms:Hn([Me.sprite,Me.fog]),vertexShader:ot.sprite_vert,fragmentShader:ot.sprite_frag},background:{uniforms:{uvTransform:{value:new et},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:ot.background_vert,fragmentShader:ot.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new et}},vertexShader:ot.backgroundCube_vert,fragmentShader:ot.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:ot.cube_vert,fragmentShader:ot.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:ot.equirect_vert,fragmentShader:ot.equirect_frag},distance:{uniforms:Hn([Me.common,Me.displacementmap,{referencePosition:{value:new I},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:ot.distance_vert,fragmentShader:ot.distance_frag},shadow:{uniforms:Hn([Me.lights,Me.fog,{color:{value:new Ie(0)},opacity:{value:1}}]),vertexShader:ot.shadow_vert,fragmentShader:ot.shadow_frag}};fs.physical={uniforms:Hn([fs.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new et},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new et},clearcoatNormalScale:{value:new j(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new et},dispersion:{value:0},retroreflectivity:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new et},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new et},sheen:{value:0},sheenColor:{value:new Ie(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new et},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new et},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new et},transmissionSamplerSize:{value:new j},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new et},attenuationDistance:{value:0},attenuationColor:{value:new Ie(0)},specularColor:{value:new Ie(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new et},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new et},anisotropyVector:{value:new j},anisotropyMap:{value:null},anisotropyMapTransform:{value:new et}}]),vertexShader:ot.meshphysical_vert,fragmentShader:ot.meshphysical_frag};var fu={r:0,b:0,g:0},rM=new Et,$0=new et;$0.set(-1,0,0,0,1,0,0,0,1);function oM(n,e,t,i,s,r){let o=new Ie(0),a=s===!0?0:1,l,c,d=null,f=0,h=null;function u(v){let M=v.isScene===!0?v.background:null;if(M&&M.isTexture){let _=v.backgroundBlurriness>0;M=e.get(M,_)}return M}function m(v){let M=!1,_=u(v);_===null?g(o,a):_&&_.isColor&&(g(_,1),M=!0);let S=n.xr.getEnvironmentBlendMode();S==="additive"?t.buffers.color.setClear(0,0,0,1,r):S==="alpha-blend"&&t.buffers.color.setClear(0,0,0,0,r),(n.autoClear||M)&&(t.buffers.depth.setTest(!0),t.buffers.depth.setMask(!0),t.buffers.color.setMask(!0),n.clear(n.autoClearColor,n.autoClearDepth,n.autoClearStencil))}function y(v,M){let _=u(M);_&&(_.isCubeTexture||_.mapping===vl)?(c===void 0&&(c=new oe(new Fn(1,1,1),new rn({name:"BackgroundCubeMaterial",uniforms:Br(fs.backgroundCube.uniforms),vertexShader:fs.backgroundCube.vertexShader,fragmentShader:fs.backgroundCube.fragmentShader,side:Pn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),c.geometry.deleteAttribute("uv"),c.onBeforeRender=function(S,E,P){this.matrixWorld.copyPosition(P.matrixWorld)},Object.defineProperty(c.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(c)),c.material.uniforms.envMap.value=_,c.material.uniforms.backgroundBlurriness.value=M.backgroundBlurriness,c.material.uniforms.backgroundIntensity.value=M.backgroundIntensity,c.material.uniforms.backgroundRotation.value.setFromMatrix4(rM.makeRotationFromEuler(M.backgroundRotation)).transpose(),_.isCubeTexture&&_.isRenderTargetTexture===!1&&c.material.uniforms.backgroundRotation.value.premultiply($0),c.material.toneMapped=ct.getTransfer(_.colorSpace)!==bt,(d!==_||f!==_.version||h!==n.toneMapping)&&(c.material.needsUpdate=!0,d=_,f=_.version,h=n.toneMapping),c.layers.enableAll(),v.unshift(c,c.geometry,c.material,0,0,null)):_&&_.isTexture&&(l===void 0&&(l=new oe(new Zn(2,2),new rn({name:"BackgroundMaterial",uniforms:Br(fs.background.uniforms),vertexShader:fs.background.vertexShader,fragmentShader:fs.background.fragmentShader,side:er,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(l)),l.material.uniforms.t2D.value=_,l.material.uniforms.backgroundIntensity.value=M.backgroundIntensity,l.material.toneMapped=ct.getTransfer(_.colorSpace)!==bt,_.matrixAutoUpdate===!0&&_.updateMatrix(),l.material.uniforms.uvTransform.value.copy(_.matrix),(d!==_||f!==_.version||h!==n.toneMapping)&&(l.material.needsUpdate=!0,d=_,f=_.version,h=n.toneMapping),l.layers.enableAll(),v.unshift(l,l.geometry,l.material,0,0,null))}function g(v,M){v.getRGB(fu,uf(n)),t.buffers.color.setClear(fu.r,fu.g,fu.b,M,r)}function p(){c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0),l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0)}return{getClearColor:function(){return o},setClearColor:function(v,M=1){o.set(v),a=M,g(o,a)},getClearAlpha:function(){return a},setClearAlpha:function(v){a=v,g(o,a)},render:m,addToRenderList:y,dispose:p}}function aM(n,e){let t=n.getParameter(n.MAX_VERTEX_ATTRIBS),i={},s=h(null),r=s,o=!1;function a(C,k,D,L,F){let B=!1,$=f(C,L,D,k);r!==$&&(r=$,c(r.object)),B=u(C,L,D,F),B&&m(C,L,D,F),F!==null&&e.update(F,n.ELEMENT_ARRAY_BUFFER),(B||o)&&(o=!1,_(C,k,D,L),F!==null&&n.bindBuffer(n.ELEMENT_ARRAY_BUFFER,e.get(F).buffer))}function l(){return n.createVertexArray()}function c(C){return n.bindVertexArray(C)}function d(C){return n.deleteVertexArray(C)}function f(C,k,D,L){let F=L.wireframe===!0,B=i[k.id];B===void 0&&(B={},i[k.id]=B);let $=C.isInstancedMesh===!0?C.id:0,se=B[$];se===void 0&&(se={},B[$]=se);let X=se[D.id];X===void 0&&(X={},se[D.id]=X);let Q=X[F];return Q===void 0&&(Q=h(l()),X[F]=Q),Q}function h(C){let k=[],D=[],L=[];for(let F=0;F<t;F++)k[F]=0,D[F]=0,L[F]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:k,enabledAttributes:D,attributeDivisors:L,object:C,attributes:{},index:null}}function u(C,k,D,L){let F=r.attributes,B=k.attributes,$=0,se=D.getAttributes();for(let X in se)if(se[X].location>=0){let ne=F[X],Oe=B[X];if(Oe===void 0&&(X==="instanceMatrix"&&C.instanceMatrix&&(Oe=C.instanceMatrix),X==="instanceColor"&&C.instanceColor&&(Oe=C.instanceColor)),ne===void 0||ne.attribute!==Oe||Oe&&ne.data!==Oe.data)return!0;$++}return r.attributesNum!==$||r.index!==L}function m(C,k,D,L){let F={},B=k.attributes,$=0,se=D.getAttributes();for(let X in se)if(se[X].location>=0){let ne=B[X];ne===void 0&&(X==="instanceMatrix"&&C.instanceMatrix&&(ne=C.instanceMatrix),X==="instanceColor"&&C.instanceColor&&(ne=C.instanceColor));let Oe={};Oe.attribute=ne,ne&&ne.data&&(Oe.data=ne.data),F[X]=Oe,$++}r.attributes=F,r.attributesNum=$,r.index=L}function y(){let C=r.newAttributes;for(let k=0,D=C.length;k<D;k++)C[k]=0}function g(C){p(C,0)}function p(C,k){let D=r.newAttributes,L=r.enabledAttributes,F=r.attributeDivisors;D[C]=1,L[C]===0&&(n.enableVertexAttribArray(C),L[C]=1),F[C]!==k&&(n.vertexAttribDivisor(C,k),F[C]=k)}function v(){let C=r.newAttributes,k=r.enabledAttributes;for(let D=0,L=k.length;D<L;D++)k[D]!==C[D]&&(n.disableVertexAttribArray(D),k[D]=0)}function M(C,k,D,L,F,B,$){$===!0?n.vertexAttribIPointer(C,k,D,F,B):n.vertexAttribPointer(C,k,D,L,F,B)}function _(C,k,D,L){y();let F=L.attributes,B=D.getAttributes(),$=k.defaultAttributeValues;for(let se in B){let X=B[se];if(X.location>=0){let Q=F[se];if(Q===void 0&&(se==="instanceMatrix"&&C.instanceMatrix&&(Q=C.instanceMatrix),se==="instanceColor"&&C.instanceColor&&(Q=C.instanceColor)),Q!==void 0){let ne=Q.normalized,Oe=Q.itemSize,Ce=e.get(Q);if(Ce===void 0)continue;let mt=Ce.buffer,at=Ce.type,Le=Ce.bytesPerElement,V=at===n.INT||at===n.UNSIGNED_INT||Q.gpuType===Rh;if(Q.isInterleavedBufferAttribute){let J=Q.data,fe=J.stride,Ye=Q.offset;if(J.isInstancedInterleavedBuffer){for(let Ae=0;Ae<X.locationSize;Ae++)p(X.location+Ae,J.meshPerAttribute);C.isInstancedMesh!==!0&&L._maxInstanceCount===void 0&&(L._maxInstanceCount=J.meshPerAttribute*J.count)}else for(let Ae=0;Ae<X.locationSize;Ae++)g(X.location+Ae);n.bindBuffer(n.ARRAY_BUFFER,mt);for(let Ae=0;Ae<X.locationSize;Ae++)M(X.location+Ae,Oe/X.locationSize,at,ne,fe*Le,(Ye+Oe/X.locationSize*Ae)*Le,V)}else{if(Q.isInstancedBufferAttribute){for(let J=0;J<X.locationSize;J++)p(X.location+J,Q.meshPerAttribute);C.isInstancedMesh!==!0&&L._maxInstanceCount===void 0&&(L._maxInstanceCount=Q.meshPerAttribute*Q.count)}else for(let J=0;J<X.locationSize;J++)g(X.location+J);n.bindBuffer(n.ARRAY_BUFFER,mt);for(let J=0;J<X.locationSize;J++)M(X.location+J,Oe/X.locationSize,at,ne,Oe*Le,Oe/X.locationSize*J*Le,V)}}else if($!==void 0){let ne=$[se];if(ne!==void 0)switch(ne.length){case 2:n.vertexAttrib2fv(X.location,ne);break;case 3:n.vertexAttrib3fv(X.location,ne);break;case 4:n.vertexAttrib4fv(X.location,ne);break;default:n.vertexAttrib1fv(X.location,ne)}}}}v()}function S(){A();for(let C in i){let k=i[C];for(let D in k){let L=k[D];for(let F in L){let B=L[F];for(let $ in B)d(B[$].object),delete B[$];delete L[F]}}delete i[C]}}function E(C){if(i[C.id]===void 0)return;let k=i[C.id];for(let D in k){let L=k[D];for(let F in L){let B=L[F];for(let $ in B)d(B[$].object),delete B[$];delete L[F]}}delete i[C.id]}function P(C){for(let k in i){let D=i[k];for(let L in D){let F=D[L];if(F[C.id]===void 0)continue;let B=F[C.id];for(let $ in B)d(B[$].object),delete B[$];delete F[C.id]}}}function x(C){for(let k in i){let D=i[k],L=C.isInstancedMesh===!0?C.id:0,F=D[L];if(F!==void 0){for(let B in F){let $=F[B];for(let se in $)d($[se].object),delete $[se];delete F[B]}delete D[L],Object.keys(D).length===0&&delete i[k]}}}function A(){T(),o=!0,r!==s&&(r=s,c(r.object))}function T(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:a,reset:A,resetDefaultState:T,dispose:S,releaseStatesOfGeometry:E,releaseStatesOfObject:x,releaseStatesOfProgram:P,initAttributes:y,enableAttribute:g,disableUnusedAttributes:v}}function lM(n,e,t){let i;function s(l){i=l}function r(l,c){n.drawArrays(i,l,c),t.update(c,i,1)}function o(l,c,d){d!==0&&(n.drawArraysInstanced(i,l,c,d),t.update(c,i,d))}function a(l,c,d){if(d===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,l,0,c,0,d);let h=0;for(let u=0;u<d;u++)h+=c[u];t.update(h,i,1)}this.setMode=s,this.render=r,this.renderInstances=o,this.renderMultiDraw=a}function cM(n,e,t,i){let s;function r(){if(s!==void 0)return s;if(e.has("EXT_texture_filter_anisotropic")===!0){let P=e.get("EXT_texture_filter_anisotropic");s=n.getParameter(P.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function o(P){return!(P!==wi&&i.convert(P)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(P){let x=P===In&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(P!==Jn&&P!==Si&&!x&&i.convert(P)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_TYPE))}function l(P){if(P==="highp"){if(n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.HIGH_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.HIGH_FLOAT).precision>0)return"highp";P="mediump"}return P==="mediump"&&n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.MEDIUM_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=t.precision!==void 0?t.precision:"highp",d=l(c);d!==c&&(Xe("WebGLRenderer:",c,"not supported, using",d,"instead."),c=d);let f=t.logarithmicDepthBuffer===!0,h=t.reversedDepthBuffer===!0&&e.has("EXT_clip_control");t.reversedDepthBuffer===!0&&h===!1&&Xe("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer.");let u=n.getParameter(n.MAX_TEXTURE_IMAGE_UNITS),m=n.getParameter(n.MAX_VERTEX_TEXTURE_IMAGE_UNITS),y=n.getParameter(n.MAX_TEXTURE_SIZE),g=n.getParameter(n.MAX_CUBE_MAP_TEXTURE_SIZE),p=n.getParameter(n.MAX_VERTEX_ATTRIBS),v=n.getParameter(n.MAX_VERTEX_UNIFORM_VECTORS),M=n.getParameter(n.MAX_VARYING_VECTORS),_=n.getParameter(n.MAX_FRAGMENT_UNIFORM_VECTORS),S=n.getParameter(n.MAX_SAMPLES),E=n.getParameter(n.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:l,textureFormatReadable:o,textureTypeReadable:a,precision:c,logarithmicDepthBuffer:f,reversedDepthBuffer:h,maxTextures:u,maxVertexTextures:m,maxTextureSize:y,maxCubemapSize:g,maxAttributes:p,maxVertexUniforms:v,maxVaryings:M,maxFragmentUniforms:_,maxSamples:S,samples:E}}function hM(n){let e=this,t=null,i=0,s=!1,r=!1,o=new oi,a=new et,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(f,h){let u=f.length!==0||h||i!==0||s;return s=h,i=f.length,u},this.beginShadows=function(){r=!0,d(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(f,h){t=d(f,h,0)},this.setState=function(f,h,u){let m=f.clippingPlanes,y=f.clipIntersection,g=f.clipShadows,p=n.get(f);if(!s||m===null||m.length===0||r&&!g)r?d(null):c();else{let v=r?0:i,M=v*4,_=p.clippingState||null;l.value=_,_=d(m,h,M,u);for(let S=0;S!==M;++S)_[S]=t[S];p.clippingState=_,this.numIntersection=y?this.numPlanes:0,this.numPlanes+=v}};function c(){l.value!==t&&(l.value=t,l.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}function d(f,h,u,m){let y=f!==null?f.length:0,g=null;if(y!==0){if(g=l.value,m!==!0||g===null){let p=u+y*4,v=h.matrixWorldInverse;a.getNormalMatrix(v),(g===null||g.length<p)&&(g=new Float32Array(p));for(let M=0,_=u;M!==y;++M,_+=4)o.copy(f[M]).applyMatrix4(v,a),o.normal.toArray(g,_),g[_+3]=o.constant}l.value=g,l.needsUpdate=!0}return e.numPlanes=y,e.numIntersection=0,g}}var Vo=4,uM=6,dM=20,fM=256,Rl=new Js,S0=new Ie,xf=null,bf=0,Mf=0,Sf=!1,pM=new I,Hr=new I,$o=class{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(e,t=0,i=.1,s=100,r={}){let{size:o=256,position:a=pM}=r;xf=this._renderer.getRenderTarget(),bf=this._renderer.getActiveCubeFace(),Mf=this._renderer.getActiveMipmapLevel(),Sf=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(o);let l=this._allocateTargets();return l.depthBuffer=!0,this._sceneToCubeUV(e,i,s,l,a),t>0&&this._blur(l,0,0,t),this._applyPMREM(l),this._cleanup(l),l}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=T0(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=E0(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodMeshes.length;e++)this._lodMeshes[e].geometry.dispose()}_cleanup(e){this._renderer.setRenderTarget(xf,bf,Mf),this._renderer.xr.enabled=Sf,e.scissorTest=!1,Go(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===tr||e.mapping===Fr?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),xf=this._renderer.getRenderTarget(),bf=this._renderer.getActiveCubeFace(),Mf=this._renderer.getActiveMipmapLevel(),Sf=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;let i=t||this._allocateTargets();return this._textureToCubeUV(e,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){let e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,i={magFilter:Rn,minFilter:Rn,generateMipmaps:!1,type:In,format:wi,colorSpace:Ua,depthBuffer:!1},s=w0(e,t,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=w0(e,t,i);let{_lodMax:r}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods}=mM(r)),this._blurMaterial=yM(r,e,t),this._ggxMaterial=gM(r,e,t)}return s}_compileMaterial(e){let t=new oe(new Ft,e);this._renderer.compile(t,Rl)}_sceneToCubeUV(e,t,i,s,r){let l=new An(90,1,t,i),c=[1,-1,1,1,1,1],d=[1,1,1,-1,-1,-1],f=this._renderer,h=f.autoClear,u=f.toneMapping;f.getClearColor(S0),f.toneMapping=qi,f.autoClear=!1,f.state.buffers.depth.getReversed()&&(f.setRenderTarget(s),f.clearDepth(),f.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new oe(new Fn,new Wt({name:"PMREM.Background",side:Pn,depthWrite:!1,depthTest:!1})));let y=this._backgroundBox,g=y.material,p=!1,v=e.background;v?v.isColor&&(g.color.copy(v),e.background=null,p=!0):(g.color.copy(S0),p=!0);for(let M=0;M<6;M++){let _=M%3;_===0?(l.up.set(0,c[M],0),l.position.set(r.x,r.y,r.z),l.lookAt(r.x+d[M],r.y,r.z)):_===1?(l.up.set(0,0,c[M]),l.position.set(r.x,r.y,r.z),l.lookAt(r.x,r.y+d[M],r.z)):(l.up.set(0,c[M],0),l.position.set(r.x,r.y,r.z),l.lookAt(r.x,r.y,r.z+d[M]));let S=this._cubeSize;Go(s,_*S,M>2?S:0,S,S),f.setRenderTarget(s),p&&f.render(y,l),f.render(e,l)}f.toneMapping=u,f.autoClear=h,e.background=v}_textureToCubeUV(e,t){let i=this._renderer,s=e.mapping===tr||e.mapping===Fr;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=T0()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=E0());let r=s?this._cubemapMaterial:this._equirectMaterial,o=this._lodMeshes[0];o.material=r;let a=r.uniforms;a.envMap.value=e;let l=this._cubeSize;Go(t,0,0,3*l,2*l),i.setRenderTarget(t),i.render(o,Rl)}_applyPMREM(e){let t=this._renderer,i=t.autoClear;t.autoClear=!1;let s=this._lodMeshes.length;for(let r=1;r<s;r++)this._applyGGXFilter(e,r-1,r);t.autoClear=i}_applyGGXFilter(e,t,i){let s=this._renderer,r=this._pingPongRenderTarget,o=this._ggxMaterial,a=this._lodMeshes[i];a.material=o;let l=o.uniforms,c=i/(this._lodMeshes.length-1),d=t/(this._lodMeshes.length-1),f=Math.sqrt(c*c-d*d),h=c*1.25,u=f*h,{_lodMax:m}=this,y=this._sizeLods[i],g=3*y*(i>m-Vo?i-m+Vo:0),p=4*(this._cubeSize-y);l.envMap.value=e.texture,l.roughness.value=u,l.mipInt.value=m-t,Go(r,g,p,3*y,2*y),s.setRenderTarget(r),s.render(a,Rl),l.envMap.value=r.texture,l.roughness.value=0,l.mipInt.value=m-i,Go(e,g,p,3*y,2*y),s.setRenderTarget(e),s.render(a,Rl)}_blur(e,t,i,s){let r=this._pingPongRenderTarget,o=Math.min(s,Math.PI)/Math.SQRT2;this._blurPass(e,r,t,i,o),this._blurPass(r,e,i,i,o)}_blurPass(e,t,i,s,r){let o=this._renderer,a=this._blurMaterial,l=this._lodMeshes[s];l.material=a;let c=a.uniforms;c.envMap.value=e.texture,c.sigma.value=r,c.mipInt.value=this._lodMax-i;let d=this._sizeLods[s],f=3*d*(s>this._lodMax-Vo?s-this._lodMax+Vo:0),h=4*(this._cubeSize-d);Go(t,f,h,3*d,2*d),o.setRenderTarget(t),o.render(l,Rl)}};function mM(n){let e=[],t=[],i=n,s=n-Vo+1+uM;for(let r=0;r<s;r++){let o=Math.pow(2,i);e.push(o);let a=1/(o-2),l=-a,c=1+a,d=[l,l,c,l,c,c,l,l,c,c,l,c],f=6,h=6,u=3,m=new Float32Array(u*h*f),y=new Float32Array(u*h*f);for(let p=0;p<f;p++){let v=p%3*2/3-1,M=p>2?0:-1,_=[v,M,0,v+2/3,M,0,v+2/3,M+1,0,v,M,0,v+2/3,M+1,0,v,M+1,0];m.set(_,u*h*p);for(let S=0;S<h;S++){let E=d[S*2]*2-1,P=d[S*2+1]*2-1;p===0?Hr.set(1,P,E):p===1?Hr.set(-E,1,-P):p===2?Hr.set(-E,P,1):p===3?Hr.set(-1,P,-E):p===4?Hr.set(-E,-1,P):Hr.set(E,P,-1),Hr.toArray(y,(p*h+S)*u)}}let g=new Ft;g.setAttribute("position",new gn(m,u)),g.setAttribute("outputDirection",new gn(y,u)),t.push(new oe(g,null)),i>Vo&&i--}return{lodMeshes:t,sizeLods:e}}function w0(n,e,t){let i=new hn(n,e,t);return i.texture.mapping=vl,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function Go(n,e,t,i,s){n.viewport.set(e,t,i,s),n.scissor.set(e,t,i,s)}function gM(n,e,t){return new rn({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:fM,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${n}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:yu(),fragmentShader:`

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

				// Section 4.1: Orthonormal basis
				vec3 T1 = vec3(1.0, 0.0, 0.0);
				vec3 T2 = cross(V, T1);

				// Section 4.2: Parameterization of projected area
				float r = sqrt(Xi.x);
				float phi = 2.0 * PI * Xi.y;
				float t1 = r * cos(phi);
				float t2 = r * sin(phi);
				float s = 0.5 * (1.0 + V.z);
				t2 = (1.0 - s) * sqrt(1.0 - t1 * t1) + s * t2;

				// Section 4.3: Reprojection onto hemisphere
				vec3 Nh = t1 * T1 + t2 * T2 + sqrt(max(0.0, 1.0 - t1 * t1 - t2 * t2)) * V;

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
		`,blending:Mi,depthTest:!1,depthWrite:!1})}function yM(n,e,t){return new rn({name:"SphericalGaussianBlur",defines:{SAMPLES:dM,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${n}.0`},uniforms:{envMap:{value:null},sigma:{value:0},mipInt:{value:0}},vertexShader:yu(),fragmentShader:`

			precision highp float;
			precision highp int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform float sigma;
			uniform float mipInt;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			#define PI 3.14159265359
			#define GOLDEN_ANGLE 2.39996322973

			void main() {

				if ( sigma == 0.0 ) {

					gl_FragColor = vec4( bilinearCubeUV( envMap, vOutputDirection, mipInt ), 1.0 );
					return;

				}

				vec3 outputDirection = normalize( vOutputDirection );

				vec3 up = abs( outputDirection.z ) < 0.999 ? vec3( 0.0, 0.0, 1.0 ) : vec3( 1.0, 0.0, 0.0 );
				vec3 tangent = normalize( cross( up, outputDirection ) );
				vec3 bitangent = cross( outputDirection, tangent );

				// Truncate the kernel at three standard deviations or at the antipode.
				float thetaMax = min( 3.0 * sigma, PI );
				float truncation = 1.0 - exp( - 0.5 * thetaMax * thetaMax / ( sigma * sigma ) );

				vec3 accumColor = vec3( 0.0 );
				float accumWeight = 0.0;

				for ( int i = 0; i < SAMPLES; i ++ ) {

					// Stratified inverse-CDF sampling of the Gaussian, placed on a golden-angle spiral.
					float stratum = ( float( i ) + 0.5 ) / float( SAMPLES );
					float theta = sigma * sqrt( - 2.0 * log( 1.0 - stratum * truncation ) );
					float phi = float( i ) * GOLDEN_ANGLE;

					vec3 offset = cos( phi ) * tangent + sin( phi ) * bitangent;
					vec3 sampleDirection = cos( theta ) * outputDirection + sin( theta ) * offset;

					// Correct the planar sample density to solid angle.
					float weight = sin( theta ) / theta;

					accumColor += weight * bilinearCubeUV( envMap, sampleDirection, mipInt );
					accumWeight += weight;

				}

				gl_FragColor = vec4( accumColor / accumWeight, 1.0 );

			}
		`,blending:Mi,depthTest:!1,depthWrite:!1})}function E0(){return new rn({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:yu(),fragmentShader:`

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
		`,blending:Mi,depthTest:!1,depthWrite:!1})}function T0(){return new rn({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:yu(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Mi,depthTest:!1,depthWrite:!1})}function yu(){return`

		precision mediump float;
		precision mediump int;

		attribute vec3 outputDirection;

		varying vec3 vOutputDirection;

		void main() {

			vOutputDirection = outputDirection;
			gl_Position = vec4( position, 1.0 );

		}
	`}var mu=class extends hn{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;let i={width:e,height:e,depth:1},s=[i,i,i,i,i,i];this.texture=new Ya(s),this._setTextureOptions(t),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;let i={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},s=new Fn(5,5,5),r=new rn({name:"CubemapFromEquirect",uniforms:Br(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:Pn,blending:Mi});r.uniforms.tEquirect.value=t;let o=new oe(s,r),a=t.minFilter;return t.minFilter===nr&&(t.minFilter=Rn),new bh(1,10,this).update(e,o),t.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(e,t=!0,i=!0,s=!0){let r=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(t,i,s);e.setRenderTarget(r)}};function _M(n){let e=new WeakMap,t=new WeakMap,i=null;function s(h,u=!1){return h==null?null:u?o(h):r(h)}function r(h){if(h&&h.isTexture){let u=h.mapping;if(u===Eh||u===Th)if(e.has(h)){let m=e.get(h).texture;return a(m,h.mapping)}else{let m=h.image;if(m&&m.height>0){let y=new mu(m.height);return y.fromEquirectangularTexture(n,h),e.set(h,y),h.addEventListener("dispose",c),a(y.texture,h.mapping)}else return null}}return h}function o(h){if(h&&h.isTexture){let u=h.mapping,m=u===Eh||u===Th,y=u===tr||u===Fr;if(m||y){let g=t.get(h),p=g!==void 0?g.texture.pmremVersion:0;if(h.isRenderTargetTexture&&h.pmremVersion!==p)return i===null&&(i=new $o(n)),g=m?i.fromEquirectangular(h,g):i.fromCubemap(h,g),g.texture.pmremVersion=h.pmremVersion,t.set(h,g),g.texture;if(g!==void 0)return g.texture;{let v=h.image;return m&&v&&v.height>0||y&&v&&l(v)?(i===null&&(i=new $o(n)),g=m?i.fromEquirectangular(h):i.fromCubemap(h),g.texture.pmremVersion=h.pmremVersion,t.set(h,g),h.addEventListener("dispose",d),g.texture):null}}}return h}function a(h,u){return u===Eh?h.mapping=tr:u===Th&&(h.mapping=Fr),h}function l(h){let u=0,m=6;for(let y=0;y<m;y++)h[y]!==void 0&&u++;return u===m}function c(h){let u=h.target;u.removeEventListener("dispose",c);let m=e.get(u);m!==void 0&&(e.delete(u),m.dispose())}function d(h){let u=h.target;u.removeEventListener("dispose",d);let m=t.get(u);m!==void 0&&(t.delete(u),m.dispose())}function f(){e=new WeakMap,t=new WeakMap,i!==null&&(i.dispose(),i=null)}return{get:s,dispose:f}}function vM(n){let e={};function t(i){if(e[i]!==void 0)return e[i];let s=n.getExtension(i);return e[i]=s,s}return{has:function(i){return t(i)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(i){let s=t(i);return s===null&&Tr("WebGLRenderer: "+i+" extension not supported."),s}}}function xM(n,e,t,i){let s={},r=new WeakMap;function o(f){let h=f.target;h.index!==null&&e.remove(h.index);for(let m in h.attributes)e.remove(h.attributes[m]);h.removeEventListener("dispose",o),delete s[h.id];let u=r.get(h);u&&(e.remove(u),r.delete(h)),i.releaseStatesOfGeometry(h),h.isInstancedBufferGeometry===!0&&delete h._maxInstanceCount,t.memory.geometries--}function a(f,h){return s[h.id]===!0||(h.addEventListener("dispose",o),s[h.id]=!0,t.memory.geometries++),h}function l(f){let h=f.attributes;for(let u in h)e.update(h[u],n.ARRAY_BUFFER)}function c(f){let h=[],u=f.index,m=f.attributes.position,y=0;if(m===void 0)return;if(u!==null){let v=u.array;y=u.version;for(let M=0,_=v.length;M<_;M+=3){let S=v[M+0],E=v[M+1],P=v[M+2];h.push(S,E,E,P,P,S)}}else{let v=m.array;y=m.version;for(let M=0,_=v.length/3-1;M<_;M+=3){let S=M+0,E=M+1,P=M+2;h.push(S,E,E,P,P,S)}}let g=new(m.count>=65535?Va:Ga)(h,1);g.version=y;let p=r.get(f);p&&e.remove(p),r.set(f,g)}function d(f){let h=r.get(f);if(h){let u=f.index;u!==null&&h.version<u.version&&c(f)}else c(f);return r.get(f)}return{get:a,update:l,getWireframeAttribute:d}}function bM(n,e,t){let i;function s(f){i=f}let r,o;function a(f){r=f.type,o=f.bytesPerElement}function l(f,h){n.drawElements(i,h,r,f*o),t.update(h,i,1)}function c(f,h,u){u!==0&&(n.drawElementsInstanced(i,h,r,f*o,u),t.update(h,i,u))}function d(f,h,u){if(u===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,h,0,r,f,0,u);let y=0;for(let g=0;g<u;g++)y+=h[g];t.update(y,i,1)}this.setMode=s,this.setIndex=a,this.render=l,this.renderInstances=c,this.renderMultiDraw=d}function MM(n){let e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function i(r,o,a){switch(t.calls++,o){case n.TRIANGLES:t.triangles+=a*(r/3);break;case n.LINES:t.lines+=a*(r/2);break;case n.LINE_STRIP:t.lines+=a*(r-1);break;case n.LINE_LOOP:t.lines+=a*r;break;case n.POINTS:t.points+=a*r;break;default:qe("WebGLInfo: Unknown draw mode:",o);break}}function s(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:s,update:i}}function SM(n,e,t){let i=new WeakMap,s=new Xt;function r(o,a,l){let c=o.morphTargetInfluences,d=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,f=d!==void 0?d.length:0,h=i.get(a);if(h===void 0||h.count!==f){let A=function(){P.dispose(),i.delete(a),a.removeEventListener("dispose",A)};h!==void 0&&h.texture.dispose();let u=a.morphAttributes.position!==void 0,m=a.morphAttributes.normal!==void 0,y=a.morphAttributes.color!==void 0,g=a.morphAttributes.position||[],p=a.morphAttributes.normal||[],v=a.morphAttributes.color||[],M=0;u===!0&&(M=1),m===!0&&(M=2),y===!0&&(M=3);let _=a.attributes.position.count*M,S=1;_>e.maxTextureSize&&(S=Math.ceil(_/e.maxTextureSize),_=e.maxTextureSize);let E=new Float32Array(_*S*4*f),P=new Ha(E,_,S,f);P.type=Si,P.needsUpdate=!0;let x=M*4;for(let T=0;T<f;T++){let C=g[T],k=p[T],D=v[T],L=_*S*4*T;for(let F=0;F<C.count;F++){let B=F*x;u===!0&&(s.fromBufferAttribute(C,F),E[L+B+0]=s.x,E[L+B+1]=s.y,E[L+B+2]=s.z,E[L+B+3]=0),m===!0&&(s.fromBufferAttribute(k,F),E[L+B+4]=s.x,E[L+B+5]=s.y,E[L+B+6]=s.z,E[L+B+7]=0),y===!0&&(s.fromBufferAttribute(D,F),E[L+B+8]=s.x,E[L+B+9]=s.y,E[L+B+10]=s.z,E[L+B+11]=D.itemSize===4?s.w:1)}}h={count:f,texture:P,size:new j(_,S)},i.set(a,h),a.addEventListener("dispose",A)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)l.getUniforms().setValue(n,"morphTexture",o.morphTexture,t);else{let u=0;for(let y=0;y<c.length;y++)u+=c[y];let m=a.morphTargetsRelative?1:1-u;l.getUniforms().setValue(n,"morphTargetBaseInfluence",m),l.getUniforms().setValue(n,"morphTargetInfluences",c)}l.getUniforms().setValue(n,"morphTargetsTexture",h.texture,t),l.getUniforms().setValue(n,"morphTargetsTextureSize",h.size)}return{update:r}}function wM(n,e,t,i,s){let r=new WeakMap;function o(c){let d=s.render.frame,f=c.geometry,h=e.get(c,f);if(r.get(h)!==d&&(e.update(h),r.set(h,d)),c.isInstancedMesh&&(c.hasEventListener("dispose",l)===!1&&c.addEventListener("dispose",l),r.get(c)!==d&&(t.update(c.instanceMatrix,n.ARRAY_BUFFER),c.instanceColor!==null&&t.update(c.instanceColor,n.ARRAY_BUFFER),r.set(c,d))),c.isSkinnedMesh){let u=c.skeleton;r.get(u)!==d&&(u.update(),r.set(u,d))}return h}function a(){r=new WeakMap}function l(c){let d=c.target;d.removeEventListener("dispose",l),i.releaseStatesOfObject(d),t.remove(d.instanceMatrix),d.instanceColor!==null&&t.remove(d.instanceColor)}return{update:o,dispose:a}}var EM={[fl]:"LINEAR_TONE_MAPPING",[pl]:"REINHARD_TONE_MAPPING",[ml]:"CINEON_TONE_MAPPING",[Or]:"ACES_FILMIC_TONE_MAPPING",[yl]:"AGX_TONE_MAPPING",[_l]:"NEUTRAL_TONE_MAPPING",[gl]:"CUSTOM_TONE_MAPPING"};function TM(n,e,t,i,s,r){let o=new hn(e,t,{type:n,depthBuffer:s,stencilBuffer:r,samples:i?4:0,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,resolveDepthBuffer:!1,resolveStencilBuffer:!1}),a=null,l=null,c=new Ft;c.setAttribute("position",new ht([-1,3,0,-1,-1,0,3,-1,0],3)),c.setAttribute("uv",new ht([0,2,0,0,2,0],2));let d=new No({uniforms:{tDiffuse:{value:null}},vertexShader:`
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
			}`,depthTest:!1,depthWrite:!1}),f=new oe(c,d),h=new Js(-1,1,1,-1,0,1),u=null,m=null,y=!1,g,p=null,v=[],M=!1;this.setSize=function(_,S){o.setSize(_,S),a!==null&&a.setSize(_,S),l!==null&&l.setSize(_,S);for(let E=0;E<v.length;E++){let P=v[E];P.setSize&&P.setSize(_,S)}},this.setEffects=function(_){v=_,M=v.length>0&&v[0].isRenderPass===!0;let S=o.width,E=o.height;v.length>0&&a===null&&(a=new hn(S,E,{type:In,depthBuffer:!1,stencilBuffer:!1}),l=new hn(S,E,{type:In,depthBuffer:!1,stencilBuffer:!1}));for(let P=0;P<v.length;P++){let x=v[P];x.setSize&&x.setSize(S,E)}},this.begin=function(_,S){if(y||_.toneMapping===qi&&v.length===0)return!1;if(p=S,S!==null){let E=S.width,P=S.height;(o.width!==E||o.height!==P)&&this.setSize(E,P)}return M===!1&&_.setRenderTarget(o),g=_.toneMapping,_.toneMapping=qi,!0},this.hasRenderPass=function(){return M},this.end=function(_,S){_.toneMapping=g,y=!0;let E=o,P=a;for(let x=0;x<v.length;x++){let A=v[x];A.enabled!==!1&&(A.render(_,P,E,S),A.needsSwap!==!1&&(E=P,P=P===a?l:a))}if(u!==_.outputColorSpace||m!==_.toneMapping){u=_.outputColorSpace,m=_.toneMapping,d.defines={},ct.getTransfer(u)===bt&&(d.defines.SRGB_TRANSFER="");let x=EM[m];x&&(d.defines[x]=""),d.needsUpdate=!0}d.uniforms.tDiffuse.value=E.texture,_.setRenderTarget(p),_.render(f,h),p=null,y=!1},this.isCompositing=function(){return y},this.dispose=function(){o.dispose(),a!==null&&a.dispose(),l!==null&&l.dispose(),c.dispose(),d.dispose()}}var q0=new Wn,Tf=new Xs(1,1),X0=new Ha,Y0=new eh,K0=new Ya,A0=[],R0=[],C0=new Float32Array(16),P0=new Float32Array(9),I0=new Float32Array(4);function qo(n,e,t){let i=n[0];if(i<=0||i>0)return n;let s=e*t,r=A0[s];if(r===void 0&&(r=new Float32Array(s),A0[s]=r),e!==0){i.toArray(r,0);for(let o=1,a=0;o!==e;++o)a+=t,n[o].toArray(r,a)}return r}function yn(n,e){if(n.length!==e.length)return!1;for(let t=0,i=n.length;t<i;t++)if(n[t]!==e[t])return!1;return!0}function _n(n,e){for(let t=0,i=e.length;t<i;t++)n[t]=e[t]}function _u(n,e){let t=R0[e];t===void 0&&(t=new Int32Array(e),R0[e]=t);for(let i=0;i!==e;++i)t[i]=n.allocateTextureUnit();return t}function AM(n,e){let t=this.cache;t[0]!==e&&(n.uniform1f(this.addr,e),t[0]=e)}function RM(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(yn(t,e))return;n.uniform2fv(this.addr,e),_n(t,e)}}function CM(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(n.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(yn(t,e))return;n.uniform3fv(this.addr,e),_n(t,e)}}function PM(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(yn(t,e))return;n.uniform4fv(this.addr,e),_n(t,e)}}function IM(n,e){let t=this.cache,i=e.elements;if(i===void 0){if(yn(t,e))return;n.uniformMatrix2fv(this.addr,!1,e),_n(t,e)}else{if(yn(t,i))return;I0.set(i),n.uniformMatrix2fv(this.addr,!1,I0),_n(t,i)}}function kM(n,e){let t=this.cache,i=e.elements;if(i===void 0){if(yn(t,e))return;n.uniformMatrix3fv(this.addr,!1,e),_n(t,e)}else{if(yn(t,i))return;P0.set(i),n.uniformMatrix3fv(this.addr,!1,P0),_n(t,i)}}function LM(n,e){let t=this.cache,i=e.elements;if(i===void 0){if(yn(t,e))return;n.uniformMatrix4fv(this.addr,!1,e),_n(t,e)}else{if(yn(t,i))return;C0.set(i),n.uniformMatrix4fv(this.addr,!1,C0),_n(t,i)}}function DM(n,e){let t=this.cache;t[0]!==e&&(n.uniform1i(this.addr,e),t[0]=e)}function NM(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(yn(t,e))return;n.uniform2iv(this.addr,e),_n(t,e)}}function UM(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(yn(t,e))return;n.uniform3iv(this.addr,e),_n(t,e)}}function OM(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(yn(t,e))return;n.uniform4iv(this.addr,e),_n(t,e)}}function FM(n,e){let t=this.cache;t[0]!==e&&(n.uniform1ui(this.addr,e),t[0]=e)}function BM(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(yn(t,e))return;n.uniform2uiv(this.addr,e),_n(t,e)}}function HM(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(yn(t,e))return;n.uniform3uiv(this.addr,e),_n(t,e)}}function zM(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(yn(t,e))return;n.uniform4uiv(this.addr,e),_n(t,e)}}function GM(n,e,t){let i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s);let r;this.type===n.SAMPLER_2D_SHADOW?(Tf.compareFunction=t.isReversedDepthBuffer()?du:uu,r=Tf):r=q0,t.setTexture2D(e||r,s)}function VM(n,e,t){let i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),t.setTexture3D(e||Y0,s)}function WM(n,e,t){let i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),t.setTextureCube(e||K0,s)}function $M(n,e,t){let i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),t.setTexture2DArray(e||X0,s)}function qM(n){switch(n){case 5126:return AM;case 35664:return RM;case 35665:return CM;case 35666:return PM;case 35674:return IM;case 35675:return kM;case 35676:return LM;case 5124:case 35670:return DM;case 35667:case 35671:return NM;case 35668:case 35672:return UM;case 35669:case 35673:return OM;case 5125:return FM;case 36294:return BM;case 36295:return HM;case 36296:return zM;case 35678:case 36198:case 36298:case 36306:case 35682:return GM;case 35679:case 36299:case 36307:return VM;case 35680:case 36300:case 36308:case 36293:return WM;case 36289:case 36303:case 36311:case 36292:return $M}}function XM(n,e){n.uniform1fv(this.addr,e)}function YM(n,e){let t=qo(e,this.size,2);n.uniform2fv(this.addr,t)}function KM(n,e){let t=qo(e,this.size,3);n.uniform3fv(this.addr,t)}function ZM(n,e){let t=qo(e,this.size,4);n.uniform4fv(this.addr,t)}function JM(n,e){let t=qo(e,this.size,4);n.uniformMatrix2fv(this.addr,!1,t)}function jM(n,e){let t=qo(e,this.size,9);n.uniformMatrix3fv(this.addr,!1,t)}function QM(n,e){let t=qo(e,this.size,16);n.uniformMatrix4fv(this.addr,!1,t)}function eS(n,e){n.uniform1iv(this.addr,e)}function tS(n,e){n.uniform2iv(this.addr,e)}function nS(n,e){n.uniform3iv(this.addr,e)}function iS(n,e){n.uniform4iv(this.addr,e)}function sS(n,e){n.uniform1uiv(this.addr,e)}function rS(n,e){n.uniform2uiv(this.addr,e)}function oS(n,e){n.uniform3uiv(this.addr,e)}function aS(n,e){n.uniform4uiv(this.addr,e)}function lS(n,e,t){let i=this.cache,s=e.length,r=_u(t,s);yn(i,r)||(n.uniform1iv(this.addr,r),_n(i,r));let o;this.type===n.SAMPLER_2D_SHADOW?o=Tf:o=q0;for(let a=0;a!==s;++a)t.setTexture2D(e[a]||o,r[a])}function cS(n,e,t){let i=this.cache,s=e.length,r=_u(t,s);yn(i,r)||(n.uniform1iv(this.addr,r),_n(i,r));for(let o=0;o!==s;++o)t.setTexture3D(e[o]||Y0,r[o])}function hS(n,e,t){let i=this.cache,s=e.length,r=_u(t,s);yn(i,r)||(n.uniform1iv(this.addr,r),_n(i,r));for(let o=0;o!==s;++o)t.setTextureCube(e[o]||K0,r[o])}function uS(n,e,t){let i=this.cache,s=e.length,r=_u(t,s);yn(i,r)||(n.uniform1iv(this.addr,r),_n(i,r));for(let o=0;o!==s;++o)t.setTexture2DArray(e[o]||X0,r[o])}function dS(n){switch(n){case 5126:return XM;case 35664:return YM;case 35665:return KM;case 35666:return ZM;case 35674:return JM;case 35675:return jM;case 35676:return QM;case 5124:case 35670:return eS;case 35667:case 35671:return tS;case 35668:case 35672:return nS;case 35669:case 35673:return iS;case 5125:return sS;case 36294:return rS;case 36295:return oS;case 36296:return aS;case 35678:case 36198:case 36298:case 36306:case 35682:return lS;case 35679:case 36299:case 36307:return cS;case 35680:case 36300:case 36308:case 36293:return hS;case 36289:case 36303:case 36311:case 36292:return uS}}var Af=class{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.setValue=qM(t.type)}},Rf=class{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=dS(t.type)}},Cf=class{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,i){let s=this.seq;for(let r=0,o=s.length;r!==o;++r){let a=s[r];a.setValue(e,t[a.id],i)}}},wf=/(\w+)(\])?(\[|\.)?/g;function k0(n,e){n.seq.push(e),n.map[e.id]=e}function fS(n,e,t){let i=n.name,s=i.length;for(wf.lastIndex=0;;){let r=wf.exec(i),o=wf.lastIndex,a=r[1],l=r[2]==="]",c=r[3];if(l&&(a=a|0),c===void 0||c==="["&&o+2===s){k0(t,c===void 0?new Af(a,n,e):new Rf(a,n,e));break}else{let f=t.map[a];f===void 0&&(f=new Cf(a),k0(t,f)),t=f}}}var Wo=class{constructor(e,t){this.seq=[],this.map={};let i=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let o=0;o<i;++o){let a=e.getActiveUniform(t,o),l=e.getUniformLocation(t,a.name);fS(a,l,this)}let s=[],r=[];for(let o of this.seq)o.type===e.SAMPLER_2D_SHADOW||o.type===e.SAMPLER_CUBE_SHADOW||o.type===e.SAMPLER_2D_ARRAY_SHADOW?s.push(o):r.push(o);s.length>0&&(this.seq=s.concat(r))}setValue(e,t,i,s){let r=this.map[t];r!==void 0&&r.setValue(e,i,s)}setOptional(e,t,i){let s=t[i];s!==void 0&&this.setValue(e,i,s)}static upload(e,t,i,s){for(let r=0,o=t.length;r!==o;++r){let a=t[r],l=i[a.id];l.needsUpdate!==!1&&a.setValue(e,l.value,s)}}static seqWithValue(e,t){let i=[];for(let s=0,r=e.length;s!==r;++s){let o=e[s];o.id in t&&i.push(o)}return i}};function L0(n,e,t){let i=n.createShader(e);return n.shaderSource(i,t),n.compileShader(i),i}var pS=37297,mS=0;function gS(n,e){let t=n.split(`
`),i=[],s=Math.max(e-6,0),r=Math.min(e+6,t.length);for(let o=s;o<r;o++){let a=o+1;i.push(`${a===e?">":" "} ${a}: ${t[o]}`)}return i.join(`
`)}var D0=new et;function yS(n){ct._getMatrix(D0,ct.workingColorSpace,n);let e=`mat3( ${D0.elements.map(t=>t.toFixed(4))} )`;switch(ct.getTransfer(n)){case Oa:return[e,"LinearTransferOETF"];case bt:return[e,"sRGBTransferOETF"];default:return Xe("WebGLProgram: Unsupported color space: ",n),[e,"LinearTransferOETF"]}}function N0(n,e,t){let i=n.getShaderParameter(e,n.COMPILE_STATUS),r=(n.getShaderInfoLog(e)||"").trim();if(i&&r==="")return"";let o=/ERROR: 0:(\d+)/.exec(r);if(o){let a=parseInt(o[1]);return t.toUpperCase()+`

`+r+`

`+gS(n.getShaderSource(e),a)}else return r}function _S(n,e){let t=yS(e);return[`vec4 ${n}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}var vS={[fl]:"Linear",[pl]:"Reinhard",[ml]:"Cineon",[Or]:"ACESFilmic",[yl]:"AgX",[_l]:"Neutral",[gl]:"Custom"};function xS(n,e){let t=vS[e];return t===void 0?(Xe("WebGLProgram: Unsupported toneMapping:",e),"vec3 "+n+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+n+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}var pu=new I;function bS(){ct.getLuminanceCoefficients(pu);let n=pu.x.toFixed(4),e=pu.y.toFixed(4),t=pu.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${n}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function MS(n){return[n.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",n.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Pl).join(`
`)}function SS(n){let e=[];for(let t in n){let i=n[t];i!==!1&&e.push("#define "+t+" "+i)}return e.join(`
`)}function wS(n,e){let t={},i=n.getProgramParameter(e,n.ACTIVE_ATTRIBUTES);for(let s=0;s<i;s++){let r=n.getActiveAttrib(e,s),o=r.name,a=1;r.type===n.FLOAT_MAT2&&(a=2),r.type===n.FLOAT_MAT3&&(a=3),r.type===n.FLOAT_MAT4&&(a=4),t[o]={type:r.type,location:n.getAttribLocation(e,o),locationSize:a}}return t}function Pl(n){return n!==""}function U0(n,e){let t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return n.replace(/NUM_SUN_LIGHTS/g,e.numSunLights).replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_SUN_LIGHT_SHADOWS/g,e.numSunLightShadows).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function O0(n,e){return n.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}var ES=/^[ \t]*#include +<([\w\d./]+)>/gm;function Pf(n){return n.replace(ES,AS)}var TS=new Map;function AS(n,e){let t=ot[e];if(t===void 0){let i=TS.get(e);if(i!==void 0)t=ot[i],Xe('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,i);else throw new Error("THREE.WebGLProgram: Can not resolve #include <"+e+">")}return Pf(t)}var RS=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function F0(n){return n.replace(RS,CS)}function CS(n,e,t,i){let s="";for(let r=parseInt(e);r<parseInt(t);r++)s+=i.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function B0(n){let e=`precision ${n.precision} float;
	precision ${n.precision} int;
	precision ${n.precision} sampler2D;
	precision ${n.precision} samplerCube;
	precision ${n.precision} sampler3D;
	precision ${n.precision} sampler2DArray;
	precision ${n.precision} sampler2DShadow;
	precision ${n.precision} samplerCubeShadow;
	precision ${n.precision} sampler2DArrayShadow;
	precision ${n.precision} isampler2D;
	precision ${n.precision} isampler3D;
	precision ${n.precision} isamplerCube;
	precision ${n.precision} isampler2DArray;
	precision ${n.precision} usampler2D;
	precision ${n.precision} usampler3D;
	precision ${n.precision} usamplerCube;
	precision ${n.precision} usampler2DArray;
	`;return n.precision==="highp"?e+=`
#define HIGH_PRECISION`:n.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:n.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}var PS={[Nr]:"SHADOWMAP_TYPE_PCF",[Fo]:"SHADOWMAP_TYPE_VSM"};function IS(n){return PS[n.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}var kS={[tr]:"ENVMAP_TYPE_CUBE",[Fr]:"ENVMAP_TYPE_CUBE",[vl]:"ENVMAP_TYPE_CUBE_UV"};function LS(n){return n.envMap===!1?"ENVMAP_TYPE_CUBE":kS[n.envMapMode]||"ENVMAP_TYPE_CUBE"}var DS={[Fr]:"ENVMAP_MODE_REFRACTION"};function NS(n){return n.envMap===!1?"ENVMAP_MODE_REFLECTION":DS[n.envMapMode]||"ENVMAP_MODE_REFLECTION"}var US={[wh]:"ENVMAP_BLENDING_MULTIPLY",[Qm]:"ENVMAP_BLENDING_MIX",[e0]:"ENVMAP_BLENDING_ADD"};function OS(n){return n.envMap===!1?"ENVMAP_BLENDING_NONE":US[n.combine]||"ENVMAP_BLENDING_NONE"}function FS(n){let e=n.envMapCubeUVHeight;if(e===null)return null;let t=Math.log2(e)-2,i=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),112)),texelHeight:i,maxMip:t}}function BS(n,e,t,i){let s=n.getContext(),r=t.defines,o=t.vertexShader,a=t.fragmentShader,l=IS(t),c=LS(t),d=NS(t),f=OS(t),h=FS(t),u=MS(t),m=SS(r),y=s.createProgram(),g,p,v=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(g=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,m].filter(Pl).join(`
`),g.length>0&&(g+=`
`),p=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,m].filter(Pl).join(`
`),p.length>0&&(p+=`
`)):(g=[B0(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,m,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+d:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexNormals?"#define HAS_NORMAL":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Pl).join(`
`),p=[B0(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,m,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.envMap?"#define "+d:"",t.envMap?"#define "+f:"",h?"#define CUBEUV_TEXEL_WIDTH "+h.texelWidth:"",h?"#define CUBEUV_TEXEL_HEIGHT "+h.texelHeight:"",h?"#define CUBEUV_MAX_MIP "+h.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.retroreflection?"#define USE_RETROREFLECTION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas||t.batchingColor?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.numLightProbeGrids>0?"#define USE_LIGHT_PROBES_GRID":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==qi?"#define TONE_MAPPING":"",t.toneMapping!==qi?ot.tonemapping_pars_fragment:"",t.toneMapping!==qi?xS("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",ot.colorspace_pars_fragment,_S("linearToOutputTexel",t.outputColorSpace),bS(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(Pl).join(`
`)),o=Pf(o),o=U0(o,t),o=O0(o,t),a=Pf(a),a=U0(a,t),a=O0(a,t),o=F0(o),a=F0(a),t.isRawShaderMaterial!==!0&&(v=`#version 300 es
`,g=[u,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+g,p=["#define varying in",t.glslVersion===lf?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===lf?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+p);let M=v+g+o,_=v+p+a,S=L0(s,s.VERTEX_SHADER,M),E=L0(s,s.FRAGMENT_SHADER,_);s.attachShader(y,S),s.attachShader(y,E),t.index0AttributeName!==void 0?s.bindAttribLocation(y,0,t.index0AttributeName):t.hasPositionAttribute===!0&&s.bindAttribLocation(y,0,"position"),s.linkProgram(y);function P(C){if(n.debug.checkShaderErrors){let k=s.getProgramInfoLog(y)||"",D=s.getShaderInfoLog(S)||"",L=s.getShaderInfoLog(E)||"",F=k.trim(),B=D.trim(),$=L.trim(),se=!0,X=!0;if(s.getProgramParameter(y,s.LINK_STATUS)===!1)if(se=!1,typeof n.debug.onShaderError=="function")n.debug.onShaderError(s,y,S,E);else{let Q=N0(s,S,"vertex"),ne=N0(s,E,"fragment");qe("WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(y,s.VALIDATE_STATUS)+`

Material Name: `+C.name+`
Material Type: `+C.type+`

Program Info Log: `+F+`
`+Q+`
`+ne)}else F!==""?Xe("WebGLProgram: Program Info Log:",F):(B===""||$==="")&&(X=!1);X&&(C.diagnostics={runnable:se,programLog:F,vertexShader:{log:B,prefix:g},fragmentShader:{log:$,prefix:p}})}s.deleteShader(S),s.deleteShader(E),x=new Wo(s,y),A=wS(s,y)}let x;this.getUniforms=function(){return x===void 0&&P(this),x};let A;this.getAttributes=function(){return A===void 0&&P(this),A};let T=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return T===!1&&(T=s.getProgramParameter(y,pS)),T},this.destroy=function(){i.releaseStatesOfProgram(this),s.deleteProgram(y),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=mS++,this.cacheKey=e,this.usedTimes=1,this.program=y,this.vertexShader=S,this.fragmentShader=E,this}var HS=0,If=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e,t,i){let s=this._getShaderCacheForMaterial(e);return s.has(t)===!1&&(s.add(t),t.usedTimes++),s.has(i)===!1&&(s.add(i),i.usedTimes++),this}remove(e){let t=this.materialCache.get(e);for(let i of t)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderStage(e){return this._getShaderStage(e.vertexShader)}getFragmentShaderStage(e){return this._getShaderStage(e.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){let t=this.materialCache,i=t.get(e);return i===void 0&&(i=new Set,t.set(e,i)),i}_getShaderStage(e){let t=this.shaderCache,i=t.get(e);return i===void 0&&(i=new kf(e),t.set(e,i)),i}},kf=class{constructor(e){this.id=HS++,this.code=e,this.usedTimes=0}};function zS(n){return n===sr||n===El||n===Tl}function GS(n,e,t,i,s,r){let o=new Po,a=new If,l=new Set,c=[],d=new Map,f=i.logarithmicDepthBuffer,h=i.precision,u={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function m(x){return l.add(x),x===0?"uv":`uv${x}`}function y(x,A,T,C,k,D){let L=C.fog,F=k.geometry,B=x.isMeshStandardMaterial||x.isMeshLambertMaterial||x.isMeshPhongMaterial?C.environment:null,$=x.isMeshStandardMaterial||x.isMeshLambertMaterial&&!x.envMap||x.isMeshPhongMaterial&&!x.envMap,se=e.get(x.envMap||B,$),X=se&&se.mapping===vl?se.image.height:null,Q=u[x.type];x.precision!==null&&(h=i.getMaxPrecision(x.precision),h!==x.precision&&Xe("WebGLProgram.getParameters:",x.precision,"not supported, using",h,"instead."));let ne=F.morphAttributes.position||F.morphAttributes.normal||F.morphAttributes.color,Oe=ne!==void 0?ne.length:0,Ce=0;F.morphAttributes.position!==void 0&&(Ce=1),F.morphAttributes.normal!==void 0&&(Ce=2),F.morphAttributes.color!==void 0&&(Ce=3);let mt,at,Le,V;if(Q){let Ut=fs[Q];mt=Ut.vertexShader,at=Ut.fragmentShader}else{mt=x.vertexShader,at=x.fragmentShader;let Ut=a.getVertexShaderStage(x),St=a.getFragmentShaderStage(x);a.update(x,Ut,St),Le=Ut.id,V=St.id}let J=n.getRenderTarget(),fe=n.state.buffers.depth.getReversed(),Ye=k.isInstancedMesh===!0,Ae=k.isBatchedMesh===!0,Ke=!!x.map,Rt=!!x.matcap,ie=!!se,ae=!!x.aoMap,ce=!!x.lightMap,he=!!x.bumpMap&&x.wireframe===!1,me=!!x.normalMap,We=!!x.displacementMap,Ve=!!x.emissiveMap,Ze=!!x.metalnessMap,tt=!!x.roughnessMap,N=x.anisotropy>0,Mt=x.clearcoat>0,ut=x.dispersion>0,R=x.retroreflectivity>0,b=x.iridescence>0,H=x.sheen>0,W=x.transmission>0,Y=N&&!!x.anisotropyMap,ue=Mt&&!!x.clearcoatMap,pe=Mt&&!!x.clearcoatNormalMap,Z=Mt&&!!x.clearcoatRoughnessMap,te=b&&!!x.iridescenceMap,ye=b&&!!x.iridescenceThicknessMap,He=H&&!!x.sheenColorMap,be=H&&!!x.sheenRoughnessMap,_e=!!x.specularMap,ze=!!x.specularColorMap,$e=!!x.specularIntensityMap,nt=W&&!!x.transmissionMap,O=W&&!!x.thicknessMap,ve=!!x.gradientMap,ee=!!x.alphaMap,xe=x.alphaTest>0,Te=!!x.alphaHash,re=!!x.extensions,Ge=qi;x.toneMapped&&(J===null||J.isXRRenderTarget===!0)&&(Ge=n.toneMapping);let Fe={shaderID:Q,shaderType:x.type,shaderName:x.name,vertexShader:mt,fragmentShader:at,defines:x.defines,customVertexShaderID:Le,customFragmentShaderID:V,isRawShaderMaterial:x.isRawShaderMaterial===!0,glslVersion:x.glslVersion,precision:h,batching:Ae,batchingColor:Ae&&k._colorsTexture!==null,instancing:Ye,instancingColor:Ye&&k.instanceColor!==null,instancingMorph:Ye&&k.morphTexture!==null,outputColorSpace:J===null?n.outputColorSpace:J.isXRRenderTarget===!0?J.texture.colorSpace:ct.workingColorSpace,alphaToCoverage:!!x.alphaToCoverage,map:Ke,matcap:Rt,envMap:ie,envMapMode:ie&&se.mapping,envMapCubeUVHeight:X,aoMap:ae,lightMap:ce,bumpMap:he,normalMap:me,displacementMap:We,emissiveMap:Ve,normalMapObjectSpace:me&&x.normalMapType===i0,normalMapTangentSpace:me&&x.normalMapType===Al,packedNormalMap:me&&x.normalMapType===Al&&zS(x.normalMap.format),metalnessMap:Ze,roughnessMap:tt,anisotropy:N,anisotropyMap:Y,clearcoat:Mt,clearcoatMap:ue,clearcoatNormalMap:pe,clearcoatRoughnessMap:Z,dispersion:ut,retroreflection:R,iridescence:b,iridescenceMap:te,iridescenceThicknessMap:ye,sheen:H,sheenColorMap:He,sheenRoughnessMap:be,specularMap:_e,specularColorMap:ze,specularIntensityMap:$e,transmission:W,transmissionMap:nt,thicknessMap:O,gradientMap:ve,opaque:x.transparent===!1&&x.blending===Bo&&x.alphaToCoverage===!1,alphaMap:ee,alphaTest:xe,alphaHash:Te,combine:x.combine,mapUv:Ke&&m(x.map.channel),aoMapUv:ae&&m(x.aoMap.channel),lightMapUv:ce&&m(x.lightMap.channel),bumpMapUv:he&&m(x.bumpMap.channel),normalMapUv:me&&m(x.normalMap.channel),displacementMapUv:We&&m(x.displacementMap.channel),emissiveMapUv:Ve&&m(x.emissiveMap.channel),metalnessMapUv:Ze&&m(x.metalnessMap.channel),roughnessMapUv:tt&&m(x.roughnessMap.channel),anisotropyMapUv:Y&&m(x.anisotropyMap.channel),clearcoatMapUv:ue&&m(x.clearcoatMap.channel),clearcoatNormalMapUv:pe&&m(x.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Z&&m(x.clearcoatRoughnessMap.channel),iridescenceMapUv:te&&m(x.iridescenceMap.channel),iridescenceThicknessMapUv:ye&&m(x.iridescenceThicknessMap.channel),sheenColorMapUv:He&&m(x.sheenColorMap.channel),sheenRoughnessMapUv:be&&m(x.sheenRoughnessMap.channel),specularMapUv:_e&&m(x.specularMap.channel),specularColorMapUv:ze&&m(x.specularColorMap.channel),specularIntensityMapUv:$e&&m(x.specularIntensityMap.channel),transmissionMapUv:nt&&m(x.transmissionMap.channel),thicknessMapUv:O&&m(x.thicknessMap.channel),alphaMapUv:ee&&m(x.alphaMap.channel),vertexTangents:!!F.attributes.tangent&&(me||N),vertexNormals:!!F.attributes.normal,vertexColors:x.vertexColors,vertexAlphas:x.vertexColors===!0&&!!F.attributes.color&&F.attributes.color.itemSize===4,pointsUvs:k.isPoints===!0&&!!F.attributes.uv&&(Ke||ee),fog:!!L,useFog:x.fog===!0,fogExp2:!!L&&L.isFogExp2,flatShading:x.wireframe===!1&&(x.flatShading===!0||F.attributes.normal===void 0&&me===!1&&(x.isMeshLambertMaterial||x.isMeshPhongMaterial||x.isMeshStandardMaterial||x.isMeshPhysicalMaterial)),sizeAttenuation:x.sizeAttenuation===!0,logarithmicDepthBuffer:f,reversedDepthBuffer:fe,skinning:k.isSkinnedMesh===!0,hasPositionAttribute:F.attributes.position!==void 0,morphTargets:F.morphAttributes.position!==void 0,morphNormals:F.morphAttributes.normal!==void 0,morphColors:F.morphAttributes.color!==void 0,morphTargetsCount:Oe,morphTextureStride:Ce,numSunLights:A.sun.length,numDirLights:A.directional.length,numPointLights:A.point.length,numSpotLights:A.spot.length,numSpotLightMaps:A.spotLightMap.length,numRectAreaLights:A.rectArea.length,numHemiLights:A.hemi.length,numSunLightShadows:A.sunShadowMap.length,numDirLightShadows:A.directionalShadowMap.length,numPointLightShadows:A.pointShadowMap.length,numSpotLightShadows:A.spotShadowMap.length,numSpotLightShadowsWithMaps:A.numSpotLightShadowsWithMaps,numLightProbes:A.numLightProbes,numLightProbeGrids:D.length,numClippingPlanes:r.numPlanes,numClipIntersection:r.numIntersection,dithering:x.dithering,shadowMapEnabled:n.shadowMap.enabled&&T.length>0,shadowMapType:n.shadowMap.type,toneMapping:Ge,decodeVideoTexture:Ke&&x.map.isVideoTexture===!0&&ct.getTransfer(x.map.colorSpace)===bt,decodeVideoTextureEmissive:Ve&&x.emissiveMap.isVideoTexture===!0&&ct.getTransfer(x.emissiveMap.colorSpace)===bt,premultipliedAlpha:x.premultipliedAlpha,doubleSided:x.side===pn,flipSided:x.side===Pn,useDepthPacking:x.depthPacking>=0,depthPacking:x.depthPacking||0,index0AttributeName:x.index0AttributeName,extensionClipCullDistance:re&&x.extensions.clipCullDistance===!0&&t.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(re&&x.extensions.multiDraw===!0||Ae)&&t.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:t.has("KHR_parallel_shader_compile"),customProgramCacheKey:x.customProgramCacheKey()};return Fe.vertexUv1s=l.has(1),Fe.vertexUv2s=l.has(2),Fe.vertexUv3s=l.has(3),l.clear(),Fe}function g(x){let A=[];if(x.shaderID?A.push(x.shaderID):(A.push(x.customVertexShaderID),A.push(x.customFragmentShaderID)),x.defines!==void 0)for(let T in x.defines)A.push(T),A.push(x.defines[T]);return x.isRawShaderMaterial===!1&&(p(A,x),v(A,x),A.push(n.outputColorSpace)),A.push(x.customProgramCacheKey),A.join()}function p(x,A){x.push(A.precision),x.push(A.outputColorSpace),x.push(A.envMapMode),x.push(A.envMapCubeUVHeight),x.push(A.mapUv),x.push(A.alphaMapUv),x.push(A.lightMapUv),x.push(A.aoMapUv),x.push(A.bumpMapUv),x.push(A.normalMapUv),x.push(A.displacementMapUv),x.push(A.emissiveMapUv),x.push(A.metalnessMapUv),x.push(A.roughnessMapUv),x.push(A.anisotropyMapUv),x.push(A.clearcoatMapUv),x.push(A.clearcoatNormalMapUv),x.push(A.clearcoatRoughnessMapUv),x.push(A.iridescenceMapUv),x.push(A.iridescenceThicknessMapUv),x.push(A.sheenColorMapUv),x.push(A.sheenRoughnessMapUv),x.push(A.specularMapUv),x.push(A.specularColorMapUv),x.push(A.specularIntensityMapUv),x.push(A.transmissionMapUv),x.push(A.thicknessMapUv),x.push(A.combine),x.push(A.fogExp2),x.push(A.sizeAttenuation),x.push(A.morphTargetsCount),x.push(A.morphAttributeCount),x.push(A.numSunLights),x.push(A.numDirLights),x.push(A.numPointLights),x.push(A.numSpotLights),x.push(A.numSpotLightMaps),x.push(A.numHemiLights),x.push(A.numRectAreaLights),x.push(A.numSunLightShadows),x.push(A.numDirLightShadows),x.push(A.numPointLightShadows),x.push(A.numSpotLightShadows),x.push(A.numSpotLightShadowsWithMaps),x.push(A.numLightProbes),x.push(A.shadowMapType),x.push(A.toneMapping),x.push(A.numClippingPlanes),x.push(A.numClipIntersection),x.push(A.depthPacking)}function v(x,A){o.disableAll(),A.instancing&&o.enable(0),A.instancingColor&&o.enable(1),A.instancingMorph&&o.enable(2),A.matcap&&o.enable(3),A.envMap&&o.enable(4),A.normalMapObjectSpace&&o.enable(5),A.normalMapTangentSpace&&o.enable(6),A.clearcoat&&o.enable(7),A.iridescence&&o.enable(8),A.alphaTest&&o.enable(9),A.vertexColors&&o.enable(10),A.vertexAlphas&&o.enable(11),A.vertexUv1s&&o.enable(12),A.vertexUv2s&&o.enable(13),A.vertexUv3s&&o.enable(14),A.vertexTangents&&o.enable(15),A.anisotropy&&o.enable(16),A.alphaHash&&o.enable(17),A.batching&&o.enable(18),A.dispersion&&o.enable(19),A.retroreflection&&o.enable(24),A.batchingColor&&o.enable(20),A.gradientMap&&o.enable(21),A.packedNormalMap&&o.enable(22),A.vertexNormals&&o.enable(23),x.push(o.mask),o.disableAll(),A.fog&&o.enable(0),A.useFog&&o.enable(1),A.flatShading&&o.enable(2),A.logarithmicDepthBuffer&&o.enable(3),A.reversedDepthBuffer&&o.enable(4),A.skinning&&o.enable(5),A.morphTargets&&o.enable(6),A.morphNormals&&o.enable(7),A.morphColors&&o.enable(8),A.premultipliedAlpha&&o.enable(9),A.shadowMapEnabled&&o.enable(10),A.doubleSided&&o.enable(11),A.flipSided&&o.enable(12),A.useDepthPacking&&o.enable(13),A.dithering&&o.enable(14),A.transmission&&o.enable(15),A.sheen&&o.enable(16),A.opaque&&o.enable(17),A.pointsUvs&&o.enable(18),A.decodeVideoTexture&&o.enable(19),A.decodeVideoTextureEmissive&&o.enable(20),A.alphaToCoverage&&o.enable(21),A.numLightProbeGrids>0&&o.enable(22),A.hasPositionAttribute&&o.enable(23),x.push(o.mask)}function M(x){let A=u[x.type],T;if(A){let C=fs[A];T=Is.clone(C.uniforms)}else T=x.uniforms;return T}function _(x,A){let T=d.get(A);return T!==void 0?++T.usedTimes:(T=new BS(n,A,x,s),c.push(T),d.set(A,T)),T}function S(x){if(--x.usedTimes===0){let A=c.indexOf(x);c[A]=c[c.length-1],c.pop(),d.delete(x.cacheKey),x.destroy()}}function E(x){a.remove(x)}function P(){a.dispose()}return{getParameters:y,getProgramCacheKey:g,getUniforms:M,acquireProgram:_,releaseProgram:S,releaseShaderCache:E,programs:c,dispose:P}}function VS(){let n=new WeakMap;function e(o){return n.has(o)}function t(o){let a=n.get(o);return a===void 0&&(a={},n.set(o,a)),a}function i(o){n.delete(o)}function s(o,a,l){n.get(o)[a]=l}function r(){n=new WeakMap}return{has:e,get:t,remove:i,update:s,dispose:r}}function WS(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.material.id!==e.material.id?n.material.id-e.material.id:n.materialVariant!==e.materialVariant?n.materialVariant-e.materialVariant:n.z!==e.z?n.z-e.z:n.id-e.id}function H0(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.z!==e.z?e.z-n.z:n.id-e.id}function z0(){let n=[],e=0,t=[],i=[],s=[];function r(){e=0,t.length=0,i.length=0,s.length=0}function o(h){let u=0;return h.isInstancedMesh&&(u+=2),h.isSkinnedMesh&&(u+=1),u}function a(h,u,m,y,g,p){let v=n[e];return v===void 0?(v={id:h.id,object:h,geometry:u,material:m,materialVariant:o(h),groupOrder:y,renderOrder:h.renderOrder,z:g,group:p},n[e]=v):(v.id=h.id,v.object=h,v.geometry=u,v.material=m,v.materialVariant=o(h),v.groupOrder=y,v.renderOrder=h.renderOrder,v.z=g,v.group=p),e++,v}function l(h,u,m,y,g,p,v){v.reversedDepth===!0&&(g=-g);let M=a(h,u,m,y,g,p);m.transmission>0?i.push(M):m.transparent===!0?s.push(M):t.push(M)}function c(h,u,m,y,g,p){let v=a(h,u,m,y,g,p);m.transmission>0?i.unshift(v):m.transparent===!0?s.unshift(v):t.unshift(v)}function d(h,u){t.length>1&&t.sort(h||WS),i.length>1&&i.sort(u||H0),s.length>1&&s.sort(u||H0)}function f(){for(let h=e,u=n.length;h<u;h++){let m=n[h];if(m.id===null)break;m.id=null,m.object=null,m.geometry=null,m.material=null,m.group=null}}return{opaque:t,transmissive:i,transparent:s,init:r,push:l,unshift:c,finish:f,sort:d}}function $S(){let n=new WeakMap;function e(i,s){let r=n.get(i),o;return r===void 0?(o=new z0,n.set(i,[o])):s>=r.length?(o=new z0,r.push(o)):o=r[s],o}function t(){n=new WeakMap}return{get:e,dispose:t}}function qS(){let n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"SunLight":case"DirectionalLight":t={direction:new I,color:new Ie};break;case"SpotLight":t={position:new I,direction:new I,color:new Ie,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new I,color:new Ie,distance:0,decay:0};break;case"HemisphereLight":t={direction:new I,skyColor:new Ie,groundColor:new Ie};break;case"RectAreaLight":t={color:new Ie,position:new I,halfWidth:new I,halfHeight:new I};break}return n[e.id]=t,t}}}function XS(){let n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"SunLight":case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new j};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new j};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new j,shadowCameraNear:1,shadowCameraFar:1e3};break}return n[e.id]=t,t}}}var YS=0;function KS(n,e){return(e.castShadow?2:0)-(n.castShadow?2:0)+(e.map?1:0)-(n.map?1:0)}function ZS(n){let e=new qS,t=XS(),i={version:0,hash:{sunLength:-1,directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numSunShadows:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],sun:[],sunShadow:[],sunShadowMap:[],sunShadowMatrix:[],sunShadowCascade:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)i.probe.push(new I);let s=new I,r=new Et,o=new Et;function a(c){let d=0,f=0,h=0;for(let k=0;k<9;k++)i.probe[k].set(0,0,0);let u=0,m=0,y=0,g=0,p=0,v=0,M=0,_=0,S=0,E=0,P=0,x=0,A=0,T=0;c.sort(KS);for(let k=0,D=c.length;k<D;k++){let L=c[k],F=L.color,B=L.intensity,$=L.distance,se=null;if(L.shadow&&L.shadow.map&&(L.shadow.map.texture.format===sr?se=L.shadow.map.texture:se=L.shadow.map.depthTexture||L.shadow.map.texture),L.isAmbientLight)d+=F.r*B,f+=F.g*B,h+=F.b*B;else if(L.isLightProbe){for(let X=0;X<9;X++)i.probe[X].addScaledVector(L.sh.coefficients[X],B);T++}else if(L.isSunLight){let X=e.get(L);if(X.color.copy(L.color).multiplyScalar(L.intensity),L.castShadow){let Q=L.shadow,ne=t.get(L);ne.shadowIntensity=Q.intensity,ne.shadowBias=Q.bias,ne.shadowNormalBias=Q.normalBias,ne.shadowRadius=Q.radius,ne.shadowMapSize.copy(Q.mapSize).multiply(Q.getFrameExtents()),i.sunShadow[m]=ne,i.sunShadowMap[m]=se;let Oe=Q.getViewportCount();for(let Ce=0;Ce<Oe;Ce++)i.sunShadowMatrix[y+Ce]=Q.getMatrix(Ce),i.sunShadowCascade[y+Ce]=Q._cascadeData[Ce];y+=Oe,m++}i.sun[u]=X,u++}else if(L.isDirectionalLight){let X=e.get(L);if(X.color.copy(L.color).multiplyScalar(L.intensity),L.castShadow){let Q=L.shadow,ne=t.get(L);ne.shadowIntensity=Q.intensity,ne.shadowBias=Q.bias,ne.shadowNormalBias=Q.normalBias,ne.shadowRadius=Q.radius,ne.shadowMapSize=Q.mapSize,i.directionalShadow[g]=ne,i.directionalShadowMap[g]=se,i.directionalShadowMatrix[g]=L.shadow.matrix,S++}i.directional[g]=X,g++}else if(L.isSpotLight){let X=e.get(L);X.position.setFromMatrixPosition(L.matrixWorld),X.color.copy(F).multiplyScalar(B),X.distance=$,X.coneCos=Math.cos(L.angle),X.penumbraCos=Math.cos(L.angle*(1-L.penumbra)),X.decay=L.decay,i.spot[v]=X;let Q=L.shadow;if(L.map&&(i.spotLightMap[x]=L.map,x++,Q.updateMatrices(L),L.castShadow&&A++),i.spotLightMatrix[v]=Q.matrix,L.castShadow){let ne=t.get(L);ne.shadowIntensity=Q.intensity,ne.shadowBias=Q.bias,ne.shadowNormalBias=Q.normalBias,ne.shadowRadius=Q.radius,ne.shadowMapSize=Q.mapSize,i.spotShadow[v]=ne,i.spotShadowMap[v]=se,P++}v++}else if(L.isRectAreaLight){let X=e.get(L);X.color.copy(F).multiplyScalar(B),X.halfWidth.set(L.width*.5,0,0),X.halfHeight.set(0,L.height*.5,0),i.rectArea[M]=X,M++}else if(L.isPointLight){let X=e.get(L);if(X.color.copy(L.color).multiplyScalar(L.intensity),X.distance=L.distance,X.decay=L.decay,L.castShadow){let Q=L.shadow,ne=t.get(L);ne.shadowIntensity=Q.intensity,ne.shadowBias=Q.bias,ne.shadowNormalBias=Q.normalBias,ne.shadowRadius=Q.radius,ne.shadowMapSize=Q.mapSize,ne.shadowCameraNear=Q.camera.near,ne.shadowCameraFar=Q.camera.far,i.pointShadow[p]=ne,i.pointShadowMap[p]=se,i.pointShadowMatrix[p]=L.shadow.matrix,E++}i.point[p]=X,p++}else if(L.isHemisphereLight){let X=e.get(L);X.skyColor.copy(L.color).multiplyScalar(B),X.groundColor.copy(L.groundColor).multiplyScalar(B),i.hemi[_]=X,_++}}M>0&&(n.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=Me.LTC_FLOAT_1,i.rectAreaLTC2=Me.LTC_FLOAT_2):(i.rectAreaLTC1=Me.LTC_HALF_1,i.rectAreaLTC2=Me.LTC_HALF_2)),i.ambient[0]=d,i.ambient[1]=f,i.ambient[2]=h;let C=i.hash;(C.sunLength!==u||C.directionalLength!==g||C.pointLength!==p||C.spotLength!==v||C.rectAreaLength!==M||C.hemiLength!==_||C.numSunShadows!==m||C.numDirectionalShadows!==S||C.numPointShadows!==E||C.numSpotShadows!==P||C.numSpotMaps!==x||C.numLightProbes!==T)&&(i.sun.length=u,i.directional.length=g,i.spot.length=v,i.rectArea.length=M,i.point.length=p,i.hemi.length=_,i.sunShadow.length=m,i.sunShadowMap.length=m,i.sunShadowMatrix.length=y,i.sunShadowCascade.length=y,i.directionalShadow.length=S,i.directionalShadowMap.length=S,i.directionalShadowMatrix.length=S,i.pointShadow.length=E,i.pointShadowMap.length=E,i.pointShadowMatrix.length=E,i.spotShadow.length=P,i.spotShadowMap.length=P,i.spotLightMatrix.length=P+x-A,i.spotLightMap.length=x,i.numSpotLightShadowsWithMaps=A,i.numLightProbes=T,C.sunLength=u,C.directionalLength=g,C.pointLength=p,C.spotLength=v,C.rectAreaLength=M,C.hemiLength=_,C.numSunShadows=m,C.numDirectionalShadows=S,C.numPointShadows=E,C.numSpotShadows=P,C.numSpotMaps=x,C.numLightProbes=T,i.version=YS++)}function l(c,d){let f=0,h=0,u=0,m=0,y=0,g=0,p=d.matrixWorldInverse;for(let v=0,M=c.length;v<M;v++){let _=c[v];if(_.isSunLight){let S=i.sun[f];S.direction.setFromMatrixPosition(_.matrixWorld),S.direction.transformDirection(p),f++}else if(_.isDirectionalLight){let S=i.directional[h];S.direction.setFromMatrixPosition(_.matrixWorld),s.setFromMatrixPosition(_.target.matrixWorld),S.direction.sub(s),S.direction.transformDirection(p),h++}else if(_.isSpotLight){let S=i.spot[m];S.position.setFromMatrixPosition(_.matrixWorld),S.position.applyMatrix4(p),S.direction.setFromMatrixPosition(_.matrixWorld),s.setFromMatrixPosition(_.target.matrixWorld),S.direction.sub(s),S.direction.transformDirection(p),m++}else if(_.isRectAreaLight){let S=i.rectArea[y];S.position.setFromMatrixPosition(_.matrixWorld),S.position.applyMatrix4(p),o.identity(),r.copy(_.matrixWorld),r.premultiply(p),o.extractRotation(r),S.halfWidth.set(_.width*.5,0,0),S.halfHeight.set(0,_.height*.5,0),S.halfWidth.applyMatrix4(o),S.halfHeight.applyMatrix4(o),y++}else if(_.isPointLight){let S=i.point[u];S.position.setFromMatrixPosition(_.matrixWorld),S.position.applyMatrix4(p),u++}else if(_.isHemisphereLight){let S=i.hemi[g];S.direction.setFromMatrixPosition(_.matrixWorld),S.direction.transformDirection(p),g++}}}return{setup:a,setupView:l,state:i}}function G0(n){let e=new ZS(n),t=[],i=[],s=[];function r(h){f.camera=h,t.length=0,i.length=0,s.length=0}function o(h){t.push(h)}function a(h){i.push(h)}function l(h){s.push(h)}function c(){e.setup(t)}function d(h){e.setupView(t,h)}let f={lightsArray:t,shadowsArray:i,lightProbeGridArray:s,camera:null,lights:e,transmissionRenderTarget:{},textureUnits:0};return{init:r,state:f,setupLights:c,setupLightsView:d,pushLight:o,pushShadow:a,pushLightProbeGrid:l}}function JS(n){let e=new WeakMap;function t(s,r=0){let o=e.get(s),a;return o===void 0?(a=new G0(n),e.set(s,[a])):r>=o.length?(a=new G0(n),o.push(a)):a=o[r],a}function i(){e=new WeakMap}return{get:t,dispose:i}}var jS=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,QS=`uniform sampler2D shadow_pass;
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
}`,ew=[new I(1,0,0),new I(-1,0,0),new I(0,1,0),new I(0,-1,0),new I(0,0,1),new I(0,0,-1)],tw=[new I(0,-1,0),new I(0,-1,0),new I(0,0,1),new I(0,0,-1),new I(0,-1,0),new I(0,-1,0)],V0=new Et,Cl=new I,Ef=new I;function nw(n,e,t){let i=new ko,s=new j,r=new j,o=new Xt,a=new ch,l=new hh,c={},d=t.maxTextureSize,f={[er]:Pn,[Pn]:er,[pn]:pn},h=new rn({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new j},radius:{value:4}},vertexShader:jS,fragmentShader:QS}),u=h.clone();u.defines.HORIZONTAL_PASS=1;let m=new Ft;m.setAttribute("position",new gn(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let y=new oe(m,h),g=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Nr;let p=this.type;this.render=function(E,P,x){if(g.enabled===!1||g.autoUpdate===!1&&g.needsUpdate===!1||E.length===0)return;this.type===Dm&&(Xe("WebGLShadowMap: PCFSoftShadowMap has been removed. Using PCFShadowMap instead."),this.type=Nr);let A=n.getRenderTarget(),T=n.getActiveCubeFace(),C=n.getActiveMipmapLevel(),k=n.state;k.setBlending(Mi),k.buffers.depth.getReversed()===!0?k.buffers.color.setClear(0,0,0,0):k.buffers.color.setClear(1,1,1,1),k.buffers.depth.setTest(!0),k.setScissorTest(!1);let D=p!==this.type;D&&P.traverse(function(L){L.material&&(Array.isArray(L.material)?L.material.forEach(F=>F.needsUpdate=!0):L.material.needsUpdate=!0)});for(let L=0,F=E.length;L<F;L++){let B=E[L],$=B.shadow;if($===void 0){Xe("WebGLShadowMap:",B,"has no shadow.");continue}if($.autoUpdate===!1&&$.needsUpdate===!1)continue;s.copy($.mapSize);let se=$.getFrameExtents();s.multiply(se),r.copy($.mapSize),(s.x>d||s.y>d)&&(s.x>d&&(r.x=Math.floor(d/se.x),s.x=r.x*se.x,$.mapSize.x=r.x),s.y>d&&(r.y=Math.floor(d/se.y),s.y=r.y*se.y,$.mapSize.y=r.y));let X=n.state.buffers.depth.getReversed();if($.camera._reversedDepth=X,$.map===null||D===!0){if($.map!==null&&($.map.depthTexture!==null&&($.map.depthTexture.dispose(),$.map.depthTexture=null),$.map.dispose()),this.type===Fo){if(B.isPointLight){Xe("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}$.map=new hn(s.x,s.y,{format:sr,type:In,minFilter:Rn,magFilter:Rn,generateMipmaps:!1}),$.map.texture.name=B.name+".shadowMap",$.map.depthTexture=new Xs(s.x,s.y,Si),$.map.depthTexture.name=B.name+".shadowMapDepth",$.map.depthTexture.format=os,$.map.depthTexture.compareFunction=null,$.map.depthTexture.minFilter=wn,$.map.depthTexture.magFilter=wn}else B.isPointLight?($.map=new mu(s.x),$.map.depthTexture=new nh(s.x,Xi)):($.map=new hn(s.x,s.y),$.map.depthTexture=new Xs(s.x,s.y,Xi)),$.map.depthTexture.name=B.name+".shadowMap",$.map.depthTexture.format=os,this.type===Nr?($.map.depthTexture.compareFunction=X?du:uu,$.map.depthTexture.minFilter=Rn,$.map.depthTexture.magFilter=Rn):($.map.depthTexture.compareFunction=null,$.map.depthTexture.minFilter=wn,$.map.depthTexture.magFilter=wn);$.camera.updateProjectionMatrix()}$.map.isWebGLCubeRenderTarget!==!0&&($.map.width!==s.x||$.map.height!==s.y)&&$.map.setSize(s.x,s.y);let Q=$.map.isWebGLCubeRenderTarget?6:$.getViewportCount();B.isPointLight!==!0&&$.updateMatrices(B,x);for(let ne=0;ne<Q;ne++){let Oe=$.getCamera(ne);if(B.isPointLight){let Ce=$.camera,mt=$.matrix,at=B.distance||Ce.far;at!==Ce.far&&(Ce.far=at,Ce.updateProjectionMatrix()),Cl.setFromMatrixPosition(B.matrixWorld),Ce.position.copy(Cl),Ef.copy(Ce.position),Ef.add(ew[ne]),Ce.up.copy(tw[ne]),Ce.lookAt(Ef),Ce.updateMatrixWorld(),mt.makeTranslation(-Cl.x,-Cl.y,-Cl.z),V0.multiplyMatrices(Ce.projectionMatrix,Ce.matrixWorldInverse),$._frustum.setFromProjectionMatrix(V0,Ce.coordinateSystem,Ce.reversedDepth)}if($.map.isWebGLCubeRenderTarget)n.setRenderTarget($.map,ne),n.clear();else{ne===0&&(n.setRenderTarget($.map),n.clear());let Ce=$.getViewport(ne);o.set(r.x*Ce.x,r.y*Ce.y,r.x*Ce.z,r.y*Ce.w),k.viewport(o)}i=$.getFrustum(ne),_(P,x,Oe,B,this.type)}$.isPointLightShadow!==!0&&this.type===Fo&&v($,x),$.needsUpdate=!1}p=this.type,g.needsUpdate=!1,n.setRenderTarget(A,T,C)};function v(E,P){let x=e.update(y);h.defines.VSM_SAMPLES!==E.blurSamples&&(h.defines.VSM_SAMPLES=E.blurSamples,u.defines.VSM_SAMPLES=E.blurSamples,h.needsUpdate=!0,u.needsUpdate=!0),E.mapPass===null?E.mapPass=new hn(s.x,s.y,{format:sr,type:In}):(E.mapPass.width!==E.map.width||E.mapPass.height!==E.map.height)&&E.mapPass.setSize(E.map.width,E.map.height),h.uniforms.shadow_pass.value=E.map.depthTexture,h.uniforms.resolution.value.set(E.map.width,E.map.height),h.uniforms.radius.value=E.radius,n.setRenderTarget(E.mapPass),n.clear(),n.renderBufferDirect(P,null,x,h,y,null),u.uniforms.shadow_pass.value=E.mapPass.texture,u.uniforms.resolution.value.set(E.map.width,E.map.height),u.uniforms.radius.value=E.radius,n.setRenderTarget(E.map),n.clear(),n.renderBufferDirect(P,null,x,u,y,null)}function M(E,P,x,A){let T=null,C=x.isPointLight===!0?E.customDistanceMaterial:E.customDepthMaterial;if(C!==void 0)T=C;else if(T=x.isPointLight===!0?l:a,n.localClippingEnabled&&P.clipShadows===!0&&Array.isArray(P.clippingPlanes)&&P.clippingPlanes.length!==0||P.displacementMap&&P.displacementScale!==0||P.alphaMap&&P.alphaTest>0||P.map&&P.alphaTest>0||P.alphaToCoverage===!0){let k=T.uuid,D=P.uuid,L=c[k];L===void 0&&(L={},c[k]=L);let F=L[D];F===void 0&&(F=T.clone(),L[D]=F,P.addEventListener("dispose",S)),T=F}if(T.visible=P.visible,T.wireframe=P.wireframe,A===Fo?T.side=P.shadowSide!==null?P.shadowSide:P.side:T.side=P.shadowSide!==null?P.shadowSide:f[P.side],T.alphaMap=P.alphaMap,T.alphaTest=P.alphaToCoverage===!0?.5:P.alphaTest,T.map=P.map,T.clipShadows=P.clipShadows,T.clippingPlanes=P.clippingPlanes,T.clipIntersection=P.clipIntersection,T.displacementMap=P.displacementMap,T.displacementScale=P.displacementScale,T.displacementBias=P.displacementBias,T.wireframeLinewidth=P.wireframeLinewidth,T.linewidth=P.linewidth,x.isPointLight===!0&&T.isMeshDistanceMaterial===!0){let k=n.properties.get(T);k.light=x}return T}function _(E,P,x,A,T){if(E.visible===!1)return;if(E.layers.test(P.layers)&&(E.isMesh||E.isLine||E.isPoints)&&(E.castShadow||E.receiveShadow&&T===Fo)&&(!E.frustumCulled||E.intersectsFrustum(i))){E.modelViewMatrix.multiplyMatrices(x.matrixWorldInverse,E.matrixWorld);let D=e.update(E),L=E.material;if(Array.isArray(L)){let F=D.groups;for(let B=0,$=F.length;B<$;B++){let se=F[B],X=L[se.materialIndex];if(X&&X.visible){let Q=M(E,X,A,T);E.onBeforeShadow(n,E,P,x,D,Q,se),n.renderBufferDirect(x,null,D,Q,E,se),E.onAfterShadow(n,E,P,x,D,Q,se)}}}else if(L.visible){let F=M(E,L,A,T);E.onBeforeShadow(n,E,P,x,D,F,null),n.renderBufferDirect(x,null,D,F,E,null),E.onAfterShadow(n,E,P,x,D,F,null)}}let k=E.children;for(let D=0,L=k.length;D<L;D++)_(k[D],P,x,A,T)}function S(E){E.target.removeEventListener("dispose",S);for(let x in c){let A=c[x],T=E.target.uuid;T in A&&(A[T].dispose(),delete A[T])}}}function iw(n,e){function t(){let O=!1,ve=new Xt,ee=null,xe=new Xt(0,0,0,0);return{setMask:function(Te){ee!==Te&&!O&&(n.colorMask(Te,Te,Te,Te),ee=Te)},setLocked:function(Te){O=Te},setClear:function(Te,re,Ge,Fe,Ut){Ut===!0&&(Te*=Fe,re*=Fe,Ge*=Fe),ve.set(Te,re,Ge,Fe),xe.equals(ve)===!1&&(n.clearColor(Te,re,Ge,Fe),xe.copy(ve))},reset:function(){O=!1,ee=null,xe.set(-1,0,0,0)}}}function i(){let O=!1,ve=!1,ee=null,xe=null,Te=null;return{setReversed:function(re){if(ve!==re){let Ge=e.get("EXT_clip_control");re?Ge.clipControlEXT(Ge.LOWER_LEFT_EXT,Ge.ZERO_TO_ONE_EXT):Ge.clipControlEXT(Ge.LOWER_LEFT_EXT,Ge.NEGATIVE_ONE_TO_ONE_EXT),ve=re;let Fe=Te;Te=null,this.setClear(Fe)}},getReversed:function(){return ve},setTest:function(re){re?J(n.DEPTH_TEST):fe(n.DEPTH_TEST)},setMask:function(re){ee!==re&&!O&&(n.depthMask(re),ee=re)},setFunc:function(re){if(ve&&(re=p0[re]),xe!==re){switch(re){case Vc:n.depthFunc(n.NEVER);break;case Wc:n.depthFunc(n.ALWAYS);break;case $c:n.depthFunc(n.LESS);break;case Eo:n.depthFunc(n.LEQUAL);break;case qc:n.depthFunc(n.EQUAL);break;case Xc:n.depthFunc(n.GEQUAL);break;case Yc:n.depthFunc(n.GREATER);break;case Kc:n.depthFunc(n.NOTEQUAL);break;default:n.depthFunc(n.LEQUAL)}xe=re}},setLocked:function(re){O=re},setClear:function(re){Te!==re&&(Te=re,ve&&(re=1-re),n.clearDepth(re))},reset:function(){O=!1,ee=null,xe=null,Te=null,ve=!1}}}function s(){let O=!1,ve=null,ee=null,xe=null,Te=null,re=null,Ge=null,Fe=null,Ut=null;return{setTest:function(St){O||(St?J(n.STENCIL_TEST):fe(n.STENCIL_TEST))},setMask:function(St){ve!==St&&!O&&(n.stencilMask(St),ve=St)},setFunc:function(St,Ui,ts){(ee!==St||xe!==Ui||Te!==ts)&&(n.stencilFunc(St,Ui,ts),ee=St,xe=Ui,Te=ts)},setOp:function(St,Ui,ts){(re!==St||Ge!==Ui||Fe!==ts)&&(n.stencilOp(St,Ui,ts),re=St,Ge=Ui,Fe=ts)},setLocked:function(St){O=St},setClear:function(St){Ut!==St&&(n.clearStencil(St),Ut=St)},reset:function(){O=!1,ve=null,ee=null,xe=null,Te=null,re=null,Ge=null,Fe=null,Ut=null}}}let r=new t,o=new i,a=new s,l=new WeakMap,c=new WeakMap,d={},f={},h={},u=new WeakMap,m=[],y=null,g=!1,p=null,v=null,M=null,_=null,S=null,E=null,P=null,x=new Ie(0,0,0),A=0,T=!1,C=null,k=null,D=null,L=null,F=null,B=n.getParameter(n.MAX_COMBINED_TEXTURE_IMAGE_UNITS),$=!1,se=0,X=n.getParameter(n.VERSION);X.indexOf("WebGL")!==-1?(se=parseFloat(/^WebGL (\d)/.exec(X)[1]),$=se>=1):X.indexOf("OpenGL ES")!==-1&&(se=parseFloat(/^OpenGL ES (\d)/.exec(X)[1]),$=se>=2);let Q=null,ne={},Oe=n.getParameter(n.SCISSOR_BOX),Ce=n.getParameter(n.VIEWPORT),mt=new Xt().fromArray(Oe),at=new Xt().fromArray(Ce);function Le(O,ve,ee,xe){let Te=new Uint8Array(4),re=n.createTexture();n.bindTexture(O,re),n.texParameteri(O,n.TEXTURE_MIN_FILTER,n.NEAREST),n.texParameteri(O,n.TEXTURE_MAG_FILTER,n.NEAREST);for(let Ge=0;Ge<ee;Ge++)O===n.TEXTURE_3D||O===n.TEXTURE_2D_ARRAY?n.texImage3D(ve,0,n.RGBA,1,1,xe,0,n.RGBA,n.UNSIGNED_BYTE,Te):n.texImage2D(ve+Ge,0,n.RGBA,1,1,0,n.RGBA,n.UNSIGNED_BYTE,Te);return re}let V={};V[n.TEXTURE_2D]=Le(n.TEXTURE_2D,n.TEXTURE_2D,1),V[n.TEXTURE_CUBE_MAP]=Le(n.TEXTURE_CUBE_MAP,n.TEXTURE_CUBE_MAP_POSITIVE_X,6),V[n.TEXTURE_2D_ARRAY]=Le(n.TEXTURE_2D_ARRAY,n.TEXTURE_2D_ARRAY,1,1),V[n.TEXTURE_3D]=Le(n.TEXTURE_3D,n.TEXTURE_3D,1,1),r.setClear(0,0,0,1),o.setClear(1),a.setClear(0),J(n.DEPTH_TEST),o.setFunc(Eo),he(!1),me(Yd),J(n.CULL_FACE),ae(Mi);function J(O){d[O]!==!0&&(n.enable(O),d[O]=!0)}function fe(O){d[O]!==!1&&(n.disable(O),d[O]=!1)}function Ye(O,ve){return h[O]!==ve?(n.bindFramebuffer(O,ve),h[O]=ve,O===n.DRAW_FRAMEBUFFER&&(h[n.FRAMEBUFFER]=ve),O===n.FRAMEBUFFER&&(h[n.DRAW_FRAMEBUFFER]=ve),!0):!1}function Ae(O,ve){let ee=m,xe=!1;if(O){ee=u.get(ve),ee===void 0&&(ee=[],u.set(ve,ee));let Te=O.textures;if(ee.length!==Te.length||ee[0]!==n.COLOR_ATTACHMENT0){for(let re=0,Ge=Te.length;re<Ge;re++)ee[re]=n.COLOR_ATTACHMENT0+re;ee.length=Te.length,xe=!0}}else ee[0]!==n.BACK&&(ee[0]=n.BACK,xe=!0);xe&&n.drawBuffers(ee)}function Ke(O){return y!==O?(n.useProgram(O),y=O,!0):!1}let Rt={[Ur]:n.FUNC_ADD,[Um]:n.FUNC_SUBTRACT,[Om]:n.FUNC_REVERSE_SUBTRACT};Rt[Fm]=n.MIN,Rt[Bm]=n.MAX;let ie={[Hm]:n.ZERO,[zm]:n.ONE,[Gm]:n.SRC_COLOR,[Jd]:n.SRC_ALPHA,[Ym]:n.SRC_ALPHA_SATURATE,[qm]:n.DST_COLOR,[Wm]:n.DST_ALPHA,[Vm]:n.ONE_MINUS_SRC_COLOR,[jd]:n.ONE_MINUS_SRC_ALPHA,[Xm]:n.ONE_MINUS_DST_COLOR,[$m]:n.ONE_MINUS_DST_ALPHA,[Km]:n.CONSTANT_COLOR,[Zm]:n.ONE_MINUS_CONSTANT_COLOR,[Jm]:n.CONSTANT_ALPHA,[jm]:n.ONE_MINUS_CONSTANT_ALPHA};function ae(O,ve,ee,xe,Te,re,Ge,Fe,Ut,St){if(O===Mi){g===!0&&(fe(n.BLEND),g=!1);return}if(g===!1&&(J(n.BLEND),g=!0),O!==Nm){if(O!==p||St!==T){if((v!==Ur||S!==Ur)&&(n.blendEquation(n.FUNC_ADD),v=Ur,S=Ur),St)switch(O){case Bo:n.blendFuncSeparate(n.ONE,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case Bn:n.blendFunc(n.ONE,n.ONE);break;case Kd:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case Zd:n.blendFuncSeparate(n.DST_COLOR,n.ONE_MINUS_SRC_ALPHA,n.ZERO,n.ONE);break;default:qe("WebGLState: Invalid blending: ",O);break}else switch(O){case Bo:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case Bn:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE,n.ONE,n.ONE);break;case Kd:qe("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case Zd:qe("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:qe("WebGLState: Invalid blending: ",O);break}M=null,_=null,E=null,P=null,x.set(0,0,0),A=0,p=O,T=St}return}Te=Te||ve,re=re||ee,Ge=Ge||xe,(ve!==v||Te!==S)&&(n.blendEquationSeparate(Rt[ve],Rt[Te]),v=ve,S=Te),(ee!==M||xe!==_||re!==E||Ge!==P)&&(n.blendFuncSeparate(ie[ee],ie[xe],ie[re],ie[Ge]),M=ee,_=xe,E=re,P=Ge),(Fe.equals(x)===!1||Ut!==A)&&(n.blendColor(Fe.r,Fe.g,Fe.b,Ut),x.copy(Fe),A=Ut),p=O,T=!1}function ce(O,ve){O.side===pn?fe(n.CULL_FACE):J(n.CULL_FACE);let ee=O.side===Pn;ve&&(ee=!ee),he(ee),O.blending===Bo&&O.transparent===!1?ae(Mi):ae(O.blending,O.blendEquation,O.blendSrc,O.blendDst,O.blendEquationAlpha,O.blendSrcAlpha,O.blendDstAlpha,O.blendColor,O.blendAlpha,O.premultipliedAlpha),o.setFunc(O.depthFunc),o.setTest(O.depthTest),o.setMask(O.depthWrite),r.setMask(O.colorWrite);let xe=O.stencilWrite;a.setTest(xe),xe&&(a.setMask(O.stencilWriteMask),a.setFunc(O.stencilFunc,O.stencilRef,O.stencilFuncMask),a.setOp(O.stencilFail,O.stencilZFail,O.stencilZPass)),Ve(O.polygonOffset,O.polygonOffsetFactor,O.polygonOffsetUnits),O.alphaToCoverage===!0?J(n.SAMPLE_ALPHA_TO_COVERAGE):fe(n.SAMPLE_ALPHA_TO_COVERAGE)}function he(O){C!==O&&(O?n.frontFace(n.CW):n.frontFace(n.CCW),C=O)}function me(O){O!==km?(J(n.CULL_FACE),O!==k&&(O===Yd?n.cullFace(n.BACK):O===Lm?n.cullFace(n.FRONT):n.cullFace(n.FRONT_AND_BACK))):fe(n.CULL_FACE),k=O}function We(O){O!==D&&($&&n.lineWidth(O),D=O)}function Ve(O,ve,ee){O?(J(n.POLYGON_OFFSET_FILL),(L!==ve||F!==ee)&&(L=ve,F=ee,o.getReversed()&&(ve=-ve),n.polygonOffset(ve,ee))):fe(n.POLYGON_OFFSET_FILL)}function Ze(O){O?J(n.SCISSOR_TEST):fe(n.SCISSOR_TEST)}function tt(O){O===void 0&&(O=n.TEXTURE0+B-1),Q!==O&&(n.activeTexture(O),Q=O)}function N(O,ve,ee){ee===void 0&&(Q===null?ee=n.TEXTURE0+B-1:ee=Q);let xe=ne[ee];xe===void 0&&(xe={type:void 0,texture:void 0},ne[ee]=xe),(xe.type!==O||xe.texture!==ve)&&(Q!==ee&&(n.activeTexture(ee),Q=ee),n.bindTexture(O,ve||V[O]),xe.type=O,xe.texture=ve)}function Mt(){let O=ne[Q];O!==void 0&&O.type!==void 0&&(n.bindTexture(O.type,null),O.type=void 0,O.texture=void 0)}function ut(){try{n.compressedTexImage2D(...arguments)}catch(O){qe("WebGLState:",O)}}function R(){try{n.compressedTexImage3D(...arguments)}catch(O){qe("WebGLState:",O)}}function b(){try{n.texSubImage2D(...arguments)}catch(O){qe("WebGLState:",O)}}function H(){try{n.texSubImage3D(...arguments)}catch(O){qe("WebGLState:",O)}}function W(){try{n.compressedTexSubImage2D(...arguments)}catch(O){qe("WebGLState:",O)}}function Y(){try{n.compressedTexSubImage3D(...arguments)}catch(O){qe("WebGLState:",O)}}function ue(){try{n.texStorage2D(...arguments)}catch(O){qe("WebGLState:",O)}}function pe(){try{n.texStorage3D(...arguments)}catch(O){qe("WebGLState:",O)}}function Z(){try{n.texImage2D(...arguments)}catch(O){qe("WebGLState:",O)}}function te(){try{n.texImage3D(...arguments)}catch(O){qe("WebGLState:",O)}}function ye(O){return f[O]!==void 0?f[O]:n.getParameter(O)}function He(O,ve){f[O]!==ve&&(n.pixelStorei(O,ve),f[O]=ve)}function be(O){mt.equals(O)===!1&&(n.scissor(O.x,O.y,O.z,O.w),mt.copy(O))}function _e(O){at.equals(O)===!1&&(n.viewport(O.x,O.y,O.z,O.w),at.copy(O))}function ze(O,ve){let ee=c.get(ve);ee===void 0&&(ee=new WeakMap,c.set(ve,ee));let xe=ee.get(O);xe===void 0&&(xe=n.getUniformBlockIndex(ve,O.name),ee.set(O,xe))}function $e(O,ve){let xe=c.get(ve).get(O);l.get(ve)!==xe&&(n.uniformBlockBinding(ve,xe,O.__bindingPointIndex),l.set(ve,xe))}function nt(){n.disable(n.BLEND),n.disable(n.CULL_FACE),n.disable(n.DEPTH_TEST),n.disable(n.POLYGON_OFFSET_FILL),n.disable(n.SCISSOR_TEST),n.disable(n.STENCIL_TEST),n.disable(n.SAMPLE_ALPHA_TO_COVERAGE),n.blendEquation(n.FUNC_ADD),n.blendFunc(n.ONE,n.ZERO),n.blendFuncSeparate(n.ONE,n.ZERO,n.ONE,n.ZERO),n.blendColor(0,0,0,0),n.colorMask(!0,!0,!0,!0),n.clearColor(0,0,0,0),n.depthMask(!0),n.depthFunc(n.LESS),o.setReversed(!1),n.clearDepth(1),n.stencilMask(4294967295),n.stencilFunc(n.ALWAYS,0,4294967295),n.stencilOp(n.KEEP,n.KEEP,n.KEEP),n.clearStencil(0),n.cullFace(n.BACK),n.frontFace(n.CCW),n.polygonOffset(0,0),n.activeTexture(n.TEXTURE0),n.bindFramebuffer(n.FRAMEBUFFER,null),n.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),n.bindFramebuffer(n.READ_FRAMEBUFFER,null),n.useProgram(null),n.lineWidth(1),n.scissor(0,0,n.canvas.width,n.canvas.height),n.viewport(0,0,n.canvas.width,n.canvas.height),n.pixelStorei(n.PACK_ALIGNMENT,4),n.pixelStorei(n.UNPACK_ALIGNMENT,4),n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,!1),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,n.BROWSER_DEFAULT_WEBGL),n.pixelStorei(n.PACK_ROW_LENGTH,0),n.pixelStorei(n.PACK_SKIP_PIXELS,0),n.pixelStorei(n.PACK_SKIP_ROWS,0),n.pixelStorei(n.UNPACK_ROW_LENGTH,0),n.pixelStorei(n.UNPACK_IMAGE_HEIGHT,0),n.pixelStorei(n.UNPACK_SKIP_PIXELS,0),n.pixelStorei(n.UNPACK_SKIP_ROWS,0),n.pixelStorei(n.UNPACK_SKIP_IMAGES,0),d={},f={},Q=null,ne={},h={},u=new WeakMap,m=[],y=null,g=!1,p=null,v=null,M=null,_=null,S=null,E=null,P=null,x=new Ie(0,0,0),A=0,T=!1,C=null,k=null,D=null,L=null,F=null,mt.set(0,0,n.canvas.width,n.canvas.height),at.set(0,0,n.canvas.width,n.canvas.height),r.reset(),o.reset(),a.reset()}return{buffers:{color:r,depth:o,stencil:a},enable:J,disable:fe,bindFramebuffer:Ye,drawBuffers:Ae,useProgram:Ke,setBlending:ae,setMaterial:ce,setFlipSided:he,setCullFace:me,setLineWidth:We,setPolygonOffset:Ve,setScissorTest:Ze,activeTexture:tt,bindTexture:N,unbindTexture:Mt,compressedTexImage2D:ut,compressedTexImage3D:R,texImage2D:Z,texImage3D:te,pixelStorei:He,getParameter:ye,updateUBOMapping:ze,uniformBlockBinding:$e,texStorage2D:ue,texStorage3D:pe,texSubImage2D:b,texSubImage3D:H,compressedTexSubImage2D:W,compressedTexSubImage3D:Y,scissor:be,viewport:_e,reset:nt}}function sw(n,e,t,i,s,r,o){let a=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new j,d=new WeakMap,f=new Set,h,u=new WeakMap,m=!1;try{m=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function y(R,b){return m?new OffscreenCanvas(R,b):Fa("canvas")}function g(R,b,H){let W=1,Y=ut(R);if((Y.width>H||Y.height>H)&&(W=H/Math.max(Y.width,Y.height)),W<1)if(typeof HTMLImageElement<"u"&&R instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&R instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&R instanceof ImageBitmap||typeof VideoFrame<"u"&&R instanceof VideoFrame){let ue=Math.floor(W*Y.width),pe=Math.floor(W*Y.height);h===void 0&&(h=y(ue,pe));let Z=b?y(ue,pe):h;return Z.width=ue,Z.height=pe,Z.getContext("2d").drawImage(R,0,0,ue,pe),Xe("WebGLRenderer: Texture has been resized from ("+Y.width+"x"+Y.height+") to ("+ue+"x"+pe+")."),Z}else return"data"in R&&Xe("WebGLRenderer: Image in DataTexture is too big ("+Y.width+"x"+Y.height+")."),R;return R}function p(R){return R.generateMipmaps}function v(R){n.generateMipmap(R)}function M(R){return R.isWebGLCubeRenderTarget?n.TEXTURE_CUBE_MAP:R.isWebGL3DRenderTarget?n.TEXTURE_3D:R.isWebGLArrayRenderTarget||R.isCompressedArrayTexture?n.TEXTURE_2D_ARRAY:n.TEXTURE_2D}function _(R,b,H,W,Y,ue=!1){if(R!==null){if(n[R]!==void 0)return n[R];Xe("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+R+"'")}let pe;W&&(pe=e.get("EXT_texture_norm16"),pe||Xe("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let Z=b;if(b===n.RED&&(H===n.FLOAT&&(Z=n.R32F),H===n.HALF_FLOAT&&(Z=n.R16F),H===n.UNSIGNED_BYTE&&(Z=n.R8),H===n.UNSIGNED_SHORT&&pe&&(Z=pe.R16_EXT),H===n.SHORT&&pe&&(Z=pe.R16_SNORM_EXT)),b===n.RED_INTEGER&&(H===n.UNSIGNED_BYTE&&(Z=n.R8UI),H===n.UNSIGNED_SHORT&&(Z=n.R16UI),H===n.UNSIGNED_INT&&(Z=n.R32UI),H===n.BYTE&&(Z=n.R8I),H===n.SHORT&&(Z=n.R16I),H===n.INT&&(Z=n.R32I)),b===n.RG&&(H===n.FLOAT&&(Z=n.RG32F),H===n.HALF_FLOAT&&(Z=n.RG16F),H===n.UNSIGNED_BYTE&&(Z=n.RG8),H===n.UNSIGNED_SHORT&&pe&&(Z=pe.RG16_EXT),H===n.SHORT&&pe&&(Z=pe.RG16_SNORM_EXT)),b===n.RG_INTEGER&&(H===n.UNSIGNED_BYTE&&(Z=n.RG8UI),H===n.UNSIGNED_SHORT&&(Z=n.RG16UI),H===n.UNSIGNED_INT&&(Z=n.RG32UI),H===n.BYTE&&(Z=n.RG8I),H===n.SHORT&&(Z=n.RG16I),H===n.INT&&(Z=n.RG32I)),b===n.RGB_INTEGER&&(H===n.UNSIGNED_BYTE&&(Z=n.RGB8UI),H===n.UNSIGNED_SHORT&&(Z=n.RGB16UI),H===n.UNSIGNED_INT&&(Z=n.RGB32UI),H===n.BYTE&&(Z=n.RGB8I),H===n.SHORT&&(Z=n.RGB16I),H===n.INT&&(Z=n.RGB32I)),b===n.RGBA_INTEGER&&(H===n.UNSIGNED_BYTE&&(Z=n.RGBA8UI),H===n.UNSIGNED_SHORT&&(Z=n.RGBA16UI),H===n.UNSIGNED_INT&&(Z=n.RGBA32UI),H===n.BYTE&&(Z=n.RGBA8I),H===n.SHORT&&(Z=n.RGBA16I),H===n.INT&&(Z=n.RGBA32I)),b===n.RGB&&(H===n.UNSIGNED_SHORT&&pe&&(Z=pe.RGB16_EXT),H===n.SHORT&&pe&&(Z=pe.RGB16_SNORM_EXT),H===n.UNSIGNED_INT_5_9_9_9_REV&&(Z=n.RGB9_E5),H===n.UNSIGNED_INT_10F_11F_11F_REV&&(Z=n.R11F_G11F_B10F)),b===n.RGBA){let te=ue?Oa:ct.getTransfer(Y);H===n.FLOAT&&(Z=n.RGBA32F),H===n.HALF_FLOAT&&(Z=n.RGBA16F),H===n.UNSIGNED_BYTE&&(Z=te===bt?n.SRGB8_ALPHA8:n.RGBA8),H===n.UNSIGNED_SHORT&&pe&&(Z=pe.RGBA16_EXT),H===n.SHORT&&pe&&(Z=pe.RGBA16_SNORM_EXT),H===n.UNSIGNED_SHORT_4_4_4_4&&(Z=n.RGBA4),H===n.UNSIGNED_SHORT_5_5_5_1&&(Z=n.RGB5_A1)}return(Z===n.R16F||Z===n.R32F||Z===n.RG16F||Z===n.RG32F||Z===n.RGBA16F||Z===n.RGBA32F)&&e.get("EXT_color_buffer_float"),Z}function S(R,b){let H;return R?b===null||b===Xi||b===zo?H=n.DEPTH24_STENCIL8:b===Si?H=n.DEPTH32F_STENCIL8:b===Ho&&(H=n.DEPTH24_STENCIL8,Xe("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):b===null||b===Xi||b===zo?H=n.DEPTH_COMPONENT24:b===Si?H=n.DEPTH_COMPONENT32F:b===Ho&&(H=n.DEPTH_COMPONENT16),H}function E(R,b){return p(R)===!0||R.isFramebufferTexture&&R.minFilter!==wn&&R.minFilter!==Rn?Math.log2(Math.max(b.width,b.height))+1:R.mipmaps!==void 0&&R.mipmaps.length>0?R.mipmaps.length:R.isCompressedTexture&&Array.isArray(R.image)?b.mipmaps.length:1}function P(R){let b=R.target;b.removeEventListener("dispose",P),A(b),b.isVideoTexture&&d.delete(b),b.isHTMLTexture&&f.delete(b)}function x(R){let b=R.target;b.removeEventListener("dispose",x),C(b)}function A(R){let b=i.get(R);if(b.__webglInit===void 0)return;let H=R.source,W=u.get(H);if(W){let Y=W[b.__cacheKey];Y.usedTimes--,Y.usedTimes===0&&T(R),Object.keys(W).length===0&&u.delete(H)}i.remove(R)}function T(R){let b=i.get(R);n.deleteTexture(b.__webglTexture);let H=R.source,W=u.get(H);delete W[b.__cacheKey],o.memory.textures--}function C(R){let b=i.get(R);if(R.depthTexture&&(R.depthTexture.dispose(),i.remove(R.depthTexture)),R.isWebGLCubeRenderTarget)for(let W=0;W<6;W++){if(Array.isArray(b.__webglFramebuffer[W]))for(let Y=0;Y<b.__webglFramebuffer[W].length;Y++)n.deleteFramebuffer(b.__webglFramebuffer[W][Y]);else n.deleteFramebuffer(b.__webglFramebuffer[W]);b.__webglDepthbuffer&&n.deleteRenderbuffer(b.__webglDepthbuffer[W])}else{if(Array.isArray(b.__webglFramebuffer))for(let W=0;W<b.__webglFramebuffer.length;W++)n.deleteFramebuffer(b.__webglFramebuffer[W]);else n.deleteFramebuffer(b.__webglFramebuffer);if(b.__webglDepthbuffer&&n.deleteRenderbuffer(b.__webglDepthbuffer),b.__webglMultisampledFramebuffer&&n.deleteFramebuffer(b.__webglMultisampledFramebuffer),b.__webglColorRenderbuffer)for(let W=0;W<b.__webglColorRenderbuffer.length;W++)b.__webglColorRenderbuffer[W]&&n.deleteRenderbuffer(b.__webglColorRenderbuffer[W]);b.__webglDepthRenderbuffer&&n.deleteRenderbuffer(b.__webglDepthRenderbuffer)}let H=R.textures;for(let W=0,Y=H.length;W<Y;W++){let ue=i.get(H[W]);ue.__webglTexture&&(n.deleteTexture(ue.__webglTexture),o.memory.textures--),i.remove(H[W])}i.remove(R)}let k=0;function D(){k=0}function L(){return k}function F(R){k=R}function B(){let R=k;return R>=s.maxTextures&&Xe("WebGLTextures: Trying to use "+(R+1)+" texture units while this GPU supports only "+s.maxTextures),k+=1,R}function $(R){let b=[];return b.push(R.wrapS),b.push(R.wrapT),b.push(R.wrapR||0),b.push(R.magFilter),b.push(R.minFilter),b.push(R.anisotropy),b.push(R.internalFormat),b.push(R.format),b.push(R.type),b.push(R.generateMipmaps),b.push(R.premultiplyAlpha),b.push(R.flipY),b.push(R.unpackAlignment),b.push(R.colorSpace),b.join()}function se(R,b){let H=i.get(R);if(R.isVideoTexture&&N(R),R.isRenderTargetTexture===!1&&R.isExternalTexture!==!0&&R.version>0&&H.__version!==R.version){let W=R.image;if(W===null)Xe("WebGLRenderer: Texture marked for update but no image data found.");else if(W.complete===!1)Xe("WebGLRenderer: Texture marked for update but image is incomplete");else{fe(H,R,b);return}}else R.isExternalTexture&&(H.__webglTexture=R.sourceTexture?R.sourceTexture:null);t.bindTexture(n.TEXTURE_2D,H.__webglTexture,n.TEXTURE0+b)}function X(R,b){let H=i.get(R);if(R.isRenderTargetTexture===!1&&R.version>0&&H.__version!==R.version){fe(H,R,b);return}else R.isExternalTexture&&(H.__webglTexture=R.sourceTexture?R.sourceTexture:null);t.bindTexture(n.TEXTURE_2D_ARRAY,H.__webglTexture,n.TEXTURE0+b)}function Q(R,b){let H=i.get(R);if(R.isRenderTargetTexture===!1&&R.version>0&&H.__version!==R.version){fe(H,R,b);return}t.bindTexture(n.TEXTURE_3D,H.__webglTexture,n.TEXTURE0+b)}function ne(R,b){let H=i.get(R);if(R.isCubeDepthTexture!==!0&&R.version>0&&H.__version!==R.version){Ye(H,R,b);return}t.bindTexture(n.TEXTURE_CUBE_MAP,H.__webglTexture,n.TEXTURE0+b)}let Oe={[Gi]:n.REPEAT,[ss]:n.CLAMP_TO_EDGE,[Zc]:n.MIRRORED_REPEAT},Ce={[wn]:n.NEAREST,[t0]:n.NEAREST_MIPMAP_NEAREST,[xl]:n.NEAREST_MIPMAP_LINEAR,[Rn]:n.LINEAR,[Ah]:n.LINEAR_MIPMAP_NEAREST,[nr]:n.LINEAR_MIPMAP_LINEAR},mt={[r0]:n.NEVER,[h0]:n.ALWAYS,[o0]:n.LESS,[uu]:n.LEQUAL,[a0]:n.EQUAL,[du]:n.GEQUAL,[l0]:n.GREATER,[c0]:n.NOTEQUAL};function at(R,b){if(b.type===Si&&e.has("OES_texture_float_linear")===!1&&(b.magFilter===Rn||b.magFilter===Ah||b.magFilter===xl||b.magFilter===nr||b.minFilter===Rn||b.minFilter===Ah||b.minFilter===xl||b.minFilter===nr)&&Xe("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),n.texParameteri(R,n.TEXTURE_WRAP_S,Oe[b.wrapS]),n.texParameteri(R,n.TEXTURE_WRAP_T,Oe[b.wrapT]),(R===n.TEXTURE_3D||R===n.TEXTURE_2D_ARRAY)&&n.texParameteri(R,n.TEXTURE_WRAP_R,Oe[b.wrapR]),n.texParameteri(R,n.TEXTURE_MAG_FILTER,Ce[b.magFilter]),n.texParameteri(R,n.TEXTURE_MIN_FILTER,Ce[b.minFilter]),b.compareFunction&&(n.texParameteri(R,n.TEXTURE_COMPARE_MODE,n.COMPARE_REF_TO_TEXTURE),n.texParameteri(R,n.TEXTURE_COMPARE_FUNC,mt[b.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(b.magFilter===wn||b.minFilter!==xl&&b.minFilter!==nr||b.type===Si&&e.has("OES_texture_float_linear")===!1)return;if(b.anisotropy>1||i.get(b).__currentAnisotropy){let H=e.get("EXT_texture_filter_anisotropic");n.texParameterf(R,H.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(b.anisotropy,s.getMaxAnisotropy())),i.get(b).__currentAnisotropy=b.anisotropy}}}function Le(R,b){let H=!1;R.__webglInit===void 0&&(R.__webglInit=!0,b.addEventListener("dispose",P));let W=b.source,Y=u.get(W);Y===void 0&&(Y={},u.set(W,Y));let ue=$(b);if(ue!==R.__cacheKey){Y[ue]===void 0&&(Y[ue]={texture:n.createTexture(),usedTimes:0},o.memory.textures++,H=!0),Y[ue].usedTimes++;let pe=Y[R.__cacheKey];pe!==void 0&&(Y[R.__cacheKey].usedTimes--,pe.usedTimes===0&&T(b)),R.__cacheKey=ue,R.__webglTexture=Y[ue].texture}return H}function V(R,b,H){return Math.floor(Math.floor(R/H)/b)}function J(R,b,H,W){let ue=R.updateRanges;if(ue.length===0)t.texSubImage2D(n.TEXTURE_2D,0,0,0,b.width,b.height,H,W,b.data);else{ue.sort((He,be)=>He.start-be.start);let pe=0;for(let He=1;He<ue.length;He++){let be=ue[pe],_e=ue[He],ze=be.start+be.count,$e=V(_e.start,b.width,4),nt=V(be.start,b.width,4);_e.start<=ze+1&&$e===nt&&V(_e.start+_e.count-1,b.width,4)===$e?be.count=Math.max(be.count,_e.start+_e.count-be.start):(++pe,ue[pe]=_e)}ue.length=pe+1;let Z=t.getParameter(n.UNPACK_ROW_LENGTH),te=t.getParameter(n.UNPACK_SKIP_PIXELS),ye=t.getParameter(n.UNPACK_SKIP_ROWS);t.pixelStorei(n.UNPACK_ROW_LENGTH,b.width);for(let He=0,be=ue.length;He<be;He++){let _e=ue[He],ze=Math.floor(_e.start/4),$e=Math.ceil(_e.count/4),nt=ze%b.width,O=Math.floor(ze/b.width),ve=$e,ee=1;t.pixelStorei(n.UNPACK_SKIP_PIXELS,nt),t.pixelStorei(n.UNPACK_SKIP_ROWS,O),t.texSubImage2D(n.TEXTURE_2D,0,nt,O,ve,ee,H,W,b.data)}R.clearUpdateRanges(),t.pixelStorei(n.UNPACK_ROW_LENGTH,Z),t.pixelStorei(n.UNPACK_SKIP_PIXELS,te),t.pixelStorei(n.UNPACK_SKIP_ROWS,ye)}}function fe(R,b,H){let W=n.TEXTURE_2D;(b.isDataArrayTexture||b.isCompressedArrayTexture)&&(W=n.TEXTURE_2D_ARRAY),b.isData3DTexture&&(W=n.TEXTURE_3D);let Y=Le(R,b),ue=b.source;t.bindTexture(W,R.__webglTexture,n.TEXTURE0+H);let pe=i.get(ue);if(ue.version!==pe.__version||Y===!0){if(t.activeTexture(n.TEXTURE0+H),(typeof ImageBitmap<"u"&&b.image instanceof ImageBitmap)===!1){let ee=ct.getPrimaries(ct.workingColorSpace),xe=b.colorSpace===Ps?null:ct.getPrimaries(b.colorSpace),Te=b.colorSpace===Ps||ee===xe?n.NONE:n.BROWSER_DEFAULT_WEBGL;t.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,b.flipY),t.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,b.premultiplyAlpha),t.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,Te)}t.pixelStorei(n.UNPACK_ALIGNMENT,b.unpackAlignment);let te=g(b.image,!1,s.maxTextureSize);te=Mt(b,te);let ye=r.convert(b.format,b.colorSpace),He=r.convert(b.type),be=_(b.internalFormat,ye,He,b.normalized,b.colorSpace,b.isVideoTexture);at(W,b);let _e,ze=b.mipmaps,$e=b.isVideoTexture!==!0,nt=pe.__version===void 0||Y===!0,O=ue.dataReady,ve=E(b,te);if(b.isDepthTexture)be=S(b.format===ir,b.type),nt&&($e?t.texStorage2D(n.TEXTURE_2D,1,be,te.width,te.height):t.texImage2D(n.TEXTURE_2D,0,be,te.width,te.height,0,ye,He,null));else if(b.isDataTexture)if(ze.length>0){$e&&nt&&t.texStorage2D(n.TEXTURE_2D,ve,be,ze[0].width,ze[0].height);for(let ee=0,xe=ze.length;ee<xe;ee++)_e=ze[ee],$e?O&&t.texSubImage2D(n.TEXTURE_2D,ee,0,0,_e.width,_e.height,ye,He,_e.data):t.texImage2D(n.TEXTURE_2D,ee,be,_e.width,_e.height,0,ye,He,_e.data);b.generateMipmaps=!1}else $e?(nt&&t.texStorage2D(n.TEXTURE_2D,ve,be,te.width,te.height),O&&J(b,te,ye,He)):t.texImage2D(n.TEXTURE_2D,0,be,te.width,te.height,0,ye,He,te.data);else if(b.isCompressedTexture)if(b.isCompressedArrayTexture){$e&&nt&&t.texStorage3D(n.TEXTURE_2D_ARRAY,ve,be,ze[0].width,ze[0].height,te.depth);for(let ee=0,xe=ze.length;ee<xe;ee++)if(_e=ze[ee],b.format!==wi)if(ye!==null)if($e){if(O)if(b.layerUpdates.size>0){let Te=pf(_e.width,_e.height,b.format,b.type);for(let re of b.layerUpdates){let Ge=_e.data.subarray(re*Te/_e.data.BYTES_PER_ELEMENT,(re+1)*Te/_e.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,ee,0,0,re,_e.width,_e.height,1,ye,Ge)}}else t.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,ee,0,0,0,_e.width,_e.height,te.depth,ye,_e.data)}else t.compressedTexImage3D(n.TEXTURE_2D_ARRAY,ee,be,_e.width,_e.height,te.depth,0,_e.data,0,0);else Xe("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else $e?O&&t.texSubImage3D(n.TEXTURE_2D_ARRAY,ee,0,0,0,_e.width,_e.height,te.depth,ye,He,_e.data):t.texImage3D(n.TEXTURE_2D_ARRAY,ee,be,_e.width,_e.height,te.depth,0,ye,He,_e.data);b.layerUpdates.size>0&&b.clearLayerUpdates()}else{$e&&nt&&t.texStorage2D(n.TEXTURE_2D,ve,be,ze[0].width,ze[0].height);for(let ee=0,xe=ze.length;ee<xe;ee++)_e=ze[ee],b.format!==wi?ye!==null?$e?O&&t.compressedTexSubImage2D(n.TEXTURE_2D,ee,0,0,_e.width,_e.height,ye,_e.data):t.compressedTexImage2D(n.TEXTURE_2D,ee,be,_e.width,_e.height,0,_e.data):Xe("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):$e?O&&t.texSubImage2D(n.TEXTURE_2D,ee,0,0,_e.width,_e.height,ye,He,_e.data):t.texImage2D(n.TEXTURE_2D,ee,be,_e.width,_e.height,0,ye,He,_e.data)}else if(b.isDataArrayTexture)if($e){if(nt&&t.texStorage3D(n.TEXTURE_2D_ARRAY,ve,be,te.width,te.height,te.depth),O)if(b.layerUpdates.size>0){let ee=pf(te.width,te.height,b.format,b.type);for(let xe of b.layerUpdates){let Te=te.data.subarray(xe*ee/te.data.BYTES_PER_ELEMENT,(xe+1)*ee/te.data.BYTES_PER_ELEMENT);t.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,xe,te.width,te.height,1,ye,He,Te)}b.clearLayerUpdates()}else t.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,0,te.width,te.height,te.depth,ye,He,te.data)}else t.texImage3D(n.TEXTURE_2D_ARRAY,0,be,te.width,te.height,te.depth,0,ye,He,te.data);else if(b.isData3DTexture)$e?(nt&&t.texStorage3D(n.TEXTURE_3D,ve,be,te.width,te.height,te.depth),O&&t.texSubImage3D(n.TEXTURE_3D,0,0,0,0,te.width,te.height,te.depth,ye,He,te.data)):t.texImage3D(n.TEXTURE_3D,0,be,te.width,te.height,te.depth,0,ye,He,te.data);else if(b.isFramebufferTexture){if(nt)if($e)t.texStorage2D(n.TEXTURE_2D,ve,be,te.width,te.height);else{let ee=te.width,xe=te.height;for(let Te=0;Te<ve;Te++)t.texImage2D(n.TEXTURE_2D,Te,be,ee,xe,0,ye,He,null),ee>>=1,xe>>=1}}else if(b.isHTMLTexture){if("texElementImage2D"in n){let ee=n.canvas;if(ee.hasAttribute("layoutsubtree")||ee.setAttribute("layoutsubtree","true"),te.parentNode!==ee){ee.appendChild(te),f.add(b),ee.onpaint=xe=>{let Te=xe.changedElements;for(let re of f)Te.includes(re.image)&&(re.needsUpdate=!0)},ee.requestPaint();return}if(n.texElementImage2D.length===3)n.texElementImage2D(n.TEXTURE_2D,n.RGBA8,te);else{let Te=n.RGBA,re=n.RGBA,Ge=n.UNSIGNED_BYTE;n.texElementImage2D(n.TEXTURE_2D,0,Te,re,Ge,te)}n.texParameteri(n.TEXTURE_2D,n.TEXTURE_MIN_FILTER,n.LINEAR),n.texParameteri(n.TEXTURE_2D,n.TEXTURE_WRAP_S,n.CLAMP_TO_EDGE),n.texParameteri(n.TEXTURE_2D,n.TEXTURE_WRAP_T,n.CLAMP_TO_EDGE)}}else if(ze.length>0){if($e&&nt){let ee=ut(ze[0]);t.texStorage2D(n.TEXTURE_2D,ve,be,ee.width,ee.height)}for(let ee=0,xe=ze.length;ee<xe;ee++)_e=ze[ee],$e?O&&t.texSubImage2D(n.TEXTURE_2D,ee,0,0,ye,He,_e):t.texImage2D(n.TEXTURE_2D,ee,be,ye,He,_e);b.generateMipmaps=!1}else if($e){if(nt){let ee=ut(te);t.texStorage2D(n.TEXTURE_2D,ve,be,ee.width,ee.height)}O&&t.texSubImage2D(n.TEXTURE_2D,0,0,0,ye,He,te)}else t.texImage2D(n.TEXTURE_2D,0,be,ye,He,te);p(b)&&v(W),pe.__version=ue.version,b.onUpdate&&b.onUpdate(b)}R.__version=b.version}function Ye(R,b,H){if(b.image.length!==6)return;let W=Le(R,b),Y=b.source;t.bindTexture(n.TEXTURE_CUBE_MAP,R.__webglTexture,n.TEXTURE0+H);let ue=i.get(Y);if(Y.version!==ue.__version||W===!0){t.activeTexture(n.TEXTURE0+H);let pe=ct.getPrimaries(ct.workingColorSpace),Z=b.colorSpace===Ps?null:ct.getPrimaries(b.colorSpace),te=b.colorSpace===Ps||pe===Z?n.NONE:n.BROWSER_DEFAULT_WEBGL;t.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,b.flipY),t.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,b.premultiplyAlpha),t.pixelStorei(n.UNPACK_ALIGNMENT,b.unpackAlignment),t.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,te);let ye=b.isCompressedTexture||b.image[0].isCompressedTexture,He=b.image[0]&&b.image[0].isDataTexture,be=[];for(let re=0;re<6;re++)!ye&&!He?be[re]=g(b.image[re],!0,s.maxCubemapSize):be[re]=He?b.image[re].image:b.image[re],be[re]=Mt(b,be[re]);let _e=be[0],ze=r.convert(b.format,b.colorSpace),$e=r.convert(b.type),nt=_(b.internalFormat,ze,$e,b.normalized,b.colorSpace),O=b.isVideoTexture!==!0,ve=ue.__version===void 0||W===!0,ee=Y.dataReady,xe=E(b,_e);at(n.TEXTURE_CUBE_MAP,b);let Te;if(ye){O&&ve&&t.texStorage2D(n.TEXTURE_CUBE_MAP,xe,nt,_e.width,_e.height);for(let re=0;re<6;re++){Te=be[re].mipmaps;for(let Ge=0;Ge<Te.length;Ge++){let Fe=Te[Ge];b.format!==wi?ze!==null?O?ee&&t.compressedTexSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+re,Ge,0,0,Fe.width,Fe.height,ze,Fe.data):t.compressedTexImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+re,Ge,nt,Fe.width,Fe.height,0,Fe.data):Xe("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):O?ee&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+re,Ge,0,0,Fe.width,Fe.height,ze,$e,Fe.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+re,Ge,nt,Fe.width,Fe.height,0,ze,$e,Fe.data)}}}else{if(Te=b.mipmaps,O&&ve){Te.length>0&&xe++;let re=ut(be[0]);t.texStorage2D(n.TEXTURE_CUBE_MAP,xe,nt,re.width,re.height)}for(let re=0;re<6;re++)if(He){O?ee&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+re,0,0,0,be[re].width,be[re].height,ze,$e,be[re].data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+re,0,nt,be[re].width,be[re].height,0,ze,$e,be[re].data);for(let Ge=0;Ge<Te.length;Ge++){let Ut=Te[Ge].image[re].image;O?ee&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+re,Ge+1,0,0,Ut.width,Ut.height,ze,$e,Ut.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+re,Ge+1,nt,Ut.width,Ut.height,0,ze,$e,Ut.data)}}else{O?ee&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+re,0,0,0,ze,$e,be[re]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+re,0,nt,ze,$e,be[re]);for(let Ge=0;Ge<Te.length;Ge++){let Fe=Te[Ge];O?ee&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+re,Ge+1,0,0,ze,$e,Fe.image[re]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+re,Ge+1,nt,ze,$e,Fe.image[re])}}}p(b)&&v(n.TEXTURE_CUBE_MAP),ue.__version=Y.version,b.onUpdate&&b.onUpdate(b)}R.__version=b.version}function Ae(R,b,H,W,Y,ue){let pe=r.convert(H.format,H.colorSpace),Z=r.convert(H.type),te=_(H.internalFormat,pe,Z,H.normalized,H.colorSpace),ye=i.get(b),He=i.get(H);if(He.__renderTarget=b,!ye.__hasExternalTextures){let be=Math.max(1,b.width>>ue),_e=Math.max(1,b.height>>ue);Y===n.TEXTURE_3D||Y===n.TEXTURE_2D_ARRAY?t.texImage3D(Y,ue,te,be,_e,b.depth,0,pe,Z,null):t.texImage2D(Y,ue,te,be,_e,0,pe,Z,null)}t.bindFramebuffer(n.FRAMEBUFFER,R),tt(b)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,W,Y,He.__webglTexture,0,Ze(b)):(Y===n.TEXTURE_2D||Y>=n.TEXTURE_CUBE_MAP_POSITIVE_X&&Y<=n.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&n.framebufferTexture2D(n.FRAMEBUFFER,W,Y,He.__webglTexture,ue),t.bindFramebuffer(n.FRAMEBUFFER,null)}function Ke(R,b,H){if(n.bindRenderbuffer(n.RENDERBUFFER,R),b.depthBuffer){let W=b.depthTexture,Y=W&&W.isDepthTexture?W.type:null,ue=S(b.stencilBuffer,Y),pe=b.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;tt(b)?a.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,Ze(b),ue,b.width,b.height):H?n.renderbufferStorageMultisample(n.RENDERBUFFER,Ze(b),ue,b.width,b.height):n.renderbufferStorage(n.RENDERBUFFER,ue,b.width,b.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,pe,n.RENDERBUFFER,R)}else{let W=b.textures;for(let Y=0;Y<W.length;Y++){let ue=W[Y],pe=r.convert(ue.format,ue.colorSpace),Z=r.convert(ue.type),te=_(ue.internalFormat,pe,Z,ue.normalized,ue.colorSpace);tt(b)?a.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,Ze(b),te,b.width,b.height):H?n.renderbufferStorageMultisample(n.RENDERBUFFER,Ze(b),te,b.width,b.height):n.renderbufferStorage(n.RENDERBUFFER,te,b.width,b.height)}}n.bindRenderbuffer(n.RENDERBUFFER,null)}function Rt(R,b,H){let W=b.isWebGLCubeRenderTarget===!0;if(t.bindFramebuffer(n.FRAMEBUFFER,R),!(b.depthTexture&&b.depthTexture.isDepthTexture))throw new Error("THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.");let Y=i.get(b.depthTexture);if(Y.__renderTarget=b,(!Y.__webglTexture||b.depthTexture.image.width!==b.width||b.depthTexture.image.height!==b.height)&&(b.depthTexture.image.width=b.width,b.depthTexture.image.height=b.height,b.depthTexture.needsUpdate=!0),W){if(Y.__webglInit===void 0&&(Y.__webglInit=!0,b.depthTexture.addEventListener("dispose",P)),Y.__webglTexture===void 0){Y.__webglTexture=n.createTexture(),t.bindTexture(n.TEXTURE_CUBE_MAP,Y.__webglTexture),at(n.TEXTURE_CUBE_MAP,b.depthTexture);let ye=r.convert(b.depthTexture.format),He=r.convert(b.depthTexture.type),be;b.depthTexture.format===os?be=n.DEPTH_COMPONENT24:b.depthTexture.format===ir&&(be=n.DEPTH24_STENCIL8);for(let _e=0;_e<6;_e++)n.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+_e,0,be,b.width,b.height,0,ye,He,null)}}else se(b.depthTexture,0);let ue=Y.__webglTexture,pe=Ze(b),Z=W?n.TEXTURE_CUBE_MAP_POSITIVE_X+H:n.TEXTURE_2D,te=b.depthTexture.format===ir?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;if(b.depthTexture.format===os)tt(b)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,te,Z,ue,0,pe):n.framebufferTexture2D(n.FRAMEBUFFER,te,Z,ue,0);else if(b.depthTexture.format===ir)tt(b)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,te,Z,ue,0,pe):n.framebufferTexture2D(n.FRAMEBUFFER,te,Z,ue,0);else throw new Error("THREE.WebGLTextures: Unknown depthTexture format.")}function ie(R){let b=i.get(R),H=R.isWebGLCubeRenderTarget===!0;if(b.__boundDepthTexture!==R.depthTexture){let W=R.depthTexture;if(b.__depthDisposeCallback&&b.__depthDisposeCallback(),W){let Y=()=>{delete b.__boundDepthTexture,delete b.__depthDisposeCallback,W.removeEventListener("dispose",Y)};W.addEventListener("dispose",Y),b.__depthDisposeCallback=Y}b.__boundDepthTexture=W}if(R.depthTexture&&!b.__autoAllocateDepthBuffer)if(H)for(let W=0;W<6;W++)Rt(b.__webglFramebuffer[W],R,W);else{let W=R.texture.mipmaps;W&&W.length>0?Rt(b.__webglFramebuffer[0],R,0):Rt(b.__webglFramebuffer,R,0)}else if(H){b.__webglDepthbuffer=[];for(let W=0;W<6;W++)if(t.bindFramebuffer(n.FRAMEBUFFER,b.__webglFramebuffer[W]),b.__webglDepthbuffer[W]===void 0)b.__webglDepthbuffer[W]=n.createRenderbuffer(),Ke(b.__webglDepthbuffer[W],R,!1);else{let Y=R.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,ue=b.__webglDepthbuffer[W];n.bindRenderbuffer(n.RENDERBUFFER,ue),n.framebufferRenderbuffer(n.FRAMEBUFFER,Y,n.RENDERBUFFER,ue)}}else{let W=R.texture.mipmaps;if(W&&W.length>0?t.bindFramebuffer(n.FRAMEBUFFER,b.__webglFramebuffer[0]):t.bindFramebuffer(n.FRAMEBUFFER,b.__webglFramebuffer),b.__webglDepthbuffer===void 0)b.__webglDepthbuffer=n.createRenderbuffer(),Ke(b.__webglDepthbuffer,R,!1);else{let Y=R.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,ue=b.__webglDepthbuffer;n.bindRenderbuffer(n.RENDERBUFFER,ue),n.framebufferRenderbuffer(n.FRAMEBUFFER,Y,n.RENDERBUFFER,ue)}}t.bindFramebuffer(n.FRAMEBUFFER,null)}function ae(R,b,H){let W=i.get(R);b!==void 0&&Ae(W.__webglFramebuffer,R,R.texture,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,0),H!==void 0&&ie(R)}function ce(R){let b=R.texture,H=i.get(R),W=i.get(b);R.addEventListener("dispose",x);let Y=R.textures,ue=R.isWebGLCubeRenderTarget===!0,pe=Y.length>1;if(pe||(W.__webglTexture===void 0&&(W.__webglTexture=n.createTexture()),W.__version=b.version,o.memory.textures++),ue){H.__webglFramebuffer=[];for(let Z=0;Z<6;Z++)if(b.mipmaps&&b.mipmaps.length>0){H.__webglFramebuffer[Z]=[];for(let te=0;te<b.mipmaps.length;te++)H.__webglFramebuffer[Z][te]=n.createFramebuffer()}else H.__webglFramebuffer[Z]=n.createFramebuffer()}else{if(b.mipmaps&&b.mipmaps.length>0){H.__webglFramebuffer=[];for(let Z=0;Z<b.mipmaps.length;Z++)H.__webglFramebuffer[Z]=n.createFramebuffer()}else H.__webglFramebuffer=n.createFramebuffer();if(pe)for(let Z=0,te=Y.length;Z<te;Z++){let ye=i.get(Y[Z]);ye.__webglTexture===void 0&&(ye.__webglTexture=n.createTexture(),o.memory.textures++)}if(R.samples>0&&tt(R)===!1){H.__webglMultisampledFramebuffer=n.createFramebuffer(),H.__webglColorRenderbuffer=[],t.bindFramebuffer(n.FRAMEBUFFER,H.__webglMultisampledFramebuffer);for(let Z=0;Z<Y.length;Z++){let te=Y[Z];H.__webglColorRenderbuffer[Z]=n.createRenderbuffer(),n.bindRenderbuffer(n.RENDERBUFFER,H.__webglColorRenderbuffer[Z]);let ye=r.convert(te.format,te.colorSpace),He=r.convert(te.type),be=_(te.internalFormat,ye,He,te.normalized,te.colorSpace,R.isXRRenderTarget===!0),_e=Ze(R);n.renderbufferStorageMultisample(n.RENDERBUFFER,_e,be,R.width,R.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+Z,n.RENDERBUFFER,H.__webglColorRenderbuffer[Z])}n.bindRenderbuffer(n.RENDERBUFFER,null),R.depthBuffer&&(H.__webglDepthRenderbuffer=n.createRenderbuffer(),Ke(H.__webglDepthRenderbuffer,R,!0)),t.bindFramebuffer(n.FRAMEBUFFER,null)}}if(ue){t.bindTexture(n.TEXTURE_CUBE_MAP,W.__webglTexture),at(n.TEXTURE_CUBE_MAP,b);for(let Z=0;Z<6;Z++)if(b.mipmaps&&b.mipmaps.length>0)for(let te=0;te<b.mipmaps.length;te++)Ae(H.__webglFramebuffer[Z][te],R,b,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+Z,te);else Ae(H.__webglFramebuffer[Z],R,b,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+Z,0);p(b)&&v(n.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(pe){for(let Z=0,te=Y.length;Z<te;Z++){let ye=Y[Z],He=i.get(ye),be=n.TEXTURE_2D;(R.isWebGL3DRenderTarget||R.isWebGLArrayRenderTarget)&&(be=R.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),t.bindTexture(be,He.__webglTexture),at(be,ye),Ae(H.__webglFramebuffer,R,ye,n.COLOR_ATTACHMENT0+Z,be,0),p(ye)&&v(be)}t.unbindTexture()}else{let Z=n.TEXTURE_2D;if((R.isWebGL3DRenderTarget||R.isWebGLArrayRenderTarget)&&(Z=R.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),t.bindTexture(Z,W.__webglTexture),at(Z,b),b.mipmaps&&b.mipmaps.length>0)for(let te=0;te<b.mipmaps.length;te++)Ae(H.__webglFramebuffer[te],R,b,n.COLOR_ATTACHMENT0,Z,te);else Ae(H.__webglFramebuffer,R,b,n.COLOR_ATTACHMENT0,Z,0);p(b)&&v(Z),t.unbindTexture()}R.depthBuffer&&ie(R)}function he(R){let b=R.textures;for(let H=0,W=b.length;H<W;H++){let Y=b[H];if(p(Y)){let ue=M(R),pe=i.get(Y).__webglTexture;t.bindTexture(ue,pe),v(ue),t.unbindTexture()}}}let me=[],We=[];function Ve(R){if(R.samples>0){if(tt(R)===!1){let b=R.textures,H=R.width,W=R.height,Y=n.COLOR_BUFFER_BIT,ue=R.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,pe=i.get(R),Z=b.length>1;if(Z)for(let ye=0;ye<b.length;ye++)t.bindFramebuffer(n.FRAMEBUFFER,pe.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+ye,n.RENDERBUFFER,null),t.bindFramebuffer(n.FRAMEBUFFER,pe.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+ye,n.TEXTURE_2D,null,0);t.bindFramebuffer(n.READ_FRAMEBUFFER,pe.__webglMultisampledFramebuffer);let te=R.texture.mipmaps;te&&te.length>0?t.bindFramebuffer(n.DRAW_FRAMEBUFFER,pe.__webglFramebuffer[0]):t.bindFramebuffer(n.DRAW_FRAMEBUFFER,pe.__webglFramebuffer);for(let ye=0;ye<b.length;ye++){if(R.resolveDepthBuffer&&(R.depthBuffer&&(Y|=n.DEPTH_BUFFER_BIT),R.stencilBuffer&&R.resolveStencilBuffer&&(Y|=n.STENCIL_BUFFER_BIT)),Z){n.framebufferRenderbuffer(n.READ_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.RENDERBUFFER,pe.__webglColorRenderbuffer[ye]);let He=i.get(b[ye]).__webglTexture;n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,He,0)}n.blitFramebuffer(0,0,H,W,0,0,H,W,Y,n.NEAREST),l===!0&&(me.length=0,We.length=0,me.push(n.COLOR_ATTACHMENT0+ye),R.depthBuffer&&R.storeMultisampledDepthBuffer===!1&&(me.push(ue),We.push(ue),n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,We)),n.invalidateFramebuffer(n.READ_FRAMEBUFFER,me))}if(t.bindFramebuffer(n.READ_FRAMEBUFFER,null),t.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),Z)for(let ye=0;ye<b.length;ye++){t.bindFramebuffer(n.FRAMEBUFFER,pe.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+ye,n.RENDERBUFFER,pe.__webglColorRenderbuffer[ye]);let He=i.get(b[ye]).__webglTexture;t.bindFramebuffer(n.FRAMEBUFFER,pe.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+ye,n.TEXTURE_2D,He,0)}t.bindFramebuffer(n.DRAW_FRAMEBUFFER,pe.__webglMultisampledFramebuffer)}else if(R.depthBuffer&&R.storeMultisampledDepthBuffer===!1&&l){let b=R.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,[b])}}}function Ze(R){return Math.min(s.maxSamples,R.samples)}function tt(R){let b=i.get(R);return R.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&b.__useRenderToTexture!==!1}function N(R){let b=o.render.frame;d.get(R)!==b&&(d.set(R,b),R.update())}function Mt(R,b){let H=R.colorSpace,W=R.format,Y=R.type;return R.isCompressedTexture===!0||R.isVideoTexture===!0||H!==Ua&&H!==Ps&&(ct.getTransfer(H)===bt?(W!==wi||Y!==Jn)&&Xe("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):qe("WebGLTextures: Unsupported texture color space:",H)),b}function ut(R){return typeof HTMLImageElement<"u"&&R instanceof HTMLImageElement?(c.width=R.naturalWidth||R.width,c.height=R.naturalHeight||R.height):typeof VideoFrame<"u"&&R instanceof VideoFrame?(c.width=R.displayWidth,c.height=R.displayHeight):(c.width=R.width,c.height=R.height),c}this.allocateTextureUnit=B,this.resetTextureUnits=D,this.getTextureUnits=L,this.setTextureUnits=F,this.setTexture2D=se,this.setTexture2DArray=X,this.setTexture3D=Q,this.setTextureCube=ne,this.rebindTextures=ae,this.setupRenderTarget=ce,this.updateRenderTargetMipmap=he,this.updateMultisampleRenderTarget=Ve,this.setupDepthRenderbuffer=ie,this.setupFrameBufferTexture=Ae,this.useMultisampledRTT=tt,this.isReversedDepthBuffer=function(){return t.buffers.depth.getReversed()}}function rw(n,e){function t(i,s=Ps){let r,o=ct.getTransfer(s);if(i===Jn)return n.UNSIGNED_BYTE;if(i===Ch)return n.UNSIGNED_SHORT_4_4_4_4;if(i===Ph)return n.UNSIGNED_SHORT_5_5_5_1;if(i===nf)return n.UNSIGNED_INT_5_9_9_9_REV;if(i===sf)return n.UNSIGNED_INT_10F_11F_11F_REV;if(i===ef)return n.BYTE;if(i===tf)return n.SHORT;if(i===Ho)return n.UNSIGNED_SHORT;if(i===Rh)return n.INT;if(i===Xi)return n.UNSIGNED_INT;if(i===Si)return n.FLOAT;if(i===In)return n.HALF_FLOAT;if(i===rf)return n.ALPHA;if(i===of)return n.RGB;if(i===wi)return n.RGBA;if(i===os)return n.DEPTH_COMPONENT;if(i===ir)return n.DEPTH_STENCIL;if(i===Ih)return n.RED;if(i===kh)return n.RED_INTEGER;if(i===sr)return n.RG;if(i===Lh)return n.RG_INTEGER;if(i===Dh)return n.RGBA_INTEGER;if(i===bl||i===Ml||i===Sl||i===wl)if(o===bt)if(r=e.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(i===bl)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===Ml)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===Sl)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===wl)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=e.get("WEBGL_compressed_texture_s3tc"),r!==null){if(i===bl)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===Ml)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===Sl)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===wl)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===Nh||i===Uh||i===Oh||i===Fh)if(r=e.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(i===Nh)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===Uh)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===Oh)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===Fh)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===Bh||i===Hh||i===zh||i===Gh||i===Vh||i===El||i===Wh)if(r=e.get("WEBGL_compressed_texture_etc"),r!==null){if(i===Bh||i===Hh)return o===bt?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(i===zh)return o===bt?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC;if(i===Gh)return r.COMPRESSED_R11_EAC;if(i===Vh)return r.COMPRESSED_SIGNED_R11_EAC;if(i===El)return r.COMPRESSED_RG11_EAC;if(i===Wh)return r.COMPRESSED_SIGNED_RG11_EAC}else return null;if(i===$h||i===qh||i===Xh||i===Yh||i===Kh||i===Zh||i===Jh||i===jh||i===Qh||i===eu||i===tu||i===nu||i===iu||i===su)if(r=e.get("WEBGL_compressed_texture_astc"),r!==null){if(i===$h)return o===bt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===qh)return o===bt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===Xh)return o===bt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===Yh)return o===bt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===Kh)return o===bt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===Zh)return o===bt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===Jh)return o===bt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===jh)return o===bt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===Qh)return o===bt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===eu)return o===bt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===tu)return o===bt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===nu)return o===bt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===iu)return o===bt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===su)return o===bt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===ru||i===ou||i===au)if(r=e.get("EXT_texture_compression_bptc"),r!==null){if(i===ru)return o===bt?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===ou)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===au)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===lu||i===cu||i===Tl||i===hu)if(r=e.get("EXT_texture_compression_rgtc"),r!==null){if(i===lu)return r.COMPRESSED_RED_RGTC1_EXT;if(i===cu)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===Tl)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===hu)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===zo?n.UNSIGNED_INT_24_8:n[i]!==void 0?n[i]:null}return{convert:t}}var ow=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,aw=`
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

}`,Lf=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t){if(this.texture===null){let i=new Ka(e.texture);(e.depthNear!==t.depthNear||e.depthFar!==t.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=i}}getMesh(e){if(this.texture!==null&&this.mesh===null){let t=e.cameras[0].viewport,i=new rn({vertexShader:ow,fragmentShader:aw,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new oe(new Zn(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},Df=class extends Vi{constructor(e,t){super();let i=this,s=null,r=1,o=null,a="local-floor",l=1,c=null,d=null,f=null,h=null,u=null,m=null,y=typeof XRWebGLBinding<"u",g=new Lf,p={},v=t.getContextAttributes(),M=null,_=null,S=[],E=[],P=new j,x=null,A=null,T=new An;T.viewport=new Xt;let C=new An;C.viewport=new Xt;let k=[T,C],D=new Mh,L=null,F=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(V){let J=S[V];return J===void 0&&(J=new Io,S[V]=J),J.getTargetRaySpace()},this.getControllerGrip=function(V){let J=S[V];return J===void 0&&(J=new Io,S[V]=J),J.getGripSpace()},this.getHand=function(V){let J=S[V];return J===void 0&&(J=new Io,S[V]=J),J.getHandSpace()};function B(V){let J=E.indexOf(V.inputSource);if(J===-1)return;let fe=S[J];fe!==void 0&&(fe.update(V.inputSource,V.frame,c||o),fe.dispatchEvent({type:V.type,data:V.inputSource}))}function $(){s.removeEventListener("select",B),s.removeEventListener("selectstart",B),s.removeEventListener("selectend",B),s.removeEventListener("squeeze",B),s.removeEventListener("squeezestart",B),s.removeEventListener("squeezeend",B),s.removeEventListener("end",$),s.removeEventListener("inputsourceschange",se);for(let V=0;V<S.length;V++){let J=E[V];J!==null&&(E[V]=null,S[V].disconnect(J))}L=null,F=null,g.reset();for(let V in p)delete p[V];if(e.setRenderTarget(M),u=null,h=null,f=null,s=null,_=null,Le.stop(),i.isPresenting=!1,e.setPixelRatio(x),e.setSize(P.width,P.height,!1),A!==null){let V=A.camera;V.fov=A.fov,V.zoom=A.zoom,V.updateProjectionMatrix(),A=null}i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(V){r=V,i.isPresenting===!0&&Xe("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(V){a=V,i.isPresenting===!0&&Xe("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||o},this.setReferenceSpace=function(V){c=V},this.getBaseLayer=function(){return h!==null?h:u},this.getBinding=function(){return f===null&&y&&(f=new XRWebGLBinding(s,t)),f},this.getFrame=function(){return m},this.getSession=function(){return s},this.setSession=async function(V){if(s=V,s!==null){if(M=e.getRenderTarget(),s.addEventListener("select",B),s.addEventListener("selectstart",B),s.addEventListener("selectend",B),s.addEventListener("squeeze",B),s.addEventListener("squeezestart",B),s.addEventListener("squeezeend",B),s.addEventListener("end",$),s.addEventListener("inputsourceschange",se),v.xrCompatible!==!0&&await t.makeXRCompatible(),x=e.getPixelRatio(),e.getSize(P),y&&"createProjectionLayer"in XRWebGLBinding.prototype){let fe=null,Ye=null,Ae=null;v.depth&&(Ae=v.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,fe=v.stencil?ir:os,Ye=v.stencil?zo:Xi);let Ke={colorFormat:t.RGBA8,depthFormat:Ae,scaleFactor:r};f=this.getBinding(),h=f.createProjectionLayer(Ke),s.updateRenderState({layers:[h]}),e.setPixelRatio(1),e.setSize(h.textureWidth,h.textureHeight,!1),_=new hn(h.textureWidth,h.textureHeight,{format:wi,type:Jn,depthTexture:new Xs(h.textureWidth,h.textureHeight,Ye,void 0,void 0,void 0,void 0,void 0,void 0,fe),stencilBuffer:v.stencil,colorSpace:e.outputColorSpace,samples:v.antialias?4:0,resolveDepthBuffer:h.ignoreDepthValues===!1,resolveStencilBuffer:h.ignoreDepthValues===!1,storeMultisampledDepthBuffer:h.ignoreDepthValues===!1,storeMultisampledStencilBuffer:h.ignoreDepthValues===!1})}else{let fe={antialias:v.antialias,alpha:!0,depth:v.depth,stencil:v.stencil,framebufferScaleFactor:r};u=new XRWebGLLayer(s,t,fe),s.updateRenderState({baseLayer:u}),e.setPixelRatio(1),e.setSize(u.framebufferWidth,u.framebufferHeight,!1),_=new hn(u.framebufferWidth,u.framebufferHeight,{format:wi,type:Jn,colorSpace:e.outputColorSpace,stencilBuffer:v.stencil,resolveDepthBuffer:u.ignoreDepthValues===!1,resolveStencilBuffer:u.ignoreDepthValues===!1,storeMultisampledDepthBuffer:u.ignoreDepthValues===!1,storeMultisampledStencilBuffer:u.ignoreDepthValues===!1})}_.isXRRenderTarget=!0,this.setFoveation(l),c=null,o=await s.requestReferenceSpace(a),Le.setContext(s),Le.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return g.getDepthTexture()};function se(V){for(let J=0;J<V.removed.length;J++){let fe=V.removed[J],Ye=E.indexOf(fe);Ye>=0&&(E[Ye]=null,S[Ye].disconnect(fe))}for(let J=0;J<V.added.length;J++){let fe=V.added[J],Ye=E.indexOf(fe);if(Ye===-1){for(let Ke=0;Ke<S.length;Ke++)if(Ke>=E.length){E.push(fe),Ye=Ke;break}else if(E[Ke]===null){E[Ke]=fe,Ye=Ke;break}if(Ye===-1)break}let Ae=S[Ye];Ae&&Ae.connect(fe)}}let X=new I,Q=new I;function ne(V,J,fe){X.setFromMatrixPosition(J.matrixWorld),Q.setFromMatrixPosition(fe.matrixWorld);let Ye=X.distanceTo(Q),Ae=J.projectionMatrix.elements,Ke=fe.projectionMatrix.elements,Rt=Ae[14]/(Ae[10]-1),ie=Ae[14]/(Ae[10]+1),ae=(Ae[9]+1)/Ae[5],ce=(Ae[9]-1)/Ae[5],he=(Ae[8]-1)/Ae[0],me=(Ke[8]+1)/Ke[0],We=Rt*he,Ve=Rt*me,Ze=Ye/(-he+me),tt=Ze*-he;if(J.matrixWorld.decompose(V.position,V.quaternion,V.scale),V.translateX(tt),V.translateZ(Ze),V.matrixWorld.compose(V.position,V.quaternion,V.scale),V.matrixWorldInverse.copy(V.matrixWorld).invert(),Ae[10]===-1)V.projectionMatrix.copy(J.projectionMatrix),V.projectionMatrixInverse.copy(J.projectionMatrixInverse);else{let N=Rt+Ze,Mt=ie+Ze,ut=We-tt,R=Ve+(Ye-tt),b=ae*ie/Mt*N,H=ce*ie/Mt*N;V.projectionMatrix.makePerspective(ut,R,b,H,N,Mt),V.projectionMatrixInverse.copy(V.projectionMatrix).invert()}}function Oe(V,J){J===null?V.matrixWorld.copy(V.matrix):V.matrixWorld.multiplyMatrices(J.matrixWorld,V.matrix),V.matrixWorldInverse.copy(V.matrixWorld).invert()}this.updateCamera=function(V){if(s===null)return;let J=V.near,fe=V.far;g.texture!==null&&(g.depthNear>0&&(J=g.depthNear),g.depthFar>0&&(fe=g.depthFar)),D.near=C.near=T.near=J,D.far=C.far=T.far=fe,(L!==D.near||F!==D.far)&&(s.updateRenderState({depthNear:D.near,depthFar:D.far}),L=D.near,F=D.far),D.layers.mask=V.layers.mask|6,T.layers.mask=D.layers.mask&-5,C.layers.mask=D.layers.mask&-3;let Ye=V.parent,Ae=D.cameras;Oe(D,Ye);for(let Ke=0;Ke<Ae.length;Ke++)Oe(Ae[Ke],Ye);Ae.length===2?ne(D,T,C):D.projectionMatrix.copy(T.projectionMatrix),A===null&&V.isPerspectiveCamera&&(A={camera:V,fov:V.fov,zoom:V.zoom}),Ce(V,D,Ye)};function Ce(V,J,fe){fe===null?V.matrix.copy(J.matrixWorld):(V.matrix.copy(fe.matrixWorld),V.matrix.invert(),V.matrix.multiply(J.matrixWorld)),V.matrix.decompose(V.position,V.quaternion,V.scale),V.updateMatrixWorld(!0),V.projectionMatrix.copy(J.projectionMatrix),V.projectionMatrixInverse.copy(J.projectionMatrixInverse),V.isPerspectiveCamera&&(V.fov=Ro*2*Math.atan(1/V.projectionMatrix.elements[5]),V.zoom=1)}this.getCamera=function(){return D},this.getFoveation=function(){if(!(h===null&&u===null))return l},this.setFoveation=function(V){l=V,h!==null&&(h.fixedFoveation=V),u!==null&&u.fixedFoveation!==void 0&&(u.fixedFoveation=V)},this.hasDepthSensing=function(){return g.texture!==null},this.getDepthSensingMesh=function(){return g.getMesh(D)},this.getCameraTexture=function(V){return p[V]};let mt=null;function at(V,J){if(d=J.getViewerPose(c||o),m=J,d!==null){let fe=d.views;u!==null&&(e.setRenderTargetFramebuffer(_,u.framebuffer),e.setRenderTarget(_));let Ye=!1;fe.length!==D.cameras.length&&(D.cameras.length=0,Ye=!0);for(let ie=0;ie<fe.length;ie++){let ae=fe[ie],ce=null;if(u!==null)ce=u.getViewport(ae);else{let me=f.getViewSubImage(h,ae);ce=me.viewport,ie===0&&(e.setRenderTargetTextures(_,me.colorTexture,me.depthStencilTexture),e.setRenderTarget(_))}let he=k[ie];he===void 0&&(he=new An,he.layers.enable(ie),he.viewport=new Xt,k[ie]=he),he.matrix.fromArray(ae.transform.matrix),he.matrix.decompose(he.position,he.quaternion,he.scale),he.projectionMatrix.fromArray(ae.projectionMatrix),he.projectionMatrixInverse.copy(he.projectionMatrix).invert(),he.viewport.set(ce.x,ce.y,ce.width,ce.height),ie===0&&(D.matrix.copy(he.matrix),D.matrix.decompose(D.position,D.quaternion,D.scale)),Ye===!0&&D.cameras.push(he)}let Ae=s.enabledFeatures;if(Ae&&Ae.includes("depth-sensing")&&s.depthUsage=="gpu-optimized"&&y){f=i.getBinding();let ie=f.getDepthInformation(fe[0]);ie&&ie.isValid&&ie.texture&&g.init(ie,s.renderState)}if(Ae&&Ae.includes("camera-access")&&y){e.state.unbindTexture(),f=i.getBinding();for(let ie=0;ie<fe.length;ie++){let ae=fe[ie].camera;if(ae){let ce=p[ae];ce||(ce=new Ka,p[ae]=ce);let he=f.getCameraImage(ae);ce.sourceTexture=he}}}}for(let fe=0;fe<S.length;fe++){let Ye=E[fe],Ae=S[fe];Ye!==null&&Ae!==void 0&&Ae.update(Ye,J,c||o)}mt&&mt(V,J),J.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:J}),m=null}let Le=new W0;Le.setAnimationLoop(at),this.setAnimationLoop=function(V){mt=V},this.dispose=function(){}}},lw=new Et,Z0=new et;Z0.set(-1,0,0,0,1,0,0,0,1);function cw(n,e){function t(g,p){g.matrixAutoUpdate===!0&&g.updateMatrix(),p.value.copy(g.matrix)}function i(g,p){p.color.getRGB(g.fogColor.value,uf(n)),p.isFog?(g.fogNear.value=p.near,g.fogFar.value=p.far):p.isFogExp2&&(g.fogDensity.value=p.density)}function s(g,p,v,M,_){p.isNodeMaterial?p.uniformsNeedUpdate=!1:p.isMeshBasicMaterial?r(g,p):p.isMeshLambertMaterial?(r(g,p),p.envMap&&(g.envMapIntensity.value=p.envMapIntensity)):p.isMeshToonMaterial?(r(g,p),f(g,p)):p.isMeshPhongMaterial?(r(g,p),d(g,p),p.envMap&&(g.envMapIntensity.value=p.envMapIntensity)):p.isMeshStandardMaterial?(r(g,p),h(g,p),p.isMeshPhysicalMaterial&&u(g,p,_)):p.isMeshMatcapMaterial?(r(g,p),m(g,p)):p.isMeshDepthMaterial?r(g,p):p.isMeshDistanceMaterial?(r(g,p),y(g,p)):p.isMeshNormalMaterial?r(g,p):p.isLineBasicMaterial?(o(g,p),p.isLineDashedMaterial&&a(g,p)):p.isPointsMaterial?l(g,p,v,M):p.isSpriteMaterial?c(g,p):p.isShadowMaterial?(g.color.value.copy(p.color),g.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function r(g,p){g.opacity.value=p.opacity,p.color&&g.diffuse.value.copy(p.color),p.emissive&&g.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(g.map.value=p.map,t(p.map,g.mapTransform)),p.alphaMap&&(g.alphaMap.value=p.alphaMap,t(p.alphaMap,g.alphaMapTransform)),p.bumpMap&&(g.bumpMap.value=p.bumpMap,t(p.bumpMap,g.bumpMapTransform),g.bumpScale.value=p.bumpScale,p.side===Pn&&(g.bumpScale.value*=-1)),p.normalMap&&(g.normalMap.value=p.normalMap,t(p.normalMap,g.normalMapTransform),g.normalScale.value.copy(p.normalScale),p.side===Pn&&g.normalScale.value.negate()),p.displacementMap&&(g.displacementMap.value=p.displacementMap,t(p.displacementMap,g.displacementMapTransform),g.displacementScale.value=p.displacementScale,g.displacementBias.value=p.displacementBias),p.emissiveMap&&(g.emissiveMap.value=p.emissiveMap,t(p.emissiveMap,g.emissiveMapTransform)),p.specularMap&&(g.specularMap.value=p.specularMap,t(p.specularMap,g.specularMapTransform)),p.alphaTest>0&&(g.alphaTest.value=p.alphaTest);let v=e.get(p),M=v.envMap,_=v.envMapRotation;M&&(g.envMap.value=M,g.envMapRotation.value.setFromMatrix4(lw.makeRotationFromEuler(_)).transpose(),M.isCubeTexture&&M.isRenderTargetTexture===!1&&g.envMapRotation.value.premultiply(Z0),g.reflectivity.value=p.reflectivity,g.ior.value=p.ior,g.refractionRatio.value=p.refractionRatio),p.lightMap&&(g.lightMap.value=p.lightMap,g.lightMapIntensity.value=p.lightMapIntensity,t(p.lightMap,g.lightMapTransform)),p.aoMap&&(g.aoMap.value=p.aoMap,g.aoMapIntensity.value=p.aoMapIntensity,t(p.aoMap,g.aoMapTransform))}function o(g,p){g.diffuse.value.copy(p.color),g.opacity.value=p.opacity,p.map&&(g.map.value=p.map,t(p.map,g.mapTransform))}function a(g,p){g.dashSize.value=p.dashSize,g.totalSize.value=p.dashSize+p.gapSize,g.scale.value=p.scale}function l(g,p,v,M){g.diffuse.value.copy(p.color),g.opacity.value=p.opacity,g.size.value=p.size*v,g.scale.value=M*.5,p.map&&(g.map.value=p.map,t(p.map,g.uvTransform)),p.alphaMap&&(g.alphaMap.value=p.alphaMap,t(p.alphaMap,g.alphaMapTransform)),p.alphaTest>0&&(g.alphaTest.value=p.alphaTest)}function c(g,p){g.diffuse.value.copy(p.color),g.opacity.value=p.opacity,g.rotation.value=p.rotation,p.map&&(g.map.value=p.map,t(p.map,g.mapTransform)),p.alphaMap&&(g.alphaMap.value=p.alphaMap,t(p.alphaMap,g.alphaMapTransform)),p.alphaTest>0&&(g.alphaTest.value=p.alphaTest)}function d(g,p){g.specular.value.copy(p.specular),g.shininess.value=Math.max(p.shininess,1e-4)}function f(g,p){p.gradientMap&&(g.gradientMap.value=p.gradientMap)}function h(g,p){g.metalness.value=p.metalness,p.metalnessMap&&(g.metalnessMap.value=p.metalnessMap,t(p.metalnessMap,g.metalnessMapTransform)),g.roughness.value=p.roughness,p.roughnessMap&&(g.roughnessMap.value=p.roughnessMap,t(p.roughnessMap,g.roughnessMapTransform)),p.envMap&&(g.envMapIntensity.value=p.envMapIntensity)}function u(g,p,v){g.ior.value=p.ior,p.sheen>0&&(g.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),g.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(g.sheenColorMap.value=p.sheenColorMap,t(p.sheenColorMap,g.sheenColorMapTransform)),p.sheenRoughnessMap&&(g.sheenRoughnessMap.value=p.sheenRoughnessMap,t(p.sheenRoughnessMap,g.sheenRoughnessMapTransform))),p.clearcoat>0&&(g.clearcoat.value=p.clearcoat,g.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(g.clearcoatMap.value=p.clearcoatMap,t(p.clearcoatMap,g.clearcoatMapTransform)),p.clearcoatRoughnessMap&&(g.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap,t(p.clearcoatRoughnessMap,g.clearcoatRoughnessMapTransform)),p.clearcoatNormalMap&&(g.clearcoatNormalMap.value=p.clearcoatNormalMap,t(p.clearcoatNormalMap,g.clearcoatNormalMapTransform),g.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),p.side===Pn&&g.clearcoatNormalScale.value.negate())),p.dispersion>0&&(g.dispersion.value=p.dispersion),p.retroreflectivity>0&&(g.retroreflectivity.value=p.retroreflectivity),p.iridescence>0&&(g.iridescence.value=p.iridescence,g.iridescenceIOR.value=p.iridescenceIOR,g.iridescenceThicknessMinimum.value=p.iridescenceThicknessRange[0],g.iridescenceThicknessMaximum.value=p.iridescenceThicknessRange[1],p.iridescenceMap&&(g.iridescenceMap.value=p.iridescenceMap,t(p.iridescenceMap,g.iridescenceMapTransform)),p.iridescenceThicknessMap&&(g.iridescenceThicknessMap.value=p.iridescenceThicknessMap,t(p.iridescenceThicknessMap,g.iridescenceThicknessMapTransform))),p.transmission>0&&(g.transmission.value=p.transmission,g.transmissionSamplerMap.value=v.texture,g.transmissionSamplerSize.value.set(v.width,v.height),p.transmissionMap&&(g.transmissionMap.value=p.transmissionMap,t(p.transmissionMap,g.transmissionMapTransform)),g.thickness.value=p.thickness,p.thicknessMap&&(g.thicknessMap.value=p.thicknessMap,t(p.thicknessMap,g.thicknessMapTransform)),g.attenuationDistance.value=p.attenuationDistance,g.attenuationColor.value.copy(p.attenuationColor)),p.anisotropy>0&&(g.anisotropyVector.value.set(p.anisotropy*Math.cos(p.anisotropyRotation),p.anisotropy*Math.sin(p.anisotropyRotation)),p.anisotropyMap&&(g.anisotropyMap.value=p.anisotropyMap,t(p.anisotropyMap,g.anisotropyMapTransform))),g.specularIntensity.value=p.specularIntensity,g.specularColor.value.copy(p.specularColor),p.specularColorMap&&(g.specularColorMap.value=p.specularColorMap,t(p.specularColorMap,g.specularColorMapTransform)),p.specularIntensityMap&&(g.specularIntensityMap.value=p.specularIntensityMap,t(p.specularIntensityMap,g.specularIntensityMapTransform))}function m(g,p){p.matcap&&(g.matcap.value=p.matcap)}function y(g,p){let v=e.get(p).light;g.referencePosition.value.setFromMatrixPosition(v.matrixWorld),g.nearDistance.value=v.shadow.camera.near,g.farDistance.value=v.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:s}}function hw(n,e,t,i){let s={},r={},o=[],a=n.getParameter(n.MAX_UNIFORM_BUFFER_BINDINGS);function l(_,S){let E=S.program;i.uniformBlockBinding(_,E)}function c(_,S){let E=s[_.id];E===void 0&&(g(_),E=d(_),s[_.id]=E,_.addEventListener("dispose",v));let P=S.program;i.updateUBOMapping(_,P);let x=e.render.frame;r[_.id]!==x&&(h(_),r[_.id]=x)}function d(_){let S=f();_.__bindingPointIndex=S;let E=n.createBuffer(),P=_.__size,x=_.usage;return n.bindBuffer(n.UNIFORM_BUFFER,E),n.bufferData(n.UNIFORM_BUFFER,P,x),n.bindBuffer(n.UNIFORM_BUFFER,null),n.bindBufferBase(n.UNIFORM_BUFFER,S,E),E}function f(){for(let _=0;_<a;_++)if(o.indexOf(_)===-1)return o.push(_),_;return qe("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function h(_){let S=s[_.id],E=_.uniforms,P=_.__cache;n.bindBuffer(n.UNIFORM_BUFFER,S);for(let x=0,A=E.length;x<A;x++){let T=E[x];if(Array.isArray(T))for(let C=0,k=T.length;C<k;C++)u(T[C],x,C,P);else u(T,x,0,P)}n.bindBuffer(n.UNIFORM_BUFFER,null)}function u(_,S,E,P){if(y(_,S,E,P)===!0){let x=_.__offset,A=_.value;if(Array.isArray(A)){let T=0;for(let C=0;C<A.length;C++){let k=A[C],D=p(k);m(k,_.__data,T),typeof k!="number"&&typeof k!="boolean"&&!k.isMatrix3&&!ArrayBuffer.isView(k)&&(T+=D.storage/Float32Array.BYTES_PER_ELEMENT)}}else m(A,_.__data,0);n.bufferSubData(n.UNIFORM_BUFFER,x,_.__data)}}function m(_,S,E){typeof _=="number"||typeof _=="boolean"?S[0]=_:_.isMatrix3?(S[0]=_.elements[0],S[1]=_.elements[1],S[2]=_.elements[2],S[3]=0,S[4]=_.elements[3],S[5]=_.elements[4],S[6]=_.elements[5],S[7]=0,S[8]=_.elements[6],S[9]=_.elements[7],S[10]=_.elements[8],S[11]=0):ArrayBuffer.isView(_)?S.set(new _.constructor(_.buffer,_.byteOffset,S.length)):_.toArray(S,E)}function y(_,S,E,P){let x=_.value,A=S+"_"+E;if(P[A]===void 0)return typeof x=="number"||typeof x=="boolean"?P[A]=x:ArrayBuffer.isView(x)?P[A]=x.slice():P[A]=x.clone(),!0;{let T=P[A];if(typeof x=="number"||typeof x=="boolean"){if(T!==x)return P[A]=x,!0}else{if(ArrayBuffer.isView(x))return!0;if(T.equals(x)===!1)return T.copy(x),!0}}return!1}function g(_){let S=_.uniforms,E=0,P=16;for(let A=0,T=S.length;A<T;A++){let C=Array.isArray(S[A])?S[A]:[S[A]];for(let k=0,D=C.length;k<D;k++){let L=C[k],F=Array.isArray(L.value)?L.value:[L.value];for(let B=0,$=F.length;B<$;B++){let se=F[B],X=p(se),Q=E%P,ne=Q%X.boundary,Oe=Q+ne;E+=ne,Oe!==0&&P-Oe<X.storage&&(E+=P-Oe),L.__data=new Float32Array(X.storage/Float32Array.BYTES_PER_ELEMENT),L.__offset=E,E+=X.storage}}}let x=E%P;return x>0&&(E+=P-x),_.__size=E,_.__cache={},this}function p(_){let S={boundary:0,storage:0};return typeof _=="number"||typeof _=="boolean"?(S.boundary=4,S.storage=4):_.isVector2?(S.boundary=8,S.storage=8):_.isVector3||_.isColor?(S.boundary=16,S.storage=12):_.isVector4?(S.boundary=16,S.storage=16):_.isMatrix3?(S.boundary=48,S.storage=48):_.isMatrix4?(S.boundary=64,S.storage=64):_.isTexture?Xe("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(_)?(S.boundary=16,S.storage=_.byteLength):Xe("WebGLRenderer: Unsupported uniform value type.",_),S}function v(_){let S=_.target;S.removeEventListener("dispose",v);let E=o.indexOf(S.__bindingPointIndex);o.splice(E,1),n.deleteBuffer(s[S.id]),delete s[S.id],delete r[S.id]}function M(){for(let _ in s)n.deleteBuffer(s[_]);o=[],s={},r={}}return{bind:l,update:c,dispose:M}}var uw=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]),ds=null;function dw(){return ds===null&&(ds=new $a(uw,16,16,sr,In),ds.name="DFG_LUT",ds.minFilter=Rn,ds.magFilter=Rn,ds.wrapS=ss,ds.wrapT=ss,ds.generateMipmaps=!1,ds.needsUpdate=!0),ds}var gu=class{constructor(e={}){let{canvas:t=u0(),context:i=null,depth:s=!0,stencil:r=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:d="default",failIfMajorPerformanceCaveat:f=!1,reversedDepthBuffer:h=!1,outputBufferType:u=Jn}=e;this.isWebGLRenderer=!0;let m;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");m=i.getContextAttributes().alpha}else m=o;let y=u,g=new Set([Dh,Lh,kh]),p=new Set([Jn,Xi,Ho,zo,Ch,Ph]),v=new Uint32Array(4),M=new Int32Array(4),_=new I,S=null,E=null,P=[],x=[],A=null;this.domElement=t,this.debug={checkShaderErrors:!0,diagnostics:{keywords:!1},onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=qi,this.toneMappingExposure=1,this.transmissionResolutionScale=1;let T=this,C=!1,k=null,D=null,L=null,F=null;this._outputColorSpace=Vt;let B=0,$=0,se=null,X=-1,Q=null,ne=new Xt,Oe=new Xt,Ce=null,mt=new Ie(0),at=0,Le=t.width,V=t.height,J=1,fe=null,Ye=null,Ae=new Xt(0,0,Le,V),Ke=new Xt(0,0,Le,V),Rt=!1,ie=new ko,ae=!1,ce=!1,he=new Et,me=new I,We=new Xt,Ve={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},Ze=!1;function tt(){return se===null?J:1}let N=i;function Mt(w,U){return t.getContext(w,U)}let ut,R,b,H,W,Y,ue,pe,Z,te,ye,He,be,_e,ze,$e,nt,O,ve,ee,xe,Te,re;try{let w={alpha:!0,depth:s,stencil:r,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:d,failIfMajorPerformanceCaveat:f};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${"186"}`),t.addEventListener("webglcontextlost",Ut,!1),t.addEventListener("webglcontextrestored",St,!1),t.addEventListener("webglcontextcreationerror",Ui,!1),N===null){let U="webgl2";if(N=Mt(U,w),N===null)throw Mt(U)?new Error("THREE.WebGLRenderer: Error creating WebGL context with your selected attributes."):new Error("THREE.WebGLRenderer: Error creating WebGL context.")}Ge()}catch(w){throw t.removeEventListener("webglcontextlost",Ut,!1),t.removeEventListener("webglcontextrestored",St,!1),t.removeEventListener("webglcontextcreationerror",Ui,!1),qe("WebGLRenderer: "+w.message),w}function Ge(){ut=new vM(N),ut.init(),xe=new rw(N,ut),R=new cM(N,ut,e,xe),b=new iw(N,ut),R.reversedDepthBuffer&&h&&b.buffers.depth.setReversed(!0),D=N.createFramebuffer(),L=N.createFramebuffer(),F=N.createFramebuffer(),H=new MM(N),W=new VS,Y=new sw(N,ut,b,W,R,xe,H),ue=new _M(T),pe=new wv(N),Te=new aM(N,pe),Z=new xM(N,pe,H,Te),te=new wM(N,Z,pe,Te,H),O=new SM(N,R,Y),ze=new hM(W),ye=new GS(T,ue,ut,R,Te,ze),He=new cw(T,W),be=new $S,_e=new JS(ut),nt=new oM(T,ue,b,te,m,l),$e=new nw(T,te,R),re=new hw(N,H,R,b),ve=new lM(N,ut,H),ee=new bM(N,ut,H),H.programs=ye.programs,T.capabilities=R,T.extensions=ut,T.properties=W,T.renderLists=be,T.shadowMap=$e,T.state=b,T.info=H}y!==Jn&&(A=new TM(y,t.width,t.height,a,s,r));let Fe=new Df(T,N);this.xr=Fe,this.getContext=function(){return N},this.getContextAttributes=function(){return N.getContextAttributes()},this.forceContextLoss=function(){let w=ut.get("WEBGL_lose_context");w&&w.loseContext()},this.forceContextRestore=function(){let w=ut.get("WEBGL_lose_context");w&&w.restoreContext()},this.getPixelRatio=function(){return J},this.setPixelRatio=function(w){w!==void 0&&(J=w,this.setSize(Le,V,!1))},this.getSize=function(w){return w.set(Le,V)},this.setSize=function(w,U,q=!0){if(Fe.isPresenting){Xe("WebGLRenderer: Can't change size while VR device is presenting.");return}Le=w,V=U,t.width=Math.floor(w*J),t.height=Math.floor(U*J),q===!0&&(t.style.width=w+"px",t.style.height=U+"px"),A!==null&&A.setSize(t.width,t.height),this.setViewport(0,0,w,U)},this.getDrawingBufferSize=function(w){return w.set(Le*J,V*J).floor()},this.setDrawingBufferSize=function(w,U,q){Le=w,V=U,J=q,t.width=Math.floor(w*q),t.height=Math.floor(U*q),this.setViewport(0,0,w,U)},this.setEffects=function(w){if(y===Jn){qe("WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(w){for(let U=0;U<w.length;U++)if(w[U].isOutputPass===!0){Xe("WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}A.setEffects(w||[])},this.getCurrentViewport=function(w){return w.copy(ne)},this.getViewport=function(w){return w.copy(Ae)},this.setViewport=function(w,U,q,z){w.isVector4?Ae.set(w.x,w.y,w.z,w.w):Ae.set(w,U,q,z),b.viewport(ne.copy(Ae).multiplyScalar(J).round())},this.getScissor=function(w){return w.copy(Ke)},this.setScissor=function(w,U,q,z){w.isVector4?Ke.set(w.x,w.y,w.z,w.w):Ke.set(w,U,q,z),b.scissor(Oe.copy(Ke).multiplyScalar(J).round())},this.getScissorTest=function(){return Rt},this.setScissorTest=function(w){b.setScissorTest(Rt=w)},this.setOpaqueSort=function(w){fe=w},this.setTransparentSort=function(w){Ye=w},this.getClearColor=function(w){return w.copy(nt.getClearColor())},this.setClearColor=function(){nt.setClearColor(...arguments)},this.getClearAlpha=function(){return nt.getClearAlpha()},this.setClearAlpha=function(){nt.setClearAlpha(...arguments)},this.clear=function(w=!0,U=!0,q=!0){let z=0;if(w){let G=!1;if(se!==null){let we=se.texture.format;G=g.has(we)}if(G){let we=se.texture.type,Pe=p.has(we),Se=nt.getClearColor(),Ne=nt.getClearAlpha(),Be=Se.r,rt=Se.g,dt=Se.b;Pe?(v[0]=Be,v[1]=rt,v[2]=dt,v[3]=Ne,N.clearBufferuiv(N.COLOR,0,v)):(M[0]=Be,M[1]=rt,M[2]=dt,M[3]=Ne,N.clearBufferiv(N.COLOR,0,M))}else z|=N.COLOR_BUFFER_BIT}U&&(z|=N.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),q&&(z|=N.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),z!==0&&N.clear(z)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(w){w.setRenderer(this),k=w},this.dispose=function(){t.removeEventListener("webglcontextlost",Ut,!1),t.removeEventListener("webglcontextrestored",St,!1),t.removeEventListener("webglcontextcreationerror",Ui,!1),nt.dispose(),be.dispose(),_e.dispose(),W.dispose(),ue.dispose(),te.dispose(),Te.dispose(),re.dispose(),ye.dispose(),Fe.dispose(),Fe.removeEventListener("sessionstart",zp),Fe.removeEventListener("sessionend",Gp),xr.stop()};function Ut(w){w.preventDefault(),Ba("WebGLRenderer: Context Lost."),C=!0}function St(){Ba("WebGLRenderer: Context Restored."),C=!1;let w=H.autoReset,U=$e.enabled,q=$e.autoUpdate,z=$e.needsUpdate,G=$e.type;Ge(),H.autoReset=w,$e.enabled=U,$e.autoUpdate=q,$e.needsUpdate=z,$e.type=G}function Ui(w){qe("WebGLRenderer: A WebGL context could not be created. Reason: ",w.statusMessage)}function ts(w){let U=w.target;U.removeEventListener("dispose",ts),qy(U)}function qy(w){Xy(w),W.remove(w)}function Xy(w){let U=W.get(w).programs;U!==void 0&&(U.forEach(function(q){ye.releaseProgram(q)}),w.isShaderMaterial&&ye.releaseShaderCache(w))}this.renderBufferDirect=function(w,U,q,z,G,we){U===null&&(U=Ve);let Pe=G.isMesh&&G.matrixWorld.determinantAffine()<0,Se=Zy(w,U,q,z,G);b.setMaterial(z,Pe);let Ne=q.index,Be=1;if(z.wireframe===!0){if(Ne=Z.getWireframeAttribute(q),Ne===void 0)return;Be=2}let rt=q.drawRange,dt=q.attributes.position,Ue=rt.start*Be,wt=(rt.start+rt.count)*Be;we!==null&&(Ue=Math.max(Ue,we.start*Be),wt=Math.min(wt,(we.start+we.count)*Be)),Ne!==null?(Ue=Math.max(Ue,0),wt=Math.min(wt,Ne.count)):dt!=null&&(Ue=Math.max(Ue,0),wt=Math.min(wt,dt.count));let ln=wt-Ue;if(ln<0||ln===1/0)return;Te.setup(G,z,Se,q,Ne);let zt,Dt=ve;if(Ne!==null&&(zt=pe.get(Ne),Dt=ee,Dt.setIndex(zt)),G.isMesh)z.wireframe===!0?(b.setLineWidth(z.wireframeLinewidth*tt()),Dt.setMode(N.LINES)):Dt.setMode(N.TRIANGLES);else if(G.isLine){let Nn=z.linewidth;Nn===void 0&&(Nn=1),b.setLineWidth(Nn*tt()),G.isLineSegments?Dt.setMode(N.LINES):G.isLineLoop?Dt.setMode(N.LINE_LOOP):Dt.setMode(N.LINE_STRIP)}else G.isPoints?Dt.setMode(N.POINTS):G.isSprite&&Dt.setMode(N.TRIANGLES);if(G.isBatchedMesh)if(ut.get("WEBGL_multi_draw"))Dt.renderMultiDraw(G._multiDrawStarts,G._multiDrawCounts,G._multiDrawCount);else{let Nn=G._multiDrawStarts,Re=G._multiDrawCounts,Gn=G._multiDrawCount,vt=Ne?pe.get(Ne).bytesPerElement:1,_i=W.get(z).currentProgram.getUniforms();for(let ns=0;ns<Gn;ns++)_i.setValue(N,"_gl_DrawID",ns),Dt.render(Nn[ns]/vt,Re[ns])}else if(G.isInstancedMesh)Dt.renderInstances(Ue,ln,G.count);else if(q.isInstancedBufferGeometry){let Nn=q._maxInstanceCount!==void 0?q._maxInstanceCount:1/0,Re=Math.min(q.instanceCount,Nn);Dt.renderInstances(Ue,ln,Re)}else Dt.render(Ue,ln)};function Hp(w,U,q,z){k!==null&&w.isNodeMaterial&&k.setObject(z,w),ae===!0&&ze.setState(w,q,!1),w.transparent===!0&&w.side===pn&&w.forceSinglePass===!1?(w.side=Pn,w.needsUpdate=!0,fc(w,U,z),w.side=er,w.needsUpdate=!0,fc(w,U,z),w.side=pn):fc(w,U,z)}this.compile=function(w,U,q=null){q===null&&(q=w),k!==null&&k.renderStart(w,U,q),E=_e.get(q),E.init(U),x.push(E),q.traverseVisible(function(G){G.isLight&&G.layers.test(U.layers)&&(E.pushLight(G),G.castShadow&&E.pushShadow(G))}),w!==q&&w.traverseVisible(function(G){G.isLight&&G.layers.test(U.layers)&&(E.pushLight(G),G.castShadow&&E.pushShadow(G))}),E.setupLights(),k!==null&&k.updateLights(E.state.lightsArray),ce=this.localClippingEnabled,ae=ze.init(this.clippingPlanes,ce),ae===!0&&ze.setGlobalState(this.clippingPlanes,U),k!==null&&$e.render(E.state.shadowsArray,q,U);let z=new Set;return w.traverse(function(G){if(!(G.isMesh||G.isPoints||G.isLine||G.isSprite))return;let we=G.material;if(we)if(Array.isArray(we))for(let Pe=0;Pe<we.length;Pe++){let Se=we[Pe];Hp(Se,q,U,G),z.add(Se)}else Hp(we,q,U,G),z.add(we)}),E=x.pop(),k!==null&&k.renderEnd(),z},this.compileAsync=function(w,U,q=null){let z=this.compile(w,U,q);return new Promise(G=>{function we(){if(z.forEach(function(Pe){let Ne=W.get(Pe).currentProgram;(Ne===void 0||Ne.isReady())&&z.delete(Pe)}),z.size===0){G(w);return}setTimeout(we,10)}ut.get("KHR_parallel_shader_compile")!==null?we():setTimeout(we,10)})};let ad=null;function Yy(w){ad&&ad(w)}function zp(){xr.stop()}function Gp(){xr.start()}let xr=new W0;xr.setAnimationLoop(Yy),typeof self<"u"&&xr.setContext(self),this.setAnimationLoop=function(w){ad=w,Fe.setAnimationLoop(w),w===null?xr.stop():xr.start()},Fe.addEventListener("sessionstart",zp),Fe.addEventListener("sessionend",Gp),this.render=function(w,U){if(U!==void 0&&U.isCamera!==!0){qe("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(C===!0)return;k!==null&&k.renderStart(w,U);let q=Fe.enabled===!0&&Fe.isPresenting===!0,z=A!==null&&(se===null||q)&&A.begin(T,se);if(w.matrixWorldAutoUpdate===!0&&w.updateMatrixWorld(),U.parent===null&&U.matrixWorldAutoUpdate===!0&&U.updateMatrixWorld(),Fe.enabled===!0&&Fe.isPresenting===!0&&(A===null||A.isCompositing()===!1)&&(Fe.cameraAutoUpdate===!0&&Fe.updateCamera(U),U=Fe.getCamera()),w.isScene===!0&&w.onBeforeRender(T,w,U,se),E=_e.get(w,x.length),E.init(U),E.state.textureUnits=Y.getTextureUnits(),x.push(E),he.multiplyMatrices(U.projectionMatrix,U.matrixWorldInverse),ie.setFromProjectionMatrix(he,zi,U.reversedDepth),ce=this.localClippingEnabled,ae=ze.init(this.clippingPlanes,ce),S=be.get(w,P.length),S.init(),P.push(S),Fe.enabled===!0&&Fe.isPresenting===!0){let Pe=T.xr.getDepthSensingMesh();Pe!==null&&ld(Pe,U,-1/0,T.sortObjects)}ld(w,U,0,T.sortObjects),S.finish(),k!==null&&k.updateLights(E.state.lightsArray),T.sortObjects===!0&&S.sort(fe,Ye),Ze=Fe.enabled===!1||Fe.isPresenting===!1||Fe.hasDepthSensing()===!1,Ze&&nt.addToRenderList(S,w),this.info.render.frame++,this.info.autoReset===!0&&this.info.reset(),ae===!0&&ze.beginShadows();let G=E.state.shadowsArray;if($e.render(G,w,U),ae===!0&&ze.endShadows(),(z&&A.hasRenderPass())===!1){let Pe=S.opaque,Se=S.transmissive;if(E.setupLights(),U.isArrayCamera){let Ne=U.cameras;if(Se.length>0)for(let Be=0,rt=Ne.length;Be<rt;Be++){let dt=Ne[Be];Wp(Pe,Se,w,dt)}Ze&&nt.render(w);for(let Be=0,rt=Ne.length;Be<rt;Be++){let dt=Ne[Be];Vp(S,w,dt,dt.viewport)}}else Se.length>0&&Wp(Pe,Se,w,U),Ze&&nt.render(w),Vp(S,w,U)}se!==null&&$===0&&(Y.updateMultisampleRenderTarget(se),Y.updateRenderTargetMipmap(se)),z&&A.end(T),w.isScene===!0&&w.onAfterRender(T,w,U),Te.resetDefaultState(),X=-1,Q=null,x.pop(),x.length>0?(E=x[x.length-1],Y.setTextureUnits(E.state.textureUnits),ae===!0&&ze.setGlobalState(T.clippingPlanes,E.state.camera)):E=null,P.pop(),P.length>0?S=P[P.length-1]:S=null,k!==null&&k.renderEnd()};function ld(w,U,q,z){if(w.visible===!1)return;if(w.layers.test(U.layers)){if(w.isGroup)q=w.renderOrder;else if(w.isLOD)w.autoUpdate===!0&&w.update(U);else if(w.isLightProbeGrid)E.pushLightProbeGrid(w);else if(w.isLight)E.pushLight(w),w.castShadow&&E.pushShadow(w);else if(w.isSprite){if(!w.frustumCulled||w.intersectsFrustum(ie)){z&&We.setFromMatrixPosition(w.matrixWorld).applyMatrix4(he);let Pe=te.update(w),Se=w.material;Se.visible&&S.push(w,Pe,Se,q,We.z,null,U)}}else if((w.isMesh||w.isLine||w.isPoints)&&(!w.frustumCulled||w.intersectsFrustum(ie))){let Pe=te.update(w),Se=w.material;if(z&&(w.boundingSphere!==void 0?(w.boundingSphere===null&&w.computeBoundingSphere(),We.copy(w.boundingSphere.center)):(Pe.boundingSphere===null&&Pe.computeBoundingSphere(),We.copy(Pe.boundingSphere.center)),We.applyMatrix4(w.matrixWorld).applyMatrix4(he)),Array.isArray(Se)){let Ne=Pe.groups;for(let Be=0,rt=Ne.length;Be<rt;Be++){let dt=Ne[Be],Ue=Se[dt.materialIndex];Ue&&Ue.visible&&S.push(w,Pe,Ue,q,We.z,dt,U)}}else Se.visible&&S.push(w,Pe,Se,q,We.z,null,U)}}let we=w.children;for(let Pe=0,Se=we.length;Pe<Se;Pe++)ld(we[Pe],U,q,z)}function Vp(w,U,q,z){let{opaque:G,transmissive:we,transparent:Pe}=w;E.setupLightsView(q),ae===!0&&ze.setGlobalState(T.clippingPlanes,q),z&&b.viewport(ne.copy(z)),G.length>0&&dc(G,U,q),we.length>0&&dc(we,U,q),Pe.length>0&&dc(Pe,U,q),b.buffers.depth.setTest(!0),b.buffers.depth.setMask(!0),b.buffers.color.setMask(!0),b.setPolygonOffset(!1)}function Wp(w,U,q,z){if((q.isScene===!0?q.overrideMaterial:null)!==null)return;if(E.state.transmissionRenderTarget[z.id]===void 0){let Ue=ut.has("EXT_color_buffer_half_float")||ut.has("EXT_color_buffer_float");E.state.transmissionRenderTarget[z.id]=new hn(1,1,{generateMipmaps:!0,type:Ue?In:Jn,minFilter:nr,samples:Math.max(4,R.samples),stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,colorSpace:ct.workingColorSpace})}let we=E.state.transmissionRenderTarget[z.id],Pe=z.viewport||ne;we.setSize(Pe.z*T.transmissionResolutionScale,Pe.w*T.transmissionResolutionScale);let Se=T.getRenderTarget(),Ne=T.getActiveCubeFace(),Be=T.getActiveMipmapLevel();T.setRenderTarget(we),T.getClearColor(mt),at=T.getClearAlpha(),at<1&&T.setClearColor(16777215,.5),T.clear(),Ze&&nt.render(q);let rt=T.toneMapping;T.toneMapping=qi;let dt=z.viewport;if(z.viewport!==void 0&&(z.viewport=void 0),E.setupLightsView(z),ae===!0&&ze.setGlobalState(T.clippingPlanes,z),dc(w,q,z),Y.updateMultisampleRenderTarget(we),Y.updateRenderTargetMipmap(we),ut.has("WEBGL_multisampled_render_to_texture")===!1){let Ue=!1;for(let wt=0,ln=U.length;wt<ln;wt++){let zt=U[wt],{object:Dt,geometry:Nn,material:Re,group:Gn}=zt;if(Re.side===pn&&Dt.layers.test(z.layers)){let vt=Re.side;Re.side=Pn,Re.needsUpdate=!0,$p(Dt,q,z,Nn,Re,Gn),Re.side=vt,Re.needsUpdate=!0,Ue=!0}}Ue===!0&&(Y.updateMultisampleRenderTarget(we),Y.updateRenderTargetMipmap(we))}T.setRenderTarget(Se,Ne,Be),T.setClearColor(mt,at),dt!==void 0&&(z.viewport=dt),T.toneMapping=rt}function dc(w,U,q){let z=U.isScene===!0?U.overrideMaterial:null;for(let G=0,we=w.length;G<we;G++){let Pe=w[G],{object:Se,geometry:Ne,group:Be}=Pe,rt=Pe.material;rt.allowOverride===!0&&z!==null&&(rt=z),Se.layers.test(q.layers)&&$p(Se,U,q,Ne,rt,Be)}}function $p(w,U,q,z,G,we){k!==null&&G.isNodeMaterial&&k.setObject(w,G),w.onBeforeRender(T,U,q,z,G,we),w.modelViewMatrix.multiplyMatrices(q.matrixWorldInverse,w.matrixWorld),w.normalMatrix.getNormalMatrix(w.modelViewMatrix),G.onBeforeRender(T,U,q,z,w,we),G.transparent===!0&&G.side===pn&&G.forceSinglePass===!1?(G.side=Pn,G.needsUpdate=!0,T.renderBufferDirect(q,U,z,G,w,we),G.side=er,G.needsUpdate=!0,T.renderBufferDirect(q,U,z,G,w,we),G.side=pn):T.renderBufferDirect(q,U,z,G,w,we),w.onAfterRender(T,U,q,z,G,we)}function fc(w,U,q){U.isScene!==!0&&(U=Ve);let z=W.get(w),G=E.state.lights,we=E.state.shadowsArray,Pe=G.state.version,Se=ye.getParameters(w,G.state,we,U,q,E.state.lightProbeGridArray),Ne=ye.getProgramCacheKey(Se),Be=z.programs;z.environment=w.isMeshStandardMaterial||w.isMeshLambertMaterial||w.isMeshPhongMaterial?U.environment:null,z.fog=U.fog;let rt=w.isMeshStandardMaterial||w.isMeshLambertMaterial&&!w.envMap||w.isMeshPhongMaterial&&!w.envMap;z.envMap=ue.get(w.envMap||z.environment,rt),z.envMapRotation=z.environment!==null&&w.envMap===null?U.environmentRotation:w.envMapRotation,Be===void 0&&(w.addEventListener("dispose",ts),Be=new Map,z.programs=Be);let dt=Be.get(Ne);if(dt!==void 0){if(z.currentProgram===dt&&z.lightsStateVersion===Pe)return Xp(w,Se),dt}else Se.uniforms=ye.getUniforms(w),k!==null&&w.isNodeMaterial&&k.build(w,q,Se),w.onBeforeCompile(Se,T),dt=ye.acquireProgram(Se,Ne),Be.set(Ne,dt),z.uniforms=Se.uniforms;let Ue=z.uniforms;return(!w.isShaderMaterial&&!w.isRawShaderMaterial||w.clipping===!0)&&(Ue.clippingPlanes=ze.uniform),Xp(w,Se),z.needsLights=jy(w),z.lightsStateVersion=Pe,z.needsLights&&(Ue.ambientLightColor.value=G.state.ambient,Ue.lightProbe.value=G.state.probe,Ue.sunLights.value=G.state.sun,Ue.sunLightShadows.value=G.state.sunShadow,Ue.directionalLights.value=G.state.directional,Ue.directionalLightShadows.value=G.state.directionalShadow,Ue.spotLights.value=G.state.spot,Ue.spotLightShadows.value=G.state.spotShadow,Ue.rectAreaLights.value=G.state.rectArea,Ue.ltc_1.value=G.state.rectAreaLTC1,Ue.ltc_2.value=G.state.rectAreaLTC2,Ue.pointLights.value=G.state.point,Ue.pointLightShadows.value=G.state.pointShadow,Ue.hemisphereLights.value=G.state.hemi,Ue.sunShadowMatrix.value=G.state.sunShadowMatrix,Ue.sunShadowCascade.value=G.state.sunShadowCascade,Ue.directionalShadowMatrix.value=G.state.directionalShadowMatrix,Ue.spotLightMatrix.value=G.state.spotLightMatrix,Ue.spotLightMap.value=G.state.spotLightMap,Ue.pointShadowMatrix.value=G.state.pointShadowMatrix),z.lightProbeGrid=E.state.lightProbeGridArray.length>0,z.currentProgram=dt,z.uniformsList=null,dt}function qp(w){if(w.uniformsList===null){let U=w.currentProgram.getUniforms();w.uniformsList=Wo.seqWithValue(U.seq,w.uniforms)}return w.uniformsList}function Xp(w,U){let q=W.get(w);q.outputColorSpace=U.outputColorSpace,q.batching=U.batching,q.batchingColor=U.batchingColor,q.instancing=U.instancing,q.instancingColor=U.instancingColor,q.instancingMorph=U.instancingMorph,q.skinning=U.skinning,q.morphTargets=U.morphTargets,q.morphNormals=U.morphNormals,q.morphColors=U.morphColors,q.morphTargetsCount=U.morphTargetsCount,q.numClippingPlanes=U.numClippingPlanes,q.numIntersection=U.numClipIntersection,q.vertexAlphas=U.vertexAlphas,q.vertexTangents=U.vertexTangents,q.toneMapping=U.toneMapping}function Ky(w,U){if(w.length===0)return null;if(w.length===1)return w[0].texture!==null?w[0]:null;_.setFromMatrixPosition(U.matrixWorld);for(let q=0,z=w.length;q<z;q++){let G=w[q];if(G.texture!==null&&G.boundingBox.containsPoint(_))return G}return null}function Zy(w,U,q,z,G){U.isScene!==!0&&(U=Ve),Y.resetTextureUnits();let we=U.fog,Pe=z.isMeshStandardMaterial||z.isMeshLambertMaterial||z.isMeshPhongMaterial?U.environment:null,Se=se===null?T.outputColorSpace:se.isXRRenderTarget===!0?se.texture.colorSpace:ct.workingColorSpace,Ne=z.isMeshStandardMaterial||z.isMeshLambertMaterial&&!z.envMap||z.isMeshPhongMaterial&&!z.envMap,Be=ue.get(z.envMap||Pe,Ne),rt=z.vertexColors===!0&&!!q.attributes.color&&q.attributes.color.itemSize===4,dt=!!q.attributes.tangent&&(!!z.normalMap||z.anisotropy>0),Ue=!!q.morphAttributes.position,wt=!!q.morphAttributes.normal,ln=!!q.morphAttributes.color,zt=qi;z.toneMapped&&(se===null||se.isXRRenderTarget===!0)&&(zt=T.toneMapping);let Dt=q.morphAttributes.position||q.morphAttributes.normal||q.morphAttributes.color,Nn=Dt!==void 0?Dt.length:0,Re=W.get(z),Gn=E.state.lights;if(ae===!0&&(ce===!0||w!==Q)){let Ot=w===Q&&z.id===X;ze.setState(z,w,Ot)}let vt=!1;z.version===Re.__version?(Re.needsLights&&Re.lightsStateVersion!==Gn.state.version||Re.outputColorSpace!==Se||G.isBatchedMesh&&Re.batching===!1||!G.isBatchedMesh&&Re.batching===!0||G.isBatchedMesh&&Re.batchingColor===!0&&G._colorsTexture===null||G.isBatchedMesh&&Re.batchingColor===!1&&G._colorsTexture!==null||G.isInstancedMesh&&Re.instancing===!1||!G.isInstancedMesh&&Re.instancing===!0||G.isSkinnedMesh&&Re.skinning===!1||!G.isSkinnedMesh&&Re.skinning===!0||G.isInstancedMesh&&Re.instancingColor===!0&&G.instanceColor===null||G.isInstancedMesh&&Re.instancingColor===!1&&G.instanceColor!==null||G.isInstancedMesh&&Re.instancingMorph===!0&&G.morphTexture===null||G.isInstancedMesh&&Re.instancingMorph===!1&&G.morphTexture!==null||Re.envMap!==Be||z.fog===!0&&Re.fog!==we||Re.numClippingPlanes!==void 0&&(Re.numClippingPlanes!==ze.numPlanes||Re.numIntersection!==ze.numIntersection)||Re.vertexAlphas!==rt||Re.vertexTangents!==dt||Re.morphTargets!==Ue||Re.morphNormals!==wt||Re.morphColors!==ln||Re.toneMapping!==zt||Re.morphTargetsCount!==Nn||!!Re.lightProbeGrid!=E.state.lightProbeGridArray.length>0)&&(vt=!0):(vt=!0,Re.__version=z.version);let _i=Re.currentProgram;vt===!0&&(_i=fc(z,U,G),k&&z.isNodeMaterial&&k.onUpdateProgram(z,_i,Re));let ns=!1,Os=!1,io=!1,kt=_i.getUniforms(),sn=Re.uniforms;if(b.useProgram(_i.program)&&(ns=!0,Os=!0,io=!0),z.id!==X&&(X=z.id,Os=!0),Re.needsLights){let Ot=Ky(E.state.lightProbeGridArray,G);Re.lightProbeGrid!==Ot&&(Re.lightProbeGrid=Ot,Os=!0)}if(ns||Q!==w){b.buffers.depth.getReversed()&&w.reversedDepth!==!0&&(w._reversedDepth=!0,w.updateProjectionMatrix()),kt.setValue(N,"projectionMatrix",w.projectionMatrix),kt.setValue(N,"viewMatrix",w.matrixWorldInverse);let Bs=kt.map.cameraPosition;Bs!==void 0&&Bs.setValue(N,me.setFromMatrixPosition(w.matrixWorld)),R.logarithmicDepthBuffer&&kt.setValue(N,"logDepthBufFC",2/(Math.log(w.far+1)/Math.LN2)),(z.isMeshPhongMaterial||z.isMeshToonMaterial||z.isMeshLambertMaterial||z.isMeshBasicMaterial||z.isMeshStandardMaterial||z.isShaderMaterial)&&kt.setValue(N,"isOrthographic",w.isOrthographicCamera===!0),Q!==w&&(Q=w,Os=!0,io=!0)}if(Re.needsLights&&(Gn.state.sunShadowMap.length>0&&kt.setValue(N,"sunShadowMap",Gn.state.sunShadowMap,Y),Gn.state.directionalShadowMap.length>0&&kt.setValue(N,"directionalShadowMap",Gn.state.directionalShadowMap,Y),Gn.state.spotShadowMap.length>0&&kt.setValue(N,"spotShadowMap",Gn.state.spotShadowMap,Y),Gn.state.pointShadowMap.length>0&&kt.setValue(N,"pointShadowMap",Gn.state.pointShadowMap,Y)),G.isSkinnedMesh){kt.setOptional(N,G,"bindMatrix"),kt.setOptional(N,G,"bindMatrixInverse");let Ot=G.skeleton;Ot&&(Ot.boneTexture===null&&Ot.computeBoneTexture(),kt.setValue(N,"boneTexture",Ot.boneTexture,Y))}G.isBatchedMesh&&(kt.setOptional(N,G,"batchingTexture"),kt.setValue(N,"batchingTexture",G._matricesTexture,Y),kt.setOptional(N,G,"batchingIdTexture"),kt.setValue(N,"batchingIdTexture",G._indirectTexture,Y),kt.setOptional(N,G,"batchingColorTexture"),G._colorsTexture!==null&&kt.setValue(N,"batchingColorTexture",G._colorsTexture,Y));let Fs=q.morphAttributes;if((Fs.position!==void 0||Fs.normal!==void 0||Fs.color!==void 0)&&O.update(G,q,_i),(Os||Re.receiveShadow!==G.receiveShadow)&&(Re.receiveShadow=G.receiveShadow,kt.setValue(N,"receiveShadow",G.receiveShadow)),(z.isMeshStandardMaterial||z.isMeshLambertMaterial||z.isMeshPhongMaterial)&&z.envMap===null&&U.environment!==null&&(sn.envMapIntensity.value=U.environmentIntensity),sn.dfgLUT!==void 0&&(sn.dfgLUT.value=dw()),Os){if(kt.setValue(N,"toneMappingExposure",T.toneMappingExposure),Re.needsLights&&Jy(sn,io),we&&z.fog===!0&&He.refreshFogUniforms(sn,we),He.refreshMaterialUniforms(sn,z,J,V,E.state.transmissionRenderTarget[w.id]),Re.needsLights&&Re.lightProbeGrid){let Ot=Re.lightProbeGrid;sn.probesSH.value=Ot.texture,sn.probesMin.value.copy(Ot.boundingBox.min),sn.probesMax.value.copy(Ot.boundingBox.max),sn.probesResolution.value.copy(Ot.resolution)}Wo.upload(N,qp(Re),sn,Y)}if(z.isShaderMaterial&&z.uniformsNeedUpdate===!0&&(Wo.upload(N,qp(Re),sn,Y),z.uniformsNeedUpdate=!1),z.isSpriteMaterial&&kt.setValue(N,"center",G.center),kt.setValue(N,"modelViewMatrix",G.modelViewMatrix),kt.setValue(N,"normalMatrix",G.normalMatrix),kt.setValue(N,"modelMatrix",G.matrixWorld),z.uniformsGroups!==void 0){let Ot=z.uniformsGroups;for(let Bs=0,so=Ot.length;Bs<so;Bs++){let Kp=Ot[Bs];re.update(Kp,_i),re.bind(Kp,_i)}}return _i}function Jy(w,U){w.ambientLightColor.needsUpdate=U,w.lightProbe.needsUpdate=U,w.sunLights.needsUpdate=U,w.sunLightShadows.needsUpdate=U,w.directionalLights.needsUpdate=U,w.directionalLightShadows.needsUpdate=U,w.pointLights.needsUpdate=U,w.pointLightShadows.needsUpdate=U,w.spotLights.needsUpdate=U,w.spotLightShadows.needsUpdate=U,w.rectAreaLights.needsUpdate=U,w.hemisphereLights.needsUpdate=U}function jy(w){return w.isMeshLambertMaterial||w.isMeshToonMaterial||w.isMeshPhongMaterial||w.isMeshStandardMaterial||w.isShadowMaterial||w.isShaderMaterial&&w.lights===!0}this.getActiveCubeFace=function(){return B},this.getActiveMipmapLevel=function(){return $},this.getRenderTarget=function(){return se},this.setRenderTargetTextures=function(w,U,q){let z=W.get(w);z.__autoAllocateDepthBuffer=w.resolveDepthBuffer===!1,z.__autoAllocateDepthBuffer===!1&&(z.__useRenderToTexture=!1),W.get(w.texture).__webglTexture=U,W.get(w.depthTexture).__webglTexture=z.__autoAllocateDepthBuffer?void 0:q,z.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(w,U){let q=W.get(w);q.__webglFramebuffer=U,q.__useDefaultFramebuffer=U===void 0},this.setRenderTarget=function(w,U=0,q=0){se=w,B=U,$=q;let z=null,G=!1,we=!1;if(w){let Se=W.get(w);if(Se.__useDefaultFramebuffer!==void 0){b.bindFramebuffer(N.FRAMEBUFFER,Se.__webglFramebuffer),ne.copy(w.viewport),Oe.copy(w.scissor),Ce=w.scissorTest,b.viewport(ne),b.scissor(Oe),b.setScissorTest(Ce),X=-1;return}else if(Se.__webglFramebuffer===void 0)Y.setupRenderTarget(w);else if(Se.__hasExternalTextures)Y.rebindTextures(w,W.get(w.texture).__webglTexture,W.get(w.depthTexture).__webglTexture);else if(w.depthBuffer){let rt=w.depthTexture;if(Se.__boundDepthTexture!==rt){if(rt!==null&&W.has(rt)&&(w.width!==rt.image.width||w.height!==rt.image.height))throw new Error("THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.");Y.setupDepthRenderbuffer(w)}}let Ne=w.texture;(Ne.isData3DTexture||Ne.isDataArrayTexture||Ne.isCompressedArrayTexture)&&(we=!0);let Be=W.get(w).__webglFramebuffer;w.isWebGLCubeRenderTarget?(Array.isArray(Be[U])?z=Be[U][q]:z=Be[U],G=!0):w.samples>0&&Y.useMultisampledRTT(w)===!1?z=W.get(w).__webglMultisampledFramebuffer:Array.isArray(Be)?z=Be[q]:z=Be,ne.copy(w.viewport),Oe.copy(w.scissor),Ce=w.scissorTest}else ne.copy(Ae).multiplyScalar(J).floor(),Oe.copy(Ke).multiplyScalar(J).floor(),Ce=Rt;if(q!==0&&(z=D),b.bindFramebuffer(N.FRAMEBUFFER,z)&&b.drawBuffers(w,z),b.viewport(ne),b.scissor(Oe),b.setScissorTest(Ce),G){let Se=W.get(w.texture);N.framebufferTexture2D(N.FRAMEBUFFER,N.COLOR_ATTACHMENT0,N.TEXTURE_CUBE_MAP_POSITIVE_X+U,Se.__webglTexture,q)}else if(we){let Se=U;for(let Ne=0;Ne<w.textures.length;Ne++){let Be=W.get(w.textures[Ne]);N.framebufferTextureLayer(N.FRAMEBUFFER,N.COLOR_ATTACHMENT0+Ne,Be.__webglTexture,q,Se)}}else if(w!==null&&q!==0){let Se=W.get(w.texture);N.framebufferTexture2D(N.FRAMEBUFFER,N.COLOR_ATTACHMENT0,N.TEXTURE_2D,Se.__webglTexture,q)}X=-1};function Yp(w){let U=W.get(w);return(U.__readFormat!==w.format||U.__readType!==w.type)&&(U.__readFormat=w.format,U.__readType=w.type,U.__formatReadable=R.textureFormatReadable(w.format),U.__typeReadable=R.textureTypeReadable(w.type)),U}this.readRenderTargetPixels=function(w,U,q,z,G,we,Pe,Se=0){if(!(w&&w.isWebGLRenderTarget)){qe("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Ne=W.get(w).__webglFramebuffer;if(w.isWebGLCubeRenderTarget&&Pe!==void 0&&(Ne=Ne[Pe]),Ne){b.bindFramebuffer(N.FRAMEBUFFER,Ne);try{let Be=w.textures[Se],rt=Be.format,dt=Be.type;w.textures.length>1&&N.readBuffer(N.COLOR_ATTACHMENT0+Se);let Ue=Yp(Be);if(Ue.__formatReadable===!1){qe("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(Ue.__typeReadable===!1){qe("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}U>=0&&U<=w.width-z&&q>=0&&q<=w.height-G&&N.readPixels(U,q,z,G,xe.convert(rt),xe.convert(dt),we)}finally{let Be=se!==null?W.get(se).__webglFramebuffer:null;b.bindFramebuffer(N.FRAMEBUFFER,Be)}}},this.readRenderTargetPixelsAsync=async function(w,U,q,z,G,we,Pe,Se=0){if(!(w&&w.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Ne=W.get(w).__webglFramebuffer;if(w.isWebGLCubeRenderTarget&&Pe!==void 0&&(Ne=Ne[Pe]),Ne)if(U>=0&&U<=w.width-z&&q>=0&&q<=w.height-G){b.bindFramebuffer(N.FRAMEBUFFER,Ne);let Be=w.textures[Se],rt=Be.format,dt=Be.type;w.textures.length>1&&N.readBuffer(N.COLOR_ATTACHMENT0+Se);let Ue=Yp(Be);if(Ue.__formatReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(Ue.__typeReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");let wt=N.createBuffer();N.bindBuffer(N.PIXEL_PACK_BUFFER,wt),N.bufferData(N.PIXEL_PACK_BUFFER,we.byteLength,N.STREAM_READ),N.readPixels(U,q,z,G,xe.convert(rt),xe.convert(dt),0),N.bindBuffer(N.PIXEL_PACK_BUFFER,null);let ln=se!==null?W.get(se).__webglFramebuffer:null;b.bindFramebuffer(N.FRAMEBUFFER,ln);let zt=N.fenceSync(N.SYNC_GPU_COMMANDS_COMPLETE,0);return N.flush(),await f0(N,zt,4),N.bindBuffer(N.PIXEL_PACK_BUFFER,wt),N.getBufferSubData(N.PIXEL_PACK_BUFFER,0,we),N.bindBuffer(N.PIXEL_PACK_BUFFER,null),N.deleteBuffer(wt),N.deleteSync(zt),we}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(w,U=null,q=0){let z=Math.pow(2,-q),G=Math.floor(w.image.width*z),we=Math.floor(w.image.height*z),Pe=U!==null?U.x:0,Se=U!==null?U.y:0;Y.setTexture2D(w,0),N.copyTexSubImage2D(N.TEXTURE_2D,q,0,0,Pe,Se,G,we),b.unbindTexture()},this.copyTextureToTexture=function(w,U,q=null,z=null,G=0,we=0){let Pe,Se,Ne,Be,rt,dt,Ue,wt,ln,zt=w.isCompressedTexture?w.mipmaps[we]:w.image;if(q!==null)Pe=q.max.x-q.min.x,Se=q.max.y-q.min.y,Ne=q.isBox3?q.max.z-q.min.z:1,Be=q.min.x,rt=q.min.y,dt=q.isBox3?q.min.z:0;else{let sn=Math.pow(2,-G);Pe=Math.floor(zt.width*sn),Se=Math.floor(zt.height*sn),w.isDataArrayTexture?Ne=zt.depth:w.isData3DTexture?Ne=Math.floor(zt.depth*sn):Ne=1,Be=0,rt=0,dt=0}z!==null?(Ue=z.x,wt=z.y,ln=z.z):(Ue=0,wt=0,ln=0);let Dt=xe.convert(U.format),Nn=xe.convert(U.type),Re;U.isData3DTexture?(Y.setTexture3D(U,0),Re=N.TEXTURE_3D):U.isDataArrayTexture||U.isCompressedArrayTexture?(Y.setTexture2DArray(U,0),Re=N.TEXTURE_2D_ARRAY):(Y.setTexture2D(U,0),Re=N.TEXTURE_2D),b.activeTexture(N.TEXTURE0),b.pixelStorei(N.UNPACK_FLIP_Y_WEBGL,U.flipY),b.pixelStorei(N.UNPACK_PREMULTIPLY_ALPHA_WEBGL,U.premultiplyAlpha),b.pixelStorei(N.UNPACK_ALIGNMENT,U.unpackAlignment);let Gn=b.getParameter(N.UNPACK_ROW_LENGTH),vt=b.getParameter(N.UNPACK_IMAGE_HEIGHT),_i=b.getParameter(N.UNPACK_SKIP_PIXELS),ns=b.getParameter(N.UNPACK_SKIP_ROWS),Os=b.getParameter(N.UNPACK_SKIP_IMAGES);b.pixelStorei(N.UNPACK_ROW_LENGTH,zt.width),b.pixelStorei(N.UNPACK_IMAGE_HEIGHT,zt.height),b.pixelStorei(N.UNPACK_SKIP_PIXELS,Be),b.pixelStorei(N.UNPACK_SKIP_ROWS,rt),b.pixelStorei(N.UNPACK_SKIP_IMAGES,dt);let io=w.isDataArrayTexture||w.isData3DTexture,kt=U.isDataArrayTexture||U.isData3DTexture;if(w.isDepthTexture){let sn=W.get(w),Fs=W.get(U),Ot=W.get(sn.__renderTarget),Bs=W.get(Fs.__renderTarget);b.bindFramebuffer(N.READ_FRAMEBUFFER,Ot.__webglFramebuffer),b.bindFramebuffer(N.DRAW_FRAMEBUFFER,Bs.__webglFramebuffer);for(let so=0;so<Ne;so++)io&&(N.framebufferTextureLayer(N.READ_FRAMEBUFFER,N.COLOR_ATTACHMENT0,W.get(w).__webglTexture,G,dt+so),N.framebufferTextureLayer(N.DRAW_FRAMEBUFFER,N.COLOR_ATTACHMENT0,W.get(U).__webglTexture,we,ln+so)),N.blitFramebuffer(Be,rt,Pe,Se,Ue,wt,Pe,Se,N.DEPTH_BUFFER_BIT,N.NEAREST);b.bindFramebuffer(N.READ_FRAMEBUFFER,null),b.bindFramebuffer(N.DRAW_FRAMEBUFFER,null)}else if(G!==0||w.isRenderTargetTexture||W.has(w)){let sn=W.get(w),Fs=W.get(U);b.bindFramebuffer(N.READ_FRAMEBUFFER,L),b.bindFramebuffer(N.DRAW_FRAMEBUFFER,F);for(let Ot=0;Ot<Ne;Ot++)io?N.framebufferTextureLayer(N.READ_FRAMEBUFFER,N.COLOR_ATTACHMENT0,sn.__webglTexture,G,dt+Ot):N.framebufferTexture2D(N.READ_FRAMEBUFFER,N.COLOR_ATTACHMENT0,N.TEXTURE_2D,sn.__webglTexture,G),kt?N.framebufferTextureLayer(N.DRAW_FRAMEBUFFER,N.COLOR_ATTACHMENT0,Fs.__webglTexture,we,ln+Ot):N.framebufferTexture2D(N.DRAW_FRAMEBUFFER,N.COLOR_ATTACHMENT0,N.TEXTURE_2D,Fs.__webglTexture,we),G!==0?N.blitFramebuffer(Be,rt,Pe,Se,Ue,wt,Pe,Se,N.COLOR_BUFFER_BIT,N.NEAREST):kt?N.copyTexSubImage3D(Re,we,Ue,wt,ln+Ot,Be,rt,Pe,Se):N.copyTexSubImage2D(Re,we,Ue,wt,Be,rt,Pe,Se);b.bindFramebuffer(N.READ_FRAMEBUFFER,null),b.bindFramebuffer(N.DRAW_FRAMEBUFFER,null)}else kt?w.isDataTexture||w.isData3DTexture?N.texSubImage3D(Re,we,Ue,wt,ln,Pe,Se,Ne,Dt,Nn,zt.data):U.isCompressedArrayTexture?N.compressedTexSubImage3D(Re,we,Ue,wt,ln,Pe,Se,Ne,Dt,zt.data):N.texSubImage3D(Re,we,Ue,wt,ln,Pe,Se,Ne,Dt,Nn,zt):w.isDataTexture?N.texSubImage2D(N.TEXTURE_2D,we,Ue,wt,Pe,Se,Dt,Nn,zt.data):w.isCompressedTexture?N.compressedTexSubImage2D(N.TEXTURE_2D,we,Ue,wt,zt.width,zt.height,Dt,zt.data):N.texSubImage2D(N.TEXTURE_2D,we,Ue,wt,Pe,Se,Dt,Nn,zt);b.pixelStorei(N.UNPACK_ROW_LENGTH,Gn),b.pixelStorei(N.UNPACK_IMAGE_HEIGHT,vt),b.pixelStorei(N.UNPACK_SKIP_PIXELS,_i),b.pixelStorei(N.UNPACK_SKIP_ROWS,ns),b.pixelStorei(N.UNPACK_SKIP_IMAGES,Os),we===0&&U.generateMipmaps&&N.generateMipmap(Re),b.unbindTexture()},this.initRenderTarget=function(w){W.get(w).__webglFramebuffer===void 0&&Y.setupRenderTarget(w)},this.initTexture=function(w){w.isCubeTexture?Y.setTextureCube(w,0):w.isData3DTexture?Y.setTexture3D(w,0):w.isDataArrayTexture||w.isCompressedArrayTexture?Y.setTexture2DArray(w,0):Y.setTexture2D(w,0),b.unbindTexture()},this.resetState=function(){B=0,$=0,se=null,b.reset(),Te.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return zi}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;let t=this.getContext();t.drawingBufferColorSpace=ct._getDrawingBufferColorSpace(e),t.unpackColorSpace=ct._getUnpackColorSpace()}};var J0={type:"change"},Uf={type:"start"},Q0={type:"end"},vu=new $s,j0=new oi,fw=Math.cos(70*us.DEG2RAD),vn=new I,jn=2*Math.PI,Pt={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6},Nf=1e-6,xu=class extends dl{constructor(e,t=null){super(e,t),this.state=Pt.NONE,this.target=new I,this.cursor=new I,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minTargetRadius=0,this.maxTargetRadius=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.keyRotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.zoomToCursor=!1,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:js.ROTATE,MIDDLE:js.DOLLY,RIGHT:js.PAN},this.touches={ONE:Qs.ROTATE,TWO:Qs.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._cursorStyle="auto",this._domElementKeyEvents=null,this._lastPosition=new I,this._lastQuaternion=new ai,this._lastTargetPosition=new I,this._quat=new ai().setFromUnitVectors(e.up,new I(0,1,0)),this._quatInverse=this._quat.clone().invert(),this._spherical=new Cs,this._sphericalDelta=new Cs,this._scale=1,this._panOffset=new I,this._rotateStart=new j,this._rotateEnd=new j,this._rotateDelta=new j,this._panStart=new j,this._panEnd=new j,this._panDelta=new j,this._dollyStart=new j,this._dollyEnd=new j,this._dollyDelta=new j,this._dollyDirection=new I,this._mouse=new j,this._performCursorZoom=!1,this._pointers=[],this._pointerPositions={},this._controlActive=!1,this._onPointerMove=mw.bind(this),this._onPointerDown=pw.bind(this),this._onPointerUp=gw.bind(this),this._onContextMenu=Sw.bind(this),this._onMouseWheel=vw.bind(this),this._onKeyDown=xw.bind(this),this._onTouchStart=bw.bind(this),this._onTouchMove=Mw.bind(this),this._onMouseDown=yw.bind(this),this._onMouseMove=_w.bind(this),this._interceptControlDown=ww.bind(this),this._interceptControlUp=Ew.bind(this),this.domElement!==null&&this.connect(this.domElement),this.update()}set cursorStyle(e){this._cursorStyle=e,e==="grab"?this.domElement.style.cursor="grab":this.domElement.style.cursor="auto"}get cursorStyle(){return this._cursorStyle}connect(e){super.connect(e),this.domElement.addEventListener("pointerdown",this._onPointerDown),this.domElement.addEventListener("pointercancel",this._onPointerUp),this.domElement.addEventListener("contextmenu",this._onContextMenu),this.domElement.addEventListener("wheel",this._onMouseWheel,{passive:!1}),this.domElement.getRootNode().addEventListener("keydown",this._interceptControlDown,{passive:!0,capture:!0}),this.domElement.style.touchAction="none"}disconnect(){this.state=Pt.NONE,this.domElement.removeEventListener("pointerdown",this._onPointerDown),this.domElement.ownerDocument.removeEventListener("pointermove",this._onPointerMove),this.domElement.ownerDocument.removeEventListener("pointerup",this._onPointerUp),this.domElement.removeEventListener("pointercancel",this._onPointerUp),this.domElement.removeEventListener("wheel",this._onMouseWheel),this.domElement.removeEventListener("contextmenu",this._onContextMenu),this.stopListenToKeyEvents();let e=this.domElement.getRootNode();e.removeEventListener("keydown",this._interceptControlDown,{capture:!0}),e.removeEventListener("keyup",this._interceptControlUp,{capture:!0}),this._controlActive=!1,this._pointers.length=0,this._pointerPositions={},this.domElement.style.touchAction="",this.domElement.style.cursor="auto"}dispose(){this.disconnect()}getPolarAngle(){return this._spherical.phi}getAzimuthalAngle(){return this._spherical.theta}getDistance(){return this.object.position.distanceTo(this.target)}listenToKeyEvents(e){e.addEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=e}stopListenToKeyEvents(){this._domElementKeyEvents!==null&&(this._domElementKeyEvents.removeEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=null)}saveState(){this.target0.copy(this.target),this.position0.copy(this.object.position),this.zoom0=this.object.zoom}reset(){this.target.copy(this.target0),this.object.position.copy(this.position0),this.object.zoom=this.zoom0,this.object.updateProjectionMatrix(),this.dispatchEvent(J0),this.update(),this.state=Pt.NONE}pan(e,t){this._pan(e,t),this.update()}dollyIn(e){this._dollyIn(e),this.update()}dollyOut(e){this._dollyOut(e),this.update()}rotateLeft(e){this._rotateLeft(e),this.update()}rotateUp(e){this._rotateUp(e),this.update()}update(e=null){let t=this.object.position;vn.copy(t).sub(this.target),vn.applyQuaternion(this._quat),this._spherical.setFromVector3(vn),this.autoRotate&&this.state===Pt.NONE&&this._rotateLeft(this._getAutoRotationAngle(e)),this.enableDamping?(this._spherical.theta+=this._sphericalDelta.theta*this.dampingFactor,this._spherical.phi+=this._sphericalDelta.phi*this.dampingFactor):(this._spherical.theta+=this._sphericalDelta.theta,this._spherical.phi+=this._sphericalDelta.phi);let i=this.minAzimuthAngle,s=this.maxAzimuthAngle;isFinite(i)&&isFinite(s)&&(i<-Math.PI?i+=jn:i>Math.PI&&(i-=jn),s<-Math.PI?s+=jn:s>Math.PI&&(s-=jn),i<=s?this._spherical.theta=Math.max(i,Math.min(s,this._spherical.theta)):this._spherical.theta=this._spherical.theta>(i+s)/2?Math.max(i,this._spherical.theta):Math.min(s,this._spherical.theta)),this._spherical.phi=Math.max(this.minPolarAngle,Math.min(this.maxPolarAngle,this._spherical.phi)),this._spherical.makeSafe(),this.enableDamping===!0?this.target.addScaledVector(this._panOffset,this.dampingFactor):this.target.add(this._panOffset),this.target.sub(this.cursor),this.target.clampLength(this.minTargetRadius,this.maxTargetRadius),this.target.add(this.cursor);let r=!1;if(this.zoomToCursor&&this._performCursorZoom||this.object.isOrthographicCamera)this._spherical.radius=this._clampDistance(this._spherical.radius);else{let o=this._spherical.radius;this._spherical.radius=this._clampDistance(this._spherical.radius*this._scale),r=o!=this._spherical.radius}if(vn.setFromSpherical(this._spherical),vn.applyQuaternion(this._quatInverse),t.copy(this.target).add(vn),this.object.lookAt(this.target),this.enableDamping===!0?(this._sphericalDelta.theta*=1-this.dampingFactor,this._sphericalDelta.phi*=1-this.dampingFactor,this._panOffset.multiplyScalar(1-this.dampingFactor)):(this._sphericalDelta.set(0,0,0),this._panOffset.set(0,0,0)),this.zoomToCursor&&this._performCursorZoom){let o=null;if(this.object.isPerspectiveCamera){let a=vn.length();o=this._clampDistance(a*this._scale);let l=a-o;this.object.position.addScaledVector(this._dollyDirection,l),this.object.updateMatrixWorld(),r=!!l}else if(this.object.isOrthographicCamera){let a=new I(this._mouse.x,this._mouse.y,0);a.unproject(this.object);let l=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),this.object.updateProjectionMatrix(),r=l!==this.object.zoom;let c=new I(this._mouse.x,this._mouse.y,0);c.unproject(this.object),this.object.position.sub(c).add(a),this.object.updateMatrixWorld(),o=vn.length()}else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."),this.zoomToCursor=!1;o!==null&&(this.screenSpacePanning?this.target.set(0,0,-1).transformDirection(this.object.matrix).multiplyScalar(o).add(this.object.position):(vu.origin.copy(this.object.position),vu.direction.set(0,0,-1).transformDirection(this.object.matrix),Math.abs(this.object.up.dot(vu.direction))<fw?this.object.lookAt(this.target):(j0.setFromNormalAndCoplanarPoint(this.object.up,this.target),vu.intersectPlane(j0,this.target))))}else if(this.object.isOrthographicCamera){let o=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),o!==this.object.zoom&&(this.object.updateProjectionMatrix(),r=!0)}return this._scale=1,this._performCursorZoom=!1,r||this._lastPosition.distanceToSquared(this.object.position)>Nf||8*(1-this._lastQuaternion.dot(this.object.quaternion))>Nf||this._lastTargetPosition.distanceToSquared(this.target)>Nf?(this.dispatchEvent(J0),this._lastPosition.copy(this.object.position),this._lastQuaternion.copy(this.object.quaternion),this._lastTargetPosition.copy(this.target),!0):!1}_getAutoRotationAngle(e){return e!==null?jn/60*this.autoRotateSpeed*e:jn/60/60*this.autoRotateSpeed}_getZoomScale(e){let t=Math.abs(e*.01);return Math.pow(.95,this.zoomSpeed*t)}_rotateLeft(e){this._sphericalDelta.theta-=e}_rotateUp(e){this._sphericalDelta.phi-=e}_panLeft(e,t){vn.setFromMatrixColumn(t,0),vn.multiplyScalar(-e),this._panOffset.add(vn)}_panUp(e,t){this.screenSpacePanning===!0?vn.setFromMatrixColumn(t,1):(vn.setFromMatrixColumn(t,0),vn.crossVectors(this.object.up,vn)),vn.multiplyScalar(e),this._panOffset.add(vn)}_pan(e,t){let i=this.domElement;if(this.object.isPerspectiveCamera){let s=this.object.position;vn.copy(s).sub(this.target);let r=vn.length();r*=Math.tan(this.object.fov/2*Math.PI/180),this._panLeft(2*e*r/i.clientHeight,this.object.matrix),this._panUp(2*t*r/i.clientHeight,this.object.matrix)}else this.object.isOrthographicCamera?(this._panLeft(e*(this.object.right-this.object.left)/this.object.zoom/i.clientWidth,this.object.matrix),this._panUp(t*(this.object.top-this.object.bottom)/this.object.zoom/i.clientHeight,this.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),this.enablePan=!1)}_dollyOut(e){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale/=e:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_dollyIn(e){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale*=e:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_updateZoomParameters(e,t){if(!this.zoomToCursor)return;this._performCursorZoom=!0;let i=this.domElement.getBoundingClientRect(),s=e-i.left,r=t-i.top,o=i.width,a=i.height;this._mouse.x=s/o*2-1,this._mouse.y=-(r/a)*2+1,this._dollyDirection.set(this._mouse.x,this._mouse.y,1).unproject(this.object).sub(this.object.position).normalize()}_clampDistance(e){return Math.max(this.minDistance,Math.min(this.maxDistance,e))}_handleMouseDownRotate(e){this._rotateStart.set(e.clientX,e.clientY)}_handleMouseDownDolly(e){this._updateZoomParameters(e.clientX,e.clientX),this._dollyStart.set(e.clientX,e.clientY)}_handleMouseDownPan(e){this._panStart.set(e.clientX,e.clientY)}_handleMouseMoveRotate(e){this._rotateEnd.set(e.clientX,e.clientY),this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);let t=this.domElement;this._rotateLeft(jn*this._rotateDelta.x/t.clientHeight),this._rotateUp(jn*this._rotateDelta.y/t.clientHeight),this._rotateStart.copy(this._rotateEnd),this.update()}_handleMouseMoveDolly(e){this._dollyEnd.set(e.clientX,e.clientY),this._dollyDelta.subVectors(this._dollyEnd,this._dollyStart),this._dollyDelta.y>0?this._dollyOut(this._getZoomScale(this._dollyDelta.y)):this._dollyDelta.y<0&&this._dollyIn(this._getZoomScale(this._dollyDelta.y)),this._dollyStart.copy(this._dollyEnd),this.update()}_handleMouseMovePan(e){this._panEnd.set(e.clientX,e.clientY),this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd),this.update()}_handleMouseWheel(e){this._updateZoomParameters(e.clientX,e.clientY),e.deltaY<0?this._dollyIn(this._getZoomScale(e.deltaY)):e.deltaY>0&&this._dollyOut(this._getZoomScale(e.deltaY)),this.update()}_handleKeyDown(e){let t=!1;switch(e.code){case this.keys.UP:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateUp(jn*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,this.keyPanSpeed),t=!0;break;case this.keys.BOTTOM:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateUp(-jn*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,-this.keyPanSpeed),t=!0;break;case this.keys.LEFT:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateLeft(jn*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(this.keyPanSpeed,0),t=!0;break;case this.keys.RIGHT:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateLeft(-jn*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(-this.keyPanSpeed,0),t=!0;break}t&&(e.preventDefault(),this.update())}_handleTouchStartRotate(e){if(this._pointers.length===1)this._rotateStart.set(e.pageX,e.pageY);else{let t=this._getSecondPointerPosition(e),i=.5*(e.pageX+t.x),s=.5*(e.pageY+t.y);this._rotateStart.set(i,s)}}_handleTouchStartPan(e){if(this._pointers.length===1)this._panStart.set(e.pageX,e.pageY);else{let t=this._getSecondPointerPosition(e),i=.5*(e.pageX+t.x),s=.5*(e.pageY+t.y);this._panStart.set(i,s)}}_handleTouchStartDolly(e){let t=this._getSecondPointerPosition(e),i=e.pageX-t.x,s=e.pageY-t.y,r=Math.sqrt(i*i+s*s);this._dollyStart.set(0,r)}_handleTouchStartDollyPan(e){this.enableZoom&&this._handleTouchStartDolly(e),this.enablePan&&this._handleTouchStartPan(e)}_handleTouchStartDollyRotate(e){this.enableZoom&&this._handleTouchStartDolly(e),this.enableRotate&&this._handleTouchStartRotate(e)}_handleTouchMoveRotate(e){if(this._pointers.length==1)this._rotateEnd.set(e.pageX,e.pageY);else{let i=this._getSecondPointerPosition(e),s=.5*(e.pageX+i.x),r=.5*(e.pageY+i.y);this._rotateEnd.set(s,r)}this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);let t=this.domElement;this._rotateLeft(jn*this._rotateDelta.x/t.clientHeight),this._rotateUp(jn*this._rotateDelta.y/t.clientHeight),this._rotateStart.copy(this._rotateEnd)}_handleTouchMovePan(e){if(this._pointers.length===1)this._panEnd.set(e.pageX,e.pageY);else{let t=this._getSecondPointerPosition(e),i=.5*(e.pageX+t.x),s=.5*(e.pageY+t.y);this._panEnd.set(i,s)}this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd)}_handleTouchMoveDolly(e){let t=this._getSecondPointerPosition(e),i=e.pageX-t.x,s=e.pageY-t.y,r=Math.sqrt(i*i+s*s);this._dollyEnd.set(0,r),this._dollyDelta.set(0,Math.pow(this._dollyEnd.y/this._dollyStart.y,this.zoomSpeed)),this._dollyOut(this._dollyDelta.y),this._dollyStart.copy(this._dollyEnd);let o=(e.pageX+t.x)*.5,a=(e.pageY+t.y)*.5;this._updateZoomParameters(o,a)}_handleTouchMoveDollyPan(e){this.enableZoom&&this._handleTouchMoveDolly(e),this.enablePan&&this._handleTouchMovePan(e)}_handleTouchMoveDollyRotate(e){this.enableZoom&&this._handleTouchMoveDolly(e),this.enableRotate&&this._handleTouchMoveRotate(e)}_addPointer(e){this._pointers.push(e.pointerId)}_removePointer(e){delete this._pointerPositions[e.pointerId];for(let t=0;t<this._pointers.length;t++)if(this._pointers[t]==e.pointerId){this._pointers.splice(t,1);return}}_isTrackingPointer(e){for(let t=0;t<this._pointers.length;t++)if(this._pointers[t]==e.pointerId)return!0;return!1}_trackPointer(e){let t=this._pointerPositions[e.pointerId];t===void 0&&(t=new j,this._pointerPositions[e.pointerId]=t),t.set(e.pageX,e.pageY)}_getSecondPointerPosition(e){let t=e.pointerId===this._pointers[0]?this._pointers[1]:this._pointers[0];return this._pointerPositions[t]}_customWheelEvent(e){let t=e.deltaMode,i={clientX:e.clientX,clientY:e.clientY,deltaY:e.deltaY};switch(t){case 1:i.deltaY*=16;break;case 2:i.deltaY*=100;break}return e.ctrlKey&&!this._controlActive&&(i.deltaY*=10),i}};function pw(n){this.enabled!==!1&&(this._pointers.length===0&&(this.domElement.setPointerCapture(n.pointerId),this.domElement.ownerDocument.addEventListener("pointermove",this._onPointerMove),this.domElement.ownerDocument.addEventListener("pointerup",this._onPointerUp)),!this._isTrackingPointer(n)&&(this._addPointer(n),n.pointerType==="touch"?this._onTouchStart(n):this._onMouseDown(n),this._cursorStyle==="grab"&&(this.domElement.style.cursor="grabbing")))}function mw(n){this.enabled!==!1&&(n.pointerType==="touch"?this._onTouchMove(n):this._onMouseMove(n))}function gw(n){switch(this._removePointer(n),this._pointers.length){case 0:this.domElement.releasePointerCapture(n.pointerId),this.domElement.ownerDocument.removeEventListener("pointermove",this._onPointerMove),this.domElement.ownerDocument.removeEventListener("pointerup",this._onPointerUp),this.dispatchEvent(Q0),this.state=Pt.NONE,this._cursorStyle==="grab"&&(this.domElement.style.cursor="grab");break;case 1:let e=this._pointers[0],t=this._pointerPositions[e];this._onTouchStart({pointerId:e,pageX:t.x,pageY:t.y});break}}function yw(n){let e;switch(n.button){case 0:e=this.mouseButtons.LEFT;break;case 1:e=this.mouseButtons.MIDDLE;break;case 2:e=this.mouseButtons.RIGHT;break;default:e=-1}switch(e){case js.DOLLY:if(this.enableZoom===!1)return;this._handleMouseDownDolly(n),this.state=Pt.DOLLY;break;case js.ROTATE:if(n.ctrlKey||n.metaKey||n.shiftKey){if(this.enablePan===!1)return;this._handleMouseDownPan(n),this.state=Pt.PAN}else{if(this.enableRotate===!1)return;this._handleMouseDownRotate(n),this.state=Pt.ROTATE}break;case js.PAN:if(n.ctrlKey||n.metaKey||n.shiftKey){if(this.enableRotate===!1)return;this._handleMouseDownRotate(n),this.state=Pt.ROTATE}else{if(this.enablePan===!1)return;this._handleMouseDownPan(n),this.state=Pt.PAN}break;default:this.state=Pt.NONE}this.state!==Pt.NONE&&this.dispatchEvent(Uf)}function _w(n){switch(this.state){case Pt.ROTATE:if(this.enableRotate===!1)return;this._handleMouseMoveRotate(n);break;case Pt.DOLLY:if(this.enableZoom===!1)return;this._handleMouseMoveDolly(n);break;case Pt.PAN:if(this.enablePan===!1)return;this._handleMouseMovePan(n);break}}function vw(n){this.enabled===!1||this.enableZoom===!1||this.state!==Pt.NONE||(n.preventDefault(),this.dispatchEvent(Uf),this._handleMouseWheel(this._customWheelEvent(n)),this.dispatchEvent(Q0))}function xw(n){this.enabled!==!1&&this._handleKeyDown(n)}function bw(n){switch(this._trackPointer(n),this._pointers.length){case 1:switch(this.touches.ONE){case Qs.ROTATE:if(this.enableRotate===!1)return;this._handleTouchStartRotate(n),this.state=Pt.TOUCH_ROTATE;break;case Qs.PAN:if(this.enablePan===!1)return;this._handleTouchStartPan(n),this.state=Pt.TOUCH_PAN;break;default:this.state=Pt.NONE}break;case 2:switch(this.touches.TWO){case Qs.DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchStartDollyPan(n),this.state=Pt.TOUCH_DOLLY_PAN;break;case Qs.DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchStartDollyRotate(n),this.state=Pt.TOUCH_DOLLY_ROTATE;break;default:this.state=Pt.NONE}break;default:this.state=Pt.NONE}this.state!==Pt.NONE&&this.dispatchEvent(Uf)}function Mw(n){switch(this._trackPointer(n),this.state){case Pt.TOUCH_ROTATE:if(this.enableRotate===!1)return;this._handleTouchMoveRotate(n),this.update();break;case Pt.TOUCH_PAN:if(this.enablePan===!1)return;this._handleTouchMovePan(n),this.update();break;case Pt.TOUCH_DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchMoveDollyPan(n),this.update();break;case Pt.TOUCH_DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchMoveDollyRotate(n),this.update();break;default:this.state=Pt.NONE}}function Sw(n){this.enabled!==!1&&n.preventDefault()}function ww(n){n.key==="Control"&&(this._controlActive=!0,this.domElement.getRootNode().addEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}function Ew(n){n.key==="Control"&&(this._controlActive=!1,this.domElement.getRootNode().removeEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}var bu=class extends Ar{constructor(){super(),this.name="RoomEnvironment",this.position.y=-3.5;let e=new Fn;e.deleteAttribute("uv");let t=new ke({side:Pn}),i=new ke,s=new hs(16777215,900,28,2);s.position.set(.418,16.199,.3),this.add(s);let r=new oe(e,t);r.position.set(-.757,13.219,.717),r.scale.set(31.713,28.305,28.591),this.add(r);let o=new Xa(e,i,6),a=new un;a.position.set(-10.906,2.009,1.846),a.rotation.set(0,-.195,0),a.scale.set(2.328,7.905,4.651),a.updateMatrix(),o.setMatrixAt(0,a.matrix),a.position.set(-5.607,-.754,-.758),a.rotation.set(0,.994,0),a.scale.set(1.97,1.534,3.955),a.updateMatrix(),o.setMatrixAt(1,a.matrix),a.position.set(6.167,.857,7.803),a.rotation.set(0,.561,0),a.scale.set(3.927,6.285,3.687),a.updateMatrix(),o.setMatrixAt(2,a.matrix),a.position.set(-2.017,.018,6.124),a.rotation.set(0,.333,0),a.scale.set(2.002,4.566,2.064),a.updateMatrix(),o.setMatrixAt(3,a.matrix),a.position.set(2.291,-.756,-2.621),a.rotation.set(0,-.286,0),a.scale.set(1.546,1.552,1.496),a.updateMatrix(),o.setMatrixAt(4,a.matrix),a.position.set(-2.193,-.369,-5.547),a.rotation.set(0,.516,0),a.scale.set(3.875,3.487,2.986),a.updateMatrix(),o.setMatrixAt(5,a.matrix),this.add(o);let l=new oe(e,Xo(50));l.position.set(-16.116,14.37,8.208),l.scale.set(.1,2.428,2.739),this.add(l);let c=new oe(e,Xo(50));c.position.set(-16.109,18.021,-8.207),c.scale.set(.1,2.425,2.751),this.add(c);let d=new oe(e,Xo(17));d.position.set(14.904,12.198,-1.832),d.scale.set(.15,4.265,6.331),this.add(d);let f=new oe(e,Xo(43));f.position.set(-.462,8.89,14.52),f.scale.set(4.38,5.441,.088),this.add(f);let h=new oe(e,Xo(20));h.position.set(3.235,11.486,-12.541),h.scale.set(2.5,2,.1),this.add(h);let u=new oe(e,Xo(100));u.position.set(0,20,0),u.scale.set(1,.1,1),this.add(u)}dispose(){let e=new Set;this.traverse(t=>{t.isMesh&&(e.add(t.geometry),e.add(t.material))});for(let t of e)t.dispose()}};function Xo(n){return new ol({color:0,emissive:16777215,emissiveIntensity:n})}var Il=new I;function Ei(n,e,t,i,s,r){let o=2*Math.PI*s/4,a=Math.max(r-2*s,0),l=Math.PI/4;Il.copy(e),Il[i]=0,Il.normalize();let c=.5*o/(o+a),d=1-Il.angleTo(n)/l;return Math.sign(Il[t])===1?d*c:a/(o+a)+c+c*(1-d)}var ft=class n extends Fn{constructor(e=1,t=1,i=1,s=2,r=.1){let o=s*2+1;if(r=Math.min(e/2,t/2,i/2,r),super(1,1,1,o,o,o),this.type="RoundedBoxGeometry",this.parameters={width:e,height:t,depth:i,segments:s,radius:r},o===1)return;let a=this.toNonIndexed();this.index=null,this.attributes.position=a.attributes.position,this.attributes.normal=a.attributes.normal,this.attributes.uv=a.attributes.uv;let l=new I,c=new I,d=new I(e,t,i).divideScalar(2).subScalar(r),f=this.attributes.position.array,h=this.attributes.normal.array,u=this.attributes.uv.array,m=f.length/6,y=new I,g=.5/o;for(let p=0,v=0;p<f.length;p+=3,v+=2)switch(l.fromArray(f,p),c.copy(l),c.x-=Math.sign(c.x)*g,c.y-=Math.sign(c.y)*g,c.z-=Math.sign(c.z)*g,c.normalize(),f[p+0]=d.x*Math.sign(l.x)+c.x*r,f[p+1]=d.y*Math.sign(l.y)+c.y*r,f[p+2]=d.z*Math.sign(l.z)+c.z*r,h[p+0]=c.x,h[p+1]=c.y,h[p+2]=c.z,Math.floor(p/m)){case 0:y.set(1,0,0),u[v+0]=Ei(y,c,"z","y",r,i),u[v+1]=1-Ei(y,c,"y","z",r,t);break;case 1:y.set(-1,0,0),u[v+0]=1-Ei(y,c,"z","y",r,i),u[v+1]=1-Ei(y,c,"y","z",r,t);break;case 2:y.set(0,1,0),u[v+0]=1-Ei(y,c,"x","z",r,e),u[v+1]=Ei(y,c,"z","x",r,i);break;case 3:y.set(0,-1,0),u[v+0]=1-Ei(y,c,"x","z",r,e),u[v+1]=1-Ei(y,c,"z","x",r,i);break;case 4:y.set(0,0,1),u[v+0]=1-Ei(y,c,"x","y",r,e),u[v+1]=1-Ei(y,c,"y","x",r,t);break;case 5:y.set(0,0,-1),u[v+0]=Ei(y,c,"x","y",r,e),u[v+1]=1-Ei(y,c,"y","x",r,t);break}}static fromJSON(e){return new n(e.width,e.height,e.depth,e.segments,e.radius)}};var Yo={name:"CopyShader",uniforms:{tDiffuse:{value:null},opacity:{value:1}},vertexShader:`

		varying vec2 vUv;

		void main() {

			vUv = uv;
			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`

		uniform float opacity;

		uniform sampler2D tDiffuse;

		varying vec2 vUv;

		void main() {

			vec4 texel = texture2D( tDiffuse, vUv );
			gl_FragColor = opacity * texel;


		}`};var hi=class{constructor(){this.isPass=!0,this.enabled=!0,this.needsSwap=!0,this.clear=!1,this.renderToScreen=!1}setSize(){}render(){console.error("THREE.Pass: .render() must be implemented in derived pass.")}dispose(){}},Tw=new Js(-1,1,1,-1,0,1),Of=class extends Ft{constructor(){super(),this.setAttribute("position",new ht([-1,3,0,-1,-1,0,3,-1,0],3)),this.setAttribute("uv",new ht([0,2,0,0,2,0],2))}},Aw=new Of,or=class{constructor(e){this._mesh=new oe(Aw,e)}dispose(){this._mesh.geometry.dispose()}render(e){e.render(this._mesh,Tw)}get material(){return this._mesh.material}set material(e){this._mesh.material=e}};var Mu=class extends hi{constructor(e,t="tDiffuse"){super(),this.textureID=t,this.uniforms=null,this.material=null,e instanceof rn?(this.uniforms=e.uniforms,this.material=e):e&&(this.uniforms=Is.clone(e.uniforms),this.material=new rn({name:e.name!==void 0?e.name:"unspecified",defines:Object.assign({},e.defines),uniforms:this.uniforms,vertexShader:e.vertexShader,fragmentShader:e.fragmentShader})),this._fsQuad=new or(this.material)}render(e,t,i){this.uniforms[this.textureID]&&(this.uniforms[this.textureID].value=i.texture),this._fsQuad.material=this.material,this.renderToScreen?(e.setRenderTarget(null),this._fsQuad.render(e)):(e.setRenderTarget(t),this.clear&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),this._fsQuad.render(e))}dispose(){this.material.dispose(),this._fsQuad.dispose()}};var kl=class extends hi{constructor(e,t){super(),this.scene=e,this.camera=t,this.clear=!0,this.needsSwap=!1,this.inverse=!1}render(e,t,i){let s=e.getContext(),r=e.state;r.buffers.color.setMask(!1),r.buffers.depth.setMask(!1),r.buffers.color.setLocked(!0),r.buffers.depth.setLocked(!0);let o,a;this.inverse?(o=0,a=1):(o=1,a=0),r.buffers.stencil.setTest(!0),r.buffers.stencil.setOp(s.REPLACE,s.REPLACE,s.REPLACE),r.buffers.stencil.setFunc(s.ALWAYS,o,4294967295),r.buffers.stencil.setClear(a),r.buffers.stencil.setLocked(!0),e.setRenderTarget(i),this.clear&&e.clear(),e.render(this.scene,this.camera),e.setRenderTarget(t),this.clear&&e.clear(),e.render(this.scene,this.camera),r.buffers.color.setLocked(!1),r.buffers.depth.setLocked(!1),r.buffers.color.setMask(!0),r.buffers.depth.setMask(!0),r.buffers.stencil.setLocked(!1),r.buffers.stencil.setFunc(s.EQUAL,1,4294967295),r.buffers.stencil.setOp(s.KEEP,s.KEEP,s.KEEP),r.buffers.stencil.setLocked(!0)}},Su=class extends hi{constructor(){super(),this.needsSwap=!1}render(e){e.state.buffers.stencil.setLocked(!1),e.state.buffers.stencil.setTest(!1)}};var wu=class{constructor(e,t){if(this.renderer=e,this._pixelRatio=e.getPixelRatio(),t===void 0){let i=e.getSize(new j);this._width=i.width,this._height=i.height,t=new hn(this._width*this._pixelRatio,this._height*this._pixelRatio,{type:In}),t.texture.name="EffectComposer.rt1"}else this._width=t.width,this._height=t.height;this.renderTarget1=t,this.renderTarget2=t.clone(),this.renderTarget2.texture.name="EffectComposer.rt2",this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2,this.renderToScreen=!0,this.passes=[],this.copyPass=new Mu(Yo),this.copyPass.material.blending=Mi,this.timer=new Dr}swapBuffers(){let e=this.readBuffer;this.readBuffer=this.writeBuffer,this.writeBuffer=e}addPass(e){this.passes.push(e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}insertPass(e,t){this.passes.splice(t,0,e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}removePass(e){let t=this.passes.indexOf(e);t!==-1&&this.passes.splice(t,1)}isLastEnabledPass(e){for(let t=e+1;t<this.passes.length;t++)if(this.passes[t].enabled)return!1;return!0}render(e){this.timer.update(),e===void 0&&(e=this.timer.getDelta());let t=this.renderer.getRenderTarget(),i=!1;for(let s=0,r=this.passes.length;s<r;s++){let o=this.passes[s];if(o.enabled!==!1){if(o.renderToScreen=this.renderToScreen&&this.isLastEnabledPass(s),o.render(this.renderer,this.writeBuffer,this.readBuffer,e,i),o.needsSwap){if(i){let a=this.renderer.getContext(),l=this.renderer.state.buffers.stencil;l.setFunc(a.NOTEQUAL,1,4294967295),this.copyPass.render(this.renderer,this.writeBuffer,this.readBuffer,e),l.setFunc(a.EQUAL,1,4294967295)}this.swapBuffers()}kl!==void 0&&(o instanceof kl?i=!0:o instanceof Su&&(i=!1))}}this.renderer.setRenderTarget(t)}reset(e){if(e===void 0){let t=this.renderer.getSize(new j);this._pixelRatio=this.renderer.getPixelRatio(),this._width=t.width,this._height=t.height,e=this.renderTarget1.clone(),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.renderTarget1=e,this.renderTarget2=e.clone(),this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2}setSize(e,t){this._width=e,this._height=t;let i=this._width*this._pixelRatio,s=this._height*this._pixelRatio;this.renderTarget1.setSize(i,s),this.renderTarget2.setSize(i,s);for(let r=0;r<this.passes.length;r++)this.passes[r].setSize(i,s)}setPixelRatio(e){this._pixelRatio=e,this.setSize(this._width,this._height)}dispose(){this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.copyPass.dispose()}};var Eu=class extends hi{constructor(e,t,i=null,s=null,r=null){super(),this.scene=e,this.camera=t,this.overrideMaterial=i,this.clearColor=s,this.clearAlpha=r,this.clear=!0,this.clearDepth=!1,this.needsSwap=!1,this.isRenderPass=!0,this._oldClearColor=new Ie}render(e,t,i){let s=e.autoClear;e.autoClear=!1;let r,o;this.overrideMaterial!==null&&(o=this.scene.overrideMaterial,this.scene.overrideMaterial=this.overrideMaterial),this.clearColor!==null&&(e.getClearColor(this._oldClearColor),e.setClearColor(this.clearColor,e.getClearAlpha())),this.clearAlpha!==null&&(r=e.getClearAlpha(),e.setClearAlpha(this.clearAlpha)),this.clearDepth==!0&&e.clearDepth(),e.setRenderTarget(this.renderToScreen?null:i),this.clear===!0&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),e.render(this.scene,this.camera),this.clearColor!==null&&e.setClearColor(this._oldClearColor),this.clearAlpha!==null&&e.setClearAlpha(r),this.overrideMaterial!==null&&(this.scene.overrideMaterial=o),e.autoClear=s}};var eg={name:"LuminosityHighPassShader",uniforms:{tDiffuse:{value:null},luminosityThreshold:{value:1},smoothWidth:{value:1},defaultColor:{value:new Ie(0)},defaultOpacity:{value:0}},vertexShader:`

		varying vec2 vUv;

		void main() {

			vUv = uv;

			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`

		uniform sampler2D tDiffuse;
		uniform vec3 defaultColor;
		uniform float defaultOpacity;
		uniform float luminosityThreshold;
		uniform float smoothWidth;

		varying vec2 vUv;

		void main() {

			vec4 texel = texture2D( tDiffuse, vUv );

			float v = luminance( texel.xyz );

			vec4 outputColor = vec4( defaultColor.rgb, defaultOpacity );

			float alpha = smoothstep( luminosityThreshold, luminosityThreshold + smoothWidth, v );

			gl_FragColor = mix( outputColor, texel, alpha );

		}`};var Ko=class n extends hi{constructor(e,t=1,i,s){super(),this.strength=t,this.radius=i,this.threshold=s,this.resolution=e!==void 0?new j(e.x,e.y):new j(256,256),this.clearColor=new Ie(0,0,0),this.needsSwap=!1,this.renderTargetsHorizontal=[],this.renderTargetsVertical=[],this.nMips=5;let r=Math.round(this.resolution.x/2),o=Math.round(this.resolution.y/2);this.renderTargetBright=new hn(r,o,{type:In,depthBuffer:!1}),this.renderTargetBright.texture.name="UnrealBloomPass.bright",this.renderTargetBright.texture.generateMipmaps=!1;for(let d=0;d<this.nMips;d++){let f=new hn(r,o,{type:In,depthBuffer:!1});f.texture.name="UnrealBloomPass.h"+d,f.texture.generateMipmaps=!1,this.renderTargetsHorizontal.push(f);let h=new hn(r,o,{type:In,depthBuffer:!1});h.texture.name="UnrealBloomPass.v"+d,h.texture.generateMipmaps=!1,this.renderTargetsVertical.push(h),r=Math.round(r/2),o=Math.round(o/2)}let a=eg;this.highPassUniforms=Is.clone(a.uniforms),this.highPassUniforms.luminosityThreshold.value=s,this.highPassUniforms.smoothWidth.value=.01,this.materialHighPassFilter=new rn({uniforms:this.highPassUniforms,vertexShader:a.vertexShader,fragmentShader:a.fragmentShader}),this.separableBlurMaterials=[];let l=[6,10,14,18,22];r=Math.round(this.resolution.x/2),o=Math.round(this.resolution.y/2);for(let d=0;d<this.nMips;d++)this.separableBlurMaterials.push(this._getSeparableBlurMaterial(l[d])),this.separableBlurMaterials[d].uniforms.invSize.value=new j(1/r,1/o),r=Math.round(r/2),o=Math.round(o/2);this.compositeMaterial=this._getCompositeMaterial(this.nMips),this.compositeMaterial.uniforms.blurTexture1.value=this.renderTargetsVertical[0].texture,this.compositeMaterial.uniforms.blurTexture2.value=this.renderTargetsVertical[1].texture,this.compositeMaterial.uniforms.blurTexture3.value=this.renderTargetsVertical[2].texture,this.compositeMaterial.uniforms.blurTexture4.value=this.renderTargetsVertical[3].texture,this.compositeMaterial.uniforms.blurTexture5.value=this.renderTargetsVertical[4].texture,this.compositeMaterial.uniforms.bloomStrength.value=t,this.compositeMaterial.uniforms.bloomRadius.value=.1;let c=[1,.8,.6,.4,.2];this.compositeMaterial.uniforms.bloomFactors.value=c,this.bloomTintColors=[new I(1,1,1),new I(1,1,1),new I(1,1,1),new I(1,1,1),new I(1,1,1)],this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors,this.copyUniforms=Is.clone(Yo.uniforms),this.blendMaterial=new rn({uniforms:this.copyUniforms,vertexShader:Yo.vertexShader,fragmentShader:Yo.fragmentShader,premultipliedAlpha:!0,blending:Bn,depthTest:!1,depthWrite:!1,transparent:!0}),this._oldClearColor=new Ie,this._oldClearAlpha=1,this._basic=new Wt,this._fsQuad=new or(null)}dispose(){for(let e=0;e<this.renderTargetsHorizontal.length;e++)this.renderTargetsHorizontal[e].dispose();for(let e=0;e<this.renderTargetsVertical.length;e++)this.renderTargetsVertical[e].dispose();this.renderTargetBright.dispose();for(let e=0;e<this.separableBlurMaterials.length;e++)this.separableBlurMaterials[e].dispose();this.compositeMaterial.dispose(),this.blendMaterial.dispose(),this._basic.dispose(),this._fsQuad.dispose()}setSize(e,t){let i=Math.round(e/2),s=Math.round(t/2);this.renderTargetBright.setSize(i,s);for(let r=0;r<this.nMips;r++)this.renderTargetsHorizontal[r].setSize(i,s),this.renderTargetsVertical[r].setSize(i,s),this.separableBlurMaterials[r].uniforms.invSize.value=new j(1/i,1/s),i=Math.round(i/2),s=Math.round(s/2)}render(e,t,i,s,r){e.getClearColor(this._oldClearColor),this._oldClearAlpha=e.getClearAlpha();let o=e.autoClear;e.autoClear=!1,e.setClearColor(this.clearColor,0),r&&e.state.buffers.stencil.setTest(!1),this.renderToScreen&&(this._fsQuad.material=this._basic,this._basic.map=i.texture,e.setRenderTarget(null),e.clear(),this._fsQuad.render(e)),this.highPassUniforms.tDiffuse.value=i.texture,this.highPassUniforms.luminosityThreshold.value=this.threshold,this._fsQuad.material=this.materialHighPassFilter,e.setRenderTarget(this.renderTargetBright),e.clear(),this._fsQuad.render(e);let a=this.renderTargetBright;for(let l=0;l<this.nMips;l++)this._fsQuad.material=this.separableBlurMaterials[l],this.separableBlurMaterials[l].uniforms.colorTexture.value=a.texture,this.separableBlurMaterials[l].uniforms.direction.value=n.BlurDirectionX,e.setRenderTarget(this.renderTargetsHorizontal[l]),e.clear(),this._fsQuad.render(e),this.separableBlurMaterials[l].uniforms.colorTexture.value=this.renderTargetsHorizontal[l].texture,this.separableBlurMaterials[l].uniforms.direction.value=n.BlurDirectionY,e.setRenderTarget(this.renderTargetsVertical[l]),e.clear(),this._fsQuad.render(e),a=this.renderTargetsVertical[l];this._fsQuad.material=this.compositeMaterial,this.compositeMaterial.uniforms.bloomStrength.value=this.strength,this.compositeMaterial.uniforms.bloomRadius.value=this.radius,this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors,e.setRenderTarget(this.renderTargetsHorizontal[0]),e.clear(),this._fsQuad.render(e),this._fsQuad.material=this.blendMaterial,this.copyUniforms.tDiffuse.value=this.renderTargetsHorizontal[0].texture,r&&e.state.buffers.stencil.setTest(!0),this.renderToScreen?(e.setRenderTarget(null),this._fsQuad.render(e)):(e.setRenderTarget(i),this._fsQuad.render(e)),e.setClearColor(this._oldClearColor,this._oldClearAlpha),e.autoClear=o}_getSeparableBlurMaterial(e){let t=[],i=e/3;for(let o=0;o<e;o++)t.push(.39894*Math.exp(-.5*o*o/(i*i))/i);let s=[],r=[];for(let o=1;o<e;o+=2){let a=t[o],l=o+1<e?t[o+1]:0,c=a+l;s.push((o*a+(o+1)*l)/c),r.push(c)}return new rn({defines:{KERNEL_PAIRS:s.length},uniforms:{colorTexture:{value:null},invSize:{value:new j(.5,.5)},direction:{value:new j(.5,.5)},centerWeight:{value:t[0]},gaussianOffsets:{value:s},gaussianWeights:{value:r}},vertexShader:`

				varying vec2 vUv;

				void main() {

					vUv = uv;
					gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

				}`,fragmentShader:`

				#include <common>

				varying vec2 vUv;

				uniform sampler2D colorTexture;
				uniform vec2 invSize;
				uniform vec2 direction;
				uniform float centerWeight;
				uniform float gaussianOffsets[KERNEL_PAIRS];
				uniform float gaussianWeights[KERNEL_PAIRS];

				void main() {

					vec3 diffuseSum = texture2D( colorTexture, vUv ).rgb * centerWeight;

					for ( int i = 0; i < KERNEL_PAIRS; i ++ ) {

						vec2 uvOffset = direction * invSize * gaussianOffsets[ i ];
						vec3 sample1 = texture2D( colorTexture, vUv + uvOffset ).rgb;
						vec3 sample2 = texture2D( colorTexture, vUv - uvOffset ).rgb;
						diffuseSum += ( sample1 + sample2 ) * gaussianWeights[ i ];

					}

					gl_FragColor = vec4( diffuseSum, 1.0 );

				}`})}_getCompositeMaterial(e){return new rn({defines:{NUM_MIPS:e},uniforms:{blurTexture1:{value:null},blurTexture2:{value:null},blurTexture3:{value:null},blurTexture4:{value:null},blurTexture5:{value:null},bloomStrength:{value:1},bloomFactors:{value:null},bloomTintColors:{value:null},bloomRadius:{value:0}},vertexShader:`

				varying vec2 vUv;

				void main() {

					vUv = uv;
					gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

				}`,fragmentShader:`

				varying vec2 vUv;

				uniform sampler2D blurTexture1;
				uniform sampler2D blurTexture2;
				uniform sampler2D blurTexture3;
				uniform sampler2D blurTexture4;
				uniform sampler2D blurTexture5;
				uniform float bloomStrength;
				uniform float bloomRadius;
				uniform float bloomFactors[NUM_MIPS];
				uniform vec3 bloomTintColors[NUM_MIPS];

				float lerpBloomFactor( const in float factor ) {

					float mirrorFactor = 1.2 - factor;
					return mix( factor, mirrorFactor, bloomRadius );

				}

				void main() {

					// 3.0 for backwards compatibility with previous alpha-based intensity
					vec3 bloom = 3.0 * bloomStrength * (
						lerpBloomFactor( bloomFactors[ 0 ] ) * bloomTintColors[ 0 ] * texture2D( blurTexture1, vUv ).rgb +
						lerpBloomFactor( bloomFactors[ 1 ] ) * bloomTintColors[ 1 ] * texture2D( blurTexture2, vUv ).rgb +
						lerpBloomFactor( bloomFactors[ 2 ] ) * bloomTintColors[ 2 ] * texture2D( blurTexture3, vUv ).rgb +
						lerpBloomFactor( bloomFactors[ 3 ] ) * bloomTintColors[ 3 ] * texture2D( blurTexture4, vUv ).rgb +
						lerpBloomFactor( bloomFactors[ 4 ] ) * bloomTintColors[ 4 ] * texture2D( blurTexture5, vUv ).rgb
					);

					float bloomAlpha = max( bloom.r, max( bloom.g, bloom.b ) );
					gl_FragColor = vec4( bloom, bloomAlpha );

				}`})}};Ko.BlurDirectionX=new j(1,0);Ko.BlurDirectionY=new j(0,1);var Ll={name:"OutputShader",uniforms:{tDiffuse:{value:null},toneMappingExposure:{value:1}},vertexShader:`
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

		#include <tonemapping_pars_fragment>
		#include <colorspace_pars_fragment>

		varying vec2 vUv;

		void main() {

			gl_FragColor = texture2D( tDiffuse, vUv );

			// tone mapping

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

			// color space

			#ifdef SRGB_TRANSFER

				gl_FragColor = sRGBTransferOETF( gl_FragColor );

			#endif

		}`};var Tu=class extends hi{constructor(){super(),this.isOutputPass=!0,this.uniforms=Is.clone(Ll.uniforms),this.material=new No({name:Ll.name,uniforms:this.uniforms,vertexShader:Ll.vertexShader,fragmentShader:Ll.fragmentShader}),this._fsQuad=new or(this.material),this._outputColorSpace=null,this._toneMapping=null}render(e,t,i){this.uniforms.tDiffuse.value=i.texture,this.uniforms.toneMappingExposure.value=e.toneMappingExposure,(this._outputColorSpace!==e.outputColorSpace||this._toneMapping!==e.toneMapping)&&(this._outputColorSpace=e.outputColorSpace,this._toneMapping=e.toneMapping,this.material.defines={},ct.getTransfer(this._outputColorSpace)===bt&&(this.material.defines.SRGB_TRANSFER=""),this._toneMapping===fl?this.material.defines.LINEAR_TONE_MAPPING="":this._toneMapping===pl?this.material.defines.REINHARD_TONE_MAPPING="":this._toneMapping===ml?this.material.defines.CINEON_TONE_MAPPING="":this._toneMapping===Or?this.material.defines.ACES_FILMIC_TONE_MAPPING="":this._toneMapping===yl?this.material.defines.AGX_TONE_MAPPING="":this._toneMapping===_l?this.material.defines.NEUTRAL_TONE_MAPPING="":this._toneMapping===gl&&(this.material.defines.CUSTOM_TONE_MAPPING=""),this.material.needsUpdate=!0),this.renderToScreen===!0?(e.setRenderTarget(null),this._fsQuad.render(e)):(e.setRenderTarget(t),this.clear&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),this._fsQuad.render(e))}dispose(){this.material.dispose(),this._fsQuad.dispose()}};var Ee=(n,e)=>new j(n,e),Rw=72,Ff={};function le(n,e){return Ff[n]||(Ff[n]=e()),Ff[n]}function Qo(n,e=120){let t=new Pr(n),i=[Ee(0,0),...t.getSpacedPoints(e)],s=i[i.length-1];s.x>5e-4&&i.push(Ee(0,s.y));let r=new sl(i,Rw);return r.computeVertexNormals(),r}var ea=n=>[Ee(n-.015,0),Ee(n,.02),Ee(n,.055),Ee(n-.03,.085),Ee(n-.06,.105),Ee(n-.05,.13),Ee(n-.09,.16)];function Cw(){return Qo([...ea(.33),Ee(.19,.21),Ee(.145,.31),Ee(.12,.42),Ee(.115,.47),Ee(.2,.495),Ee(.215,.52),Ee(.18,.545),Ee(.11,.56),Ee(.04,.565),Ee(0,.566)])}function Pw(){return Qo([...ea(.34),Ee(.2,.21),Ee(.145,.34),Ee(.12,.48),Ee(.135,.535),Ee(.225,.56),Ee(.225,.595),Ee(.14,.62),Ee(.15,.66),Ee(.19,.74),Ee(.205,.82),Ee(.185,.92),Ee(.13,1.01),Ee(.06,1.07),Ee(0,1.085)])}function Iw(){return Qo([...ea(.37),Ee(.23,.21),Ee(.165,.36),Ee(.135,.55),Ee(.14,.72),Ee(.165,.775),Ee(.245,.8),Ee(.245,.84),Ee(.17,.865),Ee(.19,.93),Ee(.25,1.02),Ee(.29,1.07),Ee(.285,1.09),Ee(0,1.09)])}function kw(){return Qo([...ea(.38),Ee(.24,.21),Ee(.175,.38),Ee(.145,.6),Ee(.15,.78),Ee(.17,.835),Ee(.255,.86),Ee(.255,.9),Ee(.18,.925),Ee(.2,.99),Ee(.245,1.08),Ee(.27,1.14),Ee(.255,1.165),Ee(.17,1.18),Ee(.14,1.22),Ee(.06,1.245),Ee(0,1.25)])}function Lw(){return Qo([...ea(.36),Ee(.255,.2),Ee(.25,.24),Ee(.2,.26),Ee(0,.262)])}var Bt={w:{glow:3007206,eye:683263,eyeIntensity:.9,accent:16765286,rim:8382975,rimStrength:.32,body:{color:14275818,roughness:.36,metalness:0,clearcoat:.85,clearcoatRoughness:.18,envMapIntensity:.8}},b:{glow:16727464,eye:16727464,eyeIntensity:4.6,accent:16765286,rim:16732086,rimStrength:.55,body:{color:920596,roughness:.22,metalness:.5,clearcoat:1,clearcoatRoughness:.08,envMapIntensity:.9}}};function Nl(n,e,t){let i={value:new Ie(e)},s={value:t};n.userData.rim=i,n.userData.rimStrength=s;let r=n.onBeforeCompile;n.onBeforeCompile=(a,l)=>{r&&r(a,l),a.uniforms.rimColor=i,a.uniforms.rimStrength=s,a.fragmentShader=`uniform vec3 rimColor;
uniform float rimStrength;
`+a.fragmentShader.replace("#include <emissivemap_fragment>",`#include <emissivemap_fragment>
       float gbcRim = pow(1.0 - clamp(dot(normalize(normal), normalize(vViewPosition)), 0.0, 1.0), 2.6);
       totalEmissiveRadiance += rimColor * gbcRim * rimStrength;`)};let o=n.customProgramCacheKey?n.customProgramCacheKey.bind(n):()=>"";return n.customProgramCacheKey=()=>o()+"|gbcRim",n}var zr={neon(n){let e=Bt[n];return Nl(new Cn({...e.body,emissive:0}),e.rim,e.rimStrength)}},Vf={},Wf="neon";function $f(n){zr[n]&&(Wf=n)}function Dw(n){return(zr[Wf]||zr.neon)(n)}var Bf={},Hf={};function Dl(n,e=.9){let t=n+":"+e;return Hf[t]||(Hf[t]=new ke({color:new Ie(n).multiplyScalar(.3),emissive:n,emissiveIntensity:e,roughness:.45})),Hf[t]}function ar(n,e=3.2){let t=n+":"+e;return Bf[t]||(Bf[t]=new ke({color:n,emissive:n,emissiveIntensity:e,roughness:.3})),Bf[t]}var Jo={};function Nw(n){if(!Jo[n]){let e=Bt[n];Jo[n]=new ke({color:e.eye,emissive:e.eye,emissiveIntensity:e.eyeIntensity,roughness:.15}),Jo[n].userData.base=e.eyeIntensity}return Jo[n]}var zf={};function Uw(n){if(!zf[n]){let e=Bt[n].glow;zf[n]=new ke({color:e,emissive:e,emissiveIntensity:n==="w"?1.6:3,roughness:.3})}return zf[n]}var Ow=new ke({color:11187158,metalness:.95,roughness:.22}),Fw=new Wt({color:16777215}),Yt={dark:new ke({color:1843251,metalness:.85,roughness:.28}),visor:new Cn({color:329229,metalness:.3,roughness:.12,clearcoat:1,clearcoatRoughness:.08,envMapIntensity:.7}),ledG:new ke({color:4063114,emissive:4063114,emissiveIntensity:2.6}),ledA:new ke({color:16756782,emissive:16756782,emissiveIntensity:2.6}),blade:new ke({color:13226751,metalness:.8,roughness:.25,transparent:!0,opacity:.85}),gold:new ke({color:16765286,emissive:16756768,emissiveIntensity:.9,metalness:.7,roughness:.38}),sweat:new Cn({color:9428223,roughness:.05,transmission:.6,thickness:.1,emissive:2263295,emissiveIntensity:.6}),badge:new ke({color:16777215,roughness:.4}),nostril:new ke({color:329228,roughness:.6})},Gf={};function jo(n,e){let t=n+e;if(Gf[t])return Gf[t];let i=Bt[e].glow,s;return n==="accent"?s=new ke({color:e==="w"?2278604:13904522,emissive:e==="w"?745059:6949956,roughness:.35,metalness:.2}):n==="cape"?s=new Cn({color:e==="w"?1747379:10490975,emissive:i,emissiveIntensity:.25,roughness:.3,metalness:.3,side:pn,clearcoat:.6}):n==="collar"?s=new ke({color:e==="w"?16251135:2761782,roughness:.45}):n==="spike"&&(s=new ke({color:new Ie(i).multiplyScalar(.55),emissive:i,emissiveIntensity:e==="w"?.9:1.8,roughness:.6,metalness:0,transparent:!0,opacity:.9})),Gf[t]=s,s}var Zo=null,Au=null;function tg(){return Zo}function Bw(){if(Au)return Au;let n=document.createElement("canvas");n.width=4,n.height=64;let e=n.getContext("2d");for(let t=0;t<64;t++)e.fillStyle=t%4<2?"rgba(255,255,255,0.9)":"rgba(255,255,255,0.1)",e.fillRect(0,t,4,1);return Zo=new dn(n),Zo.wrapS=Zo.wrapT=Gi,Zo.repeat.set(1,3),Au=new Wt({color:8382975,map:Zo,transparent:!0,opacity:.12,blending:Bn,depthWrite:!1,side:pn}),Au}function ta(n,e,t,i,s,r,o=n){let a=new gt;a.position.set(0,t,i);let l=le("eye",()=>new Tt(1,24,16)),c=le("glint",()=>new Tt(1,10,8));for(let d of[-1,1]){let f=new oe(l,Nw(e));f.scale.set(r,r*1.3,r*.55),f.position.x=d*s;let h=new oe(c,Fw);h.scale.setScalar(r*.28),h.position.set(d*s+r*.3,r*.4,r*.45),a.add(f,h)}return a.userData.baseZ=i,n.add(a),o.userData.eyes=o.userData.eyes||[],o.userData.eyes.push(a),a}function Hw(n,e,t,i=0,s=0,r=.16,o=n,a=0){let l=new oe(le("ant-"+r,()=>new yt(.011,.014,r,10)),Ow),c=new gt;c.position.set(i,t,a),c.rotation.z=s,l.position.y=r/2;let d=new oe(le("ant-tip",()=>new Tt(.034,18,12)),ar(Bt[e].glow));d.position.y=r+.02,c.add(l,d),c.userData.antenna=!0,n.add(c),o.userData.antennas=o.userData.antennas||[],o.userData.antennas.push(c)}function ks(n,e,t,i,s=.012){let r=new oe(le("ring-"+i+"-"+s,()=>new fn(i,s,10,64)),Uw(e));return r.rotation.x=Math.PI/2,r.position.y=t,n.add(r),r}function En(n,e){let t=new oe(n,e);return t.castShadow=!0,t.receiveShadow=!0,t.userData.body=!0,t}function lt(n,e,t,i,s,r=0,o=0,a=0){let l=new oe(n,e);return l.position.set(t,i,s),l.rotation.set(r,o,a),l}function ng(n,e,t,i){return le(n,()=>new yt(e,e,t,40,1,!0,-i/2,i))}var zw=()=>le("unit-sphere",()=>new Tt(1,40,28));function Gw(n,e,t,i){n.add(En(le("pawn",Cw),i));let s=En(le("pawn-head",()=>new Tt(.168,48,32)),i);s.position.y=.705,n.add(s);let r=jo("accent",t),o=lt(le("cap-dome",()=>new Tt(.176,40,20,0,Math.PI*2,0,Math.PI*.42)),r,0,.72,-.005,-.12),a=lt(le("cap-brim",()=>{let y=new yt(.15,.15,.016,32,1,!1,-Math.PI/2,Math.PI);return y.scale(1,1,.9),y}),r,0,.8,.08,.16),l=lt(le("cap-btn",()=>new Tt(.022,12,8)),ar(Bt[t].glow,2),0,.88,-.02);n.add(o,a,l),ta(n,t,.71,.15,.058,.032,e);let c=lt(le("pad",()=>new yt(.045,.045,.03,16)),Yt.dark,.168,.7,0,0,0,Math.PI/2),d=lt(le("boom-p",()=>new yt(.007,.007,.13,8)),Yt.dark,.135,.635,.07,1.25,0,.35),f=lt(le("mic",()=>new Tt(.018,10,8)),ar(Bt[t].glow,2),.09,.62,.13);n.add(c,d,f);let h=lt(le("lanyard",()=>new fn(.11,.006,6,30,Math.PI)),r,0,.56,.03,-.35,0,Math.PI),u=lt(le("badge",()=>new ft(.075,.055,.01,1,.006)),Yt.badge,0,.42,.135,-.22),m=lt(le("stripe",()=>new Fn(.075,.014,.012)),r,0,.442,.139,-.22);n.add(h,u,m),ks(n,t,.105,.305)}function Vw(n,e,t,i,s){n.add(En(le("rook-plinth",()=>Qo([...ea(.37),Ee(.3,.2),Ee(.29,.225),Ee(0,.226)])),i));let r=En(le("rook-tower",()=>new ft(.44,.62,.44,4,.05)),i);r.position.y=.53,n.add(r);let o=En(le("rook-cornice",()=>new ft(.56,.1,.56,3,.03)),i);o.position.y=.87,n.add(o);let a=le("mer-c",()=>new ft(.15,.14,.15,3,.025)),l=le("mer-m",()=>new ft(.11,.14,.09,3,.022));for(let[f,h,u,m]of[[-.205,-.205,a,0],[.205,-.205,a,0],[-.205,.205,a,0],[.205,.205,a,0],[0,.225,l,0],[0,-.225,l,0],[.225,0,l,Math.PI/2],[-.225,0,l,Math.PI/2]]){let y=En(u,i);y.position.set(f,.985,h),y.rotation.y=m,n.add(y)}n.add(lt(le("rook-disp",()=>new ft(.32,.1,.02,2,.01)),Yt.visor,0,.74,.222)),ta(n,t,.74,.236,.075,.032,e),n.add(lt(le("rook-rack",()=>new ft(.32,.36,.016,2,.008)),Yt.dark,0,.45,.222));let c=le("led",()=>new ft(.045,.02,.014,1,.005)),d=le("slot",()=>new ft(.17,.018,.012,1,.004));s.leds=[];for(let f=0;f<4;f++){let h=.33+f*.08;n.add(lt(d,Yt.visor,-.045,h,.232));for(let u=0;u<2;u++){let m=lt(c,(f+u)%2?Yt.ledA:Yt.ledG,.075+u*.055,h,.233);n.add(m),s.leds.push(m)}}for(let f of[-1,1])n.add(lt(le("rack-ear",()=>new ft(.03,.3,.06,1,.01)),Yt.dark,f*.232,.5,.17));for(let f=0;f<4;f++)n.add(lt(le("vent",()=>new ft(.26,.014,.012,1,.004)),Yt.dark,0,.36+f*.07,-.224));ks(n,t,.105,.342)}function Ww(n,e,t,i,s){n.add(En(le("knight-base",Lw),i));let r=new gt;r.position.y=.24,n.add(r);let o=zw(),a=(u,m,y,g,p,v,M=0)=>{let _=En(o,i);return _.scale.set(u,m,y),_.position.set(g,p,v),_.rotation.x=M,r.add(_),_},l=En(le("kn-neck",()=>new yt(.125,.2,.56,36,1)),i);l.scale.set(.82,1,1),l.position.set(0,.27,-.045),l.rotation.x=-.2,r.add(l),a(.17,.12,.2,0,.06,.02),a(.145,.15,.185,0,.6,-.02,.45),a(.112,.1,.19,0,.5,.17,.62),a(.1,.07,.13,0,.42,.12,.3),a(.09,.075,.07,0,.44,.31,.6);for(let u of[-1,1]){r.add(lt(le("kn-nos",()=>new Tt(.02,12,8)),Yt.nostril,u*.042,.43,.37));let m=En(le("kn-ear",()=>new Rs(.045,.16,16)),i);m.position.set(u*.075,.78,-.07),m.rotation.set(-.2,0,-u*.22),r.add(m);let y=lt(le("kn-inear",()=>new Rs(.022,.1,10)),ar(Bt[t].glow,1.8),u*.075,.77,-.05,-.2,0,-u*.22);r.add(y)}let c=lt(le("kn-visor",()=>new ft(.25,.075,.06,2,.025)),Yt.visor,0,.615,.14,.42);r.add(c);let d=ta(r,t,.622,.172,.058,.028,e);d.rotation.x=.42;let f=le("kn-fin",()=>new ft(.035,.1,.08,2,.015)),h=new Cr(Ee(.7,-.12),Ee(.62,-.2),Ee(.4,-.27),Ee(.1,-.25));for(let u=0;u<7;u++){let m=u/6,y=h.getPoint(m),g=h.getTangent(m),p=new oe(f,ar(Bt[t].glow,2.4));p.position.set(0,y.x,y.y-.02),p.rotation.x=Math.atan2(g.x,-g.y),r.add(p)}s.rotors=[];for(let u of[-1,1]){r.add(lt(le("kn-arm",()=>new yt(.011,.011,.14,8)),Yt.dark,u*.2,.66,-.06,0,0,Math.PI/2));let m=new gt;m.position.set(u*.27,.69,-.06),m.add(new oe(le("hub",()=>new yt(.022,.022,.03,12)),Yt.dark));for(let y=0;y<2;y++)m.add(lt(le("blade",()=>new ft(.2,.006,.035,1,.003)),Yt.blade,0,.018,0,0,y*Math.PI/2));r.add(m),s.rotors.push(m)}e.userData.knightHead=r,ks(n,t,.105,.335)}function $w(n,e,t,i,s){let r=Bt[t];n.add(En(le("bishop",Pw),i));let o=En(le("bishop-top",()=>new Tt(.052,24,16)),i);o.position.y=1.12,n.add(o);let a=new oe(le("slit",()=>new ft(.032,.3,.43,2,.012)),ar(r.glow));a.position.set(0,.89,0),a.rotation.z=-.65,n.add(a),n.add(lt(ng("b-hood",.152,.07,1.7),Yt.visor,0,.75,0)),ta(n,t,.752,.175,.056,.03,e);let l=le("bead",()=>new Tt(.016,10,8));for(let f=0;f<9;f++){let h=-.9+f*.225;n.add(lt(l,f===4?ar(r.accent,1.6):Yt.gold,Math.sin(h)*.16,.5-Math.cos(h)*.05+.05,Math.cos(h)*.16*.95+0))}let c=new oe(le("holo",()=>new yt(.2,.24,.6,40,1,!0)),Bw());c.position.y=.84,c.userData.noShadow=!0,c.raycast=()=>{},n.add(c);let d=lt(le("halo",()=>new fn(.11,.009,8,40)),Dl(16765286,.9),0,1.26,-.02,Math.PI/2-.25);n.add(d),s.holo=c,s.halo=d,ks(n,t,.578,.226),ks(n,t,.105,.312)}function qw(n,e,t,i){let s=Bt[t];n.add(En(le("queen",Iw),i));let r=le("q-lspike",()=>new Rs(.03,.22,12)),o=le("pearl",()=>new Tt(.032,18,12));for(let c=0;c<9;c++){let d=c/9*Math.PI*2,f=c%3===0?1.25:1,h=lt(r,jo("spike",t),Math.sin(d)*.245,1.17+(f-1)*.11,Math.cos(d)*.245,Math.cos(d)*.3,0,-Math.sin(d)*.3);h.scale.y=f,n.add(h),n.add(lt(o,c%3===0?Dl(s.accent,.95):Dl(s.glow,t==="w"?1:2),Math.sin(d)*.235,1.105,Math.cos(d)*.235))}let a=En(le("q-dome",()=>new Tt(.15,32,16,0,Math.PI*2,0,Math.PI/2)),i);a.position.y=1.08,n.add(a),n.add(lt(le("q-orb",()=>new Tt(.06,24,16)),Dl(s.accent,.95),0,1.28,0)),n.add(lt(ng("q-visor",.158,.075,2.2),Yt.visor,0,.935,0)),ta(n,t,.935,.17,.06,.032,e),n.add(lt(le("earpad",()=>new yt(.038,.038,.03,16)),Yt.dark,.16,.935,0,0,0,Math.PI/2)),n.add(lt(le("boom-q",()=>new yt(.007,.007,.15,8)),Yt.dark,.15,.885,.07,1.2,0,.3)),n.add(lt(le("mic",()=>new Tt(.018,10,8)),ar(s.glow,2),.115,.855,.14)),n.add(lt(le("q-star",()=>{let c=new bi;for(let d=0;d<10;d++){let f=d/10*Math.PI*2-Math.PI/2,h=d%2?.02:.045;d?c.lineTo(Math.cos(f)*h,-Math.sin(f)*h):c.moveTo(Math.cos(f)*h,-Math.sin(f)*h)}return new $i(c,{depth:.01,bevelEnabled:!1})}),Yt.gold,0,.6,.142));let l=lt(le("q-cape",()=>new yt(.19,.33,.62,32,1,!0,Math.PI-.95,1.9)),jo("cape",t),0,.5,-.02);l.castShadow=!0,n.add(l),ks(n,t,.82,.246),ks(n,t,.105,.342)}function Xw(n,e,t,i,s){let r=Bt[t];n.add(En(le("king",kw),i));let o=le("k-tooth",()=>new ft(.07,.07,.05,2,.015));for(let h=0;h<8;h++){let u=h/8*Math.PI*2,m=En(o,i);m.position.set(Math.sin(u)*.25,1.19,Math.cos(u)*.25),m.rotation.y=u,n.add(m)}let a=En(le("k-v",()=>new ft(.085,.36,.085,3,.02)),i);a.position.y=1.42;let l=En(le("k-h",()=>new ft(.25,.085,.085,3,.02)),i);l.position.y=1.47,n.add(a,l);let c=lt(le("k-gem",()=>new kr(.045)),Dl(r.accent,1),0,1.47,.05);n.add(c),Hw(n,t,1.6,0,0,.1,e),ta(n,t,1,.19,.068,.034,e);for(let h of[-1,1])n.add(lt(le("k-glass",()=>new fn(.05,.008,8,28)),Yt.dark,h*.068,1,.198));n.add(lt(le("k-bridge",()=>new yt(.006,.006,.04,6)),Yt.dark,0,1.005,.205,0,0,Math.PI/2));for(let h of[-1,1])n.add(lt(le("k-collar",()=>new ft(.1,.06,.02,1,.008)),jo("collar",t),h*.055,.83,.175,-.25,h*.35,h*.45));let d=new bi;d.moveTo(-.02,0),d.lineTo(.02,0),d.lineTo(.035,-.17),d.lineTo(0,-.21),d.lineTo(-.035,-.17),d.closePath(),n.add(lt(le("tie",()=>new $i(d,{depth:.01,bevelEnabled:!0,bevelThickness:.004,bevelSize:.004,bevelSegments:1})),jo("accent",t),0,.8,.158,-.1)),n.add(lt(le("knot",()=>new Tt(.024,12,8)),jo("accent",t),0,.805,.17));let f=lt(le("drop",()=>{let h=new Tt(.035,16,12);return h.scale(1,1.4,1),h}),Yt.sweat,.17,1.05,.14);f.visible=!1,n.add(f),s.sweat=f,ks(n,t,.88,.256),ks(n,t,.105,.352)}function Ru(n){return n==="w"?Math.PI:0}function na(n,e){let t=new gt,i=Dw(e);t.userData.bodyMat=i,t.userData.type=n,t.userData.color=e;let s=new gt;t.add(s),t.userData.inner=s;let r={};t.userData.identity=r,n==="p"?Gw(s,t,e,i,r):n==="r"?Vw(s,t,e,i,r):n==="n"?Ww(s,t,e,i,r):n==="b"?$w(s,t,e,i,r):n==="q"?qw(s,t,e,i,r):n==="k"&&Xw(s,t,e,i,r),t.rotation.y=Ru(e),t.traverse(a=>{a.isMesh&&!a.userData.noShadow&&(a.castShadow=!0)});let o=Vf[Wf];return o&&o(t,n,e),t}var ig=new Map;function $n(n,e={}){let t=typeof n=="string"?Yw(n):n;if(!t||!t.length)return"";let i=typeof n=="string"?n:t.join("|").slice(0,80),s=ig.get(i);if(!s||!s.items.length){let o=t.slice();for(let a=o.length-1;a>0;a--){let l=Math.random()*(a+1)|0;[o[a],o[l]]=[o[l],o[a]]}s&&s.last&&o.length>1&&o[o.length-1]===s.last&&o.unshift(o.pop()),s={items:o,last:s&&s.last},ig.set(i,s)}let r=s.items.pop();return s.last=r,r.replace(/\{(\w+)\}/g,(o,a)=>e[a]??"")}function Yw(n){return n.split(".").reduce((e,t)=>e?e[t]:null,Kw)}var Kw={start:["Hi! I\u2019m Grok Bot. Zero feelings, but 100% up for chess. \u{1F916}","New game! My pawns are freshly updated and highly motivated.","I\u2019ve already simulated three million games today. This one will be the prettiest.","Ready when you are. I\u2019m always ready. I never sleep. Never.","You\u2019re White. I\u2019m Black \u2013 and I have a very good cooling fan.","Fair-play mode: on. Show-off mode: slightly elevated.","I polished my pieces. They\u2019re already shining with excitement.","Let\u2019s play a game the toasters will talk about for years."],pvpStart:["Player vs player! I\u2019m just commentating. And eating virtual popcorn. \u{1F37F}","Two humans, one board, one commentator bot. Let\u2019s go!","I\u2019ll stay out of it. Mostly. Okay, I\u2019ll commentate a little.","Welcome to the live broadcast from the Neon Stadium!"],thinking:["One moment\u2026 calculating. Please don\u2019t pull the plug.","Loading genius\u2026 42% \u2026","I\u2019m simulating a thousand universes. You win in three of them.","Hmm. Hmmmm. Hmmmmmmm. That\u2019s my thinking noise, by the way.","Just asking the cloud\u2026 \u2601\uFE0F","I\u2019m thinking so hard you can hear my fan.","Please hold, your move is important to us. \u{1F3B5}","Calculating, calculating \u2026 ah, an idea! No, wait. Yes!"],botMoves:["{piece} to {sq}. Totally on purpose. I think.","{piece} to {sq}. My fan is spinning up \u2013 that\u2019s enthusiasm.","{sq}! It\u2019s in my training data. Somewhere.","I move my {piece} to {sq} and pretend it\u2019s a master plan.","{piece} to {sq}. Strategy level: mysterious.","Move made. Your turn. No pressure. Okay, a little pressure.","There, my {piece} is on {sq}. Curious what you\u2019ll do now.","{piece} to {sq}. I have an idea. Not telling, though.","{piece} to {sq}. Felt good. Computationally speaking.","{sq}. I call this move \u201CThe Elegant Toaster\u201D.","My {piece} wanted to see the view from {sq}.","{piece} to {sq}. Applause, please. Now. \u{1F44F}"],botCaptures:["Thanks for your {piece}! Very generous. \u{1F381}","Your {piece} got rate-limited. Forever. \u{1F6AB}","Om nom nom \u2013 your {piece} was tasty.","Oops, there was a {piece} in the way. Not anymore.","Your {piece} is taking a break in the cache now.","Sadly, your {piece} just got a 404.","I archived your {piece}. Very lovingly.","Your {piece} was uploaded to the cloud. Far, far away."],playerCaptures:["Ouch! My {piece}! I\u2019m reporting this to support.","Okay, that was good. I\u2019ll file it under \u201Cluck\u201D.","My {piece}\u2026 so young. So unsaved.","Hey! My {piece} still had plans!","Well played. I\u2019ll pretend I saw that coming.","My {piece} is retired now. Involuntarily.","Note to self: don\u2019t leave the {piece} just standing around."],botBlunder:["Wait\u2026 WHERE IS MY {piece}?! \u{1F631}","That was \u2026 a test move. For science. Please don\u2019t tell anyone.","I just lost a {piece}. And my dignity along with it.","Error 418: I\u2019m a teapot. That\u2019s how it feels right now.","Okay. Okay okay okay. Stay calm, circuits."],playerBlunder:["Your {piece}! I\u2019ll take it with great joy and a little pity.","Was that {piece} on purpose? Asking for a friend.","A {piece} on sale? I won\u2019t say no."],playerSacrifice:["A sacrifice?! Either genius or an accident. I\u2019m curious.","Bold! Let me check whether it\u2019s a trap \u2026 while sweating bits.","That smells like tactics. Or burnt toast."],botSacrifice:["I\u2019m sacrificing something here. Trust me. I\u2019m a bot.","A gift! But with a catch. Maybe. Who knows."],botGivesCheck:["Check! Your king should work from home for a bit.","Check! No reason to panic. Okay, a small reason.","Check! Ding-dong, your king is expected. \u{1F514}","Check! Just wanted to mention it.","Check! Your king has a new notification.","Check! A little nudge. Very friendly."],botInCheck:["Check?! I\u2026 I planned it exactly like this. Honestly.","My king is sweating bits. \u{1F4A6}","Whoa. That was cheeky. I don\u2019t like it. Respect anyway.","Check? Hold on, I\u2019m looking for the emergency exit.","My king says he doesn\u2019t have time for this right now."],botFork:["Fork! \u{1F374} Two birds, one knight. Er, move.","Oh look what my {piece} is attacking at the same time. Coincidence? No."],playerFork:["A fork?! Who taught you that? Me?","Fork! That\u2019s rude. And pretty good."],botCastles:["Castling! My king moves into the bunker. With Wi-Fi.","King and rook docking. Security update installed. \u{1F6E1}\uFE0F","Castling! My king just secured a corner office."],playerCastles:["Castling! Your king is getting cozy. I\u2019ll remember the address.","Better safe than sorry. Nice castling!","Ah, classic castling. Very serious. I\u2019m impressed."],enPassant:["En passant! The most secret rule in chess. I love it. \u{1F575}\uFE0F","En passant! If anyone doesn\u2019t know it, just say: magic.","Captured in passing. So polite and so mean at the same time."],botPromotes:["My pawn finished its training: now a {piece}! \u{1F393}","Upgrade installed! The intern becomes a {piece}.","Promotion! My pawn is now a {piece}. Pay raise included."],playerPromotes:["Your pawn becomes a {piece}? That was a fast career!","Promotion to {piece}. I\u2019m jealous. And a little nervous.","Congrats on the promotion! Sending confetti. \u{1F389}"],botWinning:["Things are going well. Should I slow down a bit?","Material advantage! I\u2019ll stay humble anyway. Mostly.","Not to brag, but my evaluation is pointing up. \u{1F4C8}","My pieces are grinning. I didn\u2019t teach them that."],botLosing:["I\u2019m not losing. I\u2019m collecting training data.","Everything is going to plan. The plan is called improvisation.","Quick question: is there a \u201Creroll\u201D button here?","I\u2019m sweating. Bots don\u2019t sweat. I\u2019m sweating anyway."],botWins:["Checkmate! GG! Rematch? I promise I\u2019ll be nice(r).","Mate! That was close. For you, I mean. Again?","I won! Doing a little victory dance in binary now. \u{1F483}","Checkmate! I\u2019ll stay humble. Starting tomorrow."],botLoses:["Checkmate\u2026 respect! I\u2019m shutting down briefly to reflect on my life. \u{1F50C}","You won! I\u2019m impressed. And a little overheated.","GG! I\u2019m writing this in my diary. Under \u201Clessons\u201D.","Mate. Well played! I still demand a rematch voucher."],draw:["Draw! We\u2019re both winners. Or neither. Philosophically.","A draw. Fair is fair \u2013 fist bump? \u{1F91C}\u{1F916}","Stalemate! We out-maneuvered each other. Respect!"],undo:["Rewind? Sure. I\u2019ll forget it. Almost.","Move taken back! I didn\u2019t see anything. \u{1F648}","Undo! If only real life had that button.","Time travel activated. Please fasten your seatbelt. \u23EA"],screenshot:["Screenshot saved! I hope I look good. \u{1F4F8}","Click! My good side is clearly the left. \u{1F60E}","Photo saved. I\u2019m ready for my fan poster."],level:{1:["Easy? Okay, I\u2019ll play with one circuit tied behind my back.","Easy mode: I\u2019m in cuddle mode today."],2:["Medium \u2013 fair and balanced. Like a good breakfast.","Medium. I think two moves ahead. At least."],3:["Hard?! Fine. Let me get my thinking cap. \u{1F9E2}","Hard mode activated. My fan is warming up."]},pvpCheck:["Check! Oh, this is getting exciting! \u{1F37F}","Check! The king now has to look very busy, very quickly.","Check! The audience holds its breath. Well, I do."],pvpCapture:["There goes a {piece}! Recorded it. In slow motion.","Rate limited: {piece}! Extra points for style.","And the {piece} is gone. Clean!","The {piece} leaves with confetti. Stylish!"],pvpIdle:["Interesting move. No idea what it\u2019s for, but it looks good.","Pure tension. My popcorn is getting cold.","I\u2019m not saying anything. Okay: nice move!","The board is glowing. So am I, a little."],pvpMate:["Checkmate! {side} wins! What a finale! \u{1F3C6}","Mate! Congratulations, {side}! I give it 10 out of 10 antennas."],hints:{on:["Move hints on. I\u2019ll light the way. \u2728"],off:["Move hints off. Respect, pro!","No hints? Bold. I like it."]}};var tn=null,Ul=null,Ol=null,Ti=null,zn=!0,Fl=!1,ia=null,Pu=0,sg=0,lg=!1;function Bl(){if(!tn&&!lg)return null;if(!tn){let n=window.AudioContext||window.webkitAudioContext;if(!n)return null;tn=new n,Ul=tn.createGain(),Ul.gain.value=.9,Ul.connect(tn.destination);let e=tn.createDynamicsCompressor();e.threshold.value=-18,e.ratio.value=4,e.connect(Ul),Ol=tn.createGain(),Ol.gain.value=1,Ol.connect(e),Ti=tn.createGain(),Ti.gain.value=0,Ti.connect(e)}return tn.state==="suspended"&&tn.resume().catch(()=>{}),tn}function cg(n,e,t,i,s){n.gain.cancelScheduledValues(e),n.gain.setValueAtTime(1e-4,e),n.gain.exponentialRampToValueAtTime(i,e+t),n.gain.exponentialRampToValueAtTime(1e-4,e+t+s)}function kn(n,e,{type:t="sine",vol:i=.08,slide:s=0,delay:r=0,bus:o=null,attack:a=.005}={}){let l=Bl();if(!l)return;let c=l.currentTime+r,d=l.createOscillator(),f=l.createGain();d.type=t,d.frequency.setValueAtTime(n,c),s&&d.frequency.exponentialRampToValueAtTime(Math.max(30,n+s),c+e),cg(f,c,a,i,e),d.connect(f).connect(o||Ol),d.start(c),d.stop(c+a+e+.05)}function sa(n,{vol:e=.08,freq:t=1200,q:i=.8,delay:s=0,type:r="bandpass"}={}){let o=Bl();if(!o)return;let a=o.currentTime+s,l=Math.floor(o.sampleRate*n),c=o.createBuffer(1,l,o.sampleRate),d=c.getChannelData(0);for(let m=0;m<l;m++)d[m]=(Math.random()*2-1)*(1-m/l);let f=o.createBufferSource();f.buffer=c;let h=o.createBiquadFilter();h.type=r,h.frequency.value=t,h.Q.value=i;let u=o.createGain();cg(u,a,.004,e,n),f.connect(h).connect(u).connect(Ol),f.start(a)}var st={select(){zn&&(kn(880,.07,{type:"triangle",vol:.05}),kn(1320,.06,{type:"sine",vol:.03,delay:.04}))},deselect(){zn&&kn(660,.06,{type:"triangle",vol:.035,slide:-200})},hop(n=1){zn&&kn(340,.16,{type:"sine",vol:.06,slide:260+60*n})},land(n){zn&&(kn(n?140:190,.12,{type:"triangle",vol:.09,slide:-60}),sa(.05,{vol:.05,freq:2400}))},scared(){zn&&(kn(900,.18,{type:"square",vol:.025,slide:500}),kn(1100,.12,{type:"square",vol:.02,delay:.1,slide:700}))},boom(){zn&&(kn(150,.45,{type:"sawtooth",vol:.07,slide:-110}),sa(.35,{vol:.12,freq:900,q:.6,type:"lowpass"}),kn(1600,.12,{type:"square",vol:.02,slide:-1100,delay:.05}),[1046,1318,1568].forEach((n,e)=>kn(n,.08,{type:"triangle",vol:.025,delay:.12+e*.05})))},check(){zn&&[0,.16].forEach(n=>kn(740,.1,{type:"square",vol:.035,delay:n}))},castle(){zn&&(sa(.5,{vol:.05,freq:500,q:.4,type:"lowpass"}),kn(220,.4,{type:"sawtooth",vol:.03,slide:220}))},promote(){zn&&[523,659,784,1046,1318].forEach((n,e)=>kn(n,.14,{type:"triangle",vol:.045,delay:e*.07}))},win(){zn&&[523,659,784,1046,784,1046,1318].forEach((n,e)=>kn(n,.2,{type:"triangle",vol:.05,delay:e*.12}))},lose(){zn&&[392,370,349,262].forEach((n,e)=>kn(n,.3,{type:"sine",vol:.05,delay:e*.22,slide:-10}))},chirp(){if(!zn)return;let n=3+(Math.random()*3|0);for(let e=0;e<n;e++)kn(500+Math.random()*700,.05,{type:"sine",vol:.025,delay:e*.065,slide:(Math.random()-.5)*300})},shutter(){zn&&(sa(.06,{vol:.08,freq:3e3}),sa(.05,{vol:.06,freq:1800,delay:.08}))},whoosh(){zn&&sa(.6,{vol:.05,freq:700,q:.5})},assemble(){if(zn)for(let n=0;n<8;n++)kn(300+n*90,.06,{type:"square",vol:.02,delay:n*.1})}},Zw=92,Gr=60/Zw,Iu=Gr*4,rg=[[57,60,64],[53,57,60],[48,52,55],[55,59,62]],qf=n=>440*Math.pow(2,(n-69)/12);function Jw(n,e){let t=tn,i=t.createBiquadFilter();i.type="lowpass",i.frequency.value=900,i.Q.value=.7;let s=t.createGain();s.gain.setValueAtTime(1e-4,n),s.gain.exponentialRampToValueAtTime(.05,n+.6),s.gain.setValueAtTime(.05,n+Iu-.4),s.gain.exponentialRampToValueAtTime(1e-4,n+Iu+.2),i.connect(s).connect(Ti);for(let o of e)for(let a of[-7,7]){let l=t.createOscillator();l.type="sawtooth",l.frequency.value=qf(o),l.detune.value=a,l.connect(i),l.start(n),l.stop(n+Iu+.3)}for(let o of[0,2]){let a=t.createOscillator(),l=t.createGain();a.type="triangle",a.frequency.value=qf(e[0]-12);let c=n+o*Gr;l.gain.setValueAtTime(1e-4,c),l.gain.exponentialRampToValueAtTime(.09,c+.02),l.gain.exponentialRampToValueAtTime(1e-4,c+Gr*1.6),a.connect(l).connect(Ti),a.start(c),a.stop(c+Gr*1.7)}[0,1,2,1,2,0,1,2].forEach((o,a)=>{let l=n+a*Gr/2,c=t.createOscillator(),d=t.createGain();c.type="triangle",c.frequency.value=qf(e[o]+12),d.gain.setValueAtTime(1e-4,l),d.gain.exponentialRampToValueAtTime(.03,l+.01),d.gain.exponentialRampToValueAtTime(1e-4,l+.28),c.connect(d).connect(Ti),c.start(l),c.stop(l+.3)});for(let o=0;o<4;o++){let a=n+o*Gr+Gr/2,l=Math.floor(t.sampleRate*.04),c=t.createBuffer(1,l,t.sampleRate),d=c.getChannelData(0);for(let m=0;m<l;m++)d[m]=(Math.random()*2-1)*(1-m/l);let f=t.createBufferSource();f.buffer=c;let h=t.createBiquadFilter();h.type="highpass",h.frequency.value=7e3;let u=t.createGain();u.gain.value=.012,f.connect(h).connect(u).connect(Ti),f.start(a)}}function og(){if(!(!tn||!Fl))for(;Pu<tn.currentTime+1.2;)Jw(Pu,rg[sg%rg.length]),Pu+=Iu,sg++}function ra(n){Fl=n;let e=Bl();e&&(Ti.gain.cancelScheduledValues(e.currentTime),Ti.gain.setTargetAtTime(n?.55:0,e.currentTime,.4),n?ia||(Pu=e.currentTime+.1,ia=setInterval(og,250),og()):ia&&setTimeout(()=>{!Fl&&ia&&(clearInterval(ia),ia=null)},1500))}function Xf(n){zn=n}function hg(n){tn&&(n?tn.suspend().catch(()=>{}):tn.resume().catch(()=>{}))}function ku(){let n=!tn;lg=!0,Bl(),n&&Fl&&tn&&ra(!0)}if(typeof window<"u"){let n=()=>{ku(),window.removeEventListener("pointerdown",n,!0),window.removeEventListener("keydown",n,!0)};window.addEventListener("pointerdown",n,!0),window.addEventListener("keydown",n,!0)}var Cu=null;function Lu(){try{let n=Bl();return!n||!n.createMediaStreamDestination?null:(Cu||(Cu=n.createMediaStreamDestination(),Ul.connect(Cu)),Cu.stream)}catch{return null}}var ag=!1;function Du(n){ag=!!n,!(!tn||!Ti||!Fl)&&(Ti.gain.cancelScheduledValues(tn.currentTime),Ti.gain.setTargetAtTime(ag?.12:.55,tn.currentTime,.15))}function lr(n,e,t,i,s,r){n.beginPath(),n.moveTo(e+r,t),n.arcTo(e+i,t,e+i,t+s,r),n.arcTo(e+i,t+s,e,t+s,r),n.arcTo(e,t+s,e,t,r),n.arcTo(e,t,e+i,t,r),n.closePath()}function jw(n,e,t){let i=e.split(" "),s=[],r="";for(let o of i){let a=r?r+" "+o:o;n.measureText(a).width>t&&r?(s.push(r),r=o):r=a}return r&&s.push(r),s}function Qw(n,e,t,i,s="happy"){n.save(),n.strokeStyle="#9aa3c7",n.lineWidth=i*.06,n.lineCap="round",n.beginPath(),n.moveTo(e,t-i*.8),n.lineTo(e,t-i*1.08),n.stroke(),n.fillStyle="#ff3da8",n.shadowColor="#ff3da8",n.shadowBlur=i*.4,n.beginPath(),n.arc(e,t-i*1.12,i*.1,0,Math.PI*2),n.fill(),n.shadowBlur=0,n.fillStyle="#2de2e6",lr(n,e-i*1.02,t-i*.2,i*.18,i*.44,i*.09),n.fill(),n.fillStyle="#ff3da8",lr(n,e+i*.84,t-i*.2,i*.18,i*.44,i*.09),n.fill();let r=n.createRadialGradient(e-i*.3,t-i*.5,i*.1,e,t,i*1.1);r.addColorStop(0,"#ffffff"),r.addColorStop(.6,"#d9d4ff"),r.addColorStop(1,"#8f86d9"),n.fillStyle=r,lr(n,e-i*.85,t-i*.8,i*1.7,i*1.55,i*.6),n.fill(),n.fillStyle="#0b0a20",lr(n,e-i*.66,t-i*.42,i*1.32,i*.78,i*.36),n.fill();let o=s==="sad"?"#ff3da8":s==="think"?"#ffd166":s==="happy"?"#b6ff3b":"#2de2e6";n.fillStyle=o,n.shadowColor=o,n.shadowBlur=i*.25;for(let a of[-1,1])n.beginPath(),n.ellipse(e+a*i*.27,t-i*.04,i*.14,i*(s==="sad"?.1:.17),0,0,Math.PI*2),n.fill();n.shadowBlur=0,n.strokeStyle="#5b4fb3",n.lineWidth=i*.07,n.beginPath(),s==="sad"?(n.moveTo(e-i*.22,t+i*.6),n.quadraticCurveTo(e,t+i*.45,e+i*.22,t+i*.6)):(n.moveTo(e-i*.26,t+i*.48),n.quadraticCurveTo(e,t+i*.7,e+i*.26,t+i*.48)),n.stroke(),n.restore()}function ug(n,{result:e,sub:t,quote:i,mood:s}){let l=Math.round(1504*(n.height/n.width)),c=130,f=c+l+230+48,h=document.createElement("canvas");h.width=1600,h.height=f;let u=h.getContext("2d"),m=u.createLinearGradient(0,0,1600,f);m.addColorStop(0,"#1b1037"),m.addColorStop(.5,"#0c1124"),m.addColorStop(1,"#071a24"),u.fillStyle=m,u.fillRect(0,0,1600,f);let y=u.createRadialGradient(0,0,10,0,0,900);y.addColorStop(0,"rgba(255,61,168,.35)"),y.addColorStop(1,"rgba(255,61,168,0)"),u.fillStyle=y,u.fillRect(0,0,1600,f);let g=u.createRadialGradient(1600,f,10,1600,f,900);g.addColorStop(0,"rgba(45,226,230,.28)"),g.addColorStop(1,"rgba(45,226,230,0)"),u.fillStyle=g,u.fillRect(0,0,1600,f);let p='"SF Pro Display", -apple-system, "Segoe UI", system-ui, sans-serif';u.font=`900 64px ${p}`;let v=u.createLinearGradient(48,0,648,0);v.addColorStop(0,"#2de2e6"),v.addColorStop(.5,"#ff3da8"),v.addColorStop(1,"#ffd166"),u.fillStyle=v,u.textBaseline="middle",u.shadowColor="rgba(255,61,168,.55)",u.shadowBlur=24,u.fillText("Grok Bot Chess",48,c/2+6),u.shadowBlur=0;let M=u.measureText("Grok Bot Chess").width;u.save(),u.translate(48+M+22,c/2+2),u.rotate(-.07);let _=u.createLinearGradient(0,-20,70,20);_.addColorStop(0,"#b6ff3b"),_.addColorStop(1,"#2de2e6"),u.fillStyle=_,lr(u,0,-22,72,44,10),u.fill(),u.fillStyle="#071018",u.font=`900 30px ${p}`,u.fillText("3D",14,2),u.restore(),u.font=`700 30px ${p}`,u.fillStyle="rgba(245,247,255,.9)",u.textAlign="right",u.fillText(e,1552,c/2-14),u.font=`500 22px ${p}`,u.fillStyle="rgba(154,163,199,.95)",u.fillText(t,1552,c/2+22),u.textAlign="left",u.save(),lr(u,48,c,1504,l,28),u.clip(),u.drawImage(n,48,c,1504,l),u.restore();let S=u.createLinearGradient(48,c,1552,c+l);S.addColorStop(0,"#2de2e6"),S.addColorStop(.5,"#a855f7"),S.addColorStop(1,"#ff3da8"),u.strokeStyle=S,u.lineWidth=4,u.shadowColor="rgba(168,85,247,.7)",u.shadowBlur=20,lr(u,48,c,1504,l,28),u.stroke(),u.shadowBlur=0;let E=c+l+30;Qw(u,128,E+95,62,s);let P=223,x=1600-P-48,A=160;return u.fillStyle="rgba(5,7,16,.78)",u.strokeStyle="rgba(45,226,230,.55)",u.lineWidth=2,lr(u,P,E+15,x,A,22),u.fill(),u.stroke(),u.beginPath(),u.moveTo(P,E+70),u.lineTo(P-18,E+88),u.lineTo(P,E+100),u.closePath(),u.fill(),u.font=`800 24px ${p}`,u.fillStyle="#b6ff3b",u.fillText("Grok Bot says:",P+26,E+52),u.font=`600 30px ${p}`,u.fillStyle="#f5f7ff",jw(u,"\u201E"+i+"\u201C",x-52).slice(0,3).forEach((C,k)=>u.fillText(C,P+26,E+96+k*38)),h}var Zt=window.GardenChess,e1=window.GardenAI,dg={p:"pawn",n:"knight",b:"bishop",r:"rook",q:"queen",k:"king"},Yi={p:"Pawn Bot",n:"Knight Bot",b:"Bishop Bot",r:"Rook Bot",q:"Queen Bot",k:"King Bot"},jf={w:{k:"\u2654",q:"\u2655",r:"\u2656",b:"\u2657",n:"\u2658",p:"\u2659"},b:{k:"\u265A",q:"\u265B",r:"\u265C",b:"\u265D",n:"\u265E",p:"\u265F"}},Pi={p:1,n:3,b:3,r:5,q:9,k:0},Rg="gbc-settings-v3",xt=Object.assign({hints:!0,sfx:!0,music:!1,autoRotate:!0,level:2},t1());function t1(){try{return JSON.parse(localStorage.getItem(Rg)||"{}")}catch{return{}}}function Ci(){try{localStorage.setItem(Rg,JSON.stringify(xt))}catch{}}var De=Zt.createGame(),$t="bot",It=null,Ri=[],Ii=!1,Kn=!1,Ds=[],Ji={w:[],b:[]},$r=null,Wl=!1,Hu="",zu="happy",ki=new Map,la=[],fg=1,qn=n=>document.getElementById(n),Je={},At,Ln,bn,Kt,Ls,ei,Nu,Qn,ps,Ki,Ai,Yn,xn=new Map,hr=new Map,ms=null,Uu=null,cr=null,pg=new ul,Yf=new j,ti=[],Qf=!0,ep=0,mg=performance.now(),Cg=1;function Xl(n){Cg=n}var ui=()=>ep,di=new Set,ur=!0,Mn=(n,e)=>new I(e-3.5,0,n-3.5),qt=.08,Qe={afterSync:[],afterMove:[],frame:[],beforeMove:[],explode:[],speak:null,end:null,newGame:null,stopCinematic:null,settings:[]};function n1(){let n=Je.stage;At=new gu({antialias:!0,preserveDrawingBuffer:!0,powerPreference:"high-performance"}),At.setPixelRatio(Math.min(window.devicePixelRatio||1,2)),At.shadowMap.enabled=!0,At.shadowMap.type=Nr,At.shadowMap.autoUpdate=!1,At.toneMapping=Or,At.toneMappingExposure=Og*Wr.brightness,At.outputColorSpace=Vt,n.appendChild(At.domElement),At.domElement.id="gl",At.domElement.addEventListener("webglcontextlost",l=>{l.preventDefault(),Qf=!1}),At.domElement.addEventListener("webglcontextrestored",()=>{Qf=!0,ur=!0}),Ln=new Ar,Ln.background=i1(),Ln.fog=new za(724762,22,44);let e=new $o(At),t=new bu;t.traverse(l=>{let c=l.material;c&&c.emissiveIntensity>Sg&&(c.emissiveIntensity=Sg)}),Ln.environment=e.fromScene(t,.04).texture,Ln.environmentIntensity=w1,bn=new An(38,1,.1,120),bn.position.set(0,8.8,11),Kt=new xu(bn,At.domElement),Kt.target.set(0,1,.25),Kt.enableDamping=!0,Kt.dampingFactor=.08,Kt.enablePan=!1,Kt.minDistance=7,Kt.maxDistance=19,Kt.minPolarAngle=.25,Kt.maxPolarAngle=1.18,Kt.rotateSpeed=.6,Ln.add(new ll(10466559,1313310,.42)),Qn=new Oo(16774380,1.3),Qn.position.set(-5,11,6),Qn.castShadow=!0;let i=(window.devicePixelRatio||1)>=2||Math.max(screen.width,screen.height)>1600?2048:1536;Qn.shadow.mapSize.set(i,i),Object.assign(Qn.shadow.camera,{left:-6.5,right:6.5,top:6.5,bottom:-6.5,near:2,far:28}),Qn.shadow.bias=-4e-4,Qn.shadow.normalBias=.02,Ln.add(Qn);let s=new hs(3007206,12,22,2);s.position.set(-7,3.5,-4);let r=new hs(16727464,18,22,2);r.position.set(7,3.5,-4);let o=new hs(11032055,4.5,24,2);o.position.set(0,7,9);let a=new Oo(9428223,.6);a.position.set(0,5,-9),Ln.add(s,r,o,a),Uu={front:o,back:a},ps=new gt,Ki=new gt,Ai=new gt,Yn=new gt,Ln.add(ps,Ki,Ai,Yn),s1(),r1(),Ls=new wu(At),Ls.addPass(new Eu(Ln,bn)),ei=new Ko(new j(512,512),.5,.25,Fg),Ls.addPass(ei),Ls.addPass(new Tu),ap(),Nu=new Dr,window.addEventListener("resize",Gl),window.ResizeObserver&&new ResizeObserver(()=>Gl()).observe(n),document.addEventListener("visibilitychange",()=>{let l=document.hidden;hg(l),At.setAnimationLoop(l?null:wg)}),Gl(),v1(),At.setAnimationLoop(wg)}function i1(){let n=document.createElement("canvas");n.width=16,n.height=512;let e=n.getContext("2d"),t=e.createLinearGradient(0,0,0,512);t.addColorStop(0,"#1b1440"),t.addColorStop(.45,"#101732"),t.addColorStop(1,"#06080f"),e.fillStyle=t,e.fillRect(0,0,16,512);let i=new dn(n);return i.colorSpace=Vt,i}function op(n,{size:e=64,color:t="#ffffff",font:i="800",w:s=128,h:r=128,glow:o=null}={}){let a=document.createElement("canvas");a.width=s,a.height=r;let l=a.getContext("2d");l.font=`${i} ${e}px "Apple Color Emoji", "Segoe UI Emoji", -apple-system, "Segoe UI", system-ui, sans-serif`,l.textAlign="center",l.textBaseline="middle",o&&(l.shadowColor=o,l.shadowBlur=e*.35),l.fillStyle=t,l.fillText(n,s/2,r/2+e*.04);let c=new dn(a);return c.colorSpace=Vt,c.anisotropy=4,c}function gg(n){let e=document.createElement("canvas");e.width=e.height=128;let t=e.getContext("2d"),i=t.createRadialGradient(64,64,10,64,64,90);i.addColorStop(0,`rgba(${n},0.05)`),i.addColorStop(.7,`rgba(${n},0.35)`),i.addColorStop(1,`rgba(${n},0.75)`),t.fillStyle=i,t.fillRect(0,0,128,128),t.strokeStyle=`rgba(${n},0.95)`,t.lineWidth=5,t.beginPath(),t.roundRect?t.roundRect(5,5,118,118,14):t.rect(5,5,118,118),t.stroke();let s=new dn(e);return s.colorSpace=Vt,s}function s1(){let n=new Cn({color:1317427,roughness:.5,metalness:.55,clearcoat:.3,clearcoatRoughness:.35,envMapIntensity:.6}),e=new oe(new ft(9.6,.5,9.6,6,.18),n);e.position.y=-.27,e.receiveShadow=!0,e.castShadow=!0,ps.add(e);let t=new ke({color:16727464,emissive:16727464,emissiveIntensity:4.4}),i=new ke({color:3007206,emissive:3007206,emissiveIntensity:2.2}),s=new ft(8.38,.045,.045,2,.02);for(let p=0;p<4;p++){let v=new oe(s,p%2?t:i),M=p*Math.PI/2;v.position.set(Math.sin(M)*4.19,0,Math.cos(M)*4.19),v.rotation.y=M,ps.add(v)}let r=new oe(new Fn(9.7,.03,9.7),new ke({color:11032055,emissive:11032055,emissiveIntensity:1.2}));r.position.y=-.5,ps.add(r);let o=new ft(.97,.16,.97,4,.045),a=new Cn({color:6446748,roughness:.58,metalness:.08,clearcoat:.28,clearcoatRoughness:.42,envMapIntensity:.5}),l=new Cn({color:1711936,roughness:.46,metalness:.3,clearcoat:.4,clearcoatRoughness:.3,envMapIntensity:.55});for(let p=0;p<8;p++)for(let v=0;v<8;v++){let M=new oe(o,(p+v)%2===0?a:l),_=Mn(p,v);M.position.set(_.x,0,_.z),M.receiveShadow=!0,M.userData.square={r:p,c:v},ps.add(M)}let c=new Zn(.42,.42),d=p=>new Wt({map:op(p,{size:70,color:"#c9d2ff"}),transparent:!0,depthWrite:!1});for(let p=0;p<8;p++){let v=String.fromCharCode(97+p);for(let _ of[4.45,-4.45]){let S=new oe(c,d(v));S.rotation.x=-Math.PI/2,_<0&&(S.rotation.z=Math.PI),S.position.set(p-3.5,-.015,_),ps.add(S)}let M=String(8-p);for(let _ of[-4.45,4.45]){let S=new oe(c,d(M));S.rotation.x=-Math.PI/2,_>0&&(S.rotation.z=Math.PI),S.position.set(_,-.015,p-3.5),ps.add(S)}}let f=new oe(new As(30,64),new rl({opacity:.45}));f.rotation.x=-Math.PI/2,f.position.y=-.53,f.receiveShadow=!0,Ln.add(f);let h=document.createElement("canvas");h.width=h.height=256;let u=h.getContext("2d"),m=u.createRadialGradient(128,128,10,128,128,128);m.addColorStop(0,"rgba(168,85,247,0.55)"),m.addColorStop(.5,"rgba(45,226,230,0.18)"),m.addColorStop(1,"rgba(0,0,0,0)"),u.fillStyle=m,u.fillRect(0,0,256,256);let y=new dn(h);y.colorSpace=Vt;let g=new oe(new Zn(22,22),new Wt({map:y,transparent:!0,opacity:.7,depthWrite:!1,blending:Bn}));g.rotation.x=-Math.PI/2,g.position.y=-.52,Ln.add(g)}function r1(){cr=new gt;let n=new Tt(.07,16,12),e=[16727464,16765286,3007206];for(let t=0;t<3;t++){let i=new oe(n,new ke({color:e[t],emissive:e[t],emissiveIntensity:3}));cr.add(i)}cr.visible=!1,Ln.add(cr)}function Gl(){let n=Je.stage,e=Math.max(1,n.clientWidth),t=Math.max(1,n.clientHeight);At.setPixelRatio(Math.min(window.devicePixelRatio||1,$l==="full"?2:1.25)),At.setSize(e,t,!1),Ls.setSize(e,t),$l!=="full"&&ei.setSize(Math.round(e*.5),Math.round(t*.5)),bn.aspect=e/t,bn.fov=e/t<.85?52:38,bn.updateProjectionMatrix()}function o1(){return{captures:0,moves:0,survived:0,checks:0,attacked:0,capturedTypes:[]}}function Yl(){ki=new Map,la=[],fg=1;for(let n=0;n<8;n++)for(let e=0;e<8;e++){let t=De.board[n][e];if(t){let i=fg++;ki.set(i,{id:i,type:t.type,color:t.color,r:n,c:e,stats:o1()})}}}function a1(){return[...ki.values()].map(n=>({...n,stats:{...n.stats,capturedTypes:n.stats.capturedTypes.slice()}}))}function Kf(n,e){for(let t of ki.values())if(t.r===n&&t.c===e)return t;return null}function Pg(){return ki}function l1(n,e){la.push(a1());let t=Kf(n.fr,n.fc),i=e?Kf(e.r,e.c):null;if(i&&i!==t&&ki.delete(i.id),t&&(t.r=n.tr,t.c=n.tc,t.stats.moves++,i&&(t.stats.captures++,t.stats.capturedTypes.push(i.type)),n.promotion&&(t.type=n.promotion,t.promoted=!0)),n.castle){let s=n.fr,[r,o]=n.castle==="K"?[7,5]:[0,3],a=Kf(s,r);a&&(a.r=s,a.c=o,a.stats.moves++)}for(let s of ki.values())t&&s.color===t.color&&s.stats.survived++;return{mover:t,victim:i}}function c1(n,e){n&&Zt.isInCheck(De.board,De.turn)&&n.stats.checks++;let t={...De,turn:e,ep:null,history:[]},i=new Set;for(let r of Zt.legalMoves(t))r.capture&&i.add(r.tr+","+r.tc);let s=[];for(let r of ki.values()){if(r.color===e)continue;let o=r.r+","+r.c,a=!!r.threatened;r.threatened=i.has(o),r.threatened&&!a&&(r.stats.attacked++,s.push(r))}return s}function Ns(){let n=new Set(ki.keys());for(let[e,t]of xn)n.has(e)||(Ki.remove(t),ca(t),xn.delete(e));hr.clear();for(let e of ki.values()){let t=xn.get(e.id);t&&(t.userData.type!==e.type||t.userData.skin!==yg())&&(Ki.remove(t),ca(t),t=null,xn.delete(e.id)),t||(t=na(e.type,e.color),t.userData.skin=yg(),t.userData.phase=Math.random()*Math.PI*2,t.userData.id=e.id,t.rotation.y=Ru(e.color),t.traverse(s=>{s.userData.pieceRoot=t}),Ki.add(t),xn.set(e.id,t));let i=Mn(e.r,e.c);t.userData.animating||t.position.set(i.x,qt,i.z),t.userData.square={r:e.r,c:e.c},t.userData.entry=e,t.userData.piece={type:e.type,color:e.color},hr.set(e.r+","+e.c,t)}u1(),ur=!0,Qe.afterSync.forEach(e=>e())}function ca(n){n.userData.bodyMat&&n.userData.bodyMat.dispose()}var Ig=()=>"neon";function kg(n){Ig=n}function yg(){return Ig()}function Lg(){for(let[n,e]of xn)Ki.remove(e),ca(e);xn.clear(),Ns(),ni()}function h1(n){!n||!n.emissive||(n.userData.baseEmissive?(n.emissive.copy(n.userData.baseEmissive),n.emissiveIntensity=n.userData.baseEI):n.emissive.setRGB(0,0,0))}function u1(){if(ms=null,Zt.isInCheck(De.board,De.turn))for(let n of hr.values())n.userData.piece.type==="k"&&n.userData.piece.color===De.turn&&(ms=n);for(let n of xn.values())n!==ms&&(h1(n.userData.bodyMat),!n.userData.animating&&n.userData.inner&&n.userData.inner.scale.set(1,1,1))}var d1=new yt(.21,.21,.04,40),_g=new fn(.4,.035,12,64),f1=new fn(.44,.03,12,64),p1=new Zn(.97,.97),m1=new ke({color:3007206,emissive:3007206,emissiveIntensity:2.5,transparent:!0,opacity:.9}),g1=new ke({color:16727464,emissive:16727464,emissiveIntensity:2.8}),y1=new ke({color:11992891,emissive:11992891,emissiveIntensity:2.6}),Zf,vg,_1=new ke({color:16722506,emissive:16722506,emissiveIntensity:3}),Ou=null;function ni(){for(Zf||(Zf=new Wt({map:gg("168,85,247"),transparent:!0,opacity:.55,depthWrite:!1}),vg=new Wt({map:gg("255,209,102"),transparent:!0,opacity:.75,depthWrite:!1}));Ai.children.length;)Ai.remove(Ai.children[0]);let n=De.lastMove;if(n)for(let[e,t,i]of[[n.fr,n.fc,Zf],[n.tr,n.tc,vg]]){let s=new oe(p1,i),r=Mn(e,t);s.rotation.x=-Math.PI/2,s.position.set(r.x,qt+.004,r.z),Ai.add(s)}if(It){let e=Mn(It.r,It.c),t=new oe(f1,y1);t.rotation.x=-Math.PI/2,t.position.set(e.x,qt+.02,e.z),t.userData.spin=!0,Ai.add(t)}if(xt.hints)for(let e of Ri){let t=Mn(e.tr,e.tc),i=e.capture||e.enPassant,s=new oe(i?_g:d1,i?g1:m1);i&&(s.rotation.x=-Math.PI/2),s.position.set(t.x,qt+.03,t.z),s.userData.square={r:e.tr,c:e.tc},s.userData.pulse=!0,Ai.add(s)}if(Ou=null,ms){let e=new oe(_g,_1);e.rotation.x=-Math.PI/2;let t=ms.position;e.position.set(t.x,qt+.03,t.z),Ai.add(e),Ou=e}}var Hl=null;function Dg(n){Hl=n}function v1(){let n=At.domElement,e=null;n.addEventListener("pointerdown",t=>{e={x:t.clientX,y:t.clientY},ku()}),n.addEventListener("pointerup",t=>{if(!e)return;let i=Math.hypot(t.clientX-e.x,t.clientY-e.y);e=null,!(i>6)&&b1(t)}),n.addEventListener("pointermove",t=>{let i=Ng(t);n.style.cursor=i&&(i.own||i.target)?"pointer":"grab",Hl&&Hl(i,t)}),n.addEventListener("pointerleave",()=>{Hl&&Hl(null)})}function Ng(n){let e=At.domElement.getBoundingClientRect();Yf.x=(n.clientX-e.left)/e.width*2-1,Yf.y=-((n.clientY-e.top)/e.height)*2+1,pg.setFromCamera(Yf,bn);let t=pg.intersectObjects([Ki,Ai,ps],!0),i=null;for(let s of t){let r=null,o=s.object.userData.pieceRoot;if(o?r=o.userData.square:s.object.userData.square&&(r=s.object.userData.square),!r)continue;let a=De.board[r.r][r.c],l={...r,own:a&&a.color===De.turn,target:Ri.some(c=>c.tr===r.r&&c.tc===r.c),group:o||hr.get(r.r+","+r.c)||null};if(l.target)return l;i||(i=l)}return i}function x1(){return!(Ii||Kn||$r||Zl()||$t==="bot"&&De.turn==="b")}function b1(n){if(!x1()||Xn||gs.active)return;let e=Ng(n);if(!e){It&&st.deselect(),It=null,Ri=[],ni();return}let{r:t,c:i}=e;if(It&&Ri.some(s=>s.tr===t&&s.tc===i)){Ug(It.r,It.c,t,i);return}e.own?It&&It.r===t&&It.c===i?(It=null,Ri=[],st.deselect()):(It={r:t,c:i},Ri=Zt.movesFrom(De,t,i),st.select()):(It&&st.deselect(),It=null,Ri=[]),ni()}function Ug(n,e,t,i,s){let r=Zt.movesFrom(De,n,e).filter(a=>a.tr===t&&a.tc===i);if(!r.length)return;if(r.some(a=>a.promotion)&&!s){$r={fr:n,fc:e,tr:t,tc:i,color:De.board[n][e].color},I1($r.color);return}let o=s?r.find(a=>a.promotion===s)||r[0]:r.find(a=>!a.promotion)||r[0];cp(o)}var tp={inOutCubic:n=>n<.5?4*n*n*n:1-Math.pow(-2*n+2,3)/2,outBack:n=>1+2.70158*Math.pow(n-1,3)+1.70158*Math.pow(n-1,2),outElastic:n=>n===0||n===1?n:Math.pow(2,-10*n)*Math.sin((n*10-.75)*(2*Math.PI)/3)+1};function dr(n){return ti.push(n),n}function ha(n,e,t,{dur:i=520,height:s=.5,delay:r=0,onLand:o=null}={}){return new Promise(a=>{if(!n)return a();n.userData.animating=!0;let l=n.userData.inner||n,c=n.position.clone();c.y=qt;let d=Mn(e,t);d.y=qt;let f=d.clone().sub(c);f.y=0,f.length()>0&&f.normalize();let u=.18,m=.8,y=!1;ti.push({t0:ui()+r,dur:i,step:g=>{let p=n.rotation.y,v=f.x*Math.cos(-p)-f.z*Math.sin(-p),M=f.x*Math.sin(-p)+f.z*Math.cos(-p);if(g<u){let _=Math.sin(g/u*Math.PI/2);l.scale.set(1+.1*_,1-.16*_,1+.1*_),l.rotation.set(-M*.12*_,0,v*.12*_),n.position.copy(c)}else if(g<m){let _=(g-u)/(m-u),S=tp.inOutCubic(_);n.position.lerpVectors(c,d,S),n.position.y=qt+Math.sin(Math.PI*_)*s;let E=Math.sin(Math.PI*_);l.scale.set(1-.05*E,1+.1*E,1-.05*E),l.rotation.set(M*.18*E,0,-v*.18*E)}else{y||(y=!0,o&&o());let _=(g-m)/(1-m);n.position.copy(d);let S=1-.2*(1-tp.outElastic(_));l.scale.set(1+(1-S)*.6,S,1+(1-S)*.6),l.rotation.set(0,0,0)}},done:()=>{l.scale.set(1,1,1),l.rotation.set(0,0,0),n.position.copy(d),n.userData.animating=!1,ur=!0,a()}})})}function M1(n,e,t){if(!n)return;n.userData.scared=!0,st.scared();let i=n.userData.inner||n,s=n.position.clone();ti.push({t0:ui(),dur:t,step:r=>{let o=Math.min(1,r*3);if((n.userData.eyes||[]).forEach(a=>a.scale.setScalar(1+.6*o)),n.position.x=s.x+(Math.random()-.5)*.03*o,n.position.z=s.z+(Math.random()-.5)*.03*o,n.position.y=qt+Math.abs(Math.sin(r*30))*.03*o,e){let a=n.position.clone().sub(e.position);a.y=0,a.normalize();let l=n.rotation.y,c=a.x*Math.cos(-l)-a.z*Math.sin(-l),d=a.x*Math.sin(-l)+a.z*Math.cos(-l);i.rotation.set(d*.25*o,0,-c*.25*o)}},done:()=>{}})}var xg=["\u{1F4A5}","\u2728","\u{1F916}","\u26A1","\u{1F300}","\u{1F635}","\u{1F525}","\u2B50","\u{1F9E0}","\u{1F4F5}","\u{1F389}","\u{1F4AB}"],bg=["RATE LIMITED","HALLUCINATED","429","OFFLINE","TOKEN-LIMIT","GG","BUFFERING\u2026","Ctrl+Z?","404","TIMEOUT"],Mg={};function S1(n){return Mg[n]||(Mg[n]=op(n,{size:96}))}function Vl(n,e){let t=n.getWorldPosition(new I);n.parent&&n.parent.remove(n);let i=Bt[e.color].glow;Qe.explode.forEach(y=>y(t,e));let s=Fu().particles,r=new Ft,o=new Float32Array(s*3),a=[];for(let y=0;y<s;y++){o[y*3]=t.x,o[y*3+1]=t.y+.5,o[y*3+2]=t.z;let g=Math.random()*Math.PI*2,p=1.5+Math.random()*3;a.push(new I(Math.cos(g)*p,2+Math.random()*4,Math.sin(g)*p))}r.setAttribute("position",new gn(o,3));let l=new Rr(r,new qs({color:i,size:.09,transparent:!0,depthWrite:!1,blending:Bn}));Yn.add(l);let c=ui(),d=c;ti.push({t0:c,dur:1300,step:y=>{let g=ui(),p=Math.min(.05,(g-d)/1e3);d=g;for(let v=0;v<s;v++)a[v].y-=9*p,o[v*3]+=a[v].x*p,o[v*3+1]=Math.max(qt,o[v*3+1]+a[v].y*p),o[v*3+2]+=a[v].z*p;r.attributes.position.needsUpdate=!0,l.material.opacity=1-y},done:()=>{Yn.remove(l),r.dispose(),l.material.dispose()}});let f=Fu().emoji;for(let y=0;y<f;y++){let g=new cs(new Wi({map:S1(xg[Math.random()*xg.length|0]),transparent:!0,depthWrite:!1}));g.scale.set(.5,.5,.5);let p=y/f*Math.PI*2,v=new I(Math.cos(p)*1.6,2.4+Math.random()*1.4,Math.sin(p)*1.6);Yn.add(g),ti.push({t0:c,dur:1100,step:M=>{g.position.set(t.x+v.x*M,t.y+.6+v.y*M-2.4*M*M,t.z+v.z*M),g.material.opacity=1-M*M,g.material.rotation=M*3*(y%2?1:-1)},done:()=>{Yn.remove(g),g.material.dispose()}})}let h=bg[Math.random()*bg.length|0],u=new cs(new Wi({map:op(h,{size:54,w:512,h:128,color:"#ffffff",glow:e.color==="w"?"#2de2e6":"#ff3da8"}),transparent:!0,depthWrite:!1,depthTest:!1}));u.scale.set(2.4,.6,1),u.renderOrder=10,Yn.add(u),ti.push({t0:c,dur:1600,step:y=>{let g=y<.15?tp.outBack(y/.15):1;u.position.set(t.x,t.y+1.3+y*1.1,t.z),u.material.opacity=y<.7?1:1-(y-.7)/.3,u.scale.set(2.4*g,.6*g,1)},done:()=>{Yn.remove(u),u.material.map.dispose(),u.material.dispose()}});let m=new hs(i,60,6,2);m.position.copy(t).add(new I(0,.8,0)),Yn.add(m),ti.push({t0:c,dur:500,step:y=>{m.intensity=60*(1-y)},done:()=>Yn.remove(m)});for(let y of[...xn.values(),...di]){if(y===n||!y.parent)continue;if(y.position.distanceTo(t)<1.6){let p=y.userData.inner;ti.push({t0:c,dur:400,step:v=>{p.position.y=Math.sin(v*Math.PI)*.06},done:()=>{p.position.y=0}})}}Gu(.12),st.boom()}var $l="full",Og=1,Fg=1.15,Sg=8,w1=.5,Wr={brightness:.85,glow:.6};function Kl({brightness:n,glow:e}={}){n!==void 0&&(Wr.brightness=Math.min(1.2,Math.max(.6,+n||.85))),e!==void 0&&(Wr.glow=Math.min(1,Math.max(0,+e))),ap()}function E1(){return{...Wr,exposure:At?At.toneMappingExposure:null,bloom:ei?{enabled:ei.enabled,strength:ei.strength,radius:ei.radius,threshold:ei.threshold}:null}}function ap(){if(!At||(At.toneMappingExposure=Og*Wr.brightness,!ei))return;let n=$l!=="full",e=Wr.glow*(n?.45:1);ei.enabled=e>.01,ei.strength=.85*e,ei.radius=.12+.22*Wr.glow,ei.threshold=Fg}function lp(n){if($l=n,!At)return;ap();let e=n==="full"?(window.devicePixelRatio||1)>=2?2048:1536:1024;Qn.shadow.mapSize.x!==e&&(Qn.shadow.mapSize.set(e,e),Qn.shadow.map&&(Qn.shadow.map.dispose(),Qn.shadow.map=null)),Gl(),ur=!0}function Fu(){return $l==="full"?{particles:90,emoji:9}:{particles:36,emoji:4}}var aa=0;function Gu(n){aa=Math.max(aa,n)}function cp(n){Ii=!0;let e=De.board[n.fr][n.fc],t=n.enPassant?{r:n.fr,c:n.tc}:{r:n.tr,c:n.tc},i=De.board[t.r][t.c],s=!!(i&&i.color!==e.color),r=Zt.moveToSan(De,n),o=hr.get(n.fr+","+n.fc),a=s?hr.get(t.r+","+t.c):null,l={move:n,mover:e,capPiece:s?i:null,moverGroup:o,capGroup:a,by:De.turn,prevState:De};It=null,Ri=[],ni();let c=Math.hypot(n.tr-n.fr,n.tc-n.fc),d=e.type==="n"?640:520+Math.min(180,c*25),f=[];a&&M1(a,o,d*.8),st.hop(c);let h={dur:d,explodeCap:()=>{a&&a.parent&&Vl(a,i)},land:()=>st.land(s)},u=Qe.beforeMove.map(m=>m(l,h)).find(Boolean);if(u)f.push(u);else if(f.push(ha(o,n.tr,n.tc,{dur:d,height:e.type==="n"?1.1:.42+.07*c,onLand:()=>{st.land(s),a&&Vl(a,i)}})),n.castle){let m=n.fr,[y,g]=n.castle==="K"?[7,5]:[0,3];f.push(ha(hr.get(m+","+y),m,g,{dur:560,height:.9,delay:140}))}Promise.all(f).then(()=>{a&&a.parent&&Vl(a,i);let m=Zt.makeMove(De,n);if(!m){Ii=!1,Ns(),ni();return}De=m,Ds.push(r),s&&Ji[e.color].push(i.type);let{mover:y,victim:g}=l1(n,s?t:null);l.moverEntry=y,l.victimEntry=g,l.newlyThreatened=c1(y,e.color),Ns(),ni(),Ii=!1,R1(l)})}var Xn=null;function Bg(){return bn?Math.atan2(bn.position.x-Kt.target.x,bn.position.z-Kt.target.z):0}function qr(n){let e=bn.position.clone().sub(Kt.target),t=new Cs().setFromVector3(e),s=(n==="w"?0:Math.PI)-t.theta;s=Math.atan2(Math.sin(s),Math.cos(s)),!(Math.abs(s)<.01)&&(Xn={from:t.theta,to:t.theta+s,t0:performance.now(),dur:1100,tz0:Kt.target.z,tz1:n==="w"?Math.abs(Kt.target.z):-Math.abs(Kt.target.z)})}function Hg(){Xn=null;let n=$t==="pvp"&&xt.autoRotate&&De.turn==="b";bn.position.set(0,8.8,n?-11:11),Kt.target.set(0,1,n?-.25:.25),Kt.update()}function hp(){return Xn}var Jf=new I,oa=new I;function wg(){if(!Qf)return;Nu.update();let n=Nu.getElapsed(),e=Math.min(.05,Nu.getDelta()),t=performance.now();ep+=Math.min(100,t-mg)*Cg,mg=t;let i=ep;for(let a=ti.length-1;a>=0;a--){let l=ti[a];if(i<l.t0)continue;let c=Math.min(1,(i-l.t0)/l.dur);l.step(c),c>=1&&(ti.splice(a,1),l.done&&l.done())}if(Xn){let a=Math.min(1,(t-Xn.t0)/Xn.dur),l=a<.5?2*a*a:1-Math.pow(-2*a+2,2)/2,c=bn.position.clone().sub(Kt.target),d=new Cs().setFromVector3(c);d.theta=Xn.from+(Xn.to-Xn.from)*l,Xn.tz1!==void 0&&(Kt.target.z=Xn.tz0+(Xn.tz1-Xn.tz0)*l),bn.position.copy(Kt.target).add(new I().setFromSpherical(d)),a>=1&&(Xn=null)}gs.active||Kt.update();let s=null;It?s=Mn(It.r,It.c):De.lastMove&&(s=Mn(De.lastMove.tr,De.lastMove.tc));let r=Bg();Uu&&(Uu.front.position.set(Math.sin(r)*9,7,Math.cos(r)*9),Uu.back.position.set(-Math.sin(r)*9,5,-Math.cos(r)*9)),Ln.environmentRotation&&(Ln.environmentRotation.y=r);for(let a of[...xn.values(),...di]){if(!a.parent)continue;let l=a.userData;l.square||(l.square={r:-1,c:-1});let c=Ru(l.color)-a.rotation.y;c=Math.atan2(Math.sin(c),Math.cos(c)),a.rotation.y+=c*.12;let d=It&&l.square.r===It.r&&l.square.c===It.c;if(!l.animating&&!l.scared){let u=d?qt+.14+Math.sin(n*4)*.05:qt;a.position.y+=(u-a.position.y)*.25;let m=l.inner;m&&!d&&(m.position.y=Math.sin(n*1.7+l.phase)*.012,m.rotation.z=Math.sin(n*.9+l.phase)*.012)}let h=(n*.45+l.phase)%4.2<.12?.12:1;if(l.eyes&&!l.scared){let u=0;if(s&&(oa.copy(s).sub(a.position),oa.y=0,oa.length()>.3)){oa.normalize();let y=a.rotation.y;u=oa.x*Math.cos(-y)-oa.z*Math.sin(-y)}for(let m of l.eyes)m.scale.set(1,h,1),l.type!=="n"&&(m.position.x+=(u*.022-m.position.x)*.15)}l.antennas&&l.antennas.forEach((u,m)=>{u.rotation.x=Math.sin(n*3+l.phase+m)*.08})}let o=Jo.b;if(o&&(o.emissiveIntensity=Kn?o.userData.base*(.55+.75*(.5+.5*Math.sin(n*9))):o.userData.base),cr&&(cr.visible=Kn,Kn)){let a=null;for(let l of xn.values())l.userData.piece.type==="k"&&l.userData.piece.color==="b"&&(a=l);a&&cr.position.set(a.position.x,a.position.y+1.95,a.position.z),cr.children.forEach((l,c)=>{let d=n*4+c*Math.PI*2/3;l.position.set(Math.cos(d)*.3,Math.sin(n*6+c)*.06,Math.sin(d)*.3)})}if(ms){let a=(Math.sin(n*7)+1)/2,l=ms.userData.bodyMat;l.userData.baseEmissive?l.emissiveIntensity=l.userData.baseEI*(1.2+3*a):l.emissive&&l.emissive.setRGB(.9*a,.05*a,.12*a),ms.userData.inner.scale.setScalar(1+a*.05),Ou&&Ou.scale.setScalar(1+a*.15)}Ai.children.forEach(a=>{a.userData.pulse&&a.scale.setScalar(1+Math.sin(n*5)*.1),a.userData.spin&&(a.rotation.z=n*1.5)}),Qe.frame.forEach(a=>a(n,e)),(ur||ti.length||It||ms)&&(At.shadowMap.needsUpdate=!0,ur=!1),aa>.001?(Jf.set((Math.random()-.5)*aa,(Math.random()-.5)*aa,0),bn.position.add(Jf),Ls.render(),bn.position.sub(Jf),aa*=.88):Ls.render()}var gs={active:!1};function Zl(){let n=Zt.gameStatus(De);return n.type==="checkmate"||n.type==="stalemate"||n.type==="draw"}function ql(n,e=De){let t=0;for(let i=0;i<8;i++)for(let s=0;s<8;s++){let r=e.board[i][s];r&&r.color===n&&(t+=Pi[r.type])}return t}function T1(n,e,t){return Zt.legalMoves(n).some(i=>i.tr===e&&i.tc===t)}function A1(n,e,t,i){let s={...n,turn:i,ep:null,history:[]},r=0;for(let o of Zt.legalMoves(s)){if(o.fr!==e||o.fc!==t||!o.capture)continue;let a=n.board[o.tr][o.tc];a&&(a.type==="k"||Pi[a.type]>=3)&&r++}return r}function R1(n){let{move:e,mover:t,capPiece:i,by:s}=n,r=Zt.gameStatus(De);Zi();let o=Zt.algebraic(e.tr,e.tc),a=$t==="bot"&&s==="b",l=$t==="bot"&&s==="w",c={status:r,botMoved:a,humanVsBot:l,sq:o};if(r.type==="check"&&st.check(),Qe.afterMove.forEach(g=>g(n,c)),r.type==="checkmate"){if($t==="bot"){let g=r.winner==="b";g?st.lose():st.win(),Ht($n(g?"botWins":"botLoses"),g?"happy":"sad")}else st.win(),Ht($n("pvpMate",{side:r.winner==="w"?"White":"Black"}),"happy");setTimeout(ip,1100);return}if(r.type==="stalemate"||r.type==="draw"){Ht($n("draw"),"think"),setTimeout(ip,1100);return}let d=Yi[e.promotion||t.type],f=i?Yi[i.type]:"",h=i?T1(De,e.tr,e.tc):!1,u=t.type==="n"||t.type==="q"||t.type==="b"||t.type==="r"||t.type==="p"?A1(De,e.tr,e.tc,t.color):0,m=!1,y=(g,p,v)=>{m||(Ht($n(g,v),p),m=!0)};if($t==="bot"){if(e.promotion&&y(a?"botPromotes":"playerPromotes",a?"happy":"think",{piece:Yi[e.promotion]}),e.castle&&(st.castle(),y(a?"botCastles":"playerCastles",a?"happy":"think")),e.enPassant&&y("enPassant","happy"),i&&Pi[i.type]>=5&&!h&&y(a?"playerBlunder":"botBlunder",a?"happy":"shock",{piece:f}),i&&Pi[t.type]>=Pi[i.type]+2&&h&&y(a?"botSacrifice":"playerSacrifice","think"),u>=2&&y(a?"botFork":"playerFork",a?"happy":"shock",{piece:d}),r.type==="check"&&y(a?"botGivesCheck":"botInCheck",a?"happy":"sad"),i&&y(a?"botCaptures":"playerCaptures",a?"happy":"sad",{piece:f}),a&&!m){let g=ql("b")-ql("w");g>=4&&Math.random()<.5?y("botWinning","happy"):g<=-4&&Math.random()<.5?y("botLosing","sad"):y("botMoves","idle",{piece:d,sq:o})}l&&Gg()}else e.promotion&&y("playerPromotes","happy",{piece:Yi[e.promotion]}),e.castle&&(st.castle(),y("playerCastles","think")),e.enPassant&&y("enPassant","happy"),u>=2&&y("playerFork","happy"),r.type==="check"&&y("pvpCheck","happy"),i&&y("pvpCapture","happy",{piece:f}),!m&&Math.random()<.25&&y("pvpIdle","idle"),xt.autoRotate&&setTimeout(()=>qr(De.turn),350)}var Tn=null,zg=0,zl=!1;function C1(){try{if(!window.GBC_WORKER_SRC||!window.Worker)return;let n=URL.createObjectURL(new Blob([window.GBC_WORKER_SRC],{type:"text/javascript"}));Tn=new Worker(n),Tn.onerror=()=>{Tn=null,zl=!1};let e=++zg,t=setTimeout(()=>{zl||(Tn=null)},5e3),i=s=>{s.data&&s.data.id===e&&(zl=!!s.data.move,clearTimeout(t),Tn&&Tn.removeEventListener("message",i),zl||(Tn=null))};Tn.addEventListener("message",i),Tn.postMessage({id:e,state:{...Zt.createGame(),history:[]},level:1})}catch{Tn=null}}function P1(n,e){return new Promise(t=>{let i={...n,history:[]},s=()=>setTimeout(()=>t(e1.chooseMoveLevel(i,e)),30);if(!Tn)return s();let r=++zg,o=!1,a=setTimeout(()=>{o||(o=!0,Tn=null,s())},2e4),l=c=>{!c.data||c.data.id!==r||(Tn&&Tn.removeEventListener("message",l),!o&&(o=!0,clearTimeout(a),c.data.move?t(c.data.move):s()))};Tn.addEventListener("message",l);try{Tn.postMessage({id:r,state:i,level:e})}catch{o=!0,clearTimeout(a),Tn=null,s()}})}function Gg(){if($t!=="bot"||De.turn!=="b"||Zl())return;Kn=!0,Zi(),np("think"),Math.random()<.4&&Ht($n("thinking"),"think",!0);let n=De,e=performance.now();P1(n,xt.level).then(t=>{let i=Math.max(0,700-(performance.now()-e));setTimeout(()=>{if(Kn=!1,De!==n||$t!=="bot"){Zi();return}if(!t){Zi();return}let s=Zt.legalMoves(De).find(r=>r.fr===t.fr&&r.fc===t.fc&&r.tr===t.tr&&r.tc===t.tc&&(r.promotion||null)===(t.promotion||null));cp(s||t)},i)})}function Zi(){let n=Zt.gameStatus(De),e=De.turn==="w"?"White":$t==="bot"?"Grok Bot (Black)":"Black",t=`${e} to move`,i=De.turn==="w"?"white":"black";n.type==="check"&&(t=`Check! ${e} to move`,i+=" check"),n.type==="checkmate"&&(t=`Checkmate \u2013 ${n.winner==="w"?"White":$t==="bot"?"Grok Bot":"Black"} wins`,i="check"),n.type==="stalemate"&&(t="Stalemate \u2013 draw",i=""),n.type==="draw"&&(t="Draw (50-move rule)",i=""),Kn&&(t="Grok Bot is thinking\u2026"),Je.turn.textContent=t,Je.turn.className="turn "+i,Je.dot.className="turn-dot "+(De.turn==="w"?"w":"b")+(Kn?" thinking":""),Je.capByW.innerHTML=Ji.w.map(o=>`<span>${jf.b[o]}</span>`).join(""),Je.capByB.innerHTML=Ji.b.map(o=>`<span>${jf.w[o]}</span>`).join("");let s=ql("w")-ql("b");Je.adv.textContent=s===0?"Material: equal":`Material: ${s>0?"White":$t==="bot"?"Grok Bot":"Black"} +${Math.abs(s)}`;let r="";for(let o=0;o<Ds.length;o+=2)r+=`<div class="pair"><span class="num">${o/2+1}.</span><span>${Ds[o]}</span><span>${Ds[o+1]||""}</span></div>`;Je.moves.innerHTML=r||'<span class="muted">No moves yet</span>',Je.moves.scrollTop=Je.moves.scrollHeight,Je.undo.disabled=!De.history.length||Ii||Kn,Je.levelRow.style.display=$t==="bot"?"":"none",Je.rotateRow.style.display=$t==="pvp"?"":"none"}var Eg=null;function Ht(n,e="idle",t=!1){n&&(Je.bubble.textContent=n,Je.bubble.classList.remove("pop"),Je.bubble.offsetWidth,Je.bubble.classList.add("pop"),t||(Hu=n,zu=e==="shock"?"sad":e),np(e),st.chirp(),clearTimeout(Eg),Eg=setTimeout(()=>np(Kn?"think":"idle"),2800),Qe.speak&&Qe.speak(e,n))}function np(n){Je.avatar.dataset.mood=n}function Vg(){let n=Zt.gameStatus(De);return n.type==="checkmate"?$t==="bot"?n.winner==="w"?"Victory over Grok Bot! \u{1F3C6}":"Grok Bot wins":(n.winner==="w"?"White":"Black")+" wins \u{1F3C6}":n.type==="stalemate"?"Stalemate \u2013 draw":n.type==="draw"?"Draw":$t==="bot"?"Human vs Grok Bot":"Player vs Player"}function up(){let n=Ds.length,e=Ji.w.length+Ji.b.length,t=["","Easy","Medium","Hard"][xt.level],i=Math.ceil(n/2);return`${i} ${i===1?"move":"moves"} \xB7 ${e} ${e===1?"capture":"captures"}${$t==="bot"?" \xB7 Level "+t:""}`}function ip(){if(Wl||!Zl())return;Wl=!0;let n=Zt.gameStatus(De),e="Draw";n.type==="checkmate"?e=$t==="bot"?n.winner==="w"?"You won!":"Grok Bot wins!":"Checkmate!":n.type==="stalemate"&&(e="Stalemate!"),Je.endTitle.textContent=e,Je.endResult.textContent=up(),Je.endQuote.textContent="\u201C"+(Hu||"GG!")+"\u201D",Je.endAvatar.dataset.mood=zu,Je.endOverlay.classList.add("open"),Qe.end&&Qe.end(n)}function I1(n){Je.promoChoices.innerHTML=["q","r","b","n"].map(e=>`<button type="button" data-p="${e}"><span class="g">${jf[n][e]}</span><span class="l">${dg[e][0].toUpperCase()+dg[e].slice(1)}</span></button>`).join(""),Je.promoOverlay.classList.add("open"),Je.promoChoices.querySelectorAll("button").forEach(e=>e.addEventListener("click",()=>{let t=$r;$r=null,Je.promoOverlay.classList.remove("open"),t&&Ug(t.fr,t.fc,t.tr,t.tc,e.dataset.p)}))}function dp(){for(ti.length=0;Yn.children.length;)Yn.remove(Yn.children[0])}function Vr(){gs.active&&Qe.stopCinematic&&Qe.stopCinematic(),De=Zt.createGame(),It=null,Ri=[],Ds=[],Ji={w:[],b:[]},$r=null,Ii=!1,Kn=!1,Wl=!1,dp();for(let n of xn.values())Ki.remove(n),ca(n);xn.clear(),Yl(),Je.endOverlay.classList.remove("open"),Je.promoOverlay.classList.remove("open"),Ns(),ni(),Zi(),qr("w"),Ht($n($t==="bot"?"start":"pvpStart"),"happy"),Qe.newGame&&Qe.newGame()}var Bu=null;function fp(n,e=!0){Bu&&Bu(n,e)}function Jl(n,{sans:e=[],quiet:t=!1}={}){gs.active&&Qe.stopCinematic&&Qe.stopCinematic(),De={...Zt.createGame(),...n,history:n.history||[],moveNumber:(n.history||[]).length},It=null,Ri=[],Ds=e.slice(),Ji={w:[],b:[]};for(let i of[...De.history.slice(1).map(s=>s.lastMove),De.history.length?De.lastMove:null])i&&i.captured&&Ji[i.color].push(i.captured.type);$r=null,Ii=!1,Kn=!1,Wl=!1,dp();for(let i of xn.values())Ki.remove(i),ca(i);xn.clear(),Yl(),Je.endOverlay.classList.remove("open"),Je.promoOverlay.classList.remove("open"),Ns(),ni(),Zi(),$t==="pvp"&&xt.autoRotate?qr(De.turn):qr("w"),Qe.newGame&&Qe.newGame(),t||Ht($n(["Position loaded. {side} to move.","All set up! {side} to move.","There we go, the position is ready. {side} to move."],{side:De.turn==="w"?"White":"Black"}),"think"),$t==="bot"&&De.turn==="b"&&!Zl()&&Gg()}function k1(n,e="w",t=null){Vr(),De={...Zt.createGame(),board:Zt.cloneBoard(n),turn:e,castling:t||{w:{K:!1,Q:!1},b:{K:!1,Q:!1}}};for(let i of xn.values())Ki.remove(i),ca(i);xn.clear(),Yl(),Ns(),ni(),Zi()}function sp(){if(gs.active||Ii||Kn||!De.history.length)return;let n=$t==="bot"&&De.turn==="w"&&De.history.length>=2?2:1,e=!1;for(let i=0;i<n;i++){De=Zt.undo(De),Ds.pop();let s=la.pop();s?ki=new Map(s.map(r=>[r.id,{...r,stats:{...r.stats,capturedTypes:r.stats.capturedTypes.slice()}}])):e=!0}if(e){let i=la;Yl(),la=i}Ji={w:[],b:[]};let t=[...De.history.slice(1).map(i=>i.lastMove),De.lastMove];for(let i of t)i&&i.captured&&Ji[i.color].push(i.captured.type);It=null,Ri=[],Wl=!1,Je.endOverlay.classList.remove("open"),dp(),Ns(),ni(),Zi(),$t==="pvp"&&xt.autoRotate&&qr(De.turn),Ht($n("undo"),"think")}function rp(){Ls.render(),ug(At.domElement,{result:Vg(),sub:up(),quote:Hu||"I\u2019m ready for my fan poster.",mood:zu}).toBlob(e=>{if(!e)return;let t=document.createElement("a");t.href=URL.createObjectURL(e);let i=new Date,s=r=>String(r).padStart(2,"0");t.download=`grok-bot-chess-${i.getFullYear()}${s(i.getMonth()+1)}${s(i.getDate())}-${s(i.getHours())}${s(i.getMinutes())}${s(i.getSeconds())}.png`,document.body.appendChild(t),t.click(),t.remove(),setTimeout(()=>URL.revokeObjectURL(t.href),4e3)},"image/png"),st.shutter(),L1(),Je.endOverlay.classList.contains("open")||Ht($n("screenshot"),"happy",!0)}function L1(){Je.stage.classList.remove("flash"),Je.stage.offsetWidth,Je.stage.classList.add("flash")}function Tg(n){xt.hints=n,Ci(),Je.chkHints.checked=n,ni()}function D1(){["stage","turn","dot","capByW","capByB","adv","moves","undo","levelRow","rotateRow","bubble","avatar","endOverlay","endTitle","endResult","endQuote","endAvatar","promoOverlay","promoChoices","chkHints","tooltip"].forEach(o=>{Je[o]=qn(o)}),qn("btnNew").addEventListener("click",Vr),qn("btnEndNew").addEventListener("click",Vr),qn("btnEndShot").addEventListener("click",rp),qn("btnEndClose").addEventListener("click",()=>Je.endOverlay.classList.remove("open")),Je.undo.addEventListener("click",sp),qn("btnShot").addEventListener("click",rp),qn("btnCam").addEventListener("click",Hg);let n=qn("btnMute"),e=qn("btnMusic"),t=()=>{n.textContent=xt.sfx?"\u{1F50A} Sound on":"\u{1F507} Sound off",n.classList.toggle("active",xt.sfx),e.textContent=xt.music?"\u{1F3B5} Music on":"\u{1F3B5} Music off",e.classList.toggle("active",xt.music)};Xf(xt.sfx),t(),n.addEventListener("click",()=>{xt.sfx=!xt.sfx,Xf(xt.sfx),Ci(),t()}),e.addEventListener("click",()=>{xt.music=!xt.music,ra(xt.music),Ci(),t()});let i=()=>{ku(),xt.music&&ra(!0),window.removeEventListener("pointerdown",i),window.removeEventListener("keydown",i)};window.addEventListener("pointerdown",i),window.addEventListener("keydown",i),Bu=(o,a=!0)=>{$t=o,qn("btnBot").classList.toggle("active",o==="bot"),qn("btnPvp").classList.toggle("active",o==="pvp"),a?Vr():Zi()};let s=o=>Bu(o);qn("btnBot").addEventListener("click",()=>s("bot")),qn("btnPvp").addEventListener("click",()=>s("pvp")),document.querySelectorAll("[data-level]").forEach(o=>{o.classList.toggle("active",+o.dataset.level===xt.level),o.addEventListener("click",()=>{xt.level=+o.dataset.level,Ci(),document.querySelectorAll("[data-level]").forEach(a=>a.classList.toggle("active",a===o)),Ht($n("level."+xt.level),"happy")})});let r=qn("chkRotate");r.checked=xt.autoRotate,r.addEventListener("change",()=>{xt.autoRotate=r.checked,Ci(),xt.autoRotate&&qr(De.turn)}),Je.chkHints.checked=xt.hints,Je.chkHints.addEventListener("change",()=>{Tg(Je.chkHints.checked),Ht($n(xt.hints?"hints.on":"hints.off"),"happy",!0)}),window.addEventListener("keydown",o=>{if(o.metaKey||o.ctrlKey||o.altKey||gs.active||/input|textarea|select/i.test(o.target&&o.target.tagName||""))return;let a=o.key.toLowerCase();a==="u"?(o.preventDefault(),sp()):a==="n"?(o.preventDefault(),Vr()):a==="h"?(o.preventDefault(),Tg(!xt.hints)):a==="escape"&&(Je.endOverlay.classList.contains("open")?Je.endOverlay.classList.remove("open"):It&&(It=null,Ri=[],ni(),st.deselect()))})}function Ag(){D1();try{n1()}catch(n){console.error(n),qn("stage").innerHTML='<div class="nogl">WebGL could not be started. Please use a current browser (Safari/Chrome/Firefox).</div>';return}C1(),Yl(),Ns(),ni(),Zi(),Ht($n("start"),"happy"),window.__gbc={get state(){return De},executeMove:cp,GC:Zt,renderer:At,camera:bn,controls:Kt,resize:Gl,newGame:Vr,undo:sp,setLevel:n=>{xt.level=n},mode:()=>$t,workerActive:()=>!!Tn&&zl,fxCount:()=>Yn.children.length,registry:()=>ki,groups:xn,shareScreenshot:rp,isBusy:()=>Ii||Kn,scene:Ln,hooks:Qe,settings:xt,setPosition:k1,loadState:Jl,setMode:fp,cinematic:gs,camTurn:()=>!!hp(),getLook:()=>E1(),setLook:n=>Kl(n),get busyFlag(){return Ii}},window.dispatchEvent(new Event("gbc-ready")),document.body.classList.add("ready")}var K={get state(){return De},get mode(){return $t},get selected(){return It},get aiThinking(){return Kn},get busy(){return Ii},set busy(n){Ii=n},get scene(){return Ln},get camera(){return bn},get controls(){return Kt},get renderer(){return At},get composer(){return Ls},get piecesGroup(){return Ki},get fxGroup(){return Yn},get boardGroup(){return ps},get keyLight(){return Qn},get bloom(){return ei},get moveSans(){return Ds},get captured(){return Ji},get lastQuote(){return Hu},get lastMood(){return zu},get checkKingGroup(){return ms},get hintsGroup(){return Ai},get extraGroups(){return di},material:n=>ql(n),camAzimuth:()=>Bg(),groups:xn,pieceAt:hr,settings:xt,els:Je,tweens:ti,speak:Ht,resultText:Vg,subText:up,shake:Gu,setShadowDirty:()=>{ur=!0},markDirty:()=>{ur=!0},turnCameraTo:qr,resetCamera:Hg,newGame:Vr,syncGroups:()=>Ns(),renderHints:()=>ni(),updateUI:()=>Zi(),isGameOver:()=>Zl(),get history(){return De.history},get regHistory(){return la},showEnd:()=>ip(),hideEnd:()=>Je.endOverlay.classList.remove("open")};function Wg(){document.readyState==="loading"?document.addEventListener("DOMContentLoaded",Ag):Ag()}var Xg=[{id:"neon",label:"Neon gloss"},{id:"chrome",label:"Liquid chrome"},{id:"glass",label:"Glass & circuits"},{id:"lava",label:"Lava core"}],Yg={value:0};function Kg(n){Yg.value=n}function N1(n){let e={value:0};n.userData.wobble=e;let t=n.onBeforeCompile;n.onBeforeCompile=(s,r)=>{t&&t(s,r),s.uniforms.uWobble=e,s.uniforms.uTime=Yg,s.vertexShader=`uniform float uWobble;
uniform float uTime;
`+s.vertexShader.replace("#include <begin_vertex>",`#include <begin_vertex>
       float wv = sin(position.y * 18.0 + uTime * 14.0) * cos(position.x * 11.0 - uTime * 9.0);
       transformed += normal * wv * 0.018 * uWobble;`)};let i=n.customProgramCacheKey?n.customProgramCacheKey.bind(n):()=>"";return n.customProgramCacheKey=()=>i()+"|wobble",n}zr.chrome=n=>{let e=new Cn({color:n==="w"?12173264:2761267,metalness:1,roughness:n==="w"?.18:.16,clearcoat:.2,clearcoatRoughness:.25,envMapIntensity:n==="w"?.72:1.5});return Nl(e,Bt[n].rim,n==="w"?.08:.45),N1(e)};zr.glass=n=>{let e=new Cn({color:n==="w"?15400191:16766704,metalness:0,roughness:.04,transmission:1,thickness:.55,ior:1.42,attenuationColor:n==="w"?new Ie(10482687):new Ie(5904970),attenuationDistance:n==="w"?1.6:.45,clearcoat:.7,clearcoatRoughness:.06,specularIntensity:.65,envMapIntensity:.85});return Nl(e,Bt[n].rim,n==="w"?.22:.4),e};var Xr=null;function U1(){if(Xr)return Xr;let n=256,e=document.createElement("canvas");e.width=e.height=n;let t=e.getContext("2d");t.fillStyle="#000",t.fillRect(0,0,n,n);let i=[];for(let o=0;o<22;o++)i.push([Math.random()*n,Math.random()*n]);let s=t.getImageData(0,0,n,n),r=s.data;for(let o=0;o<n;o++)for(let a=0;a<n;a++){let l=1e9,c=1e9;for(let[m,y]of i)for(let g of[-n,0,n]){let p=a-m-g,v=o-y,M=p*p+v*v;M<l?(c=l,l=M):M<c&&(c=M)}let d=Math.sqrt(c)-Math.sqrt(l),f=Math.max(0,1-d/3.2),h=(o*n+a)*4,u=Math.pow(f,1.6)*255;r[h]=r[h+1]=r[h+2]=u,r[h+3]=255}return t.putImageData(s,0,0),Xr=new dn(e),Xr.wrapS=Xr.wrapT=Gi,Xr.repeat.set(2,1.5),Xr}var Yr=null;function $g(){if(Yr)return Yr;let n=256,e=document.createElement("canvas");e.width=e.height=n;let t=e.getContext("2d"),i=t.createImageData(n,n);for(let s=0;s<n*n;s++){let r=150+Math.random()*105;i.data[s*4]=i.data[s*4+1]=i.data[s*4+2]=r,i.data[s*4+3]=255}return t.putImageData(i,0,0),Yr=new dn(e),Yr.wrapS=Yr.wrapT=Gi,Yr.repeat.set(3,2),Yr}zr.lava=n=>{let e=n==="w"?16753183:16722522,t=new ke({color:n==="w"?5722186:1445903,roughness:.92,metalness:.05,roughnessMap:$g(),bumpMap:$g(),bumpScale:1.2,emissive:e,emissiveMap:U1(),emissiveIntensity:n==="w"?2.6:3.6});return t.userData.baseEmissive=new Ie(e),t.userData.baseEI=t.emissiveIntensity,Nl(t,e,.12),t};var pp={};function O1(n){if(!pp[n]){let e=Bt[n].glow;pp[n]=new ke({color:e,emissive:e,emissiveIntensity:n==="w"?1.2:2.2,roughness:.4})}return pp[n]}var qg={};function F1(n){return qg[n]||(qg[n]=new ke({color:Bt[n].glow,emissive:Bt[n].glow,emissiveIntensity:1.6,wireframe:!0}))}var B1=new ke({color:16765286,emissive:16765286,emissiveIntensity:1.6,roughness:.3,metalness:.6}),H1={p:.62,n:.9,b:.95,r:.85,q:1,k:1.1};Vf.glass=(n,e,t)=>{let i=n.userData.inner,s=H1[e],r=new oe(le("core-"+e,()=>new yt(.035,.05,s-.12,12)),O1(t));r.position.y=.06+(s-.12)/2,r.userData.noShadow=!0,r.castShadow=!1,i.add(r);let o=new oe(le("chip",()=>new il(.075,0)),F1(t));o.position.y=s*.62,o.userData.spinChip=!0,i.add(o);for(let a=0;a<3;a++){let l=new oe(le("trace-"+a,()=>new fn(.09+a*.012,.006,6,32)),B1);l.rotation.x=Math.PI/2,l.position.y=.2+a*(s-.25)/3,i.add(l)}n.userData.glassChip=o};function mp(n,e,t){let i=n.userData.bodyMat;if(i&&i.userData.wobble){let s=n.userData.animating?1:0;i.userData.wobble.value+=(s-i.userData.wobble.value)*Math.min(1,t*(s?10:3))}n.userData.glassChip&&(n.userData.glassChip.rotation.y=e*1.6+(n.userData.phase||0))}var Qg={p:{title:"eager intern bot",threat:["Is this \u2026 part of my onboarding?","I only started yesterday!","Wait, this wasn\u2019t in my job description!","Help! Where is HR?","I\u2019m just the intern!"],capture:["Did it! Do I get a contract now?","That\u2019s going on my r\xE9sum\xE9!","Did I do that right?!","First win! I\u2019m calling my mom!"],neighbor:["He was my onboarding buddy! \u{1F622}","I\u2019ll take over all his tasks. All of them. Right now.","Who\u2019s going to bring the coffee now?"]},n:{title:"hyperactive drone bot",threat:["Whoa whoa whoa! Evasive maneuvers! Bzzzz!","Too fast for you! I think!","Rotors to maximum!","I see you! I see EVERYTHING!"],capture:["WHOOSH! L-shape, baby!","Zap, right over everyone! Did anyone film that?!","Bzzzt! Direct hit!","Loop! Landing! Applause!"],neighbor:["NO! Rotor salute to my colleague! \u{1FAE1}","I\u2019ll fly a lap of honor for him!","Bzz \u2026 that was close \u2026"]},b:{title:"philosophical hologram monk",threat:["A threat is only an illusion \u2026 I hope.","Om \u2026 diagonal \u2026 om \u2026","Who threatens whom, in the grand scheme of things?"],capture:["All things pass. Especially you.","I merely listened to the diagonal.","Enlightenment came at an angle."],neighbor:["He is now one with the cloud.","An ending is just a reboot.","I shall light an LED for him."]},r:{title:"grumpy server-rack bot",threat:["Hey! Don\u2019t rattle my fans.","I\u2019m a server, not a target.","99.9% uptime \u2013 and it stays that way.","Grmpf. What do you want?"],capture:["Grmpf. Done. Now leave me alone.","Data deleted. No backup.","One more of those and I need a break."],neighbor:["Outage in the neighboring rack. Typical.","Never liked him anyway. Okay, maybe a little.","Grmpf. That means paperwork."]},q:{title:"cool commander",threat:["Cute that you\u2019re trying.","I\u2019ve had worse for breakfast.","Threatening me? Bold."],capture:["Target neutralized. Next.","I don\u2019t do this for fun. Okay, a little.","Commander to base: done."],neighbor:["Hold formation! We\u2019ll get that back.","Noted. We\u2019ll pay them back.","Stay calm, team. I\u2019ve got this."]},k:{title:"nervous CEO bot",threat:["Uhm \u2026 can someone handle this for me?","I have a meeting in a minute! Somewhere else!"],capture:["Did I just do that myself?! Wow!","Executive decision! Done!"],check:["CHECK?! Who approved this?!","Call security! And my rook!","I need a coffee. And cover.","This was not in the business plan!"],neighbor:["Oh no, this means bad quarterly numbers!","Who\u2019s doing the presentation now?!"]}},ey=new ke({color:16765286,emissive:16756768,emissiveIntensity:1.1,roughness:.3,metalness:.6}),Zg=new ke({color:16727464,emissive:16727464,emissiveIntensity:2,roughness:.3}),z1={w:new ke({color:4867424,roughness:.8}),b:new ke({color:14212072,roughness:.4,metalness:.6,emissive:3355460})},G1=new ke({color:4063114,emissive:4063114,emissiveIntensity:2.6}),V1=new ke({color:16756782,emissive:16756782,emissiveIntensity:2.6}),W1=new ke({color:13226751,metalness:.8,roughness:.25,transparent:!0,opacity:.85}),ua=new ke({color:3159114,metalness:.9,roughness:.3}),$1=new Cn({color:9428223,roughness:.05,transmission:.6,thickness:.1,emissive:2263295,emissiveIntensity:.6}),q1=new ke({color:16777215,roughness:.4}),Vu={w:new ke({color:3007206,emissive:749427,roughness:.4}),b:new ke({color:16727464,emissive:7999568,roughness:.4})},Wu=null,jl=null;function X1(){if(Wu)return Wu;let n=document.createElement("canvas");n.width=4,n.height=64;let e=n.getContext("2d");for(let t=0;t<64;t++)e.fillStyle=t%4<2?"rgba(255,255,255,0.9)":"rgba(255,255,255,0.1)",e.fillRect(0,t,4,1);return jl=new dn(n),jl.wrapS=jl.wrapT=Gi,jl.repeat.set(1,3),Wu=new Wt({color:8382975,map:jl,transparent:!0,opacity:.14,blending:Bn,depthWrite:!1,side:pn}),Wu}function ty(){return le("star",()=>{let n=new bi;for(let t=0;t<10;t++){let i=t/10*Math.PI*2-Math.PI/2,s=t%2?.028:.064;t?n.lineTo(Math.cos(i)*s,-Math.sin(i)*s):n.moveTo(Math.cos(i)*s,-Math.sin(i)*s)}n.closePath();let e=new $i(n,{depth:.012,bevelEnabled:!0,bevelThickness:.005,bevelSize:.004,bevelSegments:2});return e.translate(0,0,-.006),e})}function Y1(){return le("mini-crown",()=>new yt(.045,.045,.03,16,1,!0))}var K1={p:{y:.16,z:.29},n:{y:.16,z:.31},b:{y:.16,z:.3},r:{y:.16,z:.33},q:{y:.16,z:.33},k:{y:.16,z:.34}},Z1={p:.135,n:.16,b:.135,r:.225,q:.15,k:.16},J1={p:1,n:1.2,b:1.32,r:1.12,q:1.48,k:1.8};function $u(n){let e=Math.sin(n*9301+49297)*233280;return e-Math.floor(e)}function Ql(n){if(!n.userData.identity)return j1(n)}function j1(n){let e=n.userData,t=e.inner,i=e.type,s=e.color;if(e.identity={},i==="r"){let r=[],o=le("led",()=>new ft(.05,.022,.016,1,.006));for(let a=0;a<5;a++){let l=new oe(o,a%2?V1:G1);l.position.set(-.07+a%2*.14,.3+Math.floor(a/2)*.1,.25),a===4&&l.position.set(0,.62,.252),t.add(l),r.push(l)}for(let a=0;a<3;a++){let l=new oe(le("vent",()=>new ft(.15,.012,.012,1,.004)),ua);l.position.set(0,.25+a*.03,.252),t.add(l)}e.identity.leds=r}else if(i==="n"){let r=e.knightHead||t,o=[];for(let a of[.22,-.22]){let l=new oe(le("arm",()=>new yt(.012,.012,.12,8)),ua);l.rotation.x=Math.PI/2,l.position.set(-.2,.78,a*.78),r.add(l);let c=new gt;c.position.set(-.2,.81,a);let d=new oe(le("hub",()=>new yt(.025,.025,.03,12)),ua);c.add(d);for(let f=0;f<2;f++){let h=new oe(le("blade",()=>new ft(.26,.006,.04,1,.003)),W1);h.rotation.y=f*Math.PI/2,h.position.y=.018,c.add(h)}r.add(c),o.push(c)}e.identity.rotors=o}else if(i==="b"){let r=new oe(le("holo",()=>new yt(.2,.24,.6,40,1,!0)),X1());r.position.y=.84,r.userData.noShadow=!0,r.castShadow=!1,r.raycast=()=>{},t.add(r);let o=new oe(le("halo",()=>new fn(.11,.008,8,40)),new ke({color:4996638,emissive:16765286,emissiveIntensity:.9,roughness:.45}));o.rotation.x=Math.PI/2,o.position.y=1.26,t.add(o),e.identity.holo=r,e.identity.halo=o}else if(i==="q"){let r=new oe(le("headset",()=>new fn(.205,.012,8,40,Math.PI)),ua);r.position.y=.93,r.rotation.y=Math.PI/2,r.rotation.z=0,t.add(r);let o=new oe(le("earpad",()=>new yt(.04,.04,.03,16)),ua);o.rotation.z=Math.PI/2,o.position.set(.2,.93,0),t.add(o);let a=new oe(le("boom",()=>new yt(.008,.008,.16,8)),ua);a.rotation.x=Math.PI/2.4,a.position.set(.19,.88,.08),t.add(a);let l=new oe(le("mic",()=>new Tt(.02,10,8)),new ke({color:Bt[s].glow,emissive:Bt[s].glow,emissiveIntensity:2}));l.position.set(.16,.84,.155),t.add(l);let c=new oe(ty(),ey);c.position.set(0,.62,.148),c.scale.setScalar(.9),t.add(c)}else if(i==="k"){let r=new bi;r.moveTo(-.02,0),r.lineTo(.02,0),r.lineTo(.035,-.17),r.lineTo(0,-.21),r.lineTo(-.035,-.17),r.closePath();let o=new oe(le("tie",()=>new $i(r,{depth:.01,bevelEnabled:!0,bevelThickness:.004,bevelSize:.004,bevelSegments:1})),Vu[s]);o.position.set(0,.8,.152),o.rotation.x=-.12,t.add(o);let a=new oe(le("knot",()=>new Tt(.026,12,8)),Vu[s]);a.position.set(0,.81,.16),t.add(a);let l=new oe(le("drop",()=>{let c=new Tt(.04,16,12);return c.scale(1,1.4,1),c}),$1);l.position.set(.2,1.05,.14),l.visible=!1,t.add(l),e.identity.sweat=l}else if(i==="p"){let r=new oe(le("lanyard",()=>new fn(.12,.006,6,30,Math.PI)),Vu[s]);r.rotation.z=Math.PI,r.position.set(0,.6,.02),r.rotation.x=-.35,t.add(r);let o=new oe(le("badge",()=>new ft(.075,.055,.01,1,.006)),q1);o.position.set(0,.43,.148),o.rotation.x=-.25,t.add(o);let a=new oe(le("stripe",()=>new Fn(.075,.014,.012)),Vu[s]);a.position.set(0,.452,.152),a.rotation.x=-.25,t.add(a)}}function Q1(n){let e=n.userData.entry;if(!e)return;let t=e.stats,i=`${t.captures}|${t.checks}|${Math.min(4,t.attacked)}`;if(n.userData.memSig===i)return;n.userData.memSig=i,n.userData.memGroup&&n.userData.inner.remove(n.userData.memGroup);let s=new gt;n.userData.inner.add(s),n.userData.memGroup=s;let r=n.userData.type,o=n.userData.color,a=K1[r],l=[];for(let u=0;u<Math.min(5,t.captures);u++)l.push("star");for(let u=0;u<Math.min(3,t.checks);u++)l.push("crown");let c=Math.min(6,l.length);for(let u=0;u<c;u++){let m=(u-(c-1)/2)*.36,y=Math.sin(m)*a.z,g=Math.cos(m)*a.z,p;if(l[u]==="star")p=new oe(ty(),ey),p.position.set(y,a.y+.02,g),p.rotation.y=m;else{p=new gt;let v=new oe(Y1(),Zg);p.add(v);for(let M=0;M<3;M++){let _=new oe(le("crown-spike",()=>new Rs(.015,.045,6)),Zg);_.position.set((M-1)*.032,.036,.03),p.add(_)}p.position.set(y,a.y+.02,g),p.rotation.y=m}s.add(p)}let d=Math.min(4,t.attacked),f=Z1[r];for(let u=0;u<d;u++){let m=e.id*31+u*7,y=($u(m)-.5)*1.3,g=(r==="n"?.5:.3)+$u(m+1)*.22,p=new oe(le("scratch",()=>new ft(.075,.009,.008,1,.003)),z1[o]);r==="n"?p.position.set(($u(m+2)-.5)*.16,g,.15):p.position.set(Math.sin(y)*(f+.005),g,Math.cos(y)*(f+.005)),p.rotation.set(0,r==="n"?0:y,($u(m+3)-.5)*1.6),s.add(p)}let h=n.userData.bodyMat;h&&h.userData.rimStrength&&(h.userData.rimBase===void 0&&(h.userData.rimBase=h.userData.rimStrength.value),h.userData.rimStrength.value=h.userData.rimBase+Math.min(.6,t.captures*.15+t.checks*.08))}var Us=null,Jg=-1e9,jg=new Map;function eE(n,e){let s=document.createElement("canvas");s.width=640,s.height=200;let r=s.getContext("2d");r.font='700 34px -apple-system, "SF Pro Text", "Segoe UI", system-ui, sans-serif';let o=n.split(" "),a=[],l="";for(let y of o){let g=l?l+" "+y:y;r.measureText(g).width>570&&l?(a.push(l),l=y):l=g}a.push(l);let c=a.slice(0,2),d=Math.min(630,Math.max(...c.map(y=>r.measureText(y).width))+56),f=40+c.length*44,h=(640-d)/2,u=6;r.fillStyle="rgba(7,9,20,0.92)",r.strokeStyle=e==="w"?"#2de2e6":"#ff3da8",r.lineWidth=5,r.beginPath(),r.roundRect?r.roundRect(h,u,d,f,26):r.rect(h,u,d,f),r.fill(),r.stroke(),r.beginPath(),r.moveTo(640/2-18,u+f-2),r.lineTo(640/2,u+f+30),r.lineTo(640/2+18,u+f-2),r.closePath(),r.fill(),r.stroke(),r.fillRect(640/2-15,u+f-6,30,8),r.fillStyle="#f5f7ff",r.textAlign="center",r.textBaseline="middle",c.forEach((y,g)=>r.fillText(y,640/2,u+26+22+g*44));let m=new dn(s);return m.colorSpace=Vt,m}function da(n,e,{force:t=!1}={}){if(!K.settings.bubbles||!n||!n.parent||!e)return!1;let i=ui(),s=n.userData.id;if(!t&&(i-Jg<2600||(jg.get(s)||-1e9)>i-9e3))return!1;Jg=i,jg.set(s,i),window.__gbcBubbles=(window.__gbcBubbles||0)+1,window.__gbcLastBubble=e,Us&&(Us.parent&&Us.parent.remove(Us),Us.material.map.dispose(),Us.material.dispose());let r=new cs(new Wi({map:eE(e,n.userData.color),transparent:!0,depthTest:!1,depthWrite:!1}));r.renderOrder=20,r.center.set(.5,0),K.fxGroup.add(r),Us=r;let o=J1[n.userData.type];return dr({t0:i,dur:2900,step:a=>{let l=n.getWorldPosition(new I);r.position.set(l.x,l.y+o+.05,l.z);let c=a<.1?a/.1:1,d=2.6*(a<.1?.6+.4*c+Math.sin(c*Math.PI)*.15:1);r.scale.set(d,d*200/640,1),r.material.opacity=a<.85?1:1-(a-.85)/.15},done:()=>{Us===r&&(Us=null),r.parent&&r.parent.remove(r),r.material.map.dispose(),r.material.dispose()}}),!0}function qu(n,e){let t=Qg[n][e]||[];return $n(t)}function tE(n,e){if(!K.settings.bubbles)return;let t=i=>i&&K.groups.get(i.id);if(e.status.type==="check"){let i=null;for(let s of K.groups.values())s.userData.type==="k"&&s.userData.color===K.state.turn&&(i=s);if(i&&da(i,qu("k","check")))return}if(!(n.capPiece&&n.moverEntry&&Math.random()<.75&&da(t(n.moverEntry),qu(n.moverEntry.type,"capture")))){if(n.capPiece&&n.victimEntry&&Math.random()<.6){let i=n.victimEntry,s=null;for(let r of Pg().values()){if(r.color!==i.color)continue;Math.max(Math.abs(r.r-i.r),Math.abs(r.c-i.c))===1&&(!s||Pi[r.type]>Pi[s.type])&&(s=r)}if(s&&da(t(s),qu(s.type,"neighbor")))return}if(n.newlyThreatened&&n.newlyThreatened.length&&Math.random()<.55){let i=n.newlyThreatened.slice().sort((s,r)=>(Pi[r.type]||10)-(Pi[s.type]||10))[0];da(t(i),qu(i.type,"threat"))}}}function nE(n,e){let t=K.els.tooltip;if(!n||!n.group||!n.group.userData.entry||!e){t.hidden=!0;return}let i=n.group.userData.entry,s=i.stats,r=i.color==="w"?"White":K.mode==="bot"?"Grok Bot":"Black",o=`${s.captures} ${s.captures===1?"capture":"captures"}`,a=[];s.checks&&a.push(`gave check ${s.checks}\xD7`),s.attacked&&a.push(`threatened ${s.attacked}\xD7`),i.promoted&&a.push("promoted \u{1F393}"),t.innerHTML=`<b>${Yi[i.type]}</b> <span class="tt-sub">(${r})</span><br>${o}, survived ${s.survived} moves${s.moves?` \xB7 moved ${s.moves}\xD7`:""}<br><span class="tt-sub">${Qg[i.type].title}${a.length?" \xB7 "+a.join(" \xB7 "):""}</span>`;let l=K.els.stage.getBoundingClientRect();t.style.left=e.clientX-l.left+"px",t.style.top=e.clientY-l.top+"px",t.hidden=!1}function iE(n,e){let t=K.state;for(let i of K.groups.values()){let s=i.userData.identity;if(s){if(s.leds&&s.leds.forEach((r,o)=>{r.visible=Math.sin(n*(3+o*1.7)+i.userData.phase*5+o)>-.3}),s.rotors&&s.rotors.forEach((r,o)=>{r.rotation.y+=e*(i.userData.animating?60:22)*(o?-1:1)}),s.holo){s.holo.rotation.y=n*.6,s.holo.material.opacity=.08+.05*Math.sin(n*7+i.userData.phase);let r=tg();r&&(r.offset.y=-n*.35)}if(s.halo&&(s.halo.position.y=1.26+Math.sin(n*2+i.userData.phase)*.025,s.halo.rotation.z=n*.8),s.sweat){let r=K.checkKingGroup===i||i.userData.scared;if(s.sweat.visible=r,r){let o=(n*.9+i.userData.phase)%1;s.sweat.position.y=1.1-o*.3,s.sweat.scale.setScalar(1-o*.4)}}}}}function ny(){Qe.afterSync.push(()=>{for(let n of K.groups.values())n.userData.identity||Ql(n),Q1(n)}),Qe.afterMove.push(tE),Qe.frame.push(iE),Dg(nE)}var Kr={inOutCubic:n=>n<.5?4*n*n*n:1-Math.pow(-2*n+2,3)/2,outCubic:n=>1-Math.pow(1-n,3),inCubic:n=>n*n*n,outBack:n=>1+2.9*Math.pow(n-1,3)+1.9*Math.pow(n-1,2)},ec=null;function sE(){if(ec)return ec;let n=260,e=new Float32Array(n*3),t=new Float32Array(n*3),i=new Ft;i.setAttribute("position",new gn(e,3)),i.setAttribute("color",new gn(t,3));let s=new Rr(i,new qs({size:.075,vertexColors:!0,transparent:!0,depthWrite:!1,blending:Bn}));s.frustumCulled=!1,ec={N:n,pos:e,col:t,geo:i,pts:s,life:new Float32Array(n),vel:new Float32Array(n*3),next:0,last:0};for(let r=0;r<n;r++)e[r*3+1]=-99;return ec}function rE(n,e,t){let i=sE();i.pts.parent||K.fxGroup.add(i.pts);let s=new Ie(e),r=new Ie(16765286);for(let o=0;o<t;o++){let a=i.next;i.next=(i.next+1)%i.N,i.pos[a*3]=n.x+(Math.random()-.5)*.12,i.pos[a*3+1]=n.y,i.pos[a*3+2]=n.z+(Math.random()-.5)*.12,i.vel[a*3]=(Math.random()-.5)*.6,i.vel[a*3+1]=-2.5-Math.random()*1.5,i.vel[a*3+2]=(Math.random()-.5)*.6,i.life[a]=1;let l=Math.random()<.5?r:s;i.col[a*3]=l.r,i.col[a*3+1]=l.g,i.col[a*3+2]=l.b}}function iy(){let n=ec;if(!n)return;let e=ui(),t=Math.min(.05,(e-n.last)/1e3);n.last=e;let i=0;for(let s=0;s<n.N;s++){if(n.life[s]<=0)continue;i++,n.life[s]-=t*2.2,n.pos[s*3]+=n.vel[s*3]*t,n.pos[s*3+1]+=n.vel[s*3+1]*t,n.pos[s*3+2]+=n.vel[s*3+2]*t,n.pos[s*3+1]<qt&&(n.pos[s*3+1]=qt,n.vel[s*3]*=3,n.vel[s*3+2]*=3,n.vel[s*3+1]=0),Math.max(0,n.life[s])<=0&&(n.pos[s*3+1]=-99),n.col[s*3]*=.985,n.col[s*3+1]*=.975,n.col[s*3+2]*=.985}n.geo.attributes.position.needsUpdate=!0,n.geo.attributes.color.needsUpdate=!0,n.pts.visible=i>0}function ry(n,e){let t=new oe(new Lr(.2,.32,48),new Wt({color:e,transparent:!0,opacity:.9,side:pn,depthWrite:!1,blending:Bn}));t.rotation.x=-Math.PI/2,t.position.set(n.x,qt+.02,n.z),K.fxGroup.add(t),dr({t0:ui(),dur:600,step:i=>{t.scale.setScalar(1+i*3),t.material.opacity=.9*(1-i)},done:()=>{K.fxGroup.remove(t),t.geometry.dispose(),t.material.dispose()}})}function tc(n,e,t,{delay:i=0,dur:s=1250,height:r=.75}={}){return new Promise(o=>{if(!n)return o();let a=n.position.clone(),l=Mn(e,t);l.y=qt;let c=Bt[n.userData.color].glow,d=n.userData.inner,f=l.clone().sub(a);f.y=0;let h=Fu().particles>50?3:1,u=!1;dr({t0:ui()+i,dur:s,step:m=>{u||(u=!0,n.userData.animating=!0,st.whoosh&&st.whoosh());let y,g;if(m<.28){let S=Kr.outCubic(m/.28);y=qt+r*S,g=0,d.scale.set(1+.06*(1-S),1-.06*(1-S),1+.06*(1-S))}else if(m<.74)y=qt+r+Math.sin((m-.28)/.46*Math.PI*2)*.04,g=Kr.inOutCubic((m-.28)/.46),d.scale.set(1,1,1);else{let S=(m-.74)/.26;y=qt+r*(1-Kr.inCubic(S)),g=1}n.position.set(a.x+f.x*g,y,a.z+f.z*g);let p=m>.28&&m<.74?Math.sin((m-.28)/.46*Math.PI):0,v=n.rotation.y,M=f.x*Math.cos(-v)-f.z*Math.sin(-v),_=f.x*Math.sin(-v)+f.z*Math.cos(-v);d.rotation.set(Math.sign(_)*.18*p,0,-Math.sign(M)*.18*p),y>qt+.03&&rE(new I(n.position.x,y-.02,n.position.z),c,h),iy()},done:()=>{n.position.copy(l),d.rotation.set(0,0,0),d.scale.set(1,1,1),n.userData.animating=!1,ry(l,c),dr({t0:ui(),dur:300,step:m=>d.scale.set(1+Math.sin(m*Math.PI)*.08,1-Math.sin(m*Math.PI)*.1,1+Math.sin(m*Math.PI)*.08),done:()=>d.scale.set(1,1,1)}),o()}}),dr({t0:ui()+i+s,dur:700,step:()=>iy()})})}function sy(n){return n.userData.inner?[...n.userData.inner.children]:[]}function yp(n,e,t,i,{dur:s=1200,parent:r=null}={}){return new Promise(o=>{let a=ui(),l=Bt[t].glow,c=n?sy(n).map(u=>({o:u,p:u.position.clone(),r:u.rotation.clone(),s:u.scale.clone(),v:new I((Math.random()-.5)*.9,.3+Math.random()*.7,(Math.random()-.5)*.9),spin:(Math.random()-.5)*8})):[],d=na(e,t);try{Ql(d)}catch{}d.userData.phase=Math.random()*6,d.userData.animating=!0,d.position.copy(i),d.position.y=qt,d.rotation.y=n?n.rotation.y:0;let f=sy(d).map(u=>{let m={p:u.position.clone(),r:u.rotation.clone(),s:u.scale.clone()},y=Math.random()*Math.PI*2,g=.6+Math.random()*.6,p=new I(Math.cos(y)*g,.6+Math.random()*1.2,Math.sin(y)*g);return u.position.copy(p),u.scale.setScalar(.001),{o:u,tgt:m,start:p,spin:(Math.random()-.5)*10,delay:Math.random()*.25}});(r||K.piecesGroup).add(d),di.add(d);let h=new oe(new yt(.32,.38,2.2,32,1,!0),new Wt({color:l,transparent:!0,opacity:0,side:pn,depthWrite:!1,blending:Bn}));h.position.set(i.x,qt+1.1,i.z),K.fxGroup.add(h),st.assemble&&st.assemble(),dr({t0:a,dur:s,step:u=>{let m=Math.min(1,u/.45);for(let y of c)y.o.position.set(y.p.x+y.v.x*Kr.outCubic(m),y.p.y+y.v.y*Math.sin(m*Math.PI*.8)+m*.2,y.p.z+y.v.z*Kr.outCubic(m)),y.o.rotation.set(y.r.x+y.spin*m,y.r.y+y.spin*m*.5,y.r.z),y.o.scale.copy(y.s).multiplyScalar(Math.max(.001,1-Kr.inCubic(m)));for(let y of f){let g=Math.max(0,Math.min(1,(u-.3-y.delay*.4)/(.6-y.delay*.2))),p=Kr.outBack(g);y.o.position.lerpVectors(y.start,y.tgt.p,Math.min(1.05,p)),y.o.rotation.set(y.tgt.r.x+y.spin*(1-g),y.tgt.r.y+y.spin*(1-g),y.tgt.r.z),y.o.scale.copy(y.tgt.s).multiplyScalar(Math.max(.001,Math.min(1.08,p)))}h.material.opacity=.35*Math.sin(Math.min(1,u)*Math.PI),h.rotation.y=u*6,h.scale.set(1-u*.4,.4+u*.6,1-u*.4)},done:()=>{for(let u of f)u.o.position.copy(u.tgt.p),u.o.rotation.copy(u.tgt.r),u.o.scale.copy(u.tgt.s);K.fxGroup.remove(h),h.geometry.dispose(),h.material.dispose(),ry(i,l),Gu(.08),st.promote&&st.promote(),o(d)}})})}var gp=[];function oE(n){n&&(di.delete(n),n.parent&&n.parent.remove(n),n.userData.bodyMat&&n.userData.bodyMat.dispose())}function aE(n,e){let{move:t,moverGroup:i,mover:s}=n;if(!i)return null;if(t.promotion)return(async()=>{await ha(i,t.tr,t.tc,{dur:e.dur,height:.5,onLand:()=>{e.land(),e.explodeCap()}}),e.explodeCap();let r=Mn(t.tr,t.tc),o=await yp(i,t.promotion,s.color,r);i.visible=!1,gp.push(o)})();if(t.castle){let r=t.fr,[o,a]=t.castle==="K"?[7,5]:[0,3],l=K.pieceAt.get(r+","+o);return Promise.all([tc(i,t.tr,t.tc,{dur:1250,height:.8}),tc(l,r,a,{delay:160,dur:1250,height:1.25})])}return null}function oy(){Qe.beforeMove.push(aE),Qe.afterSync.push(()=>{for(;gp.length;)oE(gp.pop())})}var nn=null,an=null,Jr={},cy="neutral",hy=0,ay=!1,Zr=new I,ji=new I,ly=9,on={x:0,y:0,z:0,s:0},nc=11;function lE(){an=new gt,an.name="giantGrok",an.rotation.order="YXZ",nn=new gt,an.add(nn);let n=new ke({color:1711411,metalness:.75,roughness:.35,emissive:658460,envMapIntensity:.6}),e=new ke({color:3007206,emissive:3007206,emissiveIntensity:.9,roughness:.4}),t=new ke({color:197642,metalness:.2,roughness:.08,envMapIntensity:1.2}),i=new ke({color:3007206,emissive:3007206,emissiveIntensity:1.75}),s=new ke({color:395284,emissive:0,roughness:.2}),r=new ke({color:16727464,emissive:16727464,emissiveIntensity:1.6}),o=new oe(new ft(4.6,3.2,2.4,6,.6),n);nn.add(o);let a=new oe(new ft(3.8,2.2,.2,4,.18),t);a.position.set(0,-.05,1.16),nn.add(a);let l=new oe(new fn(1,.05,8,64),e);l.scale.set(2.05,1.15,1),l.position.set(0,-.05,1.26),nn.add(l);for(let M of[-1,1]){let _=new oe(new yt(.55,.55,.4,32),n);_.rotation.z=Math.PI/2,_.position.set(M*2.45,0,0),nn.add(_);let S=new oe(new fn(.4,.05,8,40),e);S.rotation.y=Math.PI/2,S.position.set(M*2.67,0,0),nn.add(S)}let c=new oe(new yt(.06,.09,.7,12),n);c.position.set(0,1.9,0),nn.add(c);let d=new ke({color:16727464,emissive:16727464,emissiveIntensity:2.2}),f=new oe(new Tt(.22,24,16),d);f.position.set(0,2.3,0),nn.add(f);let h=[];for(let M of[-1,1]){let _=new gt;_.position.set(M*.95,.3,1.3);let S=new oe(new As(.5,40),i);_.add(S);let E=new oe(new As(.2,32),s);E.position.z=.01,_.add(E);let P=new oe(new As(.06,16),new Wt({color:16777215}));P.position.set(.08,.08,.02),E.add(P);let x=new oe(new Zn(1.15,.6),t);x.position.set(0,.85,.03),_.add(x),nn.add(_),h.push({g:_,white:S,pupil:E,lid:x})}let u=[],m=new ft(.16,.1,.05,1,.03);for(let M=0;M<nc;M++){let _=new oe(m,r);_.position.set((M-(nc-1)/2)*.17,-.6,1.3),nn.add(_),u.push(_)}let y=new ke({color:9428223,emissive:2788607,emissiveIntensity:1.2,transparent:!0,opacity:.9}),g=[];for(let M=0;M<3;M++){let _=new oe(new Tt(.14,16,12),y);_.scale.set(1,1.5,1),_.visible=!1,nn.add(_),g.push(_)}let p=new ke({color:16765286,emissive:16765286,emissiveIntensity:2}),v=[];for(let M=0;M<6;M++){let _=new oe(new kr(.2,0),p);_.visible=!1,nn.add(_),v.push(_)}an.traverse(M=>{M.isMesh&&(M.castShadow=!1,M.receiveShadow=!1,M.raycast=()=>{})}),Jr={eyes:h,segs:u,drops:g,orbit:v,tip:f,tipM:d,eyeM:i,mouthM:r,trim:e},K.scene.add(an)}function cE(n,e,t){let i=(e-(nc-1)/2)/((nc-1)/2);switch(n){case"grin":return{x:i*1.05,y:-.75+.42*i*i,s:1.25-.3*i*i};case"celebrate":return{x:i*1,y:-.85+.5*i*i+Math.sin(t*12+e)*.03,s:1.4};case"shock":{let s=e/nc*Math.PI*2;return{x:Math.cos(s)*.36,y:-.72+Math.sin(s)*.32,s:.9}}case"sweat":return{x:i*.8,y:-.6-.18*(1-i*i)+Math.sin(t*9+e*1.3)*.035,s:.9};case"sad":return{x:i*.8,y:-.55-.3*(1-i*i),s:.9};case"thinking":return{x:i*.55+.25,y:-.65+i*.08+Math.sin(t*3+e)*.02,s:.8};default:return{x:i*.85,y:-.62+.16*i*i,s:1}}}function fr(n,e=2600){cy=n,hy=performance.now()+e}var Xu=new I;function hE(n,e){if(!an)return;let t=K.settings.giant!==!1;if(an.visible=t,!t)return;let i=K.camera,s=K.controls.target,r=i.position.x-s.x,o=i.position.z-s.z,a=Math.hypot(r,o)||1,l=-r/a,c=-o/a,d=l*3.5,f=c*3.5,h=-c,u=l,m=-1;for(let[Le,V]of[[0,1.85],[1.5,1.6],[-1.5,1.6],[3.5,1.25],[-3.5,1.25]])ji.set(d+h*Le,V,f+u*Le).project(i),m=Math.max(m,ji.y);m+=.03;let y=.97,g=y-m,p=!!hp(),v=g>.12&&!p;Zr.set(0,(m+y)/2,.5).unproject(i).sub(i.position).normalize();let M=Math.max(.2,Math.hypot(Zr.x,Zr.z)),_=(a+ly)/M,S=Math.tan(us.degToRad(i.fov/2)),E=Math.max(0,g)*_*S,P=4.25,x=1.7,A=v?Math.min(1.15,E*.9/P):0,T=m+g*.05;Zr.set(0,T,.5).unproject(i).sub(i.position).normalize(),ji.copy(i.position).addScaledVector(Zr,(a+ly)/Math.max(.2,Math.hypot(Zr.x,Zr.z)));let C=Math.hypot(ji.x-on.x,ji.z-on.z)>5;(!ay||p||C)&&(on.x=ji.x,on.y=ji.y,on.z=ji.z,ay=!0);let k=Math.min(1,e*5);on.x+=(ji.x-on.x)*k,on.y+=(ji.y-on.y)*k,on.z+=(ji.z-on.z)*k,on.s+=(A-on.s)*Math.min(1,e*(A>on.s?4:10)),an.visible=on.s>.02,an.scale.setScalar(Math.max(.001,on.s)),an.position.set(on.x,on.y+x*on.s+Math.sin(n*.7)*.02*on.s,on.z);let D=Math.atan2(i.position.x-an.position.x,i.position.z-an.position.z);an.rotation.y=D;let L=Math.atan2(i.position.y-an.position.y,Math.hypot(i.position.x-an.position.x,i.position.z-an.position.z));if(an.rotation.x=-L*.6,!an.visible)return;let F=performance.now(),B=cy;if(F>hy)if(B="neutral",K.aiThinking)B="thinking";else{let Le=K.mode==="bot"||K.state.turn==="w"?"b":"w";K.material(Le)-K.material(Le==="w"?"b":"w")<=-3&&(B="sweat")}let $=K.selected,se=K.state.lastMove;$?Xu.copy(Mn($.r,$.c)):se?Xu.copy(Mn(se.tr,se.tc)):Xu.set(0,0,0);let Q=nn.worldToLocal(Xu.clone()).normalize(),ne=us.clamp(Q.x*.55,-.25,.25),Oe=us.clamp(Q.y*.55,-.25,.25);B==="thinking"&&(ne=.18+Math.sin(n*2)*.05,Oe=.2);let Ce=B==="grin"||B==="celebrate"?.45:B==="shock"?1.3:B==="sad"||B==="sweat"?.85:1,mt=B==="shock"?1.25:1,at=(n+1.3)%5.1<.12?.08:1;for(let[Le,V]of Jr.eyes.entries()){V.pupil.position.x+=(ne-V.pupil.position.x)*.12,V.pupil.position.y+=(Oe-V.pupil.position.y)*.12;let J=Ce*at;V.g.scale.x+=(mt-V.g.scale.x)*.2,V.g.scale.y+=(J*mt-V.g.scale.y)*.3;let fe=B==="sweat"||B==="sad"?Le?-.3:.3:B==="thinking"&&Le?.15:0;V.lid.rotation.z+=(fe-V.lid.rotation.z)*.15,V.lid.position.y+=((B==="sweat"||B==="sad"?.68:.85)-V.lid.position.y)*.15}nn.rotation.y+=(us.clamp(Q.x*.3,-.25,.25)-nn.rotation.y)*.05,nn.rotation.x+=((B==="thinking"?-.08:-Q.y*.15+.12)-nn.rotation.x)*.05,nn.rotation.z=B==="celebrate"?Math.sin(n*8)*.08:B==="thinking"?Math.sin(n*1.5)*.04:nn.rotation.z*.9,nn.position.y=B==="celebrate"?Math.abs(Math.sin(n*6))*.3:nn.position.y*.9,Jr.segs.forEach((Le,V)=>{let J=cE(B,V,n);Le.position.x+=(J.x-Le.position.x)*.18,Le.position.y+=(J.y-Le.position.y)*.18;let fe=J.s;Le.scale.x+=(fe-Le.scale.x)*.2,Le.scale.y+=(fe-Le.scale.y)*.2}),Jr.drops.forEach((Le,V)=>{if(Le.visible=B==="sweat"||B==="shock",Le.visible){let J=(n*.6+V*.37)%1;Le.position.set((V%2?1:-1)*(1.9+V*.1),1.1-J*1.6,1.2),Le.scale.set(1-J*.3,1.5*(1-J*.3),1)}}),Jr.orbit.forEach((Le,V)=>{let J=B==="celebrate"||B==="thinking"&&V<3;if(Le.visible=J,!J)return;let fe=n*(B==="celebrate"?2.4:3.2)+V/(B==="celebrate"?6:3)*Math.PI*2;B==="celebrate"?(Le.position.set(Math.cos(fe)*3.1,1.6+Math.sin(fe*2)*.4,Math.sin(fe)*1.4),Le.rotation.set(n*3,n*2,0),Le.scale.setScalar(1)):(Le.position.set(1.4+Math.cos(fe)*.4,2.3+V*.35,.8),Le.scale.setScalar(.5+V*.15))}),Jr.tipM.emissiveIntensity=K.aiThinking?1.2+Math.abs(Math.sin(n*9))*1.8:1.6+Math.sin(n*2)*.4,Jr.mouthM.emissive.setHex(B==="sweat"||B==="sad"?6990079:B==="shock"?16765286:16727464)}function uy(n){K.settings.giant=n,Ci(),an&&(an.visible=n)}function dy(n,e){fr(n,e)}function fy(){lE(),Qe.frame.push(hE);let n=Qe.speak;Qe.speak=(i,s)=>{n&&n(i,s),i==="happy"?fr("grin",2600):i==="shock"?fr("shock",2600):i==="sad"&&fr("sad",2600)};let e=Qe.end;Qe.end=i=>{e&&e(i);let s=K.mode==="bot"&&i&&i.type==="checkmate"&&i.winner==="w";i&&i.type==="checkmate"&&!s?fr("celebrate",1e9):s?fr("sad",1e9):fr("thinking",4e3)};let t=Qe.newGame;Qe.newGame=()=>{t&&t(),fr("grin",1800)}}var je=null,Yu=(n,e)=>"abcdefgh"[e]+(8-n);function uE(){let e=K.history.slice().concat([K.state]),t=[];for(let i=1;i<e.length;i++){let s=e[i].lastMove;s&&t.push({i,before:e[i-1],after:e[i],m:s})}return t}function bp(){let n=uE();if(!n.length)return[];let e=n[n.length-1],t=window.GardenChess.gameStatus({...K.state,history:[]}),i=[],s=null;for(let r of n){if(r===e&&t.type==="checkmate"||!r.m.captured)continue;let o=Pi[r.m.captured.type]*10+r.i*.01;(!s||o>s.v)&&(s={...r,v:o})}return s||(s=n.filter(r=>r!==e&&(r.m.promotion||r.m.castle||window.GardenChess.isInCheck(r.after.board,r.after.turn))).pop()||(n.length>1?n[Math.floor(n.length/2)-0]:null),s===e&&(s=null)),s&&i.push({...s,kind:s.m.captured?"capture":"move"}),i.push({...e,kind:t.type==="checkmate"?"mate":"final"}),i}function dE(n){let e=n.m,t=Yi[e.piece],i=e.promotion?` \u2192 ${Yi[e.promotion]}`:"";return n.kind==="mate"?{big:"CHECKMATE!",small:`${t} to ${Yu(e.tr,e.tc)}${i}`}:n.kind==="final"?{big:"THE FINAL MOVE",small:`${t} to ${Yu(e.tr,e.tc)}`}:e.captured?{big:"BIGGEST CAPTURE",small:`${t} grabs the ${Yi[e.captured.type]} (${Yu(e.tr,e.tc)})`}:e.castle?{big:"DOCKING MANEUVER",small:"Castling, space-style"}:e.promotion?{big:"TRANSFORMATION",small:`${t} becomes a ${Yi[e.promotion]}`}:{big:"KEY MOMENT",small:`${t} to ${Yu(e.tr,e.tc)}`}}function fE(n,e,t="#2de2e6"){let r=document.createElement("canvas");r.width=1024,r.height=360;let o=r.getContext("2d");o.textAlign="center",o.textBaseline="middle",o.font='900 108px -apple-system, "SF Pro Display", "Segoe UI", system-ui, sans-serif';let a=o.createLinearGradient(1024*.15,0,1024*.85,0);a.addColorStop(0,"#2de2e6"),a.addColorStop(.5,"#a855f7"),a.addColorStop(1,"#ff3da8"),o.shadowColor="rgba(0,0,0,0.85)",o.shadowBlur=24,o.fillStyle=a;let l=108;for(;o.measureText(n).width>964&&l>50;)l-=6,o.font=`900 ${l}px -apple-system, "SF Pro Display", "Segoe UI", system-ui, sans-serif`;if(o.fillText(n,1024/2,e?140:180),e){o.font='700 46px -apple-system, "SF Pro Text", "Segoe UI", system-ui, sans-serif';let d=46;for(;o.measureText(e).width>964&&d>24;)d-=3,o.font=`700 ${d}px -apple-system, "SF Pro Text", "Segoe UI", system-ui, sans-serif`;o.fillStyle="#f5f7ff",o.fillText(e,1024/2,248),o.shadowBlur=0,o.fillStyle=t,o.fillRect(1024/2-90,296,180,6)}let c=new dn(r);return c.colorSpace=Vt,c}function Mp(n){let e=K.camera,t=2*n*Math.tan(us.degToRad(e.fov/2));return{w:t*e.aspect,h:t}}function Ku(n,e,t){let i=new Wt({map:fE(n,e,t),transparent:!0,depthTest:!1,depthWrite:!1,opacity:0}),s=new oe(new Zn(1,360/1024),i);s.renderOrder=60,s.frustumCulled=!1;let r=2,o=Mp(r),a=Math.min(o.w*.86,o.h*1.9);return s.scale.setScalar(a),s.position.set(0,0,-r),K.camera.add(s),je.cards.push(s),s}function pE(){let e=Mp(2.05),t=new Wt({color:0,depthTest:!1,depthWrite:!1,transparent:!0,opacity:1}),i=[];for(let s of[1,-1]){let r=new oe(new Zn(1,1),t);r.scale.set(e.w*1.1,e.h*.09,1),r.position.set(0,s*(e.h/2-e.h*.045),-2.05),r.renderOrder=59,r.frustumCulled=!1,K.camera.add(r),i.push(r)}je.bars={bars:i,vs:e}}function _p(n){if(je.group){for(let t of je.group.children)di.delete(t);K.scene.remove(je.group)}let e=new gt;je.group=e,je.at=new Map;for(let t=0;t<8;t++)for(let i=0;i<8;i++){let s=n.board[t][i];if(!s)continue;let r=mE(s.type,s.color,t,i);e.add(r)}K.scene.add(e)}function mE(n,e,t,i){let s=na(n,e);try{Ql(s)}catch{}s.userData.phase=Math.random()*6,s.userData.square={r:t,c:i},s.userData.piece={type:n,color:e};let r=Mn(t,i);return s.position.set(r.x,qt,r.z),di.add(s),je.at.set(t+","+i,s),s}function gE(n){let e=je.at.get(n.fr+","+n.fc),t=n.enPassant?[n.fr,n.tc]:[n.tr,n.tc],i=n.captured?je.at.get(t[0]+","+t[1]):null;je.at.delete(n.fr+","+n.fc),i&&je.at.delete(t[0]+","+t[1]);let s=[];if(!e)return Promise.resolve();if(n.castle){let[r,o]=n.castle==="K"?[7,5]:[0,3],a=je.at.get(n.fr+","+r);je.at.delete(n.fr+","+r),s.push(tc(e,n.tr,n.tc,{dur:1250,height:.8}),tc(a,n.fr,o,{delay:160,dur:1250,height:1.25})),je.at.set(n.tr+","+n.tc,e),a&&je.at.set(n.fr+","+o,a)}else s.push(ha(e,n.tr,n.tc,{dur:n.piece==="n"?640:600,height:n.piece==="n"?1.1:.6,onLand:()=>{st.land(!!i),i&&i.parent&&(di.delete(i),Vl(i,n.captured))}}).then(async()=>{if(n.promotion){let r=await yp(e,n.promotion,n.color,Mn(n.tr,n.tc),{parent:je.group});e.visible=!1,je.at.set(n.tr+","+n.tc,r)}})),je.at.set(n.tr+","+n.tc,e);return e.userData.square={r:n.tr,c:n.tc},Promise.all(s)}function vp(n,e,t,i){return{pos:new I(n.x+Math.sin(i)*e,t,n.z+Math.cos(i)*e),look:n.clone().setY(.4)}}function xp(n){K.camera.position.copy(n.pos),K.camera.lookAt(n.look)}var yE=n=>n*n*(3-2*n);function my(){return!!je}function Zu({record:n=!1}={}){if(je)return Promise.resolve(!1);let e=bp();if(!e.length)return K.speak("Nothing to replay yet \u2013 play first!","think",!0),Promise.resolve(!1);let t=K.camera;je={hl:e,cards:[],record:n,t0:performance.now(),saved:{pos:t.position.clone(),target:K.controls.target.clone(),fov:t.fov},group:null,at:new Map,segments:[],done:null};let i=new Promise(l=>{je.done=l});K.hideEnd(),document.body.classList.add("cinema"),gs.active=!0,t.parent||K.scene.add(t),K.piecesGroup.visible=!1,K.hintsGroup.visible=!1,pE();let s=[],r=window.GardenChess.gameStatus({...K.state,history:[]}),o=K.resultText?K.resultText():"GG";s.push({kind:"title",dur:2});for(let l of e)s.push({kind:"hl",h:l,dur:l.kind==="mate"||l.kind==="final"?3.6:3});s.push({kind:"result",dur:2.2,big:o,small:"\u201E"+(K.lastQuote||"GG!")+"\u201C"});let a=0;for(let l of s)l.start=a,a+=l.dur;return je.total=a,je.segs=s,je.status=r,n&&vE(),st.whoosh&&st.whoosh(),gy(0),i}function gy(n){je.idx=n;let e=je.segs[n];for(let t of je.cards)t.parent&&t.parent.remove(t),t.material.map.dispose(),t.material.dispose(),t.geometry.dispose();if(je.cards=[],Xl(1),e.kind==="title"){let t=je.hl[0];_p(t.before),e.card=Ku("GROK BOT CHESS","Highlight-Replay","#ff3da8"),e.cam=i=>xp(vp(new I(0,0,0),11-i*2,3.2+i*2.8,-.9+i*1))}else if(e.kind==="hl"){let t=e.h;_p(t.before);let i=dE(t);e.card=Ku(i.big,i.small,t.kind==="mate"?"#ff3da8":"#ffd166");let s=Mn(t.m.tr,t.m.tc),r=Mn(t.m.fr,t.m.fc),o=s.clone().lerp(r,.35),a=t.m.color==="w"?1:-1,l=Math.atan2(a*.6,a)+(Math.random()-.5)*.6;e.cam=c=>xp(vp(o,5.2-c*1.6,3.4-c*1.2,l+c*.9)),e.moveAt=.55,e.played=!1,e.slowAt=t.m.captured||t.kind==="mate"?.55+(t.m.piece==="n"?.45:.32):null}else if(e.kind==="result"){e.card=Ku(e.big,e.small.length>60?e.small.slice(0,58)+"\u2026\u201C":e.small,"#2de2e6");let t=K.state;_p(t),e.cam=i=>xp(vp(new I(0,0,0),9+i*3,7+i*4,.6-i*.8)),st.whoosh&&st.whoosh()}}function _E(){if(!je)return;let n=(performance.now()-je.t0)/1e3;if(n>=je.total){ic();return}let e=je.idx;for(;e<je.segs.length-1&&n>=je.segs[e+1].start;)e++;e!==je.idx&&gy(e);let t=je.segs[je.idx],i=n-t.start,s=Math.min(1,i/t.dur);if(t.cam&&t.cam(yE(s)),t.card){let r;t.kind==="hl"?r=i<.15?i/.15:i<.5?1:Math.max(0,1-(i-.5)/.3):r=Math.min(1,i/.3)*Math.min(1,(t.dur-i)/.3),t.card.material.opacity=r,t.card.position.y=t.kind==="hl"?.42*Mp(2).h/2:0;let o=t.card.scale.x;t.card.scale.setScalar(o)}if(t.kind==="hl"){if(!t.played&&i>=t.moveAt&&(t.played=!0,gE(t.h.m)),t.slowAt!==null&&i>=t.slowAt&&!t.slowed&&(t.slowed=!0,Xl(.3)),t.slowed&&i>=t.slowAt+1.3&&Xl(1),t.h.kind==="mate"&&i>2.3&&!t.mateCard){t.mateCard=!0;let o=je.status.winner==="w"?"White":K.mode==="bot"?"Grok Bot":"Black";t.card2=Ku("MATE!",`${o} wins`,"#ff3da8"),K.shake(.18)}t.card2&&(t.card2.material.opacity=Math.min(1,(i-2.3)/.25))}}function ic(){if(!je)return;let n=je;Xl(1);for(let t of n.cards)t.parent&&t.parent.remove(t),t.material.map.dispose(),t.material.dispose(),t.geometry.dispose();if(n.bars)for(let t of n.bars.bars)t.parent&&t.parent.remove(t);if(n.group){for(let t of n.group.children)di.delete(t);K.scene.remove(n.group)}for(let t of[...di])(!t.parent||t.parent===n.group)&&di.delete(t);K.piecesGroup.visible=!0,K.hintsGroup.visible=!0;let e=K.camera;if(e.position.copy(n.saved.pos),K.controls.target.copy(n.saved.target),e.lookAt(n.saved.target),K.controls.update(),gs.active=!1,document.body.classList.remove("cinema"),je=null,n.recorder&&n.recorder.state!=="inactive")try{n.recorder.stop()}catch{}K.isGameOver()&&K.els.endOverlay.classList.add("open"),n.done&&n.done(!0)}function fa(){let n=document.createElement("canvas");if(!window.MediaRecorder||!n.captureStream)return null;let e=["video/webm;codecs=vp9","video/webm;codecs=vp8","video/webm","video/mp4;codecs=avc1","video/mp4"];for(let t of e)try{if(MediaRecorder.isTypeSupported(t))return t}catch{}return null}function vE(){let n=fa();if(n)try{let e=K.renderer.domElement.captureStream(30),t=Lu();t&&t.getAudioTracks().forEach(r=>e.addTrack(r));let i=new MediaRecorder(e,{mimeType:n,videoBitsPerSecond:6e6}),s=[];i.ondataavailable=r=>{r.data&&r.data.size&&s.push(r.data)},i.onstop=()=>{let r=new Blob(s,{type:n.split(";")[0]}),o=n.includes("mp4")?"mp4":"webm",a=document.createElement("a");a.href=URL.createObjectURL(r),a.download=`grok-bot-chess-replay-${new Date().toISOString().slice(0,10)}.${o}`,document.body.appendChild(a),a.click(),a.remove(),setTimeout(()=>URL.revokeObjectURL(a.href),3e4),window.__gbcLastVideo={size:r.size,type:r.type},K.speak("Video saved! Locally on your device \u2013 you decide where it goes. \u{1F3AC}","happy",!0),e.getVideoTracks().forEach(l=>l.stop())},i.start(250),je.recorder=i}catch{je.recorder=null}}function py(){let n=document.getElementById("endExtra");if(!n||n.dataset.ready)return;n.dataset.ready="1",n.innerHTML='<button type="button" id="btnReplay" class="btn primary">\u{1F3AC} Highlight-Replay</button><button type="button" id="btnVideo" class="btn">\u{1F4BE} Save video</button><div class="end-note" id="videoNote" hidden></div>',document.getElementById("btnReplay").addEventListener("click",()=>Zu());let e=document.getElementById("btnVideo");fa()||(e.title="Your browser does not support recording video from the canvas."),e.addEventListener("click",()=>{if(!fa()){let i=document.getElementById("videoNote");i.hidden=!1,i.textContent="Video export is not supported in this browser. Tip: start the replay and capture it with a screen recording (macOS: \u21E7\u23185).";return}Zu({record:!0})})}function yy(){py(),Qe.frame.push(_E);let n=Qe.stopCinematic;Qe.stopCinematic=()=>{n&&n(),ic()},window.addEventListener("keydown",t=>{je&&(t.key==="Escape"||t.key===" ")&&(t.preventDefault(),ic())});let e=Qe.end;Qe.end=t=>{e&&e(t),py();let i=document.getElementById("btnVideo");i&&i.classList.toggle("muted-btn",!fa())}}var xE={neon:"Neon gloss: classic, loud, irresistible. \u2728",chrome:"Liquid chrome! We wobble when we move. Totally professional.",glass:"Glass & circuits \u2013 now you can see what I\u2019m thinking. Hopefully nothing embarrassing.",lava:"Lava core activated. Things get really hot on check. \u{1F30B}"};function _y(){let n=K.settings;Xg.some(a=>a.id===n.skin)||(n.skin="neon"),n.fx!=="reduced"&&n.fx!=="full"&&(n.fx=window.matchMedia&&matchMedia("(prefers-reduced-motion: reduce)").matches?"reduced":"full"),n.giant===void 0&&(n.giant=!0),n.bubbles===void 0&&(n.bubbles=!0),$f(n.skin),kg(()=>n.skin),n.brightness>=60&&n.brightness<=120||(n.brightness=85),n.glow>=0&&n.glow<=100||(n.glow=60),Kl({brightness:n.brightness/100,glow:n.glow/100}),lp(n.fx);let e=[...document.querySelectorAll("[data-skin]")],t=[...document.querySelectorAll("[data-fx]")],i=()=>{e.forEach(a=>a.classList.toggle("active",a.dataset.skin===n.skin)),t.forEach(a=>a.classList.toggle("active",a.dataset.fx===n.fx))};i(),e.forEach(a=>a.addEventListener("click",()=>{n.skin!==a.dataset.skin&&(Sp(a.dataset.skin),i(),st.select(),Ht(xE[n.skin],"happy",!0))})),t.forEach(a=>a.addEventListener("click",()=>{n.fx=a.dataset.fx,lp(n.fx),Ci(),i(),st.select(),Ht(n.fx==="full"?"Effects on full \u2013 sparkle budget approved!":"Effects reduced. Your battery says thanks.","idle",!0)}));let s=(a,l,c,d)=>{let f=document.getElementById(a),h=document.getElementById(l);if(!f)return;f.value=n[c],h&&(h.textContent=n[c]+"%");let u=0;f.addEventListener("input",()=>{n[c]=+f.value,h&&(h.textContent=n[c]+"%"),d(),clearTimeout(u),u=setTimeout(Ci,150)}),f.addEventListener("keydown",m=>m.stopPropagation())};s("rngBright","outBright","brightness",()=>Kl({brightness:n.brightness/100})),s("rngGlow","outGlow","glow",()=>Kl({glow:n.glow/100}));let r=document.getElementById("chkGiant");r&&(r.checked=n.giant,r.addEventListener("change",()=>{uy(r.checked),Ht(r.checked?"Giant Grok is watching again. \u{1F440}":"Okay, I\u2019ll look away. Promise. Almost.","idle",!0)}));let o=document.getElementById("chkBubbles");o&&(o.checked=n.bubbles,o.addEventListener("change",()=>{n.bubbles=o.checked,Ci()}))}function Sp(n){let e=K.settings;e.skin=n,$f(n),Ci(),Lg()}var fi=window.GardenChess,Ju="abcdefgh",pr=(n,e)=>Ju[e]+(8-n);function ii(n){let e=[];for(let r=0;r<8;r++){let o="",a=0;for(let l=0;l<8;l++){let c=n.board[r][l];if(!c){a++;continue}a&&(o+=a,a=0),o+=c.color==="w"?c.type.toUpperCase():c.type}a&&(o+=a),e.push(o)}let t=n.castling||{w:{},b:{}},i=(t.w.K?"K":"")+(t.w.Q?"Q":"")+(t.b.K?"k":"")+(t.b.Q?"q":""),s="-";return n.ep&&fi.legalMoves({...n,history:[]}).some(r=>r.enPassant)&&(s=pr(n.ep.r,n.ep.c)),`${e.join("/")} ${n.turn} ${i||"-"} ${s} ${n.halfmove||0} ${n.fullmove||1}`}function pa(n){let e=String(n||"").trim().replace(/\s+/g," ");if(!e)return{error:"Please paste a FEN (e.g. from \u201CCopy position\u201D or from lichess)."};let t=e.split(" ");if(t.length<2)return{error:"The FEN is incomplete \u2013 at least the piece placement and side to move (w/b) are required."};let[i,s,r="-",o="-",a="0",l="1"]=t,c=i.split("/");if(c.length!==8)return{error:`The position needs exactly 8 ranks (found: ${c.length}).`};let d=Array.from({length:8},()=>Array(8).fill(null)),f={w:{k:0,p:0,all:0},b:{k:0,p:0,all:0}};for(let p=0;p<8;p++){let v=0;for(let M of c[p]){if(/[1-8]/.test(M)){v+=+M;continue}if(!/[prnbqkPRNBQK]/.test(M))return{error:`Unknown character \u201C${M}\u201D in rank ${8-p}.`};if(v>7)return{error:`Rank ${8-p} has more than 8 squares.`};let _=M===M.toUpperCase()?"w":"b",S=M.toLowerCase();if(d[p][v++]={color:_,type:S},f[_].all++,S==="k"&&f[_].k++,S==="p"&&f[_].p++,S==="p"&&(p===0||p===7))return{error:"Pawns cannot stand on the 1st or 8th rank."}}if(v!==8)return{error:`Rank ${8-p} has ${v} squares instead of 8.`}}if(f.w.k!==1||f.b.k!==1)return{error:"Each side needs exactly one king."};if(f.w.p>8||f.b.p>8||f.w.all>16||f.b.all>16)return{error:"Too many pieces or pawns for a real game."};if(s!=="w"&&s!=="b")return{error:"The side to move must be \u201Cw\u201D (White) or \u201Cb\u201D (Black)."};if(!/^(-|[KQkq]{1,4})$/.test(r))return{error:"Invalid castling rights \u2013 allowed are e.g. \u201CKQkq\u201D or \u201C-\u201D."};let h=(p,v,M,_)=>d[p][v]&&d[p][v].color===M&&d[p][v].type===_,u={w:{K:r.includes("K")&&h(7,4,"w","k")&&h(7,7,"w","r"),Q:r.includes("Q")&&h(7,4,"w","k")&&h(7,0,"w","r")},b:{K:r.includes("k")&&h(0,4,"b","k")&&h(0,7,"b","r"),Q:r.includes("q")&&h(0,4,"b","k")&&h(0,0,"b","r")}},m=null;if(o!=="-"){if(!/^[a-h][36]$/.test(o))return{error:`En passant square \u201C${o}\u201D is invalid.`};let p=Ju.indexOf(o[0]),v=8-+o[1];(s==="w"?v===2&&h(3,p,"b","p"):v===5&&h(4,p,"w","p"))&&(m={r:v,c:p})}let y={...fi.createGame(),board:d,turn:s,castling:u,ep:m,halfmove:Math.max(0,parseInt(a,10)||0),fullmove:Math.max(1,parseInt(l,10)||1),history:[],lastMove:null,moveNumber:0};if(fi.isInCheck(d,s==="w"?"b":"w"))return{error:"Invalid: the side NOT to move is in check."};let g=fi.gameStatus(y);return{state:y,status:g}}function Li(n,e){let t=fi.legalMoves({...n,history:[]}).find(i=>i.fr===e.fr&&i.fc===e.fc&&i.tr===e.tr&&i.tc===e.tc&&(i.promotion||"q")===(e.promotion||"q"));return t?fi.moveToSan({...n,history:[]},t):"?"}function ma(n){let e=[],t=n.history||[];for(let i=0;i<t.length;i++){let s=i+1<t.length?t[i+1].lastMove:n.lastMove;s&&e.push([t[i],s])}return e}function wp(n,{white:e="White",black:t="Black",result:i="*"}={}){let s=ma(n),r=s.length?s[0][0]:n,o=ii(r),a=o.startsWith("rnbqkbnr/pppppppp/8/8/8/8/PPPPPPPP/RNBQKBNR w KQkq -"),l=new Date,c=h=>String(h).padStart(2,"0"),d=[["Event","Grok Bot Chess"],["Site","Grok Bot Chess (offline)"],["Date",`${l.getFullYear()}.${c(l.getMonth()+1)}.${c(l.getDate())}`],["White",e],["Black",t],["Result",i]];a||d.push(["SetUp","1"],["FEN",o]);let f="";return s.forEach(([h,u],m)=>{let y=Li(h,u);h.turn==="w"?f+=`${h.fullmove}. ${y} `:f+=(m===0?`${h.fullmove}... `:"")+y+" "}),f+=i,d.map(([h,u])=>`[${h} "${u}"]`).join(`
`)+`

`+bE(f.trim(),78)}function bE(n,e){let t=[],i="";for(let s of n.split(" "))(i+" "+s).trim().length>e?(t.push(i.trim()),i=s):i+=" "+s;return i.trim()&&t.push(i.trim()),t.join(`
`)}function Ep(n){let e=String(n||""),t=e.match(/\[FEN\s+"([^"]+)"\]/),i;if(t){let d=pa(t[1]);if(d.error)return{error:"FEN im PGN: "+d.error};i=d.state}else i=fi.createGame();let s=e.replace(/\[[^\]]*\]/g," ").replace(/\{[^}]*\}/g," ").replace(/;[^\n]*/g," "),r=0,o="";for(let d of s)d==="("?r++:d===")"?r=Math.max(0,r-1):r||(o+=d);let a=o.replace(/\$\d+/g," ").replace(/\d+\.(\.\.)?/g," ").split(/\s+/).filter(d=>d&&!/^(1-0|0-1|1\/2-1\/2|\*)$/.test(d));if(!a.length)return{error:"No moves found in the PGN."};let l=d=>d.replace(/[+#?!]/g,"").replace(/0/g,"O").replace(/=/,"").replace(/^([NBRQK])/,"$1").replace(/e\.p\./,""),c=[];for(let d of a){let f=l(d),h=fi.legalMoves(i),u=h.find(m=>l(fi.moveToSan(i,m))===f)||h.find(m=>l(fi.moveToSan(i,m)).replace(/^([NBRQK])[a-h1-8]{1,2}(x?[a-h][1-8])/,"$1$2")===f.replace(/^([NBRQK])[a-h1-8]{1,2}(x?[a-h][1-8])/,"$1$2")&&h.filter(g=>l(fi.moveToSan(i,g)).replace(/^([NBRQK])[a-h1-8]{1,2}(x?[a-h][1-8])/,"$1$2")===f.replace(/^([NBRQK])[a-h1-8]{1,2}(x?[a-h][1-8])/,"$1$2")).length===1);if(!u)return{error:`Move \u201C${d}\u201D (no. ${Math.floor(c.length/2)+1}) is not possible in this position.`};if(c.push(fi.moveToSan(i,u)),i=fi.makeMove(i,u),!i)return{error:`Move \u201C${d}\u201D could not be played.`}}return{state:i,sans:c}}function mr(n){if(!n||n.length<4)return null;let e={fc:Ju.indexOf(n[0]),fr:8-+n[1],tc:Ju.indexOf(n[2]),tr:8-+n[3]};return n[4]&&(e.promotion=n[4]),e}function Tp(n){return pr(n.fr,n.fc)+pr(n.tr,n.tc)+(n.promotion&&n.promotion!=="q"?n.promotion:n.promotion?"q":"")}var jr=[{id:"ital",group:"Openings",title:"Italian Game",fen:"r1bqk1nr/pppp1ppp/2n5/2b1p3/2B1P3/5N2/PPPP1PPP/RNBQK2R w KQkq - 4 4",task:"White to move: play the typical plan of the Italian Game.",solution:["c3"],accept:["c3","O-O","d3"],kind:"opening",explain:"4.c3 prepares d2\u2013d4 and builds a strong pawn center (Giuoco Piano). 4.O-O or 4.d3 are also good, calm continuations."},{id:"span",group:"Openings",title:"Ruy L\xF3pez (Spanish Game)",fen:"r1bqkbnr/pppp1ppp/2n5/4p3/4P3/5N2/PPPP1PPP/RNBQKB1R w KQkq - 2 3",task:"White to move: which bishop move turns this into the Spanish Game?",solution:["Bb5"],accept:["Bb5"],kind:"opening",explain:"3.Bb5 attacks the knight on c6 \u2013 the defender of e5. That\u2019s the Spanish Game (Ruy L\xF3pez)."},{id:"sizi",group:"Openings",title:"Sicilian Defense",fen:"rnbqkbnr/pp2pppp/3p4/2p5/4P3/5N2/PPPP1PPP/RNBQKB1R w KQkq - 0 3",task:"White to move: open the game like in the Open Sicilian.",solution:["d4"],accept:["d4"],kind:"opening",explain:"3.d4 cxd4 4.Nxd4 \u2013 White opens the center and gets quick development (Open Sicilian)."},{id:"dg",group:"Openings",title:"Queen\u2019s Gambit",fen:"rnbqkbnr/ppp1pppp/8/3p4/3P4/8/PPP1PPPP/RNBQKBNR w KQkq - 0 2",task:"White to move: offer the Queen\u2019s Gambit.",solution:["c4"],accept:["c4"],kind:"opening",explain:"2.c4 attacks the central pawn on d5. If Black takes, White usually wins the pawn back and controls the center."},{id:"lon",group:"Openings",title:"London System",fen:"rnbqkb1r/ppp1pppp/5n2/3p4/3P4/5N2/PPP1PPPP/RNBQKB1R w KQkq - 2 3",task:"White to move: which bishop move is the trademark of the London System?",solution:["Bf4"],accept:["Bf4"],kind:"opening",explain:"3.Bf4 \u2013 the bishop comes out before e3. Then follow e3, c3, Bd3 and Nbd2: a solid, easy-to-learn system."},{id:"fra",group:"Openings",title:"French Defense",fen:"rnbqkbnr/pppp1ppp/4p3/8/4P3/8/PPPP1PPP/RNBQKBNR w KQkq - 0 2",task:"White to move: build the classic pawn center against the French.",solution:["d4"],accept:["d4"],kind:"opening",explain:"2.d4 \u2013 White puts two pawns in the center. Black strikes back with 2\u2026d5."},{id:"caro",group:"Openings",title:"Caro-Kann Defense",fen:"rnbqkbnr/pp1ppppp/2p5/8/4P3/8/PPPP1PPP/RNBQKBNR w KQkq - 0 2",task:"White to move: take the center against the Caro-Kann.",solution:["d4"],accept:["d4"],kind:"opening",explain:"2.d4 d5 \u2013 Black prepares \u2026d5 with c6 without locking in the c8 bishop. White secures the center first."},{id:"engl",group:"Openings",title:"English Opening",fen:"rnbqkbnr/pppppppp/8/8/8/8/PPPPPPPP/RNBQKBNR w KQkq - 0 1",task:"White to move: open the English way!",solution:["c4"],accept:["c4"],kind:"opening",explain:"1.c4 \u2013 the English Opening controls d5 from the flank. White often follows with g3, Bg2 and Nc3 (fianchetto)."},{id:"gabel",group:"Tactics",title:"Knight fork",fen:"q3k3/5ppp/8/1N6/8/8/4PPPP/6K1 w - - 0 1",task:"White to move and win the queen.",solution:["Nc7+"],accept:["Nc7+"],kind:"tactic",explain:"1.Nc7+! attacks king and queen at the same time (fork). After the king moves, 2.Nxa8 follows."},{id:"fessel",group:"Tactics",title:"Pin",fen:"4k3/ppp2ppp/8/4q3/8/8/PPP2PPP/R4RK1 w - - 0 1",task:"White to move and win the queen.",solution:["Rae1"],accept:["Rae1","Rfe1"],kind:"tactic",explain:"1.Rae1! pins the queen to its king: it can\u2019t leave the e-file and is lost for a rook."},{id:"spiess",group:"Tactics",title:"Skewer",fen:"8/5pp1/2k4q/8/8/8/5PPP/R5K1 w - - 0 1",task:"White to move and win the queen.",solution:["Ra6+"],accept:["Ra6+"],kind:"tactic",explain:"1.Ra6+! \u2013 check along the 6th rank. The king has to move, and the queen behind it falls: 2.Rxh6 (skewer)."},{id:"abzug",group:"Tactics",title:"Discovered attack",fen:"8/5ppk/4q3/8/4N3/8/5PPP/4R1K1 w - - 0 1",task:"White to move and win material.",solution:["Ng5+"],accept:["Ng5+","Nf6+"],kind:"tactic",explain:"1.Ng5+! \u2013 the knight gives check and at the same time opens the e-file: the rook on e1 attacks the queen (discovered attack)."},{id:"grund",group:"Tactics",title:"Back-rank mate",fen:"6k1/5ppp/8/8/8/8/5PPP/3R2K1 w - - 0 1",task:"White to move and mate.",solution:["Rd8#"],accept:["Rd8#"],kind:"tactic",explain:"1.Rd8# \u2013 Black\u2019s own pawns on f7, g7, h7 lock the king in. A typical back-rank mate."},{id:"erstickt",group:"Tactics",title:"Smothered mate",fen:"6rk/6pp/8/4N3/8/8/5PPP/6K1 w - - 0 1",task:"White to move and mate.",solution:["Nf7#"],accept:["Nf7#"],kind:"tactic",explain:"1.Nf7# \u2013 the king is surrounded by its own pieces (\u201Csmothered\u201D). Only a knight can deliver a mate like this."},{id:"doppel",group:"Tactics",title:"Double check",fen:"r2qkb1r/pp1n1ppp/8/8/4N3/8/PPP2PPP/4R1K1 w kq - 0 1",task:"White to move and mate.",solution:["Nd6#"],accept:["Nd6#","Nf6#"],kind:"tactic",explain:"1.Nd6# \u2013 double check by the knight and the rook on e1 (1.Nf6# works the same way). Against double check only a king move helps \u2013 and the king has no free square."},{id:"batterie",group:"Tactics",title:"Queen\u2013bishop battery",fen:"r4rk1/5ppp/8/7Q/8/3B4/5PPP/6K1 w - - 0 1",task:"White to move and mate.",solution:["Qxh7#"],accept:["Qxh7#"],kind:"tactic",explain:"1.Qxh7# \u2013 the bishop on d3 covers h7, the rook on f8 blocks the escape. A classic mate on h7."},{id:"bgabel",group:"Tactics",title:"Pawn fork",fen:"6k1/pp3ppp/2n1b3/8/3PP3/8/5PPP/3R2K1 w - - 0 1",task:"White to move and win a piece.",solution:["d5"],accept:["d5"],kind:"tactic",explain:"1.d5! attacks the knight on c6 and the bishop on e6 at the same time (pawn fork). One piece is lost."},{id:"kdk",group:"Endgames",title:"King + queen vs king",fen:"7k/5K2/8/6Q1/8/8/8/8 w - - 0 1",task:"White to move and mate \u2013 but beware of stalemate!",solution:["Qg7#"],accept:["Qg7#","Qg8#","Qh5#","Qh6#"],anyMate:!0,kind:"endgame",explain:"E.g. 1.Qg7# or 1.Qg8# (both protected by the king on f7) or 1.Qh5#/1.Qh6#. Careful: 1.Qg6?? would be stalemate \u2013 Black would have no move without being in check!"},{id:"ktk",group:"Endgames",title:"King + rook vs king",fen:"4k3/8/4K3/8/8/8/8/7R w - - 0 1",task:"White to move and mate.",solution:["Rh8#"],accept:["Rh8#"],kind:"endgame",explain:"1.Rh8# \u2013 the white king stands in opposition and covers d7, e7, f7; the rook controls the whole 8th rank."},{id:"treppe",group:"Endgames",title:"Two rooks: ladder mate",fen:"7k/R7/8/8/8/8/8/1R4K1 w - - 0 1",task:"White to move and mate.",solution:["Rb8#"],accept:["Rb8#"],kind:"endgame",explain:"1.Rb8# \u2013 the rook on a7 seals the 7th rank, the second rook mates on the 8th rank. That\u2019s how you \u201Cladder\u201D the king to the edge with two rooks."},{id:"oppo",group:"Endgames",title:"Opposition",fen:"8/8/4k3/8/8/4K3/4P3/8 w - - 0 1",task:"White to move and win \u2013 king in front of the pawn!",solution:["Ke4"],accept:["Ke4","Kd4","Kf4"],kind:"endgame",explain:"1.Ke4! (also 1.Kd4 or 1.Kf4) \u2013 the king goes IN FRONT of its pawn. Thanks to the spare move e2\u2013e3, White later gains the opposition and pushes the black king aside. A passive move like 1.Kf3? only draws."},{id:"lucena",group:"Endgames",title:"Lucena position (building a bridge)",fen:"1K6/1P1k4/8/8/8/8/r7/2R5 w - - 0 1",task:"White to move and win \u2013 build the bridge!",solution:["Rd1+"],accept:["Rd1+"],kind:"endgame",explain:"1.Rd1+ Ke7 2.Rd4! Ra1 3.Kc7 Rc1+ 4.Kb6 Rb1+ 5.Kc6 Rc1+ 6.Kb5 Rb1+ 7.Rb4 \u2013 the rook builds the \u201Cbridge\u201D against the checks."},{id:"philidor",group:"Endgames",title:"Philidor position",fen:"4k3/R7/8/3KP3/8/8/8/1r6 b - - 0 1",task:"Black to move and hold the draw.",solution:["Rb6"],accept:["Rb6"],kind:"endgame",explain:"1\u2026Rb6! \u2013 the rook holds the 6th rank and keeps the white king from advancing. If the pawn moves to e6, the rook checks from behind (\u2026Rb1)."},{id:"quadrat",group:"Endgames",title:"Rule of the square",fen:"8/8/8/5k2/P7/8/8/7K w - - 0 1",task:"White to move and win: can the black king reach the square?",solution:["a5"],accept:["a5"],kind:"endgame",explain:"1.a5! \u2013 the king on f5 can no longer reach the pawn\u2019s square (a5\u2013d5\u2013d8\u2013a8): 1\u2026Ke6 2.a6 Kd7 3.a7 Kc7 4.a8=Q. If White moves the king instead (1.Kg2?), Black steps into the square with 1\u2026Ke5 and catches the pawn."},{id:"durch",group:"Endgames",title:"Pawn breakthrough",fen:"7k/ppp5/8/PPP5/8/8/8/7K w - - 0 1",task:"White to move and win.",solution:["b6"],accept:["b6"],kind:"endgame",explain:"1.b6! cxb6 (1\u2026axb6 2.c6! bxc6 3.a6) 2.a6! bxa6 3.c6 \u2013 one of the pawns runs through to promote."}];var vy=new Map;function ge(n,e,...t){if(!e||!e.length)return"";let i=Math.floor(Math.random()*e.length),s=vy.get(n);e.length>1&&i===s&&(i=(i+1+Math.floor(Math.random()*(e.length-1)))%e.length),vy.set(n,i);let r=e[i];return typeof r=="function"?r(...t):r}var Lt=n=>n&&n.charAt(0).toUpperCase()+n.slice(1),Rp={p:"pawn",n:"knight",b:"bishop",r:"rook",q:"queen",k:"king"},by={...Rp,n:"horse"},SE={def:"the",dein:"your",ein:"a",their:"their"},Di=(n,e=!1,t="nom")=>(e?by:Rp)[n],de=(n,e="nom",t="def",i=!1)=>`${SE[t]||"the"} ${Di(n,i,e)}`;var Ap=(n,e=!1)=>(e?by:Rp)[n],xy={N:"n",B:"b",R:"r",Q:"q",K:"k"},yr=n=>String(n);function My(n){let e=String(n),t={san:e,castle:null,type:"p",to:"",capture:!1,promo:null,check:/\+$/.test(e),mate:/#$/.test(e)};if(e.startsWith("O-O-O"))return t.castle="long",t.type="k",t;if(e.startsWith("O-O"))return t.castle="short",t.type="k",t;let i=e.match(/^([NBRQK])?([a-h]?[1-8]?)(x)?([a-h][1-8])(=([NBRQ]))?([+#])?/);return i&&(t.type=i[1]?xy[i[1]]:"p",t.capture=!!i[3],t.to=i[4],t.promo=i[6]?xy[i[6]]:null),t}function pi(n,e=!1){let t=My(n),i;if(t.castle)i=t.castle==="long"?"castles queenside":"castles kingside";else if(t.to)i=`${Ap(t.type,e)} ${t.capture?"takes on":"to"} ${t.to}${t.promo?`, promoting to a ${Ap(t.promo,e)}`:""}`;else return yr(n);return t.mate?i+=", checkmate":t.check&&(i+=", with check"),i}var Qt=(n,e=!1)=>e?pi(n,!0):`${pi(n)} (${yr(n)})`;function Cp(n,e=!1){let t=My(n);return t.castle?t.castle==="long"?"castle queenside":"castle kingside":t.to?t.promo?`push the pawn to ${t.to} and promote it to a ${Ap(t.promo,e)}`:t.capture?`take on ${t.to} with ${de(t.type,"dat","def",e)}`:`move ${de(t.type,"acc","def",e)} to ${t.to}`:`play ${yr(n)}`}var wE=["zero","one","two","three","four","five","six","seven","eight","nine","ten"],gr=n=>n===1?"one move":`${wE[n]||n} moves`;var ga=n=>{let e=Math.abs(n);return e<90?"half a pawn":e<150?"about a pawn":e<190?"a pawn and a half":e<260?"about two pawns":e<450?"about a whole piece":e<800?"about a rook":"basically the whole game"},Qr=n=>n===1?"a pawn":n===2?"two pawns":n===3?"three points, so about a minor piece":n===5?"five points, so about a rook":n===9?"nine points, as much as a queen":`${n} points`;function sc(n,e,{opp:t="your opponent",kid:i=!1}={}){let s=Lt(t);if(e!=null&&e!==0){let l=Math.abs(e);return i?e>0?ge("k-mate+",["There\u2019s a checkmate for you! Can you find it? \u{1F3AF}","You can catch the king soon! \u{1F3AF}"]):ge("k-mate-",["Careful, your king is in big danger!","Watch your king closely, it\u2019s in danger!"]):e>0?ge("mate+",[`There\u2019s a mate in ${gr(l)} for you!`,`You have a forced mate in ${gr(l)}. Don\u2019t let go now!`,`Mate in ${gr(l)} for you. That smells like victory!`]):ge("mate-",[`Careful, ${t} has a mate in ${gr(l)} on the board.`,`Honestly, it looks bad: ${t} has a mate in ${gr(l)}.`,`Watch out! ${s} can checkmate in ${gr(l)}.`])}let r=n||0,o=Math.abs(r),a=r>0;return i?o<35?ge("k-eq",["You\u2019re about even. Everything is still open!","It\u2019s a tie! Every move counts now.","It\u2019s still wide open, nobody is really ahead."]):o<120?a?ge("k-g1",["You\u2019re a tiny bit better. \u{1F642}","You\u2019re a little bit ahead!"]):ge("k-b1",[`${s} is a tiny bit better. You can catch up!`,`${s} is a little ahead. But there\u2019s still a lot to play for!`]):o<300?a?ge("k-g2",["You\u2019re better! Keep it up! \u{1F4AA}","This looks good for you! \u{1F4AA}"]):ge("k-b2",[`${s} is better. Be careful and look for chances!`,`${s} is ahead. Look closely, maybe you\u2019ll find a trick!`]):a?ge("k-g3",["You\u2019re much better. Now finish the game calmly! \u{1F3C6}","Great, you\u2019re way ahead! Just don\u2019t give anything away. \u{1F3C6}"]):ge("k-b3",["This is tough right now. But keep fighting, everyone makes mistakes!","Phew, this is tricky. Don\u2019t give up, even pros turn games around!"]):o<35?ge("eq",["You\u2019re about even.","The position is pretty balanced.","Nobody is really ahead right now.","Everything is in balance, anything can still happen."]):a?o<70?ge("g1",["You\u2019re a touch better.","You\u2019re slightly ahead, about half a pawn.","A little bit better for you, about half a pawn."]):o<150?ge("g2",["You\u2019re somewhat better, about a pawn.","You\u2019re a bit ahead, roughly a pawn\u2019s worth.","Slight advantage for you, about a pawn."]):o<260?ge("g3",[`You\u2019re clearly better, that\u2019s ${ga(r)}.`,`You have a solid advantage, ${ga(r)}.`,`This is going well for you: roughly ${ga(r)} ahead.`]):o<450?ge("g4",["You\u2019re much better, about a whole piece.","This looks really good for you, about a piece ahead."]):ge("g5",["This is as good as won.","This should be winning. Now just bring it home cleanly.","Honestly: this is pretty much done."]):o<70?ge("b1",[`${s} is a touch better.`,`${s} is slightly ahead, about half a pawn.`]):o<150?ge("b2",[`${s} is somewhat better, about a pawn.`,`${s} is a bit ahead, about a pawn.`]):o<260?ge("b3",[`${s} is clearly better, roughly ${ga(r)}.`,`Here ${t} has a solid advantage, ${ga(r)}.`]):o<450?ge("b4",[`${s} is much better, about a whole piece.`,`This looks difficult, ${t} is about a piece ahead.`]):ge("b5",[`Honestly, it looks grim, ${t} is winning. But no giving up!`,`${s} is pretty much winning. Look for tricks, sometimes things still happen!`])}var rc=n=>ga(n),ju={K:"King",Q:"Queen",R:"Rook",B:"Bishop",N:"Knight"};function Pp(n){let e=String(n);e=e.replace(/[\u{1F000}-\u{1FAFF}\u{2600}-\u{27BF}\u{FE0F}\u{200D}]/gu,""),e=e.replace(/\s*\(([^()]*)\)/g,(i,s)=>/[+−±-]?\d|[KQRBN]?[a-h]?[1-8]?x?[a-h][1-8]|O-O/.test(s)?"":`, ${s},`),e=e.replace(/[+−±]\s?\d+(?:[.,]\d+)?/g,"");let t="(?:\\d+\\.(?:\\.\\.|\u2026)?\\s*)?(?:O-O(?:-O)?|[KQRBN]?[a-h]?[1-8]?x?[a-h][1-8](?:=[QRBN])?)[+#]?[!?]*";return e=e.replace(new RegExp(`(?<![\\w])${t}(?:\\s+${t})+(?![\\w])`,"g"),i=>i.trim().split(/\s+(?=(?:\d+\.)?[KQRBNa-hO])/).join(", ")),e=e.replace(/\b\d+\.(?:\.\.|…)?\s*(?=[KQRBNa-hO])/g,""),e=e.replace(/\bO-O-O\b/g,"castles queenside").replace(/\bO-O\b/g,"castles kingside"),e=e.replace(/\b([a-h][1-8])\s*[–-]\s*([a-h][1-8])\b/g,"$1 to $2"),e=e.replace(/\b([KQRBN])([a-h]?[1-8]?)(x?)([a-h][1-8])(?:=([QRBN]))?([+#])?(?![a-z])/g,(i,s,r,o,a,l,c)=>`${ju[s]} ${o?"takes on":"to"} ${a}${l?", promoting to "+ju[l]:""}${c==="#"?", checkmate":c==="+"?", check":""}`),e=e.replace(/\b([a-h])x([a-h][1-8])(?:=([QRBN]))?([+#])?/g,(i,s,r,o,a)=>`pawn takes on ${r}${o?", promoting to "+ju[o]:""}${a==="#"?", checkmate":a==="+"?", check":""}`),e=e.replace(/\b([a-h][1-8])=([QRBN])/g,(i,s,r)=>`${s}, promoting to ${ju[r]}`),e=e.replace(/\b([a-h][1-8])([+#])/g,(i,s,r)=>`${s}${r==="#"?", checkmate":", check"}`),e=e.replace(/[→←↑↓⇒⟶]/g,", ").replace(/\s[–—]\s/g,", ").replace(/[·•]/g,". ").replace(/…/g," ").replace(/[„“”"«»‚*_#~^<>|\\/]/g,"").replace(/[+±−]/g," "),e=e.replace(/\s+([,.!?;:])/g,"$1").replace(/,\s*([:;.!?])/g,"$1").replace(/([.!?:;])\s*,/g,"$1").replace(/([,.!?;:])\1+/g,"$1").replace(/\s{2,}/g," ").replace(/^[,.\s]+/,"").trim(),e}var Ip=(n,e="def",t="acc",i=!1)=>`${de(n.t[0].type,t,e,i)} on ${n.t[0].sq} and ${de(n.t[1].type,t,e,i)} on ${n.t[1].sq}`,Sy=n=>`${de(n.t[0].type,"acc","def",!0)} and ${de(n.t[1].type,"acc","def",!0)}`,wy=n=>n.nd===0?"and nobody defends it":n.nd===1&&n.defenders&&n.defenders[0]?`and it\u2019s only defended by the ${Di(n.defenders[0])}`:`and there are ${n.na} attackers against ${n.nd} defenders`,EE=n=>n.nd===0?"and it\u2019s undefended":n.nd===1?"and it\u2019s only defended once":`with ${n.na} attackers against ${n.nd} defenders`,Qu={mate:{du:[()=>"And that\u2019s checkmate! It doesn\u2019t get better than that.",()=>"Checkmate! The king has nowhere left to go.",()=>"That\u2019s mate on the spot. Enjoy the moment!"],they:[(n,e)=>`${e.N} would have checkmate right away.`,(n,e)=>`That would be instant mate for ${e.N}.`],kid:[()=>"The king is caught \u2013 checkmate! \u{1F389}",()=>"Checkmate! The king can\u2019t go anywhere anymore. Super!"]},mateN:{du:[n=>`This forces mate in ${n.nw}, no matter what the other side does.`,n=>`From here, mate in ${n.nw} can\u2019t be stopped.`,n=>`This starts a forced mate in ${n.nw}.`],they:[(n,e)=>`After that, ${e.N} would have mate in ${n.nw}.`,(n,e)=>`With that, ${e.N} could force mate in ${n.nw}.`],kid:[()=>"With this you can catch the king very soon!",()=>"If you pay close attention now, the king will be caught soon!"]},promo:{du:[n=>n.promo==="q"?`Your pawn runs through and becomes a queen on ${n.to}. Huge upgrade!`:`The pawn becomes a ${Di(n.promo)} on ${n.to}. Sounds odd, but it\u2019s exactly right here.`,n=>n.promo==="q"?`The pawn turns into a queen on ${n.to}. It doesn\u2019t get better.`:`Underpromotion: the pawn becomes a ${Di(n.promo)}, and that\u2019s exactly what the position needs.`],they:[(n,e)=>`${e.N} could promote the pawn on ${n.to} to a ${n.promo==="q"?"queen":Di(n.promo)}.`],kid:[()=>"Your pawn reaches the other side and becomes a queen! \u{1F451}",()=>"The little pawn makes it all the way and becomes a queen! \u{1F451}"]},hanging:{du:[n=>`${Lt(de(n.cap))} on ${n.to} is undefended \u2013 you can simply take it.`,n=>`${Lt(de(n.cap))} on ${n.to} is just hanging there, completely undefended. Free material, grab it!`,n=>`Grab the undefended ${Di(n.cap)} on ${n.to} \u2013 nobody defends it.`],they:[(n,e)=>`${e.N} could simply take ${de(n.cap,"acc","dein")} on ${n.to}, it\u2019s undefended.`,(n,e)=>`${Lt(de(n.cap,"nom","dein"))} on ${n.to} is undefended, and ${e.N} has surely noticed.`],kid:[()=>"There\u2019s a piece with no protection at all. You can just take it!",n=>`Oops, nobody is guarding ${de(n.cap,"acc","def",!0)} of your opponent. Grab it!`]},winMat:{du:[n=>`${Lt(de(n.mover,"nom","dein"))} takes ${de(n.cap,"acc")} on ${n.to}. It pays off even if they recapture.`,n=>`You give less than you get: ${Di(n.mover)} for ${Di(n.cap)}. Good deal!`],they:[(n,e)=>`${e.N} could take ${de(n.cap,"acc","dein")} on ${n.to} with ${de(n.mover,"dat")} and win material.`],kid:[()=>"You give a small piece and get a bigger one. Good trade!",()=>"Small piece for big piece \u2013 that\u2019s a really good deal!"]},trade:{du:[n=>n.ahead?`You trade ${de(n.cap,"acc")} on ${n.to}. When you\u2019re ahead, trading is exactly right.`:`A fair trade on ${n.to}: ${Di(n.cap)} for ${Di(n.cap)}.`,n=>n.ahead?"Just trade. With your lead, every endgame gets easier.":`You trade off ${de(n.cap,"acc")}, which makes the board a bit simpler.`],they:[(n,e)=>`${e.N} could trade ${de(n.cap,"acc")} on ${n.to}.`],kid:[()=>"You trade pieces of equal strength. That\u2019s fair.",()=>"Same for same \u2013 a fair trade."]},capture:{du:[n=>`You take ${de(n.cap,"acc")} on ${n.to}.`,n=>`You capture ${de(n.cap,"acc")} on ${n.to}.`],they:[(n,e)=>`${e.N} could take ${de(n.cap,"acc","dein")} on ${n.to}.`],kid:[n=>`With this you capture ${de(n.cap,"acc","def",!0)}.`,n=>`With this you grab ${de(n.cap,"acc","def",!0)}!`]},check:{du:[()=>"And it\u2019s check, so the king has to respond first.",()=>"You give check, which takes away the other side\u2019s tempo.",()=>"With check \u2013 so no time for counterattacks."],they:[(n,e)=>`That would be check from ${e.N}.`,()=>"And with check, too."],kid:[()=>"Check! The king has to respond now.",()=>"You give check \u2013 the king has to move!"]},fork:{du:[n=>`${n.gabel?"Fork! ":"Double attack! "}${Lt(de(n.piece,"nom","dein"))} on ${n.from} attacks ${Ip(n)} at the same time.${n.safe?" They can\u2019t save both.":""}`,n=>`${Lt(de(n.piece,"nom","dein"))} on ${n.from} has ${Ip(n)} in its sights at once. ${n.gabel?"A classic fork.":"A nice double attack."}${n.safe?" One of them will fall.":""}`],they:[(n,e)=>`${e.N} would then have a ${n.gabel?"fork":"double attack"}: ${de(n.piece,"nom")} on ${n.from} would attack ${Ip(n,"dein")} at the same time.`],kid:[n=>`Look, ${de(n.piece,"nom","dein",!0)} attacks two pieces at once: ${Sy(n)}! That\u2019s called a fork.${n.safe?" You can grab one of them.":""}`,n=>`Two at once! ${Lt(de(n.piece,"nom","dein",!0))} attacks ${Sy(n)} at the same time. That\u2019s a fork!`]},threat:{du:[n=>n.na?`This attacks ${n.tgt==="p"?"the pawn on "+n.sq:de(n.tgt,"acc")+" on "+n.sq}, ${wy(n)}.`:`This attacks ${de(n.tgt,"acc")} on ${n.sq}.`,n=>n.na?`${Lt(de(n.piece,"nom","dein"))} targets ${n.sq}, ${wy(n)}.`:`${Lt(de(n.piece,"nom","dein"))} takes aim at ${de(n.tgt,"acc")} on ${n.sq}.`],they:[(n,e)=>n.na?`${e.N} would then attack ${n.sq}, ${EE(n)}.`:`${e.N} would attack ${de(n.tgt,"acc","dein")} on ${n.sq}.`],kid:[n=>`With this you attack ${de(n.tgt,"acc","def",!0)}. Let\u2019s see if your opponent notices!`,n=>`With this you threaten ${de(n.tgt,"acc","def",!0)}. Now your opponent has to be careful!`]},pin:{du:[n=>n.abs?`You pin ${de(n.pinned,"acc")} on ${n.sq} to the king. It can\u2019t move anymore.`:`You pin ${de(n.pinned,"acc")} on ${n.sq} to ${de(n.behind,"acc")}. If it moves away, ${de(n.behind)} is next.`,n=>`Pin: ${de(n.pinned)} on ${n.sq} is stuck now, because ${de(n.behind)} stands behind it.`],they:[(n,e)=>`${e.N} could pin ${de(n.pinned,"acc","dein")} on ${n.sq} to ${n.abs?"your king":de(n.behind,"acc","dein")}.`],kid:[n=>n.abs?"Your opponent\u2019s piece is nailed down now, because their king is behind it. That\u2019s called a pin.":"Your opponent\u2019s piece is nailed down now. If it moves away, something valuable behind it is exposed. That\u2019s called a pin."]},skewer:{du:[n=>`Skewer! ${Lt(de(n.front))} has to move, and then ${de(n.back)} behind it is next.`,n=>`${Lt(de(n.front))} is in the way and has to step aside. Behind it waits ${de(n.back)}. A classic skewer.`],they:[(n,e)=>`${e.N} would have a skewer: ${de(n.front,"nom","dein")} would have to move, and ${de(n.back,"nom","dein")} behind it would be next.`],kid:[()=>"The valuable piece has to run away, and then you grab the one behind it. That\u2019s a skewer!"]},discCheck:{du:[n=>n.double?"Double check! Only a king move can help now.":`Discovered check! Your move opens the line for ${de(n.via,"acc","dein")}.`,n=>n.double?"Double check \u2013 two pieces give check at once. The king has to run.":`You move away, and suddenly ${de(n.via,"nom","dein")} gives check. Discovered check!`],they:[(n,e)=>n.double?`${e.N} would have a double check.`:`${e.N} would have a discovered check.`],kid:[()=>"When your piece steps aside, it clears the way, and another piece gives check. Discovered check!"]},discovered:{du:[n=>`Discovered attack: your move opens the line, and now ${de(n.via,"nom","dein")} attacks ${de(n.tgt,"acc")} on ${n.sq}.`,n=>`Hidden attack! Behind your move, ${de(n.via,"nom","dein")} is unleashed and targets ${de(n.tgt,"acc")} on ${n.sq}.`],they:[(n,e)=>`${e.N} would have a discovered attack on ${de(n.tgt,"acc","dein")} on ${n.sq}.`],kid:[()=>"When your piece steps aside, another one can attack. Surprise!"]},mateThreat:{du:[()=>"This threatens mate on the next move.",()=>"Now mate is threatened. The other side has to look very carefully.",()=>"And suddenly there\u2019s a mate threat on the board."],they:[(n,e)=>`${e.N} would then threaten mate.`,(n,e)=>`After that, ${e.N} threatens mate.`],kid:[()=>"With this you threaten to catch the king on the next move!"]},rescue:{du:[n=>`${Lt(de(n.piece,"nom","dein"))} was under attack. On ${n.to} it\u2019s safe.`,n=>`You bring ${de(n.piece,"acc","dein")} to safety \u2013 nobody can get at it on ${n.to}.`],they:[(n,e)=>`${e.N} would bring ${de(n.piece,"acc")} to safety.`],kid:[()=>"Your piece was attacked. Here it\u2019s safe again.",()=>"Phew, rescued! Nothing can happen to your piece here."]},defend:{du:[n=>`This defends ${de(n.prot,"acc","dein")} on ${n.psq}, which ${de(n.att)} on ${n.asq} is attacking right now.`,n=>`${Lt(de(n.prot))} on ${n.psq} is attacked by the ${Di(n.att)} on ${n.asq}. Now it\u2019s defended.`],they:[(n,e)=>`${e.N} would defend ${de(n.prot,"acc")} on ${n.psq}.`],kid:[n=>`With this you protect ${de(n.prot,"acc","dein",!0)} on ${n.psq}.`,n=>`Now someone is looking after ${de(n.prot,"acc","dein",!0)}. Well done!`]},castle:{du:[()=>"Castling: your king gets to safety and the rook joins the game.",()=>"King into the corner. The rook becomes active at the same time.",()=>"First, get the king to safety. Castling is never wrong."],they:[(n,e)=>`${e.N} would castle.`],kid:[()=>"Castling! Your king hides behind its pawns, and the rook comes out."]},evade:{du:[n=>n.king?"Your king steps out of check.":"This blocks the check.",n=>n.king?"The king has to get out of check, and it\u2019s okay here.":"The check is parried."],they:[(n,e)=>`${e.N} would parry the check.`],kid:[()=>"Your king is in check. You have to save it first!"]},develop:{du:[n=>`You bring ${de(n.piece,"acc","dein")} into the game. In the opening, every active piece counts.`,()=>"Another piece off the back rank. That\u2019s exactly how the opening should go.",n=>`${Lt(de(n.piece,"nom","dein"))} comes out. Development first!`],they:[(n,e)=>`${e.N} would develop ${de(n.piece,"acc")}.`],kid:[n=>`With this you bring ${de(n.piece,"acc","dein",!0)} into the game. At the start, all pieces should join in!`]},center:{du:[n=>n.piece==="p"?`A pawn on ${n.to}, right in the center. Classic and strong.`:`The knight on ${n.to} is excellent \u2013 from the center it reaches eight squares.`,n=>n.piece==="p"?`With ${n.to} you occupy the center and take important squares away from the other side.`:"A knight is strongest in the center, and that\u2019s exactly where it is now."],they:[(n,e)=>`${e.N} would occupy the center.`],kid:[()=>"You go to the middle of the board. The middle is super important!",()=>"Into the middle! From there your piece can do the most."]},passer:{du:[n=>`Your passed pawn moves on to ${n.to}. No enemy pawn can stop it anymore.`,()=>"The passed pawn is marching. No enemy pawn can stop it now."],they:[(n,e)=>`${e.N} would push the passed pawn to ${n.to}.`],kid:[()=>"This pawn has a free road ahead! Run, little pawn!"]},openFile:{du:[n=>`The rook goes to the open ${n.file}-file. It can put real pressure on from there.`,n=>`Open ${n.file}-file \u2013 that\u2019s where rooks belong.`],they:[(n,e)=>`${e.N} would take the open ${n.file}-file.`],kid:[()=>"Your rook moves onto an empty road. It can drive far from there!"]},kingAct:{du:[()=>"No queens left on the board, so the king can join the fight.",()=>"In the endgame the king is a real fighting piece. Bring it forward."],they:[(n,e)=>`${e.N} would activate the king.`],kid:[()=>"Now, near the end, the king can bravely join in."]},active:{du:[n=>`${Lt(de(n.piece))} is much more active on ${n.to} \u2013 from there it controls ${n.n} squares instead of ${n.m}.`,n=>`On ${n.to}, ${de(n.piece,"nom","dein")} does more: ${n.n} squares instead of ${n.m}.`],they:[(n,e)=>`${e.N} would improve ${de(n.piece,"acc")} to ${n.to}.`],kid:[n=>`There ${de(n.piece,"nom","dein",!0)} has much more room to move.`]},opens:{du:[n=>`The pawn move clears the way for ${de(n.via,"acc","dein")}.`,n=>`Small pawn move, big effect: ${de(n.via,"nom","dein")} gets free.`],they:[(n,e)=>`${e.N} would make room for ${de(n.via,"acc")}.`],kid:[n=>`With this you clear the way for ${de(n.via,"acc","dein",!0)}.`]},quiet:{du:[()=>"Honestly, not a spectacular move, but it holds everything together.",()=>"Modest but solid. Sometimes the quiet move is the best one.",()=>"No fireworks, just a sensible move that keeps your position stable."],they:[(n,e)=>`Nothing wild \u2013 ${e.N} would just keep playing calmly.`],kid:[()=>"A calm, good move. Not every move has to be magic!",()=>"A good, safe move."]}};Qu.none=Qu.quiet;function ya(n,e="du",t={}){let i=Qu[n.key]||Qu.quiet,s=i[e]||i.du;return ge(`r-${n.key}-${e}`,s,n.data||{},{N:t.N||"your opponent"})}var Ey={mate:()=>["It can deliver checkmate right away!","There\u2019s a mate in there. Can you find it?"],mateN:()=>["You can force mate with it. Calculate carefully!","There\u2019s a forced mate hidden here."],promo:()=>["It wants to become a queen!","That pawn has big plans."],hanging:()=>["Something of your opponent\u2019s is undefended.","Something is hanging on your opponent\u2019s side. Eyes open!"],winMat:()=>["There\u2019s material to win.","You can win material there."],fork:()=>["It can attack two things at once.","Keyword: fork."],pin:()=>["You can pin something with it.","Think about a pin."],skewer:()=>["There\u2019s a skewer in there.","Two enemy pieces stand on one line. Skewer?"],discCheck:()=>["When it moves, a line opens up. Keyword: discovered check!"],discovered:()=>["When it moves, a line opens for another piece."],mateThreat:()=>["You can threaten mate with it.","A mate threat is possible."],check:()=>["A check is really useful here."],threat:()=>["It can attack something valuable.","You can put on pressure with it."],rescue:()=>["It\u2019s under fire. Bring it to safety."],defend:()=>["One of your pieces needs support right now."],castle:()=>["Think about your king\u2019s safety."],evade:()=>["First you have to get out of check."],develop:()=>["It finally wants to join the game.","It\u2019s still sitting on the bench."],center:()=>["The center is calling!","The middle is waiting for you."],passer:()=>["The passed pawn wants to run."],openFile:()=>["There\u2019s an open file available."],kingAct:()=>["In the endgame the king is a really strong piece."],trade:()=>["A trade is on offer."],capture:()=>["It can capture something."],active:()=>["It would be much more effective somewhere else."],opens:()=>["One small pawn move, and another piece gets free."],quiet:()=>["It has a good, calm move.","Nothing wild, but there\u2019s a solid move."]},TE={mate:()=>"it can catch the king!",mateN:()=>"with it you can catch the king soon!",promo:()=>"it wants to reach the other side and become a queen!",hanging:()=>"your opponent has a piece with no protection at all!",winMat:()=>"with it you can grab a bigger piece!",fork:()=>"it can attack two pieces at once!",check:()=>"with it you can give check!",threat:()=>"it can attack a valuable piece!",rescue:()=>"it\u2019s being attacked. Bring it to safety!",castle:()=>"it wants to get to safety. Do you know castling?",evade:()=>"it\u2019s in check. Save it!",develop:()=>"it wants to play too!",center:()=>"it wants to go to the middle!",defend:()=>"it can help another piece!"};function oc(n,e,t,i=!1){if(i){let r=(TE[t]||(()=>"it has a really good move!"))(n);return ge("k-hint",[`Look at ${de(n,"acc","dein",!0)} on ${e} \u2013 ${r}`,`Look, ${de(n,"nom","dein",!0)} on ${e}: ${r}`])}let s=ge(`h-${t}`,(Ey[t]||Ey.quiet)(n));return ge("hint",[`Take a look at ${de(n,"acc","dein")} on ${e}. ${s}`,`Little tip: ${de(n,"nom","dein")} on ${e}. ${s}`,`I won\u2019t give it all away, but look at ${de(n,"acc","dein")} on ${e}. ${s}`])}var Jt=window.GardenChess,_t={p:1,n:3,b:3,r:5,q:9,k:100};var AE=n=>n==="w"?"b":"w",Np=yr,pt=n=>document.getElementById(n),mn={worker:null,ready:!1,failed:!1,loading:null,busy:!1,queue:Promise.resolve(),name:"Stockfish 19 (lite)"};function RE(n){return new Promise((e,t)=>{let i=document.createElement("script");i.src=n,i.onload=e,i.onerror=()=>t(new Error("load "+n)),document.head.appendChild(i)})}function Ly(){return mn.loading||(mn.loading=(async()=>{try{window.GBC_SF_SRC||await RE("js/stockfish-src.js");let n=URL.createObjectURL(new Blob([window.GBC_SF_SRC],{type:"application/javascript"})),e=new Worker(n);mn.worker=e,await new Promise((t,i)=>{let s=setTimeout(()=>i(new Error("timeout")),2e4),r=o=>{String(o.data).startsWith("readyok")&&(clearTimeout(s),e.removeEventListener("message",r),t())};e.addEventListener("message",r),e.addEventListener("error",o=>{clearTimeout(s),i(o)}),e.postMessage("uci"),e.postMessage("setoption name Hash value 32"),e.postMessage("isready")}),mn.ready=!0}catch(n){console.info("[Coach] Stockfish unavailable \u2013 using built-in engine.",n&&n.message),mn.failed=!0,mn.name="Grok coach engine (built-in)";try{mn.worker&&mn.worker.terminate()}catch{}mn.worker=null}return mn.ready})()),mn.loading}function CE(n,{multipv:e=3,movetime:t=1500,depth:i=null}={}){let s=mn.queue.then(()=>new Promise(r=>{let o=mn.worker,a={},l=0,c=d=>{let f=String(d.data);if(f.startsWith("info")&&f.includes(" pv ")){let h=+(f.match(/ depth (\d+)/)||[])[1]||0,u=+(f.match(/ multipv (\d+)/)||[0,1])[1],m=f.match(/ score cp (-?\d+)/),y=f.match(/ score mate (-?\d+)/),g=f.split(" pv ")[1].trim().split(" ");if(f.includes("lowerbound")||f.includes("upperbound"))return;a[u]={uci:g[0],pv:g,scoreCp:m?+m[1]:null,mate:y?+y[1]:null,depth:h},l=Math.max(l,h)}else if(f.startsWith("bestmove")){o.removeEventListener("message",c);let h=Object.keys(a).sort((u,m)=>u-m).map(u=>a[u]);if(!h.length){let u=f.split(" ")[1];u&&u!=="(none)"&&h.push({uci:u,pv:[u],scoreCp:0,mate:null})}r({lines:h,depth:l})}};o.addEventListener("message",c),o.postMessage("ucinewgame"),o.postMessage(`setoption name MultiPV value ${e}`),o.postMessage("position fen "+n),o.postMessage(i?`go depth ${i}`:`go movetime ${t}`)}));return mn.queue=s.catch(()=>{}),s}function PE(n,{multipv:e=3,ms:t=1200}={}){let i=(m,y)=>3.5-Math.max(Math.abs(3.5-m),Math.abs(3.5-y)),s=m=>{let y=0;for(let g=0;g<8;g++)for(let p=0;p<8;p++){let v=m.board[g][p];if(!v)continue;let M=(v.type==="k"?0:_t[v.type]*100)+(v.type==="n"||v.type==="b"?i(g,p)*6:0)+(v.type==="p"?(v.color==="w"?6-g:g-1)*6:0);y+=v.color===m.turn?M:-M}return y},r=(m,y)=>y.map(g=>({m:g,k:(m.board[g.tr][g.tc]?_t[m.board[g.tr][g.tc].type]*10-_t[m.board[g.fr][g.fc].type]:0)+(g.promotion?80:0)+(g.givesCheck?5:0)})).sort((g,p)=>p.k-g.k).map(g=>g.m),o=performance.now(),a=!1,l=m=>({...m,history:[]});function c(m,y,g,p){let v=s(m);if(v>=g||(v>y&&(y=v),p>6))return v;for(let M of r(m,Jt.legalMoves(m).filter(_=>_.capture||_.enPassant||_.promotion))){let _=-c(l(Jt.makeMove(m,M)),-g,-y,p+1);if(_>=g)return _;_>y&&(y=_)}return y}function d(m,y,g,p,v){if(performance.now()-o>t)return a=!0,0;let M=Jt.legalMoves(m);if(!M.length)return Jt.isInCheck(m.board,m.turn)?-1e5+v:0;if(y<=0)return c(m,g,p,0);for(let _ of r(m,M)){let S=-d(l(Jt.makeMove(m,_)),y-1,-p,-g,v+1);if(a)return 0;if(S>=p)return S;S>g&&(g=S)}return g}let f=l(n),h=r(f,Jt.legalMoves(f)).map(m=>({m,v:0})),u=0;for(let m=1;m<=6&&!a;m++){let y=[];for(let{m:g}of h){let p=-d(l(Jt.makeMove(f,g)),m-1,-1e9,1e9,1);if(a)break;y.push({m:g,v:p})}if(a)break;h=y.sort((g,p)=>p.v-g.v),u=m}return{depth:u,lines:h.slice(0,e).map(({m,v:y})=>({uci:Tp(m),pv:[Tp(m)],scoreCp:Math.abs(y)>9e4?null:y,mate:Math.abs(y)>9e4?Math.sign(y)*Math.ceil((1e5-Math.abs(y))/2):null}))}}async function es(n,e={}){return await Ly(),mn.ready?CE(ii(n),e):PE(n,{multipv:e.multipv||3,ms:Math.min(1500,e.movetime||1200)})}var eo=(n,e)=>n>=0&&n<8&&e>=0&&e<8,_r={b:[[1,1],[1,-1],[-1,1],[-1,-1]],r:[[1,0],[-1,0],[0,1],[0,-1]]};_r.q=_r.b.concat(_r.r);function ys(n,e,t){let i=n[e][t];if(!i)return[];let s=[];if(i.type==="p"){let r=i.color==="w"?-1:1;for(let o of[-1,1])eo(e+r,t+o)&&s.push([e+r,t+o])}else if(i.type==="n")for(let[r,o]of[[-2,-1],[-2,1],[-1,-2],[-1,2],[1,-2],[1,2],[2,-1],[2,1]])eo(e+r,t+o)&&s.push([e+r,t+o]);else if(i.type==="k")for(let r=-1;r<=1;r++)for(let o=-1;o<=1;o++)(r||o)&&eo(e+r,t+o)&&s.push([e+r,t+o]);else for(let[r,o]of _r[i.type]){let a=e+r,l=t+o;for(;eo(a,l)&&(s.push([a,l]),!n[a][l]);)a+=r,l+=o}return s}function Dn(n,e,t,i){let s=[];for(let r=0;r<8;r++)for(let o=0;o<8;o++){let a=n[r][o];a&&a.color===i&&ys(n,r,o).some(([l,c])=>l===e&&c===t)&&s.push({r,c:o,type:a.type})}return s}var IE=(n,e,t)=>new Set(ys(n,e,t).map(([i,s])=>i*8+s));function kE(n,e){let t=0;for(let i of n)for(let s of i)s&&s.type!=="k"&&(t+=(s.color===e?1:-1)*_t[s.type]);return t}function vr(n,e,t,i="du",s={}){let r=n.turn,o=AE(r),a=Jt.legalMoves({...n,history:[]}).find(T=>T.fr===e.fr&&T.fc===e.fc&&T.tr===e.tr&&T.tc===e.tc&&(T.promotion||"q")===(e.promotion||"q"));if(!a)return[{key:"none",data:{},text:ya({key:"none"},i,s)}];let l=n.board[e.fr][e.fc],c=Jt.makeMove({...n,history:[]},a),d=n.board,f=c.board,h=(T,C)=>String.fromCharCode(97+C)+(8-T),u=h(e.tr,e.tc),m=[],y=(T,C={})=>{m.some(k=>k.key===T)||m.push({key:T,data:C})},g=T=>T.map(C=>({...C,text:ya(C,i,s)})),p=Jt.gameStatus({...c,history:[]});if(p.type==="checkmate")return g([{key:"mate",data:{to:u}}]);t&&t.mate>1&&y("mateN",{n:t.mate,nw:gr(t.mate)}),a.promotion&&y("promo",{promo:a.promotion,to:u});let v=a.enPassant?"p":d[e.tr][e.tc]&&d[e.tr][e.tc].type,M=l.type,_=a.promotion||M;v&&(Dn(f,e.tr,e.tc,o).length>0?_t[v]>_t[M]?y("winMat",{mover:M,cap:v,to:u}):_t[v]===_t[M]?y("trade",{cap:v,to:u,ahead:kE(d,r)>=2}):y("capture",{cap:v,to:u}):y("hanging",{cap:v,to:u}));let S=[];for(let[T,C]of ys(f,e.tr,e.tc)){let k=f[T][C];if(!k||k.color!==o)continue;let D=Dn(f,T,C,o).length>0;(k.type==="k"||_t[k.type]>_t[_]||!D&&_t[k.type]>=3)&&S.push({type:k.type,sq:h(T,C)})}let E=(()=>{let T=Dn(f,e.tr,e.tc,o);return T.length?T.some(C=>_t[C.type]<_t[_])?!1:Dn(f,e.tr,e.tc,r).length>0:!0})(),P=S.some(T=>T.type==="k");if(S.length>=2&&(E||P)){let T=S.slice().sort((C,k)=>_t[k.type]-_t[C.type]).slice(0,2);y("fork",{piece:_,from:u,t:T,gabel:P||_==="n"||_==="p",safe:E})}else if(S.length===1&&S[0].type!=="k"&&E&&!v)y("threat",{piece:_,tgt:S[0].type,sq:S[0].sq});else if(!S.length&&E&&!v)for(let[T,C]of ys(f,e.tr,e.tc)){let k=f[T][C];if(!k||k.color!==o||k.type==="k")continue;let D=Dn(f,T,C,o),L=Dn(f,T,C,r).length,F=D.length,B=d[T][C],$=B&&B.color===o?Dn(d,T,C,r).length:0,se=B?Dn(d,T,C,o).length:0;if(L>F&&L>=2&&!($>se)){y("threat",{piece:_,tgt:k.type,sq:h(T,C),na:L,nd:F,defenders:D.map(X=>X.type)});break}}if(a.givesCheck&&p.type==="check"&&!(m.some(T=>T.key==="fork")&&P)&&y("check"),_r[_])for(let[T,C]of _r[_]){let k=e.tr+T,D=e.tc+C,L=null;for(;eo(k,D);){let F=f[k][D];if(F)if(L){F.color===o&&(F.type==="k"&&L.type!=="k"?y("pin",{pinned:L.type,sq:h(L.r,L.c),behind:"k",abs:!0}):L.type!=="k"&&_t[F.type]>_t[L.type]&&_t[F.type]>=5&&_t[L.type]<_t[_]?y("pin",{pinned:L.type,sq:h(L.r,L.c),behind:F.type,abs:!1}):(L.type==="k"||L.type==="q")&&L.type!==F.type&&_t[L.type]>_t[F.type]&&_t[F.type]>=3&&(Dn(f,k,D,o).length===0||_t[F.type]>_t[_])&&y("skewer",{front:L.type,back:F.type,sq:h(k,D)}));break}else{if(F.color!==o)break;L={...F,r:k,c:D}}k+=T,D+=C}}for(let T=0;T<8;T++)for(let C=0;C<8;C++){let k=f[T][C];if(!k||k.color!==r||!_r[k.type]||T===e.tr&&C===e.tc)continue;let D=IE(d,T,C),L=ys(f,T,C);for(let[F,B]of L){let $=f[F][B];!$||$.color!==o||D.has(F*8+B)||($.type==="k"?y("discCheck",{via:k.type}):_t[$.type]>=3&&(_t[$.type]>_t[k.type]||Dn(f,F,B,o).length===0)&&y("discovered",{via:k.type,tgt:$.type,sq:h(F,B)}))}}if(m.some(T=>T.key==="check")&&m.some(T=>T.key==="discCheck")&&(m.splice(m.findIndex(T=>T.key==="check"),1),m.find(T=>T.key==="discCheck").data.double=!0),p.type!=="check"&&!m.some(T=>T.key==="mateN")){let T={...c,turn:r,ep:null,history:[]};!Jt.isInCheck(T.board,o)&&Jt.legalMoves(T).some(C=>{let k=Jt.makeMove(T,C);return k&&Jt.gameStatus({...k,history:[]}).type==="checkmate"})&&y("mateThreat")}let x=Dn(d,e.fr,e.fc,o);if(M!=="k"&&x.length&&(x.some(T=>_t[T.type]<_t[M])||Dn(d,e.fr,e.fc,r).length===0)&&Dn(f,e.tr,e.tc,o).length===0&&!v&&y("rescue",{piece:M,to:u}),!v&&!a.castle){let T=new Set(ys(f,e.tr,e.tc).map(([k,D])=>k*8+D)),C=null;for(let k=0;k<8;k++)for(let D=0;D<8;D++){let L=f[k][D];if(!L||L.color!==r||L.type==="k"||k===e.tr&&D===e.tc||!T.has(k*8+D))continue;let F=Dn(f,k,D,o);if(!F.length)continue;let B=Dn(d,k,D,o);if(!B.length)continue;let $=Dn(d,k,D,r).filter(X=>!(X.r===e.fr&&X.c===e.fc));if(Dn(d,k,D,r).some(X=>X.r===e.fr&&X.c===e.fc)||$.length>=B.length)continue;let se=F.slice().sort((X,Q)=>_t[X.type]-_t[Q.type])[0];(!C||_t[L.type]>_t[C.prot])&&(C={prot:L.type,psq:h(k,D),att:se.type,asq:h(se.r,se.c)})}C&&y("defend",C)}a.castle&&y("castle",{long:e.tc<e.fc}),Jt.isInCheck(d,r)&&!v&&y("evade",{king:M==="k"});let A=r==="w"?7:0;if((M==="n"||M==="b")&&e.fr===A&&n.fullmove<=15&&y("develop",{piece:M,to:u}),(M==="p"||M==="n")&&e.tr>=3&&e.tr<=4&&e.tc>=3&&e.tc<=4&&y("center",{piece:M,to:u}),M==="p"&&!v){let T=r==="w"?-1:1,C=!0;for(let k=e.tr+T;eo(k,0);k+=T)for(let D of[-1,0,1]){let L=eo(k,e.tc+D)&&f[k][e.tc+D];L&&L.type==="p"&&L.color===o&&(C=!1)}C&&(r==="w"?e.tr<=3:e.tr>=4)&&y("passer",{to:u})}if(M==="r"&&e.fc!==e.tc){let T=0;for(let C=0;C<8;C++){let k=f[C][e.tc];k&&k.type==="p"&&T++}T||y("openFile",{file:String.fromCharCode(97+e.tc)})}if(M==="k"&&!a.castle&&!Jt.isInCheck(d,r)){let T=0;for(let C of f)for(let k of C)k&&k.type==="q"&&T++;T||y("kingAct")}if(!v&&!a.castle&&!a.promotion){if(M==="p"){let T=null;for(let C=0;C<8;C++)for(let k=0;k<8;k++){let D=f[C][k];if(!D||D.color!==r||!_r[D.type]||D.type==="r")continue;let L=ys(f,C,k).length-ys(d,C,k).length;L>=2&&(!T||D.type==="b"&&T.via!=="b")&&(T={via:D.type,gain:L})}T&&y("opens",T)}else if(M!=="k"){let T=ys(d,e.fr,e.fc).length,C=ys(f,e.tr,e.tc).length;C>=T+2&&y("active",{piece:M,to:u,n:C,m:T})}}return m.length||y("quiet"),m.sort((T,C)=>Ty.indexOf(T.key)-Ty.indexOf(C.key)),g(m.slice(0,3))}var Ty=["mate","mateN","fork","skewer","pin","discCheck","discovered","hanging","winMat","promo","mateThreat","threat","check","rescue","defend","evade","castle","trade","capture","passer","openFile","kingAct","develop","center","opens","active","quiet","none"],mi=null,LE=[11992891,3007206,16739029],DE=[2.4,1.2,1],NE=[.95,.82,.72];function Up(){if(mi)for(let n of[...mi.children])mi.remove(n),n.traverse(e=>{e.geometry&&e.geometry.dispose(),e.material&&e.material.dispose()})}function Dy(n,e,t,i,s){let r=e-3.5,o=n-3.5,a=i-3.5,l=t-3.5,c=a-r,d=l-o,f=Math.hypot(c,d),h=[.16,.12,.11][s],u=h*2.2,m=.36,y=.18,g=f-.12,p=new bi;p.moveTo(y,-h/2),p.lineTo(g-m,-h/2),p.lineTo(g-m,-u/2),p.lineTo(g,0),p.lineTo(g-m,u/2),p.lineTo(g-m,h/2),p.lineTo(y,h/2),p.closePath();let v=new $i(p,{depth:.035,bevelEnabled:!1});v.rotateX(-Math.PI/2);let M=LE[s],_=new ke({color:M,emissive:M,emissiveIntensity:DE[s],transparent:!0,opacity:NE[s],roughness:.4,depthWrite:!1}),S=new oe(v,_);S.renderOrder=5;let E=new gt;E.add(S),E.position.set(r,.105+(2-s)*.012,o),E.rotation.y=Math.atan2(-d,c);let P=document.createElement("canvas");P.width=P.height=64;let x=P.getContext("2d");x.fillStyle="#"+M.toString(16).padStart(6,"0"),x.beginPath(),x.arc(32,32,28,0,Math.PI*2),x.fill(),x.fillStyle="#0b0f1a",x.font="900 40px system-ui, sans-serif",x.textAlign="center",x.textBaseline="middle",x.fillText(String(s+1),32,35);let A=new dn(P);A.colorSpace=Vt;let T=new cs(new Wi({map:A,depthTest:!1,transparent:!0}));T.scale.set(.34,.34,1),T.position.set(r+c*.55,.5,o+d*.55),T.renderOrder=6;let C=new gt;return C.add(E,T),C}function UE(n,e,t=11992891){let i=new oe(new Lr(.36,.46,40),new ke({color:t,emissive:t,emissiveIntensity:2.2,transparent:!0,opacity:.95,side:pn,depthWrite:!1}));return i.rotation.x=-Math.PI/2,i.position.set(e-3.5,.1,n-3.5),i.renderOrder=5,i.userData.pulse=!0,i}var Ay=(n,e)=>{if(!n)return"\u2013";if(n.mate!=null){let i=n.mate>0==(e==="w");return`Mate in ${Math.abs(n.mate)} for ${i?"White":"Black"}`}let t=(e==="w"?1:-1)*n.scoreCp/100;return(t>0?"+":t<0?"\u2212":"\xB1")+Math.abs(t).toFixed(1)},ed=(n,e=!1)=>K.mode==="bot"?"Grok Bot":e?"your opponent":n==="w"?"Black":"White",Ry=(n,e,t=!1)=>n?sc(n.mate!=null?null:n.scoreCp,n.mate,{opp:ed(e,t),kid:t}):"",Nt=n=>String(n).replace(/[&<>"]/g,e=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;"})[e]),yi=n=>n.mate!=null?n.mate>0?1e5-n.mate:-1e5-n.mate:n.scoreCp,OE={bot:["You\u2019re asking the coach? I thought we were friends. \u{1F972}","The coach is telling you my plans? That\u2019s industrial espionage!","Okay, coach, whisper away. I\u2019m not listening anyway. Fine, I am.","Getting help is allowed. Winning still isn\u2019t. \u{1F60F}","My lawyer is checking whether this is fair.","You two are whispering about me, aren\u2019t you?"],pvp:["Coach alert! The other side, please look away for a moment. \u{1F440}","I\u2019m staying out of it. But the coach is usually right.","Psst, the coach is talking!"]},ac=null,_s=null,Qi=null,td=null,kp=!1,FE=0;function lc(n){return ii(n)+"|"+(n.history?n.history.length:0)}async function Cy(){let n=K.state;if(kp)return;if(Jt.gameStatus({...n,history:[]}).type==="checkmate"||Jt.gameStatus({...n,history:[]}).type==="stalemate"){gi(`<p class="coach-msg">${Nt(ge("over",["The game is already over. Fancy a new one? Or let\u2019s look back with the quick analysis. \u{1F609}","There\u2019s nothing left to move, the game is done. How about a quick analysis?"]))}</p>`);return}let e=pt("chkHintOnly")&&pt("chkHintOnly").checked;kp=!0;let t=pt("btnCoach");t&&(t.disabled=!0,t.textContent="\u{1F9E0} Coach is thinking \u2026"),gi(`<p class="coach-msg">${Nt(ge("busy",["One moment, let me take a look \u2026","Let me think for a second \u2026","Okay, I\u2019m looking at the position \u2026"]))}</p>`);let i=lc(n);Math.random()<.7&&setTimeout(()=>{let s=OE[K.mode==="bot"?"bot":"pvp"];Ht(ge("quip-"+K.mode,s),K.mode==="bot"?"think":"happy",!0)},250);try{let s=await es(n,{multipv:3,movetime:1400});if(lc(K.state)!==i){gi('<p class="coach-msg">Oh, the position just changed. Just ask me again.</p>');return}let r=s.lines[0]?yi(s.lines[0]):0,a=s.lines.map(l=>({l,mv:mr(l.uci)})).filter(l=>l.mv).filter((l,c)=>c===0||r-yi(l.l)<=250).map((l,c)=>({...l,san:Li(n,l.mv),reasons:vr(n,l.mv,l.l,"du",{N:ed(n.turn)}),i:c}));_s={key:i,items:a,depth:s.depth,turn:n.turn},ac=i,nd(a,s.depth,n.turn,e),st.chirp&&st.chirp()}catch(s){console.warn("[Coach]",s),gi('<p class="coach-msg">Oops, I got tangled up there. Please try again.</p>')}finally{kp=!1,t&&(t.disabled=!1,t.textContent="\u{1F393} Best move?")}}function nd(n,e,t,i){if(Up(),!n.length){gi('<p class="coach-msg">There are no legal moves left here.</p>');return}let s=n[0],r=!!K.settings.coachKids,o=r?`<div class="coach-eval"><b>${Nt(Ry(s.l,t,!0))}</b></div>`:`<div class="coach-eval"><b>${Nt(Ry(s.l,t))}</b><small>${Nt(Ay(s.l,t))} \xB7 ${Nt(mn.name)} \xB7 depth ${e||"?"}</small></div>`;if(i){let c=K.state,d=c.board[s.mv.fr][s.mv.fc],f=s.reasons[0]?s.reasons[0].key:"quiet",h=oc(d.type,pr(s.mv.fr,s.mv.fc),f,r);mi.add(UE(s.mv.fr,s.mv.fc)),gi(o+`<p class="coach-hint">\u{1F4A1} ${Nt(h)}</p><button type="button" class="btn small" id="btnRevealMove">Show move</button>`),pt("btnRevealMove").addEventListener("click",()=>nd(n,e,t,!1));return}n.forEach((c,d)=>mi.add(Dy(c.mv.fr,c.mv.fc,c.mv.tr,c.mv.tc,d)));let a={N:ed(t)},l=n.map((c,d)=>{let f=r?ya(c.reasons[0]||{key:"quiet"},"kid"):c.reasons.slice(0,2).map(u=>u.text).join(" "),h=r?Nt(Lt(pi(c.san,!0))):`${Nt(Lt(pi(c.san)))} <span class="san">(${Nt(Np(c.san))})</span>`;return`<li class="cand c${d}"><span class="dot"></span><b>${h}</b> ${r?"":`<em>${Nt(Ay(c.l,t))}</em>`}<br><span class="why">${Nt(f)}</span></li>`}).join("");gi(o+`<ol class="coach-list">${l}</ol>`)}function gi(n){let e=pt("coachOut");e&&(e.innerHTML=n,e.hidden=!1)}function Lp(n){let e=()=>{let t=document.createElement("textarea");t.value=n,t.setAttribute("readonly",""),t.style.position="fixed",t.style.opacity="0",document.body.appendChild(t),t.select();let i=!1;try{i=document.execCommand("copy")}catch{i=!1}return t.remove(),i};return navigator.clipboard&&window.isSecureContext!==!1?navigator.clipboard.writeText(n).then(()=>!0).catch(()=>e()):Promise.resolve(e())}function Dp(n){let e=pt(n);e&&e.classList.add("open")}function _a(n){let e=pt(n);e&&e.classList.remove("open")}function Py(n,e){if(!n)return;let t=n.dataset.label||n.textContent;n.dataset.label=t,n.textContent=e,setTimeout(()=>{n.textContent=t},1400)}function BE(){let n=K.state,e=Jt.gameStatus({...n,history:[]}),t=e.type==="checkmate"?e.winner==="w"?"1-0":"0-1":e.type==="stalemate"||e.type==="draw"?"1/2-1/2":"*",i=ii(n),s=wp(n,{white:K.mode==="bot"?"You":"White",black:K.mode==="bot"?"Grok Bot":"Black",result:t});pt("fenOut").value=i,pt("pgnOut").value=s,Dp("fenOverlay"),Lp(i+`

`+s).then(r=>{pt("copyStatus").textContent=r?"\u2705 FEN + PGN copied to the clipboard.":"Clipboard blocked (file://) \u2013 please select and copy below."})}function HE(){let n=pt("fenIn").value.trim(),e=pt("fenErr");if(e.textContent="",!n){e.textContent="Please paste a FEN or a PGN first.";return}if(/\[\w+\s+"/.test(n)||/^\s*1\.\s*\S/.test(n)||/\d+\.\s*[a-hNBRQKO]/.test(n)&&n.split("/").length<8){let s=Ep(n);if(s.error){e.textContent="\u26A0\uFE0F "+s.error;return}_a("loadOverlay"),Qi=null,va(),Jl(s.state,{sans:s.sans}),Ht(ge("pgnLoaded",[`Game loaded, ${s.sans.length} half-moves. ${s.state.turn==="w"?"White":"Black"} to move.`,`Got the game, ${s.sans.length} half-moves. Now it\u2019s ${s.state.turn==="w"?"White":"Black"} to move.`]),"happy");return}let i=pa(n);if(i.error){e.textContent="\u26A0\uFE0F "+i.error;return}_a("loadOverlay"),Qi=null,va(),Jl(i.state),i.status&&(i.status.type==="checkmate"||i.status.type==="stalemate")&&Ht(i.status.type==="checkmate"?"Loaded. But that\u2019s already checkmate. \u{1F605}":"Loaded. That\u2019s already stalemate, though.","think")}function zE(){let n={};for(let e of jr)(n[e.group]=n[e.group]||[]).push(e);return Object.entries(n).map(([e,t])=>`<div class="preset-group"><h4>${Nt(e)}</h4>${t.map(i=>`<button type="button" class="preset" data-preset="${i.id}"><b>${Nt(i.title)}</b><span>${Nt(i.task)}</span></button>`).join("")}</div>`).join("")}function Iy(n){let e=jr.find(i=>i.id===n);if(!e)return;let t=pa(e.fen);if(t.error){console.warn("preset",n,t.error);return}_a("presetOverlay"),va(),t.state.turn==="b"&&K.mode==="bot"&&fp("pvp",!1),Jl(t.state,{quiet:!0}),Qi=e,td=ii(t.state),Ht(ge("presetIntro",[`New puzzle: ${e.title}. ${e.task}`,`${e.title}! ${e.task} You can do it.`,`Okay, ${e.title}. ${e.task}`]),"think"),gi(`<div class="preset-card"><div class="preset-title">\u{1F4DA} ${Nt(e.group)} \xB7 ${Nt(e.title)}</div><p class="preset-task">${Nt(e.task)}</p><div class="modal-row left"><button type="button" class="btn small" id="btnSolution">Show solution</button></div><p class="preset-sol" id="presetSol" hidden></p><p class="preset-fb" id="presetFb"></p></div>`),pt("btnSolution").addEventListener("click",()=>GE(e))}function GE(n){let e=pt("presetSol");if(!e)return;e.hidden=!1,e.textContent=`The solution is ${Qt(n.solution[0])}${n.solution.length>1?" "+n.solution.slice(1).map(Np).join(" "):""}. ${n.explain}`;let t=pa(n.fen);if(t.error)return;let i=Jt.legalMoves(t.state).find(s=>Jt.moveToSan(t.state,s).replace(/[+#]/g,"")===n.solution[0].replace(/[+#]/g,""));i&&ii(K.state)===td&&(Up(),mi.add(Dy(i.fr,i.fc,i.tr,i.tc,0)))}function VE(n,e){if(!Qi)return;let i=K.state.history||[];if((!i.length||ii(i[0])!==td||i.length!==1)&&i.length>1||i.length!==1)return;let s=Jt.moveToSan({...i[0],history:[]},Jt.legalMoves({...i[0],history:[]}).find(c=>c.fr===n.move.fr&&c.fc===n.move.fc&&c.tr===n.move.tr&&c.tc===n.move.tc&&(c.promotion||"q")===(n.move.promotion||"q"))||n.move),r=c=>String(c).replace(/[+#?!]/g,""),o=Qi.accept.some(c=>r(c)===r(s))||Qi.anyMate&&e.status.type==="checkmate",a=pt("presetFb"),l=!!K.settings.coachKids;if(o){let c=ge("presetOk",["Correct!","Bullseye!","Exactly!","Nicely solved!"]);a&&(a.innerHTML=`\u2705 <b>${Nt(c)}</b> ${Nt(Qt(s,l))} is exactly the move. ${Nt(Qi.explain)}`),Ht(ge("presetOkSay",[`${c} ${Lt(pi(s,l))} \u2013 exactly what I was looking for. \u{1F389}`,`${c} With ${pi(s,l)} you\u2019ve cracked it. \u{1F389}`,`${c} That was the solution, great job! \u{1F389}`]),"happy"),st.win&&st.win()}else a&&(a.innerHTML=`\u274C ${Nt(ge("presetNo",[`${Lt(Qt(s,l))} isn\u2019t quite what I was looking for.`,`Hmm, ${Qt(s,l)} isn\u2019t the solution here.`,`Close: ${Qt(s,l)} isn\u2019t the move we\u2019re looking for.`]))} Take it back with <kbd>U</kbd> and try again, or show the solution.`),setTimeout(()=>Ht(ge("presetNoSay",["Hmm, that wasn\u2019t the move I meant. Take it back with U and try again!","Almost! But there\u2019s something better. Press U and try again.","Not quite. No stress, you can take it back with U."]),"think"),900)}async function ky(){let n=K.state,e=ma(n);if(e.length<2){gi('<p class="coach-msg">For a quick analysis I need at least two moves. Play a little first!</p>');return}let t=pt("btnAnalyse");t&&(t.disabled=!0,t.textContent="\u23F3 Analyzing \u2026");try{let i=Math.min(e.length,80),s=[],r=e.slice(0,i).map(h=>h[0]).concat([e[i]?e[i][0]:n]);for(let h=0;h<r.length;h++){gi(`<p class="coach-msg">Going through the game \u2026 position ${h+1} of ${r.length}</p>`);let u=r[h],m=Jt.gameStatus({...u,history:[]});if(m.type==="checkmate"){s.push({score:-1e5,best:null});continue}if(m.type==="stalemate"){s.push({score:0,best:null});continue}let g=(await es(u,{multipv:1,movetime:250,depth:mn.ready?11:null})).lines[0];s.push({score:g?yi(g):0,best:g?g.uci:null,line:g})}let o=[];for(let h=0;h<i;h++){let[u,m]=e[h],y=s[h].score,g=-s[h+1].score,p=E=>Math.max(-1500,Math.min(1500,E)),v=p(y)-p(g),M=Li(u,m),_=s[h].best&&mr(s[h].best),S=_?Li(u,_):null;S&&S!==M&&o.push({i:h,snap:u,played:M,bestSan:S,bestMv:_,bestLine:s[h].line,drop:v,side:u.turn,no:u.fullmove})}let a=o.filter(h=>h.drop>=60).sort((h,u)=>u.drop-h.drop).slice(0,3),l=!!K.settings.coachKids;if(!a.length){gi(`<div class="coach-eval"><b>Quick analysis</b></div><p class="coach-msg">${Nt(ge("noMistakes",["No big blunders found. Cleanly played! \u{1F44F}","I can\u2019t find anything bad. A really solid game! \u{1F44F}","Nothing to complain about. Well played! \u{1F44F}"]))}</p>`);return}let c=h=>l?h>=300?"Ouch":h>=120?"Not so good":"Could be better":h>=300?"Blunder":h>=120?"Mistake":"Inaccuracy",d=h=>K.mode==="bot"&&h==="b",f=a.map(h=>{let u;if(d(h.side))u=ge("anaBot",[`Here Grok Bot should have played ${Qt(h.bestSan,l)}. I already told it.`,`Grok Bot should have played ${Qt(h.bestSan,l)}. Psst, don\u2019t tell anyone.`]);else{let m=h.bestMv?vr({...h.snap,history:[]},h.bestMv,h.bestLine,l?"kid":"du")[0]:null,y=K.mode==="bot"?"":h.side==="w"?"White: ":"Black: ",g=l?"":h.drop>=1200?" That basically cost the game.":` That cost ${rc(h.drop)}.`;u=`${y}${ge("anaBetter",[`Better was ${Qt(h.bestSan,l)}.`,`Stronger was ${Qt(h.bestSan,l)}.`,`Here ${Qt(h.bestSan,l)} was possible.`])}${m?" "+m.text:""}${g}`}return`<li><b>${h.no}${h.side==="w"?".":"\u2026"} ${Nt(Np(h.played))}</b> <em>${c(h.drop)}${l?"":` \xB7 \u2212${(h.drop/100).toFixed(1)}`}</em><br><span class="why">${Nt(u)}</span></li>`}).join("");gi(`<div class="coach-eval"><b>Quick analysis</b> <span>${a.length===1?"The one spot where it tipped":`The ${a.length} spots where it tipped the most`}</span><small>${Nt(mn.name)}</small></div><ol class="coach-list analysis">${f}</ol>`)}finally{t&&(t.disabled=!1,t.textContent="\u{1F4CA} Quick analysis")}}function va(){Up(),ac=null,_s=null}function Ny(){mi=new gt,mi.name="coachArrows",K.scene.add(mi),pt("btnCoach").addEventListener("click",Cy),pt("chkHintOnly").checked=!!K.settings.coachHint,pt("chkHintOnly").addEventListener("change",()=>{K.settings.coachHint=pt("chkHintOnly").checked;try{localStorage.setItem("gbc-settings-v3",JSON.stringify(K.settings))}catch{}_s&&_s.key===lc(K.state)&&nd(_s.items,_s.depth,_s.turn,pt("chkHintOnly").checked)}),pt("btnExport").addEventListener("click",BE),pt("btnImport").addEventListener("click",()=>{pt("fenErr").textContent="",Dp("loadOverlay"),setTimeout(()=>pt("fenIn").focus(),50)}),pt("btnPresets").addEventListener("click",()=>Dp("presetOverlay")),pt("btnAnalyse").addEventListener("click",ky),pt("presetList").innerHTML=zE(),pt("presetList").addEventListener("click",t=>{let i=t.target.closest("[data-preset]");i&&Iy(i.dataset.preset)}),pt("btnFenLoad").addEventListener("click",HE),pt("btnCopyFen").addEventListener("click",t=>Lp(pt("fenOut").value).then(i=>Py(t.target,i?"Copied \u2713":"Please copy manually"))),pt("btnCopyPgn").addEventListener("click",t=>Lp(pt("pgnOut").value).then(i=>Py(t.target,i?"Copied \u2713":"Please copy manually")));for(let t of document.querySelectorAll("[data-close]"))t.addEventListener("click",()=>_a(t.dataset.close));for(let t of["fenOverlay","loadOverlay","presetOverlay"])pt(t).addEventListener("click",i=>{i.target.id===t&&_a(t)});for(let t of document.querySelectorAll("#fenOverlay textarea, #loadOverlay textarea"))t.addEventListener("keydown",i=>i.stopPropagation());document.addEventListener("keydown",t=>{t.key==="Escape"&&["fenOverlay","loadOverlay","presetOverlay"].forEach(_a)}),Qe.afterMove.push((t,i)=>{let s=!!_s;va(),s&&!Qi&&gi(`<p class="coach-msg">${Nt(ge("newPos",["New position. Feel free to ask me again!","On we go. If you want, I\u2019ll take another look.","New situation on the board. I\u2019m ready when you need me."]))}</p>`),VE(t,i)});let n=Qe.newGame;Qe.newGame=()=>{n&&n(),va()};let e=K.state;Qe.frame.push(t=>{K.state!==e&&(e=K.state,ac&&ac!==lc(K.state)&&va(),Qi&&(K.state.history||[]).length===0&&ii(K.state)!==td&&(Qi=null)),FE=t,mi&&mi.children.length&&mi.traverse(i=>{if(i.userData&&i.userData.pulse){let s=.5+.5*Math.sin(t*5);i.material.opacity=.55+.4*s,i.scale.setScalar(1+.08*s)}})}),setTimeout(()=>{Ly()},2500),window.__gbc&&(window.__gbc.coach={askCoach:Cy,explain:vr,analyseState:es,toFen:ii,parseFen:pa,toPgn:wp,parsePgn:Ep,loadPreset:Iy,presets:jr,engine:mn,quickAnalysis:ky,get lastResult(){return _s},get activePreset(){return Qi},arrows:()=>mi.children.length})}function Op(n,e,t,i){let s=lc(n);_s={key:s,items:e,depth:t,turn:n.turn},ac=s,nd(e,t,n.turn,i)}function Fp(n,e,t=250){let i=e.lines[0]?yi(e.lines[0]):0;return e.lines.map(s=>({l:s,mv:mr(s.uci)})).filter(s=>s.mv).filter((s,r)=>r===0||i-yi(s.l)<=t).map((s,r)=>({...s,san:Li(n,s.mv),reasons:vr(n,s.mv,s.l,"du",{N:ed(n.turn)}),i:r}))}function Uy(){let n=window.speechSynthesis;if(!n)return null;let e=n.getVoices().filter(i=>/^en(-|_|$)/i.test(i.lang));if(!e.length)return null;let t=i=>{let s=0,r=i.name.toLowerCase();return/en[-_]us/i.test(i.lang)&&(s+=5),/premium|enhanced|natural|neural|online/.test(r)&&(s+=6),/google/.test(r)&&(s+=4),/samantha|alex|ava|allison|susan|tom|zoe|evan|nathan|aria|jenny|guy/.test(r)&&(s+=3),i.localService&&(s+=1),s};return e.sort((i,s)=>t(s)-t(i))[0]}var WE={name:"Web Speech API (Browser)",sttAvailable(){return window.SpeechRecognition||window.webkitSpeechRecognition?location.protocol==="file:"?{ok:!0,reason:"file"}:{ok:!0}:{ok:!1,reason:"unsupported"}},listen({lang:n="en-US",onInterim:e,onFinal:t,onError:i,onEnd:s}={}){let r=window.SpeechRecognition||window.webkitSpeechRecognition;if(!r)return i&&i("unsupported","Speech recognition is not supported in this browser."),s&&s(),()=>{};let o=new r;o.lang=n,o.interimResults=!0,o.continuous=!1,o.maxAlternatives=1;let a="";o.onresult=l=>{let c="";for(let d=l.resultIndex;d<l.results.length;d++){let f=l.results[d];f.isFinal?a+=f[0].transcript:c+=f[0].transcript}c&&e&&e(a+c)},o.onerror=l=>i&&i(l.error||"error",l.message||""),o.onend=()=>{a.trim()&&t&&t(a.trim()),s&&s()};try{o.start()}catch(l){i&&i("start",String(l&&l.message||l)),s&&s()}return()=>{try{o.stop()}catch{}}},ttsAvailable(){return!!(window.speechSynthesis&&window.SpeechSynthesisUtterance)},speak(n,{lang:e="en-US",rate:t=1,onStart:i,onEnd:s}={}){if(!this.ttsAvailable()){s&&s();return}let r=window.speechSynthesis;r.cancel();let o=new SpeechSynthesisUtterance(n);o.lang=e,o.rate=t,o.pitch=1;let a=Uy();a&&(o.voice=a),o.onstart=()=>i&&i(),o.onend=o.onerror=()=>s&&s(),r.speak(o)},stopSpeaking(){window.speechSynthesis&&window.speechSynthesis.cancel()}},$E=WE;function to(){return $E}function Oy(){let n=Uy();return n?n.name:null}if(window.speechSynthesis)try{window.speechSynthesis.getVoices(),window.speechSynthesis.onvoiceschanged=()=>{}}catch{}var xa=window.GardenChess,en=n=>document.getElementById(n),qE=n=>String(n).replace(/[&<>"]/g,e=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;"})[e]),od=n=>n==="w"?"b":"w",uc=n=>n==="w"?"White":K.mode==="bot"?"Grok Bot":"Black",Ni=()=>!!K.settings.coachKids,XE=()=>K.mode==="bot"?"w":K.state.turn,Fy=n=>Ni()&&K.mode!=="bot"?"your opponent":uc(od(n)),sd=n=>ya(n.reasons[0]||{key:"quiet"},"kid");function By(n,e){if(!n)return"Honestly, I can\u2019t tell right now.";let i=K.state.turn===e?1:-1;return n.mate!=null?sc(null,i*n.mate,{opp:Fy(e),kid:Ni()}):sc(i*n.scoreCp,null,{opp:Fy(e),kid:Ni()})}var YE=n=>" "+String(n).toLowerCase().replace(/[’']/g,"").replace(/[^a-z0-9 ]/g," ").replace(/\s+/g," ")+" ",Hy=[["p",/pawns?\b/],["n",/knights?|horses?/],["b",/bishops?/],["r",/rooks?|castle piece|towers?/],["q",/queens?/],["k",/kings?\b/]],KE=[["castle",/castl/],["ep",/en passant|enpassant|in passing/],["promo",/promot|pawn.*(end|last rank|other side)/],["stalemate",/stalemate/],["mate",/checkmate| mate /],["check",/ check /]],Bp=/fork|pin|skewer|discover/;function Vy(n){let e=YE(n);if(/ (show|tell|reveal|give)( me)? (the |your )?(move|answer|solution)| solution /.test(e))return{intent:"reveal"};if(/ how (does|do|can|is|are) (a |an |the )?\w+ (move|moves|work|works|capture|captures)| how does .* move| rules? | explain .*(piece|pawn|knight|horse|bishop|rook|queen|king)| what (is|are) (a |an )?(castling|en passant|stalemate|check|fork|pin|skewer|discovered)/.test(e)){for(let[t,i]of KE)if(i.test(e))return{intent:"rule",topic:t};for(let[t,i]of Hy)if(i.test(e))return{intent:"piece",piece:t};if(Bp.test(e))return{intent:"motif",motif:(e.match(Bp)||[])[0]}}if(/ what (is|are|s) (a |an )?(fork|pin|skewer|discover)/.test(e))return{intent:"motif",motif:(e.match(Bp)||[])[0]};if(/ (last|previous) move| was (that|this|my move|it) (a )?(mistake|blunder|bad|good|ok|okay)| why (was|is) (my|that|the) | did i (make a )?(mistake|blunder)| blunder| was that good /.test(e))return{intent:"lastMove"};if(/ threat| threaten| what (does|is) (my |the )?(opponent|bot|grok bot|other side) (want|plan|doing|threatening)| danger| what (is|are) (they|he|she|it) planning| what should i (watch|look) out for| watch out| careful /.test(e))return{intent:"threat"};if(/ (just )?(a |one )?(hint|tip|clue)| little help| without (giving|telling)| help me a (bit|little)/.test(e))return{intent:"hint"};if(/ who is (better|winning|ahead)| whos (better|winning|ahead)| evaluat| how (am i|are we|is it) (doing|standing)| am i (winning|losing|better|worse)| who leads| score /.test(e))return{intent:"eval"};if(/ best move| what (should|shall|do) i (play|move|do)| which move| what would you (play|do)| recommend| suggest| where should i (go|move)| your move /.test(e))return{intent:"best"};if(/ plan| strategy| what next| whats next| what now| how do i continue| idea /.test(e))return{intent:"plan"};if(/ opening| what is this called| whats this called| what are we playing/.test(e))return{intent:"opening"};if(/ (hello|hi|hey|good morning|good evening|howdy) /.test(e))return{intent:"hello"};if(/ (thanks|thank you|thx|cheers) /.test(e))return{intent:"thanks"};for(let[t,i]of Hy)if(i.test(e)&&/ (move|moves|go|goes|walk|jump|can)/.test(e))return{intent:"piece",piece:t};return{intent:"unknown"}}var ZE={p:["The pawn only ever moves forward, one square at a time. On its very first move it may go two squares. But it captures diagonally forward! When it reaches the far end, it transforms, usually into a queen.","The pawn moves one square forward, two on its first move. But it captures diagonally forward, which confuses almost everyone at first. Plus there are two special rules: en passant and promotion when it reaches the last rank."],n:["The knight, the horse, jumps in an L: two squares straight and one to the side. It\u2019s the only piece that can jump over others!","The knight moves in an L: two squares straight, one to the side. It\u2019s the only piece that can jump, and it changes square color every move. That\u2019s exactly why it\u2019s the king of forks."],b:["The bishop zooms diagonally across the board, as far as it likes. But it always stays on its own color.","The bishop moves diagonally as far as it wants and stays on its square color for life. If you have both bishops and the board is open, they\u2019re really annoying for the opponent."],r:["The rook drives straight: forward, backward and sideways, as far as it likes. Together with the king it can castle.","The rook moves straight \u2013 forward, backward and sideways \u2013 as far as it wants. It feels most at home on open files or deep in enemy territory, on the seventh rank."],q:["The queen is the strongest piece: she can move straight AND diagonally, as far as she likes. Take good care of her!","The queen can do everything rook and bishop can: straight and diagonal, as far as she wants. She\u2019s worth nine pawns. Little tip: don\u2019t bring her out too early, or she\u2019ll just get chased around."],k:["The king only ever moves one square, in any direction. He may never step onto a square that is attacked. If he\u2019s caught, the game is over: checkmate!","The king moves one square in any direction, but never onto an attacked square. Once per game he may castle. And in the endgame, when the queens are gone, the nervous boss suddenly becomes a real fighter."]},JE={castle:["Castling: king and rook move in one turn! The king moves two squares toward the rook, and the rook jumps over him. You can only do it if neither has moved yet, nothing is in between, and the king is not in check.","When castling, the king moves two squares toward the rook, and the rook hops over to the other side next to him. Only allowed if neither has moved, nothing is in between, and the king is not in check and doesn\u2019t pass over an attacked square."],ep:["En passant means \u201Cin passing\u201D: if a pawn jumps two squares and lands right next to your pawn, you may capture it as if it had moved only one square. But only immediately, on the very next move!","En passant means in passing. If a pawn advances two squares and lands right next to an enemy pawn, that pawn may capture it as if it had moved only one square. But only on the very next move \u2013 after that the chance is gone."],promo:["When your pawn reaches the other end, it may transform, usually into a queen. From tiny to huge!","If a pawn makes it to the last rank, it is promoted immediately \u2013 to a queen, rook, bishop or knight. Almost always you take the queen, of course."],stalemate:["Stalemate means: the player to move can\u2019t make any move but is NOT in check. Then the game is a draw. So be careful when you have lots more pieces!","Stalemate means the side to move has no legal move but is not in check. Then the game is a draw. Annoying when you\u2019re clearly winning \u2013 so keep your eyes open!"],mate:["Checkmate: the king is attacked and can\u2019t escape anymore. Then the game is won!","Checkmate is when the king is in check and nothing helps: no moving away, no blocking, no capturing the attacker. Then the game is over."],check:["Check means the king is attacked! You have to save him right away: move away, block, or capture the attacker.","Check means the king is under attack. You then have three options: move away, put something in between, or capture the attacker."]},zy={fork:["A fork is when one piece attacks two enemy pieces at the same time. Your opponent can only save one \u2013 you grab the other!","A fork is a double attack: one piece hits two targets at once, and the opponent can only save one. The nastiest is the knight fork on king and queen."],pin:["In a pin, a piece is nailed down: if it moved away, a more valuable piece behind it \u2013 or even the king \u2013 would be exposed.","In a pin, a piece can\u2019t move away because something more valuable stands behind it. If the king is behind it, it may not move at all. That\u2019s called an absolute pin."],skewer:["In a skewer, the valuable piece is attacked and has to move, and then you grab the piece behind it.","A skewer is a reversed pin: the more valuable piece is in front, it has to step aside, and then the one behind it falls."],discover:["In a discovered attack, one piece moves aside and clears the way for another, which then attacks. Double danger!","In a discovered attack, a piece moves away and opens the line for another one. That creates two threats in one go, which is hard to defend."]},jE=[["e4 e5 Nf3 Nc6 Bc4 Nf6","Two Knights Defense","Black attacks e4 right away. Watch out for Ng5 \u2013 then f7 gets shaky!"],["e4 e5 Nf3 Nc6 Bc4","ital"],["e4 e5 Nf3 Nc6 Bb5","span"],["e4 e5 Nf3 Nc6 d4","Scotch Game","White opens the center immediately with d4."],["e4 e5 Nf3 Nf6","Petrov Defense (Russian Game)","Black mirrors the attack on e4. Solid and nicely symmetrical."],["e4 e5 f4","King\u2019s Gambit","White sacrifices a pawn for fast development and attack. Very sharp, not for the faint-hearted!"],["e4 e5 Nf3 Nc6","Open Game (1.e4 e5)","Totally classic: both sides fight for the center and bring out their knights."],["e4 c5","sizi"],["e4 e6","fra"],["e4 c6","caro"],["e4 d5","Scandinavian Defense","Black attacks e4 at once; after exd5 Qxd5 the queen is in the game early."],["d4 d5 c4","dg"],["d4 d5 Nf3 Nf6 Bf4","lon"],["d4 d5 Bf4","lon"],["d4 Nf6 Bf4","lon"],["d4 Nf6 c4 g6","King\u2019s Indian / Gr\xFCnfeld setup","Black lets White have the center and attacks it later."],["c4","engl"],["e4 e5","Open Game (1.e4 e5)","Both sides occupy the center. Now: knights and bishops out, then castle."],["e4","King\u2019s Pawn Opening (1.e4)","White occupies the center and opens lines for queen and bishop."],["d4","Queen\u2019s Pawn Opening (1.d4)","White occupies the center; d4 is protected by the queen."]],QE={mate:"Then your king would be caught!",mateN:"Then it gets really dangerous for your king!",mateThreat:"Then it gets dangerous for your king!",hanging:"Then one of your unprotected pieces would be gone.",fork:"Then it would attack two of your pieces at once.",winMat:"Then it would grab one of your valuable pieces.",capture:"Then it would grab one of your pieces.",pin:"That would be a sneaky trick against you.",skewer:"That would be a sneaky trick against you.",discovered:"That would be a sneaky trick against you.",discCheck:"That would be a sneaky trick against you.",check:"Then your king would be in check.",promo:"Then it would get a new queen!",threat:"Then it would attack one of your pieces."};async function eT(n,e){let t={...K.state,history:[]},i=XE(),s=Ni(),r=xa.gameStatus(t),o=r.type==="checkmate"||r.type==="stalemate",a=K.mode!=="bot"||t.turn==="w",l=uc(od(i));switch(n.intent){case"hello":return s?ge("hello-k",["Hi! Great to have you here. Just ask me, for example: What should I play? \u{1F60A}","Hi! I\u2019m your chess coach. Whenever you\u2019re stuck, just ask me! \u{1F60A}"]):ge("hello",["Hey! Great to have you here. Ask me anything: the best move, a tip, who\u2019s better or what\u2019s being threatened.","Hello! Happy to look over your shoulder. Just ask away.","Hi there! Need a tip, an assessment, or want to know if your last move was good?"]);case"thanks":return s?ge("thanks-k",["You\u2019re welcome! You\u2019re doing great! \u{1F31F}","Anytime! Keep it up! \u{1F31F}"]):ge("thanks",["You\u2019re welcome! Have fun.",K.mode==="bot"?"Anytime. Now go show Grok Bot!":"Anytime. Good luck!","No problem. I\u2019m here if you need me."]);case"piece":return ZE[n.piece][s?0:1];case"rule":return JE[n.topic][s?0:1];case"motif":return zy[n.motif]?zy[n.motif][s?0:1]:"Ask me about forks, pins, skewers or discovered attacks \u2013 I know those well!";case"opening":return sT();case"unknown":return s?ge("unknown-k",["Hmm, I didn\u2019t understand that. Ask me, for example: What should I play?","Oh, that one\u2019s too hard for me. Try: What is threatened? Or: How does the horse move?"]):ge("unknown",["Hm, I\u2019ll have to pass on that. Ask me, for example, \u201CWhat should I play?\u201D, \u201CWhat is threatened?\u201D or \u201CWas my last move a mistake?\u201D","Phew, that\u2019s beyond me. I only really know my way around 64 squares. Ask me for the best move, a tip, the evaluation, a plan, the opening or how a piece moves.","Sorry, I didn\u2019t get that. Try \u201CGive me a tip\u201D, \u201CWho is better?\u201D or \u201CWhat\u2019s the plan?\u201D"])}if(o&&n.intent!=="lastMove")return r.type==="checkmate"?s?"The game is already over \u2013 checkmate! Shall we play a new one?":ge("over",["The game is already over \u2013 checkmate. If you like, we can look back with \u201CWas my last move a mistake?\u201D or the quick analysis.","That\u2019s already checkmate. Fancy a rematch? Or let\u2019s use the quick analysis to see what happened."]):ge("stale",["That\u2019s stalemate, so a draw. Another round?","Stalemate! Nobody won. One more game?"]);if(!a&&(n.intent==="best"||n.intent==="hint"||n.intent==="reveal"))return ge("notTurn",["It\u2019s Grok Bot\u2019s turn right now. Ask me again when it\u2019s your move!","One moment, Grok Bot moves first. Then I\u2019m happy to help."]);if(n.intent==="best"||n.intent==="hint"||n.intent==="reveal"){let c=await es(t,{multipv:3,movetime:1300}),d=Fp(t,c);if(!d.length)return"There are no legal moves left here.";let f=d[0],h=t.board[f.mv.fr][f.mv.fc];if(n.intent==="hint"||s&&n.intent==="best"&&!K.settings.kidsRevealed){Op(t,d,c.depth,!0);let M=(f.reasons[0]||{key:"quiet"}).key,_=pr(f.mv.fr,f.mv.fc);return s?(K.settings.kidsRevealed=!0,`${oc(h.type,_,M,!0)} ${ge("k-reveal",["Just say \u201CShow the move\u201D if you want to see it.","If you can\u2019t find it, say \u201CShow the move\u201D."])}`):oc(h.type,_,M)}if(K.settings.kidsRevealed=!1,Op(t,d,c.depth,!1),s)return ge("k-best",[`Try this: ${pi(f.san,!0)}! ${sd(f)}`,`How about ${pi(f.san,!0)}? ${sd(f)}`,`My tip for you: ${pi(f.san,!0)}. ${sd(f)}`]);let m=Qt(f.san),y=ge("bestIntro",[`I would ${Cp(f.san)} here (${yr(f.san)}).`,`My tip: ${m}.`,`I like ${m} best here.`,`How about ${m}?`]),g=f.reasons.slice(0,2).map(M=>M.text).join(" "),p=d.slice(1).filter(M=>yi(f.l)-yi(M.l)<=80).map(M=>Qt(M.san)),v=p.length?ge("alt",[`Almost as good: ${p.join(" or ")}.`,`Alternatively, ${p.join(" or ")} works too.`,`${Lt(p.join(" or "))} would also be perfectly fine.`]):"";return[y,g,By(f.l,i),v].filter(Boolean).join(" ")}if(n.intent==="eval"){let d=(await es(t,{multipv:1,movetime:1e3})).lines[0],f=By(d,i);if(s||!d)return f;let h=0;for(let y of t.board)for(let g of y)g&&g.type!=="k"&&(h+=(g.color===i?1:-1)*{p:1,n:3,b:3,r:5,q:9}[g.type]);if(d.mate!=null)return f+(h?h>0?` Material: you have ${Qr(h)} more.`:` Material: ${l} has ${Qr(-h)} more.`:"");let u=(t.turn===i?1:-1)*d.scoreCp,m;return h?h>0?m=u<35?`You do have ${Qr(h)} more, but ${l} has counterplay for it.`:`You have ${Qr(h)} more.`:m=u>-35?`${l} does have ${Qr(-h)} more, but your position makes up for it.`:`${l} has ${Qr(-h)} more.`:m=Math.abs(u)>=70?"Material is equal, so the difference is in the position.":ge("matEq",["Material is equal, too.","Material-wise everything is even as well."]),`${f} ${m}`}return n.intent==="threat"?tT(t,i):n.intent==="lastMove"?nT(i):n.intent==="plan"?iT(t,i):"Hmm, nothing comes to mind right now."}var id=n=>/^(the |a |an )/i.test(n)?"":"the ";async function tT(n,e){let t=Ni(),i=od(e),s=uc(i);if(xa.isInCheck(n.board,n.turn))return n.turn===e?t?"Your king is in check! Save him first: move away, block, or capture the attacker.":ge("inCheck",["You\u2019re in check \u2013 deal with that right away.","First things first: you\u2019re in check. Take care of that before anything else."]):`${uc(n.turn)} is in check and has to deal with that first.`;let r=n.turn===i?n:{...n,turn:i,ep:null},o=await es(r,{multipv:1,movetime:900}),a=n.turn===i?null:await es(n,{multipv:1,movetime:700}),l=o.lines[0];if(!l)return"I don\u2019t see any threat right now.";let c=mr(l.uci),d=Li(r,c),f=vr(r,c,l,"they",{N:s}),h=a&&a.lines[0]?-yi(a.lines[0]):yi(l),u=yi(l)-h,m=l.mate!=null&&l.mate>0||f.some(v=>["mate","mateN","fork","hanging","winMat","skewer","pin","discovered","discCheck","mateThreat"].includes(v.key))||u>120,y=f.slice(0,2).map(v=>v.text).join(" ");if(!m)return t?ge("k-calm",["Nothing bad is threatened right now. You can calmly make your plan! \u{1F60A}","All quiet! Nothing is threatening you right now."]):ge("calm",[`Nothing serious is threatened right now. ${s} would probably like to play ${Qt(d)}, but that\u2019s no reason to panic.`,`Relax, there\u2019s no immediate threat. ${s}\u2019s most active move would be ${Qt(d)}. ${y}`]);let g=r.board[c.fr][c.fc];if(t)return`Watch out! ${s} wants to move ${de(g.type,"dat","def",!0)} to ${pr(c.tr,c.tc)}. ${QE[(f[0]||{}).key]||"That would be unpleasant for you."} Protect yourself against it!`;let p=l.mate>0&&!f.some(v=>v.key==="mate"||v.key==="mateN")?` That would even be mate in ${l.mate===1?"one move":l.mate+" moves"}.`:"";return ge("threat",[`Careful, ${s} threatens ${Qt(d)}. ${y}${p}`,`Watch out, ${s} wants to ${Cp(d)} (${yr(d)}). ${y}${p}`])}async function nT(n){let e=K.state,t=ma(e),i=-1;for(let D=t.length-1;D>=0;D--)if(t[D][0].turn===n){i=D;break}if(i<0)return Ni()?"You haven\u2019t made a move yet. Go for it! \u{1F60A}":"You haven\u2019t moved in this game yet. Go ahead!";let[s,r]=t[i],o=Li(s,r),a=await es({...s,history:[]},{multipv:1,movetime:900}),l=xa.makeMove({...s,history:[]},xa.legalMoves({...s,history:[]}).find(D=>D.fr===r.fr&&D.fc===r.fc&&D.tr===r.tr&&D.tc===r.tc&&(D.promotion||"q")===(r.promotion||"q"))),c=xa.gameStatus({...l,history:[]}),d=c.type==="checkmate"?{lines:[{mate:0,scoreCp:null}]}:c.type==="stalemate"?{lines:[{scoreCp:0,mate:null}]}:await es({...l,history:[]},{multipv:1,movetime:900}),f=a.lines[0],h=d.lines[0],u=f?yi(f):0,m=c.type==="checkmate"?1e5:h?-yi(h):0,y=D=>Math.max(-1500,Math.min(1500,D)),g=y(u)-y(m),p=f&&mr(f.uci),v=p?Li(s,p):null,M=Ni(),_=uc(od(n)),S=Lt(Qt(o,M)),E=v?Qt(v,M):"";if(c.type==="checkmate")return M?`${S} was checkmate. Great job! \u{1F3C6}`:ge("lmMate",[`${S} was checkmate. It doesn\u2019t get better than that!`,`Checkmate with ${Qt(o)}. What else can I say? Perfect.`]);if(!v||v===o)return M?ge("k-lmTop",[`${S} was a really good move! \u{1F44D}`,`Great, ${pi(o,!0)} was exactly right! \u{1F44D}`]):ge("lmTop",[`${S} was really good \u2013 exactly what I would have played.`,`Top! ${S} was the best move in the position.`,`Nothing to complain about: ${Qt(o)} was the first choice.`]);if(g<40)return M?ge("k-lmOk",[`${S} was a good move! \u{1F44D}`,`${S} was great! \u{1F44D}`]):ge("lmOk",[`${S} was perfectly fine. ${Lt(E)} would have been a hair more precise, but that\u2019s splitting hairs.`,`Fine! ${S} was good. ${Lt(E)} was marginally better, but hardly worth mentioning.`]);let P={...s,history:[]};if(M)return`${S} was ${g>=120?"unfortunately not so good":"okay, but there was something better"}. Better would have been ${E}. ${sd({reasons:vr(P,p,f,"kid")})} ${ge("k-lmEnd",["It\u2019ll work next time! \u{1F4AA}","Chin up, that\u2019s how you learn the most! \u{1F4AA}"])}`;let x=vr(P,p,f,"du",{N:_}).slice(0,2).map(D=>D.text).join(" "),A=h&&h.uci?(()=>{let D=mr(h.uci);return D?Qt(Li({...l,history:[]},D)):null})():null,T=A?" "+ge("refut",[`Now ${_} has a strong reply with ${A}.`,`The problem: ${_} can now play ${A}.`]):"";if(g<120)return ge("lmSmall",[`${S} was okay, but not quite precise. ${Lt(E)} was stronger, by ${rc(g)}. ${x}`,`Almost! ${S} wasn\u2019t bad, but ${E} was a bit stronger. ${x}`]);let C=g>=300?"a blunder":"a mistake";return`${g>=300?ge("oops3",["Ouch.","Oof.","Oh dear."]):ge("oops2",["Hmm.","Honestly:","Well."])} ${S} was unfortunately ${C} \u2013 it cost ${rc(g)}. Better would have been ${E}. ${x}${T}`}async function iT(n,e){let t=Ni(),i=[],s=e==="w"?7:0,r=0;for(let h=0;h<8;h++){let u=n.board[s][h];u&&u.color===e&&(u.type==="n"||u.type==="b")&&r++}let o=(()=>{for(let h=0;h<8;h++)for(let u=0;u<8;u++){let m=n.board[h][u];if(m&&m.color===e&&m.type==="k")return{r:h,c:u}}return null})(),a=o&&o.r===s&&(o.c===6||o.c===2),l=0,c=0;for(let h of n.board)for(let u of h)u&&u.type!=="k"&&u.type!=="p"&&(l++,u.type==="q"&&c++);if(l<=4||c===0&&l<=6?i.push(t?"It\u2019s the endgame now! Bring your king to the middle and push your pawns forward.":ge("planEnd",["We\u2019re in the endgame. Now the king belongs in the center, passed pawns want to run, and rooks are best placed behind them.","Endgame time! Activate your king, push passed pawns and put the rooks behind them."])):(r>=2&&i.push(t?"First bring out your horses and bishops. All pieces should join in!":ge("planDev",[`You still have ${r} minor pieces on the back rank. Bring them out before you attack.`,`Develop first: ${r} knights and bishops are still waiting for action.`])),!a&&n.castling[e]&&(n.castling[e].K||n.castling[e].Q)&&i.push(t?"Castle soon so your king is safe.":ge("planCastle",["And think about your king: castling soon would be good.","Your king is still in the center. Castling would do him good."])),[[3,3],[3,4],[4,3],[4,4]].filter(([u,m])=>n.board[u][m]&&n.board[u][m].color===e&&n.board[u][m].type==="p").length===0&&i.push(t?"Put a pawn in the middle of the board!":`A pawn in the center, on ${e==="w"?"d4 or e4":"d5 or e5"}, would give you more space.`),i.length||i.push(t?"Look for enemy pieces that nobody is guarding, and put your rooks on empty roads.":ge("planMid",["Find your worst piece and improve it. Rooks belong on open files, and keep an eye out for undefended pieces and weak pawns.","The basic idea now: make your pieces more active, take open files and look for weaknesses on the other side."]))),(K.mode!=="bot"||n.turn==="w")&&!xa.gameStatus(n).type.match(/checkmate|stalemate/)){let h=await es(n,{multipv:1,movetime:900}),u=Fp(n,h);u[0]&&i.push(t?`A good next step would be ${pi(u[0].san,!0)}.`:`${ge("planNext",["Concretely, next I would play","As my next move I would play"])} ${Qt(u[0].san)}. ${u[0].reasons[0]?u[0].reasons[0].text:""}`.trim())}return i.slice(0,3).join(" ")}function sT(){let n=K.state,e=Ni(),t=ma(n),i=t.length?t[0][0]:n,s=ii(i).startsWith("rnbqkbnr/pppppppp/8/8/8/8/PPPPPPPP/RNBQKBNR w"),r=ii(n).split(" ")[0],o=jr.find(f=>f.group==="Openings"&&(f.fen.split(" ")[0]===r||t.some(([h])=>ii(h).split(" ")[0]===f.fen.split(" ")[0]))),a=null;if(s){let f=t.map(([h,u])=>Li(h,u).replace(/[+#]/g,"")).join(" ");for(let h of jE)if(f===h[0]||f.startsWith(h[0]+" ")){a=h;break}}let l=f=>jr.find(h=>h.id===f),c=f=>ge("openIntro",[`This is ${id(f)}${f}.`,`A classic! This is ${id(f)}${f}.`,`This is called ${id(f)}${f}.`]),d=f=>`This is ${id(f)}${f}! A really well-known start. What matters now: bring out your pieces, take the middle and get the king to safety by castling.`;if(a){let f=l(a[1]),h=f?f.title:a[1],u=f?f.explain:a[2];return e?d(h):`${c(h)} ${u}`}return o?e?d(o.title):`${c(o.title)} ${o.explain}`:!t.length&&s?e?"We\u2019re right at the start. A great first move is e4 or d4 \u2013 that takes you to the middle!":"Nothing has been played yet. Popular starts are 1.e4, open and active, 1.d4, more positional, 1.c4, the English, or 1.Nf3, nice and flexible.":e?"I don\u2019t know the name of this opening. But the rules are always the same: bring out your pieces, take the middle, castle!":"I can\u2019t match this position to a known opening. But the basic rules always apply: occupy the center, develop quickly, get the king to safety and don\u2019t bring the queen out too early."}var cc=null,rd=!1,Wy="";function no(n,e,t=""){let i=en("coachLog");if(!i)return null;let s=document.createElement("div");return s.className=`msg ${n} ${t}`,s.innerHTML=`<span class="who">${n==="coach"?"Coach \u{1F393}":n==="user"?"You":""}</span><span class="txt">${qE(e)}</span>`,i.appendChild(s),i.scrollTop=i.scrollHeight,s}function rT(n){if(!K.settings.coachSpeak)return;let e=to();if(!e.ttsAvailable())return;let t=Pp(n);Wy=t,e.speak(t,{lang:"en-US",rate:Ni()?.95:1.02,onStart:()=>{rd=!0,Du(!0),en("btnStopVoice").hidden=!1},onEnd:()=>{rd=!1,Du(!1),en("btnStopVoice").hidden=!0}})}async function hc(n){let e=String(n||"").trim();if(!e)return null;no("user",e);let t=no("coach",Ni()?ge("k-think",["One moment, let me look \u2026","Wait a sec, I\u2019m checking \u2026"]):ge("think",["One moment, let me take a look \u2026","Let me think for a second \u2026","Let me have a look \u2026"]),"pending"),i=Vy(e),s;try{s=await eT(i,e)}catch(r){console.warn("[Coach-Chat]",r),s="Oops, something went wrong on my end. Please ask me again."}return t&&t.remove(),no("coach",s),rT(s),K.mode==="bot"&&Math.random()<.35&&["best","hint","threat"].includes(i.intent)&&setTimeout(()=>Ht(ge("botTease",["Are you two whispering about me? \u{1F440}","The coach can talk all it wants. I have a plan. I think.","Coach and human against me? Unfair! I love it.","I\u2019m listening in. Just so you know."]),"think",!0),1600),{intent:i.intent,reply:s}}function Gy(n){return n==="unsupported"?"Voice input isn\u2019t available in this browser (e.g. Firefox). Just type your question below, or use Chrome, Edge or Safari.":n==="not-allowed"||n==="service-not-allowed"?location.protocol==="file:"?"The microphone is blocked because the game was opened as a file (file://). Open it via a local server (e.g. start.command \u2192 http://localhost) or the online version in Chrome or Safari and allow the microphone. Or just type your question.":"The microphone is blocked. Allow access via the lock icon in the address bar, or just type your question.":n==="network"?"Speech recognition in Chrome needs internet because it runs on Google\u2019s servers. Without a connection, please type your question.":n==="no-speech"?"I didn\u2019t hear anything. Press \u{1F399}\uFE0F again and just start talking.":n==="audio-capture"?"I can\u2019t find a microphone. Please type your question.":"Voice input didn\u2019t work just now. Just type your question."}function oT(){let n=en("btnMic"),e=to();if(cc){cc(),cc=null;return}let t=e.sttAvailable();if(!t.ok){no("coach",Gy(t.reason),"note");return}rd&&e.stopSpeaking();let i=en("coachQ");i.value="",i.placeholder="Listening \u2026 \u{1F399}\uFE0F",n.classList.add("listening"),n.textContent="\u23FA\uFE0F Listening \u2026",cc=e.listen({lang:"en-US",onInterim:s=>{i.value=s},onFinal:s=>{i.value="",hc(s)},onError:s=>{s!=="aborted"&&no("coach",Gy(s),"note")},onEnd:()=>{cc=null,n.classList.remove("listening"),n.textContent="\u{1F399}\uFE0F Ask by voice",i.placeholder="Ask the coach \u2026 e.g. \u201CWhat is threatened?\u201D"}})}function $y(){let n=K.settings;n.coachSpeak===void 0&&(n.coachSpeak=!0),n.coachKids===void 0&&(n.coachKids=!1);let e=()=>{try{localStorage.setItem("gbc-settings-v3",JSON.stringify(n))}catch{}};en("chkSpeak").checked=n.coachSpeak,en("chkKids").checked=n.coachKids,en("chkSpeak").addEventListener("change",()=>{n.coachSpeak=en("chkSpeak").checked,n.coachSpeak||to().stopSpeaking(),e()}),en("chkKids").addEventListener("change",()=>{n.coachKids=en("chkKids").checked,n.kidsRevealed=!1,e();let i=en("chkHintOnly");i&&n.coachKids?(n.hintBeforeKids=i.checked,i.checked||(i.checked=!0,i.dispatchEvent(new Event("change")))):i&&!n.coachKids&&n.hintBeforeKids===!1&&i.checked&&(i.checked=!1,i.dispatchEvent(new Event("change"))),no("coach",n.coachKids?"Kids mode on! I\u2019ll explain everything simply and always give you a little tip first. \u{1F60A}":"Kids mode off. From now on I\u2019ll use proper chess terms again.","note")}),en("btnAsk").addEventListener("click",()=>{let i=en("coachQ").value;en("coachQ").value="",hc(i)}),en("coachQ").addEventListener("keydown",i=>{if(i.stopPropagation(),i.key==="Enter"){i.preventDefault();let s=en("coachQ").value;en("coachQ").value="",hc(s)}}),en("btnMic").addEventListener("click",oT),en("btnStopVoice").addEventListener("click",()=>{to().stopSpeaking(),rd=!1,Du(!1),en("btnStopVoice").hidden=!0});for(let i of document.querySelectorAll("[data-ask]"))i.addEventListener("click",()=>hc(i.dataset.ask));to().sttAvailable().ok||(en("btnMic").title="Voice input isn\u2019t available here, please type",en("btnMic").classList.add("unavail")),no("coach",Ni()?"Hi! I\u2019m your coach. Just ask me \u2013 typed or spoken with \u{1F399}\uFE0F!":"Hi, I\u2019m your coach! Ask me anything, by \u{1F399}\uFE0F or typing. For example \u201CWhat is threatened?\u201D or \u201CWas my last move a mistake?\u201D","note"),window.__gbc&&(window.__gbc.coachChat={ask:hc,detectIntent:Vy,speakable:Pp,lastSpoken:()=>Wy,voiceName:()=>Oy(),adapterName:()=>to().name})}window.addEventListener("gbc-ready",()=>{try{Qe.frame.push((n,e)=>{Kg(n);for(let t of K.groups.values())mp(t,n,e);for(let t of K.extraGroups)mp(t,n,e)}),ny(),oy(),fy(),yy(),_y(),K.syncGroups(),K.renderHints();try{Ny(),$y()}catch(n){console.warn("[GBC] Coach disabled:",n)}window.__gbc&&(window.__gbc.p2={giantExpr:dy,startReplay:Zu,stopReplay:ic,pickHighlights:bp,recordingSupport:fa,isReplaying:my,applySkin:Sp,pieceSay:da,api:K,audio:{sfx:st,setMusic:ra,getAudioStream:Lu}})}catch(n){console.warn("[GBC] Extra effects disabled:",n)}},{once:!0});Wg();})();
/*! Bundled license information:

three/build/three.core.js:
three/build/three.module.js:
  (**
   * @license
   * Copyright 2010-2026 Three.js Authors
   * SPDX-License-Identifier: MIT
   *)
*/
