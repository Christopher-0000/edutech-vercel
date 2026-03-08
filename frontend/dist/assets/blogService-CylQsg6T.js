import{r as s}from"./index-DO2bWtde.js";import{b as n}from"./Footer-OgDVtsFW.js";/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const y=r=>r.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase(),b=r=>r.replace(/^([A-Z])|[\s-_]+(\w)/g,(e,t,a)=>a?a.toUpperCase():t.toLowerCase()),g=r=>{const e=b(r);return e.charAt(0).toUpperCase()+e.slice(1)},i=(...r)=>r.filter((e,t,a)=>!!e&&e.trim()!==""&&a.indexOf(e)===t).join(" ").trim();/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var f={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const p=s.forwardRef(({color:r="currentColor",size:e=24,strokeWidth:t=2,absoluteStrokeWidth:a,className:c="",children:o,iconNode:u,...d},m)=>s.createElement("svg",{ref:m,...f,width:e,height:e,stroke:r,strokeWidth:a?Number(t)*24/Number(e):t,className:i("lucide",c),...d},[...u.map(([h,w])=>s.createElement(h,w)),...Array.isArray(o)?o:[o]]));/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const $=(r,e)=>{const t=s.forwardRef(({className:a,...c},o)=>s.createElement(p,{ref:o,iconNode:e,className:i(`lucide-${y(g(r))}`,`lucide-${r}`,a),...c}));return t.displayName=g(r),t},C=r=>{if(!r)return"1 min read";const t=r.replace(/<[^>]*>?/gm,"").split(/\s+/).filter(c=>c.length>0).length,a=Math.ceil(t/200);return`${Math.max(1,a)} min read`},l=r=>{var c;if(!r)return null;const e=r.author||{},t=e.firstName?`${e.firstName} ${e.lastName||""}`.trim():typeof e=="string"?e:"EduTech",a=((c=r.category)==null?void 0:c.name)||r.category||"General";return{...r,id:r._id||r.id,image:r.featuredImage||"https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=600",author:t,date:r.publishedAt?new Date(r.publishedAt).toLocaleDateString("en-US",{month:"short",day:"numeric",year:"numeric"}):"Recent",readTime:C(r.content),category:a,tags:(r.tags||[]).map(o=>typeof o=="object"?o.name:o),excerpt:r.excerpt||"",slug:r.slug||r._id}},A={getAllBlogs:async()=>{try{return((await n.get("/blog")).posts||[]).map(l)}catch(r){throw console.error("Error fetching blogs:",r),r}},getFeaturedBlogs:async()=>{try{return((await n.get("/blog/featured")).posts||[]).map(l)}catch(r){throw console.error("Error fetching featured blogs:",r),r}},getBlogBySlug:async r=>{try{const e=await n.get(`/blog/${r}`);return l(e.post)}catch(e){throw console.error("Error fetching blog by slug:",e),e}},addBlog:async r=>{try{const e=await n.post("/blog",r);return e.post||e}catch(e){throw console.error("Error adding blog:",e),e}},updateBlog:async(r,e)=>{try{const t=await n.put(`/blog/${r}`,e);return t.post||t}catch(t){throw console.error("Error updating blog:",t),t}},deleteBlog:async r=>{try{return await n.delete(`/blog/${r}`)}catch(e){throw console.error("Error deleting blog:",e),e}},getCategories:async()=>{try{return((await n.get("/blog/categories")).categories||[]).map(e=>e.name)}catch(r){throw console.error("Error fetching categories:",r),r}},getTags:async()=>{try{return((await n.get("/blog/tags")).tags||[]).map(e=>e.name)}catch(r){throw console.error("Error fetching tags:",r),r}}};export{A as b,$ as c};
