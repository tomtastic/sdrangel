define(["./AttributeCompression-95366034","./Matrix2-46444433","./ComponentDatatype-692a36d3","./createTaskProcessorWorker","./RuntimeError-608565a6","./when-229515d6","./WebGLConstants-f63312fc"],(function(e,t,a,n,r,o,i){"use strict";const s=32767,c=new t.Cartographic,u=new t.Cartesian3,p=new t.Rectangle,l=new t.Ellipsoid,f={min:void 0,max:void 0};return n((function(n,r){const o=new Uint16Array(n.positions);!function(e){e=new Float64Array(e);let a=0;f.min=e[a++],f.max=e[a++],t.Rectangle.unpack(e,a,p),a+=t.Rectangle.packedLength,t.Ellipsoid.unpack(e,a,l)}(n.packedBuffer);const i=p,m=l,h=f.min,C=f.max,d=o.length/3,g=o.subarray(0,d),w=o.subarray(d,2*d),b=o.subarray(2*d,3*d);e.AttributeCompression.zigZagDeltaDecode(g,w,b);const k=new Float64Array(o.length);for(let e=0;e<d;++e){const n=g[e],r=w[e],o=b[e],p=a.CesiumMath.lerp(i.west,i.east,n/s),l=a.CesiumMath.lerp(i.south,i.north,r/s),f=a.CesiumMath.lerp(h,C,o/s),d=t.Cartographic.fromRadians(p,l,f,c),y=m.cartographicToCartesian(d,u);t.Cartesian3.pack(y,k,3*e)}return r.push(k.buffer),{positions:k.buffer}}))}));